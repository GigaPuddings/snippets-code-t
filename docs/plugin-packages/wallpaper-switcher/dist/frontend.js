import { getCurrentInstance as ye, inject as se, ref as C, computed as y, unref as s, readonly as ro, getCurrentScope as uo, onScopeDispose as co, onMounted as Ne, nextTick as mn, watch as lt, isRef as yn, warn as ho, provide as fo, defineComponent as A, createElementBlock as W, openBlock as b, mergeProps as po, renderSlot as be, createElementVNode as a, normalizeClass as z, createVNode as u, Transition as zt, withCtx as ie, withDirectives as J, normalizeStyle as Qe, createTextVNode as $, toDisplayString as I, vShow as Ye, shallowReactive as vo, createBlock as Y, createCommentVNode as V, resolveDynamicComponent as bn, Fragment as Wt, withModifiers as me, isVNode as je, render as Xe, onUnmounted as _n, withKeys as vt, vModelText as Ue, vModelCheckbox as Rt, renderList as go } from "vue";
const pr = (e) => {
  e.registerRoute({
    target: "window",
    path: "/wallpaper-switcher",
    name: "WallpaperSwitcher",
    component: () => Promise.resolve().then(() => hr)
  }), e.registerWindowShortcut({
    label: "wallpaper_switcher"
  });
};
function wo(e, t, n, o) {
  if (typeof t == "function" ? e !== t || !0 : !t.has(e)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
  return n === "m" ? o : n === "a" ? o.call(e) : o ? o.value : t.get(e);
}
function mo(e, t, n, o, l) {
  if (typeof t == "function" ? e !== t || !0 : !t.has(e)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
  return t.set(e, n), n;
}
var Ke;
const G = "__TAURI_TO_IPC_KEY__";
function yo(e, t = !1) {
  return window.__TAURI_INTERNALS__.transformCallback(e, t);
}
async function r(e, t = {}, n) {
  return window.__TAURI_INTERNALS__.invoke(e, t, n);
}
function bo(e, t = "asset") {
  return window.__TAURI_INTERNALS__.convertFileSrc(e, t);
}
class _o {
  get rid() {
    return wo(this, Ke, "f");
  }
  constructor(t) {
    Ke.set(this, void 0), mo(this, Ke, t);
  }
  /**
   * Destroys and cleans up this resource from memory.
   * **You should not call any method on this object anymore and should drop any reference to it.**
   */
  async close() {
    return r("plugin:resources|close", {
      rid: this.rid
    });
  }
}
Ke = /* @__PURE__ */ new WeakMap();
class kn {
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
    return new Oe(this.width * t, this.height * t);
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
class Oe {
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
    return new kn(this.width / t, this.height / t);
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
class we {
  constructor(t) {
    this.size = t;
  }
  toLogical(t) {
    return this.size instanceof kn ? this.size : this.size.toLogical(t);
  }
  toPhysical(t) {
    return this.size instanceof Oe ? this.size : this.size.toPhysical(t);
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
class Cn {
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
    return new Cn(this.x / t, this.y / t);
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
class Ge {
  constructor(t) {
    this.position = t;
  }
  toLogical(t) {
    return this.position instanceof Cn ? this.position : this.position.toLogical(t);
  }
  toPhysical(t) {
    return this.position instanceof te ? this.position : this.position.toPhysical(t);
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
var H;
(function(e) {
  e.WINDOW_RESIZED = "tauri://resize", e.WINDOW_MOVED = "tauri://move", e.WINDOW_CLOSE_REQUESTED = "tauri://close-requested", e.WINDOW_DESTROYED = "tauri://destroyed", e.WINDOW_FOCUS = "tauri://focus", e.WINDOW_BLUR = "tauri://blur", e.WINDOW_SCALE_FACTOR_CHANGED = "tauri://scale-change", e.WINDOW_THEME_CHANGED = "tauri://theme-changed", e.WINDOW_CREATED = "tauri://window-created", e.WEBVIEW_CREATED = "tauri://webview-created", e.DRAG_ENTER = "tauri://drag-enter", e.DRAG_OVER = "tauri://drag-over", e.DRAG_DROP = "tauri://drag-drop", e.DRAG_LEAVE = "tauri://drag-leave";
})(H || (H = {}));
async function Ln(e, t) {
  await r("plugin:event|unlisten", {
    event: e,
    eventId: t
  });
}
async function et(e, t, n) {
  var o;
  const l = typeof n?.target == "string" ? { kind: "AnyLabel", label: n.target } : (o = n?.target) !== null && o !== void 0 ? o : { kind: "Any" };
  return r("plugin:event|listen", {
    event: e,
    target: l,
    handler: yo(t)
  }).then((d) => async () => Ln(e, d));
}
async function ko(e, t, n) {
  return et(e, (o) => {
    Ln(e, o.id), t(o);
  }, n);
}
async function Co(e, t) {
  await r("plugin:event|emit", {
    event: e,
    payload: t
  });
}
async function Lo(e, t, n) {
  await r("plugin:event|emit_to", {
    target: typeof e == "string" ? { kind: "AnyLabel", label: e } : e,
    event: t,
    payload: n
  });
}
class Pe extends _o {
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
    return r("plugin:image|new", {
      rgba: tt(t),
      width: n,
      height: o
    }).then((l) => new Pe(l));
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
    return r("plugin:image|from_bytes", {
      bytes: tt(t)
    }).then((n) => new Pe(n));
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
    return r("plugin:image|from_path", { path: t }).then((n) => new Pe(n));
  }
  /** Returns the RGBA data for this image, in row-major order from top to bottom.  */
  async rgba() {
    return r("plugin:image|rgba", {
      rid: this.rid
    }).then((t) => new Uint8Array(t));
  }
  /** Returns the size of this image.  */
  async size() {
    return r("plugin:image|size", { rid: this.rid });
  }
}
function tt(e) {
  return e == null ? null : typeof e == "string" ? e : e instanceof Pe ? e.rid : e;
}
var _t;
(function(e) {
  e[e.Critical = 1] = "Critical", e[e.Informational = 2] = "Informational";
})(_t || (_t = {}));
class So {
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
var Ht;
(function(e) {
  e.None = "none", e.Normal = "normal", e.Indeterminate = "indeterminate", e.Paused = "paused", e.Error = "error";
})(Ht || (Ht = {}));
function Sn() {
  return new xn(window.__TAURI_INTERNALS__.metadata.currentWindow.label, {
    // @ts-expect-error `skip` is not defined in the public API but it is handled by the constructor
    skip: !0
  });
}
async function gt() {
  return r("plugin:window|get_all_windows").then((e) => e.map((t) => new xn(t, {
    // @ts-expect-error `skip` is not defined in the public API but it is handled by the constructor
    skip: !0
  })));
}
const wt = ["tauri://created", "tauri://error"];
class xn {
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
    this.label = t, this.listeners = /* @__PURE__ */ Object.create(null), n?.skip || r("plugin:window|create", {
      options: {
        ...n,
        parent: typeof n.parent == "string" ? n.parent : (o = n.parent) === null || o === void 0 ? void 0 : o.label,
        label: t
      }
    }).then(async () => this.emit("tauri://created")).catch(async (l) => this.emit("tauri://error", l));
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
    return (n = (await gt()).find((o) => o.label === t)) !== null && n !== void 0 ? n : null;
  }
  /**
   * Get an instance of `Window` for the current window.
   */
  static getCurrent() {
    return Sn();
  }
  /**
   * Gets a list of instances of `Window` for all available windows.
   */
  static async getAll() {
    return gt();
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
    for (const t of await gt())
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
    } : et(t, n, {
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
    } : ko(t, n, {
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
      for (const o of this.listeners[t] || [])
        o({
          event: t,
          id: -1,
          payload: n
        });
      return;
    }
    return Co(t, n);
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
    if (wt.includes(n)) {
      for (const l of this.listeners[n] || [])
        l({
          event: n,
          id: -1,
          payload: o
        });
      return;
    }
    return Lo(t, n, o);
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
    return r("plugin:window|scale_factor", {
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
    return r("plugin:window|inner_position", {
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
    return r("plugin:window|outer_position", {
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
    return r("plugin:window|inner_size", {
      label: this.label
    }).then((t) => new Oe(t));
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
    return r("plugin:window|outer_size", {
      label: this.label
    }).then((t) => new Oe(t));
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
    return r("plugin:window|is_fullscreen", {
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
    return r("plugin:window|is_minimized", {
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
    return r("plugin:window|is_maximized", {
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
    return r("plugin:window|is_focused", {
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
    return r("plugin:window|is_decorated", {
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
    return r("plugin:window|is_resizable", {
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
    return r("plugin:window|is_maximizable", {
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
    return r("plugin:window|is_minimizable", {
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
    return r("plugin:window|is_closable", {
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
    return r("plugin:window|is_visible", {
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
    return r("plugin:window|title", {
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
    return r("plugin:window|theme", {
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
    return r("plugin:window|is_always_on_top", {
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
    return r("plugin:window|center", {
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
    return t && (t === _t.Critical ? n = { type: "Critical" } : n = { type: "Informational" }), r("plugin:window|request_user_attention", {
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
    return r("plugin:window|set_resizable", {
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
    return r("plugin:window|set_enabled", {
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
    return r("plugin:window|is_enabled", {
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
    return r("plugin:window|set_maximizable", {
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
    return r("plugin:window|set_minimizable", {
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
    return r("plugin:window|set_closable", {
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
    return r("plugin:window|set_title", {
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
    return r("plugin:window|maximize", {
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
    return r("plugin:window|unmaximize", {
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
    return r("plugin:window|toggle_maximize", {
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
    return r("plugin:window|minimize", {
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
    return r("plugin:window|unminimize", {
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
    return r("plugin:window|show", {
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
    return r("plugin:window|hide", {
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
    return r("plugin:window|close", {
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
    return r("plugin:window|destroy", {
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
    return r("plugin:window|set_decorations", {
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
    return r("plugin:window|set_shadow", {
      label: this.label,
      value: t
    });
  }
  /**
   * Set window effects.
   */
  async setEffects(t) {
    return r("plugin:window|set_effects", {
      label: this.label,
      value: t
    });
  }
  /**
   * Clear any applied effects if possible.
   */
  async clearEffects() {
    return r("plugin:window|set_effects", {
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
    return r("plugin:window|set_always_on_top", {
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
    return r("plugin:window|set_always_on_bottom", {
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
    return r("plugin:window|set_content_protected", {
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
    return r("plugin:window|set_size", {
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
    return r("plugin:window|set_min_size", {
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
    return r("plugin:window|set_max_size", {
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
    function n(o) {
      return o ? { Logical: o } : null;
    }
    return r("plugin:window|set_size_constraints", {
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
    return r("plugin:window|set_position", {
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
    return r("plugin:window|set_fullscreen", {
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
    return r("plugin:window|set_focus", {
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
    return r("plugin:window|set_icon", {
      label: this.label,
      value: tt(t)
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
    return r("plugin:window|set_skip_taskbar", {
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
    return r("plugin:window|set_cursor_grab", {
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
    return r("plugin:window|set_cursor_visible", {
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
    return r("plugin:window|set_cursor_icon", {
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
    return r("plugin:window|set_background_color", { color: t });
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
    return r("plugin:window|set_cursor_position", {
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
    return r("plugin:window|set_ignore_cursor_events", {
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
    return r("plugin:window|start_dragging", {
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
    return r("plugin:window|start_resize_dragging", {
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
    return r("plugin:window|set_badge_count", {
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
    return r("plugin:window|set_badge_label", {
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
    return r("plugin:window|set_overlay_icon", {
      label: this.label,
      value: t ? tt(t) : void 0
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
    return r("plugin:window|set_progress_bar", {
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
    return r("plugin:window|set_visible_on_all_workspaces", {
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
    return r("plugin:window|set_title_bar_style", {
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
    return r("plugin:window|set_theme", {
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
      n.payload = new Oe(n.payload), t(n);
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
      const o = new So(n);
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
    const n = await this.listen(H.DRAG_ENTER, (c) => {
      t({
        ...c,
        payload: {
          type: "enter",
          paths: c.payload.paths,
          position: new te(c.payload.position)
        }
      });
    }), o = await this.listen(H.DRAG_OVER, (c) => {
      t({
        ...c,
        payload: {
          type: "over",
          position: new te(c.payload.position)
        }
      });
    }), l = await this.listen(H.DRAG_DROP, (c) => {
      t({
        ...c,
        payload: {
          type: "drop",
          paths: c.payload.paths,
          position: new te(c.payload.position)
        }
      });
    }), d = await this.listen(H.DRAG_LEAVE, (c) => {
      t({ ...c, payload: { type: "leave" } });
    });
    return () => {
      n(), l(), o(), d();
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
    const n = await this.listen(H.WINDOW_FOCUS, (l) => {
      t({ ...l, payload: !0 });
    }), o = await this.listen(H.WINDOW_BLUR, (l) => {
      t({ ...l, payload: !1 });
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
var Vt;
(function(e) {
  e.Disabled = "disabled", e.Throttle = "throttle", e.Suspend = "suspend";
})(Vt || (Vt = {}));
var Bt;
(function(e) {
  e.AppearanceBased = "appearanceBased", e.Light = "light", e.Dark = "dark", e.MediumLight = "mediumLight", e.UltraDark = "ultraDark", e.Titlebar = "titlebar", e.Selection = "selection", e.Menu = "menu", e.Popover = "popover", e.Sidebar = "sidebar", e.HeaderView = "headerView", e.Sheet = "sheet", e.WindowBackground = "windowBackground", e.HudWindow = "hudWindow", e.FullScreenUI = "fullScreenUI", e.Tooltip = "tooltip", e.ContentBackground = "contentBackground", e.UnderWindowBackground = "underWindowBackground", e.UnderPageBackground = "underPageBackground", e.Mica = "mica", e.Blur = "blur", e.Acrylic = "acrylic", e.Tabbed = "tabbed", e.TabbedDark = "tabbedDark", e.TabbedLight = "tabbedLight";
})(Bt || (Bt = {}));
var Ut;
(function(e) {
  e.FollowsWindowActiveState = "followsWindowActiveState", e.Active = "active", e.Inactive = "inactive";
})(Ut || (Ut = {}));
async function Gt(e = {}) {
  return typeof e == "object" && Object.freeze(e), await r("plugin:dialog|open", { options: e });
}
const zn = Symbol(), qe = "el", xo = "is-", oe = (e, t, n, o, l) => {
  let d = `${e}-${t}`;
  return n && (d += `-${n}`), o && (d += `__${o}`), l && (d += `--${l}`), d;
}, Wn = Symbol("namespaceContextKey"), zo = (e) => {
  const t = e || (ye() ? se(Wn, C(qe)) : C(qe));
  return y(() => s(t) || qe);
}, Ot = (e, t) => {
  const n = zo(t);
  return {
    namespace: n,
    b: (p = "") => oe(n.value, e, p, "", ""),
    e: (p) => p ? oe(n.value, e, "", p, "") : "",
    m: (p) => p ? oe(n.value, e, "", "", p) : "",
    be: (p, _) => p && _ ? oe(n.value, e, p, _, "") : "",
    em: (p, _) => p && _ ? oe(n.value, e, "", p, _) : "",
    bm: (p, _) => p && _ ? oe(n.value, e, p, "", _) : "",
    bem: (p, _, S) => p && _ && S ? oe(n.value, e, p, _, S) : "",
    is: (p, ..._) => {
      const S = _.length >= 1 ? _[0] : !0;
      return p && S ? `${xo}${p}` : "";
    },
    cssVar: (p) => {
      const _ = {};
      for (const S in p)
        p[S] && (_[`--${n.value}-${S}`] = p[S]);
      return _;
    },
    cssVarName: (p) => `--${n.value}-${p}`,
    cssVarBlock: (p) => {
      const _ = {};
      for (const S in p)
        p[S] && (_[`--${n.value}-${e}-${S}`] = p[S]);
      return _;
    },
    cssVarBlockName: (p) => `--${n.value}-${e}-${p}`
  };
};
/**
* @vue/shared v3.5.13
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/
const Wo = Object.prototype.hasOwnProperty, Zt = (e, t) => Wo.call(e, t), Te = (e) => typeof e == "function", le = (e) => typeof e == "string", On = (e) => e !== null && typeof e == "object";
var Oo = typeof global == "object" && global && global.Object === Object && global, Po = typeof self == "object" && self && self.Object === Object && self, Pt = Oo || Po || Function("return this")(), _e = Pt.Symbol, Pn = Object.prototype, jo = Pn.hasOwnProperty, To = Pn.toString, We = _e ? _e.toStringTag : void 0;
function Io(e) {
  var t = jo.call(e, We), n = e[We];
  try {
    e[We] = void 0;
    var o = !0;
  } catch {
  }
  var l = To.call(e);
  return o && (t ? e[We] = n : delete e[We]), l;
}
var No = Object.prototype, Mo = No.toString;
function $o(e) {
  return Mo.call(e);
}
var Eo = "[object Null]", Fo = "[object Undefined]", Kt = _e ? _e.toStringTag : void 0;
function jn(e) {
  return e == null ? e === void 0 ? Fo : Eo : Kt && Kt in Object(e) ? Io(e) : $o(e);
}
function Ao(e) {
  return e != null && typeof e == "object";
}
var Do = "[object Symbol]";
function jt(e) {
  return typeof e == "symbol" || Ao(e) && jn(e) == Do;
}
function Ro(e, t) {
  for (var n = -1, o = e == null ? 0 : e.length, l = Array(o); ++n < o; )
    l[n] = t(e[n], n, e);
  return l;
}
var Tt = Array.isArray, qt = _e ? _e.prototype : void 0, Jt = qt ? qt.toString : void 0;
function Tn(e) {
  if (typeof e == "string")
    return e;
  if (Tt(e))
    return Ro(e, Tn) + "";
  if (jt(e))
    return Jt ? Jt.call(e) : "";
  var t = e + "";
  return t == "0" && 1 / e == -1 / 0 ? "-0" : t;
}
function In(e) {
  var t = typeof e;
  return e != null && (t == "object" || t == "function");
}
var Ho = "[object AsyncFunction]", Vo = "[object Function]", Bo = "[object GeneratorFunction]", Uo = "[object Proxy]";
function Go(e) {
  if (!In(e))
    return !1;
  var t = jn(e);
  return t == Vo || t == Bo || t == Ho || t == Uo;
}
var mt = Pt["__core-js_shared__"], Qt = function() {
  var e = /[^.]+$/.exec(mt && mt.keys && mt.keys.IE_PROTO || "");
  return e ? "Symbol(src)_1." + e : "";
}();
function Zo(e) {
  return !!Qt && Qt in e;
}
var Ko = Function.prototype, qo = Ko.toString;
function Jo(e) {
  if (e != null) {
    try {
      return qo.call(e);
    } catch {
    }
    try {
      return e + "";
    } catch {
    }
  }
  return "";
}
var Qo = /[\\^$.*+?()[\]{}|]/g, Yo = /^\[object .+?Constructor\]$/, Xo = Function.prototype, es = Object.prototype, ts = Xo.toString, ns = es.hasOwnProperty, os = RegExp(
  "^" + ts.call(ns).replace(Qo, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$"
);
function ss(e) {
  if (!In(e) || Zo(e))
    return !1;
  var t = Go(e) ? os : Yo;
  return t.test(Jo(e));
}
function is(e, t) {
  return e?.[t];
}
function Nn(e, t) {
  var n = is(e, t);
  return ss(n) ? n : void 0;
}
function ls(e, t) {
  return e === t || e !== e && t !== t;
}
var as = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/, rs = /^\w*$/;
function us(e, t) {
  if (Tt(e))
    return !1;
  var n = typeof e;
  return n == "number" || n == "symbol" || n == "boolean" || e == null || jt(e) ? !0 : rs.test(e) || !as.test(e) || t != null && e in Object(t);
}
var Ie = Nn(Object, "create");
function cs() {
  this.__data__ = Ie ? Ie(null) : {}, this.size = 0;
}
function ds(e) {
  var t = this.has(e) && delete this.__data__[e];
  return this.size -= t ? 1 : 0, t;
}
var hs = "__lodash_hash_undefined__", fs = Object.prototype, ps = fs.hasOwnProperty;
function vs(e) {
  var t = this.__data__;
  if (Ie) {
    var n = t[e];
    return n === hs ? void 0 : n;
  }
  return ps.call(t, e) ? t[e] : void 0;
}
var gs = Object.prototype, ws = gs.hasOwnProperty;
function ms(e) {
  var t = this.__data__;
  return Ie ? t[e] !== void 0 : ws.call(t, e);
}
var ys = "__lodash_hash_undefined__";
function bs(e, t) {
  var n = this.__data__;
  return this.size += this.has(e) ? 0 : 1, n[e] = Ie && t === void 0 ? ys : t, this;
}
function ae(e) {
  var t = -1, n = e == null ? 0 : e.length;
  for (this.clear(); ++t < n; ) {
    var o = e[t];
    this.set(o[0], o[1]);
  }
}
ae.prototype.clear = cs;
ae.prototype.delete = ds;
ae.prototype.get = vs;
ae.prototype.has = ms;
ae.prototype.set = bs;
function _s() {
  this.__data__ = [], this.size = 0;
}
function at(e, t) {
  for (var n = e.length; n--; )
    if (ls(e[n][0], t))
      return n;
  return -1;
}
var ks = Array.prototype, Cs = ks.splice;
function Ls(e) {
  var t = this.__data__, n = at(t, e);
  if (n < 0)
    return !1;
  var o = t.length - 1;
  return n == o ? t.pop() : Cs.call(t, n, 1), --this.size, !0;
}
function Ss(e) {
  var t = this.__data__, n = at(t, e);
  return n < 0 ? void 0 : t[n][1];
}
function xs(e) {
  return at(this.__data__, e) > -1;
}
function zs(e, t) {
  var n = this.__data__, o = at(n, e);
  return o < 0 ? (++this.size, n.push([e, t])) : n[o][1] = t, this;
}
function Le(e) {
  var t = -1, n = e == null ? 0 : e.length;
  for (this.clear(); ++t < n; ) {
    var o = e[t];
    this.set(o[0], o[1]);
  }
}
Le.prototype.clear = _s;
Le.prototype.delete = Ls;
Le.prototype.get = Ss;
Le.prototype.has = xs;
Le.prototype.set = zs;
var Ws = Nn(Pt, "Map");
function Os() {
  this.size = 0, this.__data__ = {
    hash: new ae(),
    map: new (Ws || Le)(),
    string: new ae()
  };
}
function Ps(e) {
  var t = typeof e;
  return t == "string" || t == "number" || t == "symbol" || t == "boolean" ? e !== "__proto__" : e === null;
}
function rt(e, t) {
  var n = e.__data__;
  return Ps(t) ? n[typeof t == "string" ? "string" : "hash"] : n.map;
}
function js(e) {
  var t = rt(this, e).delete(e);
  return this.size -= t ? 1 : 0, t;
}
function Ts(e) {
  return rt(this, e).get(e);
}
function Is(e) {
  return rt(this, e).has(e);
}
function Ns(e, t) {
  var n = rt(this, e), o = n.size;
  return n.set(e, t), this.size += n.size == o ? 0 : 1, this;
}
function ue(e) {
  var t = -1, n = e == null ? 0 : e.length;
  for (this.clear(); ++t < n; ) {
    var o = e[t];
    this.set(o[0], o[1]);
  }
}
ue.prototype.clear = Os;
ue.prototype.delete = js;
ue.prototype.get = Ts;
ue.prototype.has = Is;
ue.prototype.set = Ns;
var Ms = "Expected a function";
function It(e, t) {
  if (typeof e != "function" || t != null && typeof t != "function")
    throw new TypeError(Ms);
  var n = function() {
    var o = arguments, l = t ? t.apply(this, o) : o[0], d = n.cache;
    if (d.has(l))
      return d.get(l);
    var c = e.apply(this, o);
    return n.cache = d.set(l, c) || d, c;
  };
  return n.cache = new (It.Cache || ue)(), n;
}
It.Cache = ue;
var $s = 500;
function Es(e) {
  var t = It(e, function(o) {
    return n.size === $s && n.clear(), o;
  }), n = t.cache;
  return t;
}
var Fs = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g, As = /\\(\\)?/g, Ds = Es(function(e) {
  var t = [];
  return e.charCodeAt(0) === 46 && t.push(""), e.replace(Fs, function(n, o, l, d) {
    t.push(l ? d.replace(As, "$1") : o || n);
  }), t;
});
function Rs(e) {
  return e == null ? "" : Tn(e);
}
function Hs(e, t) {
  return Tt(e) ? e : us(e, t) ? [e] : Ds(Rs(e));
}
function Vs(e) {
  if (typeof e == "string" || jt(e))
    return e;
  var t = e + "";
  return t == "0" && 1 / e == -1 / 0 ? "-0" : t;
}
function Bs(e, t) {
  t = Hs(t, e);
  for (var n = 0, o = t.length; e != null && n < o; )
    e = e[Vs(t[n++])];
  return n && n == o ? e : void 0;
}
function Us(e, t, n) {
  var o = e == null ? void 0 : Bs(e, t);
  return o === void 0 ? n : o;
}
function Gs(e) {
  for (var t = -1, n = e == null ? 0 : e.length, o = {}; ++t < n; ) {
    var l = e[t];
    o[l[0]] = l[1];
  }
  return o;
}
const Mn = (e) => e === void 0, Yt = (e) => typeof e == "boolean", re = (e) => typeof e == "number", kt = (e) => typeof Element > "u" ? !1 : e instanceof Element, Zs = (e) => le(e) ? !Number.isNaN(Number(e)) : !1;
var Xt;
const ce = typeof window < "u", Ks = (e) => typeof e == "string", qs = () => {
};
ce && ((Xt = window?.navigator) != null && Xt.userAgent) && /iP(ad|hone|od)/.test(window.navigator.userAgent);
function Nt(e) {
  return typeof e == "function" ? e() : s(e);
}
function Js(e) {
  return e;
}
function Mt(e) {
  return uo() ? (co(e), !0) : !1;
}
function Qs(e, t = !0) {
  ye() ? Ne(e) : t ? e() : mn(e);
}
function $n(e, t, n = {}) {
  const {
    immediate: o = !0
  } = n, l = C(!1);
  let d = null;
  function c() {
    d && (clearTimeout(d), d = null);
  }
  function h() {
    l.value = !1, c();
  }
  function v(...g) {
    c(), l.value = !0, d = setTimeout(() => {
      l.value = !1, d = null, e(...g);
    }, Nt(t));
  }
  return o && (l.value = !0, ce && v()), Mt(h), {
    isPending: ro(l),
    start: v,
    stop: h
  };
}
function En(e) {
  var t;
  const n = Nt(e);
  return (t = n?.$el) != null ? t : n;
}
const Fn = ce ? window : void 0;
function An(...e) {
  let t, n, o, l;
  if (Ks(e[0]) || Array.isArray(e[0]) ? ([n, o, l] = e, t = Fn) : [t, n, o, l] = e, !t)
    return qs;
  Array.isArray(n) || (n = [n]), Array.isArray(o) || (o = [o]);
  const d = [], c = () => {
    d.forEach((w) => w()), d.length = 0;
  }, h = (w, L, T, N) => (w.addEventListener(L, T, N), () => w.removeEventListener(L, T, N)), v = lt(() => [En(t), Nt(l)], ([w, L]) => {
    c(), w && d.push(...n.flatMap((T) => o.map((N) => h(w, T, N, L))));
  }, { immediate: !0, flush: "post" }), g = () => {
    v(), c();
  };
  return Mt(g), g;
}
function Ys(e, t = !1) {
  const n = C(), o = () => n.value = !!e();
  return o(), Qs(o, t), n;
}
const en = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {}, tn = "__vueuse_ssr_handlers__";
en[tn] = en[tn] || {};
var nn = Object.getOwnPropertySymbols, Xs = Object.prototype.hasOwnProperty, ei = Object.prototype.propertyIsEnumerable, ti = (e, t) => {
  var n = {};
  for (var o in e)
    Xs.call(e, o) && t.indexOf(o) < 0 && (n[o] = e[o]);
  if (e != null && nn)
    for (var o of nn(e))
      t.indexOf(o) < 0 && ei.call(e, o) && (n[o] = e[o]);
  return n;
};
function ni(e, t, n = {}) {
  const o = n, { window: l = Fn } = o, d = ti(o, ["window"]);
  let c;
  const h = Ys(() => l && "ResizeObserver" in l), v = () => {
    c && (c.disconnect(), c = void 0);
  }, g = lt(() => En(e), (L) => {
    v(), h.value && l && L && (c = new ResizeObserver(t), c.observe(L, d));
  }, { immediate: !0, flush: "post" }), w = () => {
    v(), g();
  };
  return Mt(w), {
    isSupported: h,
    stop: w
  };
}
var on;
(function(e) {
  e.UP = "UP", e.RIGHT = "RIGHT", e.DOWN = "DOWN", e.LEFT = "LEFT", e.NONE = "NONE";
})(on || (on = {}));
var oi = Object.defineProperty, sn = Object.getOwnPropertySymbols, si = Object.prototype.hasOwnProperty, ii = Object.prototype.propertyIsEnumerable, ln = (e, t, n) => t in e ? oi(e, t, { enumerable: !0, configurable: !0, writable: !0, value: n }) : e[t] = n, li = (e, t) => {
  for (var n in t || (t = {}))
    si.call(t, n) && ln(e, n, t[n]);
  if (sn)
    for (var n of sn(t))
      ii.call(t, n) && ln(e, n, t[n]);
  return e;
};
const ai = {
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
li({
  linear: Js
}, ai);
const an = {
  current: 0
}, rn = C(0), Dn = 2e3, un = Symbol("elZIndexContextKey"), Rn = Symbol("zIndexContextKey"), ri = (e) => {
  const t = ye() ? se(un, an) : an, n = e || (ye() ? se(Rn, void 0) : void 0), o = y(() => {
    const c = s(n);
    return re(c) ? c : Dn;
  }), l = y(() => o.value + rn.value), d = () => (t.current++, rn.value = t.current, l.value);
  return !ce && se(un), {
    initialZIndex: o,
    currentZIndex: l,
    nextZIndex: d
  };
};
var ui = {
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
const ci = (e) => (t, n) => di(t, n, s(e)), di = (e, t, n) => Us(n, e, e).replace(/\{(\w+)\}/g, (o, l) => {
  var d;
  return `${(d = t?.[l]) != null ? d : `{${l}}`}`;
}), hi = (e) => {
  const t = y(() => s(e).name), n = yn(e) ? e : C(e);
  return {
    lang: t,
    locale: n,
    t: ci(e)
  };
}, Hn = Symbol("localeContextKey"), fi = (e) => {
  const t = e || se(Hn, C());
  return hi(y(() => t.value || ui));
}, Vn = "__epPropKey", B = (e) => e, pi = (e) => On(e) && !!e[Vn], Bn = (e, t) => {
  if (!On(e) || pi(e))
    return e;
  const { values: n, required: o, default: l, type: d, validator: c } = e, v = {
    type: d,
    required: !!o,
    validator: n || c ? (g) => {
      let w = !1, L = [];
      if (n && (L = Array.from(n), Zt(e, "default") && L.push(l), w || (w = L.includes(g))), c && (w || (w = c(g))), !w && L.length > 0) {
        const T = [...new Set(L)].map((N) => JSON.stringify(N)).join(", ");
        ho(`Invalid prop: validation failed${t ? ` for prop "${t}"` : ""}. Expected one of [${T}], got value ${JSON.stringify(g)}.`);
      }
      return w;
    } : void 0,
    [Vn]: !0
  };
  return Zt(e, "default") && (v.default = l), v;
}, Se = (e) => Gs(Object.entries(e).map(([t, n]) => [
  t,
  Bn(n, t)
])), vi = ["", "default", "small", "large"], gi = Bn({
  type: String,
  values: vi,
  required: !1
}), wi = Symbol("size"), mi = Symbol("emptyValuesContextKey"), yi = Se({
  emptyValues: Array,
  valueOnClear: {
    type: [String, Number, Boolean, Function],
    default: void 0,
    validator: (e) => Te(e) ? !e() : !e
  }
}), cn = (e) => Object.keys(e), nt = C();
function Un(e, t = void 0) {
  return ye() ? se(zn, nt) : nt;
}
function Gn(e, t) {
  const n = Un(), o = Ot(e, y(() => {
    var h;
    return ((h = n.value) == null ? void 0 : h.namespace) || qe;
  })), l = fi(y(() => {
    var h;
    return (h = n.value) == null ? void 0 : h.locale;
  })), d = ri(y(() => {
    var h;
    return ((h = n.value) == null ? void 0 : h.zIndex) || Dn;
  })), c = y(() => {
    var h;
    return s(t) || ((h = n.value) == null ? void 0 : h.size) || "";
  });
  return Zn(y(() => s(n) || {})), {
    ns: o,
    locale: l,
    zIndex: d,
    size: c
  };
}
const Zn = (e, t, n = !1) => {
  var o;
  const l = !!ye(), d = l ? Un() : void 0, c = (o = void 0) != null ? o : l ? fo : void 0;
  if (!c)
    return;
  const h = y(() => {
    const v = s(e);
    return d?.value ? bi(d.value, v) : v;
  });
  return c(zn, h), c(Hn, y(() => h.value.locale)), c(Wn, y(() => h.value.namespace)), c(Rn, y(() => h.value.zIndex)), c(wi, {
    size: y(() => h.value.size || "")
  }), c(mi, y(() => ({
    emptyValues: h.value.emptyValues,
    valueOnClear: h.value.valueOnClear
  }))), (n || !nt.value) && (nt.value = h.value), h;
}, bi = (e, t) => {
  const n = [.../* @__PURE__ */ new Set([...cn(e), ...cn(t)])], o = {};
  for (const l of n)
    o[l] = t[l] !== void 0 ? t[l] : e[l];
  return o;
};
var ut = (e, t) => {
  const n = e.__vccOpts || e;
  for (const [o, l] of t)
    n[o] = l;
  return n;
};
function Ct(e, t = "px") {
  if (!e)
    return "";
  if (re(e) || Zs(e))
    return `${e}${t}`;
  if (le(e))
    return e;
}
const Kn = (e, t) => (e.install = (n) => {
  for (const o of [e, ...Object.values({})])
    n.component(o.name, o);
}, e), qn = (e, t) => (e.install = (n) => {
  e._context = n._context, n.config.globalProperties[t] = e;
}, e), _i = Se({
  size: {
    type: B([Number, String])
  },
  color: {
    type: String
  }
}), ki = A({
  name: "ElIcon",
  inheritAttrs: !1
}), Ci = /* @__PURE__ */ A({
  ...ki,
  props: _i,
  setup(e) {
    const t = e, n = Ot("icon"), o = y(() => {
      const { size: l, color: d } = t;
      return !l && !d ? {} : {
        fontSize: Mn(l) ? void 0 : Ct(l),
        "--color": d
      };
    });
    return (l, d) => (b(), W("i", po({
      class: s(n).b(),
      style: s(o)
    }, l.$attrs), [
      be(l.$slots, "default")
    ], 16));
  }
});
var Li = /* @__PURE__ */ ut(Ci, [["__file", "icon.vue"]]);
const ot = Kn(Li);
/*! Element Plus Icons Vue v2.3.1 */
var Si = /* @__PURE__ */ A({
  name: "CircleCloseFilled",
  __name: "circle-close-filled",
  setup(e) {
    return (t, n) => (b(), W("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 1024 1024"
    }, [
      a("path", {
        fill: "currentColor",
        d: "M512 64a448 448 0 1 1 0 896 448 448 0 0 1 0-896m0 393.664L407.936 353.6a38.4 38.4 0 1 0-54.336 54.336L457.664 512 353.6 616.064a38.4 38.4 0 1 0 54.336 54.336L512 566.336 616.064 670.4a38.4 38.4 0 1 0 54.336-54.336L566.336 512 670.4 407.936a38.4 38.4 0 1 0-54.336-54.336z"
      })
    ]));
  }
}), xi = Si, zi = /* @__PURE__ */ A({
  name: "Close",
  __name: "close",
  setup(e) {
    return (t, n) => (b(), W("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 1024 1024"
    }, [
      a("path", {
        fill: "currentColor",
        d: "M764.288 214.592 512 466.88 259.712 214.592a31.936 31.936 0 0 0-45.12 45.12L466.752 512 214.528 764.224a31.936 31.936 0 1 0 45.12 45.184L512 557.184l252.288 252.288a31.936 31.936 0 0 0 45.12-45.12L557.12 512.064l252.288-252.352a31.936 31.936 0 1 0-45.12-45.184z"
      })
    ]));
  }
}), Jn = zi, Wi = /* @__PURE__ */ A({
  name: "InfoFilled",
  __name: "info-filled",
  setup(e) {
    return (t, n) => (b(), W("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 1024 1024"
    }, [
      a("path", {
        fill: "currentColor",
        d: "M512 64a448 448 0 1 1 0 896.064A448 448 0 0 1 512 64m67.2 275.072c33.28 0 60.288-23.104 60.288-57.344s-27.072-57.344-60.288-57.344c-33.28 0-60.16 23.104-60.16 57.344s26.88 57.344 60.16 57.344M590.912 699.2c0-6.848 2.368-24.64 1.024-34.752l-52.608 60.544c-10.88 11.456-24.512 19.392-30.912 17.28a12.992 12.992 0 0 1-8.256-14.72l87.68-276.992c7.168-35.136-12.544-67.2-54.336-71.296-44.096 0-108.992 44.736-148.48 101.504 0 6.784-1.28 23.68.064 33.792l52.544-60.608c10.88-11.328 23.552-19.328 29.952-17.152a12.8 12.8 0 0 1 7.808 16.128L388.48 728.576c-10.048 32.256 8.96 63.872 55.04 71.04 67.84 0 107.904-43.648 147.456-100.416z"
      })
    ]));
  }
}), Oi = Wi, Pi = /* @__PURE__ */ A({
  name: "SuccessFilled",
  __name: "success-filled",
  setup(e) {
    return (t, n) => (b(), W("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 1024 1024"
    }, [
      a("path", {
        fill: "currentColor",
        d: "M512 64a448 448 0 1 1 0 896 448 448 0 0 1 0-896m-55.808 536.384-99.52-99.584a38.4 38.4 0 1 0-54.336 54.336l126.72 126.72a38.272 38.272 0 0 0 54.336 0l262.4-262.464a38.4 38.4 0 1 0-54.272-54.336z"
      })
    ]));
  }
}), ji = Pi, Ti = /* @__PURE__ */ A({
  name: "WarningFilled",
  __name: "warning-filled",
  setup(e) {
    return (t, n) => (b(), W("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 1024 1024"
    }, [
      a("path", {
        fill: "currentColor",
        d: "M512 64a448 448 0 1 1 0 896 448 448 0 0 1 0-896m0 192a58.432 58.432 0 0 0-58.24 63.744l23.36 256.384a35.072 35.072 0 0 0 69.76 0l23.296-256.384A58.432 58.432 0 0 0 512 256m0 512a51.2 51.2 0 1 0 0-102.4 51.2 51.2 0 0 0 0 102.4"
      })
    ]));
  }
}), Ii = Ti;
const Qn = B([
  String,
  Object,
  Function
]), Ni = {
  Close: Jn
}, Mi = {
  Close: Jn
}, st = {
  success: ji,
  warning: Ii,
  error: xi,
  info: Oi
}, $i = (e) => e, Je = {
  esc: "Escape",
  delete: "Delete",
  backspace: "Backspace"
}, Ei = Se({
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
    type: B([String, Object, Array])
  },
  offset: {
    type: B(Array),
    default: [0, 0]
  },
  badgeClass: {
    type: String
  }
}), Fi = A({
  name: "ElBadge"
}), Ai = /* @__PURE__ */ A({
  ...Fi,
  props: Ei,
  setup(e, { expose: t }) {
    const n = e, o = Ot("badge"), l = y(() => n.isDot ? "" : re(n.value) && re(n.max) ? n.max < n.value ? `${n.max}+` : `${n.value}` : `${n.value}`), d = y(() => {
      var c, h, v, g, w;
      return [
        {
          backgroundColor: n.color,
          marginRight: Ct(-((h = (c = n.offset) == null ? void 0 : c[0]) != null ? h : 0)),
          marginTop: Ct((g = (v = n.offset) == null ? void 0 : v[1]) != null ? g : 0)
        },
        (w = n.badgeStyle) != null ? w : {}
      ];
    });
    return t({
      content: l
    }), (c, h) => (b(), W("div", {
      class: z(s(o).b())
    }, [
      be(c.$slots, "default"),
      u(zt, {
        name: `${s(o).namespace.value}-zoom-in-center`,
        persisted: ""
      }, {
        default: ie(() => [
          J(a("sup", {
            class: z([
              s(o).e("content"),
              s(o).em("content", c.type),
              s(o).is("fixed", !!c.$slots.default),
              s(o).is("dot", c.isDot),
              s(o).is("hide-zero", !c.showZero && n.value === 0),
              c.badgeClass
            ]),
            style: Qe(s(d))
          }, [
            be(c.$slots, "content", { value: s(l) }, () => [
              $(I(s(l)), 1)
            ])
          ], 6), [
            [Ye, !c.hidden && (s(l) || c.isDot || c.$slots.content)]
          ])
        ]),
        _: 3
      }, 8, ["name"])
    ], 2));
  }
});
var Di = /* @__PURE__ */ ut(Ai, [["__file", "badge.vue"]]);
const Ri = Kn(Di), Hi = Se({
  a11y: {
    type: Boolean,
    default: !0
  },
  locale: {
    type: B(Object)
  },
  size: gi,
  button: {
    type: B(Object)
  },
  experimentalFeatures: {
    type: B(Object)
  },
  keyboardNavigation: {
    type: Boolean,
    default: !0
  },
  message: {
    type: B(Object)
  },
  zIndex: Number,
  namespace: {
    type: String,
    default: "el"
  },
  ...yi
}), Z = {};
A({
  name: "ElConfigProvider",
  props: Hi,
  setup(e, { slots: t }) {
    lt(() => e.message, (o) => {
      Object.assign(Z, o ?? {});
    }, { immediate: !0, deep: !0 });
    const n = Zn(e);
    return () => be(t, "default", { config: n?.value });
  }
});
const Yn = ["success", "info", "warning", "error"], F = $i({
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
  appendTo: ce ? document.body : void 0
}), Vi = Se({
  customClass: {
    type: String,
    default: F.customClass
  },
  center: {
    type: Boolean,
    default: F.center
  },
  dangerouslyUseHTMLString: {
    type: Boolean,
    default: F.dangerouslyUseHTMLString
  },
  duration: {
    type: Number,
    default: F.duration
  },
  icon: {
    type: Qn,
    default: F.icon
  },
  id: {
    type: String,
    default: F.id
  },
  message: {
    type: B([
      String,
      Object,
      Function
    ]),
    default: F.message
  },
  onClose: {
    type: B(Function),
    default: F.onClose
  },
  showClose: {
    type: Boolean,
    default: F.showClose
  },
  type: {
    type: String,
    values: Yn,
    default: F.type
  },
  plain: {
    type: Boolean,
    default: F.plain
  },
  offset: {
    type: Number,
    default: F.offset
  },
  zIndex: {
    type: Number,
    default: F.zIndex
  },
  grouping: {
    type: Boolean,
    default: F.grouping
  },
  repeatNum: {
    type: Number,
    default: F.repeatNum
  }
}), Bi = {
  destroy: () => !0
}, K = vo([]), Ui = (e) => {
  const t = K.findIndex((l) => l.id === e), n = K[t];
  let o;
  return t > 0 && (o = K[t - 1]), { current: n, prev: o };
}, Gi = (e) => {
  const { prev: t } = Ui(e);
  return t ? t.vm.exposed.bottom.value : 0;
}, Zi = (e, t) => K.findIndex((o) => o.id === e) > 0 ? 16 : t, Ki = A({
  name: "ElMessage"
}), qi = /* @__PURE__ */ A({
  ...Ki,
  props: Vi,
  emits: Bi,
  setup(e, { expose: t }) {
    const n = e, { Close: o } = Mi, { ns: l, zIndex: d } = Gn("message"), { currentZIndex: c, nextZIndex: h } = d, v = C(), g = C(!1), w = C(0);
    let L;
    const T = y(() => n.type ? n.type === "error" ? "danger" : n.type : "info"), N = y(() => {
      const O = n.type;
      return { [l.bm("icon", O)]: O && st[O] };
    }), R = y(() => n.icon || st[n.type] || ""), p = y(() => Gi(n.id)), _ = y(() => Zi(n.id, n.offset) + p.value), S = y(() => w.value + _.value), U = y(() => ({
      top: `${_.value}px`,
      zIndex: c.value
    }));
    function x() {
      n.duration !== 0 && ({ stop: L } = $n(() => {
        q();
      }, n.duration));
    }
    function M() {
      L?.();
    }
    function q() {
      g.value = !1;
    }
    function de({ code: O }) {
      O === Je.esc && q();
    }
    return Ne(() => {
      x(), h(), g.value = !0;
    }), lt(() => n.repeatNum, () => {
      M(), x();
    }), An(document, "keydown", de), ni(v, () => {
      w.value = v.value.getBoundingClientRect().height;
    }), t({
      visible: g,
      bottom: S,
      close: q
    }), (O, Me) => (b(), Y(zt, {
      name: s(l).b("fade"),
      onBeforeLeave: O.onClose,
      onAfterLeave: ($e) => O.$emit("destroy"),
      persisted: ""
    }, {
      default: ie(() => [
        J(a("div", {
          id: O.id,
          ref_key: "messageRef",
          ref: v,
          class: z([
            s(l).b(),
            { [s(l).m(O.type)]: O.type },
            s(l).is("center", O.center),
            s(l).is("closable", O.showClose),
            s(l).is("plain", O.plain),
            O.customClass
          ]),
          style: Qe(s(U)),
          role: "alert",
          onMouseenter: M,
          onMouseleave: x
        }, [
          O.repeatNum > 1 ? (b(), Y(s(Ri), {
            key: 0,
            value: O.repeatNum,
            type: s(T),
            class: z(s(l).e("badge"))
          }, null, 8, ["value", "type", "class"])) : V("v-if", !0),
          s(R) ? (b(), Y(s(ot), {
            key: 1,
            class: z([s(l).e("icon"), s(N)])
          }, {
            default: ie(() => [
              (b(), Y(bn(s(R))))
            ]),
            _: 1
          }, 8, ["class"])) : V("v-if", !0),
          be(O.$slots, "default", {}, () => [
            O.dangerouslyUseHTMLString ? (b(), W(Wt, { key: 1 }, [
              V(" Caution here, message could've been compromised, never use user's input as message "),
              a("p", {
                class: z(s(l).e("content")),
                innerHTML: O.message
              }, null, 10, ["innerHTML"])
            ], 2112)) : (b(), W("p", {
              key: 0,
              class: z(s(l).e("content"))
            }, I(O.message), 3))
          ]),
          O.showClose ? (b(), Y(s(ot), {
            key: 2,
            class: z(s(l).e("closeBtn")),
            onClick: me(q, ["stop"])
          }, {
            default: ie(() => [
              u(s(o))
            ]),
            _: 1
          }, 8, ["class", "onClick"])) : V("v-if", !0)
        ], 46, ["id"]), [
          [Ye, g.value]
        ])
      ]),
      _: 3
    }, 8, ["name", "onBeforeLeave", "onAfterLeave"]));
  }
});
var Ji = /* @__PURE__ */ ut(qi, [["__file", "message.vue"]]);
let Qi = 1;
const Xn = (e) => {
  const t = !e || le(e) || je(e) || Te(e) ? { message: e } : e, n = {
    ...F,
    ...t
  };
  if (!n.appendTo)
    n.appendTo = document.body;
  else if (le(n.appendTo)) {
    let o = document.querySelector(n.appendTo);
    kt(o) || (o = document.body), n.appendTo = o;
  }
  return Yt(Z.grouping) && !n.grouping && (n.grouping = Z.grouping), re(Z.duration) && n.duration === 3e3 && (n.duration = Z.duration), re(Z.offset) && n.offset === 16 && (n.offset = Z.offset), Yt(Z.showClose) && !n.showClose && (n.showClose = Z.showClose), n;
}, Yi = (e) => {
  const t = K.indexOf(e);
  if (t === -1)
    return;
  K.splice(t, 1);
  const { handler: n } = e;
  n.close();
}, Xi = ({ appendTo: e, ...t }, n) => {
  const o = `message_${Qi++}`, l = t.onClose, d = document.createElement("div"), c = {
    ...t,
    id: o,
    onClose: () => {
      l?.(), Yi(w);
    },
    onDestroy: () => {
      Xe(null, d);
    }
  }, h = u(Ji, c, Te(c.message) || je(c.message) ? {
    default: Te(c.message) ? c.message : () => c.message
  } : null);
  h.appContext = n || ke._context, Xe(h, d), e.appendChild(d.firstElementChild);
  const v = h.component, w = {
    id: o,
    vnode: h,
    vm: v,
    handler: {
      close: () => {
        v.exposed.visible.value = !1;
      }
    },
    props: h.component.props
  };
  return w;
}, ke = (e = {}, t) => {
  if (!ce)
    return { close: () => {
    } };
  const n = Xn(e);
  if (n.grouping && K.length) {
    const l = K.find(({ vnode: d }) => {
      var c;
      return ((c = d.props) == null ? void 0 : c.message) === n.message;
    });
    if (l)
      return l.props.repeatNum += 1, l.props.type = n.type, l.handler;
  }
  if (re(Z.max) && K.length >= Z.max)
    return { close: () => {
    } };
  const o = Xi(n, t);
  return K.push(o), o.handler;
};
Yn.forEach((e) => {
  ke[e] = (t = {}, n) => {
    const o = Xn(t);
    return ke({ ...o, type: e }, n);
  };
});
function el(e) {
  for (const t of K)
    (!e || e === t.props.type) && t.handler.close();
}
ke.closeAll = el;
ke._context = null;
const tl = qn(ke, "$message"), eo = [
  "success",
  "info",
  "warning",
  "error"
], nl = Se({
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
    type: Qn
  },
  id: {
    type: String,
    default: ""
  },
  message: {
    type: B([
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
    type: B(Function),
    default: () => {
    }
  },
  onClose: {
    type: B(Function),
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
    values: [...eo, ""],
    default: ""
  },
  zIndex: Number
}), ol = {
  destroy: () => !0
}, sl = A({
  name: "ElNotification"
}), il = /* @__PURE__ */ A({
  ...sl,
  props: nl,
  emits: ol,
  setup(e, { expose: t }) {
    const n = e, { ns: o, zIndex: l } = Gn("notification"), { nextZIndex: d, currentZIndex: c } = l, { Close: h } = Ni, v = C(!1);
    let g;
    const w = y(() => {
      const x = n.type;
      return x && st[n.type] ? o.m(x) : "";
    }), L = y(() => n.type && st[n.type] || n.icon), T = y(() => n.position.endsWith("right") ? "right" : "left"), N = y(() => n.position.startsWith("top") ? "top" : "bottom"), R = y(() => {
      var x;
      return {
        [N.value]: `${n.offset}px`,
        zIndex: (x = n.zIndex) != null ? x : c.value
      };
    });
    function p() {
      n.duration > 0 && ({ stop: g } = $n(() => {
        v.value && S();
      }, n.duration));
    }
    function _() {
      g?.();
    }
    function S() {
      v.value = !1;
    }
    function U({ code: x }) {
      x === Je.delete || x === Je.backspace ? _() : x === Je.esc ? v.value && S() : p();
    }
    return Ne(() => {
      p(), d(), v.value = !0;
    }), An(document, "keydown", U), t({
      visible: v,
      close: S
    }), (x, M) => (b(), Y(zt, {
      name: s(o).b("fade"),
      onBeforeLeave: x.onClose,
      onAfterLeave: (q) => x.$emit("destroy"),
      persisted: ""
    }, {
      default: ie(() => [
        J(a("div", {
          id: x.id,
          class: z([s(o).b(), x.customClass, s(T)]),
          style: Qe(s(R)),
          role: "alert",
          onMouseenter: _,
          onMouseleave: p,
          onClick: x.onClick
        }, [
          s(L) ? (b(), Y(s(ot), {
            key: 0,
            class: z([s(o).e("icon"), s(w)])
          }, {
            default: ie(() => [
              (b(), Y(bn(s(L))))
            ]),
            _: 1
          }, 8, ["class"])) : V("v-if", !0),
          a("div", {
            class: z(s(o).e("group"))
          }, [
            a("h2", {
              class: z(s(o).e("title")),
              textContent: I(x.title)
            }, null, 10, ["textContent"]),
            J(a("div", {
              class: z(s(o).e("content")),
              style: Qe(x.title ? void 0 : { margin: 0 })
            }, [
              be(x.$slots, "default", {}, () => [
                x.dangerouslyUseHTMLString ? (b(), W(Wt, { key: 1 }, [
                  V(" Caution here, message could've been compromised, never use user's input as message "),
                  a("p", { innerHTML: x.message }, null, 8, ["innerHTML"])
                ], 2112)) : (b(), W("p", { key: 0 }, I(x.message), 1))
              ])
            ], 6), [
              [Ye, x.message]
            ]),
            x.showClose ? (b(), Y(s(ot), {
              key: 0,
              class: z(s(o).e("closeBtn")),
              onClick: me(S, ["stop"])
            }, {
              default: ie(() => [
                u(s(h))
              ]),
              _: 1
            }, 8, ["class", "onClick"])) : V("v-if", !0)
          ], 2)
        ], 46, ["id", "onClick"]), [
          [Ye, v.value]
        ])
      ]),
      _: 3
    }, 8, ["name", "onBeforeLeave", "onAfterLeave"]));
  }
});
var ll = /* @__PURE__ */ ut(il, [["__file", "notification.vue"]]);
const it = {
  "top-left": [],
  "top-right": [],
  "bottom-left": [],
  "bottom-right": []
}, Lt = 16;
let al = 1;
const Ce = function(e = {}, t) {
  if (!ce)
    return { close: () => {
    } };
  (le(e) || je(e)) && (e = { message: e });
  const n = e.position || "top-right";
  let o = e.offset || 0;
  it[n].forEach(({ vm: w }) => {
    var L;
    o += (((L = w.el) == null ? void 0 : L.offsetHeight) || 0) + Lt;
  }), o += Lt;
  const l = `notification_${al++}`, d = e.onClose, c = {
    ...e,
    offset: o,
    id: l,
    onClose: () => {
      rl(l, n, d);
    }
  };
  let h = document.body;
  kt(e.appendTo) ? h = e.appendTo : le(e.appendTo) && (h = document.querySelector(e.appendTo)), kt(h) || (h = document.body);
  const v = document.createElement("div"), g = u(ll, c, Te(c.message) ? c.message : je(c.message) ? () => c.message : null);
  return g.appContext = Mn(t) ? Ce._context : t, g.props.onDestroy = () => {
    Xe(null, v);
  }, Xe(g, v), it[n].push({ vm: g }), h.appendChild(v.firstElementChild), {
    close: () => {
      g.component.exposed.visible.value = !1;
    }
  };
};
eo.forEach((e) => {
  Ce[e] = (t = {}, n) => ((le(t) || je(t)) && (t = {
    message: t
  }), Ce({ ...t, type: e }, n));
});
function rl(e, t, n) {
  const o = it[t], l = o.findIndex(({ vm: g }) => {
    var w;
    return ((w = g.component) == null ? void 0 : w.props.id) === e;
  });
  if (l === -1)
    return;
  const { vm: d } = o[l];
  if (!d)
    return;
  n?.(d);
  const c = d.el.offsetHeight, h = t.split("-")[0];
  o.splice(l, 1);
  const v = o.length;
  if (!(v < 1))
    for (let g = l; g < v; g++) {
      const { el: w, component: L } = o[g].vm, T = Number.parseInt(w.style[h], 10) - c - Lt;
      L.props.offset = T;
    }
}
function ul() {
  for (const e of Object.values(it))
    e.forEach(({ vm: t }) => {
      t.component.exposed.visible.value = !1;
    });
}
Ce.closeAll = ul;
Ce._context = null;
const cl = qn(Ce, "$notify"), j = {
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
      duration: l = 3e3,
      showClose: d = !1
    } = e;
    o === "center" ? tl({
      message: t,
      type: n,
      duration: l,
      showClose: d,
      grouping: !0,
      customClass: `app-toast app-toast--${n}`
    }) : cl({
      message: t,
      type: n,
      position: o,
      duration: l,
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
var St;
(function(e) {
  e[e.Audio = 1] = "Audio", e[e.Cache = 2] = "Cache", e[e.Config = 3] = "Config", e[e.Data = 4] = "Data", e[e.LocalData = 5] = "LocalData", e[e.Document = 6] = "Document", e[e.Download = 7] = "Download", e[e.Picture = 8] = "Picture", e[e.Public = 9] = "Public", e[e.Video = 10] = "Video", e[e.Resource = 11] = "Resource", e[e.Temp = 12] = "Temp", e[e.AppConfig = 13] = "AppConfig", e[e.AppData = 14] = "AppData", e[e.AppLocalData = 15] = "AppLocalData", e[e.AppCache = 16] = "AppCache", e[e.AppLog = 17] = "AppLog", e[e.Desktop = 18] = "Desktop", e[e.Executable = 19] = "Executable", e[e.Font = 20] = "Font", e[e.Home = 21] = "Home", e[e.Runtime = 22] = "Runtime", e[e.Template = 23] = "Template";
})(St || (St = {}));
async function dl() {
  return r("plugin:path|resolve_directory", {
    directory: St.AppCache
  });
}
async function hl(...e) {
  return r("plugin:path|join", { paths: e });
}
async function dn(e, t) {
  await r("plugin:opener|open_path", {
    path: e,
    with: t
  });
}
const fl = () => ({
  mode: "folder",
  fixedImagePath: null,
  folderPath: null,
  scheduleEnabled: !1,
  intervalMinutes: 30,
  order: "random",
  fitMode: "fillCrop",
  autoRestore: !0,
  wallhavenSource: "hot",
  wallhavenCategory: "general",
  wallhavenQuery: null,
  lastFolderIndex: 0,
  lastAppliedPath: null
}), pl = (e) => e ? /^https?:\/\//i.test(e) ? e : bo(e) : "", hn = () => r("wallpaper_get_config"), xt = (e) => r("wallpaper_save_config", { config: e }), fn = () => r("wallpaper_get_status"), pn = (e) => r("wallpaper_scan_folder", { path: e }), vl = (e) => r("wallpaper_set_fixed_image", { path: e }), gl = () => r("wallpaper_switch_now"), wl = (e) => r("wallpaper_apply_current_fit", { fitMode: e }), ml = (e) => r("wallpaper_fetch_wallhaven", { params: e }), yl = (e) => r("wallpaper_set_wallhaven_image", { wallpaper: e }), bl = (e) => r("wallpaper_download_wallhaven_image", { wallpaper: e }), _l = () => r("wallpaper_clear_cache"), kl = (e, t) => new RegExp(`Command\\s+${t}\\s+not\\s+found`, "i").test(String(e)), Cl = async () => {
  try {
    await r("wallpaper_open_cache_dir");
    return;
  } catch (n) {
    if (!kl(n, "wallpaper_open_cache_dir"))
      throw n;
  }
  const e = await dl(), t = await hl(e, "wallpaper-switcher");
  try {
    await dn(t);
  } catch {
    await dn(e);
  }
};
function Ll({ config: e, refreshStatus: t }) {
  const n = C("switcher"), o = C([]), l = C(1), d = C(1), c = C(!1), h = C(""), v = C(""), g = C("general"), w = C("hot"), L = C(null), T = C(!1), N = C(!1), R = C(/* @__PURE__ */ new Set()), p = C(/* @__PURE__ */ new Set()), _ = /* @__PURE__ */ new Map();
  let S = null, U = null, x = null, M = 0;
  const q = y(() => w.value === "hot" ? "Hot" : "Toplist"), de = y(() => o.value.slice(0, 8)), O = y(() => {
    const k = v.value.trim();
    return g.value === "nature" ? k ? `${k} nature` : "nature" : k || null;
  }), Me = y(() => g.value), $e = (k) => {
    const P = String(k).replace(/^Error:\s*/, "");
    return /unexpected EOF|handshake|timed out|error sending request|client error|Connect/i.test(P) ? "Wallhaven 网络连接失败，请稍后重试或检查代理/网络。" : P.length > 120 ? `${P.slice(0, 120)}...` : P;
  }, X = (k, P) => {
    const E = new Set(R.value);
    P ? E.add(k) : E.delete(k), R.value = E;
  }, he = (k) => {
    const P = new Set(p.value);
    P.add(k), p.value = P;
  }, Ee = (k, P) => {
    if (!(P instanceof HTMLImageElement)) {
      _.delete(k.id);
      return;
    }
    if (_.set(k.id, P), !S) {
      P.src = k.thumbs.large;
      return;
    }
    P.dataset.src = k.thumbs.large, S.observe(P);
  }, Fe = () => {
    p.value = /* @__PURE__ */ new Set(), _.clear();
  }, fe = async () => {
    e.value.wallhavenQuery = v.value.trim() || null, e.value.wallhavenCategory = g.value, e.value.wallhavenSource = w.value, e.value.mode = "wallhaven", await xt(e.value);
  }, Q = async (k = l.value) => {
    const P = ++M;
    c.value = !0, h.value = "", o.value = [], Fe();
    try {
      await fe();
      const E = await ml({
        source: w.value,
        page: k,
        query: O.value,
        category: Me.value
      });
      if (P !== M) return;
      o.value = E.data, l.value = E.page, d.value = Math.max(1, E.lastPage), await mn();
      for (const ne of _.values())
        S && S.observe(ne);
    } catch (E) {
      if (P !== M) return;
      o.value = [], h.value = $e(E), j.msg(h.value, "error");
    } finally {
      P === M && (c.value = !1);
    }
  }, Ae = () => Q(1), ct = async (k) => {
    w.value = k, await Q(1);
  }, dt = async (k) => {
    g.value = k, await Q(1);
  }, ee = async () => {
    v.value = "", g.value = e.value.wallhavenCategory || "general", w.value = e.value.wallhavenSource, l.value = 1, h.value = "", o.value = [], n.value = "wallhaven", await Q(1);
  }, pe = async () => {
    n.value = "switcher", xe(), await t();
  }, ve = (k) => {
    L.value = k, T.value = !0, N.value = !1;
  }, xe = () => {
    L.value = null, T.value = !1, N.value = !1;
  }, De = () => {
    T.value = !1;
  }, Re = () => {
    T.value = !1, N.value = !0;
  }, He = async (k) => {
    X(k.id, !0);
    try {
      j.msg("正在设置壁纸...", "info"), await yl(k), await t(), j.msg("壁纸已设置", "success");
    } catch (P) {
      j.msg(String(P), "error");
    } finally {
      X(k.id, !1);
    }
  }, ht = async (k) => {
    X(k.id, !0);
    try {
      j.msg("正在下载壁纸...", "info"), await bl(k), await t(), j.msg("壁纸已下载到缓存", "success");
    } catch (P) {
      j.msg(String(P), "error");
    } finally {
      X(k.id, !1);
    }
  }, Ve = async () => {
    l.value > 1 && await Q(l.value - 1);
  }, ft = async () => {
    l.value < d.value && await Q(l.value + 1);
  };
  return Ne(() => {
    S = new IntersectionObserver((k) => {
      for (const P of k) {
        if (!P.isIntersecting) continue;
        const E = P.target, ne = E.dataset.src;
        ne && E.src !== ne && (E.src = ne), S?.unobserve(E);
      }
    }, { root: null, rootMargin: "120px" }), U = null, x = null;
  }), _n(() => {
    S?.disconnect(), S = null, U?.(), x?.();
  }), {
    activeView: n,
    wallpapers: o,
    wallhavenPage: l,
    wallhavenLastPage: d,
    wallhavenLoading: c,
    wallhavenError: h,
    wallhavenKeyword: v,
    wallhavenCategory: g,
    wallhavenSource: w,
    previewWallpaper: L,
    previewLoading: T,
    previewLoadFailed: N,
    workingIds: R,
    loadedThumbIds: p,
    wallhavenSourceLabel: q,
    visibleWallpapers: de,
    openWallhavenGrid: ee,
    backToSwitcher: pe,
    openPreview: ve,
    closePreview: xe,
    markPreviewLoaded: De,
    markPreviewFailed: Re,
    markThumbLoaded: he,
    setThumbRef: Ee,
    refreshWallhaven: Ae,
    setWallhavenSource: ct,
    setWallhavenCategory: dt,
    setWallpaperFromWallhaven: He,
    downloadWallpaperFromWallhaven: ht,
    prevWallhavenPage: Ve,
    nextWallhavenPage: ft,
    setupListeners: async () => {
      U = await et("wallpaper-switcher-changed", t), x = await et("wallpaper-switcher-error", (k) => {
        j.msg(k.payload?.message || "定时切换失败", "error");
      });
    }
  };
}
var Sl = {
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
function xl() {
  return "icon-" + ((1 + Math.random()) * 4294967296 | 0).toString(16).substring(1);
}
function zl(e, t, n) {
  var o = typeof t.fill == "string" ? [t.fill] : t.fill || [], l = [], d = t.theme || n.theme;
  switch (d) {
    case "outline":
      l.push(typeof o[0] == "string" ? o[0] : "currentColor"), l.push("none"), l.push(typeof o[0] == "string" ? o[0] : "currentColor"), l.push("none");
      break;
    case "filled":
      l.push(typeof o[0] == "string" ? o[0] : "currentColor"), l.push(typeof o[0] == "string" ? o[0] : "currentColor"), l.push("#FFF"), l.push("#FFF");
      break;
    case "two-tone":
      l.push(typeof o[0] == "string" ? o[0] : "currentColor"), l.push(typeof o[1] == "string" ? o[1] : n.colors.twoTone.twoTone), l.push(typeof o[0] == "string" ? o[0] : "currentColor"), l.push(typeof o[1] == "string" ? o[1] : n.colors.twoTone.twoTone);
      break;
    case "multi-color":
      l.push(typeof o[0] == "string" ? o[0] : "currentColor"), l.push(typeof o[1] == "string" ? o[1] : n.colors.multiColor.outFillColor), l.push(typeof o[2] == "string" ? o[2] : n.colors.multiColor.innerStrokeColor), l.push(typeof o[3] == "string" ? o[3] : n.colors.multiColor.innerFillColor);
      break;
  }
  return {
    size: t.size || n.size,
    strokeWidth: t.strokeWidth || n.strokeWidth,
    strokeLinecap: t.strokeLinecap || n.strokeLinecap,
    strokeLinejoin: t.strokeLinejoin || n.strokeLinejoin,
    colors: l,
    id: e
  };
}
var Wl = Symbol("icon-context");
function D(e, t, n) {
  var o = {
    name: "icon-" + e,
    props: ["size", "strokeWidth", "strokeLinecap", "strokeLinejoin", "theme", "fill", "spin"],
    setup: function(d) {
      var c = xl(), h = se(Wl, Sl);
      return function() {
        var v = d.size, g = d.strokeWidth, w = d.strokeLinecap, L = d.strokeLinejoin, T = d.theme, N = d.fill, R = d.spin, p = zl(c, {
          size: v,
          strokeWidth: g,
          strokeLinecap: w,
          strokeLinejoin: L,
          theme: T,
          fill: N
        }, h), _ = [h.prefix + "-icon"];
        return _.push(h.prefix + "-icon-" + e), t && h.rtl && _.push(h.prefix + "-icon-rtl"), R && _.push(h.prefix + "-icon-spin"), u("span", {
          class: _.join(" ")
        }, [n(p)]);
      };
    }
  };
  return o;
}
const Ol = D("back", !0, function(e) {
  return u("svg", {
    width: e.size,
    height: e.size,
    viewBox: "0 0 48 48",
    fill: "none"
  }, [u("path", {
    "fill-rule": "evenodd",
    "clip-rule": "evenodd",
    d: "M44 40.8361C39.1069 34.8632 34.7617 31.4739 30.9644 30.6682C27.1671 29.8625 23.5517 29.7408 20.1182 30.303V41L4 23.5453L20.1182 7V17.167C26.4667 17.2172 31.8638 19.4948 36.3095 24C40.7553 28.5052 43.3187 34.1172 44 40.8361Z",
    fill: e.colors[1],
    stroke: e.colors[0],
    "stroke-width": e.strokeWidth,
    "stroke-linejoin": e.strokeLinejoin
  }, null)]);
}), Ze = D("close-small", !1, function(e) {
  return u("svg", {
    width: e.size,
    height: e.size,
    viewBox: "0 0 48 48",
    fill: "none"
  }, [u("path", {
    d: "M14 14L34 34",
    stroke: e.colors[0],
    "stroke-width": e.strokeWidth,
    "stroke-linecap": e.strokeLinecap,
    "stroke-linejoin": e.strokeLinejoin
  }, null), u("path", {
    d: "M14 34L34 14",
    stroke: e.colors[0],
    "stroke-width": e.strokeWidth,
    "stroke-linecap": e.strokeLinecap,
    "stroke-linejoin": e.strokeLinejoin
  }, null)]);
}), vn = D("computer", !1, function(e) {
  return u("svg", {
    width: e.size,
    height: e.size,
    viewBox: "0 0 48 48",
    fill: "none"
  }, [u("rect", {
    x: "19",
    y: "32",
    width: "10",
    height: "9",
    stroke: e.colors[0],
    "stroke-width": e.strokeWidth,
    "stroke-linecap": e.strokeLinecap,
    "stroke-linejoin": e.strokeLinejoin
  }, null), u("rect", {
    x: "5",
    y: "8",
    width: "38",
    height: "24",
    rx: "2",
    fill: e.colors[1],
    stroke: e.colors[0],
    "stroke-width": e.strokeWidth
  }, null), u("path", {
    d: "M22 27H26",
    stroke: e.colors[2],
    "stroke-width": e.strokeWidth,
    "stroke-linecap": e.strokeLinecap,
    "stroke-linejoin": e.strokeLinejoin
  }, null), u("path", {
    d: "M14 41L34 41",
    stroke: e.colors[0],
    "stroke-width": e.strokeWidth,
    "stroke-linecap": e.strokeLinecap,
    "stroke-linejoin": e.strokeLinejoin
  }, null)]);
}), Pl = D("delete", !1, function(e) {
  return u("svg", {
    width: e.size,
    height: e.size,
    viewBox: "0 0 48 48",
    fill: "none"
  }, [u("path", {
    d: "M9 10V44H39V10H9Z",
    fill: e.colors[1],
    stroke: e.colors[0],
    "stroke-width": e.strokeWidth,
    "stroke-linejoin": e.strokeLinejoin
  }, null), u("path", {
    d: "M20 20V33",
    stroke: e.colors[2],
    "stroke-width": e.strokeWidth,
    "stroke-linecap": e.strokeLinecap,
    "stroke-linejoin": e.strokeLinejoin
  }, null), u("path", {
    d: "M28 20V33",
    stroke: e.colors[2],
    "stroke-width": e.strokeWidth,
    "stroke-linecap": e.strokeLinecap,
    "stroke-linejoin": e.strokeLinejoin
  }, null), u("path", {
    d: "M4 10H44",
    stroke: e.colors[0],
    "stroke-width": e.strokeWidth,
    "stroke-linecap": e.strokeLinecap,
    "stroke-linejoin": e.strokeLinejoin
  }, null), u("path", {
    d: "M16 10L19.289 4H28.7771L32 10H16Z",
    fill: e.colors[1],
    stroke: e.colors[0],
    "stroke-width": e.strokeWidth,
    "stroke-linejoin": e.strokeLinejoin
  }, null)]);
}), jl = D("download", !1, function(e) {
  return u("svg", {
    width: e.size,
    height: e.size,
    viewBox: "0 0 48 48",
    fill: "none"
  }, [u("path", {
    d: "M6 24.0083V42H42V24",
    stroke: e.colors[0],
    "stroke-width": e.strokeWidth,
    "stroke-linecap": e.strokeLinecap,
    "stroke-linejoin": e.strokeLinejoin
  }, null), u("path", {
    d: "M33 23L24 32L15 23",
    stroke: e.colors[0],
    "stroke-width": e.strokeWidth,
    "stroke-linecap": e.strokeLinecap,
    "stroke-linejoin": e.strokeLinejoin
  }, null), u("path", {
    d: "M23.9917 6V32",
    stroke: e.colors[0],
    "stroke-width": e.strokeWidth,
    "stroke-linecap": e.strokeLinecap,
    "stroke-linejoin": e.strokeLinejoin
  }, null)]);
}), yt = D("folder-open", !0, function(e) {
  return u("svg", {
    width: e.size,
    height: e.size,
    viewBox: "0 0 48 48",
    fill: "none"
  }, [u("path", {
    d: "M4 9V41L9 21H39.5V15C39.5 13.8954 38.6046 13 37.5 13H24L19 7H6C4.89543 7 4 7.89543 4 9Z",
    stroke: e.colors[0],
    "stroke-width": e.strokeWidth,
    "stroke-linecap": e.strokeLinecap,
    "stroke-linejoin": e.strokeLinejoin
  }, null), u("path", {
    d: "M40 41L44 21H8.8125L4 41H40Z",
    fill: e.colors[1],
    stroke: e.colors[0],
    "stroke-width": e.strokeWidth,
    "stroke-linecap": e.strokeLinecap,
    "stroke-linejoin": e.strokeLinejoin
  }, null)]);
}), Tl = D("lightning", !0, function(e) {
  return u("svg", {
    width: e.size,
    height: e.size,
    viewBox: "0 0 48 48",
    fill: "none"
  }, [u("path", {
    d: "M19 4H37L26 18H41L17 44L22 25H8L19 4Z",
    fill: e.colors[1],
    stroke: e.colors[0],
    "stroke-width": e.strokeWidth,
    "stroke-linejoin": e.strokeLinejoin
  }, null)]);
}), bt = D("picture", !0, function(e) {
  return u("svg", {
    width: e.size,
    height: e.size,
    viewBox: "0 0 48 48",
    fill: "none"
  }, [u("path", {
    d: "M39 6H9C7.34315 6 6 7.34315 6 9V39C6 40.6569 7.34315 42 9 42H39C40.6569 42 42 40.6569 42 39V9C42 7.34315 40.6569 6 39 6Z",
    stroke: e.colors[0],
    "stroke-width": e.strokeWidth,
    "stroke-linecap": e.strokeLinecap,
    "stroke-linejoin": e.strokeLinejoin
  }, null), u("path", {
    d: "M18 23C20.7614 23 23 20.7614 23 18C23 15.2386 20.7614 13 18 13C15.2386 13 13 15.2386 13 18C13 20.7614 15.2386 23 18 23Z",
    fill: e.colors[1],
    stroke: e.colors[0],
    "stroke-width": e.strokeWidth,
    "stroke-linecap": e.strokeLinecap,
    "stroke-linejoin": e.strokeLinejoin
  }, null), u("path", {
    d: "M27.7901 26.2194C28.6064 25.1269 30.2528 25.1538 31.0329 26.2725L39.8077 38.8561C40.7322 40.182 39.7835 42.0001 38.1671 42.0001H16L27.7901 26.2194Z",
    stroke: e.colors[0],
    "stroke-width": e.strokeWidth,
    "stroke-linecap": e.strokeLinecap,
    "stroke-linejoin": e.strokeLinejoin
  }, null)]);
}), Il = D("picture-album", !0, function(e) {
  return u("svg", {
    width: e.size,
    height: e.size,
    viewBox: "0 0 48 48",
    fill: "none"
  }, [u("rect", {
    x: "6",
    y: "6",
    width: "30",
    height: "30",
    rx: "2",
    fill: e.colors[1],
    stroke: e.colors[0],
    "stroke-width": e.strokeWidth,
    "stroke-linejoin": e.strokeLinejoin
  }, null), u("path", {
    d: "M42 12V39C42 40.6569 40.6569 42 39 42H12",
    stroke: e.colors[0],
    "stroke-width": e.strokeWidth,
    "stroke-linecap": e.strokeLinecap,
    "stroke-linejoin": e.strokeLinejoin
  }, null), u("path", {
    d: "M6 25L13.6562 18.1944C14.4204 17.5152 15.5738 17.5216 16.3303 18.2094L26 27",
    stroke: e.colors[2],
    "stroke-width": e.strokeWidth,
    "stroke-linecap": e.strokeLinecap,
    "stroke-linejoin": e.strokeLinejoin
  }, null), u("path", {
    d: "M22 23L26.7849 19.0125C27.4971 18.4191 28.5237 18.3928 29.2653 18.949L36 24",
    stroke: e.colors[2],
    "stroke-width": e.strokeWidth,
    "stroke-linecap": e.strokeLinecap,
    "stroke-linejoin": e.strokeLinejoin
  }, null), u("path", {
    d: "M6 19L6 27",
    stroke: e.colors[0],
    "stroke-width": e.strokeWidth,
    "stroke-linecap": e.strokeLinecap,
    "stroke-linejoin": e.strokeLinejoin
  }, null), u("path", {
    d: "M36 19V27",
    stroke: e.colors[0],
    "stroke-width": e.strokeWidth,
    "stroke-linecap": e.strokeLinecap,
    "stroke-linejoin": e.strokeLinejoin
  }, null)]);
}), Nl = D("pin", !0, function(e) {
  return u("svg", {
    width: e.size,
    height: e.size,
    viewBox: "0 0 48 48",
    fill: "none"
  }, [u("g", {
    "clip-path": "url(#" + e.id + "1c742167)"
  }, [u("path", {
    d: "M10.6963 17.5042C13.3347 14.8657 16.4701 14.9387 19.8781 16.8076L32.62 9.74509L31.8989 4.78683L43.2126 16.1005L38.2656 15.3907L31.1918 28.1214C32.9752 31.7589 33.1337 34.6647 30.4953 37.3032C30.4953 37.3032 26.235 33.0429 22.7171 29.525L6.44305 41.5564L18.4382 25.2461C14.9202 21.7281 10.6963 17.5042 10.6963 17.5042Z",
    fill: e.colors[1],
    stroke: e.colors[0],
    "stroke-width": e.strokeWidth,
    "stroke-linejoin": e.strokeLinejoin
  }, null)]), u("defs", null, [u("clipPath", {
    id: e.id + "1c742167"
  }, [u("rect", {
    width: "48",
    height: "48",
    fill: e.colors[2]
  }, null)])])]);
}), Ml = D("preview-open", !1, function(e) {
  return u("svg", {
    width: e.size,
    height: e.size,
    viewBox: "0 0 48 48",
    fill: "none"
  }, [u("path", {
    d: "M24 36C35.0457 36 44 24 44 24C44 24 35.0457 12 24 12C12.9543 12 4 24 4 24C4 24 12.9543 36 24 36Z",
    fill: e.colors[1],
    stroke: e.colors[0],
    "stroke-width": e.strokeWidth,
    "stroke-linejoin": e.strokeLinejoin
  }, null), u("path", {
    d: "M24 29C26.7614 29 29 26.7614 29 24C29 21.2386 26.7614 19 24 19C21.2386 19 19 21.2386 19 24C19 26.7614 21.2386 29 24 29Z",
    fill: e.colors[3],
    stroke: e.colors[2],
    "stroke-width": e.strokeWidth,
    "stroke-linejoin": e.strokeLinejoin
  }, null)]);
}), gn = D("refresh", !0, function(e) {
  return u("svg", {
    width: e.size,
    height: e.size,
    viewBox: "0 0 48 48",
    fill: "none"
  }, [u("path", {
    d: "M42 8V24",
    stroke: e.colors[0],
    "stroke-width": e.strokeWidth,
    "stroke-linecap": e.strokeLinecap,
    "stroke-linejoin": e.strokeLinejoin
  }, null), u("path", {
    d: "M6 24L6 40",
    stroke: e.colors[0],
    "stroke-width": e.strokeWidth,
    "stroke-linecap": e.strokeLinecap,
    "stroke-linejoin": e.strokeLinejoin
  }, null), u("path", {
    d: "M42 24C42 14.0589 33.9411 6 24 6C18.9145 6 14.3216 8.10896 11.0481 11.5M6 24C6 33.9411 14.0589 42 24 42C28.8556 42 33.2622 40.0774 36.5 36.9519",
    stroke: e.colors[0],
    "stroke-width": e.strokeWidth,
    "stroke-linecap": e.strokeLinecap,
    "stroke-linejoin": e.strokeLinejoin
  }, null)]);
}), $l = D("save", !0, function(e) {
  return u("svg", {
    width: e.size,
    height: e.size,
    viewBox: "0 0 48 48",
    fill: "none"
  }, [u("path", {
    d: "M6 9C6 7.34315 7.34315 6 9 6H34.2814L42 13.2065V39C42 40.6569 40.6569 42 39 42H9C7.34315 42 6 40.6569 6 39V9Z",
    fill: e.colors[1],
    stroke: e.colors[0],
    "stroke-width": e.strokeWidth,
    "stroke-linejoin": e.strokeLinejoin
  }, null), u("path", {
    "fill-rule": "evenodd",
    "clip-rule": "evenodd",
    d: "M24.0083 6L24 13.3846C24 13.7245 23.5523 14 23 14H15C14.4477 14 14 13.7245 14 13.3846L14 6",
    fill: e.colors[3]
  }, null), u("path", {
    d: "M24.0083 6L24 13.3846C24 13.7245 23.5523 14 23 14H15C14.4477 14 14 13.7245 14 13.3846L14 6H24.0083Z",
    stroke: e.colors[2],
    "stroke-width": e.strokeWidth,
    "stroke-linejoin": e.strokeLinejoin
  }, null), u("path", {
    d: "M9 6H34.2814",
    stroke: e.colors[0],
    "stroke-width": e.strokeWidth,
    "stroke-linecap": e.strokeLinecap,
    "stroke-linejoin": e.strokeLinejoin
  }, null), u("path", {
    d: "M14 26H34",
    stroke: e.colors[2],
    "stroke-width": e.strokeWidth,
    "stroke-linecap": e.strokeLinecap,
    "stroke-linejoin": e.strokeLinejoin
  }, null), u("path", {
    d: "M14 34H24.0083",
    stroke: e.colors[2],
    "stroke-width": e.strokeWidth,
    "stroke-linecap": e.strokeLinecap,
    "stroke-linejoin": e.strokeLinejoin
  }, null)]);
}), wn = D("search", !0, function(e) {
  return u("svg", {
    width: e.size,
    height: e.size,
    viewBox: "0 0 48 48",
    fill: "none"
  }, [u("path", {
    d: "M21 38C30.3888 38 38 30.3888 38 21C38 11.6112 30.3888 4 21 4C11.6112 4 4 11.6112 4 21C4 30.3888 11.6112 38 21 38Z",
    fill: e.colors[1],
    stroke: e.colors[0],
    "stroke-width": e.strokeWidth,
    "stroke-linejoin": e.strokeLinejoin
  }, null), u("path", {
    d: "M26.657 14.3431C25.2093 12.8954 23.2093 12 21.0001 12C18.791 12 16.791 12.8954 15.3433 14.3431",
    stroke: e.colors[2],
    "stroke-width": e.strokeWidth,
    "stroke-linecap": e.strokeLinecap,
    "stroke-linejoin": e.strokeLinejoin
  }, null), u("path", {
    d: "M33.2216 33.2217L41.7069 41.707",
    stroke: e.colors[0],
    "stroke-width": e.strokeWidth,
    "stroke-linecap": e.strokeLinecap,
    "stroke-linejoin": e.strokeLinejoin
  }, null)]);
}), El = D("time", !0, function(e) {
  return u("svg", {
    width: e.size,
    height: e.size,
    viewBox: "0 0 48 48",
    fill: "none"
  }, [u("path", {
    d: "M24 44C35.0457 44 44 35.0457 44 24C44 12.9543 35.0457 4 24 4C12.9543 4 4 12.9543 4 24C4 35.0457 12.9543 44 24 44Z",
    fill: e.colors[1],
    stroke: e.colors[0],
    "stroke-width": e.strokeWidth,
    "stroke-linejoin": e.strokeLinejoin
  }, null), u("path", {
    d: "M24.0084 12.0001L24.0072 24.0089L32.4866 32.4883",
    stroke: e.colors[2],
    "stroke-width": e.strokeWidth,
    "stroke-linecap": e.strokeLinecap,
    "stroke-linejoin": e.strokeLinejoin
  }, null)]);
}), Fl = { class: "wallpaper-window" }, Al = {
  class: "titlebar",
  "data-tauri-drag-region": ""
}, Dl = {
  key: 0,
  class: "title"
}, Rl = {
  key: 1,
  class: "title"
}, Hl = {
  key: 2,
  class: "window-actions"
}, Vl = {
  key: 3,
  class: "window-actions"
}, Bl = {
  class: "source-toggle",
  role: "tablist",
  "aria-label": "壁纸来源切换"
}, Ul = {
  key: 0,
  class: "unsupported"
}, Gl = { class: "top-panel" }, Zl = { class: "preview" }, Kl = ["src"], ql = {
  key: 1,
  class: "preview-empty"
}, Jl = { class: "status-panel" }, Ql = { class: "status-copy" }, Yl = { class: "wallpaper-name" }, Xl = { class: "status-list" }, ea = { class: "status-row" }, ta = { class: "status-row" }, na = { class: "status-row" }, oa = { class: "status-actions" }, sa = ["disabled"], ia = { class: "card settings-card" }, la = { class: "form-row mode-row" }, aa = { class: "segmented three" }, ra = { class: "form-row fixed-row" }, ua = { class: "form-row folder-row" }, ca = { class: "hint-row" }, da = { class: "form-row wallhaven-row" }, ha = { class: "segmented source" }, fa = { class: "hint-row" }, pa = { class: "card rules-card" }, va = { class: "rules-line" }, ga = { class: "switch-label" }, wa = { class: "number-label" }, ma = { class: "segmented mini" }, ya = { class: "rules-line" }, ba = { class: "segmented fit" }, _a = ["disabled"], ka = ["disabled"], Ca = ["disabled"], La = { class: "checkbox-label" }, Sa = { class: "footer-card" }, xa = { class: "cache-info" }, za = { class: "footer-actions" }, Wa = ["disabled"], Oa = ["disabled"], Pa = ["disabled"], ja = {
  key: 2,
  class: "wallhaven-view"
}, Ta = { class: "filters filters--preview-style" }, Ia = { class: "search-box wallhaven-search" }, Na = {
  class: "wallhaven-tabs",
  role: "tablist",
  "aria-label": "壁纸分类切换"
}, Ma = ["disabled"], $a = ["disabled"], Ea = ["disabled"], Fa = ["disabled"], Aa = { class: "wallhaven-meta" }, Da = { class: "grid-wrap" }, Ra = {
  key: 0,
  class: "empty-state"
}, Ha = {
  key: 1,
  class: "empty-state error-state"
}, Va = {
  key: 2,
  class: "empty-state"
}, Ba = {
  key: 3,
  class: "wallpaper-grid"
}, Ua = ["onClick"], Ga = {
  key: 0,
  class: "thumb-skeleton"
}, Za = ["alt", "onLoad"], Ka = ["onClick"], qa = ["disabled", "onClick"], Ja = ["disabled", "onClick"], Qa = { class: "pager" }, Ya = { class: "source-note" }, Xa = { class: "pager-actions" }, er = ["disabled"], tr = ["disabled"], nr = { class: "preview-dialog" }, or = { class: "preview-image-wrap" }, sr = {
  key: 0,
  class: "preview-skeleton"
}, ir = {
  key: 1,
  class: "preview-error"
}, lr = ["src"], ar = ["disabled"], rr = ["disabled"], ur = /* @__PURE__ */ A({
  __name: "index",
  setup(e) {
    const t = Sn(), n = C(fl()), o = C(null), l = C(null), d = C(!1), c = C(!1), h = C(!1), v = C(!1), g = C(!1), w = C(!1), L = Ll({
      config: n,
      refreshStatus: async () => {
        await ze();
      }
    }), {
      activeView: T,
      wallhavenPage: N,
      wallhavenLastPage: R,
      wallhavenLoading: p,
      wallhavenError: _,
      wallhavenKeyword: S,
      wallhavenCategory: U,
      wallhavenSource: x,
      previewWallpaper: M,
      previewLoading: q,
      previewLoadFailed: de,
      workingIds: O,
      loadedThumbIds: Me,
      wallhavenSourceLabel: $e,
      visibleWallpapers: X,
      openWallhavenGrid: he,
      backToSwitcher: Ee,
      openPreview: Fe,
      closePreview: fe,
      markPreviewLoaded: Q,
      markPreviewFailed: Ae,
      markThumbLoaded: ct,
      setThumbRef: dt,
      refreshWallhaven: ee,
      setWallhavenSource: pe,
      setWallhavenCategory: ve,
      setWallpaperFromWallhaven: xe,
      downloadWallpaperFromWallhaven: De,
      prevWallhavenPage: Re,
      nextWallhavenPage: He,
      setupListeners: ht
    } = L, Ve = y(() => pl(o.value?.currentPath || n.value.lastAppliedPath)), ft = y(() => {
      const m = o.value?.currentPath || n.value.lastAppliedPath;
      return m ? m.split(/[\\/]/).pop() || m : "暂无当前壁纸";
    }), Be = y(() => {
      const m = o.value?.screenWidth || 2560, i = o.value?.screenHeight || 1440;
      return `${m} × ${i}`;
    }), k = y(() => o.value?.currentResolution || Be.value), P = y(() => n.value.mode === "fixed" ? "固定图片" : n.value.mode === "wallhaven" ? "Wallhaven" : "本地文件夹"), E = y(() => {
      const m = o.value?.nextSwitchAt;
      if (!m) return "18 分钟后";
      const i = Math.max(0, m - Math.floor(Date.now() / 1e3));
      return i < 60 ? `${i} 秒后` : `${Math.ceil(i / 60)} 分钟后`;
    }), ne = y(() => {
      const m = o.value?.cacheSizeBytes ?? 0;
      return ao(m);
    }), $t = y(() => l.value ? `检测到 ${l.value.count} 张可用图片` : n.value.folderPath ? "尚未扫描文件夹" : "请选择本地壁纸文件夹"), Et = async () => {
      d.value = !0;
      try {
        const [m, i] = await Promise.all([
          hn(),
          fn()
        ]);
        if (n.value = m, o.value = i, m.folderPath)
          try {
            l.value = await pn(m.folderPath);
          } catch {
            l.value = null;
          }
      } catch (m) {
        j.msg(String(m), "error");
      } finally {
        d.value = !1;
      }
    }, ze = async () => {
      try {
        o.value = await fn();
      } catch (m) {
        j.msg(String(m), "error");
      }
    }, Ft = async () => {
      c.value = !0;
      try {
        await xt(n.value), await ze(), j.msg("壁纸设置已保存", "success");
      } catch (m) {
        j.msg(String(m), "error");
      } finally {
        c.value = !1;
      }
    }, to = async () => {
      const m = await Gt({
        multiple: !1,
        directory: !1,
        filters: [{ name: "Images", extensions: ["jpg", "jpeg", "png", "webp", "bmp"] }]
      });
      if (typeof m == "string") {
        n.value.fixedImagePath = m, n.value.mode = "fixed";
        try {
          await vl(m), await Et(), j.msg("已设置固定壁纸", "success");
        } catch (i) {
          j.msg(String(i), "error");
        }
      }
    }, no = async () => {
      const m = await Gt({ multiple: !1, directory: !0 });
      typeof m == "string" && (n.value.folderPath = m, n.value.mode = "folder", await At());
    }, At = async () => {
      if (!n.value.folderPath) {
        j.msg("请先选择壁纸文件夹", "warning");
        return;
      }
      try {
        l.value = await pn(n.value.folderPath), l.value.count === 0 ? j.msg("文件夹中没有可用图片", "warning") : j.msg($t.value, "success");
      } catch (m) {
        j.msg(String(m), "error");
      }
    }, oo = async () => {
      h.value = !0;
      try {
        await xt(n.value), await gl(), await ze(), j.msg("壁纸已切换", "success");
      } catch (m) {
        j.msg(String(m), "error");
      } finally {
        h.value = !1;
      }
    }, pt = async (m) => {
      n.value.fitMode = m, v.value = !0;
      try {
        await wl(m), await ze(), n.value = await hn(), j.msg("适配模式已应用", "success");
      } catch (i) {
        j.msg(String(i), "error");
      } finally {
        v.value = !1;
      }
    }, so = async () => {
      if (!o.value?.currentPath) {
        j.msg("当前没有可固定的壁纸", "warning");
        return;
      }
      n.value.mode = "fixed", n.value.fixedImagePath = o.value.currentPath, await Ft();
    }, io = async () => {
      g.value = !0;
      try {
        await _l(), await ze(), j.msg("缓存已清理", "success");
      } catch (m) {
        j.msg(String(m), "error");
      } finally {
        g.value = !1;
      }
    }, lo = async () => {
      w.value = !0;
      try {
        await Cl();
      } catch (m) {
        j.msg(String(m), "error");
      } finally {
        w.value = !1;
      }
    }, Dt = async () => {
      await t.close();
    }, ao = (m) => m < 1024 ? `${m} B` : m < 1024 * 1024 ? `${(m / 1024).toFixed(1)} KB` : m < 1024 * 1024 * 1024 ? `${(m / 1024 / 1024).toFixed(1)} MB` : `${(m / 1024 / 1024 / 1024).toFixed(1)} GB`;
    return Ne(async () => {
      await Et(), await ht();
    }), _n(() => {
    }), (m, i) => (b(), W("main", Fl, [
      a("header", Al, [
        s(T) === "switcher" ? (b(), W("div", Dl, [
          u(s(bt), { size: 18 }),
          i[40] || (i[40] = a(
            "span",
            null,
            "壁纸切换",
            -1
            /* HOISTED */
          ))
        ])) : (b(), W("div", Rl, [
          a("button", {
            type: "button",
            class: "flat-icon",
            title: "返回",
            onClick: i[0] || (i[0] = //@ts-ignore
            (...f) => s(Ee) && s(Ee)(...f))
          }, [
            u(s(Ol), { size: 20 })
          ]),
          i[41] || (i[41] = a(
            "span",
            null,
            "Wallhaven 壁纸",
            -1
            /* HOISTED */
          ))
        ])),
        s(T) === "switcher" ? (b(), W("div", Hl, [
          a("button", {
            type: "button",
            class: "icon-btn online-entry-btn",
            title: "打开 Wallhaven 壁纸",
            onClick: i[1] || (i[1] = //@ts-ignore
            (...f) => s(he) && s(he)(...f))
          }, [
            u(s(Il), { size: 18 })
          ]),
          a("button", {
            type: "button",
            class: "icon-btn",
            title: "关闭",
            onClick: Dt
          }, [
            u(s(Ze), { size: 20 })
          ])
        ])) : (b(), W("div", Vl, [
          a("div", Bl, [
            a(
              "div",
              {
                class: z(["seg-tab", { active: s(x) === "hot", disabled: s(p) }]),
                role: "tab",
                tabindex: "0",
                onClick: i[2] || (i[2] = (f) => !s(p) && s(pe)("hot")),
                onKeydown: i[3] || (i[3] = vt(me((f) => !s(p) && s(pe)("hot"), ["prevent"]), ["enter"]))
              },
              " 热门 ",
              34
              /* CLASS, NEED_HYDRATION */
            ),
            a(
              "div",
              {
                class: z(["seg-tab", { active: s(x) === "toplist", disabled: s(p) }]),
                role: "tab",
                tabindex: "0",
                onClick: i[4] || (i[4] = (f) => !s(p) && s(pe)("toplist")),
                onKeydown: i[5] || (i[5] = vt(me((f) => !s(p) && s(pe)("toplist"), ["prevent"]), ["enter"]))
              },
              " 排行榜 ",
              34
              /* CLASS, NEED_HYDRATION */
            )
          ]),
          a("button", {
            type: "button",
            class: "icon-btn",
            title: "关闭",
            onClick: Dt
          }, [
            u(s(Ze), { size: 20 })
          ])
        ]))
      ]),
      s(o) && !s(o).supported ? (b(), W("section", Ul, " 当前系统暂不支持桌面壁纸切换。此插件当前仅支持 Windows。 ")) : V("v-if", !0),
      s(T) === "switcher" ? (b(), W(
        "div",
        {
          key: 1,
          class: z(["content", { dimmed: s(d) }])
        },
        [
          a("section", Gl, [
            a("div", Zl, [
              s(Ve) ? (b(), W("img", {
                key: 0,
                src: s(Ve),
                alt: "当前壁纸预览"
              }, null, 8, Kl)) : (b(), W("div", ql, [
                u(s(bt), { size: 42 }),
                i[42] || (i[42] = a(
                  "span",
                  null,
                  "暂无当前壁纸",
                  -1
                  /* HOISTED */
                ))
              ]))
            ]),
            a("div", Jl, [
              a("div", Ql, [
                a("div", Yl, [
                  i[43] || (i[43] = a(
                    "span",
                    null,
                    "当前壁纸：",
                    -1
                    /* HOISTED */
                  )),
                  a(
                    "strong",
                    null,
                    I(s(ft)),
                    1
                    /* TEXT */
                  )
                ]),
                a("div", Xl, [
                  a("div", ea, [
                    u(s(yt), { size: 16 }),
                    i[44] || (i[44] = a(
                      "span",
                      null,
                      "来源：",
                      -1
                      /* HOISTED */
                    )),
                    a(
                      "strong",
                      null,
                      I(s(P)),
                      1
                      /* TEXT */
                    )
                  ]),
                  a("div", ta, [
                    u(s(vn), { size: 16 }),
                    i[45] || (i[45] = a(
                      "span",
                      null,
                      "分辨率：",
                      -1
                      /* HOISTED */
                    )),
                    a(
                      "strong",
                      null,
                      I(s(k)),
                      1
                      /* TEXT */
                    )
                  ]),
                  a("div", na, [
                    u(s(El), { size: 16 }),
                    i[46] || (i[46] = a(
                      "span",
                      null,
                      "下次切换：",
                      -1
                      /* HOISTED */
                    )),
                    a(
                      "strong",
                      null,
                      I(s(E)),
                      1
                      /* TEXT */
                    )
                  ])
                ])
              ]),
              a("div", oa, [
                a("button", {
                  type: "button",
                  class: "primary-btn",
                  disabled: s(h),
                  onClick: oo
                }, [
                  u(s(Tl), {
                    theme: "outline",
                    size: 14
                  }),
                  $(
                    " " + I(s(h) ? "切换中" : "立即切换"),
                    1
                    /* TEXT */
                  )
                ], 8, sa),
                a("button", {
                  type: "button",
                  class: "secondary-btn",
                  onClick: so
                }, [
                  u(s(Nl), {
                    theme: "outline",
                    size: 14
                  }),
                  i[47] || (i[47] = $(" 设为固定 "))
                ])
              ])
            ])
          ]),
          a("section", ia, [
            a("div", la, [
              i[48] || (i[48] = a(
                "span",
                { class: "row-label" },
                "模式",
                -1
                /* HOISTED */
              )),
              a("div", aa, [
                a(
                  "button",
                  {
                    type: "button",
                    class: z({ active: s(n).mode === "fixed" }),
                    onClick: i[6] || (i[6] = (f) => s(n).mode = "fixed")
                  },
                  " 固定图片 ",
                  2
                  /* CLASS */
                ),
                a(
                  "button",
                  {
                    type: "button",
                    class: z({ active: s(n).mode === "folder" }),
                    onClick: i[7] || (i[7] = (f) => s(n).mode = "folder")
                  },
                  " 本地文件夹 ",
                  2
                  /* CLASS */
                ),
                a(
                  "button",
                  {
                    type: "button",
                    class: z({ active: s(n).mode === "wallhaven" }),
                    onClick: i[8] || (i[8] = (f) => s(n).mode = "wallhaven")
                  },
                  " Wallhaven 在线 ",
                  2
                  /* CLASS */
                )
              ])
            ]),
            a("div", ra, [
              i[50] || (i[50] = a(
                "span",
                { class: "row-label" },
                "固定图片",
                -1
                /* HOISTED */
              )),
              J(a(
                "input",
                {
                  "onUpdate:modelValue": i[9] || (i[9] = (f) => s(n).fixedImagePath = f),
                  class: "path-input",
                  placeholder: "E:\\Wallpapers\\city.png",
                  spellcheck: "false"
                },
                null,
                512
                /* NEED_PATCH */
              ), [
                [Ue, s(n).fixedImagePath]
              ]),
              a("button", {
                type: "button",
                class: "tool-btn",
                onClick: to
              }, [
                u(s(bt), { size: 16 }),
                i[49] || (i[49] = $(" 选择图片 "))
              ])
            ]),
            a("div", ua, [
              i[53] || (i[53] = a(
                "span",
                { class: "row-label" },
                "本地文件夹",
                -1
                /* HOISTED */
              )),
              J(a(
                "input",
                {
                  "onUpdate:modelValue": i[10] || (i[10] = (f) => s(n).folderPath = f),
                  class: "path-input",
                  placeholder: "E:\\Wallpapers",
                  spellcheck: "false"
                },
                null,
                512
                /* NEED_PATCH */
              ), [
                [Ue, s(n).folderPath]
              ]),
              a("button", {
                type: "button",
                class: "tool-btn",
                onClick: no
              }, [
                u(s(yt), { size: 16 }),
                i[51] || (i[51] = $(" 选择 "))
              ]),
              a("button", {
                type: "button",
                class: "tool-btn",
                onClick: At
              }, [
                u(s(gn), { size: 16 }),
                i[52] || (i[52] = $(" 扫描 "))
              ])
            ]),
            a(
              "div",
              ca,
              I(s($t)),
              1
              /* TEXT */
            ),
            a("div", da, [
              i[55] || (i[55] = a(
                "span",
                { class: "row-label" },
                "Wallhaven",
                -1
                /* HOISTED */
              )),
              i[56] || (i[56] = a(
                "span",
                { class: "sub-label" },
                "来源",
                -1
                /* HOISTED */
              )),
              a("div", ha, [
                a(
                  "button",
                  {
                    type: "button",
                    class: z({ active: s(n).wallhavenSource === "hot" }),
                    onClick: i[11] || (i[11] = (f) => s(n).wallhavenSource = "hot")
                  },
                  " 热门 Hot ",
                  2
                  /* CLASS */
                ),
                a(
                  "button",
                  {
                    type: "button",
                    class: z({ active: s(n).wallhavenSource === "toplist" }),
                    onClick: i[12] || (i[12] = (f) => s(n).wallhavenSource = "toplist")
                  },
                  " 排行榜 Toplist ",
                  2
                  /* CLASS */
                )
              ]),
              a("button", {
                type: "button",
                class: "tool-btn grid-open",
                onClick: i[13] || (i[13] = //@ts-ignore
                (...f) => s(he) && s(he)(...f))
              }, [
                u(s(wn), { size: 16 }),
                i[54] || (i[54] = $(" 打开在线网格 "))
              ])
            ]),
            a("div", fa, [
              i[57] || (i[57] = a(
                "span",
                null,
                "屏幕匹配",
                -1
                /* HOISTED */
              )),
              a(
                "strong",
                null,
                I(s(Be)),
                1
                /* TEXT */
              )
            ])
          ]),
          a("section", pa, [
            a("div", va, [
              i[62] || (i[62] = a(
                "span",
                { class: "row-label" },
                "切换规则",
                -1
                /* HOISTED */
              )),
              a("label", ga, [
                i[58] || (i[58] = $(" 启用定时切换 ")),
                J(a(
                  "input",
                  {
                    "onUpdate:modelValue": i[14] || (i[14] = (f) => s(n).scheduleEnabled = f),
                    type: "checkbox"
                  },
                  null,
                  512
                  /* NEED_PATCH */
                ), [
                  [Rt, s(n).scheduleEnabled]
                ]),
                i[59] || (i[59] = a(
                  "span",
                  { class: "switch-control" },
                  null,
                  -1
                  /* HOISTED */
                ))
              ]),
              a("label", wa, [
                i[60] || (i[60] = $(" 每 ")),
                J(a(
                  "input",
                  {
                    "onUpdate:modelValue": i[15] || (i[15] = (f) => s(n).intervalMinutes = f),
                    type: "number",
                    min: "1",
                    max: "1440"
                  },
                  null,
                  512
                  /* NEED_PATCH */
                ), [
                  [
                    Ue,
                    s(n).intervalMinutes,
                    void 0,
                    { number: !0 }
                  ]
                ]),
                i[61] || (i[61] = $(" 分钟 "))
              ]),
              i[63] || (i[63] = a(
                "span",
                { class: "sub-label" },
                "顺序",
                -1
                /* HOISTED */
              )),
              a("div", ma, [
                a(
                  "button",
                  {
                    type: "button",
                    class: z({ active: s(n).order === "random" }),
                    onClick: i[16] || (i[16] = (f) => s(n).order = "random")
                  },
                  " 随机 ",
                  2
                  /* CLASS */
                ),
                a(
                  "button",
                  {
                    type: "button",
                    class: z({ active: s(n).order === "sequential" }),
                    onClick: i[17] || (i[17] = (f) => s(n).order = "sequential")
                  },
                  " 顺序 ",
                  2
                  /* CLASS */
                )
              ])
            ]),
            a("div", ya, [
              i[65] || (i[65] = a(
                "span",
                { class: "row-label compact" },
                "适配模式",
                -1
                /* HOISTED */
              )),
              a("div", ba, [
                a("button", {
                  type: "button",
                  class: z({ active: s(n).fitMode === "fillCrop" }),
                  disabled: s(v),
                  onClick: i[18] || (i[18] = (f) => pt("fillCrop"))
                }, " 填充裁切 ", 10, _a),
                a("button", {
                  type: "button",
                  class: z({ active: s(n).fitMode === "fit" }),
                  disabled: s(v),
                  onClick: i[19] || (i[19] = (f) => pt("fit"))
                }, " 适应 ", 10, ka),
                a("button", {
                  type: "button",
                  class: z({ active: s(n).fitMode === "center" }),
                  disabled: s(v),
                  onClick: i[20] || (i[20] = (f) => pt("center"))
                }, " 居中 ", 10, Ca)
              ]),
              a("label", La, [
                J(a(
                  "input",
                  {
                    "onUpdate:modelValue": i[21] || (i[21] = (f) => s(n).autoRestore = f),
                    type: "checkbox"
                  },
                  null,
                  512
                  /* NEED_PATCH */
                ), [
                  [Rt, s(n).autoRestore]
                ]),
                i[64] || (i[64] = $(" 启动后自动恢复定时任务 "))
              ])
            ])
          ]),
          a("footer", Sa, [
            a("div", xa, [
              i[66] || (i[66] = a(
                "strong",
                null,
                "缓存",
                -1
                /* HOISTED */
              )),
              i[67] || (i[67] = a(
                "span",
                null,
                "Wallhaven 缓存",
                -1
                /* HOISTED */
              )),
              a(
                "span",
                null,
                I(s(ne)),
                1
                /* TEXT */
              )
            ]),
            a("div", za, [
              a("button", {
                type: "button",
                class: "secondary-btn",
                disabled: s(g),
                onClick: io
              }, [
                u(s(Pl), { size: 16 }),
                $(
                  " " + I(s(g) ? "清理中" : "清理缓存"),
                  1
                  /* TEXT */
                )
              ], 8, Wa),
              a("button", {
                type: "button",
                class: "secondary-btn",
                disabled: s(w),
                onClick: lo
              }, [
                u(s(yt), { size: 16 }),
                $(
                  " " + I(s(w) ? "打开中" : "打开缓存"),
                  1
                  /* TEXT */
                )
              ], 8, Oa),
              a("button", {
                type: "button",
                class: "primary-btn",
                disabled: s(c),
                onClick: Ft
              }, [
                u(s($l), { size: 17 }),
                $(
                  " " + I(s(c) ? "保存中" : "保存设置"),
                  1
                  /* TEXT */
                )
              ], 8, Pa)
            ])
          ])
        ],
        2
        /* CLASS */
      )) : (b(), W("div", ja, [
        a("section", Ta, [
          a("div", Ia, [
            J(a(
              "input",
              {
                "onUpdate:modelValue": i[22] || (i[22] = (f) => yn(S) ? S.value = f : null),
                type: "text",
                placeholder: "搜索关键词",
                onKeydown: i[23] || (i[23] = vt(
                  //@ts-ignore
                  (...f) => s(ee) && s(ee)(...f),
                  ["enter"]
                ))
              },
              null,
              544
              /* NEED_HYDRATION, NEED_PATCH */
            ), [
              [Ue, s(S)]
            ]),
            u(s(wn), {
              size: 16,
              class: "search-icon"
            }),
            s(S) ? (b(), W("button", {
              key: 0,
              type: "button",
              class: "clear-btn",
              title: "清空",
              onClick: i[24] || (i[24] = (f) => S.value = "")
            }, [
              u(s(Ze), { size: 18 })
            ])) : V("v-if", !0)
          ]),
          a("div", Na, [
            a("button", {
              type: "button",
              class: z({ active: s(U) === "general" }),
              disabled: s(p),
              onClick: i[25] || (i[25] = (f) => s(ve)("general"))
            }, " 通用 ", 10, Ma),
            a("button", {
              type: "button",
              class: z({ active: s(U) === "anime" }),
              disabled: s(p),
              onClick: i[26] || (i[26] = (f) => s(ve)("anime"))
            }, " 动漫 ", 10, $a),
            a("button", {
              type: "button",
              class: z({ active: s(U) === "people" }),
              disabled: s(p),
              onClick: i[27] || (i[27] = (f) => s(ve)("people"))
            }, " 人物 ", 10, Ea),
            a("button", {
              type: "button",
              class: z({ active: s(U) === "nature" }),
              disabled: s(p),
              onClick: i[28] || (i[28] = (f) => s(ve)("nature"))
            }, " 自然 ", 10, Fa)
          ]),
          a("div", Aa, [
            a(
              "span",
              null,
              "自动匹配 " + I(s(Be)),
              1
              /* TEXT */
            ),
            a("button", {
              type: "button",
              class: "refresh-btn wallhaven-refresh",
              title: "刷新",
              onClick: i[29] || (i[29] = //@ts-ignore
              (...f) => s(ee) && s(ee)(...f))
            }, [
              u(s(gn), {
                size: 14,
                class: z({ spinning: s(p) })
              }, null, 8, ["class"])
            ])
          ])
        ]),
        a("section", Da, [
          s(p) && s(X).length === 0 ? (b(), W("div", Ra, "正在加载 Wallhaven 壁纸...")) : s(_) ? (b(), W("div", Ha, [
            a(
              "span",
              null,
              I(s(_)),
              1
              /* TEXT */
            ),
            a("button", {
              type: "button",
              onClick: i[30] || (i[30] = //@ts-ignore
              (...f) => s(ee) && s(ee)(...f))
            }, "重试")
          ])) : s(X).length === 0 ? (b(), W("div", Va, "暂无可用壁纸")) : (b(), W("div", Ba, [
            (b(!0), W(
              Wt,
              null,
              go(s(X), (f) => (b(), W("article", {
                key: f.id,
                class: "wallpaper-card"
              }, [
                a("button", {
                  type: "button",
                  class: "thumb",
                  onClick: (ge) => s(Fe)(f)
                }, [
                  s(Me).has(f.id) ? V("v-if", !0) : (b(), W("div", Ga)),
                  a("img", {
                    ref_for: !0,
                    ref: (ge) => s(dt)(f, ge),
                    alt: f.resolution,
                    loading: "lazy",
                    onLoad: (ge) => s(ct)(f.id)
                  }, null, 40, Za),
                  a(
                    "span",
                    null,
                    I(f.resolution),
                    1
                    /* TEXT */
                  )
                ], 8, Ua),
                a("div", {
                  class: "card-actions",
                  onClick: i[31] || (i[31] = me(() => {
                  }, ["stop"]))
                }, [
                  a("button", {
                    type: "button",
                    title: "预览",
                    onClick: (ge) => s(Fe)(f)
                  }, [
                    u(s(Ml), { size: 16 }),
                    i[68] || (i[68] = $(" 预览 "))
                  ], 8, Ka),
                  a("button", {
                    type: "button",
                    title: "设为壁纸",
                    disabled: s(O).has(f.id),
                    onClick: (ge) => s(xe)(f)
                  }, [
                    u(s(vn), { size: 16 }),
                    $(
                      " " + I(s(O).has(f.id) ? "设置中" : "设为"),
                      1
                      /* TEXT */
                    )
                  ], 8, qa),
                  a("button", {
                    type: "button",
                    title: "下载",
                    disabled: s(O).has(f.id),
                    onClick: (ge) => s(De)(f)
                  }, [
                    u(s(jl), { size: 16 }),
                    i[69] || (i[69] = $(" 下载 "))
                  ], 8, Ja)
                ])
              ]))),
              128
              /* KEYED_FRAGMENT */
            ))
          ]))
        ]),
        a("footer", Qa, [
          a(
            "span",
            null,
            "第 " + I(s(N)) + " 页",
            1
            /* TEXT */
          ),
          a(
            "span",
            Ya,
            "来源：" + I(s($e)) + " · SFW",
            1
            /* TEXT */
          ),
          a("div", Xa, [
            a("button", {
              type: "button",
              disabled: s(N) <= 1 || s(p),
              onClick: i[32] || (i[32] = //@ts-ignore
              (...f) => s(Re) && s(Re)(...f))
            }, "上一页", 8, er),
            a("button", {
              type: "button",
              disabled: s(N) >= s(R) || s(p),
              onClick: i[33] || (i[33] = //@ts-ignore
              (...f) => s(He) && s(He)(...f))
            }, "下一页", 8, tr)
          ])
        ])
      ])),
      s(M) ? (b(), W("div", {
        key: 3,
        class: "preview-modal",
        onClick: i[39] || (i[39] = me(
          //@ts-ignore
          (...f) => s(fe) && s(fe)(...f),
          ["self"]
        ))
      }, [
        a("div", nr, [
          a("header", null, [
            a(
              "strong",
              null,
              I(s(M).resolution),
              1
              /* TEXT */
            ),
            a("button", {
              type: "button",
              class: "flat-icon",
              onClick: i[34] || (i[34] = //@ts-ignore
              (...f) => s(fe) && s(fe)(...f))
            }, [
              u(s(Ze), { size: 23 })
            ])
          ]),
          a("div", or, [
            s(q) ? (b(), W("div", sr, i[70] || (i[70] = [
              a(
                "span",
                null,
                "加载预览...",
                -1
                /* HOISTED */
              )
            ]))) : V("v-if", !0),
            s(de) ? (b(), W("div", ir, "预览加载失败")) : V("v-if", !0),
            a("img", {
              class: z({ ready: !s(q) && !s(de) }),
              src: s(M).path,
              alt: "壁纸预览",
              onLoad: i[35] || (i[35] = //@ts-ignore
              (...f) => s(Q) && s(Q)(...f)),
              onError: i[36] || (i[36] = //@ts-ignore
              (...f) => s(Ae) && s(Ae)(...f))
            }, null, 42, lr)
          ]),
          a("footer", null, [
            a("button", {
              type: "button",
              class: "secondary-btn",
              disabled: s(O).has(s(M).id),
              onClick: i[37] || (i[37] = (f) => s(De)(s(M)))
            }, " 下载缓存 ", 8, ar),
            a("button", {
              type: "button",
              class: "primary-btn",
              disabled: s(O).has(s(M).id),
              onClick: i[38] || (i[38] = (f) => s(xe)(s(M)))
            }, I(s(O).has(s(M).id) ? "设置中" : "设为壁纸"), 9, rr)
          ])
        ])
      ])) : V("v-if", !0)
    ]));
  }
}), cr = (e, t) => {
  const n = e.__vccOpts || e;
  for (const [o, l] of t)
    n[o] = l;
  return n;
}, dr = /* @__PURE__ */ cr(ur, [["__scopeId", "data-v-66c7b815"]]), hr = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: dr
}, Symbol.toStringTag, { value: "Module" }));
export {
  pr as activate
};
