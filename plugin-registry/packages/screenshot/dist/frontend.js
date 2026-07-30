var na = Object.defineProperty;
var ia = (n, t, e) => t in n ? na(n, t, { enumerable: !0, configurable: !0, writable: !0, value: e }) : n[t] = e;
var R = (n, t, e) => ia(n, typeof t != "symbol" ? t + "" : t, e);
import { inject as pe, createVNode as p, defineComponent as Pt, ref as W, computed as I, watch as Ee, nextTick as we, createElementBlock as D, openBlock as L, createCommentVNode as V, createElementVNode as k, Fragment as Bt, renderList as qt, normalizeClass as ct, createBlock as Lt, resolveDynamicComponent as ce, unref as M, toDisplayString as Y, normalizeStyle as gt, onMounted as Qe, onUnmounted as bo, withDirectives as Xe, withKeys as Wi, vModelText as oa, getCurrentInstance as Ae, readonly as sa, getCurrentScope as aa, onScopeDispose as ra, isRef as la, warn as ca, provide as ha, mergeProps as ua, renderSlot as ve, Transition as ii, withCtx as It, createTextVNode as da, vShow as pn, shallowReactive as ga, withModifiers as mt, isVNode as Ge, render as wn } from "vue";
import { useI18n as So } from "vue-i18n";
const Bg = (n) => {
  n.registerRoute({
    target: "window",
    path: "/screenshot",
    name: "Screenshot",
    component: () => Promise.resolve().then(() => Ec)
  }), n.registerRoute({
    target: "window",
    path: "/pin",
    name: "Pin",
    component: () => Promise.resolve().then(() => zg)
  });
};
function fa(n, t, e, i) {
  if (typeof t == "function" ? n !== t || !0 : !t.has(n)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
  return e === "m" ? i : e === "a" ? i.call(n) : i ? i.value : t.get(n);
}
function ma(n, t, e, i, o) {
  if (typeof t == "function" ? n !== t || !0 : !t.has(n)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
  return t.set(n, e), e;
}
var hn;
const Yt = "__TAURI_TO_IPC_KEY__";
function pa(n, t = !1) {
  return window.__TAURI_INTERNALS__.transformCallback(n, t);
}
async function C(n, t = {}, e) {
  return window.__TAURI_INTERNALS__.invoke(n, t, e);
}
function wa(n, t = "asset") {
  return window.__TAURI_INTERNALS__.convertFileSrc(n, t);
}
class ya {
  get rid() {
    return fa(this, hn, "f");
  }
  constructor(t) {
    hn.set(this, void 0), ma(this, hn, t);
  }
  /**
   * Destroys and cleans up this resource from memory.
   * **You should not call any method on this object anymore and should drop any reference to it.**
   */
  async close() {
    return C("plugin:resources|close", {
      rid: this.rid
    });
  }
}
hn = /* @__PURE__ */ new WeakMap();
class Ue {
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
    return new Ye(this.width * t, this.height * t);
  }
  [Yt]() {
    return {
      width: this.width,
      height: this.height
    };
  }
  toJSON() {
    return this[Yt]();
  }
}
class Ye {
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
    return new Ue(this.width / t, this.height / t);
  }
  [Yt]() {
    return {
      width: this.width,
      height: this.height
    };
  }
  toJSON() {
    return this[Yt]();
  }
}
class Te {
  constructor(t) {
    this.size = t;
  }
  toLogical(t) {
    return this.size instanceof Ue ? this.size : this.size.toLogical(t);
  }
  toPhysical(t) {
    return this.size instanceof Ye ? this.size : this.size.toPhysical(t);
  }
  [Yt]() {
    return {
      [`${this.size.type}`]: {
        width: this.size.width,
        height: this.size.height
      }
    };
  }
  toJSON() {
    return this[Yt]();
  }
}
class Co {
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
    return new re(this.x * t, this.y * t);
  }
  [Yt]() {
    return {
      x: this.x,
      y: this.y
    };
  }
  toJSON() {
    return this[Yt]();
  }
}
class re {
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
    return new Co(this.x / t, this.y / t);
  }
  [Yt]() {
    return {
      x: this.x,
      y: this.y
    };
  }
  toJSON() {
    return this[Yt]();
  }
}
class sn {
  constructor(t) {
    this.position = t;
  }
  toLogical(t) {
    return this.position instanceof Co ? this.position : this.position.toLogical(t);
  }
  toPhysical(t) {
    return this.position instanceof re ? this.position : this.position.toPhysical(t);
  }
  [Yt]() {
    return {
      [`${this.position.type}`]: {
        x: this.position.x,
        y: this.position.y
      }
    };
  }
  toJSON() {
    return this[Yt]();
  }
}
var Ft;
(function(n) {
  n.WINDOW_RESIZED = "tauri://resize", n.WINDOW_MOVED = "tauri://move", n.WINDOW_CLOSE_REQUESTED = "tauri://close-requested", n.WINDOW_DESTROYED = "tauri://destroyed", n.WINDOW_FOCUS = "tauri://focus", n.WINDOW_BLUR = "tauri://blur", n.WINDOW_SCALE_FACTOR_CHANGED = "tauri://scale-change", n.WINDOW_THEME_CHANGED = "tauri://theme-changed", n.WINDOW_CREATED = "tauri://window-created", n.WEBVIEW_CREATED = "tauri://webview-created", n.DRAG_ENTER = "tauri://drag-enter", n.DRAG_OVER = "tauri://drag-over", n.DRAG_DROP = "tauri://drag-drop", n.DRAG_LEAVE = "tauri://drag-leave";
})(Ft || (Ft = {}));
async function Mo(n, t) {
  await C("plugin:event|unlisten", {
    event: n,
    eventId: t
  });
}
async function yn(n, t, e) {
  var i;
  const o = typeof e?.target == "string" ? { kind: "AnyLabel", label: e.target } : (i = e?.target) !== null && i !== void 0 ? i : { kind: "Any" };
  return C("plugin:event|listen", {
    event: n,
    target: o,
    handler: pa(t)
  }).then((s) => async () => Mo(n, s));
}
async function va(n, t, e) {
  return yn(n, (i) => {
    Mo(n, i.id), t(i);
  }, e);
}
async function xa(n, t) {
  await C("plugin:event|emit", {
    event: n,
    payload: t
  });
}
async function ka(n, t, e) {
  await C("plugin:event|emit_to", {
    target: typeof n == "string" ? { kind: "AnyLabel", label: n } : n,
    event: t,
    payload: e
  });
}
let ba = class un extends ya {
  /**
   * Creates an Image from a resource ID. For internal use only.
   *
   * @ignore
   */
  constructor(t) {
    super(t);
  }
  /** Creates a new Image using RGBA data, in row-major order from top to bottom, and with specified width and height. */
  static async new(t, e, i) {
    return C("plugin:image|new", {
      rgba: vn(t),
      width: e,
      height: i
    }).then((o) => new un(o));
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
    return C("plugin:image|from_bytes", {
      bytes: vn(t)
    }).then((e) => new un(e));
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
    return C("plugin:image|from_path", { path: t }).then((e) => new un(e));
  }
  /** Returns the RGBA data for this image, in row-major order from top to bottom.  */
  async rgba() {
    return C("plugin:image|rgba", {
      rid: this.rid
    }).then((t) => new Uint8Array(t));
  }
  /** Returns the size of this image.  */
  async size() {
    return C("plugin:image|size", { rid: this.rid });
  }
};
function vn(n) {
  return n == null ? null : typeof n == "string" ? n : n instanceof ba ? n.rid : n;
}
var Un;
(function(n) {
  n[n.Critical = 1] = "Critical", n[n.Informational = 2] = "Informational";
})(Un || (Un = {}));
class Sa {
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
var Bi;
(function(n) {
  n.None = "none", n.Normal = "normal", n.Indeterminate = "indeterminate", n.Paused = "paused", n.Error = "error";
})(Bi || (Bi = {}));
function Ca() {
  return new tn(window.__TAURI_INTERNALS__.metadata.currentWindow.label, {
    // @ts-expect-error `skip` is not defined in the public API but it is handled by the constructor
    skip: !0
  });
}
async function Nn() {
  return C("plugin:window|get_all_windows").then((n) => n.map((t) => new tn(t, {
    // @ts-expect-error `skip` is not defined in the public API but it is handled by the constructor
    skip: !0
  })));
}
const Hn = ["tauri://created", "tauri://error"];
class tn {
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
  constructor(t, e = {}) {
    var i;
    this.label = t, this.listeners = /* @__PURE__ */ Object.create(null), e?.skip || C("plugin:window|create", {
      options: {
        ...e,
        parent: typeof e.parent == "string" ? e.parent : (i = e.parent) === null || i === void 0 ? void 0 : i.label,
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
    var e;
    return (e = (await Nn()).find((i) => i.label === t)) !== null && e !== void 0 ? e : null;
  }
  /**
   * Get an instance of `Window` for the current window.
   */
  static getCurrent() {
    return Ca();
  }
  /**
   * Gets a list of instances of `Window` for all available windows.
   */
  static async getAll() {
    return Nn();
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
    for (const t of await Nn())
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
  async listen(t, e) {
    return this._handleTauriEvent(t, e) ? () => {
      const i = this.listeners[t];
      i.splice(i.indexOf(e), 1);
    } : yn(t, e, {
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
  async once(t, e) {
    return this._handleTauriEvent(t, e) ? () => {
      const i = this.listeners[t];
      i.splice(i.indexOf(e), 1);
    } : va(t, e, {
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
  async emit(t, e) {
    if (Hn.includes(t)) {
      for (const i of this.listeners[t] || [])
        i({
          event: t,
          id: -1,
          payload: e
        });
      return;
    }
    return xa(t, e);
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
  async emitTo(t, e, i) {
    if (Hn.includes(e)) {
      for (const o of this.listeners[e] || [])
        o({
          event: e,
          id: -1,
          payload: i
        });
      return;
    }
    return ka(t, e, i);
  }
  /** @ignore */
  _handleTauriEvent(t, e) {
    return Hn.includes(t) ? (t in this.listeners ? this.listeners[t].push(e) : this.listeners[t] = [e], !0) : !1;
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
    return C("plugin:window|scale_factor", {
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
    return C("plugin:window|inner_position", {
      label: this.label
    }).then((t) => new re(t));
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
    return C("plugin:window|outer_position", {
      label: this.label
    }).then((t) => new re(t));
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
    return C("plugin:window|inner_size", {
      label: this.label
    }).then((t) => new Ye(t));
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
    return C("plugin:window|outer_size", {
      label: this.label
    }).then((t) => new Ye(t));
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
    return C("plugin:window|is_fullscreen", {
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
    return C("plugin:window|is_minimized", {
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
    return C("plugin:window|is_maximized", {
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
    return C("plugin:window|is_focused", {
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
    return C("plugin:window|is_decorated", {
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
    return C("plugin:window|is_resizable", {
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
    return C("plugin:window|is_maximizable", {
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
    return C("plugin:window|is_minimizable", {
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
    return C("plugin:window|is_closable", {
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
    return C("plugin:window|is_visible", {
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
    return C("plugin:window|title", {
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
    return C("plugin:window|theme", {
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
    return C("plugin:window|is_always_on_top", {
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
    return C("plugin:window|center", {
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
    let e = null;
    return t && (t === Un.Critical ? e = { type: "Critical" } : e = { type: "Informational" }), C("plugin:window|request_user_attention", {
      label: this.label,
      value: e
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
    return C("plugin:window|set_resizable", {
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
    return C("plugin:window|set_enabled", {
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
    return C("plugin:window|is_enabled", {
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
    return C("plugin:window|set_maximizable", {
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
    return C("plugin:window|set_minimizable", {
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
    return C("plugin:window|set_closable", {
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
    return C("plugin:window|set_title", {
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
    return C("plugin:window|maximize", {
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
    return C("plugin:window|unmaximize", {
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
    return C("plugin:window|toggle_maximize", {
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
    return C("plugin:window|minimize", {
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
    return C("plugin:window|unminimize", {
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
    return C("plugin:window|show", {
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
    return C("plugin:window|hide", {
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
    return C("plugin:window|close", {
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
    return C("plugin:window|destroy", {
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
    return C("plugin:window|set_decorations", {
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
    return C("plugin:window|set_shadow", {
      label: this.label,
      value: t
    });
  }
  /**
   * Set window effects.
   */
  async setEffects(t) {
    return C("plugin:window|set_effects", {
      label: this.label,
      value: t
    });
  }
  /**
   * Clear any applied effects if possible.
   */
  async clearEffects() {
    return C("plugin:window|set_effects", {
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
    return C("plugin:window|set_always_on_top", {
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
    return C("plugin:window|set_always_on_bottom", {
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
    return C("plugin:window|set_content_protected", {
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
    return C("plugin:window|set_size", {
      label: this.label,
      value: t instanceof Te ? t : new Te(t)
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
    return C("plugin:window|set_min_size", {
      label: this.label,
      value: t instanceof Te ? t : t ? new Te(t) : null
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
    return C("plugin:window|set_max_size", {
      label: this.label,
      value: t instanceof Te ? t : t ? new Te(t) : null
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
    function e(i) {
      return i ? { Logical: i } : null;
    }
    return C("plugin:window|set_size_constraints", {
      label: this.label,
      value: {
        minWidth: e(t?.minWidth),
        minHeight: e(t?.minHeight),
        maxWidth: e(t?.maxWidth),
        maxHeight: e(t?.maxHeight)
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
    return C("plugin:window|set_position", {
      label: this.label,
      value: t instanceof sn ? t : new sn(t)
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
    return C("plugin:window|set_fullscreen", {
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
    return C("plugin:window|set_focus", {
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
    return C("plugin:window|set_icon", {
      label: this.label,
      value: vn(t)
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
    return C("plugin:window|set_skip_taskbar", {
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
    return C("plugin:window|set_cursor_grab", {
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
    return C("plugin:window|set_cursor_visible", {
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
    return C("plugin:window|set_cursor_icon", {
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
    return C("plugin:window|set_background_color", { color: t });
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
    return C("plugin:window|set_cursor_position", {
      label: this.label,
      value: t instanceof sn ? t : new sn(t)
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
    return C("plugin:window|set_ignore_cursor_events", {
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
    return C("plugin:window|start_dragging", {
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
    return C("plugin:window|start_resize_dragging", {
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
    return C("plugin:window|set_badge_count", {
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
    return C("plugin:window|set_badge_label", {
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
    return C("plugin:window|set_overlay_icon", {
      label: this.label,
      value: t ? vn(t) : void 0
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
    return C("plugin:window|set_progress_bar", {
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
    return C("plugin:window|set_visible_on_all_workspaces", {
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
    return C("plugin:window|set_title_bar_style", {
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
    return C("plugin:window|set_theme", {
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
    return this.listen(Ft.WINDOW_RESIZED, (e) => {
      e.payload = new Ye(e.payload), t(e);
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
    return this.listen(Ft.WINDOW_MOVED, (e) => {
      e.payload = new re(e.payload), t(e);
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
    return this.listen(Ft.WINDOW_CLOSE_REQUESTED, async (e) => {
      const i = new Sa(e);
      await t(i), i.isPreventDefault() || await this.destroy();
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
    const e = await this.listen(Ft.DRAG_ENTER, (a) => {
      t({
        ...a,
        payload: {
          type: "enter",
          paths: a.payload.paths,
          position: new re(a.payload.position)
        }
      });
    }), i = await this.listen(Ft.DRAG_OVER, (a) => {
      t({
        ...a,
        payload: {
          type: "over",
          position: new re(a.payload.position)
        }
      });
    }), o = await this.listen(Ft.DRAG_DROP, (a) => {
      t({
        ...a,
        payload: {
          type: "drop",
          paths: a.payload.paths,
          position: new re(a.payload.position)
        }
      });
    }), s = await this.listen(Ft.DRAG_LEAVE, (a) => {
      t({ ...a, payload: { type: "leave" } });
    });
    return () => {
      e(), o(), i(), s();
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
    const e = await this.listen(Ft.WINDOW_FOCUS, (o) => {
      t({ ...o, payload: !0 });
    }), i = await this.listen(Ft.WINDOW_BLUR, (o) => {
      t({ ...o, payload: !1 });
    });
    return () => {
      e(), i();
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
    return this.listen(Ft.WINDOW_SCALE_FACTOR_CHANGED, t);
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
    return this.listen(Ft.WINDOW_THEME_CHANGED, t);
  }
}
var Ni;
(function(n) {
  n.Disabled = "disabled", n.Throttle = "throttle", n.Suspend = "suspend";
})(Ni || (Ni = {}));
var Hi;
(function(n) {
  n.AppearanceBased = "appearanceBased", n.Light = "light", n.Dark = "dark", n.MediumLight = "mediumLight", n.UltraDark = "ultraDark", n.Titlebar = "titlebar", n.Selection = "selection", n.Menu = "menu", n.Popover = "popover", n.Sidebar = "sidebar", n.HeaderView = "headerView", n.Sheet = "sheet", n.WindowBackground = "windowBackground", n.HudWindow = "hudWindow", n.FullScreenUI = "fullScreenUI", n.Tooltip = "tooltip", n.ContentBackground = "contentBackground", n.UnderWindowBackground = "underWindowBackground", n.UnderPageBackground = "underPageBackground", n.Mica = "mica", n.Blur = "blur", n.Acrylic = "acrylic", n.Tabbed = "tabbed", n.TabbedDark = "tabbedDark", n.TabbedLight = "tabbedLight";
})(Hi || (Hi = {}));
var ji;
(function(n) {
  n.FollowsWindowActiveState = "followsWindowActiveState", n.Active = "active", n.Inactive = "inactive";
})(ji || (ji = {}));
var z = /* @__PURE__ */ ((n) => (n.None = "none", n.Drawing = "drawing", n.Moving = "moving", n.ResizingNW = "resizing-nw", n.ResizingNE = "resizing-ne", n.ResizingSW = "resizing-sw", n.ResizingSE = "resizing-se", n.ResizingN = "resizing-n", n.ResizingS = "resizing-s", n.ResizingW = "resizing-w", n.ResizingE = "resizing-e", n.DrawingRect = "drawing-rect", n.DrawingEllipse = "drawing-ellipse", n.DrawingLine = "drawing-line", n.DrawingArrow = "drawing-arrow", n.DrawingPen = "drawing-pen", n.EditingAnnotation = "editing-annotation", n.MovingAnnotation = "moving-annotation", n.ResizingAnnotationNW = "resizing-annotation-nw", n.ResizingAnnotationSE = "resizing-annotation-se", n.DrawingText = "drawing-text", n.DrawingMarker = "drawing-marker", n.DrawingMosaic = "drawing-mosaic", n.ColorPicking = "color-picking", n.Pinning = "pinning", n))(z || {}), m = /* @__PURE__ */ ((n) => (n.Select = "select", n.Rectangle = "rectangle", n.Ellipse = "ellipse", n.Line = "line", n.Arrow = "arrow", n.Pen = "pen", n.Mosaic = "mosaic", n.Text = "text", n.Marker = "marker", n.ColorPicker = "color-picker", n.Ocr = "ocr", n.Pin = "pin", n.Translate = "translate", n))(m || {});
function Yn(n, t, e) {
  return !Number.isFinite(n) || n <= 0 ? 0 : Math.min(n, Math.max(0, t) / 2, Math.max(0, e) / 2);
}
function Ma(n, t, e, i) {
  if (!i) return e;
  const o = e.x - t.x, s = e.y - t.y;
  if (n === m.Ellipse || n === m.Rectangle) {
    const a = Math.max(Math.abs(o), Math.abs(s));
    return {
      x: t.x + Math.sign(o || 1) * a,
      y: t.y + Math.sign(s || 1) * a
    };
  }
  if (n === m.Line || n === m.Arrow) {
    const a = Math.hypot(o, s), r = Math.PI / 4, l = Math.round(Math.atan2(s, o) / r) * r;
    return {
      x: t.x + Math.cos(l) * a,
      y: t.y + Math.sin(l) * a
    };
  }
  return e;
}
function Ct(n, t) {
  const e = t.x - n.x, i = t.y - n.y;
  return Math.sqrt(e * e + i * i);
}
function Fi(n, t) {
  return n.x >= t.x && n.x <= t.x + t.width && n.y >= t.y && n.y <= t.y + t.height;
}
function _o(n) {
  return {
    x: n.x + n.width / 2,
    y: n.y + n.height / 2
  };
}
function _a(n, t) {
  return {
    x: Math.max(t.x, Math.min(n.x, t.x + t.width)),
    y: Math.max(t.y, Math.min(n.y, t.y + t.height))
  };
}
function Qt(n) {
  return n != null && typeof n.x == "number" && typeof n.y == "number" && !isNaN(n.x) && !isNaN(n.y) && isFinite(n.x) && isFinite(n.y);
}
function ze(n) {
  return n != null && typeof n.x == "number" && typeof n.y == "number" && typeof n.width == "number" && typeof n.height == "number" && !isNaN(n.x) && !isNaN(n.y) && !isNaN(n.width) && !isNaN(n.height) && isFinite(n.x) && isFinite(n.y) && isFinite(n.width) && isFinite(n.height) && n.width > 0 && n.height > 0;
}
class Ta {
  constructor(t, e) {
    R(this, "canvas");
    R(this, "ctx");
    R(this, "coordinateTransform");
    this.canvas = t, this.ctx = t.getContext("2d"), this.coordinateTransform = e;
  }
  // 清空画布
  clear() {
    this.ctx.save(), this.ctx.setTransform(1, 0, 0, 1, 0, 0), this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height), this.ctx.restore();
  }
  // 绘制遮罩层（选择区域外的半透明黑色遮罩）
  drawMask(t, e = 0) {
    if (!ze(t)) {
      console.warn("Invalid selection rect in drawMask:", t);
      return;
    }
    this.ctx.save();
    const i = this.canvas.width / (window.devicePixelRatio || 1), o = this.canvas.height / (window.devicePixelRatio || 1), s = Math.round(t.x), a = Math.round(t.y), r = Math.round(t.width), l = Math.round(t.height), h = Yn(e, r, l);
    this.ctx.fillStyle = "rgba(0, 0, 0, 0.5)", this.ctx.beginPath(), this.ctx.rect(0, 0, i, o), this.ctx.roundRect(s, a, r, l, h), this.ctx.fill("evenodd"), this.ctx.restore();
  }
  // 绘制选择框
  drawSelectionBox(t, e = !0, i = 0) {
    const { x: o, y: s, width: a, height: r } = t;
    this.ctx.save();
    const l = Math.round(o) + 0.5, h = Math.round(s) + 0.5, u = Math.max(0, Math.round(a) - 1), d = Math.max(0, Math.round(r) - 1), x = Yn(i, u, d);
    this.ctx.lineWidth = 1, this.ctx.setLineDash([5, 4]), this.ctx.strokeStyle = "rgba(0, 0, 0, 0.62)", this.ctx.beginPath(), this.ctx.roundRect(
      l + 1,
      h + 1,
      u,
      d,
      x
    ), this.ctx.stroke(), this.ctx.strokeStyle = "rgba(255, 255, 255, 0.96)", this.ctx.beginPath(), this.ctx.roundRect(l, h, u, d, x), this.ctx.stroke(), e && this.drawHandles(t), this.ctx.restore();
  }
  // 绘制控制点
  drawHandles(t) {
    const { x: e, y: i, width: o, height: s } = t, a = _o(t);
    this.ctx.setLineDash([]), [
      { x: e, y: i, width: 10, height: 10 },
      // 左上
      { x: e + o, y: i, width: 10, height: 10 },
      // 右上
      { x: e, y: i + s, width: 10, height: 10 },
      // 左下
      { x: e + o, y: i + s, width: 10, height: 10 },
      // 右下
      { x: a.x, y: i, width: 16, height: 6 },
      // 上中
      { x: a.x, y: i + s, width: 16, height: 6 },
      // 下中
      { x: e, y: a.y, width: 6, height: 16 },
      // 左中
      { x: e + o, y: a.y, width: 6, height: 16 }
      // 右中
    ].forEach((l) => {
      const h = Math.round(l.x) - l.width / 2, u = Math.round(l.y) - l.height / 2, d = Math.min(l.width, l.height) / 2;
      this.ctx.beginPath(), this.ctx.roundRect(h + 1, u + 1, l.width, l.height, d), this.ctx.fillStyle = "rgba(0, 0, 0, 0.36)", this.ctx.fill(), this.ctx.beginPath(), this.ctx.roundRect(h, u, l.width, l.height, d), this.ctx.fillStyle = "#ffffff", this.ctx.fill();
    });
  }
  // 绘制标注列表
  drawAnnotations(t, e) {
    const i = this.createDrawingContext(e);
    t.forEach((o) => {
      const s = o.getData();
      s.hovered && o.drawHover(i), o.draw(i), s.selected && (o.drawSelection(i), ["rectangle", "ellipse", "line", "arrow"].includes(s.type) && this.drawAnnotationHandles(o));
    });
  }
  // 绘制当前正在创建的标注
  drawCurrentAnnotation(t, e) {
    const i = this.createDrawingContext(e);
    t.draw(i);
  }
  // 创建绘制上下文
  createDrawingContext(t) {
    return {
      ctx: this.ctx,
      scale: 1,
      offset: { x: 0, y: 0 },
      bounds: t || { x: 0, y: 0, width: this.canvas.width, height: this.canvas.height }
    };
  }
  // 为截图创建绘制上下文
  createScreenshotContext(t, e, i) {
    return {
      ctx: t,
      scale: e,
      offset: { x: i.x * e, y: i.y * e },
      bounds: i
    };
  }
  // 获取坐标转换器
  getCoordinateTransform() {
    return this.coordinateTransform;
  }
  // 获取画布
  getCanvas() {
    return this.canvas;
  }
  // 获取上下文
  getContext() {
    return this.ctx;
  }
  // 绘制标注控制点
  drawAnnotationHandles(t) {
    const e = t.getData();
    if (e.type !== "mosaic" && e.type !== "text" && ["rectangle", "ellipse", "line", "arrow"].includes(e.type) && e.points.length >= 2) {
      const i = e.points[0], o = e.points[e.points.length - 1], s = 4;
      this.ctx.save(), this.ctx.setLineDash([]), this.ctx.fillStyle = "#ffffff", this.ctx.strokeStyle = "#3b82f6", this.ctx.lineWidth = 2, this.ctx.beginPath(), this.ctx.arc(i.x, i.y, s, 0, Math.PI * 2), this.ctx.fill(), this.ctx.stroke(), this.ctx.beginPath(), this.ctx.arc(o.x, o.y, s, 0, Math.PI * 2), this.ctx.fill(), this.ctx.stroke(), this.ctx.restore();
    }
  }
  // 绘制取色器
  drawColorPicker(t, e) {
    if (!t.isActive || !t.isVisible) return;
    const { mousePosition: i, colorInfo: o, showFormat: s, previewImage: a, zoomFactor: r, isCopied: l } = t, h = 156, u = 188, d = 18;
    let x = i.x + d, w = i.y + d;
    x + h > e.x + e.width && (x = i.x - h - d), w + u > e.y + e.height && (w = i.y - u - d), x < e.x && (x = e.x + d), w < e.y && (w = e.y + d), this.ctx.save(), this.ctx.fillStyle = "rgba(250, 250, 250, 0.96)", this.ctx.strokeStyle = "rgba(0, 0, 0, 0.14)", this.ctx.lineWidth = 1, this.ctx.shadowColor = "rgba(0, 0, 0, 0.24)", this.ctx.shadowBlur = 18, this.ctx.shadowOffsetY = 8, this.ctx.beginPath(), this.ctx.roundRect(x, w, h, u, 10), this.ctx.fill(), this.ctx.stroke(), this.ctx.shadowColor = "transparent", this.ctx.shadowBlur = 0, this.ctx.shadowOffsetY = 0;
    const S = 108, f = x + (h - S) / 2, v = w + 16;
    this.ctx.fillStyle = "#f3f4f6", this.ctx.fillRect(f, v, S, S), this.ctx.strokeStyle = "rgba(0, 0, 0, 0.26)", this.ctx.lineWidth = 1, this.ctx.strokeRect(f, v, S, S);
    const P = a ? a.width : r, N = S / P;
    a && (this.ctx.imageSmoothingEnabled = !1, this.ctx.drawImage(
      a,
      0,
      0,
      a.width,
      a.height,
      f,
      v,
      S,
      S
    ), this.ctx.imageSmoothingEnabled = !0), this.ctx.beginPath(), this.ctx.strokeStyle = "rgba(255, 255, 255, 0.5)", this.ctx.lineWidth = 1;
    for (let F = 1; F < P; F++) {
      const tt = f + F * N;
      this.ctx.moveTo(tt, v), this.ctx.lineTo(tt, v + S);
      const q = v + F * N;
      this.ctx.moveTo(f, q), this.ctx.lineTo(f + S, q);
    }
    this.ctx.stroke(), this.ctx.beginPath(), this.ctx.strokeStyle = "rgba(0, 0, 0, 0.22)";
    for (let F = 1; F < P; F++) {
      const tt = f + F * N + 0.5;
      this.ctx.moveTo(tt, v), this.ctx.lineTo(tt, v + S);
      const q = v + F * N + 0.5;
      this.ctx.moveTo(f, q), this.ctx.lineTo(f + S, q);
    }
    this.ctx.stroke();
    const T = Math.floor(P / 2), U = f + T * N, Z = v + T * N;
    this.ctx.fillStyle = "rgba(255, 255, 255, 0.18)", this.ctx.fillRect(U, Z, N, N), this.ctx.setLineDash([]), this.ctx.strokeStyle = "rgba(255, 255, 255, 0.96)", this.ctx.lineWidth = 4, this.ctx.strokeRect(
      U - 1,
      Z - 1,
      N + 2,
      N + 2
    ), this.ctx.strokeStyle = "rgba(0, 0, 0, 0.9)", this.ctx.lineWidth = 2, this.ctx.strokeRect(
      U,
      Z,
      N,
      N
    ), this.ctx.fillStyle = "#333", this.ctx.font = '12px "SF Mono", "Consolas", "Monaco", monospace';
    let X = v + S + 22;
    if (o) {
      this.ctx.fillStyle = o.hex, this.ctx.fillRect(x + 16, X - 14, 20, 20), this.ctx.strokeStyle = "rgba(0, 0, 0, 0.22)", this.ctx.strokeRect(x + 16, X - 14, 20, 20), this.ctx.fillStyle = "#111827", this.ctx.font = '12px "SF Mono", "Consolas", "Monaco", monospace';
      const F = s === "hex" ? o.hex : `${o.rgb.r}, ${o.rgb.g}, ${o.rgb.b}`;
      this.ctx.fillText(F, x + 44, X), X += 19;
    }
    this.ctx.fillStyle = "#6b7280", this.ctx.font = "12px Arial", this.ctx.fillText(`X: ${Math.round(i.x)}, Y: ${Math.round(i.y)}`, x + 16, X), X += 17, this.ctx.font = "12px Arial";
    const j = l ? "已复制!" : "Q:复制 Shift:切换";
    this.ctx.fillStyle = l ? "#059669" : "#8b8f98", this.ctx.fillText(j, x + 16, X), this.ctx.restore();
  }
}
class za {
  // 物理尺寸
  constructor(t) {
    R(this, "scale");
    R(this, "canvasRect");
    R(this, "canvasSize");
    // 逻辑尺寸
    R(this, "physicalSize");
    this.canvasRect = t.getBoundingClientRect(), this.canvasSize = {
      width: this.canvasRect.width,
      height: this.canvasRect.height
    }, this.physicalSize = {
      width: t.width,
      height: t.height
    }, this.scale = this.calculateScale();
  }
  // 更新画布矩形信息
  updateCanvasRect(t) {
    this.canvasRect = t.getBoundingClientRect(), this.canvasSize = {
      width: this.canvasRect.width,
      height: this.canvasRect.height
    }, this.physicalSize = {
      width: t.width,
      height: t.height
    }, this.scale = this.calculateScale();
  }
  // 计算缩放比例（DPI）
  calculateScale() {
    return this.physicalSize.width / this.canvasRect.width;
  }
  // 从鼠标事件获取画布坐标
  getCanvasPosition(t) {
    return {
      x: t.clientX - this.canvasRect.left,
      y: t.clientY - this.canvasRect.top
    };
  }
  // 逻辑像素转物理像素
  logicalToPhysical(t) {
    return Qt(t) ? {
      x: t.x * this.scale,
      y: t.y * this.scale
    } : (console.warn("Invalid point in logicalToPhysical:", t), { x: 0, y: 0 });
  }
  // 物理像素转逻辑像素
  physicalToLogical(t) {
    return Qt(t) ? {
      x: t.x / this.scale,
      y: t.y / this.scale
    } : (console.warn("Invalid point in physicalToLogical:", t), { x: 0, y: 0 });
  }
  // 逻辑坐标转相对坐标（相对于截图区域）
  logicalToRelative(t, e) {
    return !Qt(t) || !ze(e) ? (console.warn("Invalid point or bounds in logicalToRelative"), { x: 0, y: 0 }) : {
      x: t.x - e.x,
      y: t.y - e.y
    };
  }
  // 相对坐标转逻辑坐标
  relativeToLogical(t, e) {
    return !Qt(t) || !ze(e) ? (console.warn("Invalid point or bounds in relativeToLogical"), { x: 0, y: 0 }) : {
      x: t.x + e.x,
      y: t.y + e.y
    };
  }
  // 矩形逻辑坐标转物理坐标
  rectLogicalToPhysical(t) {
    return ze(t) ? {
      x: t.x * this.scale,
      y: t.y * this.scale,
      width: t.width * this.scale,
      height: t.height * this.scale
    } : (console.warn("Invalid rect in rectLogicalToPhysical:", t), { x: 0, y: 0, width: 0, height: 0 });
  }
  // 限制点在画布范围内
  clampToCanvas(t) {
    if (!Qt(t))
      return console.warn("Invalid point in clampToCanvas:", t), { x: 0, y: 0 };
    const e = {
      x: 0,
      y: 0,
      width: this.canvasSize.width,
      height: this.canvasSize.height
    };
    return _a(t, e);
  }
  // 限制矩形在画布范围内
  clampRectToCanvas(t) {
    if (!ze(t))
      return console.warn("Invalid rect in clampRectToCanvas:", t), { x: 0, y: 0, width: 0, height: 0 };
    const e = Math.max(0, t.x), i = Math.max(0, t.y), o = Math.min(this.canvasSize.width - e, t.width), s = Math.min(this.canvasSize.height - i, t.height);
    return { x: e, y: i, width: o, height: s };
  }
  // 获取画布尺寸
  getCanvasSize() {
    return { ...this.canvasSize };
  }
  // 获取缩放比例
  getScale() {
    return this.scale;
  }
  // 计算两点间距离（使用工具函数）
  distance(t, e) {
    return Ct(t, e);
  }
  // 检查点是否在矩形内（使用工具函数）
  isPointInRect(t, e, i = 0) {
    if (!Qt(t) || !ze(e))
      return !1;
    if (i === 0)
      return Fi(t, e);
    const o = {
      x: e.x - i,
      y: e.y - i,
      width: e.width + i * 2,
      height: e.height + i * 2
    };
    return Fi(t, o);
  }
  // 检查点是否在线段附近
  isPointNearLine(t, e, i, o = 8) {
    if (!Qt(t) || !Qt(e) || !Qt(i))
      return !1;
    const s = t.x - e.x, a = t.y - e.y, r = i.x - e.x, l = i.y - e.y, h = s * r + a * l, u = r * r + l * l;
    if (u === 0)
      return Ct(t, e) <= o;
    const d = h / u;
    let x;
    return d < 0 ? x = e : d > 1 ? x = i : x = {
      x: e.x + d * r,
      y: e.y + d * l
    }, Ct(t, x) <= o;
  }
}
class Ra {
  constructor(t, e) {
    R(this, "coordinateSystem");
    R(this, "canvas");
    R(this, "isDrawing", !1);
    R(this, "currentOperation", z.None);
    R(this, "startPoint", { x: 0, y: 0 });
    R(this, "lastMousePos", { x: 0, y: 0 });
    R(this, "preventDefault", (t) => {
      t.preventDefault();
    });
    this.canvas = t, this.coordinateSystem = e, this.bindEvents();
  }
  bindEvents() {
    this.canvas.addEventListener("contextmenu", this.preventDefault), this.canvas.addEventListener("dragstart", this.preventDefault), this.canvas.addEventListener("selectstart", this.preventDefault);
  }
  unbind() {
    this.canvas.removeEventListener("contextmenu", this.preventDefault), this.canvas.removeEventListener("dragstart", this.preventDefault), this.canvas.removeEventListener("selectstart", this.preventDefault);
  }
  getOperationType(t, e, i, o) {
    const s = this.getAnnotationAtPoint(t, o);
    if (e !== m.Select)
      return i ? this.coordinateSystem.isPointInRect(t, i) ? this.getDrawingOperationType(e) : z.None : z.Drawing;
    if (s) {
      if (s.getData().type === m.Mosaic)
        return z.None;
      const a = this.getAnnotationControlPointOperation(t, s);
      return a !== z.None ? a : z.MovingAnnotation;
    }
    return i ? this.getSelectionOperationType(t, i, o.length > 0) : z.Drawing;
  }
  // 获取绘图操作类型
  getDrawingOperationType(t) {
    return {
      [m.Rectangle]: z.DrawingRect,
      [m.Ellipse]: z.DrawingEllipse,
      [m.Line]: z.DrawingLine,
      [m.Arrow]: z.DrawingArrow,
      [m.Pen]: z.DrawingPen,
      [m.Text]: z.DrawingText,
      [m.Marker]: z.DrawingMarker,
      [m.Mosaic]: z.DrawingMosaic,
      [m.ColorPicker]: z.ColorPicking,
      [m.Ocr]: z.None,
      [m.Pin]: z.Pinning,
      [m.Translate]: z.None,
      [m.Select]: z.None
    }[t] || z.Drawing;
  }
  // 获取选择框操作类型
  getSelectionOperationType(t, e, i) {
    const { x: o, y: s, width: a, height: r } = e, l = 12;
    if (i)
      return z.None;
    const h = _o(e);
    return this.isInHandle(t, { x: o, y: s }, l) ? z.ResizingNW : this.isInHandle(t, { x: o + a, y: s }, l) ? z.ResizingNE : this.isInHandle(t, { x: o, y: s + r }, l) ? z.ResizingSW : this.isInHandle(t, { x: o + a, y: s + r }, l) ? z.ResizingSE : this.isInHandle(t, { x: h.x, y: s }, l) ? z.ResizingN : this.isInHandle(t, { x: h.x, y: s + r }, l) ? z.ResizingS : this.isInHandle(t, { x: o, y: h.y }, l) ? z.ResizingW : this.isInHandle(t, { x: o + a, y: h.y }, l) ? z.ResizingE : this.coordinateSystem.isPointInRect(t, e) ? z.Moving : z.Drawing;
  }
  // 检查是否在控制点范围内
  isInHandle(t, e, i) {
    return Math.abs(t.x - e.x) <= i && Math.abs(t.y - e.y) <= i;
  }
  // 获取指定位置的标注
  getAnnotationAtPoint(t, e) {
    for (let i = e.length - 1; i >= 0; i--) {
      const o = e[i];
      if (o.hitTest(t))
        return o;
    }
    return null;
  }
  // 获取标注控制点操作类型
  getAnnotationControlPointOperation(t, e) {
    if (!Qt(t))
      return z.None;
    const i = e.getData();
    if (i.type === m.Mosaic || i.type === m.Text || i.type === m.Marker)
      return z.None;
    if ([
      m.Rectangle,
      m.Ellipse,
      m.Line,
      m.Arrow
    ].includes(i.type) && i.points.length >= 2) {
      const o = i.points[0], s = i.points[i.points.length - 1], a = 8, r = 6, l = Ct(t, o), h = Ct(t, s);
      if (l <= a + r)
        return z.ResizingAnnotationNW;
      if (h <= a + r)
        return z.ResizingAnnotationSE;
    }
    return z.None;
  }
  // 获取绘制状态
  getDrawingState() {
    return {
      isDrawing: this.isDrawing,
      currentOperation: this.currentOperation,
      startPoint: this.startPoint,
      lastMousePos: this.lastMousePos
    };
  }
  // 设置操作类型
  setCurrentOperation(t) {
    this.currentOperation = t;
  }
  // 开始绘制操作
  startDrawing(t) {
    this.isDrawing = !0, this.startPoint = t, this.lastMousePos = t;
  }
  // 结束绘制操作
  stopDrawing() {
    this.isDrawing = !1, this.currentOperation = z.None;
  }
  // 更新鼠标位置
  updateMousePosition(t) {
    this.lastMousePos = t;
  }
}
class ue {
  constructor(t) {
    R(this, "data");
    this.data = t;
  }
  // 获取标注数据
  getData() {
    return this.data;
  }
  // 更新标注数据
  updateData(t) {
    this.data = { ...this.data, ...t };
  }
  // 添加点
  addPoint(t) {
    this.data.points.push(t);
  }
  // 更新最后一个点
  updateLastPoint(t) {
    this.data.points.length > 0 && (this.data.points[this.data.points.length - 1] = t);
  }
  // 移动标注
  move(t, e) {
    this.data.points.forEach((i) => {
      i.x += t, i.y += e;
    });
  }
  // 检查是否有效
  isValid() {
    return this.data.points.length >= this.getMinPoints();
  }
  applyOpacity(t) {
    t.globalAlpha *= this.data.style.opacity ?? 1;
  }
  // 生成唯一ID
  generateId() {
    return Math.random().toString(36).substr(2, 9);
  }
}
class La extends ue {
  constructor(t, e) {
    super({
      id: Math.random().toString(36).substr(2, 9),
      type: m.Rectangle,
      points: [t],
      style: e
    });
  }
  getMinPoints() {
    return 2;
  }
  draw(t) {
    if (this.data.points.length < 2) return;
    const { ctx: e } = t, i = this.data.points[0], o = this.data.points[this.data.points.length - 1], s = o.x - i.x, a = o.y - i.y;
    e.save(), this.applyOpacity(e), e.strokeStyle = this.data.style.color, e.lineWidth = this.data.style.lineWidth, e.lineCap = "round", e.lineJoin = "round", e.setLineDash([]), e.strokeRect(i.x, i.y, s, a), e.restore();
  }
  drawToScreenshot(t) {
    if (this.data.points.length < 2) return;
    const { ctx: e, scale: i, offset: o } = t, s = this.data.points[0], a = this.data.points[this.data.points.length - 1], r = {
      x: s.x * i - o.x,
      y: s.y * i - o.y
    }, l = (a.x - s.x) * i, h = (a.y - s.y) * i;
    e.save(), this.applyOpacity(e), e.strokeStyle = this.data.style.color, e.lineWidth = this.data.style.lineWidth * i, e.lineCap = "round", e.lineJoin = "round", e.setLineDash([]), e.strokeRect(r.x, r.y, l, h), e.restore();
  }
  hitTest(t, e = 8) {
    if (this.data.points.length < 2) return !1;
    const i = this.data.points[0], o = this.data.points[this.data.points.length - 1], s = Math.min(i.x, o.x), a = Math.max(i.x, o.x), r = Math.min(i.y, o.y), l = Math.max(i.y, o.y);
    return t.x >= s - e && t.x <= a + e && t.y >= r - e && t.y <= l + e;
  }
  getBounds() {
    if (this.data.points.length < 2) return null;
    const t = this.data.points[0], e = this.data.points[this.data.points.length - 1], i = Math.min(t.x, e.x), o = Math.max(t.x, e.x), s = Math.min(t.y, e.y), a = Math.max(t.y, e.y);
    return {
      x: i,
      y: s,
      width: o - i,
      height: a - s
    };
  }
  drawSelection(t) {
    const { ctx: e } = t, i = 6;
    e.save(), e.fillStyle = "#3b82f6", e.strokeStyle = "#ffffff", e.lineWidth = 1, this.data.points.forEach((o) => {
      e.fillRect(o.x - i / 2, o.y - i / 2, i, i), e.strokeRect(o.x - i / 2, o.y - i / 2, i, i);
    }), e.restore();
  }
  drawHover(t) {
    if (this.data.points.length < 2) return;
    const { ctx: e } = t, i = this.data.points[0], o = this.data.points[this.data.points.length - 1], s = o.x - i.x, a = o.y - i.y;
    e.save(), e.strokeStyle = "#3b82f6", e.lineWidth = 2, e.setLineDash([4, 4]), e.strokeRect(i.x, i.y, s, a), e.restore();
  }
  // 获取控制点位置检测
  getControlPointAtPosition(t, e = 12) {
    if (!this.data.selected || this.data.points.length < 2) return null;
    for (let i = 0; i < this.data.points.length; i++) {
      const o = this.data.points[i];
      if (Ct(t, o) <= e)
        return i;
    }
    return null;
  }
  // 更新控制点
  updateControlPoint(t, e) {
    t >= 0 && t < this.data.points.length && (this.data.points[t] = e);
  }
}
class Pa extends ue {
  constructor(t, e) {
    super({
      id: Math.random().toString(36).substr(2, 9),
      type: m.Ellipse,
      points: [t],
      style: e
    });
  }
  getMinPoints() {
    return 2;
  }
  draw(t) {
    this.data.points.length < 2 || this.drawEllipse(t.ctx, 1, { x: 0, y: 0 });
  }
  drawToScreenshot(t) {
    this.data.points.length < 2 || this.drawEllipse(t.ctx, t.scale, t.offset);
  }
  drawEllipse(t, e, i) {
    const o = this.getBounds();
    if (!o) return;
    const s = (o.x + o.width / 2) * e - i.x, a = (o.y + o.height / 2) * e - i.y, r = Math.max(o.width * e / 2, 0.5), l = Math.max(o.height * e / 2, 0.5);
    t.save(), this.applyOpacity(t), t.strokeStyle = this.data.style.color, t.lineWidth = this.data.style.lineWidth * e, t.lineCap = "round", t.lineJoin = "round", t.setLineDash([]), t.beginPath(), t.ellipse(s, a, r, l, 0, 0, Math.PI * 2), t.stroke(), t.restore();
  }
  hitTest(t, e = 8) {
    const i = this.getBounds();
    if (!i) return !1;
    const o = i.width / 2, s = i.height / 2;
    if (o < 1 || s < 1)
      return t.x >= i.x - e && t.x <= i.x + i.width + e && t.y >= i.y - e && t.y <= i.y + i.height + e;
    const a = i.x + o, r = i.y + s, l = Math.sqrt(
      (t.x - a) ** 2 / o ** 2 + (t.y - r) ** 2 / s ** 2
    );
    return Math.abs(l - 1) * Math.min(o, s) <= e;
  }
  getBounds() {
    if (this.data.points.length < 2) return null;
    const t = this.data.points[0], e = this.data.points[this.data.points.length - 1], i = Math.min(t.x, e.x), o = Math.max(t.x, e.x), s = Math.min(t.y, e.y), a = Math.max(t.y, e.y);
    return {
      x: i,
      y: s,
      width: o - i,
      height: a - s
    };
  }
  drawSelection(t) {
    const { ctx: e } = t, i = this.getBounds();
    i && (e.save(), e.strokeStyle = "#3b82f6", e.lineWidth = 1, e.setLineDash([3, 3]), e.strokeRect(i.x, i.y, i.width, i.height), e.restore());
  }
  drawHover(t) {
    const { ctx: e } = t, i = this.getBounds();
    i && (e.save(), e.strokeStyle = "#3b82f6", e.lineWidth = 2, e.setLineDash([4, 4]), e.beginPath(), e.ellipse(
      i.x + i.width / 2,
      i.y + i.height / 2,
      Math.max(i.width / 2, 0.5),
      Math.max(i.height / 2, 0.5),
      0,
      0,
      Math.PI * 2
    ), e.stroke(), e.restore());
  }
}
class Aa extends ue {
  constructor(t, e) {
    super({
      id: Math.random().toString(36).substr(2, 9),
      type: m.Line,
      points: [t],
      style: e
    });
  }
  getMinPoints() {
    return 2;
  }
  draw(t) {
    this.data.points.length < 2 || this.drawLine(t.ctx, 1, { x: 0, y: 0 });
  }
  drawToScreenshot(t) {
    this.data.points.length < 2 || this.drawLine(t.ctx, t.scale, t.offset);
  }
  drawLine(t, e, i) {
    const o = this.data.points[0], s = this.data.points[this.data.points.length - 1];
    t.save(), this.applyOpacity(t), t.strokeStyle = this.data.style.color, t.lineWidth = this.data.style.lineWidth * e, t.lineCap = "round", t.lineJoin = "round", t.setLineDash([]), t.beginPath(), t.moveTo(o.x * e - i.x, o.y * e - i.y), t.lineTo(s.x * e - i.x, s.y * e - i.y), t.stroke(), t.restore();
  }
  hitTest(t, e = 8) {
    if (this.data.points.length < 2) return !1;
    const i = this.data.points[0], o = this.data.points[this.data.points.length - 1];
    return this.isPointNearLine(t, i, o, e);
  }
  getBounds() {
    if (this.data.points.length < 2) return null;
    const t = this.data.points[0], e = this.data.points[this.data.points.length - 1], i = Math.min(t.x, e.x), o = Math.max(t.x, e.x), s = Math.min(t.y, e.y), a = Math.max(t.y, e.y);
    return {
      x: i,
      y: s,
      width: o - i,
      height: a - s
    };
  }
  drawSelection(t) {
    this.drawEndpoints(t.ctx);
  }
  drawHover(t) {
    if (this.data.points.length < 2) return;
    const { ctx: e } = t, i = this.data.points[0], o = this.data.points[this.data.points.length - 1];
    e.save(), e.strokeStyle = "#3b82f6", e.lineWidth = 2, e.setLineDash([4, 4]), e.beginPath(), e.moveTo(i.x, i.y), e.lineTo(o.x, o.y), e.stroke(), e.restore();
  }
  drawEndpoints(t) {
    t.save(), t.fillStyle = "#3b82f6", t.strokeStyle = "#ffffff", t.lineWidth = 1, this.data.points.forEach((i) => {
      t.fillRect(i.x - 6 / 2, i.y - 6 / 2, 6, 6), t.strokeRect(i.x - 6 / 2, i.y - 6 / 2, 6, 6);
    }), t.restore();
  }
  isPointNearLine(t, e, i, o) {
    const s = i.x - e.x, a = i.y - e.y, r = s * s + a * a;
    if (r === 0)
      return Ct(t, e) <= o;
    const l = Math.max(0, Math.min(1, ((t.x - e.x) * s + (t.y - e.y) * a) / r)), h = {
      x: e.x + l * s,
      y: e.y + l * a
    };
    return Ct(t, h) <= o;
  }
}
class Da extends ue {
  constructor(t, e) {
    super({
      id: Math.random().toString(36).substr(2, 9),
      type: m.Arrow,
      points: [t],
      style: e
    });
  }
  getMinPoints() {
    return 2;
  }
  draw(t) {
    if (this.data.points.length < 2) return;
    const { ctx: e } = t;
    this.drawArrow(e, 1, { x: 0, y: 0 });
  }
  drawToScreenshot(t) {
    if (this.data.points.length < 2) return;
    const { ctx: e, scale: i, offset: o } = t;
    this.drawArrow(e, i, o);
  }
  drawArrow(t, e, i) {
    const o = this.data.points[0], s = this.data.points[this.data.points.length - 1], a = {
      x: o.x * e - i.x,
      y: o.y * e - i.y
    }, r = {
      x: s.x * e - i.x,
      y: s.y * e - i.y
    };
    t.save(), this.applyOpacity(t), t.strokeStyle = this.data.style.color, t.lineWidth = this.data.style.lineWidth * e, t.lineCap = "round", t.lineJoin = "round", t.setLineDash([]), t.beginPath(), t.moveTo(a.x, a.y), t.lineTo(r.x, r.y), t.stroke();
    const l = Math.atan2(s.y - o.y, s.x - o.x), h = 15 * e, u = Math.PI / 6;
    t.beginPath(), t.moveTo(r.x, r.y), t.lineTo(
      r.x - h * Math.cos(l - u),
      r.y - h * Math.sin(l - u)
    ), t.moveTo(r.x, r.y), t.lineTo(
      r.x - h * Math.cos(l + u),
      r.y - h * Math.sin(l + u)
    ), t.stroke(), t.restore();
  }
  hitTest(t, e = 8) {
    if (this.data.points.length < 2) return !1;
    const i = this.data.points[0], o = this.data.points[this.data.points.length - 1];
    return this.isPointNearLine(t, i, o, e);
  }
  isPointNearLine(t, e, i, o) {
    const s = t.x - e.x, a = t.y - e.y, r = i.x - e.x, l = i.y - e.y, h = s * r + a * l, u = r * r + l * l;
    if (u === 0)
      return Ct(t, e) <= o;
    const d = h / u;
    let x;
    return d < 0 ? x = e : d > 1 ? x = i : x = {
      x: e.x + d * r,
      y: e.y + d * l
    }, Ct(t, x) <= o;
  }
  getBounds() {
    if (this.data.points.length < 2) return null;
    const t = this.data.points[0], e = this.data.points[this.data.points.length - 1], i = Math.min(t.x, e.x), o = Math.max(t.x, e.x), s = Math.min(t.y, e.y), a = Math.max(t.y, e.y);
    return {
      x: i,
      y: s,
      width: o - i,
      height: a - s
    };
  }
  drawSelection(t) {
    const { ctx: e } = t, i = 6;
    e.save(), e.fillStyle = "#3b82f6", e.strokeStyle = "#ffffff", e.lineWidth = 1, this.data.points.forEach((o) => {
      e.fillRect(o.x - i / 2, o.y - i / 2, i, i), e.strokeRect(o.x - i / 2, o.y - i / 2, i, i);
    }), e.restore();
  }
  drawHover(t) {
    if (this.data.points.length < 2) return;
    const { ctx: e } = t, i = this.data.points[0], o = this.data.points[this.data.points.length - 1];
    e.save(), e.strokeStyle = "#3b82f6", e.lineWidth = 2, e.setLineDash([4, 4]), e.beginPath(), e.moveTo(i.x, i.y), e.lineTo(o.x, o.y), e.stroke(), e.restore();
  }
  // 获取控制点位置检测
  getControlPointAtPosition(t, e = 12) {
    if (!this.data.selected || this.data.points.length < 2) return null;
    for (let i = 0; i < this.data.points.length; i++) {
      const o = this.data.points[i];
      if (Ct(t, o) <= e)
        return i;
    }
    return null;
  }
  // 更新控制点
  updateControlPoint(t, e) {
    t >= 0 && t < this.data.points.length && (this.data.points[t] = e);
  }
}
class Ia extends ue {
  constructor(t, e) {
    super({
      id: Math.random().toString(36).substr(2, 9),
      type: m.Pen,
      points: [t],
      style: e
    });
  }
  getMinPoints() {
    return 2;
  }
  // 智能添加点（带插值）
  addPoint(t) {
    if (this.data.points.length > 0) {
      const e = this.data.points[this.data.points.length - 1], i = Ct(t, e);
      if (i > 5) {
        const o = Math.ceil(i / 3);
        for (let s = 1; s < o; s++) {
          const a = s / o, r = e.x + (t.x - e.x) * a, l = e.y + (t.y - e.y) * a;
          this.data.points.push({ x: r, y: l });
        }
      }
    }
    this.data.points.push(t);
  }
  draw(t) {
    if (this.data.points.length < 2) return;
    const { ctx: e } = t;
    this.drawPath(e, 1, { x: 0, y: 0 });
  }
  drawToScreenshot(t) {
    if (this.data.points.length < 2) return;
    const { ctx: e, scale: i, offset: o } = t;
    this.drawPath(e, i, o);
  }
  drawPath(t, e, i) {
    t.save(), this.applyOpacity(t), t.strokeStyle = this.data.style.color, t.lineWidth = this.data.style.lineWidth * e, t.lineCap = "round", t.lineJoin = "round", t.setLineDash([]), t.beginPath();
    const o = this.data.points[0], s = o.x * e - i.x, a = o.y * e - i.y;
    t.moveTo(s, a);
    for (let r = 1; r < this.data.points.length; r++) {
      const l = this.data.points[r], h = l.x * e - i.x, u = l.y * e - i.y;
      t.lineTo(h, u);
    }
    t.stroke(), t.restore();
  }
  hitTest(t, e = 8) {
    if (this.data.points.length < 2)
      return this.data.points.length === 1 ? Ct(t, this.data.points[0]) <= e : !1;
    for (let i = 0; i < this.data.points.length - 1; i++) {
      const o = this.data.points[i], s = this.data.points[i + 1];
      if (this.isPointNearLine(t, o, s, e))
        return !0;
    }
    return !1;
  }
  isPointNearLine(t, e, i, o) {
    const s = t.x - e.x, a = t.y - e.y, r = i.x - e.x, l = i.y - e.y, h = s * r + a * l, u = r * r + l * l;
    if (u === 0)
      return Ct(t, e) <= o;
    const d = h / u;
    let x;
    return d < 0 ? x = e : d > 1 ? x = i : x = {
      x: e.x + d * r,
      y: e.y + d * l
    }, Ct(t, x) <= o;
  }
  getBounds() {
    if (this.data.points.length === 0) return null;
    let t = this.data.points[0].x, e = this.data.points[0].x, i = this.data.points[0].y, o = this.data.points[0].y;
    return this.data.points.forEach((s) => {
      t = Math.min(t, s.x), e = Math.max(e, s.x), i = Math.min(i, s.y), o = Math.max(o, s.y);
    }), {
      x: t,
      y: i,
      width: e - t,
      height: o - i
    };
  }
  drawSelection(t) {
    const e = this.getBounds();
    if (!e) return;
    const { ctx: i } = t;
    i.save(), i.setLineDash([2, 2]), i.strokeStyle = "#3b82f6", i.lineWidth = 1, i.strokeRect(e.x, e.y, e.width, e.height), i.restore();
  }
  drawHover(t) {
    if (this.data.points.length < 2) return;
    const { ctx: e } = t;
    e.save(), e.strokeStyle = "#3b82f6", e.lineWidth = 2, e.setLineDash([4, 4]), e.lineCap = "round", e.lineJoin = "round", e.beginPath(), e.moveTo(this.data.points[0].x, this.data.points[0].y);
    for (let i = 1; i < this.data.points.length; i++)
      e.lineTo(this.data.points[i].x, this.data.points[i].y);
    e.stroke(), e.restore();
  }
}
const ie = "sans-serif", Re = (n) => ({
  x: n.x + 4,
  y: n.y - 8
});
class Oa extends ue {
  constructor(t, e, i, o = 16) {
    super({
      id: Math.random().toString(36).substr(2, 9),
      type: m.Text,
      points: [t],
      style: i,
      text: e,
      fontSize: o
    });
  }
  getMinPoints() {
    return 1;
  }
  // 更新文字内容
  updateText(t) {
    this.data.text = t;
  }
  // 更新字体大小
  updateFontSize(t) {
    this.data.fontSize = t;
  }
  draw(t) {
    if (!this.data.text || this.data.points.length === 0) return;
    const { ctx: e } = t;
    this.drawText(e, 1, { x: 0, y: 0 }, t.bounds);
  }
  drawToScreenshot(t) {
    if (!this.data.text || this.data.points.length === 0) return;
    const { ctx: e, scale: i, offset: o, bounds: s } = t;
    this.drawText(e, i, o, s);
  }
  drawText(t, e, i, o) {
    const s = (this.data.fontSize || 16) * e, a = this.data.points[0];
    t.save(), this.applyOpacity(t), t.font = `${s}px ${ie}`, t.fillStyle = this.data.style.color, t.textAlign = "left", t.textBaseline = "top";
    const r = Re(a), l = r.x * e - i.x, h = r.y * e - i.y;
    t.fillText(this.data.text, l, h), t.restore();
  }
  hitTest(t, e = 8) {
    if (!this.data.text || this.data.points.length === 0) return !1;
    const i = this.data.points[0], o = this.data.fontSize || 16, a = document.createElement("canvas").getContext("2d");
    if (!a) return !1;
    a.font = `${o}px ${ie}`;
    const l = a.measureText(this.data.text).width, { x: h, y: u } = Re(i);
    return t.x >= h - e && t.x <= h + l + e && t.y >= u - e && t.y <= u + o + e;
  }
  getBounds() {
    if (!this.data.text || this.data.points.length === 0) return null;
    const t = this.data.points[0], e = this.data.fontSize || 16, o = document.createElement("canvas").getContext("2d");
    if (!o) return null;
    o.font = `${e}px ${ie}`;
    const a = o.measureText(this.data.text).width, { x: r, y: l } = Re(t);
    return {
      x: r,
      y: l,
      width: a,
      height: e
    };
  }
  drawSelection(t) {
    if (!this.data.text || this.data.points.length === 0) return;
    const { ctx: e, scale: i, offset: o } = t, s = this.data.points[0], a = (this.data.fontSize || 16) * i, r = Re(s), l = r.x * i - o.x, h = r.y * i - o.y;
    e.save(), e.font = `${a}px ${ie}`;
    const d = e.measureText(this.data.text).width;
    e.setLineDash([2, 2]), e.strokeStyle = "#3b82f6", e.lineWidth = 1, e.strokeRect(l, h, d, a), e.restore();
  }
  drawHover(t) {
    if (!this.data.text || this.data.points.length === 0) return;
    const { ctx: e, scale: i, offset: o } = t, s = this.data.points[0], a = (this.data.fontSize || 16) * i, r = Re(s), l = r.x * i - o.x, h = r.y * i - o.y;
    e.save(), e.font = `${a}px ${ie}`;
    const d = e.measureText(this.data.text).width;
    e.strokeStyle = "#3b82f6", e.lineWidth = 2, e.setLineDash([4, 4]), e.strokeRect(l, h, d, a), e.restore();
  }
  // 获取文字内容
  getText() {
    return this.data.text || "";
  }
  // 获取字体大小
  getFontSize() {
    return this.data.fontSize || 16;
  }
  // 检查是否为空文字
  isEmpty() {
    return !this.data.text || this.data.text.trim().length === 0;
  }
  // 重写isValid方法
  isValid() {
    return this.data.points.length >= this.getMinPoints() && !this.isEmpty();
  }
}
const te = class te extends ue {
  constructor(t, e, i = 8) {
    super({
      id: Math.random().toString(36).substr(2, 9),
      type: m.Mosaic,
      points: [t],
      style: e,
      mosaicSize: i,
      mosaicColor: "transparent"
      // 真实马赛克不需要颜色，颜色源自底图
    });
  }
  getMinPoints() {
    return 1;
  }
  addPoint(t) {
    if (this.data.points.length > 0) {
      const e = this.data.points[this.data.points.length - 1], i = Ct(t, e);
      if (i > 2) {
        const o = Math.ceil(i / 2);
        for (let s = 1; s < o; s++) {
          const a = s / o, r = e.x + (t.x - e.x) * a, l = e.y + (t.y - e.y) * a;
          this.data.points.push({ x: r, y: l });
        }
      }
    }
    this.data.points.push(t);
  }
  draw(t) {
    if (this.data.points.length === 0) return;
    const { ctx: e, bounds: i } = t;
    this.renderRealMosaic(e, window.devicePixelRatio || 1, { x: 0, y: 0 }, i);
  }
  drawToScreenshot(t) {
    if (this.data.points.length === 0) return;
    const { ctx: e, scale: i, offset: o, bounds: s } = t;
    this.renderRealMosaic(e, i, o, s);
  }
  /**
   * 核心渲染逻辑：真实像素化马赛克
   * 使用 ImageData 直接操作像素，避免坐标转换问题
   */
  renderRealMosaic(t, e, i, o) {
    te.helperCanvas || (te.helperCanvas = document.createElement("canvas"), te.helperCtx = te.helperCanvas.getContext("2d", { willReadFrequently: !0 }));
    const s = te.helperCanvas, a = te.helperCtx, r = e || 1, l = this.data.mosaicSize || 8, h = Math.max(Math.round(l * r), 4), u = Math.max(l * 3, 24), d = this.getBounds();
    if (!d) return;
    const x = u, w = Math.floor(d.x - x), S = Math.floor(d.y - x), f = Math.ceil(d.width + x * 2), v = Math.ceil(d.height + x * 2);
    if (f <= 0 || v <= 0) return;
    const P = Math.floor(w * r - i.x), N = Math.floor(S * r - i.y), T = Math.ceil(f * r), U = Math.ceil(v * r), Z = t.canvas.width, X = t.canvas.height, j = Math.max(0, P), F = Math.max(0, N), tt = Math.min(T, Z - j), q = Math.min(U, X - F);
    if (tt <= 0 || q <= 0) return;
    let J;
    try {
      t.save(), t.setTransform(1, 0, 0, 1, 0, 0), J = t.getImageData(j, F, tt, q), t.restore();
    } catch {
      return;
    }
    const et = J.data, st = j % h, yt = F % h;
    for (let it = -yt; it < q; it += h)
      for (let G = -st; G < tt; G += h) {
        const ot = Math.max(0, G), pt = Math.max(0, it), kt = Math.min(tt, G + h), ht = Math.min(q, it + h);
        if (ot >= kt || pt >= ht) continue;
        let bt = 0, O = 0, Tt = 0, H = 0;
        for (let Mt = pt; Mt < ht; Mt++)
          for (let wt = ot; wt < kt; wt++) {
            const At = (Mt * tt + wt) * 4;
            bt += et[At], O += et[At + 1], Tt += et[At + 2], H++;
          }
        if (H > 0) {
          bt = Math.round(bt / H / 8) * 8, O = Math.round(O / H / 8) * 8, Tt = Math.round(Tt / H / 8) * 8;
          for (let wt = pt; wt < ht; wt++)
            for (let At = ot; At < kt; At++) {
              const Ot = (wt * tt + At) * 4;
              et[Ot] = bt, et[Ot + 1] = O, et[Ot + 2] = Tt;
            }
        }
      }
    s.width = tt, s.height = q, a.putImageData(J, 0, 0), a.globalCompositeOperation = "destination-in", a.lineCap = "round", a.lineJoin = "round", a.lineWidth = u * r, a.fillStyle = "#000000", a.strokeStyle = "#000000", this.drawPathPhysical(a, r, i, j, F), t.save(), this.applyOpacity(t), t.setTransform(1, 0, 0, 1, 0, 0), o && (t.beginPath(), t.rect(
      o.x * r - i.x,
      o.y * r - i.y,
      o.width * r,
      o.height * r
    ), t.clip()), t.drawImage(s, j, F), t.restore();
  }
  // 在物理坐标系中绘制路径
  drawPathPhysical(t, e, i, o, s) {
    if (this.data.points.length < 1) return;
    t.beginPath();
    const a = (l) => l.x * e - i.x - o, r = (l) => l.y * e - i.y - s;
    if (this.data.points.length === 1) {
      const l = this.data.points[0];
      t.arc(a(l), r(l), t.lineWidth / 2, 0, Math.PI * 2), t.fill();
    } else {
      const l = this.data.points[0];
      t.moveTo(a(l), r(l));
      for (let u = 1; u < this.data.points.length - 1; u++) {
        const d = this.data.points[u], x = this.data.points[u + 1], w = (a(d) + a(x)) / 2, S = (r(d) + r(x)) / 2;
        t.quadraticCurveTo(a(d), r(d), w, S);
      }
      const h = this.data.points[this.data.points.length - 1];
      t.lineTo(a(h), r(h)), t.stroke();
    }
  }
  hitTest(t, e = 8) {
    if (this.data.points.length === 0) return !1;
    if (this.data.points.length === 1)
      return Ct(t, this.data.points[0]) <= (this.data.mosaicSize || 8) * 1.5 + e;
    for (let i = 0; i < this.data.points.length - 1; i++) {
      const o = this.data.points[i], s = this.data.points[i + 1];
      if (this.isPointNearLine(t, o, s, (this.data.mosaicSize || 8) * 1.5 + e))
        return !0;
    }
    return !1;
  }
  getBounds() {
    if (this.data.points.length === 0) return null;
    let t = this.data.points[0].x, e = this.data.points[0].x, i = this.data.points[0].y, o = this.data.points[0].y;
    for (const s of this.data.points)
      t = Math.min(t, s.x), e = Math.max(e, s.x), i = Math.min(i, s.y), o = Math.max(o, s.y);
    return {
      x: t,
      y: i,
      width: e - t,
      height: o - i
    };
  }
  isPointNearLine(t, e, i, o) {
    const s = t.x - e.x, a = t.y - e.y, r = i.x - e.x, l = i.y - e.y, h = s * r + a * l, u = r * r + l * l;
    let d = -1;
    u !== 0 && (d = h / u);
    let x, w;
    d < 0 ? (x = e.x, w = e.y) : d > 1 ? (x = i.x, w = i.y) : (x = e.x + d * r, w = e.y + d * l);
    const S = t.x - x, f = t.y - w;
    return S * S + f * f <= o * o;
  }
  drawSelection(t) {
  }
  drawHover(t) {
  }
  updateMosaicSize(t) {
    this.data.mosaicSize = t;
  }
  getMosaicSize() {
    return this.data.mosaicSize || 8;
  }
};
// 缓存离屏 Canvas 以减少 GC 压力（静态复用）
R(te, "helperCanvas", null), R(te, "helperCtx", null);
let Zn = te;
const le = 16, dn = (n = le) => Math.max(12, Math.round(n * 0.75)), Xn = (n, t = le) => {
  const e = dn(t);
  return {
    x: n.x + e + 12,
    y: n.y - t / 2
  };
};
class Ea extends ue {
  constructor(t, e, i, o, s = le) {
    super({
      id: Math.random().toString(36).substr(2, 9),
      type: m.Marker,
      points: [t],
      style: o,
      text: i,
      fontSize: s,
      markerNumber: e
    });
  }
  getMinPoints() {
    return 1;
  }
  draw(t) {
    this.drawMarker(t.ctx, 1, { x: 0, y: 0 });
  }
  drawToScreenshot(t) {
    this.drawMarker(t.ctx, t.scale, t.offset);
  }
  drawMarker(t, e, i) {
    const o = this.data.points[0];
    if (!o) return;
    const s = (this.data.fontSize || le) * e, a = dn(this.data.fontSize || le) * e, r = o.x * e - i.x, l = o.y * e - i.y, h = this.data.text?.trim() || "";
    if (t.save(), this.applyOpacity(t), t.lineCap = "round", t.lineJoin = "round", t.setLineDash([]), this.drawMarkerFace(t, r, l, a, s, e), h) {
      const u = Xn(
        o,
        this.data.fontSize || le
      ), d = u.x * e - i.x, x = u.y * e - i.y, w = x + s + 3 * e;
      t.font = `${s}px ${ie}`, t.textAlign = "left", t.textBaseline = "top", t.fillStyle = this.data.style.color, t.fillText(h, d, x);
      const S = t.measureText(h).width;
      t.strokeStyle = this.data.style.color, t.lineWidth = Math.max(2, this.data.style.lineWidth * e * 0.75), t.beginPath(), t.moveTo(r + a * 0.72, l + a * 0.72), t.lineTo(d - 5 * e, w), t.lineTo(d + S + 3 * e, w), t.stroke();
    }
    t.restore();
  }
  drawMarkerFace(t, e, i, o, s, a) {
    t.beginPath(), t.arc(e, i, o, 0, Math.PI * 2), t.fillStyle = this.data.style.color, t.fill(), t.strokeStyle = "rgba(255, 255, 255, 0.92)", t.lineWidth = Math.max(1, a), t.stroke(), t.fillStyle = "#ffffff", t.font = `600 ${s}px ${ie}`, t.textAlign = "center", t.textBaseline = "middle", t.fillText(String(this.data.markerNumber || 1), e, i + a * 0.5);
  }
  hitTest(t, e = 8) {
    const i = this.data.points[0];
    if (!i) return !1;
    const o = dn(this.data.fontSize || le);
    if (Math.hypot(t.x - i.x, t.y - i.y) <= o + e) return !0;
    const a = this.getBounds();
    return !!a && t.x >= a.x - e && t.x <= a.x + a.width + e && t.y >= a.y - e && t.y <= a.y + a.height + e;
  }
  getBounds() {
    const t = this.data.points[0];
    if (!t) return null;
    const e = this.data.fontSize || le, i = dn(e), o = this.data.text?.trim() || "";
    let s = t.x + i;
    if (o) {
      const r = document.createElement("canvas").getContext("2d");
      r && (r.font = `${e}px ${ie}`, s = Xn(t, e).x + r.measureText(o).width + 4);
    }
    return {
      x: t.x - i,
      y: t.y - i,
      width: s - (t.x - i),
      height: Math.max(i * 2, e + i)
    };
  }
  drawSelection(t) {
    this.drawStateOutline(t, "#3b82f6", [3, 3], 1);
  }
  drawHover(t) {
    this.drawStateOutline(t, "#3b82f6", [4, 4], 2);
  }
  drawStateOutline(t, e, i, o) {
    const s = this.getBounds();
    s && (t.ctx.save(), t.ctx.strokeStyle = e, t.ctx.lineWidth = o, t.ctx.setLineDash(i), t.ctx.strokeRect(s.x, s.y, s.width, s.height), t.ctx.restore());
  }
}
class an {
  static createAnnotation(t, e, i, o = {}) {
    switch (t) {
      case m.Rectangle:
        return new La(e, i);
      case m.Ellipse:
        return new Pa(e, i);
      case m.Line:
        return new Aa(e, i);
      case m.Arrow:
        return new Da(e, i);
      case m.Pen:
        return new Ia(e, i);
      case m.Text:
        return new Oa(
          e,
          o.text || "",
          i,
          o.fontSize || 16
        );
      case m.Marker:
        return new Ea(
          e,
          o.markerNumber || 1,
          o.text || "",
          i,
          o.fontSize || 16
        );
      case m.Mosaic:
        return new Zn(
          e,
          i,
          o.mosaicSize || 8
        );
      default:
        return null;
    }
  }
  // 从数据恢复标注
  static fromData(t) {
    const { type: e, points: i, style: o } = t;
    if (!i || i.length === 0) return null;
    const s = i[0], a = this.createAnnotation(e, s, o, {
      text: t.text,
      fontSize: t.fontSize,
      markerNumber: t.markerNumber,
      mosaicSize: t.mosaicSize
    });
    if (a) {
      for (let r = 1; r < i.length; r++)
        a.addPoint(i[r]);
      a.updateData({
        id: t.id,
        selected: t.selected,
        hovered: t.hovered
      });
    }
    return a;
  }
  // 获取工具对应的操作类型
  static getOperationType(t) {
    return {
      [m.Rectangle]: "drawing-rect",
      [m.Ellipse]: "drawing-ellipse",
      [m.Line]: "drawing-line",
      [m.Arrow]: "drawing-arrow",
      [m.Pen]: "drawing-pen",
      [m.Text]: "drawing-text",
      [m.Marker]: "drawing-marker",
      [m.Mosaic]: "drawing-mosaic",
      [m.Select]: "none"
    }[t] || "none";
  }
  // 检查工具是否为绘图工具
  static isDrawingTool(t) {
    return t !== m.Select && t !== m.ColorPicker && t !== m.Ocr && t !== m.Pin;
  }
  // 检查工具是否支持样式设置
  static supportsStyleSettings(t) {
    return t !== m.Select && t !== m.Mosaic;
  }
  // 检查工具是否支持颜色设置
  static supportsColorSettings(t) {
    return [
      m.Rectangle,
      m.Ellipse,
      m.Line,
      m.Arrow,
      m.Pen,
      m.Text,
      m.Marker
    ].includes(t);
  }
  // 检查工具是否支持线宽设置
  static supportsLineWidthSettings(t) {
    return [
      m.Rectangle,
      m.Ellipse,
      m.Line,
      m.Arrow,
      m.Pen
    ].includes(t);
  }
  // 检查工具是否支持文字大小设置
  static supportsTextSizeSettings(t) {
    return t === m.Text || t === m.Marker;
  }
  // 检查工具是否支持马赛克大小设置
  static supportsMosaicSizeSettings(t) {
    return t === m.Mosaic;
  }
}
const me = class me {
  constructor() {
    R(this, "pool", []);
    R(this, "maxPoolSize", 5);
    // 最大池大小
    R(this, "inUse", /* @__PURE__ */ new Set());
  }
  static getInstance() {
    return me.instance || (me.instance = new me()), me.instance;
  }
  /**
   * 获取一个 canvas 对象
   * @param width 宽度
   * @param height 高度
   * @returns canvas 对象
   */
  acquire(t, e) {
    const i = this.pool.findIndex(
      (a) => a.width >= t && a.height >= e && !this.inUse.has(a)
    );
    let o;
    i !== -1 ? (o = this.pool[i], this.pool.splice(i, 1)) : o = document.createElement("canvas"), o.width = t, o.height = e;
    const s = o.getContext("2d");
    return s && s.clearRect(0, 0, t, e), this.inUse.add(o), o;
  }
  /**
   * 释放 canvas 对象回池中
   * @param canvas 要释放的 canvas
   */
  release(t) {
    if (this.inUse.has(t) && (this.inUse.delete(t), this.pool.length < this.maxPoolSize)) {
      const e = t.getContext("2d");
      e && e.clearRect(0, 0, t.width, t.height), this.pool.push(t);
    }
  }
  /**
   * 清空池
   */
  clear() {
    this.pool = [], this.inUse.clear();
  }
  /**
   * 获取池状态
   */
  getStats() {
    return {
      poolSize: this.pool.length,
      inUse: this.inUse.size
    };
  }
};
R(me, "instance");
let Gn = me;
async function $a(n, t) {
  return await C("get_local_plugin_resource_path", {
    pluginId: n,
    relativePath: t
  });
}
const Wa = "snippets-code:developer-mode", To = "snippets-code:frontend-diagnostics", Ba = 240, Ne = "[REDACTED]", gn = (n) => n.replace(
  /("(?:[^"]*(?:token|password|secret|authorization)[^"]*)"\s*:\s*)("(?:\\.|[^"])*"|[^,\r\n}\]]+)/gi,
  `$1"${Ne}"`
).replace(/\bBearer\s+[A-Za-z0-9._~+/=-]+/gi, `Bearer ${Ne}`).replace(
  /\b(?:gh[pousr]_[A-Za-z0-9_]{12,}|github_pat_[A-Za-z0-9_]{12,})\b/g,
  Ne
).replace(/(https?:\/\/)[^/\s@]+@/gi, `$1${Ne}@`).replace(
  /([?&][^=&\s]*(?:token|password|secret|authorization)[^=&\s]*=)[^&\s]+/gi,
  `$1${Ne}`
), oi = (n) => {
  if (n === void 0) return;
  if (typeof n == "string") return gn(n);
  const t = /* @__PURE__ */ new WeakSet();
  try {
    return gn(
      JSON.stringify(
        n,
        (e, i) => {
          if (i instanceof Error)
            return {
              name: i.name,
              message: i.message,
              stack: i.stack,
              cause: i.cause
            };
          if (typeof i == "bigint") return i.toString();
          if (typeof i == "object" && i !== null) {
            if (t.has(i)) return "[Circular]";
            t.add(i);
          }
          return i;
        },
        2
      )
    );
  } catch {
    return gn(String(n));
  }
}, Na = () => {
  try {
    return globalThis.__TAURI_INTERNALS__?.metadata?.currentWindow?.label ?? "webview";
  } catch {
    return "webview";
  }
}, Ha = () => {
  if (typeof localStorage > "u") return [];
  try {
    const n = JSON.parse(localStorage.getItem(To) || "[]");
    return Array.isArray(n) ? n : [];
  } catch {
    return [];
  }
}, si = () => {
  if (typeof localStorage > "u") return !1;
  try {
    return localStorage.getItem(Wa) === "true";
  } catch {
    return !1;
  }
}, ja = (n, t, e) => {
  if (!si() || typeof localStorage > "u") return;
  const i = Ha();
  i.push({
    timestamp: (/* @__PURE__ */ new Date()).toISOString(),
    level: n,
    windowLabel: Na(),
    message: gn(t),
    data: oi(e)
  });
  try {
    localStorage.setItem(
      To,
      JSON.stringify(i.slice(-Ba))
    );
  } catch {
  }
}, Fa = () => si(), Va = (n) => n === "error" || si(), rn = (n, t, e) => {
  ja(n, t, e), Va(n) && C("frontend_log", {
    level: n,
    message: t,
    data: e === void 0 ? null : oi(e)
  }).catch(() => {
  });
}, A = {
  info: (n, t, ...e) => {
    rn("info", n, t);
  },
  error: (n, t) => {
    rn("error", n, t);
  },
  warn: (n, t) => {
    rn("warn", n, t);
  },
  debug: (n, t) => {
    Fa() && rn("debug", n, t);
  }
}, _t = {
  log: (n, t) => {
    C("append_ocr_diagnostic_log", {
      message: n,
      data: t === void 0 ? null : oi(t)
    }).catch(() => {
    });
  }
}, Ua = "resources/transformers/transformers.min.js", Ya = ["translation-offline-runtime", "translation"], Za = "https://huggingface.co/", Xa = "{model}/resolve/{revision}/", Ga = "/__snippets_code_disabled_transformers_local_models__/", qa = [
  "ort-wasm-simd-threaded.wasm",
  "ort-wasm-simd.wasm",
  "ort-wasm-threaded.wasm",
  "ort-wasm.wasm"
];
let He = null;
const Ka = (n) => {
  const t = n.toLowerCase();
  return [
    { index: n.lastIndexOf("/"), length: 1 },
    { index: n.lastIndexOf("\\"), length: 1 },
    { index: t.lastIndexOf("%5c"), length: 3 },
    { index: t.lastIndexOf("%2f"), length: 3 }
  ].reduce(
    (i, o) => o.index > i.index ? o : i,
    { index: -1, length: 0 }
  );
}, zo = (n) => {
  const t = n.search(/[?#]/), e = t >= 0 ? n.slice(0, t) : n, i = Ka(e);
  return i.index >= 0 ? e.slice(0, i.index + i.length) : e;
}, Ro = (n) => {
  const t = zo(n);
  return Object.fromEntries(
    qa.map((e) => [e, `${t}${e}`])
  );
}, Ja = (n, t) => {
  var e, i;
  n.useBrowserCache = !0, n.allowRemoteModels = !0, n.remoteHost = Za, n.remotePathTemplate = Xa, n.allowLocalModels = !1, n.localModelPath = Ga, t && (n.backends ?? (n.backends = {}), (e = n.backends).onnx ?? (e.onnx = {}), (i = n.backends.onnx).wasm ?? (i.wasm = {}), n.backends.onnx.wasm.wasmPaths = Ro(t), n.backends.onnx.wasm.numThreads = 1);
};
async function Qa() {
  return He || (He = (async () => {
    for (const n of Ya) {
      const t = await $a(n, Ua);
      if (!t) continue;
      const e = wa(t), i = await import(
        /* @vite-ignore */
        e
      );
      return Ja(i.env, e), A.info(`[离线翻译] 已从插件资源加载 Transformers runtime: ${n}`, {
        wasmPaths: i.env.backends?.onnx?.wasm?.wasmPaths,
        numThreads: i.env.backends?.onnx?.wasm?.numThreads,
        remoteHost: i.env.remoteHost,
        remotePathTemplate: i.env.remotePathTemplate,
        allowLocalModels: i.env.allowLocalModels,
        localModelPath: i.env.localModelPath
      }), i;
    }
    throw new Error("离线翻译运行时未安装，请先安装 translation-offline-runtime 插件资源包");
  })().catch((n) => {
    throw He = null, n;
  }), He);
}
let oe = null, Ze = !1, Le = null, ye = null, qn = null;
const tr = "Xenova/opus-mt-en-zh", er = [
  { name: "tokenizer_config.json", size: "~1KB" },
  { name: "config.json", size: "~1KB" },
  { name: "tokenizer.json", size: "~2MB" },
  { name: "generation_config.json", size: "~1KB" },
  { name: "onnx/encoder_model_quantized.onnx", size: "~75MB" },
  { name: "onnx/decoder_model_merged_quantized.onnx", size: "~220MB" }
], nr = 3e5;
function ir(n) {
  qn = n;
}
function or() {
  return er;
}
function sr(n, t, e) {
  return Promise.race([
    n,
    new Promise(
      (i, o) => setTimeout(() => o(new Error(e)), t)
    )
  ]);
}
async function Lo() {
  return oe || Le || (Ze = !0, A.info("[离线翻译] 正在加载翻译模型..."), Le = (async () => {
    try {
      const { pipeline: n } = await Qa();
      let t = "";
      const e = n("translation", tr, {
        dtype: "q8",
        device: "wasm",
        revision: "main",
        local_files_only: !1,
        progress_callback: (o) => {
          o.status === "done" && o.file && o.file !== t && (t = o.file, A.info(`[离线翻译] 已加载: ${o.file}`)), qn && qn({
            status: o.status,
            progress: o.progress,
            file: o.file
          });
        }
      });
      return oe = await sr(
        e,
        nr,
        "模型加载超时，请检查网络连接后重试"
      ), A.info("[离线翻译] 翻译模型加载完成"), Ze = !1, oe;
    } catch (n) {
      throw Ze = !1, Le = null, A.error("[离线翻译] 模型加载失败:", n), n;
    }
  })(), Le);
}
async function Po(n) {
  if (!n?.trim()) return n;
  ye = new AbortController();
  const t = ye.signal;
  try {
    const e = await Lo();
    if (t.aborted)
      throw new Error("翻译已取消");
    const i = n.split(`
`), o = [];
    for (const s of i) {
      if (t.aborted)
        throw new Error("翻译已取消");
      const a = s.trim();
      if (!a) {
        o.push("");
        continue;
      }
      const r = await e(a);
      if (t.aborted)
        throw new Error("翻译已取消");
      if (Array.isArray(r) && r.length > 0) {
        const l = r[0].translation_text || a;
        o.push(l);
      } else
        o.push(a);
    }
    return o.join(`
`);
  } catch (e) {
    throw e instanceof Error && e.message === "翻译已取消" ? (A.info("[离线翻译] 翻译已取消"), e) : e instanceof Error && e.message.includes("离线翻译运行时未安装") ? (A.warn("[离线翻译] 运行时资源未安装"), e) : (A.error("[离线翻译] 翻译失败:", e), new Error("离线翻译失败，请检查模型是否正确加载"));
  } finally {
    ye = null;
  }
}
function ar() {
  ye && (ye.abort(), ye = null, A.info("[离线翻译] 已发送取消信号"));
}
function rr() {
  return ye !== null;
}
async function Ao() {
  await Lo();
}
function lr() {
  return oe !== null;
}
function cr() {
  return Ze;
}
async function ai() {
  try {
    if ("caches" in window) {
      const t = await caches.keys();
      A.info(`[离线翻译] Cache Storage 列表: ${JSON.stringify(t)}`);
      for (const e of t)
        if (e.includes("transformers") || e.includes("huggingface")) {
          const o = await (await caches.open(e)).keys();
          if (A.info(`[离线翻译] Cache "${e}" 包含 ${o.length} 个文件`), o.some(
            (a) => a.url.includes("opus-mt-en-zh") || a.url.includes("Xenova")
          )) {
            const a = o.some((r) => r.url.includes(".onnx"));
            if (A.info(`[离线翻译] 找到模型缓存，包含 ONNX: ${a}`), a)
              return {
                isCached: !0,
                cacheType: "cache-storage",
                cacheName: e,
                estimatedSize: "~300MB"
              };
          }
        }
    }
    const n = await indexedDB.databases();
    A.info(`[离线翻译] IndexedDB 列表: ${JSON.stringify(n.map((t) => t.name))}`);
    for (const t of n)
      if (t.name && (t.name.includes("transformers") || t.name.includes("huggingface") || t.name.includes("onnx") || t.name.includes("localforage")))
        return A.info(`[离线翻译] 找到 IndexedDB 缓存: ${t.name}`), {
          isCached: !0,
          cacheType: "indexeddb",
          cacheName: t.name,
          estimatedSize: "~300MB"
        };
    return A.info("[离线翻译] 未找到模型缓存"), { isCached: !1, cacheType: "none" };
  } catch (n) {
    return A.warn("[离线翻译] 检查缓存失败:", n), { isCached: !1, cacheType: "none" };
  }
}
async function hr() {
  return (await ai()).isCached;
}
function ur() {
  return oe !== null;
}
async function dr() {
  if (oe)
    try {
      await oe.dispose?.();
    } catch {
    }
  oe = null, Le = null, Ze = !1, A.info("[离线翻译] 翻译器已释放");
}
async function gr() {
  try {
    const n = await indexedDB.databases();
    for (const t of n)
      t.name && (t.name.includes("transformers") || t.name.includes("onnx")) && (indexedDB.deleteDatabase(t.name), A.info(`[离线翻译] 已删除 IndexedDB: ${t.name}`));
    if ("caches" in window) {
      const t = await caches.keys();
      for (const e of t)
        (e.includes("transformers") || e.includes("onnx")) && (await caches.delete(e), A.info(`[离线翻译] 已删除 Cache: ${e}`));
    }
    A.info("[离线翻译] 模型缓存已清除");
  } catch (n) {
    throw A.error("[离线翻译] 清除缓存失败:", n), n;
  }
}
const fr = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  canUseOfflineTranslation: ur,
  cancelOfflineTranslation: ar,
  clearModelCache: gr,
  disposeOfflineTranslator: dr,
  getModelCacheInfo: ai,
  getModelFiles: or,
  getRuntimeBaseUrl: zo,
  getRuntimeWasmPaths: Ro,
  isModelCached: hr,
  isOfflineTranslatorInitializing: cr,
  isOfflineTranslatorReady: lr,
  isTranslationInProgress: rr,
  setProgressCallback: ir,
  translateOffline: Po,
  warmupOfflineTranslator: Ao
}, Symbol.toStringTag, { value: "Module" }));
class fe {
  /**
   * 懒加载 OCR 模块
   */
  static async loadOCR() {
    const t = "ocr";
    if (this.loadedModules.has(t))
      return this.loadedModules.get(t);
    if (this.loadingPromises.has(t))
      return this.loadingPromises.get(t);
    const e = Promise.resolve().then(() => Ig).then((i) => (this.loadedModules.set(t, i), this.loadingPromises.delete(t), i));
    return this.loadingPromises.set(t, e), e;
  }
  /**
   * 懒加载离线翻译模块
   */
  static async loadOfflineTranslator() {
    const t = "offlineTranslator";
    if (this.loadedModules.has(t))
      return this.loadedModules.get(t);
    if (this.loadingPromises.has(t))
      return this.loadingPromises.get(t);
    const e = Promise.resolve(fr).then((i) => (this.loadedModules.set(t, i), this.loadingPromises.delete(t), i));
    return this.loadingPromises.set(t, e), e;
  }
  /**
   * 预加载模块（在空闲时）
   */
  static preloadModules() {
    "requestIdleCallback" in window ? requestIdleCallback(() => {
      this.loadOCR().catch(() => {
      }), this.loadOfflineTranslator().catch(() => {
      });
    }, { timeout: 2e3 }) : setTimeout(() => {
      this.loadOCR().catch(() => {
      }), this.loadOfflineTranslator().catch(() => {
      });
    }, 1e3);
  }
  /**
   * 清除已加载的模块
   */
  static clear() {
    this.loadedModules.clear(), this.loadingPromises.clear();
  }
  /**
   * 获取加载状态
   */
  static getLoadStatus() {
    return {
      loaded: Array.from(this.loadedModules.keys()),
      loading: Array.from(this.loadingPromises.keys())
    };
  }
}
R(fe, "loadedModules", /* @__PURE__ */ new Map()), R(fe, "loadingPromises", /* @__PURE__ */ new Map());
async function mr() {
  return await C("local_ai_get_status");
}
async function pr(n) {
  return await C("local_ai_start_service", {
    config: null
  });
}
async function wr(n) {
  return await C("local_ai_chat", { request: n });
}
function Do(n) {
  if (!n) return "unknown";
  const t = n.match(/[\u4e00-\u9fa5]/g), e = t ? t.length : 0, i = n.match(/[\u3040-\u30ff]/g), o = i ? i.length : 0, s = n.match(/[\uac00-\ud7af]/g), a = s ? s.length : 0, r = n.match(/[a-zA-Z]/g), l = r ? r.length : 0, u = e + o + a + l;
  return u === 0 ? "unknown" : o >= 3 && o > l && o / u >= 0.2 ? "ja" : a >= 3 && a > e && a > l && a / u >= 0.2 ? "ko" : e > l ? "zh" : l > e ? "en" : "unknown";
}
function Pe(n) {
  return n === "zh" || n === "en";
}
function ge(n) {
  return Do(n);
}
const yr = /[.!?。！？；;：:][)"'”’】）\]]*$/, Vi = /[\u3040-\u30ff\u3400-\u4dbf\u4e00-\u9fff\uac00-\ud7af]/, ln = /[A-Za-z0-9]/, vr = /^\s*(?:(?:[-*+•·●○■□▪▫◆◇]|[▶▷►▸▹→]\s*(?:[·•]\s*)?)\s+|\d+[.)、）]\s*|[a-zA-Z][.)]\s+)/, Ui = /(?:^|\s)(?:(?:[-*+•·●○■□▪▫◆◇]|[▶▷►▸▹→]\s*[·•])\s+|\d+[.)、）]\s*|[a-zA-Z][.)]\s+)/g;
function Io(n, t = {}) {
  const e = ol(n), i = Ar(n, e);
  return i.length === 0 ? [] : Rr(i, e) ? zr(i, e) : (t.mode === "single_para" ? [Fe(i, e)] : kr(i, e)).flatMap((s) => xr(s, e));
}
function xr(n, t) {
  const e = li(n, t), i = [];
  for (const o of e) {
    const s = i[i.length - 1], a = s ? Wr(s, o, t) : !1;
    if (!s || !a) {
      i.push(Nr(o));
      continue;
    }
    s.text = jr(s.text, o.text), s.blocks = [...s.blocks, ...o.blocks], s.bbox = No(s.bbox, o.bbox), s.fontSize = Xi(
      s.fontSize || o.fontSize,
      s.blocks.length - o.blocks.length,
      o.fontSize,
      o.blocks.length
    ), s.lineHeight = Xi(
      s.lineHeight || o.lineHeight,
      s.blocks.length - o.blocks.length,
      o.lineHeight,
      o.blocks.length
    ), s.isCodeBlock = !!(s.isCodeBlock || o.isCodeLike || o.hasTableColumns), s.isStructuredBlock = !!(s.isStructuredBlock || o.hasTableColumns);
  }
  return Fr(i, t);
}
function kr(n, t) {
  if (n.length <= 1)
    return [n];
  const e = n.map((l) => ({
    bbox: Lr(l),
    block: l
  })).filter((l) => Pr(l.bbox)).sort(ri);
  if (e.length <= 1)
    return [Fe(n, t)];
  if (br(e, t))
    return [Fe(n, t)];
  const { cuts: i, rows: o } = Sr(e);
  if (i.length < 2 || o.length <= 1)
    return [Fe(n, t)];
  const s = _r(i, o), r = Tr(s).filter((l) => l.units.length > 0).map((l) => l.units.map((h) => h.block)).filter((l) => l.length > 0);
  return r.length > 0 ? r : [Fe(n, t)];
}
function br(n, t) {
  if (n.length < 2)
    return !0;
  const e = [...n].sort(ri);
  let i = 0, o = 0;
  for (let s = 1; s < e.length; s += 1) {
    const a = e[s - 1].bbox, r = e[s].bbox;
    if (r.top - a.bottom > t * 2.5)
      continue;
    i += 1;
    const h = Math.min(a.right, r.right) - Math.max(a.left, r.left), u = Math.max(Math.min(a.right - a.left, r.right - r.left), 1), d = h / u >= 0.45, x = Math.abs(a.left - r.left) <= t * 1.5;
    (d || x) && (o += 1);
  }
  return i > 0 && o / i >= 0.72;
}
function Sr(n) {
  const t = Math.min(...n.map((l) => l.bbox.left)) - 1, e = Math.max(...n.map((l) => l.bbox.right)) + 1, i = [], o = [];
  let s = [], a = 0;
  for (; a < n.length; ) {
    const h = n[a].bbox.bottom, u = [];
    for (; a < n.length && n[a].bbox.top <= h; )
      u.push(n[a]), a += 1;
    u.sort((f, v) => f.bbox.left - v.bbox.left || f.bbox.right - v.bbox.right);
    const d = Cr(u, t, e, i.length), { gaps: x, removedGaps: w } = Mr(s, d), S = i.length - 1;
    for (const f of w)
      o.push({
        left: f.left,
        right: f.right,
        startRow: f.startRow,
        endRow: S
      });
    s = x, i.push(u);
  }
  const r = i.length - 1;
  for (const l of s)
    o.push({
      left: l.left,
      right: l.right,
      startRow: l.startRow,
      endRow: r
    });
  return o.sort((l, h) => l.left - h.left || l.right - h.right), { cuts: o, rows: i };
}
function Cr(n, t, e, i) {
  const o = [];
  let s = t;
  for (const a of n)
    a.bbox.left > s && o.push({ left: s, right: a.bbox.left, startRow: i }), a.bbox.right > s && (s = a.bbox.right);
  return o.push({ left: s, right: e, startRow: i }), o;
}
function Mr(n, t) {
  const e = n.map(() => !1), i = t.map(() => !1), o = [];
  for (let s = 0; s < n.length; s += 1) {
    const a = n[s];
    for (let r = 0; r < t.length; r += 1) {
      const l = t[r], h = Math.max(a.left, l.left), u = Math.min(a.right, l.right);
      h <= u && (o.push({ left: h, right: u, startRow: a.startRow }), e[s] = !0, i[r] = !0);
    }
  }
  for (let s = 0; s < t.length; s += 1)
    i[s] || o.push(t[s]);
  return {
    gaps: o,
    removedGaps: n.filter((s, a) => !e[a])
  };
}
function _r(n, t) {
  const e = t.map(() => []);
  for (const r of n)
    for (let l = r.startRow; l <= r.endRow; l += 1)
      e[l]?.push({ left: r.left, right: r.right });
  for (const r of e)
    r.sort((l, h) => l.left - h.left || l.right - h.right);
  const i = {
    xLeft: n[0].left - 1,
    xRight: n[n.length - 1].right + 1,
    rowTop: -1,
    rowBottom: -1,
    units: [],
    children: []
  }, o = [i];
  let s = [];
  const a = (r) => {
    const l = r.xRight - 2, h = o.filter((w) => l >= w.xLeft && l <= w.xRight + 1e-4 && w.rowBottom < r.rowTop), u = Math.max(...h.map((w) => w.rowBottom), i.rowBottom), d = h.filter((w) => w.rowBottom === u);
    (d.length > 0 ? d.reduce((w, S) => S.xRight > w.xRight ? S : w) : i).children.push(r), o.push(r);
  };
  for (let r = 0; r < t.length; r += 1) {
    const l = e[r], h = [];
    for (const w of s) {
      let S = !1, f = !1, v = !1;
      for (const P of l)
        if (cn(P.right, w.xLeft) && (S = !0), cn(P.left, w.xRight) && (f = !0), w.xLeft < P.left && P.left < w.xRight || w.xLeft < P.right && P.right < w.xRight) {
          v = !0;
          break;
        }
      !S || !f || v ? a(w) : (w.rowBottom = r, h.push(w));
    }
    s = h;
    let u = 0, d = 0;
    const x = t[r];
    for (; u < x.length && l.length >= 2; ) {
      const w = x[u];
      d + 1 >= l.length && (d = Math.max(0, l.length - 2));
      const S = l[d].right, f = l[d + 1].left;
      if (w.bbox.left + 1e-4 > f && d < l.length - 2) {
        d += 1;
        continue;
      }
      let v = s.find((P) => cn(P.xLeft, S) && cn(P.xRight, f));
      v || (v = {
        xLeft: S,
        xRight: f,
        rowTop: r,
        rowBottom: r,
        units: [],
        children: []
      }, s.push(v)), v.units.push(w), u += 1;
    }
  }
  for (const r of s)
    a(r);
  for (const r of o)
    r.children.sort((l, h) => l.xLeft - h.xLeft || l.rowTop - h.rowTop), r.units.sort(ri);
  return i;
}
function Tr(n) {
  const t = [n], e = [];
  for (; t.length > 0; ) {
    const i = t.pop();
    i && (e.push(i), t.push(...[...i.children].reverse()));
  }
  return e;
}
function Fe(n, t) {
  return [...n].sort((e, i) => {
    const o = e.y - i.y;
    return Math.abs(o) > t * 0.45 ? o : e.x - i.x;
  });
}
function zr(n, t) {
  const e = he(Nt(n.map((a) => a.width)), t * 0.5), i = Math.max(e * 1.4, t * 0.28), o = [...n].sort((a, r) => {
    const l = r.x + r.width / 2 - (a.x + a.width / 2);
    return Math.abs(l) > t * 0.65 ? l : a.y - r.y;
  }), s = [];
  for (const a of o) {
    const r = a.x + a.width / 2, l = s[s.length - 1], h = l ? Nt(l.map((u) => u.x + u.width / 2)) : 0;
    l && Math.abs(r - h) <= i ? l.push(a) : s.push([a]);
  }
  return s.map((a) => {
    const r = [...a].sort((x, w) => x.y - w.y), l = r.reduce((x, w, S) => {
      const f = w.text.trim();
      return S === 0 ? f : ci(x, f);
    }, ""), h = Bo(r), u = Nt(r.map((x) => he(x.fontSize, t))), d = Nt(r.map((x) => Mn(x)));
    return {
      text: l,
      blocks: r,
      bbox: h,
      isCodeBlock: !1,
      isStructuredBlock: !1,
      fontSize: u,
      lineHeight: d,
      angle: Nt(r.map((x) => x.angle || 0))
    };
  });
}
function Rr(n, t) {
  return n.length < 2 ? !1 : n.filter((i) => {
    const o = Math.max(i.width, 1);
    return i.height > o * 1.35 && i.height > Math.max(18, t * 0.35);
  }).length >= Math.max(2, Math.ceil(n.length * 0.56));
}
function Lr(n) {
  return {
    left: n.x,
    top: n.y,
    right: n.x + n.width,
    bottom: n.y + n.height
  };
}
function Pr(n) {
  return Number.isFinite(n.left) && Number.isFinite(n.top) && Number.isFinite(n.right) && Number.isFinite(n.bottom) && n.right >= n.left && n.bottom >= n.top;
}
function ri(n, t) {
  return n.bbox.top - t.bbox.top || n.bbox.left - t.bbox.left;
}
function cn(n, t) {
  return Math.abs(n - t) <= 1e-4;
}
function Ar(n, t) {
  return n.map((e) => {
    const i = e.text.trim();
    if (!i || Dr(e, t) || Or(i))
      return null;
    const o = Er(Ir(i, e, t));
    return o === e.text ? e : { ...e, text: o };
  }).filter((e) => !!e);
}
function Dr(n, t) {
  const e = n.text.trim();
  if (!/^[cC]$/.test(e))
    return !1;
  const i = t * 1.25;
  return n.width <= i && n.height <= i;
}
function Ir(n, t, e) {
  return /^xC$/i.test(n) && t.width <= e * 2.4 ? "X" : n;
}
function Or(n) {
  return /^(?:en|zh|ja|ko|de|fr|es|ru|pt|it|nl)[A-Z]{2,4}$/.test(n.trim());
}
function Er(n) {
  return n.replace(/^:\s+(?=[A-Z])/, "- ");
}
function li(n, t) {
  const e = [...n].sort((s, a) => {
    const r = s.y - a.y;
    return Math.abs(r) > t * 0.45 ? r : s.x - a.x;
  }), i = [], o = t * 0.45;
  for (const s of e) {
    const a = i[i.length - 1];
    a && Math.abs(s.y - a.y) < o && !Qr(a.blocks, s, t) ? (a.blocks.push(s), a.y = Nt(a.blocks.map((r) => r.y))) : i.push({ y: s.y, blocks: [s] });
  }
  return i.map((s) => $r(s.blocks, t));
}
function $r(n, t) {
  const e = [...n].sort((r, l) => r.x - l.x), i = Bo(e), o = e.reduce((r, l, h) => {
    const u = l.text.trim();
    return h === 0 ? u : Hr(r, u);
  }, ""), s = Nt(e.map((r) => he(r.fontSize, t))), a = Nt(e.map((r) => Mn(r)));
  return {
    text: o,
    blocks: e,
    bbox: i,
    fontSize: s,
    lineHeight: a,
    centerY: i.y + i.height / 2,
    hasTableColumns: tl(e, t),
    isCodeLike: $o(o)
  };
}
function Wr(n, t, e) {
  const i = li(n.blocks, e), o = i[i.length - 1];
  if (!o) return !1;
  const s = qe(o.text);
  if (Cn(o.text) || qe(t.text) || s && !Br(o, t, e) || t.isCodeLike || o.isCodeLike || t.hasTableColumns || o.hasTableColumns) return !1;
  const a = t.bbox.y - (o.bbox.y + o.bbox.height);
  if (a < -e * 0.25 || a >= e * 1.8 || Xr(i, a, e) || Gr(o, t, a, e) || qr(o, t, a, e) || Kr(o, t, a, e) || Jr(o, t, a, e))
    return !1;
  if (s)
    return !0;
  const r = Math.max(e * 1.2, o.lineHeight * 0.9);
  return Math.abs(t.bbox.x - o.bbox.x) <= r;
}
function Br(n, t, e) {
  if (Eo(t.text))
    return !1;
  const i = t.bbox.x - n.bbox.x, o = Math.max(e * 0.8, n.lineHeight * 0.65);
  return i >= o;
}
function Nr(n) {
  return {
    text: n.text,
    blocks: [...n.blocks],
    bbox: { ...n.bbox },
    isCodeBlock: n.isCodeLike || n.hasTableColumns,
    isStructuredBlock: n.hasTableColumns,
    fontSize: n.fontSize,
    lineHeight: n.lineHeight,
    angle: Nt(n.blocks.map((t) => t.angle || 0))
  };
}
function Hr(n, t) {
  return ci(n, t);
}
function jr(n, t) {
  return ci(n, t);
}
function ci(n, t) {
  const e = n.trimEnd(), i = t.trimStart();
  if (!e) return i;
  if (!i) return e;
  const o = e.charAt(e.length - 1), s = i.charAt(0), a = e.charAt(e.length - 2);
  return o === "-" && ln.test(a) && ln.test(s) ? `${e.slice(0, -1)}${i}` : sl(s) || al(o) ? `${e}${i}` : Vi.test(o) || Vi.test(s) || Gi(o) || Gi(s) ? `${e}${i}` : ln.test(o) && ln.test(s) ? `${e} ${i}` : `${e} ${i}`.replace(/\s+/g, " ");
}
function Cn(n) {
  return yr.test(n.trim());
}
function qe(n) {
  return vr.test(n);
}
function Fr(n, t) {
  return n.flatMap((e) => Vr(e, t));
}
function Vr(n, t) {
  const e = Oo(n.text);
  if (e.length <= 1)
    return [n];
  const i = li(n.blocks, t), o = i.length === e.length;
  return e.map((s, a) => {
    const r = o ? i[a] : null, l = r?.bbox || Yr(n.bbox, a, e.length), h = r?.blocks || [Zr(n, s, l, a)];
    return {
      ...n,
      text: s,
      blocks: h,
      bbox: l,
      isCodeBlock: !!h.some((u) => $o(u.text)),
      isStructuredBlock: n.isStructuredBlock,
      fontSize: Nt(h.map((u) => he(u.fontSize, n.fontSize || t))),
      lineHeight: Nt(h.map((u) => Mn(u))),
      angle: Nt(h.map((u) => u.angle || 0))
    };
  });
}
function Oo(n) {
  const t = n.split(/\r?\n+/).map((i) => i.trim()).filter(Boolean);
  if (t.length > 1)
    return t.flatMap(Oo);
  const e = Ur(n);
  return e.length > 1 ? e.flatMap(Yi) : Yi(n);
}
function Ur(n) {
  const t = n.trim(), e = [];
  Ui.lastIndex = 0;
  for (const i of t.matchAll(Ui)) {
    const o = i[0], s = i.index ?? 0;
    e.push(s + (o.startsWith(" ") ? 1 : 0));
  }
  return e.length <= 1 ? [t] : e.map((i, o) => {
    const s = e[o + 1] ?? t.length;
    return t.slice(i, s).trim();
  }).filter(Boolean);
}
function Yi(n) {
  const t = n.trim();
  if (!qe(t))
    return [t];
  const e = t.match(/^(.+?\([^)]{1,80}\))\s+([A-Z][A-Za-z0-9][A-Za-z0-9\s:,'&()[\]/-]{2,40})$/);
  return !e || !Eo(e[2]) ? [t] : [e[1].trim(), e[2].trim()];
}
function Yr(n, t, e) {
  const i = n.height / Math.max(e, 1);
  return {
    x: n.x,
    y: n.y + i * t,
    width: n.width,
    height: i
  };
}
function Zr(n, t, e, i) {
  const o = n.blocks[Math.min(i, Math.max(n.blocks.length - 1, 0))];
  return {
    ...o || {
      fontSize: n.fontSize || e.height,
      lineHeight: n.lineHeight || e.height,
      angle: n.angle || 0
    },
    text: t,
    x: e.x,
    y: e.y,
    width: e.width,
    height: e.height,
    fontSize: o?.fontSize || n.fontSize || e.height,
    lineHeight: o?.lineHeight || n.lineHeight || e.height,
    angle: o?.angle || n.angle || 0
  };
}
function Eo(n) {
  const t = n.trim();
  return !t || Cn(t) || qe(t) ? !1 : t.split(/\s+/).filter(Boolean).length <= 5 && /^[A-Z][A-Za-z0-9\s:,'&()[\]/-]+$/.test(t);
}
function Xr(n, t, e) {
  if (n.length < 2 || t <= 0)
    return !1;
  const i = [];
  for (let a = 1; a < n.length; a++) {
    const r = n[a - 1], h = n[a].bbox.y - (r.bbox.y + r.bbox.height);
    h > 0 && i.push(h);
  }
  const o = i.length > 0 ? Nt(i) : 0, s = Math.max(o * 2.2, e * 1.15);
  return t > s;
}
function Gr(n, t, e, i) {
  const o = n.text.trim();
  if (!o || Cn(o) || qe(o) || n.isCodeLike || o.endsWith("-"))
    return !1;
  const s = o.split(/\s+/).filter(Boolean).length, a = n.bbox.width < t.bbox.width * 0.72, r = /^[A-Z][A-Za-z0-9\s:,'&()[\]/-]+$/.test(o) && s <= 8 && a, l = /[\u3400-\u4dbf\u4e00-\u9fff]/.test(o) && o.length <= 12 && a, h = r || l;
  return n.fontSize >= t.fontSize * 1.18 && h ? !0 : e > i * 0.7 && h;
}
function qr(n, t, e, i) {
  if (e <= 0)
    return !1;
  const o = Math.max(n.fontSize, t.fontSize), s = Math.max(Math.min(n.fontSize, t.fontSize), 1), a = o / s, r = e / Math.max(s, i * 0.6, 1);
  if (a >= 1.45 && r >= 0.65)
    return !0;
  const l = n.fontSize >= i * 1.08 && n.bbox.width >= t.bbox.width * 0.82, h = t.fontSize <= n.fontSize * 0.78 && e >= Math.max(t.lineHeight * 0.75, i * 0.55);
  return l && h;
}
function Kr(n, t, e, i) {
  if (e < i * 0.45)
    return !1;
  const s = n.text.split(/\s+/).filter(Boolean).length <= 3 && n.bbox.width < t.bbox.width * 0.35, a = Math.abs(n.bbox.x - t.bbox.x) <= i * 0.6;
  return s && a;
}
function Jr(n, t, e, i) {
  return e < i * 0.25 || !(Math.abs(n.bbox.x - t.bbox.x) <= i * 0.35) ? !1 : Zi(n.text) && Zi(t.text);
}
function Zi(n) {
  const t = n.trim();
  return t.split(/\s+/).filter(Boolean).length <= 3 && t.length <= 32 && !Cn(t);
}
function $o(n) {
  const t = n.trim();
  return t ? !!(/^(?:\$|>|PS>|C:\\|[A-Za-z]:\\|\/[\w.-]+\/)/.test(t) || /^(?:const|let|var|return|import|export|function|class|if|else|for|while|try|catch)\b/.test(t) || /^[{}()[\];,]+$/.test(t) || /^(?:sudo|npm|yarn|pnpm|deno|bun|git|cd|ls|cat|chmod|mkdir|rm|cp|mv|curl|wget|brew|apt|yum|dnf|pip|cargo)\s+\S+/.test(t) || /[{};]/.test(t) && /[=()]/.test(t) || /^<\/?[A-Za-z][^>]*>$/.test(t) || /^[\w.-]+\([^)]*\)\s*[{;]?$/.test(t)) : !1;
}
function Qr(n, t, e) {
  const i = [...n].sort((a, r) => a.x - r.x), o = i[i.length - 1], s = t.x - (o.x + o.width);
  return s > e * 0.9 && il(o.text) && Wo(t.text) ? !1 : s > e * 3.2;
}
function tl(n, t) {
  if (n.length < 2)
    return n.some((o) => el(o.text));
  const e = [...n].sort((o, s) => o.x - s.x);
  let i = 0;
  for (let o = 1; o < e.length; o++) {
    const s = e[o - 1], a = e[o], r = e[o].x - (s.x + s.width);
    (r > t * 1.8 || r > t * 0.9 && nl(s.text) && Wo(a.text)) && (i += 1);
  }
  return i >= 1;
}
function el(n) {
  const t = n.trim();
  return /\S\s{3,}\S/.test(t) && (/^Option\s{2,}Description\b/i.test(t) || /^[A-Za-z_][A-Za-z0-9_-]{1,24}\s{2,}[A-Z]/.test(t));
}
function nl(n) {
  return /^[A-Za-z_][A-Za-z0-9_-]{1,24}$/.test(n.trim());
}
function il(n) {
  const t = n.trim();
  return /^[a-z_][A-Za-z0-9_-]{1,24}$/.test(t) || /[_-]/.test(t);
}
function Wo(n) {
  const t = n.trim();
  return /^[A-Z]/.test(t) && t.length > 6;
}
function Bo(n) {
  const t = n.map((e) => ({
    x: e.x,
    y: e.y,
    width: e.width,
    height: e.height
  }));
  return t.reduce((e, i) => No(e, i), t[0]);
}
function No(n, t) {
  const e = Math.min(n.x, t.x), i = Math.min(n.y, t.y), o = Math.max(n.x + n.width, t.x + t.width), s = Math.max(n.y + n.height, t.y + t.height);
  return {
    x: e,
    y: i,
    width: o - e,
    height: s - i
  };
}
function ol(n) {
  return he(Nt(n.map((t) => Mn(t))), 16);
}
function Mn(n) {
  return he(n.lineHeight, he(n.height, he(n.fontSize, 16) * 1.2));
}
function Xi(n, t, e, i) {
  const o = t + i;
  return o <= 0 ? e : (n * t + e * i) / o;
}
function he(n, t) {
  return Number.isFinite(n) && n > 0 ? n : t;
}
function Nt(n) {
  return n.length === 0 ? 0 : n.reduce((t, e) => t + e, 0) / n.length;
}
function sl(n) {
  return /^[,.;:!?，。！？；：、)\]}>"'”’]$/.test(n);
}
function al(n) {
  return /^[(\[{<"'“‘]$/.test(n);
}
function Gi(n) {
  return /^[，。！？；：、（）【】《》“”‘’]$/.test(n);
}
const qi = 34;
class rl {
  constructor(t, e, i) {
    this.pixels = t, this.sampleWidth = e, this.sampleHeight = i;
  }
  detect(t, e) {
    const i = this.getDominantNearbyColor(t, e), o = this.findMatchingStart(t, e, i);
    if (!o) return null;
    const s = this.getPixelBounds(e);
    return s ? this.floodFillRegion(o, s, i) : null;
  }
  floodFillRegion(t, e, i) {
    const { left: o, top: s, right: a, bottom: r, width: l, height: h } = e, u = new Uint8Array(l * h), d = new Int32Array(l * h), x = new Int32Array(l * h);
    let w = 0, S = 1, f = t.x, v = t.x, P = t.y, N = t.y;
    for (d[0] = t.x, x[0] = t.y, u[(t.y - s) * l + t.x - o] = 1; w < S; ) {
      const X = d[w], j = x[w];
      if (w += 1, f = Math.min(f, X), v = Math.max(v, X), P = Math.min(P, j), N = Math.max(N, j), S = this.enqueueNeighbors(
        X,
        j,
        o,
        s,
        a,
        r,
        l,
        i,
        u,
        d,
        x,
        S
      ), S > l * h * 0.94) return null;
    }
    const T = v - f + 1, U = N - P + 1;
    return S / Math.max(1, T * U) >= 0.24 ? { x: f, y: P, width: T, height: U } : null;
  }
  getPixelBounds(t) {
    const e = Math.max(0, Math.floor(t.x)), i = Math.max(0, Math.floor(t.y)), o = Math.min(
      this.sampleWidth,
      Math.ceil(t.x + t.width)
    ), s = Math.min(
      this.sampleHeight,
      Math.ceil(t.y + t.height)
    ), a = o - e, r = s - i;
    return a > 0 && r > 0 ? { left: e, top: i, right: o, bottom: s, width: a, height: r } : null;
  }
  enqueueNeighbors(t, e, i, o, s, a, r, l, h, u, d, x) {
    let w = x;
    const S = [
      { x: t - 1, y: e },
      { x: t + 1, y: e },
      { x: t, y: e - 1 },
      { x: t, y: e + 1 }
    ];
    for (const f of S) {
      if (f.x < i || f.x >= s || f.y < o || f.y >= a)
        continue;
      const v = (f.y - o) * r + f.x - i;
      h[v] || (h[v] = 1, this.isColorNear(this.getColor(f.x, f.y), l) && (u[w] = f.x, d[w] = f.y, w += 1));
    }
    return w;
  }
  getDominantNearbyColor(t, e) {
    const i = /* @__PURE__ */ new Map();
    for (let s = -4; s <= 4; s += 2)
      for (let a = -4; a <= 4; a += 2) {
        const r = Math.round(t.x + a), l = Math.round(t.y + s);
        if (!this.contains(e, { x: r, y: l })) continue;
        const h = this.getColor(r, l), u = `${h.r >> 4},${h.g >> 4},${h.b >> 4}`, d = i.get(u) || { count: 0, r: 0, g: 0, b: 0 };
        d.count += 1, d.r += h.r, d.g += h.g, d.b += h.b, i.set(u, d);
      }
    const o = [...i.values()].reduce(
      (s, a) => a.count > s.count ? a : s,
      { count: 1, r: 255, g: 255, b: 255 }
    );
    return {
      r: o.r / o.count,
      g: o.g / o.count,
      b: o.b / o.count
    };
  }
  findMatchingStart(t, e, i) {
    for (let o = 0; o <= 6; o += 1)
      for (let s = t.y - o; s <= t.y + o; s += 1)
        for (let a = t.x - o; a <= t.x + o; a += 1) {
          const r = { x: Math.round(a), y: Math.round(s) };
          if (this.contains(e, r) && this.isColorNear(this.getColor(r.x, r.y), i))
            return r;
        }
    return null;
  }
  isColorNear(t, e) {
    const i = t.r - e.r, o = t.g - e.g, s = t.b - e.b;
    return i * i + o * o + s * s <= qi * qi;
  }
  getColor(t, e) {
    const i = Math.max(0, Math.min(this.sampleWidth - 1, t)), s = (Math.max(0, Math.min(this.sampleHeight - 1, e)) * this.sampleWidth + i) * 4;
    return {
      r: this.pixels[s],
      g: this.pixels[s + 1],
      b: this.pixels[s + 2]
    };
  }
  contains(t, e) {
    return e.x >= t.x && e.x < t.x + t.width && e.y >= t.y && e.y < t.y + t.height;
  }
}
const ll = 960, cl = 640;
class hi {
  constructor(t, e, i, o, s) {
    R(this, "regionDetector");
    R(this, "lastDetection", null);
    this.sampleWidth = e, this.sampleHeight = i, this.logicalWidth = o, this.logicalHeight = s, this.regionDetector = new rl(
      t,
      e,
      i
    );
  }
  static fromImage(t, e, i) {
    if (e <= 0 || i <= 0) return null;
    const o = Math.min(
      1,
      ll / e,
      cl / i
    ), s = Math.max(1, Math.round(e * o)), a = Math.max(1, Math.round(i * o)), r = document.createElement("canvas");
    r.width = s, r.height = a;
    const l = r.getContext("2d", { willReadFrequently: !0 });
    if (!l) return null;
    l.drawImage(t, 0, 0, s, a);
    const h = l.getImageData(0, 0, s, a);
    return new hi(
      h.data,
      s,
      a,
      e,
      i
    );
  }
  detect(t, e) {
    const i = this.getCachedDetection(t, e);
    if (i !== void 0) return i;
    const o = this.toSampleRect(e), s = this.toSamplePoint(t);
    if (!this.containsSamplePoint(o, s))
      return this.cacheDetection(t, e, null), null;
    const a = this.regionDetector.detect(s, o);
    if (!a)
      return this.cacheDetection(t, e, null), null;
    const r = this.toLogicalRect(a), l = this.isUsefulCandidate(r, e, t) ? r : null;
    return this.cacheDetection(t, e, l), l;
  }
  getCachedDetection(t, e) {
    const i = this.lastDetection;
    if (!(!i || !this.isSameRect(i.bounds, e))) {
      if (i.result && this.containsLogicalPoint(i.result, t))
        return { ...i.result };
      if (!i.result && Math.hypot(t.x - i.point.x, t.y - i.point.y) < 14)
        return null;
    }
  }
  cacheDetection(t, e, i) {
    this.lastDetection = {
      point: { ...t },
      bounds: { ...e },
      result: i ? { ...i } : null
    };
  }
  isSameRect(t, e) {
    return t.x === e.x && t.y === e.y && t.width === e.width && t.height === e.height;
  }
  containsLogicalPoint(t, e) {
    return e.x >= t.x && e.x <= t.x + t.width && e.y >= t.y && e.y <= t.y + t.height;
  }
  containsSamplePoint(t, e) {
    return e.x >= t.x && e.x < t.x + t.width && e.y >= t.y && e.y < t.y + t.height;
  }
  isUsefulCandidate(t, e, i) {
    const o = t.width * t.height, s = e.width * e.height;
    return t.width >= 18 && t.height >= 14 && o >= 320 && o < s * 0.45 && this.containsLogicalPoint(t, i);
  }
  toSamplePoint(t) {
    return {
      x: Math.round(t.x * this.sampleWidth / this.logicalWidth),
      y: Math.round(t.y * this.sampleHeight / this.logicalHeight)
    };
  }
  toSampleRect(t) {
    return {
      x: Math.floor(t.x * this.sampleWidth / this.logicalWidth),
      y: Math.floor(t.y * this.sampleHeight / this.logicalHeight),
      width: Math.ceil(t.width * this.sampleWidth / this.logicalWidth),
      height: Math.ceil(t.height * this.sampleHeight / this.logicalHeight)
    };
  }
  toLogicalRect(t) {
    const e = this.logicalWidth / this.sampleWidth, i = this.logicalHeight / this.sampleHeight;
    return {
      x: Math.round(t.x * e),
      y: Math.round(t.y * i),
      width: Math.round(t.width * e),
      height: Math.round(t.height * i)
    };
  }
}
function Ki(n, t) {
  if (!n || !t) return n === t;
  if (Math.abs(n.x - t.x) <= 3 && Math.abs(n.y - t.y) <= 3 && Math.abs(n.width - t.width) <= 6 && Math.abs(n.height - t.height) <= 6) return !0;
  const i = Math.max(
    0,
    Math.min(n.x + n.width, t.x + t.width) - Math.max(n.x, t.x)
  ), o = Math.max(
    0,
    Math.min(n.y + n.height, t.y + t.height) - Math.max(n.y, t.y)
  ), s = i * o, a = n.width * n.height + t.width * t.height - s;
  return a > 0 && s / a >= 0.86;
}
class hl {
  constructor() {
    R(this, "currentRect", null);
    R(this, "isFinalized", !1);
  }
  preview(t) {
    return t ? this.isFinalized && Ki(this.currentRect, t) ? {
      rect: this.cloneRect(this.currentRect),
      changed: !1
    } : this.currentRect && t.width * t.height > this.currentRect.width * this.currentRect.height * 2.5 ? {
      rect: this.cloneRect(this.currentRect),
      changed: !1
    } : (this.isFinalized = !1, this.commit(t)) : {
      rect: this.cloneRect(this.currentRect),
      changed: !1
    };
  }
  finalize(t) {
    const e = this.commit(t);
    return this.isFinalized = t !== null, e;
  }
  reset() {
    this.currentRect = null, this.isFinalized = !1;
  }
  commit(t) {
    const e = !Ki(this.currentRect, t);
    return this.currentRect = this.cloneRect(t), {
      rect: this.cloneRect(this.currentRect),
      changed: e
    };
  }
  cloneRect(t) {
    return t ? { ...t } : null;
  }
}
class ul {
  constructor(t, e, i, o) {
    R(this, "canvas");
    R(this, "coordinateSystem");
    R(this, "drawingEngine");
    R(this, "eventHandler");
    // 状态管理
    R(this, "selectionRect", null);
    R(this, "annotations", []);
    R(this, "currentAnnotation", null);
    R(this, "selectedAnnotation", null);
    R(this, "hoveredAnnotation", null);
    // 拖拽状态
    R(this, "draggedAnnotation", null);
    R(this, "dragStartPoint", null);
    R(this, "resizingAnnotation", null);
    R(this, "resizeStartBounds", null);
    R(this, "resizeOperation", null);
    // 编辑状态
    R(this, "editingAnnotation", null);
    // 标注历史记录（用于撤销/恢复）
    R(this, "annotationUndoStack", []);
    R(this, "annotationRedoStack", []);
    R(this, "pendingDragSnapshot", null);
    R(this, "pendingResizeSnapshot", null);
    // 工具设置
    R(this, "currentTool", m.Select);
    R(this, "currentStyle", { color: "#ff4444", lineWidth: 3, opacity: 1 });
    R(this, "textSize", 16);
    R(this, "mosaicSize", 8);
    R(this, "selectionCornerRadius", 0);
    R(this, "showGuides", !0);
    // 取色器状态
    R(this, "colorPickerState", {
      isActive: !1,
      isVisible: !1,
      // 默认不可见
      mousePosition: { x: 0, y: 0 },
      showFormat: "hex",
      zoomFactor: 9,
      // 使用紧凑奇数采样，让中心像素醒目且面板不挤压底部信息
      isCopied: !1
    });
    // 窗口吸附相关
    R(this, "allWindows", []);
    R(this, "snapThreshold", 30);
    // 吸附阈值（像素）
    R(this, "snappedWindow", null);
    R(this, "snappedElement", null);
    R(this, "elementCandidateStabilizer", new hl());
    R(this, "showSnapPreview", !1);
    R(this, "captureMonitor", { x: 0, y: 0, scale: 1 });
    R(this, "lastPointerPosition", null);
    R(this, "smartDetectionSequence", 0);
    R(this, "smartDetectionTimer", null);
    R(this, "accessibilityDetectionTimer", null);
    R(this, "pendingSmartDetection", null);
    // 点击拖拽区分
    R(this, "pendingSnapCandidate", null);
    R(this, "dragStartPosition", null);
    R(this, "dragThreshold", 5);
    // 拖拽阈值（像素）
    // 节流相关状态
    R(this, "throttleTimer", null);
    R(this, "lastThrottledTimestamp", 0);
    R(this, "throttleInterval", 33);
    // ms, 30 FPS (优化性能)
    // 按键状态
    R(this, "isShiftPressed", !1);
    // 背景图像（预捕获的屏幕）
    R(this, "backgroundImage", null);
    R(this, "visualElementDetector", null);
    // 是否正在加载完整背景图
    R(this, "isLoadingBackground", !1);
    // 翻译覆盖层状态
    R(this, "translationOverlay", {
      blocks: [],
      isVisible: !1,
      isLoading: !1,
      sourceLanguage: "auto",
      targetLanguage: "zh",
      engine: "bing"
      // 默认值，实际值由组件初始化时从后端获取并设置
    });
    // 离线模型后端激活状态
    R(this, "offlineModelActivated", !1);
    // Canvas 池
    R(this, "canvasPool", Gn.getInstance());
    // 回调函数
    R(this, "onStateChange");
    R(this, "onTextInputRequest");
    R(this, "onColorPicked");
    // 背景重载标记（用于避免重复加载）
    R(this, "backgroundReloadPending", !1);
    // 事件处理器引用（用于清理）
    R(this, "mouseDownHandler", this.handleMouseDown.bind(this));
    R(this, "mouseMoveHandler", this.handleMouseMove.bind(this));
    R(this, "mouseUpHandler", this.handleMouseUp.bind(this));
    R(this, "doubleClickHandler", this.handleDoubleClick.bind(this));
    R(this, "keyDownHandler", this.handleKeyDownInternal.bind(this));
    R(this, "keyUpHandler", this.handleKeyUp.bind(this));
    this.canvas = t, this.onStateChange = e, this.onTextInputRequest = i, this.onColorPicked = o, this.coordinateSystem = new za(t), this.drawingEngine = new Ta(t, this.coordinateSystem), this.eventHandler = new Ra(t, this.coordinateSystem), this.bindMouseEvents(), this.initCanvas(), Promise.all([
      this.loadAllWindows().then(() => {
        this.detectInitialWindowSnap();
      }),
      this.loadScreenBackground()
    ]), fe.preloadModules();
  }
  // 公开方法：触发背景图重新加载（响应 preview-ready 事件）
  triggerBackgroundReload() {
    this.backgroundReloadPending || (this.backgroundReloadPending = !0, this.isLoadingBackground = !1, this.backgroundImage && (this.backgroundImage.onload = null, this.backgroundImage.onerror = null, this.backgroundImage = null, this.visualElementDetector = null), this.loadScreenBackground().finally(() => {
      this.backgroundReloadPending = !1;
    }));
  }
  cloneAnnotationData(t) {
    return {
      ...t,
      points: t.points.map((e) => ({ ...e })),
      style: { ...t.style },
      selected: !1,
      hovered: !1
    };
  }
  createHistorySnapshot() {
    return {
      annotations: this.annotations.map((t) => this.cloneAnnotationData(t.getData())),
      selectedAnnotationId: this.selectedAnnotation?.getData().id || null
    };
  }
  pushAnnotationHistory() {
    this.annotationUndoStack.push(this.createHistorySnapshot()), this.annotationRedoStack = [];
  }
  restoreHistorySnapshot(t) {
    if (this.annotations = t.annotations.map((e) => an.fromData(this.cloneAnnotationData(e))).filter((e) => e !== null), this.selectedAnnotation = null, this.hoveredAnnotation = null, this.draggedAnnotation = null, this.resizingAnnotation = null, this.editingAnnotation = null, t.selectedAnnotationId) {
      const e = this.annotations.find((i) => i.getData().id === t.selectedAnnotationId);
      e && (e.updateData({ selected: !0 }), this.selectedAnnotation = e);
    }
    this.draw(), this.onStateChange?.();
  }
  // 初始化画布
  initCanvas() {
    const t = this.canvas.parentElement;
    if (!t) return;
    const e = t.clientWidth, i = t.clientHeight, o = window.devicePixelRatio || 1;
    this.canvas.width = Math.round(e * o), this.canvas.height = Math.round(i * o), this.canvas.style.width = e + "px", this.canvas.style.height = i + "px";
    const s = this.canvas.getContext("2d");
    s && s.scale(o, o), this.drawPendingState(), this.coordinateSystem.updateCanvasRect(this.canvas);
  }
  // 绘制等待状态（背景图加载前的中间状态）
  drawPendingState() {
    const t = this.canvas.getContext("2d");
    t && (t.save(), t.setTransform(1, 0, 0, 1, 0, 0), t.fillStyle = "rgba(0, 0, 0, 0.6)", t.fillRect(0, 0, this.canvas.width, this.canvas.height), t.restore());
  }
  // 加载预捕获的屏幕背景图像
  async loadScreenBackground() {
    if (!this.isLoadingBackground) {
      this.isLoadingBackground = !0;
      try {
        this.backgroundImage && (this.backgroundImage.onload = null, this.backgroundImage.onerror = null, this.backgroundImage = null, this.visualElementDetector = null), await this.loadFullBackgroundImage();
      } catch (t) {
        A.error("[截图] 加载屏幕背景失败", t), this.createFallbackBackground();
      } finally {
        this.isLoadingBackground = !1;
      }
    }
  }
  // 加载完整背景图（高质量PNG）
  async loadFullBackgroundImage() {
    let i = 0;
    for (; i < 5e3; )
      try {
        const o = await C("get_screenshot_background");
        if (o) {
          const s = new Image();
          await new Promise((a, r) => {
            const l = setTimeout(() => {
              s.onload = null, s.onerror = null, r(new Error("Image load timeout"));
            }, 5e3);
            s.onload = () => {
              clearTimeout(l), this.backgroundImage = s;
              const h = window.devicePixelRatio || 1;
              this.visualElementDetector = hi.fromImage(
                s,
                this.canvas.width / h,
                this.canvas.height / h
              ), this.lastPointerPosition && this.snappedWindow && this.scheduleUiElementDetection(
                this.lastPointerPosition,
                this.snappedWindow
              ), this.draw(), a();
            }, s.onerror = (h) => {
              clearTimeout(l), r(h);
            }, s.src = `data:${this.detectImageMime(o)};base64,${o}`;
          });
          return;
        }
      } catch (o) {
        if (o?.toString().includes("No screenshot background available") || o?.toString().includes("being captured")) {
          await new Promise((s) => setTimeout(s, 100)), i += 100;
          continue;
        }
        throw o;
      }
    this.createFallbackBackground();
  }
  detectImageMime(t) {
    return t.trim().startsWith("/9j/") ? "image/jpeg" : "image/png";
  }
  // 创建后备背景（当背景图加载失败时使用）
  createFallbackBackground() {
    try {
      const t = new Image();
      t.width = 1, t.height = 1;
      const e = document.createElement("canvas");
      e.width = 1, e.height = 1;
      const i = e.getContext("2d");
      i && (i.fillStyle = "rgba(0, 0, 0, 0.3)", i.fillRect(0, 0, 1, 1), t.src = e.toDataURL()), t.onload = () => {
        this.backgroundImage = t, this.draw();
      };
    } catch (t) {
      A.error("[截图] 创建后备背景失败", t);
    }
  }
  // 绘制背景图像（支持预览图和完整图）
  drawBackground() {
    const t = this.canvas.getContext("2d");
    t && this.backgroundImage && (t.save(), t.setTransform(1, 0, 0, 1, 0, 0), t.imageSmoothingEnabled = !1, t.drawImage(this.backgroundImage, 0, 0, this.canvas.width, this.canvas.height), t.restore());
  }
  // 加载所有窗口信息（使用预缓存数据 + 重试机制）
  async loadAllWindows() {
    try {
      let t = { x: 0, y: 0, scale: 1, isFullscreen: !1 }, e = [];
      const i = 10, o = 50;
      await new Promise((l) => setTimeout(l, 100));
      for (let l = 0; l < i; l++)
        try {
          const [h, u] = await Promise.all([
            C("get_cached_monitor_info"),
            C("get_cached_window_list")
          ]);
          t = {
            x: h.x,
            y: h.y,
            scale: h.scale,
            isFullscreen: !1
          }, e = u;
          break;
        } catch {
          if (l < i - 1) {
            await new Promise((d) => setTimeout(d, o));
            continue;
          }
          const u = await Promise.all([
            C("get_window_info"),
            C("get_all_windows")
          ]);
          t = u[0], e = u[1];
        }
      const s = t?.scale || 1, a = window.innerWidth, r = window.innerHeight;
      this.captureMonitor = {
        x: t?.x || 0,
        y: t?.y || 0,
        scale: s
      }, this.allWindows = e.filter((l) => this.isValidWindow(l)).map((l) => ({
        ...l,
        x: Math.round((l.x - this.captureMonitor.x) / s),
        y: Math.round((l.y - this.captureMonitor.y) / s),
        width: Math.round(l.width / s),
        height: Math.round(l.height / s)
      })).filter(
        (l) => l.x >= -l.width && l.y >= -l.height && l.x < a + l.width && l.y < r + l.height
      );
    } catch (t) {
      A.error("[截图] 加载窗口列表失败", t), this.allWindows = [];
    }
  }
  // 检测初始窗口吸附（在窗口打开时立即调用）
  async detectInitialWindowSnap() {
    try {
      let i = 0;
      for (; this.allWindows.length === 0 && i < 500; )
        await new Promise((r) => setTimeout(r, 50)), i += 50;
      if (this.allWindows.length === 0)
        return;
      let o;
      try {
        const r = await C("get_cached_monitor_info");
        o = {
          x: r.x,
          y: r.y,
          scale: r.scale
        };
      } catch {
        o = await C("get_window_info");
      }
      let s;
      try {
        const r = await C("get_mouse_position"), l = o?.scale || 1;
        s = {
          x: Math.round((r.x - o.x) / l),
          y: Math.round((r.y - o.y) / l)
        };
      } catch {
        s = {
          x: Math.round(this.canvas.width / (window.devicePixelRatio || 1) / 2),
          y: Math.round(this.canvas.height / (window.devicePixelRatio || 1) / 2)
        };
      }
      const a = this.detectNearbyWindow(s);
      this.lastPointerPosition = s, a ? (this.snappedWindow = a, this.showSnapPreview = !0, this.draw(), this.scheduleUiElementDetection(s, a)) : (this.showSnapPreview = !0, this.draw());
    } catch (t) {
      A.error("[截图] 初始窗口吸附检测失败", t);
    }
  }
  // 检查窗口是否有效
  isValidWindow(t) {
    if (!t.title || t.width < 100 || t.height < 100 || t.title.includes("screenshot") || t.title.includes("截图") || t.title.includes("Screenshot"))
      return !1;
    const e = [
      "Program Manager",
      "Desktop Window Manager",
      "Windows Security",
      "Task Manager",
      "Settings",
      "Microsoft Store",
      "Calculator",
      "Windows Input Experience",
      "Microsoft Text Input Application",
      "Windows Shell Experience Host",
      "Action Center",
      "Volume Control",
      "Network Connections",
      "Cortana",
      "Search",
      "Start",
      "Taskbar",
      "System Tray",
      "Notification Area",
      "Clock",
      "Volume",
      "Network",
      "Battery",
      "Power",
      "Language Bar",
      "Input Method Editor",
      "Windows PowerShell",
      "Command Prompt",
      "cmd.exe",
      "powershell.exe"
    ];
    for (const o of e)
      if (t.title === o || t.title.startsWith(o))
        return !1;
    return !(t.title.startsWith("NVIDIA") || t.title.startsWith("Intel") || t.title.startsWith("AMD") || t.title.startsWith("Realtek") || t.title.includes("Driver") || t.title.includes("Graphics") || t.title.includes("Background Task Host") || t.title.includes("Runtime Broker") || t.title.includes("Service Host") || t.title.includes("Windows Modules Installer") || t.title.includes("System Interrupts") || t.title.includes("Registry") || t.title.includes("dwm.exe") || t.title.includes("explorer.exe") || t.title.includes("winlogon.exe") || t.title.trim().replace(/[^\w\s\u4e00-\u9fa5]/g, "").length < 2);
  }
  detectNearbyWindow(t) {
    if (this.allWindows.length === 0) return null;
    const e = [];
    for (const i of this.allWindows) {
      if (t.x >= i.x && t.x <= i.x + i.width && t.y >= i.y && t.y <= i.y + i.height) {
        e.push({ window: i, distance: 0 });
        continue;
      }
      const s = Math.abs(t.x - i.x), a = Math.abs(t.x - (i.x + i.width)), r = Math.abs(t.y - i.y), l = Math.abs(t.y - (i.y + i.height)), h = Math.min(s, a, r, l);
      h <= this.snapThreshold && e.push({ window: i, distance: h });
    }
    return e.length === 0 ? null : e.reduce((i, o) => o.window.display_order < i.window.display_order ? o : o.window.display_order > i.window.display_order ? i : o.distance < i.distance ? o : o.distance > i.distance ? i : o.window.is_fullscreen && !i.window.is_fullscreen ? o : i).window;
  }
  getFullscreenCandidate() {
    const t = window.devicePixelRatio || 1;
    return {
      rect: {
        x: 0,
        y: 0,
        width: this.canvas.width / t,
        height: this.canvas.height / t
      },
      kind: "fullscreen"
    };
  }
  getActiveSelectionCandidate() {
    return this.snappedElement ? this.snappedElement : this.getFallbackSelectionCandidate();
  }
  getSelectableCandidate(t) {
    if (this.snappedElement) {
      const { rect: e } = this.snappedElement;
      if (t.x >= e.x && t.x <= e.x + e.width && t.y >= e.y && t.y <= e.y + e.height) return this.snappedElement;
    }
    return this.getFallbackSelectionCandidate();
  }
  getFallbackSelectionCandidate() {
    return this.snappedWindow ? {
      rect: {
        x: this.snappedWindow.x,
        y: this.snappedWindow.y,
        width: this.snappedWindow.width,
        height: this.snappedWindow.height
      },
      kind: "window"
    } : this.lastPointerPosition ? this.getFullscreenCandidate() : null;
  }
  scheduleUiElementDetection(t, e) {
    const i = ++this.smartDetectionSequence;
    this.pendingSmartDetection = {
      mousePos: { ...t },
      targetWindow: e,
      sequence: i
    }, this.smartDetectionTimer === null && (this.smartDetectionTimer = window.setTimeout(() => {
      this.smartDetectionTimer = null;
      const o = this.pendingSmartDetection;
      o && this.applyVisualElementCandidate(
        o.mousePos,
        o.targetWindow,
        o.sequence
      );
    }, 24)), this.accessibilityDetectionTimer !== null && window.clearTimeout(this.accessibilityDetectionTimer), this.accessibilityDetectionTimer = window.setTimeout(() => {
      this.accessibilityDetectionTimer = null;
      const o = this.pendingSmartDetection;
      this.pendingSmartDetection = null, o && this.detectUiElement(
        o.mousePos,
        o.targetWindow,
        o.sequence
      );
    }, 50);
  }
  async detectUiElement(t, e, i) {
    if (!e.handle) {
      this.finalizeVisualElementCandidate(t, e, i);
      return;
    }
    const o = this.captureMonitor.scale || 1, s = Math.round(this.captureMonitor.x + t.x * o), a = Math.round(this.captureMonitor.y + t.y * o);
    try {
      const r = await C("get_ui_element_at_point", {
        windowHandle: e.handle,
        x: s,
        y: a
      });
      if (i !== this.smartDetectionSequence || this.snappedWindow !== e)
        return;
      if (!r) {
        this.finalizeVisualElementCandidate(t, e, i);
        return;
      }
      const l = {
        x: Math.round((r.x - this.captureMonitor.x) / o),
        y: Math.round((r.y - this.captureMonitor.y) / o),
        width: Math.round(r.width / o),
        height: Math.round(r.height / o)
      }, h = l.x >= e.x - 2 && l.y >= e.y - 2 && l.x + l.width <= e.x + e.width + 2 && l.y + l.height <= e.y + e.height + 2, u = t.x >= l.x && t.x <= l.x + l.width && t.y >= l.y && t.y <= l.y + l.height;
      if (l.width < 8 || l.height < 8 || !h || !u) {
        this.finalizeVisualElementCandidate(t, e, i);
        return;
      } else
        this.updateElementCandidate(l, !0);
    } catch {
      this.finalizeVisualElementCandidate(t, e, i);
    }
  }
  applyVisualElementCandidate(t, e, i) {
    if (i !== this.smartDetectionSequence || this.snappedWindow !== e)
      return;
    const o = this.visualElementDetector?.detect(t, e) || null;
    this.updateElementCandidate(o, !1);
  }
  finalizeVisualElementCandidate(t, e, i) {
    if (i !== this.smartDetectionSequence || this.snappedWindow !== e)
      return;
    const o = this.visualElementDetector?.detect(t, e) || null;
    this.updateElementCandidate(o, !0);
  }
  updateElementCandidate(t, e) {
    const i = e ? this.elementCandidateStabilizer.finalize(t) : this.elementCandidateStabilizer.preview(t);
    this.snappedElement = i.rect ? { rect: i.rect, kind: "element" } : null, i.changed && this.draw();
  }
  cancelSmartDetection() {
    this.smartDetectionSequence += 1, this.smartDetectionTimer !== null && (window.clearTimeout(this.smartDetectionTimer), this.smartDetectionTimer = null), this.accessibilityDetectionTimer !== null && (window.clearTimeout(this.accessibilityDetectionTimer), this.accessibilityDetectionTimer = null), this.pendingSmartDetection = null;
  }
  // 绑定鼠标事件
  bindMouseEvents() {
    this.canvas.addEventListener("mousedown", this.mouseDownHandler), this.canvas.addEventListener("mousemove", this.mouseMoveHandler), this.canvas.addEventListener("mouseup", this.mouseUpHandler), this.canvas.addEventListener("dblclick", this.doubleClickHandler), window.addEventListener("keydown", this.keyDownHandler), window.addEventListener("keyup", this.keyUpHandler);
  }
  // 鼠标按下处理
  handleMouseDown(t) {
    t.preventDefault(), t.stopPropagation();
    const e = this.coordinateSystem.getCanvasPosition(t);
    this.lastPointerPosition = e;
    const i = this.eventHandler.getAnnotationAtPoint(e, this.annotations);
    if ((this.currentTool === m.Select || this.currentTool === m.Marker) && i?.getData().type === m.Marker) {
      this.clearSelection(), i.updateData({ selected: !0 }), this.selectedAnnotation = i, this.startTextInput(i.getData().points[0], i), this.draw(), this.onStateChange?.();
      return;
    }
    const o = this.eventHandler.getOperationType(
      e,
      this.currentTool,
      this.selectionRect,
      this.annotations
    );
    if (o !== z.None)
      switch (this.eventHandler.setCurrentOperation(o), this.eventHandler.startDrawing(e), o) {
        case z.Drawing:
          if (!this.selectionRect && this.currentTool === m.Select) {
            this.dragStartPosition = { ...e };
            const s = this.getSelectableCandidate(e);
            s ? this.pendingSnapCandidate = s : (this.selectionRect = {
              x: e.x,
              y: e.y,
              width: 0,
              height: 0
            }, this.onStateChange?.());
          }
          break;
        case z.DrawingRect:
        case z.DrawingEllipse:
        case z.DrawingLine:
        case z.DrawingArrow:
        case z.DrawingPen:
        case z.DrawingMosaic:
        case z.DrawingMarker:
          this.startAnnotation(e);
          break;
        case z.DrawingText:
          this.startTextInput(e), this.eventHandler.stopDrawing();
          break;
        case z.ColorPicking:
          this.handleColorPicking(e), this.eventHandler.stopDrawing();
          break;
        case z.Pinning:
          this.selectionRect && (this.createPinWindow(), this.eventHandler.stopDrawing());
          break;
        case z.EditingAnnotation:
          this.selectAnnotationAtPoint(e), this.selectedAnnotation && this.selectedAnnotation.getData().type === m.Text && this.startTextInput(this.selectedAnnotation.getData().points[0], this.selectedAnnotation);
          break;
        case z.MovingAnnotation:
          this.startAnnotationDrag(e);
          break;
        case z.ResizingAnnotationNW:
        case z.ResizingAnnotationSE:
          this.startAnnotationResize(e, o);
          break;
        case z.Moving:
        case z.ResizingNW:
        case z.ResizingNE:
        case z.ResizingSW:
        case z.ResizingSE:
        case z.ResizingN:
        case z.ResizingS:
        case z.ResizingW:
        case z.ResizingE:
          break;
      }
  }
  // 鼠标移动处理
  handleMouseMove(t) {
    const e = this.coordinateSystem.getCanvasPosition(t);
    this.lastPointerPosition = e;
    const i = this.eventHandler.getDrawingState();
    if (i.isDrawing)
      this.eventHandler.updateMousePosition(e), this.pendingSnapCandidate && this.dragStartPosition && !this.selectionRect && Ct(e, this.dragStartPosition) > this.dragThreshold && (this.selectionRect = {
        x: this.dragStartPosition.x,
        y: this.dragStartPosition.y,
        width: 0,
        height: 0
      }, this.pendingSnapCandidate = null, this.onStateChange?.()), this.currentAnnotation ? this.updateCurrentAnnotation(e) : this.draggedAnnotation ? this.updateAnnotationDrag(e) : this.resizingAnnotation ? this.updateAnnotationResize(e) : this.selectionRect && this.currentTool === m.Select && this.updateSelectionRect(e, i), this.draw(), this.onStateChange?.();
    else {
      if (this.currentTool === m.Select && !this.selectionRect) {
        const o = this.detectNearbyWindow(e);
        o !== this.snappedWindow && (this.cancelSmartDetection(), this.snappedWindow = o, this.snappedElement = null, this.elementCandidateStabilizer.reset(), this.showSnapPreview = !0, this.draw()), this.showSnapPreview || (this.showSnapPreview = !0, this.draw()), o && this.scheduleUiElementDetection(e, o);
      }
      this.updateHoverState(e), this.currentTool === m.ColorPicker && this.selectionRect && (this.coordinateSystem.isPointInRect(e, this.selectionRect) ? (this.colorPickerState.isVisible = !0, this.colorPickerState.mousePosition = e, this.draw(), this.throttledUpdateColorPreview(e)) : this.colorPickerState.isVisible && (this.colorPickerState.isVisible = !1, this.draw()));
    }
  }
  // 鼠标抬起处理
  handleMouseUp(t) {
    this.eventHandler.getDrawingState().isDrawing && (this.eventHandler.stopDrawing(), this.pendingSnapCandidate && !this.selectionRect && (this.selectionRect = { ...this.pendingSnapCandidate.rect }), this.pendingSnapCandidate = null, this.dragStartPosition = null, this.snappedWindow = null, this.snappedElement = null, this.elementCandidateStabilizer.reset(), this.showSnapPreview = !1, this.cancelSmartDetection(), this.finishAnnotation(), this.finishAnnotationDrag(), this.finishAnnotationResize(), this.selectionRect && (Math.abs(this.selectionRect.width) < 10 || Math.abs(this.selectionRect.height) < 10) ? this.selectionRect = null : this.selectionRect && (this.selectionRect.width < 0 && (this.selectionRect.x += this.selectionRect.width, this.selectionRect.width = Math.abs(this.selectionRect.width)), this.selectionRect.height < 0 && (this.selectionRect.y += this.selectionRect.height, this.selectionRect.height = Math.abs(this.selectionRect.height))), this.draw(), this.onStateChange?.());
  }
  // 双击处理
  handleDoubleClick(t) {
    const e = this.coordinateSystem.getCanvasPosition(t), i = this.eventHandler.getAnnotationAtPoint(e, this.annotations);
    (i?.getData().type === m.Text || i?.getData().type === m.Marker) && (this.clearSelection(), i.updateData({ selected: !0 }), this.selectedAnnotation = i, this.startTextInput(e, i));
  }
  // 键盘按下处理（内部）
  handleKeyDownInternal(t) {
    t.key === "Shift" && (this.isShiftPressed = !0);
  }
  // 键盘抬起处理
  handleKeyUp(t) {
    t.key === "Shift" && (this.isShiftPressed = !1);
  }
  // 更新选择框
  updateSelectionRect(t, e) {
    if (!this.selectionRect) return;
    const i = e.currentOperation, o = t.x - e.lastMousePos.x, s = t.y - e.lastMousePos.y;
    switch (i) {
      case z.Drawing:
        this.selectionRect.width = t.x - e.startPoint.x, this.selectionRect.height = t.y - e.startPoint.y;
        break;
      case z.Moving:
        this.selectionRect.x += o, this.selectionRect.y += s;
        break;
      case z.ResizingNW:
        this.selectionRect.x += o, this.selectionRect.y += s, this.selectionRect.width -= o, this.selectionRect.height -= s;
        break;
      case z.ResizingNE:
        this.selectionRect.y += s, this.selectionRect.width += o, this.selectionRect.height -= s;
        break;
      case z.ResizingSW:
        this.selectionRect.x += o, this.selectionRect.width -= o, this.selectionRect.height += s;
        break;
      case z.ResizingSE:
        this.selectionRect.width += o, this.selectionRect.height += s;
        break;
      case z.ResizingN:
        this.selectionRect.y += s, this.selectionRect.height -= s;
        break;
      case z.ResizingS:
        this.selectionRect.height += s;
        break;
      case z.ResizingW:
        this.selectionRect.x += o, this.selectionRect.width -= o;
        break;
      case z.ResizingE:
        this.selectionRect.width += o;
        break;
    }
    this.selectionRect.width < 10 && (this.selectionRect.width = 10), this.selectionRect.height < 10 && (this.selectionRect.height = 10);
  }
  // 选择指定位置的标注
  selectAnnotationAtPoint(t) {
    const e = this.eventHandler.getAnnotationAtPoint(t, this.annotations);
    e && e !== this.selectedAnnotation && (this.selectedAnnotation && this.selectedAnnotation.updateData({ selected: !1 }), this.selectedAnnotation = e, this.selectedAnnotation.updateData({ selected: !0 }), this.selectedAnnotation.getData().type === m.Text && this.startTextInput(t, this.selectedAnnotation), this.draw(), this.onStateChange?.());
  }
  // 开始标注拖拽
  startAnnotationDrag(t) {
    const e = this.eventHandler.getAnnotationAtPoint(t, this.annotations);
    e && (this.draggedAnnotation = e, this.dragStartPoint = t, this.pendingDragSnapshot = this.createHistorySnapshot(), this.selectedAnnotation !== e && (this.selectedAnnotation && this.selectedAnnotation.updateData({ selected: !1 }), this.selectedAnnotation = e, this.selectedAnnotation.updateData({ selected: !0 })));
  }
  // 更新标注拖拽
  updateAnnotationDrag(t) {
    if (!this.draggedAnnotation || !this.dragStartPoint) return;
    const e = t.x - this.dragStartPoint.x, i = t.y - this.dragStartPoint.y;
    this.draggedAnnotation.move(e, i), this.constrainAnnotationToBounds(this.draggedAnnotation), this.dragStartPoint = t;
  }
  // 完成标注拖拽
  finishAnnotationDrag() {
    if (this.draggedAnnotation) {
      if (this.pendingDragSnapshot) {
        const t = this.draggedAnnotation.getData(), e = this.pendingDragSnapshot.annotations.find((o) => o.id === t.id);
        (e ? JSON.stringify(e.points) !== JSON.stringify(t.points) : !1) && (this.annotationUndoStack.push(this.pendingDragSnapshot), this.annotationRedoStack = []), this.pendingDragSnapshot = null;
      }
      this.draggedAnnotation = null, this.dragStartPoint = null;
    }
  }
  // 开始标注缩放
  startAnnotationResize(t, e) {
    const i = this.eventHandler.getAnnotationAtPoint(t, this.annotations);
    if (i) {
      this.resizingAnnotation = i, this.resizeOperation = e, this.pendingResizeSnapshot = this.createHistorySnapshot();
      const o = i.getBounds();
      o && (this.resizeStartBounds = { ...o }), this.selectedAnnotation !== i && (this.selectedAnnotation && this.selectedAnnotation.updateData({ selected: !1 }), this.selectedAnnotation = i, this.selectedAnnotation.updateData({ selected: !0 }));
    }
  }
  // 更新标注缩放
  updateAnnotationResize(t) {
    if (!this.resizingAnnotation || !this.resizeStartBounds || !this.resizeOperation) return;
    const e = this.resizingAnnotation.getData();
    if (e.points.length < 2) return;
    const i = e.points[0];
    switch (this.resizeOperation) {
      case z.ResizingAnnotationNW:
        this.resizingAnnotation.updateData({
          points: [t, e.points[1]]
        });
        break;
      case z.ResizingAnnotationSE:
        this.resizingAnnotation.updateData({
          points: [i, t]
        });
        break;
    }
    this.constrainAnnotationToBounds(this.resizingAnnotation);
  }
  // 完成标注缩放
  finishAnnotationResize() {
    if (this.resizingAnnotation) {
      if (this.pendingResizeSnapshot) {
        const t = this.resizingAnnotation.getData(), e = this.pendingResizeSnapshot.annotations.find((o) => o.id === t.id);
        (e ? JSON.stringify(e.points) !== JSON.stringify(t.points) : !1) && (this.annotationUndoStack.push(this.pendingResizeSnapshot), this.annotationRedoStack = []), this.pendingResizeSnapshot = null;
      }
      this.resizingAnnotation = null, this.resizeStartBounds = null, this.resizeOperation = null;
    }
  }
  // 边界约束：确保标注不超出选择框
  constrainAnnotationToBounds(t) {
    if (!this.selectionRect || !t.getBounds()) return;
    const i = t.getData();
    if (i.points.length < 1) return;
    const o = this.selectionRect;
    let s = !1, a = [...i.points];
    if (i.points.length >= 2)
      for (let r = 0; r < a.length; r++) {
        const l = a[r];
        l.x < o.x ? (a[r] = { ...l, x: o.x }, s = !0) : l.x > o.x + o.width && (a[r] = { ...l, x: o.x + o.width }, s = !0), l.y < o.y ? (a[r] = { ...l, y: o.y }, s = !0) : l.y > o.y + o.height && (a[r] = { ...l, y: o.y + o.height }, s = !0);
      }
    if (i.points.length > 2)
      for (let r = 0; r < a.length; r++) {
        const l = a[r];
        (l.x < o.x || l.x > o.x + o.width || l.y < o.y || l.y > o.y + o.height) && (a.splice(r, 1), r--, s = !0);
      }
    s && t.updateData({ points: a });
  }
  // 更新悬停状态
  updateHoverState(t) {
    if (this.currentTool !== m.Select) {
      this.updateToolCursor();
      return;
    }
    const e = this.eventHandler.getAnnotationAtPoint(t, this.annotations);
    e !== this.hoveredAnnotation && (this.hoveredAnnotation && this.hoveredAnnotation.updateData({ hovered: !1 }), this.hoveredAnnotation = e && e.getData().type !== m.Mosaic ? e : null, this.hoveredAnnotation && this.hoveredAnnotation.updateData({ hovered: !0 }), this.draw()), this.updateCursorForPosition(t);
  }
  // 更新鼠标样式
  updateCursorForPosition(t) {
    if (this.currentTool !== m.Select) {
      this.updateToolCursor();
      return;
    }
    if (!this.selectionRect) {
      this.updateCursor("crosshair");
      return;
    }
    const e = this.eventHandler.getOperationType(
      t,
      this.currentTool,
      this.selectionRect,
      this.annotations
    ), o = {
      [z.Moving]: "move",
      [z.ResizingNW]: "nw-resize",
      [z.ResizingNE]: "ne-resize",
      [z.ResizingSW]: "sw-resize",
      [z.ResizingSE]: "se-resize",
      [z.ResizingN]: "n-resize",
      [z.ResizingS]: "s-resize",
      [z.ResizingW]: "w-resize",
      [z.ResizingE]: "e-resize",
      [z.EditingAnnotation]: "pointer",
      [z.MovingAnnotation]: "move",
      [z.ResizingAnnotationNW]: "nw-resize",
      [z.ResizingAnnotationSE]: "se-resize",
      [z.Drawing]: "crosshair"
    }[e] || "default";
    this.updateCursor(o);
  }
  // 更新画布cursor样式
  updateCursor(t) {
    this.canvas.style.cursor !== t && (this.canvas.style.cursor = t);
  }
  // 根据当前工具更新光标样式
  updateToolCursor() {
    switch (this.currentTool) {
      case m.Pen:
        this.updateCursor(this.createPenCursor(this.currentStyle.color));
        break;
      case m.Mosaic:
        this.updateCursor(this.createCircleCursor(Math.max(this.mosaicSize * 3, 24), "#666"));
        break;
      case m.ColorPicker:
        this.updateCursor(this.createColorPickerCursor());
        break;
      case m.Rectangle:
      case m.Ellipse:
      case m.Line:
      case m.Arrow:
      case m.Text:
      case m.Marker:
        this.updateCursor("crosshair");
        break;
      default:
        this.updateCursor("default");
    }
  }
  // 创建圆形光标（用于画笔和马赛克）
  createCircleCursor(t, e = "#666") {
    const i = Math.max(t / 2, 2), o = i * 2 + 4, s = o / 2, a = `
      <svg width="${o}" height="${o}" xmlns="http://www.w3.org/2000/svg">
        <!-- 外圈：显示工具大小 -->
        <circle cx="${s}" cy="${s}" r="${i}"
                fill="none" stroke="${e}" stroke-width="1.5" opacity="0.8"/>
        <!-- 中心点：精确定位 -->
        <circle cx="${s}" cy="${s}" r="1" fill="${e}" opacity="0.9"/>
      </svg>
    `;
    return `url('data:image/svg+xml;utf8,${encodeURIComponent(a)}') ${s} ${s}, crosshair`;
  }
  createPenCursor(t = "#ff4444") {
    const e = `
      <svg width="24" height="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path d="M4 20l4.8-1.1L20.2 7.5a2.2 2.2 0 0 0 0-3.1l-.6-.6a2.2 2.2 0 0 0-3.1 0L5.1 15.2 4 20z"
              fill="white" stroke="#111827" stroke-width="1.7" stroke-linejoin="round"/>
        <path d="M14.8 5.5l3.7 3.7" stroke="#111827" stroke-width="1.7" stroke-linecap="round"/>
        <path d="M5.1 15.2L8.8 18.9" stroke="${t}" stroke-width="2" stroke-linecap="round"/>
      </svg>
    `;
    return `url('data:image/svg+xml;utf8,${encodeURIComponent(e)}') 4 20, crosshair`;
  }
  createColorPickerCursor() {
    return `url('data:image/svg+xml;utf8,${encodeURIComponent(`
      <svg width="24" height="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path d="M15.5 3.8a2.4 2.4 0 0 1 3.4 0l1.3 1.3a2.4 2.4 0 0 1 0 3.4l-9.4 9.4H7.4v-3.4l9.4-9.4z"
              fill="white" stroke="#111827" stroke-width="1.7" stroke-linejoin="round"/>
        <path d="M13.7 6.3l4 4" stroke="#111827" stroke-width="1.7" stroke-linecap="round"/>
        <path d="M4 20h6" stroke="#4f46e5" stroke-width="2" stroke-linecap="round"/>
      </svg>
    `)}') 4 20, crosshair`;
  }
  // 绘制所有内容
  draw() {
    if (this.drawingEngine.clear(), this.backgroundImage ? this.drawBackground() : this.drawPendingState(), this.selectionRect && this.drawingEngine.drawMask(
      this.selectionRect,
      this.selectionCornerRadius
    ), this.showSnapPreview && this.getActiveSelectionCandidate() && !this.selectionRect && this.drawSnapPreview(), this.annotations.length > 0) {
      const t = this.editingAnnotation?.getData().type === m.Text ? this.annotations.filter((e) => e.getData().id !== this.editingAnnotation.getData().id) : this.annotations;
      this.drawingEngine.drawAnnotations(t, this.selectionRect || void 0);
    }
    this.currentAnnotation && this.drawingEngine.drawCurrentAnnotation(this.currentAnnotation, this.selectionRect || void 0), this.selectionRect && this.drawingEngine.drawSelectionBox(
      this.selectionRect,
      this.showGuides,
      this.selectionCornerRadius
    ), this.colorPickerState.isActive && this.selectionRect && this.drawingEngine.drawColorPicker(this.colorPickerState, this.selectionRect), this.translationOverlay.isVisible && this.selectionRect && this.drawTranslationOverlay();
  }
  // 绘制翻译覆盖层（智能排版）
  drawTranslationOverlay() {
    if (!this.selectionRect) return;
    const t = this.canvas.getContext("2d");
    if (!t) return;
    t.save();
    const { x: e, y: i, width: o, height: s } = this.selectionRect, a = 8;
    if (this.translationOverlay.isLoading) {
      const f = e + o / 2, v = i + s / 2;
      t.fillStyle = "rgba(0, 0, 0, 0.7)", t.fillRect(e, i, o, s), t.font = '16px "Microsoft YaHei", sans-serif', t.fillStyle = "#ffffff", t.textAlign = "center", t.textBaseline = "middle";
      let P = "正在识别翻译...";
      this.translationOverlay.engine === "local-ai" && (this.translationOverlay.loadingStage === "starting-service" ? P = "正在启动 AI 模型服务..." : P = "正在由 AI 识图翻译..."), t.fillText(P, f, v), t.restore();
      return;
    }
    if (this.translationOverlay.errorMessage) {
      const f = e + o / 2, v = i + s / 2;
      t.fillStyle = "rgba(0, 0, 0, 0.8)", t.fillRect(e, i, o, s), t.font = '16px "Microsoft YaHei", sans-serif', t.fillStyle = "#ff6b6b", t.textAlign = "center", t.textBaseline = "middle", t.fillText(this.translationOverlay.errorMessage, f, v), t.restore();
      return;
    }
    if (this.translationOverlay.blocks.length === 0) {
      t.restore();
      return;
    }
    const r = { x: e, y: i, width: o, height: s }, l = this.sampleRegionColor(r), h = l.brightness < 128;
    let u, d;
    if (h) {
      const f = Math.max(0, Math.round(l.r * 0.1)), v = Math.max(0, Math.round(l.g * 0.1)), P = Math.max(0, Math.round(l.b * 0.1));
      u = `rgba(${f}, ${v}, ${P}, 0.95)`, d = "rgba(255, 255, 255, 0.9)";
    } else {
      const f = Math.min(255, Math.round(l.r + (255 - l.r) * 0.95)), v = Math.min(255, Math.round(l.g + (255 - l.g) * 0.95)), P = Math.min(255, Math.round(l.b + (255 - l.b) * 0.95));
      u = `rgba(${f}, ${v}, ${P}, 0.95)`, d = "rgba(0, 0, 0, 0.85)";
    }
    t.fillStyle = u, t.fillRect(e, i, o, s), t.fillStyle = d, t.textAlign = "left", t.textBaseline = "top";
    const x = this.translationOverlay.paragraphBlocks?.length ? this.translationOverlay.paragraphBlocks : this.translationOverlay.blocks.map((f) => ({
      text: f.text,
      translatedText: f.translatedText,
      blocks: [f],
      bbox: {
        x: f.x,
        y: f.y,
        width: f.width,
        height: f.height
      },
      isCodeBlock: f.isCodeBlock,
      isStructuredBlock: !1,
      fontSize: f.fontSize,
      lineHeight: f.lineHeight,
      angle: f.angle
    })), w = x.filter((f) => f.isStructuredBlock), S = x.filter((f) => !f.isStructuredBlock);
    S.length > 0 && this.drawFlowedTranslationBlocks(t, S, e, i, a, o, s);
    for (const f of w)
      this.drawStructuredTranslationBlock(t, f, e, i, a, o, s);
    t.restore();
  }
  drawFlowedTranslationBlocks(t, e, i, o, s, a, r) {
    const l = [...e].filter((T) => (T.translatedText || T.text).trim()).sort((T, U) => {
      const Z = T.bbox.y - U.bbox.y;
      return Math.abs(Z) > 4 ? Z : T.bbox.x - U.bbox.x;
    });
    if (l.length === 0)
      return;
    const h = Math.max(24, r - s * 2), u = s, d = (T, U, Z) => l.map((X) => {
      const j = (X.translatedText || X.text).trim(), F = Math.max(12, Math.min(X.fontSize || 16, 48)), tt = Math.max(8, Math.round(F * T)), q = X.isCodeBlock ? '"Consolas", "Monaco", monospace' : '"Microsoft YaHei", "PingFang SC", "Hiragino Sans GB", sans-serif', J = Math.max(
        s,
        Math.min(X.bbox.x + s, a * 0.38)
      ), et = U ? s : J, st = Math.max(48, a - et - u), yt = X.lineHeight || tt * 1.35, it = Math.max(
        tt * (Z ? 1.04 : 1.14),
        Math.min(yt * T, tt * (Z ? 1.18 : 1.42))
      );
      return t.font = `${tt}px ${q}`, {
        text: j,
        fontSize: tt,
        fontFamily: q,
        lineHeight: it,
        paragraphGap: Z ? Math.max(1, it * 0.16) : Math.max(3, it * 0.35),
        x: i + et,
        lines: this.wrapTextToLines(t, j, st)
      };
    }), x = (T) => T.reduce((U, Z, X) => {
      const j = X === T.length - 1 ? 0 : Z.paragraphGap;
      return U + Z.lines.length * Z.lineHeight + j;
    }, 0);
    let w = d(1, !1, !1), S = x(w);
    if (S > h) {
      const T = Math.max(0.56, h / S);
      w = d(T, !1, !1), S = x(w);
    }
    if (S > h && (w = d(1, !0, !1), S = x(w)), S > h) {
      const T = Math.max(0.38, h / S * 0.96);
      w = d(T, !0, !0), S = x(w);
    }
    if (S > h) {
      const T = Math.max(0.3, h / S * 0.94);
      w = d(T, !0, !0), S = x(w);
    }
    const f = Math.min(...l.map((T) => T.bbox.y)), v = o + Math.max(s, Math.min(f, r - s)), P = o + r - s;
    let N = v + S > P ? o + s : v;
    for (const T of w) {
      t.font = `${T.fontSize}px ${T.fontFamily}`;
      for (const U of T.lines)
        t.fillText(U, T.x, N), N += T.lineHeight;
      N += T.paragraphGap;
    }
  }
  drawStructuredTranslationBlock(t, e, i, o, s, a, r) {
    const l = [...e.blocks].sort((d, x) => d.x - x.x), h = Math.max(12, Math.min(e.fontSize || 14, 32)), u = e.lineHeight || h * 1.35;
    t.font = `${h}px "Consolas", "Monaco", monospace`;
    for (const d of l) {
      const x = d.translatedText || d.text;
      if (!x.trim()) continue;
      const w = i + d.x + Math.min(4, s), S = o + d.y, f = l.find((T) => T.x > d.x), v = f ? Math.max(d.width, f.x - d.x - 8) : Math.max(d.width, a - d.x - s), P = this.wrapTextToLines(t, x.trim(), v);
      let N = S;
      for (const T of P) {
        if (N + h > o + r) break;
        t.fillText(T, w, N), N += u;
      }
    }
  }
  /**
   * 将文字按宽度换行，返回行数组
   */
  wrapTextToLines(t, e, i) {
    const o = e.replace(/\s+/g, " ").trim();
    if (!o)
      return [];
    const s = [], a = /\s/.test(o) ? o.split(/(\s+)/).filter((h) => h.length > 0) : Array.from(o);
    let r = "";
    const l = (h) => {
      let u = "";
      for (const d of Array.from(h)) {
        const x = u + d;
        t.measureText(x).width > i && u !== "" ? (s.push(u), u = d) : u = x;
      }
      r = u;
    };
    for (const h of a) {
      const u = /^\s+$/.test(h), d = u ? " " : h, x = r + d;
      if (t.measureText(x).width <= i) {
        r = x;
        continue;
      }
      r.trim() && (s.push(r.trimEnd()), r = ""), !u && (t.measureText(d).width > i ? l(d) : r = d);
    }
    return r.trim() && s.push(r.trimEnd()), s;
  }
  /**
   * 从背景图像采样指定区域的平均颜色
   * @param rect 采样区域（相对于canvas的坐标）
   * @param sampleSize 采样点数量（默认16）
   * @returns 采样得到的颜色信息，包含RGB值和亮度值
   */
  sampleRegionColor(t, e = 16) {
    const i = { r: 255, g: 255, b: 255, brightness: 255 };
    if (!this.backgroundImage)
      return i;
    const o = window.devicePixelRatio || 1, s = Math.round(t.width * o), a = Math.round(t.height * o), r = this.canvasPool.acquire(s, a), l = r.getContext("2d");
    if (!l)
      return this.canvasPool.release(r), i;
    const h = this.backgroundImage.width, u = this.backgroundImage.height, d = this.canvas.width / o, x = this.canvas.height / o, w = h / d, S = u / x, f = t.x * w, v = t.y * S, P = t.width * w, N = t.height * S;
    try {
      l.drawImage(
        this.backgroundImage,
        f,
        v,
        P,
        N,
        0,
        0,
        s,
        a
      );
    } catch (G) {
      return A.error("[截图] 采样区域绘制失败", G), this.canvasPool.release(r), i;
    }
    let T;
    try {
      T = l.getImageData(0, 0, s, a);
    } catch (G) {
      return A.error("[截图] 获取像素数据失败", G), this.canvasPool.release(r), i;
    }
    const U = T.data, Z = Math.ceil(Math.sqrt(e)), X = s / (Z + 1), j = a / (Z + 1);
    let F = 0, tt = 0, q = 0, J = 0;
    for (let G = 1; G <= Z; G++)
      for (let ot = 1; ot <= Z && !(J >= e); ot++) {
        const pt = Math.floor(ot * X), kt = Math.floor(G * j);
        if (pt >= 0 && pt < s && kt >= 0 && kt < a) {
          const ht = (kt * s + pt) * 4;
          ht >= 0 && ht + 2 < U.length && (F += U[ht], tt += U[ht + 1], q += U[ht + 2], J++);
        }
      }
    if (this.canvasPool.release(r), J === 0)
      return i;
    const et = Math.round(F / J), st = Math.round(tt / J), yt = Math.round(q / J), it = this.getBrightness(et, st, yt);
    return {
      r: et,
      g: st,
      b: yt,
      brightness: it
    };
  }
  /**
   * 计算颜色的亮度值
   * 使用标准公式: brightness = 0.299*R + 0.587*G + 0.114*B
   * @param r 红色分量 (0-255)
   * @param g 绿色分量 (0-255)
   * @param b 蓝色分量 (0-255)
   * @returns 亮度值 (0-255)
   */
  getBrightness(t, e, i) {
    const o = Math.max(0, Math.min(255, t)), s = Math.max(0, Math.min(255, e)), a = Math.max(0, Math.min(255, i));
    return Math.round(0.299 * o + 0.587 * s + 0.114 * a);
  }
  /**
   * 根据采样颜色计算覆盖层样式
   * 深色背景（亮度 < 128）：使用深色半透明背景 + 浅色文字
   * 浅色背景（亮度 >= 128）：使用浅色半透明背景 + 深色文字
   * @param sampledColor 采样得到的背景颜色
   * @returns 覆盖层样式
   */
  calculateOverlayStyle(t) {
    const { brightness: e } = t, i = e < 128, o = e / 255, a = 0.85 + Math.abs(o - 0.5) * 2 * 0.1;
    let r, l;
    if (i) {
      const h = Math.max(0, Math.round(t.r * 0.2)), u = Math.max(0, Math.round(t.g * 0.2)), d = Math.max(0, Math.round(t.b * 0.2));
      r = `rgba(${h}, ${u}, ${d}, ${a})`, l = "rgba(255, 255, 255, 0.95)";
    } else {
      const h = Math.min(255, Math.round(t.r + (255 - t.r) * 0.8)), u = Math.min(255, Math.round(t.g + (255 - t.g) * 0.8)), d = Math.min(255, Math.round(t.b + (255 - t.b) * 0.8));
      r = `rgba(${h}, ${u}, ${d}, ${a})`, l = "rgba(0, 0, 0, 0.9)";
    }
    return {
      backgroundColor: r,
      textColor: l,
      borderRadius: 3,
      // 轻微圆角（2-4px范围内）
      padding: 4
      // 内边距
    };
  }
  /**
   * 检测指定区域是否为纯色（颜色方差小于阈值）
   * 通过计算采样点的颜色方差来判断区域是否为纯色
   * @param rect 检测区域（相对于canvas的坐标）
   * @param threshold 方差阈值，默认100，方差小于此值认为是纯色
   * @param sampleSize 采样点数量，默认16
   * @returns 是否为纯色区域
   */
  isUniformColor(t, e = 100, i = 16) {
    if (!this.backgroundImage)
      return !1;
    const o = window.devicePixelRatio || 1, s = Math.round(t.width * o), a = Math.round(t.height * o), r = this.canvasPool.acquire(s, a), l = r.getContext("2d");
    if (!l)
      return this.canvasPool.release(r), !1;
    const h = this.backgroundImage.width, u = this.backgroundImage.height, d = this.canvas.width / o, x = this.canvas.height / o, w = h / d, S = u / x, f = t.x * w, v = t.y * S, P = t.width * w, N = t.height * S;
    try {
      l.drawImage(
        this.backgroundImage,
        f,
        v,
        P,
        N,
        0,
        0,
        s,
        a
      );
    } catch (G) {
      return A.error("[截图] isUniformColor: 采样区域绘制失败", G), this.canvasPool.release(r), !1;
    }
    let T;
    try {
      T = l.getImageData(0, 0, s, a);
    } catch (G) {
      return A.error("[截图] isUniformColor: 获取像素数据失败", G), this.canvasPool.release(r), !1;
    }
    const U = T.data, Z = Math.ceil(Math.sqrt(i)), X = s / (Z + 1), j = a / (Z + 1), F = [];
    for (let G = 1; G <= Z; G++)
      for (let ot = 1; ot <= Z && !(F.length >= i); ot++) {
        const pt = Math.floor(ot * X), kt = Math.floor(G * j);
        if (pt >= 0 && pt < s && kt >= 0 && kt < a) {
          const ht = (kt * s + pt) * 4;
          ht >= 0 && ht + 2 < U.length && F.push({
            r: U[ht],
            g: U[ht + 1],
            b: U[ht + 2]
          });
        }
      }
    if (this.canvasPool.release(r), F.length < 2)
      return !1;
    const tt = F.reduce((G, ot) => G + ot.r, 0) / F.length, q = F.reduce((G, ot) => G + ot.g, 0) / F.length, J = F.reduce((G, ot) => G + ot.b, 0) / F.length, et = F.reduce((G, ot) => G + Math.pow(ot.r - tt, 2), 0) / F.length, st = F.reduce((G, ot) => G + Math.pow(ot.g - q, 2), 0) / F.length, yt = F.reduce((G, ot) => G + Math.pow(ot.b - J, 2), 0) / F.length;
    return (et + st + yt) / 3 < e;
  }
  /**
   * 根据OCR块高度估算合适的字体大小
   * 基础公式: fontSize = blockHeight * 0.8
   * 边界约束: fontSize = clamp(fontSize, 12, blockHeight * 0.85)
   * @param blockHeight OCR块的高度
   * @returns 估算的字体大小
   */
  estimateFontSize(t) {
    if (t <= 0)
      return 12;
    const e = t * 0.8, i = t * 0.85, s = Math.max(12, Math.min(e, i));
    return Math.round(s);
  }
  /**
   * 根据文字内容和块宽度调整字体大小
   * 测量文字宽度，如果超出块宽度则缩小字体
   * 最小字体不低于12px
   * @param text 文字内容
   * @param blockWidth 块宽度
   * @param initialFontSize 初始字体大小
   * @param ctx Canvas上下文（用于测量文字宽度）
   * @returns 调整后的字体大小
   */
  fitTextToWidth(t, e, i, o) {
    if (!t || t.length === 0)
      return i;
    if (e <= 0 || i <= 12)
      return 12;
    const r = e - 4 * 2;
    if (r <= 0)
      return 12;
    let l = i;
    const h = o.font;
    for (; l > 12 && (o.font = `${l}px sans-serif`, !(o.measureText(t).width <= r)); )
      l -= 1;
    return o.font = h, Math.max(l, 12);
  }
  // 绘制窗口吸附预览
  drawSnapPreview() {
    const t = this.getActiveSelectionCandidate();
    if (!t) return;
    const { rect: e } = t, i = this.canvas.getContext("2d");
    i && (i.save(), i.strokeStyle = "#00a8ff", i.lineWidth = 2, i.setLineDash([5, 5]), i.fillStyle = "rgba(0, 168, 255, 0.1)", i.fillRect(
      e.x,
      e.y,
      e.width,
      e.height
    ), i.strokeRect(
      e.x,
      e.y,
      e.width,
      e.height
    ), i.restore());
  }
  // 设置工具
  setTool(t) {
    this.currentTool = t, this.clearSelection(), this.showGuides = t === m.Select, this.colorPickerState.isActive = t === m.ColorPicker, this.colorPickerState.isActive || (this.colorPickerState.isVisible = !1, this.colorPickerState.colorInfo = void 0), t !== m.Translate && this.translationOverlay.isVisible && this.clearTranslationOverlay(), t !== m.Select && this.hoveredAnnotation && (this.hoveredAnnotation.updateData({ hovered: !1 }), this.hoveredAnnotation = null), this.snappedWindow = null, this.snappedElement = null, this.elementCandidateStabilizer.reset(), this.showSnapPreview = !1, this.pendingSnapCandidate = null, this.cancelSmartDetection(), this.dragStartPosition = null, t !== m.Select && this.updateToolCursor(), this.draw(), this.onStateChange?.();
  }
  // 执行翻译（供外部调用）
  executeTranslation() {
    this.currentTool === m.Translate && this.selectionRect && (this.translationOverlay.isLoading = !0, this.translationOverlay.isVisible = !0, this.draw(), this.onStateChange?.(), this.performOcrTranslation());
  }
  // 开始创建标注
  startAnnotation(t) {
    if (an.isDrawingTool(this.currentTool)) {
      if (this.currentTool === m.Text) {
        this.startTextInput(t);
        return;
      }
      this.currentAnnotation = an.createAnnotation(
        this.currentTool,
        t,
        this.currentStyle,
        {
          fontSize: this.textSize,
          markerNumber: this.currentTool === m.Marker ? this.getNextMarkerNumber() : void 0,
          mosaicSize: this.mosaicSize
        }
      );
    }
  }
  getNextMarkerNumber() {
    return this.annotations.reduce((t, e) => e.getData().type !== m.Marker ? t : Math.max(t, e.getData().markerNumber || 0), 0) + 1;
  }
  // 更新当前标注
  updateCurrentAnnotation(t) {
    if (!this.currentAnnotation)
      return;
    const e = this.currentAnnotation.getData();
    switch (e.type) {
      case m.Rectangle:
      case m.Ellipse:
      case m.Line:
      case m.Arrow:
        t = Ma(
          e.type,
          e.points[0],
          t,
          this.isShiftPressed
        ), e.points.length === 1 ? this.currentAnnotation.addPoint(t) : this.currentAnnotation.updateLastPoint(t);
        break;
      case m.Pen:
        this.currentAnnotation.addPoint(t);
        break;
      case m.Mosaic:
        this.currentAnnotation.addPoint(t);
        break;
    }
  }
  // 完成标注创建
  finishAnnotation() {
    if (this.currentAnnotation) {
      const t = this.currentAnnotation.getData();
      t.type === m.Pen && this.isShiftPressed && t.points.length >= 3 && this.smartCorrectPenAnnotation(), this.currentAnnotation.isValid() && (this.pushAnnotationHistory(), this.annotations.push(this.currentAnnotation), this.onStateChange?.());
    }
    this.currentAnnotation = null;
  }
  // 智能识别并矫正画笔标注
  smartCorrectPenAnnotation() {
    if (!this.currentAnnotation) return;
    const e = this.currentAnnotation.getData().points;
    if (e.length < 3) return;
    let i = e[0].x, o = e[0].x, s = e[0].y, a = e[0].y;
    e.forEach((w) => {
      i = Math.min(i, w.x), o = Math.max(o, w.x), s = Math.min(s, w.y), a = Math.max(a, w.y);
    });
    const r = o - i, l = a - s;
    let h = 0;
    for (let w = 1; w < e.length; w++)
      h += Ct(e[w - 1], e[w]);
    const d = Ct(e[0], e[e.length - 1]) / h, x = Math.max(r, l) / Math.max(Math.min(r, l), 1);
    if (d > 0.85 || x > 5) {
      const w = e[0], S = e[e.length - 1];
      this.currentAnnotation.updateData({ points: [w, S] });
      return;
    }
  }
  // 撤销最后一个操作（标注或翻译）
  undoAnnotation() {
    if (this.translationOverlay.isVisible && this.translationOverlay.blocks.length > 0) {
      this.clearTranslationOverlay();
      return;
    }
    if (this.annotationUndoStack.length === 0)
      return;
    this.annotationRedoStack.push(this.createHistorySnapshot());
    const t = this.annotationUndoStack.pop();
    t && this.restoreHistorySnapshot(t);
  }
  // 恢复最后一次撤销的操作
  redoAnnotation() {
    if (this.annotationRedoStack.length === 0)
      return;
    this.annotationUndoStack.push(this.createHistorySnapshot());
    const t = this.annotationRedoStack.pop();
    t && this.restoreHistorySnapshot(t);
  }
  // 删除选中的标注
  deleteSelectedAnnotation() {
    if (this.selectedAnnotation) {
      const t = this.annotations.findIndex((e) => e.getData().id === this.selectedAnnotation.getData().id);
      t !== -1 && (this.pushAnnotationHistory(), this.annotations.splice(t, 1), this.selectedAnnotation = null, this.draw(), this.onStateChange?.());
    }
  }
  // 清除所有选中状态
  clearSelection() {
    this.annotations.forEach((t) => {
      t.updateData({ selected: !1, hovered: !1 });
    }), this.selectedAnnotation = null, this.hoveredAnnotation = null;
  }
  // 创建文字标注
  createTextAnnotation(t, e) {
    if (!e.trim()) return;
    const i = an.createAnnotation(
      m.Text,
      t,
      this.currentStyle,
      {
        text: e.trim(),
        fontSize: this.textSize
      }
    );
    i && i.isValid() && (this.pushAnnotationHistory(), this.annotations.push(i), this.draw(), this.onStateChange?.());
  }
  // 开始文字输入
  startTextInput(t, e) {
    this.onTextInputRequest?.(t, e);
  }
  // 截图并处理标注
  async processScreenshot(t) {
    if (!this.selectionRect)
      throw new Error("没有选择区域");
    try {
      const { x: e, y: i, width: o, height: s } = this.selectionRect, r = (await C("get_window_info"))?.scale || 1, l = await this.cropFromBackground(e, i, o, s);
      if (!l?.image)
        throw new Error("无法从背景图像裁剪选区");
      const h = await this.renderWithAnnotations(l, r, t);
      t === "copy" ? await C("copy_to_clipboard", { image: h }) : await C("save_screenshot_to_file", { image: h });
    } catch (e) {
      const i = t === "save" ? "保存" : "复制";
      throw A.error(`[截图] ${i}截图失败`, e), new Error(`${i}截图失败: ${e?.message || e?.toString() || "未知错误"}`);
    }
  }
  // 从背景图像裁剪指定区域
  async cropFromBackground(t, e, i, o, s = {}) {
    return new Promise(async (a, r) => {
      const l = setTimeout(() => {
        r(new Error("裁剪背景图像超时"));
      }, 1e4);
      try {
        if (!this.backgroundImage) {
          let bt = 0;
          for (; !this.backgroundImage && bt < 3e3; )
            await new Promise((O) => setTimeout(O, 100)), bt += 100;
          if (!this.backgroundImage)
            throw new Error("背景图像加载超时");
        }
        const h = window.devicePixelRatio || 1, u = Math.max(0, s.padding || 0), d = this.canvas.width / h, x = this.canvas.height / h, w = t - u, S = e - u, f = i + u * 2, v = o + u * 2, P = Math.max(1, Math.round(f * h)), N = Math.max(1, Math.round(v * h)), T = Math.max(0, w), U = Math.max(0, S), Z = Math.min(d, w + f), X = Math.min(x, S + v), j = Math.max(0, Z - T), F = Math.max(0, X - U), tt = Math.round(T * h), q = Math.round(U * h), J = Math.min(
          this.canvas.width - tt,
          Math.round(j * h)
        ), et = Math.min(
          this.canvas.height - q,
          Math.round(F * h)
        ), st = Math.round((T - w) * h), yt = Math.round((U - S) * h), it = document.createElement("canvas");
        it.width = P, it.height = N;
        const G = it.getContext("2d", {
          alpha: !0,
          desynchronized: !1,
          willReadFrequently: !1
        });
        if (!G)
          throw new Error("无法获取2D绘图上下文");
        G.imageSmoothingEnabled = !1, s.fillColor && (G.fillStyle = s.fillColor, G.fillRect(0, 0, P, N)), J > 0 && et > 0 && G.drawImage(
          this.backgroundImage,
          tt,
          q,
          J,
          et,
          st,
          yt,
          J,
          et
        );
        const pt = it.toDataURL("image/png", 1).replace(/^data:image\/png;base64,/, "");
        clearTimeout(l), a({
          image: pt,
          adjusted_width: P,
          adjusted_height: N,
          logical_x: w,
          logical_y: S,
          logical_width: f,
          logical_height: v
        });
      } catch (h) {
        clearTimeout(l), r(new Error(`裁剪背景图像失败: ${h.message || h}`));
      }
    });
  }
  // 渲染带标注的图像
  async renderWithAnnotations(t, e, i) {
    return new Promise((o, s) => {
      const a = setTimeout(() => {
        s(new Error("渲染标注超时"));
      }, 15e3), r = document.createElement("canvas");
      r.width = t.adjusted_width, r.height = t.adjusted_height;
      const l = r.getContext("2d", {
        alpha: !0,
        desynchronized: !1,
        willReadFrequently: !1
      });
      if (!l) {
        clearTimeout(a), s(new Error("无法获取2D绘图上下文"));
        return;
      }
      l.imageSmoothingEnabled = !0, l.imageSmoothingQuality = "high";
      const h = new Image();
      h.onload = () => {
        try {
          if (l.drawImage(h, 0, 0), this.annotations.length > 0 && this.selectionRect) {
            const x = t.logical_width > 0 ? t.adjusted_width / t.logical_width : e, w = {
              x: t.logical_x,
              y: t.logical_y,
              width: t.logical_width,
              height: t.logical_height
            }, S = this.drawingEngine.createScreenshotContext(
              l,
              x,
              w
            );
            this.annotations.forEach((f, v) => {
              try {
                f.drawToScreenshot(S);
              } catch (P) {
                A.error(`[截图] 绘制标注 ${v} 失败`, P);
              }
            });
          }
          const u = Yn(
            this.selectionCornerRadius,
            t.logical_width,
            t.logical_height
          );
          if (u > 0) {
            const x = t.logical_width > 0 ? t.adjusted_width / t.logical_width : e;
            l.save(), l.globalCompositeOperation = "destination-in", l.fillStyle = "#000", l.beginPath(), l.roundRect(
              0,
              0,
              r.width,
              r.height,
              u * x
            ), l.fill(), l.restore();
          }
          let d;
          d = r.toDataURL("image/png"), clearTimeout(a), o(d);
        } catch (u) {
          A.error("[截图] 绘制过程出错", u);
          try {
            const d = r.toDataURL("image/png");
            clearTimeout(a), o(d);
          } catch {
            clearTimeout(a), s(new Error(`渲染失败: ${u.message || u}`));
          }
        }
      }, h.onerror = (u) => {
        A.error("[截图] 图像加载失败", u), clearTimeout(a), s(new Error("图像加载失败"));
      }, h.src = `data:image/png;base64,${t.image}`;
    });
  }
  // 获取当前状态
  getState() {
    return {
      selectionRect: this.selectionRect,
      annotations: this.annotations.map((t) => t.getData()),
      currentTool: this.currentTool,
      currentStyle: {
        ...this.currentStyle,
        opacity: this.currentStyle.opacity ?? 1
      },
      textSize: this.textSize,
      mosaicSize: this.mosaicSize,
      selectionCornerRadius: this.selectionCornerRadius,
      hasSelection: !!this.selectionRect,
      // 有标注或有翻译覆盖层时都可以撤销
      hasAnnotations: this.annotations.length > 0 || this.translationOverlay.isVisible && this.translationOverlay.blocks.length > 0,
      canRedo: this.annotationRedoStack.length > 0,
      selectedAnnotation: this.selectedAnnotation?.getData() || null,
      isDrawing: this.eventHandler.getDrawingState().isDrawing
    };
  }
  // 获取绘制状态
  getDrawingState() {
    return this.eventHandler.getDrawingState().isDrawing;
  }
  // 更新样式
  updateStyle(t) {
    this.currentStyle = { ...this.currentStyle, ...t }, this.currentTool === m.Pen && (t.color || t.lineWidth) && this.updateToolCursor(), this.onStateChange?.();
  }
  // 更新文字大小
  updateTextSize(t) {
    this.textSize = t, this.onStateChange?.();
  }
  // 更新马赛克大小
  updateMosaicSize(t) {
    this.mosaicSize = t, this.currentTool === m.Mosaic && this.updateToolCursor(), this.onStateChange?.();
  }
  updateSelectionCornerRadius(t) {
    Number.isFinite(t) && (this.selectionCornerRadius = Math.max(0, Math.min(120, t)), this.draw(), this.onStateChange?.());
  }
  // 删除指定标注
  deleteAnnotation(t) {
    const e = this.annotations.findIndex((i) => i === t);
    e !== -1 && (this.pushAnnotationHistory(), this.annotations.splice(e, 1), this.selectedAnnotation === t && (this.selectedAnnotation = null), this.editingAnnotation === t && (this.editingAnnotation = null), this.draw(), this.onStateChange?.());
  }
  // 更新文字或序号标记的说明内容
  updateTextAnnotation(t, e) {
    if (t.getData().type === m.Text || t.getData().type === m.Marker) {
      if (t.getData().text === e) {
        this.clearEditingAnnotation();
        return;
      }
      this.pushAnnotationHistory(), t.updateData({ text: e }), this.clearEditingAnnotation(), this.draw(), this.onStateChange?.();
    }
  }
  // 设置正在编辑的文字注释
  setEditingAnnotation(t) {
    this.editingAnnotation = t, this.draw();
  }
  // 清除编辑状态
  clearEditingAnnotation() {
    this.editingAnnotation = null, this.draw();
  }
  async createPinWindow() {
    return this.createPinLikeWindow("pin");
  }
  async createOcrPinWindow() {
    return this.createPinLikeWindow("ocr");
  }
  // 创建贴图/文字识别复用窗口
  async createPinLikeWindow(t) {
    if (this.selectionRect)
      try {
        const { x: e, y: i, width: o, height: s } = this.selectionRect, a = await C("get_window_info"), r = a?.scale || 1, l = Math.round(a.x + e * r), h = Math.round(a.y + i * r), u = Math.round(o * r), d = Math.round(s * r), x = Math.round(a.x + window.innerWidth * r), w = Math.round(a.y + window.innerHeight * r), S = t === "ocr" ? Math.min(Math.max(u, 760), Math.max(360, x - a.x)) : u, f = t === "ocr" ? Math.min(Math.max(d, 520), Math.max(260, w - a.y)) : d, v = t === "ocr" ? Math.round(l - Math.max(0, S - u) / 2) : l, P = t === "ocr" ? Math.max(a.x, Math.min(v, x - S)) : l, N = t === "ocr" ? Math.max(a.y, Math.min(h, w - f)) : h, T = {}, U = await this.cropFromBackground(e, i, o, s, T);
        if (!U?.image)
          throw new Error("Failed to crop from background image");
        const Z = await this.renderWithAnnotations(U, r, "save");
        await C("create_pin_window", {
          mode: t,
          imageData: Z,
          x: P,
          y: N,
          width: S,
          height: f
        }), this.onStateChange?.(), setTimeout(() => {
          new tn("screenshot").close();
        }, 100);
      } catch (e) {
        throw A.error(`[截图] 创建${t === "ocr" ? "文字识别" : "贴图"}窗口失败`, e), e;
      }
  }
  // 处理颜色取样
  async handleColorPicking(t) {
    if (this.selectionRect)
      try {
        const e = await C("get_window_info"), i = e?.scale || 1, o = Math.round(e.x + (this.selectionRect.x + t.x - this.selectionRect.x) * i), s = Math.round(e.y + (this.selectionRect.y + t.y - this.selectionRect.y) * i), a = await C("get_pixel_color", {
          x: o,
          y: s
        }), r = this.rgbToHex(a.r, a.g, a.b), l = {
          rgb: a,
          hex: r,
          position: t
        };
        this.onColorPicked?.(l), this.colorPickerState.isCopied = !0, this.draw(), setTimeout(() => {
          this.colorPickerState.isCopied = !1, this.draw();
        }, 1e3);
      } catch (e) {
        A.error("[截图] 获取像素颜色失败", e);
      }
  }
  // 实时更新颜色预览（鼠标移动时调用）
  async updateColorPreview(t) {
    if (this.selectionRect)
      try {
        const e = await C("get_window_info"), i = e?.scale || 1, o = this.colorPickerState.zoomFactor, s = Math.floor(o / 2), a = Math.round(e.x + t.x * i), r = Math.round(e.y + t.y * i), l = await C("get_screen_preview", {
          x: a - s,
          y: r - s,
          width: o,
          height: o
        }), h = new Image();
        h.src = `data:image/png;base64,${l.image}`, await h.decode();
        const u = await createImageBitmap(h);
        this.colorPickerState.previewImage?.close?.(), this.colorPickerState.previewImage = u;
        const x = new OffscreenCanvas(o, o).getContext("2d");
        if (x) {
          x.drawImage(u, 0, 0, o, o);
          const w = x.getImageData(s, s, 1, 1).data, S = { r: w[0], g: w[1], b: w[2] }, f = this.rgbToHex(S.r, S.g, S.b);
          this.colorPickerState.colorInfo = { rgb: S, hex: f, position: t };
        }
        this.draw();
      } catch (e) {
        A.error("[截图] 更新颜色预览失败", e);
      }
  }
  // 节流版本的颜色预览更新
  throttledUpdateColorPreview(t) {
    const e = Date.now();
    e - this.lastThrottledTimestamp < this.throttleInterval || (this.lastThrottledTimestamp = e, this.throttleTimer && cancelAnimationFrame(this.throttleTimer), this.throttleTimer = requestAnimationFrame(() => {
      this.updateColorPreview(t), this.throttleTimer = null;
    }));
  }
  // RGB 转 HEX
  rgbToHex(t, e, i) {
    const o = (s) => {
      const a = Math.max(0, Math.min(255, Math.round(s))).toString(16);
      return a.length === 1 ? "0" + a : a;
    };
    return `#${o(t)}${o(e)}${o(i)}`.toUpperCase();
  }
  // ==================== OCR翻译功能 ====================
  // 执行OCR识别和翻译
  async performOcrTranslation() {
    if (!(!this.selectionRect || !this.backgroundImage)) {
      if (this.translationOverlay.engine === "local-ai") {
        await this.performVisionTranslation();
        return;
      }
      try {
        const t = performance.now();
        let e = 0, i = 0, o = 0, s = 0, a = 0;
        const { x: r, y: l, width: h, height: u } = this.selectionRect, d = window.devicePixelRatio || 1, x = h * d, w = u * d, S = this.canvasPool.acquire(x, w), f = S.getContext("2d");
        if (!f)
          throw this.canvasPool.release(S), new Error("无法创建临时canvas");
        const v = r * d, P = l * d, N = performance.now();
        f.drawImage(
          this.backgroundImage,
          v,
          P,
          x,
          w,
          0,
          0,
          x,
          w
        ), e = Math.round(performance.now() - N);
        const T = performance.now(), { recognizeFromCanvas: U } = await fe.loadOCR();
        i = Math.round(performance.now() - T);
        const Z = performance.now(), X = await U(S);
        o = Math.round(performance.now() - Z), this.canvasPool.release(S);
        const j = {
          cropDurationMs: e,
          ocrModuleLoadDurationMs: i,
          ocrRecognitionDurationMs: o,
          confidence: X.confidence,
          rawLineCount: X.blocks.length,
          textLength: X.full_text.trim().length
        };
        A.info("[OCR] 识别耗时统计", j), _t.log("[OCR] recognition timing", j);
        const F = X.blocks, tt = performance.now(), q = Io(F);
        s = Math.round(performance.now() - tt);
        const J = q.map((_) => _.text).join(`

`), et = {
          rawLineCount: F.length,
          paragraphCount: q.length,
          durationMs: s,
          paragraphs: q.map((_, nt) => ({
            index: nt,
            text: _.text,
            blockCount: _.blocks.length,
            isCodeBlock: !!_.isCodeBlock,
            isStructuredBlock: !!_.isStructuredBlock,
            bbox: _.bbox,
            sourceBlocks: _.blocks.map((ut) => ({
              text: ut.text,
              x: ut.x,
              y: ut.y,
              width: ut.width,
              height: ut.height
            }))
          }))
        };
        if (A.info("[OCR] 版面重组完成", et), _t.log("[OCR] layout reflow complete", et), !J || !J.trim()) {
          this.translationOverlay.isLoading = !1, this.translationOverlay.isVisible = !1, this.draw(), this.onStateChange?.();
          return;
        }
        const st = this.translationOverlay.engine;
        this.translationOverlay.sourceLanguage = "auto", this.translationOverlay.targetLanguage = this.getAutoTargetLanguage(ge(J));
        const yt = (_) => {
          const nt = _.trim();
          return !!(nt.match(/^(sudo|npm|yarn|pip|git|cd|ls|cat|chmod|chown|mkdir|rm|cp|mv|curl|wget|brew|apt|yum|dnf|sh|SH|Bash|PowerShell|Fish|Yarn|pnpm|deno|bun|Cargo)\s+\S+/) && !nt.match(/^(If|When|Click|Please|You|After|Before|Then|Open|Go|Download)/i));
        };
        let it = "";
        const G = ge(J), ot = {
          detectedLanguage: G,
          textLength: J.trim().length,
          textPreview: J.trim().slice(0, 500)
        };
        A.info("[OCR] 翻译语言检测完成", ot), _t.log("[OCR] translation language detected", ot), Pe(G) && (this.translationOverlay.sourceLanguage = G, this.translationOverlay.targetLanguage = this.getAutoTargetLanguage(G));
        const pt = st === "offline" ? fe.loadOfflineTranslator() : null, kt = (_) => _.includes("插件") && _.includes("未启用") ? _.includes("translation") ? "OCR识别已完成，但翻译插件未启用，请在插件设置中安装并启用 Translation 插件" : _ : st === "offline" ? _.includes("未激活") || _.includes("未下载") || _.includes("运行时未安装") ? _ : _.includes("超时") ? "模型加载超时，请重试" : _.includes("离线翻译暂仅支持") ? _ : "离线翻译失败: " + _.substring(0, 50) : _.includes("timeout") || _.includes("超时") ? "翻译超时，请检查网络连接" : _.includes("network") || _.includes("网络") || _.includes("请求") || _.includes("令牌") ? "翻译失败，请检查网络连接" : _.trim() ? _.slice(0, 80) : "翻译失败，请检查网络连接", ht = async () => {
          if (!pt)
            throw new Error("离线翻译模块未加载");
          const {
            translateOffline: _,
            canUseOfflineTranslation: nt,
            warmupOfflineTranslator: ut,
            getModelCacheInfo: rt
          } = await pt, zt = nt();
          if (this.offlineModelActivated && !zt)
            if ((await rt()).isCached)
              await ut();
            else
              throw new Error("离线翻译模型未下载，请在设置-翻译配置中下载模型");
          else if (!this.offlineModelActivated)
            throw new Error("离线翻译模型未激活，请在设置-翻译配置中激活模型");
          return _;
        }, bt = async (_, nt, ut) => {
          if (!_.trim())
            return _;
          if (st === "offline") {
            if (nt !== "en" || ut !== "zh")
              throw new Error("离线翻译暂仅支持英译中，请切换 Google 或 Bing 进行中译英");
            return (await ht())(_);
          }
          return await C("translate_text", {
            text: _,
            from: nt,
            to: ut,
            engine: st
          });
        }, O = (_) => {
          const nt = _.trim();
          return /^(?:option|description|name|value|type|default|example|required)$/i.test(nt) ? !1 : /^[A-Za-z_][A-Za-z0-9_-]{1,32}$/.test(nt);
        }, Tt = async (_, nt, ut) => {
          const rt = _.trim();
          if (!rt || yt(rt))
            return _;
          const zt = _.match(/^(\s*)(\S+)(\s{2,})(.+?)(\s*)$/);
          if (zt) {
            const [, dt, ft, K, lt, jt] = zt, Rt = ge(ft), Me = O(ft) || !Pe(Rt) ? ft : await bt(ft, Rt, this.getAutoTargetLanguage(Rt)), se = ge(lt), Jt = Pe(se) && !yt(lt) ? await bt(lt, se, this.getAutoTargetLanguage(se)) : lt;
            return `${dt}${Me}${K}${Jt}${jt}`;
          }
          if (O(rt))
            return _;
          const St = ge(rt);
          if (!Pe(St))
            return _;
          const Zt = this.getAutoTargetLanguage(St), b = await bt(rt, St, Zt), B = {
            paragraphIndex: nt,
            blockIndex: ut,
            sourceLanguage: St,
            targetLanguage: Zt,
            sourceText: rt,
            translatedText: b.slice(0, 200)
          };
          return A.info("[OCR] 结构化块翻译完成", B), _t.log("[OCR] structured block translation complete", B), b;
        }, H = async (_, nt) => {
          const ut = performance.now(), rt = (b) => ({
            index: nt,
            durationMs: Math.round(performance.now() - ut),
            ...b
          }), zt = ge(_.text), St = this.getAutoTargetLanguage(zt), Zt = {
            index: nt,
            text: _.text,
            sourceLanguage: zt,
            targetLanguage: St,
            engine: st,
            structured: !!_.isStructuredBlock
          };
          if (A.info("[OCR] 段落翻译方向", Zt), _t.log("[OCR] paragraph translation direction", Zt), !Pe(zt)) {
            _.translatedText = _.text;
            const b = rt({
              skipped: !0,
              cancelled: !1,
              errorMessage: "部分文本暂不支持翻译，已保留原文"
            }), B = {
              index: nt,
              detectedLanguage: zt,
              durationMs: b.durationMs,
              text: _.text
            };
            return A.warn("[OCR] 跳过不支持的段落语言", B), _t.log("[OCR] skip unsupported paragraph language", B), b;
          }
          try {
            if (_.isStructuredBlock && _.blocks.length > 0) {
              const dt = async (K, lt) => {
                const jt = await Tt(K.text, nt, lt);
                return K.translatedText = jt, jt;
              }, ft = [];
              if (st === "offline")
                for (let K = 0; K < _.blocks.length; K += 1)
                  ft.push(await dt(_.blocks[K], K));
              else
                ft.push(
                  ...await Promise.all(
                    _.blocks.map((K, lt) => dt(K, lt))
                  )
                );
              _.translatedText = ft.join(" ");
            } else if (yt(_.text) || _.isCodeBlock) {
              _.translatedText = _.text;
              const dt = _.isCodeBlock ? "code_block" : "command_like_text", ft = rt({ skipped: !0, cancelled: !1 }), K = {
                index: nt,
                reason: dt,
                durationMs: ft.durationMs,
                text: _.text
              };
              return A.info("[OCR] 跳过代码段翻译", K), _t.log("[OCR] skip code paragraph translation", K), ft;
            } else
              _.translatedText = await bt(
                _.text,
                zt,
                St
              );
            const b = rt({ skipped: !1, cancelled: !1 }), B = {
              index: nt,
              durationMs: b.durationMs,
              sourceLanguage: zt,
              targetLanguage: St,
              engine: st,
              structured: !!_.isStructuredBlock,
              sourceLength: _.text.length,
              translatedLength: (_.translatedText || "").length,
              translatedPreview: (_.translatedText || "").slice(0, 300)
            };
            return A.info("[OCR] 段落翻译完成", B), _t.log("[OCR] paragraph translation complete", B), b;
          } catch (b) {
            const B = b instanceof Error ? b.message : String(b);
            if (B === "翻译已取消")
              return rt({ skipped: !1, cancelled: !0 });
            _.translatedText = _.text;
            const dt = kt(B), ft = rt({
              skipped: !1,
              cancelled: !1,
              errorMessage: dt
            }), K = {
              index: nt,
              durationMs: ft.durationMs,
              sourceLanguage: zt,
              targetLanguage: St,
              engine: st,
              error: B,
              structured: !!_.isStructuredBlock,
              text: _.text
            };
            return A.error("[OCR] 段落翻译失败", K), _t.log("[OCR] paragraph translation failed", K), ft;
          }
        }, Mt = performance.now();
        let wt = [];
        if (st === "offline")
          for (let _ = 0; _ < q.length; _ += 1) {
            const nt = await H(q[_], _);
            if (wt.push(nt), nt.cancelled)
              return;
            if (nt.errorMessage) {
              it = nt.errorMessage;
              break;
            }
          }
        else {
          if (wt = await Promise.all(
            q.map((_, nt) => H(_, nt))
          ), wt.some((_) => _.cancelled))
            return;
          it = wt.find((_) => _.errorMessage)?.errorMessage || "";
        }
        a = Math.round(performance.now() - Mt);
        const At = {
          durationMs: a,
          engine: st,
          paragraphCount: q.length,
          translatedParagraphCount: wt.filter((_) => !_.skipped && !_.errorMessage).length,
          skippedParagraphCount: wt.filter((_) => _.skipped).length,
          failedParagraphCount: wt.filter((_) => !!_.errorMessage).length
        };
        A.info("[OCR] 翻译耗时统计", At), _t.log("[OCR] translation timing", At);
        const Ot = q.map((_) => this.toDisplayParagraph(_, d)), ee = Ot.map((_) => this.toLegacyOverlayBlock(_));
        this.translationOverlay.blocks = ee, this.translationOverlay.paragraphBlocks = Ot, this.translationOverlay.isLoading = !1, this.translationOverlay.errorMessage = it || void 0;
        const Ht = {
          cropDurationMs: e,
          ocrModuleLoadDurationMs: i,
          ocrRecognitionDurationMs: o,
          reflowDurationMs: s,
          translationDurationMs: a,
          totalDurationMs: Math.round(performance.now() - t),
          rawLineCount: F.length,
          paragraphCount: q.length,
          engine: st
        };
        A.info("[OCR] 截图翻译总耗时统计", Ht), _t.log("[OCR] pipeline timing", Ht), this.draw(), this.onStateChange?.();
      } catch (t) {
        A.error("[OCR] OCR翻译失败:", t);
        const e = t instanceof Error ? t.message : String(t);
        this.translationOverlay.isLoading = !1, this.translationOverlay.isVisible = !0, this.translationOverlay.errorMessage = this.getOcrTranslationErrorMessage(e), this.draw(), this.onStateChange?.();
      }
    }
  }
  async performVisionTranslation() {
    if (!(!this.selectionRect || !this.backgroundImage))
      try {
        const { x: t, y: e, width: i, height: o } = this.selectionRect;
        this.translationOverlay.loadingStage = "starting-service", this.draw(), this.onStateChange?.(), (await mr()).running || (A.info("[截图] AI 服务未运行，正在启动..."), await pr(), A.info("[截图] AI 服务启动完成"));
        const a = await this.cropFromBackground(t, e, i, o);
        if (!a?.image)
          throw new Error("无法获取截图选区图像");
        this.translationOverlay.loadingStage = "translating", this.draw(), this.onStateChange?.(), await new Promise((v) => setTimeout(v, 100));
        const l = (await wr({
          temperature: 0.2,
          maxTokens: 4096,
          messages: [
            {
              role: "system",
              content: [
                "You are a visual translation engine.",
                "Read the text in the supplied screenshot directly; do not describe the image and do not copy source text.",
                "The target language is always Simplified Chinese. Translate every readable non-Chinese fragment (including English, Japanese, Korean, and other languages) into Simplified Chinese.",
                "For mixed-language screenshots, retain existing Simplified Chinese and translate only the non-Chinese fragments, preserving their original reading order.",
                "Preserve headings, paragraphs, lists, tables, code, numbers, URLs, labels, and the reading order as faithfully as possible.",
                "Do not use English as the target language. Return only the final translated text, with no source-language label, explanation, or Markdown fence."
              ].join(" ")
            },
            {
              role: "user",
              content: [
                {
                  type: "text",
                  text: "Translate all readable text in this screenshot."
                },
                {
                  type: "image_url",
                  image_url: {
                    url: `data:image/png;base64,${a.image}`
                  }
                }
              ]
            }
          ]
        })).content.trim();
        if (!l)
          throw new Error("AI 未返回可显示的翻译结果");
        const h = Math.max(14, Math.min(20, Math.round(o / 18))), u = Math.max(18, Math.min(28, Math.round(o / 12))), d = l.split(/\n\n+/).filter((v) => v.trim()), x = Math.max(d.length, 1), w = (o - 16) / x, S = d.map((v, P) => {
          const N = P * w + 8, T = P === x - 1 ? o - N - 8 : w, U = {
            text: "",
            translatedText: v.trim(),
            x: 0,
            y: N,
            width: i,
            height: T,
            fontSize: h,
            lineHeight: u,
            angle: 0
          };
          return {
            text: "",
            translatedText: v.trim(),
            blocks: [U],
            bbox: { x: 0, y: N, width: i, height: T },
            isCodeBlock: !1,
            isStructuredBlock: !1,
            fontSize: h,
            lineHeight: u,
            angle: 0
          };
        }), f = S.length > 0 ? S : [{
          text: "",
          translatedText: l,
          blocks: [{
            text: "",
            translatedText: l,
            x: 0,
            y: 0,
            width: i,
            height: o,
            fontSize: h,
            lineHeight: u,
            angle: 0
          }],
          bbox: { x: 0, y: 0, width: i, height: o },
          isCodeBlock: !1,
          isStructuredBlock: !1,
          fontSize: h,
          lineHeight: u,
          angle: 0
        }];
        this.translationOverlay.blocks = f.map((v) => v.blocks[0]), this.translationOverlay.paragraphBlocks = f, this.translationOverlay.sourceLanguage = "auto", this.translationOverlay.targetLanguage = "zh", this.translationOverlay.isLoading = !1, this.translationOverlay.loadingStage = void 0, this.translationOverlay.isVisible = !0, this.translationOverlay.errorMessage = void 0, this.draw(), this.onStateChange?.();
      } catch (t) {
        const e = t instanceof Error ? t.message : String(t);
        A.error("[截图] AI 识图翻译失败", t), this.translationOverlay.isLoading = !1, this.translationOverlay.loadingStage = void 0, this.translationOverlay.isVisible = !0, this.translationOverlay.blocks = [], this.translationOverlay.paragraphBlocks = [], this.translationOverlay.errorMessage = e.includes("mmproj") || e.includes("vision") ? "AI 翻译需要在“本地 AI”中配置视觉模型（mmproj）" : `AI 识图翻译失败：${e.slice(0, 80)}`, this.draw(), this.onStateChange?.();
      }
  }
  getOcrTranslationErrorMessage(t) {
    return t.includes("OCR_RECOGNITION_LOW_QUALITY") ? "OCR识别质量过低，请重新选择更清晰或方向正确的文本区域" : t.includes("RAPIDOCR_UNAVAILABLE") ? "RapidOCR 未配置，无法识别截图文字" : t ? t.slice(0, 80) : "OCR翻译失败";
  }
  getAutoTargetLanguage(t) {
    return t === "zh" ? "en" : "zh";
  }
  toDisplayParagraph(t, e) {
    return {
      ...t,
      blocks: t.blocks.map((i) => ({
        ...i,
        x: i.x / e,
        y: i.y / e,
        width: i.width / e,
        height: i.height / e,
        fontSize: i.fontSize / e,
        lineHeight: i.lineHeight / e
      })),
      bbox: {
        x: t.bbox.x / e,
        y: t.bbox.y / e,
        width: t.bbox.width / e,
        height: t.bbox.height / e
      },
      fontSize: t.fontSize ? t.fontSize / e : void 0,
      lineHeight: t.lineHeight ? t.lineHeight / e : void 0
    };
  }
  toLegacyOverlayBlock(t) {
    return {
      text: t.text,
      x: t.bbox.x,
      y: t.bbox.y,
      width: t.bbox.width,
      height: t.bbox.height,
      fontSize: t.fontSize || 16,
      lineHeight: t.lineHeight || (t.fontSize || 16) * 1.4,
      angle: t.angle || 0,
      translatedText: t.translatedText || t.text,
      isCodeBlock: t.isCodeBlock
    };
  }
  // 清除翻译覆盖层
  async clearTranslationOverlay() {
    try {
      const { cancelOfflineTranslation: t } = await fe.loadOfflineTranslator();
      t();
    } catch {
    }
    this.translationOverlay = {
      blocks: [],
      paragraphBlocks: [],
      isVisible: !1,
      isLoading: !1,
      sourceLanguage: "auto",
      targetLanguage: "zh",
      engine: this.translationOverlay.engine
      // 保留用户选择的引擎
    }, this.draw(), this.onStateChange?.();
  }
  // 获取翻译状态
  getTranslationState() {
    return this.translationOverlay;
  }
  // 设置翻译引擎
  setTranslationEngine(t) {
    this.translationOverlay.engine = t, this.onStateChange?.();
  }
  // 设置离线模型激活状态
  setOfflineModelActivated(t) {
    this.offlineModelActivated = t;
  }
  // 处理键盘事件
  handleKeyDown(t) {
    if (!this.colorPickerState.isActive) return !1;
    switch (t.key.toLowerCase()) {
      case "q":
        return this.colorPickerState.colorInfo && (this.onColorPicked?.(this.colorPickerState.colorInfo), this.colorPickerState.isCopied = !0, this.draw(), setTimeout(() => {
          this.colorPickerState.isCopied = !1, this.draw();
        }, 1e3)), !0;
      case "shift":
        return this.colorPickerState.showFormat = this.colorPickerState.showFormat === "hex" ? "rgb" : "hex", this.draw(), !0;
      default:
        return !1;
    }
  }
  // 销毁
  destroy() {
    fe.loadOfflineTranslator().then(({ cancelOfflineTranslation: e }) => e()).catch(() => {
    }), this.canvasPool.clear(), this.throttleTimer && (cancelAnimationFrame(this.throttleTimer), this.throttleTimer = null), this.cancelSmartDetection(), this.backgroundImage && (this.backgroundImage.onload = null, this.backgroundImage.onerror = null, this.backgroundImage.src = "", this.backgroundImage = null, this.visualElementDetector = null), this.annotations.forEach((e) => {
      typeof e.destroy == "function" && e.destroy();
    }), this.annotations = [], this.annotationUndoStack = [], this.annotationRedoStack = [], this.pendingDragSnapshot = null, this.pendingResizeSnapshot = null, this.currentAnnotation = null, this.selectedAnnotation = null, this.hoveredAnnotation = null, this.draggedAnnotation = null, this.resizingAnnotation = null, this.editingAnnotation = null, this.selectionRect = null, this.dragStartPoint = null, this.resizeStartBounds = null, this.resizeOperation = null, this.pendingSnapCandidate = null, this.dragStartPosition = null, this.snappedWindow = null, this.snappedElement = null, this.elementCandidateStabilizer.reset(), this.allWindows = [], this.translationOverlay.blocks = [], this.translationOverlay.paragraphBlocks = [], this.translationOverlay.isVisible = !1, this.translationOverlay.isLoading = !1, this.colorPickerState.previewImage && (this.colorPickerState.previewImage.close?.(), this.colorPickerState.previewImage = void 0), this.colorPickerState.isActive = !1, this.colorPickerState.isVisible = !1, this.colorPickerState.isCopied = !1, this.colorPickerState.colorInfo = void 0, this.eventHandler.unbind(), this.canvas.removeEventListener("mousedown", this.mouseDownHandler), this.canvas.removeEventListener("mousemove", this.mouseMoveHandler), this.canvas.removeEventListener("mouseup", this.mouseUpHandler), this.canvas.removeEventListener("dblclick", this.doubleClickHandler), window.removeEventListener("keydown", this.keyDownHandler), window.removeEventListener("keyup", this.keyUpHandler), this.onStateChange = void 0, this.onTextInputRequest = void 0, this.onColorPicked = void 0;
    const t = this.canvas.getContext("2d");
    t && (t.save(), t.setTransform(1, 0, 0, 1, 0, 0), t.clearRect(0, 0, this.canvas.width, this.canvas.height), t.restore());
  }
}
var dl = {
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
function gl() {
  return "icon-" + ((1 + Math.random()) * 4294967296 | 0).toString(16).substring(1);
}
function fl(n, t, e) {
  var i = typeof t.fill == "string" ? [t.fill] : t.fill || [], o = [], s = t.theme || e.theme;
  switch (s) {
    case "outline":
      o.push(typeof i[0] == "string" ? i[0] : "currentColor"), o.push("none"), o.push(typeof i[0] == "string" ? i[0] : "currentColor"), o.push("none");
      break;
    case "filled":
      o.push(typeof i[0] == "string" ? i[0] : "currentColor"), o.push(typeof i[0] == "string" ? i[0] : "currentColor"), o.push("#FFF"), o.push("#FFF");
      break;
    case "two-tone":
      o.push(typeof i[0] == "string" ? i[0] : "currentColor"), o.push(typeof i[1] == "string" ? i[1] : e.colors.twoTone.twoTone), o.push(typeof i[0] == "string" ? i[0] : "currentColor"), o.push(typeof i[1] == "string" ? i[1] : e.colors.twoTone.twoTone);
      break;
    case "multi-color":
      o.push(typeof i[0] == "string" ? i[0] : "currentColor"), o.push(typeof i[1] == "string" ? i[1] : e.colors.multiColor.outFillColor), o.push(typeof i[2] == "string" ? i[2] : e.colors.multiColor.innerStrokeColor), o.push(typeof i[3] == "string" ? i[3] : e.colors.multiColor.innerFillColor);
      break;
  }
  return {
    size: t.size || e.size,
    strokeWidth: t.strokeWidth || e.strokeWidth,
    strokeLinecap: t.strokeLinecap || e.strokeLinecap,
    strokeLinejoin: t.strokeLinejoin || e.strokeLinejoin,
    colors: o,
    id: n
  };
}
var ml = Symbol("icon-context");
function at(n, t, e) {
  var i = {
    name: "icon-" + n,
    props: ["size", "strokeWidth", "strokeLinecap", "strokeLinejoin", "theme", "fill", "spin"],
    setup: function(s) {
      var a = gl(), r = pe(ml, dl);
      return function() {
        var l = s.size, h = s.strokeWidth, u = s.strokeLinecap, d = s.strokeLinejoin, x = s.theme, w = s.fill, S = s.spin, f = fl(a, {
          size: l,
          strokeWidth: h,
          strokeLinecap: u,
          strokeLinejoin: d,
          theme: x,
          fill: w
        }, r), v = [r.prefix + "-icon"];
        return v.push(r.prefix + "-icon-" + n), t && r.rtl && v.push(r.prefix + "-icon-rtl"), S && v.push(r.prefix + "-icon-spin"), p("span", {
          class: v.join(" ")
        }, [e(f)]);
      };
    }
  };
  return i;
}
const pl = at("arrow-right-up", !0, function(n) {
  return p("svg", {
    width: n.size,
    height: n.size,
    viewBox: "0 0 48 48",
    fill: "none"
  }, [p("path", {
    d: "M19 11H37V29",
    stroke: n.colors[0],
    "stroke-width": n.strokeWidth,
    "stroke-linecap": n.strokeLinecap,
    "stroke-linejoin": n.strokeLinejoin
  }, null), p("path", {
    d: "M11.5439 36.4559L36.9997 11",
    stroke: n.colors[0],
    "stroke-width": n.strokeWidth,
    "stroke-linecap": n.strokeLinecap,
    "stroke-linejoin": n.strokeLinejoin
  }, null)]);
}), Kn = at("check", !0, function(n) {
  return p("svg", {
    width: n.size,
    height: n.size,
    viewBox: "0 0 48 48",
    fill: "none"
  }, [p("path", {
    d: "M43 11L16.875 37L5 25.1818",
    stroke: n.colors[0],
    "stroke-width": n.strokeWidth,
    "stroke-linecap": n.strokeLinecap,
    "stroke-linejoin": n.strokeLinejoin
  }, null)]);
}), Jn = at("close", !1, function(n) {
  return p("svg", {
    width: n.size,
    height: n.size,
    viewBox: "0 0 48 48",
    fill: "none"
  }, [p("path", {
    d: "M8 8L40 40",
    stroke: n.colors[0],
    "stroke-width": n.strokeWidth,
    "stroke-linecap": n.strokeLinecap,
    "stroke-linejoin": n.strokeLinejoin
  }, null), p("path", {
    d: "M8 40L40 8",
    stroke: n.colors[0],
    "stroke-width": n.strokeWidth,
    "stroke-linecap": n.strokeLinecap,
    "stroke-linejoin": n.strokeLinejoin
  }, null)]);
}), jn = at("copy", !0, function(n) {
  return p("svg", {
    width: n.size,
    height: n.size,
    viewBox: "0 0 48 48",
    fill: "none"
  }, [p("path", {
    d: "M13 12.4316V7.8125C13 6.2592 14.2592 5 15.8125 5H40.1875C41.7408 5 43 6.2592 43 7.8125V32.1875C43 33.7408 41.7408 35 40.1875 35H35.5163",
    stroke: n.colors[0],
    "stroke-width": n.strokeWidth,
    "stroke-linecap": n.strokeLinecap,
    "stroke-linejoin": n.strokeLinejoin
  }, null), p("path", {
    d: "M32.1875 13H7.8125C6.2592 13 5 14.2592 5 15.8125V40.1875C5 41.7408 6.2592 43 7.8125 43H32.1875C33.7408 43 35 41.7408 35 40.1875V15.8125C35 14.2592 33.7408 13 32.1875 13Z",
    fill: n.colors[1],
    stroke: n.colors[0],
    "stroke-width": n.strokeWidth,
    "stroke-linejoin": n.strokeLinejoin
  }, null)]);
}), wl = at("delete-four", !1, function(n) {
  return p("svg", {
    width: n.size,
    height: n.size,
    viewBox: "0 0 48 48",
    fill: "none"
  }, [p("path", {
    d: "M8 11L40 11",
    stroke: n.colors[0],
    "stroke-width": n.strokeWidth,
    "stroke-linecap": n.strokeLinecap,
    "stroke-linejoin": n.strokeLinejoin
  }, null), p("path", {
    d: "M18 5L30 5",
    stroke: n.colors[0],
    "stroke-width": n.strokeWidth,
    "stroke-linecap": n.strokeLinecap,
    "stroke-linejoin": n.strokeLinejoin
  }, null), p("path", {
    d: "M12 17H36V40C36 41.6569 34.6569 43 33 43H15C13.3431 43 12 41.6569 12 40V17Z",
    fill: n.colors[1],
    stroke: n.colors[0],
    "stroke-width": n.strokeWidth,
    "stroke-linejoin": n.strokeLinejoin
  }, null)]);
}), Ji = at("down", !1, function(n) {
  return p("svg", {
    width: n.size,
    height: n.size,
    viewBox: "0 0 48 48",
    fill: "none"
  }, [p("path", {
    d: "M36 18L24 30L12 18",
    stroke: n.colors[0],
    "stroke-width": n.strokeWidth,
    "stroke-linecap": n.strokeLinecap,
    "stroke-linejoin": n.strokeLinejoin
  }, null)]);
}), yl = at("download", !1, function(n) {
  return p("svg", {
    width: n.size,
    height: n.size,
    viewBox: "0 0 48 48",
    fill: "none"
  }, [p("path", {
    d: "M6 24.0083V42H42V24",
    stroke: n.colors[0],
    "stroke-width": n.strokeWidth,
    "stroke-linecap": n.strokeLinecap,
    "stroke-linejoin": n.strokeLinejoin
  }, null), p("path", {
    d: "M33 23L24 32L15 23",
    stroke: n.colors[0],
    "stroke-width": n.strokeWidth,
    "stroke-linecap": n.strokeLinecap,
    "stroke-linejoin": n.strokeLinejoin
  }, null), p("path", {
    d: "M23.9917 6V32",
    stroke: n.colors[0],
    "stroke-width": n.strokeWidth,
    "stroke-linecap": n.strokeLinecap,
    "stroke-linejoin": n.strokeLinejoin
  }, null)]);
}), vl = at("font-size", !0, function(n) {
  return p("svg", {
    width: n.size,
    height: n.size,
    viewBox: "0 0 48 48",
    fill: "none"
  }, [p("path", {
    d: "M8 10.9333L8 6H40V10.9333",
    stroke: n.colors[0],
    "stroke-width": n.strokeWidth,
    "stroke-linecap": n.strokeLinecap,
    "stroke-linejoin": n.strokeLinejoin
  }, null), p("path", {
    d: "M24 6V42",
    stroke: n.colors[0],
    "stroke-width": n.strokeWidth,
    "stroke-linecap": n.strokeLinecap,
    "stroke-linejoin": n.strokeLinejoin
  }, null), p("path", {
    d: "M16 42H32",
    stroke: n.colors[0],
    "stroke-width": n.strokeWidth,
    "stroke-linecap": n.strokeLinecap,
    "stroke-linejoin": n.strokeLinejoin
  }, null)]);
}), xl = at("go-on", !0, function(n) {
  return p("svg", {
    width: n.size,
    height: n.size,
    viewBox: "0 0 48 48",
    fill: "none"
  }, [p("path", {
    d: "M36 7L43 13.4615L36 21",
    stroke: n.colors[0],
    "stroke-width": n.strokeWidth,
    "stroke-linecap": n.strokeLinecap,
    "stroke-linejoin": n.strokeLinejoin
  }, null), p("path", {
    d: "M40 14H17.0062C10.1232 14 4.27787 19.6204 4.00964 26.5C3.72612 33.7696 9.73291 40 17.0062 40H34.0016",
    stroke: n.colors[0],
    "stroke-width": n.strokeWidth,
    "stroke-linecap": n.strokeLinecap,
    "stroke-linejoin": n.strokeLinejoin
  }, null)]);
}), kl = at("list-numbers", !0, function(n) {
  return p("svg", {
    width: n.size,
    height: n.size,
    viewBox: "0 0 48 48",
    fill: "none"
  }, [p("path", {
    d: "M20 9H42",
    stroke: n.colors[0],
    "stroke-width": n.strokeWidth,
    "stroke-linecap": n.strokeLinecap,
    "stroke-linejoin": n.strokeLinejoin
  }, null), p("path", {
    d: "M20 19H42",
    stroke: n.colors[0],
    "stroke-width": n.strokeWidth,
    "stroke-linecap": n.strokeLinecap,
    "stroke-linejoin": n.strokeLinejoin
  }, null), p("path", {
    d: "M20 29H42",
    stroke: n.colors[0],
    "stroke-width": n.strokeWidth,
    "stroke-linecap": n.strokeLinecap,
    "stroke-linejoin": n.strokeLinejoin
  }, null), p("path", {
    d: "M20 39H42",
    stroke: n.colors[0],
    "stroke-width": n.strokeWidth,
    "stroke-linecap": n.strokeLinecap,
    "stroke-linejoin": n.strokeLinejoin
  }, null), p("path", {
    d: "M6 29H12V32L6 38V39H12",
    stroke: n.colors[0],
    "stroke-width": n.strokeWidth,
    "stroke-linecap": n.strokeLinecap,
    "stroke-linejoin": n.strokeLinejoin
  }, null), p("path", {
    d: "M7 11L9 9V19M9 19H7M9 19H11",
    stroke: n.colors[0],
    "stroke-width": n.strokeWidth,
    "stroke-linecap": n.strokeLinecap,
    "stroke-linejoin": n.strokeLinejoin
  }, null)]);
}), Qi = at("loading", !0, function(n) {
  return p("svg", {
    width: n.size,
    height: n.size,
    viewBox: "0 0 48 48",
    fill: "none"
  }, [p("path", {
    d: "M4 24C4 35.0457 12.9543 44 24 44V44C35.0457 44 44 35.0457 44 24C44 12.9543 35.0457 4 24 4",
    stroke: n.colors[0],
    "stroke-width": n.strokeWidth,
    "stroke-linecap": n.strokeLinecap,
    "stroke-linejoin": n.strokeLinejoin
  }, null), p("path", {
    d: "M36 24C36 17.3726 30.6274 12 24 12C17.3726 12 12 17.3726 12 24C12 30.6274 17.3726 36 24 36V36",
    stroke: n.colors[0],
    "stroke-width": n.strokeWidth,
    "stroke-linecap": n.strokeLinecap,
    "stroke-linejoin": n.strokeLinejoin
  }, null)]);
}), Ho = at("minus", !1, function(n) {
  return p("svg", {
    width: n.size,
    height: n.size,
    viewBox: "0 0 48 48",
    fill: "none"
  }, [p("path", {
    d: "M10.5 24L38.5 24",
    stroke: n.colors[0],
    "stroke-width": n.strokeWidth,
    "stroke-linecap": n.strokeLinecap,
    "stroke-linejoin": n.strokeLinejoin
  }, null)]);
}), bl = at("more", !1, function(n) {
  return p("svg", {
    width: n.size,
    height: n.size,
    viewBox: "0 0 48 48",
    fill: "none"
  }, [p("circle", {
    cx: "12",
    cy: "24",
    r: "3",
    fill: n.colors[0]
  }, null), p("circle", {
    cx: "24",
    cy: "24",
    r: "3",
    fill: n.colors[0]
  }, null), p("circle", {
    cx: "36",
    cy: "24",
    r: "3",
    fill: n.colors[0]
  }, null)]);
}), Sl = at("mosaic", !0, function(n) {
  return p("svg", {
    width: n.size,
    height: n.size,
    viewBox: "0 0 48 48",
    fill: "none"
  }, [p("path", {
    d: "M44 36H36V44H44V36Z",
    fill: n.colors[0]
  }, null), p("path", {
    d: "M28 36H20V44H28V36Z",
    fill: n.colors[0]
  }, null), p("path", {
    d: "M12 36H4V44H12V36Z",
    fill: n.colors[0]
  }, null), p("path", {
    d: "M44 20H36V28H44V20Z",
    fill: n.colors[0]
  }, null), p("path", {
    d: "M28 20H20V28H28V20Z",
    fill: n.colors[0]
  }, null), p("path", {
    d: "M12 20H4V28H12V20Z",
    fill: n.colors[0]
  }, null), p("path", {
    d: "M44 4H36V12H44V4Z",
    fill: n.colors[0]
  }, null), p("path", {
    d: "M28 4H20V12H28V4Z",
    fill: n.colors[0]
  }, null), p("path", {
    d: "M12 4H4V12H12V4Z",
    fill: n.colors[0]
  }, null), p("path", {
    d: "M20 12H12V20H20V12Z",
    fill: n.colors[0]
  }, null), p("path", {
    d: "M20 28H12V36H20V28Z",
    fill: n.colors[0]
  }, null), p("path", {
    d: "M36 12H28V20H36V12Z",
    fill: n.colors[0]
  }, null), p("path", {
    d: "M36 28H28V36H36V28Z",
    fill: n.colors[0]
  }, null)]);
}), Cl = at("move-one", !0, function(n) {
  return p("svg", {
    width: n.size,
    height: n.size,
    viewBox: "0 0 48 48",
    fill: "none"
  }, [p("path", {
    d: "M8 6L43 25L24 27L13.9948 44L8 6Z",
    fill: n.colors[1],
    stroke: n.colors[0],
    "stroke-width": n.strokeWidth,
    "stroke-linejoin": n.strokeLinejoin
  }, null)]);
}), Ml = at("picture", !0, function(n) {
  return p("svg", {
    width: n.size,
    height: n.size,
    viewBox: "0 0 48 48",
    fill: "none"
  }, [p("path", {
    d: "M39 6H9C7.34315 6 6 7.34315 6 9V39C6 40.6569 7.34315 42 9 42H39C40.6569 42 42 40.6569 42 39V9C42 7.34315 40.6569 6 39 6Z",
    stroke: n.colors[0],
    "stroke-width": n.strokeWidth,
    "stroke-linecap": n.strokeLinecap,
    "stroke-linejoin": n.strokeLinejoin
  }, null), p("path", {
    d: "M18 23C20.7614 23 23 20.7614 23 18C23 15.2386 20.7614 13 18 13C15.2386 13 13 15.2386 13 18C13 20.7614 15.2386 23 18 23Z",
    fill: n.colors[1],
    stroke: n.colors[0],
    "stroke-width": n.strokeWidth,
    "stroke-linecap": n.strokeLinecap,
    "stroke-linejoin": n.strokeLinejoin
  }, null), p("path", {
    d: "M27.7901 26.2194C28.6064 25.1269 30.2528 25.1538 31.0329 26.2725L39.8077 38.8561C40.7322 40.182 39.7835 42.0001 38.1671 42.0001H16L27.7901 26.2194Z",
    stroke: n.colors[0],
    "stroke-width": n.strokeWidth,
    "stroke-linecap": n.strokeLinecap,
    "stroke-linejoin": n.strokeLinejoin
  }, null)]);
}), to = at("pin", !0, function(n) {
  return p("svg", {
    width: n.size,
    height: n.size,
    viewBox: "0 0 48 48",
    fill: "none"
  }, [p("g", {
    "clip-path": "url(#" + n.id + "1c742167)"
  }, [p("path", {
    d: "M10.6963 17.5042C13.3347 14.8657 16.4701 14.9387 19.8781 16.8076L32.62 9.74509L31.8989 4.78683L43.2126 16.1005L38.2656 15.3907L31.1918 28.1214C32.9752 31.7589 33.1337 34.6647 30.4953 37.3032C30.4953 37.3032 26.235 33.0429 22.7171 29.525L6.44305 41.5564L18.4382 25.2461C14.9202 21.7281 10.6963 17.5042 10.6963 17.5042Z",
    fill: n.colors[1],
    stroke: n.colors[0],
    "stroke-width": n.strokeWidth,
    "stroke-linejoin": n.strokeLinejoin
  }, null)]), p("defs", null, [p("clipPath", {
    id: n.id + "1c742167"
  }, [p("rect", {
    width: "48",
    height: "48",
    fill: n.colors[2]
  }, null)])])]);
}), eo = at("platte", !0, function(n) {
  return p("svg", {
    width: n.size,
    height: n.size,
    viewBox: "0 0 48 48",
    fill: "none"
  }, [p("path", {
    d: "M24 44C29.9601 44 26.3359 35.136 30 31C33.1264 27.4709 44 29.0856 44 24C44 12.9543 35.0457 4 24 4C12.9543 4 4 12.9543 4 24C4 35.0457 12.9543 44 24 44Z",
    fill: n.colors[1],
    stroke: n.colors[0],
    "stroke-width": n.strokeWidth,
    "stroke-linejoin": n.strokeLinejoin
  }, null), p("path", {
    d: "M28 17C29.6569 17 31 15.6569 31 14C31 12.3431 29.6569 11 28 11C26.3431 11 25 12.3431 25 14C25 15.6569 26.3431 17 28 17Z",
    fill: n.colors[3],
    stroke: n.colors[2],
    "stroke-width": n.strokeWidth,
    "stroke-linejoin": n.strokeLinejoin
  }, null), p("path", {
    d: "M16 21C17.6569 21 19 19.6569 19 18C19 16.3431 17.6569 15 16 15C14.3431 15 13 16.3431 13 18C13 19.6569 14.3431 21 16 21Z",
    fill: n.colors[3],
    stroke: n.colors[2],
    "stroke-width": n.strokeWidth,
    "stroke-linejoin": n.strokeLinejoin
  }, null), p("path", {
    d: "M17 34C18.6569 34 20 32.6569 20 31C20 29.3431 18.6569 28 17 28C15.3431 28 14 29.3431 14 31C14 32.6569 15.3431 34 17 34Z",
    fill: n.colors[3],
    stroke: n.colors[2],
    "stroke-width": n.strokeWidth,
    "stroke-linejoin": n.strokeLinejoin
  }, null)]);
}), Qn = at("pushpin", !1, function(n) {
  return p("svg", {
    width: n.size,
    height: n.size,
    viewBox: "0 0 48 48",
    fill: "none"
  }, [p("path", {
    d: "M32 4H16L20 7L16 20C16 20 10 24 10 28H20L24 44L28 28H38C38 24 34 21.1667 32 20L28 7L32 4Z",
    fill: n.colors[1],
    stroke: n.colors[0],
    "stroke-width": n.strokeWidth,
    "stroke-linecap": n.strokeLinecap,
    "stroke-linejoin": n.strokeLinejoin
  }, null)]);
}), _l = at("rectangle-one", !1, function(n) {
  return p("svg", {
    width: n.size,
    height: n.size,
    viewBox: "0 0 48 48",
    fill: "none"
  }, [p("path", {
    d: "M42 8H6C4.89543 8 4 8.89543 4 10V38C4 39.1046 4.89543 40 6 40H42C43.1046 40 44 39.1046 44 38V10C44 8.89543 43.1046 8 42 8Z",
    fill: n.colors[1],
    stroke: n.colors[0],
    "stroke-width": n.strokeWidth
  }, null)]);
}), Tl = at("redo", !0, function(n) {
  return p("svg", {
    width: n.size,
    height: n.size,
    viewBox: "0 0 48 48",
    fill: "none"
  }, [p("path", {
    d: "M36.7279 36.7279C33.4706 39.9853 28.9706 42 24 42C14.0589 42 6 33.9411 6 24C6 14.0589 14.0589 6 24 6C28.9706 6 33.4706 8.01472 36.7279 11.2721C38.3859 12.9301 42 17 42 17",
    stroke: n.colors[0],
    "stroke-width": n.strokeWidth,
    "stroke-linecap": n.strokeLinecap,
    "stroke-linejoin": n.strokeLinejoin
  }, null), p("path", {
    d: "M42 8V17H33",
    stroke: n.colors[0],
    "stroke-width": n.strokeWidth,
    "stroke-linecap": n.strokeLinecap,
    "stroke-linejoin": n.strokeLinejoin
  }, null)]);
}), zl = at("refresh", !0, function(n) {
  return p("svg", {
    width: n.size,
    height: n.size,
    viewBox: "0 0 48 48",
    fill: "none"
  }, [p("path", {
    d: "M42 8V24",
    stroke: n.colors[0],
    "stroke-width": n.strokeWidth,
    "stroke-linecap": n.strokeLinecap,
    "stroke-linejoin": n.strokeLinejoin
  }, null), p("path", {
    d: "M6 24L6 40",
    stroke: n.colors[0],
    "stroke-width": n.strokeWidth,
    "stroke-linecap": n.strokeLinecap,
    "stroke-linejoin": n.strokeLinejoin
  }, null), p("path", {
    d: "M42 24C42 14.0589 33.9411 6 24 6C18.9145 6 14.3216 8.10896 11.0481 11.5M6 24C6 33.9411 14.0589 42 24 42C28.8556 42 33.2622 40.0774 36.5 36.9519",
    stroke: n.colors[0],
    "stroke-width": n.strokeWidth,
    "stroke-linecap": n.strokeLinecap,
    "stroke-linejoin": n.strokeLinejoin
  }, null)]);
}), Rl = at("return", !0, function(n) {
  return p("svg", {
    width: n.size,
    height: n.size,
    viewBox: "0 0 48 48",
    fill: "none"
  }, [p("path", {
    d: "M12.9998 8L6 14L12.9998 21",
    stroke: n.colors[0],
    "stroke-width": n.strokeWidth,
    "stroke-linecap": n.strokeLinecap,
    "stroke-linejoin": n.strokeLinejoin
  }, null), p("path", {
    d: "M6 14H28.9938C35.8768 14 41.7221 19.6204 41.9904 26.5C42.2739 33.7696 36.2671 40 28.9938 40H11.9984",
    stroke: n.colors[0],
    "stroke-width": n.strokeWidth,
    "stroke-linecap": n.strokeLinecap,
    "stroke-linejoin": n.strokeLinejoin
  }, null)]);
}), Ll = at("round", !1, function(n) {
  return p("svg", {
    width: n.size,
    height: n.size,
    viewBox: "0 0 48 48",
    fill: "none"
  }, [p("circle", {
    cx: "24",
    cy: "24",
    r: "20",
    fill: n.colors[1],
    stroke: n.colors[0],
    "stroke-width": n.strokeWidth
  }, null)]);
}), no = at("save", !0, function(n) {
  return p("svg", {
    width: n.size,
    height: n.size,
    viewBox: "0 0 48 48",
    fill: "none"
  }, [p("path", {
    d: "M6 9C6 7.34315 7.34315 6 9 6H34.2814L42 13.2065V39C42 40.6569 40.6569 42 39 42H9C7.34315 42 6 40.6569 6 39V9Z",
    fill: n.colors[1],
    stroke: n.colors[0],
    "stroke-width": n.strokeWidth,
    "stroke-linejoin": n.strokeLinejoin
  }, null), p("path", {
    "fill-rule": "evenodd",
    "clip-rule": "evenodd",
    d: "M24.0083 6L24 13.3846C24 13.7245 23.5523 14 23 14H15C14.4477 14 14 13.7245 14 13.3846L14 6",
    fill: n.colors[3]
  }, null), p("path", {
    d: "M24.0083 6L24 13.3846C24 13.7245 23.5523 14 23 14H15C14.4477 14 14 13.7245 14 13.3846L14 6H24.0083Z",
    stroke: n.colors[2],
    "stroke-width": n.strokeWidth,
    "stroke-linejoin": n.strokeLinejoin
  }, null), p("path", {
    d: "M9 6H34.2814",
    stroke: n.colors[0],
    "stroke-width": n.strokeWidth,
    "stroke-linecap": n.strokeLinecap,
    "stroke-linejoin": n.strokeLinejoin
  }, null), p("path", {
    d: "M14 26H34",
    stroke: n.colors[2],
    "stroke-width": n.strokeWidth,
    "stroke-linecap": n.strokeLinecap,
    "stroke-linejoin": n.strokeLinejoin
  }, null), p("path", {
    d: "M14 34H24.0083",
    stroke: n.colors[2],
    "stroke-width": n.strokeWidth,
    "stroke-linecap": n.strokeLinecap,
    "stroke-linejoin": n.strokeLinejoin
  }, null)]);
}), Pl = at("square", !1, function(n) {
  return p("svg", {
    width: n.size,
    height: n.size,
    viewBox: "0 0 48 48",
    fill: "none"
  }, [p("path", {
    d: "M39 6H9C7.34315 6 6 7.34315 6 9V39C6 40.6569 7.34315 42 9 42H39C40.6569 42 42 40.6569 42 39V9C42 7.34315 40.6569 6 39 6Z",
    fill: n.colors[1],
    stroke: n.colors[0],
    "stroke-width": n.strokeWidth
  }, null)]);
}), Ve = at("text-recognition", !1, function(n) {
  return p("svg", {
    width: n.size,
    height: n.size,
    viewBox: "0 0 48 48",
    fill: "none"
  }, [p("path", {
    d: "M6 33V39C6 40.6569 7.34315 42 9 42H15",
    stroke: n.colors[0],
    "stroke-width": n.strokeWidth,
    "stroke-linecap": n.strokeLinecap,
    "stroke-linejoin": n.strokeLinejoin
  }, null), p("path", {
    d: "M33 42H39C40.6569 42 42 40.6569 42 39V33",
    stroke: n.colors[0],
    "stroke-width": n.strokeWidth,
    "stroke-linecap": n.strokeLinecap,
    "stroke-linejoin": n.strokeLinejoin
  }, null), p("path", {
    d: "M42 15V9C42 7.34315 40.6569 6 39 6H33",
    stroke: n.colors[0],
    "stroke-width": n.strokeWidth,
    "stroke-linecap": n.strokeLinecap,
    "stroke-linejoin": n.strokeLinejoin
  }, null), p("path", {
    d: "M6 15V9C6 7.34315 7.34315 6 9 6H15",
    stroke: n.colors[0],
    "stroke-width": n.strokeWidth,
    "stroke-linecap": n.strokeLinecap,
    "stroke-linejoin": n.strokeLinejoin
  }, null), p("path", {
    d: "M24 15V35",
    stroke: n.colors[0],
    "stroke-width": n.strokeWidth,
    "stroke-linecap": n.strokeLinecap,
    "stroke-linejoin": n.strokeLinejoin
  }, null), p("path", {
    d: "M17 15H24H31",
    stroke: n.colors[0],
    "stroke-width": n.strokeWidth,
    "stroke-linecap": n.strokeLinecap,
    "stroke-linejoin": n.strokeLinejoin
  }, null)]);
}), jo = at("translate", !0, function(n) {
  return p("svg", {
    width: n.size,
    height: n.size,
    viewBox: "0 0 48 48",
    fill: "none"
  }, [p("path", {
    d: "M28.2857 37H39.7143M42 42L39.7143 37L42 42ZM26 42L28.2857 37L26 42ZM28.2857 37L34 24L39.7143 37H28.2857Z",
    stroke: n.colors[0],
    "stroke-width": n.strokeWidth,
    "stroke-linecap": n.strokeLinecap,
    "stroke-linejoin": n.strokeLinejoin
  }, null), p("path", {
    d: "M16 6L17 9",
    stroke: n.colors[0],
    "stroke-width": n.strokeWidth,
    "stroke-linecap": n.strokeLinecap,
    "stroke-linejoin": n.strokeLinejoin
  }, null), p("path", {
    d: "M6 11H28",
    stroke: n.colors[0],
    "stroke-width": n.strokeWidth,
    "stroke-linecap": n.strokeLinecap,
    "stroke-linejoin": n.strokeLinejoin
  }, null), p("path", {
    d: "M10 16C10 16 11.7895 22.2609 16.2632 25.7391C20.7368 29.2174 28 32 28 32",
    stroke: n.colors[0],
    "stroke-width": n.strokeWidth,
    "stroke-linecap": n.strokeLinecap,
    "stroke-linejoin": n.strokeLinejoin
  }, null), p("path", {
    d: "M24 11C24 11 22.2105 19.2174 17.7368 23.7826C13.2632 28.3478 6 32 6 32",
    stroke: n.colors[0],
    "stroke-width": n.strokeWidth,
    "stroke-linecap": n.strokeLinecap,
    "stroke-linejoin": n.strokeLinejoin
  }, null)]);
}), Al = at("write", !0, function(n) {
  return p("svg", {
    width: n.size,
    height: n.size,
    viewBox: "0 0 48 48",
    fill: "none"
  }, [p("path", {
    d: "M5.32497 43.4996L13.81 43.4998L44.9227 12.3871L36.4374 3.90186L5.32471 35.0146L5.32497 43.4996Z",
    fill: n.colors[1],
    stroke: n.colors[0],
    "stroke-width": n.strokeWidth,
    "stroke-linejoin": n.strokeLinejoin
  }, null), p("path", {
    d: "M27.9521 12.3872L36.4374 20.8725",
    stroke: n.colors[0],
    "stroke-width": n.strokeWidth,
    "stroke-linecap": n.strokeLinecap,
    "stroke-linejoin": n.strokeLinejoin
  }, null)]);
}), Dl = { class: "toolbar-panel first-panel" }, Il = { class: "tool-section" }, Ol = ["onClick", "title", "aria-pressed"], El = { class: "action-section" }, $l = ["disabled", "title"], Wl = ["disabled", "title"], Bl = ["disabled", "title"], Nl = ["title"], Hl = ["title"], jl = ["title"], Fl = {
  key: 0,
  class: "toolbar-panel second-panel"
}, Vl = { class: "style-section" }, Ul = {
  key: 0,
  class: "style-group opacity-group"
}, Yl = { class: "style-label" }, Zl = ["value", "title", "aria-label"], Xl = { class: "style-value" }, Gl = {
  key: 1,
  class: "style-group"
}, ql = { class: "style-label" }, Kl = { class: "line-width-selector" }, Jl = ["onClick", "title", "aria-pressed"], Ql = { class: "style-value" }, tc = {
  key: 2,
  class: "style-divider"
}, ec = {
  key: 3,
  class: "style-group opacity-group"
}, nc = { class: "style-label" }, ic = ["value", "title", "aria-label"], oc = { class: "style-value" }, sc = {
  key: 4,
  class: "style-divider"
}, ac = {
  key: 5,
  class: "style-group color-picker-group"
}, rc = { class: "style-label" }, lc = { class: "color-row" }, cc = ["onClick", "title", "aria-pressed"], hc = { class: "custom-color-wrapper" }, uc = ["title"], dc = ["value", "title", "aria-label"], gc = {
  key: 6,
  class: "style-group"
}, fc = { class: "style-label" }, mc = { class: "text-size-selector" }, pc = ["onClick", "title", "aria-pressed"], wc = { class: "style-value" }, yc = {
  key: 7,
  class: "style-group"
}, vc = { class: "style-label" }, xc = { class: "mosaic-size-selector" }, kc = ["onClick", "title", "aria-pressed"], bc = { class: "style-value" }, Sc = {
  key: 8,
  class: "style-group"
}, Cc = { class: "style-label" }, Mc = { class: "translate-engine-selector" }, _c = ["onClick", "title", "aria-pressed"], Tc = /* @__PURE__ */ Pt({
  __name: "ToolbarSection",
  props: {
    currentTool: {},
    currentColor: {},
    currentLineWidth: {},
    currentOpacity: {},
    currentTextSize: {},
    currentMosaicSize: {},
    currentSelectionCornerRadius: { default: 0 },
    canUndo: { type: Boolean },
    canRedo: { type: Boolean },
    canDelete: { type: Boolean },
    currentTranslateEngine: { default: "bing" }
  },
  emits: ["tool-select", "color-change", "line-width-change", "opacity-change", "text-size-change", "mosaic-size-change", "selection-corner-radius-change", "translate-engine-change", "undo", "redo", "delete", "save", "confirm", "cancel"],
  setup(n, { expose: t, emit: e }) {
    const i = W(null), { t: o } = So(), s = n, a = e, r = I(() => [
      { type: m.Select, icon: Cl, title: o("screenshot.select") },
      { type: m.Rectangle, icon: _l, title: o("screenshot.rectangle") },
      { type: m.Ellipse, icon: Ll, title: o("screenshot.ellipse") },
      { type: m.Line, icon: Ho, title: o("screenshot.line") },
      { type: m.Arrow, icon: pl, title: o("screenshot.arrow") },
      { type: m.Pen, icon: Al, title: o("screenshot.pen") },
      { type: m.Mosaic, icon: Sl, title: o("screenshot.mosaic") },
      { type: m.Text, icon: vl, title: o("screenshot.text") },
      { type: m.Marker, icon: kl, title: o("screenshot.marker") },
      { type: m.ColorPicker, icon: eo, title: o("screenshot.colorPicker") },
      { type: m.Ocr, icon: Ve, title: o("screenshot.ocr") },
      { type: m.Translate, icon: jo, title: o("screenshot.translate") },
      { type: m.Pin, icon: Qn, title: o("screenshot.pin") }
    ]), l = I(() => [
      { value: "google", label: "Google", short: "G" },
      { value: "bing", label: o("translate.bingTranslate"), short: "B" },
      { value: "offline", label: o("translate.offlineTranslate"), short: o("translate.offlineMark") },
      { value: "local-ai", label: o("translate.localAiTranslate"), short: "AI" }
    ]), h = [2, 3, 5, 8], u = [
      "#ff4444",
      "#f79009",
      "#fdb022",
      "#12b76a",
      "#06b6d4",
      "#2e90fa",
      "#7a5af8",
      "#d444f1",
      "#111827"
    ], d = [12, 14, 16, 18, 20, 24], x = [8, 12, 16, 20], w = I(() => ![m.ColorPicker, m.Ocr, m.Pin].includes(s.currentTool)), S = I(
      () => s.currentTool === m.Select
    ), f = I(
      () => [m.Rectangle, m.Ellipse, m.Line, m.Arrow, m.Pen].includes(s.currentTool)
    ), v = I(
      () => [m.Rectangle, m.Ellipse, m.Line, m.Arrow, m.Pen, m.Text, m.Marker].includes(s.currentTool)
    ), P = I(
      () => [
        m.Rectangle,
        m.Ellipse,
        m.Line,
        m.Arrow,
        m.Pen,
        m.Mosaic,
        m.Text,
        m.Marker
      ].includes(s.currentTool)
    ), N = I(
      () => s.currentTool === m.Text || s.currentTool === m.Marker
    ), T = I(() => s.currentTool === m.Mosaic), U = I(() => s.currentTool === m.Translate), Z = (O) => a("tool-select", O), X = (O) => a("color-change", O), j = (O) => a("line-width-change", O), F = (O) => {
      a("opacity-change", Number(O.target.value) / 100);
    }, tt = (O) => a("text-size-change", O), q = (O) => a("mosaic-size-change", O), J = (O) => {
      a(
        "selection-corner-radius-change",
        Number(O.target.value)
      );
    }, et = () => a("undo"), st = () => a("redo"), yt = () => a("delete"), it = () => a("save"), G = () => a("confirm"), ot = () => a("cancel"), pt = (O) => {
      a("translate-engine-change", O);
    }, kt = (O) => {
      X(O);
    }, ht = (O) => {
      const Tt = O.target;
      Tt.value && X(Tt.value);
    }, bt = () => {
      const O = i.value?.getBoundingClientRect();
      return {
        width: O?.width ?? 590,
        height: O?.height ?? 50
      };
    };
    return Ee(() => s.currentTool, () => {
      we(() => {
        window.dispatchEvent(new CustomEvent("screenshot-toolbar-resize", {
          detail: bt()
        }));
      });
    }, { immediate: !0 }), t({
      getToolbarSize: bt
    }), (O, Tt) => (L(), D(
      "div",
      {
        ref_key: "toolbarContainerRef",
        ref: i,
        class: "toolbar-container"
      },
      [
        V(" 第一个面板：工具选择 + 操作按钮 "),
        k("div", Dl, [
          V(" 工具选择区域 "),
          k("div", Il, [
            (L(!0), D(
              Bt,
              null,
              qt(r.value, (H) => (L(), D("button", {
                key: H.type,
                onClick: (Mt) => Z(H.type),
                class: ct(["tool-btn", { active: O.currentTool === H.type }]),
                title: H.title,
                "aria-pressed": O.currentTool === H.type
              }, [
                (L(), Lt(ce(H.icon), {
                  theme: "outline",
                  size: "18",
                  strokeWidth: 2.5
                }))
              ], 10, Ol))),
              128
              /* KEYED_FRAGMENT */
            ))
          ]),
          V(" 分隔线 "),
          Tt[0] || (Tt[0] = k(
            "div",
            { class: "toolbar-divider" },
            null,
            -1
            /* HOISTED */
          )),
          V(" 操作按钮区域 "),
          k("div", El, [
            k("button", {
              onClick: et,
              disabled: !O.canUndo,
              class: "action-btn undo",
              title: M(o)("screenshot.undo")
            }, [
              p(M(Rl), {
                theme: "outline",
                size: "18",
                strokeWidth: 2.5
              })
            ], 8, $l),
            k("button", {
              onClick: st,
              disabled: !O.canRedo,
              class: "action-btn redo",
              title: M(o)("screenshot.redo")
            }, [
              p(M(xl), {
                theme: "outline",
                size: "18",
                strokeWidth: 2.5
              })
            ], 8, Wl),
            k("button", {
              onClick: yt,
              disabled: !O.canDelete,
              class: "action-btn delete",
              title: M(o)("screenshot.delete")
            }, [
              p(M(wl), {
                theme: "outline",
                size: "18",
                strokeWidth: 2.5
              })
            ], 8, Bl),
            k("button", {
              onClick: ot,
              class: "action-btn cancel",
              title: M(o)("screenshot.cancel")
            }, [
              p(M(Jn), {
                theme: "outline",
                size: "18",
                strokeWidth: 2.5
              })
            ], 8, Nl),
            k("button", {
              onClick: it,
              class: "action-btn save",
              title: M(o)("screenshot.save")
            }, [
              p(M(yl), {
                theme: "outline",
                size: "18",
                strokeWidth: 2.5
              })
            ], 8, Hl),
            k("button", {
              onClick: G,
              class: "action-btn confirm",
              title: M(o)("screenshot.confirm")
            }, [
              p(M(Kn), {
                theme: "outline",
                size: "18",
                strokeWidth: 2.5
              })
            ], 8, jl)
          ])
        ]),
        V(" 第二个面板：样式设置区域 "),
        w.value ? (L(), D("div", Fl, [
          k("div", Vl, [
            S.value ? (L(), D("div", Ul, [
              k(
                "span",
                Yl,
                Y(M(o)("screenshot.cornerRadius")),
                1
                /* TEXT */
              ),
              k("input", {
                class: "opacity-slider",
                type: "range",
                min: "0",
                max: "80",
                step: "2",
                value: O.currentSelectionCornerRadius,
                style: gt({
                  "--opacity-color": "#2e90fa",
                  "--opacity-progress": `${O.currentSelectionCornerRadius / 80 * 100}%`
                }),
                title: `${O.currentSelectionCornerRadius}px`,
                "aria-label": M(o)("screenshot.cornerRadius"),
                onInput: J
              }, null, 44, Zl),
              k(
                "span",
                Xl,
                Y(O.currentSelectionCornerRadius) + " px",
                1
                /* TEXT */
              )
            ])) : V("v-if", !0),
            V(" 线宽设置 "),
            f.value ? (L(), D("div", Gl, [
              k(
                "span",
                ql,
                Y(M(o)("screenshot.lineWidth")),
                1
                /* TEXT */
              ),
              k("div", Kl, [
                (L(), D(
                  Bt,
                  null,
                  qt(h, (H) => k("button", {
                    key: H,
                    onClick: (Mt) => j(H),
                    class: ct(["width-btn", { active: O.currentLineWidth === H }]),
                    title: `${H}px`,
                    "aria-pressed": O.currentLineWidth === H
                  }, [
                    k(
                      "span",
                      {
                        class: "line-preview",
                        style: gt({ height: `${H}px`, backgroundColor: O.currentColor })
                      },
                      null,
                      4
                      /* STYLE */
                    )
                  ], 10, Jl)),
                  64
                  /* STABLE_FRAGMENT */
                ))
              ]),
              k(
                "span",
                Ql,
                Y(O.currentLineWidth) + " px",
                1
                /* TEXT */
              )
            ])) : V("v-if", !0),
            f.value && v.value ? (L(), D("div", tc)) : V("v-if", !0),
            V(" 不透明度设置 "),
            P.value ? (L(), D("div", ec, [
              k(
                "span",
                nc,
                Y(M(o)("screenshot.opacity")),
                1
                /* TEXT */
              ),
              k("input", {
                class: "opacity-slider",
                type: "range",
                min: "10",
                max: "100",
                step: "5",
                value: Math.round(O.currentOpacity * 100),
                style: gt({
                  "--opacity-color": O.currentColor,
                  "--opacity-progress": `${Math.round(O.currentOpacity * 100)}%`
                }),
                title: `${Math.round(O.currentOpacity * 100)}%`,
                "aria-label": M(o)("screenshot.opacity"),
                onInput: F
              }, null, 44, ic),
              k(
                "span",
                oc,
                Y(Math.round(O.currentOpacity * 100)) + "%",
                1
                /* TEXT */
              )
            ])) : V("v-if", !0),
            P.value && v.value ? (L(), D("div", sc)) : V("v-if", !0),
            V(" 颜色设置 "),
            v.value ? (L(), D("div", ac, [
              k(
                "span",
                rc,
                Y(M(o)("screenshot.color")),
                1
                /* TEXT */
              ),
              k("div", lc, [
                (L(), D(
                  Bt,
                  null,
                  qt(u, (H) => k("button", {
                    key: H,
                    onClick: (Mt) => kt(H),
                    class: ct(["color-btn", { active: O.currentColor === H }]),
                    style: gt({ backgroundColor: H }),
                    title: H,
                    "aria-pressed": O.currentColor === H
                  }, null, 14, cc)),
                  64
                  /* STABLE_FRAGMENT */
                )),
                k("div", hc, [
                  k("button", {
                    class: ct(["color-btn custom-color-btn", { active: !u.includes(O.currentColor) }]),
                    title: M(o)("screenshot.customColor")
                  }, [
                    p(M(eo), {
                      theme: "outline",
                      size: "13",
                      strokeWidth: 2.5
                    })
                  ], 10, uc),
                  k("input", {
                    type: "color",
                    onChange: ht,
                    value: O.currentColor,
                    class: "color-input-hidden",
                    title: M(o)("screenshot.customColor"),
                    "aria-label": M(o)("screenshot.customColor")
                  }, null, 40, dc)
                ])
              ])
            ])) : V("v-if", !0),
            V(" 文字大小设置 "),
            N.value ? (L(), D("div", gc, [
              k(
                "span",
                fc,
                Y(M(o)("screenshot.fontSize")),
                1
                /* TEXT */
              ),
              k("div", mc, [
                (L(), D(
                  Bt,
                  null,
                  qt(d, (H) => k("button", {
                    key: H,
                    onClick: (Mt) => tt(H),
                    class: ct(["size-btn", { active: O.currentTextSize === H }]),
                    title: `${H}px`,
                    "aria-pressed": O.currentTextSize === H
                  }, [
                    k(
                      "span",
                      {
                        class: "size-text",
                        style: gt({ fontSize: `${Math.min(H, 18)}px` })
                      },
                      "A",
                      4
                      /* STYLE */
                    )
                  ], 10, pc)),
                  64
                  /* STABLE_FRAGMENT */
                ))
              ]),
              k(
                "span",
                wc,
                Y(O.currentTextSize) + " px",
                1
                /* TEXT */
              )
            ])) : V("v-if", !0),
            V(" 马赛克大小设置 "),
            T.value ? (L(), D("div", yc, [
              k(
                "span",
                vc,
                Y(M(o)("screenshot.mosaicSize")),
                1
                /* TEXT */
              ),
              k("div", xc, [
                (L(), D(
                  Bt,
                  null,
                  qt(x, (H) => k("button", {
                    key: H,
                    onClick: (Mt) => q(H),
                    class: ct(["size-btn", { active: O.currentMosaicSize === H }]),
                    title: `${M(o)("screenshot.brush")} ${H * 3}px`,
                    "aria-pressed": O.currentMosaicSize === H
                  }, [
                    k(
                      "span",
                      {
                        class: "mosaic-preview",
                        style: gt({
                          width: `${Math.min(H * 1.25, 18)}px`,
                          height: `${Math.min(H * 1.25, 18)}px`
                        })
                      },
                      null,
                      4
                      /* STYLE */
                    )
                  ], 10, kc)),
                  64
                  /* STABLE_FRAGMENT */
                ))
              ]),
              k(
                "span",
                bc,
                Y(O.currentMosaicSize * 3) + " px",
                1
                /* TEXT */
              )
            ])) : V("v-if", !0),
            V(" 翻译引擎选择 "),
            U.value ? (L(), D("div", Sc, [
              k(
                "span",
                Cc,
                Y(M(o)("screenshot.engine")),
                1
                /* TEXT */
              ),
              k("div", Mc, [
                (L(!0), D(
                  Bt,
                  null,
                  qt(l.value, (H) => (L(), D("button", {
                    key: H.value,
                    onClick: (Mt) => pt(H.value),
                    class: ct(["engine-btn", { active: O.currentTranslateEngine === H.value }]),
                    title: H.label,
                    "aria-pressed": O.currentTranslateEngine === H.value
                  }, Y(H.short), 11, _c))),
                  128
                  /* KEYED_FRAGMENT */
                ))
              ])
            ])) : V("v-if", !0)
          ])
        ])) : V("v-if", !0)
      ],
      512
      /* NEED_PATCH */
    ));
  }
}), _n = (n, t) => {
  const e = n.__vccOpts || n;
  for (const [i, o] of t)
    e[i] = o;
  return e;
}, zc = /* @__PURE__ */ _n(Tc, [["__scopeId", "data-v-afb70887"]]), Rc = {
  class: "screenshot-container",
  ref: "containerRef"
}, Lc = {
  key: 0,
  class: "mask-layers"
}, Pc = {
  key: 1,
  class: "mask-full"
}, Ac = { class: "size-text" }, Dc = {
  key: 4,
  class: "loading-overlay"
}, Ic = /* @__PURE__ */ Pt({
  __name: "index",
  setup(n) {
    const t = W(), e = W(), i = W(null), o = W(null);
    let s = null;
    const a = W(!0), r = W(!1), l = W(""), h = W({ x: 0, y: 0 }), u = W(16), d = W(!1), x = W("bing"), w = W({ width: 590, height: 50 });
    let S = !1, f = null;
    const v = W({
      selectionRect: null,
      annotations: [],
      currentTool: m.Select,
      currentStyle: { color: "#ff4444", lineWidth: 3, opacity: 1 },
      textSize: 16,
      mosaicSize: 8,
      selectionCornerRadius: 0,
      hasSelection: !1,
      hasAnnotations: !1,
      canRedo: !1,
      selectedAnnotation: null,
      isDrawing: !1
      // 将绘制状态也放到响应式状态中
    }), P = W(), N = W(), T = I(() => v.value.isDrawing), U = I(() => {
      if (!v.value.selectionRect) return {};
      const { y: b } = v.value.selectionRect;
      return {
        top: "0",
        left: "0",
        right: "0",
        height: `${b}px`
      };
    }), Z = I(() => {
      if (!v.value.selectionRect) return {};
      const { y: b, height: B } = v.value.selectionRect;
      return {
        top: `${b + B}px`,
        left: "0",
        right: "0",
        bottom: "0"
      };
    }), X = I(() => {
      if (!v.value.selectionRect) return {};
      const { x: b, y: B, height: dt } = v.value.selectionRect;
      return {
        top: `${B}px`,
        left: "0",
        width: `${b}px`,
        height: `${dt}px`
      };
    }), j = I(() => {
      if (!v.value.selectionRect) return {};
      const { x: b, y: B, width: dt, height: ft } = v.value.selectionRect;
      return {
        top: `${B}px`,
        left: `${b + dt}px`,
        right: "0",
        height: `${ft}px`
      };
    }), F = I(() => {
      if (!v.value.selectionRect) return {};
      const { x: b, y: B, width: dt, height: ft } = v.value.selectionRect, K = 10, lt = 12, jt = Math.min(w.value.width, Math.max(0, window.innerWidth - K * 2)), Rt = Math.min(w.value.height, Math.max(0, window.innerHeight - K * 2)), Me = Math.max(K, window.innerHeight - Rt - K), se = Math.max(K, window.innerWidth - jt - K);
      let Jt;
      return B + ft + Rt + lt <= window.innerHeight - K ? Jt = B + ft + lt : B - Rt - lt >= K ? Jt = B - Rt - lt : Jt = B + ft - Rt - K, Jt = Math.min(Math.max(Jt, K), Me), {
        left: `${Math.min(Math.max(b + (dt - jt) / 2, K), se)}px`,
        top: `${Jt}px`
      };
    }), tt = I(() => {
      if (!v.value.selectionRect) return {};
      const { x: b, y: B, width: dt, height: ft } = v.value.selectionRect, K = 10;
      let lt = b - K, jt = B - K, Rt = "translateY(-100%)";
      return lt < 10 && (lt = b + dt + K, Rt = "translateY(-100%)"), jt < 30 && (jt = B + ft + K, Rt = "translateY(0)"), {
        left: `${lt}px`,
        top: `${jt}px`,
        transform: Rt
      };
    }), q = I(() => {
      if (!v.value.selectionRect) return "";
      const { width: b, height: B } = v.value.selectionRect;
      return `${Math.round(b)} × ${Math.round(B)}`;
    }), J = I(
      () => f?.getData().style.color || v.value.currentStyle.color
    ), et = I(() => {
      const b = f?.getData().type === m.Marker ? Xn(h.value, u.value) : Re(h.value);
      return {
        "--text-accent-color": J.value,
        left: `${b.x}px`,
        top: `${b.y}px`
      };
    }), st = (b) => {
      if (b === m.Pin && v.value.selectionRect) {
        yt();
        return;
      }
      if (b === m.Ocr && v.value.selectionRect) {
        it();
        return;
      }
      s?.setTool(b);
    }, yt = async () => {
      try {
        await s?.createPinWindow();
      } catch (b) {
        A.error("[截图] 创建贴图失败", b);
      }
    }, it = async () => {
      try {
        await s?.createOcrPinWindow();
      } catch (b) {
        A.error("[截图] 创建文字识别贴图失败", b);
      }
    }, G = (b) => {
      s?.updateStyle({ color: b });
    }, ot = (b) => {
      s?.updateStyle({ lineWidth: b });
    }, pt = (b) => {
      s?.updateStyle({ opacity: b });
    }, kt = (b) => {
      s?.updateTextSize(b);
    }, ht = (b) => {
      s?.updateMosaicSize(b);
    }, bt = (b) => {
      s?.updateSelectionCornerRadius(b);
    }, O = (b) => {
      x.value = b, s?.setTranslationEngine(b), s?.executeTranslation();
    }, Tt = () => {
      s?.undoAnnotation();
    }, H = () => {
      s?.redoAnnotation();
    }, Mt = () => {
      s?.deleteSelectedAnnotation();
    }, wt = async () => {
      try {
        await s?.processScreenshot("save"), rt();
      } catch (b) {
        const B = b?.message || b?.toString() || "保存失败";
        if (B.includes("保存已取消") || B.includes("cancelled"))
          return;
        A.error("保存截图时发生错误", B);
      }
    }, At = async () => {
      try {
        await s?.processScreenshot("copy"), rt();
      } catch {
      }
    }, Ot = () => {
      rt();
    }, ee = (b, B) => {
      if (B && [m.Text, m.Marker].includes(B.getData().type)) {
        const dt = B.getData();
        h.value = {
          x: dt.points[0].x,
          y: dt.points[0].y
        }, u.value = dt.fontSize || v.value.textSize;
      } else
        h.value = b, u.value = v.value.textSize;
      r.value = !0, f = B || null, B && s?.setEditingAnnotation(B), B && B.getData().text ? l.value = B.getData().text || "" : l.value = "", we(() => {
        e.value?.focus(), f && e.value?.select();
      });
    }, Ht = () => {
      const b = f?.getData().type === m.Marker;
      l.value.trim() || b ? f ? s?.updateTextAnnotation(f, l.value.trim()) : s?.createTextAnnotation(h.value, l.value) : f && s?.deleteAnnotation(f), _();
    }, _ = () => {
      r.value = !1, l.value = "", f && s?.clearEditingAnnotation(), f = null;
    }, nt = (b) => {
      navigator.clipboard && navigator.clipboard.writeText(b.hex).catch((B) => {
        A.error("[截图] 复制颜色到剪贴板失败", B);
      });
    }, ut = (b) => {
      if (b.key === "Meta" || b.key === "Win" || b.altKey && b.key === "Tab" || b.altKey && b.key === "F4") {
        b.preventDefault(), b.stopPropagation();
        return;
      }
      if (r.value && document.activeElement === e.value) {
        if (b.key === "Escape") {
          _(), b.preventDefault();
          return;
        }
        if (b.key === "Enter") {
          Ht(), b.preventDefault();
          return;
        }
        if (b.key === "Tab") {
          b.preventDefault();
          return;
        }
        return;
      }
      if (!v.value.selectionRect) {
        if (b.key === "Escape") {
          rt();
          return;
        }
        b.preventDefault(), b.stopPropagation();
        return;
      }
      if (s?.handleKeyDown(b)) {
        b.preventDefault();
        return;
      }
      const B = navigator.platform.toLowerCase().includes("mac");
      if ((B ? b.metaKey : b.ctrlKey) && b.key.toLowerCase() === "z") {
        b.shiftKey ? H() : Tt(), b.preventDefault();
        return;
      }
      if (!B && b.ctrlKey && b.key.toLowerCase() === "y") {
        H(), b.preventDefault();
        return;
      }
      if (b.key === "Escape") {
        rt();
        return;
      } else if (b.key === "Delete" || b.key === "Backspace") {
        Mt(), b.preventDefault();
        return;
      }
      ["Shift", "Control", "Alt", "Meta"].includes(b.key) || b.preventDefault();
    }, rt = async () => {
      if (!S) {
        S = !0, s?.destroy(), s = null;
        try {
          await C("cleanup_screenshot_resources");
        } catch {
          try {
            await C("clear_screenshot_background");
          } catch (B) {
            A.error("[截图] 清理后台缓存失败", B);
          }
        }
        v.value = {
          selectionRect: null,
          annotations: [],
          currentTool: m.Select,
          currentStyle: { color: "#ff4444", lineWidth: 3, opacity: 1 },
          textSize: 16,
          mosaicSize: 8,
          selectionCornerRadius: 0,
          hasSelection: !1,
          hasAnnotations: !1,
          canRedo: !1,
          selectedAnnotation: null,
          isDrawing: !1
        }, r.value = !1, l.value = "", f = null, d.value = !1, a.value = !0;
        try {
          await C("close_and_destroy_screenshot_window");
        } catch (b) {
          A.error("[截图] 销毁截图窗口失败，回退到 close()", b), await o.value?.close();
        } finally {
          S = !1;
        }
      }
    }, zt = () => {
      const b = s?.getState();
      b && (v.value = b);
    }, St = () => {
      const b = i.value?.getToolbarSize?.();
      b && (w.value = b);
    }, Zt = (b) => {
      const B = b.detail;
      B && (w.value = B);
    };
    return Qe(async () => {
      if (t.value) {
        o.value = new tn("screenshot"), s = new ul(
          t.value,
          zt,
          ee,
          nt
        ), document.addEventListener("keydown", ut), window.addEventListener("resize", St), window.addEventListener("screenshot-toolbar-resize", Zt), N.value = await yn("screenshot-close-requested", () => {
          rt();
        }), P.value = await yn("tauri://blur", () => {
          if (r.value && document.activeElement === e.value)
            return;
          const b = s?.getTranslationState();
          b?.isLoading || b?.isVisible || setTimeout(() => {
            if (!r.value || document.activeElement !== e.value) {
              const B = s?.getTranslationState();
              if (B?.isLoading || B?.isVisible)
                return;
              rt();
            }
          }, 100);
        }), await we(), St(), await o.value.emit("screenshot_ready");
        try {
          const b = await C("get_translation_engine");
          b && ["google", "bing", "offline", "local-ai"].includes(b) && (x.value = b, s?.setTranslationEngine(b));
        } catch (b) {
          A.error("[截图] 获取翻译引擎设置失败", b);
        }
        try {
          const b = await C("get_offline_model_activated");
          s?.setOfflineModelActivated(b);
        } catch (b) {
          A.error("[截图] 获取离线模型激活状态失败", b);
        }
      }
    }), bo(() => {
      s?.destroy(), s = null, document.removeEventListener("keydown", ut), window.removeEventListener("resize", St), window.removeEventListener("screenshot-toolbar-resize", Zt), P.value?.(), N.value?.(), P.value = void 0, N.value = void 0, o.value = null;
    }), (b, B) => (L(), D(
      "div",
      Rc,
      [
        V(" 遮罩层 "),
        v.value.selectionRect ? (L(), D("div", Lc, [
          k(
            "div",
            {
              class: "mask-top",
              style: gt(U.value)
            },
            null,
            4
            /* STYLE */
          ),
          k(
            "div",
            {
              class: "mask-bottom",
              style: gt(Z.value)
            },
            null,
            4
            /* STYLE */
          ),
          k(
            "div",
            {
              class: "mask-left",
              style: gt(X.value)
            },
            null,
            4
            /* STYLE */
          ),
          k(
            "div",
            {
              class: "mask-right",
              style: gt(j.value)
            },
            null,
            4
            /* STYLE */
          )
        ])) : (L(), D("div", Pc)),
        V(" 画布 "),
        k(
          "canvas",
          {
            ref_key: "canvasRef",
            ref: t,
            class: "drawing-canvas"
          },
          null,
          512
          /* NEED_PATCH */
        ),
        V(" 尺寸信息 "),
        v.value.selectionRect && a.value ? (L(), D(
          "div",
          {
            key: 2,
            class: "size-info",
            style: gt(tt.value)
          },
          [
            k(
              "span",
              Ac,
              Y(q.value),
              1
              /* TEXT */
            )
          ],
          4
          /* STYLE */
        )) : V("v-if", !0),
        V(" 工具栏 "),
        v.value.selectionRect && !T.value ? (L(), Lt(zc, {
          key: 3,
          ref_key: "toolbarRef",
          ref: i,
          style: gt(F.value),
          class: "toolbar",
          "current-tool": v.value.currentTool,
          "current-color": v.value.currentStyle.color,
          "current-line-width": v.value.currentStyle.lineWidth,
          "current-opacity": v.value.currentStyle.opacity,
          "current-text-size": v.value.textSize,
          "current-mosaic-size": v.value.mosaicSize,
          "current-selection-corner-radius": v.value.selectionCornerRadius,
          "can-undo": v.value.hasAnnotations,
          "can-redo": v.value.canRedo,
          "can-delete": !!v.value.selectedAnnotation,
          "current-translate-engine": x.value,
          onToolSelect: st,
          onColorChange: G,
          onLineWidthChange: ot,
          onOpacityChange: pt,
          onTextSizeChange: kt,
          onMosaicSizeChange: ht,
          onSelectionCornerRadiusChange: bt,
          onTranslateEngineChange: O,
          onUndo: Tt,
          onRedo: H,
          onDelete: Mt,
          onSave: wt,
          onConfirm: At,
          onCancel: Ot
        }, null, 8, ["style", "current-tool", "current-color", "current-line-width", "current-opacity", "current-text-size", "current-mosaic-size", "current-selection-corner-radius", "can-undo", "can-redo", "can-delete", "current-translate-engine"])) : V("v-if", !0),
        V(" 加载提示 - 仅在初始化时显示 "),
        d.value ? (L(), D("div", Dc, [
          B[1] || (B[1] = k(
            "div",
            { class: "loading-spinner" },
            null,
            -1
            /* HOISTED */
          )),
          k(
            "p",
            null,
            Y(b.$t("screenshotTool.loading")),
            1
            /* TEXT */
          )
        ])) : V("v-if", !0),
        V(" 文字输入框 "),
        r.value ? (L(), D(
          "div",
          {
            key: 5,
            class: "text-input-container",
            style: gt(et.value)
          },
          [
            Xe(k(
              "input",
              {
                ref_key: "textInputRef",
                ref: e,
                "onUpdate:modelValue": B[0] || (B[0] = (dt) => l.value = dt),
                type: "text",
                class: "text-input",
                style: gt({
                  color: J.value,
                  fontFamily: M(ie),
                  fontSize: u.value + "px",
                  height: u.value + "px",
                  lineHeight: u.value + "px"
                }),
                onKeydown: [
                  Wi(Ht, ["enter"]),
                  Wi(_, ["escape"])
                ],
                onBlur: Ht,
                autofocus: ""
              },
              null,
              36
              /* STYLE, NEED_HYDRATION */
            ), [
              [oa, l.value]
            ])
          ],
          4
          /* STYLE */
        )) : V("v-if", !0)
      ],
      512
      /* NEED_PATCH */
    ));
  }
}), Oc = /* @__PURE__ */ _n(Ic, [["__scopeId", "data-v-a3b3737e"]]), Ec = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Oc
}, Symbol.toStringTag, { value: "Module" })), Fo = Symbol(), fn = "el", $c = "is-", de = (n, t, e, i, o) => {
  let s = `${n}-${t}`;
  return e && (s += `-${e}`), i && (s += `__${i}`), o && (s += `--${o}`), s;
}, Vo = Symbol("namespaceContextKey"), Wc = (n) => {
  const t = n || (Ae() ? pe(Vo, W(fn)) : W(fn));
  return I(() => M(t) || fn);
}, ui = (n, t) => {
  const e = Wc(t);
  return {
    namespace: e,
    b: (f = "") => de(e.value, n, f, "", ""),
    e: (f) => f ? de(e.value, n, "", f, "") : "",
    m: (f) => f ? de(e.value, n, "", "", f) : "",
    be: (f, v) => f && v ? de(e.value, n, f, v, "") : "",
    em: (f, v) => f && v ? de(e.value, n, "", f, v) : "",
    bm: (f, v) => f && v ? de(e.value, n, f, "", v) : "",
    bem: (f, v, P) => f && v && P ? de(e.value, n, f, v, P) : "",
    is: (f, ...v) => {
      const P = v.length >= 1 ? v[0] : !0;
      return f && P ? `${$c}${f}` : "";
    },
    cssVar: (f) => {
      const v = {};
      for (const P in f)
        f[P] && (v[`--${e.value}-${P}`] = f[P]);
      return v;
    },
    cssVarName: (f) => `--${e.value}-${f}`,
    cssVarBlock: (f) => {
      const v = {};
      for (const P in f)
        f[P] && (v[`--${e.value}-${n}-${P}`] = f[P]);
      return v;
    },
    cssVarBlockName: (f) => `--${e.value}-${n}-${f}`
  };
};
/**
* @vue/shared v3.5.13
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/
const Bc = Object.prototype.hasOwnProperty, io = (n, t) => Bc.call(n, t), Ke = (n) => typeof n == "function", xe = (n) => typeof n == "string", Uo = (n) => n !== null && typeof n == "object";
var Nc = typeof global == "object" && global && global.Object === Object && global, Hc = typeof self == "object" && self && self.Object === Object && self, di = Nc || Hc || Function("return this")(), De = di.Symbol, Yo = Object.prototype, jc = Yo.hasOwnProperty, Fc = Yo.toString, je = De ? De.toStringTag : void 0;
function Vc(n) {
  var t = jc.call(n, je), e = n[je];
  try {
    n[je] = void 0;
    var i = !0;
  } catch {
  }
  var o = Fc.call(n);
  return i && (t ? n[je] = e : delete n[je]), o;
}
var Uc = Object.prototype, Yc = Uc.toString;
function Zc(n) {
  return Yc.call(n);
}
var Xc = "[object Null]", Gc = "[object Undefined]", oo = De ? De.toStringTag : void 0;
function Zo(n) {
  return n == null ? n === void 0 ? Gc : Xc : oo && oo in Object(n) ? Vc(n) : Zc(n);
}
function qc(n) {
  return n != null && typeof n == "object";
}
var Kc = "[object Symbol]";
function gi(n) {
  return typeof n == "symbol" || qc(n) && Zo(n) == Kc;
}
function Jc(n, t) {
  for (var e = -1, i = n == null ? 0 : n.length, o = Array(i); ++e < i; )
    o[e] = t(n[e], e, n);
  return o;
}
var fi = Array.isArray, so = De ? De.prototype : void 0, ao = so ? so.toString : void 0;
function Xo(n) {
  if (typeof n == "string")
    return n;
  if (fi(n))
    return Jc(n, Xo) + "";
  if (gi(n))
    return ao ? ao.call(n) : "";
  var t = n + "";
  return t == "0" && 1 / n == -1 / 0 ? "-0" : t;
}
function Go(n) {
  var t = typeof n;
  return n != null && (t == "object" || t == "function");
}
var Qc = "[object AsyncFunction]", th = "[object Function]", eh = "[object GeneratorFunction]", nh = "[object Proxy]";
function ih(n) {
  if (!Go(n))
    return !1;
  var t = Zo(n);
  return t == th || t == eh || t == Qc || t == nh;
}
var Fn = di["__core-js_shared__"], ro = function() {
  var n = /[^.]+$/.exec(Fn && Fn.keys && Fn.keys.IE_PROTO || "");
  return n ? "Symbol(src)_1." + n : "";
}();
function oh(n) {
  return !!ro && ro in n;
}
var sh = Function.prototype, ah = sh.toString;
function rh(n) {
  if (n != null) {
    try {
      return ah.call(n);
    } catch {
    }
    try {
      return n + "";
    } catch {
    }
  }
  return "";
}
var lh = /[\\^$.*+?()[\]{}|]/g, ch = /^\[object .+?Constructor\]$/, hh = Function.prototype, uh = Object.prototype, dh = hh.toString, gh = uh.hasOwnProperty, fh = RegExp(
  "^" + dh.call(gh).replace(lh, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$"
);
function mh(n) {
  if (!Go(n) || oh(n))
    return !1;
  var t = ih(n) ? fh : ch;
  return t.test(rh(n));
}
function ph(n, t) {
  return n?.[t];
}
function qo(n, t) {
  var e = ph(n, t);
  return mh(e) ? e : void 0;
}
function wh(n, t) {
  return n === t || n !== n && t !== t;
}
var yh = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/, vh = /^\w*$/;
function xh(n, t) {
  if (fi(n))
    return !1;
  var e = typeof n;
  return e == "number" || e == "symbol" || e == "boolean" || n == null || gi(n) ? !0 : vh.test(n) || !yh.test(n) || t != null && n in Object(t);
}
var Je = qo(Object, "create");
function kh() {
  this.__data__ = Je ? Je(null) : {}, this.size = 0;
}
function bh(n) {
  var t = this.has(n) && delete this.__data__[n];
  return this.size -= t ? 1 : 0, t;
}
var Sh = "__lodash_hash_undefined__", Ch = Object.prototype, Mh = Ch.hasOwnProperty;
function _h(n) {
  var t = this.__data__;
  if (Je) {
    var e = t[n];
    return e === Sh ? void 0 : e;
  }
  return Mh.call(t, n) ? t[n] : void 0;
}
var Th = Object.prototype, zh = Th.hasOwnProperty;
function Rh(n) {
  var t = this.__data__;
  return Je ? t[n] !== void 0 : zh.call(t, n);
}
var Lh = "__lodash_hash_undefined__";
function Ph(n, t) {
  var e = this.__data__;
  return this.size += this.has(n) ? 0 : 1, e[n] = Je && t === void 0 ? Lh : t, this;
}
function ke(n) {
  var t = -1, e = n == null ? 0 : n.length;
  for (this.clear(); ++t < e; ) {
    var i = n[t];
    this.set(i[0], i[1]);
  }
}
ke.prototype.clear = kh;
ke.prototype.delete = bh;
ke.prototype.get = _h;
ke.prototype.has = Rh;
ke.prototype.set = Ph;
function Ah() {
  this.__data__ = [], this.size = 0;
}
function Tn(n, t) {
  for (var e = n.length; e--; )
    if (wh(n[e][0], t))
      return e;
  return -1;
}
var Dh = Array.prototype, Ih = Dh.splice;
function Oh(n) {
  var t = this.__data__, e = Tn(t, n);
  if (e < 0)
    return !1;
  var i = t.length - 1;
  return e == i ? t.pop() : Ih.call(t, e, 1), --this.size, !0;
}
function Eh(n) {
  var t = this.__data__, e = Tn(t, n);
  return e < 0 ? void 0 : t[e][1];
}
function $h(n) {
  return Tn(this.__data__, n) > -1;
}
function Wh(n, t) {
  var e = this.__data__, i = Tn(e, n);
  return i < 0 ? (++this.size, e.push([n, t])) : e[i][1] = t, this;
}
function $e(n) {
  var t = -1, e = n == null ? 0 : n.length;
  for (this.clear(); ++t < e; ) {
    var i = n[t];
    this.set(i[0], i[1]);
  }
}
$e.prototype.clear = Ah;
$e.prototype.delete = Oh;
$e.prototype.get = Eh;
$e.prototype.has = $h;
$e.prototype.set = Wh;
var Bh = qo(di, "Map");
function Nh() {
  this.size = 0, this.__data__ = {
    hash: new ke(),
    map: new (Bh || $e)(),
    string: new ke()
  };
}
function Hh(n) {
  var t = typeof n;
  return t == "string" || t == "number" || t == "symbol" || t == "boolean" ? n !== "__proto__" : n === null;
}
function zn(n, t) {
  var e = n.__data__;
  return Hh(t) ? e[typeof t == "string" ? "string" : "hash"] : e.map;
}
function jh(n) {
  var t = zn(this, n).delete(n);
  return this.size -= t ? 1 : 0, t;
}
function Fh(n) {
  return zn(this, n).get(n);
}
function Vh(n) {
  return zn(this, n).has(n);
}
function Uh(n, t) {
  var e = zn(this, n), i = e.size;
  return e.set(n, t), this.size += e.size == i ? 0 : 1, this;
}
function Se(n) {
  var t = -1, e = n == null ? 0 : n.length;
  for (this.clear(); ++t < e; ) {
    var i = n[t];
    this.set(i[0], i[1]);
  }
}
Se.prototype.clear = Nh;
Se.prototype.delete = jh;
Se.prototype.get = Fh;
Se.prototype.has = Vh;
Se.prototype.set = Uh;
var Yh = "Expected a function";
function mi(n, t) {
  if (typeof n != "function" || t != null && typeof t != "function")
    throw new TypeError(Yh);
  var e = function() {
    var i = arguments, o = t ? t.apply(this, i) : i[0], s = e.cache;
    if (s.has(o))
      return s.get(o);
    var a = n.apply(this, i);
    return e.cache = s.set(o, a) || s, a;
  };
  return e.cache = new (mi.Cache || Se)(), e;
}
mi.Cache = Se;
var Zh = 500;
function Xh(n) {
  var t = mi(n, function(i) {
    return e.size === Zh && e.clear(), i;
  }), e = t.cache;
  return t;
}
var Gh = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g, qh = /\\(\\)?/g, Kh = Xh(function(n) {
  var t = [];
  return n.charCodeAt(0) === 46 && t.push(""), n.replace(Gh, function(e, i, o, s) {
    t.push(o ? s.replace(qh, "$1") : i || e);
  }), t;
});
function Jh(n) {
  return n == null ? "" : Xo(n);
}
function Qh(n, t) {
  return fi(n) ? n : xh(n, t) ? [n] : Kh(Jh(n));
}
function tu(n) {
  if (typeof n == "string" || gi(n))
    return n;
  var t = n + "";
  return t == "0" && 1 / n == -1 / 0 ? "-0" : t;
}
function eu(n, t) {
  t = Qh(t, n);
  for (var e = 0, i = t.length; n != null && e < i; )
    n = n[tu(t[e++])];
  return e && e == i ? n : void 0;
}
function nu(n, t, e) {
  var i = n == null ? void 0 : eu(n, t);
  return i === void 0 ? e : i;
}
function iu(n) {
  for (var t = -1, e = n == null ? 0 : n.length, i = {}; ++t < e; ) {
    var o = n[t];
    i[o[0]] = o[1];
  }
  return i;
}
const Ko = (n) => n === void 0, lo = (n) => typeof n == "boolean", be = (n) => typeof n == "number", ti = (n) => typeof Element > "u" ? !1 : n instanceof Element, ou = (n) => xe(n) ? !Number.isNaN(Number(n)) : !1;
var co;
const Ce = typeof window < "u", su = (n) => typeof n == "string", au = () => {
};
Ce && ((co = window?.navigator) != null && co.userAgent) && /iP(ad|hone|od)/.test(window.navigator.userAgent);
function pi(n) {
  return typeof n == "function" ? n() : M(n);
}
function ru(n) {
  return n;
}
function wi(n) {
  return aa() ? (ra(n), !0) : !1;
}
function lu(n, t = !0) {
  Ae() ? Qe(n) : t ? n() : we(n);
}
function Jo(n, t, e = {}) {
  const {
    immediate: i = !0
  } = e, o = W(!1);
  let s = null;
  function a() {
    s && (clearTimeout(s), s = null);
  }
  function r() {
    o.value = !1, a();
  }
  function l(...h) {
    a(), o.value = !0, s = setTimeout(() => {
      o.value = !1, s = null, n(...h);
    }, pi(t));
  }
  return i && (o.value = !0, Ce && l()), wi(r), {
    isPending: sa(o),
    start: l,
    stop: r
  };
}
function Qo(n) {
  var t;
  const e = pi(n);
  return (t = e?.$el) != null ? t : e;
}
const ts = Ce ? window : void 0;
function es(...n) {
  let t, e, i, o;
  if (su(n[0]) || Array.isArray(n[0]) ? ([e, i, o] = n, t = ts) : [t, e, i, o] = n, !t)
    return au;
  Array.isArray(e) || (e = [e]), Array.isArray(i) || (i = [i]);
  const s = [], a = () => {
    s.forEach((u) => u()), s.length = 0;
  }, r = (u, d, x, w) => (u.addEventListener(d, x, w), () => u.removeEventListener(d, x, w)), l = Ee(() => [Qo(t), pi(o)], ([u, d]) => {
    a(), u && s.push(...e.flatMap((x) => i.map((w) => r(u, x, w, d))));
  }, { immediate: !0, flush: "post" }), h = () => {
    l(), a();
  };
  return wi(h), h;
}
function cu(n, t = !1) {
  const e = W(), i = () => e.value = !!n();
  return i(), lu(i, t), e;
}
const ho = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {}, uo = "__vueuse_ssr_handlers__";
ho[uo] = ho[uo] || {};
var go = Object.getOwnPropertySymbols, hu = Object.prototype.hasOwnProperty, uu = Object.prototype.propertyIsEnumerable, du = (n, t) => {
  var e = {};
  for (var i in n)
    hu.call(n, i) && t.indexOf(i) < 0 && (e[i] = n[i]);
  if (n != null && go)
    for (var i of go(n))
      t.indexOf(i) < 0 && uu.call(n, i) && (e[i] = n[i]);
  return e;
};
function gu(n, t, e = {}) {
  const i = e, { window: o = ts } = i, s = du(i, ["window"]);
  let a;
  const r = cu(() => o && "ResizeObserver" in o), l = () => {
    a && (a.disconnect(), a = void 0);
  }, h = Ee(() => Qo(n), (d) => {
    l(), r.value && o && d && (a = new ResizeObserver(t), a.observe(d, s));
  }, { immediate: !0, flush: "post" }), u = () => {
    l(), h();
  };
  return wi(u), {
    isSupported: r,
    stop: u
  };
}
var fo;
(function(n) {
  n.UP = "UP", n.RIGHT = "RIGHT", n.DOWN = "DOWN", n.LEFT = "LEFT", n.NONE = "NONE";
})(fo || (fo = {}));
var fu = Object.defineProperty, mo = Object.getOwnPropertySymbols, mu = Object.prototype.hasOwnProperty, pu = Object.prototype.propertyIsEnumerable, po = (n, t, e) => t in n ? fu(n, t, { enumerable: !0, configurable: !0, writable: !0, value: e }) : n[t] = e, wu = (n, t) => {
  for (var e in t || (t = {}))
    mu.call(t, e) && po(n, e, t[e]);
  if (mo)
    for (var e of mo(t))
      pu.call(t, e) && po(n, e, t[e]);
  return n;
};
const yu = {
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
wu({
  linear: ru
}, yu);
const wo = {
  current: 0
}, yo = W(0), ns = 2e3, vo = Symbol("elZIndexContextKey"), is = Symbol("zIndexContextKey"), vu = (n) => {
  const t = Ae() ? pe(vo, wo) : wo, e = n || (Ae() ? pe(is, void 0) : void 0), i = I(() => {
    const a = M(e);
    return be(a) ? a : ns;
  }), o = I(() => i.value + yo.value), s = () => (t.current++, yo.value = t.current, o.value);
  return !Ce && pe(vo), {
    initialZIndex: i,
    currentZIndex: o,
    nextZIndex: s
  };
};
var xu = {
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
const ku = (n) => (t, e) => bu(t, e, M(n)), bu = (n, t, e) => nu(e, n, n).replace(/\{(\w+)\}/g, (i, o) => {
  var s;
  return `${(s = t?.[o]) != null ? s : `{${o}}`}`;
}), Su = (n) => {
  const t = I(() => M(n).name), e = la(n) ? n : W(n);
  return {
    lang: t,
    locale: e,
    t: ku(n)
  };
}, os = Symbol("localeContextKey"), Cu = (n) => {
  const t = n || pe(os, W());
  return Su(I(() => t.value || xu));
}, ss = "__epPropKey", Vt = (n) => n, Mu = (n) => Uo(n) && !!n[ss], as = (n, t) => {
  if (!Uo(n) || Mu(n))
    return n;
  const { values: e, required: i, default: o, type: s, validator: a } = n, l = {
    type: s,
    required: !!i,
    validator: e || a ? (h) => {
      let u = !1, d = [];
      if (e && (d = Array.from(e), io(n, "default") && d.push(o), u || (u = d.includes(h))), a && (u || (u = a(h))), !u && d.length > 0) {
        const x = [...new Set(d)].map((w) => JSON.stringify(w)).join(", ");
        ca(`Invalid prop: validation failed${t ? ` for prop "${t}"` : ""}. Expected one of [${x}], got value ${JSON.stringify(h)}.`);
      }
      return u;
    } : void 0,
    [ss]: !0
  };
  return io(n, "default") && (l.default = o), l;
}, We = (n) => iu(Object.entries(n).map(([t, e]) => [
  t,
  as(e, t)
])), _u = ["", "default", "small", "large"], Tu = as({
  type: String,
  values: _u,
  required: !1
}), zu = Symbol("size"), Ru = Symbol("emptyValuesContextKey"), Lu = We({
  emptyValues: Array,
  valueOnClear: {
    type: [String, Number, Boolean, Function],
    default: void 0,
    validator: (n) => Ke(n) ? !n() : !n
  }
}), xo = (n) => Object.keys(n), xn = W();
function rs(n, t = void 0) {
  return Ae() ? pe(Fo, xn) : xn;
}
function ls(n, t) {
  const e = rs(), i = ui(n, I(() => {
    var r;
    return ((r = e.value) == null ? void 0 : r.namespace) || fn;
  })), o = Cu(I(() => {
    var r;
    return (r = e.value) == null ? void 0 : r.locale;
  })), s = vu(I(() => {
    var r;
    return ((r = e.value) == null ? void 0 : r.zIndex) || ns;
  })), a = I(() => {
    var r;
    return M(t) || ((r = e.value) == null ? void 0 : r.size) || "";
  });
  return cs(I(() => M(e) || {})), {
    ns: i,
    locale: o,
    zIndex: s,
    size: a
  };
}
const cs = (n, t, e = !1) => {
  var i;
  const o = !!Ae(), s = o ? rs() : void 0, a = (i = void 0) != null ? i : o ? ha : void 0;
  if (!a)
    return;
  const r = I(() => {
    const l = M(n);
    return s?.value ? Pu(s.value, l) : l;
  });
  return a(Fo, r), a(os, I(() => r.value.locale)), a(Vo, I(() => r.value.namespace)), a(is, I(() => r.value.zIndex)), a(zu, {
    size: I(() => r.value.size || "")
  }), a(Ru, I(() => ({
    emptyValues: r.value.emptyValues,
    valueOnClear: r.value.valueOnClear
  }))), (e || !xn.value) && (xn.value = r.value), r;
}, Pu = (n, t) => {
  const e = [.../* @__PURE__ */ new Set([...xo(n), ...xo(t)])], i = {};
  for (const o of e)
    i[o] = t[o] !== void 0 ? t[o] : n[o];
  return i;
};
var Rn = (n, t) => {
  const e = n.__vccOpts || n;
  for (const [i, o] of t)
    e[i] = o;
  return e;
};
function ei(n, t = "px") {
  if (!n)
    return "";
  if (be(n) || ou(n))
    return `${n}${t}`;
  if (xe(n))
    return n;
}
const hs = (n, t) => (n.install = (e) => {
  for (const i of [n, ...Object.values({})])
    e.component(i.name, i);
}, n), us = (n, t) => (n.install = (e) => {
  n._context = e._context, e.config.globalProperties[t] = n;
}, n), Au = We({
  size: {
    type: Vt([Number, String])
  },
  color: {
    type: String
  }
}), Du = Pt({
  name: "ElIcon",
  inheritAttrs: !1
}), Iu = /* @__PURE__ */ Pt({
  ...Du,
  props: Au,
  setup(n) {
    const t = n, e = ui("icon"), i = I(() => {
      const { size: o, color: s } = t;
      return !o && !s ? {} : {
        fontSize: Ko(o) ? void 0 : ei(o),
        "--color": s
      };
    });
    return (o, s) => (L(), D("i", ua({
      class: M(e).b(),
      style: M(i)
    }, o.$attrs), [
      ve(o.$slots, "default")
    ], 16));
  }
});
var Ou = /* @__PURE__ */ Rn(Iu, [["__file", "icon.vue"]]);
const kn = hs(Ou);
/*! Element Plus Icons Vue v2.3.1 */
var Eu = /* @__PURE__ */ Pt({
  name: "CircleCloseFilled",
  __name: "circle-close-filled",
  setup(n) {
    return (t, e) => (L(), D("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 1024 1024"
    }, [
      k("path", {
        fill: "currentColor",
        d: "M512 64a448 448 0 1 1 0 896 448 448 0 0 1 0-896m0 393.664L407.936 353.6a38.4 38.4 0 1 0-54.336 54.336L457.664 512 353.6 616.064a38.4 38.4 0 1 0 54.336 54.336L512 566.336 616.064 670.4a38.4 38.4 0 1 0 54.336-54.336L566.336 512 670.4 407.936a38.4 38.4 0 1 0-54.336-54.336z"
      })
    ]));
  }
}), $u = Eu, Wu = /* @__PURE__ */ Pt({
  name: "Close",
  __name: "close",
  setup(n) {
    return (t, e) => (L(), D("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 1024 1024"
    }, [
      k("path", {
        fill: "currentColor",
        d: "M764.288 214.592 512 466.88 259.712 214.592a31.936 31.936 0 0 0-45.12 45.12L466.752 512 214.528 764.224a31.936 31.936 0 1 0 45.12 45.184L512 557.184l252.288 252.288a31.936 31.936 0 0 0 45.12-45.12L557.12 512.064l252.288-252.352a31.936 31.936 0 1 0-45.12-45.184z"
      })
    ]));
  }
}), ds = Wu, Bu = /* @__PURE__ */ Pt({
  name: "InfoFilled",
  __name: "info-filled",
  setup(n) {
    return (t, e) => (L(), D("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 1024 1024"
    }, [
      k("path", {
        fill: "currentColor",
        d: "M512 64a448 448 0 1 1 0 896.064A448 448 0 0 1 512 64m67.2 275.072c33.28 0 60.288-23.104 60.288-57.344s-27.072-57.344-60.288-57.344c-33.28 0-60.16 23.104-60.16 57.344s26.88 57.344 60.16 57.344M590.912 699.2c0-6.848 2.368-24.64 1.024-34.752l-52.608 60.544c-10.88 11.456-24.512 19.392-30.912 17.28a12.992 12.992 0 0 1-8.256-14.72l87.68-276.992c7.168-35.136-12.544-67.2-54.336-71.296-44.096 0-108.992 44.736-148.48 101.504 0 6.784-1.28 23.68.064 33.792l52.544-60.608c10.88-11.328 23.552-19.328 29.952-17.152a12.8 12.8 0 0 1 7.808 16.128L388.48 728.576c-10.048 32.256 8.96 63.872 55.04 71.04 67.84 0 107.904-43.648 147.456-100.416z"
      })
    ]));
  }
}), Nu = Bu, Hu = /* @__PURE__ */ Pt({
  name: "SuccessFilled",
  __name: "success-filled",
  setup(n) {
    return (t, e) => (L(), D("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 1024 1024"
    }, [
      k("path", {
        fill: "currentColor",
        d: "M512 64a448 448 0 1 1 0 896 448 448 0 0 1 0-896m-55.808 536.384-99.52-99.584a38.4 38.4 0 1 0-54.336 54.336l126.72 126.72a38.272 38.272 0 0 0 54.336 0l262.4-262.464a38.4 38.4 0 1 0-54.272-54.336z"
      })
    ]));
  }
}), ju = Hu, Fu = /* @__PURE__ */ Pt({
  name: "WarningFilled",
  __name: "warning-filled",
  setup(n) {
    return (t, e) => (L(), D("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 1024 1024"
    }, [
      k("path", {
        fill: "currentColor",
        d: "M512 64a448 448 0 1 1 0 896 448 448 0 0 1 0-896m0 192a58.432 58.432 0 0 0-58.24 63.744l23.36 256.384a35.072 35.072 0 0 0 69.76 0l23.296-256.384A58.432 58.432 0 0 0 512 256m0 512a51.2 51.2 0 1 0 0-102.4 51.2 51.2 0 0 0 0 102.4"
      })
    ]));
  }
}), Vu = Fu;
const gs = Vt([
  String,
  Object,
  Function
]), Uu = {
  Close: ds
}, Yu = {
  Close: ds
}, bn = {
  success: ju,
  warning: Vu,
  error: $u,
  info: Nu
}, Zu = (n) => n, mn = {
  esc: "Escape",
  delete: "Delete",
  backspace: "Backspace"
}, Xu = We({
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
    type: Vt([String, Object, Array])
  },
  offset: {
    type: Vt(Array),
    default: [0, 0]
  },
  badgeClass: {
    type: String
  }
}), Gu = Pt({
  name: "ElBadge"
}), qu = /* @__PURE__ */ Pt({
  ...Gu,
  props: Xu,
  setup(n, { expose: t }) {
    const e = n, i = ui("badge"), o = I(() => e.isDot ? "" : be(e.value) && be(e.max) ? e.max < e.value ? `${e.max}+` : `${e.value}` : `${e.value}`), s = I(() => {
      var a, r, l, h, u;
      return [
        {
          backgroundColor: e.color,
          marginRight: ei(-((r = (a = e.offset) == null ? void 0 : a[0]) != null ? r : 0)),
          marginTop: ei((h = (l = e.offset) == null ? void 0 : l[1]) != null ? h : 0)
        },
        (u = e.badgeStyle) != null ? u : {}
      ];
    });
    return t({
      content: o
    }), (a, r) => (L(), D("div", {
      class: ct(M(i).b())
    }, [
      ve(a.$slots, "default"),
      p(ii, {
        name: `${M(i).namespace.value}-zoom-in-center`,
        persisted: ""
      }, {
        default: It(() => [
          Xe(k("sup", {
            class: ct([
              M(i).e("content"),
              M(i).em("content", a.type),
              M(i).is("fixed", !!a.$slots.default),
              M(i).is("dot", a.isDot),
              M(i).is("hide-zero", !a.showZero && e.value === 0),
              a.badgeClass
            ]),
            style: gt(M(s))
          }, [
            ve(a.$slots, "content", { value: M(o) }, () => [
              da(Y(M(o)), 1)
            ])
          ], 6), [
            [pn, !a.hidden && (M(o) || a.isDot || a.$slots.content)]
          ])
        ]),
        _: 3
      }, 8, ["name"])
    ], 2));
  }
});
var Ku = /* @__PURE__ */ Rn(qu, [["__file", "badge.vue"]]);
const Ju = hs(Ku), Qu = We({
  a11y: {
    type: Boolean,
    default: !0
  },
  locale: {
    type: Vt(Object)
  },
  size: Tu,
  button: {
    type: Vt(Object)
  },
  experimentalFeatures: {
    type: Vt(Object)
  },
  keyboardNavigation: {
    type: Boolean,
    default: !0
  },
  message: {
    type: Vt(Object)
  },
  zIndex: Number,
  namespace: {
    type: String,
    default: "el"
  },
  ...Lu
}), Gt = {};
Pt({
  name: "ElConfigProvider",
  props: Qu,
  setup(n, { slots: t }) {
    Ee(() => n.message, (i) => {
      Object.assign(Gt, i ?? {});
    }, { immediate: !0, deep: !0 });
    const e = cs(n);
    return () => ve(t, "default", { config: e?.value });
  }
});
const fs = ["success", "info", "warning", "error"], Dt = Zu({
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
  appendTo: Ce ? document.body : void 0
}), td = We({
  customClass: {
    type: String,
    default: Dt.customClass
  },
  center: {
    type: Boolean,
    default: Dt.center
  },
  dangerouslyUseHTMLString: {
    type: Boolean,
    default: Dt.dangerouslyUseHTMLString
  },
  duration: {
    type: Number,
    default: Dt.duration
  },
  icon: {
    type: gs,
    default: Dt.icon
  },
  id: {
    type: String,
    default: Dt.id
  },
  message: {
    type: Vt([
      String,
      Object,
      Function
    ]),
    default: Dt.message
  },
  onClose: {
    type: Vt(Function),
    default: Dt.onClose
  },
  showClose: {
    type: Boolean,
    default: Dt.showClose
  },
  type: {
    type: String,
    values: fs,
    default: Dt.type
  },
  plain: {
    type: Boolean,
    default: Dt.plain
  },
  offset: {
    type: Number,
    default: Dt.offset
  },
  zIndex: {
    type: Number,
    default: Dt.zIndex
  },
  grouping: {
    type: Boolean,
    default: Dt.grouping
  },
  repeatNum: {
    type: Number,
    default: Dt.repeatNum
  }
}), ed = {
  destroy: () => !0
}, Kt = ga([]), nd = (n) => {
  const t = Kt.findIndex((o) => o.id === n), e = Kt[t];
  let i;
  return t > 0 && (i = Kt[t - 1]), { current: e, prev: i };
}, id = (n) => {
  const { prev: t } = nd(n);
  return t ? t.vm.exposed.bottom.value : 0;
}, od = (n, t) => Kt.findIndex((i) => i.id === n) > 0 ? 16 : t, sd = Pt({
  name: "ElMessage"
}), ad = /* @__PURE__ */ Pt({
  ...sd,
  props: td,
  emits: ed,
  setup(n, { expose: t }) {
    const e = n, { Close: i } = Yu, { ns: o, zIndex: s } = ls("message"), { currentZIndex: a, nextZIndex: r } = s, l = W(), h = W(!1), u = W(0);
    let d;
    const x = I(() => e.type ? e.type === "error" ? "danger" : e.type : "info"), w = I(() => {
      const j = e.type;
      return { [o.bm("icon", j)]: j && bn[j] };
    }), S = I(() => e.icon || bn[e.type] || ""), f = I(() => id(e.id)), v = I(() => od(e.id, e.offset) + f.value), P = I(() => u.value + v.value), N = I(() => ({
      top: `${v.value}px`,
      zIndex: a.value
    }));
    function T() {
      e.duration !== 0 && ({ stop: d } = Jo(() => {
        Z();
      }, e.duration));
    }
    function U() {
      d?.();
    }
    function Z() {
      h.value = !1;
    }
    function X({ code: j }) {
      j === mn.esc && Z();
    }
    return Qe(() => {
      T(), r(), h.value = !0;
    }), Ee(() => e.repeatNum, () => {
      U(), T();
    }), es(document, "keydown", X), gu(l, () => {
      u.value = l.value.getBoundingClientRect().height;
    }), t({
      visible: h,
      bottom: P,
      close: Z
    }), (j, F) => (L(), Lt(ii, {
      name: M(o).b("fade"),
      onBeforeLeave: j.onClose,
      onAfterLeave: (tt) => j.$emit("destroy"),
      persisted: ""
    }, {
      default: It(() => [
        Xe(k("div", {
          id: j.id,
          ref_key: "messageRef",
          ref: l,
          class: ct([
            M(o).b(),
            { [M(o).m(j.type)]: j.type },
            M(o).is("center", j.center),
            M(o).is("closable", j.showClose),
            M(o).is("plain", j.plain),
            j.customClass
          ]),
          style: gt(M(N)),
          role: "alert",
          onMouseenter: U,
          onMouseleave: T
        }, [
          j.repeatNum > 1 ? (L(), Lt(M(Ju), {
            key: 0,
            value: j.repeatNum,
            type: M(x),
            class: ct(M(o).e("badge"))
          }, null, 8, ["value", "type", "class"])) : V("v-if", !0),
          M(S) ? (L(), Lt(M(kn), {
            key: 1,
            class: ct([M(o).e("icon"), M(w)])
          }, {
            default: It(() => [
              (L(), Lt(ce(M(S))))
            ]),
            _: 1
          }, 8, ["class"])) : V("v-if", !0),
          ve(j.$slots, "default", {}, () => [
            j.dangerouslyUseHTMLString ? (L(), D(Bt, { key: 1 }, [
              V(" Caution here, message could've been compromised, never use user's input as message "),
              k("p", {
                class: ct(M(o).e("content")),
                innerHTML: j.message
              }, null, 10, ["innerHTML"])
            ], 2112)) : (L(), D("p", {
              key: 0,
              class: ct(M(o).e("content"))
            }, Y(j.message), 3))
          ]),
          j.showClose ? (L(), Lt(M(kn), {
            key: 2,
            class: ct(M(o).e("closeBtn")),
            onClick: mt(Z, ["stop"])
          }, {
            default: It(() => [
              p(M(i))
            ]),
            _: 1
          }, 8, ["class", "onClick"])) : V("v-if", !0)
        ], 46, ["id"]), [
          [pn, h.value]
        ])
      ]),
      _: 3
    }, 8, ["name", "onBeforeLeave", "onAfterLeave"]));
  }
});
var rd = /* @__PURE__ */ Rn(ad, [["__file", "message.vue"]]);
let ld = 1;
const ms = (n) => {
  const t = !n || xe(n) || Ge(n) || Ke(n) ? { message: n } : n, e = {
    ...Dt,
    ...t
  };
  if (!e.appendTo)
    e.appendTo = document.body;
  else if (xe(e.appendTo)) {
    let i = document.querySelector(e.appendTo);
    ti(i) || (i = document.body), e.appendTo = i;
  }
  return lo(Gt.grouping) && !e.grouping && (e.grouping = Gt.grouping), be(Gt.duration) && e.duration === 3e3 && (e.duration = Gt.duration), be(Gt.offset) && e.offset === 16 && (e.offset = Gt.offset), lo(Gt.showClose) && !e.showClose && (e.showClose = Gt.showClose), e;
}, cd = (n) => {
  const t = Kt.indexOf(n);
  if (t === -1)
    return;
  Kt.splice(t, 1);
  const { handler: e } = n;
  e.close();
}, hd = ({ appendTo: n, ...t }, e) => {
  const i = `message_${ld++}`, o = t.onClose, s = document.createElement("div"), a = {
    ...t,
    id: i,
    onClose: () => {
      o?.(), cd(u);
    },
    onDestroy: () => {
      wn(null, s);
    }
  }, r = p(rd, a, Ke(a.message) || Ge(a.message) ? {
    default: Ke(a.message) ? a.message : () => a.message
  } : null);
  r.appContext = e || Ie._context, wn(r, s), n.appendChild(s.firstElementChild);
  const l = r.component, u = {
    id: i,
    vnode: r,
    vm: l,
    handler: {
      close: () => {
        l.exposed.visible.value = !1;
      }
    },
    props: r.component.props
  };
  return u;
}, Ie = (n = {}, t) => {
  if (!Ce)
    return { close: () => {
    } };
  const e = ms(n);
  if (e.grouping && Kt.length) {
    const o = Kt.find(({ vnode: s }) => {
      var a;
      return ((a = s.props) == null ? void 0 : a.message) === e.message;
    });
    if (o)
      return o.props.repeatNum += 1, o.props.type = e.type, o.handler;
  }
  if (be(Gt.max) && Kt.length >= Gt.max)
    return { close: () => {
    } };
  const i = hd(e, t);
  return Kt.push(i), i.handler;
};
fs.forEach((n) => {
  Ie[n] = (t = {}, e) => {
    const i = ms(t);
    return Ie({ ...i, type: n }, e);
  };
});
function ud(n) {
  for (const t of Kt)
    (!n || n === t.props.type) && t.handler.close();
}
Ie.closeAll = ud;
Ie._context = null;
const dd = us(Ie, "$message"), ps = [
  "success",
  "info",
  "warning",
  "error"
], gd = We({
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
    type: gs
  },
  id: {
    type: String,
    default: ""
  },
  message: {
    type: Vt([
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
    type: Vt(Function),
    default: () => {
    }
  },
  onClose: {
    type: Vt(Function),
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
    values: [...ps, ""],
    default: ""
  },
  zIndex: Number
}), fd = {
  destroy: () => !0
}, md = Pt({
  name: "ElNotification"
}), pd = /* @__PURE__ */ Pt({
  ...md,
  props: gd,
  emits: fd,
  setup(n, { expose: t }) {
    const e = n, { ns: i, zIndex: o } = ls("notification"), { nextZIndex: s, currentZIndex: a } = o, { Close: r } = Uu, l = W(!1);
    let h;
    const u = I(() => {
      const T = e.type;
      return T && bn[e.type] ? i.m(T) : "";
    }), d = I(() => e.type && bn[e.type] || e.icon), x = I(() => e.position.endsWith("right") ? "right" : "left"), w = I(() => e.position.startsWith("top") ? "top" : "bottom"), S = I(() => {
      var T;
      return {
        [w.value]: `${e.offset}px`,
        zIndex: (T = e.zIndex) != null ? T : a.value
      };
    });
    function f() {
      e.duration > 0 && ({ stop: h } = Jo(() => {
        l.value && P();
      }, e.duration));
    }
    function v() {
      h?.();
    }
    function P() {
      l.value = !1;
    }
    function N({ code: T }) {
      T === mn.delete || T === mn.backspace ? v() : T === mn.esc ? l.value && P() : f();
    }
    return Qe(() => {
      f(), s(), l.value = !0;
    }), es(document, "keydown", N), t({
      visible: l,
      close: P
    }), (T, U) => (L(), Lt(ii, {
      name: M(i).b("fade"),
      onBeforeLeave: T.onClose,
      onAfterLeave: (Z) => T.$emit("destroy"),
      persisted: ""
    }, {
      default: It(() => [
        Xe(k("div", {
          id: T.id,
          class: ct([M(i).b(), T.customClass, M(x)]),
          style: gt(M(S)),
          role: "alert",
          onMouseenter: v,
          onMouseleave: f,
          onClick: T.onClick
        }, [
          M(d) ? (L(), Lt(M(kn), {
            key: 0,
            class: ct([M(i).e("icon"), M(u)])
          }, {
            default: It(() => [
              (L(), Lt(ce(M(d))))
            ]),
            _: 1
          }, 8, ["class"])) : V("v-if", !0),
          k("div", {
            class: ct(M(i).e("group"))
          }, [
            k("h2", {
              class: ct(M(i).e("title")),
              textContent: Y(T.title)
            }, null, 10, ["textContent"]),
            Xe(k("div", {
              class: ct(M(i).e("content")),
              style: gt(T.title ? void 0 : { margin: 0 })
            }, [
              ve(T.$slots, "default", {}, () => [
                T.dangerouslyUseHTMLString ? (L(), D(Bt, { key: 1 }, [
                  V(" Caution here, message could've been compromised, never use user's input as message "),
                  k("p", { innerHTML: T.message }, null, 8, ["innerHTML"])
                ], 2112)) : (L(), D("p", { key: 0 }, Y(T.message), 1))
              ])
            ], 6), [
              [pn, T.message]
            ]),
            T.showClose ? (L(), Lt(M(kn), {
              key: 0,
              class: ct(M(i).e("closeBtn")),
              onClick: mt(P, ["stop"])
            }, {
              default: It(() => [
                p(M(r))
              ]),
              _: 1
            }, 8, ["class", "onClick"])) : V("v-if", !0)
          ], 2)
        ], 46, ["id", "onClick"]), [
          [pn, l.value]
        ])
      ]),
      _: 3
    }, 8, ["name", "onBeforeLeave", "onAfterLeave"]));
  }
});
var wd = /* @__PURE__ */ Rn(pd, [["__file", "notification.vue"]]);
const Sn = {
  "top-left": [],
  "top-right": [],
  "bottom-left": [],
  "bottom-right": []
}, ni = 16;
let yd = 1;
const Oe = function(n = {}, t) {
  if (!Ce)
    return { close: () => {
    } };
  (xe(n) || Ge(n)) && (n = { message: n });
  const e = n.position || "top-right";
  let i = n.offset || 0;
  Sn[e].forEach(({ vm: u }) => {
    var d;
    i += (((d = u.el) == null ? void 0 : d.offsetHeight) || 0) + ni;
  }), i += ni;
  const o = `notification_${yd++}`, s = n.onClose, a = {
    ...n,
    offset: i,
    id: o,
    onClose: () => {
      vd(o, e, s);
    }
  };
  let r = document.body;
  ti(n.appendTo) ? r = n.appendTo : xe(n.appendTo) && (r = document.querySelector(n.appendTo)), ti(r) || (r = document.body);
  const l = document.createElement("div"), h = p(wd, a, Ke(a.message) ? a.message : Ge(a.message) ? () => a.message : null);
  return h.appContext = Ko(t) ? Oe._context : t, h.props.onDestroy = () => {
    wn(null, l);
  }, wn(h, l), Sn[e].push({ vm: h }), r.appendChild(l.firstElementChild), {
    close: () => {
      h.component.exposed.visible.value = !1;
    }
  };
};
ps.forEach((n) => {
  Oe[n] = (t = {}, e) => ((xe(t) || Ge(t)) && (t = {
    message: t
  }), Oe({ ...t, type: n }, e));
});
function vd(n, t, e) {
  const i = Sn[t], o = i.findIndex(({ vm: h }) => {
    var u;
    return ((u = h.component) == null ? void 0 : u.props.id) === n;
  });
  if (o === -1)
    return;
  const { vm: s } = i[o];
  if (!s)
    return;
  e?.(s);
  const a = s.el.offsetHeight, r = t.split("-")[0];
  i.splice(o, 1);
  const l = i.length;
  if (!(l < 1))
    for (let h = o; h < l; h++) {
      const { el: u, component: d } = i[h].vm, x = Number.parseInt(u.style[r], 10) - a - ni;
      d.props.offset = x;
    }
}
function xd() {
  for (const n of Object.values(Sn))
    n.forEach(({ vm: t }) => {
      t.component.exposed.visible.value = !1;
    });
}
Oe.closeAll = xd;
Oe._context = null;
const kd = us(Oe, "$notify"), Wt = {
  /**
   * 显示消息提示（简化版）
   * @param message 消息内容
   * @param type 消息类型，默认 success
   * @param position 显示位置，默认 center
   * @param duration 显示时长（毫秒），默认 3000
   */
  msg(n, t = "success", e = "center", i) {
    this.message({
      message: n,
      type: t,
      position: e,
      duration: i
    });
  },
  /**
   * 显示消息提示（完整版）
   * @param options 消息选项
   */
  message(n) {
    const {
      message: t,
      type: e = "success",
      position: i = "center",
      duration: o = 3e3,
      showClose: s = !1
    } = n;
    i === "center" ? dd({
      message: t,
      type: e,
      duration: o,
      showClose: s,
      grouping: !0,
      customClass: `app-toast app-toast--${e}`
    }) : kd({
      message: t,
      type: e,
      position: i,
      duration: o,
      showClose: !1,
      // 角落通知统一不显示关闭按钮，更简洁
      title: "",
      offset: 50,
      // 距离顶部/底部 50px，避免遮挡窗口控制按钮
      customClass: `app-toast app-toast--corner app-toast--${e}`
      // 自定义样式类
    });
  },
  /**
   * 显示成功消息
   * @param message 消息内容
   * @param position 显示位置，默认 center
   * @param duration 显示时长（毫秒），默认 3000
   */
  success(n, t = "center", e) {
    this.msg(n, "success", t, e);
  },
  /**
   * 显示警告消息
   * @param message 消息内容
   * @param position 显示位置，默认 center
   * @param duration 显示时长（毫秒），默认 3000
   */
  warning(n, t = "center", e) {
    this.msg(n, "warning", t, e);
  },
  /**
   * 显示信息消息
   * @param message 消息内容
   * @param position 显示位置，默认 center
   * @param duration 显示时长（毫秒），默认 3000
   */
  info(n, t = "center", e) {
    this.msg(n, "info", t, e);
  },
  /**
   * 显示错误消息
   * @param message 消息内容
   * @param position 显示位置，默认 center
   * @param duration 显示时长（毫秒），默认 3000
   */
  error(n, t = "center", e) {
    this.msg(n, "error", t, e);
  }
}, bd = ["disabled"], Sd = {
  key: 0,
  class: "custom-button__loading"
}, Cd = /* @__PURE__ */ Pt({
  name: "CustomButton",
  __name: "CustomButton",
  props: {
    type: {
      type: String,
      default: "default",
      validator: (n) => ["default", "primary", "success", "danger", "warning", "text"].includes(n)
    },
    size: {
      type: String,
      default: "",
      validator: (n) => ["", "small", "large"].includes(n)
    },
    circle: {
      type: Boolean,
      default: !1
    },
    loading: {
      type: Boolean,
      default: !1
    },
    disabled: {
      type: Boolean,
      default: !1
    },
    plain: {
      type: Boolean,
      default: !1
    }
  },
  emits: ["click"],
  setup(n) {
    const t = n;
    return (e, i) => (L(), D("button", {
      class: ct([
        "custom-button",
        `custom-button--${t.type || "default"}`,
        t.size ? `custom-button--${t.size}` : "custom-button--medium",
        { "custom-button--loading": t.loading },
        { "custom-button--circle": t.circle },
        { "custom-button--plain": t.plain }
      ]),
      disabled: n.loading || n.disabled,
      onClick: i[0] || (i[0] = (o) => e.$emit("click", o))
    }, [
      n.loading ? (L(), D("div", Sd, i[1] || (i[1] = [
        k(
          "svg",
          {
            class: "custom-button__spinner",
            viewBox: "0 0 50 50"
          },
          [
            k("circle", {
              class: "path",
              cx: "25",
              cy: "25",
              r: "20",
              fill: "none",
              "stroke-width": "5"
            })
          ],
          -1
          /* HOISTED */
        )
      ]))) : V("v-if", !0),
      ve(e.$slots, "default", {}, void 0, !0)
    ], 10, bd));
  }
}), ne = /* @__PURE__ */ _n(Cd, [["__scopeId", "data-v-9497085f"]]);
function Md(n) {
  return zd(n.anchor, n.focus) <= 0 ? { start: n.anchor, end: n.focus } : { start: n.focus, end: n.anchor };
}
function ws(n, t) {
  if (!t || n.length === 0)
    return [];
  const { start: e, end: i } = Md(t);
  if (e.blockIndex < 0 || i.blockIndex >= n.length)
    return [];
  const o = [];
  for (let s = e.blockIndex; s <= i.blockIndex; s += 1) {
    const a = n[s].text.length, r = s === e.blockIndex ? ko(e.offset, a) : 0, l = s === i.blockIndex ? ko(i.offset, a) : a;
    l > r && o.push({ blockIndex: s, start: r, end: l });
  }
  return o;
}
function _d(n, t) {
  const e = ws(n, t);
  return e.map((i, o) => {
    const s = n[i.blockIndex], a = s.text.slice(i.start, i.end), r = i.end === s.text.length, l = o < e.length - 1;
    return a + (r && l ? s.separator : "");
  }).join("");
}
function Td(n, t) {
  let e = 0, i = Number.POSITIVE_INFINITY;
  for (let o = 0; o < n.length; o += 1) {
    const s = Math.abs(n[o] - t);
    s < i && (e = o, i = s);
  }
  return e;
}
function zd(n, t) {
  return n.blockIndex - t.blockIndex || n.offset - t.offset;
}
function ko(n, t) {
  return Number.isFinite(n) ? Math.max(0, Math.min(t, Math.round(n))) : 0;
}
const Rd = ["src", "alt"], Ld = { class: "ocr-header" }, Pd = {
  class: "ocr-window-title",
  "data-tauri-drag-region": ""
}, Ad = { "data-tauri-drag-region": "" }, Dd = { class: "ocr-window-controls" }, Id = ["title"], Od = ["title"], Ed = ["title"], $d = ["title"], Wd = {
  class: "ocr-source-thumb",
  "data-tauri-drag-region": ""
}, Bd = ["src", "alt"], Nd = {
  class: "ocr-source-meta",
  "data-tauri-drag-region": ""
}, Hd = {
  class: "ocr-source-name",
  "data-tauri-drag-region": ""
}, jd = {
  class: "ocr-source-status",
  "data-tauri-drag-region": ""
}, Fd = { "data-tauri-drag-region": "" }, Vd = { "data-tauri-drag-region": "" }, Ud = {
  key: 0,
  class: "ocr-status-check",
  "data-tauri-drag-region": ""
}, Yd = ["title"], Zd = {
  key: 0,
  class: "ocr-original-image"
}, Xd = ["src", "alt"], Gd = {
  key: 0,
  class: "ocr-state"
}, qd = {
  key: 1,
  class: "ocr-state error"
}, Kd = {
  key: 2,
  class: "ocr-state muted"
}, Jd = { class: "ocr-preview-pane" }, Qd = { class: "ocr-preview-stage" }, tg = ["src", "alt"], eg = {
  key: 0,
  class: "ocr-selection-highlight-layer",
  "aria-hidden": "true"
}, ng = ["data-selection-index", "textContent"], ig = {
  key: 0,
  class: "ocr-selection-translation"
}, og = { class: "ocr-translation-section" }, sg = { class: "ocr-translation-label" }, ag = { class: "ocr-translation-source" }, rg = { class: "ocr-translation-section result" }, lg = { class: "ocr-translation-label" }, cg = ["textContent"], hg = { class: "ocr-record-main-row" }, ug = ["onClick"], dg = ["checked", "onChange"], gg = { class: "ocr-record-index" }, fg = ["textContent", "onBlur"], mg = {
  key: 0,
  class: "ocr-record-score"
}, pg = {
  key: 0,
  class: "ocr-record-translation"
}, wg = { class: "ocr-translation-label" }, yg = ["textContent", "onBlur"], vg = { class: "ocr-action-bar" }, xg = ["onClick"], kg = { class: "engine-label" }, bg = ["onClick"], Sg = { class: "engine-label" }, Cg = { class: "ocr-engine-btn-group relative" }, Mg = {
  key: 2,
  class: "zoom-info"
}, Vn = '"Microsoft YaHei", "PingFang SC", "Segoe UI", Arial, sans-serif', _g = /* @__PURE__ */ Pt({
  __name: "index",
  setup(n) {
    const { t } = So(), e = W(), i = W(), o = W(null), s = W(""), a = W(""), r = W("pin"), l = W(""), h = W([]), u = W(!1), d = W(""), x = W(""), w = W(0), S = W(0), f = W({ width: 0, height: 0 }), v = W({ width: 0, height: 0 }), P = W(!1), N = W(!1), T = W(null), U = W(null), Z = W(!1);
    let X = null;
    const j = W(!1), F = W(!1), tt = W(), q = W({}), J = W("bing"), et = W(!1), st = W(), yt = W({}), it = W("auto"), G = I(() => [
      { value: "google", label: "Google", short: "G" },
      { value: "bing", label: t("translate.bingTranslate"), short: "B" },
      {
        value: "offline",
        label: t("translate.offlineTranslate"),
        short: t("translate.offlineMark")
      }
    ]), ot = I(() => [
      { value: "auto", label: t("pin.ocrLanguageAuto") },
      { value: "zh", label: t("pin.ocrLanguageZh") },
      { value: "zh-tw", label: t("pin.ocrLanguageZhTw") },
      { value: "en", label: t("pin.ocrLanguageEn") },
      { value: "ja", label: t("pin.ocrLanguageJa") },
      { value: "ko", label: t("pin.ocrLanguageKo") }
    ]), pt = (c) => {
      const g = typeof c == "string" ? c.trim().toLowerCase() : "";
      return g === "auto" || g === "zh" || g === "zh-tw" || g === "en" || g === "ja" || g === "ko" ? g : "auto";
    }, kt = I(() => ot.value.find((c) => c.value === it.value)?.label || t("pin.ocrLanguageAuto")), ht = I(() => t("pin.showRecords")), bt = I(() => t("pin.hideRecords")), O = I(() => t("pin.translationResult")), Tt = (c, g) => {
      if (!c) {
        g.value = {};
        return;
      }
      const y = c.getBoundingClientRect(), $ = 180, E = 8, Q = Math.min(
        Math.max(y.left + y.width / 2, E + $ / 2),
        window.innerWidth - E - $ / 2
      );
      g.value = {
        left: `${Q}px`,
        bottom: `${Math.max(8, window.innerHeight - y.top + 8)}px`
      };
    }, H = () => {
      F.value && Tt(tt.value, q), et.value && Tt(st.value, yt);
    }, Mt = I(() => it.value), wt = W(1), At = W(!1), Ot = W(!1);
    let ee = null, Ht = null;
    const _ = W(!1), nt = W({ x: 0, y: 0 }), ut = W(!0), rt = W({ width: 0, height: 0 });
    let zt = null, St = 0;
    const Zt = W(""), b = I(() => ({
      width: "100%",
      height: r.value === "ocr" ? "auto" : "100%",
      flex: r.value === "ocr" ? "1 1 auto" : void 0,
      minHeight: r.value === "ocr" ? "120px" : void 0,
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      overflow: "hidden"
    })), B = I(() => ({
      width: "100%",
      height: "100%",
      objectFit: "contain"
    })), dt = I(() => w.value > 0 && S.value > 0 ? `${w.value} × ${S.value}` : t("pin.screenshotPreview")), ft = I(() => u.value ? t("pin.recognizing") : d.value ? t("pin.recognizeFailed") : l.value.trim() ? t("pin.recognizeSuccess") : t("pin.noTextRecognized")), K = I(
      () => h.value.filter((c) => c.selected)
    ), lt = I(
      () => h.value.flatMap(
        (c) => c.blocks.filter(yi).map((g, y) => ({
          ...g,
          id: `${c.id}-block-${y}`,
          recordId: c.id,
          separator: ys(g, c.blocks[y + 1])
        }))
      )
    ), jt = I(
      () => ws(lt.value, U.value)
    ), Rt = I(
      () => _d(lt.value, U.value)
    ), Me = I(
      () => jt.value.map((c) => {
        const g = lt.value[c.blockIndex], y = Ln(g), $ = y.boundaries[c.start] || 0, E = y.boundaries[c.end] || y.renderedWidth, Q = $ / y.renderedWidth, vt = E / y.renderedWidth;
        return {
          id: `${g.id}-${c.start}-${c.end}`,
          left: g.x + g.width * Q,
          top: g.y,
          width: g.width * Math.max(0, vt - Q),
          height: g.height
        };
      })
    ), se = I(() => K.value.length), Jt = (c) => (c.translatedText || c.text).trim(), en = (c) => c.map(Jt).filter(Boolean).join(`

`), Be = () => {
      l.value = en(h.value);
    }, yi = (c) => w.value > 0 && S.value > 0 && c.width > 0 && c.height > 0, ys = (c, g) => {
      if (!g)
        return `

`;
      const y = c.text.trim().slice(-1), $ = g.text.trim().slice(0, 1), E = /[\u3040-\u30ff\u3400-\u4dbf\u4e00-\u9fff\uac00-\ud7af]/;
      return E.test(y) || E.test($) ? "" : " ";
    }, vs = (c) => {
      if (!yi(c))
        return {};
      const g = ae(c.x / w.value * 100), y = ae(c.y / S.value * 100), $ = ae(c.width / w.value * 100, 1), E = ae(c.height / S.value * 100, 1), Q = Ln(c);
      return {
        left: `${g}%`,
        top: `${y}%`,
        width: `${$}%`,
        height: `${E}%`,
        fontSize: `${Q.fontSize}px`,
        lineHeight: `${Q.lineHeight}px`,
        letterSpacing: `${Q.letterSpacing}px`
      };
    }, xs = (c) => w.value <= 0 || S.value <= 0 ? {} : {
      left: `${ae(c.left / w.value * 100)}%`,
      top: `${ae(c.top / S.value * 100)}%`,
      width: `${ae(c.width / w.value * 100)}%`,
      height: `${ae(c.height / S.value * 100)}%`
    }, _e = /* @__PURE__ */ new Map();
    let vi = null;
    const Ln = (c) => {
      const g = bs(), y = c.text.trim(), $ = `${c.id}:${y}:${g.toFixed(4)}`, E = _e.get($);
      if (E)
        return E;
      const Q = Math.max(c.width * g, 1), vt = Math.max(c.height * g, 1);
      let xt = xi(
        Math.min((c.fontSize || c.height * 0.8) * g, vt * 0.86),
        5,
        28
      );
      const Et = ks();
      Et.font = `${xt}px ${Vn}`;
      let $t = Math.max(Et.measureText(y).width, 1);
      $t > Q && (xt = Math.max(5, xt * (Q / $t)), Et.font = `${xt}px ${Vn}`, $t = Math.max(Et.measureText(y).width, 1));
      const Ut = y.length > 0 ? Math.max(0, (Q - $t) / y.length) : 0, Ei = Array.from({ length: y.length + 1 }, (Og, Bn) => Bn === 0 ? 0 : (Et.font = `${xt}px ${Vn}`, Et.measureText(y.slice(0, Bn)).width + Ut * Bn)), ea = Math.max(Ei[y.length] || $t, 1), $i = {
        fontSize: xt,
        lineHeight: vt,
        letterSpacing: Ut,
        boundaries: Ei,
        renderedWidth: ea
      };
      return _e.set($, $i), $i;
    }, ks = () => {
      vi || (vi = document.createElement("canvas"));
      const c = vi.getContext("2d");
      if (!c)
        throw new Error(t("pin.ocrMeasureFailed"));
      return c;
    }, bs = () => w.value <= 0 || S.value <= 0 || f.value.width <= 0 || f.value.height <= 0 ? 1 : Math.min(
      f.value.width / w.value,
      f.value.height / S.value
    ), Pn = () => {
      const c = i.value;
      if (_e.clear(), !c) {
        f.value = { width: 0, height: 0 };
        return;
      }
      f.value = {
        width: c.clientWidth,
        height: c.clientHeight
      };
    }, ae = (c, g = 0) => Number.isFinite(c) ? Math.min(100, Math.max(g, c)) : g, xi = (c, g, y) => Number.isFinite(c) ? Math.min(y, Math.max(g, c)) : g, Ss = () => {
      const c = /* @__PURE__ */ new Date(), g = (y) => y.toString().padStart(2, "0");
      return `${t("pin.screenshotPrefix")} ${c.getFullYear()}-${g(c.getMonth() + 1)}-${g(c.getDate())} ${g(c.getHours())}.${g(c.getMinutes())}.${g(c.getSeconds())}.png`;
    }, Cs = I(() => {
      const c = Math.min(
        rt.value.width,
        rt.value.height
      );
      let g = 1;
      return c < 300 && (g = Math.max(0.4, c / 300)), {
        left: `${nt.value.x}px`,
        top: `${nt.value.y}px`,
        transform: `scale(${g})`,
        transformOrigin: "top left"
      };
    }), Ms = (c) => {
      s.value = c, w.value = 0, S.value = 0, f.value = { width: 0, height: 0 }, on(), _e.clear(), v.value = { width: 0, height: 0 }, r.value === "ocr" && (x.value = Ss(), N.value = !1), a.value && (URL.revokeObjectURL(a.value), a.value = "");
      try {
        const g = c.split(",")[1] || c, y = c.match(/data:([^;]+);/), $ = y ? y[1] : "image/png", E = atob(g), Q = new Uint8Array(E.length);
        for (let xt = 0; xt < E.length; xt++)
          Q[xt] = E.charCodeAt(xt);
        const vt = new Blob([Q], { type: $ });
        a.value = URL.createObjectURL(vt);
      } catch (g) {
        A.error("[PIN窗口] 转换 Blob URL 失败", g), a.value = c;
      }
    }, ki = async () => {
      await we(), await new Promise((c) => requestAnimationFrame(() => c()));
      try {
        await o.value?.emit("pin-window-ready");
      } catch (c) {
        A.error("[PIN窗口] 发送 ready 事件失败", c);
      }
    }, bi = (c) => {
      if (!c?.imageData)
        return A.error("[PIN窗口] 收到的事件数据格式不正确", c), !1;
      const g = c.mode === "ocr" ? "ocr" : "pin", y = `${g}:${c.imageData.length}`;
      return y === Zt.value ? !1 : (Zt.value = y, r.value = g, Ms(c.imageData), Xt(), r.value === "ocr" ? (Dn(c.text || ""), d.value = "", c.text || An()) : (St++, u.value = !1, d.value = "", l.value = "", h.value = []), !0);
    }, An = async () => {
      if (!s.value) return;
      const c = ++St;
      on(), T.value = null, _e.clear(), u.value = !0, d.value = "";
      const g = Date.now();
      _t.log("[Pin OCR] recognize start", {
        requestId: c,
        imageDataLength: s.value.length,
        imageWidth: w.value,
        imageHeight: S.value,
        language: it.value,
        backendLanguage: Mt.value
      });
      try {
        _t.log("[Pin OCR] invoking RapidOCR backend", {
          requestId: c,
          language: it.value,
          backendLanguage: Mt.value
        });
        const y = await C("recognize_text_from_image", {
          imageData: s.value,
          engine: "rapidocr",
          language: Mt.value
        }), $ = Ts(y), E = $.length > 0 ? en($) : Ps(y);
        if (_t.log("[Pin OCR] backend OCR success", {
          requestId: c,
          resultEngine: y?.engine,
          resultLanguage: y?.language,
          confidence: y?.confidence,
          blocks: Array.isArray(y?.blocks) ? y.blocks.length : 0,
          textLength: E.trim().length
        }), c !== St) return;
        $.length > 0 ? (h.value = $, Be()) : Dn(E.trim()), _e.clear(), _t.log("[Pin OCR] recognize success", {
          requestId: c,
          durationMs: Date.now() - g,
          textLength: l.value.length,
          textPreview: l.value.slice(0, 300)
        });
      } catch (y) {
        if (c !== St) return;
        A.error("[PIN窗口] OCR 识别失败", y), _t.log("[Pin OCR] recognize failed", {
          requestId: c,
          durationMs: Date.now() - g,
          error: As(y)
        }), d.value = t("pin.recognizeFailed"), l.value = "", h.value = [], Wt.error(t("pin.recognizeFailed"));
      } finally {
        c === St && (u.value = !1);
      }
    }, Dn = (c) => {
      const g = c.trim();
      l.value = g, h.value = g ? g.split(/\n{2,}|\n/).map((y, $) => _s(y, $)).filter((y) => y.text.trim()) : [];
    }, _s = (c, g) => ({
      id: `plain-${Date.now()}-${g}`,
      text: c.trim(),
      sourceText: c.trim(),
      translatedText: "",
      bbox: { x: 0, y: 0, width: 0, height: 0 },
      blocks: [],
      confidence: 0,
      selected: !1
    }), Ts = (c) => {
      const g = Rs(c?.blocks);
      return g.length === 0 ? [] : Io(g).map(($, E) => zs($, E)).filter(($) => $.text.trim());
    }, zs = (c, g) => {
      const y = c.text.trim(), $ = c.blocks;
      return {
        id: `ocr-${Date.now()}-${g}`,
        text: y,
        sourceText: y,
        translatedText: c.translatedText?.trim() || "",
        bbox: { ...c.bbox },
        blocks: $,
        confidence: Ls($),
        selected: !1
      };
    }, Rs = (c) => Array.isArray(c) ? c.map((g) => {
      if (!g || typeof g != "object")
        return null;
      const y = g, $ = typeof y.text == "string" ? y.text.trim() : "";
      if (!$)
        return null;
      const E = {
        text: $,
        x: Number(y.x || 0),
        y: Number(y.y || 0),
        width: Number(y.width || 0),
        height: Number(y.height || 0),
        fontSize: Number(y.fontSize || 0),
        lineHeight: Number(y.lineHeight || 0),
        angle: Number(y.angle || 0),
        isCodeBlock: !!y.isCodeBlock,
        confidence: Number(y.confidence || 0)
      };
      return typeof y.translatedText == "string" && (E.translatedText = y.translatedText), E;
    }).filter((g) => g !== null) : [], Ls = (c) => {
      const g = c.map((y) => Number(y.confidence || 0)).filter((y) => Number.isFinite(y) && y > 0);
      return g.length === 0 ? 0 : g.reduce((y, $) => y + $, 0) / g.length;
    }, Ps = (c) => typeof c == "string" ? c : c?.text ? c.text : c?.full_text ? c.full_text : Array.isArray(c?.blocks) ? c.blocks.map((g) => g?.text).filter(Boolean).join(`
`) : "", As = (c) => c instanceof Error ? `${c.name}: ${c.message}
${c.stack || ""}`.trim() : typeof c == "string" ? c : JSON.stringify(c) || String(c), In = async () => {
      const c = Is();
      if (c)
        try {
          await navigator.clipboard.writeText(c), Wt.success(t("pin.copySuccess"));
        } catch (g) {
          A.error("[PIN窗口] 复制识别文本失败", g), Wt.error(t("pin.copyFailed"));
        } finally {
          Xt();
        }
    }, Ds = async () => {
      Be();
      const c = l.value.trim();
      if (c)
        try {
          await C("save_text_to_file", { text: c }), Wt.success(t("pin.saveSuccess"));
        } catch (g) {
          g !== "SAVE_CANCELLED" && (A.error("[PIN窗口] 保存文本失败", g), Wt.error(t("pin.saveFailed")));
        }
    }, Is = () => {
      const c = Os();
      if (c)
        return c;
      if (Rt.value)
        return Rt.value;
      const g = en(K.value);
      return g || (Be(), l.value.trim());
    }, Os = () => {
      const c = window.getSelection(), g = e.value?.querySelector(".ocr-reading-surface");
      if (!c || c.rangeCount === 0 || !g)
        return "";
      for (let y = 0; y < c.rangeCount; y += 1) {
        const E = c.getRangeAt(y).commonAncestorContainer;
        if (g.contains(E))
          return c.toString().trim();
      }
      return "";
    }, Si = (c) => {
      const g = h.value.find((y) => y.id === c);
      g && (g.selected = !g.selected);
    }, Ci = (c, g, y) => {
      const $ = h.value.find((Q) => Q.id === c), E = y.target;
      !$ || !E || ($[g] = E.innerText.trim(), g === "text" && !$.sourceText.trim() && ($.sourceText = $.text), Be());
    }, Es = (c) => {
      const g = c.target;
      !g || !T.value || (T.value.translatedText = g.innerText.trim());
    }, $s = async () => {
      F.value = !F.value, et.value = !1, F.value && (await we(), H());
    }, Ws = (c) => {
      J.value = c, F.value = !1, C("set_translation_engine", { engine: c }).catch((g) => {
        A.error("[PIN窗口] 保存翻译引擎设置失败", g);
      });
    }, Mi = async () => {
      et.value = !et.value, F.value = !1, et.value && (await we(), H());
    }, Bs = (c) => {
      it.value = c, et.value = !1, C("set_ocr_language", { language: c }).catch((g) => {
        A.error("[PIN窗口] 保存 OCR 语言设置失败", g);
      }), s.value && An();
    }, Ns = async () => {
      if (Xt(), F.value = !1, et.value = !1, !l.value.trim() || j.value) return;
      const c = Rt.value.trim(), g = c ? [] : K.value.length > 0 ? K.value : h.value, y = c || (g.length > 0 ? g.map((E) => E.text).join(`

`) : l.value), $ = ge(y);
      if (!Pe($)) {
        Wt.warning(t("pin.unsupportedTranslateLanguage"));
        return;
      }
      j.value = !0;
      try {
        if (await Hs(), c) {
          const E = await On(c, $);
          E && (T.value = {
            sourceText: c,
            translatedText: E.trim()
          }, N.value = !0), Wt.success(t("pin.translateSuccess"));
        } else if (g.length > 0) {
          for (const E of g) {
            const Q = await On(E.text, $);
            Q && (E.translatedText = Q.trim());
          }
          Be(), N.value = !0, Wt.success(t("pin.translateSuccess"));
        } else {
          const E = await On(l.value, $);
          E && Dn(E), Wt.success(t("pin.translateSuccess"));
        }
      } catch (E) {
        A.error("[PIN窗口] 翻译失败", E);
        const Q = E instanceof Error ? E.message : String(E);
        if (Q !== "翻译已取消") {
          const vt = [
            t("pin.offlineModelNotDownloaded"),
            t("pin.offlineModelNotActivated")
          ];
          Wt.error(
            vt.includes(Q) ? Q : t("pin.translateFailed")
          );
        }
      } finally {
        j.value = !1;
      }
    }, Hs = async () => {
      if (J.value !== "offline")
        return;
      if ((await ai()).isCached)
        await Ao();
      else
        throw new Error(t("pin.offlineModelNotDownloaded"));
      if (!await C("get_offline_model_activated"))
        throw new Error(t("pin.offlineModelNotActivated"));
    }, On = async (c, g) => {
      const y = c.trim();
      return y ? J.value === "offline" ? Po(y) : await C("translate_text", {
        text: y,
        from: "auto",
        to: g === "zh" ? "en" : "zh",
        engine: J.value
      }) : "";
    }, js = () => {
      P.value = !P.value;
    }, Fs = () => {
      N.value = !N.value;
    }, Vs = (c) => {
      nn(c);
    }, Us = async () => {
      if (!o.value) return;
      const c = o.value;
      typeof c.minimize == "function" && await c.minimize();
    }, Ys = async () => {
      if (!o.value) return;
      const c = o.value;
      (typeof c.isMaximized == "function" ? await c.isMaximized() : !1) && typeof c.unmaximize == "function" ? await c.unmaximize() : typeof c.maximize == "function" && await c.maximize();
    }, _i = async (c) => {
      const g = c.target;
      if (w.value = g.naturalWidth, S.value = g.naturalHeight, o.value && v.value.width === 0)
        try {
          const y = await o.value.innerSize(), $ = await o.value.scaleFactor(), E = y.toLogical($);
          v.value = {
            width: E.width,
            height: E.height
          };
        } catch (y) {
          A.error("[PIN窗口] 获取窗口初始尺寸失败", y);
        }
    }, Ti = async (c) => {
      if (c.ctrlKey && (c.preventDefault(), c.stopPropagation(), !Ot.value && o.value)) {
        Ot.value = !0;
        try {
          const y = (await o.value.innerSize()).toLogical(
            await o.value.scaleFactor()
          ), $ = c.deltaY > 0 ? 0.95 : 1.05, E = y.width, Q = y.height, vt = Math.round(E * $), xt = Math.round(Q * $), Et = 50, $t = 3e3;
          if (vt >= Et && vt <= $t && xt >= Et && xt <= $t) {
            if (await o.value.setSize(new Ue(vt, xt)), w.value > 0) {
              const Ut = Math.round(
                vt / w.value * 100
              );
              wt.value = Ut / 100;
            }
            At.value = !0, En();
          }
        } catch (g) {
          A.error("[PIN窗口] 窗口缩放失败", g);
        } finally {
          setTimeout(() => {
            Ot.value = !1;
          }, 100);
        }
      }
    }, Zs = (c) => {
      r.value === "ocr" && c.ctrlKey && Ti(c);
    }, En = () => {
      At.value = !0, ee && clearTimeout(ee), ee = setTimeout(() => {
        At.value = !1;
      }, 1e3);
    }, nn = (c) => {
      c.preventDefault(), c.stopPropagation(), _.value = !1, setTimeout(() => {
        const g = window.innerWidth, y = window.innerHeight;
        rt.value = { width: g, height: y };
        const $ = Math.min(g, y);
        let E = 1;
        $ < 300 && (E = Math.max(0.4, $ / 300));
        const Q = r.value === "ocr" ? 176 : 150, vt = r.value === "ocr" && l.value.trim() ? 222 : 180, xt = Q * E, Et = vt * E;
        let $t = c.clientX, Ut = c.clientY;
        $t + xt > g && ($t = g - xt - 5), Ut + Et > y && (Ut = y - Et - 5), $t = Math.max(5, $t), Ut = Math.max(5, Ut), nt.value = { x: $t, y: Ut }, _.value = !0;
      }, 10);
    }, Xt = () => {
      _.value = !1, F.value = !1, et.value = !1;
    }, zi = async () => {
      o.value && (ut.value = !ut.value, await o.value.setAlwaysOnTop(ut.value), Xt());
    }, Ri = async (c) => {
      if (o.value && !Ot.value) {
        Ot.value = !0;
        try {
          const y = (await o.value.innerSize()).toLogical(
            await o.value.scaleFactor()
          ), $ = Math.round(y.width * c), E = Math.round(y.height * c), Q = 50, vt = 3e3;
          $ >= Q && $ <= vt && E >= Q && E <= vt && (await o.value.setSize(new Ue($, E)), w.value > 0 && (wt.value = $ / w.value), En());
        } catch (g) {
          A.error("[PIN窗口] 键盘缩放失败", g);
        } finally {
          setTimeout(() => {
            Ot.value = !1;
          }, 100);
        }
      }
    }, Li = async () => {
      if (o.value && v.value.width > 0 && v.value.height > 0)
        try {
          await o.value.setSize(
            new Ue(
              v.value.width,
              v.value.height
            )
          ), wt.value = 1, En();
        } catch (c) {
          A.error("[PIN窗口] 重置缩放失败", c);
        }
      Xt();
    }, Xs = async () => {
      try {
        const c = s.value;
        Xt(), o.value && await o.value.hide(), await C("copy_image_to_clipboard", { imageData: c }), Wt.success(t("pin.copySuccess")), o.value && await o.value.close();
      } catch (c) {
        A.error("[PIN窗口] 复制图片失败", c), Wt.error(t("pin.copyFailed")), o.value && await o.value.close();
      }
    }, Gs = async () => {
      const c = s.value;
      Xt(), o.value && await o.value.hide();
      try {
        await C("save_pin_image", { imageData: c }), Wt.success(t("pin.saveSuccess")), o.value && await o.value.close();
      } catch (g) {
        g === "SAVE_CANCELLED" ? (A.info("[PIN窗口] 用户取消保存，恢复窗口显示"), o.value && await o.value.show()) : (A.error("[PIN窗口] 保存图片失败", g), Wt.error(t("pin.saveFailed")), o.value && await o.value.close());
      }
    }, $n = async () => {
      o.value && await o.value.close();
    }, Pi = (c) => {
      c.preventDefault();
    }, Wn = async (c) => {
      if (c.button === 0 && o.value) {
        const g = c.target;
        if (g.hasAttribute("data-tauri-drag-region") || g.closest("[data-tauri-drag-region]")) {
          if (g.closest("button") || g.closest(".ocr-view-original"))
            return;
          try {
            await o.value.startDragging();
          } catch (y) {
            A.error("[PIN窗口] 拖拽窗口失败", y);
          }
        }
      }
    }, Ai = (c) => {
      const g = c.target;
      !g.closest(".context-menu") && !g.closest(".ocr-engine-btn-group") && !g.closest(".translate-btn-group") && !g.closest(".ocr-floating-menu") && Xt();
    }, qs = (c) => {
      if (c.button !== 0)
        return;
      const g = c.currentTarget, y = Ii(g, c.clientX, c.clientY);
      if (window.getSelection()?.removeAllRanges(), !y) {
        on();
        return;
      }
      c.preventDefault(), g.setPointerCapture(c.pointerId), X = c.pointerId, Z.value = !0, U.value = {
        anchor: y,
        focus: y
      };
    }, Di = (c) => {
      if (!Z.value || c.pointerId !== X)
        return;
      const g = c.currentTarget, y = Ii(g, c.clientX, c.clientY);
      !y || !U.value || (c.preventDefault(), U.value = {
        anchor: U.value.anchor,
        focus: y
      });
    }, Ks = (c) => {
      if (c.pointerId !== X)
        return;
      Di(c);
      const g = c.currentTarget;
      g.hasPointerCapture(c.pointerId) && g.releasePointerCapture(c.pointerId), Z.value = !1, X = null;
    }, Js = (c) => {
      c.pointerId === X && (Z.value = !1, X = null);
    }, on = () => {
      U.value = null, Z.value = !1, X = null;
    }, Qs = () => {
      const c = lt.value.length - 1;
      c < 0 || (window.getSelection()?.removeAllRanges(), U.value = {
        anchor: { blockIndex: 0, offset: 0 },
        focus: {
          blockIndex: c,
          offset: lt.value[c].text.length
        }
      });
    }, Ii = (c, g, y) => {
      const $ = c.querySelectorAll(
        ".ocr-overlay-block[data-selection-index]"
      );
      for (const E of $) {
        const Q = E.getBoundingClientRect();
        if (g < Q.left || g > Q.right || y < Q.top || y > Q.bottom)
          continue;
        const vt = Number(E.dataset.selectionIndex), xt = lt.value[vt];
        if (!xt)
          return null;
        const Et = Ln(xt), Ut = xi((g - Q.left) / Math.max(Q.width, 1), 0, 1) * Et.renderedWidth;
        return {
          blockIndex: vt,
          offset: Td(Et.boundaries, Ut)
        };
      }
      return null;
    }, Oi = (c) => {
      if (c.altKey && c.code === "Space") {
        c.preventDefault(), c.stopPropagation();
        return;
      }
      if (c.key === "Escape")
        _.value ? Xt() : $n();
      else if (c.ctrlKey || c.metaKey) {
        const y = !!c.target?.closest('input, textarea, [contenteditable="true"], [contenteditable="plaintext-only"]');
        c.key.toLowerCase() === "c" && r.value === "ocr" && Rt.value && !y ? (c.preventDefault(), In()) : c.key.toLowerCase() === "a" && r.value === "ocr" && lt.value.length > 0 && !y ? (c.preventDefault(), Qs()) : c.key === "0" ? (c.preventDefault(), Li()) : c.key === "=" || c.key === "+" ? (c.preventDefault(), Ri(1.05)) : c.key === "-" && (c.preventDefault(), Ri(0.95));
      }
    }, ta = async () => {
      if (o.value)
        try {
          const c = await C(
            "get_pin_window_data",
            { label: o.value.label }
          );
          c && bi(c) && await ki();
        } catch (c) {
          A.error("[PIN窗口] 主动获取窗口数据失败", c);
        }
    };
    return Ee(
      i,
      (c) => {
        if (Ht?.disconnect(), Ht = null, !c) {
          f.value = { width: 0, height: 0 };
          return;
        }
        Pn(), Ht = new ResizeObserver(Pn), Ht.observe(c);
      },
      { flush: "post" }
    ), Qe(async () => {
      if (e.value) {
        try {
          const [c, g] = await Promise.all([
            C("get_translation_engine"),
            C("get_ocr_language")
          ]);
          (c === "google" || c === "bing" || c === "offline") && (J.value = c), it.value = pt(g);
        } catch (c) {
          A.error("[PIN窗口] 读取默认 OCR/翻译设置失败", c);
        }
        try {
          o.value = tn.getCurrent();
          try {
            zt = await o.value.listen(
              "pin-window-data",
              (c) => {
                bi(c.payload) && ki();
              }
            ), await ta();
          } catch (c) {
            A.error("[PIN窗口] 设置事件监听失败", c);
          }
        } catch (c) {
          if (A.error("[PIN窗口] 初始化错误", c), o.value)
            try {
              await o.value.show();
            } catch (g) {
              A.error("[PIN窗口] 显示窗口失败", g);
            }
        }
        document.addEventListener("click", Ai), document.addEventListener("keydown", Oi, !0), document.addEventListener("contextmenu", Pi, !0), window.addEventListener("resize", H), window.addEventListener("scroll", H, !0), window.addEventListener("blur", Xt), document.body && (document.body.oncontextmenu = (c) => (c.preventDefault(), !1));
      }
    }), bo(() => {
      a.value && URL.revokeObjectURL(a.value), zt && zt(), document.removeEventListener("click", Ai), document.removeEventListener("keydown", Oi, !0), document.removeEventListener("contextmenu", Pi, !0), window.removeEventListener("resize", H), window.removeEventListener("scroll", H, !0), window.removeEventListener("blur", Xt), Ht?.disconnect(), Ht = null, document.body && (document.body.oncontextmenu = null), ee && clearTimeout(ee);
    }), (c, g) => (L(), D(
      "div",
      {
        class: ct(["pin-container", { "ocr-mode": r.value === "ocr" }]),
        ref_key: "containerRef",
        ref: e,
        onContextmenu: mt(nn, ["prevent"]),
        onWheelCapture: Zs
      },
      [
        V(" 图片容器 "),
        a.value && r.value === "pin" ? (L(), D(
          "div",
          {
            key: 0,
            class: "image-wrapper",
            style: gt(b.value),
            onWheelCapture: Ti,
            onContextmenu: mt(nn, ["prevent"]),
            "data-tauri-drag-region": "",
            onMousedown: Wn
          },
          [
            k("img", {
              src: a.value,
              alt: c.$t("screenshot.pin"),
              style: gt(B.value),
              onLoad: _i,
              draggable: "false",
              "data-tauri-drag-region": ""
            }, null, 44, Rd)
          ],
          36
          /* STYLE, NEED_HYDRATION */
        )) : V("v-if", !0),
        r.value === "ocr" ? (L(), D(
          "section",
          {
            key: 1,
            class: "ocr-shell",
            onContextmenu: mt(nn, ["prevent"])
          },
          [
            k("header", Ld, [
              k(
                "div",
                {
                  class: "ocr-titlebar",
                  "data-tauri-drag-region": "",
                  onMousedown: Wn
                },
                [
                  k("div", Pd, [
                    p(M(Ve), {
                      theme: "outline",
                      size: "18"
                    }),
                    k(
                      "span",
                      Ad,
                      Y(c.$t("pin.ocrResult")),
                      1
                      /* TEXT */
                    )
                  ]),
                  k("div", Dd, [
                    k("button", {
                      class: "ocr-window-btn",
                      title: ut.value ? c.$t("pin.togglePin") : c.$t("pin.pinWindow"),
                      onClick: mt(zi, ["stop"])
                    }, [
                      (L(), Lt(ce(ut.value ? M(Qn) : M(to)), {
                        size: "18",
                        theme: "outline"
                      }))
                    ], 8, Id),
                    g[2] || (g[2] = k(
                      "span",
                      { class: "ocr-window-divider" },
                      null,
                      -1
                      /* HOISTED */
                    )),
                    k("button", {
                      class: "ocr-window-btn",
                      title: c.$t("pin.minimize"),
                      onClick: mt(Us, ["stop"])
                    }, [
                      p(M(Ho), {
                        size: "18",
                        theme: "outline"
                      })
                    ], 8, Od),
                    k("button", {
                      class: "ocr-window-btn",
                      title: c.$t("pin.maximize"),
                      onClick: mt(Ys, ["stop"])
                    }, [
                      p(M(Pl), {
                        size: "14",
                        theme: "outline",
                        strokeWidth: 5
                      })
                    ], 8, Ed),
                    k("button", {
                      class: "ocr-window-btn",
                      title: c.$t("pin.close"),
                      onClick: mt($n, ["stop"])
                    }, [
                      p(M(Jn), {
                        size: "14",
                        theme: "outline",
                        strokeWidth: 6
                      })
                    ], 8, $d)
                  ])
                ],
                32
                /* NEED_HYDRATION */
              ),
              k(
                "div",
                {
                  class: "ocr-source-card",
                  "data-tauri-drag-region": "",
                  onMousedown: Wn
                },
                [
                  k("div", Wd, [
                    a.value ? (L(), D("img", {
                      key: 0,
                      src: a.value,
                      alt: c.$t("pin.ocrPreviewAlt"),
                      onLoad: _i,
                      draggable: "false"
                    }, null, 40, Bd)) : V("v-if", !0)
                  ]),
                  k("div", Nd, [
                    k(
                      "div",
                      Hd,
                      Y(x.value),
                      1
                      /* TEXT */
                    ),
                    k("div", jd, [
                      k(
                        "span",
                        Fd,
                        Y(dt.value),
                        1
                        /* TEXT */
                      ),
                      g[3] || (g[3] = k(
                        "span",
                        {
                          class: "ocr-status-separator",
                          "data-tauri-drag-region": ""
                        },
                        null,
                        -1
                        /* HOISTED */
                      )),
                      k(
                        "span",
                        Vd,
                        Y(ft.value),
                        1
                        /* TEXT */
                      ),
                      !u.value && !d.value && l.value.trim() ? (L(), D("span", Ud, " ✓ ")) : V("v-if", !0)
                    ])
                  ]),
                  k("button", {
                    class: "ocr-view-original",
                    title: P.value ? c.$t("pin.viewResult") : c.$t("pin.viewOriginal"),
                    onClick: mt(js, ["stop"])
                  }, [
                    (L(), Lt(ce(P.value ? M(Ve) : M(Ml)), {
                      size: "24",
                      theme: "outline",
                      strokeWidth: 2.6
                    })),
                    k(
                      "span",
                      null,
                      Y(P.value ? c.$t("pin.viewResult") : c.$t("pin.viewOriginal")),
                      1
                      /* TEXT */
                    )
                  ], 8, Yd)
                ],
                32
                /* NEED_HYDRATION */
              )
            ]),
            k(
              "main",
              {
                class: "ocr-reading-surface",
                onMousedown: g[1] || (g[1] = mt(() => {
                }, ["stop"]))
              },
              [
                P.value ? (L(), D("div", Zd, [
                  k("img", {
                    src: a.value || s.value,
                    alt: c.$t("pin.originalImageAlt")
                  }, null, 8, Xd)
                ])) : (L(), D(
                  Bt,
                  { key: 1 },
                  [
                    u.value ? (L(), D("div", Gd, [
                      p(M(Qi), {
                        class: "ocr-loading-icon",
                        size: "20",
                        theme: "outline",
                        strokeWidth: 3
                      }),
                      k(
                        "span",
                        null,
                        Y(c.$t("pin.recognizing")),
                        1
                        /* TEXT */
                      )
                    ])) : d.value ? (L(), D(
                      "div",
                      qd,
                      Y(d.value),
                      1
                      /* TEXT */
                    )) : l.value.trim() ? (L(), D(
                      "div",
                      {
                        key: 3,
                        class: ct(["ocr-result-layout", { "records-open": N.value }])
                      },
                      [
                        k("section", Jd, [
                          k("div", Qd, [
                            k("img", {
                              ref_key: "ocrPreviewImageRef",
                              ref: i,
                              src: a.value || s.value,
                              alt: c.$t("pin.ocrSourceAlt"),
                              onLoad: Pn
                            }, null, 40, tg),
                            Me.value.length > 0 ? (L(), D("div", eg, [
                              (L(!0), D(
                                Bt,
                                null,
                                qt(Me.value, (y) => (L(), D(
                                  "span",
                                  {
                                    key: y.id,
                                    class: "ocr-selection-highlight",
                                    style: gt(xs(y))
                                  },
                                  null,
                                  4
                                  /* STYLE */
                                ))),
                                128
                                /* KEYED_FRAGMENT */
                              ))
                            ])) : V("v-if", !0),
                            lt.value.length > 0 ? (L(), D(
                              "div",
                              {
                                key: 1,
                                class: "ocr-text-overlay",
                                onPointerdown: qs,
                                onPointermove: Di,
                                onPointerup: Ks,
                                onPointercancel: Js
                              },
                              [
                                (L(!0), D(
                                  Bt,
                                  null,
                                  qt(lt.value, (y, $) => (L(), D("span", {
                                    key: y.id,
                                    class: "ocr-overlay-block",
                                    "data-selection-index": $,
                                    style: gt(vs(y)),
                                    textContent: Y(y.text.trim())
                                  }, null, 12, ng))),
                                  128
                                  /* KEYED_FRAGMENT */
                                ))
                              ],
                              32
                              /* NEED_HYDRATION */
                            )) : V("v-if", !0)
                          ])
                        ]),
                        N.value ? (L(), D(
                          "section",
                          {
                            key: 0,
                            class: "ocr-record-pane",
                            onPointerdown: on
                          },
                          [
                            T.value ? (L(), D("section", ig, [
                              k("div", og, [
                                k(
                                  "span",
                                  sg,
                                  Y(c.$t("pin.selectedText")),
                                  1
                                  /* TEXT */
                                ),
                                k(
                                  "div",
                                  ag,
                                  Y(T.value.sourceText),
                                  1
                                  /* TEXT */
                                )
                              ]),
                              k("div", rg, [
                                k(
                                  "span",
                                  lg,
                                  Y(O.value),
                                  1
                                  /* TEXT */
                                ),
                                k("div", {
                                  class: "ocr-selection-translation-editor",
                                  contenteditable: "plaintext-only",
                                  spellcheck: "false",
                                  textContent: Y(T.value.translatedText),
                                  onBlur: Es
                                }, null, 40, cg)
                              ])
                            ])) : V("v-if", !0),
                            (L(!0), D(
                              Bt,
                              null,
                              qt(h.value, (y, $) => (L(), D(
                                "article",
                                {
                                  key: y.id,
                                  class: ct(["ocr-record-item", { selected: y.selected }])
                                },
                                [
                                  k("div", hg, [
                                    k("header", {
                                      class: "ocr-record-header",
                                      onClick: mt((E) => Si(y.id), ["stop"])
                                    }, [
                                      k("input", {
                                        class: "ocr-record-checkbox",
                                        type: "checkbox",
                                        checked: y.selected,
                                        onChange: mt((E) => Si(y.id), ["stop"]),
                                        onClick: g[0] || (g[0] = mt(() => {
                                        }, ["stop"]))
                                      }, null, 40, dg),
                                      k(
                                        "span",
                                        gg,
                                        "#" + Y($ + 1),
                                        1
                                        /* TEXT */
                                      )
                                    ], 8, ug),
                                    k("div", {
                                      class: "ocr-record-editor",
                                      contenteditable: "plaintext-only",
                                      spellcheck: "false",
                                      textContent: Y(y.text),
                                      onBlur: (E) => Ci(y.id, "text", E)
                                    }, null, 40, fg),
                                    y.confidence > 0 ? (L(), D(
                                      "span",
                                      mg,
                                      Y(Math.round(y.confidence)) + "% ",
                                      1
                                      /* TEXT */
                                    )) : V("v-if", !0)
                                  ]),
                                  y.translatedText ? (L(), D("div", pg, [
                                    k(
                                      "span",
                                      wg,
                                      Y(O.value),
                                      1
                                      /* TEXT */
                                    ),
                                    k("div", {
                                      class: "ocr-record-editor translated",
                                      contenteditable: "plaintext-only",
                                      spellcheck: "false",
                                      textContent: Y(y.translatedText),
                                      onBlur: (E) => Ci(y.id, "translatedText", E)
                                    }, null, 40, yg)
                                  ])) : V("v-if", !0)
                                ],
                                2
                                /* CLASS */
                              ))),
                              128
                              /* KEYED_FRAGMENT */
                            ))
                          ],
                          32
                          /* NEED_HYDRATION */
                        )) : V("v-if", !0)
                      ],
                      2
                      /* CLASS */
                    )) : (L(), D(
                      "div",
                      Kd,
                      Y(c.$t("pin.noTextRecognized")),
                      1
                      /* TEXT */
                    ))
                  ],
                  64
                  /* STABLE_FRAGMENT */
                ))
              ],
              32
              /* NEED_HYDRATION */
            ),
            k("footer", vg, [
              p(ne, {
                class: "ocr-action-btn",
                type: "text",
                title: c.$t("pin.copyText"),
                disabled: !l.value.trim(),
                onClick: mt(In, ["stop"])
              }, {
                default: It(() => [
                  p(M(jn), {
                    size: "22",
                    theme: "outline",
                    strokeWidth: 2.7
                  }),
                  k(
                    "span",
                    null,
                    Y(se.value > 0 ? `${c.$t("pin.copyText")} (${se.value})` : c.$t("pin.copyText")),
                    1
                    /* TEXT */
                  )
                ]),
                _: 1
                /* STABLE */
              }, 8, ["title", "disabled"]),
              p(ne, {
                class: "ocr-action-btn",
                type: "text",
                title: N.value ? bt.value : ht.value,
                disabled: h.value.length === 0,
                onClick: mt(Fs, ["stop"])
              }, {
                default: It(() => [
                  p(M(Ve), {
                    size: "22",
                    theme: "outline",
                    strokeWidth: 2.7
                  }),
                  k(
                    "span",
                    null,
                    Y(N.value ? bt.value : ht.value),
                    1
                    /* TEXT */
                  )
                ]),
                _: 1
                /* STABLE */
              }, 8, ["title", "disabled"]),
              k(
                "div",
                {
                  ref_key: "translateMenuAnchorRef",
                  ref: tt,
                  class: "translate-btn-group relative"
                },
                [
                  p(ne, {
                    class: "ocr-action-btn translate-main",
                    type: "text",
                    title: c.$t("pin.translate"),
                    disabled: !l.value.trim() || j.value,
                    onClick: mt(Ns, ["stop"])
                  }, {
                    default: It(() => [
                      j.value ? (L(), Lt(M(Qi), {
                        key: 1,
                        class: "ocr-loading-icon",
                        size: "22",
                        theme: "outline",
                        strokeWidth: 2.7
                      })) : (L(), Lt(M(jo), {
                        key: 0,
                        size: "22",
                        theme: "outline",
                        strokeWidth: 2.7
                      })),
                      k(
                        "span",
                        null,
                        Y(c.$t("pin.translate")),
                        1
                        /* TEXT */
                      )
                    ]),
                    _: 1
                    /* STABLE */
                  }, 8, ["title", "disabled"]),
                  p(ne, {
                    class: "ocr-action-btn translate-arrow",
                    type: "text",
                    disabled: !l.value.trim() || j.value,
                    onClick: mt($s, ["stop"])
                  }, {
                    default: It(() => [
                      p(M(Ji), {
                        size: "17",
                        theme: "outline",
                        strokeWidth: 2.8
                      })
                    ]),
                    _: 1
                    /* STABLE */
                  }, 8, ["disabled"]),
                  V(" 翻译引擎菜单 "),
                  F.value ? (L(), D(
                    "div",
                    {
                      key: 0,
                      class: "translate-menu ocr-floating-menu",
                      style: gt(q.value)
                    },
                    [
                      (L(!0), D(
                        Bt,
                        null,
                        qt(G.value, (y) => (L(), D("div", {
                          key: y.value,
                          class: ct(["menu-item", { active: J.value === y.value }]),
                          onClick: ($) => Ws(y.value)
                        }, [
                          k(
                            "span",
                            kg,
                            Y(y.label),
                            1
                            /* TEXT */
                          ),
                          J.value === y.value ? (L(), Lt(ce(M(Kn)), {
                            key: 0,
                            class: "menu-item-icon",
                            size: "16"
                          })) : V("v-if", !0)
                        ], 10, xg))),
                        128
                        /* KEYED_FRAGMENT */
                      ))
                    ],
                    4
                    /* STYLE */
                  )) : V("v-if", !0)
                ],
                512
                /* NEED_PATCH */
              ),
              k(
                "div",
                {
                  ref_key: "ocrLanguageMenuAnchorRef",
                  ref: st,
                  class: "ocr-engine-btn-group relative"
                },
                [
                  p(ne, {
                    class: "ocr-action-btn ocr-engine-main",
                    type: "text",
                    title: c.$t("pin.ocrLanguage"),
                    disabled: u.value,
                    onClick: mt(Mi, ["stop"])
                  }, {
                    default: It(() => [
                      p(M(Ve), {
                        size: "22",
                        theme: "outline",
                        strokeWidth: 2.7
                      }),
                      k(
                        "span",
                        null,
                        Y(kt.value),
                        1
                        /* TEXT */
                      )
                    ]),
                    _: 1
                    /* STABLE */
                  }, 8, ["title", "disabled"]),
                  p(ne, {
                    class: "ocr-action-btn ocr-engine-arrow",
                    type: "text",
                    disabled: u.value,
                    onClick: mt(Mi, ["stop"])
                  }, {
                    default: It(() => [
                      p(M(Ji), {
                        size: "14",
                        theme: "outline",
                        strokeWidth: 3
                      })
                    ]),
                    _: 1
                    /* STABLE */
                  }, 8, ["disabled"]),
                  et.value ? (L(), D(
                    "div",
                    {
                      key: 0,
                      class: "ocr-engine-menu ocr-floating-menu",
                      style: gt(yt.value)
                    },
                    [
                      (L(!0), D(
                        Bt,
                        null,
                        qt(ot.value, (y) => (L(), D("div", {
                          key: y.value,
                          class: ct(["menu-item", { active: it.value === y.value }]),
                          onClick: ($) => Bs(y.value)
                        }, [
                          k(
                            "span",
                            Sg,
                            Y(y.label),
                            1
                            /* TEXT */
                          ),
                          it.value === y.value ? (L(), Lt(ce(M(Kn)), {
                            key: 0,
                            class: "menu-item-icon",
                            size: "16"
                          })) : V("v-if", !0)
                        ], 10, bg))),
                        128
                        /* KEYED_FRAGMENT */
                      ))
                    ],
                    4
                    /* STYLE */
                  )) : V("v-if", !0)
                ],
                512
                /* NEED_PATCH */
              ),
              k("div", Cg, [
                p(ne, {
                  class: "ocr-action-btn ocr-engine-main",
                  type: "text",
                  title: c.$t("pin.recognizeAgain"),
                  disabled: u.value || !s.value,
                  onClick: mt(An, ["stop"])
                }, {
                  default: It(() => [
                    p(M(zl), {
                      size: "22",
                      theme: "outline",
                      strokeWidth: 2.7
                    }),
                    k(
                      "span",
                      null,
                      Y(c.$t("pin.recognizeAgain")),
                      1
                      /* TEXT */
                    )
                  ]),
                  _: 1
                  /* STABLE */
                }, 8, ["title", "disabled"])
              ]),
              p(ne, {
                class: "ocr-action-btn",
                type: "text",
                title: c.$t("pin.saveAsText"),
                disabled: !l.value.trim(),
                onClick: mt(Ds, ["stop"])
              }, {
                default: It(() => [
                  p(M(no), {
                    size: "22",
                    theme: "outline",
                    strokeWidth: 2.7
                  }),
                  k(
                    "span",
                    null,
                    Y(c.$t("pin.saveAsText")),
                    1
                    /* TEXT */
                  )
                ]),
                _: 1
                /* STABLE */
              }, 8, ["title", "disabled"]),
              g[4] || (g[4] = k(
                "span",
                { class: "ocr-action-divider" },
                null,
                -1
                /* HOISTED */
              )),
              p(ne, {
                class: "ocr-action-btn more",
                type: "text",
                title: c.$t("pin.more"),
                onClick: mt(Vs, ["stop"])
              }, {
                default: It(() => [
                  p(M(bl), {
                    size: "22",
                    theme: "outline",
                    strokeWidth: 2.8
                  })
                ]),
                _: 1
                /* STABLE */
              }, 8, ["title"])
            ])
          ],
          32
          /* NEED_HYDRATION */
        )) : V("v-if", !0),
        At.value ? (L(), D(
          "div",
          Mg,
          Y(Math.round(wt.value * 100)) + "% ",
          1
          /* TEXT */
        )) : V("v-if", !0),
        V(" 右键菜单 "),
        _.value ? (L(), D(
          "div",
          {
            key: 3,
            class: "context-menu",
            style: gt(Cs.value)
          },
          [
            k("div", {
              class: "menu-item",
              onClick: zi
            }, [
              (L(), Lt(ce(ut.value ? M(to) : M(Qn)), {
                class: "menu-item-icon",
                size: "18",
                strokeWidth: 3
              })),
              k(
                "span",
                null,
                Y(ut.value ? c.$t("pin.togglePin") : c.$t("pin.pinWindow")),
                1
                /* TEXT */
              )
            ]),
            k("div", {
              class: "menu-item",
              onClick: Li
            }, [
              p(M(Tl), {
                class: "menu-item-icon",
                size: "18",
                theme: "outline",
                strokeWidth: 3
              }),
              k(
                "span",
                null,
                Y(c.$t("pin.resetZoom")),
                1
                /* TEXT */
              )
            ]),
            k("div", {
              class: "menu-item",
              onClick: Xs
            }, [
              p(M(jn), {
                class: "menu-item-icon",
                size: "18",
                theme: "outline",
                strokeWidth: 3
              }),
              k(
                "span",
                null,
                Y(c.$t("pin.copyImage")),
                1
                /* TEXT */
              )
            ]),
            k("div", {
              class: "menu-item",
              onClick: Gs
            }, [
              p(M(no), {
                class: "menu-item-icon",
                size: "18",
                theme: "outline",
                strokeWidth: 3
              }),
              k(
                "span",
                null,
                Y(c.$t("pin.saveImage")),
                1
                /* TEXT */
              )
            ]),
            r.value === "ocr" && l.value.trim() ? (L(), D("div", {
              key: 0,
              class: "menu-item",
              onClick: In
            }, [
              p(M(jn), {
                class: "menu-item-icon",
                size: "18",
                theme: "outline",
                strokeWidth: 3
              }),
              k(
                "span",
                null,
                Y(c.$t("pin.copyText")),
                1
                /* TEXT */
              )
            ])) : V("v-if", !0),
            g[5] || (g[5] = k(
              "div",
              { class: "menu-divider" },
              null,
              -1
              /* HOISTED */
            )),
            k("div", {
              class: "menu-item danger",
              onClick: $n
            }, [
              p(M(Jn), {
                class: "menu-item-icon",
                size: "18",
                theme: "outline",
                strokeWidth: 3
              }),
              k(
                "span",
                null,
                Y(c.$t("pin.closePin")),
                1
                /* TEXT */
              )
            ])
          ],
          4
          /* STYLE */
        )) : V("v-if", !0)
      ],
      34
      /* CLASS, NEED_HYDRATION */
    ));
  }
}), Tg = /* @__PURE__ */ _n(_g, [["__scopeId", "data-v-b8b84cd7"]]), zg = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Tg
}, Symbol.toStringTag, { value: "Module" }));
async function Rg(n) {
  return n.toDataURL("image/png");
}
function Lg(n) {
  return Array.isArray(n) ? n.map((t) => {
    if (!t || typeof t != "object")
      return null;
    const e = t, i = typeof e.text == "string" ? e.text : "";
    return i.trim() ? {
      text: i,
      x: Number(e.x || 0),
      y: Number(e.y || 0),
      width: Number(e.width || 0),
      height: Number(e.height || 0),
      fontSize: Number(e.fontSize || 0),
      lineHeight: Number(e.lineHeight || 0),
      angle: Number(e.angle || 0),
      confidence: Number(e.confidence || 0)
    } : null;
  }).filter((t) => !!t) : [];
}
async function Pg(n) {
  const t = Date.now(), e = await Rg(n);
  _t.log("[RapidOCR] recognizeFromCanvas start", {
    width: n.width,
    height: n.height
  });
  try {
    const i = await C("recognize_text_from_image", {
      imageData: e,
      engine: "rapidocr",
      language: "auto"
    }), o = Lg(i.blocks), s = typeof i.full_text == "string" && i.full_text || typeof i.text == "string" && i.text || o.map((r) => r.text).join(`
`), a = {
      blocks: o,
      full_text: s,
      text: s,
      language: typeof i.language == "string" && i.language || Do(s),
      confidence: Number(i.confidence || 0),
      engine: typeof i.engine == "string" ? i.engine : "rapidocr"
    };
    return _t.log("[RapidOCR] recognizeFromCanvas success", {
      durationMs: Date.now() - t,
      confidence: a.confidence,
      blocks: a.blocks.length,
      textLength: a.full_text.trim().length,
      textPreview: a.full_text.trim().slice(0, 300)
    }), a;
  } catch (i) {
    throw A.error("[OCR] RapidOCR recognizeFromCanvas failed", i), _t.log("[RapidOCR] recognizeFromCanvas failed", {
      durationMs: Date.now() - t,
      error: i instanceof Error ? `${i.name}: ${i.message}` : String(i)
    }), i;
  }
}
async function Ag() {
  return Promise.resolve();
}
async function Dg() {
  return Promise.resolve();
}
const Ig = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  recognizeFromCanvas: Pg,
  terminateOcr: Dg,
  warmupOcr: Ag
}, Symbol.toStringTag, { value: "Module" }));
export {
  Bg as activate
};
