import { inject as ie, createVNode as P, getCurrentInstance as Ce, ref as x, computed as _, unref as u, readonly as Os, getCurrentScope as Ms, onScopeDispose as Ts, onMounted as nt, nextTick as _e, watch as xe, isRef as Is, warn as Ps, provide as Ns, defineComponent as W, createElementBlock as N, openBlock as S, mergeProps as zs, renderSlot as Se, createElementVNode as c, normalizeClass as z, Transition as bt, withCtx as re, withDirectives as le, normalizeStyle as ke, createTextVNode as $s, toDisplayString as R, vShow as Ke, shallowReactive as Es, createBlock as J, createCommentVNode as Q, resolveDynamicComponent as wn, Fragment as be, withModifiers as Re, isVNode as We, render as Ze, onUnmounted as _n, renderList as Ls, vModelSelect as dt } from "vue";
const Rr = (e) => {
  e.registerRoute({
    target: "window",
    path: "/screen-recorder",
    name: "ScreenRecorder",
    component: () => Promise.resolve().then(() => Er)
  });
};
function Rs(e, t, n, s) {
  if (typeof t == "function" ? e !== t || !0 : !t.has(e)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
  return n === "m" ? s : n === "a" ? s.call(e) : s ? s.value : t.get(e);
}
function Ds(e, t, n, s, o) {
  if (typeof t == "function" ? e !== t || !0 : !t.has(e)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
  return t.set(e, n), n;
}
var Ue;
const V = "__TAURI_TO_IPC_KEY__";
function Ws(e, t = !1) {
  return window.__TAURI_INTERNALS__.transformCallback(e, t);
}
async function d(e, t = {}, n) {
  return window.__TAURI_INTERNALS__.invoke(e, t, n);
}
class As {
  get rid() {
    return Rs(this, Ue, "f");
  }
  constructor(t) {
    Ue.set(this, void 0), Ds(this, Ue, t);
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
    return new ce(this.width * t, this.height * t);
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
class ce {
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
class ye {
  constructor(t) {
    this.size = t;
  }
  toLogical(t) {
    return this.size instanceof Ct ? this.size : this.size.toLogical(t);
  }
  toPhysical(t) {
    return this.size instanceof ce ? this.size : this.size.toPhysical(t);
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
class bn {
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
    return new X(this.x * t, this.y * t);
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
class X {
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
    return new bn(this.x / t, this.y / t);
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
class Ge {
  constructor(t) {
    this.position = t;
  }
  toLogical(t) {
    return this.position instanceof bn ? this.position : this.position.toLogical(t);
  }
  toPhysical(t) {
    return this.position instanceof X ? this.position : this.position.toPhysical(t);
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
async function Cn(e, t) {
  await d("plugin:event|unlisten", {
    event: e,
    eventId: t
  });
}
async function Ye(e, t, n) {
  var s;
  const o = typeof n?.target == "string" ? { kind: "AnyLabel", label: n.target } : (s = n?.target) !== null && s !== void 0 ? s : { kind: "Any" };
  return d("plugin:event|listen", {
    event: e,
    target: o,
    handler: Ws(t)
  }).then((l) => async () => Cn(e, l));
}
async function Fs(e, t, n) {
  return Ye(e, (s) => {
    Cn(e, s.id), t(s);
  }, n);
}
async function js(e, t) {
  await d("plugin:event|emit", {
    event: e,
    payload: t
  });
}
async function Bs(e, t, n) {
  await d("plugin:event|emit_to", {
    target: typeof e == "string" ? { kind: "AnyLabel", label: e } : e,
    event: t,
    payload: n
  });
}
class De extends As {
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
    }).then((o) => new De(o));
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
    }).then((n) => new De(n));
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
    return d("plugin:image|from_path", { path: t }).then((n) => new De(n));
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
  return e == null ? null : typeof e == "string" ? e : e instanceof De ? e.rid : e;
}
var yt;
(function(e) {
  e[e.Critical = 1] = "Critical", e[e.Informational = 2] = "Informational";
})(yt || (yt = {}));
class Hs {
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
function xn() {
  return new Sn(window.__TAURI_INTERNALS__.metadata.currentWindow.label, {
    // @ts-expect-error `skip` is not defined in the public API but it is handled by the constructor
    skip: !0
  });
}
async function pt() {
  return d("plugin:window|get_all_windows").then((e) => e.map((t) => new Sn(t, {
    // @ts-expect-error `skip` is not defined in the public API but it is handled by the constructor
    skip: !0
  })));
}
const ht = ["tauri://created", "tauri://error"];
class Sn {
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
    return xn();
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
    } : Ye(t, n, {
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
    } : Fs(t, n, {
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
    return js(t, n);
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
    return Bs(t, n, s);
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
    }).then((t) => new X(t));
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
    }).then((t) => new X(t));
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
    }).then((t) => new ce(t));
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
    }).then((t) => new ce(t));
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
      value: t instanceof Ge ? t : new Ge(t)
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
      value: t instanceof Ge ? t : new Ge(t)
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
      n.payload = new ce(n.payload), t(n);
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
      n.payload = new X(n.payload), t(n);
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
      const s = new Hs(n);
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
    const n = await this.listen(B.DRAG_ENTER, (r) => {
      t({
        ...r,
        payload: {
          type: "enter",
          paths: r.payload.paths,
          position: new X(r.payload.position)
        }
      });
    }), s = await this.listen(B.DRAG_OVER, (r) => {
      t({
        ...r,
        payload: {
          type: "over",
          position: new X(r.payload.position)
        }
      });
    }), o = await this.listen(B.DRAG_DROP, (r) => {
      t({
        ...r,
        payload: {
          type: "drop",
          paths: r.payload.paths,
          position: new X(r.payload.position)
        }
      });
    }), l = await this.listen(B.DRAG_LEAVE, (r) => {
      t({ ...r, payload: { type: "leave" } });
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
var qt;
(function(e) {
  e.Disabled = "disabled", e.Throttle = "throttle", e.Suspend = "suspend";
})(qt || (qt = {}));
var Kt;
(function(e) {
  e.AppearanceBased = "appearanceBased", e.Light = "light", e.Dark = "dark", e.MediumLight = "mediumLight", e.UltraDark = "ultraDark", e.Titlebar = "titlebar", e.Selection = "selection", e.Menu = "menu", e.Popover = "popover", e.Sidebar = "sidebar", e.HeaderView = "headerView", e.Sheet = "sheet", e.WindowBackground = "windowBackground", e.HudWindow = "hudWindow", e.FullScreenUI = "fullScreenUI", e.Tooltip = "tooltip", e.ContentBackground = "contentBackground", e.UnderWindowBackground = "underWindowBackground", e.UnderPageBackground = "underPageBackground", e.Mica = "mica", e.Blur = "blur", e.Acrylic = "acrylic", e.Tabbed = "tabbed", e.TabbedDark = "tabbedDark", e.TabbedLight = "tabbedLight";
})(Kt || (Kt = {}));
var Zt;
(function(e) {
  e.FollowsWindowActiveState = "followsWindowActiveState", e.Active = "active", e.Inactive = "inactive";
})(Zt || (Zt = {}));
function Gs(e) {
  return e === null ? null : {
    name: e.name,
    scaleFactor: e.scaleFactor,
    position: new X(e.position),
    size: new ce(e.size)
  };
}
async function Us(e, t) {
  return d("plugin:window|monitor_from_point", {
    x: e,
    y: t
  }).then(Gs);
}
var Vs = {
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
function qs() {
  return "icon-" + ((1 + Math.random()) * 4294967296 | 0).toString(16).substring(1);
}
function Ks(e, t, n) {
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
var Zs = Symbol("icon-context");
function xt(e, t, n) {
  var s = {
    name: "icon-" + e,
    props: ["size", "strokeWidth", "strokeLinecap", "strokeLinejoin", "theme", "fill", "spin"],
    setup: function(l) {
      var r = qs(), p = ie(Zs, Vs);
      return function() {
        var h = l.size, v = l.strokeWidth, f = l.strokeLinecap, C = l.strokeLinejoin, M = l.theme, T = l.fill, G = l.spin, y = Ks(r, {
          size: h,
          strokeWidth: v,
          strokeLinecap: f,
          strokeLinejoin: C,
          theme: M,
          fill: T
        }, p), g = [p.prefix + "-icon"];
        return g.push(p.prefix + "-icon-" + e), G && g.push(p.prefix + "-icon-spin"), P("span", {
          class: g.join(" ")
        }, [n(y)]);
      };
    }
  };
  return s;
}
const Ys = xt("close-small", !1, function(e) {
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
}), Xs = xt("minus", !1, function(e) {
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
}), Js = xt("radar", !1, function(e) {
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
}), kn = Symbol(), Ve = "el", Qs = "is-", oe = (e, t, n, s, o) => {
  let l = `${e}-${t}`;
  return n && (l += `-${n}`), s && (l += `__${s}`), o && (l += `--${o}`), l;
}, On = Symbol("namespaceContextKey"), eo = (e) => {
  const t = e || (Ce() ? ie(On, x(Ve)) : x(Ve));
  return _(() => u(t) || Ve);
}, St = (e, t) => {
  const n = eo(t);
  return {
    namespace: n,
    b: (y = "") => oe(n.value, e, y, "", ""),
    e: (y) => y ? oe(n.value, e, "", y, "") : "",
    m: (y) => y ? oe(n.value, e, "", "", y) : "",
    be: (y, g) => y && g ? oe(n.value, e, y, g, "") : "",
    em: (y, g) => y && g ? oe(n.value, e, "", y, g) : "",
    bm: (y, g) => y && g ? oe(n.value, e, y, "", g) : "",
    bem: (y, g, b) => y && g && b ? oe(n.value, e, y, g, b) : "",
    is: (y, ...g) => {
      const b = g.length >= 1 ? g[0] : !0;
      return y && b ? `${Qs}${y}` : "";
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
const to = Object.prototype.hasOwnProperty, Yt = (e, t) => to.call(e, t), Ae = (e) => typeof e == "function", ue = (e) => typeof e == "string", Mn = (e) => e !== null && typeof e == "object";
var no = typeof global == "object" && global && global.Object === Object && global, so = typeof self == "object" && self && self.Object === Object && self, kt = no || so || Function("return this")(), Oe = kt.Symbol, Tn = Object.prototype, oo = Tn.hasOwnProperty, ao = Tn.toString, Le = Oe ? Oe.toStringTag : void 0;
function io(e) {
  var t = oo.call(e, Le), n = e[Le];
  try {
    e[Le] = void 0;
    var s = !0;
  } catch {
  }
  var o = ao.call(e);
  return s && (t ? e[Le] = n : delete e[Le]), o;
}
var ro = Object.prototype, lo = ro.toString;
function co(e) {
  return lo.call(e);
}
var uo = "[object Null]", po = "[object Undefined]", Xt = Oe ? Oe.toStringTag : void 0;
function In(e) {
  return e == null ? e === void 0 ? po : uo : Xt && Xt in Object(e) ? io(e) : co(e);
}
function ho(e) {
  return e != null && typeof e == "object";
}
var fo = "[object Symbol]";
function Ot(e) {
  return typeof e == "symbol" || ho(e) && In(e) == fo;
}
function go(e, t) {
  for (var n = -1, s = e == null ? 0 : e.length, o = Array(s); ++n < s; )
    o[n] = t(e[n], n, e);
  return o;
}
var Mt = Array.isArray, Jt = Oe ? Oe.prototype : void 0, Qt = Jt ? Jt.toString : void 0;
function Pn(e) {
  if (typeof e == "string")
    return e;
  if (Mt(e))
    return go(e, Pn) + "";
  if (Ot(e))
    return Qt ? Qt.call(e) : "";
  var t = e + "";
  return t == "0" && 1 / e == -1 / 0 ? "-0" : t;
}
function Nn(e) {
  var t = typeof e;
  return e != null && (t == "object" || t == "function");
}
var vo = "[object AsyncFunction]", yo = "[object Function]", mo = "[object GeneratorFunction]", wo = "[object Proxy]";
function _o(e) {
  if (!Nn(e))
    return !1;
  var t = In(e);
  return t == yo || t == mo || t == vo || t == wo;
}
var ft = kt["__core-js_shared__"], en = function() {
  var e = /[^.]+$/.exec(ft && ft.keys && ft.keys.IE_PROTO || "");
  return e ? "Symbol(src)_1." + e : "";
}();
function bo(e) {
  return !!en && en in e;
}
var Co = Function.prototype, xo = Co.toString;
function So(e) {
  if (e != null) {
    try {
      return xo.call(e);
    } catch {
    }
    try {
      return e + "";
    } catch {
    }
  }
  return "";
}
var ko = /[\\^$.*+?()[\]{}|]/g, Oo = /^\[object .+?Constructor\]$/, Mo = Function.prototype, To = Object.prototype, Io = Mo.toString, Po = To.hasOwnProperty, No = RegExp(
  "^" + Io.call(Po).replace(ko, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$"
);
function zo(e) {
  if (!Nn(e) || bo(e))
    return !1;
  var t = _o(e) ? No : Oo;
  return t.test(So(e));
}
function $o(e, t) {
  return e?.[t];
}
function zn(e, t) {
  var n = $o(e, t);
  return zo(n) ? n : void 0;
}
function Eo(e, t) {
  return e === t || e !== e && t !== t;
}
var Lo = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/, Ro = /^\w*$/;
function Do(e, t) {
  if (Mt(e))
    return !1;
  var n = typeof e;
  return n == "number" || n == "symbol" || n == "boolean" || e == null || Ot(e) ? !0 : Ro.test(e) || !Lo.test(e) || t != null && e in Object(t);
}
var Fe = zn(Object, "create");
function Wo() {
  this.__data__ = Fe ? Fe(null) : {}, this.size = 0;
}
function Ao(e) {
  var t = this.has(e) && delete this.__data__[e];
  return this.size -= t ? 1 : 0, t;
}
var Fo = "__lodash_hash_undefined__", jo = Object.prototype, Bo = jo.hasOwnProperty;
function Ho(e) {
  var t = this.__data__;
  if (Fe) {
    var n = t[e];
    return n === Fo ? void 0 : n;
  }
  return Bo.call(t, e) ? t[e] : void 0;
}
var Go = Object.prototype, Uo = Go.hasOwnProperty;
function Vo(e) {
  var t = this.__data__;
  return Fe ? t[e] !== void 0 : Uo.call(t, e);
}
var qo = "__lodash_hash_undefined__";
function Ko(e, t) {
  var n = this.__data__;
  return this.size += this.has(e) ? 0 : 1, n[e] = Fe && t === void 0 ? qo : t, this;
}
function de(e) {
  var t = -1, n = e == null ? 0 : e.length;
  for (this.clear(); ++t < n; ) {
    var s = e[t];
    this.set(s[0], s[1]);
  }
}
de.prototype.clear = Wo;
de.prototype.delete = Ao;
de.prototype.get = Ho;
de.prototype.has = Vo;
de.prototype.set = Ko;
function Zo() {
  this.__data__ = [], this.size = 0;
}
function st(e, t) {
  for (var n = e.length; n--; )
    if (Eo(e[n][0], t))
      return n;
  return -1;
}
var Yo = Array.prototype, Xo = Yo.splice;
function Jo(e) {
  var t = this.__data__, n = st(t, e);
  if (n < 0)
    return !1;
  var s = t.length - 1;
  return n == s ? t.pop() : Xo.call(t, n, 1), --this.size, !0;
}
function Qo(e) {
  var t = this.__data__, n = st(t, e);
  return n < 0 ? void 0 : t[n][1];
}
function ea(e) {
  return st(this.__data__, e) > -1;
}
function ta(e, t) {
  var n = this.__data__, s = st(n, e);
  return s < 0 ? (++this.size, n.push([e, t])) : n[s][1] = t, this;
}
function Ie(e) {
  var t = -1, n = e == null ? 0 : e.length;
  for (this.clear(); ++t < n; ) {
    var s = e[t];
    this.set(s[0], s[1]);
  }
}
Ie.prototype.clear = Zo;
Ie.prototype.delete = Jo;
Ie.prototype.get = Qo;
Ie.prototype.has = ea;
Ie.prototype.set = ta;
var na = zn(kt, "Map");
function sa() {
  this.size = 0, this.__data__ = {
    hash: new de(),
    map: new (na || Ie)(),
    string: new de()
  };
}
function oa(e) {
  var t = typeof e;
  return t == "string" || t == "number" || t == "symbol" || t == "boolean" ? e !== "__proto__" : e === null;
}
function ot(e, t) {
  var n = e.__data__;
  return oa(t) ? n[typeof t == "string" ? "string" : "hash"] : n.map;
}
function aa(e) {
  var t = ot(this, e).delete(e);
  return this.size -= t ? 1 : 0, t;
}
function ia(e) {
  return ot(this, e).get(e);
}
function ra(e) {
  return ot(this, e).has(e);
}
function la(e, t) {
  var n = ot(this, e), s = n.size;
  return n.set(e, t), this.size += n.size == s ? 0 : 1, this;
}
function he(e) {
  var t = -1, n = e == null ? 0 : e.length;
  for (this.clear(); ++t < n; ) {
    var s = e[t];
    this.set(s[0], s[1]);
  }
}
he.prototype.clear = sa;
he.prototype.delete = aa;
he.prototype.get = ia;
he.prototype.has = ra;
he.prototype.set = la;
var ca = "Expected a function";
function Tt(e, t) {
  if (typeof e != "function" || t != null && typeof t != "function")
    throw new TypeError(ca);
  var n = function() {
    var s = arguments, o = t ? t.apply(this, s) : s[0], l = n.cache;
    if (l.has(o))
      return l.get(o);
    var r = e.apply(this, s);
    return n.cache = l.set(o, r) || l, r;
  };
  return n.cache = new (Tt.Cache || he)(), n;
}
Tt.Cache = he;
var ua = 500;
function da(e) {
  var t = Tt(e, function(s) {
    return n.size === ua && n.clear(), s;
  }), n = t.cache;
  return t;
}
var pa = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g, ha = /\\(\\)?/g, fa = da(function(e) {
  var t = [];
  return e.charCodeAt(0) === 46 && t.push(""), e.replace(pa, function(n, s, o, l) {
    t.push(o ? l.replace(ha, "$1") : s || n);
  }), t;
});
function ga(e) {
  return e == null ? "" : Pn(e);
}
function va(e, t) {
  return Mt(e) ? e : Do(e, t) ? [e] : fa(ga(e));
}
function ya(e) {
  if (typeof e == "string" || Ot(e))
    return e;
  var t = e + "";
  return t == "0" && 1 / e == -1 / 0 ? "-0" : t;
}
function ma(e, t) {
  t = va(t, e);
  for (var n = 0, s = t.length; e != null && n < s; )
    e = e[ya(t[n++])];
  return n && n == s ? e : void 0;
}
function wa(e, t, n) {
  var s = e == null ? void 0 : ma(e, t);
  return s === void 0 ? n : s;
}
function _a(e) {
  for (var t = -1, n = e == null ? 0 : e.length, s = {}; ++t < n; ) {
    var o = e[t];
    s[o[0]] = o[1];
  }
  return s;
}
const $n = (e) => e === void 0, tn = (e) => typeof e == "boolean", pe = (e) => typeof e == "number", mt = (e) => typeof Element > "u" ? !1 : e instanceof Element, ba = (e) => ue(e) ? !Number.isNaN(Number(e)) : !1;
var nn;
const fe = typeof window < "u", Ca = (e) => typeof e == "string", xa = () => {
};
fe && ((nn = window?.navigator) != null && nn.userAgent) && /iP(ad|hone|od)/.test(window.navigator.userAgent);
function It(e) {
  return typeof e == "function" ? e() : u(e);
}
function Sa(e) {
  return e;
}
function Pt(e) {
  return Ms() ? (Ts(e), !0) : !1;
}
function ka(e, t = !0) {
  Ce() ? nt(e) : t ? e() : _e(e);
}
function En(e, t, n = {}) {
  const {
    immediate: s = !0
  } = n, o = x(!1);
  let l = null;
  function r() {
    l && (clearTimeout(l), l = null);
  }
  function p() {
    o.value = !1, r();
  }
  function h(...v) {
    r(), o.value = !0, l = setTimeout(() => {
      o.value = !1, l = null, e(...v);
    }, It(t));
  }
  return s && (o.value = !0, fe && h()), Pt(p), {
    isPending: Os(o),
    start: h,
    stop: p
  };
}
function Ln(e) {
  var t;
  const n = It(e);
  return (t = n?.$el) != null ? t : n;
}
const Rn = fe ? window : void 0;
function Dn(...e) {
  let t, n, s, o;
  if (Ca(e[0]) || Array.isArray(e[0]) ? ([n, s, o] = e, t = Rn) : [t, n, s, o] = e, !t)
    return xa;
  Array.isArray(n) || (n = [n]), Array.isArray(s) || (s = [s]);
  const l = [], r = () => {
    l.forEach((f) => f()), l.length = 0;
  }, p = (f, C, M, T) => (f.addEventListener(C, M, T), () => f.removeEventListener(C, M, T)), h = xe(() => [Ln(t), It(o)], ([f, C]) => {
    r(), f && l.push(...n.flatMap((M) => s.map((T) => p(f, M, T, C))));
  }, { immediate: !0, flush: "post" }), v = () => {
    h(), r();
  };
  return Pt(v), v;
}
function Oa(e, t = !1) {
  const n = x(), s = () => n.value = !!e();
  return s(), ka(s, t), n;
}
const sn = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {}, on = "__vueuse_ssr_handlers__";
sn[on] = sn[on] || {};
var an = Object.getOwnPropertySymbols, Ma = Object.prototype.hasOwnProperty, Ta = Object.prototype.propertyIsEnumerable, Ia = (e, t) => {
  var n = {};
  for (var s in e)
    Ma.call(e, s) && t.indexOf(s) < 0 && (n[s] = e[s]);
  if (e != null && an)
    for (var s of an(e))
      t.indexOf(s) < 0 && Ta.call(e, s) && (n[s] = e[s]);
  return n;
};
function Pa(e, t, n = {}) {
  const s = n, { window: o = Rn } = s, l = Ia(s, ["window"]);
  let r;
  const p = Oa(() => o && "ResizeObserver" in o), h = () => {
    r && (r.disconnect(), r = void 0);
  }, v = xe(() => Ln(e), (C) => {
    h(), p.value && o && C && (r = new ResizeObserver(t), r.observe(C, l));
  }, { immediate: !0, flush: "post" }), f = () => {
    h(), v();
  };
  return Pt(f), {
    isSupported: p,
    stop: f
  };
}
var rn;
(function(e) {
  e.UP = "UP", e.RIGHT = "RIGHT", e.DOWN = "DOWN", e.LEFT = "LEFT", e.NONE = "NONE";
})(rn || (rn = {}));
var Na = Object.defineProperty, ln = Object.getOwnPropertySymbols, za = Object.prototype.hasOwnProperty, $a = Object.prototype.propertyIsEnumerable, cn = (e, t, n) => t in e ? Na(e, t, { enumerable: !0, configurable: !0, writable: !0, value: n }) : e[t] = n, Ea = (e, t) => {
  for (var n in t || (t = {}))
    za.call(t, n) && cn(e, n, t[n]);
  if (ln)
    for (var n of ln(t))
      $a.call(t, n) && cn(e, n, t[n]);
  return e;
};
const La = {
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
Ea({
  linear: Sa
}, La);
const un = {
  current: 0
}, dn = x(0), Wn = 2e3, pn = Symbol("elZIndexContextKey"), An = Symbol("zIndexContextKey"), Ra = (e) => {
  const t = Ce() ? ie(pn, un) : un, n = e || (Ce() ? ie(An, void 0) : void 0), s = _(() => {
    const r = u(n);
    return pe(r) ? r : Wn;
  }), o = _(() => s.value + dn.value), l = () => (t.current++, dn.value = t.current, o.value);
  return !fe && ie(pn), {
    initialZIndex: s,
    currentZIndex: o,
    nextZIndex: l
  };
};
var Da = {
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
const Wa = (e) => (t, n) => Aa(t, n, u(e)), Aa = (e, t, n) => wa(n, e, e).replace(/\{(\w+)\}/g, (s, o) => {
  var l;
  return `${(l = t?.[o]) != null ? l : `{${o}}`}`;
}), Fa = (e) => {
  const t = _(() => u(e).name), n = Is(e) ? e : x(e);
  return {
    lang: t,
    locale: n,
    t: Wa(e)
  };
}, Fn = Symbol("localeContextKey"), ja = (e) => {
  const t = e || ie(Fn, x());
  return Fa(_(() => t.value || Da));
}, jn = "__epPropKey", H = (e) => e, Ba = (e) => Mn(e) && !!e[jn], Bn = (e, t) => {
  if (!Mn(e) || Ba(e))
    return e;
  const { values: n, required: s, default: o, type: l, validator: r } = e, h = {
    type: l,
    required: !!s,
    validator: n || r ? (v) => {
      let f = !1, C = [];
      if (n && (C = Array.from(n), Yt(e, "default") && C.push(o), f || (f = C.includes(v))), r && (f || (f = r(v))), !f && C.length > 0) {
        const M = [...new Set(C)].map((T) => JSON.stringify(T)).join(", ");
        Ps(`Invalid prop: validation failed${t ? ` for prop "${t}"` : ""}. Expected one of [${M}], got value ${JSON.stringify(v)}.`);
      }
      return f;
    } : void 0,
    [jn]: !0
  };
  return Yt(e, "default") && (h.default = o), h;
}, Pe = (e) => _a(Object.entries(e).map(([t, n]) => [
  t,
  Bn(n, t)
])), Ha = ["", "default", "small", "large"], Ga = Bn({
  type: String,
  values: Ha,
  required: !1
}), Ua = Symbol("size"), Va = Symbol("emptyValuesContextKey"), qa = Pe({
  emptyValues: Array,
  valueOnClear: {
    type: [String, Number, Boolean, Function],
    default: void 0,
    validator: (e) => Ae(e) ? !e() : !e
  }
}), hn = (e) => Object.keys(e), Je = x();
function Hn(e, t = void 0) {
  return Ce() ? ie(kn, Je) : Je;
}
function Gn(e, t) {
  const n = Hn(), s = St(e, _(() => {
    var p;
    return ((p = n.value) == null ? void 0 : p.namespace) || Ve;
  })), o = ja(_(() => {
    var p;
    return (p = n.value) == null ? void 0 : p.locale;
  })), l = Ra(_(() => {
    var p;
    return ((p = n.value) == null ? void 0 : p.zIndex) || Wn;
  })), r = _(() => {
    var p;
    return u(t) || ((p = n.value) == null ? void 0 : p.size) || "";
  });
  return Un(_(() => u(n) || {})), {
    ns: s,
    locale: o,
    zIndex: l,
    size: r
  };
}
const Un = (e, t, n = !1) => {
  var s;
  const o = !!Ce(), l = o ? Hn() : void 0, r = (s = void 0) != null ? s : o ? Ns : void 0;
  if (!r)
    return;
  const p = _(() => {
    const h = u(e);
    return l?.value ? Ka(l.value, h) : h;
  });
  return r(kn, p), r(Fn, _(() => p.value.locale)), r(On, _(() => p.value.namespace)), r(An, _(() => p.value.zIndex)), r(Ua, {
    size: _(() => p.value.size || "")
  }), r(Va, _(() => ({
    emptyValues: p.value.emptyValues,
    valueOnClear: p.value.valueOnClear
  }))), (n || !Je.value) && (Je.value = p.value), p;
}, Ka = (e, t) => {
  const n = [.../* @__PURE__ */ new Set([...hn(e), ...hn(t)])], s = {};
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
  if (pe(e) || ba(e))
    return `${e}${t}`;
  if (ue(e))
    return e;
}
const Vn = (e, t) => (e.install = (n) => {
  for (const s of [e, ...Object.values({})])
    n.component(s.name, s);
}, e), qn = (e, t) => (e.install = (n) => {
  e._context = n._context, n.config.globalProperties[t] = e;
}, e), Za = Pe({
  size: {
    type: H([Number, String])
  },
  color: {
    type: String
  }
}), Ya = W({
  name: "ElIcon",
  inheritAttrs: !1
}), Xa = /* @__PURE__ */ W({
  ...Ya,
  props: Za,
  setup(e) {
    const t = e, n = St("icon"), s = _(() => {
      const { size: o, color: l } = t;
      return !o && !l ? {} : {
        fontSize: $n(o) ? void 0 : wt(o),
        "--color": l
      };
    });
    return (o, l) => (S(), N("i", zs({
      class: u(n).b(),
      style: u(s)
    }, o.$attrs), [
      Se(o.$slots, "default")
    ], 16));
  }
});
var Ja = /* @__PURE__ */ at(Xa, [["__file", "icon.vue"]]);
const Qe = Vn(Ja);
/*! Element Plus Icons Vue v2.3.1 */
var Qa = /* @__PURE__ */ W({
  name: "CircleCloseFilled",
  __name: "circle-close-filled",
  setup(e) {
    return (t, n) => (S(), N("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 1024 1024"
    }, [
      c("path", {
        fill: "currentColor",
        d: "M512 64a448 448 0 1 1 0 896 448 448 0 0 1 0-896m0 393.664L407.936 353.6a38.4 38.4 0 1 0-54.336 54.336L457.664 512 353.6 616.064a38.4 38.4 0 1 0 54.336 54.336L512 566.336 616.064 670.4a38.4 38.4 0 1 0 54.336-54.336L566.336 512 670.4 407.936a38.4 38.4 0 1 0-54.336-54.336z"
      })
    ]));
  }
}), ei = Qa, ti = /* @__PURE__ */ W({
  name: "Close",
  __name: "close",
  setup(e) {
    return (t, n) => (S(), N("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 1024 1024"
    }, [
      c("path", {
        fill: "currentColor",
        d: "M764.288 214.592 512 466.88 259.712 214.592a31.936 31.936 0 0 0-45.12 45.12L466.752 512 214.528 764.224a31.936 31.936 0 1 0 45.12 45.184L512 557.184l252.288 252.288a31.936 31.936 0 0 0 45.12-45.12L557.12 512.064l252.288-252.352a31.936 31.936 0 1 0-45.12-45.184z"
      })
    ]));
  }
}), Kn = ti, ni = /* @__PURE__ */ W({
  name: "InfoFilled",
  __name: "info-filled",
  setup(e) {
    return (t, n) => (S(), N("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 1024 1024"
    }, [
      c("path", {
        fill: "currentColor",
        d: "M512 64a448 448 0 1 1 0 896.064A448 448 0 0 1 512 64m67.2 275.072c33.28 0 60.288-23.104 60.288-57.344s-27.072-57.344-60.288-57.344c-33.28 0-60.16 23.104-60.16 57.344s26.88 57.344 60.16 57.344M590.912 699.2c0-6.848 2.368-24.64 1.024-34.752l-52.608 60.544c-10.88 11.456-24.512 19.392-30.912 17.28a12.992 12.992 0 0 1-8.256-14.72l87.68-276.992c7.168-35.136-12.544-67.2-54.336-71.296-44.096 0-108.992 44.736-148.48 101.504 0 6.784-1.28 23.68.064 33.792l52.544-60.608c10.88-11.328 23.552-19.328 29.952-17.152a12.8 12.8 0 0 1 7.808 16.128L388.48 728.576c-10.048 32.256 8.96 63.872 55.04 71.04 67.84 0 107.904-43.648 147.456-100.416z"
      })
    ]));
  }
}), si = ni, oi = /* @__PURE__ */ W({
  name: "SuccessFilled",
  __name: "success-filled",
  setup(e) {
    return (t, n) => (S(), N("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 1024 1024"
    }, [
      c("path", {
        fill: "currentColor",
        d: "M512 64a448 448 0 1 1 0 896 448 448 0 0 1 0-896m-55.808 536.384-99.52-99.584a38.4 38.4 0 1 0-54.336 54.336l126.72 126.72a38.272 38.272 0 0 0 54.336 0l262.4-262.464a38.4 38.4 0 1 0-54.272-54.336z"
      })
    ]));
  }
}), ai = oi, ii = /* @__PURE__ */ W({
  name: "WarningFilled",
  __name: "warning-filled",
  setup(e) {
    return (t, n) => (S(), N("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 1024 1024"
    }, [
      c("path", {
        fill: "currentColor",
        d: "M512 64a448 448 0 1 1 0 896 448 448 0 0 1 0-896m0 192a58.432 58.432 0 0 0-58.24 63.744l23.36 256.384a35.072 35.072 0 0 0 69.76 0l23.296-256.384A58.432 58.432 0 0 0 512 256m0 512a51.2 51.2 0 1 0 0-102.4 51.2 51.2 0 0 0 0 102.4"
      })
    ]));
  }
}), ri = ii;
const Zn = H([
  String,
  Object,
  Function
]), li = {
  Close: Kn
}, ci = {
  Close: Kn
}, et = {
  success: ai,
  warning: ri,
  error: ei,
  info: si
}, ui = (e) => e, qe = {
  esc: "Escape",
  delete: "Delete",
  backspace: "Backspace"
}, di = Pe({
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
}), pi = W({
  name: "ElBadge"
}), hi = /* @__PURE__ */ W({
  ...pi,
  props: di,
  setup(e, { expose: t }) {
    const n = e, s = St("badge"), o = _(() => n.isDot ? "" : pe(n.value) && pe(n.max) ? n.max < n.value ? `${n.max}+` : `${n.value}` : `${n.value}`), l = _(() => {
      var r, p, h, v, f;
      return [
        {
          backgroundColor: n.color,
          marginRight: wt(-((p = (r = n.offset) == null ? void 0 : r[0]) != null ? p : 0)),
          marginTop: wt((v = (h = n.offset) == null ? void 0 : h[1]) != null ? v : 0)
        },
        (f = n.badgeStyle) != null ? f : {}
      ];
    });
    return t({
      content: o
    }), (r, p) => (S(), N("div", {
      class: z(u(s).b())
    }, [
      Se(r.$slots, "default"),
      P(bt, {
        name: `${u(s).namespace.value}-zoom-in-center`,
        persisted: ""
      }, {
        default: re(() => [
          le(c("sup", {
            class: z([
              u(s).e("content"),
              u(s).em("content", r.type),
              u(s).is("fixed", !!r.$slots.default),
              u(s).is("dot", r.isDot),
              u(s).is("hide-zero", !r.showZero && n.value === 0),
              r.badgeClass
            ]),
            style: ke(u(l))
          }, [
            Se(r.$slots, "content", { value: u(o) }, () => [
              $s(R(u(o)), 1)
            ])
          ], 6), [
            [Ke, !r.hidden && (u(o) || r.isDot || r.$slots.content)]
          ])
        ]),
        _: 3
      }, 8, ["name"])
    ], 2));
  }
});
var fi = /* @__PURE__ */ at(hi, [["__file", "badge.vue"]]);
const gi = Vn(fi), vi = Pe({
  a11y: {
    type: Boolean,
    default: !0
  },
  locale: {
    type: H(Object)
  },
  size: Ga,
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
  ...qa
}), Z = {};
W({
  name: "ElConfigProvider",
  props: vi,
  setup(e, { slots: t }) {
    xe(() => e.message, (s) => {
      Object.assign(Z, s ?? {});
    }, { immediate: !0, deep: !0 });
    const n = Un(e);
    return () => Se(t, "default", { config: n?.value });
  }
});
const Yn = ["success", "info", "warning", "error"], L = ui({
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
}), yi = Pe({
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
    type: Zn,
    default: L.icon
  },
  id: {
    type: String,
    default: L.id
  },
  message: {
    type: H([
      String,
      Object,
      Function
    ]),
    default: L.message
  },
  onClose: {
    type: H(Function),
    default: L.onClose
  },
  showClose: {
    type: Boolean,
    default: L.showClose
  },
  type: {
    type: String,
    values: Yn,
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
}), mi = {
  destroy: () => !0
}, Y = Es([]), wi = (e) => {
  const t = Y.findIndex((o) => o.id === e), n = Y[t];
  let s;
  return t > 0 && (s = Y[t - 1]), { current: n, prev: s };
}, _i = (e) => {
  const { prev: t } = wi(e);
  return t ? t.vm.exposed.bottom.value : 0;
}, bi = (e, t) => Y.findIndex((s) => s.id === e) > 0 ? 16 : t, Ci = W({
  name: "ElMessage"
}), xi = /* @__PURE__ */ W({
  ...Ci,
  props: yi,
  emits: mi,
  setup(e, { expose: t }) {
    const n = e, { Close: s } = ci, { ns: o, zIndex: l } = Gn("message"), { currentZIndex: r, nextZIndex: p } = l, h = x(), v = x(!1), f = x(0);
    let C;
    const M = _(() => n.type ? n.type === "error" ? "danger" : n.type : "info"), T = _(() => {
      const O = n.type;
      return { [o.bm("icon", O)]: O && et[O] };
    }), G = _(() => n.icon || et[n.type] || ""), y = _(() => _i(n.id)), g = _(() => bi(n.id, n.offset) + y.value), b = _(() => f.value + g.value), F = _(() => ({
      top: `${g.value}px`,
      zIndex: r.value
    }));
    function m() {
      n.duration !== 0 && ({ stop: C } = En(() => {
        D();
      }, n.duration));
    }
    function te() {
      C?.();
    }
    function D() {
      v.value = !1;
    }
    function ge({ code: O }) {
      O === qe.esc && D();
    }
    return nt(() => {
      m(), p(), v.value = !0;
    }), xe(() => n.repeatNum, () => {
      te(), m();
    }), Dn(document, "keydown", ge), Pa(h, () => {
      f.value = h.value.getBoundingClientRect().height;
    }), t({
      visible: v,
      bottom: b,
      close: D
    }), (O, Nt) => (S(), J(bt, {
      name: u(o).b("fade"),
      onBeforeLeave: O.onClose,
      onAfterLeave: (zt) => O.$emit("destroy"),
      persisted: ""
    }, {
      default: re(() => [
        le(c("div", {
          id: O.id,
          ref_key: "messageRef",
          ref: h,
          class: z([
            u(o).b(),
            { [u(o).m(O.type)]: O.type },
            u(o).is("center", O.center),
            u(o).is("closable", O.showClose),
            u(o).is("plain", O.plain),
            O.customClass
          ]),
          style: ke(u(F)),
          role: "alert",
          onMouseenter: te,
          onMouseleave: m
        }, [
          O.repeatNum > 1 ? (S(), J(u(gi), {
            key: 0,
            value: O.repeatNum,
            type: u(M),
            class: z(u(o).e("badge"))
          }, null, 8, ["value", "type", "class"])) : Q("v-if", !0),
          u(G) ? (S(), J(u(Qe), {
            key: 1,
            class: z([u(o).e("icon"), u(T)])
          }, {
            default: re(() => [
              (S(), J(wn(u(G))))
            ]),
            _: 1
          }, 8, ["class"])) : Q("v-if", !0),
          Se(O.$slots, "default", {}, () => [
            O.dangerouslyUseHTMLString ? (S(), N(be, { key: 1 }, [
              Q(" Caution here, message could've been compromised, never use user's input as message "),
              c("p", {
                class: z(u(o).e("content")),
                innerHTML: O.message
              }, null, 10, ["innerHTML"])
            ], 2112)) : (S(), N("p", {
              key: 0,
              class: z(u(o).e("content"))
            }, R(O.message), 3))
          ]),
          O.showClose ? (S(), J(u(Qe), {
            key: 2,
            class: z(u(o).e("closeBtn")),
            onClick: Re(D, ["stop"])
          }, {
            default: re(() => [
              P(u(s))
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
var Si = /* @__PURE__ */ at(xi, [["__file", "message.vue"]]);
let ki = 1;
const Xn = (e) => {
  const t = !e || ue(e) || We(e) || Ae(e) ? { message: e } : e, n = {
    ...L,
    ...t
  };
  if (!n.appendTo)
    n.appendTo = document.body;
  else if (ue(n.appendTo)) {
    let s = document.querySelector(n.appendTo);
    mt(s) || (s = document.body), n.appendTo = s;
  }
  return tn(Z.grouping) && !n.grouping && (n.grouping = Z.grouping), pe(Z.duration) && n.duration === 3e3 && (n.duration = Z.duration), pe(Z.offset) && n.offset === 16 && (n.offset = Z.offset), tn(Z.showClose) && !n.showClose && (n.showClose = Z.showClose), n;
}, Oi = (e) => {
  const t = Y.indexOf(e);
  if (t === -1)
    return;
  Y.splice(t, 1);
  const { handler: n } = e;
  n.close();
}, Mi = ({ appendTo: e, ...t }, n) => {
  const s = `message_${ki++}`, o = t.onClose, l = document.createElement("div"), r = {
    ...t,
    id: s,
    onClose: () => {
      o?.(), Oi(f);
    },
    onDestroy: () => {
      Ze(null, l);
    }
  }, p = P(Si, r, Ae(r.message) || We(r.message) ? {
    default: Ae(r.message) ? r.message : () => r.message
  } : null);
  p.appContext = n || Me._context, Ze(p, l), e.appendChild(l.firstElementChild);
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
}, Me = (e = {}, t) => {
  if (!fe)
    return { close: () => {
    } };
  const n = Xn(e);
  if (n.grouping && Y.length) {
    const o = Y.find(({ vnode: l }) => {
      var r;
      return ((r = l.props) == null ? void 0 : r.message) === n.message;
    });
    if (o)
      return o.props.repeatNum += 1, o.props.type = n.type, o.handler;
  }
  if (pe(Z.max) && Y.length >= Z.max)
    return { close: () => {
    } };
  const s = Mi(n, t);
  return Y.push(s), s.handler;
};
Yn.forEach((e) => {
  Me[e] = (t = {}, n) => {
    const s = Xn(t);
    return Me({ ...s, type: e }, n);
  };
});
function Ti(e) {
  for (const t of Y)
    (!e || e === t.props.type) && t.handler.close();
}
Me.closeAll = Ti;
Me._context = null;
const Ii = qn(Me, "$message"), Jn = [
  "success",
  "info",
  "warning",
  "error"
], Pi = Pe({
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
    type: Zn
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
    values: [...Jn, ""],
    default: ""
  },
  zIndex: Number
}), Ni = {
  destroy: () => !0
}, zi = W({
  name: "ElNotification"
}), $i = /* @__PURE__ */ W({
  ...zi,
  props: Pi,
  emits: Ni,
  setup(e, { expose: t }) {
    const n = e, { ns: s, zIndex: o } = Gn("notification"), { nextZIndex: l, currentZIndex: r } = o, { Close: p } = li, h = x(!1);
    let v;
    const f = _(() => {
      const m = n.type;
      return m && et[n.type] ? s.m(m) : "";
    }), C = _(() => n.type && et[n.type] || n.icon), M = _(() => n.position.endsWith("right") ? "right" : "left"), T = _(() => n.position.startsWith("top") ? "top" : "bottom"), G = _(() => {
      var m;
      return {
        [T.value]: `${n.offset}px`,
        zIndex: (m = n.zIndex) != null ? m : r.value
      };
    });
    function y() {
      n.duration > 0 && ({ stop: v } = En(() => {
        h.value && b();
      }, n.duration));
    }
    function g() {
      v?.();
    }
    function b() {
      h.value = !1;
    }
    function F({ code: m }) {
      m === qe.delete || m === qe.backspace ? g() : m === qe.esc ? h.value && b() : y();
    }
    return nt(() => {
      y(), l(), h.value = !0;
    }), Dn(document, "keydown", F), t({
      visible: h,
      close: b
    }), (m, te) => (S(), J(bt, {
      name: u(s).b("fade"),
      onBeforeLeave: m.onClose,
      onAfterLeave: (D) => m.$emit("destroy"),
      persisted: ""
    }, {
      default: re(() => [
        le(c("div", {
          id: m.id,
          class: z([u(s).b(), m.customClass, u(M)]),
          style: ke(u(G)),
          role: "alert",
          onMouseenter: g,
          onMouseleave: y,
          onClick: m.onClick
        }, [
          u(C) ? (S(), J(u(Qe), {
            key: 0,
            class: z([u(s).e("icon"), u(f)])
          }, {
            default: re(() => [
              (S(), J(wn(u(C))))
            ]),
            _: 1
          }, 8, ["class"])) : Q("v-if", !0),
          c("div", {
            class: z(u(s).e("group"))
          }, [
            c("h2", {
              class: z(u(s).e("title")),
              textContent: R(m.title)
            }, null, 10, ["textContent"]),
            le(c("div", {
              class: z(u(s).e("content")),
              style: ke(m.title ? void 0 : { margin: 0 })
            }, [
              Se(m.$slots, "default", {}, () => [
                m.dangerouslyUseHTMLString ? (S(), N(be, { key: 1 }, [
                  Q(" Caution here, message could've been compromised, never use user's input as message "),
                  c("p", { innerHTML: m.message }, null, 8, ["innerHTML"])
                ], 2112)) : (S(), N("p", { key: 0 }, R(m.message), 1))
              ])
            ], 6), [
              [Ke, m.message]
            ]),
            m.showClose ? (S(), J(u(Qe), {
              key: 0,
              class: z(u(s).e("closeBtn")),
              onClick: Re(b, ["stop"])
            }, {
              default: re(() => [
                P(u(p))
              ]),
              _: 1
            }, 8, ["class", "onClick"])) : Q("v-if", !0)
          ], 2)
        ], 46, ["id", "onClick"]), [
          [Ke, h.value]
        ])
      ]),
      _: 3
    }, 8, ["name", "onBeforeLeave", "onAfterLeave"]));
  }
});
var Ei = /* @__PURE__ */ at($i, [["__file", "notification.vue"]]);
const tt = {
  "top-left": [],
  "top-right": [],
  "bottom-left": [],
  "bottom-right": []
}, _t = 16;
let Li = 1;
const Te = function(e = {}, t) {
  if (!fe)
    return { close: () => {
    } };
  (ue(e) || We(e)) && (e = { message: e });
  const n = e.position || "top-right";
  let s = e.offset || 0;
  tt[n].forEach(({ vm: f }) => {
    var C;
    s += (((C = f.el) == null ? void 0 : C.offsetHeight) || 0) + _t;
  }), s += _t;
  const o = `notification_${Li++}`, l = e.onClose, r = {
    ...e,
    offset: s,
    id: o,
    onClose: () => {
      Ri(o, n, l);
    }
  };
  let p = document.body;
  mt(e.appendTo) ? p = e.appendTo : ue(e.appendTo) && (p = document.querySelector(e.appendTo)), mt(p) || (p = document.body);
  const h = document.createElement("div"), v = P(Ei, r, Ae(r.message) ? r.message : We(r.message) ? () => r.message : null);
  return v.appContext = $n(t) ? Te._context : t, v.props.onDestroy = () => {
    Ze(null, h);
  }, Ze(v, h), tt[n].push({ vm: v }), p.appendChild(h.firstElementChild), {
    close: () => {
      v.component.exposed.visible.value = !1;
    }
  };
};
Jn.forEach((e) => {
  Te[e] = (t = {}, n) => ((ue(t) || We(t)) && (t = {
    message: t
  }), Te({ ...t, type: e }, n));
});
function Ri(e, t, n) {
  const s = tt[t], o = s.findIndex(({ vm: v }) => {
    var f;
    return ((f = v.component) == null ? void 0 : f.props.id) === e;
  });
  if (o === -1)
    return;
  const { vm: l } = s[o];
  if (!l)
    return;
  n?.(l);
  const r = l.el.offsetHeight, p = t.split("-")[0];
  s.splice(o, 1);
  const h = s.length;
  if (!(h < 1))
    for (let v = o; v < h; v++) {
      const { el: f, component: C } = s[v].vm, M = Number.parseInt(f.style[p], 10) - r - _t;
      C.props.offset = M;
    }
}
function Di() {
  for (const e of Object.values(tt))
    e.forEach(({ vm: t }) => {
      t.component.exposed.visible.value = !1;
    });
}
Te.closeAll = Di;
Te._context = null;
const Wi = qn(Te, "$notify"), gt = {
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
    s === "center" ? Ii({
      message: t,
      type: n,
      duration: o,
      showClose: l,
      grouping: !0
    }) : Wi({
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
}, vt = "[screen-recorder]", Ai = (e) => {
  if (e)
    return JSON.parse(JSON.stringify(e));
}, q = async (e, t) => {
  const n = performance.now(), s = Ai(t);
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
}, Fi = () => q("screen_recorder_get_ffmpeg_status"), me = (e) => q("screen_recorder_set_capture_excluded", { excluded: e }), ae = (e) => q("screen_recorder_set_passthrough_region", { region: e }), ji = () => q("screen_recorder_pick_target_window"), Bi = () => q("screen_recorder_close_window"), Hi = (e, t) => q("screen_recorder_start_recording", {
  region: e,
  fps: t.fps,
  quality: t.quality,
  audio: t.format === "mp4"
}), Gi = () => q("screen_recorder_pause_recording"), Ui = (e, t) => q("screen_recorder_resume_recording", {
  region: e,
  fps: t.fps,
  quality: t.quality,
  audio: t.format === "mp4"
}), Vi = () => q("screen_recorder_stop_recording"), qi = () => q("screen_recorder_cancel_recording"), Ki = () => q("screen_recorder_cancel_export"), Zi = (e, t) => q("screen_recorder_export_recording", {
  format: e.format,
  fps: e.fps,
  quality: e.quality,
  savePath: e.savePath,
  durationMs: t
}), fn = () => ({
  format: "mp4",
  fps: 30,
  quality: "standard",
  savePath: "",
  audio: !0
}), E = "[screen-recorder]";
function Yi() {
  const e = x("selecting"), t = x(fn()), n = x(null), s = x(null), o = x(""), l = x(null), r = x(0), p = x(0), h = x(null), v = () => {
    p.value = e.value === "recording" && l.value !== null ? r.value + Date.now() - l.value : r.value;
  }, f = () => {
    h.value !== null && (window.clearInterval(h.value), h.value = null);
  }, C = () => {
    f(), v(), h.value = window.setInterval(() => {
      v();
    }, 250);
  }, M = async () => (console.info(`${E} refresh ffmpeg status`), n.value = await Fi(), console.info(`${E} ffmpeg status`, n.value), n.value), T = async (D) => {
    o.value = "", s.value = null, console.info(`${E} begin requested`, { region: D, settings: t.value });
    const ge = n.value ?? await M();
    if (!ge.available)
      throw new Error(ge.message || "FFmpeg unavailable");
    await Hi(D, t.value), e.value = "recording", r.value = 0, p.value = 0, l.value = Date.now(), C(), console.info(`${E} recording started`, { status: e.value });
  }, G = async () => {
    e.value === "recording" && (console.info(`${E} pause requested`, { elapsedMs: p.value }), v(), r.value = p.value, l.value = null, f(), await Gi(), e.value = "paused", console.info(`${E} recording paused`, { accumulatedMs: r.value }));
  }, y = async (D) => {
    e.value === "paused" && (console.info(`${E} resume requested`, { region: D, settings: t.value }), await Ui(D, t.value), e.value = "recording", l.value = Date.now(), C(), console.info(`${E} recording resumed`));
  }, g = async () => {
    e.value !== "recording" && e.value !== "paused" || (console.info(`${E} stop requested`, { status: e.value, elapsedMs: p.value }), v(), r.value = p.value, l.value = null, f(), await Vi(), e.value = "exporting", console.info(`${E} recording stopped`, { accumulatedMs: r.value }));
  }, b = async () => {
    console.info(`${E} export requested`, { settings: t.value }), e.value = "exporting";
    try {
      return s.value = await Zi(t.value, Math.round(p.value)), e.value = "completed", console.info(`${E} export completed`, s.value), s.value;
    } catch (D) {
      throw e.value = "ready", s.value = null, D;
    }
  }, F = async () => {
    console.info(`${E} cancel export requested`, { status: e.value }), await Ki(), e.value = "ready", s.value = null;
  }, m = async () => {
    console.info(`${E} cancel requested`, { status: e.value, elapsedMs: p.value }), f(), await qi(), e.value = "selecting", l.value = null, r.value = 0, p.value = 0, s.value = null, console.info(`${E} canceled`);
  }, te = () => {
    console.info(`${E} reset session`), e.value = "selecting", l.value = null, r.value = 0, p.value = 0, s.value = null, o.value = "", t.value = fn();
  };
  return _n(() => {
    f();
  }), {
    status: e,
    settings: t,
    ffmpegStatus: n,
    result: s,
    errorMessage: o,
    elapsedMs: p,
    refreshFfmpegStatus: M,
    begin: T,
    pause: G,
    resume: y,
    stop: g,
    exportFile: b,
    cancelExport: F,
    cancel: m,
    reset: te
  };
}
const Xi = { class: "screen-recorder" }, Ji = ["onMousedown"], Qi = { class: "window-title" }, er = { class: "capture-viewport" }, tr = { class: "capture-frame" }, nr = { class: "control-group control-group--tools" }, sr = { class: "tool-pill" }, or = ["title", "disabled"], ar = { class: "select-field" }, ir = ["disabled"], rr = ["disabled"], lr = ["disabled"], cr = { value: "high" }, ur = { value: "standard" }, dr = { value: "small" }, pr = { class: "dimension-group optional-size" }, hr = { class: "dimension" }, fr = ["value"], gr = { class: "dimension" }, vr = ["value"], yr = { class: "control-group control-group--actions" }, mr = { class: "time" }, wr = { class: "button-label" }, _r = { class: "button-label" }, br = ["title"], Cr = { class: "export-progress__meta" }, xr = { class: "export-progress__track" }, Sr = ["title"], kr = ["disabled"], Or = { class: "record-label" }, Mr = {
  key: 0,
  class: "warning"
}, K = "[screen-recorder]", we = 80, gn = 420, vn = 260, Tr = 8, yn = 1, mn = 0, Ir = 15, Pr = 10, Nr = /* @__PURE__ */ W({
  __name: "index",
  setup(e) {
    const t = xn(), n = x(null), s = x(null), o = x(null), l = x({ width: 0, height: 0 }), r = x(!1), p = x(!1), h = x(0), v = x(!1), f = x(null);
    let C = null, M = null, T = null, G = null;
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
      ffmpegStatus: F,
      result: m,
      elapsedMs: te,
      refreshFfmpegStatus: D,
      begin: ge,
      pause: O,
      resume: Nt,
      stop: zt,
      exportFile: Qn,
      cancelExport: $t,
      cancel: es,
      reset: ts
    } = Yi(), Et = x(!1), Ne = _(() => g.value === "recording" || g.value === "paused" || g.value === "exporting"), it = _(() => b.value.audio && b.value.format === "mp4"), ze = _(() => it.value && g.value === "recording"), ns = _(() => {
      const a = ze.value && !v.value ? h.value : 0, i = (w, k) => Math.max(0.18, Math.min(1, w + a * k)).toFixed(3);
      return {
        "--bar-1": i(0.28, 0.64),
        "--bar-2": i(0.42, 0.78),
        "--bar-3": i(0.34, 0.94),
        "--bar-4": i(0.22, 0.72)
      };
    }), ss = _(() => {
      if (b.value.format === "gif")
        return "GIF 不支持音频";
      if (v.value && b.value.audio)
        return "音频已开启；实时音量动画不可用不影响导出系统声音";
      if (m.value?.audioDevice)
        return `已录制音频：${m.value.audioDevice}`;
      if (m.value && !m.value.hasAudio)
        return "未检测到可用音频设备，导出视频无声音";
      if (F.value?.available && !F.value.systemAudioAvailable) {
        const a = F.value.audioDevices?.join("、") || "无";
        return b.value.audio ? `未发现系统声音/立体声混音设备；不会自动录制麦克风。当前可用音频设备：${a}` : "录制音频已关闭";
      }
      return b.value.audio ? "录制音频已开启。系统声音将通过 WASAPI Loopback 捕获" : "录制音频已关闭";
    }), Lt = _(() => {
      const a = f.value?.progress ?? 0.03;
      return Math.max(1, Math.min(100, Math.round(a * 100)));
    }), rt = _(() => {
      const a = f.value;
      return a ? a.totalFrames && a.stage === "frames" ? `${a.message}` : a.message || "正在导出..." : "正在导出...";
    }), os = _(() => {
      const a = f.value;
      return a?.totalFrames ? `${rt.value} (${a.currentFrame}/${a.totalFrames})` : rt.value;
    }), as = _(() => {
      const a = Math.floor(te.value / 1e3), i = Math.floor(a / 60).toString().padStart(2, "0"), w = (a % 60).toString().padStart(2, "0");
      return `${i}:${w}`;
    }), ve = async (a) => {
      try {
        await a();
      } catch (i) {
        console.error(`${K} action failed`, i), Et.value || gt.msg(i?.message || String(i), "error");
      }
    }, Rt = (a) => Math.max(2, Math.floor(Math.round(a) / 2) * 2), Dt = (a) => Math.max(1, Math.round(a)), lt = async () => {
      const a = n.value;
      if (!a)
        throw new Error("录制视口尚未准备好");
      const i = a.getBoundingClientRect(), w = await t.scaleFactor(), k = await t.innerPosition(), I = Dt(i.width * w), U = Dt(i.height * w);
      if (I < we || U < we)
        throw new Error("录制区域太小，请放大录制窗口");
      const j = {
        x: i.left,
        y: i.top,
        width: I / w,
        height: U / w,
        screenX: Math.round(k.x + i.left * w),
        screenY: Math.round(k.y + i.top * w),
        physicalWidth: I,
        physicalHeight: U,
        scale: w
      };
      return console.info(`${K} capture region`, {
        ...j,
        logicalSize: `${j.width}x${j.height}`,
        physicalSize: `${j.physicalWidth}x${j.physicalHeight}`
      }), j;
    }, Wt = async () => {
      const a = await lt(), i = Rt(a.physicalWidth), w = Rt(a.physicalHeight);
      return {
        ...a,
        width: i / a.scale,
        height: w / a.scale,
        physicalWidth: i,
        physicalHeight: w
      };
    }, A = async () => {
      try {
        const a = await lt();
        if (l.value = {
          width: a.physicalWidth,
          height: a.physicalHeight
        }, p.value) {
          const i = s.value?.getBoundingClientRect().height ?? 0, w = o.value?.getBoundingClientRect().height ?? 0;
          await ae({
            x: Math.round(a.x * a.scale),
            y: Math.round((a.y + i) * a.scale),
            width: a.physicalWidth,
            height: Math.max(
              1,
              a.physicalHeight - Math.round((i + w) * a.scale)
            )
          }).catch(() => {
          });
          return;
        }
        await ae({
          x: Math.round(a.x * a.scale),
          y: Math.round(a.y * a.scale),
          width: a.physicalWidth,
          height: a.physicalHeight
        }).catch(() => {
        });
      } catch {
        l.value = { width: 0, height: 0 }, await ae(null).catch(() => {
        });
      }
    }, je = async () => {
      await ae(null).catch(() => {
      });
    }, is = () => {
      r.value = !1, p.value = !1;
    }, At = () => {
      window.setTimeout(() => {
        A();
      }, 120);
    }, $e = () => new Promise((a) => {
      requestAnimationFrame(() => requestAnimationFrame(() => a()));
    }), rs = async () => {
      document.documentElement.classList.add("screen-recorder-repaint"), await $e(), document.documentElement.classList.remove("screen-recorder-repaint"), await $e();
    }, ls = async () => {
      await ae(null).catch(() => {
      }), await t.setIgnoreCursorEvents(!0).catch(() => {
      }), await $e(), await t.setIgnoreCursorEvents(!1).catch(() => {
      }), await A();
    }, cs = async () => {
      const [a, i] = await Promise.all([
        t.outerPosition(),
        t.outerSize()
      ]);
      return {
        x: a.x,
        y: a.y,
        width: i.width,
        height: i.height
      };
    }, Ft = (a, i) => {
      const w = Math.min(a.width, i.width), k = Math.min(a.height, i.height), I = i.x + i.width - w, U = i.y + i.height - k;
      return {
        x: Math.min(Math.max(a.x, i.x), I),
        y: Math.min(Math.max(a.y, i.y), U),
        width: w,
        height: k
      };
    }, us = (a, i, w) => {
      if (!i) return !1;
      const k = Math.max(8, Math.round(8 * w)), I = i.x + i.width, U = i.y + i.height, j = a.screenX + a.physicalWidth, $ = a.screenY + a.physicalHeight;
      return a.screenX <= i.x + k && a.screenY <= i.y + k && j >= I - k && $ >= U - k;
    }, ds = (a, i, w) => {
      if (!w) return a;
      const k = Math.round(Ir * i), I = Math.round(Pr * i);
      return {
        ...a,
        physicalWidth: Math.max(we, a.physicalWidth - k),
        physicalHeight: Math.max(we, a.physicalHeight - I)
      };
    }, jt = async (a) => {
      await t.setSize(new ce(Math.round(a.width), Math.round(a.height))), await t.setPosition(new X(Math.round(a.x), Math.round(a.y))), await $e();
    }, ct = async () => {
      const [a, i] = await Promise.all([
        lt(),
        cs()
      ]);
      return { actualRegion: a, currentFrame: i };
    }, ps = async (a, i, w) => {
      const { actualRegion: k, currentFrame: I } = await ct(), U = k.screenX - I.x, j = k.screenY - I.y, $ = Math.max(0, I.width - k.physicalWidth), He = Math.max(0, I.height - k.physicalHeight);
      return {
        x: a.screenX - U,
        y: a.screenY - j,
        width: Math.max(i, a.physicalWidth + $),
        height: Math.max(w, a.physicalHeight + He)
      };
    }, Bt = async () => {
      T?.(), T = null, h.value = 0;
    }, Be = async () => {
      if (!(!it.value || T))
        try {
          console.info(`${K} backend audio meter listening`), T = await Ye("screen_recorder_audio_level", (a) => {
            if (!ze.value) {
              h.value = 0;
              return;
            }
            const i = Math.max(0, Math.min(1, Number(a.payload?.level ?? 0)));
            h.value = h.value * 0.38 + i * 0.62;
          }), v.value = !1;
        } catch (a) {
          console.error(`${K} audio meter failed`, a), v.value = !0;
        }
    }, hs = async (a) => {
      a.button !== 0 || Ne.value || (await je(), await t.startDragging().catch((i) => {
        gt.msg(i?.message || String(i), "error");
      }), At());
    }, fs = async (a) => {
      Ne.value || (is(), await je(), await t.startResizeDragging(a).catch((i) => {
        gt.msg(i?.message || String(i), "error");
      }), At());
    }, gs = () => ve(async () => {
      console.info(`${K} handle start`), f.value = null, await Be(), await me(!0).catch(() => {
      }), await A(), await ge(await Wt());
    }), vs = () => ve(async () => {
      console.info(`${K} handle pause`), await O();
    }), ys = () => ve(async () => {
      console.info(`${K} handle resume`), await Nt(await Wt());
    }), ms = () => ve(async () => {
      console.info(`${K} handle stop/export`), f.value = {
        stage: "encode",
        message: b.value.format === "gif" ? "准备生成 GIF 帧" : "准备导出 MP4",
        progress: 0.01,
        currentFrame: 0
      }, await zt(), h.value = 0, await Qn(), await A(), await me(!1).catch(() => {
      });
    }), ws = () => ve(async () => {
      console.info(`${K} handle cancel export`), await $t(), f.value = null, await A();
    }), _s = () => {
      const a = { ...b.value };
      je(), ts(), b.value = a, g.value = "ready", m.value = null, f.value = null, me(!0).catch(() => {
      }), _e(A), Be();
    }, bs = async (a) => {
      const i = await Us(a.screenX, a.screenY), w = i?.scaleFactor || await t.scaleFactor(), k = i ? {
        x: i.position.x,
        y: i.position.y,
        width: i.size.width,
        height: i.size.height
      } : null, I = us(a, k, w);
      r.value = !0, p.value = I, await _e(), await $e();
      const U = Math.round(gn * w), j = Math.round(vn * w), $ = ds(a, w, !I), He = await ps(
        $,
        U,
        j
      );
      try {
        await jt(
          k && I ? Ft(He, k) : He
        ), await _e();
        const ut = async () => {
          const { actualRegion: se, currentFrame: Ee } = await ct(), ee = {
            x: $.screenX - se.screenX,
            y: $.screenY - se.screenY,
            width: $.physicalWidth - se.physicalWidth,
            height: $.physicalHeight - se.physicalHeight
          };
          if (Math.abs(ee.x) <= mn && Math.abs(ee.y) <= mn && Math.abs(ee.width) <= yn && Math.abs(ee.height) <= yn)
            return !0;
          const Ut = {
            x: Ee.x + ee.x,
            y: Ee.y + ee.y,
            width: Math.max(U, Ee.width + ee.width),
            height: Math.max(j, Ee.height + ee.height)
          };
          return await jt(
            k && I ? Ft(Ut, k) : Ut
          ), !1;
        };
        for (let se = 0; se < Tr && !await ut(); se += 1)
          ;
        const { actualRegion: ne } = await ct();
        console.info(`${K} snap result`, {
          target: a,
          snapTarget: $,
          actualRegion: ne,
          residual: {
            left: ne.screenX - $.screenX,
            top: ne.screenY - $.screenY,
            right: ne.screenX + ne.physicalWidth - ($.screenX + $.physicalWidth),
            bottom: ne.screenY + ne.physicalHeight - ($.screenY + $.physicalHeight)
          },
          monitorCovering: I
        });
      } catch (ut) {
        console.warn(`${K} snap correction skipped`, ut);
      } finally {
        await ls(), await A(), await rs(), await t.setFocus().catch(() => {
        });
      }
    }, Cs = () => ve(async () => {
      await je();
      const a = await ji();
      await bs(a);
    }), xs = async () => {
      await t.minimize();
    }, Ht = async () => {
      Et.value = !0;
      try {
        g.value === "exporting" ? await $t().catch(() => {
        }) : await es(), await ae(null).catch(() => {
        }), await me(!1).catch(() => {
        });
      } catch {
      }
      await Bi();
    }, Ss = async () => {
      m.value && (await A(), await d("open_file_with_default_app", { filePath: m.value.path }));
    }, ks = async () => {
      m.value && (await A(), await d("show_file_in_folder", { filePath: m.value.path }));
    }, Gt = (a) => {
      a.key === "Escape" && (a.preventDefault(), Ht());
    };
    return nt(async () => {
      g.value = "ready", await t.setMinSize(new Ct(gn, vn)).catch(() => {
      }), await me(!0).catch(() => {
      }), await D().catch(() => {
      }), await _e(), await A(), await Be(), await _e(), await t.emit("screen_recorder_ready"), G = await Ye("screen_recorder_export_progress", (a) => {
        f.value = a.payload;
      }).catch(() => null), n.value && (C = new ResizeObserver(() => {
        A();
      }), C.observe(n.value)), M = await t.onMoved(() => {
        A();
      }).catch(() => null), window.addEventListener("resize", A), window.addEventListener("keydown", Gt);
    }), xe(it, (a) => {
      a ? Be() : Bt();
    }), xe(g, (a) => {
      a !== "recording" && (h.value = 0), a !== "exporting" && (f.value = null);
    }), _n(() => {
      C?.disconnect(), M?.(), G?.(), window.removeEventListener("resize", A), window.removeEventListener("keydown", Gt), ae(null).catch(() => {
      }), me(!1).catch(() => {
      }), Bt();
    }), (a, i) => (S(), N("div", Xi, [
      c(
        "div",
        {
          class: z(["recorder-shell", {
            recording: u(g) === "recording",
            paused: u(g) === "paused",
            "snap-aligned": r.value,
            "snap-fullscreen": p.value
          }])
        },
        [
          (S(), N(
            be,
            null,
            Ls(y, (w) => c("span", {
              key: w.className,
              class: z(["resize-zone", w.className]),
              onMousedown: Re((k) => fs(w.direction), ["prevent"])
            }, null, 42, Ji)),
            64
            /* STABLE_FRAGMENT */
          )),
          c(
            "header",
            {
              ref_key: "titleBarRef",
              ref: s,
              class: "title-bar",
              onMousedown: hs
            },
            [
              c(
                "span",
                Qi,
                R(a.$t("screenRecorder.title") || "区域录制"),
                1
                /* TEXT */
              ),
              c(
                "div",
                {
                  class: "window-actions",
                  onMousedown: i[0] || (i[0] = Re(() => {
                  }, ["stop"]))
                },
                [
                  c("button", {
                    class: "title-button title-button--window",
                    title: "最小化",
                    onClick: xs
                  }, [
                    P(u(Xs), {
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
                    onClick: Ht
                  }, [
                    P(u(Ys), {
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
          c("main", er, [
            i[9] || (i[9] = c(
              "span",
              { class: "viewport-mask top" },
              null,
              -1
              /* HOISTED */
            )),
            i[10] || (i[10] = c(
              "span",
              { class: "viewport-mask right" },
              null,
              -1
              /* HOISTED */
            )),
            i[11] || (i[11] = c(
              "span",
              { class: "viewport-mask bottom" },
              null,
              -1
              /* HOISTED */
            )),
            i[12] || (i[12] = c(
              "span",
              { class: "viewport-mask left" },
              null,
              -1
              /* HOISTED */
            )),
            c("div", tr, [
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
              i[5] || (i[5] = c(
                "span",
                { class: "viewport-border top" },
                null,
                -1
                /* HOISTED */
              )),
              i[6] || (i[6] = c(
                "span",
                { class: "viewport-border right" },
                null,
                -1
                /* HOISTED */
              )),
              i[7] || (i[7] = c(
                "span",
                { class: "viewport-border bottom" },
                null,
                -1
                /* HOISTED */
              )),
              i[8] || (i[8] = c(
                "span",
                { class: "viewport-border left" },
                null,
                -1
                /* HOISTED */
              ))
            ])
          ]),
          c(
            "footer",
            {
              ref_key: "controlStripRef",
              ref: o,
              class: "control-strip"
            },
            [
              c("div", nr, [
                c("div", sr, [
                  u(g) === "ready" || u(g) === "completed" ? (S(), N(
                    "button",
                    {
                      key: 0,
                      class: "icon-control snap-control",
                      title: "拖到目标窗口并松开以对齐",
                      "aria-label": "对齐目标窗口",
                      onMousedown: Re(Cs, ["prevent"])
                    },
                    [
                      P(u(Js), {
                        theme: "outline",
                        size: "18",
                        strokeWidth: 3,
                        strokeLinecap: "butt"
                      })
                    ],
                    32
                    /* NEED_HYDRATION */
                  )) : Q("v-if", !0),
                  c("button", {
                    class: z(["audio-meter", { active: ze.value && h.value > 0.03, metering: ze.value && !v.value, muted: !ze.value || v.value }]),
                    title: ss.value,
                    "aria-label": "系统声音录制状态",
                    disabled: u(g) === "exporting" || u(b).format === "gif"
                  }, [
                    c(
                      "span",
                      {
                        class: "audio-bars",
                        style: ke(ns.value)
                      },
                      i[13] || (i[13] = [
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
                  ], 10, or)
                ]),
                c("label", ar, [
                  le(c("select", {
                    "onUpdate:modelValue": i[1] || (i[1] = (w) => u(b).fps = w),
                    disabled: Ne.value
                  }, i[14] || (i[14] = [
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
                  ]), 8, ir), [
                    [dt, u(b).fps]
                  ]),
                  i[15] || (i[15] = c(
                    "span",
                    { class: "unit" },
                    "fps",
                    -1
                    /* HOISTED */
                  ))
                ]),
                le(c("select", {
                  "onUpdate:modelValue": i[2] || (i[2] = (w) => u(b).format = w),
                  class: "format-select optional-format",
                  disabled: Ne.value
                }, i[16] || (i[16] = [
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
                ]), 8, rr), [
                  [dt, u(b).format]
                ]),
                le(c("select", {
                  "onUpdate:modelValue": i[3] || (i[3] = (w) => u(b).quality = w),
                  class: "quality-select optional-quality",
                  disabled: Ne.value
                }, [
                  c(
                    "option",
                    cr,
                    R(a.$t("screenRecorder.qualityHigh")),
                    1
                    /* TEXT */
                  ),
                  c(
                    "option",
                    ur,
                    R(a.$t("screenRecorder.qualityStandard")),
                    1
                    /* TEXT */
                  ),
                  c(
                    "option",
                    dr,
                    R(a.$t("screenRecorder.qualitySmall")),
                    1
                    /* TEXT */
                  )
                ], 8, lr), [
                  [dt, u(b).quality]
                ]),
                c("div", pr, [
                  c("label", hr, [
                    c("input", {
                      value: l.value.width,
                      readonly: ""
                    }, null, 8, fr)
                  ]),
                  i[17] || (i[17] = c(
                    "span",
                    { class: "multiply" },
                    "×",
                    -1
                    /* HOISTED */
                  )),
                  c("label", gr, [
                    c("input", {
                      value: l.value.height,
                      readonly: ""
                    }, null, 8, vr)
                  ]),
                  i[18] || (i[18] = c(
                    "span",
                    { class: "unit" },
                    "px",
                    -1
                    /* HOISTED */
                  ))
                ])
              ]),
              c("div", yr, [
                u(g) === "recording" || u(g) === "paused" ? (S(), N(
                  be,
                  { key: 0 },
                  [
                    c(
                      "span",
                      mr,
                      R(as.value),
                      1
                      /* TEXT */
                    ),
                    c("button", {
                      class: "control-button",
                      onClick: i[4] || (i[4] = (w) => u(g) === "paused" ? ys() : vs())
                    }, [
                      c(
                        "span",
                        wr,
                        R(u(g) === "paused" ? a.$t("screenRecorder.resume") : a.$t("screenRecorder.pause")),
                        1
                        /* TEXT */
                      )
                    ]),
                    c("button", {
                      class: "control-button danger",
                      onClick: ms
                    }, [
                      c(
                        "span",
                        _r,
                        R(a.$t("screenRecorder.stop")),
                        1
                        /* TEXT */
                      )
                    ])
                  ],
                  64
                  /* STABLE_FRAGMENT */
                )) : u(g) === "exporting" ? (S(), N(
                  be,
                  { key: 1 },
                  [
                    c("div", {
                      class: "export-progress",
                      title: os.value
                    }, [
                      c("div", Cr, [
                        c(
                          "span",
                          null,
                          R(rt.value),
                          1
                          /* TEXT */
                        ),
                        c(
                          "strong",
                          null,
                          R(Lt.value) + "%",
                          1
                          /* TEXT */
                        )
                      ]),
                      c("div", xr, [
                        c(
                          "span",
                          {
                            style: ke({ width: `${Lt.value}%` })
                          },
                          null,
                          4
                          /* STYLE */
                        )
                      ])
                    ], 8, br),
                    c("button", {
                      class: "control-button danger",
                      title: "取消导出",
                      onClick: ws
                    }, i[19] || (i[19] = [
                      c(
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
                )) : u(g) === "completed" && u(m) ? (S(), N(
                  be,
                  { key: 2 },
                  [
                    c("span", {
                      class: "save-status optional-save-status",
                      title: u(m).path
                    }, R(u(m).hasAudio ? "已保存·有声" : "已保存·无声"), 9, Sr),
                    c("button", {
                      class: "control-button",
                      title: "打开文件",
                      onClick: Ss
                    }, i[20] || (i[20] = [
                      c(
                        "span",
                        { class: "button-label" },
                        "打开",
                        -1
                        /* HOISTED */
                      )
                    ])),
                    c("button", {
                      class: "control-button",
                      title: "打开所在文件夹",
                      onClick: ks
                    }, i[21] || (i[21] = [
                      c(
                        "span",
                        { class: "button-label" },
                        "文件夹",
                        -1
                        /* HOISTED */
                      )
                    ])),
                    c("button", {
                      class: "control-button",
                      title: "重新录制",
                      onClick: _s
                    }, i[22] || (i[22] = [
                      c(
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
                )) : (S(), N("button", {
                  key: 3,
                  class: "record-button",
                  disabled: u(F)?.available === !1 || l.value.width < we || l.value.height < we,
                  onClick: gs
                }, [
                  i[23] || (i[23] = c(
                    "span",
                    { class: "record-dot" },
                    null,
                    -1
                    /* HOISTED */
                  )),
                  c(
                    "span",
                    Or,
                    R(a.$t("screenRecorder.start")),
                    1
                    /* TEXT */
                  )
                ], 8, kr))
              ])
            ],
            512
            /* NEED_PATCH */
          )
        ],
        2
        /* CLASS */
      ),
      u(F) && !u(F).available ? (S(), N(
        "p",
        Mr,
        R(u(F).message || a.$t("screenRecorder.ffmpegMissing")),
        1
        /* TEXT */
      )) : Q("v-if", !0)
    ]));
  }
}), zr = (e, t) => {
  const n = e.__vccOpts || e;
  for (const [s, o] of t)
    n[s] = o;
  return n;
}, $r = /* @__PURE__ */ zr(Nr, [["__scopeId", "data-v-edddbe81"]]), Er = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: $r
}, Symbol.toStringTag, { value: "Module" }));
export {
  Rr as activate
};
