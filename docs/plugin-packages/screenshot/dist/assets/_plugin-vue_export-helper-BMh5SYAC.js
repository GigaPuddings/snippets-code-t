import { x as Mn, c as H, V as Zt, s as pr, r as Nr, S as Lr, a as Fe, w as en, k as br, l as Or, d as Gt, U as Fn, W as Tr, F as Un } from "./runtime-entry-wpUErwqM.js";
function yr(e, t, n, r) {
  if (typeof t == "function" ? e !== t || !0 : !t.has(e)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
  return n === "m" ? r : n === "a" ? r.call(e) : r ? r.value : t.get(e);
}
function wr(e, t, n, r, s) {
  if (typeof t == "function" ? e !== t || !0 : !t.has(e)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
  return t.set(e, n), n;
}
var Qe;
const se = "__TAURI_TO_IPC_KEY__";
function Ir(e, t = !1) {
  return window.__TAURI_INTERNALS__.transformCallback(e, t);
}
async function b(e, t = {}, n) {
  return window.__TAURI_INTERNALS__.invoke(e, t, n);
}
function Bi(e, t = "asset") {
  return window.__TAURI_INTERNALS__.convertFileSrc(e, t);
}
class Cr {
  get rid() {
    return yr(this, Qe, "f");
  }
  constructor(t) {
    Qe.set(this, void 0), wr(this, Qe, t);
  }
  /**
   * Destroys and cleans up this resource from memory.
   * **You should not call any method on this object anymore and should drop any reference to it.**
   */
  async close() {
    return b("plugin:resources|close", {
      rid: this.rid
    });
  }
}
Qe = /* @__PURE__ */ new WeakMap();
class Wn {
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
    return new We(this.width * t, this.height * t);
  }
  [se]() {
    return {
      width: this.width,
      height: this.height
    };
  }
  toJSON() {
    return this[se]();
  }
}
class We {
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
    return new Wn(this.width / t, this.height / t);
  }
  [se]() {
    return {
      width: this.width,
      height: this.height
    };
  }
  toJSON() {
    return this[se]();
  }
}
class ke {
  constructor(t) {
    this.size = t;
  }
  toLogical(t) {
    return this.size instanceof Wn ? this.size : this.size.toLogical(t);
  }
  toPhysical(t) {
    return this.size instanceof We ? this.size : this.size.toPhysical(t);
  }
  [se]() {
    return {
      [`${this.size.type}`]: {
        width: this.size.width,
        height: this.size.height
      }
    };
  }
  toJSON() {
    return this[se]();
  }
}
class Vn {
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
    return new ge(this.x * t, this.y * t);
  }
  [se]() {
    return {
      x: this.x,
      y: this.y
    };
  }
  toJSON() {
    return this[se]();
  }
}
class ge {
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
    return new Vn(this.x / t, this.y / t);
  }
  [se]() {
    return {
      x: this.x,
      y: this.y
    };
  }
  toJSON() {
    return this[se]();
  }
}
class Xe {
  constructor(t) {
    this.position = t;
  }
  toLogical(t) {
    return this.position instanceof Vn ? this.position : this.position.toLogical(t);
  }
  toPhysical(t) {
    return this.position instanceof ge ? this.position : this.position.toPhysical(t);
  }
  [se]() {
    return {
      [`${this.position.type}`]: {
        x: this.position.x,
        y: this.position.y
      }
    };
  }
  toJSON() {
    return this[se]();
  }
}
var te;
(function(e) {
  e.WINDOW_RESIZED = "tauri://resize", e.WINDOW_MOVED = "tauri://move", e.WINDOW_CLOSE_REQUESTED = "tauri://close-requested", e.WINDOW_DESTROYED = "tauri://destroyed", e.WINDOW_FOCUS = "tauri://focus", e.WINDOW_BLUR = "tauri://blur", e.WINDOW_SCALE_FACTOR_CHANGED = "tauri://scale-change", e.WINDOW_THEME_CHANGED = "tauri://theme-changed", e.WINDOW_CREATED = "tauri://window-created", e.WEBVIEW_CREATED = "tauri://webview-created", e.DRAG_ENTER = "tauri://drag-enter", e.DRAG_OVER = "tauri://drag-over", e.DRAG_DROP = "tauri://drag-drop", e.DRAG_LEAVE = "tauri://drag-leave";
})(te || (te = {}));
async function xn(e, t) {
  await b("plugin:event|unlisten", {
    event: e,
    eventId: t
  });
}
async function Gn(e, t, n) {
  var r;
  const s = typeof n?.target == "string" ? { kind: "AnyLabel", label: n.target } : (r = n?.target) !== null && r !== void 0 ? r : { kind: "Any" };
  return b("plugin:event|listen", {
    event: e,
    target: s,
    handler: Ir(t)
  }).then((i) => async () => xn(e, i));
}
async function kr(e, t, n) {
  return Gn(e, (r) => {
    xn(e, r.id), t(r);
  }, n);
}
async function Ar(e, t) {
  await b("plugin:event|emit", {
    event: e,
    payload: t
  });
}
async function vr(e, t, n) {
  await b("plugin:event|emit_to", {
    target: typeof e == "string" ? { kind: "AnyLabel", label: e } : e,
    event: t,
    payload: n
  });
}
class Ve extends Cr {
  /**
   * Creates an Image from a resource ID. For internal use only.
   *
   * @ignore
   */
  constructor(t) {
    super(t);
  }
  /** Creates a new Image using RGBA data, in row-major order from top to bottom, and with specified width and height. */
  static async new(t, n, r) {
    return b("plugin:image|new", {
      rgba: et(t),
      width: n,
      height: r
    }).then((s) => new Ve(s));
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
    return b("plugin:image|from_bytes", {
      bytes: et(t)
    }).then((n) => new Ve(n));
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
    return b("plugin:image|from_path", { path: t }).then((n) => new Ve(n));
  }
  /** Returns the RGBA data for this image, in row-major order from top to bottom.  */
  async rgba() {
    return b("plugin:image|rgba", {
      rid: this.rid
    }).then((t) => new Uint8Array(t));
  }
  /** Returns the size of this image.  */
  async size() {
    return b("plugin:image|size", { rid: this.rid });
  }
}
function et(e) {
  return e == null ? null : typeof e == "string" ? e : e instanceof Ve ? e.rid : e;
}
var At;
(function(e) {
  e[e.Critical = 1] = "Critical", e[e.Informational = 2] = "Informational";
})(At || (At = {}));
class Dr {
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
var tn;
(function(e) {
  e.None = "none", e.Normal = "normal", e.Indeterminate = "indeterminate", e.Paused = "paused", e.Error = "error";
})(tn || (tn = {}));
function Sr() {
  return new $n(window.__TAURI_INTERNALS__.metadata.currentWindow.label, {
    // @ts-expect-error `skip` is not defined in the public API but it is handled by the constructor
    skip: !0
  });
}
async function yt() {
  return b("plugin:window|get_all_windows").then((e) => e.map((t) => new $n(t, {
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
    var r;
    this.label = t, this.listeners = /* @__PURE__ */ Object.create(null), n?.skip || b("plugin:window|create", {
      options: {
        ...n,
        parent: typeof n.parent == "string" ? n.parent : (r = n.parent) === null || r === void 0 ? void 0 : r.label,
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
    return (n = (await yt()).find((r) => r.label === t)) !== null && n !== void 0 ? n : null;
  }
  /**
   * Get an instance of `Window` for the current window.
   */
  static getCurrent() {
    return Sr();
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
      const r = this.listeners[t];
      r.splice(r.indexOf(n), 1);
    } : Gn(t, n, {
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
      const r = this.listeners[t];
      r.splice(r.indexOf(n), 1);
    } : kr(t, n, {
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
      for (const r of this.listeners[t] || [])
        r({
          event: t,
          id: -1,
          payload: n
        });
      return;
    }
    return Ar(t, n);
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
  async emitTo(t, n, r) {
    if (wt.includes(n)) {
      for (const s of this.listeners[n] || [])
        s({
          event: n,
          id: -1,
          payload: r
        });
      return;
    }
    return vr(t, n, r);
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
    return b("plugin:window|scale_factor", {
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
    return b("plugin:window|inner_position", {
      label: this.label
    }).then((t) => new ge(t));
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
    return b("plugin:window|outer_position", {
      label: this.label
    }).then((t) => new ge(t));
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
    return b("plugin:window|inner_size", {
      label: this.label
    }).then((t) => new We(t));
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
    return b("plugin:window|outer_size", {
      label: this.label
    }).then((t) => new We(t));
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
    return b("plugin:window|is_fullscreen", {
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
    return b("plugin:window|is_minimized", {
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
    return b("plugin:window|is_maximized", {
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
    return b("plugin:window|is_focused", {
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
    return b("plugin:window|is_decorated", {
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
    return b("plugin:window|is_resizable", {
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
    return b("plugin:window|is_maximizable", {
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
    return b("plugin:window|is_minimizable", {
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
    return b("plugin:window|is_closable", {
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
    return b("plugin:window|is_visible", {
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
    return b("plugin:window|title", {
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
    return b("plugin:window|theme", {
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
    return b("plugin:window|is_always_on_top", {
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
    return b("plugin:window|center", {
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
    return t && (t === At.Critical ? n = { type: "Critical" } : n = { type: "Informational" }), b("plugin:window|request_user_attention", {
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
    return b("plugin:window|set_resizable", {
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
    return b("plugin:window|set_enabled", {
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
    return b("plugin:window|is_enabled", {
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
    return b("plugin:window|set_maximizable", {
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
    return b("plugin:window|set_minimizable", {
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
    return b("plugin:window|set_closable", {
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
    return b("plugin:window|set_title", {
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
    return b("plugin:window|maximize", {
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
    return b("plugin:window|unmaximize", {
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
    return b("plugin:window|toggle_maximize", {
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
    return b("plugin:window|minimize", {
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
    return b("plugin:window|unminimize", {
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
    return b("plugin:window|show", {
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
    return b("plugin:window|hide", {
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
    return b("plugin:window|close", {
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
    return b("plugin:window|destroy", {
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
    return b("plugin:window|set_decorations", {
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
    return b("plugin:window|set_shadow", {
      label: this.label,
      value: t
    });
  }
  /**
   * Set window effects.
   */
  async setEffects(t) {
    return b("plugin:window|set_effects", {
      label: this.label,
      value: t
    });
  }
  /**
   * Clear any applied effects if possible.
   */
  async clearEffects() {
    return b("plugin:window|set_effects", {
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
    return b("plugin:window|set_always_on_top", {
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
    return b("plugin:window|set_always_on_bottom", {
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
    return b("plugin:window|set_content_protected", {
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
    return b("plugin:window|set_size", {
      label: this.label,
      value: t instanceof ke ? t : new ke(t)
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
    return b("plugin:window|set_min_size", {
      label: this.label,
      value: t instanceof ke ? t : t ? new ke(t) : null
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
    return b("plugin:window|set_max_size", {
      label: this.label,
      value: t instanceof ke ? t : t ? new ke(t) : null
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
    function n(r) {
      return r ? { Logical: r } : null;
    }
    return b("plugin:window|set_size_constraints", {
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
    return b("plugin:window|set_position", {
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
    return b("plugin:window|set_fullscreen", {
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
    return b("plugin:window|set_focus", {
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
    return b("plugin:window|set_icon", {
      label: this.label,
      value: et(t)
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
    return b("plugin:window|set_skip_taskbar", {
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
    return b("plugin:window|set_cursor_grab", {
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
    return b("plugin:window|set_cursor_visible", {
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
    return b("plugin:window|set_cursor_icon", {
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
    return b("plugin:window|set_background_color", { color: t });
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
    return b("plugin:window|set_cursor_position", {
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
    return b("plugin:window|set_ignore_cursor_events", {
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
    return b("plugin:window|start_dragging", {
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
    return b("plugin:window|start_resize_dragging", {
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
    return b("plugin:window|set_badge_count", {
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
    return b("plugin:window|set_badge_label", {
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
    return b("plugin:window|set_overlay_icon", {
      label: this.label,
      value: t ? et(t) : void 0
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
    return b("plugin:window|set_progress_bar", {
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
    return b("plugin:window|set_visible_on_all_workspaces", {
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
    return b("plugin:window|set_title_bar_style", {
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
    return b("plugin:window|set_theme", {
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
    return this.listen(te.WINDOW_RESIZED, (n) => {
      n.payload = new We(n.payload), t(n);
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
    return this.listen(te.WINDOW_MOVED, (n) => {
      n.payload = new ge(n.payload), t(n);
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
    return this.listen(te.WINDOW_CLOSE_REQUESTED, async (n) => {
      const r = new Dr(n);
      await t(r), r.isPreventDefault() || await this.destroy();
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
    const n = await this.listen(te.DRAG_ENTER, (o) => {
      t({
        ...o,
        payload: {
          type: "enter",
          paths: o.payload.paths,
          position: new ge(o.payload.position)
        }
      });
    }), r = await this.listen(te.DRAG_OVER, (o) => {
      t({
        ...o,
        payload: {
          type: "over",
          position: new ge(o.payload.position)
        }
      });
    }), s = await this.listen(te.DRAG_DROP, (o) => {
      t({
        ...o,
        payload: {
          type: "drop",
          paths: o.payload.paths,
          position: new ge(o.payload.position)
        }
      });
    }), i = await this.listen(te.DRAG_LEAVE, (o) => {
      t({ ...o, payload: { type: "leave" } });
    });
    return () => {
      n(), s(), r(), i();
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
    const n = await this.listen(te.WINDOW_FOCUS, (s) => {
      t({ ...s, payload: !0 });
    }), r = await this.listen(te.WINDOW_BLUR, (s) => {
      t({ ...s, payload: !1 });
    });
    return () => {
      n(), r();
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
    return this.listen(te.WINDOW_SCALE_FACTOR_CHANGED, t);
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
    return this.listen(te.WINDOW_THEME_CHANGED, t);
  }
}
var nn;
(function(e) {
  e.Disabled = "disabled", e.Throttle = "throttle", e.Suspend = "suspend";
})(nn || (nn = {}));
var rn;
(function(e) {
  e.AppearanceBased = "appearanceBased", e.Light = "light", e.Dark = "dark", e.MediumLight = "mediumLight", e.UltraDark = "ultraDark", e.Titlebar = "titlebar", e.Selection = "selection", e.Menu = "menu", e.Popover = "popover", e.Sidebar = "sidebar", e.HeaderView = "headerView", e.Sheet = "sheet", e.WindowBackground = "windowBackground", e.HudWindow = "hudWindow", e.FullScreenUI = "fullScreenUI", e.Tooltip = "tooltip", e.ContentBackground = "contentBackground", e.UnderWindowBackground = "underWindowBackground", e.UnderPageBackground = "underPageBackground", e.Mica = "mica", e.Blur = "blur", e.Acrylic = "acrylic", e.Tabbed = "tabbed", e.TabbedDark = "tabbedDark", e.TabbedLight = "tabbedLight";
})(rn || (rn = {}));
var sn;
(function(e) {
  e.FollowsWindowActiveState = "followsWindowActiveState", e.Active = "active", e.Inactive = "inactive";
})(sn || (sn = {}));
const Ki = {
  info: (e, t, ...n) => {
    b("frontend_log", {
      level: "info",
      message: e,
      data: t ? JSON.stringify(t, null, 2) : null
    }).catch(() => {
    });
  },
  error: (e, t) => {
    b("frontend_log", {
      level: "error",
      message: e,
      data: t ? JSON.stringify(t, null, 2) : null
    }).catch(() => {
    });
  },
  warn: (e, t) => {
    b("frontend_log", {
      level: "warn",
      message: e,
      data: t ? JSON.stringify(t, null, 2) : null
    }).catch(() => {
    });
  },
  // 调试日志 - 只在开发模式或调试模式下输出
  debug: (e, t) => {
  }
}, Xi = {
  log: (e, t) => {
    b("append_ocr_diagnostic_log", {
      message: e,
      data: t === void 0 ? null : Pr(t)
    }).catch(() => {
    });
  }
};
function Pr(e) {
  if (e instanceof Error)
    return `${e.name}: ${e.message}
${e.stack || ""}`.trim();
  if (typeof e == "string")
    return e;
  try {
    return JSON.stringify(e, null, 2);
  } catch {
    return String(e);
  }
}
function Rr(e) {
  if (!e) return "unknown";
  const t = e.match(/[\u4e00-\u9fa5]/g), n = t ? t.length : 0, r = e.match(/[\u3040-\u30ff]/g), s = r ? r.length : 0, i = e.match(/[\uac00-\ud7af]/g), o = i ? i.length : 0, u = e.match(/[a-zA-Z]/g), c = u ? u.length : 0, O = n + s + o + c;
  return O === 0 ? "unknown" : s >= 3 && s > c && s / O >= 0.2 ? "ja" : o >= 3 && o > n && o > c && o / O >= 0.2 ? "ko" : n > c ? "zh" : c > n ? "en" : "unknown";
}
function zi(e) {
  return e === "zh" || e === "en";
}
function Ji(e) {
  return Rr(e);
}
var Mr = {
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
function Fr() {
  return "icon-" + ((1 + Math.random()) * 4294967296 | 0).toString(16).substring(1);
}
function Ur(e, t, n) {
  var r = typeof t.fill == "string" ? [t.fill] : t.fill || [], s = [], i = t.theme || n.theme;
  switch (i) {
    case "outline":
      s.push(typeof r[0] == "string" ? r[0] : "currentColor"), s.push("none"), s.push(typeof r[0] == "string" ? r[0] : "currentColor"), s.push("none");
      break;
    case "filled":
      s.push(typeof r[0] == "string" ? r[0] : "currentColor"), s.push(typeof r[0] == "string" ? r[0] : "currentColor"), s.push("#FFF"), s.push("#FFF");
      break;
    case "two-tone":
      s.push(typeof r[0] == "string" ? r[0] : "currentColor"), s.push(typeof r[1] == "string" ? r[1] : n.colors.twoTone.twoTone), s.push(typeof r[0] == "string" ? r[0] : "currentColor"), s.push(typeof r[1] == "string" ? r[1] : n.colors.twoTone.twoTone);
      break;
    case "multi-color":
      s.push(typeof r[0] == "string" ? r[0] : "currentColor"), s.push(typeof r[1] == "string" ? r[1] : n.colors.multiColor.outFillColor), s.push(typeof r[2] == "string" ? r[2] : n.colors.multiColor.innerStrokeColor), s.push(typeof r[3] == "string" ? r[3] : n.colors.multiColor.innerFillColor);
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
var Wr = Symbol("icon-context");
function je(e, t, n) {
  var r = {
    name: "icon-" + e,
    props: ["size", "strokeWidth", "strokeLinecap", "strokeLinejoin", "theme", "fill", "spin"],
    setup: function(i) {
      var o = Fr(), u = Mn(Wr, Mr);
      return function() {
        var c = i.size, g = i.strokeWidth, O = i.strokeLinecap, T = i.strokeLinejoin, N = i.theme, v = i.fill, S = i.spin, C = Ur(o, {
          size: c,
          strokeWidth: g,
          strokeLinecap: O,
          strokeLinejoin: T,
          theme: N,
          fill: v
        }, u), k = [u.prefix + "-icon"];
        return k.push(u.prefix + "-icon-" + e), t && u.rtl && k.push(u.prefix + "-icon-rtl"), S && k.push(u.prefix + "-icon-spin"), H("span", {
          class: k.join(" ")
        }, [n(C)]);
      };
    }
  };
  return r;
}
const qi = je("check", !0, function(e) {
  return H("svg", {
    width: e.size,
    height: e.size,
    viewBox: "0 0 48 48",
    fill: "none"
  }, [H("path", {
    d: "M43 11L16.875 37L5 25.1818",
    stroke: e.colors[0],
    "stroke-width": e.strokeWidth,
    "stroke-linecap": e.strokeLinecap,
    "stroke-linejoin": e.strokeLinejoin
  }, null)]);
}), Qi = je("close", !1, function(e) {
  return H("svg", {
    width: e.size,
    height: e.size,
    viewBox: "0 0 48 48",
    fill: "none"
  }, [H("path", {
    d: "M8 8L40 40",
    stroke: e.colors[0],
    "stroke-width": e.strokeWidth,
    "stroke-linecap": e.strokeLinecap,
    "stroke-linejoin": e.strokeLinejoin
  }, null), H("path", {
    d: "M8 40L40 8",
    stroke: e.colors[0],
    "stroke-width": e.strokeWidth,
    "stroke-linecap": e.strokeLinecap,
    "stroke-linejoin": e.strokeLinejoin
  }, null)]);
}), Zi = je("pushpin", !1, function(e) {
  return H("svg", {
    width: e.size,
    height: e.size,
    viewBox: "0 0 48 48",
    fill: "none"
  }, [H("path", {
    d: "M32 4H16L20 7L16 20C16 20 10 24 10 28H20L24 44L28 28H38C38 24 34 21.1667 32 20L28 7L32 4Z",
    fill: e.colors[1],
    stroke: e.colors[0],
    "stroke-width": e.strokeWidth,
    "stroke-linecap": e.strokeLinecap,
    "stroke-linejoin": e.strokeLinejoin
  }, null)]);
}), ea = je("text-recognition", !1, function(e) {
  return H("svg", {
    width: e.size,
    height: e.size,
    viewBox: "0 0 48 48",
    fill: "none"
  }, [H("path", {
    d: "M6 33V39C6 40.6569 7.34315 42 9 42H15",
    stroke: e.colors[0],
    "stroke-width": e.strokeWidth,
    "stroke-linecap": e.strokeLinecap,
    "stroke-linejoin": e.strokeLinejoin
  }, null), H("path", {
    d: "M33 42H39C40.6569 42 42 40.6569 42 39V33",
    stroke: e.colors[0],
    "stroke-width": e.strokeWidth,
    "stroke-linecap": e.strokeLinecap,
    "stroke-linejoin": e.strokeLinejoin
  }, null), H("path", {
    d: "M42 15V9C42 7.34315 40.6569 6 39 6H33",
    stroke: e.colors[0],
    "stroke-width": e.strokeWidth,
    "stroke-linecap": e.strokeLinecap,
    "stroke-linejoin": e.strokeLinejoin
  }, null), H("path", {
    d: "M6 15V9C6 7.34315 7.34315 6 9 6H15",
    stroke: e.colors[0],
    "stroke-width": e.strokeWidth,
    "stroke-linecap": e.strokeLinecap,
    "stroke-linejoin": e.strokeLinejoin
  }, null), H("path", {
    d: "M24 15V35",
    stroke: e.colors[0],
    "stroke-width": e.strokeWidth,
    "stroke-linecap": e.strokeLinecap,
    "stroke-linejoin": e.strokeLinejoin
  }, null), H("path", {
    d: "M17 15H24H31",
    stroke: e.colors[0],
    "stroke-width": e.strokeWidth,
    "stroke-linecap": e.strokeLinecap,
    "stroke-linejoin": e.strokeLinejoin
  }, null)]);
}), ta = je("translate", !0, function(e) {
  return H("svg", {
    width: e.size,
    height: e.size,
    viewBox: "0 0 48 48",
    fill: "none"
  }, [H("path", {
    d: "M28.2857 37H39.7143M42 42L39.7143 37L42 42ZM26 42L28.2857 37L26 42ZM28.2857 37L34 24L39.7143 37H28.2857Z",
    stroke: e.colors[0],
    "stroke-width": e.strokeWidth,
    "stroke-linecap": e.strokeLinecap,
    "stroke-linejoin": e.strokeLinejoin
  }, null), H("path", {
    d: "M16 6L17 9",
    stroke: e.colors[0],
    "stroke-width": e.strokeWidth,
    "stroke-linecap": e.strokeLinecap,
    "stroke-linejoin": e.strokeLinejoin
  }, null), H("path", {
    d: "M6 11H28",
    stroke: e.colors[0],
    "stroke-width": e.strokeWidth,
    "stroke-linecap": e.strokeLinecap,
    "stroke-linejoin": e.strokeLinejoin
  }, null), H("path", {
    d: "M10 16C10 16 11.7895 22.2609 16.2632 25.7391C20.7368 29.2174 28 32 28 32",
    stroke: e.colors[0],
    "stroke-width": e.strokeWidth,
    "stroke-linecap": e.strokeLinecap,
    "stroke-linejoin": e.strokeLinejoin
  }, null), H("path", {
    d: "M24 11C24 11 22.2105 19.2174 17.7368 23.7826C13.2632 28.3478 6 32 6 32",
    stroke: e.colors[0],
    "stroke-width": e.strokeWidth,
    "stroke-linecap": e.strokeLinecap,
    "stroke-linejoin": e.strokeLinejoin
  }, null)]);
});
/*!
  * shared v11.2.2
  * (c) 2025 kazuya kawaguchi
  * Released under the MIT License.
  */
function fe(e, t) {
  typeof console < "u" && (console.warn("[intlify] " + e), t && console.warn(t.stack));
}
const an = {};
function Vr(e) {
  an[e] || (an[e] = !0, fe(e));
}
const he = typeof window < "u";
let ne, ye;
if (process.env.NODE_ENV !== "production") {
  const e = he && window.performance;
  e && e.mark && e.measure && e.clearMarks && // @ts-ignore browser compat
  e.clearMeasures && (ne = (t) => {
    e.mark(t);
  }, ye = (t, n, r) => {
    e.measure(t, n, r), e.clearMarks(n), e.clearMarks(r);
  });
}
const xr = /\{([0-9a-zA-Z]+)\}/g;
function it(e, ...t) {
  return t.length === 1 && F(t[0]) && (t = t[0]), (!t || !t.hasOwnProperty) && (t = {}), e.replace(xr, (n, r) => t.hasOwnProperty(r) ? t[r] : "");
}
const Ee = (e, t = !1) => t ? Symbol.for(e) : Symbol(e), Gr = (e, t, n) => $r({ l: e, k: t, s: n }), $r = (e) => JSON.stringify(e).replace(/\u2028/g, "\\u2028").replace(/\u2029/g, "\\u2029").replace(/\u0027/g, "\\u0027"), z = (e) => typeof e == "number" && isFinite(e), Hr = (e) => $t(e) === "[object Date]", tt = (e) => $t(e) === "[object RegExp]", at = (e) => M(e) && Object.keys(e).length === 0, J = Object.assign, jr = Object.create, V = (e = null) => jr(e);
let ln;
const Te = () => ln || (ln = typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : typeof window < "u" ? window : typeof global < "u" ? global : V());
function on(e) {
  return e.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;").replace(/'/g, "&apos;").replace(/\//g, "&#x2F;").replace(/=/g, "&#x3D;");
}
function cn(e) {
  return e.replace(/&(?![a-zA-Z0-9#]{2,6};)/g, "&amp;").replace(/"/g, "&quot;").replace(/'/g, "&apos;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
}
function Yr(e) {
  return e = e.replace(/(\w+)\s*=\s*"([^"]*)"/g, (r, s, i) => `${s}="${cn(i)}"`), e = e.replace(/(\w+)\s*=\s*'([^']*)'/g, (r, s, i) => `${s}='${cn(i)}'`), /\s*on\w+\s*=\s*["']?[^"'>]+["']?/gi.test(e) && (process.env.NODE_ENV !== "production" && fe("Potentially dangerous event handlers detected in translation. Consider removing onclick, onerror, etc. from your translation messages."), e = e.replace(/(\s+)(on)(\w+\s*=)/gi, "$1&#111;n$3")), [
    // In href, src, action, formaction attributes
    /(\s+(?:href|src|action|formaction)\s*=\s*["']?)\s*javascript:/gi,
    // In style attributes within url()
    /(style\s*=\s*["'][^"']*url\s*\(\s*)javascript:/gi
  ].forEach((r) => {
    e = e.replace(r, "$1javascript&#58;");
  }), e;
}
const Br = Object.prototype.hasOwnProperty;
function ae(e, t) {
  return Br.call(e, t);
}
const K = Array.isArray, G = (e) => typeof e == "function", I = (e) => typeof e == "string", B = (e) => typeof e == "boolean", F = (e) => e !== null && typeof e == "object", Kr = (e) => F(e) && G(e.then) && G(e.catch), Hn = Object.prototype.toString, $t = (e) => Hn.call(e), M = (e) => $t(e) === "[object Object]", Xr = (e) => e == null ? "" : K(e) || M(e) && e.toString === Hn ? JSON.stringify(e, null, 2) : String(e);
function Ht(e, t = "") {
  return e.reduce((n, r, s) => s === 0 ? n + r : n + t + r, "");
}
const un = 2;
function zr(e, t = 0, n = e.length) {
  const r = e.split(/\r?\n/);
  let s = 0;
  const i = [];
  for (let o = 0; o < r.length; o++)
    if (s += r[o].length + 1, s >= t) {
      for (let u = o - un; u <= o + un || n > s; u++) {
        if (u < 0 || u >= r.length)
          continue;
        const c = u + 1;
        i.push(`${c}${" ".repeat(3 - String(c).length)}|  ${r[u]}`);
        const g = r[u].length;
        if (u === o) {
          const O = t - (s - g) + 1, T = Math.max(1, n > s ? g - O : n - t);
          i.push("   |  " + " ".repeat(O) + "^".repeat(T));
        } else if (u > o) {
          if (n > s) {
            const O = Math.max(Math.min(n - s, g), 1);
            i.push("   |  " + "^".repeat(O));
          }
          s += g + 1;
        }
      }
      break;
    }
  return i.join(`
`);
}
function Jr() {
  const e = /* @__PURE__ */ new Map();
  return {
    events: e,
    on(n, r) {
      const s = e.get(n);
      s && s.push(r) || e.set(n, [r]);
    },
    off(n, r) {
      const s = e.get(n);
      s && s.splice(s.indexOf(r) >>> 0, 1);
    },
    emit(n, r) {
      (e.get(n) || []).slice().map((s) => s(r)), (e.get("*") || []).slice().map((s) => s(n, r));
    }
  };
}
const ze = (e) => !F(e) || K(e);
function Ze(e, t) {
  if (ze(e) || ze(t))
    throw new Error("Invalid value");
  const n = [{ src: e, des: t }];
  for (; n.length; ) {
    const { src: r, des: s } = n.pop();
    Object.keys(r).forEach((i) => {
      i !== "__proto__" && (F(r[i]) && !F(s[i]) && (s[i] = Array.isArray(r[i]) ? [] : V()), ze(s[i]) || ze(r[i]) ? s[i] = r[i] : n.push({ src: r[i], des: s[i] }));
    });
  }
}
/*!
  * message-compiler v11.2.2
  * (c) 2025 kazuya kawaguchi
  * Released under the MIT License.
  */
function qr(e, t, n) {
  return { line: e, column: t, offset: n };
}
function vt(e, t, n) {
  return { start: e, end: t };
}
const D = {
  // tokenizer error codes
  EXPECTED_TOKEN: 1,
  INVALID_TOKEN_IN_PLACEHOLDER: 2,
  UNTERMINATED_SINGLE_QUOTE_IN_PLACEHOLDER: 3,
  UNKNOWN_ESCAPE_SEQUENCE: 4,
  INVALID_UNICODE_ESCAPE_SEQUENCE: 5,
  UNBALANCED_CLOSING_BRACE: 6,
  UNTERMINATED_CLOSING_BRACE: 7,
  EMPTY_PLACEHOLDER: 8,
  NOT_ALLOW_NEST_PLACEHOLDER: 9,
  INVALID_LINKED_FORMAT: 10,
  // parser error codes
  MUST_HAVE_MESSAGES_IN_PLURAL: 11,
  UNEXPECTED_EMPTY_LINKED_MODIFIER: 12,
  UNEXPECTED_EMPTY_LINKED_KEY: 13,
  UNEXPECTED_LEXICAL_ANALYSIS: 14,
  // generator error codes
  UNHANDLED_CODEGEN_NODE_TYPE: 15,
  // minifier error codes
  UNHANDLED_MINIFIER_NODE_TYPE: 16
}, Qr = 17, Zr = {
  // tokenizer error messages
  [D.EXPECTED_TOKEN]: "Expected token: '{0}'",
  [D.INVALID_TOKEN_IN_PLACEHOLDER]: "Invalid token in placeholder: '{0}'",
  [D.UNTERMINATED_SINGLE_QUOTE_IN_PLACEHOLDER]: "Unterminated single quote in placeholder",
  [D.UNKNOWN_ESCAPE_SEQUENCE]: "Unknown escape sequence: \\{0}",
  [D.INVALID_UNICODE_ESCAPE_SEQUENCE]: "Invalid unicode escape sequence: {0}",
  [D.UNBALANCED_CLOSING_BRACE]: "Unbalanced closing brace",
  [D.UNTERMINATED_CLOSING_BRACE]: "Unterminated closing brace",
  [D.EMPTY_PLACEHOLDER]: "Empty placeholder",
  [D.NOT_ALLOW_NEST_PLACEHOLDER]: "Not allowed nest placeholder",
  [D.INVALID_LINKED_FORMAT]: "Invalid linked format",
  // parser error messages
  [D.MUST_HAVE_MESSAGES_IN_PLURAL]: "Plural must have messages",
  [D.UNEXPECTED_EMPTY_LINKED_MODIFIER]: "Unexpected empty linked modifier",
  [D.UNEXPECTED_EMPTY_LINKED_KEY]: "Unexpected empty linked key",
  [D.UNEXPECTED_LEXICAL_ANALYSIS]: "Unexpected lexical analysis in token: '{0}'",
  // generator error messages
  [D.UNHANDLED_CODEGEN_NODE_TYPE]: "unhandled codegen node type: '{0}'",
  // minimizer error messages
  [D.UNHANDLED_MINIFIER_NODE_TYPE]: "unhandled mimifier node type: '{0}'"
};
function De(e, t, n = {}) {
  const { domain: r, messages: s, args: i } = n, o = process.env.NODE_ENV !== "production" ? it((s || Zr)[e] || "", ...i || []) : e, u = new SyntaxError(String(o));
  return u.code = e, t && (u.location = t), u.domain = r, u;
}
function es(e) {
  throw e;
}
const ts = /<\/?[\w\s="/.':;#-\/]+>/, ns = (e) => ts.test(e), oe = " ", rs = "\r", Q = `
`, ss = "\u2028", is = "\u2029";
function as(e) {
  const t = e;
  let n = 0, r = 1, s = 1, i = 0;
  const o = (E) => t[E] === rs && t[E + 1] === Q, u = (E) => t[E] === Q, c = (E) => t[E] === is, g = (E) => t[E] === ss, O = (E) => o(E) || u(E) || c(E) || g(E), T = () => n, N = () => r, v = () => s, S = () => i, C = (E) => o(E) || c(E) || g(E) ? Q : t[E], k = () => C(n), f = () => C(n + i);
  function d() {
    return i = 0, O(n) && (r++, s = 0), o(n) && n++, n++, s++, t[n];
  }
  function L() {
    return o(n + i) && i++, i++, t[n + i];
  }
  function m() {
    n = 0, r = 1, s = 1, i = 0;
  }
  function y(E = 0) {
    i = E;
  }
  function w() {
    const E = n + i;
    for (; E !== n; )
      d();
    i = 0;
  }
  return {
    index: T,
    line: N,
    column: v,
    peekOffset: S,
    charAt: C,
    currentChar: k,
    currentPeek: f,
    next: d,
    peek: L,
    reset: m,
    resetPeek: y,
    skipToPeek: w
  };
}
const de = void 0, ls = ".", fn = "'", os = "tokenizer";
function cs(e, t = {}) {
  const n = t.location !== !1, r = as(e), s = () => r.index(), i = () => qr(r.line(), r.column(), r.index()), o = i(), u = s(), c = {
    currentType: 13,
    offset: u,
    startLoc: o,
    endLoc: o,
    lastType: 13,
    lastOffset: u,
    lastStartLoc: o,
    lastEndLoc: o,
    braceNest: 0,
    inLinked: !1,
    text: ""
  }, g = () => c, { onError: O } = t;
  function T(a, l, h, ...A) {
    const x = g();
    if (l.column += h, l.offset += h, O) {
      const j = n ? vt(x.startLoc, l) : null, R = De(a, j, {
        domain: os,
        args: A
      });
      O(R);
    }
  }
  function N(a, l, h) {
    a.endLoc = i(), a.currentType = l;
    const A = { type: l };
    return n && (A.loc = vt(a.startLoc, a.endLoc)), h != null && (A.value = h), A;
  }
  const v = (a) => N(
    a,
    13
    /* TokenTypes.EOF */
  );
  function S(a, l) {
    return a.currentChar() === l ? (a.next(), l) : (T(D.EXPECTED_TOKEN, i(), 0, l), "");
  }
  function C(a) {
    let l = "";
    for (; a.currentPeek() === oe || a.currentPeek() === Q; )
      l += a.currentPeek(), a.peek();
    return l;
  }
  function k(a) {
    const l = C(a);
    return a.skipToPeek(), l;
  }
  function f(a) {
    if (a === de)
      return !1;
    const l = a.charCodeAt(0);
    return l >= 97 && l <= 122 || // a-z
    l >= 65 && l <= 90 || // A-Z
    l === 95;
  }
  function d(a) {
    if (a === de)
      return !1;
    const l = a.charCodeAt(0);
    return l >= 48 && l <= 57;
  }
  function L(a, l) {
    const { currentType: h } = l;
    if (h !== 2)
      return !1;
    C(a);
    const A = f(a.currentPeek());
    return a.resetPeek(), A;
  }
  function m(a, l) {
    const { currentType: h } = l;
    if (h !== 2)
      return !1;
    C(a);
    const A = a.currentPeek() === "-" ? a.peek() : a.currentPeek(), x = d(A);
    return a.resetPeek(), x;
  }
  function y(a, l) {
    const { currentType: h } = l;
    if (h !== 2)
      return !1;
    C(a);
    const A = a.currentPeek() === fn;
    return a.resetPeek(), A;
  }
  function w(a, l) {
    const { currentType: h } = l;
    if (h !== 7)
      return !1;
    C(a);
    const A = a.currentPeek() === ".";
    return a.resetPeek(), A;
  }
  function E(a, l) {
    const { currentType: h } = l;
    if (h !== 8)
      return !1;
    C(a);
    const A = f(a.currentPeek());
    return a.resetPeek(), A;
  }
  function P(a, l) {
    const { currentType: h } = l;
    if (!(h === 7 || h === 11))
      return !1;
    C(a);
    const A = a.currentPeek() === ":";
    return a.resetPeek(), A;
  }
  function W(a, l) {
    const { currentType: h } = l;
    if (h !== 9)
      return !1;
    const A = () => {
      const j = a.currentPeek();
      return j === "{" ? f(a.peek()) : j === "@" || j === "|" || j === ":" || j === "." || j === oe || !j ? !1 : j === Q ? (a.peek(), A()) : ie(a, !1);
    }, x = A();
    return a.resetPeek(), x;
  }
  function X(a) {
    C(a);
    const l = a.currentPeek() === "|";
    return a.resetPeek(), l;
  }
  function ie(a, l = !0) {
    const h = (x = !1, j = "") => {
      const R = a.currentPeek();
      return R === "{" || R === "@" || !R ? x : R === "|" ? !(j === oe || j === Q) : R === oe ? (a.peek(), h(!0, oe)) : R === Q ? (a.peek(), h(!0, Q)) : !0;
    }, A = h();
    return l && a.resetPeek(), A;
  }
  function $(a, l) {
    const h = a.currentChar();
    return h === de ? de : l(h) ? (a.next(), h) : null;
  }
  function Ie(a) {
    const l = a.charCodeAt(0);
    return l >= 97 && l <= 122 || // a-z
    l >= 65 && l <= 90 || // A-Z
    l >= 48 && l <= 57 || // 0-9
    l === 95 || // _
    l === 36;
  }
  function ct(a) {
    return $(a, Ie);
  }
  function ut(a) {
    const l = a.charCodeAt(0);
    return l >= 97 && l <= 122 || // a-z
    l >= 65 && l <= 90 || // A-Z
    l >= 48 && l <= 57 || // 0-9
    l === 95 || // _
    l === 36 || // $
    l === 45;
  }
  function ft(a) {
    return $(a, ut);
  }
  function _t(a) {
    const l = a.charCodeAt(0);
    return l >= 48 && l <= 57;
  }
  function dt(a) {
    return $(a, _t);
  }
  function mt(a) {
    const l = a.charCodeAt(0);
    return l >= 48 && l <= 57 || // 0-9
    l >= 65 && l <= 70 || // A-F
    l >= 97 && l <= 102;
  }
  function _e(a) {
    return $(a, mt);
  }
  function Se(a) {
    let l = "", h = "";
    for (; l = dt(a); )
      h += l;
    return h;
  }
  function ht(a) {
    let l = "";
    for (; ; ) {
      const h = a.currentChar();
      if (h === "{" || h === "}" || h === "@" || h === "|" || !h)
        break;
      if (h === oe || h === Q)
        if (ie(a))
          l += h, a.next();
        else {
          if (X(a))
            break;
          l += h, a.next();
        }
      else
        l += h, a.next();
    }
    return l;
  }
  function Et(a) {
    k(a);
    let l = "", h = "";
    for (; l = ft(a); )
      h += l;
    const A = a.currentChar();
    if (A && A !== "}" && A !== de && A !== oe && A !== Q && A !== "　") {
      const x = Be(a);
      return T(D.INVALID_TOKEN_IN_PLACEHOLDER, i(), 0, h + x), h + x;
    }
    return a.currentChar() === de && T(D.UNTERMINATED_CLOSING_BRACE, i(), 0), h;
  }
  function gt(a) {
    k(a);
    let l = "";
    return a.currentChar() === "-" ? (a.next(), l += `-${Se(a)}`) : l += Se(a), a.currentChar() === de && T(D.UNTERMINATED_CLOSING_BRACE, i(), 0), l;
  }
  function pt(a) {
    return a !== fn && a !== Q;
  }
  function qt(a) {
    k(a), S(a, "'");
    let l = "", h = "";
    for (; l = $(a, pt); )
      l === "\\" ? h += Nt(a) : h += l;
    const A = a.currentChar();
    return A === Q || A === de ? (T(D.UNTERMINATED_SINGLE_QUOTE_IN_PLACEHOLDER, i(), 0), A === Q && (a.next(), S(a, "'")), h) : (S(a, "'"), h);
  }
  function Nt(a) {
    const l = a.currentChar();
    switch (l) {
      case "\\":
      case "'":
        return a.next(), `\\${l}`;
      case "u":
        return Ye(a, l, 4);
      case "U":
        return Ye(a, l, 6);
      default:
        return T(D.UNKNOWN_ESCAPE_SEQUENCE, i(), 0, l), "";
    }
  }
  function Ye(a, l, h) {
    S(a, l);
    let A = "";
    for (let x = 0; x < h; x++) {
      const j = _e(a);
      if (!j) {
        T(D.INVALID_UNICODE_ESCAPE_SEQUENCE, i(), 0, `\\${l}${A}${a.currentChar()}`);
        break;
      }
      A += j;
    }
    return `\\${l}${A}`;
  }
  function Lt(a) {
    return a !== "{" && a !== "}" && a !== oe && a !== Q;
  }
  function Be(a) {
    k(a);
    let l = "", h = "";
    for (; l = $(a, Lt); )
      h += l;
    return h;
  }
  function bt(a) {
    let l = "", h = "";
    for (; l = ct(a); )
      h += l;
    return h;
  }
  function Ot(a) {
    const l = (h) => {
      const A = a.currentChar();
      return A === "{" || A === "@" || A === "|" || A === "(" || A === ")" || !A || A === oe ? h : (h += A, a.next(), l(h));
    };
    return l("");
  }
  function Pe(a) {
    k(a);
    const l = S(
      a,
      "|"
      /* TokenChars.Pipe */
    );
    return k(a), l;
  }
  function Re(a, l) {
    let h = null;
    switch (a.currentChar()) {
      case "{":
        return l.braceNest >= 1 && T(D.NOT_ALLOW_NEST_PLACEHOLDER, i(), 0), a.next(), h = N(
          l,
          2,
          "{"
          /* TokenChars.BraceLeft */
        ), k(a), l.braceNest++, h;
      case "}":
        return l.braceNest > 0 && l.currentType === 2 && T(D.EMPTY_PLACEHOLDER, i(), 0), a.next(), h = N(
          l,
          3,
          "}"
          /* TokenChars.BraceRight */
        ), l.braceNest--, l.braceNest > 0 && k(a), l.inLinked && l.braceNest === 0 && (l.inLinked = !1), h;
      case "@":
        return l.braceNest > 0 && T(D.UNTERMINATED_CLOSING_BRACE, i(), 0), h = Le(a, l) || v(l), l.braceNest = 0, h;
      default: {
        let x = !0, j = !0, R = !0;
        if (X(a))
          return l.braceNest > 0 && T(D.UNTERMINATED_CLOSING_BRACE, i(), 0), h = N(l, 1, Pe(a)), l.braceNest = 0, l.inLinked = !1, h;
        if (l.braceNest > 0 && (l.currentType === 4 || l.currentType === 5 || l.currentType === 6))
          return T(D.UNTERMINATED_CLOSING_BRACE, i(), 0), l.braceNest = 0, Me(a, l);
        if (x = L(a, l))
          return h = N(l, 4, Et(a)), k(a), h;
        if (j = m(a, l))
          return h = N(l, 5, gt(a)), k(a), h;
        if (R = y(a, l))
          return h = N(l, 6, qt(a)), k(a), h;
        if (!x && !j && !R)
          return h = N(l, 12, Be(a)), T(D.INVALID_TOKEN_IN_PLACEHOLDER, i(), 0, h.value), k(a), h;
        break;
      }
    }
    return h;
  }
  function Le(a, l) {
    const { currentType: h } = l;
    let A = null;
    const x = a.currentChar();
    switch ((h === 7 || h === 8 || h === 11 || h === 9) && (x === Q || x === oe) && T(D.INVALID_LINKED_FORMAT, i(), 0), x) {
      case "@":
        return a.next(), A = N(
          l,
          7,
          "@"
          /* TokenChars.LinkedAlias */
        ), l.inLinked = !0, A;
      case ".":
        return k(a), a.next(), N(
          l,
          8,
          "."
          /* TokenChars.LinkedDot */
        );
      case ":":
        return k(a), a.next(), N(
          l,
          9,
          ":"
          /* TokenChars.LinkedDelimiter */
        );
      default:
        return X(a) ? (A = N(l, 1, Pe(a)), l.braceNest = 0, l.inLinked = !1, A) : w(a, l) || P(a, l) ? (k(a), Le(a, l)) : E(a, l) ? (k(a), N(l, 11, bt(a))) : W(a, l) ? (k(a), x === "{" ? Re(a, l) || A : N(l, 10, Ot(a))) : (h === 7 && T(D.INVALID_LINKED_FORMAT, i(), 0), l.braceNest = 0, l.inLinked = !1, Me(a, l));
    }
  }
  function Me(a, l) {
    let h = {
      type: 13
      /* TokenTypes.EOF */
    };
    if (l.braceNest > 0)
      return Re(a, l) || v(l);
    if (l.inLinked)
      return Le(a, l) || v(l);
    switch (a.currentChar()) {
      case "{":
        return Re(a, l) || v(l);
      case "}":
        return T(D.UNBALANCED_CLOSING_BRACE, i(), 0), a.next(), N(
          l,
          3,
          "}"
          /* TokenChars.BraceRight */
        );
      case "@":
        return Le(a, l) || v(l);
      default: {
        if (X(a))
          return h = N(l, 1, Pe(a)), l.braceNest = 0, l.inLinked = !1, h;
        if (ie(a))
          return N(l, 0, ht(a));
        break;
      }
    }
    return h;
  }
  function Tt() {
    const { currentType: a, offset: l, startLoc: h, endLoc: A } = c;
    return c.lastType = a, c.lastOffset = l, c.lastStartLoc = h, c.lastEndLoc = A, c.offset = s(), c.startLoc = i(), r.currentChar() === de ? N(
      c,
      13
      /* TokenTypes.EOF */
    ) : Me(r, c);
  }
  return {
    nextToken: Tt,
    currentOffset: s,
    currentPosition: i,
    context: g
  };
}
const us = "parser", fs = /(?:\\\\|\\'|\\u([0-9a-fA-F]{4})|\\U([0-9a-fA-F]{6}))/g;
function _s(e, t, n) {
  switch (e) {
    case "\\\\":
      return "\\";
    // eslint-disable-next-line no-useless-escape
    case "\\'":
      return "'";
    default: {
      const r = parseInt(t || n, 16);
      return r <= 55295 || r >= 57344 ? String.fromCodePoint(r) : "�";
    }
  }
}
function ds(e = {}) {
  const t = e.location !== !1, { onError: n } = e;
  function r(f, d, L, m, ...y) {
    const w = f.currentPosition();
    if (w.offset += m, w.column += m, n) {
      const E = t ? vt(L, w) : null, P = De(d, E, {
        domain: us,
        args: y
      });
      n(P);
    }
  }
  function s(f, d, L) {
    const m = { type: f };
    return t && (m.start = d, m.end = d, m.loc = { start: L, end: L }), m;
  }
  function i(f, d, L, m) {
    t && (f.end = d, f.loc && (f.loc.end = L));
  }
  function o(f, d) {
    const L = f.context(), m = s(3, L.offset, L.startLoc);
    return m.value = d, i(m, f.currentOffset(), f.currentPosition()), m;
  }
  function u(f, d) {
    const L = f.context(), { lastOffset: m, lastStartLoc: y } = L, w = s(5, m, y);
    return w.index = parseInt(d, 10), f.nextToken(), i(w, f.currentOffset(), f.currentPosition()), w;
  }
  function c(f, d) {
    const L = f.context(), { lastOffset: m, lastStartLoc: y } = L, w = s(4, m, y);
    return w.key = d, f.nextToken(), i(w, f.currentOffset(), f.currentPosition()), w;
  }
  function g(f, d) {
    const L = f.context(), { lastOffset: m, lastStartLoc: y } = L, w = s(9, m, y);
    return w.value = d.replace(fs, _s), f.nextToken(), i(w, f.currentOffset(), f.currentPosition()), w;
  }
  function O(f) {
    const d = f.nextToken(), L = f.context(), { lastOffset: m, lastStartLoc: y } = L, w = s(8, m, y);
    return d.type !== 11 ? (r(f, D.UNEXPECTED_EMPTY_LINKED_MODIFIER, L.lastStartLoc, 0), w.value = "", i(w, m, y), {
      nextConsumeToken: d,
      node: w
    }) : (d.value == null && r(f, D.UNEXPECTED_LEXICAL_ANALYSIS, L.lastStartLoc, 0, ce(d)), w.value = d.value || "", i(w, f.currentOffset(), f.currentPosition()), {
      node: w
    });
  }
  function T(f, d) {
    const L = f.context(), m = s(7, L.offset, L.startLoc);
    return m.value = d, i(m, f.currentOffset(), f.currentPosition()), m;
  }
  function N(f) {
    const d = f.context(), L = s(6, d.offset, d.startLoc);
    let m = f.nextToken();
    if (m.type === 8) {
      const y = O(f);
      L.modifier = y.node, m = y.nextConsumeToken || f.nextToken();
    }
    switch (m.type !== 9 && r(f, D.UNEXPECTED_LEXICAL_ANALYSIS, d.lastStartLoc, 0, ce(m)), m = f.nextToken(), m.type === 2 && (m = f.nextToken()), m.type) {
      case 10:
        m.value == null && r(f, D.UNEXPECTED_LEXICAL_ANALYSIS, d.lastStartLoc, 0, ce(m)), L.key = T(f, m.value || "");
        break;
      case 4:
        m.value == null && r(f, D.UNEXPECTED_LEXICAL_ANALYSIS, d.lastStartLoc, 0, ce(m)), L.key = c(f, m.value || "");
        break;
      case 5:
        m.value == null && r(f, D.UNEXPECTED_LEXICAL_ANALYSIS, d.lastStartLoc, 0, ce(m)), L.key = u(f, m.value || "");
        break;
      case 6:
        m.value == null && r(f, D.UNEXPECTED_LEXICAL_ANALYSIS, d.lastStartLoc, 0, ce(m)), L.key = g(f, m.value || "");
        break;
      default: {
        r(f, D.UNEXPECTED_EMPTY_LINKED_KEY, d.lastStartLoc, 0);
        const y = f.context(), w = s(7, y.offset, y.startLoc);
        return w.value = "", i(w, y.offset, y.startLoc), L.key = w, i(L, y.offset, y.startLoc), {
          nextConsumeToken: m,
          node: L
        };
      }
    }
    return i(L, f.currentOffset(), f.currentPosition()), {
      node: L
    };
  }
  function v(f) {
    const d = f.context(), L = d.currentType === 1 ? f.currentOffset() : d.offset, m = d.currentType === 1 ? d.endLoc : d.startLoc, y = s(2, L, m);
    y.items = [];
    let w = null;
    do {
      const W = w || f.nextToken();
      switch (w = null, W.type) {
        case 0:
          W.value == null && r(f, D.UNEXPECTED_LEXICAL_ANALYSIS, d.lastStartLoc, 0, ce(W)), y.items.push(o(f, W.value || ""));
          break;
        case 5:
          W.value == null && r(f, D.UNEXPECTED_LEXICAL_ANALYSIS, d.lastStartLoc, 0, ce(W)), y.items.push(u(f, W.value || ""));
          break;
        case 4:
          W.value == null && r(f, D.UNEXPECTED_LEXICAL_ANALYSIS, d.lastStartLoc, 0, ce(W)), y.items.push(c(f, W.value || ""));
          break;
        case 6:
          W.value == null && r(f, D.UNEXPECTED_LEXICAL_ANALYSIS, d.lastStartLoc, 0, ce(W)), y.items.push(g(f, W.value || ""));
          break;
        case 7: {
          const X = N(f);
          y.items.push(X.node), w = X.nextConsumeToken || null;
          break;
        }
      }
    } while (d.currentType !== 13 && d.currentType !== 1);
    const E = d.currentType === 1 ? d.lastOffset : f.currentOffset(), P = d.currentType === 1 ? d.lastEndLoc : f.currentPosition();
    return i(y, E, P), y;
  }
  function S(f, d, L, m) {
    const y = f.context();
    let w = m.items.length === 0;
    const E = s(1, d, L);
    E.cases = [], E.cases.push(m);
    do {
      const P = v(f);
      w || (w = P.items.length === 0), E.cases.push(P);
    } while (y.currentType !== 13);
    return w && r(f, D.MUST_HAVE_MESSAGES_IN_PLURAL, L, 0), i(E, f.currentOffset(), f.currentPosition()), E;
  }
  function C(f) {
    const d = f.context(), { offset: L, startLoc: m } = d, y = v(f);
    return d.currentType === 13 ? y : S(f, L, m, y);
  }
  function k(f) {
    const d = cs(f, J({}, e)), L = d.context(), m = s(0, L.offset, L.startLoc);
    return t && m.loc && (m.loc.source = f), m.body = C(d), e.onCacheKey && (m.cacheKey = e.onCacheKey(f)), L.currentType !== 13 && r(d, D.UNEXPECTED_LEXICAL_ANALYSIS, L.lastStartLoc, 0, f[L.offset] || ""), i(m, d.currentOffset(), d.currentPosition()), m;
  }
  return { parse: k };
}
function ce(e) {
  if (e.type === 13)
    return "EOF";
  const t = (e.value || "").replace(/\r?\n/gu, "\\n");
  return t.length > 10 ? t.slice(0, 9) + "…" : t;
}
function ms(e, t = {}) {
  const n = {
    ast: e,
    helpers: /* @__PURE__ */ new Set()
  };
  return { context: () => n, helper: (i) => (n.helpers.add(i), i) };
}
function _n(e, t) {
  for (let n = 0; n < e.length; n++)
    jt(e[n], t);
}
function jt(e, t) {
  switch (e.type) {
    case 1:
      _n(e.cases, t), t.helper(
        "plural"
        /* HelperNameMap.PLURAL */
      );
      break;
    case 2:
      _n(e.items, t);
      break;
    case 6: {
      jt(e.key, t), t.helper(
        "linked"
        /* HelperNameMap.LINKED */
      ), t.helper(
        "type"
        /* HelperNameMap.TYPE */
      );
      break;
    }
    case 5:
      t.helper(
        "interpolate"
        /* HelperNameMap.INTERPOLATE */
      ), t.helper(
        "list"
        /* HelperNameMap.LIST */
      );
      break;
    case 4:
      t.helper(
        "interpolate"
        /* HelperNameMap.INTERPOLATE */
      ), t.helper(
        "named"
        /* HelperNameMap.NAMED */
      );
      break;
  }
}
function hs(e, t = {}) {
  const n = ms(e);
  n.helper(
    "normalize"
    /* HelperNameMap.NORMALIZE */
  ), e.body && jt(e.body, n);
  const r = n.context();
  e.helpers = Array.from(r.helpers);
}
function Es(e) {
  const t = e.body;
  return t.type === 2 ? dn(t) : t.cases.forEach((n) => dn(n)), e;
}
function dn(e) {
  if (e.items.length === 1) {
    const t = e.items[0];
    (t.type === 3 || t.type === 9) && (e.static = t.value, delete t.value);
  } else {
    const t = [];
    for (let n = 0; n < e.items.length; n++) {
      const r = e.items[n];
      if (!(r.type === 3 || r.type === 9) || r.value == null)
        break;
      t.push(r.value);
    }
    if (t.length === e.items.length) {
      e.static = Ht(t);
      for (let n = 0; n < e.items.length; n++) {
        const r = e.items[n];
        (r.type === 3 || r.type === 9) && delete r.value;
      }
    }
  }
}
const gs = "minifier";
function Ae(e) {
  switch (e.t = e.type, e.type) {
    case 0: {
      const t = e;
      Ae(t.body), t.b = t.body, delete t.body;
      break;
    }
    case 1: {
      const t = e, n = t.cases;
      for (let r = 0; r < n.length; r++)
        Ae(n[r]);
      t.c = n, delete t.cases;
      break;
    }
    case 2: {
      const t = e, n = t.items;
      for (let r = 0; r < n.length; r++)
        Ae(n[r]);
      t.i = n, delete t.items, t.static && (t.s = t.static, delete t.static);
      break;
    }
    case 3:
    case 9:
    case 8:
    case 7: {
      const t = e;
      t.value && (t.v = t.value, delete t.value);
      break;
    }
    case 6: {
      const t = e;
      Ae(t.key), t.k = t.key, delete t.key, t.modifier && (Ae(t.modifier), t.m = t.modifier, delete t.modifier);
      break;
    }
    case 5: {
      const t = e;
      t.i = t.index, delete t.index;
      break;
    }
    case 4: {
      const t = e;
      t.k = t.key, delete t.key;
      break;
    }
    default:
      if (process.env.NODE_ENV !== "production")
        throw De(D.UNHANDLED_MINIFIER_NODE_TYPE, null, {
          domain: gs,
          args: [e.type]
        });
  }
  delete e.type;
}
const ps = "parser";
function Ns(e, t) {
  const { filename: n, breakLineCode: r, needIndent: s } = t, i = t.location !== !1, o = {
    filename: n,
    code: "",
    column: 1,
    line: 1,
    offset: 0,
    map: void 0,
    breakLineCode: r,
    needIndent: s,
    indentLevel: 0
  };
  i && e.loc && (o.source = e.loc.source);
  const u = () => o;
  function c(C, k) {
    o.code += C;
  }
  function g(C, k = !0) {
    const f = k ? r : "";
    c(s ? f + "  ".repeat(C) : f);
  }
  function O(C = !0) {
    const k = ++o.indentLevel;
    C && g(k);
  }
  function T(C = !0) {
    const k = --o.indentLevel;
    C && g(k);
  }
  function N() {
    g(o.indentLevel);
  }
  return {
    context: u,
    push: c,
    indent: O,
    deindent: T,
    newline: N,
    helper: (C) => `_${C}`,
    needIndent: () => o.needIndent
  };
}
function Ls(e, t) {
  const { helper: n } = e;
  e.push(`${n(
    "linked"
    /* HelperNameMap.LINKED */
  )}(`), ve(e, t.key), t.modifier ? (e.push(", "), ve(e, t.modifier), e.push(", _type")) : e.push(", undefined, _type"), e.push(")");
}
function bs(e, t) {
  const { helper: n, needIndent: r } = e;
  e.push(`${n(
    "normalize"
    /* HelperNameMap.NORMALIZE */
  )}([`), e.indent(r());
  const s = t.items.length;
  for (let i = 0; i < s && (ve(e, t.items[i]), i !== s - 1); i++)
    e.push(", ");
  e.deindent(r()), e.push("])");
}
function Os(e, t) {
  const { helper: n, needIndent: r } = e;
  if (t.cases.length > 1) {
    e.push(`${n(
      "plural"
      /* HelperNameMap.PLURAL */
    )}([`), e.indent(r());
    const s = t.cases.length;
    for (let i = 0; i < s && (ve(e, t.cases[i]), i !== s - 1); i++)
      e.push(", ");
    e.deindent(r()), e.push("])");
  }
}
function Ts(e, t) {
  t.body ? ve(e, t.body) : e.push("null");
}
function ve(e, t) {
  const { helper: n } = e;
  switch (t.type) {
    case 0:
      Ts(e, t);
      break;
    case 1:
      Os(e, t);
      break;
    case 2:
      bs(e, t);
      break;
    case 6:
      Ls(e, t);
      break;
    case 8:
      e.push(JSON.stringify(t.value), t);
      break;
    case 7:
      e.push(JSON.stringify(t.value), t);
      break;
    case 5:
      e.push(`${n(
        "interpolate"
        /* HelperNameMap.INTERPOLATE */
      )}(${n(
        "list"
        /* HelperNameMap.LIST */
      )}(${t.index}))`, t);
      break;
    case 4:
      e.push(`${n(
        "interpolate"
        /* HelperNameMap.INTERPOLATE */
      )}(${n(
        "named"
        /* HelperNameMap.NAMED */
      )}(${JSON.stringify(t.key)}))`, t);
      break;
    case 9:
      e.push(JSON.stringify(t.value), t);
      break;
    case 3:
      e.push(JSON.stringify(t.value), t);
      break;
    default:
      if (process.env.NODE_ENV !== "production")
        throw De(D.UNHANDLED_CODEGEN_NODE_TYPE, null, {
          domain: ps,
          args: [t.type]
        });
  }
}
const ys = (e, t = {}) => {
  const n = I(t.mode) ? t.mode : "normal", r = I(t.filename) ? t.filename : "message.intl";
  t.sourceMap;
  const s = t.breakLineCode != null ? t.breakLineCode : n === "arrow" ? ";" : `
`, i = t.needIndent ? t.needIndent : n !== "arrow", o = e.helpers || [], u = Ns(e, {
    filename: r,
    breakLineCode: s,
    needIndent: i
  });
  u.push(n === "normal" ? "function __msg__ (ctx) {" : "(ctx) => {"), u.indent(i), o.length > 0 && (u.push(`const { ${Ht(o.map((O) => `${O}: _${O}`), ", ")} } = ctx`), u.newline()), u.push("return "), ve(u, e), u.deindent(i), u.push("}"), delete e.helpers;
  const { code: c, map: g } = u.context();
  return {
    ast: e,
    code: c,
    map: g ? g.toJSON() : void 0
    // eslint-disable-line @typescript-eslint/no-explicit-any
  };
};
function ws(e, t = {}) {
  const n = J({}, t), r = !!n.jit, s = !!n.minify, i = n.optimize == null ? !0 : n.optimize, u = ds(n).parse(e);
  return r ? (i && Es(u), s && Ae(u), { ast: u, code: "" }) : (hs(u, n), ys(u, n));
}
/*!
  * core-base v11.2.2
  * (c) 2025 kazuya kawaguchi
  * Released under the MIT License.
  */
function Is() {
  typeof __INTLIFY_PROD_DEVTOOLS__ != "boolean" && (Te().__INTLIFY_PROD_DEVTOOLS__ = !1), typeof __INTLIFY_DROP_MESSAGE_COMPILER__ != "boolean" && (Te().__INTLIFY_DROP_MESSAGE_COMPILER__ = !1);
}
function le(e) {
  return F(e) && Yt(e) === 0 && (ae(e, "b") || ae(e, "body"));
}
const jn = ["b", "body"];
function Cs(e) {
  return pe(e, jn);
}
const Yn = ["c", "cases"];
function ks(e) {
  return pe(e, Yn, []);
}
const Bn = ["s", "static"];
function As(e) {
  return pe(e, Bn);
}
const Kn = ["i", "items"];
function vs(e) {
  return pe(e, Kn, []);
}
const Xn = ["t", "type"];
function Yt(e) {
  return pe(e, Xn);
}
const zn = ["v", "value"];
function Je(e, t) {
  const n = pe(e, zn);
  if (n != null)
    return n;
  throw xe(t);
}
const Jn = ["m", "modifier"];
function Ds(e) {
  return pe(e, Jn);
}
const qn = ["k", "key"];
function Ss(e) {
  const t = pe(e, qn);
  if (t)
    return t;
  throw xe(
    6
    /* NodeTypes.Linked */
  );
}
function pe(e, t, n) {
  for (let r = 0; r < t.length; r++) {
    const s = t[r];
    if (ae(e, s) && e[s] != null)
      return e[s];
  }
  return n;
}
const Qn = [
  ...jn,
  ...Yn,
  ...Bn,
  ...Kn,
  ...qn,
  ...Jn,
  ...zn,
  ...Xn
];
function xe(e) {
  return new Error(`unhandled node type: ${e}`);
}
function It(e) {
  return (n) => Ps(n, e);
}
function Ps(e, t) {
  const n = Cs(t);
  if (n == null)
    throw xe(
      0
      /* NodeTypes.Resource */
    );
  if (Yt(n) === 1) {
    const i = ks(n);
    return e.plural(i.reduce((o, u) => [
      ...o,
      mn(e, u)
    ], []));
  } else
    return mn(e, n);
}
function mn(e, t) {
  const n = As(t);
  if (n != null)
    return e.type === "text" ? n : e.normalize([n]);
  {
    const r = vs(t).reduce((s, i) => [...s, Dt(e, i)], []);
    return e.normalize(r);
  }
}
function Dt(e, t) {
  const n = Yt(t);
  switch (n) {
    case 3:
      return Je(t, n);
    case 9:
      return Je(t, n);
    case 4: {
      const r = t;
      if (ae(r, "k") && r.k)
        return e.interpolate(e.named(r.k));
      if (ae(r, "key") && r.key)
        return e.interpolate(e.named(r.key));
      throw xe(n);
    }
    case 5: {
      const r = t;
      if (ae(r, "i") && z(r.i))
        return e.interpolate(e.list(r.i));
      if (ae(r, "index") && z(r.index))
        return e.interpolate(e.list(r.index));
      throw xe(n);
    }
    case 6: {
      const r = t, s = Ds(r), i = Ss(r);
      return e.linked(Dt(e, i), s ? Dt(e, s) : void 0, e.type);
    }
    case 7:
      return Je(t, n);
    case 8:
      return Je(t, n);
    default:
      throw new Error(`unhandled node on format message part: ${n}`);
  }
}
const Rs = "Detected HTML in '{source}' message. Recommend not using HTML messages to avoid XSS.";
function Ms(e, t) {
  t && ns(e) && fe(it(Rs, { source: e }));
}
const Fs = (e) => e;
let qe = V();
function Us(e, t = {}) {
  let n = !1;
  const r = t.onError || es;
  return t.onError = (s) => {
    n = !0, r(s);
  }, { ...ws(e, t), detectError: n };
}
// @__NO_SIDE_EFFECTS__
function Ws(e, t) {
  if (!__INTLIFY_DROP_MESSAGE_COMPILER__ && I(e)) {
    const n = B(t.warnHtmlMessage) ? t.warnHtmlMessage : !0;
    process.env.NODE_ENV !== "production" && Ms(e, n);
    const s = (t.onCacheKey || Fs)(e), i = qe[s];
    if (i)
      return i;
    const { ast: o, detectError: u } = Us(e, {
      ...t,
      location: process.env.NODE_ENV !== "production",
      jit: !0
    }), c = It(o);
    return u ? c : qe[s] = c;
  } else {
    if (process.env.NODE_ENV !== "production" && !le(e))
      return fe(`the message that is resolve with key '${t.key}' is not supported for jit compilation`), () => e;
    const n = e.cacheKey;
    if (n) {
      const r = qe[n];
      return r || (qe[n] = It(e));
    } else
      return It(e);
  }
}
let Ge = null;
function Vs(e) {
  Ge = e;
}
function xs(e, t, n) {
  Ge && Ge.emit("i18n:init", {
    timestamp: Date.now(),
    i18n: e,
    version: t,
    meta: n
  });
}
const Gs = /* @__PURE__ */ $s("function:translate");
function $s(e) {
  return (t) => Ge && Ge.emit(e, t);
}
const Z = {
  INVALID_ARGUMENT: Qr,
  // 17
  INVALID_DATE_ARGUMENT: 18,
  INVALID_ISO_DATE_ARGUMENT: 19,
  NOT_SUPPORT_NON_STRING_MESSAGE: 20,
  NOT_SUPPORT_LOCALE_PROMISE_VALUE: 21,
  NOT_SUPPORT_LOCALE_ASYNC_FUNCTION: 22,
  NOT_SUPPORT_LOCALE_TYPE: 23
}, Hs = 24;
function me(e) {
  return De(e, null, process.env.NODE_ENV !== "production" ? { messages: js } : void 0);
}
const js = {
  [Z.INVALID_ARGUMENT]: "Invalid arguments",
  [Z.INVALID_DATE_ARGUMENT]: "The date provided is an invalid Date object.Make sure your Date represents a valid date.",
  [Z.INVALID_ISO_DATE_ARGUMENT]: "The argument provided is not a valid ISO date string",
  [Z.NOT_SUPPORT_NON_STRING_MESSAGE]: "Not support non-string message",
  [Z.NOT_SUPPORT_LOCALE_PROMISE_VALUE]: "cannot support promise value",
  [Z.NOT_SUPPORT_LOCALE_ASYNC_FUNCTION]: "cannot support async function",
  [Z.NOT_SUPPORT_LOCALE_TYPE]: "cannot support locale type"
};
function Bt(e, t) {
  return t.locale != null ? hn(t.locale) : hn(e.locale);
}
let Ct;
function hn(e) {
  if (I(e))
    return e;
  if (G(e)) {
    if (e.resolvedOnce && Ct != null)
      return Ct;
    if (e.constructor.name === "Function") {
      const t = e();
      if (Kr(t))
        throw me(Z.NOT_SUPPORT_LOCALE_PROMISE_VALUE);
      return Ct = t;
    } else
      throw me(Z.NOT_SUPPORT_LOCALE_ASYNC_FUNCTION);
  } else
    throw me(Z.NOT_SUPPORT_LOCALE_TYPE);
}
function Ys(e, t, n) {
  return [.../* @__PURE__ */ new Set([
    n,
    ...K(t) ? t : F(t) ? Object.keys(t) : I(t) ? [t] : [n]
  ])];
}
function Zn(e, t, n) {
  const r = I(n) ? n : nt, s = e;
  s.__localeChainCache || (s.__localeChainCache = /* @__PURE__ */ new Map());
  let i = s.__localeChainCache.get(r);
  if (!i) {
    i = [];
    let o = [n];
    for (; K(o); )
      o = En(i, o, t);
    const u = K(t) || !M(t) ? t : t.default ? t.default : null;
    o = I(u) ? [u] : u, K(o) && En(i, o, !1), s.__localeChainCache.set(r, i);
  }
  return i;
}
function En(e, t, n) {
  let r = !0;
  for (let s = 0; s < t.length && B(r); s++) {
    const i = t[s];
    I(i) && (r = Bs(e, t[s], n));
  }
  return r;
}
function Bs(e, t, n) {
  let r;
  const s = t.split("-");
  do {
    const i = s.join("-");
    r = Ks(e, i, n), s.splice(-1, 1);
  } while (s.length && r === !0);
  return r;
}
function Ks(e, t, n) {
  let r = !1;
  if (!e.includes(t) && (r = !0, t)) {
    r = t[t.length - 1] !== "!";
    const s = t.replace(/!/g, "");
    e.push(s), (K(n) || M(n)) && n[s] && (r = n[s]);
  }
  return r;
}
const Ne = [];
Ne[
  0
  /* States.BEFORE_PATH */
] = {
  w: [
    0
    /* States.BEFORE_PATH */
  ],
  i: [
    3,
    0
    /* Actions.APPEND */
  ],
  "[": [
    4
    /* States.IN_SUB_PATH */
  ],
  o: [
    7
    /* States.AFTER_PATH */
  ]
};
Ne[
  1
  /* States.IN_PATH */
] = {
  w: [
    1
    /* States.IN_PATH */
  ],
  ".": [
    2
    /* States.BEFORE_IDENT */
  ],
  "[": [
    4
    /* States.IN_SUB_PATH */
  ],
  o: [
    7
    /* States.AFTER_PATH */
  ]
};
Ne[
  2
  /* States.BEFORE_IDENT */
] = {
  w: [
    2
    /* States.BEFORE_IDENT */
  ],
  i: [
    3,
    0
    /* Actions.APPEND */
  ],
  0: [
    3,
    0
    /* Actions.APPEND */
  ]
};
Ne[
  3
  /* States.IN_IDENT */
] = {
  i: [
    3,
    0
    /* Actions.APPEND */
  ],
  0: [
    3,
    0
    /* Actions.APPEND */
  ],
  w: [
    1,
    1
    /* Actions.PUSH */
  ],
  ".": [
    2,
    1
    /* Actions.PUSH */
  ],
  "[": [
    4,
    1
    /* Actions.PUSH */
  ],
  o: [
    7,
    1
    /* Actions.PUSH */
  ]
};
Ne[
  4
  /* States.IN_SUB_PATH */
] = {
  "'": [
    5,
    0
    /* Actions.APPEND */
  ],
  '"': [
    6,
    0
    /* Actions.APPEND */
  ],
  "[": [
    4,
    2
    /* Actions.INC_SUB_PATH_DEPTH */
  ],
  "]": [
    1,
    3
    /* Actions.PUSH_SUB_PATH */
  ],
  o: 8,
  l: [
    4,
    0
    /* Actions.APPEND */
  ]
};
Ne[
  5
  /* States.IN_SINGLE_QUOTE */
] = {
  "'": [
    4,
    0
    /* Actions.APPEND */
  ],
  o: 8,
  l: [
    5,
    0
    /* Actions.APPEND */
  ]
};
Ne[
  6
  /* States.IN_DOUBLE_QUOTE */
] = {
  '"': [
    4,
    0
    /* Actions.APPEND */
  ],
  o: 8,
  l: [
    6,
    0
    /* Actions.APPEND */
  ]
};
const Xs = /^\s?(?:true|false|-?[\d.]+|'[^']*'|"[^"]*")\s?$/;
function zs(e) {
  return Xs.test(e);
}
function Js(e) {
  const t = e.charCodeAt(0), n = e.charCodeAt(e.length - 1);
  return t === n && (t === 34 || t === 39) ? e.slice(1, -1) : e;
}
function qs(e) {
  if (e == null)
    return "o";
  switch (e.charCodeAt(0)) {
    case 91:
    // [
    case 93:
    // ]
    case 46:
    // .
    case 34:
    // "
    case 39:
      return e;
    case 95:
    // _
    case 36:
    // $
    case 45:
      return "i";
    case 9:
    // Tab (HT)
    case 10:
    // Newline (LF)
    case 13:
    // Return (CR)
    case 160:
    // No-break space (NBSP)
    case 65279:
    // Byte Order Mark (BOM)
    case 8232:
    // Line Separator (LS)
    case 8233:
      return "w";
  }
  return "i";
}
function Qs(e) {
  const t = e.trim();
  return e.charAt(0) === "0" && isNaN(parseInt(e)) ? !1 : zs(t) ? Js(t) : "*" + t;
}
function Zs(e) {
  const t = [];
  let n = -1, r = 0, s = 0, i, o, u, c, g, O, T;
  const N = [];
  N[
    0
    /* Actions.APPEND */
  ] = () => {
    o === void 0 ? o = u : o += u;
  }, N[
    1
    /* Actions.PUSH */
  ] = () => {
    o !== void 0 && (t.push(o), o = void 0);
  }, N[
    2
    /* Actions.INC_SUB_PATH_DEPTH */
  ] = () => {
    N[
      0
      /* Actions.APPEND */
    ](), s++;
  }, N[
    3
    /* Actions.PUSH_SUB_PATH */
  ] = () => {
    if (s > 0)
      s--, r = 4, N[
        0
        /* Actions.APPEND */
      ]();
    else {
      if (s = 0, o === void 0 || (o = Qs(o), o === !1))
        return !1;
      N[
        1
        /* Actions.PUSH */
      ]();
    }
  };
  function v() {
    const S = e[n + 1];
    if (r === 5 && S === "'" || r === 6 && S === '"')
      return n++, u = "\\" + S, N[
        0
        /* Actions.APPEND */
      ](), !0;
  }
  for (; r !== null; )
    if (n++, i = e[n], !(i === "\\" && v())) {
      if (c = qs(i), T = Ne[r], g = T[c] || T.l || 8, g === 8 || (r = g[0], g[1] !== void 0 && (O = N[g[1]], O && (u = i, O() === !1))))
        return;
      if (r === 7)
        return t;
    }
}
const gn = /* @__PURE__ */ new Map();
function ei(e, t) {
  return F(e) ? e[t] : null;
}
function ti(e, t) {
  if (!F(e))
    return null;
  let n = gn.get(t);
  if (n || (n = Zs(t), n && gn.set(t, n)), !n)
    return null;
  const r = n.length;
  let s = e, i = 0;
  for (; i < r; ) {
    const o = n[i];
    if (Qn.includes(o) && le(s))
      return null;
    const u = s[o];
    if (u === void 0 || G(s))
      return null;
    s = u, i++;
  }
  return s;
}
const ee = {
  NOT_FOUND_KEY: 1,
  FALLBACK_TO_TRANSLATE: 2,
  CANNOT_FORMAT_NUMBER: 3,
  FALLBACK_TO_NUMBER_FORMAT: 4,
  CANNOT_FORMAT_DATE: 5,
  FALLBACK_TO_DATE_FORMAT: 6,
  EXPERIMENTAL_CUSTOM_MESSAGE_COMPILER: 7
}, ni = 8, ri = {
  [ee.NOT_FOUND_KEY]: "Not found '{key}' key in '{locale}' locale messages.",
  [ee.FALLBACK_TO_TRANSLATE]: "Fall back to translate '{key}' key with '{target}' locale.",
  [ee.CANNOT_FORMAT_NUMBER]: "Cannot format a number value due to not supported Intl.NumberFormat.",
  [ee.FALLBACK_TO_NUMBER_FORMAT]: "Fall back to number format '{key}' key with '{target}' locale.",
  [ee.CANNOT_FORMAT_DATE]: "Cannot format a date value due to not supported Intl.DateTimeFormat.",
  [ee.FALLBACK_TO_DATE_FORMAT]: "Fall back to datetime format '{key}' key with '{target}' locale.",
  [ee.EXPERIMENTAL_CUSTOM_MESSAGE_COMPILER]: "This project is using Custom Message Compiler, which is an experimental feature. It may receive breaking changes or be removed in the future."
};
function we(e, ...t) {
  return it(ri[e], ...t);
}
const si = "11.2.2", lt = -1, nt = "en-US", rt = "", pn = (e) => `${e.charAt(0).toLocaleUpperCase()}${e.substr(1)}`;
function ii() {
  return {
    upper: (e, t) => t === "text" && I(e) ? e.toUpperCase() : t === "vnode" && F(e) && "__v_isVNode" in e ? e.children.toUpperCase() : e,
    lower: (e, t) => t === "text" && I(e) ? e.toLowerCase() : t === "vnode" && F(e) && "__v_isVNode" in e ? e.children.toLowerCase() : e,
    capitalize: (e, t) => t === "text" && I(e) ? pn(e) : t === "vnode" && F(e) && "__v_isVNode" in e ? pn(e.children) : e
  };
}
let er;
function ai(e) {
  er = e;
}
let tr;
function li(e) {
  tr = e;
}
let nr;
function oi(e) {
  nr = e;
}
let rr = null;
const ci = /* @__NO_SIDE_EFFECTS__ */ (e) => {
  rr = e;
}, ui = /* @__NO_SIDE_EFFECTS__ */ () => rr;
let sr = null;
const Nn = (e) => {
  sr = e;
}, fi = () => sr;
let Ln = 0;
function _i(e = {}) {
  const t = G(e.onWarn) ? e.onWarn : fe, n = I(e.version) ? e.version : si, r = I(e.locale) || G(e.locale) ? e.locale : nt, s = G(r) ? nt : r, i = K(e.fallbackLocale) || M(e.fallbackLocale) || I(e.fallbackLocale) || e.fallbackLocale === !1 ? e.fallbackLocale : s, o = M(e.messages) ? e.messages : kt(s), u = M(e.datetimeFormats) ? e.datetimeFormats : kt(s), c = M(e.numberFormats) ? e.numberFormats : kt(s), g = J(V(), e.modifiers, ii()), O = e.pluralRules || V(), T = G(e.missing) ? e.missing : null, N = B(e.missingWarn) || tt(e.missingWarn) ? e.missingWarn : !0, v = B(e.fallbackWarn) || tt(e.fallbackWarn) ? e.fallbackWarn : !0, S = !!e.fallbackFormat, C = !!e.unresolving, k = G(e.postTranslation) ? e.postTranslation : null, f = M(e.processor) ? e.processor : null, d = B(e.warnHtmlMessage) ? e.warnHtmlMessage : !0, L = !!e.escapeParameter, m = G(e.messageCompiler) ? e.messageCompiler : er;
  process.env.NODE_ENV !== "production" && G(e.messageCompiler) && Vr(we(ee.EXPERIMENTAL_CUSTOM_MESSAGE_COMPILER));
  const y = G(e.messageResolver) ? e.messageResolver : tr || ei, w = G(e.localeFallbacker) ? e.localeFallbacker : nr || Ys, E = F(e.fallbackContext) ? e.fallbackContext : void 0, P = e, W = F(P.__datetimeFormatters) ? P.__datetimeFormatters : /* @__PURE__ */ new Map(), X = F(P.__numberFormatters) ? P.__numberFormatters : /* @__PURE__ */ new Map(), ie = F(P.__meta) ? P.__meta : {};
  Ln++;
  const $ = {
    version: n,
    cid: Ln,
    locale: r,
    fallbackLocale: i,
    messages: o,
    modifiers: g,
    pluralRules: O,
    missing: T,
    missingWarn: N,
    fallbackWarn: v,
    fallbackFormat: S,
    unresolving: C,
    postTranslation: k,
    processor: f,
    warnHtmlMessage: d,
    escapeParameter: L,
    messageCompiler: m,
    messageResolver: y,
    localeFallbacker: w,
    fallbackContext: E,
    onWarn: t,
    __meta: ie
  };
  return $.datetimeFormats = u, $.numberFormats = c, $.__datetimeFormatters = W, $.__numberFormatters = X, process.env.NODE_ENV !== "production" && ($.__v_emitter = P.__v_emitter != null ? P.__v_emitter : void 0), (process.env.NODE_ENV !== "production" || __INTLIFY_PROD_DEVTOOLS__) && xs($, n, ie), $;
}
const kt = (e) => ({ [e]: V() });
function ot(e, t) {
  return e instanceof RegExp ? e.test(t) : e;
}
function ir(e, t) {
  return e instanceof RegExp ? e.test(t) : e;
}
function Kt(e, t, n, r, s) {
  const { missing: i, onWarn: o } = e;
  if (process.env.NODE_ENV !== "production") {
    const u = e.__v_emitter;
    u && u.emit("missing", {
      locale: n,
      key: t,
      type: s,
      groupId: `${s}:${t}`
    });
  }
  if (i !== null) {
    const u = i(e, n, t, s);
    return I(u) ? u : t;
  } else
    return process.env.NODE_ENV !== "production" && ir(r, t) && o(we(ee.NOT_FOUND_KEY, { key: t, locale: n })), t;
}
function Ue(e, t, n) {
  const r = e;
  r.__localeChainCache = /* @__PURE__ */ new Map(), e.localeFallbacker(e, n, t);
}
function ar(e, t) {
  return e === t ? !1 : e.split("-")[0] === t.split("-")[0];
}
function di(e, t) {
  const n = t.indexOf(e);
  if (n === -1)
    return !1;
  for (let r = n + 1; r < t.length; r++)
    if (ar(e, t[r]))
      return !0;
  return !1;
}
const bn = typeof Intl < "u", lr = {
  dateTimeFormat: bn && typeof Intl.DateTimeFormat < "u",
  numberFormat: bn && typeof Intl.NumberFormat < "u"
};
function On(e, ...t) {
  const { datetimeFormats: n, unresolving: r, fallbackLocale: s, onWarn: i, localeFallbacker: o } = e, { __datetimeFormatters: u } = e;
  if (process.env.NODE_ENV !== "production" && !lr.dateTimeFormat)
    return i(we(ee.CANNOT_FORMAT_DATE)), rt;
  const [c, g, O, T] = St(...t), N = B(O.missingWarn) ? O.missingWarn : e.missingWarn, v = B(O.fallbackWarn) ? O.fallbackWarn : e.fallbackWarn, S = !!O.part, C = Bt(e, O), k = o(
    e,
    // eslint-disable-line @typescript-eslint/no-explicit-any
    s,
    C
  );
  if (!I(c) || c === "")
    return new Intl.DateTimeFormat(C, T).format(g);
  let f = {}, d, L = null, m = C, y = null;
  const w = "datetime format";
  for (let W = 0; W < k.length; W++) {
    if (d = y = k[W], process.env.NODE_ENV !== "production" && C !== d && ot(v, c) && i(we(ee.FALLBACK_TO_DATE_FORMAT, {
      key: c,
      target: d
    })), process.env.NODE_ENV !== "production" && C !== d) {
      const X = e.__v_emitter;
      X && X.emit("fallback", {
        type: w,
        key: c,
        from: m,
        to: y,
        groupId: `${w}:${c}`
      });
    }
    if (f = n[d] || {}, L = f[c], M(L))
      break;
    Kt(e, c, d, N, w), m = y;
  }
  if (!M(L) || !I(d))
    return r ? lt : c;
  let E = `${d}__${c}`;
  at(T) || (E = `${E}__${JSON.stringify(T)}`);
  let P = u.get(E);
  return P || (P = new Intl.DateTimeFormat(d, J({}, L, T)), u.set(E, P)), S ? P.formatToParts(g) : P.format(g);
}
const or = [
  "localeMatcher",
  "weekday",
  "era",
  "year",
  "month",
  "day",
  "hour",
  "minute",
  "second",
  "timeZoneName",
  "formatMatcher",
  "hour12",
  "timeZone",
  "dateStyle",
  "timeStyle",
  "calendar",
  "dayPeriod",
  "numberingSystem",
  "hourCycle",
  "fractionalSecondDigits"
];
function St(...e) {
  const [t, n, r, s] = e, i = V();
  let o = V(), u;
  if (I(t)) {
    const c = t.match(/(\d{4}-\d{2}-\d{2})(T|\s)?(.*)/);
    if (!c)
      throw me(Z.INVALID_ISO_DATE_ARGUMENT);
    const g = c[3] ? c[3].trim().startsWith("T") ? `${c[1].trim()}${c[3].trim()}` : `${c[1].trim()}T${c[3].trim()}` : c[1].trim();
    u = new Date(g);
    try {
      u.toISOString();
    } catch {
      throw me(Z.INVALID_ISO_DATE_ARGUMENT);
    }
  } else if (Hr(t)) {
    if (isNaN(t.getTime()))
      throw me(Z.INVALID_DATE_ARGUMENT);
    u = t;
  } else if (z(t))
    u = t;
  else
    throw me(Z.INVALID_ARGUMENT);
  return I(n) ? i.key = n : M(n) && Object.keys(n).forEach((c) => {
    or.includes(c) ? o[c] = n[c] : i[c] = n[c];
  }), I(r) ? i.locale = r : M(r) && (o = r), M(s) && (o = s), [i.key || "", u, i, o];
}
function Tn(e, t, n) {
  const r = e;
  for (const s in n) {
    const i = `${t}__${s}`;
    r.__datetimeFormatters.has(i) && r.__datetimeFormatters.delete(i);
  }
}
function yn(e, ...t) {
  const { numberFormats: n, unresolving: r, fallbackLocale: s, onWarn: i, localeFallbacker: o } = e, { __numberFormatters: u } = e;
  if (process.env.NODE_ENV !== "production" && !lr.numberFormat)
    return i(we(ee.CANNOT_FORMAT_NUMBER)), rt;
  const [c, g, O, T] = Pt(...t), N = B(O.missingWarn) ? O.missingWarn : e.missingWarn, v = B(O.fallbackWarn) ? O.fallbackWarn : e.fallbackWarn, S = !!O.part, C = Bt(e, O), k = o(
    e,
    // eslint-disable-line @typescript-eslint/no-explicit-any
    s,
    C
  );
  if (!I(c) || c === "")
    return new Intl.NumberFormat(C, T).format(g);
  let f = {}, d, L = null, m = C, y = null;
  const w = "number format";
  for (let W = 0; W < k.length; W++) {
    if (d = y = k[W], process.env.NODE_ENV !== "production" && C !== d && ot(v, c) && i(we(ee.FALLBACK_TO_NUMBER_FORMAT, {
      key: c,
      target: d
    })), process.env.NODE_ENV !== "production" && C !== d) {
      const X = e.__v_emitter;
      X && X.emit("fallback", {
        type: w,
        key: c,
        from: m,
        to: y,
        groupId: `${w}:${c}`
      });
    }
    if (f = n[d] || {}, L = f[c], M(L))
      break;
    Kt(e, c, d, N, w), m = y;
  }
  if (!M(L) || !I(d))
    return r ? lt : c;
  let E = `${d}__${c}`;
  at(T) || (E = `${E}__${JSON.stringify(T)}`);
  let P = u.get(E);
  return P || (P = new Intl.NumberFormat(d, J({}, L, T)), u.set(E, P)), S ? P.formatToParts(g) : P.format(g);
}
const cr = [
  "localeMatcher",
  "style",
  "currency",
  "currencyDisplay",
  "currencySign",
  "useGrouping",
  "minimumIntegerDigits",
  "minimumFractionDigits",
  "maximumFractionDigits",
  "minimumSignificantDigits",
  "maximumSignificantDigits",
  "compactDisplay",
  "notation",
  "signDisplay",
  "unit",
  "unitDisplay",
  "roundingMode",
  "roundingPriority",
  "roundingIncrement",
  "trailingZeroDisplay"
];
function Pt(...e) {
  const [t, n, r, s] = e, i = V();
  let o = V();
  if (!z(t))
    throw me(Z.INVALID_ARGUMENT);
  const u = t;
  return I(n) ? i.key = n : M(n) && Object.keys(n).forEach((c) => {
    cr.includes(c) ? o[c] = n[c] : i[c] = n[c];
  }), I(r) ? i.locale = r : M(r) && (o = r), M(s) && (o = s), [i.key || "", u, i, o];
}
function wn(e, t, n) {
  const r = e;
  for (const s in n) {
    const i = `${t}__${s}`;
    r.__numberFormatters.has(i) && r.__numberFormatters.delete(i);
  }
}
const mi = (e) => e, hi = (e) => "", Ei = "text", gi = (e) => e.length === 0 ? "" : Ht(e), pi = Xr;
function In(e, t) {
  return e = Math.abs(e), t === 2 ? e ? e > 1 ? 1 : 0 : 1 : e ? Math.min(e, 2) : 0;
}
function Ni(e) {
  const t = z(e.pluralIndex) ? e.pluralIndex : -1;
  return e.named && (z(e.named.count) || z(e.named.n)) ? z(e.named.count) ? e.named.count : z(e.named.n) ? e.named.n : t : t;
}
function Li(e, t) {
  t.count || (t.count = e), t.n || (t.n = e);
}
function bi(e = {}) {
  const t = e.locale, n = Ni(e), r = F(e.pluralRules) && I(t) && G(e.pluralRules[t]) ? e.pluralRules[t] : In, s = F(e.pluralRules) && I(t) && G(e.pluralRules[t]) ? In : void 0, i = (f) => f[r(n, f.length, s)], o = e.list || [], u = (f) => o[f], c = e.named || V();
  z(e.pluralIndex) && Li(n, c);
  const g = (f) => c[f];
  function O(f, d) {
    const L = G(e.messages) ? e.messages(f, !!d) : F(e.messages) ? e.messages[f] : !1;
    return L || (e.parent ? e.parent.message(f) : hi);
  }
  const T = (f) => e.modifiers ? e.modifiers[f] : mi, N = M(e.processor) && G(e.processor.normalize) ? e.processor.normalize : gi, v = M(e.processor) && G(e.processor.interpolate) ? e.processor.interpolate : pi, S = M(e.processor) && I(e.processor.type) ? e.processor.type : Ei, k = {
    list: u,
    named: g,
    plural: i,
    linked: (f, ...d) => {
      const [L, m] = d;
      let y = "text", w = "";
      d.length === 1 ? F(L) ? (w = L.modifier || w, y = L.type || y) : I(L) && (w = L || w) : d.length === 2 && (I(L) && (w = L || w), I(m) && (y = m || y));
      const E = O(f, !0)(k), P = (
        // The message in vnode resolved with linked are returned as an array by processor.nomalize
        y === "vnode" && K(E) && w ? E[0] : E
      );
      return w ? T(w)(P, y) : P;
    },
    message: O,
    type: S,
    interpolate: v,
    normalize: N,
    values: J(V(), o, c)
  };
  return k;
}
const Cn = () => "", re = (e) => G(e);
function kn(e, ...t) {
  const { fallbackFormat: n, postTranslation: r, unresolving: s, messageCompiler: i, fallbackLocale: o, messages: u } = e, [c, g] = Rt(...t), O = B(g.missingWarn) ? g.missingWarn : e.missingWarn, T = B(g.fallbackWarn) ? g.fallbackWarn : e.fallbackWarn, N = B(g.escapeParameter) ? g.escapeParameter : e.escapeParameter, v = !!g.resolvedMessage, S = I(g.default) || B(g.default) ? B(g.default) ? i ? c : () => c : g.default : n ? i ? c : () => c : null, C = n || S != null && (I(S) || G(S)), k = Bt(e, g);
  N && Oi(g);
  let [f, d, L] = v ? [
    c,
    k,
    u[k] || V()
  ] : ur(e, c, k, o, T, O), m = f, y = c;
  if (!v && !(I(m) || le(m) || re(m)) && C && (m = S, y = m), !v && (!(I(m) || le(m) || re(m)) || !I(d)))
    return s ? lt : c;
  if (process.env.NODE_ENV !== "production" && I(m) && e.messageCompiler == null)
    return fe(`The message format compilation is not supported in this build. Because message compiler isn't included. You need to pre-compilation all message format. So translate function return '${c}'.`), c;
  let w = !1;
  const E = () => {
    w = !0;
  }, P = re(m) ? m : fr(e, c, d, m, y, E);
  if (w)
    return m;
  const W = Ii(e, d, L, g), X = bi(W), ie = Ti(e, P, X);
  let $ = r ? r(ie, c) : ie;
  if (N && I($) && ($ = Yr($)), process.env.NODE_ENV !== "production" || __INTLIFY_PROD_DEVTOOLS__) {
    const Ie = {
      timestamp: Date.now(),
      key: I(c) ? c : re(m) ? m.key : "",
      locale: d || (re(m) ? m.locale : ""),
      format: I(m) ? m : re(m) ? m.source : "",
      message: $
    };
    Ie.meta = J({}, e.__meta, /* @__PURE__ */ ui() || {}), Gs(Ie);
  }
  return $;
}
function Oi(e) {
  K(e.list) ? e.list = e.list.map((t) => I(t) ? on(t) : t) : F(e.named) && Object.keys(e.named).forEach((t) => {
    I(e.named[t]) && (e.named[t] = on(e.named[t]));
  });
}
function ur(e, t, n, r, s, i) {
  const { messages: o, onWarn: u, messageResolver: c, localeFallbacker: g } = e, O = g(e, r, n);
  let T = V(), N, v = null, S = n, C = null;
  const k = "translate";
  for (let f = 0; f < O.length; f++) {
    if (N = C = O[f], process.env.NODE_ENV !== "production" && n !== N && !ar(n, N) && ot(s, t) && u(we(ee.FALLBACK_TO_TRANSLATE, {
      key: t,
      target: N
    })), process.env.NODE_ENV !== "production" && n !== N) {
      const y = e.__v_emitter;
      y && y.emit("fallback", {
        type: k,
        key: t,
        from: S,
        to: C,
        groupId: `${k}:${t}`
      });
    }
    T = o[N] || V();
    let d = null, L, m;
    if (process.env.NODE_ENV !== "production" && he && (d = window.performance.now(), L = "intlify-message-resolve-start", m = "intlify-message-resolve-end", ne && ne(L)), (v = c(T, t)) === null && (v = T[t]), process.env.NODE_ENV !== "production" && he) {
      const y = window.performance.now(), w = e.__v_emitter;
      w && d && v && w.emit("message-resolve", {
        type: "message-resolve",
        key: t,
        message: v,
        time: y - d,
        groupId: `${k}:${t}`
      }), L && m && ne && ye && (ne(m), ye("intlify message resolve", L, m));
    }
    if (I(v) || le(v) || re(v))
      break;
    if (!di(N, O)) {
      const y = Kt(
        e,
        // eslint-disable-line @typescript-eslint/no-explicit-any
        t,
        N,
        i,
        k
      );
      y !== t && (v = y);
    }
    S = C;
  }
  return [v, N, T];
}
function fr(e, t, n, r, s, i) {
  const { messageCompiler: o, warnHtmlMessage: u } = e;
  if (re(r)) {
    const N = r;
    return N.locale = N.locale || n, N.key = N.key || t, N;
  }
  if (o == null) {
    const N = () => r;
    return N.locale = n, N.key = t, N;
  }
  let c = null, g, O;
  process.env.NODE_ENV !== "production" && he && (c = window.performance.now(), g = "intlify-message-compilation-start", O = "intlify-message-compilation-end", ne && ne(g));
  const T = o(r, yi(e, n, s, r, u, i));
  if (process.env.NODE_ENV !== "production" && he) {
    const N = window.performance.now(), v = e.__v_emitter;
    v && c && v.emit("message-compilation", {
      type: "message-compilation",
      message: r,
      time: N - c,
      groupId: `translate:${t}`
    }), g && O && ne && ye && (ne(O), ye("intlify message compilation", g, O));
  }
  return T.locale = n, T.key = t, T.source = r, T;
}
function Ti(e, t, n) {
  let r = null, s, i;
  process.env.NODE_ENV !== "production" && he && (r = window.performance.now(), s = "intlify-message-evaluation-start", i = "intlify-message-evaluation-end", ne && ne(s));
  const o = t(n);
  if (process.env.NODE_ENV !== "production" && he) {
    const u = window.performance.now(), c = e.__v_emitter;
    c && r && c.emit("message-evaluation", {
      type: "message-evaluation",
      value: o,
      time: u - r,
      groupId: `translate:${t.key}`
    }), s && i && ne && ye && (ne(i), ye("intlify message evaluation", s, i));
  }
  return o;
}
function Rt(...e) {
  const [t, n, r] = e, s = V();
  if (!I(t) && !z(t) && !re(t) && !le(t))
    throw me(Z.INVALID_ARGUMENT);
  const i = z(t) ? String(t) : (re(t), t);
  return z(n) ? s.plural = n : I(n) ? s.default = n : M(n) && !at(n) ? s.named = n : K(n) && (s.list = n), z(r) ? s.plural = r : I(r) ? s.default = r : M(r) && J(s, r), [i, s];
}
function yi(e, t, n, r, s, i) {
  return {
    locale: t,
    key: n,
    warnHtmlMessage: s,
    onError: (o) => {
      if (i && i(o), process.env.NODE_ENV !== "production") {
        const u = wi(r), c = `Message compilation error: ${o.message}`, g = o.location && u && zr(u, o.location.start.offset, o.location.end.offset), O = e.__v_emitter;
        O && u && O.emit("compile-error", {
          message: u,
          error: o.message,
          start: o.location && o.location.start.offset,
          end: o.location && o.location.end.offset,
          groupId: `translate:${n}`
        }), console.error(g ? `${c}
${g}` : c);
      } else
        throw o;
    },
    onCacheKey: (o) => Gr(t, n, o)
  };
}
function wi(e) {
  if (I(e))
    return e;
  if (e.loc && e.loc.source)
    return e.loc.source;
}
function Ii(e, t, n, r) {
  const { modifiers: s, pluralRules: i, messageResolver: o, fallbackLocale: u, fallbackWarn: c, missingWarn: g, fallbackContext: O } = e, N = {
    locale: t,
    modifiers: s,
    pluralRules: i,
    messages: (v, S) => {
      let C = o(n, v);
      if (C == null && (O || S)) {
        const [, , k] = ur(
          O || e,
          // NOTE: if has fallbackContext, fallback to root, else if use linked, fallback to local context
          v,
          t,
          u,
          c,
          g
        );
        C = o(k, v);
      }
      if (I(C) || le(C)) {
        let k = !1;
        const d = fr(e, v, t, C, v, () => {
          k = !0;
        });
        return k ? Cn : d;
      } else return re(C) ? C : Cn;
    }
  };
  return e.processor && (N.processor = e.processor), r.list && (N.list = r.list), r.named && (N.named = r.named), z(r.plural) && (N.pluralIndex = r.plural), N;
}
Is();
/*!
  * vue-i18n v11.2.2
  * (c) 2025 kazuya kawaguchi
  * Released under the MIT License.
  */
const Ci = "11.2.2";
function ki() {
  typeof __VUE_I18N_FULL_INSTALL__ != "boolean" && (Te().__VUE_I18N_FULL_INSTALL__ = !0), typeof __VUE_I18N_LEGACY_API__ != "boolean" && (Te().__VUE_I18N_LEGACY_API__ = !0), typeof __INTLIFY_DROP_MESSAGE_COMPILER__ != "boolean" && (Te().__INTLIFY_DROP_MESSAGE_COMPILER__ = !1), typeof __INTLIFY_PROD_DEVTOOLS__ != "boolean" && (Te().__INTLIFY_PROD_DEVTOOLS__ = !1);
}
const q = {
  // composer module errors
  UNEXPECTED_RETURN_TYPE: Hs,
  // 24
  // legacy module errors
  INVALID_ARGUMENT: 25,
  // i18n module errors
  MUST_BE_CALL_SETUP_TOP: 26,
  NOT_INSTALLED: 27,
  // directive module errors
  REQUIRED_VALUE: 28,
  INVALID_VALUE: 29,
  // vue-devtools errors
  CANNOT_SETUP_VUE_DEVTOOLS_PLUGIN: 30,
  NOT_INSTALLED_WITH_PROVIDE: 31,
  // unexpected error
  UNEXPECTED_ERROR: 32,
  // not compatible legacy vue-i18n constructor
  NOT_COMPATIBLE_LEGACY_VUE_I18N: 33,
  // Not available Compostion API in Legacy API mode. Please make sure that the legacy API mode is working properly
  NOT_AVAILABLE_COMPOSITION_IN_LEGACY: 34
};
function $e(e, ...t) {
  return De(e, null, process.env.NODE_ENV !== "production" ? { messages: Ai, args: t } : void 0);
}
const Ai = {
  [q.UNEXPECTED_RETURN_TYPE]: "Unexpected return type in composer",
  [q.INVALID_ARGUMENT]: "Invalid argument",
  [q.MUST_BE_CALL_SETUP_TOP]: "Must be called at the top of a `setup` function",
  [q.NOT_INSTALLED]: "Need to install with `app.use` function",
  [q.UNEXPECTED_ERROR]: "Unexpected error",
  [q.REQUIRED_VALUE]: "Required in value: {0}",
  [q.INVALID_VALUE]: "Invalid value",
  [q.CANNOT_SETUP_VUE_DEVTOOLS_PLUGIN]: "Cannot setup vue-devtools plugin",
  [q.NOT_INSTALLED_WITH_PROVIDE]: "Need to install with `provide` function",
  [q.NOT_COMPATIBLE_LEGACY_VUE_I18N]: "Not compatible legacy VueI18n.",
  [q.NOT_AVAILABLE_COMPOSITION_IN_LEGACY]: "Not available Compostion API in Legacy API mode. Please make sure that the legacy API mode is working properly"
}, Mt = /* @__PURE__ */ Ee("__translateVNode"), Ft = /* @__PURE__ */ Ee("__datetimeParts"), Ut = /* @__PURE__ */ Ee("__numberParts"), Wt = /* @__PURE__ */ Ee("__enableEmitter"), Vt = /* @__PURE__ */ Ee("__disableEmitter"), vi = Ee("__setPluralRules"), _r = /* @__PURE__ */ Ee("__injectWithOption"), xt = /* @__PURE__ */ Ee("__dispose"), ue = {
  FALLBACK_TO_ROOT: ni,
  // 8
  NOT_FOUND_PARENT_SCOPE: 9,
  IGNORE_OBJ_FLATTEN: 10,
  /**
   * @deprecated will be removed at vue-i18n v12
   */
  DEPRECATE_LEGACY_MODE: 11,
  /**
   * @deprecated will be removed at vue-i18n v12
   */
  DEPRECATE_TRANSLATE_CUSTOME_DIRECTIVE: 12,
  // duplicate `useI18n` calling
  DUPLICATE_USE_I18N_CALLING: 13
}, Di = {
  [ue.FALLBACK_TO_ROOT]: "Fall back to {type} '{key}' with root locale.",
  [ue.NOT_FOUND_PARENT_SCOPE]: "Not found parent scope. use the global scope.",
  [ue.IGNORE_OBJ_FLATTEN]: "Ignore object flatten: '{key}' key has an string value",
  /**
   * @deprecated will be removed at vue-i18n v12
   */
  [ue.DEPRECATE_LEGACY_MODE]: `Legacy API mode has been deprecated in v11. Use Composition API mode instead.
About how to use the Composition API mode, see https://vue-i18n.intlify.dev/guide/advanced/composition.html`,
  /**
   * @deprecated will be removed at vue-i18n v12
   */
  [ue.DEPRECATE_TRANSLATE_CUSTOME_DIRECTIVE]: "'v-t' has been deprecated in v11. Use translate APIs ('t' or '$t') instead.",
  [ue.DUPLICATE_USE_I18N_CALLING]: "Duplicate `useI18n` calling by local scope. Please don't call it on local scope, due to it does not work properly in component."
};
function st(e, ...t) {
  return it(Di[e], ...t);
}
function He(e) {
  if (!F(e) || le(e))
    return e;
  for (const t in e)
    if (ae(e, t))
      if (!t.includes("."))
        F(e[t]) && He(e[t]);
      else {
        const n = t.split("."), r = n.length - 1;
        let s = e, i = !1;
        for (let o = 0; o < r; o++) {
          if (n[o] === "__proto__")
            throw new Error(`unsafe key: ${n[o]}`);
          if (n[o] in s || (s[n[o]] = V()), !F(s[n[o]])) {
            process.env.NODE_ENV !== "production" && fe(st(ue.IGNORE_OBJ_FLATTEN, {
              key: n[o]
            })), i = !0;
            break;
          }
          s = s[n[o]];
        }
        if (i || (le(s) ? Qn.includes(n[r]) || delete e[t] : (s[n[r]] = e[t], delete e[t])), !le(s)) {
          const o = s[n[r]];
          F(o) && He(o);
        }
      }
  return e;
}
function dr(e, t) {
  const { messages: n, __i18n: r, messageResolver: s, flatJson: i } = t, o = M(n) ? n : K(r) ? V() : { [e]: V() };
  if (K(r) && r.forEach((u) => {
    if ("locale" in u && "resource" in u) {
      const { locale: c, resource: g } = u;
      c ? (o[c] = o[c] || V(), Ze(g, o[c])) : Ze(g, o);
    } else
      I(u) && Ze(JSON.parse(u), o);
  }), s == null && i)
    for (const u in o)
      ae(o, u) && He(o[u]);
  return o;
}
function mr(e) {
  return e.type;
}
function Si(e, t, n) {
  let r = F(t.messages) ? t.messages : V();
  "__i18nGlobal" in n && (r = dr(e.locale.value, {
    messages: r,
    __i18n: n.__i18nGlobal
  }));
  const s = Object.keys(r);
  s.length && s.forEach((i) => {
    e.mergeLocaleMessage(i, r[i]);
  });
  {
    if (F(t.datetimeFormats)) {
      const i = Object.keys(t.datetimeFormats);
      i.length && i.forEach((o) => {
        e.mergeDateTimeFormat(o, t.datetimeFormats[o]);
      });
    }
    if (F(t.numberFormats)) {
      const i = Object.keys(t.numberFormats);
      i.length && i.forEach((o) => {
        e.mergeNumberFormat(o, t.numberFormats[o]);
      });
    }
  }
}
function An(e) {
  return H(Tr, null, e, 0);
}
function Xt() {
  return "currentInstance" in Zt ? Zt["currentInstance"] : pr();
}
const vn = "__INTLIFY_META__", Dn = () => [], Pi = () => !1;
let Sn = 0;
function Pn(e) {
  return (t, n, r, s) => e(n, r, Xt() || void 0, s);
}
const Ri = /* @__NO_SIDE_EFFECTS__ */ () => {
  const e = Xt();
  let t = null;
  return e && (t = mr(e)[vn]) ? { [vn]: t } : null;
};
function Mi(e = {}) {
  const { __root: t, __injectWithOption: n } = e, r = t === void 0, s = e.flatJson, i = he ? Nr : Lr;
  let o = B(e.inheritLocale) ? e.inheritLocale : !0;
  const u = i(
    // prettier-ignore
    t && o ? t.locale.value : I(e.locale) ? e.locale : nt
  ), c = i(
    // prettier-ignore
    t && o ? t.fallbackLocale.value : I(e.fallbackLocale) || K(e.fallbackLocale) || M(e.fallbackLocale) || e.fallbackLocale === !1 ? e.fallbackLocale : u.value
  ), g = i(dr(u.value, e)), O = i(M(e.datetimeFormats) ? e.datetimeFormats : { [u.value]: {} }), T = i(M(e.numberFormats) ? e.numberFormats : { [u.value]: {} });
  let N = t ? t.missingWarn : B(e.missingWarn) || tt(e.missingWarn) ? e.missingWarn : !0, v = t ? t.fallbackWarn : B(e.fallbackWarn) || tt(e.fallbackWarn) ? e.fallbackWarn : !0, S = t ? t.fallbackRoot : B(e.fallbackRoot) ? e.fallbackRoot : !0, C = !!e.fallbackFormat, k = G(e.missing) ? e.missing : null, f = G(e.missing) ? Pn(e.missing) : null, d = G(e.postTranslation) ? e.postTranslation : null, L = t ? t.warnHtmlMessage : B(e.warnHtmlMessage) ? e.warnHtmlMessage : !0, m = !!e.escapeParameter;
  const y = t ? t.modifiers : M(e.modifiers) ? e.modifiers : {};
  let w = e.pluralRules || t && t.pluralRules, E;
  E = (() => {
    r && Nn(null);
    const _ = {
      version: Ci,
      locale: u.value,
      fallbackLocale: c.value,
      messages: g.value,
      modifiers: y,
      pluralRules: w,
      missing: f === null ? void 0 : f,
      missingWarn: N,
      fallbackWarn: v,
      fallbackFormat: C,
      unresolving: !0,
      postTranslation: d === null ? void 0 : d,
      warnHtmlMessage: L,
      escapeParameter: m,
      messageResolver: e.messageResolver,
      messageCompiler: e.messageCompiler,
      __meta: { framework: "vue" }
    };
    _.datetimeFormats = O.value, _.numberFormats = T.value, _.__datetimeFormatters = M(E) ? E.__datetimeFormatters : void 0, _.__numberFormatters = M(E) ? E.__numberFormatters : void 0, process.env.NODE_ENV !== "production" && (_.__v_emitter = M(E) ? E.__v_emitter : void 0);
    const p = _i(_);
    return r && Nn(p), p;
  })(), Ue(E, u.value, c.value);
  function W() {
    return [
      u.value,
      c.value,
      g.value,
      O.value,
      T.value
    ];
  }
  const X = Fe({
    get: () => u.value,
    set: (_) => {
      E.locale = _, u.value = _;
    }
  }), ie = Fe({
    get: () => c.value,
    set: (_) => {
      E.fallbackLocale = _, c.value = _, Ue(E, u.value, _);
    }
  }), $ = Fe(() => g.value), Ie = /* @__PURE__ */ Fe(() => O.value), ct = /* @__PURE__ */ Fe(() => T.value);
  function ut() {
    return G(d) ? d : null;
  }
  function ft(_) {
    d = _, E.postTranslation = _;
  }
  function _t() {
    return k;
  }
  function dt(_) {
    _ !== null && (f = Pn(_)), k = _, E.missing = f;
  }
  function mt(_, p) {
    return _ !== "translate" || !p.resolvedMessage;
  }
  const _e = (_, p, U, Y, be, Ke) => {
    W();
    let Ce;
    try {
      process.env.NODE_ENV !== "production" || __INTLIFY_PROD_DEVTOOLS__, r || (E.fallbackContext = t ? fi() : void 0), Ce = _(E);
    } finally {
      process.env.NODE_ENV !== "production" || __INTLIFY_PROD_DEVTOOLS__, r || (E.fallbackContext = void 0);
    }
    if (U !== "translate exists" && // for not `te` (e.g `t`)
    z(Ce) && Ce === lt || U === "translate exists" && !Ce) {
      const [Oe, gr] = p();
      if (process.env.NODE_ENV !== "production" && t && I(Oe) && mt(U, gr) && (S && (ot(v, Oe) || ir(N, Oe)) && fe(st(ue.FALLBACK_TO_ROOT, {
        key: Oe,
        type: U
      })), process.env.NODE_ENV !== "production")) {
        const { __v_emitter: Qt } = E;
        Qt && S && Qt.emit("fallback", {
          type: U,
          key: Oe,
          to: "global",
          groupId: `${U}:${Oe}`
        });
      }
      return t && S ? Y(t) : be(Oe);
    } else {
      if (Ke(Ce))
        return Ce;
      throw $e(q.UNEXPECTED_RETURN_TYPE);
    }
  };
  function Se(..._) {
    return _e((p) => Reflect.apply(kn, null, [p, ..._]), () => Rt(..._), "translate", (p) => Reflect.apply(p.t, p, [..._]), (p) => p, (p) => I(p));
  }
  function ht(..._) {
    const [p, U, Y] = _;
    if (Y && !F(Y))
      throw $e(q.INVALID_ARGUMENT);
    return Se(p, U, J({ resolvedMessage: !0 }, Y || {}));
  }
  function Et(..._) {
    return _e((p) => Reflect.apply(On, null, [p, ..._]), () => St(..._), "datetime format", (p) => Reflect.apply(p.d, p, [..._]), () => rt, (p) => I(p) || K(p));
  }
  function gt(..._) {
    return _e((p) => Reflect.apply(yn, null, [p, ..._]), () => Pt(..._), "number format", (p) => Reflect.apply(p.n, p, [..._]), () => rt, (p) => I(p) || K(p));
  }
  function pt(_) {
    return _.map((p) => I(p) || z(p) || B(p) ? An(String(p)) : p);
  }
  const Nt = {
    normalize: pt,
    interpolate: (_) => _,
    type: "vnode"
  };
  function Ye(..._) {
    return _e((p) => {
      let U;
      const Y = p;
      try {
        Y.processor = Nt, U = Reflect.apply(kn, null, [Y, ..._]);
      } finally {
        Y.processor = null;
      }
      return U;
    }, () => Rt(..._), "translate", (p) => p[Mt](..._), (p) => [An(p)], (p) => K(p));
  }
  function Lt(..._) {
    return _e((p) => Reflect.apply(yn, null, [p, ..._]), () => Pt(..._), "number format", (p) => p[Ut](..._), Dn, (p) => I(p) || K(p));
  }
  function Be(..._) {
    return _e((p) => Reflect.apply(On, null, [p, ..._]), () => St(..._), "datetime format", (p) => p[Ft](..._), Dn, (p) => I(p) || K(p));
  }
  function bt(_) {
    w = _, E.pluralRules = w;
  }
  function Ot(_, p) {
    return _e(() => {
      if (!_)
        return !1;
      const U = I(p) ? p : u.value, Y = Le(U), be = E.messageResolver(Y, _);
      return le(be) || re(be) || I(be);
    }, () => [_], "translate exists", (U) => Reflect.apply(U.te, U, [_, p]), Pi, (U) => B(U));
  }
  function Pe(_) {
    let p = null;
    const U = Zn(E, c.value, u.value);
    for (let Y = 0; Y < U.length; Y++) {
      const be = g.value[U[Y]] || {}, Ke = E.messageResolver(be, _);
      if (Ke != null) {
        p = Ke;
        break;
      }
    }
    return p;
  }
  function Re(_) {
    const p = Pe(_);
    return p ?? (t ? t.tm(_) || {} : {});
  }
  function Le(_) {
    return g.value[_] || {};
  }
  function Me(_, p) {
    if (s) {
      const U = { [_]: p };
      for (const Y in U)
        ae(U, Y) && He(U[Y]);
      p = U[_];
    }
    g.value[_] = p, E.messages = g.value;
  }
  function Tt(_, p) {
    g.value[_] = g.value[_] || {};
    const U = { [_]: p };
    if (s)
      for (const Y in U)
        ae(U, Y) && He(U[Y]);
    p = U[_], Ze(p, g.value[_]), E.messages = g.value;
  }
  function a(_) {
    return O.value[_] || {};
  }
  function l(_, p) {
    O.value[_] = p, E.datetimeFormats = O.value, Tn(E, _, p);
  }
  function h(_, p) {
    O.value[_] = J(O.value[_] || {}, p), E.datetimeFormats = O.value, Tn(E, _, p);
  }
  function A(_) {
    return T.value[_] || {};
  }
  function x(_, p) {
    T.value[_] = p, E.numberFormats = T.value, wn(E, _, p);
  }
  function j(_, p) {
    T.value[_] = J(T.value[_] || {}, p), E.numberFormats = T.value, wn(E, _, p);
  }
  Sn++, t && he && (en(t.locale, (_) => {
    o && (u.value = _, E.locale = _, Ue(E, u.value, c.value));
  }), en(t.fallbackLocale, (_) => {
    o && (c.value = _, E.fallbackLocale = _, Ue(E, u.value, c.value));
  }));
  const R = {
    id: Sn,
    locale: X,
    fallbackLocale: ie,
    get inheritLocale() {
      return o;
    },
    set inheritLocale(_) {
      o = _, _ && t && (u.value = t.locale.value, c.value = t.fallbackLocale.value, Ue(E, u.value, c.value));
    },
    get availableLocales() {
      return Object.keys(g.value).sort();
    },
    messages: $,
    get modifiers() {
      return y;
    },
    get pluralRules() {
      return w || {};
    },
    get isGlobal() {
      return r;
    },
    get missingWarn() {
      return N;
    },
    set missingWarn(_) {
      N = _, E.missingWarn = N;
    },
    get fallbackWarn() {
      return v;
    },
    set fallbackWarn(_) {
      v = _, E.fallbackWarn = v;
    },
    get fallbackRoot() {
      return S;
    },
    set fallbackRoot(_) {
      S = _;
    },
    get fallbackFormat() {
      return C;
    },
    set fallbackFormat(_) {
      C = _, E.fallbackFormat = C;
    },
    get warnHtmlMessage() {
      return L;
    },
    set warnHtmlMessage(_) {
      L = _, E.warnHtmlMessage = _;
    },
    get escapeParameter() {
      return m;
    },
    set escapeParameter(_) {
      m = _, E.escapeParameter = _;
    },
    t: Se,
    getLocaleMessage: Le,
    setLocaleMessage: Me,
    mergeLocaleMessage: Tt,
    getPostTranslationHandler: ut,
    setPostTranslationHandler: ft,
    getMissingHandler: _t,
    setMissingHandler: dt,
    [vi]: bt
  };
  return R.datetimeFormats = Ie, R.numberFormats = ct, R.rt = ht, R.te = Ot, R.tm = Re, R.d = Et, R.n = gt, R.getDateTimeFormat = a, R.setDateTimeFormat = l, R.mergeDateTimeFormat = h, R.getNumberFormat = A, R.setNumberFormat = x, R.mergeNumberFormat = j, R[_r] = n, R[Mt] = Ye, R[Ft] = Be, R[Ut] = Lt, process.env.NODE_ENV !== "production" && (R[Wt] = (_) => {
    E.__v_emitter = _;
  }, R[Vt] = () => {
    E.__v_emitter = void 0;
  }), R;
}
function Rn(e, t) {
}
const zt = {
  tag: {
    type: [String, Object]
  },
  locale: {
    type: String
  },
  scope: {
    type: String,
    // NOTE: avoid https://github.com/microsoft/rushstack/issues/1050
    validator: (e) => e === "parent" || e === "global",
    default: "parent"
    /* ComponentI18nScope */
  },
  i18n: {
    type: Object
  }
};
function Fi({ slots: e }, t) {
  return t.length === 1 && t[0] === "default" ? (e.default ? e.default() : []).reduce((r, s) => [
    ...r,
    // prettier-ignore
    ...s.type === Un ? s.children : [s]
  ], []) : t.reduce((n, r) => {
    const s = e[r];
    return s && (n[r] = s()), n;
  }, V());
}
function hr() {
  return Un;
}
J({
  keypath: {
    type: String,
    required: !0
  },
  plural: {
    type: [Number, String],
    validator: (e) => z(e) || !isNaN(e)
  }
}, zt);
function Ui(e) {
  return K(e) && !I(e[0]);
}
function Er(e, t, n, r) {
  const { slots: s, attrs: i } = t;
  return () => {
    const o = { part: !0 };
    let u = V();
    e.locale && (o.locale = e.locale), I(e.format) ? o.key = e.format : F(e.format) && (I(e.format.key) && (o.key = e.format.key), u = Object.keys(e.format).reduce((N, v) => n.includes(v) ? J(V(), N, { [v]: e.format[v] }) : N, V()));
    const c = r(e.value, o, u);
    let g = [o.key];
    K(c) ? g = c.map((N, v) => {
      const S = s[N.type], C = S ? S({ [N.type]: N.value, index: v, parts: c }) : [N.value];
      return Ui(C) && (C[0].key = `${N.type}-${v}`), C;
    }) : I(c) && (g = [c]);
    const O = J(V(), i), T = I(e.tag) || F(e.tag) ? e.tag : hr();
    return Fn(T, O, g);
  };
}
J({
  value: {
    type: Number,
    required: !0
  },
  format: {
    type: [String, Object]
  }
}, zt);
const Wi = /* @__PURE__ */ Ee("global-vue-i18n");
function Jt(e = {}) {
  const t = Xt();
  if (t == null)
    throw $e(q.MUST_BE_CALL_SETUP_TOP);
  if (!t.isCE && t.appContext.app != null && !t.appContext.app.__VUE_I18N_SYMBOL__)
    throw $e(q.NOT_INSTALLED);
  const n = Vi(t), r = Gi(n), s = mr(t), i = xi(e, s);
  if (i === "global")
    return Si(r, e, s), r;
  if (i === "parent") {
    let c = $i(n, t, e.__useComponent);
    return c == null && (process.env.NODE_ENV !== "production" && fe(st(ue.NOT_FOUND_PARENT_SCOPE)), c = r), c;
  }
  const o = n;
  let u = o.__getInstance(t);
  if (u == null) {
    const c = J({}, e);
    "__i18n" in s && (c.__i18n = s.__i18n), r && (c.__root = r), u = Mi(c), o.__composerExtend && (u[xt] = o.__composerExtend(u)), ji(o, t, u), o.__setInstance(t, u);
  } else
    process.env.NODE_ENV !== "production" && i === "local" && fe(st(ue.DUPLICATE_USE_I18N_CALLING));
  return u;
}
function Vi(e) {
  const t = Mn(e.isCE ? Wi : e.appContext.app.__VUE_I18N_SYMBOL__);
  if (!t)
    throw $e(e.isCE ? q.NOT_INSTALLED_WITH_PROVIDE : q.UNEXPECTED_ERROR);
  return t;
}
function xi(e, t) {
  return at(e) ? "__i18n" in t ? "local" : "global" : e.useScope ? e.useScope : "local";
}
function Gi(e) {
  return e.mode === "composition" ? e.global : e.global.__composer;
}
function $i(e, t, n = !1) {
  let r = null;
  const s = t.root;
  let i = Hi(t, n);
  for (; i != null; ) {
    const o = e;
    if (e.mode === "composition")
      r = o.__getInstance(i);
    else if (__VUE_I18N_LEGACY_API__) {
      const u = o.__getInstance(i);
      u != null && (r = u.__composer, n && r && !r[_r] && (r = null));
    }
    if (r != null || s === i)
      break;
    i = i.parent;
  }
  return r;
}
function Hi(e, t = !1) {
  return e == null ? null : t && e.vnode.ctx || e.parent;
}
function ji(e, t, n) {
  let r = null;
  br(() => {
    if (process.env.NODE_ENV !== "production") {
      t.__VUE_I18N__ = n, r = Jr();
      const s = n;
      s[Wt] && s[Wt](r), r.on("*", Rn);
    }
  }, t), Or(() => {
    const s = n;
    process.env.NODE_ENV !== "production" && (r && r.off("*", Rn), s[Vt] && s[Vt](), delete t.__VUE_I18N__), e.__deleteInstance(t);
    const i = s[xt];
    i && (i(), delete s[xt]);
  }, t);
}
J({
  value: {
    type: [Number, Date],
    required: !0
  },
  format: {
    type: [String, Object]
  }
}, zt);
ki();
ai(Ws);
li(ti);
oi(Zn);
if (process.env.NODE_ENV !== "production" || __INTLIFY_PROD_DEVTOOLS__) {
  const e = Te();
  e.__INTLIFY__ = !0, Vs(e.__INTLIFY_DEVTOOLS_GLOBAL_HOOK__);
}
process.env.NODE_ENV;
const na = (e, t) => {
  const n = e.__vccOpts || e;
  for (const [r, s] of t)
    n[r] = s;
  return n;
};
export {
  qi as C,
  je as I,
  Wn as L,
  Zi as P,
  ea as T,
  $n as W,
  na as _,
  ta as a,
  Qi as b,
  zi as c,
  Ji as d,
  Gn as e,
  Rr as f,
  Bi as g,
  b as i,
  Ki as l,
  Xi as o,
  Jt as u
};
