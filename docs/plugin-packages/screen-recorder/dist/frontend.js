import { inject as le, createVNode as N, getCurrentInstance as xe, ref as S, computed as w, unref as u, readonly as js, getCurrentScope as Bs, onScopeDispose as Hs, onMounted as lt, nextTick as be, watch as Se, isRef as Gs, warn as Us, provide as Vs, defineComponent as F, createElementBlock as E, openBlock as M, mergeProps as qs, renderSlot as ke, createElementVNode as c, normalizeClass as L, Transition as Tt, withCtx as ce, withDirectives as ue, normalizeStyle as Me, createTextVNode as Ks, toDisplayString as A, vShow as et, shallowReactive as Ys, createBlock as te, createCommentVNode as ne, resolveDynamicComponent as In, Fragment as Ce, withModifiers as Ae, isVNode as je, render as tt, onUnmounted as Pn, renderList as Xs, vModelSelect as vt } from "vue";
const Zr = (e) => {
  e.registerRoute({
    target: "window",
    path: "/screen-recorder",
    name: "ScreenRecorder",
    component: () => Promise.resolve().then(() => Yr)
  });
};
function Zs(e, t, n, s) {
  if (typeof t == "function" ? e !== t || !0 : !t.has(e)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
  return n === "m" ? s : n === "a" ? s.call(e) : s ? s.value : t.get(e);
}
function Js(e, t, n, s, o) {
  if (typeof t == "function" ? e !== t || !0 : !t.has(e)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
  return t.set(e, n), n;
}
var Ze;
const K = "__TAURI_TO_IPC_KEY__";
function Qs(e, t = !1) {
  return window.__TAURI_INTERNALS__.transformCallback(e, t);
}
async function d(e, t = {}, n) {
  return window.__TAURI_INTERNALS__.invoke(e, t, n);
}
class eo {
  get rid() {
    return Zs(this, Ze, "f");
  }
  constructor(t) {
    Ze.set(this, void 0), Js(this, Ze, t);
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
Ze = /* @__PURE__ */ new WeakMap();
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
class we {
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
class Nn {
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
    return new Nn(this.x / t, this.y / t);
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
class Ye {
  constructor(t) {
    this.position = t;
  }
  toLogical(t) {
    return this.position instanceof Nn ? this.position : this.position.toLogical(t);
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
async function zn(e, t) {
  await d("plugin:event|unlisten", {
    event: e,
    eventId: t
  });
}
async function nt(e, t, n) {
  var s;
  const o = typeof n?.target == "string" ? { kind: "AnyLabel", label: n.target } : (s = n?.target) !== null && s !== void 0 ? s : { kind: "Any" };
  return d("plugin:event|listen", {
    event: e,
    target: o,
    handler: Qs(t)
  }).then((l) => async () => zn(e, l));
}
async function to(e, t, n) {
  return nt(e, (s) => {
    zn(e, s.id), t(s);
  }, n);
}
async function no(e, t) {
  await d("plugin:event|emit", {
    event: e,
    payload: t
  });
}
async function so(e, t, n) {
  await d("plugin:event|emit_to", {
    target: typeof e == "string" ? { kind: "AnyLabel", label: e } : e,
    event: t,
    payload: n
  });
}
class Fe extends eo {
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
      rgba: st(t),
      width: n,
      height: s
    }).then((o) => new Fe(o));
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
      bytes: st(t)
    }).then((n) => new Fe(n));
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
    return d("plugin:image|from_path", { path: t }).then((n) => new Fe(n));
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
function st(e) {
  return e == null ? null : typeof e == "string" ? e : e instanceof Fe ? e.rid : e;
}
var St;
(function(e) {
  e[e.Critical = 1] = "Critical", e[e.Informational = 2] = "Informational";
})(St || (St = {}));
class oo {
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
var sn;
(function(e) {
  e.None = "none", e.Normal = "normal", e.Indeterminate = "indeterminate", e.Paused = "paused", e.Error = "error";
})(sn || (sn = {}));
function En() {
  return new $n(window.__TAURI_INTERNALS__.metadata.currentWindow.label, {
    // @ts-expect-error `skip` is not defined in the public API but it is handled by the constructor
    skip: !0
  });
}
async function yt() {
  return d("plugin:window|get_all_windows").then((e) => e.map((t) => new $n(t, {
    // @ts-expect-error `skip` is not defined in the public API but it is handled by the constructor
    skip: !0
  })));
}
const wt = ["tauri://created", "tauri://error"];
class $n {
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
    return (n = (await yt()).find((s) => s.label === t)) !== null && n !== void 0 ? n : null;
  }
  /**
   * Get an instance of `Window` for the current window.
   */
  static getCurrent() {
    return En();
  }
  /**
   * Gets a list of instances of `Window` for all available windows.
   */
  static async getAll() {
    return yt();
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
    for (const t of await yt())
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
    } : nt(t, n, {
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
    } : to(t, n, {
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
    if (wt.includes(t)) {
      for (const s of this.listeners[t] || [])
        s({
          event: t,
          id: -1,
          payload: n
        });
      return;
    }
    return no(t, n);
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
    if (wt.includes(n)) {
      for (const o of this.listeners[n] || [])
        o({
          event: n,
          id: -1,
          payload: s
        });
      return;
    }
    return so(t, n, s);
  }
  /** @ignore */
  _handleTauriEvent(t, n) {
    return wt.includes(t) ? (t in this.listeners ? this.listeners[t].push(n) : this.listeners[t] = [n], !0) : !1;
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
    return t && (t === St.Critical ? n = { type: "Critical" } : n = { type: "Informational" }), d("plugin:window|request_user_attention", {
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
      value: t instanceof we ? t : new we(t)
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
      value: t instanceof we ? t : t ? new we(t) : null
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
      value: t instanceof we ? t : t ? new we(t) : null
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
      value: t instanceof Ye ? t : new Ye(t)
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
      value: st(t)
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
      value: t instanceof Ye ? t : new Ye(t)
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
      value: t ? st(t) : void 0
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
      const s = new oo(n);
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
          position: new J(r.payload.position)
        }
      });
    }), s = await this.listen(B.DRAG_OVER, (r) => {
      t({
        ...r,
        payload: {
          type: "over",
          position: new J(r.payload.position)
        }
      });
    }), o = await this.listen(B.DRAG_DROP, (r) => {
      t({
        ...r,
        payload: {
          type: "drop",
          paths: r.payload.paths,
          position: new J(r.payload.position)
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
var on;
(function(e) {
  e.Disabled = "disabled", e.Throttle = "throttle", e.Suspend = "suspend";
})(on || (on = {}));
var an;
(function(e) {
  e.AppearanceBased = "appearanceBased", e.Light = "light", e.Dark = "dark", e.MediumLight = "mediumLight", e.UltraDark = "ultraDark", e.Titlebar = "titlebar", e.Selection = "selection", e.Menu = "menu", e.Popover = "popover", e.Sidebar = "sidebar", e.HeaderView = "headerView", e.Sheet = "sheet", e.WindowBackground = "windowBackground", e.HudWindow = "hudWindow", e.FullScreenUI = "fullScreenUI", e.Tooltip = "tooltip", e.ContentBackground = "contentBackground", e.UnderWindowBackground = "underWindowBackground", e.UnderPageBackground = "underPageBackground", e.Mica = "mica", e.Blur = "blur", e.Acrylic = "acrylic", e.Tabbed = "tabbed", e.TabbedDark = "tabbedDark", e.TabbedLight = "tabbedLight";
})(an || (an = {}));
var rn;
(function(e) {
  e.FollowsWindowActiveState = "followsWindowActiveState", e.Active = "active", e.Inactive = "inactive";
})(rn || (rn = {}));
function ao(e) {
  return e === null ? null : {
    name: e.name,
    scaleFactor: e.scaleFactor,
    position: new J(e.position),
    size: new de(e.size)
  };
}
async function io(e, t) {
  return d("plugin:window|monitor_from_point", {
    x: e,
    y: t
  }).then(ao);
}
var ro = {
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
function lo() {
  return "icon-" + ((1 + Math.random()) * 4294967296 | 0).toString(16).substring(1);
}
function co(e, t, n) {
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
var uo = Symbol("icon-context");
function It(e, t, n) {
  var s = {
    name: "icon-" + e,
    props: ["size", "strokeWidth", "strokeLinecap", "strokeLinejoin", "theme", "fill", "spin"],
    setup: function(l) {
      var r = lo(), h = le(uo, ro);
      return function() {
        var p = l.size, g = l.strokeWidth, f = l.strokeLinecap, b = l.strokeLinejoin, I = l.theme, P = l.fill, U = l.spin, v = co(r, {
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
const ho = It("close-small", !1, function(e) {
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
}), po = It("minus", !1, function(e) {
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
}), fo = It("radar", !1, function(e) {
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
}), Rn = Symbol(), Je = "el", go = "is-", ie = (e, t, n, s, o) => {
  let l = `${e}-${t}`;
  return n && (l += `-${n}`), s && (l += `__${s}`), o && (l += `--${o}`), l;
}, Ln = Symbol("namespaceContextKey"), vo = (e) => {
  const t = e || (xe() ? le(Ln, S(Je)) : S(Je));
  return w(() => u(t) || Je);
}, Pt = (e, t) => {
  const n = vo(t);
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
      return v && O ? `${go}${v}` : "";
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
const yo = Object.prototype.hasOwnProperty, ln = (e, t) => yo.call(e, t), Be = (e) => typeof e == "function", he = (e) => typeof e == "string", Wn = (e) => e !== null && typeof e == "object";
var wo = typeof global == "object" && global && global.Object === Object && global, mo = typeof self == "object" && self && self.Object === Object && self, Nt = wo || mo || Function("return this")(), Oe = Nt.Symbol, Dn = Object.prototype, _o = Dn.hasOwnProperty, bo = Dn.toString, Le = Oe ? Oe.toStringTag : void 0;
function Co(e) {
  var t = _o.call(e, Le), n = e[Le];
  try {
    e[Le] = void 0;
    var s = !0;
  } catch {
  }
  var o = bo.call(e);
  return s && (t ? e[Le] = n : delete e[Le]), o;
}
var xo = Object.prototype, So = xo.toString;
function ko(e) {
  return So.call(e);
}
var Mo = "[object Null]", Oo = "[object Undefined]", cn = Oe ? Oe.toStringTag : void 0;
function An(e) {
  return e == null ? e === void 0 ? Oo : Mo : cn && cn in Object(e) ? Co(e) : ko(e);
}
function To(e) {
  return e != null && typeof e == "object";
}
var Io = "[object Symbol]";
function zt(e) {
  return typeof e == "symbol" || To(e) && An(e) == Io;
}
function Po(e, t) {
  for (var n = -1, s = e == null ? 0 : e.length, o = Array(s); ++n < s; )
    o[n] = t(e[n], n, e);
  return o;
}
var Et = Array.isArray, un = Oe ? Oe.prototype : void 0, dn = un ? un.toString : void 0;
function Fn(e) {
  if (typeof e == "string")
    return e;
  if (Et(e))
    return Po(e, Fn) + "";
  if (zt(e))
    return dn ? dn.call(e) : "";
  var t = e + "";
  return t == "0" && 1 / e == -1 / 0 ? "-0" : t;
}
function jn(e) {
  var t = typeof e;
  return e != null && (t == "object" || t == "function");
}
var No = "[object AsyncFunction]", zo = "[object Function]", Eo = "[object GeneratorFunction]", $o = "[object Proxy]";
function Ro(e) {
  if (!jn(e))
    return !1;
  var t = An(e);
  return t == zo || t == Eo || t == No || t == $o;
}
var mt = Nt["__core-js_shared__"], hn = function() {
  var e = /[^.]+$/.exec(mt && mt.keys && mt.keys.IE_PROTO || "");
  return e ? "Symbol(src)_1." + e : "";
}();
function Lo(e) {
  return !!hn && hn in e;
}
var Wo = Function.prototype, Do = Wo.toString;
function Ao(e) {
  if (e != null) {
    try {
      return Do.call(e);
    } catch {
    }
    try {
      return e + "";
    } catch {
    }
  }
  return "";
}
var Fo = /[\\^$.*+?()[\]{}|]/g, jo = /^\[object .+?Constructor\]$/, Bo = Function.prototype, Ho = Object.prototype, Go = Bo.toString, Uo = Ho.hasOwnProperty, Vo = RegExp(
  "^" + Go.call(Uo).replace(Fo, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$"
);
function qo(e) {
  if (!jn(e) || Lo(e))
    return !1;
  var t = Ro(e) ? Vo : jo;
  return t.test(Ao(e));
}
function Ko(e, t) {
  return e?.[t];
}
function Bn(e, t) {
  var n = Ko(e, t);
  return qo(n) ? n : void 0;
}
function Yo(e, t) {
  return e === t || e !== e && t !== t;
}
var Xo = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/, Zo = /^\w*$/;
function Jo(e, t) {
  if (Et(e))
    return !1;
  var n = typeof e;
  return n == "number" || n == "symbol" || n == "boolean" || e == null || zt(e) ? !0 : Zo.test(e) || !Xo.test(e) || t != null && e in Object(t);
}
var He = Bn(Object, "create");
function Qo() {
  this.__data__ = He ? He(null) : {}, this.size = 0;
}
function ea(e) {
  var t = this.has(e) && delete this.__data__[e];
  return this.size -= t ? 1 : 0, t;
}
var ta = "__lodash_hash_undefined__", na = Object.prototype, sa = na.hasOwnProperty;
function oa(e) {
  var t = this.__data__;
  if (He) {
    var n = t[e];
    return n === ta ? void 0 : n;
  }
  return sa.call(t, e) ? t[e] : void 0;
}
var aa = Object.prototype, ia = aa.hasOwnProperty;
function ra(e) {
  var t = this.__data__;
  return He ? t[e] !== void 0 : ia.call(t, e);
}
var la = "__lodash_hash_undefined__";
function ca(e, t) {
  var n = this.__data__;
  return this.size += this.has(e) ? 0 : 1, n[e] = He && t === void 0 ? la : t, this;
}
function pe(e) {
  var t = -1, n = e == null ? 0 : e.length;
  for (this.clear(); ++t < n; ) {
    var s = e[t];
    this.set(s[0], s[1]);
  }
}
pe.prototype.clear = Qo;
pe.prototype.delete = ea;
pe.prototype.get = oa;
pe.prototype.has = ra;
pe.prototype.set = ca;
function ua() {
  this.__data__ = [], this.size = 0;
}
function ct(e, t) {
  for (var n = e.length; n--; )
    if (Yo(e[n][0], t))
      return n;
  return -1;
}
var da = Array.prototype, ha = da.splice;
function pa(e) {
  var t = this.__data__, n = ct(t, e);
  if (n < 0)
    return !1;
  var s = t.length - 1;
  return n == s ? t.pop() : ha.call(t, n, 1), --this.size, !0;
}
function fa(e) {
  var t = this.__data__, n = ct(t, e);
  return n < 0 ? void 0 : t[n][1];
}
function ga(e) {
  return ct(this.__data__, e) > -1;
}
function va(e, t) {
  var n = this.__data__, s = ct(n, e);
  return s < 0 ? (++this.size, n.push([e, t])) : n[s][1] = t, this;
}
function Pe(e) {
  var t = -1, n = e == null ? 0 : e.length;
  for (this.clear(); ++t < n; ) {
    var s = e[t];
    this.set(s[0], s[1]);
  }
}
Pe.prototype.clear = ua;
Pe.prototype.delete = pa;
Pe.prototype.get = fa;
Pe.prototype.has = ga;
Pe.prototype.set = va;
var ya = Bn(Nt, "Map");
function wa() {
  this.size = 0, this.__data__ = {
    hash: new pe(),
    map: new (ya || Pe)(),
    string: new pe()
  };
}
function ma(e) {
  var t = typeof e;
  return t == "string" || t == "number" || t == "symbol" || t == "boolean" ? e !== "__proto__" : e === null;
}
function ut(e, t) {
  var n = e.__data__;
  return ma(t) ? n[typeof t == "string" ? "string" : "hash"] : n.map;
}
function _a(e) {
  var t = ut(this, e).delete(e);
  return this.size -= t ? 1 : 0, t;
}
function ba(e) {
  return ut(this, e).get(e);
}
function Ca(e) {
  return ut(this, e).has(e);
}
function xa(e, t) {
  var n = ut(this, e), s = n.size;
  return n.set(e, t), this.size += n.size == s ? 0 : 1, this;
}
function ge(e) {
  var t = -1, n = e == null ? 0 : e.length;
  for (this.clear(); ++t < n; ) {
    var s = e[t];
    this.set(s[0], s[1]);
  }
}
ge.prototype.clear = wa;
ge.prototype.delete = _a;
ge.prototype.get = ba;
ge.prototype.has = Ca;
ge.prototype.set = xa;
var Sa = "Expected a function";
function $t(e, t) {
  if (typeof e != "function" || t != null && typeof t != "function")
    throw new TypeError(Sa);
  var n = function() {
    var s = arguments, o = t ? t.apply(this, s) : s[0], l = n.cache;
    if (l.has(o))
      return l.get(o);
    var r = e.apply(this, s);
    return n.cache = l.set(o, r) || l, r;
  };
  return n.cache = new ($t.Cache || ge)(), n;
}
$t.Cache = ge;
var ka = 500;
function Ma(e) {
  var t = $t(e, function(s) {
    return n.size === ka && n.clear(), s;
  }), n = t.cache;
  return t;
}
var Oa = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g, Ta = /\\(\\)?/g, Ia = Ma(function(e) {
  var t = [];
  return e.charCodeAt(0) === 46 && t.push(""), e.replace(Oa, function(n, s, o, l) {
    t.push(o ? l.replace(Ta, "$1") : s || n);
  }), t;
});
function Pa(e) {
  return e == null ? "" : Fn(e);
}
function Na(e, t) {
  return Et(e) ? e : Jo(e, t) ? [e] : Ia(Pa(e));
}
function za(e) {
  if (typeof e == "string" || zt(e))
    return e;
  var t = e + "";
  return t == "0" && 1 / e == -1 / 0 ? "-0" : t;
}
function Ea(e, t) {
  t = Na(t, e);
  for (var n = 0, s = t.length; e != null && n < s; )
    e = e[za(t[n++])];
  return n && n == s ? e : void 0;
}
function $a(e, t, n) {
  var s = e == null ? void 0 : Ea(e, t);
  return s === void 0 ? n : s;
}
function Ra(e) {
  for (var t = -1, n = e == null ? 0 : e.length, s = {}; ++t < n; ) {
    var o = e[t];
    s[o[0]] = o[1];
  }
  return s;
}
const Hn = (e) => e === void 0, pn = (e) => typeof e == "boolean", fe = (e) => typeof e == "number", kt = (e) => typeof Element > "u" ? !1 : e instanceof Element, La = (e) => he(e) ? !Number.isNaN(Number(e)) : !1;
var fn;
const ve = typeof window < "u", Wa = (e) => typeof e == "string", Da = () => {
};
ve && ((fn = window?.navigator) != null && fn.userAgent) && /iP(ad|hone|od)/.test(window.navigator.userAgent);
function Rt(e) {
  return typeof e == "function" ? e() : u(e);
}
function Aa(e) {
  return e;
}
function Lt(e) {
  return Bs() ? (Hs(e), !0) : !1;
}
function Fa(e, t = !0) {
  xe() ? lt(e) : t ? e() : be(e);
}
function Gn(e, t, n = {}) {
  const {
    immediate: s = !0
  } = n, o = S(!1);
  let l = null;
  function r() {
    l && (clearTimeout(l), l = null);
  }
  function h() {
    o.value = !1, r();
  }
  function p(...g) {
    r(), o.value = !0, l = setTimeout(() => {
      o.value = !1, l = null, e(...g);
    }, Rt(t));
  }
  return s && (o.value = !0, ve && p()), Lt(h), {
    isPending: js(o),
    start: p,
    stop: h
  };
}
function Un(e) {
  var t;
  const n = Rt(e);
  return (t = n?.$el) != null ? t : n;
}
const Vn = ve ? window : void 0;
function qn(...e) {
  let t, n, s, o;
  if (Wa(e[0]) || Array.isArray(e[0]) ? ([n, s, o] = e, t = Vn) : [t, n, s, o] = e, !t)
    return Da;
  Array.isArray(n) || (n = [n]), Array.isArray(s) || (s = [s]);
  const l = [], r = () => {
    l.forEach((f) => f()), l.length = 0;
  }, h = (f, b, I, P) => (f.addEventListener(b, I, P), () => f.removeEventListener(b, I, P)), p = Se(() => [Un(t), Rt(o)], ([f, b]) => {
    r(), f && l.push(...n.flatMap((I) => s.map((P) => h(f, I, P, b))));
  }, { immediate: !0, flush: "post" }), g = () => {
    p(), r();
  };
  return Lt(g), g;
}
function ja(e, t = !1) {
  const n = S(), s = () => n.value = !!e();
  return s(), Fa(s, t), n;
}
const gn = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {}, vn = "__vueuse_ssr_handlers__";
gn[vn] = gn[vn] || {};
var yn = Object.getOwnPropertySymbols, Ba = Object.prototype.hasOwnProperty, Ha = Object.prototype.propertyIsEnumerable, Ga = (e, t) => {
  var n = {};
  for (var s in e)
    Ba.call(e, s) && t.indexOf(s) < 0 && (n[s] = e[s]);
  if (e != null && yn)
    for (var s of yn(e))
      t.indexOf(s) < 0 && Ha.call(e, s) && (n[s] = e[s]);
  return n;
};
function Ua(e, t, n = {}) {
  const s = n, { window: o = Vn } = s, l = Ga(s, ["window"]);
  let r;
  const h = ja(() => o && "ResizeObserver" in o), p = () => {
    r && (r.disconnect(), r = void 0);
  }, g = Se(() => Un(e), (b) => {
    p(), h.value && o && b && (r = new ResizeObserver(t), r.observe(b, l));
  }, { immediate: !0, flush: "post" }), f = () => {
    p(), g();
  };
  return Lt(f), {
    isSupported: h,
    stop: f
  };
}
var wn;
(function(e) {
  e.UP = "UP", e.RIGHT = "RIGHT", e.DOWN = "DOWN", e.LEFT = "LEFT", e.NONE = "NONE";
})(wn || (wn = {}));
var Va = Object.defineProperty, mn = Object.getOwnPropertySymbols, qa = Object.prototype.hasOwnProperty, Ka = Object.prototype.propertyIsEnumerable, _n = (e, t, n) => t in e ? Va(e, t, { enumerable: !0, configurable: !0, writable: !0, value: n }) : e[t] = n, Ya = (e, t) => {
  for (var n in t || (t = {}))
    qa.call(t, n) && _n(e, n, t[n]);
  if (mn)
    for (var n of mn(t))
      Ka.call(t, n) && _n(e, n, t[n]);
  return e;
};
const Xa = {
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
Ya({
  linear: Aa
}, Xa);
const bn = {
  current: 0
}, Cn = S(0), Kn = 2e3, xn = Symbol("elZIndexContextKey"), Yn = Symbol("zIndexContextKey"), Za = (e) => {
  const t = xe() ? le(xn, bn) : bn, n = e || (xe() ? le(Yn, void 0) : void 0), s = w(() => {
    const r = u(n);
    return fe(r) ? r : Kn;
  }), o = w(() => s.value + Cn.value), l = () => (t.current++, Cn.value = t.current, o.value);
  return !ve && le(xn), {
    initialZIndex: s,
    currentZIndex: o,
    nextZIndex: l
  };
};
var Ja = {
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
const Qa = (e) => (t, n) => ei(t, n, u(e)), ei = (e, t, n) => $a(n, e, e).replace(/\{(\w+)\}/g, (s, o) => {
  var l;
  return `${(l = t?.[o]) != null ? l : `{${o}}`}`;
}), ti = (e) => {
  const t = w(() => u(e).name), n = Gs(e) ? e : S(e);
  return {
    lang: t,
    locale: n,
    t: Qa(e)
  };
}, Xn = Symbol("localeContextKey"), ni = (e) => {
  const t = e || le(Xn, S());
  return ti(w(() => t.value || Ja));
}, Zn = "__epPropKey", H = (e) => e, si = (e) => Wn(e) && !!e[Zn], Jn = (e, t) => {
  if (!Wn(e) || si(e))
    return e;
  const { values: n, required: s, default: o, type: l, validator: r } = e, p = {
    type: l,
    required: !!s,
    validator: n || r ? (g) => {
      let f = !1, b = [];
      if (n && (b = Array.from(n), ln(e, "default") && b.push(o), f || (f = b.includes(g))), r && (f || (f = r(g))), !f && b.length > 0) {
        const I = [...new Set(b)].map((P) => JSON.stringify(P)).join(", ");
        Us(`Invalid prop: validation failed${t ? ` for prop "${t}"` : ""}. Expected one of [${I}], got value ${JSON.stringify(g)}.`);
      }
      return f;
    } : void 0,
    [Zn]: !0
  };
  return ln(e, "default") && (p.default = o), p;
}, Ne = (e) => Ra(Object.entries(e).map(([t, n]) => [
  t,
  Jn(n, t)
])), oi = ["", "default", "small", "large"], ai = Jn({
  type: String,
  values: oi,
  required: !1
}), ii = Symbol("size"), ri = Symbol("emptyValuesContextKey"), li = Ne({
  emptyValues: Array,
  valueOnClear: {
    type: [String, Number, Boolean, Function],
    default: void 0,
    validator: (e) => Be(e) ? !e() : !e
  }
}), Sn = (e) => Object.keys(e), ot = S();
function Qn(e, t = void 0) {
  return xe() ? le(Rn, ot) : ot;
}
function es(e, t) {
  const n = Qn(), s = Pt(e, w(() => {
    var h;
    return ((h = n.value) == null ? void 0 : h.namespace) || Je;
  })), o = ni(w(() => {
    var h;
    return (h = n.value) == null ? void 0 : h.locale;
  })), l = Za(w(() => {
    var h;
    return ((h = n.value) == null ? void 0 : h.zIndex) || Kn;
  })), r = w(() => {
    var h;
    return u(t) || ((h = n.value) == null ? void 0 : h.size) || "";
  });
  return ts(w(() => u(n) || {})), {
    ns: s,
    locale: o,
    zIndex: l,
    size: r
  };
}
const ts = (e, t, n = !1) => {
  var s;
  const o = !!xe(), l = o ? Qn() : void 0, r = (s = void 0) != null ? s : o ? Vs : void 0;
  if (!r)
    return;
  const h = w(() => {
    const p = u(e);
    return l?.value ? ci(l.value, p) : p;
  });
  return r(Rn, h), r(Xn, w(() => h.value.locale)), r(Ln, w(() => h.value.namespace)), r(Yn, w(() => h.value.zIndex)), r(ii, {
    size: w(() => h.value.size || "")
  }), r(ri, w(() => ({
    emptyValues: h.value.emptyValues,
    valueOnClear: h.value.valueOnClear
  }))), (n || !ot.value) && (ot.value = h.value), h;
}, ci = (e, t) => {
  const n = [.../* @__PURE__ */ new Set([...Sn(e), ...Sn(t)])], s = {};
  for (const o of n)
    s[o] = t[o] !== void 0 ? t[o] : e[o];
  return s;
};
var dt = (e, t) => {
  const n = e.__vccOpts || e;
  for (const [s, o] of t)
    n[s] = o;
  return n;
};
function Mt(e, t = "px") {
  if (!e)
    return "";
  if (fe(e) || La(e))
    return `${e}${t}`;
  if (he(e))
    return e;
}
const ns = (e, t) => (e.install = (n) => {
  for (const s of [e, ...Object.values({})])
    n.component(s.name, s);
}, e), ss = (e, t) => (e.install = (n) => {
  e._context = n._context, n.config.globalProperties[t] = e;
}, e), ui = Ne({
  size: {
    type: H([Number, String])
  },
  color: {
    type: String
  }
}), di = F({
  name: "ElIcon",
  inheritAttrs: !1
}), hi = /* @__PURE__ */ F({
  ...di,
  props: ui,
  setup(e) {
    const t = e, n = Pt("icon"), s = w(() => {
      const { size: o, color: l } = t;
      return !o && !l ? {} : {
        fontSize: Hn(o) ? void 0 : Mt(o),
        "--color": l
      };
    });
    return (o, l) => (M(), E("i", qs({
      class: u(n).b(),
      style: u(s)
    }, o.$attrs), [
      ke(o.$slots, "default")
    ], 16));
  }
});
var pi = /* @__PURE__ */ dt(hi, [["__file", "icon.vue"]]);
const at = ns(pi);
/*! Element Plus Icons Vue v2.3.1 */
var fi = /* @__PURE__ */ F({
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
}), gi = fi, vi = /* @__PURE__ */ F({
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
}), os = vi, yi = /* @__PURE__ */ F({
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
}), wi = yi, mi = /* @__PURE__ */ F({
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
}), _i = mi, bi = /* @__PURE__ */ F({
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
}), Ci = bi;
const as = H([
  String,
  Object,
  Function
]), xi = {
  Close: os
}, Si = {
  Close: os
}, it = {
  success: _i,
  warning: Ci,
  error: gi,
  info: wi
}, ki = (e) => e, Qe = {
  esc: "Escape",
  delete: "Delete",
  backspace: "Backspace"
}, Mi = Ne({
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
}), Oi = F({
  name: "ElBadge"
}), Ti = /* @__PURE__ */ F({
  ...Oi,
  props: Mi,
  setup(e, { expose: t }) {
    const n = e, s = Pt("badge"), o = w(() => n.isDot ? "" : fe(n.value) && fe(n.max) ? n.max < n.value ? `${n.max}+` : `${n.value}` : `${n.value}`), l = w(() => {
      var r, h, p, g, f;
      return [
        {
          backgroundColor: n.color,
          marginRight: Mt(-((h = (r = n.offset) == null ? void 0 : r[0]) != null ? h : 0)),
          marginTop: Mt((g = (p = n.offset) == null ? void 0 : p[1]) != null ? g : 0)
        },
        (f = n.badgeStyle) != null ? f : {}
      ];
    });
    return t({
      content: o
    }), (r, h) => (M(), E("div", {
      class: L(u(s).b())
    }, [
      ke(r.$slots, "default"),
      N(Tt, {
        name: `${u(s).namespace.value}-zoom-in-center`,
        persisted: ""
      }, {
        default: ce(() => [
          ue(c("sup", {
            class: L([
              u(s).e("content"),
              u(s).em("content", r.type),
              u(s).is("fixed", !!r.$slots.default),
              u(s).is("dot", r.isDot),
              u(s).is("hide-zero", !r.showZero && n.value === 0),
              r.badgeClass
            ]),
            style: Me(u(l))
          }, [
            ke(r.$slots, "content", { value: u(o) }, () => [
              Ks(A(u(o)), 1)
            ])
          ], 6), [
            [et, !r.hidden && (u(o) || r.isDot || r.$slots.content)]
          ])
        ]),
        _: 3
      }, 8, ["name"])
    ], 2));
  }
});
var Ii = /* @__PURE__ */ dt(Ti, [["__file", "badge.vue"]]);
const Pi = ns(Ii), Ni = Ne({
  a11y: {
    type: Boolean,
    default: !0
  },
  locale: {
    type: H(Object)
  },
  size: ai,
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
  ...li
}), X = {};
F({
  name: "ElConfigProvider",
  props: Ni,
  setup(e, { slots: t }) {
    Se(() => e.message, (s) => {
      Object.assign(X, s ?? {});
    }, { immediate: !0, deep: !0 });
    const n = ts(e);
    return () => ke(t, "default", { config: n?.value });
  }
});
const is = ["success", "info", "warning", "error"], D = ki({
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
}), zi = Ne({
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
    type: as,
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
    values: is,
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
}), Ei = {
  destroy: () => !0
}, Z = Ys([]), $i = (e) => {
  const t = Z.findIndex((o) => o.id === e), n = Z[t];
  let s;
  return t > 0 && (s = Z[t - 1]), { current: n, prev: s };
}, Ri = (e) => {
  const { prev: t } = $i(e);
  return t ? t.vm.exposed.bottom.value : 0;
}, Li = (e, t) => Z.findIndex((s) => s.id === e) > 0 ? 16 : t, Wi = F({
  name: "ElMessage"
}), Di = /* @__PURE__ */ F({
  ...Wi,
  props: zi,
  emits: Ei,
  setup(e, { expose: t }) {
    const n = e, { Close: s } = Si, { ns: o, zIndex: l } = es("message"), { currentZIndex: r, nextZIndex: h } = l, p = S(), g = S(!1), f = S(0);
    let b;
    const I = w(() => n.type ? n.type === "error" ? "danger" : n.type : "info"), P = w(() => {
      const C = n.type;
      return { [o.bm("icon", C)]: C && it[C] };
    }), U = w(() => n.icon || it[n.type] || ""), v = w(() => Ri(n.id)), _ = w(() => Li(n.id, n.offset) + v.value), O = w(() => f.value + _.value), Q = w(() => ({
      top: `${_.value}px`,
      zIndex: r.value
    }));
    function x() {
      n.duration !== 0 && ({ stop: b } = Gn(() => {
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
      C === Qe.esc && k();
    }
    return lt(() => {
      x(), h(), g.value = !0;
    }), Se(() => n.repeatNum, () => {
      T(), x();
    }), qn(document, "keydown", V), Ua(p, () => {
      f.value = p.value.getBoundingClientRect().height;
    }), t({
      visible: g,
      bottom: O,
      close: k
    }), (C, Wt) => (M(), te(Tt, {
      name: u(o).b("fade"),
      onBeforeLeave: C.onClose,
      onAfterLeave: (Dt) => C.$emit("destroy"),
      persisted: ""
    }, {
      default: ce(() => [
        ue(c("div", {
          id: C.id,
          ref_key: "messageRef",
          ref: p,
          class: L([
            u(o).b(),
            { [u(o).m(C.type)]: C.type },
            u(o).is("center", C.center),
            u(o).is("closable", C.showClose),
            u(o).is("plain", C.plain),
            C.customClass
          ]),
          style: Me(u(Q)),
          role: "alert",
          onMouseenter: T,
          onMouseleave: x
        }, [
          C.repeatNum > 1 ? (M(), te(u(Pi), {
            key: 0,
            value: C.repeatNum,
            type: u(I),
            class: L(u(o).e("badge"))
          }, null, 8, ["value", "type", "class"])) : ne("v-if", !0),
          u(U) ? (M(), te(u(at), {
            key: 1,
            class: L([u(o).e("icon"), u(P)])
          }, {
            default: ce(() => [
              (M(), te(In(u(U))))
            ]),
            _: 1
          }, 8, ["class"])) : ne("v-if", !0),
          ke(C.$slots, "default", {}, () => [
            C.dangerouslyUseHTMLString ? (M(), E(Ce, { key: 1 }, [
              ne(" Caution here, message could've been compromised, never use user's input as message "),
              c("p", {
                class: L(u(o).e("content")),
                innerHTML: C.message
              }, null, 10, ["innerHTML"])
            ], 2112)) : (M(), E("p", {
              key: 0,
              class: L(u(o).e("content"))
            }, A(C.message), 3))
          ]),
          C.showClose ? (M(), te(u(at), {
            key: 2,
            class: L(u(o).e("closeBtn")),
            onClick: Ae(k, ["stop"])
          }, {
            default: ce(() => [
              N(u(s))
            ]),
            _: 1
          }, 8, ["class", "onClick"])) : ne("v-if", !0)
        ], 46, ["id"]), [
          [et, g.value]
        ])
      ]),
      _: 3
    }, 8, ["name", "onBeforeLeave", "onAfterLeave"]));
  }
});
var Ai = /* @__PURE__ */ dt(Di, [["__file", "message.vue"]]);
let Fi = 1;
const rs = (e) => {
  const t = !e || he(e) || je(e) || Be(e) ? { message: e } : e, n = {
    ...D,
    ...t
  };
  if (!n.appendTo)
    n.appendTo = document.body;
  else if (he(n.appendTo)) {
    let s = document.querySelector(n.appendTo);
    kt(s) || (s = document.body), n.appendTo = s;
  }
  return pn(X.grouping) && !n.grouping && (n.grouping = X.grouping), fe(X.duration) && n.duration === 3e3 && (n.duration = X.duration), fe(X.offset) && n.offset === 16 && (n.offset = X.offset), pn(X.showClose) && !n.showClose && (n.showClose = X.showClose), n;
}, ji = (e) => {
  const t = Z.indexOf(e);
  if (t === -1)
    return;
  Z.splice(t, 1);
  const { handler: n } = e;
  n.close();
}, Bi = ({ appendTo: e, ...t }, n) => {
  const s = `message_${Fi++}`, o = t.onClose, l = document.createElement("div"), r = {
    ...t,
    id: s,
    onClose: () => {
      o?.(), ji(f);
    },
    onDestroy: () => {
      tt(null, l);
    }
  }, h = N(Ai, r, Be(r.message) || je(r.message) ? {
    default: Be(r.message) ? r.message : () => r.message
  } : null);
  h.appContext = n || Te._context, tt(h, l), e.appendChild(l.firstElementChild);
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
}, Te = (e = {}, t) => {
  if (!ve)
    return { close: () => {
    } };
  const n = rs(e);
  if (n.grouping && Z.length) {
    const o = Z.find(({ vnode: l }) => {
      var r;
      return ((r = l.props) == null ? void 0 : r.message) === n.message;
    });
    if (o)
      return o.props.repeatNum += 1, o.props.type = n.type, o.handler;
  }
  if (fe(X.max) && Z.length >= X.max)
    return { close: () => {
    } };
  const s = Bi(n, t);
  return Z.push(s), s.handler;
};
is.forEach((e) => {
  Te[e] = (t = {}, n) => {
    const s = rs(t);
    return Te({ ...s, type: e }, n);
  };
});
function Hi(e) {
  for (const t of Z)
    (!e || e === t.props.type) && t.handler.close();
}
Te.closeAll = Hi;
Te._context = null;
const Gi = ss(Te, "$message"), ls = [
  "success",
  "info",
  "warning",
  "error"
], Ui = Ne({
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
    type: as
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
    values: [...ls, ""],
    default: ""
  },
  zIndex: Number
}), Vi = {
  destroy: () => !0
}, qi = F({
  name: "ElNotification"
}), Ki = /* @__PURE__ */ F({
  ...qi,
  props: Ui,
  emits: Vi,
  setup(e, { expose: t }) {
    const n = e, { ns: s, zIndex: o } = es("notification"), { nextZIndex: l, currentZIndex: r } = o, { Close: h } = xi, p = S(!1);
    let g;
    const f = w(() => {
      const x = n.type;
      return x && it[n.type] ? s.m(x) : "";
    }), b = w(() => n.type && it[n.type] || n.icon), I = w(() => n.position.endsWith("right") ? "right" : "left"), P = w(() => n.position.startsWith("top") ? "top" : "bottom"), U = w(() => {
      var x;
      return {
        [P.value]: `${n.offset}px`,
        zIndex: (x = n.zIndex) != null ? x : r.value
      };
    });
    function v() {
      n.duration > 0 && ({ stop: g } = Gn(() => {
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
      x === Qe.delete || x === Qe.backspace ? _() : x === Qe.esc ? p.value && O() : v();
    }
    return lt(() => {
      v(), l(), p.value = !0;
    }), qn(document, "keydown", Q), t({
      visible: p,
      close: O
    }), (x, T) => (M(), te(Tt, {
      name: u(s).b("fade"),
      onBeforeLeave: x.onClose,
      onAfterLeave: (k) => x.$emit("destroy"),
      persisted: ""
    }, {
      default: ce(() => [
        ue(c("div", {
          id: x.id,
          class: L([u(s).b(), x.customClass, u(I)]),
          style: Me(u(U)),
          role: "alert",
          onMouseenter: _,
          onMouseleave: v,
          onClick: x.onClick
        }, [
          u(b) ? (M(), te(u(at), {
            key: 0,
            class: L([u(s).e("icon"), u(f)])
          }, {
            default: ce(() => [
              (M(), te(In(u(b))))
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
              style: Me(x.title ? void 0 : { margin: 0 })
            }, [
              ke(x.$slots, "default", {}, () => [
                x.dangerouslyUseHTMLString ? (M(), E(Ce, { key: 1 }, [
                  ne(" Caution here, message could've been compromised, never use user's input as message "),
                  c("p", { innerHTML: x.message }, null, 8, ["innerHTML"])
                ], 2112)) : (M(), E("p", { key: 0 }, A(x.message), 1))
              ])
            ], 6), [
              [et, x.message]
            ]),
            x.showClose ? (M(), te(u(at), {
              key: 0,
              class: L(u(s).e("closeBtn")),
              onClick: Ae(O, ["stop"])
            }, {
              default: ce(() => [
                N(u(h))
              ]),
              _: 1
            }, 8, ["class", "onClick"])) : ne("v-if", !0)
          ], 2)
        ], 46, ["id", "onClick"]), [
          [et, p.value]
        ])
      ]),
      _: 3
    }, 8, ["name", "onBeforeLeave", "onAfterLeave"]));
  }
});
var Yi = /* @__PURE__ */ dt(Ki, [["__file", "notification.vue"]]);
const rt = {
  "top-left": [],
  "top-right": [],
  "bottom-left": [],
  "bottom-right": []
}, Ot = 16;
let Xi = 1;
const Ie = function(e = {}, t) {
  if (!ve)
    return { close: () => {
    } };
  (he(e) || je(e)) && (e = { message: e });
  const n = e.position || "top-right";
  let s = e.offset || 0;
  rt[n].forEach(({ vm: f }) => {
    var b;
    s += (((b = f.el) == null ? void 0 : b.offsetHeight) || 0) + Ot;
  }), s += Ot;
  const o = `notification_${Xi++}`, l = e.onClose, r = {
    ...e,
    offset: s,
    id: o,
    onClose: () => {
      Zi(o, n, l);
    }
  };
  let h = document.body;
  kt(e.appendTo) ? h = e.appendTo : he(e.appendTo) && (h = document.querySelector(e.appendTo)), kt(h) || (h = document.body);
  const p = document.createElement("div"), g = N(Yi, r, Be(r.message) ? r.message : je(r.message) ? () => r.message : null);
  return g.appContext = Hn(t) ? Ie._context : t, g.props.onDestroy = () => {
    tt(null, p);
  }, tt(g, p), rt[n].push({ vm: g }), h.appendChild(p.firstElementChild), {
    close: () => {
      g.component.exposed.visible.value = !1;
    }
  };
};
ls.forEach((e) => {
  Ie[e] = (t = {}, n) => ((he(t) || je(t)) && (t = {
    message: t
  }), Ie({ ...t, type: e }, n));
});
function Zi(e, t, n) {
  const s = rt[t], o = s.findIndex(({ vm: g }) => {
    var f;
    return ((f = g.component) == null ? void 0 : f.props.id) === e;
  });
  if (o === -1)
    return;
  const { vm: l } = s[o];
  if (!l)
    return;
  n?.(l);
  const r = l.el.offsetHeight, h = t.split("-")[0];
  s.splice(o, 1);
  const p = s.length;
  if (!(p < 1))
    for (let g = o; g < p; g++) {
      const { el: f, component: b } = s[g].vm, I = Number.parseInt(f.style[h], 10) - r - Ot;
      b.props.offset = I;
    }
}
function Ji() {
  for (const e of Object.values(rt))
    e.forEach(({ vm: t }) => {
      t.component.exposed.visible.value = !1;
    });
}
Ie.closeAll = Ji;
Ie._context = null;
const Qi = ss(Ie, "$notify"), _t = {
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
    s === "center" ? Gi({
      message: t,
      type: n,
      duration: o,
      showClose: l,
      grouping: !0
    }) : Qi({
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
}, bt = "[screen-recorder]", er = (e) => {
  if (e)
    return JSON.parse(JSON.stringify(e));
}, G = async (e, t) => {
  const n = performance.now(), s = er(t);
  console.info(`${bt} invoke:start ${e}`, s ?? "");
  try {
    const o = await d(e, t);
    return console.info(`${bt} invoke:success ${e}`, {
      elapsedMs: Math.round(performance.now() - n),
      result: o
    }), o;
  } catch (o) {
    throw console.error(`${bt} invoke:error ${e}`, {
      elapsedMs: Math.round(performance.now() - n),
      error: o
    }), o;
  }
}, tr = () => G("screen_recorder_get_ffmpeg_status"), me = (e) => G("screen_recorder_set_capture_excluded", { excluded: e }), We = (e) => G("screen_recorder_set_passthrough_region", { region: e }), Xe = (e) => G("screen_recorder_set_overlay_window_region", { region: e }), nr = () => G("screen_recorder_pick_target_window"), sr = () => G("screen_recorder_close_window"), or = (e, t) => G("screen_recorder_start_recording", {
  region: e,
  fps: t.fps,
  quality: t.quality,
  audio: t.format === "mp4"
}), ar = () => G("screen_recorder_pause_recording"), ir = (e, t) => G("screen_recorder_resume_recording", {
  region: e,
  fps: t.fps,
  quality: t.quality,
  audio: t.format === "mp4"
}), rr = () => G("screen_recorder_stop_recording"), lr = () => G("screen_recorder_cancel_recording"), cr = () => G("screen_recorder_cancel_export"), ur = (e, t) => G("screen_recorder_export_recording", {
  format: e.format,
  fps: e.fps,
  quality: e.quality,
  savePath: e.savePath,
  durationMs: t
}), kn = () => ({
  format: "mp4",
  fps: 30,
  quality: "standard",
  savePath: "",
  audio: !0
}), W = "[screen-recorder]";
function dr() {
  const e = S("selecting"), t = S(kn()), n = S(null), s = S(null), o = S(""), l = S(null), r = S(0), h = S(0), p = S(null), g = () => {
    h.value = e.value === "recording" && l.value !== null ? r.value + Date.now() - l.value : r.value;
  }, f = () => {
    p.value !== null && (window.clearInterval(p.value), p.value = null);
  }, b = () => {
    f(), g(), p.value = window.setInterval(() => {
      g();
    }, 250);
  }, I = async () => (console.info(`${W} refresh ffmpeg status`), n.value = await tr(), console.info(`${W} ffmpeg status`, n.value), n.value), P = async (k) => {
    o.value = "", s.value = null, console.info(`${W} begin requested`, { region: k, settings: t.value });
    const V = n.value ?? await I();
    if (!V.available)
      throw new Error(V.message || "FFmpeg unavailable");
    await or(k, t.value), e.value = "recording", r.value = 0, h.value = 0, l.value = Date.now(), b(), console.info(`${W} recording started`, { status: e.value });
  }, U = async () => {
    e.value === "recording" && (console.info(`${W} pause requested`, { elapsedMs: h.value }), g(), r.value = h.value, l.value = null, f(), await ar(), e.value = "paused", console.info(`${W} recording paused`, { accumulatedMs: r.value }));
  }, v = async (k) => {
    e.value === "paused" && (console.info(`${W} resume requested`, { region: k, settings: t.value }), await ir(k, t.value), e.value = "recording", l.value = Date.now(), b(), console.info(`${W} recording resumed`));
  }, _ = async () => {
    e.value !== "recording" && e.value !== "paused" || (console.info(`${W} stop requested`, { status: e.value, elapsedMs: h.value }), g(), r.value = h.value, l.value = null, f(), await rr(), e.value = "exporting", console.info(`${W} recording stopped`, { accumulatedMs: r.value }));
  }, O = async () => {
    console.info(`${W} export requested`, { settings: t.value }), e.value = "exporting";
    try {
      return s.value = await ur(t.value, Math.round(h.value)), e.value = "completed", console.info(`${W} export completed`, s.value), s.value;
    } catch (k) {
      throw e.value = "ready", s.value = null, k;
    }
  }, Q = async () => {
    console.info(`${W} cancel export requested`, { status: e.value }), await cr(), e.value = "ready", s.value = null;
  }, x = async () => {
    console.info(`${W} cancel requested`, { status: e.value, elapsedMs: h.value }), f(), await lr(), e.value = "selecting", l.value = null, r.value = 0, h.value = 0, s.value = null, console.info(`${W} canceled`);
  }, T = () => {
    console.info(`${W} reset session`), e.value = "selecting", l.value = null, r.value = 0, h.value = 0, s.value = null, o.value = "", t.value = kn();
  };
  return Pn(() => {
    f();
  }), {
    status: e,
    settings: t,
    ffmpegStatus: n,
    result: s,
    errorMessage: o,
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
const hr = { class: "screen-recorder" }, pr = ["onMousedown"], fr = { class: "window-title" }, gr = { class: "capture-viewport" }, vr = { class: "capture-frame" }, yr = { class: "control-group control-group--tools" }, wr = { class: "tool-pill" }, mr = ["title", "disabled"], _r = { class: "select-field" }, br = ["disabled"], Cr = ["disabled"], xr = ["disabled"], Sr = { value: "high" }, kr = { value: "standard" }, Mr = { value: "small" }, Or = { class: "dimension-group optional-size" }, Tr = { class: "dimension" }, Ir = ["value"], Pr = { class: "dimension" }, Nr = ["value"], zr = { class: "control-group control-group--actions" }, Er = { class: "time" }, $r = { class: "button-label" }, Rr = { class: "button-label" }, Lr = ["title"], Wr = { class: "export-progress__meta" }, Dr = { class: "export-progress__track" }, Ar = ["title"], Fr = ["disabled"], jr = { class: "record-label" }, Br = {
  key: 0,
  class: "warning"
}, q = "[screen-recorder]", _e = 80, Ct = 420, De = 260, xt = 260, Mn = 140, Hr = 8, On = 1, Tn = 0, Gr = 15, Ur = 10, Vr = /* @__PURE__ */ F({
  __name: "index",
  setup(e) {
    const t = En(), n = S(null), s = S(null), o = S(null), l = S({ width: 0, height: 0 }), r = S(!1), h = S(!1), p = S(0), g = S(!1), f = S(null);
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
      elapsedMs: Wt,
      refreshFfmpegStatus: Dt,
      begin: cs,
      pause: us,
      resume: ds,
      stop: hs,
      exportFile: ps,
      cancelExport: At,
      cancel: fs,
      reset: gs
    } = dr(), Ft = S(!1), ze = w(() => T.value === "recording" || T.value === "paused" || T.value === "exporting"), ht = w(() => k.value.audio && k.value.format === "mp4"), Ee = w(() => ht.value && T.value === "recording"), vs = w(() => {
      const a = Ee.value && !g.value ? p.value : 0, i = (y, m) => Math.max(0.18, Math.min(1, y + a * m)).toFixed(3);
      return {
        "--bar-1": i(0.28, 0.64),
        "--bar-2": i(0.42, 0.78),
        "--bar-3": i(0.34, 0.94),
        "--bar-4": i(0.22, 0.72)
      };
    }), ys = w(() => {
      if (k.value.format === "gif")
        return "GIF 不支持音频";
      if (g.value && k.value.audio)
        return "音频已开启；实时音量动画不可用不影响导出系统声音";
      if (C.value?.audioDevice)
        return `已录制音频：${C.value.audioDevice}`;
      if (C.value && !C.value.hasAudio)
        return "未检测到可用音频设备，导出视频无声音";
      if (V.value?.available && !V.value.systemAudioAvailable) {
        const a = V.value.audioDevices?.join("、") || "无";
        return k.value.audio ? `未发现系统声音/立体声混音设备；不会自动录制麦克风。当前可用音频设备：${a}` : "录制音频已关闭";
      }
      return k.value.audio ? "录制音频已开启。系统声音将通过 WASAPI Loopback 捕获" : "录制音频已关闭";
    }), jt = w(() => {
      const a = f.value?.progress ?? 0.03;
      return Math.max(1, Math.min(100, Math.round(a * 100)));
    }), pt = w(() => {
      const a = f.value;
      return a ? a.totalFrames && a.stage === "frames" ? `${a.message}` : a.message || "正在导出..." : "正在导出...";
    }), ws = w(() => {
      const a = f.value;
      return a?.totalFrames ? `${pt.value} (${a.currentFrame}/${a.totalFrames})` : pt.value;
    }), ms = w(() => {
      const a = Math.floor(Wt.value / 1e3), i = Math.floor(a / 60).toString().padStart(2, "0"), y = (a % 60).toString().padStart(2, "0");
      return `${i}:${y}`;
    }), ye = async (a) => {
      try {
        await a();
      } catch (i) {
        console.error(`${q} action failed`, i), Ft.value || _t.msg(i?.message || String(i), "error");
      }
    }, Bt = (a) => Math.max(2, Math.floor(Math.round(a) / 2) * 2), Ht = (a) => Math.max(1, Math.round(a)), _s = (a, i) => a?.x === i?.x && a?.y === i?.y && a?.width === i?.width && a?.height === i?.height, Ge = async (a) => {
      _s(Q, a) || (Q = a ? { ...a } : null, await We(a).catch(() => {
      }));
    }, ft = async () => {
      const a = n.value;
      if (!a)
        throw new Error("录制视口尚未准备好");
      const i = a.getBoundingClientRect(), y = await t.scaleFactor(), m = await t.innerPosition(), $ = Ht(i.width * y), R = Ht(i.height * y);
      if ($ < _e || R < _e)
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
      return console.info(`${q} capture region`, {
        ...j,
        logicalSize: `${j.width}x${j.height}`,
        physicalSize: `${j.physicalWidth}x${j.physicalHeight}`
      }), j;
    }, Gt = async () => {
      const a = await ft(), i = Bt(a.physicalWidth), y = Bt(a.physicalHeight);
      return {
        ...a,
        width: i / a.scale,
        height: y / a.scale,
        physicalWidth: i,
        physicalHeight: y
      };
    }, bs = async () => {
      try {
        const a = await ft();
        if ((l.value.width !== a.physicalWidth || l.value.height !== a.physicalHeight) && (l.value = {
          width: a.physicalWidth,
          height: a.physicalHeight
        }), h.value) {
          const i = s.value?.getBoundingClientRect().height ?? 0, y = o.value?.getBoundingClientRect().height ?? 0;
          await Ge({
            x: Math.round(a.x * a.scale),
            y: Math.round((a.y + i) * a.scale),
            width: a.physicalWidth,
            height: Math.max(
              1,
              a.physicalHeight - Math.round((i + y) * a.scale)
            )
          });
          return;
        }
        await Ge({
          x: Math.round(a.x * a.scale),
          y: Math.round(a.y * a.scale),
          width: a.physicalWidth,
          height: a.physicalHeight
        });
      } catch {
        (l.value.width !== 0 || l.value.height !== 0) && (l.value = { width: 0, height: 0 }), await Ge(null);
      }
    }, Y = async () => _ || (_ = bs().finally(() => {
      if (_ = null, O) {
        const a = O;
        O = null, Ge(a);
      }
    }), _), Ue = () => {
      v === null && (v = requestAnimationFrame(() => {
        v = null, Y();
      }));
    }, Ut = () => {
      O = null, Q = null;
    }, Ve = async () => {
      Ut(), await We(null).catch(() => {
      }), await Xe(null).catch(() => {
      });
    }, Vt = () => {
      r.value = !1, h.value = !1;
    }, qt = () => {
      window.setTimeout(() => {
        Y();
      }, 120);
    }, $e = () => new Promise((a) => {
      requestAnimationFrame(() => requestAnimationFrame(() => a()));
    }), Cs = async () => {
      document.documentElement.classList.add("screen-recorder-repaint"), await $e(), document.documentElement.classList.remove("screen-recorder-repaint"), await $e();
    }, xs = async () => {
      await We(null).catch(() => {
      }), await t.setIgnoreCursorEvents(!0).catch(() => {
      }), await $e(), await t.setIgnoreCursorEvents(!1).catch(() => {
      }), await Y();
    }, Kt = async () => {
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
    }, Yt = async () => {
      if (!h.value) {
        await Xe(null).catch(() => {
        });
        return;
      }
      const a = await Kt(), i = await t.scaleFactor(), y = s.value?.getBoundingClientRect().height ?? 0, m = o.value?.getBoundingClientRect().height ?? 0;
      await Xe({
        width: a.width,
        height: a.height,
        topHeight: Math.round(y * i),
        bottomHeight: Math.round(m * i)
      }).catch(() => {
      });
    }, Xt = (a, i) => {
      const y = Math.min(a.width, i.width), m = Math.min(a.height, i.height), $ = i.x + i.width - y, R = i.y + i.height - m;
      return {
        x: Math.min(Math.max(a.x, i.x), $),
        y: Math.min(Math.max(a.y, i.y), R),
        width: y,
        height: m
      };
    }, Ss = (a, i, y) => {
      if (!i) return !1;
      const m = Math.max(8, Math.round(8 * y)), $ = i.x + i.width, R = i.y + i.height, j = a.screenX + a.physicalWidth, oe = a.screenY + a.physicalHeight;
      return a.screenX <= i.x + m && a.screenY <= i.y + m && j >= $ - m && oe >= R - m;
    }, ks = (a, i, y) => {
      if (!i) return !1;
      const m = Math.max(8, Math.round(8 * y));
      return a.screenX <= i.x + m || a.screenY <= i.y + m || a.screenX + a.physicalWidth >= i.x + i.width - m || a.screenY + a.physicalHeight >= i.y + i.height - m;
    }, Ms = (a, i, y) => {
      if (!y) return a;
      const m = Math.round(Gr * i), $ = Math.round(Ur * i);
      return {
        ...a,
        physicalWidth: Math.max(_e, a.physicalWidth - m),
        physicalHeight: Math.max(_e, a.physicalHeight - $)
      };
    }, Zt = async (a) => {
      await t.setSize(new de(Math.round(a.width), Math.round(a.height))), await t.setPosition(new J(Math.round(a.x), Math.round(a.y))), await $e();
    }, qe = async () => {
      const [a, i] = await Promise.all([
        ft(),
        Kt()
      ]);
      return { actualRegion: a, currentFrame: i };
    }, Os = async (a, i, y) => {
      const { actualRegion: m, currentFrame: $ } = await qe(), R = m.screenX - $.x, j = m.screenY - $.y, oe = Math.max(0, $.width - m.physicalWidth), z = Math.max(0, $.height - m.physicalHeight);
      return {
        x: a.screenX - R,
        y: a.screenY - j,
        width: Math.max(i, a.physicalWidth + oe),
        height: Math.max(y, a.physicalHeight + z)
      };
    }, Jt = async () => {
      P?.(), P = null, p.value = 0;
    }, Ke = async () => {
      if (!(!ht.value || P))
        try {
          console.info(`${q} backend audio meter listening`), P = await nt("screen_recorder_audio_level", (a) => {
            if (!Ee.value) {
              p.value = 0;
              return;
            }
            const i = Math.max(0, Math.min(1, Number(a.payload?.level ?? 0)));
            p.value = p.value * 0.38 + i * 0.62;
          }), g.value = !1;
        } catch (a) {
          console.error(`${q} audio meter failed`, a), g.value = !0;
        }
    }, Ts = async (a) => {
      a.button !== 0 || ze.value || (Vt(), await t.setMinSize(new re(Ct, De)).catch(() => {
      }), await Ve(), await t.startDragging().catch((i) => {
        _t.msg(i?.message || String(i), "error");
      }), qt());
    }, Is = async (a) => {
      ze.value || (Vt(), await t.setMinSize(new re(Ct, De)).catch(() => {
      }), await Ve(), await t.startResizeDragging(a).catch((i) => {
        _t.msg(i?.message || String(i), "error");
      }), qt());
    }, Ps = () => ye(async () => {
      console.info(`${q} handle start`), f.value = null, await Ke(), await me(!0).catch(() => {
      }), await Y(), await cs(await Gt());
    }), Ns = () => ye(async () => {
      console.info(`${q} handle pause`), await us();
    }), zs = () => ye(async () => {
      console.info(`${q} handle resume`), await ds(await Gt());
    }), Es = () => ye(async () => {
      console.info(`${q} handle stop/export`), f.value = {
        stage: "encode",
        message: k.value.format === "gif" ? "准备生成 GIF 帧" : "准备导出 MP4",
        progress: 0.01,
        currentFrame: 0
      }, await hs(), p.value = 0, await ps(), await Y(), await me(!1).catch(() => {
      });
    }), $s = () => ye(async () => {
      console.info(`${q} handle cancel export`), await At(), f.value = null, await Y();
    }), Rs = () => {
      const a = { ...k.value };
      Ve(), gs(), k.value = a, T.value = "ready", C.value = null, f.value = null, me(!0).catch(() => {
      }), be(Y), Ke();
    }, Ls = async (a) => {
      const i = await io(a.screenX, a.screenY), y = i?.scaleFactor || await t.scaleFactor(), m = i ? {
        x: i.position.x,
        y: i.position.y,
        width: i.size.width,
        height: i.size.height
      } : null, $ = Ss(a, m, y), R = ks(a, m, y);
      r.value = !0, h.value = R, await be(), await $e(), await t.setMinSize(
        R ? new re(xt, Mn) : new re(xt, De)
      ).catch(() => {
      });
      const j = Math.round(xt * y), oe = Math.round(
        (R ? Mn : De) * y
      ), z = Ms(a, y, !$), tn = R && m ? {
        x: Math.max(m.x, z.screenX),
        y: Math.max(m.y, z.screenY),
        width: Math.max(j, Math.min(z.physicalWidth, m.width)),
        height: Math.max(oe, Math.min(z.physicalHeight, m.height))
      } : await Os(
        z,
        j,
        oe
      );
      try {
        if (await Zt(
          m && R ? Xt(tn, m) : tn
        ), await be(), await Yt(), R) {
          const { actualRegion: ee } = await qe();
          console.info(`${q} snap edge result`, {
            target: a,
            snapTarget: z,
            actualRegion: ee,
            monitorCovering: $,
            monitorEdge: R
          });
          return;
        }
        const gt = async () => {
          const { actualRegion: ee, currentFrame: Re } = await qe(), se = {
            x: z.screenX - ee.screenX,
            y: z.screenY - ee.screenY,
            width: z.physicalWidth - ee.physicalWidth,
            height: z.physicalHeight - ee.physicalHeight
          };
          if (Math.abs(se.x) <= Tn && Math.abs(se.y) <= Tn && Math.abs(se.width) <= On && Math.abs(se.height) <= On)
            return !0;
          const nn = {
            x: Re.x + se.x,
            y: Re.y + se.y,
            width: Math.max(j, Re.width + se.width),
            height: Math.max(oe, Re.height + se.height)
          };
          return await Zt(
            m && R ? Xt(nn, m) : nn
          ), !1;
        };
        for (let ee = 0; ee < Hr && !await gt(); ee += 1)
          ;
        const { actualRegion: ae } = await qe();
        console.info(`${q} snap result`, {
          target: a,
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
      } catch (gt) {
        console.warn(`${q} snap correction skipped`, gt);
      } finally {
        await xs(), await Y(), await Yt(), await Cs(), await t.setFocus().catch(() => {
        });
      }
    }, Ws = () => ye(async () => {
      await Ve();
      const a = await nr();
      await Ls(a);
    }), Ds = async () => {
      await t.minimize();
    }, Qt = async () => {
      Ft.value = !0;
      try {
        T.value === "exporting" ? await At().catch(() => {
        }) : await fs(), await We(null).catch(() => {
        }), await me(!1).catch(() => {
        });
      } catch {
      }
      await sr();
    }, As = async () => {
      C.value && (await Y(), await d("open_file_with_default_app", { filePath: C.value.path }));
    }, Fs = async () => {
      C.value && (await Y(), await d("show_file_in_folder", { filePath: C.value.path }));
    }, en = (a) => {
      a.key === "Escape" && (a.preventDefault(), Qt());
    };
    return lt(async () => {
      T.value = "ready", await t.setMinSize(new re(Ct, De)).catch(() => {
      }), await me(!0).catch(() => {
      }), await Dt().catch(() => {
      }), await be(), await Y(), await Ke(), await be(), await t.emit("screen_recorder_ready"), U = await nt("screen_recorder_export_progress", (a) => {
        f.value = a.payload;
      }).catch(() => null), n.value && (b = new ResizeObserver(() => {
        Ue();
      }), b.observe(n.value)), I = await t.onMoved(() => {
        Ue();
      }).catch(() => null), window.addEventListener("resize", Ue), window.addEventListener("keydown", en);
    }), Se(ht, (a) => {
      a ? Ke() : Jt();
    }), Se(T, (a) => {
      a !== "recording" && (p.value = 0), a !== "exporting" && (f.value = null);
    }), Pn(() => {
      b?.disconnect(), I?.(), U?.(), window.removeEventListener("resize", Ue), window.removeEventListener("keydown", en), Ut(), We(null).catch(() => {
      }), Xe(null).catch(() => {
      }), me(!1).catch(() => {
      }), Jt();
    }), (a, i) => (M(), E("div", hr, [
      c(
        "div",
        {
          class: L(["recorder-shell", {
            recording: u(T) === "recording",
            paused: u(T) === "paused",
            "snap-aligned": r.value,
            "snap-fullscreen": h.value
          }])
        },
        [
          (M(), E(
            Ce,
            null,
            Xs(x, (y) => c("span", {
              key: y.className,
              class: L(["resize-zone", y.className]),
              onMousedown: Ae((m) => Is(y.direction), ["prevent"])
            }, null, 42, pr)),
            64
            /* STABLE_FRAGMENT */
          )),
          c(
            "header",
            {
              ref_key: "titleBarRef",
              ref: s,
              class: "title-bar",
              onMousedown: Ts
            },
            [
              c(
                "span",
                fr,
                A(a.$t("screenRecorder.title") || "区域录制"),
                1
                /* TEXT */
              ),
              c(
                "div",
                {
                  class: "window-actions",
                  onMousedown: i[0] || (i[0] = Ae(() => {
                  }, ["stop"]))
                },
                [
                  c("button", {
                    class: "title-button title-button--window",
                    title: "最小化",
                    onClick: Ds
                  }, [
                    N(u(po), {
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
                    onClick: Qt
                  }, [
                    N(u(ho), {
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
          c("main", gr, [
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
            c("div", vr, [
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
              c("div", yr, [
                c("div", wr, [
                  u(T) === "ready" || u(T) === "completed" ? (M(), E(
                    "button",
                    {
                      key: 0,
                      class: "icon-control snap-control",
                      title: "拖到目标窗口并松开以对齐",
                      "aria-label": "对齐目标窗口",
                      onMousedown: Ae(Ws, ["prevent"])
                    },
                    [
                      N(u(fo), {
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
                    class: L(["audio-meter", { active: Ee.value && p.value > 0.03, metering: Ee.value && !g.value, muted: !Ee.value || g.value }]),
                    title: ys.value,
                    "aria-label": "系统声音录制状态",
                    disabled: u(T) === "exporting" || u(k).format === "gif"
                  }, [
                    c(
                      "span",
                      {
                        class: "audio-bars",
                        style: Me(vs.value)
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
                  ], 10, mr)
                ]),
                c("label", _r, [
                  ue(c("select", {
                    "onUpdate:modelValue": i[1] || (i[1] = (y) => u(k).fps = y),
                    disabled: ze.value
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
                  ]), 8, br), [
                    [vt, u(k).fps]
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
                  disabled: ze.value
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
                ]), 8, Cr), [
                  [vt, u(k).format]
                ]),
                ue(c("select", {
                  "onUpdate:modelValue": i[3] || (i[3] = (y) => u(k).quality = y),
                  class: "quality-select optional-quality",
                  disabled: ze.value
                }, [
                  c(
                    "option",
                    Sr,
                    A(a.$t("screenRecorder.qualityHigh")),
                    1
                    /* TEXT */
                  ),
                  c(
                    "option",
                    kr,
                    A(a.$t("screenRecorder.qualityStandard")),
                    1
                    /* TEXT */
                  ),
                  c(
                    "option",
                    Mr,
                    A(a.$t("screenRecorder.qualitySmall")),
                    1
                    /* TEXT */
                  )
                ], 8, xr), [
                  [vt, u(k).quality]
                ]),
                c("div", Or, [
                  c("label", Tr, [
                    c("input", {
                      value: l.value.width,
                      readonly: ""
                    }, null, 8, Ir)
                  ]),
                  i[17] || (i[17] = c(
                    "span",
                    { class: "multiply" },
                    "×",
                    -1
                    /* HOISTED */
                  )),
                  c("label", Pr, [
                    c("input", {
                      value: l.value.height,
                      readonly: ""
                    }, null, 8, Nr)
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
              c("div", zr, [
                u(T) === "recording" || u(T) === "paused" ? (M(), E(
                  Ce,
                  { key: 0 },
                  [
                    c(
                      "span",
                      Er,
                      A(ms.value),
                      1
                      /* TEXT */
                    ),
                    c("button", {
                      class: "control-button",
                      onClick: i[4] || (i[4] = (y) => u(T) === "paused" ? zs() : Ns())
                    }, [
                      c(
                        "span",
                        $r,
                        A(u(T) === "paused" ? a.$t("screenRecorder.resume") : a.$t("screenRecorder.pause")),
                        1
                        /* TEXT */
                      )
                    ]),
                    c("button", {
                      class: "control-button danger",
                      onClick: Es
                    }, [
                      c(
                        "span",
                        Rr,
                        A(a.$t("screenRecorder.stop")),
                        1
                        /* TEXT */
                      )
                    ])
                  ],
                  64
                  /* STABLE_FRAGMENT */
                )) : u(T) === "exporting" ? (M(), E(
                  Ce,
                  { key: 1 },
                  [
                    c("div", {
                      class: "export-progress",
                      title: ws.value
                    }, [
                      c("div", Wr, [
                        c(
                          "span",
                          null,
                          A(pt.value),
                          1
                          /* TEXT */
                        ),
                        c(
                          "strong",
                          null,
                          A(jt.value) + "%",
                          1
                          /* TEXT */
                        )
                      ]),
                      c("div", Dr, [
                        c(
                          "span",
                          {
                            style: Me({ width: `${jt.value}%` })
                          },
                          null,
                          4
                          /* STYLE */
                        )
                      ])
                    ], 8, Lr),
                    c("button", {
                      class: "control-button danger",
                      title: "取消导出",
                      onClick: $s
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
                  Ce,
                  { key: 2 },
                  [
                    c("span", {
                      class: "save-status optional-save-status",
                      title: u(C).path
                    }, A(u(C).hasAudio ? "已保存·有声" : "已保存·无声"), 9, Ar),
                    c("button", {
                      class: "control-button",
                      title: "打开文件",
                      onClick: As
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
                      onClick: Fs
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
                      onClick: Rs
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
                  disabled: u(V)?.available === !1 || l.value.width < _e || l.value.height < _e,
                  onClick: Ps
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
                    jr,
                    A(a.$t("screenRecorder.start")),
                    1
                    /* TEXT */
                  )
                ], 8, Fr))
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
        Br,
        A(u(V).message || a.$t("screenRecorder.ffmpegMissing")),
        1
        /* TEXT */
      )) : ne("v-if", !0)
    ]));
  }
}), qr = (e, t) => {
  const n = e.__vccOpts || e;
  for (const [s, o] of t)
    n[s] = o;
  return n;
}, Kr = /* @__PURE__ */ qr(Vr, [["__scopeId", "data-v-3229d6d6"]]), Yr = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Kr
}, Symbol.toStringTag, { value: "Module" }));
export {
  Zr as activate
};
