import * as hn from "vue";
import { inject as Ke, ref as U, shallowRef as dl, computed as D, watch as gt, onMounted as St, onUnmounted as Dn, defineComponent as ae, h as qa, createVNode as L, Text as fl, Fragment as Be, getCurrentInstance as wt, unref as u, readonly as hl, getCurrentScope as pl, onScopeDispose as ml, nextTick as Qa, isRef as er, warn as gl, provide as wl, createElementBlock as z, openBlock as $, mergeProps as vl, renderSlot as vt, createElementVNode as m, normalizeClass as ne, Transition as xn, withCtx as st, withDirectives as Bt, normalizeStyle as Yt, createTextVNode as de, toDisplayString as W, vShow as Zt, shallowReactive as _l, createBlock as Se, createCommentVNode as _e, resolveDynamicComponent as tr, withModifiers as $t, isVNode as Ot, render as Xt, renderList as yn, withKeys as nr } from "vue";
const mf = (e) => {
  e.registerRoute({
    target: "window",
    path: "/wallpaper-switcher",
    name: "WallpaperSwitcher",
    component: () => Promise.resolve().then(() => ff)
  }), e.registerWindowShortcut({
    label: "wallpaper_switcher"
  });
};
function bl(e, t, n, a) {
  if (typeof t == "function" ? e !== t || !0 : !t.has(e)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
  return n === "m" ? a : n === "a" ? a.call(e) : a ? a.value : t.get(e);
}
function yl(e, t, n, a, r) {
  if (typeof t == "function" ? e !== t || !0 : !t.has(e)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
  return t.set(e, n), n;
}
var Ut;
const ke = "__TAURI_TO_IPC_KEY__";
function kl(e, t = !1) {
  return window.__TAURI_INTERNALS__.transformCallback(e, t);
}
async function I(e, t = {}, n) {
  return window.__TAURI_INTERNALS__.invoke(e, t, n);
}
function Cl(e, t = "asset") {
  return window.__TAURI_INTERNALS__.convertFileSrc(e, t);
}
class Sl {
  get rid() {
    return bl(this, Ut, "f");
  }
  constructor(t) {
    Ut.set(this, void 0), yl(this, Ut, t);
  }
  /**
   * Destroys and cleans up this resource from memory.
   * **You should not call any method on this object anymore and should drop any reference to it.**
   */
  async close() {
    return I("plugin:resources|close", {
      rid: this.rid
    });
  }
}
Ut = /* @__PURE__ */ new WeakMap();
class ar {
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
    return new Nt(this.width * t, this.height * t);
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
class Nt {
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
    return new ar(this.width / t, this.height / t);
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
class pt {
  constructor(t) {
    this.size = t;
  }
  toLogical(t) {
    return this.size instanceof ar ? this.size : this.size.toLogical(t);
  }
  toPhysical(t) {
    return this.size instanceof Nt ? this.size : this.size.toPhysical(t);
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
class rr {
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
    return new Ge(this.x * t, this.y * t);
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
class Ge {
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
    return new rr(this.x / t, this.y / t);
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
class Dt {
  constructor(t) {
    this.position = t;
  }
  toLogical(t) {
    return this.position instanceof rr ? this.position : this.position.toLogical(t);
  }
  toPhysical(t) {
    return this.position instanceof Ge ? this.position : this.position.toPhysical(t);
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
var ve;
(function(e) {
  e.WINDOW_RESIZED = "tauri://resize", e.WINDOW_MOVED = "tauri://move", e.WINDOW_CLOSE_REQUESTED = "tauri://close-requested", e.WINDOW_DESTROYED = "tauri://destroyed", e.WINDOW_FOCUS = "tauri://focus", e.WINDOW_BLUR = "tauri://blur", e.WINDOW_SCALE_FACTOR_CHANGED = "tauri://scale-change", e.WINDOW_THEME_CHANGED = "tauri://theme-changed", e.WINDOW_CREATED = "tauri://window-created", e.WEBVIEW_CREATED = "tauri://webview-created", e.DRAG_ENTER = "tauri://drag-enter", e.DRAG_OVER = "tauri://drag-over", e.DRAG_DROP = "tauri://drag-drop", e.DRAG_LEAVE = "tauri://drag-leave";
})(ve || (ve = {}));
async function lr(e, t) {
  await I("plugin:event|unlisten", {
    event: e,
    eventId: t
  });
}
async function Jt(e, t, n) {
  var a;
  const r = typeof n?.target == "string" ? { kind: "AnyLabel", label: n.target } : (a = n?.target) !== null && a !== void 0 ? a : { kind: "Any" };
  return I("plugin:event|listen", {
    event: e,
    target: r,
    handler: kl(t)
  }).then((l) => async () => lr(e, l));
}
async function Ll(e, t, n) {
  return Jt(e, (a) => {
    lr(e, a.id), t(a);
  }, n);
}
async function El(e, t) {
  await I("plugin:event|emit", {
    event: e,
    payload: t
  });
}
async function Tl(e, t, n) {
  await I("plugin:event|emit_to", {
    target: typeof e == "string" ? { kind: "AnyLabel", label: e } : e,
    event: t,
    payload: n
  });
}
class Pt extends Sl {
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
    return I("plugin:image|new", {
      rgba: qt(t),
      width: n,
      height: a
    }).then((r) => new Pt(r));
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
    return I("plugin:image|from_bytes", {
      bytes: qt(t)
    }).then((n) => new Pt(n));
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
    return I("plugin:image|from_path", { path: t }).then((n) => new Pt(n));
  }
  /** Returns the RGBA data for this image, in row-major order from top to bottom.  */
  async rgba() {
    return I("plugin:image|rgba", {
      rid: this.rid
    }).then((t) => new Uint8Array(t));
  }
  /** Returns the size of this image.  */
  async size() {
    return I("plugin:image|size", { rid: this.rid });
  }
}
function qt(e) {
  return e == null ? null : typeof e == "string" ? e : e instanceof Pt ? e.rid : e;
}
var kn;
(function(e) {
  e[e.Critical = 1] = "Critical", e[e.Informational = 2] = "Informational";
})(kn || (kn = {}));
class Il {
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
var ea;
(function(e) {
  e.None = "none", e.Normal = "normal", e.Indeterminate = "indeterminate", e.Paused = "paused", e.Error = "error";
})(ea || (ea = {}));
function sr() {
  return new or(window.__TAURI_INTERNALS__.metadata.currentWindow.label, {
    // @ts-expect-error `skip` is not defined in the public API but it is handled by the constructor
    skip: !0
  });
}
async function pn() {
  return I("plugin:window|get_all_windows").then((e) => e.map((t) => new or(t, {
    // @ts-expect-error `skip` is not defined in the public API but it is handled by the constructor
    skip: !0
  })));
}
const mn = ["tauri://created", "tauri://error"];
class or {
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
    this.label = t, this.listeners = /* @__PURE__ */ Object.create(null), n?.skip || I("plugin:window|create", {
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
    return (n = (await pn()).find((a) => a.label === t)) !== null && n !== void 0 ? n : null;
  }
  /**
   * Get an instance of `Window` for the current window.
   */
  static getCurrent() {
    return sr();
  }
  /**
   * Gets a list of instances of `Window` for all available windows.
   */
  static async getAll() {
    return pn();
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
    for (const t of await pn())
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
    } : Jt(t, n, {
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
    } : Ll(t, n, {
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
    if (mn.includes(t)) {
      for (const a of this.listeners[t] || [])
        a({
          event: t,
          id: -1,
          payload: n
        });
      return;
    }
    return El(t, n);
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
    if (mn.includes(n)) {
      for (const r of this.listeners[n] || [])
        r({
          event: n,
          id: -1,
          payload: a
        });
      return;
    }
    return Tl(t, n, a);
  }
  /** @ignore */
  _handleTauriEvent(t, n) {
    return mn.includes(t) ? (t in this.listeners ? this.listeners[t].push(n) : this.listeners[t] = [n], !0) : !1;
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
    return I("plugin:window|scale_factor", {
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
    return I("plugin:window|inner_position", {
      label: this.label
    }).then((t) => new Ge(t));
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
    return I("plugin:window|outer_position", {
      label: this.label
    }).then((t) => new Ge(t));
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
    return I("plugin:window|inner_size", {
      label: this.label
    }).then((t) => new Nt(t));
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
    return I("plugin:window|outer_size", {
      label: this.label
    }).then((t) => new Nt(t));
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
    return I("plugin:window|is_fullscreen", {
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
    return I("plugin:window|is_minimized", {
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
    return I("plugin:window|is_maximized", {
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
    return I("plugin:window|is_focused", {
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
    return I("plugin:window|is_decorated", {
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
    return I("plugin:window|is_resizable", {
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
    return I("plugin:window|is_maximizable", {
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
    return I("plugin:window|is_minimizable", {
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
    return I("plugin:window|is_closable", {
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
    return I("plugin:window|is_visible", {
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
    return I("plugin:window|title", {
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
    return I("plugin:window|theme", {
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
    return I("plugin:window|is_always_on_top", {
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
    return I("plugin:window|center", {
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
    return t && (t === kn.Critical ? n = { type: "Critical" } : n = { type: "Informational" }), I("plugin:window|request_user_attention", {
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
    return I("plugin:window|set_resizable", {
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
    return I("plugin:window|set_enabled", {
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
    return I("plugin:window|is_enabled", {
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
    return I("plugin:window|set_maximizable", {
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
    return I("plugin:window|set_minimizable", {
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
    return I("plugin:window|set_closable", {
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
    return I("plugin:window|set_title", {
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
    return I("plugin:window|maximize", {
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
    return I("plugin:window|unmaximize", {
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
    return I("plugin:window|toggle_maximize", {
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
    return I("plugin:window|minimize", {
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
    return I("plugin:window|unminimize", {
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
    return I("plugin:window|show", {
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
    return I("plugin:window|hide", {
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
    return I("plugin:window|close", {
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
    return I("plugin:window|destroy", {
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
    return I("plugin:window|set_decorations", {
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
    return I("plugin:window|set_shadow", {
      label: this.label,
      value: t
    });
  }
  /**
   * Set window effects.
   */
  async setEffects(t) {
    return I("plugin:window|set_effects", {
      label: this.label,
      value: t
    });
  }
  /**
   * Clear any applied effects if possible.
   */
  async clearEffects() {
    return I("plugin:window|set_effects", {
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
    return I("plugin:window|set_always_on_top", {
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
    return I("plugin:window|set_always_on_bottom", {
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
    return I("plugin:window|set_content_protected", {
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
    return I("plugin:window|set_size", {
      label: this.label,
      value: t instanceof pt ? t : new pt(t)
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
    return I("plugin:window|set_min_size", {
      label: this.label,
      value: t instanceof pt ? t : t ? new pt(t) : null
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
    return I("plugin:window|set_max_size", {
      label: this.label,
      value: t instanceof pt ? t : t ? new pt(t) : null
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
    return I("plugin:window|set_size_constraints", {
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
    return I("plugin:window|set_position", {
      label: this.label,
      value: t instanceof Dt ? t : new Dt(t)
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
    return I("plugin:window|set_fullscreen", {
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
    return I("plugin:window|set_focus", {
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
    return I("plugin:window|set_icon", {
      label: this.label,
      value: qt(t)
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
    return I("plugin:window|set_skip_taskbar", {
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
    return I("plugin:window|set_cursor_grab", {
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
    return I("plugin:window|set_cursor_visible", {
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
    return I("plugin:window|set_cursor_icon", {
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
    return I("plugin:window|set_background_color", { color: t });
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
    return I("plugin:window|set_cursor_position", {
      label: this.label,
      value: t instanceof Dt ? t : new Dt(t)
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
    return I("plugin:window|set_ignore_cursor_events", {
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
    return I("plugin:window|start_dragging", {
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
    return I("plugin:window|start_resize_dragging", {
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
    return I("plugin:window|set_badge_count", {
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
    return I("plugin:window|set_badge_label", {
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
    return I("plugin:window|set_overlay_icon", {
      label: this.label,
      value: t ? qt(t) : void 0
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
    return I("plugin:window|set_progress_bar", {
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
    return I("plugin:window|set_visible_on_all_workspaces", {
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
    return I("plugin:window|set_title_bar_style", {
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
    return I("plugin:window|set_theme", {
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
    return this.listen(ve.WINDOW_RESIZED, (n) => {
      n.payload = new Nt(n.payload), t(n);
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
    return this.listen(ve.WINDOW_MOVED, (n) => {
      n.payload = new Ge(n.payload), t(n);
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
    return this.listen(ve.WINDOW_CLOSE_REQUESTED, async (n) => {
      const a = new Il(n);
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
    const n = await this.listen(ve.DRAG_ENTER, (s) => {
      t({
        ...s,
        payload: {
          type: "enter",
          paths: s.payload.paths,
          position: new Ge(s.payload.position)
        }
      });
    }), a = await this.listen(ve.DRAG_OVER, (s) => {
      t({
        ...s,
        payload: {
          type: "over",
          position: new Ge(s.payload.position)
        }
      });
    }), r = await this.listen(ve.DRAG_DROP, (s) => {
      t({
        ...s,
        payload: {
          type: "drop",
          paths: s.payload.paths,
          position: new Ge(s.payload.position)
        }
      });
    }), l = await this.listen(ve.DRAG_LEAVE, (s) => {
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
    const n = await this.listen(ve.WINDOW_FOCUS, (r) => {
      t({ ...r, payload: !0 });
    }), a = await this.listen(ve.WINDOW_BLUR, (r) => {
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
    return this.listen(ve.WINDOW_SCALE_FACTOR_CHANGED, t);
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
    return this.listen(ve.WINDOW_THEME_CHANGED, t);
  }
}
var ta;
(function(e) {
  e.Disabled = "disabled", e.Throttle = "throttle", e.Suspend = "suspend";
})(ta || (ta = {}));
var na;
(function(e) {
  e.AppearanceBased = "appearanceBased", e.Light = "light", e.Dark = "dark", e.MediumLight = "mediumLight", e.UltraDark = "ultraDark", e.Titlebar = "titlebar", e.Selection = "selection", e.Menu = "menu", e.Popover = "popover", e.Sidebar = "sidebar", e.HeaderView = "headerView", e.Sheet = "sheet", e.WindowBackground = "windowBackground", e.HudWindow = "hudWindow", e.FullScreenUI = "fullScreenUI", e.Tooltip = "tooltip", e.ContentBackground = "contentBackground", e.UnderWindowBackground = "underWindowBackground", e.UnderPageBackground = "underPageBackground", e.Mica = "mica", e.Blur = "blur", e.Acrylic = "acrylic", e.Tabbed = "tabbed", e.TabbedDark = "tabbedDark", e.TabbedLight = "tabbedLight";
})(na || (na = {}));
var aa;
(function(e) {
  e.FollowsWindowActiveState = "followsWindowActiveState", e.Active = "active", e.Inactive = "inactive";
})(aa || (aa = {}));
async function ra(e = {}) {
  return typeof e == "object" && Object.freeze(e), await I("plugin:dialog|open", { options: e });
}
/*!
  * shared v11.2.2
  * (c) 2025 kazuya kawaguchi
  * Released under the MIT License.
  */
function Nl(e, t) {
  typeof console < "u" && (console.warn("[intlify] " + e), t && console.warn(t.stack));
}
const la = typeof window < "u", ut = (e, t = !1) => t ? Symbol.for(e) : Symbol(e), Pl = (e, t, n) => Ol({ l: e, k: t, s: n }), Ol = (e) => JSON.stringify(e).replace(/\u2028/g, "\\u2028").replace(/\u2029/g, "\\u2029").replace(/\u0027/g, "\\u0027"), oe = (e) => typeof e == "number" && isFinite(e), Al = (e) => jn(e) === "[object Date]", Qt = (e) => jn(e) === "[object RegExp]", sn = (e) => H(e) && Object.keys(e).length === 0, fe = Object.assign, Fl = Object.create, Y = (e = null) => Fl(e);
let sa;
const Vt = () => sa || (sa = typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : typeof window < "u" ? window : typeof global < "u" ? global : Y());
function oa(e) {
  return e.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;").replace(/'/g, "&apos;").replace(/\//g, "&#x2F;").replace(/=/g, "&#x3D;");
}
function ia(e) {
  return e.replace(/&(?![a-zA-Z0-9#]{2,6};)/g, "&amp;").replace(/"/g, "&quot;").replace(/'/g, "&apos;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
}
function Wl(e) {
  return e = e.replace(/(\w+)\s*=\s*"([^"]*)"/g, (a, r, l) => `${r}="${ia(l)}"`), e = e.replace(/(\w+)\s*=\s*'([^']*)'/g, (a, r, l) => `${r}='${ia(l)}'`), /\s*on\w+\s*=\s*["']?[^"'>]+["']?/gi.test(e) && (e = e.replace(/(\s+)(on)(\w+\s*=)/gi, "$1&#111;n$3")), [
    // In href, src, action, formaction attributes
    /(\s+(?:href|src|action|formaction)\s*=\s*["']?)\s*javascript:/gi,
    // In style attributes within url()
    /(style\s*=\s*["'][^"']*url\s*\(\s*)javascript:/gi
  ].forEach((a) => {
    e = e.replace(a, "$1javascript&#58;");
  }), e;
}
const Ml = Object.prototype.hasOwnProperty;
function Le(e, t) {
  return Ml.call(e, t);
}
const se = Array.isArray, te = (e) => typeof e == "function", M = (e) => typeof e == "string", le = (e) => typeof e == "boolean", G = (e) => e !== null && typeof e == "object", Rl = (e) => G(e) && te(e.then) && te(e.catch), ir = Object.prototype.toString, jn = (e) => ir.call(e), H = (e) => jn(e) === "[object Object]", $l = (e) => e == null ? "" : se(e) || H(e) && e.toString === ir ? JSON.stringify(e, null, 2) : String(e);
function zn(e, t = "") {
  return e.reduce((n, a, r) => r === 0 ? n + a : n + t + a, "");
}
const xt = (e) => !G(e) || se(e);
function Ht(e, t) {
  if (xt(e) || xt(t))
    throw new Error("Invalid value");
  const n = [{ src: e, des: t }];
  for (; n.length; ) {
    const { src: a, des: r } = n.pop();
    Object.keys(a).forEach((l) => {
      l !== "__proto__" && (G(a[l]) && !G(r[l]) && (r[l] = Array.isArray(a[l]) ? [] : Y()), xt(r[l]) || xt(a[l]) ? r[l] = a[l] : n.push({ src: a[l], des: r[l] }));
    });
  }
}
/*!
  * message-compiler v11.2.2
  * (c) 2025 kazuya kawaguchi
  * Released under the MIT License.
  */
function Dl(e, t, n) {
  return { line: e, column: t, offset: n };
}
function Cn(e, t, n) {
  return { start: e, end: t };
}
const K = {
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
}, xl = 17;
function on(e, t, n = {}) {
  const { domain: a, messages: r, args: l } = n, s = e, o = new SyntaxError(String(s));
  return o.code = e, t && (o.location = t), o.domain = a, o;
}
function jl(e) {
  throw e;
}
const Te = " ", zl = "\r", pe = `
`, Ul = "\u2028", Vl = "\u2029";
function Hl(e) {
  const t = e;
  let n = 0, a = 1, r = 1, l = 0;
  const s = (b) => t[b] === zl && t[b + 1] === pe, o = (b) => t[b] === pe, i = (b) => t[b] === Vl, h = (b) => t[b] === Ul, _ = (b) => s(b) || o(b) || i(b) || h(b), C = () => n, E = () => a, g = () => r, P = () => l, w = (b) => s(b) || i(b) || h(b) ? pe : t[b], T = () => w(n), f = () => w(n + l);
  function v() {
    return l = 0, _(n) && (a++, r = 0), s(n) && n++, n++, r++, t[n];
  }
  function y() {
    return s(n + l) && l++, l++, t[n + l];
  }
  function k() {
    n = 0, a = 1, r = 1, l = 0;
  }
  function O(b = 0) {
    l = b;
  }
  function A() {
    const b = n + l;
    for (; b !== n; )
      v();
    l = 0;
  }
  return {
    index: C,
    line: E,
    column: g,
    peekOffset: P,
    charAt: w,
    currentChar: T,
    currentPeek: f,
    next: v,
    peek: y,
    reset: k,
    resetPeek: O,
    skipToPeek: A
  };
}
const Oe = void 0, Gl = ".", ca = "'", Kl = "tokenizer";
function Bl(e, t = {}) {
  const n = t.location !== !1, a = Hl(e), r = () => a.index(), l = () => Dl(a.line(), a.column(), a.index()), s = l(), o = r(), i = {
    currentType: 13,
    offset: o,
    startLoc: s,
    endLoc: s,
    lastType: 13,
    lastOffset: o,
    lastStartLoc: s,
    lastEndLoc: s,
    braceNest: 0,
    inLinked: !1,
    text: ""
  }, h = () => i, { onError: _ } = t;
  function C(c, d, S, ...F) {
    const J = h();
    if (d.column += S, d.offset += S, _) {
      const j = n ? Cn(J.startLoc, d) : null, p = on(c, j, {
        domain: Kl,
        args: F
      });
      _(p);
    }
  }
  function E(c, d, S) {
    c.endLoc = l(), c.currentType = d;
    const F = { type: d };
    return n && (F.loc = Cn(c.startLoc, c.endLoc)), S != null && (F.value = S), F;
  }
  const g = (c) => E(
    c,
    13
    /* TokenTypes.EOF */
  );
  function P(c, d) {
    return c.currentChar() === d ? (c.next(), d) : (C(K.EXPECTED_TOKEN, l(), 0, d), "");
  }
  function w(c) {
    let d = "";
    for (; c.currentPeek() === Te || c.currentPeek() === pe; )
      d += c.currentPeek(), c.peek();
    return d;
  }
  function T(c) {
    const d = w(c);
    return c.skipToPeek(), d;
  }
  function f(c) {
    if (c === Oe)
      return !1;
    const d = c.charCodeAt(0);
    return d >= 97 && d <= 122 || // a-z
    d >= 65 && d <= 90 || // A-Z
    d === 95;
  }
  function v(c) {
    if (c === Oe)
      return !1;
    const d = c.charCodeAt(0);
    return d >= 48 && d <= 57;
  }
  function y(c, d) {
    const { currentType: S } = d;
    if (S !== 2)
      return !1;
    w(c);
    const F = f(c.currentPeek());
    return c.resetPeek(), F;
  }
  function k(c, d) {
    const { currentType: S } = d;
    if (S !== 2)
      return !1;
    w(c);
    const F = c.currentPeek() === "-" ? c.peek() : c.currentPeek(), J = v(F);
    return c.resetPeek(), J;
  }
  function O(c, d) {
    const { currentType: S } = d;
    if (S !== 2)
      return !1;
    w(c);
    const F = c.currentPeek() === ca;
    return c.resetPeek(), F;
  }
  function A(c, d) {
    const { currentType: S } = d;
    if (S !== 7)
      return !1;
    w(c);
    const F = c.currentPeek() === ".";
    return c.resetPeek(), F;
  }
  function b(c, d) {
    const { currentType: S } = d;
    if (S !== 8)
      return !1;
    w(c);
    const F = f(c.currentPeek());
    return c.resetPeek(), F;
  }
  function Z(c, d) {
    const { currentType: S } = d;
    if (!(S === 7 || S === 11))
      return !1;
    w(c);
    const F = c.currentPeek() === ":";
    return c.resetPeek(), F;
  }
  function X(c, d) {
    const { currentType: S } = d;
    if (S !== 9)
      return !1;
    const F = () => {
      const j = c.currentPeek();
      return j === "{" ? f(c.peek()) : j === "@" || j === "|" || j === ":" || j === "." || j === Te || !j ? !1 : j === pe ? (c.peek(), F()) : ce(c, !1);
    }, J = F();
    return c.resetPeek(), J;
  }
  function ie(c) {
    w(c);
    const d = c.currentPeek() === "|";
    return c.resetPeek(), d;
  }
  function ce(c, d = !0) {
    const S = (J = !1, j = "") => {
      const p = c.currentPeek();
      return p === "{" || p === "@" || !p ? J : p === "|" ? !(j === Te || j === pe) : p === Te ? (c.peek(), S(!0, Te)) : p === pe ? (c.peek(), S(!0, pe)) : !0;
    }, F = S();
    return d && c.resetPeek(), F;
  }
  function Q(c, d) {
    const S = c.currentChar();
    return S === Oe ? Oe : d(S) ? (c.next(), S) : null;
  }
  function Xe(c) {
    const d = c.charCodeAt(0);
    return d >= 97 && d <= 122 || // a-z
    d >= 65 && d <= 90 || // A-Z
    d >= 48 && d <= 57 || // 0-9
    d === 95 || // _
    d === 36;
  }
  function Je(c) {
    return Q(c, Xe);
  }
  function qe(c) {
    const d = c.charCodeAt(0);
    return d >= 97 && d <= 122 || // a-z
    d >= 65 && d <= 90 || // A-Z
    d >= 48 && d <= 57 || // 0-9
    d === 95 || // _
    d === 36 || // $
    d === 45;
  }
  function ye(c) {
    return Q(c, qe);
  }
  function Qe(c) {
    const d = c.charCodeAt(0);
    return d >= 48 && d <= 57;
  }
  function et(c) {
    return Q(c, Qe);
  }
  function we(c) {
    const d = c.charCodeAt(0);
    return d >= 48 && d <= 57 || // 0-9
    d >= 65 && d <= 70 || // A-F
    d >= 97 && d <= 102;
  }
  function Me(c) {
    return Q(c, we);
  }
  function Re(c) {
    let d = "", S = "";
    for (; d = et(c); )
      S += d;
    return S;
  }
  function $e(c) {
    let d = "";
    for (; ; ) {
      const S = c.currentChar();
      if (S === "{" || S === "}" || S === "@" || S === "|" || !S)
        break;
      if (S === Te || S === pe)
        if (ce(c))
          d += S, c.next();
        else {
          if (ie(c))
            break;
          d += S, c.next();
        }
      else
        d += S, c.next();
    }
    return d;
  }
  function De(c) {
    T(c);
    let d = "", S = "";
    for (; d = ye(c); )
      S += d;
    const F = c.currentChar();
    if (F && F !== "}" && F !== Oe && F !== Te && F !== pe && F !== "　") {
      const J = ze(c);
      return C(K.INVALID_TOKEN_IN_PLACEHOLDER, l(), 0, S + J), S + J;
    }
    return c.currentChar() === Oe && C(K.UNTERMINATED_CLOSING_BRACE, l(), 0), S;
  }
  function xe(c) {
    T(c);
    let d = "";
    return c.currentChar() === "-" ? (c.next(), d += `-${Re(c)}`) : d += Re(c), c.currentChar() === Oe && C(K.UNTERMINATED_CLOSING_BRACE, l(), 0), d;
  }
  function ht(c) {
    return c !== ca && c !== pe;
  }
  function tt(c) {
    T(c), P(c, "'");
    let d = "", S = "";
    for (; d = Q(c, ht); )
      d === "\\" ? S += nt(c) : S += d;
    const F = c.currentChar();
    return F === pe || F === Oe ? (C(K.UNTERMINATED_SINGLE_QUOTE_IN_PLACEHOLDER, l(), 0), F === pe && (c.next(), P(c, "'")), S) : (P(c, "'"), S);
  }
  function nt(c) {
    const d = c.currentChar();
    switch (d) {
      case "\\":
      case "'":
        return c.next(), `\\${d}`;
      case "u":
        return je(c, d, 4);
      case "U":
        return je(c, d, 6);
      default:
        return C(K.UNKNOWN_ESCAPE_SEQUENCE, l(), 0, d), "";
    }
  }
  function je(c, d, S) {
    P(c, d);
    let F = "";
    for (let J = 0; J < S; J++) {
      const j = Me(c);
      if (!j) {
        C(K.INVALID_UNICODE_ESCAPE_SEQUENCE, l(), 0, `\\${d}${F}${c.currentChar()}`);
        break;
      }
      F += j;
    }
    return `\\${d}${F}`;
  }
  function at(c) {
    return c !== "{" && c !== "}" && c !== Te && c !== pe;
  }
  function ze(c) {
    T(c);
    let d = "", S = "";
    for (; d = Q(c, at); )
      S += d;
    return S;
  }
  function x(c) {
    let d = "", S = "";
    for (; d = Je(c); )
      S += d;
    return S;
  }
  function V(c) {
    const d = (S) => {
      const F = c.currentChar();
      return F === "{" || F === "@" || F === "|" || F === "(" || F === ")" || !F || F === Te ? S : (S += F, c.next(), d(S));
    };
    return d("");
  }
  function re(c) {
    T(c);
    const d = P(
      c,
      "|"
      /* TokenChars.Pipe */
    );
    return T(c), d;
  }
  function ge(c, d) {
    let S = null;
    switch (c.currentChar()) {
      case "{":
        return d.braceNest >= 1 && C(K.NOT_ALLOW_NEST_PLACEHOLDER, l(), 0), c.next(), S = E(
          d,
          2,
          "{"
          /* TokenChars.BraceLeft */
        ), T(c), d.braceNest++, S;
      case "}":
        return d.braceNest > 0 && d.currentType === 2 && C(K.EMPTY_PLACEHOLDER, l(), 0), c.next(), S = E(
          d,
          3,
          "}"
          /* TokenChars.BraceRight */
        ), d.braceNest--, d.braceNest > 0 && T(c), d.inLinked && d.braceNest === 0 && (d.inLinked = !1), S;
      case "@":
        return d.braceNest > 0 && C(K.UNTERMINATED_CLOSING_BRACE, l(), 0), S = Ue(c, d) || g(d), d.braceNest = 0, S;
      default: {
        let J = !0, j = !0, p = !0;
        if (ie(c))
          return d.braceNest > 0 && C(K.UNTERMINATED_CLOSING_BRACE, l(), 0), S = E(d, 1, re(c)), d.braceNest = 0, d.inLinked = !1, S;
        if (d.braceNest > 0 && (d.currentType === 4 || d.currentType === 5 || d.currentType === 6))
          return C(K.UNTERMINATED_CLOSING_BRACE, l(), 0), d.braceNest = 0, Ve(c, d);
        if (J = y(c, d))
          return S = E(d, 4, De(c)), T(c), S;
        if (j = k(c, d))
          return S = E(d, 5, xe(c)), T(c), S;
        if (p = O(c, d))
          return S = E(d, 6, tt(c)), T(c), S;
        if (!J && !j && !p)
          return S = E(d, 12, ze(c)), C(K.INVALID_TOKEN_IN_PLACEHOLDER, l(), 0, S.value), T(c), S;
        break;
      }
    }
    return S;
  }
  function Ue(c, d) {
    const { currentType: S } = d;
    let F = null;
    const J = c.currentChar();
    switch ((S === 7 || S === 8 || S === 11 || S === 9) && (J === pe || J === Te) && C(K.INVALID_LINKED_FORMAT, l(), 0), J) {
      case "@":
        return c.next(), F = E(
          d,
          7,
          "@"
          /* TokenChars.LinkedAlias */
        ), d.inLinked = !0, F;
      case ".":
        return T(c), c.next(), E(
          d,
          8,
          "."
          /* TokenChars.LinkedDot */
        );
      case ":":
        return T(c), c.next(), E(
          d,
          9,
          ":"
          /* TokenChars.LinkedDelimiter */
        );
      default:
        return ie(c) ? (F = E(d, 1, re(c)), d.braceNest = 0, d.inLinked = !1, F) : A(c, d) || Z(c, d) ? (T(c), Ue(c, d)) : b(c, d) ? (T(c), E(d, 11, x(c))) : X(c, d) ? (T(c), J === "{" ? ge(c, d) || F : E(d, 10, V(c))) : (S === 7 && C(K.INVALID_LINKED_FORMAT, l(), 0), d.braceNest = 0, d.inLinked = !1, Ve(c, d));
    }
  }
  function Ve(c, d) {
    let S = {
      type: 13
      /* TokenTypes.EOF */
    };
    if (d.braceNest > 0)
      return ge(c, d) || g(d);
    if (d.inLinked)
      return Ue(c, d) || g(d);
    switch (c.currentChar()) {
      case "{":
        return ge(c, d) || g(d);
      case "}":
        return C(K.UNBALANCED_CLOSING_BRACE, l(), 0), c.next(), E(
          d,
          3,
          "}"
          /* TokenChars.BraceRight */
        );
      case "@":
        return Ue(c, d) || g(d);
      default: {
        if (ie(c))
          return S = E(d, 1, re(c)), d.braceNest = 0, d.inLinked = !1, S;
        if (ce(c))
          return E(d, 0, $e(c));
        break;
      }
    }
    return S;
  }
  function rt() {
    const { currentType: c, offset: d, startLoc: S, endLoc: F } = i;
    return i.lastType = c, i.lastOffset = d, i.lastStartLoc = S, i.lastEndLoc = F, i.offset = r(), i.startLoc = l(), a.currentChar() === Oe ? E(
      i,
      13
      /* TokenTypes.EOF */
    ) : Ve(a, i);
  }
  return {
    nextToken: rt,
    currentOffset: r,
    currentPosition: l,
    context: h
  };
}
const Yl = "parser", Zl = /(?:\\\\|\\'|\\u([0-9a-fA-F]{4})|\\U([0-9a-fA-F]{6}))/g;
function Xl(e, t, n) {
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
function Jl(e = {}) {
  const t = e.location !== !1, { onError: n } = e;
  function a(f, v, y, k, ...O) {
    const A = f.currentPosition();
    if (A.offset += k, A.column += k, n) {
      const b = t ? Cn(y, A) : null, Z = on(v, b, {
        domain: Yl,
        args: O
      });
      n(Z);
    }
  }
  function r(f, v, y) {
    const k = { type: f };
    return t && (k.start = v, k.end = v, k.loc = { start: y, end: y }), k;
  }
  function l(f, v, y, k) {
    t && (f.end = v, f.loc && (f.loc.end = y));
  }
  function s(f, v) {
    const y = f.context(), k = r(3, y.offset, y.startLoc);
    return k.value = v, l(k, f.currentOffset(), f.currentPosition()), k;
  }
  function o(f, v) {
    const y = f.context(), { lastOffset: k, lastStartLoc: O } = y, A = r(5, k, O);
    return A.index = parseInt(v, 10), f.nextToken(), l(A, f.currentOffset(), f.currentPosition()), A;
  }
  function i(f, v) {
    const y = f.context(), { lastOffset: k, lastStartLoc: O } = y, A = r(4, k, O);
    return A.key = v, f.nextToken(), l(A, f.currentOffset(), f.currentPosition()), A;
  }
  function h(f, v) {
    const y = f.context(), { lastOffset: k, lastStartLoc: O } = y, A = r(9, k, O);
    return A.value = v.replace(Zl, Xl), f.nextToken(), l(A, f.currentOffset(), f.currentPosition()), A;
  }
  function _(f) {
    const v = f.nextToken(), y = f.context(), { lastOffset: k, lastStartLoc: O } = y, A = r(8, k, O);
    return v.type !== 11 ? (a(f, K.UNEXPECTED_EMPTY_LINKED_MODIFIER, y.lastStartLoc, 0), A.value = "", l(A, k, O), {
      nextConsumeToken: v,
      node: A
    }) : (v.value == null && a(f, K.UNEXPECTED_LEXICAL_ANALYSIS, y.lastStartLoc, 0, Ie(v)), A.value = v.value || "", l(A, f.currentOffset(), f.currentPosition()), {
      node: A
    });
  }
  function C(f, v) {
    const y = f.context(), k = r(7, y.offset, y.startLoc);
    return k.value = v, l(k, f.currentOffset(), f.currentPosition()), k;
  }
  function E(f) {
    const v = f.context(), y = r(6, v.offset, v.startLoc);
    let k = f.nextToken();
    if (k.type === 8) {
      const O = _(f);
      y.modifier = O.node, k = O.nextConsumeToken || f.nextToken();
    }
    switch (k.type !== 9 && a(f, K.UNEXPECTED_LEXICAL_ANALYSIS, v.lastStartLoc, 0, Ie(k)), k = f.nextToken(), k.type === 2 && (k = f.nextToken()), k.type) {
      case 10:
        k.value == null && a(f, K.UNEXPECTED_LEXICAL_ANALYSIS, v.lastStartLoc, 0, Ie(k)), y.key = C(f, k.value || "");
        break;
      case 4:
        k.value == null && a(f, K.UNEXPECTED_LEXICAL_ANALYSIS, v.lastStartLoc, 0, Ie(k)), y.key = i(f, k.value || "");
        break;
      case 5:
        k.value == null && a(f, K.UNEXPECTED_LEXICAL_ANALYSIS, v.lastStartLoc, 0, Ie(k)), y.key = o(f, k.value || "");
        break;
      case 6:
        k.value == null && a(f, K.UNEXPECTED_LEXICAL_ANALYSIS, v.lastStartLoc, 0, Ie(k)), y.key = h(f, k.value || "");
        break;
      default: {
        a(f, K.UNEXPECTED_EMPTY_LINKED_KEY, v.lastStartLoc, 0);
        const O = f.context(), A = r(7, O.offset, O.startLoc);
        return A.value = "", l(A, O.offset, O.startLoc), y.key = A, l(y, O.offset, O.startLoc), {
          nextConsumeToken: k,
          node: y
        };
      }
    }
    return l(y, f.currentOffset(), f.currentPosition()), {
      node: y
    };
  }
  function g(f) {
    const v = f.context(), y = v.currentType === 1 ? f.currentOffset() : v.offset, k = v.currentType === 1 ? v.endLoc : v.startLoc, O = r(2, y, k);
    O.items = [];
    let A = null;
    do {
      const X = A || f.nextToken();
      switch (A = null, X.type) {
        case 0:
          X.value == null && a(f, K.UNEXPECTED_LEXICAL_ANALYSIS, v.lastStartLoc, 0, Ie(X)), O.items.push(s(f, X.value || ""));
          break;
        case 5:
          X.value == null && a(f, K.UNEXPECTED_LEXICAL_ANALYSIS, v.lastStartLoc, 0, Ie(X)), O.items.push(o(f, X.value || ""));
          break;
        case 4:
          X.value == null && a(f, K.UNEXPECTED_LEXICAL_ANALYSIS, v.lastStartLoc, 0, Ie(X)), O.items.push(i(f, X.value || ""));
          break;
        case 6:
          X.value == null && a(f, K.UNEXPECTED_LEXICAL_ANALYSIS, v.lastStartLoc, 0, Ie(X)), O.items.push(h(f, X.value || ""));
          break;
        case 7: {
          const ie = E(f);
          O.items.push(ie.node), A = ie.nextConsumeToken || null;
          break;
        }
      }
    } while (v.currentType !== 13 && v.currentType !== 1);
    const b = v.currentType === 1 ? v.lastOffset : f.currentOffset(), Z = v.currentType === 1 ? v.lastEndLoc : f.currentPosition();
    return l(O, b, Z), O;
  }
  function P(f, v, y, k) {
    const O = f.context();
    let A = k.items.length === 0;
    const b = r(1, v, y);
    b.cases = [], b.cases.push(k);
    do {
      const Z = g(f);
      A || (A = Z.items.length === 0), b.cases.push(Z);
    } while (O.currentType !== 13);
    return A && a(f, K.MUST_HAVE_MESSAGES_IN_PLURAL, y, 0), l(b, f.currentOffset(), f.currentPosition()), b;
  }
  function w(f) {
    const v = f.context(), { offset: y, startLoc: k } = v, O = g(f);
    return v.currentType === 13 ? O : P(f, y, k, O);
  }
  function T(f) {
    const v = Bl(f, fe({}, e)), y = v.context(), k = r(0, y.offset, y.startLoc);
    return t && k.loc && (k.loc.source = f), k.body = w(v), e.onCacheKey && (k.cacheKey = e.onCacheKey(f)), y.currentType !== 13 && a(v, K.UNEXPECTED_LEXICAL_ANALYSIS, y.lastStartLoc, 0, f[y.offset] || ""), l(k, v.currentOffset(), v.currentPosition()), k;
  }
  return { parse: T };
}
function Ie(e) {
  if (e.type === 13)
    return "EOF";
  const t = (e.value || "").replace(/\r?\n/gu, "\\n");
  return t.length > 10 ? t.slice(0, 9) + "…" : t;
}
function ql(e, t = {}) {
  const n = {
    ast: e,
    helpers: /* @__PURE__ */ new Set()
  };
  return { context: () => n, helper: (l) => (n.helpers.add(l), l) };
}
function ua(e, t) {
  for (let n = 0; n < e.length; n++)
    Un(e[n], t);
}
function Un(e, t) {
  switch (e.type) {
    case 1:
      ua(e.cases, t), t.helper(
        "plural"
        /* HelperNameMap.PLURAL */
      );
      break;
    case 2:
      ua(e.items, t);
      break;
    case 6: {
      Un(e.key, t), t.helper(
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
function Ql(e, t = {}) {
  const n = ql(e);
  n.helper(
    "normalize"
    /* HelperNameMap.NORMALIZE */
  ), e.body && Un(e.body, n);
  const a = n.context();
  e.helpers = Array.from(a.helpers);
}
function es(e) {
  const t = e.body;
  return t.type === 2 ? da(t) : t.cases.forEach((n) => da(n)), e;
}
function da(e) {
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
      e.static = zn(t);
      for (let n = 0; n < e.items.length; n++) {
        const a = e.items[n];
        (a.type === 3 || a.type === 9) && delete a.value;
      }
    }
  }
}
function mt(e) {
  switch (e.t = e.type, e.type) {
    case 0: {
      const t = e;
      mt(t.body), t.b = t.body, delete t.body;
      break;
    }
    case 1: {
      const t = e, n = t.cases;
      for (let a = 0; a < n.length; a++)
        mt(n[a]);
      t.c = n, delete t.cases;
      break;
    }
    case 2: {
      const t = e, n = t.items;
      for (let a = 0; a < n.length; a++)
        mt(n[a]);
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
      mt(t.key), t.k = t.key, delete t.key, t.modifier && (mt(t.modifier), t.m = t.modifier, delete t.modifier);
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
function ts(e, t) {
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
  const o = () => s;
  function i(w, T) {
    s.code += w;
  }
  function h(w, T = !0) {
    const f = T ? a : "";
    i(r ? f + "  ".repeat(w) : f);
  }
  function _(w = !0) {
    const T = ++s.indentLevel;
    w && h(T);
  }
  function C(w = !0) {
    const T = --s.indentLevel;
    w && h(T);
  }
  function E() {
    h(s.indentLevel);
  }
  return {
    context: o,
    push: i,
    indent: _,
    deindent: C,
    newline: E,
    helper: (w) => `_${w}`,
    needIndent: () => s.needIndent
  };
}
function ns(e, t) {
  const { helper: n } = e;
  e.push(`${n(
    "linked"
    /* HelperNameMap.LINKED */
  )}(`), _t(e, t.key), t.modifier ? (e.push(", "), _t(e, t.modifier), e.push(", _type")) : e.push(", undefined, _type"), e.push(")");
}
function as(e, t) {
  const { helper: n, needIndent: a } = e;
  e.push(`${n(
    "normalize"
    /* HelperNameMap.NORMALIZE */
  )}([`), e.indent(a());
  const r = t.items.length;
  for (let l = 0; l < r && (_t(e, t.items[l]), l !== r - 1); l++)
    e.push(", ");
  e.deindent(a()), e.push("])");
}
function rs(e, t) {
  const { helper: n, needIndent: a } = e;
  if (t.cases.length > 1) {
    e.push(`${n(
      "plural"
      /* HelperNameMap.PLURAL */
    )}([`), e.indent(a());
    const r = t.cases.length;
    for (let l = 0; l < r && (_t(e, t.cases[l]), l !== r - 1); l++)
      e.push(", ");
    e.deindent(a()), e.push("])");
  }
}
function ls(e, t) {
  t.body ? _t(e, t.body) : e.push("null");
}
function _t(e, t) {
  const { helper: n } = e;
  switch (t.type) {
    case 0:
      ls(e, t);
      break;
    case 1:
      rs(e, t);
      break;
    case 2:
      as(e, t);
      break;
    case 6:
      ns(e, t);
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
const ss = (e, t = {}) => {
  const n = M(t.mode) ? t.mode : "normal", a = M(t.filename) ? t.filename : "message.intl";
  t.sourceMap;
  const r = t.breakLineCode != null ? t.breakLineCode : n === "arrow" ? ";" : `
`, l = t.needIndent ? t.needIndent : n !== "arrow", s = e.helpers || [], o = ts(e, {
    filename: a,
    breakLineCode: r,
    needIndent: l
  });
  o.push(n === "normal" ? "function __msg__ (ctx) {" : "(ctx) => {"), o.indent(l), s.length > 0 && (o.push(`const { ${zn(s.map((_) => `${_}: _${_}`), ", ")} } = ctx`), o.newline()), o.push("return "), _t(o, e), o.deindent(l), o.push("}"), delete e.helpers;
  const { code: i, map: h } = o.context();
  return {
    ast: e,
    code: i,
    map: h ? h.toJSON() : void 0
    // eslint-disable-line @typescript-eslint/no-explicit-any
  };
};
function os(e, t = {}) {
  const n = fe({}, t), a = !!n.jit, r = !!n.minify, l = n.optimize == null ? !0 : n.optimize, o = Jl(n).parse(e);
  return a ? (l && es(o), r && mt(o), { ast: o, code: "" }) : (Ql(o, n), ss(o, n));
}
/*!
  * core-base v11.2.2
  * (c) 2025 kazuya kawaguchi
  * Released under the MIT License.
  */
function is() {
  typeof __INTLIFY_DROP_MESSAGE_COMPILER__ != "boolean" && (Vt().__INTLIFY_DROP_MESSAGE_COMPILER__ = !1);
}
function Ne(e) {
  return G(e) && Vn(e) === 0 && (Le(e, "b") || Le(e, "body"));
}
const cr = ["b", "body"];
function cs(e) {
  return Ye(e, cr);
}
const ur = ["c", "cases"];
function us(e) {
  return Ye(e, ur, []);
}
const dr = ["s", "static"];
function ds(e) {
  return Ye(e, dr);
}
const fr = ["i", "items"];
function fs(e) {
  return Ye(e, fr, []);
}
const hr = ["t", "type"];
function Vn(e) {
  return Ye(e, hr);
}
const pr = ["v", "value"];
function jt(e, t) {
  const n = Ye(e, pr);
  if (n != null)
    return n;
  throw At(t);
}
const mr = ["m", "modifier"];
function hs(e) {
  return Ye(e, mr);
}
const gr = ["k", "key"];
function ps(e) {
  const t = Ye(e, gr);
  if (t)
    return t;
  throw At(
    6
    /* NodeTypes.Linked */
  );
}
function Ye(e, t, n) {
  for (let a = 0; a < t.length; a++) {
    const r = t[a];
    if (Le(e, r) && e[r] != null)
      return e[r];
  }
  return n;
}
const wr = [
  ...cr,
  ...ur,
  ...dr,
  ...fr,
  ...gr,
  ...mr,
  ...pr,
  ...hr
];
function At(e) {
  return new Error(`unhandled node type: ${e}`);
}
function gn(e) {
  return (n) => ms(n, e);
}
function ms(e, t) {
  const n = cs(t);
  if (n == null)
    throw At(
      0
      /* NodeTypes.Resource */
    );
  if (Vn(n) === 1) {
    const l = us(n);
    return e.plural(l.reduce((s, o) => [
      ...s,
      fa(e, o)
    ], []));
  } else
    return fa(e, n);
}
function fa(e, t) {
  const n = ds(t);
  if (n != null)
    return e.type === "text" ? n : e.normalize([n]);
  {
    const a = fs(t).reduce((r, l) => [...r, Sn(e, l)], []);
    return e.normalize(a);
  }
}
function Sn(e, t) {
  const n = Vn(t);
  switch (n) {
    case 3:
      return jt(t, n);
    case 9:
      return jt(t, n);
    case 4: {
      const a = t;
      if (Le(a, "k") && a.k)
        return e.interpolate(e.named(a.k));
      if (Le(a, "key") && a.key)
        return e.interpolate(e.named(a.key));
      throw At(n);
    }
    case 5: {
      const a = t;
      if (Le(a, "i") && oe(a.i))
        return e.interpolate(e.list(a.i));
      if (Le(a, "index") && oe(a.index))
        return e.interpolate(e.list(a.index));
      throw At(n);
    }
    case 6: {
      const a = t, r = hs(a), l = ps(a);
      return e.linked(Sn(e, l), r ? Sn(e, r) : void 0, e.type);
    }
    case 7:
      return jt(t, n);
    case 8:
      return jt(t, n);
    default:
      throw new Error(`unhandled node on format message part: ${n}`);
  }
}
const gs = (e) => e;
let zt = Y();
function ws(e, t = {}) {
  let n = !1;
  const a = t.onError || jl;
  return t.onError = (r) => {
    n = !0, a(r);
  }, { ...os(e, t), detectError: n };
}
// @__NO_SIDE_EFFECTS__
function vs(e, t) {
  if (!__INTLIFY_DROP_MESSAGE_COMPILER__ && M(e)) {
    le(t.warnHtmlMessage) && t.warnHtmlMessage;
    const a = (t.onCacheKey || gs)(e), r = zt[a];
    if (r)
      return r;
    const { ast: l, detectError: s } = ws(e, {
      ...t,
      location: !1,
      jit: !0
    }), o = gn(l);
    return s ? o : zt[a] = o;
  } else {
    const n = e.cacheKey;
    if (n) {
      const a = zt[n];
      return a || (zt[n] = gn(e));
    } else
      return gn(e);
  }
}
const Ae = {
  INVALID_ARGUMENT: xl,
  // 17
  INVALID_DATE_ARGUMENT: 18,
  INVALID_ISO_DATE_ARGUMENT: 19,
  NOT_SUPPORT_LOCALE_PROMISE_VALUE: 21,
  NOT_SUPPORT_LOCALE_ASYNC_FUNCTION: 22,
  NOT_SUPPORT_LOCALE_TYPE: 23
}, _s = 24;
function Fe(e) {
  return on(e, null, void 0);
}
function Hn(e, t) {
  return t.locale != null ? ha(t.locale) : ha(e.locale);
}
let wn;
function ha(e) {
  if (M(e))
    return e;
  if (te(e)) {
    if (e.resolvedOnce && wn != null)
      return wn;
    if (e.constructor.name === "Function") {
      const t = e();
      if (Rl(t))
        throw Fe(Ae.NOT_SUPPORT_LOCALE_PROMISE_VALUE);
      return wn = t;
    } else
      throw Fe(Ae.NOT_SUPPORT_LOCALE_ASYNC_FUNCTION);
  } else
    throw Fe(Ae.NOT_SUPPORT_LOCALE_TYPE);
}
function bs(e, t, n) {
  return [.../* @__PURE__ */ new Set([
    n,
    ...se(t) ? t : G(t) ? Object.keys(t) : M(t) ? [t] : [n]
  ])];
}
function vr(e, t, n) {
  const a = M(n) ? n : en, r = e;
  r.__localeChainCache || (r.__localeChainCache = /* @__PURE__ */ new Map());
  let l = r.__localeChainCache.get(a);
  if (!l) {
    l = [];
    let s = [n];
    for (; se(s); )
      s = pa(l, s, t);
    const o = se(t) || !H(t) ? t : t.default ? t.default : null;
    s = M(o) ? [o] : o, se(s) && pa(l, s, !1), r.__localeChainCache.set(a, l);
  }
  return l;
}
function pa(e, t, n) {
  let a = !0;
  for (let r = 0; r < t.length && le(a); r++) {
    const l = t[r];
    M(l) && (a = ys(e, t[r], n));
  }
  return a;
}
function ys(e, t, n) {
  let a;
  const r = t.split("-");
  do {
    const l = r.join("-");
    a = ks(e, l, n), r.splice(-1, 1);
  } while (r.length && a === !0);
  return a;
}
function ks(e, t, n) {
  let a = !1;
  if (!e.includes(t) && (a = !0, t)) {
    a = t[t.length - 1] !== "!";
    const r = t.replace(/!/g, "");
    e.push(r), (se(n) || H(n)) && n[r] && (a = n[r]);
  }
  return a;
}
const Ze = [];
Ze[
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
Ze[
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
Ze[
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
Ze[
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
Ze[
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
Ze[
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
Ze[
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
const Cs = /^\s?(?:true|false|-?[\d.]+|'[^']*'|"[^"]*")\s?$/;
function Ss(e) {
  return Cs.test(e);
}
function Ls(e) {
  const t = e.charCodeAt(0), n = e.charCodeAt(e.length - 1);
  return t === n && (t === 34 || t === 39) ? e.slice(1, -1) : e;
}
function Es(e) {
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
function Ts(e) {
  const t = e.trim();
  return e.charAt(0) === "0" && isNaN(parseInt(e)) ? !1 : Ss(t) ? Ls(t) : "*" + t;
}
function Is(e) {
  const t = [];
  let n = -1, a = 0, r = 0, l, s, o, i, h, _, C;
  const E = [];
  E[
    0
    /* Actions.APPEND */
  ] = () => {
    s === void 0 ? s = o : s += o;
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
      if (r = 0, s === void 0 || (s = Ts(s), s === !1))
        return !1;
      E[
        1
        /* Actions.PUSH */
      ]();
    }
  };
  function g() {
    const P = e[n + 1];
    if (a === 5 && P === "'" || a === 6 && P === '"')
      return n++, o = "\\" + P, E[
        0
        /* Actions.APPEND */
      ](), !0;
  }
  for (; a !== null; )
    if (n++, l = e[n], !(l === "\\" && g())) {
      if (i = Es(l), C = Ze[a], h = C[i] || C.l || 8, h === 8 || (a = h[0], h[1] !== void 0 && (_ = E[h[1]], _ && (o = l, _() === !1))))
        return;
      if (a === 7)
        return t;
    }
}
const ma = /* @__PURE__ */ new Map();
function Ns(e, t) {
  return G(e) ? e[t] : null;
}
function Ps(e, t) {
  if (!G(e))
    return null;
  let n = ma.get(t);
  if (n || (n = Is(t), n && ma.set(t, n)), !n)
    return null;
  const a = n.length;
  let r = e, l = 0;
  for (; l < a; ) {
    const s = n[l];
    if (wr.includes(s) && Ne(r))
      return null;
    const o = r[s];
    if (o === void 0 || te(r))
      return null;
    r = o, l++;
  }
  return r;
}
const Os = "11.2.2", cn = -1, en = "en-US", ga = "", wa = (e) => `${e.charAt(0).toLocaleUpperCase()}${e.substr(1)}`;
function As() {
  return {
    upper: (e, t) => t === "text" && M(e) ? e.toUpperCase() : t === "vnode" && G(e) && "__v_isVNode" in e ? e.children.toUpperCase() : e,
    lower: (e, t) => t === "text" && M(e) ? e.toLowerCase() : t === "vnode" && G(e) && "__v_isVNode" in e ? e.children.toLowerCase() : e,
    capitalize: (e, t) => t === "text" && M(e) ? wa(e) : t === "vnode" && G(e) && "__v_isVNode" in e ? wa(e.children) : e
  };
}
let _r;
function Fs(e) {
  _r = e;
}
let br;
function Ws(e) {
  br = e;
}
let yr;
function Ms(e) {
  yr = e;
}
let kr = null;
const va = (e) => {
  kr = e;
}, Rs = () => kr;
let _a = 0;
function $s(e = {}) {
  const t = te(e.onWarn) ? e.onWarn : Nl, n = M(e.version) ? e.version : Os, a = M(e.locale) || te(e.locale) ? e.locale : en, r = te(a) ? en : a, l = se(e.fallbackLocale) || H(e.fallbackLocale) || M(e.fallbackLocale) || e.fallbackLocale === !1 ? e.fallbackLocale : r, s = H(e.messages) ? e.messages : vn(r), o = H(e.datetimeFormats) ? e.datetimeFormats : vn(r), i = H(e.numberFormats) ? e.numberFormats : vn(r), h = fe(Y(), e.modifiers, As()), _ = e.pluralRules || Y(), C = te(e.missing) ? e.missing : null, E = le(e.missingWarn) || Qt(e.missingWarn) ? e.missingWarn : !0, g = le(e.fallbackWarn) || Qt(e.fallbackWarn) ? e.fallbackWarn : !0, P = !!e.fallbackFormat, w = !!e.unresolving, T = te(e.postTranslation) ? e.postTranslation : null, f = H(e.processor) ? e.processor : null, v = le(e.warnHtmlMessage) ? e.warnHtmlMessage : !0, y = !!e.escapeParameter, k = te(e.messageCompiler) ? e.messageCompiler : _r, O = te(e.messageResolver) ? e.messageResolver : br || Ns, A = te(e.localeFallbacker) ? e.localeFallbacker : yr || bs, b = G(e.fallbackContext) ? e.fallbackContext : void 0, Z = e, X = G(Z.__datetimeFormatters) ? Z.__datetimeFormatters : /* @__PURE__ */ new Map(), ie = G(Z.__numberFormatters) ? Z.__numberFormatters : /* @__PURE__ */ new Map(), ce = G(Z.__meta) ? Z.__meta : {};
  _a++;
  const Q = {
    version: n,
    cid: _a,
    locale: a,
    fallbackLocale: l,
    messages: s,
    modifiers: h,
    pluralRules: _,
    missing: C,
    missingWarn: E,
    fallbackWarn: g,
    fallbackFormat: P,
    unresolving: w,
    postTranslation: T,
    processor: f,
    warnHtmlMessage: v,
    escapeParameter: y,
    messageCompiler: k,
    messageResolver: O,
    localeFallbacker: A,
    fallbackContext: b,
    onWarn: t,
    __meta: ce
  };
  return Q.datetimeFormats = o, Q.numberFormats = i, Q.__datetimeFormatters = X, Q.__numberFormatters = ie, Q;
}
const vn = (e) => ({ [e]: Y() });
function Gn(e, t, n, a, r) {
  const { missing: l, onWarn: s } = e;
  if (l !== null) {
    const o = l(e, n, t, r);
    return M(o) ? o : t;
  } else
    return t;
}
function Tt(e, t, n) {
  const a = e;
  a.__localeChainCache = /* @__PURE__ */ new Map(), e.localeFallbacker(e, n, t);
}
function Ds(e, t) {
  return e === t ? !1 : e.split("-")[0] === t.split("-")[0];
}
function xs(e, t) {
  const n = t.indexOf(e);
  if (n === -1)
    return !1;
  for (let a = n + 1; a < t.length; a++)
    if (Ds(e, t[a]))
      return !0;
  return !1;
}
function ba(e, ...t) {
  const { datetimeFormats: n, unresolving: a, fallbackLocale: r, onWarn: l, localeFallbacker: s } = e, { __datetimeFormatters: o } = e, [i, h, _, C] = Ln(...t), E = le(_.missingWarn) ? _.missingWarn : e.missingWarn;
  le(_.fallbackWarn) ? _.fallbackWarn : e.fallbackWarn;
  const g = !!_.part, P = Hn(e, _), w = s(
    e,
    // eslint-disable-line @typescript-eslint/no-explicit-any
    r,
    P
  );
  if (!M(i) || i === "")
    return new Intl.DateTimeFormat(P, C).format(h);
  let T = {}, f, v = null;
  const y = "datetime format";
  for (let A = 0; A < w.length && (f = w[A], T = n[f] || {}, v = T[i], !H(v)); A++)
    Gn(e, i, f, E, y);
  if (!H(v) || !M(f))
    return a ? cn : i;
  let k = `${f}__${i}`;
  sn(C) || (k = `${k}__${JSON.stringify(C)}`);
  let O = o.get(k);
  return O || (O = new Intl.DateTimeFormat(f, fe({}, v, C)), o.set(k, O)), g ? O.formatToParts(h) : O.format(h);
}
const Cr = [
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
function Ln(...e) {
  const [t, n, a, r] = e, l = Y();
  let s = Y(), o;
  if (M(t)) {
    const i = t.match(/(\d{4}-\d{2}-\d{2})(T|\s)?(.*)/);
    if (!i)
      throw Fe(Ae.INVALID_ISO_DATE_ARGUMENT);
    const h = i[3] ? i[3].trim().startsWith("T") ? `${i[1].trim()}${i[3].trim()}` : `${i[1].trim()}T${i[3].trim()}` : i[1].trim();
    o = new Date(h);
    try {
      o.toISOString();
    } catch {
      throw Fe(Ae.INVALID_ISO_DATE_ARGUMENT);
    }
  } else if (Al(t)) {
    if (isNaN(t.getTime()))
      throw Fe(Ae.INVALID_DATE_ARGUMENT);
    o = t;
  } else if (oe(t))
    o = t;
  else
    throw Fe(Ae.INVALID_ARGUMENT);
  return M(n) ? l.key = n : H(n) && Object.keys(n).forEach((i) => {
    Cr.includes(i) ? s[i] = n[i] : l[i] = n[i];
  }), M(a) ? l.locale = a : H(a) && (s = a), H(r) && (s = r), [l.key || "", o, l, s];
}
function ya(e, t, n) {
  const a = e;
  for (const r in n) {
    const l = `${t}__${r}`;
    a.__datetimeFormatters.has(l) && a.__datetimeFormatters.delete(l);
  }
}
function ka(e, ...t) {
  const { numberFormats: n, unresolving: a, fallbackLocale: r, onWarn: l, localeFallbacker: s } = e, { __numberFormatters: o } = e, [i, h, _, C] = En(...t), E = le(_.missingWarn) ? _.missingWarn : e.missingWarn;
  le(_.fallbackWarn) ? _.fallbackWarn : e.fallbackWarn;
  const g = !!_.part, P = Hn(e, _), w = s(
    e,
    // eslint-disable-line @typescript-eslint/no-explicit-any
    r,
    P
  );
  if (!M(i) || i === "")
    return new Intl.NumberFormat(P, C).format(h);
  let T = {}, f, v = null;
  const y = "number format";
  for (let A = 0; A < w.length && (f = w[A], T = n[f] || {}, v = T[i], !H(v)); A++)
    Gn(e, i, f, E, y);
  if (!H(v) || !M(f))
    return a ? cn : i;
  let k = `${f}__${i}`;
  sn(C) || (k = `${k}__${JSON.stringify(C)}`);
  let O = o.get(k);
  return O || (O = new Intl.NumberFormat(f, fe({}, v, C)), o.set(k, O)), g ? O.formatToParts(h) : O.format(h);
}
const Sr = [
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
function En(...e) {
  const [t, n, a, r] = e, l = Y();
  let s = Y();
  if (!oe(t))
    throw Fe(Ae.INVALID_ARGUMENT);
  const o = t;
  return M(n) ? l.key = n : H(n) && Object.keys(n).forEach((i) => {
    Sr.includes(i) ? s[i] = n[i] : l[i] = n[i];
  }), M(a) ? l.locale = a : H(a) && (s = a), H(r) && (s = r), [l.key || "", o, l, s];
}
function Ca(e, t, n) {
  const a = e;
  for (const r in n) {
    const l = `${t}__${r}`;
    a.__numberFormatters.has(l) && a.__numberFormatters.delete(l);
  }
}
const js = (e) => e, zs = (e) => "", Us = "text", Vs = (e) => e.length === 0 ? "" : zn(e), Hs = $l;
function Sa(e, t) {
  return e = Math.abs(e), t === 2 ? e ? e > 1 ? 1 : 0 : 1 : e ? Math.min(e, 2) : 0;
}
function Gs(e) {
  const t = oe(e.pluralIndex) ? e.pluralIndex : -1;
  return e.named && (oe(e.named.count) || oe(e.named.n)) ? oe(e.named.count) ? e.named.count : oe(e.named.n) ? e.named.n : t : t;
}
function Ks(e, t) {
  t.count || (t.count = e), t.n || (t.n = e);
}
function Bs(e = {}) {
  const t = e.locale, n = Gs(e), a = G(e.pluralRules) && M(t) && te(e.pluralRules[t]) ? e.pluralRules[t] : Sa, r = G(e.pluralRules) && M(t) && te(e.pluralRules[t]) ? Sa : void 0, l = (f) => f[a(n, f.length, r)], s = e.list || [], o = (f) => s[f], i = e.named || Y();
  oe(e.pluralIndex) && Ks(n, i);
  const h = (f) => i[f];
  function _(f, v) {
    const y = te(e.messages) ? e.messages(f, !!v) : G(e.messages) ? e.messages[f] : !1;
    return y || (e.parent ? e.parent.message(f) : zs);
  }
  const C = (f) => e.modifiers ? e.modifiers[f] : js, E = H(e.processor) && te(e.processor.normalize) ? e.processor.normalize : Vs, g = H(e.processor) && te(e.processor.interpolate) ? e.processor.interpolate : Hs, P = H(e.processor) && M(e.processor.type) ? e.processor.type : Us, T = {
    list: o,
    named: h,
    plural: l,
    linked: (f, ...v) => {
      const [y, k] = v;
      let O = "text", A = "";
      v.length === 1 ? G(y) ? (A = y.modifier || A, O = y.type || O) : M(y) && (A = y || A) : v.length === 2 && (M(y) && (A = y || A), M(k) && (O = k || O));
      const b = _(f, !0)(T), Z = (
        // The message in vnode resolved with linked are returned as an array by processor.nomalize
        O === "vnode" && se(b) && A ? b[0] : b
      );
      return A ? C(A)(Z, O) : Z;
    },
    message: _,
    type: P,
    interpolate: g,
    normalize: E,
    values: fe(Y(), s, i)
  };
  return T;
}
const La = () => "", We = (e) => te(e);
function Ea(e, ...t) {
  const { fallbackFormat: n, postTranslation: a, unresolving: r, messageCompiler: l, fallbackLocale: s, messages: o } = e, [i, h] = Tn(...t), _ = le(h.missingWarn) ? h.missingWarn : e.missingWarn, C = le(h.fallbackWarn) ? h.fallbackWarn : e.fallbackWarn, E = le(h.escapeParameter) ? h.escapeParameter : e.escapeParameter, g = !!h.resolvedMessage, P = M(h.default) || le(h.default) ? le(h.default) ? l ? i : () => i : h.default : n ? l ? i : () => i : null, w = n || P != null && (M(P) || te(P)), T = Hn(e, h);
  E && Ys(h);
  let [f, v, y] = g ? [
    i,
    T,
    o[T] || Y()
  ] : Lr(e, i, T, s, C, _), k = f, O = i;
  if (!g && !(M(k) || Ne(k) || We(k)) && w && (k = P, O = k), !g && (!(M(k) || Ne(k) || We(k)) || !M(v)))
    return r ? cn : i;
  let A = !1;
  const b = () => {
    A = !0;
  }, Z = We(k) ? k : Er(e, i, v, k, O, b);
  if (A)
    return k;
  const X = Js(e, v, y, h), ie = Bs(X), ce = Zs(e, Z, ie);
  let Q = a ? a(ce, i) : ce;
  return E && M(Q) && (Q = Wl(Q)), Q;
}
function Ys(e) {
  se(e.list) ? e.list = e.list.map((t) => M(t) ? oa(t) : t) : G(e.named) && Object.keys(e.named).forEach((t) => {
    M(e.named[t]) && (e.named[t] = oa(e.named[t]));
  });
}
function Lr(e, t, n, a, r, l) {
  const { messages: s, onWarn: o, messageResolver: i, localeFallbacker: h } = e, _ = h(e, a, n);
  let C = Y(), E, g = null;
  const P = "translate";
  for (let w = 0; w < _.length && (E = _[w], C = s[E] || Y(), (g = i(C, t)) === null && (g = C[t]), !(M(g) || Ne(g) || We(g))); w++)
    if (!xs(E, _)) {
      const T = Gn(
        e,
        // eslint-disable-line @typescript-eslint/no-explicit-any
        t,
        E,
        l,
        P
      );
      T !== t && (g = T);
    }
  return [g, E, C];
}
function Er(e, t, n, a, r, l) {
  const { messageCompiler: s, warnHtmlMessage: o } = e;
  if (We(a)) {
    const h = a;
    return h.locale = h.locale || n, h.key = h.key || t, h;
  }
  if (s == null) {
    const h = () => a;
    return h.locale = n, h.key = t, h;
  }
  const i = s(a, Xs(e, n, r, a, o, l));
  return i.locale = n, i.key = t, i.source = a, i;
}
function Zs(e, t, n) {
  return t(n);
}
function Tn(...e) {
  const [t, n, a] = e, r = Y();
  if (!M(t) && !oe(t) && !We(t) && !Ne(t))
    throw Fe(Ae.INVALID_ARGUMENT);
  const l = oe(t) ? String(t) : (We(t), t);
  return oe(n) ? r.plural = n : M(n) ? r.default = n : H(n) && !sn(n) ? r.named = n : se(n) && (r.list = n), oe(a) ? r.plural = a : M(a) ? r.default = a : H(a) && fe(r, a), [l, r];
}
function Xs(e, t, n, a, r, l) {
  return {
    locale: t,
    key: n,
    warnHtmlMessage: r,
    onError: (s) => {
      throw l && l(s), s;
    },
    onCacheKey: (s) => Pl(t, n, s)
  };
}
function Js(e, t, n, a) {
  const { modifiers: r, pluralRules: l, messageResolver: s, fallbackLocale: o, fallbackWarn: i, missingWarn: h, fallbackContext: _ } = e, E = {
    locale: t,
    modifiers: r,
    pluralRules: l,
    messages: (g, P) => {
      let w = s(n, g);
      if (w == null && (_ || P)) {
        const [, , T] = Lr(
          _ || e,
          // NOTE: if has fallbackContext, fallback to root, else if use linked, fallback to local context
          g,
          t,
          o,
          i,
          h
        );
        w = s(T, g);
      }
      if (M(w) || Ne(w)) {
        let T = !1;
        const v = Er(e, g, t, w, g, () => {
          T = !0;
        });
        return T ? La : v;
      } else return We(w) ? w : La;
    }
  };
  return e.processor && (E.processor = e.processor), a.list && (E.list = a.list), a.named && (E.named = a.named), oe(a.plural) && (E.pluralIndex = a.plural), E;
}
is();
/*!
  * vue-i18n v11.2.2
  * (c) 2025 kazuya kawaguchi
  * Released under the MIT License.
  */
const qs = "11.2.2";
function Qs() {
  typeof __VUE_I18N_FULL_INSTALL__ != "boolean" && (Vt().__VUE_I18N_FULL_INSTALL__ = !0), typeof __VUE_I18N_LEGACY_API__ != "boolean" && (Vt().__VUE_I18N_LEGACY_API__ = !0), typeof __INTLIFY_DROP_MESSAGE_COMPILER__ != "boolean" && (Vt().__INTLIFY_DROP_MESSAGE_COMPILER__ = !1);
}
const bt = {
  // composer module errors
  UNEXPECTED_RETURN_TYPE: _s,
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
function Ft(e, ...t) {
  return on(e, null, void 0);
}
const In = /* @__PURE__ */ ut("__translateVNode"), Nn = /* @__PURE__ */ ut("__datetimeParts"), Pn = /* @__PURE__ */ ut("__numberParts"), eo = ut("__setPluralRules"), Tr = /* @__PURE__ */ ut("__injectWithOption"), On = /* @__PURE__ */ ut("__dispose");
function Wt(e) {
  if (!G(e) || Ne(e))
    return e;
  for (const t in e)
    if (Le(e, t))
      if (!t.includes("."))
        G(e[t]) && Wt(e[t]);
      else {
        const n = t.split("."), a = n.length - 1;
        let r = e, l = !1;
        for (let s = 0; s < a; s++) {
          if (n[s] === "__proto__")
            throw new Error(`unsafe key: ${n[s]}`);
          if (n[s] in r || (r[n[s]] = Y()), !G(r[n[s]])) {
            l = !0;
            break;
          }
          r = r[n[s]];
        }
        if (l || (Ne(r) ? wr.includes(n[a]) || delete e[t] : (r[n[a]] = e[t], delete e[t])), !Ne(r)) {
          const s = r[n[a]];
          G(s) && Wt(s);
        }
      }
  return e;
}
function Ir(e, t) {
  const { messages: n, __i18n: a, messageResolver: r, flatJson: l } = t, s = H(n) ? n : se(a) ? Y() : { [e]: Y() };
  if (se(a) && a.forEach((o) => {
    if ("locale" in o && "resource" in o) {
      const { locale: i, resource: h } = o;
      i ? (s[i] = s[i] || Y(), Ht(h, s[i])) : Ht(h, s);
    } else
      M(o) && Ht(JSON.parse(o), s);
  }), r == null && l)
    for (const o in s)
      Le(s, o) && Wt(s[o]);
  return s;
}
function to(e) {
  return e.type;
}
function no(e, t, n) {
  let a = G(t.messages) ? t.messages : Y();
  "__i18nGlobal" in n && (a = Ir(e.locale.value, {
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
function Ta(e) {
  return L(fl, null, e, 0);
}
function Nr() {
  return "currentInstance" in hn ? hn["currentInstance"] : hn.getCurrentInstance();
}
const Ia = () => [], ao = () => !1;
let Na = 0;
function Pa(e) {
  return (t, n, a, r) => e(n, a, Nr() || void 0, r);
}
function ro(e = {}) {
  const { __root: t, __injectWithOption: n } = e, a = t === void 0, r = e.flatJson, l = la ? U : dl;
  let s = le(e.inheritLocale) ? e.inheritLocale : !0;
  const o = l(
    // prettier-ignore
    t && s ? t.locale.value : M(e.locale) ? e.locale : en
  ), i = l(
    // prettier-ignore
    t && s ? t.fallbackLocale.value : M(e.fallbackLocale) || se(e.fallbackLocale) || H(e.fallbackLocale) || e.fallbackLocale === !1 ? e.fallbackLocale : o.value
  ), h = l(Ir(o.value, e)), _ = l(H(e.datetimeFormats) ? e.datetimeFormats : { [o.value]: {} }), C = l(H(e.numberFormats) ? e.numberFormats : { [o.value]: {} });
  let E = t ? t.missingWarn : le(e.missingWarn) || Qt(e.missingWarn) ? e.missingWarn : !0, g = t ? t.fallbackWarn : le(e.fallbackWarn) || Qt(e.fallbackWarn) ? e.fallbackWarn : !0, P = t ? t.fallbackRoot : le(e.fallbackRoot) ? e.fallbackRoot : !0, w = !!e.fallbackFormat, T = te(e.missing) ? e.missing : null, f = te(e.missing) ? Pa(e.missing) : null, v = te(e.postTranslation) ? e.postTranslation : null, y = t ? t.warnHtmlMessage : le(e.warnHtmlMessage) ? e.warnHtmlMessage : !0, k = !!e.escapeParameter;
  const O = t ? t.modifiers : H(e.modifiers) ? e.modifiers : {};
  let A = e.pluralRules || t && t.pluralRules, b;
  b = (() => {
    a && va(null);
    const p = {
      version: qs,
      locale: o.value,
      fallbackLocale: i.value,
      messages: h.value,
      modifiers: O,
      pluralRules: A,
      missing: f === null ? void 0 : f,
      missingWarn: E,
      fallbackWarn: g,
      fallbackFormat: w,
      unresolving: !0,
      postTranslation: v === null ? void 0 : v,
      warnHtmlMessage: y,
      escapeParameter: k,
      messageResolver: e.messageResolver,
      messageCompiler: e.messageCompiler,
      __meta: { framework: "vue" }
    };
    p.datetimeFormats = _.value, p.numberFormats = C.value, p.__datetimeFormatters = H(b) ? b.__datetimeFormatters : void 0, p.__numberFormatters = H(b) ? b.__numberFormatters : void 0;
    const N = $s(p);
    return a && va(N), N;
  })(), Tt(b, o.value, i.value);
  function X() {
    return [
      o.value,
      i.value,
      h.value,
      _.value,
      C.value
    ];
  }
  const ie = D({
    get: () => o.value,
    set: (p) => {
      b.locale = p, o.value = p;
    }
  }), ce = D({
    get: () => i.value,
    set: (p) => {
      b.fallbackLocale = p, i.value = p, Tt(b, o.value, p);
    }
  }), Q = D(() => h.value), Xe = /* @__PURE__ */ D(() => _.value), Je = /* @__PURE__ */ D(() => C.value);
  function qe() {
    return te(v) ? v : null;
  }
  function ye(p) {
    v = p, b.postTranslation = p;
  }
  function Qe() {
    return T;
  }
  function et(p) {
    p !== null && (f = Pa(p)), T = p, b.missing = f;
  }
  const we = (p, N, B, ee, R, ue) => {
    X();
    let He;
    try {
      a || (b.fallbackContext = t ? Rs() : void 0), He = p(b);
    } finally {
      a || (b.fallbackContext = void 0);
    }
    if (B !== "translate exists" && // for not `te` (e.g `t`)
    oe(He) && He === cn || B === "translate exists" && !He) {
      const [ul, hf] = N();
      return t && P ? ee(t) : R(ul);
    } else {
      if (ue(He))
        return He;
      throw Ft(bt.UNEXPECTED_RETURN_TYPE);
    }
  };
  function Me(...p) {
    return we((N) => Reflect.apply(Ea, null, [N, ...p]), () => Tn(...p), "translate", (N) => Reflect.apply(N.t, N, [...p]), (N) => N, (N) => M(N));
  }
  function Re(...p) {
    const [N, B, ee] = p;
    if (ee && !G(ee))
      throw Ft(bt.INVALID_ARGUMENT);
    return Me(N, B, fe({ resolvedMessage: !0 }, ee || {}));
  }
  function $e(...p) {
    return we((N) => Reflect.apply(ba, null, [N, ...p]), () => Ln(...p), "datetime format", (N) => Reflect.apply(N.d, N, [...p]), () => ga, (N) => M(N) || se(N));
  }
  function De(...p) {
    return we((N) => Reflect.apply(ka, null, [N, ...p]), () => En(...p), "number format", (N) => Reflect.apply(N.n, N, [...p]), () => ga, (N) => M(N) || se(N));
  }
  function xe(p) {
    return p.map((N) => M(N) || oe(N) || le(N) ? Ta(String(N)) : N);
  }
  const tt = {
    normalize: xe,
    interpolate: (p) => p,
    type: "vnode"
  };
  function nt(...p) {
    return we((N) => {
      let B;
      const ee = N;
      try {
        ee.processor = tt, B = Reflect.apply(Ea, null, [ee, ...p]);
      } finally {
        ee.processor = null;
      }
      return B;
    }, () => Tn(...p), "translate", (N) => N[In](...p), (N) => [Ta(N)], (N) => se(N));
  }
  function je(...p) {
    return we((N) => Reflect.apply(ka, null, [N, ...p]), () => En(...p), "number format", (N) => N[Pn](...p), Ia, (N) => M(N) || se(N));
  }
  function at(...p) {
    return we((N) => Reflect.apply(ba, null, [N, ...p]), () => Ln(...p), "datetime format", (N) => N[Nn](...p), Ia, (N) => M(N) || se(N));
  }
  function ze(p) {
    A = p, b.pluralRules = A;
  }
  function x(p, N) {
    return we(() => {
      if (!p)
        return !1;
      const B = M(N) ? N : o.value, ee = ge(B), R = b.messageResolver(ee, p);
      return Ne(R) || We(R) || M(R);
    }, () => [p], "translate exists", (B) => Reflect.apply(B.te, B, [p, N]), ao, (B) => le(B));
  }
  function V(p) {
    let N = null;
    const B = vr(b, i.value, o.value);
    for (let ee = 0; ee < B.length; ee++) {
      const R = h.value[B[ee]] || {}, ue = b.messageResolver(R, p);
      if (ue != null) {
        N = ue;
        break;
      }
    }
    return N;
  }
  function re(p) {
    const N = V(p);
    return N ?? (t ? t.tm(p) || {} : {});
  }
  function ge(p) {
    return h.value[p] || {};
  }
  function Ue(p, N) {
    if (r) {
      const B = { [p]: N };
      for (const ee in B)
        Le(B, ee) && Wt(B[ee]);
      N = B[p];
    }
    h.value[p] = N, b.messages = h.value;
  }
  function Ve(p, N) {
    h.value[p] = h.value[p] || {};
    const B = { [p]: N };
    if (r)
      for (const ee in B)
        Le(B, ee) && Wt(B[ee]);
    N = B[p], Ht(N, h.value[p]), b.messages = h.value;
  }
  function rt(p) {
    return _.value[p] || {};
  }
  function c(p, N) {
    _.value[p] = N, b.datetimeFormats = _.value, ya(b, p, N);
  }
  function d(p, N) {
    _.value[p] = fe(_.value[p] || {}, N), b.datetimeFormats = _.value, ya(b, p, N);
  }
  function S(p) {
    return C.value[p] || {};
  }
  function F(p, N) {
    C.value[p] = N, b.numberFormats = C.value, Ca(b, p, N);
  }
  function J(p, N) {
    C.value[p] = fe(C.value[p] || {}, N), b.numberFormats = C.value, Ca(b, p, N);
  }
  Na++, t && la && (gt(t.locale, (p) => {
    s && (o.value = p, b.locale = p, Tt(b, o.value, i.value));
  }), gt(t.fallbackLocale, (p) => {
    s && (i.value = p, b.fallbackLocale = p, Tt(b, o.value, i.value));
  }));
  const j = {
    id: Na,
    locale: ie,
    fallbackLocale: ce,
    get inheritLocale() {
      return s;
    },
    set inheritLocale(p) {
      s = p, p && t && (o.value = t.locale.value, i.value = t.fallbackLocale.value, Tt(b, o.value, i.value));
    },
    get availableLocales() {
      return Object.keys(h.value).sort();
    },
    messages: Q,
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
    set missingWarn(p) {
      E = p, b.missingWarn = E;
    },
    get fallbackWarn() {
      return g;
    },
    set fallbackWarn(p) {
      g = p, b.fallbackWarn = g;
    },
    get fallbackRoot() {
      return P;
    },
    set fallbackRoot(p) {
      P = p;
    },
    get fallbackFormat() {
      return w;
    },
    set fallbackFormat(p) {
      w = p, b.fallbackFormat = w;
    },
    get warnHtmlMessage() {
      return y;
    },
    set warnHtmlMessage(p) {
      y = p, b.warnHtmlMessage = p;
    },
    get escapeParameter() {
      return k;
    },
    set escapeParameter(p) {
      k = p, b.escapeParameter = p;
    },
    t: Me,
    getLocaleMessage: ge,
    setLocaleMessage: Ue,
    mergeLocaleMessage: Ve,
    getPostTranslationHandler: qe,
    setPostTranslationHandler: ye,
    getMissingHandler: Qe,
    setMissingHandler: et,
    [eo]: ze
  };
  return j.datetimeFormats = Xe, j.numberFormats = Je, j.rt = Re, j.te = x, j.tm = re, j.d = $e, j.n = De, j.getDateTimeFormat = rt, j.setDateTimeFormat = c, j.mergeDateTimeFormat = d, j.getNumberFormat = S, j.setNumberFormat = F, j.mergeNumberFormat = J, j[Tr] = n, j[In] = nt, j[Nn] = at, j[Pn] = je, j;
}
const Kn = {
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
function lo({ slots: e }, t) {
  return t.length === 1 && t[0] === "default" ? (e.default ? e.default() : []).reduce((a, r) => [
    ...a,
    // prettier-ignore
    ...r.type === Be ? r.children : [r]
  ], []) : t.reduce((n, a) => {
    const r = e[a];
    return r && (n[a] = r()), n;
  }, Y());
}
function Pr() {
  return Be;
}
fe({
  keypath: {
    type: String,
    required: !0
  },
  plural: {
    type: [Number, String],
    validator: (e) => oe(e) || !isNaN(e)
  }
}, Kn);
function so(e) {
  return se(e) && !M(e[0]);
}
function Or(e, t, n, a) {
  const { slots: r, attrs: l } = t;
  return () => {
    const s = { part: !0 };
    let o = Y();
    e.locale && (s.locale = e.locale), M(e.format) ? s.key = e.format : G(e.format) && (M(e.format.key) && (s.key = e.format.key), o = Object.keys(e.format).reduce((E, g) => n.includes(g) ? fe(Y(), E, { [g]: e.format[g] }) : E, Y()));
    const i = a(e.value, s, o);
    let h = [s.key];
    se(i) ? h = i.map((E, g) => {
      const P = r[E.type], w = P ? P({ [E.type]: E.value, index: g, parts: i }) : [E.value];
      return so(w) && (w[0].key = `${E.type}-${g}`), w;
    }) : M(i) && (h = [i]);
    const _ = fe(Y(), l), C = M(e.tag) || G(e.tag) ? e.tag : Pr();
    return qa(C, _, h);
  };
}
fe({
  value: {
    type: Number,
    required: !0
  },
  format: {
    type: [String, Object]
  }
}, Kn);
const oo = /* @__PURE__ */ ut("global-vue-i18n");
function Pe(e = {}) {
  const t = Nr();
  if (t == null)
    throw Ft(bt.MUST_BE_CALL_SETUP_TOP);
  if (!t.isCE && t.appContext.app != null && !t.appContext.app.__VUE_I18N_SYMBOL__)
    throw Ft(bt.NOT_INSTALLED);
  const n = io(t), a = uo(n), r = to(t), l = co(e, r);
  if (l === "global")
    return no(a, e, r), a;
  if (l === "parent") {
    let i = fo(n, t, e.__useComponent);
    return i == null && (i = a), i;
  }
  const s = n;
  let o = s.__getInstance(t);
  if (o == null) {
    const i = fe({}, e);
    "__i18n" in r && (i.__i18n = r.__i18n), a && (i.__root = a), o = ro(i), s.__composerExtend && (o[On] = s.__composerExtend(o)), po(s, t, o), s.__setInstance(t, o);
  }
  return o;
}
function io(e) {
  const t = Ke(e.isCE ? oo : e.appContext.app.__VUE_I18N_SYMBOL__);
  if (!t)
    throw Ft(e.isCE ? bt.NOT_INSTALLED_WITH_PROVIDE : bt.UNEXPECTED_ERROR);
  return t;
}
function co(e, t) {
  return sn(e) ? "__i18n" in t ? "local" : "global" : e.useScope ? e.useScope : "local";
}
function uo(e) {
  return e.mode === "composition" ? e.global : e.global.__composer;
}
function fo(e, t, n = !1) {
  let a = null;
  const r = t.root;
  let l = ho(t, n);
  for (; l != null; ) {
    const s = e;
    if (e.mode === "composition")
      a = s.__getInstance(l);
    else if (__VUE_I18N_LEGACY_API__) {
      const o = s.__getInstance(l);
      o != null && (a = o.__composer, n && a && !a[Tr] && (a = null));
    }
    if (a != null || r === l)
      break;
    l = l.parent;
  }
  return a;
}
function ho(e, t = !1) {
  return e == null ? null : t && e.vnode.ctx || e.parent;
}
function po(e, t, n) {
  St(() => {
  }, t), Dn(() => {
    const a = n;
    e.__deleteInstance(t);
    const r = a[On];
    r && (r(), delete a[On]);
  }, t);
}
fe({
  value: {
    type: [Number, Date],
    required: !0
  },
  format: {
    type: [String, Object]
  }
}, Kn);
Qs();
Fs(vs);
Ws(Ps);
Ms(vr);
const Ar = Symbol(), Gt = "el", mo = "is-", lt = (e, t, n, a, r) => {
  let l = `${e}-${t}`;
  return n && (l += `-${n}`), a && (l += `__${a}`), r && (l += `--${r}`), l;
}, Fr = Symbol("namespaceContextKey"), go = (e) => {
  const t = e || (wt() ? Ke(Fr, U(Gt)) : U(Gt));
  return D(() => u(t) || Gt);
}, Bn = (e, t) => {
  const n = go(t);
  return {
    namespace: n,
    b: (w = "") => lt(n.value, e, w, "", ""),
    e: (w) => w ? lt(n.value, e, "", w, "") : "",
    m: (w) => w ? lt(n.value, e, "", "", w) : "",
    be: (w, T) => w && T ? lt(n.value, e, w, T, "") : "",
    em: (w, T) => w && T ? lt(n.value, e, "", w, T) : "",
    bm: (w, T) => w && T ? lt(n.value, e, w, "", T) : "",
    bem: (w, T, f) => w && T && f ? lt(n.value, e, w, T, f) : "",
    is: (w, ...T) => {
      const f = T.length >= 1 ? T[0] : !0;
      return w && f ? `${mo}${w}` : "";
    },
    cssVar: (w) => {
      const T = {};
      for (const f in w)
        w[f] && (T[`--${n.value}-${f}`] = w[f]);
      return T;
    },
    cssVarName: (w) => `--${n.value}-${w}`,
    cssVarBlock: (w) => {
      const T = {};
      for (const f in w)
        w[f] && (T[`--${n.value}-${e}-${f}`] = w[f]);
      return T;
    },
    cssVarBlockName: (w) => `--${n.value}-${e}-${w}`
  };
};
/**
* @vue/shared v3.5.13
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/
const wo = Object.prototype.hasOwnProperty, Oa = (e, t) => wo.call(e, t), Mt = (e) => typeof e == "function", ot = (e) => typeof e == "string", Wr = (e) => e !== null && typeof e == "object";
var vo = typeof global == "object" && global && global.Object === Object && global, _o = typeof self == "object" && self && self.Object === Object && self, Yn = vo || _o || Function("return this")(), yt = Yn.Symbol, Mr = Object.prototype, bo = Mr.hasOwnProperty, yo = Mr.toString, It = yt ? yt.toStringTag : void 0;
function ko(e) {
  var t = bo.call(e, It), n = e[It];
  try {
    e[It] = void 0;
    var a = !0;
  } catch {
  }
  var r = yo.call(e);
  return a && (t ? e[It] = n : delete e[It]), r;
}
var Co = Object.prototype, So = Co.toString;
function Lo(e) {
  return So.call(e);
}
var Eo = "[object Null]", To = "[object Undefined]", Aa = yt ? yt.toStringTag : void 0;
function Rr(e) {
  return e == null ? e === void 0 ? To : Eo : Aa && Aa in Object(e) ? ko(e) : Lo(e);
}
function Io(e) {
  return e != null && typeof e == "object";
}
var No = "[object Symbol]";
function Zn(e) {
  return typeof e == "symbol" || Io(e) && Rr(e) == No;
}
function Po(e, t) {
  for (var n = -1, a = e == null ? 0 : e.length, r = Array(a); ++n < a; )
    r[n] = t(e[n], n, e);
  return r;
}
var Xn = Array.isArray, Fa = yt ? yt.prototype : void 0, Wa = Fa ? Fa.toString : void 0;
function $r(e) {
  if (typeof e == "string")
    return e;
  if (Xn(e))
    return Po(e, $r) + "";
  if (Zn(e))
    return Wa ? Wa.call(e) : "";
  var t = e + "";
  return t == "0" && 1 / e == -1 / 0 ? "-0" : t;
}
function Dr(e) {
  var t = typeof e;
  return e != null && (t == "object" || t == "function");
}
var Oo = "[object AsyncFunction]", Ao = "[object Function]", Fo = "[object GeneratorFunction]", Wo = "[object Proxy]";
function Mo(e) {
  if (!Dr(e))
    return !1;
  var t = Rr(e);
  return t == Ao || t == Fo || t == Oo || t == Wo;
}
var _n = Yn["__core-js_shared__"], Ma = function() {
  var e = /[^.]+$/.exec(_n && _n.keys && _n.keys.IE_PROTO || "");
  return e ? "Symbol(src)_1." + e : "";
}();
function Ro(e) {
  return !!Ma && Ma in e;
}
var $o = Function.prototype, Do = $o.toString;
function xo(e) {
  if (e != null) {
    try {
      return Do.call(e);
    } catch {
    }
    try {
      return e + "";
    } catch {
    }
  }
  return "";
}
var jo = /[\\^$.*+?()[\]{}|]/g, zo = /^\[object .+?Constructor\]$/, Uo = Function.prototype, Vo = Object.prototype, Ho = Uo.toString, Go = Vo.hasOwnProperty, Ko = RegExp(
  "^" + Ho.call(Go).replace(jo, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$"
);
function Bo(e) {
  if (!Dr(e) || Ro(e))
    return !1;
  var t = Mo(e) ? Ko : zo;
  return t.test(xo(e));
}
function Yo(e, t) {
  return e?.[t];
}
function xr(e, t) {
  var n = Yo(e, t);
  return Bo(n) ? n : void 0;
}
function Zo(e, t) {
  return e === t || e !== e && t !== t;
}
var Xo = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/, Jo = /^\w*$/;
function qo(e, t) {
  if (Xn(e))
    return !1;
  var n = typeof e;
  return n == "number" || n == "symbol" || n == "boolean" || e == null || Zn(e) ? !0 : Jo.test(e) || !Xo.test(e) || t != null && e in Object(t);
}
var Rt = xr(Object, "create");
function Qo() {
  this.__data__ = Rt ? Rt(null) : {}, this.size = 0;
}
function ei(e) {
  var t = this.has(e) && delete this.__data__[e];
  return this.size -= t ? 1 : 0, t;
}
var ti = "__lodash_hash_undefined__", ni = Object.prototype, ai = ni.hasOwnProperty;
function ri(e) {
  var t = this.__data__;
  if (Rt) {
    var n = t[e];
    return n === ti ? void 0 : n;
  }
  return ai.call(t, e) ? t[e] : void 0;
}
var li = Object.prototype, si = li.hasOwnProperty;
function oi(e) {
  var t = this.__data__;
  return Rt ? t[e] !== void 0 : si.call(t, e);
}
var ii = "__lodash_hash_undefined__";
function ci(e, t) {
  var n = this.__data__;
  return this.size += this.has(e) ? 0 : 1, n[e] = Rt && t === void 0 ? ii : t, this;
}
function it(e) {
  var t = -1, n = e == null ? 0 : e.length;
  for (this.clear(); ++t < n; ) {
    var a = e[t];
    this.set(a[0], a[1]);
  }
}
it.prototype.clear = Qo;
it.prototype.delete = ei;
it.prototype.get = ri;
it.prototype.has = oi;
it.prototype.set = ci;
function ui() {
  this.__data__ = [], this.size = 0;
}
function un(e, t) {
  for (var n = e.length; n--; )
    if (Zo(e[n][0], t))
      return n;
  return -1;
}
var di = Array.prototype, fi = di.splice;
function hi(e) {
  var t = this.__data__, n = un(t, e);
  if (n < 0)
    return !1;
  var a = t.length - 1;
  return n == a ? t.pop() : fi.call(t, n, 1), --this.size, !0;
}
function pi(e) {
  var t = this.__data__, n = un(t, e);
  return n < 0 ? void 0 : t[n][1];
}
function mi(e) {
  return un(this.__data__, e) > -1;
}
function gi(e, t) {
  var n = this.__data__, a = un(n, e);
  return a < 0 ? (++this.size, n.push([e, t])) : n[a][1] = t, this;
}
function Lt(e) {
  var t = -1, n = e == null ? 0 : e.length;
  for (this.clear(); ++t < n; ) {
    var a = e[t];
    this.set(a[0], a[1]);
  }
}
Lt.prototype.clear = ui;
Lt.prototype.delete = hi;
Lt.prototype.get = pi;
Lt.prototype.has = mi;
Lt.prototype.set = gi;
var wi = xr(Yn, "Map");
function vi() {
  this.size = 0, this.__data__ = {
    hash: new it(),
    map: new (wi || Lt)(),
    string: new it()
  };
}
function _i(e) {
  var t = typeof e;
  return t == "string" || t == "number" || t == "symbol" || t == "boolean" ? e !== "__proto__" : e === null;
}
function dn(e, t) {
  var n = e.__data__;
  return _i(t) ? n[typeof t == "string" ? "string" : "hash"] : n.map;
}
function bi(e) {
  var t = dn(this, e).delete(e);
  return this.size -= t ? 1 : 0, t;
}
function yi(e) {
  return dn(this, e).get(e);
}
function ki(e) {
  return dn(this, e).has(e);
}
function Ci(e, t) {
  var n = dn(this, e), a = n.size;
  return n.set(e, t), this.size += n.size == a ? 0 : 1, this;
}
function dt(e) {
  var t = -1, n = e == null ? 0 : e.length;
  for (this.clear(); ++t < n; ) {
    var a = e[t];
    this.set(a[0], a[1]);
  }
}
dt.prototype.clear = vi;
dt.prototype.delete = bi;
dt.prototype.get = yi;
dt.prototype.has = ki;
dt.prototype.set = Ci;
var Si = "Expected a function";
function Jn(e, t) {
  if (typeof e != "function" || t != null && typeof t != "function")
    throw new TypeError(Si);
  var n = function() {
    var a = arguments, r = t ? t.apply(this, a) : a[0], l = n.cache;
    if (l.has(r))
      return l.get(r);
    var s = e.apply(this, a);
    return n.cache = l.set(r, s) || l, s;
  };
  return n.cache = new (Jn.Cache || dt)(), n;
}
Jn.Cache = dt;
var Li = 500;
function Ei(e) {
  var t = Jn(e, function(a) {
    return n.size === Li && n.clear(), a;
  }), n = t.cache;
  return t;
}
var Ti = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g, Ii = /\\(\\)?/g, Ni = Ei(function(e) {
  var t = [];
  return e.charCodeAt(0) === 46 && t.push(""), e.replace(Ti, function(n, a, r, l) {
    t.push(r ? l.replace(Ii, "$1") : a || n);
  }), t;
});
function Pi(e) {
  return e == null ? "" : $r(e);
}
function Oi(e, t) {
  return Xn(e) ? e : qo(e, t) ? [e] : Ni(Pi(e));
}
function Ai(e) {
  if (typeof e == "string" || Zn(e))
    return e;
  var t = e + "";
  return t == "0" && 1 / e == -1 / 0 ? "-0" : t;
}
function Fi(e, t) {
  t = Oi(t, e);
  for (var n = 0, a = t.length; e != null && n < a; )
    e = e[Ai(t[n++])];
  return n && n == a ? e : void 0;
}
function Wi(e, t, n) {
  var a = e == null ? void 0 : Fi(e, t);
  return a === void 0 ? n : a;
}
function Mi(e) {
  for (var t = -1, n = e == null ? 0 : e.length, a = {}; ++t < n; ) {
    var r = e[t];
    a[r[0]] = r[1];
  }
  return a;
}
const jr = (e) => e === void 0, Ra = (e) => typeof e == "boolean", ct = (e) => typeof e == "number", An = (e) => typeof Element > "u" ? !1 : e instanceof Element, Ri = (e) => ot(e) ? !Number.isNaN(Number(e)) : !1;
var $a;
const ft = typeof window < "u", $i = (e) => typeof e == "string", Di = () => {
};
ft && (($a = window?.navigator) != null && $a.userAgent) && /iP(ad|hone|od)/.test(window.navigator.userAgent);
function qn(e) {
  return typeof e == "function" ? e() : u(e);
}
function xi(e) {
  return e;
}
function Qn(e) {
  return pl() ? (ml(e), !0) : !1;
}
function ji(e, t = !0) {
  wt() ? St(e) : t ? e() : Qa(e);
}
function zr(e, t, n = {}) {
  const {
    immediate: a = !0
  } = n, r = U(!1);
  let l = null;
  function s() {
    l && (clearTimeout(l), l = null);
  }
  function o() {
    r.value = !1, s();
  }
  function i(...h) {
    s(), r.value = !0, l = setTimeout(() => {
      r.value = !1, l = null, e(...h);
    }, qn(t));
  }
  return a && (r.value = !0, ft && i()), Qn(o), {
    isPending: hl(r),
    start: i,
    stop: o
  };
}
function Ur(e) {
  var t;
  const n = qn(e);
  return (t = n?.$el) != null ? t : n;
}
const Vr = ft ? window : void 0;
function Hr(...e) {
  let t, n, a, r;
  if ($i(e[0]) || Array.isArray(e[0]) ? ([n, a, r] = e, t = Vr) : [t, n, a, r] = e, !t)
    return Di;
  Array.isArray(n) || (n = [n]), Array.isArray(a) || (a = [a]);
  const l = [], s = () => {
    l.forEach((_) => _()), l.length = 0;
  }, o = (_, C, E, g) => (_.addEventListener(C, E, g), () => _.removeEventListener(C, E, g)), i = gt(() => [Ur(t), qn(r)], ([_, C]) => {
    s(), _ && l.push(...n.flatMap((E) => a.map((g) => o(_, E, g, C))));
  }, { immediate: !0, flush: "post" }), h = () => {
    i(), s();
  };
  return Qn(h), h;
}
function zi(e, t = !1) {
  const n = U(), a = () => n.value = !!e();
  return a(), ji(a, t), n;
}
const Da = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {}, xa = "__vueuse_ssr_handlers__";
Da[xa] = Da[xa] || {};
var ja = Object.getOwnPropertySymbols, Ui = Object.prototype.hasOwnProperty, Vi = Object.prototype.propertyIsEnumerable, Hi = (e, t) => {
  var n = {};
  for (var a in e)
    Ui.call(e, a) && t.indexOf(a) < 0 && (n[a] = e[a]);
  if (e != null && ja)
    for (var a of ja(e))
      t.indexOf(a) < 0 && Vi.call(e, a) && (n[a] = e[a]);
  return n;
};
function Gi(e, t, n = {}) {
  const a = n, { window: r = Vr } = a, l = Hi(a, ["window"]);
  let s;
  const o = zi(() => r && "ResizeObserver" in r), i = () => {
    s && (s.disconnect(), s = void 0);
  }, h = gt(() => Ur(e), (C) => {
    i(), o.value && r && C && (s = new ResizeObserver(t), s.observe(C, l));
  }, { immediate: !0, flush: "post" }), _ = () => {
    i(), h();
  };
  return Qn(_), {
    isSupported: o,
    stop: _
  };
}
var za;
(function(e) {
  e.UP = "UP", e.RIGHT = "RIGHT", e.DOWN = "DOWN", e.LEFT = "LEFT", e.NONE = "NONE";
})(za || (za = {}));
var Ki = Object.defineProperty, Ua = Object.getOwnPropertySymbols, Bi = Object.prototype.hasOwnProperty, Yi = Object.prototype.propertyIsEnumerable, Va = (e, t, n) => t in e ? Ki(e, t, { enumerable: !0, configurable: !0, writable: !0, value: n }) : e[t] = n, Zi = (e, t) => {
  for (var n in t || (t = {}))
    Bi.call(t, n) && Va(e, n, t[n]);
  if (Ua)
    for (var n of Ua(t))
      Yi.call(t, n) && Va(e, n, t[n]);
  return e;
};
const Xi = {
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
Zi({
  linear: xi
}, Xi);
const Ha = {
  current: 0
}, Ga = U(0), Gr = 2e3, Ka = Symbol("elZIndexContextKey"), Kr = Symbol("zIndexContextKey"), Ji = (e) => {
  const t = wt() ? Ke(Ka, Ha) : Ha, n = e || (wt() ? Ke(Kr, void 0) : void 0), a = D(() => {
    const s = u(n);
    return ct(s) ? s : Gr;
  }), r = D(() => a.value + Ga.value), l = () => (t.current++, Ga.value = t.current, r.value);
  return !ft && Ke(Ka), {
    initialZIndex: a,
    currentZIndex: r,
    nextZIndex: l
  };
};
var qi = {
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
const Qi = (e) => (t, n) => ec(t, n, u(e)), ec = (e, t, n) => Wi(n, e, e).replace(/\{(\w+)\}/g, (a, r) => {
  var l;
  return `${(l = t?.[r]) != null ? l : `{${r}}`}`;
}), tc = (e) => {
  const t = D(() => u(e).name), n = er(e) ? e : U(e);
  return {
    lang: t,
    locale: n,
    t: Qi(e)
  };
}, Br = Symbol("localeContextKey"), nc = (e) => {
  const t = e || Ke(Br, U());
  return tc(D(() => t.value || qi));
}, Yr = "__epPropKey", be = (e) => e, ac = (e) => Wr(e) && !!e[Yr], Zr = (e, t) => {
  if (!Wr(e) || ac(e))
    return e;
  const { values: n, required: a, default: r, type: l, validator: s } = e, i = {
    type: l,
    required: !!a,
    validator: n || s ? (h) => {
      let _ = !1, C = [];
      if (n && (C = Array.from(n), Oa(e, "default") && C.push(r), _ || (_ = C.includes(h))), s && (_ || (_ = s(h))), !_ && C.length > 0) {
        const E = [...new Set(C)].map((g) => JSON.stringify(g)).join(", ");
        gl(`Invalid prop: validation failed${t ? ` for prop "${t}"` : ""}. Expected one of [${E}], got value ${JSON.stringify(h)}.`);
      }
      return _;
    } : void 0,
    [Yr]: !0
  };
  return Oa(e, "default") && (i.default = r), i;
}, Et = (e) => Mi(Object.entries(e).map(([t, n]) => [
  t,
  Zr(n, t)
])), rc = ["", "default", "small", "large"], lc = Zr({
  type: String,
  values: rc,
  required: !1
}), sc = Symbol("size"), oc = Symbol("emptyValuesContextKey"), ic = Et({
  emptyValues: Array,
  valueOnClear: {
    type: [String, Number, Boolean, Function],
    default: void 0,
    validator: (e) => Mt(e) ? !e() : !e
  }
}), Ba = (e) => Object.keys(e), tn = U();
function Xr(e, t = void 0) {
  return wt() ? Ke(Ar, tn) : tn;
}
function Jr(e, t) {
  const n = Xr(), a = Bn(e, D(() => {
    var o;
    return ((o = n.value) == null ? void 0 : o.namespace) || Gt;
  })), r = nc(D(() => {
    var o;
    return (o = n.value) == null ? void 0 : o.locale;
  })), l = Ji(D(() => {
    var o;
    return ((o = n.value) == null ? void 0 : o.zIndex) || Gr;
  })), s = D(() => {
    var o;
    return u(t) || ((o = n.value) == null ? void 0 : o.size) || "";
  });
  return qr(D(() => u(n) || {})), {
    ns: a,
    locale: r,
    zIndex: l,
    size: s
  };
}
const qr = (e, t, n = !1) => {
  var a;
  const r = !!wt(), l = r ? Xr() : void 0, s = (a = void 0) != null ? a : r ? wl : void 0;
  if (!s)
    return;
  const o = D(() => {
    const i = u(e);
    return l?.value ? cc(l.value, i) : i;
  });
  return s(Ar, o), s(Br, D(() => o.value.locale)), s(Fr, D(() => o.value.namespace)), s(Kr, D(() => o.value.zIndex)), s(sc, {
    size: D(() => o.value.size || "")
  }), s(oc, D(() => ({
    emptyValues: o.value.emptyValues,
    valueOnClear: o.value.valueOnClear
  }))), (n || !tn.value) && (tn.value = o.value), o;
}, cc = (e, t) => {
  const n = [.../* @__PURE__ */ new Set([...Ba(e), ...Ba(t)])], a = {};
  for (const r of n)
    a[r] = t[r] !== void 0 ? t[r] : e[r];
  return a;
};
var fn = (e, t) => {
  const n = e.__vccOpts || e;
  for (const [a, r] of t)
    n[a] = r;
  return n;
};
function Fn(e, t = "px") {
  if (!e)
    return "";
  if (ct(e) || Ri(e))
    return `${e}${t}`;
  if (ot(e))
    return e;
}
const Qr = (e, t) => (e.install = (n) => {
  for (const a of [e, ...Object.values({})])
    n.component(a.name, a);
}, e), el = (e, t) => (e.install = (n) => {
  e._context = n._context, n.config.globalProperties[t] = e;
}, e), uc = Et({
  size: {
    type: be([Number, String])
  },
  color: {
    type: String
  }
}), dc = ae({
  name: "ElIcon",
  inheritAttrs: !1
}), fc = /* @__PURE__ */ ae({
  ...dc,
  props: uc,
  setup(e) {
    const t = e, n = Bn("icon"), a = D(() => {
      const { size: r, color: l } = t;
      return !r && !l ? {} : {
        fontSize: jr(r) ? void 0 : Fn(r),
        "--color": l
      };
    });
    return (r, l) => ($(), z("i", vl({
      class: u(n).b(),
      style: u(a)
    }, r.$attrs), [
      vt(r.$slots, "default")
    ], 16));
  }
});
var hc = /* @__PURE__ */ fn(fc, [["__file", "icon.vue"]]);
const nn = Qr(hc);
/*! Element Plus Icons Vue v2.3.1 */
var pc = /* @__PURE__ */ ae({
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
}), mc = pc, gc = /* @__PURE__ */ ae({
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
}), tl = gc, wc = /* @__PURE__ */ ae({
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
}), vc = wc, _c = /* @__PURE__ */ ae({
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
}), bc = _c, yc = /* @__PURE__ */ ae({
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
}), kc = yc;
const nl = be([
  String,
  Object,
  Function
]), Cc = {
  Close: tl
}, Sc = {
  Close: tl
}, an = {
  success: bc,
  warning: kc,
  error: mc,
  info: vc
}, Lc = (e) => e, Kt = {
  esc: "Escape",
  delete: "Delete",
  backspace: "Backspace"
}, Ec = Et({
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
}), Tc = ae({
  name: "ElBadge"
}), Ic = /* @__PURE__ */ ae({
  ...Tc,
  props: Ec,
  setup(e, { expose: t }) {
    const n = e, a = Bn("badge"), r = D(() => n.isDot ? "" : ct(n.value) && ct(n.max) ? n.max < n.value ? `${n.max}+` : `${n.value}` : `${n.value}`), l = D(() => {
      var s, o, i, h, _;
      return [
        {
          backgroundColor: n.color,
          marginRight: Fn(-((o = (s = n.offset) == null ? void 0 : s[0]) != null ? o : 0)),
          marginTop: Fn((h = (i = n.offset) == null ? void 0 : i[1]) != null ? h : 0)
        },
        (_ = n.badgeStyle) != null ? _ : {}
      ];
    });
    return t({
      content: r
    }), (s, o) => ($(), z("div", {
      class: ne(u(a).b())
    }, [
      vt(s.$slots, "default"),
      L(xn, {
        name: `${u(a).namespace.value}-zoom-in-center`,
        persisted: ""
      }, {
        default: st(() => [
          Bt(m("sup", {
            class: ne([
              u(a).e("content"),
              u(a).em("content", s.type),
              u(a).is("fixed", !!s.$slots.default),
              u(a).is("dot", s.isDot),
              u(a).is("hide-zero", !s.showZero && n.value === 0),
              s.badgeClass
            ]),
            style: Yt(u(l))
          }, [
            vt(s.$slots, "content", { value: u(r) }, () => [
              de(W(u(r)), 1)
            ])
          ], 6), [
            [Zt, !s.hidden && (u(r) || s.isDot || s.$slots.content)]
          ])
        ]),
        _: 3
      }, 8, ["name"])
    ], 2));
  }
});
var Nc = /* @__PURE__ */ fn(Ic, [["__file", "badge.vue"]]);
const Pc = Qr(Nc), Oc = Et({
  a11y: {
    type: Boolean,
    default: !0
  },
  locale: {
    type: be(Object)
  },
  size: lc,
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
  ...ic
}), Ce = {};
ae({
  name: "ElConfigProvider",
  props: Oc,
  setup(e, { slots: t }) {
    gt(() => e.message, (a) => {
      Object.assign(Ce, a ?? {});
    }, { immediate: !0, deep: !0 });
    const n = qr(e);
    return () => vt(t, "default", { config: n?.value });
  }
});
const al = ["success", "info", "warning", "error"], he = Lc({
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
  appendTo: ft ? document.body : void 0
}), Ac = Et({
  customClass: {
    type: String,
    default: he.customClass
  },
  center: {
    type: Boolean,
    default: he.center
  },
  dangerouslyUseHTMLString: {
    type: Boolean,
    default: he.dangerouslyUseHTMLString
  },
  duration: {
    type: Number,
    default: he.duration
  },
  icon: {
    type: nl,
    default: he.icon
  },
  id: {
    type: String,
    default: he.id
  },
  message: {
    type: be([
      String,
      Object,
      Function
    ]),
    default: he.message
  },
  onClose: {
    type: be(Function),
    default: he.onClose
  },
  showClose: {
    type: Boolean,
    default: he.showClose
  },
  type: {
    type: String,
    values: al,
    default: he.type
  },
  plain: {
    type: Boolean,
    default: he.plain
  },
  offset: {
    type: Number,
    default: he.offset
  },
  zIndex: {
    type: Number,
    default: he.zIndex
  },
  grouping: {
    type: Boolean,
    default: he.grouping
  },
  repeatNum: {
    type: Number,
    default: he.repeatNum
  }
}), Fc = {
  destroy: () => !0
}, Ee = _l([]), Wc = (e) => {
  const t = Ee.findIndex((r) => r.id === e), n = Ee[t];
  let a;
  return t > 0 && (a = Ee[t - 1]), { current: n, prev: a };
}, Mc = (e) => {
  const { prev: t } = Wc(e);
  return t ? t.vm.exposed.bottom.value : 0;
}, Rc = (e, t) => Ee.findIndex((a) => a.id === e) > 0 ? 16 : t, $c = ae({
  name: "ElMessage"
}), Dc = /* @__PURE__ */ ae({
  ...$c,
  props: Ac,
  emits: Fc,
  setup(e, { expose: t }) {
    const n = e, { Close: a } = Sc, { ns: r, zIndex: l } = Jr("message"), { currentZIndex: s, nextZIndex: o } = l, i = U(), h = U(!1), _ = U(0);
    let C;
    const E = D(() => n.type ? n.type === "error" ? "danger" : n.type : "info"), g = D(() => {
      const b = n.type;
      return { [r.bm("icon", b)]: b && an[b] };
    }), P = D(() => n.icon || an[n.type] || ""), w = D(() => Mc(n.id)), T = D(() => Rc(n.id, n.offset) + w.value), f = D(() => _.value + T.value), v = D(() => ({
      top: `${T.value}px`,
      zIndex: s.value
    }));
    function y() {
      n.duration !== 0 && ({ stop: C } = zr(() => {
        O();
      }, n.duration));
    }
    function k() {
      C?.();
    }
    function O() {
      h.value = !1;
    }
    function A({ code: b }) {
      b === Kt.esc && O();
    }
    return St(() => {
      y(), o(), h.value = !0;
    }), gt(() => n.repeatNum, () => {
      k(), y();
    }), Hr(document, "keydown", A), Gi(i, () => {
      _.value = i.value.getBoundingClientRect().height;
    }), t({
      visible: h,
      bottom: f,
      close: O
    }), (b, Z) => ($(), Se(xn, {
      name: u(r).b("fade"),
      onBeforeLeave: b.onClose,
      onAfterLeave: (X) => b.$emit("destroy"),
      persisted: ""
    }, {
      default: st(() => [
        Bt(m("div", {
          id: b.id,
          ref_key: "messageRef",
          ref: i,
          class: ne([
            u(r).b(),
            { [u(r).m(b.type)]: b.type },
            u(r).is("center", b.center),
            u(r).is("closable", b.showClose),
            u(r).is("plain", b.plain),
            b.customClass
          ]),
          style: Yt(u(v)),
          role: "alert",
          onMouseenter: k,
          onMouseleave: y
        }, [
          b.repeatNum > 1 ? ($(), Se(u(Pc), {
            key: 0,
            value: b.repeatNum,
            type: u(E),
            class: ne(u(r).e("badge"))
          }, null, 8, ["value", "type", "class"])) : _e("v-if", !0),
          u(P) ? ($(), Se(u(nn), {
            key: 1,
            class: ne([u(r).e("icon"), u(g)])
          }, {
            default: st(() => [
              ($(), Se(tr(u(P))))
            ]),
            _: 1
          }, 8, ["class"])) : _e("v-if", !0),
          vt(b.$slots, "default", {}, () => [
            b.dangerouslyUseHTMLString ? ($(), z(Be, { key: 1 }, [
              _e(" Caution here, message could've been compromised, never use user's input as message "),
              m("p", {
                class: ne(u(r).e("content")),
                innerHTML: b.message
              }, null, 10, ["innerHTML"])
            ], 2112)) : ($(), z("p", {
              key: 0,
              class: ne(u(r).e("content"))
            }, W(b.message), 3))
          ]),
          b.showClose ? ($(), Se(u(nn), {
            key: 2,
            class: ne(u(r).e("closeBtn")),
            onClick: $t(O, ["stop"])
          }, {
            default: st(() => [
              L(u(a))
            ]),
            _: 1
          }, 8, ["class", "onClick"])) : _e("v-if", !0)
        ], 46, ["id"]), [
          [Zt, h.value]
        ])
      ]),
      _: 3
    }, 8, ["name", "onBeforeLeave", "onAfterLeave"]));
  }
});
var xc = /* @__PURE__ */ fn(Dc, [["__file", "message.vue"]]);
let jc = 1;
const rl = (e) => {
  const t = !e || ot(e) || Ot(e) || Mt(e) ? { message: e } : e, n = {
    ...he,
    ...t
  };
  if (!n.appendTo)
    n.appendTo = document.body;
  else if (ot(n.appendTo)) {
    let a = document.querySelector(n.appendTo);
    An(a) || (a = document.body), n.appendTo = a;
  }
  return Ra(Ce.grouping) && !n.grouping && (n.grouping = Ce.grouping), ct(Ce.duration) && n.duration === 3e3 && (n.duration = Ce.duration), ct(Ce.offset) && n.offset === 16 && (n.offset = Ce.offset), Ra(Ce.showClose) && !n.showClose && (n.showClose = Ce.showClose), n;
}, zc = (e) => {
  const t = Ee.indexOf(e);
  if (t === -1)
    return;
  Ee.splice(t, 1);
  const { handler: n } = e;
  n.close();
}, Uc = ({ appendTo: e, ...t }, n) => {
  const a = `message_${jc++}`, r = t.onClose, l = document.createElement("div"), s = {
    ...t,
    id: a,
    onClose: () => {
      r?.(), zc(_);
    },
    onDestroy: () => {
      Xt(null, l);
    }
  }, o = L(xc, s, Mt(s.message) || Ot(s.message) ? {
    default: Mt(s.message) ? s.message : () => s.message
  } : null);
  o.appContext = n || kt._context, Xt(o, l), e.appendChild(l.firstElementChild);
  const i = o.component, _ = {
    id: a,
    vnode: o,
    vm: i,
    handler: {
      close: () => {
        i.exposed.visible.value = !1;
      }
    },
    props: o.component.props
  };
  return _;
}, kt = (e = {}, t) => {
  if (!ft)
    return { close: () => {
    } };
  const n = rl(e);
  if (n.grouping && Ee.length) {
    const r = Ee.find(({ vnode: l }) => {
      var s;
      return ((s = l.props) == null ? void 0 : s.message) === n.message;
    });
    if (r)
      return r.props.repeatNum += 1, r.props.type = n.type, r.handler;
  }
  if (ct(Ce.max) && Ee.length >= Ce.max)
    return { close: () => {
    } };
  const a = Uc(n, t);
  return Ee.push(a), a.handler;
};
al.forEach((e) => {
  kt[e] = (t = {}, n) => {
    const a = rl(t);
    return kt({ ...a, type: e }, n);
  };
});
function Vc(e) {
  for (const t of Ee)
    (!e || e === t.props.type) && t.handler.close();
}
kt.closeAll = Vc;
kt._context = null;
const Hc = el(kt, "$message"), ll = [
  "success",
  "info",
  "warning",
  "error"
], Gc = Et({
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
    type: nl
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
    values: [...ll, ""],
    default: ""
  },
  zIndex: Number
}), Kc = {
  destroy: () => !0
}, Bc = ae({
  name: "ElNotification"
}), Yc = /* @__PURE__ */ ae({
  ...Bc,
  props: Gc,
  emits: Kc,
  setup(e, { expose: t }) {
    const n = e, { ns: a, zIndex: r } = Jr("notification"), { nextZIndex: l, currentZIndex: s } = r, { Close: o } = Cc, i = U(!1);
    let h;
    const _ = D(() => {
      const y = n.type;
      return y && an[n.type] ? a.m(y) : "";
    }), C = D(() => n.type && an[n.type] || n.icon), E = D(() => n.position.endsWith("right") ? "right" : "left"), g = D(() => n.position.startsWith("top") ? "top" : "bottom"), P = D(() => {
      var y;
      return {
        [g.value]: `${n.offset}px`,
        zIndex: (y = n.zIndex) != null ? y : s.value
      };
    });
    function w() {
      n.duration > 0 && ({ stop: h } = zr(() => {
        i.value && f();
      }, n.duration));
    }
    function T() {
      h?.();
    }
    function f() {
      i.value = !1;
    }
    function v({ code: y }) {
      y === Kt.delete || y === Kt.backspace ? T() : y === Kt.esc ? i.value && f() : w();
    }
    return St(() => {
      w(), l(), i.value = !0;
    }), Hr(document, "keydown", v), t({
      visible: i,
      close: f
    }), (y, k) => ($(), Se(xn, {
      name: u(a).b("fade"),
      onBeforeLeave: y.onClose,
      onAfterLeave: (O) => y.$emit("destroy"),
      persisted: ""
    }, {
      default: st(() => [
        Bt(m("div", {
          id: y.id,
          class: ne([u(a).b(), y.customClass, u(E)]),
          style: Yt(u(P)),
          role: "alert",
          onMouseenter: T,
          onMouseleave: w,
          onClick: y.onClick
        }, [
          u(C) ? ($(), Se(u(nn), {
            key: 0,
            class: ne([u(a).e("icon"), u(_)])
          }, {
            default: st(() => [
              ($(), Se(tr(u(C))))
            ]),
            _: 1
          }, 8, ["class"])) : _e("v-if", !0),
          m("div", {
            class: ne(u(a).e("group"))
          }, [
            m("h2", {
              class: ne(u(a).e("title")),
              textContent: W(y.title)
            }, null, 10, ["textContent"]),
            Bt(m("div", {
              class: ne(u(a).e("content")),
              style: Yt(y.title ? void 0 : { margin: 0 })
            }, [
              vt(y.$slots, "default", {}, () => [
                y.dangerouslyUseHTMLString ? ($(), z(Be, { key: 1 }, [
                  _e(" Caution here, message could've been compromised, never use user's input as message "),
                  m("p", { innerHTML: y.message }, null, 8, ["innerHTML"])
                ], 2112)) : ($(), z("p", { key: 0 }, W(y.message), 1))
              ])
            ], 6), [
              [Zt, y.message]
            ]),
            y.showClose ? ($(), Se(u(nn), {
              key: 0,
              class: ne(u(a).e("closeBtn")),
              onClick: $t(f, ["stop"])
            }, {
              default: st(() => [
                L(u(o))
              ]),
              _: 1
            }, 8, ["class", "onClick"])) : _e("v-if", !0)
          ], 2)
        ], 46, ["id", "onClick"]), [
          [Zt, i.value]
        ])
      ]),
      _: 3
    }, 8, ["name", "onBeforeLeave", "onAfterLeave"]));
  }
});
var Zc = /* @__PURE__ */ fn(Yc, [["__file", "notification.vue"]]);
const rn = {
  "top-left": [],
  "top-right": [],
  "bottom-left": [],
  "bottom-right": []
}, Wn = 16;
let Xc = 1;
const Ct = function(e = {}, t) {
  if (!ft)
    return { close: () => {
    } };
  (ot(e) || Ot(e)) && (e = { message: e });
  const n = e.position || "top-right";
  let a = e.offset || 0;
  rn[n].forEach(({ vm: _ }) => {
    var C;
    a += (((C = _.el) == null ? void 0 : C.offsetHeight) || 0) + Wn;
  }), a += Wn;
  const r = `notification_${Xc++}`, l = e.onClose, s = {
    ...e,
    offset: a,
    id: r,
    onClose: () => {
      Jc(r, n, l);
    }
  };
  let o = document.body;
  An(e.appendTo) ? o = e.appendTo : ot(e.appendTo) && (o = document.querySelector(e.appendTo)), An(o) || (o = document.body);
  const i = document.createElement("div"), h = L(Zc, s, Mt(s.message) ? s.message : Ot(s.message) ? () => s.message : null);
  return h.appContext = jr(t) ? Ct._context : t, h.props.onDestroy = () => {
    Xt(null, i);
  }, Xt(h, i), rn[n].push({ vm: h }), o.appendChild(i.firstElementChild), {
    close: () => {
      h.component.exposed.visible.value = !1;
    }
  };
};
ll.forEach((e) => {
  Ct[e] = (t = {}, n) => ((ot(t) || Ot(t)) && (t = {
    message: t
  }), Ct({ ...t, type: e }, n));
});
function Jc(e, t, n) {
  const a = rn[t], r = a.findIndex(({ vm: h }) => {
    var _;
    return ((_ = h.component) == null ? void 0 : _.props.id) === e;
  });
  if (r === -1)
    return;
  const { vm: l } = a[r];
  if (!l)
    return;
  n?.(l);
  const s = l.el.offsetHeight, o = t.split("-")[0];
  a.splice(r, 1);
  const i = a.length;
  if (!(i < 1))
    for (let h = r; h < i; h++) {
      const { el: _, component: C } = a[h].vm, E = Number.parseInt(_.style[o], 10) - s - Wn;
      C.props.offset = E;
    }
}
function qc() {
  for (const e of Object.values(rn))
    e.forEach(({ vm: t }) => {
      t.component.exposed.visible.value = !1;
    });
}
Ct.closeAll = qc;
Ct._context = null;
const Qc = el(Ct, "$notify"), q = {
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
    a === "center" ? Hc({
      message: t,
      type: n,
      duration: r,
      showClose: l,
      grouping: !0,
      customClass: `app-toast app-toast--${n}`
    }) : Qc({
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
var Mn;
(function(e) {
  e[e.Audio = 1] = "Audio", e[e.Cache = 2] = "Cache", e[e.Config = 3] = "Config", e[e.Data = 4] = "Data", e[e.LocalData = 5] = "LocalData", e[e.Document = 6] = "Document", e[e.Download = 7] = "Download", e[e.Picture = 8] = "Picture", e[e.Public = 9] = "Public", e[e.Video = 10] = "Video", e[e.Resource = 11] = "Resource", e[e.Temp = 12] = "Temp", e[e.AppConfig = 13] = "AppConfig", e[e.AppData = 14] = "AppData", e[e.AppLocalData = 15] = "AppLocalData", e[e.AppCache = 16] = "AppCache", e[e.AppLog = 17] = "AppLog", e[e.Desktop = 18] = "Desktop", e[e.Executable = 19] = "Executable", e[e.Font = 20] = "Font", e[e.Home = 21] = "Home", e[e.Runtime = 22] = "Runtime", e[e.Template = 23] = "Template";
})(Mn || (Mn = {}));
async function eu() {
  return I("plugin:path|resolve_directory", {
    directory: Mn.AppCache
  });
}
async function tu(...e) {
  return I("plugin:path|join", { paths: e });
}
async function Ya(e, t) {
  await I("plugin:opener|open_path", {
    path: e,
    with: t
  });
}
const nu = () => ({
  mode: "folder",
  fixedImagePath: null,
  folderPath: null,
  scheduleEnabled: !1,
  intervalMinutes: 30,
  order: "sequential",
  folderSort: "createdAscending",
  autoRestore: !0,
  wallhavenSource: "hot",
  wallhavenCategory: "general",
  wallhavenQuery: null,
  folderSeenPaths: [],
  wallhavenSeenIds: [],
  wallhavenHistoryScope: null,
  lastFolderIndex: 0,
  lastAppliedPath: null
}), au = (e) => e ? /^https?:\/\//i.test(e) ? e : Cl(e) : "", ru = () => I("wallpaper_get_config"), Rn = (e) => I("wallpaper_save_config", { config: e }), Za = () => I("wallpaper_get_status"), Xa = (e) => I("wallpaper_scan_folder", { path: e }), Ja = (e) => I("wallpaper_set_fixed_image", { path: e }), lu = () => I("wallpaper_switch_now"), su = (e) => I("wallpaper_fetch_wallhaven", { params: e }), ou = (e) => I("wallpaper_set_wallhaven_image", { wallpaper: e }), iu = (e) => I("wallpaper_download_wallhaven_image", { wallpaper: e }), cu = () => I("wallpaper_clear_cache"), uu = (e, t) => new RegExp(`Command\\s+${t}\\s+not\\s+found`, "i").test(String(e)), du = async () => {
  try {
    await I("wallpaper_open_cache_dir");
    return;
  } catch (n) {
    if (!uu(n, "wallpaper_open_cache_dir"))
      throw n;
  }
  const e = await eu(), t = await tu(e, "wallpaper-switcher");
  try {
    await Ya(t);
  } catch {
    await Ya(e);
  }
};
function fu({ config: e, refreshStatus: t }) {
  const { t: n } = Pe(), a = U("switcher"), r = U([]), l = U(1), s = U(1), o = U(!1), i = U(""), h = U(""), _ = U("general"), C = U("hot"), E = U(null), g = U(!1), P = U(!1), w = U(/* @__PURE__ */ new Set()), T = U(/* @__PURE__ */ new Set()), f = /* @__PURE__ */ new Map();
  let v = null, y = null, k = null, O = 0;
  const A = D(() => C.value === "hot" ? "Hot" : C.value === "favorites" ? "Favorites" : "Toplist"), b = D(() => r.value.slice(0, 8)), Z = D(() => {
    const x = h.value.trim();
    return _.value === "nature" ? x ? `${x} nature` : "nature" : x || null;
  }), X = D(() => _.value), ie = (x) => {
    const V = String(x).replace(/^Error:\s*/, "");
    return /unexpected EOF|handshake|timed out|error sending request|client error|Connect/i.test(
      V
    ) ? n("wallpaperSwitcher.messages.wallhavenNetworkError") : V.length > 120 ? `${V.slice(0, 120)}...` : V;
  }, ce = (x, V) => {
    const re = new Set(w.value);
    V ? re.add(x) : re.delete(x), w.value = re;
  }, Q = (x) => {
    const V = new Set(T.value);
    V.add(x), T.value = V;
  }, Xe = (x, V) => {
    if (!(V instanceof HTMLImageElement)) {
      f.delete(x.id);
      return;
    }
    if (f.set(x.id, V), !v) {
      V.src = x.thumbs.large;
      return;
    }
    V.dataset.src = x.thumbs.large, v.observe(V);
  }, Je = () => {
    T.value = /* @__PURE__ */ new Set(), f.clear();
  }, qe = async () => {
    e.value.wallhavenQuery = h.value.trim() || null, e.value.wallhavenCategory = _.value, e.value.wallhavenSource = C.value, e.value.mode = "wallhaven", await Rn(e.value);
  }, ye = async (x = l.value) => {
    const V = ++O;
    o.value = !0, i.value = "", r.value = [], Je();
    try {
      await qe();
      const re = await su({
        source: C.value,
        page: x,
        query: Z.value,
        category: X.value
      });
      if (V !== O) return;
      r.value = re.data, l.value = re.page, s.value = Math.max(1, re.lastPage), await Qa();
      for (const ge of f.values())
        v && v.observe(ge);
    } catch (re) {
      if (V !== O) return;
      r.value = [], i.value = ie(re), q.msg(i.value, "error");
    } finally {
      V === O && (o.value = !1);
    }
  }, Qe = () => ye(1), et = async (x) => {
    C.value = x, await ye(1);
  }, we = async (x) => {
    _.value = x, await ye(1);
  }, Me = async () => {
    h.value = "", _.value = e.value.wallhavenCategory || "general", C.value = e.value.wallhavenSource, l.value = 1, i.value = "", r.value = [], a.value = "wallhaven", await ye(1);
  }, Re = (x) => {
    E.value = x, g.value = !0, P.value = !1;
  }, $e = () => {
    E.value = null, g.value = !1, P.value = !1;
  }, De = async () => {
    a.value = "switcher", $e(), await t();
  }, xe = () => {
    g.value = !1;
  }, ht = () => {
    g.value = !1, P.value = !0;
  }, tt = async (x) => {
    ce(x.id, !0);
    try {
      q.msg(n("wallpaperSwitcher.messages.settingWallpaper"), "info"), await ou(x), await t(), q.msg(n("wallpaperSwitcher.messages.wallpaperSet"), "success");
    } catch (V) {
      q.msg(String(V), "error");
    } finally {
      ce(x.id, !1);
    }
  }, nt = async (x) => {
    ce(x.id, !0);
    try {
      q.msg(n("wallpaperSwitcher.messages.downloadingWallpaper"), "info"), await iu(x), await t(), q.msg(n("wallpaperSwitcher.messages.wallpaperDownloaded"), "success");
    } catch (V) {
      q.msg(String(V), "error");
    } finally {
      ce(x.id, !1);
    }
  }, je = async () => {
    l.value > 1 && await ye(l.value - 1);
  }, at = async () => {
    l.value < s.value && await ye(l.value + 1);
  };
  return St(() => {
    v = new IntersectionObserver(
      (x) => {
        for (const V of x) {
          if (!V.isIntersecting) continue;
          const re = V.target, ge = re.dataset.src;
          ge && re.src !== ge && (re.src = ge), v?.unobserve(re);
        }
      },
      { root: null, rootMargin: "120px" }
    ), y = null, k = null;
  }), Dn(() => {
    v?.disconnect(), v = null, y?.(), k?.();
  }), {
    activeView: a,
    wallpapers: r,
    wallhavenPage: l,
    wallhavenLastPage: s,
    wallhavenLoading: o,
    wallhavenError: i,
    wallhavenKeyword: h,
    wallhavenCategory: _,
    wallhavenSource: C,
    previewWallpaper: E,
    previewLoading: g,
    previewLoadFailed: P,
    workingIds: w,
    loadedThumbIds: T,
    wallhavenSourceLabel: A,
    visibleWallpapers: b,
    openWallhavenGrid: Me,
    backToSwitcher: De,
    openPreview: Re,
    closePreview: $e,
    markPreviewLoaded: xe,
    markPreviewFailed: ht,
    markThumbLoaded: Q,
    setThumbRef: Xe,
    refreshWallhaven: Qe,
    setWallhavenSource: et,
    setWallhavenCategory: we,
    setWallpaperFromWallhaven: tt,
    downloadWallpaperFromWallhaven: nt,
    prevWallhavenPage: je,
    nextWallhavenPage: at,
    setupListeners: async () => {
      y = await Jt("wallpaper-switcher-changed", t), k = await Jt(
        "wallpaper-switcher-error",
        (x) => {
          q.msg(
            x.payload?.message || n("wallpaperSwitcher.messages.scheduleSwitchFailed"),
            "error"
          );
        }
      );
    }
  };
}
var hu = {
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
function pu() {
  return "icon-" + ((1 + Math.random()) * 4294967296 | 0).toString(16).substring(1);
}
function mu(e, t, n) {
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
var gu = Symbol("icon-context");
function me(e, t, n) {
  var a = {
    name: "icon-" + e,
    props: ["size", "strokeWidth", "strokeLinecap", "strokeLinejoin", "theme", "fill", "spin"],
    setup: function(l) {
      var s = pu(), o = Ke(gu, hu);
      return function() {
        var i = l.size, h = l.strokeWidth, _ = l.strokeLinecap, C = l.strokeLinejoin, E = l.theme, g = l.fill, P = l.spin, w = mu(s, {
          size: i,
          strokeWidth: h,
          strokeLinecap: _,
          strokeLinejoin: C,
          theme: E,
          fill: g
        }, o), T = [o.prefix + "-icon"];
        return T.push(o.prefix + "-icon-" + e), t && o.rtl && T.push(o.prefix + "-icon-rtl"), P && T.push(o.prefix + "-icon-spin"), L("span", {
          class: T.join(" ")
        }, [n(w)]);
      };
    }
  };
  return a;
}
const wu = me("back", !0, function(e) {
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
}), ln = me("close-small", !1, function(e) {
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
}), sl = me("computer", !1, function(e) {
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
}), vu = me("delete", !1, function(e) {
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
}), _u = me("download", !1, function(e) {
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
}), bn = me("folder-open", !0, function(e) {
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
}), bu = me("lightning", !0, function(e) {
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
}), $n = me("picture", !0, function(e) {
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
}), yu = me("picture-album", !0, function(e) {
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
}), ku = me("pin", !0, function(e) {
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
}), Cu = me("preview-open", !1, function(e) {
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
}), ol = me("refresh", !0, function(e) {
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
}), Su = me("save", !0, function(e) {
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
}), il = me("search", !0, function(e) {
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
}), Lu = me("time", !0, function(e) {
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
}), Eu = ["disabled", "onClick"], Tu = ["onClick", "onKeydown"], cl = /* @__PURE__ */ ae({
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
    ], l = (s, o) => {
      o || n("update:modelValue", s);
    };
    return (s, o) => ($(), z(
      Be,
      null,
      yn(r, (i) => ($(), z(
        Be,
        {
          key: i.value
        },
        [
          s.tabClass === "button" ? ($(), z("button", {
            key: 0,
            type: "button",
            class: ne({ [s.activeClass || "active"]: s.modelValue === i.value }),
            disabled: s.disabled,
            onClick: (h) => l(i.value, s.disabled)
          }, W(u(a)(i.labelKey)), 11, Eu)) : ($(), z("div", {
            key: 1,
            class: ne(["seg-tab", {
              [s.activeClass || "active"]: s.modelValue === i.value,
              [s.disabledClass || "disabled"]: s.disabled
            }]),
            role: "tab",
            tabindex: "0",
            onClick: (h) => l(i.value, s.disabled),
            onKeydown: nr($t((h) => l(i.value, s.disabled), ["prevent"]), ["enter"])
          }, W(u(a)(i.labelKey)), 43, Tu))
        ],
        64
        /* STABLE_FRAGMENT */
      ))),
      64
      /* STABLE_FRAGMENT */
    ));
  }
}), Iu = { class: "top-panel" }, Nu = { class: "preview" }, Pu = ["src", "alt"], Ou = {
  key: 1,
  class: "preview-empty"
}, Au = { class: "status-panel" }, Fu = { class: "status-copy" }, Wu = { class: "wallpaper-name" }, Mu = { class: "status-list" }, Ru = { class: "status-row" }, $u = { class: "status-row" }, Du = { class: "status-row" }, xu = { class: "status-actions" }, ju = ["disabled"], zu = { class: "card settings-card" }, Uu = { class: "form-row mode-row" }, Vu = { class: "row-label" }, Hu = { class: "segmented three" }, Gu = { class: "form-row fixed-row" }, Ku = { class: "row-label" }, Bu = ["value", "placeholder"], Yu = { class: "form-row folder-row" }, Zu = { class: "row-label" }, Xu = ["value", "placeholder"], Ju = { class: "hint-row folder-hint-row" }, qu = { class: "form-row wallhaven-row" }, Qu = { class: "sub-label" }, ed = { class: "segmented source" }, td = { class: "card rules-card" }, nd = { class: "rules-line" }, ad = { class: "row-label" }, rd = { class: "switch-label" }, ld = ["checked"], sd = { class: "number-label" }, od = ["value"], id = { class: "checkbox-label" }, cd = ["checked"], ud = { class: "footer-card" }, dd = { class: "cache-info" }, fd = { class: "footer-actions" }, hd = ["disabled"], pd = ["disabled"], md = ["disabled"], gd = /* @__PURE__ */ ae({
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
    cacheSizeLabel: {},
    switching: { type: Boolean },
    clearingCache: { type: Boolean },
    openingCache: { type: Boolean },
    saving: { type: Boolean }
  },
  emits: ["updateConfig", "chooseImage", "chooseFolder", "scanFolder", "openWallhavenGrid", "switchNow", "setCurrentAsFixed", "clearCache", "openCacheDir", "persistConfig"],
  setup(e, { emit: t }) {
    const n = e, a = t, { t: r } = Pe(), l = (g) => {
      a("updateConfig", { ...n.config, ...g });
    }, s = (g) => l({ mode: g }), o = (g) => l({ wallhavenSource: g }), i = (g) => l({ fixedImagePath: g.target.value }), h = (g) => l({ folderPath: g.target.value }), _ = (g) => l({ scheduleEnabled: g.target.checked }), C = (g) => l({
      intervalMinutes: Number(g.target.value)
    }), E = (g) => l({ autoRestore: g.target.checked });
    return (g, P) => ($(), z(
      "div",
      {
        class: ne(["content", { dimmed: g.loading }])
      },
      [
        m("section", Iu, [
          m("div", Nu, [
            g.previewSrc ? ($(), z("img", {
              key: 0,
              src: g.previewSrc,
              alt: u(r)("wallpaperSwitcher.currentPreviewAlt")
            }, null, 8, Pu)) : ($(), z("div", Ou, [
              L(u($n), { size: 42 }),
              m(
                "span",
                null,
                W(u(r)("wallpaperSwitcher.noCurrentWallpaper")),
                1
                /* TEXT */
              )
            ]))
          ]),
          m("div", Au, [
            m("div", Fu, [
              m("div", Wu, [
                m(
                  "span",
                  null,
                  W(u(r)("wallpaperSwitcher.currentWallpaper")),
                  1
                  /* TEXT */
                ),
                m(
                  "strong",
                  null,
                  W(g.currentWallpaperName),
                  1
                  /* TEXT */
                )
              ]),
              m("div", Mu, [
                m("div", Ru, [
                  L(u(bn), { size: 16 }),
                  m(
                    "span",
                    null,
                    W(u(r)("wallpaperSwitcher.source")),
                    1
                    /* TEXT */
                  ),
                  m(
                    "strong",
                    null,
                    W(g.sourceLabel),
                    1
                    /* TEXT */
                  )
                ]),
                m("div", $u, [
                  L(u(sl), { size: 16 }),
                  m(
                    "span",
                    null,
                    W(u(r)("wallpaperSwitcher.resolution")),
                    1
                    /* TEXT */
                  ),
                  m(
                    "strong",
                    null,
                    W(g.resolutionLabel),
                    1
                    /* TEXT */
                  )
                ]),
                m("div", Du, [
                  L(u(Lu), { size: 16 }),
                  m(
                    "span",
                    null,
                    W(u(r)("wallpaperSwitcher.nextSwitch")),
                    1
                    /* TEXT */
                  ),
                  m(
                    "strong",
                    null,
                    W(g.nextSwitchLabel),
                    1
                    /* TEXT */
                  )
                ])
              ])
            ]),
            m("div", xu, [
              m("button", {
                type: "button",
                class: "primary-btn",
                disabled: g.switching,
                onClick: P[0] || (P[0] = (w) => a("switchNow"))
              }, [
                L(u(bu), {
                  theme: "outline",
                  size: 14
                }),
                de(
                  " " + W(g.switching ? u(r)("wallpaperSwitcher.switching") : u(r)("wallpaperSwitcher.switchNow")),
                  1
                  /* TEXT */
                )
              ], 8, ju),
              m("button", {
                type: "button",
                class: "secondary-btn",
                onClick: P[1] || (P[1] = (w) => a("setCurrentAsFixed"))
              }, [
                L(u(ku), {
                  theme: "outline",
                  size: 14
                }),
                de(
                  " " + W(u(r)("wallpaperSwitcher.setFixed")),
                  1
                  /* TEXT */
                )
              ])
            ])
          ])
        ]),
        m("section", zu, [
          m("div", Uu, [
            m(
              "span",
              Vu,
              W(u(r)("wallpaperSwitcher.mode")),
              1
              /* TEXT */
            ),
            m("div", Hu, [
              m(
                "button",
                {
                  type: "button",
                  class: ne({ active: g.config.mode === "fixed" }),
                  onClick: P[2] || (P[2] = (w) => s("fixed"))
                },
                W(u(r)("wallpaperSwitcher.fixedImage")),
                3
                /* TEXT, CLASS */
              ),
              m(
                "button",
                {
                  type: "button",
                  class: ne({ active: g.config.mode === "folder" }),
                  onClick: P[3] || (P[3] = (w) => s("folder"))
                },
                W(u(r)("wallpaperSwitcher.localFolder")),
                3
                /* TEXT, CLASS */
              ),
              m(
                "button",
                {
                  type: "button",
                  class: ne({ active: g.config.mode === "wallhaven" }),
                  onClick: P[4] || (P[4] = (w) => s("wallhaven"))
                },
                W(u(r)("wallpaperSwitcher.wallhavenOnline")),
                3
                /* TEXT, CLASS */
              )
            ])
          ]),
          m("div", Gu, [
            m(
              "span",
              Ku,
              W(u(r)("wallpaperSwitcher.fixedImage")),
              1
              /* TEXT */
            ),
            m("input", {
              value: g.config.fixedImagePath,
              class: "path-input",
              placeholder: u(r)("wallpaperSwitcher.placeholders.fixedImage"),
              spellcheck: "false",
              onInput: i
            }, null, 40, Bu),
            m("button", {
              type: "button",
              class: "tool-btn",
              onClick: P[5] || (P[5] = (w) => a("chooseImage"))
            }, [
              L(u($n), { size: 16 }),
              de(
                " " + W(u(r)("wallpaperSwitcher.selectImage")),
                1
                /* TEXT */
              )
            ])
          ]),
          m("div", Yu, [
            m(
              "span",
              Zu,
              W(u(r)("wallpaperSwitcher.localFolder")),
              1
              /* TEXT */
            ),
            m("input", {
              value: g.config.folderPath,
              class: "path-input",
              placeholder: u(r)("wallpaperSwitcher.placeholders.folder"),
              spellcheck: "false",
              onInput: h
            }, null, 40, Xu),
            m("button", {
              type: "button",
              class: "tool-btn",
              onClick: P[6] || (P[6] = (w) => a("chooseFolder"))
            }, [
              L(u(bn), { size: 16 }),
              de(
                " " + W(u(r)("wallpaperSwitcher.select")),
                1
                /* TEXT */
              )
            ]),
            m("button", {
              type: "button",
              class: "tool-btn",
              onClick: P[7] || (P[7] = (w) => a("scanFolder"))
            }, [
              L(u(ol), { size: 16 }),
              de(
                " " + W(u(r)("wallpaperSwitcher.scan")),
                1
                /* TEXT */
              )
            ])
          ]),
          m("div", Ju, [
            m(
              "span",
              null,
              W(g.folderCountLabel),
              1
              /* TEXT */
            ),
            m(
              "span",
              null,
              W(u(r)("wallpaperSwitcher.folderCreateTimeHint")),
              1
              /* TEXT */
            )
          ]),
          m("div", qu, [
            P[12] || (P[12] = m(
              "span",
              { class: "row-label" },
              "Wallhaven",
              -1
              /* HOISTED */
            )),
            m(
              "span",
              Qu,
              W(u(r)("wallpaperSwitcher.sourceShort")),
              1
              /* TEXT */
            ),
            m("div", ed, [
              L(cl, {
                "tab-class": "button",
                "model-value": g.config.wallhavenSource,
                "onUpdate:modelValue": o
              }, null, 8, ["model-value"])
            ]),
            m("button", {
              type: "button",
              class: "tool-btn grid-open",
              onClick: P[8] || (P[8] = (w) => a("openWallhavenGrid"))
            }, [
              L(u(il), { size: 16 }),
              de(
                " " + W(u(r)("wallpaperSwitcher.openOnlineGrid")),
                1
                /* TEXT */
              )
            ])
          ])
        ]),
        m("section", td, [
          m("div", nd, [
            m(
              "span",
              ad,
              W(u(r)("wallpaperSwitcher.switchRules")),
              1
              /* TEXT */
            ),
            m("label", rd, [
              de(
                W(u(r)("wallpaperSwitcher.enableSchedule")) + " ",
                1
                /* TEXT */
              ),
              m("input", {
                checked: g.config.scheduleEnabled,
                type: "checkbox",
                onChange: _
              }, null, 40, ld),
              P[13] || (P[13] = m(
                "span",
                { class: "switch-control" },
                null,
                -1
                /* HOISTED */
              ))
            ]),
            m("label", sd, [
              de(
                W(u(r)("wallpaperSwitcher.every")) + " ",
                1
                /* TEXT */
              ),
              m("input", {
                value: g.config.intervalMinutes,
                type: "number",
                min: "1",
                max: "1440",
                onInput: C
              }, null, 40, od),
              de(
                " " + W(u(r)("wallpaperSwitcher.minutes")),
                1
                /* TEXT */
              )
            ]),
            m("label", id, [
              m("input", {
                checked: g.config.autoRestore,
                type: "checkbox",
                onChange: E
              }, null, 40, cd),
              de(
                " " + W(u(r)("wallpaperSwitcher.autoRestore")),
                1
                /* TEXT */
              )
            ])
          ])
        ]),
        m("footer", ud, [
          m("div", dd, [
            m(
              "strong",
              null,
              W(u(r)("wallpaperSwitcher.cache")),
              1
              /* TEXT */
            ),
            m(
              "span",
              null,
              W(u(r)("wallpaperSwitcher.wallhavenCache")),
              1
              /* TEXT */
            ),
            m(
              "span",
              null,
              W(g.cacheSizeLabel),
              1
              /* TEXT */
            )
          ]),
          m("div", fd, [
            m("button", {
              type: "button",
              class: "secondary-btn",
              disabled: g.clearingCache,
              onClick: P[9] || (P[9] = (w) => a("clearCache"))
            }, [
              L(u(vu), { size: 16 }),
              de(
                " " + W(g.clearingCache ? u(r)("wallpaperSwitcher.clearing") : u(r)("wallpaperSwitcher.clearCache")),
                1
                /* TEXT */
              )
            ], 8, hd),
            m("button", {
              type: "button",
              class: "secondary-btn",
              disabled: g.openingCache,
              onClick: P[10] || (P[10] = (w) => a("openCacheDir"))
            }, [
              L(u(bn), { size: 16 }),
              de(
                " " + W(g.openingCache ? u(r)("wallpaperSwitcher.opening") : u(r)("wallpaperSwitcher.openCache")),
                1
                /* TEXT */
              )
            ], 8, pd),
            m("button", {
              type: "button",
              class: "primary-btn",
              disabled: g.saving,
              onClick: P[11] || (P[11] = (w) => a("persistConfig"))
            }, [
              L(u(Su), { size: 17 }),
              de(
                " " + W(g.saving ? u(r)("wallpaperSwitcher.saving") : u(r)("wallpaperSwitcher.saveSettings")),
                1
                /* TEXT */
              )
            ], 8, md)
          ])
        ])
      ],
      2
      /* CLASS */
    ));
  }
}), wd = {
  class: "titlebar",
  "data-tauri-drag-region": ""
}, vd = {
  key: 0,
  class: "title"
}, _d = {
  key: 1,
  class: "title"
}, bd = ["title"], yd = {
  key: 2,
  class: "window-actions"
}, kd = ["title"], Cd = ["title"], Sd = {
  key: 3,
  class: "window-actions"
}, Ld = ["aria-label"], Ed = ["title"], Td = /* @__PURE__ */ ae({
  __name: "SwitcherTitlebar",
  props: {
    activeView: {},
    wallhavenSource: {},
    wallhavenLoading: { type: Boolean }
  },
  emits: ["back", "close", "openWallhaven", "setWallhavenSource"],
  setup(e, { emit: t }) {
    const n = t, { t: a } = Pe();
    return (r, l) => ($(), z("header", wd, [
      r.activeView === "switcher" ? ($(), z("div", vd, [
        L(u($n), { size: 18 }),
        m(
          "span",
          null,
          W(u(a)("wallpaperSwitcher.title")),
          1
          /* TEXT */
        )
      ])) : ($(), z("div", _d, [
        m("button", {
          type: "button",
          class: "flat-icon",
          title: u(a)("wallpaperSwitcher.back"),
          onClick: l[0] || (l[0] = (s) => n("back"))
        }, [
          L(u(wu), { size: 20 })
        ], 8, bd),
        m(
          "span",
          null,
          W(u(a)("wallpaperSwitcher.wallhavenTitle")),
          1
          /* TEXT */
        )
      ])),
      r.activeView === "switcher" ? ($(), z("div", yd, [
        m("button", {
          type: "button",
          class: "icon-btn online-entry-btn",
          title: u(a)("wallpaperSwitcher.openWallhaven"),
          onClick: l[1] || (l[1] = (s) => n("openWallhaven"))
        }, [
          L(u(yu), { size: 18 })
        ], 8, kd),
        m("button", {
          type: "button",
          class: "icon-btn",
          title: u(a)("wallpaperSwitcher.close"),
          onClick: l[2] || (l[2] = (s) => n("close"))
        }, [
          L(u(ln), { size: 20 })
        ], 8, Cd)
      ])) : ($(), z("div", Sd, [
        m("div", {
          class: "source-toggle",
          role: "tablist",
          "aria-label": u(a)("wallpaperSwitcher.sourceToggle")
        }, [
          L(cl, {
            "model-value": r.wallhavenSource,
            disabled: r.wallhavenLoading,
            "onUpdate:modelValue": l[3] || (l[3] = (s) => n("setWallhavenSource", s))
          }, null, 8, ["model-value", "disabled"])
        ], 8, Ld),
        m("button", {
          type: "button",
          class: "icon-btn",
          title: u(a)("wallpaperSwitcher.close"),
          onClick: l[4] || (l[4] = (s) => n("close"))
        }, [
          L(u(ln), { size: 20 })
        ], 8, Ed)
      ]))
    ]));
  }
}), Id = { class: "wallhaven-view" }, Nd = { class: "filters filters--preview-style" }, Pd = { class: "search-box wallhaven-search" }, Od = ["value", "placeholder"], Ad = ["title"], Fd = ["aria-label"], Wd = ["disabled", "onClick"], Md = { class: "wallhaven-meta" }, Rd = ["title"], $d = { class: "grid-wrap" }, Dd = {
  key: 0,
  class: "empty-state"
}, xd = {
  key: 1,
  class: "empty-state error-state"
}, jd = {
  key: 2,
  class: "empty-state"
}, zd = {
  key: 3,
  class: "wallpaper-grid"
}, Ud = ["onClick"], Vd = {
  key: 0,
  class: "thumb-skeleton"
}, Hd = ["alt", "onLoad"], Gd = ["title", "onClick"], Kd = ["title", "disabled", "onClick"], Bd = ["title", "disabled", "onClick"], Yd = { class: "pager" }, Zd = { class: "source-note" }, Xd = { class: "pager-actions" }, Jd = ["disabled"], qd = ["disabled"], Qd = /* @__PURE__ */ ae({
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
    return (s, o) => ($(), z("div", Id, [
      m("section", Nd, [
        m("div", Pd, [
          m("input", {
            value: s.keyword,
            type: "text",
            placeholder: u(a)("wallpaperSwitcher.searchPlaceholder"),
            onInput: l,
            onKeydown: o[0] || (o[0] = nr((i) => n("refresh"), ["enter"]))
          }, null, 40, Od),
          L(u(il), {
            size: 16,
            class: "search-icon"
          }),
          s.keyword ? ($(), z("button", {
            key: 0,
            type: "button",
            class: "clear-btn",
            title: u(a)("wallpaperSwitcher.clear"),
            onClick: o[1] || (o[1] = (i) => n("update:keyword", ""))
          }, [
            L(u(ln), { size: 18 })
          ], 8, Ad)) : _e("v-if", !0)
        ]),
        m("div", {
          class: "wallhaven-tabs",
          role: "tablist",
          "aria-label": u(a)("wallpaperSwitcher.categoryToggle")
        }, [
          ($(), z(
            Be,
            null,
            yn(r, (i) => m("button", {
              key: i.value,
              type: "button",
              class: ne({ active: s.category === i.value }),
              disabled: s.loading,
              onClick: (h) => n("setCategory", i.value)
            }, W(u(a)(i.labelKey)), 11, Wd)),
            64
            /* STABLE_FRAGMENT */
          ))
        ], 8, Fd),
        m("div", Md, [
          m(
            "span",
            null,
            W(u(a)("wallpaperSwitcher.autoMatch", { resolution: s.screenLabel })),
            1
            /* TEXT */
          ),
          m("button", {
            type: "button",
            class: "refresh-btn wallhaven-refresh",
            title: u(a)("wallpaperSwitcher.refresh"),
            onClick: o[2] || (o[2] = (i) => n("refresh"))
          }, [
            L(u(ol), {
              size: 14,
              class: ne({ spinning: s.loading })
            }, null, 8, ["class"])
          ], 8, Rd)
        ])
      ]),
      m("section", $d, [
        s.loading && s.wallpapers.length === 0 ? ($(), z(
          "div",
          Dd,
          W(u(a)("wallpaperSwitcher.loadingWallhaven")),
          1
          /* TEXT */
        )) : s.error ? ($(), z("div", xd, [
          m(
            "span",
            null,
            W(s.error),
            1
            /* TEXT */
          ),
          m(
            "button",
            {
              type: "button",
              onClick: o[3] || (o[3] = (i) => n("refresh"))
            },
            W(u(a)("wallpaperSwitcher.retry")),
            1
            /* TEXT */
          )
        ])) : s.wallpapers.length === 0 ? ($(), z(
          "div",
          jd,
          W(u(a)("wallpaperSwitcher.noWallpapers")),
          1
          /* TEXT */
        )) : ($(), z("div", zd, [
          ($(!0), z(
            Be,
            null,
            yn(s.wallpapers, (i) => ($(), z("article", {
              key: i.id,
              class: "wallpaper-card"
            }, [
              m("button", {
                type: "button",
                class: "thumb",
                onClick: (h) => n("openPreview", i)
              }, [
                s.loadedThumbIds.has(i.id) ? _e("v-if", !0) : ($(), z("div", Vd)),
                m("img", {
                  ref_for: !0,
                  ref: (h) => s.setThumbRef(i, h),
                  alt: i.resolution,
                  loading: "lazy",
                  onLoad: (h) => n("markThumbLoaded", i.id)
                }, null, 40, Hd),
                m(
                  "span",
                  null,
                  W(i.resolution),
                  1
                  /* TEXT */
                )
              ], 8, Ud),
              m("div", {
                class: "card-actions",
                onClick: o[4] || (o[4] = $t(() => {
                }, ["stop"]))
              }, [
                m("button", {
                  type: "button",
                  title: u(a)("wallpaperSwitcher.preview"),
                  onClick: (h) => n("openPreview", i)
                }, [
                  L(u(Cu), { size: 16 }),
                  de(
                    " " + W(u(a)("wallpaperSwitcher.preview")),
                    1
                    /* TEXT */
                  )
                ], 8, Gd),
                m("button", {
                  type: "button",
                  title: u(a)("wallpaperSwitcher.setWallpaper"),
                  disabled: s.workingIds.has(i.id),
                  onClick: (h) => n("setWallpaper", i)
                }, [
                  L(u(sl), { size: 16 }),
                  de(
                    " " + W(s.workingIds.has(i.id) ? u(a)("wallpaperSwitcher.setting") : u(a)("wallpaperSwitcher.set")),
                    1
                    /* TEXT */
                  )
                ], 8, Kd),
                m("button", {
                  type: "button",
                  title: u(a)("wallpaperSwitcher.download"),
                  disabled: s.workingIds.has(i.id),
                  onClick: (h) => n("downloadWallpaper", i)
                }, [
                  L(u(_u), { size: 16 }),
                  de(
                    " " + W(u(a)("wallpaperSwitcher.download")),
                    1
                    /* TEXT */
                  )
                ], 8, Bd)
              ])
            ]))),
            128
            /* KEYED_FRAGMENT */
          ))
        ]))
      ]),
      m("footer", Yd, [
        m(
          "span",
          null,
          W(u(a)("wallpaperSwitcher.page", { page: s.page })),
          1
          /* TEXT */
        ),
        m(
          "span",
          Zd,
          W(u(a)("wallpaperSwitcher.sourceNote", { source: s.sourceLabel })),
          1
          /* TEXT */
        ),
        m("div", Xd, [
          m("button", {
            type: "button",
            disabled: s.page <= 1 || s.loading,
            onClick: o[5] || (o[5] = (i) => n("prevPage"))
          }, W(u(a)("wallpaperSwitcher.prevPage")), 9, Jd),
          m("button", {
            type: "button",
            disabled: s.page >= s.lastPage || s.loading,
            onClick: o[6] || (o[6] = (i) => n("nextPage"))
          }, W(u(a)("wallpaperSwitcher.nextPage")), 9, qd)
        ])
      ])
    ]));
  }
}), ef = { class: "preview-dialog" }, tf = { class: "preview-image-wrap" }, nf = {
  key: 0,
  class: "preview-skeleton"
}, af = {
  key: 1,
  class: "preview-error"
}, rf = ["src", "alt"], lf = ["disabled"], sf = ["disabled"], of = /* @__PURE__ */ ae({
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
      onClick: l[5] || (l[5] = $t((s) => n("close"), ["self"]))
    }, [
      m("div", ef, [
        m("header", null, [
          m(
            "strong",
            null,
            W(r.wallpaper.resolution),
            1
            /* TEXT */
          ),
          m("button", {
            type: "button",
            class: "flat-icon",
            onClick: l[0] || (l[0] = (s) => n("close"))
          }, [
            L(u(ln), { size: 23 })
          ])
        ]),
        m("div", tf, [
          r.loading ? ($(), z("div", nf, [
            m(
              "span",
              null,
              W(u(a)("wallpaperSwitcher.loadingPreview")),
              1
              /* TEXT */
            )
          ])) : _e("v-if", !0),
          r.loadFailed ? ($(), z(
            "div",
            af,
            W(u(a)("wallpaperSwitcher.previewLoadFailed")),
            1
            /* TEXT */
          )) : _e("v-if", !0),
          m("img", {
            class: ne({ ready: !r.loading && !r.loadFailed }),
            src: r.wallpaper.path,
            alt: u(a)("wallpaperSwitcher.wallpaperPreviewAlt"),
            onLoad: l[1] || (l[1] = (s) => n("loaded")),
            onError: l[2] || (l[2] = (s) => n("failed"))
          }, null, 42, rf)
        ]),
        m("footer", null, [
          m("button", {
            type: "button",
            class: "secondary-btn",
            disabled: r.workingIds.has(r.wallpaper.id),
            onClick: l[3] || (l[3] = (s) => n("download", r.wallpaper))
          }, W(u(a)("wallpaperSwitcher.downloadCache")), 9, lf),
          m("button", {
            type: "button",
            class: "primary-btn",
            disabled: r.workingIds.has(r.wallpaper.id),
            onClick: l[4] || (l[4] = (s) => n("setWallpaper", r.wallpaper))
          }, W(r.workingIds.has(r.wallpaper.id) ? u(a)("wallpaperSwitcher.setting") : u(a)("wallpaperSwitcher.setWallpaper")), 9, sf)
        ])
      ])
    ])) : _e("v-if", !0);
  }
}), cf = { class: "wallpaper-window" }, uf = {
  key: 0,
  class: "unsupported"
}, df = /* @__PURE__ */ ae({
  __name: "index",
  setup(e) {
    const t = sr(), { t: n } = Pe(), a = U(nu()), r = U(null), l = U(null), s = U(!1), o = U(!1), i = U(!1), h = U(!1), _ = U(!1), C = async () => {
      try {
        r.value = await Za();
      } catch (R) {
        q.msg(String(R), "error");
      }
    }, E = fu({
      config: a,
      refreshStatus: async () => {
        await C();
      }
    }), {
      activeView: g,
      wallhavenPage: P,
      wallhavenLastPage: w,
      wallhavenLoading: T,
      wallhavenError: f,
      wallhavenKeyword: v,
      wallhavenCategory: y,
      wallhavenSource: k,
      previewWallpaper: O,
      previewLoading: A,
      previewLoadFailed: b,
      workingIds: Z,
      loadedThumbIds: X,
      wallhavenSourceLabel: ie,
      visibleWallpapers: ce,
      openWallhavenGrid: Q,
      backToSwitcher: Xe,
      openPreview: Je,
      closePreview: qe,
      markPreviewLoaded: ye,
      markPreviewFailed: Qe,
      markThumbLoaded: et,
      setThumbRef: we,
      refreshWallhaven: Me,
      setWallhavenSource: Re,
      setWallhavenCategory: $e,
      setWallpaperFromWallhaven: De,
      downloadWallpaperFromWallhaven: xe,
      prevWallhavenPage: ht,
      nextWallhavenPage: tt,
      setupListeners: nt
    } = E, je = D(
      () => au(r.value?.currentPath || a.value.lastAppliedPath)
    ), at = D(() => {
      const R = r.value?.currentPath || a.value.lastAppliedPath;
      return R ? R.split(/[\\/]/).pop() || R : n("wallpaperSwitcher.noCurrentWallpaper");
    }), ze = D(() => {
      const R = r.value?.screenWidth || 2560, ue = r.value?.screenHeight || 1440;
      return `${R} × ${ue}`;
    }), x = D(
      () => r.value?.currentResolution || ze.value
    ), V = (R) => R < 1024 ? `${R} B` : R < 1024 * 1024 ? `${(R / 1024).toFixed(1)} KB` : R < 1024 * 1024 * 1024 ? `${(R / 1024 / 1024).toFixed(1)} MB` : `${(R / 1024 / 1024 / 1024).toFixed(1)} GB`, re = D(() => a.value.mode === "fixed" ? n("wallpaperSwitcher.fixedImage") : a.value.mode === "wallhaven" ? "Wallhaven" : n("wallpaperSwitcher.localFolder")), ge = D(() => {
      if (a.value.mode === "fixed" || !a.value.scheduleEnabled || !r.value?.schedulerRunning)
        return "—";
      const R = r.value?.nextSwitchAt;
      if (!R) return "—";
      const ue = Math.max(0, R - Math.floor(Date.now() / 1e3));
      return ue < 60 ? n("wallpaperSwitcher.time.secondsLater", { count: ue }) : n("wallpaperSwitcher.time.minutesLater", {
        count: Math.ceil(ue / 60)
      });
    }), Ue = D(() => {
      const R = r.value?.cacheSizeBytes ?? 0;
      return V(R);
    }), Ve = D(() => l.value ? n("wallpaperSwitcher.folderStatus.detected", {
      count: l.value.count
    }) : a.value.folderPath ? n("wallpaperSwitcher.folderStatus.notScanned") : n("wallpaperSwitcher.folderStatus.selectFirst")), rt = async () => {
      s.value = !0;
      try {
        const [R, ue] = await Promise.all([
          ru(),
          Za()
        ]);
        if (a.value = R, r.value = ue, R.folderPath)
          try {
            l.value = await Xa(R.folderPath);
          } catch {
            l.value = null;
          }
      } catch (R) {
        q.msg(String(R), "error");
      } finally {
        s.value = !1;
      }
    }, c = async () => {
      o.value = !0;
      try {
        await Rn(a.value), await C(), q.msg(n("wallpaperSwitcher.messages.settingsSaved"), "success");
      } catch (R) {
        q.msg(String(R), "error");
      } finally {
        o.value = !1;
      }
    }, d = async () => {
      const R = await ra({
        multiple: !1,
        directory: !1,
        filters: [
          { name: "Images", extensions: ["jpg", "jpeg", "png", "webp", "bmp"] }
        ]
      });
      if (typeof R == "string") {
        a.value.fixedImagePath = R, a.value.mode = "fixed";
        try {
          await Ja(R), await rt(), q.msg(n("wallpaperSwitcher.messages.fixedSet"), "success");
        } catch (ue) {
          q.msg(String(ue), "error");
        }
      }
    }, S = async () => {
      if (!a.value.folderPath) {
        q.msg(n("wallpaperSwitcher.messages.selectFolderFirst"), "warning");
        return;
      }
      try {
        l.value = await Xa(a.value.folderPath), l.value.count === 0 ? q.msg(n("wallpaperSwitcher.messages.noImagesInFolder"), "warning") : q.msg(Ve.value, "success");
      } catch (R) {
        q.msg(String(R), "error");
      }
    }, F = async () => {
      const R = await ra({ multiple: !1, directory: !0 });
      typeof R == "string" && (a.value.folderPath = R, a.value.mode = "folder", await S());
    }, J = async () => {
      i.value = !0;
      try {
        await Rn(a.value), await lu(), await C(), q.msg(n("wallpaperSwitcher.messages.wallpaperSwitched"), "success");
      } catch (R) {
        q.msg(String(R), "error");
      } finally {
        i.value = !1;
      }
    }, j = async () => {
      if (!r.value?.currentPath) {
        q.msg(n("wallpaperSwitcher.messages.noCurrentToFix"), "warning");
        return;
      }
      a.value.mode = "fixed", a.value.fixedImagePath = r.value.currentPath, a.value.scheduleEnabled = !1;
      try {
        await Ja(r.value.currentPath), await rt(), q.msg(n("wallpaperSwitcher.messages.fixedSet"), "success");
      } catch (R) {
        q.msg(String(R), "error");
      }
    }, p = async () => {
      h.value = !0;
      try {
        await cu(), await C(), q.msg(n("wallpaperSwitcher.messages.cacheCleared"), "success");
      } catch (R) {
        q.msg(String(R), "error");
      } finally {
        h.value = !1;
      }
    }, N = async () => {
      _.value = !0;
      try {
        await du();
      } catch (R) {
        q.msg(String(R), "error");
      } finally {
        _.value = !1;
      }
    }, B = (R) => {
      a.value = R;
    }, ee = async () => {
      await t.close();
    };
    return St(async () => {
      await rt(), await nt();
    }), Dn(() => {
    }), (R, ue) => ($(), z("main", cf, [
      L(Td, {
        "active-view": u(g),
        "wallhaven-source": u(k),
        "wallhaven-loading": u(T),
        onBack: u(Xe),
        onClose: ee,
        onOpenWallhaven: u(Q),
        onSetWallhavenSource: u(Re)
      }, null, 8, ["active-view", "wallhaven-source", "wallhaven-loading", "onBack", "onOpenWallhaven", "onSetWallhavenSource"]),
      u(r) && !u(r).supported ? ($(), z(
        "section",
        uf,
        W(u(n)("wallpaperSwitcher.unsupported")),
        1
        /* TEXT */
      )) : _e("v-if", !0),
      u(g) === "switcher" ? ($(), Se(gd, {
        key: 1,
        config: u(a),
        loading: u(s),
        "preview-src": u(je),
        "current-wallpaper-name": u(at),
        "source-label": u(re),
        "resolution-label": u(x),
        "next-switch-label": u(ge),
        "folder-count-label": u(Ve),
        "cache-size-label": u(Ue),
        switching: u(i),
        "clearing-cache": u(h),
        "opening-cache": u(_),
        saving: u(o),
        onUpdateConfig: B,
        onChooseImage: d,
        onChooseFolder: F,
        onScanFolder: S,
        onOpenWallhavenGrid: u(Q),
        onSwitchNow: J,
        onSetCurrentAsFixed: j,
        onClearCache: p,
        onOpenCacheDir: N,
        onPersistConfig: c
      }, null, 8, ["config", "loading", "preview-src", "current-wallpaper-name", "source-label", "resolution-label", "next-switch-label", "folder-count-label", "cache-size-label", "switching", "clearing-cache", "opening-cache", "saving", "onOpenWallhavenGrid"])) : ($(), Se(Qd, {
        key: 2,
        keyword: u(v),
        "onUpdate:keyword": ue[0] || (ue[0] = (He) => er(v) ? v.value = He : null),
        category: u(y),
        loading: u(T),
        error: u(f),
        wallpapers: u(ce),
        "loaded-thumb-ids": u(X),
        "working-ids": u(Z),
        page: u(P),
        "last-page": u(w),
        "source-label": u(ie),
        "screen-label": u(ze),
        "set-thumb-ref": u(we),
        onRefresh: u(Me),
        onSetCategory: u($e),
        onOpenPreview: u(Je),
        onMarkThumbLoaded: u(et),
        onSetWallpaper: u(De),
        onDownloadWallpaper: u(xe),
        onPrevPage: u(ht),
        onNextPage: u(tt)
      }, null, 8, ["keyword", "category", "loading", "error", "wallpapers", "loaded-thumb-ids", "working-ids", "page", "last-page", "source-label", "screen-label", "set-thumb-ref", "onRefresh", "onSetCategory", "onOpenPreview", "onMarkThumbLoaded", "onSetWallpaper", "onDownloadWallpaper", "onPrevPage", "onNextPage"])),
      L(of, {
        wallpaper: u(O),
        loading: u(A),
        "load-failed": u(b),
        "working-ids": u(Z),
        onClose: u(qe),
        onLoaded: u(ye),
        onFailed: u(Qe),
        onDownload: u(xe),
        onSetWallpaper: u(De)
      }, null, 8, ["wallpaper", "loading", "load-failed", "working-ids", "onClose", "onLoaded", "onFailed", "onDownload", "onSetWallpaper"])
    ]));
  }
}), ff = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: df
}, Symbol.toStringTag, { value: "Module" }));
export {
  mf as activate
};
