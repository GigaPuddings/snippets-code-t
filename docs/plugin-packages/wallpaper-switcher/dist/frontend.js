import * as gn from "vue";
import { inject as Qe, ref as V, shallowRef as fs, computed as $, watch as wt, onMounted as Et, onUnmounted as zn, defineComponent as ue, h as sa, createVNode as T, Text as hs, Fragment as $t, getCurrentInstance as vt, unref as s, readonly as ps, getCurrentScope as ms, onScopeDispose as gs, nextTick as la, isRef as ia, warn as _s, provide as ws, createElementBlock as K, openBlock as U, mergeProps as vs, renderSlot as bt, createElementVNode as h, normalizeClass as H, Transition as Un, withCtx as ot, withDirectives as Me, normalizeStyle as qt, createTextVNode as fe, toDisplayString as P, vShow as Qt, shallowReactive as bs, createBlock as Ue, createCommentVNode as ke, resolveDynamicComponent as oa, withModifiers as _t, isVNode as Mt, render as en, withKeys as _n, vModelText as zt, vModelCheckbox as rr, renderList as ys } from "vue";
const kf = (e) => {
  e.registerRoute({
    target: "window",
    path: "/wallpaper-switcher",
    name: "WallpaperSwitcher",
    component: () => Promise.resolve().then(() => bf)
  }), e.registerWindowShortcut({
    label: "wallpaper_switcher"
  });
};
function ks(e, t, n, r) {
  if (typeof t == "function" ? e !== t || !0 : !t.has(e)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
  return n === "m" ? r : n === "a" ? r.call(e) : r ? r.value : t.get(e);
}
function Cs(e, t, n, r, a) {
  if (typeof t == "function" ? e !== t || !0 : !t.has(e)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
  return t.set(e, n), n;
}
var Bt;
const Se = "__TAURI_TO_IPC_KEY__";
function Ss(e, t = !1) {
  return window.__TAURI_INTERNALS__.transformCallback(e, t);
}
async function E(e, t = {}, n) {
  return window.__TAURI_INTERNALS__.invoke(e, t, n);
}
function Ls(e, t = "asset") {
  return window.__TAURI_INTERNALS__.convertFileSrc(e, t);
}
class Es {
  get rid() {
    return ks(this, Bt, "f");
  }
  constructor(t) {
    Bt.set(this, void 0), Cs(this, Bt, t);
  }
  /**
   * Destroys and cleans up this resource from memory.
   * **You should not call any method on this object anymore and should drop any reference to it.**
   */
  async close() {
    return E("plugin:resources|close", {
      rid: this.rid
    });
  }
}
Bt = /* @__PURE__ */ new WeakMap();
class ca {
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
    return new Pt(this.width * t, this.height * t);
  }
  [Se]() {
    return {
      width: this.width,
      height: this.height
    };
  }
  toJSON() {
    return this[Se]();
  }
}
class Pt {
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
    return new ca(this.width / t, this.height / t);
  }
  [Se]() {
    return {
      width: this.width,
      height: this.height
    };
  }
  toJSON() {
    return this[Se]();
  }
}
class mt {
  constructor(t) {
    this.size = t;
  }
  toLogical(t) {
    return this.size instanceof ca ? this.size : this.size.toLogical(t);
  }
  toPhysical(t) {
    return this.size instanceof Pt ? this.size : this.size.toPhysical(t);
  }
  [Se]() {
    return {
      [`${this.size.type}`]: {
        width: this.size.width,
        height: this.size.height
      }
    };
  }
  toJSON() {
    return this[Se]();
  }
}
class ua {
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
    return new qe(this.x * t, this.y * t);
  }
  [Se]() {
    return {
      x: this.x,
      y: this.y
    };
  }
  toJSON() {
    return this[Se]();
  }
}
class qe {
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
    return new ua(this.x / t, this.y / t);
  }
  [Se]() {
    return {
      x: this.x,
      y: this.y
    };
  }
  toJSON() {
    return this[Se]();
  }
}
class Ut {
  constructor(t) {
    this.position = t;
  }
  toLogical(t) {
    return this.position instanceof ua ? this.position : this.position.toLogical(t);
  }
  toPhysical(t) {
    return this.position instanceof qe ? this.position : this.position.toPhysical(t);
  }
  [Se]() {
    return {
      [`${this.position.type}`]: {
        x: this.position.x,
        y: this.position.y
      }
    };
  }
  toJSON() {
    return this[Se]();
  }
}
var ye;
(function(e) {
  e.WINDOW_RESIZED = "tauri://resize", e.WINDOW_MOVED = "tauri://move", e.WINDOW_CLOSE_REQUESTED = "tauri://close-requested", e.WINDOW_DESTROYED = "tauri://destroyed", e.WINDOW_FOCUS = "tauri://focus", e.WINDOW_BLUR = "tauri://blur", e.WINDOW_SCALE_FACTOR_CHANGED = "tauri://scale-change", e.WINDOW_THEME_CHANGED = "tauri://theme-changed", e.WINDOW_CREATED = "tauri://window-created", e.WEBVIEW_CREATED = "tauri://webview-created", e.DRAG_ENTER = "tauri://drag-enter", e.DRAG_OVER = "tauri://drag-over", e.DRAG_DROP = "tauri://drag-drop", e.DRAG_LEAVE = "tauri://drag-leave";
})(ye || (ye = {}));
async function da(e, t) {
  await E("plugin:event|unlisten", {
    event: e,
    eventId: t
  });
}
async function tn(e, t, n) {
  var r;
  const a = typeof n?.target == "string" ? { kind: "AnyLabel", label: n.target } : (r = n?.target) !== null && r !== void 0 ? r : { kind: "Any" };
  return E("plugin:event|listen", {
    event: e,
    target: a,
    handler: Ss(t)
  }).then((l) => async () => da(e, l));
}
async function Ts(e, t, n) {
  return tn(e, (r) => {
    da(e, r.id), t(r);
  }, n);
}
async function Ns(e, t) {
  await E("plugin:event|emit", {
    event: e,
    payload: t
  });
}
async function Is(e, t, n) {
  await E("plugin:event|emit_to", {
    target: typeof e == "string" ? { kind: "AnyLabel", label: e } : e,
    event: t,
    payload: n
  });
}
class At extends Es {
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
    return E("plugin:image|new", {
      rgba: nn(t),
      width: n,
      height: r
    }).then((a) => new At(a));
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
    return E("plugin:image|from_bytes", {
      bytes: nn(t)
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
    return E("plugin:image|from_path", { path: t }).then((n) => new At(n));
  }
  /** Returns the RGBA data for this image, in row-major order from top to bottom.  */
  async rgba() {
    return E("plugin:image|rgba", {
      rid: this.rid
    }).then((t) => new Uint8Array(t));
  }
  /** Returns the size of this image.  */
  async size() {
    return E("plugin:image|size", { rid: this.rid });
  }
}
function nn(e) {
  return e == null ? null : typeof e == "string" ? e : e instanceof At ? e.rid : e;
}
var En;
(function(e) {
  e[e.Critical = 1] = "Critical", e[e.Informational = 2] = "Informational";
})(En || (En = {}));
class Os {
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
var ar;
(function(e) {
  e.None = "none", e.Normal = "normal", e.Indeterminate = "indeterminate", e.Paused = "paused", e.Error = "error";
})(ar || (ar = {}));
function fa() {
  return new ha(window.__TAURI_INTERNALS__.metadata.currentWindow.label, {
    // @ts-expect-error `skip` is not defined in the public API but it is handled by the constructor
    skip: !0
  });
}
async function wn() {
  return E("plugin:window|get_all_windows").then((e) => e.map((t) => new ha(t, {
    // @ts-expect-error `skip` is not defined in the public API but it is handled by the constructor
    skip: !0
  })));
}
const vn = ["tauri://created", "tauri://error"];
class ha {
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
    this.label = t, this.listeners = /* @__PURE__ */ Object.create(null), n?.skip || E("plugin:window|create", {
      options: {
        ...n,
        parent: typeof n.parent == "string" ? n.parent : (r = n.parent) === null || r === void 0 ? void 0 : r.label,
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
    return (n = (await wn()).find((r) => r.label === t)) !== null && n !== void 0 ? n : null;
  }
  /**
   * Get an instance of `Window` for the current window.
   */
  static getCurrent() {
    return fa();
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
      const r = this.listeners[t];
      r.splice(r.indexOf(n), 1);
    } : tn(t, n, {
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
    } : Ts(t, n, {
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
      for (const r of this.listeners[t] || [])
        r({
          event: t,
          id: -1,
          payload: n
        });
      return;
    }
    return Ns(t, n);
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
    if (vn.includes(n)) {
      for (const a of this.listeners[n] || [])
        a({
          event: n,
          id: -1,
          payload: r
        });
      return;
    }
    return Is(t, n, r);
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
    return E("plugin:window|scale_factor", {
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
    return E("plugin:window|inner_position", {
      label: this.label
    }).then((t) => new qe(t));
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
    return E("plugin:window|outer_position", {
      label: this.label
    }).then((t) => new qe(t));
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
    return E("plugin:window|inner_size", {
      label: this.label
    }).then((t) => new Pt(t));
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
    return E("plugin:window|outer_size", {
      label: this.label
    }).then((t) => new Pt(t));
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
    return E("plugin:window|is_fullscreen", {
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
    return E("plugin:window|is_minimized", {
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
    return E("plugin:window|is_maximized", {
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
    return E("plugin:window|is_focused", {
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
    return E("plugin:window|is_decorated", {
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
    return E("plugin:window|is_resizable", {
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
    return E("plugin:window|is_maximizable", {
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
    return E("plugin:window|is_minimizable", {
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
    return E("plugin:window|is_closable", {
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
    return E("plugin:window|is_visible", {
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
    return E("plugin:window|title", {
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
    return E("plugin:window|theme", {
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
    return E("plugin:window|is_always_on_top", {
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
    return E("plugin:window|center", {
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
    return t && (t === En.Critical ? n = { type: "Critical" } : n = { type: "Informational" }), E("plugin:window|request_user_attention", {
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
    return E("plugin:window|set_resizable", {
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
    return E("plugin:window|set_enabled", {
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
    return E("plugin:window|is_enabled", {
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
    return E("plugin:window|set_maximizable", {
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
    return E("plugin:window|set_minimizable", {
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
    return E("plugin:window|set_closable", {
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
    return E("plugin:window|set_title", {
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
    return E("plugin:window|maximize", {
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
    return E("plugin:window|unmaximize", {
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
    return E("plugin:window|toggle_maximize", {
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
    return E("plugin:window|minimize", {
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
    return E("plugin:window|unminimize", {
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
    return E("plugin:window|show", {
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
    return E("plugin:window|hide", {
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
    return E("plugin:window|close", {
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
    return E("plugin:window|destroy", {
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
    return E("plugin:window|set_decorations", {
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
    return E("plugin:window|set_shadow", {
      label: this.label,
      value: t
    });
  }
  /**
   * Set window effects.
   */
  async setEffects(t) {
    return E("plugin:window|set_effects", {
      label: this.label,
      value: t
    });
  }
  /**
   * Clear any applied effects if possible.
   */
  async clearEffects() {
    return E("plugin:window|set_effects", {
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
    return E("plugin:window|set_always_on_top", {
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
    return E("plugin:window|set_always_on_bottom", {
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
    return E("plugin:window|set_content_protected", {
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
    return E("plugin:window|set_size", {
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
    return E("plugin:window|set_min_size", {
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
    return E("plugin:window|set_max_size", {
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
    function n(r) {
      return r ? { Logical: r } : null;
    }
    return E("plugin:window|set_size_constraints", {
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
    return E("plugin:window|set_position", {
      label: this.label,
      value: t instanceof Ut ? t : new Ut(t)
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
    return E("plugin:window|set_fullscreen", {
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
    return E("plugin:window|set_focus", {
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
    return E("plugin:window|set_icon", {
      label: this.label,
      value: nn(t)
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
    return E("plugin:window|set_skip_taskbar", {
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
    return E("plugin:window|set_cursor_grab", {
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
    return E("plugin:window|set_cursor_visible", {
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
    return E("plugin:window|set_cursor_icon", {
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
    return E("plugin:window|set_background_color", { color: t });
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
    return E("plugin:window|set_cursor_position", {
      label: this.label,
      value: t instanceof Ut ? t : new Ut(t)
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
    return E("plugin:window|set_ignore_cursor_events", {
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
    return E("plugin:window|start_dragging", {
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
    return E("plugin:window|start_resize_dragging", {
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
    return E("plugin:window|set_badge_count", {
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
    return E("plugin:window|set_badge_label", {
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
    return E("plugin:window|set_overlay_icon", {
      label: this.label,
      value: t ? nn(t) : void 0
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
    return E("plugin:window|set_progress_bar", {
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
    return E("plugin:window|set_visible_on_all_workspaces", {
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
    return E("plugin:window|set_title_bar_style", {
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
    return E("plugin:window|set_theme", {
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
    return this.listen(ye.WINDOW_RESIZED, (n) => {
      n.payload = new Pt(n.payload), t(n);
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
    return this.listen(ye.WINDOW_MOVED, (n) => {
      n.payload = new qe(n.payload), t(n);
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
    return this.listen(ye.WINDOW_CLOSE_REQUESTED, async (n) => {
      const r = new Os(n);
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
    const n = await this.listen(ye.DRAG_ENTER, (i) => {
      t({
        ...i,
        payload: {
          type: "enter",
          paths: i.payload.paths,
          position: new qe(i.payload.position)
        }
      });
    }), r = await this.listen(ye.DRAG_OVER, (i) => {
      t({
        ...i,
        payload: {
          type: "over",
          position: new qe(i.payload.position)
        }
      });
    }), a = await this.listen(ye.DRAG_DROP, (i) => {
      t({
        ...i,
        payload: {
          type: "drop",
          paths: i.payload.paths,
          position: new qe(i.payload.position)
        }
      });
    }), l = await this.listen(ye.DRAG_LEAVE, (i) => {
      t({ ...i, payload: { type: "leave" } });
    });
    return () => {
      n(), a(), r(), l();
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
    const n = await this.listen(ye.WINDOW_FOCUS, (a) => {
      t({ ...a, payload: !0 });
    }), r = await this.listen(ye.WINDOW_BLUR, (a) => {
      t({ ...a, payload: !1 });
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
    return this.listen(ye.WINDOW_SCALE_FACTOR_CHANGED, t);
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
    return this.listen(ye.WINDOW_THEME_CHANGED, t);
  }
}
var sr;
(function(e) {
  e.Disabled = "disabled", e.Throttle = "throttle", e.Suspend = "suspend";
})(sr || (sr = {}));
var lr;
(function(e) {
  e.AppearanceBased = "appearanceBased", e.Light = "light", e.Dark = "dark", e.MediumLight = "mediumLight", e.UltraDark = "ultraDark", e.Titlebar = "titlebar", e.Selection = "selection", e.Menu = "menu", e.Popover = "popover", e.Sidebar = "sidebar", e.HeaderView = "headerView", e.Sheet = "sheet", e.WindowBackground = "windowBackground", e.HudWindow = "hudWindow", e.FullScreenUI = "fullScreenUI", e.Tooltip = "tooltip", e.ContentBackground = "contentBackground", e.UnderWindowBackground = "underWindowBackground", e.UnderPageBackground = "underPageBackground", e.Mica = "mica", e.Blur = "blur", e.Acrylic = "acrylic", e.Tabbed = "tabbed", e.TabbedDark = "tabbedDark", e.TabbedLight = "tabbedLight";
})(lr || (lr = {}));
var ir;
(function(e) {
  e.FollowsWindowActiveState = "followsWindowActiveState", e.Active = "active", e.Inactive = "inactive";
})(ir || (ir = {}));
async function or(e = {}) {
  return typeof e == "object" && Object.freeze(e), await E("plugin:dialog|open", { options: e });
}
/*!
  * shared v11.2.2
  * (c) 2025 kazuya kawaguchi
  * Released under the MIT License.
  */
function Ps(e, t) {
  typeof console < "u" && (console.warn("[intlify] " + e), t && console.warn(t.stack));
}
const cr = typeof window < "u", ft = (e, t = !1) => t ? Symbol.for(e) : Symbol(e), As = (e, t, n) => Ms({ l: e, k: t, s: n }), Ms = (e) => JSON.stringify(e).replace(/\u2028/g, "\\u2028").replace(/\u2029/g, "\\u2029").replace(/\u0027/g, "\\u0027"), ce = (e) => typeof e == "number" && isFinite(e), Fs = (e) => Vn(e) === "[object Date]", rn = (e) => Vn(e) === "[object RegExp]", un = (e) => Y(e) && Object.keys(e).length === 0, he = Object.assign, Rs = Object.create, q = (e = null) => Rs(e);
let ur;
const Yt = () => ur || (ur = typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : typeof window < "u" ? window : typeof global < "u" ? global : q());
function dr(e) {
  return e.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;").replace(/'/g, "&apos;").replace(/\//g, "&#x2F;").replace(/=/g, "&#x3D;");
}
function fr(e) {
  return e.replace(/&(?![a-zA-Z0-9#]{2,6};)/g, "&amp;").replace(/"/g, "&quot;").replace(/'/g, "&apos;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
}
function xs(e) {
  return e = e.replace(/(\w+)\s*=\s*"([^"]*)"/g, (r, a, l) => `${a}="${fr(l)}"`), e = e.replace(/(\w+)\s*=\s*'([^']*)'/g, (r, a, l) => `${a}='${fr(l)}'`), /\s*on\w+\s*=\s*["']?[^"'>]+["']?/gi.test(e) && (e = e.replace(/(\s+)(on)(\w+\s*=)/gi, "$1&#111;n$3")), [
    // In href, src, action, formaction attributes
    /(\s+(?:href|src|action|formaction)\s*=\s*["']?)\s*javascript:/gi,
    // In style attributes within url()
    /(style\s*=\s*["'][^"']*url\s*\(\s*)javascript:/gi
  ].forEach((r) => {
    e = e.replace(r, "$1javascript&#58;");
  }), e;
}
const Ws = Object.prototype.hasOwnProperty;
function Te(e, t) {
  return Ws.call(e, t);
}
const ie = Array.isArray, ae = (e) => typeof e == "function", x = (e) => typeof e == "string", le = (e) => typeof e == "boolean", Z = (e) => e !== null && typeof e == "object", Ds = (e) => Z(e) && ae(e.then) && ae(e.catch), pa = Object.prototype.toString, Vn = (e) => pa.call(e), Y = (e) => Vn(e) === "[object Object]", $s = (e) => e == null ? "" : ie(e) || Y(e) && e.toString === pa ? JSON.stringify(e, null, 2) : String(e);
function Hn(e, t = "") {
  return e.reduce((n, r, a) => a === 0 ? n + r : n + t + r, "");
}
const Vt = (e) => !Z(e) || ie(e);
function Zt(e, t) {
  if (Vt(e) || Vt(t))
    throw new Error("Invalid value");
  const n = [{ src: e, des: t }];
  for (; n.length; ) {
    const { src: r, des: a } = n.pop();
    Object.keys(r).forEach((l) => {
      l !== "__proto__" && (Z(r[l]) && !Z(a[l]) && (a[l] = Array.isArray(r[l]) ? [] : q()), Vt(a[l]) || Vt(r[l]) ? a[l] = r[l] : n.push({ src: r[l], des: a[l] }));
    });
  }
}
/*!
  * message-compiler v11.2.2
  * (c) 2025 kazuya kawaguchi
  * Released under the MIT License.
  */
function js(e, t, n) {
  return { line: e, column: t, offset: n };
}
function Tn(e, t, n) {
  return { start: e, end: t };
}
const X = {
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
}, zs = 17;
function dn(e, t, n = {}) {
  const { domain: r, messages: a, args: l } = n, i = e, u = new SyntaxError(String(i));
  return u.code = e, t && (u.location = t), u.domain = r, u;
}
function Us(e) {
  throw e;
}
const Pe = " ", Vs = "\r", me = `
`, Hs = "\u2028", Gs = "\u2029";
function Ks(e) {
  const t = e;
  let n = 0, r = 1, a = 1, l = 0;
  const i = (w) => t[w] === Vs && t[w + 1] === me, u = (w) => t[w] === me, d = (w) => t[w] === Gs, p = (w) => t[w] === Hs, v = (w) => i(w) || u(w) || d(w) || p(w), C = () => n, N = () => r, A = () => a, W = () => l, k = (w) => i(w) || d(w) || p(w) ? me : t[w], y = () => k(n), f = () => k(n + l);
  function g() {
    return l = 0, v(n) && (r++, a = 0), i(n) && n++, n++, a++, t[n];
  }
  function _() {
    return i(n + l) && l++, l++, t[n + l];
  }
  function b() {
    n = 0, r = 1, a = 1, l = 0;
  }
  function O(w = 0) {
    l = w;
  }
  function M() {
    const w = n + l;
    for (; w !== n; )
      g();
    l = 0;
  }
  return {
    index: C,
    line: N,
    column: A,
    peekOffset: W,
    charAt: k,
    currentChar: y,
    currentPeek: f,
    next: g,
    peek: _,
    reset: b,
    resetPeek: O,
    skipToPeek: M
  };
}
const ze = void 0, Bs = ".", hr = "'", Ys = "tokenizer";
function Zs(e, t = {}) {
  const n = t.location !== !1, r = Ks(e), a = () => r.index(), l = () => js(r.line(), r.column(), r.index()), i = l(), u = a(), d = {
    currentType: 13,
    offset: u,
    startLoc: i,
    endLoc: i,
    lastType: 13,
    lastOffset: u,
    lastStartLoc: i,
    lastEndLoc: i,
    braceNest: 0,
    inLinked: !1,
    text: ""
  }, p = () => d, { onError: v } = t;
  function C(o, c, L, ...R) {
    const te = p();
    if (c.column += L, c.offset += L, v) {
      const j = n ? Tn(te.startLoc, c) : null, m = dn(o, j, {
        domain: Ys,
        args: R
      });
      v(m);
    }
  }
  function N(o, c, L) {
    o.endLoc = l(), o.currentType = c;
    const R = { type: c };
    return n && (R.loc = Tn(o.startLoc, o.endLoc)), L != null && (R.value = L), R;
  }
  const A = (o) => N(
    o,
    13
    /* TokenTypes.EOF */
  );
  function W(o, c) {
    return o.currentChar() === c ? (o.next(), c) : (C(X.EXPECTED_TOKEN, l(), 0, c), "");
  }
  function k(o) {
    let c = "";
    for (; o.currentPeek() === Pe || o.currentPeek() === me; )
      c += o.currentPeek(), o.peek();
    return c;
  }
  function y(o) {
    const c = k(o);
    return o.skipToPeek(), c;
  }
  function f(o) {
    if (o === ze)
      return !1;
    const c = o.charCodeAt(0);
    return c >= 97 && c <= 122 || // a-z
    c >= 65 && c <= 90 || // A-Z
    c === 95;
  }
  function g(o) {
    if (o === ze)
      return !1;
    const c = o.charCodeAt(0);
    return c >= 48 && c <= 57;
  }
  function _(o, c) {
    const { currentType: L } = c;
    if (L !== 2)
      return !1;
    k(o);
    const R = f(o.currentPeek());
    return o.resetPeek(), R;
  }
  function b(o, c) {
    const { currentType: L } = c;
    if (L !== 2)
      return !1;
    k(o);
    const R = o.currentPeek() === "-" ? o.peek() : o.currentPeek(), te = g(R);
    return o.resetPeek(), te;
  }
  function O(o, c) {
    const { currentType: L } = c;
    if (L !== 2)
      return !1;
    k(o);
    const R = o.currentPeek() === hr;
    return o.resetPeek(), R;
  }
  function M(o, c) {
    const { currentType: L } = c;
    if (L !== 7)
      return !1;
    k(o);
    const R = o.currentPeek() === ".";
    return o.resetPeek(), R;
  }
  function w(o, c) {
    const { currentType: L } = c;
    if (L !== 8)
      return !1;
    k(o);
    const R = f(o.currentPeek());
    return o.resetPeek(), R;
  }
  function B(o, c) {
    const { currentType: L } = c;
    if (!(L === 7 || L === 11))
      return !1;
    k(o);
    const R = o.currentPeek() === ":";
    return o.resetPeek(), R;
  }
  function Q(o, c) {
    const { currentType: L } = c;
    if (L !== 9)
      return !1;
    const R = () => {
      const j = o.currentPeek();
      return j === "{" ? f(o.peek()) : j === "@" || j === "|" || j === ":" || j === "." || j === Pe || !j ? !1 : j === me ? (o.peek(), R()) : oe(o, !1);
    }, te = R();
    return o.resetPeek(), te;
  }
  function de(o) {
    k(o);
    const c = o.currentPeek() === "|";
    return o.resetPeek(), c;
  }
  function oe(o, c = !0) {
    const L = (te = !1, j = "") => {
      const m = o.currentPeek();
      return m === "{" || m === "@" || !m ? te : m === "|" ? !(j === Pe || j === me) : m === Pe ? (o.peek(), L(!0, Pe)) : m === me ? (o.peek(), L(!0, me)) : !0;
    }, R = L();
    return c && o.resetPeek(), R;
  }
  function ee(o, c) {
    const L = o.currentChar();
    return L === ze ? ze : c(L) ? (o.next(), L) : null;
  }
  function Ke(o) {
    const c = o.charCodeAt(0);
    return c >= 97 && c <= 122 || // a-z
    c >= 65 && c <= 90 || // A-Z
    c >= 48 && c <= 57 || // 0-9
    c === 95 || // _
    c === 36;
  }
  function Be(o) {
    return ee(o, Ke);
  }
  function Ie(o) {
    const c = o.charCodeAt(0);
    return c >= 97 && c <= 122 || // a-z
    c >= 65 && c <= 90 || // A-Z
    c >= 48 && c <= 57 || // 0-9
    c === 95 || // _
    c === 36 || // $
    c === 45;
  }
  function we(o) {
    return ee(o, Ie);
  }
  function Ye(o) {
    const c = o.charCodeAt(0);
    return c >= 48 && c <= 57;
  }
  function nt(o) {
    return ee(o, Ye);
  }
  function ve(o) {
    const c = o.charCodeAt(0);
    return c >= 48 && c <= 57 || // 0-9
    c >= 65 && c <= 70 || // A-F
    c >= 97 && c <= 102;
  }
  function be(o) {
    return ee(o, ve);
  }
  function Le(o) {
    let c = "", L = "";
    for (; c = nt(o); )
      L += c;
    return L;
  }
  function Oe(o) {
    let c = "";
    for (; ; ) {
      const L = o.currentChar();
      if (L === "{" || L === "}" || L === "@" || L === "|" || !L)
        break;
      if (L === Pe || L === me)
        if (oe(o))
          c += L, o.next();
        else {
          if (de(o))
            break;
          c += L, o.next();
        }
      else
        c += L, o.next();
    }
    return c;
  }
  function Re(o) {
    y(o);
    let c = "", L = "";
    for (; c = we(o); )
      L += c;
    const R = o.currentChar();
    if (R && R !== "}" && R !== ze && R !== Pe && R !== me && R !== "　") {
      const te = We(o);
      return C(X.INVALID_TOKEN_IN_PLACEHOLDER, l(), 0, L + te), L + te;
    }
    return o.currentChar() === ze && C(X.UNTERMINATED_CLOSING_BRACE, l(), 0), L;
  }
  function Ze(o) {
    y(o);
    let c = "";
    return o.currentChar() === "-" ? (o.next(), c += `-${Le(o)}`) : c += Le(o), o.currentChar() === ze && C(X.UNTERMINATED_CLOSING_BRACE, l(), 0), c;
  }
  function rt(o) {
    return o !== hr && o !== me;
  }
  function Xe(o) {
    y(o), W(o, "'");
    let c = "", L = "";
    for (; c = ee(o, rt); )
      c === "\\" ? L += at(o) : L += c;
    const R = o.currentChar();
    return R === me || R === ze ? (C(X.UNTERMINATED_SINGLE_QUOTE_IN_PLACEHOLDER, l(), 0), R === me && (o.next(), W(o, "'")), L) : (W(o, "'"), L);
  }
  function at(o) {
    const c = o.currentChar();
    switch (c) {
      case "\\":
      case "'":
        return o.next(), `\\${c}`;
      case "u":
        return xe(o, c, 4);
      case "U":
        return xe(o, c, 6);
      default:
        return C(X.UNKNOWN_ESCAPE_SEQUENCE, l(), 0, c), "";
    }
  }
  function xe(o, c, L) {
    W(o, c);
    let R = "";
    for (let te = 0; te < L; te++) {
      const j = be(o);
      if (!j) {
        C(X.INVALID_UNICODE_ESCAPE_SEQUENCE, l(), 0, `\\${c}${R}${o.currentChar()}`);
        break;
      }
      R += j;
    }
    return `\\${c}${R}`;
  }
  function st(o) {
    return o !== "{" && o !== "}" && o !== Pe && o !== me;
  }
  function We(o) {
    y(o);
    let c = "", L = "";
    for (; c = ee(o, st); )
      L += c;
    return L;
  }
  function z(o) {
    let c = "", L = "";
    for (; c = Be(o); )
      L += c;
    return L;
  }
  function G(o) {
    const c = (L) => {
      const R = o.currentChar();
      return R === "{" || R === "@" || R === "|" || R === "(" || R === ")" || !R || R === Pe ? L : (L += R, o.next(), c(L));
    };
    return c("");
  }
  function se(o) {
    y(o);
    const c = W(
      o,
      "|"
      /* TokenChars.Pipe */
    );
    return y(o), c;
  }
  function _e(o, c) {
    let L = null;
    switch (o.currentChar()) {
      case "{":
        return c.braceNest >= 1 && C(X.NOT_ALLOW_NEST_PLACEHOLDER, l(), 0), o.next(), L = N(
          c,
          2,
          "{"
          /* TokenChars.BraceLeft */
        ), y(o), c.braceNest++, L;
      case "}":
        return c.braceNest > 0 && c.currentType === 2 && C(X.EMPTY_PLACEHOLDER, l(), 0), o.next(), L = N(
          c,
          3,
          "}"
          /* TokenChars.BraceRight */
        ), c.braceNest--, c.braceNest > 0 && y(o), c.inLinked && c.braceNest === 0 && (c.inLinked = !1), L;
      case "@":
        return c.braceNest > 0 && C(X.UNTERMINATED_CLOSING_BRACE, l(), 0), L = De(o, c) || A(c), c.braceNest = 0, L;
      default: {
        let te = !0, j = !0, m = !0;
        if (de(o))
          return c.braceNest > 0 && C(X.UNTERMINATED_CLOSING_BRACE, l(), 0), L = N(c, 1, se(o)), c.braceNest = 0, c.inLinked = !1, L;
        if (c.braceNest > 0 && (c.currentType === 4 || c.currentType === 5 || c.currentType === 6))
          return C(X.UNTERMINATED_CLOSING_BRACE, l(), 0), c.braceNest = 0, Je(o, c);
        if (te = _(o, c))
          return L = N(c, 4, Re(o)), y(o), L;
        if (j = b(o, c))
          return L = N(c, 5, Ze(o)), y(o), L;
        if (m = O(o, c))
          return L = N(c, 6, Xe(o)), y(o), L;
        if (!te && !j && !m)
          return L = N(c, 12, We(o)), C(X.INVALID_TOKEN_IN_PLACEHOLDER, l(), 0, L.value), y(o), L;
        break;
      }
    }
    return L;
  }
  function De(o, c) {
    const { currentType: L } = c;
    let R = null;
    const te = o.currentChar();
    switch ((L === 7 || L === 8 || L === 11 || L === 9) && (te === me || te === Pe) && C(X.INVALID_LINKED_FORMAT, l(), 0), te) {
      case "@":
        return o.next(), R = N(
          c,
          7,
          "@"
          /* TokenChars.LinkedAlias */
        ), c.inLinked = !0, R;
      case ".":
        return y(o), o.next(), N(
          c,
          8,
          "."
          /* TokenChars.LinkedDot */
        );
      case ":":
        return y(o), o.next(), N(
          c,
          9,
          ":"
          /* TokenChars.LinkedDelimiter */
        );
      default:
        return de(o) ? (R = N(c, 1, se(o)), c.braceNest = 0, c.inLinked = !1, R) : M(o, c) || B(o, c) ? (y(o), De(o, c)) : w(o, c) ? (y(o), N(c, 11, z(o))) : Q(o, c) ? (y(o), te === "{" ? _e(o, c) || R : N(c, 10, G(o))) : (L === 7 && C(X.INVALID_LINKED_FORMAT, l(), 0), c.braceNest = 0, c.inLinked = !1, Je(o, c));
    }
  }
  function Je(o, c) {
    let L = {
      type: 13
      /* TokenTypes.EOF */
    };
    if (c.braceNest > 0)
      return _e(o, c) || A(c);
    if (c.inLinked)
      return De(o, c) || A(c);
    switch (o.currentChar()) {
      case "{":
        return _e(o, c) || A(c);
      case "}":
        return C(X.UNBALANCED_CLOSING_BRACE, l(), 0), o.next(), N(
          c,
          3,
          "}"
          /* TokenChars.BraceRight */
        );
      case "@":
        return De(o, c) || A(c);
      default: {
        if (de(o))
          return L = N(c, 1, se(o)), c.braceNest = 0, c.inLinked = !1, L;
        if (oe(o))
          return N(c, 0, Oe(o));
        break;
      }
    }
    return L;
  }
  function $e() {
    const { currentType: o, offset: c, startLoc: L, endLoc: R } = d;
    return d.lastType = o, d.lastOffset = c, d.lastStartLoc = L, d.lastEndLoc = R, d.offset = a(), d.startLoc = l(), r.currentChar() === ze ? N(
      d,
      13
      /* TokenTypes.EOF */
    ) : Je(r, d);
  }
  return {
    nextToken: $e,
    currentOffset: a,
    currentPosition: l,
    context: p
  };
}
const Xs = "parser", Js = /(?:\\\\|\\'|\\u([0-9a-fA-F]{4})|\\U([0-9a-fA-F]{6}))/g;
function qs(e, t, n) {
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
function Qs(e = {}) {
  const t = e.location !== !1, { onError: n } = e;
  function r(f, g, _, b, ...O) {
    const M = f.currentPosition();
    if (M.offset += b, M.column += b, n) {
      const w = t ? Tn(_, M) : null, B = dn(g, w, {
        domain: Xs,
        args: O
      });
      n(B);
    }
  }
  function a(f, g, _) {
    const b = { type: f };
    return t && (b.start = g, b.end = g, b.loc = { start: _, end: _ }), b;
  }
  function l(f, g, _, b) {
    t && (f.end = g, f.loc && (f.loc.end = _));
  }
  function i(f, g) {
    const _ = f.context(), b = a(3, _.offset, _.startLoc);
    return b.value = g, l(b, f.currentOffset(), f.currentPosition()), b;
  }
  function u(f, g) {
    const _ = f.context(), { lastOffset: b, lastStartLoc: O } = _, M = a(5, b, O);
    return M.index = parseInt(g, 10), f.nextToken(), l(M, f.currentOffset(), f.currentPosition()), M;
  }
  function d(f, g) {
    const _ = f.context(), { lastOffset: b, lastStartLoc: O } = _, M = a(4, b, O);
    return M.key = g, f.nextToken(), l(M, f.currentOffset(), f.currentPosition()), M;
  }
  function p(f, g) {
    const _ = f.context(), { lastOffset: b, lastStartLoc: O } = _, M = a(9, b, O);
    return M.value = g.replace(Js, qs), f.nextToken(), l(M, f.currentOffset(), f.currentPosition()), M;
  }
  function v(f) {
    const g = f.nextToken(), _ = f.context(), { lastOffset: b, lastStartLoc: O } = _, M = a(8, b, O);
    return g.type !== 11 ? (r(f, X.UNEXPECTED_EMPTY_LINKED_MODIFIER, _.lastStartLoc, 0), M.value = "", l(M, b, O), {
      nextConsumeToken: g,
      node: M
    }) : (g.value == null && r(f, X.UNEXPECTED_LEXICAL_ANALYSIS, _.lastStartLoc, 0, Ae(g)), M.value = g.value || "", l(M, f.currentOffset(), f.currentPosition()), {
      node: M
    });
  }
  function C(f, g) {
    const _ = f.context(), b = a(7, _.offset, _.startLoc);
    return b.value = g, l(b, f.currentOffset(), f.currentPosition()), b;
  }
  function N(f) {
    const g = f.context(), _ = a(6, g.offset, g.startLoc);
    let b = f.nextToken();
    if (b.type === 8) {
      const O = v(f);
      _.modifier = O.node, b = O.nextConsumeToken || f.nextToken();
    }
    switch (b.type !== 9 && r(f, X.UNEXPECTED_LEXICAL_ANALYSIS, g.lastStartLoc, 0, Ae(b)), b = f.nextToken(), b.type === 2 && (b = f.nextToken()), b.type) {
      case 10:
        b.value == null && r(f, X.UNEXPECTED_LEXICAL_ANALYSIS, g.lastStartLoc, 0, Ae(b)), _.key = C(f, b.value || "");
        break;
      case 4:
        b.value == null && r(f, X.UNEXPECTED_LEXICAL_ANALYSIS, g.lastStartLoc, 0, Ae(b)), _.key = d(f, b.value || "");
        break;
      case 5:
        b.value == null && r(f, X.UNEXPECTED_LEXICAL_ANALYSIS, g.lastStartLoc, 0, Ae(b)), _.key = u(f, b.value || "");
        break;
      case 6:
        b.value == null && r(f, X.UNEXPECTED_LEXICAL_ANALYSIS, g.lastStartLoc, 0, Ae(b)), _.key = p(f, b.value || "");
        break;
      default: {
        r(f, X.UNEXPECTED_EMPTY_LINKED_KEY, g.lastStartLoc, 0);
        const O = f.context(), M = a(7, O.offset, O.startLoc);
        return M.value = "", l(M, O.offset, O.startLoc), _.key = M, l(_, O.offset, O.startLoc), {
          nextConsumeToken: b,
          node: _
        };
      }
    }
    return l(_, f.currentOffset(), f.currentPosition()), {
      node: _
    };
  }
  function A(f) {
    const g = f.context(), _ = g.currentType === 1 ? f.currentOffset() : g.offset, b = g.currentType === 1 ? g.endLoc : g.startLoc, O = a(2, _, b);
    O.items = [];
    let M = null;
    do {
      const Q = M || f.nextToken();
      switch (M = null, Q.type) {
        case 0:
          Q.value == null && r(f, X.UNEXPECTED_LEXICAL_ANALYSIS, g.lastStartLoc, 0, Ae(Q)), O.items.push(i(f, Q.value || ""));
          break;
        case 5:
          Q.value == null && r(f, X.UNEXPECTED_LEXICAL_ANALYSIS, g.lastStartLoc, 0, Ae(Q)), O.items.push(u(f, Q.value || ""));
          break;
        case 4:
          Q.value == null && r(f, X.UNEXPECTED_LEXICAL_ANALYSIS, g.lastStartLoc, 0, Ae(Q)), O.items.push(d(f, Q.value || ""));
          break;
        case 6:
          Q.value == null && r(f, X.UNEXPECTED_LEXICAL_ANALYSIS, g.lastStartLoc, 0, Ae(Q)), O.items.push(p(f, Q.value || ""));
          break;
        case 7: {
          const de = N(f);
          O.items.push(de.node), M = de.nextConsumeToken || null;
          break;
        }
      }
    } while (g.currentType !== 13 && g.currentType !== 1);
    const w = g.currentType === 1 ? g.lastOffset : f.currentOffset(), B = g.currentType === 1 ? g.lastEndLoc : f.currentPosition();
    return l(O, w, B), O;
  }
  function W(f, g, _, b) {
    const O = f.context();
    let M = b.items.length === 0;
    const w = a(1, g, _);
    w.cases = [], w.cases.push(b);
    do {
      const B = A(f);
      M || (M = B.items.length === 0), w.cases.push(B);
    } while (O.currentType !== 13);
    return M && r(f, X.MUST_HAVE_MESSAGES_IN_PLURAL, _, 0), l(w, f.currentOffset(), f.currentPosition()), w;
  }
  function k(f) {
    const g = f.context(), { offset: _, startLoc: b } = g, O = A(f);
    return g.currentType === 13 ? O : W(f, _, b, O);
  }
  function y(f) {
    const g = Zs(f, he({}, e)), _ = g.context(), b = a(0, _.offset, _.startLoc);
    return t && b.loc && (b.loc.source = f), b.body = k(g), e.onCacheKey && (b.cacheKey = e.onCacheKey(f)), _.currentType !== 13 && r(g, X.UNEXPECTED_LEXICAL_ANALYSIS, _.lastStartLoc, 0, f[_.offset] || ""), l(b, g.currentOffset(), g.currentPosition()), b;
  }
  return { parse: y };
}
function Ae(e) {
  if (e.type === 13)
    return "EOF";
  const t = (e.value || "").replace(/\r?\n/gu, "\\n");
  return t.length > 10 ? t.slice(0, 9) + "…" : t;
}
function el(e, t = {}) {
  const n = {
    ast: e,
    helpers: /* @__PURE__ */ new Set()
  };
  return { context: () => n, helper: (l) => (n.helpers.add(l), l) };
}
function pr(e, t) {
  for (let n = 0; n < e.length; n++)
    Gn(e[n], t);
}
function Gn(e, t) {
  switch (e.type) {
    case 1:
      pr(e.cases, t), t.helper(
        "plural"
        /* HelperNameMap.PLURAL */
      );
      break;
    case 2:
      pr(e.items, t);
      break;
    case 6: {
      Gn(e.key, t), t.helper(
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
function tl(e, t = {}) {
  const n = el(e);
  n.helper(
    "normalize"
    /* HelperNameMap.NORMALIZE */
  ), e.body && Gn(e.body, n);
  const r = n.context();
  e.helpers = Array.from(r.helpers);
}
function nl(e) {
  const t = e.body;
  return t.type === 2 ? mr(t) : t.cases.forEach((n) => mr(n)), e;
}
function mr(e) {
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
      e.static = Hn(t);
      for (let n = 0; n < e.items.length; n++) {
        const r = e.items[n];
        (r.type === 3 || r.type === 9) && delete r.value;
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
      for (let r = 0; r < n.length; r++)
        gt(n[r]);
      t.c = n, delete t.cases;
      break;
    }
    case 2: {
      const t = e, n = t.items;
      for (let r = 0; r < n.length; r++)
        gt(n[r]);
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
function rl(e, t) {
  const { filename: n, breakLineCode: r, needIndent: a } = t, l = t.location !== !1, i = {
    filename: n,
    code: "",
    column: 1,
    line: 1,
    offset: 0,
    map: void 0,
    breakLineCode: r,
    needIndent: a,
    indentLevel: 0
  };
  l && e.loc && (i.source = e.loc.source);
  const u = () => i;
  function d(k, y) {
    i.code += k;
  }
  function p(k, y = !0) {
    const f = y ? r : "";
    d(a ? f + "  ".repeat(k) : f);
  }
  function v(k = !0) {
    const y = ++i.indentLevel;
    k && p(y);
  }
  function C(k = !0) {
    const y = --i.indentLevel;
    k && p(y);
  }
  function N() {
    p(i.indentLevel);
  }
  return {
    context: u,
    push: d,
    indent: v,
    deindent: C,
    newline: N,
    helper: (k) => `_${k}`,
    needIndent: () => i.needIndent
  };
}
function al(e, t) {
  const { helper: n } = e;
  e.push(`${n(
    "linked"
    /* HelperNameMap.LINKED */
  )}(`), yt(e, t.key), t.modifier ? (e.push(", "), yt(e, t.modifier), e.push(", _type")) : e.push(", undefined, _type"), e.push(")");
}
function sl(e, t) {
  const { helper: n, needIndent: r } = e;
  e.push(`${n(
    "normalize"
    /* HelperNameMap.NORMALIZE */
  )}([`), e.indent(r());
  const a = t.items.length;
  for (let l = 0; l < a && (yt(e, t.items[l]), l !== a - 1); l++)
    e.push(", ");
  e.deindent(r()), e.push("])");
}
function ll(e, t) {
  const { helper: n, needIndent: r } = e;
  if (t.cases.length > 1) {
    e.push(`${n(
      "plural"
      /* HelperNameMap.PLURAL */
    )}([`), e.indent(r());
    const a = t.cases.length;
    for (let l = 0; l < a && (yt(e, t.cases[l]), l !== a - 1); l++)
      e.push(", ");
    e.deindent(r()), e.push("])");
  }
}
function il(e, t) {
  t.body ? yt(e, t.body) : e.push("null");
}
function yt(e, t) {
  const { helper: n } = e;
  switch (t.type) {
    case 0:
      il(e, t);
      break;
    case 1:
      ll(e, t);
      break;
    case 2:
      sl(e, t);
      break;
    case 6:
      al(e, t);
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
const ol = (e, t = {}) => {
  const n = x(t.mode) ? t.mode : "normal", r = x(t.filename) ? t.filename : "message.intl";
  t.sourceMap;
  const a = t.breakLineCode != null ? t.breakLineCode : n === "arrow" ? ";" : `
`, l = t.needIndent ? t.needIndent : n !== "arrow", i = e.helpers || [], u = rl(e, {
    filename: r,
    breakLineCode: a,
    needIndent: l
  });
  u.push(n === "normal" ? "function __msg__ (ctx) {" : "(ctx) => {"), u.indent(l), i.length > 0 && (u.push(`const { ${Hn(i.map((v) => `${v}: _${v}`), ", ")} } = ctx`), u.newline()), u.push("return "), yt(u, e), u.deindent(l), u.push("}"), delete e.helpers;
  const { code: d, map: p } = u.context();
  return {
    ast: e,
    code: d,
    map: p ? p.toJSON() : void 0
    // eslint-disable-line @typescript-eslint/no-explicit-any
  };
};
function cl(e, t = {}) {
  const n = he({}, t), r = !!n.jit, a = !!n.minify, l = n.optimize == null ? !0 : n.optimize, u = Qs(n).parse(e);
  return r ? (l && nl(u), a && gt(u), { ast: u, code: "" }) : (tl(u, n), ol(u, n));
}
/*!
  * core-base v11.2.2
  * (c) 2025 kazuya kawaguchi
  * Released under the MIT License.
  */
function ul() {
  typeof __INTLIFY_DROP_MESSAGE_COMPILER__ != "boolean" && (Yt().__INTLIFY_DROP_MESSAGE_COMPILER__ = !1);
}
function Fe(e) {
  return Z(e) && Kn(e) === 0 && (Te(e, "b") || Te(e, "body"));
}
const ma = ["b", "body"];
function dl(e) {
  return et(e, ma);
}
const ga = ["c", "cases"];
function fl(e) {
  return et(e, ga, []);
}
const _a = ["s", "static"];
function hl(e) {
  return et(e, _a);
}
const wa = ["i", "items"];
function pl(e) {
  return et(e, wa, []);
}
const va = ["t", "type"];
function Kn(e) {
  return et(e, va);
}
const ba = ["v", "value"];
function Ht(e, t) {
  const n = et(e, ba);
  if (n != null)
    return n;
  throw Ft(t);
}
const ya = ["m", "modifier"];
function ml(e) {
  return et(e, ya);
}
const ka = ["k", "key"];
function gl(e) {
  const t = et(e, ka);
  if (t)
    return t;
  throw Ft(
    6
    /* NodeTypes.Linked */
  );
}
function et(e, t, n) {
  for (let r = 0; r < t.length; r++) {
    const a = t[r];
    if (Te(e, a) && e[a] != null)
      return e[a];
  }
  return n;
}
const Ca = [
  ...ma,
  ...ga,
  ..._a,
  ...wa,
  ...ka,
  ...ya,
  ...ba,
  ...va
];
function Ft(e) {
  return new Error(`unhandled node type: ${e}`);
}
function bn(e) {
  return (n) => _l(n, e);
}
function _l(e, t) {
  const n = dl(t);
  if (n == null)
    throw Ft(
      0
      /* NodeTypes.Resource */
    );
  if (Kn(n) === 1) {
    const l = fl(n);
    return e.plural(l.reduce((i, u) => [
      ...i,
      gr(e, u)
    ], []));
  } else
    return gr(e, n);
}
function gr(e, t) {
  const n = hl(t);
  if (n != null)
    return e.type === "text" ? n : e.normalize([n]);
  {
    const r = pl(t).reduce((a, l) => [...a, Nn(e, l)], []);
    return e.normalize(r);
  }
}
function Nn(e, t) {
  const n = Kn(t);
  switch (n) {
    case 3:
      return Ht(t, n);
    case 9:
      return Ht(t, n);
    case 4: {
      const r = t;
      if (Te(r, "k") && r.k)
        return e.interpolate(e.named(r.k));
      if (Te(r, "key") && r.key)
        return e.interpolate(e.named(r.key));
      throw Ft(n);
    }
    case 5: {
      const r = t;
      if (Te(r, "i") && ce(r.i))
        return e.interpolate(e.list(r.i));
      if (Te(r, "index") && ce(r.index))
        return e.interpolate(e.list(r.index));
      throw Ft(n);
    }
    case 6: {
      const r = t, a = ml(r), l = gl(r);
      return e.linked(Nn(e, l), a ? Nn(e, a) : void 0, e.type);
    }
    case 7:
      return Ht(t, n);
    case 8:
      return Ht(t, n);
    default:
      throw new Error(`unhandled node on format message part: ${n}`);
  }
}
const wl = (e) => e;
let Gt = q();
function vl(e, t = {}) {
  let n = !1;
  const r = t.onError || Us;
  return t.onError = (a) => {
    n = !0, r(a);
  }, { ...cl(e, t), detectError: n };
}
// @__NO_SIDE_EFFECTS__
function bl(e, t) {
  if (!__INTLIFY_DROP_MESSAGE_COMPILER__ && x(e)) {
    le(t.warnHtmlMessage) && t.warnHtmlMessage;
    const r = (t.onCacheKey || wl)(e), a = Gt[r];
    if (a)
      return a;
    const { ast: l, detectError: i } = vl(e, {
      ...t,
      location: !1,
      jit: !0
    }), u = bn(l);
    return i ? u : Gt[r] = u;
  } else {
    const n = e.cacheKey;
    if (n) {
      const r = Gt[n];
      return r || (Gt[n] = bn(e));
    } else
      return bn(e);
  }
}
const Ve = {
  INVALID_ARGUMENT: zs,
  // 17
  INVALID_DATE_ARGUMENT: 18,
  INVALID_ISO_DATE_ARGUMENT: 19,
  NOT_SUPPORT_LOCALE_PROMISE_VALUE: 21,
  NOT_SUPPORT_LOCALE_ASYNC_FUNCTION: 22,
  NOT_SUPPORT_LOCALE_TYPE: 23
}, yl = 24;
function He(e) {
  return dn(e, null, void 0);
}
function Bn(e, t) {
  return t.locale != null ? _r(t.locale) : _r(e.locale);
}
let yn;
function _r(e) {
  if (x(e))
    return e;
  if (ae(e)) {
    if (e.resolvedOnce && yn != null)
      return yn;
    if (e.constructor.name === "Function") {
      const t = e();
      if (Ds(t))
        throw He(Ve.NOT_SUPPORT_LOCALE_PROMISE_VALUE);
      return yn = t;
    } else
      throw He(Ve.NOT_SUPPORT_LOCALE_ASYNC_FUNCTION);
  } else
    throw He(Ve.NOT_SUPPORT_LOCALE_TYPE);
}
function kl(e, t, n) {
  return [.../* @__PURE__ */ new Set([
    n,
    ...ie(t) ? t : Z(t) ? Object.keys(t) : x(t) ? [t] : [n]
  ])];
}
function Sa(e, t, n) {
  const r = x(n) ? n : an, a = e;
  a.__localeChainCache || (a.__localeChainCache = /* @__PURE__ */ new Map());
  let l = a.__localeChainCache.get(r);
  if (!l) {
    l = [];
    let i = [n];
    for (; ie(i); )
      i = wr(l, i, t);
    const u = ie(t) || !Y(t) ? t : t.default ? t.default : null;
    i = x(u) ? [u] : u, ie(i) && wr(l, i, !1), a.__localeChainCache.set(r, l);
  }
  return l;
}
function wr(e, t, n) {
  let r = !0;
  for (let a = 0; a < t.length && le(r); a++) {
    const l = t[a];
    x(l) && (r = Cl(e, t[a], n));
  }
  return r;
}
function Cl(e, t, n) {
  let r;
  const a = t.split("-");
  do {
    const l = a.join("-");
    r = Sl(e, l, n), a.splice(-1, 1);
  } while (a.length && r === !0);
  return r;
}
function Sl(e, t, n) {
  let r = !1;
  if (!e.includes(t) && (r = !0, t)) {
    r = t[t.length - 1] !== "!";
    const a = t.replace(/!/g, "");
    e.push(a), (ie(n) || Y(n)) && n[a] && (r = n[a]);
  }
  return r;
}
const tt = [];
tt[
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
tt[
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
tt[
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
tt[
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
tt[
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
tt[
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
tt[
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
const Ll = /^\s?(?:true|false|-?[\d.]+|'[^']*'|"[^"]*")\s?$/;
function El(e) {
  return Ll.test(e);
}
function Tl(e) {
  const t = e.charCodeAt(0), n = e.charCodeAt(e.length - 1);
  return t === n && (t === 34 || t === 39) ? e.slice(1, -1) : e;
}
function Nl(e) {
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
function Il(e) {
  const t = e.trim();
  return e.charAt(0) === "0" && isNaN(parseInt(e)) ? !1 : El(t) ? Tl(t) : "*" + t;
}
function Ol(e) {
  const t = [];
  let n = -1, r = 0, a = 0, l, i, u, d, p, v, C;
  const N = [];
  N[
    0
    /* Actions.APPEND */
  ] = () => {
    i === void 0 ? i = u : i += u;
  }, N[
    1
    /* Actions.PUSH */
  ] = () => {
    i !== void 0 && (t.push(i), i = void 0);
  }, N[
    2
    /* Actions.INC_SUB_PATH_DEPTH */
  ] = () => {
    N[
      0
      /* Actions.APPEND */
    ](), a++;
  }, N[
    3
    /* Actions.PUSH_SUB_PATH */
  ] = () => {
    if (a > 0)
      a--, r = 4, N[
        0
        /* Actions.APPEND */
      ]();
    else {
      if (a = 0, i === void 0 || (i = Il(i), i === !1))
        return !1;
      N[
        1
        /* Actions.PUSH */
      ]();
    }
  };
  function A() {
    const W = e[n + 1];
    if (r === 5 && W === "'" || r === 6 && W === '"')
      return n++, u = "\\" + W, N[
        0
        /* Actions.APPEND */
      ](), !0;
  }
  for (; r !== null; )
    if (n++, l = e[n], !(l === "\\" && A())) {
      if (d = Nl(l), C = tt[r], p = C[d] || C.l || 8, p === 8 || (r = p[0], p[1] !== void 0 && (v = N[p[1]], v && (u = l, v() === !1))))
        return;
      if (r === 7)
        return t;
    }
}
const vr = /* @__PURE__ */ new Map();
function Pl(e, t) {
  return Z(e) ? e[t] : null;
}
function Al(e, t) {
  if (!Z(e))
    return null;
  let n = vr.get(t);
  if (n || (n = Ol(t), n && vr.set(t, n)), !n)
    return null;
  const r = n.length;
  let a = e, l = 0;
  for (; l < r; ) {
    const i = n[l];
    if (Ca.includes(i) && Fe(a))
      return null;
    const u = a[i];
    if (u === void 0 || ae(a))
      return null;
    a = u, l++;
  }
  return a;
}
const Ml = "11.2.2", fn = -1, an = "en-US", br = "", yr = (e) => `${e.charAt(0).toLocaleUpperCase()}${e.substr(1)}`;
function Fl() {
  return {
    upper: (e, t) => t === "text" && x(e) ? e.toUpperCase() : t === "vnode" && Z(e) && "__v_isVNode" in e ? e.children.toUpperCase() : e,
    lower: (e, t) => t === "text" && x(e) ? e.toLowerCase() : t === "vnode" && Z(e) && "__v_isVNode" in e ? e.children.toLowerCase() : e,
    capitalize: (e, t) => t === "text" && x(e) ? yr(e) : t === "vnode" && Z(e) && "__v_isVNode" in e ? yr(e.children) : e
  };
}
let La;
function Rl(e) {
  La = e;
}
let Ea;
function xl(e) {
  Ea = e;
}
let Ta;
function Wl(e) {
  Ta = e;
}
let Na = null;
const kr = (e) => {
  Na = e;
}, Dl = () => Na;
let Cr = 0;
function $l(e = {}) {
  const t = ae(e.onWarn) ? e.onWarn : Ps, n = x(e.version) ? e.version : Ml, r = x(e.locale) || ae(e.locale) ? e.locale : an, a = ae(r) ? an : r, l = ie(e.fallbackLocale) || Y(e.fallbackLocale) || x(e.fallbackLocale) || e.fallbackLocale === !1 ? e.fallbackLocale : a, i = Y(e.messages) ? e.messages : kn(a), u = Y(e.datetimeFormats) ? e.datetimeFormats : kn(a), d = Y(e.numberFormats) ? e.numberFormats : kn(a), p = he(q(), e.modifiers, Fl()), v = e.pluralRules || q(), C = ae(e.missing) ? e.missing : null, N = le(e.missingWarn) || rn(e.missingWarn) ? e.missingWarn : !0, A = le(e.fallbackWarn) || rn(e.fallbackWarn) ? e.fallbackWarn : !0, W = !!e.fallbackFormat, k = !!e.unresolving, y = ae(e.postTranslation) ? e.postTranslation : null, f = Y(e.processor) ? e.processor : null, g = le(e.warnHtmlMessage) ? e.warnHtmlMessage : !0, _ = !!e.escapeParameter, b = ae(e.messageCompiler) ? e.messageCompiler : La, O = ae(e.messageResolver) ? e.messageResolver : Ea || Pl, M = ae(e.localeFallbacker) ? e.localeFallbacker : Ta || kl, w = Z(e.fallbackContext) ? e.fallbackContext : void 0, B = e, Q = Z(B.__datetimeFormatters) ? B.__datetimeFormatters : /* @__PURE__ */ new Map(), de = Z(B.__numberFormatters) ? B.__numberFormatters : /* @__PURE__ */ new Map(), oe = Z(B.__meta) ? B.__meta : {};
  Cr++;
  const ee = {
    version: n,
    cid: Cr,
    locale: r,
    fallbackLocale: l,
    messages: i,
    modifiers: p,
    pluralRules: v,
    missing: C,
    missingWarn: N,
    fallbackWarn: A,
    fallbackFormat: W,
    unresolving: k,
    postTranslation: y,
    processor: f,
    warnHtmlMessage: g,
    escapeParameter: _,
    messageCompiler: b,
    messageResolver: O,
    localeFallbacker: M,
    fallbackContext: w,
    onWarn: t,
    __meta: oe
  };
  return ee.datetimeFormats = u, ee.numberFormats = d, ee.__datetimeFormatters = Q, ee.__numberFormatters = de, ee;
}
const kn = (e) => ({ [e]: q() });
function Yn(e, t, n, r, a) {
  const { missing: l, onWarn: i } = e;
  if (l !== null) {
    const u = l(e, n, t, a);
    return x(u) ? u : t;
  } else
    return t;
}
function It(e, t, n) {
  const r = e;
  r.__localeChainCache = /* @__PURE__ */ new Map(), e.localeFallbacker(e, n, t);
}
function jl(e, t) {
  return e === t ? !1 : e.split("-")[0] === t.split("-")[0];
}
function zl(e, t) {
  const n = t.indexOf(e);
  if (n === -1)
    return !1;
  for (let r = n + 1; r < t.length; r++)
    if (jl(e, t[r]))
      return !0;
  return !1;
}
function Sr(e, ...t) {
  const { datetimeFormats: n, unresolving: r, fallbackLocale: a, onWarn: l, localeFallbacker: i } = e, { __datetimeFormatters: u } = e, [d, p, v, C] = In(...t), N = le(v.missingWarn) ? v.missingWarn : e.missingWarn;
  le(v.fallbackWarn) ? v.fallbackWarn : e.fallbackWarn;
  const A = !!v.part, W = Bn(e, v), k = i(
    e,
    // eslint-disable-line @typescript-eslint/no-explicit-any
    a,
    W
  );
  if (!x(d) || d === "")
    return new Intl.DateTimeFormat(W, C).format(p);
  let y = {}, f, g = null;
  const _ = "datetime format";
  for (let M = 0; M < k.length && (f = k[M], y = n[f] || {}, g = y[d], !Y(g)); M++)
    Yn(e, d, f, N, _);
  if (!Y(g) || !x(f))
    return r ? fn : d;
  let b = `${f}__${d}`;
  un(C) || (b = `${b}__${JSON.stringify(C)}`);
  let O = u.get(b);
  return O || (O = new Intl.DateTimeFormat(f, he({}, g, C)), u.set(b, O)), A ? O.formatToParts(p) : O.format(p);
}
const Ia = [
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
  const [t, n, r, a] = e, l = q();
  let i = q(), u;
  if (x(t)) {
    const d = t.match(/(\d{4}-\d{2}-\d{2})(T|\s)?(.*)/);
    if (!d)
      throw He(Ve.INVALID_ISO_DATE_ARGUMENT);
    const p = d[3] ? d[3].trim().startsWith("T") ? `${d[1].trim()}${d[3].trim()}` : `${d[1].trim()}T${d[3].trim()}` : d[1].trim();
    u = new Date(p);
    try {
      u.toISOString();
    } catch {
      throw He(Ve.INVALID_ISO_DATE_ARGUMENT);
    }
  } else if (Fs(t)) {
    if (isNaN(t.getTime()))
      throw He(Ve.INVALID_DATE_ARGUMENT);
    u = t;
  } else if (ce(t))
    u = t;
  else
    throw He(Ve.INVALID_ARGUMENT);
  return x(n) ? l.key = n : Y(n) && Object.keys(n).forEach((d) => {
    Ia.includes(d) ? i[d] = n[d] : l[d] = n[d];
  }), x(r) ? l.locale = r : Y(r) && (i = r), Y(a) && (i = a), [l.key || "", u, l, i];
}
function Lr(e, t, n) {
  const r = e;
  for (const a in n) {
    const l = `${t}__${a}`;
    r.__datetimeFormatters.has(l) && r.__datetimeFormatters.delete(l);
  }
}
function Er(e, ...t) {
  const { numberFormats: n, unresolving: r, fallbackLocale: a, onWarn: l, localeFallbacker: i } = e, { __numberFormatters: u } = e, [d, p, v, C] = On(...t), N = le(v.missingWarn) ? v.missingWarn : e.missingWarn;
  le(v.fallbackWarn) ? v.fallbackWarn : e.fallbackWarn;
  const A = !!v.part, W = Bn(e, v), k = i(
    e,
    // eslint-disable-line @typescript-eslint/no-explicit-any
    a,
    W
  );
  if (!x(d) || d === "")
    return new Intl.NumberFormat(W, C).format(p);
  let y = {}, f, g = null;
  const _ = "number format";
  for (let M = 0; M < k.length && (f = k[M], y = n[f] || {}, g = y[d], !Y(g)); M++)
    Yn(e, d, f, N, _);
  if (!Y(g) || !x(f))
    return r ? fn : d;
  let b = `${f}__${d}`;
  un(C) || (b = `${b}__${JSON.stringify(C)}`);
  let O = u.get(b);
  return O || (O = new Intl.NumberFormat(f, he({}, g, C)), u.set(b, O)), A ? O.formatToParts(p) : O.format(p);
}
const Oa = [
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
function On(...e) {
  const [t, n, r, a] = e, l = q();
  let i = q();
  if (!ce(t))
    throw He(Ve.INVALID_ARGUMENT);
  const u = t;
  return x(n) ? l.key = n : Y(n) && Object.keys(n).forEach((d) => {
    Oa.includes(d) ? i[d] = n[d] : l[d] = n[d];
  }), x(r) ? l.locale = r : Y(r) && (i = r), Y(a) && (i = a), [l.key || "", u, l, i];
}
function Tr(e, t, n) {
  const r = e;
  for (const a in n) {
    const l = `${t}__${a}`;
    r.__numberFormatters.has(l) && r.__numberFormatters.delete(l);
  }
}
const Ul = (e) => e, Vl = (e) => "", Hl = "text", Gl = (e) => e.length === 0 ? "" : Hn(e), Kl = $s;
function Nr(e, t) {
  return e = Math.abs(e), t === 2 ? e ? e > 1 ? 1 : 0 : 1 : e ? Math.min(e, 2) : 0;
}
function Bl(e) {
  const t = ce(e.pluralIndex) ? e.pluralIndex : -1;
  return e.named && (ce(e.named.count) || ce(e.named.n)) ? ce(e.named.count) ? e.named.count : ce(e.named.n) ? e.named.n : t : t;
}
function Yl(e, t) {
  t.count || (t.count = e), t.n || (t.n = e);
}
function Zl(e = {}) {
  const t = e.locale, n = Bl(e), r = Z(e.pluralRules) && x(t) && ae(e.pluralRules[t]) ? e.pluralRules[t] : Nr, a = Z(e.pluralRules) && x(t) && ae(e.pluralRules[t]) ? Nr : void 0, l = (f) => f[r(n, f.length, a)], i = e.list || [], u = (f) => i[f], d = e.named || q();
  ce(e.pluralIndex) && Yl(n, d);
  const p = (f) => d[f];
  function v(f, g) {
    const _ = ae(e.messages) ? e.messages(f, !!g) : Z(e.messages) ? e.messages[f] : !1;
    return _ || (e.parent ? e.parent.message(f) : Vl);
  }
  const C = (f) => e.modifiers ? e.modifiers[f] : Ul, N = Y(e.processor) && ae(e.processor.normalize) ? e.processor.normalize : Gl, A = Y(e.processor) && ae(e.processor.interpolate) ? e.processor.interpolate : Kl, W = Y(e.processor) && x(e.processor.type) ? e.processor.type : Hl, y = {
    list: u,
    named: p,
    plural: l,
    linked: (f, ...g) => {
      const [_, b] = g;
      let O = "text", M = "";
      g.length === 1 ? Z(_) ? (M = _.modifier || M, O = _.type || O) : x(_) && (M = _ || M) : g.length === 2 && (x(_) && (M = _ || M), x(b) && (O = b || O));
      const w = v(f, !0)(y), B = (
        // The message in vnode resolved with linked are returned as an array by processor.nomalize
        O === "vnode" && ie(w) && M ? w[0] : w
      );
      return M ? C(M)(B, O) : B;
    },
    message: v,
    type: W,
    interpolate: A,
    normalize: N,
    values: he(q(), i, d)
  };
  return y;
}
const Ir = () => "", Ge = (e) => ae(e);
function Or(e, ...t) {
  const { fallbackFormat: n, postTranslation: r, unresolving: a, messageCompiler: l, fallbackLocale: i, messages: u } = e, [d, p] = Pn(...t), v = le(p.missingWarn) ? p.missingWarn : e.missingWarn, C = le(p.fallbackWarn) ? p.fallbackWarn : e.fallbackWarn, N = le(p.escapeParameter) ? p.escapeParameter : e.escapeParameter, A = !!p.resolvedMessage, W = x(p.default) || le(p.default) ? le(p.default) ? l ? d : () => d : p.default : n ? l ? d : () => d : null, k = n || W != null && (x(W) || ae(W)), y = Bn(e, p);
  N && Xl(p);
  let [f, g, _] = A ? [
    d,
    y,
    u[y] || q()
  ] : Pa(e, d, y, i, C, v), b = f, O = d;
  if (!A && !(x(b) || Fe(b) || Ge(b)) && k && (b = W, O = b), !A && (!(x(b) || Fe(b) || Ge(b)) || !x(g)))
    return a ? fn : d;
  let M = !1;
  const w = () => {
    M = !0;
  }, B = Ge(b) ? b : Aa(e, d, g, b, O, w);
  if (M)
    return b;
  const Q = Ql(e, g, _, p), de = Zl(Q), oe = Jl(e, B, de);
  let ee = r ? r(oe, d) : oe;
  return N && x(ee) && (ee = xs(ee)), ee;
}
function Xl(e) {
  ie(e.list) ? e.list = e.list.map((t) => x(t) ? dr(t) : t) : Z(e.named) && Object.keys(e.named).forEach((t) => {
    x(e.named[t]) && (e.named[t] = dr(e.named[t]));
  });
}
function Pa(e, t, n, r, a, l) {
  const { messages: i, onWarn: u, messageResolver: d, localeFallbacker: p } = e, v = p(e, r, n);
  let C = q(), N, A = null;
  const W = "translate";
  for (let k = 0; k < v.length && (N = v[k], C = i[N] || q(), (A = d(C, t)) === null && (A = C[t]), !(x(A) || Fe(A) || Ge(A))); k++)
    if (!zl(N, v)) {
      const y = Yn(
        e,
        // eslint-disable-line @typescript-eslint/no-explicit-any
        t,
        N,
        l,
        W
      );
      y !== t && (A = y);
    }
  return [A, N, C];
}
function Aa(e, t, n, r, a, l) {
  const { messageCompiler: i, warnHtmlMessage: u } = e;
  if (Ge(r)) {
    const p = r;
    return p.locale = p.locale || n, p.key = p.key || t, p;
  }
  if (i == null) {
    const p = () => r;
    return p.locale = n, p.key = t, p;
  }
  const d = i(r, ql(e, n, a, r, u, l));
  return d.locale = n, d.key = t, d.source = r, d;
}
function Jl(e, t, n) {
  return t(n);
}
function Pn(...e) {
  const [t, n, r] = e, a = q();
  if (!x(t) && !ce(t) && !Ge(t) && !Fe(t))
    throw He(Ve.INVALID_ARGUMENT);
  const l = ce(t) ? String(t) : (Ge(t), t);
  return ce(n) ? a.plural = n : x(n) ? a.default = n : Y(n) && !un(n) ? a.named = n : ie(n) && (a.list = n), ce(r) ? a.plural = r : x(r) ? a.default = r : Y(r) && he(a, r), [l, a];
}
function ql(e, t, n, r, a, l) {
  return {
    locale: t,
    key: n,
    warnHtmlMessage: a,
    onError: (i) => {
      throw l && l(i), i;
    },
    onCacheKey: (i) => As(t, n, i)
  };
}
function Ql(e, t, n, r) {
  const { modifiers: a, pluralRules: l, messageResolver: i, fallbackLocale: u, fallbackWarn: d, missingWarn: p, fallbackContext: v } = e, N = {
    locale: t,
    modifiers: a,
    pluralRules: l,
    messages: (A, W) => {
      let k = i(n, A);
      if (k == null && (v || W)) {
        const [, , y] = Pa(
          v || e,
          // NOTE: if has fallbackContext, fallback to root, else if use linked, fallback to local context
          A,
          t,
          u,
          d,
          p
        );
        k = i(y, A);
      }
      if (x(k) || Fe(k)) {
        let y = !1;
        const g = Aa(e, A, t, k, A, () => {
          y = !0;
        });
        return y ? Ir : g;
      } else return Ge(k) ? k : Ir;
    }
  };
  return e.processor && (N.processor = e.processor), r.list && (N.list = r.list), r.named && (N.named = r.named), ce(r.plural) && (N.pluralIndex = r.plural), N;
}
ul();
/*!
  * vue-i18n v11.2.2
  * (c) 2025 kazuya kawaguchi
  * Released under the MIT License.
  */
const ei = "11.2.2";
function ti() {
  typeof __VUE_I18N_FULL_INSTALL__ != "boolean" && (Yt().__VUE_I18N_FULL_INSTALL__ = !0), typeof __VUE_I18N_LEGACY_API__ != "boolean" && (Yt().__VUE_I18N_LEGACY_API__ = !0), typeof __INTLIFY_DROP_MESSAGE_COMPILER__ != "boolean" && (Yt().__INTLIFY_DROP_MESSAGE_COMPILER__ = !1);
}
const kt = {
  // composer module errors
  UNEXPECTED_RETURN_TYPE: yl,
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
function Rt(e, ...t) {
  return dn(e, null, void 0);
}
const An = /* @__PURE__ */ ft("__translateVNode"), Mn = /* @__PURE__ */ ft("__datetimeParts"), Fn = /* @__PURE__ */ ft("__numberParts"), ni = ft("__setPluralRules"), Ma = /* @__PURE__ */ ft("__injectWithOption"), Rn = /* @__PURE__ */ ft("__dispose");
function xt(e) {
  if (!Z(e) || Fe(e))
    return e;
  for (const t in e)
    if (Te(e, t))
      if (!t.includes("."))
        Z(e[t]) && xt(e[t]);
      else {
        const n = t.split("."), r = n.length - 1;
        let a = e, l = !1;
        for (let i = 0; i < r; i++) {
          if (n[i] === "__proto__")
            throw new Error(`unsafe key: ${n[i]}`);
          if (n[i] in a || (a[n[i]] = q()), !Z(a[n[i]])) {
            l = !0;
            break;
          }
          a = a[n[i]];
        }
        if (l || (Fe(a) ? Ca.includes(n[r]) || delete e[t] : (a[n[r]] = e[t], delete e[t])), !Fe(a)) {
          const i = a[n[r]];
          Z(i) && xt(i);
        }
      }
  return e;
}
function Fa(e, t) {
  const { messages: n, __i18n: r, messageResolver: a, flatJson: l } = t, i = Y(n) ? n : ie(r) ? q() : { [e]: q() };
  if (ie(r) && r.forEach((u) => {
    if ("locale" in u && "resource" in u) {
      const { locale: d, resource: p } = u;
      d ? (i[d] = i[d] || q(), Zt(p, i[d])) : Zt(p, i);
    } else
      x(u) && Zt(JSON.parse(u), i);
  }), a == null && l)
    for (const u in i)
      Te(i, u) && xt(i[u]);
  return i;
}
function ri(e) {
  return e.type;
}
function ai(e, t, n) {
  let r = Z(t.messages) ? t.messages : q();
  "__i18nGlobal" in n && (r = Fa(e.locale.value, {
    messages: r,
    __i18n: n.__i18nGlobal
  }));
  const a = Object.keys(r);
  a.length && a.forEach((l) => {
    e.mergeLocaleMessage(l, r[l]);
  });
  {
    if (Z(t.datetimeFormats)) {
      const l = Object.keys(t.datetimeFormats);
      l.length && l.forEach((i) => {
        e.mergeDateTimeFormat(i, t.datetimeFormats[i]);
      });
    }
    if (Z(t.numberFormats)) {
      const l = Object.keys(t.numberFormats);
      l.length && l.forEach((i) => {
        e.mergeNumberFormat(i, t.numberFormats[i]);
      });
    }
  }
}
function Pr(e) {
  return T(hs, null, e, 0);
}
function Ra() {
  return "currentInstance" in gn ? gn["currentInstance"] : gn.getCurrentInstance();
}
const Ar = () => [], si = () => !1;
let Mr = 0;
function Fr(e) {
  return (t, n, r, a) => e(n, r, Ra() || void 0, a);
}
function li(e = {}) {
  const { __root: t, __injectWithOption: n } = e, r = t === void 0, a = e.flatJson, l = cr ? V : fs;
  let i = le(e.inheritLocale) ? e.inheritLocale : !0;
  const u = l(
    // prettier-ignore
    t && i ? t.locale.value : x(e.locale) ? e.locale : an
  ), d = l(
    // prettier-ignore
    t && i ? t.fallbackLocale.value : x(e.fallbackLocale) || ie(e.fallbackLocale) || Y(e.fallbackLocale) || e.fallbackLocale === !1 ? e.fallbackLocale : u.value
  ), p = l(Fa(u.value, e)), v = l(Y(e.datetimeFormats) ? e.datetimeFormats : { [u.value]: {} }), C = l(Y(e.numberFormats) ? e.numberFormats : { [u.value]: {} });
  let N = t ? t.missingWarn : le(e.missingWarn) || rn(e.missingWarn) ? e.missingWarn : !0, A = t ? t.fallbackWarn : le(e.fallbackWarn) || rn(e.fallbackWarn) ? e.fallbackWarn : !0, W = t ? t.fallbackRoot : le(e.fallbackRoot) ? e.fallbackRoot : !0, k = !!e.fallbackFormat, y = ae(e.missing) ? e.missing : null, f = ae(e.missing) ? Fr(e.missing) : null, g = ae(e.postTranslation) ? e.postTranslation : null, _ = t ? t.warnHtmlMessage : le(e.warnHtmlMessage) ? e.warnHtmlMessage : !0, b = !!e.escapeParameter;
  const O = t ? t.modifiers : Y(e.modifiers) ? e.modifiers : {};
  let M = e.pluralRules || t && t.pluralRules, w;
  w = (() => {
    r && kr(null);
    const m = {
      version: ei,
      locale: u.value,
      fallbackLocale: d.value,
      messages: p.value,
      modifiers: O,
      pluralRules: M,
      missing: f === null ? void 0 : f,
      missingWarn: N,
      fallbackWarn: A,
      fallbackFormat: k,
      unresolving: !0,
      postTranslation: g === null ? void 0 : g,
      warnHtmlMessage: _,
      escapeParameter: b,
      messageResolver: e.messageResolver,
      messageCompiler: e.messageCompiler,
      __meta: { framework: "vue" }
    };
    m.datetimeFormats = v.value, m.numberFormats = C.value, m.__datetimeFormatters = Y(w) ? w.__datetimeFormatters : void 0, m.__numberFormatters = Y(w) ? w.__numberFormatters : void 0;
    const I = $l(m);
    return r && kr(I), I;
  })(), It(w, u.value, d.value);
  function Q() {
    return [
      u.value,
      d.value,
      p.value,
      v.value,
      C.value
    ];
  }
  const de = $({
    get: () => u.value,
    set: (m) => {
      w.locale = m, u.value = m;
    }
  }), oe = $({
    get: () => d.value,
    set: (m) => {
      w.fallbackLocale = m, d.value = m, It(w, u.value, m);
    }
  }), ee = $(() => p.value), Ke = /* @__PURE__ */ $(() => v.value), Be = /* @__PURE__ */ $(() => C.value);
  function Ie() {
    return ae(g) ? g : null;
  }
  function we(m) {
    g = m, w.postTranslation = m;
  }
  function Ye() {
    return y;
  }
  function nt(m) {
    m !== null && (f = Fr(m)), y = m, w.missing = f;
  }
  const ve = (m, I, J, re, je, D) => {
    Q();
    let S;
    try {
      r || (w.fallbackContext = t ? Dl() : void 0), S = m(w);
    } finally {
      r || (w.fallbackContext = void 0);
    }
    if (J !== "translate exists" && // for not `te` (e.g `t`)
    ce(S) && S === fn || J === "translate exists" && !S) {
      const [F, lt] = I();
      return t && W ? re(t) : je(F);
    } else {
      if (D(S))
        return S;
      throw Rt(kt.UNEXPECTED_RETURN_TYPE);
    }
  };
  function be(...m) {
    return ve((I) => Reflect.apply(Or, null, [I, ...m]), () => Pn(...m), "translate", (I) => Reflect.apply(I.t, I, [...m]), (I) => I, (I) => x(I));
  }
  function Le(...m) {
    const [I, J, re] = m;
    if (re && !Z(re))
      throw Rt(kt.INVALID_ARGUMENT);
    return be(I, J, he({ resolvedMessage: !0 }, re || {}));
  }
  function Oe(...m) {
    return ve((I) => Reflect.apply(Sr, null, [I, ...m]), () => In(...m), "datetime format", (I) => Reflect.apply(I.d, I, [...m]), () => br, (I) => x(I) || ie(I));
  }
  function Re(...m) {
    return ve((I) => Reflect.apply(Er, null, [I, ...m]), () => On(...m), "number format", (I) => Reflect.apply(I.n, I, [...m]), () => br, (I) => x(I) || ie(I));
  }
  function Ze(m) {
    return m.map((I) => x(I) || ce(I) || le(I) ? Pr(String(I)) : I);
  }
  const Xe = {
    normalize: Ze,
    interpolate: (m) => m,
    type: "vnode"
  };
  function at(...m) {
    return ve((I) => {
      let J;
      const re = I;
      try {
        re.processor = Xe, J = Reflect.apply(Or, null, [re, ...m]);
      } finally {
        re.processor = null;
      }
      return J;
    }, () => Pn(...m), "translate", (I) => I[An](...m), (I) => [Pr(I)], (I) => ie(I));
  }
  function xe(...m) {
    return ve((I) => Reflect.apply(Er, null, [I, ...m]), () => On(...m), "number format", (I) => I[Fn](...m), Ar, (I) => x(I) || ie(I));
  }
  function st(...m) {
    return ve((I) => Reflect.apply(Sr, null, [I, ...m]), () => In(...m), "datetime format", (I) => I[Mn](...m), Ar, (I) => x(I) || ie(I));
  }
  function We(m) {
    M = m, w.pluralRules = M;
  }
  function z(m, I) {
    return ve(() => {
      if (!m)
        return !1;
      const J = x(I) ? I : u.value, re = _e(J), je = w.messageResolver(re, m);
      return Fe(je) || Ge(je) || x(je);
    }, () => [m], "translate exists", (J) => Reflect.apply(J.te, J, [m, I]), si, (J) => le(J));
  }
  function G(m) {
    let I = null;
    const J = Sa(w, d.value, u.value);
    for (let re = 0; re < J.length; re++) {
      const je = p.value[J[re]] || {}, D = w.messageResolver(je, m);
      if (D != null) {
        I = D;
        break;
      }
    }
    return I;
  }
  function se(m) {
    const I = G(m);
    return I ?? (t ? t.tm(m) || {} : {});
  }
  function _e(m) {
    return p.value[m] || {};
  }
  function De(m, I) {
    if (a) {
      const J = { [m]: I };
      for (const re in J)
        Te(J, re) && xt(J[re]);
      I = J[m];
    }
    p.value[m] = I, w.messages = p.value;
  }
  function Je(m, I) {
    p.value[m] = p.value[m] || {};
    const J = { [m]: I };
    if (a)
      for (const re in J)
        Te(J, re) && xt(J[re]);
    I = J[m], Zt(I, p.value[m]), w.messages = p.value;
  }
  function $e(m) {
    return v.value[m] || {};
  }
  function o(m, I) {
    v.value[m] = I, w.datetimeFormats = v.value, Lr(w, m, I);
  }
  function c(m, I) {
    v.value[m] = he(v.value[m] || {}, I), w.datetimeFormats = v.value, Lr(w, m, I);
  }
  function L(m) {
    return C.value[m] || {};
  }
  function R(m, I) {
    C.value[m] = I, w.numberFormats = C.value, Tr(w, m, I);
  }
  function te(m, I) {
    C.value[m] = he(C.value[m] || {}, I), w.numberFormats = C.value, Tr(w, m, I);
  }
  Mr++, t && cr && (wt(t.locale, (m) => {
    i && (u.value = m, w.locale = m, It(w, u.value, d.value));
  }), wt(t.fallbackLocale, (m) => {
    i && (d.value = m, w.fallbackLocale = m, It(w, u.value, d.value));
  }));
  const j = {
    id: Mr,
    locale: de,
    fallbackLocale: oe,
    get inheritLocale() {
      return i;
    },
    set inheritLocale(m) {
      i = m, m && t && (u.value = t.locale.value, d.value = t.fallbackLocale.value, It(w, u.value, d.value));
    },
    get availableLocales() {
      return Object.keys(p.value).sort();
    },
    messages: ee,
    get modifiers() {
      return O;
    },
    get pluralRules() {
      return M || {};
    },
    get isGlobal() {
      return r;
    },
    get missingWarn() {
      return N;
    },
    set missingWarn(m) {
      N = m, w.missingWarn = N;
    },
    get fallbackWarn() {
      return A;
    },
    set fallbackWarn(m) {
      A = m, w.fallbackWarn = A;
    },
    get fallbackRoot() {
      return W;
    },
    set fallbackRoot(m) {
      W = m;
    },
    get fallbackFormat() {
      return k;
    },
    set fallbackFormat(m) {
      k = m, w.fallbackFormat = k;
    },
    get warnHtmlMessage() {
      return _;
    },
    set warnHtmlMessage(m) {
      _ = m, w.warnHtmlMessage = m;
    },
    get escapeParameter() {
      return b;
    },
    set escapeParameter(m) {
      b = m, w.escapeParameter = m;
    },
    t: be,
    getLocaleMessage: _e,
    setLocaleMessage: De,
    mergeLocaleMessage: Je,
    getPostTranslationHandler: Ie,
    setPostTranslationHandler: we,
    getMissingHandler: Ye,
    setMissingHandler: nt,
    [ni]: We
  };
  return j.datetimeFormats = Ke, j.numberFormats = Be, j.rt = Le, j.te = z, j.tm = se, j.d = Oe, j.n = Re, j.getDateTimeFormat = $e, j.setDateTimeFormat = o, j.mergeDateTimeFormat = c, j.getNumberFormat = L, j.setNumberFormat = R, j.mergeNumberFormat = te, j[Ma] = n, j[An] = at, j[Mn] = st, j[Fn] = xe, j;
}
const Zn = {
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
function ii({ slots: e }, t) {
  return t.length === 1 && t[0] === "default" ? (e.default ? e.default() : []).reduce((r, a) => [
    ...r,
    // prettier-ignore
    ...a.type === $t ? a.children : [a]
  ], []) : t.reduce((n, r) => {
    const a = e[r];
    return a && (n[r] = a()), n;
  }, q());
}
function xa() {
  return $t;
}
he({
  keypath: {
    type: String,
    required: !0
  },
  plural: {
    type: [Number, String],
    validator: (e) => ce(e) || !isNaN(e)
  }
}, Zn);
function oi(e) {
  return ie(e) && !x(e[0]);
}
function Wa(e, t, n, r) {
  const { slots: a, attrs: l } = t;
  return () => {
    const i = { part: !0 };
    let u = q();
    e.locale && (i.locale = e.locale), x(e.format) ? i.key = e.format : Z(e.format) && (x(e.format.key) && (i.key = e.format.key), u = Object.keys(e.format).reduce((N, A) => n.includes(A) ? he(q(), N, { [A]: e.format[A] }) : N, q()));
    const d = r(e.value, i, u);
    let p = [i.key];
    ie(d) ? p = d.map((N, A) => {
      const W = a[N.type], k = W ? W({ [N.type]: N.value, index: A, parts: d }) : [N.value];
      return oi(k) && (k[0].key = `${N.type}-${A}`), k;
    }) : x(d) && (p = [d]);
    const v = he(q(), l), C = x(e.tag) || Z(e.tag) ? e.tag : xa();
    return sa(C, v, p);
  };
}
he({
  value: {
    type: Number,
    required: !0
  },
  format: {
    type: [String, Object]
  }
}, Zn);
const ci = /* @__PURE__ */ ft("global-vue-i18n");
function jt(e = {}) {
  const t = Ra();
  if (t == null)
    throw Rt(kt.MUST_BE_CALL_SETUP_TOP);
  if (!t.isCE && t.appContext.app != null && !t.appContext.app.__VUE_I18N_SYMBOL__)
    throw Rt(kt.NOT_INSTALLED);
  const n = ui(t), r = fi(n), a = ri(t), l = di(e, a);
  if (l === "global")
    return ai(r, e, a), r;
  if (l === "parent") {
    let d = hi(n, t, e.__useComponent);
    return d == null && (d = r), d;
  }
  const i = n;
  let u = i.__getInstance(t);
  if (u == null) {
    const d = he({}, e);
    "__i18n" in a && (d.__i18n = a.__i18n), r && (d.__root = r), u = li(d), i.__composerExtend && (u[Rn] = i.__composerExtend(u)), mi(i, t, u), i.__setInstance(t, u);
  }
  return u;
}
function ui(e) {
  const t = Qe(e.isCE ? ci : e.appContext.app.__VUE_I18N_SYMBOL__);
  if (!t)
    throw Rt(e.isCE ? kt.NOT_INSTALLED_WITH_PROVIDE : kt.UNEXPECTED_ERROR);
  return t;
}
function di(e, t) {
  return un(e) ? "__i18n" in t ? "local" : "global" : e.useScope ? e.useScope : "local";
}
function fi(e) {
  return e.mode === "composition" ? e.global : e.global.__composer;
}
function hi(e, t, n = !1) {
  let r = null;
  const a = t.root;
  let l = pi(t, n);
  for (; l != null; ) {
    const i = e;
    if (e.mode === "composition")
      r = i.__getInstance(l);
    else if (__VUE_I18N_LEGACY_API__) {
      const u = i.__getInstance(l);
      u != null && (r = u.__composer, n && r && !r[Ma] && (r = null));
    }
    if (r != null || a === l)
      break;
    l = l.parent;
  }
  return r;
}
function pi(e, t = !1) {
  return e == null ? null : t && e.vnode.ctx || e.parent;
}
function mi(e, t, n) {
  Et(() => {
  }, t), zn(() => {
    const r = n;
    e.__deleteInstance(t);
    const a = r[Rn];
    a && (a(), delete r[Rn]);
  }, t);
}
he({
  value: {
    type: [Number, Date],
    required: !0
  },
  format: {
    type: [String, Object]
  }
}, Zn);
ti();
Rl(bl);
xl(Al);
Wl(Sa);
const Da = Symbol(), Xt = "el", gi = "is-", it = (e, t, n, r, a) => {
  let l = `${e}-${t}`;
  return n && (l += `-${n}`), r && (l += `__${r}`), a && (l += `--${a}`), l;
}, $a = Symbol("namespaceContextKey"), _i = (e) => {
  const t = e || (vt() ? Qe($a, V(Xt)) : V(Xt));
  return $(() => s(t) || Xt);
}, Xn = (e, t) => {
  const n = _i(t);
  return {
    namespace: n,
    b: (k = "") => it(n.value, e, k, "", ""),
    e: (k) => k ? it(n.value, e, "", k, "") : "",
    m: (k) => k ? it(n.value, e, "", "", k) : "",
    be: (k, y) => k && y ? it(n.value, e, k, y, "") : "",
    em: (k, y) => k && y ? it(n.value, e, "", k, y) : "",
    bm: (k, y) => k && y ? it(n.value, e, k, "", y) : "",
    bem: (k, y, f) => k && y && f ? it(n.value, e, k, y, f) : "",
    is: (k, ...y) => {
      const f = y.length >= 1 ? y[0] : !0;
      return k && f ? `${gi}${k}` : "";
    },
    cssVar: (k) => {
      const y = {};
      for (const f in k)
        k[f] && (y[`--${n.value}-${f}`] = k[f]);
      return y;
    },
    cssVarName: (k) => `--${n.value}-${k}`,
    cssVarBlock: (k) => {
      const y = {};
      for (const f in k)
        k[f] && (y[`--${n.value}-${e}-${f}`] = k[f]);
      return y;
    },
    cssVarBlockName: (k) => `--${n.value}-${e}-${k}`
  };
};
/**
* @vue/shared v3.5.13
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/
const wi = Object.prototype.hasOwnProperty, Rr = (e, t) => wi.call(e, t), Wt = (e) => typeof e == "function", ct = (e) => typeof e == "string", ja = (e) => e !== null && typeof e == "object";
var vi = typeof global == "object" && global && global.Object === Object && global, bi = typeof self == "object" && self && self.Object === Object && self, Jn = vi || bi || Function("return this")(), Ct = Jn.Symbol, za = Object.prototype, yi = za.hasOwnProperty, ki = za.toString, Ot = Ct ? Ct.toStringTag : void 0;
function Ci(e) {
  var t = yi.call(e, Ot), n = e[Ot];
  try {
    e[Ot] = void 0;
    var r = !0;
  } catch {
  }
  var a = ki.call(e);
  return r && (t ? e[Ot] = n : delete e[Ot]), a;
}
var Si = Object.prototype, Li = Si.toString;
function Ei(e) {
  return Li.call(e);
}
var Ti = "[object Null]", Ni = "[object Undefined]", xr = Ct ? Ct.toStringTag : void 0;
function Ua(e) {
  return e == null ? e === void 0 ? Ni : Ti : xr && xr in Object(e) ? Ci(e) : Ei(e);
}
function Ii(e) {
  return e != null && typeof e == "object";
}
var Oi = "[object Symbol]";
function qn(e) {
  return typeof e == "symbol" || Ii(e) && Ua(e) == Oi;
}
function Pi(e, t) {
  for (var n = -1, r = e == null ? 0 : e.length, a = Array(r); ++n < r; )
    a[n] = t(e[n], n, e);
  return a;
}
var Qn = Array.isArray, Wr = Ct ? Ct.prototype : void 0, Dr = Wr ? Wr.toString : void 0;
function Va(e) {
  if (typeof e == "string")
    return e;
  if (Qn(e))
    return Pi(e, Va) + "";
  if (qn(e))
    return Dr ? Dr.call(e) : "";
  var t = e + "";
  return t == "0" && 1 / e == -1 / 0 ? "-0" : t;
}
function Ha(e) {
  var t = typeof e;
  return e != null && (t == "object" || t == "function");
}
var Ai = "[object AsyncFunction]", Mi = "[object Function]", Fi = "[object GeneratorFunction]", Ri = "[object Proxy]";
function xi(e) {
  if (!Ha(e))
    return !1;
  var t = Ua(e);
  return t == Mi || t == Fi || t == Ai || t == Ri;
}
var Cn = Jn["__core-js_shared__"], $r = function() {
  var e = /[^.]+$/.exec(Cn && Cn.keys && Cn.keys.IE_PROTO || "");
  return e ? "Symbol(src)_1." + e : "";
}();
function Wi(e) {
  return !!$r && $r in e;
}
var Di = Function.prototype, $i = Di.toString;
function ji(e) {
  if (e != null) {
    try {
      return $i.call(e);
    } catch {
    }
    try {
      return e + "";
    } catch {
    }
  }
  return "";
}
var zi = /[\\^$.*+?()[\]{}|]/g, Ui = /^\[object .+?Constructor\]$/, Vi = Function.prototype, Hi = Object.prototype, Gi = Vi.toString, Ki = Hi.hasOwnProperty, Bi = RegExp(
  "^" + Gi.call(Ki).replace(zi, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$"
);
function Yi(e) {
  if (!Ha(e) || Wi(e))
    return !1;
  var t = xi(e) ? Bi : Ui;
  return t.test(ji(e));
}
function Zi(e, t) {
  return e?.[t];
}
function Ga(e, t) {
  var n = Zi(e, t);
  return Yi(n) ? n : void 0;
}
function Xi(e, t) {
  return e === t || e !== e && t !== t;
}
var Ji = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/, qi = /^\w*$/;
function Qi(e, t) {
  if (Qn(e))
    return !1;
  var n = typeof e;
  return n == "number" || n == "symbol" || n == "boolean" || e == null || qn(e) ? !0 : qi.test(e) || !Ji.test(e) || t != null && e in Object(t);
}
var Dt = Ga(Object, "create");
function eo() {
  this.__data__ = Dt ? Dt(null) : {}, this.size = 0;
}
function to(e) {
  var t = this.has(e) && delete this.__data__[e];
  return this.size -= t ? 1 : 0, t;
}
var no = "__lodash_hash_undefined__", ro = Object.prototype, ao = ro.hasOwnProperty;
function so(e) {
  var t = this.__data__;
  if (Dt) {
    var n = t[e];
    return n === no ? void 0 : n;
  }
  return ao.call(t, e) ? t[e] : void 0;
}
var lo = Object.prototype, io = lo.hasOwnProperty;
function oo(e) {
  var t = this.__data__;
  return Dt ? t[e] !== void 0 : io.call(t, e);
}
var co = "__lodash_hash_undefined__";
function uo(e, t) {
  var n = this.__data__;
  return this.size += this.has(e) ? 0 : 1, n[e] = Dt && t === void 0 ? co : t, this;
}
function ut(e) {
  var t = -1, n = e == null ? 0 : e.length;
  for (this.clear(); ++t < n; ) {
    var r = e[t];
    this.set(r[0], r[1]);
  }
}
ut.prototype.clear = eo;
ut.prototype.delete = to;
ut.prototype.get = so;
ut.prototype.has = oo;
ut.prototype.set = uo;
function fo() {
  this.__data__ = [], this.size = 0;
}
function hn(e, t) {
  for (var n = e.length; n--; )
    if (Xi(e[n][0], t))
      return n;
  return -1;
}
var ho = Array.prototype, po = ho.splice;
function mo(e) {
  var t = this.__data__, n = hn(t, e);
  if (n < 0)
    return !1;
  var r = t.length - 1;
  return n == r ? t.pop() : po.call(t, n, 1), --this.size, !0;
}
function go(e) {
  var t = this.__data__, n = hn(t, e);
  return n < 0 ? void 0 : t[n][1];
}
function _o(e) {
  return hn(this.__data__, e) > -1;
}
function wo(e, t) {
  var n = this.__data__, r = hn(n, e);
  return r < 0 ? (++this.size, n.push([e, t])) : n[r][1] = t, this;
}
function Tt(e) {
  var t = -1, n = e == null ? 0 : e.length;
  for (this.clear(); ++t < n; ) {
    var r = e[t];
    this.set(r[0], r[1]);
  }
}
Tt.prototype.clear = fo;
Tt.prototype.delete = mo;
Tt.prototype.get = go;
Tt.prototype.has = _o;
Tt.prototype.set = wo;
var vo = Ga(Jn, "Map");
function bo() {
  this.size = 0, this.__data__ = {
    hash: new ut(),
    map: new (vo || Tt)(),
    string: new ut()
  };
}
function yo(e) {
  var t = typeof e;
  return t == "string" || t == "number" || t == "symbol" || t == "boolean" ? e !== "__proto__" : e === null;
}
function pn(e, t) {
  var n = e.__data__;
  return yo(t) ? n[typeof t == "string" ? "string" : "hash"] : n.map;
}
function ko(e) {
  var t = pn(this, e).delete(e);
  return this.size -= t ? 1 : 0, t;
}
function Co(e) {
  return pn(this, e).get(e);
}
function So(e) {
  return pn(this, e).has(e);
}
function Lo(e, t) {
  var n = pn(this, e), r = n.size;
  return n.set(e, t), this.size += n.size == r ? 0 : 1, this;
}
function ht(e) {
  var t = -1, n = e == null ? 0 : e.length;
  for (this.clear(); ++t < n; ) {
    var r = e[t];
    this.set(r[0], r[1]);
  }
}
ht.prototype.clear = bo;
ht.prototype.delete = ko;
ht.prototype.get = Co;
ht.prototype.has = So;
ht.prototype.set = Lo;
var Eo = "Expected a function";
function er(e, t) {
  if (typeof e != "function" || t != null && typeof t != "function")
    throw new TypeError(Eo);
  var n = function() {
    var r = arguments, a = t ? t.apply(this, r) : r[0], l = n.cache;
    if (l.has(a))
      return l.get(a);
    var i = e.apply(this, r);
    return n.cache = l.set(a, i) || l, i;
  };
  return n.cache = new (er.Cache || ht)(), n;
}
er.Cache = ht;
var To = 500;
function No(e) {
  var t = er(e, function(r) {
    return n.size === To && n.clear(), r;
  }), n = t.cache;
  return t;
}
var Io = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g, Oo = /\\(\\)?/g, Po = No(function(e) {
  var t = [];
  return e.charCodeAt(0) === 46 && t.push(""), e.replace(Io, function(n, r, a, l) {
    t.push(a ? l.replace(Oo, "$1") : r || n);
  }), t;
});
function Ao(e) {
  return e == null ? "" : Va(e);
}
function Mo(e, t) {
  return Qn(e) ? e : Qi(e, t) ? [e] : Po(Ao(e));
}
function Fo(e) {
  if (typeof e == "string" || qn(e))
    return e;
  var t = e + "";
  return t == "0" && 1 / e == -1 / 0 ? "-0" : t;
}
function Ro(e, t) {
  t = Mo(t, e);
  for (var n = 0, r = t.length; e != null && n < r; )
    e = e[Fo(t[n++])];
  return n && n == r ? e : void 0;
}
function xo(e, t, n) {
  var r = e == null ? void 0 : Ro(e, t);
  return r === void 0 ? n : r;
}
function Wo(e) {
  for (var t = -1, n = e == null ? 0 : e.length, r = {}; ++t < n; ) {
    var a = e[t];
    r[a[0]] = a[1];
  }
  return r;
}
const Ka = (e) => e === void 0, jr = (e) => typeof e == "boolean", dt = (e) => typeof e == "number", xn = (e) => typeof Element > "u" ? !1 : e instanceof Element, Do = (e) => ct(e) ? !Number.isNaN(Number(e)) : !1;
var zr;
const pt = typeof window < "u", $o = (e) => typeof e == "string", jo = () => {
};
pt && ((zr = window?.navigator) != null && zr.userAgent) && /iP(ad|hone|od)/.test(window.navigator.userAgent);
function tr(e) {
  return typeof e == "function" ? e() : s(e);
}
function zo(e) {
  return e;
}
function nr(e) {
  return ms() ? (gs(e), !0) : !1;
}
function Uo(e, t = !0) {
  vt() ? Et(e) : t ? e() : la(e);
}
function Ba(e, t, n = {}) {
  const {
    immediate: r = !0
  } = n, a = V(!1);
  let l = null;
  function i() {
    l && (clearTimeout(l), l = null);
  }
  function u() {
    a.value = !1, i();
  }
  function d(...p) {
    i(), a.value = !0, l = setTimeout(() => {
      a.value = !1, l = null, e(...p);
    }, tr(t));
  }
  return r && (a.value = !0, pt && d()), nr(u), {
    isPending: ps(a),
    start: d,
    stop: u
  };
}
function Ya(e) {
  var t;
  const n = tr(e);
  return (t = n?.$el) != null ? t : n;
}
const Za = pt ? window : void 0;
function Xa(...e) {
  let t, n, r, a;
  if ($o(e[0]) || Array.isArray(e[0]) ? ([n, r, a] = e, t = Za) : [t, n, r, a] = e, !t)
    return jo;
  Array.isArray(n) || (n = [n]), Array.isArray(r) || (r = [r]);
  const l = [], i = () => {
    l.forEach((v) => v()), l.length = 0;
  }, u = (v, C, N, A) => (v.addEventListener(C, N, A), () => v.removeEventListener(C, N, A)), d = wt(() => [Ya(t), tr(a)], ([v, C]) => {
    i(), v && l.push(...n.flatMap((N) => r.map((A) => u(v, N, A, C))));
  }, { immediate: !0, flush: "post" }), p = () => {
    d(), i();
  };
  return nr(p), p;
}
function Vo(e, t = !1) {
  const n = V(), r = () => n.value = !!e();
  return r(), Uo(r, t), n;
}
const Ur = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {}, Vr = "__vueuse_ssr_handlers__";
Ur[Vr] = Ur[Vr] || {};
var Hr = Object.getOwnPropertySymbols, Ho = Object.prototype.hasOwnProperty, Go = Object.prototype.propertyIsEnumerable, Ko = (e, t) => {
  var n = {};
  for (var r in e)
    Ho.call(e, r) && t.indexOf(r) < 0 && (n[r] = e[r]);
  if (e != null && Hr)
    for (var r of Hr(e))
      t.indexOf(r) < 0 && Go.call(e, r) && (n[r] = e[r]);
  return n;
};
function Bo(e, t, n = {}) {
  const r = n, { window: a = Za } = r, l = Ko(r, ["window"]);
  let i;
  const u = Vo(() => a && "ResizeObserver" in a), d = () => {
    i && (i.disconnect(), i = void 0);
  }, p = wt(() => Ya(e), (C) => {
    d(), u.value && a && C && (i = new ResizeObserver(t), i.observe(C, l));
  }, { immediate: !0, flush: "post" }), v = () => {
    d(), p();
  };
  return nr(v), {
    isSupported: u,
    stop: v
  };
}
var Gr;
(function(e) {
  e.UP = "UP", e.RIGHT = "RIGHT", e.DOWN = "DOWN", e.LEFT = "LEFT", e.NONE = "NONE";
})(Gr || (Gr = {}));
var Yo = Object.defineProperty, Kr = Object.getOwnPropertySymbols, Zo = Object.prototype.hasOwnProperty, Xo = Object.prototype.propertyIsEnumerable, Br = (e, t, n) => t in e ? Yo(e, t, { enumerable: !0, configurable: !0, writable: !0, value: n }) : e[t] = n, Jo = (e, t) => {
  for (var n in t || (t = {}))
    Zo.call(t, n) && Br(e, n, t[n]);
  if (Kr)
    for (var n of Kr(t))
      Xo.call(t, n) && Br(e, n, t[n]);
  return e;
};
const qo = {
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
Jo({
  linear: zo
}, qo);
const Yr = {
  current: 0
}, Zr = V(0), Ja = 2e3, Xr = Symbol("elZIndexContextKey"), qa = Symbol("zIndexContextKey"), Qo = (e) => {
  const t = vt() ? Qe(Xr, Yr) : Yr, n = e || (vt() ? Qe(qa, void 0) : void 0), r = $(() => {
    const i = s(n);
    return dt(i) ? i : Ja;
  }), a = $(() => r.value + Zr.value), l = () => (t.current++, Zr.value = t.current, a.value);
  return !pt && Qe(Xr), {
    initialZIndex: r,
    currentZIndex: a,
    nextZIndex: l
  };
};
var ec = {
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
const tc = (e) => (t, n) => nc(t, n, s(e)), nc = (e, t, n) => xo(n, e, e).replace(/\{(\w+)\}/g, (r, a) => {
  var l;
  return `${(l = t?.[a]) != null ? l : `{${a}}`}`;
}), rc = (e) => {
  const t = $(() => s(e).name), n = ia(e) ? e : V(e);
  return {
    lang: t,
    locale: n,
    t: tc(e)
  };
}, Qa = Symbol("localeContextKey"), ac = (e) => {
  const t = e || Qe(Qa, V());
  return rc($(() => t.value || ec));
}, es = "__epPropKey", Ce = (e) => e, sc = (e) => ja(e) && !!e[es], ts = (e, t) => {
  if (!ja(e) || sc(e))
    return e;
  const { values: n, required: r, default: a, type: l, validator: i } = e, d = {
    type: l,
    required: !!r,
    validator: n || i ? (p) => {
      let v = !1, C = [];
      if (n && (C = Array.from(n), Rr(e, "default") && C.push(a), v || (v = C.includes(p))), i && (v || (v = i(p))), !v && C.length > 0) {
        const N = [...new Set(C)].map((A) => JSON.stringify(A)).join(", ");
        _s(`Invalid prop: validation failed${t ? ` for prop "${t}"` : ""}. Expected one of [${N}], got value ${JSON.stringify(p)}.`);
      }
      return v;
    } : void 0,
    [es]: !0
  };
  return Rr(e, "default") && (d.default = a), d;
}, Nt = (e) => Wo(Object.entries(e).map(([t, n]) => [
  t,
  ts(n, t)
])), lc = ["", "default", "small", "large"], ic = ts({
  type: String,
  values: lc,
  required: !1
}), oc = Symbol("size"), cc = Symbol("emptyValuesContextKey"), uc = Nt({
  emptyValues: Array,
  valueOnClear: {
    type: [String, Number, Boolean, Function],
    default: void 0,
    validator: (e) => Wt(e) ? !e() : !e
  }
}), Jr = (e) => Object.keys(e), sn = V();
function ns(e, t = void 0) {
  return vt() ? Qe(Da, sn) : sn;
}
function rs(e, t) {
  const n = ns(), r = Xn(e, $(() => {
    var u;
    return ((u = n.value) == null ? void 0 : u.namespace) || Xt;
  })), a = ac($(() => {
    var u;
    return (u = n.value) == null ? void 0 : u.locale;
  })), l = Qo($(() => {
    var u;
    return ((u = n.value) == null ? void 0 : u.zIndex) || Ja;
  })), i = $(() => {
    var u;
    return s(t) || ((u = n.value) == null ? void 0 : u.size) || "";
  });
  return as($(() => s(n) || {})), {
    ns: r,
    locale: a,
    zIndex: l,
    size: i
  };
}
const as = (e, t, n = !1) => {
  var r;
  const a = !!vt(), l = a ? ns() : void 0, i = (r = void 0) != null ? r : a ? ws : void 0;
  if (!i)
    return;
  const u = $(() => {
    const d = s(e);
    return l?.value ? dc(l.value, d) : d;
  });
  return i(Da, u), i(Qa, $(() => u.value.locale)), i($a, $(() => u.value.namespace)), i(qa, $(() => u.value.zIndex)), i(oc, {
    size: $(() => u.value.size || "")
  }), i(cc, $(() => ({
    emptyValues: u.value.emptyValues,
    valueOnClear: u.value.valueOnClear
  }))), (n || !sn.value) && (sn.value = u.value), u;
}, dc = (e, t) => {
  const n = [.../* @__PURE__ */ new Set([...Jr(e), ...Jr(t)])], r = {};
  for (const a of n)
    r[a] = t[a] !== void 0 ? t[a] : e[a];
  return r;
};
var mn = (e, t) => {
  const n = e.__vccOpts || e;
  for (const [r, a] of t)
    n[r] = a;
  return n;
};
function Wn(e, t = "px") {
  if (!e)
    return "";
  if (dt(e) || Do(e))
    return `${e}${t}`;
  if (ct(e))
    return e;
}
const ss = (e, t) => (e.install = (n) => {
  for (const r of [e, ...Object.values({})])
    n.component(r.name, r);
}, e), ls = (e, t) => (e.install = (n) => {
  e._context = n._context, n.config.globalProperties[t] = e;
}, e), fc = Nt({
  size: {
    type: Ce([Number, String])
  },
  color: {
    type: String
  }
}), hc = ue({
  name: "ElIcon",
  inheritAttrs: !1
}), pc = /* @__PURE__ */ ue({
  ...hc,
  props: fc,
  setup(e) {
    const t = e, n = Xn("icon"), r = $(() => {
      const { size: a, color: l } = t;
      return !a && !l ? {} : {
        fontSize: Ka(a) ? void 0 : Wn(a),
        "--color": l
      };
    });
    return (a, l) => (U(), K("i", vs({
      class: s(n).b(),
      style: s(r)
    }, a.$attrs), [
      bt(a.$slots, "default")
    ], 16));
  }
});
var mc = /* @__PURE__ */ mn(pc, [["__file", "icon.vue"]]);
const ln = ss(mc);
/*! Element Plus Icons Vue v2.3.1 */
var gc = /* @__PURE__ */ ue({
  name: "CircleCloseFilled",
  __name: "circle-close-filled",
  setup(e) {
    return (t, n) => (U(), K("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 1024 1024"
    }, [
      h("path", {
        fill: "currentColor",
        d: "M512 64a448 448 0 1 1 0 896 448 448 0 0 1 0-896m0 393.664L407.936 353.6a38.4 38.4 0 1 0-54.336 54.336L457.664 512 353.6 616.064a38.4 38.4 0 1 0 54.336 54.336L512 566.336 616.064 670.4a38.4 38.4 0 1 0 54.336-54.336L566.336 512 670.4 407.936a38.4 38.4 0 1 0-54.336-54.336z"
      })
    ]));
  }
}), _c = gc, wc = /* @__PURE__ */ ue({
  name: "Close",
  __name: "close",
  setup(e) {
    return (t, n) => (U(), K("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 1024 1024"
    }, [
      h("path", {
        fill: "currentColor",
        d: "M764.288 214.592 512 466.88 259.712 214.592a31.936 31.936 0 0 0-45.12 45.12L466.752 512 214.528 764.224a31.936 31.936 0 1 0 45.12 45.184L512 557.184l252.288 252.288a31.936 31.936 0 0 0 45.12-45.12L557.12 512.064l252.288-252.352a31.936 31.936 0 1 0-45.12-45.184z"
      })
    ]));
  }
}), is = wc, vc = /* @__PURE__ */ ue({
  name: "InfoFilled",
  __name: "info-filled",
  setup(e) {
    return (t, n) => (U(), K("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 1024 1024"
    }, [
      h("path", {
        fill: "currentColor",
        d: "M512 64a448 448 0 1 1 0 896.064A448 448 0 0 1 512 64m67.2 275.072c33.28 0 60.288-23.104 60.288-57.344s-27.072-57.344-60.288-57.344c-33.28 0-60.16 23.104-60.16 57.344s26.88 57.344 60.16 57.344M590.912 699.2c0-6.848 2.368-24.64 1.024-34.752l-52.608 60.544c-10.88 11.456-24.512 19.392-30.912 17.28a12.992 12.992 0 0 1-8.256-14.72l87.68-276.992c7.168-35.136-12.544-67.2-54.336-71.296-44.096 0-108.992 44.736-148.48 101.504 0 6.784-1.28 23.68.064 33.792l52.544-60.608c10.88-11.328 23.552-19.328 29.952-17.152a12.8 12.8 0 0 1 7.808 16.128L388.48 728.576c-10.048 32.256 8.96 63.872 55.04 71.04 67.84 0 107.904-43.648 147.456-100.416z"
      })
    ]));
  }
}), bc = vc, yc = /* @__PURE__ */ ue({
  name: "SuccessFilled",
  __name: "success-filled",
  setup(e) {
    return (t, n) => (U(), K("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 1024 1024"
    }, [
      h("path", {
        fill: "currentColor",
        d: "M512 64a448 448 0 1 1 0 896 448 448 0 0 1 0-896m-55.808 536.384-99.52-99.584a38.4 38.4 0 1 0-54.336 54.336l126.72 126.72a38.272 38.272 0 0 0 54.336 0l262.4-262.464a38.4 38.4 0 1 0-54.272-54.336z"
      })
    ]));
  }
}), kc = yc, Cc = /* @__PURE__ */ ue({
  name: "WarningFilled",
  __name: "warning-filled",
  setup(e) {
    return (t, n) => (U(), K("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 1024 1024"
    }, [
      h("path", {
        fill: "currentColor",
        d: "M512 64a448 448 0 1 1 0 896 448 448 0 0 1 0-896m0 192a58.432 58.432 0 0 0-58.24 63.744l23.36 256.384a35.072 35.072 0 0 0 69.76 0l23.296-256.384A58.432 58.432 0 0 0 512 256m0 512a51.2 51.2 0 1 0 0-102.4 51.2 51.2 0 0 0 0 102.4"
      })
    ]));
  }
}), Sc = Cc;
const os = Ce([
  String,
  Object,
  Function
]), Lc = {
  Close: is
}, Ec = {
  Close: is
}, on = {
  success: kc,
  warning: Sc,
  error: _c,
  info: bc
}, Tc = (e) => e, Jt = {
  esc: "Escape",
  delete: "Delete",
  backspace: "Backspace"
}, Nc = Nt({
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
    type: Ce([String, Object, Array])
  },
  offset: {
    type: Ce(Array),
    default: [0, 0]
  },
  badgeClass: {
    type: String
  }
}), Ic = ue({
  name: "ElBadge"
}), Oc = /* @__PURE__ */ ue({
  ...Ic,
  props: Nc,
  setup(e, { expose: t }) {
    const n = e, r = Xn("badge"), a = $(() => n.isDot ? "" : dt(n.value) && dt(n.max) ? n.max < n.value ? `${n.max}+` : `${n.value}` : `${n.value}`), l = $(() => {
      var i, u, d, p, v;
      return [
        {
          backgroundColor: n.color,
          marginRight: Wn(-((u = (i = n.offset) == null ? void 0 : i[0]) != null ? u : 0)),
          marginTop: Wn((p = (d = n.offset) == null ? void 0 : d[1]) != null ? p : 0)
        },
        (v = n.badgeStyle) != null ? v : {}
      ];
    });
    return t({
      content: a
    }), (i, u) => (U(), K("div", {
      class: H(s(r).b())
    }, [
      bt(i.$slots, "default"),
      T(Un, {
        name: `${s(r).namespace.value}-zoom-in-center`,
        persisted: ""
      }, {
        default: ot(() => [
          Me(h("sup", {
            class: H([
              s(r).e("content"),
              s(r).em("content", i.type),
              s(r).is("fixed", !!i.$slots.default),
              s(r).is("dot", i.isDot),
              s(r).is("hide-zero", !i.showZero && n.value === 0),
              i.badgeClass
            ]),
            style: qt(s(l))
          }, [
            bt(i.$slots, "content", { value: s(a) }, () => [
              fe(P(s(a)), 1)
            ])
          ], 6), [
            [Qt, !i.hidden && (s(a) || i.isDot || i.$slots.content)]
          ])
        ]),
        _: 3
      }, 8, ["name"])
    ], 2));
  }
});
var Pc = /* @__PURE__ */ mn(Oc, [["__file", "badge.vue"]]);
const Ac = ss(Pc), Mc = Nt({
  a11y: {
    type: Boolean,
    default: !0
  },
  locale: {
    type: Ce(Object)
  },
  size: ic,
  button: {
    type: Ce(Object)
  },
  experimentalFeatures: {
    type: Ce(Object)
  },
  keyboardNavigation: {
    type: Boolean,
    default: !0
  },
  message: {
    type: Ce(Object)
  },
  zIndex: Number,
  namespace: {
    type: String,
    default: "el"
  },
  ...uc
}), Ee = {};
ue({
  name: "ElConfigProvider",
  props: Mc,
  setup(e, { slots: t }) {
    wt(() => e.message, (r) => {
      Object.assign(Ee, r ?? {});
    }, { immediate: !0, deep: !0 });
    const n = as(e);
    return () => bt(t, "default", { config: n?.value });
  }
});
const cs = ["success", "info", "warning", "error"], pe = Tc({
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
  appendTo: pt ? document.body : void 0
}), Fc = Nt({
  customClass: {
    type: String,
    default: pe.customClass
  },
  center: {
    type: Boolean,
    default: pe.center
  },
  dangerouslyUseHTMLString: {
    type: Boolean,
    default: pe.dangerouslyUseHTMLString
  },
  duration: {
    type: Number,
    default: pe.duration
  },
  icon: {
    type: os,
    default: pe.icon
  },
  id: {
    type: String,
    default: pe.id
  },
  message: {
    type: Ce([
      String,
      Object,
      Function
    ]),
    default: pe.message
  },
  onClose: {
    type: Ce(Function),
    default: pe.onClose
  },
  showClose: {
    type: Boolean,
    default: pe.showClose
  },
  type: {
    type: String,
    values: cs,
    default: pe.type
  },
  plain: {
    type: Boolean,
    default: pe.plain
  },
  offset: {
    type: Number,
    default: pe.offset
  },
  zIndex: {
    type: Number,
    default: pe.zIndex
  },
  grouping: {
    type: Boolean,
    default: pe.grouping
  },
  repeatNum: {
    type: Number,
    default: pe.repeatNum
  }
}), Rc = {
  destroy: () => !0
}, Ne = bs([]), xc = (e) => {
  const t = Ne.findIndex((a) => a.id === e), n = Ne[t];
  let r;
  return t > 0 && (r = Ne[t - 1]), { current: n, prev: r };
}, Wc = (e) => {
  const { prev: t } = xc(e);
  return t ? t.vm.exposed.bottom.value : 0;
}, Dc = (e, t) => Ne.findIndex((r) => r.id === e) > 0 ? 16 : t, $c = ue({
  name: "ElMessage"
}), jc = /* @__PURE__ */ ue({
  ...$c,
  props: Fc,
  emits: Rc,
  setup(e, { expose: t }) {
    const n = e, { Close: r } = Ec, { ns: a, zIndex: l } = rs("message"), { currentZIndex: i, nextZIndex: u } = l, d = V(), p = V(!1), v = V(0);
    let C;
    const N = $(() => n.type ? n.type === "error" ? "danger" : n.type : "info"), A = $(() => {
      const w = n.type;
      return { [a.bm("icon", w)]: w && on[w] };
    }), W = $(() => n.icon || on[n.type] || ""), k = $(() => Wc(n.id)), y = $(() => Dc(n.id, n.offset) + k.value), f = $(() => v.value + y.value), g = $(() => ({
      top: `${y.value}px`,
      zIndex: i.value
    }));
    function _() {
      n.duration !== 0 && ({ stop: C } = Ba(() => {
        O();
      }, n.duration));
    }
    function b() {
      C?.();
    }
    function O() {
      p.value = !1;
    }
    function M({ code: w }) {
      w === Jt.esc && O();
    }
    return Et(() => {
      _(), u(), p.value = !0;
    }), wt(() => n.repeatNum, () => {
      b(), _();
    }), Xa(document, "keydown", M), Bo(d, () => {
      v.value = d.value.getBoundingClientRect().height;
    }), t({
      visible: p,
      bottom: f,
      close: O
    }), (w, B) => (U(), Ue(Un, {
      name: s(a).b("fade"),
      onBeforeLeave: w.onClose,
      onAfterLeave: (Q) => w.$emit("destroy"),
      persisted: ""
    }, {
      default: ot(() => [
        Me(h("div", {
          id: w.id,
          ref_key: "messageRef",
          ref: d,
          class: H([
            s(a).b(),
            { [s(a).m(w.type)]: w.type },
            s(a).is("center", w.center),
            s(a).is("closable", w.showClose),
            s(a).is("plain", w.plain),
            w.customClass
          ]),
          style: qt(s(g)),
          role: "alert",
          onMouseenter: b,
          onMouseleave: _
        }, [
          w.repeatNum > 1 ? (U(), Ue(s(Ac), {
            key: 0,
            value: w.repeatNum,
            type: s(N),
            class: H(s(a).e("badge"))
          }, null, 8, ["value", "type", "class"])) : ke("v-if", !0),
          s(W) ? (U(), Ue(s(ln), {
            key: 1,
            class: H([s(a).e("icon"), s(A)])
          }, {
            default: ot(() => [
              (U(), Ue(oa(s(W))))
            ]),
            _: 1
          }, 8, ["class"])) : ke("v-if", !0),
          bt(w.$slots, "default", {}, () => [
            w.dangerouslyUseHTMLString ? (U(), K($t, { key: 1 }, [
              ke(" Caution here, message could've been compromised, never use user's input as message "),
              h("p", {
                class: H(s(a).e("content")),
                innerHTML: w.message
              }, null, 10, ["innerHTML"])
            ], 2112)) : (U(), K("p", {
              key: 0,
              class: H(s(a).e("content"))
            }, P(w.message), 3))
          ]),
          w.showClose ? (U(), Ue(s(ln), {
            key: 2,
            class: H(s(a).e("closeBtn")),
            onClick: _t(O, ["stop"])
          }, {
            default: ot(() => [
              T(s(r))
            ]),
            _: 1
          }, 8, ["class", "onClick"])) : ke("v-if", !0)
        ], 46, ["id"]), [
          [Qt, p.value]
        ])
      ]),
      _: 3
    }, 8, ["name", "onBeforeLeave", "onAfterLeave"]));
  }
});
var zc = /* @__PURE__ */ mn(jc, [["__file", "message.vue"]]);
let Uc = 1;
const us = (e) => {
  const t = !e || ct(e) || Mt(e) || Wt(e) ? { message: e } : e, n = {
    ...pe,
    ...t
  };
  if (!n.appendTo)
    n.appendTo = document.body;
  else if (ct(n.appendTo)) {
    let r = document.querySelector(n.appendTo);
    xn(r) || (r = document.body), n.appendTo = r;
  }
  return jr(Ee.grouping) && !n.grouping && (n.grouping = Ee.grouping), dt(Ee.duration) && n.duration === 3e3 && (n.duration = Ee.duration), dt(Ee.offset) && n.offset === 16 && (n.offset = Ee.offset), jr(Ee.showClose) && !n.showClose && (n.showClose = Ee.showClose), n;
}, Vc = (e) => {
  const t = Ne.indexOf(e);
  if (t === -1)
    return;
  Ne.splice(t, 1);
  const { handler: n } = e;
  n.close();
}, Hc = ({ appendTo: e, ...t }, n) => {
  const r = `message_${Uc++}`, a = t.onClose, l = document.createElement("div"), i = {
    ...t,
    id: r,
    onClose: () => {
      a?.(), Vc(v);
    },
    onDestroy: () => {
      en(null, l);
    }
  }, u = T(zc, i, Wt(i.message) || Mt(i.message) ? {
    default: Wt(i.message) ? i.message : () => i.message
  } : null);
  u.appContext = n || St._context, en(u, l), e.appendChild(l.firstElementChild);
  const d = u.component, v = {
    id: r,
    vnode: u,
    vm: d,
    handler: {
      close: () => {
        d.exposed.visible.value = !1;
      }
    },
    props: u.component.props
  };
  return v;
}, St = (e = {}, t) => {
  if (!pt)
    return { close: () => {
    } };
  const n = us(e);
  if (n.grouping && Ne.length) {
    const a = Ne.find(({ vnode: l }) => {
      var i;
      return ((i = l.props) == null ? void 0 : i.message) === n.message;
    });
    if (a)
      return a.props.repeatNum += 1, a.props.type = n.type, a.handler;
  }
  if (dt(Ee.max) && Ne.length >= Ee.max)
    return { close: () => {
    } };
  const r = Hc(n, t);
  return Ne.push(r), r.handler;
};
cs.forEach((e) => {
  St[e] = (t = {}, n) => {
    const r = us(t);
    return St({ ...r, type: e }, n);
  };
});
function Gc(e) {
  for (const t of Ne)
    (!e || e === t.props.type) && t.handler.close();
}
St.closeAll = Gc;
St._context = null;
const Kc = ls(St, "$message"), ds = [
  "success",
  "info",
  "warning",
  "error"
], Bc = Nt({
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
    type: os
  },
  id: {
    type: String,
    default: ""
  },
  message: {
    type: Ce([
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
    type: Ce(Function),
    default: () => {
    }
  },
  onClose: {
    type: Ce(Function),
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
    values: [...ds, ""],
    default: ""
  },
  zIndex: Number
}), Yc = {
  destroy: () => !0
}, Zc = ue({
  name: "ElNotification"
}), Xc = /* @__PURE__ */ ue({
  ...Zc,
  props: Bc,
  emits: Yc,
  setup(e, { expose: t }) {
    const n = e, { ns: r, zIndex: a } = rs("notification"), { nextZIndex: l, currentZIndex: i } = a, { Close: u } = Lc, d = V(!1);
    let p;
    const v = $(() => {
      const _ = n.type;
      return _ && on[n.type] ? r.m(_) : "";
    }), C = $(() => n.type && on[n.type] || n.icon), N = $(() => n.position.endsWith("right") ? "right" : "left"), A = $(() => n.position.startsWith("top") ? "top" : "bottom"), W = $(() => {
      var _;
      return {
        [A.value]: `${n.offset}px`,
        zIndex: (_ = n.zIndex) != null ? _ : i.value
      };
    });
    function k() {
      n.duration > 0 && ({ stop: p } = Ba(() => {
        d.value && f();
      }, n.duration));
    }
    function y() {
      p?.();
    }
    function f() {
      d.value = !1;
    }
    function g({ code: _ }) {
      _ === Jt.delete || _ === Jt.backspace ? y() : _ === Jt.esc ? d.value && f() : k();
    }
    return Et(() => {
      k(), l(), d.value = !0;
    }), Xa(document, "keydown", g), t({
      visible: d,
      close: f
    }), (_, b) => (U(), Ue(Un, {
      name: s(r).b("fade"),
      onBeforeLeave: _.onClose,
      onAfterLeave: (O) => _.$emit("destroy"),
      persisted: ""
    }, {
      default: ot(() => [
        Me(h("div", {
          id: _.id,
          class: H([s(r).b(), _.customClass, s(N)]),
          style: qt(s(W)),
          role: "alert",
          onMouseenter: y,
          onMouseleave: k,
          onClick: _.onClick
        }, [
          s(C) ? (U(), Ue(s(ln), {
            key: 0,
            class: H([s(r).e("icon"), s(v)])
          }, {
            default: ot(() => [
              (U(), Ue(oa(s(C))))
            ]),
            _: 1
          }, 8, ["class"])) : ke("v-if", !0),
          h("div", {
            class: H(s(r).e("group"))
          }, [
            h("h2", {
              class: H(s(r).e("title")),
              textContent: P(_.title)
            }, null, 10, ["textContent"]),
            Me(h("div", {
              class: H(s(r).e("content")),
              style: qt(_.title ? void 0 : { margin: 0 })
            }, [
              bt(_.$slots, "default", {}, () => [
                _.dangerouslyUseHTMLString ? (U(), K($t, { key: 1 }, [
                  ke(" Caution here, message could've been compromised, never use user's input as message "),
                  h("p", { innerHTML: _.message }, null, 8, ["innerHTML"])
                ], 2112)) : (U(), K("p", { key: 0 }, P(_.message), 1))
              ])
            ], 6), [
              [Qt, _.message]
            ]),
            _.showClose ? (U(), Ue(s(ln), {
              key: 0,
              class: H(s(r).e("closeBtn")),
              onClick: _t(f, ["stop"])
            }, {
              default: ot(() => [
                T(s(u))
              ]),
              _: 1
            }, 8, ["class", "onClick"])) : ke("v-if", !0)
          ], 2)
        ], 46, ["id", "onClick"]), [
          [Qt, d.value]
        ])
      ]),
      _: 3
    }, 8, ["name", "onBeforeLeave", "onAfterLeave"]));
  }
});
var Jc = /* @__PURE__ */ mn(Xc, [["__file", "notification.vue"]]);
const cn = {
  "top-left": [],
  "top-right": [],
  "bottom-left": [],
  "bottom-right": []
}, Dn = 16;
let qc = 1;
const Lt = function(e = {}, t) {
  if (!pt)
    return { close: () => {
    } };
  (ct(e) || Mt(e)) && (e = { message: e });
  const n = e.position || "top-right";
  let r = e.offset || 0;
  cn[n].forEach(({ vm: v }) => {
    var C;
    r += (((C = v.el) == null ? void 0 : C.offsetHeight) || 0) + Dn;
  }), r += Dn;
  const a = `notification_${qc++}`, l = e.onClose, i = {
    ...e,
    offset: r,
    id: a,
    onClose: () => {
      Qc(a, n, l);
    }
  };
  let u = document.body;
  xn(e.appendTo) ? u = e.appendTo : ct(e.appendTo) && (u = document.querySelector(e.appendTo)), xn(u) || (u = document.body);
  const d = document.createElement("div"), p = T(Jc, i, Wt(i.message) ? i.message : Mt(i.message) ? () => i.message : null);
  return p.appContext = Ka(t) ? Lt._context : t, p.props.onDestroy = () => {
    en(null, d);
  }, en(p, d), cn[n].push({ vm: p }), u.appendChild(d.firstElementChild), {
    close: () => {
      p.component.exposed.visible.value = !1;
    }
  };
};
ds.forEach((e) => {
  Lt[e] = (t = {}, n) => ((ct(t) || Mt(t)) && (t = {
    message: t
  }), Lt({ ...t, type: e }, n));
});
function Qc(e, t, n) {
  const r = cn[t], a = r.findIndex(({ vm: p }) => {
    var v;
    return ((v = p.component) == null ? void 0 : v.props.id) === e;
  });
  if (a === -1)
    return;
  const { vm: l } = r[a];
  if (!l)
    return;
  n?.(l);
  const i = l.el.offsetHeight, u = t.split("-")[0];
  r.splice(a, 1);
  const d = r.length;
  if (!(d < 1))
    for (let p = a; p < d; p++) {
      const { el: v, component: C } = r[p].vm, N = Number.parseInt(v.style[u], 10) - i - Dn;
      C.props.offset = N;
    }
}
function eu() {
  for (const e of Object.values(cn))
    e.forEach(({ vm: t }) => {
      t.component.exposed.visible.value = !1;
    });
}
Lt.closeAll = eu;
Lt._context = null;
const tu = ls(Lt, "$notify"), ne = {
  /**
   * 显示消息提示（简化版）
   * @param message 消息内容
   * @param type 消息类型，默认 success
   * @param position 显示位置，默认 center
   * @param duration 显示时长（毫秒），默认 3000
   */
  msg(e, t = "success", n = "center", r) {
    this.message({
      message: e,
      type: t,
      position: n,
      duration: r
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
      position: r = "center",
      duration: a = 3e3,
      showClose: l = !1
    } = e;
    r === "center" ? Kc({
      message: t,
      type: n,
      duration: a,
      showClose: l,
      grouping: !0,
      customClass: `app-toast app-toast--${n}`
    }) : tu({
      message: t,
      type: n,
      position: r,
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
};
var $n;
(function(e) {
  e[e.Audio = 1] = "Audio", e[e.Cache = 2] = "Cache", e[e.Config = 3] = "Config", e[e.Data = 4] = "Data", e[e.LocalData = 5] = "LocalData", e[e.Document = 6] = "Document", e[e.Download = 7] = "Download", e[e.Picture = 8] = "Picture", e[e.Public = 9] = "Public", e[e.Video = 10] = "Video", e[e.Resource = 11] = "Resource", e[e.Temp = 12] = "Temp", e[e.AppConfig = 13] = "AppConfig", e[e.AppData = 14] = "AppData", e[e.AppLocalData = 15] = "AppLocalData", e[e.AppCache = 16] = "AppCache", e[e.AppLog = 17] = "AppLog", e[e.Desktop = 18] = "Desktop", e[e.Executable = 19] = "Executable", e[e.Font = 20] = "Font", e[e.Home = 21] = "Home", e[e.Runtime = 22] = "Runtime", e[e.Template = 23] = "Template";
})($n || ($n = {}));
async function nu() {
  return E("plugin:path|resolve_directory", {
    directory: $n.AppCache
  });
}
async function ru(...e) {
  return E("plugin:path|join", { paths: e });
}
async function qr(e, t) {
  await E("plugin:opener|open_path", {
    path: e,
    with: t
  });
}
const au = () => ({
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
}), su = (e) => e ? /^https?:\/\//i.test(e) ? e : Ls(e) : "", Qr = () => E("wallpaper_get_config"), jn = (e) => E("wallpaper_save_config", { config: e }), ea = () => E("wallpaper_get_status"), ta = (e) => E("wallpaper_scan_folder", { path: e }), lu = (e) => E("wallpaper_set_fixed_image", { path: e }), iu = () => E("wallpaper_switch_now"), ou = (e) => E("wallpaper_apply_current_fit", { fitMode: e }), cu = (e) => E("wallpaper_fetch_wallhaven", { params: e }), uu = (e) => E("wallpaper_set_wallhaven_image", { wallpaper: e }), du = (e) => E("wallpaper_download_wallhaven_image", { wallpaper: e }), fu = () => E("wallpaper_clear_cache"), hu = (e, t) => new RegExp(`Command\\s+${t}\\s+not\\s+found`, "i").test(String(e)), pu = async () => {
  try {
    await E("wallpaper_open_cache_dir");
    return;
  } catch (n) {
    if (!hu(n, "wallpaper_open_cache_dir"))
      throw n;
  }
  const e = await nu(), t = await ru(e, "wallpaper-switcher");
  try {
    await qr(t);
  } catch {
    await qr(e);
  }
};
function mu({ config: e, refreshStatus: t }) {
  const { t: n } = jt(), r = V("switcher"), a = V([]), l = V(1), i = V(1), u = V(!1), d = V(""), p = V(""), v = V("general"), C = V("hot"), N = V(null), A = V(!1), W = V(!1), k = V(/* @__PURE__ */ new Set()), y = V(/* @__PURE__ */ new Set()), f = /* @__PURE__ */ new Map();
  let g = null, _ = null, b = null, O = 0;
  const M = $(() => C.value === "hot" ? "Hot" : "Toplist"), w = $(() => a.value.slice(0, 8)), B = $(() => {
    const z = p.value.trim();
    return v.value === "nature" ? z ? `${z} nature` : "nature" : z || null;
  }), Q = $(() => v.value), de = (z) => {
    const G = String(z).replace(/^Error:\s*/, "");
    return /unexpected EOF|handshake|timed out|error sending request|client error|Connect/i.test(G) ? n("wallpaperSwitcher.messages.wallhavenNetworkError") : G.length > 120 ? `${G.slice(0, 120)}...` : G;
  }, oe = (z, G) => {
    const se = new Set(k.value);
    G ? se.add(z) : se.delete(z), k.value = se;
  }, ee = (z) => {
    const G = new Set(y.value);
    G.add(z), y.value = G;
  }, Ke = (z, G) => {
    if (!(G instanceof HTMLImageElement)) {
      f.delete(z.id);
      return;
    }
    if (f.set(z.id, G), !g) {
      G.src = z.thumbs.large;
      return;
    }
    G.dataset.src = z.thumbs.large, g.observe(G);
  }, Be = () => {
    y.value = /* @__PURE__ */ new Set(), f.clear();
  }, Ie = async () => {
    e.value.wallhavenQuery = p.value.trim() || null, e.value.wallhavenCategory = v.value, e.value.wallhavenSource = C.value, e.value.mode = "wallhaven", await jn(e.value);
  }, we = async (z = l.value) => {
    const G = ++O;
    u.value = !0, d.value = "", a.value = [], Be();
    try {
      await Ie();
      const se = await cu({
        source: C.value,
        page: z,
        query: B.value,
        category: Q.value
      });
      if (G !== O) return;
      a.value = se.data, l.value = se.page, i.value = Math.max(1, se.lastPage), await la();
      for (const _e of f.values())
        g && g.observe(_e);
    } catch (se) {
      if (G !== O) return;
      a.value = [], d.value = de(se), ne.msg(d.value, "error");
    } finally {
      G === O && (u.value = !1);
    }
  }, Ye = () => we(1), nt = async (z) => {
    C.value = z, await we(1);
  }, ve = async (z) => {
    v.value = z, await we(1);
  }, be = async () => {
    p.value = "", v.value = e.value.wallhavenCategory || "general", C.value = e.value.wallhavenSource, l.value = 1, d.value = "", a.value = [], r.value = "wallhaven", await we(1);
  }, Le = async () => {
    r.value = "switcher", Re(), await t();
  }, Oe = (z) => {
    N.value = z, A.value = !0, W.value = !1;
  }, Re = () => {
    N.value = null, A.value = !1, W.value = !1;
  }, Ze = () => {
    A.value = !1;
  }, rt = () => {
    A.value = !1, W.value = !0;
  }, Xe = async (z) => {
    oe(z.id, !0);
    try {
      ne.msg(n("wallpaperSwitcher.messages.settingWallpaper"), "info"), await uu(z), await t(), ne.msg(n("wallpaperSwitcher.messages.wallpaperSet"), "success");
    } catch (G) {
      ne.msg(String(G), "error");
    } finally {
      oe(z.id, !1);
    }
  }, at = async (z) => {
    oe(z.id, !0);
    try {
      ne.msg(n("wallpaperSwitcher.messages.downloadingWallpaper"), "info"), await du(z), await t(), ne.msg(n("wallpaperSwitcher.messages.wallpaperDownloaded"), "success");
    } catch (G) {
      ne.msg(String(G), "error");
    } finally {
      oe(z.id, !1);
    }
  }, xe = async () => {
    l.value > 1 && await we(l.value - 1);
  }, st = async () => {
    l.value < i.value && await we(l.value + 1);
  };
  return Et(() => {
    g = new IntersectionObserver((z) => {
      for (const G of z) {
        if (!G.isIntersecting) continue;
        const se = G.target, _e = se.dataset.src;
        _e && se.src !== _e && (se.src = _e), g?.unobserve(se);
      }
    }, { root: null, rootMargin: "120px" }), _ = null, b = null;
  }), zn(() => {
    g?.disconnect(), g = null, _?.(), b?.();
  }), {
    activeView: r,
    wallpapers: a,
    wallhavenPage: l,
    wallhavenLastPage: i,
    wallhavenLoading: u,
    wallhavenError: d,
    wallhavenKeyword: p,
    wallhavenCategory: v,
    wallhavenSource: C,
    previewWallpaper: N,
    previewLoading: A,
    previewLoadFailed: W,
    workingIds: k,
    loadedThumbIds: y,
    wallhavenSourceLabel: M,
    visibleWallpapers: w,
    openWallhavenGrid: be,
    backToSwitcher: Le,
    openPreview: Oe,
    closePreview: Re,
    markPreviewLoaded: Ze,
    markPreviewFailed: rt,
    markThumbLoaded: ee,
    setThumbRef: Ke,
    refreshWallhaven: Ye,
    setWallhavenSource: nt,
    setWallhavenCategory: ve,
    setWallpaperFromWallhaven: Xe,
    downloadWallpaperFromWallhaven: at,
    prevWallhavenPage: xe,
    nextWallhavenPage: st,
    setupListeners: async () => {
      _ = await tn("wallpaper-switcher-changed", t), b = await tn("wallpaper-switcher-error", (z) => {
        ne.msg(z.payload?.message || n("wallpaperSwitcher.messages.scheduleSwitchFailed"), "error");
      });
    }
  };
}
var gu = {
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
function wu(e, t, n) {
  var r = typeof t.fill == "string" ? [t.fill] : t.fill || [], a = [], l = t.theme || n.theme;
  switch (l) {
    case "outline":
      a.push(typeof r[0] == "string" ? r[0] : "currentColor"), a.push("none"), a.push(typeof r[0] == "string" ? r[0] : "currentColor"), a.push("none");
      break;
    case "filled":
      a.push(typeof r[0] == "string" ? r[0] : "currentColor"), a.push(typeof r[0] == "string" ? r[0] : "currentColor"), a.push("#FFF"), a.push("#FFF");
      break;
    case "two-tone":
      a.push(typeof r[0] == "string" ? r[0] : "currentColor"), a.push(typeof r[1] == "string" ? r[1] : n.colors.twoTone.twoTone), a.push(typeof r[0] == "string" ? r[0] : "currentColor"), a.push(typeof r[1] == "string" ? r[1] : n.colors.twoTone.twoTone);
      break;
    case "multi-color":
      a.push(typeof r[0] == "string" ? r[0] : "currentColor"), a.push(typeof r[1] == "string" ? r[1] : n.colors.multiColor.outFillColor), a.push(typeof r[2] == "string" ? r[2] : n.colors.multiColor.innerStrokeColor), a.push(typeof r[3] == "string" ? r[3] : n.colors.multiColor.innerFillColor);
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
var vu = Symbol("icon-context");
function ge(e, t, n) {
  var r = {
    name: "icon-" + e,
    props: ["size", "strokeWidth", "strokeLinecap", "strokeLinejoin", "theme", "fill", "spin"],
    setup: function(l) {
      var i = _u(), u = Qe(vu, gu);
      return function() {
        var d = l.size, p = l.strokeWidth, v = l.strokeLinecap, C = l.strokeLinejoin, N = l.theme, A = l.fill, W = l.spin, k = wu(i, {
          size: d,
          strokeWidth: p,
          strokeLinecap: v,
          strokeLinejoin: C,
          theme: N,
          fill: A
        }, u), y = [u.prefix + "-icon"];
        return y.push(u.prefix + "-icon-" + e), t && u.rtl && y.push(u.prefix + "-icon-rtl"), W && y.push(u.prefix + "-icon-spin"), T("span", {
          class: y.join(" ")
        }, [n(k)]);
      };
    }
  };
  return r;
}
const bu = ge("back", !0, function(e) {
  return T("svg", {
    width: e.size,
    height: e.size,
    viewBox: "0 0 48 48",
    fill: "none"
  }, [T("path", {
    "fill-rule": "evenodd",
    "clip-rule": "evenodd",
    d: "M44 40.8361C39.1069 34.8632 34.7617 31.4739 30.9644 30.6682C27.1671 29.8625 23.5517 29.7408 20.1182 30.303V41L4 23.5453L20.1182 7V17.167C26.4667 17.2172 31.8638 19.4948 36.3095 24C40.7553 28.5052 43.3187 34.1172 44 40.8361Z",
    fill: e.colors[1],
    stroke: e.colors[0],
    "stroke-width": e.strokeWidth,
    "stroke-linejoin": e.strokeLinejoin
  }, null)]);
}), Kt = ge("close-small", !1, function(e) {
  return T("svg", {
    width: e.size,
    height: e.size,
    viewBox: "0 0 48 48",
    fill: "none"
  }, [T("path", {
    d: "M14 14L34 34",
    stroke: e.colors[0],
    "stroke-width": e.strokeWidth,
    "stroke-linecap": e.strokeLinecap,
    "stroke-linejoin": e.strokeLinejoin
  }, null), T("path", {
    d: "M14 34L34 14",
    stroke: e.colors[0],
    "stroke-width": e.strokeWidth,
    "stroke-linecap": e.strokeLinecap,
    "stroke-linejoin": e.strokeLinejoin
  }, null)]);
}), na = ge("computer", !1, function(e) {
  return T("svg", {
    width: e.size,
    height: e.size,
    viewBox: "0 0 48 48",
    fill: "none"
  }, [T("rect", {
    x: "19",
    y: "32",
    width: "10",
    height: "9",
    stroke: e.colors[0],
    "stroke-width": e.strokeWidth,
    "stroke-linecap": e.strokeLinecap,
    "stroke-linejoin": e.strokeLinejoin
  }, null), T("rect", {
    x: "5",
    y: "8",
    width: "38",
    height: "24",
    rx: "2",
    fill: e.colors[1],
    stroke: e.colors[0],
    "stroke-width": e.strokeWidth
  }, null), T("path", {
    d: "M22 27H26",
    stroke: e.colors[2],
    "stroke-width": e.strokeWidth,
    "stroke-linecap": e.strokeLinecap,
    "stroke-linejoin": e.strokeLinejoin
  }, null), T("path", {
    d: "M14 41L34 41",
    stroke: e.colors[0],
    "stroke-width": e.strokeWidth,
    "stroke-linecap": e.strokeLinecap,
    "stroke-linejoin": e.strokeLinejoin
  }, null)]);
}), yu = ge("delete", !1, function(e) {
  return T("svg", {
    width: e.size,
    height: e.size,
    viewBox: "0 0 48 48",
    fill: "none"
  }, [T("path", {
    d: "M9 10V44H39V10H9Z",
    fill: e.colors[1],
    stroke: e.colors[0],
    "stroke-width": e.strokeWidth,
    "stroke-linejoin": e.strokeLinejoin
  }, null), T("path", {
    d: "M20 20V33",
    stroke: e.colors[2],
    "stroke-width": e.strokeWidth,
    "stroke-linecap": e.strokeLinecap,
    "stroke-linejoin": e.strokeLinejoin
  }, null), T("path", {
    d: "M28 20V33",
    stroke: e.colors[2],
    "stroke-width": e.strokeWidth,
    "stroke-linecap": e.strokeLinecap,
    "stroke-linejoin": e.strokeLinejoin
  }, null), T("path", {
    d: "M4 10H44",
    stroke: e.colors[0],
    "stroke-width": e.strokeWidth,
    "stroke-linecap": e.strokeLinecap,
    "stroke-linejoin": e.strokeLinejoin
  }, null), T("path", {
    d: "M16 10L19.289 4H28.7771L32 10H16Z",
    fill: e.colors[1],
    stroke: e.colors[0],
    "stroke-width": e.strokeWidth,
    "stroke-linejoin": e.strokeLinejoin
  }, null)]);
}), ku = ge("download", !1, function(e) {
  return T("svg", {
    width: e.size,
    height: e.size,
    viewBox: "0 0 48 48",
    fill: "none"
  }, [T("path", {
    d: "M6 24.0083V42H42V24",
    stroke: e.colors[0],
    "stroke-width": e.strokeWidth,
    "stroke-linecap": e.strokeLinecap,
    "stroke-linejoin": e.strokeLinejoin
  }, null), T("path", {
    d: "M33 23L24 32L15 23",
    stroke: e.colors[0],
    "stroke-width": e.strokeWidth,
    "stroke-linecap": e.strokeLinecap,
    "stroke-linejoin": e.strokeLinejoin
  }, null), T("path", {
    d: "M23.9917 6V32",
    stroke: e.colors[0],
    "stroke-width": e.strokeWidth,
    "stroke-linecap": e.strokeLinecap,
    "stroke-linejoin": e.strokeLinejoin
  }, null)]);
}), Sn = ge("folder-open", !0, function(e) {
  return T("svg", {
    width: e.size,
    height: e.size,
    viewBox: "0 0 48 48",
    fill: "none"
  }, [T("path", {
    d: "M4 9V41L9 21H39.5V15C39.5 13.8954 38.6046 13 37.5 13H24L19 7H6C4.89543 7 4 7.89543 4 9Z",
    stroke: e.colors[0],
    "stroke-width": e.strokeWidth,
    "stroke-linecap": e.strokeLinecap,
    "stroke-linejoin": e.strokeLinejoin
  }, null), T("path", {
    d: "M40 41L44 21H8.8125L4 41H40Z",
    fill: e.colors[1],
    stroke: e.colors[0],
    "stroke-width": e.strokeWidth,
    "stroke-linecap": e.strokeLinecap,
    "stroke-linejoin": e.strokeLinejoin
  }, null)]);
}), Cu = ge("lightning", !0, function(e) {
  return T("svg", {
    width: e.size,
    height: e.size,
    viewBox: "0 0 48 48",
    fill: "none"
  }, [T("path", {
    d: "M19 4H37L26 18H41L17 44L22 25H8L19 4Z",
    fill: e.colors[1],
    stroke: e.colors[0],
    "stroke-width": e.strokeWidth,
    "stroke-linejoin": e.strokeLinejoin
  }, null)]);
}), Ln = ge("picture", !0, function(e) {
  return T("svg", {
    width: e.size,
    height: e.size,
    viewBox: "0 0 48 48",
    fill: "none"
  }, [T("path", {
    d: "M39 6H9C7.34315 6 6 7.34315 6 9V39C6 40.6569 7.34315 42 9 42H39C40.6569 42 42 40.6569 42 39V9C42 7.34315 40.6569 6 39 6Z",
    stroke: e.colors[0],
    "stroke-width": e.strokeWidth,
    "stroke-linecap": e.strokeLinecap,
    "stroke-linejoin": e.strokeLinejoin
  }, null), T("path", {
    d: "M18 23C20.7614 23 23 20.7614 23 18C23 15.2386 20.7614 13 18 13C15.2386 13 13 15.2386 13 18C13 20.7614 15.2386 23 18 23Z",
    fill: e.colors[1],
    stroke: e.colors[0],
    "stroke-width": e.strokeWidth,
    "stroke-linecap": e.strokeLinecap,
    "stroke-linejoin": e.strokeLinejoin
  }, null), T("path", {
    d: "M27.7901 26.2194C28.6064 25.1269 30.2528 25.1538 31.0329 26.2725L39.8077 38.8561C40.7322 40.182 39.7835 42.0001 38.1671 42.0001H16L27.7901 26.2194Z",
    stroke: e.colors[0],
    "stroke-width": e.strokeWidth,
    "stroke-linecap": e.strokeLinecap,
    "stroke-linejoin": e.strokeLinejoin
  }, null)]);
}), Su = ge("picture-album", !0, function(e) {
  return T("svg", {
    width: e.size,
    height: e.size,
    viewBox: "0 0 48 48",
    fill: "none"
  }, [T("rect", {
    x: "6",
    y: "6",
    width: "30",
    height: "30",
    rx: "2",
    fill: e.colors[1],
    stroke: e.colors[0],
    "stroke-width": e.strokeWidth,
    "stroke-linejoin": e.strokeLinejoin
  }, null), T("path", {
    d: "M42 12V39C42 40.6569 40.6569 42 39 42H12",
    stroke: e.colors[0],
    "stroke-width": e.strokeWidth,
    "stroke-linecap": e.strokeLinecap,
    "stroke-linejoin": e.strokeLinejoin
  }, null), T("path", {
    d: "M6 25L13.6562 18.1944C14.4204 17.5152 15.5738 17.5216 16.3303 18.2094L26 27",
    stroke: e.colors[2],
    "stroke-width": e.strokeWidth,
    "stroke-linecap": e.strokeLinecap,
    "stroke-linejoin": e.strokeLinejoin
  }, null), T("path", {
    d: "M22 23L26.7849 19.0125C27.4971 18.4191 28.5237 18.3928 29.2653 18.949L36 24",
    stroke: e.colors[2],
    "stroke-width": e.strokeWidth,
    "stroke-linecap": e.strokeLinecap,
    "stroke-linejoin": e.strokeLinejoin
  }, null), T("path", {
    d: "M6 19L6 27",
    stroke: e.colors[0],
    "stroke-width": e.strokeWidth,
    "stroke-linecap": e.strokeLinecap,
    "stroke-linejoin": e.strokeLinejoin
  }, null), T("path", {
    d: "M36 19V27",
    stroke: e.colors[0],
    "stroke-width": e.strokeWidth,
    "stroke-linecap": e.strokeLinecap,
    "stroke-linejoin": e.strokeLinejoin
  }, null)]);
}), Lu = ge("pin", !0, function(e) {
  return T("svg", {
    width: e.size,
    height: e.size,
    viewBox: "0 0 48 48",
    fill: "none"
  }, [T("g", {
    "clip-path": "url(#" + e.id + "1c742167)"
  }, [T("path", {
    d: "M10.6963 17.5042C13.3347 14.8657 16.4701 14.9387 19.8781 16.8076L32.62 9.74509L31.8989 4.78683L43.2126 16.1005L38.2656 15.3907L31.1918 28.1214C32.9752 31.7589 33.1337 34.6647 30.4953 37.3032C30.4953 37.3032 26.235 33.0429 22.7171 29.525L6.44305 41.5564L18.4382 25.2461C14.9202 21.7281 10.6963 17.5042 10.6963 17.5042Z",
    fill: e.colors[1],
    stroke: e.colors[0],
    "stroke-width": e.strokeWidth,
    "stroke-linejoin": e.strokeLinejoin
  }, null)]), T("defs", null, [T("clipPath", {
    id: e.id + "1c742167"
  }, [T("rect", {
    width: "48",
    height: "48",
    fill: e.colors[2]
  }, null)])])]);
}), Eu = ge("preview-open", !1, function(e) {
  return T("svg", {
    width: e.size,
    height: e.size,
    viewBox: "0 0 48 48",
    fill: "none"
  }, [T("path", {
    d: "M24 36C35.0457 36 44 24 44 24C44 24 35.0457 12 24 12C12.9543 12 4 24 4 24C4 24 12.9543 36 24 36Z",
    fill: e.colors[1],
    stroke: e.colors[0],
    "stroke-width": e.strokeWidth,
    "stroke-linejoin": e.strokeLinejoin
  }, null), T("path", {
    d: "M24 29C26.7614 29 29 26.7614 29 24C29 21.2386 26.7614 19 24 19C21.2386 19 19 21.2386 19 24C19 26.7614 21.2386 29 24 29Z",
    fill: e.colors[3],
    stroke: e.colors[2],
    "stroke-width": e.strokeWidth,
    "stroke-linejoin": e.strokeLinejoin
  }, null)]);
}), ra = ge("refresh", !0, function(e) {
  return T("svg", {
    width: e.size,
    height: e.size,
    viewBox: "0 0 48 48",
    fill: "none"
  }, [T("path", {
    d: "M42 8V24",
    stroke: e.colors[0],
    "stroke-width": e.strokeWidth,
    "stroke-linecap": e.strokeLinecap,
    "stroke-linejoin": e.strokeLinejoin
  }, null), T("path", {
    d: "M6 24L6 40",
    stroke: e.colors[0],
    "stroke-width": e.strokeWidth,
    "stroke-linecap": e.strokeLinecap,
    "stroke-linejoin": e.strokeLinejoin
  }, null), T("path", {
    d: "M42 24C42 14.0589 33.9411 6 24 6C18.9145 6 14.3216 8.10896 11.0481 11.5M6 24C6 33.9411 14.0589 42 24 42C28.8556 42 33.2622 40.0774 36.5 36.9519",
    stroke: e.colors[0],
    "stroke-width": e.strokeWidth,
    "stroke-linecap": e.strokeLinecap,
    "stroke-linejoin": e.strokeLinejoin
  }, null)]);
}), Tu = ge("save", !0, function(e) {
  return T("svg", {
    width: e.size,
    height: e.size,
    viewBox: "0 0 48 48",
    fill: "none"
  }, [T("path", {
    d: "M6 9C6 7.34315 7.34315 6 9 6H34.2814L42 13.2065V39C42 40.6569 40.6569 42 39 42H9C7.34315 42 6 40.6569 6 39V9Z",
    fill: e.colors[1],
    stroke: e.colors[0],
    "stroke-width": e.strokeWidth,
    "stroke-linejoin": e.strokeLinejoin
  }, null), T("path", {
    "fill-rule": "evenodd",
    "clip-rule": "evenodd",
    d: "M24.0083 6L24 13.3846C24 13.7245 23.5523 14 23 14H15C14.4477 14 14 13.7245 14 13.3846L14 6",
    fill: e.colors[3]
  }, null), T("path", {
    d: "M24.0083 6L24 13.3846C24 13.7245 23.5523 14 23 14H15C14.4477 14 14 13.7245 14 13.3846L14 6H24.0083Z",
    stroke: e.colors[2],
    "stroke-width": e.strokeWidth,
    "stroke-linejoin": e.strokeLinejoin
  }, null), T("path", {
    d: "M9 6H34.2814",
    stroke: e.colors[0],
    "stroke-width": e.strokeWidth,
    "stroke-linecap": e.strokeLinecap,
    "stroke-linejoin": e.strokeLinejoin
  }, null), T("path", {
    d: "M14 26H34",
    stroke: e.colors[2],
    "stroke-width": e.strokeWidth,
    "stroke-linecap": e.strokeLinecap,
    "stroke-linejoin": e.strokeLinejoin
  }, null), T("path", {
    d: "M14 34H24.0083",
    stroke: e.colors[2],
    "stroke-width": e.strokeWidth,
    "stroke-linecap": e.strokeLinecap,
    "stroke-linejoin": e.strokeLinejoin
  }, null)]);
}), aa = ge("search", !0, function(e) {
  return T("svg", {
    width: e.size,
    height: e.size,
    viewBox: "0 0 48 48",
    fill: "none"
  }, [T("path", {
    d: "M21 38C30.3888 38 38 30.3888 38 21C38 11.6112 30.3888 4 21 4C11.6112 4 4 11.6112 4 21C4 30.3888 11.6112 38 21 38Z",
    fill: e.colors[1],
    stroke: e.colors[0],
    "stroke-width": e.strokeWidth,
    "stroke-linejoin": e.strokeLinejoin
  }, null), T("path", {
    d: "M26.657 14.3431C25.2093 12.8954 23.2093 12 21.0001 12C18.791 12 16.791 12.8954 15.3433 14.3431",
    stroke: e.colors[2],
    "stroke-width": e.strokeWidth,
    "stroke-linecap": e.strokeLinecap,
    "stroke-linejoin": e.strokeLinejoin
  }, null), T("path", {
    d: "M33.2216 33.2217L41.7069 41.707",
    stroke: e.colors[0],
    "stroke-width": e.strokeWidth,
    "stroke-linecap": e.strokeLinecap,
    "stroke-linejoin": e.strokeLinejoin
  }, null)]);
}), Nu = ge("time", !0, function(e) {
  return T("svg", {
    width: e.size,
    height: e.size,
    viewBox: "0 0 48 48",
    fill: "none"
  }, [T("path", {
    d: "M24 44C35.0457 44 44 35.0457 44 24C44 12.9543 35.0457 4 24 4C12.9543 4 4 12.9543 4 24C4 35.0457 12.9543 44 24 44Z",
    fill: e.colors[1],
    stroke: e.colors[0],
    "stroke-width": e.strokeWidth,
    "stroke-linejoin": e.strokeLinejoin
  }, null), T("path", {
    d: "M24.0084 12.0001L24.0072 24.0089L32.4866 32.4883",
    stroke: e.colors[2],
    "stroke-width": e.strokeWidth,
    "stroke-linecap": e.strokeLinecap,
    "stroke-linejoin": e.strokeLinejoin
  }, null)]);
}), Iu = { class: "wallpaper-window" }, Ou = {
  class: "titlebar",
  "data-tauri-drag-region": ""
}, Pu = {
  key: 0,
  class: "title"
}, Au = {
  key: 1,
  class: "title"
}, Mu = ["title"], Fu = {
  key: 2,
  class: "window-actions"
}, Ru = ["title"], xu = ["title"], Wu = {
  key: 3,
  class: "window-actions"
}, Du = ["aria-label"], $u = ["title"], ju = {
  key: 0,
  class: "unsupported"
}, zu = { class: "top-panel" }, Uu = { class: "preview" }, Vu = ["src", "alt"], Hu = {
  key: 1,
  class: "preview-empty"
}, Gu = { class: "status-panel" }, Ku = { class: "status-copy" }, Bu = { class: "wallpaper-name" }, Yu = { class: "status-list" }, Zu = { class: "status-row" }, Xu = { class: "status-row" }, Ju = { class: "status-row" }, qu = { class: "status-actions" }, Qu = ["disabled"], ed = { class: "card settings-card" }, td = { class: "form-row mode-row" }, nd = { class: "row-label" }, rd = { class: "segmented three" }, ad = { class: "form-row fixed-row" }, sd = { class: "row-label" }, ld = ["placeholder"], id = { class: "form-row folder-row" }, od = { class: "row-label" }, cd = ["placeholder"], ud = { class: "hint-row" }, dd = { class: "form-row wallhaven-row" }, fd = { class: "sub-label" }, hd = { class: "segmented source" }, pd = { class: "hint-row" }, md = { class: "card rules-card" }, gd = { class: "rules-line" }, _d = { class: "row-label" }, wd = { class: "switch-label" }, vd = { class: "number-label" }, bd = { class: "sub-label" }, yd = { class: "segmented mini" }, kd = { class: "rules-line" }, Cd = { class: "row-label compact" }, Sd = { class: "segmented fit" }, Ld = ["disabled"], Ed = ["disabled"], Td = ["disabled"], Nd = { class: "checkbox-label" }, Id = { class: "footer-card" }, Od = { class: "cache-info" }, Pd = { class: "footer-actions" }, Ad = ["disabled"], Md = ["disabled"], Fd = ["disabled"], Rd = {
  key: 2,
  class: "wallhaven-view"
}, xd = { class: "filters filters--preview-style" }, Wd = { class: "search-box wallhaven-search" }, Dd = ["placeholder"], $d = ["title"], jd = ["aria-label"], zd = ["disabled"], Ud = ["disabled"], Vd = ["disabled"], Hd = ["disabled"], Gd = { class: "wallhaven-meta" }, Kd = ["title"], Bd = { class: "grid-wrap" }, Yd = {
  key: 0,
  class: "empty-state"
}, Zd = {
  key: 1,
  class: "empty-state error-state"
}, Xd = {
  key: 2,
  class: "empty-state"
}, Jd = {
  key: 3,
  class: "wallpaper-grid"
}, qd = ["onClick"], Qd = {
  key: 0,
  class: "thumb-skeleton"
}, ef = ["alt", "onLoad"], tf = ["title", "onClick"], nf = ["title", "disabled", "onClick"], rf = ["title", "disabled", "onClick"], af = { class: "pager" }, sf = { class: "source-note" }, lf = { class: "pager-actions" }, of = ["disabled"], cf = ["disabled"], uf = { class: "preview-dialog" }, df = { class: "preview-image-wrap" }, ff = {
  key: 0,
  class: "preview-skeleton"
}, hf = {
  key: 1,
  class: "preview-error"
}, pf = ["src", "alt"], mf = ["disabled"], gf = ["disabled"], _f = /* @__PURE__ */ ue({
  __name: "index",
  setup(e) {
    const t = fa(), { t: n } = jt(), r = V(au()), a = V(null), l = V(null), i = V(!1), u = V(!1), d = V(!1), p = V(!1), v = V(!1), C = V(!1), N = mu({
      config: r,
      refreshStatus: async () => {
        await $e();
      }
    }), {
      activeView: A,
      wallhavenPage: W,
      wallhavenLastPage: k,
      wallhavenLoading: y,
      wallhavenError: f,
      wallhavenKeyword: g,
      wallhavenCategory: _,
      wallhavenSource: b,
      previewWallpaper: O,
      previewLoading: M,
      previewLoadFailed: w,
      workingIds: B,
      loadedThumbIds: Q,
      wallhavenSourceLabel: de,
      visibleWallpapers: oe,
      openWallhavenGrid: ee,
      backToSwitcher: Ke,
      openPreview: Be,
      closePreview: Ie,
      markPreviewLoaded: we,
      markPreviewFailed: Ye,
      markThumbLoaded: nt,
      setThumbRef: ve,
      refreshWallhaven: be,
      setWallhavenSource: Le,
      setWallhavenCategory: Oe,
      setWallpaperFromWallhaven: Re,
      downloadWallpaperFromWallhaven: Ze,
      prevWallhavenPage: rt,
      nextWallhavenPage: Xe,
      setupListeners: at
    } = N, xe = $(() => su(a.value?.currentPath || r.value.lastAppliedPath)), st = $(() => {
      const D = a.value?.currentPath || r.value.lastAppliedPath;
      return D ? D.split(/[\\/]/).pop() || D : n("wallpaperSwitcher.noCurrentWallpaper");
    }), We = $(() => {
      const D = a.value?.screenWidth || 2560, S = a.value?.screenHeight || 1440;
      return `${D} × ${S}`;
    }), z = $(() => a.value?.currentResolution || We.value), G = $(() => r.value.mode === "fixed" ? n("wallpaperSwitcher.fixedImage") : r.value.mode === "wallhaven" ? "Wallhaven" : n("wallpaperSwitcher.localFolder")), se = $(() => {
      const D = a.value?.nextSwitchAt;
      if (!D) return n("wallpaperSwitcher.time.minutesLater", { count: 18 });
      const S = Math.max(0, D - Math.floor(Date.now() / 1e3));
      return S < 60 ? n("wallpaperSwitcher.time.secondsLater", { count: S }) : n("wallpaperSwitcher.time.minutesLater", { count: Math.ceil(S / 60) });
    }), _e = $(() => {
      const D = a.value?.cacheSizeBytes ?? 0;
      return je(D);
    }), De = $(() => l.value ? n("wallpaperSwitcher.folderStatus.detected", { count: l.value.count }) : r.value.folderPath ? n("wallpaperSwitcher.folderStatus.notScanned") : n("wallpaperSwitcher.folderStatus.selectFirst")), Je = async () => {
      i.value = !0;
      try {
        const [D, S] = await Promise.all([
          Qr(),
          ea()
        ]);
        if (r.value = D, a.value = S, D.folderPath)
          try {
            l.value = await ta(D.folderPath);
          } catch {
            l.value = null;
          }
      } catch (D) {
        ne.msg(String(D), "error");
      } finally {
        i.value = !1;
      }
    }, $e = async () => {
      try {
        a.value = await ea();
      } catch (D) {
        ne.msg(String(D), "error");
      }
    }, o = async () => {
      u.value = !0;
      try {
        await jn(r.value), await $e(), ne.msg(n("wallpaperSwitcher.messages.settingsSaved"), "success");
      } catch (D) {
        ne.msg(String(D), "error");
      } finally {
        u.value = !1;
      }
    }, c = async () => {
      const D = await or({
        multiple: !1,
        directory: !1,
        filters: [{ name: "Images", extensions: ["jpg", "jpeg", "png", "webp", "bmp"] }]
      });
      if (typeof D == "string") {
        r.value.fixedImagePath = D, r.value.mode = "fixed";
        try {
          await lu(D), await Je(), ne.msg(n("wallpaperSwitcher.messages.fixedSet"), "success");
        } catch (S) {
          ne.msg(String(S), "error");
        }
      }
    }, L = async () => {
      const D = await or({ multiple: !1, directory: !0 });
      typeof D == "string" && (r.value.folderPath = D, r.value.mode = "folder", await R());
    }, R = async () => {
      if (!r.value.folderPath) {
        ne.msg(n("wallpaperSwitcher.messages.selectFolderFirst"), "warning");
        return;
      }
      try {
        l.value = await ta(r.value.folderPath), l.value.count === 0 ? ne.msg(n("wallpaperSwitcher.messages.noImagesInFolder"), "warning") : ne.msg(De.value, "success");
      } catch (D) {
        ne.msg(String(D), "error");
      }
    }, te = async () => {
      d.value = !0;
      try {
        await jn(r.value), await iu(), await $e(), ne.msg(n("wallpaperSwitcher.messages.wallpaperSwitched"), "success");
      } catch (D) {
        ne.msg(String(D), "error");
      } finally {
        d.value = !1;
      }
    }, j = async (D) => {
      r.value.fitMode = D, p.value = !0;
      try {
        await ou(D), await $e(), r.value = await Qr(), ne.msg(n("wallpaperSwitcher.messages.fitApplied"), "success");
      } catch (S) {
        ne.msg(String(S), "error");
      } finally {
        p.value = !1;
      }
    }, m = async () => {
      if (!a.value?.currentPath) {
        ne.msg(n("wallpaperSwitcher.messages.noCurrentToFix"), "warning");
        return;
      }
      r.value.mode = "fixed", r.value.fixedImagePath = a.value.currentPath, await o();
    }, I = async () => {
      v.value = !0;
      try {
        await fu(), await $e(), ne.msg(n("wallpaperSwitcher.messages.cacheCleared"), "success");
      } catch (D) {
        ne.msg(String(D), "error");
      } finally {
        v.value = !1;
      }
    }, J = async () => {
      C.value = !0;
      try {
        await pu();
      } catch (D) {
        ne.msg(String(D), "error");
      } finally {
        C.value = !1;
      }
    }, re = async () => {
      await t.close();
    }, je = (D) => D < 1024 ? `${D} B` : D < 1024 * 1024 ? `${(D / 1024).toFixed(1)} KB` : D < 1024 * 1024 * 1024 ? `${(D / 1024 / 1024).toFixed(1)} MB` : `${(D / 1024 / 1024 / 1024).toFixed(1)} GB`;
    return Et(async () => {
      await Je(), await at();
    }), zn(() => {
    }), (D, S) => (U(), K("main", Iu, [
      h("header", Ou, [
        s(A) === "switcher" ? (U(), K("div", Pu, [
          T(s(Ln), { size: 18 }),
          h(
            "span",
            null,
            P(s(n)("wallpaperSwitcher.title")),
            1
            /* TEXT */
          )
        ])) : (U(), K("div", Au, [
          h("button", {
            type: "button",
            class: "flat-icon",
            title: s(n)("wallpaperSwitcher.back"),
            onClick: S[0] || (S[0] = //@ts-ignore
            (...F) => s(Ke) && s(Ke)(...F))
          }, [
            T(s(bu), { size: 20 })
          ], 8, Mu),
          h(
            "span",
            null,
            P(s(n)("wallpaperSwitcher.wallhavenTitle")),
            1
            /* TEXT */
          )
        ])),
        s(A) === "switcher" ? (U(), K("div", Fu, [
          h("button", {
            type: "button",
            class: "icon-btn online-entry-btn",
            title: s(n)("wallpaperSwitcher.openWallhaven"),
            onClick: S[1] || (S[1] = //@ts-ignore
            (...F) => s(ee) && s(ee)(...F))
          }, [
            T(s(Su), { size: 18 })
          ], 8, Ru),
          h("button", {
            type: "button",
            class: "icon-btn",
            title: s(n)("wallpaperSwitcher.close"),
            onClick: re
          }, [
            T(s(Kt), { size: 20 })
          ], 8, xu)
        ])) : (U(), K("div", Wu, [
          h("div", {
            class: "source-toggle",
            role: "tablist",
            "aria-label": s(n)("wallpaperSwitcher.sourceToggle")
          }, [
            h(
              "div",
              {
                class: H(["seg-tab", { active: s(b) === "hot", disabled: s(y) }]),
                role: "tab",
                tabindex: "0",
                onClick: S[2] || (S[2] = (F) => !s(y) && s(Le)("hot")),
                onKeydown: S[3] || (S[3] = _n(_t((F) => !s(y) && s(Le)("hot"), ["prevent"]), ["enter"]))
              },
              P(s(n)("wallpaperSwitcher.hot")),
              35
              /* TEXT, CLASS, NEED_HYDRATION */
            ),
            h(
              "div",
              {
                class: H(["seg-tab", { active: s(b) === "toplist", disabled: s(y) }]),
                role: "tab",
                tabindex: "0",
                onClick: S[4] || (S[4] = (F) => !s(y) && s(Le)("toplist")),
                onKeydown: S[5] || (S[5] = _n(_t((F) => !s(y) && s(Le)("toplist"), ["prevent"]), ["enter"]))
              },
              P(s(n)("wallpaperSwitcher.toplist")),
              35
              /* TEXT, CLASS, NEED_HYDRATION */
            )
          ], 8, Du),
          h("button", {
            type: "button",
            class: "icon-btn",
            title: s(n)("wallpaperSwitcher.close"),
            onClick: re
          }, [
            T(s(Kt), { size: 20 })
          ], 8, $u)
        ]))
      ]),
      s(a) && !s(a).supported ? (U(), K(
        "section",
        ju,
        P(s(n)("wallpaperSwitcher.unsupported")),
        1
        /* TEXT */
      )) : ke("v-if", !0),
      s(A) === "switcher" ? (U(), K(
        "div",
        {
          key: 1,
          class: H(["content", { dimmed: s(i) }])
        },
        [
          h("section", zu, [
            h("div", Uu, [
              s(xe) ? (U(), K("img", {
                key: 0,
                src: s(xe),
                alt: s(n)("wallpaperSwitcher.currentPreviewAlt")
              }, null, 8, Vu)) : (U(), K("div", Hu, [
                T(s(Ln), { size: 42 }),
                h(
                  "span",
                  null,
                  P(s(n)("wallpaperSwitcher.noCurrentWallpaper")),
                  1
                  /* TEXT */
                )
              ]))
            ]),
            h("div", Gu, [
              h("div", Ku, [
                h("div", Bu, [
                  h(
                    "span",
                    null,
                    P(s(n)("wallpaperSwitcher.currentWallpaper")),
                    1
                    /* TEXT */
                  ),
                  h(
                    "strong",
                    null,
                    P(s(st)),
                    1
                    /* TEXT */
                  )
                ]),
                h("div", Yu, [
                  h("div", Zu, [
                    T(s(Sn), { size: 16 }),
                    h(
                      "span",
                      null,
                      P(s(n)("wallpaperSwitcher.source")),
                      1
                      /* TEXT */
                    ),
                    h(
                      "strong",
                      null,
                      P(s(G)),
                      1
                      /* TEXT */
                    )
                  ]),
                  h("div", Xu, [
                    T(s(na), { size: 16 }),
                    h(
                      "span",
                      null,
                      P(s(n)("wallpaperSwitcher.resolution")),
                      1
                      /* TEXT */
                    ),
                    h(
                      "strong",
                      null,
                      P(s(z)),
                      1
                      /* TEXT */
                    )
                  ]),
                  h("div", Ju, [
                    T(s(Nu), { size: 16 }),
                    h(
                      "span",
                      null,
                      P(s(n)("wallpaperSwitcher.nextSwitch")),
                      1
                      /* TEXT */
                    ),
                    h(
                      "strong",
                      null,
                      P(s(se)),
                      1
                      /* TEXT */
                    )
                  ])
                ])
              ]),
              h("div", qu, [
                h("button", {
                  type: "button",
                  class: "primary-btn",
                  disabled: s(d),
                  onClick: te
                }, [
                  T(s(Cu), {
                    theme: "outline",
                    size: 14
                  }),
                  fe(
                    " " + P(s(d) ? s(n)("wallpaperSwitcher.switching") : s(n)("wallpaperSwitcher.switchNow")),
                    1
                    /* TEXT */
                  )
                ], 8, Qu),
                h("button", {
                  type: "button",
                  class: "secondary-btn",
                  onClick: m
                }, [
                  T(s(Lu), {
                    theme: "outline",
                    size: 14
                  }),
                  fe(
                    " " + P(s(n)("wallpaperSwitcher.setFixed")),
                    1
                    /* TEXT */
                  )
                ])
              ])
            ])
          ]),
          h("section", ed, [
            h("div", td, [
              h(
                "span",
                nd,
                P(s(n)("wallpaperSwitcher.mode")),
                1
                /* TEXT */
              ),
              h("div", rd, [
                h(
                  "button",
                  {
                    type: "button",
                    class: H({ active: s(r).mode === "fixed" }),
                    onClick: S[6] || (S[6] = (F) => s(r).mode = "fixed")
                  },
                  P(s(n)("wallpaperSwitcher.fixedImage")),
                  3
                  /* TEXT, CLASS */
                ),
                h(
                  "button",
                  {
                    type: "button",
                    class: H({ active: s(r).mode === "folder" }),
                    onClick: S[7] || (S[7] = (F) => s(r).mode = "folder")
                  },
                  P(s(n)("wallpaperSwitcher.localFolder")),
                  3
                  /* TEXT, CLASS */
                ),
                h(
                  "button",
                  {
                    type: "button",
                    class: H({ active: s(r).mode === "wallhaven" }),
                    onClick: S[8] || (S[8] = (F) => s(r).mode = "wallhaven")
                  },
                  P(s(n)("wallpaperSwitcher.wallhavenOnline")),
                  3
                  /* TEXT, CLASS */
                )
              ])
            ]),
            h("div", ad, [
              h(
                "span",
                sd,
                P(s(n)("wallpaperSwitcher.fixedImage")),
                1
                /* TEXT */
              ),
              Me(h("input", {
                "onUpdate:modelValue": S[9] || (S[9] = (F) => s(r).fixedImagePath = F),
                class: "path-input",
                placeholder: s(n)("wallpaperSwitcher.placeholders.fixedImage"),
                spellcheck: "false"
              }, null, 8, ld), [
                [zt, s(r).fixedImagePath]
              ]),
              h("button", {
                type: "button",
                class: "tool-btn",
                onClick: c
              }, [
                T(s(Ln), { size: 16 }),
                fe(
                  " " + P(s(n)("wallpaperSwitcher.selectImage")),
                  1
                  /* TEXT */
                )
              ])
            ]),
            h("div", id, [
              h(
                "span",
                od,
                P(s(n)("wallpaperSwitcher.localFolder")),
                1
                /* TEXT */
              ),
              Me(h("input", {
                "onUpdate:modelValue": S[10] || (S[10] = (F) => s(r).folderPath = F),
                class: "path-input",
                placeholder: s(n)("wallpaperSwitcher.placeholders.folder"),
                spellcheck: "false"
              }, null, 8, cd), [
                [zt, s(r).folderPath]
              ]),
              h("button", {
                type: "button",
                class: "tool-btn",
                onClick: L
              }, [
                T(s(Sn), { size: 16 }),
                fe(
                  " " + P(s(n)("wallpaperSwitcher.select")),
                  1
                  /* TEXT */
                )
              ]),
              h("button", {
                type: "button",
                class: "tool-btn",
                onClick: R
              }, [
                T(s(ra), { size: 16 }),
                fe(
                  " " + P(s(n)("wallpaperSwitcher.scan")),
                  1
                  /* TEXT */
                )
              ])
            ]),
            h(
              "div",
              ud,
              P(s(De)),
              1
              /* TEXT */
            ),
            h("div", dd, [
              S[40] || (S[40] = h(
                "span",
                { class: "row-label" },
                "Wallhaven",
                -1
                /* HOISTED */
              )),
              h(
                "span",
                fd,
                P(s(n)("wallpaperSwitcher.sourceShort")),
                1
                /* TEXT */
              ),
              h("div", hd, [
                h(
                  "button",
                  {
                    type: "button",
                    class: H({ active: s(r).wallhavenSource === "hot" }),
                    onClick: S[11] || (S[11] = (F) => s(r).wallhavenSource = "hot")
                  },
                  P(s(n)("wallpaperSwitcher.hotWithLabel")),
                  3
                  /* TEXT, CLASS */
                ),
                h(
                  "button",
                  {
                    type: "button",
                    class: H({ active: s(r).wallhavenSource === "toplist" }),
                    onClick: S[12] || (S[12] = (F) => s(r).wallhavenSource = "toplist")
                  },
                  P(s(n)("wallpaperSwitcher.toplistWithLabel")),
                  3
                  /* TEXT, CLASS */
                )
              ]),
              h("button", {
                type: "button",
                class: "tool-btn grid-open",
                onClick: S[13] || (S[13] = //@ts-ignore
                (...F) => s(ee) && s(ee)(...F))
              }, [
                T(s(aa), { size: 16 }),
                fe(
                  " " + P(s(n)("wallpaperSwitcher.openOnlineGrid")),
                  1
                  /* TEXT */
                )
              ])
            ]),
            h("div", pd, [
              h(
                "span",
                null,
                P(s(n)("wallpaperSwitcher.screenMatch")),
                1
                /* TEXT */
              ),
              h(
                "strong",
                null,
                P(s(We)),
                1
                /* TEXT */
              )
            ])
          ]),
          h("section", md, [
            h("div", gd, [
              h(
                "span",
                _d,
                P(s(n)("wallpaperSwitcher.switchRules")),
                1
                /* TEXT */
              ),
              h("label", wd, [
                fe(
                  P(s(n)("wallpaperSwitcher.enableSchedule")) + " ",
                  1
                  /* TEXT */
                ),
                Me(h(
                  "input",
                  {
                    "onUpdate:modelValue": S[14] || (S[14] = (F) => s(r).scheduleEnabled = F),
                    type: "checkbox"
                  },
                  null,
                  512
                  /* NEED_PATCH */
                ), [
                  [rr, s(r).scheduleEnabled]
                ]),
                S[41] || (S[41] = h(
                  "span",
                  { class: "switch-control" },
                  null,
                  -1
                  /* HOISTED */
                ))
              ]),
              h("label", vd, [
                fe(
                  P(s(n)("wallpaperSwitcher.every")) + " ",
                  1
                  /* TEXT */
                ),
                Me(h(
                  "input",
                  {
                    "onUpdate:modelValue": S[15] || (S[15] = (F) => s(r).intervalMinutes = F),
                    type: "number",
                    min: "1",
                    max: "1440"
                  },
                  null,
                  512
                  /* NEED_PATCH */
                ), [
                  [
                    zt,
                    s(r).intervalMinutes,
                    void 0,
                    { number: !0 }
                  ]
                ]),
                fe(
                  " " + P(s(n)("wallpaperSwitcher.minutes")),
                  1
                  /* TEXT */
                )
              ]),
              h(
                "span",
                bd,
                P(s(n)("wallpaperSwitcher.type")),
                1
                /* TEXT */
              ),
              h("div", yd, [
                h(
                  "button",
                  {
                    type: "button",
                    class: H({ active: s(r).wallhavenSource === "hot" }),
                    onClick: S[16] || (S[16] = (F) => s(r).wallhavenSource = "hot")
                  },
                  P(s(n)("wallpaperSwitcher.hot")),
                  3
                  /* TEXT, CLASS */
                ),
                h(
                  "button",
                  {
                    type: "button",
                    class: H({ active: s(r).wallhavenSource === "toplist" }),
                    onClick: S[17] || (S[17] = (F) => s(r).wallhavenSource = "toplist")
                  },
                  P(s(n)("wallpaperSwitcher.toplist")),
                  3
                  /* TEXT, CLASS */
                )
              ])
            ]),
            h("div", kd, [
              h(
                "span",
                Cd,
                P(s(n)("wallpaperSwitcher.fitMode")),
                1
                /* TEXT */
              ),
              h("div", Sd, [
                h("button", {
                  type: "button",
                  class: H({ active: s(r).fitMode === "fillCrop" }),
                  disabled: s(p),
                  onClick: S[18] || (S[18] = (F) => j("fillCrop"))
                }, P(s(n)("wallpaperSwitcher.fitFillCrop")), 11, Ld),
                h("button", {
                  type: "button",
                  class: H({ active: s(r).fitMode === "fit" }),
                  disabled: s(p),
                  onClick: S[19] || (S[19] = (F) => j("fit"))
                }, P(s(n)("wallpaperSwitcher.fitContain")), 11, Ed),
                h("button", {
                  type: "button",
                  class: H({ active: s(r).fitMode === "center" }),
                  disabled: s(p),
                  onClick: S[20] || (S[20] = (F) => j("center"))
                }, P(s(n)("wallpaperSwitcher.fitCenter")), 11, Td)
              ]),
              h("label", Nd, [
                Me(h(
                  "input",
                  {
                    "onUpdate:modelValue": S[21] || (S[21] = (F) => s(r).autoRestore = F),
                    type: "checkbox"
                  },
                  null,
                  512
                  /* NEED_PATCH */
                ), [
                  [rr, s(r).autoRestore]
                ]),
                fe(
                  " " + P(s(n)("wallpaperSwitcher.autoRestore")),
                  1
                  /* TEXT */
                )
              ])
            ])
          ]),
          h("footer", Id, [
            h("div", Od, [
              h(
                "strong",
                null,
                P(s(n)("wallpaperSwitcher.cache")),
                1
                /* TEXT */
              ),
              h(
                "span",
                null,
                P(s(n)("wallpaperSwitcher.wallhavenCache")),
                1
                /* TEXT */
              ),
              h(
                "span",
                null,
                P(s(_e)),
                1
                /* TEXT */
              )
            ]),
            h("div", Pd, [
              h("button", {
                type: "button",
                class: "secondary-btn",
                disabled: s(v),
                onClick: I
              }, [
                T(s(yu), { size: 16 }),
                fe(
                  " " + P(s(v) ? s(n)("wallpaperSwitcher.clearing") : s(n)("wallpaperSwitcher.clearCache")),
                  1
                  /* TEXT */
                )
              ], 8, Ad),
              h("button", {
                type: "button",
                class: "secondary-btn",
                disabled: s(C),
                onClick: J
              }, [
                T(s(Sn), { size: 16 }),
                fe(
                  " " + P(s(C) ? s(n)("wallpaperSwitcher.opening") : s(n)("wallpaperSwitcher.openCache")),
                  1
                  /* TEXT */
                )
              ], 8, Md),
              h("button", {
                type: "button",
                class: "primary-btn",
                disabled: s(u),
                onClick: o
              }, [
                T(s(Tu), { size: 17 }),
                fe(
                  " " + P(s(u) ? s(n)("wallpaperSwitcher.saving") : s(n)("wallpaperSwitcher.saveSettings")),
                  1
                  /* TEXT */
                )
              ], 8, Fd)
            ])
          ])
        ],
        2
        /* CLASS */
      )) : (U(), K("div", Rd, [
        h("section", xd, [
          h("div", Wd, [
            Me(h("input", {
              "onUpdate:modelValue": S[22] || (S[22] = (F) => ia(g) ? g.value = F : null),
              type: "text",
              placeholder: s(n)("wallpaperSwitcher.searchPlaceholder"),
              onKeydown: S[23] || (S[23] = _n(
                //@ts-ignore
                (...F) => s(be) && s(be)(...F),
                ["enter"]
              ))
            }, null, 40, Dd), [
              [zt, s(g)]
            ]),
            T(s(aa), {
              size: 16,
              class: "search-icon"
            }),
            s(g) ? (U(), K("button", {
              key: 0,
              type: "button",
              class: "clear-btn",
              title: s(n)("wallpaperSwitcher.clear"),
              onClick: S[24] || (S[24] = (F) => g.value = "")
            }, [
              T(s(Kt), { size: 18 })
            ], 8, $d)) : ke("v-if", !0)
          ]),
          h("div", {
            class: "wallhaven-tabs",
            role: "tablist",
            "aria-label": s(n)("wallpaperSwitcher.categoryToggle")
          }, [
            h("button", {
              type: "button",
              class: H({ active: s(_) === "general" }),
              disabled: s(y),
              onClick: S[25] || (S[25] = (F) => s(Oe)("general"))
            }, P(s(n)("wallpaperSwitcher.categories.general")), 11, zd),
            h("button", {
              type: "button",
              class: H({ active: s(_) === "anime" }),
              disabled: s(y),
              onClick: S[26] || (S[26] = (F) => s(Oe)("anime"))
            }, P(s(n)("wallpaperSwitcher.categories.anime")), 11, Ud),
            h("button", {
              type: "button",
              class: H({ active: s(_) === "people" }),
              disabled: s(y),
              onClick: S[27] || (S[27] = (F) => s(Oe)("people"))
            }, P(s(n)("wallpaperSwitcher.categories.people")), 11, Vd),
            h("button", {
              type: "button",
              class: H({ active: s(_) === "nature" }),
              disabled: s(y),
              onClick: S[28] || (S[28] = (F) => s(Oe)("nature"))
            }, P(s(n)("wallpaperSwitcher.categories.nature")), 11, Hd)
          ], 8, jd),
          h("div", Gd, [
            h(
              "span",
              null,
              P(s(n)("wallpaperSwitcher.autoMatch", { resolution: s(We) })),
              1
              /* TEXT */
            ),
            h("button", {
              type: "button",
              class: "refresh-btn wallhaven-refresh",
              title: s(n)("wallpaperSwitcher.refresh"),
              onClick: S[29] || (S[29] = //@ts-ignore
              (...F) => s(be) && s(be)(...F))
            }, [
              T(s(ra), {
                size: 14,
                class: H({ spinning: s(y) })
              }, null, 8, ["class"])
            ], 8, Kd)
          ])
        ]),
        h("section", Bd, [
          s(y) && s(oe).length === 0 ? (U(), K(
            "div",
            Yd,
            P(s(n)("wallpaperSwitcher.loadingWallhaven")),
            1
            /* TEXT */
          )) : s(f) ? (U(), K("div", Zd, [
            h(
              "span",
              null,
              P(s(f)),
              1
              /* TEXT */
            ),
            h(
              "button",
              {
                type: "button",
                onClick: S[30] || (S[30] = //@ts-ignore
                (...F) => s(be) && s(be)(...F))
              },
              P(s(n)("wallpaperSwitcher.retry")),
              1
              /* TEXT */
            )
          ])) : s(oe).length === 0 ? (U(), K(
            "div",
            Xd,
            P(s(n)("wallpaperSwitcher.noWallpapers")),
            1
            /* TEXT */
          )) : (U(), K("div", Jd, [
            (U(!0), K(
              $t,
              null,
              ys(s(oe), (F) => (U(), K("article", {
                key: F.id,
                class: "wallpaper-card"
              }, [
                h("button", {
                  type: "button",
                  class: "thumb",
                  onClick: (lt) => s(Be)(F)
                }, [
                  s(Q).has(F.id) ? ke("v-if", !0) : (U(), K("div", Qd)),
                  h("img", {
                    ref_for: !0,
                    ref: (lt) => s(ve)(F, lt),
                    alt: F.resolution,
                    loading: "lazy",
                    onLoad: (lt) => s(nt)(F.id)
                  }, null, 40, ef),
                  h(
                    "span",
                    null,
                    P(F.resolution),
                    1
                    /* TEXT */
                  )
                ], 8, qd),
                h("div", {
                  class: "card-actions",
                  onClick: S[31] || (S[31] = _t(() => {
                  }, ["stop"]))
                }, [
                  h("button", {
                    type: "button",
                    title: s(n)("wallpaperSwitcher.preview"),
                    onClick: (lt) => s(Be)(F)
                  }, [
                    T(s(Eu), { size: 16 }),
                    fe(
                      " " + P(s(n)("wallpaperSwitcher.preview")),
                      1
                      /* TEXT */
                    )
                  ], 8, tf),
                  h("button", {
                    type: "button",
                    title: s(n)("wallpaperSwitcher.setWallpaper"),
                    disabled: s(B).has(F.id),
                    onClick: (lt) => s(Re)(F)
                  }, [
                    T(s(na), { size: 16 }),
                    fe(
                      " " + P(s(B).has(F.id) ? s(n)("wallpaperSwitcher.setting") : s(n)("wallpaperSwitcher.set")),
                      1
                      /* TEXT */
                    )
                  ], 8, nf),
                  h("button", {
                    type: "button",
                    title: s(n)("wallpaperSwitcher.download"),
                    disabled: s(B).has(F.id),
                    onClick: (lt) => s(Ze)(F)
                  }, [
                    T(s(ku), { size: 16 }),
                    fe(
                      " " + P(s(n)("wallpaperSwitcher.download")),
                      1
                      /* TEXT */
                    )
                  ], 8, rf)
                ])
              ]))),
              128
              /* KEYED_FRAGMENT */
            ))
          ]))
        ]),
        h("footer", af, [
          h(
            "span",
            null,
            P(s(n)("wallpaperSwitcher.page", { page: s(W) })),
            1
            /* TEXT */
          ),
          h(
            "span",
            sf,
            P(s(n)("wallpaperSwitcher.sourceNote", { source: s(de) })),
            1
            /* TEXT */
          ),
          h("div", lf, [
            h("button", {
              type: "button",
              disabled: s(W) <= 1 || s(y),
              onClick: S[32] || (S[32] = //@ts-ignore
              (...F) => s(rt) && s(rt)(...F))
            }, P(s(n)("wallpaperSwitcher.prevPage")), 9, of),
            h("button", {
              type: "button",
              disabled: s(W) >= s(k) || s(y),
              onClick: S[33] || (S[33] = //@ts-ignore
              (...F) => s(Xe) && s(Xe)(...F))
            }, P(s(n)("wallpaperSwitcher.nextPage")), 9, cf)
          ])
        ])
      ])),
      s(O) ? (U(), K("div", {
        key: 3,
        class: "preview-modal",
        onClick: S[39] || (S[39] = _t(
          //@ts-ignore
          (...F) => s(Ie) && s(Ie)(...F),
          ["self"]
        ))
      }, [
        h("div", uf, [
          h("header", null, [
            h(
              "strong",
              null,
              P(s(O).resolution),
              1
              /* TEXT */
            ),
            h("button", {
              type: "button",
              class: "flat-icon",
              onClick: S[34] || (S[34] = //@ts-ignore
              (...F) => s(Ie) && s(Ie)(...F))
            }, [
              T(s(Kt), { size: 23 })
            ])
          ]),
          h("div", df, [
            s(M) ? (U(), K("div", ff, [
              h(
                "span",
                null,
                P(s(n)("wallpaperSwitcher.loadingPreview")),
                1
                /* TEXT */
              )
            ])) : ke("v-if", !0),
            s(w) ? (U(), K(
              "div",
              hf,
              P(s(n)("wallpaperSwitcher.previewLoadFailed")),
              1
              /* TEXT */
            )) : ke("v-if", !0),
            h("img", {
              class: H({ ready: !s(M) && !s(w) }),
              src: s(O).path,
              alt: s(n)("wallpaperSwitcher.wallpaperPreviewAlt"),
              onLoad: S[35] || (S[35] = //@ts-ignore
              (...F) => s(we) && s(we)(...F)),
              onError: S[36] || (S[36] = //@ts-ignore
              (...F) => s(Ye) && s(Ye)(...F))
            }, null, 42, pf)
          ]),
          h("footer", null, [
            h("button", {
              type: "button",
              class: "secondary-btn",
              disabled: s(B).has(s(O).id),
              onClick: S[37] || (S[37] = (F) => s(Ze)(s(O)))
            }, P(s(n)("wallpaperSwitcher.downloadCache")), 9, mf),
            h("button", {
              type: "button",
              class: "primary-btn",
              disabled: s(B).has(s(O).id),
              onClick: S[38] || (S[38] = (F) => s(Re)(s(O)))
            }, P(s(B).has(s(O).id) ? s(n)("wallpaperSwitcher.setting") : s(n)("wallpaperSwitcher.setWallpaper")), 9, gf)
          ])
        ])
      ])) : ke("v-if", !0)
    ]));
  }
}), wf = (e, t) => {
  const n = e.__vccOpts || e;
  for (const [r, a] of t)
    n[r] = a;
  return n;
}, vf = /* @__PURE__ */ wf(_f, [["__scopeId", "data-v-e1faa604"]]), bf = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: vf
}, Symbol.toStringTag, { value: "Module" }));
export {
  kf as activate
};
