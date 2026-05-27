import { inject as le, createVNode as N, getCurrentInstance as Se, ref as S, computed as w, unref as u, readonly as Bs, getCurrentScope as Hs, onScopeDispose as Gs, onMounted as ct, nextTick as Ce, watch as ke, isRef as Us, warn as Vs, provide as qs, defineComponent as F, createElementBlock as E, openBlock as M, mergeProps as Ks, renderSlot as Me, createElementVNode as c, normalizeClass as L, Transition as It, withCtx as ce, withDirectives as ue, normalizeStyle as Oe, createTextVNode as Ys, toDisplayString as A, vShow as tt, shallowReactive as Xs, createBlock as te, createCommentVNode as ne, resolveDynamicComponent as Pn, Fragment as xe, withModifiers as Fe, isVNode as Be, render as nt, onUnmounted as Nn, renderList as Zs, vModelSelect as yt } from "vue";
const el = (e) => {
  e.registerRoute({
    target: "window",
    path: "/screen-recorder",
    name: "ScreenRecorder",
    component: () => Promise.resolve().then(() => Jr)
  });
};
function Js(e, t, n, s) {
  if (typeof t == "function" ? e !== t || !0 : !t.has(e)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
  return n === "m" ? s : n === "a" ? s.call(e) : s ? s.value : t.get(e);
}
function Qs(e, t, n, s, a) {
  if (typeof t == "function" ? e !== t || !0 : !t.has(e)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
  return t.set(e, n), n;
}
var Je;
const K = "__TAURI_TO_IPC_KEY__";
function eo(e, t = !1) {
  return window.__TAURI_INTERNALS__.transformCallback(e, t);
}
async function d(e, t = {}, n) {
  return window.__TAURI_INTERNALS__.invoke(e, t, n);
}
class to {
  get rid() {
    return Js(this, Je, "f");
  }
  constructor(t) {
    Je.set(this, void 0), Qs(this, Je, t);
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
Je = /* @__PURE__ */ new WeakMap();
class re {
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
  [K]() {
    return {
      width: this.width,
      height: this.height
    };
  }
  toJSON() {
    return this[K]();
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
    return new re(this.width / t, this.height / t);
  }
  [K]() {
    return {
      width: this.width,
      height: this.height
    };
  }
  toJSON() {
    return this[K]();
  }
}
class me {
  constructor(t) {
    this.size = t;
  }
  toLogical(t) {
    return this.size instanceof re ? this.size : this.size.toLogical(t);
  }
  toPhysical(t) {
    return this.size instanceof de ? this.size : this.size.toPhysical(t);
  }
  [K]() {
    return {
      [`${this.size.type}`]: {
        width: this.size.width,
        height: this.size.height
      }
    };
  }
  toJSON() {
    return this[K]();
  }
}
class zn {
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
    return new J(this.x * t, this.y * t);
  }
  [K]() {
    return {
      x: this.x,
      y: this.y
    };
  }
  toJSON() {
    return this[K]();
  }
}
class J {
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
    return new zn(this.x / t, this.y / t);
  }
  [K]() {
    return {
      x: this.x,
      y: this.y
    };
  }
  toJSON() {
    return this[K]();
  }
}
class Xe {
  constructor(t) {
    this.position = t;
  }
  toLogical(t) {
    return this.position instanceof zn ? this.position : this.position.toLogical(t);
  }
  toPhysical(t) {
    return this.position instanceof J ? this.position : this.position.toPhysical(t);
  }
  [K]() {
    return {
      [`${this.position.type}`]: {
        x: this.position.x,
        y: this.position.y
      }
    };
  }
  toJSON() {
    return this[K]();
  }
}
var B;
(function(e) {
  e.WINDOW_RESIZED = "tauri://resize", e.WINDOW_MOVED = "tauri://move", e.WINDOW_CLOSE_REQUESTED = "tauri://close-requested", e.WINDOW_DESTROYED = "tauri://destroyed", e.WINDOW_FOCUS = "tauri://focus", e.WINDOW_BLUR = "tauri://blur", e.WINDOW_SCALE_FACTOR_CHANGED = "tauri://scale-change", e.WINDOW_THEME_CHANGED = "tauri://theme-changed", e.WINDOW_CREATED = "tauri://window-created", e.WEBVIEW_CREATED = "tauri://webview-created", e.DRAG_ENTER = "tauri://drag-enter", e.DRAG_OVER = "tauri://drag-over", e.DRAG_DROP = "tauri://drag-drop", e.DRAG_LEAVE = "tauri://drag-leave";
})(B || (B = {}));
async function En(e, t) {
  await d("plugin:event|unlisten", {
    event: e,
    eventId: t
  });
}
async function st(e, t, n) {
  var s;
  const a = typeof n?.target == "string" ? { kind: "AnyLabel", label: n.target } : (s = n?.target) !== null && s !== void 0 ? s : { kind: "Any" };
  return d("plugin:event|listen", {
    event: e,
    target: a,
    handler: eo(t)
  }).then((r) => async () => En(e, r));
}
async function no(e, t, n) {
  return st(e, (s) => {
    En(e, s.id), t(s);
  }, n);
}
async function so(e, t) {
  await d("plugin:event|emit", {
    event: e,
    payload: t
  });
}
async function oo(e, t, n) {
  await d("plugin:event|emit_to", {
    target: typeof e == "string" ? { kind: "AnyLabel", label: e } : e,
    event: t,
    payload: n
  });
}
class je extends to {
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
      rgba: ot(t),
      width: n,
      height: s
    }).then((a) => new je(a));
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
      bytes: ot(t)
    }).then((n) => new je(n));
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
    return d("plugin:image|from_path", { path: t }).then((n) => new je(n));
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
function ot(e) {
  return e == null ? null : typeof e == "string" ? e : e instanceof je ? e.rid : e;
}
var kt;
(function(e) {
  e[e.Critical = 1] = "Critical", e[e.Informational = 2] = "Informational";
})(kt || (kt = {}));
class ao {
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
var on;
(function(e) {
  e.None = "none", e.Normal = "normal", e.Indeterminate = "indeterminate", e.Paused = "paused", e.Error = "error";
})(on || (on = {}));
function $n() {
  return new Rn(window.__TAURI_INTERNALS__.metadata.currentWindow.label, {
    // @ts-expect-error `skip` is not defined in the public API but it is handled by the constructor
    skip: !0
  });
}
async function wt() {
  return d("plugin:window|get_all_windows").then((e) => e.map((t) => new Rn(t, {
    // @ts-expect-error `skip` is not defined in the public API but it is handled by the constructor
    skip: !0
  })));
}
const mt = ["tauri://created", "tauri://error"];
class Rn {
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
    }).then(async () => this.emit("tauri://created")).catch(async (a) => this.emit("tauri://error", a));
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
    return (n = (await wt()).find((s) => s.label === t)) !== null && n !== void 0 ? n : null;
  }
  /**
   * Get an instance of `Window` for the current window.
   */
  static getCurrent() {
    return $n();
  }
  /**
   * Gets a list of instances of `Window` for all available windows.
   */
  static async getAll() {
    return wt();
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
    for (const t of await wt())
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
    } : st(t, n, {
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
    } : no(t, n, {
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
    if (mt.includes(t)) {
      for (const s of this.listeners[t] || [])
        s({
          event: t,
          id: -1,
          payload: n
        });
      return;
    }
    return so(t, n);
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
    if (mt.includes(n)) {
      for (const a of this.listeners[n] || [])
        a({
          event: n,
          id: -1,
          payload: s
        });
      return;
    }
    return oo(t, n, s);
  }
  /** @ignore */
  _handleTauriEvent(t, n) {
    return mt.includes(t) ? (t in this.listeners ? this.listeners[t].push(n) : this.listeners[t] = [n], !0) : !1;
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
    }).then((t) => new J(t));
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
    }).then((t) => new J(t));
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
    return d("plugin:window|outer_size", {
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
    return t && (t === kt.Critical ? n = { type: "Critical" } : n = { type: "Informational" }), d("plugin:window|request_user_attention", {
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
      value: t instanceof me ? t : new me(t)
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
      value: t instanceof me ? t : t ? new me(t) : null
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
      value: t instanceof me ? t : t ? new me(t) : null
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
      value: t instanceof Xe ? t : new Xe(t)
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
      value: ot(t)
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
      value: t instanceof Xe ? t : new Xe(t)
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
      value: t ? ot(t) : void 0
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
    return this.listen(B.WINDOW_MOVED, (n) => {
      n.payload = new J(n.payload), t(n);
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
      const s = new ao(n);
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
    const n = await this.listen(B.DRAG_ENTER, (l) => {
      t({
        ...l,
        payload: {
          type: "enter",
          paths: l.payload.paths,
          position: new J(l.payload.position)
        }
      });
    }), s = await this.listen(B.DRAG_OVER, (l) => {
      t({
        ...l,
        payload: {
          type: "over",
          position: new J(l.payload.position)
        }
      });
    }), a = await this.listen(B.DRAG_DROP, (l) => {
      t({
        ...l,
        payload: {
          type: "drop",
          paths: l.payload.paths,
          position: new J(l.payload.position)
        }
      });
    }), r = await this.listen(B.DRAG_LEAVE, (l) => {
      t({ ...l, payload: { type: "leave" } });
    });
    return () => {
      n(), a(), s(), r();
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
    const n = await this.listen(B.WINDOW_FOCUS, (a) => {
      t({ ...a, payload: !0 });
    }), s = await this.listen(B.WINDOW_BLUR, (a) => {
      t({ ...a, payload: !1 });
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
var an;
(function(e) {
  e.Disabled = "disabled", e.Throttle = "throttle", e.Suspend = "suspend";
})(an || (an = {}));
var rn;
(function(e) {
  e.AppearanceBased = "appearanceBased", e.Light = "light", e.Dark = "dark", e.MediumLight = "mediumLight", e.UltraDark = "ultraDark", e.Titlebar = "titlebar", e.Selection = "selection", e.Menu = "menu", e.Popover = "popover", e.Sidebar = "sidebar", e.HeaderView = "headerView", e.Sheet = "sheet", e.WindowBackground = "windowBackground", e.HudWindow = "hudWindow", e.FullScreenUI = "fullScreenUI", e.Tooltip = "tooltip", e.ContentBackground = "contentBackground", e.UnderWindowBackground = "underWindowBackground", e.UnderPageBackground = "underPageBackground", e.Mica = "mica", e.Blur = "blur", e.Acrylic = "acrylic", e.Tabbed = "tabbed", e.TabbedDark = "tabbedDark", e.TabbedLight = "tabbedLight";
})(rn || (rn = {}));
var ln;
(function(e) {
  e.FollowsWindowActiveState = "followsWindowActiveState", e.Active = "active", e.Inactive = "inactive";
})(ln || (ln = {}));
function io(e) {
  return e === null ? null : {
    name: e.name,
    scaleFactor: e.scaleFactor,
    position: new J(e.position),
    size: new de(e.size)
  };
}
async function ro(e, t) {
  return d("plugin:window|monitor_from_point", {
    x: e,
    y: t
  }).then(io);
}
var lo = {
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
function co() {
  return "icon-" + ((1 + Math.random()) * 4294967296 | 0).toString(16).substring(1);
}
function uo(e, t, n) {
  var s = typeof t.fill == "string" ? [t.fill] : t.fill || [], a = [], r = t.theme || n.theme;
  switch (r) {
    case "outline":
      a.push(typeof s[0] == "string" ? s[0] : "currentColor"), a.push("none"), a.push(typeof s[0] == "string" ? s[0] : "currentColor"), a.push("none");
      break;
    case "filled":
      a.push(typeof s[0] == "string" ? s[0] : "currentColor"), a.push(typeof s[0] == "string" ? s[0] : "currentColor"), a.push("#FFF"), a.push("#FFF");
      break;
    case "two-tone":
      a.push(typeof s[0] == "string" ? s[0] : "currentColor"), a.push(typeof s[1] == "string" ? s[1] : n.colors.twoTone.twoTone), a.push(typeof s[0] == "string" ? s[0] : "currentColor"), a.push(typeof s[1] == "string" ? s[1] : n.colors.twoTone.twoTone);
      break;
    case "multi-color":
      a.push(typeof s[0] == "string" ? s[0] : "currentColor"), a.push(typeof s[1] == "string" ? s[1] : n.colors.multiColor.outFillColor), a.push(typeof s[2] == "string" ? s[2] : n.colors.multiColor.innerStrokeColor), a.push(typeof s[3] == "string" ? s[3] : n.colors.multiColor.innerFillColor);
      break;
  }
  return {
    size: t.size || n.size,
    strokeWidth: t.strokeWidth || n.strokeWidth,
    strokeLinecap: t.strokeLinecap || n.strokeLinecap,
    strokeLinejoin: t.strokeLinejoin || n.strokeLinejoin,
    colors: a,
    id: e
  };
}
var ho = Symbol("icon-context");
function Pt(e, t, n) {
  var s = {
    name: "icon-" + e,
    props: ["size", "strokeWidth", "strokeLinecap", "strokeLinejoin", "theme", "fill", "spin"],
    setup: function(r) {
      var l = co(), h = le(ho, lo);
      return function() {
        var p = r.size, g = r.strokeWidth, f = r.strokeLinecap, b = r.strokeLinejoin, I = r.theme, P = r.fill, U = r.spin, v = uo(l, {
          size: p,
          strokeWidth: g,
          strokeLinecap: f,
          strokeLinejoin: b,
          theme: I,
          fill: P
        }, h), _ = [h.prefix + "-icon"];
        return _.push(h.prefix + "-icon-" + e), U && _.push(h.prefix + "-icon-spin"), N("span", {
          class: _.join(" ")
        }, [n(v)]);
      };
    }
  };
  return s;
}
const po = Pt("close-small", !1, function(e) {
  return N("svg", {
    width: e.size,
    height: e.size,
    viewBox: "0 0 48 48",
    fill: "none"
  }, [N("path", {
    d: "M14 14L34 34",
    stroke: e.colors[0],
    "stroke-width": e.strokeWidth,
    "stroke-linecap": e.strokeLinecap,
    "stroke-linejoin": e.strokeLinejoin
  }, null), N("path", {
    d: "M14 34L34 14",
    stroke: e.colors[0],
    "stroke-width": e.strokeWidth,
    "stroke-linecap": e.strokeLinecap,
    "stroke-linejoin": e.strokeLinejoin
  }, null)]);
}), fo = Pt("minus", !1, function(e) {
  return N("svg", {
    width: e.size,
    height: e.size,
    viewBox: "0 0 48 48",
    fill: "none"
  }, [N("path", {
    d: "M10.5 24L38.5 24",
    stroke: e.colors[0],
    "stroke-width": e.strokeWidth,
    "stroke-linecap": e.strokeLinecap,
    "stroke-linejoin": e.strokeLinejoin
  }, null)]);
}), go = Pt("radar", !1, function(e) {
  return N("svg", {
    width: e.size,
    height: e.size,
    viewBox: "0 0 48 48",
    fill: "none"
  }, [N("path", {
    "fill-rule": "evenodd",
    "clip-rule": "evenodd",
    d: "M24 44C35.0457 44 44 35.0457 44 24C44 12.9543 35.0457 4 24 4C12.9543 4 4 12.9543 4 24C4 35.0457 12.9543 44 24 44Z",
    stroke: e.colors[0],
    "stroke-width": e.strokeWidth,
    "stroke-linecap": e.strokeLinecap,
    "stroke-linejoin": e.strokeLinejoin
  }, null), N("path", {
    "fill-rule": "evenodd",
    "clip-rule": "evenodd",
    d: "M24 34C29.5228 34 34 29.5228 34 24C34 18.4772 29.5228 14 24 14C18.4772 14 14 18.4772 14 24C14 29.5228 18.4772 34 24 34Z",
    stroke: e.colors[0],
    "stroke-width": e.strokeWidth,
    "stroke-linecap": e.strokeLinecap,
    "stroke-linejoin": e.strokeLinejoin
  }, null), N("path", {
    d: "M24 4V44",
    stroke: e.colors[0],
    "stroke-width": e.strokeWidth,
    "stroke-linecap": e.strokeLinecap,
    "stroke-linejoin": e.strokeLinejoin
  }, null), N("path", {
    d: "M4 24.0002L18 24.0086",
    stroke: e.colors[0],
    "stroke-width": e.strokeWidth,
    "stroke-linecap": e.strokeLinecap
  }, null), N("path", {
    d: "M4 24.0083L44 24.0083",
    stroke: e.colors[0],
    "stroke-width": e.strokeWidth,
    "stroke-linecap": e.strokeLinecap,
    "stroke-linejoin": e.strokeLinejoin
  }, null)]);
}), Ln = Symbol(), Qe = "el", vo = "is-", ie = (e, t, n, s, a) => {
  let r = `${e}-${t}`;
  return n && (r += `-${n}`), s && (r += `__${s}`), a && (r += `--${a}`), r;
}, Wn = Symbol("namespaceContextKey"), yo = (e) => {
  const t = e || (Se() ? le(Wn, S(Qe)) : S(Qe));
  return w(() => u(t) || Qe);
}, Nt = (e, t) => {
  const n = yo(t);
  return {
    namespace: n,
    b: (v = "") => ie(n.value, e, v, "", ""),
    e: (v) => v ? ie(n.value, e, "", v, "") : "",
    m: (v) => v ? ie(n.value, e, "", "", v) : "",
    be: (v, _) => v && _ ? ie(n.value, e, v, _, "") : "",
    em: (v, _) => v && _ ? ie(n.value, e, "", v, _) : "",
    bm: (v, _) => v && _ ? ie(n.value, e, v, "", _) : "",
    bem: (v, _, O) => v && _ && O ? ie(n.value, e, v, _, O) : "",
    is: (v, ..._) => {
      const O = _.length >= 1 ? _[0] : !0;
      return v && O ? `${vo}${v}` : "";
    },
    cssVar: (v) => {
      const _ = {};
      for (const O in v)
        v[O] && (_[`--${n.value}-${O}`] = v[O]);
      return _;
    },
    cssVarName: (v) => `--${n.value}-${v}`,
    cssVarBlock: (v) => {
      const _ = {};
      for (const O in v)
        v[O] && (_[`--${n.value}-${e}-${O}`] = v[O]);
      return _;
    },
    cssVarBlockName: (v) => `--${n.value}-${e}-${v}`
  };
};
/**
* @vue/shared v3.5.13
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/
const wo = Object.prototype.hasOwnProperty, cn = (e, t) => wo.call(e, t), He = (e) => typeof e == "function", he = (e) => typeof e == "string", Dn = (e) => e !== null && typeof e == "object";
var mo = typeof global == "object" && global && global.Object === Object && global, _o = typeof self == "object" && self && self.Object === Object && self, zt = mo || _o || Function("return this")(), Te = zt.Symbol, An = Object.prototype, bo = An.hasOwnProperty, Co = An.toString, We = Te ? Te.toStringTag : void 0;
function xo(e) {
  var t = bo.call(e, We), n = e[We];
  try {
    e[We] = void 0;
    var s = !0;
  } catch {
  }
  var a = Co.call(e);
  return s && (t ? e[We] = n : delete e[We]), a;
}
var So = Object.prototype, ko = So.toString;
function Mo(e) {
  return ko.call(e);
}
var Oo = "[object Null]", To = "[object Undefined]", un = Te ? Te.toStringTag : void 0;
function Fn(e) {
  return e == null ? e === void 0 ? To : Oo : un && un in Object(e) ? xo(e) : Mo(e);
}
function Io(e) {
  return e != null && typeof e == "object";
}
var Po = "[object Symbol]";
function Et(e) {
  return typeof e == "symbol" || Io(e) && Fn(e) == Po;
}
function No(e, t) {
  for (var n = -1, s = e == null ? 0 : e.length, a = Array(s); ++n < s; )
    a[n] = t(e[n], n, e);
  return a;
}
var $t = Array.isArray, dn = Te ? Te.prototype : void 0, hn = dn ? dn.toString : void 0;
function jn(e) {
  if (typeof e == "string")
    return e;
  if ($t(e))
    return No(e, jn) + "";
  if (Et(e))
    return hn ? hn.call(e) : "";
  var t = e + "";
  return t == "0" && 1 / e == -1 / 0 ? "-0" : t;
}
function Bn(e) {
  var t = typeof e;
  return e != null && (t == "object" || t == "function");
}
var zo = "[object AsyncFunction]", Eo = "[object Function]", $o = "[object GeneratorFunction]", Ro = "[object Proxy]";
function Lo(e) {
  if (!Bn(e))
    return !1;
  var t = Fn(e);
  return t == Eo || t == $o || t == zo || t == Ro;
}
var _t = zt["__core-js_shared__"], pn = function() {
  var e = /[^.]+$/.exec(_t && _t.keys && _t.keys.IE_PROTO || "");
  return e ? "Symbol(src)_1." + e : "";
}();
function Wo(e) {
  return !!pn && pn in e;
}
var Do = Function.prototype, Ao = Do.toString;
function Fo(e) {
  if (e != null) {
    try {
      return Ao.call(e);
    } catch {
    }
    try {
      return e + "";
    } catch {
    }
  }
  return "";
}
var jo = /[\\^$.*+?()[\]{}|]/g, Bo = /^\[object .+?Constructor\]$/, Ho = Function.prototype, Go = Object.prototype, Uo = Ho.toString, Vo = Go.hasOwnProperty, qo = RegExp(
  "^" + Uo.call(Vo).replace(jo, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$"
);
function Ko(e) {
  if (!Bn(e) || Wo(e))
    return !1;
  var t = Lo(e) ? qo : Bo;
  return t.test(Fo(e));
}
function Yo(e, t) {
  return e?.[t];
}
function Hn(e, t) {
  var n = Yo(e, t);
  return Ko(n) ? n : void 0;
}
function Xo(e, t) {
  return e === t || e !== e && t !== t;
}
var Zo = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/, Jo = /^\w*$/;
function Qo(e, t) {
  if ($t(e))
    return !1;
  var n = typeof e;
  return n == "number" || n == "symbol" || n == "boolean" || e == null || Et(e) ? !0 : Jo.test(e) || !Zo.test(e) || t != null && e in Object(t);
}
var Ge = Hn(Object, "create");
function ea() {
  this.__data__ = Ge ? Ge(null) : {}, this.size = 0;
}
function ta(e) {
  var t = this.has(e) && delete this.__data__[e];
  return this.size -= t ? 1 : 0, t;
}
var na = "__lodash_hash_undefined__", sa = Object.prototype, oa = sa.hasOwnProperty;
function aa(e) {
  var t = this.__data__;
  if (Ge) {
    var n = t[e];
    return n === na ? void 0 : n;
  }
  return oa.call(t, e) ? t[e] : void 0;
}
var ia = Object.prototype, ra = ia.hasOwnProperty;
function la(e) {
  var t = this.__data__;
  return Ge ? t[e] !== void 0 : ra.call(t, e);
}
var ca = "__lodash_hash_undefined__";
function ua(e, t) {
  var n = this.__data__;
  return this.size += this.has(e) ? 0 : 1, n[e] = Ge && t === void 0 ? ca : t, this;
}
function pe(e) {
  var t = -1, n = e == null ? 0 : e.length;
  for (this.clear(); ++t < n; ) {
    var s = e[t];
    this.set(s[0], s[1]);
  }
}
pe.prototype.clear = ea;
pe.prototype.delete = ta;
pe.prototype.get = aa;
pe.prototype.has = la;
pe.prototype.set = ua;
function da() {
  this.__data__ = [], this.size = 0;
}
function ut(e, t) {
  for (var n = e.length; n--; )
    if (Xo(e[n][0], t))
      return n;
  return -1;
}
var ha = Array.prototype, pa = ha.splice;
function fa(e) {
  var t = this.__data__, n = ut(t, e);
  if (n < 0)
    return !1;
  var s = t.length - 1;
  return n == s ? t.pop() : pa.call(t, n, 1), --this.size, !0;
}
function ga(e) {
  var t = this.__data__, n = ut(t, e);
  return n < 0 ? void 0 : t[n][1];
}
function va(e) {
  return ut(this.__data__, e) > -1;
}
function ya(e, t) {
  var n = this.__data__, s = ut(n, e);
  return s < 0 ? (++this.size, n.push([e, t])) : n[s][1] = t, this;
}
function Ne(e) {
  var t = -1, n = e == null ? 0 : e.length;
  for (this.clear(); ++t < n; ) {
    var s = e[t];
    this.set(s[0], s[1]);
  }
}
Ne.prototype.clear = da;
Ne.prototype.delete = fa;
Ne.prototype.get = ga;
Ne.prototype.has = va;
Ne.prototype.set = ya;
var wa = Hn(zt, "Map");
function ma() {
  this.size = 0, this.__data__ = {
    hash: new pe(),
    map: new (wa || Ne)(),
    string: new pe()
  };
}
function _a(e) {
  var t = typeof e;
  return t == "string" || t == "number" || t == "symbol" || t == "boolean" ? e !== "__proto__" : e === null;
}
function dt(e, t) {
  var n = e.__data__;
  return _a(t) ? n[typeof t == "string" ? "string" : "hash"] : n.map;
}
function ba(e) {
  var t = dt(this, e).delete(e);
  return this.size -= t ? 1 : 0, t;
}
function Ca(e) {
  return dt(this, e).get(e);
}
function xa(e) {
  return dt(this, e).has(e);
}
function Sa(e, t) {
  var n = dt(this, e), s = n.size;
  return n.set(e, t), this.size += n.size == s ? 0 : 1, this;
}
function ge(e) {
  var t = -1, n = e == null ? 0 : e.length;
  for (this.clear(); ++t < n; ) {
    var s = e[t];
    this.set(s[0], s[1]);
  }
}
ge.prototype.clear = ma;
ge.prototype.delete = ba;
ge.prototype.get = Ca;
ge.prototype.has = xa;
ge.prototype.set = Sa;
var ka = "Expected a function";
function Rt(e, t) {
  if (typeof e != "function" || t != null && typeof t != "function")
    throw new TypeError(ka);
  var n = function() {
    var s = arguments, a = t ? t.apply(this, s) : s[0], r = n.cache;
    if (r.has(a))
      return r.get(a);
    var l = e.apply(this, s);
    return n.cache = r.set(a, l) || r, l;
  };
  return n.cache = new (Rt.Cache || ge)(), n;
}
Rt.Cache = ge;
var Ma = 500;
function Oa(e) {
  var t = Rt(e, function(s) {
    return n.size === Ma && n.clear(), s;
  }), n = t.cache;
  return t;
}
var Ta = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g, Ia = /\\(\\)?/g, Pa = Oa(function(e) {
  var t = [];
  return e.charCodeAt(0) === 46 && t.push(""), e.replace(Ta, function(n, s, a, r) {
    t.push(a ? r.replace(Ia, "$1") : s || n);
  }), t;
});
function Na(e) {
  return e == null ? "" : jn(e);
}
function za(e, t) {
  return $t(e) ? e : Qo(e, t) ? [e] : Pa(Na(e));
}
function Ea(e) {
  if (typeof e == "string" || Et(e))
    return e;
  var t = e + "";
  return t == "0" && 1 / e == -1 / 0 ? "-0" : t;
}
function $a(e, t) {
  t = za(t, e);
  for (var n = 0, s = t.length; e != null && n < s; )
    e = e[Ea(t[n++])];
  return n && n == s ? e : void 0;
}
function Ra(e, t, n) {
  var s = e == null ? void 0 : $a(e, t);
  return s === void 0 ? n : s;
}
function La(e) {
  for (var t = -1, n = e == null ? 0 : e.length, s = {}; ++t < n; ) {
    var a = e[t];
    s[a[0]] = a[1];
  }
  return s;
}
const Gn = (e) => e === void 0, fn = (e) => typeof e == "boolean", fe = (e) => typeof e == "number", Mt = (e) => typeof Element > "u" ? !1 : e instanceof Element, Wa = (e) => he(e) ? !Number.isNaN(Number(e)) : !1;
var gn;
const ve = typeof window < "u", Da = (e) => typeof e == "string", Aa = () => {
};
ve && ((gn = window?.navigator) != null && gn.userAgent) && /iP(ad|hone|od)/.test(window.navigator.userAgent);
function Lt(e) {
  return typeof e == "function" ? e() : u(e);
}
function Fa(e) {
  return e;
}
function Wt(e) {
  return Hs() ? (Gs(e), !0) : !1;
}
function ja(e, t = !0) {
  Se() ? ct(e) : t ? e() : Ce(e);
}
function Un(e, t, n = {}) {
  const {
    immediate: s = !0
  } = n, a = S(!1);
  let r = null;
  function l() {
    r && (clearTimeout(r), r = null);
  }
  function h() {
    a.value = !1, l();
  }
  function p(...g) {
    l(), a.value = !0, r = setTimeout(() => {
      a.value = !1, r = null, e(...g);
    }, Lt(t));
  }
  return s && (a.value = !0, ve && p()), Wt(h), {
    isPending: Bs(a),
    start: p,
    stop: h
  };
}
function Vn(e) {
  var t;
  const n = Lt(e);
  return (t = n?.$el) != null ? t : n;
}
const qn = ve ? window : void 0;
function Kn(...e) {
  let t, n, s, a;
  if (Da(e[0]) || Array.isArray(e[0]) ? ([n, s, a] = e, t = qn) : [t, n, s, a] = e, !t)
    return Aa;
  Array.isArray(n) || (n = [n]), Array.isArray(s) || (s = [s]);
  const r = [], l = () => {
    r.forEach((f) => f()), r.length = 0;
  }, h = (f, b, I, P) => (f.addEventListener(b, I, P), () => f.removeEventListener(b, I, P)), p = ke(() => [Vn(t), Lt(a)], ([f, b]) => {
    l(), f && r.push(...n.flatMap((I) => s.map((P) => h(f, I, P, b))));
  }, { immediate: !0, flush: "post" }), g = () => {
    p(), l();
  };
  return Wt(g), g;
}
function Ba(e, t = !1) {
  const n = S(), s = () => n.value = !!e();
  return s(), ja(s, t), n;
}
const vn = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {}, yn = "__vueuse_ssr_handlers__";
vn[yn] = vn[yn] || {};
var wn = Object.getOwnPropertySymbols, Ha = Object.prototype.hasOwnProperty, Ga = Object.prototype.propertyIsEnumerable, Ua = (e, t) => {
  var n = {};
  for (var s in e)
    Ha.call(e, s) && t.indexOf(s) < 0 && (n[s] = e[s]);
  if (e != null && wn)
    for (var s of wn(e))
      t.indexOf(s) < 0 && Ga.call(e, s) && (n[s] = e[s]);
  return n;
};
function Va(e, t, n = {}) {
  const s = n, { window: a = qn } = s, r = Ua(s, ["window"]);
  let l;
  const h = Ba(() => a && "ResizeObserver" in a), p = () => {
    l && (l.disconnect(), l = void 0);
  }, g = ke(() => Vn(e), (b) => {
    p(), h.value && a && b && (l = new ResizeObserver(t), l.observe(b, r));
  }, { immediate: !0, flush: "post" }), f = () => {
    p(), g();
  };
  return Wt(f), {
    isSupported: h,
    stop: f
  };
}
var mn;
(function(e) {
  e.UP = "UP", e.RIGHT = "RIGHT", e.DOWN = "DOWN", e.LEFT = "LEFT", e.NONE = "NONE";
})(mn || (mn = {}));
var qa = Object.defineProperty, _n = Object.getOwnPropertySymbols, Ka = Object.prototype.hasOwnProperty, Ya = Object.prototype.propertyIsEnumerable, bn = (e, t, n) => t in e ? qa(e, t, { enumerable: !0, configurable: !0, writable: !0, value: n }) : e[t] = n, Xa = (e, t) => {
  for (var n in t || (t = {}))
    Ka.call(t, n) && bn(e, n, t[n]);
  if (_n)
    for (var n of _n(t))
      Ya.call(t, n) && bn(e, n, t[n]);
  return e;
};
const Za = {
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
Xa({
  linear: Fa
}, Za);
const Cn = {
  current: 0
}, xn = S(0), Yn = 2e3, Sn = Symbol("elZIndexContextKey"), Xn = Symbol("zIndexContextKey"), Ja = (e) => {
  const t = Se() ? le(Sn, Cn) : Cn, n = e || (Se() ? le(Xn, void 0) : void 0), s = w(() => {
    const l = u(n);
    return fe(l) ? l : Yn;
  }), a = w(() => s.value + xn.value), r = () => (t.current++, xn.value = t.current, a.value);
  return !ve && le(Sn), {
    initialZIndex: s,
    currentZIndex: a,
    nextZIndex: r
  };
};
var Qa = {
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
const ei = (e) => (t, n) => ti(t, n, u(e)), ti = (e, t, n) => Ra(n, e, e).replace(/\{(\w+)\}/g, (s, a) => {
  var r;
  return `${(r = t?.[a]) != null ? r : `{${a}}`}`;
}), ni = (e) => {
  const t = w(() => u(e).name), n = Us(e) ? e : S(e);
  return {
    lang: t,
    locale: n,
    t: ei(e)
  };
}, Zn = Symbol("localeContextKey"), si = (e) => {
  const t = e || le(Zn, S());
  return ni(w(() => t.value || Qa));
}, Jn = "__epPropKey", H = (e) => e, oi = (e) => Dn(e) && !!e[Jn], Qn = (e, t) => {
  if (!Dn(e) || oi(e))
    return e;
  const { values: n, required: s, default: a, type: r, validator: l } = e, p = {
    type: r,
    required: !!s,
    validator: n || l ? (g) => {
      let f = !1, b = [];
      if (n && (b = Array.from(n), cn(e, "default") && b.push(a), f || (f = b.includes(g))), l && (f || (f = l(g))), !f && b.length > 0) {
        const I = [...new Set(b)].map((P) => JSON.stringify(P)).join(", ");
        Vs(`Invalid prop: validation failed${t ? ` for prop "${t}"` : ""}. Expected one of [${I}], got value ${JSON.stringify(g)}.`);
      }
      return f;
    } : void 0,
    [Jn]: !0
  };
  return cn(e, "default") && (p.default = a), p;
}, ze = (e) => La(Object.entries(e).map(([t, n]) => [
  t,
  Qn(n, t)
])), ai = ["", "default", "small", "large"], ii = Qn({
  type: String,
  values: ai,
  required: !1
}), ri = Symbol("size"), li = Symbol("emptyValuesContextKey"), ci = ze({
  emptyValues: Array,
  valueOnClear: {
    type: [String, Number, Boolean, Function],
    default: void 0,
    validator: (e) => He(e) ? !e() : !e
  }
}), kn = (e) => Object.keys(e), at = S();
function es(e, t = void 0) {
  return Se() ? le(Ln, at) : at;
}
function ts(e, t) {
  const n = es(), s = Nt(e, w(() => {
    var h;
    return ((h = n.value) == null ? void 0 : h.namespace) || Qe;
  })), a = si(w(() => {
    var h;
    return (h = n.value) == null ? void 0 : h.locale;
  })), r = Ja(w(() => {
    var h;
    return ((h = n.value) == null ? void 0 : h.zIndex) || Yn;
  })), l = w(() => {
    var h;
    return u(t) || ((h = n.value) == null ? void 0 : h.size) || "";
  });
  return ns(w(() => u(n) || {})), {
    ns: s,
    locale: a,
    zIndex: r,
    size: l
  };
}
const ns = (e, t, n = !1) => {
  var s;
  const a = !!Se(), r = a ? es() : void 0, l = (s = void 0) != null ? s : a ? qs : void 0;
  if (!l)
    return;
  const h = w(() => {
    const p = u(e);
    return r?.value ? ui(r.value, p) : p;
  });
  return l(Ln, h), l(Zn, w(() => h.value.locale)), l(Wn, w(() => h.value.namespace)), l(Xn, w(() => h.value.zIndex)), l(ri, {
    size: w(() => h.value.size || "")
  }), l(li, w(() => ({
    emptyValues: h.value.emptyValues,
    valueOnClear: h.value.valueOnClear
  }))), (n || !at.value) && (at.value = h.value), h;
}, ui = (e, t) => {
  const n = [.../* @__PURE__ */ new Set([...kn(e), ...kn(t)])], s = {};
  for (const a of n)
    s[a] = t[a] !== void 0 ? t[a] : e[a];
  return s;
};
var ht = (e, t) => {
  const n = e.__vccOpts || e;
  for (const [s, a] of t)
    n[s] = a;
  return n;
};
function Ot(e, t = "px") {
  if (!e)
    return "";
  if (fe(e) || Wa(e))
    return `${e}${t}`;
  if (he(e))
    return e;
}
const ss = (e, t) => (e.install = (n) => {
  for (const s of [e, ...Object.values({})])
    n.component(s.name, s);
}, e), os = (e, t) => (e.install = (n) => {
  e._context = n._context, n.config.globalProperties[t] = e;
}, e), di = ze({
  size: {
    type: H([Number, String])
  },
  color: {
    type: String
  }
}), hi = F({
  name: "ElIcon",
  inheritAttrs: !1
}), pi = /* @__PURE__ */ F({
  ...hi,
  props: di,
  setup(e) {
    const t = e, n = Nt("icon"), s = w(() => {
      const { size: a, color: r } = t;
      return !a && !r ? {} : {
        fontSize: Gn(a) ? void 0 : Ot(a),
        "--color": r
      };
    });
    return (a, r) => (M(), E("i", Ks({
      class: u(n).b(),
      style: u(s)
    }, a.$attrs), [
      Me(a.$slots, "default")
    ], 16));
  }
});
var fi = /* @__PURE__ */ ht(pi, [["__file", "icon.vue"]]);
const it = ss(fi);
/*! Element Plus Icons Vue v2.3.1 */
var gi = /* @__PURE__ */ F({
  name: "CircleCloseFilled",
  __name: "circle-close-filled",
  setup(e) {
    return (t, n) => (M(), E("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 1024 1024"
    }, [
      c("path", {
        fill: "currentColor",
        d: "M512 64a448 448 0 1 1 0 896 448 448 0 0 1 0-896m0 393.664L407.936 353.6a38.4 38.4 0 1 0-54.336 54.336L457.664 512 353.6 616.064a38.4 38.4 0 1 0 54.336 54.336L512 566.336 616.064 670.4a38.4 38.4 0 1 0 54.336-54.336L566.336 512 670.4 407.936a38.4 38.4 0 1 0-54.336-54.336z"
      })
    ]));
  }
}), vi = gi, yi = /* @__PURE__ */ F({
  name: "Close",
  __name: "close",
  setup(e) {
    return (t, n) => (M(), E("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 1024 1024"
    }, [
      c("path", {
        fill: "currentColor",
        d: "M764.288 214.592 512 466.88 259.712 214.592a31.936 31.936 0 0 0-45.12 45.12L466.752 512 214.528 764.224a31.936 31.936 0 1 0 45.12 45.184L512 557.184l252.288 252.288a31.936 31.936 0 0 0 45.12-45.12L557.12 512.064l252.288-252.352a31.936 31.936 0 1 0-45.12-45.184z"
      })
    ]));
  }
}), as = yi, wi = /* @__PURE__ */ F({
  name: "InfoFilled",
  __name: "info-filled",
  setup(e) {
    return (t, n) => (M(), E("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 1024 1024"
    }, [
      c("path", {
        fill: "currentColor",
        d: "M512 64a448 448 0 1 1 0 896.064A448 448 0 0 1 512 64m67.2 275.072c33.28 0 60.288-23.104 60.288-57.344s-27.072-57.344-60.288-57.344c-33.28 0-60.16 23.104-60.16 57.344s26.88 57.344 60.16 57.344M590.912 699.2c0-6.848 2.368-24.64 1.024-34.752l-52.608 60.544c-10.88 11.456-24.512 19.392-30.912 17.28a12.992 12.992 0 0 1-8.256-14.72l87.68-276.992c7.168-35.136-12.544-67.2-54.336-71.296-44.096 0-108.992 44.736-148.48 101.504 0 6.784-1.28 23.68.064 33.792l52.544-60.608c10.88-11.328 23.552-19.328 29.952-17.152a12.8 12.8 0 0 1 7.808 16.128L388.48 728.576c-10.048 32.256 8.96 63.872 55.04 71.04 67.84 0 107.904-43.648 147.456-100.416z"
      })
    ]));
  }
}), mi = wi, _i = /* @__PURE__ */ F({
  name: "SuccessFilled",
  __name: "success-filled",
  setup(e) {
    return (t, n) => (M(), E("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 1024 1024"
    }, [
      c("path", {
        fill: "currentColor",
        d: "M512 64a448 448 0 1 1 0 896 448 448 0 0 1 0-896m-55.808 536.384-99.52-99.584a38.4 38.4 0 1 0-54.336 54.336l126.72 126.72a38.272 38.272 0 0 0 54.336 0l262.4-262.464a38.4 38.4 0 1 0-54.272-54.336z"
      })
    ]));
  }
}), bi = _i, Ci = /* @__PURE__ */ F({
  name: "WarningFilled",
  __name: "warning-filled",
  setup(e) {
    return (t, n) => (M(), E("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 1024 1024"
    }, [
      c("path", {
        fill: "currentColor",
        d: "M512 64a448 448 0 1 1 0 896 448 448 0 0 1 0-896m0 192a58.432 58.432 0 0 0-58.24 63.744l23.36 256.384a35.072 35.072 0 0 0 69.76 0l23.296-256.384A58.432 58.432 0 0 0 512 256m0 512a51.2 51.2 0 1 0 0-102.4 51.2 51.2 0 0 0 0 102.4"
      })
    ]));
  }
}), xi = Ci;
const is = H([
  String,
  Object,
  Function
]), Si = {
  Close: as
}, ki = {
  Close: as
}, rt = {
  success: bi,
  warning: xi,
  error: vi,
  info: mi
}, Mi = (e) => e, et = {
  esc: "Escape",
  delete: "Delete",
  backspace: "Backspace"
}, Oi = ze({
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
}), Ti = F({
  name: "ElBadge"
}), Ii = /* @__PURE__ */ F({
  ...Ti,
  props: Oi,
  setup(e, { expose: t }) {
    const n = e, s = Nt("badge"), a = w(() => n.isDot ? "" : fe(n.value) && fe(n.max) ? n.max < n.value ? `${n.max}+` : `${n.value}` : `${n.value}`), r = w(() => {
      var l, h, p, g, f;
      return [
        {
          backgroundColor: n.color,
          marginRight: Ot(-((h = (l = n.offset) == null ? void 0 : l[0]) != null ? h : 0)),
          marginTop: Ot((g = (p = n.offset) == null ? void 0 : p[1]) != null ? g : 0)
        },
        (f = n.badgeStyle) != null ? f : {}
      ];
    });
    return t({
      content: a
    }), (l, h) => (M(), E("div", {
      class: L(u(s).b())
    }, [
      Me(l.$slots, "default"),
      N(It, {
        name: `${u(s).namespace.value}-zoom-in-center`,
        persisted: ""
      }, {
        default: ce(() => [
          ue(c("sup", {
            class: L([
              u(s).e("content"),
              u(s).em("content", l.type),
              u(s).is("fixed", !!l.$slots.default),
              u(s).is("dot", l.isDot),
              u(s).is("hide-zero", !l.showZero && n.value === 0),
              l.badgeClass
            ]),
            style: Oe(u(r))
          }, [
            Me(l.$slots, "content", { value: u(a) }, () => [
              Ys(A(u(a)), 1)
            ])
          ], 6), [
            [tt, !l.hidden && (u(a) || l.isDot || l.$slots.content)]
          ])
        ]),
        _: 3
      }, 8, ["name"])
    ], 2));
  }
});
var Pi = /* @__PURE__ */ ht(Ii, [["__file", "badge.vue"]]);
const Ni = ss(Pi), zi = ze({
  a11y: {
    type: Boolean,
    default: !0
  },
  locale: {
    type: H(Object)
  },
  size: ii,
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
  ...ci
}), X = {};
F({
  name: "ElConfigProvider",
  props: zi,
  setup(e, { slots: t }) {
    ke(() => e.message, (s) => {
      Object.assign(X, s ?? {});
    }, { immediate: !0, deep: !0 });
    const n = ns(e);
    return () => Me(t, "default", { config: n?.value });
  }
});
const rs = ["success", "info", "warning", "error"], D = Mi({
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
  appendTo: ve ? document.body : void 0
}), Ei = ze({
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
    type: is,
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
    values: rs,
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
}), $i = {
  destroy: () => !0
}, Z = Xs([]), Ri = (e) => {
  const t = Z.findIndex((a) => a.id === e), n = Z[t];
  let s;
  return t > 0 && (s = Z[t - 1]), { current: n, prev: s };
}, Li = (e) => {
  const { prev: t } = Ri(e);
  return t ? t.vm.exposed.bottom.value : 0;
}, Wi = (e, t) => Z.findIndex((s) => s.id === e) > 0 ? 16 : t, Di = F({
  name: "ElMessage"
}), Ai = /* @__PURE__ */ F({
  ...Di,
  props: Ei,
  emits: $i,
  setup(e, { expose: t }) {
    const n = e, { Close: s } = ki, { ns: a, zIndex: r } = ts("message"), { currentZIndex: l, nextZIndex: h } = r, p = S(), g = S(!1), f = S(0);
    let b;
    const I = w(() => n.type ? n.type === "error" ? "danger" : n.type : "info"), P = w(() => {
      const C = n.type;
      return { [a.bm("icon", C)]: C && rt[C] };
    }), U = w(() => n.icon || rt[n.type] || ""), v = w(() => Li(n.id)), _ = w(() => Wi(n.id, n.offset) + v.value), O = w(() => f.value + _.value), Q = w(() => ({
      top: `${_.value}px`,
      zIndex: l.value
    }));
    function x() {
      n.duration !== 0 && ({ stop: b } = Un(() => {
        k();
      }, n.duration));
    }
    function T() {
      b?.();
    }
    function k() {
      g.value = !1;
    }
    function V({ code: C }) {
      C === et.esc && k();
    }
    return ct(() => {
      x(), h(), g.value = !0;
    }), ke(() => n.repeatNum, () => {
      T(), x();
    }), Kn(document, "keydown", V), Va(p, () => {
      f.value = p.value.getBoundingClientRect().height;
    }), t({
      visible: g,
      bottom: O,
      close: k
    }), (C, Dt) => (M(), te(It, {
      name: u(a).b("fade"),
      onBeforeLeave: C.onClose,
      onAfterLeave: (At) => C.$emit("destroy"),
      persisted: ""
    }, {
      default: ce(() => [
        ue(c("div", {
          id: C.id,
          ref_key: "messageRef",
          ref: p,
          class: L([
            u(a).b(),
            { [u(a).m(C.type)]: C.type },
            u(a).is("center", C.center),
            u(a).is("closable", C.showClose),
            u(a).is("plain", C.plain),
            C.customClass
          ]),
          style: Oe(u(Q)),
          role: "alert",
          onMouseenter: T,
          onMouseleave: x
        }, [
          C.repeatNum > 1 ? (M(), te(u(Ni), {
            key: 0,
            value: C.repeatNum,
            type: u(I),
            class: L(u(a).e("badge"))
          }, null, 8, ["value", "type", "class"])) : ne("v-if", !0),
          u(U) ? (M(), te(u(it), {
            key: 1,
            class: L([u(a).e("icon"), u(P)])
          }, {
            default: ce(() => [
              (M(), te(Pn(u(U))))
            ]),
            _: 1
          }, 8, ["class"])) : ne("v-if", !0),
          Me(C.$slots, "default", {}, () => [
            C.dangerouslyUseHTMLString ? (M(), E(xe, { key: 1 }, [
              ne(" Caution here, message could've been compromised, never use user's input as message "),
              c("p", {
                class: L(u(a).e("content")),
                innerHTML: C.message
              }, null, 10, ["innerHTML"])
            ], 2112)) : (M(), E("p", {
              key: 0,
              class: L(u(a).e("content"))
            }, A(C.message), 3))
          ]),
          C.showClose ? (M(), te(u(it), {
            key: 2,
            class: L(u(a).e("closeBtn")),
            onClick: Fe(k, ["stop"])
          }, {
            default: ce(() => [
              N(u(s))
            ]),
            _: 1
          }, 8, ["class", "onClick"])) : ne("v-if", !0)
        ], 46, ["id"]), [
          [tt, g.value]
        ])
      ]),
      _: 3
    }, 8, ["name", "onBeforeLeave", "onAfterLeave"]));
  }
});
var Fi = /* @__PURE__ */ ht(Ai, [["__file", "message.vue"]]);
let ji = 1;
const ls = (e) => {
  const t = !e || he(e) || Be(e) || He(e) ? { message: e } : e, n = {
    ...D,
    ...t
  };
  if (!n.appendTo)
    n.appendTo = document.body;
  else if (he(n.appendTo)) {
    let s = document.querySelector(n.appendTo);
    Mt(s) || (s = document.body), n.appendTo = s;
  }
  return fn(X.grouping) && !n.grouping && (n.grouping = X.grouping), fe(X.duration) && n.duration === 3e3 && (n.duration = X.duration), fe(X.offset) && n.offset === 16 && (n.offset = X.offset), fn(X.showClose) && !n.showClose && (n.showClose = X.showClose), n;
}, Bi = (e) => {
  const t = Z.indexOf(e);
  if (t === -1)
    return;
  Z.splice(t, 1);
  const { handler: n } = e;
  n.close();
}, Hi = ({ appendTo: e, ...t }, n) => {
  const s = `message_${ji++}`, a = t.onClose, r = document.createElement("div"), l = {
    ...t,
    id: s,
    onClose: () => {
      a?.(), Bi(f);
    },
    onDestroy: () => {
      nt(null, r);
    }
  }, h = N(Fi, l, He(l.message) || Be(l.message) ? {
    default: He(l.message) ? l.message : () => l.message
  } : null);
  h.appContext = n || Ie._context, nt(h, r), e.appendChild(r.firstElementChild);
  const p = h.component, f = {
    id: s,
    vnode: h,
    vm: p,
    handler: {
      close: () => {
        p.exposed.visible.value = !1;
      }
    },
    props: h.component.props
  };
  return f;
}, Ie = (e = {}, t) => {
  if (!ve)
    return { close: () => {
    } };
  const n = ls(e);
  if (n.grouping && Z.length) {
    const a = Z.find(({ vnode: r }) => {
      var l;
      return ((l = r.props) == null ? void 0 : l.message) === n.message;
    });
    if (a)
      return a.props.repeatNum += 1, a.props.type = n.type, a.handler;
  }
  if (fe(X.max) && Z.length >= X.max)
    return { close: () => {
    } };
  const s = Hi(n, t);
  return Z.push(s), s.handler;
};
rs.forEach((e) => {
  Ie[e] = (t = {}, n) => {
    const s = ls(t);
    return Ie({ ...s, type: e }, n);
  };
});
function Gi(e) {
  for (const t of Z)
    (!e || e === t.props.type) && t.handler.close();
}
Ie.closeAll = Gi;
Ie._context = null;
const Ui = os(Ie, "$message"), cs = [
  "success",
  "info",
  "warning",
  "error"
], Vi = ze({
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
    type: is
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
    values: [...cs, ""],
    default: ""
  },
  zIndex: Number
}), qi = {
  destroy: () => !0
}, Ki = F({
  name: "ElNotification"
}), Yi = /* @__PURE__ */ F({
  ...Ki,
  props: Vi,
  emits: qi,
  setup(e, { expose: t }) {
    const n = e, { ns: s, zIndex: a } = ts("notification"), { nextZIndex: r, currentZIndex: l } = a, { Close: h } = Si, p = S(!1);
    let g;
    const f = w(() => {
      const x = n.type;
      return x && rt[n.type] ? s.m(x) : "";
    }), b = w(() => n.type && rt[n.type] || n.icon), I = w(() => n.position.endsWith("right") ? "right" : "left"), P = w(() => n.position.startsWith("top") ? "top" : "bottom"), U = w(() => {
      var x;
      return {
        [P.value]: `${n.offset}px`,
        zIndex: (x = n.zIndex) != null ? x : l.value
      };
    });
    function v() {
      n.duration > 0 && ({ stop: g } = Un(() => {
        p.value && O();
      }, n.duration));
    }
    function _() {
      g?.();
    }
    function O() {
      p.value = !1;
    }
    function Q({ code: x }) {
      x === et.delete || x === et.backspace ? _() : x === et.esc ? p.value && O() : v();
    }
    return ct(() => {
      v(), r(), p.value = !0;
    }), Kn(document, "keydown", Q), t({
      visible: p,
      close: O
    }), (x, T) => (M(), te(It, {
      name: u(s).b("fade"),
      onBeforeLeave: x.onClose,
      onAfterLeave: (k) => x.$emit("destroy"),
      persisted: ""
    }, {
      default: ce(() => [
        ue(c("div", {
          id: x.id,
          class: L([u(s).b(), x.customClass, u(I)]),
          style: Oe(u(U)),
          role: "alert",
          onMouseenter: _,
          onMouseleave: v,
          onClick: x.onClick
        }, [
          u(b) ? (M(), te(u(it), {
            key: 0,
            class: L([u(s).e("icon"), u(f)])
          }, {
            default: ce(() => [
              (M(), te(Pn(u(b))))
            ]),
            _: 1
          }, 8, ["class"])) : ne("v-if", !0),
          c("div", {
            class: L(u(s).e("group"))
          }, [
            c("h2", {
              class: L(u(s).e("title")),
              textContent: A(x.title)
            }, null, 10, ["textContent"]),
            ue(c("div", {
              class: L(u(s).e("content")),
              style: Oe(x.title ? void 0 : { margin: 0 })
            }, [
              Me(x.$slots, "default", {}, () => [
                x.dangerouslyUseHTMLString ? (M(), E(xe, { key: 1 }, [
                  ne(" Caution here, message could've been compromised, never use user's input as message "),
                  c("p", { innerHTML: x.message }, null, 8, ["innerHTML"])
                ], 2112)) : (M(), E("p", { key: 0 }, A(x.message), 1))
              ])
            ], 6), [
              [tt, x.message]
            ]),
            x.showClose ? (M(), te(u(it), {
              key: 0,
              class: L(u(s).e("closeBtn")),
              onClick: Fe(O, ["stop"])
            }, {
              default: ce(() => [
                N(u(h))
              ]),
              _: 1
            }, 8, ["class", "onClick"])) : ne("v-if", !0)
          ], 2)
        ], 46, ["id", "onClick"]), [
          [tt, p.value]
        ])
      ]),
      _: 3
    }, 8, ["name", "onBeforeLeave", "onAfterLeave"]));
  }
});
var Xi = /* @__PURE__ */ ht(Yi, [["__file", "notification.vue"]]);
const lt = {
  "top-left": [],
  "top-right": [],
  "bottom-left": [],
  "bottom-right": []
}, Tt = 16;
let Zi = 1;
const Pe = function(e = {}, t) {
  if (!ve)
    return { close: () => {
    } };
  (he(e) || Be(e)) && (e = { message: e });
  const n = e.position || "top-right";
  let s = e.offset || 0;
  lt[n].forEach(({ vm: f }) => {
    var b;
    s += (((b = f.el) == null ? void 0 : b.offsetHeight) || 0) + Tt;
  }), s += Tt;
  const a = `notification_${Zi++}`, r = e.onClose, l = {
    ...e,
    offset: s,
    id: a,
    onClose: () => {
      Ji(a, n, r);
    }
  };
  let h = document.body;
  Mt(e.appendTo) ? h = e.appendTo : he(e.appendTo) && (h = document.querySelector(e.appendTo)), Mt(h) || (h = document.body);
  const p = document.createElement("div"), g = N(Xi, l, He(l.message) ? l.message : Be(l.message) ? () => l.message : null);
  return g.appContext = Gn(t) ? Pe._context : t, g.props.onDestroy = () => {
    nt(null, p);
  }, nt(g, p), lt[n].push({ vm: g }), h.appendChild(p.firstElementChild), {
    close: () => {
      g.component.exposed.visible.value = !1;
    }
  };
};
cs.forEach((e) => {
  Pe[e] = (t = {}, n) => ((he(t) || Be(t)) && (t = {
    message: t
  }), Pe({ ...t, type: e }, n));
});
function Ji(e, t, n) {
  const s = lt[t], a = s.findIndex(({ vm: g }) => {
    var f;
    return ((f = g.component) == null ? void 0 : f.props.id) === e;
  });
  if (a === -1)
    return;
  const { vm: r } = s[a];
  if (!r)
    return;
  n?.(r);
  const l = r.el.offsetHeight, h = t.split("-")[0];
  s.splice(a, 1);
  const p = s.length;
  if (!(p < 1))
    for (let g = a; g < p; g++) {
      const { el: f, component: b } = s[g].vm, I = Number.parseInt(f.style[h], 10) - l - Tt;
      b.props.offset = I;
    }
}
function Qi() {
  for (const e of Object.values(lt))
    e.forEach(({ vm: t }) => {
      t.component.exposed.visible.value = !1;
    });
}
Pe.closeAll = Qi;
Pe._context = null;
const er = os(Pe, "$notify"), bt = {
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
      duration: a = 3e3,
      showClose: r = !1
    } = e;
    s === "center" ? Ui({
      message: t,
      type: n,
      duration: a,
      showClose: r,
      grouping: !0
    }) : er({
      message: t,
      type: n,
      position: s,
      duration: a,
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
}, Ct = "[screen-recorder]", tr = /* @__PURE__ */ new Set([
  "screen_recorder_set_passthrough_region",
  "screen_recorder_set_overlay_window_region"
]), nr = (e) => {
  if (e)
    return JSON.parse(JSON.stringify(e));
}, G = async (e, t) => {
  const n = performance.now(), s = nr(t), a = tr.has(e);
  a || console.info(`${Ct} invoke:start ${e}`, s ?? "");
  try {
    const r = await d(e, t);
    return a || console.info(`${Ct} invoke:success ${e}`, {
      elapsedMs: Math.round(performance.now() - n),
      result: r
    }), r;
  } catch (r) {
    throw console.error(`${Ct} invoke:error ${e}`, {
      elapsedMs: Math.round(performance.now() - n),
      error: r
    }), r;
  }
}, sr = () => G("screen_recorder_get_ffmpeg_status"), _e = (e) => G("screen_recorder_set_capture_excluded", { excluded: e }), De = (e) => G("screen_recorder_set_passthrough_region", { region: e }), Ze = (e) => G("screen_recorder_set_overlay_window_region", { region: e }), or = () => G("screen_recorder_pick_target_window"), ar = () => G("screen_recorder_close_window"), ir = (e, t) => G("screen_recorder_start_recording", {
  region: e,
  fps: t.fps,
  quality: t.quality,
  audio: t.format === "mp4"
}), rr = () => G("screen_recorder_pause_recording"), lr = (e, t) => G("screen_recorder_resume_recording", {
  region: e,
  fps: t.fps,
  quality: t.quality,
  audio: t.format === "mp4"
}), cr = () => G("screen_recorder_stop_recording"), ur = () => G("screen_recorder_cancel_recording"), dr = () => G("screen_recorder_cancel_export"), hr = (e, t) => G("screen_recorder_export_recording", {
  format: e.format,
  fps: e.fps,
  quality: e.quality,
  savePath: e.savePath,
  durationMs: t
}), Mn = () => ({
  format: "mp4",
  fps: 30,
  quality: "standard",
  savePath: "",
  audio: !0
}), W = "[screen-recorder]";
function pr() {
  const e = S("selecting"), t = S(Mn()), n = S(null), s = S(null), a = S(""), r = S(null), l = S(0), h = S(0), p = S(null), g = () => {
    h.value = e.value === "recording" && r.value !== null ? l.value + Date.now() - r.value : l.value;
  }, f = () => {
    p.value !== null && (window.clearInterval(p.value), p.value = null);
  }, b = () => {
    f(), g(), p.value = window.setInterval(() => {
      g();
    }, 250);
  }, I = async () => (console.info(`${W} refresh ffmpeg status`), n.value = await sr(), console.info(`${W} ffmpeg status`, n.value), n.value), P = async (k) => {
    a.value = "", s.value = null, console.info(`${W} begin requested`, { region: k, settings: t.value });
    const V = n.value ?? await I();
    if (!V.available)
      throw new Error(V.message || "FFmpeg unavailable");
    await ir(k, t.value), e.value = "recording", l.value = 0, h.value = 0, r.value = Date.now(), b(), console.info(`${W} recording started`, { status: e.value });
  }, U = async () => {
    e.value === "recording" && (console.info(`${W} pause requested`, { elapsedMs: h.value }), g(), l.value = h.value, r.value = null, f(), await rr(), e.value = "paused", console.info(`${W} recording paused`, { accumulatedMs: l.value }));
  }, v = async (k) => {
    e.value === "paused" && (console.info(`${W} resume requested`, { region: k, settings: t.value }), await lr(k, t.value), e.value = "recording", r.value = Date.now(), b(), console.info(`${W} recording resumed`));
  }, _ = async () => {
    e.value !== "recording" && e.value !== "paused" || (console.info(`${W} stop requested`, { status: e.value, elapsedMs: h.value }), g(), l.value = h.value, r.value = null, f(), await cr(), e.value = "exporting", console.info(`${W} recording stopped`, { accumulatedMs: l.value }));
  }, O = async () => {
    console.info(`${W} export requested`, { settings: t.value }), e.value = "exporting";
    try {
      return s.value = await hr(t.value, Math.round(h.value)), e.value = "completed", console.info(`${W} export completed`, s.value), s.value;
    } catch (k) {
      throw e.value = "ready", s.value = null, k;
    }
  }, Q = async () => {
    console.info(`${W} cancel export requested`, { status: e.value }), await dr(), e.value = "ready", s.value = null;
  }, x = async () => {
    console.info(`${W} cancel requested`, { status: e.value, elapsedMs: h.value }), f(), await ur(), e.value = "selecting", r.value = null, l.value = 0, h.value = 0, s.value = null, console.info(`${W} canceled`);
  }, T = () => {
    console.info(`${W} reset session`), e.value = "selecting", r.value = null, l.value = 0, h.value = 0, s.value = null, a.value = "", t.value = Mn();
  };
  return Nn(() => {
    f();
  }), {
    status: e,
    settings: t,
    ffmpegStatus: n,
    result: s,
    errorMessage: a,
    elapsedMs: h,
    refreshFfmpegStatus: I,
    begin: P,
    pause: U,
    resume: v,
    stop: _,
    exportFile: O,
    cancelExport: Q,
    cancel: x,
    reset: T
  };
}
const fr = { class: "screen-recorder" }, gr = ["onMousedown"], vr = { class: "window-title" }, yr = { class: "capture-viewport" }, wr = { class: "capture-frame" }, mr = { class: "control-group control-group--tools" }, _r = { class: "tool-pill" }, br = ["title", "disabled"], Cr = { class: "select-field" }, xr = ["disabled"], Sr = ["disabled"], kr = ["disabled"], Mr = { value: "high" }, Or = { value: "standard" }, Tr = { value: "small" }, Ir = { class: "dimension-group optional-size" }, Pr = { class: "dimension" }, Nr = ["value"], zr = { class: "dimension" }, Er = ["value"], $r = { class: "control-group control-group--actions" }, Rr = { class: "time" }, Lr = { class: "button-label" }, Wr = { class: "button-label" }, Dr = ["title"], Ar = { class: "export-progress__meta" }, Fr = { class: "export-progress__track" }, jr = ["title"], Br = ["disabled"], Hr = { class: "record-label" }, Gr = {
  key: 0,
  class: "warning"
}, q = "[screen-recorder]", be = 80, xt = 420, Ae = 260, St = 260, On = 140, Ur = 8, Tn = 2, In = 0, Vr = 15, qr = 10, Kr = 2, Yr = /* @__PURE__ */ F({
  __name: "index",
  setup(e) {
    const t = $n(), n = S(null), s = S(null), a = S(null), r = S({ width: 0, height: 0 }), l = S(!1), h = S(!1), p = S(0), g = S(!1), f = S(null);
    let b = null, I = null, P = null, U = null, v = null, _ = null, O = null, Q = null;
    const x = [
      { className: "n", direction: "North" },
      { className: "ne", direction: "NorthEast" },
      { className: "e", direction: "East" },
      { className: "se", direction: "SouthEast" },
      { className: "s", direction: "South" },
      { className: "sw", direction: "SouthWest" },
      { className: "w", direction: "West" },
      { className: "nw", direction: "NorthWest" }
    ], {
      status: T,
      settings: k,
      ffmpegStatus: V,
      result: C,
      elapsedMs: Dt,
      refreshFfmpegStatus: At,
      begin: us,
      pause: ds,
      resume: hs,
      stop: ps,
      exportFile: fs,
      cancelExport: Ft,
      cancel: gs,
      reset: vs
    } = pr(), jt = S(!1), Ee = w(() => T.value === "recording" || T.value === "paused" || T.value === "exporting"), pt = w(() => k.value.audio && k.value.format === "mp4"), $e = w(() => pt.value && T.value === "recording"), ys = w(() => {
      const o = $e.value && !g.value ? p.value : 0, i = (y, m) => Math.max(0.18, Math.min(1, y + o * m)).toFixed(3);
      return {
        "--bar-1": i(0.28, 0.64),
        "--bar-2": i(0.42, 0.78),
        "--bar-3": i(0.34, 0.94),
        "--bar-4": i(0.22, 0.72)
      };
    }), ws = w(() => {
      if (k.value.format === "gif")
        return "GIF 不支持音频";
      if (g.value && k.value.audio)
        return "音频已开启；实时音量动画不可用不影响导出系统声音";
      if (C.value?.audioDevice)
        return `已录制音频：${C.value.audioDevice}`;
      if (C.value && !C.value.hasAudio)
        return "未检测到可用音频设备，导出视频无声音";
      if (V.value?.available && !V.value.systemAudioAvailable) {
        const o = V.value.audioDevices?.join("、") || "无";
        return k.value.audio ? `未发现系统声音/立体声混音设备；不会自动录制麦克风。当前可用音频设备：${o}` : "录制音频已关闭";
      }
      return k.value.audio ? "录制音频已开启。系统声音将通过 WASAPI Loopback 捕获" : "录制音频已关闭";
    }), Bt = w(() => {
      const o = f.value?.progress ?? 0.03;
      return Math.max(1, Math.min(100, Math.round(o * 100)));
    }), ft = w(() => {
      const o = f.value;
      return o ? o.totalFrames && o.stage === "frames" ? `${o.message}` : o.message || "正在导出..." : "正在导出...";
    }), ms = w(() => {
      const o = f.value;
      return o?.totalFrames ? `${ft.value} (${o.currentFrame}/${o.totalFrames})` : ft.value;
    }), _s = w(() => {
      const o = Math.floor(Dt.value / 1e3), i = Math.floor(o / 60).toString().padStart(2, "0"), y = (o % 60).toString().padStart(2, "0");
      return `${i}:${y}`;
    }), ye = async (o) => {
      try {
        await o();
      } catch (i) {
        console.error(`${q} action failed`, i), jt.value || bt.msg(i?.message || String(i), "error");
      }
    }, Ht = (o) => Math.max(2, Math.floor(Math.round(o) / 2) * 2), Gt = (o) => Math.max(1, Math.round(o)), we = (o, i) => Math.abs(o - i) <= Kr, bs = (o, i) => o === i ? !0 : !o || !i ? !1 : we(o.x, i.x) && we(o.y, i.y) && we(o.width, i.width) && we(o.height, i.height), Ue = async (o) => {
      bs(Q, o) || (Q = o ? { ...o } : null, await De(o).catch(() => {
      }));
    }, gt = async () => {
      const o = n.value;
      if (!o)
        throw new Error("录制视口尚未准备好");
      const i = o.getBoundingClientRect(), y = await t.scaleFactor(), m = await t.innerPosition(), $ = Gt(i.width * y), R = Gt(i.height * y);
      if ($ < be || R < be)
        throw new Error("录制区域太小，请放大录制窗口");
      const j = {
        x: i.left,
        y: i.top,
        width: $ / y,
        height: R / y,
        screenX: Math.round(m.x + i.left * y),
        screenY: Math.round(m.y + i.top * y),
        physicalWidth: $,
        physicalHeight: R,
        scale: y
      };
      return console.debug(`${q} capture region`, {
        ...j,
        logicalSize: `${j.width}x${j.height}`,
        physicalSize: `${j.physicalWidth}x${j.physicalHeight}`
      }), j;
    }, Ut = async () => {
      const o = await gt(), i = Ht(o.physicalWidth), y = Ht(o.physicalHeight);
      return {
        ...o,
        width: i / o.scale,
        height: y / o.scale,
        physicalWidth: i,
        physicalHeight: y
      };
    }, Cs = async () => {
      try {
        const o = await gt();
        if ((!we(r.value.width, o.physicalWidth) || !we(r.value.height, o.physicalHeight)) && (r.value = {
          width: o.physicalWidth,
          height: o.physicalHeight
        }), h.value) {
          const i = s.value?.getBoundingClientRect().height ?? 0, y = a.value?.getBoundingClientRect().height ?? 0;
          await Ue({
            x: Math.round(o.x * o.scale),
            y: Math.round((o.y + i) * o.scale),
            width: o.physicalWidth,
            height: Math.max(
              1,
              o.physicalHeight - Math.round((i + y) * o.scale)
            )
          });
          return;
        }
        await Ue({
          x: Math.round(o.x * o.scale),
          y: Math.round(o.y * o.scale),
          width: o.physicalWidth,
          height: o.physicalHeight
        });
      } catch {
        (r.value.width !== 0 || r.value.height !== 0) && (r.value = { width: 0, height: 0 }), await Ue(null);
      }
    }, Y = async () => _ || (_ = Cs().finally(() => {
      if (_ = null, O) {
        const o = O;
        O = null, Ue(o);
      }
    }), _), Ve = () => {
      v === null && (v = requestAnimationFrame(() => {
        v = null, Y();
      }));
    }, Vt = () => {
      O = null, Q = null;
    }, qe = async () => {
      Vt(), await De(null).catch(() => {
      }), await Ze(null).catch(() => {
      });
    }, qt = () => {
      l.value = !1, h.value = !1;
    }, Kt = () => {
      window.setTimeout(() => {
        Y();
      }, 120);
    }, Re = () => new Promise((o) => {
      requestAnimationFrame(() => requestAnimationFrame(() => o()));
    }), xs = async () => {
      document.documentElement.classList.add("screen-recorder-repaint"), await Re(), document.documentElement.classList.remove("screen-recorder-repaint"), await Re();
    }, Ss = async () => {
      await De(null).catch(() => {
      }), await t.setIgnoreCursorEvents(!0).catch(() => {
      }), await Re(), await t.setIgnoreCursorEvents(!1).catch(() => {
      }), await Y();
    }, Yt = async () => {
      const [o, i] = await Promise.all([
        t.outerPosition(),
        t.outerSize()
      ]);
      return {
        x: o.x,
        y: o.y,
        width: i.width,
        height: i.height
      };
    }, Xt = async () => {
      if (!h.value) {
        await Ze(null).catch(() => {
        });
        return;
      }
      const o = await Yt(), i = await t.scaleFactor(), y = s.value?.getBoundingClientRect().height ?? 0, m = a.value?.getBoundingClientRect().height ?? 0;
      await Ze({
        width: o.width,
        height: o.height,
        topHeight: Math.round(y * i),
        bottomHeight: Math.round(m * i)
      }).catch(() => {
      });
    }, Zt = (o, i) => {
      const y = Math.min(o.width, i.width), m = Math.min(o.height, i.height), $ = i.x + i.width - y, R = i.y + i.height - m;
      return {
        x: Math.min(Math.max(o.x, i.x), $),
        y: Math.min(Math.max(o.y, i.y), R),
        width: y,
        height: m
      };
    }, ks = (o, i, y) => {
      if (!i) return !1;
      const m = Math.max(8, Math.round(8 * y)), $ = i.x + i.width, R = i.y + i.height, j = o.screenX + o.physicalWidth, oe = o.screenY + o.physicalHeight;
      return o.screenX <= i.x + m && o.screenY <= i.y + m && j >= $ - m && oe >= R - m;
    }, Ms = (o, i, y) => {
      if (!i) return !1;
      const m = Math.max(8, Math.round(8 * y));
      return o.screenX <= i.x + m || o.screenY <= i.y + m || o.screenX + o.physicalWidth >= i.x + i.width - m || o.screenY + o.physicalHeight >= i.y + i.height - m;
    }, Os = (o, i, y) => {
      if (!y) return o;
      const m = Math.round(Vr * i), $ = Math.round(qr * i);
      return {
        ...o,
        physicalWidth: Math.max(be, o.physicalWidth - m),
        physicalHeight: Math.max(be, o.physicalHeight - $)
      };
    }, Jt = async (o) => {
      await t.setSize(new de(Math.round(o.width), Math.round(o.height))), await t.setPosition(new J(Math.round(o.x), Math.round(o.y))), await Re();
    }, Ke = async () => {
      const [o, i] = await Promise.all([
        gt(),
        Yt()
      ]);
      return { actualRegion: o, currentFrame: i };
    }, Ts = async (o, i, y) => {
      const { actualRegion: m, currentFrame: $ } = await Ke(), R = m.screenX - $.x, j = m.screenY - $.y, oe = Math.max(0, $.width - m.physicalWidth), z = Math.max(0, $.height - m.physicalHeight);
      return {
        x: o.screenX - R,
        y: o.screenY - j,
        width: Math.max(i, o.physicalWidth + oe),
        height: Math.max(y, o.physicalHeight + z)
      };
    }, Qt = async () => {
      P?.(), P = null, p.value = 0;
    }, Ye = async () => {
      if (!(!pt.value || P))
        try {
          console.info(`${q} backend audio meter listening`), P = await st("screen_recorder_audio_level", (o) => {
            if (!$e.value) {
              p.value = 0;
              return;
            }
            const i = Math.max(0, Math.min(1, Number(o.payload?.level ?? 0)));
            p.value = p.value * 0.38 + i * 0.62;
          }), g.value = !1;
        } catch (o) {
          console.error(`${q} audio meter failed`, o), g.value = !0;
        }
    }, Is = async (o) => {
      o.button !== 0 || Ee.value || (qt(), await t.setMinSize(new re(xt, Ae)).catch(() => {
      }), await qe(), await t.startDragging().catch((i) => {
        bt.msg(i?.message || String(i), "error");
      }), Kt());
    }, Ps = async (o) => {
      Ee.value || (qt(), await t.setMinSize(new re(xt, Ae)).catch(() => {
      }), await qe(), await t.startResizeDragging(o).catch((i) => {
        bt.msg(i?.message || String(i), "error");
      }), Kt());
    }, Ns = () => ye(async () => {
      console.info(`${q} handle start`), f.value = null, await Ye(), await _e(!0).catch(() => {
      }), await Y(), await us(await Ut());
    }), zs = () => ye(async () => {
      console.info(`${q} handle pause`), await ds();
    }), Es = () => ye(async () => {
      console.info(`${q} handle resume`), await hs(await Ut());
    }), $s = () => ye(async () => {
      console.info(`${q} handle stop/export`), f.value = {
        stage: "encode",
        message: k.value.format === "gif" ? "准备生成 GIF 帧" : "准备导出 MP4",
        progress: 0.01,
        currentFrame: 0
      }, await ps(), p.value = 0, await fs(), await Y(), await _e(!1).catch(() => {
      });
    }), Rs = () => ye(async () => {
      console.info(`${q} handle cancel export`), await Ft(), f.value = null, await Y();
    }), Ls = () => {
      const o = { ...k.value };
      qe(), vs(), k.value = o, T.value = "ready", C.value = null, f.value = null, _e(!0).catch(() => {
      }), Ce(Y), Ye();
    }, Ws = async (o) => {
      const i = await ro(o.screenX, o.screenY), y = i?.scaleFactor || await t.scaleFactor(), m = i ? {
        x: i.position.x,
        y: i.position.y,
        width: i.size.width,
        height: i.size.height
      } : null, $ = ks(o, m, y), R = Ms(o, m, y);
      l.value = !0, h.value = R, await Ce(), await Re(), await t.setMinSize(
        R ? new re(St, On) : new re(St, Ae)
      ).catch(() => {
      });
      const j = Math.round(St * y), oe = Math.round(
        (R ? On : Ae) * y
      ), z = Os(o, y, !$), nn = R && m ? {
        x: Math.max(m.x, z.screenX),
        y: Math.max(m.y, z.screenY),
        width: Math.max(j, Math.min(z.physicalWidth, m.width)),
        height: Math.max(oe, Math.min(z.physicalHeight, m.height))
      } : await Ts(
        z,
        j,
        oe
      );
      try {
        if (await Jt(
          m && R ? Zt(nn, m) : nn
        ), await Ce(), await Xt(), R) {
          const { actualRegion: ee } = await Ke();
          console.info(`${q} snap edge result`, {
            target: o,
            snapTarget: z,
            actualRegion: ee,
            monitorCovering: $,
            monitorEdge: R
          });
          return;
        }
        const vt = async () => {
          const { actualRegion: ee, currentFrame: Le } = await Ke(), se = {
            x: z.screenX - ee.screenX,
            y: z.screenY - ee.screenY,
            width: z.physicalWidth - ee.physicalWidth,
            height: z.physicalHeight - ee.physicalHeight
          };
          if (Math.abs(se.x) <= In && Math.abs(se.y) <= In && Math.abs(se.width) <= Tn && Math.abs(se.height) <= Tn)
            return !0;
          const sn = {
            x: Le.x + se.x,
            y: Le.y + se.y,
            width: Math.max(j, Le.width + se.width),
            height: Math.max(oe, Le.height + se.height)
          };
          return await Jt(
            m && R ? Zt(sn, m) : sn
          ), !1;
        };
        for (let ee = 0; ee < Ur && !await vt(); ee += 1)
          ;
        const { actualRegion: ae } = await Ke();
        console.info(`${q} snap result`, {
          target: o,
          snapTarget: z,
          actualRegion: ae,
          residual: {
            left: ae.screenX - z.screenX,
            top: ae.screenY - z.screenY,
            right: ae.screenX + ae.physicalWidth - (z.screenX + z.physicalWidth),
            bottom: ae.screenY + ae.physicalHeight - (z.screenY + z.physicalHeight)
          },
          monitorCovering: $
        });
      } catch (vt) {
        console.warn(`${q} snap correction skipped`, vt);
      } finally {
        await Ss(), await Y(), await Xt(), await xs(), await t.setFocus().catch(() => {
        });
      }
    }, Ds = () => ye(async () => {
      await qe();
      const o = await or();
      await Ws(o);
    }), As = async () => {
      await t.minimize();
    }, en = async () => {
      jt.value = !0;
      try {
        T.value === "exporting" ? await Ft().catch(() => {
        }) : await gs(), await De(null).catch(() => {
        }), await _e(!1).catch(() => {
        });
      } catch {
      }
      await ar();
    }, Fs = async () => {
      C.value && (await Y(), await d("open_file_with_default_app", { filePath: C.value.path }));
    }, js = async () => {
      C.value && (await Y(), await d("show_file_in_folder", { filePath: C.value.path }));
    }, tn = (o) => {
      o.key === "Escape" && (o.preventDefault(), en());
    };
    return ct(async () => {
      T.value = "ready", await t.setMinSize(new re(xt, Ae)).catch(() => {
      }), await _e(!0).catch(() => {
      }), await At().catch(() => {
      }), await Ce(), await Y(), await Ye(), await Ce(), await t.emit("screen_recorder_ready"), U = await st("screen_recorder_export_progress", (o) => {
        f.value = o.payload;
      }).catch(() => null), n.value && (b = new ResizeObserver(() => {
        l.value || Ve();
      }), b.observe(n.value)), I = await t.onMoved(() => {
        Ve();
      }).catch(() => null), window.addEventListener("resize", Ve), window.addEventListener("keydown", tn);
    }), ke(pt, (o) => {
      o ? Ye() : Qt();
    }), ke(T, (o) => {
      o !== "recording" && (p.value = 0), o !== "exporting" && (f.value = null);
    }), Nn(() => {
      b?.disconnect(), I?.(), U?.(), window.removeEventListener("resize", Ve), window.removeEventListener("keydown", tn), Vt(), De(null).catch(() => {
      }), Ze(null).catch(() => {
      }), _e(!1).catch(() => {
      }), Qt();
    }), (o, i) => (M(), E("div", fr, [
      c(
        "div",
        {
          class: L(["recorder-shell", {
            recording: u(T) === "recording",
            paused: u(T) === "paused",
            "snap-aligned": l.value,
            "snap-fullscreen": h.value
          }])
        },
        [
          (M(), E(
            xe,
            null,
            Zs(x, (y) => c("span", {
              key: y.className,
              class: L(["resize-zone", y.className]),
              onMousedown: Fe((m) => Ps(y.direction), ["prevent"])
            }, null, 42, gr)),
            64
            /* STABLE_FRAGMENT */
          )),
          c(
            "header",
            {
              ref_key: "titleBarRef",
              ref: s,
              class: "title-bar",
              onMousedown: Is
            },
            [
              c(
                "span",
                vr,
                A(o.$t("screenRecorder.title") || "区域录制"),
                1
                /* TEXT */
              ),
              c(
                "div",
                {
                  class: "window-actions",
                  onMousedown: i[0] || (i[0] = Fe(() => {
                  }, ["stop"]))
                },
                [
                  c("button", {
                    class: "title-button title-button--window",
                    title: "最小化",
                    onClick: As
                  }, [
                    N(u(fo), {
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
                    onClick: en
                  }, [
                    N(u(po), {
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
          c("main", yr, [
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
            c("div", wr, [
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
              ref: a,
              class: "control-strip"
            },
            [
              c("div", mr, [
                c("div", _r, [
                  u(T) === "ready" || u(T) === "completed" ? (M(), E(
                    "button",
                    {
                      key: 0,
                      class: "icon-control snap-control",
                      title: "拖到目标窗口并松开以对齐",
                      "aria-label": "对齐目标窗口",
                      onMousedown: Fe(Ds, ["prevent"])
                    },
                    [
                      N(u(go), {
                        theme: "outline",
                        size: "18",
                        strokeWidth: 3,
                        strokeLinecap: "butt"
                      })
                    ],
                    32
                    /* NEED_HYDRATION */
                  )) : ne("v-if", !0),
                  c("button", {
                    class: L(["audio-meter", { active: $e.value && p.value > 0.03, metering: $e.value && !g.value, muted: !$e.value || g.value }]),
                    title: ws.value,
                    "aria-label": "系统声音录制状态",
                    disabled: u(T) === "exporting" || u(k).format === "gif"
                  }, [
                    c(
                      "span",
                      {
                        class: "audio-bars",
                        style: Oe(ys.value)
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
                  ], 10, br)
                ]),
                c("label", Cr, [
                  ue(c("select", {
                    "onUpdate:modelValue": i[1] || (i[1] = (y) => u(k).fps = y),
                    disabled: Ee.value
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
                  ]), 8, xr), [
                    [yt, u(k).fps]
                  ]),
                  i[15] || (i[15] = c(
                    "span",
                    { class: "unit" },
                    "fps",
                    -1
                    /* HOISTED */
                  ))
                ]),
                ue(c("select", {
                  "onUpdate:modelValue": i[2] || (i[2] = (y) => u(k).format = y),
                  class: "format-select optional-format",
                  disabled: Ee.value
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
                ]), 8, Sr), [
                  [yt, u(k).format]
                ]),
                ue(c("select", {
                  "onUpdate:modelValue": i[3] || (i[3] = (y) => u(k).quality = y),
                  class: "quality-select optional-quality",
                  disabled: Ee.value
                }, [
                  c(
                    "option",
                    Mr,
                    A(o.$t("screenRecorder.qualityHigh")),
                    1
                    /* TEXT */
                  ),
                  c(
                    "option",
                    Or,
                    A(o.$t("screenRecorder.qualityStandard")),
                    1
                    /* TEXT */
                  ),
                  c(
                    "option",
                    Tr,
                    A(o.$t("screenRecorder.qualitySmall")),
                    1
                    /* TEXT */
                  )
                ], 8, kr), [
                  [yt, u(k).quality]
                ]),
                c("div", Ir, [
                  c("label", Pr, [
                    c("input", {
                      value: r.value.width,
                      readonly: ""
                    }, null, 8, Nr)
                  ]),
                  i[17] || (i[17] = c(
                    "span",
                    { class: "multiply" },
                    "×",
                    -1
                    /* HOISTED */
                  )),
                  c("label", zr, [
                    c("input", {
                      value: r.value.height,
                      readonly: ""
                    }, null, 8, Er)
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
              c("div", $r, [
                u(T) === "recording" || u(T) === "paused" ? (M(), E(
                  xe,
                  { key: 0 },
                  [
                    c(
                      "span",
                      Rr,
                      A(_s.value),
                      1
                      /* TEXT */
                    ),
                    c("button", {
                      class: "control-button",
                      onClick: i[4] || (i[4] = (y) => u(T) === "paused" ? Es() : zs())
                    }, [
                      c(
                        "span",
                        Lr,
                        A(u(T) === "paused" ? o.$t("screenRecorder.resume") : o.$t("screenRecorder.pause")),
                        1
                        /* TEXT */
                      )
                    ]),
                    c("button", {
                      class: "control-button danger",
                      onClick: $s
                    }, [
                      c(
                        "span",
                        Wr,
                        A(o.$t("screenRecorder.stop")),
                        1
                        /* TEXT */
                      )
                    ])
                  ],
                  64
                  /* STABLE_FRAGMENT */
                )) : u(T) === "exporting" ? (M(), E(
                  xe,
                  { key: 1 },
                  [
                    c("div", {
                      class: "export-progress",
                      title: ms.value
                    }, [
                      c("div", Ar, [
                        c(
                          "span",
                          null,
                          A(ft.value),
                          1
                          /* TEXT */
                        ),
                        c(
                          "strong",
                          null,
                          A(Bt.value) + "%",
                          1
                          /* TEXT */
                        )
                      ]),
                      c("div", Fr, [
                        c(
                          "span",
                          {
                            style: Oe({ width: `${Bt.value}%` })
                          },
                          null,
                          4
                          /* STYLE */
                        )
                      ])
                    ], 8, Dr),
                    c("button", {
                      class: "control-button danger",
                      title: "取消导出",
                      onClick: Rs
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
                )) : u(T) === "completed" && u(C) ? (M(), E(
                  xe,
                  { key: 2 },
                  [
                    c("span", {
                      class: "save-status optional-save-status",
                      title: u(C).path
                    }, A(u(C).hasAudio ? "已保存·有声" : "已保存·无声"), 9, jr),
                    c("button", {
                      class: "control-button",
                      title: "打开文件",
                      onClick: Fs
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
                      onClick: js
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
                      onClick: Ls
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
                )) : (M(), E("button", {
                  key: 3,
                  class: "record-button",
                  disabled: u(V)?.available === !1 || r.value.width < be || r.value.height < be,
                  onClick: Ns
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
                    Hr,
                    A(o.$t("screenRecorder.start")),
                    1
                    /* TEXT */
                  )
                ], 8, Br))
              ])
            ],
            512
            /* NEED_PATCH */
          )
        ],
        2
        /* CLASS */
      ),
      u(V) && !u(V).available ? (M(), E(
        "p",
        Gr,
        A(u(V).message || o.$t("screenRecorder.ffmpegMissing")),
        1
        /* TEXT */
      )) : ne("v-if", !0)
    ]));
  }
}), Xr = (e, t) => {
  const n = e.__vccOpts || e;
  for (const [s, a] of t)
    n[s] = a;
  return n;
}, Zr = /* @__PURE__ */ Xr(Yr, [["__scopeId", "data-v-d18b0626"]]), Jr = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Zr
}, Symbol.toStringTag, { value: "Module" }));
export {
  el as activate
};
