import * as gn from "vue";
import { inject as Ge, ref as U, shallowRef as ml, computed as D, watch as wt, onMounted as Lt, onUnmounted as Vn, defineComponent as ae, h as rr, createVNode as L, Text as gl, Fragment as Ke, getCurrentInstance as vt, unref as o, readonly as wl, getCurrentScope as vl, onScopeDispose as _l, nextTick as lr, isRef as sr, warn as bl, provide as yl, createElementBlock as z, openBlock as $, mergeProps as kl, renderSlot as _t, createElementVNode as m, normalizeClass as Z, Transition as Hn, withCtx as ot, withDirectives as Zt, normalizeStyle as Xt, createTextVNode as oe, toDisplayString as N, vShow as Jt, shallowReactive as Cl, createBlock as Se, createCommentVNode as we, resolveDynamicComponent as or, withModifiers as xt, isVNode as Ft, render as qt, renderList as Sn, withKeys as ir } from "vue";
const Uf = (e) => {
  e.registerRoute({
    target: "window",
    path: "/wallpaper-switcher",
    name: "WallpaperSwitcher",
    component: () => Promise.resolve().then(() => jf)
  }), e.registerWindowShortcut({
    label: "wallpaper_switcher"
  });
};
function Sl(e, t, n, a) {
  if (typeof t == "function" ? e !== t || !0 : !t.has(e)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
  return n === "m" ? a : n === "a" ? a.call(e) : a ? a.value : t.get(e);
}
function Ll(e, t, n, a, r) {
  if (typeof t == "function" ? e !== t || !0 : !t.has(e)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
  return t.set(e, n), n;
}
var Ht;
const ke = "__TAURI_TO_IPC_KEY__";
function El(e, t = !1) {
  return window.__TAURI_INTERNALS__.transformCallback(e, t);
}
async function T(e, t = {}, n) {
  return window.__TAURI_INTERNALS__.invoke(e, t, n);
}
function Tl(e, t = "asset") {
  return window.__TAURI_INTERNALS__.convertFileSrc(e, t);
}
class Il {
  get rid() {
    return Sl(this, Ht, "f");
  }
  constructor(t) {
    Ht.set(this, void 0), Ll(this, Ht, t);
  }
  /**
   * Destroys and cleans up this resource from memory.
   * **You should not call any method on this object anymore and should drop any reference to it.**
   */
  async close() {
    return T("plugin:resources|close", {
      rid: this.rid
    });
  }
}
Ht = /* @__PURE__ */ new WeakMap();
class cr {
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
    return new Ot(this.width * t, this.height * t);
  }
  [ke]() {
    return {
      width: this.width,
      height: this.height
    };
  }
  toJSON() {
    return this[ke]();
  }
}
class Ot {
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
    return new cr(this.width / t, this.height / t);
  }
  [ke]() {
    return {
      width: this.width,
      height: this.height
    };
  }
  toJSON() {
    return this[ke]();
  }
}
class mt {
  constructor(t) {
    this.size = t;
  }
  toLogical(t) {
    return this.size instanceof cr ? this.size : this.size.toLogical(t);
  }
  toPhysical(t) {
    return this.size instanceof Ot ? this.size : this.size.toPhysical(t);
  }
  [ke]() {
    return {
      [`${this.size.type}`]: {
        width: this.size.width,
        height: this.size.height
      }
    };
  }
  toJSON() {
    return this[ke]();
  }
}
class ur {
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
    return new He(this.x * t, this.y * t);
  }
  [ke]() {
    return {
      x: this.x,
      y: this.y
    };
  }
  toJSON() {
    return this[ke]();
  }
}
class He {
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
    return new ur(this.x / t, this.y / t);
  }
  [ke]() {
    return {
      x: this.x,
      y: this.y
    };
  }
  toJSON() {
    return this[ke]();
  }
}
class jt {
  constructor(t) {
    this.position = t;
  }
  toLogical(t) {
    return this.position instanceof ur ? this.position : this.position.toLogical(t);
  }
  toPhysical(t) {
    return this.position instanceof He ? this.position : this.position.toPhysical(t);
  }
  [ke]() {
    return {
      [`${this.position.type}`]: {
        x: this.position.x,
        y: this.position.y
      }
    };
  }
  toJSON() {
    return this[ke]();
  }
}
var _e;
(function(e) {
  e.WINDOW_RESIZED = "tauri://resize", e.WINDOW_MOVED = "tauri://move", e.WINDOW_CLOSE_REQUESTED = "tauri://close-requested", e.WINDOW_DESTROYED = "tauri://destroyed", e.WINDOW_FOCUS = "tauri://focus", e.WINDOW_BLUR = "tauri://blur", e.WINDOW_SCALE_FACTOR_CHANGED = "tauri://scale-change", e.WINDOW_THEME_CHANGED = "tauri://theme-changed", e.WINDOW_CREATED = "tauri://window-created", e.WEBVIEW_CREATED = "tauri://webview-created", e.DRAG_ENTER = "tauri://drag-enter", e.DRAG_OVER = "tauri://drag-over", e.DRAG_DROP = "tauri://drag-drop", e.DRAG_LEAVE = "tauri://drag-leave";
})(_e || (_e = {}));
async function dr(e, t) {
  await T("plugin:event|unlisten", {
    event: e,
    eventId: t
  });
}
async function Qt(e, t, n) {
  var a;
  const r = typeof n?.target == "string" ? { kind: "AnyLabel", label: n.target } : (a = n?.target) !== null && a !== void 0 ? a : { kind: "Any" };
  return T("plugin:event|listen", {
    event: e,
    target: r,
    handler: El(t)
  }).then((l) => async () => dr(e, l));
}
async function Nl(e, t, n) {
  return Qt(e, (a) => {
    dr(e, a.id), t(a);
  }, n);
}
async function Pl(e, t) {
  await T("plugin:event|emit", {
    event: e,
    payload: t
  });
}
async function Ol(e, t, n) {
  await T("plugin:event|emit_to", {
    target: typeof e == "string" ? { kind: "AnyLabel", label: e } : e,
    event: t,
    payload: n
  });
}
class At extends Il {
  /**
   * Creates an Image from a resource ID. For internal use only.
   *
   * @ignore
   */
  constructor(t) {
    super(t);
  }
  /** Creates a new Image using RGBA data, in row-major order from top to bottom, and with specified width and height. */
  static async new(t, n, a) {
    return T("plugin:image|new", {
      rgba: en(t),
      width: n,
      height: a
    }).then((r) => new At(r));
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
    return T("plugin:image|from_bytes", {
      bytes: en(t)
    }).then((n) => new At(n));
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
    return T("plugin:image|from_path", { path: t }).then((n) => new At(n));
  }
  /** Returns the RGBA data for this image, in row-major order from top to bottom.  */
  async rgba() {
    return T("plugin:image|rgba", {
      rid: this.rid
    }).then((t) => new Uint8Array(t));
  }
  /** Returns the size of this image.  */
  async size() {
    return T("plugin:image|size", { rid: this.rid });
  }
}
function en(e) {
  return e == null ? null : typeof e == "string" ? e : e instanceof At ? e.rid : e;
}
var Ln;
(function(e) {
  e[e.Critical = 1] = "Critical", e[e.Informational = 2] = "Informational";
})(Ln || (Ln = {}));
class Al {
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
var la;
(function(e) {
  e.None = "none", e.Normal = "normal", e.Indeterminate = "indeterminate", e.Paused = "paused", e.Error = "error";
})(la || (la = {}));
function fr() {
  return new hr(window.__TAURI_INTERNALS__.metadata.currentWindow.label, {
    // @ts-expect-error `skip` is not defined in the public API but it is handled by the constructor
    skip: !0
  });
}
async function wn() {
  return T("plugin:window|get_all_windows").then((e) => e.map((t) => new hr(t, {
    // @ts-expect-error `skip` is not defined in the public API but it is handled by the constructor
    skip: !0
  })));
}
const vn = ["tauri://created", "tauri://error"];
class hr {
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
    var a;
    this.label = t, this.listeners = /* @__PURE__ */ Object.create(null), n?.skip || T("plugin:window|create", {
      options: {
        ...n,
        parent: typeof n.parent == "string" ? n.parent : (a = n.parent) === null || a === void 0 ? void 0 : a.label,
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
    return (n = (await wn()).find((a) => a.label === t)) !== null && n !== void 0 ? n : null;
  }
  /**
   * Get an instance of `Window` for the current window.
   */
  static getCurrent() {
    return fr();
  }
  /**
   * Gets a list of instances of `Window` for all available windows.
   */
  static async getAll() {
    return wn();
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
    for (const t of await wn())
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
      const a = this.listeners[t];
      a.splice(a.indexOf(n), 1);
    } : Qt(t, n, {
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
      const a = this.listeners[t];
      a.splice(a.indexOf(n), 1);
    } : Nl(t, n, {
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
    if (vn.includes(t)) {
      for (const a of this.listeners[t] || [])
        a({
          event: t,
          id: -1,
          payload: n
        });
      return;
    }
    return Pl(t, n);
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
  async emitTo(t, n, a) {
    if (vn.includes(n)) {
      for (const r of this.listeners[n] || [])
        r({
          event: n,
          id: -1,
          payload: a
        });
      return;
    }
    return Ol(t, n, a);
  }
  /** @ignore */
  _handleTauriEvent(t, n) {
    return vn.includes(t) ? (t in this.listeners ? this.listeners[t].push(n) : this.listeners[t] = [n], !0) : !1;
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
    return T("plugin:window|scale_factor", {
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
    return T("plugin:window|inner_position", {
      label: this.label
    }).then((t) => new He(t));
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
    return T("plugin:window|outer_position", {
      label: this.label
    }).then((t) => new He(t));
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
    return T("plugin:window|inner_size", {
      label: this.label
    }).then((t) => new Ot(t));
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
    return T("plugin:window|outer_size", {
      label: this.label
    }).then((t) => new Ot(t));
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
    return T("plugin:window|is_fullscreen", {
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
    return T("plugin:window|is_minimized", {
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
    return T("plugin:window|is_maximized", {
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
    return T("plugin:window|is_focused", {
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
    return T("plugin:window|is_decorated", {
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
    return T("plugin:window|is_resizable", {
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
    return T("plugin:window|is_maximizable", {
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
    return T("plugin:window|is_minimizable", {
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
    return T("plugin:window|is_closable", {
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
    return T("plugin:window|is_visible", {
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
    return T("plugin:window|title", {
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
    return T("plugin:window|theme", {
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
    return T("plugin:window|is_always_on_top", {
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
    return T("plugin:window|center", {
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
    return t && (t === Ln.Critical ? n = { type: "Critical" } : n = { type: "Informational" }), T("plugin:window|request_user_attention", {
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
    return T("plugin:window|set_resizable", {
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
    return T("plugin:window|set_enabled", {
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
    return T("plugin:window|is_enabled", {
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
    return T("plugin:window|set_maximizable", {
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
    return T("plugin:window|set_minimizable", {
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
    return T("plugin:window|set_closable", {
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
    return T("plugin:window|set_title", {
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
    return T("plugin:window|maximize", {
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
    return T("plugin:window|unmaximize", {
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
    return T("plugin:window|toggle_maximize", {
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
    return T("plugin:window|minimize", {
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
    return T("plugin:window|unminimize", {
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
    return T("plugin:window|show", {
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
    return T("plugin:window|hide", {
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
    return T("plugin:window|close", {
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
    return T("plugin:window|destroy", {
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
    return T("plugin:window|set_decorations", {
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
    return T("plugin:window|set_shadow", {
      label: this.label,
      value: t
    });
  }
  /**
   * Set window effects.
   */
  async setEffects(t) {
    return T("plugin:window|set_effects", {
      label: this.label,
      value: t
    });
  }
  /**
   * Clear any applied effects if possible.
   */
  async clearEffects() {
    return T("plugin:window|set_effects", {
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
    return T("plugin:window|set_always_on_top", {
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
    return T("plugin:window|set_always_on_bottom", {
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
    return T("plugin:window|set_content_protected", {
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
    return T("plugin:window|set_size", {
      label: this.label,
      value: t instanceof mt ? t : new mt(t)
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
    return T("plugin:window|set_min_size", {
      label: this.label,
      value: t instanceof mt ? t : t ? new mt(t) : null
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
    return T("plugin:window|set_max_size", {
      label: this.label,
      value: t instanceof mt ? t : t ? new mt(t) : null
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
    function n(a) {
      return a ? { Logical: a } : null;
    }
    return T("plugin:window|set_size_constraints", {
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
    return T("plugin:window|set_position", {
      label: this.label,
      value: t instanceof jt ? t : new jt(t)
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
    return T("plugin:window|set_fullscreen", {
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
    return T("plugin:window|set_focus", {
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
    return T("plugin:window|set_icon", {
      label: this.label,
      value: en(t)
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
    return T("plugin:window|set_skip_taskbar", {
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
    return T("plugin:window|set_cursor_grab", {
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
    return T("plugin:window|set_cursor_visible", {
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
    return T("plugin:window|set_cursor_icon", {
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
    return T("plugin:window|set_background_color", { color: t });
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
    return T("plugin:window|set_cursor_position", {
      label: this.label,
      value: t instanceof jt ? t : new jt(t)
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
    return T("plugin:window|set_ignore_cursor_events", {
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
    return T("plugin:window|start_dragging", {
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
    return T("plugin:window|start_resize_dragging", {
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
    return T("plugin:window|set_badge_count", {
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
    return T("plugin:window|set_badge_label", {
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
    return T("plugin:window|set_overlay_icon", {
      label: this.label,
      value: t ? en(t) : void 0
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
    return T("plugin:window|set_progress_bar", {
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
    return T("plugin:window|set_visible_on_all_workspaces", {
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
    return T("plugin:window|set_title_bar_style", {
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
    return T("plugin:window|set_theme", {
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
    return this.listen(_e.WINDOW_RESIZED, (n) => {
      n.payload = new Ot(n.payload), t(n);
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
    return this.listen(_e.WINDOW_MOVED, (n) => {
      n.payload = new He(n.payload), t(n);
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
    return this.listen(_e.WINDOW_CLOSE_REQUESTED, async (n) => {
      const a = new Al(n);
      await t(a), a.isPreventDefault() || await this.destroy();
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
    const n = await this.listen(_e.DRAG_ENTER, (s) => {
      t({
        ...s,
        payload: {
          type: "enter",
          paths: s.payload.paths,
          position: new He(s.payload.position)
        }
      });
    }), a = await this.listen(_e.DRAG_OVER, (s) => {
      t({
        ...s,
        payload: {
          type: "over",
          position: new He(s.payload.position)
        }
      });
    }), r = await this.listen(_e.DRAG_DROP, (s) => {
      t({
        ...s,
        payload: {
          type: "drop",
          paths: s.payload.paths,
          position: new He(s.payload.position)
        }
      });
    }), l = await this.listen(_e.DRAG_LEAVE, (s) => {
      t({ ...s, payload: { type: "leave" } });
    });
    return () => {
      n(), r(), a(), l();
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
    const n = await this.listen(_e.WINDOW_FOCUS, (r) => {
      t({ ...r, payload: !0 });
    }), a = await this.listen(_e.WINDOW_BLUR, (r) => {
      t({ ...r, payload: !1 });
    });
    return () => {
      n(), a();
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
    return this.listen(_e.WINDOW_SCALE_FACTOR_CHANGED, t);
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
    return this.listen(_e.WINDOW_THEME_CHANGED, t);
  }
}
var sa;
(function(e) {
  e.Disabled = "disabled", e.Throttle = "throttle", e.Suspend = "suspend";
})(sa || (sa = {}));
var oa;
(function(e) {
  e.AppearanceBased = "appearanceBased", e.Light = "light", e.Dark = "dark", e.MediumLight = "mediumLight", e.UltraDark = "ultraDark", e.Titlebar = "titlebar", e.Selection = "selection", e.Menu = "menu", e.Popover = "popover", e.Sidebar = "sidebar", e.HeaderView = "headerView", e.Sheet = "sheet", e.WindowBackground = "windowBackground", e.HudWindow = "hudWindow", e.FullScreenUI = "fullScreenUI", e.Tooltip = "tooltip", e.ContentBackground = "contentBackground", e.UnderWindowBackground = "underWindowBackground", e.UnderPageBackground = "underPageBackground", e.Mica = "mica", e.Blur = "blur", e.Acrylic = "acrylic", e.Tabbed = "tabbed", e.TabbedDark = "tabbedDark", e.TabbedLight = "tabbedLight";
})(oa || (oa = {}));
var ia;
(function(e) {
  e.FollowsWindowActiveState = "followsWindowActiveState", e.Active = "active", e.Inactive = "inactive";
})(ia || (ia = {}));
async function ca(e = {}) {
  return typeof e == "object" && Object.freeze(e), await T("plugin:dialog|open", { options: e });
}
/*!
  * shared v11.2.2
  * (c) 2025 kazuya kawaguchi
  * Released under the MIT License.
  */
function Fl(e, t) {
  typeof console < "u" && (console.warn("[intlify] " + e), t && console.warn(t.stack));
}
const ua = typeof window < "u", dt = (e, t = !1) => t ? Symbol.for(e) : Symbol(e), Ml = (e, t, n) => Wl({ l: e, k: t, s: n }), Wl = (e) => JSON.stringify(e).replace(/\u2028/g, "\\u2028").replace(/\u2029/g, "\\u2029").replace(/\u0027/g, "\\u0027"), ce = (e) => typeof e == "number" && isFinite(e), Rl = (e) => Gn(e) === "[object Date]", tn = (e) => Gn(e) === "[object RegExp]", cn = (e) => H(e) && Object.keys(e).length === 0, de = Object.assign, $l = Object.create, X = (e = null) => $l(e);
let da;
const Gt = () => da || (da = typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : typeof window < "u" ? window : typeof global < "u" ? global : X());
function fa(e) {
  return e.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;").replace(/'/g, "&apos;").replace(/\//g, "&#x2F;").replace(/=/g, "&#x3D;");
}
function ha(e) {
  return e.replace(/&(?![a-zA-Z0-9#]{2,6};)/g, "&amp;").replace(/"/g, "&quot;").replace(/'/g, "&apos;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
}
function Dl(e) {
  return e = e.replace(/(\w+)\s*=\s*"([^"]*)"/g, (a, r, l) => `${r}="${ha(l)}"`), e = e.replace(/(\w+)\s*=\s*'([^']*)'/g, (a, r, l) => `${r}='${ha(l)}'`), /\s*on\w+\s*=\s*["']?[^"'>]+["']?/gi.test(e) && (e = e.replace(/(\s+)(on)(\w+\s*=)/gi, "$1&#111;n$3")), [
    // In href, src, action, formaction attributes
    /(\s+(?:href|src|action|formaction)\s*=\s*["']?)\s*javascript:/gi,
    // In style attributes within url()
    /(style\s*=\s*["'][^"']*url\s*\(\s*)javascript:/gi
  ].forEach((a) => {
    e = e.replace(a, "$1javascript&#58;");
  }), e;
}
const xl = Object.prototype.hasOwnProperty;
function Le(e, t) {
  return xl.call(e, t);
}
const se = Array.isArray, ne = (e) => typeof e == "function", M = (e) => typeof e == "string", le = (e) => typeof e == "boolean", G = (e) => e !== null && typeof e == "object", jl = (e) => G(e) && ne(e.then) && ne(e.catch), pr = Object.prototype.toString, Gn = (e) => pr.call(e), H = (e) => Gn(e) === "[object Object]", zl = (e) => e == null ? "" : se(e) || H(e) && e.toString === pr ? JSON.stringify(e, null, 2) : String(e);
function Kn(e, t = "") {
  return e.reduce((n, a, r) => r === 0 ? n + a : n + t + a, "");
}
const zt = (e) => !G(e) || se(e);
function Kt(e, t) {
  if (zt(e) || zt(t))
    throw new Error("Invalid value");
  const n = [{ src: e, des: t }];
  for (; n.length; ) {
    const { src: a, des: r } = n.pop();
    Object.keys(a).forEach((l) => {
      l !== "__proto__" && (G(a[l]) && !G(r[l]) && (r[l] = Array.isArray(a[l]) ? [] : X()), zt(r[l]) || zt(a[l]) ? r[l] = a[l] : n.push({ src: a[l], des: r[l] }));
    });
  }
}
/*!
  * message-compiler v11.2.2
  * (c) 2025 kazuya kawaguchi
  * Released under the MIT License.
  */
function Ul(e, t, n) {
  return { line: e, column: t, offset: n };
}
function En(e, t, n) {
  return { start: e, end: t };
}
const B = {
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
  UNEXPECTED_LEXICAL_ANALYSIS: 14
}, Vl = 17;
function un(e, t, n = {}) {
  const { domain: a, messages: r, args: l } = n, s = e, i = new SyntaxError(String(s));
  return i.code = e, t && (i.location = t), i.domain = a, i;
}
function Hl(e) {
  throw e;
}
const Te = " ", Gl = "\r", he = `
`, Kl = "\u2028", Bl = "\u2029";
function Yl(e) {
  const t = e;
  let n = 0, a = 1, r = 1, l = 0;
  const s = (y) => t[y] === Gl && t[y + 1] === he, i = (y) => t[y] === he, u = (y) => t[y] === Bl, p = (y) => t[y] === Kl, v = (y) => s(y) || i(y) || u(y) || p(y), C = () => n, E = () => a, P = () => r, W = () => l, b = (y) => s(y) || u(y) || p(y) ? he : t[y], h = () => b(n), d = () => b(n + l);
  function w() {
    return l = 0, v(n) && (a++, r = 0), s(n) && n++, n++, r++, t[n];
  }
  function k() {
    return s(n + l) && l++, l++, t[n + l];
  }
  function _() {
    n = 0, a = 1, r = 1, l = 0;
  }
  function O(y = 0) {
    l = y;
  }
  function A() {
    const y = n + l;
    for (; y !== n; )
      w();
    l = 0;
  }
  return {
    index: C,
    line: E,
    column: P,
    peekOffset: W,
    charAt: b,
    currentChar: h,
    currentPeek: d,
    next: w,
    peek: k,
    reset: _,
    resetPeek: O,
    skipToPeek: A
  };
}
const Ae = void 0, Zl = ".", pa = "'", Xl = "tokenizer";
function Jl(e, t = {}) {
  const n = t.location !== !1, a = Yl(e), r = () => a.index(), l = () => Ul(a.line(), a.column(), a.index()), s = l(), i = r(), u = {
    currentType: 13,
    offset: i,
    startLoc: s,
    endLoc: s,
    lastType: 13,
    lastOffset: i,
    lastStartLoc: s,
    lastEndLoc: s,
    braceNest: 0,
    inLinked: !1,
    text: ""
  }, p = () => u, { onError: v } = t;
  function C(c, f, S, ...F) {
    const J = p();
    if (f.column += S, f.offset += S, v) {
      const j = n ? En(J.startLoc, f) : null, g = un(c, j, {
        domain: Xl,
        args: F
      });
      v(g);
    }
  }
  function E(c, f, S) {
    c.endLoc = l(), c.currentType = f;
    const F = { type: f };
    return n && (F.loc = En(c.startLoc, c.endLoc)), S != null && (F.value = S), F;
  }
  const P = (c) => E(
    c,
    13
    /* TokenTypes.EOF */
  );
  function W(c, f) {
    return c.currentChar() === f ? (c.next(), f) : (C(B.EXPECTED_TOKEN, l(), 0, f), "");
  }
  function b(c) {
    let f = "";
    for (; c.currentPeek() === Te || c.currentPeek() === he; )
      f += c.currentPeek(), c.peek();
    return f;
  }
  function h(c) {
    const f = b(c);
    return c.skipToPeek(), f;
  }
  function d(c) {
    if (c === Ae)
      return !1;
    const f = c.charCodeAt(0);
    return f >= 97 && f <= 122 || // a-z
    f >= 65 && f <= 90 || // A-Z
    f === 95;
  }
  function w(c) {
    if (c === Ae)
      return !1;
    const f = c.charCodeAt(0);
    return f >= 48 && f <= 57;
  }
  function k(c, f) {
    const { currentType: S } = f;
    if (S !== 2)
      return !1;
    b(c);
    const F = d(c.currentPeek());
    return c.resetPeek(), F;
  }
  function _(c, f) {
    const { currentType: S } = f;
    if (S !== 2)
      return !1;
    b(c);
    const F = c.currentPeek() === "-" ? c.peek() : c.currentPeek(), J = w(F);
    return c.resetPeek(), J;
  }
  function O(c, f) {
    const { currentType: S } = f;
    if (S !== 2)
      return !1;
    b(c);
    const F = c.currentPeek() === pa;
    return c.resetPeek(), F;
  }
  function A(c, f) {
    const { currentType: S } = f;
    if (S !== 7)
      return !1;
    b(c);
    const F = c.currentPeek() === ".";
    return c.resetPeek(), F;
  }
  function y(c, f) {
    const { currentType: S } = f;
    if (S !== 8)
      return !1;
    b(c);
    const F = d(c.currentPeek());
    return c.resetPeek(), F;
  }
  function q(c, f) {
    const { currentType: S } = f;
    if (!(S === 7 || S === 11))
      return !1;
    b(c);
    const F = c.currentPeek() === ":";
    return c.resetPeek(), F;
  }
  function Q(c, f) {
    const { currentType: S } = f;
    if (S !== 9)
      return !1;
    const F = () => {
      const j = c.currentPeek();
      return j === "{" ? d(c.peek()) : j === "@" || j === "|" || j === ":" || j === "." || j === Te || !j ? !1 : j === he ? (c.peek(), F()) : ue(c, !1);
    }, J = F();
    return c.resetPeek(), J;
  }
  function ie(c) {
    b(c);
    const f = c.currentPeek() === "|";
    return c.resetPeek(), f;
  }
  function ue(c, f = !0) {
    const S = (J = !1, j = "") => {
      const g = c.currentPeek();
      return g === "{" || g === "@" || !g ? J : g === "|" ? !(j === Te || j === he) : g === Te ? (c.peek(), S(!0, Te)) : g === he ? (c.peek(), S(!0, he)) : !0;
    }, F = S();
    return f && c.resetPeek(), F;
  }
  function ee(c, f) {
    const S = c.currentChar();
    return S === Ae ? Ae : f(S) ? (c.next(), S) : null;
  }
  function Ze(c) {
    const f = c.charCodeAt(0);
    return f >= 97 && f <= 122 || // a-z
    f >= 65 && f <= 90 || // A-Z
    f >= 48 && f <= 57 || // 0-9
    f === 95 || // _
    f === 36;
  }
  function Re(c) {
    return ee(c, Ze);
  }
  function Xe(c) {
    const f = c.charCodeAt(0);
    return f >= 97 && f <= 122 || // a-z
    f >= 65 && f <= 90 || // A-Z
    f >= 48 && f <= 57 || // 0-9
    f === 95 || // _
    f === 36 || // $
    f === 45;
  }
  function ye(c) {
    return ee(c, Xe);
  }
  function Je(c) {
    const f = c.charCodeAt(0);
    return f >= 48 && f <= 57;
  }
  function qe(c) {
    return ee(c, Je);
  }
  function ve(c) {
    const f = c.charCodeAt(0);
    return f >= 48 && f <= 57 || // 0-9
    f >= 65 && f <= 70 || // A-F
    f >= 97 && f <= 102;
  }
  function $e(c) {
    return ee(c, ve);
  }
  function De(c) {
    let f = "", S = "";
    for (; f = qe(c); )
      S += f;
    return S;
  }
  function xe(c) {
    let f = "";
    for (; ; ) {
      const S = c.currentChar();
      if (S === "{" || S === "}" || S === "@" || S === "|" || !S)
        break;
      if (S === Te || S === he)
        if (ue(c))
          f += S, c.next();
        else {
          if (ie(c))
            break;
          f += S, c.next();
        }
      else
        f += S, c.next();
    }
    return f;
  }
  function Qe(c) {
    h(c);
    let f = "", S = "";
    for (; f = ye(c); )
      S += f;
    const F = c.currentChar();
    if (F && F !== "}" && F !== Ae && F !== Te && F !== he && F !== "　") {
      const J = rt(c);
      return C(B.INVALID_TOKEN_IN_PLACEHOLDER, l(), 0, S + J), S + J;
    }
    return c.currentChar() === Ae && C(B.UNTERMINATED_CLOSING_BRACE, l(), 0), S;
  }
  function et(c) {
    h(c);
    let f = "";
    return c.currentChar() === "-" ? (c.next(), f += `-${De(c)}`) : f += De(c), c.currentChar() === Ae && C(B.UNTERMINATED_CLOSING_BRACE, l(), 0), f;
  }
  function tt(c) {
    return c !== pa && c !== he;
  }
  function je(c) {
    h(c), W(c, "'");
    let f = "", S = "";
    for (; f = ee(c, tt); )
      f === "\\" ? S += nt(c) : S += f;
    const F = c.currentChar();
    return F === he || F === Ae ? (C(B.UNTERMINATED_SINGLE_QUOTE_IN_PLACEHOLDER, l(), 0), F === he && (c.next(), W(c, "'")), S) : (W(c, "'"), S);
  }
  function nt(c) {
    const f = c.currentChar();
    switch (f) {
      case "\\":
      case "'":
        return c.next(), `\\${f}`;
      case "u":
        return ze(c, f, 4);
      case "U":
        return ze(c, f, 6);
      default:
        return C(B.UNKNOWN_ESCAPE_SEQUENCE, l(), 0, f), "";
    }
  }
  function ze(c, f, S) {
    W(c, f);
    let F = "";
    for (let J = 0; J < S; J++) {
      const j = $e(c);
      if (!j) {
        C(B.INVALID_UNICODE_ESCAPE_SEQUENCE, l(), 0, `\\${f}${F}${c.currentChar()}`);
        break;
      }
      F += j;
    }
    return `\\${f}${F}`;
  }
  function at(c) {
    return c !== "{" && c !== "}" && c !== Te && c !== he;
  }
  function rt(c) {
    h(c);
    let f = "", S = "";
    for (; f = ee(c, at); )
      S += f;
    return S;
  }
  function x(c) {
    let f = "", S = "";
    for (; f = Re(c); )
      S += f;
    return S;
  }
  function V(c) {
    const f = (S) => {
      const F = c.currentChar();
      return F === "{" || F === "@" || F === "|" || F === "(" || F === ")" || !F || F === Te ? S : (S += F, c.next(), f(S));
    };
    return f("");
  }
  function re(c) {
    h(c);
    const f = W(
      c,
      "|"
      /* TokenChars.Pipe */
    );
    return h(c), f;
  }
  function me(c, f) {
    let S = null;
    switch (c.currentChar()) {
      case "{":
        return f.braceNest >= 1 && C(B.NOT_ALLOW_NEST_PLACEHOLDER, l(), 0), c.next(), S = E(
          f,
          2,
          "{"
          /* TokenChars.BraceLeft */
        ), h(c), f.braceNest++, S;
      case "}":
        return f.braceNest > 0 && f.currentType === 2 && C(B.EMPTY_PLACEHOLDER, l(), 0), c.next(), S = E(
          f,
          3,
          "}"
          /* TokenChars.BraceRight */
        ), f.braceNest--, f.braceNest > 0 && h(c), f.inLinked && f.braceNest === 0 && (f.inLinked = !1), S;
      case "@":
        return f.braceNest > 0 && C(B.UNTERMINATED_CLOSING_BRACE, l(), 0), S = Ue(c, f) || P(f), f.braceNest = 0, S;
      default: {
        let J = !0, j = !0, g = !0;
        if (ie(c))
          return f.braceNest > 0 && C(B.UNTERMINATED_CLOSING_BRACE, l(), 0), S = E(f, 1, re(c)), f.braceNest = 0, f.inLinked = !1, S;
        if (f.braceNest > 0 && (f.currentType === 4 || f.currentType === 5 || f.currentType === 6))
          return C(B.UNTERMINATED_CLOSING_BRACE, l(), 0), f.braceNest = 0, lt(c, f);
        if (J = k(c, f))
          return S = E(f, 4, Qe(c)), h(c), S;
        if (j = _(c, f))
          return S = E(f, 5, et(c)), h(c), S;
        if (g = O(c, f))
          return S = E(f, 6, je(c)), h(c), S;
        if (!J && !j && !g)
          return S = E(f, 12, rt(c)), C(B.INVALID_TOKEN_IN_PLACEHOLDER, l(), 0, S.value), h(c), S;
        break;
      }
    }
    return S;
  }
  function Ue(c, f) {
    const { currentType: S } = f;
    let F = null;
    const J = c.currentChar();
    switch ((S === 7 || S === 8 || S === 11 || S === 9) && (J === he || J === Te) && C(B.INVALID_LINKED_FORMAT, l(), 0), J) {
      case "@":
        return c.next(), F = E(
          f,
          7,
          "@"
          /* TokenChars.LinkedAlias */
        ), f.inLinked = !0, F;
      case ".":
        return h(c), c.next(), E(
          f,
          8,
          "."
          /* TokenChars.LinkedDot */
        );
      case ":":
        return h(c), c.next(), E(
          f,
          9,
          ":"
          /* TokenChars.LinkedDelimiter */
        );
      default:
        return ie(c) ? (F = E(f, 1, re(c)), f.braceNest = 0, f.inLinked = !1, F) : A(c, f) || q(c, f) ? (h(c), Ue(c, f)) : y(c, f) ? (h(c), E(f, 11, x(c))) : Q(c, f) ? (h(c), J === "{" ? me(c, f) || F : E(f, 10, V(c))) : (S === 7 && C(B.INVALID_LINKED_FORMAT, l(), 0), f.braceNest = 0, f.inLinked = !1, lt(c, f));
    }
  }
  function lt(c, f) {
    let S = {
      type: 13
      /* TokenTypes.EOF */
    };
    if (f.braceNest > 0)
      return me(c, f) || P(f);
    if (f.inLinked)
      return Ue(c, f) || P(f);
    switch (c.currentChar()) {
      case "{":
        return me(c, f) || P(f);
      case "}":
        return C(B.UNBALANCED_CLOSING_BRACE, l(), 0), c.next(), E(
          f,
          3,
          "}"
          /* TokenChars.BraceRight */
        );
      case "@":
        return Ue(c, f) || P(f);
      default: {
        if (ie(c))
          return S = E(f, 1, re(c)), f.braceNest = 0, f.inLinked = !1, S;
        if (ue(c))
          return E(f, 0, xe(c));
        break;
      }
    }
    return S;
  }
  function It() {
    const { currentType: c, offset: f, startLoc: S, endLoc: F } = u;
    return u.lastType = c, u.lastOffset = f, u.lastStartLoc = S, u.lastEndLoc = F, u.offset = r(), u.startLoc = l(), a.currentChar() === Ae ? E(
      u,
      13
      /* TokenTypes.EOF */
    ) : lt(a, u);
  }
  return {
    nextToken: It,
    currentOffset: r,
    currentPosition: l,
    context: p
  };
}
const ql = "parser", Ql = /(?:\\\\|\\'|\\u([0-9a-fA-F]{4})|\\U([0-9a-fA-F]{6}))/g;
function es(e, t, n) {
  switch (e) {
    case "\\\\":
      return "\\";
    // eslint-disable-next-line no-useless-escape
    case "\\'":
      return "'";
    default: {
      const a = parseInt(t || n, 16);
      return a <= 55295 || a >= 57344 ? String.fromCodePoint(a) : "�";
    }
  }
}
function ts(e = {}) {
  const t = e.location !== !1, { onError: n } = e;
  function a(d, w, k, _, ...O) {
    const A = d.currentPosition();
    if (A.offset += _, A.column += _, n) {
      const y = t ? En(k, A) : null, q = un(w, y, {
        domain: ql,
        args: O
      });
      n(q);
    }
  }
  function r(d, w, k) {
    const _ = { type: d };
    return t && (_.start = w, _.end = w, _.loc = { start: k, end: k }), _;
  }
  function l(d, w, k, _) {
    t && (d.end = w, d.loc && (d.loc.end = k));
  }
  function s(d, w) {
    const k = d.context(), _ = r(3, k.offset, k.startLoc);
    return _.value = w, l(_, d.currentOffset(), d.currentPosition()), _;
  }
  function i(d, w) {
    const k = d.context(), { lastOffset: _, lastStartLoc: O } = k, A = r(5, _, O);
    return A.index = parseInt(w, 10), d.nextToken(), l(A, d.currentOffset(), d.currentPosition()), A;
  }
  function u(d, w) {
    const k = d.context(), { lastOffset: _, lastStartLoc: O } = k, A = r(4, _, O);
    return A.key = w, d.nextToken(), l(A, d.currentOffset(), d.currentPosition()), A;
  }
  function p(d, w) {
    const k = d.context(), { lastOffset: _, lastStartLoc: O } = k, A = r(9, _, O);
    return A.value = w.replace(Ql, es), d.nextToken(), l(A, d.currentOffset(), d.currentPosition()), A;
  }
  function v(d) {
    const w = d.nextToken(), k = d.context(), { lastOffset: _, lastStartLoc: O } = k, A = r(8, _, O);
    return w.type !== 11 ? (a(d, B.UNEXPECTED_EMPTY_LINKED_MODIFIER, k.lastStartLoc, 0), A.value = "", l(A, _, O), {
      nextConsumeToken: w,
      node: A
    }) : (w.value == null && a(d, B.UNEXPECTED_LEXICAL_ANALYSIS, k.lastStartLoc, 0, Ie(w)), A.value = w.value || "", l(A, d.currentOffset(), d.currentPosition()), {
      node: A
    });
  }
  function C(d, w) {
    const k = d.context(), _ = r(7, k.offset, k.startLoc);
    return _.value = w, l(_, d.currentOffset(), d.currentPosition()), _;
  }
  function E(d) {
    const w = d.context(), k = r(6, w.offset, w.startLoc);
    let _ = d.nextToken();
    if (_.type === 8) {
      const O = v(d);
      k.modifier = O.node, _ = O.nextConsumeToken || d.nextToken();
    }
    switch (_.type !== 9 && a(d, B.UNEXPECTED_LEXICAL_ANALYSIS, w.lastStartLoc, 0, Ie(_)), _ = d.nextToken(), _.type === 2 && (_ = d.nextToken()), _.type) {
      case 10:
        _.value == null && a(d, B.UNEXPECTED_LEXICAL_ANALYSIS, w.lastStartLoc, 0, Ie(_)), k.key = C(d, _.value || "");
        break;
      case 4:
        _.value == null && a(d, B.UNEXPECTED_LEXICAL_ANALYSIS, w.lastStartLoc, 0, Ie(_)), k.key = u(d, _.value || "");
        break;
      case 5:
        _.value == null && a(d, B.UNEXPECTED_LEXICAL_ANALYSIS, w.lastStartLoc, 0, Ie(_)), k.key = i(d, _.value || "");
        break;
      case 6:
        _.value == null && a(d, B.UNEXPECTED_LEXICAL_ANALYSIS, w.lastStartLoc, 0, Ie(_)), k.key = p(d, _.value || "");
        break;
      default: {
        a(d, B.UNEXPECTED_EMPTY_LINKED_KEY, w.lastStartLoc, 0);
        const O = d.context(), A = r(7, O.offset, O.startLoc);
        return A.value = "", l(A, O.offset, O.startLoc), k.key = A, l(k, O.offset, O.startLoc), {
          nextConsumeToken: _,
          node: k
        };
      }
    }
    return l(k, d.currentOffset(), d.currentPosition()), {
      node: k
    };
  }
  function P(d) {
    const w = d.context(), k = w.currentType === 1 ? d.currentOffset() : w.offset, _ = w.currentType === 1 ? w.endLoc : w.startLoc, O = r(2, k, _);
    O.items = [];
    let A = null;
    do {
      const Q = A || d.nextToken();
      switch (A = null, Q.type) {
        case 0:
          Q.value == null && a(d, B.UNEXPECTED_LEXICAL_ANALYSIS, w.lastStartLoc, 0, Ie(Q)), O.items.push(s(d, Q.value || ""));
          break;
        case 5:
          Q.value == null && a(d, B.UNEXPECTED_LEXICAL_ANALYSIS, w.lastStartLoc, 0, Ie(Q)), O.items.push(i(d, Q.value || ""));
          break;
        case 4:
          Q.value == null && a(d, B.UNEXPECTED_LEXICAL_ANALYSIS, w.lastStartLoc, 0, Ie(Q)), O.items.push(u(d, Q.value || ""));
          break;
        case 6:
          Q.value == null && a(d, B.UNEXPECTED_LEXICAL_ANALYSIS, w.lastStartLoc, 0, Ie(Q)), O.items.push(p(d, Q.value || ""));
          break;
        case 7: {
          const ie = E(d);
          O.items.push(ie.node), A = ie.nextConsumeToken || null;
          break;
        }
      }
    } while (w.currentType !== 13 && w.currentType !== 1);
    const y = w.currentType === 1 ? w.lastOffset : d.currentOffset(), q = w.currentType === 1 ? w.lastEndLoc : d.currentPosition();
    return l(O, y, q), O;
  }
  function W(d, w, k, _) {
    const O = d.context();
    let A = _.items.length === 0;
    const y = r(1, w, k);
    y.cases = [], y.cases.push(_);
    do {
      const q = P(d);
      A || (A = q.items.length === 0), y.cases.push(q);
    } while (O.currentType !== 13);
    return A && a(d, B.MUST_HAVE_MESSAGES_IN_PLURAL, k, 0), l(y, d.currentOffset(), d.currentPosition()), y;
  }
  function b(d) {
    const w = d.context(), { offset: k, startLoc: _ } = w, O = P(d);
    return w.currentType === 13 ? O : W(d, k, _, O);
  }
  function h(d) {
    const w = Jl(d, de({}, e)), k = w.context(), _ = r(0, k.offset, k.startLoc);
    return t && _.loc && (_.loc.source = d), _.body = b(w), e.onCacheKey && (_.cacheKey = e.onCacheKey(d)), k.currentType !== 13 && a(w, B.UNEXPECTED_LEXICAL_ANALYSIS, k.lastStartLoc, 0, d[k.offset] || ""), l(_, w.currentOffset(), w.currentPosition()), _;
  }
  return { parse: h };
}
function Ie(e) {
  if (e.type === 13)
    return "EOF";
  const t = (e.value || "").replace(/\r?\n/gu, "\\n");
  return t.length > 10 ? t.slice(0, 9) + "…" : t;
}
function ns(e, t = {}) {
  const n = {
    ast: e,
    helpers: /* @__PURE__ */ new Set()
  };
  return { context: () => n, helper: (l) => (n.helpers.add(l), l) };
}
function ma(e, t) {
  for (let n = 0; n < e.length; n++)
    Bn(e[n], t);
}
function Bn(e, t) {
  switch (e.type) {
    case 1:
      ma(e.cases, t), t.helper(
        "plural"
        /* HelperNameMap.PLURAL */
      );
      break;
    case 2:
      ma(e.items, t);
      break;
    case 6: {
      Bn(e.key, t), t.helper(
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
function as(e, t = {}) {
  const n = ns(e);
  n.helper(
    "normalize"
    /* HelperNameMap.NORMALIZE */
  ), e.body && Bn(e.body, n);
  const a = n.context();
  e.helpers = Array.from(a.helpers);
}
function rs(e) {
  const t = e.body;
  return t.type === 2 ? ga(t) : t.cases.forEach((n) => ga(n)), e;
}
function ga(e) {
  if (e.items.length === 1) {
    const t = e.items[0];
    (t.type === 3 || t.type === 9) && (e.static = t.value, delete t.value);
  } else {
    const t = [];
    for (let n = 0; n < e.items.length; n++) {
      const a = e.items[n];
      if (!(a.type === 3 || a.type === 9) || a.value == null)
        break;
      t.push(a.value);
    }
    if (t.length === e.items.length) {
      e.static = Kn(t);
      for (let n = 0; n < e.items.length; n++) {
        const a = e.items[n];
        (a.type === 3 || a.type === 9) && delete a.value;
      }
    }
  }
}
function gt(e) {
  switch (e.t = e.type, e.type) {
    case 0: {
      const t = e;
      gt(t.body), t.b = t.body, delete t.body;
      break;
    }
    case 1: {
      const t = e, n = t.cases;
      for (let a = 0; a < n.length; a++)
        gt(n[a]);
      t.c = n, delete t.cases;
      break;
    }
    case 2: {
      const t = e, n = t.items;
      for (let a = 0; a < n.length; a++)
        gt(n[a]);
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
      gt(t.key), t.k = t.key, delete t.key, t.modifier && (gt(t.modifier), t.m = t.modifier, delete t.modifier);
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
  }
  delete e.type;
}
function ls(e, t) {
  const { filename: n, breakLineCode: a, needIndent: r } = t, l = t.location !== !1, s = {
    filename: n,
    code: "",
    column: 1,
    line: 1,
    offset: 0,
    map: void 0,
    breakLineCode: a,
    needIndent: r,
    indentLevel: 0
  };
  l && e.loc && (s.source = e.loc.source);
  const i = () => s;
  function u(b, h) {
    s.code += b;
  }
  function p(b, h = !0) {
    const d = h ? a : "";
    u(r ? d + "  ".repeat(b) : d);
  }
  function v(b = !0) {
    const h = ++s.indentLevel;
    b && p(h);
  }
  function C(b = !0) {
    const h = --s.indentLevel;
    b && p(h);
  }
  function E() {
    p(s.indentLevel);
  }
  return {
    context: i,
    push: u,
    indent: v,
    deindent: C,
    newline: E,
    helper: (b) => `_${b}`,
    needIndent: () => s.needIndent
  };
}
function ss(e, t) {
  const { helper: n } = e;
  e.push(`${n(
    "linked"
    /* HelperNameMap.LINKED */
  )}(`), bt(e, t.key), t.modifier ? (e.push(", "), bt(e, t.modifier), e.push(", _type")) : e.push(", undefined, _type"), e.push(")");
}
function os(e, t) {
  const { helper: n, needIndent: a } = e;
  e.push(`${n(
    "normalize"
    /* HelperNameMap.NORMALIZE */
  )}([`), e.indent(a());
  const r = t.items.length;
  for (let l = 0; l < r && (bt(e, t.items[l]), l !== r - 1); l++)
    e.push(", ");
  e.deindent(a()), e.push("])");
}
function is(e, t) {
  const { helper: n, needIndent: a } = e;
  if (t.cases.length > 1) {
    e.push(`${n(
      "plural"
      /* HelperNameMap.PLURAL */
    )}([`), e.indent(a());
    const r = t.cases.length;
    for (let l = 0; l < r && (bt(e, t.cases[l]), l !== r - 1); l++)
      e.push(", ");
    e.deindent(a()), e.push("])");
  }
}
function cs(e, t) {
  t.body ? bt(e, t.body) : e.push("null");
}
function bt(e, t) {
  const { helper: n } = e;
  switch (t.type) {
    case 0:
      cs(e, t);
      break;
    case 1:
      is(e, t);
      break;
    case 2:
      os(e, t);
      break;
    case 6:
      ss(e, t);
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
  }
}
const us = (e, t = {}) => {
  const n = M(t.mode) ? t.mode : "normal", a = M(t.filename) ? t.filename : "message.intl";
  t.sourceMap;
  const r = t.breakLineCode != null ? t.breakLineCode : n === "arrow" ? ";" : `
`, l = t.needIndent ? t.needIndent : n !== "arrow", s = e.helpers || [], i = ls(e, {
    filename: a,
    breakLineCode: r,
    needIndent: l
  });
  i.push(n === "normal" ? "function __msg__ (ctx) {" : "(ctx) => {"), i.indent(l), s.length > 0 && (i.push(`const { ${Kn(s.map((v) => `${v}: _${v}`), ", ")} } = ctx`), i.newline()), i.push("return "), bt(i, e), i.deindent(l), i.push("}"), delete e.helpers;
  const { code: u, map: p } = i.context();
  return {
    ast: e,
    code: u,
    map: p ? p.toJSON() : void 0
    // eslint-disable-line @typescript-eslint/no-explicit-any
  };
};
function ds(e, t = {}) {
  const n = de({}, t), a = !!n.jit, r = !!n.minify, l = n.optimize == null ? !0 : n.optimize, i = ts(n).parse(e);
  return a ? (l && rs(i), r && gt(i), { ast: i, code: "" }) : (as(i, n), us(i, n));
}
/*!
  * core-base v11.2.2
  * (c) 2025 kazuya kawaguchi
  * Released under the MIT License.
  */
function fs() {
  typeof __INTLIFY_DROP_MESSAGE_COMPILER__ != "boolean" && (Gt().__INTLIFY_DROP_MESSAGE_COMPILER__ = !1);
}
function Ne(e) {
  return G(e) && Yn(e) === 0 && (Le(e, "b") || Le(e, "body"));
}
const mr = ["b", "body"];
function hs(e) {
  return Be(e, mr);
}
const gr = ["c", "cases"];
function ps(e) {
  return Be(e, gr, []);
}
const wr = ["s", "static"];
function ms(e) {
  return Be(e, wr);
}
const vr = ["i", "items"];
function gs(e) {
  return Be(e, vr, []);
}
const _r = ["t", "type"];
function Yn(e) {
  return Be(e, _r);
}
const br = ["v", "value"];
function Ut(e, t) {
  const n = Be(e, br);
  if (n != null)
    return n;
  throw Mt(t);
}
const yr = ["m", "modifier"];
function ws(e) {
  return Be(e, yr);
}
const kr = ["k", "key"];
function vs(e) {
  const t = Be(e, kr);
  if (t)
    return t;
  throw Mt(
    6
    /* NodeTypes.Linked */
  );
}
function Be(e, t, n) {
  for (let a = 0; a < t.length; a++) {
    const r = t[a];
    if (Le(e, r) && e[r] != null)
      return e[r];
  }
  return n;
}
const Cr = [
  ...mr,
  ...gr,
  ...wr,
  ...vr,
  ...kr,
  ...yr,
  ...br,
  ..._r
];
function Mt(e) {
  return new Error(`unhandled node type: ${e}`);
}
function _n(e) {
  return (n) => _s(n, e);
}
function _s(e, t) {
  const n = hs(t);
  if (n == null)
    throw Mt(
      0
      /* NodeTypes.Resource */
    );
  if (Yn(n) === 1) {
    const l = ps(n);
    return e.plural(l.reduce((s, i) => [
      ...s,
      wa(e, i)
    ], []));
  } else
    return wa(e, n);
}
function wa(e, t) {
  const n = ms(t);
  if (n != null)
    return e.type === "text" ? n : e.normalize([n]);
  {
    const a = gs(t).reduce((r, l) => [...r, Tn(e, l)], []);
    return e.normalize(a);
  }
}
function Tn(e, t) {
  const n = Yn(t);
  switch (n) {
    case 3:
      return Ut(t, n);
    case 9:
      return Ut(t, n);
    case 4: {
      const a = t;
      if (Le(a, "k") && a.k)
        return e.interpolate(e.named(a.k));
      if (Le(a, "key") && a.key)
        return e.interpolate(e.named(a.key));
      throw Mt(n);
    }
    case 5: {
      const a = t;
      if (Le(a, "i") && ce(a.i))
        return e.interpolate(e.list(a.i));
      if (Le(a, "index") && ce(a.index))
        return e.interpolate(e.list(a.index));
      throw Mt(n);
    }
    case 6: {
      const a = t, r = ws(a), l = vs(a);
      return e.linked(Tn(e, l), r ? Tn(e, r) : void 0, e.type);
    }
    case 7:
      return Ut(t, n);
    case 8:
      return Ut(t, n);
    default:
      throw new Error(`unhandled node on format message part: ${n}`);
  }
}
const bs = (e) => e;
let Vt = X();
function ys(e, t = {}) {
  let n = !1;
  const a = t.onError || Hl;
  return t.onError = (r) => {
    n = !0, a(r);
  }, { ...ds(e, t), detectError: n };
}
// @__NO_SIDE_EFFECTS__
function ks(e, t) {
  if (!__INTLIFY_DROP_MESSAGE_COMPILER__ && M(e)) {
    le(t.warnHtmlMessage) && t.warnHtmlMessage;
    const a = (t.onCacheKey || bs)(e), r = Vt[a];
    if (r)
      return r;
    const { ast: l, detectError: s } = ys(e, {
      ...t,
      location: !1,
      jit: !0
    }), i = _n(l);
    return s ? i : Vt[a] = i;
  } else {
    const n = e.cacheKey;
    if (n) {
      const a = Vt[n];
      return a || (Vt[n] = _n(e));
    } else
      return _n(e);
  }
}
const Fe = {
  INVALID_ARGUMENT: Vl,
  // 17
  INVALID_DATE_ARGUMENT: 18,
  INVALID_ISO_DATE_ARGUMENT: 19,
  NOT_SUPPORT_LOCALE_PROMISE_VALUE: 21,
  NOT_SUPPORT_LOCALE_ASYNC_FUNCTION: 22,
  NOT_SUPPORT_LOCALE_TYPE: 23
}, Cs = 24;
function Me(e) {
  return un(e, null, void 0);
}
function Zn(e, t) {
  return t.locale != null ? va(t.locale) : va(e.locale);
}
let bn;
function va(e) {
  if (M(e))
    return e;
  if (ne(e)) {
    if (e.resolvedOnce && bn != null)
      return bn;
    if (e.constructor.name === "Function") {
      const t = e();
      if (jl(t))
        throw Me(Fe.NOT_SUPPORT_LOCALE_PROMISE_VALUE);
      return bn = t;
    } else
      throw Me(Fe.NOT_SUPPORT_LOCALE_ASYNC_FUNCTION);
  } else
    throw Me(Fe.NOT_SUPPORT_LOCALE_TYPE);
}
function Ss(e, t, n) {
  return [.../* @__PURE__ */ new Set([
    n,
    ...se(t) ? t : G(t) ? Object.keys(t) : M(t) ? [t] : [n]
  ])];
}
function Sr(e, t, n) {
  const a = M(n) ? n : nn, r = e;
  r.__localeChainCache || (r.__localeChainCache = /* @__PURE__ */ new Map());
  let l = r.__localeChainCache.get(a);
  if (!l) {
    l = [];
    let s = [n];
    for (; se(s); )
      s = _a(l, s, t);
    const i = se(t) || !H(t) ? t : t.default ? t.default : null;
    s = M(i) ? [i] : i, se(s) && _a(l, s, !1), r.__localeChainCache.set(a, l);
  }
  return l;
}
function _a(e, t, n) {
  let a = !0;
  for (let r = 0; r < t.length && le(a); r++) {
    const l = t[r];
    M(l) && (a = Ls(e, t[r], n));
  }
  return a;
}
function Ls(e, t, n) {
  let a;
  const r = t.split("-");
  do {
    const l = r.join("-");
    a = Es(e, l, n), r.splice(-1, 1);
  } while (r.length && a === !0);
  return a;
}
function Es(e, t, n) {
  let a = !1;
  if (!e.includes(t) && (a = !0, t)) {
    a = t[t.length - 1] !== "!";
    const r = t.replace(/!/g, "");
    e.push(r), (se(n) || H(n)) && n[r] && (a = n[r]);
  }
  return a;
}
const Ye = [];
Ye[
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
Ye[
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
Ye[
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
Ye[
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
Ye[
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
Ye[
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
Ye[
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
const Ts = /^\s?(?:true|false|-?[\d.]+|'[^']*'|"[^"]*")\s?$/;
function Is(e) {
  return Ts.test(e);
}
function Ns(e) {
  const t = e.charCodeAt(0), n = e.charCodeAt(e.length - 1);
  return t === n && (t === 34 || t === 39) ? e.slice(1, -1) : e;
}
function Ps(e) {
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
function Os(e) {
  const t = e.trim();
  return e.charAt(0) === "0" && isNaN(parseInt(e)) ? !1 : Is(t) ? Ns(t) : "*" + t;
}
function As(e) {
  const t = [];
  let n = -1, a = 0, r = 0, l, s, i, u, p, v, C;
  const E = [];
  E[
    0
    /* Actions.APPEND */
  ] = () => {
    s === void 0 ? s = i : s += i;
  }, E[
    1
    /* Actions.PUSH */
  ] = () => {
    s !== void 0 && (t.push(s), s = void 0);
  }, E[
    2
    /* Actions.INC_SUB_PATH_DEPTH */
  ] = () => {
    E[
      0
      /* Actions.APPEND */
    ](), r++;
  }, E[
    3
    /* Actions.PUSH_SUB_PATH */
  ] = () => {
    if (r > 0)
      r--, a = 4, E[
        0
        /* Actions.APPEND */
      ]();
    else {
      if (r = 0, s === void 0 || (s = Os(s), s === !1))
        return !1;
      E[
        1
        /* Actions.PUSH */
      ]();
    }
  };
  function P() {
    const W = e[n + 1];
    if (a === 5 && W === "'" || a === 6 && W === '"')
      return n++, i = "\\" + W, E[
        0
        /* Actions.APPEND */
      ](), !0;
  }
  for (; a !== null; )
    if (n++, l = e[n], !(l === "\\" && P())) {
      if (u = Ps(l), C = Ye[a], p = C[u] || C.l || 8, p === 8 || (a = p[0], p[1] !== void 0 && (v = E[p[1]], v && (i = l, v() === !1))))
        return;
      if (a === 7)
        return t;
    }
}
const ba = /* @__PURE__ */ new Map();
function Fs(e, t) {
  return G(e) ? e[t] : null;
}
function Ms(e, t) {
  if (!G(e))
    return null;
  let n = ba.get(t);
  if (n || (n = As(t), n && ba.set(t, n)), !n)
    return null;
  const a = n.length;
  let r = e, l = 0;
  for (; l < a; ) {
    const s = n[l];
    if (Cr.includes(s) && Ne(r))
      return null;
    const i = r[s];
    if (i === void 0 || ne(r))
      return null;
    r = i, l++;
  }
  return r;
}
const Ws = "11.2.2", dn = -1, nn = "en-US", ya = "", ka = (e) => `${e.charAt(0).toLocaleUpperCase()}${e.substr(1)}`;
function Rs() {
  return {
    upper: (e, t) => t === "text" && M(e) ? e.toUpperCase() : t === "vnode" && G(e) && "__v_isVNode" in e ? e.children.toUpperCase() : e,
    lower: (e, t) => t === "text" && M(e) ? e.toLowerCase() : t === "vnode" && G(e) && "__v_isVNode" in e ? e.children.toLowerCase() : e,
    capitalize: (e, t) => t === "text" && M(e) ? ka(e) : t === "vnode" && G(e) && "__v_isVNode" in e ? ka(e.children) : e
  };
}
let Lr;
function $s(e) {
  Lr = e;
}
let Er;
function Ds(e) {
  Er = e;
}
let Tr;
function xs(e) {
  Tr = e;
}
let Ir = null;
const Ca = (e) => {
  Ir = e;
}, js = () => Ir;
let Sa = 0;
function zs(e = {}) {
  const t = ne(e.onWarn) ? e.onWarn : Fl, n = M(e.version) ? e.version : Ws, a = M(e.locale) || ne(e.locale) ? e.locale : nn, r = ne(a) ? nn : a, l = se(e.fallbackLocale) || H(e.fallbackLocale) || M(e.fallbackLocale) || e.fallbackLocale === !1 ? e.fallbackLocale : r, s = H(e.messages) ? e.messages : yn(r), i = H(e.datetimeFormats) ? e.datetimeFormats : yn(r), u = H(e.numberFormats) ? e.numberFormats : yn(r), p = de(X(), e.modifiers, Rs()), v = e.pluralRules || X(), C = ne(e.missing) ? e.missing : null, E = le(e.missingWarn) || tn(e.missingWarn) ? e.missingWarn : !0, P = le(e.fallbackWarn) || tn(e.fallbackWarn) ? e.fallbackWarn : !0, W = !!e.fallbackFormat, b = !!e.unresolving, h = ne(e.postTranslation) ? e.postTranslation : null, d = H(e.processor) ? e.processor : null, w = le(e.warnHtmlMessage) ? e.warnHtmlMessage : !0, k = !!e.escapeParameter, _ = ne(e.messageCompiler) ? e.messageCompiler : Lr, O = ne(e.messageResolver) ? e.messageResolver : Er || Fs, A = ne(e.localeFallbacker) ? e.localeFallbacker : Tr || Ss, y = G(e.fallbackContext) ? e.fallbackContext : void 0, q = e, Q = G(q.__datetimeFormatters) ? q.__datetimeFormatters : /* @__PURE__ */ new Map(), ie = G(q.__numberFormatters) ? q.__numberFormatters : /* @__PURE__ */ new Map(), ue = G(q.__meta) ? q.__meta : {};
  Sa++;
  const ee = {
    version: n,
    cid: Sa,
    locale: a,
    fallbackLocale: l,
    messages: s,
    modifiers: p,
    pluralRules: v,
    missing: C,
    missingWarn: E,
    fallbackWarn: P,
    fallbackFormat: W,
    unresolving: b,
    postTranslation: h,
    processor: d,
    warnHtmlMessage: w,
    escapeParameter: k,
    messageCompiler: _,
    messageResolver: O,
    localeFallbacker: A,
    fallbackContext: y,
    onWarn: t,
    __meta: ue
  };
  return ee.datetimeFormats = i, ee.numberFormats = u, ee.__datetimeFormatters = Q, ee.__numberFormatters = ie, ee;
}
const yn = (e) => ({ [e]: X() });
function Xn(e, t, n, a, r) {
  const { missing: l, onWarn: s } = e;
  if (l !== null) {
    const i = l(e, n, t, r);
    return M(i) ? i : t;
  } else
    return t;
}
function Nt(e, t, n) {
  const a = e;
  a.__localeChainCache = /* @__PURE__ */ new Map(), e.localeFallbacker(e, n, t);
}
function Us(e, t) {
  return e === t ? !1 : e.split("-")[0] === t.split("-")[0];
}
function Vs(e, t) {
  const n = t.indexOf(e);
  if (n === -1)
    return !1;
  for (let a = n + 1; a < t.length; a++)
    if (Us(e, t[a]))
      return !0;
  return !1;
}
function La(e, ...t) {
  const { datetimeFormats: n, unresolving: a, fallbackLocale: r, onWarn: l, localeFallbacker: s } = e, { __datetimeFormatters: i } = e, [u, p, v, C] = In(...t), E = le(v.missingWarn) ? v.missingWarn : e.missingWarn;
  le(v.fallbackWarn) ? v.fallbackWarn : e.fallbackWarn;
  const P = !!v.part, W = Zn(e, v), b = s(
    e,
    // eslint-disable-line @typescript-eslint/no-explicit-any
    r,
    W
  );
  if (!M(u) || u === "")
    return new Intl.DateTimeFormat(W, C).format(p);
  let h = {}, d, w = null;
  const k = "datetime format";
  for (let A = 0; A < b.length && (d = b[A], h = n[d] || {}, w = h[u], !H(w)); A++)
    Xn(e, u, d, E, k);
  if (!H(w) || !M(d))
    return a ? dn : u;
  let _ = `${d}__${u}`;
  cn(C) || (_ = `${_}__${JSON.stringify(C)}`);
  let O = i.get(_);
  return O || (O = new Intl.DateTimeFormat(d, de({}, w, C)), i.set(_, O)), P ? O.formatToParts(p) : O.format(p);
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
function In(...e) {
  const [t, n, a, r] = e, l = X();
  let s = X(), i;
  if (M(t)) {
    const u = t.match(/(\d{4}-\d{2}-\d{2})(T|\s)?(.*)/);
    if (!u)
      throw Me(Fe.INVALID_ISO_DATE_ARGUMENT);
    const p = u[3] ? u[3].trim().startsWith("T") ? `${u[1].trim()}${u[3].trim()}` : `${u[1].trim()}T${u[3].trim()}` : u[1].trim();
    i = new Date(p);
    try {
      i.toISOString();
    } catch {
      throw Me(Fe.INVALID_ISO_DATE_ARGUMENT);
    }
  } else if (Rl(t)) {
    if (isNaN(t.getTime()))
      throw Me(Fe.INVALID_DATE_ARGUMENT);
    i = t;
  } else if (ce(t))
    i = t;
  else
    throw Me(Fe.INVALID_ARGUMENT);
  return M(n) ? l.key = n : H(n) && Object.keys(n).forEach((u) => {
    Nr.includes(u) ? s[u] = n[u] : l[u] = n[u];
  }), M(a) ? l.locale = a : H(a) && (s = a), H(r) && (s = r), [l.key || "", i, l, s];
}
function Ea(e, t, n) {
  const a = e;
  for (const r in n) {
    const l = `${t}__${r}`;
    a.__datetimeFormatters.has(l) && a.__datetimeFormatters.delete(l);
  }
}
function Ta(e, ...t) {
  const { numberFormats: n, unresolving: a, fallbackLocale: r, onWarn: l, localeFallbacker: s } = e, { __numberFormatters: i } = e, [u, p, v, C] = Nn(...t), E = le(v.missingWarn) ? v.missingWarn : e.missingWarn;
  le(v.fallbackWarn) ? v.fallbackWarn : e.fallbackWarn;
  const P = !!v.part, W = Zn(e, v), b = s(
    e,
    // eslint-disable-line @typescript-eslint/no-explicit-any
    r,
    W
  );
  if (!M(u) || u === "")
    return new Intl.NumberFormat(W, C).format(p);
  let h = {}, d, w = null;
  const k = "number format";
  for (let A = 0; A < b.length && (d = b[A], h = n[d] || {}, w = h[u], !H(w)); A++)
    Xn(e, u, d, E, k);
  if (!H(w) || !M(d))
    return a ? dn : u;
  let _ = `${d}__${u}`;
  cn(C) || (_ = `${_}__${JSON.stringify(C)}`);
  let O = i.get(_);
  return O || (O = new Intl.NumberFormat(d, de({}, w, C)), i.set(_, O)), P ? O.formatToParts(p) : O.format(p);
}
const Pr = [
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
function Nn(...e) {
  const [t, n, a, r] = e, l = X();
  let s = X();
  if (!ce(t))
    throw Me(Fe.INVALID_ARGUMENT);
  const i = t;
  return M(n) ? l.key = n : H(n) && Object.keys(n).forEach((u) => {
    Pr.includes(u) ? s[u] = n[u] : l[u] = n[u];
  }), M(a) ? l.locale = a : H(a) && (s = a), H(r) && (s = r), [l.key || "", i, l, s];
}
function Ia(e, t, n) {
  const a = e;
  for (const r in n) {
    const l = `${t}__${r}`;
    a.__numberFormatters.has(l) && a.__numberFormatters.delete(l);
  }
}
const Hs = (e) => e, Gs = (e) => "", Ks = "text", Bs = (e) => e.length === 0 ? "" : Kn(e), Ys = zl;
function Na(e, t) {
  return e = Math.abs(e), t === 2 ? e ? e > 1 ? 1 : 0 : 1 : e ? Math.min(e, 2) : 0;
}
function Zs(e) {
  const t = ce(e.pluralIndex) ? e.pluralIndex : -1;
  return e.named && (ce(e.named.count) || ce(e.named.n)) ? ce(e.named.count) ? e.named.count : ce(e.named.n) ? e.named.n : t : t;
}
function Xs(e, t) {
  t.count || (t.count = e), t.n || (t.n = e);
}
function Js(e = {}) {
  const t = e.locale, n = Zs(e), a = G(e.pluralRules) && M(t) && ne(e.pluralRules[t]) ? e.pluralRules[t] : Na, r = G(e.pluralRules) && M(t) && ne(e.pluralRules[t]) ? Na : void 0, l = (d) => d[a(n, d.length, r)], s = e.list || [], i = (d) => s[d], u = e.named || X();
  ce(e.pluralIndex) && Xs(n, u);
  const p = (d) => u[d];
  function v(d, w) {
    const k = ne(e.messages) ? e.messages(d, !!w) : G(e.messages) ? e.messages[d] : !1;
    return k || (e.parent ? e.parent.message(d) : Gs);
  }
  const C = (d) => e.modifiers ? e.modifiers[d] : Hs, E = H(e.processor) && ne(e.processor.normalize) ? e.processor.normalize : Bs, P = H(e.processor) && ne(e.processor.interpolate) ? e.processor.interpolate : Ys, W = H(e.processor) && M(e.processor.type) ? e.processor.type : Ks, h = {
    list: i,
    named: p,
    plural: l,
    linked: (d, ...w) => {
      const [k, _] = w;
      let O = "text", A = "";
      w.length === 1 ? G(k) ? (A = k.modifier || A, O = k.type || O) : M(k) && (A = k || A) : w.length === 2 && (M(k) && (A = k || A), M(_) && (O = _ || O));
      const y = v(d, !0)(h), q = (
        // The message in vnode resolved with linked are returned as an array by processor.nomalize
        O === "vnode" && se(y) && A ? y[0] : y
      );
      return A ? C(A)(q, O) : q;
    },
    message: v,
    type: W,
    interpolate: P,
    normalize: E,
    values: de(X(), s, u)
  };
  return h;
}
const Pa = () => "", We = (e) => ne(e);
function Oa(e, ...t) {
  const { fallbackFormat: n, postTranslation: a, unresolving: r, messageCompiler: l, fallbackLocale: s, messages: i } = e, [u, p] = Pn(...t), v = le(p.missingWarn) ? p.missingWarn : e.missingWarn, C = le(p.fallbackWarn) ? p.fallbackWarn : e.fallbackWarn, E = le(p.escapeParameter) ? p.escapeParameter : e.escapeParameter, P = !!p.resolvedMessage, W = M(p.default) || le(p.default) ? le(p.default) ? l ? u : () => u : p.default : n ? l ? u : () => u : null, b = n || W != null && (M(W) || ne(W)), h = Zn(e, p);
  E && qs(p);
  let [d, w, k] = P ? [
    u,
    h,
    i[h] || X()
  ] : Or(e, u, h, s, C, v), _ = d, O = u;
  if (!P && !(M(_) || Ne(_) || We(_)) && b && (_ = W, O = _), !P && (!(M(_) || Ne(_) || We(_)) || !M(w)))
    return r ? dn : u;
  let A = !1;
  const y = () => {
    A = !0;
  }, q = We(_) ? _ : Ar(e, u, w, _, O, y);
  if (A)
    return _;
  const Q = to(e, w, k, p), ie = Js(Q), ue = Qs(e, q, ie);
  let ee = a ? a(ue, u) : ue;
  return E && M(ee) && (ee = Dl(ee)), ee;
}
function qs(e) {
  se(e.list) ? e.list = e.list.map((t) => M(t) ? fa(t) : t) : G(e.named) && Object.keys(e.named).forEach((t) => {
    M(e.named[t]) && (e.named[t] = fa(e.named[t]));
  });
}
function Or(e, t, n, a, r, l) {
  const { messages: s, onWarn: i, messageResolver: u, localeFallbacker: p } = e, v = p(e, a, n);
  let C = X(), E, P = null;
  const W = "translate";
  for (let b = 0; b < v.length && (E = v[b], C = s[E] || X(), (P = u(C, t)) === null && (P = C[t]), !(M(P) || Ne(P) || We(P))); b++)
    if (!Vs(E, v)) {
      const h = Xn(
        e,
        // eslint-disable-line @typescript-eslint/no-explicit-any
        t,
        E,
        l,
        W
      );
      h !== t && (P = h);
    }
  return [P, E, C];
}
function Ar(e, t, n, a, r, l) {
  const { messageCompiler: s, warnHtmlMessage: i } = e;
  if (We(a)) {
    const p = a;
    return p.locale = p.locale || n, p.key = p.key || t, p;
  }
  if (s == null) {
    const p = () => a;
    return p.locale = n, p.key = t, p;
  }
  const u = s(a, eo(e, n, r, a, i, l));
  return u.locale = n, u.key = t, u.source = a, u;
}
function Qs(e, t, n) {
  return t(n);
}
function Pn(...e) {
  const [t, n, a] = e, r = X();
  if (!M(t) && !ce(t) && !We(t) && !Ne(t))
    throw Me(Fe.INVALID_ARGUMENT);
  const l = ce(t) ? String(t) : (We(t), t);
  return ce(n) ? r.plural = n : M(n) ? r.default = n : H(n) && !cn(n) ? r.named = n : se(n) && (r.list = n), ce(a) ? r.plural = a : M(a) ? r.default = a : H(a) && de(r, a), [l, r];
}
function eo(e, t, n, a, r, l) {
  return {
    locale: t,
    key: n,
    warnHtmlMessage: r,
    onError: (s) => {
      throw l && l(s), s;
    },
    onCacheKey: (s) => Ml(t, n, s)
  };
}
function to(e, t, n, a) {
  const { modifiers: r, pluralRules: l, messageResolver: s, fallbackLocale: i, fallbackWarn: u, missingWarn: p, fallbackContext: v } = e, E = {
    locale: t,
    modifiers: r,
    pluralRules: l,
    messages: (P, W) => {
      let b = s(n, P);
      if (b == null && (v || W)) {
        const [, , h] = Or(
          v || e,
          // NOTE: if has fallbackContext, fallback to root, else if use linked, fallback to local context
          P,
          t,
          i,
          u,
          p
        );
        b = s(h, P);
      }
      if (M(b) || Ne(b)) {
        let h = !1;
        const w = Ar(e, P, t, b, P, () => {
          h = !0;
        });
        return h ? Pa : w;
      } else return We(b) ? b : Pa;
    }
  };
  return e.processor && (E.processor = e.processor), a.list && (E.list = a.list), a.named && (E.named = a.named), ce(a.plural) && (E.pluralIndex = a.plural), E;
}
fs();
/*!
  * vue-i18n v11.2.2
  * (c) 2025 kazuya kawaguchi
  * Released under the MIT License.
  */
const no = "11.2.2";
function ao() {
  typeof __VUE_I18N_FULL_INSTALL__ != "boolean" && (Gt().__VUE_I18N_FULL_INSTALL__ = !0), typeof __VUE_I18N_LEGACY_API__ != "boolean" && (Gt().__VUE_I18N_LEGACY_API__ = !0), typeof __INTLIFY_DROP_MESSAGE_COMPILER__ != "boolean" && (Gt().__INTLIFY_DROP_MESSAGE_COMPILER__ = !1);
}
const yt = {
  // composer module errors
  UNEXPECTED_RETURN_TYPE: Cs,
  // 24
  // legacy module errors
  INVALID_ARGUMENT: 25,
  // i18n module errors
  MUST_BE_CALL_SETUP_TOP: 26,
  NOT_INSTALLED: 27,
  NOT_INSTALLED_WITH_PROVIDE: 31,
  // unexpected error
  UNEXPECTED_ERROR: 32
};
function Wt(e, ...t) {
  return un(e, null, void 0);
}
const On = /* @__PURE__ */ dt("__translateVNode"), An = /* @__PURE__ */ dt("__datetimeParts"), Fn = /* @__PURE__ */ dt("__numberParts"), ro = dt("__setPluralRules"), Fr = /* @__PURE__ */ dt("__injectWithOption"), Mn = /* @__PURE__ */ dt("__dispose");
function Rt(e) {
  if (!G(e) || Ne(e))
    return e;
  for (const t in e)
    if (Le(e, t))
      if (!t.includes("."))
        G(e[t]) && Rt(e[t]);
      else {
        const n = t.split("."), a = n.length - 1;
        let r = e, l = !1;
        for (let s = 0; s < a; s++) {
          if (n[s] === "__proto__")
            throw new Error(`unsafe key: ${n[s]}`);
          if (n[s] in r || (r[n[s]] = X()), !G(r[n[s]])) {
            l = !0;
            break;
          }
          r = r[n[s]];
        }
        if (l || (Ne(r) ? Cr.includes(n[a]) || delete e[t] : (r[n[a]] = e[t], delete e[t])), !Ne(r)) {
          const s = r[n[a]];
          G(s) && Rt(s);
        }
      }
  return e;
}
function Mr(e, t) {
  const { messages: n, __i18n: a, messageResolver: r, flatJson: l } = t, s = H(n) ? n : se(a) ? X() : { [e]: X() };
  if (se(a) && a.forEach((i) => {
    if ("locale" in i && "resource" in i) {
      const { locale: u, resource: p } = i;
      u ? (s[u] = s[u] || X(), Kt(p, s[u])) : Kt(p, s);
    } else
      M(i) && Kt(JSON.parse(i), s);
  }), r == null && l)
    for (const i in s)
      Le(s, i) && Rt(s[i]);
  return s;
}
function lo(e) {
  return e.type;
}
function so(e, t, n) {
  let a = G(t.messages) ? t.messages : X();
  "__i18nGlobal" in n && (a = Mr(e.locale.value, {
    messages: a,
    __i18n: n.__i18nGlobal
  }));
  const r = Object.keys(a);
  r.length && r.forEach((l) => {
    e.mergeLocaleMessage(l, a[l]);
  });
  {
    if (G(t.datetimeFormats)) {
      const l = Object.keys(t.datetimeFormats);
      l.length && l.forEach((s) => {
        e.mergeDateTimeFormat(s, t.datetimeFormats[s]);
      });
    }
    if (G(t.numberFormats)) {
      const l = Object.keys(t.numberFormats);
      l.length && l.forEach((s) => {
        e.mergeNumberFormat(s, t.numberFormats[s]);
      });
    }
  }
}
function Aa(e) {
  return L(gl, null, e, 0);
}
function Wr() {
  return "currentInstance" in gn ? gn["currentInstance"] : gn.getCurrentInstance();
}
const Fa = () => [], oo = () => !1;
let Ma = 0;
function Wa(e) {
  return (t, n, a, r) => e(n, a, Wr() || void 0, r);
}
function io(e = {}) {
  const { __root: t, __injectWithOption: n } = e, a = t === void 0, r = e.flatJson, l = ua ? U : ml;
  let s = le(e.inheritLocale) ? e.inheritLocale : !0;
  const i = l(
    // prettier-ignore
    t && s ? t.locale.value : M(e.locale) ? e.locale : nn
  ), u = l(
    // prettier-ignore
    t && s ? t.fallbackLocale.value : M(e.fallbackLocale) || se(e.fallbackLocale) || H(e.fallbackLocale) || e.fallbackLocale === !1 ? e.fallbackLocale : i.value
  ), p = l(Mr(i.value, e)), v = l(H(e.datetimeFormats) ? e.datetimeFormats : { [i.value]: {} }), C = l(H(e.numberFormats) ? e.numberFormats : { [i.value]: {} });
  let E = t ? t.missingWarn : le(e.missingWarn) || tn(e.missingWarn) ? e.missingWarn : !0, P = t ? t.fallbackWarn : le(e.fallbackWarn) || tn(e.fallbackWarn) ? e.fallbackWarn : !0, W = t ? t.fallbackRoot : le(e.fallbackRoot) ? e.fallbackRoot : !0, b = !!e.fallbackFormat, h = ne(e.missing) ? e.missing : null, d = ne(e.missing) ? Wa(e.missing) : null, w = ne(e.postTranslation) ? e.postTranslation : null, k = t ? t.warnHtmlMessage : le(e.warnHtmlMessage) ? e.warnHtmlMessage : !0, _ = !!e.escapeParameter;
  const O = t ? t.modifiers : H(e.modifiers) ? e.modifiers : {};
  let A = e.pluralRules || t && t.pluralRules, y;
  y = (() => {
    a && Ca(null);
    const g = {
      version: no,
      locale: i.value,
      fallbackLocale: u.value,
      messages: p.value,
      modifiers: O,
      pluralRules: A,
      missing: d === null ? void 0 : d,
      missingWarn: E,
      fallbackWarn: P,
      fallbackFormat: b,
      unresolving: !0,
      postTranslation: w === null ? void 0 : w,
      warnHtmlMessage: k,
      escapeParameter: _,
      messageResolver: e.messageResolver,
      messageCompiler: e.messageCompiler,
      __meta: { framework: "vue" }
    };
    g.datetimeFormats = v.value, g.numberFormats = C.value, g.__datetimeFormatters = H(y) ? y.__datetimeFormatters : void 0, g.__numberFormatters = H(y) ? y.__numberFormatters : void 0;
    const I = zs(g);
    return a && Ca(I), I;
  })(), Nt(y, i.value, u.value);
  function Q() {
    return [
      i.value,
      u.value,
      p.value,
      v.value,
      C.value
    ];
  }
  const ie = D({
    get: () => i.value,
    set: (g) => {
      y.locale = g, i.value = g;
    }
  }), ue = D({
    get: () => u.value,
    set: (g) => {
      y.fallbackLocale = g, u.value = g, Nt(y, i.value, g);
    }
  }), ee = D(() => p.value), Ze = /* @__PURE__ */ D(() => v.value), Re = /* @__PURE__ */ D(() => C.value);
  function Xe() {
    return ne(w) ? w : null;
  }
  function ye(g) {
    w = g, y.postTranslation = g;
  }
  function Je() {
    return h;
  }
  function qe(g) {
    g !== null && (d = Wa(g)), h = g, y.missing = d;
  }
  const ve = (g, I, Y, te, Oe, pt) => {
    Q();
    let Ve;
    try {
      a || (y.fallbackContext = t ? js() : void 0), Ve = g(y);
    } finally {
      a || (y.fallbackContext = void 0);
    }
    if (Y !== "translate exists" && // for not `te` (e.g `t`)
    ce(Ve) && Ve === dn || Y === "translate exists" && !Ve) {
      const [mn, R] = I();
      return t && W ? te(t) : Oe(mn);
    } else {
      if (pt(Ve))
        return Ve;
      throw Wt(yt.UNEXPECTED_RETURN_TYPE);
    }
  };
  function $e(...g) {
    return ve((I) => Reflect.apply(Oa, null, [I, ...g]), () => Pn(...g), "translate", (I) => Reflect.apply(I.t, I, [...g]), (I) => I, (I) => M(I));
  }
  function De(...g) {
    const [I, Y, te] = g;
    if (te && !G(te))
      throw Wt(yt.INVALID_ARGUMENT);
    return $e(I, Y, de({ resolvedMessage: !0 }, te || {}));
  }
  function xe(...g) {
    return ve((I) => Reflect.apply(La, null, [I, ...g]), () => In(...g), "datetime format", (I) => Reflect.apply(I.d, I, [...g]), () => ya, (I) => M(I) || se(I));
  }
  function Qe(...g) {
    return ve((I) => Reflect.apply(Ta, null, [I, ...g]), () => Nn(...g), "number format", (I) => Reflect.apply(I.n, I, [...g]), () => ya, (I) => M(I) || se(I));
  }
  function et(g) {
    return g.map((I) => M(I) || ce(I) || le(I) ? Aa(String(I)) : I);
  }
  const je = {
    normalize: et,
    interpolate: (g) => g,
    type: "vnode"
  };
  function nt(...g) {
    return ve((I) => {
      let Y;
      const te = I;
      try {
        te.processor = je, Y = Reflect.apply(Oa, null, [te, ...g]);
      } finally {
        te.processor = null;
      }
      return Y;
    }, () => Pn(...g), "translate", (I) => I[On](...g), (I) => [Aa(I)], (I) => se(I));
  }
  function ze(...g) {
    return ve((I) => Reflect.apply(Ta, null, [I, ...g]), () => Nn(...g), "number format", (I) => I[Fn](...g), Fa, (I) => M(I) || se(I));
  }
  function at(...g) {
    return ve((I) => Reflect.apply(La, null, [I, ...g]), () => In(...g), "datetime format", (I) => I[An](...g), Fa, (I) => M(I) || se(I));
  }
  function rt(g) {
    A = g, y.pluralRules = A;
  }
  function x(g, I) {
    return ve(() => {
      if (!g)
        return !1;
      const Y = M(I) ? I : i.value, te = me(Y), Oe = y.messageResolver(te, g);
      return Ne(Oe) || We(Oe) || M(Oe);
    }, () => [g], "translate exists", (Y) => Reflect.apply(Y.te, Y, [g, I]), oo, (Y) => le(Y));
  }
  function V(g) {
    let I = null;
    const Y = Sr(y, u.value, i.value);
    for (let te = 0; te < Y.length; te++) {
      const Oe = p.value[Y[te]] || {}, pt = y.messageResolver(Oe, g);
      if (pt != null) {
        I = pt;
        break;
      }
    }
    return I;
  }
  function re(g) {
    const I = V(g);
    return I ?? (t ? t.tm(g) || {} : {});
  }
  function me(g) {
    return p.value[g] || {};
  }
  function Ue(g, I) {
    if (r) {
      const Y = { [g]: I };
      for (const te in Y)
        Le(Y, te) && Rt(Y[te]);
      I = Y[g];
    }
    p.value[g] = I, y.messages = p.value;
  }
  function lt(g, I) {
    p.value[g] = p.value[g] || {};
    const Y = { [g]: I };
    if (r)
      for (const te in Y)
        Le(Y, te) && Rt(Y[te]);
    I = Y[g], Kt(I, p.value[g]), y.messages = p.value;
  }
  function It(g) {
    return v.value[g] || {};
  }
  function c(g, I) {
    v.value[g] = I, y.datetimeFormats = v.value, Ea(y, g, I);
  }
  function f(g, I) {
    v.value[g] = de(v.value[g] || {}, I), y.datetimeFormats = v.value, Ea(y, g, I);
  }
  function S(g) {
    return C.value[g] || {};
  }
  function F(g, I) {
    C.value[g] = I, y.numberFormats = C.value, Ia(y, g, I);
  }
  function J(g, I) {
    C.value[g] = de(C.value[g] || {}, I), y.numberFormats = C.value, Ia(y, g, I);
  }
  Ma++, t && ua && (wt(t.locale, (g) => {
    s && (i.value = g, y.locale = g, Nt(y, i.value, u.value));
  }), wt(t.fallbackLocale, (g) => {
    s && (u.value = g, y.fallbackLocale = g, Nt(y, i.value, u.value));
  }));
  const j = {
    id: Ma,
    locale: ie,
    fallbackLocale: ue,
    get inheritLocale() {
      return s;
    },
    set inheritLocale(g) {
      s = g, g && t && (i.value = t.locale.value, u.value = t.fallbackLocale.value, Nt(y, i.value, u.value));
    },
    get availableLocales() {
      return Object.keys(p.value).sort();
    },
    messages: ee,
    get modifiers() {
      return O;
    },
    get pluralRules() {
      return A || {};
    },
    get isGlobal() {
      return a;
    },
    get missingWarn() {
      return E;
    },
    set missingWarn(g) {
      E = g, y.missingWarn = E;
    },
    get fallbackWarn() {
      return P;
    },
    set fallbackWarn(g) {
      P = g, y.fallbackWarn = P;
    },
    get fallbackRoot() {
      return W;
    },
    set fallbackRoot(g) {
      W = g;
    },
    get fallbackFormat() {
      return b;
    },
    set fallbackFormat(g) {
      b = g, y.fallbackFormat = b;
    },
    get warnHtmlMessage() {
      return k;
    },
    set warnHtmlMessage(g) {
      k = g, y.warnHtmlMessage = g;
    },
    get escapeParameter() {
      return _;
    },
    set escapeParameter(g) {
      _ = g, y.escapeParameter = g;
    },
    t: $e,
    getLocaleMessage: me,
    setLocaleMessage: Ue,
    mergeLocaleMessage: lt,
    getPostTranslationHandler: Xe,
    setPostTranslationHandler: ye,
    getMissingHandler: Je,
    setMissingHandler: qe,
    [ro]: rt
  };
  return j.datetimeFormats = Ze, j.numberFormats = Re, j.rt = De, j.te = x, j.tm = re, j.d = xe, j.n = Qe, j.getDateTimeFormat = It, j.setDateTimeFormat = c, j.mergeDateTimeFormat = f, j.getNumberFormat = S, j.setNumberFormat = F, j.mergeNumberFormat = J, j[Fr] = n, j[On] = nt, j[An] = at, j[Fn] = ze, j;
}
const Jn = {
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
function co({ slots: e }, t) {
  return t.length === 1 && t[0] === "default" ? (e.default ? e.default() : []).reduce((a, r) => [
    ...a,
    // prettier-ignore
    ...r.type === Ke ? r.children : [r]
  ], []) : t.reduce((n, a) => {
    const r = e[a];
    return r && (n[a] = r()), n;
  }, X());
}
function Rr() {
  return Ke;
}
de({
  keypath: {
    type: String,
    required: !0
  },
  plural: {
    type: [Number, String],
    validator: (e) => ce(e) || !isNaN(e)
  }
}, Jn);
function uo(e) {
  return se(e) && !M(e[0]);
}
function $r(e, t, n, a) {
  const { slots: r, attrs: l } = t;
  return () => {
    const s = { part: !0 };
    let i = X();
    e.locale && (s.locale = e.locale), M(e.format) ? s.key = e.format : G(e.format) && (M(e.format.key) && (s.key = e.format.key), i = Object.keys(e.format).reduce((E, P) => n.includes(P) ? de(X(), E, { [P]: e.format[P] }) : E, X()));
    const u = a(e.value, s, i);
    let p = [s.key];
    se(u) ? p = u.map((E, P) => {
      const W = r[E.type], b = W ? W({ [E.type]: E.value, index: P, parts: u }) : [E.value];
      return uo(b) && (b[0].key = `${E.type}-${P}`), b;
    }) : M(u) && (p = [u]);
    const v = de(X(), l), C = M(e.tag) || G(e.tag) ? e.tag : Rr();
    return rr(C, v, p);
  };
}
de({
  value: {
    type: Number,
    required: !0
  },
  format: {
    type: [String, Object]
  }
}, Jn);
const fo = /* @__PURE__ */ dt("global-vue-i18n");
function Pe(e = {}) {
  const t = Wr();
  if (t == null)
    throw Wt(yt.MUST_BE_CALL_SETUP_TOP);
  if (!t.isCE && t.appContext.app != null && !t.appContext.app.__VUE_I18N_SYMBOL__)
    throw Wt(yt.NOT_INSTALLED);
  const n = ho(t), a = mo(n), r = lo(t), l = po(e, r);
  if (l === "global")
    return so(a, e, r), a;
  if (l === "parent") {
    let u = go(n, t, e.__useComponent);
    return u == null && (u = a), u;
  }
  const s = n;
  let i = s.__getInstance(t);
  if (i == null) {
    const u = de({}, e);
    "__i18n" in r && (u.__i18n = r.__i18n), a && (u.__root = a), i = io(u), s.__composerExtend && (i[Mn] = s.__composerExtend(i)), vo(s, t, i), s.__setInstance(t, i);
  }
  return i;
}
function ho(e) {
  const t = Ge(e.isCE ? fo : e.appContext.app.__VUE_I18N_SYMBOL__);
  if (!t)
    throw Wt(e.isCE ? yt.NOT_INSTALLED_WITH_PROVIDE : yt.UNEXPECTED_ERROR);
  return t;
}
function po(e, t) {
  return cn(e) ? "__i18n" in t ? "local" : "global" : e.useScope ? e.useScope : "local";
}
function mo(e) {
  return e.mode === "composition" ? e.global : e.global.__composer;
}
function go(e, t, n = !1) {
  let a = null;
  const r = t.root;
  let l = wo(t, n);
  for (; l != null; ) {
    const s = e;
    if (e.mode === "composition")
      a = s.__getInstance(l);
    else if (__VUE_I18N_LEGACY_API__) {
      const i = s.__getInstance(l);
      i != null && (a = i.__composer, n && a && !a[Fr] && (a = null));
    }
    if (a != null || r === l)
      break;
    l = l.parent;
  }
  return a;
}
function wo(e, t = !1) {
  return e == null ? null : t && e.vnode.ctx || e.parent;
}
function vo(e, t, n) {
  Lt(() => {
  }, t), Vn(() => {
    const a = n;
    e.__deleteInstance(t);
    const r = a[Mn];
    r && (r(), delete a[Mn]);
  }, t);
}
de({
  value: {
    type: [Number, Date],
    required: !0
  },
  format: {
    type: [String, Object]
  }
}, Jn);
ao();
$s(ks);
Ds(Ms);
xs(Sr);
const Dr = Symbol(), Bt = "el", _o = "is-", st = (e, t, n, a, r) => {
  let l = `${e}-${t}`;
  return n && (l += `-${n}`), a && (l += `__${a}`), r && (l += `--${r}`), l;
}, xr = Symbol("namespaceContextKey"), bo = (e) => {
  const t = e || (vt() ? Ge(xr, U(Bt)) : U(Bt));
  return D(() => o(t) || Bt);
}, qn = (e, t) => {
  const n = bo(t);
  return {
    namespace: n,
    b: (b = "") => st(n.value, e, b, "", ""),
    e: (b) => b ? st(n.value, e, "", b, "") : "",
    m: (b) => b ? st(n.value, e, "", "", b) : "",
    be: (b, h) => b && h ? st(n.value, e, b, h, "") : "",
    em: (b, h) => b && h ? st(n.value, e, "", b, h) : "",
    bm: (b, h) => b && h ? st(n.value, e, b, "", h) : "",
    bem: (b, h, d) => b && h && d ? st(n.value, e, b, h, d) : "",
    is: (b, ...h) => {
      const d = h.length >= 1 ? h[0] : !0;
      return b && d ? `${_o}${b}` : "";
    },
    cssVar: (b) => {
      const h = {};
      for (const d in b)
        b[d] && (h[`--${n.value}-${d}`] = b[d]);
      return h;
    },
    cssVarName: (b) => `--${n.value}-${b}`,
    cssVarBlock: (b) => {
      const h = {};
      for (const d in b)
        b[d] && (h[`--${n.value}-${e}-${d}`] = b[d]);
      return h;
    },
    cssVarBlockName: (b) => `--${n.value}-${e}-${b}`
  };
};
/**
* @vue/shared v3.5.13
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/
const yo = Object.prototype.hasOwnProperty, Ra = (e, t) => yo.call(e, t), $t = (e) => typeof e == "function", it = (e) => typeof e == "string", jr = (e) => e !== null && typeof e == "object";
var ko = typeof global == "object" && global && global.Object === Object && global, Co = typeof self == "object" && self && self.Object === Object && self, Qn = ko || Co || Function("return this")(), kt = Qn.Symbol, zr = Object.prototype, So = zr.hasOwnProperty, Lo = zr.toString, Pt = kt ? kt.toStringTag : void 0;
function Eo(e) {
  var t = So.call(e, Pt), n = e[Pt];
  try {
    e[Pt] = void 0;
    var a = !0;
  } catch {
  }
  var r = Lo.call(e);
  return a && (t ? e[Pt] = n : delete e[Pt]), r;
}
var To = Object.prototype, Io = To.toString;
function No(e) {
  return Io.call(e);
}
var Po = "[object Null]", Oo = "[object Undefined]", $a = kt ? kt.toStringTag : void 0;
function Ur(e) {
  return e == null ? e === void 0 ? Oo : Po : $a && $a in Object(e) ? Eo(e) : No(e);
}
function Ao(e) {
  return e != null && typeof e == "object";
}
var Fo = "[object Symbol]";
function ea(e) {
  return typeof e == "symbol" || Ao(e) && Ur(e) == Fo;
}
function Mo(e, t) {
  for (var n = -1, a = e == null ? 0 : e.length, r = Array(a); ++n < a; )
    r[n] = t(e[n], n, e);
  return r;
}
var ta = Array.isArray, Da = kt ? kt.prototype : void 0, xa = Da ? Da.toString : void 0;
function Vr(e) {
  if (typeof e == "string")
    return e;
  if (ta(e))
    return Mo(e, Vr) + "";
  if (ea(e))
    return xa ? xa.call(e) : "";
  var t = e + "";
  return t == "0" && 1 / e == -1 / 0 ? "-0" : t;
}
function Hr(e) {
  var t = typeof e;
  return e != null && (t == "object" || t == "function");
}
var Wo = "[object AsyncFunction]", Ro = "[object Function]", $o = "[object GeneratorFunction]", Do = "[object Proxy]";
function xo(e) {
  if (!Hr(e))
    return !1;
  var t = Ur(e);
  return t == Ro || t == $o || t == Wo || t == Do;
}
var kn = Qn["__core-js_shared__"], ja = function() {
  var e = /[^.]+$/.exec(kn && kn.keys && kn.keys.IE_PROTO || "");
  return e ? "Symbol(src)_1." + e : "";
}();
function jo(e) {
  return !!ja && ja in e;
}
var zo = Function.prototype, Uo = zo.toString;
function Vo(e) {
  if (e != null) {
    try {
      return Uo.call(e);
    } catch {
    }
    try {
      return e + "";
    } catch {
    }
  }
  return "";
}
var Ho = /[\\^$.*+?()[\]{}|]/g, Go = /^\[object .+?Constructor\]$/, Ko = Function.prototype, Bo = Object.prototype, Yo = Ko.toString, Zo = Bo.hasOwnProperty, Xo = RegExp(
  "^" + Yo.call(Zo).replace(Ho, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$"
);
function Jo(e) {
  if (!Hr(e) || jo(e))
    return !1;
  var t = xo(e) ? Xo : Go;
  return t.test(Vo(e));
}
function qo(e, t) {
  return e?.[t];
}
function Gr(e, t) {
  var n = qo(e, t);
  return Jo(n) ? n : void 0;
}
function Qo(e, t) {
  return e === t || e !== e && t !== t;
}
var ei = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/, ti = /^\w*$/;
function ni(e, t) {
  if (ta(e))
    return !1;
  var n = typeof e;
  return n == "number" || n == "symbol" || n == "boolean" || e == null || ea(e) ? !0 : ti.test(e) || !ei.test(e) || t != null && e in Object(t);
}
var Dt = Gr(Object, "create");
function ai() {
  this.__data__ = Dt ? Dt(null) : {}, this.size = 0;
}
function ri(e) {
  var t = this.has(e) && delete this.__data__[e];
  return this.size -= t ? 1 : 0, t;
}
var li = "__lodash_hash_undefined__", si = Object.prototype, oi = si.hasOwnProperty;
function ii(e) {
  var t = this.__data__;
  if (Dt) {
    var n = t[e];
    return n === li ? void 0 : n;
  }
  return oi.call(t, e) ? t[e] : void 0;
}
var ci = Object.prototype, ui = ci.hasOwnProperty;
function di(e) {
  var t = this.__data__;
  return Dt ? t[e] !== void 0 : ui.call(t, e);
}
var fi = "__lodash_hash_undefined__";
function hi(e, t) {
  var n = this.__data__;
  return this.size += this.has(e) ? 0 : 1, n[e] = Dt && t === void 0 ? fi : t, this;
}
function ct(e) {
  var t = -1, n = e == null ? 0 : e.length;
  for (this.clear(); ++t < n; ) {
    var a = e[t];
    this.set(a[0], a[1]);
  }
}
ct.prototype.clear = ai;
ct.prototype.delete = ri;
ct.prototype.get = ii;
ct.prototype.has = di;
ct.prototype.set = hi;
function pi() {
  this.__data__ = [], this.size = 0;
}
function fn(e, t) {
  for (var n = e.length; n--; )
    if (Qo(e[n][0], t))
      return n;
  return -1;
}
var mi = Array.prototype, gi = mi.splice;
function wi(e) {
  var t = this.__data__, n = fn(t, e);
  if (n < 0)
    return !1;
  var a = t.length - 1;
  return n == a ? t.pop() : gi.call(t, n, 1), --this.size, !0;
}
function vi(e) {
  var t = this.__data__, n = fn(t, e);
  return n < 0 ? void 0 : t[n][1];
}
function _i(e) {
  return fn(this.__data__, e) > -1;
}
function bi(e, t) {
  var n = this.__data__, a = fn(n, e);
  return a < 0 ? (++this.size, n.push([e, t])) : n[a][1] = t, this;
}
function Et(e) {
  var t = -1, n = e == null ? 0 : e.length;
  for (this.clear(); ++t < n; ) {
    var a = e[t];
    this.set(a[0], a[1]);
  }
}
Et.prototype.clear = pi;
Et.prototype.delete = wi;
Et.prototype.get = vi;
Et.prototype.has = _i;
Et.prototype.set = bi;
var yi = Gr(Qn, "Map");
function ki() {
  this.size = 0, this.__data__ = {
    hash: new ct(),
    map: new (yi || Et)(),
    string: new ct()
  };
}
function Ci(e) {
  var t = typeof e;
  return t == "string" || t == "number" || t == "symbol" || t == "boolean" ? e !== "__proto__" : e === null;
}
function hn(e, t) {
  var n = e.__data__;
  return Ci(t) ? n[typeof t == "string" ? "string" : "hash"] : n.map;
}
function Si(e) {
  var t = hn(this, e).delete(e);
  return this.size -= t ? 1 : 0, t;
}
function Li(e) {
  return hn(this, e).get(e);
}
function Ei(e) {
  return hn(this, e).has(e);
}
function Ti(e, t) {
  var n = hn(this, e), a = n.size;
  return n.set(e, t), this.size += n.size == a ? 0 : 1, this;
}
function ft(e) {
  var t = -1, n = e == null ? 0 : e.length;
  for (this.clear(); ++t < n; ) {
    var a = e[t];
    this.set(a[0], a[1]);
  }
}
ft.prototype.clear = ki;
ft.prototype.delete = Si;
ft.prototype.get = Li;
ft.prototype.has = Ei;
ft.prototype.set = Ti;
var Ii = "Expected a function";
function na(e, t) {
  if (typeof e != "function" || t != null && typeof t != "function")
    throw new TypeError(Ii);
  var n = function() {
    var a = arguments, r = t ? t.apply(this, a) : a[0], l = n.cache;
    if (l.has(r))
      return l.get(r);
    var s = e.apply(this, a);
    return n.cache = l.set(r, s) || l, s;
  };
  return n.cache = new (na.Cache || ft)(), n;
}
na.Cache = ft;
var Ni = 500;
function Pi(e) {
  var t = na(e, function(a) {
    return n.size === Ni && n.clear(), a;
  }), n = t.cache;
  return t;
}
var Oi = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g, Ai = /\\(\\)?/g, Fi = Pi(function(e) {
  var t = [];
  return e.charCodeAt(0) === 46 && t.push(""), e.replace(Oi, function(n, a, r, l) {
    t.push(r ? l.replace(Ai, "$1") : a || n);
  }), t;
});
function Mi(e) {
  return e == null ? "" : Vr(e);
}
function Wi(e, t) {
  return ta(e) ? e : ni(e, t) ? [e] : Fi(Mi(e));
}
function Ri(e) {
  if (typeof e == "string" || ea(e))
    return e;
  var t = e + "";
  return t == "0" && 1 / e == -1 / 0 ? "-0" : t;
}
function $i(e, t) {
  t = Wi(t, e);
  for (var n = 0, a = t.length; e != null && n < a; )
    e = e[Ri(t[n++])];
  return n && n == a ? e : void 0;
}
function Di(e, t, n) {
  var a = e == null ? void 0 : $i(e, t);
  return a === void 0 ? n : a;
}
function xi(e) {
  for (var t = -1, n = e == null ? 0 : e.length, a = {}; ++t < n; ) {
    var r = e[t];
    a[r[0]] = r[1];
  }
  return a;
}
const Kr = (e) => e === void 0, za = (e) => typeof e == "boolean", ut = (e) => typeof e == "number", Wn = (e) => typeof Element > "u" ? !1 : e instanceof Element, ji = (e) => it(e) ? !Number.isNaN(Number(e)) : !1;
var Ua;
const ht = typeof window < "u", zi = (e) => typeof e == "string", Ui = () => {
};
ht && ((Ua = window?.navigator) != null && Ua.userAgent) && /iP(ad|hone|od)/.test(window.navigator.userAgent);
function aa(e) {
  return typeof e == "function" ? e() : o(e);
}
function Vi(e) {
  return e;
}
function ra(e) {
  return vl() ? (_l(e), !0) : !1;
}
function Hi(e, t = !0) {
  vt() ? Lt(e) : t ? e() : lr(e);
}
function Br(e, t, n = {}) {
  const {
    immediate: a = !0
  } = n, r = U(!1);
  let l = null;
  function s() {
    l && (clearTimeout(l), l = null);
  }
  function i() {
    r.value = !1, s();
  }
  function u(...p) {
    s(), r.value = !0, l = setTimeout(() => {
      r.value = !1, l = null, e(...p);
    }, aa(t));
  }
  return a && (r.value = !0, ht && u()), ra(i), {
    isPending: wl(r),
    start: u,
    stop: i
  };
}
function Yr(e) {
  var t;
  const n = aa(e);
  return (t = n?.$el) != null ? t : n;
}
const Zr = ht ? window : void 0;
function Xr(...e) {
  let t, n, a, r;
  if (zi(e[0]) || Array.isArray(e[0]) ? ([n, a, r] = e, t = Zr) : [t, n, a, r] = e, !t)
    return Ui;
  Array.isArray(n) || (n = [n]), Array.isArray(a) || (a = [a]);
  const l = [], s = () => {
    l.forEach((v) => v()), l.length = 0;
  }, i = (v, C, E, P) => (v.addEventListener(C, E, P), () => v.removeEventListener(C, E, P)), u = wt(() => [Yr(t), aa(r)], ([v, C]) => {
    s(), v && l.push(...n.flatMap((E) => a.map((P) => i(v, E, P, C))));
  }, { immediate: !0, flush: "post" }), p = () => {
    u(), s();
  };
  return ra(p), p;
}
function Gi(e, t = !1) {
  const n = U(), a = () => n.value = !!e();
  return a(), Hi(a, t), n;
}
const Va = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {}, Ha = "__vueuse_ssr_handlers__";
Va[Ha] = Va[Ha] || {};
var Ga = Object.getOwnPropertySymbols, Ki = Object.prototype.hasOwnProperty, Bi = Object.prototype.propertyIsEnumerable, Yi = (e, t) => {
  var n = {};
  for (var a in e)
    Ki.call(e, a) && t.indexOf(a) < 0 && (n[a] = e[a]);
  if (e != null && Ga)
    for (var a of Ga(e))
      t.indexOf(a) < 0 && Bi.call(e, a) && (n[a] = e[a]);
  return n;
};
function Zi(e, t, n = {}) {
  const a = n, { window: r = Zr } = a, l = Yi(a, ["window"]);
  let s;
  const i = Gi(() => r && "ResizeObserver" in r), u = () => {
    s && (s.disconnect(), s = void 0);
  }, p = wt(() => Yr(e), (C) => {
    u(), i.value && r && C && (s = new ResizeObserver(t), s.observe(C, l));
  }, { immediate: !0, flush: "post" }), v = () => {
    u(), p();
  };
  return ra(v), {
    isSupported: i,
    stop: v
  };
}
var Ka;
(function(e) {
  e.UP = "UP", e.RIGHT = "RIGHT", e.DOWN = "DOWN", e.LEFT = "LEFT", e.NONE = "NONE";
})(Ka || (Ka = {}));
var Xi = Object.defineProperty, Ba = Object.getOwnPropertySymbols, Ji = Object.prototype.hasOwnProperty, qi = Object.prototype.propertyIsEnumerable, Ya = (e, t, n) => t in e ? Xi(e, t, { enumerable: !0, configurable: !0, writable: !0, value: n }) : e[t] = n, Qi = (e, t) => {
  for (var n in t || (t = {}))
    Ji.call(t, n) && Ya(e, n, t[n]);
  if (Ba)
    for (var n of Ba(t))
      qi.call(t, n) && Ya(e, n, t[n]);
  return e;
};
const ec = {
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
Qi({
  linear: Vi
}, ec);
const Za = {
  current: 0
}, Xa = U(0), Jr = 2e3, Ja = Symbol("elZIndexContextKey"), qr = Symbol("zIndexContextKey"), tc = (e) => {
  const t = vt() ? Ge(Ja, Za) : Za, n = e || (vt() ? Ge(qr, void 0) : void 0), a = D(() => {
    const s = o(n);
    return ut(s) ? s : Jr;
  }), r = D(() => a.value + Xa.value), l = () => (t.current++, Xa.value = t.current, r.value);
  return !ht && Ge(Ja), {
    initialZIndex: a,
    currentZIndex: r,
    nextZIndex: l
  };
};
var nc = {
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
const ac = (e) => (t, n) => rc(t, n, o(e)), rc = (e, t, n) => Di(n, e, e).replace(/\{(\w+)\}/g, (a, r) => {
  var l;
  return `${(l = t?.[r]) != null ? l : `{${r}}`}`;
}), lc = (e) => {
  const t = D(() => o(e).name), n = sr(e) ? e : U(e);
  return {
    lang: t,
    locale: n,
    t: ac(e)
  };
}, Qr = Symbol("localeContextKey"), sc = (e) => {
  const t = e || Ge(Qr, U());
  return lc(D(() => t.value || nc));
}, el = "__epPropKey", be = (e) => e, oc = (e) => jr(e) && !!e[el], tl = (e, t) => {
  if (!jr(e) || oc(e))
    return e;
  const { values: n, required: a, default: r, type: l, validator: s } = e, u = {
    type: l,
    required: !!a,
    validator: n || s ? (p) => {
      let v = !1, C = [];
      if (n && (C = Array.from(n), Ra(e, "default") && C.push(r), v || (v = C.includes(p))), s && (v || (v = s(p))), !v && C.length > 0) {
        const E = [...new Set(C)].map((P) => JSON.stringify(P)).join(", ");
        bl(`Invalid prop: validation failed${t ? ` for prop "${t}"` : ""}. Expected one of [${E}], got value ${JSON.stringify(p)}.`);
      }
      return v;
    } : void 0,
    [el]: !0
  };
  return Ra(e, "default") && (u.default = r), u;
}, Tt = (e) => xi(Object.entries(e).map(([t, n]) => [
  t,
  tl(n, t)
])), ic = ["", "default", "small", "large"], cc = tl({
  type: String,
  values: ic,
  required: !1
}), uc = Symbol("size"), dc = Symbol("emptyValuesContextKey"), fc = Tt({
  emptyValues: Array,
  valueOnClear: {
    type: [String, Number, Boolean, Function],
    default: void 0,
    validator: (e) => $t(e) ? !e() : !e
  }
}), qa = (e) => Object.keys(e), an = U();
function nl(e, t = void 0) {
  return vt() ? Ge(Dr, an) : an;
}
function al(e, t) {
  const n = nl(), a = qn(e, D(() => {
    var i;
    return ((i = n.value) == null ? void 0 : i.namespace) || Bt;
  })), r = sc(D(() => {
    var i;
    return (i = n.value) == null ? void 0 : i.locale;
  })), l = tc(D(() => {
    var i;
    return ((i = n.value) == null ? void 0 : i.zIndex) || Jr;
  })), s = D(() => {
    var i;
    return o(t) || ((i = n.value) == null ? void 0 : i.size) || "";
  });
  return rl(D(() => o(n) || {})), {
    ns: a,
    locale: r,
    zIndex: l,
    size: s
  };
}
const rl = (e, t, n = !1) => {
  var a;
  const r = !!vt(), l = r ? nl() : void 0, s = (a = void 0) != null ? a : r ? yl : void 0;
  if (!s)
    return;
  const i = D(() => {
    const u = o(e);
    return l?.value ? hc(l.value, u) : u;
  });
  return s(Dr, i), s(Qr, D(() => i.value.locale)), s(xr, D(() => i.value.namespace)), s(qr, D(() => i.value.zIndex)), s(uc, {
    size: D(() => i.value.size || "")
  }), s(dc, D(() => ({
    emptyValues: i.value.emptyValues,
    valueOnClear: i.value.valueOnClear
  }))), (n || !an.value) && (an.value = i.value), i;
}, hc = (e, t) => {
  const n = [.../* @__PURE__ */ new Set([...qa(e), ...qa(t)])], a = {};
  for (const r of n)
    a[r] = t[r] !== void 0 ? t[r] : e[r];
  return a;
};
var pn = (e, t) => {
  const n = e.__vccOpts || e;
  for (const [a, r] of t)
    n[a] = r;
  return n;
};
function Rn(e, t = "px") {
  if (!e)
    return "";
  if (ut(e) || ji(e))
    return `${e}${t}`;
  if (it(e))
    return e;
}
const ll = (e, t) => (e.install = (n) => {
  for (const a of [e, ...Object.values({})])
    n.component(a.name, a);
}, e), sl = (e, t) => (e.install = (n) => {
  e._context = n._context, n.config.globalProperties[t] = e;
}, e), pc = Tt({
  size: {
    type: be([Number, String])
  },
  color: {
    type: String
  }
}), mc = ae({
  name: "ElIcon",
  inheritAttrs: !1
}), gc = /* @__PURE__ */ ae({
  ...mc,
  props: pc,
  setup(e) {
    const t = e, n = qn("icon"), a = D(() => {
      const { size: r, color: l } = t;
      return !r && !l ? {} : {
        fontSize: Kr(r) ? void 0 : Rn(r),
        "--color": l
      };
    });
    return (r, l) => ($(), z("i", kl({
      class: o(n).b(),
      style: o(a)
    }, r.$attrs), [
      _t(r.$slots, "default")
    ], 16));
  }
});
var wc = /* @__PURE__ */ pn(gc, [["__file", "icon.vue"]]);
const rn = ll(wc);
/*! Element Plus Icons Vue v2.3.1 */
var vc = /* @__PURE__ */ ae({
  name: "CircleCloseFilled",
  __name: "circle-close-filled",
  setup(e) {
    return (t, n) => ($(), z("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 1024 1024"
    }, [
      m("path", {
        fill: "currentColor",
        d: "M512 64a448 448 0 1 1 0 896 448 448 0 0 1 0-896m0 393.664L407.936 353.6a38.4 38.4 0 1 0-54.336 54.336L457.664 512 353.6 616.064a38.4 38.4 0 1 0 54.336 54.336L512 566.336 616.064 670.4a38.4 38.4 0 1 0 54.336-54.336L566.336 512 670.4 407.936a38.4 38.4 0 1 0-54.336-54.336z"
      })
    ]));
  }
}), _c = vc, bc = /* @__PURE__ */ ae({
  name: "Close",
  __name: "close",
  setup(e) {
    return (t, n) => ($(), z("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 1024 1024"
    }, [
      m("path", {
        fill: "currentColor",
        d: "M764.288 214.592 512 466.88 259.712 214.592a31.936 31.936 0 0 0-45.12 45.12L466.752 512 214.528 764.224a31.936 31.936 0 1 0 45.12 45.184L512 557.184l252.288 252.288a31.936 31.936 0 0 0 45.12-45.12L557.12 512.064l252.288-252.352a31.936 31.936 0 1 0-45.12-45.184z"
      })
    ]));
  }
}), ol = bc, yc = /* @__PURE__ */ ae({
  name: "InfoFilled",
  __name: "info-filled",
  setup(e) {
    return (t, n) => ($(), z("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 1024 1024"
    }, [
      m("path", {
        fill: "currentColor",
        d: "M512 64a448 448 0 1 1 0 896.064A448 448 0 0 1 512 64m67.2 275.072c33.28 0 60.288-23.104 60.288-57.344s-27.072-57.344-60.288-57.344c-33.28 0-60.16 23.104-60.16 57.344s26.88 57.344 60.16 57.344M590.912 699.2c0-6.848 2.368-24.64 1.024-34.752l-52.608 60.544c-10.88 11.456-24.512 19.392-30.912 17.28a12.992 12.992 0 0 1-8.256-14.72l87.68-276.992c7.168-35.136-12.544-67.2-54.336-71.296-44.096 0-108.992 44.736-148.48 101.504 0 6.784-1.28 23.68.064 33.792l52.544-60.608c10.88-11.328 23.552-19.328 29.952-17.152a12.8 12.8 0 0 1 7.808 16.128L388.48 728.576c-10.048 32.256 8.96 63.872 55.04 71.04 67.84 0 107.904-43.648 147.456-100.416z"
      })
    ]));
  }
}), kc = yc, Cc = /* @__PURE__ */ ae({
  name: "SuccessFilled",
  __name: "success-filled",
  setup(e) {
    return (t, n) => ($(), z("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 1024 1024"
    }, [
      m("path", {
        fill: "currentColor",
        d: "M512 64a448 448 0 1 1 0 896 448 448 0 0 1 0-896m-55.808 536.384-99.52-99.584a38.4 38.4 0 1 0-54.336 54.336l126.72 126.72a38.272 38.272 0 0 0 54.336 0l262.4-262.464a38.4 38.4 0 1 0-54.272-54.336z"
      })
    ]));
  }
}), Sc = Cc, Lc = /* @__PURE__ */ ae({
  name: "WarningFilled",
  __name: "warning-filled",
  setup(e) {
    return (t, n) => ($(), z("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 1024 1024"
    }, [
      m("path", {
        fill: "currentColor",
        d: "M512 64a448 448 0 1 1 0 896 448 448 0 0 1 0-896m0 192a58.432 58.432 0 0 0-58.24 63.744l23.36 256.384a35.072 35.072 0 0 0 69.76 0l23.296-256.384A58.432 58.432 0 0 0 512 256m0 512a51.2 51.2 0 1 0 0-102.4 51.2 51.2 0 0 0 0 102.4"
      })
    ]));
  }
}), Ec = Lc;
const il = be([
  String,
  Object,
  Function
]), Tc = {
  Close: ol
}, Ic = {
  Close: ol
}, ln = {
  success: Sc,
  warning: Ec,
  error: _c,
  info: kc
}, Nc = (e) => e, Yt = {
  esc: "Escape",
  delete: "Delete",
  backspace: "Backspace"
}, Pc = Tt({
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
    type: be([String, Object, Array])
  },
  offset: {
    type: be(Array),
    default: [0, 0]
  },
  badgeClass: {
    type: String
  }
}), Oc = ae({
  name: "ElBadge"
}), Ac = /* @__PURE__ */ ae({
  ...Oc,
  props: Pc,
  setup(e, { expose: t }) {
    const n = e, a = qn("badge"), r = D(() => n.isDot ? "" : ut(n.value) && ut(n.max) ? n.max < n.value ? `${n.max}+` : `${n.value}` : `${n.value}`), l = D(() => {
      var s, i, u, p, v;
      return [
        {
          backgroundColor: n.color,
          marginRight: Rn(-((i = (s = n.offset) == null ? void 0 : s[0]) != null ? i : 0)),
          marginTop: Rn((p = (u = n.offset) == null ? void 0 : u[1]) != null ? p : 0)
        },
        (v = n.badgeStyle) != null ? v : {}
      ];
    });
    return t({
      content: r
    }), (s, i) => ($(), z("div", {
      class: Z(o(a).b())
    }, [
      _t(s.$slots, "default"),
      L(Hn, {
        name: `${o(a).namespace.value}-zoom-in-center`,
        persisted: ""
      }, {
        default: ot(() => [
          Zt(m("sup", {
            class: Z([
              o(a).e("content"),
              o(a).em("content", s.type),
              o(a).is("fixed", !!s.$slots.default),
              o(a).is("dot", s.isDot),
              o(a).is("hide-zero", !s.showZero && n.value === 0),
              s.badgeClass
            ]),
            style: Xt(o(l))
          }, [
            _t(s.$slots, "content", { value: o(r) }, () => [
              oe(N(o(r)), 1)
            ])
          ], 6), [
            [Jt, !s.hidden && (o(r) || s.isDot || s.$slots.content)]
          ])
        ]),
        _: 3
      }, 8, ["name"])
    ], 2));
  }
});
var Fc = /* @__PURE__ */ pn(Ac, [["__file", "badge.vue"]]);
const Mc = ll(Fc), Wc = Tt({
  a11y: {
    type: Boolean,
    default: !0
  },
  locale: {
    type: be(Object)
  },
  size: cc,
  button: {
    type: be(Object)
  },
  experimentalFeatures: {
    type: be(Object)
  },
  keyboardNavigation: {
    type: Boolean,
    default: !0
  },
  message: {
    type: be(Object)
  },
  zIndex: Number,
  namespace: {
    type: String,
    default: "el"
  },
  ...fc
}), Ce = {};
ae({
  name: "ElConfigProvider",
  props: Wc,
  setup(e, { slots: t }) {
    wt(() => e.message, (a) => {
      Object.assign(Ce, a ?? {});
    }, { immediate: !0, deep: !0 });
    const n = rl(e);
    return () => _t(t, "default", { config: n?.value });
  }
});
const cl = ["success", "info", "warning", "error"], fe = Nc({
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
  appendTo: ht ? document.body : void 0
}), Rc = Tt({
  customClass: {
    type: String,
    default: fe.customClass
  },
  center: {
    type: Boolean,
    default: fe.center
  },
  dangerouslyUseHTMLString: {
    type: Boolean,
    default: fe.dangerouslyUseHTMLString
  },
  duration: {
    type: Number,
    default: fe.duration
  },
  icon: {
    type: il,
    default: fe.icon
  },
  id: {
    type: String,
    default: fe.id
  },
  message: {
    type: be([
      String,
      Object,
      Function
    ]),
    default: fe.message
  },
  onClose: {
    type: be(Function),
    default: fe.onClose
  },
  showClose: {
    type: Boolean,
    default: fe.showClose
  },
  type: {
    type: String,
    values: cl,
    default: fe.type
  },
  plain: {
    type: Boolean,
    default: fe.plain
  },
  offset: {
    type: Number,
    default: fe.offset
  },
  zIndex: {
    type: Number,
    default: fe.zIndex
  },
  grouping: {
    type: Boolean,
    default: fe.grouping
  },
  repeatNum: {
    type: Number,
    default: fe.repeatNum
  }
}), $c = {
  destroy: () => !0
}, Ee = Cl([]), Dc = (e) => {
  const t = Ee.findIndex((r) => r.id === e), n = Ee[t];
  let a;
  return t > 0 && (a = Ee[t - 1]), { current: n, prev: a };
}, xc = (e) => {
  const { prev: t } = Dc(e);
  return t ? t.vm.exposed.bottom.value : 0;
}, jc = (e, t) => Ee.findIndex((a) => a.id === e) > 0 ? 16 : t, zc = ae({
  name: "ElMessage"
}), Uc = /* @__PURE__ */ ae({
  ...zc,
  props: Rc,
  emits: $c,
  setup(e, { expose: t }) {
    const n = e, { Close: a } = Ic, { ns: r, zIndex: l } = al("message"), { currentZIndex: s, nextZIndex: i } = l, u = U(), p = U(!1), v = U(0);
    let C;
    const E = D(() => n.type ? n.type === "error" ? "danger" : n.type : "info"), P = D(() => {
      const y = n.type;
      return { [r.bm("icon", y)]: y && ln[y] };
    }), W = D(() => n.icon || ln[n.type] || ""), b = D(() => xc(n.id)), h = D(() => jc(n.id, n.offset) + b.value), d = D(() => v.value + h.value), w = D(() => ({
      top: `${h.value}px`,
      zIndex: s.value
    }));
    function k() {
      n.duration !== 0 && ({ stop: C } = Br(() => {
        O();
      }, n.duration));
    }
    function _() {
      C?.();
    }
    function O() {
      p.value = !1;
    }
    function A({ code: y }) {
      y === Yt.esc && O();
    }
    return Lt(() => {
      k(), i(), p.value = !0;
    }), wt(() => n.repeatNum, () => {
      _(), k();
    }), Xr(document, "keydown", A), Zi(u, () => {
      v.value = u.value.getBoundingClientRect().height;
    }), t({
      visible: p,
      bottom: d,
      close: O
    }), (y, q) => ($(), Se(Hn, {
      name: o(r).b("fade"),
      onBeforeLeave: y.onClose,
      onAfterLeave: (Q) => y.$emit("destroy"),
      persisted: ""
    }, {
      default: ot(() => [
        Zt(m("div", {
          id: y.id,
          ref_key: "messageRef",
          ref: u,
          class: Z([
            o(r).b(),
            { [o(r).m(y.type)]: y.type },
            o(r).is("center", y.center),
            o(r).is("closable", y.showClose),
            o(r).is("plain", y.plain),
            y.customClass
          ]),
          style: Xt(o(w)),
          role: "alert",
          onMouseenter: _,
          onMouseleave: k
        }, [
          y.repeatNum > 1 ? ($(), Se(o(Mc), {
            key: 0,
            value: y.repeatNum,
            type: o(E),
            class: Z(o(r).e("badge"))
          }, null, 8, ["value", "type", "class"])) : we("v-if", !0),
          o(W) ? ($(), Se(o(rn), {
            key: 1,
            class: Z([o(r).e("icon"), o(P)])
          }, {
            default: ot(() => [
              ($(), Se(or(o(W))))
            ]),
            _: 1
          }, 8, ["class"])) : we("v-if", !0),
          _t(y.$slots, "default", {}, () => [
            y.dangerouslyUseHTMLString ? ($(), z(Ke, { key: 1 }, [
              we(" Caution here, message could've been compromised, never use user's input as message "),
              m("p", {
                class: Z(o(r).e("content")),
                innerHTML: y.message
              }, null, 10, ["innerHTML"])
            ], 2112)) : ($(), z("p", {
              key: 0,
              class: Z(o(r).e("content"))
            }, N(y.message), 3))
          ]),
          y.showClose ? ($(), Se(o(rn), {
            key: 2,
            class: Z(o(r).e("closeBtn")),
            onClick: xt(O, ["stop"])
          }, {
            default: ot(() => [
              L(o(a))
            ]),
            _: 1
          }, 8, ["class", "onClick"])) : we("v-if", !0)
        ], 46, ["id"]), [
          [Jt, p.value]
        ])
      ]),
      _: 3
    }, 8, ["name", "onBeforeLeave", "onAfterLeave"]));
  }
});
var Vc = /* @__PURE__ */ pn(Uc, [["__file", "message.vue"]]);
let Hc = 1;
const ul = (e) => {
  const t = !e || it(e) || Ft(e) || $t(e) ? { message: e } : e, n = {
    ...fe,
    ...t
  };
  if (!n.appendTo)
    n.appendTo = document.body;
  else if (it(n.appendTo)) {
    let a = document.querySelector(n.appendTo);
    Wn(a) || (a = document.body), n.appendTo = a;
  }
  return za(Ce.grouping) && !n.grouping && (n.grouping = Ce.grouping), ut(Ce.duration) && n.duration === 3e3 && (n.duration = Ce.duration), ut(Ce.offset) && n.offset === 16 && (n.offset = Ce.offset), za(Ce.showClose) && !n.showClose && (n.showClose = Ce.showClose), n;
}, Gc = (e) => {
  const t = Ee.indexOf(e);
  if (t === -1)
    return;
  Ee.splice(t, 1);
  const { handler: n } = e;
  n.close();
}, Kc = ({ appendTo: e, ...t }, n) => {
  const a = `message_${Hc++}`, r = t.onClose, l = document.createElement("div"), s = {
    ...t,
    id: a,
    onClose: () => {
      r?.(), Gc(v);
    },
    onDestroy: () => {
      qt(null, l);
    }
  }, i = L(Vc, s, $t(s.message) || Ft(s.message) ? {
    default: $t(s.message) ? s.message : () => s.message
  } : null);
  i.appContext = n || Ct._context, qt(i, l), e.appendChild(l.firstElementChild);
  const u = i.component, v = {
    id: a,
    vnode: i,
    vm: u,
    handler: {
      close: () => {
        u.exposed.visible.value = !1;
      }
    },
    props: i.component.props
  };
  return v;
}, Ct = (e = {}, t) => {
  if (!ht)
    return { close: () => {
    } };
  const n = ul(e);
  if (n.grouping && Ee.length) {
    const r = Ee.find(({ vnode: l }) => {
      var s;
      return ((s = l.props) == null ? void 0 : s.message) === n.message;
    });
    if (r)
      return r.props.repeatNum += 1, r.props.type = n.type, r.handler;
  }
  if (ut(Ce.max) && Ee.length >= Ce.max)
    return { close: () => {
    } };
  const a = Kc(n, t);
  return Ee.push(a), a.handler;
};
cl.forEach((e) => {
  Ct[e] = (t = {}, n) => {
    const a = ul(t);
    return Ct({ ...a, type: e }, n);
  };
});
function Bc(e) {
  for (const t of Ee)
    (!e || e === t.props.type) && t.handler.close();
}
Ct.closeAll = Bc;
Ct._context = null;
const Yc = sl(Ct, "$message"), dl = [
  "success",
  "info",
  "warning",
  "error"
], Zc = Tt({
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
    type: il
  },
  id: {
    type: String,
    default: ""
  },
  message: {
    type: be([
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
    type: be(Function),
    default: () => {
    }
  },
  onClose: {
    type: be(Function),
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
    values: [...dl, ""],
    default: ""
  },
  zIndex: Number
}), Xc = {
  destroy: () => !0
}, Jc = ae({
  name: "ElNotification"
}), qc = /* @__PURE__ */ ae({
  ...Jc,
  props: Zc,
  emits: Xc,
  setup(e, { expose: t }) {
    const n = e, { ns: a, zIndex: r } = al("notification"), { nextZIndex: l, currentZIndex: s } = r, { Close: i } = Tc, u = U(!1);
    let p;
    const v = D(() => {
      const k = n.type;
      return k && ln[n.type] ? a.m(k) : "";
    }), C = D(() => n.type && ln[n.type] || n.icon), E = D(() => n.position.endsWith("right") ? "right" : "left"), P = D(() => n.position.startsWith("top") ? "top" : "bottom"), W = D(() => {
      var k;
      return {
        [P.value]: `${n.offset}px`,
        zIndex: (k = n.zIndex) != null ? k : s.value
      };
    });
    function b() {
      n.duration > 0 && ({ stop: p } = Br(() => {
        u.value && d();
      }, n.duration));
    }
    function h() {
      p?.();
    }
    function d() {
      u.value = !1;
    }
    function w({ code: k }) {
      k === Yt.delete || k === Yt.backspace ? h() : k === Yt.esc ? u.value && d() : b();
    }
    return Lt(() => {
      b(), l(), u.value = !0;
    }), Xr(document, "keydown", w), t({
      visible: u,
      close: d
    }), (k, _) => ($(), Se(Hn, {
      name: o(a).b("fade"),
      onBeforeLeave: k.onClose,
      onAfterLeave: (O) => k.$emit("destroy"),
      persisted: ""
    }, {
      default: ot(() => [
        Zt(m("div", {
          id: k.id,
          class: Z([o(a).b(), k.customClass, o(E)]),
          style: Xt(o(W)),
          role: "alert",
          onMouseenter: h,
          onMouseleave: b,
          onClick: k.onClick
        }, [
          o(C) ? ($(), Se(o(rn), {
            key: 0,
            class: Z([o(a).e("icon"), o(v)])
          }, {
            default: ot(() => [
              ($(), Se(or(o(C))))
            ]),
            _: 1
          }, 8, ["class"])) : we("v-if", !0),
          m("div", {
            class: Z(o(a).e("group"))
          }, [
            m("h2", {
              class: Z(o(a).e("title")),
              textContent: N(k.title)
            }, null, 10, ["textContent"]),
            Zt(m("div", {
              class: Z(o(a).e("content")),
              style: Xt(k.title ? void 0 : { margin: 0 })
            }, [
              _t(k.$slots, "default", {}, () => [
                k.dangerouslyUseHTMLString ? ($(), z(Ke, { key: 1 }, [
                  we(" Caution here, message could've been compromised, never use user's input as message "),
                  m("p", { innerHTML: k.message }, null, 8, ["innerHTML"])
                ], 2112)) : ($(), z("p", { key: 0 }, N(k.message), 1))
              ])
            ], 6), [
              [Jt, k.message]
            ]),
            k.showClose ? ($(), Se(o(rn), {
              key: 0,
              class: Z(o(a).e("closeBtn")),
              onClick: xt(d, ["stop"])
            }, {
              default: ot(() => [
                L(o(i))
              ]),
              _: 1
            }, 8, ["class", "onClick"])) : we("v-if", !0)
          ], 2)
        ], 46, ["id", "onClick"]), [
          [Jt, u.value]
        ])
      ]),
      _: 3
    }, 8, ["name", "onBeforeLeave", "onAfterLeave"]));
  }
});
var Qc = /* @__PURE__ */ pn(qc, [["__file", "notification.vue"]]);
const sn = {
  "top-left": [],
  "top-right": [],
  "bottom-left": [],
  "bottom-right": []
}, $n = 16;
let eu = 1;
const St = function(e = {}, t) {
  if (!ht)
    return { close: () => {
    } };
  (it(e) || Ft(e)) && (e = { message: e });
  const n = e.position || "top-right";
  let a = e.offset || 0;
  sn[n].forEach(({ vm: v }) => {
    var C;
    a += (((C = v.el) == null ? void 0 : C.offsetHeight) || 0) + $n;
  }), a += $n;
  const r = `notification_${eu++}`, l = e.onClose, s = {
    ...e,
    offset: a,
    id: r,
    onClose: () => {
      tu(r, n, l);
    }
  };
  let i = document.body;
  Wn(e.appendTo) ? i = e.appendTo : it(e.appendTo) && (i = document.querySelector(e.appendTo)), Wn(i) || (i = document.body);
  const u = document.createElement("div"), p = L(Qc, s, $t(s.message) ? s.message : Ft(s.message) ? () => s.message : null);
  return p.appContext = Kr(t) ? St._context : t, p.props.onDestroy = () => {
    qt(null, u);
  }, qt(p, u), sn[n].push({ vm: p }), i.appendChild(u.firstElementChild), {
    close: () => {
      p.component.exposed.visible.value = !1;
    }
  };
};
dl.forEach((e) => {
  St[e] = (t = {}, n) => ((it(t) || Ft(t)) && (t = {
    message: t
  }), St({ ...t, type: e }, n));
});
function tu(e, t, n) {
  const a = sn[t], r = a.findIndex(({ vm: p }) => {
    var v;
    return ((v = p.component) == null ? void 0 : v.props.id) === e;
  });
  if (r === -1)
    return;
  const { vm: l } = a[r];
  if (!l)
    return;
  n?.(l);
  const s = l.el.offsetHeight, i = t.split("-")[0];
  a.splice(r, 1);
  const u = a.length;
  if (!(u < 1))
    for (let p = r; p < u; p++) {
      const { el: v, component: C } = a[p].vm, E = Number.parseInt(v.style[i], 10) - s - $n;
      C.props.offset = E;
    }
}
function nu() {
  for (const e of Object.values(sn))
    e.forEach(({ vm: t }) => {
      t.component.exposed.visible.value = !1;
    });
}
St.closeAll = nu;
St._context = null;
const au = sl(St, "$notify"), K = {
  /**
   * 显示消息提示（简化版）
   * @param message 消息内容
   * @param type 消息类型，默认 success
   * @param position 显示位置，默认 center
   * @param duration 显示时长（毫秒），默认 3000
   */
  msg(e, t = "success", n = "center", a) {
    this.message({
      message: e,
      type: t,
      position: n,
      duration: a
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
      position: a = "center",
      duration: r = 3e3,
      showClose: l = !1
    } = e;
    a === "center" ? Yc({
      message: t,
      type: n,
      duration: r,
      showClose: l,
      grouping: !0,
      customClass: `app-toast app-toast--${n}`
    }) : au({
      message: t,
      type: n,
      position: a,
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
};
var Dn;
(function(e) {
  e[e.Audio = 1] = "Audio", e[e.Cache = 2] = "Cache", e[e.Config = 3] = "Config", e[e.Data = 4] = "Data", e[e.LocalData = 5] = "LocalData", e[e.Document = 6] = "Document", e[e.Download = 7] = "Download", e[e.Picture = 8] = "Picture", e[e.Public = 9] = "Public", e[e.Video = 10] = "Video", e[e.Resource = 11] = "Resource", e[e.Temp = 12] = "Temp", e[e.AppConfig = 13] = "AppConfig", e[e.AppData = 14] = "AppData", e[e.AppLocalData = 15] = "AppLocalData", e[e.AppCache = 16] = "AppCache", e[e.AppLog = 17] = "AppLog", e[e.Desktop = 18] = "Desktop", e[e.Executable = 19] = "Executable", e[e.Font = 20] = "Font", e[e.Home = 21] = "Home", e[e.Runtime = 22] = "Runtime", e[e.Template = 23] = "Template";
})(Dn || (Dn = {}));
async function ru() {
  return T("plugin:path|resolve_directory", {
    directory: Dn.AppCache
  });
}
async function lu(...e) {
  return T("plugin:path|join", { paths: e });
}
async function Qa(e, t) {
  await T("plugin:opener|open_path", {
    path: e,
    with: t
  });
}
const su = () => ({
  mode: "folder",
  fixedImagePath: null,
  folderPath: null,
  scheduleEnabled: !1,
  intervalMinutes: 30,
  order: "random",
  folderSort: "fileNameAscending",
  fitMode: "fillCrop",
  autoRestore: !0,
  wallhavenSource: "hot",
  wallhavenCategory: "general",
  wallhavenQuery: null,
  folderSeenPaths: [],
  wallhavenSeenIds: [],
  wallhavenHistoryScope: null,
  taskbarTransparent: !1,
  taskbarTransparencyRegistryHadValue: null,
  taskbarTransparencyRegistryPreviousValue: null,
  systemTransparencyRegistryHadValue: null,
  systemTransparencyRegistryPreviousValue: null,
  lastFolderIndex: 0,
  lastAppliedPath: null
}), ou = (e) => e ? /^https?:\/\//i.test(e) ? e : Tl(e) : "", er = () => T("wallpaper_get_config"), xn = (e) => T("wallpaper_save_config", { config: e }), iu = () => T("wallpaper_restart_explorer_for_taskbar_transparency"), tr = () => T("wallpaper_get_status"), nr = (e) => T("wallpaper_scan_folder", { path: e }), ar = (e) => T("wallpaper_set_fixed_image", { path: e }), cu = () => T("wallpaper_switch_now"), uu = (e) => T("wallpaper_apply_current_fit", { fitMode: e }), du = (e) => T("wallpaper_fetch_wallhaven", { params: e }), fu = (e) => T("wallpaper_set_wallhaven_image", { wallpaper: e }), hu = (e) => T("wallpaper_download_wallhaven_image", { wallpaper: e }), pu = () => T("wallpaper_clear_cache"), mu = (e, t) => new RegExp(`Command\\s+${t}\\s+not\\s+found`, "i").test(String(e)), gu = async () => {
  try {
    await T("wallpaper_open_cache_dir");
    return;
  } catch (n) {
    if (!mu(n, "wallpaper_open_cache_dir"))
      throw n;
  }
  const e = await ru(), t = await lu(e, "wallpaper-switcher");
  try {
    await Qa(t);
  } catch {
    await Qa(e);
  }
};
function wu({ config: e, refreshStatus: t }) {
  const { t: n } = Pe(), a = U("switcher"), r = U([]), l = U(1), s = U(1), i = U(!1), u = U(""), p = U(""), v = U("general"), C = U("hot"), E = U(null), P = U(!1), W = U(!1), b = U(/* @__PURE__ */ new Set()), h = U(/* @__PURE__ */ new Set()), d = /* @__PURE__ */ new Map();
  let w = null, k = null, _ = null, O = 0;
  const A = D(() => C.value === "hot" ? "Hot" : C.value === "favorites" ? "Favorites" : "Toplist"), y = D(() => r.value.slice(0, 8)), q = D(() => {
    const x = p.value.trim();
    return v.value === "nature" ? x ? `${x} nature` : "nature" : x || null;
  }), Q = D(() => v.value), ie = (x) => {
    const V = String(x).replace(/^Error:\s*/, "");
    return /unexpected EOF|handshake|timed out|error sending request|client error|Connect/i.test(
      V
    ) ? n("wallpaperSwitcher.messages.wallhavenNetworkError") : V.length > 120 ? `${V.slice(0, 120)}...` : V;
  }, ue = (x, V) => {
    const re = new Set(b.value);
    V ? re.add(x) : re.delete(x), b.value = re;
  }, ee = (x) => {
    const V = new Set(h.value);
    V.add(x), h.value = V;
  }, Ze = (x, V) => {
    if (!(V instanceof HTMLImageElement)) {
      d.delete(x.id);
      return;
    }
    if (d.set(x.id, V), !w) {
      V.src = x.thumbs.large;
      return;
    }
    V.dataset.src = x.thumbs.large, w.observe(V);
  }, Re = () => {
    h.value = /* @__PURE__ */ new Set(), d.clear();
  }, Xe = async () => {
    e.value.wallhavenQuery = p.value.trim() || null, e.value.wallhavenCategory = v.value, e.value.wallhavenSource = C.value, e.value.mode = "wallhaven", await xn(e.value);
  }, ye = async (x = l.value) => {
    const V = ++O;
    i.value = !0, u.value = "", r.value = [], Re();
    try {
      await Xe();
      const re = await du({
        source: C.value,
        page: x,
        query: q.value,
        category: Q.value
      });
      if (V !== O) return;
      r.value = re.data, l.value = re.page, s.value = Math.max(1, re.lastPage), await lr();
      for (const me of d.values())
        w && w.observe(me);
    } catch (re) {
      if (V !== O) return;
      r.value = [], u.value = ie(re), K.msg(u.value, "error");
    } finally {
      V === O && (i.value = !1);
    }
  }, Je = () => ye(1), qe = async (x) => {
    C.value = x, await ye(1);
  }, ve = async (x) => {
    v.value = x, await ye(1);
  }, $e = async () => {
    p.value = "", v.value = e.value.wallhavenCategory || "general", C.value = e.value.wallhavenSource, l.value = 1, u.value = "", r.value = [], a.value = "wallhaven", await ye(1);
  }, De = (x) => {
    E.value = x, P.value = !0, W.value = !1;
  }, xe = () => {
    E.value = null, P.value = !1, W.value = !1;
  }, Qe = async () => {
    a.value = "switcher", xe(), await t();
  }, et = () => {
    P.value = !1;
  }, tt = () => {
    P.value = !1, W.value = !0;
  }, je = async (x) => {
    ue(x.id, !0);
    try {
      K.msg(n("wallpaperSwitcher.messages.settingWallpaper"), "info"), await fu(x), await t(), K.msg(n("wallpaperSwitcher.messages.wallpaperSet"), "success");
    } catch (V) {
      K.msg(String(V), "error");
    } finally {
      ue(x.id, !1);
    }
  }, nt = async (x) => {
    ue(x.id, !0);
    try {
      K.msg(n("wallpaperSwitcher.messages.downloadingWallpaper"), "info"), await hu(x), await t(), K.msg(n("wallpaperSwitcher.messages.wallpaperDownloaded"), "success");
    } catch (V) {
      K.msg(String(V), "error");
    } finally {
      ue(x.id, !1);
    }
  }, ze = async () => {
    l.value > 1 && await ye(l.value - 1);
  }, at = async () => {
    l.value < s.value && await ye(l.value + 1);
  };
  return Lt(() => {
    w = new IntersectionObserver(
      (x) => {
        for (const V of x) {
          if (!V.isIntersecting) continue;
          const re = V.target, me = re.dataset.src;
          me && re.src !== me && (re.src = me), w?.unobserve(re);
        }
      },
      { root: null, rootMargin: "120px" }
    ), k = null, _ = null;
  }), Vn(() => {
    w?.disconnect(), w = null, k?.(), _?.();
  }), {
    activeView: a,
    wallpapers: r,
    wallhavenPage: l,
    wallhavenLastPage: s,
    wallhavenLoading: i,
    wallhavenError: u,
    wallhavenKeyword: p,
    wallhavenCategory: v,
    wallhavenSource: C,
    previewWallpaper: E,
    previewLoading: P,
    previewLoadFailed: W,
    workingIds: b,
    loadedThumbIds: h,
    wallhavenSourceLabel: A,
    visibleWallpapers: y,
    openWallhavenGrid: $e,
    backToSwitcher: Qe,
    openPreview: De,
    closePreview: xe,
    markPreviewLoaded: et,
    markPreviewFailed: tt,
    markThumbLoaded: ee,
    setThumbRef: Ze,
    refreshWallhaven: Je,
    setWallhavenSource: qe,
    setWallhavenCategory: ve,
    setWallpaperFromWallhaven: je,
    downloadWallpaperFromWallhaven: nt,
    prevWallhavenPage: ze,
    nextWallhavenPage: at,
    setupListeners: async () => {
      k = await Qt("wallpaper-switcher-changed", t), _ = await Qt(
        "wallpaper-switcher-error",
        (x) => {
          K.msg(
            x.payload?.message || n("wallpaperSwitcher.messages.scheduleSwitchFailed"),
            "error"
          );
        }
      );
    }
  };
}
var vu = {
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
function _u() {
  return "icon-" + ((1 + Math.random()) * 4294967296 | 0).toString(16).substring(1);
}
function bu(e, t, n) {
  var a = typeof t.fill == "string" ? [t.fill] : t.fill || [], r = [], l = t.theme || n.theme;
  switch (l) {
    case "outline":
      r.push(typeof a[0] == "string" ? a[0] : "currentColor"), r.push("none"), r.push(typeof a[0] == "string" ? a[0] : "currentColor"), r.push("none");
      break;
    case "filled":
      r.push(typeof a[0] == "string" ? a[0] : "currentColor"), r.push(typeof a[0] == "string" ? a[0] : "currentColor"), r.push("#FFF"), r.push("#FFF");
      break;
    case "two-tone":
      r.push(typeof a[0] == "string" ? a[0] : "currentColor"), r.push(typeof a[1] == "string" ? a[1] : n.colors.twoTone.twoTone), r.push(typeof a[0] == "string" ? a[0] : "currentColor"), r.push(typeof a[1] == "string" ? a[1] : n.colors.twoTone.twoTone);
      break;
    case "multi-color":
      r.push(typeof a[0] == "string" ? a[0] : "currentColor"), r.push(typeof a[1] == "string" ? a[1] : n.colors.multiColor.outFillColor), r.push(typeof a[2] == "string" ? a[2] : n.colors.multiColor.innerStrokeColor), r.push(typeof a[3] == "string" ? a[3] : n.colors.multiColor.innerFillColor);
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
var yu = Symbol("icon-context");
function pe(e, t, n) {
  var a = {
    name: "icon-" + e,
    props: ["size", "strokeWidth", "strokeLinecap", "strokeLinejoin", "theme", "fill", "spin"],
    setup: function(l) {
      var s = _u(), i = Ge(yu, vu);
      return function() {
        var u = l.size, p = l.strokeWidth, v = l.strokeLinecap, C = l.strokeLinejoin, E = l.theme, P = l.fill, W = l.spin, b = bu(s, {
          size: u,
          strokeWidth: p,
          strokeLinecap: v,
          strokeLinejoin: C,
          theme: E,
          fill: P
        }, i), h = [i.prefix + "-icon"];
        return h.push(i.prefix + "-icon-" + e), t && i.rtl && h.push(i.prefix + "-icon-rtl"), W && h.push(i.prefix + "-icon-spin"), L("span", {
          class: h.join(" ")
        }, [n(b)]);
      };
    }
  };
  return a;
}
const ku = pe("back", !0, function(e) {
  return L("svg", {
    width: e.size,
    height: e.size,
    viewBox: "0 0 48 48",
    fill: "none"
  }, [L("path", {
    "fill-rule": "evenodd",
    "clip-rule": "evenodd",
    d: "M44 40.8361C39.1069 34.8632 34.7617 31.4739 30.9644 30.6682C27.1671 29.8625 23.5517 29.7408 20.1182 30.303V41L4 23.5453L20.1182 7V17.167C26.4667 17.2172 31.8638 19.4948 36.3095 24C40.7553 28.5052 43.3187 34.1172 44 40.8361Z",
    fill: e.colors[1],
    stroke: e.colors[0],
    "stroke-width": e.strokeWidth,
    "stroke-linejoin": e.strokeLinejoin
  }, null)]);
}), on = pe("close-small", !1, function(e) {
  return L("svg", {
    width: e.size,
    height: e.size,
    viewBox: "0 0 48 48",
    fill: "none"
  }, [L("path", {
    d: "M14 14L34 34",
    stroke: e.colors[0],
    "stroke-width": e.strokeWidth,
    "stroke-linecap": e.strokeLinecap,
    "stroke-linejoin": e.strokeLinejoin
  }, null), L("path", {
    d: "M14 34L34 14",
    stroke: e.colors[0],
    "stroke-width": e.strokeWidth,
    "stroke-linecap": e.strokeLinecap,
    "stroke-linejoin": e.strokeLinejoin
  }, null)]);
}), fl = pe("computer", !1, function(e) {
  return L("svg", {
    width: e.size,
    height: e.size,
    viewBox: "0 0 48 48",
    fill: "none"
  }, [L("rect", {
    x: "19",
    y: "32",
    width: "10",
    height: "9",
    stroke: e.colors[0],
    "stroke-width": e.strokeWidth,
    "stroke-linecap": e.strokeLinecap,
    "stroke-linejoin": e.strokeLinejoin
  }, null), L("rect", {
    x: "5",
    y: "8",
    width: "38",
    height: "24",
    rx: "2",
    fill: e.colors[1],
    stroke: e.colors[0],
    "stroke-width": e.strokeWidth
  }, null), L("path", {
    d: "M22 27H26",
    stroke: e.colors[2],
    "stroke-width": e.strokeWidth,
    "stroke-linecap": e.strokeLinecap,
    "stroke-linejoin": e.strokeLinejoin
  }, null), L("path", {
    d: "M14 41L34 41",
    stroke: e.colors[0],
    "stroke-width": e.strokeWidth,
    "stroke-linecap": e.strokeLinecap,
    "stroke-linejoin": e.strokeLinejoin
  }, null)]);
}), Cu = pe("delete", !1, function(e) {
  return L("svg", {
    width: e.size,
    height: e.size,
    viewBox: "0 0 48 48",
    fill: "none"
  }, [L("path", {
    d: "M9 10V44H39V10H9Z",
    fill: e.colors[1],
    stroke: e.colors[0],
    "stroke-width": e.strokeWidth,
    "stroke-linejoin": e.strokeLinejoin
  }, null), L("path", {
    d: "M20 20V33",
    stroke: e.colors[2],
    "stroke-width": e.strokeWidth,
    "stroke-linecap": e.strokeLinecap,
    "stroke-linejoin": e.strokeLinejoin
  }, null), L("path", {
    d: "M28 20V33",
    stroke: e.colors[2],
    "stroke-width": e.strokeWidth,
    "stroke-linecap": e.strokeLinecap,
    "stroke-linejoin": e.strokeLinejoin
  }, null), L("path", {
    d: "M4 10H44",
    stroke: e.colors[0],
    "stroke-width": e.strokeWidth,
    "stroke-linecap": e.strokeLinecap,
    "stroke-linejoin": e.strokeLinejoin
  }, null), L("path", {
    d: "M16 10L19.289 4H28.7771L32 10H16Z",
    fill: e.colors[1],
    stroke: e.colors[0],
    "stroke-width": e.strokeWidth,
    "stroke-linejoin": e.strokeLinejoin
  }, null)]);
}), Su = pe("download", !1, function(e) {
  return L("svg", {
    width: e.size,
    height: e.size,
    viewBox: "0 0 48 48",
    fill: "none"
  }, [L("path", {
    d: "M6 24.0083V42H42V24",
    stroke: e.colors[0],
    "stroke-width": e.strokeWidth,
    "stroke-linecap": e.strokeLinecap,
    "stroke-linejoin": e.strokeLinejoin
  }, null), L("path", {
    d: "M33 23L24 32L15 23",
    stroke: e.colors[0],
    "stroke-width": e.strokeWidth,
    "stroke-linecap": e.strokeLinecap,
    "stroke-linejoin": e.strokeLinejoin
  }, null), L("path", {
    d: "M23.9917 6V32",
    stroke: e.colors[0],
    "stroke-width": e.strokeWidth,
    "stroke-linecap": e.strokeLinecap,
    "stroke-linejoin": e.strokeLinejoin
  }, null)]);
}), Cn = pe("folder-open", !0, function(e) {
  return L("svg", {
    width: e.size,
    height: e.size,
    viewBox: "0 0 48 48",
    fill: "none"
  }, [L("path", {
    d: "M4 9V41L9 21H39.5V15C39.5 13.8954 38.6046 13 37.5 13H24L19 7H6C4.89543 7 4 7.89543 4 9Z",
    stroke: e.colors[0],
    "stroke-width": e.strokeWidth,
    "stroke-linecap": e.strokeLinecap,
    "stroke-linejoin": e.strokeLinejoin
  }, null), L("path", {
    d: "M40 41L44 21H8.8125L4 41H40Z",
    fill: e.colors[1],
    stroke: e.colors[0],
    "stroke-width": e.strokeWidth,
    "stroke-linecap": e.strokeLinecap,
    "stroke-linejoin": e.strokeLinejoin
  }, null)]);
}), Lu = pe("lightning", !0, function(e) {
  return L("svg", {
    width: e.size,
    height: e.size,
    viewBox: "0 0 48 48",
    fill: "none"
  }, [L("path", {
    d: "M19 4H37L26 18H41L17 44L22 25H8L19 4Z",
    fill: e.colors[1],
    stroke: e.colors[0],
    "stroke-width": e.strokeWidth,
    "stroke-linejoin": e.strokeLinejoin
  }, null)]);
}), jn = pe("picture", !0, function(e) {
  return L("svg", {
    width: e.size,
    height: e.size,
    viewBox: "0 0 48 48",
    fill: "none"
  }, [L("path", {
    d: "M39 6H9C7.34315 6 6 7.34315 6 9V39C6 40.6569 7.34315 42 9 42H39C40.6569 42 42 40.6569 42 39V9C42 7.34315 40.6569 6 39 6Z",
    stroke: e.colors[0],
    "stroke-width": e.strokeWidth,
    "stroke-linecap": e.strokeLinecap,
    "stroke-linejoin": e.strokeLinejoin
  }, null), L("path", {
    d: "M18 23C20.7614 23 23 20.7614 23 18C23 15.2386 20.7614 13 18 13C15.2386 13 13 15.2386 13 18C13 20.7614 15.2386 23 18 23Z",
    fill: e.colors[1],
    stroke: e.colors[0],
    "stroke-width": e.strokeWidth,
    "stroke-linecap": e.strokeLinecap,
    "stroke-linejoin": e.strokeLinejoin
  }, null), L("path", {
    d: "M27.7901 26.2194C28.6064 25.1269 30.2528 25.1538 31.0329 26.2725L39.8077 38.8561C40.7322 40.182 39.7835 42.0001 38.1671 42.0001H16L27.7901 26.2194Z",
    stroke: e.colors[0],
    "stroke-width": e.strokeWidth,
    "stroke-linecap": e.strokeLinecap,
    "stroke-linejoin": e.strokeLinejoin
  }, null)]);
}), Eu = pe("picture-album", !0, function(e) {
  return L("svg", {
    width: e.size,
    height: e.size,
    viewBox: "0 0 48 48",
    fill: "none"
  }, [L("rect", {
    x: "6",
    y: "6",
    width: "30",
    height: "30",
    rx: "2",
    fill: e.colors[1],
    stroke: e.colors[0],
    "stroke-width": e.strokeWidth,
    "stroke-linejoin": e.strokeLinejoin
  }, null), L("path", {
    d: "M42 12V39C42 40.6569 40.6569 42 39 42H12",
    stroke: e.colors[0],
    "stroke-width": e.strokeWidth,
    "stroke-linecap": e.strokeLinecap,
    "stroke-linejoin": e.strokeLinejoin
  }, null), L("path", {
    d: "M6 25L13.6562 18.1944C14.4204 17.5152 15.5738 17.5216 16.3303 18.2094L26 27",
    stroke: e.colors[2],
    "stroke-width": e.strokeWidth,
    "stroke-linecap": e.strokeLinecap,
    "stroke-linejoin": e.strokeLinejoin
  }, null), L("path", {
    d: "M22 23L26.7849 19.0125C27.4971 18.4191 28.5237 18.3928 29.2653 18.949L36 24",
    stroke: e.colors[2],
    "stroke-width": e.strokeWidth,
    "stroke-linecap": e.strokeLinecap,
    "stroke-linejoin": e.strokeLinejoin
  }, null), L("path", {
    d: "M6 19L6 27",
    stroke: e.colors[0],
    "stroke-width": e.strokeWidth,
    "stroke-linecap": e.strokeLinecap,
    "stroke-linejoin": e.strokeLinejoin
  }, null), L("path", {
    d: "M36 19V27",
    stroke: e.colors[0],
    "stroke-width": e.strokeWidth,
    "stroke-linecap": e.strokeLinecap,
    "stroke-linejoin": e.strokeLinejoin
  }, null)]);
}), Tu = pe("pin", !0, function(e) {
  return L("svg", {
    width: e.size,
    height: e.size,
    viewBox: "0 0 48 48",
    fill: "none"
  }, [L("g", {
    "clip-path": "url(#" + e.id + "1c742167)"
  }, [L("path", {
    d: "M10.6963 17.5042C13.3347 14.8657 16.4701 14.9387 19.8781 16.8076L32.62 9.74509L31.8989 4.78683L43.2126 16.1005L38.2656 15.3907L31.1918 28.1214C32.9752 31.7589 33.1337 34.6647 30.4953 37.3032C30.4953 37.3032 26.235 33.0429 22.7171 29.525L6.44305 41.5564L18.4382 25.2461C14.9202 21.7281 10.6963 17.5042 10.6963 17.5042Z",
    fill: e.colors[1],
    stroke: e.colors[0],
    "stroke-width": e.strokeWidth,
    "stroke-linejoin": e.strokeLinejoin
  }, null)]), L("defs", null, [L("clipPath", {
    id: e.id + "1c742167"
  }, [L("rect", {
    width: "48",
    height: "48",
    fill: e.colors[2]
  }, null)])])]);
}), Iu = pe("preview-open", !1, function(e) {
  return L("svg", {
    width: e.size,
    height: e.size,
    viewBox: "0 0 48 48",
    fill: "none"
  }, [L("path", {
    d: "M24 36C35.0457 36 44 24 44 24C44 24 35.0457 12 24 12C12.9543 12 4 24 4 24C4 24 12.9543 36 24 36Z",
    fill: e.colors[1],
    stroke: e.colors[0],
    "stroke-width": e.strokeWidth,
    "stroke-linejoin": e.strokeLinejoin
  }, null), L("path", {
    d: "M24 29C26.7614 29 29 26.7614 29 24C29 21.2386 26.7614 19 24 19C21.2386 19 19 21.2386 19 24C19 26.7614 21.2386 29 24 29Z",
    fill: e.colors[3],
    stroke: e.colors[2],
    "stroke-width": e.strokeWidth,
    "stroke-linejoin": e.strokeLinejoin
  }, null)]);
}), zn = pe("refresh", !0, function(e) {
  return L("svg", {
    width: e.size,
    height: e.size,
    viewBox: "0 0 48 48",
    fill: "none"
  }, [L("path", {
    d: "M42 8V24",
    stroke: e.colors[0],
    "stroke-width": e.strokeWidth,
    "stroke-linecap": e.strokeLinecap,
    "stroke-linejoin": e.strokeLinejoin
  }, null), L("path", {
    d: "M6 24L6 40",
    stroke: e.colors[0],
    "stroke-width": e.strokeWidth,
    "stroke-linecap": e.strokeLinecap,
    "stroke-linejoin": e.strokeLinejoin
  }, null), L("path", {
    d: "M42 24C42 14.0589 33.9411 6 24 6C18.9145 6 14.3216 8.10896 11.0481 11.5M6 24C6 33.9411 14.0589 42 24 42C28.8556 42 33.2622 40.0774 36.5 36.9519",
    stroke: e.colors[0],
    "stroke-width": e.strokeWidth,
    "stroke-linecap": e.strokeLinecap,
    "stroke-linejoin": e.strokeLinejoin
  }, null)]);
}), Nu = pe("save", !0, function(e) {
  return L("svg", {
    width: e.size,
    height: e.size,
    viewBox: "0 0 48 48",
    fill: "none"
  }, [L("path", {
    d: "M6 9C6 7.34315 7.34315 6 9 6H34.2814L42 13.2065V39C42 40.6569 40.6569 42 39 42H9C7.34315 42 6 40.6569 6 39V9Z",
    fill: e.colors[1],
    stroke: e.colors[0],
    "stroke-width": e.strokeWidth,
    "stroke-linejoin": e.strokeLinejoin
  }, null), L("path", {
    "fill-rule": "evenodd",
    "clip-rule": "evenodd",
    d: "M24.0083 6L24 13.3846C24 13.7245 23.5523 14 23 14H15C14.4477 14 14 13.7245 14 13.3846L14 6",
    fill: e.colors[3]
  }, null), L("path", {
    d: "M24.0083 6L24 13.3846C24 13.7245 23.5523 14 23 14H15C14.4477 14 14 13.7245 14 13.3846L14 6H24.0083Z",
    stroke: e.colors[2],
    "stroke-width": e.strokeWidth,
    "stroke-linejoin": e.strokeLinejoin
  }, null), L("path", {
    d: "M9 6H34.2814",
    stroke: e.colors[0],
    "stroke-width": e.strokeWidth,
    "stroke-linecap": e.strokeLinecap,
    "stroke-linejoin": e.strokeLinejoin
  }, null), L("path", {
    d: "M14 26H34",
    stroke: e.colors[2],
    "stroke-width": e.strokeWidth,
    "stroke-linecap": e.strokeLinecap,
    "stroke-linejoin": e.strokeLinejoin
  }, null), L("path", {
    d: "M14 34H24.0083",
    stroke: e.colors[2],
    "stroke-width": e.strokeWidth,
    "stroke-linecap": e.strokeLinecap,
    "stroke-linejoin": e.strokeLinejoin
  }, null)]);
}), hl = pe("search", !0, function(e) {
  return L("svg", {
    width: e.size,
    height: e.size,
    viewBox: "0 0 48 48",
    fill: "none"
  }, [L("path", {
    d: "M21 38C30.3888 38 38 30.3888 38 21C38 11.6112 30.3888 4 21 4C11.6112 4 4 11.6112 4 21C4 30.3888 11.6112 38 21 38Z",
    fill: e.colors[1],
    stroke: e.colors[0],
    "stroke-width": e.strokeWidth,
    "stroke-linejoin": e.strokeLinejoin
  }, null), L("path", {
    d: "M26.657 14.3431C25.2093 12.8954 23.2093 12 21.0001 12C18.791 12 16.791 12.8954 15.3433 14.3431",
    stroke: e.colors[2],
    "stroke-width": e.strokeWidth,
    "stroke-linecap": e.strokeLinecap,
    "stroke-linejoin": e.strokeLinejoin
  }, null), L("path", {
    d: "M33.2216 33.2217L41.7069 41.707",
    stroke: e.colors[0],
    "stroke-width": e.strokeWidth,
    "stroke-linecap": e.strokeLinecap,
    "stroke-linejoin": e.strokeLinejoin
  }, null)]);
}), Pu = pe("time", !0, function(e) {
  return L("svg", {
    width: e.size,
    height: e.size,
    viewBox: "0 0 48 48",
    fill: "none"
  }, [L("path", {
    d: "M24 44C35.0457 44 44 35.0457 44 24C44 12.9543 35.0457 4 24 4C12.9543 4 4 12.9543 4 24C4 35.0457 12.9543 44 24 44Z",
    fill: e.colors[1],
    stroke: e.colors[0],
    "stroke-width": e.strokeWidth,
    "stroke-linejoin": e.strokeLinejoin
  }, null), L("path", {
    d: "M24.0084 12.0001L24.0072 24.0089L32.4866 32.4883",
    stroke: e.colors[2],
    "stroke-width": e.strokeWidth,
    "stroke-linecap": e.strokeLinecap,
    "stroke-linejoin": e.strokeLinejoin
  }, null)]);
}), Ou = ["disabled", "onClick"], Au = ["onClick", "onKeydown"], Un = /* @__PURE__ */ ae({
  __name: "WallhavenSourceTabs",
  props: {
    modelValue: {},
    disabled: { type: Boolean },
    tabClass: {},
    activeClass: {},
    disabledClass: {}
  },
  emits: ["update:modelValue"],
  setup(e, { emit: t }) {
    const n = t, { t: a } = Pe(), r = [
      { value: "hot", labelKey: "wallpaperSwitcher.hot" },
      { value: "toplist", labelKey: "wallpaperSwitcher.toplist" },
      { value: "favorites", labelKey: "wallpaperSwitcher.favorites" }
    ], l = (s, i) => {
      i || n("update:modelValue", s);
    };
    return (s, i) => ($(), z(
      Ke,
      null,
      Sn(r, (u) => ($(), z(
        Ke,
        {
          key: u.value
        },
        [
          s.tabClass === "button" ? ($(), z("button", {
            key: 0,
            type: "button",
            class: Z({ [s.activeClass || "active"]: s.modelValue === u.value }),
            disabled: s.disabled,
            onClick: (p) => l(u.value, s.disabled)
          }, N(o(a)(u.labelKey)), 11, Ou)) : ($(), z("div", {
            key: 1,
            class: Z(["seg-tab", {
              [s.activeClass || "active"]: s.modelValue === u.value,
              [s.disabledClass || "disabled"]: s.disabled
            }]),
            role: "tab",
            tabindex: "0",
            onClick: (p) => l(u.value, s.disabled),
            onKeydown: ir(xt((p) => l(u.value, s.disabled), ["prevent"]), ["enter"])
          }, N(o(a)(u.labelKey)), 43, Au))
        ],
        64
        /* STABLE_FRAGMENT */
      ))),
      64
      /* STABLE_FRAGMENT */
    ));
  }
}), Fu = { class: "top-panel" }, Mu = { class: "preview" }, Wu = ["src", "alt"], Ru = {
  key: 1,
  class: "preview-empty"
}, $u = { class: "status-panel" }, Du = { class: "status-copy" }, xu = { class: "wallpaper-name" }, ju = { class: "status-list" }, zu = { class: "status-row" }, Uu = { class: "status-row" }, Vu = { class: "status-row" }, Hu = { class: "status-actions" }, Gu = ["disabled"], Ku = { class: "card settings-card" }, Bu = { class: "form-row mode-row" }, Yu = { class: "row-label" }, Zu = { class: "segmented three" }, Xu = { class: "form-row fixed-row" }, Ju = { class: "row-label" }, qu = ["value", "placeholder"], Qu = { class: "form-row folder-row" }, ed = { class: "row-label" }, td = ["value", "placeholder"], nd = { class: "hint-row" }, ad = { class: "form-row folder-order-row" }, rd = { class: "row-label" }, ld = { class: "segmented folder-order" }, sd = { class: "number-label" }, od = ["value"], id = { value: "fileNameAscending" }, cd = { value: "fileNameDescending" }, ud = { value: "modifiedAscending" }, dd = { value: "modifiedDescending" }, fd = { class: "form-row wallhaven-row" }, hd = { class: "sub-label" }, pd = { class: "segmented source" }, md = { class: "hint-row" }, gd = { class: "card rules-card" }, wd = { class: "rules-line" }, vd = { class: "row-label" }, _d = { class: "switch-label" }, bd = ["checked"], yd = { class: "number-label" }, kd = ["value"], Cd = { class: "segmented mini" }, Sd = { class: "rules-line" }, Ld = { class: "row-label compact" }, Ed = { class: "segmented fit" }, Td = ["disabled"], Id = ["disabled"], Nd = ["disabled"], Pd = { class: "checkbox-label" }, Od = ["checked"], Ad = { class: "rules-line operation-line" }, Fd = { class: "row-label compact" }, Md = { class: "checkbox-label" }, Wd = ["checked"], Rd = { class: "sub-label" }, $d = ["disabled"], Dd = { class: "footer-card" }, xd = { class: "cache-info" }, jd = { class: "footer-actions" }, zd = ["disabled"], Ud = ["disabled"], Vd = ["disabled"], Hd = /* @__PURE__ */ ae({
  __name: "SwitcherHome",
  props: {
    config: {},
    loading: { type: Boolean },
    previewSrc: {},
    currentWallpaperName: {},
    sourceLabel: {},
    resolutionLabel: {},
    nextSwitchLabel: {},
    folderCountLabel: {},
    screenLabel: {},
    cacheSizeLabel: {},
    switching: { type: Boolean },
    fitting: { type: Boolean },
    clearingCache: { type: Boolean },
    openingCache: { type: Boolean },
    restartingExplorer: { type: Boolean },
    saving: { type: Boolean }
  },
  emits: ["updateConfig", "chooseImage", "chooseFolder", "scanFolder", "openWallhavenGrid", "switchNow", "setCurrentAsFixed", "setFitMode", "clearCache", "openCacheDir", "restart-explorer-for-transparency", "persistConfig"],
  setup(e, { emit: t }) {
    const n = e, a = t, { t: r } = Pe(), l = (h) => {
      a("updateConfig", { ...n.config, ...h });
    }, s = (h) => l({ mode: h }), i = (h) => l({ wallhavenSource: h }), u = (h) => l({ fixedImagePath: h.target.value }), p = (h) => l({ folderPath: h.target.value }), v = (h) => l({ scheduleEnabled: h.target.checked }), C = (h) => l({
      intervalMinutes: Number(h.target.value)
    }), E = (h) => l({ autoRestore: h.target.checked }), P = (h) => l({
      taskbarTransparent: h.target.checked
    }), W = (h) => l({ order: h }), b = (h) => l({ folderSort: h.target.value });
    return (h, d) => ($(), z(
      "div",
      {
        class: Z(["content", { dimmed: h.loading }])
      },
      [
        m("section", Fu, [
          m("div", Mu, [
            h.previewSrc ? ($(), z("img", {
              key: 0,
              src: h.previewSrc,
              alt: o(r)("wallpaperSwitcher.currentPreviewAlt")
            }, null, 8, Wu)) : ($(), z("div", Ru, [
              L(o(jn), { size: 42 }),
              m(
                "span",
                null,
                N(o(r)("wallpaperSwitcher.noCurrentWallpaper")),
                1
                /* TEXT */
              )
            ]))
          ]),
          m("div", $u, [
            m("div", Du, [
              m("div", xu, [
                m(
                  "span",
                  null,
                  N(o(r)("wallpaperSwitcher.currentWallpaper")),
                  1
                  /* TEXT */
                ),
                m(
                  "strong",
                  null,
                  N(h.currentWallpaperName),
                  1
                  /* TEXT */
                )
              ]),
              m("div", ju, [
                m("div", zu, [
                  L(o(Cn), { size: 16 }),
                  m(
                    "span",
                    null,
                    N(o(r)("wallpaperSwitcher.source")),
                    1
                    /* TEXT */
                  ),
                  m(
                    "strong",
                    null,
                    N(h.sourceLabel),
                    1
                    /* TEXT */
                  )
                ]),
                m("div", Uu, [
                  L(o(fl), { size: 16 }),
                  m(
                    "span",
                    null,
                    N(o(r)("wallpaperSwitcher.resolution")),
                    1
                    /* TEXT */
                  ),
                  m(
                    "strong",
                    null,
                    N(h.resolutionLabel),
                    1
                    /* TEXT */
                  )
                ]),
                m("div", Vu, [
                  L(o(Pu), { size: 16 }),
                  m(
                    "span",
                    null,
                    N(o(r)("wallpaperSwitcher.nextSwitch")),
                    1
                    /* TEXT */
                  ),
                  m(
                    "strong",
                    null,
                    N(h.nextSwitchLabel),
                    1
                    /* TEXT */
                  )
                ])
              ])
            ]),
            m("div", Hu, [
              m("button", {
                type: "button",
                class: "primary-btn",
                disabled: h.switching,
                onClick: d[0] || (d[0] = (w) => a("switchNow"))
              }, [
                L(o(Lu), {
                  theme: "outline",
                  size: 14
                }),
                oe(
                  " " + N(h.switching ? o(r)("wallpaperSwitcher.switching") : o(r)("wallpaperSwitcher.switchNow")),
                  1
                  /* TEXT */
                )
              ], 8, Gu),
              m("button", {
                type: "button",
                class: "secondary-btn",
                onClick: d[1] || (d[1] = (w) => a("setCurrentAsFixed"))
              }, [
                L(o(Tu), {
                  theme: "outline",
                  size: 14
                }),
                oe(
                  " " + N(o(r)("wallpaperSwitcher.setFixed")),
                  1
                  /* TEXT */
                )
              ])
            ])
          ])
        ]),
        m("section", Ku, [
          m("div", Bu, [
            m(
              "span",
              Yu,
              N(o(r)("wallpaperSwitcher.mode")),
              1
              /* TEXT */
            ),
            m("div", Zu, [
              m(
                "button",
                {
                  type: "button",
                  class: Z({ active: h.config.mode === "fixed" }),
                  onClick: d[2] || (d[2] = (w) => s("fixed"))
                },
                N(o(r)("wallpaperSwitcher.fixedImage")),
                3
                /* TEXT, CLASS */
              ),
              m(
                "button",
                {
                  type: "button",
                  class: Z({ active: h.config.mode === "folder" }),
                  onClick: d[3] || (d[3] = (w) => s("folder"))
                },
                N(o(r)("wallpaperSwitcher.localFolder")),
                3
                /* TEXT, CLASS */
              ),
              m(
                "button",
                {
                  type: "button",
                  class: Z({ active: h.config.mode === "wallhaven" }),
                  onClick: d[4] || (d[4] = (w) => s("wallhaven"))
                },
                N(o(r)("wallpaperSwitcher.wallhavenOnline")),
                3
                /* TEXT, CLASS */
              )
            ])
          ]),
          m("div", Xu, [
            m(
              "span",
              Ju,
              N(o(r)("wallpaperSwitcher.fixedImage")),
              1
              /* TEXT */
            ),
            m("input", {
              value: h.config.fixedImagePath,
              class: "path-input",
              placeholder: o(r)("wallpaperSwitcher.placeholders.fixedImage"),
              spellcheck: "false",
              onInput: u
            }, null, 40, qu),
            m("button", {
              type: "button",
              class: "tool-btn",
              onClick: d[5] || (d[5] = (w) => a("chooseImage"))
            }, [
              L(o(jn), { size: 16 }),
              oe(
                " " + N(o(r)("wallpaperSwitcher.selectImage")),
                1
                /* TEXT */
              )
            ])
          ]),
          m("div", Qu, [
            m(
              "span",
              ed,
              N(o(r)("wallpaperSwitcher.localFolder")),
              1
              /* TEXT */
            ),
            m("input", {
              value: h.config.folderPath,
              class: "path-input",
              placeholder: o(r)("wallpaperSwitcher.placeholders.folder"),
              spellcheck: "false",
              onInput: p
            }, null, 40, td),
            m("button", {
              type: "button",
              class: "tool-btn",
              onClick: d[6] || (d[6] = (w) => a("chooseFolder"))
            }, [
              L(o(Cn), { size: 16 }),
              oe(
                " " + N(o(r)("wallpaperSwitcher.select")),
                1
                /* TEXT */
              )
            ]),
            m("button", {
              type: "button",
              class: "tool-btn",
              onClick: d[7] || (d[7] = (w) => a("scanFolder"))
            }, [
              L(o(zn), { size: 16 }),
              oe(
                " " + N(o(r)("wallpaperSwitcher.scan")),
                1
                /* TEXT */
              )
            ])
          ]),
          m(
            "div",
            nd,
            N(h.folderCountLabel),
            1
            /* TEXT */
          ),
          m("div", ad, [
            m(
              "span",
              rd,
              N(o(r)("wallpaperSwitcher.folderOrder")),
              1
              /* TEXT */
            ),
            m("div", ld, [
              m(
                "button",
                {
                  type: "button",
                  class: Z({ active: h.config.order === "sequential" }),
                  onClick: d[8] || (d[8] = (w) => W("sequential"))
                },
                N(o(r)("wallpaperSwitcher.sequential")),
                3
                /* TEXT, CLASS */
              ),
              m(
                "button",
                {
                  type: "button",
                  class: Z({ active: h.config.order === "random" }),
                  onClick: d[9] || (d[9] = (w) => W("random"))
                },
                N(o(r)("wallpaperSwitcher.randomNoRepeat")),
                3
                /* TEXT, CLASS */
              )
            ]),
            m("label", sd, [
              oe(
                N(o(r)("wallpaperSwitcher.sortBy")) + " ",
                1
                /* TEXT */
              ),
              m("select", {
                value: h.config.folderSort,
                onChange: b
              }, [
                m(
                  "option",
                  id,
                  N(o(r)("wallpaperSwitcher.sortFileNameAscending")),
                  1
                  /* TEXT */
                ),
                m(
                  "option",
                  cd,
                  N(o(r)("wallpaperSwitcher.sortFileNameDescending")),
                  1
                  /* TEXT */
                ),
                m(
                  "option",
                  ud,
                  N(o(r)("wallpaperSwitcher.sortModifiedAscending")),
                  1
                  /* TEXT */
                ),
                m(
                  "option",
                  dd,
                  N(o(r)("wallpaperSwitcher.sortModifiedDescending")),
                  1
                  /* TEXT */
                )
              ], 40, od)
            ])
          ]),
          m("div", fd, [
            d[18] || (d[18] = m(
              "span",
              { class: "row-label" },
              "Wallhaven",
              -1
              /* HOISTED */
            )),
            m(
              "span",
              hd,
              N(o(r)("wallpaperSwitcher.sourceShort")),
              1
              /* TEXT */
            ),
            m("div", pd, [
              L(Un, {
                "tab-class": "button",
                "model-value": h.config.wallhavenSource,
                "onUpdate:modelValue": i
              }, null, 8, ["model-value"])
            ]),
            m("button", {
              type: "button",
              class: "tool-btn grid-open",
              onClick: d[10] || (d[10] = (w) => a("openWallhavenGrid"))
            }, [
              L(o(hl), { size: 16 }),
              oe(
                " " + N(o(r)("wallpaperSwitcher.openOnlineGrid")),
                1
                /* TEXT */
              )
            ])
          ]),
          m("div", md, [
            m(
              "span",
              null,
              N(o(r)("wallpaperSwitcher.screenMatch")),
              1
              /* TEXT */
            ),
            m(
              "strong",
              null,
              N(h.screenLabel),
              1
              /* TEXT */
            )
          ])
        ]),
        m("section", gd, [
          m("div", wd, [
            m(
              "span",
              vd,
              N(o(r)("wallpaperSwitcher.switchRules")),
              1
              /* TEXT */
            ),
            m("label", _d, [
              oe(
                N(o(r)("wallpaperSwitcher.enableSchedule")) + " ",
                1
                /* TEXT */
              ),
              m("input", {
                checked: h.config.scheduleEnabled,
                type: "checkbox",
                onChange: v
              }, null, 40, bd),
              d[19] || (d[19] = m(
                "span",
                { class: "switch-control" },
                null,
                -1
                /* HOISTED */
              ))
            ]),
            m("label", yd, [
              oe(
                N(o(r)("wallpaperSwitcher.every")) + " ",
                1
                /* TEXT */
              ),
              m("input", {
                value: h.config.intervalMinutes,
                type: "number",
                min: "1",
                max: "1440",
                onInput: C
              }, null, 40, kd),
              oe(
                " " + N(o(r)("wallpaperSwitcher.minutes")),
                1
                /* TEXT */
              )
            ]),
            we(` <span class="sub-label">{{ t('wallpaperSwitcher.type') }}</span> `),
            m("div", Cd, [
              L(Un, {
                "tab-class": "button",
                "model-value": h.config.wallhavenSource,
                "onUpdate:modelValue": i
              }, null, 8, ["model-value"])
            ])
          ]),
          m("div", Sd, [
            m(
              "span",
              Ld,
              N(o(r)("wallpaperSwitcher.fitMode")),
              1
              /* TEXT */
            ),
            m("div", Ed, [
              m("button", {
                type: "button",
                class: Z({ active: h.config.fitMode === "fillCrop" }),
                disabled: h.fitting,
                onClick: d[11] || (d[11] = (w) => a("setFitMode", "fillCrop"))
              }, N(o(r)("wallpaperSwitcher.fitFillCrop")), 11, Td),
              m("button", {
                type: "button",
                class: Z({ active: h.config.fitMode === "fit" }),
                disabled: h.fitting,
                onClick: d[12] || (d[12] = (w) => a("setFitMode", "fit"))
              }, N(o(r)("wallpaperSwitcher.fitContain")), 11, Id),
              m("button", {
                type: "button",
                class: Z({ active: h.config.fitMode === "center" }),
                disabled: h.fitting,
                onClick: d[13] || (d[13] = (w) => a("setFitMode", "center"))
              }, N(o(r)("wallpaperSwitcher.fitCenter")), 11, Nd)
            ]),
            m("label", Pd, [
              m("input", {
                checked: h.config.autoRestore,
                type: "checkbox",
                onChange: E
              }, null, 40, Od),
              oe(
                " " + N(o(r)("wallpaperSwitcher.autoRestore")),
                1
                /* TEXT */
              )
            ])
          ]),
          m("div", Ad, [
            m(
              "span",
              Fd,
              N(o(r)("wallpaperSwitcher.operationOptions")),
              1
              /* TEXT */
            ),
            m("label", Md, [
              m("input", {
                checked: h.config.taskbarTransparent,
                type: "checkbox",
                onChange: P
              }, null, 40, Wd),
              oe(
                " " + N(o(r)("wallpaperSwitcher.taskbarTransparent")),
                1
                /* TEXT */
              )
            ]),
            m(
              "span",
              Rd,
              N(o(r)("wallpaperSwitcher.taskbarTransparentHint")),
              1
              /* TEXT */
            ),
            m("button", {
              type: "button",
              class: "tool-btn",
              disabled: !h.config.taskbarTransparent || h.restartingExplorer || h.saving,
              onClick: d[14] || (d[14] = (w) => a("restart-explorer-for-transparency"))
            }, [
              L(o(zn), { size: 16 }),
              oe(
                " " + N(h.restartingExplorer ? o(r)("wallpaperSwitcher.refreshingExplorer") : o(r)("wallpaperSwitcher.restartExplorerRefresh")),
                1
                /* TEXT */
              )
            ], 8, $d)
          ])
        ]),
        m("footer", Dd, [
          m("div", xd, [
            m(
              "strong",
              null,
              N(o(r)("wallpaperSwitcher.cache")),
              1
              /* TEXT */
            ),
            m(
              "span",
              null,
              N(o(r)("wallpaperSwitcher.wallhavenCache")),
              1
              /* TEXT */
            ),
            m(
              "span",
              null,
              N(h.cacheSizeLabel),
              1
              /* TEXT */
            )
          ]),
          m("div", jd, [
            m("button", {
              type: "button",
              class: "secondary-btn",
              disabled: h.clearingCache,
              onClick: d[15] || (d[15] = (w) => a("clearCache"))
            }, [
              L(o(Cu), { size: 16 }),
              oe(
                " " + N(h.clearingCache ? o(r)("wallpaperSwitcher.clearing") : o(r)("wallpaperSwitcher.clearCache")),
                1
                /* TEXT */
              )
            ], 8, zd),
            m("button", {
              type: "button",
              class: "secondary-btn",
              disabled: h.openingCache,
              onClick: d[16] || (d[16] = (w) => a("openCacheDir"))
            }, [
              L(o(Cn), { size: 16 }),
              oe(
                " " + N(h.openingCache ? o(r)("wallpaperSwitcher.opening") : o(r)("wallpaperSwitcher.openCache")),
                1
                /* TEXT */
              )
            ], 8, Ud),
            m("button", {
              type: "button",
              class: "primary-btn",
              disabled: h.saving,
              onClick: d[17] || (d[17] = (w) => a("persistConfig"))
            }, [
              L(o(Nu), { size: 17 }),
              oe(
                " " + N(h.saving ? o(r)("wallpaperSwitcher.saving") : o(r)("wallpaperSwitcher.saveSettings")),
                1
                /* TEXT */
              )
            ], 8, Vd)
          ])
        ])
      ],
      2
      /* CLASS */
    ));
  }
}), Gd = {
  class: "titlebar",
  "data-tauri-drag-region": ""
}, Kd = {
  key: 0,
  class: "title"
}, Bd = {
  key: 1,
  class: "title"
}, Yd = ["title"], Zd = {
  key: 2,
  class: "window-actions"
}, Xd = ["title"], Jd = ["title"], qd = {
  key: 3,
  class: "window-actions"
}, Qd = ["aria-label"], ef = ["title"], tf = /* @__PURE__ */ ae({
  __name: "SwitcherTitlebar",
  props: {
    activeView: {},
    wallhavenSource: {},
    wallhavenLoading: { type: Boolean }
  },
  emits: ["back", "close", "openWallhaven", "setWallhavenSource"],
  setup(e, { emit: t }) {
    const n = t, { t: a } = Pe();
    return (r, l) => ($(), z("header", Gd, [
      r.activeView === "switcher" ? ($(), z("div", Kd, [
        L(o(jn), { size: 18 }),
        m(
          "span",
          null,
          N(o(a)("wallpaperSwitcher.title")),
          1
          /* TEXT */
        )
      ])) : ($(), z("div", Bd, [
        m("button", {
          type: "button",
          class: "flat-icon",
          title: o(a)("wallpaperSwitcher.back"),
          onClick: l[0] || (l[0] = (s) => n("back"))
        }, [
          L(o(ku), { size: 20 })
        ], 8, Yd),
        m(
          "span",
          null,
          N(o(a)("wallpaperSwitcher.wallhavenTitle")),
          1
          /* TEXT */
        )
      ])),
      r.activeView === "switcher" ? ($(), z("div", Zd, [
        m("button", {
          type: "button",
          class: "icon-btn online-entry-btn",
          title: o(a)("wallpaperSwitcher.openWallhaven"),
          onClick: l[1] || (l[1] = (s) => n("openWallhaven"))
        }, [
          L(o(Eu), { size: 18 })
        ], 8, Xd),
        m("button", {
          type: "button",
          class: "icon-btn",
          title: o(a)("wallpaperSwitcher.close"),
          onClick: l[2] || (l[2] = (s) => n("close"))
        }, [
          L(o(on), { size: 20 })
        ], 8, Jd)
      ])) : ($(), z("div", qd, [
        m("div", {
          class: "source-toggle",
          role: "tablist",
          "aria-label": o(a)("wallpaperSwitcher.sourceToggle")
        }, [
          L(Un, {
            "model-value": r.wallhavenSource,
            disabled: r.wallhavenLoading,
            "onUpdate:modelValue": l[3] || (l[3] = (s) => n("setWallhavenSource", s))
          }, null, 8, ["model-value", "disabled"])
        ], 8, Qd),
        m("button", {
          type: "button",
          class: "icon-btn",
          title: o(a)("wallpaperSwitcher.close"),
          onClick: l[4] || (l[4] = (s) => n("close"))
        }, [
          L(o(on), { size: 20 })
        ], 8, ef)
      ]))
    ]));
  }
}), nf = { class: "wallhaven-view" }, af = { class: "filters filters--preview-style" }, rf = { class: "search-box wallhaven-search" }, lf = ["value", "placeholder"], sf = ["title"], of = ["aria-label"], cf = ["disabled", "onClick"], uf = { class: "wallhaven-meta" }, df = ["title"], ff = { class: "grid-wrap" }, hf = {
  key: 0,
  class: "empty-state"
}, pf = {
  key: 1,
  class: "empty-state error-state"
}, mf = {
  key: 2,
  class: "empty-state"
}, gf = {
  key: 3,
  class: "wallpaper-grid"
}, wf = ["onClick"], vf = {
  key: 0,
  class: "thumb-skeleton"
}, _f = ["alt", "onLoad"], bf = ["title", "onClick"], yf = ["title", "disabled", "onClick"], kf = ["title", "disabled", "onClick"], Cf = { class: "pager" }, Sf = { class: "source-note" }, Lf = { class: "pager-actions" }, Ef = ["disabled"], Tf = ["disabled"], If = /* @__PURE__ */ ae({
  __name: "WallhavenView",
  props: {
    keyword: {},
    category: {},
    loading: { type: Boolean },
    error: {},
    wallpapers: {},
    loadedThumbIds: {},
    workingIds: {},
    page: {},
    lastPage: {},
    sourceLabel: {},
    screenLabel: {},
    setThumbRef: { type: Function }
  },
  emits: ["update:keyword", "refresh", "setCategory", "openPreview", "markThumbLoaded", "setWallpaper", "downloadWallpaper", "prevPage", "nextPage"],
  setup(e, { emit: t }) {
    const n = t, { t: a } = Pe(), r = [
      { value: "general", labelKey: "wallpaperSwitcher.categories.general" },
      { value: "anime", labelKey: "wallpaperSwitcher.categories.anime" },
      { value: "people", labelKey: "wallpaperSwitcher.categories.people" },
      { value: "nature", labelKey: "wallpaperSwitcher.categories.nature" }
    ], l = (s) => n("update:keyword", s.target.value);
    return (s, i) => ($(), z("div", nf, [
      m("section", af, [
        m("div", rf, [
          m("input", {
            value: s.keyword,
            type: "text",
            placeholder: o(a)("wallpaperSwitcher.searchPlaceholder"),
            onInput: l,
            onKeydown: i[0] || (i[0] = ir((u) => n("refresh"), ["enter"]))
          }, null, 40, lf),
          L(o(hl), {
            size: 16,
            class: "search-icon"
          }),
          s.keyword ? ($(), z("button", {
            key: 0,
            type: "button",
            class: "clear-btn",
            title: o(a)("wallpaperSwitcher.clear"),
            onClick: i[1] || (i[1] = (u) => n("update:keyword", ""))
          }, [
            L(o(on), { size: 18 })
          ], 8, sf)) : we("v-if", !0)
        ]),
        m("div", {
          class: "wallhaven-tabs",
          role: "tablist",
          "aria-label": o(a)("wallpaperSwitcher.categoryToggle")
        }, [
          ($(), z(
            Ke,
            null,
            Sn(r, (u) => m("button", {
              key: u.value,
              type: "button",
              class: Z({ active: s.category === u.value }),
              disabled: s.loading,
              onClick: (p) => n("setCategory", u.value)
            }, N(o(a)(u.labelKey)), 11, cf)),
            64
            /* STABLE_FRAGMENT */
          ))
        ], 8, of),
        m("div", uf, [
          m(
            "span",
            null,
            N(o(a)("wallpaperSwitcher.autoMatch", { resolution: s.screenLabel })),
            1
            /* TEXT */
          ),
          m("button", {
            type: "button",
            class: "refresh-btn wallhaven-refresh",
            title: o(a)("wallpaperSwitcher.refresh"),
            onClick: i[2] || (i[2] = (u) => n("refresh"))
          }, [
            L(o(zn), {
              size: 14,
              class: Z({ spinning: s.loading })
            }, null, 8, ["class"])
          ], 8, df)
        ])
      ]),
      m("section", ff, [
        s.loading && s.wallpapers.length === 0 ? ($(), z(
          "div",
          hf,
          N(o(a)("wallpaperSwitcher.loadingWallhaven")),
          1
          /* TEXT */
        )) : s.error ? ($(), z("div", pf, [
          m(
            "span",
            null,
            N(s.error),
            1
            /* TEXT */
          ),
          m(
            "button",
            {
              type: "button",
              onClick: i[3] || (i[3] = (u) => n("refresh"))
            },
            N(o(a)("wallpaperSwitcher.retry")),
            1
            /* TEXT */
          )
        ])) : s.wallpapers.length === 0 ? ($(), z(
          "div",
          mf,
          N(o(a)("wallpaperSwitcher.noWallpapers")),
          1
          /* TEXT */
        )) : ($(), z("div", gf, [
          ($(!0), z(
            Ke,
            null,
            Sn(s.wallpapers, (u) => ($(), z("article", {
              key: u.id,
              class: "wallpaper-card"
            }, [
              m("button", {
                type: "button",
                class: "thumb",
                onClick: (p) => n("openPreview", u)
              }, [
                s.loadedThumbIds.has(u.id) ? we("v-if", !0) : ($(), z("div", vf)),
                m("img", {
                  ref_for: !0,
                  ref: (p) => s.setThumbRef(u, p),
                  alt: u.resolution,
                  loading: "lazy",
                  onLoad: (p) => n("markThumbLoaded", u.id)
                }, null, 40, _f),
                m(
                  "span",
                  null,
                  N(u.resolution),
                  1
                  /* TEXT */
                )
              ], 8, wf),
              m("div", {
                class: "card-actions",
                onClick: i[4] || (i[4] = xt(() => {
                }, ["stop"]))
              }, [
                m("button", {
                  type: "button",
                  title: o(a)("wallpaperSwitcher.preview"),
                  onClick: (p) => n("openPreview", u)
                }, [
                  L(o(Iu), { size: 16 }),
                  oe(
                    " " + N(o(a)("wallpaperSwitcher.preview")),
                    1
                    /* TEXT */
                  )
                ], 8, bf),
                m("button", {
                  type: "button",
                  title: o(a)("wallpaperSwitcher.setWallpaper"),
                  disabled: s.workingIds.has(u.id),
                  onClick: (p) => n("setWallpaper", u)
                }, [
                  L(o(fl), { size: 16 }),
                  oe(
                    " " + N(s.workingIds.has(u.id) ? o(a)("wallpaperSwitcher.setting") : o(a)("wallpaperSwitcher.set")),
                    1
                    /* TEXT */
                  )
                ], 8, yf),
                m("button", {
                  type: "button",
                  title: o(a)("wallpaperSwitcher.download"),
                  disabled: s.workingIds.has(u.id),
                  onClick: (p) => n("downloadWallpaper", u)
                }, [
                  L(o(Su), { size: 16 }),
                  oe(
                    " " + N(o(a)("wallpaperSwitcher.download")),
                    1
                    /* TEXT */
                  )
                ], 8, kf)
              ])
            ]))),
            128
            /* KEYED_FRAGMENT */
          ))
        ]))
      ]),
      m("footer", Cf, [
        m(
          "span",
          null,
          N(o(a)("wallpaperSwitcher.page", { page: s.page })),
          1
          /* TEXT */
        ),
        m(
          "span",
          Sf,
          N(o(a)("wallpaperSwitcher.sourceNote", { source: s.sourceLabel })),
          1
          /* TEXT */
        ),
        m("div", Lf, [
          m("button", {
            type: "button",
            disabled: s.page <= 1 || s.loading,
            onClick: i[5] || (i[5] = (u) => n("prevPage"))
          }, N(o(a)("wallpaperSwitcher.prevPage")), 9, Ef),
          m("button", {
            type: "button",
            disabled: s.page >= s.lastPage || s.loading,
            onClick: i[6] || (i[6] = (u) => n("nextPage"))
          }, N(o(a)("wallpaperSwitcher.nextPage")), 9, Tf)
        ])
      ])
    ]));
  }
}), Nf = { class: "preview-dialog" }, Pf = { class: "preview-image-wrap" }, Of = {
  key: 0,
  class: "preview-skeleton"
}, Af = {
  key: 1,
  class: "preview-error"
}, Ff = ["src", "alt"], Mf = ["disabled"], Wf = ["disabled"], Rf = /* @__PURE__ */ ae({
  __name: "WallpaperPreviewModal",
  props: {
    wallpaper: {},
    loading: { type: Boolean },
    loadFailed: { type: Boolean },
    workingIds: {}
  },
  emits: ["close", "loaded", "failed", "download", "setWallpaper"],
  setup(e, { emit: t }) {
    const n = t, { t: a } = Pe();
    return (r, l) => r.wallpaper ? ($(), z("div", {
      key: 0,
      class: "preview-modal",
      onClick: l[5] || (l[5] = xt((s) => n("close"), ["self"]))
    }, [
      m("div", Nf, [
        m("header", null, [
          m(
            "strong",
            null,
            N(r.wallpaper.resolution),
            1
            /* TEXT */
          ),
          m("button", {
            type: "button",
            class: "flat-icon",
            onClick: l[0] || (l[0] = (s) => n("close"))
          }, [
            L(o(on), { size: 23 })
          ])
        ]),
        m("div", Pf, [
          r.loading ? ($(), z("div", Of, [
            m(
              "span",
              null,
              N(o(a)("wallpaperSwitcher.loadingPreview")),
              1
              /* TEXT */
            )
          ])) : we("v-if", !0),
          r.loadFailed ? ($(), z(
            "div",
            Af,
            N(o(a)("wallpaperSwitcher.previewLoadFailed")),
            1
            /* TEXT */
          )) : we("v-if", !0),
          m("img", {
            class: Z({ ready: !r.loading && !r.loadFailed }),
            src: r.wallpaper.path,
            alt: o(a)("wallpaperSwitcher.wallpaperPreviewAlt"),
            onLoad: l[1] || (l[1] = (s) => n("loaded")),
            onError: l[2] || (l[2] = (s) => n("failed"))
          }, null, 42, Ff)
        ]),
        m("footer", null, [
          m("button", {
            type: "button",
            class: "secondary-btn",
            disabled: r.workingIds.has(r.wallpaper.id),
            onClick: l[3] || (l[3] = (s) => n("download", r.wallpaper))
          }, N(o(a)("wallpaperSwitcher.downloadCache")), 9, Mf),
          m("button", {
            type: "button",
            class: "primary-btn",
            disabled: r.workingIds.has(r.wallpaper.id),
            onClick: l[4] || (l[4] = (s) => n("setWallpaper", r.wallpaper))
          }, N(r.workingIds.has(r.wallpaper.id) ? o(a)("wallpaperSwitcher.setting") : o(a)("wallpaperSwitcher.setWallpaper")), 9, Wf)
        ])
      ])
    ])) : we("v-if", !0);
  }
}), $f = { class: "wallpaper-window" }, Df = {
  key: 0,
  class: "unsupported"
}, xf = /* @__PURE__ */ ae({
  __name: "index",
  setup(e) {
    const t = fr(), { t: n } = Pe(), a = U(su()), r = U(null), l = U(null), s = U(!1), i = U(!1), u = U(!1), p = U(!1), v = U(!1), C = U(!1), E = U(!1), P = async () => {
      try {
        r.value = await tr();
      } catch (R) {
        K.msg(String(R), "error");
      }
    }, W = wu({
      config: a,
      refreshStatus: async () => {
        await P();
      }
    }), {
      activeView: b,
      wallhavenPage: h,
      wallhavenLastPage: d,
      wallhavenLoading: w,
      wallhavenError: k,
      wallhavenKeyword: _,
      wallhavenCategory: O,
      wallhavenSource: A,
      previewWallpaper: y,
      previewLoading: q,
      previewLoadFailed: Q,
      workingIds: ie,
      loadedThumbIds: ue,
      wallhavenSourceLabel: ee,
      visibleWallpapers: Ze,
      openWallhavenGrid: Re,
      backToSwitcher: Xe,
      openPreview: ye,
      closePreview: Je,
      markPreviewLoaded: qe,
      markPreviewFailed: ve,
      markThumbLoaded: $e,
      setThumbRef: De,
      refreshWallhaven: xe,
      setWallhavenSource: Qe,
      setWallhavenCategory: et,
      setWallpaperFromWallhaven: tt,
      downloadWallpaperFromWallhaven: je,
      prevWallhavenPage: nt,
      nextWallhavenPage: ze,
      setupListeners: at
    } = W, rt = D(
      () => ou(r.value?.currentPath || a.value.lastAppliedPath)
    ), x = D(() => {
      const R = r.value?.currentPath || a.value.lastAppliedPath;
      return R ? R.split(/[\\/]/).pop() || R : n("wallpaperSwitcher.noCurrentWallpaper");
    }), V = D(() => {
      const R = r.value?.screenWidth || 2560, ge = r.value?.screenHeight || 1440;
      return `${R} × ${ge}`;
    }), re = D(
      () => r.value?.currentResolution || V.value
    ), me = (R) => R < 1024 ? `${R} B` : R < 1024 * 1024 ? `${(R / 1024).toFixed(1)} KB` : R < 1024 * 1024 * 1024 ? `${(R / 1024 / 1024).toFixed(1)} MB` : `${(R / 1024 / 1024 / 1024).toFixed(1)} GB`, Ue = D(() => a.value.mode === "fixed" ? n("wallpaperSwitcher.fixedImage") : a.value.mode === "wallhaven" ? "Wallhaven" : n("wallpaperSwitcher.localFolder")), lt = D(() => {
      if (a.value.mode === "fixed" || !a.value.scheduleEnabled || !r.value?.schedulerRunning)
        return "—";
      const R = r.value?.nextSwitchAt;
      if (!R) return "—";
      const ge = Math.max(0, R - Math.floor(Date.now() / 1e3));
      return ge < 60 ? n("wallpaperSwitcher.time.secondsLater", { count: ge }) : n("wallpaperSwitcher.time.minutesLater", {
        count: Math.ceil(ge / 60)
      });
    }), It = D(() => {
      const R = r.value?.cacheSizeBytes ?? 0;
      return me(R);
    }), c = D(() => l.value ? n("wallpaperSwitcher.folderStatus.detected", {
      count: l.value.count
    }) : a.value.folderPath ? n("wallpaperSwitcher.folderStatus.notScanned") : n("wallpaperSwitcher.folderStatus.selectFirst")), f = async () => {
      s.value = !0;
      try {
        const [R, ge] = await Promise.all([
          er(),
          tr()
        ]);
        if (a.value = R, r.value = ge, R.folderPath)
          try {
            l.value = await nr(R.folderPath);
          } catch {
            l.value = null;
          }
      } catch (R) {
        K.msg(String(R), "error");
      } finally {
        s.value = !1;
      }
    }, S = async () => {
      i.value = !0;
      try {
        await xn(a.value), await P(), K.msg(n("wallpaperSwitcher.messages.settingsSaved"), "success");
      } catch (R) {
        K.msg(String(R), "error");
      } finally {
        i.value = !1;
      }
    }, F = async () => {
      const R = await ca({
        multiple: !1,
        directory: !1,
        filters: [
          { name: "Images", extensions: ["jpg", "jpeg", "png", "webp", "bmp"] }
        ]
      });
      if (typeof R == "string") {
        a.value.fixedImagePath = R, a.value.mode = "fixed";
        try {
          await ar(R), await f(), K.msg(n("wallpaperSwitcher.messages.fixedSet"), "success");
        } catch (ge) {
          K.msg(String(ge), "error");
        }
      }
    }, J = async () => {
      if (!a.value.folderPath) {
        K.msg(n("wallpaperSwitcher.messages.selectFolderFirst"), "warning");
        return;
      }
      try {
        l.value = await nr(a.value.folderPath), l.value.count === 0 ? K.msg(n("wallpaperSwitcher.messages.noImagesInFolder"), "warning") : K.msg(c.value, "success");
      } catch (R) {
        K.msg(String(R), "error");
      }
    }, j = async () => {
      const R = await ca({ multiple: !1, directory: !0 });
      typeof R == "string" && (a.value.folderPath = R, a.value.mode = "folder", await J());
    }, g = async () => {
      u.value = !0;
      try {
        await xn(a.value), await cu(), await P(), K.msg(n("wallpaperSwitcher.messages.wallpaperSwitched"), "success");
      } catch (R) {
        K.msg(String(R), "error");
      } finally {
        u.value = !1;
      }
    }, I = async (R) => {
      a.value.fitMode = R, p.value = !0;
      try {
        await uu(R), await P(), a.value = await er(), K.msg(n("wallpaperSwitcher.messages.fitApplied"), "success");
      } catch (ge) {
        K.msg(String(ge), "error");
      } finally {
        p.value = !1;
      }
    }, Y = async () => {
      if (!r.value?.currentPath) {
        K.msg(n("wallpaperSwitcher.messages.noCurrentToFix"), "warning");
        return;
      }
      a.value.mode = "fixed", a.value.fixedImagePath = r.value.currentPath, a.value.scheduleEnabled = !1;
      try {
        await ar(r.value.currentPath), await f(), K.msg(n("wallpaperSwitcher.messages.fixedSet"), "success");
      } catch (R) {
        K.msg(String(R), "error");
      }
    }, te = async () => {
      v.value = !0;
      try {
        await pu(), await P(), K.msg(n("wallpaperSwitcher.messages.cacheCleared"), "success");
      } catch (R) {
        K.msg(String(R), "error");
      } finally {
        v.value = !1;
      }
    }, Oe = async () => {
      C.value = !0;
      try {
        await gu();
      } catch (R) {
        K.msg(String(R), "error");
      } finally {
        C.value = !1;
      }
    }, pt = async () => {
      if (window.confirm(n("wallpaperSwitcher.messages.restartExplorerConfirm"))) {
        E.value = !0;
        try {
          await iu(), K.msg(n("wallpaperSwitcher.messages.explorerRestarted"), "success");
        } catch (R) {
          K.msg(String(R), "error");
        } finally {
          E.value = !1;
        }
      }
    }, Ve = (R) => {
      a.value = R;
    }, mn = async () => {
      await t.close();
    };
    return Lt(async () => {
      await f(), await at();
    }), Vn(() => {
    }), (R, ge) => ($(), z("main", $f, [
      L(tf, {
        "active-view": o(b),
        "wallhaven-source": o(A),
        "wallhaven-loading": o(w),
        onBack: o(Xe),
        onClose: mn,
        onOpenWallhaven: o(Re),
        onSetWallhavenSource: o(Qe)
      }, null, 8, ["active-view", "wallhaven-source", "wallhaven-loading", "onBack", "onOpenWallhaven", "onSetWallhavenSource"]),
      o(r) && !o(r).supported ? ($(), z(
        "section",
        Df,
        N(o(n)("wallpaperSwitcher.unsupported")),
        1
        /* TEXT */
      )) : we("v-if", !0),
      o(b) === "switcher" ? ($(), Se(Hd, {
        key: 1,
        config: o(a),
        loading: o(s),
        "preview-src": o(rt),
        "current-wallpaper-name": o(x),
        "source-label": o(Ue),
        "resolution-label": o(re),
        "next-switch-label": o(lt),
        "folder-count-label": o(c),
        "screen-label": o(V),
        "cache-size-label": o(It),
        switching: o(u),
        fitting: o(p),
        "clearing-cache": o(v),
        "opening-cache": o(C),
        "restarting-explorer": o(E),
        saving: o(i),
        onUpdateConfig: Ve,
        onChooseImage: F,
        onChooseFolder: j,
        onScanFolder: J,
        onOpenWallhavenGrid: o(Re),
        onSwitchNow: g,
        onSetCurrentAsFixed: Y,
        onSetFitMode: I,
        onClearCache: te,
        onOpenCacheDir: Oe,
        onRestartExplorerForTransparency: pt,
        onPersistConfig: S
      }, null, 8, ["config", "loading", "preview-src", "current-wallpaper-name", "source-label", "resolution-label", "next-switch-label", "folder-count-label", "screen-label", "cache-size-label", "switching", "fitting", "clearing-cache", "opening-cache", "restarting-explorer", "saving", "onOpenWallhavenGrid"])) : ($(), Se(If, {
        key: 2,
        keyword: o(_),
        "onUpdate:keyword": ge[0] || (ge[0] = (pl) => sr(_) ? _.value = pl : null),
        category: o(O),
        loading: o(w),
        error: o(k),
        wallpapers: o(Ze),
        "loaded-thumb-ids": o(ue),
        "working-ids": o(ie),
        page: o(h),
        "last-page": o(d),
        "source-label": o(ee),
        "screen-label": o(V),
        "set-thumb-ref": o(De),
        onRefresh: o(xe),
        onSetCategory: o(et),
        onOpenPreview: o(ye),
        onMarkThumbLoaded: o($e),
        onSetWallpaper: o(tt),
        onDownloadWallpaper: o(je),
        onPrevPage: o(nt),
        onNextPage: o(ze)
      }, null, 8, ["keyword", "category", "loading", "error", "wallpapers", "loaded-thumb-ids", "working-ids", "page", "last-page", "source-label", "screen-label", "set-thumb-ref", "onRefresh", "onSetCategory", "onOpenPreview", "onMarkThumbLoaded", "onSetWallpaper", "onDownloadWallpaper", "onPrevPage", "onNextPage"])),
      L(Rf, {
        wallpaper: o(y),
        loading: o(q),
        "load-failed": o(Q),
        "working-ids": o(ie),
        onClose: o(Je),
        onLoaded: o(qe),
        onFailed: o(ve),
        onDownload: o(je),
        onSetWallpaper: o(tt)
      }, null, 8, ["wallpaper", "loading", "load-failed", "working-ids", "onClose", "onLoaded", "onFailed", "onDownload", "onSetWallpaper"])
    ]));
  }
}), jf = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: xf
}, Symbol.toStringTag, { value: "Module" }));
export {
  Uf as activate
};
