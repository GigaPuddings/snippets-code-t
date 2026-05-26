import { inject as ae, createVNode as T, getCurrentInstance as be, ref as C, computed as m, unref as c, readonly as xs, getCurrentScope as Ss, onScopeDispose as ks, onMounted as nt, nextTick as we, watch as Ce, isRef as Os, warn as Ms, provide as Ts, defineComponent as j, createElementBlock as I, openBlock as S, mergeProps as Is, renderSlot as xe, createElementVNode as u, normalizeClass as $, Transition as Ct, withCtx as ie, withDirectives as re, normalizeStyle as Se, createTextVNode as Ps, toDisplayString as D, vShow as Ke, shallowReactive as zs, createBlock as J, createCommentVNode as Q, resolveDynamicComponent as wn, Fragment as _e, withModifiers as Ee, isVNode as De, render as Ze, onUnmounted as _n, renderList as Ns, vModelSelect as pt } from "vue";
const $r = (e) => {
  e.registerRoute({
    target: "window",
    path: "/screen-recorder",
    name: "ScreenRecorder",
    component: () => Promise.resolve().then(() => zr)
  });
};
function $s(e, t, n, s) {
  if (typeof t == "function" ? e !== t || !0 : !t.has(e)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
  return n === "m" ? s : n === "a" ? s.call(e) : s ? s.value : t.get(e);
}
function Ls(e, t, n, s, o) {
  if (typeof t == "function" ? e !== t || !0 : !t.has(e)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
  return t.set(e, n), n;
}
var Ve;
const V = "__TAURI_TO_IPC_KEY__";
function Es(e, t = !1) {
  return window.__TAURI_INTERNALS__.transformCallback(e, t);
}
async function d(e, t = {}, n) {
  return window.__TAURI_INTERNALS__.invoke(e, t, n);
}
class Rs {
  get rid() {
    return $s(this, Ve, "f");
  }
  constructor(t) {
    Ve.set(this, void 0), Ls(this, Ve, t);
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
Ve = /* @__PURE__ */ new WeakMap();
class xt {
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
    return new xt(this.width / t, this.height / t);
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
    return this.size instanceof xt ? this.size : this.size.toLogical(t);
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
class He {
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
var H;
(function(e) {
  e.WINDOW_RESIZED = "tauri://resize", e.WINDOW_MOVED = "tauri://move", e.WINDOW_CLOSE_REQUESTED = "tauri://close-requested", e.WINDOW_DESTROYED = "tauri://destroyed", e.WINDOW_FOCUS = "tauri://focus", e.WINDOW_BLUR = "tauri://blur", e.WINDOW_SCALE_FACTOR_CHANGED = "tauri://scale-change", e.WINDOW_THEME_CHANGED = "tauri://theme-changed", e.WINDOW_CREATED = "tauri://window-created", e.WEBVIEW_CREATED = "tauri://webview-created", e.DRAG_ENTER = "tauri://drag-enter", e.DRAG_OVER = "tauri://drag-over", e.DRAG_DROP = "tauri://drag-drop", e.DRAG_LEAVE = "tauri://drag-leave";
})(H || (H = {}));
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
    handler: Es(t)
  }).then((l) => async () => Cn(e, l));
}
async function Ds(e, t, n) {
  return Ye(e, (s) => {
    Cn(e, s.id), t(s);
  }, n);
}
async function Ws(e, t) {
  await d("plugin:event|emit", {
    event: e,
    payload: t
  });
}
async function As(e, t, n) {
  await d("plugin:event|emit_to", {
    target: typeof e == "string" ? { kind: "AnyLabel", label: e } : e,
    event: t,
    payload: n
  });
}
class Re extends Rs {
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
    }).then((o) => new Re(o));
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
    }).then((n) => new Re(n));
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
    return d("plugin:image|from_path", { path: t }).then((n) => new Re(n));
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
  return e == null ? null : typeof e == "string" ? e : e instanceof Re ? e.rid : e;
}
var mt;
(function(e) {
  e[e.Critical = 1] = "Critical", e[e.Informational = 2] = "Informational";
})(mt || (mt = {}));
class Fs {
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
var Kt;
(function(e) {
  e.None = "none", e.Normal = "normal", e.Indeterminate = "indeterminate", e.Paused = "paused", e.Error = "error";
})(Kt || (Kt = {}));
function xn() {
  return new Sn(window.__TAURI_INTERNALS__.metadata.currentWindow.label, {
    // @ts-expect-error `skip` is not defined in the public API but it is handled by the constructor
    skip: !0
  });
}
async function ht() {
  return d("plugin:window|get_all_windows").then((e) => e.map((t) => new Sn(t, {
    // @ts-expect-error `skip` is not defined in the public API but it is handled by the constructor
    skip: !0
  })));
}
const ft = ["tauri://created", "tauri://error"];
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
    return (n = (await ht()).find((s) => s.label === t)) !== null && n !== void 0 ? n : null;
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
    return ht();
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
    for (const t of await ht())
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
    } : Ds(t, n, {
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
    if (ft.includes(t)) {
      for (const s of this.listeners[t] || [])
        s({
          event: t,
          id: -1,
          payload: n
        });
      return;
    }
    return Ws(t, n);
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
    if (ft.includes(n)) {
      for (const o of this.listeners[n] || [])
        o({
          event: n,
          id: -1,
          payload: s
        });
      return;
    }
    return As(t, n, s);
  }
  /** @ignore */
  _handleTauriEvent(t, n) {
    return ft.includes(t) ? (t in this.listeners ? this.listeners[t].push(n) : this.listeners[t] = [n], !0) : !1;
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
    return t && (t === mt.Critical ? n = { type: "Critical" } : n = { type: "Informational" }), d("plugin:window|request_user_attention", {
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
    return this.listen(H.WINDOW_CLOSE_REQUESTED, async (n) => {
      const s = new Fs(n);
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
    const n = await this.listen(H.DRAG_ENTER, (r) => {
      t({
        ...r,
        payload: {
          type: "enter",
          paths: r.payload.paths,
          position: new X(r.payload.position)
        }
      });
    }), s = await this.listen(H.DRAG_OVER, (r) => {
      t({
        ...r,
        payload: {
          type: "over",
          position: new X(r.payload.position)
        }
      });
    }), o = await this.listen(H.DRAG_DROP, (r) => {
      t({
        ...r,
        payload: {
          type: "drop",
          paths: r.payload.paths,
          position: new X(r.payload.position)
        }
      });
    }), l = await this.listen(H.DRAG_LEAVE, (r) => {
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
var Zt;
(function(e) {
  e.Disabled = "disabled", e.Throttle = "throttle", e.Suspend = "suspend";
})(Zt || (Zt = {}));
var Yt;
(function(e) {
  e.AppearanceBased = "appearanceBased", e.Light = "light", e.Dark = "dark", e.MediumLight = "mediumLight", e.UltraDark = "ultraDark", e.Titlebar = "titlebar", e.Selection = "selection", e.Menu = "menu", e.Popover = "popover", e.Sidebar = "sidebar", e.HeaderView = "headerView", e.Sheet = "sheet", e.WindowBackground = "windowBackground", e.HudWindow = "hudWindow", e.FullScreenUI = "fullScreenUI", e.Tooltip = "tooltip", e.ContentBackground = "contentBackground", e.UnderWindowBackground = "underWindowBackground", e.UnderPageBackground = "underPageBackground", e.Mica = "mica", e.Blur = "blur", e.Acrylic = "acrylic", e.Tabbed = "tabbed", e.TabbedDark = "tabbedDark", e.TabbedLight = "tabbedLight";
})(Yt || (Yt = {}));
var Xt;
(function(e) {
  e.FollowsWindowActiveState = "followsWindowActiveState", e.Active = "active", e.Inactive = "inactive";
})(Xt || (Xt = {}));
function js(e) {
  return e === null ? null : {
    name: e.name,
    scaleFactor: e.scaleFactor,
    position: new X(e.position),
    size: new le(e.size)
  };
}
async function Bs(e, t) {
  return d("plugin:window|monitor_from_point", {
    x: e,
    y: t
  }).then(js);
}
var Hs = {
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
function Gs() {
  return "icon-" + ((1 + Math.random()) * 4294967296 | 0).toString(16).substring(1);
}
function Vs(e, t, n) {
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
var Us = Symbol("icon-context");
function St(e, t, n) {
  var s = {
    name: "icon-" + e,
    props: ["size", "strokeWidth", "strokeLinecap", "strokeLinejoin", "theme", "fill", "spin"],
    setup: function(l) {
      var r = Gs(), p = ae(Us, Hs);
      return function() {
        var g = l.size, f = l.strokeWidth, y = l.strokeLinecap, _ = l.strokeLinejoin, O = l.theme, P = l.fill, q = l.spin, h = Vs(r, {
          size: g,
          strokeWidth: f,
          strokeLinecap: y,
          strokeLinejoin: _,
          theme: O,
          fill: P
        }, p), v = [p.prefix + "-icon"];
        return v.push(p.prefix + "-icon-" + e), q && v.push(p.prefix + "-icon-spin"), T("span", {
          class: v.join(" ")
        }, [n(h)]);
      };
    }
  };
  return s;
}
const qs = St("close-small", !1, function(e) {
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
}), Ks = St("minus", !1, function(e) {
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
}), Zs = St("radar", !1, function(e) {
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
}), kn = Symbol(), Ue = "el", Ys = "is-", oe = (e, t, n, s, o) => {
  let l = `${e}-${t}`;
  return n && (l += `-${n}`), s && (l += `__${s}`), o && (l += `--${o}`), l;
}, On = Symbol("namespaceContextKey"), Xs = (e) => {
  const t = e || (be() ? ae(On, C(Ue)) : C(Ue));
  return m(() => c(t) || Ue);
}, kt = (e, t) => {
  const n = Xs(t);
  return {
    namespace: n,
    b: (h = "") => oe(n.value, e, h, "", ""),
    e: (h) => h ? oe(n.value, e, "", h, "") : "",
    m: (h) => h ? oe(n.value, e, "", "", h) : "",
    be: (h, v) => h && v ? oe(n.value, e, h, v, "") : "",
    em: (h, v) => h && v ? oe(n.value, e, "", h, v) : "",
    bm: (h, v) => h && v ? oe(n.value, e, h, "", v) : "",
    bem: (h, v, x) => h && v && x ? oe(n.value, e, h, v, x) : "",
    is: (h, ...v) => {
      const x = v.length >= 1 ? v[0] : !0;
      return h && x ? `${Ys}${h}` : "";
    },
    cssVar: (h) => {
      const v = {};
      for (const x in h)
        h[x] && (v[`--${n.value}-${x}`] = h[x]);
      return v;
    },
    cssVarName: (h) => `--${n.value}-${h}`,
    cssVarBlock: (h) => {
      const v = {};
      for (const x in h)
        h[x] && (v[`--${n.value}-${e}-${x}`] = h[x]);
      return v;
    },
    cssVarBlockName: (h) => `--${n.value}-${e}-${h}`
  };
};
/**
* @vue/shared v3.5.13
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/
const Js = Object.prototype.hasOwnProperty, Jt = (e, t) => Js.call(e, t), We = (e) => typeof e == "function", ue = (e) => typeof e == "string", Mn = (e) => e !== null && typeof e == "object";
var Qs = typeof global == "object" && global && global.Object === Object && global, eo = typeof self == "object" && self && self.Object === Object && self, Ot = Qs || eo || Function("return this")(), ke = Ot.Symbol, Tn = Object.prototype, to = Tn.hasOwnProperty, no = Tn.toString, $e = ke ? ke.toStringTag : void 0;
function so(e) {
  var t = to.call(e, $e), n = e[$e];
  try {
    e[$e] = void 0;
    var s = !0;
  } catch {
  }
  var o = no.call(e);
  return s && (t ? e[$e] = n : delete e[$e]), o;
}
var oo = Object.prototype, ao = oo.toString;
function io(e) {
  return ao.call(e);
}
var ro = "[object Null]", lo = "[object Undefined]", Qt = ke ? ke.toStringTag : void 0;
function In(e) {
  return e == null ? e === void 0 ? lo : ro : Qt && Qt in Object(e) ? so(e) : io(e);
}
function uo(e) {
  return e != null && typeof e == "object";
}
var co = "[object Symbol]";
function Mt(e) {
  return typeof e == "symbol" || uo(e) && In(e) == co;
}
function po(e, t) {
  for (var n = -1, s = e == null ? 0 : e.length, o = Array(s); ++n < s; )
    o[n] = t(e[n], n, e);
  return o;
}
var Tt = Array.isArray, en = ke ? ke.prototype : void 0, tn = en ? en.toString : void 0;
function Pn(e) {
  if (typeof e == "string")
    return e;
  if (Tt(e))
    return po(e, Pn) + "";
  if (Mt(e))
    return tn ? tn.call(e) : "";
  var t = e + "";
  return t == "0" && 1 / e == -1 / 0 ? "-0" : t;
}
function zn(e) {
  var t = typeof e;
  return e != null && (t == "object" || t == "function");
}
var ho = "[object AsyncFunction]", fo = "[object Function]", go = "[object GeneratorFunction]", vo = "[object Proxy]";
function yo(e) {
  if (!zn(e))
    return !1;
  var t = In(e);
  return t == fo || t == go || t == ho || t == vo;
}
var gt = Ot["__core-js_shared__"], nn = function() {
  var e = /[^.]+$/.exec(gt && gt.keys && gt.keys.IE_PROTO || "");
  return e ? "Symbol(src)_1." + e : "";
}();
function mo(e) {
  return !!nn && nn in e;
}
var wo = Function.prototype, _o = wo.toString;
function bo(e) {
  if (e != null) {
    try {
      return _o.call(e);
    } catch {
    }
    try {
      return e + "";
    } catch {
    }
  }
  return "";
}
var Co = /[\\^$.*+?()[\]{}|]/g, xo = /^\[object .+?Constructor\]$/, So = Function.prototype, ko = Object.prototype, Oo = So.toString, Mo = ko.hasOwnProperty, To = RegExp(
  "^" + Oo.call(Mo).replace(Co, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$"
);
function Io(e) {
  if (!zn(e) || mo(e))
    return !1;
  var t = yo(e) ? To : xo;
  return t.test(bo(e));
}
function Po(e, t) {
  return e?.[t];
}
function Nn(e, t) {
  var n = Po(e, t);
  return Io(n) ? n : void 0;
}
function zo(e, t) {
  return e === t || e !== e && t !== t;
}
var No = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/, $o = /^\w*$/;
function Lo(e, t) {
  if (Tt(e))
    return !1;
  var n = typeof e;
  return n == "number" || n == "symbol" || n == "boolean" || e == null || Mt(e) ? !0 : $o.test(e) || !No.test(e) || t != null && e in Object(t);
}
var Ae = Nn(Object, "create");
function Eo() {
  this.__data__ = Ae ? Ae(null) : {}, this.size = 0;
}
function Ro(e) {
  var t = this.has(e) && delete this.__data__[e];
  return this.size -= t ? 1 : 0, t;
}
var Do = "__lodash_hash_undefined__", Wo = Object.prototype, Ao = Wo.hasOwnProperty;
function Fo(e) {
  var t = this.__data__;
  if (Ae) {
    var n = t[e];
    return n === Do ? void 0 : n;
  }
  return Ao.call(t, e) ? t[e] : void 0;
}
var jo = Object.prototype, Bo = jo.hasOwnProperty;
function Ho(e) {
  var t = this.__data__;
  return Ae ? t[e] !== void 0 : Bo.call(t, e);
}
var Go = "__lodash_hash_undefined__";
function Vo(e, t) {
  var n = this.__data__;
  return this.size += this.has(e) ? 0 : 1, n[e] = Ae && t === void 0 ? Go : t, this;
}
function ce(e) {
  var t = -1, n = e == null ? 0 : e.length;
  for (this.clear(); ++t < n; ) {
    var s = e[t];
    this.set(s[0], s[1]);
  }
}
ce.prototype.clear = Eo;
ce.prototype.delete = Ro;
ce.prototype.get = Fo;
ce.prototype.has = Ho;
ce.prototype.set = Vo;
function Uo() {
  this.__data__ = [], this.size = 0;
}
function st(e, t) {
  for (var n = e.length; n--; )
    if (zo(e[n][0], t))
      return n;
  return -1;
}
var qo = Array.prototype, Ko = qo.splice;
function Zo(e) {
  var t = this.__data__, n = st(t, e);
  if (n < 0)
    return !1;
  var s = t.length - 1;
  return n == s ? t.pop() : Ko.call(t, n, 1), --this.size, !0;
}
function Yo(e) {
  var t = this.__data__, n = st(t, e);
  return n < 0 ? void 0 : t[n][1];
}
function Xo(e) {
  return st(this.__data__, e) > -1;
}
function Jo(e, t) {
  var n = this.__data__, s = st(n, e);
  return s < 0 ? (++this.size, n.push([e, t])) : n[s][1] = t, this;
}
function Te(e) {
  var t = -1, n = e == null ? 0 : e.length;
  for (this.clear(); ++t < n; ) {
    var s = e[t];
    this.set(s[0], s[1]);
  }
}
Te.prototype.clear = Uo;
Te.prototype.delete = Zo;
Te.prototype.get = Yo;
Te.prototype.has = Xo;
Te.prototype.set = Jo;
var Qo = Nn(Ot, "Map");
function ea() {
  this.size = 0, this.__data__ = {
    hash: new ce(),
    map: new (Qo || Te)(),
    string: new ce()
  };
}
function ta(e) {
  var t = typeof e;
  return t == "string" || t == "number" || t == "symbol" || t == "boolean" ? e !== "__proto__" : e === null;
}
function ot(e, t) {
  var n = e.__data__;
  return ta(t) ? n[typeof t == "string" ? "string" : "hash"] : n.map;
}
function na(e) {
  var t = ot(this, e).delete(e);
  return this.size -= t ? 1 : 0, t;
}
function sa(e) {
  return ot(this, e).get(e);
}
function oa(e) {
  return ot(this, e).has(e);
}
function aa(e, t) {
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
pe.prototype.clear = ea;
pe.prototype.delete = na;
pe.prototype.get = sa;
pe.prototype.has = oa;
pe.prototype.set = aa;
var ia = "Expected a function";
function It(e, t) {
  if (typeof e != "function" || t != null && typeof t != "function")
    throw new TypeError(ia);
  var n = function() {
    var s = arguments, o = t ? t.apply(this, s) : s[0], l = n.cache;
    if (l.has(o))
      return l.get(o);
    var r = e.apply(this, s);
    return n.cache = l.set(o, r) || l, r;
  };
  return n.cache = new (It.Cache || pe)(), n;
}
It.Cache = pe;
var ra = 500;
function la(e) {
  var t = It(e, function(s) {
    return n.size === ra && n.clear(), s;
  }), n = t.cache;
  return t;
}
var ua = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g, ca = /\\(\\)?/g, da = la(function(e) {
  var t = [];
  return e.charCodeAt(0) === 46 && t.push(""), e.replace(ua, function(n, s, o, l) {
    t.push(o ? l.replace(ca, "$1") : s || n);
  }), t;
});
function pa(e) {
  return e == null ? "" : Pn(e);
}
function ha(e, t) {
  return Tt(e) ? e : Lo(e, t) ? [e] : da(pa(e));
}
function fa(e) {
  if (typeof e == "string" || Mt(e))
    return e;
  var t = e + "";
  return t == "0" && 1 / e == -1 / 0 ? "-0" : t;
}
function ga(e, t) {
  t = ha(t, e);
  for (var n = 0, s = t.length; e != null && n < s; )
    e = e[fa(t[n++])];
  return n && n == s ? e : void 0;
}
function va(e, t, n) {
  var s = e == null ? void 0 : ga(e, t);
  return s === void 0 ? n : s;
}
function ya(e) {
  for (var t = -1, n = e == null ? 0 : e.length, s = {}; ++t < n; ) {
    var o = e[t];
    s[o[0]] = o[1];
  }
  return s;
}
const $n = (e) => e === void 0, sn = (e) => typeof e == "boolean", de = (e) => typeof e == "number", wt = (e) => typeof Element > "u" ? !1 : e instanceof Element, ma = (e) => ue(e) ? !Number.isNaN(Number(e)) : !1;
var on;
const he = typeof window < "u", wa = (e) => typeof e == "string", _a = () => {
};
he && ((on = window?.navigator) != null && on.userAgent) && /iP(ad|hone|od)/.test(window.navigator.userAgent);
function Pt(e) {
  return typeof e == "function" ? e() : c(e);
}
function ba(e) {
  return e;
}
function zt(e) {
  return Ss() ? (ks(e), !0) : !1;
}
function Ca(e, t = !0) {
  be() ? nt(e) : t ? e() : we(e);
}
function Ln(e, t, n = {}) {
  const {
    immediate: s = !0
  } = n, o = C(!1);
  let l = null;
  function r() {
    l && (clearTimeout(l), l = null);
  }
  function p() {
    o.value = !1, r();
  }
  function g(...f) {
    r(), o.value = !0, l = setTimeout(() => {
      o.value = !1, l = null, e(...f);
    }, Pt(t));
  }
  return s && (o.value = !0, he && g()), zt(p), {
    isPending: xs(o),
    start: g,
    stop: p
  };
}
function En(e) {
  var t;
  const n = Pt(e);
  return (t = n?.$el) != null ? t : n;
}
const Rn = he ? window : void 0;
function Dn(...e) {
  let t, n, s, o;
  if (wa(e[0]) || Array.isArray(e[0]) ? ([n, s, o] = e, t = Rn) : [t, n, s, o] = e, !t)
    return _a;
  Array.isArray(n) || (n = [n]), Array.isArray(s) || (s = [s]);
  const l = [], r = () => {
    l.forEach((y) => y()), l.length = 0;
  }, p = (y, _, O, P) => (y.addEventListener(_, O, P), () => y.removeEventListener(_, O, P)), g = Ce(() => [En(t), Pt(o)], ([y, _]) => {
    r(), y && l.push(...n.flatMap((O) => s.map((P) => p(y, O, P, _))));
  }, { immediate: !0, flush: "post" }), f = () => {
    g(), r();
  };
  return zt(f), f;
}
function xa(e, t = !1) {
  const n = C(), s = () => n.value = !!e();
  return s(), Ca(s, t), n;
}
const an = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {}, rn = "__vueuse_ssr_handlers__";
an[rn] = an[rn] || {};
var ln = Object.getOwnPropertySymbols, Sa = Object.prototype.hasOwnProperty, ka = Object.prototype.propertyIsEnumerable, Oa = (e, t) => {
  var n = {};
  for (var s in e)
    Sa.call(e, s) && t.indexOf(s) < 0 && (n[s] = e[s]);
  if (e != null && ln)
    for (var s of ln(e))
      t.indexOf(s) < 0 && ka.call(e, s) && (n[s] = e[s]);
  return n;
};
function Ma(e, t, n = {}) {
  const s = n, { window: o = Rn } = s, l = Oa(s, ["window"]);
  let r;
  const p = xa(() => o && "ResizeObserver" in o), g = () => {
    r && (r.disconnect(), r = void 0);
  }, f = Ce(() => En(e), (_) => {
    g(), p.value && o && _ && (r = new ResizeObserver(t), r.observe(_, l));
  }, { immediate: !0, flush: "post" }), y = () => {
    g(), f();
  };
  return zt(y), {
    isSupported: p,
    stop: y
  };
}
var un;
(function(e) {
  e.UP = "UP", e.RIGHT = "RIGHT", e.DOWN = "DOWN", e.LEFT = "LEFT", e.NONE = "NONE";
})(un || (un = {}));
var Ta = Object.defineProperty, cn = Object.getOwnPropertySymbols, Ia = Object.prototype.hasOwnProperty, Pa = Object.prototype.propertyIsEnumerable, dn = (e, t, n) => t in e ? Ta(e, t, { enumerable: !0, configurable: !0, writable: !0, value: n }) : e[t] = n, za = (e, t) => {
  for (var n in t || (t = {}))
    Ia.call(t, n) && dn(e, n, t[n]);
  if (cn)
    for (var n of cn(t))
      Pa.call(t, n) && dn(e, n, t[n]);
  return e;
};
const Na = {
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
za({
  linear: ba
}, Na);
const pn = {
  current: 0
}, hn = C(0), Wn = 2e3, fn = Symbol("elZIndexContextKey"), An = Symbol("zIndexContextKey"), $a = (e) => {
  const t = be() ? ae(fn, pn) : pn, n = e || (be() ? ae(An, void 0) : void 0), s = m(() => {
    const r = c(n);
    return de(r) ? r : Wn;
  }), o = m(() => s.value + hn.value), l = () => (t.current++, hn.value = t.current, o.value);
  return !he && ae(fn), {
    initialZIndex: s,
    currentZIndex: o,
    nextZIndex: l
  };
};
var La = {
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
const Ea = (e) => (t, n) => Ra(t, n, c(e)), Ra = (e, t, n) => va(n, e, e).replace(/\{(\w+)\}/g, (s, o) => {
  var l;
  return `${(l = t?.[o]) != null ? l : `{${o}}`}`;
}), Da = (e) => {
  const t = m(() => c(e).name), n = Os(e) ? e : C(e);
  return {
    lang: t,
    locale: n,
    t: Ea(e)
  };
}, Fn = Symbol("localeContextKey"), Wa = (e) => {
  const t = e || ae(Fn, C());
  return Da(m(() => t.value || La));
}, jn = "__epPropKey", G = (e) => e, Aa = (e) => Mn(e) && !!e[jn], Bn = (e, t) => {
  if (!Mn(e) || Aa(e))
    return e;
  const { values: n, required: s, default: o, type: l, validator: r } = e, g = {
    type: l,
    required: !!s,
    validator: n || r ? (f) => {
      let y = !1, _ = [];
      if (n && (_ = Array.from(n), Jt(e, "default") && _.push(o), y || (y = _.includes(f))), r && (y || (y = r(f))), !y && _.length > 0) {
        const O = [...new Set(_)].map((P) => JSON.stringify(P)).join(", ");
        Ms(`Invalid prop: validation failed${t ? ` for prop "${t}"` : ""}. Expected one of [${O}], got value ${JSON.stringify(f)}.`);
      }
      return y;
    } : void 0,
    [jn]: !0
  };
  return Jt(e, "default") && (g.default = o), g;
}, Ie = (e) => ya(Object.entries(e).map(([t, n]) => [
  t,
  Bn(n, t)
])), Fa = ["", "default", "small", "large"], ja = Bn({
  type: String,
  values: Fa,
  required: !1
}), Ba = Symbol("size"), Ha = Symbol("emptyValuesContextKey"), Ga = Ie({
  emptyValues: Array,
  valueOnClear: {
    type: [String, Number, Boolean, Function],
    default: void 0,
    validator: (e) => We(e) ? !e() : !e
  }
}), gn = (e) => Object.keys(e), Je = C();
function Hn(e, t = void 0) {
  return be() ? ae(kn, Je) : Je;
}
function Gn(e, t) {
  const n = Hn(), s = kt(e, m(() => {
    var p;
    return ((p = n.value) == null ? void 0 : p.namespace) || Ue;
  })), o = Wa(m(() => {
    var p;
    return (p = n.value) == null ? void 0 : p.locale;
  })), l = $a(m(() => {
    var p;
    return ((p = n.value) == null ? void 0 : p.zIndex) || Wn;
  })), r = m(() => {
    var p;
    return c(t) || ((p = n.value) == null ? void 0 : p.size) || "";
  });
  return Vn(m(() => c(n) || {})), {
    ns: s,
    locale: o,
    zIndex: l,
    size: r
  };
}
const Vn = (e, t, n = !1) => {
  var s;
  const o = !!be(), l = o ? Hn() : void 0, r = (s = void 0) != null ? s : o ? Ts : void 0;
  if (!r)
    return;
  const p = m(() => {
    const g = c(e);
    return l?.value ? Va(l.value, g) : g;
  });
  return r(kn, p), r(Fn, m(() => p.value.locale)), r(On, m(() => p.value.namespace)), r(An, m(() => p.value.zIndex)), r(Ba, {
    size: m(() => p.value.size || "")
  }), r(Ha, m(() => ({
    emptyValues: p.value.emptyValues,
    valueOnClear: p.value.valueOnClear
  }))), (n || !Je.value) && (Je.value = p.value), p;
}, Va = (e, t) => {
  const n = [.../* @__PURE__ */ new Set([...gn(e), ...gn(t)])], s = {};
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
function _t(e, t = "px") {
  if (!e)
    return "";
  if (de(e) || ma(e))
    return `${e}${t}`;
  if (ue(e))
    return e;
}
const Un = (e, t) => (e.install = (n) => {
  for (const s of [e, ...Object.values({})])
    n.component(s.name, s);
}, e), qn = (e, t) => (e.install = (n) => {
  e._context = n._context, n.config.globalProperties[t] = e;
}, e), Ua = Ie({
  size: {
    type: G([Number, String])
  },
  color: {
    type: String
  }
}), qa = j({
  name: "ElIcon",
  inheritAttrs: !1
}), Ka = /* @__PURE__ */ j({
  ...qa,
  props: Ua,
  setup(e) {
    const t = e, n = kt("icon"), s = m(() => {
      const { size: o, color: l } = t;
      return !o && !l ? {} : {
        fontSize: $n(o) ? void 0 : _t(o),
        "--color": l
      };
    });
    return (o, l) => (S(), I("i", Is({
      class: c(n).b(),
      style: c(s)
    }, o.$attrs), [
      xe(o.$slots, "default")
    ], 16));
  }
});
var Za = /* @__PURE__ */ at(Ka, [["__file", "icon.vue"]]);
const Qe = Un(Za);
/*! Element Plus Icons Vue v2.3.1 */
var Ya = /* @__PURE__ */ j({
  name: "CircleCloseFilled",
  __name: "circle-close-filled",
  setup(e) {
    return (t, n) => (S(), I("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 1024 1024"
    }, [
      u("path", {
        fill: "currentColor",
        d: "M512 64a448 448 0 1 1 0 896 448 448 0 0 1 0-896m0 393.664L407.936 353.6a38.4 38.4 0 1 0-54.336 54.336L457.664 512 353.6 616.064a38.4 38.4 0 1 0 54.336 54.336L512 566.336 616.064 670.4a38.4 38.4 0 1 0 54.336-54.336L566.336 512 670.4 407.936a38.4 38.4 0 1 0-54.336-54.336z"
      })
    ]));
  }
}), Xa = Ya, Ja = /* @__PURE__ */ j({
  name: "Close",
  __name: "close",
  setup(e) {
    return (t, n) => (S(), I("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 1024 1024"
    }, [
      u("path", {
        fill: "currentColor",
        d: "M764.288 214.592 512 466.88 259.712 214.592a31.936 31.936 0 0 0-45.12 45.12L466.752 512 214.528 764.224a31.936 31.936 0 1 0 45.12 45.184L512 557.184l252.288 252.288a31.936 31.936 0 0 0 45.12-45.12L557.12 512.064l252.288-252.352a31.936 31.936 0 1 0-45.12-45.184z"
      })
    ]));
  }
}), Kn = Ja, Qa = /* @__PURE__ */ j({
  name: "InfoFilled",
  __name: "info-filled",
  setup(e) {
    return (t, n) => (S(), I("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 1024 1024"
    }, [
      u("path", {
        fill: "currentColor",
        d: "M512 64a448 448 0 1 1 0 896.064A448 448 0 0 1 512 64m67.2 275.072c33.28 0 60.288-23.104 60.288-57.344s-27.072-57.344-60.288-57.344c-33.28 0-60.16 23.104-60.16 57.344s26.88 57.344 60.16 57.344M590.912 699.2c0-6.848 2.368-24.64 1.024-34.752l-52.608 60.544c-10.88 11.456-24.512 19.392-30.912 17.28a12.992 12.992 0 0 1-8.256-14.72l87.68-276.992c7.168-35.136-12.544-67.2-54.336-71.296-44.096 0-108.992 44.736-148.48 101.504 0 6.784-1.28 23.68.064 33.792l52.544-60.608c10.88-11.328 23.552-19.328 29.952-17.152a12.8 12.8 0 0 1 7.808 16.128L388.48 728.576c-10.048 32.256 8.96 63.872 55.04 71.04 67.84 0 107.904-43.648 147.456-100.416z"
      })
    ]));
  }
}), ei = Qa, ti = /* @__PURE__ */ j({
  name: "SuccessFilled",
  __name: "success-filled",
  setup(e) {
    return (t, n) => (S(), I("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 1024 1024"
    }, [
      u("path", {
        fill: "currentColor",
        d: "M512 64a448 448 0 1 1 0 896 448 448 0 0 1 0-896m-55.808 536.384-99.52-99.584a38.4 38.4 0 1 0-54.336 54.336l126.72 126.72a38.272 38.272 0 0 0 54.336 0l262.4-262.464a38.4 38.4 0 1 0-54.272-54.336z"
      })
    ]));
  }
}), ni = ti, si = /* @__PURE__ */ j({
  name: "WarningFilled",
  __name: "warning-filled",
  setup(e) {
    return (t, n) => (S(), I("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 1024 1024"
    }, [
      u("path", {
        fill: "currentColor",
        d: "M512 64a448 448 0 1 1 0 896 448 448 0 0 1 0-896m0 192a58.432 58.432 0 0 0-58.24 63.744l23.36 256.384a35.072 35.072 0 0 0 69.76 0l23.296-256.384A58.432 58.432 0 0 0 512 256m0 512a51.2 51.2 0 1 0 0-102.4 51.2 51.2 0 0 0 0 102.4"
      })
    ]));
  }
}), oi = si;
const Zn = G([
  String,
  Object,
  Function
]), ai = {
  Close: Kn
}, ii = {
  Close: Kn
}, et = {
  success: ni,
  warning: oi,
  error: Xa,
  info: ei
}, ri = (e) => e, qe = {
  esc: "Escape",
  delete: "Delete",
  backspace: "Backspace"
}, li = Ie({
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
    type: G([String, Object, Array])
  },
  offset: {
    type: G(Array),
    default: [0, 0]
  },
  badgeClass: {
    type: String
  }
}), ui = j({
  name: "ElBadge"
}), ci = /* @__PURE__ */ j({
  ...ui,
  props: li,
  setup(e, { expose: t }) {
    const n = e, s = kt("badge"), o = m(() => n.isDot ? "" : de(n.value) && de(n.max) ? n.max < n.value ? `${n.max}+` : `${n.value}` : `${n.value}`), l = m(() => {
      var r, p, g, f, y;
      return [
        {
          backgroundColor: n.color,
          marginRight: _t(-((p = (r = n.offset) == null ? void 0 : r[0]) != null ? p : 0)),
          marginTop: _t((f = (g = n.offset) == null ? void 0 : g[1]) != null ? f : 0)
        },
        (y = n.badgeStyle) != null ? y : {}
      ];
    });
    return t({
      content: o
    }), (r, p) => (S(), I("div", {
      class: $(c(s).b())
    }, [
      xe(r.$slots, "default"),
      T(Ct, {
        name: `${c(s).namespace.value}-zoom-in-center`,
        persisted: ""
      }, {
        default: ie(() => [
          re(u("sup", {
            class: $([
              c(s).e("content"),
              c(s).em("content", r.type),
              c(s).is("fixed", !!r.$slots.default),
              c(s).is("dot", r.isDot),
              c(s).is("hide-zero", !r.showZero && n.value === 0),
              r.badgeClass
            ]),
            style: Se(c(l))
          }, [
            xe(r.$slots, "content", { value: c(o) }, () => [
              Ps(D(c(o)), 1)
            ])
          ], 6), [
            [Ke, !r.hidden && (c(o) || r.isDot || r.$slots.content)]
          ])
        ]),
        _: 3
      }, 8, ["name"])
    ], 2));
  }
});
var di = /* @__PURE__ */ at(ci, [["__file", "badge.vue"]]);
const pi = Un(di), hi = Ie({
  a11y: {
    type: Boolean,
    default: !0
  },
  locale: {
    type: G(Object)
  },
  size: ja,
  button: {
    type: G(Object)
  },
  experimentalFeatures: {
    type: G(Object)
  },
  keyboardNavigation: {
    type: Boolean,
    default: !0
  },
  message: {
    type: G(Object)
  },
  zIndex: Number,
  namespace: {
    type: String,
    default: "el"
  },
  ...Ga
}), Z = {};
j({
  name: "ElConfigProvider",
  props: hi,
  setup(e, { slots: t }) {
    Ce(() => e.message, (s) => {
      Object.assign(Z, s ?? {});
    }, { immediate: !0, deep: !0 });
    const n = Vn(e);
    return () => xe(t, "default", { config: n?.value });
  }
});
const Yn = ["success", "info", "warning", "error"], R = ri({
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
}), fi = Ie({
  customClass: {
    type: String,
    default: R.customClass
  },
  center: {
    type: Boolean,
    default: R.center
  },
  dangerouslyUseHTMLString: {
    type: Boolean,
    default: R.dangerouslyUseHTMLString
  },
  duration: {
    type: Number,
    default: R.duration
  },
  icon: {
    type: Zn,
    default: R.icon
  },
  id: {
    type: String,
    default: R.id
  },
  message: {
    type: G([
      String,
      Object,
      Function
    ]),
    default: R.message
  },
  onClose: {
    type: G(Function),
    default: R.onClose
  },
  showClose: {
    type: Boolean,
    default: R.showClose
  },
  type: {
    type: String,
    values: Yn,
    default: R.type
  },
  plain: {
    type: Boolean,
    default: R.plain
  },
  offset: {
    type: Number,
    default: R.offset
  },
  zIndex: {
    type: Number,
    default: R.zIndex
  },
  grouping: {
    type: Boolean,
    default: R.grouping
  },
  repeatNum: {
    type: Number,
    default: R.repeatNum
  }
}), gi = {
  destroy: () => !0
}, Y = zs([]), vi = (e) => {
  const t = Y.findIndex((o) => o.id === e), n = Y[t];
  let s;
  return t > 0 && (s = Y[t - 1]), { current: n, prev: s };
}, yi = (e) => {
  const { prev: t } = vi(e);
  return t ? t.vm.exposed.bottom.value : 0;
}, mi = (e, t) => Y.findIndex((s) => s.id === e) > 0 ? 16 : t, wi = j({
  name: "ElMessage"
}), _i = /* @__PURE__ */ j({
  ...wi,
  props: fi,
  emits: gi,
  setup(e, { expose: t }) {
    const n = e, { Close: s } = ii, { ns: o, zIndex: l } = Gn("message"), { currentZIndex: r, nextZIndex: p } = l, g = C(), f = C(!1), y = C(0);
    let _;
    const O = m(() => n.type ? n.type === "error" ? "danger" : n.type : "info"), P = m(() => {
      const k = n.type;
      return { [o.bm("icon", k)]: k && et[k] };
    }), q = m(() => n.icon || et[n.type] || ""), h = m(() => yi(n.id)), v = m(() => mi(n.id, n.offset) + h.value), x = m(() => y.value + v.value), z = m(() => ({
      top: `${v.value}px`,
      zIndex: r.value
    }));
    function b() {
      n.duration !== 0 && ({ stop: _ } = Ln(() => {
        W();
      }, n.duration));
    }
    function te() {
      _?.();
    }
    function W() {
      f.value = !1;
    }
    function fe({ code: k }) {
      k === qe.esc && W();
    }
    return nt(() => {
      b(), p(), f.value = !0;
    }), Ce(() => n.repeatNum, () => {
      te(), b();
    }), Dn(document, "keydown", fe), Ma(g, () => {
      y.value = g.value.getBoundingClientRect().height;
    }), t({
      visible: f,
      bottom: x,
      close: W
    }), (k, Nt) => (S(), J(Ct, {
      name: c(o).b("fade"),
      onBeforeLeave: k.onClose,
      onAfterLeave: ($t) => k.$emit("destroy"),
      persisted: ""
    }, {
      default: ie(() => [
        re(u("div", {
          id: k.id,
          ref_key: "messageRef",
          ref: g,
          class: $([
            c(o).b(),
            { [c(o).m(k.type)]: k.type },
            c(o).is("center", k.center),
            c(o).is("closable", k.showClose),
            c(o).is("plain", k.plain),
            k.customClass
          ]),
          style: Se(c(z)),
          role: "alert",
          onMouseenter: te,
          onMouseleave: b
        }, [
          k.repeatNum > 1 ? (S(), J(c(pi), {
            key: 0,
            value: k.repeatNum,
            type: c(O),
            class: $(c(o).e("badge"))
          }, null, 8, ["value", "type", "class"])) : Q("v-if", !0),
          c(q) ? (S(), J(c(Qe), {
            key: 1,
            class: $([c(o).e("icon"), c(P)])
          }, {
            default: ie(() => [
              (S(), J(wn(c(q))))
            ]),
            _: 1
          }, 8, ["class"])) : Q("v-if", !0),
          xe(k.$slots, "default", {}, () => [
            k.dangerouslyUseHTMLString ? (S(), I(_e, { key: 1 }, [
              Q(" Caution here, message could've been compromised, never use user's input as message "),
              u("p", {
                class: $(c(o).e("content")),
                innerHTML: k.message
              }, null, 10, ["innerHTML"])
            ], 2112)) : (S(), I("p", {
              key: 0,
              class: $(c(o).e("content"))
            }, D(k.message), 3))
          ]),
          k.showClose ? (S(), J(c(Qe), {
            key: 2,
            class: $(c(o).e("closeBtn")),
            onClick: Ee(W, ["stop"])
          }, {
            default: ie(() => [
              T(c(s))
            ]),
            _: 1
          }, 8, ["class", "onClick"])) : Q("v-if", !0)
        ], 46, ["id"]), [
          [Ke, f.value]
        ])
      ]),
      _: 3
    }, 8, ["name", "onBeforeLeave", "onAfterLeave"]));
  }
});
var bi = /* @__PURE__ */ at(_i, [["__file", "message.vue"]]);
let Ci = 1;
const Xn = (e) => {
  const t = !e || ue(e) || De(e) || We(e) ? { message: e } : e, n = {
    ...R,
    ...t
  };
  if (!n.appendTo)
    n.appendTo = document.body;
  else if (ue(n.appendTo)) {
    let s = document.querySelector(n.appendTo);
    wt(s) || (s = document.body), n.appendTo = s;
  }
  return sn(Z.grouping) && !n.grouping && (n.grouping = Z.grouping), de(Z.duration) && n.duration === 3e3 && (n.duration = Z.duration), de(Z.offset) && n.offset === 16 && (n.offset = Z.offset), sn(Z.showClose) && !n.showClose && (n.showClose = Z.showClose), n;
}, xi = (e) => {
  const t = Y.indexOf(e);
  if (t === -1)
    return;
  Y.splice(t, 1);
  const { handler: n } = e;
  n.close();
}, Si = ({ appendTo: e, ...t }, n) => {
  const s = `message_${Ci++}`, o = t.onClose, l = document.createElement("div"), r = {
    ...t,
    id: s,
    onClose: () => {
      o?.(), xi(y);
    },
    onDestroy: () => {
      Ze(null, l);
    }
  }, p = T(bi, r, We(r.message) || De(r.message) ? {
    default: We(r.message) ? r.message : () => r.message
  } : null);
  p.appContext = n || Oe._context, Ze(p, l), e.appendChild(l.firstElementChild);
  const g = p.component, y = {
    id: s,
    vnode: p,
    vm: g,
    handler: {
      close: () => {
        g.exposed.visible.value = !1;
      }
    },
    props: p.component.props
  };
  return y;
}, Oe = (e = {}, t) => {
  if (!he)
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
  if (de(Z.max) && Y.length >= Z.max)
    return { close: () => {
    } };
  const s = Si(n, t);
  return Y.push(s), s.handler;
};
Yn.forEach((e) => {
  Oe[e] = (t = {}, n) => {
    const s = Xn(t);
    return Oe({ ...s, type: e }, n);
  };
});
function ki(e) {
  for (const t of Y)
    (!e || e === t.props.type) && t.handler.close();
}
Oe.closeAll = ki;
Oe._context = null;
const Oi = qn(Oe, "$message"), Jn = [
  "success",
  "info",
  "warning",
  "error"
], Mi = Ie({
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
    type: G([
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
    type: G(Function),
    default: () => {
    }
  },
  onClose: {
    type: G(Function),
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
}), Ti = {
  destroy: () => !0
}, Ii = j({
  name: "ElNotification"
}), Pi = /* @__PURE__ */ j({
  ...Ii,
  props: Mi,
  emits: Ti,
  setup(e, { expose: t }) {
    const n = e, { ns: s, zIndex: o } = Gn("notification"), { nextZIndex: l, currentZIndex: r } = o, { Close: p } = ai, g = C(!1);
    let f;
    const y = m(() => {
      const b = n.type;
      return b && et[n.type] ? s.m(b) : "";
    }), _ = m(() => n.type && et[n.type] || n.icon), O = m(() => n.position.endsWith("right") ? "right" : "left"), P = m(() => n.position.startsWith("top") ? "top" : "bottom"), q = m(() => {
      var b;
      return {
        [P.value]: `${n.offset}px`,
        zIndex: (b = n.zIndex) != null ? b : r.value
      };
    });
    function h() {
      n.duration > 0 && ({ stop: f } = Ln(() => {
        g.value && x();
      }, n.duration));
    }
    function v() {
      f?.();
    }
    function x() {
      g.value = !1;
    }
    function z({ code: b }) {
      b === qe.delete || b === qe.backspace ? v() : b === qe.esc ? g.value && x() : h();
    }
    return nt(() => {
      h(), l(), g.value = !0;
    }), Dn(document, "keydown", z), t({
      visible: g,
      close: x
    }), (b, te) => (S(), J(Ct, {
      name: c(s).b("fade"),
      onBeforeLeave: b.onClose,
      onAfterLeave: (W) => b.$emit("destroy"),
      persisted: ""
    }, {
      default: ie(() => [
        re(u("div", {
          id: b.id,
          class: $([c(s).b(), b.customClass, c(O)]),
          style: Se(c(q)),
          role: "alert",
          onMouseenter: v,
          onMouseleave: h,
          onClick: b.onClick
        }, [
          c(_) ? (S(), J(c(Qe), {
            key: 0,
            class: $([c(s).e("icon"), c(y)])
          }, {
            default: ie(() => [
              (S(), J(wn(c(_))))
            ]),
            _: 1
          }, 8, ["class"])) : Q("v-if", !0),
          u("div", {
            class: $(c(s).e("group"))
          }, [
            u("h2", {
              class: $(c(s).e("title")),
              textContent: D(b.title)
            }, null, 10, ["textContent"]),
            re(u("div", {
              class: $(c(s).e("content")),
              style: Se(b.title ? void 0 : { margin: 0 })
            }, [
              xe(b.$slots, "default", {}, () => [
                b.dangerouslyUseHTMLString ? (S(), I(_e, { key: 1 }, [
                  Q(" Caution here, message could've been compromised, never use user's input as message "),
                  u("p", { innerHTML: b.message }, null, 8, ["innerHTML"])
                ], 2112)) : (S(), I("p", { key: 0 }, D(b.message), 1))
              ])
            ], 6), [
              [Ke, b.message]
            ]),
            b.showClose ? (S(), J(c(Qe), {
              key: 0,
              class: $(c(s).e("closeBtn")),
              onClick: Ee(x, ["stop"])
            }, {
              default: ie(() => [
                T(c(p))
              ]),
              _: 1
            }, 8, ["class", "onClick"])) : Q("v-if", !0)
          ], 2)
        ], 46, ["id", "onClick"]), [
          [Ke, g.value]
        ])
      ]),
      _: 3
    }, 8, ["name", "onBeforeLeave", "onAfterLeave"]));
  }
});
var zi = /* @__PURE__ */ at(Pi, [["__file", "notification.vue"]]);
const tt = {
  "top-left": [],
  "top-right": [],
  "bottom-left": [],
  "bottom-right": []
}, bt = 16;
let Ni = 1;
const Me = function(e = {}, t) {
  if (!he)
    return { close: () => {
    } };
  (ue(e) || De(e)) && (e = { message: e });
  const n = e.position || "top-right";
  let s = e.offset || 0;
  tt[n].forEach(({ vm: y }) => {
    var _;
    s += (((_ = y.el) == null ? void 0 : _.offsetHeight) || 0) + bt;
  }), s += bt;
  const o = `notification_${Ni++}`, l = e.onClose, r = {
    ...e,
    offset: s,
    id: o,
    onClose: () => {
      $i(o, n, l);
    }
  };
  let p = document.body;
  wt(e.appendTo) ? p = e.appendTo : ue(e.appendTo) && (p = document.querySelector(e.appendTo)), wt(p) || (p = document.body);
  const g = document.createElement("div"), f = T(zi, r, We(r.message) ? r.message : De(r.message) ? () => r.message : null);
  return f.appContext = $n(t) ? Me._context : t, f.props.onDestroy = () => {
    Ze(null, g);
  }, Ze(f, g), tt[n].push({ vm: f }), p.appendChild(g.firstElementChild), {
    close: () => {
      f.component.exposed.visible.value = !1;
    }
  };
};
Jn.forEach((e) => {
  Me[e] = (t = {}, n) => ((ue(t) || De(t)) && (t = {
    message: t
  }), Me({ ...t, type: e }, n));
});
function $i(e, t, n) {
  const s = tt[t], o = s.findIndex(({ vm: f }) => {
    var y;
    return ((y = f.component) == null ? void 0 : y.props.id) === e;
  });
  if (o === -1)
    return;
  const { vm: l } = s[o];
  if (!l)
    return;
  n?.(l);
  const r = l.el.offsetHeight, p = t.split("-")[0];
  s.splice(o, 1);
  const g = s.length;
  if (!(g < 1))
    for (let f = o; f < g; f++) {
      const { el: y, component: _ } = s[f].vm, O = Number.parseInt(y.style[p], 10) - r - bt;
      _.props.offset = O;
    }
}
function Li() {
  for (const e of Object.values(tt))
    e.forEach(({ vm: t }) => {
      t.component.exposed.visible.value = !1;
    });
}
Me.closeAll = Li;
Me._context = null;
const Ei = qn(Me, "$notify"), vt = {
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
    s === "center" ? Oi({
      message: t,
      type: n,
      duration: o,
      showClose: l,
      grouping: !0
    }) : Ei({
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
}, yt = "[screen-recorder]", Ri = (e) => {
  if (e)
    return JSON.parse(JSON.stringify(e));
}, U = async (e, t) => {
  const n = performance.now(), s = Ri(t);
  console.info(`${yt} invoke:start ${e}`, s ?? "");
  try {
    const o = await d(e, t);
    return console.info(`${yt} invoke:success ${e}`, {
      elapsedMs: Math.round(performance.now() - n),
      result: o
    }), o;
  } catch (o) {
    throw console.error(`${yt} invoke:error ${e}`, {
      elapsedMs: Math.round(performance.now() - n),
      error: o
    }), o;
  }
}, Di = () => U("screen_recorder_get_ffmpeg_status"), ye = (e) => U("screen_recorder_set_capture_excluded", { excluded: e }), Le = (e) => U("screen_recorder_set_passthrough_region", { region: e }), Wi = () => U("screen_recorder_pick_target_window"), Ai = () => U("screen_recorder_close_window"), Fi = (e, t) => U("screen_recorder_start_recording", {
  region: e,
  fps: t.fps,
  quality: t.quality,
  audio: t.format === "mp4"
}), ji = () => U("screen_recorder_pause_recording"), Bi = (e, t) => U("screen_recorder_resume_recording", {
  region: e,
  fps: t.fps,
  quality: t.quality,
  audio: t.format === "mp4"
}), Hi = () => U("screen_recorder_stop_recording"), Gi = () => U("screen_recorder_cancel_recording"), Vi = () => U("screen_recorder_cancel_export"), Ui = (e, t) => U("screen_recorder_export_recording", {
  format: e.format,
  fps: e.fps,
  quality: e.quality,
  savePath: e.savePath,
  durationMs: t
}), vn = () => ({
  format: "mp4",
  fps: 30,
  quality: "standard",
  savePath: "",
  audio: !0
}), E = "[screen-recorder]";
function qi() {
  const e = C("selecting"), t = C(vn()), n = C(null), s = C(null), o = C(""), l = C(null), r = C(0), p = C(0), g = C(null), f = () => {
    p.value = e.value === "recording" && l.value !== null ? r.value + Date.now() - l.value : r.value;
  }, y = () => {
    g.value !== null && (window.clearInterval(g.value), g.value = null);
  }, _ = () => {
    y(), f(), g.value = window.setInterval(() => {
      f();
    }, 250);
  }, O = async () => (console.info(`${E} refresh ffmpeg status`), n.value = await Di(), console.info(`${E} ffmpeg status`, n.value), n.value), P = async (W) => {
    o.value = "", s.value = null, console.info(`${E} begin requested`, { region: W, settings: t.value });
    const fe = n.value ?? await O();
    if (!fe.available)
      throw new Error(fe.message || "FFmpeg unavailable");
    await Fi(W, t.value), e.value = "recording", r.value = 0, p.value = 0, l.value = Date.now(), _(), console.info(`${E} recording started`, { status: e.value });
  }, q = async () => {
    e.value === "recording" && (console.info(`${E} pause requested`, { elapsedMs: p.value }), f(), r.value = p.value, l.value = null, y(), await ji(), e.value = "paused", console.info(`${E} recording paused`, { accumulatedMs: r.value }));
  }, h = async (W) => {
    e.value === "paused" && (console.info(`${E} resume requested`, { region: W, settings: t.value }), await Bi(W, t.value), e.value = "recording", l.value = Date.now(), _(), console.info(`${E} recording resumed`));
  }, v = async () => {
    e.value !== "recording" && e.value !== "paused" || (console.info(`${E} stop requested`, { status: e.value, elapsedMs: p.value }), f(), r.value = p.value, l.value = null, y(), await Hi(), e.value = "exporting", console.info(`${E} recording stopped`, { accumulatedMs: r.value }));
  }, x = async () => {
    console.info(`${E} export requested`, { settings: t.value }), e.value = "exporting";
    try {
      return s.value = await Ui(t.value, Math.round(p.value)), e.value = "completed", console.info(`${E} export completed`, s.value), s.value;
    } catch (W) {
      throw e.value = "ready", s.value = null, W;
    }
  }, z = async () => {
    console.info(`${E} cancel export requested`, { status: e.value }), await Vi(), e.value = "ready", s.value = null;
  }, b = async () => {
    console.info(`${E} cancel requested`, { status: e.value, elapsedMs: p.value }), y(), await Gi(), e.value = "selecting", l.value = null, r.value = 0, p.value = 0, s.value = null, console.info(`${E} canceled`);
  }, te = () => {
    console.info(`${E} reset session`), e.value = "selecting", l.value = null, r.value = 0, p.value = 0, s.value = null, o.value = "", t.value = vn();
  };
  return _n(() => {
    y();
  }), {
    status: e,
    settings: t,
    ffmpegStatus: n,
    result: s,
    errorMessage: o,
    elapsedMs: p,
    refreshFfmpegStatus: O,
    begin: P,
    pause: q,
    resume: h,
    stop: v,
    exportFile: x,
    cancelExport: z,
    cancel: b,
    reset: te
  };
}
const Ki = { class: "screen-recorder" }, Zi = ["onMousedown"], Yi = { class: "window-title" }, Xi = { class: "capture-viewport" }, Ji = { class: "capture-frame" }, Qi = { class: "control-group control-group--tools" }, er = { class: "tool-pill" }, tr = ["title", "disabled"], nr = { class: "select-field" }, sr = ["disabled"], or = ["disabled"], ar = ["disabled"], ir = { value: "high" }, rr = { value: "standard" }, lr = { value: "small" }, ur = { class: "dimension-group optional-size" }, cr = { class: "dimension" }, dr = ["value"], pr = { class: "dimension" }, hr = ["value"], fr = { class: "control-group control-group--actions" }, gr = { class: "time" }, vr = { class: "button-label" }, yr = { class: "button-label" }, mr = ["title"], wr = { class: "export-progress__meta" }, _r = { class: "export-progress__track" }, br = ["title"], Cr = ["disabled"], xr = { class: "record-label" }, Sr = {
  key: 0,
  class: "warning"
}, K = "[screen-recorder]", me = 80, yn = 420, mn = 260, kr = 8, Ge = 1, Or = 20, Mr = 10, Tr = /* @__PURE__ */ j({
  __name: "index",
  setup(e) {
    const t = xn(), n = C(null), s = C(null), o = C(null), l = C({ width: 0, height: 0 }), r = C(!1), p = C(0), g = C(!1), f = C(null);
    let y = null, _ = null, O = null, P = null;
    const q = [
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
      settings: v,
      ffmpegStatus: x,
      result: z,
      elapsedMs: b,
      refreshFfmpegStatus: te,
      begin: W,
      pause: fe,
      resume: k,
      stop: Nt,
      exportFile: $t,
      cancelExport: Lt,
      cancel: Qn,
      reset: es
    } = qi(), Et = C(!1), Pe = m(() => h.value === "recording" || h.value === "paused" || h.value === "exporting"), it = m(() => v.value.audio && v.value.format === "mp4"), ze = m(() => it.value && h.value === "recording"), ts = m(() => {
      const a = ze.value && !g.value ? p.value : 0, i = (w, M) => Math.max(0.18, Math.min(1, w + a * M)).toFixed(3);
      return {
        "--bar-1": i(0.28, 0.64),
        "--bar-2": i(0.42, 0.78),
        "--bar-3": i(0.34, 0.94),
        "--bar-4": i(0.22, 0.72)
      };
    }), ns = m(() => {
      if (v.value.format === "gif")
        return "GIF 不支持音频";
      if (g.value && v.value.audio)
        return "音频已开启；实时音量动画不可用不影响导出系统声音";
      if (z.value?.audioDevice)
        return `已录制音频：${z.value.audioDevice}`;
      if (z.value && !z.value.hasAudio)
        return "未检测到可用音频设备，导出视频无声音";
      if (x.value?.available && !x.value.systemAudioAvailable) {
        const a = x.value.audioDevices?.join("、") || "无";
        return v.value.audio ? `未发现系统声音/立体声混音设备；不会自动录制麦克风。当前可用音频设备：${a}` : "录制音频已关闭";
      }
      return v.value.audio ? "录制音频已开启。系统声音将通过 WASAPI Loopback 捕获" : "录制音频已关闭";
    }), Rt = m(() => {
      const a = f.value?.progress ?? 0.03;
      return Math.max(1, Math.min(100, Math.round(a * 100)));
    }), rt = m(() => {
      const a = f.value;
      return a ? a.totalFrames && a.stage === "frames" ? `${a.message}` : a.message || "正在导出..." : "正在导出...";
    }), ss = m(() => {
      const a = f.value;
      return a?.totalFrames ? `${rt.value} (${a.currentFrame}/${a.totalFrames})` : rt.value;
    }), os = m(() => {
      const a = Math.floor(b.value / 1e3), i = Math.floor(a / 60).toString().padStart(2, "0"), w = (a % 60).toString().padStart(2, "0");
      return `${i}:${w}`;
    }), ge = async (a) => {
      try {
        await a();
      } catch (i) {
        console.error(`${K} action failed`, i), Et.value || vt.msg(i?.message || String(i), "error");
      }
    }, Dt = (a) => Math.max(2, Math.floor(Math.round(a) / 2) * 2), Wt = (a) => Math.max(1, Math.round(a)), lt = async () => {
      const a = n.value;
      if (!a)
        throw new Error("录制视口尚未准备好");
      const i = a.getBoundingClientRect(), w = await t.scaleFactor(), M = await t.innerPosition(), N = Wt(i.width * w), A = Wt(i.height * w);
      if (N < me || A < me)
        throw new Error("录制区域太小，请放大录制窗口");
      const F = {
        x: i.left,
        y: i.top,
        width: N / w,
        height: A / w,
        screenX: Math.round(M.x + i.left * w),
        screenY: Math.round(M.y + i.top * w),
        physicalWidth: N,
        physicalHeight: A,
        scale: w
      };
      return console.info(`${K} capture region`, {
        ...F,
        logicalSize: `${F.width}x${F.height}`,
        physicalSize: `${F.physicalWidth}x${F.physicalHeight}`
      }), F;
    }, At = async () => {
      const a = await lt(), i = Dt(a.physicalWidth), w = Dt(a.physicalHeight);
      return {
        ...a,
        width: i / a.scale,
        height: w / a.scale,
        physicalWidth: i,
        physicalHeight: w
      };
    }, B = async () => {
      try {
        const a = await lt();
        l.value = {
          width: a.physicalWidth,
          height: a.physicalHeight
        }, await Le({
          x: Math.round(a.x * a.scale),
          y: Math.round(a.y * a.scale),
          width: a.physicalWidth,
          height: a.physicalHeight
        }).catch(() => {
        });
      } catch {
        l.value = { width: 0, height: 0 }, await Le(null).catch(() => {
        });
      }
    }, Fe = async () => {
      await Le(null).catch(() => {
      });
    }, as = () => {
      r.value = !1;
    }, Ft = () => {
      window.setTimeout(() => {
        B();
      }, 120);
    }, jt = () => new Promise((a) => {
      requestAnimationFrame(() => requestAnimationFrame(() => a()));
    }), is = async () => {
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
    }, Bt = (a, i) => {
      const w = Math.min(a.width, i.width), M = Math.min(a.height, i.height), N = i.x + i.width - w, A = i.y + i.height - M;
      return {
        x: Math.min(Math.max(a.x, i.x), N),
        y: Math.min(Math.max(a.y, i.y), A),
        width: w,
        height: M
      };
    }, rs = (a, i, w) => {
      if (!i) return !1;
      const M = Math.max(8, Math.round(8 * w)), N = i.x + i.width, A = i.y + i.height, F = a.screenX + a.physicalWidth, L = a.screenY + a.physicalHeight;
      return a.screenX <= i.x + M && a.screenY <= i.y + M && F >= N - M && L >= A - M;
    }, ls = (a, i, w) => {
      if (!w) return a;
      const M = Math.round(Or * i), N = Math.round(Mr * i);
      return {
        ...a,
        physicalWidth: Math.max(me, a.physicalWidth - M),
        physicalHeight: Math.max(me, a.physicalHeight - N)
      };
    }, Ht = async (a) => {
      await t.setSize(new le(Math.round(a.width), Math.round(a.height))), await t.setPosition(new X(Math.round(a.x), Math.round(a.y))), await jt();
    }, ut = async () => {
      const [a, i] = await Promise.all([
        lt(),
        is()
      ]);
      return { actualRegion: a, currentFrame: i };
    }, us = async (a, i, w) => {
      const { actualRegion: M, currentFrame: N } = await ut(), A = M.screenX - N.x, F = M.screenY - N.y, L = Math.max(0, N.width - M.physicalWidth), Be = Math.max(0, N.height - M.physicalHeight);
      return {
        x: a.screenX - A,
        y: a.screenY - F,
        width: Math.max(i, a.physicalWidth + L),
        height: Math.max(w, a.physicalHeight + Be)
      };
    }, Gt = async () => {
      O?.(), O = null, p.value = 0;
    }, je = async () => {
      if (!(!it.value || O))
        try {
          console.info(`${K} backend audio meter listening`), O = await Ye("screen_recorder_audio_level", (a) => {
            if (!ze.value) {
              p.value = 0;
              return;
            }
            const i = Math.max(0, Math.min(1, Number(a.payload?.level ?? 0)));
            p.value = p.value * 0.38 + i * 0.62;
          }), g.value = !1;
        } catch (a) {
          console.error(`${K} audio meter failed`, a), g.value = !0;
        }
    }, cs = async (a) => {
      a.button !== 0 || Pe.value || (await Fe(), await t.startDragging().catch((i) => {
        vt.msg(i?.message || String(i), "error");
      }), Ft());
    }, ds = async (a) => {
      Pe.value || (as(), await Fe(), await t.startResizeDragging(a).catch((i) => {
        vt.msg(i?.message || String(i), "error");
      }), Ft());
    }, ps = () => ge(async () => {
      console.info(`${K} handle start`), f.value = null, await je(), await ye(!0).catch(() => {
      }), await B(), await W(await At());
    }), hs = () => ge(async () => {
      console.info(`${K} handle pause`), await fe();
    }), fs = () => ge(async () => {
      console.info(`${K} handle resume`), await k(await At());
    }), gs = () => ge(async () => {
      console.info(`${K} handle stop/export`), f.value = {
        stage: "encode",
        message: v.value.format === "gif" ? "准备生成 GIF 帧" : "准备导出 MP4",
        progress: 0.01,
        currentFrame: 0
      }, await Nt(), p.value = 0, await $t(), await B(), await ye(!1).catch(() => {
      });
    }), vs = () => ge(async () => {
      console.info(`${K} handle cancel export`), await Lt(), f.value = null, await B();
    }), ys = () => {
      const a = { ...v.value };
      Fe(), es(), v.value = a, h.value = "ready", z.value = null, f.value = null, ye(!0).catch(() => {
      }), we(B), je();
    }, ms = async (a) => {
      const i = await Bs(a.screenX, a.screenY), w = i?.scaleFactor || await t.scaleFactor();
      r.value = !0, await we(), await jt();
      const M = Math.round(yn * w), N = Math.round(mn * w), A = i ? {
        x: i.position.x,
        y: i.position.y,
        width: i.size.width,
        height: i.size.height
      } : null, F = rs(a, A, w), L = ls(a, w, !F), Be = await us(
        L,
        M,
        N
      );
      let ct = !1;
      try {
        await t.hide(), ct = !0;
      } catch {
        ct = !1;
      }
      try {
        await Ht(
          A && F ? Bt(Be, A) : Be
        ), await we();
        const dt = async () => {
          const { actualRegion: se, currentFrame: Ne } = await ut(), ee = {
            x: L.screenX - se.screenX,
            y: L.screenY - se.screenY,
            width: L.physicalWidth - se.physicalWidth,
            height: L.physicalHeight - se.physicalHeight
          };
          if (Math.abs(ee.x) <= Ge && Math.abs(ee.y) <= Ge && Math.abs(ee.width) <= Ge && Math.abs(ee.height) <= Ge)
            return !0;
          const qt = {
            x: Ne.x + ee.x,
            y: Ne.y + ee.y,
            width: Math.max(M, Ne.width + ee.width),
            height: Math.max(N, Ne.height + ee.height)
          };
          return await Ht(
            A && F ? Bt(qt, A) : qt
          ), !1;
        };
        for (let se = 0; se < kr && !await dt(); se += 1)
          ;
        const { actualRegion: ne } = await ut();
        console.info(`${K} snap result`, {
          target: a,
          snapTarget: L,
          actualRegion: ne,
          residual: {
            left: ne.screenX - L.screenX,
            top: ne.screenY - L.screenY,
            right: ne.screenX + ne.physicalWidth - (L.screenX + L.physicalWidth),
            bottom: ne.screenY + ne.physicalHeight - (L.screenY + L.physicalHeight)
          },
          monitorCovering: F
        });
      } catch (dt) {
        console.warn(`${K} snap correction skipped`, dt);
      } finally {
        await B(), ct && (await t.show().catch(() => {
        }), await t.setFocus().catch(() => {
        }));
      }
    }, ws = () => ge(async () => {
      await Fe();
      const a = await Wi();
      await ms(a);
    }), _s = async () => {
      await t.minimize();
    }, Vt = async () => {
      Et.value = !0;
      try {
        h.value === "exporting" ? await Lt().catch(() => {
        }) : await Qn(), await Le(null).catch(() => {
        }), await ye(!1).catch(() => {
        });
      } catch {
      }
      await Ai();
    }, bs = async () => {
      z.value && (await B(), await d("open_file_with_default_app", { filePath: z.value.path }));
    }, Cs = async () => {
      z.value && (await B(), await d("show_file_in_folder", { filePath: z.value.path }));
    }, Ut = (a) => {
      a.key === "Escape" && (a.preventDefault(), Vt());
    };
    return nt(async () => {
      h.value = "ready", await t.setMinSize(new xt(yn, mn)).catch(() => {
      }), await ye(!0).catch(() => {
      }), await te().catch(() => {
      }), await we(), await B(), await je(), await we(), await t.emit("screen_recorder_ready"), P = await Ye("screen_recorder_export_progress", (a) => {
        f.value = a.payload;
      }).catch(() => null), n.value && (y = new ResizeObserver(() => {
        B();
      }), y.observe(n.value)), _ = await t.onMoved(() => {
        B();
      }).catch(() => null), window.addEventListener("resize", B), window.addEventListener("keydown", Ut);
    }), Ce(it, (a) => {
      a ? je() : Gt();
    }), Ce(h, (a) => {
      a !== "recording" && (p.value = 0), a !== "exporting" && (f.value = null);
    }), _n(() => {
      y?.disconnect(), _?.(), P?.(), window.removeEventListener("resize", B), window.removeEventListener("keydown", Ut), Le(null).catch(() => {
      }), ye(!1).catch(() => {
      }), Gt();
    }), (a, i) => (S(), I("div", Ki, [
      u(
        "div",
        {
          class: $(["recorder-shell", { recording: c(h) === "recording", paused: c(h) === "paused", "snap-aligned": r.value }])
        },
        [
          (S(), I(
            _e,
            null,
            Ns(q, (w) => u("span", {
              key: w.className,
              class: $(["resize-zone", w.className]),
              onMousedown: Ee((M) => ds(w.direction), ["prevent"])
            }, null, 42, Zi)),
            64
            /* STABLE_FRAGMENT */
          )),
          u(
            "header",
            {
              ref_key: "titleBarRef",
              ref: s,
              class: "title-bar",
              onMousedown: cs
            },
            [
              u(
                "span",
                Yi,
                D(a.$t("screenRecorder.title") || "区域录制"),
                1
                /* TEXT */
              ),
              u(
                "div",
                {
                  class: "window-actions",
                  onMousedown: i[0] || (i[0] = Ee(() => {
                  }, ["stop"]))
                },
                [
                  u("button", {
                    class: "title-button title-button--window",
                    title: "最小化",
                    onClick: _s
                  }, [
                    T(c(Ks), {
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
                    onClick: Vt
                  }, [
                    T(c(qs), {
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
          u("main", Xi, [
            i[9] || (i[9] = u(
              "span",
              { class: "viewport-mask top" },
              null,
              -1
              /* HOISTED */
            )),
            i[10] || (i[10] = u(
              "span",
              { class: "viewport-mask right" },
              null,
              -1
              /* HOISTED */
            )),
            i[11] || (i[11] = u(
              "span",
              { class: "viewport-mask bottom" },
              null,
              -1
              /* HOISTED */
            )),
            i[12] || (i[12] = u(
              "span",
              { class: "viewport-mask left" },
              null,
              -1
              /* HOISTED */
            )),
            u("div", Ji, [
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
              i[5] || (i[5] = u(
                "span",
                { class: "viewport-border top" },
                null,
                -1
                /* HOISTED */
              )),
              i[6] || (i[6] = u(
                "span",
                { class: "viewport-border right" },
                null,
                -1
                /* HOISTED */
              )),
              i[7] || (i[7] = u(
                "span",
                { class: "viewport-border bottom" },
                null,
                -1
                /* HOISTED */
              )),
              i[8] || (i[8] = u(
                "span",
                { class: "viewport-border left" },
                null,
                -1
                /* HOISTED */
              ))
            ])
          ]),
          u(
            "footer",
            {
              ref_key: "controlStripRef",
              ref: o,
              class: "control-strip"
            },
            [
              u("div", Qi, [
                u("div", er, [
                  c(h) === "ready" || c(h) === "completed" ? (S(), I(
                    "button",
                    {
                      key: 0,
                      class: "icon-control snap-control",
                      title: "拖到目标窗口并松开以对齐",
                      "aria-label": "对齐目标窗口",
                      onMousedown: Ee(ws, ["prevent"])
                    },
                    [
                      T(c(Zs), {
                        theme: "outline",
                        size: "18",
                        strokeWidth: 3,
                        strokeLinecap: "butt"
                      })
                    ],
                    32
                    /* NEED_HYDRATION */
                  )) : Q("v-if", !0),
                  u("button", {
                    class: $(["audio-meter", { active: ze.value && p.value > 0.03, metering: ze.value && !g.value, muted: !ze.value || g.value }]),
                    title: ns.value,
                    "aria-label": "系统声音录制状态",
                    disabled: c(h) === "exporting" || c(v).format === "gif"
                  }, [
                    u(
                      "span",
                      {
                        class: "audio-bars",
                        style: Se(ts.value)
                      },
                      i[13] || (i[13] = [
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
                  ], 10, tr)
                ]),
                u("label", nr, [
                  re(u("select", {
                    "onUpdate:modelValue": i[1] || (i[1] = (w) => c(v).fps = w),
                    disabled: Pe.value
                  }, i[14] || (i[14] = [
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
                  ]), 8, sr), [
                    [pt, c(v).fps]
                  ]),
                  i[15] || (i[15] = u(
                    "span",
                    { class: "unit" },
                    "fps",
                    -1
                    /* HOISTED */
                  ))
                ]),
                re(u("select", {
                  "onUpdate:modelValue": i[2] || (i[2] = (w) => c(v).format = w),
                  class: "format-select optional-format",
                  disabled: Pe.value
                }, i[16] || (i[16] = [
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
                ]), 8, or), [
                  [pt, c(v).format]
                ]),
                re(u("select", {
                  "onUpdate:modelValue": i[3] || (i[3] = (w) => c(v).quality = w),
                  class: "quality-select optional-quality",
                  disabled: Pe.value
                }, [
                  u(
                    "option",
                    ir,
                    D(a.$t("screenRecorder.qualityHigh")),
                    1
                    /* TEXT */
                  ),
                  u(
                    "option",
                    rr,
                    D(a.$t("screenRecorder.qualityStandard")),
                    1
                    /* TEXT */
                  ),
                  u(
                    "option",
                    lr,
                    D(a.$t("screenRecorder.qualitySmall")),
                    1
                    /* TEXT */
                  )
                ], 8, ar), [
                  [pt, c(v).quality]
                ]),
                u("div", ur, [
                  u("label", cr, [
                    u("input", {
                      value: l.value.width,
                      readonly: ""
                    }, null, 8, dr)
                  ]),
                  i[17] || (i[17] = u(
                    "span",
                    { class: "multiply" },
                    "×",
                    -1
                    /* HOISTED */
                  )),
                  u("label", pr, [
                    u("input", {
                      value: l.value.height,
                      readonly: ""
                    }, null, 8, hr)
                  ]),
                  i[18] || (i[18] = u(
                    "span",
                    { class: "unit" },
                    "px",
                    -1
                    /* HOISTED */
                  ))
                ])
              ]),
              u("div", fr, [
                c(h) === "recording" || c(h) === "paused" ? (S(), I(
                  _e,
                  { key: 0 },
                  [
                    u(
                      "span",
                      gr,
                      D(os.value),
                      1
                      /* TEXT */
                    ),
                    u("button", {
                      class: "control-button",
                      onClick: i[4] || (i[4] = (w) => c(h) === "paused" ? fs() : hs())
                    }, [
                      u(
                        "span",
                        vr,
                        D(c(h) === "paused" ? a.$t("screenRecorder.resume") : a.$t("screenRecorder.pause")),
                        1
                        /* TEXT */
                      )
                    ]),
                    u("button", {
                      class: "control-button danger",
                      onClick: gs
                    }, [
                      u(
                        "span",
                        yr,
                        D(a.$t("screenRecorder.stop")),
                        1
                        /* TEXT */
                      )
                    ])
                  ],
                  64
                  /* STABLE_FRAGMENT */
                )) : c(h) === "exporting" ? (S(), I(
                  _e,
                  { key: 1 },
                  [
                    u("div", {
                      class: "export-progress",
                      title: ss.value
                    }, [
                      u("div", wr, [
                        u(
                          "span",
                          null,
                          D(rt.value),
                          1
                          /* TEXT */
                        ),
                        u(
                          "strong",
                          null,
                          D(Rt.value) + "%",
                          1
                          /* TEXT */
                        )
                      ]),
                      u("div", _r, [
                        u(
                          "span",
                          {
                            style: Se({ width: `${Rt.value}%` })
                          },
                          null,
                          4
                          /* STYLE */
                        )
                      ])
                    ], 8, mr),
                    u("button", {
                      class: "control-button danger",
                      title: "取消导出",
                      onClick: vs
                    }, i[19] || (i[19] = [
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
                )) : c(h) === "completed" && c(z) ? (S(), I(
                  _e,
                  { key: 2 },
                  [
                    u("span", {
                      class: "save-status optional-save-status",
                      title: c(z).path
                    }, D(c(z).hasAudio ? "已保存·有声" : "已保存·无声"), 9, br),
                    u("button", {
                      class: "control-button",
                      title: "打开文件",
                      onClick: bs
                    }, i[20] || (i[20] = [
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
                      onClick: Cs
                    }, i[21] || (i[21] = [
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
                      onClick: ys
                    }, i[22] || (i[22] = [
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
                )) : (S(), I("button", {
                  key: 3,
                  class: "record-button",
                  disabled: c(x)?.available === !1 || l.value.width < me || l.value.height < me,
                  onClick: ps
                }, [
                  i[23] || (i[23] = u(
                    "span",
                    { class: "record-dot" },
                    null,
                    -1
                    /* HOISTED */
                  )),
                  u(
                    "span",
                    xr,
                    D(a.$t("screenRecorder.start")),
                    1
                    /* TEXT */
                  )
                ], 8, Cr))
              ])
            ],
            512
            /* NEED_PATCH */
          )
        ],
        2
        /* CLASS */
      ),
      c(x) && !c(x).available ? (S(), I(
        "p",
        Sr,
        D(c(x).message || a.$t("screenRecorder.ffmpegMissing")),
        1
        /* TEXT */
      )) : Q("v-if", !0)
    ]));
  }
}), Ir = (e, t) => {
  const n = e.__vccOpts || e;
  for (const [s, o] of t)
    n[s] = o;
  return n;
}, Pr = /* @__PURE__ */ Ir(Tr, [["__scopeId", "data-v-c070c6df"]]), zr = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Pr
}, Symbol.toStringTag, { value: "Module" }));
export {
  $r as activate
};
