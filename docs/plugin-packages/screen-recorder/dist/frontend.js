import { inject as ae, createVNode as T, getCurrentInstance as be, ref as C, computed as m, unref as u, readonly as ks, getCurrentScope as Os, onScopeDispose as Ms, onMounted as nt, nextTick as we, watch as Ce, isRef as Ts, warn as Is, provide as Ps, defineComponent as j, createElementBlock as I, openBlock as S, mergeProps as Ns, renderSlot as xe, createElementVNode as c, normalizeClass as $, Transition as Ct, withCtx as ie, withDirectives as re, normalizeStyle as Se, createTextVNode as zs, toDisplayString as D, vShow as Ke, shallowReactive as $s, createBlock as J, createCommentVNode as Q, resolveDynamicComponent as bn, Fragment as _e, withModifiers as Le, isVNode as De, render as Ze, onUnmounted as Cn, renderList as Es, vModelSelect as pt } from "vue";
const Lr = (e) => {
  e.registerRoute({
    target: "window",
    path: "/screen-recorder",
    name: "ScreenRecorder",
    component: () => Promise.resolve().then(() => $r)
  });
};
function Ls(e, t, n, s) {
  if (typeof t == "function" ? e !== t || !0 : !t.has(e)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
  return n === "m" ? s : n === "a" ? s.call(e) : s ? s.value : t.get(e);
}
function Rs(e, t, n, s, o) {
  if (typeof t == "function" ? e !== t || !0 : !t.has(e)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
  return t.set(e, n), n;
}
var Ue;
const U = "__TAURI_TO_IPC_KEY__";
function Ds(e, t = !1) {
  return window.__TAURI_INTERNALS__.transformCallback(e, t);
}
async function d(e, t = {}, n) {
  return window.__TAURI_INTERNALS__.invoke(e, t, n);
}
class Ws {
  get rid() {
    return Ls(this, Ue, "f");
  }
  constructor(t) {
    Ue.set(this, void 0), Rs(this, Ue, t);
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
  [U]() {
    return {
      width: this.width,
      height: this.height
    };
  }
  toJSON() {
    return this[U]();
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
  [U]() {
    return {
      width: this.width,
      height: this.height
    };
  }
  toJSON() {
    return this[U]();
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
  [U]() {
    return {
      [`${this.size.type}`]: {
        width: this.size.width,
        height: this.size.height
      }
    };
  }
  toJSON() {
    return this[U]();
  }
}
class xn {
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
  [U]() {
    return {
      x: this.x,
      y: this.y
    };
  }
  toJSON() {
    return this[U]();
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
    return new xn(this.x / t, this.y / t);
  }
  [U]() {
    return {
      x: this.x,
      y: this.y
    };
  }
  toJSON() {
    return this[U]();
  }
}
class Ge {
  constructor(t) {
    this.position = t;
  }
  toLogical(t) {
    return this.position instanceof xn ? this.position : this.position.toLogical(t);
  }
  toPhysical(t) {
    return this.position instanceof X ? this.position : this.position.toPhysical(t);
  }
  [U]() {
    return {
      [`${this.position.type}`]: {
        x: this.position.x,
        y: this.position.y
      }
    };
  }
  toJSON() {
    return this[U]();
  }
}
var H;
(function(e) {
  e.WINDOW_RESIZED = "tauri://resize", e.WINDOW_MOVED = "tauri://move", e.WINDOW_CLOSE_REQUESTED = "tauri://close-requested", e.WINDOW_DESTROYED = "tauri://destroyed", e.WINDOW_FOCUS = "tauri://focus", e.WINDOW_BLUR = "tauri://blur", e.WINDOW_SCALE_FACTOR_CHANGED = "tauri://scale-change", e.WINDOW_THEME_CHANGED = "tauri://theme-changed", e.WINDOW_CREATED = "tauri://window-created", e.WEBVIEW_CREATED = "tauri://webview-created", e.DRAG_ENTER = "tauri://drag-enter", e.DRAG_OVER = "tauri://drag-over", e.DRAG_DROP = "tauri://drag-drop", e.DRAG_LEAVE = "tauri://drag-leave";
})(H || (H = {}));
async function Sn(e, t) {
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
    handler: Ds(t)
  }).then((l) => async () => Sn(e, l));
}
async function As(e, t, n) {
  return Ye(e, (s) => {
    Sn(e, s.id), t(s);
  }, n);
}
async function Fs(e, t) {
  await d("plugin:event|emit", {
    event: e,
    payload: t
  });
}
async function js(e, t, n) {
  await d("plugin:event|emit_to", {
    target: typeof e == "string" ? { kind: "AnyLabel", label: e } : e,
    event: t,
    payload: n
  });
}
class Re extends Ws {
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
class Bs {
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
function kn() {
  return new On(window.__TAURI_INTERNALS__.metadata.currentWindow.label, {
    // @ts-expect-error `skip` is not defined in the public API but it is handled by the constructor
    skip: !0
  });
}
async function ht() {
  return d("plugin:window|get_all_windows").then((e) => e.map((t) => new On(t, {
    // @ts-expect-error `skip` is not defined in the public API but it is handled by the constructor
    skip: !0
  })));
}
const ft = ["tauri://created", "tauri://error"];
class On {
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
    return kn();
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
    } : As(t, n, {
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
    return Fs(t, n);
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
    return js(t, n, s);
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
      const s = new Bs(n);
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
function Hs(e) {
  return e === null ? null : {
    name: e.name,
    scaleFactor: e.scaleFactor,
    position: new X(e.position),
    size: new le(e.size)
  };
}
async function Gs(e, t) {
  return d("plugin:window|monitor_from_point", {
    x: e,
    y: t
  }).then(Hs);
}
var Us = {
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
function Vs() {
  return "icon-" + ((1 + Math.random()) * 4294967296 | 0).toString(16).substring(1);
}
function qs(e, t, n) {
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
var Ks = Symbol("icon-context");
function St(e, t, n) {
  var s = {
    name: "icon-" + e,
    props: ["size", "strokeWidth", "strokeLinecap", "strokeLinejoin", "theme", "fill", "spin"],
    setup: function(l) {
      var r = Vs(), p = ae(Ks, Us);
      return function() {
        var g = l.size, f = l.strokeWidth, y = l.strokeLinecap, _ = l.strokeLinejoin, O = l.theme, P = l.fill, q = l.spin, h = qs(r, {
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
const Zs = St("close-small", !1, function(e) {
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
}), Ys = St("minus", !1, function(e) {
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
}), Xs = St("radar", !1, function(e) {
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
}), Mn = Symbol(), Ve = "el", Js = "is-", oe = (e, t, n, s, o) => {
  let l = `${e}-${t}`;
  return n && (l += `-${n}`), s && (l += `__${s}`), o && (l += `--${o}`), l;
}, Tn = Symbol("namespaceContextKey"), Qs = (e) => {
  const t = e || (be() ? ae(Tn, C(Ve)) : C(Ve));
  return m(() => u(t) || Ve);
}, kt = (e, t) => {
  const n = Qs(t);
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
      return h && x ? `${Js}${h}` : "";
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
const eo = Object.prototype.hasOwnProperty, Jt = (e, t) => eo.call(e, t), We = (e) => typeof e == "function", ce = (e) => typeof e == "string", In = (e) => e !== null && typeof e == "object";
var to = typeof global == "object" && global && global.Object === Object && global, no = typeof self == "object" && self && self.Object === Object && self, Ot = to || no || Function("return this")(), ke = Ot.Symbol, Pn = Object.prototype, so = Pn.hasOwnProperty, oo = Pn.toString, $e = ke ? ke.toStringTag : void 0;
function ao(e) {
  var t = so.call(e, $e), n = e[$e];
  try {
    e[$e] = void 0;
    var s = !0;
  } catch {
  }
  var o = oo.call(e);
  return s && (t ? e[$e] = n : delete e[$e]), o;
}
var io = Object.prototype, ro = io.toString;
function lo(e) {
  return ro.call(e);
}
var co = "[object Null]", uo = "[object Undefined]", Qt = ke ? ke.toStringTag : void 0;
function Nn(e) {
  return e == null ? e === void 0 ? uo : co : Qt && Qt in Object(e) ? ao(e) : lo(e);
}
function po(e) {
  return e != null && typeof e == "object";
}
var ho = "[object Symbol]";
function Mt(e) {
  return typeof e == "symbol" || po(e) && Nn(e) == ho;
}
function fo(e, t) {
  for (var n = -1, s = e == null ? 0 : e.length, o = Array(s); ++n < s; )
    o[n] = t(e[n], n, e);
  return o;
}
var Tt = Array.isArray, en = ke ? ke.prototype : void 0, tn = en ? en.toString : void 0;
function zn(e) {
  if (typeof e == "string")
    return e;
  if (Tt(e))
    return fo(e, zn) + "";
  if (Mt(e))
    return tn ? tn.call(e) : "";
  var t = e + "";
  return t == "0" && 1 / e == -1 / 0 ? "-0" : t;
}
function $n(e) {
  var t = typeof e;
  return e != null && (t == "object" || t == "function");
}
var go = "[object AsyncFunction]", vo = "[object Function]", yo = "[object GeneratorFunction]", mo = "[object Proxy]";
function wo(e) {
  if (!$n(e))
    return !1;
  var t = Nn(e);
  return t == vo || t == yo || t == go || t == mo;
}
var gt = Ot["__core-js_shared__"], nn = function() {
  var e = /[^.]+$/.exec(gt && gt.keys && gt.keys.IE_PROTO || "");
  return e ? "Symbol(src)_1." + e : "";
}();
function _o(e) {
  return !!nn && nn in e;
}
var bo = Function.prototype, Co = bo.toString;
function xo(e) {
  if (e != null) {
    try {
      return Co.call(e);
    } catch {
    }
    try {
      return e + "";
    } catch {
    }
  }
  return "";
}
var So = /[\\^$.*+?()[\]{}|]/g, ko = /^\[object .+?Constructor\]$/, Oo = Function.prototype, Mo = Object.prototype, To = Oo.toString, Io = Mo.hasOwnProperty, Po = RegExp(
  "^" + To.call(Io).replace(So, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$"
);
function No(e) {
  if (!$n(e) || _o(e))
    return !1;
  var t = wo(e) ? Po : ko;
  return t.test(xo(e));
}
function zo(e, t) {
  return e?.[t];
}
function En(e, t) {
  var n = zo(e, t);
  return No(n) ? n : void 0;
}
function $o(e, t) {
  return e === t || e !== e && t !== t;
}
var Eo = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/, Lo = /^\w*$/;
function Ro(e, t) {
  if (Tt(e))
    return !1;
  var n = typeof e;
  return n == "number" || n == "symbol" || n == "boolean" || e == null || Mt(e) ? !0 : Lo.test(e) || !Eo.test(e) || t != null && e in Object(t);
}
var Ae = En(Object, "create");
function Do() {
  this.__data__ = Ae ? Ae(null) : {}, this.size = 0;
}
function Wo(e) {
  var t = this.has(e) && delete this.__data__[e];
  return this.size -= t ? 1 : 0, t;
}
var Ao = "__lodash_hash_undefined__", Fo = Object.prototype, jo = Fo.hasOwnProperty;
function Bo(e) {
  var t = this.__data__;
  if (Ae) {
    var n = t[e];
    return n === Ao ? void 0 : n;
  }
  return jo.call(t, e) ? t[e] : void 0;
}
var Ho = Object.prototype, Go = Ho.hasOwnProperty;
function Uo(e) {
  var t = this.__data__;
  return Ae ? t[e] !== void 0 : Go.call(t, e);
}
var Vo = "__lodash_hash_undefined__";
function qo(e, t) {
  var n = this.__data__;
  return this.size += this.has(e) ? 0 : 1, n[e] = Ae && t === void 0 ? Vo : t, this;
}
function ue(e) {
  var t = -1, n = e == null ? 0 : e.length;
  for (this.clear(); ++t < n; ) {
    var s = e[t];
    this.set(s[0], s[1]);
  }
}
ue.prototype.clear = Do;
ue.prototype.delete = Wo;
ue.prototype.get = Bo;
ue.prototype.has = Uo;
ue.prototype.set = qo;
function Ko() {
  this.__data__ = [], this.size = 0;
}
function st(e, t) {
  for (var n = e.length; n--; )
    if ($o(e[n][0], t))
      return n;
  return -1;
}
var Zo = Array.prototype, Yo = Zo.splice;
function Xo(e) {
  var t = this.__data__, n = st(t, e);
  if (n < 0)
    return !1;
  var s = t.length - 1;
  return n == s ? t.pop() : Yo.call(t, n, 1), --this.size, !0;
}
function Jo(e) {
  var t = this.__data__, n = st(t, e);
  return n < 0 ? void 0 : t[n][1];
}
function Qo(e) {
  return st(this.__data__, e) > -1;
}
function ea(e, t) {
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
Te.prototype.clear = Ko;
Te.prototype.delete = Xo;
Te.prototype.get = Jo;
Te.prototype.has = Qo;
Te.prototype.set = ea;
var ta = En(Ot, "Map");
function na() {
  this.size = 0, this.__data__ = {
    hash: new ue(),
    map: new (ta || Te)(),
    string: new ue()
  };
}
function sa(e) {
  var t = typeof e;
  return t == "string" || t == "number" || t == "symbol" || t == "boolean" ? e !== "__proto__" : e === null;
}
function ot(e, t) {
  var n = e.__data__;
  return sa(t) ? n[typeof t == "string" ? "string" : "hash"] : n.map;
}
function oa(e) {
  var t = ot(this, e).delete(e);
  return this.size -= t ? 1 : 0, t;
}
function aa(e) {
  return ot(this, e).get(e);
}
function ia(e) {
  return ot(this, e).has(e);
}
function ra(e, t) {
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
pe.prototype.clear = na;
pe.prototype.delete = oa;
pe.prototype.get = aa;
pe.prototype.has = ia;
pe.prototype.set = ra;
var la = "Expected a function";
function It(e, t) {
  if (typeof e != "function" || t != null && typeof t != "function")
    throw new TypeError(la);
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
var ca = 500;
function ua(e) {
  var t = It(e, function(s) {
    return n.size === ca && n.clear(), s;
  }), n = t.cache;
  return t;
}
var da = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g, pa = /\\(\\)?/g, ha = ua(function(e) {
  var t = [];
  return e.charCodeAt(0) === 46 && t.push(""), e.replace(da, function(n, s, o, l) {
    t.push(o ? l.replace(pa, "$1") : s || n);
  }), t;
});
function fa(e) {
  return e == null ? "" : zn(e);
}
function ga(e, t) {
  return Tt(e) ? e : Ro(e, t) ? [e] : ha(fa(e));
}
function va(e) {
  if (typeof e == "string" || Mt(e))
    return e;
  var t = e + "";
  return t == "0" && 1 / e == -1 / 0 ? "-0" : t;
}
function ya(e, t) {
  t = ga(t, e);
  for (var n = 0, s = t.length; e != null && n < s; )
    e = e[va(t[n++])];
  return n && n == s ? e : void 0;
}
function ma(e, t, n) {
  var s = e == null ? void 0 : ya(e, t);
  return s === void 0 ? n : s;
}
function wa(e) {
  for (var t = -1, n = e == null ? 0 : e.length, s = {}; ++t < n; ) {
    var o = e[t];
    s[o[0]] = o[1];
  }
  return s;
}
const Ln = (e) => e === void 0, sn = (e) => typeof e == "boolean", de = (e) => typeof e == "number", wt = (e) => typeof Element > "u" ? !1 : e instanceof Element, _a = (e) => ce(e) ? !Number.isNaN(Number(e)) : !1;
var on;
const he = typeof window < "u", ba = (e) => typeof e == "string", Ca = () => {
};
he && ((on = window?.navigator) != null && on.userAgent) && /iP(ad|hone|od)/.test(window.navigator.userAgent);
function Pt(e) {
  return typeof e == "function" ? e() : u(e);
}
function xa(e) {
  return e;
}
function Nt(e) {
  return Os() ? (Ms(e), !0) : !1;
}
function Sa(e, t = !0) {
  be() ? nt(e) : t ? e() : we(e);
}
function Rn(e, t, n = {}) {
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
  return s && (o.value = !0, he && g()), Nt(p), {
    isPending: ks(o),
    start: g,
    stop: p
  };
}
function Dn(e) {
  var t;
  const n = Pt(e);
  return (t = n?.$el) != null ? t : n;
}
const Wn = he ? window : void 0;
function An(...e) {
  let t, n, s, o;
  if (ba(e[0]) || Array.isArray(e[0]) ? ([n, s, o] = e, t = Wn) : [t, n, s, o] = e, !t)
    return Ca;
  Array.isArray(n) || (n = [n]), Array.isArray(s) || (s = [s]);
  const l = [], r = () => {
    l.forEach((y) => y()), l.length = 0;
  }, p = (y, _, O, P) => (y.addEventListener(_, O, P), () => y.removeEventListener(_, O, P)), g = Ce(() => [Dn(t), Pt(o)], ([y, _]) => {
    r(), y && l.push(...n.flatMap((O) => s.map((P) => p(y, O, P, _))));
  }, { immediate: !0, flush: "post" }), f = () => {
    g(), r();
  };
  return Nt(f), f;
}
function ka(e, t = !1) {
  const n = C(), s = () => n.value = !!e();
  return s(), Sa(s, t), n;
}
const an = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {}, rn = "__vueuse_ssr_handlers__";
an[rn] = an[rn] || {};
var ln = Object.getOwnPropertySymbols, Oa = Object.prototype.hasOwnProperty, Ma = Object.prototype.propertyIsEnumerable, Ta = (e, t) => {
  var n = {};
  for (var s in e)
    Oa.call(e, s) && t.indexOf(s) < 0 && (n[s] = e[s]);
  if (e != null && ln)
    for (var s of ln(e))
      t.indexOf(s) < 0 && Ma.call(e, s) && (n[s] = e[s]);
  return n;
};
function Ia(e, t, n = {}) {
  const s = n, { window: o = Wn } = s, l = Ta(s, ["window"]);
  let r;
  const p = ka(() => o && "ResizeObserver" in o), g = () => {
    r && (r.disconnect(), r = void 0);
  }, f = Ce(() => Dn(e), (_) => {
    g(), p.value && o && _ && (r = new ResizeObserver(t), r.observe(_, l));
  }, { immediate: !0, flush: "post" }), y = () => {
    g(), f();
  };
  return Nt(y), {
    isSupported: p,
    stop: y
  };
}
var cn;
(function(e) {
  e.UP = "UP", e.RIGHT = "RIGHT", e.DOWN = "DOWN", e.LEFT = "LEFT", e.NONE = "NONE";
})(cn || (cn = {}));
var Pa = Object.defineProperty, un = Object.getOwnPropertySymbols, Na = Object.prototype.hasOwnProperty, za = Object.prototype.propertyIsEnumerable, dn = (e, t, n) => t in e ? Pa(e, t, { enumerable: !0, configurable: !0, writable: !0, value: n }) : e[t] = n, $a = (e, t) => {
  for (var n in t || (t = {}))
    Na.call(t, n) && dn(e, n, t[n]);
  if (un)
    for (var n of un(t))
      za.call(t, n) && dn(e, n, t[n]);
  return e;
};
const Ea = {
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
$a({
  linear: xa
}, Ea);
const pn = {
  current: 0
}, hn = C(0), Fn = 2e3, fn = Symbol("elZIndexContextKey"), jn = Symbol("zIndexContextKey"), La = (e) => {
  const t = be() ? ae(fn, pn) : pn, n = e || (be() ? ae(jn, void 0) : void 0), s = m(() => {
    const r = u(n);
    return de(r) ? r : Fn;
  }), o = m(() => s.value + hn.value), l = () => (t.current++, hn.value = t.current, o.value);
  return !he && ae(fn), {
    initialZIndex: s,
    currentZIndex: o,
    nextZIndex: l
  };
};
var Ra = {
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
const Da = (e) => (t, n) => Wa(t, n, u(e)), Wa = (e, t, n) => ma(n, e, e).replace(/\{(\w+)\}/g, (s, o) => {
  var l;
  return `${(l = t?.[o]) != null ? l : `{${o}}`}`;
}), Aa = (e) => {
  const t = m(() => u(e).name), n = Ts(e) ? e : C(e);
  return {
    lang: t,
    locale: n,
    t: Da(e)
  };
}, Bn = Symbol("localeContextKey"), Fa = (e) => {
  const t = e || ae(Bn, C());
  return Aa(m(() => t.value || Ra));
}, Hn = "__epPropKey", G = (e) => e, ja = (e) => In(e) && !!e[Hn], Gn = (e, t) => {
  if (!In(e) || ja(e))
    return e;
  const { values: n, required: s, default: o, type: l, validator: r } = e, g = {
    type: l,
    required: !!s,
    validator: n || r ? (f) => {
      let y = !1, _ = [];
      if (n && (_ = Array.from(n), Jt(e, "default") && _.push(o), y || (y = _.includes(f))), r && (y || (y = r(f))), !y && _.length > 0) {
        const O = [...new Set(_)].map((P) => JSON.stringify(P)).join(", ");
        Is(`Invalid prop: validation failed${t ? ` for prop "${t}"` : ""}. Expected one of [${O}], got value ${JSON.stringify(f)}.`);
      }
      return y;
    } : void 0,
    [Hn]: !0
  };
  return Jt(e, "default") && (g.default = o), g;
}, Ie = (e) => wa(Object.entries(e).map(([t, n]) => [
  t,
  Gn(n, t)
])), Ba = ["", "default", "small", "large"], Ha = Gn({
  type: String,
  values: Ba,
  required: !1
}), Ga = Symbol("size"), Ua = Symbol("emptyValuesContextKey"), Va = Ie({
  emptyValues: Array,
  valueOnClear: {
    type: [String, Number, Boolean, Function],
    default: void 0,
    validator: (e) => We(e) ? !e() : !e
  }
}), gn = (e) => Object.keys(e), Je = C();
function Un(e, t = void 0) {
  return be() ? ae(Mn, Je) : Je;
}
function Vn(e, t) {
  const n = Un(), s = kt(e, m(() => {
    var p;
    return ((p = n.value) == null ? void 0 : p.namespace) || Ve;
  })), o = Fa(m(() => {
    var p;
    return (p = n.value) == null ? void 0 : p.locale;
  })), l = La(m(() => {
    var p;
    return ((p = n.value) == null ? void 0 : p.zIndex) || Fn;
  })), r = m(() => {
    var p;
    return u(t) || ((p = n.value) == null ? void 0 : p.size) || "";
  });
  return qn(m(() => u(n) || {})), {
    ns: s,
    locale: o,
    zIndex: l,
    size: r
  };
}
const qn = (e, t, n = !1) => {
  var s;
  const o = !!be(), l = o ? Un() : void 0, r = (s = void 0) != null ? s : o ? Ps : void 0;
  if (!r)
    return;
  const p = m(() => {
    const g = u(e);
    return l?.value ? qa(l.value, g) : g;
  });
  return r(Mn, p), r(Bn, m(() => p.value.locale)), r(Tn, m(() => p.value.namespace)), r(jn, m(() => p.value.zIndex)), r(Ga, {
    size: m(() => p.value.size || "")
  }), r(Ua, m(() => ({
    emptyValues: p.value.emptyValues,
    valueOnClear: p.value.valueOnClear
  }))), (n || !Je.value) && (Je.value = p.value), p;
}, qa = (e, t) => {
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
  if (de(e) || _a(e))
    return `${e}${t}`;
  if (ce(e))
    return e;
}
const Kn = (e, t) => (e.install = (n) => {
  for (const s of [e, ...Object.values({})])
    n.component(s.name, s);
}, e), Zn = (e, t) => (e.install = (n) => {
  e._context = n._context, n.config.globalProperties[t] = e;
}, e), Ka = Ie({
  size: {
    type: G([Number, String])
  },
  color: {
    type: String
  }
}), Za = j({
  name: "ElIcon",
  inheritAttrs: !1
}), Ya = /* @__PURE__ */ j({
  ...Za,
  props: Ka,
  setup(e) {
    const t = e, n = kt("icon"), s = m(() => {
      const { size: o, color: l } = t;
      return !o && !l ? {} : {
        fontSize: Ln(o) ? void 0 : _t(o),
        "--color": l
      };
    });
    return (o, l) => (S(), I("i", Ns({
      class: u(n).b(),
      style: u(s)
    }, o.$attrs), [
      xe(o.$slots, "default")
    ], 16));
  }
});
var Xa = /* @__PURE__ */ at(Ya, [["__file", "icon.vue"]]);
const Qe = Kn(Xa);
/*! Element Plus Icons Vue v2.3.1 */
var Ja = /* @__PURE__ */ j({
  name: "CircleCloseFilled",
  __name: "circle-close-filled",
  setup(e) {
    return (t, n) => (S(), I("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 1024 1024"
    }, [
      c("path", {
        fill: "currentColor",
        d: "M512 64a448 448 0 1 1 0 896 448 448 0 0 1 0-896m0 393.664L407.936 353.6a38.4 38.4 0 1 0-54.336 54.336L457.664 512 353.6 616.064a38.4 38.4 0 1 0 54.336 54.336L512 566.336 616.064 670.4a38.4 38.4 0 1 0 54.336-54.336L566.336 512 670.4 407.936a38.4 38.4 0 1 0-54.336-54.336z"
      })
    ]));
  }
}), Qa = Ja, ei = /* @__PURE__ */ j({
  name: "Close",
  __name: "close",
  setup(e) {
    return (t, n) => (S(), I("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 1024 1024"
    }, [
      c("path", {
        fill: "currentColor",
        d: "M764.288 214.592 512 466.88 259.712 214.592a31.936 31.936 0 0 0-45.12 45.12L466.752 512 214.528 764.224a31.936 31.936 0 1 0 45.12 45.184L512 557.184l252.288 252.288a31.936 31.936 0 0 0 45.12-45.12L557.12 512.064l252.288-252.352a31.936 31.936 0 1 0-45.12-45.184z"
      })
    ]));
  }
}), Yn = ei, ti = /* @__PURE__ */ j({
  name: "InfoFilled",
  __name: "info-filled",
  setup(e) {
    return (t, n) => (S(), I("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 1024 1024"
    }, [
      c("path", {
        fill: "currentColor",
        d: "M512 64a448 448 0 1 1 0 896.064A448 448 0 0 1 512 64m67.2 275.072c33.28 0 60.288-23.104 60.288-57.344s-27.072-57.344-60.288-57.344c-33.28 0-60.16 23.104-60.16 57.344s26.88 57.344 60.16 57.344M590.912 699.2c0-6.848 2.368-24.64 1.024-34.752l-52.608 60.544c-10.88 11.456-24.512 19.392-30.912 17.28a12.992 12.992 0 0 1-8.256-14.72l87.68-276.992c7.168-35.136-12.544-67.2-54.336-71.296-44.096 0-108.992 44.736-148.48 101.504 0 6.784-1.28 23.68.064 33.792l52.544-60.608c10.88-11.328 23.552-19.328 29.952-17.152a12.8 12.8 0 0 1 7.808 16.128L388.48 728.576c-10.048 32.256 8.96 63.872 55.04 71.04 67.84 0 107.904-43.648 147.456-100.416z"
      })
    ]));
  }
}), ni = ti, si = /* @__PURE__ */ j({
  name: "SuccessFilled",
  __name: "success-filled",
  setup(e) {
    return (t, n) => (S(), I("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 1024 1024"
    }, [
      c("path", {
        fill: "currentColor",
        d: "M512 64a448 448 0 1 1 0 896 448 448 0 0 1 0-896m-55.808 536.384-99.52-99.584a38.4 38.4 0 1 0-54.336 54.336l126.72 126.72a38.272 38.272 0 0 0 54.336 0l262.4-262.464a38.4 38.4 0 1 0-54.272-54.336z"
      })
    ]));
  }
}), oi = si, ai = /* @__PURE__ */ j({
  name: "WarningFilled",
  __name: "warning-filled",
  setup(e) {
    return (t, n) => (S(), I("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 1024 1024"
    }, [
      c("path", {
        fill: "currentColor",
        d: "M512 64a448 448 0 1 1 0 896 448 448 0 0 1 0-896m0 192a58.432 58.432 0 0 0-58.24 63.744l23.36 256.384a35.072 35.072 0 0 0 69.76 0l23.296-256.384A58.432 58.432 0 0 0 512 256m0 512a51.2 51.2 0 1 0 0-102.4 51.2 51.2 0 0 0 0 102.4"
      })
    ]));
  }
}), ii = ai;
const Xn = G([
  String,
  Object,
  Function
]), ri = {
  Close: Yn
}, li = {
  Close: Yn
}, et = {
  success: oi,
  warning: ii,
  error: Qa,
  info: ni
}, ci = (e) => e, qe = {
  esc: "Escape",
  delete: "Delete",
  backspace: "Backspace"
}, ui = Ie({
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
}), di = j({
  name: "ElBadge"
}), pi = /* @__PURE__ */ j({
  ...di,
  props: ui,
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
      class: $(u(s).b())
    }, [
      xe(r.$slots, "default"),
      T(Ct, {
        name: `${u(s).namespace.value}-zoom-in-center`,
        persisted: ""
      }, {
        default: ie(() => [
          re(c("sup", {
            class: $([
              u(s).e("content"),
              u(s).em("content", r.type),
              u(s).is("fixed", !!r.$slots.default),
              u(s).is("dot", r.isDot),
              u(s).is("hide-zero", !r.showZero && n.value === 0),
              r.badgeClass
            ]),
            style: Se(u(l))
          }, [
            xe(r.$slots, "content", { value: u(o) }, () => [
              zs(D(u(o)), 1)
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
var hi = /* @__PURE__ */ at(pi, [["__file", "badge.vue"]]);
const fi = Kn(hi), gi = Ie({
  a11y: {
    type: Boolean,
    default: !0
  },
  locale: {
    type: G(Object)
  },
  size: Ha,
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
  ...Va
}), Z = {};
j({
  name: "ElConfigProvider",
  props: gi,
  setup(e, { slots: t }) {
    Ce(() => e.message, (s) => {
      Object.assign(Z, s ?? {});
    }, { immediate: !0, deep: !0 });
    const n = qn(e);
    return () => xe(t, "default", { config: n?.value });
  }
});
const Jn = ["success", "info", "warning", "error"], R = ci({
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
}), vi = Ie({
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
    type: Xn,
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
    values: Jn,
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
}), yi = {
  destroy: () => !0
}, Y = $s([]), mi = (e) => {
  const t = Y.findIndex((o) => o.id === e), n = Y[t];
  let s;
  return t > 0 && (s = Y[t - 1]), { current: n, prev: s };
}, wi = (e) => {
  const { prev: t } = mi(e);
  return t ? t.vm.exposed.bottom.value : 0;
}, _i = (e, t) => Y.findIndex((s) => s.id === e) > 0 ? 16 : t, bi = j({
  name: "ElMessage"
}), Ci = /* @__PURE__ */ j({
  ...bi,
  props: vi,
  emits: yi,
  setup(e, { expose: t }) {
    const n = e, { Close: s } = li, { ns: o, zIndex: l } = Vn("message"), { currentZIndex: r, nextZIndex: p } = l, g = C(), f = C(!1), y = C(0);
    let _;
    const O = m(() => n.type ? n.type === "error" ? "danger" : n.type : "info"), P = m(() => {
      const k = n.type;
      return { [o.bm("icon", k)]: k && et[k] };
    }), q = m(() => n.icon || et[n.type] || ""), h = m(() => wi(n.id)), v = m(() => _i(n.id, n.offset) + h.value), x = m(() => y.value + v.value), N = m(() => ({
      top: `${v.value}px`,
      zIndex: r.value
    }));
    function b() {
      n.duration !== 0 && ({ stop: _ } = Rn(() => {
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
    }), An(document, "keydown", fe), Ia(g, () => {
      y.value = g.value.getBoundingClientRect().height;
    }), t({
      visible: f,
      bottom: x,
      close: W
    }), (k, zt) => (S(), J(Ct, {
      name: u(o).b("fade"),
      onBeforeLeave: k.onClose,
      onAfterLeave: ($t) => k.$emit("destroy"),
      persisted: ""
    }, {
      default: ie(() => [
        re(c("div", {
          id: k.id,
          ref_key: "messageRef",
          ref: g,
          class: $([
            u(o).b(),
            { [u(o).m(k.type)]: k.type },
            u(o).is("center", k.center),
            u(o).is("closable", k.showClose),
            u(o).is("plain", k.plain),
            k.customClass
          ]),
          style: Se(u(N)),
          role: "alert",
          onMouseenter: te,
          onMouseleave: b
        }, [
          k.repeatNum > 1 ? (S(), J(u(fi), {
            key: 0,
            value: k.repeatNum,
            type: u(O),
            class: $(u(o).e("badge"))
          }, null, 8, ["value", "type", "class"])) : Q("v-if", !0),
          u(q) ? (S(), J(u(Qe), {
            key: 1,
            class: $([u(o).e("icon"), u(P)])
          }, {
            default: ie(() => [
              (S(), J(bn(u(q))))
            ]),
            _: 1
          }, 8, ["class"])) : Q("v-if", !0),
          xe(k.$slots, "default", {}, () => [
            k.dangerouslyUseHTMLString ? (S(), I(_e, { key: 1 }, [
              Q(" Caution here, message could've been compromised, never use user's input as message "),
              c("p", {
                class: $(u(o).e("content")),
                innerHTML: k.message
              }, null, 10, ["innerHTML"])
            ], 2112)) : (S(), I("p", {
              key: 0,
              class: $(u(o).e("content"))
            }, D(k.message), 3))
          ]),
          k.showClose ? (S(), J(u(Qe), {
            key: 2,
            class: $(u(o).e("closeBtn")),
            onClick: Le(W, ["stop"])
          }, {
            default: ie(() => [
              T(u(s))
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
var xi = /* @__PURE__ */ at(Ci, [["__file", "message.vue"]]);
let Si = 1;
const Qn = (e) => {
  const t = !e || ce(e) || De(e) || We(e) ? { message: e } : e, n = {
    ...R,
    ...t
  };
  if (!n.appendTo)
    n.appendTo = document.body;
  else if (ce(n.appendTo)) {
    let s = document.querySelector(n.appendTo);
    wt(s) || (s = document.body), n.appendTo = s;
  }
  return sn(Z.grouping) && !n.grouping && (n.grouping = Z.grouping), de(Z.duration) && n.duration === 3e3 && (n.duration = Z.duration), de(Z.offset) && n.offset === 16 && (n.offset = Z.offset), sn(Z.showClose) && !n.showClose && (n.showClose = Z.showClose), n;
}, ki = (e) => {
  const t = Y.indexOf(e);
  if (t === -1)
    return;
  Y.splice(t, 1);
  const { handler: n } = e;
  n.close();
}, Oi = ({ appendTo: e, ...t }, n) => {
  const s = `message_${Si++}`, o = t.onClose, l = document.createElement("div"), r = {
    ...t,
    id: s,
    onClose: () => {
      o?.(), ki(y);
    },
    onDestroy: () => {
      Ze(null, l);
    }
  }, p = T(xi, r, We(r.message) || De(r.message) ? {
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
  const n = Qn(e);
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
  const s = Oi(n, t);
  return Y.push(s), s.handler;
};
Jn.forEach((e) => {
  Oe[e] = (t = {}, n) => {
    const s = Qn(t);
    return Oe({ ...s, type: e }, n);
  };
});
function Mi(e) {
  for (const t of Y)
    (!e || e === t.props.type) && t.handler.close();
}
Oe.closeAll = Mi;
Oe._context = null;
const Ti = Zn(Oe, "$message"), es = [
  "success",
  "info",
  "warning",
  "error"
], Ii = Ie({
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
    type: Xn
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
    values: [...es, ""],
    default: ""
  },
  zIndex: Number
}), Pi = {
  destroy: () => !0
}, Ni = j({
  name: "ElNotification"
}), zi = /* @__PURE__ */ j({
  ...Ni,
  props: Ii,
  emits: Pi,
  setup(e, { expose: t }) {
    const n = e, { ns: s, zIndex: o } = Vn("notification"), { nextZIndex: l, currentZIndex: r } = o, { Close: p } = ri, g = C(!1);
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
      n.duration > 0 && ({ stop: f } = Rn(() => {
        g.value && x();
      }, n.duration));
    }
    function v() {
      f?.();
    }
    function x() {
      g.value = !1;
    }
    function N({ code: b }) {
      b === qe.delete || b === qe.backspace ? v() : b === qe.esc ? g.value && x() : h();
    }
    return nt(() => {
      h(), l(), g.value = !0;
    }), An(document, "keydown", N), t({
      visible: g,
      close: x
    }), (b, te) => (S(), J(Ct, {
      name: u(s).b("fade"),
      onBeforeLeave: b.onClose,
      onAfterLeave: (W) => b.$emit("destroy"),
      persisted: ""
    }, {
      default: ie(() => [
        re(c("div", {
          id: b.id,
          class: $([u(s).b(), b.customClass, u(O)]),
          style: Se(u(q)),
          role: "alert",
          onMouseenter: v,
          onMouseleave: h,
          onClick: b.onClick
        }, [
          u(_) ? (S(), J(u(Qe), {
            key: 0,
            class: $([u(s).e("icon"), u(y)])
          }, {
            default: ie(() => [
              (S(), J(bn(u(_))))
            ]),
            _: 1
          }, 8, ["class"])) : Q("v-if", !0),
          c("div", {
            class: $(u(s).e("group"))
          }, [
            c("h2", {
              class: $(u(s).e("title")),
              textContent: D(b.title)
            }, null, 10, ["textContent"]),
            re(c("div", {
              class: $(u(s).e("content")),
              style: Se(b.title ? void 0 : { margin: 0 })
            }, [
              xe(b.$slots, "default", {}, () => [
                b.dangerouslyUseHTMLString ? (S(), I(_e, { key: 1 }, [
                  Q(" Caution here, message could've been compromised, never use user's input as message "),
                  c("p", { innerHTML: b.message }, null, 8, ["innerHTML"])
                ], 2112)) : (S(), I("p", { key: 0 }, D(b.message), 1))
              ])
            ], 6), [
              [Ke, b.message]
            ]),
            b.showClose ? (S(), J(u(Qe), {
              key: 0,
              class: $(u(s).e("closeBtn")),
              onClick: Le(x, ["stop"])
            }, {
              default: ie(() => [
                T(u(p))
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
var $i = /* @__PURE__ */ at(zi, [["__file", "notification.vue"]]);
const tt = {
  "top-left": [],
  "top-right": [],
  "bottom-left": [],
  "bottom-right": []
}, bt = 16;
let Ei = 1;
const Me = function(e = {}, t) {
  if (!he)
    return { close: () => {
    } };
  (ce(e) || De(e)) && (e = { message: e });
  const n = e.position || "top-right";
  let s = e.offset || 0;
  tt[n].forEach(({ vm: y }) => {
    var _;
    s += (((_ = y.el) == null ? void 0 : _.offsetHeight) || 0) + bt;
  }), s += bt;
  const o = `notification_${Ei++}`, l = e.onClose, r = {
    ...e,
    offset: s,
    id: o,
    onClose: () => {
      Li(o, n, l);
    }
  };
  let p = document.body;
  wt(e.appendTo) ? p = e.appendTo : ce(e.appendTo) && (p = document.querySelector(e.appendTo)), wt(p) || (p = document.body);
  const g = document.createElement("div"), f = T($i, r, We(r.message) ? r.message : De(r.message) ? () => r.message : null);
  return f.appContext = Ln(t) ? Me._context : t, f.props.onDestroy = () => {
    Ze(null, g);
  }, Ze(f, g), tt[n].push({ vm: f }), p.appendChild(g.firstElementChild), {
    close: () => {
      f.component.exposed.visible.value = !1;
    }
  };
};
es.forEach((e) => {
  Me[e] = (t = {}, n) => ((ce(t) || De(t)) && (t = {
    message: t
  }), Me({ ...t, type: e }, n));
});
function Li(e, t, n) {
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
function Ri() {
  for (const e of Object.values(tt))
    e.forEach(({ vm: t }) => {
      t.component.exposed.visible.value = !1;
    });
}
Me.closeAll = Ri;
Me._context = null;
const Di = Zn(Me, "$notify"), vt = {
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
    s === "center" ? Ti({
      message: t,
      type: n,
      duration: o,
      showClose: l,
      grouping: !0
    }) : Di({
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
}, yt = "[screen-recorder]", Wi = (e) => {
  if (e)
    return JSON.parse(JSON.stringify(e));
}, V = async (e, t) => {
  const n = performance.now(), s = Wi(t);
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
}, Ai = () => V("screen_recorder_get_ffmpeg_status"), ye = (e) => V("screen_recorder_set_capture_excluded", { excluded: e }), Ee = (e) => V("screen_recorder_set_passthrough_region", { region: e }), Fi = () => V("screen_recorder_pick_target_window"), ji = () => V("screen_recorder_close_window"), Bi = (e, t) => V("screen_recorder_start_recording", {
  region: e,
  fps: t.fps,
  quality: t.quality,
  audio: t.format === "mp4"
}), Hi = () => V("screen_recorder_pause_recording"), Gi = (e, t) => V("screen_recorder_resume_recording", {
  region: e,
  fps: t.fps,
  quality: t.quality,
  audio: t.format === "mp4"
}), Ui = () => V("screen_recorder_stop_recording"), Vi = () => V("screen_recorder_cancel_recording"), qi = () => V("screen_recorder_cancel_export"), Ki = (e, t) => V("screen_recorder_export_recording", {
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
}), L = "[screen-recorder]";
function Zi() {
  const e = C("selecting"), t = C(vn()), n = C(null), s = C(null), o = C(""), l = C(null), r = C(0), p = C(0), g = C(null), f = () => {
    p.value = e.value === "recording" && l.value !== null ? r.value + Date.now() - l.value : r.value;
  }, y = () => {
    g.value !== null && (window.clearInterval(g.value), g.value = null);
  }, _ = () => {
    y(), f(), g.value = window.setInterval(() => {
      f();
    }, 250);
  }, O = async () => (console.info(`${L} refresh ffmpeg status`), n.value = await Ai(), console.info(`${L} ffmpeg status`, n.value), n.value), P = async (W) => {
    o.value = "", s.value = null, console.info(`${L} begin requested`, { region: W, settings: t.value });
    const fe = n.value ?? await O();
    if (!fe.available)
      throw new Error(fe.message || "FFmpeg unavailable");
    await Bi(W, t.value), e.value = "recording", r.value = 0, p.value = 0, l.value = Date.now(), _(), console.info(`${L} recording started`, { status: e.value });
  }, q = async () => {
    e.value === "recording" && (console.info(`${L} pause requested`, { elapsedMs: p.value }), f(), r.value = p.value, l.value = null, y(), await Hi(), e.value = "paused", console.info(`${L} recording paused`, { accumulatedMs: r.value }));
  }, h = async (W) => {
    e.value === "paused" && (console.info(`${L} resume requested`, { region: W, settings: t.value }), await Gi(W, t.value), e.value = "recording", l.value = Date.now(), _(), console.info(`${L} recording resumed`));
  }, v = async () => {
    e.value !== "recording" && e.value !== "paused" || (console.info(`${L} stop requested`, { status: e.value, elapsedMs: p.value }), f(), r.value = p.value, l.value = null, y(), await Ui(), e.value = "exporting", console.info(`${L} recording stopped`, { accumulatedMs: r.value }));
  }, x = async () => {
    console.info(`${L} export requested`, { settings: t.value }), e.value = "exporting";
    try {
      return s.value = await Ki(t.value, Math.round(p.value)), e.value = "completed", console.info(`${L} export completed`, s.value), s.value;
    } catch (W) {
      throw e.value = "ready", s.value = null, W;
    }
  }, N = async () => {
    console.info(`${L} cancel export requested`, { status: e.value }), await qi(), e.value = "ready", s.value = null;
  }, b = async () => {
    console.info(`${L} cancel requested`, { status: e.value, elapsedMs: p.value }), y(), await Vi(), e.value = "selecting", l.value = null, r.value = 0, p.value = 0, s.value = null, console.info(`${L} canceled`);
  }, te = () => {
    console.info(`${L} reset session`), e.value = "selecting", l.value = null, r.value = 0, p.value = 0, s.value = null, o.value = "", t.value = vn();
  };
  return Cn(() => {
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
    cancelExport: N,
    cancel: b,
    reset: te
  };
}
const Yi = { class: "screen-recorder" }, Xi = ["onMousedown"], Ji = { class: "window-title" }, Qi = { class: "capture-viewport" }, er = { class: "capture-frame" }, tr = { class: "control-group control-group--tools" }, nr = { class: "tool-pill" }, sr = ["title", "disabled"], or = { class: "select-field" }, ar = ["disabled"], ir = ["disabled"], rr = ["disabled"], lr = { value: "high" }, cr = { value: "standard" }, ur = { value: "small" }, dr = { class: "dimension-group optional-size" }, pr = { class: "dimension" }, hr = ["value"], fr = { class: "dimension" }, gr = ["value"], vr = { class: "control-group control-group--actions" }, yr = { class: "time" }, mr = { class: "button-label" }, wr = { class: "button-label" }, _r = ["title"], br = { class: "export-progress__meta" }, Cr = { class: "export-progress__track" }, xr = ["title"], Sr = ["disabled"], kr = { class: "record-label" }, Or = {
  key: 0,
  class: "warning"
}, K = "[screen-recorder]", me = 80, yn = 420, mn = 260, Mr = 8, wn = 1, _n = 0, Tr = 15, Ir = 10, Pr = /* @__PURE__ */ j({
  __name: "index",
  setup(e) {
    const t = kn(), n = C(null), s = C(null), o = C(null), l = C({ width: 0, height: 0 }), r = C(!1), p = C(0), g = C(!1), f = C(null);
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
      result: N,
      elapsedMs: b,
      refreshFfmpegStatus: te,
      begin: W,
      pause: fe,
      resume: k,
      stop: zt,
      exportFile: $t,
      cancelExport: Et,
      cancel: ts,
      reset: ns
    } = Zi(), Lt = C(!1), Pe = m(() => h.value === "recording" || h.value === "paused" || h.value === "exporting"), it = m(() => v.value.audio && v.value.format === "mp4"), Ne = m(() => it.value && h.value === "recording"), ss = m(() => {
      const a = Ne.value && !g.value ? p.value : 0, i = (w, M) => Math.max(0.18, Math.min(1, w + a * M)).toFixed(3);
      return {
        "--bar-1": i(0.28, 0.64),
        "--bar-2": i(0.42, 0.78),
        "--bar-3": i(0.34, 0.94),
        "--bar-4": i(0.22, 0.72)
      };
    }), os = m(() => {
      if (v.value.format === "gif")
        return "GIF 不支持音频";
      if (g.value && v.value.audio)
        return "音频已开启；实时音量动画不可用不影响导出系统声音";
      if (N.value?.audioDevice)
        return `已录制音频：${N.value.audioDevice}`;
      if (N.value && !N.value.hasAudio)
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
    }), as = m(() => {
      const a = f.value;
      return a?.totalFrames ? `${rt.value} (${a.currentFrame}/${a.totalFrames})` : rt.value;
    }), is = m(() => {
      const a = Math.floor(b.value / 1e3), i = Math.floor(a / 60).toString().padStart(2, "0"), w = (a % 60).toString().padStart(2, "0");
      return `${i}:${w}`;
    }), ge = async (a) => {
      try {
        await a();
      } catch (i) {
        console.error(`${K} action failed`, i), Lt.value || vt.msg(i?.message || String(i), "error");
      }
    }, Dt = (a) => Math.max(2, Math.floor(Math.round(a) / 2) * 2), Wt = (a) => Math.max(1, Math.round(a)), lt = async () => {
      const a = n.value;
      if (!a)
        throw new Error("录制视口尚未准备好");
      const i = a.getBoundingClientRect(), w = await t.scaleFactor(), M = await t.innerPosition(), z = Wt(i.width * w), A = Wt(i.height * w);
      if (z < me || A < me)
        throw new Error("录制区域太小，请放大录制窗口");
      const F = {
        x: i.left,
        y: i.top,
        width: z / w,
        height: A / w,
        screenX: Math.round(M.x + i.left * w),
        screenY: Math.round(M.y + i.top * w),
        physicalWidth: z,
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
        }, await Ee({
          x: Math.round(a.x * a.scale),
          y: Math.round(a.y * a.scale),
          width: a.physicalWidth,
          height: a.physicalHeight
        }).catch(() => {
        });
      } catch {
        l.value = { width: 0, height: 0 }, await Ee(null).catch(() => {
        });
      }
    }, Fe = async () => {
      await Ee(null).catch(() => {
      });
    }, rs = () => {
      r.value = !1;
    }, Ft = () => {
      window.setTimeout(() => {
        B();
      }, 120);
    }, je = () => new Promise((a) => {
      requestAnimationFrame(() => requestAnimationFrame(() => a()));
    }), jt = async () => {
      document.documentElement.classList.add("screen-recorder-repaint"), await je(), document.documentElement.classList.remove("screen-recorder-repaint"), await je();
    }, ls = async () => {
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
      const w = Math.min(a.width, i.width), M = Math.min(a.height, i.height), z = i.x + i.width - w, A = i.y + i.height - M;
      return {
        x: Math.min(Math.max(a.x, i.x), z),
        y: Math.min(Math.max(a.y, i.y), A),
        width: w,
        height: M
      };
    }, cs = (a, i, w) => {
      if (!i) return !1;
      const M = Math.max(8, Math.round(8 * w)), z = i.x + i.width, A = i.y + i.height, F = a.screenX + a.physicalWidth, E = a.screenY + a.physicalHeight;
      return a.screenX <= i.x + M && a.screenY <= i.y + M && F >= z - M && E >= A - M;
    }, us = (a, i, w) => {
      if (!w) return a;
      const M = Math.round(Tr * i), z = Math.round(Ir * i);
      return {
        ...a,
        physicalWidth: Math.max(me, a.physicalWidth - M),
        physicalHeight: Math.max(me, a.physicalHeight - z)
      };
    }, Ht = async (a) => {
      await t.setSize(new le(Math.round(a.width), Math.round(a.height))), await t.setPosition(new X(Math.round(a.x), Math.round(a.y))), await je();
    }, ct = async () => {
      const [a, i] = await Promise.all([
        lt(),
        ls()
      ]);
      return { actualRegion: a, currentFrame: i };
    }, ds = async (a, i, w) => {
      const { actualRegion: M, currentFrame: z } = await ct(), A = M.screenX - z.x, F = M.screenY - z.y, E = Math.max(0, z.width - M.physicalWidth), He = Math.max(0, z.height - M.physicalHeight);
      return {
        x: a.screenX - A,
        y: a.screenY - F,
        width: Math.max(i, a.physicalWidth + E),
        height: Math.max(w, a.physicalHeight + He)
      };
    }, Gt = async () => {
      O?.(), O = null, p.value = 0;
    }, Be = async () => {
      if (!(!it.value || O))
        try {
          console.info(`${K} backend audio meter listening`), O = await Ye("screen_recorder_audio_level", (a) => {
            if (!Ne.value) {
              p.value = 0;
              return;
            }
            const i = Math.max(0, Math.min(1, Number(a.payload?.level ?? 0)));
            p.value = p.value * 0.38 + i * 0.62;
          }), g.value = !1;
        } catch (a) {
          console.error(`${K} audio meter failed`, a), g.value = !0;
        }
    }, ps = async (a) => {
      a.button !== 0 || Pe.value || (await Fe(), await t.startDragging().catch((i) => {
        vt.msg(i?.message || String(i), "error");
      }), Ft());
    }, hs = async (a) => {
      Pe.value || (rs(), await Fe(), await t.startResizeDragging(a).catch((i) => {
        vt.msg(i?.message || String(i), "error");
      }), Ft());
    }, fs = () => ge(async () => {
      console.info(`${K} handle start`), f.value = null, await Be(), await ye(!0).catch(() => {
      }), await B(), await W(await At());
    }), gs = () => ge(async () => {
      console.info(`${K} handle pause`), await fe();
    }), vs = () => ge(async () => {
      console.info(`${K} handle resume`), await k(await At());
    }), ys = () => ge(async () => {
      console.info(`${K} handle stop/export`), f.value = {
        stage: "encode",
        message: v.value.format === "gif" ? "准备生成 GIF 帧" : "准备导出 MP4",
        progress: 0.01,
        currentFrame: 0
      }, await zt(), p.value = 0, await $t(), await B(), await ye(!1).catch(() => {
      });
    }), ms = () => ge(async () => {
      console.info(`${K} handle cancel export`), await Et(), f.value = null, await B();
    }), ws = () => {
      const a = { ...v.value };
      Fe(), ns(), v.value = a, h.value = "ready", N.value = null, f.value = null, ye(!0).catch(() => {
      }), we(B), Be();
    }, _s = async (a) => {
      const i = await Gs(a.screenX, a.screenY), w = i?.scaleFactor || await t.scaleFactor();
      r.value = !0, await we(), await je();
      const M = Math.round(yn * w), z = Math.round(mn * w), A = i ? {
        x: i.position.x,
        y: i.position.y,
        width: i.size.width,
        height: i.size.height
      } : null, F = cs(a, A, w), E = us(a, w, !F), He = await ds(
        E,
        M,
        z
      );
      let ut = !1;
      try {
        await t.hide(), ut = !0;
      } catch {
        ut = !1;
      }
      try {
        await Ht(
          A && F ? Bt(He, A) : He
        ), await we();
        const dt = async () => {
          const { actualRegion: se, currentFrame: ze } = await ct(), ee = {
            x: E.screenX - se.screenX,
            y: E.screenY - se.screenY,
            width: E.physicalWidth - se.physicalWidth,
            height: E.physicalHeight - se.physicalHeight
          };
          if (Math.abs(ee.x) <= _n && Math.abs(ee.y) <= _n && Math.abs(ee.width) <= wn && Math.abs(ee.height) <= wn)
            return !0;
          const qt = {
            x: ze.x + ee.x,
            y: ze.y + ee.y,
            width: Math.max(M, ze.width + ee.width),
            height: Math.max(z, ze.height + ee.height)
          };
          return await Ht(
            A && F ? Bt(qt, A) : qt
          ), !1;
        };
        for (let se = 0; se < Mr && !await dt(); se += 1)
          ;
        const { actualRegion: ne } = await ct();
        console.info(`${K} snap result`, {
          target: a,
          snapTarget: E,
          actualRegion: ne,
          residual: {
            left: ne.screenX - E.screenX,
            top: ne.screenY - E.screenY,
            right: ne.screenX + ne.physicalWidth - (E.screenX + E.physicalWidth),
            bottom: ne.screenY + ne.physicalHeight - (E.screenY + E.physicalHeight)
          },
          monitorCovering: F
        });
      } catch (dt) {
        console.warn(`${K} snap correction skipped`, dt);
      } finally {
        await B(), await jt(), ut && (await t.show().catch(() => {
        }), await t.setFocus().catch(() => {
        }), await jt(), await B());
      }
    }, bs = () => ge(async () => {
      await Fe();
      const a = await Fi();
      await _s(a);
    }), Cs = async () => {
      await t.minimize();
    }, Ut = async () => {
      Lt.value = !0;
      try {
        h.value === "exporting" ? await Et().catch(() => {
        }) : await ts(), await Ee(null).catch(() => {
        }), await ye(!1).catch(() => {
        });
      } catch {
      }
      await ji();
    }, xs = async () => {
      N.value && (await B(), await d("open_file_with_default_app", { filePath: N.value.path }));
    }, Ss = async () => {
      N.value && (await B(), await d("show_file_in_folder", { filePath: N.value.path }));
    }, Vt = (a) => {
      a.key === "Escape" && (a.preventDefault(), Ut());
    };
    return nt(async () => {
      h.value = "ready", await t.setMinSize(new xt(yn, mn)).catch(() => {
      }), await ye(!0).catch(() => {
      }), await te().catch(() => {
      }), await we(), await B(), await Be(), await we(), await t.emit("screen_recorder_ready"), P = await Ye("screen_recorder_export_progress", (a) => {
        f.value = a.payload;
      }).catch(() => null), n.value && (y = new ResizeObserver(() => {
        B();
      }), y.observe(n.value)), _ = await t.onMoved(() => {
        B();
      }).catch(() => null), window.addEventListener("resize", B), window.addEventListener("keydown", Vt);
    }), Ce(it, (a) => {
      a ? Be() : Gt();
    }), Ce(h, (a) => {
      a !== "recording" && (p.value = 0), a !== "exporting" && (f.value = null);
    }), Cn(() => {
      y?.disconnect(), _?.(), P?.(), window.removeEventListener("resize", B), window.removeEventListener("keydown", Vt), Ee(null).catch(() => {
      }), ye(!1).catch(() => {
      }), Gt();
    }), (a, i) => (S(), I("div", Yi, [
      c(
        "div",
        {
          class: $(["recorder-shell", { recording: u(h) === "recording", paused: u(h) === "paused", "snap-aligned": r.value }])
        },
        [
          (S(), I(
            _e,
            null,
            Es(q, (w) => c("span", {
              key: w.className,
              class: $(["resize-zone", w.className]),
              onMousedown: Le((M) => hs(w.direction), ["prevent"])
            }, null, 42, Xi)),
            64
            /* STABLE_FRAGMENT */
          )),
          c(
            "header",
            {
              ref_key: "titleBarRef",
              ref: s,
              class: "title-bar",
              onMousedown: ps
            },
            [
              c(
                "span",
                Ji,
                D(a.$t("screenRecorder.title") || "区域录制"),
                1
                /* TEXT */
              ),
              c(
                "div",
                {
                  class: "window-actions",
                  onMousedown: i[0] || (i[0] = Le(() => {
                  }, ["stop"]))
                },
                [
                  c("button", {
                    class: "title-button title-button--window",
                    title: "最小化",
                    onClick: Cs
                  }, [
                    T(u(Ys), {
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
                    onClick: Ut
                  }, [
                    T(u(Zs), {
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
          c("main", Qi, [
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
            c("div", er, [
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
              c("div", tr, [
                c("div", nr, [
                  u(h) === "ready" || u(h) === "completed" ? (S(), I(
                    "button",
                    {
                      key: 0,
                      class: "icon-control snap-control",
                      title: "拖到目标窗口并松开以对齐",
                      "aria-label": "对齐目标窗口",
                      onMousedown: Le(bs, ["prevent"])
                    },
                    [
                      T(u(Xs), {
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
                    class: $(["audio-meter", { active: Ne.value && p.value > 0.03, metering: Ne.value && !g.value, muted: !Ne.value || g.value }]),
                    title: os.value,
                    "aria-label": "系统声音录制状态",
                    disabled: u(h) === "exporting" || u(v).format === "gif"
                  }, [
                    c(
                      "span",
                      {
                        class: "audio-bars",
                        style: Se(ss.value)
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
                  ], 10, sr)
                ]),
                c("label", or, [
                  re(c("select", {
                    "onUpdate:modelValue": i[1] || (i[1] = (w) => u(v).fps = w),
                    disabled: Pe.value
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
                  ]), 8, ar), [
                    [pt, u(v).fps]
                  ]),
                  i[15] || (i[15] = c(
                    "span",
                    { class: "unit" },
                    "fps",
                    -1
                    /* HOISTED */
                  ))
                ]),
                re(c("select", {
                  "onUpdate:modelValue": i[2] || (i[2] = (w) => u(v).format = w),
                  class: "format-select optional-format",
                  disabled: Pe.value
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
                ]), 8, ir), [
                  [pt, u(v).format]
                ]),
                re(c("select", {
                  "onUpdate:modelValue": i[3] || (i[3] = (w) => u(v).quality = w),
                  class: "quality-select optional-quality",
                  disabled: Pe.value
                }, [
                  c(
                    "option",
                    lr,
                    D(a.$t("screenRecorder.qualityHigh")),
                    1
                    /* TEXT */
                  ),
                  c(
                    "option",
                    cr,
                    D(a.$t("screenRecorder.qualityStandard")),
                    1
                    /* TEXT */
                  ),
                  c(
                    "option",
                    ur,
                    D(a.$t("screenRecorder.qualitySmall")),
                    1
                    /* TEXT */
                  )
                ], 8, rr), [
                  [pt, u(v).quality]
                ]),
                c("div", dr, [
                  c("label", pr, [
                    c("input", {
                      value: l.value.width,
                      readonly: ""
                    }, null, 8, hr)
                  ]),
                  i[17] || (i[17] = c(
                    "span",
                    { class: "multiply" },
                    "×",
                    -1
                    /* HOISTED */
                  )),
                  c("label", fr, [
                    c("input", {
                      value: l.value.height,
                      readonly: ""
                    }, null, 8, gr)
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
              c("div", vr, [
                u(h) === "recording" || u(h) === "paused" ? (S(), I(
                  _e,
                  { key: 0 },
                  [
                    c(
                      "span",
                      yr,
                      D(is.value),
                      1
                      /* TEXT */
                    ),
                    c("button", {
                      class: "control-button",
                      onClick: i[4] || (i[4] = (w) => u(h) === "paused" ? vs() : gs())
                    }, [
                      c(
                        "span",
                        mr,
                        D(u(h) === "paused" ? a.$t("screenRecorder.resume") : a.$t("screenRecorder.pause")),
                        1
                        /* TEXT */
                      )
                    ]),
                    c("button", {
                      class: "control-button danger",
                      onClick: ys
                    }, [
                      c(
                        "span",
                        wr,
                        D(a.$t("screenRecorder.stop")),
                        1
                        /* TEXT */
                      )
                    ])
                  ],
                  64
                  /* STABLE_FRAGMENT */
                )) : u(h) === "exporting" ? (S(), I(
                  _e,
                  { key: 1 },
                  [
                    c("div", {
                      class: "export-progress",
                      title: as.value
                    }, [
                      c("div", br, [
                        c(
                          "span",
                          null,
                          D(rt.value),
                          1
                          /* TEXT */
                        ),
                        c(
                          "strong",
                          null,
                          D(Rt.value) + "%",
                          1
                          /* TEXT */
                        )
                      ]),
                      c("div", Cr, [
                        c(
                          "span",
                          {
                            style: Se({ width: `${Rt.value}%` })
                          },
                          null,
                          4
                          /* STYLE */
                        )
                      ])
                    ], 8, _r),
                    c("button", {
                      class: "control-button danger",
                      title: "取消导出",
                      onClick: ms
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
                )) : u(h) === "completed" && u(N) ? (S(), I(
                  _e,
                  { key: 2 },
                  [
                    c("span", {
                      class: "save-status optional-save-status",
                      title: u(N).path
                    }, D(u(N).hasAudio ? "已保存·有声" : "已保存·无声"), 9, xr),
                    c("button", {
                      class: "control-button",
                      title: "打开文件",
                      onClick: xs
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
                      onClick: Ss
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
                      onClick: ws
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
                )) : (S(), I("button", {
                  key: 3,
                  class: "record-button",
                  disabled: u(x)?.available === !1 || l.value.width < me || l.value.height < me,
                  onClick: fs
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
                    kr,
                    D(a.$t("screenRecorder.start")),
                    1
                    /* TEXT */
                  )
                ], 8, Sr))
              ])
            ],
            512
            /* NEED_PATCH */
          )
        ],
        2
        /* CLASS */
      ),
      u(x) && !u(x).available ? (S(), I(
        "p",
        Or,
        D(u(x).message || a.$t("screenRecorder.ffmpegMissing")),
        1
        /* TEXT */
      )) : Q("v-if", !0)
    ]));
  }
}), Nr = (e, t) => {
  const n = e.__vccOpts || e;
  for (const [s, o] of t)
    n[s] = o;
  return n;
}, zr = /* @__PURE__ */ Nr(Pr, [["__scopeId", "data-v-9ad85a53"]]), $r = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: zr
}, Symbol.toStringTag, { value: "Module" }));
export {
  Lr as activate
};
