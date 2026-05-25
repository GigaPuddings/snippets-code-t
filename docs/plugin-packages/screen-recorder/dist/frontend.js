import { getCurrentInstance as se, inject as te, ref as x, computed as v, unref as u, readonly as Dn, getCurrentScope as Mn, onScopeDispose as Rn, onMounted as Be, nextTick as Pe, watch as je, isRef as $n, warn as kn, provide as Ln, defineComponent as D, createElementBlock as I, openBlock as b, mergeProps as An, renderSlot as oe, createElementVNode as c, normalizeClass as N, createVNode as be, Transition as tt, withCtx as Z, withDirectives as ae, normalizeStyle as Me, createTextVNode as Lt, toDisplayString as z, vShow as Re, shallowReactive as Wn, createBlock as H, createCommentVNode as V, resolveDynamicComponent as At, Fragment as fe, withModifiers as ge, isVNode as me, render as $e, onUnmounted as Wt, renderList as Fn, vModelSelect as dt } from "vue";
const mi = (e) => {
  e.registerRoute({
    target: "window",
    path: "/screen-recorder",
    name: "ScreenRecorder",
    component: () => Promise.resolve().then(() => yi)
  });
};
function Bn(e, t, n, s) {
  if (typeof t == "function" ? e !== t || !0 : !t.has(e)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
  return n === "m" ? s : n === "a" ? s.call(e) : s ? s.value : t.get(e);
}
function jn(e, t, n, s, o) {
  if (typeof t == "function" ? e !== t || !0 : !t.has(e)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
  return t.set(e, n), n;
}
var Ee;
const k = "__TAURI_TO_IPC_KEY__";
function Hn(e, t = !1) {
  return window.__TAURI_INTERNALS__.transformCallback(e, t);
}
async function a(e, t = {}, n) {
  return window.__TAURI_INTERNALS__.invoke(e, t, n);
}
class Vn {
  get rid() {
    return Bn(this, Ee, "f");
  }
  constructor(t) {
    Ee.set(this, void 0), jn(this, Ee, t);
  }
  /**
   * Destroys and cleans up this resource from memory.
   * **You should not call any method on this object anymore and should drop any reference to it.**
   */
  async close() {
    return a("plugin:resources|close", {
      rid: this.rid
    });
  }
}
Ee = /* @__PURE__ */ new WeakMap();
class ye {
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
    return new ne(this.width * t, this.height * t);
  }
  [k]() {
    return {
      width: this.width,
      height: this.height
    };
  }
  toJSON() {
    return this[k]();
  }
}
class ne {
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
    return new ye(this.width / t, this.height / t);
  }
  [k]() {
    return {
      width: this.width,
      height: this.height
    };
  }
  toJSON() {
    return this[k]();
  }
}
class ee {
  constructor(t) {
    this.size = t;
  }
  toLogical(t) {
    return this.size instanceof ye ? this.size : this.size.toLogical(t);
  }
  toPhysical(t) {
    return this.size instanceof ne ? this.size : this.size.toPhysical(t);
  }
  [k]() {
    return {
      [`${this.size.type}`]: {
        width: this.size.width,
        height: this.size.height
      }
    };
  }
  toJSON() {
    return this[k]();
  }
}
class Ft {
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
    return new F(this.x * t, this.y * t);
  }
  [k]() {
    return {
      x: this.x,
      y: this.y
    };
  }
  toJSON() {
    return this[k]();
  }
}
class F {
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
    return new Ft(this.x / t, this.y / t);
  }
  [k]() {
    return {
      x: this.x,
      y: this.y
    };
  }
  toJSON() {
    return this[k]();
  }
}
class Se {
  constructor(t) {
    this.position = t;
  }
  toLogical(t) {
    return this.position instanceof Ft ? this.position : this.position.toLogical(t);
  }
  toPhysical(t) {
    return this.position instanceof F ? this.position : this.position.toPhysical(t);
  }
  [k]() {
    return {
      [`${this.position.type}`]: {
        x: this.position.x,
        y: this.position.y
      }
    };
  }
  toJSON() {
    return this[k]();
  }
}
var M;
(function(e) {
  e.WINDOW_RESIZED = "tauri://resize", e.WINDOW_MOVED = "tauri://move", e.WINDOW_CLOSE_REQUESTED = "tauri://close-requested", e.WINDOW_DESTROYED = "tauri://destroyed", e.WINDOW_FOCUS = "tauri://focus", e.WINDOW_BLUR = "tauri://blur", e.WINDOW_SCALE_FACTOR_CHANGED = "tauri://scale-change", e.WINDOW_THEME_CHANGED = "tauri://theme-changed", e.WINDOW_CREATED = "tauri://window-created", e.WEBVIEW_CREATED = "tauri://webview-created", e.DRAG_ENTER = "tauri://drag-enter", e.DRAG_OVER = "tauri://drag-over", e.DRAG_DROP = "tauri://drag-drop", e.DRAG_LEAVE = "tauri://drag-leave";
})(M || (M = {}));
async function Bt(e, t) {
  await a("plugin:event|unlisten", {
    event: e,
    eventId: t
  });
}
async function jt(e, t, n) {
  var s;
  const o = typeof n?.target == "string" ? { kind: "AnyLabel", label: n.target } : (s = n?.target) !== null && s !== void 0 ? s : { kind: "Any" };
  return a("plugin:event|listen", {
    event: e,
    target: o,
    handler: Hn(t)
  }).then((l) => async () => Bt(e, l));
}
async function Un(e, t, n) {
  return jt(e, (s) => {
    Bt(e, s.id), t(s);
  }, n);
}
async function Gn(e, t) {
  await a("plugin:event|emit", {
    event: e,
    payload: t
  });
}
async function Kn(e, t, n) {
  await a("plugin:event|emit_to", {
    target: typeof e == "string" ? { kind: "AnyLabel", label: e } : e,
    event: t,
    payload: n
  });
}
class ve extends Vn {
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
    return a("plugin:image|new", {
      rgba: ke(t),
      width: n,
      height: s
    }).then((o) => new ve(o));
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
    return a("plugin:image|from_bytes", {
      bytes: ke(t)
    }).then((n) => new ve(n));
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
    return a("plugin:image|from_path", { path: t }).then((n) => new ve(n));
  }
  /** Returns the RGBA data for this image, in row-major order from top to bottom.  */
  async rgba() {
    return a("plugin:image|rgba", {
      rid: this.rid
    }).then((t) => new Uint8Array(t));
  }
  /** Returns the size of this image.  */
  async size() {
    return a("plugin:image|size", { rid: this.rid });
  }
}
function ke(e) {
  return e == null ? null : typeof e == "string" ? e : e instanceof ve ? e.rid : e;
}
var Ye;
(function(e) {
  e[e.Critical = 1] = "Critical", e[e.Informational = 2] = "Informational";
})(Ye || (Ye = {}));
class Zn {
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
var pt;
(function(e) {
  e.None = "none", e.Normal = "normal", e.Indeterminate = "indeterminate", e.Paused = "paused", e.Error = "error";
})(pt || (pt = {}));
function Ht() {
  return new Vt(window.__TAURI_INTERNALS__.metadata.currentWindow.label, {
    // @ts-expect-error `skip` is not defined in the public API but it is handled by the constructor
    skip: !0
  });
}
async function Ke() {
  return a("plugin:window|get_all_windows").then((e) => e.map((t) => new Vt(t, {
    // @ts-expect-error `skip` is not defined in the public API but it is handled by the constructor
    skip: !0
  })));
}
const Ze = ["tauri://created", "tauri://error"];
class Vt {
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
    this.label = t, this.listeners = /* @__PURE__ */ Object.create(null), n?.skip || a("plugin:window|create", {
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
    return (n = (await Ke()).find((s) => s.label === t)) !== null && n !== void 0 ? n : null;
  }
  /**
   * Get an instance of `Window` for the current window.
   */
  static getCurrent() {
    return Ht();
  }
  /**
   * Gets a list of instances of `Window` for all available windows.
   */
  static async getAll() {
    return Ke();
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
    for (const t of await Ke())
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
    } : jt(t, n, {
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
    } : Un(t, n, {
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
    if (Ze.includes(t)) {
      for (const s of this.listeners[t] || [])
        s({
          event: t,
          id: -1,
          payload: n
        });
      return;
    }
    return Gn(t, n);
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
    if (Ze.includes(n)) {
      for (const o of this.listeners[n] || [])
        o({
          event: n,
          id: -1,
          payload: s
        });
      return;
    }
    return Kn(t, n, s);
  }
  /** @ignore */
  _handleTauriEvent(t, n) {
    return Ze.includes(t) ? (t in this.listeners ? this.listeners[t].push(n) : this.listeners[t] = [n], !0) : !1;
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
    return a("plugin:window|scale_factor", {
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
    return a("plugin:window|inner_position", {
      label: this.label
    }).then((t) => new F(t));
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
    return a("plugin:window|outer_position", {
      label: this.label
    }).then((t) => new F(t));
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
    return a("plugin:window|inner_size", {
      label: this.label
    }).then((t) => new ne(t));
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
    return a("plugin:window|outer_size", {
      label: this.label
    }).then((t) => new ne(t));
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
    return a("plugin:window|is_fullscreen", {
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
    return a("plugin:window|is_minimized", {
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
    return a("plugin:window|is_maximized", {
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
    return a("plugin:window|is_focused", {
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
    return a("plugin:window|is_decorated", {
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
    return a("plugin:window|is_resizable", {
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
    return a("plugin:window|is_maximizable", {
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
    return a("plugin:window|is_minimizable", {
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
    return a("plugin:window|is_closable", {
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
    return a("plugin:window|is_visible", {
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
    return a("plugin:window|title", {
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
    return a("plugin:window|theme", {
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
    return a("plugin:window|is_always_on_top", {
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
    return a("plugin:window|center", {
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
    return t && (t === Ye.Critical ? n = { type: "Critical" } : n = { type: "Informational" }), a("plugin:window|request_user_attention", {
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
    return a("plugin:window|set_resizable", {
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
    return a("plugin:window|set_enabled", {
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
    return a("plugin:window|is_enabled", {
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
    return a("plugin:window|set_maximizable", {
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
    return a("plugin:window|set_minimizable", {
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
    return a("plugin:window|set_closable", {
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
    return a("plugin:window|set_title", {
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
    return a("plugin:window|maximize", {
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
    return a("plugin:window|unmaximize", {
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
    return a("plugin:window|toggle_maximize", {
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
    return a("plugin:window|minimize", {
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
    return a("plugin:window|unminimize", {
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
    return a("plugin:window|show", {
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
    return a("plugin:window|hide", {
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
    return a("plugin:window|close", {
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
    return a("plugin:window|destroy", {
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
    return a("plugin:window|set_decorations", {
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
    return a("plugin:window|set_shadow", {
      label: this.label,
      value: t
    });
  }
  /**
   * Set window effects.
   */
  async setEffects(t) {
    return a("plugin:window|set_effects", {
      label: this.label,
      value: t
    });
  }
  /**
   * Clear any applied effects if possible.
   */
  async clearEffects() {
    return a("plugin:window|set_effects", {
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
    return a("plugin:window|set_always_on_top", {
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
    return a("plugin:window|set_always_on_bottom", {
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
    return a("plugin:window|set_content_protected", {
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
    return a("plugin:window|set_size", {
      label: this.label,
      value: t instanceof ee ? t : new ee(t)
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
    return a("plugin:window|set_min_size", {
      label: this.label,
      value: t instanceof ee ? t : t ? new ee(t) : null
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
    return a("plugin:window|set_max_size", {
      label: this.label,
      value: t instanceof ee ? t : t ? new ee(t) : null
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
    return a("plugin:window|set_size_constraints", {
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
    return a("plugin:window|set_position", {
      label: this.label,
      value: t instanceof Se ? t : new Se(t)
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
    return a("plugin:window|set_fullscreen", {
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
    return a("plugin:window|set_focus", {
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
    return a("plugin:window|set_icon", {
      label: this.label,
      value: ke(t)
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
    return a("plugin:window|set_skip_taskbar", {
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
    return a("plugin:window|set_cursor_grab", {
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
    return a("plugin:window|set_cursor_visible", {
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
    return a("plugin:window|set_cursor_icon", {
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
    return a("plugin:window|set_background_color", { color: t });
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
    return a("plugin:window|set_cursor_position", {
      label: this.label,
      value: t instanceof Se ? t : new Se(t)
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
    return a("plugin:window|set_ignore_cursor_events", {
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
    return a("plugin:window|start_dragging", {
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
    return a("plugin:window|start_resize_dragging", {
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
    return a("plugin:window|set_badge_count", {
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
    return a("plugin:window|set_badge_label", {
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
    return a("plugin:window|set_overlay_icon", {
      label: this.label,
      value: t ? ke(t) : void 0
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
    return a("plugin:window|set_progress_bar", {
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
    return a("plugin:window|set_visible_on_all_workspaces", {
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
    return a("plugin:window|set_title_bar_style", {
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
    return a("plugin:window|set_theme", {
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
      n.payload = new ne(n.payload), t(n);
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
      n.payload = new F(n.payload), t(n);
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
      const s = new Zn(n);
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
    const n = await this.listen(M.DRAG_ENTER, (i) => {
      t({
        ...i,
        payload: {
          type: "enter",
          paths: i.payload.paths,
          position: new F(i.payload.position)
        }
      });
    }), s = await this.listen(M.DRAG_OVER, (i) => {
      t({
        ...i,
        payload: {
          type: "over",
          position: new F(i.payload.position)
        }
      });
    }), o = await this.listen(M.DRAG_DROP, (i) => {
      t({
        ...i,
        payload: {
          type: "drop",
          paths: i.payload.paths,
          position: new F(i.payload.position)
        }
      });
    }), l = await this.listen(M.DRAG_LEAVE, (i) => {
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
    const n = await this.listen(M.WINDOW_FOCUS, (o) => {
      t({ ...o, payload: !0 });
    }), s = await this.listen(M.WINDOW_BLUR, (o) => {
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
var ht;
(function(e) {
  e.Disabled = "disabled", e.Throttle = "throttle", e.Suspend = "suspend";
})(ht || (ht = {}));
var ft;
(function(e) {
  e.AppearanceBased = "appearanceBased", e.Light = "light", e.Dark = "dark", e.MediumLight = "mediumLight", e.UltraDark = "ultraDark", e.Titlebar = "titlebar", e.Selection = "selection", e.Menu = "menu", e.Popover = "popover", e.Sidebar = "sidebar", e.HeaderView = "headerView", e.Sheet = "sheet", e.WindowBackground = "windowBackground", e.HudWindow = "hudWindow", e.FullScreenUI = "fullScreenUI", e.Tooltip = "tooltip", e.ContentBackground = "contentBackground", e.UnderWindowBackground = "underWindowBackground", e.UnderPageBackground = "underPageBackground", e.Mica = "mica", e.Blur = "blur", e.Acrylic = "acrylic", e.Tabbed = "tabbed", e.TabbedDark = "tabbedDark", e.TabbedLight = "tabbedLight";
})(ft || (ft = {}));
var gt;
(function(e) {
  e.FollowsWindowActiveState = "followsWindowActiveState", e.Active = "active", e.Inactive = "inactive";
})(gt || (gt = {}));
function qn(e) {
  return e === null ? null : {
    name: e.name,
    scaleFactor: e.scaleFactor,
    position: new F(e.position),
    size: new ne(e.size)
  };
}
async function Jn(e, t) {
  return a("plugin:window|monitor_from_point", {
    x: e,
    y: t
  }).then(qn);
}
const Ut = Symbol(), ze = "el", Yn = "is-", K = (e, t, n, s, o) => {
  let l = `${e}-${t}`;
  return n && (l += `-${n}`), s && (l += `__${s}`), o && (l += `--${o}`), l;
}, Gt = Symbol("namespaceContextKey"), Qn = (e) => {
  const t = e || (se() ? te(Gt, x(ze)) : x(ze));
  return v(() => u(t) || ze);
}, nt = (e, t) => {
  const n = Qn(t);
  return {
    namespace: n,
    b: (y = "") => K(n.value, e, y, "", ""),
    e: (y) => y ? K(n.value, e, "", y, "") : "",
    m: (y) => y ? K(n.value, e, "", "", y) : "",
    be: (y, _) => y && _ ? K(n.value, e, y, _, "") : "",
    em: (y, _) => y && _ ? K(n.value, e, "", y, _) : "",
    bm: (y, _) => y && _ ? K(n.value, e, y, "", _) : "",
    bem: (y, _, S) => y && _ && S ? K(n.value, e, y, _, S) : "",
    is: (y, ..._) => {
      const S = _.length >= 1 ? _[0] : !0;
      return y && S ? `${Yn}${y}` : "";
    },
    cssVar: (y) => {
      const _ = {};
      for (const S in y)
        y[S] && (_[`--${n.value}-${S}`] = y[S]);
      return _;
    },
    cssVarName: (y) => `--${n.value}-${y}`,
    cssVarBlock: (y) => {
      const _ = {};
      for (const S in y)
        y[S] && (_[`--${n.value}-${e}-${S}`] = y[S]);
      return _;
    },
    cssVarBlockName: (y) => `--${n.value}-${e}-${y}`
  };
};
/**
* @vue/shared v3.5.13
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/
const Xn = Object.prototype.hasOwnProperty, yt = (e, t) => Xn.call(e, t), we = (e) => typeof e == "function", q = (e) => typeof e == "string", Kt = (e) => e !== null && typeof e == "object";
var es = typeof global == "object" && global && global.Object === Object && global, ts = typeof self == "object" && self && self.Object === Object && self, st = es || ts || Function("return this")(), ie = st.Symbol, Zt = Object.prototype, ns = Zt.hasOwnProperty, ss = Zt.toString, he = ie ? ie.toStringTag : void 0;
function os(e) {
  var t = ns.call(e, he), n = e[he];
  try {
    e[he] = void 0;
    var s = !0;
  } catch {
  }
  var o = ss.call(e);
  return s && (t ? e[he] = n : delete e[he]), o;
}
var as = Object.prototype, is = as.toString;
function rs(e) {
  return is.call(e);
}
var ls = "[object Null]", us = "[object Undefined]", vt = ie ? ie.toStringTag : void 0;
function qt(e) {
  return e == null ? e === void 0 ? us : ls : vt && vt in Object(e) ? os(e) : rs(e);
}
function cs(e) {
  return e != null && typeof e == "object";
}
var ds = "[object Symbol]";
function ot(e) {
  return typeof e == "symbol" || cs(e) && qt(e) == ds;
}
function ps(e, t) {
  for (var n = -1, s = e == null ? 0 : e.length, o = Array(s); ++n < s; )
    o[n] = t(e[n], n, e);
  return o;
}
var at = Array.isArray, mt = ie ? ie.prototype : void 0, wt = mt ? mt.toString : void 0;
function Jt(e) {
  if (typeof e == "string")
    return e;
  if (at(e))
    return ps(e, Jt) + "";
  if (ot(e))
    return wt ? wt.call(e) : "";
  var t = e + "";
  return t == "0" && 1 / e == -1 / 0 ? "-0" : t;
}
function Yt(e) {
  var t = typeof e;
  return e != null && (t == "object" || t == "function");
}
var hs = "[object AsyncFunction]", fs = "[object Function]", gs = "[object GeneratorFunction]", ys = "[object Proxy]";
function vs(e) {
  if (!Yt(e))
    return !1;
  var t = qt(e);
  return t == fs || t == gs || t == hs || t == ys;
}
var qe = st["__core-js_shared__"], _t = function() {
  var e = /[^.]+$/.exec(qe && qe.keys && qe.keys.IE_PROTO || "");
  return e ? "Symbol(src)_1." + e : "";
}();
function ms(e) {
  return !!_t && _t in e;
}
var ws = Function.prototype, _s = ws.toString;
function bs(e) {
  if (e != null) {
    try {
      return _s.call(e);
    } catch {
    }
    try {
      return e + "";
    } catch {
    }
  }
  return "";
}
var Cs = /[\\^$.*+?()[\]{}|]/g, Ss = /^\[object .+?Constructor\]$/, Os = Function.prototype, xs = Object.prototype, Is = Os.toString, Ts = xs.hasOwnProperty, Ns = RegExp(
  "^" + Is.call(Ts).replace(Cs, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$"
);
function Ps(e) {
  if (!Yt(e) || ms(e))
    return !1;
  var t = vs(e) ? Ns : Ss;
  return t.test(bs(e));
}
function Es(e, t) {
  return e?.[t];
}
function Qt(e, t) {
  var n = Es(e, t);
  return Ps(n) ? n : void 0;
}
function zs(e, t) {
  return e === t || e !== e && t !== t;
}
var Ds = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/, Ms = /^\w*$/;
function Rs(e, t) {
  if (at(e))
    return !1;
  var n = typeof e;
  return n == "number" || n == "symbol" || n == "boolean" || e == null || ot(e) ? !0 : Ms.test(e) || !Ds.test(e) || t != null && e in Object(t);
}
var _e = Qt(Object, "create");
function $s() {
  this.__data__ = _e ? _e(null) : {}, this.size = 0;
}
function ks(e) {
  var t = this.has(e) && delete this.__data__[e];
  return this.size -= t ? 1 : 0, t;
}
var Ls = "__lodash_hash_undefined__", As = Object.prototype, Ws = As.hasOwnProperty;
function Fs(e) {
  var t = this.__data__;
  if (_e) {
    var n = t[e];
    return n === Ls ? void 0 : n;
  }
  return Ws.call(t, e) ? t[e] : void 0;
}
var Bs = Object.prototype, js = Bs.hasOwnProperty;
function Hs(e) {
  var t = this.__data__;
  return _e ? t[e] !== void 0 : js.call(t, e);
}
var Vs = "__lodash_hash_undefined__";
function Us(e, t) {
  var n = this.__data__;
  return this.size += this.has(e) ? 0 : 1, n[e] = _e && t === void 0 ? Vs : t, this;
}
function J(e) {
  var t = -1, n = e == null ? 0 : e.length;
  for (this.clear(); ++t < n; ) {
    var s = e[t];
    this.set(s[0], s[1]);
  }
}
J.prototype.clear = $s;
J.prototype.delete = ks;
J.prototype.get = Fs;
J.prototype.has = Hs;
J.prototype.set = Us;
function Gs() {
  this.__data__ = [], this.size = 0;
}
function He(e, t) {
  for (var n = e.length; n--; )
    if (zs(e[n][0], t))
      return n;
  return -1;
}
var Ks = Array.prototype, Zs = Ks.splice;
function qs(e) {
  var t = this.__data__, n = He(t, e);
  if (n < 0)
    return !1;
  var s = t.length - 1;
  return n == s ? t.pop() : Zs.call(t, n, 1), --this.size, !0;
}
function Js(e) {
  var t = this.__data__, n = He(t, e);
  return n < 0 ? void 0 : t[n][1];
}
function Ys(e) {
  return He(this.__data__, e) > -1;
}
function Qs(e, t) {
  var n = this.__data__, s = He(n, e);
  return s < 0 ? (++this.size, n.push([e, t])) : n[s][1] = t, this;
}
function ue(e) {
  var t = -1, n = e == null ? 0 : e.length;
  for (this.clear(); ++t < n; ) {
    var s = e[t];
    this.set(s[0], s[1]);
  }
}
ue.prototype.clear = Gs;
ue.prototype.delete = qs;
ue.prototype.get = Js;
ue.prototype.has = Ys;
ue.prototype.set = Qs;
var Xs = Qt(st, "Map");
function eo() {
  this.size = 0, this.__data__ = {
    hash: new J(),
    map: new (Xs || ue)(),
    string: new J()
  };
}
function to(e) {
  var t = typeof e;
  return t == "string" || t == "number" || t == "symbol" || t == "boolean" ? e !== "__proto__" : e === null;
}
function Ve(e, t) {
  var n = e.__data__;
  return to(t) ? n[typeof t == "string" ? "string" : "hash"] : n.map;
}
function no(e) {
  var t = Ve(this, e).delete(e);
  return this.size -= t ? 1 : 0, t;
}
function so(e) {
  return Ve(this, e).get(e);
}
function oo(e) {
  return Ve(this, e).has(e);
}
function ao(e, t) {
  var n = Ve(this, e), s = n.size;
  return n.set(e, t), this.size += n.size == s ? 0 : 1, this;
}
function Q(e) {
  var t = -1, n = e == null ? 0 : e.length;
  for (this.clear(); ++t < n; ) {
    var s = e[t];
    this.set(s[0], s[1]);
  }
}
Q.prototype.clear = eo;
Q.prototype.delete = no;
Q.prototype.get = so;
Q.prototype.has = oo;
Q.prototype.set = ao;
var io = "Expected a function";
function it(e, t) {
  if (typeof e != "function" || t != null && typeof t != "function")
    throw new TypeError(io);
  var n = function() {
    var s = arguments, o = t ? t.apply(this, s) : s[0], l = n.cache;
    if (l.has(o))
      return l.get(o);
    var i = e.apply(this, s);
    return n.cache = l.set(o, i) || l, i;
  };
  return n.cache = new (it.Cache || Q)(), n;
}
it.Cache = Q;
var ro = 500;
function lo(e) {
  var t = it(e, function(s) {
    return n.size === ro && n.clear(), s;
  }), n = t.cache;
  return t;
}
var uo = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g, co = /\\(\\)?/g, po = lo(function(e) {
  var t = [];
  return e.charCodeAt(0) === 46 && t.push(""), e.replace(uo, function(n, s, o, l) {
    t.push(o ? l.replace(co, "$1") : s || n);
  }), t;
});
function ho(e) {
  return e == null ? "" : Jt(e);
}
function fo(e, t) {
  return at(e) ? e : Rs(e, t) ? [e] : po(ho(e));
}
function go(e) {
  if (typeof e == "string" || ot(e))
    return e;
  var t = e + "";
  return t == "0" && 1 / e == -1 / 0 ? "-0" : t;
}
function yo(e, t) {
  t = fo(t, e);
  for (var n = 0, s = t.length; e != null && n < s; )
    e = e[go(t[n++])];
  return n && n == s ? e : void 0;
}
function vo(e, t, n) {
  var s = e == null ? void 0 : yo(e, t);
  return s === void 0 ? n : s;
}
function mo(e) {
  for (var t = -1, n = e == null ? 0 : e.length, s = {}; ++t < n; ) {
    var o = e[t];
    s[o[0]] = o[1];
  }
  return s;
}
const Xt = (e) => e === void 0, bt = (e) => typeof e == "boolean", Y = (e) => typeof e == "number", Qe = (e) => typeof Element > "u" ? !1 : e instanceof Element, wo = (e) => q(e) ? !Number.isNaN(Number(e)) : !1;
var Ct;
const X = typeof window < "u", _o = (e) => typeof e == "string", bo = () => {
};
X && ((Ct = window?.navigator) != null && Ct.userAgent) && /iP(ad|hone|od)/.test(window.navigator.userAgent);
function rt(e) {
  return typeof e == "function" ? e() : u(e);
}
function Co(e) {
  return e;
}
function lt(e) {
  return Mn() ? (Rn(e), !0) : !1;
}
function So(e, t = !0) {
  se() ? Be(e) : t ? e() : Pe(e);
}
function en(e, t, n = {}) {
  const {
    immediate: s = !0
  } = n, o = x(!1);
  let l = null;
  function i() {
    l && (clearTimeout(l), l = null);
  }
  function r() {
    o.value = !1, i();
  }
  function h(...f) {
    i(), o.value = !0, l = setTimeout(() => {
      o.value = !1, l = null, e(...f);
    }, rt(t));
  }
  return s && (o.value = !0, X && h()), lt(r), {
    isPending: Dn(o),
    start: h,
    stop: r
  };
}
function tn(e) {
  var t;
  const n = rt(e);
  return (t = n?.$el) != null ? t : n;
}
const nn = X ? window : void 0;
function sn(...e) {
  let t, n, s, o;
  if (_o(e[0]) || Array.isArray(e[0]) ? ([n, s, o] = e, t = nn) : [t, n, s, o] = e, !t)
    return bo;
  Array.isArray(n) || (n = [n]), Array.isArray(s) || (s = [s]);
  const l = [], i = () => {
    l.forEach((p) => p()), l.length = 0;
  }, r = (p, m, T, E) => (p.addEventListener(m, T, E), () => p.removeEventListener(m, T, E)), h = je(() => [tn(t), rt(o)], ([p, m]) => {
    i(), p && l.push(...n.flatMap((T) => s.map((E) => r(p, T, E, m))));
  }, { immediate: !0, flush: "post" }), f = () => {
    h(), i();
  };
  return lt(f), f;
}
function Oo(e, t = !1) {
  const n = x(), s = () => n.value = !!e();
  return s(), So(s, t), n;
}
const St = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {}, Ot = "__vueuse_ssr_handlers__";
St[Ot] = St[Ot] || {};
var xt = Object.getOwnPropertySymbols, xo = Object.prototype.hasOwnProperty, Io = Object.prototype.propertyIsEnumerable, To = (e, t) => {
  var n = {};
  for (var s in e)
    xo.call(e, s) && t.indexOf(s) < 0 && (n[s] = e[s]);
  if (e != null && xt)
    for (var s of xt(e))
      t.indexOf(s) < 0 && Io.call(e, s) && (n[s] = e[s]);
  return n;
};
function No(e, t, n = {}) {
  const s = n, { window: o = nn } = s, l = To(s, ["window"]);
  let i;
  const r = Oo(() => o && "ResizeObserver" in o), h = () => {
    i && (i.disconnect(), i = void 0);
  }, f = je(() => tn(e), (m) => {
    h(), r.value && o && m && (i = new ResizeObserver(t), i.observe(m, l));
  }, { immediate: !0, flush: "post" }), p = () => {
    h(), f();
  };
  return lt(p), {
    isSupported: r,
    stop: p
  };
}
var It;
(function(e) {
  e.UP = "UP", e.RIGHT = "RIGHT", e.DOWN = "DOWN", e.LEFT = "LEFT", e.NONE = "NONE";
})(It || (It = {}));
var Po = Object.defineProperty, Tt = Object.getOwnPropertySymbols, Eo = Object.prototype.hasOwnProperty, zo = Object.prototype.propertyIsEnumerable, Nt = (e, t, n) => t in e ? Po(e, t, { enumerable: !0, configurable: !0, writable: !0, value: n }) : e[t] = n, Do = (e, t) => {
  for (var n in t || (t = {}))
    Eo.call(t, n) && Nt(e, n, t[n]);
  if (Tt)
    for (var n of Tt(t))
      zo.call(t, n) && Nt(e, n, t[n]);
  return e;
};
const Mo = {
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
Do({
  linear: Co
}, Mo);
const Pt = {
  current: 0
}, Et = x(0), on = 2e3, zt = Symbol("elZIndexContextKey"), an = Symbol("zIndexContextKey"), Ro = (e) => {
  const t = se() ? te(zt, Pt) : Pt, n = e || (se() ? te(an, void 0) : void 0), s = v(() => {
    const i = u(n);
    return Y(i) ? i : on;
  }), o = v(() => s.value + Et.value), l = () => (t.current++, Et.value = t.current, o.value);
  return !X && te(zt), {
    initialZIndex: s,
    currentZIndex: o,
    nextZIndex: l
  };
};
var $o = {
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
const ko = (e) => (t, n) => Lo(t, n, u(e)), Lo = (e, t, n) => vo(n, e, e).replace(/\{(\w+)\}/g, (s, o) => {
  var l;
  return `${(l = t?.[o]) != null ? l : `{${o}}`}`;
}), Ao = (e) => {
  const t = v(() => u(e).name), n = $n(e) ? e : x(e);
  return {
    lang: t,
    locale: n,
    t: ko(e)
  };
}, rn = Symbol("localeContextKey"), Wo = (e) => {
  const t = e || te(rn, x());
  return Ao(v(() => t.value || $o));
}, ln = "__epPropKey", R = (e) => e, Fo = (e) => Kt(e) && !!e[ln], un = (e, t) => {
  if (!Kt(e) || Fo(e))
    return e;
  const { values: n, required: s, default: o, type: l, validator: i } = e, h = {
    type: l,
    required: !!s,
    validator: n || i ? (f) => {
      let p = !1, m = [];
      if (n && (m = Array.from(n), yt(e, "default") && m.push(o), p || (p = m.includes(f))), i && (p || (p = i(f))), !p && m.length > 0) {
        const T = [...new Set(m)].map((E) => JSON.stringify(E)).join(", ");
        kn(`Invalid prop: validation failed${t ? ` for prop "${t}"` : ""}. Expected one of [${T}], got value ${JSON.stringify(f)}.`);
      }
      return p;
    } : void 0,
    [ln]: !0
  };
  return yt(e, "default") && (h.default = o), h;
}, ce = (e) => mo(Object.entries(e).map(([t, n]) => [
  t,
  un(n, t)
])), Bo = ["", "default", "small", "large"], jo = un({
  type: String,
  values: Bo,
  required: !1
}), Ho = Symbol("size"), Vo = Symbol("emptyValuesContextKey"), Uo = ce({
  emptyValues: Array,
  valueOnClear: {
    type: [String, Number, Boolean, Function],
    default: void 0,
    validator: (e) => we(e) ? !e() : !e
  }
}), Dt = (e) => Object.keys(e), Le = x();
function cn(e, t = void 0) {
  return se() ? te(Ut, Le) : Le;
}
function dn(e, t) {
  const n = cn(), s = nt(e, v(() => {
    var r;
    return ((r = n.value) == null ? void 0 : r.namespace) || ze;
  })), o = Wo(v(() => {
    var r;
    return (r = n.value) == null ? void 0 : r.locale;
  })), l = Ro(v(() => {
    var r;
    return ((r = n.value) == null ? void 0 : r.zIndex) || on;
  })), i = v(() => {
    var r;
    return u(t) || ((r = n.value) == null ? void 0 : r.size) || "";
  });
  return pn(v(() => u(n) || {})), {
    ns: s,
    locale: o,
    zIndex: l,
    size: i
  };
}
const pn = (e, t, n = !1) => {
  var s;
  const o = !!se(), l = o ? cn() : void 0, i = (s = void 0) != null ? s : o ? Ln : void 0;
  if (!i)
    return;
  const r = v(() => {
    const h = u(e);
    return l?.value ? Go(l.value, h) : h;
  });
  return i(Ut, r), i(rn, v(() => r.value.locale)), i(Gt, v(() => r.value.namespace)), i(an, v(() => r.value.zIndex)), i(Ho, {
    size: v(() => r.value.size || "")
  }), i(Vo, v(() => ({
    emptyValues: r.value.emptyValues,
    valueOnClear: r.value.valueOnClear
  }))), (n || !Le.value) && (Le.value = r.value), r;
}, Go = (e, t) => {
  const n = [.../* @__PURE__ */ new Set([...Dt(e), ...Dt(t)])], s = {};
  for (const o of n)
    s[o] = t[o] !== void 0 ? t[o] : e[o];
  return s;
};
var Ue = (e, t) => {
  const n = e.__vccOpts || e;
  for (const [s, o] of t)
    n[s] = o;
  return n;
};
function Xe(e, t = "px") {
  if (!e)
    return "";
  if (Y(e) || wo(e))
    return `${e}${t}`;
  if (q(e))
    return e;
}
const hn = (e, t) => (e.install = (n) => {
  for (const s of [e, ...Object.values({})])
    n.component(s.name, s);
}, e), fn = (e, t) => (e.install = (n) => {
  e._context = n._context, n.config.globalProperties[t] = e;
}, e), Ko = ce({
  size: {
    type: R([Number, String])
  },
  color: {
    type: String
  }
}), Zo = D({
  name: "ElIcon",
  inheritAttrs: !1
}), qo = /* @__PURE__ */ D({
  ...Zo,
  props: Ko,
  setup(e) {
    const t = e, n = nt("icon"), s = v(() => {
      const { size: o, color: l } = t;
      return !o && !l ? {} : {
        fontSize: Xt(o) ? void 0 : Xe(o),
        "--color": l
      };
    });
    return (o, l) => (b(), I("i", An({
      class: u(n).b(),
      style: u(s)
    }, o.$attrs), [
      oe(o.$slots, "default")
    ], 16));
  }
});
var Jo = /* @__PURE__ */ Ue(qo, [["__file", "icon.vue"]]);
const Ae = hn(Jo);
/*! Element Plus Icons Vue v2.3.1 */
var Yo = /* @__PURE__ */ D({
  name: "CircleCloseFilled",
  __name: "circle-close-filled",
  setup(e) {
    return (t, n) => (b(), I("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 1024 1024"
    }, [
      c("path", {
        fill: "currentColor",
        d: "M512 64a448 448 0 1 1 0 896 448 448 0 0 1 0-896m0 393.664L407.936 353.6a38.4 38.4 0 1 0-54.336 54.336L457.664 512 353.6 616.064a38.4 38.4 0 1 0 54.336 54.336L512 566.336 616.064 670.4a38.4 38.4 0 1 0 54.336-54.336L566.336 512 670.4 407.936a38.4 38.4 0 1 0-54.336-54.336z"
      })
    ]));
  }
}), Qo = Yo, Xo = /* @__PURE__ */ D({
  name: "Close",
  __name: "close",
  setup(e) {
    return (t, n) => (b(), I("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 1024 1024"
    }, [
      c("path", {
        fill: "currentColor",
        d: "M764.288 214.592 512 466.88 259.712 214.592a31.936 31.936 0 0 0-45.12 45.12L466.752 512 214.528 764.224a31.936 31.936 0 1 0 45.12 45.184L512 557.184l252.288 252.288a31.936 31.936 0 0 0 45.12-45.12L557.12 512.064l252.288-252.352a31.936 31.936 0 1 0-45.12-45.184z"
      })
    ]));
  }
}), gn = Xo, ea = /* @__PURE__ */ D({
  name: "InfoFilled",
  __name: "info-filled",
  setup(e) {
    return (t, n) => (b(), I("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 1024 1024"
    }, [
      c("path", {
        fill: "currentColor",
        d: "M512 64a448 448 0 1 1 0 896.064A448 448 0 0 1 512 64m67.2 275.072c33.28 0 60.288-23.104 60.288-57.344s-27.072-57.344-60.288-57.344c-33.28 0-60.16 23.104-60.16 57.344s26.88 57.344 60.16 57.344M590.912 699.2c0-6.848 2.368-24.64 1.024-34.752l-52.608 60.544c-10.88 11.456-24.512 19.392-30.912 17.28a12.992 12.992 0 0 1-8.256-14.72l87.68-276.992c7.168-35.136-12.544-67.2-54.336-71.296-44.096 0-108.992 44.736-148.48 101.504 0 6.784-1.28 23.68.064 33.792l52.544-60.608c10.88-11.328 23.552-19.328 29.952-17.152a12.8 12.8 0 0 1 7.808 16.128L388.48 728.576c-10.048 32.256 8.96 63.872 55.04 71.04 67.84 0 107.904-43.648 147.456-100.416z"
      })
    ]));
  }
}), ta = ea, na = /* @__PURE__ */ D({
  name: "SuccessFilled",
  __name: "success-filled",
  setup(e) {
    return (t, n) => (b(), I("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 1024 1024"
    }, [
      c("path", {
        fill: "currentColor",
        d: "M512 64a448 448 0 1 1 0 896 448 448 0 0 1 0-896m-55.808 536.384-99.52-99.584a38.4 38.4 0 1 0-54.336 54.336l126.72 126.72a38.272 38.272 0 0 0 54.336 0l262.4-262.464a38.4 38.4 0 1 0-54.272-54.336z"
      })
    ]));
  }
}), sa = na, oa = /* @__PURE__ */ D({
  name: "WarningFilled",
  __name: "warning-filled",
  setup(e) {
    return (t, n) => (b(), I("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 1024 1024"
    }, [
      c("path", {
        fill: "currentColor",
        d: "M512 64a448 448 0 1 1 0 896 448 448 0 0 1 0-896m0 192a58.432 58.432 0 0 0-58.24 63.744l23.36 256.384a35.072 35.072 0 0 0 69.76 0l23.296-256.384A58.432 58.432 0 0 0 512 256m0 512a51.2 51.2 0 1 0 0-102.4 51.2 51.2 0 0 0 0 102.4"
      })
    ]));
  }
}), aa = oa;
const yn = R([
  String,
  Object,
  Function
]), ia = {
  Close: gn
}, ra = {
  Close: gn
}, We = {
  success: sa,
  warning: aa,
  error: Qo,
  info: ta
}, la = (e) => e, De = {
  esc: "Escape",
  delete: "Delete",
  backspace: "Backspace"
}, ua = ce({
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
    type: R([String, Object, Array])
  },
  offset: {
    type: R(Array),
    default: [0, 0]
  },
  badgeClass: {
    type: String
  }
}), ca = D({
  name: "ElBadge"
}), da = /* @__PURE__ */ D({
  ...ca,
  props: ua,
  setup(e, { expose: t }) {
    const n = e, s = nt("badge"), o = v(() => n.isDot ? "" : Y(n.value) && Y(n.max) ? n.max < n.value ? `${n.max}+` : `${n.value}` : `${n.value}`), l = v(() => {
      var i, r, h, f, p;
      return [
        {
          backgroundColor: n.color,
          marginRight: Xe(-((r = (i = n.offset) == null ? void 0 : i[0]) != null ? r : 0)),
          marginTop: Xe((f = (h = n.offset) == null ? void 0 : h[1]) != null ? f : 0)
        },
        (p = n.badgeStyle) != null ? p : {}
      ];
    });
    return t({
      content: o
    }), (i, r) => (b(), I("div", {
      class: N(u(s).b())
    }, [
      oe(i.$slots, "default"),
      be(tt, {
        name: `${u(s).namespace.value}-zoom-in-center`,
        persisted: ""
      }, {
        default: Z(() => [
          ae(c("sup", {
            class: N([
              u(s).e("content"),
              u(s).em("content", i.type),
              u(s).is("fixed", !!i.$slots.default),
              u(s).is("dot", i.isDot),
              u(s).is("hide-zero", !i.showZero && n.value === 0),
              i.badgeClass
            ]),
            style: Me(u(l))
          }, [
            oe(i.$slots, "content", { value: u(o) }, () => [
              Lt(z(u(o)), 1)
            ])
          ], 6), [
            [Re, !i.hidden && (u(o) || i.isDot || i.$slots.content)]
          ])
        ]),
        _: 3
      }, 8, ["name"])
    ], 2));
  }
});
var pa = /* @__PURE__ */ Ue(da, [["__file", "badge.vue"]]);
const ha = hn(pa), fa = ce({
  a11y: {
    type: Boolean,
    default: !0
  },
  locale: {
    type: R(Object)
  },
  size: jo,
  button: {
    type: R(Object)
  },
  experimentalFeatures: {
    type: R(Object)
  },
  keyboardNavigation: {
    type: Boolean,
    default: !0
  },
  message: {
    type: R(Object)
  },
  zIndex: Number,
  namespace: {
    type: String,
    default: "el"
  },
  ...Uo
}), L = {};
D({
  name: "ElConfigProvider",
  props: fa,
  setup(e, { slots: t }) {
    je(() => e.message, (s) => {
      Object.assign(L, s ?? {});
    }, { immediate: !0, deep: !0 });
    const n = pn(e);
    return () => oe(t, "default", { config: n?.value });
  }
});
const vn = ["success", "info", "warning", "error"], P = la({
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
  appendTo: X ? document.body : void 0
}), ga = ce({
  customClass: {
    type: String,
    default: P.customClass
  },
  center: {
    type: Boolean,
    default: P.center
  },
  dangerouslyUseHTMLString: {
    type: Boolean,
    default: P.dangerouslyUseHTMLString
  },
  duration: {
    type: Number,
    default: P.duration
  },
  icon: {
    type: yn,
    default: P.icon
  },
  id: {
    type: String,
    default: P.id
  },
  message: {
    type: R([
      String,
      Object,
      Function
    ]),
    default: P.message
  },
  onClose: {
    type: R(Function),
    default: P.onClose
  },
  showClose: {
    type: Boolean,
    default: P.showClose
  },
  type: {
    type: String,
    values: vn,
    default: P.type
  },
  plain: {
    type: Boolean,
    default: P.plain
  },
  offset: {
    type: Number,
    default: P.offset
  },
  zIndex: {
    type: Number,
    default: P.zIndex
  },
  grouping: {
    type: Boolean,
    default: P.grouping
  },
  repeatNum: {
    type: Number,
    default: P.repeatNum
  }
}), ya = {
  destroy: () => !0
}, A = Wn([]), va = (e) => {
  const t = A.findIndex((o) => o.id === e), n = A[t];
  let s;
  return t > 0 && (s = A[t - 1]), { current: n, prev: s };
}, ma = (e) => {
  const { prev: t } = va(e);
  return t ? t.vm.exposed.bottom.value : 0;
}, wa = (e, t) => A.findIndex((s) => s.id === e) > 0 ? 16 : t, _a = D({
  name: "ElMessage"
}), ba = /* @__PURE__ */ D({
  ..._a,
  props: ga,
  emits: ya,
  setup(e, { expose: t }) {
    const n = e, { Close: s } = ra, { ns: o, zIndex: l } = dn("message"), { currentZIndex: i, nextZIndex: r } = l, h = x(), f = x(!1), p = x(0);
    let m;
    const T = v(() => n.type ? n.type === "error" ? "danger" : n.type : "info"), E = v(() => {
      const C = n.type;
      return { [o.bm("icon", C)]: C && We[C] };
    }), B = v(() => n.icon || We[n.type] || ""), y = v(() => ma(n.id)), _ = v(() => wa(n.id, n.offset) + y.value), S = v(() => p.value + _.value), U = v(() => ({
      top: `${_.value}px`,
      zIndex: i.value
    }));
    function w() {
      n.duration !== 0 && ({ stop: m } = en(() => {
        W();
      }, n.duration));
    }
    function $() {
      m?.();
    }
    function W() {
      f.value = !1;
    }
    function G({ code: C }) {
      C === De.esc && W();
    }
    return Be(() => {
      w(), r(), f.value = !0;
    }), je(() => n.repeatNum, () => {
      $(), w();
    }), sn(document, "keydown", G), No(h, () => {
      p.value = h.value.getBoundingClientRect().height;
    }), t({
      visible: f,
      bottom: S,
      close: W
    }), (C, Ce) => (b(), H(tt, {
      name: u(o).b("fade"),
      onBeforeLeave: C.onClose,
      onAfterLeave: (j) => C.$emit("destroy"),
      persisted: ""
    }, {
      default: Z(() => [
        ae(c("div", {
          id: C.id,
          ref_key: "messageRef",
          ref: h,
          class: N([
            u(o).b(),
            { [u(o).m(C.type)]: C.type },
            u(o).is("center", C.center),
            u(o).is("closable", C.showClose),
            u(o).is("plain", C.plain),
            C.customClass
          ]),
          style: Me(u(U)),
          role: "alert",
          onMouseenter: $,
          onMouseleave: w
        }, [
          C.repeatNum > 1 ? (b(), H(u(ha), {
            key: 0,
            value: C.repeatNum,
            type: u(T),
            class: N(u(o).e("badge"))
          }, null, 8, ["value", "type", "class"])) : V("v-if", !0),
          u(B) ? (b(), H(u(Ae), {
            key: 1,
            class: N([u(o).e("icon"), u(E)])
          }, {
            default: Z(() => [
              (b(), H(At(u(B))))
            ]),
            _: 1
          }, 8, ["class"])) : V("v-if", !0),
          oe(C.$slots, "default", {}, () => [
            C.dangerouslyUseHTMLString ? (b(), I(fe, { key: 1 }, [
              V(" Caution here, message could've been compromised, never use user's input as message "),
              c("p", {
                class: N(u(o).e("content")),
                innerHTML: C.message
              }, null, 10, ["innerHTML"])
            ], 2112)) : (b(), I("p", {
              key: 0,
              class: N(u(o).e("content"))
            }, z(C.message), 3))
          ]),
          C.showClose ? (b(), H(u(Ae), {
            key: 2,
            class: N(u(o).e("closeBtn")),
            onClick: ge(W, ["stop"])
          }, {
            default: Z(() => [
              be(u(s))
            ]),
            _: 1
          }, 8, ["class", "onClick"])) : V("v-if", !0)
        ], 46, ["id"]), [
          [Re, f.value]
        ])
      ]),
      _: 3
    }, 8, ["name", "onBeforeLeave", "onAfterLeave"]));
  }
});
var Ca = /* @__PURE__ */ Ue(ba, [["__file", "message.vue"]]);
let Sa = 1;
const mn = (e) => {
  const t = !e || q(e) || me(e) || we(e) ? { message: e } : e, n = {
    ...P,
    ...t
  };
  if (!n.appendTo)
    n.appendTo = document.body;
  else if (q(n.appendTo)) {
    let s = document.querySelector(n.appendTo);
    Qe(s) || (s = document.body), n.appendTo = s;
  }
  return bt(L.grouping) && !n.grouping && (n.grouping = L.grouping), Y(L.duration) && n.duration === 3e3 && (n.duration = L.duration), Y(L.offset) && n.offset === 16 && (n.offset = L.offset), bt(L.showClose) && !n.showClose && (n.showClose = L.showClose), n;
}, Oa = (e) => {
  const t = A.indexOf(e);
  if (t === -1)
    return;
  A.splice(t, 1);
  const { handler: n } = e;
  n.close();
}, xa = ({ appendTo: e, ...t }, n) => {
  const s = `message_${Sa++}`, o = t.onClose, l = document.createElement("div"), i = {
    ...t,
    id: s,
    onClose: () => {
      o?.(), Oa(p);
    },
    onDestroy: () => {
      $e(null, l);
    }
  }, r = be(Ca, i, we(i.message) || me(i.message) ? {
    default: we(i.message) ? i.message : () => i.message
  } : null);
  r.appContext = n || re._context, $e(r, l), e.appendChild(l.firstElementChild);
  const h = r.component, p = {
    id: s,
    vnode: r,
    vm: h,
    handler: {
      close: () => {
        h.exposed.visible.value = !1;
      }
    },
    props: r.component.props
  };
  return p;
}, re = (e = {}, t) => {
  if (!X)
    return { close: () => {
    } };
  const n = mn(e);
  if (n.grouping && A.length) {
    const o = A.find(({ vnode: l }) => {
      var i;
      return ((i = l.props) == null ? void 0 : i.message) === n.message;
    });
    if (o)
      return o.props.repeatNum += 1, o.props.type = n.type, o.handler;
  }
  if (Y(L.max) && A.length >= L.max)
    return { close: () => {
    } };
  const s = xa(n, t);
  return A.push(s), s.handler;
};
vn.forEach((e) => {
  re[e] = (t = {}, n) => {
    const s = mn(t);
    return re({ ...s, type: e }, n);
  };
});
function Ia(e) {
  for (const t of A)
    (!e || e === t.props.type) && t.handler.close();
}
re.closeAll = Ia;
re._context = null;
const Ta = fn(re, "$message"), wn = [
  "success",
  "info",
  "warning",
  "error"
], Na = ce({
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
    type: yn
  },
  id: {
    type: String,
    default: ""
  },
  message: {
    type: R([
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
    type: R(Function),
    default: () => {
    }
  },
  onClose: {
    type: R(Function),
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
    values: [...wn, ""],
    default: ""
  },
  zIndex: Number
}), Pa = {
  destroy: () => !0
}, Ea = D({
  name: "ElNotification"
}), za = /* @__PURE__ */ D({
  ...Ea,
  props: Na,
  emits: Pa,
  setup(e, { expose: t }) {
    const n = e, { ns: s, zIndex: o } = dn("notification"), { nextZIndex: l, currentZIndex: i } = o, { Close: r } = ia, h = x(!1);
    let f;
    const p = v(() => {
      const w = n.type;
      return w && We[n.type] ? s.m(w) : "";
    }), m = v(() => n.type && We[n.type] || n.icon), T = v(() => n.position.endsWith("right") ? "right" : "left"), E = v(() => n.position.startsWith("top") ? "top" : "bottom"), B = v(() => {
      var w;
      return {
        [E.value]: `${n.offset}px`,
        zIndex: (w = n.zIndex) != null ? w : i.value
      };
    });
    function y() {
      n.duration > 0 && ({ stop: f } = en(() => {
        h.value && S();
      }, n.duration));
    }
    function _() {
      f?.();
    }
    function S() {
      h.value = !1;
    }
    function U({ code: w }) {
      w === De.delete || w === De.backspace ? _() : w === De.esc ? h.value && S() : y();
    }
    return Be(() => {
      y(), l(), h.value = !0;
    }), sn(document, "keydown", U), t({
      visible: h,
      close: S
    }), (w, $) => (b(), H(tt, {
      name: u(s).b("fade"),
      onBeforeLeave: w.onClose,
      onAfterLeave: (W) => w.$emit("destroy"),
      persisted: ""
    }, {
      default: Z(() => [
        ae(c("div", {
          id: w.id,
          class: N([u(s).b(), w.customClass, u(T)]),
          style: Me(u(B)),
          role: "alert",
          onMouseenter: _,
          onMouseleave: y,
          onClick: w.onClick
        }, [
          u(m) ? (b(), H(u(Ae), {
            key: 0,
            class: N([u(s).e("icon"), u(p)])
          }, {
            default: Z(() => [
              (b(), H(At(u(m))))
            ]),
            _: 1
          }, 8, ["class"])) : V("v-if", !0),
          c("div", {
            class: N(u(s).e("group"))
          }, [
            c("h2", {
              class: N(u(s).e("title")),
              textContent: z(w.title)
            }, null, 10, ["textContent"]),
            ae(c("div", {
              class: N(u(s).e("content")),
              style: Me(w.title ? void 0 : { margin: 0 })
            }, [
              oe(w.$slots, "default", {}, () => [
                w.dangerouslyUseHTMLString ? (b(), I(fe, { key: 1 }, [
                  V(" Caution here, message could've been compromised, never use user's input as message "),
                  c("p", { innerHTML: w.message }, null, 8, ["innerHTML"])
                ], 2112)) : (b(), I("p", { key: 0 }, z(w.message), 1))
              ])
            ], 6), [
              [Re, w.message]
            ]),
            w.showClose ? (b(), H(u(Ae), {
              key: 0,
              class: N(u(s).e("closeBtn")),
              onClick: ge(S, ["stop"])
            }, {
              default: Z(() => [
                be(u(r))
              ]),
              _: 1
            }, 8, ["class", "onClick"])) : V("v-if", !0)
          ], 2)
        ], 46, ["id", "onClick"]), [
          [Re, h.value]
        ])
      ]),
      _: 3
    }, 8, ["name", "onBeforeLeave", "onAfterLeave"]));
  }
});
var Da = /* @__PURE__ */ Ue(za, [["__file", "notification.vue"]]);
const Fe = {
  "top-left": [],
  "top-right": [],
  "bottom-left": [],
  "bottom-right": []
}, et = 16;
let Ma = 1;
const le = function(e = {}, t) {
  if (!X)
    return { close: () => {
    } };
  (q(e) || me(e)) && (e = { message: e });
  const n = e.position || "top-right";
  let s = e.offset || 0;
  Fe[n].forEach(({ vm: p }) => {
    var m;
    s += (((m = p.el) == null ? void 0 : m.offsetHeight) || 0) + et;
  }), s += et;
  const o = `notification_${Ma++}`, l = e.onClose, i = {
    ...e,
    offset: s,
    id: o,
    onClose: () => {
      Ra(o, n, l);
    }
  };
  let r = document.body;
  Qe(e.appendTo) ? r = e.appendTo : q(e.appendTo) && (r = document.querySelector(e.appendTo)), Qe(r) || (r = document.body);
  const h = document.createElement("div"), f = be(Da, i, we(i.message) ? i.message : me(i.message) ? () => i.message : null);
  return f.appContext = Xt(t) ? le._context : t, f.props.onDestroy = () => {
    $e(null, h);
  }, $e(f, h), Fe[n].push({ vm: f }), r.appendChild(h.firstElementChild), {
    close: () => {
      f.component.exposed.visible.value = !1;
    }
  };
};
wn.forEach((e) => {
  le[e] = (t = {}, n) => ((q(t) || me(t)) && (t = {
    message: t
  }), le({ ...t, type: e }, n));
});
function Ra(e, t, n) {
  const s = Fe[t], o = s.findIndex(({ vm: f }) => {
    var p;
    return ((p = f.component) == null ? void 0 : p.props.id) === e;
  });
  if (o === -1)
    return;
  const { vm: l } = s[o];
  if (!l)
    return;
  n?.(l);
  const i = l.el.offsetHeight, r = t.split("-")[0];
  s.splice(o, 1);
  const h = s.length;
  if (!(h < 1))
    for (let f = o; f < h; f++) {
      const { el: p, component: m } = s[f].vm, T = Number.parseInt(p.style[r], 10) - i - et;
      m.props.offset = T;
    }
}
function $a() {
  for (const e of Object.values(Fe))
    e.forEach(({ vm: t }) => {
      t.component.exposed.visible.value = !1;
    });
}
le.closeAll = $a;
le._context = null;
const ka = fn(le, "$notify"), Je = {
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
    s === "center" ? Ta({
      message: t,
      type: n,
      duration: o,
      showClose: l,
      grouping: !0
    }) : ka({
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
}, La = () => a("screen_recorder_get_ffmpeg_status"), Oe = (e) => a("screen_recorder_set_capture_excluded", { excluded: e }), xe = (e) => a("screen_recorder_set_passthrough_region", { region: e }), Aa = () => a("screen_recorder_pick_target_window"), Wa = () => a("screen_recorder_close_window"), Fa = (e, t) => a("screen_recorder_start_recording", {
  region: e,
  fps: t.fps,
  quality: t.quality,
  audio: t.audio
}), Ba = () => a("screen_recorder_pause_recording"), ja = (e, t) => a("screen_recorder_resume_recording", {
  region: e,
  fps: t.fps,
  quality: t.quality,
  audio: t.audio
}), Ha = () => a("screen_recorder_stop_recording"), Va = () => a("screen_recorder_cancel_recording"), Ua = (e) => a("screen_recorder_export_recording", {
  format: e.format,
  fps: e.fps,
  quality: e.quality,
  savePath: e.savePath
}), Mt = () => ({
  format: "mp4",
  fps: 30,
  quality: "standard",
  savePath: "",
  audio: !0
});
function Ga() {
  const e = x("selecting"), t = x(Mt()), n = x(null), s = x(null), o = x(""), l = x(null), i = x(0), r = x(0), h = x(null), f = () => {
    r.value = e.value === "recording" && l.value !== null ? i.value + Date.now() - l.value : i.value;
  }, p = () => {
    h.value !== null && (window.clearInterval(h.value), h.value = null);
  }, m = () => {
    p(), f(), h.value = window.setInterval(() => {
      f();
    }, 250);
  }, T = async () => (n.value = await La(), n.value), E = async ($) => {
    o.value = "", s.value = null;
    const W = n.value ?? await T();
    if (!W.available)
      throw new Error(W.message || "FFmpeg unavailable");
    await Fa($, t.value), e.value = "recording", i.value = 0, r.value = 0, l.value = Date.now(), m();
  }, B = async () => {
    e.value === "recording" && (f(), i.value = r.value, l.value = null, p(), await Ba(), e.value = "paused");
  }, y = async ($) => {
    e.value === "paused" && (await ja($, t.value), e.value = "recording", l.value = Date.now(), m());
  }, _ = async () => {
    e.value !== "recording" && e.value !== "paused" || (f(), i.value = r.value, l.value = null, p(), await Ha(), e.value = "exporting");
  }, S = async () => (e.value = "exporting", s.value = await Ua(t.value), e.value = "completed", s.value), U = async () => {
    p(), await Va(), e.value = "selecting", l.value = null, i.value = 0, r.value = 0, s.value = null;
  }, w = () => {
    e.value = "selecting", l.value = null, i.value = 0, r.value = 0, s.value = null, o.value = "", t.value = Mt();
  };
  return Wt(() => {
    p();
  }), {
    status: e,
    settings: t,
    ffmpegStatus: n,
    result: s,
    errorMessage: o,
    elapsedMs: r,
    refreshFfmpegStatus: T,
    begin: E,
    pause: B,
    resume: y,
    stop: _,
    exportFile: S,
    cancel: U,
    reset: w
  };
}
const Ka = { class: "screen-recorder" }, Za = ["onMousedown"], qa = { class: "window-title" }, Ja = { class: "capture-viewport" }, Ya = { class: "capture-frame" }, Qa = { class: "control-strip" }, Xa = ["disabled"], ei = ["disabled"], ti = { class: "dimension" }, ni = ["value"], si = { class: "dimension" }, oi = ["value"], ai = { class: "time" }, ii = {
  key: 2,
  class: "save-status"
}, ri = ["title"], li = ["disabled"], ui = {
  key: 0,
  class: "warning"
}, Ie = 80, ci = 468, di = 300, Rt = 468, $t = 260, kt = 38, pi = 56, Te = 8, Ne = 1, hi = /* @__PURE__ */ D({
  __name: "index",
  setup(e) {
    const t = Ht(), n = x(null), s = x({ width: 0, height: 0 });
    let o = null, l = null;
    const i = [
      { className: "n", direction: "North" },
      { className: "ne", direction: "NorthEast" },
      { className: "e", direction: "East" },
      { className: "se", direction: "SouthEast" },
      { className: "s", direction: "South" },
      { className: "sw", direction: "SouthWest" },
      { className: "w", direction: "West" },
      { className: "nw", direction: "NorthWest" }
    ], {
      status: r,
      settings: h,
      ffmpegStatus: f,
      result: p,
      elapsedMs: m,
      refreshFfmpegStatus: T,
      begin: E,
      pause: B,
      resume: y,
      stop: _,
      exportFile: S,
      cancel: U,
      reset: w
    } = Ga(), $ = v(() => r.value === "recording" || r.value === "paused" || r.value === "exporting"), W = v(() => {
      const g = Math.floor(m.value / 1e3), d = Math.floor(g / 60).toString().padStart(2, "0"), O = (g % 60).toString().padStart(2, "0");
      return `${d}:${O}`;
    }), G = async (g) => {
      try {
        await g();
      } catch (d) {
        Je.msg(d?.message || String(d), "error");
      }
    }, C = (g) => Math.max(2, Math.floor(Math.round(g) / 2) * 2), Ce = async () => {
      const g = n.value;
      if (!g)
        throw new Error("录制视口尚未准备好");
      const d = g.getBoundingClientRect(), O = await t.scaleFactor(), de = await t.innerPosition(), pe = C(d.width * O), Ge = C(d.height * O);
      if (pe < Ie || Ge < Ie)
        throw new Error("录制区域太小，请放大录制窗口");
      return {
        x: d.left,
        y: d.top,
        width: pe / O,
        height: Ge / O,
        screenX: Math.round(de.x + d.left * O),
        screenY: Math.round(de.y + d.top * O),
        physicalWidth: pe,
        physicalHeight: Ge,
        scale: O
      };
    }, j = async () => {
      try {
        const g = await Ce();
        s.value = {
          width: g.physicalWidth,
          height: g.physicalHeight
        }, await xe({
          x: Math.round(g.x * g.scale),
          y: Math.round(g.y * g.scale),
          width: g.physicalWidth,
          height: g.physicalHeight
        }).catch(() => {
        });
      } catch {
        s.value = { width: 0, height: 0 }, await xe(null).catch(() => {
        });
      }
    }, _n = async (g) => {
      g.button !== 0 || $.value || await t.startDragging().catch((d) => {
        Je.msg(d?.message || String(d), "error");
      });
    }, bn = async (g) => {
      $.value || await t.startResizeDragging(g).catch((d) => {
        Je.msg(d?.message || String(d), "error");
      });
    }, Cn = () => G(async () => {
      await Oe(!0).catch(() => {
      }), await j(), await E(await Ce());
    }), Sn = () => G(B), On = () => G(async () => {
      await y(await Ce());
    }), xn = () => G(async () => {
      await _(), await S();
    }), In = () => {
      w(), r.value = "ready", p.value = null, t.setSize(new ye(ci, di)), Pe(j);
    }, Tn = async (g) => {
      const O = (await Jn(g.screenX, g.screenY))?.scaleFactor || await t.scaleFactor(), de = Math.max(
        Rt,
        g.physicalWidth / O + Te * 2 + Ne * 2
      ), pe = Math.max(
        $t,
        g.physicalHeight / O + kt + pi + Te * 2 + Ne * 2
      );
      await t.setPosition(new F(
        Math.round(g.screenX - (Te + Ne) * O),
        Math.round(g.screenY - (kt + Te + Ne) * O)
      )), await t.setSize(new ye(Math.round(de), Math.round(pe))), await Pe(), await j();
    }, Nn = () => G(async () => {
      const g = await Aa();
      await Tn(g);
    }), Pn = async () => {
      await t.minimize();
    }, ut = async () => {
      try {
        await U(), await xe(null).catch(() => {
        }), await Oe(!1).catch(() => {
        });
      } catch {
      }
      await Wa();
    }, En = async () => {
      p.value && await a("open_file_with_default_app", { filePath: p.value.path });
    }, zn = async () => {
      p.value && await a("show_file_in_folder", { filePath: p.value.path });
    }, ct = (g) => {
      g.key === "Escape" && (g.preventDefault(), ut());
    };
    return Be(async () => {
      r.value = "ready", await t.setMinSize(new ye(Rt, $t)).catch(() => {
      }), await Oe(!0).catch(() => {
      }), await t.emit("screen_recorder_ready"), await T().catch(() => {
      }), await Pe(), await j(), n.value && (o = new ResizeObserver(() => {
        j();
      }), o.observe(n.value)), l = await t.onMoved(() => {
        j();
      }).catch(() => null), window.addEventListener("resize", j), window.addEventListener("keydown", ct);
    }), Wt(() => {
      o?.disconnect(), l?.(), window.removeEventListener("resize", j), window.removeEventListener("keydown", ct), xe(null).catch(() => {
      }), Oe(!1).catch(() => {
      });
    }), (g, d) => (b(), I("div", Ka, [
      c(
        "div",
        {
          class: N(["recorder-shell", { recording: u(r) === "recording", paused: u(r) === "paused" }])
        },
        [
          (b(), I(
            fe,
            null,
            Fn(i, (O) => c("span", {
              key: O.className,
              class: N(["resize-zone", O.className]),
              onMousedown: ge((de) => bn(O.direction), ["prevent"])
            }, null, 42, Za)),
            64
            /* STABLE_FRAGMENT */
          )),
          c(
            "header",
            {
              class: "title-bar",
              onMousedown: _n
            },
            [
              c(
                "span",
                qa,
                z(g.$t("screenRecorder.title") || "自定义录屏"),
                1
                /* TEXT */
              ),
              c(
                "div",
                {
                  class: "window-actions",
                  onMousedown: d[0] || (d[0] = ge(() => {
                  }, ["stop"]))
                },
                [
                  c("button", {
                    class: "title-button",
                    title: "最小化",
                    onClick: Pn
                  }, "_"),
                  c("button", {
                    class: "title-button close",
                    title: "关闭",
                    onClick: ut
                  }, "×")
                ],
                32
                /* NEED_HYDRATION */
              )
            ],
            32
            /* NEED_HYDRATION */
          ),
          c("main", Ja, [
            d[8] || (d[8] = c(
              "span",
              { class: "viewport-mask top" },
              null,
              -1
              /* HOISTED */
            )),
            d[9] || (d[9] = c(
              "span",
              { class: "viewport-mask right" },
              null,
              -1
              /* HOISTED */
            )),
            d[10] || (d[10] = c(
              "span",
              { class: "viewport-mask bottom" },
              null,
              -1
              /* HOISTED */
            )),
            d[11] || (d[11] = c(
              "span",
              { class: "viewport-mask left" },
              null,
              -1
              /* HOISTED */
            )),
            c("div", Ya, [
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
              d[4] || (d[4] = c(
                "span",
                { class: "viewport-border top" },
                null,
                -1
                /* HOISTED */
              )),
              d[5] || (d[5] = c(
                "span",
                { class: "viewport-border right" },
                null,
                -1
                /* HOISTED */
              )),
              d[6] || (d[6] = c(
                "span",
                { class: "viewport-border bottom" },
                null,
                -1
                /* HOISTED */
              )),
              d[7] || (d[7] = c(
                "span",
                { class: "viewport-border left" },
                null,
                -1
                /* HOISTED */
              ))
            ])
          ]),
          c("footer", Qa, [
            c(
              "span",
              {
                class: N(["status-dot", { active: u(r) === "recording", paused: u(r) === "paused" }])
              },
              null,
              2
              /* CLASS */
            ),
            ae(c("select", {
              "onUpdate:modelValue": d[1] || (d[1] = (O) => u(h).fps = O),
              disabled: $.value
            }, d[12] || (d[12] = [
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
            ]), 8, Xa), [
              [dt, u(h).fps]
            ]),
            d[15] || (d[15] = c(
              "span",
              { class: "unit" },
              "fps",
              -1
              /* HOISTED */
            )),
            ae(c("select", {
              "onUpdate:modelValue": d[2] || (d[2] = (O) => u(h).format = O),
              disabled: $.value
            }, d[13] || (d[13] = [
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
            ]), 8, ei), [
              [dt, u(h).format]
            ]),
            c("label", ti, [
              c("input", {
                value: s.value.width,
                readonly: ""
              }, null, 8, ni)
            ]),
            d[16] || (d[16] = c(
              "span",
              { class: "multiply" },
              "×",
              -1
              /* HOISTED */
            )),
            c("label", si, [
              c("input", {
                value: s.value.height,
                readonly: ""
              }, null, 8, oi)
            ]),
            d[17] || (d[17] = c(
              "span",
              { class: "unit" },
              "px",
              -1
              /* HOISTED */
            )),
            u(r) === "ready" || u(r) === "completed" ? (b(), I(
              "button",
              {
                key: 0,
                class: "icon-control",
                title: "拖到目标窗口并松开以对齐",
                onMousedown: ge(Nn, ["prevent"])
              },
              " ◎ ",
              32
              /* NEED_HYDRATION */
            )) : V("v-if", !0),
            u(r) === "recording" || u(r) === "paused" ? (b(), I(
              fe,
              { key: 1 },
              [
                c(
                  "span",
                  ai,
                  z(W.value),
                  1
                  /* TEXT */
                ),
                c(
                  "button",
                  {
                    class: "control-button",
                    onClick: d[3] || (d[3] = (O) => u(r) === "paused" ? On() : Sn())
                  },
                  z(u(r) === "paused" ? g.$t("screenRecorder.resume") : g.$t("screenRecorder.pause")),
                  1
                  /* TEXT */
                ),
                c(
                  "button",
                  {
                    class: "control-button danger",
                    onClick: xn
                  },
                  z(g.$t("screenRecorder.stop")),
                  1
                  /* TEXT */
                )
              ],
              64
              /* STABLE_FRAGMENT */
            )) : u(r) === "exporting" ? (b(), I(
              "span",
              ii,
              z(g.$t("screenRecorder.exporting") || "正在导出..."),
              1
              /* TEXT */
            )) : u(r) === "completed" && u(p) ? (b(), I(
              fe,
              { key: 3 },
              [
                c("span", {
                  class: "save-status",
                  title: u(p).path
                }, z(g.$t("screenRecorder.exportDone") || "已保存"), 9, ri),
                c(
                  "button",
                  {
                    class: "control-button",
                    onClick: En
                  },
                  z(g.$t("screenRecorder.openFile") || "打开"),
                  1
                  /* TEXT */
                ),
                c(
                  "button",
                  {
                    class: "control-button",
                    onClick: zn
                  },
                  z(g.$t("screenRecorder.openFolder") || "定位"),
                  1
                  /* TEXT */
                ),
                c(
                  "button",
                  {
                    class: "control-button",
                    onClick: In
                  },
                  z(g.$t("screenRecorder.recordAgain") || "重录"),
                  1
                  /* TEXT */
                )
              ],
              64
              /* STABLE_FRAGMENT */
            )) : (b(), I("button", {
              key: 4,
              class: "record-button",
              disabled: u(f)?.available === !1 || s.value.width < Ie || s.value.height < Ie,
              onClick: Cn
            }, [
              d[14] || (d[14] = c(
                "span",
                null,
                null,
                -1
                /* HOISTED */
              )),
              Lt(
                " " + z(g.$t("screenRecorder.start")),
                1
                /* TEXT */
              )
            ], 8, li))
          ])
        ],
        2
        /* CLASS */
      ),
      u(f) && !u(f).available ? (b(), I(
        "p",
        ui,
        z(u(f).message || g.$t("screenRecorder.ffmpegMissing")),
        1
        /* TEXT */
      )) : V("v-if", !0)
    ]));
  }
}), fi = (e, t) => {
  const n = e.__vccOpts || e;
  for (const [s, o] of t)
    n[s] = o;
  return n;
}, gi = /* @__PURE__ */ fi(hi, [["__scopeId", "data-v-4939f0a7"]]), yi = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: gi
}, Symbol.toStringTag, { value: "Module" }));
export {
  mi as activate
};
