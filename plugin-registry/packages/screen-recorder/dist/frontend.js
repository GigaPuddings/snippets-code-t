import { inject as ye, createVNode as N, getCurrentInstance as Ie, ref as x, computed as m, unref as r, readonly as Co, getCurrentScope as ko, onScopeDispose as So, onMounted as bt, nextTick as ge, watch as we, isRef as xo, warn as Mo, provide as To, defineComponent as A, createElementBlock as M, openBlock as C, mergeProps as Oo, renderSlot as Ne, createElementVNode as c, normalizeClass as $, Transition as Xt, withCtx as me, withDirectives as _e, normalizeStyle as Pe, createTextVNode as Eo, toDisplayString as z, vShow as pt, shallowReactive as Ro, createBlock as ie, createCommentVNode as ne, resolveDynamicComponent as as, Fragment as ue, withModifiers as Re, isVNode as qe, render as ft, onUnmounted as is, renderList as Io, vModelSelect as Ft } from "vue";
import { useI18n as No } from "vue-i18n";
const tc = (e) => {
  e.registerRoute({
    target: "window",
    path: "/screen-recorder",
    name: "ScreenRecorder",
    component: () => Promise.resolve().then(() => Jl)
  });
};
function Po(e, t, n, s) {
  if (typeof t == "function" ? e !== t || !0 : !t.has(e)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
  return n === "m" ? s : n === "a" ? s.call(e) : s ? s.value : t.get(e);
}
function zo(e, t, n, s, i) {
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
class Ee {
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
class rs {
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
    return new rs(this.x / t, this.y / t);
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
    return this.position instanceof rs ? this.position : this.position.toLogical(t);
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
  const i = typeof n?.target == "string" ? { kind: "AnyLabel", label: n.target } : (s = n?.target) !== null && s !== void 0 ? s : { kind: "Any" };
  return h("plugin:event|listen", {
    event: e,
    target: i,
    handler: Lo(t)
  }).then((u) => async () => ls(e, u));
}
async function Do(e, t, n) {
  return gt(e, (s) => {
    ls(e, s.id), t(s);
  }, n);
}
async function Wo(e, t) {
  await h("plugin:event|emit", {
    event: e,
    payload: t
  });
}
async function Ao(e, t, n) {
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
    }).then((i) => new Ke(i));
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
    }).then(async () => this.emit("tauri://created")).catch(async (i) => this.emit("tauri://error", i));
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
    } : Do(t, n, {
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
    return Wo(t, n);
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
      for (const i of this.listeners[n] || [])
        i({
          event: n,
          id: -1,
          payload: s
        });
      return;
    }
    return Ao(t, n, s);
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
      value: t instanceof Ee ? t : new Ee(t)
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
      value: t instanceof Ee ? t : t ? new Ee(t) : null
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
      value: t instanceof Ee ? t : t ? new Ee(t) : null
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
    }), i = await this.listen(H.DRAG_DROP, (l) => {
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
      n(), i(), s(), u();
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
    const n = await this.listen(H.WINDOW_FOCUS, (i) => {
      t({ ...i, payload: !0 });
    }), s = await this.listen(H.WINDOW_BLUR, (i) => {
      t({ ...i, payload: !1 });
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
var Dn;
(function(e) {
  e.FollowsWindowActiveState = "followsWindowActiveState", e.Active = "active", e.Inactive = "inactive";
})(Dn || (Dn = {}));
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
function Go(e, t, n) {
  var s = typeof t.fill == "string" ? [t.fill] : t.fill || [], i = [], u = t.theme || n.theme;
  switch (u) {
    case "outline":
      i.push(typeof s[0] == "string" ? s[0] : "currentColor"), i.push("none"), i.push(typeof s[0] == "string" ? s[0] : "currentColor"), i.push("none");
      break;
    case "filled":
      i.push(typeof s[0] == "string" ? s[0] : "currentColor"), i.push(typeof s[0] == "string" ? s[0] : "currentColor"), i.push("#FFF"), i.push("#FFF");
      break;
    case "two-tone":
      i.push(typeof s[0] == "string" ? s[0] : "currentColor"), i.push(typeof s[1] == "string" ? s[1] : n.colors.twoTone.twoTone), i.push(typeof s[0] == "string" ? s[0] : "currentColor"), i.push(typeof s[1] == "string" ? s[1] : n.colors.twoTone.twoTone);
      break;
    case "multi-color":
      i.push(typeof s[0] == "string" ? s[0] : "currentColor"), i.push(typeof s[1] == "string" ? s[1] : n.colors.multiColor.outFillColor), i.push(typeof s[2] == "string" ? s[2] : n.colors.multiColor.innerStrokeColor), i.push(typeof s[3] == "string" ? s[3] : n.colors.multiColor.innerFillColor);
      break;
  }
  return {
    size: t.size || n.size,
    strokeWidth: t.strokeWidth || n.strokeWidth,
    strokeLinecap: t.strokeLinecap || n.strokeLinecap,
    strokeLinejoin: t.strokeLinejoin || n.strokeLinejoin,
    colors: i,
    id: e
  };
}
var Uo = Symbol("icon-context");
function Ct(e, t, n) {
  var s = {
    name: "icon-" + e,
    props: ["size", "strokeWidth", "strokeLinecap", "strokeLinejoin", "theme", "fill", "spin"],
    setup: function(u) {
      var l = Ho(), d = ye(Uo, jo);
      return function() {
        var g = u.size, y = u.strokeWidth, v = u.strokeLinecap, _ = u.strokeLinejoin, R = u.theme, I = u.fill, B = u.spin, w = Go(l, {
          size: g,
          strokeWidth: y,
          strokeLinecap: v,
          strokeLinejoin: _,
          theme: R,
          fill: I
        }, d), k = [d.prefix + "-icon"];
        return k.push(d.prefix + "-icon-" + e), t && d.rtl && k.push(d.prefix + "-icon-rtl"), B && k.push(d.prefix + "-icon-spin"), N("span", {
          class: k.join(" ")
        }, [n(w)]);
      };
    }
  };
  return s;
}
const Vo = Ct("close-small", !1, function(e) {
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
}), Yo = Ct("minus", !1, function(e) {
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
}), Ko = Ct("mouse", !0, function(e) {
  return N("svg", {
    width: e.size,
    height: e.size,
    viewBox: "0 0 48 48",
    fill: "none"
  }, [N("path", {
    "fill-rule": "evenodd",
    "clip-rule": "evenodd",
    d: "M24 16H12V32C12 38.6274 17.3726 44 24 44C30.6274 44 36 38.6274 36 32V16H24Z",
    fill: e.colors[1],
    stroke: e.colors[0],
    "stroke-width": e.strokeWidth,
    "stroke-linecap": e.strokeLinecap,
    "stroke-linejoin": e.strokeLinejoin
  }, null), N("path", {
    d: "M36 16C36 9.37258 30.6274 4 24 4V16H36Z",
    stroke: e.colors[0],
    "stroke-width": e.strokeWidth,
    "stroke-linecap": e.strokeLinecap,
    "stroke-linejoin": e.strokeLinejoin
  }, null), N("path", {
    d: "M24 4C17.3726 4 12 9.37258 12 16H24V4Z",
    stroke: e.colors[0],
    "stroke-width": e.strokeWidth,
    "stroke-linecap": e.strokeLinecap,
    "stroke-linejoin": e.strokeLinejoin
  }, null)]);
}), qo = Ct("radar", !1, function(e) {
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
}), ds = Symbol(), ut = "el", Zo = "is-", pe = (e, t, n, s, i) => {
  let u = `${e}-${t}`;
  return n && (u += `-${n}`), s && (u += `__${s}`), i && (u += `--${i}`), u;
}, hs = Symbol("namespaceContextKey"), Xo = (e) => {
  const t = e || (Ie() ? ye(hs, x(ut)) : x(ut));
  return m(() => r(t) || ut);
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
const Jo = Object.prototype.hasOwnProperty, Wn = (e, t) => Jo.call(e, t), Ze = (e) => typeof e == "function", Ce = (e) => typeof e == "string", ps = (e) => e !== null && typeof e == "object";
var Qo = typeof global == "object" && global && global.Object === Object && global, ea = typeof self == "object" && self && self.Object === Object && self, Qt = Qo || ea || Function("return this")(), ze = Qt.Symbol, fs = Object.prototype, ta = fs.hasOwnProperty, na = fs.toString, Ge = ze ? ze.toStringTag : void 0;
function sa(e) {
  var t = ta.call(e, Ge), n = e[Ge];
  try {
    e[Ge] = void 0;
    var s = !0;
  } catch {
  }
  var i = na.call(e);
  return s && (t ? e[Ge] = n : delete e[Ge]), i;
}
var oa = Object.prototype, aa = oa.toString;
function ia(e) {
  return aa.call(e);
}
var ra = "[object Null]", la = "[object Undefined]", An = ze ? ze.toStringTag : void 0;
function gs(e) {
  return e == null ? e === void 0 ? la : ra : An && An in Object(e) ? sa(e) : ia(e);
}
function ca(e) {
  return e != null && typeof e == "object";
}
var ua = "[object Symbol]";
function en(e) {
  return typeof e == "symbol" || ca(e) && gs(e) == ua;
}
function da(e, t) {
  for (var n = -1, s = e == null ? 0 : e.length, i = Array(s); ++n < s; )
    i[n] = t(e[n], n, e);
  return i;
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
var ba = /[\\^$.*+?()[\]{}|]/g, Ca = /^\[object .+?Constructor\]$/, ka = Function.prototype, Sa = Object.prototype, xa = ka.toString, Ma = Sa.hasOwnProperty, Ta = RegExp(
  "^" + xa.call(Ma).replace(ba, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$"
);
function Oa(e) {
  if (!ys(e) || ya(e))
    return !1;
  var t = va(e) ? Ta : Ca;
  return t.test(_a(e));
}
function Ea(e, t) {
  return e?.[t];
}
function ws(e, t) {
  var n = Ea(e, t);
  return Oa(n) ? n : void 0;
}
function Ra(e, t) {
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
var $a = "__lodash_hash_undefined__", Da = Object.prototype, Wa = Da.hasOwnProperty;
function Aa(e) {
  var t = this.__data__;
  if (Xe) {
    var n = t[e];
    return n === $a ? void 0 : n;
  }
  return Wa.call(t, e) ? t[e] : void 0;
}
var Fa = Object.prototype, Ba = Fa.hasOwnProperty;
function ja(e) {
  var t = this.__data__;
  return Xe ? t[e] !== void 0 : Ba.call(t, e);
}
var Ha = "__lodash_hash_undefined__";
function Ga(e, t) {
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
ke.prototype.get = Aa;
ke.prototype.has = ja;
ke.prototype.set = Ga;
function Ua() {
  this.__data__ = [], this.size = 0;
}
function kt(e, t) {
  for (var n = e.length; n--; )
    if (Ra(e[n][0], t))
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
function De(e) {
  var t = -1, n = e == null ? 0 : e.length;
  for (this.clear(); ++t < n; ) {
    var s = e[t];
    this.set(s[0], s[1]);
  }
}
De.prototype.clear = Ua;
De.prototype.delete = Ka;
De.prototype.get = qa;
De.prototype.has = Za;
De.prototype.set = Xa;
var Ja = ws(Qt, "Map");
function Qa() {
  this.size = 0, this.__data__ = {
    hash: new ke(),
    map: new (Ja || De)(),
    string: new ke()
  };
}
function ei(e) {
  var t = typeof e;
  return t == "string" || t == "number" || t == "symbol" || t == "boolean" ? e !== "__proto__" : e === null;
}
function St(e, t) {
  var n = e.__data__;
  return ei(t) ? n[typeof t == "string" ? "string" : "hash"] : n.map;
}
function ti(e) {
  var t = St(this, e).delete(e);
  return this.size -= t ? 1 : 0, t;
}
function ni(e) {
  return St(this, e).get(e);
}
function si(e) {
  return St(this, e).has(e);
}
function oi(e, t) {
  var n = St(this, e), s = n.size;
  return n.set(e, t), this.size += n.size == s ? 0 : 1, this;
}
function xe(e) {
  var t = -1, n = e == null ? 0 : e.length;
  for (this.clear(); ++t < n; ) {
    var s = e[t];
    this.set(s[0], s[1]);
  }
}
xe.prototype.clear = Qa;
xe.prototype.delete = ti;
xe.prototype.get = ni;
xe.prototype.has = si;
xe.prototype.set = oi;
var ai = "Expected a function";
function nn(e, t) {
  if (typeof e != "function" || t != null && typeof t != "function")
    throw new TypeError(ai);
  var n = function() {
    var s = arguments, i = t ? t.apply(this, s) : s[0], u = n.cache;
    if (u.has(i))
      return u.get(i);
    var l = e.apply(this, s);
    return n.cache = u.set(i, l) || u, l;
  };
  return n.cache = new (nn.Cache || xe)(), n;
}
nn.Cache = xe;
var ii = 500;
function ri(e) {
  var t = nn(e, function(s) {
    return n.size === ii && n.clear(), s;
  }), n = t.cache;
  return t;
}
var li = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g, ci = /\\(\\)?/g, ui = ri(function(e) {
  var t = [];
  return e.charCodeAt(0) === 46 && t.push(""), e.replace(li, function(n, s, i, u) {
    t.push(i ? u.replace(ci, "$1") : s || n);
  }), t;
});
function di(e) {
  return e == null ? "" : vs(e);
}
function hi(e, t) {
  return tn(e) ? e : Pa(e, t) ? [e] : ui(di(e));
}
function pi(e) {
  if (typeof e == "string" || en(e))
    return e;
  var t = e + "";
  return t == "0" && 1 / e == -1 / 0 ? "-0" : t;
}
function fi(e, t) {
  t = hi(t, e);
  for (var n = 0, s = t.length; e != null && n < s; )
    e = e[pi(t[n++])];
  return n && n == s ? e : void 0;
}
function gi(e, t, n) {
  var s = e == null ? void 0 : fi(e, t);
  return s === void 0 ? n : s;
}
function vi(e) {
  for (var t = -1, n = e == null ? 0 : e.length, s = {}; ++t < n; ) {
    var i = e[t];
    s[i[0]] = i[1];
  }
  return s;
}
const ms = (e) => e === void 0, Hn = (e) => typeof e == "boolean", Se = (e) => typeof e == "number", Kt = (e) => typeof Element > "u" ? !1 : e instanceof Element, yi = (e) => Ce(e) ? !Number.isNaN(Number(e)) : !1;
var Gn;
const Me = typeof window < "u", wi = (e) => typeof e == "string", mi = () => {
};
Me && ((Gn = window?.navigator) != null && Gn.userAgent) && /iP(ad|hone|od)/.test(window.navigator.userAgent);
function sn(e) {
  return typeof e == "function" ? e() : r(e);
}
function _i(e) {
  return e;
}
function on(e) {
  return ko() ? (So(e), !0) : !1;
}
function bi(e, t = !0) {
  Ie() ? bt(e) : t ? e() : ge(e);
}
function _s(e, t, n = {}) {
  const {
    immediate: s = !0
  } = n, i = x(!1);
  let u = null;
  function l() {
    u && (clearTimeout(u), u = null);
  }
  function d() {
    i.value = !1, l();
  }
  function g(...y) {
    l(), i.value = !0, u = setTimeout(() => {
      i.value = !1, u = null, e(...y);
    }, sn(t));
  }
  return s && (i.value = !0, Me && g()), on(d), {
    isPending: Co(i),
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
  let t, n, s, i;
  if (wi(e[0]) || Array.isArray(e[0]) ? ([n, s, i] = e, t = Cs) : [t, n, s, i] = e, !t)
    return mi;
  Array.isArray(n) || (n = [n]), Array.isArray(s) || (s = [s]);
  const u = [], l = () => {
    u.forEach((v) => v()), u.length = 0;
  }, d = (v, _, R, I) => (v.addEventListener(_, R, I), () => v.removeEventListener(_, R, I)), g = we(() => [bs(t), sn(i)], ([v, _]) => {
    l(), v && u.push(...n.flatMap((R) => s.map((I) => d(v, R, I, _))));
  }, { immediate: !0, flush: "post" }), y = () => {
    g(), l();
  };
  return on(y), y;
}
function Ci(e, t = !1) {
  const n = x(), s = () => n.value = !!e();
  return s(), bi(s, t), n;
}
const Un = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {}, Vn = "__vueuse_ssr_handlers__";
Un[Vn] = Un[Vn] || {};
var Yn = Object.getOwnPropertySymbols, ki = Object.prototype.hasOwnProperty, Si = Object.prototype.propertyIsEnumerable, xi = (e, t) => {
  var n = {};
  for (var s in e)
    ki.call(e, s) && t.indexOf(s) < 0 && (n[s] = e[s]);
  if (e != null && Yn)
    for (var s of Yn(e))
      t.indexOf(s) < 0 && Si.call(e, s) && (n[s] = e[s]);
  return n;
};
function Mi(e, t, n = {}) {
  const s = n, { window: i = Cs } = s, u = xi(s, ["window"]);
  let l;
  const d = Ci(() => i && "ResizeObserver" in i), g = () => {
    l && (l.disconnect(), l = void 0);
  }, y = we(() => bs(e), (_) => {
    g(), d.value && i && _ && (l = new ResizeObserver(t), l.observe(_, u));
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
var Ti = Object.defineProperty, qn = Object.getOwnPropertySymbols, Oi = Object.prototype.hasOwnProperty, Ei = Object.prototype.propertyIsEnumerable, Zn = (e, t, n) => t in e ? Ti(e, t, { enumerable: !0, configurable: !0, writable: !0, value: n }) : e[t] = n, Ri = (e, t) => {
  for (var n in t || (t = {}))
    Oi.call(t, n) && Zn(e, n, t[n]);
  if (qn)
    for (var n of qn(t))
      Ei.call(t, n) && Zn(e, n, t[n]);
  return e;
};
const Ii = {
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
Ri({
  linear: _i
}, Ii);
const Xn = {
  current: 0
}, Jn = x(0), Ss = 2e3, Qn = Symbol("elZIndexContextKey"), xs = Symbol("zIndexContextKey"), Ni = (e) => {
  const t = Ie() ? ye(Qn, Xn) : Xn, n = e || (Ie() ? ye(xs, void 0) : void 0), s = m(() => {
    const l = r(n);
    return Se(l) ? l : Ss;
  }), i = m(() => s.value + Jn.value), u = () => (t.current++, Jn.value = t.current, i.value);
  return !Me && ye(Qn), {
    initialZIndex: s,
    currentZIndex: i,
    nextZIndex: u
  };
};
var Pi = {
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
const zi = (e) => (t, n) => Li(t, n, r(e)), Li = (e, t, n) => gi(n, e, e).replace(/\{(\w+)\}/g, (s, i) => {
  var u;
  return `${(u = t?.[i]) != null ? u : `{${i}}`}`;
}), $i = (e) => {
  const t = m(() => r(e).name), n = xo(e) ? e : x(e);
  return {
    lang: t,
    locale: n,
    t: zi(e)
  };
}, Ms = Symbol("localeContextKey"), Di = (e) => {
  const t = e || ye(Ms, x());
  return $i(m(() => t.value || Pi));
}, Ts = "__epPropKey", G = (e) => e, Wi = (e) => ps(e) && !!e[Ts], Os = (e, t) => {
  if (!ps(e) || Wi(e))
    return e;
  const { values: n, required: s, default: i, type: u, validator: l } = e, g = {
    type: u,
    required: !!s,
    validator: n || l ? (y) => {
      let v = !1, _ = [];
      if (n && (_ = Array.from(n), Wn(e, "default") && _.push(i), v || (v = _.includes(y))), l && (v || (v = l(y))), !v && _.length > 0) {
        const R = [...new Set(_)].map((I) => JSON.stringify(I)).join(", ");
        Mo(`Invalid prop: validation failed${t ? ` for prop "${t}"` : ""}. Expected one of [${R}], got value ${JSON.stringify(y)}.`);
      }
      return v;
    } : void 0,
    [Ts]: !0
  };
  return Wn(e, "default") && (g.default = i), g;
}, We = (e) => vi(Object.entries(e).map(([t, n]) => [
  t,
  Os(n, t)
])), Ai = ["", "default", "small", "large"], Fi = Os({
  type: String,
  values: Ai,
  required: !1
}), Bi = Symbol("size"), ji = Symbol("emptyValuesContextKey"), Hi = We({
  emptyValues: Array,
  valueOnClear: {
    type: [String, Number, Boolean, Function],
    default: void 0,
    validator: (e) => Ze(e) ? !e() : !e
  }
}), es = (e) => Object.keys(e), yt = x();
function Es(e, t = void 0) {
  return Ie() ? ye(ds, yt) : yt;
}
function Rs(e, t) {
  const n = Es(), s = Jt(e, m(() => {
    var d;
    return ((d = n.value) == null ? void 0 : d.namespace) || ut;
  })), i = Di(m(() => {
    var d;
    return (d = n.value) == null ? void 0 : d.locale;
  })), u = Ni(m(() => {
    var d;
    return ((d = n.value) == null ? void 0 : d.zIndex) || Ss;
  })), l = m(() => {
    var d;
    return r(t) || ((d = n.value) == null ? void 0 : d.size) || "";
  });
  return Is(m(() => r(n) || {})), {
    ns: s,
    locale: i,
    zIndex: u,
    size: l
  };
}
const Is = (e, t, n = !1) => {
  var s;
  const i = !!Ie(), u = i ? Es() : void 0, l = (s = void 0) != null ? s : i ? To : void 0;
  if (!l)
    return;
  const d = m(() => {
    const g = r(e);
    return u?.value ? Gi(u.value, g) : g;
  });
  return l(ds, d), l(Ms, m(() => d.value.locale)), l(hs, m(() => d.value.namespace)), l(xs, m(() => d.value.zIndex)), l(Bi, {
    size: m(() => d.value.size || "")
  }), l(ji, m(() => ({
    emptyValues: d.value.emptyValues,
    valueOnClear: d.value.valueOnClear
  }))), (n || !yt.value) && (yt.value = d.value), d;
}, Gi = (e, t) => {
  const n = [.../* @__PURE__ */ new Set([...es(e), ...es(t)])], s = {};
  for (const i of n)
    s[i] = t[i] !== void 0 ? t[i] : e[i];
  return s;
};
var xt = (e, t) => {
  const n = e.__vccOpts || e;
  for (const [s, i] of t)
    n[s] = i;
  return n;
};
function qt(e, t = "px") {
  if (!e)
    return "";
  if (Se(e) || yi(e))
    return `${e}${t}`;
  if (Ce(e))
    return e;
}
const Ns = (e, t) => (e.install = (n) => {
  for (const s of [e, ...Object.values({})])
    n.component(s.name, s);
}, e), Ps = (e, t) => (e.install = (n) => {
  e._context = n._context, n.config.globalProperties[t] = e;
}, e), Ui = We({
  size: {
    type: G([Number, String])
  },
  color: {
    type: String
  }
}), Vi = A({
  name: "ElIcon",
  inheritAttrs: !1
}), Yi = /* @__PURE__ */ A({
  ...Vi,
  props: Ui,
  setup(e) {
    const t = e, n = Jt("icon"), s = m(() => {
      const { size: i, color: u } = t;
      return !i && !u ? {} : {
        fontSize: ms(i) ? void 0 : qt(i),
        "--color": u
      };
    });
    return (i, u) => (C(), M("i", Oo({
      class: r(n).b(),
      style: r(s)
    }, i.$attrs), [
      Ne(i.$slots, "default")
    ], 16));
  }
});
var Ki = /* @__PURE__ */ xt(Yi, [["__file", "icon.vue"]]);
const wt = Ns(Ki);
/*! Element Plus Icons Vue v2.3.1 */
var qi = /* @__PURE__ */ A({
  name: "CircleCloseFilled",
  __name: "circle-close-filled",
  setup(e) {
    return (t, n) => (C(), M("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 1024 1024"
    }, [
      c("path", {
        fill: "currentColor",
        d: "M512 64a448 448 0 1 1 0 896 448 448 0 0 1 0-896m0 393.664L407.936 353.6a38.4 38.4 0 1 0-54.336 54.336L457.664 512 353.6 616.064a38.4 38.4 0 1 0 54.336 54.336L512 566.336 616.064 670.4a38.4 38.4 0 1 0 54.336-54.336L566.336 512 670.4 407.936a38.4 38.4 0 1 0-54.336-54.336z"
      })
    ]));
  }
}), Zi = qi, Xi = /* @__PURE__ */ A({
  name: "Close",
  __name: "close",
  setup(e) {
    return (t, n) => (C(), M("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 1024 1024"
    }, [
      c("path", {
        fill: "currentColor",
        d: "M764.288 214.592 512 466.88 259.712 214.592a31.936 31.936 0 0 0-45.12 45.12L466.752 512 214.528 764.224a31.936 31.936 0 1 0 45.12 45.184L512 557.184l252.288 252.288a31.936 31.936 0 0 0 45.12-45.12L557.12 512.064l252.288-252.352a31.936 31.936 0 1 0-45.12-45.184z"
      })
    ]));
  }
}), zs = Xi, Ji = /* @__PURE__ */ A({
  name: "InfoFilled",
  __name: "info-filled",
  setup(e) {
    return (t, n) => (C(), M("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 1024 1024"
    }, [
      c("path", {
        fill: "currentColor",
        d: "M512 64a448 448 0 1 1 0 896.064A448 448 0 0 1 512 64m67.2 275.072c33.28 0 60.288-23.104 60.288-57.344s-27.072-57.344-60.288-57.344c-33.28 0-60.16 23.104-60.16 57.344s26.88 57.344 60.16 57.344M590.912 699.2c0-6.848 2.368-24.64 1.024-34.752l-52.608 60.544c-10.88 11.456-24.512 19.392-30.912 17.28a12.992 12.992 0 0 1-8.256-14.72l87.68-276.992c7.168-35.136-12.544-67.2-54.336-71.296-44.096 0-108.992 44.736-148.48 101.504 0 6.784-1.28 23.68.064 33.792l52.544-60.608c10.88-11.328 23.552-19.328 29.952-17.152a12.8 12.8 0 0 1 7.808 16.128L388.48 728.576c-10.048 32.256 8.96 63.872 55.04 71.04 67.84 0 107.904-43.648 147.456-100.416z"
      })
    ]));
  }
}), Qi = Ji, er = /* @__PURE__ */ A({
  name: "SuccessFilled",
  __name: "success-filled",
  setup(e) {
    return (t, n) => (C(), M("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 1024 1024"
    }, [
      c("path", {
        fill: "currentColor",
        d: "M512 64a448 448 0 1 1 0 896 448 448 0 0 1 0-896m-55.808 536.384-99.52-99.584a38.4 38.4 0 1 0-54.336 54.336l126.72 126.72a38.272 38.272 0 0 0 54.336 0l262.4-262.464a38.4 38.4 0 1 0-54.272-54.336z"
      })
    ]));
  }
}), tr = er, nr = /* @__PURE__ */ A({
  name: "WarningFilled",
  __name: "warning-filled",
  setup(e) {
    return (t, n) => (C(), M("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 1024 1024"
    }, [
      c("path", {
        fill: "currentColor",
        d: "M512 64a448 448 0 1 1 0 896 448 448 0 0 1 0-896m0 192a58.432 58.432 0 0 0-58.24 63.744l23.36 256.384a35.072 35.072 0 0 0 69.76 0l23.296-256.384A58.432 58.432 0 0 0 512 256m0 512a51.2 51.2 0 1 0 0-102.4 51.2 51.2 0 0 0 0 102.4"
      })
    ]));
  }
}), sr = nr;
const Ls = G([
  String,
  Object,
  Function
]), or = {
  Close: zs
}, ar = {
  Close: zs
}, mt = {
  success: tr,
  warning: sr,
  error: Zi,
  info: Qi
}, ir = (e) => e, dt = {
  esc: "Escape",
  delete: "Delete",
  backspace: "Backspace"
}, rr = We({
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
}), lr = A({
  name: "ElBadge"
}), cr = /* @__PURE__ */ A({
  ...lr,
  props: rr,
  setup(e, { expose: t }) {
    const n = e, s = Jt("badge"), i = m(() => n.isDot ? "" : Se(n.value) && Se(n.max) ? n.max < n.value ? `${n.max}+` : `${n.value}` : `${n.value}`), u = m(() => {
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
      content: i
    }), (l, d) => (C(), M("div", {
      class: $(r(s).b())
    }, [
      Ne(l.$slots, "default"),
      N(Xt, {
        name: `${r(s).namespace.value}-zoom-in-center`,
        persisted: ""
      }, {
        default: me(() => [
          _e(c("sup", {
            class: $([
              r(s).e("content"),
              r(s).em("content", l.type),
              r(s).is("fixed", !!l.$slots.default),
              r(s).is("dot", l.isDot),
              r(s).is("hide-zero", !l.showZero && n.value === 0),
              l.badgeClass
            ]),
            style: Pe(r(u))
          }, [
            Ne(l.$slots, "content", { value: r(i) }, () => [
              Eo(z(r(i)), 1)
            ])
          ], 6), [
            [pt, !l.hidden && (r(i) || l.isDot || l.$slots.content)]
          ])
        ]),
        _: 3
      }, 8, ["name"])
    ], 2));
  }
});
var ur = /* @__PURE__ */ xt(cr, [["__file", "badge.vue"]]);
const dr = Ns(ur), hr = We({
  a11y: {
    type: Boolean,
    default: !0
  },
  locale: {
    type: G(Object)
  },
  size: Fi,
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
  ...Hi
}), q = {};
A({
  name: "ElConfigProvider",
  props: hr,
  setup(e, { slots: t }) {
    we(() => e.message, (s) => {
      Object.assign(q, s ?? {});
    }, { immediate: !0, deep: !0 });
    const n = Is(e);
    return () => Ne(t, "default", { config: n?.value });
  }
});
const $s = ["success", "info", "warning", "error"], W = ir({
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
}), pr = We({
  customClass: {
    type: String,
    default: W.customClass
  },
  center: {
    type: Boolean,
    default: W.center
  },
  dangerouslyUseHTMLString: {
    type: Boolean,
    default: W.dangerouslyUseHTMLString
  },
  duration: {
    type: Number,
    default: W.duration
  },
  icon: {
    type: Ls,
    default: W.icon
  },
  id: {
    type: String,
    default: W.id
  },
  message: {
    type: G([
      String,
      Object,
      Function
    ]),
    default: W.message
  },
  onClose: {
    type: G(Function),
    default: W.onClose
  },
  showClose: {
    type: Boolean,
    default: W.showClose
  },
  type: {
    type: String,
    values: $s,
    default: W.type
  },
  plain: {
    type: Boolean,
    default: W.plain
  },
  offset: {
    type: Number,
    default: W.offset
  },
  zIndex: {
    type: Number,
    default: W.zIndex
  },
  grouping: {
    type: Boolean,
    default: W.grouping
  },
  repeatNum: {
    type: Number,
    default: W.repeatNum
  }
}), fr = {
  destroy: () => !0
}, Z = Ro([]), gr = (e) => {
  const t = Z.findIndex((i) => i.id === e), n = Z[t];
  let s;
  return t > 0 && (s = Z[t - 1]), { current: n, prev: s };
}, vr = (e) => {
  const { prev: t } = gr(e);
  return t ? t.vm.exposed.bottom.value : 0;
}, yr = (e, t) => Z.findIndex((s) => s.id === e) > 0 ? 16 : t, wr = A({
  name: "ElMessage"
}), mr = /* @__PURE__ */ A({
  ...wr,
  props: pr,
  emits: fr,
  setup(e, { expose: t }) {
    const n = e, { Close: s } = ar, { ns: i, zIndex: u } = Rs("message"), { currentZIndex: l, nextZIndex: d } = u, g = x(), y = x(!1), v = x(0);
    let _;
    const R = m(() => n.type ? n.type === "error" ? "danger" : n.type : "info"), I = m(() => {
      const O = n.type;
      return { [i.bm("icon", O)]: O && mt[O] };
    }), B = m(() => n.icon || mt[n.type] || ""), w = m(() => vr(n.id)), k = m(() => yr(n.id, n.offset) + w.value), T = m(() => v.value + k.value), re = m(() => ({
      top: `${k.value}px`,
      zIndex: l.value
    }));
    function S() {
      n.duration !== 0 && ({ stop: _ } = _s(() => {
        D();
      }, n.duration));
    }
    function V() {
      _?.();
    }
    function D() {
      y.value = !1;
    }
    function se({ code: O }) {
      O === dt.esc && D();
    }
    return bt(() => {
      S(), d(), y.value = !0;
    }), we(() => n.repeatNum, () => {
      V(), S();
    }), ks(document, "keydown", se), Mi(g, () => {
      v.value = g.value.getBoundingClientRect().height;
    }), t({
      visible: y,
      bottom: T,
      close: D
    }), (O, rn) => (C(), ie(Xt, {
      name: r(i).b("fade"),
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
            r(i).b(),
            { [r(i).m(O.type)]: O.type },
            r(i).is("center", O.center),
            r(i).is("closable", O.showClose),
            r(i).is("plain", O.plain),
            O.customClass
          ]),
          style: Pe(r(re)),
          role: "alert",
          onMouseenter: V,
          onMouseleave: S
        }, [
          O.repeatNum > 1 ? (C(), ie(r(dr), {
            key: 0,
            value: O.repeatNum,
            type: r(R),
            class: $(r(i).e("badge"))
          }, null, 8, ["value", "type", "class"])) : ne("v-if", !0),
          r(B) ? (C(), ie(r(wt), {
            key: 1,
            class: $([r(i).e("icon"), r(I)])
          }, {
            default: me(() => [
              (C(), ie(as(r(B))))
            ]),
            _: 1
          }, 8, ["class"])) : ne("v-if", !0),
          Ne(O.$slots, "default", {}, () => [
            O.dangerouslyUseHTMLString ? (C(), M(ue, { key: 1 }, [
              ne(" Caution here, message could've been compromised, never use user's input as message "),
              c("p", {
                class: $(r(i).e("content")),
                innerHTML: O.message
              }, null, 10, ["innerHTML"])
            ], 2112)) : (C(), M("p", {
              key: 0,
              class: $(r(i).e("content"))
            }, z(O.message), 3))
          ]),
          O.showClose ? (C(), ie(r(wt), {
            key: 2,
            class: $(r(i).e("closeBtn")),
            onClick: Re(D, ["stop"])
          }, {
            default: me(() => [
              N(r(s))
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
var _r = /* @__PURE__ */ xt(mr, [["__file", "message.vue"]]);
let br = 1;
const Ds = (e) => {
  const t = !e || Ce(e) || qe(e) || Ze(e) ? { message: e } : e, n = {
    ...W,
    ...t
  };
  if (!n.appendTo)
    n.appendTo = document.body;
  else if (Ce(n.appendTo)) {
    let s = document.querySelector(n.appendTo);
    Kt(s) || (s = document.body), n.appendTo = s;
  }
  return Hn(q.grouping) && !n.grouping && (n.grouping = q.grouping), Se(q.duration) && n.duration === 3e3 && (n.duration = q.duration), Se(q.offset) && n.offset === 16 && (n.offset = q.offset), Hn(q.showClose) && !n.showClose && (n.showClose = q.showClose), n;
}, Cr = (e) => {
  const t = Z.indexOf(e);
  if (t === -1)
    return;
  Z.splice(t, 1);
  const { handler: n } = e;
  n.close();
}, kr = ({ appendTo: e, ...t }, n) => {
  const s = `message_${br++}`, i = t.onClose, u = document.createElement("div"), l = {
    ...t,
    id: s,
    onClose: () => {
      i?.(), Cr(v);
    },
    onDestroy: () => {
      ft(null, u);
    }
  }, d = N(_r, l, Ze(l.message) || qe(l.message) ? {
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
  const n = Ds(e);
  if (n.grouping && Z.length) {
    const i = Z.find(({ vnode: u }) => {
      var l;
      return ((l = u.props) == null ? void 0 : l.message) === n.message;
    });
    if (i)
      return i.props.repeatNum += 1, i.props.type = n.type, i.handler;
  }
  if (Se(q.max) && Z.length >= q.max)
    return { close: () => {
    } };
  const s = kr(n, t);
  return Z.push(s), s.handler;
};
$s.forEach((e) => {
  Le[e] = (t = {}, n) => {
    const s = Ds(t);
    return Le({ ...s, type: e }, n);
  };
});
function Sr(e) {
  for (const t of Z)
    (!e || e === t.props.type) && t.handler.close();
}
Le.closeAll = Sr;
Le._context = null;
const xr = Ps(Le, "$message"), Ws = [
  "success",
  "info",
  "warning",
  "error"
], Mr = We({
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
    values: [...Ws, ""],
    default: ""
  },
  zIndex: Number
}), Tr = {
  destroy: () => !0
}, Or = A({
  name: "ElNotification"
}), Er = /* @__PURE__ */ A({
  ...Or,
  props: Mr,
  emits: Tr,
  setup(e, { expose: t }) {
    const n = e, { ns: s, zIndex: i } = Rs("notification"), { nextZIndex: u, currentZIndex: l } = i, { Close: d } = or, g = x(!1);
    let y;
    const v = m(() => {
      const S = n.type;
      return S && mt[n.type] ? s.m(S) : "";
    }), _ = m(() => n.type && mt[n.type] || n.icon), R = m(() => n.position.endsWith("right") ? "right" : "left"), I = m(() => n.position.startsWith("top") ? "top" : "bottom"), B = m(() => {
      var S;
      return {
        [I.value]: `${n.offset}px`,
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
    function re({ code: S }) {
      S === dt.delete || S === dt.backspace ? k() : S === dt.esc ? g.value && T() : w();
    }
    return bt(() => {
      w(), u(), g.value = !0;
    }), ks(document, "keydown", re), t({
      visible: g,
      close: T
    }), (S, V) => (C(), ie(Xt, {
      name: r(s).b("fade"),
      onBeforeLeave: S.onClose,
      onAfterLeave: (D) => S.$emit("destroy"),
      persisted: ""
    }, {
      default: me(() => [
        _e(c("div", {
          id: S.id,
          class: $([r(s).b(), S.customClass, r(R)]),
          style: Pe(r(B)),
          role: "alert",
          onMouseenter: k,
          onMouseleave: w,
          onClick: S.onClick
        }, [
          r(_) ? (C(), ie(r(wt), {
            key: 0,
            class: $([r(s).e("icon"), r(v)])
          }, {
            default: me(() => [
              (C(), ie(as(r(_))))
            ]),
            _: 1
          }, 8, ["class"])) : ne("v-if", !0),
          c("div", {
            class: $(r(s).e("group"))
          }, [
            c("h2", {
              class: $(r(s).e("title")),
              textContent: z(S.title)
            }, null, 10, ["textContent"]),
            _e(c("div", {
              class: $(r(s).e("content")),
              style: Pe(S.title ? void 0 : { margin: 0 })
            }, [
              Ne(S.$slots, "default", {}, () => [
                S.dangerouslyUseHTMLString ? (C(), M(ue, { key: 1 }, [
                  ne(" Caution here, message could've been compromised, never use user's input as message "),
                  c("p", { innerHTML: S.message }, null, 8, ["innerHTML"])
                ], 2112)) : (C(), M("p", { key: 0 }, z(S.message), 1))
              ])
            ], 6), [
              [pt, S.message]
            ]),
            S.showClose ? (C(), ie(r(wt), {
              key: 0,
              class: $(r(s).e("closeBtn")),
              onClick: Re(T, ["stop"])
            }, {
              default: me(() => [
                N(r(d))
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
var Rr = /* @__PURE__ */ xt(Er, [["__file", "notification.vue"]]);
const _t = {
  "top-left": [],
  "top-right": [],
  "bottom-left": [],
  "bottom-right": []
}, Zt = 16;
let Ir = 1;
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
  const i = `notification_${Ir++}`, u = e.onClose, l = {
    ...e,
    offset: s,
    id: i,
    onClose: () => {
      Nr(i, n, u);
    }
  };
  let d = document.body;
  Kt(e.appendTo) ? d = e.appendTo : Ce(e.appendTo) && (d = document.querySelector(e.appendTo)), Kt(d) || (d = document.body);
  const g = document.createElement("div"), y = N(Rr, l, Ze(l.message) ? l.message : qe(l.message) ? () => l.message : null);
  return y.appContext = ms(t) ? $e._context : t, y.props.onDestroy = () => {
    ft(null, g);
  }, ft(y, g), _t[n].push({ vm: y }), d.appendChild(g.firstElementChild), {
    close: () => {
      y.component.exposed.visible.value = !1;
    }
  };
};
Ws.forEach((e) => {
  $e[e] = (t = {}, n) => ((Ce(t) || qe(t)) && (t = {
    message: t
  }), $e({ ...t, type: e }, n));
});
function Nr(e, t, n) {
  const s = _t[t], i = s.findIndex(({ vm: y }) => {
    var v;
    return ((v = y.component) == null ? void 0 : v.props.id) === e;
  });
  if (i === -1)
    return;
  const { vm: u } = s[i];
  if (!u)
    return;
  n?.(u);
  const l = u.el.offsetHeight, d = t.split("-")[0];
  s.splice(i, 1);
  const g = s.length;
  if (!(g < 1))
    for (let y = i; y < g; y++) {
      const { el: v, component: _ } = s[y].vm, R = Number.parseInt(v.style[d], 10) - l - Zt;
      _.props.offset = R;
    }
}
function Pr() {
  for (const e of Object.values(_t))
    e.forEach(({ vm: t }) => {
      t.component.exposed.visible.value = !1;
    });
}
$e.closeAll = Pr;
$e._context = null;
const zr = Ps($e, "$notify"), Gt = {
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
      duration: i = 3e3,
      showClose: u = !1
    } = e;
    s === "center" ? xr({
      message: t,
      type: n,
      duration: i,
      showClose: u,
      grouping: !0,
      customClass: `app-toast app-toast--${n}`
    }) : zr({
      message: t,
      type: n,
      position: s,
      duration: i,
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
}, Lr = "snippets-code:developer-mode", As = "snippets-code:frontend-diagnostics", $r = 240, Ue = "[REDACTED]", ht = (e) => e.replace(
  /("(?:[^"]*(?:token|password|secret|authorization)[^"]*)"\s*:\s*)("(?:\\.|[^"])*"|[^,\r\n}\]]+)/gi,
  `$1"${Ue}"`
).replace(/\bBearer\s+[A-Za-z0-9._~+/=-]+/gi, `Bearer ${Ue}`).replace(
  /\b(?:gh[pousr]_[A-Za-z0-9_]{12,}|github_pat_[A-Za-z0-9_]{12,})\b/g,
  Ue
).replace(/(https?:\/\/)[^/\s@]+@/gi, `$1${Ue}@`).replace(
  /([?&][^=&\s]*(?:token|password|secret|authorization)[^=&\s]*=)[^&\s]+/gi,
  `$1${Ue}`
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
}, Dr = () => {
  try {
    return globalThis.__TAURI_INTERNALS__?.metadata?.currentWindow?.label ?? "webview";
  } catch {
    return "webview";
  }
}, Wr = () => {
  if (typeof localStorage > "u") return [];
  try {
    const e = JSON.parse(localStorage.getItem(As) || "[]");
    return Array.isArray(e) ? e : [];
  } catch {
    return [];
  }
}, an = () => {
  if (typeof localStorage > "u") return !1;
  try {
    return localStorage.getItem(Lr) === "true";
  } catch {
    return !1;
  }
}, Ar = (e, t, n) => {
  if (!an() || typeof localStorage > "u") return;
  const s = Wr();
  s.push({
    timestamp: (/* @__PURE__ */ new Date()).toISOString(),
    level: e,
    windowLabel: Dr(),
    message: ht(t),
    data: Fs(n)
  });
  try {
    localStorage.setItem(
      As,
      JSON.stringify(s.slice(-$r))
    );
  } catch {
  }
}, Fr = () => an(), Br = (e) => e === "error" || an(), it = (e, t, n) => {
  Ar(e, t, n), Br(e) && h("frontend_log", {
    level: e,
    message: t,
    data: n === void 0 ? null : Fs(n)
  }).catch(() => {
  });
}, Ve = {
  info: (e, t, ...n) => {
    it("info", e, t);
  },
  error: (e, t) => {
    it("error", e, t);
  },
  warn: (e, t) => {
    it("warn", e, t);
  },
  debug: (e, t) => {
    Fr() && it("debug", e, t);
  }
}, jr = "[screen-recorder]", U = async (e, t) => {
  const n = performance.now();
  try {
    return await h(e, t);
  } catch (s) {
    throw console.error(`${jr} invoke:error ${e}`, {
      elapsedMs: Math.round(performance.now() - n),
      error: s
    }), s;
  }
}, Hr = () => U("screen_recorder_get_ffmpeg_status"), fe = (e) => U("screen_recorder_set_capture_excluded", { excluded: e }), rt = (e) => U("screen_recorder_set_passthrough_region", { region: e }), lt = (e) => U("screen_recorder_set_overlay_window_region", { region: e }), Gr = () => U("screen_recorder_pick_target_window"), Ur = () => U("screen_recorder_close_window"), Vr = (e, t) => U("screen_recorder_start_recording", {
  region: e,
  fps: t.fps,
  quality: t.quality,
  audio: t.audio && t.format === "mp4",
  showCursor: t.showCursor
}), Yr = () => U("screen_recorder_pause_recording"), Kr = (e, t) => U("screen_recorder_resume_recording", {
  region: e,
  fps: t.fps,
  quality: t.quality,
  audio: t.audio && t.format === "mp4",
  showCursor: t.showCursor
}), qr = () => U("screen_recorder_stop_recording"), Zr = () => U("screen_recorder_cancel_recording"), Xr = () => U("screen_recorder_cancel_export"), Jr = (e, t) => U("screen_recorder_export_recording", {
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
function Qr() {
  const e = x("selecting"), t = x(ts()), n = x(null), s = x(null), i = x(""), u = x(null), l = x(0), d = x(0), g = x(null), y = () => {
    d.value = e.value === "recording" && u.value !== null ? l.value + Date.now() - u.value : l.value;
  }, v = () => {
    g.value !== null && (window.clearInterval(g.value), g.value = null);
  }, _ = () => {
    v(), y(), g.value = window.setInterval(() => {
      y();
    }, 250);
  }, R = async () => (n.value = await Hr(), n.value), I = async (D) => {
    i.value = "", s.value = null;
    const se = n.value ?? await R();
    if (!se.available)
      throw new Error(se.message || "FFmpeg unavailable");
    await Vr(D, t.value), e.value = "recording", l.value = 0, d.value = 0, u.value = Date.now(), _();
  }, B = async () => {
    e.value === "recording" && (y(), l.value = d.value, u.value = null, v(), await Yr(), e.value = "paused");
  }, w = async (D) => {
    e.value === "paused" && (await Kr(D, t.value), e.value = "recording", u.value = Date.now(), _());
  }, k = async () => {
    e.value !== "recording" && e.value !== "paused" || (y(), l.value = d.value, u.value = null, v(), await qr(), e.value = "exporting");
  }, T = async () => {
    e.value = "exporting";
    try {
      return s.value = await Jr(
        t.value,
        Math.round(d.value)
      ), e.value = "completed", s.value;
    } catch (D) {
      throw e.value = "ready", s.value = null, D;
    }
  }, re = async () => {
    await Xr(), e.value = "ready", s.value = null;
  }, S = async () => {
    v(), await Zr(), e.value = "selecting", u.value = null, l.value = 0, d.value = 0, s.value = null;
  }, V = () => {
    e.value = "selecting", u.value = null, l.value = 0, d.value = 0, s.value = null, i.value = "", t.value = ts();
  };
  return is(() => {
    v();
  }), {
    status: e,
    settings: t,
    ffmpegStatus: n,
    result: s,
    errorMessage: i,
    elapsedMs: d,
    refreshFfmpegStatus: R,
    begin: I,
    pause: B,
    resume: w,
    stop: k,
    exportFile: T,
    cancelExport: re,
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
}, il = {
  key: 3,
  class: "save-status"
}, rl = ["title"], ll = { class: "button-label" }, cl = ["title"], ul = { class: "button-label" }, dl = ["disabled", "title"], hl = { class: "record-label" }, pl = { class: "capture-viewport" }, fl = { class: "capture-frame" }, gl = { class: "control-group control-group--tools" }, vl = { class: "tool-pill" }, yl = ["title", "aria-pressed", "disabled"], wl = ["title", "aria-label", "aria-pressed", "disabled"], ml = { class: "select-field" }, _l = ["disabled"], bl = ["disabled"], Cl = ["disabled"], kl = { value: "high" }, Sl = { value: "standard" }, xl = { value: "small" }, Ml = { class: "dimension-group optional-size" }, Tl = { class: "dimension" }, Ol = ["value"], El = { class: "dimension" }, Rl = ["value"], Il = { class: "control-group control-group--actions" }, Nl = { class: "time" }, Pl = ["title"], zl = { class: "button-label" }, Ll = ["title"], $l = { class: "button-label" }, Dl = ["title"], Wl = { class: "export-progress__meta" }, Al = { class: "export-progress__track" }, Fl = ["title"], Bl = ["disabled", "title"], jl = { class: "record-label" }, Hl = {
  key: 0,
  class: "warning"
}, ce = "[screen-recorder]", ee = 80, Ut = 400, Ye = 240, Vt = 260, ns = 140, Gl = 3, ss = 2, os = 0, Ul = 15, Vl = 10, Yl = 2, Kl = 8, ql = /* @__PURE__ */ A({
  __name: "index",
  setup(e) {
    const t = {
      start: "R",
      pause: "P",
      stop: "S"
    }, { t: n } = No(), s = cs(), i = x(null), u = x(null), l = x(null), d = x({ width: 0, height: 0 }), g = x(!1), y = x(!1), v = x(!1), _ = x(0), R = x(!1), I = x(null);
    let B = null, w = null, k = null, T = null, re = null, S = null, V = null, D = null, se = null, O = null;
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
      pause: Gs,
      resume: Us,
      stop: Vs,
      exportFile: Ys,
      cancelExport: ln,
      cancel: Ks,
      reset: qs
    } = Qr(), cn = x(!1), oe = m(
      () => b.value === "recording" || b.value === "paused" || b.value === "exporting"
    ), Ae = m(
      () => E.value.audio && E.value.format === "mp4"
    ), Je = m(
      () => Ae.value && b.value === "recording"
    ), Zs = m(() => {
      const o = Je.value && !R.value ? _.value : 0, a = (p, f) => Math.max(0.18, Math.min(1, p + o * f)).toFixed(3);
      return {
        "--bar-1": a(0.28, 0.64),
        "--bar-2": a(0.42, 0.78),
        "--bar-3": a(0.34, 0.94),
        "--bar-4": a(0.22, 0.72)
      };
    }), Xs = m(() => {
      if (E.value.format === "gif")
        return "GIF 不支持音频";
      if (R.value && E.value.audio)
        return "音频已开启；实时音量动画不可用不影响导出系统声音";
      if (F.value?.audioDevice)
        return `已录制音频：${F.value.audioDevice}`;
      if (F.value && !F.value.hasAudio)
        return "未检测到可用音频设备，导出视频无声音";
      if (le.value?.available && !le.value.systemAudioAvailable) {
        const o = le.value.audioDevices?.join("、") || "无";
        return E.value.audio ? `未发现系统声音/立体声混音设备；不会自动录制麦克风。当前可用音频设备：${o}` : "录制音频已关闭";
      }
      return E.value.audio ? "录制音频已开启。系统声音将通过 WASAPI Loopback 捕获" : "录制音频已关闭";
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
      const o = I.value?.progress ?? 0.03;
      return Math.max(1, Math.min(100, Math.round(o * 100)));
    }), Tt = m(() => {
      const o = I.value;
      return o ? o.totalFrames && o.stage === "frames" ? `${o.message}` : o.message || "正在导出..." : "正在导出...";
    }), Qs = m(() => {
      const o = I.value;
      return o?.totalFrames ? `${Tt.value} (${o.currentFrame}/${o.totalFrames})` : Tt.value;
    }), gn = m(() => {
      const o = Math.floor(Bs.value / 1e3), a = Math.floor(o / 60).toString().padStart(2, "0"), p = (o % 60).toString().padStart(2, "0");
      return `${a}:${p}`;
    }), Ot = (o) => o instanceof Error ? o.message : String(o), Te = async (o) => {
      try {
        await o();
      } catch (a) {
        console.error(`${ce} action failed`, a), Ve.error(`${ce} action failed`, a), cn.value || Gt.msg(Ot(a), "error");
      }
    }, Qe = (o) => Math.max(2, Math.floor(Math.round(o) / 2) * 2), vn = (o) => Math.max(1, Math.round(o)), yn = (o, a, p, f, P) => ({
      ...o,
      x: o.x + (a - o.screenX) / o.scale,
      y: o.y + (p - o.screenY) / o.scale,
      width: f / o.scale,
      height: P / o.scale,
      screenX: a,
      screenY: p,
      physicalWidth: f,
      physicalHeight: P
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
      const P = f.position.x, L = f.position.y, X = P + f.size.width, ae = L + f.size.height, j = o.screenX + o.physicalWidth, ot = o.screenY + o.physicalHeight, de = Math.max(o.screenX, P), J = Math.max(o.screenY, L), he = Math.min(j, X), Q = Math.min(ot, ae), je = Qe(he - de), Pn = Qe(Q - J);
      if (je < ee || Pn < ee)
        throw new Error("录制区域超出屏幕边界，请重新选择录制区域");
      return yn(
        o,
        de,
        J,
        je,
        Pn
      );
    }, Oe = (o, a) => Math.abs(o - a) <= Yl, to = (o, a) => o === a ? !0 : !o || !a ? !1 : Oe(o.x, a.x) && Oe(o.y, a.y) && Oe(o.width, a.width) && Oe(o.height, a.height), et = async (o) => {
      to(O, o) || (O = o ? { ...o } : null, await rt(o).catch(() => {
      }));
    }, Et = async () => {
      const o = i.value;
      if (!o)
        throw new Error("录制视口尚未准备好");
      const a = o.getBoundingClientRect(), p = await s.scaleFactor(), f = await s.innerPosition(), P = vn(a.width * p), L = vn(a.height * p);
      if (P < ee || L < ee)
        throw new Error("录制区域太小，请放大录制窗口");
      return {
        x: a.left,
        y: a.top,
        width: P / p,
        height: L / p,
        screenX: Math.round(f.x + a.left * p),
        screenY: Math.round(f.y + a.top * p),
        physicalWidth: P,
        physicalHeight: L,
        scale: p
      };
    }, wn = async () => {
      const o = await Et();
      return eo(o);
    }, no = async () => {
      try {
        const o = await Et();
        if ((!Oe(
          d.value.width,
          o.physicalWidth
        ) || !Oe(
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
    }, Y = async () => D || (D = no().finally(() => {
      if (D = null, se) {
        const o = se;
        se = null, et(o);
      }
    }), D), so = () => {
      S === null && (S = requestAnimationFrame(() => {
        S = null, Y();
      }));
    }, tt = () => {
      g.value || so();
    }, mn = () => {
      se = null, O = null;
    }, nt = async () => {
      mn(), await rt(null).catch(() => {
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
    }, Rt = async () => {
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
    }, io = (o) => o ? {
      x: o.position.x,
      y: o.position.y,
      width: o.size.width,
      height: o.size.height
    } : null, Cn = (o) => {
      const a = l.value?.getBoundingClientRect().height ?? 42;
      return Math.max(
        8,
        Math.round((a + Kl) * o)
      );
    }, ro = (o, a, p) => a ? o.y + o.height >= a.y + a.height - Cn(p) : !1, It = async () => {
      try {
        const o = await Rt(), a = o.x + Math.round(o.width / 2), p = o.y + Math.round(o.height / 2), f = await He(a, p) || await He(o.x, o.y), P = f?.scaleFactor || await s.scaleFactor();
        v.value = ro(
          o,
          io(f),
          P
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
      const o = await Rt(), a = await s.scaleFactor(), p = u.value?.getBoundingClientRect().height ?? 0, f = l.value?.getBoundingClientRect().height ?? 0;
      await lt({
        width: o.width,
        height: o.height,
        topHeight: Math.round(p * a),
        bottomHeight: Math.round(f * a)
      }).catch(() => {
      });
    }, Sn = (o, a) => {
      const p = Math.min(o.width, a.width), f = Math.min(o.height, a.height), P = a.x + a.width - p, L = a.y + a.height - f;
      return {
        x: Math.min(Math.max(o.x, a.x), P),
        y: Math.min(Math.max(o.y, a.y), L),
        width: p,
        height: f
      };
    }, lo = (o, a, p) => {
      if (!a) return !1;
      const f = Math.max(8, Math.round(8 * p)), P = a.x + a.width, L = a.y + a.height, X = o.screenX + o.physicalWidth, ae = o.screenY + o.physicalHeight;
      return o.screenX <= a.x + f && o.screenY <= a.y + f && X >= P - f && ae >= L - f;
    }, co = (o, a, p) => {
      if (!a) return !1;
      const f = Math.max(8, Math.round(8 * p));
      return o.screenX <= a.x + f || o.screenY <= a.y + f || o.screenX + o.physicalWidth >= a.x + a.width - f || o.screenY + o.physicalHeight >= a.y + a.height - f;
    }, uo = (o, a, p) => a ? o.screenY + o.physicalHeight >= a.y + a.height - Cn(p) : !1, ho = (o, a, p) => {
      if (!p) return o;
      const f = Math.round(Ul * a), P = Math.round(Vl * a);
      return {
        ...o,
        physicalWidth: Math.max(ee, o.physicalWidth - f),
        physicalHeight: Math.max(
          ee,
          o.physicalHeight - P
        )
      };
    }, xn = async (o) => {
      await s.setSize(
        new be(Math.round(o.width), Math.round(o.height))
      ), await s.setPosition(
        new te(Math.round(o.x), Math.round(o.y))
      ), await Fe();
    }, Mn = async () => {
      await s.setAlwaysOnTop(!0).catch(() => {
      });
    }, Tn = async () => {
      const [o, a] = await Promise.all([
        Et(),
        Rt()
      ]);
      return { actualRegion: o, currentFrame: a };
    }, po = async (o, a, p) => {
      const { actualRegion: f, currentFrame: P } = await Tn(), L = f.screenX - P.x, X = f.screenY - P.y, ae = Math.max(
        0,
        P.width - f.physicalWidth
      ), j = Math.max(
        0,
        P.height - f.physicalHeight
      );
      return {
        x: o.screenX - L,
        y: o.screenY - X,
        width: Math.max(a, o.physicalWidth + ae),
        height: Math.max(p, o.physicalHeight + j)
      };
    }, On = async () => {
      T?.(), T = null, _.value = 0;
    }, st = async () => {
      if (!(!Ae.value || T))
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
          ), R.value = !1;
        } catch (o) {
          console.error(`${ce} audio meter failed`, o), Ve.warn(`${ce} audio meter failed`, o), R.value = !0;
        }
    }, Pt = () => {
      s.setFocus().catch(() => {
      });
    }, fo = async (o) => {
      o.button !== 0 || oe.value || (_n(), await s.setMinSize(new ve(Ut, Ye)).catch(() => {
      }), await nt(), await s.startDragging().catch((a) => {
        Gt.msg(Ot(a), "error");
      }), bn(), Be());
    }, go = async (o) => {
      oe.value || (_n(), await s.setMinSize(new ve(Ut, Ye)).catch(() => {
      }), await nt(), await s.startResizeDragging(o).catch((a) => {
        Gt.msg(Ot(a), "error");
      }), bn(), Be());
    }, zt = () => Te(async () => {
      I.value = null, await st(), await fe(!0).catch(() => {
      }), await Y(), await Hs(await wn());
    }), Lt = () => Te(async () => {
      await Gs();
    }), $t = () => Te(async () => {
      await Us(await wn());
    }), Dt = () => Te(async () => {
      I.value = {
        stage: "encode",
        message: E.value.format === "gif" ? "准备生成 GIF 帧" : "准备导出 MP4",
        progress: 0.01,
        currentFrame: 0
      }, await Vs(), _.value = 0, await fe(!1).catch(() => {
      }), await Ys(), await Y();
    }), En = () => Te(async () => {
      await ln(), I.value = null, await fe(!1).catch(() => {
      }), await Y();
    }), Wt = () => {
      const o = { ...E.value };
      nt(), qs(), E.value = o, b.value = "ready", F.value = null, I.value = null, fe(!1).catch(() => {
      }), ge(Y), st();
    }, At = (o) => {
      if (b.value !== "exporting") {
        if (o === "start") {
          b.value === "ready" ? zt() : b.value === "completed" && Wt();
          return;
        }
        if (o === "pause") {
          b.value === "recording" ? Lt() : b.value === "paused" && $t();
          return;
        }
        o === "stop" && (b.value === "recording" || b.value === "paused") && Dt();
      }
    }, vo = async (o) => {
      const a = await He(o.screenX, o.screenY), p = a?.scaleFactor || await s.scaleFactor(), f = a ? {
        x: a.position.x,
        y: a.position.y,
        width: a.size.width,
        height: a.size.height
      } : null, P = lo(
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
      ), j = ho(o, p, !P), ot = L && f ? {
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
        if (await xn(
          f && L ? Sn(ot, f) : ot
        ), await Mn(), await ge(), await Nt(), L)
          return;
        const de = async () => {
          const { actualRegion: J, currentFrame: he } = await Tn(), Q = {
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
          return await xn(
            f && L ? Sn(je, f) : je
          ), !1;
        };
        for (let J = 0; J < Gl && !await de(); J += 1)
          ;
      } catch (de) {
        console.error(`${ce} snap correction failed`, de), Ve.warn(`${ce} snap correction failed`, de);
      } finally {
        await Mn(), await ao(), await It(), await Y(), await Nt(), await oo(), await s.setFocus().catch(() => {
        });
      }
    }, yo = () => Te(async () => {
      await nt();
      const o = await Gr();
      await vo(o);
    }), wo = () => {
      oe.value || E.value.format === "gif" || (E.value.audio = !E.value.audio);
    }, mo = () => {
      oe.value || (E.value.showCursor = !E.value.showCursor);
    }, _o = async () => {
      await s.minimize();
    }, Rn = async () => {
      cn.value = !0;
      try {
        b.value === "exporting" ? await ln().catch(() => {
        }) : await Ks(), await rt(null).catch(() => {
        }), await fe(!1).catch(() => {
        });
      } catch {
      }
      await Ur();
    }, In = async () => {
      F.value && (await Y(), await h("open_file_with_default_app", { filePath: F.value.path }));
    }, bo = async () => {
      F.value && (await Y(), await h("show_file_in_folder", { filePath: F.value.path }));
    }, Nn = (o) => {
      if (o.repeat || o.ctrlKey || o.metaKey || o.altKey) return;
      const a = o.key.toLowerCase();
      if (a === "r") {
        o.preventDefault(), o.stopPropagation(), At("start");
        return;
      }
      if (a === "p") {
        o.preventDefault(), o.stopPropagation(), At("pause");
        return;
      }
      if (a === "s") {
        o.preventDefault(), o.stopPropagation(), At("stop");
        return;
      }
      o.key === "Escape" && (o.preventDefault(), Rn());
    };
    return bt(async () => {
      Ve.info(`${ce} frontend mounted`), b.value = "ready", await s.setMinSize(new ve(Ut, Ye)).catch(() => {
      }), await fe(!1).catch(() => {
      }), await js().catch(() => {
      }), await ge(), await Y(), await It(), await st(), await ge(), re = await gt(
        "screen_recorder_export_progress",
        (o) => {
          I.value = o.payload;
        }
      ).catch(() => null), await s.emit("screen_recorder_ready"), Ve.info(`${ce} frontend ready emitted`), i.value && (B = new ResizeObserver(() => {
        tt();
      }), B.observe(i.value)), w = await s.onMoved(() => {
        Be(), tt();
      }).catch(() => null), k = await s.onResized(() => {
        Be(), tt();
      }).catch(() => null), window.addEventListener("resize", kn), window.addEventListener("keydown", Nn);
    }), we(Ae, (o) => {
      o ? st() : On();
    }), we(b, (o) => {
      o !== "recording" && (_.value = 0), o !== "exporting" && (I.value = null);
    }), we(fn, async () => {
      await ge(), await Y(), await Nt();
    }), is(() => {
      B?.disconnect(), w?.(), k?.(), re?.(), window.removeEventListener(
        "resize",
        kn
      ), window.removeEventListener("keydown", Nn), mn(), V !== null && (cancelAnimationFrame(V), V = null), rt(null).catch(() => {
      }), lt(null).catch(() => {
      }), fe(!1).catch(() => {
      }), On();
    }), (o, a) => (C(), M("div", el, [
      c(
        "div",
        {
          class: $(["recorder-shell", {
            recording: r(b) === "recording",
            paused: r(b) === "paused",
            "snap-aligned": g.value,
            "snap-fullscreen": y.value
          }])
        },
        [
          (C(), M(
            ue,
            null,
            Io(rn, (p) => c("span", {
              key: p.className,
              class: $(["resize-zone", p.className]),
              onMousedown: Re((f) => go(p.direction), ["prevent"])
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
                z(o.$t("screenRecorder.title") || "区域录制"),
                1
                /* TEXT */
              ),
              fn.value ? (C(), M(
                "div",
                {
                  key: 0,
                  class: "top-control-strip",
                  onMouseenter: Pt,
                  onMousedown: a[1] || (a[1] = Re(() => {
                  }, ["stop"]))
                },
                [
                  r(b) === "recording" || r(b) === "paused" ? (C(), M(
                    "span",
                    sl,
                    z(gn.value),
                    1
                    /* TEXT */
                  )) : r(b) === "exporting" ? (C(), M(
                    "span",
                    ol,
                    z(Mt.value) + "% ",
                    1
                    /* TEXT */
                  )) : r(b) === "completed" ? (C(), M(
                    "span",
                    al,
                    z(r(F)?.hasAudio ? "已保存·有声" : "已保存·无声"),
                    1
                    /* TEXT */
                  )) : (C(), M(
                    "span",
                    il,
                    z(d.value.width) + "×" + z(d.value.height),
                    1
                    /* TEXT */
                  )),
                  r(b) === "recording" || r(b) === "paused" ? (C(), M(
                    ue,
                    { key: 4 },
                    [
                      c("button", {
                        class: "control-button",
                        title: r(b) === "paused" ? hn.value : dn.value,
                        onClick: a[0] || (a[0] = (p) => r(b) === "paused" ? $t() : Lt())
                      }, [
                        c(
                          "span",
                          ll,
                          z(r(b) === "paused" ? o.$t("screenRecorder.resume") : o.$t("screenRecorder.pause")),
                          1
                          /* TEXT */
                        )
                      ], 8, rl),
                      c("button", {
                        class: "control-button danger",
                        title: pn.value,
                        onClick: Dt
                      }, [
                        c(
                          "span",
                          ul,
                          z(o.$t("screenRecorder.stop")),
                          1
                          /* TEXT */
                        )
                      ], 8, cl)
                    ],
                    64
                    /* STABLE_FRAGMENT */
                  )) : r(b) === "exporting" ? (C(), M("button", {
                    key: 5,
                    class: "control-button danger",
                    title: "取消导出",
                    onClick: En
                  }, a[7] || (a[7] = [
                    c(
                      "span",
                      { class: "button-label" },
                      "取消",
                      -1
                      /* HOISTED */
                    )
                  ]))) : r(b) === "completed" && r(F) ? (C(), M(
                    ue,
                    { key: 6 },
                    [
                      c("button", {
                        class: "control-button",
                        title: "打开文件",
                        onClick: In
                      }, a[8] || (a[8] = [
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
                        title: "重新录制",
                        onClick: Wt
                      }, a[9] || (a[9] = [
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
                  )) : (C(), M("button", {
                    key: 7,
                    class: "record-button",
                    disabled: r(le)?.available === !1 || d.value.width < ee || d.value.height < ee,
                    title: un.value,
                    onClick: zt
                  }, [
                    a[10] || (a[10] = c(
                      "span",
                      { class: "record-dot" },
                      null,
                      -1
                      /* HOISTED */
                    )),
                    c(
                      "span",
                      hl,
                      z(o.$t("screenRecorder.start")),
                      1
                      /* TEXT */
                    )
                  ], 8, dl))
                ],
                32
                /* NEED_HYDRATION */
              )) : ne("v-if", !0),
              c(
                "div",
                {
                  class: "window-actions",
                  onMousedown: a[2] || (a[2] = Re(() => {
                  }, ["stop"]))
                },
                [
                  c("button", {
                    class: "title-button title-button--window",
                    title: "最小化",
                    onClick: _o
                  }, [
                    N(r(Yo), {
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
                    onClick: Rn
                  }, [
                    N(r(Vo), {
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
          c("main", pl, [
            a[15] || (a[15] = c(
              "span",
              { class: "viewport-mask top" },
              null,
              -1
              /* HOISTED */
            )),
            a[16] || (a[16] = c(
              "span",
              { class: "viewport-mask right" },
              null,
              -1
              /* HOISTED */
            )),
            a[17] || (a[17] = c(
              "span",
              { class: "viewport-mask bottom" },
              null,
              -1
              /* HOISTED */
            )),
            a[18] || (a[18] = c(
              "span",
              { class: "viewport-mask left" },
              null,
              -1
              /* HOISTED */
            )),
            c("div", fl, [
              c(
                "div",
                {
                  ref_key: "captureHoleRef",
                  ref: i,
                  class: "capture-hole"
                },
                null,
                512
                /* NEED_PATCH */
              ),
              a[11] || (a[11] = c(
                "span",
                { class: "viewport-border top" },
                null,
                -1
                /* HOISTED */
              )),
              a[12] || (a[12] = c(
                "span",
                { class: "viewport-border right" },
                null,
                -1
                /* HOISTED */
              )),
              a[13] || (a[13] = c(
                "span",
                { class: "viewport-border bottom" },
                null,
                -1
                /* HOISTED */
              )),
              a[14] || (a[14] = c(
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
              c("div", gl, [
                c("div", vl, [
                  r(b) === "ready" || r(b) === "completed" ? (C(), M(
                    "button",
                    {
                      key: 0,
                      class: "icon-control snap-control",
                      title: "拖到目标窗口并松开以对齐",
                      "aria-label": "对齐目标窗口",
                      onMousedown: Re(yo, ["prevent"])
                    },
                    [
                      N(r(qo), {
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
                    class: $(["audio-meter", {
                      active: Je.value && _.value > 0.03,
                      "audio-on": Ae.value,
                      metering: Je.value && !R.value,
                      muted: !Ae.value || R.value
                    }]),
                    title: Xs.value,
                    "aria-label": "系统声音录制状态",
                    "aria-pressed": r(E).audio && r(E).format === "mp4",
                    disabled: oe.value || r(E).format === "gif",
                    onClick: wo
                  }, [
                    c(
                      "span",
                      {
                        class: "audio-bars",
                        style: Pe(Zs.value)
                      },
                      a[19] || (a[19] = [
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
                  ], 10, yl),
                  c("button", {
                    class: $(["icon-control cursor-control", { active: r(E).showCursor }]),
                    title: Js.value,
                    "aria-label": o.$t("screenRecorder.showCursor"),
                    "aria-pressed": r(E).showCursor,
                    disabled: oe.value,
                    onClick: mo
                  }, [
                    N(r(Ko), {
                      theme: "outline",
                      size: "17",
                      strokeWidth: 3,
                      strokeLinecap: "butt"
                    })
                  ], 10, wl)
                ]),
                c("label", ml, [
                  _e(c("select", {
                    "onUpdate:modelValue": a[3] || (a[3] = (p) => r(E).fps = p),
                    disabled: oe.value
                  }, a[20] || (a[20] = [
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
                  ]), 8, _l), [
                    [Ft, r(E).fps]
                  ]),
                  a[21] || (a[21] = c(
                    "span",
                    { class: "unit" },
                    "fps",
                    -1
                    /* HOISTED */
                  ))
                ]),
                _e(c("select", {
                  "onUpdate:modelValue": a[4] || (a[4] = (p) => r(E).format = p),
                  class: "format-select optional-format",
                  disabled: oe.value
                }, a[22] || (a[22] = [
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
                ]), 8, bl), [
                  [Ft, r(E).format]
                ]),
                _e(c("select", {
                  "onUpdate:modelValue": a[5] || (a[5] = (p) => r(E).quality = p),
                  class: "quality-select optional-quality",
                  disabled: oe.value
                }, [
                  c(
                    "option",
                    kl,
                    z(o.$t("screenRecorder.qualityHigh")),
                    1
                    /* TEXT */
                  ),
                  c(
                    "option",
                    Sl,
                    z(o.$t("screenRecorder.qualityStandard")),
                    1
                    /* TEXT */
                  ),
                  c(
                    "option",
                    xl,
                    z(o.$t("screenRecorder.qualitySmall")),
                    1
                    /* TEXT */
                  )
                ], 8, Cl), [
                  [Ft, r(E).quality]
                ]),
                c("div", Ml, [
                  c("label", Tl, [
                    c("input", {
                      value: d.value.width,
                      readonly: ""
                    }, null, 8, Ol)
                  ]),
                  a[23] || (a[23] = c(
                    "span",
                    { class: "multiply" },
                    "×",
                    -1
                    /* HOISTED */
                  )),
                  c("label", El, [
                    c("input", {
                      value: d.value.height,
                      readonly: ""
                    }, null, 8, Rl)
                  ]),
                  a[24] || (a[24] = c(
                    "span",
                    { class: "unit" },
                    "px",
                    -1
                    /* HOISTED */
                  ))
                ])
              ]),
              c("div", Il, [
                r(b) === "recording" || r(b) === "paused" ? (C(), M(
                  ue,
                  { key: 0 },
                  [
                    c(
                      "span",
                      Nl,
                      z(gn.value),
                      1
                      /* TEXT */
                    ),
                    c("button", {
                      class: "control-button",
                      title: r(b) === "paused" ? hn.value : dn.value,
                      onClick: a[6] || (a[6] = (p) => r(b) === "paused" ? $t() : Lt())
                    }, [
                      c(
                        "span",
                        zl,
                        z(r(b) === "paused" ? o.$t("screenRecorder.resume") : o.$t("screenRecorder.pause")),
                        1
                        /* TEXT */
                      )
                    ], 8, Pl),
                    c("button", {
                      class: "control-button danger",
                      title: pn.value,
                      onClick: Dt
                    }, [
                      c(
                        "span",
                        $l,
                        z(o.$t("screenRecorder.stop")),
                        1
                        /* TEXT */
                      )
                    ], 8, Ll)
                  ],
                  64
                  /* STABLE_FRAGMENT */
                )) : r(b) === "exporting" ? (C(), M(
                  ue,
                  { key: 1 },
                  [
                    c("div", {
                      class: "export-progress",
                      title: Qs.value
                    }, [
                      c("div", Wl, [
                        c(
                          "span",
                          null,
                          z(Tt.value),
                          1
                          /* TEXT */
                        ),
                        c(
                          "strong",
                          null,
                          z(Mt.value) + "%",
                          1
                          /* TEXT */
                        )
                      ]),
                      c("div", Al, [
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
                    ], 8, Dl),
                    c("button", {
                      class: "control-button danger",
                      title: "取消导出",
                      onClick: En
                    }, a[25] || (a[25] = [
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
                )) : r(b) === "completed" && r(F) ? (C(), M(
                  ue,
                  { key: 2 },
                  [
                    c("span", {
                      class: "save-status optional-save-status",
                      title: r(F).path
                    }, z(r(F).hasAudio ? "已保存·有声" : "已保存·无声"), 9, Fl),
                    c("button", {
                      class: "control-button",
                      title: "打开文件",
                      onClick: In
                    }, a[26] || (a[26] = [
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
                      onClick: bo
                    }, a[27] || (a[27] = [
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
                      onClick: Wt
                    }, a[28] || (a[28] = [
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
                )) : (C(), M("button", {
                  key: 3,
                  class: "record-button",
                  disabled: r(le)?.available === !1 || d.value.width < ee || d.value.height < ee,
                  title: un.value,
                  onClick: zt
                }, [
                  a[29] || (a[29] = c(
                    "span",
                    { class: "record-dot" },
                    null,
                    -1
                    /* HOISTED */
                  )),
                  c(
                    "span",
                    jl,
                    z(o.$t("screenRecorder.start")),
                    1
                    /* TEXT */
                  )
                ], 8, Bl))
              ])
            ],
            544
            /* NEED_HYDRATION, NEED_PATCH */
          )
        ],
        2
        /* CLASS */
      ),
      r(le) && !r(le).available ? (C(), M(
        "p",
        Hl,
        z(r(le).message || o.$t("screenRecorder.ffmpegMissing")),
        1
        /* TEXT */
      )) : ne("v-if", !0)
    ]));
  }
}), Zl = (e, t) => {
  const n = e.__vccOpts || e;
  for (const [s, i] of t)
    n[s] = i;
  return n;
}, Xl = /* @__PURE__ */ Zl(ql, [["__scopeId", "data-v-e7d94b5f"]]), Jl = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Xl
}, Symbol.toStringTag, { value: "Module" }));
export {
  tc as activate
};
