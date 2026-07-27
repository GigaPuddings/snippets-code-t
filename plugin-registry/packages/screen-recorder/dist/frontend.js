import { inject as ye, createVNode as P, getCurrentInstance as Ie, ref as R, computed as m, unref as i, readonly as Co, getCurrentScope as ko, onScopeDispose as So, onMounted as bt, nextTick as ge, watch as we, isRef as Ro, warn as Mo, provide as xo, defineComponent as W, createElementBlock as x, openBlock as C, mergeProps as To, renderSlot as Ne, createElementVNode as c, normalizeClass as $, Transition as Xt, withCtx as me, withDirectives as _e, normalizeStyle as Pe, createTextVNode as Oo, toDisplayString as M, vShow as pt, shallowReactive as Eo, createBlock as re, createCommentVNode as ne, resolveDynamicComponent as as, Fragment as ue, withModifiers as Ee, isVNode as qe, render as ft, onUnmounted as rs, renderList as Io, vModelSelect as Ft } from "vue";
import { useI18n as No } from "vue-i18n";
const wc = (e) => {
  e.registerRoute({
    target: "window",
    path: "/screen-recorder",
    name: "ScreenRecorder",
    component: () => Promise.resolve().then(() => gc)
  });
};
function Po(e, t, n, s) {
  if (typeof t == "function" ? e !== t || !0 : !t.has(e)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
  return n === "m" ? s : n === "a" ? s.call(e) : s ? s.value : t.get(e);
}
function zo(e, t, n, s, r) {
  if (typeof t == "function" ? e !== t || !0 : !t.has(e)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
  return t.set(e, n), n;
}
var ct;
const K = "__TAURI_TO_IPC_KEY__";
function Lo(e, t = !1) {
  return window.__TAURI_INTERNALS__.transformCallback(e, t);
}
async function h(e, t = {}, n) {
  return window.__TAURI_INTERNALS__.invoke(e, t, n);
}
class $o {
  get rid() {
    return Po(this, ct, "f");
  }
  constructor(t) {
    ct.set(this, void 0), zo(this, ct, t);
  }
  /**
   * Destroys and cleans up this resource from memory.
   * **You should not call any method on this object anymore and should drop any reference to it.**
   */
  async close() {
    return h("plugin:resources|close", {
      rid: this.rid
    });
  }
}
ct = /* @__PURE__ */ new WeakMap();
class ve {
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
    return new be(this.width * t, this.height * t);
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
class be {
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
    return new ve(this.width / t, this.height / t);
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
class Oe {
  constructor(t) {
    this.size = t;
  }
  toLogical(t) {
    return this.size instanceof ve ? this.size : this.size.toLogical(t);
  }
  toPhysical(t) {
    return this.size instanceof be ? this.size : this.size.toPhysical(t);
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
class is {
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
    return new te(this.x * t, this.y * t);
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
class te {
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
    return new is(this.x / t, this.y / t);
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
class at {
  constructor(t) {
    this.position = t;
  }
  toLogical(t) {
    return this.position instanceof is ? this.position : this.position.toLogical(t);
  }
  toPhysical(t) {
    return this.position instanceof te ? this.position : this.position.toPhysical(t);
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
var H;
(function(e) {
  e.WINDOW_RESIZED = "tauri://resize", e.WINDOW_MOVED = "tauri://move", e.WINDOW_CLOSE_REQUESTED = "tauri://close-requested", e.WINDOW_DESTROYED = "tauri://destroyed", e.WINDOW_FOCUS = "tauri://focus", e.WINDOW_BLUR = "tauri://blur", e.WINDOW_SCALE_FACTOR_CHANGED = "tauri://scale-change", e.WINDOW_THEME_CHANGED = "tauri://theme-changed", e.WINDOW_CREATED = "tauri://window-created", e.WEBVIEW_CREATED = "tauri://webview-created", e.DRAG_ENTER = "tauri://drag-enter", e.DRAG_OVER = "tauri://drag-over", e.DRAG_DROP = "tauri://drag-drop", e.DRAG_LEAVE = "tauri://drag-leave";
})(H || (H = {}));
async function ls(e, t) {
  await h("plugin:event|unlisten", {
    event: e,
    eventId: t
  });
}
async function gt(e, t, n) {
  var s;
  const r = typeof n?.target == "string" ? { kind: "AnyLabel", label: n.target } : (s = n?.target) !== null && s !== void 0 ? s : { kind: "Any" };
  return h("plugin:event|listen", {
    event: e,
    target: r,
    handler: Lo(t)
  }).then((u) => async () => ls(e, u));
}
async function Ao(e, t, n) {
  return gt(e, (s) => {
    ls(e, s.id), t(s);
  }, n);
}
async function Do(e, t) {
  await h("plugin:event|emit", {
    event: e,
    payload: t
  });
}
async function Wo(e, t, n) {
  await h("plugin:event|emit_to", {
    target: typeof e == "string" ? { kind: "AnyLabel", label: e } : e,
    event: t,
    payload: n
  });
}
class Ke extends $o {
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
    return h("plugin:image|new", {
      rgba: vt(t),
      width: n,
      height: s
    }).then((r) => new Ke(r));
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
    return h("plugin:image|from_bytes", {
      bytes: vt(t)
    }).then((n) => new Ke(n));
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
    return h("plugin:image|from_path", { path: t }).then((n) => new Ke(n));
  }
  /** Returns the RGBA data for this image, in row-major order from top to bottom.  */
  async rgba() {
    return h("plugin:image|rgba", {
      rid: this.rid
    }).then((t) => new Uint8Array(t));
  }
  /** Returns the size of this image.  */
  async size() {
    return h("plugin:image|size", { rid: this.rid });
  }
}
function vt(e) {
  return e == null ? null : typeof e == "string" ? e : e instanceof Ke ? e.rid : e;
}
var Yt;
(function(e) {
  e[e.Critical = 1] = "Critical", e[e.Informational = 2] = "Informational";
})(Yt || (Yt = {}));
class Fo {
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
var zn;
(function(e) {
  e.None = "none", e.Normal = "normal", e.Indeterminate = "indeterminate", e.Paused = "paused", e.Error = "error";
})(zn || (zn = {}));
function cs() {
  return new us(window.__TAURI_INTERNALS__.metadata.currentWindow.label, {
    // @ts-expect-error `skip` is not defined in the public API but it is handled by the constructor
    skip: !0
  });
}
async function Bt() {
  return h("plugin:window|get_all_windows").then((e) => e.map((t) => new us(t, {
    // @ts-expect-error `skip` is not defined in the public API but it is handled by the constructor
    skip: !0
  })));
}
const jt = ["tauri://created", "tauri://error"];
class us {
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
    this.label = t, this.listeners = /* @__PURE__ */ Object.create(null), n?.skip || h("plugin:window|create", {
      options: {
        ...n,
        parent: typeof n.parent == "string" ? n.parent : (s = n.parent) === null || s === void 0 ? void 0 : s.label,
        label: t
      }
    }).then(async () => this.emit("tauri://created")).catch(async (r) => this.emit("tauri://error", r));
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
    return (n = (await Bt()).find((s) => s.label === t)) !== null && n !== void 0 ? n : null;
  }
  /**
   * Get an instance of `Window` for the current window.
   */
  static getCurrent() {
    return cs();
  }
  /**
   * Gets a list of instances of `Window` for all available windows.
   */
  static async getAll() {
    return Bt();
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
    for (const t of await Bt())
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
    } : gt(t, n, {
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
    } : Ao(t, n, {
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
    if (jt.includes(t)) {
      for (const s of this.listeners[t] || [])
        s({
          event: t,
          id: -1,
          payload: n
        });
      return;
    }
    return Do(t, n);
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
    if (jt.includes(n)) {
      for (const r of this.listeners[n] || [])
        r({
          event: n,
          id: -1,
          payload: s
        });
      return;
    }
    return Wo(t, n, s);
  }
  /** @ignore */
  _handleTauriEvent(t, n) {
    return jt.includes(t) ? (t in this.listeners ? this.listeners[t].push(n) : this.listeners[t] = [n], !0) : !1;
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
    return h("plugin:window|scale_factor", {
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
    return h("plugin:window|inner_position", {
      label: this.label
    }).then((t) => new te(t));
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
    return h("plugin:window|outer_position", {
      label: this.label
    }).then((t) => new te(t));
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
    return h("plugin:window|inner_size", {
      label: this.label
    }).then((t) => new be(t));
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
    return h("plugin:window|outer_size", {
      label: this.label
    }).then((t) => new be(t));
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
    return h("plugin:window|is_fullscreen", {
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
    return h("plugin:window|is_minimized", {
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
    return h("plugin:window|is_maximized", {
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
    return h("plugin:window|is_focused", {
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
    return h("plugin:window|is_decorated", {
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
    return h("plugin:window|is_resizable", {
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
    return h("plugin:window|is_maximizable", {
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
    return h("plugin:window|is_minimizable", {
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
    return h("plugin:window|is_closable", {
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
    return h("plugin:window|is_visible", {
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
    return h("plugin:window|title", {
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
    return h("plugin:window|theme", {
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
    return h("plugin:window|is_always_on_top", {
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
    return h("plugin:window|center", {
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
    return t && (t === Yt.Critical ? n = { type: "Critical" } : n = { type: "Informational" }), h("plugin:window|request_user_attention", {
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
    return h("plugin:window|set_resizable", {
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
    return h("plugin:window|set_enabled", {
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
    return h("plugin:window|is_enabled", {
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
    return h("plugin:window|set_maximizable", {
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
    return h("plugin:window|set_minimizable", {
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
    return h("plugin:window|set_closable", {
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
    return h("plugin:window|set_title", {
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
    return h("plugin:window|maximize", {
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
    return h("plugin:window|unmaximize", {
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
    return h("plugin:window|toggle_maximize", {
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
    return h("plugin:window|minimize", {
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
    return h("plugin:window|unminimize", {
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
    return h("plugin:window|show", {
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
    return h("plugin:window|hide", {
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
    return h("plugin:window|close", {
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
    return h("plugin:window|destroy", {
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
    return h("plugin:window|set_decorations", {
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
    return h("plugin:window|set_shadow", {
      label: this.label,
      value: t
    });
  }
  /**
   * Set window effects.
   */
  async setEffects(t) {
    return h("plugin:window|set_effects", {
      label: this.label,
      value: t
    });
  }
  /**
   * Clear any applied effects if possible.
   */
  async clearEffects() {
    return h("plugin:window|set_effects", {
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
    return h("plugin:window|set_always_on_top", {
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
    return h("plugin:window|set_always_on_bottom", {
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
    return h("plugin:window|set_content_protected", {
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
    return h("plugin:window|set_size", {
      label: this.label,
      value: t instanceof Oe ? t : new Oe(t)
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
    return h("plugin:window|set_min_size", {
      label: this.label,
      value: t instanceof Oe ? t : t ? new Oe(t) : null
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
    return h("plugin:window|set_max_size", {
      label: this.label,
      value: t instanceof Oe ? t : t ? new Oe(t) : null
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
    return h("plugin:window|set_size_constraints", {
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
    return h("plugin:window|set_position", {
      label: this.label,
      value: t instanceof at ? t : new at(t)
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
    return h("plugin:window|set_fullscreen", {
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
    return h("plugin:window|set_focus", {
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
    return h("plugin:window|set_icon", {
      label: this.label,
      value: vt(t)
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
    return h("plugin:window|set_skip_taskbar", {
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
    return h("plugin:window|set_cursor_grab", {
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
    return h("plugin:window|set_cursor_visible", {
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
    return h("plugin:window|set_cursor_icon", {
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
    return h("plugin:window|set_background_color", { color: t });
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
    return h("plugin:window|set_cursor_position", {
      label: this.label,
      value: t instanceof at ? t : new at(t)
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
    return h("plugin:window|set_ignore_cursor_events", {
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
    return h("plugin:window|start_dragging", {
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
    return h("plugin:window|start_resize_dragging", {
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
    return h("plugin:window|set_badge_count", {
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
    return h("plugin:window|set_badge_label", {
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
    return h("plugin:window|set_overlay_icon", {
      label: this.label,
      value: t ? vt(t) : void 0
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
    return h("plugin:window|set_progress_bar", {
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
    return h("plugin:window|set_visible_on_all_workspaces", {
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
    return h("plugin:window|set_title_bar_style", {
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
    return h("plugin:window|set_theme", {
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
      n.payload = new be(n.payload), t(n);
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
      n.payload = new te(n.payload), t(n);
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
      const s = new Fo(n);
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
    const n = await this.listen(H.DRAG_ENTER, (l) => {
      t({
        ...l,
        payload: {
          type: "enter",
          paths: l.payload.paths,
          position: new te(l.payload.position)
        }
      });
    }), s = await this.listen(H.DRAG_OVER, (l) => {
      t({
        ...l,
        payload: {
          type: "over",
          position: new te(l.payload.position)
        }
      });
    }), r = await this.listen(H.DRAG_DROP, (l) => {
      t({
        ...l,
        payload: {
          type: "drop",
          paths: l.payload.paths,
          position: new te(l.payload.position)
        }
      });
    }), u = await this.listen(H.DRAG_LEAVE, (l) => {
      t({ ...l, payload: { type: "leave" } });
    });
    return () => {
      n(), r(), s(), u();
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
    const n = await this.listen(H.WINDOW_FOCUS, (r) => {
      t({ ...r, payload: !0 });
    }), s = await this.listen(H.WINDOW_BLUR, (r) => {
      t({ ...r, payload: !1 });
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
var Ln;
(function(e) {
  e.Disabled = "disabled", e.Throttle = "throttle", e.Suspend = "suspend";
})(Ln || (Ln = {}));
var $n;
(function(e) {
  e.AppearanceBased = "appearanceBased", e.Light = "light", e.Dark = "dark", e.MediumLight = "mediumLight", e.UltraDark = "ultraDark", e.Titlebar = "titlebar", e.Selection = "selection", e.Menu = "menu", e.Popover = "popover", e.Sidebar = "sidebar", e.HeaderView = "headerView", e.Sheet = "sheet", e.WindowBackground = "windowBackground", e.HudWindow = "hudWindow", e.FullScreenUI = "fullScreenUI", e.Tooltip = "tooltip", e.ContentBackground = "contentBackground", e.UnderWindowBackground = "underWindowBackground", e.UnderPageBackground = "underPageBackground", e.Mica = "mica", e.Blur = "blur", e.Acrylic = "acrylic", e.Tabbed = "tabbed", e.TabbedDark = "tabbedDark", e.TabbedLight = "tabbedLight";
})($n || ($n = {}));
var An;
(function(e) {
  e.FollowsWindowActiveState = "followsWindowActiveState", e.Active = "active", e.Inactive = "inactive";
})(An || (An = {}));
function Bo(e) {
  return e === null ? null : {
    name: e.name,
    scaleFactor: e.scaleFactor,
    position: new te(e.position),
    size: new be(e.size)
  };
}
async function He(e, t) {
  return h("plugin:window|monitor_from_point", {
    x: e,
    y: t
  }).then(Bo);
}
var jo = {
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
function Ho() {
  return "icon-" + ((1 + Math.random()) * 4294967296 | 0).toString(16).substring(1);
}
function Uo(e, t, n) {
  var s = typeof t.fill == "string" ? [t.fill] : t.fill || [], r = [], u = t.theme || n.theme;
  switch (u) {
    case "outline":
      r.push(typeof s[0] == "string" ? s[0] : "currentColor"), r.push("none"), r.push(typeof s[0] == "string" ? s[0] : "currentColor"), r.push("none");
      break;
    case "filled":
      r.push(typeof s[0] == "string" ? s[0] : "currentColor"), r.push(typeof s[0] == "string" ? s[0] : "currentColor"), r.push("#FFF"), r.push("#FFF");
      break;
    case "two-tone":
      r.push(typeof s[0] == "string" ? s[0] : "currentColor"), r.push(typeof s[1] == "string" ? s[1] : n.colors.twoTone.twoTone), r.push(typeof s[0] == "string" ? s[0] : "currentColor"), r.push(typeof s[1] == "string" ? s[1] : n.colors.twoTone.twoTone);
      break;
    case "multi-color":
      r.push(typeof s[0] == "string" ? s[0] : "currentColor"), r.push(typeof s[1] == "string" ? s[1] : n.colors.multiColor.outFillColor), r.push(typeof s[2] == "string" ? s[2] : n.colors.multiColor.innerStrokeColor), r.push(typeof s[3] == "string" ? s[3] : n.colors.multiColor.innerFillColor);
      break;
  }
  return {
    size: t.size || n.size,
    strokeWidth: t.strokeWidth || n.strokeWidth,
    strokeLinecap: t.strokeLinecap || n.strokeLinecap,
    strokeLinejoin: t.strokeLinejoin || n.strokeLinejoin,
    colors: r,
    id: e
  };
}
var Go = Symbol("icon-context");
function Ct(e, t, n) {
  var s = {
    name: "icon-" + e,
    props: ["size", "strokeWidth", "strokeLinecap", "strokeLinejoin", "theme", "fill", "spin"],
    setup: function(u) {
      var l = Ho(), d = ye(Go, jo);
      return function() {
        var g = u.size, y = u.strokeWidth, v = u.strokeLinecap, _ = u.strokeLinejoin, I = u.theme, N = u.fill, B = u.spin, w = Uo(l, {
          size: g,
          strokeWidth: y,
          strokeLinecap: v,
          strokeLinejoin: _,
          theme: I,
          fill: N
        }, d), k = [d.prefix + "-icon"];
        return k.push(d.prefix + "-icon-" + e), t && d.rtl && k.push(d.prefix + "-icon-rtl"), B && k.push(d.prefix + "-icon-spin"), P("span", {
          class: k.join(" ")
        }, [n(w)]);
      };
    }
  };
  return s;
}
const Vo = Ct("close-small", !1, function(e) {
  return P("svg", {
    width: e.size,
    height: e.size,
    viewBox: "0 0 48 48",
    fill: "none"
  }, [P("path", {
    d: "M14 14L34 34",
    stroke: e.colors[0],
    "stroke-width": e.strokeWidth,
    "stroke-linecap": e.strokeLinecap,
    "stroke-linejoin": e.strokeLinejoin
  }, null), P("path", {
    d: "M14 34L34 14",
    stroke: e.colors[0],
    "stroke-width": e.strokeWidth,
    "stroke-linecap": e.strokeLinecap,
    "stroke-linejoin": e.strokeLinejoin
  }, null)]);
}), Yo = Ct("minus", !1, function(e) {
  return P("svg", {
    width: e.size,
    height: e.size,
    viewBox: "0 0 48 48",
    fill: "none"
  }, [P("path", {
    d: "M10.5 24L38.5 24",
    stroke: e.colors[0],
    "stroke-width": e.strokeWidth,
    "stroke-linecap": e.strokeLinecap,
    "stroke-linejoin": e.strokeLinejoin
  }, null)]);
}), Ko = Ct("mouse", !0, function(e) {
  return P("svg", {
    width: e.size,
    height: e.size,
    viewBox: "0 0 48 48",
    fill: "none"
  }, [P("path", {
    "fill-rule": "evenodd",
    "clip-rule": "evenodd",
    d: "M24 16H12V32C12 38.6274 17.3726 44 24 44C30.6274 44 36 38.6274 36 32V16H24Z",
    fill: e.colors[1],
    stroke: e.colors[0],
    "stroke-width": e.strokeWidth,
    "stroke-linecap": e.strokeLinecap,
    "stroke-linejoin": e.strokeLinejoin
  }, null), P("path", {
    d: "M36 16C36 9.37258 30.6274 4 24 4V16H36Z",
    stroke: e.colors[0],
    "stroke-width": e.strokeWidth,
    "stroke-linecap": e.strokeLinecap,
    "stroke-linejoin": e.strokeLinejoin
  }, null), P("path", {
    d: "M24 4C17.3726 4 12 9.37258 12 16H24V4Z",
    stroke: e.colors[0],
    "stroke-width": e.strokeWidth,
    "stroke-linecap": e.strokeLinecap,
    "stroke-linejoin": e.strokeLinejoin
  }, null)]);
}), qo = Ct("radar", !1, function(e) {
  return P("svg", {
    width: e.size,
    height: e.size,
    viewBox: "0 0 48 48",
    fill: "none"
  }, [P("path", {
    "fill-rule": "evenodd",
    "clip-rule": "evenodd",
    d: "M24 44C35.0457 44 44 35.0457 44 24C44 12.9543 35.0457 4 24 4C12.9543 4 4 12.9543 4 24C4 35.0457 12.9543 44 24 44Z",
    stroke: e.colors[0],
    "stroke-width": e.strokeWidth,
    "stroke-linecap": e.strokeLinecap,
    "stroke-linejoin": e.strokeLinejoin
  }, null), P("path", {
    "fill-rule": "evenodd",
    "clip-rule": "evenodd",
    d: "M24 34C29.5228 34 34 29.5228 34 24C34 18.4772 29.5228 14 24 14C18.4772 14 14 18.4772 14 24C14 29.5228 18.4772 34 24 34Z",
    stroke: e.colors[0],
    "stroke-width": e.strokeWidth,
    "stroke-linecap": e.strokeLinecap,
    "stroke-linejoin": e.strokeLinejoin
  }, null), P("path", {
    d: "M24 4V44",
    stroke: e.colors[0],
    "stroke-width": e.strokeWidth,
    "stroke-linecap": e.strokeLinecap,
    "stroke-linejoin": e.strokeLinejoin
  }, null), P("path", {
    d: "M4 24.0002L18 24.0086",
    stroke: e.colors[0],
    "stroke-width": e.strokeWidth,
    "stroke-linecap": e.strokeLinecap
  }, null), P("path", {
    d: "M4 24.0083L44 24.0083",
    stroke: e.colors[0],
    "stroke-width": e.strokeWidth,
    "stroke-linecap": e.strokeLinecap,
    "stroke-linejoin": e.strokeLinejoin
  }, null)]);
}), ds = Symbol(), ut = "el", Zo = "is-", pe = (e, t, n, s, r) => {
  let u = `${e}-${t}`;
  return n && (u += `-${n}`), s && (u += `__${s}`), r && (u += `--${r}`), u;
}, hs = Symbol("namespaceContextKey"), Xo = (e) => {
  const t = e || (Ie() ? ye(hs, R(ut)) : R(ut));
  return m(() => i(t) || ut);
}, Jt = (e, t) => {
  const n = Xo(t);
  return {
    namespace: n,
    b: (w = "") => pe(n.value, e, w, "", ""),
    e: (w) => w ? pe(n.value, e, "", w, "") : "",
    m: (w) => w ? pe(n.value, e, "", "", w) : "",
    be: (w, k) => w && k ? pe(n.value, e, w, k, "") : "",
    em: (w, k) => w && k ? pe(n.value, e, "", w, k) : "",
    bm: (w, k) => w && k ? pe(n.value, e, w, "", k) : "",
    bem: (w, k, T) => w && k && T ? pe(n.value, e, w, k, T) : "",
    is: (w, ...k) => {
      const T = k.length >= 1 ? k[0] : !0;
      return w && T ? `${Zo}${w}` : "";
    },
    cssVar: (w) => {
      const k = {};
      for (const T in w)
        w[T] && (k[`--${n.value}-${T}`] = w[T]);
      return k;
    },
    cssVarName: (w) => `--${n.value}-${w}`,
    cssVarBlock: (w) => {
      const k = {};
      for (const T in w)
        w[T] && (k[`--${n.value}-${e}-${T}`] = w[T]);
      return k;
    },
    cssVarBlockName: (w) => `--${n.value}-${e}-${w}`
  };
};
/**
* @vue/shared v3.5.13
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/
const Jo = Object.prototype.hasOwnProperty, Dn = (e, t) => Jo.call(e, t), Ze = (e) => typeof e == "function", Ce = (e) => typeof e == "string", ps = (e) => e !== null && typeof e == "object";
var Qo = typeof global == "object" && global && global.Object === Object && global, ea = typeof self == "object" && self && self.Object === Object && self, Qt = Qo || ea || Function("return this")(), ze = Qt.Symbol, fs = Object.prototype, ta = fs.hasOwnProperty, na = fs.toString, Ue = ze ? ze.toStringTag : void 0;
function sa(e) {
  var t = ta.call(e, Ue), n = e[Ue];
  try {
    e[Ue] = void 0;
    var s = !0;
  } catch {
  }
  var r = na.call(e);
  return s && (t ? e[Ue] = n : delete e[Ue]), r;
}
var oa = Object.prototype, aa = oa.toString;
function ra(e) {
  return aa.call(e);
}
var ia = "[object Null]", la = "[object Undefined]", Wn = ze ? ze.toStringTag : void 0;
function gs(e) {
  return e == null ? e === void 0 ? la : ia : Wn && Wn in Object(e) ? sa(e) : ra(e);
}
function ca(e) {
  return e != null && typeof e == "object";
}
var ua = "[object Symbol]";
function en(e) {
  return typeof e == "symbol" || ca(e) && gs(e) == ua;
}
function da(e, t) {
  for (var n = -1, s = e == null ? 0 : e.length, r = Array(s); ++n < s; )
    r[n] = t(e[n], n, e);
  return r;
}
var tn = Array.isArray, Fn = ze ? ze.prototype : void 0, Bn = Fn ? Fn.toString : void 0;
function vs(e) {
  if (typeof e == "string")
    return e;
  if (tn(e))
    return da(e, vs) + "";
  if (en(e))
    return Bn ? Bn.call(e) : "";
  var t = e + "";
  return t == "0" && 1 / e == -1 / 0 ? "-0" : t;
}
function ys(e) {
  var t = typeof e;
  return e != null && (t == "object" || t == "function");
}
var ha = "[object AsyncFunction]", pa = "[object Function]", fa = "[object GeneratorFunction]", ga = "[object Proxy]";
function va(e) {
  if (!ys(e))
    return !1;
  var t = gs(e);
  return t == pa || t == fa || t == ha || t == ga;
}
var Ht = Qt["__core-js_shared__"], jn = function() {
  var e = /[^.]+$/.exec(Ht && Ht.keys && Ht.keys.IE_PROTO || "");
  return e ? "Symbol(src)_1." + e : "";
}();
function ya(e) {
  return !!jn && jn in e;
}
var wa = Function.prototype, ma = wa.toString;
function _a(e) {
  if (e != null) {
    try {
      return ma.call(e);
    } catch {
    }
    try {
      return e + "";
    } catch {
    }
  }
  return "";
}
var ba = /[\\^$.*+?()[\]{}|]/g, Ca = /^\[object .+?Constructor\]$/, ka = Function.prototype, Sa = Object.prototype, Ra = ka.toString, Ma = Sa.hasOwnProperty, xa = RegExp(
  "^" + Ra.call(Ma).replace(ba, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$"
);
function Ta(e) {
  if (!ys(e) || ya(e))
    return !1;
  var t = va(e) ? xa : Ca;
  return t.test(_a(e));
}
function Oa(e, t) {
  return e?.[t];
}
function ws(e, t) {
  var n = Oa(e, t);
  return Ta(n) ? n : void 0;
}
function Ea(e, t) {
  return e === t || e !== e && t !== t;
}
var Ia = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/, Na = /^\w*$/;
function Pa(e, t) {
  if (tn(e))
    return !1;
  var n = typeof e;
  return n == "number" || n == "symbol" || n == "boolean" || e == null || en(e) ? !0 : Na.test(e) || !Ia.test(e) || t != null && e in Object(t);
}
var Xe = ws(Object, "create");
function za() {
  this.__data__ = Xe ? Xe(null) : {}, this.size = 0;
}
function La(e) {
  var t = this.has(e) && delete this.__data__[e];
  return this.size -= t ? 1 : 0, t;
}
var $a = "__lodash_hash_undefined__", Aa = Object.prototype, Da = Aa.hasOwnProperty;
function Wa(e) {
  var t = this.__data__;
  if (Xe) {
    var n = t[e];
    return n === $a ? void 0 : n;
  }
  return Da.call(t, e) ? t[e] : void 0;
}
var Fa = Object.prototype, Ba = Fa.hasOwnProperty;
function ja(e) {
  var t = this.__data__;
  return Xe ? t[e] !== void 0 : Ba.call(t, e);
}
var Ha = "__lodash_hash_undefined__";
function Ua(e, t) {
  var n = this.__data__;
  return this.size += this.has(e) ? 0 : 1, n[e] = Xe && t === void 0 ? Ha : t, this;
}
function ke(e) {
  var t = -1, n = e == null ? 0 : e.length;
  for (this.clear(); ++t < n; ) {
    var s = e[t];
    this.set(s[0], s[1]);
  }
}
ke.prototype.clear = za;
ke.prototype.delete = La;
ke.prototype.get = Wa;
ke.prototype.has = ja;
ke.prototype.set = Ua;
function Ga() {
  this.__data__ = [], this.size = 0;
}
function kt(e, t) {
  for (var n = e.length; n--; )
    if (Ea(e[n][0], t))
      return n;
  return -1;
}
var Va = Array.prototype, Ya = Va.splice;
function Ka(e) {
  var t = this.__data__, n = kt(t, e);
  if (n < 0)
    return !1;
  var s = t.length - 1;
  return n == s ? t.pop() : Ya.call(t, n, 1), --this.size, !0;
}
function qa(e) {
  var t = this.__data__, n = kt(t, e);
  return n < 0 ? void 0 : t[n][1];
}
function Za(e) {
  return kt(this.__data__, e) > -1;
}
function Xa(e, t) {
  var n = this.__data__, s = kt(n, e);
  return s < 0 ? (++this.size, n.push([e, t])) : n[s][1] = t, this;
}
function Ae(e) {
  var t = -1, n = e == null ? 0 : e.length;
  for (this.clear(); ++t < n; ) {
    var s = e[t];
    this.set(s[0], s[1]);
  }
}
Ae.prototype.clear = Ga;
Ae.prototype.delete = Ka;
Ae.prototype.get = qa;
Ae.prototype.has = Za;
Ae.prototype.set = Xa;
var Ja = ws(Qt, "Map");
function Qa() {
  this.size = 0, this.__data__ = {
    hash: new ke(),
    map: new (Ja || Ae)(),
    string: new ke()
  };
}
function er(e) {
  var t = typeof e;
  return t == "string" || t == "number" || t == "symbol" || t == "boolean" ? e !== "__proto__" : e === null;
}
function St(e, t) {
  var n = e.__data__;
  return er(t) ? n[typeof t == "string" ? "string" : "hash"] : n.map;
}
function tr(e) {
  var t = St(this, e).delete(e);
  return this.size -= t ? 1 : 0, t;
}
function nr(e) {
  return St(this, e).get(e);
}
function sr(e) {
  return St(this, e).has(e);
}
function or(e, t) {
  var n = St(this, e), s = n.size;
  return n.set(e, t), this.size += n.size == s ? 0 : 1, this;
}
function Re(e) {
  var t = -1, n = e == null ? 0 : e.length;
  for (this.clear(); ++t < n; ) {
    var s = e[t];
    this.set(s[0], s[1]);
  }
}
Re.prototype.clear = Qa;
Re.prototype.delete = tr;
Re.prototype.get = nr;
Re.prototype.has = sr;
Re.prototype.set = or;
var ar = "Expected a function";
function nn(e, t) {
  if (typeof e != "function" || t != null && typeof t != "function")
    throw new TypeError(ar);
  var n = function() {
    var s = arguments, r = t ? t.apply(this, s) : s[0], u = n.cache;
    if (u.has(r))
      return u.get(r);
    var l = e.apply(this, s);
    return n.cache = u.set(r, l) || u, l;
  };
  return n.cache = new (nn.Cache || Re)(), n;
}
nn.Cache = Re;
var rr = 500;
function ir(e) {
  var t = nn(e, function(s) {
    return n.size === rr && n.clear(), s;
  }), n = t.cache;
  return t;
}
var lr = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g, cr = /\\(\\)?/g, ur = ir(function(e) {
  var t = [];
  return e.charCodeAt(0) === 46 && t.push(""), e.replace(lr, function(n, s, r, u) {
    t.push(r ? u.replace(cr, "$1") : s || n);
  }), t;
});
function dr(e) {
  return e == null ? "" : vs(e);
}
function hr(e, t) {
  return tn(e) ? e : Pa(e, t) ? [e] : ur(dr(e));
}
function pr(e) {
  if (typeof e == "string" || en(e))
    return e;
  var t = e + "";
  return t == "0" && 1 / e == -1 / 0 ? "-0" : t;
}
function fr(e, t) {
  t = hr(t, e);
  for (var n = 0, s = t.length; e != null && n < s; )
    e = e[pr(t[n++])];
  return n && n == s ? e : void 0;
}
function gr(e, t, n) {
  var s = e == null ? void 0 : fr(e, t);
  return s === void 0 ? n : s;
}
function vr(e) {
  for (var t = -1, n = e == null ? 0 : e.length, s = {}; ++t < n; ) {
    var r = e[t];
    s[r[0]] = r[1];
  }
  return s;
}
const ms = (e) => e === void 0, Hn = (e) => typeof e == "boolean", Se = (e) => typeof e == "number", Kt = (e) => typeof Element > "u" ? !1 : e instanceof Element, yr = (e) => Ce(e) ? !Number.isNaN(Number(e)) : !1;
var Un;
const Me = typeof window < "u", wr = (e) => typeof e == "string", mr = () => {
};
Me && ((Un = window?.navigator) != null && Un.userAgent) && /iP(ad|hone|od)/.test(window.navigator.userAgent);
function sn(e) {
  return typeof e == "function" ? e() : i(e);
}
function _r(e) {
  return e;
}
function on(e) {
  return ko() ? (So(e), !0) : !1;
}
function br(e, t = !0) {
  Ie() ? bt(e) : t ? e() : ge(e);
}
function _s(e, t, n = {}) {
  const {
    immediate: s = !0
  } = n, r = R(!1);
  let u = null;
  function l() {
    u && (clearTimeout(u), u = null);
  }
  function d() {
    r.value = !1, l();
  }
  function g(...y) {
    l(), r.value = !0, u = setTimeout(() => {
      r.value = !1, u = null, e(...y);
    }, sn(t));
  }
  return s && (r.value = !0, Me && g()), on(d), {
    isPending: Co(r),
    start: g,
    stop: d
  };
}
function bs(e) {
  var t;
  const n = sn(e);
  return (t = n?.$el) != null ? t : n;
}
const Cs = Me ? window : void 0;
function ks(...e) {
  let t, n, s, r;
  if (wr(e[0]) || Array.isArray(e[0]) ? ([n, s, r] = e, t = Cs) : [t, n, s, r] = e, !t)
    return mr;
  Array.isArray(n) || (n = [n]), Array.isArray(s) || (s = [s]);
  const u = [], l = () => {
    u.forEach((v) => v()), u.length = 0;
  }, d = (v, _, I, N) => (v.addEventListener(_, I, N), () => v.removeEventListener(_, I, N)), g = we(() => [bs(t), sn(r)], ([v, _]) => {
    l(), v && u.push(...n.flatMap((I) => s.map((N) => d(v, I, N, _))));
  }, { immediate: !0, flush: "post" }), y = () => {
    g(), l();
  };
  return on(y), y;
}
function Cr(e, t = !1) {
  const n = R(), s = () => n.value = !!e();
  return s(), br(s, t), n;
}
const Gn = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {}, Vn = "__vueuse_ssr_handlers__";
Gn[Vn] = Gn[Vn] || {};
var Yn = Object.getOwnPropertySymbols, kr = Object.prototype.hasOwnProperty, Sr = Object.prototype.propertyIsEnumerable, Rr = (e, t) => {
  var n = {};
  for (var s in e)
    kr.call(e, s) && t.indexOf(s) < 0 && (n[s] = e[s]);
  if (e != null && Yn)
    for (var s of Yn(e))
      t.indexOf(s) < 0 && Sr.call(e, s) && (n[s] = e[s]);
  return n;
};
function Mr(e, t, n = {}) {
  const s = n, { window: r = Cs } = s, u = Rr(s, ["window"]);
  let l;
  const d = Cr(() => r && "ResizeObserver" in r), g = () => {
    l && (l.disconnect(), l = void 0);
  }, y = we(() => bs(e), (_) => {
    g(), d.value && r && _ && (l = new ResizeObserver(t), l.observe(_, u));
  }, { immediate: !0, flush: "post" }), v = () => {
    g(), y();
  };
  return on(v), {
    isSupported: d,
    stop: v
  };
}
var Kn;
(function(e) {
  e.UP = "UP", e.RIGHT = "RIGHT", e.DOWN = "DOWN", e.LEFT = "LEFT", e.NONE = "NONE";
})(Kn || (Kn = {}));
var xr = Object.defineProperty, qn = Object.getOwnPropertySymbols, Tr = Object.prototype.hasOwnProperty, Or = Object.prototype.propertyIsEnumerable, Zn = (e, t, n) => t in e ? xr(e, t, { enumerable: !0, configurable: !0, writable: !0, value: n }) : e[t] = n, Er = (e, t) => {
  for (var n in t || (t = {}))
    Tr.call(t, n) && Zn(e, n, t[n]);
  if (qn)
    for (var n of qn(t))
      Or.call(t, n) && Zn(e, n, t[n]);
  return e;
};
const Ir = {
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
Er({
  linear: _r
}, Ir);
const Xn = {
  current: 0
}, Jn = R(0), Ss = 2e3, Qn = Symbol("elZIndexContextKey"), Rs = Symbol("zIndexContextKey"), Nr = (e) => {
  const t = Ie() ? ye(Qn, Xn) : Xn, n = e || (Ie() ? ye(Rs, void 0) : void 0), s = m(() => {
    const l = i(n);
    return Se(l) ? l : Ss;
  }), r = m(() => s.value + Jn.value), u = () => (t.current++, Jn.value = t.current, r.value);
  return !Me && ye(Qn), {
    initialZIndex: s,
    currentZIndex: r,
    nextZIndex: u
  };
};
var Pr = {
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
const zr = (e) => (t, n) => Lr(t, n, i(e)), Lr = (e, t, n) => gr(n, e, e).replace(/\{(\w+)\}/g, (s, r) => {
  var u;
  return `${(u = t?.[r]) != null ? u : `{${r}}`}`;
}), $r = (e) => {
  const t = m(() => i(e).name), n = Ro(e) ? e : R(e);
  return {
    lang: t,
    locale: n,
    t: zr(e)
  };
}, Ms = Symbol("localeContextKey"), Ar = (e) => {
  const t = e || ye(Ms, R());
  return $r(m(() => t.value || Pr));
}, xs = "__epPropKey", U = (e) => e, Dr = (e) => ps(e) && !!e[xs], Ts = (e, t) => {
  if (!ps(e) || Dr(e))
    return e;
  const { values: n, required: s, default: r, type: u, validator: l } = e, g = {
    type: u,
    required: !!s,
    validator: n || l ? (y) => {
      let v = !1, _ = [];
      if (n && (_ = Array.from(n), Dn(e, "default") && _.push(r), v || (v = _.includes(y))), l && (v || (v = l(y))), !v && _.length > 0) {
        const I = [...new Set(_)].map((N) => JSON.stringify(N)).join(", ");
        Mo(`Invalid prop: validation failed${t ? ` for prop "${t}"` : ""}. Expected one of [${I}], got value ${JSON.stringify(y)}.`);
      }
      return v;
    } : void 0,
    [xs]: !0
  };
  return Dn(e, "default") && (g.default = r), g;
}, De = (e) => vr(Object.entries(e).map(([t, n]) => [
  t,
  Ts(n, t)
])), Wr = ["", "default", "small", "large"], Fr = Ts({
  type: String,
  values: Wr,
  required: !1
}), Br = Symbol("size"), jr = Symbol("emptyValuesContextKey"), Hr = De({
  emptyValues: Array,
  valueOnClear: {
    type: [String, Number, Boolean, Function],
    default: void 0,
    validator: (e) => Ze(e) ? !e() : !e
  }
}), es = (e) => Object.keys(e), yt = R();
function Os(e, t = void 0) {
  return Ie() ? ye(ds, yt) : yt;
}
function Es(e, t) {
  const n = Os(), s = Jt(e, m(() => {
    var d;
    return ((d = n.value) == null ? void 0 : d.namespace) || ut;
  })), r = Ar(m(() => {
    var d;
    return (d = n.value) == null ? void 0 : d.locale;
  })), u = Nr(m(() => {
    var d;
    return ((d = n.value) == null ? void 0 : d.zIndex) || Ss;
  })), l = m(() => {
    var d;
    return i(t) || ((d = n.value) == null ? void 0 : d.size) || "";
  });
  return Is(m(() => i(n) || {})), {
    ns: s,
    locale: r,
    zIndex: u,
    size: l
  };
}
const Is = (e, t, n = !1) => {
  var s;
  const r = !!Ie(), u = r ? Os() : void 0, l = (s = void 0) != null ? s : r ? xo : void 0;
  if (!l)
    return;
  const d = m(() => {
    const g = i(e);
    return u?.value ? Ur(u.value, g) : g;
  });
  return l(ds, d), l(Ms, m(() => d.value.locale)), l(hs, m(() => d.value.namespace)), l(Rs, m(() => d.value.zIndex)), l(Br, {
    size: m(() => d.value.size || "")
  }), l(jr, m(() => ({
    emptyValues: d.value.emptyValues,
    valueOnClear: d.value.valueOnClear
  }))), (n || !yt.value) && (yt.value = d.value), d;
}, Ur = (e, t) => {
  const n = [.../* @__PURE__ */ new Set([...es(e), ...es(t)])], s = {};
  for (const r of n)
    s[r] = t[r] !== void 0 ? t[r] : e[r];
  return s;
};
var Rt = (e, t) => {
  const n = e.__vccOpts || e;
  for (const [s, r] of t)
    n[s] = r;
  return n;
};
function qt(e, t = "px") {
  if (!e)
    return "";
  if (Se(e) || yr(e))
    return `${e}${t}`;
  if (Ce(e))
    return e;
}
const Ns = (e, t) => (e.install = (n) => {
  for (const s of [e, ...Object.values({})])
    n.component(s.name, s);
}, e), Ps = (e, t) => (e.install = (n) => {
  e._context = n._context, n.config.globalProperties[t] = e;
}, e), Gr = De({
  size: {
    type: U([Number, String])
  },
  color: {
    type: String
  }
}), Vr = W({
  name: "ElIcon",
  inheritAttrs: !1
}), Yr = /* @__PURE__ */ W({
  ...Vr,
  props: Gr,
  setup(e) {
    const t = e, n = Jt("icon"), s = m(() => {
      const { size: r, color: u } = t;
      return !r && !u ? {} : {
        fontSize: ms(r) ? void 0 : qt(r),
        "--color": u
      };
    });
    return (r, u) => (C(), x("i", To({
      class: i(n).b(),
      style: i(s)
    }, r.$attrs), [
      Ne(r.$slots, "default")
    ], 16));
  }
});
var Kr = /* @__PURE__ */ Rt(Yr, [["__file", "icon.vue"]]);
const wt = Ns(Kr);
/*! Element Plus Icons Vue v2.3.1 */
var qr = /* @__PURE__ */ W({
  name: "CircleCloseFilled",
  __name: "circle-close-filled",
  setup(e) {
    return (t, n) => (C(), x("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 1024 1024"
    }, [
      c("path", {
        fill: "currentColor",
        d: "M512 64a448 448 0 1 1 0 896 448 448 0 0 1 0-896m0 393.664L407.936 353.6a38.4 38.4 0 1 0-54.336 54.336L457.664 512 353.6 616.064a38.4 38.4 0 1 0 54.336 54.336L512 566.336 616.064 670.4a38.4 38.4 0 1 0 54.336-54.336L566.336 512 670.4 407.936a38.4 38.4 0 1 0-54.336-54.336z"
      })
    ]));
  }
}), Zr = qr, Xr = /* @__PURE__ */ W({
  name: "Close",
  __name: "close",
  setup(e) {
    return (t, n) => (C(), x("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 1024 1024"
    }, [
      c("path", {
        fill: "currentColor",
        d: "M764.288 214.592 512 466.88 259.712 214.592a31.936 31.936 0 0 0-45.12 45.12L466.752 512 214.528 764.224a31.936 31.936 0 1 0 45.12 45.184L512 557.184l252.288 252.288a31.936 31.936 0 0 0 45.12-45.12L557.12 512.064l252.288-252.352a31.936 31.936 0 1 0-45.12-45.184z"
      })
    ]));
  }
}), zs = Xr, Jr = /* @__PURE__ */ W({
  name: "InfoFilled",
  __name: "info-filled",
  setup(e) {
    return (t, n) => (C(), x("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 1024 1024"
    }, [
      c("path", {
        fill: "currentColor",
        d: "M512 64a448 448 0 1 1 0 896.064A448 448 0 0 1 512 64m67.2 275.072c33.28 0 60.288-23.104 60.288-57.344s-27.072-57.344-60.288-57.344c-33.28 0-60.16 23.104-60.16 57.344s26.88 57.344 60.16 57.344M590.912 699.2c0-6.848 2.368-24.64 1.024-34.752l-52.608 60.544c-10.88 11.456-24.512 19.392-30.912 17.28a12.992 12.992 0 0 1-8.256-14.72l87.68-276.992c7.168-35.136-12.544-67.2-54.336-71.296-44.096 0-108.992 44.736-148.48 101.504 0 6.784-1.28 23.68.064 33.792l52.544-60.608c10.88-11.328 23.552-19.328 29.952-17.152a12.8 12.8 0 0 1 7.808 16.128L388.48 728.576c-10.048 32.256 8.96 63.872 55.04 71.04 67.84 0 107.904-43.648 147.456-100.416z"
      })
    ]));
  }
}), Qr = Jr, ei = /* @__PURE__ */ W({
  name: "SuccessFilled",
  __name: "success-filled",
  setup(e) {
    return (t, n) => (C(), x("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 1024 1024"
    }, [
      c("path", {
        fill: "currentColor",
        d: "M512 64a448 448 0 1 1 0 896 448 448 0 0 1 0-896m-55.808 536.384-99.52-99.584a38.4 38.4 0 1 0-54.336 54.336l126.72 126.72a38.272 38.272 0 0 0 54.336 0l262.4-262.464a38.4 38.4 0 1 0-54.272-54.336z"
      })
    ]));
  }
}), ti = ei, ni = /* @__PURE__ */ W({
  name: "WarningFilled",
  __name: "warning-filled",
  setup(e) {
    return (t, n) => (C(), x("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 1024 1024"
    }, [
      c("path", {
        fill: "currentColor",
        d: "M512 64a448 448 0 1 1 0 896 448 448 0 0 1 0-896m0 192a58.432 58.432 0 0 0-58.24 63.744l23.36 256.384a35.072 35.072 0 0 0 69.76 0l23.296-256.384A58.432 58.432 0 0 0 512 256m0 512a51.2 51.2 0 1 0 0-102.4 51.2 51.2 0 0 0 0 102.4"
      })
    ]));
  }
}), si = ni;
const Ls = U([
  String,
  Object,
  Function
]), oi = {
  Close: zs
}, ai = {
  Close: zs
}, mt = {
  success: ti,
  warning: si,
  error: Zr,
  info: Qr
}, ri = (e) => e, dt = {
  esc: "Escape",
  delete: "Delete",
  backspace: "Backspace"
}, ii = De({
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
    type: U([String, Object, Array])
  },
  offset: {
    type: U(Array),
    default: [0, 0]
  },
  badgeClass: {
    type: String
  }
}), li = W({
  name: "ElBadge"
}), ci = /* @__PURE__ */ W({
  ...li,
  props: ii,
  setup(e, { expose: t }) {
    const n = e, s = Jt("badge"), r = m(() => n.isDot ? "" : Se(n.value) && Se(n.max) ? n.max < n.value ? `${n.max}+` : `${n.value}` : `${n.value}`), u = m(() => {
      var l, d, g, y, v;
      return [
        {
          backgroundColor: n.color,
          marginRight: qt(-((d = (l = n.offset) == null ? void 0 : l[0]) != null ? d : 0)),
          marginTop: qt((y = (g = n.offset) == null ? void 0 : g[1]) != null ? y : 0)
        },
        (v = n.badgeStyle) != null ? v : {}
      ];
    });
    return t({
      content: r
    }), (l, d) => (C(), x("div", {
      class: $(i(s).b())
    }, [
      Ne(l.$slots, "default"),
      P(Xt, {
        name: `${i(s).namespace.value}-zoom-in-center`,
        persisted: ""
      }, {
        default: me(() => [
          _e(c("sup", {
            class: $([
              i(s).e("content"),
              i(s).em("content", l.type),
              i(s).is("fixed", !!l.$slots.default),
              i(s).is("dot", l.isDot),
              i(s).is("hide-zero", !l.showZero && n.value === 0),
              l.badgeClass
            ]),
            style: Pe(i(u))
          }, [
            Ne(l.$slots, "content", { value: i(r) }, () => [
              Oo(M(i(r)), 1)
            ])
          ], 6), [
            [pt, !l.hidden && (i(r) || l.isDot || l.$slots.content)]
          ])
        ]),
        _: 3
      }, 8, ["name"])
    ], 2));
  }
});
var ui = /* @__PURE__ */ Rt(ci, [["__file", "badge.vue"]]);
const di = Ns(ui), hi = De({
  a11y: {
    type: Boolean,
    default: !0
  },
  locale: {
    type: U(Object)
  },
  size: Fr,
  button: {
    type: U(Object)
  },
  experimentalFeatures: {
    type: U(Object)
  },
  keyboardNavigation: {
    type: Boolean,
    default: !0
  },
  message: {
    type: U(Object)
  },
  zIndex: Number,
  namespace: {
    type: String,
    default: "el"
  },
  ...Hr
}), q = {};
W({
  name: "ElConfigProvider",
  props: hi,
  setup(e, { slots: t }) {
    we(() => e.message, (s) => {
      Object.assign(q, s ?? {});
    }, { immediate: !0, deep: !0 });
    const n = Is(e);
    return () => Ne(t, "default", { config: n?.value });
  }
});
const $s = ["success", "info", "warning", "error"], D = ri({
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
  appendTo: Me ? document.body : void 0
}), pi = De({
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
    type: Ls,
    default: D.icon
  },
  id: {
    type: String,
    default: D.id
  },
  message: {
    type: U([
      String,
      Object,
      Function
    ]),
    default: D.message
  },
  onClose: {
    type: U(Function),
    default: D.onClose
  },
  showClose: {
    type: Boolean,
    default: D.showClose
  },
  type: {
    type: String,
    values: $s,
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
}), fi = {
  destroy: () => !0
}, Z = Eo([]), gi = (e) => {
  const t = Z.findIndex((r) => r.id === e), n = Z[t];
  let s;
  return t > 0 && (s = Z[t - 1]), { current: n, prev: s };
}, vi = (e) => {
  const { prev: t } = gi(e);
  return t ? t.vm.exposed.bottom.value : 0;
}, yi = (e, t) => Z.findIndex((s) => s.id === e) > 0 ? 16 : t, wi = W({
  name: "ElMessage"
}), mi = /* @__PURE__ */ W({
  ...wi,
  props: pi,
  emits: fi,
  setup(e, { expose: t }) {
    const n = e, { Close: s } = ai, { ns: r, zIndex: u } = Es("message"), { currentZIndex: l, nextZIndex: d } = u, g = R(), y = R(!1), v = R(0);
    let _;
    const I = m(() => n.type ? n.type === "error" ? "danger" : n.type : "info"), N = m(() => {
      const O = n.type;
      return { [r.bm("icon", O)]: O && mt[O] };
    }), B = m(() => n.icon || mt[n.type] || ""), w = m(() => vi(n.id)), k = m(() => yi(n.id, n.offset) + w.value), T = m(() => v.value + k.value), ie = m(() => ({
      top: `${k.value}px`,
      zIndex: l.value
    }));
    function S() {
      n.duration !== 0 && ({ stop: _ } = _s(() => {
        A();
      }, n.duration));
    }
    function V() {
      _?.();
    }
    function A() {
      y.value = !1;
    }
    function se({ code: O }) {
      O === dt.esc && A();
    }
    return bt(() => {
      S(), d(), y.value = !0;
    }), we(() => n.repeatNum, () => {
      V(), S();
    }), ks(document, "keydown", se), Mr(g, () => {
      v.value = g.value.getBoundingClientRect().height;
    }), t({
      visible: y,
      bottom: T,
      close: A
    }), (O, rn) => (C(), re(Xt, {
      name: i(r).b("fade"),
      onBeforeLeave: O.onClose,
      onAfterLeave: (b) => O.$emit("destroy"),
      persisted: ""
    }, {
      default: me(() => [
        _e(c("div", {
          id: O.id,
          ref_key: "messageRef",
          ref: g,
          class: $([
            i(r).b(),
            { [i(r).m(O.type)]: O.type },
            i(r).is("center", O.center),
            i(r).is("closable", O.showClose),
            i(r).is("plain", O.plain),
            O.customClass
          ]),
          style: Pe(i(ie)),
          role: "alert",
          onMouseenter: V,
          onMouseleave: S
        }, [
          O.repeatNum > 1 ? (C(), re(i(di), {
            key: 0,
            value: O.repeatNum,
            type: i(I),
            class: $(i(r).e("badge"))
          }, null, 8, ["value", "type", "class"])) : ne("v-if", !0),
          i(B) ? (C(), re(i(wt), {
            key: 1,
            class: $([i(r).e("icon"), i(N)])
          }, {
            default: me(() => [
              (C(), re(as(i(B))))
            ]),
            _: 1
          }, 8, ["class"])) : ne("v-if", !0),
          Ne(O.$slots, "default", {}, () => [
            O.dangerouslyUseHTMLString ? (C(), x(ue, { key: 1 }, [
              ne(" Caution here, message could've been compromised, never use user's input as message "),
              c("p", {
                class: $(i(r).e("content")),
                innerHTML: O.message
              }, null, 10, ["innerHTML"])
            ], 2112)) : (C(), x("p", {
              key: 0,
              class: $(i(r).e("content"))
            }, M(O.message), 3))
          ]),
          O.showClose ? (C(), re(i(wt), {
            key: 2,
            class: $(i(r).e("closeBtn")),
            onClick: Ee(A, ["stop"])
          }, {
            default: me(() => [
              P(i(s))
            ]),
            _: 1
          }, 8, ["class", "onClick"])) : ne("v-if", !0)
        ], 46, ["id"]), [
          [pt, y.value]
        ])
      ]),
      _: 3
    }, 8, ["name", "onBeforeLeave", "onAfterLeave"]));
  }
});
var _i = /* @__PURE__ */ Rt(mi, [["__file", "message.vue"]]);
let bi = 1;
const As = (e) => {
  const t = !e || Ce(e) || qe(e) || Ze(e) ? { message: e } : e, n = {
    ...D,
    ...t
  };
  if (!n.appendTo)
    n.appendTo = document.body;
  else if (Ce(n.appendTo)) {
    let s = document.querySelector(n.appendTo);
    Kt(s) || (s = document.body), n.appendTo = s;
  }
  return Hn(q.grouping) && !n.grouping && (n.grouping = q.grouping), Se(q.duration) && n.duration === 3e3 && (n.duration = q.duration), Se(q.offset) && n.offset === 16 && (n.offset = q.offset), Hn(q.showClose) && !n.showClose && (n.showClose = q.showClose), n;
}, Ci = (e) => {
  const t = Z.indexOf(e);
  if (t === -1)
    return;
  Z.splice(t, 1);
  const { handler: n } = e;
  n.close();
}, ki = ({ appendTo: e, ...t }, n) => {
  const s = `message_${bi++}`, r = t.onClose, u = document.createElement("div"), l = {
    ...t,
    id: s,
    onClose: () => {
      r?.(), Ci(v);
    },
    onDestroy: () => {
      ft(null, u);
    }
  }, d = P(_i, l, Ze(l.message) || qe(l.message) ? {
    default: Ze(l.message) ? l.message : () => l.message
  } : null);
  d.appContext = n || Le._context, ft(d, u), e.appendChild(u.firstElementChild);
  const g = d.component, v = {
    id: s,
    vnode: d,
    vm: g,
    handler: {
      close: () => {
        g.exposed.visible.value = !1;
      }
    },
    props: d.component.props
  };
  return v;
}, Le = (e = {}, t) => {
  if (!Me)
    return { close: () => {
    } };
  const n = As(e);
  if (n.grouping && Z.length) {
    const r = Z.find(({ vnode: u }) => {
      var l;
      return ((l = u.props) == null ? void 0 : l.message) === n.message;
    });
    if (r)
      return r.props.repeatNum += 1, r.props.type = n.type, r.handler;
  }
  if (Se(q.max) && Z.length >= q.max)
    return { close: () => {
    } };
  const s = ki(n, t);
  return Z.push(s), s.handler;
};
$s.forEach((e) => {
  Le[e] = (t = {}, n) => {
    const s = As(t);
    return Le({ ...s, type: e }, n);
  };
});
function Si(e) {
  for (const t of Z)
    (!e || e === t.props.type) && t.handler.close();
}
Le.closeAll = Si;
Le._context = null;
const Ri = Ps(Le, "$message"), Ds = [
  "success",
  "info",
  "warning",
  "error"
], Mi = De({
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
    type: Ls
  },
  id: {
    type: String,
    default: ""
  },
  message: {
    type: U([
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
    type: U(Function),
    default: () => {
    }
  },
  onClose: {
    type: U(Function),
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
    values: [...Ds, ""],
    default: ""
  },
  zIndex: Number
}), xi = {
  destroy: () => !0
}, Ti = W({
  name: "ElNotification"
}), Oi = /* @__PURE__ */ W({
  ...Ti,
  props: Mi,
  emits: xi,
  setup(e, { expose: t }) {
    const n = e, { ns: s, zIndex: r } = Es("notification"), { nextZIndex: u, currentZIndex: l } = r, { Close: d } = oi, g = R(!1);
    let y;
    const v = m(() => {
      const S = n.type;
      return S && mt[n.type] ? s.m(S) : "";
    }), _ = m(() => n.type && mt[n.type] || n.icon), I = m(() => n.position.endsWith("right") ? "right" : "left"), N = m(() => n.position.startsWith("top") ? "top" : "bottom"), B = m(() => {
      var S;
      return {
        [N.value]: `${n.offset}px`,
        zIndex: (S = n.zIndex) != null ? S : l.value
      };
    });
    function w() {
      n.duration > 0 && ({ stop: y } = _s(() => {
        g.value && T();
      }, n.duration));
    }
    function k() {
      y?.();
    }
    function T() {
      g.value = !1;
    }
    function ie({ code: S }) {
      S === dt.delete || S === dt.backspace ? k() : S === dt.esc ? g.value && T() : w();
    }
    return bt(() => {
      w(), u(), g.value = !0;
    }), ks(document, "keydown", ie), t({
      visible: g,
      close: T
    }), (S, V) => (C(), re(Xt, {
      name: i(s).b("fade"),
      onBeforeLeave: S.onClose,
      onAfterLeave: (A) => S.$emit("destroy"),
      persisted: ""
    }, {
      default: me(() => [
        _e(c("div", {
          id: S.id,
          class: $([i(s).b(), S.customClass, i(I)]),
          style: Pe(i(B)),
          role: "alert",
          onMouseenter: k,
          onMouseleave: w,
          onClick: S.onClick
        }, [
          i(_) ? (C(), re(i(wt), {
            key: 0,
            class: $([i(s).e("icon"), i(v)])
          }, {
            default: me(() => [
              (C(), re(as(i(_))))
            ]),
            _: 1
          }, 8, ["class"])) : ne("v-if", !0),
          c("div", {
            class: $(i(s).e("group"))
          }, [
            c("h2", {
              class: $(i(s).e("title")),
              textContent: M(S.title)
            }, null, 10, ["textContent"]),
            _e(c("div", {
              class: $(i(s).e("content")),
              style: Pe(S.title ? void 0 : { margin: 0 })
            }, [
              Ne(S.$slots, "default", {}, () => [
                S.dangerouslyUseHTMLString ? (C(), x(ue, { key: 1 }, [
                  ne(" Caution here, message could've been compromised, never use user's input as message "),
                  c("p", { innerHTML: S.message }, null, 8, ["innerHTML"])
                ], 2112)) : (C(), x("p", { key: 0 }, M(S.message), 1))
              ])
            ], 6), [
              [pt, S.message]
            ]),
            S.showClose ? (C(), re(i(wt), {
              key: 0,
              class: $(i(s).e("closeBtn")),
              onClick: Ee(T, ["stop"])
            }, {
              default: me(() => [
                P(i(d))
              ]),
              _: 1
            }, 8, ["class", "onClick"])) : ne("v-if", !0)
          ], 2)
        ], 46, ["id", "onClick"]), [
          [pt, g.value]
        ])
      ]),
      _: 3
    }, 8, ["name", "onBeforeLeave", "onAfterLeave"]));
  }
});
var Ei = /* @__PURE__ */ Rt(Oi, [["__file", "notification.vue"]]);
const _t = {
  "top-left": [],
  "top-right": [],
  "bottom-left": [],
  "bottom-right": []
}, Zt = 16;
let Ii = 1;
const $e = function(e = {}, t) {
  if (!Me)
    return { close: () => {
    } };
  (Ce(e) || qe(e)) && (e = { message: e });
  const n = e.position || "top-right";
  let s = e.offset || 0;
  _t[n].forEach(({ vm: v }) => {
    var _;
    s += (((_ = v.el) == null ? void 0 : _.offsetHeight) || 0) + Zt;
  }), s += Zt;
  const r = `notification_${Ii++}`, u = e.onClose, l = {
    ...e,
    offset: s,
    id: r,
    onClose: () => {
      Ni(r, n, u);
    }
  };
  let d = document.body;
  Kt(e.appendTo) ? d = e.appendTo : Ce(e.appendTo) && (d = document.querySelector(e.appendTo)), Kt(d) || (d = document.body);
  const g = document.createElement("div"), y = P(Ei, l, Ze(l.message) ? l.message : qe(l.message) ? () => l.message : null);
  return y.appContext = ms(t) ? $e._context : t, y.props.onDestroy = () => {
    ft(null, g);
  }, ft(y, g), _t[n].push({ vm: y }), d.appendChild(g.firstElementChild), {
    close: () => {
      y.component.exposed.visible.value = !1;
    }
  };
};
Ds.forEach((e) => {
  $e[e] = (t = {}, n) => ((Ce(t) || qe(t)) && (t = {
    message: t
  }), $e({ ...t, type: e }, n));
});
function Ni(e, t, n) {
  const s = _t[t], r = s.findIndex(({ vm: y }) => {
    var v;
    return ((v = y.component) == null ? void 0 : v.props.id) === e;
  });
  if (r === -1)
    return;
  const { vm: u } = s[r];
  if (!u)
    return;
  n?.(u);
  const l = u.el.offsetHeight, d = t.split("-")[0];
  s.splice(r, 1);
  const g = s.length;
  if (!(g < 1))
    for (let y = r; y < g; y++) {
      const { el: v, component: _ } = s[y].vm, I = Number.parseInt(v.style[d], 10) - l - Zt;
      _.props.offset = I;
    }
}
function Pi() {
  for (const e of Object.values(_t))
    e.forEach(({ vm: t }) => {
      t.component.exposed.visible.value = !1;
    });
}
$e.closeAll = Pi;
$e._context = null;
const zi = Ps($e, "$notify"), Ut = {
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
      duration: r = 3e3,
      showClose: u = !1
    } = e;
    s === "center" ? Ri({
      message: t,
      type: n,
      duration: r,
      showClose: u,
      grouping: !0,
      customClass: `app-toast app-toast--${n}`
    }) : zi({
      message: t,
      type: n,
      position: s,
      duration: r,
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
}, Li = "snippets-code:developer-mode", Ws = "snippets-code:frontend-diagnostics", $i = 240, Ge = "[REDACTED]", ht = (e) => e.replace(
  /("(?:[^"]*(?:token|password|secret|authorization)[^"]*)"\s*:\s*)("(?:\\.|[^"])*"|[^,\r\n}\]]+)/gi,
  `$1"${Ge}"`
).replace(/\bBearer\s+[A-Za-z0-9._~+/=-]+/gi, `Bearer ${Ge}`).replace(
  /\b(?:gh[pousr]_[A-Za-z0-9_]{12,}|github_pat_[A-Za-z0-9_]{12,})\b/g,
  Ge
).replace(/(https?:\/\/)[^/\s@]+@/gi, `$1${Ge}@`).replace(
  /([?&][^=&\s]*(?:token|password|secret|authorization)[^=&\s]*=)[^&\s]+/gi,
  `$1${Ge}`
), Fs = (e) => {
  if (e === void 0) return;
  if (typeof e == "string") return ht(e);
  const t = /* @__PURE__ */ new WeakSet();
  try {
    return ht(
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
    return ht(String(e));
  }
}, Ai = () => {
  try {
    return globalThis.__TAURI_INTERNALS__?.metadata?.currentWindow?.label ?? "webview";
  } catch {
    return "webview";
  }
}, Di = () => {
  if (typeof localStorage > "u") return [];
  try {
    const e = JSON.parse(localStorage.getItem(Ws) || "[]");
    return Array.isArray(e) ? e : [];
  } catch {
    return [];
  }
}, an = () => {
  if (typeof localStorage > "u") return !1;
  try {
    return localStorage.getItem(Li) === "true";
  } catch {
    return !1;
  }
}, Wi = (e, t, n) => {
  if (!an() || typeof localStorage > "u") return;
  const s = Di();
  s.push({
    timestamp: (/* @__PURE__ */ new Date()).toISOString(),
    level: e,
    windowLabel: Ai(),
    message: ht(t),
    data: Fs(n)
  });
  try {
    localStorage.setItem(
      Ws,
      JSON.stringify(s.slice(-$i))
    );
  } catch {
  }
}, Fi = () => an(), Bi = (e) => e === "error" || an(), rt = (e, t, n) => {
  Wi(e, t, n), Bi(e) && h("frontend_log", {
    level: e,
    message: t,
    data: n === void 0 ? null : Fs(n)
  }).catch(() => {
  });
}, Ve = {
  info: (e, t, ...n) => {
    rt("info", e, t);
  },
  error: (e, t) => {
    rt("error", e, t);
  },
  warn: (e, t) => {
    rt("warn", e, t);
  },
  debug: (e, t) => {
    Fi() && rt("debug", e, t);
  }
}, ji = "[screen-recorder]", G = async (e, t) => {
  const n = performance.now();
  try {
    return await h(e, t);
  } catch (s) {
    throw console.error(`${ji} invoke:error ${e}`, {
      elapsedMs: Math.round(performance.now() - n),
      error: s
    }), s;
  }
}, Hi = () => G("screen_recorder_get_ffmpeg_status"), fe = (e) => G("screen_recorder_set_capture_excluded", { excluded: e }), it = (e) => G("screen_recorder_set_passthrough_region", { region: e }), lt = (e) => G("screen_recorder_set_overlay_window_region", { region: e }), Ui = () => G("screen_recorder_pick_target_window"), Gi = () => G("screen_recorder_close_window"), Vi = (e, t) => G("screen_recorder_start_recording", {
  region: e,
  fps: t.fps,
  quality: t.quality,
  audio: t.audio && t.format === "mp4",
  showCursor: t.showCursor
}), Yi = () => G("screen_recorder_pause_recording"), Ki = (e, t) => G("screen_recorder_resume_recording", {
  region: e,
  fps: t.fps,
  quality: t.quality,
  audio: t.audio && t.format === "mp4",
  showCursor: t.showCursor
}), qi = () => G("screen_recorder_stop_recording"), Zi = () => G("screen_recorder_cancel_recording"), Xi = () => G("screen_recorder_cancel_export"), Ji = (e, t) => G("screen_recorder_export_recording", {
  format: e.format,
  fps: e.fps,
  quality: e.quality,
  savePath: e.savePath,
  durationMs: t
}), ts = () => ({
  format: "mp4",
  fps: 30,
  quality: "standard",
  savePath: "",
  audio: !0,
  showCursor: !0
});
function Qi() {
  const e = R("selecting"), t = R(ts()), n = R(null), s = R(null), r = R(""), u = R(null), l = R(0), d = R(0), g = R(null), y = () => {
    d.value = e.value === "recording" && u.value !== null ? l.value + Date.now() - u.value : l.value;
  }, v = () => {
    g.value !== null && (window.clearInterval(g.value), g.value = null);
  }, _ = () => {
    v(), y(), g.value = window.setInterval(() => {
      y();
    }, 250);
  }, I = async () => (n.value = await Hi(), n.value), N = async (A) => {
    r.value = "", s.value = null;
    const se = n.value ?? await I();
    if (!se.available)
      throw new Error(se.message || "FFmpeg unavailable");
    await Vi(A, t.value), e.value = "recording", l.value = 0, d.value = 0, u.value = Date.now(), _();
  }, B = async () => {
    e.value === "recording" && (y(), l.value = d.value, u.value = null, v(), await Yi(), e.value = "paused");
  }, w = async (A) => {
    e.value === "paused" && (await Ki(A, t.value), e.value = "recording", u.value = Date.now(), _());
  }, k = async () => {
    e.value !== "recording" && e.value !== "paused" || (y(), l.value = d.value, u.value = null, v(), await qi(), e.value = "exporting");
  }, T = async () => {
    e.value = "exporting";
    try {
      return s.value = await Ji(
        t.value,
        Math.round(d.value)
      ), e.value = "completed", s.value;
    } catch (A) {
      throw e.value = "ready", s.value = null, A;
    }
  }, ie = async () => {
    await Xi(), e.value = "ready", s.value = null;
  }, S = async () => {
    v(), await Zi(), e.value = "selecting", u.value = null, l.value = 0, d.value = 0, s.value = null;
  }, V = () => {
    e.value = "selecting", u.value = null, l.value = 0, d.value = 0, s.value = null, r.value = "", t.value = ts();
  };
  return rs(() => {
    v();
  }), {
    status: e,
    settings: t,
    ffmpegStatus: n,
    result: s,
    errorMessage: r,
    elapsedMs: d,
    refreshFfmpegStatus: I,
    begin: N,
    pause: B,
    resume: w,
    stop: k,
    exportFile: T,
    cancelExport: ie,
    cancel: S,
    reset: V
  };
}
const el = { class: "screen-recorder" }, tl = ["onMousedown"], nl = { class: "window-title" }, sl = {
  key: 0,
  class: "time"
}, ol = {
  key: 1,
  class: "save-status"
}, al = {
  key: 2,
  class: "save-status"
}, rl = {
  key: 3,
  class: "save-status"
}, il = ["title"], ll = { class: "button-label" }, cl = ["title"], ul = { class: "button-label" }, dl = ["title"], hl = { class: "button-label" }, pl = ["title"], fl = { class: "button-label" }, gl = ["title"], vl = { class: "button-label" }, yl = ["disabled", "title"], wl = { class: "record-label" }, ml = ["title"], _l = ["title"], bl = { class: "capture-viewport" }, Cl = { class: "capture-frame" }, kl = { class: "control-group control-group--tools" }, Sl = { class: "tool-pill" }, Rl = ["title", "aria-label"], Ml = ["title", "aria-label", "aria-pressed", "disabled"], xl = ["title", "aria-label", "aria-pressed", "disabled"], Tl = { class: "select-field" }, Ol = ["disabled"], El = ["disabled"], Il = ["disabled"], Nl = { value: "high" }, Pl = { value: "standard" }, zl = { value: "small" }, Ll = { class: "dimension-group optional-size" }, $l = { class: "dimension" }, Al = ["value"], Dl = { class: "dimension" }, Wl = ["value"], Fl = { class: "control-group control-group--actions" }, Bl = { class: "time" }, jl = ["title"], Hl = { class: "button-label" }, Ul = ["title"], Gl = { class: "button-label" }, Vl = ["title"], Yl = { class: "export-progress__meta" }, Kl = { class: "export-progress__track" }, ql = ["title"], Zl = { class: "button-label" }, Xl = ["title"], Jl = ["title"], Ql = { class: "button-label" }, ec = ["title"], tc = { class: "button-label" }, nc = ["title"], sc = { class: "button-label" }, oc = ["disabled", "title"], ac = { class: "record-label" }, rc = {
  key: 0,
  class: "warning"
}, ce = "[screen-recorder]", ee = 80, Gt = 400, Ye = 240, Vt = 260, ns = 140, ic = 3, ss = 2, os = 0, lc = 15, cc = 10, uc = 2, dc = 8, hc = /* @__PURE__ */ W({
  __name: "index",
  setup(e) {
    const t = {
      start: "R",
      pause: "P",
      stop: "S"
    }, { t: n } = No(), s = cs(), r = R(null), u = R(null), l = R(null), d = R({ width: 0, height: 0 }), g = R(!1), y = R(!1), v = R(!1), _ = R(0), I = R(!1), N = R(null);
    let B = null, w = null, k = null, T = null, ie = null, S = null, V = null, A = null, se = null, O = null;
    const rn = [
      { className: "n", direction: "North" },
      { className: "ne", direction: "NorthEast" },
      { className: "e", direction: "East" },
      { className: "se", direction: "SouthEast" },
      { className: "s", direction: "South" },
      { className: "sw", direction: "SouthWest" },
      { className: "w", direction: "West" },
      { className: "nw", direction: "NorthWest" }
    ], {
      status: b,
      settings: E,
      ffmpegStatus: le,
      result: F,
      elapsedMs: Bs,
      refreshFfmpegStatus: js,
      begin: Hs,
      pause: Us,
      resume: Gs,
      stop: Vs,
      exportFile: Ys,
      cancelExport: ln,
      cancel: Ks,
      reset: qs
    } = Qi(), cn = R(!1), oe = m(
      () => b.value === "recording" || b.value === "paused" || b.value === "exporting"
    ), We = m(
      () => E.value.audio && E.value.format === "mp4"
    ), Je = m(
      () => We.value && b.value === "recording"
    ), Zs = m(() => {
      const o = Je.value && !I.value ? _.value : 0, a = (p, f) => Math.max(0.18, Math.min(1, p + o * f)).toFixed(3);
      return {
        "--bar-1": a(0.28, 0.64),
        "--bar-2": a(0.42, 0.78),
        "--bar-3": a(0.34, 0.94),
        "--bar-4": a(0.22, 0.72)
      };
    }), Xs = m(() => {
      if (E.value.format === "gif")
        return n("screenRecorder.gifAudioUnsupported");
      if (I.value && E.value.audio)
        return n("screenRecorder.audioMeterUnavailable");
      if (F.value?.audioDevice)
        return n("screenRecorder.audioRecorded", { device: F.value.audioDevice });
      if (F.value && !F.value.hasAudio)
        return n("screenRecorder.audioDeviceMissing");
      if (le.value?.available && !le.value.systemAudioAvailable) {
        const o = le.value.audioDevices?.join(", ") || n("screenRecorder.none");
        return E.value.audio ? n("screenRecorder.systemAudioUnavailable", { devices: o }) : n("screenRecorder.audioDisabled");
      }
      return E.value.audio ? n("screenRecorder.audioEnabled") : n("screenRecorder.audioDisabled");
    }), Js = m(
      () => E.value.showCursor ? String(n("screenRecorder.showCursorOn")) : String(n("screenRecorder.showCursorOff"))
    ), un = m(
      () => `${n("screenRecorder.start")} (${t.start})`
    ), dn = m(
      () => `${n("screenRecorder.pause")} (${t.pause})`
    ), hn = m(
      () => `${n("screenRecorder.resume")} (${t.pause})`
    ), pn = m(
      () => `${n("screenRecorder.stop")} (${t.stop})`
    ), fn = m(() => v.value), Mt = m(() => {
      const o = N.value?.progress ?? 0.03;
      return Math.max(1, Math.min(100, Math.round(o * 100)));
    }), xt = m(() => {
      const o = N.value;
      return o ? o.totalFrames && o.stage === "frames" ? `${o.message}` : o.message || n("screenRecorder.exporting") : n("screenRecorder.exporting");
    }), Qs = m(() => {
      const o = N.value;
      return o?.totalFrames ? `${xt.value} (${o.currentFrame}/${o.totalFrames})` : xt.value;
    }), gn = m(() => {
      const o = Math.floor(Bs.value / 1e3), a = Math.floor(o / 60).toString().padStart(2, "0"), p = (o % 60).toString().padStart(2, "0");
      return `${a}:${p}`;
    }), Tt = (o) => o instanceof Error ? o.message : String(o), xe = async (o) => {
      try {
        await o();
      } catch (a) {
        console.error(`${ce} action failed`, a), Ve.error(`${ce} action failed`, a), cn.value || Ut.msg(Tt(a), "error");
      }
    }, Qe = (o) => Math.max(2, Math.floor(Math.round(o) / 2) * 2), vn = (o) => Math.max(1, Math.round(o)), yn = (o, a, p, f, z) => ({
      ...o,
      x: o.x + (a - o.screenX) / o.scale,
      y: o.y + (p - o.screenY) / o.scale,
      width: f / o.scale,
      height: z / o.scale,
      screenX: a,
      screenY: p,
      physicalWidth: f,
      physicalHeight: z
    }), eo = async (o) => {
      const a = o.screenX + Math.round(o.physicalWidth / 2), p = o.screenY + Math.round(o.physicalHeight / 2), f = await He(o.screenX, o.screenY) || await He(a, p);
      if (!f)
        return yn(
          o,
          o.screenX,
          o.screenY,
          Qe(o.physicalWidth),
          Qe(o.physicalHeight)
        );
      const z = f.position.x, L = f.position.y, X = z + f.size.width, ae = L + f.size.height, j = o.screenX + o.physicalWidth, ot = o.screenY + o.physicalHeight, de = Math.max(o.screenX, z), J = Math.max(o.screenY, L), he = Math.min(j, X), Q = Math.min(ot, ae), je = Qe(he - de), Pn = Qe(Q - J);
      if (je < ee || Pn < ee)
        throw new Error(n("screenRecorder.recordingAreaOutOfBounds"));
      return yn(
        o,
        de,
        J,
        je,
        Pn
      );
    }, Te = (o, a) => Math.abs(o - a) <= uc, to = (o, a) => o === a ? !0 : !o || !a ? !1 : Te(o.x, a.x) && Te(o.y, a.y) && Te(o.width, a.width) && Te(o.height, a.height), et = async (o) => {
      to(O, o) || (O = o ? { ...o } : null, await it(o).catch(() => {
      }));
    }, Ot = async () => {
      const o = r.value;
      if (!o)
        throw new Error(n("screenRecorder.viewportNotReady"));
      const a = o.getBoundingClientRect(), p = await s.scaleFactor(), f = await s.innerPosition(), z = vn(a.width * p), L = vn(a.height * p);
      if (z < ee || L < ee)
        throw new Error(n("screenRecorder.recordingAreaTooSmall"));
      return {
        x: a.left,
        y: a.top,
        width: z / p,
        height: L / p,
        screenX: Math.round(f.x + a.left * p),
        screenY: Math.round(f.y + a.top * p),
        physicalWidth: z,
        physicalHeight: L,
        scale: p
      };
    }, wn = async () => {
      const o = await Ot();
      return eo(o);
    }, no = async () => {
      try {
        const o = await Ot();
        if ((!Te(
          d.value.width,
          o.physicalWidth
        ) || !Te(
          d.value.height,
          o.physicalHeight
        )) && (d.value = {
          width: o.physicalWidth,
          height: o.physicalHeight
        }), y.value) {
          const a = u.value?.getBoundingClientRect().height ?? 0, p = l.value?.getBoundingClientRect().height ?? 0;
          await et({
            x: Math.round(o.x * o.scale),
            y: Math.round((o.y + a) * o.scale),
            width: o.physicalWidth,
            height: Math.max(
              1,
              o.physicalHeight - Math.round((a + p) * o.scale)
            )
          });
          return;
        }
        await et({
          x: Math.round(o.x * o.scale),
          y: Math.round(o.y * o.scale),
          width: o.physicalWidth,
          height: o.physicalHeight
        });
      } catch {
        (d.value.width !== 0 || d.value.height !== 0) && (d.value = { width: 0, height: 0 }), await et(null);
      }
    }, Y = async () => A || (A = no().finally(() => {
      if (A = null, se) {
        const o = se;
        se = null, et(o);
      }
    }), A), so = () => {
      S === null && (S = requestAnimationFrame(() => {
        S = null, Y();
      }));
    }, tt = () => {
      g.value || so();
    }, mn = () => {
      se = null, O = null;
    }, nt = async () => {
      mn(), await it(null).catch(() => {
      }), await lt(null).catch(() => {
      });
    }, _n = () => {
      g.value = !1, y.value = !1, v.value = !1;
    }, bn = () => {
      window.setTimeout(() => {
        Y();
      }, 120);
    }, Fe = () => new Promise((o) => {
      requestAnimationFrame(() => requestAnimationFrame(() => o()));
    }), oo = async () => {
      document.documentElement.classList.add("screen-recorder-repaint"), await Fe(), document.documentElement.classList.remove("screen-recorder-repaint"), await Fe();
    }, ao = async () => {
      await s.setIgnoreCursorEvents(!0).catch(() => {
      }), await Fe(), await s.setIgnoreCursorEvents(!1).catch(() => {
      }), await Y();
    }, Et = async () => {
      const [o, a] = await Promise.all([
        s.outerPosition(),
        s.outerSize()
      ]);
      return {
        x: o.x,
        y: o.y,
        width: a.width,
        height: a.height
      };
    }, ro = (o) => o ? {
      x: o.position.x,
      y: o.position.y,
      width: o.size.width,
      height: o.size.height
    } : null, Cn = (o) => {
      const a = l.value?.getBoundingClientRect().height ?? 42;
      return Math.max(
        8,
        Math.round((a + dc) * o)
      );
    }, io = (o, a, p) => a ? o.y + o.height >= a.y + a.height - Cn(p) : !1, It = async () => {
      try {
        const o = await Et(), a = o.x + Math.round(o.width / 2), p = o.y + Math.round(o.height / 2), f = await He(a, p) || await He(o.x, o.y), z = f?.scaleFactor || await s.scaleFactor();
        v.value = io(
          o,
          ro(f),
          z
        );
      } catch {
        v.value = !1;
      }
    }, Be = () => {
      V === null && (V = requestAnimationFrame(() => {
        V = null, It();
      }));
    }, kn = () => {
      Be(), tt();
    }, Nt = async () => {
      if (!y.value) {
        await lt(null).catch(() => {
        });
        return;
      }
      const o = await Et(), a = await s.scaleFactor(), p = u.value?.getBoundingClientRect().height ?? 0, f = l.value?.getBoundingClientRect().height ?? 0;
      await lt({
        width: o.width,
        height: o.height,
        topHeight: Math.round(p * a),
        bottomHeight: Math.round(f * a)
      }).catch(() => {
      });
    }, Sn = (o, a) => {
      const p = Math.min(o.width, a.width), f = Math.min(o.height, a.height), z = a.x + a.width - p, L = a.y + a.height - f;
      return {
        x: Math.min(Math.max(o.x, a.x), z),
        y: Math.min(Math.max(o.y, a.y), L),
        width: p,
        height: f
      };
    }, lo = (o, a, p) => {
      if (!a) return !1;
      const f = Math.max(8, Math.round(8 * p)), z = a.x + a.width, L = a.y + a.height, X = o.screenX + o.physicalWidth, ae = o.screenY + o.physicalHeight;
      return o.screenX <= a.x + f && o.screenY <= a.y + f && X >= z - f && ae >= L - f;
    }, co = (o, a, p) => {
      if (!a) return !1;
      const f = Math.max(8, Math.round(8 * p));
      return o.screenX <= a.x + f || o.screenY <= a.y + f || o.screenX + o.physicalWidth >= a.x + a.width - f || o.screenY + o.physicalHeight >= a.y + a.height - f;
    }, uo = (o, a, p) => a ? o.screenY + o.physicalHeight >= a.y + a.height - Cn(p) : !1, ho = (o, a, p) => {
      if (!p) return o;
      const f = Math.round(lc * a), z = Math.round(cc * a);
      return {
        ...o,
        physicalWidth: Math.max(ee, o.physicalWidth - f),
        physicalHeight: Math.max(
          ee,
          o.physicalHeight - z
        )
      };
    }, Rn = async (o) => {
      await s.setSize(
        new be(Math.round(o.width), Math.round(o.height))
      ), await s.setPosition(
        new te(Math.round(o.x), Math.round(o.y))
      ), await Fe();
    }, Mn = async () => {
      await s.setAlwaysOnTop(!0).catch(() => {
      });
    }, xn = async () => {
      const [o, a] = await Promise.all([
        Ot(),
        Et()
      ]);
      return { actualRegion: o, currentFrame: a };
    }, po = async (o, a, p) => {
      const { actualRegion: f, currentFrame: z } = await xn(), L = f.screenX - z.x, X = f.screenY - z.y, ae = Math.max(
        0,
        z.width - f.physicalWidth
      ), j = Math.max(
        0,
        z.height - f.physicalHeight
      );
      return {
        x: o.screenX - L,
        y: o.screenY - X,
        width: Math.max(a, o.physicalWidth + ae),
        height: Math.max(p, o.physicalHeight + j)
      };
    }, Tn = async () => {
      T?.(), T = null, _.value = 0;
    }, st = async () => {
      if (!(!We.value || T))
        try {
          T = await gt(
            "screen_recorder_audio_level",
            (o) => {
              if (!Je.value) {
                _.value = 0;
                return;
              }
              const a = Math.max(
                0,
                Math.min(1, Number(o.payload?.level ?? 0))
              );
              _.value = _.value * 0.38 + a * 0.62;
            }
          ), I.value = !1;
        } catch (o) {
          console.error(`${ce} audio meter failed`, o), Ve.warn(`${ce} audio meter failed`, o), I.value = !0;
        }
    }, Pt = () => {
      s.setFocus().catch(() => {
      });
    }, fo = async (o) => {
      o.button !== 0 || oe.value || (_n(), await s.setMinSize(new ve(Gt, Ye)).catch(() => {
      }), await nt(), await s.startDragging().catch((a) => {
        Ut.msg(Tt(a), "error");
      }), bn(), Be());
    }, go = async (o) => {
      oe.value || (_n(), await s.setMinSize(new ve(Gt, Ye)).catch(() => {
      }), await nt(), await s.startResizeDragging(o).catch((a) => {
        Ut.msg(Tt(a), "error");
      }), bn(), Be());
    }, zt = () => xe(async () => {
      N.value = null, await st(), await fe(!0).catch(() => {
      }), await Y(), await Hs(await wn());
    }), Lt = () => xe(async () => {
      await Us();
    }), $t = () => xe(async () => {
      await Gs(await wn());
    }), At = () => xe(async () => {
      N.value = {
        stage: "encode",
        message: E.value.format === "gif" ? n("screenRecorder.preparingGif") : n("screenRecorder.preparingMp4"),
        progress: 0.01,
        currentFrame: 0
      }, await Vs(), _.value = 0, await fe(!1).catch(() => {
      }), await Ys(), await Y();
    }), On = () => xe(async () => {
      await ln(), N.value = null, await fe(!1).catch(() => {
      }), await Y();
    }), Dt = () => {
      const o = { ...E.value };
      nt(), qs(), E.value = o, b.value = "ready", F.value = null, N.value = null, fe(!1).catch(() => {
      }), ge(Y), st();
    }, Wt = (o) => {
      if (b.value !== "exporting") {
        if (o === "start") {
          b.value === "ready" ? zt() : b.value === "completed" && Dt();
          return;
        }
        if (o === "pause") {
          b.value === "recording" ? Lt() : b.value === "paused" && $t();
          return;
        }
        o === "stop" && (b.value === "recording" || b.value === "paused") && At();
      }
    }, vo = async (o) => {
      const a = await He(o.screenX, o.screenY), p = a?.scaleFactor || await s.scaleFactor(), f = a ? {
        x: a.position.x,
        y: a.position.y,
        width: a.size.width,
        height: a.size.height
      } : null, z = lo(
        o,
        f,
        p
      ), L = co(
        o,
        f,
        p
      );
      v.value = uo(
        o,
        f,
        p
      ), g.value = !0, y.value = L, await ge(), await Fe(), await s.setMinSize(
        L ? new ve(Vt, ns) : new ve(Vt, Ye)
      ).catch(() => {
      });
      const X = Math.round(Vt * p), ae = Math.round(
        (L ? ns : Ye) * p
      ), j = ho(o, p, !z), ot = L && f ? {
        x: Math.max(f.x, j.screenX),
        y: Math.max(f.y, j.screenY),
        width: Math.max(
          X,
          Math.min(j.physicalWidth, f.width)
        ),
        height: Math.max(
          ae,
          Math.min(j.physicalHeight, f.height)
        )
      } : await po(
        j,
        X,
        ae
      );
      try {
        if (await Rn(
          f && L ? Sn(ot, f) : ot
        ), await Mn(), await ge(), await Nt(), L)
          return;
        const de = async () => {
          const { actualRegion: J, currentFrame: he } = await xn(), Q = {
            x: j.screenX - J.screenX,
            y: j.screenY - J.screenY,
            width: j.physicalWidth - J.physicalWidth,
            height: j.physicalHeight - J.physicalHeight
          };
          if (Math.abs(Q.x) <= os && Math.abs(Q.y) <= os && Math.abs(Q.width) <= ss && Math.abs(Q.height) <= ss)
            return !0;
          const je = {
            x: he.x + Q.x,
            y: he.y + Q.y,
            width: Math.max(X, he.width + Q.width),
            height: Math.max(
              ae,
              he.height + Q.height
            )
          };
          return await Rn(
            f && L ? Sn(je, f) : je
          ), !1;
        };
        for (let J = 0; J < ic && !await de(); J += 1)
          ;
      } catch (de) {
        console.error(`${ce} snap correction failed`, de), Ve.warn(`${ce} snap correction failed`, de);
      } finally {
        await Mn(), await ao(), await It(), await Y(), await Nt(), await oo(), await s.setFocus().catch(() => {
        });
      }
    }, yo = () => xe(async () => {
      await nt();
      const o = await Ui();
      await vo(o);
    }), wo = () => {
      oe.value || E.value.format === "gif" || (E.value.audio = !E.value.audio);
    }, mo = () => {
      oe.value || (E.value.showCursor = !E.value.showCursor);
    }, _o = async () => {
      await s.minimize();
    }, En = async () => {
      cn.value = !0;
      try {
        b.value === "exporting" ? await ln().catch(() => {
        }) : await Ks(), await it(null).catch(() => {
        }), await fe(!1).catch(() => {
        });
      } catch {
      }
      await Gi();
    }, In = async () => {
      F.value && (await Y(), await h("open_file_with_default_app", { filePath: F.value.path }));
    }, bo = async () => {
      F.value && (await Y(), await h("show_file_in_folder", { filePath: F.value.path }));
    }, Nn = (o) => {
      if (o.repeat || o.ctrlKey || o.metaKey || o.altKey) return;
      const a = o.key.toLowerCase();
      if (a === "r") {
        o.preventDefault(), o.stopPropagation(), Wt("start");
        return;
      }
      if (a === "p") {
        o.preventDefault(), o.stopPropagation(), Wt("pause");
        return;
      }
      if (a === "s") {
        o.preventDefault(), o.stopPropagation(), Wt("stop");
        return;
      }
      o.key === "Escape" && (o.preventDefault(), En());
    };
    return bt(async () => {
      Ve.info(`${ce} frontend mounted`), b.value = "ready", await s.setMinSize(new ve(Gt, Ye)).catch(() => {
      }), await fe(!1).catch(() => {
      }), await js().catch(() => {
      }), await ge(), await Y(), await It(), await st(), await ge(), ie = await gt(
        "screen_recorder_export_progress",
        (o) => {
          N.value = o.payload;
        }
      ).catch(() => null), await s.emit("screen_recorder_ready"), Ve.info(`${ce} frontend ready emitted`), r.value && (B = new ResizeObserver(() => {
        tt();
      }), B.observe(r.value)), w = await s.onMoved(() => {
        Be(), tt();
      }).catch(() => null), k = await s.onResized(() => {
        Be(), tt();
      }).catch(() => null), window.addEventListener("resize", kn), window.addEventListener("keydown", Nn);
    }), we(We, (o) => {
      o ? st() : Tn();
    }), we(b, (o) => {
      o !== "recording" && (_.value = 0), o !== "exporting" && (N.value = null);
    }), we(fn, async () => {
      await ge(), await Y(), await Nt();
    }), rs(() => {
      B?.disconnect(), w?.(), k?.(), ie?.(), window.removeEventListener(
        "resize",
        kn
      ), window.removeEventListener("keydown", Nn), mn(), V !== null && (cancelAnimationFrame(V), V = null), it(null).catch(() => {
      }), lt(null).catch(() => {
      }), fe(!1).catch(() => {
      }), Tn();
    }), (o, a) => (C(), x("div", el, [
      c(
        "div",
        {
          class: $(["recorder-shell", {
            recording: i(b) === "recording",
            paused: i(b) === "paused",
            "snap-aligned": g.value,
            "snap-fullscreen": y.value
          }])
        },
        [
          (C(), x(
            ue,
            null,
            Io(rn, (p) => c("span", {
              key: p.className,
              class: $(["resize-zone", p.className]),
              onMousedown: Ee((f) => go(p.direction), ["prevent"])
            }, null, 42, tl)),
            64
            /* STABLE_FRAGMENT */
          )),
          c(
            "header",
            {
              ref_key: "titleBarRef",
              ref: u,
              class: "title-bar",
              onMouseenter: Pt,
              onMousedown: fo
            },
            [
              c(
                "span",
                nl,
                M(o.$t("screenRecorder.title")),
                1
                /* TEXT */
              ),
              fn.value ? (C(), x(
                "div",
                {
                  key: 0,
                  class: "top-control-strip",
                  onMouseenter: Pt,
                  onMousedown: a[1] || (a[1] = Ee(() => {
                  }, ["stop"]))
                },
                [
                  i(b) === "recording" || i(b) === "paused" ? (C(), x(
                    "span",
                    sl,
                    M(gn.value),
                    1
                    /* TEXT */
                  )) : i(b) === "exporting" ? (C(), x(
                    "span",
                    ol,
                    M(Mt.value) + "% ",
                    1
                    /* TEXT */
                  )) : i(b) === "completed" ? (C(), x(
                    "span",
                    al,
                    M(i(F)?.hasAudio ? o.$t("screenRecorder.savedWithAudio") : o.$t("screenRecorder.savedWithoutAudio")),
                    1
                    /* TEXT */
                  )) : (C(), x(
                    "span",
                    rl,
                    M(d.value.width) + "×" + M(d.value.height),
                    1
                    /* TEXT */
                  )),
                  i(b) === "recording" || i(b) === "paused" ? (C(), x(
                    ue,
                    { key: 4 },
                    [
                      c("button", {
                        class: "control-button",
                        title: i(b) === "paused" ? hn.value : dn.value,
                        onClick: a[0] || (a[0] = (p) => i(b) === "paused" ? $t() : Lt())
                      }, [
                        c(
                          "span",
                          ll,
                          M(i(b) === "paused" ? o.$t("screenRecorder.resume") : o.$t("screenRecorder.pause")),
                          1
                          /* TEXT */
                        )
                      ], 8, il),
                      c("button", {
                        class: "control-button danger",
                        title: pn.value,
                        onClick: At
                      }, [
                        c(
                          "span",
                          ul,
                          M(o.$t("screenRecorder.stop")),
                          1
                          /* TEXT */
                        )
                      ], 8, cl)
                    ],
                    64
                    /* STABLE_FRAGMENT */
                  )) : i(b) === "exporting" ? (C(), x("button", {
                    key: 5,
                    class: "control-button danger",
                    title: o.$t("screenRecorder.cancelExport"),
                    onClick: On
                  }, [
                    c(
                      "span",
                      hl,
                      M(o.$t("screenRecorder.cancel")),
                      1
                      /* TEXT */
                    )
                  ], 8, dl)) : i(b) === "completed" && i(F) ? (C(), x(
                    ue,
                    { key: 6 },
                    [
                      c("button", {
                        class: "control-button",
                        title: o.$t("screenRecorder.openFile"),
                        onClick: In
                      }, [
                        c(
                          "span",
                          fl,
                          M(o.$t("screenRecorder.open")),
                          1
                          /* TEXT */
                        )
                      ], 8, pl),
                      c("button", {
                        class: "control-button",
                        title: o.$t("screenRecorder.recordAgain"),
                        onClick: Dt
                      }, [
                        c(
                          "span",
                          vl,
                          M(o.$t("screenRecorder.again")),
                          1
                          /* TEXT */
                        )
                      ], 8, gl)
                    ],
                    64
                    /* STABLE_FRAGMENT */
                  )) : (C(), x("button", {
                    key: 7,
                    class: "record-button",
                    disabled: i(le)?.available === !1 || d.value.width < ee || d.value.height < ee,
                    title: un.value,
                    onClick: zt
                  }, [
                    a[7] || (a[7] = c(
                      "span",
                      { class: "record-dot" },
                      null,
                      -1
                      /* HOISTED */
                    )),
                    c(
                      "span",
                      wl,
                      M(o.$t("screenRecorder.start")),
                      1
                      /* TEXT */
                    )
                  ], 8, yl))
                ],
                32
                /* NEED_HYDRATION */
              )) : ne("v-if", !0),
              c(
                "div",
                {
                  class: "window-actions",
                  onMousedown: a[2] || (a[2] = Ee(() => {
                  }, ["stop"]))
                },
                [
                  c("button", {
                    class: "title-button title-button--window",
                    title: o.$t("screenRecorder.minimize"),
                    onClick: _o
                  }, [
                    P(i(Yo), {
                      class: "title-icon",
                      theme: "outline",
                      size: "20",
                      strokeWidth: 3,
                      strokeLinecap: "butt"
                    })
                  ], 8, ml),
                  c("button", {
                    class: "title-button title-button--close",
                    title: o.$t("common.close"),
                    onClick: En
                  }, [
                    P(i(Vo), {
                      class: "title-icon",
                      theme: "outline",
                      size: "18",
                      strokeWidth: 3,
                      strokeLinecap: "butt"
                    })
                  ], 8, _l)
                ],
                32
                /* NEED_HYDRATION */
              )
            ],
            544
            /* NEED_HYDRATION, NEED_PATCH */
          ),
          c("main", bl, [
            a[12] || (a[12] = c(
              "span",
              { class: "viewport-mask top" },
              null,
              -1
              /* HOISTED */
            )),
            a[13] || (a[13] = c(
              "span",
              { class: "viewport-mask right" },
              null,
              -1
              /* HOISTED */
            )),
            a[14] || (a[14] = c(
              "span",
              { class: "viewport-mask bottom" },
              null,
              -1
              /* HOISTED */
            )),
            a[15] || (a[15] = c(
              "span",
              { class: "viewport-mask left" },
              null,
              -1
              /* HOISTED */
            )),
            c("div", Cl, [
              c(
                "div",
                {
                  ref_key: "captureHoleRef",
                  ref: r,
                  class: "capture-hole"
                },
                null,
                512
                /* NEED_PATCH */
              ),
              a[8] || (a[8] = c(
                "span",
                { class: "viewport-border top" },
                null,
                -1
                /* HOISTED */
              )),
              a[9] || (a[9] = c(
                "span",
                { class: "viewport-border right" },
                null,
                -1
                /* HOISTED */
              )),
              a[10] || (a[10] = c(
                "span",
                { class: "viewport-border bottom" },
                null,
                -1
                /* HOISTED */
              )),
              a[11] || (a[11] = c(
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
              ref: l,
              class: "control-strip",
              onMouseenter: Pt
            },
            [
              c("div", kl, [
                c("div", Sl, [
                  i(b) === "ready" || i(b) === "completed" ? (C(), x("button", {
                    key: 0,
                    class: "icon-control snap-control",
                    title: o.$t("screenRecorder.snapToWindow"),
                    "aria-label": o.$t("screenRecorder.snapToWindow"),
                    onMousedown: Ee(yo, ["prevent"])
                  }, [
                    P(i(qo), {
                      theme: "outline",
                      size: "18",
                      strokeWidth: 3,
                      strokeLinecap: "butt"
                    })
                  ], 40, Rl)) : ne("v-if", !0),
                  c("button", {
                    class: $(["audio-meter", {
                      active: Je.value && _.value > 0.03,
                      "audio-on": We.value,
                      metering: Je.value && !I.value,
                      muted: !We.value || I.value
                    }]),
                    title: Xs.value,
                    "aria-label": o.$t("screenRecorder.audioStatus"),
                    "aria-pressed": i(E).audio && i(E).format === "mp4",
                    disabled: oe.value || i(E).format === "gif",
                    onClick: wo
                  }, [
                    c(
                      "span",
                      {
                        class: "audio-bars",
                        style: Pe(Zs.value)
                      },
                      a[16] || (a[16] = [
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
                  ], 10, Ml),
                  c("button", {
                    class: $(["icon-control cursor-control", { active: i(E).showCursor }]),
                    title: Js.value,
                    "aria-label": o.$t("screenRecorder.showCursor"),
                    "aria-pressed": i(E).showCursor,
                    disabled: oe.value,
                    onClick: mo
                  }, [
                    P(i(Ko), {
                      theme: "outline",
                      size: "17",
                      strokeWidth: 3,
                      strokeLinecap: "butt"
                    })
                  ], 10, xl)
                ]),
                c("label", Tl, [
                  _e(c("select", {
                    "onUpdate:modelValue": a[3] || (a[3] = (p) => i(E).fps = p),
                    disabled: oe.value
                  }, a[17] || (a[17] = [
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
                  ]), 8, Ol), [
                    [Ft, i(E).fps]
                  ]),
                  a[18] || (a[18] = c(
                    "span",
                    { class: "unit" },
                    "fps",
                    -1
                    /* HOISTED */
                  ))
                ]),
                _e(c("select", {
                  "onUpdate:modelValue": a[4] || (a[4] = (p) => i(E).format = p),
                  class: "format-select optional-format",
                  disabled: oe.value
                }, a[19] || (a[19] = [
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
                ]), 8, El), [
                  [Ft, i(E).format]
                ]),
                _e(c("select", {
                  "onUpdate:modelValue": a[5] || (a[5] = (p) => i(E).quality = p),
                  class: "quality-select optional-quality",
                  disabled: oe.value
                }, [
                  c(
                    "option",
                    Nl,
                    M(o.$t("screenRecorder.qualityHigh")),
                    1
                    /* TEXT */
                  ),
                  c(
                    "option",
                    Pl,
                    M(o.$t("screenRecorder.qualityStandard")),
                    1
                    /* TEXT */
                  ),
                  c(
                    "option",
                    zl,
                    M(o.$t("screenRecorder.qualitySmall")),
                    1
                    /* TEXT */
                  )
                ], 8, Il), [
                  [Ft, i(E).quality]
                ]),
                c("div", Ll, [
                  c("label", $l, [
                    c("input", {
                      value: d.value.width,
                      readonly: ""
                    }, null, 8, Al)
                  ]),
                  a[20] || (a[20] = c(
                    "span",
                    { class: "multiply" },
                    "×",
                    -1
                    /* HOISTED */
                  )),
                  c("label", Dl, [
                    c("input", {
                      value: d.value.height,
                      readonly: ""
                    }, null, 8, Wl)
                  ]),
                  a[21] || (a[21] = c(
                    "span",
                    { class: "unit" },
                    "px",
                    -1
                    /* HOISTED */
                  ))
                ])
              ]),
              c("div", Fl, [
                i(b) === "recording" || i(b) === "paused" ? (C(), x(
                  ue,
                  { key: 0 },
                  [
                    c(
                      "span",
                      Bl,
                      M(gn.value),
                      1
                      /* TEXT */
                    ),
                    c("button", {
                      class: "control-button",
                      title: i(b) === "paused" ? hn.value : dn.value,
                      onClick: a[6] || (a[6] = (p) => i(b) === "paused" ? $t() : Lt())
                    }, [
                      c(
                        "span",
                        Hl,
                        M(i(b) === "paused" ? o.$t("screenRecorder.resume") : o.$t("screenRecorder.pause")),
                        1
                        /* TEXT */
                      )
                    ], 8, jl),
                    c("button", {
                      class: "control-button danger",
                      title: pn.value,
                      onClick: At
                    }, [
                      c(
                        "span",
                        Gl,
                        M(o.$t("screenRecorder.stop")),
                        1
                        /* TEXT */
                      )
                    ], 8, Ul)
                  ],
                  64
                  /* STABLE_FRAGMENT */
                )) : i(b) === "exporting" ? (C(), x(
                  ue,
                  { key: 1 },
                  [
                    c("div", {
                      class: "export-progress",
                      title: Qs.value
                    }, [
                      c("div", Yl, [
                        c(
                          "span",
                          null,
                          M(xt.value),
                          1
                          /* TEXT */
                        ),
                        c(
                          "strong",
                          null,
                          M(Mt.value) + "%",
                          1
                          /* TEXT */
                        )
                      ]),
                      c("div", Kl, [
                        c(
                          "span",
                          {
                            style: Pe({ width: `${Mt.value}%` })
                          },
                          null,
                          4
                          /* STYLE */
                        )
                      ])
                    ], 8, Vl),
                    c("button", {
                      class: "control-button danger",
                      title: o.$t("screenRecorder.cancelExport"),
                      onClick: On
                    }, [
                      c(
                        "span",
                        Zl,
                        M(o.$t("screenRecorder.cancel")),
                        1
                        /* TEXT */
                      )
                    ], 8, ql)
                  ],
                  64
                  /* STABLE_FRAGMENT */
                )) : i(b) === "completed" && i(F) ? (C(), x(
                  ue,
                  { key: 2 },
                  [
                    c("span", {
                      class: "save-status optional-save-status",
                      title: i(F).path
                    }, M(i(F).hasAudio ? o.$t("screenRecorder.savedWithAudio") : o.$t("screenRecorder.savedWithoutAudio")), 9, Xl),
                    c("button", {
                      class: "control-button",
                      title: o.$t("screenRecorder.openFile"),
                      onClick: In
                    }, [
                      c(
                        "span",
                        Ql,
                        M(o.$t("screenRecorder.open")),
                        1
                        /* TEXT */
                      )
                    ], 8, Jl),
                    c("button", {
                      class: "control-button",
                      title: o.$t("screenRecorder.openFolder"),
                      onClick: bo
                    }, [
                      c(
                        "span",
                        tc,
                        M(o.$t("screenRecorder.folder")),
                        1
                        /* TEXT */
                      )
                    ], 8, ec),
                    c("button", {
                      class: "control-button",
                      title: o.$t("screenRecorder.recordAgain"),
                      onClick: Dt
                    }, [
                      c(
                        "span",
                        sc,
                        M(o.$t("screenRecorder.again")),
                        1
                        /* TEXT */
                      )
                    ], 8, nc)
                  ],
                  64
                  /* STABLE_FRAGMENT */
                )) : (C(), x("button", {
                  key: 3,
                  class: "record-button",
                  disabled: i(le)?.available === !1 || d.value.width < ee || d.value.height < ee,
                  title: un.value,
                  onClick: zt
                }, [
                  a[22] || (a[22] = c(
                    "span",
                    { class: "record-dot" },
                    null,
                    -1
                    /* HOISTED */
                  )),
                  c(
                    "span",
                    ac,
                    M(o.$t("screenRecorder.start")),
                    1
                    /* TEXT */
                  )
                ], 8, oc))
              ])
            ],
            544
            /* NEED_HYDRATION, NEED_PATCH */
          )
        ],
        2
        /* CLASS */
      ),
      i(le) && !i(le).available ? (C(), x(
        "p",
        rc,
        M(i(le).message || o.$t("screenRecorder.ffmpegMissing")),
        1
        /* TEXT */
      )) : ne("v-if", !0)
    ]));
  }
}), pc = (e, t) => {
  const n = e.__vccOpts || e;
  for (const [s, r] of t)
    n[s] = r;
  return n;
}, fc = /* @__PURE__ */ pc(hc, [["__scopeId", "data-v-fa25bea6"]]), gc = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: fc
}, Symbol.toStringTag, { value: "Module" }));
export {
  wc as activate
};
