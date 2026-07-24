import { getCurrentInstance as ae, inject as q, ref as z, computed as b, unref as i, readonly as _n, getCurrentScope as yn, onScopeDispose as vn, onMounted as Ee, nextTick as xt, watch as be, isRef as wn, warn as bn, provide as kn, defineComponent as x, createElementBlock as L, openBlock as v, mergeProps as Cn, renderSlot as re, createElementVNode as a, normalizeClass as I, createVNode as h, Transition as Je, withCtx as Q, withDirectives as P, normalizeStyle as ze, createTextVNode as J, toDisplayString as f, vShow as Te, shallowReactive as Sn, createBlock as F, createCommentVNode as S, resolveDynamicComponent as Dt, Fragment as qe, withModifiers as Qe, isVNode as ye, render as Ie, onUnmounted as Ln, vModelRadio as se, vModelText as rt } from "vue";
import { useI18n as Mn } from "vue-i18n";
const jr = (e) => {
  e.registerRoute({
    target: "layout",
    path: "/dark-mode",
    name: "DarkMode",
    component: () => Promise.resolve().then(() => Tr)
  }), e.registerWindowShortcut({
    label: "dark_mode"
  });
};
function On(e, t, n, o) {
  if (typeof t == "function" ? e !== t || !0 : !t.has(e)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
  return n === "m" ? o : n === "a" ? o.call(e) : o ? o.value : t.get(e);
}
function zn(e, t, n, o, s) {
  if (typeof t == "function" ? e !== t || !0 : !t.has(e)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
  return t.set(e, n), n;
}
var Se;
const W = "__TAURI_TO_IPC_KEY__";
function Tn(e, t = !1) {
  return window.__TAURI_INTERNALS__.transformCallback(e, t);
}
async function c(e, t = {}, n) {
  return window.__TAURI_INTERNALS__.invoke(e, t, n);
}
class In {
  get rid() {
    return On(this, Se, "f");
  }
  constructor(t) {
    Se.set(this, void 0), zn(this, Se, t);
  }
  /**
   * Destroys and cleans up this resource from memory.
   * **You should not call any method on this object anymore and should drop any reference to it.**
   */
  async close() {
    return c("plugin:resources|close", {
      rid: this.rid
    });
  }
}
Se = /* @__PURE__ */ new WeakMap();
class Et {
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
    return new me(this.width * t, this.height * t);
  }
  [W]() {
    return {
      width: this.width,
      height: this.height
    };
  }
  toJSON() {
    return this[W]();
  }
}
class me {
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
    return new Et(this.width / t, this.height / t);
  }
  [W]() {
    return {
      width: this.width,
      height: this.height
    };
  }
  toJSON() {
    return this[W]();
  }
}
class ie {
  constructor(t) {
    this.size = t;
  }
  toLogical(t) {
    return this.size instanceof Et ? this.size : this.size.toLogical(t);
  }
  toPhysical(t) {
    return this.size instanceof me ? this.size : this.size.toPhysical(t);
  }
  [W]() {
    return {
      [`${this.size.type}`]: {
        width: this.size.width,
        height: this.size.height
      }
    };
  }
  toJSON() {
    return this[W]();
  }
}
class Pt {
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
  [W]() {
    return {
      x: this.x,
      y: this.y
    };
  }
  toJSON() {
    return this[W]();
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
    return new Pt(this.x / t, this.y / t);
  }
  [W]() {
    return {
      x: this.x,
      y: this.y
    };
  }
  toJSON() {
    return this[W]();
  }
}
class ke {
  constructor(t) {
    this.position = t;
  }
  toLogical(t) {
    return this.position instanceof Pt ? this.position : this.position.toLogical(t);
  }
  toPhysical(t) {
    return this.position instanceof Z ? this.position : this.position.toPhysical(t);
  }
  [W]() {
    return {
      [`${this.position.type}`]: {
        x: this.position.x,
        y: this.position.y
      }
    };
  }
  toJSON() {
    return this[W]();
  }
}
var D;
(function(e) {
  e.WINDOW_RESIZED = "tauri://resize", e.WINDOW_MOVED = "tauri://move", e.WINDOW_CLOSE_REQUESTED = "tauri://close-requested", e.WINDOW_DESTROYED = "tauri://destroyed", e.WINDOW_FOCUS = "tauri://focus", e.WINDOW_BLUR = "tauri://blur", e.WINDOW_SCALE_FACTOR_CHANGED = "tauri://scale-change", e.WINDOW_THEME_CHANGED = "tauri://theme-changed", e.WINDOW_CREATED = "tauri://window-created", e.WEBVIEW_CREATED = "tauri://webview-created", e.DRAG_ENTER = "tauri://drag-enter", e.DRAG_OVER = "tauri://drag-over", e.DRAG_DROP = "tauri://drag-drop", e.DRAG_LEAVE = "tauri://drag-leave";
})(D || (D = {}));
async function Wt(e, t) {
  await c("plugin:event|unlisten", {
    event: e,
    eventId: t
  });
}
async function Ye(e, t, n) {
  var o;
  const s = typeof n?.target == "string" ? { kind: "AnyLabel", label: n.target } : (o = n?.target) !== null && o !== void 0 ? o : { kind: "Any" };
  return c("plugin:event|listen", {
    event: e,
    target: s,
    handler: Tn(t)
  }).then((l) => async () => Wt(e, l));
}
async function $n(e, t, n) {
  return Ye(e, (o) => {
    Wt(e, o.id), t(o);
  }, n);
}
async function jn(e, t) {
  await c("plugin:event|emit", {
    event: e,
    payload: t
  });
}
async function Nn(e, t, n) {
  await c("plugin:event|emit_to", {
    target: typeof e == "string" ? { kind: "AnyLabel", label: e } : e,
    event: t,
    payload: n
  });
}
class _e extends In {
  /**
   * Creates an Image from a resource ID. For internal use only.
   *
   * @ignore
   */
  constructor(t) {
    super(t);
  }
  /** Creates a new Image using RGBA data, in row-major order from top to bottom, and with specified width and height. */
  static async new(t, n, o) {
    return c("plugin:image|new", {
      rgba: $e(t),
      width: n,
      height: o
    }).then((s) => new _e(s));
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
    return c("plugin:image|from_bytes", {
      bytes: $e(t)
    }).then((n) => new _e(n));
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
    return c("plugin:image|from_path", { path: t }).then((n) => new _e(n));
  }
  /** Returns the RGBA data for this image, in row-major order from top to bottom.  */
  async rgba() {
    return c("plugin:image|rgba", {
      rid: this.rid
    }).then((t) => new Uint8Array(t));
  }
  /** Returns the size of this image.  */
  async size() {
    return c("plugin:image|size", { rid: this.rid });
  }
}
function $e(e) {
  return e == null ? null : typeof e == "string" ? e : e instanceof _e ? e.rid : e;
}
var He;
(function(e) {
  e[e.Critical = 1] = "Critical", e[e.Informational = 2] = "Informational";
})(He || (He = {}));
class xn {
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
var lt;
(function(e) {
  e.None = "none", e.Normal = "normal", e.Indeterminate = "indeterminate", e.Paused = "paused", e.Error = "error";
})(lt || (lt = {}));
function Ve() {
  return new At(window.__TAURI_INTERNALS__.metadata.currentWindow.label, {
    // @ts-expect-error `skip` is not defined in the public API but it is handled by the constructor
    skip: !0
  });
}
async function Be() {
  return c("plugin:window|get_all_windows").then((e) => e.map((t) => new At(t, {
    // @ts-expect-error `skip` is not defined in the public API but it is handled by the constructor
    skip: !0
  })));
}
const Re = ["tauri://created", "tauri://error"];
class At {
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
    var o;
    this.label = t, this.listeners = /* @__PURE__ */ Object.create(null), n?.skip || c("plugin:window|create", {
      options: {
        ...n,
        parent: typeof n.parent == "string" ? n.parent : (o = n.parent) === null || o === void 0 ? void 0 : o.label,
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
    return (n = (await Be()).find((o) => o.label === t)) !== null && n !== void 0 ? n : null;
  }
  /**
   * Get an instance of `Window` for the current window.
   */
  static getCurrent() {
    return Ve();
  }
  /**
   * Gets a list of instances of `Window` for all available windows.
   */
  static async getAll() {
    return Be();
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
    for (const t of await Be())
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
      const o = this.listeners[t];
      o.splice(o.indexOf(n), 1);
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
      const o = this.listeners[t];
      o.splice(o.indexOf(n), 1);
    } : $n(t, n, {
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
    if (Re.includes(t)) {
      for (const o of this.listeners[t] || [])
        o({
          event: t,
          id: -1,
          payload: n
        });
      return;
    }
    return jn(t, n);
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
  async emitTo(t, n, o) {
    if (Re.includes(n)) {
      for (const s of this.listeners[n] || [])
        s({
          event: n,
          id: -1,
          payload: o
        });
      return;
    }
    return Nn(t, n, o);
  }
  /** @ignore */
  _handleTauriEvent(t, n) {
    return Re.includes(t) ? (t in this.listeners ? this.listeners[t].push(n) : this.listeners[t] = [n], !0) : !1;
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
    return c("plugin:window|scale_factor", {
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
    return c("plugin:window|inner_position", {
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
    return c("plugin:window|outer_position", {
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
    return c("plugin:window|inner_size", {
      label: this.label
    }).then((t) => new me(t));
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
    return c("plugin:window|outer_size", {
      label: this.label
    }).then((t) => new me(t));
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
    return c("plugin:window|is_fullscreen", {
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
    return c("plugin:window|is_minimized", {
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
    return c("plugin:window|is_maximized", {
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
    return c("plugin:window|is_focused", {
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
    return c("plugin:window|is_decorated", {
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
    return c("plugin:window|is_resizable", {
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
    return c("plugin:window|is_maximizable", {
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
    return c("plugin:window|is_minimizable", {
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
    return c("plugin:window|is_closable", {
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
    return c("plugin:window|is_visible", {
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
    return c("plugin:window|title", {
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
    return c("plugin:window|theme", {
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
    return c("plugin:window|is_always_on_top", {
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
    return c("plugin:window|center", {
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
    return t && (t === He.Critical ? n = { type: "Critical" } : n = { type: "Informational" }), c("plugin:window|request_user_attention", {
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
    return c("plugin:window|set_resizable", {
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
    return c("plugin:window|set_enabled", {
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
    return c("plugin:window|is_enabled", {
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
    return c("plugin:window|set_maximizable", {
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
    return c("plugin:window|set_minimizable", {
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
    return c("plugin:window|set_closable", {
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
    return c("plugin:window|set_title", {
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
    return c("plugin:window|maximize", {
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
    return c("plugin:window|unmaximize", {
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
    return c("plugin:window|toggle_maximize", {
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
    return c("plugin:window|minimize", {
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
    return c("plugin:window|unminimize", {
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
    return c("plugin:window|show", {
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
    return c("plugin:window|hide", {
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
    return c("plugin:window|close", {
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
    return c("plugin:window|destroy", {
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
    return c("plugin:window|set_decorations", {
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
    return c("plugin:window|set_shadow", {
      label: this.label,
      value: t
    });
  }
  /**
   * Set window effects.
   */
  async setEffects(t) {
    return c("plugin:window|set_effects", {
      label: this.label,
      value: t
    });
  }
  /**
   * Clear any applied effects if possible.
   */
  async clearEffects() {
    return c("plugin:window|set_effects", {
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
    return c("plugin:window|set_always_on_top", {
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
    return c("plugin:window|set_always_on_bottom", {
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
    return c("plugin:window|set_content_protected", {
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
    return c("plugin:window|set_size", {
      label: this.label,
      value: t instanceof ie ? t : new ie(t)
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
    return c("plugin:window|set_min_size", {
      label: this.label,
      value: t instanceof ie ? t : t ? new ie(t) : null
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
    return c("plugin:window|set_max_size", {
      label: this.label,
      value: t instanceof ie ? t : t ? new ie(t) : null
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
    function n(o) {
      return o ? { Logical: o } : null;
    }
    return c("plugin:window|set_size_constraints", {
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
    return c("plugin:window|set_position", {
      label: this.label,
      value: t instanceof ke ? t : new ke(t)
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
    return c("plugin:window|set_fullscreen", {
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
    return c("plugin:window|set_focus", {
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
    return c("plugin:window|set_icon", {
      label: this.label,
      value: $e(t)
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
    return c("plugin:window|set_skip_taskbar", {
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
    return c("plugin:window|set_cursor_grab", {
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
    return c("plugin:window|set_cursor_visible", {
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
    return c("plugin:window|set_cursor_icon", {
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
    return c("plugin:window|set_background_color", { color: t });
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
    return c("plugin:window|set_cursor_position", {
      label: this.label,
      value: t instanceof ke ? t : new ke(t)
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
    return c("plugin:window|set_ignore_cursor_events", {
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
    return c("plugin:window|start_dragging", {
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
    return c("plugin:window|start_resize_dragging", {
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
    return c("plugin:window|set_badge_count", {
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
    return c("plugin:window|set_badge_label", {
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
    return c("plugin:window|set_overlay_icon", {
      label: this.label,
      value: t ? $e(t) : void 0
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
    return c("plugin:window|set_progress_bar", {
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
    return c("plugin:window|set_visible_on_all_workspaces", {
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
    return c("plugin:window|set_title_bar_style", {
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
    return c("plugin:window|set_theme", {
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
    return this.listen(D.WINDOW_RESIZED, (n) => {
      n.payload = new me(n.payload), t(n);
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
    return this.listen(D.WINDOW_MOVED, (n) => {
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
    return this.listen(D.WINDOW_CLOSE_REQUESTED, async (n) => {
      const o = new xn(n);
      await t(o), o.isPreventDefault() || await this.destroy();
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
    const n = await this.listen(D.DRAG_ENTER, (r) => {
      t({
        ...r,
        payload: {
          type: "enter",
          paths: r.payload.paths,
          position: new Z(r.payload.position)
        }
      });
    }), o = await this.listen(D.DRAG_OVER, (r) => {
      t({
        ...r,
        payload: {
          type: "over",
          position: new Z(r.payload.position)
        }
      });
    }), s = await this.listen(D.DRAG_DROP, (r) => {
      t({
        ...r,
        payload: {
          type: "drop",
          paths: r.payload.paths,
          position: new Z(r.payload.position)
        }
      });
    }), l = await this.listen(D.DRAG_LEAVE, (r) => {
      t({ ...r, payload: { type: "leave" } });
    });
    return () => {
      n(), s(), o(), l();
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
    const n = await this.listen(D.WINDOW_FOCUS, (s) => {
      t({ ...s, payload: !0 });
    }), o = await this.listen(D.WINDOW_BLUR, (s) => {
      t({ ...s, payload: !1 });
    });
    return () => {
      n(), o();
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
    return this.listen(D.WINDOW_SCALE_FACTOR_CHANGED, t);
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
    return this.listen(D.WINDOW_THEME_CHANGED, t);
  }
}
var ct;
(function(e) {
  e.Disabled = "disabled", e.Throttle = "throttle", e.Suspend = "suspend";
})(ct || (ct = {}));
var ut;
(function(e) {
  e.AppearanceBased = "appearanceBased", e.Light = "light", e.Dark = "dark", e.MediumLight = "mediumLight", e.UltraDark = "ultraDark", e.Titlebar = "titlebar", e.Selection = "selection", e.Menu = "menu", e.Popover = "popover", e.Sidebar = "sidebar", e.HeaderView = "headerView", e.Sheet = "sheet", e.WindowBackground = "windowBackground", e.HudWindow = "hudWindow", e.FullScreenUI = "fullScreenUI", e.Tooltip = "tooltip", e.ContentBackground = "contentBackground", e.UnderWindowBackground = "underWindowBackground", e.UnderPageBackground = "underPageBackground", e.Mica = "mica", e.Blur = "blur", e.Acrylic = "acrylic", e.Tabbed = "tabbed", e.TabbedDark = "tabbedDark", e.TabbedLight = "tabbedLight";
})(ut || (ut = {}));
var dt;
(function(e) {
  e.FollowsWindowActiveState = "followsWindowActiveState", e.Active = "active", e.Inactive = "inactive";
})(dt || (dt = {}));
const Ft = Symbol(), Le = "el", Dn = "is-", K = (e, t, n, o, s) => {
  let l = `${e}-${t}`;
  return n && (l += `-${n}`), o && (l += `__${o}`), s && (l += `--${s}`), l;
}, Bt = Symbol("namespaceContextKey"), En = (e) => {
  const t = e || (ae() ? q(Bt, z(Le)) : z(Le));
  return b(() => i(t) || Le);
}, Xe = (e, t) => {
  const n = En(t);
  return {
    namespace: n,
    b: (g = "") => K(n.value, e, g, "", ""),
    e: (g) => g ? K(n.value, e, "", g, "") : "",
    m: (g) => g ? K(n.value, e, "", "", g) : "",
    be: (g, y) => g && y ? K(n.value, e, g, y, "") : "",
    em: (g, y) => g && y ? K(n.value, e, "", g, y) : "",
    bm: (g, y) => g && y ? K(n.value, e, g, "", y) : "",
    bem: (g, y, O) => g && y && O ? K(n.value, e, g, y, O) : "",
    is: (g, ...y) => {
      const O = y.length >= 1 ? y[0] : !0;
      return g && O ? `${Dn}${g}` : "";
    },
    cssVar: (g) => {
      const y = {};
      for (const O in g)
        g[O] && (y[`--${n.value}-${O}`] = g[O]);
      return y;
    },
    cssVarName: (g) => `--${n.value}-${g}`,
    cssVarBlock: (g) => {
      const y = {};
      for (const O in g)
        g[O] && (y[`--${n.value}-${e}-${O}`] = g[O]);
      return y;
    },
    cssVarBlockName: (g) => `--${n.value}-${e}-${g}`
  };
};
/**
* @vue/shared v3.5.13
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/
const Pn = Object.prototype.hasOwnProperty, ht = (e, t) => Pn.call(e, t), ve = (e) => typeof e == "function", Y = (e) => typeof e == "string", Rt = (e) => e !== null && typeof e == "object";
var Wn = typeof global == "object" && global && global.Object === Object && global, An = typeof self == "object" && self && self.Object === Object && self, et = Wn || An || Function("return this")(), le = et.Symbol, Ut = Object.prototype, Fn = Ut.hasOwnProperty, Bn = Ut.toString, fe = le ? le.toStringTag : void 0;
function Rn(e) {
  var t = Fn.call(e, fe), n = e[fe];
  try {
    e[fe] = void 0;
    var o = !0;
  } catch {
  }
  var s = Bn.call(e);
  return o && (t ? e[fe] = n : delete e[fe]), s;
}
var Un = Object.prototype, Hn = Un.toString;
function Vn(e) {
  return Hn.call(e);
}
var Gn = "[object Null]", Zn = "[object Undefined]", ft = le ? le.toStringTag : void 0;
function Ht(e) {
  return e == null ? e === void 0 ? Zn : Gn : ft && ft in Object(e) ? Rn(e) : Vn(e);
}
function Kn(e) {
  return e != null && typeof e == "object";
}
var Jn = "[object Symbol]";
function tt(e) {
  return typeof e == "symbol" || Kn(e) && Ht(e) == Jn;
}
function qn(e, t) {
  for (var n = -1, o = e == null ? 0 : e.length, s = Array(o); ++n < o; )
    s[n] = t(e[n], n, e);
  return s;
}
var nt = Array.isArray, pt = le ? le.prototype : void 0, gt = pt ? pt.toString : void 0;
function Vt(e) {
  if (typeof e == "string")
    return e;
  if (nt(e))
    return qn(e, Vt) + "";
  if (tt(e))
    return gt ? gt.call(e) : "";
  var t = e + "";
  return t == "0" && 1 / e == -1 / 0 ? "-0" : t;
}
function Gt(e) {
  var t = typeof e;
  return e != null && (t == "object" || t == "function");
}
var Qn = "[object AsyncFunction]", Yn = "[object Function]", Xn = "[object GeneratorFunction]", eo = "[object Proxy]";
function to(e) {
  if (!Gt(e))
    return !1;
  var t = Ht(e);
  return t == Yn || t == Xn || t == Qn || t == eo;
}
var Ue = et["__core-js_shared__"], mt = function() {
  var e = /[^.]+$/.exec(Ue && Ue.keys && Ue.keys.IE_PROTO || "");
  return e ? "Symbol(src)_1." + e : "";
}();
function no(e) {
  return !!mt && mt in e;
}
var oo = Function.prototype, so = oo.toString;
function io(e) {
  if (e != null) {
    try {
      return so.call(e);
    } catch {
    }
    try {
      return e + "";
    } catch {
    }
  }
  return "";
}
var ao = /[\\^$.*+?()[\]{}|]/g, ro = /^\[object .+?Constructor\]$/, lo = Function.prototype, co = Object.prototype, uo = lo.toString, ho = co.hasOwnProperty, fo = RegExp(
  "^" + uo.call(ho).replace(ao, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$"
);
function po(e) {
  if (!Gt(e) || no(e))
    return !1;
  var t = to(e) ? fo : ro;
  return t.test(io(e));
}
function go(e, t) {
  return e?.[t];
}
function Zt(e, t) {
  var n = go(e, t);
  return po(n) ? n : void 0;
}
function mo(e, t) {
  return e === t || e !== e && t !== t;
}
var _o = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/, yo = /^\w*$/;
function vo(e, t) {
  if (nt(e))
    return !1;
  var n = typeof e;
  return n == "number" || n == "symbol" || n == "boolean" || e == null || tt(e) ? !0 : yo.test(e) || !_o.test(e) || t != null && e in Object(t);
}
var we = Zt(Object, "create");
function wo() {
  this.__data__ = we ? we(null) : {}, this.size = 0;
}
function bo(e) {
  var t = this.has(e) && delete this.__data__[e];
  return this.size -= t ? 1 : 0, t;
}
var ko = "__lodash_hash_undefined__", Co = Object.prototype, So = Co.hasOwnProperty;
function Lo(e) {
  var t = this.__data__;
  if (we) {
    var n = t[e];
    return n === ko ? void 0 : n;
  }
  return So.call(t, e) ? t[e] : void 0;
}
var Mo = Object.prototype, Oo = Mo.hasOwnProperty;
function zo(e) {
  var t = this.__data__;
  return we ? t[e] !== void 0 : Oo.call(t, e);
}
var To = "__lodash_hash_undefined__";
function Io(e, t) {
  var n = this.__data__;
  return this.size += this.has(e) ? 0 : 1, n[e] = we && t === void 0 ? To : t, this;
}
function X(e) {
  var t = -1, n = e == null ? 0 : e.length;
  for (this.clear(); ++t < n; ) {
    var o = e[t];
    this.set(o[0], o[1]);
  }
}
X.prototype.clear = wo;
X.prototype.delete = bo;
X.prototype.get = Lo;
X.prototype.has = zo;
X.prototype.set = Io;
function $o() {
  this.__data__ = [], this.size = 0;
}
function Pe(e, t) {
  for (var n = e.length; n--; )
    if (mo(e[n][0], t))
      return n;
  return -1;
}
var jo = Array.prototype, No = jo.splice;
function xo(e) {
  var t = this.__data__, n = Pe(t, e);
  if (n < 0)
    return !1;
  var o = t.length - 1;
  return n == o ? t.pop() : No.call(t, n, 1), --this.size, !0;
}
function Do(e) {
  var t = this.__data__, n = Pe(t, e);
  return n < 0 ? void 0 : t[n][1];
}
function Eo(e) {
  return Pe(this.__data__, e) > -1;
}
function Po(e, t) {
  var n = this.__data__, o = Pe(n, e);
  return o < 0 ? (++this.size, n.push([e, t])) : n[o][1] = t, this;
}
function de(e) {
  var t = -1, n = e == null ? 0 : e.length;
  for (this.clear(); ++t < n; ) {
    var o = e[t];
    this.set(o[0], o[1]);
  }
}
de.prototype.clear = $o;
de.prototype.delete = xo;
de.prototype.get = Do;
de.prototype.has = Eo;
de.prototype.set = Po;
var Wo = Zt(et, "Map");
function Ao() {
  this.size = 0, this.__data__ = {
    hash: new X(),
    map: new (Wo || de)(),
    string: new X()
  };
}
function Fo(e) {
  var t = typeof e;
  return t == "string" || t == "number" || t == "symbol" || t == "boolean" ? e !== "__proto__" : e === null;
}
function We(e, t) {
  var n = e.__data__;
  return Fo(t) ? n[typeof t == "string" ? "string" : "hash"] : n.map;
}
function Bo(e) {
  var t = We(this, e).delete(e);
  return this.size -= t ? 1 : 0, t;
}
function Ro(e) {
  return We(this, e).get(e);
}
function Uo(e) {
  return We(this, e).has(e);
}
function Ho(e, t) {
  var n = We(this, e), o = n.size;
  return n.set(e, t), this.size += n.size == o ? 0 : 1, this;
}
function te(e) {
  var t = -1, n = e == null ? 0 : e.length;
  for (this.clear(); ++t < n; ) {
    var o = e[t];
    this.set(o[0], o[1]);
  }
}
te.prototype.clear = Ao;
te.prototype.delete = Bo;
te.prototype.get = Ro;
te.prototype.has = Uo;
te.prototype.set = Ho;
var Vo = "Expected a function";
function ot(e, t) {
  if (typeof e != "function" || t != null && typeof t != "function")
    throw new TypeError(Vo);
  var n = function() {
    var o = arguments, s = t ? t.apply(this, o) : o[0], l = n.cache;
    if (l.has(s))
      return l.get(s);
    var r = e.apply(this, o);
    return n.cache = l.set(s, r) || l, r;
  };
  return n.cache = new (ot.Cache || te)(), n;
}
ot.Cache = te;
var Go = 500;
function Zo(e) {
  var t = ot(e, function(o) {
    return n.size === Go && n.clear(), o;
  }), n = t.cache;
  return t;
}
var Ko = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g, Jo = /\\(\\)?/g, qo = Zo(function(e) {
  var t = [];
  return e.charCodeAt(0) === 46 && t.push(""), e.replace(Ko, function(n, o, s, l) {
    t.push(s ? l.replace(Jo, "$1") : o || n);
  }), t;
});
function Qo(e) {
  return e == null ? "" : Vt(e);
}
function Yo(e, t) {
  return nt(e) ? e : vo(e, t) ? [e] : qo(Qo(e));
}
function Xo(e) {
  if (typeof e == "string" || tt(e))
    return e;
  var t = e + "";
  return t == "0" && 1 / e == -1 / 0 ? "-0" : t;
}
function es(e, t) {
  t = Yo(t, e);
  for (var n = 0, o = t.length; e != null && n < o; )
    e = e[Xo(t[n++])];
  return n && n == o ? e : void 0;
}
function ts(e, t, n) {
  var o = e == null ? void 0 : es(e, t);
  return o === void 0 ? n : o;
}
function ns(e) {
  for (var t = -1, n = e == null ? 0 : e.length, o = {}; ++t < n; ) {
    var s = e[t];
    o[s[0]] = s[1];
  }
  return o;
}
const Kt = (e) => e === void 0, _t = (e) => typeof e == "boolean", ee = (e) => typeof e == "number", Ge = (e) => typeof Element > "u" ? !1 : e instanceof Element, os = (e) => Y(e) ? !Number.isNaN(Number(e)) : !1;
var yt;
const ne = typeof window < "u", ss = (e) => typeof e == "string", is = () => {
};
ne && ((yt = window?.navigator) != null && yt.userAgent) && /iP(ad|hone|od)/.test(window.navigator.userAgent);
function st(e) {
  return typeof e == "function" ? e() : i(e);
}
function as(e) {
  return e;
}
function it(e) {
  return yn() ? (vn(e), !0) : !1;
}
function rs(e, t = !0) {
  ae() ? Ee(e) : t ? e() : xt(e);
}
function Jt(e, t, n = {}) {
  const {
    immediate: o = !0
  } = n, s = z(!1);
  let l = null;
  function r() {
    l && (clearTimeout(l), l = null);
  }
  function d() {
    s.value = !1, r();
  }
  function p(..._) {
    r(), s.value = !0, l = setTimeout(() => {
      s.value = !1, l = null, e(..._);
    }, st(t));
  }
  return o && (s.value = !0, ne && p()), it(d), {
    isPending: _n(s),
    start: p,
    stop: d
  };
}
function qt(e) {
  var t;
  const n = st(e);
  return (t = n?.$el) != null ? t : n;
}
const Qt = ne ? window : void 0;
function Yt(...e) {
  let t, n, o, s;
  if (ss(e[0]) || Array.isArray(e[0]) ? ([n, o, s] = e, t = Qt) : [t, n, o, s] = e, !t)
    return is;
  Array.isArray(n) || (n = [n]), Array.isArray(o) || (o = [o]);
  const l = [], r = () => {
    l.forEach((m) => m()), l.length = 0;
  }, d = (m, k, $, N) => (m.addEventListener(k, $, N), () => m.removeEventListener(k, $, N)), p = be(() => [qt(t), st(s)], ([m, k]) => {
    r(), m && l.push(...n.flatMap(($) => o.map((N) => d(m, $, N, k))));
  }, { immediate: !0, flush: "post" }), _ = () => {
    p(), r();
  };
  return it(_), _;
}
function ls(e, t = !1) {
  const n = z(), o = () => n.value = !!e();
  return o(), rs(o, t), n;
}
const vt = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {}, wt = "__vueuse_ssr_handlers__";
vt[wt] = vt[wt] || {};
var bt = Object.getOwnPropertySymbols, cs = Object.prototype.hasOwnProperty, us = Object.prototype.propertyIsEnumerable, ds = (e, t) => {
  var n = {};
  for (var o in e)
    cs.call(e, o) && t.indexOf(o) < 0 && (n[o] = e[o]);
  if (e != null && bt)
    for (var o of bt(e))
      t.indexOf(o) < 0 && us.call(e, o) && (n[o] = e[o]);
  return n;
};
function hs(e, t, n = {}) {
  const o = n, { window: s = Qt } = o, l = ds(o, ["window"]);
  let r;
  const d = ls(() => s && "ResizeObserver" in s), p = () => {
    r && (r.disconnect(), r = void 0);
  }, _ = be(() => qt(e), (k) => {
    p(), d.value && s && k && (r = new ResizeObserver(t), r.observe(k, l));
  }, { immediate: !0, flush: "post" }), m = () => {
    p(), _();
  };
  return it(m), {
    isSupported: d,
    stop: m
  };
}
var kt;
(function(e) {
  e.UP = "UP", e.RIGHT = "RIGHT", e.DOWN = "DOWN", e.LEFT = "LEFT", e.NONE = "NONE";
})(kt || (kt = {}));
var fs = Object.defineProperty, Ct = Object.getOwnPropertySymbols, ps = Object.prototype.hasOwnProperty, gs = Object.prototype.propertyIsEnumerable, St = (e, t, n) => t in e ? fs(e, t, { enumerable: !0, configurable: !0, writable: !0, value: n }) : e[t] = n, ms = (e, t) => {
  for (var n in t || (t = {}))
    ps.call(t, n) && St(e, n, t[n]);
  if (Ct)
    for (var n of Ct(t))
      gs.call(t, n) && St(e, n, t[n]);
  return e;
};
const _s = {
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
ms({
  linear: as
}, _s);
const Lt = {
  current: 0
}, Mt = z(0), Xt = 2e3, Ot = Symbol("elZIndexContextKey"), en = Symbol("zIndexContextKey"), ys = (e) => {
  const t = ae() ? q(Ot, Lt) : Lt, n = e || (ae() ? q(en, void 0) : void 0), o = b(() => {
    const r = i(n);
    return ee(r) ? r : Xt;
  }), s = b(() => o.value + Mt.value), l = () => (t.current++, Mt.value = t.current, s.value);
  return !ne && q(Ot), {
    initialZIndex: o,
    currentZIndex: s,
    nextZIndex: l
  };
};
var vs = {
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
const ws = (e) => (t, n) => bs(t, n, i(e)), bs = (e, t, n) => ts(n, e, e).replace(/\{(\w+)\}/g, (o, s) => {
  var l;
  return `${(l = t?.[s]) != null ? l : `{${s}}`}`;
}), ks = (e) => {
  const t = b(() => i(e).name), n = wn(e) ? e : z(e);
  return {
    lang: t,
    locale: n,
    t: ws(e)
  };
}, tn = Symbol("localeContextKey"), Cs = (e) => {
  const t = e || q(tn, z());
  return ks(b(() => t.value || vs));
}, nn = "__epPropKey", E = (e) => e, Ss = (e) => Rt(e) && !!e[nn], on = (e, t) => {
  if (!Rt(e) || Ss(e))
    return e;
  const { values: n, required: o, default: s, type: l, validator: r } = e, p = {
    type: l,
    required: !!o,
    validator: n || r ? (_) => {
      let m = !1, k = [];
      if (n && (k = Array.from(n), ht(e, "default") && k.push(s), m || (m = k.includes(_))), r && (m || (m = r(_))), !m && k.length > 0) {
        const $ = [...new Set(k)].map((N) => JSON.stringify(N)).join(", ");
        bn(`Invalid prop: validation failed${t ? ` for prop "${t}"` : ""}. Expected one of [${$}], got value ${JSON.stringify(_)}.`);
      }
      return m;
    } : void 0,
    [nn]: !0
  };
  return ht(e, "default") && (p.default = s), p;
}, he = (e) => ns(Object.entries(e).map(([t, n]) => [
  t,
  on(n, t)
])), Ls = ["", "default", "small", "large"], Ms = on({
  type: String,
  values: Ls,
  required: !1
}), Os = Symbol("size"), zs = Symbol("emptyValuesContextKey"), Ts = he({
  emptyValues: Array,
  valueOnClear: {
    type: [String, Number, Boolean, Function],
    default: void 0,
    validator: (e) => ve(e) ? !e() : !e
  }
}), zt = (e) => Object.keys(e), je = z();
function sn(e, t = void 0) {
  return ae() ? q(Ft, je) : je;
}
function an(e, t) {
  const n = sn(), o = Xe(e, b(() => {
    var d;
    return ((d = n.value) == null ? void 0 : d.namespace) || Le;
  })), s = Cs(b(() => {
    var d;
    return (d = n.value) == null ? void 0 : d.locale;
  })), l = ys(b(() => {
    var d;
    return ((d = n.value) == null ? void 0 : d.zIndex) || Xt;
  })), r = b(() => {
    var d;
    return i(t) || ((d = n.value) == null ? void 0 : d.size) || "";
  });
  return rn(b(() => i(n) || {})), {
    ns: o,
    locale: s,
    zIndex: l,
    size: r
  };
}
const rn = (e, t, n = !1) => {
  var o;
  const s = !!ae(), l = s ? sn() : void 0, r = (o = void 0) != null ? o : s ? kn : void 0;
  if (!r)
    return;
  const d = b(() => {
    const p = i(e);
    return l?.value ? Is(l.value, p) : p;
  });
  return r(Ft, d), r(tn, b(() => d.value.locale)), r(Bt, b(() => d.value.namespace)), r(en, b(() => d.value.zIndex)), r(Os, {
    size: b(() => d.value.size || "")
  }), r(zs, b(() => ({
    emptyValues: d.value.emptyValues,
    valueOnClear: d.value.valueOnClear
  }))), (n || !je.value) && (je.value = d.value), d;
}, Is = (e, t) => {
  const n = [.../* @__PURE__ */ new Set([...zt(e), ...zt(t)])], o = {};
  for (const s of n)
    o[s] = t[s] !== void 0 ? t[s] : e[s];
  return o;
};
var Ae = (e, t) => {
  const n = e.__vccOpts || e;
  for (const [o, s] of t)
    n[o] = s;
  return n;
};
function Ze(e, t = "px") {
  if (!e)
    return "";
  if (ee(e) || os(e))
    return `${e}${t}`;
  if (Y(e))
    return e;
}
const ln = (e, t) => (e.install = (n) => {
  for (const o of [e, ...Object.values({})])
    n.component(o.name, o);
}, e), cn = (e, t) => (e.install = (n) => {
  e._context = n._context, n.config.globalProperties[t] = e;
}, e), $s = he({
  size: {
    type: E([Number, String])
  },
  color: {
    type: String
  }
}), js = x({
  name: "ElIcon",
  inheritAttrs: !1
}), Ns = /* @__PURE__ */ x({
  ...js,
  props: $s,
  setup(e) {
    const t = e, n = Xe("icon"), o = b(() => {
      const { size: s, color: l } = t;
      return !s && !l ? {} : {
        fontSize: Kt(s) ? void 0 : Ze(s),
        "--color": l
      };
    });
    return (s, l) => (v(), L("i", Cn({
      class: i(n).b(),
      style: i(o)
    }, s.$attrs), [
      re(s.$slots, "default")
    ], 16));
  }
});
var xs = /* @__PURE__ */ Ae(Ns, [["__file", "icon.vue"]]);
const Ne = ln(xs);
/*! Element Plus Icons Vue v2.3.1 */
var Ds = /* @__PURE__ */ x({
  name: "CircleCloseFilled",
  __name: "circle-close-filled",
  setup(e) {
    return (t, n) => (v(), L("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 1024 1024"
    }, [
      a("path", {
        fill: "currentColor",
        d: "M512 64a448 448 0 1 1 0 896 448 448 0 0 1 0-896m0 393.664L407.936 353.6a38.4 38.4 0 1 0-54.336 54.336L457.664 512 353.6 616.064a38.4 38.4 0 1 0 54.336 54.336L512 566.336 616.064 670.4a38.4 38.4 0 1 0 54.336-54.336L566.336 512 670.4 407.936a38.4 38.4 0 1 0-54.336-54.336z"
      })
    ]));
  }
}), Es = Ds, Ps = /* @__PURE__ */ x({
  name: "Close",
  __name: "close",
  setup(e) {
    return (t, n) => (v(), L("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 1024 1024"
    }, [
      a("path", {
        fill: "currentColor",
        d: "M764.288 214.592 512 466.88 259.712 214.592a31.936 31.936 0 0 0-45.12 45.12L466.752 512 214.528 764.224a31.936 31.936 0 1 0 45.12 45.184L512 557.184l252.288 252.288a31.936 31.936 0 0 0 45.12-45.12L557.12 512.064l252.288-252.352a31.936 31.936 0 1 0-45.12-45.184z"
      })
    ]));
  }
}), un = Ps, Ws = /* @__PURE__ */ x({
  name: "InfoFilled",
  __name: "info-filled",
  setup(e) {
    return (t, n) => (v(), L("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 1024 1024"
    }, [
      a("path", {
        fill: "currentColor",
        d: "M512 64a448 448 0 1 1 0 896.064A448 448 0 0 1 512 64m67.2 275.072c33.28 0 60.288-23.104 60.288-57.344s-27.072-57.344-60.288-57.344c-33.28 0-60.16 23.104-60.16 57.344s26.88 57.344 60.16 57.344M590.912 699.2c0-6.848 2.368-24.64 1.024-34.752l-52.608 60.544c-10.88 11.456-24.512 19.392-30.912 17.28a12.992 12.992 0 0 1-8.256-14.72l87.68-276.992c7.168-35.136-12.544-67.2-54.336-71.296-44.096 0-108.992 44.736-148.48 101.504 0 6.784-1.28 23.68.064 33.792l52.544-60.608c10.88-11.328 23.552-19.328 29.952-17.152a12.8 12.8 0 0 1 7.808 16.128L388.48 728.576c-10.048 32.256 8.96 63.872 55.04 71.04 67.84 0 107.904-43.648 147.456-100.416z"
      })
    ]));
  }
}), As = Ws, Fs = /* @__PURE__ */ x({
  name: "SuccessFilled",
  __name: "success-filled",
  setup(e) {
    return (t, n) => (v(), L("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 1024 1024"
    }, [
      a("path", {
        fill: "currentColor",
        d: "M512 64a448 448 0 1 1 0 896 448 448 0 0 1 0-896m-55.808 536.384-99.52-99.584a38.4 38.4 0 1 0-54.336 54.336l126.72 126.72a38.272 38.272 0 0 0 54.336 0l262.4-262.464a38.4 38.4 0 1 0-54.272-54.336z"
      })
    ]));
  }
}), Bs = Fs, Rs = /* @__PURE__ */ x({
  name: "WarningFilled",
  __name: "warning-filled",
  setup(e) {
    return (t, n) => (v(), L("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 1024 1024"
    }, [
      a("path", {
        fill: "currentColor",
        d: "M512 64a448 448 0 1 1 0 896 448 448 0 0 1 0-896m0 192a58.432 58.432 0 0 0-58.24 63.744l23.36 256.384a35.072 35.072 0 0 0 69.76 0l23.296-256.384A58.432 58.432 0 0 0 512 256m0 512a51.2 51.2 0 1 0 0-102.4 51.2 51.2 0 0 0 0 102.4"
      })
    ]));
  }
}), Us = Rs;
const dn = E([
  String,
  Object,
  Function
]), Hs = {
  Close: un
}, Vs = {
  Close: un
}, xe = {
  success: Bs,
  warning: Us,
  error: Es,
  info: As
}, Gs = (e) => e, Me = {
  esc: "Escape",
  delete: "Delete",
  backspace: "Backspace"
}, Zs = he({
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
    type: E([String, Object, Array])
  },
  offset: {
    type: E(Array),
    default: [0, 0]
  },
  badgeClass: {
    type: String
  }
}), Ks = x({
  name: "ElBadge"
}), Js = /* @__PURE__ */ x({
  ...Ks,
  props: Zs,
  setup(e, { expose: t }) {
    const n = e, o = Xe("badge"), s = b(() => n.isDot ? "" : ee(n.value) && ee(n.max) ? n.max < n.value ? `${n.max}+` : `${n.value}` : `${n.value}`), l = b(() => {
      var r, d, p, _, m;
      return [
        {
          backgroundColor: n.color,
          marginRight: Ze(-((d = (r = n.offset) == null ? void 0 : r[0]) != null ? d : 0)),
          marginTop: Ze((_ = (p = n.offset) == null ? void 0 : p[1]) != null ? _ : 0)
        },
        (m = n.badgeStyle) != null ? m : {}
      ];
    });
    return t({
      content: s
    }), (r, d) => (v(), L("div", {
      class: I(i(o).b())
    }, [
      re(r.$slots, "default"),
      h(Je, {
        name: `${i(o).namespace.value}-zoom-in-center`,
        persisted: ""
      }, {
        default: Q(() => [
          P(a("sup", {
            class: I([
              i(o).e("content"),
              i(o).em("content", r.type),
              i(o).is("fixed", !!r.$slots.default),
              i(o).is("dot", r.isDot),
              i(o).is("hide-zero", !r.showZero && n.value === 0),
              r.badgeClass
            ]),
            style: ze(i(l))
          }, [
            re(r.$slots, "content", { value: i(s) }, () => [
              J(f(i(s)), 1)
            ])
          ], 6), [
            [Te, !r.hidden && (i(s) || r.isDot || r.$slots.content)]
          ])
        ]),
        _: 3
      }, 8, ["name"])
    ], 2));
  }
});
var qs = /* @__PURE__ */ Ae(Js, [["__file", "badge.vue"]]);
const Qs = ln(qs), Ys = he({
  a11y: {
    type: Boolean,
    default: !0
  },
  locale: {
    type: E(Object)
  },
  size: Ms,
  button: {
    type: E(Object)
  },
  experimentalFeatures: {
    type: E(Object)
  },
  keyboardNavigation: {
    type: Boolean,
    default: !0
  },
  message: {
    type: E(Object)
  },
  zIndex: Number,
  namespace: {
    type: String,
    default: "el"
  },
  ...Ts
}), A = {};
x({
  name: "ElConfigProvider",
  props: Ys,
  setup(e, { slots: t }) {
    be(() => e.message, (o) => {
      Object.assign(A, o ?? {});
    }, { immediate: !0, deep: !0 });
    const n = rn(e);
    return () => re(t, "default", { config: n?.value });
  }
});
const hn = ["success", "info", "warning", "error"], j = Gs({
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
  appendTo: ne ? document.body : void 0
}), Xs = he({
  customClass: {
    type: String,
    default: j.customClass
  },
  center: {
    type: Boolean,
    default: j.center
  },
  dangerouslyUseHTMLString: {
    type: Boolean,
    default: j.dangerouslyUseHTMLString
  },
  duration: {
    type: Number,
    default: j.duration
  },
  icon: {
    type: dn,
    default: j.icon
  },
  id: {
    type: String,
    default: j.id
  },
  message: {
    type: E([
      String,
      Object,
      Function
    ]),
    default: j.message
  },
  onClose: {
    type: E(Function),
    default: j.onClose
  },
  showClose: {
    type: Boolean,
    default: j.showClose
  },
  type: {
    type: String,
    values: hn,
    default: j.type
  },
  plain: {
    type: Boolean,
    default: j.plain
  },
  offset: {
    type: Number,
    default: j.offset
  },
  zIndex: {
    type: Number,
    default: j.zIndex
  },
  grouping: {
    type: Boolean,
    default: j.grouping
  },
  repeatNum: {
    type: Number,
    default: j.repeatNum
  }
}), ei = {
  destroy: () => !0
}, B = Sn([]), ti = (e) => {
  const t = B.findIndex((s) => s.id === e), n = B[t];
  let o;
  return t > 0 && (o = B[t - 1]), { current: n, prev: o };
}, ni = (e) => {
  const { prev: t } = ti(e);
  return t ? t.vm.exposed.bottom.value : 0;
}, oi = (e, t) => B.findIndex((o) => o.id === e) > 0 ? 16 : t, si = x({
  name: "ElMessage"
}), ii = /* @__PURE__ */ x({
  ...si,
  props: Xs,
  emits: ei,
  setup(e, { expose: t }) {
    const n = e, { Close: o } = Vs, { ns: s, zIndex: l } = an("message"), { currentZIndex: r, nextZIndex: d } = l, p = z(), _ = z(!1), m = z(0);
    let k;
    const $ = b(() => n.type ? n.type === "error" ? "danger" : n.type : "info"), N = b(() => {
      const M = n.type;
      return { [s.bm("icon", M)]: M && xe[M] };
    }), R = b(() => n.icon || xe[n.type] || ""), g = b(() => ni(n.id)), y = b(() => oi(n.id, n.offset) + g.value), O = b(() => m.value + y.value), V = b(() => ({
      top: `${y.value}px`,
      zIndex: r.value
    }));
    function C() {
      n.duration !== 0 && ({ stop: k } = Jt(() => {
        U();
      }, n.duration));
    }
    function oe() {
      k?.();
    }
    function U() {
      _.value = !1;
    }
    function Fe({ code: M }) {
      M === Me.esc && U();
    }
    return Ee(() => {
      C(), d(), _.value = !0;
    }), be(() => n.repeatNum, () => {
      oe(), C();
    }), Yt(document, "keydown", Fe), hs(p, () => {
      m.value = p.value.getBoundingClientRect().height;
    }), t({
      visible: _,
      bottom: O,
      close: U
    }), (M, u) => (v(), F(Je, {
      name: i(s).b("fade"),
      onBeforeLeave: M.onClose,
      onAfterLeave: (w) => M.$emit("destroy"),
      persisted: ""
    }, {
      default: Q(() => [
        P(a("div", {
          id: M.id,
          ref_key: "messageRef",
          ref: p,
          class: I([
            i(s).b(),
            { [i(s).m(M.type)]: M.type },
            i(s).is("center", M.center),
            i(s).is("closable", M.showClose),
            i(s).is("plain", M.plain),
            M.customClass
          ]),
          style: ze(i(V)),
          role: "alert",
          onMouseenter: oe,
          onMouseleave: C
        }, [
          M.repeatNum > 1 ? (v(), F(i(Qs), {
            key: 0,
            value: M.repeatNum,
            type: i($),
            class: I(i(s).e("badge"))
          }, null, 8, ["value", "type", "class"])) : S("v-if", !0),
          i(R) ? (v(), F(i(Ne), {
            key: 1,
            class: I([i(s).e("icon"), i(N)])
          }, {
            default: Q(() => [
              (v(), F(Dt(i(R))))
            ]),
            _: 1
          }, 8, ["class"])) : S("v-if", !0),
          re(M.$slots, "default", {}, () => [
            M.dangerouslyUseHTMLString ? (v(), L(qe, { key: 1 }, [
              S(" Caution here, message could've been compromised, never use user's input as message "),
              a("p", {
                class: I(i(s).e("content")),
                innerHTML: M.message
              }, null, 10, ["innerHTML"])
            ], 2112)) : (v(), L("p", {
              key: 0,
              class: I(i(s).e("content"))
            }, f(M.message), 3))
          ]),
          M.showClose ? (v(), F(i(Ne), {
            key: 2,
            class: I(i(s).e("closeBtn")),
            onClick: Qe(U, ["stop"])
          }, {
            default: Q(() => [
              h(i(o))
            ]),
            _: 1
          }, 8, ["class", "onClick"])) : S("v-if", !0)
        ], 46, ["id"]), [
          [Te, _.value]
        ])
      ]),
      _: 3
    }, 8, ["name", "onBeforeLeave", "onAfterLeave"]));
  }
});
var ai = /* @__PURE__ */ Ae(ii, [["__file", "message.vue"]]);
let ri = 1;
const fn = (e) => {
  const t = !e || Y(e) || ye(e) || ve(e) ? { message: e } : e, n = {
    ...j,
    ...t
  };
  if (!n.appendTo)
    n.appendTo = document.body;
  else if (Y(n.appendTo)) {
    let o = document.querySelector(n.appendTo);
    Ge(o) || (o = document.body), n.appendTo = o;
  }
  return _t(A.grouping) && !n.grouping && (n.grouping = A.grouping), ee(A.duration) && n.duration === 3e3 && (n.duration = A.duration), ee(A.offset) && n.offset === 16 && (n.offset = A.offset), _t(A.showClose) && !n.showClose && (n.showClose = A.showClose), n;
}, li = (e) => {
  const t = B.indexOf(e);
  if (t === -1)
    return;
  B.splice(t, 1);
  const { handler: n } = e;
  n.close();
}, ci = ({ appendTo: e, ...t }, n) => {
  const o = `message_${ri++}`, s = t.onClose, l = document.createElement("div"), r = {
    ...t,
    id: o,
    onClose: () => {
      s?.(), li(m);
    },
    onDestroy: () => {
      Ie(null, l);
    }
  }, d = h(ai, r, ve(r.message) || ye(r.message) ? {
    default: ve(r.message) ? r.message : () => r.message
  } : null);
  d.appContext = n || ce._context, Ie(d, l), e.appendChild(l.firstElementChild);
  const p = d.component, m = {
    id: o,
    vnode: d,
    vm: p,
    handler: {
      close: () => {
        p.exposed.visible.value = !1;
      }
    },
    props: d.component.props
  };
  return m;
}, ce = (e = {}, t) => {
  if (!ne)
    return { close: () => {
    } };
  const n = fn(e);
  if (n.grouping && B.length) {
    const s = B.find(({ vnode: l }) => {
      var r;
      return ((r = l.props) == null ? void 0 : r.message) === n.message;
    });
    if (s)
      return s.props.repeatNum += 1, s.props.type = n.type, s.handler;
  }
  if (ee(A.max) && B.length >= A.max)
    return { close: () => {
    } };
  const o = ci(n, t);
  return B.push(o), o.handler;
};
hn.forEach((e) => {
  ce[e] = (t = {}, n) => {
    const o = fn(t);
    return ce({ ...o, type: e }, n);
  };
});
function ui(e) {
  for (const t of B)
    (!e || e === t.props.type) && t.handler.close();
}
ce.closeAll = ui;
ce._context = null;
const di = cn(ce, "$message"), pn = [
  "success",
  "info",
  "warning",
  "error"
], hi = he({
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
    type: dn
  },
  id: {
    type: String,
    default: ""
  },
  message: {
    type: E([
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
    type: E(Function),
    default: () => {
    }
  },
  onClose: {
    type: E(Function),
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
    values: [...pn, ""],
    default: ""
  },
  zIndex: Number
}), fi = {
  destroy: () => !0
}, pi = x({
  name: "ElNotification"
}), gi = /* @__PURE__ */ x({
  ...pi,
  props: hi,
  emits: fi,
  setup(e, { expose: t }) {
    const n = e, { ns: o, zIndex: s } = an("notification"), { nextZIndex: l, currentZIndex: r } = s, { Close: d } = Hs, p = z(!1);
    let _;
    const m = b(() => {
      const C = n.type;
      return C && xe[n.type] ? o.m(C) : "";
    }), k = b(() => n.type && xe[n.type] || n.icon), $ = b(() => n.position.endsWith("right") ? "right" : "left"), N = b(() => n.position.startsWith("top") ? "top" : "bottom"), R = b(() => {
      var C;
      return {
        [N.value]: `${n.offset}px`,
        zIndex: (C = n.zIndex) != null ? C : r.value
      };
    });
    function g() {
      n.duration > 0 && ({ stop: _ } = Jt(() => {
        p.value && O();
      }, n.duration));
    }
    function y() {
      _?.();
    }
    function O() {
      p.value = !1;
    }
    function V({ code: C }) {
      C === Me.delete || C === Me.backspace ? y() : C === Me.esc ? p.value && O() : g();
    }
    return Ee(() => {
      g(), l(), p.value = !0;
    }), Yt(document, "keydown", V), t({
      visible: p,
      close: O
    }), (C, oe) => (v(), F(Je, {
      name: i(o).b("fade"),
      onBeforeLeave: C.onClose,
      onAfterLeave: (U) => C.$emit("destroy"),
      persisted: ""
    }, {
      default: Q(() => [
        P(a("div", {
          id: C.id,
          class: I([i(o).b(), C.customClass, i($)]),
          style: ze(i(R)),
          role: "alert",
          onMouseenter: y,
          onMouseleave: g,
          onClick: C.onClick
        }, [
          i(k) ? (v(), F(i(Ne), {
            key: 0,
            class: I([i(o).e("icon"), i(m)])
          }, {
            default: Q(() => [
              (v(), F(Dt(i(k))))
            ]),
            _: 1
          }, 8, ["class"])) : S("v-if", !0),
          a("div", {
            class: I(i(o).e("group"))
          }, [
            a("h2", {
              class: I(i(o).e("title")),
              textContent: f(C.title)
            }, null, 10, ["textContent"]),
            P(a("div", {
              class: I(i(o).e("content")),
              style: ze(C.title ? void 0 : { margin: 0 })
            }, [
              re(C.$slots, "default", {}, () => [
                C.dangerouslyUseHTMLString ? (v(), L(qe, { key: 1 }, [
                  S(" Caution here, message could've been compromised, never use user's input as message "),
                  a("p", { innerHTML: C.message }, null, 8, ["innerHTML"])
                ], 2112)) : (v(), L("p", { key: 0 }, f(C.message), 1))
              ])
            ], 6), [
              [Te, C.message]
            ]),
            C.showClose ? (v(), F(i(Ne), {
              key: 0,
              class: I(i(o).e("closeBtn")),
              onClick: Qe(O, ["stop"])
            }, {
              default: Q(() => [
                h(i(d))
              ]),
              _: 1
            }, 8, ["class", "onClick"])) : S("v-if", !0)
          ], 2)
        ], 46, ["id", "onClick"]), [
          [Te, p.value]
        ])
      ]),
      _: 3
    }, 8, ["name", "onBeforeLeave", "onAfterLeave"]));
  }
});
var mi = /* @__PURE__ */ Ae(gi, [["__file", "notification.vue"]]);
const De = {
  "top-left": [],
  "top-right": [],
  "bottom-left": [],
  "bottom-right": []
}, Ke = 16;
let _i = 1;
const ue = function(e = {}, t) {
  if (!ne)
    return { close: () => {
    } };
  (Y(e) || ye(e)) && (e = { message: e });
  const n = e.position || "top-right";
  let o = e.offset || 0;
  De[n].forEach(({ vm: m }) => {
    var k;
    o += (((k = m.el) == null ? void 0 : k.offsetHeight) || 0) + Ke;
  }), o += Ke;
  const s = `notification_${_i++}`, l = e.onClose, r = {
    ...e,
    offset: o,
    id: s,
    onClose: () => {
      yi(s, n, l);
    }
  };
  let d = document.body;
  Ge(e.appendTo) ? d = e.appendTo : Y(e.appendTo) && (d = document.querySelector(e.appendTo)), Ge(d) || (d = document.body);
  const p = document.createElement("div"), _ = h(mi, r, ve(r.message) ? r.message : ye(r.message) ? () => r.message : null);
  return _.appContext = Kt(t) ? ue._context : t, _.props.onDestroy = () => {
    Ie(null, p);
  }, Ie(_, p), De[n].push({ vm: _ }), d.appendChild(p.firstElementChild), {
    close: () => {
      _.component.exposed.visible.value = !1;
    }
  };
};
pn.forEach((e) => {
  ue[e] = (t = {}, n) => ((Y(t) || ye(t)) && (t = {
    message: t
  }), ue({ ...t, type: e }, n));
});
function yi(e, t, n) {
  const o = De[t], s = o.findIndex(({ vm: _ }) => {
    var m;
    return ((m = _.component) == null ? void 0 : m.props.id) === e;
  });
  if (s === -1)
    return;
  const { vm: l } = o[s];
  if (!l)
    return;
  n?.(l);
  const r = l.el.offsetHeight, d = t.split("-")[0];
  o.splice(s, 1);
  const p = o.length;
  if (!(p < 1))
    for (let _ = s; _ < p; _++) {
      const { el: m, component: k } = o[_].vm, $ = Number.parseInt(m.style[d], 10) - r - Ke;
      k.props.offset = $;
    }
}
function vi() {
  for (const e of Object.values(De))
    e.forEach(({ vm: t }) => {
      t.component.exposed.visible.value = !1;
    });
}
ue.closeAll = vi;
ue._context = null;
const wi = cn(ue, "$notify"), pe = {
  /**
   * 显示消息提示（简化版）
   * @param message 消息内容
   * @param type 消息类型，默认 success
   * @param position 显示位置，默认 center
   * @param duration 显示时长（毫秒），默认 3000
   */
  msg(e, t = "success", n = "center", o) {
    this.message({
      message: e,
      type: t,
      position: n,
      duration: o
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
      position: o = "center",
      duration: s = 3e3,
      showClose: l = !1
    } = e;
    o === "center" ? di({
      message: t,
      type: n,
      duration: s,
      showClose: l,
      grouping: !0,
      customClass: `app-toast app-toast--${n}`
    }) : wi({
      message: t,
      type: n,
      position: o,
      duration: s,
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
};
var bi = {
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
function ki() {
  return "icon-" + ((1 + Math.random()) * 4294967296 | 0).toString(16).substring(1);
}
function Ci(e, t, n) {
  var o = typeof t.fill == "string" ? [t.fill] : t.fill || [], s = [], l = t.theme || n.theme;
  switch (l) {
    case "outline":
      s.push(typeof o[0] == "string" ? o[0] : "currentColor"), s.push("none"), s.push(typeof o[0] == "string" ? o[0] : "currentColor"), s.push("none");
      break;
    case "filled":
      s.push(typeof o[0] == "string" ? o[0] : "currentColor"), s.push(typeof o[0] == "string" ? o[0] : "currentColor"), s.push("#FFF"), s.push("#FFF");
      break;
    case "two-tone":
      s.push(typeof o[0] == "string" ? o[0] : "currentColor"), s.push(typeof o[1] == "string" ? o[1] : n.colors.twoTone.twoTone), s.push(typeof o[0] == "string" ? o[0] : "currentColor"), s.push(typeof o[1] == "string" ? o[1] : n.colors.twoTone.twoTone);
      break;
    case "multi-color":
      s.push(typeof o[0] == "string" ? o[0] : "currentColor"), s.push(typeof o[1] == "string" ? o[1] : n.colors.multiColor.outFillColor), s.push(typeof o[2] == "string" ? o[2] : n.colors.multiColor.innerStrokeColor), s.push(typeof o[3] == "string" ? o[3] : n.colors.multiColor.innerFillColor);
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
var Si = Symbol("icon-context");
function H(e, t, n) {
  var o = {
    name: "icon-" + e,
    props: ["size", "strokeWidth", "strokeLinecap", "strokeLinejoin", "theme", "fill", "spin"],
    setup: function(l) {
      var r = ki(), d = q(Si, bi);
      return function() {
        var p = l.size, _ = l.strokeWidth, m = l.strokeLinecap, k = l.strokeLinejoin, $ = l.theme, N = l.fill, R = l.spin, g = Ci(r, {
          size: p,
          strokeWidth: _,
          strokeLinecap: m,
          strokeLinejoin: k,
          theme: $,
          fill: N
        }, d), y = [d.prefix + "-icon"];
        return y.push(d.prefix + "-icon-" + e), t && d.rtl && y.push(d.prefix + "-icon-rtl"), R && y.push(d.prefix + "-icon-spin"), h("span", {
          class: y.join(" ")
        }, [n(g)]);
      };
    }
  };
  return o;
}
const Li = H("close", !1, function(e) {
  return h("svg", {
    width: e.size,
    height: e.size,
    viewBox: "0 0 48 48",
    fill: "none"
  }, [h("path", {
    d: "M8 8L40 40",
    stroke: e.colors[0],
    "stroke-width": e.strokeWidth,
    "stroke-linecap": e.strokeLinecap,
    "stroke-linejoin": e.strokeLinejoin
  }, null), h("path", {
    d: "M8 40L40 8",
    stroke: e.colors[0],
    "stroke-width": e.strokeWidth,
    "stroke-linecap": e.strokeLinecap,
    "stroke-linejoin": e.strokeLinejoin
  }, null)]);
}), Mi = H("computer", !1, function(e) {
  return h("svg", {
    width: e.size,
    height: e.size,
    viewBox: "0 0 48 48",
    fill: "none"
  }, [h("rect", {
    x: "19",
    y: "32",
    width: "10",
    height: "9",
    stroke: e.colors[0],
    "stroke-width": e.strokeWidth,
    "stroke-linecap": e.strokeLinecap,
    "stroke-linejoin": e.strokeLinejoin
  }, null), h("rect", {
    x: "5",
    y: "8",
    width: "38",
    height: "24",
    rx: "2",
    fill: e.colors[1],
    stroke: e.colors[0],
    "stroke-width": e.strokeWidth
  }, null), h("path", {
    d: "M22 27H26",
    stroke: e.colors[2],
    "stroke-width": e.strokeWidth,
    "stroke-linecap": e.strokeLinecap,
    "stroke-linejoin": e.strokeLinejoin
  }, null), h("path", {
    d: "M14 41L34 41",
    stroke: e.colors[0],
    "stroke-width": e.strokeWidth,
    "stroke-linecap": e.strokeLinecap,
    "stroke-linejoin": e.strokeLinejoin
  }, null)]);
}), Oi = H("contrast", !0, function(e) {
  return h("svg", {
    width: e.size,
    height: e.size,
    viewBox: "0 0 48 48",
    fill: "none"
  }, [h("path", {
    d: "M24 44C35.0457 44 44 35.0457 44 24C44 12.9543 35.0457 4 24 4C12.9543 4 4 12.9543 4 24C4 35.0457 12.9543 44 24 44Z",
    fill: e.colors[1],
    stroke: e.colors[0],
    "stroke-width": e.strokeWidth,
    "stroke-linejoin": e.strokeLinejoin
  }, null), h("path", {
    d: "M24 36V12C17.3726 12 12 17.3726 12 24C12 30.6274 17.3726 36 24 36Z",
    fill: e.colors[3],
    stroke: e.colors[2],
    "stroke-width": e.strokeWidth,
    "stroke-linejoin": e.strokeLinejoin
  }, null)]);
}), zi = H("local", !1, function(e) {
  return h("svg", {
    width: e.size,
    height: e.size,
    viewBox: "0 0 48 48",
    fill: "none"
  }, [h("path", {
    d: "M9.85786 32.7574C6.23858 33.8432 4 35.3432 4 37C4 40.3137 12.9543 43 24 43C35.0457 43 44 40.3137 44 37C44 35.3432 41.7614 33.8432 38.1421 32.7574",
    stroke: e.colors[0],
    "stroke-width": e.strokeWidth,
    "stroke-linecap": e.strokeLinecap,
    "stroke-linejoin": e.strokeLinejoin
  }, null), h("path", {
    d: "M24 35C24 35 37 26.504 37 16.6818C37 9.67784 31.1797 4 24 4C16.8203 4 11 9.67784 11 16.6818C11 26.504 24 35 24 35Z",
    fill: e.colors[1],
    stroke: e.colors[0],
    "stroke-width": e.strokeWidth,
    "stroke-linejoin": e.strokeLinejoin
  }, null), h("path", {
    d: "M24 22C26.7614 22 29 19.7614 29 17C29 14.2386 26.7614 12 24 12C21.2386 12 19 14.2386 19 17C19 19.7614 21.2386 22 24 22Z",
    fill: e.colors[3],
    stroke: e.colors[2],
    "stroke-width": e.strokeWidth,
    "stroke-linejoin": e.strokeLinejoin
  }, null)]);
}), Tt = H("moon", !0, function(e) {
  return h("svg", {
    width: e.size,
    height: e.size,
    viewBox: "0 0 48 48",
    fill: "none"
  }, [h("path", {
    d: "M28.0527 4.41085C22.5828 5.83695 18.5455 10.8106 18.5455 16.7273C18.5455 23.7564 24.2436 29.4545 31.2727 29.4545C37.1894 29.4545 42.1631 25.4172 43.5891 19.9473C43.8585 21.256 44 22.6115 44 24C44 35.0457 35.0457 44 24 44C12.9543 44 4 35.0457 4 24C4 12.9543 12.9543 4 24 4C25.3885 4 26.744 4.14149 28.0527 4.41085Z",
    fill: e.colors[1],
    stroke: e.colors[0],
    "stroke-width": e.strokeWidth,
    "stroke-linejoin": e.strokeLinejoin
  }, null)]);
}), It = H("refresh", !0, function(e) {
  return h("svg", {
    width: e.size,
    height: e.size,
    viewBox: "0 0 48 48",
    fill: "none"
  }, [h("path", {
    d: "M42 8V24",
    stroke: e.colors[0],
    "stroke-width": e.strokeWidth,
    "stroke-linecap": e.strokeLinecap,
    "stroke-linejoin": e.strokeLinejoin
  }, null), h("path", {
    d: "M6 24L6 40",
    stroke: e.colors[0],
    "stroke-width": e.strokeWidth,
    "stroke-linecap": e.strokeLinecap,
    "stroke-linejoin": e.strokeLinejoin
  }, null), h("path", {
    d: "M42 24C42 14.0589 33.9411 6 24 6C18.9145 6 14.3216 8.10896 11.0481 11.5M6 24C6 33.9411 14.0589 42 24 42C28.8556 42 33.2622 40.0774 36.5 36.9519",
    stroke: e.colors[0],
    "stroke-width": e.strokeWidth,
    "stroke-linecap": e.strokeLinecap,
    "stroke-linejoin": e.strokeLinejoin
  }, null)]);
}), $t = H("sun", !1, function(e) {
  return h("svg", {
    width: e.size,
    height: e.size,
    viewBox: "0 0 48 48",
    fill: "none"
  }, [h("path", {
    d: "M9.15039 9.15088L11.3778 11.3783",
    stroke: e.colors[0],
    "stroke-width": e.strokeWidth,
    "stroke-linecap": e.strokeLinecap,
    "stroke-linejoin": e.strokeLinejoin
  }, null), h("path", {
    d: "M3 24H6.15",
    stroke: e.colors[0],
    "stroke-width": e.strokeWidth,
    "stroke-linecap": e.strokeLinecap,
    "stroke-linejoin": e.strokeLinejoin
  }, null), h("path", {
    d: "M9.15039 38.8495L11.3778 36.6221",
    stroke: e.colors[0],
    "stroke-width": e.strokeWidth,
    "stroke-linecap": e.strokeLinecap,
    "stroke-linejoin": e.strokeLinejoin
  }, null), h("path", {
    d: "M38.8495 38.8495L36.6221 36.6221",
    stroke: e.colors[0],
    "stroke-width": e.strokeWidth,
    "stroke-linecap": e.strokeLinecap,
    "stroke-linejoin": e.strokeLinejoin
  }, null), h("path", {
    d: "M44.9996 24H41.8496",
    stroke: e.colors[0],
    "stroke-width": e.strokeWidth,
    "stroke-linecap": e.strokeLinecap,
    "stroke-linejoin": e.strokeLinejoin
  }, null), h("path", {
    d: "M38.8495 9.15088L36.6221 11.3783",
    stroke: e.colors[0],
    "stroke-width": e.strokeWidth,
    "stroke-linecap": e.strokeLinecap,
    "stroke-linejoin": e.strokeLinejoin
  }, null), h("path", {
    d: "M24 3V6.15",
    stroke: e.colors[0],
    "stroke-width": e.strokeWidth,
    "stroke-linecap": e.strokeLinecap,
    "stroke-linejoin": e.strokeLinejoin
  }, null), h("path", {
    d: "M24 36C30.6274 36 36 30.6274 36 24C36 17.3726 30.6274 12 24 12C17.3726 12 12 17.3726 12 24C12 30.6274 17.3726 36 24 36Z",
    fill: e.colors[2],
    stroke: e.colors[0],
    "stroke-width": e.strokeWidth,
    "stroke-linejoin": e.strokeLinejoin
  }, null), h("path", {
    d: "M24 45.0001V41.8501",
    stroke: e.colors[0],
    "stroke-width": e.strokeWidth,
    "stroke-linecap": e.strokeLinecap,
    "stroke-linejoin": e.strokeLinejoin
  }, null)]);
}), jt = H("sunrise", !0, function(e) {
  return h("svg", {
    width: e.size,
    height: e.size,
    viewBox: "0 0 48 48",
    fill: "none"
  }, [h("path", {
    d: "M4 24H7",
    stroke: e.colors[0],
    "stroke-width": e.strokeWidth,
    "stroke-linecap": e.strokeLinecap,
    "stroke-linejoin": e.strokeLinejoin
  }, null), h("path", {
    d: "M10 10L12 12",
    stroke: e.colors[0],
    "stroke-width": e.strokeWidth,
    "stroke-linecap": e.strokeLinecap,
    "stroke-linejoin": e.strokeLinejoin
  }, null), h("path", {
    d: "M24 4V7",
    stroke: e.colors[0],
    "stroke-width": e.strokeWidth,
    "stroke-linecap": e.strokeLinecap,
    "stroke-linejoin": e.strokeLinejoin
  }, null), h("path", {
    d: "M14 24C14 18.4776 18.4776 14 24 14C29.5224 14 34 18.4776 34 24C34 27.3674 32.3357 30.3458 29.785 32.1578",
    stroke: e.colors[0],
    "stroke-width": e.strokeWidth,
    "stroke-linecap": e.strokeLinecap,
    "stroke-linejoin": e.strokeLinejoin
  }, null), h("path", {
    d: "M38 10L36 12",
    stroke: e.colors[0],
    "stroke-width": e.strokeWidth,
    "stroke-linecap": e.strokeLinecap,
    "stroke-linejoin": e.strokeLinejoin
  }, null), h("path", {
    d: "M44 24L41 24",
    stroke: e.colors[0],
    "stroke-width": e.strokeWidth,
    "stroke-linecap": e.strokeLinecap,
    "stroke-linejoin": e.strokeLinejoin
  }, null), h("path", {
    d: "M37.9814 37.982L36.3614 36.362",
    stroke: e.colors[0],
    "stroke-width": e.strokeWidth,
    "stroke-linecap": e.strokeLinecap,
    "stroke-linejoin": e.strokeLinejoin
  }, null), h("path", {
    d: "M23.4999 28C20.4999 28 14 28.2 14 31C14 33.8 18.6058 33.7908 20.9998 34C23 34.1747 26.4624 35.6879 25.9999 38C24.9998 43 8.99982 42 4.99994 42",
    stroke: e.colors[0],
    "stroke-width": e.strokeWidth,
    "stroke-linecap": e.strokeLinecap,
    "stroke-linejoin": e.strokeLinejoin
  }, null)]);
}), Ti = H("sunset", !1, function(e) {
  return h("svg", {
    width: e.size,
    height: e.size,
    viewBox: "0 0 48 48",
    fill: "none"
  }, [h("path", {
    d: "M19 8L33 34H5L19 8Z",
    fill: e.colors[1],
    stroke: e.colors[0],
    "stroke-width": e.strokeWidth,
    "stroke-linejoin": e.strokeLinejoin
  }, null), h("path", {
    d: "M29 26L34 20L43 34H32",
    stroke: e.colors[0],
    "stroke-width": e.strokeWidth,
    "stroke-linecap": e.strokeLinecap,
    "stroke-linejoin": e.strokeLinejoin
  }, null), h("path", {
    d: "M10 41L38 41",
    stroke: e.colors[0],
    "stroke-width": e.strokeWidth,
    "stroke-linecap": e.strokeLinecap,
    "stroke-linejoin": e.strokeLinejoin
  }, null), h("circle", {
    cx: "38",
    cy: "10",
    r: "3",
    fill: e.colors[1],
    stroke: e.colors[0],
    "stroke-width": e.strokeWidth
  }, null)]);
}), Nt = H("time", !0, function(e) {
  return h("svg", {
    width: e.size,
    height: e.size,
    viewBox: "0 0 48 48",
    fill: "none"
  }, [h("path", {
    d: "M24 44C35.0457 44 44 35.0457 44 24C44 12.9543 35.0457 4 24 4C12.9543 4 4 12.9543 4 24C4 35.0457 12.9543 44 24 44Z",
    fill: e.colors[1],
    stroke: e.colors[0],
    "stroke-width": e.strokeWidth,
    "stroke-linejoin": e.strokeLinejoin
  }, null), h("path", {
    d: "M24.0084 12.0001L24.0072 24.0089L32.4866 32.4883",
    stroke: e.colors[2],
    "stroke-width": e.strokeWidth,
    "stroke-linecap": e.strokeLinecap,
    "stroke-linejoin": e.strokeLinejoin
  }, null)]);
}), Ii = "snippets-code:developer-mode", gn = "snippets-code:frontend-diagnostics", $i = 240, ge = "[REDACTED]", Oe = (e) => e.replace(
  /("(?:[^"]*(?:token|password|secret|authorization)[^"]*)"\s*:\s*)("(?:\\.|[^"])*"|[^,\r\n}\]]+)/gi,
  `$1"${ge}"`
).replace(/\bBearer\s+[A-Za-z0-9._~+/=-]+/gi, `Bearer ${ge}`).replace(
  /\b(?:gh[pousr]_[A-Za-z0-9_]{12,}|github_pat_[A-Za-z0-9_]{12,})\b/g,
  ge
).replace(/(https?:\/\/)[^/\s@]+@/gi, `$1${ge}@`).replace(
  /([?&][^=&\s]*(?:token|password|secret|authorization)[^=&\s]*=)[^&\s]+/gi,
  `$1${ge}`
), mn = (e) => {
  if (e === void 0) return;
  if (typeof e == "string") return Oe(e);
  const t = /* @__PURE__ */ new WeakSet();
  try {
    return Oe(
      JSON.stringify(
        e,
        (n, o) => {
          if (o instanceof Error)
            return {
              name: o.name,
              message: o.message,
              stack: o.stack,
              cause: o.cause
            };
          if (typeof o == "bigint") return o.toString();
          if (typeof o == "object" && o !== null) {
            if (t.has(o)) return "[Circular]";
            t.add(o);
          }
          return o;
        },
        2
      )
    );
  } catch {
    return Oe(String(e));
  }
}, ji = () => {
  try {
    return globalThis.__TAURI_INTERNALS__?.metadata?.currentWindow?.label ?? "webview";
  } catch {
    return "webview";
  }
}, Ni = () => {
  if (typeof localStorage > "u") return [];
  try {
    const e = JSON.parse(localStorage.getItem(gn) || "[]");
    return Array.isArray(e) ? e : [];
  } catch {
    return [];
  }
}, at = () => {
  if (typeof localStorage > "u") return !1;
  try {
    return localStorage.getItem(Ii) === "true";
  } catch {
    return !1;
  }
}, xi = (e, t, n) => {
  if (!at() || typeof localStorage > "u") return;
  const o = Ni();
  o.push({
    timestamp: (/* @__PURE__ */ new Date()).toISOString(),
    level: e,
    windowLabel: ji(),
    message: Oe(t),
    data: mn(n)
  });
  try {
    localStorage.setItem(
      gn,
      JSON.stringify(o.slice(-$i))
    );
  } catch {
  }
}, Di = () => at(), Ei = (e) => e === "error" || at(), Ce = (e, t, n) => {
  xi(e, t, n), Ei(e) && c("frontend_log", {
    level: e,
    message: t,
    data: n === void 0 ? null : mn(n)
  }).catch(() => {
  });
}, G = {
  info: (e, t, ...n) => {
    Ce("info", e, t);
  },
  error: (e, t) => {
    Ce("error", e, t);
  },
  warn: (e, t) => {
    Ce("warn", e, t);
  },
  debug: (e, t) => {
    Di() && Ce("debug", e, t);
  }
}, Pi = {
  class: "title-bar fixed top-0 left-0 right-0 z-10 flex items-center justify-between px-3 py-2",
  "data-tauri-drag-region": ""
}, Wi = { class: "flex items-center gap-2" }, Ai = { class: "title-icon-wrap" }, Fi = { class: "m-0 text-base font-medium tracking-tight" }, Bi = { class: "content mx-auto max-w-xl px-4 pt-14 pb-4" }, Ri = { class: "section" }, Ui = { class: "section-title" }, Hi = { class: "mode-selector grid grid-cols-2 gap-2.5" }, Vi = { class: "mode-option block cursor-pointer h-full" }, Gi = { class: "mode-content mode-system" }, Zi = { class: "mode-icon-wrap" }, Ki = { class: "mode-body" }, Ji = { class: "mode-title" }, qi = { class: "mode-desc" }, Qi = { class: "mode-option block cursor-pointer h-full" }, Yi = { class: "mode-content mode-light" }, Xi = { class: "mode-icon-wrap" }, ea = { class: "mode-body" }, ta = { class: "mode-title" }, na = { class: "mode-desc" }, oa = { class: "mode-option block cursor-pointer h-full" }, sa = { class: "mode-content mode-dark" }, ia = { class: "mode-icon-wrap" }, aa = { class: "mode-body" }, ra = { class: "mode-title" }, la = { class: "mode-desc" }, ca = { class: "mode-option block cursor-pointer h-full" }, ua = { class: "mode-content mode-schedule" }, da = { class: "mode-icon-wrap" }, ha = { class: "mode-body" }, fa = { class: "mode-title" }, pa = { class: "mode-desc" }, ga = { class: "section" }, ma = { class: "status-card" }, _a = { class: "status-row" }, ya = { class: "status-label" }, va = {
  key: 0,
  class: "status-row"
}, wa = { class: "status-label" }, ba = {
  key: 1,
  class: "status-hint"
}, ka = { class: "section" }, Ca = { class: "section-title" }, Sa = { class: "mode-selector grid grid-cols-2 gap-2.5" }, La = { class: "mode-option block cursor-pointer h-full" }, Ma = { class: "schedule-type-card" }, Oa = { class: "schedule-type-title" }, za = { class: "schedule-type-desc" }, Ta = { class: "mode-option block cursor-pointer h-full" }, Ia = { class: "schedule-type-card" }, $a = { class: "schedule-type-title" }, ja = { class: "schedule-type-desc" }, Na = {
  key: 0,
  class: "section"
}, xa = { class: "section-title section-title-with-icon" }, Da = { class: "inset-card location-card" }, Ea = {
  key: 0,
  class: "loading-hint"
}, Pa = {
  key: 1,
  class: "location-info"
}, Wa = { class: "info-row" }, Aa = { class: "info-label" }, Fa = { class: "info-value" }, Ba = { class: "info-row" }, Ra = { class: "info-label" }, Ua = { class: "info-value" }, Ha = { class: "info-row" }, Va = { class: "info-label" }, Ga = { class: "info-value" }, Za = ["disabled"], Ka = {
  key: 1,
  class: "section"
}, Ja = { class: "section-title" }, qa = { class: "inset-card sun-times-card" }, Qa = { class: "sun-row" }, Ya = { class: "sun-info" }, Xa = { class: "sun-label" }, er = { class: "sun-value" }, tr = { class: "sun-row" }, nr = { class: "sun-info" }, or = { class: "sun-label" }, sr = { class: "sun-value" }, ir = { class: "sun-row sun-period" }, ar = { class: "sun-label" }, rr = {
  key: 2,
  class: "section"
}, lr = { class: "inset-card location-card" }, cr = { class: "info-row" }, ur = { class: "info-value" }, dr = {
  key: 0,
  class: "info-row"
}, hr = { class: "info-value" }, fr = {
  key: 1,
  class: "info-row"
}, pr = { class: "info-value" }, gr = {
  key: 2,
  class: "info-row"
}, mr = { class: "info-value" }, _r = {
  key: 3,
  class: "info-row"
}, yr = { class: "info-value" }, vr = {
  key: 3,
  class: "section"
}, wr = { class: "section-title" }, br = { class: "inset-card time-settings" }, kr = { class: "time-row" }, Cr = { class: "time-label-text" }, Sr = { class: "time-row" }, Lr = { class: "time-label-text" }, Mr = /* @__PURE__ */ x({
  __name: "index",
  setup(e) {
    const { t } = Mn(), n = z({
      theme_mode: "Light",
      schedule_type: "SunBased",
      custom_light_time: "06:00",
      custom_dark_time: "18:00",
      latitude: null,
      longitude: null,
      timezone_offset: null,
      location_name: null
    }), o = z(!1), s = z(!1), l = z(null), r = z(null), d = z(null), p = z(!1), _ = z(!1), m = z(!1), k = z(null), $ = b(() => o.value), N = b(() => {
      const u = d.value?.source || "";
      return u.startsWith("manual:") ? `手动位置（${u.replace("manual:", "")}）` : u.startsWith("ip:") ? `自动定位（${u.replace("ip:", "")}）` : u || "-";
    }), R = async () => {
      try {
        const u = await c("get_dark_mode_config");
        n.value = u, await g();
      } catch (u) {
        G.error("[主题] 加载配置失败", u), pe.msg(t("darkMode.loadConfigFailed"), "error");
      }
    }, g = async () => {
      try {
        const u = await c("get_dark_mode_status_command");
        o.value = u.currentIsDark, s.value = u.schedulerRunning, d.value = u.sunCalcDebug ?? null;
      } catch (u) {
        G.error("[主题] 加载状态失败", u);
      }
    }, y = async () => {
      p.value = !0;
      try {
        const u = await c("get_location_info");
        l.value = u, n.value.latitude = u.latitude, n.value.longitude = u.longitude, n.value.timezone_offset = u.timezone_offset, n.value.location_name = `${u.city}, ${u.region}`, n.value.schedule_type === "SunBased" && await O(), await U();
      } catch (u) {
        G.error("[主题] 获取位置失败", u), pe.msg(t("darkMode.getLocationFailed"), "error");
      } finally {
        await g(), p.value = !1;
      }
    }, O = async () => {
      if (!(!n.value.latitude || !n.value.longitude))
        try {
          const u = await c("calculate_sun_times_command", {
            latitude: n.value.latitude,
            longitude: n.value.longitude,
            timezoneOffset: n.value.timezone_offset || 0
          });
          r.value = u;
        } catch (u) {
          G.error("[主题] 计算日出日落时间失败", u);
        }
    }, V = async () => {
      m.value || (await U(), n.value.theme_mode === "Schedule" && n.value.schedule_type === "SunBased" && !l.value && await y());
    }, C = async () => {
      m.value || (n.value.schedule_type === "SunBased" && !l.value && await y(), await U());
    }, oe = async () => {
      m.value || n.value.schedule_type === "Custom" && await U();
    }, U = async () => {
      if (!m.value) {
        _.value = !0;
        try {
          await c("save_dark_mode_config_command", { config: n.value }), await g();
        } catch (u) {
          G.error("[主题] 保存配置失败", u), pe.msg(t("darkMode.saveConfigFailed"), "error");
        } finally {
          _.value = !1;
        }
      }
    }, Fe = async () => {
      try {
        const u = await c("toggle_system_theme");
        o.value = u;
        const w = t(u ? "darkMode.darkTheme" : "darkMode.lightTheme");
        let T = t("darkMode.switchedTo", { theme: w });
        n.value.theme_mode === "Schedule" && (T += t("darkMode.autoRestoreNote")), pe.msg(T, "success");
      } catch (u) {
        G.error("[主题] 切换主题失败", u), pe.msg(t("darkMode.toggleFailed"), "error");
      }
    }, M = () => {
      Ve().close();
    };
    return Ee(async () => {
      await R(), n.value.theme_mode === "Schedule" && n.value.schedule_type === "SunBased" && await y(), k.value = await Ye("dark-mode-changed", async (u) => {
        G.debug(
          `[主题][窗口:dark_mode] 收到主题变更：${JSON.stringify(u.payload)}`
        ), o.value = u.payload.isDark, m.value = !0;
        try {
          await R(), G.debug(
            `[主题][窗口:dark_mode] 已从后端刷新配置：theme_mode=${n.value.theme_mode}, schedule_type=${n.value.schedule_type}`
          );
        } finally {
          m.value = !1;
        }
      }), xt(() => {
        setTimeout(() => {
          Ve().emit("dark_mode_ready");
        }, 100);
      });
    }), be(
      () => n.value.schedule_type,
      async (u) => {
        u === "SunBased" && n.value.latitude && n.value.longitude && await O();
      }
    ), Ln(() => {
      k.value && k.value();
    }), (u, w) => (v(), L(
      "div",
      {
        class: I(["dark-mode-container select-none rounded-lg", { dark: i($) }])
      },
      [
        S(" 标题栏 "),
        a("div", Pi, [
          a("div", Wi, [
            a("div", Ai, [
              h(i(Oi), {
                size: 18,
                "stroke-width": 3.5
              })
            ]),
            a(
              "h1",
              Fi,
              f(u.$t("darkMode.title")),
              1
              /* TEXT */
            )
          ]),
          a(
            "button",
            {
              type: "button",
              onMousedown: w[0] || (w[0] = Qe(() => {
              }, ["stop"])),
              onClick: M,
              class: "close-btn",
              "aria-label": "Close"
            },
            [
              h(i(Li), { size: 18 })
            ],
            32
            /* NEED_HYDRATION */
          )
        ]),
        S(" 主要内容 "),
        a("div", Bi, [
          S(" 主题模式选择（四选一） "),
          a("div", Ri, [
            a(
              "h2",
              Ui,
              f(u.$t("darkMode.themeMode")),
              1
              /* TEXT */
            ),
            a("div", Hi, [
              a("label", Vi, [
                P(a(
                  "input",
                  {
                    type: "radio",
                    value: "System",
                    "onUpdate:modelValue": w[1] || (w[1] = (T) => i(n).theme_mode = T),
                    onChange: V,
                    class: "sr-only"
                  },
                  null,
                  544
                  /* NEED_HYDRATION, NEED_PATCH */
                ), [
                  [se, i(n).theme_mode]
                ]),
                a("div", Gi, [
                  a("span", Zi, [
                    h(i(Mi), {
                      class: "mode-icon",
                      theme: "outline",
                      size: 19,
                      "stroke-width": 3.5
                    })
                  ]),
                  a("div", Ki, [
                    a(
                      "span",
                      Ji,
                      f(u.$t("darkMode.systemMode")),
                      1
                      /* TEXT */
                    ),
                    a(
                      "span",
                      qi,
                      f(u.$t("darkMode.systemModeDesc")),
                      1
                      /* TEXT */
                    )
                  ])
                ])
              ]),
              a("label", Qi, [
                P(a(
                  "input",
                  {
                    type: "radio",
                    value: "Light",
                    "onUpdate:modelValue": w[2] || (w[2] = (T) => i(n).theme_mode = T),
                    onChange: V,
                    class: "sr-only"
                  },
                  null,
                  544
                  /* NEED_HYDRATION, NEED_PATCH */
                ), [
                  [se, i(n).theme_mode]
                ]),
                a("div", Yi, [
                  a("span", Xi, [
                    h(i($t), {
                      class: "mode-icon",
                      theme: "outline",
                      size: 19,
                      "stroke-width": 3.5
                    })
                  ]),
                  a("div", ea, [
                    a(
                      "span",
                      ta,
                      f(u.$t("darkMode.lightMode")),
                      1
                      /* TEXT */
                    ),
                    a(
                      "span",
                      na,
                      f(u.$t("darkMode.lightModeDesc")),
                      1
                      /* TEXT */
                    )
                  ])
                ])
              ]),
              a("label", oa, [
                P(a(
                  "input",
                  {
                    type: "radio",
                    value: "Dark",
                    "onUpdate:modelValue": w[3] || (w[3] = (T) => i(n).theme_mode = T),
                    onChange: V,
                    class: "sr-only"
                  },
                  null,
                  544
                  /* NEED_HYDRATION, NEED_PATCH */
                ), [
                  [se, i(n).theme_mode]
                ]),
                a("div", sa, [
                  a("span", ia, [
                    h(i(Tt), {
                      class: "mode-icon",
                      theme: "outline",
                      size: 18,
                      "stroke-width": 3.5
                    })
                  ]),
                  a("div", aa, [
                    a(
                      "span",
                      ra,
                      f(u.$t("darkMode.darkMode")),
                      1
                      /* TEXT */
                    ),
                    a(
                      "span",
                      la,
                      f(u.$t("darkMode.darkModeDesc")),
                      1
                      /* TEXT */
                    )
                  ])
                ])
              ]),
              a("label", ca, [
                P(a(
                  "input",
                  {
                    type: "radio",
                    value: "Schedule",
                    "onUpdate:modelValue": w[4] || (w[4] = (T) => i(n).theme_mode = T),
                    onChange: V,
                    class: "sr-only"
                  },
                  null,
                  544
                  /* NEED_HYDRATION, NEED_PATCH */
                ), [
                  [se, i(n).theme_mode]
                ]),
                a("div", ua, [
                  a("span", da, [
                    h(i(Nt), {
                      class: "mode-icon",
                      theme: "outline",
                      size: 19,
                      "stroke-width": 3.5
                    })
                  ]),
                  a("div", ha, [
                    a(
                      "span",
                      fa,
                      f(u.$t("darkMode.scheduleMode")),
                      1
                      /* TEXT */
                    ),
                    a(
                      "span",
                      pa,
                      f(u.$t("darkMode.scheduleModeDesc")),
                      1
                      /* TEXT */
                    )
                  ])
                ])
              ])
            ])
          ]),
          S(" 当前状态卡片（始终显示） "),
          a("div", ga, [
            a("div", ma, [
              a("div", _a, [
                a(
                  "span",
                  ya,
                  f(u.$t("darkMode.currentTheme")),
                  1
                  /* TEXT */
                ),
                a(
                  "span",
                  {
                    class: I(["status-badge", i(o) ? "badge-dark" : "badge-light"])
                  },
                  f(i(o) ? u.$t("darkMode.darkTheme") : u.$t("darkMode.lightTheme")),
                  3
                  /* TEXT, CLASS */
                )
              ]),
              i(n).theme_mode === "Schedule" ? (v(), L("div", va, [
                a(
                  "span",
                  wa,
                  f(u.$t("darkMode.schedulerStatus")),
                  1
                  /* TEXT */
                ),
                a(
                  "span",
                  {
                    class: I(["status-badge", i(s) ? "badge-success" : "badge-danger"])
                  },
                  f(i(s) ? u.$t("darkMode.running") : u.$t("darkMode.stopped")),
                  3
                  /* TEXT, CLASS */
                )
              ])) : S("v-if", !0),
              i(n).theme_mode !== "Schedule" ? (v(), L(
                "p",
                ba,
                f(i(n).theme_mode === "System" ? u.$t("darkMode.systemModeDesc") : i(n).theme_mode === "Light" ? u.$t("darkMode.lightModeDesc") : u.$t("darkMode.darkModeDesc")),
                1
                /* TEXT */
              )) : S("v-if", !0),
              a(
                "button",
                {
                  type: "button",
                  onClick: Fe,
                  class: "btn-primary"
                },
                f(u.$t("darkMode.manualToggle")),
                1
                /* TEXT */
              )
            ])
          ]),
          S(" 定时切换详细设置（仅在Schedule模式下显示） "),
          i(n).theme_mode === "Schedule" ? (v(), L(
            qe,
            { key: 0 },
            [
              S(" 定时类型选择 "),
              a("div", ka, [
                a(
                  "h2",
                  Ca,
                  f(u.$t("darkMode.scheduleType")),
                  1
                  /* TEXT */
                ),
                a("div", Sa, [
                  a("label", La, [
                    P(a(
                      "input",
                      {
                        type: "radio",
                        value: "SunBased",
                        "onUpdate:modelValue": w[5] || (w[5] = (T) => i(n).schedule_type = T),
                        onChange: C,
                        class: "sr-only"
                      },
                      null,
                      544
                      /* NEED_HYDRATION, NEED_PATCH */
                    ), [
                      [se, i(n).schedule_type]
                    ]),
                    a("div", Ma, [
                      a("span", Oa, [
                        h(i(jt), { size: 18 }),
                        J(
                          " " + f(u.$t("darkMode.sunBased")),
                          1
                          /* TEXT */
                        )
                      ]),
                      a(
                        "span",
                        za,
                        f(u.$t("darkMode.sunBasedDesc")),
                        1
                        /* TEXT */
                      )
                    ])
                  ]),
                  a("label", Ta, [
                    P(a(
                      "input",
                      {
                        type: "radio",
                        value: "Custom",
                        "onUpdate:modelValue": w[6] || (w[6] = (T) => i(n).schedule_type = T),
                        onChange: C,
                        class: "sr-only"
                      },
                      null,
                      544
                      /* NEED_HYDRATION, NEED_PATCH */
                    ), [
                      [se, i(n).schedule_type]
                    ]),
                    a("div", Ia, [
                      a("span", $a, [
                        h(i(Nt), { size: 18 }),
                        J(
                          " " + f(u.$t("darkMode.customSchedule")),
                          1
                          /* TEXT */
                        )
                      ]),
                      a(
                        "span",
                        ja,
                        f(u.$t("darkMode.customScheduleDesc")),
                        1
                        /* TEXT */
                      )
                    ])
                  ])
                ])
              ]),
              S(" 位置信息（日出日落模式） "),
              i(n).schedule_type === "SunBased" ? (v(), L("div", Na, [
                a("h2", xa, [
                  h(i(zi), {
                    theme: "filled",
                    size: 18
                  }),
                  J(
                    " " + f(u.$t("darkMode.locationInfo")),
                    1
                    /* TEXT */
                  )
                ]),
                a("div", Da, [
                  i(p) ? (v(), L(
                    "div",
                    Ea,
                    f(u.$t("darkMode.gettingLocation")),
                    1
                    /* TEXT */
                  )) : i(l) ? (v(), L("div", Pa, [
                    a("div", Wa, [
                      a(
                        "span",
                        Aa,
                        f(u.$t("darkMode.location")),
                        1
                        /* TEXT */
                      ),
                      a(
                        "span",
                        Fa,
                        f(i(l).city) + ", " + f(i(l).region) + ", " + f(i(l).country),
                        1
                        /* TEXT */
                      )
                    ]),
                    a("div", Ba, [
                      a(
                        "span",
                        Ra,
                        f(u.$t("darkMode.timezone")),
                        1
                        /* TEXT */
                      ),
                      a(
                        "span",
                        Ua,
                        f(i(l).timezone),
                        1
                        /* TEXT */
                      )
                    ]),
                    a("div", Ha, [
                      a(
                        "span",
                        Va,
                        f(u.$t("darkMode.coordinates")),
                        1
                        /* TEXT */
                      ),
                      a(
                        "span",
                        Ga,
                        f(i(l).latitude.toFixed(4)) + ", " + f(i(l).longitude.toFixed(4)),
                        1
                        /* TEXT */
                      )
                    ])
                  ])) : S("v-if", !0),
                  a("button", {
                    type: "button",
                    onClick: y,
                    class: "btn-secondary btn-with-icon mt-3",
                    disabled: i(p)
                  }, [
                    i(p) ? (v(), F(i(It), {
                      key: 1,
                      class: "animate-spin",
                      size: 16
                    })) : (v(), F(i(It), {
                      key: 0,
                      size: 16
                    })),
                    J(
                      " " + f(i(p) ? u.$t("darkMode.refreshing") : u.$t("darkMode.refreshLocation")),
                      1
                      /* TEXT */
                    )
                  ], 8, Za)
                ])
              ])) : S("v-if", !0),
              S(" 日出日落时间 "),
              i(n).schedule_type === "SunBased" && i(r) ? (v(), L("div", Ka, [
                a(
                  "h2",
                  Ja,
                  f(u.$t("darkMode.sunTimes")),
                  1
                  /* TEXT */
                ),
                a("div", qa, [
                  a("div", Qa, [
                    h(i(jt), {
                      class: "sun-icon",
                      theme: "filled",
                      size: 20
                    }),
                    a("div", Ya, [
                      a(
                        "span",
                        Xa,
                        f(u.$t("darkMode.sunrise")),
                        1
                        /* TEXT */
                      ),
                      a(
                        "span",
                        er,
                        f(i(r).sunrise),
                        1
                        /* TEXT */
                      )
                    ])
                  ]),
                  a("div", tr, [
                    h(i(Ti), {
                      class: "sun-icon",
                      theme: "filled",
                      size: 20
                    }),
                    a("div", nr, [
                      a(
                        "span",
                        or,
                        f(u.$t("darkMode.sunset")),
                        1
                        /* TEXT */
                      ),
                      a(
                        "span",
                        sr,
                        f(i(r).sunset),
                        1
                        /* TEXT */
                      )
                    ])
                  ]),
                  w[9] || (w[9] = a(
                    "div",
                    { class: "sun-divider" },
                    null,
                    -1
                    /* HOISTED */
                  )),
                  a("div", ir, [
                    a(
                      "span",
                      ar,
                      f(u.$t("darkMode.currentPeriod")),
                      1
                      /* TEXT */
                    ),
                    a(
                      "span",
                      {
                        class: I(["sun-value", i(r).is_day ? "period-day" : "period-night"])
                      },
                      f(i(r).is_day ? u.$t("darkMode.daytime") : u.$t("darkMode.nighttime")),
                      3
                      /* TEXT, CLASS */
                    )
                  ])
                ])
              ])) : S("v-if", !0),
              S(" 计算调试信息 "),
              i(n).schedule_type === "SunBased" ? (v(), L("div", rr, [
                w[15] || (w[15] = a(
                  "h2",
                  { class: "section-title" },
                  "计算依据",
                  -1
                  /* HOISTED */
                )),
                a("div", lr, [
                  a("div", cr, [
                    w[10] || (w[10] = a(
                      "span",
                      { class: "info-label" },
                      "来源",
                      -1
                      /* HOISTED */
                    )),
                    a(
                      "span",
                      ur,
                      f(i(N)),
                      1
                      /* TEXT */
                    )
                  ]),
                  i(d)?.latitude !== void 0 && i(d)?.longitude !== void 0 ? (v(), L("div", dr, [
                    w[11] || (w[11] = a(
                      "span",
                      { class: "info-label" },
                      "计算坐标",
                      -1
                      /* HOISTED */
                    )),
                    a(
                      "span",
                      hr,
                      f(Number(i(d)?.latitude).toFixed(4)) + ", " + f(Number(i(d)?.longitude).toFixed(4)),
                      1
                      /* TEXT */
                    )
                  ])) : S("v-if", !0),
                  i(d)?.timezoneOffset !== void 0 ? (v(), L("div", fr, [
                    w[12] || (w[12] = a(
                      "span",
                      { class: "info-label" },
                      "时区偏移(分钟)",
                      -1
                      /* HOISTED */
                    )),
                    a(
                      "span",
                      pr,
                      f(i(d)?.timezoneOffset),
                      1
                      /* TEXT */
                    )
                  ])) : S("v-if", !0),
                  i(d)?.sunset ? (v(), L("div", gr, [
                    w[13] || (w[13] = a(
                      "span",
                      { class: "info-label" },
                      "用于切换的日落时间",
                      -1
                      /* HOISTED */
                    )),
                    a(
                      "span",
                      mr,
                      f(i(d)?.sunset),
                      1
                      /* TEXT */
                    )
                  ])) : S("v-if", !0),
                  i(d)?.error ? (v(), L("div", _r, [
                    w[14] || (w[14] = a(
                      "span",
                      { class: "info-label" },
                      "错误",
                      -1
                      /* HOISTED */
                    )),
                    a(
                      "span",
                      yr,
                      f(i(d)?.error),
                      1
                      /* TEXT */
                    )
                  ])) : S("v-if", !0)
                ])
              ])) : S("v-if", !0),
              S(" 自定义时间 "),
              i(n).schedule_type === "Custom" ? (v(), L("div", vr, [
                a(
                  "h2",
                  wr,
                  f(u.$t("darkMode.customTime")),
                  1
                  /* TEXT */
                ),
                a("div", br, [
                  a("label", kr, [
                    a("span", Cr, [
                      h(i($t), {
                        theme: "outline",
                        size: 18,
                        "stroke-width": 3.5
                      }),
                      J(
                        " " + f(u.$t("darkMode.lightModeStart")),
                        1
                        /* TEXT */
                      )
                    ]),
                    P(a(
                      "input",
                      {
                        type: "time",
                        "onUpdate:modelValue": w[7] || (w[7] = (T) => i(n).custom_light_time = T),
                        onChange: oe,
                        class: "time-input"
                      },
                      null,
                      544
                      /* NEED_HYDRATION, NEED_PATCH */
                    ), [
                      [rt, i(n).custom_light_time]
                    ])
                  ]),
                  a("label", Sr, [
                    a("span", Lr, [
                      h(i(Tt), {
                        theme: "outline",
                        size: 18,
                        "stroke-width": 3.5
                      }),
                      J(
                        " " + f(u.$t("darkMode.darkModeStart")),
                        1
                        /* TEXT */
                      )
                    ]),
                    P(a(
                      "input",
                      {
                        type: "time",
                        "onUpdate:modelValue": w[8] || (w[8] = (T) => i(n).custom_dark_time = T),
                        onChange: oe,
                        class: "time-input"
                      },
                      null,
                      544
                      /* NEED_HYDRATION, NEED_PATCH */
                    ), [
                      [rt, i(n).custom_dark_time]
                    ])
                  ])
                ])
              ])) : S("v-if", !0)
            ],
            64
            /* STABLE_FRAGMENT */
          )) : S("v-if", !0)
        ])
      ],
      2
      /* CLASS */
    ));
  }
}), Or = (e, t) => {
  const n = e.__vccOpts || e;
  for (const [o, s] of t)
    n[o] = s;
  return n;
}, zr = /* @__PURE__ */ Or(Mr, [["__scopeId", "data-v-992c2583"]]), Tr = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: zr
}, Symbol.toStringTag, { value: "Module" }));
export {
  jr as activate
};
