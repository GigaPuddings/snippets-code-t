import { getCurrentInstance as ae, inject as q, ref as z, computed as b, unref as i, readonly as _n, getCurrentScope as yn, onScopeDispose as vn, onMounted as je, nextTick as Dt, watch as be, isRef as wn, warn as bn, provide as kn, defineComponent as D, createElementBlock as L, openBlock as v, mergeProps as Cn, renderSlot as re, createElementVNode as a, normalizeClass as I, createVNode as h, Transition as qe, withCtx as Q, withDirectives as P, normalizeStyle as ze, createTextVNode as J, toDisplayString as f, vShow as Te, shallowReactive as Sn, createBlock as F, createCommentVNode as S, resolveDynamicComponent as Et, Fragment as Qe, withModifiers as Ye, isVNode as ye, render as Ie, onUnmounted as Ln, vModelRadio as oe, vModelText as lt } from "vue";
import { useI18n as On } from "vue-i18n";
const $r = (e) => {
  e.registerRoute({
    target: "layout",
    path: "/dark-mode",
    name: "DarkMode",
    component: () => Promise.resolve().then(() => zr)
  }), e.registerWindowShortcut({
    label: "dark_mode"
  });
};
function Mn(e, t, n, s) {
  if (typeof t == "function" ? e !== t || !0 : !t.has(e)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
  return n === "m" ? s : n === "a" ? s.call(e) : s ? s.value : t.get(e);
}
function zn(e, t, n, s, o) {
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
    return Mn(this, Se, "f");
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
class jt {
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
    return new jt(this.width / t, this.height / t);
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
    return this.size instanceof jt ? this.size : this.size.toLogical(t);
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
    return new G(this.x * t, this.y * t);
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
class G {
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
    return this.position instanceof G ? this.position : this.position.toPhysical(t);
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
var E;
(function(e) {
  e.WINDOW_RESIZED = "tauri://resize", e.WINDOW_MOVED = "tauri://move", e.WINDOW_CLOSE_REQUESTED = "tauri://close-requested", e.WINDOW_DESTROYED = "tauri://destroyed", e.WINDOW_FOCUS = "tauri://focus", e.WINDOW_BLUR = "tauri://blur", e.WINDOW_SCALE_FACTOR_CHANGED = "tauri://scale-change", e.WINDOW_THEME_CHANGED = "tauri://theme-changed", e.WINDOW_CREATED = "tauri://window-created", e.WEBVIEW_CREATED = "tauri://webview-created", e.DRAG_ENTER = "tauri://drag-enter", e.DRAG_OVER = "tauri://drag-over", e.DRAG_DROP = "tauri://drag-drop", e.DRAG_LEAVE = "tauri://drag-leave";
})(E || (E = {}));
async function Wt(e, t) {
  await c("plugin:event|unlisten", {
    event: e,
    eventId: t
  });
}
async function Xe(e, t, n) {
  var s;
  const o = typeof n?.target == "string" ? { kind: "AnyLabel", label: n.target } : (s = n?.target) !== null && s !== void 0 ? s : { kind: "Any" };
  return c("plugin:event|listen", {
    event: e,
    target: o,
    handler: Tn(t)
  }).then((l) => async () => Wt(e, l));
}
async function $n(e, t, n) {
  return Xe(e, (s) => {
    Wt(e, s.id), t(s);
  }, n);
}
async function Nn(e, t) {
  await c("plugin:event|emit", {
    event: e,
    payload: t
  });
}
async function xn(e, t, n) {
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
  static async new(t, n, s) {
    return c("plugin:image|new", {
      rgba: $e(t),
      width: n,
      height: s
    }).then((o) => new _e(o));
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
var Ve;
(function(e) {
  e[e.Critical = 1] = "Critical", e[e.Informational = 2] = "Informational";
})(Ve || (Ve = {}));
class Dn {
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
var ct;
(function(e) {
  e.None = "none", e.Normal = "normal", e.Indeterminate = "indeterminate", e.Paused = "paused", e.Error = "error";
})(ct || (ct = {}));
function Ze() {
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
    var s;
    this.label = t, this.listeners = /* @__PURE__ */ Object.create(null), n?.skip || c("plugin:window|create", {
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
    return (n = (await Be()).find((s) => s.label === t)) !== null && n !== void 0 ? n : null;
  }
  /**
   * Get an instance of `Window` for the current window.
   */
  static getCurrent() {
    return Ze();
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
      const s = this.listeners[t];
      s.splice(s.indexOf(n), 1);
    } : Xe(t, n, {
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
      for (const s of this.listeners[t] || [])
        s({
          event: t,
          id: -1,
          payload: n
        });
      return;
    }
    return Nn(t, n);
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
    if (Re.includes(n)) {
      for (const o of this.listeners[n] || [])
        o({
          event: n,
          id: -1,
          payload: s
        });
      return;
    }
    return xn(t, n, s);
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
    }).then((t) => new G(t));
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
    }).then((t) => new G(t));
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
    return t && (t === Ve.Critical ? n = { type: "Critical" } : n = { type: "Informational" }), c("plugin:window|request_user_attention", {
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
    function n(s) {
      return s ? { Logical: s } : null;
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
    return this.listen(E.WINDOW_RESIZED, (n) => {
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
    return this.listen(E.WINDOW_MOVED, (n) => {
      n.payload = new G(n.payload), t(n);
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
    return this.listen(E.WINDOW_CLOSE_REQUESTED, async (n) => {
      const s = new Dn(n);
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
    const n = await this.listen(E.DRAG_ENTER, (r) => {
      t({
        ...r,
        payload: {
          type: "enter",
          paths: r.payload.paths,
          position: new G(r.payload.position)
        }
      });
    }), s = await this.listen(E.DRAG_OVER, (r) => {
      t({
        ...r,
        payload: {
          type: "over",
          position: new G(r.payload.position)
        }
      });
    }), o = await this.listen(E.DRAG_DROP, (r) => {
      t({
        ...r,
        payload: {
          type: "drop",
          paths: r.payload.paths,
          position: new G(r.payload.position)
        }
      });
    }), l = await this.listen(E.DRAG_LEAVE, (r) => {
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
    const n = await this.listen(E.WINDOW_FOCUS, (o) => {
      t({ ...o, payload: !0 });
    }), s = await this.listen(E.WINDOW_BLUR, (o) => {
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
    return this.listen(E.WINDOW_SCALE_FACTOR_CHANGED, t);
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
    return this.listen(E.WINDOW_THEME_CHANGED, t);
  }
}
var ut;
(function(e) {
  e.Disabled = "disabled", e.Throttle = "throttle", e.Suspend = "suspend";
})(ut || (ut = {}));
var dt;
(function(e) {
  e.AppearanceBased = "appearanceBased", e.Light = "light", e.Dark = "dark", e.MediumLight = "mediumLight", e.UltraDark = "ultraDark", e.Titlebar = "titlebar", e.Selection = "selection", e.Menu = "menu", e.Popover = "popover", e.Sidebar = "sidebar", e.HeaderView = "headerView", e.Sheet = "sheet", e.WindowBackground = "windowBackground", e.HudWindow = "hudWindow", e.FullScreenUI = "fullScreenUI", e.Tooltip = "tooltip", e.ContentBackground = "contentBackground", e.UnderWindowBackground = "underWindowBackground", e.UnderPageBackground = "underPageBackground", e.Mica = "mica", e.Blur = "blur", e.Acrylic = "acrylic", e.Tabbed = "tabbed", e.TabbedDark = "tabbedDark", e.TabbedLight = "tabbedLight";
})(dt || (dt = {}));
var ht;
(function(e) {
  e.FollowsWindowActiveState = "followsWindowActiveState", e.Active = "active", e.Inactive = "inactive";
})(ht || (ht = {}));
const Ft = Symbol(), Le = "el", En = "is-", K = (e, t, n, s, o) => {
  let l = `${e}-${t}`;
  return n && (l += `-${n}`), s && (l += `__${s}`), o && (l += `--${o}`), l;
}, Bt = Symbol("namespaceContextKey"), jn = (e) => {
  const t = e || (ae() ? q(Bt, z(Le)) : z(Le));
  return b(() => i(t) || Le);
}, et = (e, t) => {
  const n = jn(t);
  return {
    namespace: n,
    b: (g = "") => K(n.value, e, g, "", ""),
    e: (g) => g ? K(n.value, e, "", g, "") : "",
    m: (g) => g ? K(n.value, e, "", "", g) : "",
    be: (g, y) => g && y ? K(n.value, e, g, y, "") : "",
    em: (g, y) => g && y ? K(n.value, e, "", g, y) : "",
    bm: (g, y) => g && y ? K(n.value, e, g, "", y) : "",
    bem: (g, y, M) => g && y && M ? K(n.value, e, g, y, M) : "",
    is: (g, ...y) => {
      const M = y.length >= 1 ? y[0] : !0;
      return g && M ? `${En}${g}` : "";
    },
    cssVar: (g) => {
      const y = {};
      for (const M in g)
        g[M] && (y[`--${n.value}-${M}`] = g[M]);
      return y;
    },
    cssVarName: (g) => `--${n.value}-${g}`,
    cssVarBlock: (g) => {
      const y = {};
      for (const M in g)
        g[M] && (y[`--${n.value}-${e}-${M}`] = g[M]);
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
const Pn = Object.prototype.hasOwnProperty, ft = (e, t) => Pn.call(e, t), ve = (e) => typeof e == "function", Y = (e) => typeof e == "string", Rt = (e) => e !== null && typeof e == "object";
var Wn = typeof global == "object" && global && global.Object === Object && global, An = typeof self == "object" && self && self.Object === Object && self, tt = Wn || An || Function("return this")(), le = tt.Symbol, Ut = Object.prototype, Fn = Ut.hasOwnProperty, Bn = Ut.toString, fe = le ? le.toStringTag : void 0;
function Rn(e) {
  var t = Fn.call(e, fe), n = e[fe];
  try {
    e[fe] = void 0;
    var s = !0;
  } catch {
  }
  var o = Bn.call(e);
  return s && (t ? e[fe] = n : delete e[fe]), o;
}
var Un = Object.prototype, Hn = Un.toString;
function Vn(e) {
  return Hn.call(e);
}
var Zn = "[object Null]", Gn = "[object Undefined]", pt = le ? le.toStringTag : void 0;
function Ht(e) {
  return e == null ? e === void 0 ? Gn : Zn : pt && pt in Object(e) ? Rn(e) : Vn(e);
}
function Kn(e) {
  return e != null && typeof e == "object";
}
var Jn = "[object Symbol]";
function nt(e) {
  return typeof e == "symbol" || Kn(e) && Ht(e) == Jn;
}
function qn(e, t) {
  for (var n = -1, s = e == null ? 0 : e.length, o = Array(s); ++n < s; )
    o[n] = t(e[n], n, e);
  return o;
}
var st = Array.isArray, gt = le ? le.prototype : void 0, mt = gt ? gt.toString : void 0;
function Vt(e) {
  if (typeof e == "string")
    return e;
  if (st(e))
    return qn(e, Vt) + "";
  if (nt(e))
    return mt ? mt.call(e) : "";
  var t = e + "";
  return t == "0" && 1 / e == -1 / 0 ? "-0" : t;
}
function Zt(e) {
  var t = typeof e;
  return e != null && (t == "object" || t == "function");
}
var Qn = "[object AsyncFunction]", Yn = "[object Function]", Xn = "[object GeneratorFunction]", es = "[object Proxy]";
function ts(e) {
  if (!Zt(e))
    return !1;
  var t = Ht(e);
  return t == Yn || t == Xn || t == Qn || t == es;
}
var Ue = tt["__core-js_shared__"], _t = function() {
  var e = /[^.]+$/.exec(Ue && Ue.keys && Ue.keys.IE_PROTO || "");
  return e ? "Symbol(src)_1." + e : "";
}();
function ns(e) {
  return !!_t && _t in e;
}
var ss = Function.prototype, os = ss.toString;
function is(e) {
  if (e != null) {
    try {
      return os.call(e);
    } catch {
    }
    try {
      return e + "";
    } catch {
    }
  }
  return "";
}
var as = /[\\^$.*+?()[\]{}|]/g, rs = /^\[object .+?Constructor\]$/, ls = Function.prototype, cs = Object.prototype, us = ls.toString, ds = cs.hasOwnProperty, hs = RegExp(
  "^" + us.call(ds).replace(as, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$"
);
function fs(e) {
  if (!Zt(e) || ns(e))
    return !1;
  var t = ts(e) ? hs : rs;
  return t.test(is(e));
}
function ps(e, t) {
  return e?.[t];
}
function Gt(e, t) {
  var n = ps(e, t);
  return fs(n) ? n : void 0;
}
function gs(e, t) {
  return e === t || e !== e && t !== t;
}
var ms = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/, _s = /^\w*$/;
function ys(e, t) {
  if (st(e))
    return !1;
  var n = typeof e;
  return n == "number" || n == "symbol" || n == "boolean" || e == null || nt(e) ? !0 : _s.test(e) || !ms.test(e) || t != null && e in Object(t);
}
var we = Gt(Object, "create");
function vs() {
  this.__data__ = we ? we(null) : {}, this.size = 0;
}
function ws(e) {
  var t = this.has(e) && delete this.__data__[e];
  return this.size -= t ? 1 : 0, t;
}
var bs = "__lodash_hash_undefined__", ks = Object.prototype, Cs = ks.hasOwnProperty;
function Ss(e) {
  var t = this.__data__;
  if (we) {
    var n = t[e];
    return n === bs ? void 0 : n;
  }
  return Cs.call(t, e) ? t[e] : void 0;
}
var Ls = Object.prototype, Os = Ls.hasOwnProperty;
function Ms(e) {
  var t = this.__data__;
  return we ? t[e] !== void 0 : Os.call(t, e);
}
var zs = "__lodash_hash_undefined__";
function Ts(e, t) {
  var n = this.__data__;
  return this.size += this.has(e) ? 0 : 1, n[e] = we && t === void 0 ? zs : t, this;
}
function X(e) {
  var t = -1, n = e == null ? 0 : e.length;
  for (this.clear(); ++t < n; ) {
    var s = e[t];
    this.set(s[0], s[1]);
  }
}
X.prototype.clear = vs;
X.prototype.delete = ws;
X.prototype.get = Ss;
X.prototype.has = Ms;
X.prototype.set = Ts;
function Is() {
  this.__data__ = [], this.size = 0;
}
function Pe(e, t) {
  for (var n = e.length; n--; )
    if (gs(e[n][0], t))
      return n;
  return -1;
}
var $s = Array.prototype, Ns = $s.splice;
function xs(e) {
  var t = this.__data__, n = Pe(t, e);
  if (n < 0)
    return !1;
  var s = t.length - 1;
  return n == s ? t.pop() : Ns.call(t, n, 1), --this.size, !0;
}
function Ds(e) {
  var t = this.__data__, n = Pe(t, e);
  return n < 0 ? void 0 : t[n][1];
}
function Es(e) {
  return Pe(this.__data__, e) > -1;
}
function js(e, t) {
  var n = this.__data__, s = Pe(n, e);
  return s < 0 ? (++this.size, n.push([e, t])) : n[s][1] = t, this;
}
function de(e) {
  var t = -1, n = e == null ? 0 : e.length;
  for (this.clear(); ++t < n; ) {
    var s = e[t];
    this.set(s[0], s[1]);
  }
}
de.prototype.clear = Is;
de.prototype.delete = xs;
de.prototype.get = Ds;
de.prototype.has = Es;
de.prototype.set = js;
var Ps = Gt(tt, "Map");
function Ws() {
  this.size = 0, this.__data__ = {
    hash: new X(),
    map: new (Ps || de)(),
    string: new X()
  };
}
function As(e) {
  var t = typeof e;
  return t == "string" || t == "number" || t == "symbol" || t == "boolean" ? e !== "__proto__" : e === null;
}
function We(e, t) {
  var n = e.__data__;
  return As(t) ? n[typeof t == "string" ? "string" : "hash"] : n.map;
}
function Fs(e) {
  var t = We(this, e).delete(e);
  return this.size -= t ? 1 : 0, t;
}
function Bs(e) {
  return We(this, e).get(e);
}
function Rs(e) {
  return We(this, e).has(e);
}
function Us(e, t) {
  var n = We(this, e), s = n.size;
  return n.set(e, t), this.size += n.size == s ? 0 : 1, this;
}
function te(e) {
  var t = -1, n = e == null ? 0 : e.length;
  for (this.clear(); ++t < n; ) {
    var s = e[t];
    this.set(s[0], s[1]);
  }
}
te.prototype.clear = Ws;
te.prototype.delete = Fs;
te.prototype.get = Bs;
te.prototype.has = Rs;
te.prototype.set = Us;
var Hs = "Expected a function";
function ot(e, t) {
  if (typeof e != "function" || t != null && typeof t != "function")
    throw new TypeError(Hs);
  var n = function() {
    var s = arguments, o = t ? t.apply(this, s) : s[0], l = n.cache;
    if (l.has(o))
      return l.get(o);
    var r = e.apply(this, s);
    return n.cache = l.set(o, r) || l, r;
  };
  return n.cache = new (ot.Cache || te)(), n;
}
ot.Cache = te;
var Vs = 500;
function Zs(e) {
  var t = ot(e, function(s) {
    return n.size === Vs && n.clear(), s;
  }), n = t.cache;
  return t;
}
var Gs = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g, Ks = /\\(\\)?/g, Js = Zs(function(e) {
  var t = [];
  return e.charCodeAt(0) === 46 && t.push(""), e.replace(Gs, function(n, s, o, l) {
    t.push(o ? l.replace(Ks, "$1") : s || n);
  }), t;
});
function qs(e) {
  return e == null ? "" : Vt(e);
}
function Qs(e, t) {
  return st(e) ? e : ys(e, t) ? [e] : Js(qs(e));
}
function Ys(e) {
  if (typeof e == "string" || nt(e))
    return e;
  var t = e + "";
  return t == "0" && 1 / e == -1 / 0 ? "-0" : t;
}
function Xs(e, t) {
  t = Qs(t, e);
  for (var n = 0, s = t.length; e != null && n < s; )
    e = e[Ys(t[n++])];
  return n && n == s ? e : void 0;
}
function eo(e, t, n) {
  var s = e == null ? void 0 : Xs(e, t);
  return s === void 0 ? n : s;
}
function to(e) {
  for (var t = -1, n = e == null ? 0 : e.length, s = {}; ++t < n; ) {
    var o = e[t];
    s[o[0]] = o[1];
  }
  return s;
}
const Kt = (e) => e === void 0, yt = (e) => typeof e == "boolean", ee = (e) => typeof e == "number", Ge = (e) => typeof Element > "u" ? !1 : e instanceof Element, no = (e) => Y(e) ? !Number.isNaN(Number(e)) : !1;
var vt;
const ne = typeof window < "u", so = (e) => typeof e == "string", oo = () => {
};
ne && ((vt = window?.navigator) != null && vt.userAgent) && /iP(ad|hone|od)/.test(window.navigator.userAgent);
function it(e) {
  return typeof e == "function" ? e() : i(e);
}
function io(e) {
  return e;
}
function at(e) {
  return yn() ? (vn(e), !0) : !1;
}
function ao(e, t = !0) {
  ae() ? je(e) : t ? e() : Dt(e);
}
function Jt(e, t, n = {}) {
  const {
    immediate: s = !0
  } = n, o = z(!1);
  let l = null;
  function r() {
    l && (clearTimeout(l), l = null);
  }
  function d() {
    o.value = !1, r();
  }
  function p(..._) {
    r(), o.value = !0, l = setTimeout(() => {
      o.value = !1, l = null, e(..._);
    }, it(t));
  }
  return s && (o.value = !0, ne && p()), at(d), {
    isPending: _n(o),
    start: p,
    stop: d
  };
}
function qt(e) {
  var t;
  const n = it(e);
  return (t = n?.$el) != null ? t : n;
}
const Qt = ne ? window : void 0;
function Yt(...e) {
  let t, n, s, o;
  if (so(e[0]) || Array.isArray(e[0]) ? ([n, s, o] = e, t = Qt) : [t, n, s, o] = e, !t)
    return oo;
  Array.isArray(n) || (n = [n]), Array.isArray(s) || (s = [s]);
  const l = [], r = () => {
    l.forEach((m) => m()), l.length = 0;
  }, d = (m, k, $, x) => (m.addEventListener(k, $, x), () => m.removeEventListener(k, $, x)), p = be(() => [qt(t), it(o)], ([m, k]) => {
    r(), m && l.push(...n.flatMap(($) => s.map((x) => d(m, $, x, k))));
  }, { immediate: !0, flush: "post" }), _ = () => {
    p(), r();
  };
  return at(_), _;
}
function ro(e, t = !1) {
  const n = z(), s = () => n.value = !!e();
  return s(), ao(s, t), n;
}
const wt = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {}, bt = "__vueuse_ssr_handlers__";
wt[bt] = wt[bt] || {};
var kt = Object.getOwnPropertySymbols, lo = Object.prototype.hasOwnProperty, co = Object.prototype.propertyIsEnumerable, uo = (e, t) => {
  var n = {};
  for (var s in e)
    lo.call(e, s) && t.indexOf(s) < 0 && (n[s] = e[s]);
  if (e != null && kt)
    for (var s of kt(e))
      t.indexOf(s) < 0 && co.call(e, s) && (n[s] = e[s]);
  return n;
};
function ho(e, t, n = {}) {
  const s = n, { window: o = Qt } = s, l = uo(s, ["window"]);
  let r;
  const d = ro(() => o && "ResizeObserver" in o), p = () => {
    r && (r.disconnect(), r = void 0);
  }, _ = be(() => qt(e), (k) => {
    p(), d.value && o && k && (r = new ResizeObserver(t), r.observe(k, l));
  }, { immediate: !0, flush: "post" }), m = () => {
    p(), _();
  };
  return at(m), {
    isSupported: d,
    stop: m
  };
}
var Ct;
(function(e) {
  e.UP = "UP", e.RIGHT = "RIGHT", e.DOWN = "DOWN", e.LEFT = "LEFT", e.NONE = "NONE";
})(Ct || (Ct = {}));
var fo = Object.defineProperty, St = Object.getOwnPropertySymbols, po = Object.prototype.hasOwnProperty, go = Object.prototype.propertyIsEnumerable, Lt = (e, t, n) => t in e ? fo(e, t, { enumerable: !0, configurable: !0, writable: !0, value: n }) : e[t] = n, mo = (e, t) => {
  for (var n in t || (t = {}))
    po.call(t, n) && Lt(e, n, t[n]);
  if (St)
    for (var n of St(t))
      go.call(t, n) && Lt(e, n, t[n]);
  return e;
};
const _o = {
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
mo({
  linear: io
}, _o);
const Ot = {
  current: 0
}, Mt = z(0), Xt = 2e3, zt = Symbol("elZIndexContextKey"), en = Symbol("zIndexContextKey"), yo = (e) => {
  const t = ae() ? q(zt, Ot) : Ot, n = e || (ae() ? q(en, void 0) : void 0), s = b(() => {
    const r = i(n);
    return ee(r) ? r : Xt;
  }), o = b(() => s.value + Mt.value), l = () => (t.current++, Mt.value = t.current, o.value);
  return !ne && q(zt), {
    initialZIndex: s,
    currentZIndex: o,
    nextZIndex: l
  };
};
var vo = {
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
const wo = (e) => (t, n) => bo(t, n, i(e)), bo = (e, t, n) => eo(n, e, e).replace(/\{(\w+)\}/g, (s, o) => {
  var l;
  return `${(l = t?.[o]) != null ? l : `{${o}}`}`;
}), ko = (e) => {
  const t = b(() => i(e).name), n = wn(e) ? e : z(e);
  return {
    lang: t,
    locale: n,
    t: wo(e)
  };
}, tn = Symbol("localeContextKey"), Co = (e) => {
  const t = e || q(tn, z());
  return ko(b(() => t.value || vo));
}, nn = "__epPropKey", j = (e) => e, So = (e) => Rt(e) && !!e[nn], sn = (e, t) => {
  if (!Rt(e) || So(e))
    return e;
  const { values: n, required: s, default: o, type: l, validator: r } = e, p = {
    type: l,
    required: !!s,
    validator: n || r ? (_) => {
      let m = !1, k = [];
      if (n && (k = Array.from(n), ft(e, "default") && k.push(o), m || (m = k.includes(_))), r && (m || (m = r(_))), !m && k.length > 0) {
        const $ = [...new Set(k)].map((x) => JSON.stringify(x)).join(", ");
        bn(`Invalid prop: validation failed${t ? ` for prop "${t}"` : ""}. Expected one of [${$}], got value ${JSON.stringify(_)}.`);
      }
      return m;
    } : void 0,
    [nn]: !0
  };
  return ft(e, "default") && (p.default = o), p;
}, he = (e) => to(Object.entries(e).map(([t, n]) => [
  t,
  sn(n, t)
])), Lo = ["", "default", "small", "large"], Oo = sn({
  type: String,
  values: Lo,
  required: !1
}), Mo = Symbol("size"), zo = Symbol("emptyValuesContextKey"), To = he({
  emptyValues: Array,
  valueOnClear: {
    type: [String, Number, Boolean, Function],
    default: void 0,
    validator: (e) => ve(e) ? !e() : !e
  }
}), Tt = (e) => Object.keys(e), Ne = z();
function on(e, t = void 0) {
  return ae() ? q(Ft, Ne) : Ne;
}
function an(e, t) {
  const n = on(), s = et(e, b(() => {
    var d;
    return ((d = n.value) == null ? void 0 : d.namespace) || Le;
  })), o = Co(b(() => {
    var d;
    return (d = n.value) == null ? void 0 : d.locale;
  })), l = yo(b(() => {
    var d;
    return ((d = n.value) == null ? void 0 : d.zIndex) || Xt;
  })), r = b(() => {
    var d;
    return i(t) || ((d = n.value) == null ? void 0 : d.size) || "";
  });
  return rn(b(() => i(n) || {})), {
    ns: s,
    locale: o,
    zIndex: l,
    size: r
  };
}
const rn = (e, t, n = !1) => {
  var s;
  const o = !!ae(), l = o ? on() : void 0, r = (s = void 0) != null ? s : o ? kn : void 0;
  if (!r)
    return;
  const d = b(() => {
    const p = i(e);
    return l?.value ? Io(l.value, p) : p;
  });
  return r(Ft, d), r(tn, b(() => d.value.locale)), r(Bt, b(() => d.value.namespace)), r(en, b(() => d.value.zIndex)), r(Mo, {
    size: b(() => d.value.size || "")
  }), r(zo, b(() => ({
    emptyValues: d.value.emptyValues,
    valueOnClear: d.value.valueOnClear
  }))), (n || !Ne.value) && (Ne.value = d.value), d;
}, Io = (e, t) => {
  const n = [.../* @__PURE__ */ new Set([...Tt(e), ...Tt(t)])], s = {};
  for (const o of n)
    s[o] = t[o] !== void 0 ? t[o] : e[o];
  return s;
};
var Ae = (e, t) => {
  const n = e.__vccOpts || e;
  for (const [s, o] of t)
    n[s] = o;
  return n;
};
function Ke(e, t = "px") {
  if (!e)
    return "";
  if (ee(e) || no(e))
    return `${e}${t}`;
  if (Y(e))
    return e;
}
const ln = (e, t) => (e.install = (n) => {
  for (const s of [e, ...Object.values({})])
    n.component(s.name, s);
}, e), cn = (e, t) => (e.install = (n) => {
  e._context = n._context, n.config.globalProperties[t] = e;
}, e), $o = he({
  size: {
    type: j([Number, String])
  },
  color: {
    type: String
  }
}), No = D({
  name: "ElIcon",
  inheritAttrs: !1
}), xo = /* @__PURE__ */ D({
  ...No,
  props: $o,
  setup(e) {
    const t = e, n = et("icon"), s = b(() => {
      const { size: o, color: l } = t;
      return !o && !l ? {} : {
        fontSize: Kt(o) ? void 0 : Ke(o),
        "--color": l
      };
    });
    return (o, l) => (v(), L("i", Cn({
      class: i(n).b(),
      style: i(s)
    }, o.$attrs), [
      re(o.$slots, "default")
    ], 16));
  }
});
var Do = /* @__PURE__ */ Ae(xo, [["__file", "icon.vue"]]);
const xe = ln(Do);
/*! Element Plus Icons Vue v2.3.1 */
var Eo = /* @__PURE__ */ D({
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
}), jo = Eo, Po = /* @__PURE__ */ D({
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
}), un = Po, Wo = /* @__PURE__ */ D({
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
}), Ao = Wo, Fo = /* @__PURE__ */ D({
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
}), Bo = Fo, Ro = /* @__PURE__ */ D({
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
}), Uo = Ro;
const dn = j([
  String,
  Object,
  Function
]), Ho = {
  Close: un
}, Vo = {
  Close: un
}, De = {
  success: Bo,
  warning: Uo,
  error: jo,
  info: Ao
}, Zo = (e) => e, Oe = {
  esc: "Escape",
  delete: "Delete",
  backspace: "Backspace"
}, Go = he({
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
    type: j([String, Object, Array])
  },
  offset: {
    type: j(Array),
    default: [0, 0]
  },
  badgeClass: {
    type: String
  }
}), Ko = D({
  name: "ElBadge"
}), Jo = /* @__PURE__ */ D({
  ...Ko,
  props: Go,
  setup(e, { expose: t }) {
    const n = e, s = et("badge"), o = b(() => n.isDot ? "" : ee(n.value) && ee(n.max) ? n.max < n.value ? `${n.max}+` : `${n.value}` : `${n.value}`), l = b(() => {
      var r, d, p, _, m;
      return [
        {
          backgroundColor: n.color,
          marginRight: Ke(-((d = (r = n.offset) == null ? void 0 : r[0]) != null ? d : 0)),
          marginTop: Ke((_ = (p = n.offset) == null ? void 0 : p[1]) != null ? _ : 0)
        },
        (m = n.badgeStyle) != null ? m : {}
      ];
    });
    return t({
      content: o
    }), (r, d) => (v(), L("div", {
      class: I(i(s).b())
    }, [
      re(r.$slots, "default"),
      h(qe, {
        name: `${i(s).namespace.value}-zoom-in-center`,
        persisted: ""
      }, {
        default: Q(() => [
          P(a("sup", {
            class: I([
              i(s).e("content"),
              i(s).em("content", r.type),
              i(s).is("fixed", !!r.$slots.default),
              i(s).is("dot", r.isDot),
              i(s).is("hide-zero", !r.showZero && n.value === 0),
              r.badgeClass
            ]),
            style: ze(i(l))
          }, [
            re(r.$slots, "content", { value: i(o) }, () => [
              J(f(i(o)), 1)
            ])
          ], 6), [
            [Te, !r.hidden && (i(o) || r.isDot || r.$slots.content)]
          ])
        ]),
        _: 3
      }, 8, ["name"])
    ], 2));
  }
});
var qo = /* @__PURE__ */ Ae(Jo, [["__file", "badge.vue"]]);
const Qo = ln(qo), Yo = he({
  a11y: {
    type: Boolean,
    default: !0
  },
  locale: {
    type: j(Object)
  },
  size: Oo,
  button: {
    type: j(Object)
  },
  experimentalFeatures: {
    type: j(Object)
  },
  keyboardNavigation: {
    type: Boolean,
    default: !0
  },
  message: {
    type: j(Object)
  },
  zIndex: Number,
  namespace: {
    type: String,
    default: "el"
  },
  ...To
}), A = {};
D({
  name: "ElConfigProvider",
  props: Yo,
  setup(e, { slots: t }) {
    be(() => e.message, (s) => {
      Object.assign(A, s ?? {});
    }, { immediate: !0, deep: !0 });
    const n = rn(e);
    return () => re(t, "default", { config: n?.value });
  }
});
const hn = ["success", "info", "warning", "error"], N = Zo({
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
}), Xo = he({
  customClass: {
    type: String,
    default: N.customClass
  },
  center: {
    type: Boolean,
    default: N.center
  },
  dangerouslyUseHTMLString: {
    type: Boolean,
    default: N.dangerouslyUseHTMLString
  },
  duration: {
    type: Number,
    default: N.duration
  },
  icon: {
    type: dn,
    default: N.icon
  },
  id: {
    type: String,
    default: N.id
  },
  message: {
    type: j([
      String,
      Object,
      Function
    ]),
    default: N.message
  },
  onClose: {
    type: j(Function),
    default: N.onClose
  },
  showClose: {
    type: Boolean,
    default: N.showClose
  },
  type: {
    type: String,
    values: hn,
    default: N.type
  },
  plain: {
    type: Boolean,
    default: N.plain
  },
  offset: {
    type: Number,
    default: N.offset
  },
  zIndex: {
    type: Number,
    default: N.zIndex
  },
  grouping: {
    type: Boolean,
    default: N.grouping
  },
  repeatNum: {
    type: Number,
    default: N.repeatNum
  }
}), ei = {
  destroy: () => !0
}, B = Sn([]), ti = (e) => {
  const t = B.findIndex((o) => o.id === e), n = B[t];
  let s;
  return t > 0 && (s = B[t - 1]), { current: n, prev: s };
}, ni = (e) => {
  const { prev: t } = ti(e);
  return t ? t.vm.exposed.bottom.value : 0;
}, si = (e, t) => B.findIndex((s) => s.id === e) > 0 ? 16 : t, oi = D({
  name: "ElMessage"
}), ii = /* @__PURE__ */ D({
  ...oi,
  props: Xo,
  emits: ei,
  setup(e, { expose: t }) {
    const n = e, { Close: s } = Vo, { ns: o, zIndex: l } = an("message"), { currentZIndex: r, nextZIndex: d } = l, p = z(), _ = z(!1), m = z(0);
    let k;
    const $ = b(() => n.type ? n.type === "error" ? "danger" : n.type : "info"), x = b(() => {
      const O = n.type;
      return { [o.bm("icon", O)]: O && De[O] };
    }), R = b(() => n.icon || De[n.type] || ""), g = b(() => ni(n.id)), y = b(() => si(n.id, n.offset) + g.value), M = b(() => m.value + y.value), V = b(() => ({
      top: `${y.value}px`,
      zIndex: r.value
    }));
    function C() {
      n.duration !== 0 && ({ stop: k } = Jt(() => {
        U();
      }, n.duration));
    }
    function se() {
      k?.();
    }
    function U() {
      _.value = !1;
    }
    function Fe({ code: O }) {
      O === Oe.esc && U();
    }
    return je(() => {
      C(), d(), _.value = !0;
    }), be(() => n.repeatNum, () => {
      se(), C();
    }), Yt(document, "keydown", Fe), ho(p, () => {
      m.value = p.value.getBoundingClientRect().height;
    }), t({
      visible: _,
      bottom: M,
      close: U
    }), (O, u) => (v(), F(qe, {
      name: i(o).b("fade"),
      onBeforeLeave: O.onClose,
      onAfterLeave: (w) => O.$emit("destroy"),
      persisted: ""
    }, {
      default: Q(() => [
        P(a("div", {
          id: O.id,
          ref_key: "messageRef",
          ref: p,
          class: I([
            i(o).b(),
            { [i(o).m(O.type)]: O.type },
            i(o).is("center", O.center),
            i(o).is("closable", O.showClose),
            i(o).is("plain", O.plain),
            O.customClass
          ]),
          style: ze(i(V)),
          role: "alert",
          onMouseenter: se,
          onMouseleave: C
        }, [
          O.repeatNum > 1 ? (v(), F(i(Qo), {
            key: 0,
            value: O.repeatNum,
            type: i($),
            class: I(i(o).e("badge"))
          }, null, 8, ["value", "type", "class"])) : S("v-if", !0),
          i(R) ? (v(), F(i(xe), {
            key: 1,
            class: I([i(o).e("icon"), i(x)])
          }, {
            default: Q(() => [
              (v(), F(Et(i(R))))
            ]),
            _: 1
          }, 8, ["class"])) : S("v-if", !0),
          re(O.$slots, "default", {}, () => [
            O.dangerouslyUseHTMLString ? (v(), L(Qe, { key: 1 }, [
              S(" Caution here, message could've been compromised, never use user's input as message "),
              a("p", {
                class: I(i(o).e("content")),
                innerHTML: O.message
              }, null, 10, ["innerHTML"])
            ], 2112)) : (v(), L("p", {
              key: 0,
              class: I(i(o).e("content"))
            }, f(O.message), 3))
          ]),
          O.showClose ? (v(), F(i(xe), {
            key: 2,
            class: I(i(o).e("closeBtn")),
            onClick: Ye(U, ["stop"])
          }, {
            default: Q(() => [
              h(i(s))
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
    ...N,
    ...t
  };
  if (!n.appendTo)
    n.appendTo = document.body;
  else if (Y(n.appendTo)) {
    let s = document.querySelector(n.appendTo);
    Ge(s) || (s = document.body), n.appendTo = s;
  }
  return yt(A.grouping) && !n.grouping && (n.grouping = A.grouping), ee(A.duration) && n.duration === 3e3 && (n.duration = A.duration), ee(A.offset) && n.offset === 16 && (n.offset = A.offset), yt(A.showClose) && !n.showClose && (n.showClose = A.showClose), n;
}, li = (e) => {
  const t = B.indexOf(e);
  if (t === -1)
    return;
  B.splice(t, 1);
  const { handler: n } = e;
  n.close();
}, ci = ({ appendTo: e, ...t }, n) => {
  const s = `message_${ri++}`, o = t.onClose, l = document.createElement("div"), r = {
    ...t,
    id: s,
    onClose: () => {
      o?.(), li(m);
    },
    onDestroy: () => {
      Ie(null, l);
    }
  }, d = h(ai, r, ve(r.message) || ye(r.message) ? {
    default: ve(r.message) ? r.message : () => r.message
  } : null);
  d.appContext = n || ce._context, Ie(d, l), e.appendChild(l.firstElementChild);
  const p = d.component, m = {
    id: s,
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
    const o = B.find(({ vnode: l }) => {
      var r;
      return ((r = l.props) == null ? void 0 : r.message) === n.message;
    });
    if (o)
      return o.props.repeatNum += 1, o.props.type = n.type, o.handler;
  }
  if (ee(A.max) && B.length >= A.max)
    return { close: () => {
    } };
  const s = ci(n, t);
  return B.push(s), s.handler;
};
hn.forEach((e) => {
  ce[e] = (t = {}, n) => {
    const s = fn(t);
    return ce({ ...s, type: e }, n);
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
    type: j([
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
    type: j(Function),
    default: () => {
    }
  },
  onClose: {
    type: j(Function),
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
}, pi = D({
  name: "ElNotification"
}), gi = /* @__PURE__ */ D({
  ...pi,
  props: hi,
  emits: fi,
  setup(e, { expose: t }) {
    const n = e, { ns: s, zIndex: o } = an("notification"), { nextZIndex: l, currentZIndex: r } = o, { Close: d } = Ho, p = z(!1);
    let _;
    const m = b(() => {
      const C = n.type;
      return C && De[n.type] ? s.m(C) : "";
    }), k = b(() => n.type && De[n.type] || n.icon), $ = b(() => n.position.endsWith("right") ? "right" : "left"), x = b(() => n.position.startsWith("top") ? "top" : "bottom"), R = b(() => {
      var C;
      return {
        [x.value]: `${n.offset}px`,
        zIndex: (C = n.zIndex) != null ? C : r.value
      };
    });
    function g() {
      n.duration > 0 && ({ stop: _ } = Jt(() => {
        p.value && M();
      }, n.duration));
    }
    function y() {
      _?.();
    }
    function M() {
      p.value = !1;
    }
    function V({ code: C }) {
      C === Oe.delete || C === Oe.backspace ? y() : C === Oe.esc ? p.value && M() : g();
    }
    return je(() => {
      g(), l(), p.value = !0;
    }), Yt(document, "keydown", V), t({
      visible: p,
      close: M
    }), (C, se) => (v(), F(qe, {
      name: i(s).b("fade"),
      onBeforeLeave: C.onClose,
      onAfterLeave: (U) => C.$emit("destroy"),
      persisted: ""
    }, {
      default: Q(() => [
        P(a("div", {
          id: C.id,
          class: I([i(s).b(), C.customClass, i($)]),
          style: ze(i(R)),
          role: "alert",
          onMouseenter: y,
          onMouseleave: g,
          onClick: C.onClick
        }, [
          i(k) ? (v(), F(i(xe), {
            key: 0,
            class: I([i(s).e("icon"), i(m)])
          }, {
            default: Q(() => [
              (v(), F(Et(i(k))))
            ]),
            _: 1
          }, 8, ["class"])) : S("v-if", !0),
          a("div", {
            class: I(i(s).e("group"))
          }, [
            a("h2", {
              class: I(i(s).e("title")),
              textContent: f(C.title)
            }, null, 10, ["textContent"]),
            P(a("div", {
              class: I(i(s).e("content")),
              style: ze(C.title ? void 0 : { margin: 0 })
            }, [
              re(C.$slots, "default", {}, () => [
                C.dangerouslyUseHTMLString ? (v(), L(Qe, { key: 1 }, [
                  S(" Caution here, message could've been compromised, never use user's input as message "),
                  a("p", { innerHTML: C.message }, null, 8, ["innerHTML"])
                ], 2112)) : (v(), L("p", { key: 0 }, f(C.message), 1))
              ])
            ], 6), [
              [Te, C.message]
            ]),
            C.showClose ? (v(), F(i(xe), {
              key: 0,
              class: I(i(s).e("closeBtn")),
              onClick: Ye(M, ["stop"])
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
const Ee = {
  "top-left": [],
  "top-right": [],
  "bottom-left": [],
  "bottom-right": []
}, Je = 16;
let _i = 1;
const ue = function(e = {}, t) {
  if (!ne)
    return { close: () => {
    } };
  (Y(e) || ye(e)) && (e = { message: e });
  const n = e.position || "top-right";
  let s = e.offset || 0;
  Ee[n].forEach(({ vm: m }) => {
    var k;
    s += (((k = m.el) == null ? void 0 : k.offsetHeight) || 0) + Je;
  }), s += Je;
  const o = `notification_${_i++}`, l = e.onClose, r = {
    ...e,
    offset: s,
    id: o,
    onClose: () => {
      yi(o, n, l);
    }
  };
  let d = document.body;
  Ge(e.appendTo) ? d = e.appendTo : Y(e.appendTo) && (d = document.querySelector(e.appendTo)), Ge(d) || (d = document.body);
  const p = document.createElement("div"), _ = h(mi, r, ve(r.message) ? r.message : ye(r.message) ? () => r.message : null);
  return _.appContext = Kt(t) ? ue._context : t, _.props.onDestroy = () => {
    Ie(null, p);
  }, Ie(_, p), Ee[n].push({ vm: _ }), d.appendChild(p.firstElementChild), {
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
  const s = Ee[t], o = s.findIndex(({ vm: _ }) => {
    var m;
    return ((m = _.component) == null ? void 0 : m.props.id) === e;
  });
  if (o === -1)
    return;
  const { vm: l } = s[o];
  if (!l)
    return;
  n?.(l);
  const r = l.el.offsetHeight, d = t.split("-")[0];
  s.splice(o, 1);
  const p = s.length;
  if (!(p < 1))
    for (let _ = o; _ < p; _++) {
      const { el: m, component: k } = s[_].vm, $ = Number.parseInt(m.style[d], 10) - r - Je;
      k.props.offset = $;
    }
}
function vi() {
  for (const e of Object.values(Ee))
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
    s === "center" ? di({
      message: t,
      type: n,
      duration: o,
      showClose: l,
      grouping: !0,
      customClass: `app-toast app-toast--${n}`
    }) : wi({
      message: t,
      type: n,
      position: s,
      duration: o,
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
var Si = Symbol("icon-context");
function H(e, t, n) {
  var s = {
    name: "icon-" + e,
    props: ["size", "strokeWidth", "strokeLinecap", "strokeLinejoin", "theme", "fill", "spin"],
    setup: function(l) {
      var r = ki(), d = q(Si, bi);
      return function() {
        var p = l.size, _ = l.strokeWidth, m = l.strokeLinecap, k = l.strokeLinejoin, $ = l.theme, x = l.fill, R = l.spin, g = Ci(r, {
          size: p,
          strokeWidth: _,
          strokeLinecap: m,
          strokeLinejoin: k,
          theme: $,
          fill: x
        }, d), y = [d.prefix + "-icon"];
        return y.push(d.prefix + "-icon-" + e), t && d.rtl && y.push(d.prefix + "-icon-rtl"), R && y.push(d.prefix + "-icon-spin"), h("span", {
          class: y.join(" ")
        }, [n(g)]);
      };
    }
  };
  return s;
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
}), Oi = H("computer", !1, function(e) {
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
}), Mi = H("local", !1, function(e) {
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
}), He = H("moon", !0, function(e) {
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
}), $t = H("sun-one", !1, function(e) {
  return h("svg", {
    width: e.size,
    height: e.size,
    viewBox: "0 0 48 48",
    fill: "none"
  }, [h("path", {
    d: "M24 37C31.1797 37 37 31.1797 37 24C37 16.8203 31.1797 11 24 11C16.8203 11 11 16.8203 11 24C11 31.1797 16.8203 37 24 37Z",
    fill: e.colors[1],
    stroke: e.colors[0],
    "stroke-width": e.strokeWidth,
    "stroke-linejoin": e.strokeLinejoin
  }, null), h("path", {
    d: "M24 6C25.3807 6 26.5 4.88071 26.5 3.5C26.5 2.11929 25.3807 1 24 1C22.6193 1 21.5 2.11929 21.5 3.5C21.5 4.88071 22.6193 6 24 6Z",
    fill: e.colors[0]
  }, null), h("path", {
    d: "M38.5 12C39.8807 12 41 10.8807 41 9.5C41 8.11929 39.8807 7 38.5 7C37.1193 7 36 8.11929 36 9.5C36 10.8807 37.1193 12 38.5 12Z",
    fill: e.colors[0]
  }, null), h("path", {
    d: "M44.5 26.5C45.8807 26.5 47 25.3807 47 24C47 22.6193 45.8807 21.5 44.5 21.5C43.1193 21.5 42 22.6193 42 24C42 25.3807 43.1193 26.5 44.5 26.5Z",
    fill: e.colors[0]
  }, null), h("path", {
    d: "M38.5 41C39.8807 41 41 39.8807 41 38.5C41 37.1193 39.8807 36 38.5 36C37.1193 36 36 37.1193 36 38.5C36 39.8807 37.1193 41 38.5 41Z",
    fill: e.colors[0]
  }, null), h("path", {
    d: "M24 47C25.3807 47 26.5 45.8807 26.5 44.5C26.5 43.1193 25.3807 42 24 42C22.6193 42 21.5 43.1193 21.5 44.5C21.5 45.8807 22.6193 47 24 47Z",
    fill: e.colors[0]
  }, null), h("path", {
    d: "M9.5 41C10.8807 41 12 39.8807 12 38.5C12 37.1193 10.8807 36 9.5 36C8.11929 36 7 37.1193 7 38.5C7 39.8807 8.11929 41 9.5 41Z",
    fill: e.colors[0]
  }, null), h("path", {
    d: "M3.5 26.5C4.88071 26.5 6 25.3807 6 24C6 22.6193 4.88071 21.5 3.5 21.5C2.11929 21.5 1 22.6193 1 24C1 25.3807 2.11929 26.5 3.5 26.5Z",
    fill: e.colors[0]
  }, null), h("path", {
    d: "M9.5 12C10.8807 12 12 10.8807 12 9.5C12 8.11929 10.8807 7 9.5 7C8.11929 7 7 8.11929 7 9.5C7 10.8807 8.11929 12 9.5 12Z",
    fill: e.colors[0]
  }, null)]);
}), Nt = H("sunrise", !0, function(e) {
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
}), zi = H("sunset", !1, function(e) {
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
}), xt = H("time", !0, function(e) {
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
}), Ti = "snippets-code:developer-mode", gn = "snippets-code:frontend-diagnostics", Ii = 240, ge = "[REDACTED]", Me = (e) => e.replace(
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
  if (typeof e == "string") return Me(e);
  const t = /* @__PURE__ */ new WeakSet();
  try {
    return Me(
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
    return Me(String(e));
  }
}, $i = () => {
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
}, rt = () => {
  if (typeof localStorage > "u") return !1;
  try {
    return localStorage.getItem(Ti) === "true";
  } catch {
    return !1;
  }
}, xi = (e, t, n) => {
  if (!rt() || typeof localStorage > "u") return;
  const s = Ni();
  s.push({
    timestamp: (/* @__PURE__ */ new Date()).toISOString(),
    level: e,
    windowLabel: $i(),
    message: Me(t),
    data: mn(n)
  });
  try {
    localStorage.setItem(
      gn,
      JSON.stringify(s.slice(-Ii))
    );
  } catch {
  }
}, Di = () => rt(), Ei = (e) => e === "error" || rt(), Ce = (e, t, n) => {
  xi(e, t, n), Ei(e) && c("frontend_log", {
    level: e,
    message: t,
    data: n === void 0 ? null : mn(n)
  }).catch(() => {
  });
}, Z = {
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
}, ji = {
  class: "title-bar fixed top-0 left-0 right-0 z-10 flex items-center justify-between px-3 py-2",
  "data-tauri-drag-region": ""
}, Pi = { class: "flex items-center gap-2" }, Wi = { class: "title-icon-wrap" }, Ai = { class: "m-0 text-base font-medium tracking-tight" }, Fi = { class: "content mx-auto max-w-xl px-4 pt-14 pb-4" }, Bi = { class: "section" }, Ri = { class: "section-title" }, Ui = { class: "mode-selector grid grid-cols-2 gap-2.5" }, Hi = { class: "mode-option block cursor-pointer h-full" }, Vi = { class: "mode-content mode-system" }, Zi = { class: "mode-icon-wrap" }, Gi = { class: "mode-body" }, Ki = { class: "mode-title" }, Ji = { class: "mode-desc" }, qi = { class: "mode-option block cursor-pointer h-full" }, Qi = { class: "mode-content mode-light" }, Yi = { class: "mode-icon-wrap" }, Xi = { class: "mode-body" }, ea = { class: "mode-title" }, ta = { class: "mode-desc" }, na = { class: "mode-option block cursor-pointer h-full" }, sa = { class: "mode-content mode-dark" }, oa = { class: "mode-icon-wrap" }, ia = { class: "mode-body" }, aa = { class: "mode-title" }, ra = { class: "mode-desc" }, la = { class: "mode-option block cursor-pointer h-full" }, ca = { class: "mode-content mode-schedule" }, ua = { class: "mode-icon-wrap" }, da = { class: "mode-body" }, ha = { class: "mode-title" }, fa = { class: "mode-desc" }, pa = { class: "section" }, ga = { class: "status-card" }, ma = { class: "status-row" }, _a = { class: "status-label" }, ya = {
  key: 0,
  class: "status-row"
}, va = { class: "status-label" }, wa = {
  key: 1,
  class: "status-hint"
}, ba = { class: "section" }, ka = { class: "section-title" }, Ca = { class: "mode-selector grid grid-cols-2 gap-2.5" }, Sa = { class: "mode-option block cursor-pointer h-full" }, La = { class: "schedule-type-card" }, Oa = { class: "schedule-type-title" }, Ma = { class: "schedule-type-desc" }, za = { class: "mode-option block cursor-pointer h-full" }, Ta = { class: "schedule-type-card" }, Ia = { class: "schedule-type-title" }, $a = { class: "schedule-type-desc" }, Na = {
  key: 0,
  class: "section"
}, xa = { class: "section-title section-title-with-icon" }, Da = { class: "inset-card location-card" }, Ea = {
  key: 0,
  class: "loading-hint"
}, ja = {
  key: 1,
  class: "location-info"
}, Pa = { class: "info-row" }, Wa = { class: "info-label" }, Aa = { class: "info-value" }, Fa = { class: "info-row" }, Ba = { class: "info-label" }, Ra = { class: "info-value" }, Ua = { class: "info-row" }, Ha = { class: "info-label" }, Va = { class: "info-value" }, Za = ["disabled"], Ga = {
  key: 1,
  class: "section"
}, Ka = { class: "section-title" }, Ja = { class: "inset-card sun-times-card" }, qa = { class: "sun-row" }, Qa = { class: "sun-info" }, Ya = { class: "sun-label" }, Xa = { class: "sun-value" }, er = { class: "sun-row" }, tr = { class: "sun-info" }, nr = { class: "sun-label" }, sr = { class: "sun-value" }, or = { class: "sun-row sun-period" }, ir = { class: "sun-label" }, ar = {
  key: 2,
  class: "section"
}, rr = { class: "inset-card location-card" }, lr = { class: "info-row" }, cr = { class: "info-value" }, ur = {
  key: 0,
  class: "info-row"
}, dr = { class: "info-value" }, hr = {
  key: 1,
  class: "info-row"
}, fr = { class: "info-value" }, pr = {
  key: 2,
  class: "info-row"
}, gr = { class: "info-value" }, mr = {
  key: 3,
  class: "info-row"
}, _r = { class: "info-value" }, yr = {
  key: 3,
  class: "section"
}, vr = { class: "section-title" }, wr = { class: "inset-card time-settings" }, br = { class: "time-row" }, kr = { class: "time-label-text" }, Cr = { class: "time-row" }, Sr = { class: "time-label-text" }, Lr = /* @__PURE__ */ D({
  __name: "index",
  setup(e) {
    const { t } = On(), n = z({
      theme_mode: "Light",
      schedule_type: "SunBased",
      custom_light_time: "06:00",
      custom_dark_time: "18:00",
      latitude: null,
      longitude: null,
      timezone_offset: null,
      location_name: null
    }), s = z(!1), o = z(!1), l = z(null), r = z(null), d = z(null), p = z(!1), _ = z(!1), m = z(!1), k = z(null), $ = b(() => s.value), x = b(() => {
      const u = d.value?.source || "";
      return u.startsWith("manual:") ? `手动位置（${u.replace("manual:", "")}）` : u.startsWith("ip:") ? `自动定位（${u.replace("ip:", "")}）` : u || "-";
    }), R = async () => {
      try {
        const u = await c("get_dark_mode_config");
        n.value = u, await g();
      } catch (u) {
        Z.error("[主题] 加载配置失败", u), pe.msg(t("darkMode.loadConfigFailed"), "error");
      }
    }, g = async () => {
      try {
        const u = await c("get_dark_mode_status_command");
        s.value = u.currentIsDark, o.value = u.schedulerRunning, d.value = u.sunCalcDebug ?? null;
      } catch (u) {
        Z.error("[主题] 加载状态失败", u);
      }
    }, y = async () => {
      p.value = !0;
      try {
        const u = await c("get_location_info");
        l.value = u, n.value.latitude = u.latitude, n.value.longitude = u.longitude, n.value.timezone_offset = u.timezone_offset, n.value.location_name = `${u.city}, ${u.region}`, n.value.schedule_type === "SunBased" && await M(), await U();
      } catch (u) {
        Z.error("[主题] 获取位置失败", u), pe.msg(t("darkMode.getLocationFailed"), "error");
      } finally {
        await g(), p.value = !1;
      }
    }, M = async () => {
      if (!(!n.value.latitude || !n.value.longitude))
        try {
          const u = await c("calculate_sun_times_command", {
            latitude: n.value.latitude,
            longitude: n.value.longitude,
            timezoneOffset: n.value.timezone_offset || 0
          });
          r.value = u;
        } catch (u) {
          Z.error("[主题] 计算日出日落时间失败", u);
        }
    }, V = async () => {
      m.value || (await U(), n.value.theme_mode === "Schedule" && n.value.schedule_type === "SunBased" && !l.value && await y());
    }, C = async () => {
      m.value || (n.value.schedule_type === "SunBased" && !l.value && await y(), await U());
    }, se = async () => {
      m.value || n.value.schedule_type === "Custom" && await U();
    }, U = async () => {
      if (!m.value) {
        _.value = !0;
        try {
          await c("save_dark_mode_config_command", { config: n.value }), await g();
        } catch (u) {
          Z.error("[主题] 保存配置失败", u), pe.msg(t("darkMode.saveConfigFailed"), "error");
        } finally {
          _.value = !1;
        }
      }
    }, Fe = async () => {
      try {
        const u = await c("toggle_system_theme");
        s.value = u;
        const w = t(u ? "darkMode.darkTheme" : "darkMode.lightTheme");
        let T = t("darkMode.switchedTo", { theme: w });
        n.value.theme_mode === "Schedule" && (T += t("darkMode.autoRestoreNote")), pe.msg(T, "success");
      } catch (u) {
        Z.error("[主题] 切换主题失败", u), pe.msg(t("darkMode.toggleFailed"), "error");
      }
    }, O = () => {
      Ze().close();
    };
    return je(async () => {
      await R(), n.value.theme_mode === "Schedule" && n.value.schedule_type === "SunBased" && await y(), k.value = await Xe("dark-mode-changed", async (u) => {
        Z.debug(
          `[主题][窗口:dark_mode] 收到主题变更：${JSON.stringify(u.payload)}`
        ), s.value = u.payload.isDark, m.value = !0;
        try {
          await R(), Z.debug(
            `[主题][窗口:dark_mode] 已从后端刷新配置：theme_mode=${n.value.theme_mode}, schedule_type=${n.value.schedule_type}`
          );
        } finally {
          m.value = !1;
        }
      }), Dt(() => {
        setTimeout(() => {
          Ze().emit("dark_mode_ready");
        }, 100);
      });
    }), be(
      () => n.value.schedule_type,
      async (u) => {
        u === "SunBased" && n.value.latitude && n.value.longitude && await M();
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
        a("div", ji, [
          a("div", Pi, [
            a("div", Wi, [
              h(i(He), {
                class: "text-lg",
                theme: "filled"
              })
            ]),
            a(
              "h1",
              Ai,
              f(u.$t("darkMode.title")),
              1
              /* TEXT */
            )
          ]),
          a(
            "button",
            {
              type: "button",
              onMousedown: w[0] || (w[0] = Ye(() => {
              }, ["stop"])),
              onClick: O,
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
        a("div", Fi, [
          S(" 主题模式选择（四选一） "),
          a("div", Bi, [
            a(
              "h2",
              Ri,
              f(u.$t("darkMode.themeMode")),
              1
              /* TEXT */
            ),
            a("div", Ui, [
              a("label", Hi, [
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
                  [oe, i(n).theme_mode]
                ]),
                a("div", Vi, [
                  a("span", Zi, [
                    h(i(Oi), {
                      class: "mode-icon",
                      theme: "filled",
                      size: 22
                    })
                  ]),
                  a("div", Gi, [
                    a(
                      "span",
                      Ki,
                      f(u.$t("darkMode.systemMode")),
                      1
                      /* TEXT */
                    ),
                    a(
                      "span",
                      Ji,
                      f(u.$t("darkMode.systemModeDesc")),
                      1
                      /* TEXT */
                    )
                  ])
                ])
              ]),
              a("label", qi, [
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
                  [oe, i(n).theme_mode]
                ]),
                a("div", Qi, [
                  a("span", Yi, [
                    h(i($t), {
                      class: "mode-icon",
                      theme: "filled",
                      size: 22
                    })
                  ]),
                  a("div", Xi, [
                    a(
                      "span",
                      ea,
                      f(u.$t("darkMode.lightMode")),
                      1
                      /* TEXT */
                    ),
                    a(
                      "span",
                      ta,
                      f(u.$t("darkMode.lightModeDesc")),
                      1
                      /* TEXT */
                    )
                  ])
                ])
              ]),
              a("label", na, [
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
                  [oe, i(n).theme_mode]
                ]),
                a("div", sa, [
                  a("span", oa, [
                    h(i(He), {
                      class: "mode-icon",
                      theme: "filled",
                      size: 22
                    })
                  ]),
                  a("div", ia, [
                    a(
                      "span",
                      aa,
                      f(u.$t("darkMode.darkMode")),
                      1
                      /* TEXT */
                    ),
                    a(
                      "span",
                      ra,
                      f(u.$t("darkMode.darkModeDesc")),
                      1
                      /* TEXT */
                    )
                  ])
                ])
              ]),
              a("label", la, [
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
                  [oe, i(n).theme_mode]
                ]),
                a("div", ca, [
                  a("span", ua, [
                    h(i(xt), {
                      class: "mode-icon",
                      theme: "filled",
                      size: 22
                    })
                  ]),
                  a("div", da, [
                    a(
                      "span",
                      ha,
                      f(u.$t("darkMode.scheduleMode")),
                      1
                      /* TEXT */
                    ),
                    a(
                      "span",
                      fa,
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
          a("div", pa, [
            a("div", ga, [
              a("div", ma, [
                a(
                  "span",
                  _a,
                  f(u.$t("darkMode.currentTheme")),
                  1
                  /* TEXT */
                ),
                a(
                  "span",
                  {
                    class: I(["status-badge", i(s) ? "badge-dark" : "badge-light"])
                  },
                  f(i(s) ? u.$t("darkMode.darkTheme") : u.$t("darkMode.lightTheme")),
                  3
                  /* TEXT, CLASS */
                )
              ]),
              i(n).theme_mode === "Schedule" ? (v(), L("div", ya, [
                a(
                  "span",
                  va,
                  f(u.$t("darkMode.schedulerStatus")),
                  1
                  /* TEXT */
                ),
                a(
                  "span",
                  {
                    class: I(["status-badge", i(o) ? "badge-success" : "badge-danger"])
                  },
                  f(i(o) ? u.$t("darkMode.running") : u.$t("darkMode.stopped")),
                  3
                  /* TEXT, CLASS */
                )
              ])) : S("v-if", !0),
              i(n).theme_mode !== "Schedule" ? (v(), L(
                "p",
                wa,
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
            Qe,
            { key: 0 },
            [
              S(" 定时类型选择 "),
              a("div", ba, [
                a(
                  "h2",
                  ka,
                  f(u.$t("darkMode.scheduleType")),
                  1
                  /* TEXT */
                ),
                a("div", Ca, [
                  a("label", Sa, [
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
                      [oe, i(n).schedule_type]
                    ]),
                    a("div", La, [
                      a("span", Oa, [
                        h(i(Nt), { size: 18 }),
                        J(
                          " " + f(u.$t("darkMode.sunBased")),
                          1
                          /* TEXT */
                        )
                      ]),
                      a(
                        "span",
                        Ma,
                        f(u.$t("darkMode.sunBasedDesc")),
                        1
                        /* TEXT */
                      )
                    ])
                  ]),
                  a("label", za, [
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
                      [oe, i(n).schedule_type]
                    ]),
                    a("div", Ta, [
                      a("span", Ia, [
                        h(i(xt), { size: 18 }),
                        J(
                          " " + f(u.$t("darkMode.customSchedule")),
                          1
                          /* TEXT */
                        )
                      ]),
                      a(
                        "span",
                        $a,
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
                  h(i(Mi), {
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
                  )) : i(l) ? (v(), L("div", ja, [
                    a("div", Pa, [
                      a(
                        "span",
                        Wa,
                        f(u.$t("darkMode.location")),
                        1
                        /* TEXT */
                      ),
                      a(
                        "span",
                        Aa,
                        f(i(l).city) + ", " + f(i(l).region) + ", " + f(i(l).country),
                        1
                        /* TEXT */
                      )
                    ]),
                    a("div", Fa, [
                      a(
                        "span",
                        Ba,
                        f(u.$t("darkMode.timezone")),
                        1
                        /* TEXT */
                      ),
                      a(
                        "span",
                        Ra,
                        f(i(l).timezone),
                        1
                        /* TEXT */
                      )
                    ]),
                    a("div", Ua, [
                      a(
                        "span",
                        Ha,
                        f(u.$t("darkMode.coordinates")),
                        1
                        /* TEXT */
                      ),
                      a(
                        "span",
                        Va,
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
              i(n).schedule_type === "SunBased" && i(r) ? (v(), L("div", Ga, [
                a(
                  "h2",
                  Ka,
                  f(u.$t("darkMode.sunTimes")),
                  1
                  /* TEXT */
                ),
                a("div", Ja, [
                  a("div", qa, [
                    h(i(Nt), {
                      class: "sun-icon",
                      theme: "filled",
                      size: 20
                    }),
                    a("div", Qa, [
                      a(
                        "span",
                        Ya,
                        f(u.$t("darkMode.sunrise")),
                        1
                        /* TEXT */
                      ),
                      a(
                        "span",
                        Xa,
                        f(i(r).sunrise),
                        1
                        /* TEXT */
                      )
                    ])
                  ]),
                  a("div", er, [
                    h(i(zi), {
                      class: "sun-icon",
                      theme: "filled",
                      size: 20
                    }),
                    a("div", tr, [
                      a(
                        "span",
                        nr,
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
                  a("div", or, [
                    a(
                      "span",
                      ir,
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
              i(n).schedule_type === "SunBased" ? (v(), L("div", ar, [
                w[15] || (w[15] = a(
                  "h2",
                  { class: "section-title" },
                  "计算依据",
                  -1
                  /* HOISTED */
                )),
                a("div", rr, [
                  a("div", lr, [
                    w[10] || (w[10] = a(
                      "span",
                      { class: "info-label" },
                      "来源",
                      -1
                      /* HOISTED */
                    )),
                    a(
                      "span",
                      cr,
                      f(i(x)),
                      1
                      /* TEXT */
                    )
                  ]),
                  i(d)?.latitude !== void 0 && i(d)?.longitude !== void 0 ? (v(), L("div", ur, [
                    w[11] || (w[11] = a(
                      "span",
                      { class: "info-label" },
                      "计算坐标",
                      -1
                      /* HOISTED */
                    )),
                    a(
                      "span",
                      dr,
                      f(Number(i(d)?.latitude).toFixed(4)) + ", " + f(Number(i(d)?.longitude).toFixed(4)),
                      1
                      /* TEXT */
                    )
                  ])) : S("v-if", !0),
                  i(d)?.timezoneOffset !== void 0 ? (v(), L("div", hr, [
                    w[12] || (w[12] = a(
                      "span",
                      { class: "info-label" },
                      "时区偏移(分钟)",
                      -1
                      /* HOISTED */
                    )),
                    a(
                      "span",
                      fr,
                      f(i(d)?.timezoneOffset),
                      1
                      /* TEXT */
                    )
                  ])) : S("v-if", !0),
                  i(d)?.sunset ? (v(), L("div", pr, [
                    w[13] || (w[13] = a(
                      "span",
                      { class: "info-label" },
                      "用于切换的日落时间",
                      -1
                      /* HOISTED */
                    )),
                    a(
                      "span",
                      gr,
                      f(i(d)?.sunset),
                      1
                      /* TEXT */
                    )
                  ])) : S("v-if", !0),
                  i(d)?.error ? (v(), L("div", mr, [
                    w[14] || (w[14] = a(
                      "span",
                      { class: "info-label" },
                      "错误",
                      -1
                      /* HOISTED */
                    )),
                    a(
                      "span",
                      _r,
                      f(i(d)?.error),
                      1
                      /* TEXT */
                    )
                  ])) : S("v-if", !0)
                ])
              ])) : S("v-if", !0),
              S(" 自定义时间 "),
              i(n).schedule_type === "Custom" ? (v(), L("div", yr, [
                a(
                  "h2",
                  vr,
                  f(u.$t("darkMode.customTime")),
                  1
                  /* TEXT */
                ),
                a("div", wr, [
                  a("label", br, [
                    a("span", kr, [
                      h(i($t), {
                        theme: "filled",
                        size: 18
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
                        onChange: se,
                        class: "time-input"
                      },
                      null,
                      544
                      /* NEED_HYDRATION, NEED_PATCH */
                    ), [
                      [lt, i(n).custom_light_time]
                    ])
                  ]),
                  a("label", Cr, [
                    a("span", Sr, [
                      h(i(He), {
                        theme: "filled",
                        size: 18
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
                        onChange: se,
                        class: "time-input"
                      },
                      null,
                      544
                      /* NEED_HYDRATION, NEED_PATCH */
                    ), [
                      [lt, i(n).custom_dark_time]
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
  for (const [s, o] of t)
    n[s] = o;
  return n;
}, Mr = /* @__PURE__ */ Or(Lr, [["__scopeId", "data-v-ed13e983"]]), zr = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Mr
}, Symbol.toStringTag, { value: "Module" }));
export {
  $r as activate
};
