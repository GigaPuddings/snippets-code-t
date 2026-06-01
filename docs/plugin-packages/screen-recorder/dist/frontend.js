import { inject as ie, createVNode as N, getCurrentInstance as Ce, ref as x, computed as w, unref as d, readonly as qs, getCurrentScope as Ks, onScopeDispose as Zs, onMounted as dt, nextTick as _e, watch as Se, isRef as Ys, warn as Js, provide as Xs, defineComponent as W, createElementBlock as P, openBlock as O, mergeProps as Qs, renderSlot as xe, createElementVNode as c, normalizeClass as L, Transition as It, withCtx as re, withDirectives as le, normalizeStyle as ke, createTextVNode as eo, toDisplayString as A, vShow as st, shallowReactive as to, createBlock as J, createCommentVNode as X, resolveDynamicComponent as Nn, Fragment as be, withModifiers as $e, isVNode as je, render as ot, onUnmounted as Pn, renderList as no, vModelSelect as wt } from "vue";
const ul = (e) => {
  e.registerRoute({
    target: "window",
    path: "/screen-recorder",
    name: "ScreenRecorder",
    component: () => Promise.resolve().then(() => ll)
  });
};
function so(e, t, n, s) {
  if (typeof t == "function" ? e !== t || !0 : !t.has(e)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
  return n === "m" ? s : n === "a" ? s.call(e) : s ? s.value : t.get(e);
}
function oo(e, t, n, s, a) {
  if (typeof t == "function" ? e !== t || !0 : !t.has(e)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
  return t.set(e, n), n;
}
var Qe;
const G = "__TAURI_TO_IPC_KEY__";
function ao(e, t = !1) {
  return window.__TAURI_INTERNALS__.transformCallback(e, t);
}
async function u(e, t = {}, n) {
  return window.__TAURI_INTERNALS__.invoke(e, t, n);
}
class io {
  get rid() {
    return so(this, Qe, "f");
  }
  constructor(t) {
    Qe.set(this, void 0), oo(this, Qe, t);
  }
  /**
   * Destroys and cleans up this resource from memory.
   * **You should not call any method on this object anymore and should drop any reference to it.**
   */
  async close() {
    return u("plugin:resources|close", {
      rid: this.rid
    });
  }
}
Qe = /* @__PURE__ */ new WeakMap();
class ae {
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
    return new ae(this.width / t, this.height / t);
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
    return this.size instanceof ae ? this.size : this.size.toLogical(t);
  }
  toPhysical(t) {
    return this.size instanceof ce ? this.size : this.size.toPhysical(t);
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
    return new Z(this.x * t, this.y * t);
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
    return new zn(this.x / t, this.y / t);
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
class Ze {
  constructor(t) {
    this.position = t;
  }
  toLogical(t) {
    return this.position instanceof zn ? this.position : this.position.toLogical(t);
  }
  toPhysical(t) {
    return this.position instanceof Z ? this.position : this.position.toPhysical(t);
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
var $;
(function(e) {
  e.WINDOW_RESIZED = "tauri://resize", e.WINDOW_MOVED = "tauri://move", e.WINDOW_CLOSE_REQUESTED = "tauri://close-requested", e.WINDOW_DESTROYED = "tauri://destroyed", e.WINDOW_FOCUS = "tauri://focus", e.WINDOW_BLUR = "tauri://blur", e.WINDOW_SCALE_FACTOR_CHANGED = "tauri://scale-change", e.WINDOW_THEME_CHANGED = "tauri://theme-changed", e.WINDOW_CREATED = "tauri://window-created", e.WEBVIEW_CREATED = "tauri://webview-created", e.DRAG_ENTER = "tauri://drag-enter", e.DRAG_OVER = "tauri://drag-over", e.DRAG_DROP = "tauri://drag-drop", e.DRAG_LEAVE = "tauri://drag-leave";
})($ || ($ = {}));
async function Ln(e, t) {
  await u("plugin:event|unlisten", {
    event: e,
    eventId: t
  });
}
async function at(e, t, n) {
  var s;
  const a = typeof n?.target == "string" ? { kind: "AnyLabel", label: n.target } : (s = n?.target) !== null && s !== void 0 ? s : { kind: "Any" };
  return u("plugin:event|listen", {
    event: e,
    target: a,
    handler: ao(t)
  }).then((r) => async () => Ln(e, r));
}
async function ro(e, t, n) {
  return at(e, (s) => {
    Ln(e, s.id), t(s);
  }, n);
}
async function lo(e, t) {
  await u("plugin:event|emit", {
    event: e,
    payload: t
  });
}
async function co(e, t, n) {
  await u("plugin:event|emit_to", {
    target: typeof e == "string" ? { kind: "AnyLabel", label: e } : e,
    event: t,
    payload: n
  });
}
class Fe extends io {
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
    return u("plugin:image|new", {
      rgba: it(t),
      width: n,
      height: s
    }).then((a) => new Fe(a));
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
    return u("plugin:image|from_bytes", {
      bytes: it(t)
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
    return u("plugin:image|from_path", { path: t }).then((n) => new Fe(n));
  }
  /** Returns the RGBA data for this image, in row-major order from top to bottom.  */
  async rgba() {
    return u("plugin:image|rgba", {
      rid: this.rid
    }).then((t) => new Uint8Array(t));
  }
  /** Returns the size of this image.  */
  async size() {
    return u("plugin:image|size", { rid: this.rid });
  }
}
function it(e) {
  return e == null ? null : typeof e == "string" ? e : e instanceof Fe ? e.rid : e;
}
var kt;
(function(e) {
  e[e.Critical = 1] = "Critical", e[e.Informational = 2] = "Informational";
})(kt || (kt = {}));
class uo {
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
var an;
(function(e) {
  e.None = "none", e.Normal = "normal", e.Indeterminate = "indeterminate", e.Paused = "paused", e.Error = "error";
})(an || (an = {}));
function Rn() {
  return new Dn(window.__TAURI_INTERNALS__.metadata.currentWindow.label, {
    // @ts-expect-error `skip` is not defined in the public API but it is handled by the constructor
    skip: !0
  });
}
async function mt() {
  return u("plugin:window|get_all_windows").then((e) => e.map((t) => new Dn(t, {
    // @ts-expect-error `skip` is not defined in the public API but it is handled by the constructor
    skip: !0
  })));
}
const _t = ["tauri://created", "tauri://error"];
class Dn {
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
    this.label = t, this.listeners = /* @__PURE__ */ Object.create(null), n?.skip || u("plugin:window|create", {
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
    return (n = (await mt()).find((s) => s.label === t)) !== null && n !== void 0 ? n : null;
  }
  /**
   * Get an instance of `Window` for the current window.
   */
  static getCurrent() {
    return Rn();
  }
  /**
   * Gets a list of instances of `Window` for all available windows.
   */
  static async getAll() {
    return mt();
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
    for (const t of await mt())
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
    } : at(t, n, {
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
    } : ro(t, n, {
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
    if (_t.includes(t)) {
      for (const s of this.listeners[t] || [])
        s({
          event: t,
          id: -1,
          payload: n
        });
      return;
    }
    return lo(t, n);
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
    if (_t.includes(n)) {
      for (const a of this.listeners[n] || [])
        a({
          event: n,
          id: -1,
          payload: s
        });
      return;
    }
    return co(t, n, s);
  }
  /** @ignore */
  _handleTauriEvent(t, n) {
    return _t.includes(t) ? (t in this.listeners ? this.listeners[t].push(n) : this.listeners[t] = [n], !0) : !1;
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
    return u("plugin:window|scale_factor", {
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
    return u("plugin:window|inner_position", {
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
    return u("plugin:window|outer_position", {
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
    return u("plugin:window|inner_size", {
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
    return u("plugin:window|outer_size", {
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
    return u("plugin:window|is_fullscreen", {
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
    return u("plugin:window|is_minimized", {
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
    return u("plugin:window|is_maximized", {
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
    return u("plugin:window|is_focused", {
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
    return u("plugin:window|is_decorated", {
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
    return u("plugin:window|is_resizable", {
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
    return u("plugin:window|is_maximizable", {
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
    return u("plugin:window|is_minimizable", {
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
    return u("plugin:window|is_closable", {
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
    return u("plugin:window|is_visible", {
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
    return u("plugin:window|title", {
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
    return u("plugin:window|theme", {
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
    return u("plugin:window|is_always_on_top", {
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
    return u("plugin:window|center", {
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
    return t && (t === kt.Critical ? n = { type: "Critical" } : n = { type: "Informational" }), u("plugin:window|request_user_attention", {
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
    return u("plugin:window|set_resizable", {
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
    return u("plugin:window|set_enabled", {
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
    return u("plugin:window|is_enabled", {
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
    return u("plugin:window|set_maximizable", {
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
    return u("plugin:window|set_minimizable", {
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
    return u("plugin:window|set_closable", {
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
    return u("plugin:window|set_title", {
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
    return u("plugin:window|maximize", {
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
    return u("plugin:window|unmaximize", {
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
    return u("plugin:window|toggle_maximize", {
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
    return u("plugin:window|minimize", {
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
    return u("plugin:window|unminimize", {
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
    return u("plugin:window|show", {
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
    return u("plugin:window|hide", {
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
    return u("plugin:window|close", {
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
    return u("plugin:window|destroy", {
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
    return u("plugin:window|set_decorations", {
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
    return u("plugin:window|set_shadow", {
      label: this.label,
      value: t
    });
  }
  /**
   * Set window effects.
   */
  async setEffects(t) {
    return u("plugin:window|set_effects", {
      label: this.label,
      value: t
    });
  }
  /**
   * Clear any applied effects if possible.
   */
  async clearEffects() {
    return u("plugin:window|set_effects", {
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
    return u("plugin:window|set_always_on_top", {
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
    return u("plugin:window|set_always_on_bottom", {
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
    return u("plugin:window|set_content_protected", {
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
    return u("plugin:window|set_size", {
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
    return u("plugin:window|set_min_size", {
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
    return u("plugin:window|set_max_size", {
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
    return u("plugin:window|set_size_constraints", {
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
    return u("plugin:window|set_position", {
      label: this.label,
      value: t instanceof Ze ? t : new Ze(t)
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
    return u("plugin:window|set_fullscreen", {
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
    return u("plugin:window|set_focus", {
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
    return u("plugin:window|set_icon", {
      label: this.label,
      value: it(t)
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
    return u("plugin:window|set_skip_taskbar", {
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
    return u("plugin:window|set_cursor_grab", {
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
    return u("plugin:window|set_cursor_visible", {
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
    return u("plugin:window|set_cursor_icon", {
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
    return u("plugin:window|set_background_color", { color: t });
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
    return u("plugin:window|set_cursor_position", {
      label: this.label,
      value: t instanceof Ze ? t : new Ze(t)
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
    return u("plugin:window|set_ignore_cursor_events", {
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
    return u("plugin:window|start_dragging", {
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
    return u("plugin:window|start_resize_dragging", {
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
    return u("plugin:window|set_badge_count", {
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
    return u("plugin:window|set_badge_label", {
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
    return u("plugin:window|set_overlay_icon", {
      label: this.label,
      value: t ? it(t) : void 0
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
    return u("plugin:window|set_progress_bar", {
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
    return u("plugin:window|set_visible_on_all_workspaces", {
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
    return u("plugin:window|set_title_bar_style", {
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
    return u("plugin:window|set_theme", {
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
    return this.listen($.WINDOW_RESIZED, (n) => {
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
    return this.listen($.WINDOW_MOVED, (n) => {
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
    return this.listen($.WINDOW_CLOSE_REQUESTED, async (n) => {
      const s = new uo(n);
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
    const n = await this.listen($.DRAG_ENTER, (l) => {
      t({
        ...l,
        payload: {
          type: "enter",
          paths: l.payload.paths,
          position: new Z(l.payload.position)
        }
      });
    }), s = await this.listen($.DRAG_OVER, (l) => {
      t({
        ...l,
        payload: {
          type: "over",
          position: new Z(l.payload.position)
        }
      });
    }), a = await this.listen($.DRAG_DROP, (l) => {
      t({
        ...l,
        payload: {
          type: "drop",
          paths: l.payload.paths,
          position: new Z(l.payload.position)
        }
      });
    }), r = await this.listen($.DRAG_LEAVE, (l) => {
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
    const n = await this.listen($.WINDOW_FOCUS, (a) => {
      t({ ...a, payload: !0 });
    }), s = await this.listen($.WINDOW_BLUR, (a) => {
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
    return this.listen($.WINDOW_SCALE_FACTOR_CHANGED, t);
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
    return this.listen($.WINDOW_THEME_CHANGED, t);
  }
}
var rn;
(function(e) {
  e.Disabled = "disabled", e.Throttle = "throttle", e.Suspend = "suspend";
})(rn || (rn = {}));
var ln;
(function(e) {
  e.AppearanceBased = "appearanceBased", e.Light = "light", e.Dark = "dark", e.MediumLight = "mediumLight", e.UltraDark = "ultraDark", e.Titlebar = "titlebar", e.Selection = "selection", e.Menu = "menu", e.Popover = "popover", e.Sidebar = "sidebar", e.HeaderView = "headerView", e.Sheet = "sheet", e.WindowBackground = "windowBackground", e.HudWindow = "hudWindow", e.FullScreenUI = "fullScreenUI", e.Tooltip = "tooltip", e.ContentBackground = "contentBackground", e.UnderWindowBackground = "underWindowBackground", e.UnderPageBackground = "underPageBackground", e.Mica = "mica", e.Blur = "blur", e.Acrylic = "acrylic", e.Tabbed = "tabbed", e.TabbedDark = "tabbedDark", e.TabbedLight = "tabbedLight";
})(ln || (ln = {}));
var cn;
(function(e) {
  e.FollowsWindowActiveState = "followsWindowActiveState", e.Active = "active", e.Inactive = "inactive";
})(cn || (cn = {}));
function ho(e) {
  return e === null ? null : {
    name: e.name,
    scaleFactor: e.scaleFactor,
    position: new Z(e.position),
    size: new ce(e.size)
  };
}
async function po(e, t) {
  return u("plugin:window|monitor_from_point", {
    x: e,
    y: t
  }).then(ho);
}
var fo = {
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
function go() {
  return "icon-" + ((1 + Math.random()) * 4294967296 | 0).toString(16).substring(1);
}
function vo(e, t, n) {
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
var yo = Symbol("icon-context");
function Et(e, t, n) {
  var s = {
    name: "icon-" + e,
    props: ["size", "strokeWidth", "strokeLinecap", "strokeLinejoin", "theme", "fill", "spin"],
    setup: function(r) {
      var l = go(), h = ie(yo, fo);
      return function() {
        var p = r.size, g = r.strokeWidth, f = r.strokeLinecap, b = r.strokeLinejoin, I = r.theme, E = r.fill, B = r.spin, v = vo(l, {
          size: p,
          strokeWidth: g,
          strokeLinecap: f,
          strokeLinejoin: b,
          theme: I,
          fill: E
        }, h), _ = [h.prefix + "-icon"];
        return _.push(h.prefix + "-icon-" + e), B && _.push(h.prefix + "-icon-spin"), N("span", {
          class: _.join(" ")
        }, [n(v)]);
      };
    }
  };
  return s;
}
const wo = Et("close-small", !1, function(e) {
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
}), mo = Et("minus", !1, function(e) {
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
}), _o = Et("radar", !1, function(e) {
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
}), An = Symbol(), et = "el", bo = "is-", oe = (e, t, n, s, a) => {
  let r = `${e}-${t}`;
  return n && (r += `-${n}`), s && (r += `__${s}`), a && (r += `--${a}`), r;
}, Wn = Symbol("namespaceContextKey"), Co = (e) => {
  const t = e || (Ce() ? ie(Wn, x(et)) : x(et));
  return w(() => d(t) || et);
}, Nt = (e, t) => {
  const n = Co(t);
  return {
    namespace: n,
    b: (v = "") => oe(n.value, e, v, "", ""),
    e: (v) => v ? oe(n.value, e, "", v, "") : "",
    m: (v) => v ? oe(n.value, e, "", "", v) : "",
    be: (v, _) => v && _ ? oe(n.value, e, v, _, "") : "",
    em: (v, _) => v && _ ? oe(n.value, e, "", v, _) : "",
    bm: (v, _) => v && _ ? oe(n.value, e, v, "", _) : "",
    bem: (v, _, M) => v && _ && M ? oe(n.value, e, v, _, M) : "",
    is: (v, ..._) => {
      const M = _.length >= 1 ? _[0] : !0;
      return v && M ? `${bo}${v}` : "";
    },
    cssVar: (v) => {
      const _ = {};
      for (const M in v)
        v[M] && (_[`--${n.value}-${M}`] = v[M]);
      return _;
    },
    cssVarName: (v) => `--${n.value}-${v}`,
    cssVarBlock: (v) => {
      const _ = {};
      for (const M in v)
        v[M] && (_[`--${n.value}-${e}-${M}`] = v[M]);
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
const So = Object.prototype.hasOwnProperty, un = (e, t) => So.call(e, t), Be = (e) => typeof e == "function", ue = (e) => typeof e == "string", $n = (e) => e !== null && typeof e == "object";
var xo = typeof global == "object" && global && global.Object === Object && global, ko = typeof self == "object" && self && self.Object === Object && self, Pt = xo || ko || Function("return this")(), Oe = Pt.Symbol, Fn = Object.prototype, Oo = Fn.hasOwnProperty, Mo = Fn.toString, Re = Oe ? Oe.toStringTag : void 0;
function To(e) {
  var t = Oo.call(e, Re), n = e[Re];
  try {
    e[Re] = void 0;
    var s = !0;
  } catch {
  }
  var a = Mo.call(e);
  return s && (t ? e[Re] = n : delete e[Re]), a;
}
var Io = Object.prototype, Eo = Io.toString;
function No(e) {
  return Eo.call(e);
}
var Po = "[object Null]", zo = "[object Undefined]", dn = Oe ? Oe.toStringTag : void 0;
function jn(e) {
  return e == null ? e === void 0 ? zo : Po : dn && dn in Object(e) ? To(e) : No(e);
}
function Lo(e) {
  return e != null && typeof e == "object";
}
var Ro = "[object Symbol]";
function zt(e) {
  return typeof e == "symbol" || Lo(e) && jn(e) == Ro;
}
function Do(e, t) {
  for (var n = -1, s = e == null ? 0 : e.length, a = Array(s); ++n < s; )
    a[n] = t(e[n], n, e);
  return a;
}
var Lt = Array.isArray, hn = Oe ? Oe.prototype : void 0, pn = hn ? hn.toString : void 0;
function Bn(e) {
  if (typeof e == "string")
    return e;
  if (Lt(e))
    return Do(e, Bn) + "";
  if (zt(e))
    return pn ? pn.call(e) : "";
  var t = e + "";
  return t == "0" && 1 / e == -1 / 0 ? "-0" : t;
}
function Hn(e) {
  var t = typeof e;
  return e != null && (t == "object" || t == "function");
}
var Ao = "[object AsyncFunction]", Wo = "[object Function]", $o = "[object GeneratorFunction]", Fo = "[object Proxy]";
function jo(e) {
  if (!Hn(e))
    return !1;
  var t = jn(e);
  return t == Wo || t == $o || t == Ao || t == Fo;
}
var bt = Pt["__core-js_shared__"], fn = function() {
  var e = /[^.]+$/.exec(bt && bt.keys && bt.keys.IE_PROTO || "");
  return e ? "Symbol(src)_1." + e : "";
}();
function Bo(e) {
  return !!fn && fn in e;
}
var Ho = Function.prototype, Go = Ho.toString;
function Uo(e) {
  if (e != null) {
    try {
      return Go.call(e);
    } catch {
    }
    try {
      return e + "";
    } catch {
    }
  }
  return "";
}
var Vo = /[\\^$.*+?()[\]{}|]/g, qo = /^\[object .+?Constructor\]$/, Ko = Function.prototype, Zo = Object.prototype, Yo = Ko.toString, Jo = Zo.hasOwnProperty, Xo = RegExp(
  "^" + Yo.call(Jo).replace(Vo, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$"
);
function Qo(e) {
  if (!Hn(e) || Bo(e))
    return !1;
  var t = jo(e) ? Xo : qo;
  return t.test(Uo(e));
}
function ea(e, t) {
  return e?.[t];
}
function Gn(e, t) {
  var n = ea(e, t);
  return Qo(n) ? n : void 0;
}
function ta(e, t) {
  return e === t || e !== e && t !== t;
}
var na = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/, sa = /^\w*$/;
function oa(e, t) {
  if (Lt(e))
    return !1;
  var n = typeof e;
  return n == "number" || n == "symbol" || n == "boolean" || e == null || zt(e) ? !0 : sa.test(e) || !na.test(e) || t != null && e in Object(t);
}
var He = Gn(Object, "create");
function aa() {
  this.__data__ = He ? He(null) : {}, this.size = 0;
}
function ia(e) {
  var t = this.has(e) && delete this.__data__[e];
  return this.size -= t ? 1 : 0, t;
}
var ra = "__lodash_hash_undefined__", la = Object.prototype, ca = la.hasOwnProperty;
function ua(e) {
  var t = this.__data__;
  if (He) {
    var n = t[e];
    return n === ra ? void 0 : n;
  }
  return ca.call(t, e) ? t[e] : void 0;
}
var da = Object.prototype, ha = da.hasOwnProperty;
function pa(e) {
  var t = this.__data__;
  return He ? t[e] !== void 0 : ha.call(t, e);
}
var fa = "__lodash_hash_undefined__";
function ga(e, t) {
  var n = this.__data__;
  return this.size += this.has(e) ? 0 : 1, n[e] = He && t === void 0 ? fa : t, this;
}
function de(e) {
  var t = -1, n = e == null ? 0 : e.length;
  for (this.clear(); ++t < n; ) {
    var s = e[t];
    this.set(s[0], s[1]);
  }
}
de.prototype.clear = aa;
de.prototype.delete = ia;
de.prototype.get = ua;
de.prototype.has = pa;
de.prototype.set = ga;
function va() {
  this.__data__ = [], this.size = 0;
}
function ht(e, t) {
  for (var n = e.length; n--; )
    if (ta(e[n][0], t))
      return n;
  return -1;
}
var ya = Array.prototype, wa = ya.splice;
function ma(e) {
  var t = this.__data__, n = ht(t, e);
  if (n < 0)
    return !1;
  var s = t.length - 1;
  return n == s ? t.pop() : wa.call(t, n, 1), --this.size, !0;
}
function _a(e) {
  var t = this.__data__, n = ht(t, e);
  return n < 0 ? void 0 : t[n][1];
}
function ba(e) {
  return ht(this.__data__, e) > -1;
}
function Ca(e, t) {
  var n = this.__data__, s = ht(n, e);
  return s < 0 ? (++this.size, n.push([e, t])) : n[s][1] = t, this;
}
function Ie(e) {
  var t = -1, n = e == null ? 0 : e.length;
  for (this.clear(); ++t < n; ) {
    var s = e[t];
    this.set(s[0], s[1]);
  }
}
Ie.prototype.clear = va;
Ie.prototype.delete = ma;
Ie.prototype.get = _a;
Ie.prototype.has = ba;
Ie.prototype.set = Ca;
var Sa = Gn(Pt, "Map");
function xa() {
  this.size = 0, this.__data__ = {
    hash: new de(),
    map: new (Sa || Ie)(),
    string: new de()
  };
}
function ka(e) {
  var t = typeof e;
  return t == "string" || t == "number" || t == "symbol" || t == "boolean" ? e !== "__proto__" : e === null;
}
function pt(e, t) {
  var n = e.__data__;
  return ka(t) ? n[typeof t == "string" ? "string" : "hash"] : n.map;
}
function Oa(e) {
  var t = pt(this, e).delete(e);
  return this.size -= t ? 1 : 0, t;
}
function Ma(e) {
  return pt(this, e).get(e);
}
function Ta(e) {
  return pt(this, e).has(e);
}
function Ia(e, t) {
  var n = pt(this, e), s = n.size;
  return n.set(e, t), this.size += n.size == s ? 0 : 1, this;
}
function pe(e) {
  var t = -1, n = e == null ? 0 : e.length;
  for (this.clear(); ++t < n; ) {
    var s = e[t];
    this.set(s[0], s[1]);
  }
}
pe.prototype.clear = xa;
pe.prototype.delete = Oa;
pe.prototype.get = Ma;
pe.prototype.has = Ta;
pe.prototype.set = Ia;
var Ea = "Expected a function";
function Rt(e, t) {
  if (typeof e != "function" || t != null && typeof t != "function")
    throw new TypeError(Ea);
  var n = function() {
    var s = arguments, a = t ? t.apply(this, s) : s[0], r = n.cache;
    if (r.has(a))
      return r.get(a);
    var l = e.apply(this, s);
    return n.cache = r.set(a, l) || r, l;
  };
  return n.cache = new (Rt.Cache || pe)(), n;
}
Rt.Cache = pe;
var Na = 500;
function Pa(e) {
  var t = Rt(e, function(s) {
    return n.size === Na && n.clear(), s;
  }), n = t.cache;
  return t;
}
var za = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g, La = /\\(\\)?/g, Ra = Pa(function(e) {
  var t = [];
  return e.charCodeAt(0) === 46 && t.push(""), e.replace(za, function(n, s, a, r) {
    t.push(a ? r.replace(La, "$1") : s || n);
  }), t;
});
function Da(e) {
  return e == null ? "" : Bn(e);
}
function Aa(e, t) {
  return Lt(e) ? e : oa(e, t) ? [e] : Ra(Da(e));
}
function Wa(e) {
  if (typeof e == "string" || zt(e))
    return e;
  var t = e + "";
  return t == "0" && 1 / e == -1 / 0 ? "-0" : t;
}
function $a(e, t) {
  t = Aa(t, e);
  for (var n = 0, s = t.length; e != null && n < s; )
    e = e[Wa(t[n++])];
  return n && n == s ? e : void 0;
}
function Fa(e, t, n) {
  var s = e == null ? void 0 : $a(e, t);
  return s === void 0 ? n : s;
}
function ja(e) {
  for (var t = -1, n = e == null ? 0 : e.length, s = {}; ++t < n; ) {
    var a = e[t];
    s[a[0]] = a[1];
  }
  return s;
}
const Un = (e) => e === void 0, gn = (e) => typeof e == "boolean", he = (e) => typeof e == "number", Ot = (e) => typeof Element > "u" ? !1 : e instanceof Element, Ba = (e) => ue(e) ? !Number.isNaN(Number(e)) : !1;
var vn;
const fe = typeof window < "u", Ha = (e) => typeof e == "string", Ga = () => {
};
fe && ((vn = window?.navigator) != null && vn.userAgent) && /iP(ad|hone|od)/.test(window.navigator.userAgent);
function Dt(e) {
  return typeof e == "function" ? e() : d(e);
}
function Ua(e) {
  return e;
}
function At(e) {
  return Ks() ? (Zs(e), !0) : !1;
}
function Va(e, t = !0) {
  Ce() ? dt(e) : t ? e() : _e(e);
}
function Vn(e, t, n = {}) {
  const {
    immediate: s = !0
  } = n, a = x(!1);
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
    }, Dt(t));
  }
  return s && (a.value = !0, fe && p()), At(h), {
    isPending: qs(a),
    start: p,
    stop: h
  };
}
function qn(e) {
  var t;
  const n = Dt(e);
  return (t = n?.$el) != null ? t : n;
}
const Kn = fe ? window : void 0;
function Zn(...e) {
  let t, n, s, a;
  if (Ha(e[0]) || Array.isArray(e[0]) ? ([n, s, a] = e, t = Kn) : [t, n, s, a] = e, !t)
    return Ga;
  Array.isArray(n) || (n = [n]), Array.isArray(s) || (s = [s]);
  const r = [], l = () => {
    r.forEach((f) => f()), r.length = 0;
  }, h = (f, b, I, E) => (f.addEventListener(b, I, E), () => f.removeEventListener(b, I, E)), p = Se(() => [qn(t), Dt(a)], ([f, b]) => {
    l(), f && r.push(...n.flatMap((I) => s.map((E) => h(f, I, E, b))));
  }, { immediate: !0, flush: "post" }), g = () => {
    p(), l();
  };
  return At(g), g;
}
function qa(e, t = !1) {
  const n = x(), s = () => n.value = !!e();
  return s(), Va(s, t), n;
}
const yn = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {}, wn = "__vueuse_ssr_handlers__";
yn[wn] = yn[wn] || {};
var mn = Object.getOwnPropertySymbols, Ka = Object.prototype.hasOwnProperty, Za = Object.prototype.propertyIsEnumerable, Ya = (e, t) => {
  var n = {};
  for (var s in e)
    Ka.call(e, s) && t.indexOf(s) < 0 && (n[s] = e[s]);
  if (e != null && mn)
    for (var s of mn(e))
      t.indexOf(s) < 0 && Za.call(e, s) && (n[s] = e[s]);
  return n;
};
function Ja(e, t, n = {}) {
  const s = n, { window: a = Kn } = s, r = Ya(s, ["window"]);
  let l;
  const h = qa(() => a && "ResizeObserver" in a), p = () => {
    l && (l.disconnect(), l = void 0);
  }, g = Se(() => qn(e), (b) => {
    p(), h.value && a && b && (l = new ResizeObserver(t), l.observe(b, r));
  }, { immediate: !0, flush: "post" }), f = () => {
    p(), g();
  };
  return At(f), {
    isSupported: h,
    stop: f
  };
}
var _n;
(function(e) {
  e.UP = "UP", e.RIGHT = "RIGHT", e.DOWN = "DOWN", e.LEFT = "LEFT", e.NONE = "NONE";
})(_n || (_n = {}));
var Xa = Object.defineProperty, bn = Object.getOwnPropertySymbols, Qa = Object.prototype.hasOwnProperty, ei = Object.prototype.propertyIsEnumerable, Cn = (e, t, n) => t in e ? Xa(e, t, { enumerable: !0, configurable: !0, writable: !0, value: n }) : e[t] = n, ti = (e, t) => {
  for (var n in t || (t = {}))
    Qa.call(t, n) && Cn(e, n, t[n]);
  if (bn)
    for (var n of bn(t))
      ei.call(t, n) && Cn(e, n, t[n]);
  return e;
};
const ni = {
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
ti({
  linear: Ua
}, ni);
const Sn = {
  current: 0
}, xn = x(0), Yn = 2e3, kn = Symbol("elZIndexContextKey"), Jn = Symbol("zIndexContextKey"), si = (e) => {
  const t = Ce() ? ie(kn, Sn) : Sn, n = e || (Ce() ? ie(Jn, void 0) : void 0), s = w(() => {
    const l = d(n);
    return he(l) ? l : Yn;
  }), a = w(() => s.value + xn.value), r = () => (t.current++, xn.value = t.current, a.value);
  return !fe && ie(kn), {
    initialZIndex: s,
    currentZIndex: a,
    nextZIndex: r
  };
};
var oi = {
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
const ai = (e) => (t, n) => ii(t, n, d(e)), ii = (e, t, n) => Fa(n, e, e).replace(/\{(\w+)\}/g, (s, a) => {
  var r;
  return `${(r = t?.[a]) != null ? r : `{${a}}`}`;
}), ri = (e) => {
  const t = w(() => d(e).name), n = Ys(e) ? e : x(e);
  return {
    lang: t,
    locale: n,
    t: ai(e)
  };
}, Xn = Symbol("localeContextKey"), li = (e) => {
  const t = e || ie(Xn, x());
  return ri(w(() => t.value || oi));
}, Qn = "__epPropKey", F = (e) => e, ci = (e) => $n(e) && !!e[Qn], es = (e, t) => {
  if (!$n(e) || ci(e))
    return e;
  const { values: n, required: s, default: a, type: r, validator: l } = e, p = {
    type: r,
    required: !!s,
    validator: n || l ? (g) => {
      let f = !1, b = [];
      if (n && (b = Array.from(n), un(e, "default") && b.push(a), f || (f = b.includes(g))), l && (f || (f = l(g))), !f && b.length > 0) {
        const I = [...new Set(b)].map((E) => JSON.stringify(E)).join(", ");
        Js(`Invalid prop: validation failed${t ? ` for prop "${t}"` : ""}. Expected one of [${I}], got value ${JSON.stringify(g)}.`);
      }
      return f;
    } : void 0,
    [Qn]: !0
  };
  return un(e, "default") && (p.default = a), p;
}, Ee = (e) => ja(Object.entries(e).map(([t, n]) => [
  t,
  es(n, t)
])), ui = ["", "default", "small", "large"], di = es({
  type: String,
  values: ui,
  required: !1
}), hi = Symbol("size"), pi = Symbol("emptyValuesContextKey"), fi = Ee({
  emptyValues: Array,
  valueOnClear: {
    type: [String, Number, Boolean, Function],
    default: void 0,
    validator: (e) => Be(e) ? !e() : !e
  }
}), On = (e) => Object.keys(e), rt = x();
function ts(e, t = void 0) {
  return Ce() ? ie(An, rt) : rt;
}
function ns(e, t) {
  const n = ts(), s = Nt(e, w(() => {
    var h;
    return ((h = n.value) == null ? void 0 : h.namespace) || et;
  })), a = li(w(() => {
    var h;
    return (h = n.value) == null ? void 0 : h.locale;
  })), r = si(w(() => {
    var h;
    return ((h = n.value) == null ? void 0 : h.zIndex) || Yn;
  })), l = w(() => {
    var h;
    return d(t) || ((h = n.value) == null ? void 0 : h.size) || "";
  });
  return ss(w(() => d(n) || {})), {
    ns: s,
    locale: a,
    zIndex: r,
    size: l
  };
}
const ss = (e, t, n = !1) => {
  var s;
  const a = !!Ce(), r = a ? ts() : void 0, l = (s = void 0) != null ? s : a ? Xs : void 0;
  if (!l)
    return;
  const h = w(() => {
    const p = d(e);
    return r?.value ? gi(r.value, p) : p;
  });
  return l(An, h), l(Xn, w(() => h.value.locale)), l(Wn, w(() => h.value.namespace)), l(Jn, w(() => h.value.zIndex)), l(hi, {
    size: w(() => h.value.size || "")
  }), l(pi, w(() => ({
    emptyValues: h.value.emptyValues,
    valueOnClear: h.value.valueOnClear
  }))), (n || !rt.value) && (rt.value = h.value), h;
}, gi = (e, t) => {
  const n = [.../* @__PURE__ */ new Set([...On(e), ...On(t)])], s = {};
  for (const a of n)
    s[a] = t[a] !== void 0 ? t[a] : e[a];
  return s;
};
var ft = (e, t) => {
  const n = e.__vccOpts || e;
  for (const [s, a] of t)
    n[s] = a;
  return n;
};
function Mt(e, t = "px") {
  if (!e)
    return "";
  if (he(e) || Ba(e))
    return `${e}${t}`;
  if (ue(e))
    return e;
}
const os = (e, t) => (e.install = (n) => {
  for (const s of [e, ...Object.values({})])
    n.component(s.name, s);
}, e), as = (e, t) => (e.install = (n) => {
  e._context = n._context, n.config.globalProperties[t] = e;
}, e), vi = Ee({
  size: {
    type: F([Number, String])
  },
  color: {
    type: String
  }
}), yi = W({
  name: "ElIcon",
  inheritAttrs: !1
}), wi = /* @__PURE__ */ W({
  ...yi,
  props: vi,
  setup(e) {
    const t = e, n = Nt("icon"), s = w(() => {
      const { size: a, color: r } = t;
      return !a && !r ? {} : {
        fontSize: Un(a) ? void 0 : Mt(a),
        "--color": r
      };
    });
    return (a, r) => (O(), P("i", Qs({
      class: d(n).b(),
      style: d(s)
    }, a.$attrs), [
      xe(a.$slots, "default")
    ], 16));
  }
});
var mi = /* @__PURE__ */ ft(wi, [["__file", "icon.vue"]]);
const lt = os(mi);
/*! Element Plus Icons Vue v2.3.1 */
var _i = /* @__PURE__ */ W({
  name: "CircleCloseFilled",
  __name: "circle-close-filled",
  setup(e) {
    return (t, n) => (O(), P("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 1024 1024"
    }, [
      c("path", {
        fill: "currentColor",
        d: "M512 64a448 448 0 1 1 0 896 448 448 0 0 1 0-896m0 393.664L407.936 353.6a38.4 38.4 0 1 0-54.336 54.336L457.664 512 353.6 616.064a38.4 38.4 0 1 0 54.336 54.336L512 566.336 616.064 670.4a38.4 38.4 0 1 0 54.336-54.336L566.336 512 670.4 407.936a38.4 38.4 0 1 0-54.336-54.336z"
      })
    ]));
  }
}), bi = _i, Ci = /* @__PURE__ */ W({
  name: "Close",
  __name: "close",
  setup(e) {
    return (t, n) => (O(), P("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 1024 1024"
    }, [
      c("path", {
        fill: "currentColor",
        d: "M764.288 214.592 512 466.88 259.712 214.592a31.936 31.936 0 0 0-45.12 45.12L466.752 512 214.528 764.224a31.936 31.936 0 1 0 45.12 45.184L512 557.184l252.288 252.288a31.936 31.936 0 0 0 45.12-45.12L557.12 512.064l252.288-252.352a31.936 31.936 0 1 0-45.12-45.184z"
      })
    ]));
  }
}), is = Ci, Si = /* @__PURE__ */ W({
  name: "InfoFilled",
  __name: "info-filled",
  setup(e) {
    return (t, n) => (O(), P("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 1024 1024"
    }, [
      c("path", {
        fill: "currentColor",
        d: "M512 64a448 448 0 1 1 0 896.064A448 448 0 0 1 512 64m67.2 275.072c33.28 0 60.288-23.104 60.288-57.344s-27.072-57.344-60.288-57.344c-33.28 0-60.16 23.104-60.16 57.344s26.88 57.344 60.16 57.344M590.912 699.2c0-6.848 2.368-24.64 1.024-34.752l-52.608 60.544c-10.88 11.456-24.512 19.392-30.912 17.28a12.992 12.992 0 0 1-8.256-14.72l87.68-276.992c7.168-35.136-12.544-67.2-54.336-71.296-44.096 0-108.992 44.736-148.48 101.504 0 6.784-1.28 23.68.064 33.792l52.544-60.608c10.88-11.328 23.552-19.328 29.952-17.152a12.8 12.8 0 0 1 7.808 16.128L388.48 728.576c-10.048 32.256 8.96 63.872 55.04 71.04 67.84 0 107.904-43.648 147.456-100.416z"
      })
    ]));
  }
}), xi = Si, ki = /* @__PURE__ */ W({
  name: "SuccessFilled",
  __name: "success-filled",
  setup(e) {
    return (t, n) => (O(), P("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 1024 1024"
    }, [
      c("path", {
        fill: "currentColor",
        d: "M512 64a448 448 0 1 1 0 896 448 448 0 0 1 0-896m-55.808 536.384-99.52-99.584a38.4 38.4 0 1 0-54.336 54.336l126.72 126.72a38.272 38.272 0 0 0 54.336 0l262.4-262.464a38.4 38.4 0 1 0-54.272-54.336z"
      })
    ]));
  }
}), Oi = ki, Mi = /* @__PURE__ */ W({
  name: "WarningFilled",
  __name: "warning-filled",
  setup(e) {
    return (t, n) => (O(), P("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 1024 1024"
    }, [
      c("path", {
        fill: "currentColor",
        d: "M512 64a448 448 0 1 1 0 896 448 448 0 0 1 0-896m0 192a58.432 58.432 0 0 0-58.24 63.744l23.36 256.384a35.072 35.072 0 0 0 69.76 0l23.296-256.384A58.432 58.432 0 0 0 512 256m0 512a51.2 51.2 0 1 0 0-102.4 51.2 51.2 0 0 0 0 102.4"
      })
    ]));
  }
}), Ti = Mi;
const rs = F([
  String,
  Object,
  Function
]), Ii = {
  Close: is
}, Ei = {
  Close: is
}, ct = {
  success: Oi,
  warning: Ti,
  error: bi,
  info: xi
}, Ni = (e) => e, tt = {
  esc: "Escape",
  delete: "Delete",
  backspace: "Backspace"
}, Pi = Ee({
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
    type: F([String, Object, Array])
  },
  offset: {
    type: F(Array),
    default: [0, 0]
  },
  badgeClass: {
    type: String
  }
}), zi = W({
  name: "ElBadge"
}), Li = /* @__PURE__ */ W({
  ...zi,
  props: Pi,
  setup(e, { expose: t }) {
    const n = e, s = Nt("badge"), a = w(() => n.isDot ? "" : he(n.value) && he(n.max) ? n.max < n.value ? `${n.max}+` : `${n.value}` : `${n.value}`), r = w(() => {
      var l, h, p, g, f;
      return [
        {
          backgroundColor: n.color,
          marginRight: Mt(-((h = (l = n.offset) == null ? void 0 : l[0]) != null ? h : 0)),
          marginTop: Mt((g = (p = n.offset) == null ? void 0 : p[1]) != null ? g : 0)
        },
        (f = n.badgeStyle) != null ? f : {}
      ];
    });
    return t({
      content: a
    }), (l, h) => (O(), P("div", {
      class: L(d(s).b())
    }, [
      xe(l.$slots, "default"),
      N(It, {
        name: `${d(s).namespace.value}-zoom-in-center`,
        persisted: ""
      }, {
        default: re(() => [
          le(c("sup", {
            class: L([
              d(s).e("content"),
              d(s).em("content", l.type),
              d(s).is("fixed", !!l.$slots.default),
              d(s).is("dot", l.isDot),
              d(s).is("hide-zero", !l.showZero && n.value === 0),
              l.badgeClass
            ]),
            style: ke(d(r))
          }, [
            xe(l.$slots, "content", { value: d(a) }, () => [
              eo(A(d(a)), 1)
            ])
          ], 6), [
            [st, !l.hidden && (d(a) || l.isDot || l.$slots.content)]
          ])
        ]),
        _: 3
      }, 8, ["name"])
    ], 2));
  }
});
var Ri = /* @__PURE__ */ ft(Li, [["__file", "badge.vue"]]);
const Di = os(Ri), Ai = Ee({
  a11y: {
    type: Boolean,
    default: !0
  },
  locale: {
    type: F(Object)
  },
  size: di,
  button: {
    type: F(Object)
  },
  experimentalFeatures: {
    type: F(Object)
  },
  keyboardNavigation: {
    type: Boolean,
    default: !0
  },
  message: {
    type: F(Object)
  },
  zIndex: Number,
  namespace: {
    type: String,
    default: "el"
  },
  ...fi
}), q = {};
W({
  name: "ElConfigProvider",
  props: Ai,
  setup(e, { slots: t }) {
    Se(() => e.message, (s) => {
      Object.assign(q, s ?? {});
    }, { immediate: !0, deep: !0 });
    const n = ss(e);
    return () => xe(t, "default", { config: n?.value });
  }
});
const ls = ["success", "info", "warning", "error"], D = Ni({
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
}), Wi = Ee({
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
    type: rs,
    default: D.icon
  },
  id: {
    type: String,
    default: D.id
  },
  message: {
    type: F([
      String,
      Object,
      Function
    ]),
    default: D.message
  },
  onClose: {
    type: F(Function),
    default: D.onClose
  },
  showClose: {
    type: Boolean,
    default: D.showClose
  },
  type: {
    type: String,
    values: ls,
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
}, K = to([]), Fi = (e) => {
  const t = K.findIndex((a) => a.id === e), n = K[t];
  let s;
  return t > 0 && (s = K[t - 1]), { current: n, prev: s };
}, ji = (e) => {
  const { prev: t } = Fi(e);
  return t ? t.vm.exposed.bottom.value : 0;
}, Bi = (e, t) => K.findIndex((s) => s.id === e) > 0 ? 16 : t, Hi = W({
  name: "ElMessage"
}), Gi = /* @__PURE__ */ W({
  ...Hi,
  props: Wi,
  emits: $i,
  setup(e, { expose: t }) {
    const n = e, { Close: s } = Ei, { ns: a, zIndex: r } = ns("message"), { currentZIndex: l, nextZIndex: h } = r, p = x(), g = x(!1), f = x(0);
    let b;
    const I = w(() => n.type ? n.type === "error" ? "danger" : n.type : "info"), E = w(() => {
      const C = n.type;
      return { [a.bm("icon", C)]: C && ct[C] };
    }), B = w(() => n.icon || ct[n.type] || ""), v = w(() => ji(n.id)), _ = w(() => Bi(n.id, n.offset) + v.value), M = w(() => f.value + _.value), Y = w(() => ({
      top: `${_.value}px`,
      zIndex: l.value
    }));
    function S() {
      n.duration !== 0 && ({ stop: b } = Vn(() => {
        k();
      }, n.duration));
    }
    function T() {
      b?.();
    }
    function k() {
      g.value = !1;
    }
    function H({ code: C }) {
      C === tt.esc && k();
    }
    return dt(() => {
      S(), h(), g.value = !0;
    }), Se(() => n.repeatNum, () => {
      T(), S();
    }), Zn(document, "keydown", H), Ja(p, () => {
      f.value = p.value.getBoundingClientRect().height;
    }), t({
      visible: g,
      bottom: M,
      close: k
    }), (C, Wt) => (O(), J(It, {
      name: d(a).b("fade"),
      onBeforeLeave: C.onClose,
      onAfterLeave: ($t) => C.$emit("destroy"),
      persisted: ""
    }, {
      default: re(() => [
        le(c("div", {
          id: C.id,
          ref_key: "messageRef",
          ref: p,
          class: L([
            d(a).b(),
            { [d(a).m(C.type)]: C.type },
            d(a).is("center", C.center),
            d(a).is("closable", C.showClose),
            d(a).is("plain", C.plain),
            C.customClass
          ]),
          style: ke(d(Y)),
          role: "alert",
          onMouseenter: T,
          onMouseleave: S
        }, [
          C.repeatNum > 1 ? (O(), J(d(Di), {
            key: 0,
            value: C.repeatNum,
            type: d(I),
            class: L(d(a).e("badge"))
          }, null, 8, ["value", "type", "class"])) : X("v-if", !0),
          d(B) ? (O(), J(d(lt), {
            key: 1,
            class: L([d(a).e("icon"), d(E)])
          }, {
            default: re(() => [
              (O(), J(Nn(d(B))))
            ]),
            _: 1
          }, 8, ["class"])) : X("v-if", !0),
          xe(C.$slots, "default", {}, () => [
            C.dangerouslyUseHTMLString ? (O(), P(be, { key: 1 }, [
              X(" Caution here, message could've been compromised, never use user's input as message "),
              c("p", {
                class: L(d(a).e("content")),
                innerHTML: C.message
              }, null, 10, ["innerHTML"])
            ], 2112)) : (O(), P("p", {
              key: 0,
              class: L(d(a).e("content"))
            }, A(C.message), 3))
          ]),
          C.showClose ? (O(), J(d(lt), {
            key: 2,
            class: L(d(a).e("closeBtn")),
            onClick: $e(k, ["stop"])
          }, {
            default: re(() => [
              N(d(s))
            ]),
            _: 1
          }, 8, ["class", "onClick"])) : X("v-if", !0)
        ], 46, ["id"]), [
          [st, g.value]
        ])
      ]),
      _: 3
    }, 8, ["name", "onBeforeLeave", "onAfterLeave"]));
  }
});
var Ui = /* @__PURE__ */ ft(Gi, [["__file", "message.vue"]]);
let Vi = 1;
const cs = (e) => {
  const t = !e || ue(e) || je(e) || Be(e) ? { message: e } : e, n = {
    ...D,
    ...t
  };
  if (!n.appendTo)
    n.appendTo = document.body;
  else if (ue(n.appendTo)) {
    let s = document.querySelector(n.appendTo);
    Ot(s) || (s = document.body), n.appendTo = s;
  }
  return gn(q.grouping) && !n.grouping && (n.grouping = q.grouping), he(q.duration) && n.duration === 3e3 && (n.duration = q.duration), he(q.offset) && n.offset === 16 && (n.offset = q.offset), gn(q.showClose) && !n.showClose && (n.showClose = q.showClose), n;
}, qi = (e) => {
  const t = K.indexOf(e);
  if (t === -1)
    return;
  K.splice(t, 1);
  const { handler: n } = e;
  n.close();
}, Ki = ({ appendTo: e, ...t }, n) => {
  const s = `message_${Vi++}`, a = t.onClose, r = document.createElement("div"), l = {
    ...t,
    id: s,
    onClose: () => {
      a?.(), qi(f);
    },
    onDestroy: () => {
      ot(null, r);
    }
  }, h = N(Ui, l, Be(l.message) || je(l.message) ? {
    default: Be(l.message) ? l.message : () => l.message
  } : null);
  h.appContext = n || Me._context, ot(h, r), e.appendChild(r.firstElementChild);
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
}, Me = (e = {}, t) => {
  if (!fe)
    return { close: () => {
    } };
  const n = cs(e);
  if (n.grouping && K.length) {
    const a = K.find(({ vnode: r }) => {
      var l;
      return ((l = r.props) == null ? void 0 : l.message) === n.message;
    });
    if (a)
      return a.props.repeatNum += 1, a.props.type = n.type, a.handler;
  }
  if (he(q.max) && K.length >= q.max)
    return { close: () => {
    } };
  const s = Ki(n, t);
  return K.push(s), s.handler;
};
ls.forEach((e) => {
  Me[e] = (t = {}, n) => {
    const s = cs(t);
    return Me({ ...s, type: e }, n);
  };
});
function Zi(e) {
  for (const t of K)
    (!e || e === t.props.type) && t.handler.close();
}
Me.closeAll = Zi;
Me._context = null;
const Yi = as(Me, "$message"), us = [
  "success",
  "info",
  "warning",
  "error"
], Ji = Ee({
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
    type: rs
  },
  id: {
    type: String,
    default: ""
  },
  message: {
    type: F([
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
    type: F(Function),
    default: () => {
    }
  },
  onClose: {
    type: F(Function),
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
    values: [...us, ""],
    default: ""
  },
  zIndex: Number
}), Xi = {
  destroy: () => !0
}, Qi = W({
  name: "ElNotification"
}), er = /* @__PURE__ */ W({
  ...Qi,
  props: Ji,
  emits: Xi,
  setup(e, { expose: t }) {
    const n = e, { ns: s, zIndex: a } = ns("notification"), { nextZIndex: r, currentZIndex: l } = a, { Close: h } = Ii, p = x(!1);
    let g;
    const f = w(() => {
      const S = n.type;
      return S && ct[n.type] ? s.m(S) : "";
    }), b = w(() => n.type && ct[n.type] || n.icon), I = w(() => n.position.endsWith("right") ? "right" : "left"), E = w(() => n.position.startsWith("top") ? "top" : "bottom"), B = w(() => {
      var S;
      return {
        [E.value]: `${n.offset}px`,
        zIndex: (S = n.zIndex) != null ? S : l.value
      };
    });
    function v() {
      n.duration > 0 && ({ stop: g } = Vn(() => {
        p.value && M();
      }, n.duration));
    }
    function _() {
      g?.();
    }
    function M() {
      p.value = !1;
    }
    function Y({ code: S }) {
      S === tt.delete || S === tt.backspace ? _() : S === tt.esc ? p.value && M() : v();
    }
    return dt(() => {
      v(), r(), p.value = !0;
    }), Zn(document, "keydown", Y), t({
      visible: p,
      close: M
    }), (S, T) => (O(), J(It, {
      name: d(s).b("fade"),
      onBeforeLeave: S.onClose,
      onAfterLeave: (k) => S.$emit("destroy"),
      persisted: ""
    }, {
      default: re(() => [
        le(c("div", {
          id: S.id,
          class: L([d(s).b(), S.customClass, d(I)]),
          style: ke(d(B)),
          role: "alert",
          onMouseenter: _,
          onMouseleave: v,
          onClick: S.onClick
        }, [
          d(b) ? (O(), J(d(lt), {
            key: 0,
            class: L([d(s).e("icon"), d(f)])
          }, {
            default: re(() => [
              (O(), J(Nn(d(b))))
            ]),
            _: 1
          }, 8, ["class"])) : X("v-if", !0),
          c("div", {
            class: L(d(s).e("group"))
          }, [
            c("h2", {
              class: L(d(s).e("title")),
              textContent: A(S.title)
            }, null, 10, ["textContent"]),
            le(c("div", {
              class: L(d(s).e("content")),
              style: ke(S.title ? void 0 : { margin: 0 })
            }, [
              xe(S.$slots, "default", {}, () => [
                S.dangerouslyUseHTMLString ? (O(), P(be, { key: 1 }, [
                  X(" Caution here, message could've been compromised, never use user's input as message "),
                  c("p", { innerHTML: S.message }, null, 8, ["innerHTML"])
                ], 2112)) : (O(), P("p", { key: 0 }, A(S.message), 1))
              ])
            ], 6), [
              [st, S.message]
            ]),
            S.showClose ? (O(), J(d(lt), {
              key: 0,
              class: L(d(s).e("closeBtn")),
              onClick: $e(M, ["stop"])
            }, {
              default: re(() => [
                N(d(h))
              ]),
              _: 1
            }, 8, ["class", "onClick"])) : X("v-if", !0)
          ], 2)
        ], 46, ["id", "onClick"]), [
          [st, p.value]
        ])
      ]),
      _: 3
    }, 8, ["name", "onBeforeLeave", "onAfterLeave"]));
  }
});
var tr = /* @__PURE__ */ ft(er, [["__file", "notification.vue"]]);
const ut = {
  "top-left": [],
  "top-right": [],
  "bottom-left": [],
  "bottom-right": []
}, Tt = 16;
let nr = 1;
const Te = function(e = {}, t) {
  if (!fe)
    return { close: () => {
    } };
  (ue(e) || je(e)) && (e = { message: e });
  const n = e.position || "top-right";
  let s = e.offset || 0;
  ut[n].forEach(({ vm: f }) => {
    var b;
    s += (((b = f.el) == null ? void 0 : b.offsetHeight) || 0) + Tt;
  }), s += Tt;
  const a = `notification_${nr++}`, r = e.onClose, l = {
    ...e,
    offset: s,
    id: a,
    onClose: () => {
      sr(a, n, r);
    }
  };
  let h = document.body;
  Ot(e.appendTo) ? h = e.appendTo : ue(e.appendTo) && (h = document.querySelector(e.appendTo)), Ot(h) || (h = document.body);
  const p = document.createElement("div"), g = N(tr, l, Be(l.message) ? l.message : je(l.message) ? () => l.message : null);
  return g.appContext = Un(t) ? Te._context : t, g.props.onDestroy = () => {
    ot(null, p);
  }, ot(g, p), ut[n].push({ vm: g }), h.appendChild(p.firstElementChild), {
    close: () => {
      g.component.exposed.visible.value = !1;
    }
  };
};
us.forEach((e) => {
  Te[e] = (t = {}, n) => ((ue(t) || je(t)) && (t = {
    message: t
  }), Te({ ...t, type: e }, n));
});
function sr(e, t, n) {
  const s = ut[t], a = s.findIndex(({ vm: g }) => {
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
function or() {
  for (const e of Object.values(ut))
    e.forEach(({ vm: t }) => {
      t.component.exposed.visible.value = !1;
    });
}
Te.closeAll = or;
Te._context = null;
const ar = as(Te, "$notify"), Ct = {
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
    s === "center" ? Yi({
      message: t,
      type: n,
      duration: a,
      showClose: r,
      grouping: !0,
      customClass: `app-toast app-toast--${n}`
    }) : ar({
      message: t,
      type: n,
      position: s,
      duration: a,
      showClose: !1,
      // 角落通知统一不显示关闭按钮，更简洁
      title: "",
      offset: 50,
      // 距离顶部/底部 50px，避免遮挡窗口控制按钮
      customClass: `app-toast app-toast--corner app-toast--${n}`
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
}, ir = "snippets-code:developer-mode", ds = "snippets-code:frontend-diagnostics", rr = 240, De = "[REDACTED]", nt = (e) => e.replace(
  /("(?:[^"]*(?:token|password|secret|authorization)[^"]*)"\s*:\s*)("(?:\\.|[^"])*"|[^,\r\n}\]]+)/gi,
  `$1"${De}"`
).replace(/\bBearer\s+[A-Za-z0-9._~+/=-]+/gi, `Bearer ${De}`).replace(
  /\b(?:gh[pousr]_[A-Za-z0-9_]{12,}|github_pat_[A-Za-z0-9_]{12,})\b/g,
  De
).replace(/(https?:\/\/)[^/\s@]+@/gi, `$1${De}@`).replace(
  /([?&][^=&\s]*(?:token|password|secret|authorization)[^=&\s]*=)[^&\s]+/gi,
  `$1${De}`
), hs = (e) => {
  if (e === void 0) return;
  if (typeof e == "string") return nt(e);
  const t = /* @__PURE__ */ new WeakSet();
  try {
    return nt(
      JSON.stringify(
        e,
        (n, s) => {
          if (s instanceof Error)
            return {
              name: s.name,
              message: s.message,
              stack: s.stack,
              cause: s.cause
            };
          if (typeof s == "bigint") return s.toString();
          if (typeof s == "object" && s !== null) {
            if (t.has(s)) return "[Circular]";
            t.add(s);
          }
          return s;
        },
        2
      )
    );
  } catch {
    return nt(String(e));
  }
}, lr = () => {
  try {
    return globalThis.__TAURI_INTERNALS__?.metadata?.currentWindow?.label ?? "webview";
  } catch {
    return "webview";
  }
}, cr = () => {
  if (typeof localStorage > "u") return [];
  try {
    const e = JSON.parse(localStorage.getItem(ds) || "[]");
    return Array.isArray(e) ? e : [];
  } catch {
    return [];
  }
}, ps = () => {
  if (typeof localStorage > "u") return !1;
  try {
    return localStorage.getItem(ir) === "true";
  } catch {
    return !1;
  }
}, ur = (e, t, n) => {
  if (!ps() && e !== "warn" && e !== "error" || typeof localStorage > "u") return;
  const s = cr();
  s.push({
    timestamp: (/* @__PURE__ */ new Date()).toISOString(),
    level: e,
    windowLabel: lr(),
    message: nt(t),
    data: hs(n)
  });
  try {
    localStorage.setItem(
      ds,
      JSON.stringify(s.slice(-rr))
    );
  } catch {
  }
}, dr = () => ps(), Ye = (e, t, n) => {
  ur(e, t, n), u("frontend_log", {
    level: e,
    message: t,
    data: n === void 0 ? null : hs(n)
  }).catch(() => {
  });
}, Ae = {
  info: (e, t, ...n) => {
    Ye("info", e, t);
  },
  error: (e, t) => {
    Ye("error", e, t);
  },
  warn: (e, t) => {
    Ye("warn", e, t);
  },
  debug: (e, t) => {
    dr() && Ye("debug", e, t);
  }
}, hr = "[screen-recorder]", j = async (e, t) => {
  const n = performance.now();
  try {
    return await u(e, t);
  } catch (s) {
    throw console.error(`${hr} invoke:error ${e}`, {
      elapsedMs: Math.round(performance.now() - n),
      error: s
    }), s;
  }
}, pr = () => j("screen_recorder_get_ffmpeg_status"), we = (e) => j("screen_recorder_set_capture_excluded", { excluded: e }), Je = (e) => j("screen_recorder_set_passthrough_region", { region: e }), Xe = (e) => j("screen_recorder_set_overlay_window_region", { region: e }), fr = () => j("screen_recorder_pick_target_window"), gr = () => j("screen_recorder_close_window"), vr = (e, t) => j("screen_recorder_start_recording", {
  region: e,
  fps: t.fps,
  quality: t.quality,
  audio: t.format === "mp4"
}), yr = () => j("screen_recorder_pause_recording"), wr = (e, t) => j("screen_recorder_resume_recording", {
  region: e,
  fps: t.fps,
  quality: t.quality,
  audio: t.format === "mp4"
}), mr = () => j("screen_recorder_stop_recording"), _r = () => j("screen_recorder_cancel_recording"), br = () => j("screen_recorder_cancel_export"), Cr = (e, t) => j("screen_recorder_export_recording", {
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
});
function Sr() {
  const e = x("selecting"), t = x(Mn()), n = x(null), s = x(null), a = x(""), r = x(null), l = x(0), h = x(0), p = x(null), g = () => {
    h.value = e.value === "recording" && r.value !== null ? l.value + Date.now() - r.value : l.value;
  }, f = () => {
    p.value !== null && (window.clearInterval(p.value), p.value = null);
  }, b = () => {
    f(), g(), p.value = window.setInterval(() => {
      g();
    }, 250);
  }, I = async () => (n.value = await pr(), n.value), E = async (k) => {
    a.value = "", s.value = null;
    const H = n.value ?? await I();
    if (!H.available)
      throw new Error(H.message || "FFmpeg unavailable");
    await vr(k, t.value), e.value = "recording", l.value = 0, h.value = 0, r.value = Date.now(), b();
  }, B = async () => {
    e.value === "recording" && (g(), l.value = h.value, r.value = null, f(), await yr(), e.value = "paused");
  }, v = async (k) => {
    e.value === "paused" && (await wr(k, t.value), e.value = "recording", r.value = Date.now(), b());
  }, _ = async () => {
    e.value !== "recording" && e.value !== "paused" || (g(), l.value = h.value, r.value = null, f(), await mr(), e.value = "exporting");
  }, M = async () => {
    e.value = "exporting";
    try {
      return s.value = await Cr(t.value, Math.round(h.value)), e.value = "completed", s.value;
    } catch (k) {
      throw e.value = "ready", s.value = null, k;
    }
  }, Y = async () => {
    await br(), e.value = "ready", s.value = null;
  }, S = async () => {
    f(), await _r(), e.value = "selecting", r.value = null, l.value = 0, h.value = 0, s.value = null;
  }, T = () => {
    e.value = "selecting", r.value = null, l.value = 0, h.value = 0, s.value = null, a.value = "", t.value = Mn();
  };
  return Pn(() => {
    f();
  }), {
    status: e,
    settings: t,
    ffmpegStatus: n,
    result: s,
    errorMessage: a,
    elapsedMs: h,
    refreshFfmpegStatus: I,
    begin: E,
    pause: B,
    resume: v,
    stop: _,
    exportFile: M,
    cancelExport: Y,
    cancel: S,
    reset: T
  };
}
const xr = { class: "screen-recorder" }, kr = ["onMousedown"], Or = { class: "window-title" }, Mr = { class: "capture-viewport" }, Tr = { class: "capture-frame" }, Ir = { class: "control-group control-group--tools" }, Er = { class: "tool-pill" }, Nr = ["title", "disabled"], Pr = { class: "select-field" }, zr = ["disabled"], Lr = ["disabled"], Rr = ["disabled"], Dr = { value: "high" }, Ar = { value: "standard" }, Wr = { value: "small" }, $r = { class: "dimension-group optional-size" }, Fr = { class: "dimension" }, jr = ["value"], Br = { class: "dimension" }, Hr = ["value"], Gr = { class: "control-group control-group--actions" }, Ur = { class: "time" }, Vr = { class: "button-label" }, qr = { class: "button-label" }, Kr = ["title"], Zr = { class: "export-progress__meta" }, Yr = { class: "export-progress__track" }, Jr = ["title"], Xr = ["disabled"], Qr = { class: "record-label" }, el = {
  key: 0,
  class: "warning"
}, te = "[screen-recorder]", me = 80, St = 420, We = 260, xt = 260, Tn = 140, tl = 3, In = 2, En = 0, nl = 15, sl = 10, ol = 2, al = /* @__PURE__ */ W({
  __name: "index",
  setup(e) {
    const t = Rn(), n = x(null), s = x(null), a = x(null), r = x({ width: 0, height: 0 }), l = x(!1), h = x(!1), p = x(0), g = x(!1), f = x(null);
    let b = null, I = null, E = null, B = null, v = null, _ = null, M = null, Y = null;
    const S = [
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
      ffmpegStatus: H,
      result: C,
      elapsedMs: Wt,
      refreshFfmpegStatus: $t,
      begin: fs,
      pause: gs,
      resume: vs,
      stop: ys,
      exportFile: ws,
      cancelExport: Ft,
      cancel: ms,
      reset: _s
    } = Sr(), jt = x(!1), Ne = w(() => T.value === "recording" || T.value === "paused" || T.value === "exporting"), gt = w(() => k.value.audio && k.value.format === "mp4"), Pe = w(() => gt.value && T.value === "recording"), bs = w(() => {
      const o = Pe.value && !g.value ? p.value : 0, i = (y, m) => Math.max(0.18, Math.min(1, y + o * m)).toFixed(3);
      return {
        "--bar-1": i(0.28, 0.64),
        "--bar-2": i(0.42, 0.78),
        "--bar-3": i(0.34, 0.94),
        "--bar-4": i(0.22, 0.72)
      };
    }), Cs = w(() => {
      if (k.value.format === "gif")
        return "GIF 不支持音频";
      if (g.value && k.value.audio)
        return "音频已开启；实时音量动画不可用不影响导出系统声音";
      if (C.value?.audioDevice)
        return `已录制音频：${C.value.audioDevice}`;
      if (C.value && !C.value.hasAudio)
        return "未检测到可用音频设备，导出视频无声音";
      if (H.value?.available && !H.value.systemAudioAvailable) {
        const o = H.value.audioDevices?.join("、") || "无";
        return k.value.audio ? `未发现系统声音/立体声混音设备；不会自动录制麦克风。当前可用音频设备：${o}` : "录制音频已关闭";
      }
      return k.value.audio ? "录制音频已开启。系统声音将通过 WASAPI Loopback 捕获" : "录制音频已关闭";
    }), Bt = w(() => {
      const o = f.value?.progress ?? 0.03;
      return Math.max(1, Math.min(100, Math.round(o * 100)));
    }), vt = w(() => {
      const o = f.value;
      return o ? o.totalFrames && o.stage === "frames" ? `${o.message}` : o.message || "正在导出..." : "正在导出...";
    }), Ss = w(() => {
      const o = f.value;
      return o?.totalFrames ? `${vt.value} (${o.currentFrame}/${o.totalFrames})` : vt.value;
    }), xs = w(() => {
      const o = Math.floor(Wt.value / 1e3), i = Math.floor(o / 60).toString().padStart(2, "0"), y = (o % 60).toString().padStart(2, "0");
      return `${i}:${y}`;
    }), ge = async (o) => {
      try {
        await o();
      } catch (i) {
        console.error(`${te} action failed`, i), Ae.error(`${te} action failed`, i), jt.value || Ct.msg(i?.message || String(i), "error");
      }
    }, Ht = (o) => Math.max(2, Math.floor(Math.round(o) / 2) * 2), Gt = (o) => Math.max(1, Math.round(o)), ve = (o, i) => Math.abs(o - i) <= ol, ks = (o, i) => o === i ? !0 : !o || !i ? !1 : ve(o.x, i.x) && ve(o.y, i.y) && ve(o.width, i.width) && ve(o.height, i.height), Ge = async (o) => {
      ks(Y, o) || (Y = o ? { ...o } : null, await Je(o).catch(() => {
      }));
    }, yt = async () => {
      const o = n.value;
      if (!o)
        throw new Error("录制视口尚未准备好");
      const i = o.getBoundingClientRect(), y = await t.scaleFactor(), m = await t.innerPosition(), R = Gt(i.width * y), z = Gt(i.height * y);
      if (R < me || z < me)
        throw new Error("录制区域太小，请放大录制窗口");
      return {
        x: i.left,
        y: i.top,
        width: R / y,
        height: z / y,
        screenX: Math.round(m.x + i.left * y),
        screenY: Math.round(m.y + i.top * y),
        physicalWidth: R,
        physicalHeight: z,
        scale: y
      };
    }, Ut = async () => {
      const o = await yt(), i = Ht(o.physicalWidth), y = Ht(o.physicalHeight);
      return {
        ...o,
        width: i / o.scale,
        height: y / o.scale,
        physicalWidth: i,
        physicalHeight: y
      };
    }, Os = async () => {
      try {
        const o = await yt();
        if ((!ve(r.value.width, o.physicalWidth) || !ve(r.value.height, o.physicalHeight)) && (r.value = {
          width: o.physicalWidth,
          height: o.physicalHeight
        }), h.value) {
          const i = s.value?.getBoundingClientRect().height ?? 0, y = a.value?.getBoundingClientRect().height ?? 0;
          await Ge({
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
        await Ge({
          x: Math.round(o.x * o.scale),
          y: Math.round(o.y * o.scale),
          width: o.physicalWidth,
          height: o.physicalHeight
        });
      } catch {
        (r.value.width !== 0 || r.value.height !== 0) && (r.value = { width: 0, height: 0 }), await Ge(null);
      }
    }, U = async () => _ || (_ = Os().finally(() => {
      if (_ = null, M) {
        const o = M;
        M = null, Ge(o);
      }
    }), _), Ms = () => {
      v === null && (v = requestAnimationFrame(() => {
        v = null, U();
      }));
    }, Ue = () => {
      l.value || Ms();
    }, Vt = () => {
      M = null, Y = null;
    }, Ve = async () => {
      Vt(), await Je(null).catch(() => {
      }), await Xe(null).catch(() => {
      });
    }, qt = () => {
      l.value = !1, h.value = !1;
    }, Kt = () => {
      window.setTimeout(() => {
        U();
      }, 120);
    }, ze = () => new Promise((o) => {
      requestAnimationFrame(() => requestAnimationFrame(() => o()));
    }), Ts = async () => {
      document.documentElement.classList.add("screen-recorder-repaint"), await ze(), document.documentElement.classList.remove("screen-recorder-repaint"), await ze();
    }, Is = async () => {
      await t.setIgnoreCursorEvents(!0).catch(() => {
      }), await ze(), await t.setIgnoreCursorEvents(!1).catch(() => {
      }), await U();
    }, Zt = async () => {
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
    }, Yt = async () => {
      if (!h.value) {
        await Xe(null).catch(() => {
        });
        return;
      }
      const o = await Zt(), i = await t.scaleFactor(), y = s.value?.getBoundingClientRect().height ?? 0, m = a.value?.getBoundingClientRect().height ?? 0;
      await Xe({
        width: o.width,
        height: o.height,
        topHeight: Math.round(y * i),
        bottomHeight: Math.round(m * i)
      }).catch(() => {
      });
    }, Jt = (o, i) => {
      const y = Math.min(o.width, i.width), m = Math.min(o.height, i.height), R = i.x + i.width - y, z = i.y + i.height - m;
      return {
        x: Math.min(Math.max(o.x, i.x), R),
        y: Math.min(Math.max(o.y, i.y), z),
        width: y,
        height: m
      };
    }, Es = (o, i, y) => {
      if (!i) return !1;
      const m = Math.max(8, Math.round(8 * y)), R = i.x + i.width, z = i.y + i.height, Q = o.screenX + o.physicalWidth, ne = o.screenY + o.physicalHeight;
      return o.screenX <= i.x + m && o.screenY <= i.y + m && Q >= R - m && ne >= z - m;
    }, Ns = (o, i, y) => {
      if (!i) return !1;
      const m = Math.max(8, Math.round(8 * y));
      return o.screenX <= i.x + m || o.screenY <= i.y + m || o.screenX + o.physicalWidth >= i.x + i.width - m || o.screenY + o.physicalHeight >= i.y + i.height - m;
    }, Ps = (o, i, y) => {
      if (!y) return o;
      const m = Math.round(nl * i), R = Math.round(sl * i);
      return {
        ...o,
        physicalWidth: Math.max(me, o.physicalWidth - m),
        physicalHeight: Math.max(me, o.physicalHeight - R)
      };
    }, Xt = async (o) => {
      await t.setSize(new ce(Math.round(o.width), Math.round(o.height))), await t.setPosition(new Z(Math.round(o.x), Math.round(o.y))), await ze();
    }, Qt = async () => {
      const [o, i] = await Promise.all([
        yt(),
        Zt()
      ]);
      return { actualRegion: o, currentFrame: i };
    }, zs = async (o, i, y) => {
      const { actualRegion: m, currentFrame: R } = await Qt(), z = m.screenX - R.x, Q = m.screenY - R.y, ne = Math.max(0, R.width - m.physicalWidth), V = Math.max(0, R.height - m.physicalHeight);
      return {
        x: o.screenX - z,
        y: o.screenY - Q,
        width: Math.max(i, o.physicalWidth + ne),
        height: Math.max(y, o.physicalHeight + V)
      };
    }, en = async () => {
      E?.(), E = null, p.value = 0;
    }, qe = async () => {
      if (!(!gt.value || E))
        try {
          E = await at("screen_recorder_audio_level", (o) => {
            if (!Pe.value) {
              p.value = 0;
              return;
            }
            const i = Math.max(0, Math.min(1, Number(o.payload?.level ?? 0)));
            p.value = p.value * 0.38 + i * 0.62;
          }), g.value = !1;
        } catch (o) {
          console.error(`${te} audio meter failed`, o), Ae.warn(`${te} audio meter failed`, o), g.value = !0;
        }
    }, Ls = async (o) => {
      o.button !== 0 || Ne.value || (qt(), await t.setMinSize(new ae(St, We)).catch(() => {
      }), await Ve(), await t.startDragging().catch((i) => {
        Ct.msg(i?.message || String(i), "error");
      }), Kt());
    }, Rs = async (o) => {
      Ne.value || (qt(), await t.setMinSize(new ae(St, We)).catch(() => {
      }), await Ve(), await t.startResizeDragging(o).catch((i) => {
        Ct.msg(i?.message || String(i), "error");
      }), Kt());
    }, Ds = () => ge(async () => {
      f.value = null, await qe(), await we(!0).catch(() => {
      }), await U(), await fs(await Ut());
    }), As = () => ge(async () => {
      await gs();
    }), Ws = () => ge(async () => {
      await vs(await Ut());
    }), $s = () => ge(async () => {
      f.value = {
        stage: "encode",
        message: k.value.format === "gif" ? "准备生成 GIF 帧" : "准备导出 MP4",
        progress: 0.01,
        currentFrame: 0
      }, await ys(), p.value = 0, await ws(), await U(), await we(!1).catch(() => {
      });
    }), Fs = () => ge(async () => {
      await Ft(), f.value = null, await U();
    }), js = () => {
      const o = { ...k.value };
      Ve(), _s(), k.value = o, T.value = "ready", C.value = null, f.value = null, we(!0).catch(() => {
      }), _e(U), qe();
    }, Bs = async (o) => {
      const i = await po(o.screenX, o.screenY), y = i?.scaleFactor || await t.scaleFactor(), m = i ? {
        x: i.position.x,
        y: i.position.y,
        width: i.size.width,
        height: i.size.height
      } : null, R = Es(o, m, y), z = Ns(o, m, y);
      l.value = !0, h.value = z, await _e(), await ze(), await t.setMinSize(
        z ? new ae(xt, Tn) : new ae(xt, We)
      ).catch(() => {
      });
      const Q = Math.round(xt * y), ne = Math.round(
        (z ? Tn : We) * y
      ), V = Ps(o, y, !R), sn = z && m ? {
        x: Math.max(m.x, V.screenX),
        y: Math.max(m.y, V.screenY),
        width: Math.max(Q, Math.min(V.physicalWidth, m.width)),
        height: Math.max(ne, Math.min(V.physicalHeight, m.height))
      } : await zs(
        V,
        Q,
        ne
      );
      try {
        if (await Xt(
          m && z ? Jt(sn, m) : sn
        ), await _e(), await Yt(), z)
          return;
        const Ke = async () => {
          const { actualRegion: se, currentFrame: Le } = await Qt(), ee = {
            x: V.screenX - se.screenX,
            y: V.screenY - se.screenY,
            width: V.physicalWidth - se.physicalWidth,
            height: V.physicalHeight - se.physicalHeight
          };
          if (Math.abs(ee.x) <= En && Math.abs(ee.y) <= En && Math.abs(ee.width) <= In && Math.abs(ee.height) <= In)
            return !0;
          const on = {
            x: Le.x + ee.x,
            y: Le.y + ee.y,
            width: Math.max(Q, Le.width + ee.width),
            height: Math.max(ne, Le.height + ee.height)
          };
          return await Xt(
            m && z ? Jt(on, m) : on
          ), !1;
        };
        for (let se = 0; se < tl && !await Ke(); se += 1)
          ;
      } catch (Ke) {
        console.error(`${te} snap correction failed`, Ke), Ae.warn(`${te} snap correction failed`, Ke);
      } finally {
        await Is(), await U(), await Yt(), await Ts(), await t.setFocus().catch(() => {
        });
      }
    }, Hs = () => ge(async () => {
      await Ve();
      const o = await fr();
      await Bs(o);
    }), Gs = async () => {
      await t.minimize();
    }, tn = async () => {
      jt.value = !0;
      try {
        T.value === "exporting" ? await Ft().catch(() => {
        }) : await ms(), await Je(null).catch(() => {
        }), await we(!1).catch(() => {
        });
      } catch {
      }
      await gr();
    }, Us = async () => {
      C.value && (await U(), await u("open_file_with_default_app", { filePath: C.value.path }));
    }, Vs = async () => {
      C.value && (await U(), await u("show_file_in_folder", { filePath: C.value.path }));
    }, nn = (o) => {
      o.key === "Escape" && (o.preventDefault(), tn());
    };
    return dt(async () => {
      Ae.info(`${te} frontend mounted`), T.value = "ready", await t.setMinSize(new ae(St, We)).catch(() => {
      }), await we(!0).catch(() => {
      }), await $t().catch(() => {
      }), await _e(), await U(), await qe(), await _e(), await t.emit("screen_recorder_ready"), Ae.info(`${te} frontend ready emitted`), B = await at("screen_recorder_export_progress", (o) => {
        f.value = o.payload;
      }).catch(() => null), n.value && (b = new ResizeObserver(() => {
        Ue();
      }), b.observe(n.value)), I = await t.onMoved(() => {
        Ue();
      }).catch(() => null), window.addEventListener("resize", Ue), window.addEventListener("keydown", nn);
    }), Se(gt, (o) => {
      o ? qe() : en();
    }), Se(T, (o) => {
      o !== "recording" && (p.value = 0), o !== "exporting" && (f.value = null);
    }), Pn(() => {
      b?.disconnect(), I?.(), B?.(), window.removeEventListener("resize", Ue), window.removeEventListener("keydown", nn), Vt(), Je(null).catch(() => {
      }), Xe(null).catch(() => {
      }), we(!1).catch(() => {
      }), en();
    }), (o, i) => (O(), P("div", xr, [
      c(
        "div",
        {
          class: L(["recorder-shell", {
            recording: d(T) === "recording",
            paused: d(T) === "paused",
            "snap-aligned": l.value,
            "snap-fullscreen": h.value
          }])
        },
        [
          (O(), P(
            be,
            null,
            no(S, (y) => c("span", {
              key: y.className,
              class: L(["resize-zone", y.className]),
              onMousedown: $e((m) => Rs(y.direction), ["prevent"])
            }, null, 42, kr)),
            64
            /* STABLE_FRAGMENT */
          )),
          c(
            "header",
            {
              ref_key: "titleBarRef",
              ref: s,
              class: "title-bar",
              onMousedown: Ls
            },
            [
              c(
                "span",
                Or,
                A(o.$t("screenRecorder.title") || "区域录制"),
                1
                /* TEXT */
              ),
              c(
                "div",
                {
                  class: "window-actions",
                  onMousedown: i[0] || (i[0] = $e(() => {
                  }, ["stop"]))
                },
                [
                  c("button", {
                    class: "title-button title-button--window",
                    title: "最小化",
                    onClick: Gs
                  }, [
                    N(d(mo), {
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
                    onClick: tn
                  }, [
                    N(d(wo), {
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
          c("main", Mr, [
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
            c("div", Tr, [
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
              c("div", Ir, [
                c("div", Er, [
                  d(T) === "ready" || d(T) === "completed" ? (O(), P(
                    "button",
                    {
                      key: 0,
                      class: "icon-control snap-control",
                      title: "拖到目标窗口并松开以对齐",
                      "aria-label": "对齐目标窗口",
                      onMousedown: $e(Hs, ["prevent"])
                    },
                    [
                      N(d(_o), {
                        theme: "outline",
                        size: "18",
                        strokeWidth: 3,
                        strokeLinecap: "butt"
                      })
                    ],
                    32
                    /* NEED_HYDRATION */
                  )) : X("v-if", !0),
                  c("button", {
                    class: L(["audio-meter", { active: Pe.value && p.value > 0.03, metering: Pe.value && !g.value, muted: !Pe.value || g.value }]),
                    title: Cs.value,
                    "aria-label": "系统声音录制状态",
                    disabled: d(T) === "exporting" || d(k).format === "gif"
                  }, [
                    c(
                      "span",
                      {
                        class: "audio-bars",
                        style: ke(bs.value)
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
                  ], 10, Nr)
                ]),
                c("label", Pr, [
                  le(c("select", {
                    "onUpdate:modelValue": i[1] || (i[1] = (y) => d(k).fps = y),
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
                  ]), 8, zr), [
                    [wt, d(k).fps]
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
                  "onUpdate:modelValue": i[2] || (i[2] = (y) => d(k).format = y),
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
                ]), 8, Lr), [
                  [wt, d(k).format]
                ]),
                le(c("select", {
                  "onUpdate:modelValue": i[3] || (i[3] = (y) => d(k).quality = y),
                  class: "quality-select optional-quality",
                  disabled: Ne.value
                }, [
                  c(
                    "option",
                    Dr,
                    A(o.$t("screenRecorder.qualityHigh")),
                    1
                    /* TEXT */
                  ),
                  c(
                    "option",
                    Ar,
                    A(o.$t("screenRecorder.qualityStandard")),
                    1
                    /* TEXT */
                  ),
                  c(
                    "option",
                    Wr,
                    A(o.$t("screenRecorder.qualitySmall")),
                    1
                    /* TEXT */
                  )
                ], 8, Rr), [
                  [wt, d(k).quality]
                ]),
                c("div", $r, [
                  c("label", Fr, [
                    c("input", {
                      value: r.value.width,
                      readonly: ""
                    }, null, 8, jr)
                  ]),
                  i[17] || (i[17] = c(
                    "span",
                    { class: "multiply" },
                    "×",
                    -1
                    /* HOISTED */
                  )),
                  c("label", Br, [
                    c("input", {
                      value: r.value.height,
                      readonly: ""
                    }, null, 8, Hr)
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
              c("div", Gr, [
                d(T) === "recording" || d(T) === "paused" ? (O(), P(
                  be,
                  { key: 0 },
                  [
                    c(
                      "span",
                      Ur,
                      A(xs.value),
                      1
                      /* TEXT */
                    ),
                    c("button", {
                      class: "control-button",
                      onClick: i[4] || (i[4] = (y) => d(T) === "paused" ? Ws() : As())
                    }, [
                      c(
                        "span",
                        Vr,
                        A(d(T) === "paused" ? o.$t("screenRecorder.resume") : o.$t("screenRecorder.pause")),
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
                        qr,
                        A(o.$t("screenRecorder.stop")),
                        1
                        /* TEXT */
                      )
                    ])
                  ],
                  64
                  /* STABLE_FRAGMENT */
                )) : d(T) === "exporting" ? (O(), P(
                  be,
                  { key: 1 },
                  [
                    c("div", {
                      class: "export-progress",
                      title: Ss.value
                    }, [
                      c("div", Zr, [
                        c(
                          "span",
                          null,
                          A(vt.value),
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
                      c("div", Yr, [
                        c(
                          "span",
                          {
                            style: ke({ width: `${Bt.value}%` })
                          },
                          null,
                          4
                          /* STYLE */
                        )
                      ])
                    ], 8, Kr),
                    c("button", {
                      class: "control-button danger",
                      title: "取消导出",
                      onClick: Fs
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
                )) : d(T) === "completed" && d(C) ? (O(), P(
                  be,
                  { key: 2 },
                  [
                    c("span", {
                      class: "save-status optional-save-status",
                      title: d(C).path
                    }, A(d(C).hasAudio ? "已保存·有声" : "已保存·无声"), 9, Jr),
                    c("button", {
                      class: "control-button",
                      title: "打开文件",
                      onClick: Us
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
                      onClick: Vs
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
                      onClick: js
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
                )) : (O(), P("button", {
                  key: 3,
                  class: "record-button",
                  disabled: d(H)?.available === !1 || r.value.width < me || r.value.height < me,
                  onClick: Ds
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
                    Qr,
                    A(o.$t("screenRecorder.start")),
                    1
                    /* TEXT */
                  )
                ], 8, Xr))
              ])
            ],
            512
            /* NEED_PATCH */
          )
        ],
        2
        /* CLASS */
      ),
      d(H) && !d(H).available ? (O(), P(
        "p",
        el,
        A(d(H).message || o.$t("screenRecorder.ffmpegMissing")),
        1
        /* TEXT */
      )) : X("v-if", !0)
    ]));
  }
}), il = (e, t) => {
  const n = e.__vccOpts || e;
  for (const [s, a] of t)
    n[s] = a;
  return n;
}, rl = /* @__PURE__ */ il(al, [["__scopeId", "data-v-752948af"]]), ll = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: rl
}, Symbol.toStringTag, { value: "Module" }));
export {
  ul as activate
};
