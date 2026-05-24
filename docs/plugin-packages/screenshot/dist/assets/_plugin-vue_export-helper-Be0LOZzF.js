import { x as jn, c as j, V as on, s as Ar, r as vr, S as Dr, a as xe, w as cn, l as Sr, m as Pr, d as Xt, U as Hn, W as Rr, F as Bn } from "./runtime-entry-PIXKtBfD.js";
function Mr(e, t, n, r) {
  if (typeof t == "function" ? e !== t || !0 : !t.has(e)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
  return n === "m" ? r : n === "a" ? r.call(e) : r ? r.value : t.get(e);
}
function Fr(e, t, n, r, s) {
  if (typeof t == "function" ? e !== t || !0 : !t.has(e)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
  return t.set(e, n), n;
}
var st;
const ie = "__TAURI_TO_IPC_KEY__";
function Ur(e, t = !1) {
  return window.__TAURI_INTERNALS__.transformCallback(e, t);
}
async function b(e, t = {}, n) {
  return window.__TAURI_INTERNALS__.invoke(e, t, n);
}
function Wr(e, t = "asset") {
  return window.__TAURI_INTERNALS__.convertFileSrc(e, t);
}
class Vr {
  get rid() {
    return Mr(this, st, "f");
  }
  constructor(t) {
    st.set(this, void 0), Fr(this, st, t);
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
st = /* @__PURE__ */ new WeakMap();
class Yn {
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
    return new je(this.width * t, this.height * t);
  }
  [ie]() {
    return {
      width: this.width,
      height: this.height
    };
  }
  toJSON() {
    return this[ie]();
  }
}
class je {
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
    return new Yn(this.width / t, this.height / t);
  }
  [ie]() {
    return {
      width: this.width,
      height: this.height
    };
  }
  toJSON() {
    return this[ie]();
  }
}
class De {
  constructor(t) {
    this.size = t;
  }
  toLogical(t) {
    return this.size instanceof Yn ? this.size : this.size.toLogical(t);
  }
  toPhysical(t) {
    return this.size instanceof je ? this.size : this.size.toPhysical(t);
  }
  [ie]() {
    return {
      [`${this.size.type}`]: {
        width: this.size.width,
        height: this.size.height
      }
    };
  }
  toJSON() {
    return this[ie]();
  }
}
class Kn {
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
    return new Ne(this.x * t, this.y * t);
  }
  [ie]() {
    return {
      x: this.x,
      y: this.y
    };
  }
  toJSON() {
    return this[ie]();
  }
}
class Ne {
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
    return new Kn(this.x / t, this.y / t);
  }
  [ie]() {
    return {
      x: this.x,
      y: this.y
    };
  }
  toJSON() {
    return this[ie]();
  }
}
class et {
  constructor(t) {
    this.position = t;
  }
  toLogical(t) {
    return this.position instanceof Kn ? this.position : this.position.toLogical(t);
  }
  toPhysical(t) {
    return this.position instanceof Ne ? this.position : this.position.toPhysical(t);
  }
  [ie]() {
    return {
      [`${this.position.type}`]: {
        x: this.position.x,
        y: this.position.y
      }
    };
  }
  toJSON() {
    return this[ie]();
  }
}
var ne;
(function(e) {
  e.WINDOW_RESIZED = "tauri://resize", e.WINDOW_MOVED = "tauri://move", e.WINDOW_CLOSE_REQUESTED = "tauri://close-requested", e.WINDOW_DESTROYED = "tauri://destroyed", e.WINDOW_FOCUS = "tauri://focus", e.WINDOW_BLUR = "tauri://blur", e.WINDOW_SCALE_FACTOR_CHANGED = "tauri://scale-change", e.WINDOW_THEME_CHANGED = "tauri://theme-changed", e.WINDOW_CREATED = "tauri://window-created", e.WEBVIEW_CREATED = "tauri://webview-created", e.DRAG_ENTER = "tauri://drag-enter", e.DRAG_OVER = "tauri://drag-over", e.DRAG_DROP = "tauri://drag-drop", e.DRAG_LEAVE = "tauri://drag-leave";
})(ne || (ne = {}));
async function zn(e, t) {
  await b("plugin:event|unlisten", {
    event: e,
    eventId: t
  });
}
async function Xn(e, t, n) {
  var r;
  const s = typeof n?.target == "string" ? { kind: "AnyLabel", label: n.target } : (r = n?.target) !== null && r !== void 0 ? r : { kind: "Any" };
  return b("plugin:event|listen", {
    event: e,
    target: s,
    handler: Ur(t)
  }).then((i) => async () => zn(e, i));
}
async function xr(e, t, n) {
  return Xn(e, (r) => {
    zn(e, r.id), t(r);
  }, n);
}
async function $r(e, t) {
  await b("plugin:event|emit", {
    event: e,
    payload: t
  });
}
async function Gr(e, t, n) {
  await b("plugin:event|emit_to", {
    target: typeof e == "string" ? { kind: "AnyLabel", label: e } : e,
    event: t,
    payload: n
  });
}
class He extends Vr {
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
      rgba: lt(t),
      width: n,
      height: r
    }).then((s) => new He(s));
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
      bytes: lt(t)
    }).then((n) => new He(n));
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
    return b("plugin:image|from_path", { path: t }).then((n) => new He(n));
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
function lt(e) {
  return e == null ? null : typeof e == "string" ? e : e instanceof He ? e.rid : e;
}
var Ft;
(function(e) {
  e[e.Critical = 1] = "Critical", e[e.Informational = 2] = "Informational";
})(Ft || (Ft = {}));
class jr {
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
var un;
(function(e) {
  e.None = "none", e.Normal = "normal", e.Indeterminate = "indeterminate", e.Paused = "paused", e.Error = "error";
})(un || (un = {}));
function Hr() {
  return new Jn(window.__TAURI_INTERNALS__.metadata.currentWindow.label, {
    // @ts-expect-error `skip` is not defined in the public API but it is handled by the constructor
    skip: !0
  });
}
async function Dt() {
  return b("plugin:window|get_all_windows").then((e) => e.map((t) => new Jn(t, {
    // @ts-expect-error `skip` is not defined in the public API but it is handled by the constructor
    skip: !0
  })));
}
const St = ["tauri://created", "tauri://error"];
class Jn {
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
    return (n = (await Dt()).find((r) => r.label === t)) !== null && n !== void 0 ? n : null;
  }
  /**
   * Get an instance of `Window` for the current window.
   */
  static getCurrent() {
    return Hr();
  }
  /**
   * Gets a list of instances of `Window` for all available windows.
   */
  static async getAll() {
    return Dt();
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
    for (const t of await Dt())
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
    } : Xn(t, n, {
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
    } : xr(t, n, {
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
    if (St.includes(t)) {
      for (const r of this.listeners[t] || [])
        r({
          event: t,
          id: -1,
          payload: n
        });
      return;
    }
    return $r(t, n);
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
    if (St.includes(n)) {
      for (const s of this.listeners[n] || [])
        s({
          event: n,
          id: -1,
          payload: r
        });
      return;
    }
    return Gr(t, n, r);
  }
  /** @ignore */
  _handleTauriEvent(t, n) {
    return St.includes(t) ? (t in this.listeners ? this.listeners[t].push(n) : this.listeners[t] = [n], !0) : !1;
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
    }).then((t) => new Ne(t));
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
    }).then((t) => new Ne(t));
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
    }).then((t) => new je(t));
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
    }).then((t) => new je(t));
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
    return t && (t === Ft.Critical ? n = { type: "Critical" } : n = { type: "Informational" }), b("plugin:window|request_user_attention", {
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
      value: t instanceof De ? t : new De(t)
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
      value: t instanceof De ? t : t ? new De(t) : null
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
      value: t instanceof De ? t : t ? new De(t) : null
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
      value: t instanceof et ? t : new et(t)
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
      value: lt(t)
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
      value: t instanceof et ? t : new et(t)
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
      value: t ? lt(t) : void 0
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
    return this.listen(ne.WINDOW_RESIZED, (n) => {
      n.payload = new je(n.payload), t(n);
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
    return this.listen(ne.WINDOW_MOVED, (n) => {
      n.payload = new Ne(n.payload), t(n);
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
    return this.listen(ne.WINDOW_CLOSE_REQUESTED, async (n) => {
      const r = new jr(n);
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
    const n = await this.listen(ne.DRAG_ENTER, (l) => {
      t({
        ...l,
        payload: {
          type: "enter",
          paths: l.payload.paths,
          position: new Ne(l.payload.position)
        }
      });
    }), r = await this.listen(ne.DRAG_OVER, (l) => {
      t({
        ...l,
        payload: {
          type: "over",
          position: new Ne(l.payload.position)
        }
      });
    }), s = await this.listen(ne.DRAG_DROP, (l) => {
      t({
        ...l,
        payload: {
          type: "drop",
          paths: l.payload.paths,
          position: new Ne(l.payload.position)
        }
      });
    }), i = await this.listen(ne.DRAG_LEAVE, (l) => {
      t({ ...l, payload: { type: "leave" } });
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
    const n = await this.listen(ne.WINDOW_FOCUS, (s) => {
      t({ ...s, payload: !0 });
    }), r = await this.listen(ne.WINDOW_BLUR, (s) => {
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
    return this.listen(ne.WINDOW_SCALE_FACTOR_CHANGED, t);
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
    return this.listen(ne.WINDOW_THEME_CHANGED, t);
  }
}
var fn;
(function(e) {
  e.Disabled = "disabled", e.Throttle = "throttle", e.Suspend = "suspend";
})(fn || (fn = {}));
var dn;
(function(e) {
  e.AppearanceBased = "appearanceBased", e.Light = "light", e.Dark = "dark", e.MediumLight = "mediumLight", e.UltraDark = "ultraDark", e.Titlebar = "titlebar", e.Selection = "selection", e.Menu = "menu", e.Popover = "popover", e.Sidebar = "sidebar", e.HeaderView = "headerView", e.Sheet = "sheet", e.WindowBackground = "windowBackground", e.HudWindow = "hudWindow", e.FullScreenUI = "fullScreenUI", e.Tooltip = "tooltip", e.ContentBackground = "contentBackground", e.UnderWindowBackground = "underWindowBackground", e.UnderPageBackground = "underPageBackground", e.Mica = "mica", e.Blur = "blur", e.Acrylic = "acrylic", e.Tabbed = "tabbed", e.TabbedDark = "tabbedDark", e.TabbedLight = "tabbedLight";
})(dn || (dn = {}));
var _n;
(function(e) {
  e.FollowsWindowActiveState = "followsWindowActiveState", e.Active = "active", e.Inactive = "inactive";
})(_n || (_n = {}));
async function Br(e, t) {
  return await b("get_local_plugin_resource_path", {
    pluginId: e,
    relativePath: t
  });
}
const Y = {
  info: (e, t, ...n) => {
    b("frontend_log", {
      level: "info",
      message: e,
      data: t === void 0 ? null : it(t)
    }).catch(() => {
    });
  },
  error: (e, t) => {
    b("frontend_log", {
      level: "error",
      message: e,
      data: t === void 0 ? null : it(t)
    }).catch(() => {
    });
  },
  warn: (e, t) => {
    b("frontend_log", {
      level: "warn",
      message: e,
      data: t === void 0 ? null : it(t)
    }).catch(() => {
    });
  },
  // 调试日志 - 只在开发模式或调试模式下输出
  debug: (e, t) => {
  }
}, Aa = {
  log: (e, t) => {
    b("append_ocr_diagnostic_log", {
      message: e,
      data: t === void 0 ? null : it(t)
    }).catch(() => {
    });
  }
};
function it(e) {
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
const Yr = "resources/transformers/transformers.min.js", Kr = ["translation-offline-runtime", "translation"], zr = "https://huggingface.co/", Xr = "{model}/resolve/{revision}/", Jr = "/__snippets_code_disabled_transformers_local_models__/", qr = [
  "ort-wasm-simd-threaded.wasm",
  "ort-wasm-simd.wasm",
  "ort-wasm-threaded.wasm",
  "ort-wasm.wasm"
];
let $e = null;
const Zr = (e) => {
  const t = e.search(/[?#]/), n = t >= 0 ? e.slice(0, t) : e;
  return n.slice(0, n.lastIndexOf("/") + 1);
}, Qr = (e) => {
  const t = Zr(e);
  return Object.fromEntries(
    qr.map((n) => [n, `${t}${n}`])
  );
}, qn = (e, t) => {
  var n, r;
  e.useBrowserCache = !0, e.allowRemoteModels = !0, e.remoteHost = zr, e.remotePathTemplate = Xr, e.allowLocalModels = !1, e.localModelPath = Jr, t && (e.backends ?? (e.backends = {}), (n = e.backends).onnx ?? (n.onnx = {}), (r = e.backends.onnx).wasm ?? (r.wasm = {}), e.backends.onnx.wasm.wasmPaths = Qr(t), e.backends.onnx.wasm.numThreads = 1);
};
async function es() {
  return $e || ($e = (async () => {
    for (const e of Kr) {
      const t = await Br(e, Yr);
      if (!t) continue;
      const n = Wr(t), r = await import(
        /* @vite-ignore */
        n
      );
      return qn(r.env, n), Y.info(`[离线翻译] 已从插件资源加载 Transformers runtime: ${e}`, {
        wasmPaths: r.env.backends?.onnx?.wasm?.wasmPaths,
        numThreads: r.env.backends?.onnx?.wasm?.numThreads,
        remoteHost: r.env.remoteHost,
        remotePathTemplate: r.env.remotePathTemplate,
        allowLocalModels: r.env.allowLocalModels,
        localModelPath: r.env.localModelPath
      }), r;
    }
    throw new Error("离线翻译运行时未安装，请先安装 translation-offline-runtime 插件资源包");
  })().catch((e) => {
    throw $e = null, e;
  }), $e);
}
let he = null, Be = !1, Se = null, Ie = null, Ut = null;
const ts = "Xenova/opus-mt-en-zh", ns = [
  { name: "tokenizer_config.json", size: "~1KB" },
  { name: "config.json", size: "~1KB" },
  { name: "tokenizer.json", size: "~2MB" },
  { name: "generation_config.json", size: "~1KB" },
  { name: "onnx/encoder_model_quantized.onnx", size: "~75MB" },
  { name: "onnx/decoder_model_merged_quantized.onnx", size: "~220MB" }
], rs = 3e5;
function ss(e) {
  Ut = e;
}
function is() {
  return ns;
}
function as(e, t, n) {
  return Promise.race([
    e,
    new Promise(
      (r, s) => setTimeout(() => s(new Error(n)), t)
    )
  ]);
}
async function Zn() {
  return he || Se || (Be = !0, Y.info("[离线翻译] 正在加载翻译模型..."), Se = (async () => {
    try {
      const { pipeline: e, env: t } = await es();
      qn(t);
      let n = "";
      const r = e("translation", ts, {
        dtype: "q8",
        device: "wasm",
        revision: "main",
        local_files_only: !1,
        progress_callback: (i) => {
          i.status === "done" && i.file && i.file !== n && (n = i.file, Y.info(`[离线翻译] 已加载: ${i.file}`)), Ut && Ut({
            status: i.status,
            progress: i.progress,
            file: i.file
          });
        }
      });
      return he = await as(
        r,
        rs,
        "模型加载超时，请检查网络连接后重试"
      ), Y.info("[离线翻译] 翻译模型加载完成"), Be = !1, he;
    } catch (e) {
      throw Be = !1, Se = null, Y.error("[离线翻译] 模型加载失败:", e), e;
    }
  })(), Se);
}
async function ls(e) {
  if (!e?.trim()) return e;
  Ie = new AbortController();
  const t = Ie.signal;
  try {
    const n = await Zn();
    if (t.aborted)
      throw new Error("翻译已取消");
    const r = e.split(`
`), s = [];
    for (const i of r) {
      if (t.aborted)
        throw new Error("翻译已取消");
      const l = i.trim();
      if (!l) {
        s.push("");
        continue;
      }
      const c = await n(l);
      if (t.aborted)
        throw new Error("翻译已取消");
      if (Array.isArray(c) && c.length > 0) {
        const u = c[0].translation_text || l;
        s.push(u);
      } else
        s.push(l);
    }
    return s.join(`
`);
  } catch (n) {
    throw n instanceof Error && n.message === "翻译已取消" ? (Y.info("[离线翻译] 翻译已取消"), n) : n instanceof Error && n.message.includes("离线翻译运行时未安装") ? (Y.warn("[离线翻译] 运行时资源未安装"), n) : (Y.error("[离线翻译] 翻译失败:", n), new Error("离线翻译失败，请检查模型是否正确加载"));
  } finally {
    Ie = null;
  }
}
function os() {
  Ie && (Ie.abort(), Ie = null, Y.info("[离线翻译] 已发送取消信号"));
}
function cs() {
  return Ie !== null;
}
async function us() {
  await Zn();
}
function fs() {
  return he !== null;
}
function ds() {
  return Be;
}
async function Qn() {
  try {
    if ("caches" in window) {
      const t = await caches.keys();
      Y.info(`[离线翻译] Cache Storage 列表: ${JSON.stringify(t)}`);
      for (const n of t)
        if (n.includes("transformers") || n.includes("huggingface")) {
          const s = await (await caches.open(n)).keys();
          if (Y.info(`[离线翻译] Cache "${n}" 包含 ${s.length} 个文件`), s.some(
            (l) => l.url.includes("opus-mt-en-zh") || l.url.includes("Xenova")
          )) {
            const l = s.some((c) => c.url.includes(".onnx"));
            if (Y.info(`[离线翻译] 找到模型缓存，包含 ONNX: ${l}`), l)
              return {
                isCached: !0,
                cacheType: "cache-storage",
                cacheName: n,
                estimatedSize: "~300MB"
              };
          }
        }
    }
    const e = await indexedDB.databases();
    Y.info(`[离线翻译] IndexedDB 列表: ${JSON.stringify(e.map((t) => t.name))}`);
    for (const t of e)
      if (t.name && (t.name.includes("transformers") || t.name.includes("huggingface") || t.name.includes("onnx") || t.name.includes("localforage")))
        return Y.info(`[离线翻译] 找到 IndexedDB 缓存: ${t.name}`), {
          isCached: !0,
          cacheType: "indexeddb",
          cacheName: t.name,
          estimatedSize: "~300MB"
        };
    return Y.info("[离线翻译] 未找到模型缓存"), { isCached: !1, cacheType: "none" };
  } catch (e) {
    return Y.warn("[离线翻译] 检查缓存失败:", e), { isCached: !1, cacheType: "none" };
  }
}
async function _s() {
  return (await Qn()).isCached;
}
function ms() {
  return he !== null;
}
async function hs() {
  if (he)
    try {
      await he.dispose?.();
    } catch {
    }
  he = null, Se = null, Be = !1, Y.info("[离线翻译] 翻译器已释放");
}
async function Es() {
  try {
    const e = await indexedDB.databases();
    for (const t of e)
      t.name && (t.name.includes("transformers") || t.name.includes("onnx")) && (indexedDB.deleteDatabase(t.name), Y.info(`[离线翻译] 已删除 IndexedDB: ${t.name}`));
    if ("caches" in window) {
      const t = await caches.keys();
      for (const n of t)
        (n.includes("transformers") || n.includes("onnx")) && (await caches.delete(n), Y.info(`[离线翻译] 已删除 Cache: ${n}`));
    }
    Y.info("[离线翻译] 模型缓存已清除");
  } catch (e) {
    throw Y.error("[离线翻译] 清除缓存失败:", e), e;
  }
}
const va = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  canUseOfflineTranslation: ms,
  cancelOfflineTranslation: os,
  clearModelCache: Es,
  disposeOfflineTranslator: hs,
  getModelCacheInfo: Qn,
  getModelFiles: is,
  isModelCached: _s,
  isOfflineTranslatorInitializing: ds,
  isOfflineTranslatorReady: fs,
  isTranslationInProgress: cs,
  setProgressCallback: ss,
  translateOffline: ls,
  warmupOfflineTranslator: us
}, Symbol.toStringTag, { value: "Module" }));
function gs(e) {
  if (!e) return "unknown";
  const t = e.match(/[\u4e00-\u9fa5]/g), n = t ? t.length : 0, r = e.match(/[\u3040-\u30ff]/g), s = r ? r.length : 0, i = e.match(/[\uac00-\ud7af]/g), l = i ? i.length : 0, c = e.match(/[a-zA-Z]/g), u = c ? c.length : 0, T = n + s + l + u;
  return T === 0 ? "unknown" : s >= 3 && s > u && s / T >= 0.2 ? "ja" : l >= 3 && l > n && l > u && l / T >= 0.2 ? "ko" : n > u ? "zh" : u > n ? "en" : "unknown";
}
function Da(e) {
  return e === "zh" || e === "en";
}
function Sa(e) {
  return gs(e);
}
var ps = {
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
function Ns() {
  return "icon-" + ((1 + Math.random()) * 4294967296 | 0).toString(16).substring(1);
}
function Ls(e, t, n) {
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
var bs = Symbol("icon-context");
function Je(e, t, n) {
  var r = {
    name: "icon-" + e,
    props: ["size", "strokeWidth", "strokeLinecap", "strokeLinejoin", "theme", "fill", "spin"],
    setup: function(i) {
      var l = Ns(), c = jn(bs, ps);
      return function() {
        var u = i.size, g = i.strokeWidth, T = i.strokeLinecap, O = i.strokeLinejoin, N = i.theme, v = i.fill, S = i.spin, C = Ls(l, {
          size: u,
          strokeWidth: g,
          strokeLinecap: T,
          strokeLinejoin: O,
          theme: N,
          fill: v
        }, c), k = [c.prefix + "-icon"];
        return k.push(c.prefix + "-icon-" + e), t && c.rtl && k.push(c.prefix + "-icon-rtl"), S && k.push(c.prefix + "-icon-spin"), j("span", {
          class: k.join(" ")
        }, [n(C)]);
      };
    }
  };
  return r;
}
const Pa = Je("check", !0, function(e) {
  return j("svg", {
    width: e.size,
    height: e.size,
    viewBox: "0 0 48 48",
    fill: "none"
  }, [j("path", {
    d: "M43 11L16.875 37L5 25.1818",
    stroke: e.colors[0],
    "stroke-width": e.strokeWidth,
    "stroke-linecap": e.strokeLinecap,
    "stroke-linejoin": e.strokeLinejoin
  }, null)]);
}), Ra = Je("close", !1, function(e) {
  return j("svg", {
    width: e.size,
    height: e.size,
    viewBox: "0 0 48 48",
    fill: "none"
  }, [j("path", {
    d: "M8 8L40 40",
    stroke: e.colors[0],
    "stroke-width": e.strokeWidth,
    "stroke-linecap": e.strokeLinecap,
    "stroke-linejoin": e.strokeLinejoin
  }, null), j("path", {
    d: "M8 40L40 8",
    stroke: e.colors[0],
    "stroke-width": e.strokeWidth,
    "stroke-linecap": e.strokeLinecap,
    "stroke-linejoin": e.strokeLinejoin
  }, null)]);
}), Ma = Je("pushpin", !1, function(e) {
  return j("svg", {
    width: e.size,
    height: e.size,
    viewBox: "0 0 48 48",
    fill: "none"
  }, [j("path", {
    d: "M32 4H16L20 7L16 20C16 20 10 24 10 28H20L24 44L28 28H38C38 24 34 21.1667 32 20L28 7L32 4Z",
    fill: e.colors[1],
    stroke: e.colors[0],
    "stroke-width": e.strokeWidth,
    "stroke-linecap": e.strokeLinecap,
    "stroke-linejoin": e.strokeLinejoin
  }, null)]);
}), Fa = Je("text-recognition", !1, function(e) {
  return j("svg", {
    width: e.size,
    height: e.size,
    viewBox: "0 0 48 48",
    fill: "none"
  }, [j("path", {
    d: "M6 33V39C6 40.6569 7.34315 42 9 42H15",
    stroke: e.colors[0],
    "stroke-width": e.strokeWidth,
    "stroke-linecap": e.strokeLinecap,
    "stroke-linejoin": e.strokeLinejoin
  }, null), j("path", {
    d: "M33 42H39C40.6569 42 42 40.6569 42 39V33",
    stroke: e.colors[0],
    "stroke-width": e.strokeWidth,
    "stroke-linecap": e.strokeLinecap,
    "stroke-linejoin": e.strokeLinejoin
  }, null), j("path", {
    d: "M42 15V9C42 7.34315 40.6569 6 39 6H33",
    stroke: e.colors[0],
    "stroke-width": e.strokeWidth,
    "stroke-linecap": e.strokeLinecap,
    "stroke-linejoin": e.strokeLinejoin
  }, null), j("path", {
    d: "M6 15V9C6 7.34315 7.34315 6 9 6H15",
    stroke: e.colors[0],
    "stroke-width": e.strokeWidth,
    "stroke-linecap": e.strokeLinecap,
    "stroke-linejoin": e.strokeLinejoin
  }, null), j("path", {
    d: "M24 15V35",
    stroke: e.colors[0],
    "stroke-width": e.strokeWidth,
    "stroke-linecap": e.strokeLinecap,
    "stroke-linejoin": e.strokeLinejoin
  }, null), j("path", {
    d: "M17 15H24H31",
    stroke: e.colors[0],
    "stroke-width": e.strokeWidth,
    "stroke-linecap": e.strokeLinecap,
    "stroke-linejoin": e.strokeLinejoin
  }, null)]);
}), Ua = Je("translate", !0, function(e) {
  return j("svg", {
    width: e.size,
    height: e.size,
    viewBox: "0 0 48 48",
    fill: "none"
  }, [j("path", {
    d: "M28.2857 37H39.7143M42 42L39.7143 37L42 42ZM26 42L28.2857 37L26 42ZM28.2857 37L34 24L39.7143 37H28.2857Z",
    stroke: e.colors[0],
    "stroke-width": e.strokeWidth,
    "stroke-linecap": e.strokeLinecap,
    "stroke-linejoin": e.strokeLinejoin
  }, null), j("path", {
    d: "M16 6L17 9",
    stroke: e.colors[0],
    "stroke-width": e.strokeWidth,
    "stroke-linecap": e.strokeLinecap,
    "stroke-linejoin": e.strokeLinejoin
  }, null), j("path", {
    d: "M6 11H28",
    stroke: e.colors[0],
    "stroke-width": e.strokeWidth,
    "stroke-linecap": e.strokeLinecap,
    "stroke-linejoin": e.strokeLinejoin
  }, null), j("path", {
    d: "M10 16C10 16 11.7895 22.2609 16.2632 25.7391C20.7368 29.2174 28 32 28 32",
    stroke: e.colors[0],
    "stroke-width": e.strokeWidth,
    "stroke-linecap": e.strokeLinecap,
    "stroke-linejoin": e.strokeLinejoin
  }, null), j("path", {
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
function de(e, t) {
  typeof console < "u" && (console.warn("[intlify] " + e), t && console.warn(t.stack));
}
const mn = {};
function Ts(e) {
  mn[e] || (mn[e] = !0, de(e));
}
const ge = typeof window < "u";
let re, Ce;
if (process.env.NODE_ENV !== "production") {
  const e = ge && window.performance;
  e && e.mark && e.measure && e.clearMarks && // @ts-ignore browser compat
  e.clearMeasures && (re = (t) => {
    e.mark(t);
  }, Ce = (t, n, r) => {
    e.measure(t, n, r), e.clearMarks(n), e.clearMarks(r);
  });
}
const Os = /\{([0-9a-zA-Z]+)\}/g;
function dt(e, ...t) {
  return t.length === 1 && F(t[0]) && (t = t[0]), (!t || !t.hasOwnProperty) && (t = {}), e.replace(Os, (n, r) => t.hasOwnProperty(r) ? t[r] : "");
}
const pe = (e, t = !1) => t ? Symbol.for(e) : Symbol(e), ws = (e, t, n) => ys({ l: e, k: t, s: n }), ys = (e) => JSON.stringify(e).replace(/\u2028/g, "\\u2028").replace(/\u2029/g, "\\u2029").replace(/\u0027/g, "\\u0027"), J = (e) => typeof e == "number" && isFinite(e), Is = (e) => Jt(e) === "[object Date]", ot = (e) => Jt(e) === "[object RegExp]", _t = (e) => M(e) && Object.keys(e).length === 0, q = Object.assign, Cs = Object.create, V = (e = null) => Cs(e);
let hn;
const ye = () => hn || (hn = typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : typeof window < "u" ? window : typeof global < "u" ? global : V());
function En(e) {
  return e.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;").replace(/'/g, "&apos;").replace(/\//g, "&#x2F;").replace(/=/g, "&#x3D;");
}
function gn(e) {
  return e.replace(/&(?![a-zA-Z0-9#]{2,6};)/g, "&amp;").replace(/"/g, "&quot;").replace(/'/g, "&apos;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
}
function ks(e) {
  return e = e.replace(/(\w+)\s*=\s*"([^"]*)"/g, (r, s, i) => `${s}="${gn(i)}"`), e = e.replace(/(\w+)\s*=\s*'([^']*)'/g, (r, s, i) => `${s}='${gn(i)}'`), /\s*on\w+\s*=\s*["']?[^"'>]+["']?/gi.test(e) && (process.env.NODE_ENV !== "production" && de("Potentially dangerous event handlers detected in translation. Consider removing onclick, onerror, etc. from your translation messages."), e = e.replace(/(\s+)(on)(\w+\s*=)/gi, "$1&#111;n$3")), [
    // In href, src, action, formaction attributes
    /(\s+(?:href|src|action|formaction)\s*=\s*["']?)\s*javascript:/gi,
    // In style attributes within url()
    /(style\s*=\s*["'][^"']*url\s*\(\s*)javascript:/gi
  ].forEach((r) => {
    e = e.replace(r, "$1javascript&#58;");
  }), e;
}
const As = Object.prototype.hasOwnProperty;
function le(e, t) {
  return As.call(e, t);
}
const z = Array.isArray, $ = (e) => typeof e == "function", I = (e) => typeof e == "string", K = (e) => typeof e == "boolean", F = (e) => e !== null && typeof e == "object", vs = (e) => F(e) && $(e.then) && $(e.catch), er = Object.prototype.toString, Jt = (e) => er.call(e), M = (e) => Jt(e) === "[object Object]", Ds = (e) => e == null ? "" : z(e) || M(e) && e.toString === er ? JSON.stringify(e, null, 2) : String(e);
function qt(e, t = "") {
  return e.reduce((n, r, s) => s === 0 ? n + r : n + t + r, "");
}
const pn = 2;
function Ss(e, t = 0, n = e.length) {
  const r = e.split(/\r?\n/);
  let s = 0;
  const i = [];
  for (let l = 0; l < r.length; l++)
    if (s += r[l].length + 1, s >= t) {
      for (let c = l - pn; c <= l + pn || n > s; c++) {
        if (c < 0 || c >= r.length)
          continue;
        const u = c + 1;
        i.push(`${u}${" ".repeat(3 - String(u).length)}|  ${r[c]}`);
        const g = r[c].length;
        if (c === l) {
          const T = t - (s - g) + 1, O = Math.max(1, n > s ? g - T : n - t);
          i.push("   |  " + " ".repeat(T) + "^".repeat(O));
        } else if (c > l) {
          if (n > s) {
            const T = Math.max(Math.min(n - s, g), 1);
            i.push("   |  " + "^".repeat(T));
          }
          s += g + 1;
        }
      }
      break;
    }
  return i.join(`
`);
}
function Ps() {
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
const tt = (e) => !F(e) || z(e);
function at(e, t) {
  if (tt(e) || tt(t))
    throw new Error("Invalid value");
  const n = [{ src: e, des: t }];
  for (; n.length; ) {
    const { src: r, des: s } = n.pop();
    Object.keys(r).forEach((i) => {
      i !== "__proto__" && (F(r[i]) && !F(s[i]) && (s[i] = Array.isArray(r[i]) ? [] : V()), tt(s[i]) || tt(r[i]) ? s[i] = r[i] : n.push({ src: r[i], des: s[i] }));
    });
  }
}
/*!
  * message-compiler v11.2.2
  * (c) 2025 kazuya kawaguchi
  * Released under the MIT License.
  */
function Rs(e, t, n) {
  return { line: e, column: t, offset: n };
}
function Wt(e, t, n) {
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
}, Ms = 17, Fs = {
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
function Me(e, t, n = {}) {
  const { domain: r, messages: s, args: i } = n, l = process.env.NODE_ENV !== "production" ? dt((s || Fs)[e] || "", ...i || []) : e, c = new SyntaxError(String(l));
  return c.code = e, t && (c.location = t), c.domain = r, c;
}
function Us(e) {
  throw e;
}
const Ws = /<\/?[\w\s="/.':;#-\/]+>/, Vs = (e) => Ws.test(e), ce = " ", xs = "\r", Q = `
`, $s = "\u2028", Gs = "\u2029";
function js(e) {
  const t = e;
  let n = 0, r = 1, s = 1, i = 0;
  const l = (E) => t[E] === xs && t[E + 1] === Q, c = (E) => t[E] === Q, u = (E) => t[E] === Gs, g = (E) => t[E] === $s, T = (E) => l(E) || c(E) || u(E) || g(E), O = () => n, N = () => r, v = () => s, S = () => i, C = (E) => l(E) || u(E) || g(E) ? Q : t[E], k = () => C(n), f = () => C(n + i);
  function _() {
    return i = 0, T(n) && (r++, s = 0), l(n) && n++, n++, s++, t[n];
  }
  function L() {
    return l(n + i) && i++, i++, t[n + i];
  }
  function m() {
    n = 0, r = 1, s = 1, i = 0;
  }
  function w(E = 0) {
    i = E;
  }
  function y() {
    const E = n + i;
    for (; E !== n; )
      _();
    i = 0;
  }
  return {
    index: O,
    line: N,
    column: v,
    peekOffset: S,
    charAt: C,
    currentChar: k,
    currentPeek: f,
    next: _,
    peek: L,
    reset: m,
    resetPeek: w,
    skipToPeek: y
  };
}
const me = void 0, Hs = ".", Nn = "'", Bs = "tokenizer";
function Ys(e, t = {}) {
  const n = t.location !== !1, r = js(e), s = () => r.index(), i = () => Rs(r.line(), r.column(), r.index()), l = i(), c = s(), u = {
    currentType: 13,
    offset: c,
    startLoc: l,
    endLoc: l,
    lastType: 13,
    lastOffset: c,
    lastStartLoc: l,
    lastEndLoc: l,
    braceNest: 0,
    inLinked: !1,
    text: ""
  }, g = () => u, { onError: T } = t;
  function O(a, o, h, ...A) {
    const x = g();
    if (o.column += h, o.offset += h, T) {
      const H = n ? Wt(x.startLoc, o) : null, R = Me(a, H, {
        domain: Bs,
        args: A
      });
      T(R);
    }
  }
  function N(a, o, h) {
    a.endLoc = i(), a.currentType = o;
    const A = { type: o };
    return n && (A.loc = Wt(a.startLoc, a.endLoc)), h != null && (A.value = h), A;
  }
  const v = (a) => N(
    a,
    13
    /* TokenTypes.EOF */
  );
  function S(a, o) {
    return a.currentChar() === o ? (a.next(), o) : (O(D.EXPECTED_TOKEN, i(), 0, o), "");
  }
  function C(a) {
    let o = "";
    for (; a.currentPeek() === ce || a.currentPeek() === Q; )
      o += a.currentPeek(), a.peek();
    return o;
  }
  function k(a) {
    const o = C(a);
    return a.skipToPeek(), o;
  }
  function f(a) {
    if (a === me)
      return !1;
    const o = a.charCodeAt(0);
    return o >= 97 && o <= 122 || // a-z
    o >= 65 && o <= 90 || // A-Z
    o === 95;
  }
  function _(a) {
    if (a === me)
      return !1;
    const o = a.charCodeAt(0);
    return o >= 48 && o <= 57;
  }
  function L(a, o) {
    const { currentType: h } = o;
    if (h !== 2)
      return !1;
    C(a);
    const A = f(a.currentPeek());
    return a.resetPeek(), A;
  }
  function m(a, o) {
    const { currentType: h } = o;
    if (h !== 2)
      return !1;
    C(a);
    const A = a.currentPeek() === "-" ? a.peek() : a.currentPeek(), x = _(A);
    return a.resetPeek(), x;
  }
  function w(a, o) {
    const { currentType: h } = o;
    if (h !== 2)
      return !1;
    C(a);
    const A = a.currentPeek() === Nn;
    return a.resetPeek(), A;
  }
  function y(a, o) {
    const { currentType: h } = o;
    if (h !== 7)
      return !1;
    C(a);
    const A = a.currentPeek() === ".";
    return a.resetPeek(), A;
  }
  function E(a, o) {
    const { currentType: h } = o;
    if (h !== 8)
      return !1;
    C(a);
    const A = f(a.currentPeek());
    return a.resetPeek(), A;
  }
  function P(a, o) {
    const { currentType: h } = o;
    if (!(h === 7 || h === 11))
      return !1;
    C(a);
    const A = a.currentPeek() === ":";
    return a.resetPeek(), A;
  }
  function W(a, o) {
    const { currentType: h } = o;
    if (h !== 9)
      return !1;
    const A = () => {
      const H = a.currentPeek();
      return H === "{" ? f(a.peek()) : H === "@" || H === "|" || H === ":" || H === "." || H === ce || !H ? !1 : H === Q ? (a.peek(), A()) : ae(a, !1);
    }, x = A();
    return a.resetPeek(), x;
  }
  function X(a) {
    C(a);
    const o = a.currentPeek() === "|";
    return a.resetPeek(), o;
  }
  function ae(a, o = !0) {
    const h = (x = !1, H = "") => {
      const R = a.currentPeek();
      return R === "{" || R === "@" || !R ? x : R === "|" ? !(H === ce || H === Q) : R === ce ? (a.peek(), h(!0, ce)) : R === Q ? (a.peek(), h(!0, Q)) : !0;
    }, A = h();
    return o && a.resetPeek(), A;
  }
  function G(a, o) {
    const h = a.currentChar();
    return h === me ? me : o(h) ? (a.next(), h) : null;
  }
  function Ae(a) {
    const o = a.charCodeAt(0);
    return o >= 97 && o <= 122 || // a-z
    o >= 65 && o <= 90 || // A-Z
    o >= 48 && o <= 57 || // 0-9
    o === 95 || // _
    o === 36;
  }
  function Et(a) {
    return G(a, Ae);
  }
  function gt(a) {
    const o = a.charCodeAt(0);
    return o >= 97 && o <= 122 || // a-z
    o >= 65 && o <= 90 || // A-Z
    o >= 48 && o <= 57 || // 0-9
    o === 95 || // _
    o === 36 || // $
    o === 45;
  }
  function pt(a) {
    return G(a, gt);
  }
  function Nt(a) {
    const o = a.charCodeAt(0);
    return o >= 48 && o <= 57;
  }
  function Lt(a) {
    return G(a, Nt);
  }
  function bt(a) {
    const o = a.charCodeAt(0);
    return o >= 48 && o <= 57 || // 0-9
    o >= 65 && o <= 70 || // A-F
    o >= 97 && o <= 102;
  }
  function _e(a) {
    return G(a, bt);
  }
  function Fe(a) {
    let o = "", h = "";
    for (; o = Lt(a); )
      h += o;
    return h;
  }
  function Tt(a) {
    let o = "";
    for (; ; ) {
      const h = a.currentChar();
      if (h === "{" || h === "}" || h === "@" || h === "|" || !h)
        break;
      if (h === ce || h === Q)
        if (ae(a))
          o += h, a.next();
        else {
          if (X(a))
            break;
          o += h, a.next();
        }
      else
        o += h, a.next();
    }
    return o;
  }
  function Ot(a) {
    k(a);
    let o = "", h = "";
    for (; o = pt(a); )
      h += o;
    const A = a.currentChar();
    if (A && A !== "}" && A !== me && A !== ce && A !== Q && A !== "　") {
      const x = Ze(a);
      return O(D.INVALID_TOKEN_IN_PLACEHOLDER, i(), 0, h + x), h + x;
    }
    return a.currentChar() === me && O(D.UNTERMINATED_CLOSING_BRACE, i(), 0), h;
  }
  function wt(a) {
    k(a);
    let o = "";
    return a.currentChar() === "-" ? (a.next(), o += `-${Fe(a)}`) : o += Fe(a), a.currentChar() === me && O(D.UNTERMINATED_CLOSING_BRACE, i(), 0), o;
  }
  function yt(a) {
    return a !== Nn && a !== Q;
  }
  function an(a) {
    k(a), S(a, "'");
    let o = "", h = "";
    for (; o = G(a, yt); )
      o === "\\" ? h += It(a) : h += o;
    const A = a.currentChar();
    return A === Q || A === me ? (O(D.UNTERMINATED_SINGLE_QUOTE_IN_PLACEHOLDER, i(), 0), A === Q && (a.next(), S(a, "'")), h) : (S(a, "'"), h);
  }
  function It(a) {
    const o = a.currentChar();
    switch (o) {
      case "\\":
      case "'":
        return a.next(), `\\${o}`;
      case "u":
        return qe(a, o, 4);
      case "U":
        return qe(a, o, 6);
      default:
        return O(D.UNKNOWN_ESCAPE_SEQUENCE, i(), 0, o), "";
    }
  }
  function qe(a, o, h) {
    S(a, o);
    let A = "";
    for (let x = 0; x < h; x++) {
      const H = _e(a);
      if (!H) {
        O(D.INVALID_UNICODE_ESCAPE_SEQUENCE, i(), 0, `\\${o}${A}${a.currentChar()}`);
        break;
      }
      A += H;
    }
    return `\\${o}${A}`;
  }
  function Ct(a) {
    return a !== "{" && a !== "}" && a !== ce && a !== Q;
  }
  function Ze(a) {
    k(a);
    let o = "", h = "";
    for (; o = G(a, Ct); )
      h += o;
    return h;
  }
  function kt(a) {
    let o = "", h = "";
    for (; o = Et(a); )
      h += o;
    return h;
  }
  function At(a) {
    const o = (h) => {
      const A = a.currentChar();
      return A === "{" || A === "@" || A === "|" || A === "(" || A === ")" || !A || A === ce ? h : (h += A, a.next(), o(h));
    };
    return o("");
  }
  function Ue(a) {
    k(a);
    const o = S(
      a,
      "|"
      /* TokenChars.Pipe */
    );
    return k(a), o;
  }
  function We(a, o) {
    let h = null;
    switch (a.currentChar()) {
      case "{":
        return o.braceNest >= 1 && O(D.NOT_ALLOW_NEST_PLACEHOLDER, i(), 0), a.next(), h = N(
          o,
          2,
          "{"
          /* TokenChars.BraceLeft */
        ), k(a), o.braceNest++, h;
      case "}":
        return o.braceNest > 0 && o.currentType === 2 && O(D.EMPTY_PLACEHOLDER, i(), 0), a.next(), h = N(
          o,
          3,
          "}"
          /* TokenChars.BraceRight */
        ), o.braceNest--, o.braceNest > 0 && k(a), o.inLinked && o.braceNest === 0 && (o.inLinked = !1), h;
      case "@":
        return o.braceNest > 0 && O(D.UNTERMINATED_CLOSING_BRACE, i(), 0), h = Te(a, o) || v(o), o.braceNest = 0, h;
      default: {
        let x = !0, H = !0, R = !0;
        if (X(a))
          return o.braceNest > 0 && O(D.UNTERMINATED_CLOSING_BRACE, i(), 0), h = N(o, 1, Ue(a)), o.braceNest = 0, o.inLinked = !1, h;
        if (o.braceNest > 0 && (o.currentType === 4 || o.currentType === 5 || o.currentType === 6))
          return O(D.UNTERMINATED_CLOSING_BRACE, i(), 0), o.braceNest = 0, Ve(a, o);
        if (x = L(a, o))
          return h = N(o, 4, Ot(a)), k(a), h;
        if (H = m(a, o))
          return h = N(o, 5, wt(a)), k(a), h;
        if (R = w(a, o))
          return h = N(o, 6, an(a)), k(a), h;
        if (!x && !H && !R)
          return h = N(o, 12, Ze(a)), O(D.INVALID_TOKEN_IN_PLACEHOLDER, i(), 0, h.value), k(a), h;
        break;
      }
    }
    return h;
  }
  function Te(a, o) {
    const { currentType: h } = o;
    let A = null;
    const x = a.currentChar();
    switch ((h === 7 || h === 8 || h === 11 || h === 9) && (x === Q || x === ce) && O(D.INVALID_LINKED_FORMAT, i(), 0), x) {
      case "@":
        return a.next(), A = N(
          o,
          7,
          "@"
          /* TokenChars.LinkedAlias */
        ), o.inLinked = !0, A;
      case ".":
        return k(a), a.next(), N(
          o,
          8,
          "."
          /* TokenChars.LinkedDot */
        );
      case ":":
        return k(a), a.next(), N(
          o,
          9,
          ":"
          /* TokenChars.LinkedDelimiter */
        );
      default:
        return X(a) ? (A = N(o, 1, Ue(a)), o.braceNest = 0, o.inLinked = !1, A) : y(a, o) || P(a, o) ? (k(a), Te(a, o)) : E(a, o) ? (k(a), N(o, 11, kt(a))) : W(a, o) ? (k(a), x === "{" ? We(a, o) || A : N(o, 10, At(a))) : (h === 7 && O(D.INVALID_LINKED_FORMAT, i(), 0), o.braceNest = 0, o.inLinked = !1, Ve(a, o));
    }
  }
  function Ve(a, o) {
    let h = {
      type: 13
      /* TokenTypes.EOF */
    };
    if (o.braceNest > 0)
      return We(a, o) || v(o);
    if (o.inLinked)
      return Te(a, o) || v(o);
    switch (a.currentChar()) {
      case "{":
        return We(a, o) || v(o);
      case "}":
        return O(D.UNBALANCED_CLOSING_BRACE, i(), 0), a.next(), N(
          o,
          3,
          "}"
          /* TokenChars.BraceRight */
        );
      case "@":
        return Te(a, o) || v(o);
      default: {
        if (X(a))
          return h = N(o, 1, Ue(a)), o.braceNest = 0, o.inLinked = !1, h;
        if (ae(a))
          return N(o, 0, Tt(a));
        break;
      }
    }
    return h;
  }
  function vt() {
    const { currentType: a, offset: o, startLoc: h, endLoc: A } = u;
    return u.lastType = a, u.lastOffset = o, u.lastStartLoc = h, u.lastEndLoc = A, u.offset = s(), u.startLoc = i(), r.currentChar() === me ? N(
      u,
      13
      /* TokenTypes.EOF */
    ) : Ve(r, u);
  }
  return {
    nextToken: vt,
    currentOffset: s,
    currentPosition: i,
    context: g
  };
}
const Ks = "parser", zs = /(?:\\\\|\\'|\\u([0-9a-fA-F]{4})|\\U([0-9a-fA-F]{6}))/g;
function Xs(e, t, n) {
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
function Js(e = {}) {
  const t = e.location !== !1, { onError: n } = e;
  function r(f, _, L, m, ...w) {
    const y = f.currentPosition();
    if (y.offset += m, y.column += m, n) {
      const E = t ? Wt(L, y) : null, P = Me(_, E, {
        domain: Ks,
        args: w
      });
      n(P);
    }
  }
  function s(f, _, L) {
    const m = { type: f };
    return t && (m.start = _, m.end = _, m.loc = { start: L, end: L }), m;
  }
  function i(f, _, L, m) {
    t && (f.end = _, f.loc && (f.loc.end = L));
  }
  function l(f, _) {
    const L = f.context(), m = s(3, L.offset, L.startLoc);
    return m.value = _, i(m, f.currentOffset(), f.currentPosition()), m;
  }
  function c(f, _) {
    const L = f.context(), { lastOffset: m, lastStartLoc: w } = L, y = s(5, m, w);
    return y.index = parseInt(_, 10), f.nextToken(), i(y, f.currentOffset(), f.currentPosition()), y;
  }
  function u(f, _) {
    const L = f.context(), { lastOffset: m, lastStartLoc: w } = L, y = s(4, m, w);
    return y.key = _, f.nextToken(), i(y, f.currentOffset(), f.currentPosition()), y;
  }
  function g(f, _) {
    const L = f.context(), { lastOffset: m, lastStartLoc: w } = L, y = s(9, m, w);
    return y.value = _.replace(zs, Xs), f.nextToken(), i(y, f.currentOffset(), f.currentPosition()), y;
  }
  function T(f) {
    const _ = f.nextToken(), L = f.context(), { lastOffset: m, lastStartLoc: w } = L, y = s(8, m, w);
    return _.type !== 11 ? (r(f, D.UNEXPECTED_EMPTY_LINKED_MODIFIER, L.lastStartLoc, 0), y.value = "", i(y, m, w), {
      nextConsumeToken: _,
      node: y
    }) : (_.value == null && r(f, D.UNEXPECTED_LEXICAL_ANALYSIS, L.lastStartLoc, 0, ue(_)), y.value = _.value || "", i(y, f.currentOffset(), f.currentPosition()), {
      node: y
    });
  }
  function O(f, _) {
    const L = f.context(), m = s(7, L.offset, L.startLoc);
    return m.value = _, i(m, f.currentOffset(), f.currentPosition()), m;
  }
  function N(f) {
    const _ = f.context(), L = s(6, _.offset, _.startLoc);
    let m = f.nextToken();
    if (m.type === 8) {
      const w = T(f);
      L.modifier = w.node, m = w.nextConsumeToken || f.nextToken();
    }
    switch (m.type !== 9 && r(f, D.UNEXPECTED_LEXICAL_ANALYSIS, _.lastStartLoc, 0, ue(m)), m = f.nextToken(), m.type === 2 && (m = f.nextToken()), m.type) {
      case 10:
        m.value == null && r(f, D.UNEXPECTED_LEXICAL_ANALYSIS, _.lastStartLoc, 0, ue(m)), L.key = O(f, m.value || "");
        break;
      case 4:
        m.value == null && r(f, D.UNEXPECTED_LEXICAL_ANALYSIS, _.lastStartLoc, 0, ue(m)), L.key = u(f, m.value || "");
        break;
      case 5:
        m.value == null && r(f, D.UNEXPECTED_LEXICAL_ANALYSIS, _.lastStartLoc, 0, ue(m)), L.key = c(f, m.value || "");
        break;
      case 6:
        m.value == null && r(f, D.UNEXPECTED_LEXICAL_ANALYSIS, _.lastStartLoc, 0, ue(m)), L.key = g(f, m.value || "");
        break;
      default: {
        r(f, D.UNEXPECTED_EMPTY_LINKED_KEY, _.lastStartLoc, 0);
        const w = f.context(), y = s(7, w.offset, w.startLoc);
        return y.value = "", i(y, w.offset, w.startLoc), L.key = y, i(L, w.offset, w.startLoc), {
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
    const _ = f.context(), L = _.currentType === 1 ? f.currentOffset() : _.offset, m = _.currentType === 1 ? _.endLoc : _.startLoc, w = s(2, L, m);
    w.items = [];
    let y = null;
    do {
      const W = y || f.nextToken();
      switch (y = null, W.type) {
        case 0:
          W.value == null && r(f, D.UNEXPECTED_LEXICAL_ANALYSIS, _.lastStartLoc, 0, ue(W)), w.items.push(l(f, W.value || ""));
          break;
        case 5:
          W.value == null && r(f, D.UNEXPECTED_LEXICAL_ANALYSIS, _.lastStartLoc, 0, ue(W)), w.items.push(c(f, W.value || ""));
          break;
        case 4:
          W.value == null && r(f, D.UNEXPECTED_LEXICAL_ANALYSIS, _.lastStartLoc, 0, ue(W)), w.items.push(u(f, W.value || ""));
          break;
        case 6:
          W.value == null && r(f, D.UNEXPECTED_LEXICAL_ANALYSIS, _.lastStartLoc, 0, ue(W)), w.items.push(g(f, W.value || ""));
          break;
        case 7: {
          const X = N(f);
          w.items.push(X.node), y = X.nextConsumeToken || null;
          break;
        }
      }
    } while (_.currentType !== 13 && _.currentType !== 1);
    const E = _.currentType === 1 ? _.lastOffset : f.currentOffset(), P = _.currentType === 1 ? _.lastEndLoc : f.currentPosition();
    return i(w, E, P), w;
  }
  function S(f, _, L, m) {
    const w = f.context();
    let y = m.items.length === 0;
    const E = s(1, _, L);
    E.cases = [], E.cases.push(m);
    do {
      const P = v(f);
      y || (y = P.items.length === 0), E.cases.push(P);
    } while (w.currentType !== 13);
    return y && r(f, D.MUST_HAVE_MESSAGES_IN_PLURAL, L, 0), i(E, f.currentOffset(), f.currentPosition()), E;
  }
  function C(f) {
    const _ = f.context(), { offset: L, startLoc: m } = _, w = v(f);
    return _.currentType === 13 ? w : S(f, L, m, w);
  }
  function k(f) {
    const _ = Ys(f, q({}, e)), L = _.context(), m = s(0, L.offset, L.startLoc);
    return t && m.loc && (m.loc.source = f), m.body = C(_), e.onCacheKey && (m.cacheKey = e.onCacheKey(f)), L.currentType !== 13 && r(_, D.UNEXPECTED_LEXICAL_ANALYSIS, L.lastStartLoc, 0, f[L.offset] || ""), i(m, _.currentOffset(), _.currentPosition()), m;
  }
  return { parse: k };
}
function ue(e) {
  if (e.type === 13)
    return "EOF";
  const t = (e.value || "").replace(/\r?\n/gu, "\\n");
  return t.length > 10 ? t.slice(0, 9) + "…" : t;
}
function qs(e, t = {}) {
  const n = {
    ast: e,
    helpers: /* @__PURE__ */ new Set()
  };
  return { context: () => n, helper: (i) => (n.helpers.add(i), i) };
}
function Ln(e, t) {
  for (let n = 0; n < e.length; n++)
    Zt(e[n], t);
}
function Zt(e, t) {
  switch (e.type) {
    case 1:
      Ln(e.cases, t), t.helper(
        "plural"
        /* HelperNameMap.PLURAL */
      );
      break;
    case 2:
      Ln(e.items, t);
      break;
    case 6: {
      Zt(e.key, t), t.helper(
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
function Zs(e, t = {}) {
  const n = qs(e);
  n.helper(
    "normalize"
    /* HelperNameMap.NORMALIZE */
  ), e.body && Zt(e.body, n);
  const r = n.context();
  e.helpers = Array.from(r.helpers);
}
function Qs(e) {
  const t = e.body;
  return t.type === 2 ? bn(t) : t.cases.forEach((n) => bn(n)), e;
}
function bn(e) {
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
      e.static = qt(t);
      for (let n = 0; n < e.items.length; n++) {
        const r = e.items[n];
        (r.type === 3 || r.type === 9) && delete r.value;
      }
    }
  }
}
const ei = "minifier";
function Pe(e) {
  switch (e.t = e.type, e.type) {
    case 0: {
      const t = e;
      Pe(t.body), t.b = t.body, delete t.body;
      break;
    }
    case 1: {
      const t = e, n = t.cases;
      for (let r = 0; r < n.length; r++)
        Pe(n[r]);
      t.c = n, delete t.cases;
      break;
    }
    case 2: {
      const t = e, n = t.items;
      for (let r = 0; r < n.length; r++)
        Pe(n[r]);
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
      Pe(t.key), t.k = t.key, delete t.key, t.modifier && (Pe(t.modifier), t.m = t.modifier, delete t.modifier);
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
        throw Me(D.UNHANDLED_MINIFIER_NODE_TYPE, null, {
          domain: ei,
          args: [e.type]
        });
  }
  delete e.type;
}
const ti = "parser";
function ni(e, t) {
  const { filename: n, breakLineCode: r, needIndent: s } = t, i = t.location !== !1, l = {
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
  i && e.loc && (l.source = e.loc.source);
  const c = () => l;
  function u(C, k) {
    l.code += C;
  }
  function g(C, k = !0) {
    const f = k ? r : "";
    u(s ? f + "  ".repeat(C) : f);
  }
  function T(C = !0) {
    const k = ++l.indentLevel;
    C && g(k);
  }
  function O(C = !0) {
    const k = --l.indentLevel;
    C && g(k);
  }
  function N() {
    g(l.indentLevel);
  }
  return {
    context: c,
    push: u,
    indent: T,
    deindent: O,
    newline: N,
    helper: (C) => `_${C}`,
    needIndent: () => l.needIndent
  };
}
function ri(e, t) {
  const { helper: n } = e;
  e.push(`${n(
    "linked"
    /* HelperNameMap.LINKED */
  )}(`), Re(e, t.key), t.modifier ? (e.push(", "), Re(e, t.modifier), e.push(", _type")) : e.push(", undefined, _type"), e.push(")");
}
function si(e, t) {
  const { helper: n, needIndent: r } = e;
  e.push(`${n(
    "normalize"
    /* HelperNameMap.NORMALIZE */
  )}([`), e.indent(r());
  const s = t.items.length;
  for (let i = 0; i < s && (Re(e, t.items[i]), i !== s - 1); i++)
    e.push(", ");
  e.deindent(r()), e.push("])");
}
function ii(e, t) {
  const { helper: n, needIndent: r } = e;
  if (t.cases.length > 1) {
    e.push(`${n(
      "plural"
      /* HelperNameMap.PLURAL */
    )}([`), e.indent(r());
    const s = t.cases.length;
    for (let i = 0; i < s && (Re(e, t.cases[i]), i !== s - 1); i++)
      e.push(", ");
    e.deindent(r()), e.push("])");
  }
}
function ai(e, t) {
  t.body ? Re(e, t.body) : e.push("null");
}
function Re(e, t) {
  const { helper: n } = e;
  switch (t.type) {
    case 0:
      ai(e, t);
      break;
    case 1:
      ii(e, t);
      break;
    case 2:
      si(e, t);
      break;
    case 6:
      ri(e, t);
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
        throw Me(D.UNHANDLED_CODEGEN_NODE_TYPE, null, {
          domain: ti,
          args: [t.type]
        });
  }
}
const li = (e, t = {}) => {
  const n = I(t.mode) ? t.mode : "normal", r = I(t.filename) ? t.filename : "message.intl";
  t.sourceMap;
  const s = t.breakLineCode != null ? t.breakLineCode : n === "arrow" ? ";" : `
`, i = t.needIndent ? t.needIndent : n !== "arrow", l = e.helpers || [], c = ni(e, {
    filename: r,
    breakLineCode: s,
    needIndent: i
  });
  c.push(n === "normal" ? "function __msg__ (ctx) {" : "(ctx) => {"), c.indent(i), l.length > 0 && (c.push(`const { ${qt(l.map((T) => `${T}: _${T}`), ", ")} } = ctx`), c.newline()), c.push("return "), Re(c, e), c.deindent(i), c.push("}"), delete e.helpers;
  const { code: u, map: g } = c.context();
  return {
    ast: e,
    code: u,
    map: g ? g.toJSON() : void 0
    // eslint-disable-line @typescript-eslint/no-explicit-any
  };
};
function oi(e, t = {}) {
  const n = q({}, t), r = !!n.jit, s = !!n.minify, i = n.optimize == null ? !0 : n.optimize, c = Js(n).parse(e);
  return r ? (i && Qs(c), s && Pe(c), { ast: c, code: "" }) : (Zs(c, n), li(c, n));
}
/*!
  * core-base v11.2.2
  * (c) 2025 kazuya kawaguchi
  * Released under the MIT License.
  */
function ci() {
  typeof __INTLIFY_PROD_DEVTOOLS__ != "boolean" && (ye().__INTLIFY_PROD_DEVTOOLS__ = !1), typeof __INTLIFY_DROP_MESSAGE_COMPILER__ != "boolean" && (ye().__INTLIFY_DROP_MESSAGE_COMPILER__ = !1);
}
function oe(e) {
  return F(e) && Qt(e) === 0 && (le(e, "b") || le(e, "body"));
}
const tr = ["b", "body"];
function ui(e) {
  return Le(e, tr);
}
const nr = ["c", "cases"];
function fi(e) {
  return Le(e, nr, []);
}
const rr = ["s", "static"];
function di(e) {
  return Le(e, rr);
}
const sr = ["i", "items"];
function _i(e) {
  return Le(e, sr, []);
}
const ir = ["t", "type"];
function Qt(e) {
  return Le(e, ir);
}
const ar = ["v", "value"];
function nt(e, t) {
  const n = Le(e, ar);
  if (n != null)
    return n;
  throw Ye(t);
}
const lr = ["m", "modifier"];
function mi(e) {
  return Le(e, lr);
}
const or = ["k", "key"];
function hi(e) {
  const t = Le(e, or);
  if (t)
    return t;
  throw Ye(
    6
    /* NodeTypes.Linked */
  );
}
function Le(e, t, n) {
  for (let r = 0; r < t.length; r++) {
    const s = t[r];
    if (le(e, s) && e[s] != null)
      return e[s];
  }
  return n;
}
const cr = [
  ...tr,
  ...nr,
  ...rr,
  ...sr,
  ...or,
  ...lr,
  ...ar,
  ...ir
];
function Ye(e) {
  return new Error(`unhandled node type: ${e}`);
}
function Pt(e) {
  return (n) => Ei(n, e);
}
function Ei(e, t) {
  const n = ui(t);
  if (n == null)
    throw Ye(
      0
      /* NodeTypes.Resource */
    );
  if (Qt(n) === 1) {
    const i = fi(n);
    return e.plural(i.reduce((l, c) => [
      ...l,
      Tn(e, c)
    ], []));
  } else
    return Tn(e, n);
}
function Tn(e, t) {
  const n = di(t);
  if (n != null)
    return e.type === "text" ? n : e.normalize([n]);
  {
    const r = _i(t).reduce((s, i) => [...s, Vt(e, i)], []);
    return e.normalize(r);
  }
}
function Vt(e, t) {
  const n = Qt(t);
  switch (n) {
    case 3:
      return nt(t, n);
    case 9:
      return nt(t, n);
    case 4: {
      const r = t;
      if (le(r, "k") && r.k)
        return e.interpolate(e.named(r.k));
      if (le(r, "key") && r.key)
        return e.interpolate(e.named(r.key));
      throw Ye(n);
    }
    case 5: {
      const r = t;
      if (le(r, "i") && J(r.i))
        return e.interpolate(e.list(r.i));
      if (le(r, "index") && J(r.index))
        return e.interpolate(e.list(r.index));
      throw Ye(n);
    }
    case 6: {
      const r = t, s = mi(r), i = hi(r);
      return e.linked(Vt(e, i), s ? Vt(e, s) : void 0, e.type);
    }
    case 7:
      return nt(t, n);
    case 8:
      return nt(t, n);
    default:
      throw new Error(`unhandled node on format message part: ${n}`);
  }
}
const gi = "Detected HTML in '{source}' message. Recommend not using HTML messages to avoid XSS.";
function pi(e, t) {
  t && Vs(e) && de(dt(gi, { source: e }));
}
const Ni = (e) => e;
let rt = V();
function Li(e, t = {}) {
  let n = !1;
  const r = t.onError || Us;
  return t.onError = (s) => {
    n = !0, r(s);
  }, { ...oi(e, t), detectError: n };
}
// @__NO_SIDE_EFFECTS__
function bi(e, t) {
  if (!__INTLIFY_DROP_MESSAGE_COMPILER__ && I(e)) {
    const n = K(t.warnHtmlMessage) ? t.warnHtmlMessage : !0;
    process.env.NODE_ENV !== "production" && pi(e, n);
    const s = (t.onCacheKey || Ni)(e), i = rt[s];
    if (i)
      return i;
    const { ast: l, detectError: c } = Li(e, {
      ...t,
      location: process.env.NODE_ENV !== "production",
      jit: !0
    }), u = Pt(l);
    return c ? u : rt[s] = u;
  } else {
    if (process.env.NODE_ENV !== "production" && !oe(e))
      return de(`the message that is resolve with key '${t.key}' is not supported for jit compilation`), () => e;
    const n = e.cacheKey;
    if (n) {
      const r = rt[n];
      return r || (rt[n] = Pt(e));
    } else
      return Pt(e);
  }
}
let Ke = null;
function Ti(e) {
  Ke = e;
}
function Oi(e, t, n) {
  Ke && Ke.emit("i18n:init", {
    timestamp: Date.now(),
    i18n: e,
    version: t,
    meta: n
  });
}
const wi = /* @__PURE__ */ yi("function:translate");
function yi(e) {
  return (t) => Ke && Ke.emit(e, t);
}
const ee = {
  INVALID_ARGUMENT: Ms,
  // 17
  INVALID_DATE_ARGUMENT: 18,
  INVALID_ISO_DATE_ARGUMENT: 19,
  NOT_SUPPORT_NON_STRING_MESSAGE: 20,
  NOT_SUPPORT_LOCALE_PROMISE_VALUE: 21,
  NOT_SUPPORT_LOCALE_ASYNC_FUNCTION: 22,
  NOT_SUPPORT_LOCALE_TYPE: 23
}, Ii = 24;
function Ee(e) {
  return Me(e, null, process.env.NODE_ENV !== "production" ? { messages: Ci } : void 0);
}
const Ci = {
  [ee.INVALID_ARGUMENT]: "Invalid arguments",
  [ee.INVALID_DATE_ARGUMENT]: "The date provided is an invalid Date object.Make sure your Date represents a valid date.",
  [ee.INVALID_ISO_DATE_ARGUMENT]: "The argument provided is not a valid ISO date string",
  [ee.NOT_SUPPORT_NON_STRING_MESSAGE]: "Not support non-string message",
  [ee.NOT_SUPPORT_LOCALE_PROMISE_VALUE]: "cannot support promise value",
  [ee.NOT_SUPPORT_LOCALE_ASYNC_FUNCTION]: "cannot support async function",
  [ee.NOT_SUPPORT_LOCALE_TYPE]: "cannot support locale type"
};
function en(e, t) {
  return t.locale != null ? On(t.locale) : On(e.locale);
}
let Rt;
function On(e) {
  if (I(e))
    return e;
  if ($(e)) {
    if (e.resolvedOnce && Rt != null)
      return Rt;
    if (e.constructor.name === "Function") {
      const t = e();
      if (vs(t))
        throw Ee(ee.NOT_SUPPORT_LOCALE_PROMISE_VALUE);
      return Rt = t;
    } else
      throw Ee(ee.NOT_SUPPORT_LOCALE_ASYNC_FUNCTION);
  } else
    throw Ee(ee.NOT_SUPPORT_LOCALE_TYPE);
}
function ki(e, t, n) {
  return [.../* @__PURE__ */ new Set([
    n,
    ...z(t) ? t : F(t) ? Object.keys(t) : I(t) ? [t] : [n]
  ])];
}
function ur(e, t, n) {
  const r = I(n) ? n : ct, s = e;
  s.__localeChainCache || (s.__localeChainCache = /* @__PURE__ */ new Map());
  let i = s.__localeChainCache.get(r);
  if (!i) {
    i = [];
    let l = [n];
    for (; z(l); )
      l = wn(i, l, t);
    const c = z(t) || !M(t) ? t : t.default ? t.default : null;
    l = I(c) ? [c] : c, z(l) && wn(i, l, !1), s.__localeChainCache.set(r, i);
  }
  return i;
}
function wn(e, t, n) {
  let r = !0;
  for (let s = 0; s < t.length && K(r); s++) {
    const i = t[s];
    I(i) && (r = Ai(e, t[s], n));
  }
  return r;
}
function Ai(e, t, n) {
  let r;
  const s = t.split("-");
  do {
    const i = s.join("-");
    r = vi(e, i, n), s.splice(-1, 1);
  } while (s.length && r === !0);
  return r;
}
function vi(e, t, n) {
  let r = !1;
  if (!e.includes(t) && (r = !0, t)) {
    r = t[t.length - 1] !== "!";
    const s = t.replace(/!/g, "");
    e.push(s), (z(n) || M(n)) && n[s] && (r = n[s]);
  }
  return r;
}
const be = [];
be[
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
be[
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
be[
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
be[
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
be[
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
be[
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
be[
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
const Di = /^\s?(?:true|false|-?[\d.]+|'[^']*'|"[^"]*")\s?$/;
function Si(e) {
  return Di.test(e);
}
function Pi(e) {
  const t = e.charCodeAt(0), n = e.charCodeAt(e.length - 1);
  return t === n && (t === 34 || t === 39) ? e.slice(1, -1) : e;
}
function Ri(e) {
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
function Mi(e) {
  const t = e.trim();
  return e.charAt(0) === "0" && isNaN(parseInt(e)) ? !1 : Si(t) ? Pi(t) : "*" + t;
}
function Fi(e) {
  const t = [];
  let n = -1, r = 0, s = 0, i, l, c, u, g, T, O;
  const N = [];
  N[
    0
    /* Actions.APPEND */
  ] = () => {
    l === void 0 ? l = c : l += c;
  }, N[
    1
    /* Actions.PUSH */
  ] = () => {
    l !== void 0 && (t.push(l), l = void 0);
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
      if (s = 0, l === void 0 || (l = Mi(l), l === !1))
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
      return n++, c = "\\" + S, N[
        0
        /* Actions.APPEND */
      ](), !0;
  }
  for (; r !== null; )
    if (n++, i = e[n], !(i === "\\" && v())) {
      if (u = Ri(i), O = be[r], g = O[u] || O.l || 8, g === 8 || (r = g[0], g[1] !== void 0 && (T = N[g[1]], T && (c = i, T() === !1))))
        return;
      if (r === 7)
        return t;
    }
}
const yn = /* @__PURE__ */ new Map();
function Ui(e, t) {
  return F(e) ? e[t] : null;
}
function Wi(e, t) {
  if (!F(e))
    return null;
  let n = yn.get(t);
  if (n || (n = Fi(t), n && yn.set(t, n)), !n)
    return null;
  const r = n.length;
  let s = e, i = 0;
  for (; i < r; ) {
    const l = n[i];
    if (cr.includes(l) && oe(s))
      return null;
    const c = s[l];
    if (c === void 0 || $(s))
      return null;
    s = c, i++;
  }
  return s;
}
const te = {
  NOT_FOUND_KEY: 1,
  FALLBACK_TO_TRANSLATE: 2,
  CANNOT_FORMAT_NUMBER: 3,
  FALLBACK_TO_NUMBER_FORMAT: 4,
  CANNOT_FORMAT_DATE: 5,
  FALLBACK_TO_DATE_FORMAT: 6,
  EXPERIMENTAL_CUSTOM_MESSAGE_COMPILER: 7
}, Vi = 8, xi = {
  [te.NOT_FOUND_KEY]: "Not found '{key}' key in '{locale}' locale messages.",
  [te.FALLBACK_TO_TRANSLATE]: "Fall back to translate '{key}' key with '{target}' locale.",
  [te.CANNOT_FORMAT_NUMBER]: "Cannot format a number value due to not supported Intl.NumberFormat.",
  [te.FALLBACK_TO_NUMBER_FORMAT]: "Fall back to number format '{key}' key with '{target}' locale.",
  [te.CANNOT_FORMAT_DATE]: "Cannot format a date value due to not supported Intl.DateTimeFormat.",
  [te.FALLBACK_TO_DATE_FORMAT]: "Fall back to datetime format '{key}' key with '{target}' locale.",
  [te.EXPERIMENTAL_CUSTOM_MESSAGE_COMPILER]: "This project is using Custom Message Compiler, which is an experimental feature. It may receive breaking changes or be removed in the future."
};
function ke(e, ...t) {
  return dt(xi[e], ...t);
}
const $i = "11.2.2", mt = -1, ct = "en-US", ut = "", In = (e) => `${e.charAt(0).toLocaleUpperCase()}${e.substr(1)}`;
function Gi() {
  return {
    upper: (e, t) => t === "text" && I(e) ? e.toUpperCase() : t === "vnode" && F(e) && "__v_isVNode" in e ? e.children.toUpperCase() : e,
    lower: (e, t) => t === "text" && I(e) ? e.toLowerCase() : t === "vnode" && F(e) && "__v_isVNode" in e ? e.children.toLowerCase() : e,
    capitalize: (e, t) => t === "text" && I(e) ? In(e) : t === "vnode" && F(e) && "__v_isVNode" in e ? In(e.children) : e
  };
}
let fr;
function ji(e) {
  fr = e;
}
let dr;
function Hi(e) {
  dr = e;
}
let _r;
function Bi(e) {
  _r = e;
}
let mr = null;
const Yi = /* @__NO_SIDE_EFFECTS__ */ (e) => {
  mr = e;
}, Ki = /* @__NO_SIDE_EFFECTS__ */ () => mr;
let hr = null;
const Cn = (e) => {
  hr = e;
}, zi = () => hr;
let kn = 0;
function Xi(e = {}) {
  const t = $(e.onWarn) ? e.onWarn : de, n = I(e.version) ? e.version : $i, r = I(e.locale) || $(e.locale) ? e.locale : ct, s = $(r) ? ct : r, i = z(e.fallbackLocale) || M(e.fallbackLocale) || I(e.fallbackLocale) || e.fallbackLocale === !1 ? e.fallbackLocale : s, l = M(e.messages) ? e.messages : Mt(s), c = M(e.datetimeFormats) ? e.datetimeFormats : Mt(s), u = M(e.numberFormats) ? e.numberFormats : Mt(s), g = q(V(), e.modifiers, Gi()), T = e.pluralRules || V(), O = $(e.missing) ? e.missing : null, N = K(e.missingWarn) || ot(e.missingWarn) ? e.missingWarn : !0, v = K(e.fallbackWarn) || ot(e.fallbackWarn) ? e.fallbackWarn : !0, S = !!e.fallbackFormat, C = !!e.unresolving, k = $(e.postTranslation) ? e.postTranslation : null, f = M(e.processor) ? e.processor : null, _ = K(e.warnHtmlMessage) ? e.warnHtmlMessage : !0, L = !!e.escapeParameter, m = $(e.messageCompiler) ? e.messageCompiler : fr;
  process.env.NODE_ENV !== "production" && $(e.messageCompiler) && Ts(ke(te.EXPERIMENTAL_CUSTOM_MESSAGE_COMPILER));
  const w = $(e.messageResolver) ? e.messageResolver : dr || Ui, y = $(e.localeFallbacker) ? e.localeFallbacker : _r || ki, E = F(e.fallbackContext) ? e.fallbackContext : void 0, P = e, W = F(P.__datetimeFormatters) ? P.__datetimeFormatters : /* @__PURE__ */ new Map(), X = F(P.__numberFormatters) ? P.__numberFormatters : /* @__PURE__ */ new Map(), ae = F(P.__meta) ? P.__meta : {};
  kn++;
  const G = {
    version: n,
    cid: kn,
    locale: r,
    fallbackLocale: i,
    messages: l,
    modifiers: g,
    pluralRules: T,
    missing: O,
    missingWarn: N,
    fallbackWarn: v,
    fallbackFormat: S,
    unresolving: C,
    postTranslation: k,
    processor: f,
    warnHtmlMessage: _,
    escapeParameter: L,
    messageCompiler: m,
    messageResolver: w,
    localeFallbacker: y,
    fallbackContext: E,
    onWarn: t,
    __meta: ae
  };
  return G.datetimeFormats = c, G.numberFormats = u, G.__datetimeFormatters = W, G.__numberFormatters = X, process.env.NODE_ENV !== "production" && (G.__v_emitter = P.__v_emitter != null ? P.__v_emitter : void 0), (process.env.NODE_ENV !== "production" || __INTLIFY_PROD_DEVTOOLS__) && Oi(G, n, ae), G;
}
const Mt = (e) => ({ [e]: V() });
function ht(e, t) {
  return e instanceof RegExp ? e.test(t) : e;
}
function Er(e, t) {
  return e instanceof RegExp ? e.test(t) : e;
}
function tn(e, t, n, r, s) {
  const { missing: i, onWarn: l } = e;
  if (process.env.NODE_ENV !== "production") {
    const c = e.__v_emitter;
    c && c.emit("missing", {
      locale: n,
      key: t,
      type: s,
      groupId: `${s}:${t}`
    });
  }
  if (i !== null) {
    const c = i(e, n, t, s);
    return I(c) ? c : t;
  } else
    return process.env.NODE_ENV !== "production" && Er(r, t) && l(ke(te.NOT_FOUND_KEY, { key: t, locale: n })), t;
}
function Ge(e, t, n) {
  const r = e;
  r.__localeChainCache = /* @__PURE__ */ new Map(), e.localeFallbacker(e, n, t);
}
function gr(e, t) {
  return e === t ? !1 : e.split("-")[0] === t.split("-")[0];
}
function Ji(e, t) {
  const n = t.indexOf(e);
  if (n === -1)
    return !1;
  for (let r = n + 1; r < t.length; r++)
    if (gr(e, t[r]))
      return !0;
  return !1;
}
const An = typeof Intl < "u", pr = {
  dateTimeFormat: An && typeof Intl.DateTimeFormat < "u",
  numberFormat: An && typeof Intl.NumberFormat < "u"
};
function vn(e, ...t) {
  const { datetimeFormats: n, unresolving: r, fallbackLocale: s, onWarn: i, localeFallbacker: l } = e, { __datetimeFormatters: c } = e;
  if (process.env.NODE_ENV !== "production" && !pr.dateTimeFormat)
    return i(ke(te.CANNOT_FORMAT_DATE)), ut;
  const [u, g, T, O] = xt(...t), N = K(T.missingWarn) ? T.missingWarn : e.missingWarn, v = K(T.fallbackWarn) ? T.fallbackWarn : e.fallbackWarn, S = !!T.part, C = en(e, T), k = l(
    e,
    // eslint-disable-line @typescript-eslint/no-explicit-any
    s,
    C
  );
  if (!I(u) || u === "")
    return new Intl.DateTimeFormat(C, O).format(g);
  let f = {}, _, L = null, m = C, w = null;
  const y = "datetime format";
  for (let W = 0; W < k.length; W++) {
    if (_ = w = k[W], process.env.NODE_ENV !== "production" && C !== _ && ht(v, u) && i(ke(te.FALLBACK_TO_DATE_FORMAT, {
      key: u,
      target: _
    })), process.env.NODE_ENV !== "production" && C !== _) {
      const X = e.__v_emitter;
      X && X.emit("fallback", {
        type: y,
        key: u,
        from: m,
        to: w,
        groupId: `${y}:${u}`
      });
    }
    if (f = n[_] || {}, L = f[u], M(L))
      break;
    tn(e, u, _, N, y), m = w;
  }
  if (!M(L) || !I(_))
    return r ? mt : u;
  let E = `${_}__${u}`;
  _t(O) || (E = `${E}__${JSON.stringify(O)}`);
  let P = c.get(E);
  return P || (P = new Intl.DateTimeFormat(_, q({}, L, O)), c.set(E, P)), S ? P.formatToParts(g) : P.format(g);
}
const Nr = [
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
function xt(...e) {
  const [t, n, r, s] = e, i = V();
  let l = V(), c;
  if (I(t)) {
    const u = t.match(/(\d{4}-\d{2}-\d{2})(T|\s)?(.*)/);
    if (!u)
      throw Ee(ee.INVALID_ISO_DATE_ARGUMENT);
    const g = u[3] ? u[3].trim().startsWith("T") ? `${u[1].trim()}${u[3].trim()}` : `${u[1].trim()}T${u[3].trim()}` : u[1].trim();
    c = new Date(g);
    try {
      c.toISOString();
    } catch {
      throw Ee(ee.INVALID_ISO_DATE_ARGUMENT);
    }
  } else if (Is(t)) {
    if (isNaN(t.getTime()))
      throw Ee(ee.INVALID_DATE_ARGUMENT);
    c = t;
  } else if (J(t))
    c = t;
  else
    throw Ee(ee.INVALID_ARGUMENT);
  return I(n) ? i.key = n : M(n) && Object.keys(n).forEach((u) => {
    Nr.includes(u) ? l[u] = n[u] : i[u] = n[u];
  }), I(r) ? i.locale = r : M(r) && (l = r), M(s) && (l = s), [i.key || "", c, i, l];
}
function Dn(e, t, n) {
  const r = e;
  for (const s in n) {
    const i = `${t}__${s}`;
    r.__datetimeFormatters.has(i) && r.__datetimeFormatters.delete(i);
  }
}
function Sn(e, ...t) {
  const { numberFormats: n, unresolving: r, fallbackLocale: s, onWarn: i, localeFallbacker: l } = e, { __numberFormatters: c } = e;
  if (process.env.NODE_ENV !== "production" && !pr.numberFormat)
    return i(ke(te.CANNOT_FORMAT_NUMBER)), ut;
  const [u, g, T, O] = $t(...t), N = K(T.missingWarn) ? T.missingWarn : e.missingWarn, v = K(T.fallbackWarn) ? T.fallbackWarn : e.fallbackWarn, S = !!T.part, C = en(e, T), k = l(
    e,
    // eslint-disable-line @typescript-eslint/no-explicit-any
    s,
    C
  );
  if (!I(u) || u === "")
    return new Intl.NumberFormat(C, O).format(g);
  let f = {}, _, L = null, m = C, w = null;
  const y = "number format";
  for (let W = 0; W < k.length; W++) {
    if (_ = w = k[W], process.env.NODE_ENV !== "production" && C !== _ && ht(v, u) && i(ke(te.FALLBACK_TO_NUMBER_FORMAT, {
      key: u,
      target: _
    })), process.env.NODE_ENV !== "production" && C !== _) {
      const X = e.__v_emitter;
      X && X.emit("fallback", {
        type: y,
        key: u,
        from: m,
        to: w,
        groupId: `${y}:${u}`
      });
    }
    if (f = n[_] || {}, L = f[u], M(L))
      break;
    tn(e, u, _, N, y), m = w;
  }
  if (!M(L) || !I(_))
    return r ? mt : u;
  let E = `${_}__${u}`;
  _t(O) || (E = `${E}__${JSON.stringify(O)}`);
  let P = c.get(E);
  return P || (P = new Intl.NumberFormat(_, q({}, L, O)), c.set(E, P)), S ? P.formatToParts(g) : P.format(g);
}
const Lr = [
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
function $t(...e) {
  const [t, n, r, s] = e, i = V();
  let l = V();
  if (!J(t))
    throw Ee(ee.INVALID_ARGUMENT);
  const c = t;
  return I(n) ? i.key = n : M(n) && Object.keys(n).forEach((u) => {
    Lr.includes(u) ? l[u] = n[u] : i[u] = n[u];
  }), I(r) ? i.locale = r : M(r) && (l = r), M(s) && (l = s), [i.key || "", c, i, l];
}
function Pn(e, t, n) {
  const r = e;
  for (const s in n) {
    const i = `${t}__${s}`;
    r.__numberFormatters.has(i) && r.__numberFormatters.delete(i);
  }
}
const qi = (e) => e, Zi = (e) => "", Qi = "text", ea = (e) => e.length === 0 ? "" : qt(e), ta = Ds;
function Rn(e, t) {
  return e = Math.abs(e), t === 2 ? e ? e > 1 ? 1 : 0 : 1 : e ? Math.min(e, 2) : 0;
}
function na(e) {
  const t = J(e.pluralIndex) ? e.pluralIndex : -1;
  return e.named && (J(e.named.count) || J(e.named.n)) ? J(e.named.count) ? e.named.count : J(e.named.n) ? e.named.n : t : t;
}
function ra(e, t) {
  t.count || (t.count = e), t.n || (t.n = e);
}
function sa(e = {}) {
  const t = e.locale, n = na(e), r = F(e.pluralRules) && I(t) && $(e.pluralRules[t]) ? e.pluralRules[t] : Rn, s = F(e.pluralRules) && I(t) && $(e.pluralRules[t]) ? Rn : void 0, i = (f) => f[r(n, f.length, s)], l = e.list || [], c = (f) => l[f], u = e.named || V();
  J(e.pluralIndex) && ra(n, u);
  const g = (f) => u[f];
  function T(f, _) {
    const L = $(e.messages) ? e.messages(f, !!_) : F(e.messages) ? e.messages[f] : !1;
    return L || (e.parent ? e.parent.message(f) : Zi);
  }
  const O = (f) => e.modifiers ? e.modifiers[f] : qi, N = M(e.processor) && $(e.processor.normalize) ? e.processor.normalize : ea, v = M(e.processor) && $(e.processor.interpolate) ? e.processor.interpolate : ta, S = M(e.processor) && I(e.processor.type) ? e.processor.type : Qi, k = {
    list: c,
    named: g,
    plural: i,
    linked: (f, ..._) => {
      const [L, m] = _;
      let w = "text", y = "";
      _.length === 1 ? F(L) ? (y = L.modifier || y, w = L.type || w) : I(L) && (y = L || y) : _.length === 2 && (I(L) && (y = L || y), I(m) && (w = m || w));
      const E = T(f, !0)(k), P = (
        // The message in vnode resolved with linked are returned as an array by processor.nomalize
        w === "vnode" && z(E) && y ? E[0] : E
      );
      return y ? O(y)(P, w) : P;
    },
    message: T,
    type: S,
    interpolate: v,
    normalize: N,
    values: q(V(), l, u)
  };
  return k;
}
const Mn = () => "", se = (e) => $(e);
function Fn(e, ...t) {
  const { fallbackFormat: n, postTranslation: r, unresolving: s, messageCompiler: i, fallbackLocale: l, messages: c } = e, [u, g] = Gt(...t), T = K(g.missingWarn) ? g.missingWarn : e.missingWarn, O = K(g.fallbackWarn) ? g.fallbackWarn : e.fallbackWarn, N = K(g.escapeParameter) ? g.escapeParameter : e.escapeParameter, v = !!g.resolvedMessage, S = I(g.default) || K(g.default) ? K(g.default) ? i ? u : () => u : g.default : n ? i ? u : () => u : null, C = n || S != null && (I(S) || $(S)), k = en(e, g);
  N && ia(g);
  let [f, _, L] = v ? [
    u,
    k,
    c[k] || V()
  ] : br(e, u, k, l, O, T), m = f, w = u;
  if (!v && !(I(m) || oe(m) || se(m)) && C && (m = S, w = m), !v && (!(I(m) || oe(m) || se(m)) || !I(_)))
    return s ? mt : u;
  if (process.env.NODE_ENV !== "production" && I(m) && e.messageCompiler == null)
    return de(`The message format compilation is not supported in this build. Because message compiler isn't included. You need to pre-compilation all message format. So translate function return '${u}'.`), u;
  let y = !1;
  const E = () => {
    y = !0;
  }, P = se(m) ? m : Tr(e, u, _, m, w, E);
  if (y)
    return m;
  const W = ca(e, _, L, g), X = sa(W), ae = aa(e, P, X);
  let G = r ? r(ae, u) : ae;
  if (N && I(G) && (G = ks(G)), process.env.NODE_ENV !== "production" || __INTLIFY_PROD_DEVTOOLS__) {
    const Ae = {
      timestamp: Date.now(),
      key: I(u) ? u : se(m) ? m.key : "",
      locale: _ || (se(m) ? m.locale : ""),
      format: I(m) ? m : se(m) ? m.source : "",
      message: G
    };
    Ae.meta = q({}, e.__meta, /* @__PURE__ */ Ki() || {}), wi(Ae);
  }
  return G;
}
function ia(e) {
  z(e.list) ? e.list = e.list.map((t) => I(t) ? En(t) : t) : F(e.named) && Object.keys(e.named).forEach((t) => {
    I(e.named[t]) && (e.named[t] = En(e.named[t]));
  });
}
function br(e, t, n, r, s, i) {
  const { messages: l, onWarn: c, messageResolver: u, localeFallbacker: g } = e, T = g(e, r, n);
  let O = V(), N, v = null, S = n, C = null;
  const k = "translate";
  for (let f = 0; f < T.length; f++) {
    if (N = C = T[f], process.env.NODE_ENV !== "production" && n !== N && !gr(n, N) && ht(s, t) && c(ke(te.FALLBACK_TO_TRANSLATE, {
      key: t,
      target: N
    })), process.env.NODE_ENV !== "production" && n !== N) {
      const w = e.__v_emitter;
      w && w.emit("fallback", {
        type: k,
        key: t,
        from: S,
        to: C,
        groupId: `${k}:${t}`
      });
    }
    O = l[N] || V();
    let _ = null, L, m;
    if (process.env.NODE_ENV !== "production" && ge && (_ = window.performance.now(), L = "intlify-message-resolve-start", m = "intlify-message-resolve-end", re && re(L)), (v = u(O, t)) === null && (v = O[t]), process.env.NODE_ENV !== "production" && ge) {
      const w = window.performance.now(), y = e.__v_emitter;
      y && _ && v && y.emit("message-resolve", {
        type: "message-resolve",
        key: t,
        message: v,
        time: w - _,
        groupId: `${k}:${t}`
      }), L && m && re && Ce && (re(m), Ce("intlify message resolve", L, m));
    }
    if (I(v) || oe(v) || se(v))
      break;
    if (!Ji(N, T)) {
      const w = tn(
        e,
        // eslint-disable-line @typescript-eslint/no-explicit-any
        t,
        N,
        i,
        k
      );
      w !== t && (v = w);
    }
    S = C;
  }
  return [v, N, O];
}
function Tr(e, t, n, r, s, i) {
  const { messageCompiler: l, warnHtmlMessage: c } = e;
  if (se(r)) {
    const N = r;
    return N.locale = N.locale || n, N.key = N.key || t, N;
  }
  if (l == null) {
    const N = () => r;
    return N.locale = n, N.key = t, N;
  }
  let u = null, g, T;
  process.env.NODE_ENV !== "production" && ge && (u = window.performance.now(), g = "intlify-message-compilation-start", T = "intlify-message-compilation-end", re && re(g));
  const O = l(r, la(e, n, s, r, c, i));
  if (process.env.NODE_ENV !== "production" && ge) {
    const N = window.performance.now(), v = e.__v_emitter;
    v && u && v.emit("message-compilation", {
      type: "message-compilation",
      message: r,
      time: N - u,
      groupId: `translate:${t}`
    }), g && T && re && Ce && (re(T), Ce("intlify message compilation", g, T));
  }
  return O.locale = n, O.key = t, O.source = r, O;
}
function aa(e, t, n) {
  let r = null, s, i;
  process.env.NODE_ENV !== "production" && ge && (r = window.performance.now(), s = "intlify-message-evaluation-start", i = "intlify-message-evaluation-end", re && re(s));
  const l = t(n);
  if (process.env.NODE_ENV !== "production" && ge) {
    const c = window.performance.now(), u = e.__v_emitter;
    u && r && u.emit("message-evaluation", {
      type: "message-evaluation",
      value: l,
      time: c - r,
      groupId: `translate:${t.key}`
    }), s && i && re && Ce && (re(i), Ce("intlify message evaluation", s, i));
  }
  return l;
}
function Gt(...e) {
  const [t, n, r] = e, s = V();
  if (!I(t) && !J(t) && !se(t) && !oe(t))
    throw Ee(ee.INVALID_ARGUMENT);
  const i = J(t) ? String(t) : (se(t), t);
  return J(n) ? s.plural = n : I(n) ? s.default = n : M(n) && !_t(n) ? s.named = n : z(n) && (s.list = n), J(r) ? s.plural = r : I(r) ? s.default = r : M(r) && q(s, r), [i, s];
}
function la(e, t, n, r, s, i) {
  return {
    locale: t,
    key: n,
    warnHtmlMessage: s,
    onError: (l) => {
      if (i && i(l), process.env.NODE_ENV !== "production") {
        const c = oa(r), u = `Message compilation error: ${l.message}`, g = l.location && c && Ss(c, l.location.start.offset, l.location.end.offset), T = e.__v_emitter;
        T && c && T.emit("compile-error", {
          message: c,
          error: l.message,
          start: l.location && l.location.start.offset,
          end: l.location && l.location.end.offset,
          groupId: `translate:${n}`
        }), console.error(g ? `${u}
${g}` : u);
      } else
        throw l;
    },
    onCacheKey: (l) => ws(t, n, l)
  };
}
function oa(e) {
  if (I(e))
    return e;
  if (e.loc && e.loc.source)
    return e.loc.source;
}
function ca(e, t, n, r) {
  const { modifiers: s, pluralRules: i, messageResolver: l, fallbackLocale: c, fallbackWarn: u, missingWarn: g, fallbackContext: T } = e, N = {
    locale: t,
    modifiers: s,
    pluralRules: i,
    messages: (v, S) => {
      let C = l(n, v);
      if (C == null && (T || S)) {
        const [, , k] = br(
          T || e,
          // NOTE: if has fallbackContext, fallback to root, else if use linked, fallback to local context
          v,
          t,
          c,
          u,
          g
        );
        C = l(k, v);
      }
      if (I(C) || oe(C)) {
        let k = !1;
        const _ = Tr(e, v, t, C, v, () => {
          k = !0;
        });
        return k ? Mn : _;
      } else return se(C) ? C : Mn;
    }
  };
  return e.processor && (N.processor = e.processor), r.list && (N.list = r.list), r.named && (N.named = r.named), J(r.plural) && (N.pluralIndex = r.plural), N;
}
ci();
/*!
  * vue-i18n v11.2.2
  * (c) 2025 kazuya kawaguchi
  * Released under the MIT License.
  */
const ua = "11.2.2";
function fa() {
  typeof __VUE_I18N_FULL_INSTALL__ != "boolean" && (ye().__VUE_I18N_FULL_INSTALL__ = !0), typeof __VUE_I18N_LEGACY_API__ != "boolean" && (ye().__VUE_I18N_LEGACY_API__ = !0), typeof __INTLIFY_DROP_MESSAGE_COMPILER__ != "boolean" && (ye().__INTLIFY_DROP_MESSAGE_COMPILER__ = !1), typeof __INTLIFY_PROD_DEVTOOLS__ != "boolean" && (ye().__INTLIFY_PROD_DEVTOOLS__ = !1);
}
const Z = {
  // composer module errors
  UNEXPECTED_RETURN_TYPE: Ii,
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
function ze(e, ...t) {
  return Me(e, null, process.env.NODE_ENV !== "production" ? { messages: da, args: t } : void 0);
}
const da = {
  [Z.UNEXPECTED_RETURN_TYPE]: "Unexpected return type in composer",
  [Z.INVALID_ARGUMENT]: "Invalid argument",
  [Z.MUST_BE_CALL_SETUP_TOP]: "Must be called at the top of a `setup` function",
  [Z.NOT_INSTALLED]: "Need to install with `app.use` function",
  [Z.UNEXPECTED_ERROR]: "Unexpected error",
  [Z.REQUIRED_VALUE]: "Required in value: {0}",
  [Z.INVALID_VALUE]: "Invalid value",
  [Z.CANNOT_SETUP_VUE_DEVTOOLS_PLUGIN]: "Cannot setup vue-devtools plugin",
  [Z.NOT_INSTALLED_WITH_PROVIDE]: "Need to install with `provide` function",
  [Z.NOT_COMPATIBLE_LEGACY_VUE_I18N]: "Not compatible legacy VueI18n.",
  [Z.NOT_AVAILABLE_COMPOSITION_IN_LEGACY]: "Not available Compostion API in Legacy API mode. Please make sure that the legacy API mode is working properly"
}, jt = /* @__PURE__ */ pe("__translateVNode"), Ht = /* @__PURE__ */ pe("__datetimeParts"), Bt = /* @__PURE__ */ pe("__numberParts"), Yt = /* @__PURE__ */ pe("__enableEmitter"), Kt = /* @__PURE__ */ pe("__disableEmitter"), _a = pe("__setPluralRules"), Or = /* @__PURE__ */ pe("__injectWithOption"), zt = /* @__PURE__ */ pe("__dispose"), fe = {
  FALLBACK_TO_ROOT: Vi,
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
}, ma = {
  [fe.FALLBACK_TO_ROOT]: "Fall back to {type} '{key}' with root locale.",
  [fe.NOT_FOUND_PARENT_SCOPE]: "Not found parent scope. use the global scope.",
  [fe.IGNORE_OBJ_FLATTEN]: "Ignore object flatten: '{key}' key has an string value",
  /**
   * @deprecated will be removed at vue-i18n v12
   */
  [fe.DEPRECATE_LEGACY_MODE]: `Legacy API mode has been deprecated in v11. Use Composition API mode instead.
About how to use the Composition API mode, see https://vue-i18n.intlify.dev/guide/advanced/composition.html`,
  /**
   * @deprecated will be removed at vue-i18n v12
   */
  [fe.DEPRECATE_TRANSLATE_CUSTOME_DIRECTIVE]: "'v-t' has been deprecated in v11. Use translate APIs ('t' or '$t') instead.",
  [fe.DUPLICATE_USE_I18N_CALLING]: "Duplicate `useI18n` calling by local scope. Please don't call it on local scope, due to it does not work properly in component."
};
function ft(e, ...t) {
  return dt(ma[e], ...t);
}
function Xe(e) {
  if (!F(e) || oe(e))
    return e;
  for (const t in e)
    if (le(e, t))
      if (!t.includes("."))
        F(e[t]) && Xe(e[t]);
      else {
        const n = t.split("."), r = n.length - 1;
        let s = e, i = !1;
        for (let l = 0; l < r; l++) {
          if (n[l] === "__proto__")
            throw new Error(`unsafe key: ${n[l]}`);
          if (n[l] in s || (s[n[l]] = V()), !F(s[n[l]])) {
            process.env.NODE_ENV !== "production" && de(ft(fe.IGNORE_OBJ_FLATTEN, {
              key: n[l]
            })), i = !0;
            break;
          }
          s = s[n[l]];
        }
        if (i || (oe(s) ? cr.includes(n[r]) || delete e[t] : (s[n[r]] = e[t], delete e[t])), !oe(s)) {
          const l = s[n[r]];
          F(l) && Xe(l);
        }
      }
  return e;
}
function wr(e, t) {
  const { messages: n, __i18n: r, messageResolver: s, flatJson: i } = t, l = M(n) ? n : z(r) ? V() : { [e]: V() };
  if (z(r) && r.forEach((c) => {
    if ("locale" in c && "resource" in c) {
      const { locale: u, resource: g } = c;
      u ? (l[u] = l[u] || V(), at(g, l[u])) : at(g, l);
    } else
      I(c) && at(JSON.parse(c), l);
  }), s == null && i)
    for (const c in l)
      le(l, c) && Xe(l[c]);
  return l;
}
function yr(e) {
  return e.type;
}
function ha(e, t, n) {
  let r = F(t.messages) ? t.messages : V();
  "__i18nGlobal" in n && (r = wr(e.locale.value, {
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
      i.length && i.forEach((l) => {
        e.mergeDateTimeFormat(l, t.datetimeFormats[l]);
      });
    }
    if (F(t.numberFormats)) {
      const i = Object.keys(t.numberFormats);
      i.length && i.forEach((l) => {
        e.mergeNumberFormat(l, t.numberFormats[l]);
      });
    }
  }
}
function Un(e) {
  return j(Rr, null, e, 0);
}
function nn() {
  return "currentInstance" in on ? on["currentInstance"] : Ar();
}
const Wn = "__INTLIFY_META__", Vn = () => [], Ea = () => !1;
let xn = 0;
function $n(e) {
  return (t, n, r, s) => e(n, r, nn() || void 0, s);
}
const ga = /* @__NO_SIDE_EFFECTS__ */ () => {
  const e = nn();
  let t = null;
  return e && (t = yr(e)[Wn]) ? { [Wn]: t } : null;
};
function pa(e = {}) {
  const { __root: t, __injectWithOption: n } = e, r = t === void 0, s = e.flatJson, i = ge ? vr : Dr;
  let l = K(e.inheritLocale) ? e.inheritLocale : !0;
  const c = i(
    // prettier-ignore
    t && l ? t.locale.value : I(e.locale) ? e.locale : ct
  ), u = i(
    // prettier-ignore
    t && l ? t.fallbackLocale.value : I(e.fallbackLocale) || z(e.fallbackLocale) || M(e.fallbackLocale) || e.fallbackLocale === !1 ? e.fallbackLocale : c.value
  ), g = i(wr(c.value, e)), T = i(M(e.datetimeFormats) ? e.datetimeFormats : { [c.value]: {} }), O = i(M(e.numberFormats) ? e.numberFormats : { [c.value]: {} });
  let N = t ? t.missingWarn : K(e.missingWarn) || ot(e.missingWarn) ? e.missingWarn : !0, v = t ? t.fallbackWarn : K(e.fallbackWarn) || ot(e.fallbackWarn) ? e.fallbackWarn : !0, S = t ? t.fallbackRoot : K(e.fallbackRoot) ? e.fallbackRoot : !0, C = !!e.fallbackFormat, k = $(e.missing) ? e.missing : null, f = $(e.missing) ? $n(e.missing) : null, _ = $(e.postTranslation) ? e.postTranslation : null, L = t ? t.warnHtmlMessage : K(e.warnHtmlMessage) ? e.warnHtmlMessage : !0, m = !!e.escapeParameter;
  const w = t ? t.modifiers : M(e.modifiers) ? e.modifiers : {};
  let y = e.pluralRules || t && t.pluralRules, E;
  E = (() => {
    r && Cn(null);
    const d = {
      version: ua,
      locale: c.value,
      fallbackLocale: u.value,
      messages: g.value,
      modifiers: w,
      pluralRules: y,
      missing: f === null ? void 0 : f,
      missingWarn: N,
      fallbackWarn: v,
      fallbackFormat: C,
      unresolving: !0,
      postTranslation: _ === null ? void 0 : _,
      warnHtmlMessage: L,
      escapeParameter: m,
      messageResolver: e.messageResolver,
      messageCompiler: e.messageCompiler,
      __meta: { framework: "vue" }
    };
    d.datetimeFormats = T.value, d.numberFormats = O.value, d.__datetimeFormatters = M(E) ? E.__datetimeFormatters : void 0, d.__numberFormatters = M(E) ? E.__numberFormatters : void 0, process.env.NODE_ENV !== "production" && (d.__v_emitter = M(E) ? E.__v_emitter : void 0);
    const p = Xi(d);
    return r && Cn(p), p;
  })(), Ge(E, c.value, u.value);
  function W() {
    return [
      c.value,
      u.value,
      g.value,
      T.value,
      O.value
    ];
  }
  const X = xe({
    get: () => c.value,
    set: (d) => {
      E.locale = d, c.value = d;
    }
  }), ae = xe({
    get: () => u.value,
    set: (d) => {
      E.fallbackLocale = d, u.value = d, Ge(E, c.value, d);
    }
  }), G = xe(() => g.value), Ae = /* @__PURE__ */ xe(() => T.value), Et = /* @__PURE__ */ xe(() => O.value);
  function gt() {
    return $(_) ? _ : null;
  }
  function pt(d) {
    _ = d, E.postTranslation = d;
  }
  function Nt() {
    return k;
  }
  function Lt(d) {
    d !== null && (f = $n(d)), k = d, E.missing = f;
  }
  function bt(d, p) {
    return d !== "translate" || !p.resolvedMessage;
  }
  const _e = (d, p, U, B, Oe, Qe) => {
    W();
    let ve;
    try {
      process.env.NODE_ENV !== "production" || __INTLIFY_PROD_DEVTOOLS__, r || (E.fallbackContext = t ? zi() : void 0), ve = d(E);
    } finally {
      process.env.NODE_ENV !== "production" || __INTLIFY_PROD_DEVTOOLS__, r || (E.fallbackContext = void 0);
    }
    if (U !== "translate exists" && // for not `te` (e.g `t`)
    J(ve) && ve === mt || U === "translate exists" && !ve) {
      const [we, kr] = p();
      if (process.env.NODE_ENV !== "production" && t && I(we) && bt(U, kr) && (S && (ht(v, we) || Er(N, we)) && de(ft(fe.FALLBACK_TO_ROOT, {
        key: we,
        type: U
      })), process.env.NODE_ENV !== "production")) {
        const { __v_emitter: ln } = E;
        ln && S && ln.emit("fallback", {
          type: U,
          key: we,
          to: "global",
          groupId: `${U}:${we}`
        });
      }
      return t && S ? B(t) : Oe(we);
    } else {
      if (Qe(ve))
        return ve;
      throw ze(Z.UNEXPECTED_RETURN_TYPE);
    }
  };
  function Fe(...d) {
    return _e((p) => Reflect.apply(Fn, null, [p, ...d]), () => Gt(...d), "translate", (p) => Reflect.apply(p.t, p, [...d]), (p) => p, (p) => I(p));
  }
  function Tt(...d) {
    const [p, U, B] = d;
    if (B && !F(B))
      throw ze(Z.INVALID_ARGUMENT);
    return Fe(p, U, q({ resolvedMessage: !0 }, B || {}));
  }
  function Ot(...d) {
    return _e((p) => Reflect.apply(vn, null, [p, ...d]), () => xt(...d), "datetime format", (p) => Reflect.apply(p.d, p, [...d]), () => ut, (p) => I(p) || z(p));
  }
  function wt(...d) {
    return _e((p) => Reflect.apply(Sn, null, [p, ...d]), () => $t(...d), "number format", (p) => Reflect.apply(p.n, p, [...d]), () => ut, (p) => I(p) || z(p));
  }
  function yt(d) {
    return d.map((p) => I(p) || J(p) || K(p) ? Un(String(p)) : p);
  }
  const It = {
    normalize: yt,
    interpolate: (d) => d,
    type: "vnode"
  };
  function qe(...d) {
    return _e((p) => {
      let U;
      const B = p;
      try {
        B.processor = It, U = Reflect.apply(Fn, null, [B, ...d]);
      } finally {
        B.processor = null;
      }
      return U;
    }, () => Gt(...d), "translate", (p) => p[jt](...d), (p) => [Un(p)], (p) => z(p));
  }
  function Ct(...d) {
    return _e((p) => Reflect.apply(Sn, null, [p, ...d]), () => $t(...d), "number format", (p) => p[Bt](...d), Vn, (p) => I(p) || z(p));
  }
  function Ze(...d) {
    return _e((p) => Reflect.apply(vn, null, [p, ...d]), () => xt(...d), "datetime format", (p) => p[Ht](...d), Vn, (p) => I(p) || z(p));
  }
  function kt(d) {
    y = d, E.pluralRules = y;
  }
  function At(d, p) {
    return _e(() => {
      if (!d)
        return !1;
      const U = I(p) ? p : c.value, B = Te(U), Oe = E.messageResolver(B, d);
      return oe(Oe) || se(Oe) || I(Oe);
    }, () => [d], "translate exists", (U) => Reflect.apply(U.te, U, [d, p]), Ea, (U) => K(U));
  }
  function Ue(d) {
    let p = null;
    const U = ur(E, u.value, c.value);
    for (let B = 0; B < U.length; B++) {
      const Oe = g.value[U[B]] || {}, Qe = E.messageResolver(Oe, d);
      if (Qe != null) {
        p = Qe;
        break;
      }
    }
    return p;
  }
  function We(d) {
    const p = Ue(d);
    return p ?? (t ? t.tm(d) || {} : {});
  }
  function Te(d) {
    return g.value[d] || {};
  }
  function Ve(d, p) {
    if (s) {
      const U = { [d]: p };
      for (const B in U)
        le(U, B) && Xe(U[B]);
      p = U[d];
    }
    g.value[d] = p, E.messages = g.value;
  }
  function vt(d, p) {
    g.value[d] = g.value[d] || {};
    const U = { [d]: p };
    if (s)
      for (const B in U)
        le(U, B) && Xe(U[B]);
    p = U[d], at(p, g.value[d]), E.messages = g.value;
  }
  function a(d) {
    return T.value[d] || {};
  }
  function o(d, p) {
    T.value[d] = p, E.datetimeFormats = T.value, Dn(E, d, p);
  }
  function h(d, p) {
    T.value[d] = q(T.value[d] || {}, p), E.datetimeFormats = T.value, Dn(E, d, p);
  }
  function A(d) {
    return O.value[d] || {};
  }
  function x(d, p) {
    O.value[d] = p, E.numberFormats = O.value, Pn(E, d, p);
  }
  function H(d, p) {
    O.value[d] = q(O.value[d] || {}, p), E.numberFormats = O.value, Pn(E, d, p);
  }
  xn++, t && ge && (cn(t.locale, (d) => {
    l && (c.value = d, E.locale = d, Ge(E, c.value, u.value));
  }), cn(t.fallbackLocale, (d) => {
    l && (u.value = d, E.fallbackLocale = d, Ge(E, c.value, u.value));
  }));
  const R = {
    id: xn,
    locale: X,
    fallbackLocale: ae,
    get inheritLocale() {
      return l;
    },
    set inheritLocale(d) {
      l = d, d && t && (c.value = t.locale.value, u.value = t.fallbackLocale.value, Ge(E, c.value, u.value));
    },
    get availableLocales() {
      return Object.keys(g.value).sort();
    },
    messages: G,
    get modifiers() {
      return w;
    },
    get pluralRules() {
      return y || {};
    },
    get isGlobal() {
      return r;
    },
    get missingWarn() {
      return N;
    },
    set missingWarn(d) {
      N = d, E.missingWarn = N;
    },
    get fallbackWarn() {
      return v;
    },
    set fallbackWarn(d) {
      v = d, E.fallbackWarn = v;
    },
    get fallbackRoot() {
      return S;
    },
    set fallbackRoot(d) {
      S = d;
    },
    get fallbackFormat() {
      return C;
    },
    set fallbackFormat(d) {
      C = d, E.fallbackFormat = C;
    },
    get warnHtmlMessage() {
      return L;
    },
    set warnHtmlMessage(d) {
      L = d, E.warnHtmlMessage = d;
    },
    get escapeParameter() {
      return m;
    },
    set escapeParameter(d) {
      m = d, E.escapeParameter = d;
    },
    t: Fe,
    getLocaleMessage: Te,
    setLocaleMessage: Ve,
    mergeLocaleMessage: vt,
    getPostTranslationHandler: gt,
    setPostTranslationHandler: pt,
    getMissingHandler: Nt,
    setMissingHandler: Lt,
    [_a]: kt
  };
  return R.datetimeFormats = Ae, R.numberFormats = Et, R.rt = Tt, R.te = At, R.tm = We, R.d = Ot, R.n = wt, R.getDateTimeFormat = a, R.setDateTimeFormat = o, R.mergeDateTimeFormat = h, R.getNumberFormat = A, R.setNumberFormat = x, R.mergeNumberFormat = H, R[Or] = n, R[jt] = qe, R[Ht] = Ze, R[Bt] = Ct, process.env.NODE_ENV !== "production" && (R[Yt] = (d) => {
    E.__v_emitter = d;
  }, R[Kt] = () => {
    E.__v_emitter = void 0;
  }), R;
}
function Gn(e, t) {
}
const rn = {
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
function Na({ slots: e }, t) {
  return t.length === 1 && t[0] === "default" ? (e.default ? e.default() : []).reduce((r, s) => [
    ...r,
    // prettier-ignore
    ...s.type === Bn ? s.children : [s]
  ], []) : t.reduce((n, r) => {
    const s = e[r];
    return s && (n[r] = s()), n;
  }, V());
}
function Ir() {
  return Bn;
}
q({
  keypath: {
    type: String,
    required: !0
  },
  plural: {
    type: [Number, String],
    validator: (e) => J(e) || !isNaN(e)
  }
}, rn);
function La(e) {
  return z(e) && !I(e[0]);
}
function Cr(e, t, n, r) {
  const { slots: s, attrs: i } = t;
  return () => {
    const l = { part: !0 };
    let c = V();
    e.locale && (l.locale = e.locale), I(e.format) ? l.key = e.format : F(e.format) && (I(e.format.key) && (l.key = e.format.key), c = Object.keys(e.format).reduce((N, v) => n.includes(v) ? q(V(), N, { [v]: e.format[v] }) : N, V()));
    const u = r(e.value, l, c);
    let g = [l.key];
    z(u) ? g = u.map((N, v) => {
      const S = s[N.type], C = S ? S({ [N.type]: N.value, index: v, parts: u }) : [N.value];
      return La(C) && (C[0].key = `${N.type}-${v}`), C;
    }) : I(u) && (g = [u]);
    const T = q(V(), i), O = I(e.tag) || F(e.tag) ? e.tag : Ir();
    return Hn(O, T, g);
  };
}
q({
  value: {
    type: Number,
    required: !0
  },
  format: {
    type: [String, Object]
  }
}, rn);
const ba = /* @__PURE__ */ pe("global-vue-i18n");
function sn(e = {}) {
  const t = nn();
  if (t == null)
    throw ze(Z.MUST_BE_CALL_SETUP_TOP);
  if (!t.isCE && t.appContext.app != null && !t.appContext.app.__VUE_I18N_SYMBOL__)
    throw ze(Z.NOT_INSTALLED);
  const n = Ta(t), r = wa(n), s = yr(t), i = Oa(e, s);
  if (i === "global")
    return ha(r, e, s), r;
  if (i === "parent") {
    let u = ya(n, t, e.__useComponent);
    return u == null && (process.env.NODE_ENV !== "production" && de(ft(fe.NOT_FOUND_PARENT_SCOPE)), u = r), u;
  }
  const l = n;
  let c = l.__getInstance(t);
  if (c == null) {
    const u = q({}, e);
    "__i18n" in s && (u.__i18n = s.__i18n), r && (u.__root = r), c = pa(u), l.__composerExtend && (c[zt] = l.__composerExtend(c)), Ca(l, t, c), l.__setInstance(t, c);
  } else
    process.env.NODE_ENV !== "production" && i === "local" && de(ft(fe.DUPLICATE_USE_I18N_CALLING));
  return c;
}
function Ta(e) {
  const t = jn(e.isCE ? ba : e.appContext.app.__VUE_I18N_SYMBOL__);
  if (!t)
    throw ze(e.isCE ? Z.NOT_INSTALLED_WITH_PROVIDE : Z.UNEXPECTED_ERROR);
  return t;
}
function Oa(e, t) {
  return _t(e) ? "__i18n" in t ? "local" : "global" : e.useScope ? e.useScope : "local";
}
function wa(e) {
  return e.mode === "composition" ? e.global : e.global.__composer;
}
function ya(e, t, n = !1) {
  let r = null;
  const s = t.root;
  let i = Ia(t, n);
  for (; i != null; ) {
    const l = e;
    if (e.mode === "composition")
      r = l.__getInstance(i);
    else if (__VUE_I18N_LEGACY_API__) {
      const c = l.__getInstance(i);
      c != null && (r = c.__composer, n && r && !r[Or] && (r = null));
    }
    if (r != null || s === i)
      break;
    i = i.parent;
  }
  return r;
}
function Ia(e, t = !1) {
  return e == null ? null : t && e.vnode.ctx || e.parent;
}
function Ca(e, t, n) {
  let r = null;
  Sr(() => {
    if (process.env.NODE_ENV !== "production") {
      t.__VUE_I18N__ = n, r = Ps();
      const s = n;
      s[Yt] && s[Yt](r), r.on("*", Gn);
    }
  }, t), Pr(() => {
    const s = n;
    process.env.NODE_ENV !== "production" && (r && r.off("*", Gn), s[Kt] && s[Kt](), delete t.__VUE_I18N__), e.__deleteInstance(t);
    const i = s[zt];
    i && (i(), delete s[zt]);
  }, t);
}
q({
  value: {
    type: [Number, Date],
    required: !0
  },
  format: {
    type: [String, Object]
  }
}, rn);
fa();
ji(bi);
Hi(Wi);
Bi(ur);
if (process.env.NODE_ENV !== "production" || __INTLIFY_PROD_DEVTOOLS__) {
  const e = ye();
  e.__INTLIFY__ = !0, Ti(e.__INTLIFY_DEVTOOLS_GLOBAL_HOOK__);
}
process.env.NODE_ENV;
const Wa = (e, t) => {
  const n = e.__vccOpts || e;
  for (const [r, s] of t)
    n[r] = s;
  return n;
};
export {
  Pa as C,
  Je as I,
  Yn as L,
  Ma as P,
  Fa as T,
  Jn as W,
  Wa as _,
  Aa as a,
  Ua as b,
  Da as c,
  Sa as d,
  Ra as e,
  Xn as f,
  Qn as g,
  gs as h,
  b as i,
  Y as l,
  va as o,
  ls as t,
  sn as u,
  us as w
};
