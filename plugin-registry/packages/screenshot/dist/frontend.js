var Wo = Object.defineProperty;
var Bo = (n, t, e) => t in n ? Wo(n, t, { enumerable: !0, configurable: !0, writable: !0, value: e }) : n[t] = e;
var L = (n, t, e) => Bo(n, typeof t != "symbol" ? t + "" : t, e);
import { inject as me, createVNode as p, defineComponent as Tt, ref as $, computed as I, watch as Xe, nextTick as pe, createElementBlock as E, openBlock as P, createCommentVNode as H, createElementVNode as y, Fragment as Ht, renderList as qt, normalizeClass as it, createBlock as Ct, resolveDynamicComponent as fe, unref as S, toDisplayString as N, normalizeStyle as lt, onMounted as Ge, onUnmounted as Jn, withDirectives as Fe, withKeys as Ai, vModelText as No, getCurrentInstance as ze, readonly as Ho, getCurrentScope as jo, onScopeDispose as Fo, isRef as Vo, warn as Uo, provide as Yo, mergeProps as Zo, renderSlot as ee, Transition as Qn, withCtx as zt, createTextVNode as Xo, vShow as pn, shallowReactive as Go, withModifiers as mt, isVNode as Ve, render as wn } from "vue";
import { useI18n as ms } from "vue-i18n";
const Eg = (n) => {
  n.registerRoute({
    target: "window",
    path: "/screenshot",
    name: "Screenshot",
    component: () => Promise.resolve().then(() => vc)
  }), n.registerRoute({
    target: "window",
    path: "/pin",
    name: "Pin",
    component: () => Promise.resolve().then(() => Ag)
  });
};
function Ko(n, t, e, i) {
  if (typeof t == "function" ? n !== t || !0 : !t.has(n)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
  return e === "m" ? i : e === "a" ? i.call(n) : i ? i.value : t.get(n);
}
function qo(n, t, e, i, s) {
  if (typeof t == "function" ? n !== t || !0 : !t.has(n)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
  return t.set(n, e), e;
}
var cn;
const jt = "__TAURI_TO_IPC_KEY__";
function Jo(n, t = !1) {
  return window.__TAURI_INTERNALS__.transformCallback(n, t);
}
async function b(n, t = {}, e) {
  return window.__TAURI_INTERNALS__.invoke(n, t, e);
}
function Qo(n, t = "asset") {
  return window.__TAURI_INTERNALS__.convertFileSrc(n, t);
}
class ta {
  get rid() {
    return Ko(this, cn, "f");
  }
  constructor(t) {
    cn.set(this, void 0), qo(this, cn, t);
  }
  /**
   * Destroys and cleans up this resource from memory.
   * **You should not call any method on this object anymore and should drop any reference to it.**
   */
  async close() {
    return b("plugin:resources|close", {
      rid: this.rid
    });
  }
}
cn = /* @__PURE__ */ new WeakMap();
class Ne {
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
    return new He(this.width * t, this.height * t);
  }
  [jt]() {
    return {
      width: this.width,
      height: this.height
    };
  }
  toJSON() {
    return this[jt]();
  }
}
class He {
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
    return new Ne(this.width / t, this.height / t);
  }
  [jt]() {
    return {
      width: this.width,
      height: this.height
    };
  }
  toJSON() {
    return this[jt]();
  }
}
class Se {
  constructor(t) {
    this.size = t;
  }
  toLogical(t) {
    return this.size instanceof Ne ? this.size : this.size.toLogical(t);
  }
  toPhysical(t) {
    return this.size instanceof He ? this.size : this.size.toPhysical(t);
  }
  [jt]() {
    return {
      [`${this.size.type}`]: {
        width: this.size.width,
        height: this.size.height
      }
    };
  }
  toJSON() {
    return this[jt]();
  }
}
class ps {
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
    return new se(this.x * t, this.y * t);
  }
  [jt]() {
    return {
      x: this.x,
      y: this.y
    };
  }
  toJSON() {
    return this[jt]();
  }
}
class se {
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
    return new ps(this.x / t, this.y / t);
  }
  [jt]() {
    return {
      x: this.x,
      y: this.y
    };
  }
  toJSON() {
    return this[jt]();
  }
}
class tn {
  constructor(t) {
    this.position = t;
  }
  toLogical(t) {
    return this.position instanceof ps ? this.position : this.position.toLogical(t);
  }
  toPhysical(t) {
    return this.position instanceof se ? this.position : this.position.toPhysical(t);
  }
  [jt]() {
    return {
      [`${this.position.type}`]: {
        x: this.position.x,
        y: this.position.y
      }
    };
  }
  toJSON() {
    return this[jt]();
  }
}
var Wt;
(function(n) {
  n.WINDOW_RESIZED = "tauri://resize", n.WINDOW_MOVED = "tauri://move", n.WINDOW_CLOSE_REQUESTED = "tauri://close-requested", n.WINDOW_DESTROYED = "tauri://destroyed", n.WINDOW_FOCUS = "tauri://focus", n.WINDOW_BLUR = "tauri://blur", n.WINDOW_SCALE_FACTOR_CHANGED = "tauri://scale-change", n.WINDOW_THEME_CHANGED = "tauri://theme-changed", n.WINDOW_CREATED = "tauri://window-created", n.WEBVIEW_CREATED = "tauri://webview-created", n.DRAG_ENTER = "tauri://drag-enter", n.DRAG_OVER = "tauri://drag-over", n.DRAG_DROP = "tauri://drag-drop", n.DRAG_LEAVE = "tauri://drag-leave";
})(Wt || (Wt = {}));
async function ws(n, t) {
  await b("plugin:event|unlisten", {
    event: n,
    eventId: t
  });
}
async function yn(n, t, e) {
  var i;
  const s = typeof e?.target == "string" ? { kind: "AnyLabel", label: e.target } : (i = e?.target) !== null && i !== void 0 ? i : { kind: "Any" };
  return b("plugin:event|listen", {
    event: n,
    target: s,
    handler: Jo(t)
  }).then((o) => async () => ws(n, o));
}
async function ea(n, t, e) {
  return yn(n, (i) => {
    ws(n, i.id), t(i);
  }, e);
}
async function na(n, t) {
  await b("plugin:event|emit", {
    event: n,
    payload: t
  });
}
async function ia(n, t, e) {
  await b("plugin:event|emit_to", {
    target: typeof n == "string" ? { kind: "AnyLabel", label: n } : n,
    event: t,
    payload: e
  });
}
let sa = class hn extends ta {
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
    return b("plugin:image|new", {
      rgba: vn(t),
      width: e,
      height: i
    }).then((s) => new hn(s));
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
    return b("plugin:image|from_bytes", {
      bytes: vn(t)
    }).then((e) => new hn(e));
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
    return b("plugin:image|from_path", { path: t }).then((e) => new hn(e));
  }
  /** Returns the RGBA data for this image, in row-major order from top to bottom.  */
  async rgba() {
    return b("plugin:image|rgba", {
      rid: this.rid
    }).then((t) => new Uint8Array(t));
  }
  /** Returns the size of this image.  */
  async size() {
    return b("plugin:image|size", { rid: this.rid });
  }
};
function vn(n) {
  return n == null ? null : typeof n == "string" ? n : n instanceof sa ? n.rid : n;
}
var Wn;
(function(n) {
  n[n.Critical = 1] = "Critical", n[n.Informational = 2] = "Informational";
})(Wn || (Wn = {}));
class oa {
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
var Di;
(function(n) {
  n.None = "none", n.Normal = "normal", n.Indeterminate = "indeterminate", n.Paused = "paused", n.Error = "error";
})(Di || (Di = {}));
function aa() {
  return new Ke(window.__TAURI_INTERNALS__.metadata.currentWindow.label, {
    // @ts-expect-error `skip` is not defined in the public API but it is handled by the constructor
    skip: !0
  });
}
async function In() {
  return b("plugin:window|get_all_windows").then((n) => n.map((t) => new Ke(t, {
    // @ts-expect-error `skip` is not defined in the public API but it is handled by the constructor
    skip: !0
  })));
}
const On = ["tauri://created", "tauri://error"];
class Ke {
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
    this.label = t, this.listeners = /* @__PURE__ */ Object.create(null), e?.skip || b("plugin:window|create", {
      options: {
        ...e,
        parent: typeof e.parent == "string" ? e.parent : (i = e.parent) === null || i === void 0 ? void 0 : i.label,
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
    var e;
    return (e = (await In()).find((i) => i.label === t)) !== null && e !== void 0 ? e : null;
  }
  /**
   * Get an instance of `Window` for the current window.
   */
  static getCurrent() {
    return aa();
  }
  /**
   * Gets a list of instances of `Window` for all available windows.
   */
  static async getAll() {
    return In();
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
    for (const t of await In())
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
    } : ea(t, e, {
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
    if (On.includes(t)) {
      for (const i of this.listeners[t] || [])
        i({
          event: t,
          id: -1,
          payload: e
        });
      return;
    }
    return na(t, e);
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
    if (On.includes(e)) {
      for (const s of this.listeners[e] || [])
        s({
          event: e,
          id: -1,
          payload: i
        });
      return;
    }
    return ia(t, e, i);
  }
  /** @ignore */
  _handleTauriEvent(t, e) {
    return On.includes(t) ? (t in this.listeners ? this.listeners[t].push(e) : this.listeners[t] = [e], !0) : !1;
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
    return b("plugin:window|scale_factor", {
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
    return b("plugin:window|inner_position", {
      label: this.label
    }).then((t) => new se(t));
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
    return b("plugin:window|outer_position", {
      label: this.label
    }).then((t) => new se(t));
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
    return b("plugin:window|inner_size", {
      label: this.label
    }).then((t) => new He(t));
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
    return b("plugin:window|outer_size", {
      label: this.label
    }).then((t) => new He(t));
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
    return b("plugin:window|is_fullscreen", {
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
    return b("plugin:window|is_minimized", {
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
    return b("plugin:window|is_maximized", {
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
    return b("plugin:window|is_focused", {
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
    return b("plugin:window|is_decorated", {
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
    return b("plugin:window|is_resizable", {
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
    return b("plugin:window|is_maximizable", {
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
    return b("plugin:window|is_minimizable", {
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
    return b("plugin:window|is_closable", {
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
    return b("plugin:window|is_visible", {
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
    return b("plugin:window|title", {
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
    return b("plugin:window|theme", {
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
    return b("plugin:window|is_always_on_top", {
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
    return b("plugin:window|center", {
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
    return t && (t === Wn.Critical ? e = { type: "Critical" } : e = { type: "Informational" }), b("plugin:window|request_user_attention", {
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
    return b("plugin:window|set_resizable", {
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
    return b("plugin:window|set_enabled", {
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
    return b("plugin:window|is_enabled", {
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
    return b("plugin:window|set_maximizable", {
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
    return b("plugin:window|set_minimizable", {
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
    return b("plugin:window|set_closable", {
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
    return b("plugin:window|set_title", {
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
    return b("plugin:window|maximize", {
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
    return b("plugin:window|unmaximize", {
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
    return b("plugin:window|toggle_maximize", {
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
    return b("plugin:window|minimize", {
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
    return b("plugin:window|unminimize", {
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
    return b("plugin:window|show", {
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
    return b("plugin:window|hide", {
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
    return b("plugin:window|close", {
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
    return b("plugin:window|destroy", {
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
    return b("plugin:window|set_decorations", {
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
    return b("plugin:window|set_shadow", {
      label: this.label,
      value: t
    });
  }
  /**
   * Set window effects.
   */
  async setEffects(t) {
    return b("plugin:window|set_effects", {
      label: this.label,
      value: t
    });
  }
  /**
   * Clear any applied effects if possible.
   */
  async clearEffects() {
    return b("plugin:window|set_effects", {
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
    return b("plugin:window|set_always_on_top", {
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
    return b("plugin:window|set_always_on_bottom", {
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
    return b("plugin:window|set_content_protected", {
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
    return b("plugin:window|set_size", {
      label: this.label,
      value: t instanceof Se ? t : new Se(t)
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
    return b("plugin:window|set_min_size", {
      label: this.label,
      value: t instanceof Se ? t : t ? new Se(t) : null
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
    return b("plugin:window|set_max_size", {
      label: this.label,
      value: t instanceof Se ? t : t ? new Se(t) : null
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
    return b("plugin:window|set_size_constraints", {
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
    return b("plugin:window|set_position", {
      label: this.label,
      value: t instanceof tn ? t : new tn(t)
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
    return b("plugin:window|set_fullscreen", {
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
    return b("plugin:window|set_focus", {
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
    return b("plugin:window|set_icon", {
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
    return b("plugin:window|set_skip_taskbar", {
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
    return b("plugin:window|set_cursor_grab", {
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
    return b("plugin:window|set_cursor_visible", {
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
    return b("plugin:window|set_cursor_icon", {
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
    return b("plugin:window|set_background_color", { color: t });
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
    return b("plugin:window|set_cursor_position", {
      label: this.label,
      value: t instanceof tn ? t : new tn(t)
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
    return b("plugin:window|set_ignore_cursor_events", {
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
    return b("plugin:window|start_dragging", {
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
    return b("plugin:window|start_resize_dragging", {
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
    return b("plugin:window|set_badge_count", {
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
    return b("plugin:window|set_badge_label", {
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
    return b("plugin:window|set_overlay_icon", {
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
    return b("plugin:window|set_progress_bar", {
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
    return b("plugin:window|set_visible_on_all_workspaces", {
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
    return b("plugin:window|set_title_bar_style", {
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
    return b("plugin:window|set_theme", {
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
    return this.listen(Wt.WINDOW_RESIZED, (e) => {
      e.payload = new He(e.payload), t(e);
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
    return this.listen(Wt.WINDOW_MOVED, (e) => {
      e.payload = new se(e.payload), t(e);
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
    return this.listen(Wt.WINDOW_CLOSE_REQUESTED, async (e) => {
      const i = new oa(e);
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
    const e = await this.listen(Wt.DRAG_ENTER, (a) => {
      t({
        ...a,
        payload: {
          type: "enter",
          paths: a.payload.paths,
          position: new se(a.payload.position)
        }
      });
    }), i = await this.listen(Wt.DRAG_OVER, (a) => {
      t({
        ...a,
        payload: {
          type: "over",
          position: new se(a.payload.position)
        }
      });
    }), s = await this.listen(Wt.DRAG_DROP, (a) => {
      t({
        ...a,
        payload: {
          type: "drop",
          paths: a.payload.paths,
          position: new se(a.payload.position)
        }
      });
    }), o = await this.listen(Wt.DRAG_LEAVE, (a) => {
      t({ ...a, payload: { type: "leave" } });
    });
    return () => {
      e(), s(), i(), o();
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
    const e = await this.listen(Wt.WINDOW_FOCUS, (s) => {
      t({ ...s, payload: !0 });
    }), i = await this.listen(Wt.WINDOW_BLUR, (s) => {
      t({ ...s, payload: !1 });
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
    return this.listen(Wt.WINDOW_SCALE_FACTOR_CHANGED, t);
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
    return this.listen(Wt.WINDOW_THEME_CHANGED, t);
  }
}
var Ii;
(function(n) {
  n.Disabled = "disabled", n.Throttle = "throttle", n.Suspend = "suspend";
})(Ii || (Ii = {}));
var Oi;
(function(n) {
  n.AppearanceBased = "appearanceBased", n.Light = "light", n.Dark = "dark", n.MediumLight = "mediumLight", n.UltraDark = "ultraDark", n.Titlebar = "titlebar", n.Selection = "selection", n.Menu = "menu", n.Popover = "popover", n.Sidebar = "sidebar", n.HeaderView = "headerView", n.Sheet = "sheet", n.WindowBackground = "windowBackground", n.HudWindow = "hudWindow", n.FullScreenUI = "fullScreenUI", n.Tooltip = "tooltip", n.ContentBackground = "contentBackground", n.UnderWindowBackground = "underWindowBackground", n.UnderPageBackground = "underPageBackground", n.Mica = "mica", n.Blur = "blur", n.Acrylic = "acrylic", n.Tabbed = "tabbed", n.TabbedDark = "tabbedDark", n.TabbedLight = "tabbedLight";
})(Oi || (Oi = {}));
var Ei;
(function(n) {
  n.FollowsWindowActiveState = "followsWindowActiveState", n.Active = "active", n.Inactive = "inactive";
})(Ei || (Ei = {}));
var z = /* @__PURE__ */ ((n) => (n.None = "none", n.Drawing = "drawing", n.Moving = "moving", n.ResizingNW = "resizing-nw", n.ResizingNE = "resizing-ne", n.ResizingSW = "resizing-sw", n.ResizingSE = "resizing-se", n.ResizingN = "resizing-n", n.ResizingS = "resizing-s", n.ResizingW = "resizing-w", n.ResizingE = "resizing-e", n.DrawingRect = "drawing-rect", n.DrawingEllipse = "drawing-ellipse", n.DrawingLine = "drawing-line", n.DrawingArrow = "drawing-arrow", n.DrawingPen = "drawing-pen", n.EditingAnnotation = "editing-annotation", n.MovingAnnotation = "moving-annotation", n.ResizingAnnotationNW = "resizing-annotation-nw", n.ResizingAnnotationSE = "resizing-annotation-se", n.DrawingText = "drawing-text", n.DrawingMarker = "drawing-marker", n.DrawingMosaic = "drawing-mosaic", n.ColorPicking = "color-picking", n.Pinning = "pinning", n))(z || {}), g = /* @__PURE__ */ ((n) => (n.Select = "select", n.Rectangle = "rectangle", n.Ellipse = "ellipse", n.Line = "line", n.Arrow = "arrow", n.Pen = "pen", n.Mosaic = "mosaic", n.Text = "text", n.Marker = "marker", n.ColorPicker = "color-picker", n.Ocr = "ocr", n.Pin = "pin", n.Translate = "translate", n))(g || {});
function Bn(n, t, e) {
  return !Number.isFinite(n) || n <= 0 ? 0 : Math.min(n, Math.max(0, t) / 2, Math.max(0, e) / 2);
}
function ra(n, t, e, i) {
  if (!i) return e;
  const s = e.x - t.x, o = e.y - t.y;
  if (n === g.Ellipse || n === g.Rectangle) {
    const a = Math.max(Math.abs(s), Math.abs(o));
    return {
      x: t.x + Math.sign(s || 1) * a,
      y: t.y + Math.sign(o || 1) * a
    };
  }
  if (n === g.Line || n === g.Arrow) {
    const a = Math.hypot(s, o), r = Math.PI / 4, l = Math.round(Math.atan2(o, s) / r) * r;
    return {
      x: t.x + Math.cos(l) * a,
      y: t.y + Math.sin(l) * a
    };
  }
  return e;
}
function Mt(n, t) {
  const e = t.x - n.x, i = t.y - n.y;
  return Math.sqrt(e * e + i * i);
}
function $i(n, t) {
  return n.x >= t.x && n.x <= t.x + t.width && n.y >= t.y && n.y <= t.y + t.height;
}
function ys(n) {
  return {
    x: n.x + n.width / 2,
    y: n.y + n.height / 2
  };
}
function la(n, t) {
  return {
    x: Math.max(t.x, Math.min(n.x, t.x + t.width)),
    y: Math.max(t.y, Math.min(n.y, t.y + t.height))
  };
}
function Gt(n) {
  return n != null && typeof n.x == "number" && typeof n.y == "number" && !isNaN(n.x) && !isNaN(n.y) && isFinite(n.x) && isFinite(n.y);
}
function Ce(n) {
  return n != null && typeof n.x == "number" && typeof n.y == "number" && typeof n.width == "number" && typeof n.height == "number" && !isNaN(n.x) && !isNaN(n.y) && !isNaN(n.width) && !isNaN(n.height) && isFinite(n.x) && isFinite(n.y) && isFinite(n.width) && isFinite(n.height) && n.width > 0 && n.height > 0;
}
class ca {
  constructor(t, e) {
    L(this, "canvas");
    L(this, "ctx");
    L(this, "coordinateTransform");
    this.canvas = t, this.ctx = t.getContext("2d"), this.coordinateTransform = e;
  }
  // 清空画布
  clear() {
    this.ctx.save(), this.ctx.setTransform(1, 0, 0, 1, 0, 0), this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height), this.ctx.restore();
  }
  // 绘制遮罩层（选择区域外的半透明黑色遮罩）
  drawMask(t, e = 0) {
    if (!Ce(t)) {
      console.warn("Invalid selection rect in drawMask:", t);
      return;
    }
    this.ctx.save();
    const i = this.canvas.width / (window.devicePixelRatio || 1), s = this.canvas.height / (window.devicePixelRatio || 1), o = Math.round(t.x), a = Math.round(t.y), r = Math.round(t.width), l = Math.round(t.height), c = Bn(e, r, l);
    this.ctx.fillStyle = "rgba(0, 0, 0, 0.5)", this.ctx.beginPath(), this.ctx.rect(0, 0, i, s), this.ctx.roundRect(o, a, r, l, c), this.ctx.fill("evenodd"), this.ctx.restore();
  }
  // 绘制选择框
  drawSelectionBox(t, e = !0, i = 0) {
    const { x: s, y: o, width: a, height: r } = t;
    this.ctx.save();
    const l = Math.round(s) + 0.5, c = Math.round(o) + 0.5, u = Math.max(0, Math.round(a) - 1), d = Math.max(0, Math.round(r) - 1), w = Bn(i, u, d);
    this.ctx.lineWidth = 1, this.ctx.setLineDash([5, 4]), this.ctx.strokeStyle = "rgba(0, 0, 0, 0.62)", this.ctx.beginPath(), this.ctx.roundRect(
      l + 1,
      c + 1,
      u,
      d,
      w
    ), this.ctx.stroke(), this.ctx.strokeStyle = "rgba(255, 255, 255, 0.96)", this.ctx.beginPath(), this.ctx.roundRect(l, c, u, d, w), this.ctx.stroke(), e && this.drawHandles(t), this.ctx.restore();
  }
  // 绘制控制点
  drawHandles(t) {
    const { x: e, y: i, width: s, height: o } = t, a = ys(t);
    this.ctx.setLineDash([]), [
      { x: e, y: i, width: 10, height: 10 },
      // 左上
      { x: e + s, y: i, width: 10, height: 10 },
      // 右上
      { x: e, y: i + o, width: 10, height: 10 },
      // 左下
      { x: e + s, y: i + o, width: 10, height: 10 },
      // 右下
      { x: a.x, y: i, width: 16, height: 6 },
      // 上中
      { x: a.x, y: i + o, width: 16, height: 6 },
      // 下中
      { x: e, y: a.y, width: 6, height: 16 },
      // 左中
      { x: e + s, y: a.y, width: 6, height: 16 }
      // 右中
    ].forEach((l) => {
      const c = Math.round(l.x) - l.width / 2, u = Math.round(l.y) - l.height / 2, d = Math.min(l.width, l.height) / 2;
      this.ctx.beginPath(), this.ctx.roundRect(c + 1, u + 1, l.width, l.height, d), this.ctx.fillStyle = "rgba(0, 0, 0, 0.36)", this.ctx.fill(), this.ctx.beginPath(), this.ctx.roundRect(c, u, l.width, l.height, d), this.ctx.fillStyle = "#ffffff", this.ctx.fill();
    });
  }
  // 绘制标注列表
  drawAnnotations(t, e) {
    const i = this.createDrawingContext(e);
    t.forEach((s) => {
      const o = s.getData();
      o.hovered && s.drawHover(i), s.draw(i), o.selected && (s.drawSelection(i), ["rectangle", "ellipse", "line", "arrow"].includes(o.type) && this.drawAnnotationHandles(s));
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
      const i = e.points[0], s = e.points[e.points.length - 1], o = 4;
      this.ctx.save(), this.ctx.setLineDash([]), this.ctx.fillStyle = "#ffffff", this.ctx.strokeStyle = "#3b82f6", this.ctx.lineWidth = 2, this.ctx.beginPath(), this.ctx.arc(i.x, i.y, o, 0, Math.PI * 2), this.ctx.fill(), this.ctx.stroke(), this.ctx.beginPath(), this.ctx.arc(s.x, s.y, o, 0, Math.PI * 2), this.ctx.fill(), this.ctx.stroke(), this.ctx.restore();
    }
  }
  // 绘制取色器
  drawColorPicker(t, e) {
    if (!t.isActive || !t.isVisible) return;
    const { mousePosition: i, colorInfo: s, showFormat: o, previewImage: a, zoomFactor: r, isCopied: l } = t, c = 156, u = 188, d = 18;
    let w = i.x + d, x = i.y + d;
    w + c > e.x + e.width && (w = i.x - c - d), x + u > e.y + e.height && (x = i.y - u - d), w < e.x && (w = e.x + d), x < e.y && (x = e.y + d), this.ctx.save(), this.ctx.fillStyle = "rgba(250, 250, 250, 0.96)", this.ctx.strokeStyle = "rgba(0, 0, 0, 0.14)", this.ctx.lineWidth = 1, this.ctx.shadowColor = "rgba(0, 0, 0, 0.24)", this.ctx.shadowBlur = 18, this.ctx.shadowOffsetY = 8, this.ctx.beginPath(), this.ctx.roundRect(w, x, c, u, 10), this.ctx.fill(), this.ctx.stroke(), this.ctx.shadowColor = "transparent", this.ctx.shadowBlur = 0, this.ctx.shadowOffsetY = 0;
    const C = 108, f = w + (c - C) / 2, m = x + 16;
    this.ctx.fillStyle = "#f3f4f6", this.ctx.fillRect(f, m, C, C), this.ctx.strokeStyle = "rgba(0, 0, 0, 0.26)", this.ctx.lineWidth = 1, this.ctx.strokeRect(f, m, C, C);
    const R = a ? a.width : r, A = C / R;
    a && (this.ctx.imageSmoothingEnabled = !1, this.ctx.drawImage(
      a,
      0,
      0,
      a.width,
      a.height,
      f,
      m,
      C,
      C
    ), this.ctx.imageSmoothingEnabled = !0), this.ctx.beginPath(), this.ctx.strokeStyle = "rgba(255, 255, 255, 0.5)", this.ctx.lineWidth = 1;
    for (let Y = 1; Y < R; Y++) {
      const K = f + Y * A;
      this.ctx.moveTo(K, m), this.ctx.lineTo(K, m + C);
      const X = m + Y * A;
      this.ctx.moveTo(f, X), this.ctx.lineTo(f + C, X);
    }
    this.ctx.stroke(), this.ctx.beginPath(), this.ctx.strokeStyle = "rgba(0, 0, 0, 0.22)";
    for (let Y = 1; Y < R; Y++) {
      const K = f + Y * A + 0.5;
      this.ctx.moveTo(K, m), this.ctx.lineTo(K, m + C);
      const X = m + Y * A + 0.5;
      this.ctx.moveTo(f, X), this.ctx.lineTo(f + C, X);
    }
    this.ctx.stroke();
    const M = Math.floor(R / 2), j = f + M * A, U = m + M * A;
    this.ctx.fillStyle = "rgba(255, 255, 255, 0.18)", this.ctx.fillRect(j, U, A, A), this.ctx.setLineDash([]), this.ctx.strokeStyle = "rgba(255, 255, 255, 0.96)", this.ctx.lineWidth = 4, this.ctx.strokeRect(
      j - 1,
      U - 1,
      A + 2,
      A + 2
    ), this.ctx.strokeStyle = "rgba(0, 0, 0, 0.9)", this.ctx.lineWidth = 2, this.ctx.strokeRect(
      j,
      U,
      A,
      A
    ), this.ctx.fillStyle = "#333", this.ctx.font = '12px "SF Mono", "Consolas", "Monaco", monospace';
    let V = m + C + 22;
    if (s) {
      this.ctx.fillStyle = s.hex, this.ctx.fillRect(w + 16, V - 14, 20, 20), this.ctx.strokeStyle = "rgba(0, 0, 0, 0.22)", this.ctx.strokeRect(w + 16, V - 14, 20, 20), this.ctx.fillStyle = "#111827", this.ctx.font = '12px "SF Mono", "Consolas", "Monaco", monospace';
      const Y = o === "hex" ? s.hex : `${s.rgb.r}, ${s.rgb.g}, ${s.rgb.b}`;
      this.ctx.fillText(Y, w + 44, V), V += 19;
    }
    this.ctx.fillStyle = "#6b7280", this.ctx.font = "12px Arial", this.ctx.fillText(`X: ${Math.round(i.x)}, Y: ${Math.round(i.y)}`, w + 16, V), V += 17, this.ctx.font = "12px Arial";
    const F = l ? "已复制!" : "Q:复制 Shift:切换";
    this.ctx.fillStyle = l ? "#059669" : "#8b8f98", this.ctx.fillText(F, w + 16, V), this.ctx.restore();
  }
}
class ha {
  // 物理尺寸
  constructor(t) {
    L(this, "scale");
    L(this, "canvasRect");
    L(this, "canvasSize");
    // 逻辑尺寸
    L(this, "physicalSize");
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
    return Gt(t) ? {
      x: t.x * this.scale,
      y: t.y * this.scale
    } : (console.warn("Invalid point in logicalToPhysical:", t), { x: 0, y: 0 });
  }
  // 物理像素转逻辑像素
  physicalToLogical(t) {
    return Gt(t) ? {
      x: t.x / this.scale,
      y: t.y / this.scale
    } : (console.warn("Invalid point in physicalToLogical:", t), { x: 0, y: 0 });
  }
  // 逻辑坐标转相对坐标（相对于截图区域）
  logicalToRelative(t, e) {
    return !Gt(t) || !Ce(e) ? (console.warn("Invalid point or bounds in logicalToRelative"), { x: 0, y: 0 }) : {
      x: t.x - e.x,
      y: t.y - e.y
    };
  }
  // 相对坐标转逻辑坐标
  relativeToLogical(t, e) {
    return !Gt(t) || !Ce(e) ? (console.warn("Invalid point or bounds in relativeToLogical"), { x: 0, y: 0 }) : {
      x: t.x + e.x,
      y: t.y + e.y
    };
  }
  // 矩形逻辑坐标转物理坐标
  rectLogicalToPhysical(t) {
    return Ce(t) ? {
      x: t.x * this.scale,
      y: t.y * this.scale,
      width: t.width * this.scale,
      height: t.height * this.scale
    } : (console.warn("Invalid rect in rectLogicalToPhysical:", t), { x: 0, y: 0, width: 0, height: 0 });
  }
  // 限制点在画布范围内
  clampToCanvas(t) {
    if (!Gt(t))
      return console.warn("Invalid point in clampToCanvas:", t), { x: 0, y: 0 };
    const e = {
      x: 0,
      y: 0,
      width: this.canvasSize.width,
      height: this.canvasSize.height
    };
    return la(t, e);
  }
  // 限制矩形在画布范围内
  clampRectToCanvas(t) {
    if (!Ce(t))
      return console.warn("Invalid rect in clampRectToCanvas:", t), { x: 0, y: 0, width: 0, height: 0 };
    const e = Math.max(0, t.x), i = Math.max(0, t.y), s = Math.min(this.canvasSize.width - e, t.width), o = Math.min(this.canvasSize.height - i, t.height);
    return { x: e, y: i, width: s, height: o };
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
    return Mt(t, e);
  }
  // 检查点是否在矩形内（使用工具函数）
  isPointInRect(t, e, i = 0) {
    if (!Gt(t) || !Ce(e))
      return !1;
    if (i === 0)
      return $i(t, e);
    const s = {
      x: e.x - i,
      y: e.y - i,
      width: e.width + i * 2,
      height: e.height + i * 2
    };
    return $i(t, s);
  }
  // 检查点是否在线段附近
  isPointNearLine(t, e, i, s = 8) {
    if (!Gt(t) || !Gt(e) || !Gt(i))
      return !1;
    const o = t.x - e.x, a = t.y - e.y, r = i.x - e.x, l = i.y - e.y, c = o * r + a * l, u = r * r + l * l;
    if (u === 0)
      return Mt(t, e) <= s;
    const d = c / u;
    let w;
    return d < 0 ? w = e : d > 1 ? w = i : w = {
      x: e.x + d * r,
      y: e.y + d * l
    }, Mt(t, w) <= s;
  }
}
class ua {
  constructor(t, e) {
    L(this, "coordinateSystem");
    L(this, "canvas");
    L(this, "isDrawing", !1);
    L(this, "currentOperation", z.None);
    L(this, "startPoint", { x: 0, y: 0 });
    L(this, "lastMousePos", { x: 0, y: 0 });
    L(this, "preventDefault", (t) => {
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
  getOperationType(t, e, i, s) {
    const o = this.getAnnotationAtPoint(t, s);
    if (e !== g.Select)
      return i ? this.coordinateSystem.isPointInRect(t, i) ? this.getDrawingOperationType(e) : z.None : z.Drawing;
    if (o) {
      if (o.getData().type === g.Mosaic)
        return z.None;
      const a = this.getAnnotationControlPointOperation(t, o);
      return a !== z.None ? a : z.MovingAnnotation;
    }
    return i ? this.getSelectionOperationType(t, i, s.length > 0) : z.Drawing;
  }
  // 获取绘图操作类型
  getDrawingOperationType(t) {
    return {
      [g.Rectangle]: z.DrawingRect,
      [g.Ellipse]: z.DrawingEllipse,
      [g.Line]: z.DrawingLine,
      [g.Arrow]: z.DrawingArrow,
      [g.Pen]: z.DrawingPen,
      [g.Text]: z.DrawingText,
      [g.Marker]: z.DrawingMarker,
      [g.Mosaic]: z.DrawingMosaic,
      [g.ColorPicker]: z.ColorPicking,
      [g.Ocr]: z.None,
      [g.Pin]: z.Pinning,
      [g.Translate]: z.None,
      [g.Select]: z.None
    }[t] || z.Drawing;
  }
  // 获取选择框操作类型
  getSelectionOperationType(t, e, i) {
    const { x: s, y: o, width: a, height: r } = e, l = 12;
    if (i)
      return z.None;
    const c = ys(e);
    return this.isInHandle(t, { x: s, y: o }, l) ? z.ResizingNW : this.isInHandle(t, { x: s + a, y: o }, l) ? z.ResizingNE : this.isInHandle(t, { x: s, y: o + r }, l) ? z.ResizingSW : this.isInHandle(t, { x: s + a, y: o + r }, l) ? z.ResizingSE : this.isInHandle(t, { x: c.x, y: o }, l) ? z.ResizingN : this.isInHandle(t, { x: c.x, y: o + r }, l) ? z.ResizingS : this.isInHandle(t, { x: s, y: c.y }, l) ? z.ResizingW : this.isInHandle(t, { x: s + a, y: c.y }, l) ? z.ResizingE : this.coordinateSystem.isPointInRect(t, e) ? z.Moving : z.Drawing;
  }
  // 检查是否在控制点范围内
  isInHandle(t, e, i) {
    return Math.abs(t.x - e.x) <= i && Math.abs(t.y - e.y) <= i;
  }
  // 获取指定位置的标注
  getAnnotationAtPoint(t, e) {
    for (let i = e.length - 1; i >= 0; i--) {
      const s = e[i];
      if (s.hitTest(t))
        return s;
    }
    return null;
  }
  // 获取标注控制点操作类型
  getAnnotationControlPointOperation(t, e) {
    if (!Gt(t))
      return z.None;
    const i = e.getData();
    if (i.type === g.Mosaic || i.type === g.Text || i.type === g.Marker)
      return z.None;
    if ([
      g.Rectangle,
      g.Ellipse,
      g.Line,
      g.Arrow
    ].includes(i.type) && i.points.length >= 2) {
      const s = i.points[0], o = i.points[i.points.length - 1], a = 8, r = 6, l = Mt(t, s), c = Mt(t, o);
      if (l <= a + r)
        return z.ResizingAnnotationNW;
      if (c <= a + r)
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
class re {
  constructor(t) {
    L(this, "data");
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
class da extends re {
  constructor(t, e) {
    super({
      id: Math.random().toString(36).substr(2, 9),
      type: g.Rectangle,
      points: [t],
      style: e
    });
  }
  getMinPoints() {
    return 2;
  }
  draw(t) {
    if (this.data.points.length < 2) return;
    const { ctx: e } = t, i = this.data.points[0], s = this.data.points[this.data.points.length - 1], o = s.x - i.x, a = s.y - i.y;
    e.save(), this.applyOpacity(e), e.strokeStyle = this.data.style.color, e.lineWidth = this.data.style.lineWidth, e.lineCap = "round", e.lineJoin = "round", e.setLineDash([]), e.strokeRect(i.x, i.y, o, a), e.restore();
  }
  drawToScreenshot(t) {
    if (this.data.points.length < 2) return;
    const { ctx: e, scale: i, offset: s } = t, o = this.data.points[0], a = this.data.points[this.data.points.length - 1], r = {
      x: o.x * i - s.x,
      y: o.y * i - s.y
    }, l = (a.x - o.x) * i, c = (a.y - o.y) * i;
    e.save(), this.applyOpacity(e), e.strokeStyle = this.data.style.color, e.lineWidth = this.data.style.lineWidth * i, e.lineCap = "round", e.lineJoin = "round", e.setLineDash([]), e.strokeRect(r.x, r.y, l, c), e.restore();
  }
  hitTest(t, e = 8) {
    if (this.data.points.length < 2) return !1;
    const i = this.data.points[0], s = this.data.points[this.data.points.length - 1], o = Math.min(i.x, s.x), a = Math.max(i.x, s.x), r = Math.min(i.y, s.y), l = Math.max(i.y, s.y);
    return t.x >= o - e && t.x <= a + e && t.y >= r - e && t.y <= l + e;
  }
  getBounds() {
    if (this.data.points.length < 2) return null;
    const t = this.data.points[0], e = this.data.points[this.data.points.length - 1], i = Math.min(t.x, e.x), s = Math.max(t.x, e.x), o = Math.min(t.y, e.y), a = Math.max(t.y, e.y);
    return {
      x: i,
      y: o,
      width: s - i,
      height: a - o
    };
  }
  drawSelection(t) {
    const { ctx: e } = t, i = 6;
    e.save(), e.fillStyle = "#3b82f6", e.strokeStyle = "#ffffff", e.lineWidth = 1, this.data.points.forEach((s) => {
      e.fillRect(s.x - i / 2, s.y - i / 2, i, i), e.strokeRect(s.x - i / 2, s.y - i / 2, i, i);
    }), e.restore();
  }
  drawHover(t) {
    if (this.data.points.length < 2) return;
    const { ctx: e } = t, i = this.data.points[0], s = this.data.points[this.data.points.length - 1], o = s.x - i.x, a = s.y - i.y;
    e.save(), e.strokeStyle = "#3b82f6", e.lineWidth = 2, e.setLineDash([4, 4]), e.strokeRect(i.x, i.y, o, a), e.restore();
  }
  // 获取控制点位置检测
  getControlPointAtPosition(t, e = 12) {
    if (!this.data.selected || this.data.points.length < 2) return null;
    for (let i = 0; i < this.data.points.length; i++) {
      const s = this.data.points[i];
      if (Mt(t, s) <= e)
        return i;
    }
    return null;
  }
  // 更新控制点
  updateControlPoint(t, e) {
    t >= 0 && t < this.data.points.length && (this.data.points[t] = e);
  }
}
class ga extends re {
  constructor(t, e) {
    super({
      id: Math.random().toString(36).substr(2, 9),
      type: g.Ellipse,
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
    const s = this.getBounds();
    if (!s) return;
    const o = (s.x + s.width / 2) * e - i.x, a = (s.y + s.height / 2) * e - i.y, r = Math.max(s.width * e / 2, 0.5), l = Math.max(s.height * e / 2, 0.5);
    t.save(), this.applyOpacity(t), t.strokeStyle = this.data.style.color, t.lineWidth = this.data.style.lineWidth * e, t.lineCap = "round", t.lineJoin = "round", t.setLineDash([]), t.beginPath(), t.ellipse(o, a, r, l, 0, 0, Math.PI * 2), t.stroke(), t.restore();
  }
  hitTest(t, e = 8) {
    const i = this.getBounds();
    if (!i) return !1;
    const s = i.width / 2, o = i.height / 2;
    if (s < 1 || o < 1)
      return t.x >= i.x - e && t.x <= i.x + i.width + e && t.y >= i.y - e && t.y <= i.y + i.height + e;
    const a = i.x + s, r = i.y + o, l = Math.sqrt(
      (t.x - a) ** 2 / s ** 2 + (t.y - r) ** 2 / o ** 2
    );
    return Math.abs(l - 1) * Math.min(s, o) <= e;
  }
  getBounds() {
    if (this.data.points.length < 2) return null;
    const t = this.data.points[0], e = this.data.points[this.data.points.length - 1], i = Math.min(t.x, e.x), s = Math.max(t.x, e.x), o = Math.min(t.y, e.y), a = Math.max(t.y, e.y);
    return {
      x: i,
      y: o,
      width: s - i,
      height: a - o
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
class fa extends re {
  constructor(t, e) {
    super({
      id: Math.random().toString(36).substr(2, 9),
      type: g.Line,
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
    const s = this.data.points[0], o = this.data.points[this.data.points.length - 1];
    t.save(), this.applyOpacity(t), t.strokeStyle = this.data.style.color, t.lineWidth = this.data.style.lineWidth * e, t.lineCap = "round", t.lineJoin = "round", t.setLineDash([]), t.beginPath(), t.moveTo(s.x * e - i.x, s.y * e - i.y), t.lineTo(o.x * e - i.x, o.y * e - i.y), t.stroke(), t.restore();
  }
  hitTest(t, e = 8) {
    if (this.data.points.length < 2) return !1;
    const i = this.data.points[0], s = this.data.points[this.data.points.length - 1];
    return this.isPointNearLine(t, i, s, e);
  }
  getBounds() {
    if (this.data.points.length < 2) return null;
    const t = this.data.points[0], e = this.data.points[this.data.points.length - 1], i = Math.min(t.x, e.x), s = Math.max(t.x, e.x), o = Math.min(t.y, e.y), a = Math.max(t.y, e.y);
    return {
      x: i,
      y: o,
      width: s - i,
      height: a - o
    };
  }
  drawSelection(t) {
    this.drawEndpoints(t.ctx);
  }
  drawHover(t) {
    if (this.data.points.length < 2) return;
    const { ctx: e } = t, i = this.data.points[0], s = this.data.points[this.data.points.length - 1];
    e.save(), e.strokeStyle = "#3b82f6", e.lineWidth = 2, e.setLineDash([4, 4]), e.beginPath(), e.moveTo(i.x, i.y), e.lineTo(s.x, s.y), e.stroke(), e.restore();
  }
  drawEndpoints(t) {
    t.save(), t.fillStyle = "#3b82f6", t.strokeStyle = "#ffffff", t.lineWidth = 1, this.data.points.forEach((i) => {
      t.fillRect(i.x - 6 / 2, i.y - 6 / 2, 6, 6), t.strokeRect(i.x - 6 / 2, i.y - 6 / 2, 6, 6);
    }), t.restore();
  }
  isPointNearLine(t, e, i, s) {
    const o = i.x - e.x, a = i.y - e.y, r = o * o + a * a;
    if (r === 0)
      return Mt(t, e) <= s;
    const l = Math.max(0, Math.min(1, ((t.x - e.x) * o + (t.y - e.y) * a) / r)), c = {
      x: e.x + l * o,
      y: e.y + l * a
    };
    return Mt(t, c) <= s;
  }
}
class ma extends re {
  constructor(t, e) {
    super({
      id: Math.random().toString(36).substr(2, 9),
      type: g.Arrow,
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
    const { ctx: e, scale: i, offset: s } = t;
    this.drawArrow(e, i, s);
  }
  drawArrow(t, e, i) {
    const s = this.data.points[0], o = this.data.points[this.data.points.length - 1], a = {
      x: s.x * e - i.x,
      y: s.y * e - i.y
    }, r = {
      x: o.x * e - i.x,
      y: o.y * e - i.y
    };
    t.save(), this.applyOpacity(t), t.strokeStyle = this.data.style.color, t.lineWidth = this.data.style.lineWidth * e, t.lineCap = "round", t.lineJoin = "round", t.setLineDash([]), t.beginPath(), t.moveTo(a.x, a.y), t.lineTo(r.x, r.y), t.stroke();
    const l = Math.atan2(o.y - s.y, o.x - s.x), c = 15 * e, u = Math.PI / 6;
    t.beginPath(), t.moveTo(r.x, r.y), t.lineTo(
      r.x - c * Math.cos(l - u),
      r.y - c * Math.sin(l - u)
    ), t.moveTo(r.x, r.y), t.lineTo(
      r.x - c * Math.cos(l + u),
      r.y - c * Math.sin(l + u)
    ), t.stroke(), t.restore();
  }
  hitTest(t, e = 8) {
    if (this.data.points.length < 2) return !1;
    const i = this.data.points[0], s = this.data.points[this.data.points.length - 1];
    return this.isPointNearLine(t, i, s, e);
  }
  isPointNearLine(t, e, i, s) {
    const o = t.x - e.x, a = t.y - e.y, r = i.x - e.x, l = i.y - e.y, c = o * r + a * l, u = r * r + l * l;
    if (u === 0)
      return Mt(t, e) <= s;
    const d = c / u;
    let w;
    return d < 0 ? w = e : d > 1 ? w = i : w = {
      x: e.x + d * r,
      y: e.y + d * l
    }, Mt(t, w) <= s;
  }
  getBounds() {
    if (this.data.points.length < 2) return null;
    const t = this.data.points[0], e = this.data.points[this.data.points.length - 1], i = Math.min(t.x, e.x), s = Math.max(t.x, e.x), o = Math.min(t.y, e.y), a = Math.max(t.y, e.y);
    return {
      x: i,
      y: o,
      width: s - i,
      height: a - o
    };
  }
  drawSelection(t) {
    const { ctx: e } = t, i = 6;
    e.save(), e.fillStyle = "#3b82f6", e.strokeStyle = "#ffffff", e.lineWidth = 1, this.data.points.forEach((s) => {
      e.fillRect(s.x - i / 2, s.y - i / 2, i, i), e.strokeRect(s.x - i / 2, s.y - i / 2, i, i);
    }), e.restore();
  }
  drawHover(t) {
    if (this.data.points.length < 2) return;
    const { ctx: e } = t, i = this.data.points[0], s = this.data.points[this.data.points.length - 1];
    e.save(), e.strokeStyle = "#3b82f6", e.lineWidth = 2, e.setLineDash([4, 4]), e.beginPath(), e.moveTo(i.x, i.y), e.lineTo(s.x, s.y), e.stroke(), e.restore();
  }
  // 获取控制点位置检测
  getControlPointAtPosition(t, e = 12) {
    if (!this.data.selected || this.data.points.length < 2) return null;
    for (let i = 0; i < this.data.points.length; i++) {
      const s = this.data.points[i];
      if (Mt(t, s) <= e)
        return i;
    }
    return null;
  }
  // 更新控制点
  updateControlPoint(t, e) {
    t >= 0 && t < this.data.points.length && (this.data.points[t] = e);
  }
}
class pa extends re {
  constructor(t, e) {
    super({
      id: Math.random().toString(36).substr(2, 9),
      type: g.Pen,
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
      const e = this.data.points[this.data.points.length - 1], i = Mt(t, e);
      if (i > 5) {
        const s = Math.ceil(i / 3);
        for (let o = 1; o < s; o++) {
          const a = o / s, r = e.x + (t.x - e.x) * a, l = e.y + (t.y - e.y) * a;
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
    const { ctx: e, scale: i, offset: s } = t;
    this.drawPath(e, i, s);
  }
  drawPath(t, e, i) {
    t.save(), this.applyOpacity(t), t.strokeStyle = this.data.style.color, t.lineWidth = this.data.style.lineWidth * e, t.lineCap = "round", t.lineJoin = "round", t.setLineDash([]), t.beginPath();
    const s = this.data.points[0], o = s.x * e - i.x, a = s.y * e - i.y;
    t.moveTo(o, a);
    for (let r = 1; r < this.data.points.length; r++) {
      const l = this.data.points[r], c = l.x * e - i.x, u = l.y * e - i.y;
      t.lineTo(c, u);
    }
    t.stroke(), t.restore();
  }
  hitTest(t, e = 8) {
    if (this.data.points.length < 2)
      return this.data.points.length === 1 ? Mt(t, this.data.points[0]) <= e : !1;
    for (let i = 0; i < this.data.points.length - 1; i++) {
      const s = this.data.points[i], o = this.data.points[i + 1];
      if (this.isPointNearLine(t, s, o, e))
        return !0;
    }
    return !1;
  }
  isPointNearLine(t, e, i, s) {
    const o = t.x - e.x, a = t.y - e.y, r = i.x - e.x, l = i.y - e.y, c = o * r + a * l, u = r * r + l * l;
    if (u === 0)
      return Mt(t, e) <= s;
    const d = c / u;
    let w;
    return d < 0 ? w = e : d > 1 ? w = i : w = {
      x: e.x + d * r,
      y: e.y + d * l
    }, Mt(t, w) <= s;
  }
  getBounds() {
    if (this.data.points.length === 0) return null;
    let t = this.data.points[0].x, e = this.data.points[0].x, i = this.data.points[0].y, s = this.data.points[0].y;
    return this.data.points.forEach((o) => {
      t = Math.min(t, o.x), e = Math.max(e, o.x), i = Math.min(i, o.y), s = Math.max(s, o.y);
    }), {
      x: t,
      y: i,
      width: e - t,
      height: s - i
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
const Qt = "sans-serif", Me = (n) => ({
  x: n.x + 4,
  y: n.y - 8
});
class wa extends re {
  constructor(t, e, i, s = 16) {
    super({
      id: Math.random().toString(36).substr(2, 9),
      type: g.Text,
      points: [t],
      style: i,
      text: e,
      fontSize: s
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
    const { ctx: e, scale: i, offset: s, bounds: o } = t;
    this.drawText(e, i, s, o);
  }
  drawText(t, e, i, s) {
    const o = (this.data.fontSize || 16) * e, a = this.data.points[0];
    t.save(), this.applyOpacity(t), t.font = `${o}px ${Qt}`, t.fillStyle = this.data.style.color, t.textAlign = "left", t.textBaseline = "top";
    const r = Me(a), l = r.x * e - i.x, c = r.y * e - i.y;
    t.fillText(this.data.text, l, c), t.restore();
  }
  hitTest(t, e = 8) {
    if (!this.data.text || this.data.points.length === 0) return !1;
    const i = this.data.points[0], s = this.data.fontSize || 16, a = document.createElement("canvas").getContext("2d");
    if (!a) return !1;
    a.font = `${s}px ${Qt}`;
    const l = a.measureText(this.data.text).width, { x: c, y: u } = Me(i);
    return t.x >= c - e && t.x <= c + l + e && t.y >= u - e && t.y <= u + s + e;
  }
  getBounds() {
    if (!this.data.text || this.data.points.length === 0) return null;
    const t = this.data.points[0], e = this.data.fontSize || 16, s = document.createElement("canvas").getContext("2d");
    if (!s) return null;
    s.font = `${e}px ${Qt}`;
    const a = s.measureText(this.data.text).width, { x: r, y: l } = Me(t);
    return {
      x: r,
      y: l,
      width: a,
      height: e
    };
  }
  drawSelection(t) {
    if (!this.data.text || this.data.points.length === 0) return;
    const { ctx: e, scale: i, offset: s } = t, o = this.data.points[0], a = (this.data.fontSize || 16) * i, r = Me(o), l = r.x * i - s.x, c = r.y * i - s.y;
    e.save(), e.font = `${a}px ${Qt}`;
    const d = e.measureText(this.data.text).width;
    e.setLineDash([2, 2]), e.strokeStyle = "#3b82f6", e.lineWidth = 1, e.strokeRect(l, c, d, a), e.restore();
  }
  drawHover(t) {
    if (!this.data.text || this.data.points.length === 0) return;
    const { ctx: e, scale: i, offset: s } = t, o = this.data.points[0], a = (this.data.fontSize || 16) * i, r = Me(o), l = r.x * i - s.x, c = r.y * i - s.y;
    e.save(), e.font = `${a}px ${Qt}`;
    const d = e.measureText(this.data.text).width;
    e.strokeStyle = "#3b82f6", e.lineWidth = 2, e.setLineDash([4, 4]), e.strokeRect(l, c, d, a), e.restore();
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
const Kt = class Kt extends re {
  constructor(t, e, i = 8) {
    super({
      id: Math.random().toString(36).substr(2, 9),
      type: g.Mosaic,
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
      const e = this.data.points[this.data.points.length - 1], i = Mt(t, e);
      if (i > 2) {
        const s = Math.ceil(i / 2);
        for (let o = 1; o < s; o++) {
          const a = o / s, r = e.x + (t.x - e.x) * a, l = e.y + (t.y - e.y) * a;
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
    const { ctx: e, scale: i, offset: s, bounds: o } = t;
    this.renderRealMosaic(e, i, s, o);
  }
  /**
   * 核心渲染逻辑：真实像素化马赛克
   * 使用 ImageData 直接操作像素，避免坐标转换问题
   */
  renderRealMosaic(t, e, i, s) {
    Kt.helperCanvas || (Kt.helperCanvas = document.createElement("canvas"), Kt.helperCtx = Kt.helperCanvas.getContext("2d", { willReadFrequently: !0 }));
    const o = Kt.helperCanvas, a = Kt.helperCtx, r = e || 1, l = this.data.mosaicSize || 8, c = Math.max(Math.round(l * r), 4), u = Math.max(l * 3, 24), d = this.getBounds();
    if (!d) return;
    const w = u, x = Math.floor(d.x - w), C = Math.floor(d.y - w), f = Math.ceil(d.width + w * 2), m = Math.ceil(d.height + w * 2);
    if (f <= 0 || m <= 0) return;
    const R = Math.floor(x * r - i.x), A = Math.floor(C * r - i.y), M = Math.ceil(f * r), j = Math.ceil(m * r), U = t.canvas.width, V = t.canvas.height, F = Math.max(0, R), Y = Math.max(0, A), K = Math.min(M, U - F), X = Math.min(j, V - Y);
    if (K <= 0 || X <= 0) return;
    let tt;
    try {
      t.save(), t.setTransform(1, 0, 0, 1, 0, 0), tt = t.getImageData(F, Y, K, X), t.restore();
    } catch {
      return;
    }
    const at = tt.data, q = F % c, kt = Y % c;
    for (let rt = -kt; rt < X; rt += c)
      for (let Z = -q; Z < K; Z += c) {
        const et = Math.max(0, Z), dt = Math.max(0, rt), wt = Math.min(K, Z + c), ot = Math.min(X, rt + c);
        if (et >= wt || dt >= ot) continue;
        let gt = 0, O = 0, ft = 0, B = 0;
        for (let yt = dt; yt < ot; yt++)
          for (let vt = et; vt < wt; vt++) {
            const bt = (yt * K + vt) * 4;
            gt += at[bt], O += at[bt + 1], ft += at[bt + 2], B++;
          }
        if (B > 0) {
          gt = Math.round(gt / B / 8) * 8, O = Math.round(O / B / 8) * 8, ft = Math.round(ft / B / 8) * 8;
          for (let vt = dt; vt < ot; vt++)
            for (let bt = et; bt < wt; bt++) {
              const Nt = (vt * K + bt) * 4;
              at[Nt] = gt, at[Nt + 1] = O, at[Nt + 2] = ft;
            }
        }
      }
    o.width = K, o.height = X, a.putImageData(tt, 0, 0), a.globalCompositeOperation = "destination-in", a.lineCap = "round", a.lineJoin = "round", a.lineWidth = u * r, a.fillStyle = "#000000", a.strokeStyle = "#000000", this.drawPathPhysical(a, r, i, F, Y), t.save(), this.applyOpacity(t), t.setTransform(1, 0, 0, 1, 0, 0), s && (t.beginPath(), t.rect(
      s.x * r - i.x,
      s.y * r - i.y,
      s.width * r,
      s.height * r
    ), t.clip()), t.drawImage(o, F, Y), t.restore();
  }
  // 在物理坐标系中绘制路径
  drawPathPhysical(t, e, i, s, o) {
    if (this.data.points.length < 1) return;
    t.beginPath();
    const a = (l) => l.x * e - i.x - s, r = (l) => l.y * e - i.y - o;
    if (this.data.points.length === 1) {
      const l = this.data.points[0];
      t.arc(a(l), r(l), t.lineWidth / 2, 0, Math.PI * 2), t.fill();
    } else {
      const l = this.data.points[0];
      t.moveTo(a(l), r(l));
      for (let u = 1; u < this.data.points.length - 1; u++) {
        const d = this.data.points[u], w = this.data.points[u + 1], x = (a(d) + a(w)) / 2, C = (r(d) + r(w)) / 2;
        t.quadraticCurveTo(a(d), r(d), x, C);
      }
      const c = this.data.points[this.data.points.length - 1];
      t.lineTo(a(c), r(c)), t.stroke();
    }
  }
  hitTest(t, e = 8) {
    if (this.data.points.length === 0) return !1;
    if (this.data.points.length === 1)
      return Mt(t, this.data.points[0]) <= (this.data.mosaicSize || 8) * 1.5 + e;
    for (let i = 0; i < this.data.points.length - 1; i++) {
      const s = this.data.points[i], o = this.data.points[i + 1];
      if (this.isPointNearLine(t, s, o, (this.data.mosaicSize || 8) * 1.5 + e))
        return !0;
    }
    return !1;
  }
  getBounds() {
    if (this.data.points.length === 0) return null;
    let t = this.data.points[0].x, e = this.data.points[0].x, i = this.data.points[0].y, s = this.data.points[0].y;
    for (const o of this.data.points)
      t = Math.min(t, o.x), e = Math.max(e, o.x), i = Math.min(i, o.y), s = Math.max(s, o.y);
    return {
      x: t,
      y: i,
      width: e - t,
      height: s - i
    };
  }
  isPointNearLine(t, e, i, s) {
    const o = t.x - e.x, a = t.y - e.y, r = i.x - e.x, l = i.y - e.y, c = o * r + a * l, u = r * r + l * l;
    let d = -1;
    u !== 0 && (d = c / u);
    let w, x;
    d < 0 ? (w = e.x, x = e.y) : d > 1 ? (w = i.x, x = i.y) : (w = e.x + d * r, x = e.y + d * l);
    const C = t.x - w, f = t.y - x;
    return C * C + f * f <= s * s;
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
L(Kt, "helperCanvas", null), L(Kt, "helperCtx", null);
let Nn = Kt;
const oe = 16, un = (n = oe) => Math.max(12, Math.round(n * 0.75)), Hn = (n, t = oe) => {
  const e = un(t);
  return {
    x: n.x + e + 12,
    y: n.y - t / 2
  };
};
class ya extends re {
  constructor(t, e, i, s, o = oe) {
    super({
      id: Math.random().toString(36).substr(2, 9),
      type: g.Marker,
      points: [t],
      style: s,
      text: i,
      fontSize: o,
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
    const s = this.data.points[0];
    if (!s) return;
    const o = (this.data.fontSize || oe) * e, a = un(this.data.fontSize || oe) * e, r = s.x * e - i.x, l = s.y * e - i.y, c = this.data.text?.trim() || "";
    if (t.save(), this.applyOpacity(t), t.lineCap = "round", t.lineJoin = "round", t.setLineDash([]), this.drawMarkerFace(t, r, l, a, o, e), c) {
      const u = Hn(
        s,
        this.data.fontSize || oe
      ), d = u.x * e - i.x, w = u.y * e - i.y, x = w + o + 3 * e;
      t.font = `${o}px ${Qt}`, t.textAlign = "left", t.textBaseline = "top", t.fillStyle = this.data.style.color, t.fillText(c, d, w);
      const C = t.measureText(c).width;
      t.strokeStyle = this.data.style.color, t.lineWidth = Math.max(2, this.data.style.lineWidth * e * 0.75), t.beginPath(), t.moveTo(r + a * 0.72, l + a * 0.72), t.lineTo(d - 5 * e, x), t.lineTo(d + C + 3 * e, x), t.stroke();
    }
    t.restore();
  }
  drawMarkerFace(t, e, i, s, o, a) {
    t.beginPath(), t.arc(e, i, s, 0, Math.PI * 2), t.fillStyle = this.data.style.color, t.fill(), t.strokeStyle = "rgba(255, 255, 255, 0.92)", t.lineWidth = Math.max(1, a), t.stroke(), t.fillStyle = "#ffffff", t.font = `600 ${o}px ${Qt}`, t.textAlign = "center", t.textBaseline = "middle", t.fillText(String(this.data.markerNumber || 1), e, i + a * 0.5);
  }
  hitTest(t, e = 8) {
    const i = this.data.points[0];
    if (!i) return !1;
    const s = un(this.data.fontSize || oe);
    if (Math.hypot(t.x - i.x, t.y - i.y) <= s + e) return !0;
    const a = this.getBounds();
    return !!a && t.x >= a.x - e && t.x <= a.x + a.width + e && t.y >= a.y - e && t.y <= a.y + a.height + e;
  }
  getBounds() {
    const t = this.data.points[0];
    if (!t) return null;
    const e = this.data.fontSize || oe, i = un(e), s = this.data.text?.trim() || "";
    let o = t.x + i;
    if (s) {
      const r = document.createElement("canvas").getContext("2d");
      r && (r.font = `${e}px ${Qt}`, o = Hn(t, e).x + r.measureText(s).width + 4);
    }
    return {
      x: t.x - i,
      y: t.y - i,
      width: o - (t.x - i),
      height: Math.max(i * 2, e + i)
    };
  }
  drawSelection(t) {
    this.drawStateOutline(t, "#3b82f6", [3, 3], 1);
  }
  drawHover(t) {
    this.drawStateOutline(t, "#3b82f6", [4, 4], 2);
  }
  drawStateOutline(t, e, i, s) {
    const o = this.getBounds();
    o && (t.ctx.save(), t.ctx.strokeStyle = e, t.ctx.lineWidth = s, t.ctx.setLineDash(i), t.ctx.strokeRect(o.x, o.y, o.width, o.height), t.ctx.restore());
  }
}
class en {
  static createAnnotation(t, e, i, s = {}) {
    switch (t) {
      case g.Rectangle:
        return new da(e, i);
      case g.Ellipse:
        return new ga(e, i);
      case g.Line:
        return new fa(e, i);
      case g.Arrow:
        return new ma(e, i);
      case g.Pen:
        return new pa(e, i);
      case g.Text:
        return new wa(
          e,
          s.text || "",
          i,
          s.fontSize || 16
        );
      case g.Marker:
        return new ya(
          e,
          s.markerNumber || 1,
          s.text || "",
          i,
          s.fontSize || 16
        );
      case g.Mosaic:
        return new Nn(
          e,
          i,
          s.mosaicSize || 8
        );
      default:
        return null;
    }
  }
  // 从数据恢复标注
  static fromData(t) {
    const { type: e, points: i, style: s } = t;
    if (!i || i.length === 0) return null;
    const o = i[0], a = this.createAnnotation(e, o, s, {
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
      [g.Rectangle]: "drawing-rect",
      [g.Ellipse]: "drawing-ellipse",
      [g.Line]: "drawing-line",
      [g.Arrow]: "drawing-arrow",
      [g.Pen]: "drawing-pen",
      [g.Text]: "drawing-text",
      [g.Marker]: "drawing-marker",
      [g.Mosaic]: "drawing-mosaic",
      [g.Select]: "none"
    }[t] || "none";
  }
  // 检查工具是否为绘图工具
  static isDrawingTool(t) {
    return t !== g.Select && t !== g.ColorPicker && t !== g.Ocr && t !== g.Pin;
  }
  // 检查工具是否支持样式设置
  static supportsStyleSettings(t) {
    return t !== g.Select && t !== g.Mosaic;
  }
  // 检查工具是否支持颜色设置
  static supportsColorSettings(t) {
    return [
      g.Rectangle,
      g.Ellipse,
      g.Line,
      g.Arrow,
      g.Pen,
      g.Text,
      g.Marker
    ].includes(t);
  }
  // 检查工具是否支持线宽设置
  static supportsLineWidthSettings(t) {
    return [
      g.Rectangle,
      g.Ellipse,
      g.Line,
      g.Arrow,
      g.Pen
    ].includes(t);
  }
  // 检查工具是否支持文字大小设置
  static supportsTextSizeSettings(t) {
    return t === g.Text || t === g.Marker;
  }
  // 检查工具是否支持马赛克大小设置
  static supportsMosaicSizeSettings(t) {
    return t === g.Mosaic;
  }
}
const ge = class ge {
  constructor() {
    L(this, "pool", []);
    L(this, "maxPoolSize", 5);
    // 最大池大小
    L(this, "inUse", /* @__PURE__ */ new Set());
  }
  static getInstance() {
    return ge.instance || (ge.instance = new ge()), ge.instance;
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
    let s;
    i !== -1 ? (s = this.pool[i], this.pool.splice(i, 1)) : s = document.createElement("canvas"), s.width = t, s.height = e;
    const o = s.getContext("2d");
    return o && o.clearRect(0, 0, t, e), this.inUse.add(s), s;
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
L(ge, "instance");
let jn = ge;
async function va(n, t) {
  return await b("get_local_plugin_resource_path", {
    pluginId: n,
    relativePath: t
  });
}
const xa = "snippets-code:developer-mode", vs = "snippets-code:frontend-diagnostics", ka = 240, Ee = "[REDACTED]", dn = (n) => n.replace(
  /("(?:[^"]*(?:token|password|secret|authorization)[^"]*)"\s*:\s*)("(?:\\.|[^"])*"|[^,\r\n}\]]+)/gi,
  `$1"${Ee}"`
).replace(/\bBearer\s+[A-Za-z0-9._~+/=-]+/gi, `Bearer ${Ee}`).replace(
  /\b(?:gh[pousr]_[A-Za-z0-9_]{12,}|github_pat_[A-Za-z0-9_]{12,})\b/g,
  Ee
).replace(/(https?:\/\/)[^/\s@]+@/gi, `$1${Ee}@`).replace(
  /([?&][^=&\s]*(?:token|password|secret|authorization)[^=&\s]*=)[^&\s]+/gi,
  `$1${Ee}`
), ti = (n) => {
  if (n === void 0) return;
  if (typeof n == "string") return dn(n);
  const t = /* @__PURE__ */ new WeakSet();
  try {
    return dn(
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
    return dn(String(n));
  }
}, ba = () => {
  try {
    return globalThis.__TAURI_INTERNALS__?.metadata?.currentWindow?.label ?? "webview";
  } catch {
    return "webview";
  }
}, Sa = () => {
  if (typeof localStorage > "u") return [];
  try {
    const n = JSON.parse(localStorage.getItem(vs) || "[]");
    return Array.isArray(n) ? n : [];
  } catch {
    return [];
  }
}, ei = () => {
  if (typeof localStorage > "u") return !1;
  try {
    return localStorage.getItem(xa) === "true";
  } catch {
    return !1;
  }
}, Ca = (n, t, e) => {
  if (!ei() || typeof localStorage > "u") return;
  const i = Sa();
  i.push({
    timestamp: (/* @__PURE__ */ new Date()).toISOString(),
    level: n,
    windowLabel: ba(),
    message: dn(t),
    data: ti(e)
  });
  try {
    localStorage.setItem(
      vs,
      JSON.stringify(i.slice(-ka))
    );
  } catch {
  }
}, Ma = () => ei(), _a = (n) => n === "error" || ei(), nn = (n, t, e) => {
  Ca(n, t, e), _a(n) && b("frontend_log", {
    level: n,
    message: t,
    data: e === void 0 ? null : ti(e)
  }).catch(() => {
  });
}, D = {
  info: (n, t, ...e) => {
    nn("info", n, t);
  },
  error: (n, t) => {
    nn("error", n, t);
  },
  warn: (n, t) => {
    nn("warn", n, t);
  },
  debug: (n, t) => {
    Ma() && nn("debug", n, t);
  }
}, pt = {
  log: (n, t) => {
    b("append_ocr_diagnostic_log", {
      message: n,
      data: t === void 0 ? null : ti(t)
    }).catch(() => {
    });
  }
}, Ta = "resources/transformers/transformers.min.js", za = ["translation-offline-runtime", "translation"], Ra = "https://huggingface.co/", La = "{model}/resolve/{revision}/", Pa = "/__snippets_code_disabled_transformers_local_models__/", Aa = [
  "ort-wasm-simd-threaded.wasm",
  "ort-wasm-simd.wasm",
  "ort-wasm-threaded.wasm",
  "ort-wasm.wasm"
];
let $e = null;
const Da = (n) => {
  const t = n.toLowerCase();
  return [
    { index: n.lastIndexOf("/"), length: 1 },
    { index: n.lastIndexOf("\\"), length: 1 },
    { index: t.lastIndexOf("%5c"), length: 3 },
    { index: t.lastIndexOf("%2f"), length: 3 }
  ].reduce(
    (i, s) => s.index > i.index ? s : i,
    { index: -1, length: 0 }
  );
}, xs = (n) => {
  const t = n.search(/[?#]/), e = t >= 0 ? n.slice(0, t) : n, i = Da(e);
  return i.index >= 0 ? e.slice(0, i.index + i.length) : e;
}, ks = (n) => {
  const t = xs(n);
  return Object.fromEntries(
    Aa.map((e) => [e, `${t}${e}`])
  );
}, Ia = (n, t) => {
  var e, i;
  n.useBrowserCache = !0, n.allowRemoteModels = !0, n.remoteHost = Ra, n.remotePathTemplate = La, n.allowLocalModels = !1, n.localModelPath = Pa, t && (n.backends ?? (n.backends = {}), (e = n.backends).onnx ?? (e.onnx = {}), (i = n.backends.onnx).wasm ?? (i.wasm = {}), n.backends.onnx.wasm.wasmPaths = ks(t), n.backends.onnx.wasm.numThreads = 1);
};
async function Oa() {
  return $e || ($e = (async () => {
    for (const n of za) {
      const t = await va(n, Ta);
      if (!t) continue;
      const e = Qo(t), i = await import(
        /* @vite-ignore */
        e
      );
      return Ia(i.env, e), D.info(`[离线翻译] 已从插件资源加载 Transformers runtime: ${n}`, {
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
    throw $e = null, n;
  }), $e);
}
let te = null, je = !1, _e = null, we = null, Fn = null;
const Ea = "Xenova/opus-mt-en-zh", $a = [
  { name: "tokenizer_config.json", size: "~1KB" },
  { name: "config.json", size: "~1KB" },
  { name: "tokenizer.json", size: "~2MB" },
  { name: "generation_config.json", size: "~1KB" },
  { name: "onnx/encoder_model_quantized.onnx", size: "~75MB" },
  { name: "onnx/decoder_model_merged_quantized.onnx", size: "~220MB" }
], Wa = 3e5;
function Ba(n) {
  Fn = n;
}
function Na() {
  return $a;
}
function Ha(n, t, e) {
  return Promise.race([
    n,
    new Promise(
      (i, s) => setTimeout(() => s(new Error(e)), t)
    )
  ]);
}
async function bs() {
  return te || _e || (je = !0, D.info("[离线翻译] 正在加载翻译模型..."), _e = (async () => {
    try {
      const { pipeline: n } = await Oa();
      let t = "";
      const e = n("translation", Ea, {
        dtype: "q8",
        device: "wasm",
        revision: "main",
        local_files_only: !1,
        progress_callback: (s) => {
          s.status === "done" && s.file && s.file !== t && (t = s.file, D.info(`[离线翻译] 已加载: ${s.file}`)), Fn && Fn({
            status: s.status,
            progress: s.progress,
            file: s.file
          });
        }
      });
      return te = await Ha(
        e,
        Wa,
        "模型加载超时，请检查网络连接后重试"
      ), D.info("[离线翻译] 翻译模型加载完成"), je = !1, te;
    } catch (n) {
      throw je = !1, _e = null, D.error("[离线翻译] 模型加载失败:", n), n;
    }
  })(), _e);
}
async function Ss(n) {
  if (!n?.trim()) return n;
  we = new AbortController();
  const t = we.signal;
  try {
    const e = await bs();
    if (t.aborted)
      throw new Error("翻译已取消");
    const i = n.split(`
`), s = [];
    for (const o of i) {
      if (t.aborted)
        throw new Error("翻译已取消");
      const a = o.trim();
      if (!a) {
        s.push("");
        continue;
      }
      const r = await e(a);
      if (t.aborted)
        throw new Error("翻译已取消");
      if (Array.isArray(r) && r.length > 0) {
        const l = r[0].translation_text || a;
        s.push(l);
      } else
        s.push(a);
    }
    return s.join(`
`);
  } catch (e) {
    throw e instanceof Error && e.message === "翻译已取消" ? (D.info("[离线翻译] 翻译已取消"), e) : e instanceof Error && e.message.includes("离线翻译运行时未安装") ? (D.warn("[离线翻译] 运行时资源未安装"), e) : (D.error("[离线翻译] 翻译失败:", e), new Error("离线翻译失败，请检查模型是否正确加载"));
  } finally {
    we = null;
  }
}
function ja() {
  we && (we.abort(), we = null, D.info("[离线翻译] 已发送取消信号"));
}
function Fa() {
  return we !== null;
}
async function Cs() {
  await bs();
}
function Va() {
  return te !== null;
}
function Ua() {
  return je;
}
async function ni() {
  try {
    if ("caches" in window) {
      const t = await caches.keys();
      D.info(`[离线翻译] Cache Storage 列表: ${JSON.stringify(t)}`);
      for (const e of t)
        if (e.includes("transformers") || e.includes("huggingface")) {
          const s = await (await caches.open(e)).keys();
          if (D.info(`[离线翻译] Cache "${e}" 包含 ${s.length} 个文件`), s.some(
            (a) => a.url.includes("opus-mt-en-zh") || a.url.includes("Xenova")
          )) {
            const a = s.some((r) => r.url.includes(".onnx"));
            if (D.info(`[离线翻译] 找到模型缓存，包含 ONNX: ${a}`), a)
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
    D.info(`[离线翻译] IndexedDB 列表: ${JSON.stringify(n.map((t) => t.name))}`);
    for (const t of n)
      if (t.name && (t.name.includes("transformers") || t.name.includes("huggingface") || t.name.includes("onnx") || t.name.includes("localforage")))
        return D.info(`[离线翻译] 找到 IndexedDB 缓存: ${t.name}`), {
          isCached: !0,
          cacheType: "indexeddb",
          cacheName: t.name,
          estimatedSize: "~300MB"
        };
    return D.info("[离线翻译] 未找到模型缓存"), { isCached: !1, cacheType: "none" };
  } catch (n) {
    return D.warn("[离线翻译] 检查缓存失败:", n), { isCached: !1, cacheType: "none" };
  }
}
async function Ya() {
  return (await ni()).isCached;
}
function Za() {
  return te !== null;
}
async function Xa() {
  if (te)
    try {
      await te.dispose?.();
    } catch {
    }
  te = null, _e = null, je = !1, D.info("[离线翻译] 翻译器已释放");
}
async function Ga() {
  try {
    const n = await indexedDB.databases();
    for (const t of n)
      t.name && (t.name.includes("transformers") || t.name.includes("onnx")) && (indexedDB.deleteDatabase(t.name), D.info(`[离线翻译] 已删除 IndexedDB: ${t.name}`));
    if ("caches" in window) {
      const t = await caches.keys();
      for (const e of t)
        (e.includes("transformers") || e.includes("onnx")) && (await caches.delete(e), D.info(`[离线翻译] 已删除 Cache: ${e}`));
    }
    D.info("[离线翻译] 模型缓存已清除");
  } catch (n) {
    throw D.error("[离线翻译] 清除缓存失败:", n), n;
  }
}
const Ka = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  canUseOfflineTranslation: Za,
  cancelOfflineTranslation: ja,
  clearModelCache: Ga,
  disposeOfflineTranslator: Xa,
  getModelCacheInfo: ni,
  getModelFiles: Na,
  getRuntimeBaseUrl: xs,
  getRuntimeWasmPaths: ks,
  isModelCached: Ya,
  isOfflineTranslatorInitializing: Ua,
  isOfflineTranslatorReady: Va,
  isTranslationInProgress: Fa,
  setProgressCallback: Ba,
  translateOffline: Ss,
  warmupOfflineTranslator: Cs
}, Symbol.toStringTag, { value: "Module" }));
class de {
  /**
   * 懒加载 OCR 模块
   */
  static async loadOCR() {
    const t = "ocr";
    if (this.loadedModules.has(t))
      return this.loadedModules.get(t);
    if (this.loadingPromises.has(t))
      return this.loadingPromises.get(t);
    const e = Promise.resolve().then(() => Sd).then((i) => (this.loadedModules.set(t, i), this.loadingPromises.delete(t), i));
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
    const e = Promise.resolve(Ka).then((i) => (this.loadedModules.set(t, i), this.loadingPromises.delete(t), i));
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
L(de, "loadedModules", /* @__PURE__ */ new Map()), L(de, "loadingPromises", /* @__PURE__ */ new Map());
async function qa() {
  return await b("local_ai_get_config");
}
async function Ja(n) {
  return await b("local_ai_scan_models", {
    config: n ?? null
  });
}
async function Ms() {
  return await b("local_ai_get_status");
}
async function Qa(n) {
  return await b("local_ai_start_service", {
    config: null
  });
}
async function _s(n) {
  return await b("local_ai_chat", { request: n });
}
function ii(n) {
  if (!n) return "unknown";
  const t = n.match(/[\u4e00-\u9fa5]/g), e = t ? t.length : 0, i = n.match(/[\u3040-\u30ff]/g), s = i ? i.length : 0, o = n.match(/[\uac00-\ud7af]/g), a = o ? o.length : 0, r = n.match(/[a-zA-Z]/g), l = r ? r.length : 0, u = e + s + a + l;
  return u === 0 ? "unknown" : s >= 3 && s > l && s / u >= 0.2 ? "ja" : a >= 3 && a > e && a > l && a / u >= 0.2 ? "ko" : e > l ? "zh" : l > e ? "en" : "unknown";
}
function Te(n) {
  return n === "zh" || n === "en";
}
function ue(n) {
  return ii(n);
}
const tr = /[.!?。！？；;：:][)"'”’】）\]]*$/, Wi = /[\u3040-\u30ff\u3400-\u4dbf\u4e00-\u9fff\uac00-\ud7af]/, sn = /[A-Za-z0-9]/, er = /^\s*(?:(?:[-*+•·●○■□▪▫◆◇]|[▶▷►▸▹→]\s*(?:[·•]\s*)?)\s+|\d+[.)、）]\s*|[a-zA-Z][.)]\s+)/, Bi = /(?:^|\s)(?:(?:[-*+•·●○■□▪▫◆◇]|[▶▷►▸▹→]\s*[·•])\s+|\d+[.)、）]\s*|[a-zA-Z][.)]\s+)/g;
function nr(n, t = {}) {
  const e = Hr(n), i = mr(n, e);
  return i.length === 0 ? [] : dr(i, e) ? ur(i, e) : (t.mode === "single_para" ? [Be(i, e)] : sr(i, e)).flatMap((o) => ir(o, e));
}
function ir(n, t) {
  const e = oi(n, t), i = [];
  for (const s of e) {
    const o = i[i.length - 1], a = o ? kr(o, s, t) : !1;
    if (!o || !a) {
      i.push(Sr(s));
      continue;
    }
    o.text = Mr(o.text, s.text), o.blocks = [...o.blocks, ...s.blocks], o.bbox = As(o.bbox, s.bbox), o.fontSize = ji(
      o.fontSize || s.fontSize,
      o.blocks.length - s.blocks.length,
      s.fontSize,
      s.blocks.length
    ), o.lineHeight = ji(
      o.lineHeight || s.lineHeight,
      o.blocks.length - s.blocks.length,
      s.lineHeight,
      s.blocks.length
    ), o.isCodeBlock = !!(o.isCodeBlock || s.isCodeLike || s.hasTableColumns), o.isStructuredBlock = !!(o.isStructuredBlock || s.hasTableColumns);
  }
  return _r(i, t);
}
function sr(n, t) {
  if (n.length <= 1)
    return [n];
  const e = n.map((l) => ({
    bbox: gr(l),
    block: l
  })).filter((l) => fr(l.bbox)).sort(si);
  if (e.length <= 1)
    return [Be(n, t)];
  if (or(e, t))
    return [Be(n, t)];
  const { cuts: i, rows: s } = ar(e);
  if (i.length < 2 || s.length <= 1)
    return [Be(n, t)];
  const o = cr(i, s), r = hr(o).filter((l) => l.units.length > 0).map((l) => l.units.map((c) => c.block)).filter((l) => l.length > 0);
  return r.length > 0 ? r : [Be(n, t)];
}
function or(n, t) {
  if (n.length < 2)
    return !0;
  const e = [...n].sort(si);
  let i = 0, s = 0;
  for (let o = 1; o < e.length; o += 1) {
    const a = e[o - 1].bbox, r = e[o].bbox;
    if (r.top - a.bottom > t * 2.5)
      continue;
    i += 1;
    const c = Math.min(a.right, r.right) - Math.max(a.left, r.left), u = Math.max(Math.min(a.right - a.left, r.right - r.left), 1), d = c / u >= 0.45, w = Math.abs(a.left - r.left) <= t * 1.5;
    (d || w) && (s += 1);
  }
  return i > 0 && s / i >= 0.72;
}
function ar(n) {
  const t = Math.min(...n.map((l) => l.bbox.left)) - 1, e = Math.max(...n.map((l) => l.bbox.right)) + 1, i = [], s = [];
  let o = [], a = 0;
  for (; a < n.length; ) {
    const c = n[a].bbox.bottom, u = [];
    for (; a < n.length && n[a].bbox.top <= c; )
      u.push(n[a]), a += 1;
    u.sort((f, m) => f.bbox.left - m.bbox.left || f.bbox.right - m.bbox.right);
    const d = rr(u, t, e, i.length), { gaps: w, removedGaps: x } = lr(o, d), C = i.length - 1;
    for (const f of x)
      s.push({
        left: f.left,
        right: f.right,
        startRow: f.startRow,
        endRow: C
      });
    o = w, i.push(u);
  }
  const r = i.length - 1;
  for (const l of o)
    s.push({
      left: l.left,
      right: l.right,
      startRow: l.startRow,
      endRow: r
    });
  return s.sort((l, c) => l.left - c.left || l.right - c.right), { cuts: s, rows: i };
}
function rr(n, t, e, i) {
  const s = [];
  let o = t;
  for (const a of n)
    a.bbox.left > o && s.push({ left: o, right: a.bbox.left, startRow: i }), a.bbox.right > o && (o = a.bbox.right);
  return s.push({ left: o, right: e, startRow: i }), s;
}
function lr(n, t) {
  const e = n.map(() => !1), i = t.map(() => !1), s = [];
  for (let o = 0; o < n.length; o += 1) {
    const a = n[o];
    for (let r = 0; r < t.length; r += 1) {
      const l = t[r], c = Math.max(a.left, l.left), u = Math.min(a.right, l.right);
      c <= u && (s.push({ left: c, right: u, startRow: a.startRow }), e[o] = !0, i[r] = !0);
    }
  }
  for (let o = 0; o < t.length; o += 1)
    i[o] || s.push(t[o]);
  return {
    gaps: s,
    removedGaps: n.filter((o, a) => !e[a])
  };
}
function cr(n, t) {
  const e = t.map(() => []);
  for (const r of n)
    for (let l = r.startRow; l <= r.endRow; l += 1)
      e[l]?.push({ left: r.left, right: r.right });
  for (const r of e)
    r.sort((l, c) => l.left - c.left || l.right - c.right);
  const i = {
    xLeft: n[0].left - 1,
    xRight: n[n.length - 1].right + 1,
    rowTop: -1,
    rowBottom: -1,
    units: [],
    children: []
  }, s = [i];
  let o = [];
  const a = (r) => {
    const l = r.xRight - 2, c = s.filter((x) => l >= x.xLeft && l <= x.xRight + 1e-4 && x.rowBottom < r.rowTop), u = Math.max(...c.map((x) => x.rowBottom), i.rowBottom), d = c.filter((x) => x.rowBottom === u);
    (d.length > 0 ? d.reduce((x, C) => C.xRight > x.xRight ? C : x) : i).children.push(r), s.push(r);
  };
  for (let r = 0; r < t.length; r += 1) {
    const l = e[r], c = [];
    for (const x of o) {
      let C = !1, f = !1, m = !1;
      for (const R of l)
        if (on(R.right, x.xLeft) && (C = !0), on(R.left, x.xRight) && (f = !0), x.xLeft < R.left && R.left < x.xRight || x.xLeft < R.right && R.right < x.xRight) {
          m = !0;
          break;
        }
      !C || !f || m ? a(x) : (x.rowBottom = r, c.push(x));
    }
    o = c;
    let u = 0, d = 0;
    const w = t[r];
    for (; u < w.length && l.length >= 2; ) {
      const x = w[u];
      d + 1 >= l.length && (d = Math.max(0, l.length - 2));
      const C = l[d].right, f = l[d + 1].left;
      if (x.bbox.left + 1e-4 > f && d < l.length - 2) {
        d += 1;
        continue;
      }
      let m = o.find((R) => on(R.xLeft, C) && on(R.xRight, f));
      m || (m = {
        xLeft: C,
        xRight: f,
        rowTop: r,
        rowBottom: r,
        units: [],
        children: []
      }, o.push(m)), m.units.push(x), u += 1;
    }
  }
  for (const r of o)
    a(r);
  for (const r of s)
    r.children.sort((l, c) => l.xLeft - c.xLeft || l.rowTop - c.rowTop), r.units.sort(si);
  return i;
}
function hr(n) {
  const t = [n], e = [];
  for (; t.length > 0; ) {
    const i = t.pop();
    i && (e.push(i), t.push(...[...i.children].reverse()));
  }
  return e;
}
function Be(n, t) {
  return [...n].sort((e, i) => {
    const s = e.y - i.y;
    return Math.abs(s) > t * 0.45 ? s : e.x - i.x;
  });
}
function ur(n, t) {
  const e = ae(Ot(n.map((a) => a.width)), t * 0.5), i = Math.max(e * 1.4, t * 0.28), s = [...n].sort((a, r) => {
    const l = r.x + r.width / 2 - (a.x + a.width / 2);
    return Math.abs(l) > t * 0.65 ? l : a.y - r.y;
  }), o = [];
  for (const a of s) {
    const r = a.x + a.width / 2, l = o[o.length - 1], c = l ? Ot(l.map((u) => u.x + u.width / 2)) : 0;
    l && Math.abs(r - c) <= i ? l.push(a) : o.push([a]);
  }
  return o.map((a) => {
    const r = [...a].sort((w, x) => w.y - x.y), l = r.reduce((w, x, C) => {
      const f = x.text.trim();
      return C === 0 ? f : ai(w, f);
    }, ""), c = Ps(r), u = Ot(r.map((w) => ae(w.fontSize, t))), d = Ot(r.map((w) => Mn(w)));
    return {
      text: l,
      blocks: r,
      bbox: c,
      isCodeBlock: !1,
      isStructuredBlock: !1,
      fontSize: u,
      lineHeight: d,
      angle: Ot(r.map((w) => w.angle || 0))
    };
  });
}
function dr(n, t) {
  return n.length < 2 ? !1 : n.filter((i) => {
    const s = Math.max(i.width, 1);
    return i.height > s * 1.35 && i.height > Math.max(18, t * 0.35);
  }).length >= Math.max(2, Math.ceil(n.length * 0.56));
}
function gr(n) {
  return {
    left: n.x,
    top: n.y,
    right: n.x + n.width,
    bottom: n.y + n.height
  };
}
function fr(n) {
  return Number.isFinite(n.left) && Number.isFinite(n.top) && Number.isFinite(n.right) && Number.isFinite(n.bottom) && n.right >= n.left && n.bottom >= n.top;
}
function si(n, t) {
  return n.bbox.top - t.bbox.top || n.bbox.left - t.bbox.left;
}
function on(n, t) {
  return Math.abs(n - t) <= 1e-4;
}
function mr(n, t) {
  return n.map((e) => {
    const i = e.text.trim();
    if (!i || pr(e, t) || yr(i))
      return null;
    const s = vr(wr(i, e, t));
    return s === e.text ? e : { ...e, text: s };
  }).filter((e) => !!e);
}
function pr(n, t) {
  const e = n.text.trim();
  if (!/^[cC]$/.test(e))
    return !1;
  const i = t * 1.25;
  return n.width <= i && n.height <= i;
}
function wr(n, t, e) {
  return /^xC$/i.test(n) && t.width <= e * 2.4 ? "X" : n;
}
function yr(n) {
  return /^(?:en|zh|ja|ko|de|fr|es|ru|pt|it|nl)[A-Z]{2,4}$/.test(n.trim());
}
function vr(n) {
  return n.replace(/^:\s+(?=[A-Z])/, "- ");
}
function oi(n, t) {
  const e = [...n].sort((o, a) => {
    const r = o.y - a.y;
    return Math.abs(r) > t * 0.45 ? r : o.x - a.x;
  }), i = [], s = t * 0.45;
  for (const o of e) {
    const a = i[i.length - 1];
    a && Math.abs(o.y - a.y) < s && !Er(a.blocks, o, t) ? (a.blocks.push(o), a.y = Ot(a.blocks.map((r) => r.y))) : i.push({ y: o.y, blocks: [o] });
  }
  return i.map((o) => xr(o.blocks, t));
}
function xr(n, t) {
  const e = [...n].sort((r, l) => r.x - l.x), i = Ps(e), s = e.reduce((r, l, c) => {
    const u = l.text.trim();
    return c === 0 ? u : Cr(r, u);
  }, ""), o = Ot(e.map((r) => ae(r.fontSize, t))), a = Ot(e.map((r) => Mn(r)));
  return {
    text: s,
    blocks: e,
    bbox: i,
    fontSize: o,
    lineHeight: a,
    centerY: i.y + i.height / 2,
    hasTableColumns: $r(e, t),
    isCodeLike: Rs(s)
  };
}
function kr(n, t, e) {
  const i = oi(n.blocks, e), s = i[i.length - 1];
  if (!s) return !1;
  const o = Ue(s.text);
  if (Cn(s.text) || Ue(t.text) || o && !br(s, t, e) || t.isCodeLike || s.isCodeLike || t.hasTableColumns || s.hasTableColumns) return !1;
  const a = t.bbox.y - (s.bbox.y + s.bbox.height);
  if (a < -e * 0.25 || a >= e * 1.8 || Pr(i, a, e) || Ar(s, t, a, e) || Dr(s, t, a, e) || Ir(s, t, a, e) || Or(s, t, a, e))
    return !1;
  if (o)
    return !0;
  const r = Math.max(e * 1.2, s.lineHeight * 0.9);
  return Math.abs(t.bbox.x - s.bbox.x) <= r;
}
function br(n, t, e) {
  if (zs(t.text))
    return !1;
  const i = t.bbox.x - n.bbox.x, s = Math.max(e * 0.8, n.lineHeight * 0.65);
  return i >= s;
}
function Sr(n) {
  return {
    text: n.text,
    blocks: [...n.blocks],
    bbox: { ...n.bbox },
    isCodeBlock: n.isCodeLike || n.hasTableColumns,
    isStructuredBlock: n.hasTableColumns,
    fontSize: n.fontSize,
    lineHeight: n.lineHeight,
    angle: Ot(n.blocks.map((t) => t.angle || 0))
  };
}
function Cr(n, t) {
  return ai(n, t);
}
function Mr(n, t) {
  return ai(n, t);
}
function ai(n, t) {
  const e = n.trimEnd(), i = t.trimStart();
  if (!e) return i;
  if (!i) return e;
  const s = e.charAt(e.length - 1), o = i.charAt(0), a = e.charAt(e.length - 2);
  return s === "-" && sn.test(a) && sn.test(o) ? `${e.slice(0, -1)}${i}` : jr(o) || Fr(s) ? `${e}${i}` : Wi.test(s) || Wi.test(o) || Fi(s) || Fi(o) ? `${e}${i}` : sn.test(s) && sn.test(o) ? `${e} ${i}` : `${e} ${i}`.replace(/\s+/g, " ");
}
function Cn(n) {
  return tr.test(n.trim());
}
function Ue(n) {
  return er.test(n);
}
function _r(n, t) {
  return n.flatMap((e) => Tr(e, t));
}
function Tr(n, t) {
  const e = Ts(n.text);
  if (e.length <= 1)
    return [n];
  const i = oi(n.blocks, t), s = i.length === e.length;
  return e.map((o, a) => {
    const r = s ? i[a] : null, l = r?.bbox || Rr(n.bbox, a, e.length), c = r?.blocks || [Lr(n, o, l, a)];
    return {
      ...n,
      text: o,
      blocks: c,
      bbox: l,
      isCodeBlock: !!c.some((u) => Rs(u.text)),
      isStructuredBlock: n.isStructuredBlock,
      fontSize: Ot(c.map((u) => ae(u.fontSize, n.fontSize || t))),
      lineHeight: Ot(c.map((u) => Mn(u))),
      angle: Ot(c.map((u) => u.angle || 0))
    };
  });
}
function Ts(n) {
  const t = n.split(/\r?\n+/).map((i) => i.trim()).filter(Boolean);
  if (t.length > 1)
    return t.flatMap(Ts);
  const e = zr(n);
  return e.length > 1 ? e.flatMap(Ni) : Ni(n);
}
function zr(n) {
  const t = n.trim(), e = [];
  Bi.lastIndex = 0;
  for (const i of t.matchAll(Bi)) {
    const s = i[0], o = i.index ?? 0;
    e.push(o + (s.startsWith(" ") ? 1 : 0));
  }
  return e.length <= 1 ? [t] : e.map((i, s) => {
    const o = e[s + 1] ?? t.length;
    return t.slice(i, o).trim();
  }).filter(Boolean);
}
function Ni(n) {
  const t = n.trim();
  if (!Ue(t))
    return [t];
  const e = t.match(/^(.+?\([^)]{1,80}\))\s+([A-Z][A-Za-z0-9][A-Za-z0-9\s:,'&()[\]/-]{2,40})$/);
  return !e || !zs(e[2]) ? [t] : [e[1].trim(), e[2].trim()];
}
function Rr(n, t, e) {
  const i = n.height / Math.max(e, 1);
  return {
    x: n.x,
    y: n.y + i * t,
    width: n.width,
    height: i
  };
}
function Lr(n, t, e, i) {
  const s = n.blocks[Math.min(i, Math.max(n.blocks.length - 1, 0))];
  return {
    ...s || {
      fontSize: n.fontSize || e.height,
      lineHeight: n.lineHeight || e.height,
      angle: n.angle || 0
    },
    text: t,
    x: e.x,
    y: e.y,
    width: e.width,
    height: e.height,
    fontSize: s?.fontSize || n.fontSize || e.height,
    lineHeight: s?.lineHeight || n.lineHeight || e.height,
    angle: s?.angle || n.angle || 0
  };
}
function zs(n) {
  const t = n.trim();
  return !t || Cn(t) || Ue(t) ? !1 : t.split(/\s+/).filter(Boolean).length <= 5 && /^[A-Z][A-Za-z0-9\s:,'&()[\]/-]+$/.test(t);
}
function Pr(n, t, e) {
  if (n.length < 2 || t <= 0)
    return !1;
  const i = [];
  for (let a = 1; a < n.length; a++) {
    const r = n[a - 1], c = n[a].bbox.y - (r.bbox.y + r.bbox.height);
    c > 0 && i.push(c);
  }
  const s = i.length > 0 ? Ot(i) : 0, o = Math.max(s * 2.2, e * 1.15);
  return t > o;
}
function Ar(n, t, e, i) {
  const s = n.text.trim();
  if (!s || Cn(s) || Ue(s) || n.isCodeLike || s.endsWith("-"))
    return !1;
  const o = s.split(/\s+/).filter(Boolean).length, a = n.bbox.width < t.bbox.width * 0.72, r = /^[A-Z][A-Za-z0-9\s:,'&()[\]/-]+$/.test(s) && o <= 8 && a, l = /[\u3400-\u4dbf\u4e00-\u9fff]/.test(s) && s.length <= 12 && a, c = r || l;
  return n.fontSize >= t.fontSize * 1.18 && c ? !0 : e > i * 0.7 && c;
}
function Dr(n, t, e, i) {
  if (e <= 0)
    return !1;
  const s = Math.max(n.fontSize, t.fontSize), o = Math.max(Math.min(n.fontSize, t.fontSize), 1), a = s / o, r = e / Math.max(o, i * 0.6, 1);
  if (a >= 1.45 && r >= 0.65)
    return !0;
  const l = n.fontSize >= i * 1.08 && n.bbox.width >= t.bbox.width * 0.82, c = t.fontSize <= n.fontSize * 0.78 && e >= Math.max(t.lineHeight * 0.75, i * 0.55);
  return l && c;
}
function Ir(n, t, e, i) {
  if (e < i * 0.45)
    return !1;
  const o = n.text.split(/\s+/).filter(Boolean).length <= 3 && n.bbox.width < t.bbox.width * 0.35, a = Math.abs(n.bbox.x - t.bbox.x) <= i * 0.6;
  return o && a;
}
function Or(n, t, e, i) {
  return e < i * 0.25 || !(Math.abs(n.bbox.x - t.bbox.x) <= i * 0.35) ? !1 : Hi(n.text) && Hi(t.text);
}
function Hi(n) {
  const t = n.trim();
  return t.split(/\s+/).filter(Boolean).length <= 3 && t.length <= 32 && !Cn(t);
}
function Rs(n) {
  const t = n.trim();
  return t ? !!(/^(?:\$|>|PS>|C:\\|[A-Za-z]:\\|\/[\w.-]+\/)/.test(t) || /^(?:const|let|var|return|import|export|function|class|if|else|for|while|try|catch)\b/.test(t) || /^[{}()[\];,]+$/.test(t) || /^(?:sudo|npm|yarn|pnpm|deno|bun|git|cd|ls|cat|chmod|mkdir|rm|cp|mv|curl|wget|brew|apt|yum|dnf|pip|cargo)\s+\S+/.test(t) || /[{};]/.test(t) && /[=()]/.test(t) || /^<\/?[A-Za-z][^>]*>$/.test(t) || /^[\w.-]+\([^)]*\)\s*[{;]?$/.test(t)) : !1;
}
function Er(n, t, e) {
  const i = [...n].sort((a, r) => a.x - r.x), s = i[i.length - 1], o = t.x - (s.x + s.width);
  return o > e * 0.9 && Nr(s.text) && Ls(t.text) ? !1 : o > e * 3.2;
}
function $r(n, t) {
  if (n.length < 2)
    return n.some((s) => Wr(s.text));
  const e = [...n].sort((s, o) => s.x - o.x);
  let i = 0;
  for (let s = 1; s < e.length; s++) {
    const o = e[s - 1], a = e[s], r = e[s].x - (o.x + o.width);
    (r > t * 1.8 || r > t * 0.9 && Br(o.text) && Ls(a.text)) && (i += 1);
  }
  return i >= 1;
}
function Wr(n) {
  const t = n.trim();
  return /\S\s{3,}\S/.test(t) && (/^Option\s{2,}Description\b/i.test(t) || /^[A-Za-z_][A-Za-z0-9_-]{1,24}\s{2,}[A-Z]/.test(t));
}
function Br(n) {
  return /^[A-Za-z_][A-Za-z0-9_-]{1,24}$/.test(n.trim());
}
function Nr(n) {
  const t = n.trim();
  return /^[a-z_][A-Za-z0-9_-]{1,24}$/.test(t) || /[_-]/.test(t);
}
function Ls(n) {
  const t = n.trim();
  return /^[A-Z]/.test(t) && t.length > 6;
}
function Ps(n) {
  const t = n.map((e) => ({
    x: e.x,
    y: e.y,
    width: e.width,
    height: e.height
  }));
  return t.reduce((e, i) => As(e, i), t[0]);
}
function As(n, t) {
  const e = Math.min(n.x, t.x), i = Math.min(n.y, t.y), s = Math.max(n.x + n.width, t.x + t.width), o = Math.max(n.y + n.height, t.y + t.height);
  return {
    x: e,
    y: i,
    width: s - e,
    height: o - i
  };
}
function Hr(n) {
  return ae(Ot(n.map((t) => Mn(t))), 16);
}
function Mn(n) {
  return ae(n.lineHeight, ae(n.height, ae(n.fontSize, 16) * 1.2));
}
function ji(n, t, e, i) {
  const s = t + i;
  return s <= 0 ? e : (n * t + e * i) / s;
}
function ae(n, t) {
  return Number.isFinite(n) && n > 0 ? n : t;
}
function Ot(n) {
  return n.length === 0 ? 0 : n.reduce((t, e) => t + e, 0) / n.length;
}
function jr(n) {
  return /^[,.;:!?，。！？；：、)\]}>"'”’]$/.test(n);
}
function Fr(n) {
  return /^[(\[{<"'“‘]$/.test(n);
}
function Fi(n) {
  return /^[，。！？；：、（）【】《》“”‘’]$/.test(n);
}
const Vi = 34;
class Vr {
  constructor(t, e, i) {
    this.pixels = t, this.sampleWidth = e, this.sampleHeight = i;
  }
  detect(t, e) {
    const i = this.getDominantNearbyColor(t, e), s = this.findMatchingStart(t, e, i);
    if (!s) return null;
    const o = this.getPixelBounds(e);
    return o ? this.floodFillRegion(s, o, i) : null;
  }
  floodFillRegion(t, e, i) {
    const { left: s, top: o, right: a, bottom: r, width: l, height: c } = e, u = new Uint8Array(l * c), d = new Int32Array(l * c), w = new Int32Array(l * c);
    let x = 0, C = 1, f = t.x, m = t.x, R = t.y, A = t.y;
    for (d[0] = t.x, w[0] = t.y, u[(t.y - o) * l + t.x - s] = 1; x < C; ) {
      const V = d[x], F = w[x];
      if (x += 1, f = Math.min(f, V), m = Math.max(m, V), R = Math.min(R, F), A = Math.max(A, F), C = this.enqueueNeighbors(
        V,
        F,
        s,
        o,
        a,
        r,
        l,
        i,
        u,
        d,
        w,
        C
      ), C > l * c * 0.94) return null;
    }
    const M = m - f + 1, j = A - R + 1;
    return C / Math.max(1, M * j) >= 0.24 ? { x: f, y: R, width: M, height: j } : null;
  }
  getPixelBounds(t) {
    const e = Math.max(0, Math.floor(t.x)), i = Math.max(0, Math.floor(t.y)), s = Math.min(
      this.sampleWidth,
      Math.ceil(t.x + t.width)
    ), o = Math.min(
      this.sampleHeight,
      Math.ceil(t.y + t.height)
    ), a = s - e, r = o - i;
    return a > 0 && r > 0 ? { left: e, top: i, right: s, bottom: o, width: a, height: r } : null;
  }
  enqueueNeighbors(t, e, i, s, o, a, r, l, c, u, d, w) {
    let x = w;
    const C = [
      { x: t - 1, y: e },
      { x: t + 1, y: e },
      { x: t, y: e - 1 },
      { x: t, y: e + 1 }
    ];
    for (const f of C) {
      if (f.x < i || f.x >= o || f.y < s || f.y >= a)
        continue;
      const m = (f.y - s) * r + f.x - i;
      c[m] || (c[m] = 1, this.isColorNear(this.getColor(f.x, f.y), l) && (u[x] = f.x, d[x] = f.y, x += 1));
    }
    return x;
  }
  getDominantNearbyColor(t, e) {
    const i = /* @__PURE__ */ new Map();
    for (let o = -4; o <= 4; o += 2)
      for (let a = -4; a <= 4; a += 2) {
        const r = Math.round(t.x + a), l = Math.round(t.y + o);
        if (!this.contains(e, { x: r, y: l })) continue;
        const c = this.getColor(r, l), u = `${c.r >> 4},${c.g >> 4},${c.b >> 4}`, d = i.get(u) || { count: 0, r: 0, g: 0, b: 0 };
        d.count += 1, d.r += c.r, d.g += c.g, d.b += c.b, i.set(u, d);
      }
    const s = [...i.values()].reduce(
      (o, a) => a.count > o.count ? a : o,
      { count: 1, r: 255, g: 255, b: 255 }
    );
    return {
      r: s.r / s.count,
      g: s.g / s.count,
      b: s.b / s.count
    };
  }
  findMatchingStart(t, e, i) {
    for (let s = 0; s <= 6; s += 1)
      for (let o = t.y - s; o <= t.y + s; o += 1)
        for (let a = t.x - s; a <= t.x + s; a += 1) {
          const r = { x: Math.round(a), y: Math.round(o) };
          if (this.contains(e, r) && this.isColorNear(this.getColor(r.x, r.y), i))
            return r;
        }
    return null;
  }
  isColorNear(t, e) {
    const i = t.r - e.r, s = t.g - e.g, o = t.b - e.b;
    return i * i + s * s + o * o <= Vi * Vi;
  }
  getColor(t, e) {
    const i = Math.max(0, Math.min(this.sampleWidth - 1, t)), o = (Math.max(0, Math.min(this.sampleHeight - 1, e)) * this.sampleWidth + i) * 4;
    return {
      r: this.pixels[o],
      g: this.pixels[o + 1],
      b: this.pixels[o + 2]
    };
  }
  contains(t, e) {
    return e.x >= t.x && e.x < t.x + t.width && e.y >= t.y && e.y < t.y + t.height;
  }
}
const Ur = 960, Yr = 640;
class ri {
  constructor(t, e, i, s, o) {
    L(this, "regionDetector");
    L(this, "lastDetection", null);
    this.sampleWidth = e, this.sampleHeight = i, this.logicalWidth = s, this.logicalHeight = o, this.regionDetector = new Vr(
      t,
      e,
      i
    );
  }
  static fromImage(t, e, i) {
    if (e <= 0 || i <= 0) return null;
    const s = Math.min(
      1,
      Ur / e,
      Yr / i
    ), o = Math.max(1, Math.round(e * s)), a = Math.max(1, Math.round(i * s)), r = document.createElement("canvas");
    r.width = o, r.height = a;
    const l = r.getContext("2d", { willReadFrequently: !0 });
    if (!l) return null;
    l.drawImage(t, 0, 0, o, a);
    const c = l.getImageData(0, 0, o, a);
    return new ri(
      c.data,
      o,
      a,
      e,
      i
    );
  }
  detect(t, e) {
    const i = this.getCachedDetection(t, e);
    if (i !== void 0) return i;
    const s = this.toSampleRect(e), o = this.toSamplePoint(t);
    if (!this.containsSamplePoint(s, o))
      return this.cacheDetection(t, e, null), null;
    const a = this.regionDetector.detect(o, s);
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
    const s = t.width * t.height, o = e.width * e.height;
    return t.width >= 18 && t.height >= 14 && s >= 320 && s < o * 0.45 && this.containsLogicalPoint(t, i);
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
function Ui(n, t) {
  if (!n || !t) return n === t;
  if (Math.abs(n.x - t.x) <= 3 && Math.abs(n.y - t.y) <= 3 && Math.abs(n.width - t.width) <= 6 && Math.abs(n.height - t.height) <= 6) return !0;
  const i = Math.max(
    0,
    Math.min(n.x + n.width, t.x + t.width) - Math.max(n.x, t.x)
  ), s = Math.max(
    0,
    Math.min(n.y + n.height, t.y + t.height) - Math.max(n.y, t.y)
  ), o = i * s, a = n.width * n.height + t.width * t.height - o;
  return a > 0 && o / a >= 0.86;
}
class Zr {
  constructor() {
    L(this, "currentRect", null);
    L(this, "isFinalized", !1);
  }
  preview(t) {
    return t ? this.isFinalized && Ui(this.currentRect, t) ? {
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
    const e = !Ui(this.currentRect, t);
    return this.currentRect = this.cloneRect(t), {
      rect: this.cloneRect(this.currentRect),
      changed: e
    };
  }
  cloneRect(t) {
    return t ? { ...t } : null;
  }
}
class Xr {
  constructor(t, e, i, s) {
    L(this, "canvas");
    L(this, "coordinateSystem");
    L(this, "drawingEngine");
    L(this, "eventHandler");
    // 状态管理
    L(this, "selectionRect", null);
    L(this, "annotations", []);
    L(this, "currentAnnotation", null);
    L(this, "selectedAnnotation", null);
    L(this, "hoveredAnnotation", null);
    // 拖拽状态
    L(this, "draggedAnnotation", null);
    L(this, "dragStartPoint", null);
    L(this, "resizingAnnotation", null);
    L(this, "resizeStartBounds", null);
    L(this, "resizeOperation", null);
    // 编辑状态
    L(this, "editingAnnotation", null);
    // 标注历史记录（用于撤销/恢复）
    L(this, "annotationUndoStack", []);
    L(this, "annotationRedoStack", []);
    L(this, "pendingDragSnapshot", null);
    L(this, "pendingResizeSnapshot", null);
    // 工具设置
    L(this, "currentTool", g.Select);
    L(this, "currentStyle", { color: "#ff4444", lineWidth: 3, opacity: 1 });
    L(this, "textSize", 16);
    L(this, "mosaicSize", 8);
    L(this, "selectionCornerRadius", 0);
    L(this, "showGuides", !0);
    // 取色器状态
    L(this, "colorPickerState", {
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
    L(this, "allWindows", []);
    L(this, "snapThreshold", 30);
    // 吸附阈值（像素）
    L(this, "snappedWindow", null);
    L(this, "snappedElement", null);
    L(this, "elementCandidateStabilizer", new Zr());
    L(this, "showSnapPreview", !1);
    L(this, "captureMonitor", { x: 0, y: 0, scale: 1 });
    L(this, "lastPointerPosition", null);
    L(this, "smartDetectionSequence", 0);
    L(this, "smartDetectionTimer", null);
    L(this, "accessibilityDetectionTimer", null);
    L(this, "pendingSmartDetection", null);
    // 点击拖拽区分
    L(this, "pendingSnapCandidate", null);
    L(this, "dragStartPosition", null);
    L(this, "dragThreshold", 5);
    // 拖拽阈值（像素）
    // 节流相关状态
    L(this, "throttleTimer", null);
    L(this, "lastThrottledTimestamp", 0);
    L(this, "throttleInterval", 33);
    // ms, 30 FPS (优化性能)
    // 按键状态
    L(this, "isShiftPressed", !1);
    // 背景图像（预捕获的屏幕）
    L(this, "backgroundImage", null);
    L(this, "visualElementDetector", null);
    // 是否正在加载完整背景图
    L(this, "isLoadingBackground", !1);
    // 翻译覆盖层状态
    L(this, "translationOverlay", {
      blocks: [],
      isVisible: !1,
      isLoading: !1,
      sourceLanguage: "auto",
      targetLanguage: "zh",
      engine: "bing"
      // 默认值，实际值由组件初始化时从后端获取并设置
    });
    // 离线模型后端激活状态
    L(this, "offlineModelActivated", !1);
    // Canvas 池
    L(this, "canvasPool", jn.getInstance());
    // 回调函数
    L(this, "onStateChange");
    L(this, "onTextInputRequest");
    L(this, "onColorPicked");
    // 背景重载标记（用于避免重复加载）
    L(this, "backgroundReloadPending", !1);
    // 事件处理器引用（用于清理）
    L(this, "mouseDownHandler", this.handleMouseDown.bind(this));
    L(this, "mouseMoveHandler", this.handleMouseMove.bind(this));
    L(this, "mouseUpHandler", this.handleMouseUp.bind(this));
    L(this, "doubleClickHandler", this.handleDoubleClick.bind(this));
    L(this, "keyDownHandler", this.handleKeyDownInternal.bind(this));
    L(this, "keyUpHandler", this.handleKeyUp.bind(this));
    this.canvas = t, this.onStateChange = e, this.onTextInputRequest = i, this.onColorPicked = s, this.coordinateSystem = new ha(t), this.drawingEngine = new ca(t, this.coordinateSystem), this.eventHandler = new ua(t, this.coordinateSystem), this.bindMouseEvents(), this.initCanvas(), Promise.all([
      this.loadAllWindows().then(() => {
        this.detectInitialWindowSnap();
      }),
      this.loadScreenBackground()
    ]), de.preloadModules();
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
    if (this.annotations = t.annotations.map((e) => en.fromData(this.cloneAnnotationData(e))).filter((e) => e !== null), this.selectedAnnotation = null, this.hoveredAnnotation = null, this.draggedAnnotation = null, this.resizingAnnotation = null, this.editingAnnotation = null, t.selectedAnnotationId) {
      const e = this.annotations.find((i) => i.getData().id === t.selectedAnnotationId);
      e && (e.updateData({ selected: !0 }), this.selectedAnnotation = e);
    }
    this.draw(), this.onStateChange?.();
  }
  // 初始化画布
  initCanvas() {
    const t = this.canvas.parentElement;
    if (!t) return;
    const e = t.clientWidth, i = t.clientHeight, s = window.devicePixelRatio || 1;
    this.canvas.width = Math.round(e * s), this.canvas.height = Math.round(i * s), this.canvas.style.width = e + "px", this.canvas.style.height = i + "px";
    const o = this.canvas.getContext("2d");
    o && o.scale(s, s), this.drawPendingState(), this.coordinateSystem.updateCanvasRect(this.canvas);
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
        D.error("[截图] 加载屏幕背景失败", t), this.createFallbackBackground();
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
        const s = await b("get_screenshot_background");
        if (s) {
          const o = new Image();
          await new Promise((a, r) => {
            const l = setTimeout(() => {
              o.onload = null, o.onerror = null, r(new Error("Image load timeout"));
            }, 5e3);
            o.onload = () => {
              clearTimeout(l), this.backgroundImage = o;
              const c = window.devicePixelRatio || 1;
              this.visualElementDetector = ri.fromImage(
                o,
                this.canvas.width / c,
                this.canvas.height / c
              ), this.lastPointerPosition && this.snappedWindow && this.scheduleUiElementDetection(
                this.lastPointerPosition,
                this.snappedWindow
              ), this.draw(), a();
            }, o.onerror = (c) => {
              clearTimeout(l), r(c);
            }, o.src = `data:${this.detectImageMime(s)};base64,${s}`;
          });
          return;
        }
      } catch (s) {
        if (s?.toString().includes("No screenshot background available") || s?.toString().includes("being captured")) {
          await new Promise((o) => setTimeout(o, 100)), i += 100;
          continue;
        }
        throw s;
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
      D.error("[截图] 创建后备背景失败", t);
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
      const i = 10, s = 50;
      await new Promise((l) => setTimeout(l, 100));
      for (let l = 0; l < i; l++)
        try {
          const [c, u] = await Promise.all([
            b("get_cached_monitor_info"),
            b("get_cached_window_list")
          ]);
          t = {
            x: c.x,
            y: c.y,
            scale: c.scale,
            isFullscreen: !1
          }, e = u;
          break;
        } catch {
          if (l < i - 1) {
            await new Promise((d) => setTimeout(d, s));
            continue;
          }
          const u = await Promise.all([
            b("get_window_info"),
            b("get_all_windows")
          ]);
          t = u[0], e = u[1];
        }
      const o = t?.scale || 1, a = window.innerWidth, r = window.innerHeight;
      this.captureMonitor = {
        x: t?.x || 0,
        y: t?.y || 0,
        scale: o
      }, this.allWindows = e.filter((l) => this.isValidWindow(l)).map((l) => ({
        ...l,
        x: Math.round((l.x - this.captureMonitor.x) / o),
        y: Math.round((l.y - this.captureMonitor.y) / o),
        width: Math.round(l.width / o),
        height: Math.round(l.height / o)
      })).filter(
        (l) => l.x >= -l.width && l.y >= -l.height && l.x < a + l.width && l.y < r + l.height
      );
    } catch (t) {
      D.error("[截图] 加载窗口列表失败", t), this.allWindows = [];
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
      let s;
      try {
        const r = await b("get_cached_monitor_info");
        s = {
          x: r.x,
          y: r.y,
          scale: r.scale
        };
      } catch {
        s = await b("get_window_info");
      }
      let o;
      try {
        const r = await b("get_mouse_position"), l = s?.scale || 1;
        o = {
          x: Math.round((r.x - s.x) / l),
          y: Math.round((r.y - s.y) / l)
        };
      } catch {
        o = {
          x: Math.round(this.canvas.width / (window.devicePixelRatio || 1) / 2),
          y: Math.round(this.canvas.height / (window.devicePixelRatio || 1) / 2)
        };
      }
      const a = this.detectNearbyWindow(o);
      this.lastPointerPosition = o, a ? (this.snappedWindow = a, this.showSnapPreview = !0, this.draw(), this.scheduleUiElementDetection(o, a)) : (this.showSnapPreview = !0, this.draw());
    } catch (t) {
      D.error("[截图] 初始窗口吸附检测失败", t);
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
    for (const s of e)
      if (t.title === s || t.title.startsWith(s))
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
      const o = Math.abs(t.x - i.x), a = Math.abs(t.x - (i.x + i.width)), r = Math.abs(t.y - i.y), l = Math.abs(t.y - (i.y + i.height)), c = Math.min(o, a, r, l);
      c <= this.snapThreshold && e.push({ window: i, distance: c });
    }
    return e.length === 0 ? null : e.reduce((i, s) => s.window.display_order < i.window.display_order ? s : s.window.display_order > i.window.display_order ? i : s.distance < i.distance ? s : s.distance > i.distance ? i : s.window.is_fullscreen && !i.window.is_fullscreen ? s : i).window;
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
      const s = this.pendingSmartDetection;
      s && this.applyVisualElementCandidate(
        s.mousePos,
        s.targetWindow,
        s.sequence
      );
    }, 24)), this.accessibilityDetectionTimer !== null && window.clearTimeout(this.accessibilityDetectionTimer), this.accessibilityDetectionTimer = window.setTimeout(() => {
      this.accessibilityDetectionTimer = null;
      const s = this.pendingSmartDetection;
      this.pendingSmartDetection = null, s && this.detectUiElement(
        s.mousePos,
        s.targetWindow,
        s.sequence
      );
    }, 50);
  }
  async detectUiElement(t, e, i) {
    if (!e.handle) {
      this.finalizeVisualElementCandidate(t, e, i);
      return;
    }
    const s = this.captureMonitor.scale || 1, o = Math.round(this.captureMonitor.x + t.x * s), a = Math.round(this.captureMonitor.y + t.y * s);
    try {
      const r = await b("get_ui_element_at_point", {
        windowHandle: e.handle,
        x: o,
        y: a
      });
      if (i !== this.smartDetectionSequence || this.snappedWindow !== e)
        return;
      if (!r) {
        this.finalizeVisualElementCandidate(t, e, i);
        return;
      }
      const l = {
        x: Math.round((r.x - this.captureMonitor.x) / s),
        y: Math.round((r.y - this.captureMonitor.y) / s),
        width: Math.round(r.width / s),
        height: Math.round(r.height / s)
      }, c = l.x >= e.x - 2 && l.y >= e.y - 2 && l.x + l.width <= e.x + e.width + 2 && l.y + l.height <= e.y + e.height + 2, u = t.x >= l.x && t.x <= l.x + l.width && t.y >= l.y && t.y <= l.y + l.height;
      if (l.width < 8 || l.height < 8 || !c || !u) {
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
    const s = this.visualElementDetector?.detect(t, e) || null;
    this.updateElementCandidate(s, !1);
  }
  finalizeVisualElementCandidate(t, e, i) {
    if (i !== this.smartDetectionSequence || this.snappedWindow !== e)
      return;
    const s = this.visualElementDetector?.detect(t, e) || null;
    this.updateElementCandidate(s, !0);
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
    if ((this.currentTool === g.Select || this.currentTool === g.Marker) && i?.getData().type === g.Marker) {
      this.clearSelection(), i.updateData({ selected: !0 }), this.selectedAnnotation = i, this.startTextInput(i.getData().points[0], i), this.draw(), this.onStateChange?.();
      return;
    }
    const s = this.eventHandler.getOperationType(
      e,
      this.currentTool,
      this.selectionRect,
      this.annotations
    );
    if (s !== z.None)
      switch (this.eventHandler.setCurrentOperation(s), this.eventHandler.startDrawing(e), s) {
        case z.Drawing:
          if (!this.selectionRect && this.currentTool === g.Select) {
            this.dragStartPosition = { ...e };
            const o = this.getSelectableCandidate(e);
            o ? this.pendingSnapCandidate = o : (this.selectionRect = {
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
          this.selectAnnotationAtPoint(e), this.selectedAnnotation && this.selectedAnnotation.getData().type === g.Text && this.startTextInput(this.selectedAnnotation.getData().points[0], this.selectedAnnotation);
          break;
        case z.MovingAnnotation:
          this.startAnnotationDrag(e);
          break;
        case z.ResizingAnnotationNW:
        case z.ResizingAnnotationSE:
          this.startAnnotationResize(e, s);
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
      this.eventHandler.updateMousePosition(e), this.pendingSnapCandidate && this.dragStartPosition && !this.selectionRect && Mt(e, this.dragStartPosition) > this.dragThreshold && (this.selectionRect = {
        x: this.dragStartPosition.x,
        y: this.dragStartPosition.y,
        width: 0,
        height: 0
      }, this.pendingSnapCandidate = null, this.onStateChange?.()), this.currentAnnotation ? this.updateCurrentAnnotation(e) : this.draggedAnnotation ? this.updateAnnotationDrag(e) : this.resizingAnnotation ? this.updateAnnotationResize(e) : this.selectionRect && this.currentTool === g.Select && this.updateSelectionRect(e, i), this.draw(), this.onStateChange?.();
    else {
      if (this.currentTool === g.Select && !this.selectionRect) {
        const s = this.detectNearbyWindow(e);
        s !== this.snappedWindow && (this.cancelSmartDetection(), this.snappedWindow = s, this.snappedElement = null, this.elementCandidateStabilizer.reset(), this.showSnapPreview = !0, this.draw()), this.showSnapPreview || (this.showSnapPreview = !0, this.draw()), s && this.scheduleUiElementDetection(e, s);
      }
      this.updateHoverState(e), this.currentTool === g.ColorPicker && this.selectionRect && (this.coordinateSystem.isPointInRect(e, this.selectionRect) ? (this.colorPickerState.isVisible = !0, this.colorPickerState.mousePosition = e, this.draw(), this.throttledUpdateColorPreview(e)) : this.colorPickerState.isVisible && (this.colorPickerState.isVisible = !1, this.draw()));
    }
  }
  // 鼠标抬起处理
  handleMouseUp(t) {
    this.eventHandler.getDrawingState().isDrawing && (this.eventHandler.stopDrawing(), this.pendingSnapCandidate && !this.selectionRect && (this.selectionRect = { ...this.pendingSnapCandidate.rect }), this.pendingSnapCandidate = null, this.dragStartPosition = null, this.snappedWindow = null, this.snappedElement = null, this.elementCandidateStabilizer.reset(), this.showSnapPreview = !1, this.cancelSmartDetection(), this.finishAnnotation(), this.finishAnnotationDrag(), this.finishAnnotationResize(), this.selectionRect && (Math.abs(this.selectionRect.width) < 10 || Math.abs(this.selectionRect.height) < 10) ? this.selectionRect = null : this.selectionRect && (this.selectionRect.width < 0 && (this.selectionRect.x += this.selectionRect.width, this.selectionRect.width = Math.abs(this.selectionRect.width)), this.selectionRect.height < 0 && (this.selectionRect.y += this.selectionRect.height, this.selectionRect.height = Math.abs(this.selectionRect.height))), this.draw(), this.onStateChange?.());
  }
  // 双击处理
  handleDoubleClick(t) {
    const e = this.coordinateSystem.getCanvasPosition(t), i = this.eventHandler.getAnnotationAtPoint(e, this.annotations);
    (i?.getData().type === g.Text || i?.getData().type === g.Marker) && (this.clearSelection(), i.updateData({ selected: !0 }), this.selectedAnnotation = i, this.startTextInput(e, i));
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
    const i = e.currentOperation, s = t.x - e.lastMousePos.x, o = t.y - e.lastMousePos.y;
    switch (i) {
      case z.Drawing:
        this.selectionRect.width = t.x - e.startPoint.x, this.selectionRect.height = t.y - e.startPoint.y;
        break;
      case z.Moving:
        this.selectionRect.x += s, this.selectionRect.y += o;
        break;
      case z.ResizingNW:
        this.selectionRect.x += s, this.selectionRect.y += o, this.selectionRect.width -= s, this.selectionRect.height -= o;
        break;
      case z.ResizingNE:
        this.selectionRect.y += o, this.selectionRect.width += s, this.selectionRect.height -= o;
        break;
      case z.ResizingSW:
        this.selectionRect.x += s, this.selectionRect.width -= s, this.selectionRect.height += o;
        break;
      case z.ResizingSE:
        this.selectionRect.width += s, this.selectionRect.height += o;
        break;
      case z.ResizingN:
        this.selectionRect.y += o, this.selectionRect.height -= o;
        break;
      case z.ResizingS:
        this.selectionRect.height += o;
        break;
      case z.ResizingW:
        this.selectionRect.x += s, this.selectionRect.width -= s;
        break;
      case z.ResizingE:
        this.selectionRect.width += s;
        break;
    }
    this.selectionRect.width < 10 && (this.selectionRect.width = 10), this.selectionRect.height < 10 && (this.selectionRect.height = 10);
  }
  // 选择指定位置的标注
  selectAnnotationAtPoint(t) {
    const e = this.eventHandler.getAnnotationAtPoint(t, this.annotations);
    e && e !== this.selectedAnnotation && (this.selectedAnnotation && this.selectedAnnotation.updateData({ selected: !1 }), this.selectedAnnotation = e, this.selectedAnnotation.updateData({ selected: !0 }), this.selectedAnnotation.getData().type === g.Text && this.startTextInput(t, this.selectedAnnotation), this.draw(), this.onStateChange?.());
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
        const t = this.draggedAnnotation.getData(), e = this.pendingDragSnapshot.annotations.find((s) => s.id === t.id);
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
      const s = i.getBounds();
      s && (this.resizeStartBounds = { ...s }), this.selectedAnnotation !== i && (this.selectedAnnotation && this.selectedAnnotation.updateData({ selected: !1 }), this.selectedAnnotation = i, this.selectedAnnotation.updateData({ selected: !0 }));
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
        const t = this.resizingAnnotation.getData(), e = this.pendingResizeSnapshot.annotations.find((s) => s.id === t.id);
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
    const s = this.selectionRect;
    let o = !1, a = [...i.points];
    if (i.points.length >= 2)
      for (let r = 0; r < a.length; r++) {
        const l = a[r];
        l.x < s.x ? (a[r] = { ...l, x: s.x }, o = !0) : l.x > s.x + s.width && (a[r] = { ...l, x: s.x + s.width }, o = !0), l.y < s.y ? (a[r] = { ...l, y: s.y }, o = !0) : l.y > s.y + s.height && (a[r] = { ...l, y: s.y + s.height }, o = !0);
      }
    if (i.points.length > 2)
      for (let r = 0; r < a.length; r++) {
        const l = a[r];
        (l.x < s.x || l.x > s.x + s.width || l.y < s.y || l.y > s.y + s.height) && (a.splice(r, 1), r--, o = !0);
      }
    o && t.updateData({ points: a });
  }
  // 更新悬停状态
  updateHoverState(t) {
    if (this.currentTool !== g.Select) {
      this.updateToolCursor();
      return;
    }
    const e = this.eventHandler.getAnnotationAtPoint(t, this.annotations);
    e !== this.hoveredAnnotation && (this.hoveredAnnotation && this.hoveredAnnotation.updateData({ hovered: !1 }), this.hoveredAnnotation = e && e.getData().type !== g.Mosaic ? e : null, this.hoveredAnnotation && this.hoveredAnnotation.updateData({ hovered: !0 }), this.draw()), this.updateCursorForPosition(t);
  }
  // 更新鼠标样式
  updateCursorForPosition(t) {
    if (this.currentTool !== g.Select) {
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
    ), s = {
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
    this.updateCursor(s);
  }
  // 更新画布cursor样式
  updateCursor(t) {
    this.canvas.style.cursor !== t && (this.canvas.style.cursor = t);
  }
  // 根据当前工具更新光标样式
  updateToolCursor() {
    switch (this.currentTool) {
      case g.Pen:
        this.updateCursor(this.createPenCursor(this.currentStyle.color));
        break;
      case g.Mosaic:
        this.updateCursor(this.createCircleCursor(Math.max(this.mosaicSize * 3, 24), "#666"));
        break;
      case g.ColorPicker:
        this.updateCursor(this.createColorPickerCursor());
        break;
      case g.Rectangle:
      case g.Ellipse:
      case g.Line:
      case g.Arrow:
      case g.Text:
      case g.Marker:
        this.updateCursor("crosshair");
        break;
      default:
        this.updateCursor("default");
    }
  }
  // 创建圆形光标（用于画笔和马赛克）
  createCircleCursor(t, e = "#666") {
    const i = Math.max(t / 2, 2), s = i * 2 + 4, o = s / 2, a = `
      <svg width="${s}" height="${s}" xmlns="http://www.w3.org/2000/svg">
        <!-- 外圈：显示工具大小 -->
        <circle cx="${o}" cy="${o}" r="${i}"
                fill="none" stroke="${e}" stroke-width="1.5" opacity="0.8"/>
        <!-- 中心点：精确定位 -->
        <circle cx="${o}" cy="${o}" r="1" fill="${e}" opacity="0.9"/>
      </svg>
    `;
    return `url('data:image/svg+xml;utf8,${encodeURIComponent(a)}') ${o} ${o}, crosshair`;
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
      const t = this.editingAnnotation?.getData().type === g.Text ? this.annotations.filter((e) => e.getData().id !== this.editingAnnotation.getData().id) : this.annotations;
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
    const { x: e, y: i, width: s, height: o } = this.selectionRect, a = 8;
    if (this.translationOverlay.isLoading) {
      const f = e + s / 2, m = i + o / 2;
      t.fillStyle = "rgba(0, 0, 0, 0.7)", t.fillRect(e, i, s, o), t.font = '16px "Microsoft YaHei", sans-serif', t.fillStyle = "#ffffff", t.textAlign = "center", t.textBaseline = "middle";
      let R = "正在识别翻译...";
      this.translationOverlay.engine === "local-ai" && (this.translationOverlay.loadingStage === "starting-service" ? R = "正在启动 AI 模型服务..." : R = "正在由 AI 识图翻译..."), t.fillText(R, f, m), t.restore();
      return;
    }
    if (this.translationOverlay.errorMessage) {
      const f = e + s / 2, m = i + o / 2;
      t.fillStyle = "rgba(0, 0, 0, 0.8)", t.fillRect(e, i, s, o), t.font = '16px "Microsoft YaHei", sans-serif', t.fillStyle = "#ff6b6b", t.textAlign = "center", t.textBaseline = "middle", t.fillText(this.translationOverlay.errorMessage, f, m), t.restore();
      return;
    }
    if (this.translationOverlay.blocks.length === 0) {
      t.restore();
      return;
    }
    const r = { x: e, y: i, width: s, height: o }, l = this.sampleRegionColor(r), c = l.brightness < 128;
    let u, d;
    if (c) {
      const f = Math.max(0, Math.round(l.r * 0.1)), m = Math.max(0, Math.round(l.g * 0.1)), R = Math.max(0, Math.round(l.b * 0.1));
      u = `rgba(${f}, ${m}, ${R}, 0.95)`, d = "rgba(255, 255, 255, 0.9)";
    } else {
      const f = Math.min(255, Math.round(l.r + (255 - l.r) * 0.95)), m = Math.min(255, Math.round(l.g + (255 - l.g) * 0.95)), R = Math.min(255, Math.round(l.b + (255 - l.b) * 0.95));
      u = `rgba(${f}, ${m}, ${R}, 0.95)`, d = "rgba(0, 0, 0, 0.85)";
    }
    t.fillStyle = u, t.fillRect(e, i, s, o), t.fillStyle = d, t.textAlign = "left", t.textBaseline = "top";
    const w = this.translationOverlay.paragraphBlocks?.length ? this.translationOverlay.paragraphBlocks : this.translationOverlay.blocks.map((f) => ({
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
    })), x = w.filter((f) => f.isStructuredBlock), C = w.filter((f) => !f.isStructuredBlock);
    C.length > 0 && this.drawFlowedTranslationBlocks(t, C, e, i, a, s, o);
    for (const f of x)
      this.drawStructuredTranslationBlock(t, f, e, i, a, s, o);
    t.restore();
  }
  drawFlowedTranslationBlocks(t, e, i, s, o, a, r) {
    const l = [...e].filter((M) => (M.translatedText || M.text).trim()).sort((M, j) => {
      const U = M.bbox.y - j.bbox.y;
      return Math.abs(U) > 4 ? U : M.bbox.x - j.bbox.x;
    });
    if (l.length === 0)
      return;
    const c = Math.max(24, r - o * 2), u = o, d = (M, j, U) => l.map((V) => {
      const F = (V.translatedText || V.text).trim(), Y = Math.max(12, Math.min(V.fontSize || 16, 48)), K = Math.max(8, Math.round(Y * M)), X = V.isCodeBlock ? '"Consolas", "Monaco", monospace' : '"Microsoft YaHei", "PingFang SC", "Hiragino Sans GB", sans-serif', tt = Math.max(
        o,
        Math.min(V.bbox.x + o, a * 0.38)
      ), at = j ? o : tt, q = Math.max(48, a - at - u), kt = V.lineHeight || K * 1.35, rt = Math.max(
        K * (U ? 1.04 : 1.14),
        Math.min(kt * M, K * (U ? 1.18 : 1.42))
      );
      return t.font = `${K}px ${X}`, {
        text: F,
        fontSize: K,
        fontFamily: X,
        lineHeight: rt,
        paragraphGap: U ? Math.max(1, rt * 0.16) : Math.max(3, rt * 0.35),
        x: i + at,
        lines: this.wrapTextToLines(t, F, q)
      };
    }), w = (M) => M.reduce((j, U, V) => {
      const F = V === M.length - 1 ? 0 : U.paragraphGap;
      return j + U.lines.length * U.lineHeight + F;
    }, 0);
    let x = d(1, !1, !1), C = w(x);
    if (C > c) {
      const M = Math.max(0.56, c / C);
      x = d(M, !1, !1), C = w(x);
    }
    if (C > c && (x = d(1, !0, !1), C = w(x)), C > c) {
      const M = Math.max(0.38, c / C * 0.96);
      x = d(M, !0, !0), C = w(x);
    }
    if (C > c) {
      const M = Math.max(0.3, c / C * 0.94);
      x = d(M, !0, !0), C = w(x);
    }
    const f = Math.min(...l.map((M) => M.bbox.y)), m = s + Math.max(o, Math.min(f, r - o)), R = s + r - o;
    let A = m + C > R ? s + o : m;
    for (const M of x) {
      t.font = `${M.fontSize}px ${M.fontFamily}`;
      for (const j of M.lines)
        t.fillText(j, M.x, A), A += M.lineHeight;
      A += M.paragraphGap;
    }
  }
  drawStructuredTranslationBlock(t, e, i, s, o, a, r) {
    const l = [...e.blocks].sort((d, w) => d.x - w.x), c = Math.max(12, Math.min(e.fontSize || 14, 32)), u = e.lineHeight || c * 1.35;
    t.font = `${c}px "Consolas", "Monaco", monospace`;
    for (const d of l) {
      const w = d.translatedText || d.text;
      if (!w.trim()) continue;
      const x = i + d.x + Math.min(4, o), C = s + d.y, f = l.find((M) => M.x > d.x), m = f ? Math.max(d.width, f.x - d.x - 8) : Math.max(d.width, a - d.x - o), R = this.wrapTextToLines(t, w.trim(), m);
      let A = C;
      for (const M of R) {
        if (A + c > s + r) break;
        t.fillText(M, x, A), A += u;
      }
    }
  }
  /**
   * 将文字按宽度换行，返回行数组
   */
  wrapTextToLines(t, e, i) {
    const s = e.replace(/\s+/g, " ").trim();
    if (!s)
      return [];
    const o = [], a = /\s/.test(s) ? s.split(/(\s+)/).filter((c) => c.length > 0) : Array.from(s);
    let r = "";
    const l = (c) => {
      let u = "";
      for (const d of Array.from(c)) {
        const w = u + d;
        t.measureText(w).width > i && u !== "" ? (o.push(u), u = d) : u = w;
      }
      r = u;
    };
    for (const c of a) {
      const u = /^\s+$/.test(c), d = u ? " " : c, w = r + d;
      if (t.measureText(w).width <= i) {
        r = w;
        continue;
      }
      r.trim() && (o.push(r.trimEnd()), r = ""), !u && (t.measureText(d).width > i ? l(d) : r = d);
    }
    return r.trim() && o.push(r.trimEnd()), o;
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
    const s = window.devicePixelRatio || 1, o = Math.round(t.width * s), a = Math.round(t.height * s), r = this.canvasPool.acquire(o, a), l = r.getContext("2d");
    if (!l)
      return this.canvasPool.release(r), i;
    const c = this.backgroundImage.width, u = this.backgroundImage.height, d = this.canvas.width / s, w = this.canvas.height / s, x = c / d, C = u / w, f = t.x * x, m = t.y * C, R = t.width * x, A = t.height * C;
    try {
      l.drawImage(
        this.backgroundImage,
        f,
        m,
        R,
        A,
        0,
        0,
        o,
        a
      );
    } catch (Z) {
      return D.error("[截图] 采样区域绘制失败", Z), this.canvasPool.release(r), i;
    }
    let M;
    try {
      M = l.getImageData(0, 0, o, a);
    } catch (Z) {
      return D.error("[截图] 获取像素数据失败", Z), this.canvasPool.release(r), i;
    }
    const j = M.data, U = Math.ceil(Math.sqrt(e)), V = o / (U + 1), F = a / (U + 1);
    let Y = 0, K = 0, X = 0, tt = 0;
    for (let Z = 1; Z <= U; Z++)
      for (let et = 1; et <= U && !(tt >= e); et++) {
        const dt = Math.floor(et * V), wt = Math.floor(Z * F);
        if (dt >= 0 && dt < o && wt >= 0 && wt < a) {
          const ot = (wt * o + dt) * 4;
          ot >= 0 && ot + 2 < j.length && (Y += j[ot], K += j[ot + 1], X += j[ot + 2], tt++);
        }
      }
    if (this.canvasPool.release(r), tt === 0)
      return i;
    const at = Math.round(Y / tt), q = Math.round(K / tt), kt = Math.round(X / tt), rt = this.getBrightness(at, q, kt);
    return {
      r: at,
      g: q,
      b: kt,
      brightness: rt
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
    const s = Math.max(0, Math.min(255, t)), o = Math.max(0, Math.min(255, e)), a = Math.max(0, Math.min(255, i));
    return Math.round(0.299 * s + 0.587 * o + 0.114 * a);
  }
  /**
   * 根据采样颜色计算覆盖层样式
   * 深色背景（亮度 < 128）：使用深色半透明背景 + 浅色文字
   * 浅色背景（亮度 >= 128）：使用浅色半透明背景 + 深色文字
   * @param sampledColor 采样得到的背景颜色
   * @returns 覆盖层样式
   */
  calculateOverlayStyle(t) {
    const { brightness: e } = t, i = e < 128, s = e / 255, a = 0.85 + Math.abs(s - 0.5) * 2 * 0.1;
    let r, l;
    if (i) {
      const c = Math.max(0, Math.round(t.r * 0.2)), u = Math.max(0, Math.round(t.g * 0.2)), d = Math.max(0, Math.round(t.b * 0.2));
      r = `rgba(${c}, ${u}, ${d}, ${a})`, l = "rgba(255, 255, 255, 0.95)";
    } else {
      const c = Math.min(255, Math.round(t.r + (255 - t.r) * 0.8)), u = Math.min(255, Math.round(t.g + (255 - t.g) * 0.8)), d = Math.min(255, Math.round(t.b + (255 - t.b) * 0.8));
      r = `rgba(${c}, ${u}, ${d}, ${a})`, l = "rgba(0, 0, 0, 0.9)";
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
    const s = window.devicePixelRatio || 1, o = Math.round(t.width * s), a = Math.round(t.height * s), r = this.canvasPool.acquire(o, a), l = r.getContext("2d");
    if (!l)
      return this.canvasPool.release(r), !1;
    const c = this.backgroundImage.width, u = this.backgroundImage.height, d = this.canvas.width / s, w = this.canvas.height / s, x = c / d, C = u / w, f = t.x * x, m = t.y * C, R = t.width * x, A = t.height * C;
    try {
      l.drawImage(
        this.backgroundImage,
        f,
        m,
        R,
        A,
        0,
        0,
        o,
        a
      );
    } catch (Z) {
      return D.error("[截图] isUniformColor: 采样区域绘制失败", Z), this.canvasPool.release(r), !1;
    }
    let M;
    try {
      M = l.getImageData(0, 0, o, a);
    } catch (Z) {
      return D.error("[截图] isUniformColor: 获取像素数据失败", Z), this.canvasPool.release(r), !1;
    }
    const j = M.data, U = Math.ceil(Math.sqrt(i)), V = o / (U + 1), F = a / (U + 1), Y = [];
    for (let Z = 1; Z <= U; Z++)
      for (let et = 1; et <= U && !(Y.length >= i); et++) {
        const dt = Math.floor(et * V), wt = Math.floor(Z * F);
        if (dt >= 0 && dt < o && wt >= 0 && wt < a) {
          const ot = (wt * o + dt) * 4;
          ot >= 0 && ot + 2 < j.length && Y.push({
            r: j[ot],
            g: j[ot + 1],
            b: j[ot + 2]
          });
        }
      }
    if (this.canvasPool.release(r), Y.length < 2)
      return !1;
    const K = Y.reduce((Z, et) => Z + et.r, 0) / Y.length, X = Y.reduce((Z, et) => Z + et.g, 0) / Y.length, tt = Y.reduce((Z, et) => Z + et.b, 0) / Y.length, at = Y.reduce((Z, et) => Z + Math.pow(et.r - K, 2), 0) / Y.length, q = Y.reduce((Z, et) => Z + Math.pow(et.g - X, 2), 0) / Y.length, kt = Y.reduce((Z, et) => Z + Math.pow(et.b - tt, 2), 0) / Y.length;
    return (at + q + kt) / 3 < e;
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
    const e = t * 0.8, i = t * 0.85, o = Math.max(12, Math.min(e, i));
    return Math.round(o);
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
  fitTextToWidth(t, e, i, s) {
    if (!t || t.length === 0)
      return i;
    if (e <= 0 || i <= 12)
      return 12;
    const r = e - 4 * 2;
    if (r <= 0)
      return 12;
    let l = i;
    const c = s.font;
    for (; l > 12 && (s.font = `${l}px sans-serif`, !(s.measureText(t).width <= r)); )
      l -= 1;
    return s.font = c, Math.max(l, 12);
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
    this.currentTool = t, this.clearSelection(), this.showGuides = t === g.Select, this.colorPickerState.isActive = t === g.ColorPicker, this.colorPickerState.isActive || (this.colorPickerState.isVisible = !1, this.colorPickerState.colorInfo = void 0), t !== g.Translate && this.translationOverlay.isVisible && this.clearTranslationOverlay(), t !== g.Select && this.hoveredAnnotation && (this.hoveredAnnotation.updateData({ hovered: !1 }), this.hoveredAnnotation = null), this.snappedWindow = null, this.snappedElement = null, this.elementCandidateStabilizer.reset(), this.showSnapPreview = !1, this.pendingSnapCandidate = null, this.cancelSmartDetection(), this.dragStartPosition = null, t !== g.Select && this.updateToolCursor(), this.draw(), this.onStateChange?.();
  }
  // 执行翻译（供外部调用）
  executeTranslation() {
    this.currentTool === g.Translate && this.selectionRect && (this.translationOverlay.isLoading = !0, this.translationOverlay.isVisible = !0, this.draw(), this.onStateChange?.(), this.performOcrTranslation());
  }
  // 开始创建标注
  startAnnotation(t) {
    if (en.isDrawingTool(this.currentTool)) {
      if (this.currentTool === g.Text) {
        this.startTextInput(t);
        return;
      }
      this.currentAnnotation = en.createAnnotation(
        this.currentTool,
        t,
        this.currentStyle,
        {
          fontSize: this.textSize,
          markerNumber: this.currentTool === g.Marker ? this.getNextMarkerNumber() : void 0,
          mosaicSize: this.mosaicSize
        }
      );
    }
  }
  getNextMarkerNumber() {
    return this.annotations.reduce((t, e) => e.getData().type !== g.Marker ? t : Math.max(t, e.getData().markerNumber || 0), 0) + 1;
  }
  // 更新当前标注
  updateCurrentAnnotation(t) {
    if (!this.currentAnnotation)
      return;
    const e = this.currentAnnotation.getData();
    switch (e.type) {
      case g.Rectangle:
      case g.Ellipse:
      case g.Line:
      case g.Arrow:
        t = ra(
          e.type,
          e.points[0],
          t,
          this.isShiftPressed
        ), e.points.length === 1 ? this.currentAnnotation.addPoint(t) : this.currentAnnotation.updateLastPoint(t);
        break;
      case g.Pen:
        this.currentAnnotation.addPoint(t);
        break;
      case g.Mosaic:
        this.currentAnnotation.addPoint(t);
        break;
    }
  }
  // 完成标注创建
  finishAnnotation() {
    if (this.currentAnnotation) {
      const t = this.currentAnnotation.getData();
      t.type === g.Pen && this.isShiftPressed && t.points.length >= 3 && this.smartCorrectPenAnnotation(), this.currentAnnotation.isValid() && (this.pushAnnotationHistory(), this.annotations.push(this.currentAnnotation), this.onStateChange?.());
    }
    this.currentAnnotation = null;
  }
  // 智能识别并矫正画笔标注
  smartCorrectPenAnnotation() {
    if (!this.currentAnnotation) return;
    const e = this.currentAnnotation.getData().points;
    if (e.length < 3) return;
    let i = e[0].x, s = e[0].x, o = e[0].y, a = e[0].y;
    e.forEach((x) => {
      i = Math.min(i, x.x), s = Math.max(s, x.x), o = Math.min(o, x.y), a = Math.max(a, x.y);
    });
    const r = s - i, l = a - o;
    let c = 0;
    for (let x = 1; x < e.length; x++)
      c += Mt(e[x - 1], e[x]);
    const d = Mt(e[0], e[e.length - 1]) / c, w = Math.max(r, l) / Math.max(Math.min(r, l), 1);
    if (d > 0.85 || w > 5) {
      const x = e[0], C = e[e.length - 1];
      this.currentAnnotation.updateData({ points: [x, C] });
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
    const i = en.createAnnotation(
      g.Text,
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
      const { x: e, y: i, width: s, height: o } = this.selectionRect, r = (await b("get_window_info"))?.scale || 1, l = await this.cropFromBackground(e, i, s, o);
      if (!l?.image)
        throw new Error("无法从背景图像裁剪选区");
      const c = await this.renderWithAnnotations(l, r, t);
      t === "copy" ? await b("copy_to_clipboard", { image: c }) : await b("save_screenshot_to_file", { image: c });
    } catch (e) {
      const i = t === "save" ? "保存" : "复制";
      throw D.error(`[截图] ${i}截图失败`, e), new Error(`${i}截图失败: ${e?.message || e?.toString() || "未知错误"}`);
    }
  }
  // 从背景图像裁剪指定区域
  async cropFromBackground(t, e, i, s, o = {}) {
    return new Promise(async (a, r) => {
      const l = setTimeout(() => {
        r(new Error("裁剪背景图像超时"));
      }, 1e4);
      try {
        if (!this.backgroundImage) {
          let gt = 0;
          for (; !this.backgroundImage && gt < 3e3; )
            await new Promise((O) => setTimeout(O, 100)), gt += 100;
          if (!this.backgroundImage)
            throw new Error("背景图像加载超时");
        }
        const c = window.devicePixelRatio || 1, u = Math.max(0, o.padding || 0), d = this.canvas.width / c, w = this.canvas.height / c, x = t - u, C = e - u, f = i + u * 2, m = s + u * 2, R = Math.max(1, Math.round(f * c)), A = Math.max(1, Math.round(m * c)), M = Math.max(0, x), j = Math.max(0, C), U = Math.min(d, x + f), V = Math.min(w, C + m), F = Math.max(0, U - M), Y = Math.max(0, V - j), K = Math.round(M * c), X = Math.round(j * c), tt = Math.min(
          this.canvas.width - K,
          Math.round(F * c)
        ), at = Math.min(
          this.canvas.height - X,
          Math.round(Y * c)
        ), q = Math.round((M - x) * c), kt = Math.round((j - C) * c), rt = document.createElement("canvas");
        rt.width = R, rt.height = A;
        const Z = rt.getContext("2d", {
          alpha: !0,
          desynchronized: !1,
          willReadFrequently: !1
        });
        if (!Z)
          throw new Error("无法获取2D绘图上下文");
        Z.imageSmoothingEnabled = !1, o.fillColor && (Z.fillStyle = o.fillColor, Z.fillRect(0, 0, R, A)), tt > 0 && at > 0 && Z.drawImage(
          this.backgroundImage,
          K,
          X,
          tt,
          at,
          q,
          kt,
          tt,
          at
        );
        const dt = rt.toDataURL("image/png", 1).replace(/^data:image\/png;base64,/, "");
        clearTimeout(l), a({
          image: dt,
          adjusted_width: R,
          adjusted_height: A,
          logical_x: x,
          logical_y: C,
          logical_width: f,
          logical_height: m
        });
      } catch (c) {
        clearTimeout(l), r(new Error(`裁剪背景图像失败: ${c.message || c}`));
      }
    });
  }
  // 渲染带标注的图像
  async renderWithAnnotations(t, e, i) {
    return new Promise((s, o) => {
      const a = setTimeout(() => {
        o(new Error("渲染标注超时"));
      }, 15e3), r = document.createElement("canvas");
      r.width = t.adjusted_width, r.height = t.adjusted_height;
      const l = r.getContext("2d", {
        alpha: !0,
        desynchronized: !1,
        willReadFrequently: !1
      });
      if (!l) {
        clearTimeout(a), o(new Error("无法获取2D绘图上下文"));
        return;
      }
      l.imageSmoothingEnabled = !0, l.imageSmoothingQuality = "high";
      const c = new Image();
      c.onload = () => {
        try {
          if (l.drawImage(c, 0, 0), this.annotations.length > 0 && this.selectionRect) {
            const w = t.logical_width > 0 ? t.adjusted_width / t.logical_width : e, x = {
              x: t.logical_x,
              y: t.logical_y,
              width: t.logical_width,
              height: t.logical_height
            }, C = this.drawingEngine.createScreenshotContext(
              l,
              w,
              x
            );
            this.annotations.forEach((f, m) => {
              try {
                f.drawToScreenshot(C);
              } catch (R) {
                D.error(`[截图] 绘制标注 ${m} 失败`, R);
              }
            });
          }
          const u = Bn(
            this.selectionCornerRadius,
            t.logical_width,
            t.logical_height
          );
          if (u > 0) {
            const w = t.logical_width > 0 ? t.adjusted_width / t.logical_width : e;
            l.save(), l.globalCompositeOperation = "destination-in", l.fillStyle = "#000", l.beginPath(), l.roundRect(
              0,
              0,
              r.width,
              r.height,
              u * w
            ), l.fill(), l.restore();
          }
          let d;
          d = r.toDataURL("image/png"), clearTimeout(a), s(d);
        } catch (u) {
          D.error("[截图] 绘制过程出错", u);
          try {
            const d = r.toDataURL("image/png");
            clearTimeout(a), s(d);
          } catch {
            clearTimeout(a), o(new Error(`渲染失败: ${u.message || u}`));
          }
        }
      }, c.onerror = (u) => {
        D.error("[截图] 图像加载失败", u), clearTimeout(a), o(new Error("图像加载失败"));
      }, c.src = `data:image/png;base64,${t.image}`;
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
    this.currentStyle = { ...this.currentStyle, ...t }, this.currentTool === g.Pen && (t.color || t.lineWidth) && this.updateToolCursor(), this.onStateChange?.();
  }
  // 更新文字大小
  updateTextSize(t) {
    this.textSize = t, this.onStateChange?.();
  }
  // 更新马赛克大小
  updateMosaicSize(t) {
    this.mosaicSize = t, this.currentTool === g.Mosaic && this.updateToolCursor(), this.onStateChange?.();
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
    if (t.getData().type === g.Text || t.getData().type === g.Marker) {
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
        const { x: e, y: i, width: s, height: o } = this.selectionRect, a = await b("get_window_info"), r = a?.scale || 1, l = Math.round(a.x + e * r), c = Math.round(a.y + i * r), u = Math.round(s * r), d = Math.round(o * r), w = Math.round(a.x + window.innerWidth * r), x = Math.round(a.y + window.innerHeight * r), C = t === "ocr" ? Math.min(Math.max(u, 760), Math.max(360, w - a.x)) : u, f = t === "ocr" ? Math.min(Math.max(d, 520), Math.max(260, x - a.y)) : d, m = t === "ocr" ? Math.round(l - Math.max(0, C - u) / 2) : l, R = t === "ocr" ? Math.max(a.x, Math.min(m, w - C)) : l, A = t === "ocr" ? Math.max(a.y, Math.min(c, x - f)) : c, M = {}, j = await this.cropFromBackground(e, i, s, o, M);
        if (!j?.image)
          throw new Error("Failed to crop from background image");
        const U = await this.renderWithAnnotations(j, r, "save");
        await b("create_pin_window", {
          mode: t,
          imageData: U,
          x: R,
          y: A,
          width: C,
          height: f
        }), this.onStateChange?.(), setTimeout(() => {
          new Ke("screenshot").close();
        }, 100);
      } catch (e) {
        throw D.error(`[截图] 创建${t === "ocr" ? "文字识别" : "贴图"}窗口失败`, e), e;
      }
  }
  // 处理颜色取样
  async handleColorPicking(t) {
    if (this.selectionRect)
      try {
        const e = await b("get_window_info"), i = e?.scale || 1, s = Math.round(e.x + (this.selectionRect.x + t.x - this.selectionRect.x) * i), o = Math.round(e.y + (this.selectionRect.y + t.y - this.selectionRect.y) * i), a = await b("get_pixel_color", {
          x: s,
          y: o
        }), r = this.rgbToHex(a.r, a.g, a.b), l = {
          rgb: a,
          hex: r,
          position: t
        };
        this.onColorPicked?.(l), this.colorPickerState.isCopied = !0, this.draw(), setTimeout(() => {
          this.colorPickerState.isCopied = !1, this.draw();
        }, 1e3);
      } catch (e) {
        D.error("[截图] 获取像素颜色失败", e);
      }
  }
  // 实时更新颜色预览（鼠标移动时调用）
  async updateColorPreview(t) {
    if (this.selectionRect)
      try {
        const e = await b("get_window_info"), i = e?.scale || 1, s = this.colorPickerState.zoomFactor, o = Math.floor(s / 2), a = Math.round(e.x + t.x * i), r = Math.round(e.y + t.y * i), l = await b("get_screen_preview", {
          x: a - o,
          y: r - o,
          width: s,
          height: s
        }), c = new Image();
        c.src = `data:image/png;base64,${l.image}`, await c.decode();
        const u = await createImageBitmap(c);
        this.colorPickerState.previewImage?.close?.(), this.colorPickerState.previewImage = u;
        const w = new OffscreenCanvas(s, s).getContext("2d");
        if (w) {
          w.drawImage(u, 0, 0, s, s);
          const x = w.getImageData(o, o, 1, 1).data, C = { r: x[0], g: x[1], b: x[2] }, f = this.rgbToHex(C.r, C.g, C.b);
          this.colorPickerState.colorInfo = { rgb: C, hex: f, position: t };
        }
        this.draw();
      } catch (e) {
        D.error("[截图] 更新颜色预览失败", e);
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
    const s = (o) => {
      const a = Math.max(0, Math.min(255, Math.round(o))).toString(16);
      return a.length === 1 ? "0" + a : a;
    };
    return `#${s(t)}${s(e)}${s(i)}`.toUpperCase();
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
        let e = 0, i = 0, s = 0, o = 0, a = 0;
        const { x: r, y: l, width: c, height: u } = this.selectionRect, d = window.devicePixelRatio || 1, w = c * d, x = u * d, C = this.canvasPool.acquire(w, x), f = C.getContext("2d");
        if (!f)
          throw this.canvasPool.release(C), new Error("无法创建临时canvas");
        const m = r * d, R = l * d, A = performance.now();
        f.drawImage(
          this.backgroundImage,
          m,
          R,
          w,
          x,
          0,
          0,
          w,
          x
        ), e = Math.round(performance.now() - A);
        const M = performance.now(), { recognizeFromCanvas: j } = await de.loadOCR();
        i = Math.round(performance.now() - M);
        const U = performance.now(), V = await j(C);
        s = Math.round(performance.now() - U), this.canvasPool.release(C);
        const F = {
          cropDurationMs: e,
          ocrModuleLoadDurationMs: i,
          ocrRecognitionDurationMs: s,
          confidence: V.confidence,
          rawLineCount: V.blocks.length,
          textLength: V.full_text.trim().length
        };
        D.info("[OCR] 识别耗时统计", F), pt.log("[OCR] recognition timing", F);
        const Y = V.blocks, K = performance.now(), X = nr(Y);
        o = Math.round(performance.now() - K);
        const tt = X.map((_) => _.text).join(`

`), at = {
          rawLineCount: Y.length,
          paragraphCount: X.length,
          durationMs: o,
          paragraphs: X.map((_, nt) => ({
            index: nt,
            text: _.text,
            blockCount: _.blocks.length,
            isCodeBlock: !!_.isCodeBlock,
            isStructuredBlock: !!_.isStructuredBlock,
            bbox: _.bbox,
            sourceBlocks: _.blocks.map((_t) => ({
              text: _t.text,
              x: _t.x,
              y: _t.y,
              width: _t.width,
              height: _t.height
            }))
          }))
        };
        if (D.info("[OCR] 版面重组完成", at), pt.log("[OCR] layout reflow complete", at), !tt || !tt.trim()) {
          this.translationOverlay.isLoading = !1, this.translationOverlay.isVisible = !1, this.draw(), this.onStateChange?.();
          return;
        }
        const q = this.translationOverlay.engine;
        this.translationOverlay.sourceLanguage = "auto", this.translationOverlay.targetLanguage = this.getAutoTargetLanguage(ue(tt));
        const kt = (_) => {
          const nt = _.trim();
          return !!(nt.match(/^(sudo|npm|yarn|pip|git|cd|ls|cat|chmod|chown|mkdir|rm|cp|mv|curl|wget|brew|apt|yum|dnf|sh|SH|Bash|PowerShell|Fish|Yarn|pnpm|deno|bun|Cargo)\s+\S+/) && !nt.match(/^(If|When|Click|Please|You|After|Before|Then|Open|Go|Download)/i));
        };
        let rt = "";
        const Z = ue(tt), et = {
          detectedLanguage: Z,
          textLength: tt.trim().length,
          textPreview: tt.trim().slice(0, 500)
        };
        D.info("[OCR] 翻译语言检测完成", et), pt.log("[OCR] translation language detected", et), Te(Z) && (this.translationOverlay.sourceLanguage = Z, this.translationOverlay.targetLanguage = this.getAutoTargetLanguage(Z));
        const dt = q === "offline" ? de.loadOfflineTranslator() : null, wt = (_) => _.includes("插件") && _.includes("未启用") ? _.includes("translation") ? "OCR识别已完成，但翻译插件未启用，请在插件设置中安装并启用 Translation 插件" : _ : q === "offline" ? _.includes("未激活") || _.includes("未下载") || _.includes("运行时未安装") ? _ : _.includes("超时") ? "模型加载超时，请重试" : _.includes("离线翻译暂仅支持") ? _ : "离线翻译失败: " + _.substring(0, 50) : _.includes("timeout") || _.includes("超时") ? "翻译超时，请检查网络连接" : _.includes("network") || _.includes("网络") || _.includes("请求") || _.includes("令牌") ? "翻译失败，请检查网络连接" : _.trim() ? _.slice(0, 80) : "翻译失败，请检查网络连接", ot = async () => {
          if (!dt)
            throw new Error("离线翻译模块未加载");
          const {
            translateOffline: _,
            canUseOfflineTranslation: nt,
            warmupOfflineTranslator: _t,
            getModelCacheInfo: ct
          } = await dt, Lt = nt();
          if (this.offlineModelActivated && !Lt)
            if ((await ct()).isCached)
              await _t();
            else
              throw new Error("离线翻译模型未下载，请在设置-翻译配置中下载模型");
          else if (!this.offlineModelActivated)
            throw new Error("离线翻译模型未激活，请在设置-翻译配置中激活模型");
          return _;
        }, gt = async (_, nt, _t) => {
          if (!_.trim())
            return _;
          if (q === "offline") {
            if (nt !== "en" || _t !== "zh")
              throw new Error("离线翻译暂仅支持英译中，请切换 Google 或 Bing 进行中译英");
            return (await ot())(_);
          }
          return await b("translate_text", {
            text: _,
            from: nt,
            to: _t,
            engine: q
          });
        }, O = (_) => {
          const nt = _.trim();
          return /^(?:option|description|name|value|type|default|example|required)$/i.test(nt) ? !1 : /^[A-Za-z_][A-Za-z0-9_-]{1,32}$/.test(nt);
        }, ft = async (_, nt, _t) => {
          const ct = _.trim();
          if (!ct || kt(ct))
            return _;
          const Lt = _.match(/^(\s*)(\S+)(\s{2,})(.+?)(\s*)$/);
          if (Lt) {
            const [, ht, ut, J, St, Et] = Lt, At = ue(ut), Ie = O(ut) || !Te(At) ? ut : await gt(ut, At, this.getAutoTargetLanguage(At)), ne = ue(St), Xt = Te(ne) && !kt(St) ? await gt(St, ne, this.getAutoTargetLanguage(ne)) : St;
            return `${ht}${Ie}${J}${Xt}${Et}`;
          }
          if (O(ct))
            return _;
          const Rt = ue(ct);
          if (!Te(Rt))
            return _;
          const Zt = this.getAutoTargetLanguage(Rt), k = await gt(ct, Rt, Zt), W = {
            paragraphIndex: nt,
            blockIndex: _t,
            sourceLanguage: Rt,
            targetLanguage: Zt,
            sourceText: ct,
            translatedText: k.slice(0, 200)
          };
          return D.info("[OCR] 结构化块翻译完成", W), pt.log("[OCR] structured block translation complete", W), k;
        }, B = async (_, nt) => {
          const _t = performance.now(), ct = (k) => ({
            index: nt,
            durationMs: Math.round(performance.now() - _t),
            ...k
          }), Lt = ue(_.text), Rt = this.getAutoTargetLanguage(Lt), Zt = {
            index: nt,
            text: _.text,
            sourceLanguage: Lt,
            targetLanguage: Rt,
            engine: q,
            structured: !!_.isStructuredBlock
          };
          if (D.info("[OCR] 段落翻译方向", Zt), pt.log("[OCR] paragraph translation direction", Zt), !Te(Lt)) {
            _.translatedText = _.text;
            const k = ct({
              skipped: !0,
              cancelled: !1,
              errorMessage: "部分文本暂不支持翻译，已保留原文"
            }), W = {
              index: nt,
              detectedLanguage: Lt,
              durationMs: k.durationMs,
              text: _.text
            };
            return D.warn("[OCR] 跳过不支持的段落语言", W), pt.log("[OCR] skip unsupported paragraph language", W), k;
          }
          try {
            if (_.isStructuredBlock && _.blocks.length > 0) {
              const ht = async (J, St) => {
                const Et = await ft(J.text, nt, St);
                return J.translatedText = Et, Et;
              }, ut = [];
              if (q === "offline")
                for (let J = 0; J < _.blocks.length; J += 1)
                  ut.push(await ht(_.blocks[J], J));
              else
                ut.push(
                  ...await Promise.all(
                    _.blocks.map((J, St) => ht(J, St))
                  )
                );
              _.translatedText = ut.join(" ");
            } else if (kt(_.text) || _.isCodeBlock) {
              _.translatedText = _.text;
              const ht = _.isCodeBlock ? "code_block" : "command_like_text", ut = ct({ skipped: !0, cancelled: !1 }), J = {
                index: nt,
                reason: ht,
                durationMs: ut.durationMs,
                text: _.text
              };
              return D.info("[OCR] 跳过代码段翻译", J), pt.log("[OCR] skip code paragraph translation", J), ut;
            } else
              _.translatedText = await gt(
                _.text,
                Lt,
                Rt
              );
            const k = ct({ skipped: !1, cancelled: !1 }), W = {
              index: nt,
              durationMs: k.durationMs,
              sourceLanguage: Lt,
              targetLanguage: Rt,
              engine: q,
              structured: !!_.isStructuredBlock,
              sourceLength: _.text.length,
              translatedLength: (_.translatedText || "").length,
              translatedPreview: (_.translatedText || "").slice(0, 300)
            };
            return D.info("[OCR] 段落翻译完成", W), pt.log("[OCR] paragraph translation complete", W), k;
          } catch (k) {
            const W = k instanceof Error ? k.message : String(k);
            if (W === "翻译已取消")
              return ct({ skipped: !1, cancelled: !0 });
            _.translatedText = _.text;
            const ht = wt(W), ut = ct({
              skipped: !1,
              cancelled: !1,
              errorMessage: ht
            }), J = {
              index: nt,
              durationMs: ut.durationMs,
              sourceLanguage: Lt,
              targetLanguage: Rt,
              engine: q,
              error: W,
              structured: !!_.isStructuredBlock,
              text: _.text
            };
            return D.error("[OCR] 段落翻译失败", J), pt.log("[OCR] paragraph translation failed", J), ut;
          }
        }, yt = performance.now();
        let vt = [];
        if (q === "offline")
          for (let _ = 0; _ < X.length; _ += 1) {
            const nt = await B(X[_], _);
            if (vt.push(nt), nt.cancelled)
              return;
            if (nt.errorMessage) {
              rt = nt.errorMessage;
              break;
            }
          }
        else {
          if (vt = await Promise.all(
            X.map((_, nt) => B(_, nt))
          ), vt.some((_) => _.cancelled))
            return;
          rt = vt.find((_) => _.errorMessage)?.errorMessage || "";
        }
        a = Math.round(performance.now() - yt);
        const bt = {
          durationMs: a,
          engine: q,
          paragraphCount: X.length,
          translatedParagraphCount: vt.filter((_) => !_.skipped && !_.errorMessage).length,
          skippedParagraphCount: vt.filter((_) => _.skipped).length,
          failedParagraphCount: vt.filter((_) => !!_.errorMessage).length
        };
        D.info("[OCR] 翻译耗时统计", bt), pt.log("[OCR] translation timing", bt);
        const Nt = X.map((_) => this.toDisplayParagraph(_, d)), le = Nt.map((_) => this.toLegacyOverlayBlock(_));
        this.translationOverlay.blocks = le, this.translationOverlay.paragraphBlocks = Nt, this.translationOverlay.isLoading = !1, this.translationOverlay.errorMessage = rt || void 0;
        const Dt = {
          cropDurationMs: e,
          ocrModuleLoadDurationMs: i,
          ocrRecognitionDurationMs: s,
          reflowDurationMs: o,
          translationDurationMs: a,
          totalDurationMs: Math.round(performance.now() - t),
          rawLineCount: Y.length,
          paragraphCount: X.length,
          engine: q
        };
        D.info("[OCR] 截图翻译总耗时统计", Dt), pt.log("[OCR] pipeline timing", Dt), this.draw(), this.onStateChange?.();
      } catch (t) {
        D.error("[OCR] OCR翻译失败:", t);
        const e = t instanceof Error ? t.message : String(t);
        this.translationOverlay.isLoading = !1, this.translationOverlay.isVisible = !0, this.translationOverlay.errorMessage = this.getOcrTranslationErrorMessage(e), this.draw(), this.onStateChange?.();
      }
    }
  }
  async performVisionTranslation() {
    if (!(!this.selectionRect || !this.backgroundImage))
      try {
        const { x: t, y: e, width: i, height: s } = this.selectionRect;
        this.translationOverlay.loadingStage = "starting-service", this.draw(), this.onStateChange?.(), (await Ms()).running || (D.info("[截图] AI 服务未运行，正在启动..."), await Qa(), D.info("[截图] AI 服务启动完成"));
        const a = await this.cropFromBackground(t, e, i, s);
        if (!a?.image)
          throw new Error("无法获取截图选区图像");
        this.translationOverlay.loadingStage = "translating", this.draw(), this.onStateChange?.(), await new Promise((m) => setTimeout(m, 100));
        const l = (await _s({
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
        const c = Math.max(14, Math.min(20, Math.round(s / 18))), u = Math.max(18, Math.min(28, Math.round(s / 12))), d = l.split(/\n\n+/).filter((m) => m.trim()), w = Math.max(d.length, 1), x = (s - 16) / w, C = d.map((m, R) => {
          const A = R * x + 8, M = R === w - 1 ? s - A - 8 : x, j = {
            text: "",
            translatedText: m.trim(),
            x: 0,
            y: A,
            width: i,
            height: M,
            fontSize: c,
            lineHeight: u,
            angle: 0
          };
          return {
            text: "",
            translatedText: m.trim(),
            blocks: [j],
            bbox: { x: 0, y: A, width: i, height: M },
            isCodeBlock: !1,
            isStructuredBlock: !1,
            fontSize: c,
            lineHeight: u,
            angle: 0
          };
        }), f = C.length > 0 ? C : [{
          text: "",
          translatedText: l,
          blocks: [{
            text: "",
            translatedText: l,
            x: 0,
            y: 0,
            width: i,
            height: s,
            fontSize: c,
            lineHeight: u,
            angle: 0
          }],
          bbox: { x: 0, y: 0, width: i, height: s },
          isCodeBlock: !1,
          isStructuredBlock: !1,
          fontSize: c,
          lineHeight: u,
          angle: 0
        }];
        this.translationOverlay.blocks = f.map((m) => m.blocks[0]), this.translationOverlay.paragraphBlocks = f, this.translationOverlay.sourceLanguage = "auto", this.translationOverlay.targetLanguage = "zh", this.translationOverlay.isLoading = !1, this.translationOverlay.loadingStage = void 0, this.translationOverlay.isVisible = !0, this.translationOverlay.errorMessage = void 0, this.draw(), this.onStateChange?.();
      } catch (t) {
        const e = t instanceof Error ? t.message : String(t);
        D.error("[截图] AI 识图翻译失败", t), this.translationOverlay.isLoading = !1, this.translationOverlay.loadingStage = void 0, this.translationOverlay.isVisible = !0, this.translationOverlay.blocks = [], this.translationOverlay.paragraphBlocks = [], this.translationOverlay.errorMessage = e.includes("mmproj") || e.includes("vision") ? "AI 翻译需要在“本地 AI”中配置视觉模型（mmproj）" : `AI 识图翻译失败：${e.slice(0, 80)}`, this.draw(), this.onStateChange?.();
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
      const { cancelOfflineTranslation: t } = await de.loadOfflineTranslator();
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
    de.loadOfflineTranslator().then(({ cancelOfflineTranslation: e }) => e()).catch(() => {
    }), this.canvasPool.clear(), this.throttleTimer && (cancelAnimationFrame(this.throttleTimer), this.throttleTimer = null), this.cancelSmartDetection(), this.backgroundImage && (this.backgroundImage.onload = null, this.backgroundImage.onerror = null, this.backgroundImage.src = "", this.backgroundImage = null, this.visualElementDetector = null), this.annotations.forEach((e) => {
      typeof e.destroy == "function" && e.destroy();
    }), this.annotations = [], this.annotationUndoStack = [], this.annotationRedoStack = [], this.pendingDragSnapshot = null, this.pendingResizeSnapshot = null, this.currentAnnotation = null, this.selectedAnnotation = null, this.hoveredAnnotation = null, this.draggedAnnotation = null, this.resizingAnnotation = null, this.editingAnnotation = null, this.selectionRect = null, this.dragStartPoint = null, this.resizeStartBounds = null, this.resizeOperation = null, this.pendingSnapCandidate = null, this.dragStartPosition = null, this.snappedWindow = null, this.snappedElement = null, this.elementCandidateStabilizer.reset(), this.allWindows = [], this.translationOverlay.blocks = [], this.translationOverlay.paragraphBlocks = [], this.translationOverlay.isVisible = !1, this.translationOverlay.isLoading = !1, this.colorPickerState.previewImage && (this.colorPickerState.previewImage.close?.(), this.colorPickerState.previewImage = void 0), this.colorPickerState.isActive = !1, this.colorPickerState.isVisible = !1, this.colorPickerState.isCopied = !1, this.colorPickerState.colorInfo = void 0, this.eventHandler.unbind(), this.canvas.removeEventListener("mousedown", this.mouseDownHandler), this.canvas.removeEventListener("mousemove", this.mouseMoveHandler), this.canvas.removeEventListener("mouseup", this.mouseUpHandler), this.canvas.removeEventListener("dblclick", this.doubleClickHandler), window.removeEventListener("keydown", this.keyDownHandler), window.removeEventListener("keyup", this.keyUpHandler), this.onStateChange = void 0, this.onTextInputRequest = void 0, this.onColorPicked = void 0;
    const t = this.canvas.getContext("2d");
    t && (t.save(), t.setTransform(1, 0, 0, 1, 0, 0), t.clearRect(0, 0, this.canvas.width, this.canvas.height), t.restore());
  }
}
var Gr = {
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
function Kr() {
  return "icon-" + ((1 + Math.random()) * 4294967296 | 0).toString(16).substring(1);
}
function qr(n, t, e) {
  var i = typeof t.fill == "string" ? [t.fill] : t.fill || [], s = [], o = t.theme || e.theme;
  switch (o) {
    case "outline":
      s.push(typeof i[0] == "string" ? i[0] : "currentColor"), s.push("none"), s.push(typeof i[0] == "string" ? i[0] : "currentColor"), s.push("none");
      break;
    case "filled":
      s.push(typeof i[0] == "string" ? i[0] : "currentColor"), s.push(typeof i[0] == "string" ? i[0] : "currentColor"), s.push("#FFF"), s.push("#FFF");
      break;
    case "two-tone":
      s.push(typeof i[0] == "string" ? i[0] : "currentColor"), s.push(typeof i[1] == "string" ? i[1] : e.colors.twoTone.twoTone), s.push(typeof i[0] == "string" ? i[0] : "currentColor"), s.push(typeof i[1] == "string" ? i[1] : e.colors.twoTone.twoTone);
      break;
    case "multi-color":
      s.push(typeof i[0] == "string" ? i[0] : "currentColor"), s.push(typeof i[1] == "string" ? i[1] : e.colors.multiColor.outFillColor), s.push(typeof i[2] == "string" ? i[2] : e.colors.multiColor.innerStrokeColor), s.push(typeof i[3] == "string" ? i[3] : e.colors.multiColor.innerFillColor);
      break;
  }
  return {
    size: t.size || e.size,
    strokeWidth: t.strokeWidth || e.strokeWidth,
    strokeLinecap: t.strokeLinecap || e.strokeLinecap,
    strokeLinejoin: t.strokeLinejoin || e.strokeLinejoin,
    colors: s,
    id: n
  };
}
var Jr = Symbol("icon-context");
function st(n, t, e) {
  var i = {
    name: "icon-" + n,
    props: ["size", "strokeWidth", "strokeLinecap", "strokeLinejoin", "theme", "fill", "spin"],
    setup: function(o) {
      var a = Kr(), r = me(Jr, Gr);
      return function() {
        var l = o.size, c = o.strokeWidth, u = o.strokeLinecap, d = o.strokeLinejoin, w = o.theme, x = o.fill, C = o.spin, f = qr(a, {
          size: l,
          strokeWidth: c,
          strokeLinecap: u,
          strokeLinejoin: d,
          theme: w,
          fill: x
        }, r), m = [r.prefix + "-icon"];
        return m.push(r.prefix + "-icon-" + n), t && r.rtl && m.push(r.prefix + "-icon-rtl"), C && m.push(r.prefix + "-icon-spin"), p("span", {
          class: m.join(" ")
        }, [e(f)]);
      };
    }
  };
  return i;
}
const Qr = st("arrow-right-up", !0, function(n) {
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
}), gn = st("check", !0, function(n) {
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
}), Vn = st("close", !1, function(n) {
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
}), an = st("copy", !0, function(n) {
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
}), tl = st("delete-four", !1, function(n) {
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
}), Yi = st("down", !1, function(n) {
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
}), el = st("download", !1, function(n) {
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
}), nl = st("font-size", !0, function(n) {
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
}), il = st("go-on", !0, function(n) {
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
}), sl = st("left", !0, function(n) {
  return p("svg", {
    width: n.size,
    height: n.size,
    viewBox: "0 0 48 48",
    fill: "none"
  }, [p("path", {
    d: "M31 36L19 24L31 12",
    stroke: n.colors[0],
    "stroke-width": n.strokeWidth,
    "stroke-linecap": n.strokeLinecap,
    "stroke-linejoin": n.strokeLinejoin
  }, null)]);
}), ol = st("list-numbers", !0, function(n) {
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
}), Zi = st("loading", !0, function(n) {
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
}), En = st("magic", !0, function(n) {
  return p("svg", {
    width: n.size,
    height: n.size,
    viewBox: "0 0 48 48",
    fill: "none"
  }, [p("path", {
    d: "M20.1005 8.1005L24.3431 12.3431M30 4V10V4ZM39.8995 8.1005L35.6569 12.3431L39.8995 8.1005ZM44 18H38H44ZM39.8995 27.8995L35.6569 23.6569L39.8995 27.8995ZM30 32V26V32ZM20.1005 27.8995L24.3431 23.6569L20.1005 27.8995ZM16 18H22H16Z",
    stroke: n.colors[0],
    "stroke-width": n.strokeWidth,
    "stroke-linecap": n.strokeLinecap,
    "stroke-linejoin": n.strokeLinejoin
  }, null), p("path", {
    d: "M29.5856 18.4143L5.54395 42.4559",
    stroke: n.colors[0],
    "stroke-width": n.strokeWidth,
    "stroke-linecap": n.strokeLinecap,
    "stroke-linejoin": n.strokeLinejoin
  }, null)]);
}), Ds = st("minus", !1, function(n) {
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
}), al = st("more", !1, function(n) {
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
}), rl = st("mosaic", !0, function(n) {
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
}), ll = st("move-one", !0, function(n) {
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
}), Xi = st("pin", !0, function(n) {
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
}), Gi = st("platte", !0, function(n) {
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
}), Un = st("pushpin", !1, function(n) {
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
}), cl = st("rectangle-one", !1, function(n) {
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
}), hl = st("redo", !0, function(n) {
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
}), ul = st("return", !0, function(n) {
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
}), dl = st("right", !0, function(n) {
  return p("svg", {
    width: n.size,
    height: n.size,
    viewBox: "0 0 48 48",
    fill: "none"
  }, [p("path", {
    d: "M19 12L31 24L19 36",
    stroke: n.colors[0],
    "stroke-width": n.strokeWidth,
    "stroke-linecap": n.strokeLinecap,
    "stroke-linejoin": n.strokeLinejoin
  }, null)]);
}), gl = st("round", !1, function(n) {
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
}), Ki = st("save", !0, function(n) {
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
}), fl = st("square", !1, function(n) {
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
}), Yn = st("text-recognition", !1, function(n) {
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
}), Is = st("translate", !0, function(n) {
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
}), ml = st("write", !0, function(n) {
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
}), pl = { class: "toolbar-panel first-panel" }, wl = { class: "tool-section" }, yl = ["onClick", "title", "aria-pressed"], vl = { class: "action-section" }, xl = ["disabled", "title"], kl = ["disabled", "title"], bl = ["disabled", "title"], Sl = ["title"], Cl = ["title"], Ml = ["title"], _l = {
  key: 0,
  class: "toolbar-panel second-panel"
}, Tl = { class: "style-section" }, zl = {
  key: 0,
  class: "style-group opacity-group"
}, Rl = { class: "style-label" }, Ll = ["value", "title", "aria-label"], Pl = { class: "style-value" }, Al = {
  key: 1,
  class: "style-group"
}, Dl = { class: "style-label" }, Il = { class: "line-width-selector" }, Ol = ["onClick", "title", "aria-pressed"], El = { class: "style-value" }, $l = {
  key: 2,
  class: "style-divider"
}, Wl = {
  key: 3,
  class: "style-group opacity-group"
}, Bl = { class: "style-label" }, Nl = ["value", "title", "aria-label"], Hl = { class: "style-value" }, jl = {
  key: 4,
  class: "style-divider"
}, Fl = {
  key: 5,
  class: "style-group color-picker-group"
}, Vl = { class: "style-label" }, Ul = { class: "color-row" }, Yl = ["onClick", "title", "aria-pressed"], Zl = { class: "custom-color-wrapper" }, Xl = ["title"], Gl = ["value", "title", "aria-label"], Kl = {
  key: 6,
  class: "style-group"
}, ql = { class: "style-label" }, Jl = { class: "text-size-selector" }, Ql = ["onClick", "title", "aria-pressed"], tc = { class: "style-value" }, ec = {
  key: 7,
  class: "style-group"
}, nc = { class: "style-label" }, ic = { class: "mosaic-size-selector" }, sc = ["onClick", "title", "aria-pressed"], oc = { class: "style-value" }, ac = {
  key: 8,
  class: "style-group"
}, rc = { class: "style-label" }, lc = { class: "translate-engine-selector" }, cc = ["onClick", "title", "aria-pressed"], hc = /* @__PURE__ */ Tt({
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
    const i = $(null), { t: s } = ms(), o = n, a = e, r = I(() => [
      { type: g.Select, icon: ll, title: s("screenshot.select") },
      { type: g.Rectangle, icon: cl, title: s("screenshot.rectangle") },
      { type: g.Ellipse, icon: gl, title: s("screenshot.ellipse") },
      { type: g.Line, icon: Ds, title: s("screenshot.line") },
      { type: g.Arrow, icon: Qr, title: s("screenshot.arrow") },
      { type: g.Pen, icon: ml, title: s("screenshot.pen") },
      { type: g.Mosaic, icon: rl, title: s("screenshot.mosaic") },
      { type: g.Text, icon: nl, title: s("screenshot.text") },
      { type: g.Marker, icon: ol, title: s("screenshot.marker") },
      { type: g.ColorPicker, icon: Gi, title: s("screenshot.colorPicker") },
      { type: g.Ocr, icon: Yn, title: s("screenshot.ocr") },
      { type: g.Translate, icon: Is, title: s("screenshot.translate") },
      { type: g.Pin, icon: Un, title: s("screenshot.pin") }
    ]), l = I(() => [
      { value: "google", label: "Google", short: "G" },
      { value: "bing", label: s("translate.bingTranslate"), short: "B" },
      { value: "offline", label: s("translate.offlineTranslate"), short: s("translate.offlineMark") },
      { value: "local-ai", label: s("translate.localAiTranslate"), short: "AI" }
    ]), c = [2, 3, 5, 8], u = [
      "#ff4444",
      "#f79009",
      "#fdb022",
      "#12b76a",
      "#06b6d4",
      "#2e90fa",
      "#7a5af8",
      "#d444f1",
      "#111827"
    ], d = [12, 14, 16, 18, 20, 24], w = [8, 12, 16, 20], x = I(() => ![g.ColorPicker, g.Ocr, g.Pin].includes(o.currentTool)), C = I(
      () => o.currentTool === g.Select
    ), f = I(
      () => [g.Rectangle, g.Ellipse, g.Line, g.Arrow, g.Pen].includes(o.currentTool)
    ), m = I(
      () => [g.Rectangle, g.Ellipse, g.Line, g.Arrow, g.Pen, g.Text, g.Marker].includes(o.currentTool)
    ), R = I(
      () => [
        g.Rectangle,
        g.Ellipse,
        g.Line,
        g.Arrow,
        g.Pen,
        g.Mosaic,
        g.Text,
        g.Marker
      ].includes(o.currentTool)
    ), A = I(
      () => o.currentTool === g.Text || o.currentTool === g.Marker
    ), M = I(() => o.currentTool === g.Mosaic), j = I(() => o.currentTool === g.Translate), U = (O) => a("tool-select", O), V = (O) => a("color-change", O), F = (O) => a("line-width-change", O), Y = (O) => {
      a("opacity-change", Number(O.target.value) / 100);
    }, K = (O) => a("text-size-change", O), X = (O) => a("mosaic-size-change", O), tt = (O) => {
      a(
        "selection-corner-radius-change",
        Number(O.target.value)
      );
    }, at = () => a("undo"), q = () => a("redo"), kt = () => a("delete"), rt = () => a("save"), Z = () => a("confirm"), et = () => a("cancel"), dt = (O) => {
      a("translate-engine-change", O);
    }, wt = (O) => {
      V(O);
    }, ot = (O) => {
      const ft = O.target;
      ft.value && V(ft.value);
    }, gt = () => {
      const O = i.value?.getBoundingClientRect();
      return {
        width: O?.width ?? 590,
        height: O?.height ?? 50
      };
    };
    return Xe(() => o.currentTool, () => {
      pe(() => {
        window.dispatchEvent(new CustomEvent("screenshot-toolbar-resize", {
          detail: gt()
        }));
      });
    }, { immediate: !0 }), t({
      getToolbarSize: gt
    }), (O, ft) => (P(), E(
      "div",
      {
        ref_key: "toolbarContainerRef",
        ref: i,
        class: "toolbar-container"
      },
      [
        H(" 第一个面板：工具选择 + 操作按钮 "),
        y("div", pl, [
          H(" 工具选择区域 "),
          y("div", wl, [
            (P(!0), E(
              Ht,
              null,
              qt(r.value, (B) => (P(), E("button", {
                key: B.type,
                onClick: (yt) => U(B.type),
                class: it(["tool-btn", { active: O.currentTool === B.type }]),
                title: B.title,
                "aria-pressed": O.currentTool === B.type
              }, [
                (P(), Ct(fe(B.icon), {
                  theme: "outline",
                  size: "18",
                  strokeWidth: 2.5
                }))
              ], 10, yl))),
              128
              /* KEYED_FRAGMENT */
            ))
          ]),
          H(" 分隔线 "),
          ft[0] || (ft[0] = y(
            "div",
            { class: "toolbar-divider" },
            null,
            -1
            /* HOISTED */
          )),
          H(" 操作按钮区域 "),
          y("div", vl, [
            y("button", {
              onClick: at,
              disabled: !O.canUndo,
              class: "action-btn undo",
              title: S(s)("screenshot.undo")
            }, [
              p(S(ul), {
                theme: "outline",
                size: "18",
                strokeWidth: 2.5
              })
            ], 8, xl),
            y("button", {
              onClick: q,
              disabled: !O.canRedo,
              class: "action-btn redo",
              title: S(s)("screenshot.redo")
            }, [
              p(S(il), {
                theme: "outline",
                size: "18",
                strokeWidth: 2.5
              })
            ], 8, kl),
            y("button", {
              onClick: kt,
              disabled: !O.canDelete,
              class: "action-btn delete",
              title: S(s)("screenshot.delete")
            }, [
              p(S(tl), {
                theme: "outline",
                size: "18",
                strokeWidth: 2.5
              })
            ], 8, bl),
            y("button", {
              onClick: et,
              class: "action-btn cancel",
              title: S(s)("screenshot.cancel")
            }, [
              p(S(Vn), {
                theme: "outline",
                size: "18",
                strokeWidth: 2.5
              })
            ], 8, Sl),
            y("button", {
              onClick: rt,
              class: "action-btn save",
              title: S(s)("screenshot.save")
            }, [
              p(S(el), {
                theme: "outline",
                size: "18",
                strokeWidth: 2.5
              })
            ], 8, Cl),
            y("button", {
              onClick: Z,
              class: "action-btn confirm",
              title: S(s)("screenshot.confirm")
            }, [
              p(S(gn), {
                theme: "outline",
                size: "18",
                strokeWidth: 2.5
              })
            ], 8, Ml)
          ])
        ]),
        H(" 第二个面板：样式设置区域 "),
        x.value ? (P(), E("div", _l, [
          y("div", Tl, [
            C.value ? (P(), E("div", zl, [
              y(
                "span",
                Rl,
                N(S(s)("screenshot.cornerRadius")),
                1
                /* TEXT */
              ),
              y("input", {
                class: "opacity-slider",
                type: "range",
                min: "0",
                max: "80",
                step: "2",
                value: O.currentSelectionCornerRadius,
                style: lt({
                  "--opacity-color": "#2e90fa",
                  "--opacity-progress": `${O.currentSelectionCornerRadius / 80 * 100}%`
                }),
                title: `${O.currentSelectionCornerRadius}px`,
                "aria-label": S(s)("screenshot.cornerRadius"),
                onInput: tt
              }, null, 44, Ll),
              y(
                "span",
                Pl,
                N(O.currentSelectionCornerRadius) + " px",
                1
                /* TEXT */
              )
            ])) : H("v-if", !0),
            H(" 线宽设置 "),
            f.value ? (P(), E("div", Al, [
              y(
                "span",
                Dl,
                N(S(s)("screenshot.lineWidth")),
                1
                /* TEXT */
              ),
              y("div", Il, [
                (P(), E(
                  Ht,
                  null,
                  qt(c, (B) => y("button", {
                    key: B,
                    onClick: (yt) => F(B),
                    class: it(["width-btn", { active: O.currentLineWidth === B }]),
                    title: `${B}px`,
                    "aria-pressed": O.currentLineWidth === B
                  }, [
                    y(
                      "span",
                      {
                        class: "line-preview",
                        style: lt({ height: `${B}px`, backgroundColor: O.currentColor })
                      },
                      null,
                      4
                      /* STYLE */
                    )
                  ], 10, Ol)),
                  64
                  /* STABLE_FRAGMENT */
                ))
              ]),
              y(
                "span",
                El,
                N(O.currentLineWidth) + " px",
                1
                /* TEXT */
              )
            ])) : H("v-if", !0),
            f.value && m.value ? (P(), E("div", $l)) : H("v-if", !0),
            H(" 不透明度设置 "),
            R.value ? (P(), E("div", Wl, [
              y(
                "span",
                Bl,
                N(S(s)("screenshot.opacity")),
                1
                /* TEXT */
              ),
              y("input", {
                class: "opacity-slider",
                type: "range",
                min: "10",
                max: "100",
                step: "5",
                value: Math.round(O.currentOpacity * 100),
                style: lt({
                  "--opacity-color": O.currentColor,
                  "--opacity-progress": `${Math.round(O.currentOpacity * 100)}%`
                }),
                title: `${Math.round(O.currentOpacity * 100)}%`,
                "aria-label": S(s)("screenshot.opacity"),
                onInput: Y
              }, null, 44, Nl),
              y(
                "span",
                Hl,
                N(Math.round(O.currentOpacity * 100)) + "%",
                1
                /* TEXT */
              )
            ])) : H("v-if", !0),
            R.value && m.value ? (P(), E("div", jl)) : H("v-if", !0),
            H(" 颜色设置 "),
            m.value ? (P(), E("div", Fl, [
              y(
                "span",
                Vl,
                N(S(s)("screenshot.color")),
                1
                /* TEXT */
              ),
              y("div", Ul, [
                (P(), E(
                  Ht,
                  null,
                  qt(u, (B) => y("button", {
                    key: B,
                    onClick: (yt) => wt(B),
                    class: it(["color-btn", { active: O.currentColor === B }]),
                    style: lt({ backgroundColor: B }),
                    title: B,
                    "aria-pressed": O.currentColor === B
                  }, null, 14, Yl)),
                  64
                  /* STABLE_FRAGMENT */
                )),
                y("div", Zl, [
                  y("button", {
                    class: it(["color-btn custom-color-btn", { active: !u.includes(O.currentColor) }]),
                    title: S(s)("screenshot.customColor")
                  }, [
                    p(S(Gi), {
                      theme: "outline",
                      size: "13",
                      strokeWidth: 2.5
                    })
                  ], 10, Xl),
                  y("input", {
                    type: "color",
                    onChange: ot,
                    value: O.currentColor,
                    class: "color-input-hidden",
                    title: S(s)("screenshot.customColor"),
                    "aria-label": S(s)("screenshot.customColor")
                  }, null, 40, Gl)
                ])
              ])
            ])) : H("v-if", !0),
            H(" 文字大小设置 "),
            A.value ? (P(), E("div", Kl, [
              y(
                "span",
                ql,
                N(S(s)("screenshot.fontSize")),
                1
                /* TEXT */
              ),
              y("div", Jl, [
                (P(), E(
                  Ht,
                  null,
                  qt(d, (B) => y("button", {
                    key: B,
                    onClick: (yt) => K(B),
                    class: it(["size-btn", { active: O.currentTextSize === B }]),
                    title: `${B}px`,
                    "aria-pressed": O.currentTextSize === B
                  }, [
                    y(
                      "span",
                      {
                        class: "size-text",
                        style: lt({ fontSize: `${Math.min(B, 18)}px` })
                      },
                      "A",
                      4
                      /* STYLE */
                    )
                  ], 10, Ql)),
                  64
                  /* STABLE_FRAGMENT */
                ))
              ]),
              y(
                "span",
                tc,
                N(O.currentTextSize) + " px",
                1
                /* TEXT */
              )
            ])) : H("v-if", !0),
            H(" 马赛克大小设置 "),
            M.value ? (P(), E("div", ec, [
              y(
                "span",
                nc,
                N(S(s)("screenshot.mosaicSize")),
                1
                /* TEXT */
              ),
              y("div", ic, [
                (P(), E(
                  Ht,
                  null,
                  qt(w, (B) => y("button", {
                    key: B,
                    onClick: (yt) => X(B),
                    class: it(["size-btn", { active: O.currentMosaicSize === B }]),
                    title: `${S(s)("screenshot.brush")} ${B * 3}px`,
                    "aria-pressed": O.currentMosaicSize === B
                  }, [
                    y(
                      "span",
                      {
                        class: "mosaic-preview",
                        style: lt({
                          width: `${Math.min(B * 1.25, 18)}px`,
                          height: `${Math.min(B * 1.25, 18)}px`
                        })
                      },
                      null,
                      4
                      /* STYLE */
                    )
                  ], 10, sc)),
                  64
                  /* STABLE_FRAGMENT */
                ))
              ]),
              y(
                "span",
                oc,
                N(O.currentMosaicSize * 3) + " px",
                1
                /* TEXT */
              )
            ])) : H("v-if", !0),
            H(" 翻译引擎选择 "),
            j.value ? (P(), E("div", ac, [
              y(
                "span",
                rc,
                N(S(s)("screenshot.engine")),
                1
                /* TEXT */
              ),
              y("div", lc, [
                (P(!0), E(
                  Ht,
                  null,
                  qt(l.value, (B) => (P(), E("button", {
                    key: B.value,
                    onClick: (yt) => dt(B.value),
                    class: it(["engine-btn", { active: O.currentTranslateEngine === B.value }]),
                    title: B.label,
                    "aria-pressed": O.currentTranslateEngine === B.value
                  }, N(B.short), 11, cc))),
                  128
                  /* KEYED_FRAGMENT */
                ))
              ])
            ])) : H("v-if", !0)
          ])
        ])) : H("v-if", !0)
      ],
      512
      /* NEED_PATCH */
    ));
  }
}), qe = (n, t) => {
  const e = n.__vccOpts || n;
  for (const [i, s] of t)
    e[i] = s;
  return e;
}, uc = /* @__PURE__ */ qe(hc, [["__scopeId", "data-v-afb70887"]]), dc = {
  class: "screenshot-container",
  ref: "containerRef"
}, gc = {
  key: 0,
  class: "mask-layers"
}, fc = {
  key: 1,
  class: "mask-full"
}, mc = { class: "size-text" }, pc = {
  key: 4,
  class: "loading-overlay"
}, wc = /* @__PURE__ */ Tt({
  __name: "index",
  setup(n) {
    const t = $(), e = $(), i = $(null), s = $(null);
    let o = null;
    const a = $(!0), r = $(!1), l = $(""), c = $({ x: 0, y: 0 }), u = $(16), d = $(!1), w = $("bing"), x = $({ width: 590, height: 50 });
    let C = !1, f = null;
    const m = $({
      selectionRect: null,
      annotations: [],
      currentTool: g.Select,
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
    }), R = $(), A = $(), M = I(() => m.value.isDrawing), j = I(() => {
      if (!m.value.selectionRect) return {};
      const { y: k } = m.value.selectionRect;
      return {
        top: "0",
        left: "0",
        right: "0",
        height: `${k}px`
      };
    }), U = I(() => {
      if (!m.value.selectionRect) return {};
      const { y: k, height: W } = m.value.selectionRect;
      return {
        top: `${k + W}px`,
        left: "0",
        right: "0",
        bottom: "0"
      };
    }), V = I(() => {
      if (!m.value.selectionRect) return {};
      const { x: k, y: W, height: ht } = m.value.selectionRect;
      return {
        top: `${W}px`,
        left: "0",
        width: `${k}px`,
        height: `${ht}px`
      };
    }), F = I(() => {
      if (!m.value.selectionRect) return {};
      const { x: k, y: W, width: ht, height: ut } = m.value.selectionRect;
      return {
        top: `${W}px`,
        left: `${k + ht}px`,
        right: "0",
        height: `${ut}px`
      };
    }), Y = I(() => {
      if (!m.value.selectionRect) return {};
      const { x: k, y: W, width: ht, height: ut } = m.value.selectionRect, J = 10, St = 12, Et = Math.min(x.value.width, Math.max(0, window.innerWidth - J * 2)), At = Math.min(x.value.height, Math.max(0, window.innerHeight - J * 2)), Ie = Math.max(J, window.innerHeight - At - J), ne = Math.max(J, window.innerWidth - Et - J);
      let Xt;
      return W + ut + At + St <= window.innerHeight - J ? Xt = W + ut + St : W - At - St >= J ? Xt = W - At - St : Xt = W + ut - At - J, Xt = Math.min(Math.max(Xt, J), Ie), {
        left: `${Math.min(Math.max(k + (ht - Et) / 2, J), ne)}px`,
        top: `${Xt}px`
      };
    }), K = I(() => {
      if (!m.value.selectionRect) return {};
      const { x: k, y: W, width: ht, height: ut } = m.value.selectionRect, J = 10;
      let St = k - J, Et = W - J, At = "translateY(-100%)";
      return St < 10 && (St = k + ht + J, At = "translateY(-100%)"), Et < 30 && (Et = W + ut + J, At = "translateY(0)"), {
        left: `${St}px`,
        top: `${Et}px`,
        transform: At
      };
    }), X = I(() => {
      if (!m.value.selectionRect) return "";
      const { width: k, height: W } = m.value.selectionRect;
      return `${Math.round(k)} × ${Math.round(W)}`;
    }), tt = I(
      () => f?.getData().style.color || m.value.currentStyle.color
    ), at = I(() => {
      const k = f?.getData().type === g.Marker ? Hn(c.value, u.value) : Me(c.value);
      return {
        "--text-accent-color": tt.value,
        left: `${k.x}px`,
        top: `${k.y}px`
      };
    }), q = (k) => {
      if (k === g.Pin && m.value.selectionRect) {
        kt();
        return;
      }
      if (k === g.Ocr && m.value.selectionRect) {
        rt();
        return;
      }
      o?.setTool(k);
    }, kt = async () => {
      try {
        await o?.createPinWindow();
      } catch (k) {
        D.error("[截图] 创建贴图失败", k);
      }
    }, rt = async () => {
      try {
        await o?.createOcrPinWindow();
      } catch (k) {
        D.error("[截图] 创建文字识别贴图失败", k);
      }
    }, Z = (k) => {
      o?.updateStyle({ color: k });
    }, et = (k) => {
      o?.updateStyle({ lineWidth: k });
    }, dt = (k) => {
      o?.updateStyle({ opacity: k });
    }, wt = (k) => {
      o?.updateTextSize(k);
    }, ot = (k) => {
      o?.updateMosaicSize(k);
    }, gt = (k) => {
      o?.updateSelectionCornerRadius(k);
    }, O = (k) => {
      w.value = k, o?.setTranslationEngine(k), o?.executeTranslation();
    }, ft = () => {
      o?.undoAnnotation();
    }, B = () => {
      o?.redoAnnotation();
    }, yt = () => {
      o?.deleteSelectedAnnotation();
    }, vt = async () => {
      try {
        await o?.processScreenshot("save"), ct();
      } catch (k) {
        const W = k?.message || k?.toString() || "保存失败";
        if (W.includes("保存已取消") || W.includes("cancelled"))
          return;
        D.error("保存截图时发生错误", W);
      }
    }, bt = async () => {
      try {
        await o?.processScreenshot("copy"), ct();
      } catch {
      }
    }, Nt = () => {
      ct();
    }, le = (k, W) => {
      if (W && [g.Text, g.Marker].includes(W.getData().type)) {
        const ht = W.getData();
        c.value = {
          x: ht.points[0].x,
          y: ht.points[0].y
        }, u.value = ht.fontSize || m.value.textSize;
      } else
        c.value = k, u.value = m.value.textSize;
      r.value = !0, f = W || null, W && o?.setEditingAnnotation(W), W && W.getData().text ? l.value = W.getData().text || "" : l.value = "", pe(() => {
        e.value?.focus(), f && e.value?.select();
      });
    }, Dt = () => {
      const k = f?.getData().type === g.Marker;
      l.value.trim() || k ? f ? o?.updateTextAnnotation(f, l.value.trim()) : o?.createTextAnnotation(c.value, l.value) : f && o?.deleteAnnotation(f), _();
    }, _ = () => {
      r.value = !1, l.value = "", f && o?.clearEditingAnnotation(), f = null;
    }, nt = (k) => {
      navigator.clipboard && navigator.clipboard.writeText(k.hex).catch((W) => {
        D.error("[截图] 复制颜色到剪贴板失败", W);
      });
    }, _t = (k) => {
      if (k.key === "Meta" || k.key === "Win" || k.altKey && k.key === "Tab" || k.altKey && k.key === "F4") {
        k.preventDefault(), k.stopPropagation();
        return;
      }
      if (r.value && document.activeElement === e.value) {
        if (k.key === "Escape") {
          _(), k.preventDefault();
          return;
        }
        if (k.key === "Enter") {
          Dt(), k.preventDefault();
          return;
        }
        if (k.key === "Tab") {
          k.preventDefault();
          return;
        }
        return;
      }
      if (!m.value.selectionRect) {
        if (k.key === "Escape") {
          ct();
          return;
        }
        k.preventDefault(), k.stopPropagation();
        return;
      }
      if (o?.handleKeyDown(k)) {
        k.preventDefault();
        return;
      }
      const W = navigator.platform.toLowerCase().includes("mac");
      if ((W ? k.metaKey : k.ctrlKey) && k.key.toLowerCase() === "z") {
        k.shiftKey ? B() : ft(), k.preventDefault();
        return;
      }
      if (!W && k.ctrlKey && k.key.toLowerCase() === "y") {
        B(), k.preventDefault();
        return;
      }
      if (k.key === "Escape") {
        ct();
        return;
      } else if (k.key === "Delete" || k.key === "Backspace") {
        yt(), k.preventDefault();
        return;
      }
      ["Shift", "Control", "Alt", "Meta"].includes(k.key) || k.preventDefault();
    }, ct = async () => {
      if (!C) {
        C = !0, o?.destroy(), o = null;
        try {
          await b("cleanup_screenshot_resources");
        } catch {
          try {
            await b("clear_screenshot_background");
          } catch (W) {
            D.error("[截图] 清理后台缓存失败", W);
          }
        }
        m.value = {
          selectionRect: null,
          annotations: [],
          currentTool: g.Select,
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
          await b("close_and_destroy_screenshot_window");
        } catch (k) {
          D.error("[截图] 销毁截图窗口失败，回退到 close()", k), await s.value?.close();
        } finally {
          C = !1;
        }
      }
    }, Lt = () => {
      const k = o?.getState();
      k && (m.value = k);
    }, Rt = () => {
      const k = i.value?.getToolbarSize?.();
      k && (x.value = k);
    }, Zt = (k) => {
      const W = k.detail;
      W && (x.value = W);
    };
    return Ge(async () => {
      if (t.value) {
        s.value = new Ke("screenshot"), o = new Xr(
          t.value,
          Lt,
          le,
          nt
        ), document.addEventListener("keydown", _t), window.addEventListener("resize", Rt), window.addEventListener("screenshot-toolbar-resize", Zt), A.value = await yn("screenshot-close-requested", () => {
          ct();
        }), R.value = await yn("tauri://blur", () => {
          if (r.value && document.activeElement === e.value)
            return;
          const k = o?.getTranslationState();
          k?.isLoading || k?.isVisible || setTimeout(() => {
            if (!r.value || document.activeElement !== e.value) {
              const W = o?.getTranslationState();
              if (W?.isLoading || W?.isVisible)
                return;
              ct();
            }
          }, 100);
        }), await pe(), Rt(), await s.value.emit("screenshot_ready");
        try {
          const k = await b("get_translation_engine");
          k && ["google", "bing", "offline", "local-ai"].includes(k) && (w.value = k, o?.setTranslationEngine(k));
        } catch (k) {
          D.error("[截图] 获取翻译引擎设置失败", k);
        }
        try {
          const k = await b("get_offline_model_activated");
          o?.setOfflineModelActivated(k);
        } catch (k) {
          D.error("[截图] 获取离线模型激活状态失败", k);
        }
      }
    }), Jn(() => {
      o?.destroy(), o = null, document.removeEventListener("keydown", _t), window.removeEventListener("resize", Rt), window.removeEventListener("screenshot-toolbar-resize", Zt), R.value?.(), A.value?.(), R.value = void 0, A.value = void 0, s.value = null;
    }), (k, W) => (P(), E(
      "div",
      dc,
      [
        H(" 遮罩层 "),
        m.value.selectionRect ? (P(), E("div", gc, [
          y(
            "div",
            {
              class: "mask-top",
              style: lt(j.value)
            },
            null,
            4
            /* STYLE */
          ),
          y(
            "div",
            {
              class: "mask-bottom",
              style: lt(U.value)
            },
            null,
            4
            /* STYLE */
          ),
          y(
            "div",
            {
              class: "mask-left",
              style: lt(V.value)
            },
            null,
            4
            /* STYLE */
          ),
          y(
            "div",
            {
              class: "mask-right",
              style: lt(F.value)
            },
            null,
            4
            /* STYLE */
          )
        ])) : (P(), E("div", fc)),
        H(" 画布 "),
        y(
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
        H(" 尺寸信息 "),
        m.value.selectionRect && a.value ? (P(), E(
          "div",
          {
            key: 2,
            class: "size-info",
            style: lt(K.value)
          },
          [
            y(
              "span",
              mc,
              N(X.value),
              1
              /* TEXT */
            )
          ],
          4
          /* STYLE */
        )) : H("v-if", !0),
        H(" 工具栏 "),
        m.value.selectionRect && !M.value ? (P(), Ct(uc, {
          key: 3,
          ref_key: "toolbarRef",
          ref: i,
          style: lt(Y.value),
          class: "toolbar",
          "current-tool": m.value.currentTool,
          "current-color": m.value.currentStyle.color,
          "current-line-width": m.value.currentStyle.lineWidth,
          "current-opacity": m.value.currentStyle.opacity,
          "current-text-size": m.value.textSize,
          "current-mosaic-size": m.value.mosaicSize,
          "current-selection-corner-radius": m.value.selectionCornerRadius,
          "can-undo": m.value.hasAnnotations,
          "can-redo": m.value.canRedo,
          "can-delete": !!m.value.selectedAnnotation,
          "current-translate-engine": w.value,
          onToolSelect: q,
          onColorChange: Z,
          onLineWidthChange: et,
          onOpacityChange: dt,
          onTextSizeChange: wt,
          onMosaicSizeChange: ot,
          onSelectionCornerRadiusChange: gt,
          onTranslateEngineChange: O,
          onUndo: ft,
          onRedo: B,
          onDelete: yt,
          onSave: vt,
          onConfirm: bt,
          onCancel: Nt
        }, null, 8, ["style", "current-tool", "current-color", "current-line-width", "current-opacity", "current-text-size", "current-mosaic-size", "current-selection-corner-radius", "can-undo", "can-redo", "can-delete", "current-translate-engine"])) : H("v-if", !0),
        H(" 加载提示 - 仅在初始化时显示 "),
        d.value ? (P(), E("div", pc, [
          W[1] || (W[1] = y(
            "div",
            { class: "loading-spinner" },
            null,
            -1
            /* HOISTED */
          )),
          y(
            "p",
            null,
            N(k.$t("screenshotTool.loading")),
            1
            /* TEXT */
          )
        ])) : H("v-if", !0),
        H(" 文字输入框 "),
        r.value ? (P(), E(
          "div",
          {
            key: 5,
            class: "text-input-container",
            style: lt(at.value)
          },
          [
            Fe(y(
              "input",
              {
                ref_key: "textInputRef",
                ref: e,
                "onUpdate:modelValue": W[0] || (W[0] = (ht) => l.value = ht),
                type: "text",
                class: "text-input",
                style: lt({
                  color: tt.value,
                  fontFamily: S(Qt),
                  fontSize: u.value + "px",
                  height: u.value + "px",
                  lineHeight: u.value + "px"
                }),
                onKeydown: [
                  Ai(Dt, ["enter"]),
                  Ai(_, ["escape"])
                ],
                onBlur: Dt,
                autofocus: ""
              },
              null,
              36
              /* STYLE, NEED_HYDRATION */
            ), [
              [No, l.value]
            ])
          ],
          4
          /* STYLE */
        )) : H("v-if", !0)
      ],
      512
      /* NEED_PATCH */
    ));
  }
}), yc = /* @__PURE__ */ qe(wc, [["__scopeId", "data-v-a3b3737e"]]), vc = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: yc
}, Symbol.toStringTag, { value: "Module" })), Os = Symbol(), fn = "el", xc = "is-", he = (n, t, e, i, s) => {
  let o = `${n}-${t}`;
  return e && (o += `-${e}`), i && (o += `__${i}`), s && (o += `--${s}`), o;
}, Es = Symbol("namespaceContextKey"), kc = (n) => {
  const t = n || (ze() ? me(Es, $(fn)) : $(fn));
  return I(() => S(t) || fn);
}, li = (n, t) => {
  const e = kc(t);
  return {
    namespace: e,
    b: (f = "") => he(e.value, n, f, "", ""),
    e: (f) => f ? he(e.value, n, "", f, "") : "",
    m: (f) => f ? he(e.value, n, "", "", f) : "",
    be: (f, m) => f && m ? he(e.value, n, f, m, "") : "",
    em: (f, m) => f && m ? he(e.value, n, "", f, m) : "",
    bm: (f, m) => f && m ? he(e.value, n, f, "", m) : "",
    bem: (f, m, R) => f && m && R ? he(e.value, n, f, m, R) : "",
    is: (f, ...m) => {
      const R = m.length >= 1 ? m[0] : !0;
      return f && R ? `${xc}${f}` : "";
    },
    cssVar: (f) => {
      const m = {};
      for (const R in f)
        f[R] && (m[`--${e.value}-${R}`] = f[R]);
      return m;
    },
    cssVarName: (f) => `--${e.value}-${f}`,
    cssVarBlock: (f) => {
      const m = {};
      for (const R in f)
        f[R] && (m[`--${e.value}-${n}-${R}`] = f[R]);
      return m;
    },
    cssVarBlockName: (f) => `--${e.value}-${n}-${f}`
  };
};
/**
* @vue/shared v3.5.13
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/
const bc = Object.prototype.hasOwnProperty, qi = (n, t) => bc.call(n, t), Ye = (n) => typeof n == "function", ye = (n) => typeof n == "string", $s = (n) => n !== null && typeof n == "object";
var Sc = typeof global == "object" && global && global.Object === Object && global, Cc = typeof self == "object" && self && self.Object === Object && self, ci = Sc || Cc || Function("return this")(), Re = ci.Symbol, Ws = Object.prototype, Mc = Ws.hasOwnProperty, _c = Ws.toString, We = Re ? Re.toStringTag : void 0;
function Tc(n) {
  var t = Mc.call(n, We), e = n[We];
  try {
    n[We] = void 0;
    var i = !0;
  } catch {
  }
  var s = _c.call(n);
  return i && (t ? n[We] = e : delete n[We]), s;
}
var zc = Object.prototype, Rc = zc.toString;
function Lc(n) {
  return Rc.call(n);
}
var Pc = "[object Null]", Ac = "[object Undefined]", Ji = Re ? Re.toStringTag : void 0;
function Bs(n) {
  return n == null ? n === void 0 ? Ac : Pc : Ji && Ji in Object(n) ? Tc(n) : Lc(n);
}
function Dc(n) {
  return n != null && typeof n == "object";
}
var Ic = "[object Symbol]";
function hi(n) {
  return typeof n == "symbol" || Dc(n) && Bs(n) == Ic;
}
function Oc(n, t) {
  for (var e = -1, i = n == null ? 0 : n.length, s = Array(i); ++e < i; )
    s[e] = t(n[e], e, n);
  return s;
}
var ui = Array.isArray, Qi = Re ? Re.prototype : void 0, ts = Qi ? Qi.toString : void 0;
function Ns(n) {
  if (typeof n == "string")
    return n;
  if (ui(n))
    return Oc(n, Ns) + "";
  if (hi(n))
    return ts ? ts.call(n) : "";
  var t = n + "";
  return t == "0" && 1 / n == -1 / 0 ? "-0" : t;
}
function Hs(n) {
  var t = typeof n;
  return n != null && (t == "object" || t == "function");
}
var Ec = "[object AsyncFunction]", $c = "[object Function]", Wc = "[object GeneratorFunction]", Bc = "[object Proxy]";
function Nc(n) {
  if (!Hs(n))
    return !1;
  var t = Bs(n);
  return t == $c || t == Wc || t == Ec || t == Bc;
}
var $n = ci["__core-js_shared__"], es = function() {
  var n = /[^.]+$/.exec($n && $n.keys && $n.keys.IE_PROTO || "");
  return n ? "Symbol(src)_1." + n : "";
}();
function Hc(n) {
  return !!es && es in n;
}
var jc = Function.prototype, Fc = jc.toString;
function Vc(n) {
  if (n != null) {
    try {
      return Fc.call(n);
    } catch {
    }
    try {
      return n + "";
    } catch {
    }
  }
  return "";
}
var Uc = /[\\^$.*+?()[\]{}|]/g, Yc = /^\[object .+?Constructor\]$/, Zc = Function.prototype, Xc = Object.prototype, Gc = Zc.toString, Kc = Xc.hasOwnProperty, qc = RegExp(
  "^" + Gc.call(Kc).replace(Uc, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$"
);
function Jc(n) {
  if (!Hs(n) || Hc(n))
    return !1;
  var t = Nc(n) ? qc : Yc;
  return t.test(Vc(n));
}
function Qc(n, t) {
  return n?.[t];
}
function js(n, t) {
  var e = Qc(n, t);
  return Jc(e) ? e : void 0;
}
function th(n, t) {
  return n === t || n !== n && t !== t;
}
var eh = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/, nh = /^\w*$/;
function ih(n, t) {
  if (ui(n))
    return !1;
  var e = typeof n;
  return e == "number" || e == "symbol" || e == "boolean" || n == null || hi(n) ? !0 : nh.test(n) || !eh.test(n) || t != null && n in Object(t);
}
var Ze = js(Object, "create");
function sh() {
  this.__data__ = Ze ? Ze(null) : {}, this.size = 0;
}
function oh(n) {
  var t = this.has(n) && delete this.__data__[n];
  return this.size -= t ? 1 : 0, t;
}
var ah = "__lodash_hash_undefined__", rh = Object.prototype, lh = rh.hasOwnProperty;
function ch(n) {
  var t = this.__data__;
  if (Ze) {
    var e = t[n];
    return e === ah ? void 0 : e;
  }
  return lh.call(t, n) ? t[n] : void 0;
}
var hh = Object.prototype, uh = hh.hasOwnProperty;
function dh(n) {
  var t = this.__data__;
  return Ze ? t[n] !== void 0 : uh.call(t, n);
}
var gh = "__lodash_hash_undefined__";
function fh(n, t) {
  var e = this.__data__;
  return this.size += this.has(n) ? 0 : 1, e[n] = Ze && t === void 0 ? gh : t, this;
}
function ve(n) {
  var t = -1, e = n == null ? 0 : n.length;
  for (this.clear(); ++t < e; ) {
    var i = n[t];
    this.set(i[0], i[1]);
  }
}
ve.prototype.clear = sh;
ve.prototype.delete = oh;
ve.prototype.get = ch;
ve.prototype.has = dh;
ve.prototype.set = fh;
function mh() {
  this.__data__ = [], this.size = 0;
}
function _n(n, t) {
  for (var e = n.length; e--; )
    if (th(n[e][0], t))
      return e;
  return -1;
}
var ph = Array.prototype, wh = ph.splice;
function yh(n) {
  var t = this.__data__, e = _n(t, n);
  if (e < 0)
    return !1;
  var i = t.length - 1;
  return e == i ? t.pop() : wh.call(t, e, 1), --this.size, !0;
}
function vh(n) {
  var t = this.__data__, e = _n(t, n);
  return e < 0 ? void 0 : t[e][1];
}
function xh(n) {
  return _n(this.__data__, n) > -1;
}
function kh(n, t) {
  var e = this.__data__, i = _n(e, n);
  return i < 0 ? (++this.size, e.push([n, t])) : e[i][1] = t, this;
}
function Ae(n) {
  var t = -1, e = n == null ? 0 : n.length;
  for (this.clear(); ++t < e; ) {
    var i = n[t];
    this.set(i[0], i[1]);
  }
}
Ae.prototype.clear = mh;
Ae.prototype.delete = yh;
Ae.prototype.get = vh;
Ae.prototype.has = xh;
Ae.prototype.set = kh;
var bh = js(ci, "Map");
function Sh() {
  this.size = 0, this.__data__ = {
    hash: new ve(),
    map: new (bh || Ae)(),
    string: new ve()
  };
}
function Ch(n) {
  var t = typeof n;
  return t == "string" || t == "number" || t == "symbol" || t == "boolean" ? n !== "__proto__" : n === null;
}
function Tn(n, t) {
  var e = n.__data__;
  return Ch(t) ? e[typeof t == "string" ? "string" : "hash"] : e.map;
}
function Mh(n) {
  var t = Tn(this, n).delete(n);
  return this.size -= t ? 1 : 0, t;
}
function _h(n) {
  return Tn(this, n).get(n);
}
function Th(n) {
  return Tn(this, n).has(n);
}
function zh(n, t) {
  var e = Tn(this, n), i = e.size;
  return e.set(n, t), this.size += e.size == i ? 0 : 1, this;
}
function ke(n) {
  var t = -1, e = n == null ? 0 : n.length;
  for (this.clear(); ++t < e; ) {
    var i = n[t];
    this.set(i[0], i[1]);
  }
}
ke.prototype.clear = Sh;
ke.prototype.delete = Mh;
ke.prototype.get = _h;
ke.prototype.has = Th;
ke.prototype.set = zh;
var Rh = "Expected a function";
function di(n, t) {
  if (typeof n != "function" || t != null && typeof t != "function")
    throw new TypeError(Rh);
  var e = function() {
    var i = arguments, s = t ? t.apply(this, i) : i[0], o = e.cache;
    if (o.has(s))
      return o.get(s);
    var a = n.apply(this, i);
    return e.cache = o.set(s, a) || o, a;
  };
  return e.cache = new (di.Cache || ke)(), e;
}
di.Cache = ke;
var Lh = 500;
function Ph(n) {
  var t = di(n, function(i) {
    return e.size === Lh && e.clear(), i;
  }), e = t.cache;
  return t;
}
var Ah = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g, Dh = /\\(\\)?/g, Ih = Ph(function(n) {
  var t = [];
  return n.charCodeAt(0) === 46 && t.push(""), n.replace(Ah, function(e, i, s, o) {
    t.push(s ? o.replace(Dh, "$1") : i || e);
  }), t;
});
function Oh(n) {
  return n == null ? "" : Ns(n);
}
function Eh(n, t) {
  return ui(n) ? n : ih(n, t) ? [n] : Ih(Oh(n));
}
function $h(n) {
  if (typeof n == "string" || hi(n))
    return n;
  var t = n + "";
  return t == "0" && 1 / n == -1 / 0 ? "-0" : t;
}
function Wh(n, t) {
  t = Eh(t, n);
  for (var e = 0, i = t.length; n != null && e < i; )
    n = n[$h(t[e++])];
  return e && e == i ? n : void 0;
}
function Bh(n, t, e) {
  var i = n == null ? void 0 : Wh(n, t);
  return i === void 0 ? e : i;
}
function Nh(n) {
  for (var t = -1, e = n == null ? 0 : n.length, i = {}; ++t < e; ) {
    var s = n[t];
    i[s[0]] = s[1];
  }
  return i;
}
const Fs = (n) => n === void 0, ns = (n) => typeof n == "boolean", xe = (n) => typeof n == "number", Zn = (n) => typeof Element > "u" ? !1 : n instanceof Element, Hh = (n) => ye(n) ? !Number.isNaN(Number(n)) : !1;
var is;
const be = typeof window < "u", jh = (n) => typeof n == "string", Fh = () => {
};
be && ((is = window?.navigator) != null && is.userAgent) && /iP(ad|hone|od)/.test(window.navigator.userAgent);
function gi(n) {
  return typeof n == "function" ? n() : S(n);
}
function Vh(n) {
  return n;
}
function fi(n) {
  return jo() ? (Fo(n), !0) : !1;
}
function Uh(n, t = !0) {
  ze() ? Ge(n) : t ? n() : pe(n);
}
function Vs(n, t, e = {}) {
  const {
    immediate: i = !0
  } = e, s = $(!1);
  let o = null;
  function a() {
    o && (clearTimeout(o), o = null);
  }
  function r() {
    s.value = !1, a();
  }
  function l(...c) {
    a(), s.value = !0, o = setTimeout(() => {
      s.value = !1, o = null, n(...c);
    }, gi(t));
  }
  return i && (s.value = !0, be && l()), fi(r), {
    isPending: Ho(s),
    start: l,
    stop: r
  };
}
function Us(n) {
  var t;
  const e = gi(n);
  return (t = e?.$el) != null ? t : e;
}
const Ys = be ? window : void 0;
function Zs(...n) {
  let t, e, i, s;
  if (jh(n[0]) || Array.isArray(n[0]) ? ([e, i, s] = n, t = Ys) : [t, e, i, s] = n, !t)
    return Fh;
  Array.isArray(e) || (e = [e]), Array.isArray(i) || (i = [i]);
  const o = [], a = () => {
    o.forEach((u) => u()), o.length = 0;
  }, r = (u, d, w, x) => (u.addEventListener(d, w, x), () => u.removeEventListener(d, w, x)), l = Xe(() => [Us(t), gi(s)], ([u, d]) => {
    a(), u && o.push(...e.flatMap((w) => i.map((x) => r(u, w, x, d))));
  }, { immediate: !0, flush: "post" }), c = () => {
    l(), a();
  };
  return fi(c), c;
}
function Yh(n, t = !1) {
  const e = $(), i = () => e.value = !!n();
  return i(), Uh(i, t), e;
}
const ss = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {}, os = "__vueuse_ssr_handlers__";
ss[os] = ss[os] || {};
var as = Object.getOwnPropertySymbols, Zh = Object.prototype.hasOwnProperty, Xh = Object.prototype.propertyIsEnumerable, Gh = (n, t) => {
  var e = {};
  for (var i in n)
    Zh.call(n, i) && t.indexOf(i) < 0 && (e[i] = n[i]);
  if (n != null && as)
    for (var i of as(n))
      t.indexOf(i) < 0 && Xh.call(n, i) && (e[i] = n[i]);
  return e;
};
function Kh(n, t, e = {}) {
  const i = e, { window: s = Ys } = i, o = Gh(i, ["window"]);
  let a;
  const r = Yh(() => s && "ResizeObserver" in s), l = () => {
    a && (a.disconnect(), a = void 0);
  }, c = Xe(() => Us(n), (d) => {
    l(), r.value && s && d && (a = new ResizeObserver(t), a.observe(d, o));
  }, { immediate: !0, flush: "post" }), u = () => {
    l(), c();
  };
  return fi(u), {
    isSupported: r,
    stop: u
  };
}
var rs;
(function(n) {
  n.UP = "UP", n.RIGHT = "RIGHT", n.DOWN = "DOWN", n.LEFT = "LEFT", n.NONE = "NONE";
})(rs || (rs = {}));
var qh = Object.defineProperty, ls = Object.getOwnPropertySymbols, Jh = Object.prototype.hasOwnProperty, Qh = Object.prototype.propertyIsEnumerable, cs = (n, t, e) => t in n ? qh(n, t, { enumerable: !0, configurable: !0, writable: !0, value: e }) : n[t] = e, tu = (n, t) => {
  for (var e in t || (t = {}))
    Jh.call(t, e) && cs(n, e, t[e]);
  if (ls)
    for (var e of ls(t))
      Qh.call(t, e) && cs(n, e, t[e]);
  return n;
};
const eu = {
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
tu({
  linear: Vh
}, eu);
const hs = {
  current: 0
}, us = $(0), Xs = 2e3, ds = Symbol("elZIndexContextKey"), Gs = Symbol("zIndexContextKey"), nu = (n) => {
  const t = ze() ? me(ds, hs) : hs, e = n || (ze() ? me(Gs, void 0) : void 0), i = I(() => {
    const a = S(e);
    return xe(a) ? a : Xs;
  }), s = I(() => i.value + us.value), o = () => (t.current++, us.value = t.current, s.value);
  return !be && me(ds), {
    initialZIndex: i,
    currentZIndex: s,
    nextZIndex: o
  };
};
var iu = {
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
const su = (n) => (t, e) => ou(t, e, S(n)), ou = (n, t, e) => Bh(e, n, n).replace(/\{(\w+)\}/g, (i, s) => {
  var o;
  return `${(o = t?.[s]) != null ? o : `{${s}}`}`;
}), au = (n) => {
  const t = I(() => S(n).name), e = Vo(n) ? n : $(n);
  return {
    lang: t,
    locale: e,
    t: su(n)
  };
}, Ks = Symbol("localeContextKey"), ru = (n) => {
  const t = n || me(Ks, $());
  return au(I(() => t.value || iu));
}, qs = "__epPropKey", Bt = (n) => n, lu = (n) => $s(n) && !!n[qs], Js = (n, t) => {
  if (!$s(n) || lu(n))
    return n;
  const { values: e, required: i, default: s, type: o, validator: a } = n, l = {
    type: o,
    required: !!i,
    validator: e || a ? (c) => {
      let u = !1, d = [];
      if (e && (d = Array.from(e), qi(n, "default") && d.push(s), u || (u = d.includes(c))), a && (u || (u = a(c))), !u && d.length > 0) {
        const w = [...new Set(d)].map((x) => JSON.stringify(x)).join(", ");
        Uo(`Invalid prop: validation failed${t ? ` for prop "${t}"` : ""}. Expected one of [${w}], got value ${JSON.stringify(c)}.`);
      }
      return u;
    } : void 0,
    [qs]: !0
  };
  return qi(n, "default") && (l.default = s), l;
}, De = (n) => Nh(Object.entries(n).map(([t, e]) => [
  t,
  Js(e, t)
])), cu = ["", "default", "small", "large"], hu = Js({
  type: String,
  values: cu,
  required: !1
}), uu = Symbol("size"), du = Symbol("emptyValuesContextKey"), gu = De({
  emptyValues: Array,
  valueOnClear: {
    type: [String, Number, Boolean, Function],
    default: void 0,
    validator: (n) => Ye(n) ? !n() : !n
  }
}), gs = (n) => Object.keys(n), xn = $();
function Qs(n, t = void 0) {
  return ze() ? me(Os, xn) : xn;
}
function to(n, t) {
  const e = Qs(), i = li(n, I(() => {
    var r;
    return ((r = e.value) == null ? void 0 : r.namespace) || fn;
  })), s = ru(I(() => {
    var r;
    return (r = e.value) == null ? void 0 : r.locale;
  })), o = nu(I(() => {
    var r;
    return ((r = e.value) == null ? void 0 : r.zIndex) || Xs;
  })), a = I(() => {
    var r;
    return S(t) || ((r = e.value) == null ? void 0 : r.size) || "";
  });
  return eo(I(() => S(e) || {})), {
    ns: i,
    locale: s,
    zIndex: o,
    size: a
  };
}
const eo = (n, t, e = !1) => {
  var i;
  const s = !!ze(), o = s ? Qs() : void 0, a = (i = void 0) != null ? i : s ? Yo : void 0;
  if (!a)
    return;
  const r = I(() => {
    const l = S(n);
    return o?.value ? fu(o.value, l) : l;
  });
  return a(Os, r), a(Ks, I(() => r.value.locale)), a(Es, I(() => r.value.namespace)), a(Gs, I(() => r.value.zIndex)), a(uu, {
    size: I(() => r.value.size || "")
  }), a(du, I(() => ({
    emptyValues: r.value.emptyValues,
    valueOnClear: r.value.valueOnClear
  }))), (e || !xn.value) && (xn.value = r.value), r;
}, fu = (n, t) => {
  const e = [.../* @__PURE__ */ new Set([...gs(n), ...gs(t)])], i = {};
  for (const s of e)
    i[s] = t[s] !== void 0 ? t[s] : n[s];
  return i;
};
var zn = (n, t) => {
  const e = n.__vccOpts || n;
  for (const [i, s] of t)
    e[i] = s;
  return e;
};
function Xn(n, t = "px") {
  if (!n)
    return "";
  if (xe(n) || Hh(n))
    return `${n}${t}`;
  if (ye(n))
    return n;
}
const no = (n, t) => (n.install = (e) => {
  for (const i of [n, ...Object.values({})])
    e.component(i.name, i);
}, n), io = (n, t) => (n.install = (e) => {
  n._context = e._context, e.config.globalProperties[t] = n;
}, n), mu = De({
  size: {
    type: Bt([Number, String])
  },
  color: {
    type: String
  }
}), pu = Tt({
  name: "ElIcon",
  inheritAttrs: !1
}), wu = /* @__PURE__ */ Tt({
  ...pu,
  props: mu,
  setup(n) {
    const t = n, e = li("icon"), i = I(() => {
      const { size: s, color: o } = t;
      return !s && !o ? {} : {
        fontSize: Fs(s) ? void 0 : Xn(s),
        "--color": o
      };
    });
    return (s, o) => (P(), E("i", Zo({
      class: S(e).b(),
      style: S(i)
    }, s.$attrs), [
      ee(s.$slots, "default")
    ], 16));
  }
});
var yu = /* @__PURE__ */ zn(wu, [["__file", "icon.vue"]]);
const kn = no(yu);
/*! Element Plus Icons Vue v2.3.1 */
var vu = /* @__PURE__ */ Tt({
  name: "CircleCloseFilled",
  __name: "circle-close-filled",
  setup(n) {
    return (t, e) => (P(), E("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 1024 1024"
    }, [
      y("path", {
        fill: "currentColor",
        d: "M512 64a448 448 0 1 1 0 896 448 448 0 0 1 0-896m0 393.664L407.936 353.6a38.4 38.4 0 1 0-54.336 54.336L457.664 512 353.6 616.064a38.4 38.4 0 1 0 54.336 54.336L512 566.336 616.064 670.4a38.4 38.4 0 1 0 54.336-54.336L566.336 512 670.4 407.936a38.4 38.4 0 1 0-54.336-54.336z"
      })
    ]));
  }
}), xu = vu, ku = /* @__PURE__ */ Tt({
  name: "Close",
  __name: "close",
  setup(n) {
    return (t, e) => (P(), E("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 1024 1024"
    }, [
      y("path", {
        fill: "currentColor",
        d: "M764.288 214.592 512 466.88 259.712 214.592a31.936 31.936 0 0 0-45.12 45.12L466.752 512 214.528 764.224a31.936 31.936 0 1 0 45.12 45.184L512 557.184l252.288 252.288a31.936 31.936 0 0 0 45.12-45.12L557.12 512.064l252.288-252.352a31.936 31.936 0 1 0-45.12-45.184z"
      })
    ]));
  }
}), so = ku, bu = /* @__PURE__ */ Tt({
  name: "InfoFilled",
  __name: "info-filled",
  setup(n) {
    return (t, e) => (P(), E("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 1024 1024"
    }, [
      y("path", {
        fill: "currentColor",
        d: "M512 64a448 448 0 1 1 0 896.064A448 448 0 0 1 512 64m67.2 275.072c33.28 0 60.288-23.104 60.288-57.344s-27.072-57.344-60.288-57.344c-33.28 0-60.16 23.104-60.16 57.344s26.88 57.344 60.16 57.344M590.912 699.2c0-6.848 2.368-24.64 1.024-34.752l-52.608 60.544c-10.88 11.456-24.512 19.392-30.912 17.28a12.992 12.992 0 0 1-8.256-14.72l87.68-276.992c7.168-35.136-12.544-67.2-54.336-71.296-44.096 0-108.992 44.736-148.48 101.504 0 6.784-1.28 23.68.064 33.792l52.544-60.608c10.88-11.328 23.552-19.328 29.952-17.152a12.8 12.8 0 0 1 7.808 16.128L388.48 728.576c-10.048 32.256 8.96 63.872 55.04 71.04 67.84 0 107.904-43.648 147.456-100.416z"
      })
    ]));
  }
}), Su = bu, Cu = /* @__PURE__ */ Tt({
  name: "SuccessFilled",
  __name: "success-filled",
  setup(n) {
    return (t, e) => (P(), E("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 1024 1024"
    }, [
      y("path", {
        fill: "currentColor",
        d: "M512 64a448 448 0 1 1 0 896 448 448 0 0 1 0-896m-55.808 536.384-99.52-99.584a38.4 38.4 0 1 0-54.336 54.336l126.72 126.72a38.272 38.272 0 0 0 54.336 0l262.4-262.464a38.4 38.4 0 1 0-54.272-54.336z"
      })
    ]));
  }
}), Mu = Cu, _u = /* @__PURE__ */ Tt({
  name: "WarningFilled",
  __name: "warning-filled",
  setup(n) {
    return (t, e) => (P(), E("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 1024 1024"
    }, [
      y("path", {
        fill: "currentColor",
        d: "M512 64a448 448 0 1 1 0 896 448 448 0 0 1 0-896m0 192a58.432 58.432 0 0 0-58.24 63.744l23.36 256.384a35.072 35.072 0 0 0 69.76 0l23.296-256.384A58.432 58.432 0 0 0 512 256m0 512a51.2 51.2 0 1 0 0-102.4 51.2 51.2 0 0 0 0 102.4"
      })
    ]));
  }
}), Tu = _u;
const oo = Bt([
  String,
  Object,
  Function
]), zu = {
  Close: so
}, Ru = {
  Close: so
}, bn = {
  success: Mu,
  warning: Tu,
  error: xu,
  info: Su
}, Lu = (n) => n, mn = {
  esc: "Escape",
  delete: "Delete",
  backspace: "Backspace"
}, Pu = De({
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
    type: Bt([String, Object, Array])
  },
  offset: {
    type: Bt(Array),
    default: [0, 0]
  },
  badgeClass: {
    type: String
  }
}), Au = Tt({
  name: "ElBadge"
}), Du = /* @__PURE__ */ Tt({
  ...Au,
  props: Pu,
  setup(n, { expose: t }) {
    const e = n, i = li("badge"), s = I(() => e.isDot ? "" : xe(e.value) && xe(e.max) ? e.max < e.value ? `${e.max}+` : `${e.value}` : `${e.value}`), o = I(() => {
      var a, r, l, c, u;
      return [
        {
          backgroundColor: e.color,
          marginRight: Xn(-((r = (a = e.offset) == null ? void 0 : a[0]) != null ? r : 0)),
          marginTop: Xn((c = (l = e.offset) == null ? void 0 : l[1]) != null ? c : 0)
        },
        (u = e.badgeStyle) != null ? u : {}
      ];
    });
    return t({
      content: s
    }), (a, r) => (P(), E("div", {
      class: it(S(i).b())
    }, [
      ee(a.$slots, "default"),
      p(Qn, {
        name: `${S(i).namespace.value}-zoom-in-center`,
        persisted: ""
      }, {
        default: zt(() => [
          Fe(y("sup", {
            class: it([
              S(i).e("content"),
              S(i).em("content", a.type),
              S(i).is("fixed", !!a.$slots.default),
              S(i).is("dot", a.isDot),
              S(i).is("hide-zero", !a.showZero && e.value === 0),
              a.badgeClass
            ]),
            style: lt(S(o))
          }, [
            ee(a.$slots, "content", { value: S(s) }, () => [
              Xo(N(S(s)), 1)
            ])
          ], 6), [
            [pn, !a.hidden && (S(s) || a.isDot || a.$slots.content)]
          ])
        ]),
        _: 3
      }, 8, ["name"])
    ], 2));
  }
});
var Iu = /* @__PURE__ */ zn(Du, [["__file", "badge.vue"]]);
const Ou = no(Iu), Eu = De({
  a11y: {
    type: Boolean,
    default: !0
  },
  locale: {
    type: Bt(Object)
  },
  size: hu,
  button: {
    type: Bt(Object)
  },
  experimentalFeatures: {
    type: Bt(Object)
  },
  keyboardNavigation: {
    type: Boolean,
    default: !0
  },
  message: {
    type: Bt(Object)
  },
  zIndex: Number,
  namespace: {
    type: String,
    default: "el"
  },
  ...gu
}), Ut = {};
Tt({
  name: "ElConfigProvider",
  props: Eu,
  setup(n, { slots: t }) {
    Xe(() => n.message, (i) => {
      Object.assign(Ut, i ?? {});
    }, { immediate: !0, deep: !0 });
    const e = eo(n);
    return () => ee(t, "default", { config: e?.value });
  }
});
const ao = ["success", "info", "warning", "error"], Pt = Lu({
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
  appendTo: be ? document.body : void 0
}), $u = De({
  customClass: {
    type: String,
    default: Pt.customClass
  },
  center: {
    type: Boolean,
    default: Pt.center
  },
  dangerouslyUseHTMLString: {
    type: Boolean,
    default: Pt.dangerouslyUseHTMLString
  },
  duration: {
    type: Number,
    default: Pt.duration
  },
  icon: {
    type: oo,
    default: Pt.icon
  },
  id: {
    type: String,
    default: Pt.id
  },
  message: {
    type: Bt([
      String,
      Object,
      Function
    ]),
    default: Pt.message
  },
  onClose: {
    type: Bt(Function),
    default: Pt.onClose
  },
  showClose: {
    type: Boolean,
    default: Pt.showClose
  },
  type: {
    type: String,
    values: ao,
    default: Pt.type
  },
  plain: {
    type: Boolean,
    default: Pt.plain
  },
  offset: {
    type: Number,
    default: Pt.offset
  },
  zIndex: {
    type: Number,
    default: Pt.zIndex
  },
  grouping: {
    type: Boolean,
    default: Pt.grouping
  },
  repeatNum: {
    type: Number,
    default: Pt.repeatNum
  }
}), Wu = {
  destroy: () => !0
}, Yt = Go([]), Bu = (n) => {
  const t = Yt.findIndex((s) => s.id === n), e = Yt[t];
  let i;
  return t > 0 && (i = Yt[t - 1]), { current: e, prev: i };
}, Nu = (n) => {
  const { prev: t } = Bu(n);
  return t ? t.vm.exposed.bottom.value : 0;
}, Hu = (n, t) => Yt.findIndex((i) => i.id === n) > 0 ? 16 : t, ju = Tt({
  name: "ElMessage"
}), Fu = /* @__PURE__ */ Tt({
  ...ju,
  props: $u,
  emits: Wu,
  setup(n, { expose: t }) {
    const e = n, { Close: i } = Ru, { ns: s, zIndex: o } = to("message"), { currentZIndex: a, nextZIndex: r } = o, l = $(), c = $(!1), u = $(0);
    let d;
    const w = I(() => e.type ? e.type === "error" ? "danger" : e.type : "info"), x = I(() => {
      const F = e.type;
      return { [s.bm("icon", F)]: F && bn[F] };
    }), C = I(() => e.icon || bn[e.type] || ""), f = I(() => Nu(e.id)), m = I(() => Hu(e.id, e.offset) + f.value), R = I(() => u.value + m.value), A = I(() => ({
      top: `${m.value}px`,
      zIndex: a.value
    }));
    function M() {
      e.duration !== 0 && ({ stop: d } = Vs(() => {
        U();
      }, e.duration));
    }
    function j() {
      d?.();
    }
    function U() {
      c.value = !1;
    }
    function V({ code: F }) {
      F === mn.esc && U();
    }
    return Ge(() => {
      M(), r(), c.value = !0;
    }), Xe(() => e.repeatNum, () => {
      j(), M();
    }), Zs(document, "keydown", V), Kh(l, () => {
      u.value = l.value.getBoundingClientRect().height;
    }), t({
      visible: c,
      bottom: R,
      close: U
    }), (F, Y) => (P(), Ct(Qn, {
      name: S(s).b("fade"),
      onBeforeLeave: F.onClose,
      onAfterLeave: (K) => F.$emit("destroy"),
      persisted: ""
    }, {
      default: zt(() => [
        Fe(y("div", {
          id: F.id,
          ref_key: "messageRef",
          ref: l,
          class: it([
            S(s).b(),
            { [S(s).m(F.type)]: F.type },
            S(s).is("center", F.center),
            S(s).is("closable", F.showClose),
            S(s).is("plain", F.plain),
            F.customClass
          ]),
          style: lt(S(A)),
          role: "alert",
          onMouseenter: j,
          onMouseleave: M
        }, [
          F.repeatNum > 1 ? (P(), Ct(S(Ou), {
            key: 0,
            value: F.repeatNum,
            type: S(w),
            class: it(S(s).e("badge"))
          }, null, 8, ["value", "type", "class"])) : H("v-if", !0),
          S(C) ? (P(), Ct(S(kn), {
            key: 1,
            class: it([S(s).e("icon"), S(x)])
          }, {
            default: zt(() => [
              (P(), Ct(fe(S(C))))
            ]),
            _: 1
          }, 8, ["class"])) : H("v-if", !0),
          ee(F.$slots, "default", {}, () => [
            F.dangerouslyUseHTMLString ? (P(), E(Ht, { key: 1 }, [
              H(" Caution here, message could've been compromised, never use user's input as message "),
              y("p", {
                class: it(S(s).e("content")),
                innerHTML: F.message
              }, null, 10, ["innerHTML"])
            ], 2112)) : (P(), E("p", {
              key: 0,
              class: it(S(s).e("content"))
            }, N(F.message), 3))
          ]),
          F.showClose ? (P(), Ct(S(kn), {
            key: 2,
            class: it(S(s).e("closeBtn")),
            onClick: mt(U, ["stop"])
          }, {
            default: zt(() => [
              p(S(i))
            ]),
            _: 1
          }, 8, ["class", "onClick"])) : H("v-if", !0)
        ], 46, ["id"]), [
          [pn, c.value]
        ])
      ]),
      _: 3
    }, 8, ["name", "onBeforeLeave", "onAfterLeave"]));
  }
});
var Vu = /* @__PURE__ */ zn(Fu, [["__file", "message.vue"]]);
let Uu = 1;
const ro = (n) => {
  const t = !n || ye(n) || Ve(n) || Ye(n) ? { message: n } : n, e = {
    ...Pt,
    ...t
  };
  if (!e.appendTo)
    e.appendTo = document.body;
  else if (ye(e.appendTo)) {
    let i = document.querySelector(e.appendTo);
    Zn(i) || (i = document.body), e.appendTo = i;
  }
  return ns(Ut.grouping) && !e.grouping && (e.grouping = Ut.grouping), xe(Ut.duration) && e.duration === 3e3 && (e.duration = Ut.duration), xe(Ut.offset) && e.offset === 16 && (e.offset = Ut.offset), ns(Ut.showClose) && !e.showClose && (e.showClose = Ut.showClose), e;
}, Yu = (n) => {
  const t = Yt.indexOf(n);
  if (t === -1)
    return;
  Yt.splice(t, 1);
  const { handler: e } = n;
  e.close();
}, Zu = ({ appendTo: n, ...t }, e) => {
  const i = `message_${Uu++}`, s = t.onClose, o = document.createElement("div"), a = {
    ...t,
    id: i,
    onClose: () => {
      s?.(), Yu(u);
    },
    onDestroy: () => {
      wn(null, o);
    }
  }, r = p(Vu, a, Ye(a.message) || Ve(a.message) ? {
    default: Ye(a.message) ? a.message : () => a.message
  } : null);
  r.appContext = e || Le._context, wn(r, o), n.appendChild(o.firstElementChild);
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
}, Le = (n = {}, t) => {
  if (!be)
    return { close: () => {
    } };
  const e = ro(n);
  if (e.grouping && Yt.length) {
    const s = Yt.find(({ vnode: o }) => {
      var a;
      return ((a = o.props) == null ? void 0 : a.message) === e.message;
    });
    if (s)
      return s.props.repeatNum += 1, s.props.type = e.type, s.handler;
  }
  if (xe(Ut.max) && Yt.length >= Ut.max)
    return { close: () => {
    } };
  const i = Zu(e, t);
  return Yt.push(i), i.handler;
};
ao.forEach((n) => {
  Le[n] = (t = {}, e) => {
    const i = ro(t);
    return Le({ ...i, type: n }, e);
  };
});
function Xu(n) {
  for (const t of Yt)
    (!n || n === t.props.type) && t.handler.close();
}
Le.closeAll = Xu;
Le._context = null;
const Gu = io(Le, "$message"), lo = [
  "success",
  "info",
  "warning",
  "error"
], Ku = De({
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
    type: oo
  },
  id: {
    type: String,
    default: ""
  },
  message: {
    type: Bt([
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
    type: Bt(Function),
    default: () => {
    }
  },
  onClose: {
    type: Bt(Function),
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
    values: [...lo, ""],
    default: ""
  },
  zIndex: Number
}), qu = {
  destroy: () => !0
}, Ju = Tt({
  name: "ElNotification"
}), Qu = /* @__PURE__ */ Tt({
  ...Ju,
  props: Ku,
  emits: qu,
  setup(n, { expose: t }) {
    const e = n, { ns: i, zIndex: s } = to("notification"), { nextZIndex: o, currentZIndex: a } = s, { Close: r } = zu, l = $(!1);
    let c;
    const u = I(() => {
      const M = e.type;
      return M && bn[e.type] ? i.m(M) : "";
    }), d = I(() => e.type && bn[e.type] || e.icon), w = I(() => e.position.endsWith("right") ? "right" : "left"), x = I(() => e.position.startsWith("top") ? "top" : "bottom"), C = I(() => {
      var M;
      return {
        [x.value]: `${e.offset}px`,
        zIndex: (M = e.zIndex) != null ? M : a.value
      };
    });
    function f() {
      e.duration > 0 && ({ stop: c } = Vs(() => {
        l.value && R();
      }, e.duration));
    }
    function m() {
      c?.();
    }
    function R() {
      l.value = !1;
    }
    function A({ code: M }) {
      M === mn.delete || M === mn.backspace ? m() : M === mn.esc ? l.value && R() : f();
    }
    return Ge(() => {
      f(), o(), l.value = !0;
    }), Zs(document, "keydown", A), t({
      visible: l,
      close: R
    }), (M, j) => (P(), Ct(Qn, {
      name: S(i).b("fade"),
      onBeforeLeave: M.onClose,
      onAfterLeave: (U) => M.$emit("destroy"),
      persisted: ""
    }, {
      default: zt(() => [
        Fe(y("div", {
          id: M.id,
          class: it([S(i).b(), M.customClass, S(w)]),
          style: lt(S(C)),
          role: "alert",
          onMouseenter: m,
          onMouseleave: f,
          onClick: M.onClick
        }, [
          S(d) ? (P(), Ct(S(kn), {
            key: 0,
            class: it([S(i).e("icon"), S(u)])
          }, {
            default: zt(() => [
              (P(), Ct(fe(S(d))))
            ]),
            _: 1
          }, 8, ["class"])) : H("v-if", !0),
          y("div", {
            class: it(S(i).e("group"))
          }, [
            y("h2", {
              class: it(S(i).e("title")),
              textContent: N(M.title)
            }, null, 10, ["textContent"]),
            Fe(y("div", {
              class: it(S(i).e("content")),
              style: lt(M.title ? void 0 : { margin: 0 })
            }, [
              ee(M.$slots, "default", {}, () => [
                M.dangerouslyUseHTMLString ? (P(), E(Ht, { key: 1 }, [
                  H(" Caution here, message could've been compromised, never use user's input as message "),
                  y("p", { innerHTML: M.message }, null, 8, ["innerHTML"])
                ], 2112)) : (P(), E("p", { key: 0 }, N(M.message), 1))
              ])
            ], 6), [
              [pn, M.message]
            ]),
            M.showClose ? (P(), Ct(S(kn), {
              key: 0,
              class: it(S(i).e("closeBtn")),
              onClick: mt(R, ["stop"])
            }, {
              default: zt(() => [
                p(S(r))
              ]),
              _: 1
            }, 8, ["class", "onClick"])) : H("v-if", !0)
          ], 2)
        ], 46, ["id", "onClick"]), [
          [pn, l.value]
        ])
      ]),
      _: 3
    }, 8, ["name", "onBeforeLeave", "onAfterLeave"]));
  }
});
var td = /* @__PURE__ */ zn(Qu, [["__file", "notification.vue"]]);
const Sn = {
  "top-left": [],
  "top-right": [],
  "bottom-left": [],
  "bottom-right": []
}, Gn = 16;
let ed = 1;
const Pe = function(n = {}, t) {
  if (!be)
    return { close: () => {
    } };
  (ye(n) || Ve(n)) && (n = { message: n });
  const e = n.position || "top-right";
  let i = n.offset || 0;
  Sn[e].forEach(({ vm: u }) => {
    var d;
    i += (((d = u.el) == null ? void 0 : d.offsetHeight) || 0) + Gn;
  }), i += Gn;
  const s = `notification_${ed++}`, o = n.onClose, a = {
    ...n,
    offset: i,
    id: s,
    onClose: () => {
      nd(s, e, o);
    }
  };
  let r = document.body;
  Zn(n.appendTo) ? r = n.appendTo : ye(n.appendTo) && (r = document.querySelector(n.appendTo)), Zn(r) || (r = document.body);
  const l = document.createElement("div"), c = p(td, a, Ye(a.message) ? a.message : Ve(a.message) ? () => a.message : null);
  return c.appContext = Fs(t) ? Pe._context : t, c.props.onDestroy = () => {
    wn(null, l);
  }, wn(c, l), Sn[e].push({ vm: c }), r.appendChild(l.firstElementChild), {
    close: () => {
      c.component.exposed.visible.value = !1;
    }
  };
};
lo.forEach((n) => {
  Pe[n] = (t = {}, e) => ((ye(t) || Ve(t)) && (t = {
    message: t
  }), Pe({ ...t, type: n }, e));
});
function nd(n, t, e) {
  const i = Sn[t], s = i.findIndex(({ vm: c }) => {
    var u;
    return ((u = c.component) == null ? void 0 : u.props.id) === n;
  });
  if (s === -1)
    return;
  const { vm: o } = i[s];
  if (!o)
    return;
  e?.(o);
  const a = o.el.offsetHeight, r = t.split("-")[0];
  i.splice(s, 1);
  const l = i.length;
  if (!(l < 1))
    for (let c = s; c < l; c++) {
      const { el: u, component: d } = i[c].vm, w = Number.parseInt(u.style[r], 10) - a - Gn;
      d.props.offset = w;
    }
}
function id() {
  for (const n of Object.values(Sn))
    n.forEach(({ vm: t }) => {
      t.component.exposed.visible.value = !1;
    });
}
Pe.closeAll = id;
Pe._context = null;
const sd = io(Pe, "$notify"), It = {
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
      duration: s = 3e3,
      showClose: o = !1
    } = n;
    i === "center" ? Gu({
      message: t,
      type: e,
      duration: s,
      showClose: o,
      grouping: !0,
      customClass: `app-toast app-toast--${e}`
    }) : sd({
      message: t,
      type: e,
      position: i,
      duration: s,
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
}, od = ["disabled"], ad = {
  key: 0,
  class: "custom-button__loading"
}, rd = /* @__PURE__ */ Tt({
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
    return (e, i) => (P(), E("button", {
      class: it([
        "custom-button",
        `custom-button--${t.type || "default"}`,
        t.size ? `custom-button--${t.size}` : "custom-button--medium",
        { "custom-button--loading": t.loading },
        { "custom-button--circle": t.circle },
        { "custom-button--plain": t.plain }
      ]),
      disabled: n.loading || n.disabled,
      onClick: i[0] || (i[0] = (s) => e.$emit("click", s))
    }, [
      n.loading ? (P(), E("div", ad, i[1] || (i[1] = [
        y(
          "svg",
          {
            class: "custom-button__spinner",
            viewBox: "0 0 50 50"
          },
          [
            y("circle", {
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
      ]))) : H("v-if", !0),
      ee(e.$slots, "default", {}, void 0, !0)
    ], 10, od));
  }
}), Jt = /* @__PURE__ */ qe(rd, [["__scopeId", "data-v-9497085f"]]), ld = {
  key: 1,
  class: "splitter-panel second-panel"
}, cd = /* @__PURE__ */ Tt({
  name: "Splitter",
  __name: "index",
  props: {
    defaultSize: { default: "0%" },
    minSize: { default: "0%" },
    maxSize: { default: "100%" },
    firstCollapsed: { type: Boolean, default: !1 },
    secondCollapsed: { type: Boolean, default: !1 }
  },
  setup(n) {
    const t = n, e = $(null), i = (A) => typeof A == "string" && A.includes("%"), s = (A) => typeof A == "string" ? parseFloat(A.replace("%", "")) : A, o = $(s(t.defaultSize)), a = I(() => i(t.defaultSize)), r = I(() => a.value ? `${o.value}%` : `${o.value}px`), l = I(() => t.firstCollapsed ? "0px" : t.secondCollapsed ? "100%" : r.value);
    let c = !1, u = 0, d = 0;
    const w = () => e.value?.offsetWidth || 0, x = (A) => {
      const M = w();
      return A / M * 100;
    }, C = (A) => {
      const M = w();
      return A * M / 100;
    }, f = (A) => {
      A.preventDefault(), A.stopPropagation(), !(!e.value || t.firstCollapsed || t.secondCollapsed) && (c = !0, u = A.clientX, d = a.value ? C(o.value) : o.value, document.addEventListener("mousemove", m), document.addEventListener("mouseup", R));
    }, m = (A) => {
      if (A.preventDefault(), A.stopPropagation(), !c || !e.value) return;
      const M = A.clientX - u;
      let j = d + M;
      const U = a.value ? C(s(t.minSize)) : s(t.minSize), V = a.value ? C(s(t.maxSize)) : s(t.maxSize);
      j = Math.max(U, Math.min(V, j)), o.value = a.value ? x(j) : j;
    }, R = () => {
      c = !1, document.removeEventListener("mousemove", m), document.removeEventListener("mouseup", R);
    };
    return Jn(() => {
      document.removeEventListener("mousemove", m), document.removeEventListener("mouseup", R);
    }), (A, M) => (P(), E(
      "main",
      {
        ref_key: "splitterRef",
        ref: e,
        class: "splitter-container"
      },
      [
        y(
          "div",
          {
            class: "splitter-panel first-panel",
            style: lt({ width: S(l), minWidth: S(l) })
          },
          [
            ee(A.$slots, "first", {}, void 0, !0)
          ],
          4
          /* STYLE */
        ),
        !A.firstCollapsed && !A.secondCollapsed ? (P(), E(
          "div",
          {
            key: 0,
            class: "splitter-divider",
            style: lt({ left: S(l) }),
            role: "separator",
            "aria-orientation": "vertical",
            onMousedown: f
          },
          M[0] || (M[0] = [
            y(
              "div",
              { class: "splitter-divider-line" },
              null,
              -1
              /* HOISTED */
            )
          ]),
          36
          /* STYLE, NEED_HYDRATION */
        )) : H("v-if", !0),
        A.secondCollapsed ? H("v-if", !0) : (P(), E("div", ld, [
          ee(A.$slots, "second", {}, void 0, !0)
        ]))
      ],
      512
      /* NEED_PATCH */
    ));
  }
}), hd = /* @__PURE__ */ qe(cd, [["__scopeId", "data-v-79af4cc0"]]), ud = `你正在执行图片原文转写。像在 AI 聊天中直接阅读图片一样，按视觉阅读顺序从上到下完整读取所有可见文字。
要求：
1. 忠实保留原语言、标点、数字、大小写、标题、段落、列表、代码和表格内容，不翻译、不概括、不解释；
2. 标题、说明文字、每个独立段落和每个列表项之间各空一行，保持图片本身的语义分段；
3. 只输出纯文本原文，不输出 JSON，不添加 Markdown 标题、加粗、代码围栏或“识别结果”等额外说明；
4. 输出前重新检查图片的左、右、上、下区域，确保没有只读取标题、漏掉小字、列表项或末尾内容。`, rn = {
  auto: "自动判断图片文字语言",
  zh: "优先按简体中文识别",
  "zh-tw": "优先按繁体中文识别",
  en: "优先按英文识别",
  ja: "优先按日文识别",
  ko: "优先按韩文识别"
}, dd = /* @__PURE__ */ new Set([
  "title",
  "paragraph",
  "list",
  "code",
  "table"
]), Kn = (n, t, e) => typeof n == "string" && dd.has(n) ? n : e === 0 && t.length <= 80 && !/[。！？.!?]\s*$/.test(t) ? "title" : /^\s*(?:[-*+•·]|\d+[.)、）])\s+/m.test(t) ? "list" : "paragraph", gd = /^\s*(?:[-*+•·]|\d+[.)、）])\s+/, ln = (n) => n.replace(/^\s{0,3}#{1,6}\s+/, "").replace(/^\s*>\s?/, "").replace(/(\*\*|__|~~)(.*?)\1/g, "$2").trim(), fd = (n) => {
  const e = n.trim().replace(/^```(?:text|plaintext|markdown)?\s*\n?/i, "").replace(/\n?```\s*$/i, "").split(/\n{2,}/).map((s) => s.trim()).filter(Boolean), i = [];
  for (const s of e) {
    const o = s.split(/\n/).map((c) => c.trim()).filter(Boolean);
    if (o.length === 0) continue;
    if (o.every((c) => gd.test(c))) {
      for (const c of o)
        i.push({
          type: "list",
          text: ln(c)
        });
      continue;
    }
    const a = ln(o[0]);
    if (i.length === 0 && o.length > 1 && a.length <= 100 && !/[。！？.!?]\s*$/.test(a)) {
      i.push({ type: "title", text: a });
      const c = o.slice(1).map(ln).join(" ").trim();
      c && i.push({
        type: Kn(void 0, c, i.length),
        text: c
      });
      continue;
    }
    const l = o.map(ln).join(" ").trim();
    l && i.push({
      type: Kn(void 0, l, i.length),
      text: l
    });
  }
  return i;
}, md = (n) => {
  const t = n.match(/```(?:json)?\s*([\s\S]*?)```/i)?.[1]?.trim();
  if (t?.startsWith("{") && t.endsWith("}") || t?.startsWith("[") && t.endsWith("]"))
    return t;
  const e = n.indexOf("{"), i = n.lastIndexOf("}"), s = n.indexOf("["), o = n.lastIndexOf("]");
  return s >= 0 && o > s && (e < 0 || s < e) ? n.slice(s, o + 1) : e >= 0 && i > e ? n.slice(e, i + 1) : null;
}, pd = (n) => {
  const t = n.trim();
  if (!t)
    throw new Error("AI_OCR_EMPTY_RESPONSE");
  const e = md(t);
  let i = null;
  if (e)
    try {
      i = JSON.parse(e);
    } catch {
      i = null;
    }
  const s = typeof i?.text == "string" ? i.text.trim() : "", a = (Array.isArray(i?.sections) ? i.sections : []).map((c, u) => {
    if (!c || typeof c != "object") return null;
    const d = c, w = typeof d.text == "string" ? d.text.trim() : "";
    return w ? {
      type: Kn(d.type, w, u),
      text: w
    } : null;
  }).filter((c) => !!c), r = a.length > 0 ? a : fd(s || t);
  return {
    text: r.map((c) => c.text).join(`

`) || s || t,
    sections: r
  };
}, qn = (n) => n.replace(/[\s\p{P}\p{S}]/gu, "").length, wd = (n) => qn(n.text) < 180 && n.sections.length <= 2, fs = (n) => n && n.split(/[\\/]/).filter(Boolean).pop() || "", yd = async (n, t) => {
  const e = await qa(), i = await Ja(e);
  if (!i.selectedMmprojPath)
    throw new Error("AI_OCR_VISION_MODEL_UNAVAILABLE");
  const s = async (u) => {
    const d = await _s({
      messages: [
        { role: "system", content: ud },
        {
          role: "user",
          content: [
            {
              type: "text",
              text: u ? `${rn[t] || rn.auto}。上一次转写可能不完整，请重新独立阅读整张图片，尤其检查标题之后、列表和底部的所有文字。只输出完整原文。` : `${rn[t] || rn.auto}。请完整转写这张图片中的全部文字，只输出原文。`
            },
            {
              type: "image_url",
              image_url: { url: n }
            }
          ]
        }
      ],
      enableThinking: !1
    });
    return pd(d.content);
  }, o = await s(!1), a = wd(o) ? await s(!0) : null, r = a && qn(a.text) > qn(o.text) ? a : o, l = await Ms().catch(() => null), c = fs(l?.modelPath) || fs(i.selectedModelPath) || "Local Vision";
  return {
    text: r.text,
    sections: r.sections,
    modelName: c
  };
};
async function vd(n) {
  return n.toDataURL("image/png");
}
async function co(n, t = "auto") {
  const e = Date.now();
  pt.log("[RapidOCR] recognizeFromImageData start", {
    imageDataLength: n.length,
    language: t
  });
  try {
    const i = await b(
      "recognize_text_from_image",
      {
        imageData: n,
        engine: "rapidocr",
        language: t
      }
    ), s = ho(i.blocks), o = typeof i.full_text == "string" && i.full_text || typeof i.text == "string" && i.text || s.map((r) => r.text).join(`
`), a = {
      blocks: s,
      full_text: o,
      text: o,
      language: typeof i.language == "string" && i.language || ii(o),
      confidence: Number(i.confidence || 0),
      engine: typeof i.engine == "string" ? i.engine : "rapidocr"
    };
    return pt.log("[RapidOCR] recognizeFromImageData success", {
      durationMs: Date.now() - e,
      confidence: a.confidence,
      blocks: a.blocks.length,
      textLength: a.full_text.trim().length,
      textPreview: a.full_text.trim().slice(0, 300)
    }), a;
  } catch (i) {
    throw D.error("[OCR] RapidOCR recognizeFromImageData failed", i), pt.log("[RapidOCR] recognizeFromImageData failed", {
      durationMs: Date.now() - e,
      error: i instanceof Error ? `${i.name}: ${i.message}` : String(i)
    }), i;
  }
}
function ho(n) {
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
async function xd(n) {
  const t = Date.now(), e = await vd(n);
  pt.log("[RapidOCR] recognizeFromCanvas start", {
    width: n.width,
    height: n.height
  });
  try {
    const i = await b("recognize_text_from_image", {
      imageData: e,
      engine: "rapidocr",
      language: "auto"
    }), s = ho(i.blocks), o = typeof i.full_text == "string" && i.full_text || typeof i.text == "string" && i.text || s.map((r) => r.text).join(`
`), a = {
      blocks: s,
      full_text: o,
      text: o,
      language: typeof i.language == "string" && i.language || ii(o),
      confidence: Number(i.confidence || 0),
      engine: typeof i.engine == "string" ? i.engine : "rapidocr"
    };
    return pt.log("[RapidOCR] recognizeFromCanvas success", {
      durationMs: Date.now() - t,
      confidence: a.confidence,
      blocks: a.blocks.length,
      textLength: a.full_text.trim().length,
      textPreview: a.full_text.trim().slice(0, 300)
    }), a;
  } catch (i) {
    throw D.error("[OCR] RapidOCR recognizeFromCanvas failed", i), pt.log("[RapidOCR] recognizeFromCanvas failed", {
      durationMs: Date.now() - t,
      error: i instanceof Error ? `${i.name}: ${i.message}` : String(i)
    }), i;
  }
}
async function kd() {
  return Promise.resolve();
}
async function bd() {
  return Promise.resolve();
}
const Sd = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  recognizeFromCanvas: xd,
  recognizeFromImageData: co,
  terminateOcr: bd,
  warmupOcr: kd
}, Symbol.toStringTag, { value: "Module" })), Cd = ["src", "alt"], Md = { class: "ocr-header" }, _d = {
  class: "ocr-title-copy",
  "data-tauri-drag-region": ""
}, Td = {
  class: "ocr-window-title",
  "data-tauri-drag-region": ""
}, zd = { "data-tauri-drag-region": "" }, Rd = {
  class: "ocr-source-inline",
  "data-tauri-drag-region": ""
}, Ld = {
  class: "ocr-source-name",
  "data-tauri-drag-region": ""
}, Pd = { "data-tauri-drag-region": "" }, Ad = { class: "ocr-title-actions" }, Dd = ["title"], Id = { class: "ocr-window-controls" }, Od = ["title"], Ed = ["title"], $d = ["title"], Wd = ["title"], Bd = { class: "ocr-preview-pane" }, Nd = { class: "ocr-pane-header" }, Hd = { class: "ocr-pane-heading" }, jd = { class: "ocr-pane-header-actions" }, Fd = ["title"], Vd = { class: "ocr-preview-canvas" }, Ud = ["src", "alt"], Yd = ["aria-label"], Zd = ["onClick"], Xd = { class: "ocr-record-pane" }, Gd = { class: "ocr-pane-header result-header" }, Kd = { class: "ocr-pane-heading" }, qd = { key: 0 }, Jd = { key: 1 }, Qd = { class: "ocr-pane-header-actions" }, tg = ["title"], eg = {
  key: 0,
  class: "ocr-state"
}, ng = { class: "ocr-ai-orbit" }, ig = {
  key: 1,
  class: "ocr-state error"
}, sg = {
  key: 2,
  class: "ocr-state muted"
}, og = {
  key: 3,
  class: "ocr-result-scroll"
}, ag = {
  key: 0,
  class: "ocr-selection-translation"
}, rg = { class: "ocr-translation-section" }, lg = { class: "ocr-translation-label" }, cg = { class: "ocr-translation-source" }, hg = { class: "ocr-translation-section result" }, ug = { class: "ocr-translation-label" }, dg = ["textContent"], gg = ["onClick"], fg = { class: "ocr-record-header" }, mg = ["aria-pressed", "title", "onClick"], pg = { key: 1 }, wg = { class: "ocr-record-kind" }, yg = {
  key: 0,
  class: "ocr-record-score"
}, vg = ["textContent"], xg = {
  key: 0,
  class: "ocr-record-translation"
}, kg = { class: "ocr-translation-label" }, bg = ["textContent"], Sg = { class: "ocr-action-bar" }, Cg = ["onClick"], Mg = { class: "engine-label" }, _g = ["onClick"], Tg = { class: "engine-label" }, zg = { class: "ocr-engine-btn-group relative" }, Rg = {
  key: 2,
  class: "zoom-info"
}, Lg = /* @__PURE__ */ Tt({
  __name: "index",
  setup(n) {
    const { t } = ms(), e = $(), i = $(null), s = $(""), o = $(""), a = $("pin"), r = $(""), l = $([]), c = $([]), u = $(null), d = $(!1), w = $(""), x = $("pending"), C = $(""), f = $(""), m = $(0), R = $(0), A = $({ width: 0, height: 0 }), M = $(null), j = $(!1), U = $(!1), V = $(!1), F = $(), Y = $({}), K = $("bing"), X = $(!1), tt = $(), at = $({}), q = $("auto"), kt = I(() => [
      { value: "google", label: "Google", short: "G" },
      { value: "bing", label: t("translate.bingTranslate"), short: "B" },
      {
        value: "offline",
        label: t("translate.offlineTranslate"),
        short: t("translate.offlineMark")
      },
      {
        value: "local-ai",
        label: t("translate.localAiTranslate"),
        short: "AI"
      }
    ]), rt = I(() => [
      { value: "auto", label: t("pin.ocrLanguageAuto") },
      { value: "zh", label: t("pin.ocrLanguageZh") },
      { value: "zh-tw", label: t("pin.ocrLanguageZhTw") },
      { value: "en", label: t("pin.ocrLanguageEn") },
      { value: "ja", label: t("pin.ocrLanguageJa") },
      { value: "ko", label: t("pin.ocrLanguageKo") }
    ]), Z = (h) => {
      const v = typeof h == "string" ? h.trim().toLowerCase() : "";
      return v === "auto" || v === "zh" || v === "zh-tw" || v === "en" || v === "ja" || v === "ko" ? v : "auto";
    }, et = I(() => rt.value.find((h) => h.value === q.value)?.label || t("pin.ocrLanguageAuto")), dt = I(() => t("pin.translationResult")), wt = (h, v) => {
      if (!h) {
        v.value = {};
        return;
      }
      const T = h.getBoundingClientRect(), Q = 180, G = 8, xt = Math.min(
        Math.max(
          T.left + T.width / 2,
          G + Q / 2
        ),
        window.innerWidth - G - Q / 2
      );
      v.value = {
        left: `${xt}px`,
        bottom: `${Math.max(8, window.innerHeight - T.top + 8)}px`
      };
    }, ot = () => {
      V.value && wt(F.value, Y), X.value && wt(
        tt.value,
        at
      );
    }, gt = $(1), O = $(!1), ft = $(!1);
    let B = null;
    const yt = $(!1), vt = $({ x: 0, y: 0 }), bt = $(!0), Nt = $({ width: 0, height: 0 });
    let le = null, Dt = 0;
    const _ = $(""), nt = I(() => ({
      width: "100%",
      height: a.value === "ocr" ? "auto" : "100%",
      flex: a.value === "ocr" ? "1 1 auto" : void 0,
      minHeight: a.value === "ocr" ? "120px" : void 0,
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      overflow: "hidden"
    })), _t = I(() => ({
      width: "100%",
      height: "100%",
      objectFit: "contain"
    })), ct = I(() => m.value > 0 && R.value > 0 ? `${m.value} × ${R.value}` : t("pin.screenshotPreview")), Lt = I(() => d.value ? t("pin.recognizing") : w.value ? t("pin.recognizeFailed") : r.value.trim() ? t("pin.recognizeSuccess") : t("pin.noTextRecognized")), Rt = I(() => d.value ? t("pin.aiRecognizing") : (x.value === "ai", t("pin.aiVision"))), Zt = I(() => {
      const h = Rt.value;
      return C.value ? `${h} · ${C.value}` : h;
    }), k = I(
      () => l.value.filter((h) => h.selected)
    ), W = I(() => d.value && !r.value.trim() && c.value.length === 0 ? t("pin.selectableTextPreparing") : c.value.length > 0 || r.value.trim() ? t("pin.nativeTextSelectionHint") : ""), ht = (h) => m.value <= 0 || R.value <= 0 ? { display: "none" } : {
      position: "absolute",
      left: `${h.x / m.value * 100}%`,
      top: `${h.y / R.value * 100}%`,
      width: `${h.width / m.value * 100}%`,
      height: `${h.height / R.value * 100}%`
    }, ut = (h) => h.replace(/[\s\p{P}\p{S}]/gu, "").toLowerCase(), J = I(
      () => l.value.map((h) => ({
        id: h.id,
        normalized: ut(h.text)
      }))
    ), St = I(() => {
      const h = /* @__PURE__ */ new Map(), v = J.value;
      for (let T = 0; T < c.value.length; T++) {
        const Q = ut(c.value[T].text);
        let G = null;
        if (Q.length >= 2) {
          for (const xt of v)
            if (xt.normalized.includes(Q)) {
              G = xt.id;
              break;
            }
        }
        h.set(T, G);
      }
      return h;
    }), Et = I(() => {
      const h = /* @__PURE__ */ new Set();
      if (!u.value) return h;
      for (const [v, T] of St.value)
        T === u.value && h.add(v);
      return h;
    }), At = (h) => {
      const v = St.value.get(h);
      v && u.value === v ? u.value = null : u.value = v ?? null;
    }, Ie = (h) => {
      u.value = u.value === h ? null : h;
    }, ne = I(() => k.value.length), Xt = (h) => t(`pin.sectionKinds.${h}`), mi = (h) => (h.translatedText || h.text).trim(), pi = (h) => h.map(mi).filter(Boolean).join(`

`), Je = () => {
      r.value = pi(l.value);
    }, uo = () => {
      const h = /* @__PURE__ */ new Date(), v = (T) => T.toString().padStart(2, "0");
      return `${t("pin.screenshotPrefix")} ${h.getFullYear()}-${v(h.getMonth() + 1)}-${v(h.getDate())} ${v(h.getHours())}.${v(h.getMinutes())}.${v(h.getSeconds())}.png`;
    }, go = I(() => {
      const h = Math.min(
        Nt.value.width,
        Nt.value.height
      );
      let v = 1;
      return h < 300 && (v = Math.max(0.4, h / 300)), {
        left: `${vt.value.x}px`,
        top: `${vt.value.y}px`,
        transform: `scale(${v})`,
        transformOrigin: "top left"
      };
    }), fo = (h) => {
      s.value = h, m.value = 0, R.value = 0, A.value = { width: 0, height: 0 }, a.value === "ocr" && (f.value = uo()), o.value && (URL.revokeObjectURL(o.value), o.value = "");
      try {
        const v = h.split(",")[1] || h, T = h.match(/data:([^;]+);/), Q = T ? T[1] : "image/png", G = atob(v), xt = new Uint8Array(G.length);
        for (let Vt = 0; Vt < G.length; Vt++)
          xt[Vt] = G.charCodeAt(Vt);
        const $t = new Blob([xt], { type: Q });
        o.value = URL.createObjectURL($t);
      } catch (v) {
        D.error("[PIN窗口] 转换 Blob URL 失败", v), o.value = h;
      }
    }, wi = async () => {
      await pe(), await new Promise((h) => requestAnimationFrame(() => h()));
      try {
        await i.value?.emit("pin-window-ready");
      } catch (h) {
        D.error("[PIN窗口] 发送 ready 事件失败", h);
      }
    }, yi = (h) => {
      if (!h?.imageData)
        return D.error("[PIN窗口] 收到的事件数据格式不正确", h), !1;
      const v = h.mode === "ocr" ? "ocr" : "pin", T = `${v}:${h.imageData.length}`;
      return T === _.value ? !1 : (_.value = T, a.value = v, fo(h.imageData), Ft(), a.value === "ocr" ? (vi(h.text || ""), w.value = "", Rn()) : (Dt++, d.value = !1, w.value = "", r.value = "", l.value = [], c.value = [], u.value = null), !0);
    }, mo = (h) => {
      const v = vo(h);
      v.length === 0 && !h.text.trim() || (l.value = v.length > 0 ? v : xi(h.text), Je(), x.value = "ai", C.value = h.modelName);
    }, po = async (h) => {
      try {
        const v = await co(
          s.value,
          q.value === "auto" ? "auto" : q.value
        );
        if (h !== Dt) return;
        c.value = v.blocks.filter((T) => T.text.trim()), pt.log("[Pin RapidOCR] text blocks ready", {
          requestId: h,
          blocks: c.value.length,
          confidence: v.confidence
        });
      } catch (v) {
        if (h !== Dt) return;
        c.value = [], pt.log("[Pin RapidOCR] text blocks failed (fallback)", {
          requestId: h,
          error: v instanceof Error ? `${v.name}: ${v.message}` : String(v)
        });
      }
    }, Rn = async () => {
      if (!s.value) return;
      const h = ++Dt;
      M.value = null, d.value = !0, w.value = "", x.value = "pending", C.value = "", c.value = [], u.value = null;
      const v = Date.now();
      pt.log("[Pin OCR] recognize start", {
        requestId: h,
        imageDataLength: s.value.length,
        imageWidth: m.value,
        imageHeight: R.value,
        language: q.value
      }), po(h);
      try {
        const T = await yd(
          s.value,
          q.value
        );
        if (h !== Dt) return;
        if (!T.text.trim())
          throw new Error("AI_OCR_EMPTY_RESPONSE");
        mo(T), pt.log("[Pin AI OCR] recognize success", {
          requestId: h,
          durationMs: Date.now() - v,
          engine: x.value,
          textLength: r.value.length,
          textPreview: r.value.slice(0, 300)
        });
      } catch (T) {
        if (h !== Dt) return;
        if (D.error("[PIN窗口] AI OCR 识别失败", T), pt.log("[Pin AI OCR] recognize failed", {
          requestId: h,
          durationMs: Date.now() - v,
          error: xo(T)
        }), r.value.trim()) {
          w.value = "";
          return;
        }
        w.value = t("pin.recognizeFailed"), r.value = "", l.value = [], u.value = null, It.error(t("pin.recognizeFailed"));
      } finally {
        h === Dt && (d.value = !1);
      }
    }, vi = (h) => {
      const v = h.trim();
      r.value = v, l.value = xi(v), c.value = [], u.value = null;
    }, xi = (h) => h.split(/\n{2,}|\n/).map((v, T) => yo(v, T)).filter((v) => v.text.trim()), wo = (h, v) => v === 0 && h.length <= 80 && !/[。！？.!?]\s*$/.test(h) ? "title" : /^\s*(?:[-*+•·]|\d+[.)、）])\s+/.test(h) ? "list" : "paragraph", yo = (h, v) => ({
      id: `plain-${Date.now()}-${v}`,
      kind: wo(h, v),
      text: h.trim(),
      sourceText: h.trim(),
      translatedText: "",
      confidence: 0,
      selected: !1
    }), vo = (h) => {
      const v = Date.now();
      return h.sections.map((T, Q) => ({
        id: `ai-${v}-${Q}`,
        kind: T.type,
        text: T.text.trim(),
        sourceText: T.text.trim(),
        translatedText: "",
        confidence: 0,
        selected: !1
      })).filter((T) => T.text);
    }, xo = (h) => h instanceof Error ? `${h.name}: ${h.message}
${h.stack || ""}`.trim() : typeof h == "string" ? h : JSON.stringify(h) || String(h), Ln = async () => {
      const h = So();
      h && await ko(h);
    }, ko = async (h) => {
      try {
        await navigator.clipboard.writeText(h), It.success(t("pin.copySuccess"));
      } catch (v) {
        D.error("[PIN窗口] 复制识别文本失败", v), It.error(t("pin.copyFailed"));
      } finally {
        Ft();
      }
    }, bo = async () => {
      Je();
      const h = r.value.trim();
      if (h)
        try {
          await b("save_text_to_file", { text: h }), It.success(t("pin.saveSuccess"));
        } catch (v) {
          v !== "SAVE_CANCELLED" && (D.error("[PIN窗口] 保存文本失败", v), It.error(t("pin.saveFailed")));
        }
    }, So = () => {
      const h = ki();
      if (h)
        return h;
      const v = pi(
        k.value
      );
      return v || (Je(), r.value.trim());
    }, ki = () => {
      const h = window.getSelection(), v = e.value?.querySelector(".ocr-reading-surface");
      if (!h || h.rangeCount === 0 || !v)
        return "";
      for (let T = 0; T < h.rangeCount; T += 1) {
        const G = h.getRangeAt(T).commonAncestorContainer;
        if (v.contains(G))
          return h.toString().trim();
      }
      return "";
    }, Co = (h) => {
      const v = l.value.find((T) => T.id === h);
      v && (v.selected = !v.selected);
    }, Mo = (h) => {
      const v = h.target;
      !v || !M.value || (M.value.translatedText = v.innerText.trim());
    }, _o = async () => {
      V.value = !V.value, X.value = !1, V.value && (await pe(), ot());
    }, To = (h) => {
      K.value = h, V.value = !1, b("set_translation_engine", { engine: h }).catch((v) => {
        D.error("[PIN窗口] 保存翻译引擎设置失败", v);
      });
    }, bi = async () => {
      X.value = !X.value, V.value = !1, X.value && (await pe(), ot());
    }, zo = (h) => {
      q.value = h, X.value = !1, b("set_ocr_language", { language: h }).catch((v) => {
        D.error("[PIN窗口] 保存 OCR 语言设置失败", v);
      }), s.value && Rn();
    }, Ro = async () => {
      if (Ft(), V.value = !1, X.value = !1, !r.value.trim() || U.value) return;
      const h = ki(), v = h ? [] : k.value.length > 0 ? k.value : l.value, T = h || (v.length > 0 ? v.map((G) => G.text).join(`

`) : r.value), Q = ue(T);
      if (!Te(Q)) {
        It.warning(t("pin.unsupportedTranslateLanguage"));
        return;
      }
      U.value = !0;
      try {
        if (await Lo(), h) {
          const G = await Pn(
            h,
            Q
          );
          G && (M.value = {
            sourceText: h,
            translatedText: G.trim()
          }), It.success(t("pin.translateSuccess"));
        } else if (v.length > 0) {
          for (const G of v) {
            const xt = await Pn(
              G.text,
              Q
            );
            xt && (G.translatedText = xt.trim());
          }
          Je(), It.success(t("pin.translateSuccess"));
        } else {
          const G = await Pn(
            r.value,
            Q
          );
          G && vi(G), It.success(t("pin.translateSuccess"));
        }
      } catch (G) {
        D.error("[PIN窗口] 翻译失败", G);
        const xt = G instanceof Error ? G.message : String(G);
        if (xt !== "翻译已取消") {
          const $t = [
            t("pin.offlineModelNotDownloaded"),
            t("pin.offlineModelNotActivated")
          ];
          It.error(
            $t.includes(xt) ? xt : t("pin.translateFailed")
          );
        }
      } finally {
        U.value = !1;
      }
    }, Lo = async () => {
      if (K.value !== "offline")
        return;
      if ((await ni()).isCached)
        await Cs();
      else
        throw new Error(t("pin.offlineModelNotDownloaded"));
      if (!await b("get_offline_model_activated"))
        throw new Error(t("pin.offlineModelNotActivated"));
    }, Pn = async (h, v) => {
      const T = h.trim();
      return T ? K.value === "offline" ? Ss(T) : await b("translate_text", {
        text: T,
        from: "auto",
        to: v === "zh" ? "en" : "zh",
        engine: K.value
      }) : "";
    }, Po = (h) => {
      Qe(h);
    }, Ao = async () => {
      if (!i.value) return;
      const h = i.value;
      typeof h.minimize == "function" && await h.minimize();
    }, Do = async () => {
      if (!i.value) return;
      const h = i.value;
      (typeof h.isMaximized == "function" ? await h.isMaximized() : !1) && typeof h.unmaximize == "function" ? await h.unmaximize() : typeof h.maximize == "function" && await h.maximize();
    }, Si = async (h) => {
      const v = h.target;
      if (m.value = v.naturalWidth, R.value = v.naturalHeight, i.value && A.value.width === 0)
        try {
          const T = await i.value.innerSize(), Q = await i.value.scaleFactor(), G = T.toLogical(Q);
          A.value = {
            width: G.width,
            height: G.height
          };
        } catch (T) {
          D.error("[PIN窗口] 获取窗口初始尺寸失败", T);
        }
    }, Ci = async (h) => {
      if (h.ctrlKey && (h.preventDefault(), h.stopPropagation(), !ft.value && i.value)) {
        ft.value = !0;
        try {
          const T = (await i.value.innerSize()).toLogical(
            await i.value.scaleFactor()
          ), Q = h.deltaY > 0 ? 0.95 : 1.05, G = T.width, xt = T.height, $t = Math.round(G * Q), Vt = Math.round(xt * Q), Oe = 50, ie = 3e3;
          if ($t >= Oe && $t <= ie && Vt >= Oe && Vt <= ie) {
            if (await i.value.setSize(new Ne($t, Vt)), m.value > 0) {
              const ce = Math.round(
                $t / m.value * 100
              );
              gt.value = ce / 100;
            }
            O.value = !0, An();
          }
        } catch (v) {
          D.error("[PIN窗口] 窗口缩放失败", v);
        } finally {
          setTimeout(() => {
            ft.value = !1;
          }, 100);
        }
      }
    }, Io = (h) => {
      a.value === "ocr" && h.ctrlKey && Ci(h);
    }, An = () => {
      O.value = !0, B && clearTimeout(B), B = setTimeout(() => {
        O.value = !1;
      }, 1e3);
    }, Qe = (h) => {
      h.preventDefault(), h.stopPropagation(), yt.value = !1, setTimeout(() => {
        const v = window.innerWidth, T = window.innerHeight;
        Nt.value = { width: v, height: T };
        const Q = Math.min(v, T);
        let G = 1;
        Q < 300 && (G = Math.max(0.4, Q / 300));
        const xt = a.value === "ocr" ? 176 : 150, $t = a.value === "ocr" && r.value.trim() ? 222 : 180, Vt = xt * G, Oe = $t * G;
        let ie = h.clientX, ce = h.clientY;
        ie + Vt > v && (ie = v - Vt - 5), ce + Oe > T && (ce = T - Oe - 5), ie = Math.max(5, ie), ce = Math.max(5, ce), vt.value = { x: ie, y: ce }, yt.value = !0;
      }, 10);
    }, Ft = () => {
      yt.value = !1, V.value = !1, X.value = !1;
    }, Mi = async () => {
      i.value && (bt.value = !bt.value, await i.value.setAlwaysOnTop(bt.value), Ft());
    }, _i = async (h) => {
      if (i.value && !ft.value) {
        ft.value = !0;
        try {
          const T = (await i.value.innerSize()).toLogical(
            await i.value.scaleFactor()
          ), Q = Math.round(T.width * h), G = Math.round(T.height * h), xt = 50, $t = 3e3;
          Q >= xt && Q <= $t && G >= xt && G <= $t && (await i.value.setSize(new Ne(Q, G)), m.value > 0 && (gt.value = Q / m.value), An());
        } catch (v) {
          D.error("[PIN窗口] 键盘缩放失败", v);
        } finally {
          setTimeout(() => {
            ft.value = !1;
          }, 100);
        }
      }
    }, Ti = async () => {
      if (i.value && A.value.width > 0 && A.value.height > 0)
        try {
          await i.value.setSize(
            new Ne(
              A.value.width,
              A.value.height
            )
          ), gt.value = 1, An();
        } catch (h) {
          D.error("[PIN窗口] 重置缩放失败", h);
        }
      Ft();
    }, Oo = async () => {
      try {
        const h = s.value;
        Ft(), i.value && await i.value.hide(), await b("copy_image_to_clipboard", { imageData: h }), It.success(t("pin.copySuccess")), i.value && await i.value.close();
      } catch (h) {
        D.error("[PIN窗口] 复制图片失败", h), It.error(t("pin.copyFailed")), i.value && await i.value.close();
      }
    }, Eo = async () => {
      const h = s.value;
      Ft(), i.value && await i.value.hide();
      try {
        await b("save_pin_image", { imageData: h }), It.success(t("pin.saveSuccess")), i.value && await i.value.close();
      } catch (v) {
        v === "SAVE_CANCELLED" ? (D.info("[PIN窗口] 用户取消保存，恢复窗口显示"), i.value && await i.value.show()) : (D.error("[PIN窗口] 保存图片失败", v), It.error(t("pin.saveFailed")), i.value && await i.value.close());
      }
    }, Dn = async () => {
      i.value && await i.value.close();
    }, zi = (h) => {
      h.preventDefault();
    }, Ri = async (h) => {
      if (h.button === 0 && i.value) {
        const v = h.target;
        if (v.hasAttribute("data-tauri-drag-region") || v.closest("[data-tauri-drag-region]")) {
          if (v.closest("button") || v.closest(".ocr-view-original"))
            return;
          try {
            await i.value.startDragging();
          } catch (T) {
            D.error("[PIN窗口] 拖拽窗口失败", T);
          }
        }
      }
    }, Li = (h) => {
      const v = h.target;
      !v.closest(".context-menu") && !v.closest(".ocr-engine-btn-group") && !v.closest(".translate-btn-group") && !v.closest(".ocr-floating-menu") && Ft();
    }, Pi = (h) => {
      if (h.altKey && h.code === "Space") {
        h.preventDefault(), h.stopPropagation();
        return;
      }
      h.key === "Escape" ? yt.value ? Ft() : Dn() : (h.ctrlKey || h.metaKey) && (h.key === "0" ? (h.preventDefault(), Ti()) : h.key === "=" || h.key === "+" ? (h.preventDefault(), _i(1.05)) : h.key === "-" && (h.preventDefault(), _i(0.95)));
    }, $o = async () => {
      if (i.value)
        try {
          const h = await b(
            "get_pin_window_data",
            { label: i.value.label }
          );
          h && yi(h) && await wi();
        } catch (h) {
          D.error("[PIN窗口] 主动获取窗口数据失败", h);
        }
    };
    return Ge(async () => {
      if (e.value) {
        try {
          const [h, v] = await Promise.all([
            b("get_translation_engine"),
            b("get_ocr_language")
          ]);
          (h === "google" || h === "bing" || h === "offline" || h === "local-ai") && (K.value = h), q.value = Z(v);
        } catch (h) {
          D.error("[PIN窗口] 读取默认 OCR/翻译设置失败", h);
        }
        try {
          i.value = Ke.getCurrent();
          try {
            le = await i.value.listen(
              "pin-window-data",
              (h) => {
                yi(h.payload) && wi();
              }
            ), await $o();
          } catch (h) {
            D.error("[PIN窗口] 设置事件监听失败", h);
          }
        } catch (h) {
          if (D.error("[PIN窗口] 初始化错误", h), i.value)
            try {
              await i.value.show();
            } catch (v) {
              D.error("[PIN窗口] 显示窗口失败", v);
            }
        }
        document.addEventListener("click", Li), document.addEventListener("keydown", Pi, !0), document.addEventListener("contextmenu", zi, !0), window.addEventListener("resize", ot), window.addEventListener("scroll", ot, !0), window.addEventListener("blur", Ft), document.body && (document.body.oncontextmenu = (h) => (h.preventDefault(), !1));
      }
    }), Jn(() => {
      o.value && URL.revokeObjectURL(o.value), le && le(), document.removeEventListener("click", Li), document.removeEventListener("keydown", Pi, !0), document.removeEventListener("contextmenu", zi, !0), window.removeEventListener("resize", ot), window.removeEventListener("scroll", ot, !0), window.removeEventListener("blur", Ft), document.body && (document.body.oncontextmenu = null), B && clearTimeout(B);
    }), (h, v) => (P(), E(
      "div",
      {
        class: it(["pin-container", { "ocr-mode": a.value === "ocr" }]),
        ref_key: "containerRef",
        ref: e,
        onContextmenu: mt(Qe, ["prevent"]),
        onWheelCapture: Io
      },
      [
        H(" 图片容器 "),
        o.value && a.value === "pin" ? (P(), E(
          "div",
          {
            key: 0,
            class: "image-wrapper",
            style: lt(nt.value),
            onWheelCapture: Ci,
            onContextmenu: mt(Qe, ["prevent"]),
            "data-tauri-drag-region": "",
            onMousedown: Ri
          },
          [
            y("img", {
              src: o.value,
              alt: h.$t("screenshot.pin"),
              style: lt(_t.value),
              onLoad: Si,
              draggable: "false",
              "data-tauri-drag-region": ""
            }, null, 44, Cd)
          ],
          36
          /* STYLE, NEED_HYDRATION */
        )) : H("v-if", !0),
        a.value === "ocr" ? (P(), E(
          "section",
          {
            key: 1,
            class: "ocr-shell",
            onContextmenu: mt(Qe, ["prevent"])
          },
          [
            y("header", Md, [
              y(
                "div",
                {
                  class: "ocr-titlebar",
                  "data-tauri-drag-region": "",
                  onMousedown: Ri
                },
                [
                  y("div", _d, [
                    y("div", Td, [
                      p(S(Yn), {
                        theme: "outline",
                        size: "18"
                      }),
                      y(
                        "span",
                        zd,
                        N(h.$t("pin.ocrResult")),
                        1
                        /* TEXT */
                      )
                    ]),
                    y("div", Rd, [
                      y(
                        "span",
                        Ld,
                        N(f.value),
                        1
                        /* TEXT */
                      ),
                      v[3] || (v[3] = y(
                        "span",
                        {
                          class: "ocr-meta-dot",
                          "data-tauri-drag-region": ""
                        },
                        "·",
                        -1
                        /* HOISTED */
                      )),
                      y(
                        "span",
                        Pd,
                        N(ct.value),
                        1
                        /* TEXT */
                      )
                    ])
                  ]),
                  y("div", Ad, [
                    y("div", {
                      class: it(["ocr-engine-status", `is-${x.value}`]),
                      title: Zt.value
                    }, [
                      d.value ? (P(), Ct(S(Zi), {
                        key: 0,
                        class: "ocr-loading-icon",
                        size: "14",
                        theme: "outline"
                      })) : (P(), Ct(S(En), {
                        key: 1,
                        size: "14",
                        theme: "outline"
                      })),
                      y(
                        "span",
                        null,
                        N(Rt.value),
                        1
                        /* TEXT */
                      )
                    ], 10, Dd),
                    y("div", Id, [
                      y("button", {
                        class: "ocr-window-btn",
                        title: bt.value ? h.$t("pin.togglePin") : h.$t("pin.pinWindow"),
                        onClick: mt(Mi, ["stop"])
                      }, [
                        (P(), Ct(fe(bt.value ? S(Un) : S(Xi)), {
                          size: "18",
                          theme: "outline"
                        }))
                      ], 8, Od),
                      v[4] || (v[4] = y(
                        "span",
                        { class: "ocr-window-divider" },
                        null,
                        -1
                        /* HOISTED */
                      )),
                      y("button", {
                        class: "ocr-window-btn",
                        title: h.$t("pin.minimize"),
                        onClick: mt(Ao, ["stop"])
                      }, [
                        p(S(Ds), {
                          size: "18",
                          theme: "outline"
                        })
                      ], 8, Ed),
                      y("button", {
                        class: "ocr-window-btn",
                        title: h.$t("pin.maximize"),
                        onClick: mt(Do, ["stop"])
                      }, [
                        p(S(fl), {
                          size: "14",
                          theme: "outline",
                          strokeWidth: 5
                        })
                      ], 8, $d),
                      y("button", {
                        class: "ocr-window-btn",
                        title: h.$t("pin.close"),
                        onClick: mt(Dn, ["stop"])
                      }, [
                        p(S(Vn), {
                          size: "14",
                          theme: "outline",
                          strokeWidth: 6
                        })
                      ], 8, Wd)
                    ])
                  ])
                ],
                32
                /* NEED_HYDRATION */
              )
            ]),
            y(
              "main",
              {
                class: "ocr-reading-surface",
                onMousedown: v[2] || (v[2] = mt(() => {
                }, ["stop"]))
              },
              [
                p(hd, {
                  class: "ocr-result-layout",
                  "default-size": "44%",
                  "min-size": "26%",
                  "max-size": "72%",
                  "second-collapsed": j.value
                }, {
                  first: zt(() => [
                    y("section", Bd, [
                      y("header", Nd, [
                        y("div", Hd, [
                          y(
                            "strong",
                            null,
                            N(h.$t("pin.sourceImage")),
                            1
                            /* TEXT */
                          ),
                          y(
                            "span",
                            null,
                            N(W.value),
                            1
                            /* TEXT */
                          )
                        ]),
                        y("div", jd, [
                          j.value ? (P(), E("button", {
                            key: 0,
                            type: "button",
                            class: "ocr-panel-toggle",
                            title: h.$t("pin.showAiPanel"),
                            onClick: v[0] || (v[0] = mt((T) => j.value = !1, ["stop"]))
                          }, [
                            p(S(sl), {
                              size: "14",
                              theme: "outline"
                            }),
                            y(
                              "span",
                              null,
                              N(h.$t("pin.showAiPanel")),
                              1
                              /* TEXT */
                            )
                          ], 8, Fd)) : H("v-if", !0)
                        ])
                      ]),
                      y("div", Vd, [
                        y(
                          "div",
                          {
                            class: it(["ocr-preview-stage", { "has-text-overlay": c.value.length > 0 }])
                          },
                          [
                            y("img", {
                              src: o.value || s.value,
                              alt: h.$t("pin.ocrSourceAlt"),
                              onLoad: Si
                            }, null, 40, Ud),
                            H(` 透明可选文字层：每个 RapidOCR 文字块按真实 bbox 坐标定位在图片上，
                       文字透明不可见但可选，参考 Umi-OCR 的实现 `),
                            c.value.length > 0 ? (P(), E("div", {
                              key: 0,
                              class: "ocr-text-block-layer",
                              "aria-label": h.$t("pin.selectableTextView")
                            }, [
                              (P(!0), E(
                                Ht,
                                null,
                                qt(c.value, (T, Q) => (P(), E("span", {
                                  key: `ocr-block-${Q}`,
                                  class: it(["ocr-text-block-item", { "is-linked": Et.value.has(Q) }]),
                                  style: lt(ht(T)),
                                  onClick: (G) => At(Q)
                                }, N(T.text), 15, Zd))),
                                128
                                /* KEYED_FRAGMENT */
                              ))
                            ], 8, Yd)) : H("v-if", !0)
                          ],
                          2
                          /* CLASS */
                        )
                      ])
                    ])
                  ]),
                  second: zt(() => [
                    y("section", Xd, [
                      y("header", Gd, [
                        y("div", Kd, [
                          y(
                            "strong",
                            null,
                            N(h.$t("pin.aiRecognizedText")),
                            1
                            /* TEXT */
                          ),
                          r.value.trim() ? (P(), E(
                            "span",
                            qd,
                            N(h.$t("pin.resultStats", {
                              sections: l.value.length,
                              characters: r.value.length
                            })),
                            1
                            /* TEXT */
                          )) : (P(), E(
                            "span",
                            Jd,
                            N(Lt.value),
                            1
                            /* TEXT */
                          ))
                        ]),
                        y("div", Qd, [
                          p(Jt, {
                            class: "ocr-inline-copy",
                            type: "text",
                            title: h.$t("pin.copyText"),
                            disabled: !r.value.trim(),
                            onClick: mt(Ln, ["stop"])
                          }, {
                            default: zt(() => [
                              p(S(an), {
                                size: "15",
                                theme: "outline"
                              }),
                              y(
                                "span",
                                null,
                                N(h.$t("pin.copyAll")),
                                1
                                /* TEXT */
                              )
                            ]),
                            _: 1
                            /* STABLE */
                          }, 8, ["title", "disabled"]),
                          y("button", {
                            type: "button",
                            class: "ocr-panel-toggle icon-only",
                            title: h.$t("pin.hideAiPanel"),
                            onClick: v[1] || (v[1] = mt((T) => j.value = !0, ["stop"]))
                          }, [
                            p(S(dl), {
                              size: "14",
                              theme: "outline"
                            })
                          ], 8, tg)
                        ])
                      ]),
                      d.value && !r.value.trim() ? (P(), E("div", eg, [
                        y("div", ng, [
                          p(S(En), {
                            size: "22",
                            theme: "outline"
                          })
                        ]),
                        y(
                          "strong",
                          null,
                          N(h.$t("pin.aiReadingImage")),
                          1
                          /* TEXT */
                        ),
                        y(
                          "span",
                          null,
                          N(h.$t("pin.aiReadingHint")),
                          1
                          /* TEXT */
                        )
                      ])) : w.value && !r.value.trim() ? (P(), E("div", ig, [
                        y(
                          "strong",
                          null,
                          N(w.value),
                          1
                          /* TEXT */
                        ),
                        y(
                          "span",
                          null,
                          N(h.$t("pin.aiOcrRetryHint")),
                          1
                          /* TEXT */
                        )
                      ])) : r.value.trim() ? (P(), E("div", og, [
                        M.value ? (P(), E("section", ag, [
                          y("div", rg, [
                            y(
                              "span",
                              lg,
                              N(h.$t("pin.selectedText")),
                              1
                              /* TEXT */
                            ),
                            y(
                              "div",
                              cg,
                              N(M.value.sourceText),
                              1
                              /* TEXT */
                            )
                          ]),
                          y("div", hg, [
                            y(
                              "span",
                              ug,
                              N(dt.value),
                              1
                              /* TEXT */
                            ),
                            y("div", {
                              class: "ocr-selection-translation-editor",
                              contenteditable: "plaintext-only",
                              spellcheck: "false",
                              textContent: N(M.value.translatedText),
                              onBlur: Mo
                            }, null, 40, dg)
                          ])
                        ])) : H("v-if", !0),
                        (P(!0), E(
                          Ht,
                          null,
                          qt(l.value, (T, Q) => (P(), E("article", {
                            key: T.id,
                            class: it(["ocr-record-item", [`is-${T.kind}`, { selected: T.selected, "is-linked": u.value === T.id }]]),
                            onClick: (G) => Ie(T.id)
                          }, [
                            y("header", fg, [
                              y("button", {
                                type: "button",
                                class: it(["ocr-record-select", { selected: T.selected }]),
                                "aria-pressed": T.selected,
                                title: h.$t("pin.selectSection"),
                                onClick: mt((G) => Co(T.id), ["stop"])
                              }, [
                                T.selected ? (P(), Ct(S(gn), {
                                  key: 0,
                                  size: "11",
                                  theme: "outline"
                                })) : (P(), E(
                                  "span",
                                  pg,
                                  N(Q + 1),
                                  1
                                  /* TEXT */
                                ))
                              ], 10, mg),
                              y(
                                "span",
                                wg,
                                N(Xt(T.kind)),
                                1
                                /* TEXT */
                              ),
                              T.confidence > 0 ? (P(), E(
                                "span",
                                yg,
                                N(Math.round(T.confidence)) + "% ",
                                1
                                /* TEXT */
                              )) : H("v-if", !0)
                            ]),
                            y("div", {
                              class: "ocr-record-text",
                              textContent: N(T.text)
                            }, null, 8, vg),
                            T.translatedText ? (P(), E("div", xg, [
                              y(
                                "span",
                                kg,
                                N(dt.value),
                                1
                                /* TEXT */
                              ),
                              y("div", {
                                class: "ocr-record-text translated",
                                textContent: N(T.translatedText)
                              }, null, 8, bg)
                            ])) : H("v-if", !0)
                          ], 10, gg))),
                          128
                          /* KEYED_FRAGMENT */
                        ))
                      ])) : (P(), E(
                        "div",
                        sg,
                        N(h.$t("pin.noTextRecognized")),
                        1
                        /* TEXT */
                      ))
                    ])
                  ]),
                  _: 1
                  /* STABLE */
                }, 8, ["second-collapsed"])
              ],
              32
              /* NEED_HYDRATION */
            ),
            y("footer", Sg, [
              p(Jt, {
                class: "ocr-action-btn primary",
                type: "text",
                title: h.$t("pin.copyText"),
                disabled: !r.value.trim(),
                onClick: mt(Ln, ["stop"])
              }, {
                default: zt(() => [
                  p(S(an), {
                    size: "18",
                    theme: "outline",
                    strokeWidth: 2.5
                  }),
                  y(
                    "span",
                    null,
                    N(ne.value > 0 ? `${h.$t("pin.copyText")} (${ne.value})` : h.$t("pin.copyText")),
                    1
                    /* TEXT */
                  )
                ]),
                _: 1
                /* STABLE */
              }, 8, ["title", "disabled"]),
              y(
                "div",
                {
                  ref_key: "translateMenuAnchorRef",
                  ref: F,
                  class: "translate-btn-group relative"
                },
                [
                  p(Jt, {
                    class: "ocr-action-btn translate-main",
                    type: "text",
                    title: h.$t("pin.translate"),
                    disabled: !r.value.trim() || U.value,
                    onClick: mt(Ro, ["stop"])
                  }, {
                    default: zt(() => [
                      U.value ? (P(), Ct(S(Zi), {
                        key: 1,
                        class: "ocr-loading-icon",
                        size: "18",
                        theme: "outline",
                        strokeWidth: 2.5
                      })) : (P(), Ct(S(Is), {
                        key: 0,
                        size: "18",
                        theme: "outline",
                        strokeWidth: 2.5
                      })),
                      y(
                        "span",
                        null,
                        N(h.$t("pin.translate")),
                        1
                        /* TEXT */
                      )
                    ]),
                    _: 1
                    /* STABLE */
                  }, 8, ["title", "disabled"]),
                  p(Jt, {
                    class: "ocr-action-btn translate-arrow",
                    type: "text",
                    disabled: !r.value.trim() || U.value,
                    onClick: mt(_o, ["stop"])
                  }, {
                    default: zt(() => [
                      p(S(Yi), {
                        size: "14",
                        theme: "outline",
                        strokeWidth: 2.7
                      })
                    ]),
                    _: 1
                    /* STABLE */
                  }, 8, ["disabled"]),
                  H(" 翻译引擎菜单 "),
                  V.value ? (P(), E(
                    "div",
                    {
                      key: 0,
                      class: "translate-menu ocr-floating-menu",
                      style: lt(Y.value)
                    },
                    [
                      (P(!0), E(
                        Ht,
                        null,
                        qt(kt.value, (T) => (P(), E("div", {
                          key: T.value,
                          class: it(["menu-item", { active: K.value === T.value }]),
                          onClick: (Q) => To(T.value)
                        }, [
                          y(
                            "span",
                            Mg,
                            N(T.label),
                            1
                            /* TEXT */
                          ),
                          K.value === T.value ? (P(), Ct(fe(S(gn)), {
                            key: 0,
                            class: "menu-item-icon",
                            size: "16"
                          })) : H("v-if", !0)
                        ], 10, Cg))),
                        128
                        /* KEYED_FRAGMENT */
                      ))
                    ],
                    4
                    /* STYLE */
                  )) : H("v-if", !0)
                ],
                512
                /* NEED_PATCH */
              ),
              y(
                "div",
                {
                  ref_key: "ocrLanguageMenuAnchorRef",
                  ref: tt,
                  class: "ocr-engine-btn-group relative"
                },
                [
                  p(Jt, {
                    class: "ocr-action-btn ocr-engine-main",
                    type: "text",
                    title: h.$t("pin.ocrLanguage"),
                    disabled: d.value,
                    onClick: mt(bi, ["stop"])
                  }, {
                    default: zt(() => [
                      p(S(Yn), {
                        size: "18",
                        theme: "outline",
                        strokeWidth: 2.5
                      }),
                      y(
                        "span",
                        null,
                        N(et.value),
                        1
                        /* TEXT */
                      )
                    ]),
                    _: 1
                    /* STABLE */
                  }, 8, ["title", "disabled"]),
                  p(Jt, {
                    class: "ocr-action-btn ocr-engine-arrow",
                    type: "text",
                    disabled: d.value,
                    onClick: mt(bi, ["stop"])
                  }, {
                    default: zt(() => [
                      p(S(Yi), {
                        size: "14",
                        theme: "outline",
                        strokeWidth: 3
                      })
                    ]),
                    _: 1
                    /* STABLE */
                  }, 8, ["disabled"]),
                  X.value ? (P(), E(
                    "div",
                    {
                      key: 0,
                      class: "ocr-engine-menu ocr-floating-menu",
                      style: lt(at.value)
                    },
                    [
                      (P(!0), E(
                        Ht,
                        null,
                        qt(rt.value, (T) => (P(), E("div", {
                          key: T.value,
                          class: it(["menu-item", { active: q.value === T.value }]),
                          onClick: (Q) => zo(T.value)
                        }, [
                          y(
                            "span",
                            Tg,
                            N(T.label),
                            1
                            /* TEXT */
                          ),
                          q.value === T.value ? (P(), Ct(fe(S(gn)), {
                            key: 0,
                            class: "menu-item-icon",
                            size: "16"
                          })) : H("v-if", !0)
                        ], 10, _g))),
                        128
                        /* KEYED_FRAGMENT */
                      ))
                    ],
                    4
                    /* STYLE */
                  )) : H("v-if", !0)
                ],
                512
                /* NEED_PATCH */
              ),
              y("div", zg, [
                p(Jt, {
                  class: "ocr-action-btn ocr-engine-main",
                  type: "text",
                  title: h.$t("pin.recognizeAgain"),
                  disabled: d.value || !s.value,
                  onClick: mt(Rn, ["stop"])
                }, {
                  default: zt(() => [
                    p(S(En), {
                      size: "17",
                      theme: "outline",
                      strokeWidth: 2.5
                    }),
                    y(
                      "span",
                      null,
                      N(h.$t("pin.aiRecognizeAgain")),
                      1
                      /* TEXT */
                    )
                  ]),
                  _: 1
                  /* STABLE */
                }, 8, ["title", "disabled"])
              ]),
              p(Jt, {
                class: "ocr-action-btn",
                type: "text",
                title: h.$t("pin.saveAsText"),
                disabled: !r.value.trim(),
                onClick: mt(bo, ["stop"])
              }, {
                default: zt(() => [
                  p(S(Ki), {
                    size: "18",
                    theme: "outline",
                    strokeWidth: 2.5
                  }),
                  y(
                    "span",
                    null,
                    N(h.$t("pin.saveAsText")),
                    1
                    /* TEXT */
                  )
                ]),
                _: 1
                /* STABLE */
              }, 8, ["title", "disabled"]),
              v[5] || (v[5] = y(
                "span",
                { class: "ocr-action-divider" },
                null,
                -1
                /* HOISTED */
              )),
              p(Jt, {
                class: "ocr-action-btn more",
                type: "text",
                title: h.$t("pin.more"),
                onClick: mt(Po, ["stop"])
              }, {
                default: zt(() => [
                  p(S(al), {
                    size: "18",
                    theme: "outline",
                    strokeWidth: 2.7
                  })
                ]),
                _: 1
                /* STABLE */
              }, 8, ["title"])
            ])
          ],
          32
          /* NEED_HYDRATION */
        )) : H("v-if", !0),
        O.value ? (P(), E(
          "div",
          Rg,
          N(Math.round(gt.value * 100)) + "% ",
          1
          /* TEXT */
        )) : H("v-if", !0),
        H(" 右键菜单 "),
        yt.value ? (P(), E(
          "div",
          {
            key: 3,
            class: "context-menu",
            style: lt(go.value)
          },
          [
            y("div", {
              class: "menu-item",
              onClick: Mi
            }, [
              (P(), Ct(fe(bt.value ? S(Xi) : S(Un)), {
                class: "menu-item-icon",
                size: "18",
                strokeWidth: 3
              })),
              y(
                "span",
                null,
                N(bt.value ? h.$t("pin.togglePin") : h.$t("pin.pinWindow")),
                1
                /* TEXT */
              )
            ]),
            y("div", {
              class: "menu-item",
              onClick: Ti
            }, [
              p(S(hl), {
                class: "menu-item-icon",
                size: "18",
                theme: "outline",
                strokeWidth: 3
              }),
              y(
                "span",
                null,
                N(h.$t("pin.resetZoom")),
                1
                /* TEXT */
              )
            ]),
            y("div", {
              class: "menu-item",
              onClick: Oo
            }, [
              p(S(an), {
                class: "menu-item-icon",
                size: "18",
                theme: "outline",
                strokeWidth: 3
              }),
              y(
                "span",
                null,
                N(h.$t("pin.copyImage")),
                1
                /* TEXT */
              )
            ]),
            y("div", {
              class: "menu-item",
              onClick: Eo
            }, [
              p(S(Ki), {
                class: "menu-item-icon",
                size: "18",
                theme: "outline",
                strokeWidth: 3
              }),
              y(
                "span",
                null,
                N(h.$t("pin.saveImage")),
                1
                /* TEXT */
              )
            ]),
            a.value === "ocr" && r.value.trim() ? (P(), E("div", {
              key: 0,
              class: "menu-item",
              onClick: Ln
            }, [
              p(S(an), {
                class: "menu-item-icon",
                size: "18",
                theme: "outline",
                strokeWidth: 3
              }),
              y(
                "span",
                null,
                N(h.$t("pin.copyText")),
                1
                /* TEXT */
              )
            ])) : H("v-if", !0),
            v[6] || (v[6] = y(
              "div",
              { class: "menu-divider" },
              null,
              -1
              /* HOISTED */
            )),
            y("div", {
              class: "menu-item danger",
              onClick: Dn
            }, [
              p(S(Vn), {
                class: "menu-item-icon",
                size: "18",
                theme: "outline",
                strokeWidth: 3
              }),
              y(
                "span",
                null,
                N(h.$t("pin.closePin")),
                1
                /* TEXT */
              )
            ])
          ],
          4
          /* STYLE */
        )) : H("v-if", !0)
      ],
      34
      /* CLASS, NEED_HYDRATION */
    ));
  }
}), Pg = /* @__PURE__ */ qe(Lg, [["__scopeId", "data-v-b06a2f03"]]), Ag = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Pg
}, Symbol.toStringTag, { value: "Module" }));
export {
  Eg as activate
};
