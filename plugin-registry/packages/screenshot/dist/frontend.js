var Lo = Object.defineProperty;
var Po = (n, t, e) => t in n ? Lo(n, t, { enumerable: !0, configurable: !0, writable: !0, value: e }) : n[t] = e;
var P = (n, t, e) => Po(n, typeof t != "symbol" ? t + "" : t, e);
import { inject as me, createVNode as p, defineComponent as Ct, ref as $, computed as E, watch as Xe, nextTick as pe, createElementBlock as O, openBlock as z, createCommentVNode as j, createElementVNode as y, Fragment as Ht, renderList as Kt, normalizeClass as nt, createBlock as vt, resolveDynamicComponent as ae, unref as M, toDisplayString as B, normalizeStyle as gt, onMounted as Ge, onUnmounted as Jn, withDirectives as Fe, withKeys as zi, vModelText as Ao, getCurrentInstance as ze, readonly as Do, getCurrentScope as Io, onScopeDispose as Oo, isRef as Eo, warn as $o, provide as Wo, mergeProps as Bo, renderSlot as ne, Transition as Qn, withCtx as Mt, createTextVNode as us, vShow as mn, shallowReactive as No, withModifiers as ft, isVNode as Ve, render as pn } from "vue";
import { useI18n as ds } from "vue-i18n";
const Lg = (n) => {
  n.registerRoute({
    target: "window",
    path: "/screenshot",
    name: "Screenshot",
    component: () => Promise.resolve().then(() => hc)
  }), n.registerRoute({
    target: "window",
    path: "/pin",
    name: "Pin",
    component: () => Promise.resolve().then(() => xg)
  });
};
function Ho(n, t, e, i) {
  if (typeof t == "function" ? n !== t || !0 : !t.has(n)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
  return e === "m" ? i : e === "a" ? i.call(n) : i ? i.value : t.get(n);
}
function jo(n, t, e, i, s) {
  if (typeof t == "function" ? n !== t || !0 : !t.has(n)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
  return t.set(n, e), e;
}
var ln;
const jt = "__TAURI_TO_IPC_KEY__";
function Fo(n, t = !1) {
  return window.__TAURI_INTERNALS__.transformCallback(n, t);
}
async function b(n, t = {}, e) {
  return window.__TAURI_INTERNALS__.invoke(n, t, e);
}
function Vo(n, t = "asset") {
  return window.__TAURI_INTERNALS__.convertFileSrc(n, t);
}
class Uo {
  get rid() {
    return Ho(this, ln, "f");
  }
  constructor(t) {
    ln.set(this, void 0), jo(this, ln, t);
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
ln = /* @__PURE__ */ new WeakMap();
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
class gs {
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
    return new gs(this.x / t, this.y / t);
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
class Qe {
  constructor(t) {
    this.position = t;
  }
  toLogical(t) {
    return this.position instanceof gs ? this.position : this.position.toLogical(t);
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
async function fs(n, t) {
  await b("plugin:event|unlisten", {
    event: n,
    eventId: t
  });
}
async function wn(n, t, e) {
  var i;
  const s = typeof e?.target == "string" ? { kind: "AnyLabel", label: e.target } : (i = e?.target) !== null && i !== void 0 ? i : { kind: "Any" };
  return b("plugin:event|listen", {
    event: n,
    target: s,
    handler: Fo(t)
  }).then((o) => async () => fs(n, o));
}
async function Yo(n, t, e) {
  return wn(n, (i) => {
    fs(n, i.id), t(i);
  }, e);
}
async function Zo(n, t) {
  await b("plugin:event|emit", {
    event: n,
    payload: t
  });
}
async function Xo(n, t, e) {
  await b("plugin:event|emit_to", {
    target: typeof n == "string" ? { kind: "AnyLabel", label: n } : n,
    event: t,
    payload: e
  });
}
let Go = class cn extends Uo {
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
      rgba: yn(t),
      width: e,
      height: i
    }).then((s) => new cn(s));
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
      bytes: yn(t)
    }).then((e) => new cn(e));
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
    return b("plugin:image|from_path", { path: t }).then((e) => new cn(e));
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
function yn(n) {
  return n == null ? null : typeof n == "string" ? n : n instanceof Go ? n.rid : n;
}
var Wn;
(function(n) {
  n[n.Critical = 1] = "Critical", n[n.Informational = 2] = "Informational";
})(Wn || (Wn = {}));
class Ko {
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
var Ri;
(function(n) {
  n.None = "none", n.Normal = "normal", n.Indeterminate = "indeterminate", n.Paused = "paused", n.Error = "error";
})(Ri || (Ri = {}));
function qo() {
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
    return qo();
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
    } : wn(t, e, {
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
    } : Yo(t, e, {
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
    return Zo(t, e);
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
    return Xo(t, e, i);
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
      value: t instanceof Qe ? t : new Qe(t)
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
      value: yn(t)
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
      value: t instanceof Qe ? t : new Qe(t)
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
      value: t ? yn(t) : void 0
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
      const i = new Ko(e);
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
var Li;
(function(n) {
  n.Disabled = "disabled", n.Throttle = "throttle", n.Suspend = "suspend";
})(Li || (Li = {}));
var Pi;
(function(n) {
  n.AppearanceBased = "appearanceBased", n.Light = "light", n.Dark = "dark", n.MediumLight = "mediumLight", n.UltraDark = "ultraDark", n.Titlebar = "titlebar", n.Selection = "selection", n.Menu = "menu", n.Popover = "popover", n.Sidebar = "sidebar", n.HeaderView = "headerView", n.Sheet = "sheet", n.WindowBackground = "windowBackground", n.HudWindow = "hudWindow", n.FullScreenUI = "fullScreenUI", n.Tooltip = "tooltip", n.ContentBackground = "contentBackground", n.UnderWindowBackground = "underWindowBackground", n.UnderPageBackground = "underPageBackground", n.Mica = "mica", n.Blur = "blur", n.Acrylic = "acrylic", n.Tabbed = "tabbed", n.TabbedDark = "tabbedDark", n.TabbedLight = "tabbedLight";
})(Pi || (Pi = {}));
var Ai;
(function(n) {
  n.FollowsWindowActiveState = "followsWindowActiveState", n.Active = "active", n.Inactive = "inactive";
})(Ai || (Ai = {}));
var T = /* @__PURE__ */ ((n) => (n.None = "none", n.Drawing = "drawing", n.Moving = "moving", n.ResizingNW = "resizing-nw", n.ResizingNE = "resizing-ne", n.ResizingSW = "resizing-sw", n.ResizingSE = "resizing-se", n.ResizingN = "resizing-n", n.ResizingS = "resizing-s", n.ResizingW = "resizing-w", n.ResizingE = "resizing-e", n.DrawingRect = "drawing-rect", n.DrawingEllipse = "drawing-ellipse", n.DrawingLine = "drawing-line", n.DrawingArrow = "drawing-arrow", n.DrawingPen = "drawing-pen", n.EditingAnnotation = "editing-annotation", n.MovingAnnotation = "moving-annotation", n.ResizingAnnotationNW = "resizing-annotation-nw", n.ResizingAnnotationSE = "resizing-annotation-se", n.DrawingText = "drawing-text", n.DrawingMarker = "drawing-marker", n.DrawingMosaic = "drawing-mosaic", n.ColorPicking = "color-picking", n.Pinning = "pinning", n))(T || {}), f = /* @__PURE__ */ ((n) => (n.Select = "select", n.Rectangle = "rectangle", n.Ellipse = "ellipse", n.Line = "line", n.Arrow = "arrow", n.Pen = "pen", n.Mosaic = "mosaic", n.Text = "text", n.Marker = "marker", n.ColorPicker = "color-picker", n.Ocr = "ocr", n.Pin = "pin", n.Translate = "translate", n))(f || {});
function Bn(n, t, e) {
  return !Number.isFinite(n) || n <= 0 ? 0 : Math.min(n, Math.max(0, t) / 2, Math.max(0, e) / 2);
}
function Jo(n, t, e, i) {
  if (!i) return e;
  const s = e.x - t.x, o = e.y - t.y;
  if (n === f.Ellipse || n === f.Rectangle) {
    const a = Math.max(Math.abs(s), Math.abs(o));
    return {
      x: t.x + Math.sign(s || 1) * a,
      y: t.y + Math.sign(o || 1) * a
    };
  }
  if (n === f.Line || n === f.Arrow) {
    const a = Math.hypot(s, o), r = Math.PI / 4, l = Math.round(Math.atan2(o, s) / r) * r;
    return {
      x: t.x + Math.cos(l) * a,
      y: t.y + Math.sin(l) * a
    };
  }
  return e;
}
function xt(n, t) {
  const e = t.x - n.x, i = t.y - n.y;
  return Math.sqrt(e * e + i * i);
}
function Di(n, t) {
  return n.x >= t.x && n.x <= t.x + t.width && n.y >= t.y && n.y <= t.y + t.height;
}
function ms(n) {
  return {
    x: n.x + n.width / 2,
    y: n.y + n.height / 2
  };
}
function Qo(n, t) {
  return {
    x: Math.max(t.x, Math.min(n.x, t.x + t.width)),
    y: Math.max(t.y, Math.min(n.y, t.y + t.height))
  };
}
function Xt(n) {
  return n != null && typeof n.x == "number" && typeof n.y == "number" && !isNaN(n.x) && !isNaN(n.y) && isFinite(n.x) && isFinite(n.y);
}
function Me(n) {
  return n != null && typeof n.x == "number" && typeof n.y == "number" && typeof n.width == "number" && typeof n.height == "number" && !isNaN(n.x) && !isNaN(n.y) && !isNaN(n.width) && !isNaN(n.height) && isFinite(n.x) && isFinite(n.y) && isFinite(n.width) && isFinite(n.height) && n.width > 0 && n.height > 0;
}
class ta {
  constructor(t, e) {
    P(this, "canvas");
    P(this, "ctx");
    P(this, "coordinateTransform");
    this.canvas = t, this.ctx = t.getContext("2d"), this.coordinateTransform = e;
  }
  // 清空画布
  clear() {
    this.ctx.save(), this.ctx.setTransform(1, 0, 0, 1, 0, 0), this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height), this.ctx.restore();
  }
  // 绘制遮罩层（选择区域外的半透明黑色遮罩）
  drawMask(t, e = 0) {
    if (!Me(t)) {
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
    const { x: e, y: i, width: s, height: o } = t, a = ms(t);
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
    let w = i.x + d, v = i.y + d;
    w + c > e.x + e.width && (w = i.x - c - d), v + u > e.y + e.height && (v = i.y - u - d), w < e.x && (w = e.x + d), v < e.y && (v = e.y + d), this.ctx.save(), this.ctx.fillStyle = "rgba(250, 250, 250, 0.96)", this.ctx.strokeStyle = "rgba(0, 0, 0, 0.14)", this.ctx.lineWidth = 1, this.ctx.shadowColor = "rgba(0, 0, 0, 0.24)", this.ctx.shadowBlur = 18, this.ctx.shadowOffsetY = 8, this.ctx.beginPath(), this.ctx.roundRect(w, v, c, u, 10), this.ctx.fill(), this.ctx.stroke(), this.ctx.shadowColor = "transparent", this.ctx.shadowBlur = 0, this.ctx.shadowOffsetY = 0;
    const S = 108, g = w + (c - S) / 2, m = v + 16;
    this.ctx.fillStyle = "#f3f4f6", this.ctx.fillRect(g, m, S, S), this.ctx.strokeStyle = "rgba(0, 0, 0, 0.26)", this.ctx.lineWidth = 1, this.ctx.strokeRect(g, m, S, S);
    const R = a ? a.width : r, A = S / R;
    a && (this.ctx.imageSmoothingEnabled = !1, this.ctx.drawImage(
      a,
      0,
      0,
      a.width,
      a.height,
      g,
      m,
      S,
      S
    ), this.ctx.imageSmoothingEnabled = !0), this.ctx.beginPath(), this.ctx.strokeStyle = "rgba(255, 255, 255, 0.5)", this.ctx.lineWidth = 1;
    for (let F = 1; F < R; F++) {
      const X = g + F * A;
      this.ctx.moveTo(X, m), this.ctx.lineTo(X, m + S);
      const G = m + F * A;
      this.ctx.moveTo(g, G), this.ctx.lineTo(g + S, G);
    }
    this.ctx.stroke(), this.ctx.beginPath(), this.ctx.strokeStyle = "rgba(0, 0, 0, 0.22)";
    for (let F = 1; F < R; F++) {
      const X = g + F * A + 0.5;
      this.ctx.moveTo(X, m), this.ctx.lineTo(X, m + S);
      const G = m + F * A + 0.5;
      this.ctx.moveTo(g, G), this.ctx.lineTo(g + S, G);
    }
    this.ctx.stroke();
    const _ = Math.floor(R / 2), H = g + _ * A, V = m + _ * A;
    this.ctx.fillStyle = "rgba(255, 255, 255, 0.18)", this.ctx.fillRect(H, V, A, A), this.ctx.setLineDash([]), this.ctx.strokeStyle = "rgba(255, 255, 255, 0.96)", this.ctx.lineWidth = 4, this.ctx.strokeRect(
      H - 1,
      V - 1,
      A + 2,
      A + 2
    ), this.ctx.strokeStyle = "rgba(0, 0, 0, 0.9)", this.ctx.lineWidth = 2, this.ctx.strokeRect(
      H,
      V,
      A,
      A
    ), this.ctx.fillStyle = "#333", this.ctx.font = '12px "SF Mono", "Consolas", "Monaco", monospace';
    let Z = m + S + 22;
    if (s) {
      this.ctx.fillStyle = s.hex, this.ctx.fillRect(w + 16, Z - 14, 20, 20), this.ctx.strokeStyle = "rgba(0, 0, 0, 0.22)", this.ctx.strokeRect(w + 16, Z - 14, 20, 20), this.ctx.fillStyle = "#111827", this.ctx.font = '12px "SF Mono", "Consolas", "Monaco", monospace';
      const F = o === "hex" ? s.hex : `${s.rgb.r}, ${s.rgb.g}, ${s.rgb.b}`;
      this.ctx.fillText(F, w + 44, Z), Z += 19;
    }
    this.ctx.fillStyle = "#6b7280", this.ctx.font = "12px Arial", this.ctx.fillText(`X: ${Math.round(i.x)}, Y: ${Math.round(i.y)}`, w + 16, Z), Z += 17, this.ctx.font = "12px Arial";
    const U = l ? "已复制!" : "Q:复制 Shift:切换";
    this.ctx.fillStyle = l ? "#059669" : "#8b8f98", this.ctx.fillText(U, w + 16, Z), this.ctx.restore();
  }
}
class ea {
  // 物理尺寸
  constructor(t) {
    P(this, "scale");
    P(this, "canvasRect");
    P(this, "canvasSize");
    // 逻辑尺寸
    P(this, "physicalSize");
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
    return Xt(t) ? {
      x: t.x * this.scale,
      y: t.y * this.scale
    } : (console.warn("Invalid point in logicalToPhysical:", t), { x: 0, y: 0 });
  }
  // 物理像素转逻辑像素
  physicalToLogical(t) {
    return Xt(t) ? {
      x: t.x / this.scale,
      y: t.y / this.scale
    } : (console.warn("Invalid point in physicalToLogical:", t), { x: 0, y: 0 });
  }
  // 逻辑坐标转相对坐标（相对于截图区域）
  logicalToRelative(t, e) {
    return !Xt(t) || !Me(e) ? (console.warn("Invalid point or bounds in logicalToRelative"), { x: 0, y: 0 }) : {
      x: t.x - e.x,
      y: t.y - e.y
    };
  }
  // 相对坐标转逻辑坐标
  relativeToLogical(t, e) {
    return !Xt(t) || !Me(e) ? (console.warn("Invalid point or bounds in relativeToLogical"), { x: 0, y: 0 }) : {
      x: t.x + e.x,
      y: t.y + e.y
    };
  }
  // 矩形逻辑坐标转物理坐标
  rectLogicalToPhysical(t) {
    return Me(t) ? {
      x: t.x * this.scale,
      y: t.y * this.scale,
      width: t.width * this.scale,
      height: t.height * this.scale
    } : (console.warn("Invalid rect in rectLogicalToPhysical:", t), { x: 0, y: 0, width: 0, height: 0 });
  }
  // 限制点在画布范围内
  clampToCanvas(t) {
    if (!Xt(t))
      return console.warn("Invalid point in clampToCanvas:", t), { x: 0, y: 0 };
    const e = {
      x: 0,
      y: 0,
      width: this.canvasSize.width,
      height: this.canvasSize.height
    };
    return Qo(t, e);
  }
  // 限制矩形在画布范围内
  clampRectToCanvas(t) {
    if (!Me(t))
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
    return xt(t, e);
  }
  // 检查点是否在矩形内（使用工具函数）
  isPointInRect(t, e, i = 0) {
    if (!Xt(t) || !Me(e))
      return !1;
    if (i === 0)
      return Di(t, e);
    const s = {
      x: e.x - i,
      y: e.y - i,
      width: e.width + i * 2,
      height: e.height + i * 2
    };
    return Di(t, s);
  }
  // 检查点是否在线段附近
  isPointNearLine(t, e, i, s = 8) {
    if (!Xt(t) || !Xt(e) || !Xt(i))
      return !1;
    const o = t.x - e.x, a = t.y - e.y, r = i.x - e.x, l = i.y - e.y, c = o * r + a * l, u = r * r + l * l;
    if (u === 0)
      return xt(t, e) <= s;
    const d = c / u;
    let w;
    return d < 0 ? w = e : d > 1 ? w = i : w = {
      x: e.x + d * r,
      y: e.y + d * l
    }, xt(t, w) <= s;
  }
}
class na {
  constructor(t, e) {
    P(this, "coordinateSystem");
    P(this, "canvas");
    P(this, "isDrawing", !1);
    P(this, "currentOperation", T.None);
    P(this, "startPoint", { x: 0, y: 0 });
    P(this, "lastMousePos", { x: 0, y: 0 });
    P(this, "preventDefault", (t) => {
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
    if (e !== f.Select)
      return i ? this.coordinateSystem.isPointInRect(t, i) ? this.getDrawingOperationType(e) : T.None : T.Drawing;
    if (o) {
      if (o.getData().type === f.Mosaic)
        return T.None;
      const a = this.getAnnotationControlPointOperation(t, o);
      return a !== T.None ? a : T.MovingAnnotation;
    }
    return i ? this.getSelectionOperationType(t, i, s.length > 0) : T.Drawing;
  }
  // 获取绘图操作类型
  getDrawingOperationType(t) {
    return {
      [f.Rectangle]: T.DrawingRect,
      [f.Ellipse]: T.DrawingEllipse,
      [f.Line]: T.DrawingLine,
      [f.Arrow]: T.DrawingArrow,
      [f.Pen]: T.DrawingPen,
      [f.Text]: T.DrawingText,
      [f.Marker]: T.DrawingMarker,
      [f.Mosaic]: T.DrawingMosaic,
      [f.ColorPicker]: T.ColorPicking,
      [f.Ocr]: T.None,
      [f.Pin]: T.Pinning,
      [f.Translate]: T.None,
      [f.Select]: T.None
    }[t] || T.Drawing;
  }
  // 获取选择框操作类型
  getSelectionOperationType(t, e, i) {
    const { x: s, y: o, width: a, height: r } = e, l = 12;
    if (i)
      return T.None;
    const c = ms(e);
    return this.isInHandle(t, { x: s, y: o }, l) ? T.ResizingNW : this.isInHandle(t, { x: s + a, y: o }, l) ? T.ResizingNE : this.isInHandle(t, { x: s, y: o + r }, l) ? T.ResizingSW : this.isInHandle(t, { x: s + a, y: o + r }, l) ? T.ResizingSE : this.isInHandle(t, { x: c.x, y: o }, l) ? T.ResizingN : this.isInHandle(t, { x: c.x, y: o + r }, l) ? T.ResizingS : this.isInHandle(t, { x: s, y: c.y }, l) ? T.ResizingW : this.isInHandle(t, { x: s + a, y: c.y }, l) ? T.ResizingE : this.coordinateSystem.isPointInRect(t, e) ? T.Moving : T.Drawing;
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
    if (!Xt(t))
      return T.None;
    const i = e.getData();
    if (i.type === f.Mosaic || i.type === f.Text || i.type === f.Marker)
      return T.None;
    if ([
      f.Rectangle,
      f.Ellipse,
      f.Line,
      f.Arrow
    ].includes(i.type) && i.points.length >= 2) {
      const s = i.points[0], o = i.points[i.points.length - 1], a = 8, r = 6, l = xt(t, s), c = xt(t, o);
      if (l <= a + r)
        return T.ResizingAnnotationNW;
      if (c <= a + r)
        return T.ResizingAnnotationSE;
    }
    return T.None;
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
    this.isDrawing = !1, this.currentOperation = T.None;
  }
  // 更新鼠标位置
  updateMousePosition(t) {
    this.lastMousePos = t;
  }
}
class le {
  constructor(t) {
    P(this, "data");
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
class ia extends le {
  constructor(t, e) {
    super({
      id: Math.random().toString(36).substr(2, 9),
      type: f.Rectangle,
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
      if (xt(t, s) <= e)
        return i;
    }
    return null;
  }
  // 更新控制点
  updateControlPoint(t, e) {
    t >= 0 && t < this.data.points.length && (this.data.points[t] = e);
  }
}
class sa extends le {
  constructor(t, e) {
    super({
      id: Math.random().toString(36).substr(2, 9),
      type: f.Ellipse,
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
class oa extends le {
  constructor(t, e) {
    super({
      id: Math.random().toString(36).substr(2, 9),
      type: f.Line,
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
      return xt(t, e) <= s;
    const l = Math.max(0, Math.min(1, ((t.x - e.x) * o + (t.y - e.y) * a) / r)), c = {
      x: e.x + l * o,
      y: e.y + l * a
    };
    return xt(t, c) <= s;
  }
}
class aa extends le {
  constructor(t, e) {
    super({
      id: Math.random().toString(36).substr(2, 9),
      type: f.Arrow,
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
      return xt(t, e) <= s;
    const d = c / u;
    let w;
    return d < 0 ? w = e : d > 1 ? w = i : w = {
      x: e.x + d * r,
      y: e.y + d * l
    }, xt(t, w) <= s;
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
      if (xt(t, s) <= e)
        return i;
    }
    return null;
  }
  // 更新控制点
  updateControlPoint(t, e) {
    t >= 0 && t < this.data.points.length && (this.data.points[t] = e);
  }
}
class ra extends le {
  constructor(t, e) {
    super({
      id: Math.random().toString(36).substr(2, 9),
      type: f.Pen,
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
      const e = this.data.points[this.data.points.length - 1], i = xt(t, e);
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
      return this.data.points.length === 1 ? xt(t, this.data.points[0]) <= e : !1;
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
      return xt(t, e) <= s;
    const d = c / u;
    let w;
    return d < 0 ? w = e : d > 1 ? w = i : w = {
      x: e.x + d * r,
      y: e.y + d * l
    }, xt(t, w) <= s;
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
const te = "sans-serif", Ce = (n) => ({
  x: n.x + 4,
  y: n.y - 8
});
class la extends le {
  constructor(t, e, i, s = 16) {
    super({
      id: Math.random().toString(36).substr(2, 9),
      type: f.Text,
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
    t.save(), this.applyOpacity(t), t.font = `${o}px ${te}`, t.fillStyle = this.data.style.color, t.textAlign = "left", t.textBaseline = "top";
    const r = Ce(a), l = r.x * e - i.x, c = r.y * e - i.y;
    t.fillText(this.data.text, l, c), t.restore();
  }
  hitTest(t, e = 8) {
    if (!this.data.text || this.data.points.length === 0) return !1;
    const i = this.data.points[0], s = this.data.fontSize || 16, a = document.createElement("canvas").getContext("2d");
    if (!a) return !1;
    a.font = `${s}px ${te}`;
    const l = a.measureText(this.data.text).width, { x: c, y: u } = Ce(i);
    return t.x >= c - e && t.x <= c + l + e && t.y >= u - e && t.y <= u + s + e;
  }
  getBounds() {
    if (!this.data.text || this.data.points.length === 0) return null;
    const t = this.data.points[0], e = this.data.fontSize || 16, s = document.createElement("canvas").getContext("2d");
    if (!s) return null;
    s.font = `${e}px ${te}`;
    const a = s.measureText(this.data.text).width, { x: r, y: l } = Ce(t);
    return {
      x: r,
      y: l,
      width: a,
      height: e
    };
  }
  drawSelection(t) {
    if (!this.data.text || this.data.points.length === 0) return;
    const { ctx: e, scale: i, offset: s } = t, o = this.data.points[0], a = (this.data.fontSize || 16) * i, r = Ce(o), l = r.x * i - s.x, c = r.y * i - s.y;
    e.save(), e.font = `${a}px ${te}`;
    const d = e.measureText(this.data.text).width;
    e.setLineDash([2, 2]), e.strokeStyle = "#3b82f6", e.lineWidth = 1, e.strokeRect(l, c, d, a), e.restore();
  }
  drawHover(t) {
    if (!this.data.text || this.data.points.length === 0) return;
    const { ctx: e, scale: i, offset: s } = t, o = this.data.points[0], a = (this.data.fontSize || 16) * i, r = Ce(o), l = r.x * i - s.x, c = r.y * i - s.y;
    e.save(), e.font = `${a}px ${te}`;
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
const Gt = class Gt extends le {
  constructor(t, e, i = 8) {
    super({
      id: Math.random().toString(36).substr(2, 9),
      type: f.Mosaic,
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
      const e = this.data.points[this.data.points.length - 1], i = xt(t, e);
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
    Gt.helperCanvas || (Gt.helperCanvas = document.createElement("canvas"), Gt.helperCtx = Gt.helperCanvas.getContext("2d", { willReadFrequently: !0 }));
    const o = Gt.helperCanvas, a = Gt.helperCtx, r = e || 1, l = this.data.mosaicSize || 8, c = Math.max(Math.round(l * r), 4), u = Math.max(l * 3, 24), d = this.getBounds();
    if (!d) return;
    const w = u, v = Math.floor(d.x - w), S = Math.floor(d.y - w), g = Math.ceil(d.width + w * 2), m = Math.ceil(d.height + w * 2);
    if (g <= 0 || m <= 0) return;
    const R = Math.floor(v * r - i.x), A = Math.floor(S * r - i.y), _ = Math.ceil(g * r), H = Math.ceil(m * r), V = t.canvas.width, Z = t.canvas.height, U = Math.max(0, R), F = Math.max(0, A), X = Math.min(_, V - U), G = Math.min(H, Z - F);
    if (X <= 0 || G <= 0) return;
    let Q;
    try {
      t.save(), t.setTransform(1, 0, 0, 1, 0, 0), Q = t.getImageData(U, F, X, G), t.restore();
    } catch {
      return;
    }
    const tt = Q.data, ot = U % c, wt = F % c;
    for (let at = -wt; at < G; at += c)
      for (let Y = -ot; Y < X; Y += c) {
        const J = Math.max(0, Y), mt = Math.max(0, at), lt = Math.min(X, Y + c), rt = Math.min(G, at + c);
        if (J >= lt || mt >= rt) continue;
        let pt = 0, I = 0, yt = 0, N = 0;
        for (let kt = mt; kt < rt; kt++)
          for (let ct = J; ct < lt; ct++) {
            const Lt = (kt * X + ct) * 4;
            pt += tt[Lt], I += tt[Lt + 1], yt += tt[Lt + 2], N++;
          }
        if (N > 0) {
          pt = Math.round(pt / N / 8) * 8, I = Math.round(I / N / 8) * 8, yt = Math.round(yt / N / 8) * 8;
          for (let ct = mt; ct < rt; ct++)
            for (let Lt = J; Lt < lt; Lt++) {
              const Nt = (ct * X + Lt) * 4;
              tt[Nt] = pt, tt[Nt + 1] = I, tt[Nt + 2] = yt;
            }
        }
      }
    o.width = X, o.height = G, a.putImageData(Q, 0, 0), a.globalCompositeOperation = "destination-in", a.lineCap = "round", a.lineJoin = "round", a.lineWidth = u * r, a.fillStyle = "#000000", a.strokeStyle = "#000000", this.drawPathPhysical(a, r, i, U, F), t.save(), this.applyOpacity(t), t.setTransform(1, 0, 0, 1, 0, 0), s && (t.beginPath(), t.rect(
      s.x * r - i.x,
      s.y * r - i.y,
      s.width * r,
      s.height * r
    ), t.clip()), t.drawImage(o, U, F), t.restore();
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
        const d = this.data.points[u], w = this.data.points[u + 1], v = (a(d) + a(w)) / 2, S = (r(d) + r(w)) / 2;
        t.quadraticCurveTo(a(d), r(d), v, S);
      }
      const c = this.data.points[this.data.points.length - 1];
      t.lineTo(a(c), r(c)), t.stroke();
    }
  }
  hitTest(t, e = 8) {
    if (this.data.points.length === 0) return !1;
    if (this.data.points.length === 1)
      return xt(t, this.data.points[0]) <= (this.data.mosaicSize || 8) * 1.5 + e;
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
    let w, v;
    d < 0 ? (w = e.x, v = e.y) : d > 1 ? (w = i.x, v = i.y) : (w = e.x + d * r, v = e.y + d * l);
    const S = t.x - w, g = t.y - v;
    return S * S + g * g <= s * s;
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
P(Gt, "helperCanvas", null), P(Gt, "helperCtx", null);
let Nn = Gt;
const oe = 16, hn = (n = oe) => Math.max(12, Math.round(n * 0.75)), Hn = (n, t = oe) => {
  const e = hn(t);
  return {
    x: n.x + e + 12,
    y: n.y - t / 2
  };
};
class ca extends le {
  constructor(t, e, i, s, o = oe) {
    super({
      id: Math.random().toString(36).substr(2, 9),
      type: f.Marker,
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
    const o = (this.data.fontSize || oe) * e, a = hn(this.data.fontSize || oe) * e, r = s.x * e - i.x, l = s.y * e - i.y, c = this.data.text?.trim() || "";
    if (t.save(), this.applyOpacity(t), t.lineCap = "round", t.lineJoin = "round", t.setLineDash([]), this.drawMarkerFace(t, r, l, a, o, e), c) {
      const u = Hn(
        s,
        this.data.fontSize || oe
      ), d = u.x * e - i.x, w = u.y * e - i.y, v = w + o + 3 * e;
      t.font = `${o}px ${te}`, t.textAlign = "left", t.textBaseline = "top", t.fillStyle = this.data.style.color, t.fillText(c, d, w);
      const S = t.measureText(c).width;
      t.strokeStyle = this.data.style.color, t.lineWidth = Math.max(2, this.data.style.lineWidth * e * 0.75), t.beginPath(), t.moveTo(r + a * 0.72, l + a * 0.72), t.lineTo(d - 5 * e, v), t.lineTo(d + S + 3 * e, v), t.stroke();
    }
    t.restore();
  }
  drawMarkerFace(t, e, i, s, o, a) {
    t.beginPath(), t.arc(e, i, s, 0, Math.PI * 2), t.fillStyle = this.data.style.color, t.fill(), t.strokeStyle = "rgba(255, 255, 255, 0.92)", t.lineWidth = Math.max(1, a), t.stroke(), t.fillStyle = "#ffffff", t.font = `600 ${o}px ${te}`, t.textAlign = "center", t.textBaseline = "middle", t.fillText(String(this.data.markerNumber || 1), e, i + a * 0.5);
  }
  hitTest(t, e = 8) {
    const i = this.data.points[0];
    if (!i) return !1;
    const s = hn(this.data.fontSize || oe);
    if (Math.hypot(t.x - i.x, t.y - i.y) <= s + e) return !0;
    const a = this.getBounds();
    return !!a && t.x >= a.x - e && t.x <= a.x + a.width + e && t.y >= a.y - e && t.y <= a.y + a.height + e;
  }
  getBounds() {
    const t = this.data.points[0];
    if (!t) return null;
    const e = this.data.fontSize || oe, i = hn(e), s = this.data.text?.trim() || "";
    let o = t.x + i;
    if (s) {
      const r = document.createElement("canvas").getContext("2d");
      r && (r.font = `${e}px ${te}`, o = Hn(t, e).x + r.measureText(s).width + 4);
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
class tn {
  static createAnnotation(t, e, i, s = {}) {
    switch (t) {
      case f.Rectangle:
        return new ia(e, i);
      case f.Ellipse:
        return new sa(e, i);
      case f.Line:
        return new oa(e, i);
      case f.Arrow:
        return new aa(e, i);
      case f.Pen:
        return new ra(e, i);
      case f.Text:
        return new la(
          e,
          s.text || "",
          i,
          s.fontSize || 16
        );
      case f.Marker:
        return new ca(
          e,
          s.markerNumber || 1,
          s.text || "",
          i,
          s.fontSize || 16
        );
      case f.Mosaic:
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
      [f.Rectangle]: "drawing-rect",
      [f.Ellipse]: "drawing-ellipse",
      [f.Line]: "drawing-line",
      [f.Arrow]: "drawing-arrow",
      [f.Pen]: "drawing-pen",
      [f.Text]: "drawing-text",
      [f.Marker]: "drawing-marker",
      [f.Mosaic]: "drawing-mosaic",
      [f.Select]: "none"
    }[t] || "none";
  }
  // 检查工具是否为绘图工具
  static isDrawingTool(t) {
    return t !== f.Select && t !== f.ColorPicker && t !== f.Ocr && t !== f.Pin;
  }
  // 检查工具是否支持样式设置
  static supportsStyleSettings(t) {
    return t !== f.Select && t !== f.Mosaic;
  }
  // 检查工具是否支持颜色设置
  static supportsColorSettings(t) {
    return [
      f.Rectangle,
      f.Ellipse,
      f.Line,
      f.Arrow,
      f.Pen,
      f.Text,
      f.Marker
    ].includes(t);
  }
  // 检查工具是否支持线宽设置
  static supportsLineWidthSettings(t) {
    return [
      f.Rectangle,
      f.Ellipse,
      f.Line,
      f.Arrow,
      f.Pen
    ].includes(t);
  }
  // 检查工具是否支持文字大小设置
  static supportsTextSizeSettings(t) {
    return t === f.Text || t === f.Marker;
  }
  // 检查工具是否支持马赛克大小设置
  static supportsMosaicSizeSettings(t) {
    return t === f.Mosaic;
  }
}
const fe = class fe {
  constructor() {
    P(this, "pool", []);
    P(this, "maxPoolSize", 5);
    // 最大池大小
    P(this, "inUse", /* @__PURE__ */ new Set());
  }
  static getInstance() {
    return fe.instance || (fe.instance = new fe()), fe.instance;
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
P(fe, "instance");
let jn = fe;
async function ha(n, t) {
  return await b("get_local_plugin_resource_path", {
    pluginId: n,
    relativePath: t
  });
}
const ua = "snippets-code:developer-mode", ps = "snippets-code:frontend-diagnostics", da = 240, Ee = "[REDACTED]", un = (n) => n.replace(
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
  if (typeof n == "string") return un(n);
  const t = /* @__PURE__ */ new WeakSet();
  try {
    return un(
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
    return un(String(n));
  }
}, ga = () => {
  try {
    return globalThis.__TAURI_INTERNALS__?.metadata?.currentWindow?.label ?? "webview";
  } catch {
    return "webview";
  }
}, fa = () => {
  if (typeof localStorage > "u") return [];
  try {
    const n = JSON.parse(localStorage.getItem(ps) || "[]");
    return Array.isArray(n) ? n : [];
  } catch {
    return [];
  }
}, ei = () => {
  if (typeof localStorage > "u") return !1;
  try {
    return localStorage.getItem(ua) === "true";
  } catch {
    return !1;
  }
}, ma = (n, t, e) => {
  if (!ei() || typeof localStorage > "u") return;
  const i = fa();
  i.push({
    timestamp: (/* @__PURE__ */ new Date()).toISOString(),
    level: n,
    windowLabel: ga(),
    message: un(t),
    data: ti(e)
  });
  try {
    localStorage.setItem(
      ps,
      JSON.stringify(i.slice(-da))
    );
  } catch {
  }
}, pa = () => ei(), wa = (n) => n === "error" || ei(), en = (n, t, e) => {
  ma(n, t, e), wa(n) && b("frontend_log", {
    level: n,
    message: t,
    data: e === void 0 ? null : ti(e)
  }).catch(() => {
  });
}, D = {
  info: (n, t, ...e) => {
    en("info", n, t);
  },
  error: (n, t) => {
    en("error", n, t);
  },
  warn: (n, t) => {
    en("warn", n, t);
  },
  debug: (n, t) => {
    pa() && en("debug", n, t);
  }
}, Rt = {
  log: (n, t) => {
    b("append_ocr_diagnostic_log", {
      message: n,
      data: t === void 0 ? null : ti(t)
    }).catch(() => {
    });
  }
}, ya = "resources/transformers/transformers.min.js", va = ["translation-offline-runtime", "translation"], xa = "https://huggingface.co/", ka = "{model}/resolve/{revision}/", ba = "/__snippets_code_disabled_transformers_local_models__/", Sa = [
  "ort-wasm-simd-threaded.wasm",
  "ort-wasm-simd.wasm",
  "ort-wasm-threaded.wasm",
  "ort-wasm.wasm"
];
let $e = null;
const Ma = (n) => {
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
}, ws = (n) => {
  const t = n.search(/[?#]/), e = t >= 0 ? n.slice(0, t) : n, i = Ma(e);
  return i.index >= 0 ? e.slice(0, i.index + i.length) : e;
}, ys = (n) => {
  const t = ws(n);
  return Object.fromEntries(
    Sa.map((e) => [e, `${t}${e}`])
  );
}, Ca = (n, t) => {
  var e, i;
  n.useBrowserCache = !0, n.allowRemoteModels = !0, n.remoteHost = xa, n.remotePathTemplate = ka, n.allowLocalModels = !1, n.localModelPath = ba, t && (n.backends ?? (n.backends = {}), (e = n.backends).onnx ?? (e.onnx = {}), (i = n.backends.onnx).wasm ?? (i.wasm = {}), n.backends.onnx.wasm.wasmPaths = ys(t), n.backends.onnx.wasm.numThreads = 1);
};
async function _a() {
  return $e || ($e = (async () => {
    for (const n of va) {
      const t = await ha(n, ya);
      if (!t) continue;
      const e = Vo(t), i = await import(
        /* @vite-ignore */
        e
      );
      return Ca(i.env, e), D.info(`[离线翻译] 已从插件资源加载 Transformers runtime: ${n}`, {
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
let ee = null, je = !1, _e = null, we = null, Fn = null;
const Ta = "Xenova/opus-mt-en-zh", za = [
  { name: "tokenizer_config.json", size: "~1KB" },
  { name: "config.json", size: "~1KB" },
  { name: "tokenizer.json", size: "~2MB" },
  { name: "generation_config.json", size: "~1KB" },
  { name: "onnx/encoder_model_quantized.onnx", size: "~75MB" },
  { name: "onnx/decoder_model_merged_quantized.onnx", size: "~220MB" }
], Ra = 3e5;
function La(n) {
  Fn = n;
}
function Pa() {
  return za;
}
function Aa(n, t, e) {
  return Promise.race([
    n,
    new Promise(
      (i, s) => setTimeout(() => s(new Error(e)), t)
    )
  ]);
}
async function vs() {
  return ee || _e || (je = !0, D.info("[离线翻译] 正在加载翻译模型..."), _e = (async () => {
    try {
      const { pipeline: n } = await _a();
      let t = "";
      const e = n("translation", Ta, {
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
      return ee = await Aa(
        e,
        Ra,
        "模型加载超时，请检查网络连接后重试"
      ), D.info("[离线翻译] 翻译模型加载完成"), je = !1, ee;
    } catch (n) {
      throw je = !1, _e = null, D.error("[离线翻译] 模型加载失败:", n), n;
    }
  })(), _e);
}
async function xs(n) {
  if (!n?.trim()) return n;
  we = new AbortController();
  const t = we.signal;
  try {
    const e = await vs();
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
function Da() {
  we && (we.abort(), we = null, D.info("[离线翻译] 已发送取消信号"));
}
function Ia() {
  return we !== null;
}
async function ks() {
  await vs();
}
function Oa() {
  return ee !== null;
}
function Ea() {
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
async function $a() {
  return (await ni()).isCached;
}
function Wa() {
  return ee !== null;
}
async function Ba() {
  if (ee)
    try {
      await ee.dispose?.();
    } catch {
    }
  ee = null, _e = null, je = !1, D.info("[离线翻译] 翻译器已释放");
}
async function Na() {
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
const Ha = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  canUseOfflineTranslation: Wa,
  cancelOfflineTranslation: Da,
  clearModelCache: Na,
  disposeOfflineTranslator: Ba,
  getModelCacheInfo: ni,
  getModelFiles: Pa,
  getRuntimeBaseUrl: ws,
  getRuntimeWasmPaths: ys,
  isModelCached: $a,
  isOfflineTranslatorInitializing: Ea,
  isOfflineTranslatorReady: Oa,
  isTranslationInProgress: Ia,
  setProgressCallback: La,
  translateOffline: xs,
  warmupOfflineTranslator: ks
}, Symbol.toStringTag, { value: "Module" }));
class ge {
  /**
   * 懒加载 OCR 模块
   */
  static async loadOCR() {
    const t = "ocr";
    if (this.loadedModules.has(t))
      return this.loadedModules.get(t);
    if (this.loadingPromises.has(t))
      return this.loadingPromises.get(t);
    const e = Promise.resolve().then(() => _g).then((i) => (this.loadedModules.set(t, i), this.loadingPromises.delete(t), i));
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
    const e = Promise.resolve(Ha).then((i) => (this.loadedModules.set(t, i), this.loadingPromises.delete(t), i));
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
P(ge, "loadedModules", /* @__PURE__ */ new Map()), P(ge, "loadingPromises", /* @__PURE__ */ new Map());
async function ja() {
  return await b("local_ai_get_config");
}
async function Fa(n) {
  return await b("local_ai_scan_models", {
    config: n ?? null
  });
}
async function bs() {
  return await b("local_ai_get_status");
}
async function Va(n) {
  return await b("local_ai_start_service", {
    config: null
  });
}
async function Ss(n) {
  return await b("local_ai_chat", { request: n });
}
function Ms(n) {
  if (!n) return "unknown";
  const t = n.match(/[\u4e00-\u9fa5]/g), e = t ? t.length : 0, i = n.match(/[\u3040-\u30ff]/g), s = i ? i.length : 0, o = n.match(/[\uac00-\ud7af]/g), a = o ? o.length : 0, r = n.match(/[a-zA-Z]/g), l = r ? r.length : 0, u = e + s + a + l;
  return u === 0 ? "unknown" : s >= 3 && s > l && s / u >= 0.2 ? "ja" : a >= 3 && a > e && a > l && a / u >= 0.2 ? "ko" : e > l ? "zh" : l > e ? "en" : "unknown";
}
function Te(n) {
  return n === "zh" || n === "en";
}
function de(n) {
  return Ms(n);
}
const Ua = /[.!?。！？；;：:][)"'”’】）\]]*$/, Ii = /[\u3040-\u30ff\u3400-\u4dbf\u4e00-\u9fff\uac00-\ud7af]/, nn = /[A-Za-z0-9]/, Ya = /^\s*(?:(?:[-*+•·●○■□▪▫◆◇]|[▶▷►▸▹→]\s*(?:[·•]\s*)?)\s+|\d+[.)、）]\s*|[a-zA-Z][.)]\s+)/, Oi = /(?:^|\s)(?:(?:[-*+•·●○■□▪▫◆◇]|[▶▷►▸▹→]\s*[·•])\s+|\d+[.)、）]\s*|[a-zA-Z][.)]\s+)/g;
function Za(n, t = {}) {
  const e = Ar(n), i = ar(n, e);
  return i.length === 0 ? [] : ir(i, e) ? nr(i, e) : (t.mode === "single_para" ? [Be(i, e)] : Ga(i, e)).flatMap((o) => Xa(o, e));
}
function Xa(n, t) {
  const e = si(n, t), i = [];
  for (const s of e) {
    const o = i[i.length - 1], a = o ? dr(o, s, t) : !1;
    if (!o || !a) {
      i.push(fr(s));
      continue;
    }
    o.text = pr(o.text, s.text), o.blocks = [...o.blocks, ...s.blocks], o.bbox = Ls(o.bbox, s.bbox), o.fontSize = Wi(
      o.fontSize || s.fontSize,
      o.blocks.length - s.blocks.length,
      s.fontSize,
      s.blocks.length
    ), o.lineHeight = Wi(
      o.lineHeight || s.lineHeight,
      o.blocks.length - s.blocks.length,
      s.lineHeight,
      s.blocks.length
    ), o.isCodeBlock = !!(o.isCodeBlock || s.isCodeLike || s.hasTableColumns), o.isStructuredBlock = !!(o.isStructuredBlock || s.hasTableColumns);
  }
  return wr(i, t);
}
function Ga(n, t) {
  if (n.length <= 1)
    return [n];
  const e = n.map((l) => ({
    bbox: sr(l),
    block: l
  })).filter((l) => or(l.bbox)).sort(ii);
  if (e.length <= 1)
    return [Be(n, t)];
  if (Ka(e, t))
    return [Be(n, t)];
  const { cuts: i, rows: s } = qa(e);
  if (i.length < 2 || s.length <= 1)
    return [Be(n, t)];
  const o = tr(i, s), r = er(o).filter((l) => l.units.length > 0).map((l) => l.units.map((c) => c.block)).filter((l) => l.length > 0);
  return r.length > 0 ? r : [Be(n, t)];
}
function Ka(n, t) {
  if (n.length < 2)
    return !0;
  const e = [...n].sort(ii);
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
function qa(n) {
  const t = Math.min(...n.map((l) => l.bbox.left)) - 1, e = Math.max(...n.map((l) => l.bbox.right)) + 1, i = [], s = [];
  let o = [], a = 0;
  for (; a < n.length; ) {
    const c = n[a].bbox.bottom, u = [];
    for (; a < n.length && n[a].bbox.top <= c; )
      u.push(n[a]), a += 1;
    u.sort((g, m) => g.bbox.left - m.bbox.left || g.bbox.right - m.bbox.right);
    const d = Ja(u, t, e, i.length), { gaps: w, removedGaps: v } = Qa(o, d), S = i.length - 1;
    for (const g of v)
      s.push({
        left: g.left,
        right: g.right,
        startRow: g.startRow,
        endRow: S
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
function Ja(n, t, e, i) {
  const s = [];
  let o = t;
  for (const a of n)
    a.bbox.left > o && s.push({ left: o, right: a.bbox.left, startRow: i }), a.bbox.right > o && (o = a.bbox.right);
  return s.push({ left: o, right: e, startRow: i }), s;
}
function Qa(n, t) {
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
function tr(n, t) {
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
    const l = r.xRight - 2, c = s.filter((v) => l >= v.xLeft && l <= v.xRight + 1e-4 && v.rowBottom < r.rowTop), u = Math.max(...c.map((v) => v.rowBottom), i.rowBottom), d = c.filter((v) => v.rowBottom === u);
    (d.length > 0 ? d.reduce((v, S) => S.xRight > v.xRight ? S : v) : i).children.push(r), s.push(r);
  };
  for (let r = 0; r < t.length; r += 1) {
    const l = e[r], c = [];
    for (const v of o) {
      let S = !1, g = !1, m = !1;
      for (const R of l)
        if (sn(R.right, v.xLeft) && (S = !0), sn(R.left, v.xRight) && (g = !0), v.xLeft < R.left && R.left < v.xRight || v.xLeft < R.right && R.right < v.xRight) {
          m = !0;
          break;
        }
      !S || !g || m ? a(v) : (v.rowBottom = r, c.push(v));
    }
    o = c;
    let u = 0, d = 0;
    const w = t[r];
    for (; u < w.length && l.length >= 2; ) {
      const v = w[u];
      d + 1 >= l.length && (d = Math.max(0, l.length - 2));
      const S = l[d].right, g = l[d + 1].left;
      if (v.bbox.left + 1e-4 > g && d < l.length - 2) {
        d += 1;
        continue;
      }
      let m = o.find((R) => sn(R.xLeft, S) && sn(R.xRight, g));
      m || (m = {
        xLeft: S,
        xRight: g,
        rowTop: r,
        rowBottom: r,
        units: [],
        children: []
      }, o.push(m)), m.units.push(v), u += 1;
    }
  }
  for (const r of o)
    a(r);
  for (const r of s)
    r.children.sort((l, c) => l.xLeft - c.xLeft || l.rowTop - c.rowTop), r.units.sort(ii);
  return i;
}
function er(n) {
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
function nr(n, t) {
  const e = re(Ot(n.map((a) => a.width)), t * 0.5), i = Math.max(e * 1.4, t * 0.28), s = [...n].sort((a, r) => {
    const l = r.x + r.width / 2 - (a.x + a.width / 2);
    return Math.abs(l) > t * 0.65 ? l : a.y - r.y;
  }), o = [];
  for (const a of s) {
    const r = a.x + a.width / 2, l = o[o.length - 1], c = l ? Ot(l.map((u) => u.x + u.width / 2)) : 0;
    l && Math.abs(r - c) <= i ? l.push(a) : o.push([a]);
  }
  return o.map((a) => {
    const r = [...a].sort((w, v) => w.y - v.y), l = r.reduce((w, v, S) => {
      const g = v.text.trim();
      return S === 0 ? g : oi(w, g);
    }, ""), c = Rs(r), u = Ot(r.map((w) => re(w.fontSize, t))), d = Ot(r.map((w) => Mn(w)));
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
function ir(n, t) {
  return n.length < 2 ? !1 : n.filter((i) => {
    const s = Math.max(i.width, 1);
    return i.height > s * 1.35 && i.height > Math.max(18, t * 0.35);
  }).length >= Math.max(2, Math.ceil(n.length * 0.56));
}
function sr(n) {
  return {
    left: n.x,
    top: n.y,
    right: n.x + n.width,
    bottom: n.y + n.height
  };
}
function or(n) {
  return Number.isFinite(n.left) && Number.isFinite(n.top) && Number.isFinite(n.right) && Number.isFinite(n.bottom) && n.right >= n.left && n.bottom >= n.top;
}
function ii(n, t) {
  return n.bbox.top - t.bbox.top || n.bbox.left - t.bbox.left;
}
function sn(n, t) {
  return Math.abs(n - t) <= 1e-4;
}
function ar(n, t) {
  return n.map((e) => {
    const i = e.text.trim();
    if (!i || rr(e, t) || cr(i))
      return null;
    const s = hr(lr(i, e, t));
    return s === e.text ? e : { ...e, text: s };
  }).filter((e) => !!e);
}
function rr(n, t) {
  const e = n.text.trim();
  if (!/^[cC]$/.test(e))
    return !1;
  const i = t * 1.25;
  return n.width <= i && n.height <= i;
}
function lr(n, t, e) {
  return /^xC$/i.test(n) && t.width <= e * 2.4 ? "X" : n;
}
function cr(n) {
  return /^(?:en|zh|ja|ko|de|fr|es|ru|pt|it|nl)[A-Z]{2,4}$/.test(n.trim());
}
function hr(n) {
  return n.replace(/^:\s+(?=[A-Z])/, "- ");
}
function si(n, t) {
  const e = [...n].sort((o, a) => {
    const r = o.y - a.y;
    return Math.abs(r) > t * 0.45 ? r : o.x - a.x;
  }), i = [], s = t * 0.45;
  for (const o of e) {
    const a = i[i.length - 1];
    a && Math.abs(o.y - a.y) < s && !Tr(a.blocks, o, t) ? (a.blocks.push(o), a.y = Ot(a.blocks.map((r) => r.y))) : i.push({ y: o.y, blocks: [o] });
  }
  return i.map((o) => ur(o.blocks, t));
}
function ur(n, t) {
  const e = [...n].sort((r, l) => r.x - l.x), i = Rs(e), s = e.reduce((r, l, c) => {
    const u = l.text.trim();
    return c === 0 ? u : mr(r, u);
  }, ""), o = Ot(e.map((r) => re(r.fontSize, t))), a = Ot(e.map((r) => Mn(r)));
  return {
    text: s,
    blocks: e,
    bbox: i,
    fontSize: o,
    lineHeight: a,
    centerY: i.y + i.height / 2,
    hasTableColumns: zr(e, t),
    isCodeLike: Ts(s)
  };
}
function dr(n, t, e) {
  const i = si(n.blocks, e), s = i[i.length - 1];
  if (!s) return !1;
  const o = Ue(s.text);
  if (Sn(s.text) || Ue(t.text) || o && !gr(s, t, e) || t.isCodeLike || s.isCodeLike || t.hasTableColumns || s.hasTableColumns) return !1;
  const a = t.bbox.y - (s.bbox.y + s.bbox.height);
  if (a < -e * 0.25 || a >= e * 1.8 || br(i, a, e) || Sr(s, t, a, e) || Mr(s, t, a, e) || Cr(s, t, a, e) || _r(s, t, a, e))
    return !1;
  if (o)
    return !0;
  const r = Math.max(e * 1.2, s.lineHeight * 0.9);
  return Math.abs(t.bbox.x - s.bbox.x) <= r;
}
function gr(n, t, e) {
  if (_s(t.text))
    return !1;
  const i = t.bbox.x - n.bbox.x, s = Math.max(e * 0.8, n.lineHeight * 0.65);
  return i >= s;
}
function fr(n) {
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
function mr(n, t) {
  return oi(n, t);
}
function pr(n, t) {
  return oi(n, t);
}
function oi(n, t) {
  const e = n.trimEnd(), i = t.trimStart();
  if (!e) return i;
  if (!i) return e;
  const s = e.charAt(e.length - 1), o = i.charAt(0), a = e.charAt(e.length - 2);
  return s === "-" && nn.test(a) && nn.test(o) ? `${e.slice(0, -1)}${i}` : Dr(o) || Ir(s) ? `${e}${i}` : Ii.test(s) || Ii.test(o) || Bi(s) || Bi(o) ? `${e}${i}` : nn.test(s) && nn.test(o) ? `${e} ${i}` : `${e} ${i}`.replace(/\s+/g, " ");
}
function Sn(n) {
  return Ua.test(n.trim());
}
function Ue(n) {
  return Ya.test(n);
}
function wr(n, t) {
  return n.flatMap((e) => yr(e, t));
}
function yr(n, t) {
  const e = Cs(n.text);
  if (e.length <= 1)
    return [n];
  const i = si(n.blocks, t), s = i.length === e.length;
  return e.map((o, a) => {
    const r = s ? i[a] : null, l = r?.bbox || xr(n.bbox, a, e.length), c = r?.blocks || [kr(n, o, l, a)];
    return {
      ...n,
      text: o,
      blocks: c,
      bbox: l,
      isCodeBlock: !!c.some((u) => Ts(u.text)),
      isStructuredBlock: n.isStructuredBlock,
      fontSize: Ot(c.map((u) => re(u.fontSize, n.fontSize || t))),
      lineHeight: Ot(c.map((u) => Mn(u))),
      angle: Ot(c.map((u) => u.angle || 0))
    };
  });
}
function Cs(n) {
  const t = n.split(/\r?\n+/).map((i) => i.trim()).filter(Boolean);
  if (t.length > 1)
    return t.flatMap(Cs);
  const e = vr(n);
  return e.length > 1 ? e.flatMap(Ei) : Ei(n);
}
function vr(n) {
  const t = n.trim(), e = [];
  Oi.lastIndex = 0;
  for (const i of t.matchAll(Oi)) {
    const s = i[0], o = i.index ?? 0;
    e.push(o + (s.startsWith(" ") ? 1 : 0));
  }
  return e.length <= 1 ? [t] : e.map((i, s) => {
    const o = e[s + 1] ?? t.length;
    return t.slice(i, o).trim();
  }).filter(Boolean);
}
function Ei(n) {
  const t = n.trim();
  if (!Ue(t))
    return [t];
  const e = t.match(/^(.+?\([^)]{1,80}\))\s+([A-Z][A-Za-z0-9][A-Za-z0-9\s:,'&()[\]/-]{2,40})$/);
  return !e || !_s(e[2]) ? [t] : [e[1].trim(), e[2].trim()];
}
function xr(n, t, e) {
  const i = n.height / Math.max(e, 1);
  return {
    x: n.x,
    y: n.y + i * t,
    width: n.width,
    height: i
  };
}
function kr(n, t, e, i) {
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
function _s(n) {
  const t = n.trim();
  return !t || Sn(t) || Ue(t) ? !1 : t.split(/\s+/).filter(Boolean).length <= 5 && /^[A-Z][A-Za-z0-9\s:,'&()[\]/-]+$/.test(t);
}
function br(n, t, e) {
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
function Sr(n, t, e, i) {
  const s = n.text.trim();
  if (!s || Sn(s) || Ue(s) || n.isCodeLike || s.endsWith("-"))
    return !1;
  const o = s.split(/\s+/).filter(Boolean).length, a = n.bbox.width < t.bbox.width * 0.72, r = /^[A-Z][A-Za-z0-9\s:,'&()[\]/-]+$/.test(s) && o <= 8 && a, l = /[\u3400-\u4dbf\u4e00-\u9fff]/.test(s) && s.length <= 12 && a, c = r || l;
  return n.fontSize >= t.fontSize * 1.18 && c ? !0 : e > i * 0.7 && c;
}
function Mr(n, t, e, i) {
  if (e <= 0)
    return !1;
  const s = Math.max(n.fontSize, t.fontSize), o = Math.max(Math.min(n.fontSize, t.fontSize), 1), a = s / o, r = e / Math.max(o, i * 0.6, 1);
  if (a >= 1.45 && r >= 0.65)
    return !0;
  const l = n.fontSize >= i * 1.08 && n.bbox.width >= t.bbox.width * 0.82, c = t.fontSize <= n.fontSize * 0.78 && e >= Math.max(t.lineHeight * 0.75, i * 0.55);
  return l && c;
}
function Cr(n, t, e, i) {
  if (e < i * 0.45)
    return !1;
  const o = n.text.split(/\s+/).filter(Boolean).length <= 3 && n.bbox.width < t.bbox.width * 0.35, a = Math.abs(n.bbox.x - t.bbox.x) <= i * 0.6;
  return o && a;
}
function _r(n, t, e, i) {
  return e < i * 0.25 || !(Math.abs(n.bbox.x - t.bbox.x) <= i * 0.35) ? !1 : $i(n.text) && $i(t.text);
}
function $i(n) {
  const t = n.trim();
  return t.split(/\s+/).filter(Boolean).length <= 3 && t.length <= 32 && !Sn(t);
}
function Ts(n) {
  const t = n.trim();
  return t ? !!(/^(?:\$|>|PS>|C:\\|[A-Za-z]:\\|\/[\w.-]+\/)/.test(t) || /^(?:const|let|var|return|import|export|function|class|if|else|for|while|try|catch)\b/.test(t) || /^[{}()[\];,]+$/.test(t) || /^(?:sudo|npm|yarn|pnpm|deno|bun|git|cd|ls|cat|chmod|mkdir|rm|cp|mv|curl|wget|brew|apt|yum|dnf|pip|cargo)\s+\S+/.test(t) || /[{};]/.test(t) && /[=()]/.test(t) || /^<\/?[A-Za-z][^>]*>$/.test(t) || /^[\w.-]+\([^)]*\)\s*[{;]?$/.test(t)) : !1;
}
function Tr(n, t, e) {
  const i = [...n].sort((a, r) => a.x - r.x), s = i[i.length - 1], o = t.x - (s.x + s.width);
  return o > e * 0.9 && Pr(s.text) && zs(t.text) ? !1 : o > e * 3.2;
}
function zr(n, t) {
  if (n.length < 2)
    return n.some((s) => Rr(s.text));
  const e = [...n].sort((s, o) => s.x - o.x);
  let i = 0;
  for (let s = 1; s < e.length; s++) {
    const o = e[s - 1], a = e[s], r = e[s].x - (o.x + o.width);
    (r > t * 1.8 || r > t * 0.9 && Lr(o.text) && zs(a.text)) && (i += 1);
  }
  return i >= 1;
}
function Rr(n) {
  const t = n.trim();
  return /\S\s{3,}\S/.test(t) && (/^Option\s{2,}Description\b/i.test(t) || /^[A-Za-z_][A-Za-z0-9_-]{1,24}\s{2,}[A-Z]/.test(t));
}
function Lr(n) {
  return /^[A-Za-z_][A-Za-z0-9_-]{1,24}$/.test(n.trim());
}
function Pr(n) {
  const t = n.trim();
  return /^[a-z_][A-Za-z0-9_-]{1,24}$/.test(t) || /[_-]/.test(t);
}
function zs(n) {
  const t = n.trim();
  return /^[A-Z]/.test(t) && t.length > 6;
}
function Rs(n) {
  const t = n.map((e) => ({
    x: e.x,
    y: e.y,
    width: e.width,
    height: e.height
  }));
  return t.reduce((e, i) => Ls(e, i), t[0]);
}
function Ls(n, t) {
  const e = Math.min(n.x, t.x), i = Math.min(n.y, t.y), s = Math.max(n.x + n.width, t.x + t.width), o = Math.max(n.y + n.height, t.y + t.height);
  return {
    x: e,
    y: i,
    width: s - e,
    height: o - i
  };
}
function Ar(n) {
  return re(Ot(n.map((t) => Mn(t))), 16);
}
function Mn(n) {
  return re(n.lineHeight, re(n.height, re(n.fontSize, 16) * 1.2));
}
function Wi(n, t, e, i) {
  const s = t + i;
  return s <= 0 ? e : (n * t + e * i) / s;
}
function re(n, t) {
  return Number.isFinite(n) && n > 0 ? n : t;
}
function Ot(n) {
  return n.length === 0 ? 0 : n.reduce((t, e) => t + e, 0) / n.length;
}
function Dr(n) {
  return /^[,.;:!?，。！？；：、)\]}>"'”’]$/.test(n);
}
function Ir(n) {
  return /^[(\[{<"'“‘]$/.test(n);
}
function Bi(n) {
  return /^[，。！？；：、（）【】《》“”‘’]$/.test(n);
}
const Ni = 34;
class Or {
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
    let v = 0, S = 1, g = t.x, m = t.x, R = t.y, A = t.y;
    for (d[0] = t.x, w[0] = t.y, u[(t.y - o) * l + t.x - s] = 1; v < S; ) {
      const Z = d[v], U = w[v];
      if (v += 1, g = Math.min(g, Z), m = Math.max(m, Z), R = Math.min(R, U), A = Math.max(A, U), S = this.enqueueNeighbors(
        Z,
        U,
        s,
        o,
        a,
        r,
        l,
        i,
        u,
        d,
        w,
        S
      ), S > l * c * 0.94) return null;
    }
    const _ = m - g + 1, H = A - R + 1;
    return S / Math.max(1, _ * H) >= 0.24 ? { x: g, y: R, width: _, height: H } : null;
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
    let v = w;
    const S = [
      { x: t - 1, y: e },
      { x: t + 1, y: e },
      { x: t, y: e - 1 },
      { x: t, y: e + 1 }
    ];
    for (const g of S) {
      if (g.x < i || g.x >= o || g.y < s || g.y >= a)
        continue;
      const m = (g.y - s) * r + g.x - i;
      c[m] || (c[m] = 1, this.isColorNear(this.getColor(g.x, g.y), l) && (u[v] = g.x, d[v] = g.y, v += 1));
    }
    return v;
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
    return i * i + s * s + o * o <= Ni * Ni;
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
const Er = 960, $r = 640;
class ai {
  constructor(t, e, i, s, o) {
    P(this, "regionDetector");
    P(this, "lastDetection", null);
    this.sampleWidth = e, this.sampleHeight = i, this.logicalWidth = s, this.logicalHeight = o, this.regionDetector = new Or(
      t,
      e,
      i
    );
  }
  static fromImage(t, e, i) {
    if (e <= 0 || i <= 0) return null;
    const s = Math.min(
      1,
      Er / e,
      $r / i
    ), o = Math.max(1, Math.round(e * s)), a = Math.max(1, Math.round(i * s)), r = document.createElement("canvas");
    r.width = o, r.height = a;
    const l = r.getContext("2d", { willReadFrequently: !0 });
    if (!l) return null;
    l.drawImage(t, 0, 0, o, a);
    const c = l.getImageData(0, 0, o, a);
    return new ai(
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
function Hi(n, t) {
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
class Wr {
  constructor() {
    P(this, "currentRect", null);
    P(this, "isFinalized", !1);
  }
  preview(t) {
    return t ? this.isFinalized && Hi(this.currentRect, t) ? {
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
    const e = !Hi(this.currentRect, t);
    return this.currentRect = this.cloneRect(t), {
      rect: this.cloneRect(this.currentRect),
      changed: e
    };
  }
  cloneRect(t) {
    return t ? { ...t } : null;
  }
}
class Br {
  constructor(t, e, i, s) {
    P(this, "canvas");
    P(this, "coordinateSystem");
    P(this, "drawingEngine");
    P(this, "eventHandler");
    // 状态管理
    P(this, "selectionRect", null);
    P(this, "annotations", []);
    P(this, "currentAnnotation", null);
    P(this, "selectedAnnotation", null);
    P(this, "hoveredAnnotation", null);
    // 拖拽状态
    P(this, "draggedAnnotation", null);
    P(this, "dragStartPoint", null);
    P(this, "resizingAnnotation", null);
    P(this, "resizeStartBounds", null);
    P(this, "resizeOperation", null);
    // 编辑状态
    P(this, "editingAnnotation", null);
    // 标注历史记录（用于撤销/恢复）
    P(this, "annotationUndoStack", []);
    P(this, "annotationRedoStack", []);
    P(this, "pendingDragSnapshot", null);
    P(this, "pendingResizeSnapshot", null);
    // 工具设置
    P(this, "currentTool", f.Select);
    P(this, "currentStyle", { color: "#ff4444", lineWidth: 3, opacity: 1 });
    P(this, "textSize", 16);
    P(this, "mosaicSize", 8);
    P(this, "selectionCornerRadius", 0);
    P(this, "showGuides", !0);
    // 取色器状态
    P(this, "colorPickerState", {
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
    P(this, "allWindows", []);
    P(this, "snapThreshold", 30);
    // 吸附阈值（像素）
    P(this, "snappedWindow", null);
    P(this, "snappedElement", null);
    P(this, "elementCandidateStabilizer", new Wr());
    P(this, "showSnapPreview", !1);
    P(this, "captureMonitor", { x: 0, y: 0, scale: 1 });
    P(this, "lastPointerPosition", null);
    P(this, "smartDetectionSequence", 0);
    P(this, "smartDetectionTimer", null);
    P(this, "accessibilityDetectionTimer", null);
    P(this, "pendingSmartDetection", null);
    // 点击拖拽区分
    P(this, "pendingSnapCandidate", null);
    P(this, "dragStartPosition", null);
    P(this, "dragThreshold", 5);
    // 拖拽阈值（像素）
    // 节流相关状态
    P(this, "throttleTimer", null);
    P(this, "lastThrottledTimestamp", 0);
    P(this, "throttleInterval", 33);
    // ms, 30 FPS (优化性能)
    // 按键状态
    P(this, "isShiftPressed", !1);
    // 背景图像（预捕获的屏幕）
    P(this, "backgroundImage", null);
    P(this, "visualElementDetector", null);
    // 是否正在加载完整背景图
    P(this, "isLoadingBackground", !1);
    // 翻译覆盖层状态
    P(this, "translationOverlay", {
      blocks: [],
      isVisible: !1,
      isLoading: !1,
      sourceLanguage: "auto",
      targetLanguage: "zh",
      engine: "bing"
      // 默认值，实际值由组件初始化时从后端获取并设置
    });
    // 离线模型后端激活状态
    P(this, "offlineModelActivated", !1);
    // Canvas 池
    P(this, "canvasPool", jn.getInstance());
    // 回调函数
    P(this, "onStateChange");
    P(this, "onTextInputRequest");
    P(this, "onColorPicked");
    // 背景重载标记（用于避免重复加载）
    P(this, "backgroundReloadPending", !1);
    // 事件处理器引用（用于清理）
    P(this, "mouseDownHandler", this.handleMouseDown.bind(this));
    P(this, "mouseMoveHandler", this.handleMouseMove.bind(this));
    P(this, "mouseUpHandler", this.handleMouseUp.bind(this));
    P(this, "doubleClickHandler", this.handleDoubleClick.bind(this));
    P(this, "keyDownHandler", this.handleKeyDownInternal.bind(this));
    P(this, "keyUpHandler", this.handleKeyUp.bind(this));
    this.canvas = t, this.onStateChange = e, this.onTextInputRequest = i, this.onColorPicked = s, this.coordinateSystem = new ea(t), this.drawingEngine = new ta(t, this.coordinateSystem), this.eventHandler = new na(t, this.coordinateSystem), this.bindMouseEvents(), this.initCanvas(), Promise.all([
      this.loadAllWindows().then(() => {
        this.detectInitialWindowSnap();
      }),
      this.loadScreenBackground()
    ]), ge.preloadModules();
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
    if (this.annotations = t.annotations.map((e) => tn.fromData(this.cloneAnnotationData(e))).filter((e) => e !== null), this.selectedAnnotation = null, this.hoveredAnnotation = null, this.draggedAnnotation = null, this.resizingAnnotation = null, this.editingAnnotation = null, t.selectedAnnotationId) {
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
              this.visualElementDetector = ai.fromImage(
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
    if ((this.currentTool === f.Select || this.currentTool === f.Marker) && i?.getData().type === f.Marker) {
      this.clearSelection(), i.updateData({ selected: !0 }), this.selectedAnnotation = i, this.startTextInput(i.getData().points[0], i), this.draw(), this.onStateChange?.();
      return;
    }
    const s = this.eventHandler.getOperationType(
      e,
      this.currentTool,
      this.selectionRect,
      this.annotations
    );
    if (s !== T.None)
      switch (this.eventHandler.setCurrentOperation(s), this.eventHandler.startDrawing(e), s) {
        case T.Drawing:
          if (!this.selectionRect && this.currentTool === f.Select) {
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
        case T.DrawingRect:
        case T.DrawingEllipse:
        case T.DrawingLine:
        case T.DrawingArrow:
        case T.DrawingPen:
        case T.DrawingMosaic:
        case T.DrawingMarker:
          this.startAnnotation(e);
          break;
        case T.DrawingText:
          this.startTextInput(e), this.eventHandler.stopDrawing();
          break;
        case T.ColorPicking:
          this.handleColorPicking(e), this.eventHandler.stopDrawing();
          break;
        case T.Pinning:
          this.selectionRect && (this.createPinWindow(), this.eventHandler.stopDrawing());
          break;
        case T.EditingAnnotation:
          this.selectAnnotationAtPoint(e), this.selectedAnnotation && this.selectedAnnotation.getData().type === f.Text && this.startTextInput(this.selectedAnnotation.getData().points[0], this.selectedAnnotation);
          break;
        case T.MovingAnnotation:
          this.startAnnotationDrag(e);
          break;
        case T.ResizingAnnotationNW:
        case T.ResizingAnnotationSE:
          this.startAnnotationResize(e, s);
          break;
        case T.Moving:
        case T.ResizingNW:
        case T.ResizingNE:
        case T.ResizingSW:
        case T.ResizingSE:
        case T.ResizingN:
        case T.ResizingS:
        case T.ResizingW:
        case T.ResizingE:
          break;
      }
  }
  // 鼠标移动处理
  handleMouseMove(t) {
    const e = this.coordinateSystem.getCanvasPosition(t);
    this.lastPointerPosition = e;
    const i = this.eventHandler.getDrawingState();
    if (i.isDrawing)
      this.eventHandler.updateMousePosition(e), this.pendingSnapCandidate && this.dragStartPosition && !this.selectionRect && xt(e, this.dragStartPosition) > this.dragThreshold && (this.selectionRect = {
        x: this.dragStartPosition.x,
        y: this.dragStartPosition.y,
        width: 0,
        height: 0
      }, this.pendingSnapCandidate = null, this.onStateChange?.()), this.currentAnnotation ? this.updateCurrentAnnotation(e) : this.draggedAnnotation ? this.updateAnnotationDrag(e) : this.resizingAnnotation ? this.updateAnnotationResize(e) : this.selectionRect && this.currentTool === f.Select && this.updateSelectionRect(e, i), this.draw(), this.onStateChange?.();
    else {
      if (this.currentTool === f.Select && !this.selectionRect) {
        const s = this.detectNearbyWindow(e);
        s !== this.snappedWindow && (this.cancelSmartDetection(), this.snappedWindow = s, this.snappedElement = null, this.elementCandidateStabilizer.reset(), this.showSnapPreview = !0, this.draw()), this.showSnapPreview || (this.showSnapPreview = !0, this.draw()), s && this.scheduleUiElementDetection(e, s);
      }
      this.updateHoverState(e), this.currentTool === f.ColorPicker && this.selectionRect && (this.coordinateSystem.isPointInRect(e, this.selectionRect) ? (this.colorPickerState.isVisible = !0, this.colorPickerState.mousePosition = e, this.draw(), this.throttledUpdateColorPreview(e)) : this.colorPickerState.isVisible && (this.colorPickerState.isVisible = !1, this.draw()));
    }
  }
  // 鼠标抬起处理
  handleMouseUp(t) {
    this.eventHandler.getDrawingState().isDrawing && (this.eventHandler.stopDrawing(), this.pendingSnapCandidate && !this.selectionRect && (this.selectionRect = { ...this.pendingSnapCandidate.rect }), this.pendingSnapCandidate = null, this.dragStartPosition = null, this.snappedWindow = null, this.snappedElement = null, this.elementCandidateStabilizer.reset(), this.showSnapPreview = !1, this.cancelSmartDetection(), this.finishAnnotation(), this.finishAnnotationDrag(), this.finishAnnotationResize(), this.selectionRect && (Math.abs(this.selectionRect.width) < 10 || Math.abs(this.selectionRect.height) < 10) ? this.selectionRect = null : this.selectionRect && (this.selectionRect.width < 0 && (this.selectionRect.x += this.selectionRect.width, this.selectionRect.width = Math.abs(this.selectionRect.width)), this.selectionRect.height < 0 && (this.selectionRect.y += this.selectionRect.height, this.selectionRect.height = Math.abs(this.selectionRect.height))), this.draw(), this.onStateChange?.());
  }
  // 双击处理
  handleDoubleClick(t) {
    const e = this.coordinateSystem.getCanvasPosition(t), i = this.eventHandler.getAnnotationAtPoint(e, this.annotations);
    (i?.getData().type === f.Text || i?.getData().type === f.Marker) && (this.clearSelection(), i.updateData({ selected: !0 }), this.selectedAnnotation = i, this.startTextInput(e, i));
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
      case T.Drawing:
        this.selectionRect.width = t.x - e.startPoint.x, this.selectionRect.height = t.y - e.startPoint.y;
        break;
      case T.Moving:
        this.selectionRect.x += s, this.selectionRect.y += o;
        break;
      case T.ResizingNW:
        this.selectionRect.x += s, this.selectionRect.y += o, this.selectionRect.width -= s, this.selectionRect.height -= o;
        break;
      case T.ResizingNE:
        this.selectionRect.y += o, this.selectionRect.width += s, this.selectionRect.height -= o;
        break;
      case T.ResizingSW:
        this.selectionRect.x += s, this.selectionRect.width -= s, this.selectionRect.height += o;
        break;
      case T.ResizingSE:
        this.selectionRect.width += s, this.selectionRect.height += o;
        break;
      case T.ResizingN:
        this.selectionRect.y += o, this.selectionRect.height -= o;
        break;
      case T.ResizingS:
        this.selectionRect.height += o;
        break;
      case T.ResizingW:
        this.selectionRect.x += s, this.selectionRect.width -= s;
        break;
      case T.ResizingE:
        this.selectionRect.width += s;
        break;
    }
    this.selectionRect.width < 10 && (this.selectionRect.width = 10), this.selectionRect.height < 10 && (this.selectionRect.height = 10);
  }
  // 选择指定位置的标注
  selectAnnotationAtPoint(t) {
    const e = this.eventHandler.getAnnotationAtPoint(t, this.annotations);
    e && e !== this.selectedAnnotation && (this.selectedAnnotation && this.selectedAnnotation.updateData({ selected: !1 }), this.selectedAnnotation = e, this.selectedAnnotation.updateData({ selected: !0 }), this.selectedAnnotation.getData().type === f.Text && this.startTextInput(t, this.selectedAnnotation), this.draw(), this.onStateChange?.());
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
      case T.ResizingAnnotationNW:
        this.resizingAnnotation.updateData({
          points: [t, e.points[1]]
        });
        break;
      case T.ResizingAnnotationSE:
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
    if (this.currentTool !== f.Select) {
      this.updateToolCursor();
      return;
    }
    const e = this.eventHandler.getAnnotationAtPoint(t, this.annotations);
    e !== this.hoveredAnnotation && (this.hoveredAnnotation && this.hoveredAnnotation.updateData({ hovered: !1 }), this.hoveredAnnotation = e && e.getData().type !== f.Mosaic ? e : null, this.hoveredAnnotation && this.hoveredAnnotation.updateData({ hovered: !0 }), this.draw()), this.updateCursorForPosition(t);
  }
  // 更新鼠标样式
  updateCursorForPosition(t) {
    if (this.currentTool !== f.Select) {
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
      [T.Moving]: "move",
      [T.ResizingNW]: "nw-resize",
      [T.ResizingNE]: "ne-resize",
      [T.ResizingSW]: "sw-resize",
      [T.ResizingSE]: "se-resize",
      [T.ResizingN]: "n-resize",
      [T.ResizingS]: "s-resize",
      [T.ResizingW]: "w-resize",
      [T.ResizingE]: "e-resize",
      [T.EditingAnnotation]: "pointer",
      [T.MovingAnnotation]: "move",
      [T.ResizingAnnotationNW]: "nw-resize",
      [T.ResizingAnnotationSE]: "se-resize",
      [T.Drawing]: "crosshair"
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
      case f.Pen:
        this.updateCursor(this.createPenCursor(this.currentStyle.color));
        break;
      case f.Mosaic:
        this.updateCursor(this.createCircleCursor(Math.max(this.mosaicSize * 3, 24), "#666"));
        break;
      case f.ColorPicker:
        this.updateCursor(this.createColorPickerCursor());
        break;
      case f.Rectangle:
      case f.Ellipse:
      case f.Line:
      case f.Arrow:
      case f.Text:
      case f.Marker:
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
      const t = this.editingAnnotation?.getData().type === f.Text ? this.annotations.filter((e) => e.getData().id !== this.editingAnnotation.getData().id) : this.annotations;
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
      const g = e + s / 2, m = i + o / 2;
      t.fillStyle = "rgba(0, 0, 0, 0.7)", t.fillRect(e, i, s, o), t.font = '16px "Microsoft YaHei", sans-serif', t.fillStyle = "#ffffff", t.textAlign = "center", t.textBaseline = "middle";
      let R = "正在识别翻译...";
      this.translationOverlay.engine === "local-ai" && (this.translationOverlay.loadingStage === "starting-service" ? R = "正在启动 AI 模型服务..." : R = "正在由 AI 识图翻译..."), t.fillText(R, g, m), t.restore();
      return;
    }
    if (this.translationOverlay.errorMessage) {
      const g = e + s / 2, m = i + o / 2;
      t.fillStyle = "rgba(0, 0, 0, 0.8)", t.fillRect(e, i, s, o), t.font = '16px "Microsoft YaHei", sans-serif', t.fillStyle = "#ff6b6b", t.textAlign = "center", t.textBaseline = "middle", t.fillText(this.translationOverlay.errorMessage, g, m), t.restore();
      return;
    }
    if (this.translationOverlay.blocks.length === 0) {
      t.restore();
      return;
    }
    const r = { x: e, y: i, width: s, height: o }, l = this.sampleRegionColor(r), c = l.brightness < 128;
    let u, d;
    if (c) {
      const g = Math.max(0, Math.round(l.r * 0.1)), m = Math.max(0, Math.round(l.g * 0.1)), R = Math.max(0, Math.round(l.b * 0.1));
      u = `rgba(${g}, ${m}, ${R}, 0.95)`, d = "rgba(255, 255, 255, 0.9)";
    } else {
      const g = Math.min(255, Math.round(l.r + (255 - l.r) * 0.95)), m = Math.min(255, Math.round(l.g + (255 - l.g) * 0.95)), R = Math.min(255, Math.round(l.b + (255 - l.b) * 0.95));
      u = `rgba(${g}, ${m}, ${R}, 0.95)`, d = "rgba(0, 0, 0, 0.85)";
    }
    t.fillStyle = u, t.fillRect(e, i, s, o), t.fillStyle = d, t.textAlign = "left", t.textBaseline = "top";
    const w = this.translationOverlay.paragraphBlocks?.length ? this.translationOverlay.paragraphBlocks : this.translationOverlay.blocks.map((g) => ({
      text: g.text,
      translatedText: g.translatedText,
      blocks: [g],
      bbox: {
        x: g.x,
        y: g.y,
        width: g.width,
        height: g.height
      },
      isCodeBlock: g.isCodeBlock,
      isStructuredBlock: !1,
      fontSize: g.fontSize,
      lineHeight: g.lineHeight,
      angle: g.angle
    })), v = w.filter((g) => g.isStructuredBlock), S = w.filter((g) => !g.isStructuredBlock);
    S.length > 0 && this.drawFlowedTranslationBlocks(t, S, e, i, a, s, o);
    for (const g of v)
      this.drawStructuredTranslationBlock(t, g, e, i, a, s, o);
    t.restore();
  }
  drawFlowedTranslationBlocks(t, e, i, s, o, a, r) {
    const l = [...e].filter((_) => (_.translatedText || _.text).trim()).sort((_, H) => {
      const V = _.bbox.y - H.bbox.y;
      return Math.abs(V) > 4 ? V : _.bbox.x - H.bbox.x;
    });
    if (l.length === 0)
      return;
    const c = Math.max(24, r - o * 2), u = o, d = (_, H, V) => l.map((Z) => {
      const U = (Z.translatedText || Z.text).trim(), F = Math.max(12, Math.min(Z.fontSize || 16, 48)), X = Math.max(8, Math.round(F * _)), G = Z.isCodeBlock ? '"Consolas", "Monaco", monospace' : '"Microsoft YaHei", "PingFang SC", "Hiragino Sans GB", sans-serif', Q = Math.max(
        o,
        Math.min(Z.bbox.x + o, a * 0.38)
      ), tt = H ? o : Q, ot = Math.max(48, a - tt - u), wt = Z.lineHeight || X * 1.35, at = Math.max(
        X * (V ? 1.04 : 1.14),
        Math.min(wt * _, X * (V ? 1.18 : 1.42))
      );
      return t.font = `${X}px ${G}`, {
        text: U,
        fontSize: X,
        fontFamily: G,
        lineHeight: at,
        paragraphGap: V ? Math.max(1, at * 0.16) : Math.max(3, at * 0.35),
        x: i + tt,
        lines: this.wrapTextToLines(t, U, ot)
      };
    }), w = (_) => _.reduce((H, V, Z) => {
      const U = Z === _.length - 1 ? 0 : V.paragraphGap;
      return H + V.lines.length * V.lineHeight + U;
    }, 0);
    let v = d(1, !1, !1), S = w(v);
    if (S > c) {
      const _ = Math.max(0.56, c / S);
      v = d(_, !1, !1), S = w(v);
    }
    if (S > c && (v = d(1, !0, !1), S = w(v)), S > c) {
      const _ = Math.max(0.38, c / S * 0.96);
      v = d(_, !0, !0), S = w(v);
    }
    if (S > c) {
      const _ = Math.max(0.3, c / S * 0.94);
      v = d(_, !0, !0), S = w(v);
    }
    const g = Math.min(...l.map((_) => _.bbox.y)), m = s + Math.max(o, Math.min(g, r - o)), R = s + r - o;
    let A = m + S > R ? s + o : m;
    for (const _ of v) {
      t.font = `${_.fontSize}px ${_.fontFamily}`;
      for (const H of _.lines)
        t.fillText(H, _.x, A), A += _.lineHeight;
      A += _.paragraphGap;
    }
  }
  drawStructuredTranslationBlock(t, e, i, s, o, a, r) {
    const l = [...e.blocks].sort((d, w) => d.x - w.x), c = Math.max(12, Math.min(e.fontSize || 14, 32)), u = e.lineHeight || c * 1.35;
    t.font = `${c}px "Consolas", "Monaco", monospace`;
    for (const d of l) {
      const w = d.translatedText || d.text;
      if (!w.trim()) continue;
      const v = i + d.x + Math.min(4, o), S = s + d.y, g = l.find((_) => _.x > d.x), m = g ? Math.max(d.width, g.x - d.x - 8) : Math.max(d.width, a - d.x - o), R = this.wrapTextToLines(t, w.trim(), m);
      let A = S;
      for (const _ of R) {
        if (A + c > s + r) break;
        t.fillText(_, v, A), A += u;
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
    const c = this.backgroundImage.width, u = this.backgroundImage.height, d = this.canvas.width / s, w = this.canvas.height / s, v = c / d, S = u / w, g = t.x * v, m = t.y * S, R = t.width * v, A = t.height * S;
    try {
      l.drawImage(
        this.backgroundImage,
        g,
        m,
        R,
        A,
        0,
        0,
        o,
        a
      );
    } catch (Y) {
      return D.error("[截图] 采样区域绘制失败", Y), this.canvasPool.release(r), i;
    }
    let _;
    try {
      _ = l.getImageData(0, 0, o, a);
    } catch (Y) {
      return D.error("[截图] 获取像素数据失败", Y), this.canvasPool.release(r), i;
    }
    const H = _.data, V = Math.ceil(Math.sqrt(e)), Z = o / (V + 1), U = a / (V + 1);
    let F = 0, X = 0, G = 0, Q = 0;
    for (let Y = 1; Y <= V; Y++)
      for (let J = 1; J <= V && !(Q >= e); J++) {
        const mt = Math.floor(J * Z), lt = Math.floor(Y * U);
        if (mt >= 0 && mt < o && lt >= 0 && lt < a) {
          const rt = (lt * o + mt) * 4;
          rt >= 0 && rt + 2 < H.length && (F += H[rt], X += H[rt + 1], G += H[rt + 2], Q++);
        }
      }
    if (this.canvasPool.release(r), Q === 0)
      return i;
    const tt = Math.round(F / Q), ot = Math.round(X / Q), wt = Math.round(G / Q), at = this.getBrightness(tt, ot, wt);
    return {
      r: tt,
      g: ot,
      b: wt,
      brightness: at
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
    const c = this.backgroundImage.width, u = this.backgroundImage.height, d = this.canvas.width / s, w = this.canvas.height / s, v = c / d, S = u / w, g = t.x * v, m = t.y * S, R = t.width * v, A = t.height * S;
    try {
      l.drawImage(
        this.backgroundImage,
        g,
        m,
        R,
        A,
        0,
        0,
        o,
        a
      );
    } catch (Y) {
      return D.error("[截图] isUniformColor: 采样区域绘制失败", Y), this.canvasPool.release(r), !1;
    }
    let _;
    try {
      _ = l.getImageData(0, 0, o, a);
    } catch (Y) {
      return D.error("[截图] isUniformColor: 获取像素数据失败", Y), this.canvasPool.release(r), !1;
    }
    const H = _.data, V = Math.ceil(Math.sqrt(i)), Z = o / (V + 1), U = a / (V + 1), F = [];
    for (let Y = 1; Y <= V; Y++)
      for (let J = 1; J <= V && !(F.length >= i); J++) {
        const mt = Math.floor(J * Z), lt = Math.floor(Y * U);
        if (mt >= 0 && mt < o && lt >= 0 && lt < a) {
          const rt = (lt * o + mt) * 4;
          rt >= 0 && rt + 2 < H.length && F.push({
            r: H[rt],
            g: H[rt + 1],
            b: H[rt + 2]
          });
        }
      }
    if (this.canvasPool.release(r), F.length < 2)
      return !1;
    const X = F.reduce((Y, J) => Y + J.r, 0) / F.length, G = F.reduce((Y, J) => Y + J.g, 0) / F.length, Q = F.reduce((Y, J) => Y + J.b, 0) / F.length, tt = F.reduce((Y, J) => Y + Math.pow(J.r - X, 2), 0) / F.length, ot = F.reduce((Y, J) => Y + Math.pow(J.g - G, 2), 0) / F.length, wt = F.reduce((Y, J) => Y + Math.pow(J.b - Q, 2), 0) / F.length;
    return (tt + ot + wt) / 3 < e;
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
    this.currentTool = t, this.clearSelection(), this.showGuides = t === f.Select, this.colorPickerState.isActive = t === f.ColorPicker, this.colorPickerState.isActive || (this.colorPickerState.isVisible = !1, this.colorPickerState.colorInfo = void 0), t !== f.Translate && this.translationOverlay.isVisible && this.clearTranslationOverlay(), t !== f.Select && this.hoveredAnnotation && (this.hoveredAnnotation.updateData({ hovered: !1 }), this.hoveredAnnotation = null), this.snappedWindow = null, this.snappedElement = null, this.elementCandidateStabilizer.reset(), this.showSnapPreview = !1, this.pendingSnapCandidate = null, this.cancelSmartDetection(), this.dragStartPosition = null, t !== f.Select && this.updateToolCursor(), this.draw(), this.onStateChange?.();
  }
  // 执行翻译（供外部调用）
  executeTranslation() {
    this.currentTool === f.Translate && this.selectionRect && (this.translationOverlay.isLoading = !0, this.translationOverlay.isVisible = !0, this.draw(), this.onStateChange?.(), this.performOcrTranslation());
  }
  // 开始创建标注
  startAnnotation(t) {
    if (tn.isDrawingTool(this.currentTool)) {
      if (this.currentTool === f.Text) {
        this.startTextInput(t);
        return;
      }
      this.currentAnnotation = tn.createAnnotation(
        this.currentTool,
        t,
        this.currentStyle,
        {
          fontSize: this.textSize,
          markerNumber: this.currentTool === f.Marker ? this.getNextMarkerNumber() : void 0,
          mosaicSize: this.mosaicSize
        }
      );
    }
  }
  getNextMarkerNumber() {
    return this.annotations.reduce((t, e) => e.getData().type !== f.Marker ? t : Math.max(t, e.getData().markerNumber || 0), 0) + 1;
  }
  // 更新当前标注
  updateCurrentAnnotation(t) {
    if (!this.currentAnnotation)
      return;
    const e = this.currentAnnotation.getData();
    switch (e.type) {
      case f.Rectangle:
      case f.Ellipse:
      case f.Line:
      case f.Arrow:
        t = Jo(
          e.type,
          e.points[0],
          t,
          this.isShiftPressed
        ), e.points.length === 1 ? this.currentAnnotation.addPoint(t) : this.currentAnnotation.updateLastPoint(t);
        break;
      case f.Pen:
        this.currentAnnotation.addPoint(t);
        break;
      case f.Mosaic:
        this.currentAnnotation.addPoint(t);
        break;
    }
  }
  // 完成标注创建
  finishAnnotation() {
    if (this.currentAnnotation) {
      const t = this.currentAnnotation.getData();
      t.type === f.Pen && this.isShiftPressed && t.points.length >= 3 && this.smartCorrectPenAnnotation(), this.currentAnnotation.isValid() && (this.pushAnnotationHistory(), this.annotations.push(this.currentAnnotation), this.onStateChange?.());
    }
    this.currentAnnotation = null;
  }
  // 智能识别并矫正画笔标注
  smartCorrectPenAnnotation() {
    if (!this.currentAnnotation) return;
    const e = this.currentAnnotation.getData().points;
    if (e.length < 3) return;
    let i = e[0].x, s = e[0].x, o = e[0].y, a = e[0].y;
    e.forEach((v) => {
      i = Math.min(i, v.x), s = Math.max(s, v.x), o = Math.min(o, v.y), a = Math.max(a, v.y);
    });
    const r = s - i, l = a - o;
    let c = 0;
    for (let v = 1; v < e.length; v++)
      c += xt(e[v - 1], e[v]);
    const d = xt(e[0], e[e.length - 1]) / c, w = Math.max(r, l) / Math.max(Math.min(r, l), 1);
    if (d > 0.85 || w > 5) {
      const v = e[0], S = e[e.length - 1];
      this.currentAnnotation.updateData({ points: [v, S] });
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
    const i = tn.createAnnotation(
      f.Text,
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
          let pt = 0;
          for (; !this.backgroundImage && pt < 3e3; )
            await new Promise((I) => setTimeout(I, 100)), pt += 100;
          if (!this.backgroundImage)
            throw new Error("背景图像加载超时");
        }
        const c = window.devicePixelRatio || 1, u = Math.max(0, o.padding || 0), d = this.canvas.width / c, w = this.canvas.height / c, v = t - u, S = e - u, g = i + u * 2, m = s + u * 2, R = Math.max(1, Math.round(g * c)), A = Math.max(1, Math.round(m * c)), _ = Math.max(0, v), H = Math.max(0, S), V = Math.min(d, v + g), Z = Math.min(w, S + m), U = Math.max(0, V - _), F = Math.max(0, Z - H), X = Math.round(_ * c), G = Math.round(H * c), Q = Math.min(
          this.canvas.width - X,
          Math.round(U * c)
        ), tt = Math.min(
          this.canvas.height - G,
          Math.round(F * c)
        ), ot = Math.round((_ - v) * c), wt = Math.round((H - S) * c), at = document.createElement("canvas");
        at.width = R, at.height = A;
        const Y = at.getContext("2d", {
          alpha: !0,
          desynchronized: !1,
          willReadFrequently: !1
        });
        if (!Y)
          throw new Error("无法获取2D绘图上下文");
        Y.imageSmoothingEnabled = !1, o.fillColor && (Y.fillStyle = o.fillColor, Y.fillRect(0, 0, R, A)), Q > 0 && tt > 0 && Y.drawImage(
          this.backgroundImage,
          X,
          G,
          Q,
          tt,
          ot,
          wt,
          Q,
          tt
        );
        const mt = at.toDataURL("image/png", 1).replace(/^data:image\/png;base64,/, "");
        clearTimeout(l), a({
          image: mt,
          adjusted_width: R,
          adjusted_height: A,
          logical_x: v,
          logical_y: S,
          logical_width: g,
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
            const w = t.logical_width > 0 ? t.adjusted_width / t.logical_width : e, v = {
              x: t.logical_x,
              y: t.logical_y,
              width: t.logical_width,
              height: t.logical_height
            }, S = this.drawingEngine.createScreenshotContext(
              l,
              w,
              v
            );
            this.annotations.forEach((g, m) => {
              try {
                g.drawToScreenshot(S);
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
    this.currentStyle = { ...this.currentStyle, ...t }, this.currentTool === f.Pen && (t.color || t.lineWidth) && this.updateToolCursor(), this.onStateChange?.();
  }
  // 更新文字大小
  updateTextSize(t) {
    this.textSize = t, this.onStateChange?.();
  }
  // 更新马赛克大小
  updateMosaicSize(t) {
    this.mosaicSize = t, this.currentTool === f.Mosaic && this.updateToolCursor(), this.onStateChange?.();
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
    if (t.getData().type === f.Text || t.getData().type === f.Marker) {
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
        const { x: e, y: i, width: s, height: o } = this.selectionRect, a = await b("get_window_info"), r = a?.scale || 1, l = Math.round(a.x + e * r), c = Math.round(a.y + i * r), u = Math.round(s * r), d = Math.round(o * r), w = Math.round(a.x + window.innerWidth * r), v = Math.round(a.y + window.innerHeight * r), S = t === "ocr" ? Math.min(Math.max(u, 760), Math.max(360, w - a.x)) : u, g = t === "ocr" ? Math.min(Math.max(d, 520), Math.max(260, v - a.y)) : d, m = t === "ocr" ? Math.round(l - Math.max(0, S - u) / 2) : l, R = t === "ocr" ? Math.max(a.x, Math.min(m, w - S)) : l, A = t === "ocr" ? Math.max(a.y, Math.min(c, v - g)) : c, _ = {}, H = await this.cropFromBackground(e, i, s, o, _);
        if (!H?.image)
          throw new Error("Failed to crop from background image");
        const V = await this.renderWithAnnotations(H, r, "save");
        await b("create_pin_window", {
          mode: t,
          imageData: V,
          x: R,
          y: A,
          width: S,
          height: g
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
          const v = w.getImageData(o, o, 1, 1).data, S = { r: v[0], g: v[1], b: v[2] }, g = this.rgbToHex(S.r, S.g, S.b);
          this.colorPickerState.colorInfo = { rgb: S, hex: g, position: t };
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
        const { x: r, y: l, width: c, height: u } = this.selectionRect, d = window.devicePixelRatio || 1, w = c * d, v = u * d, S = this.canvasPool.acquire(w, v), g = S.getContext("2d");
        if (!g)
          throw this.canvasPool.release(S), new Error("无法创建临时canvas");
        const m = r * d, R = l * d, A = performance.now();
        g.drawImage(
          this.backgroundImage,
          m,
          R,
          w,
          v,
          0,
          0,
          w,
          v
        ), e = Math.round(performance.now() - A);
        const _ = performance.now(), { recognizeFromCanvas: H } = await ge.loadOCR();
        i = Math.round(performance.now() - _);
        const V = performance.now(), Z = await H(S);
        s = Math.round(performance.now() - V), this.canvasPool.release(S);
        const U = {
          cropDurationMs: e,
          ocrModuleLoadDurationMs: i,
          ocrRecognitionDurationMs: s,
          confidence: Z.confidence,
          rawLineCount: Z.blocks.length,
          textLength: Z.full_text.trim().length
        };
        D.info("[OCR] 识别耗时统计", U), Rt.log("[OCR] recognition timing", U);
        const F = Z.blocks, X = performance.now(), G = Za(F);
        o = Math.round(performance.now() - X);
        const Q = G.map((C) => C.text).join(`

`), tt = {
          rawLineCount: F.length,
          paragraphCount: G.length,
          durationMs: o,
          paragraphs: G.map((C, et) => ({
            index: et,
            text: C.text,
            blockCount: C.blocks.length,
            isCodeBlock: !!C.isCodeBlock,
            isStructuredBlock: !!C.isStructuredBlock,
            bbox: C.bbox,
            sourceBlocks: C.blocks.map((bt) => ({
              text: bt.text,
              x: bt.x,
              y: bt.y,
              width: bt.width,
              height: bt.height
            }))
          }))
        };
        if (D.info("[OCR] 版面重组完成", tt), Rt.log("[OCR] layout reflow complete", tt), !Q || !Q.trim()) {
          this.translationOverlay.isLoading = !1, this.translationOverlay.isVisible = !1, this.draw(), this.onStateChange?.();
          return;
        }
        const ot = this.translationOverlay.engine;
        this.translationOverlay.sourceLanguage = "auto", this.translationOverlay.targetLanguage = this.getAutoTargetLanguage(de(Q));
        const wt = (C) => {
          const et = C.trim();
          return !!(et.match(/^(sudo|npm|yarn|pip|git|cd|ls|cat|chmod|chown|mkdir|rm|cp|mv|curl|wget|brew|apt|yum|dnf|sh|SH|Bash|PowerShell|Fish|Yarn|pnpm|deno|bun|Cargo)\s+\S+/) && !et.match(/^(If|When|Click|Please|You|After|Before|Then|Open|Go|Download)/i));
        };
        let at = "";
        const Y = de(Q), J = {
          detectedLanguage: Y,
          textLength: Q.trim().length,
          textPreview: Q.trim().slice(0, 500)
        };
        D.info("[OCR] 翻译语言检测完成", J), Rt.log("[OCR] translation language detected", J), Te(Y) && (this.translationOverlay.sourceLanguage = Y, this.translationOverlay.targetLanguage = this.getAutoTargetLanguage(Y));
        const mt = ot === "offline" ? ge.loadOfflineTranslator() : null, lt = (C) => C.includes("插件") && C.includes("未启用") ? C.includes("translation") ? "OCR识别已完成，但翻译插件未启用，请在插件设置中安装并启用 Translation 插件" : C : ot === "offline" ? C.includes("未激活") || C.includes("未下载") || C.includes("运行时未安装") ? C : C.includes("超时") ? "模型加载超时，请重试" : C.includes("离线翻译暂仅支持") ? C : "离线翻译失败: " + C.substring(0, 50) : C.includes("timeout") || C.includes("超时") ? "翻译超时，请检查网络连接" : C.includes("network") || C.includes("网络") || C.includes("请求") || C.includes("令牌") ? "翻译失败，请检查网络连接" : C.trim() ? C.slice(0, 80) : "翻译失败，请检查网络连接", rt = async () => {
          if (!mt)
            throw new Error("离线翻译模块未加载");
          const {
            translateOffline: C,
            canUseOfflineTranslation: et,
            warmupOfflineTranslator: bt,
            getModelCacheInfo: ht
          } = await mt, zt = et();
          if (this.offlineModelActivated && !zt)
            if ((await ht()).isCached)
              await bt();
            else
              throw new Error("离线翻译模型未下载，请在设置-翻译配置中下载模型");
          else if (!this.offlineModelActivated)
            throw new Error("离线翻译模型未激活，请在设置-翻译配置中激活模型");
          return C;
        }, pt = async (C, et, bt) => {
          if (!C.trim())
            return C;
          if (ot === "offline") {
            if (et !== "en" || bt !== "zh")
              throw new Error("离线翻译暂仅支持英译中，请切换 Google 或 Bing 进行中译英");
            return (await rt())(C);
          }
          return await b("translate_text", {
            text: C,
            from: et,
            to: bt,
            engine: ot
          });
        }, I = (C) => {
          const et = C.trim();
          return /^(?:option|description|name|value|type|default|example|required)$/i.test(et) ? !1 : /^[A-Za-z_][A-Za-z0-9_-]{1,32}$/.test(et);
        }, yt = async (C, et, bt) => {
          const ht = C.trim();
          if (!ht || wt(ht))
            return C;
          const zt = C.match(/^(\s*)(\S+)(\s{2,})(.+?)(\s*)$/);
          if (zt) {
            const [, ut, dt, q, St, Dt] = zt, _t = de(dt), Ie = I(dt) || !Te(_t) ? dt : await pt(dt, _t, this.getAutoTargetLanguage(_t)), ce = de(St), Zt = Te(ce) && !wt(St) ? await pt(St, ce, this.getAutoTargetLanguage(ce)) : St;
            return `${ut}${Ie}${q}${Zt}${Dt}`;
          }
          if (I(ht))
            return C;
          const Pt = de(ht);
          if (!Te(Pt))
            return C;
          const Et = this.getAutoTargetLanguage(Pt), k = await pt(ht, Pt, Et), W = {
            paragraphIndex: et,
            blockIndex: bt,
            sourceLanguage: Pt,
            targetLanguage: Et,
            sourceText: ht,
            translatedText: k.slice(0, 200)
          };
          return D.info("[OCR] 结构化块翻译完成", W), Rt.log("[OCR] structured block translation complete", W), k;
        }, N = async (C, et) => {
          const bt = performance.now(), ht = (k) => ({
            index: et,
            durationMs: Math.round(performance.now() - bt),
            ...k
          }), zt = de(C.text), Pt = this.getAutoTargetLanguage(zt), Et = {
            index: et,
            text: C.text,
            sourceLanguage: zt,
            targetLanguage: Pt,
            engine: ot,
            structured: !!C.isStructuredBlock
          };
          if (D.info("[OCR] 段落翻译方向", Et), Rt.log("[OCR] paragraph translation direction", Et), !Te(zt)) {
            C.translatedText = C.text;
            const k = ht({
              skipped: !0,
              cancelled: !1,
              errorMessage: "部分文本暂不支持翻译，已保留原文"
            }), W = {
              index: et,
              detectedLanguage: zt,
              durationMs: k.durationMs,
              text: C.text
            };
            return D.warn("[OCR] 跳过不支持的段落语言", W), Rt.log("[OCR] skip unsupported paragraph language", W), k;
          }
          try {
            if (C.isStructuredBlock && C.blocks.length > 0) {
              const ut = async (q, St) => {
                const Dt = await yt(q.text, et, St);
                return q.translatedText = Dt, Dt;
              }, dt = [];
              if (ot === "offline")
                for (let q = 0; q < C.blocks.length; q += 1)
                  dt.push(await ut(C.blocks[q], q));
              else
                dt.push(
                  ...await Promise.all(
                    C.blocks.map((q, St) => ut(q, St))
                  )
                );
              C.translatedText = dt.join(" ");
            } else if (wt(C.text) || C.isCodeBlock) {
              C.translatedText = C.text;
              const ut = C.isCodeBlock ? "code_block" : "command_like_text", dt = ht({ skipped: !0, cancelled: !1 }), q = {
                index: et,
                reason: ut,
                durationMs: dt.durationMs,
                text: C.text
              };
              return D.info("[OCR] 跳过代码段翻译", q), Rt.log("[OCR] skip code paragraph translation", q), dt;
            } else
              C.translatedText = await pt(
                C.text,
                zt,
                Pt
              );
            const k = ht({ skipped: !1, cancelled: !1 }), W = {
              index: et,
              durationMs: k.durationMs,
              sourceLanguage: zt,
              targetLanguage: Pt,
              engine: ot,
              structured: !!C.isStructuredBlock,
              sourceLength: C.text.length,
              translatedLength: (C.translatedText || "").length,
              translatedPreview: (C.translatedText || "").slice(0, 300)
            };
            return D.info("[OCR] 段落翻译完成", W), Rt.log("[OCR] paragraph translation complete", W), k;
          } catch (k) {
            const W = k instanceof Error ? k.message : String(k);
            if (W === "翻译已取消")
              return ht({ skipped: !1, cancelled: !0 });
            C.translatedText = C.text;
            const ut = lt(W), dt = ht({
              skipped: !1,
              cancelled: !1,
              errorMessage: ut
            }), q = {
              index: et,
              durationMs: dt.durationMs,
              sourceLanguage: zt,
              targetLanguage: Pt,
              engine: ot,
              error: W,
              structured: !!C.isStructuredBlock,
              text: C.text
            };
            return D.error("[OCR] 段落翻译失败", q), Rt.log("[OCR] paragraph translation failed", q), dt;
          }
        }, kt = performance.now();
        let ct = [];
        if (ot === "offline")
          for (let C = 0; C < G.length; C += 1) {
            const et = await N(G[C], C);
            if (ct.push(et), et.cancelled)
              return;
            if (et.errorMessage) {
              at = et.errorMessage;
              break;
            }
          }
        else {
          if (ct = await Promise.all(
            G.map((C, et) => N(C, et))
          ), ct.some((C) => C.cancelled))
            return;
          at = ct.find((C) => C.errorMessage)?.errorMessage || "";
        }
        a = Math.round(performance.now() - kt);
        const Lt = {
          durationMs: a,
          engine: ot,
          paragraphCount: G.length,
          translatedParagraphCount: ct.filter((C) => !C.skipped && !C.errorMessage).length,
          skippedParagraphCount: ct.filter((C) => C.skipped).length,
          failedParagraphCount: ct.filter((C) => !!C.errorMessage).length
        };
        D.info("[OCR] 翻译耗时统计", Lt), Rt.log("[OCR] translation timing", Lt);
        const Nt = G.map((C) => this.toDisplayParagraph(C, d)), qt = Nt.map((C) => this.toLegacyOverlayBlock(C));
        this.translationOverlay.blocks = qt, this.translationOverlay.paragraphBlocks = Nt, this.translationOverlay.isLoading = !1, this.translationOverlay.errorMessage = at || void 0;
        const Jt = {
          cropDurationMs: e,
          ocrModuleLoadDurationMs: i,
          ocrRecognitionDurationMs: s,
          reflowDurationMs: o,
          translationDurationMs: a,
          totalDurationMs: Math.round(performance.now() - t),
          rawLineCount: F.length,
          paragraphCount: G.length,
          engine: ot
        };
        D.info("[OCR] 截图翻译总耗时统计", Jt), Rt.log("[OCR] pipeline timing", Jt), this.draw(), this.onStateChange?.();
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
        this.translationOverlay.loadingStage = "starting-service", this.draw(), this.onStateChange?.(), (await bs()).running || (D.info("[截图] AI 服务未运行，正在启动..."), await Va(), D.info("[截图] AI 服务启动完成"));
        const a = await this.cropFromBackground(t, e, i, s);
        if (!a?.image)
          throw new Error("无法获取截图选区图像");
        this.translationOverlay.loadingStage = "translating", this.draw(), this.onStateChange?.(), await new Promise((m) => setTimeout(m, 100));
        const l = (await Ss({
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
        const c = Math.max(14, Math.min(20, Math.round(s / 18))), u = Math.max(18, Math.min(28, Math.round(s / 12))), d = l.split(/\n\n+/).filter((m) => m.trim()), w = Math.max(d.length, 1), v = (s - 16) / w, S = d.map((m, R) => {
          const A = R * v + 8, _ = R === w - 1 ? s - A - 8 : v, H = {
            text: "",
            translatedText: m.trim(),
            x: 0,
            y: A,
            width: i,
            height: _,
            fontSize: c,
            lineHeight: u,
            angle: 0
          };
          return {
            text: "",
            translatedText: m.trim(),
            blocks: [H],
            bbox: { x: 0, y: A, width: i, height: _ },
            isCodeBlock: !1,
            isStructuredBlock: !1,
            fontSize: c,
            lineHeight: u,
            angle: 0
          };
        }), g = S.length > 0 ? S : [{
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
        this.translationOverlay.blocks = g.map((m) => m.blocks[0]), this.translationOverlay.paragraphBlocks = g, this.translationOverlay.sourceLanguage = "auto", this.translationOverlay.targetLanguage = "zh", this.translationOverlay.isLoading = !1, this.translationOverlay.loadingStage = void 0, this.translationOverlay.isVisible = !0, this.translationOverlay.errorMessage = void 0, this.draw(), this.onStateChange?.();
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
      const { cancelOfflineTranslation: t } = await ge.loadOfflineTranslator();
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
    ge.loadOfflineTranslator().then(({ cancelOfflineTranslation: e }) => e()).catch(() => {
    }), this.canvasPool.clear(), this.throttleTimer && (cancelAnimationFrame(this.throttleTimer), this.throttleTimer = null), this.cancelSmartDetection(), this.backgroundImage && (this.backgroundImage.onload = null, this.backgroundImage.onerror = null, this.backgroundImage.src = "", this.backgroundImage = null, this.visualElementDetector = null), this.annotations.forEach((e) => {
      typeof e.destroy == "function" && e.destroy();
    }), this.annotations = [], this.annotationUndoStack = [], this.annotationRedoStack = [], this.pendingDragSnapshot = null, this.pendingResizeSnapshot = null, this.currentAnnotation = null, this.selectedAnnotation = null, this.hoveredAnnotation = null, this.draggedAnnotation = null, this.resizingAnnotation = null, this.editingAnnotation = null, this.selectionRect = null, this.dragStartPoint = null, this.resizeStartBounds = null, this.resizeOperation = null, this.pendingSnapCandidate = null, this.dragStartPosition = null, this.snappedWindow = null, this.snappedElement = null, this.elementCandidateStabilizer.reset(), this.allWindows = [], this.translationOverlay.blocks = [], this.translationOverlay.paragraphBlocks = [], this.translationOverlay.isVisible = !1, this.translationOverlay.isLoading = !1, this.colorPickerState.previewImage && (this.colorPickerState.previewImage.close?.(), this.colorPickerState.previewImage = void 0), this.colorPickerState.isActive = !1, this.colorPickerState.isVisible = !1, this.colorPickerState.isCopied = !1, this.colorPickerState.colorInfo = void 0, this.eventHandler.unbind(), this.canvas.removeEventListener("mousedown", this.mouseDownHandler), this.canvas.removeEventListener("mousemove", this.mouseMoveHandler), this.canvas.removeEventListener("mouseup", this.mouseUpHandler), this.canvas.removeEventListener("dblclick", this.doubleClickHandler), window.removeEventListener("keydown", this.keyDownHandler), window.removeEventListener("keyup", this.keyUpHandler), this.onStateChange = void 0, this.onTextInputRequest = void 0, this.onColorPicked = void 0;
    const t = this.canvas.getContext("2d");
    t && (t.save(), t.setTransform(1, 0, 0, 1, 0, 0), t.clearRect(0, 0, this.canvas.width, this.canvas.height), t.restore());
  }
}
var Nr = {
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
function Hr() {
  return "icon-" + ((1 + Math.random()) * 4294967296 | 0).toString(16).substring(1);
}
function jr(n, t, e) {
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
var Fr = Symbol("icon-context");
function it(n, t, e) {
  var i = {
    name: "icon-" + n,
    props: ["size", "strokeWidth", "strokeLinecap", "strokeLinejoin", "theme", "fill", "spin"],
    setup: function(o) {
      var a = Hr(), r = me(Fr, Nr);
      return function() {
        var l = o.size, c = o.strokeWidth, u = o.strokeLinecap, d = o.strokeLinejoin, w = o.theme, v = o.fill, S = o.spin, g = jr(a, {
          size: l,
          strokeWidth: c,
          strokeLinecap: u,
          strokeLinejoin: d,
          theme: w,
          fill: v
        }, r), m = [r.prefix + "-icon"];
        return m.push(r.prefix + "-icon-" + n), t && r.rtl && m.push(r.prefix + "-icon-rtl"), S && m.push(r.prefix + "-icon-spin"), p("span", {
          class: m.join(" ")
        }, [e(g)]);
      };
    }
  };
  return i;
}
const Vr = it("arrow-right-up", !0, function(n) {
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
}), dn = it("check", !0, function(n) {
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
}), Vn = it("close", !1, function(n) {
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
}), on = it("copy", !0, function(n) {
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
}), Ur = it("delete-four", !1, function(n) {
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
}), ji = it("down", !1, function(n) {
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
}), Yr = it("download", !1, function(n) {
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
}), Zr = it("font-size", !0, function(n) {
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
}), Xr = it("go-on", !0, function(n) {
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
}), Gr = it("left", !0, function(n) {
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
}), Kr = it("list-numbers", !0, function(n) {
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
}), Fi = it("loading", !0, function(n) {
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
}), En = it("magic", !0, function(n) {
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
}), Ps = it("minus", !1, function(n) {
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
}), qr = it("more", !1, function(n) {
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
}), Jr = it("mosaic", !0, function(n) {
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
}), Qr = it("move-one", !0, function(n) {
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
}), Vi = it("pin", !0, function(n) {
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
}), Ui = it("platte", !0, function(n) {
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
}), Un = it("pushpin", !1, function(n) {
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
}), tl = it("rectangle-one", !1, function(n) {
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
}), el = it("redo", !0, function(n) {
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
}), nl = it("return", !0, function(n) {
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
}), il = it("right", !0, function(n) {
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
}), sl = it("round", !1, function(n) {
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
}), Yi = it("save", !0, function(n) {
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
}), ol = it("square", !1, function(n) {
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
}), Yn = it("text-recognition", !1, function(n) {
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
}), As = it("translate", !0, function(n) {
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
}), al = it("write", !0, function(n) {
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
}), rl = { class: "toolbar-panel first-panel" }, ll = { class: "tool-section" }, cl = ["onClick", "title", "aria-pressed"], hl = { class: "action-section" }, ul = ["disabled", "title"], dl = ["disabled", "title"], gl = ["disabled", "title"], fl = ["title"], ml = ["title"], pl = ["title"], wl = {
  key: 0,
  class: "toolbar-panel second-panel"
}, yl = { class: "style-section" }, vl = {
  key: 0,
  class: "style-group opacity-group"
}, xl = { class: "style-label" }, kl = ["value", "title", "aria-label"], bl = { class: "style-value" }, Sl = {
  key: 1,
  class: "style-group"
}, Ml = { class: "style-label" }, Cl = { class: "line-width-selector" }, _l = ["onClick", "title", "aria-pressed"], Tl = { class: "style-value" }, zl = {
  key: 2,
  class: "style-divider"
}, Rl = {
  key: 3,
  class: "style-group opacity-group"
}, Ll = { class: "style-label" }, Pl = ["value", "title", "aria-label"], Al = { class: "style-value" }, Dl = {
  key: 4,
  class: "style-divider"
}, Il = {
  key: 5,
  class: "style-group color-picker-group"
}, Ol = { class: "style-label" }, El = { class: "color-row" }, $l = ["onClick", "title", "aria-pressed"], Wl = { class: "custom-color-wrapper" }, Bl = ["title"], Nl = ["value", "title", "aria-label"], Hl = {
  key: 6,
  class: "style-group"
}, jl = { class: "style-label" }, Fl = { class: "text-size-selector" }, Vl = ["onClick", "title", "aria-pressed"], Ul = { class: "style-value" }, Yl = {
  key: 7,
  class: "style-group"
}, Zl = { class: "style-label" }, Xl = { class: "mosaic-size-selector" }, Gl = ["onClick", "title", "aria-pressed"], Kl = { class: "style-value" }, ql = {
  key: 8,
  class: "style-group"
}, Jl = { class: "style-label" }, Ql = { class: "translate-engine-selector" }, tc = ["onClick", "title", "aria-pressed"], ec = /* @__PURE__ */ Ct({
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
    const i = $(null), { t: s } = ds(), o = n, a = e, r = E(() => [
      { type: f.Select, icon: Qr, title: s("screenshot.select") },
      { type: f.Rectangle, icon: tl, title: s("screenshot.rectangle") },
      { type: f.Ellipse, icon: sl, title: s("screenshot.ellipse") },
      { type: f.Line, icon: Ps, title: s("screenshot.line") },
      { type: f.Arrow, icon: Vr, title: s("screenshot.arrow") },
      { type: f.Pen, icon: al, title: s("screenshot.pen") },
      { type: f.Mosaic, icon: Jr, title: s("screenshot.mosaic") },
      { type: f.Text, icon: Zr, title: s("screenshot.text") },
      { type: f.Marker, icon: Kr, title: s("screenshot.marker") },
      { type: f.ColorPicker, icon: Ui, title: s("screenshot.colorPicker") },
      { type: f.Ocr, icon: Yn, title: s("screenshot.ocr") },
      { type: f.Translate, icon: As, title: s("screenshot.translate") },
      { type: f.Pin, icon: Un, title: s("screenshot.pin") }
    ]), l = E(() => [
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
    ], d = [12, 14, 16, 18, 20, 24], w = [8, 12, 16, 20], v = E(() => ![f.ColorPicker, f.Ocr, f.Pin].includes(o.currentTool)), S = E(
      () => o.currentTool === f.Select
    ), g = E(
      () => [f.Rectangle, f.Ellipse, f.Line, f.Arrow, f.Pen].includes(o.currentTool)
    ), m = E(
      () => [f.Rectangle, f.Ellipse, f.Line, f.Arrow, f.Pen, f.Text, f.Marker].includes(o.currentTool)
    ), R = E(
      () => [
        f.Rectangle,
        f.Ellipse,
        f.Line,
        f.Arrow,
        f.Pen,
        f.Mosaic,
        f.Text,
        f.Marker
      ].includes(o.currentTool)
    ), A = E(
      () => o.currentTool === f.Text || o.currentTool === f.Marker
    ), _ = E(() => o.currentTool === f.Mosaic), H = E(() => o.currentTool === f.Translate), V = (I) => a("tool-select", I), Z = (I) => a("color-change", I), U = (I) => a("line-width-change", I), F = (I) => {
      a("opacity-change", Number(I.target.value) / 100);
    }, X = (I) => a("text-size-change", I), G = (I) => a("mosaic-size-change", I), Q = (I) => {
      a(
        "selection-corner-radius-change",
        Number(I.target.value)
      );
    }, tt = () => a("undo"), ot = () => a("redo"), wt = () => a("delete"), at = () => a("save"), Y = () => a("confirm"), J = () => a("cancel"), mt = (I) => {
      a("translate-engine-change", I);
    }, lt = (I) => {
      Z(I);
    }, rt = (I) => {
      const yt = I.target;
      yt.value && Z(yt.value);
    }, pt = () => {
      const I = i.value?.getBoundingClientRect();
      return {
        width: I?.width ?? 590,
        height: I?.height ?? 50
      };
    };
    return Xe(() => o.currentTool, () => {
      pe(() => {
        window.dispatchEvent(new CustomEvent("screenshot-toolbar-resize", {
          detail: pt()
        }));
      });
    }, { immediate: !0 }), t({
      getToolbarSize: pt
    }), (I, yt) => (z(), O(
      "div",
      {
        ref_key: "toolbarContainerRef",
        ref: i,
        class: "toolbar-container"
      },
      [
        j(" 第一个面板：工具选择 + 操作按钮 "),
        y("div", rl, [
          j(" 工具选择区域 "),
          y("div", ll, [
            (z(!0), O(
              Ht,
              null,
              Kt(r.value, (N) => (z(), O("button", {
                key: N.type,
                onClick: (kt) => V(N.type),
                class: nt(["tool-btn", { active: I.currentTool === N.type }]),
                title: N.title,
                "aria-pressed": I.currentTool === N.type
              }, [
                (z(), vt(ae(N.icon), {
                  theme: "outline",
                  size: "18",
                  strokeWidth: 2.5
                }))
              ], 10, cl))),
              128
              /* KEYED_FRAGMENT */
            ))
          ]),
          j(" 分隔线 "),
          yt[0] || (yt[0] = y(
            "div",
            { class: "toolbar-divider" },
            null,
            -1
            /* HOISTED */
          )),
          j(" 操作按钮区域 "),
          y("div", hl, [
            y("button", {
              onClick: tt,
              disabled: !I.canUndo,
              class: "action-btn undo",
              title: M(s)("screenshot.undo")
            }, [
              p(M(nl), {
                theme: "outline",
                size: "18",
                strokeWidth: 2.5
              })
            ], 8, ul),
            y("button", {
              onClick: ot,
              disabled: !I.canRedo,
              class: "action-btn redo",
              title: M(s)("screenshot.redo")
            }, [
              p(M(Xr), {
                theme: "outline",
                size: "18",
                strokeWidth: 2.5
              })
            ], 8, dl),
            y("button", {
              onClick: wt,
              disabled: !I.canDelete,
              class: "action-btn delete",
              title: M(s)("screenshot.delete")
            }, [
              p(M(Ur), {
                theme: "outline",
                size: "18",
                strokeWidth: 2.5
              })
            ], 8, gl),
            y("button", {
              onClick: J,
              class: "action-btn cancel",
              title: M(s)("screenshot.cancel")
            }, [
              p(M(Vn), {
                theme: "outline",
                size: "18",
                strokeWidth: 2.5
              })
            ], 8, fl),
            y("button", {
              onClick: at,
              class: "action-btn save",
              title: M(s)("screenshot.save")
            }, [
              p(M(Yr), {
                theme: "outline",
                size: "18",
                strokeWidth: 2.5
              })
            ], 8, ml),
            y("button", {
              onClick: Y,
              class: "action-btn confirm",
              title: M(s)("screenshot.confirm")
            }, [
              p(M(dn), {
                theme: "outline",
                size: "18",
                strokeWidth: 2.5
              })
            ], 8, pl)
          ])
        ]),
        j(" 第二个面板：样式设置区域 "),
        v.value ? (z(), O("div", wl, [
          y("div", yl, [
            S.value ? (z(), O("div", vl, [
              y(
                "span",
                xl,
                B(M(s)("screenshot.cornerRadius")),
                1
                /* TEXT */
              ),
              y("input", {
                class: "opacity-slider",
                type: "range",
                min: "0",
                max: "80",
                step: "2",
                value: I.currentSelectionCornerRadius,
                style: gt({
                  "--opacity-color": "#2e90fa",
                  "--opacity-progress": `${I.currentSelectionCornerRadius / 80 * 100}%`
                }),
                title: `${I.currentSelectionCornerRadius}px`,
                "aria-label": M(s)("screenshot.cornerRadius"),
                onInput: Q
              }, null, 44, kl),
              y(
                "span",
                bl,
                B(I.currentSelectionCornerRadius) + " px",
                1
                /* TEXT */
              )
            ])) : j("v-if", !0),
            j(" 线宽设置 "),
            g.value ? (z(), O("div", Sl, [
              y(
                "span",
                Ml,
                B(M(s)("screenshot.lineWidth")),
                1
                /* TEXT */
              ),
              y("div", Cl, [
                (z(), O(
                  Ht,
                  null,
                  Kt(c, (N) => y("button", {
                    key: N,
                    onClick: (kt) => U(N),
                    class: nt(["width-btn", { active: I.currentLineWidth === N }]),
                    title: `${N}px`,
                    "aria-pressed": I.currentLineWidth === N
                  }, [
                    y(
                      "span",
                      {
                        class: "line-preview",
                        style: gt({ height: `${N}px`, backgroundColor: I.currentColor })
                      },
                      null,
                      4
                      /* STYLE */
                    )
                  ], 10, _l)),
                  64
                  /* STABLE_FRAGMENT */
                ))
              ]),
              y(
                "span",
                Tl,
                B(I.currentLineWidth) + " px",
                1
                /* TEXT */
              )
            ])) : j("v-if", !0),
            g.value && m.value ? (z(), O("div", zl)) : j("v-if", !0),
            j(" 不透明度设置 "),
            R.value ? (z(), O("div", Rl, [
              y(
                "span",
                Ll,
                B(M(s)("screenshot.opacity")),
                1
                /* TEXT */
              ),
              y("input", {
                class: "opacity-slider",
                type: "range",
                min: "10",
                max: "100",
                step: "5",
                value: Math.round(I.currentOpacity * 100),
                style: gt({
                  "--opacity-color": I.currentColor,
                  "--opacity-progress": `${Math.round(I.currentOpacity * 100)}%`
                }),
                title: `${Math.round(I.currentOpacity * 100)}%`,
                "aria-label": M(s)("screenshot.opacity"),
                onInput: F
              }, null, 44, Pl),
              y(
                "span",
                Al,
                B(Math.round(I.currentOpacity * 100)) + "%",
                1
                /* TEXT */
              )
            ])) : j("v-if", !0),
            R.value && m.value ? (z(), O("div", Dl)) : j("v-if", !0),
            j(" 颜色设置 "),
            m.value ? (z(), O("div", Il, [
              y(
                "span",
                Ol,
                B(M(s)("screenshot.color")),
                1
                /* TEXT */
              ),
              y("div", El, [
                (z(), O(
                  Ht,
                  null,
                  Kt(u, (N) => y("button", {
                    key: N,
                    onClick: (kt) => lt(N),
                    class: nt(["color-btn", { active: I.currentColor === N }]),
                    style: gt({ backgroundColor: N }),
                    title: N,
                    "aria-pressed": I.currentColor === N
                  }, null, 14, $l)),
                  64
                  /* STABLE_FRAGMENT */
                )),
                y("div", Wl, [
                  y("button", {
                    class: nt(["color-btn custom-color-btn", { active: !u.includes(I.currentColor) }]),
                    title: M(s)("screenshot.customColor")
                  }, [
                    p(M(Ui), {
                      theme: "outline",
                      size: "13",
                      strokeWidth: 2.5
                    })
                  ], 10, Bl),
                  y("input", {
                    type: "color",
                    onChange: rt,
                    value: I.currentColor,
                    class: "color-input-hidden",
                    title: M(s)("screenshot.customColor"),
                    "aria-label": M(s)("screenshot.customColor")
                  }, null, 40, Nl)
                ])
              ])
            ])) : j("v-if", !0),
            j(" 文字大小设置 "),
            A.value ? (z(), O("div", Hl, [
              y(
                "span",
                jl,
                B(M(s)("screenshot.fontSize")),
                1
                /* TEXT */
              ),
              y("div", Fl, [
                (z(), O(
                  Ht,
                  null,
                  Kt(d, (N) => y("button", {
                    key: N,
                    onClick: (kt) => X(N),
                    class: nt(["size-btn", { active: I.currentTextSize === N }]),
                    title: `${N}px`,
                    "aria-pressed": I.currentTextSize === N
                  }, [
                    y(
                      "span",
                      {
                        class: "size-text",
                        style: gt({ fontSize: `${Math.min(N, 18)}px` })
                      },
                      "A",
                      4
                      /* STYLE */
                    )
                  ], 10, Vl)),
                  64
                  /* STABLE_FRAGMENT */
                ))
              ]),
              y(
                "span",
                Ul,
                B(I.currentTextSize) + " px",
                1
                /* TEXT */
              )
            ])) : j("v-if", !0),
            j(" 马赛克大小设置 "),
            _.value ? (z(), O("div", Yl, [
              y(
                "span",
                Zl,
                B(M(s)("screenshot.mosaicSize")),
                1
                /* TEXT */
              ),
              y("div", Xl, [
                (z(), O(
                  Ht,
                  null,
                  Kt(w, (N) => y("button", {
                    key: N,
                    onClick: (kt) => G(N),
                    class: nt(["size-btn", { active: I.currentMosaicSize === N }]),
                    title: `${M(s)("screenshot.brush")} ${N * 3}px`,
                    "aria-pressed": I.currentMosaicSize === N
                  }, [
                    y(
                      "span",
                      {
                        class: "mosaic-preview",
                        style: gt({
                          width: `${Math.min(N * 1.25, 18)}px`,
                          height: `${Math.min(N * 1.25, 18)}px`
                        })
                      },
                      null,
                      4
                      /* STYLE */
                    )
                  ], 10, Gl)),
                  64
                  /* STABLE_FRAGMENT */
                ))
              ]),
              y(
                "span",
                Kl,
                B(I.currentMosaicSize * 3) + " px",
                1
                /* TEXT */
              )
            ])) : j("v-if", !0),
            j(" 翻译引擎选择 "),
            H.value ? (z(), O("div", ql, [
              y(
                "span",
                Jl,
                B(M(s)("screenshot.engine")),
                1
                /* TEXT */
              ),
              y("div", Ql, [
                (z(!0), O(
                  Ht,
                  null,
                  Kt(l.value, (N) => (z(), O("button", {
                    key: N.value,
                    onClick: (kt) => mt(N.value),
                    class: nt(["engine-btn", { active: I.currentTranslateEngine === N.value }]),
                    title: N.label,
                    "aria-pressed": I.currentTranslateEngine === N.value
                  }, B(N.short), 11, tc))),
                  128
                  /* KEYED_FRAGMENT */
                ))
              ])
            ])) : j("v-if", !0)
          ])
        ])) : j("v-if", !0)
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
}, nc = /* @__PURE__ */ qe(ec, [["__scopeId", "data-v-afb70887"]]), ic = {
  class: "screenshot-container",
  ref: "containerRef"
}, sc = {
  key: 0,
  class: "mask-layers"
}, oc = {
  key: 1,
  class: "mask-full"
}, ac = { class: "size-text" }, rc = {
  key: 4,
  class: "loading-overlay"
}, lc = /* @__PURE__ */ Ct({
  __name: "index",
  setup(n) {
    const t = $(), e = $(), i = $(null), s = $(null);
    let o = null;
    const a = $(!0), r = $(!1), l = $(""), c = $({ x: 0, y: 0 }), u = $(16), d = $(!1), w = $("bing"), v = $({ width: 590, height: 50 });
    let S = !1, g = null;
    const m = $({
      selectionRect: null,
      annotations: [],
      currentTool: f.Select,
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
    }), R = $(), A = $(), _ = E(() => m.value.isDrawing), H = E(() => {
      if (!m.value.selectionRect) return {};
      const { y: k } = m.value.selectionRect;
      return {
        top: "0",
        left: "0",
        right: "0",
        height: `${k}px`
      };
    }), V = E(() => {
      if (!m.value.selectionRect) return {};
      const { y: k, height: W } = m.value.selectionRect;
      return {
        top: `${k + W}px`,
        left: "0",
        right: "0",
        bottom: "0"
      };
    }), Z = E(() => {
      if (!m.value.selectionRect) return {};
      const { x: k, y: W, height: ut } = m.value.selectionRect;
      return {
        top: `${W}px`,
        left: "0",
        width: `${k}px`,
        height: `${ut}px`
      };
    }), U = E(() => {
      if (!m.value.selectionRect) return {};
      const { x: k, y: W, width: ut, height: dt } = m.value.selectionRect;
      return {
        top: `${W}px`,
        left: `${k + ut}px`,
        right: "0",
        height: `${dt}px`
      };
    }), F = E(() => {
      if (!m.value.selectionRect) return {};
      const { x: k, y: W, width: ut, height: dt } = m.value.selectionRect, q = 10, St = 12, Dt = Math.min(v.value.width, Math.max(0, window.innerWidth - q * 2)), _t = Math.min(v.value.height, Math.max(0, window.innerHeight - q * 2)), Ie = Math.max(q, window.innerHeight - _t - q), ce = Math.max(q, window.innerWidth - Dt - q);
      let Zt;
      return W + dt + _t + St <= window.innerHeight - q ? Zt = W + dt + St : W - _t - St >= q ? Zt = W - _t - St : Zt = W + dt - _t - q, Zt = Math.min(Math.max(Zt, q), Ie), {
        left: `${Math.min(Math.max(k + (ut - Dt) / 2, q), ce)}px`,
        top: `${Zt}px`
      };
    }), X = E(() => {
      if (!m.value.selectionRect) return {};
      const { x: k, y: W, width: ut, height: dt } = m.value.selectionRect, q = 10;
      let St = k - q, Dt = W - q, _t = "translateY(-100%)";
      return St < 10 && (St = k + ut + q, _t = "translateY(-100%)"), Dt < 30 && (Dt = W + dt + q, _t = "translateY(0)"), {
        left: `${St}px`,
        top: `${Dt}px`,
        transform: _t
      };
    }), G = E(() => {
      if (!m.value.selectionRect) return "";
      const { width: k, height: W } = m.value.selectionRect;
      return `${Math.round(k)} × ${Math.round(W)}`;
    }), Q = E(
      () => g?.getData().style.color || m.value.currentStyle.color
    ), tt = E(() => {
      const k = g?.getData().type === f.Marker ? Hn(c.value, u.value) : Ce(c.value);
      return {
        "--text-accent-color": Q.value,
        left: `${k.x}px`,
        top: `${k.y}px`
      };
    }), ot = (k) => {
      if (k === f.Pin && m.value.selectionRect) {
        wt();
        return;
      }
      if (k === f.Ocr && m.value.selectionRect) {
        at();
        return;
      }
      o?.setTool(k);
    }, wt = async () => {
      try {
        await o?.createPinWindow();
      } catch (k) {
        D.error("[截图] 创建贴图失败", k);
      }
    }, at = async () => {
      try {
        await o?.createOcrPinWindow();
      } catch (k) {
        D.error("[截图] 创建文字识别贴图失败", k);
      }
    }, Y = (k) => {
      o?.updateStyle({ color: k });
    }, J = (k) => {
      o?.updateStyle({ lineWidth: k });
    }, mt = (k) => {
      o?.updateStyle({ opacity: k });
    }, lt = (k) => {
      o?.updateTextSize(k);
    }, rt = (k) => {
      o?.updateMosaicSize(k);
    }, pt = (k) => {
      o?.updateSelectionCornerRadius(k);
    }, I = (k) => {
      w.value = k, o?.setTranslationEngine(k), o?.executeTranslation();
    }, yt = () => {
      o?.undoAnnotation();
    }, N = () => {
      o?.redoAnnotation();
    }, kt = () => {
      o?.deleteSelectedAnnotation();
    }, ct = async () => {
      try {
        await o?.processScreenshot("save"), ht();
      } catch (k) {
        const W = k?.message || k?.toString() || "保存失败";
        if (W.includes("保存已取消") || W.includes("cancelled"))
          return;
        D.error("保存截图时发生错误", W);
      }
    }, Lt = async () => {
      try {
        await o?.processScreenshot("copy"), ht();
      } catch {
      }
    }, Nt = () => {
      ht();
    }, qt = (k, W) => {
      if (W && [f.Text, f.Marker].includes(W.getData().type)) {
        const ut = W.getData();
        c.value = {
          x: ut.points[0].x,
          y: ut.points[0].y
        }, u.value = ut.fontSize || m.value.textSize;
      } else
        c.value = k, u.value = m.value.textSize;
      r.value = !0, g = W || null, W && o?.setEditingAnnotation(W), W && W.getData().text ? l.value = W.getData().text || "" : l.value = "", pe(() => {
        e.value?.focus(), g && e.value?.select();
      });
    }, Jt = () => {
      const k = g?.getData().type === f.Marker;
      l.value.trim() || k ? g ? o?.updateTextAnnotation(g, l.value.trim()) : o?.createTextAnnotation(c.value, l.value) : g && o?.deleteAnnotation(g), C();
    }, C = () => {
      r.value = !1, l.value = "", g && o?.clearEditingAnnotation(), g = null;
    }, et = (k) => {
      navigator.clipboard && navigator.clipboard.writeText(k.hex).catch((W) => {
        D.error("[截图] 复制颜色到剪贴板失败", W);
      });
    }, bt = (k) => {
      if (k.key === "Meta" || k.key === "Win" || k.altKey && k.key === "Tab" || k.altKey && k.key === "F4") {
        k.preventDefault(), k.stopPropagation();
        return;
      }
      if (r.value && document.activeElement === e.value) {
        if (k.key === "Escape") {
          C(), k.preventDefault();
          return;
        }
        if (k.key === "Enter") {
          Jt(), k.preventDefault();
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
          ht();
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
        k.shiftKey ? N() : yt(), k.preventDefault();
        return;
      }
      if (!W && k.ctrlKey && k.key.toLowerCase() === "y") {
        N(), k.preventDefault();
        return;
      }
      if (k.key === "Escape") {
        ht();
        return;
      } else if (k.key === "Delete" || k.key === "Backspace") {
        kt(), k.preventDefault();
        return;
      }
      ["Shift", "Control", "Alt", "Meta"].includes(k.key) || k.preventDefault();
    }, ht = async () => {
      if (!S) {
        S = !0, o?.destroy(), o = null;
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
          currentTool: f.Select,
          currentStyle: { color: "#ff4444", lineWidth: 3, opacity: 1 },
          textSize: 16,
          mosaicSize: 8,
          selectionCornerRadius: 0,
          hasSelection: !1,
          hasAnnotations: !1,
          canRedo: !1,
          selectedAnnotation: null,
          isDrawing: !1
        }, r.value = !1, l.value = "", g = null, d.value = !1, a.value = !0;
        try {
          await b("close_and_destroy_screenshot_window");
        } catch (k) {
          D.error("[截图] 销毁截图窗口失败，回退到 close()", k), await s.value?.close();
        } finally {
          S = !1;
        }
      }
    }, zt = () => {
      const k = o?.getState();
      k && (m.value = k);
    }, Pt = () => {
      const k = i.value?.getToolbarSize?.();
      k && (v.value = k);
    }, Et = (k) => {
      const W = k.detail;
      W && (v.value = W);
    };
    return Ge(async () => {
      if (t.value) {
        s.value = new Ke("screenshot"), o = new Br(
          t.value,
          zt,
          qt,
          et
        ), document.addEventListener("keydown", bt), window.addEventListener("resize", Pt), window.addEventListener("screenshot-toolbar-resize", Et), A.value = await wn("screenshot-close-requested", () => {
          ht();
        }), R.value = await wn("tauri://blur", () => {
          if (r.value && document.activeElement === e.value)
            return;
          const k = o?.getTranslationState();
          k?.isLoading || k?.isVisible || setTimeout(() => {
            if (!r.value || document.activeElement !== e.value) {
              const W = o?.getTranslationState();
              if (W?.isLoading || W?.isVisible)
                return;
              ht();
            }
          }, 100);
        }), await pe(), Pt(), await s.value.emit("screenshot_ready");
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
      o?.destroy(), o = null, document.removeEventListener("keydown", bt), window.removeEventListener("resize", Pt), window.removeEventListener("screenshot-toolbar-resize", Et), R.value?.(), A.value?.(), R.value = void 0, A.value = void 0, s.value = null;
    }), (k, W) => (z(), O(
      "div",
      ic,
      [
        j(" 遮罩层 "),
        m.value.selectionRect ? (z(), O("div", sc, [
          y(
            "div",
            {
              class: "mask-top",
              style: gt(H.value)
            },
            null,
            4
            /* STYLE */
          ),
          y(
            "div",
            {
              class: "mask-bottom",
              style: gt(V.value)
            },
            null,
            4
            /* STYLE */
          ),
          y(
            "div",
            {
              class: "mask-left",
              style: gt(Z.value)
            },
            null,
            4
            /* STYLE */
          ),
          y(
            "div",
            {
              class: "mask-right",
              style: gt(U.value)
            },
            null,
            4
            /* STYLE */
          )
        ])) : (z(), O("div", oc)),
        j(" 画布 "),
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
        j(" 尺寸信息 "),
        m.value.selectionRect && a.value ? (z(), O(
          "div",
          {
            key: 2,
            class: "size-info",
            style: gt(X.value)
          },
          [
            y(
              "span",
              ac,
              B(G.value),
              1
              /* TEXT */
            )
          ],
          4
          /* STYLE */
        )) : j("v-if", !0),
        j(" 工具栏 "),
        m.value.selectionRect && !_.value ? (z(), vt(nc, {
          key: 3,
          ref_key: "toolbarRef",
          ref: i,
          style: gt(F.value),
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
          onToolSelect: ot,
          onColorChange: Y,
          onLineWidthChange: J,
          onOpacityChange: mt,
          onTextSizeChange: lt,
          onMosaicSizeChange: rt,
          onSelectionCornerRadiusChange: pt,
          onTranslateEngineChange: I,
          onUndo: yt,
          onRedo: N,
          onDelete: kt,
          onSave: ct,
          onConfirm: Lt,
          onCancel: Nt
        }, null, 8, ["style", "current-tool", "current-color", "current-line-width", "current-opacity", "current-text-size", "current-mosaic-size", "current-selection-corner-radius", "can-undo", "can-redo", "can-delete", "current-translate-engine"])) : j("v-if", !0),
        j(" 加载提示 - 仅在初始化时显示 "),
        d.value ? (z(), O("div", rc, [
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
            B(k.$t("screenshotTool.loading")),
            1
            /* TEXT */
          )
        ])) : j("v-if", !0),
        j(" 文字输入框 "),
        r.value ? (z(), O(
          "div",
          {
            key: 5,
            class: "text-input-container",
            style: gt(tt.value)
          },
          [
            Fe(y(
              "input",
              {
                ref_key: "textInputRef",
                ref: e,
                "onUpdate:modelValue": W[0] || (W[0] = (ut) => l.value = ut),
                type: "text",
                class: "text-input",
                style: gt({
                  color: Q.value,
                  fontFamily: M(te),
                  fontSize: u.value + "px",
                  height: u.value + "px",
                  lineHeight: u.value + "px"
                }),
                onKeydown: [
                  zi(Jt, ["enter"]),
                  zi(C, ["escape"])
                ],
                onBlur: Jt,
                autofocus: ""
              },
              null,
              36
              /* STYLE, NEED_HYDRATION */
            ), [
              [Ao, l.value]
            ])
          ],
          4
          /* STYLE */
        )) : j("v-if", !0)
      ],
      512
      /* NEED_PATCH */
    ));
  }
}), cc = /* @__PURE__ */ qe(lc, [["__scopeId", "data-v-a3b3737e"]]), hc = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: cc
}, Symbol.toStringTag, { value: "Module" })), Ds = Symbol(), gn = "el", uc = "is-", ue = (n, t, e, i, s) => {
  let o = `${n}-${t}`;
  return e && (o += `-${e}`), i && (o += `__${i}`), s && (o += `--${s}`), o;
}, Is = Symbol("namespaceContextKey"), dc = (n) => {
  const t = n || (ze() ? me(Is, $(gn)) : $(gn));
  return E(() => M(t) || gn);
}, ri = (n, t) => {
  const e = dc(t);
  return {
    namespace: e,
    b: (g = "") => ue(e.value, n, g, "", ""),
    e: (g) => g ? ue(e.value, n, "", g, "") : "",
    m: (g) => g ? ue(e.value, n, "", "", g) : "",
    be: (g, m) => g && m ? ue(e.value, n, g, m, "") : "",
    em: (g, m) => g && m ? ue(e.value, n, "", g, m) : "",
    bm: (g, m) => g && m ? ue(e.value, n, g, "", m) : "",
    bem: (g, m, R) => g && m && R ? ue(e.value, n, g, m, R) : "",
    is: (g, ...m) => {
      const R = m.length >= 1 ? m[0] : !0;
      return g && R ? `${uc}${g}` : "";
    },
    cssVar: (g) => {
      const m = {};
      for (const R in g)
        g[R] && (m[`--${e.value}-${R}`] = g[R]);
      return m;
    },
    cssVarName: (g) => `--${e.value}-${g}`,
    cssVarBlock: (g) => {
      const m = {};
      for (const R in g)
        g[R] && (m[`--${e.value}-${n}-${R}`] = g[R]);
      return m;
    },
    cssVarBlockName: (g) => `--${e.value}-${n}-${g}`
  };
};
/**
* @vue/shared v3.5.13
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/
const gc = Object.prototype.hasOwnProperty, Zi = (n, t) => gc.call(n, t), Ye = (n) => typeof n == "function", ye = (n) => typeof n == "string", Os = (n) => n !== null && typeof n == "object";
var fc = typeof global == "object" && global && global.Object === Object && global, mc = typeof self == "object" && self && self.Object === Object && self, li = fc || mc || Function("return this")(), Re = li.Symbol, Es = Object.prototype, pc = Es.hasOwnProperty, wc = Es.toString, We = Re ? Re.toStringTag : void 0;
function yc(n) {
  var t = pc.call(n, We), e = n[We];
  try {
    n[We] = void 0;
    var i = !0;
  } catch {
  }
  var s = wc.call(n);
  return i && (t ? n[We] = e : delete n[We]), s;
}
var vc = Object.prototype, xc = vc.toString;
function kc(n) {
  return xc.call(n);
}
var bc = "[object Null]", Sc = "[object Undefined]", Xi = Re ? Re.toStringTag : void 0;
function $s(n) {
  return n == null ? n === void 0 ? Sc : bc : Xi && Xi in Object(n) ? yc(n) : kc(n);
}
function Mc(n) {
  return n != null && typeof n == "object";
}
var Cc = "[object Symbol]";
function ci(n) {
  return typeof n == "symbol" || Mc(n) && $s(n) == Cc;
}
function _c(n, t) {
  for (var e = -1, i = n == null ? 0 : n.length, s = Array(i); ++e < i; )
    s[e] = t(n[e], e, n);
  return s;
}
var hi = Array.isArray, Gi = Re ? Re.prototype : void 0, Ki = Gi ? Gi.toString : void 0;
function Ws(n) {
  if (typeof n == "string")
    return n;
  if (hi(n))
    return _c(n, Ws) + "";
  if (ci(n))
    return Ki ? Ki.call(n) : "";
  var t = n + "";
  return t == "0" && 1 / n == -1 / 0 ? "-0" : t;
}
function Bs(n) {
  var t = typeof n;
  return n != null && (t == "object" || t == "function");
}
var Tc = "[object AsyncFunction]", zc = "[object Function]", Rc = "[object GeneratorFunction]", Lc = "[object Proxy]";
function Pc(n) {
  if (!Bs(n))
    return !1;
  var t = $s(n);
  return t == zc || t == Rc || t == Tc || t == Lc;
}
var $n = li["__core-js_shared__"], qi = function() {
  var n = /[^.]+$/.exec($n && $n.keys && $n.keys.IE_PROTO || "");
  return n ? "Symbol(src)_1." + n : "";
}();
function Ac(n) {
  return !!qi && qi in n;
}
var Dc = Function.prototype, Ic = Dc.toString;
function Oc(n) {
  if (n != null) {
    try {
      return Ic.call(n);
    } catch {
    }
    try {
      return n + "";
    } catch {
    }
  }
  return "";
}
var Ec = /[\\^$.*+?()[\]{}|]/g, $c = /^\[object .+?Constructor\]$/, Wc = Function.prototype, Bc = Object.prototype, Nc = Wc.toString, Hc = Bc.hasOwnProperty, jc = RegExp(
  "^" + Nc.call(Hc).replace(Ec, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$"
);
function Fc(n) {
  if (!Bs(n) || Ac(n))
    return !1;
  var t = Pc(n) ? jc : $c;
  return t.test(Oc(n));
}
function Vc(n, t) {
  return n?.[t];
}
function Ns(n, t) {
  var e = Vc(n, t);
  return Fc(e) ? e : void 0;
}
function Uc(n, t) {
  return n === t || n !== n && t !== t;
}
var Yc = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/, Zc = /^\w*$/;
function Xc(n, t) {
  if (hi(n))
    return !1;
  var e = typeof n;
  return e == "number" || e == "symbol" || e == "boolean" || n == null || ci(n) ? !0 : Zc.test(n) || !Yc.test(n) || t != null && n in Object(t);
}
var Ze = Ns(Object, "create");
function Gc() {
  this.__data__ = Ze ? Ze(null) : {}, this.size = 0;
}
function Kc(n) {
  var t = this.has(n) && delete this.__data__[n];
  return this.size -= t ? 1 : 0, t;
}
var qc = "__lodash_hash_undefined__", Jc = Object.prototype, Qc = Jc.hasOwnProperty;
function th(n) {
  var t = this.__data__;
  if (Ze) {
    var e = t[n];
    return e === qc ? void 0 : e;
  }
  return Qc.call(t, n) ? t[n] : void 0;
}
var eh = Object.prototype, nh = eh.hasOwnProperty;
function ih(n) {
  var t = this.__data__;
  return Ze ? t[n] !== void 0 : nh.call(t, n);
}
var sh = "__lodash_hash_undefined__";
function oh(n, t) {
  var e = this.__data__;
  return this.size += this.has(n) ? 0 : 1, e[n] = Ze && t === void 0 ? sh : t, this;
}
function ve(n) {
  var t = -1, e = n == null ? 0 : n.length;
  for (this.clear(); ++t < e; ) {
    var i = n[t];
    this.set(i[0], i[1]);
  }
}
ve.prototype.clear = Gc;
ve.prototype.delete = Kc;
ve.prototype.get = th;
ve.prototype.has = ih;
ve.prototype.set = oh;
function ah() {
  this.__data__ = [], this.size = 0;
}
function Cn(n, t) {
  for (var e = n.length; e--; )
    if (Uc(n[e][0], t))
      return e;
  return -1;
}
var rh = Array.prototype, lh = rh.splice;
function ch(n) {
  var t = this.__data__, e = Cn(t, n);
  if (e < 0)
    return !1;
  var i = t.length - 1;
  return e == i ? t.pop() : lh.call(t, e, 1), --this.size, !0;
}
function hh(n) {
  var t = this.__data__, e = Cn(t, n);
  return e < 0 ? void 0 : t[e][1];
}
function uh(n) {
  return Cn(this.__data__, n) > -1;
}
function dh(n, t) {
  var e = this.__data__, i = Cn(e, n);
  return i < 0 ? (++this.size, e.push([n, t])) : e[i][1] = t, this;
}
function Ae(n) {
  var t = -1, e = n == null ? 0 : n.length;
  for (this.clear(); ++t < e; ) {
    var i = n[t];
    this.set(i[0], i[1]);
  }
}
Ae.prototype.clear = ah;
Ae.prototype.delete = ch;
Ae.prototype.get = hh;
Ae.prototype.has = uh;
Ae.prototype.set = dh;
var gh = Ns(li, "Map");
function fh() {
  this.size = 0, this.__data__ = {
    hash: new ve(),
    map: new (gh || Ae)(),
    string: new ve()
  };
}
function mh(n) {
  var t = typeof n;
  return t == "string" || t == "number" || t == "symbol" || t == "boolean" ? n !== "__proto__" : n === null;
}
function _n(n, t) {
  var e = n.__data__;
  return mh(t) ? e[typeof t == "string" ? "string" : "hash"] : e.map;
}
function ph(n) {
  var t = _n(this, n).delete(n);
  return this.size -= t ? 1 : 0, t;
}
function wh(n) {
  return _n(this, n).get(n);
}
function yh(n) {
  return _n(this, n).has(n);
}
function vh(n, t) {
  var e = _n(this, n), i = e.size;
  return e.set(n, t), this.size += e.size == i ? 0 : 1, this;
}
function ke(n) {
  var t = -1, e = n == null ? 0 : n.length;
  for (this.clear(); ++t < e; ) {
    var i = n[t];
    this.set(i[0], i[1]);
  }
}
ke.prototype.clear = fh;
ke.prototype.delete = ph;
ke.prototype.get = wh;
ke.prototype.has = yh;
ke.prototype.set = vh;
var xh = "Expected a function";
function ui(n, t) {
  if (typeof n != "function" || t != null && typeof t != "function")
    throw new TypeError(xh);
  var e = function() {
    var i = arguments, s = t ? t.apply(this, i) : i[0], o = e.cache;
    if (o.has(s))
      return o.get(s);
    var a = n.apply(this, i);
    return e.cache = o.set(s, a) || o, a;
  };
  return e.cache = new (ui.Cache || ke)(), e;
}
ui.Cache = ke;
var kh = 500;
function bh(n) {
  var t = ui(n, function(i) {
    return e.size === kh && e.clear(), i;
  }), e = t.cache;
  return t;
}
var Sh = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g, Mh = /\\(\\)?/g, Ch = bh(function(n) {
  var t = [];
  return n.charCodeAt(0) === 46 && t.push(""), n.replace(Sh, function(e, i, s, o) {
    t.push(s ? o.replace(Mh, "$1") : i || e);
  }), t;
});
function _h(n) {
  return n == null ? "" : Ws(n);
}
function Th(n, t) {
  return hi(n) ? n : Xc(n, t) ? [n] : Ch(_h(n));
}
function zh(n) {
  if (typeof n == "string" || ci(n))
    return n;
  var t = n + "";
  return t == "0" && 1 / n == -1 / 0 ? "-0" : t;
}
function Rh(n, t) {
  t = Th(t, n);
  for (var e = 0, i = t.length; n != null && e < i; )
    n = n[zh(t[e++])];
  return e && e == i ? n : void 0;
}
function Lh(n, t, e) {
  var i = n == null ? void 0 : Rh(n, t);
  return i === void 0 ? e : i;
}
function Ph(n) {
  for (var t = -1, e = n == null ? 0 : n.length, i = {}; ++t < e; ) {
    var s = n[t];
    i[s[0]] = s[1];
  }
  return i;
}
const Hs = (n) => n === void 0, Ji = (n) => typeof n == "boolean", xe = (n) => typeof n == "number", Zn = (n) => typeof Element > "u" ? !1 : n instanceof Element, Ah = (n) => ye(n) ? !Number.isNaN(Number(n)) : !1;
var Qi;
const be = typeof window < "u", Dh = (n) => typeof n == "string", Ih = () => {
};
be && ((Qi = window?.navigator) != null && Qi.userAgent) && /iP(ad|hone|od)/.test(window.navigator.userAgent);
function di(n) {
  return typeof n == "function" ? n() : M(n);
}
function Oh(n) {
  return n;
}
function gi(n) {
  return Io() ? (Oo(n), !0) : !1;
}
function Eh(n, t = !0) {
  ze() ? Ge(n) : t ? n() : pe(n);
}
function js(n, t, e = {}) {
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
    }, di(t));
  }
  return i && (s.value = !0, be && l()), gi(r), {
    isPending: Do(s),
    start: l,
    stop: r
  };
}
function Fs(n) {
  var t;
  const e = di(n);
  return (t = e?.$el) != null ? t : e;
}
const Vs = be ? window : void 0;
function Us(...n) {
  let t, e, i, s;
  if (Dh(n[0]) || Array.isArray(n[0]) ? ([e, i, s] = n, t = Vs) : [t, e, i, s] = n, !t)
    return Ih;
  Array.isArray(e) || (e = [e]), Array.isArray(i) || (i = [i]);
  const o = [], a = () => {
    o.forEach((u) => u()), o.length = 0;
  }, r = (u, d, w, v) => (u.addEventListener(d, w, v), () => u.removeEventListener(d, w, v)), l = Xe(() => [Fs(t), di(s)], ([u, d]) => {
    a(), u && o.push(...e.flatMap((w) => i.map((v) => r(u, w, v, d))));
  }, { immediate: !0, flush: "post" }), c = () => {
    l(), a();
  };
  return gi(c), c;
}
function $h(n, t = !1) {
  const e = $(), i = () => e.value = !!n();
  return i(), Eh(i, t), e;
}
const ts = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {}, es = "__vueuse_ssr_handlers__";
ts[es] = ts[es] || {};
var ns = Object.getOwnPropertySymbols, Wh = Object.prototype.hasOwnProperty, Bh = Object.prototype.propertyIsEnumerable, Nh = (n, t) => {
  var e = {};
  for (var i in n)
    Wh.call(n, i) && t.indexOf(i) < 0 && (e[i] = n[i]);
  if (n != null && ns)
    for (var i of ns(n))
      t.indexOf(i) < 0 && Bh.call(n, i) && (e[i] = n[i]);
  return e;
};
function Hh(n, t, e = {}) {
  const i = e, { window: s = Vs } = i, o = Nh(i, ["window"]);
  let a;
  const r = $h(() => s && "ResizeObserver" in s), l = () => {
    a && (a.disconnect(), a = void 0);
  }, c = Xe(() => Fs(n), (d) => {
    l(), r.value && s && d && (a = new ResizeObserver(t), a.observe(d, o));
  }, { immediate: !0, flush: "post" }), u = () => {
    l(), c();
  };
  return gi(u), {
    isSupported: r,
    stop: u
  };
}
var is;
(function(n) {
  n.UP = "UP", n.RIGHT = "RIGHT", n.DOWN = "DOWN", n.LEFT = "LEFT", n.NONE = "NONE";
})(is || (is = {}));
var jh = Object.defineProperty, ss = Object.getOwnPropertySymbols, Fh = Object.prototype.hasOwnProperty, Vh = Object.prototype.propertyIsEnumerable, os = (n, t, e) => t in n ? jh(n, t, { enumerable: !0, configurable: !0, writable: !0, value: e }) : n[t] = e, Uh = (n, t) => {
  for (var e in t || (t = {}))
    Fh.call(t, e) && os(n, e, t[e]);
  if (ss)
    for (var e of ss(t))
      Vh.call(t, e) && os(n, e, t[e]);
  return n;
};
const Yh = {
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
Uh({
  linear: Oh
}, Yh);
const as = {
  current: 0
}, rs = $(0), Ys = 2e3, ls = Symbol("elZIndexContextKey"), Zs = Symbol("zIndexContextKey"), Zh = (n) => {
  const t = ze() ? me(ls, as) : as, e = n || (ze() ? me(Zs, void 0) : void 0), i = E(() => {
    const a = M(e);
    return xe(a) ? a : Ys;
  }), s = E(() => i.value + rs.value), o = () => (t.current++, rs.value = t.current, s.value);
  return !be && me(ls), {
    initialZIndex: i,
    currentZIndex: s,
    nextZIndex: o
  };
};
var Xh = {
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
const Gh = (n) => (t, e) => Kh(t, e, M(n)), Kh = (n, t, e) => Lh(e, n, n).replace(/\{(\w+)\}/g, (i, s) => {
  var o;
  return `${(o = t?.[s]) != null ? o : `{${s}}`}`;
}), qh = (n) => {
  const t = E(() => M(n).name), e = Eo(n) ? n : $(n);
  return {
    lang: t,
    locale: e,
    t: Gh(n)
  };
}, Xs = Symbol("localeContextKey"), Jh = (n) => {
  const t = n || me(Xs, $());
  return qh(E(() => t.value || Xh));
}, Gs = "__epPropKey", Bt = (n) => n, Qh = (n) => Os(n) && !!n[Gs], Ks = (n, t) => {
  if (!Os(n) || Qh(n))
    return n;
  const { values: e, required: i, default: s, type: o, validator: a } = n, l = {
    type: o,
    required: !!i,
    validator: e || a ? (c) => {
      let u = !1, d = [];
      if (e && (d = Array.from(e), Zi(n, "default") && d.push(s), u || (u = d.includes(c))), a && (u || (u = a(c))), !u && d.length > 0) {
        const w = [...new Set(d)].map((v) => JSON.stringify(v)).join(", ");
        $o(`Invalid prop: validation failed${t ? ` for prop "${t}"` : ""}. Expected one of [${w}], got value ${JSON.stringify(c)}.`);
      }
      return u;
    } : void 0,
    [Gs]: !0
  };
  return Zi(n, "default") && (l.default = s), l;
}, De = (n) => Ph(Object.entries(n).map(([t, e]) => [
  t,
  Ks(e, t)
])), tu = ["", "default", "small", "large"], eu = Ks({
  type: String,
  values: tu,
  required: !1
}), nu = Symbol("size"), iu = Symbol("emptyValuesContextKey"), su = De({
  emptyValues: Array,
  valueOnClear: {
    type: [String, Number, Boolean, Function],
    default: void 0,
    validator: (n) => Ye(n) ? !n() : !n
  }
}), cs = (n) => Object.keys(n), vn = $();
function qs(n, t = void 0) {
  return ze() ? me(Ds, vn) : vn;
}
function Js(n, t) {
  const e = qs(), i = ri(n, E(() => {
    var r;
    return ((r = e.value) == null ? void 0 : r.namespace) || gn;
  })), s = Jh(E(() => {
    var r;
    return (r = e.value) == null ? void 0 : r.locale;
  })), o = Zh(E(() => {
    var r;
    return ((r = e.value) == null ? void 0 : r.zIndex) || Ys;
  })), a = E(() => {
    var r;
    return M(t) || ((r = e.value) == null ? void 0 : r.size) || "";
  });
  return Qs(E(() => M(e) || {})), {
    ns: i,
    locale: s,
    zIndex: o,
    size: a
  };
}
const Qs = (n, t, e = !1) => {
  var i;
  const s = !!ze(), o = s ? qs() : void 0, a = (i = void 0) != null ? i : s ? Wo : void 0;
  if (!a)
    return;
  const r = E(() => {
    const l = M(n);
    return o?.value ? ou(o.value, l) : l;
  });
  return a(Ds, r), a(Xs, E(() => r.value.locale)), a(Is, E(() => r.value.namespace)), a(Zs, E(() => r.value.zIndex)), a(nu, {
    size: E(() => r.value.size || "")
  }), a(iu, E(() => ({
    emptyValues: r.value.emptyValues,
    valueOnClear: r.value.valueOnClear
  }))), (e || !vn.value) && (vn.value = r.value), r;
}, ou = (n, t) => {
  const e = [.../* @__PURE__ */ new Set([...cs(n), ...cs(t)])], i = {};
  for (const s of e)
    i[s] = t[s] !== void 0 ? t[s] : n[s];
  return i;
};
var Tn = (n, t) => {
  const e = n.__vccOpts || n;
  for (const [i, s] of t)
    e[i] = s;
  return e;
};
function Xn(n, t = "px") {
  if (!n)
    return "";
  if (xe(n) || Ah(n))
    return `${n}${t}`;
  if (ye(n))
    return n;
}
const to = (n, t) => (n.install = (e) => {
  for (const i of [n, ...Object.values({})])
    e.component(i.name, i);
}, n), eo = (n, t) => (n.install = (e) => {
  n._context = e._context, e.config.globalProperties[t] = n;
}, n), au = De({
  size: {
    type: Bt([Number, String])
  },
  color: {
    type: String
  }
}), ru = Ct({
  name: "ElIcon",
  inheritAttrs: !1
}), lu = /* @__PURE__ */ Ct({
  ...ru,
  props: au,
  setup(n) {
    const t = n, e = ri("icon"), i = E(() => {
      const { size: s, color: o } = t;
      return !s && !o ? {} : {
        fontSize: Hs(s) ? void 0 : Xn(s),
        "--color": o
      };
    });
    return (s, o) => (z(), O("i", Bo({
      class: M(e).b(),
      style: M(i)
    }, s.$attrs), [
      ne(s.$slots, "default")
    ], 16));
  }
});
var cu = /* @__PURE__ */ Tn(lu, [["__file", "icon.vue"]]);
const xn = to(cu);
/*! Element Plus Icons Vue v2.3.1 */
var hu = /* @__PURE__ */ Ct({
  name: "CircleCloseFilled",
  __name: "circle-close-filled",
  setup(n) {
    return (t, e) => (z(), O("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 1024 1024"
    }, [
      y("path", {
        fill: "currentColor",
        d: "M512 64a448 448 0 1 1 0 896 448 448 0 0 1 0-896m0 393.664L407.936 353.6a38.4 38.4 0 1 0-54.336 54.336L457.664 512 353.6 616.064a38.4 38.4 0 1 0 54.336 54.336L512 566.336 616.064 670.4a38.4 38.4 0 1 0 54.336-54.336L566.336 512 670.4 407.936a38.4 38.4 0 1 0-54.336-54.336z"
      })
    ]));
  }
}), uu = hu, du = /* @__PURE__ */ Ct({
  name: "Close",
  __name: "close",
  setup(n) {
    return (t, e) => (z(), O("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 1024 1024"
    }, [
      y("path", {
        fill: "currentColor",
        d: "M764.288 214.592 512 466.88 259.712 214.592a31.936 31.936 0 0 0-45.12 45.12L466.752 512 214.528 764.224a31.936 31.936 0 1 0 45.12 45.184L512 557.184l252.288 252.288a31.936 31.936 0 0 0 45.12-45.12L557.12 512.064l252.288-252.352a31.936 31.936 0 1 0-45.12-45.184z"
      })
    ]));
  }
}), no = du, gu = /* @__PURE__ */ Ct({
  name: "InfoFilled",
  __name: "info-filled",
  setup(n) {
    return (t, e) => (z(), O("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 1024 1024"
    }, [
      y("path", {
        fill: "currentColor",
        d: "M512 64a448 448 0 1 1 0 896.064A448 448 0 0 1 512 64m67.2 275.072c33.28 0 60.288-23.104 60.288-57.344s-27.072-57.344-60.288-57.344c-33.28 0-60.16 23.104-60.16 57.344s26.88 57.344 60.16 57.344M590.912 699.2c0-6.848 2.368-24.64 1.024-34.752l-52.608 60.544c-10.88 11.456-24.512 19.392-30.912 17.28a12.992 12.992 0 0 1-8.256-14.72l87.68-276.992c7.168-35.136-12.544-67.2-54.336-71.296-44.096 0-108.992 44.736-148.48 101.504 0 6.784-1.28 23.68.064 33.792l52.544-60.608c10.88-11.328 23.552-19.328 29.952-17.152a12.8 12.8 0 0 1 7.808 16.128L388.48 728.576c-10.048 32.256 8.96 63.872 55.04 71.04 67.84 0 107.904-43.648 147.456-100.416z"
      })
    ]));
  }
}), fu = gu, mu = /* @__PURE__ */ Ct({
  name: "SuccessFilled",
  __name: "success-filled",
  setup(n) {
    return (t, e) => (z(), O("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 1024 1024"
    }, [
      y("path", {
        fill: "currentColor",
        d: "M512 64a448 448 0 1 1 0 896 448 448 0 0 1 0-896m-55.808 536.384-99.52-99.584a38.4 38.4 0 1 0-54.336 54.336l126.72 126.72a38.272 38.272 0 0 0 54.336 0l262.4-262.464a38.4 38.4 0 1 0-54.272-54.336z"
      })
    ]));
  }
}), pu = mu, wu = /* @__PURE__ */ Ct({
  name: "WarningFilled",
  __name: "warning-filled",
  setup(n) {
    return (t, e) => (z(), O("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 1024 1024"
    }, [
      y("path", {
        fill: "currentColor",
        d: "M512 64a448 448 0 1 1 0 896 448 448 0 0 1 0-896m0 192a58.432 58.432 0 0 0-58.24 63.744l23.36 256.384a35.072 35.072 0 0 0 69.76 0l23.296-256.384A58.432 58.432 0 0 0 512 256m0 512a51.2 51.2 0 1 0 0-102.4 51.2 51.2 0 0 0 0 102.4"
      })
    ]));
  }
}), yu = wu;
const io = Bt([
  String,
  Object,
  Function
]), vu = {
  Close: no
}, xu = {
  Close: no
}, kn = {
  success: pu,
  warning: yu,
  error: uu,
  info: fu
}, ku = (n) => n, fn = {
  esc: "Escape",
  delete: "Delete",
  backspace: "Backspace"
}, bu = De({
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
}), Su = Ct({
  name: "ElBadge"
}), Mu = /* @__PURE__ */ Ct({
  ...Su,
  props: bu,
  setup(n, { expose: t }) {
    const e = n, i = ri("badge"), s = E(() => e.isDot ? "" : xe(e.value) && xe(e.max) ? e.max < e.value ? `${e.max}+` : `${e.value}` : `${e.value}`), o = E(() => {
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
    }), (a, r) => (z(), O("div", {
      class: nt(M(i).b())
    }, [
      ne(a.$slots, "default"),
      p(Qn, {
        name: `${M(i).namespace.value}-zoom-in-center`,
        persisted: ""
      }, {
        default: Mt(() => [
          Fe(y("sup", {
            class: nt([
              M(i).e("content"),
              M(i).em("content", a.type),
              M(i).is("fixed", !!a.$slots.default),
              M(i).is("dot", a.isDot),
              M(i).is("hide-zero", !a.showZero && e.value === 0),
              a.badgeClass
            ]),
            style: gt(M(o))
          }, [
            ne(a.$slots, "content", { value: M(s) }, () => [
              us(B(M(s)), 1)
            ])
          ], 6), [
            [mn, !a.hidden && (M(s) || a.isDot || a.$slots.content)]
          ])
        ]),
        _: 3
      }, 8, ["name"])
    ], 2));
  }
});
var Cu = /* @__PURE__ */ Tn(Mu, [["__file", "badge.vue"]]);
const _u = to(Cu), Tu = De({
  a11y: {
    type: Boolean,
    default: !0
  },
  locale: {
    type: Bt(Object)
  },
  size: eu,
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
  ...su
}), Ut = {};
Ct({
  name: "ElConfigProvider",
  props: Tu,
  setup(n, { slots: t }) {
    Xe(() => n.message, (i) => {
      Object.assign(Ut, i ?? {});
    }, { immediate: !0, deep: !0 });
    const e = Qs(n);
    return () => ne(t, "default", { config: e?.value });
  }
});
const so = ["success", "info", "warning", "error"], At = ku({
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
}), zu = De({
  customClass: {
    type: String,
    default: At.customClass
  },
  center: {
    type: Boolean,
    default: At.center
  },
  dangerouslyUseHTMLString: {
    type: Boolean,
    default: At.dangerouslyUseHTMLString
  },
  duration: {
    type: Number,
    default: At.duration
  },
  icon: {
    type: io,
    default: At.icon
  },
  id: {
    type: String,
    default: At.id
  },
  message: {
    type: Bt([
      String,
      Object,
      Function
    ]),
    default: At.message
  },
  onClose: {
    type: Bt(Function),
    default: At.onClose
  },
  showClose: {
    type: Boolean,
    default: At.showClose
  },
  type: {
    type: String,
    values: so,
    default: At.type
  },
  plain: {
    type: Boolean,
    default: At.plain
  },
  offset: {
    type: Number,
    default: At.offset
  },
  zIndex: {
    type: Number,
    default: At.zIndex
  },
  grouping: {
    type: Boolean,
    default: At.grouping
  },
  repeatNum: {
    type: Number,
    default: At.repeatNum
  }
}), Ru = {
  destroy: () => !0
}, Yt = No([]), Lu = (n) => {
  const t = Yt.findIndex((s) => s.id === n), e = Yt[t];
  let i;
  return t > 0 && (i = Yt[t - 1]), { current: e, prev: i };
}, Pu = (n) => {
  const { prev: t } = Lu(n);
  return t ? t.vm.exposed.bottom.value : 0;
}, Au = (n, t) => Yt.findIndex((i) => i.id === n) > 0 ? 16 : t, Du = Ct({
  name: "ElMessage"
}), Iu = /* @__PURE__ */ Ct({
  ...Du,
  props: zu,
  emits: Ru,
  setup(n, { expose: t }) {
    const e = n, { Close: i } = xu, { ns: s, zIndex: o } = Js("message"), { currentZIndex: a, nextZIndex: r } = o, l = $(), c = $(!1), u = $(0);
    let d;
    const w = E(() => e.type ? e.type === "error" ? "danger" : e.type : "info"), v = E(() => {
      const U = e.type;
      return { [s.bm("icon", U)]: U && kn[U] };
    }), S = E(() => e.icon || kn[e.type] || ""), g = E(() => Pu(e.id)), m = E(() => Au(e.id, e.offset) + g.value), R = E(() => u.value + m.value), A = E(() => ({
      top: `${m.value}px`,
      zIndex: a.value
    }));
    function _() {
      e.duration !== 0 && ({ stop: d } = js(() => {
        V();
      }, e.duration));
    }
    function H() {
      d?.();
    }
    function V() {
      c.value = !1;
    }
    function Z({ code: U }) {
      U === fn.esc && V();
    }
    return Ge(() => {
      _(), r(), c.value = !0;
    }), Xe(() => e.repeatNum, () => {
      H(), _();
    }), Us(document, "keydown", Z), Hh(l, () => {
      u.value = l.value.getBoundingClientRect().height;
    }), t({
      visible: c,
      bottom: R,
      close: V
    }), (U, F) => (z(), vt(Qn, {
      name: M(s).b("fade"),
      onBeforeLeave: U.onClose,
      onAfterLeave: (X) => U.$emit("destroy"),
      persisted: ""
    }, {
      default: Mt(() => [
        Fe(y("div", {
          id: U.id,
          ref_key: "messageRef",
          ref: l,
          class: nt([
            M(s).b(),
            { [M(s).m(U.type)]: U.type },
            M(s).is("center", U.center),
            M(s).is("closable", U.showClose),
            M(s).is("plain", U.plain),
            U.customClass
          ]),
          style: gt(M(A)),
          role: "alert",
          onMouseenter: H,
          onMouseleave: _
        }, [
          U.repeatNum > 1 ? (z(), vt(M(_u), {
            key: 0,
            value: U.repeatNum,
            type: M(w),
            class: nt(M(s).e("badge"))
          }, null, 8, ["value", "type", "class"])) : j("v-if", !0),
          M(S) ? (z(), vt(M(xn), {
            key: 1,
            class: nt([M(s).e("icon"), M(v)])
          }, {
            default: Mt(() => [
              (z(), vt(ae(M(S))))
            ]),
            _: 1
          }, 8, ["class"])) : j("v-if", !0),
          ne(U.$slots, "default", {}, () => [
            U.dangerouslyUseHTMLString ? (z(), O(Ht, { key: 1 }, [
              j(" Caution here, message could've been compromised, never use user's input as message "),
              y("p", {
                class: nt(M(s).e("content")),
                innerHTML: U.message
              }, null, 10, ["innerHTML"])
            ], 2112)) : (z(), O("p", {
              key: 0,
              class: nt(M(s).e("content"))
            }, B(U.message), 3))
          ]),
          U.showClose ? (z(), vt(M(xn), {
            key: 2,
            class: nt(M(s).e("closeBtn")),
            onClick: ft(V, ["stop"])
          }, {
            default: Mt(() => [
              p(M(i))
            ]),
            _: 1
          }, 8, ["class", "onClick"])) : j("v-if", !0)
        ], 46, ["id"]), [
          [mn, c.value]
        ])
      ]),
      _: 3
    }, 8, ["name", "onBeforeLeave", "onAfterLeave"]));
  }
});
var Ou = /* @__PURE__ */ Tn(Iu, [["__file", "message.vue"]]);
let Eu = 1;
const oo = (n) => {
  const t = !n || ye(n) || Ve(n) || Ye(n) ? { message: n } : n, e = {
    ...At,
    ...t
  };
  if (!e.appendTo)
    e.appendTo = document.body;
  else if (ye(e.appendTo)) {
    let i = document.querySelector(e.appendTo);
    Zn(i) || (i = document.body), e.appendTo = i;
  }
  return Ji(Ut.grouping) && !e.grouping && (e.grouping = Ut.grouping), xe(Ut.duration) && e.duration === 3e3 && (e.duration = Ut.duration), xe(Ut.offset) && e.offset === 16 && (e.offset = Ut.offset), Ji(Ut.showClose) && !e.showClose && (e.showClose = Ut.showClose), e;
}, $u = (n) => {
  const t = Yt.indexOf(n);
  if (t === -1)
    return;
  Yt.splice(t, 1);
  const { handler: e } = n;
  e.close();
}, Wu = ({ appendTo: n, ...t }, e) => {
  const i = `message_${Eu++}`, s = t.onClose, o = document.createElement("div"), a = {
    ...t,
    id: i,
    onClose: () => {
      s?.(), $u(u);
    },
    onDestroy: () => {
      pn(null, o);
    }
  }, r = p(Ou, a, Ye(a.message) || Ve(a.message) ? {
    default: Ye(a.message) ? a.message : () => a.message
  } : null);
  r.appContext = e || Le._context, pn(r, o), n.appendChild(o.firstElementChild);
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
  const e = oo(n);
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
  const i = Wu(e, t);
  return Yt.push(i), i.handler;
};
so.forEach((n) => {
  Le[n] = (t = {}, e) => {
    const i = oo(t);
    return Le({ ...i, type: n }, e);
  };
});
function Bu(n) {
  for (const t of Yt)
    (!n || n === t.props.type) && t.handler.close();
}
Le.closeAll = Bu;
Le._context = null;
const Nu = eo(Le, "$message"), ao = [
  "success",
  "info",
  "warning",
  "error"
], Hu = De({
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
    type: io
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
    values: [...ao, ""],
    default: ""
  },
  zIndex: Number
}), ju = {
  destroy: () => !0
}, Fu = Ct({
  name: "ElNotification"
}), Vu = /* @__PURE__ */ Ct({
  ...Fu,
  props: Hu,
  emits: ju,
  setup(n, { expose: t }) {
    const e = n, { ns: i, zIndex: s } = Js("notification"), { nextZIndex: o, currentZIndex: a } = s, { Close: r } = vu, l = $(!1);
    let c;
    const u = E(() => {
      const _ = e.type;
      return _ && kn[e.type] ? i.m(_) : "";
    }), d = E(() => e.type && kn[e.type] || e.icon), w = E(() => e.position.endsWith("right") ? "right" : "left"), v = E(() => e.position.startsWith("top") ? "top" : "bottom"), S = E(() => {
      var _;
      return {
        [v.value]: `${e.offset}px`,
        zIndex: (_ = e.zIndex) != null ? _ : a.value
      };
    });
    function g() {
      e.duration > 0 && ({ stop: c } = js(() => {
        l.value && R();
      }, e.duration));
    }
    function m() {
      c?.();
    }
    function R() {
      l.value = !1;
    }
    function A({ code: _ }) {
      _ === fn.delete || _ === fn.backspace ? m() : _ === fn.esc ? l.value && R() : g();
    }
    return Ge(() => {
      g(), o(), l.value = !0;
    }), Us(document, "keydown", A), t({
      visible: l,
      close: R
    }), (_, H) => (z(), vt(Qn, {
      name: M(i).b("fade"),
      onBeforeLeave: _.onClose,
      onAfterLeave: (V) => _.$emit("destroy"),
      persisted: ""
    }, {
      default: Mt(() => [
        Fe(y("div", {
          id: _.id,
          class: nt([M(i).b(), _.customClass, M(w)]),
          style: gt(M(S)),
          role: "alert",
          onMouseenter: m,
          onMouseleave: g,
          onClick: _.onClick
        }, [
          M(d) ? (z(), vt(M(xn), {
            key: 0,
            class: nt([M(i).e("icon"), M(u)])
          }, {
            default: Mt(() => [
              (z(), vt(ae(M(d))))
            ]),
            _: 1
          }, 8, ["class"])) : j("v-if", !0),
          y("div", {
            class: nt(M(i).e("group"))
          }, [
            y("h2", {
              class: nt(M(i).e("title")),
              textContent: B(_.title)
            }, null, 10, ["textContent"]),
            Fe(y("div", {
              class: nt(M(i).e("content")),
              style: gt(_.title ? void 0 : { margin: 0 })
            }, [
              ne(_.$slots, "default", {}, () => [
                _.dangerouslyUseHTMLString ? (z(), O(Ht, { key: 1 }, [
                  j(" Caution here, message could've been compromised, never use user's input as message "),
                  y("p", { innerHTML: _.message }, null, 8, ["innerHTML"])
                ], 2112)) : (z(), O("p", { key: 0 }, B(_.message), 1))
              ])
            ], 6), [
              [mn, _.message]
            ]),
            _.showClose ? (z(), vt(M(xn), {
              key: 0,
              class: nt(M(i).e("closeBtn")),
              onClick: ft(R, ["stop"])
            }, {
              default: Mt(() => [
                p(M(r))
              ]),
              _: 1
            }, 8, ["class", "onClick"])) : j("v-if", !0)
          ], 2)
        ], 46, ["id", "onClick"]), [
          [mn, l.value]
        ])
      ]),
      _: 3
    }, 8, ["name", "onBeforeLeave", "onAfterLeave"]));
  }
});
var Uu = /* @__PURE__ */ Tn(Vu, [["__file", "notification.vue"]]);
const bn = {
  "top-left": [],
  "top-right": [],
  "bottom-left": [],
  "bottom-right": []
}, Gn = 16;
let Yu = 1;
const Pe = function(n = {}, t) {
  if (!be)
    return { close: () => {
    } };
  (ye(n) || Ve(n)) && (n = { message: n });
  const e = n.position || "top-right";
  let i = n.offset || 0;
  bn[e].forEach(({ vm: u }) => {
    var d;
    i += (((d = u.el) == null ? void 0 : d.offsetHeight) || 0) + Gn;
  }), i += Gn;
  const s = `notification_${Yu++}`, o = n.onClose, a = {
    ...n,
    offset: i,
    id: s,
    onClose: () => {
      Zu(s, e, o);
    }
  };
  let r = document.body;
  Zn(n.appendTo) ? r = n.appendTo : ye(n.appendTo) && (r = document.querySelector(n.appendTo)), Zn(r) || (r = document.body);
  const l = document.createElement("div"), c = p(Uu, a, Ye(a.message) ? a.message : Ve(a.message) ? () => a.message : null);
  return c.appContext = Hs(t) ? Pe._context : t, c.props.onDestroy = () => {
    pn(null, l);
  }, pn(c, l), bn[e].push({ vm: c }), r.appendChild(l.firstElementChild), {
    close: () => {
      c.component.exposed.visible.value = !1;
    }
  };
};
ao.forEach((n) => {
  Pe[n] = (t = {}, e) => ((ye(t) || Ve(t)) && (t = {
    message: t
  }), Pe({ ...t, type: n }, e));
});
function Zu(n, t, e) {
  const i = bn[t], s = i.findIndex(({ vm: c }) => {
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
function Xu() {
  for (const n of Object.values(bn))
    n.forEach(({ vm: t }) => {
      t.component.exposed.visible.value = !1;
    });
}
Pe.closeAll = Xu;
Pe._context = null;
const Gu = eo(Pe, "$notify"), It = {
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
    i === "center" ? Nu({
      message: t,
      type: e,
      duration: s,
      showClose: o,
      grouping: !0,
      customClass: `app-toast app-toast--${e}`
    }) : Gu({
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
}, Ku = ["disabled"], qu = {
  key: 0,
  class: "custom-button__loading"
}, Ju = /* @__PURE__ */ Ct({
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
    return (e, i) => (z(), O("button", {
      class: nt([
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
      n.loading ? (z(), O("div", qu, i[1] || (i[1] = [
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
      ]))) : j("v-if", !0),
      ne(e.$slots, "default", {}, void 0, !0)
    ], 10, Ku));
  }
}), Qt = /* @__PURE__ */ qe(Ju, [["__scopeId", "data-v-9497085f"]]), Qu = {
  key: 1,
  class: "splitter-panel second-panel"
}, td = /* @__PURE__ */ Ct({
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
    const t = n, e = $(null), i = (A) => typeof A == "string" && A.includes("%"), s = (A) => typeof A == "string" ? parseFloat(A.replace("%", "")) : A, o = $(s(t.defaultSize)), a = E(() => i(t.defaultSize)), r = E(() => a.value ? `${o.value}%` : `${o.value}px`), l = E(() => t.firstCollapsed ? "0px" : t.secondCollapsed ? "100%" : r.value);
    let c = !1, u = 0, d = 0;
    const w = () => e.value?.offsetWidth || 0, v = (A) => {
      const _ = w();
      return A / _ * 100;
    }, S = (A) => {
      const _ = w();
      return A * _ / 100;
    }, g = (A) => {
      A.preventDefault(), A.stopPropagation(), !(!e.value || t.firstCollapsed || t.secondCollapsed) && (c = !0, u = A.clientX, d = a.value ? S(o.value) : o.value, document.addEventListener("mousemove", m), document.addEventListener("mouseup", R));
    }, m = (A) => {
      if (A.preventDefault(), A.stopPropagation(), !c || !e.value) return;
      const _ = A.clientX - u;
      let H = d + _;
      const V = a.value ? S(s(t.minSize)) : s(t.minSize), Z = a.value ? S(s(t.maxSize)) : s(t.maxSize);
      H = Math.max(V, Math.min(Z, H)), o.value = a.value ? v(H) : H;
    }, R = () => {
      c = !1, document.removeEventListener("mousemove", m), document.removeEventListener("mouseup", R);
    };
    return Jn(() => {
      document.removeEventListener("mousemove", m), document.removeEventListener("mouseup", R);
    }), (A, _) => (z(), O(
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
            style: gt({ width: M(l), minWidth: M(l) })
          },
          [
            ne(A.$slots, "first", {}, void 0, !0)
          ],
          4
          /* STYLE */
        ),
        !A.firstCollapsed && !A.secondCollapsed ? (z(), O(
          "div",
          {
            key: 0,
            class: "splitter-divider",
            style: gt({ left: M(l) }),
            role: "separator",
            "aria-orientation": "vertical",
            onMousedown: g
          },
          _[0] || (_[0] = [
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
        )) : j("v-if", !0),
        A.secondCollapsed ? j("v-if", !0) : (z(), O("div", Qu, [
          ne(A.$slots, "second", {}, void 0, !0)
        ]))
      ],
      512
      /* NEED_PATCH */
    ));
  }
}), ed = /* @__PURE__ */ qe(td, [["__scopeId", "data-v-79af4cc0"]]), nd = `你正在执行图片原文转写。像在 AI 聊天中直接阅读图片一样，按视觉阅读顺序从上到下完整读取所有可见文字。
要求：
1. 忠实保留原语言、标点、数字、大小写、标题、段落、列表、代码和表格内容，不翻译、不概括、不解释；
2. 标题、说明文字、每个独立段落和每个列表项之间各空一行，保持图片本身的语义分段；
3. 只输出纯文本原文，不输出 JSON，不添加 Markdown 标题、加粗、代码围栏或“识别结果”等额外说明；
4. 输出前重新检查图片的左、右、上、下区域，确保没有只读取标题、漏掉小字、列表项或末尾内容。`, an = {
  auto: "自动判断图片文字语言",
  zh: "优先按简体中文识别",
  "zh-tw": "优先按繁体中文识别",
  en: "优先按英文识别",
  ja: "优先按日文识别",
  ko: "优先按韩文识别"
}, id = /* @__PURE__ */ new Set([
  "title",
  "paragraph",
  "list",
  "code",
  "table"
]), Kn = (n, t, e) => typeof n == "string" && id.has(n) ? n : e === 0 && t.length <= 80 && !/[。！？.!?]\s*$/.test(t) ? "title" : /^\s*(?:[-*+•·]|\d+[.)、）])\s+/m.test(t) ? "list" : "paragraph", sd = /^\s*(?:[-*+•·]|\d+[.)、）])\s+/, rn = (n) => n.replace(/^\s{0,3}#{1,6}\s+/, "").replace(/^\s*>\s?/, "").replace(/(\*\*|__|~~)(.*?)\1/g, "$2").trim(), od = (n) => {
  const e = n.trim().replace(/^```(?:text|plaintext|markdown)?\s*\n?/i, "").replace(/\n?```\s*$/i, "").split(/\n{2,}/).map((s) => s.trim()).filter(Boolean), i = [];
  for (const s of e) {
    const o = s.split(/\n/).map((c) => c.trim()).filter(Boolean);
    if (o.length === 0) continue;
    if (o.every((c) => sd.test(c))) {
      for (const c of o)
        i.push({
          type: "list",
          text: rn(c)
        });
      continue;
    }
    const a = rn(o[0]);
    if (i.length === 0 && o.length > 1 && a.length <= 100 && !/[。！？.!?]\s*$/.test(a)) {
      i.push({ type: "title", text: a });
      const c = o.slice(1).map(rn).join(" ").trim();
      c && i.push({
        type: Kn(void 0, c, i.length),
        text: c
      });
      continue;
    }
    const l = o.map(rn).join(" ").trim();
    l && i.push({
      type: Kn(void 0, l, i.length),
      text: l
    });
  }
  return i;
}, ad = (n) => {
  const t = n.match(/```(?:json)?\s*([\s\S]*?)```/i)?.[1]?.trim();
  if (t?.startsWith("{") && t.endsWith("}") || t?.startsWith("[") && t.endsWith("]"))
    return t;
  const e = n.indexOf("{"), i = n.lastIndexOf("}"), s = n.indexOf("["), o = n.lastIndexOf("]");
  return s >= 0 && o > s && (e < 0 || s < e) ? n.slice(s, o + 1) : e >= 0 && i > e ? n.slice(e, i + 1) : null;
}, rd = (n) => {
  const t = n.trim();
  if (!t)
    throw new Error("AI_OCR_EMPTY_RESPONSE");
  const e = ad(t);
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
  }).filter((c) => !!c), r = a.length > 0 ? a : od(s || t);
  return {
    text: r.map((c) => c.text).join(`

`) || s || t,
    sections: r
  };
}, qn = (n) => n.replace(/[\s\p{P}\p{S}]/gu, "").length, ld = (n) => qn(n.text) < 180 && n.sections.length <= 2, hs = (n) => n && n.split(/[\\/]/).filter(Boolean).pop() || "", cd = async (n, t) => {
  const e = await ja(), i = await Fa(e);
  if (!i.selectedMmprojPath)
    throw new Error("AI_OCR_VISION_MODEL_UNAVAILABLE");
  const s = async (u) => {
    const d = await Ss({
      messages: [
        { role: "system", content: nd },
        {
          role: "user",
          content: [
            {
              type: "text",
              text: u ? `${an[t] || an.auto}。上一次转写可能不完整，请重新独立阅读整张图片，尤其检查标题之后、列表和底部的所有文字。只输出完整原文。` : `${an[t] || an.auto}。请完整转写这张图片中的全部文字，只输出原文。`
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
    return rd(d.content);
  }, o = await s(!1), a = ld(o) ? await s(!0) : null, r = a && qn(a.text) > qn(o.text) ? a : o, l = await bs().catch(() => null), c = hs(l?.modelPath) || hs(i.selectedModelPath) || "Local Vision";
  return {
    text: r.text,
    sections: r.sections,
    modelName: c
  };
}, hd = ["src", "alt"], ud = { class: "ocr-header" }, dd = {
  class: "ocr-title-copy",
  "data-tauri-drag-region": ""
}, gd = {
  class: "ocr-window-title",
  "data-tauri-drag-region": ""
}, fd = { "data-tauri-drag-region": "" }, md = {
  class: "ocr-source-inline",
  "data-tauri-drag-region": ""
}, pd = {
  class: "ocr-source-name",
  "data-tauri-drag-region": ""
}, wd = { "data-tauri-drag-region": "" }, yd = { class: "ocr-title-actions" }, vd = ["title"], xd = { class: "ocr-window-controls" }, kd = ["title"], bd = ["title"], Sd = ["title"], Md = ["title"], Cd = { class: "ocr-preview-pane" }, _d = { class: "ocr-pane-header" }, Td = { class: "ocr-pane-heading" }, zd = { class: "ocr-pane-header-actions" }, Rd = ["aria-label"], Ld = ["aria-selected"], Pd = ["aria-selected"], Ad = ["title"], Dd = {
  key: 0,
  class: "ocr-preview-stage"
}, Id = ["src", "alt"], Od = ["aria-label"], Ed = { class: "ocr-native-document" }, $d = { class: "ocr-record-pane" }, Wd = { class: "ocr-pane-header result-header" }, Bd = { class: "ocr-pane-heading" }, Nd = { key: 0 }, Hd = { key: 1 }, jd = { class: "ocr-pane-header-actions" }, Fd = ["title"], Vd = {
  key: 0,
  class: "ocr-state"
}, Ud = { class: "ocr-ai-orbit" }, Yd = {
  key: 1,
  class: "ocr-state error"
}, Zd = {
  key: 2,
  class: "ocr-state muted"
}, Xd = {
  key: 3,
  class: "ocr-result-scroll"
}, Gd = {
  key: 0,
  class: "ocr-selection-translation"
}, Kd = { class: "ocr-translation-section" }, qd = { class: "ocr-translation-label" }, Jd = { class: "ocr-translation-source" }, Qd = { class: "ocr-translation-section result" }, tg = { class: "ocr-translation-label" }, eg = ["textContent"], ng = { class: "ocr-record-header" }, ig = ["aria-pressed", "title", "onClick"], sg = { key: 1 }, og = { class: "ocr-record-kind" }, ag = {
  key: 0,
  class: "ocr-record-score"
}, rg = ["textContent"], lg = {
  key: 0,
  class: "ocr-record-translation"
}, cg = { class: "ocr-translation-label" }, hg = ["textContent"], ug = { class: "ocr-action-bar" }, dg = ["onClick"], gg = { class: "engine-label" }, fg = ["onClick"], mg = { class: "engine-label" }, pg = { class: "ocr-engine-btn-group relative" }, wg = {
  key: 2,
  class: "zoom-info"
}, yg = /* @__PURE__ */ Ct({
  __name: "index",
  setup(n) {
    const { t } = ds(), e = $(), i = $(null), s = $(""), o = $(""), a = $("pin"), r = $(""), l = $([]), c = $(!1), u = $(""), d = $("pending"), w = $(""), v = $(""), S = $(0), g = $(0), m = $("image"), R = $({ width: 0, height: 0 }), A = $(null), _ = $(!1), H = $(!1), V = $(!1), Z = $(), U = $({}), F = $("bing"), X = $(!1), G = $(), Q = $({}), tt = $("auto"), ot = E(() => [
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
    ]), wt = E(() => [
      { value: "auto", label: t("pin.ocrLanguageAuto") },
      { value: "zh", label: t("pin.ocrLanguageZh") },
      { value: "zh-tw", label: t("pin.ocrLanguageZhTw") },
      { value: "en", label: t("pin.ocrLanguageEn") },
      { value: "ja", label: t("pin.ocrLanguageJa") },
      { value: "ko", label: t("pin.ocrLanguageKo") }
    ]), at = (h) => {
      const x = typeof h == "string" ? h.trim().toLowerCase() : "";
      return x === "auto" || x === "zh" || x === "zh-tw" || x === "en" || x === "ja" || x === "ko" ? x : "auto";
    }, Y = E(() => wt.value.find((h) => h.value === tt.value)?.label || t("pin.ocrLanguageAuto")), J = E(() => t("pin.translationResult")), mt = (h, x) => {
      if (!h) {
        x.value = {};
        return;
      }
      const L = h.getBoundingClientRect(), st = 180, K = 8, Tt = Math.min(
        Math.max(
          L.left + L.width / 2,
          K + st / 2
        ),
        window.innerWidth - K - st / 2
      );
      x.value = {
        left: `${Tt}px`,
        bottom: `${Math.max(8, window.innerHeight - L.top + 8)}px`
      };
    }, lt = () => {
      V.value && mt(Z.value, U), X.value && mt(
        G.value,
        Q
      );
    }, rt = $(1), pt = $(!1), I = $(!1);
    let yt = null;
    const N = $(!1), kt = $({ x: 0, y: 0 }), ct = $(!0), Lt = $({ width: 0, height: 0 });
    let Nt = null, qt = 0;
    const Jt = $(""), C = E(() => ({
      width: "100%",
      height: a.value === "ocr" ? "auto" : "100%",
      flex: a.value === "ocr" ? "1 1 auto" : void 0,
      minHeight: a.value === "ocr" ? "120px" : void 0,
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      overflow: "hidden"
    })), et = E(() => ({
      width: "100%",
      height: "100%",
      objectFit: "contain"
    })), bt = E(() => S.value > 0 && g.value > 0 ? `${S.value} × ${g.value}` : t("pin.screenshotPreview")), ht = E(() => c.value ? t("pin.recognizing") : u.value ? t("pin.recognizeFailed") : r.value.trim() ? t("pin.recognizeSuccess") : t("pin.noTextRecognized")), zt = E(() => c.value ? t("pin.aiRecognizing") : (d.value === "ai", t("pin.aiVision"))), Pt = E(() => {
      const h = zt.value;
      return w.value ? `${h} · ${w.value}` : h;
    }), Et = E(
      () => l.value.filter((h) => h.selected)
    ), k = E(
      () => m.value === "text" ? t("pin.selectableTextView") : t("pin.sourceImage")
    ), W = E(() => c.value && !r.value.trim() ? t("pin.selectableTextPreparing") : m.value === "text" ? t("pin.nativeTextSelectionHint") : t("pin.switchToSelectableTextHint")), ut = (h) => h === "title" ? "h2" : h === "code" ? "pre" : "p", dt = E(() => Et.value.length), q = (h) => t(`pin.sectionKinds.${h}`), St = (h) => (h.translatedText || h.text).trim(), Dt = (h) => h.map(St).filter(Boolean).join(`

`), _t = () => {
      r.value = Dt(l.value);
    }, Ie = () => {
      const h = /* @__PURE__ */ new Date(), x = (L) => L.toString().padStart(2, "0");
      return `${t("pin.screenshotPrefix")} ${h.getFullYear()}-${x(h.getMonth() + 1)}-${x(h.getDate())} ${x(h.getHours())}.${x(h.getMinutes())}.${x(h.getSeconds())}.png`;
    }, ce = E(() => {
      const h = Math.min(
        Lt.value.width,
        Lt.value.height
      );
      let x = 1;
      return h < 300 && (x = Math.max(0.4, h / 300)), {
        left: `${kt.value.x}px`,
        top: `${kt.value.y}px`,
        transform: `scale(${x})`,
        transformOrigin: "top left"
      };
    }), Zt = (h) => {
      s.value = h, S.value = 0, g.value = 0, m.value = "image", R.value = { width: 0, height: 0 }, a.value === "ocr" && (v.value = Ie()), o.value && (URL.revokeObjectURL(o.value), o.value = "");
      try {
        const x = h.split(",")[1] || h, L = h.match(/data:([^;]+);/), st = L ? L[1] : "image/png", K = atob(x), Tt = new Uint8Array(K.length);
        for (let Vt = 0; Vt < K.length; Vt++)
          Tt[Vt] = K.charCodeAt(Vt);
        const $t = new Blob([Tt], { type: st });
        o.value = URL.createObjectURL($t);
      } catch (x) {
        D.error("[PIN窗口] 转换 Blob URL 失败", x), o.value = h;
      }
    }, zn = async () => {
      await pe(), await new Promise((h) => requestAnimationFrame(() => h()));
      try {
        await i.value?.emit("pin-window-ready");
      } catch (h) {
        D.error("[PIN窗口] 发送 ready 事件失败", h);
      }
    }, fi = (h) => {
      if (!h?.imageData)
        return D.error("[PIN窗口] 收到的事件数据格式不正确", h), !1;
      const x = h.mode === "ocr" ? "ocr" : "pin", L = `${x}:${h.imageData.length}`;
      return L === Jt.value ? !1 : (Jt.value = L, a.value = x, Zt(h.imageData), Ft(), a.value === "ocr" ? (mi(h.text || ""), u.value = "", Rn()) : (qt++, c.value = !1, u.value = "", r.value = "", l.value = []), !0);
    }, ro = (h) => {
      const x = ho(h);
      x.length === 0 && !h.text.trim() || (l.value = x.length > 0 ? x : pi(h.text), _t(), m.value = "text", d.value = "ai", w.value = h.modelName);
    }, Rn = async () => {
      if (!s.value) return;
      const h = ++qt;
      A.value = null, c.value = !0, u.value = "", d.value = "pending", w.value = "";
      const x = Date.now();
      Rt.log("[Pin AI OCR] recognize start", {
        requestId: h,
        imageDataLength: s.value.length,
        imageWidth: S.value,
        imageHeight: g.value,
        language: tt.value
      });
      try {
        const L = await cd(
          s.value,
          tt.value
        );
        if (h !== qt) return;
        if (!L.text.trim())
          throw new Error("AI_OCR_EMPTY_RESPONSE");
        ro(L), Rt.log("[Pin AI OCR] recognize success", {
          requestId: h,
          durationMs: Date.now() - x,
          engine: d.value,
          textLength: r.value.length,
          textPreview: r.value.slice(0, 300)
        });
      } catch (L) {
        if (h !== qt) return;
        if (D.error("[PIN窗口] AI OCR 识别失败", L), Rt.log("[Pin AI OCR] recognize failed", {
          requestId: h,
          durationMs: Date.now() - x,
          error: uo(L)
        }), r.value.trim()) {
          u.value = "";
          return;
        }
        u.value = t("pin.recognizeFailed"), r.value = "", l.value = [], It.error(t("pin.recognizeFailed"));
      } finally {
        h === qt && (c.value = !1);
      }
    }, mi = (h) => {
      const x = h.trim();
      r.value = x, l.value = pi(x);
    }, pi = (h) => h.split(/\n{2,}|\n/).map((x, L) => co(x, L)).filter((x) => x.text.trim()), lo = (h, x) => x === 0 && h.length <= 80 && !/[。！？.!?]\s*$/.test(h) ? "title" : /^\s*(?:[-*+•·]|\d+[.)、）])\s+/.test(h) ? "list" : "paragraph", co = (h, x) => ({
      id: `plain-${Date.now()}-${x}`,
      kind: lo(h, x),
      text: h.trim(),
      sourceText: h.trim(),
      translatedText: "",
      confidence: 0,
      selected: !1
    }), ho = (h) => {
      const x = Date.now();
      return h.sections.map((L, st) => ({
        id: `ai-${x}-${st}`,
        kind: L.type,
        text: L.text.trim(),
        sourceText: L.text.trim(),
        translatedText: "",
        confidence: 0,
        selected: !1
      })).filter((L) => L.text);
    }, uo = (h) => h instanceof Error ? `${h.name}: ${h.message}
${h.stack || ""}`.trim() : typeof h == "string" ? h : JSON.stringify(h) || String(h), Ln = async () => {
      const h = mo();
      h && await go(h);
    }, go = async (h) => {
      try {
        await navigator.clipboard.writeText(h), It.success(t("pin.copySuccess"));
      } catch (x) {
        D.error("[PIN窗口] 复制识别文本失败", x), It.error(t("pin.copyFailed"));
      } finally {
        Ft();
      }
    }, fo = async () => {
      _t();
      const h = r.value.trim();
      if (h)
        try {
          await b("save_text_to_file", { text: h }), It.success(t("pin.saveSuccess"));
        } catch (x) {
          x !== "SAVE_CANCELLED" && (D.error("[PIN窗口] 保存文本失败", x), It.error(t("pin.saveFailed")));
        }
    }, mo = () => {
      const h = wi();
      if (h)
        return h;
      const x = Dt(
        Et.value
      );
      return x || (_t(), r.value.trim());
    }, wi = () => {
      const h = window.getSelection(), x = e.value?.querySelector(".ocr-reading-surface");
      if (!h || h.rangeCount === 0 || !x)
        return "";
      for (let L = 0; L < h.rangeCount; L += 1) {
        const K = h.getRangeAt(L).commonAncestorContainer;
        if (x.contains(K))
          return h.toString().trim();
      }
      return "";
    }, po = (h) => {
      const x = l.value.find((L) => L.id === h);
      x && (x.selected = !x.selected);
    }, wo = (h) => {
      const x = h.target;
      !x || !A.value || (A.value.translatedText = x.innerText.trim());
    }, yo = async () => {
      V.value = !V.value, X.value = !1, V.value && (await pe(), lt());
    }, vo = (h) => {
      F.value = h, V.value = !1, b("set_translation_engine", { engine: h }).catch((x) => {
        D.error("[PIN窗口] 保存翻译引擎设置失败", x);
      });
    }, yi = async () => {
      X.value = !X.value, V.value = !1, X.value && (await pe(), lt());
    }, xo = (h) => {
      tt.value = h, X.value = !1, b("set_ocr_language", { language: h }).catch((x) => {
        D.error("[PIN窗口] 保存 OCR 语言设置失败", x);
      }), s.value && Rn();
    }, ko = async () => {
      if (Ft(), V.value = !1, X.value = !1, !r.value.trim() || H.value) return;
      const h = wi(), x = h ? [] : Et.value.length > 0 ? Et.value : l.value, L = h || (x.length > 0 ? x.map((K) => K.text).join(`

`) : r.value), st = de(L);
      if (!Te(st)) {
        It.warning(t("pin.unsupportedTranslateLanguage"));
        return;
      }
      H.value = !0;
      try {
        if (await bo(), h) {
          const K = await Pn(
            h,
            st
          );
          K && (A.value = {
            sourceText: h,
            translatedText: K.trim()
          }), It.success(t("pin.translateSuccess"));
        } else if (x.length > 0) {
          for (const K of x) {
            const Tt = await Pn(
              K.text,
              st
            );
            Tt && (K.translatedText = Tt.trim());
          }
          _t(), It.success(t("pin.translateSuccess"));
        } else {
          const K = await Pn(
            r.value,
            st
          );
          K && mi(K), It.success(t("pin.translateSuccess"));
        }
      } catch (K) {
        D.error("[PIN窗口] 翻译失败", K);
        const Tt = K instanceof Error ? K.message : String(K);
        if (Tt !== "翻译已取消") {
          const $t = [
            t("pin.offlineModelNotDownloaded"),
            t("pin.offlineModelNotActivated")
          ];
          It.error(
            $t.includes(Tt) ? Tt : t("pin.translateFailed")
          );
        }
      } finally {
        H.value = !1;
      }
    }, bo = async () => {
      if (F.value !== "offline")
        return;
      if ((await ni()).isCached)
        await ks();
      else
        throw new Error(t("pin.offlineModelNotDownloaded"));
      if (!await b("get_offline_model_activated"))
        throw new Error(t("pin.offlineModelNotActivated"));
    }, Pn = async (h, x) => {
      const L = h.trim();
      return L ? F.value === "offline" ? xs(L) : await b("translate_text", {
        text: L,
        from: "auto",
        to: x === "zh" ? "en" : "zh",
        engine: F.value
      }) : "";
    }, So = (h) => {
      Je(h);
    }, Mo = async () => {
      if (!i.value) return;
      const h = i.value;
      typeof h.minimize == "function" && await h.minimize();
    }, Co = async () => {
      if (!i.value) return;
      const h = i.value;
      (typeof h.isMaximized == "function" ? await h.isMaximized() : !1) && typeof h.unmaximize == "function" ? await h.unmaximize() : typeof h.maximize == "function" && await h.maximize();
    }, vi = async (h) => {
      const x = h.target;
      if (S.value = x.naturalWidth, g.value = x.naturalHeight, i.value && R.value.width === 0)
        try {
          const L = await i.value.innerSize(), st = await i.value.scaleFactor(), K = L.toLogical(st);
          R.value = {
            width: K.width,
            height: K.height
          };
        } catch (L) {
          D.error("[PIN窗口] 获取窗口初始尺寸失败", L);
        }
    }, xi = async (h) => {
      if (h.ctrlKey && (h.preventDefault(), h.stopPropagation(), !I.value && i.value)) {
        I.value = !0;
        try {
          const L = (await i.value.innerSize()).toLogical(
            await i.value.scaleFactor()
          ), st = h.deltaY > 0 ? 0.95 : 1.05, K = L.width, Tt = L.height, $t = Math.round(K * st), Vt = Math.round(Tt * st), Oe = 50, ie = 3e3;
          if ($t >= Oe && $t <= ie && Vt >= Oe && Vt <= ie) {
            if (await i.value.setSize(new Ne($t, Vt)), S.value > 0) {
              const he = Math.round(
                $t / S.value * 100
              );
              rt.value = he / 100;
            }
            pt.value = !0, An();
          }
        } catch (x) {
          D.error("[PIN窗口] 窗口缩放失败", x);
        } finally {
          setTimeout(() => {
            I.value = !1;
          }, 100);
        }
      }
    }, _o = (h) => {
      a.value === "ocr" && h.ctrlKey && xi(h);
    }, An = () => {
      pt.value = !0, yt && clearTimeout(yt), yt = setTimeout(() => {
        pt.value = !1;
      }, 1e3);
    }, Je = (h) => {
      h.preventDefault(), h.stopPropagation(), N.value = !1, setTimeout(() => {
        const x = window.innerWidth, L = window.innerHeight;
        Lt.value = { width: x, height: L };
        const st = Math.min(x, L);
        let K = 1;
        st < 300 && (K = Math.max(0.4, st / 300));
        const Tt = a.value === "ocr" ? 176 : 150, $t = a.value === "ocr" && r.value.trim() ? 222 : 180, Vt = Tt * K, Oe = $t * K;
        let ie = h.clientX, he = h.clientY;
        ie + Vt > x && (ie = x - Vt - 5), he + Oe > L && (he = L - Oe - 5), ie = Math.max(5, ie), he = Math.max(5, he), kt.value = { x: ie, y: he }, N.value = !0;
      }, 10);
    }, Ft = () => {
      N.value = !1, V.value = !1, X.value = !1;
    }, ki = async () => {
      i.value && (ct.value = !ct.value, await i.value.setAlwaysOnTop(ct.value), Ft());
    }, bi = async (h) => {
      if (i.value && !I.value) {
        I.value = !0;
        try {
          const L = (await i.value.innerSize()).toLogical(
            await i.value.scaleFactor()
          ), st = Math.round(L.width * h), K = Math.round(L.height * h), Tt = 50, $t = 3e3;
          st >= Tt && st <= $t && K >= Tt && K <= $t && (await i.value.setSize(new Ne(st, K)), S.value > 0 && (rt.value = st / S.value), An());
        } catch (x) {
          D.error("[PIN窗口] 键盘缩放失败", x);
        } finally {
          setTimeout(() => {
            I.value = !1;
          }, 100);
        }
      }
    }, Si = async () => {
      if (i.value && R.value.width > 0 && R.value.height > 0)
        try {
          await i.value.setSize(
            new Ne(
              R.value.width,
              R.value.height
            )
          ), rt.value = 1, An();
        } catch (h) {
          D.error("[PIN窗口] 重置缩放失败", h);
        }
      Ft();
    }, To = async () => {
      try {
        const h = s.value;
        Ft(), i.value && await i.value.hide(), await b("copy_image_to_clipboard", { imageData: h }), It.success(t("pin.copySuccess")), i.value && await i.value.close();
      } catch (h) {
        D.error("[PIN窗口] 复制图片失败", h), It.error(t("pin.copyFailed")), i.value && await i.value.close();
      }
    }, zo = async () => {
      const h = s.value;
      Ft(), i.value && await i.value.hide();
      try {
        await b("save_pin_image", { imageData: h }), It.success(t("pin.saveSuccess")), i.value && await i.value.close();
      } catch (x) {
        x === "SAVE_CANCELLED" ? (D.info("[PIN窗口] 用户取消保存，恢复窗口显示"), i.value && await i.value.show()) : (D.error("[PIN窗口] 保存图片失败", x), It.error(t("pin.saveFailed")), i.value && await i.value.close());
      }
    }, Dn = async () => {
      i.value && await i.value.close();
    }, Mi = (h) => {
      h.preventDefault();
    }, Ci = async (h) => {
      if (h.button === 0 && i.value) {
        const x = h.target;
        if (x.hasAttribute("data-tauri-drag-region") || x.closest("[data-tauri-drag-region]")) {
          if (x.closest("button") || x.closest(".ocr-view-original"))
            return;
          try {
            await i.value.startDragging();
          } catch (L) {
            D.error("[PIN窗口] 拖拽窗口失败", L);
          }
        }
      }
    }, _i = (h) => {
      const x = h.target;
      !x.closest(".context-menu") && !x.closest(".ocr-engine-btn-group") && !x.closest(".translate-btn-group") && !x.closest(".ocr-floating-menu") && Ft();
    }, Ti = (h) => {
      if (h.altKey && h.code === "Space") {
        h.preventDefault(), h.stopPropagation();
        return;
      }
      h.key === "Escape" ? N.value ? Ft() : Dn() : (h.ctrlKey || h.metaKey) && (h.key === "0" ? (h.preventDefault(), Si()) : h.key === "=" || h.key === "+" ? (h.preventDefault(), bi(1.05)) : h.key === "-" && (h.preventDefault(), bi(0.95)));
    }, Ro = async () => {
      if (i.value)
        try {
          const h = await b(
            "get_pin_window_data",
            { label: i.value.label }
          );
          h && fi(h) && await zn();
        } catch (h) {
          D.error("[PIN窗口] 主动获取窗口数据失败", h);
        }
    };
    return Ge(async () => {
      if (e.value) {
        try {
          const [h, x] = await Promise.all([
            b("get_translation_engine"),
            b("get_ocr_language")
          ]);
          (h === "google" || h === "bing" || h === "offline" || h === "local-ai") && (F.value = h), tt.value = at(x);
        } catch (h) {
          D.error("[PIN窗口] 读取默认 OCR/翻译设置失败", h);
        }
        try {
          i.value = Ke.getCurrent();
          try {
            Nt = await i.value.listen(
              "pin-window-data",
              (h) => {
                fi(h.payload) && zn();
              }
            ), await Ro();
          } catch (h) {
            D.error("[PIN窗口] 设置事件监听失败", h);
          }
        } catch (h) {
          if (D.error("[PIN窗口] 初始化错误", h), i.value)
            try {
              await i.value.show();
            } catch (x) {
              D.error("[PIN窗口] 显示窗口失败", x);
            }
        }
        document.addEventListener("click", _i), document.addEventListener("keydown", Ti, !0), document.addEventListener("contextmenu", Mi, !0), window.addEventListener("resize", lt), window.addEventListener("scroll", lt, !0), window.addEventListener("blur", Ft), document.body && (document.body.oncontextmenu = (h) => (h.preventDefault(), !1));
      }
    }), Jn(() => {
      o.value && URL.revokeObjectURL(o.value), Nt && Nt(), document.removeEventListener("click", _i), document.removeEventListener("keydown", Ti, !0), document.removeEventListener("contextmenu", Mi, !0), window.removeEventListener("resize", lt), window.removeEventListener("scroll", lt, !0), window.removeEventListener("blur", Ft), document.body && (document.body.oncontextmenu = null), yt && clearTimeout(yt);
    }), (h, x) => (z(), O(
      "div",
      {
        class: nt(["pin-container", { "ocr-mode": a.value === "ocr" }]),
        ref_key: "containerRef",
        ref: e,
        onContextmenu: ft(Je, ["prevent"]),
        onWheelCapture: _o
      },
      [
        j(" 图片容器 "),
        o.value && a.value === "pin" ? (z(), O(
          "div",
          {
            key: 0,
            class: "image-wrapper",
            style: gt(C.value),
            onWheelCapture: xi,
            onContextmenu: ft(Je, ["prevent"]),
            "data-tauri-drag-region": "",
            onMousedown: Ci
          },
          [
            y("img", {
              src: o.value,
              alt: h.$t("screenshot.pin"),
              style: gt(et.value),
              onLoad: vi,
              draggable: "false",
              "data-tauri-drag-region": ""
            }, null, 44, hd)
          ],
          36
          /* STYLE, NEED_HYDRATION */
        )) : j("v-if", !0),
        a.value === "ocr" ? (z(), O(
          "section",
          {
            key: 1,
            class: "ocr-shell",
            onContextmenu: ft(Je, ["prevent"])
          },
          [
            y("header", ud, [
              y(
                "div",
                {
                  class: "ocr-titlebar",
                  "data-tauri-drag-region": "",
                  onMousedown: Ci
                },
                [
                  y("div", dd, [
                    y("div", gd, [
                      p(M(Yn), {
                        theme: "outline",
                        size: "18"
                      }),
                      y(
                        "span",
                        fd,
                        B(h.$t("pin.ocrResult")),
                        1
                        /* TEXT */
                      )
                    ]),
                    y("div", md, [
                      y(
                        "span",
                        pd,
                        B(v.value),
                        1
                        /* TEXT */
                      ),
                      x[5] || (x[5] = y(
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
                        wd,
                        B(bt.value),
                        1
                        /* TEXT */
                      )
                    ])
                  ]),
                  y("div", yd, [
                    y("div", {
                      class: nt(["ocr-engine-status", `is-${d.value}`]),
                      title: Pt.value
                    }, [
                      c.value ? (z(), vt(M(Fi), {
                        key: 0,
                        class: "ocr-loading-icon",
                        size: "14",
                        theme: "outline"
                      })) : (z(), vt(M(En), {
                        key: 1,
                        size: "14",
                        theme: "outline"
                      })),
                      y(
                        "span",
                        null,
                        B(zt.value),
                        1
                        /* TEXT */
                      )
                    ], 10, vd),
                    y("div", xd, [
                      y("button", {
                        class: "ocr-window-btn",
                        title: ct.value ? h.$t("pin.togglePin") : h.$t("pin.pinWindow"),
                        onClick: ft(ki, ["stop"])
                      }, [
                        (z(), vt(ae(ct.value ? M(Un) : M(Vi)), {
                          size: "18",
                          theme: "outline"
                        }))
                      ], 8, kd),
                      x[6] || (x[6] = y(
                        "span",
                        { class: "ocr-window-divider" },
                        null,
                        -1
                        /* HOISTED */
                      )),
                      y("button", {
                        class: "ocr-window-btn",
                        title: h.$t("pin.minimize"),
                        onClick: ft(Mo, ["stop"])
                      }, [
                        p(M(Ps), {
                          size: "18",
                          theme: "outline"
                        })
                      ], 8, bd),
                      y("button", {
                        class: "ocr-window-btn",
                        title: h.$t("pin.maximize"),
                        onClick: ft(Co, ["stop"])
                      }, [
                        p(M(ol), {
                          size: "14",
                          theme: "outline",
                          strokeWidth: 5
                        })
                      ], 8, Sd),
                      y("button", {
                        class: "ocr-window-btn",
                        title: h.$t("pin.close"),
                        onClick: ft(Dn, ["stop"])
                      }, [
                        p(M(Vn), {
                          size: "14",
                          theme: "outline",
                          strokeWidth: 6
                        })
                      ], 8, Md)
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
                onMousedown: x[4] || (x[4] = ft(() => {
                }, ["stop"]))
              },
              [
                p(ed, {
                  class: "ocr-result-layout",
                  "default-size": "44%",
                  "min-size": "26%",
                  "max-size": "72%",
                  "second-collapsed": _.value
                }, {
                  first: Mt(() => [
                    y("section", Cd, [
                      y("header", _d, [
                        y("div", Td, [
                          y(
                            "strong",
                            null,
                            B(k.value),
                            1
                            /* TEXT */
                          ),
                          y(
                            "span",
                            null,
                            B(W.value),
                            1
                            /* TEXT */
                          )
                        ]),
                        y("div", zd, [
                          r.value.trim() ? (z(), O("div", {
                            key: 0,
                            class: "ocr-preview-switch",
                            role: "tablist",
                            "aria-label": h.$t("pin.previewMode")
                          }, [
                            y("button", {
                              type: "button",
                              role: "tab",
                              "aria-selected": m.value === "image",
                              class: nt({ active: m.value === "image" }),
                              onClick: x[0] || (x[0] = ft((L) => m.value = "image", ["stop"]))
                            }, B(h.$t("pin.imageView")), 11, Ld),
                            y("button", {
                              type: "button",
                              role: "tab",
                              "aria-selected": m.value === "text",
                              class: nt({ active: m.value === "text" }),
                              onClick: x[1] || (x[1] = ft((L) => m.value = "text", ["stop"]))
                            }, B(h.$t("pin.selectableTextView")), 11, Pd)
                          ], 8, Rd)) : j("v-if", !0),
                          _.value ? (z(), O("button", {
                            key: 1,
                            type: "button",
                            class: "ocr-panel-toggle",
                            title: h.$t("pin.showAiPanel"),
                            onClick: x[2] || (x[2] = ft((L) => _.value = !1, ["stop"]))
                          }, [
                            p(M(Gr), {
                              size: "14",
                              theme: "outline"
                            }),
                            y(
                              "span",
                              null,
                              B(h.$t("pin.showAiPanel")),
                              1
                              /* TEXT */
                            )
                          ], 8, Ad)) : j("v-if", !0)
                        ])
                      ]),
                      y(
                        "div",
                        {
                          class: nt(["ocr-preview-canvas", { "is-text-view": m.value === "text" }])
                        },
                        [
                          m.value === "image" || !r.value.trim() ? (z(), O("div", Dd, [
                            y("img", {
                              src: o.value || s.value,
                              alt: h.$t("pin.ocrSourceAlt"),
                              onLoad: vi
                            }, null, 40, Id)
                          ])) : (z(), O("div", {
                            key: 1,
                            class: "ocr-native-text-preview",
                            tabindex: "0",
                            "aria-label": h.$t("pin.selectableTextView")
                          }, [
                            y("div", Ed, [
                              (z(!0), O(
                                Ht,
                                null,
                                Kt(l.value, (L) => (z(), vt(ae(ut(L.kind)), {
                                  key: `native-${L.id}`,
                                  class: nt(["ocr-native-block", `is-${L.kind}`])
                                }, {
                                  default: Mt(() => [
                                    us(
                                      B(L.text),
                                      1
                                      /* TEXT */
                                    )
                                  ]),
                                  _: 2
                                  /* DYNAMIC */
                                }, 1032, ["class"]))),
                                128
                                /* KEYED_FRAGMENT */
                              ))
                            ])
                          ], 8, Od))
                        ],
                        2
                        /* CLASS */
                      )
                    ])
                  ]),
                  second: Mt(() => [
                    y("section", $d, [
                      y("header", Wd, [
                        y("div", Bd, [
                          y(
                            "strong",
                            null,
                            B(h.$t("pin.aiRecognizedText")),
                            1
                            /* TEXT */
                          ),
                          r.value.trim() ? (z(), O(
                            "span",
                            Nd,
                            B(h.$t("pin.resultStats", {
                              sections: l.value.length,
                              characters: r.value.length
                            })),
                            1
                            /* TEXT */
                          )) : (z(), O(
                            "span",
                            Hd,
                            B(ht.value),
                            1
                            /* TEXT */
                          ))
                        ]),
                        y("div", jd, [
                          p(Qt, {
                            class: "ocr-inline-copy",
                            type: "text",
                            title: h.$t("pin.copyText"),
                            disabled: !r.value.trim(),
                            onClick: ft(Ln, ["stop"])
                          }, {
                            default: Mt(() => [
                              p(M(on), {
                                size: "15",
                                theme: "outline"
                              }),
                              y(
                                "span",
                                null,
                                B(h.$t("pin.copyAll")),
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
                            onClick: x[3] || (x[3] = ft((L) => _.value = !0, ["stop"]))
                          }, [
                            p(M(il), {
                              size: "14",
                              theme: "outline"
                            })
                          ], 8, Fd)
                        ])
                      ]),
                      c.value && !r.value.trim() ? (z(), O("div", Vd, [
                        y("div", Ud, [
                          p(M(En), {
                            size: "22",
                            theme: "outline"
                          })
                        ]),
                        y(
                          "strong",
                          null,
                          B(h.$t("pin.aiReadingImage")),
                          1
                          /* TEXT */
                        ),
                        y(
                          "span",
                          null,
                          B(h.$t("pin.aiReadingHint")),
                          1
                          /* TEXT */
                        )
                      ])) : u.value && !r.value.trim() ? (z(), O("div", Yd, [
                        y(
                          "strong",
                          null,
                          B(u.value),
                          1
                          /* TEXT */
                        ),
                        y(
                          "span",
                          null,
                          B(h.$t("pin.aiOcrRetryHint")),
                          1
                          /* TEXT */
                        )
                      ])) : r.value.trim() ? (z(), O("div", Xd, [
                        A.value ? (z(), O("section", Gd, [
                          y("div", Kd, [
                            y(
                              "span",
                              qd,
                              B(h.$t("pin.selectedText")),
                              1
                              /* TEXT */
                            ),
                            y(
                              "div",
                              Jd,
                              B(A.value.sourceText),
                              1
                              /* TEXT */
                            )
                          ]),
                          y("div", Qd, [
                            y(
                              "span",
                              tg,
                              B(J.value),
                              1
                              /* TEXT */
                            ),
                            y("div", {
                              class: "ocr-selection-translation-editor",
                              contenteditable: "plaintext-only",
                              spellcheck: "false",
                              textContent: B(A.value.translatedText),
                              onBlur: wo
                            }, null, 40, eg)
                          ])
                        ])) : j("v-if", !0),
                        (z(!0), O(
                          Ht,
                          null,
                          Kt(l.value, (L, st) => (z(), O(
                            "article",
                            {
                              key: L.id,
                              class: nt(["ocr-record-item", [`is-${L.kind}`, { selected: L.selected }]])
                            },
                            [
                              y("header", ng, [
                                y("button", {
                                  type: "button",
                                  class: nt(["ocr-record-select", { selected: L.selected }]),
                                  "aria-pressed": L.selected,
                                  title: h.$t("pin.selectSection"),
                                  onClick: ft((K) => po(L.id), ["stop"])
                                }, [
                                  L.selected ? (z(), vt(M(dn), {
                                    key: 0,
                                    size: "11",
                                    theme: "outline"
                                  })) : (z(), O(
                                    "span",
                                    sg,
                                    B(st + 1),
                                    1
                                    /* TEXT */
                                  ))
                                ], 10, ig),
                                y(
                                  "span",
                                  og,
                                  B(q(L.kind)),
                                  1
                                  /* TEXT */
                                ),
                                L.confidence > 0 ? (z(), O(
                                  "span",
                                  ag,
                                  B(Math.round(L.confidence)) + "% ",
                                  1
                                  /* TEXT */
                                )) : j("v-if", !0)
                              ]),
                              y("div", {
                                class: "ocr-record-text",
                                textContent: B(L.text)
                              }, null, 8, rg),
                              L.translatedText ? (z(), O("div", lg, [
                                y(
                                  "span",
                                  cg,
                                  B(J.value),
                                  1
                                  /* TEXT */
                                ),
                                y("div", {
                                  class: "ocr-record-text translated",
                                  textContent: B(L.translatedText)
                                }, null, 8, hg)
                              ])) : j("v-if", !0)
                            ],
                            2
                            /* CLASS */
                          ))),
                          128
                          /* KEYED_FRAGMENT */
                        ))
                      ])) : (z(), O(
                        "div",
                        Zd,
                        B(h.$t("pin.noTextRecognized")),
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
            y("footer", ug, [
              p(Qt, {
                class: "ocr-action-btn primary",
                type: "text",
                title: h.$t("pin.copyText"),
                disabled: !r.value.trim(),
                onClick: ft(Ln, ["stop"])
              }, {
                default: Mt(() => [
                  p(M(on), {
                    size: "18",
                    theme: "outline",
                    strokeWidth: 2.5
                  }),
                  y(
                    "span",
                    null,
                    B(dt.value > 0 ? `${h.$t("pin.copyText")} (${dt.value})` : h.$t("pin.copyText")),
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
                  ref: Z,
                  class: "translate-btn-group relative"
                },
                [
                  p(Qt, {
                    class: "ocr-action-btn translate-main",
                    type: "text",
                    title: h.$t("pin.translate"),
                    disabled: !r.value.trim() || H.value,
                    onClick: ft(ko, ["stop"])
                  }, {
                    default: Mt(() => [
                      H.value ? (z(), vt(M(Fi), {
                        key: 1,
                        class: "ocr-loading-icon",
                        size: "18",
                        theme: "outline",
                        strokeWidth: 2.5
                      })) : (z(), vt(M(As), {
                        key: 0,
                        size: "18",
                        theme: "outline",
                        strokeWidth: 2.5
                      })),
                      y(
                        "span",
                        null,
                        B(h.$t("pin.translate")),
                        1
                        /* TEXT */
                      )
                    ]),
                    _: 1
                    /* STABLE */
                  }, 8, ["title", "disabled"]),
                  p(Qt, {
                    class: "ocr-action-btn translate-arrow",
                    type: "text",
                    disabled: !r.value.trim() || H.value,
                    onClick: ft(yo, ["stop"])
                  }, {
                    default: Mt(() => [
                      p(M(ji), {
                        size: "14",
                        theme: "outline",
                        strokeWidth: 2.7
                      })
                    ]),
                    _: 1
                    /* STABLE */
                  }, 8, ["disabled"]),
                  j(" 翻译引擎菜单 "),
                  V.value ? (z(), O(
                    "div",
                    {
                      key: 0,
                      class: "translate-menu ocr-floating-menu",
                      style: gt(U.value)
                    },
                    [
                      (z(!0), O(
                        Ht,
                        null,
                        Kt(ot.value, (L) => (z(), O("div", {
                          key: L.value,
                          class: nt(["menu-item", { active: F.value === L.value }]),
                          onClick: (st) => vo(L.value)
                        }, [
                          y(
                            "span",
                            gg,
                            B(L.label),
                            1
                            /* TEXT */
                          ),
                          F.value === L.value ? (z(), vt(ae(M(dn)), {
                            key: 0,
                            class: "menu-item-icon",
                            size: "16"
                          })) : j("v-if", !0)
                        ], 10, dg))),
                        128
                        /* KEYED_FRAGMENT */
                      ))
                    ],
                    4
                    /* STYLE */
                  )) : j("v-if", !0)
                ],
                512
                /* NEED_PATCH */
              ),
              y(
                "div",
                {
                  ref_key: "ocrLanguageMenuAnchorRef",
                  ref: G,
                  class: "ocr-engine-btn-group relative"
                },
                [
                  p(Qt, {
                    class: "ocr-action-btn ocr-engine-main",
                    type: "text",
                    title: h.$t("pin.ocrLanguage"),
                    disabled: c.value,
                    onClick: ft(yi, ["stop"])
                  }, {
                    default: Mt(() => [
                      p(M(Yn), {
                        size: "18",
                        theme: "outline",
                        strokeWidth: 2.5
                      }),
                      y(
                        "span",
                        null,
                        B(Y.value),
                        1
                        /* TEXT */
                      )
                    ]),
                    _: 1
                    /* STABLE */
                  }, 8, ["title", "disabled"]),
                  p(Qt, {
                    class: "ocr-action-btn ocr-engine-arrow",
                    type: "text",
                    disabled: c.value,
                    onClick: ft(yi, ["stop"])
                  }, {
                    default: Mt(() => [
                      p(M(ji), {
                        size: "14",
                        theme: "outline",
                        strokeWidth: 3
                      })
                    ]),
                    _: 1
                    /* STABLE */
                  }, 8, ["disabled"]),
                  X.value ? (z(), O(
                    "div",
                    {
                      key: 0,
                      class: "ocr-engine-menu ocr-floating-menu",
                      style: gt(Q.value)
                    },
                    [
                      (z(!0), O(
                        Ht,
                        null,
                        Kt(wt.value, (L) => (z(), O("div", {
                          key: L.value,
                          class: nt(["menu-item", { active: tt.value === L.value }]),
                          onClick: (st) => xo(L.value)
                        }, [
                          y(
                            "span",
                            mg,
                            B(L.label),
                            1
                            /* TEXT */
                          ),
                          tt.value === L.value ? (z(), vt(ae(M(dn)), {
                            key: 0,
                            class: "menu-item-icon",
                            size: "16"
                          })) : j("v-if", !0)
                        ], 10, fg))),
                        128
                        /* KEYED_FRAGMENT */
                      ))
                    ],
                    4
                    /* STYLE */
                  )) : j("v-if", !0)
                ],
                512
                /* NEED_PATCH */
              ),
              y("div", pg, [
                p(Qt, {
                  class: "ocr-action-btn ocr-engine-main",
                  type: "text",
                  title: h.$t("pin.recognizeAgain"),
                  disabled: c.value || !s.value,
                  onClick: ft(Rn, ["stop"])
                }, {
                  default: Mt(() => [
                    p(M(En), {
                      size: "17",
                      theme: "outline",
                      strokeWidth: 2.5
                    }),
                    y(
                      "span",
                      null,
                      B(h.$t("pin.aiRecognizeAgain")),
                      1
                      /* TEXT */
                    )
                  ]),
                  _: 1
                  /* STABLE */
                }, 8, ["title", "disabled"])
              ]),
              p(Qt, {
                class: "ocr-action-btn",
                type: "text",
                title: h.$t("pin.saveAsText"),
                disabled: !r.value.trim(),
                onClick: ft(fo, ["stop"])
              }, {
                default: Mt(() => [
                  p(M(Yi), {
                    size: "18",
                    theme: "outline",
                    strokeWidth: 2.5
                  }),
                  y(
                    "span",
                    null,
                    B(h.$t("pin.saveAsText")),
                    1
                    /* TEXT */
                  )
                ]),
                _: 1
                /* STABLE */
              }, 8, ["title", "disabled"]),
              x[7] || (x[7] = y(
                "span",
                { class: "ocr-action-divider" },
                null,
                -1
                /* HOISTED */
              )),
              p(Qt, {
                class: "ocr-action-btn more",
                type: "text",
                title: h.$t("pin.more"),
                onClick: ft(So, ["stop"])
              }, {
                default: Mt(() => [
                  p(M(qr), {
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
        )) : j("v-if", !0),
        pt.value ? (z(), O(
          "div",
          wg,
          B(Math.round(rt.value * 100)) + "% ",
          1
          /* TEXT */
        )) : j("v-if", !0),
        j(" 右键菜单 "),
        N.value ? (z(), O(
          "div",
          {
            key: 3,
            class: "context-menu",
            style: gt(ce.value)
          },
          [
            y("div", {
              class: "menu-item",
              onClick: ki
            }, [
              (z(), vt(ae(ct.value ? M(Vi) : M(Un)), {
                class: "menu-item-icon",
                size: "18",
                strokeWidth: 3
              })),
              y(
                "span",
                null,
                B(ct.value ? h.$t("pin.togglePin") : h.$t("pin.pinWindow")),
                1
                /* TEXT */
              )
            ]),
            y("div", {
              class: "menu-item",
              onClick: Si
            }, [
              p(M(el), {
                class: "menu-item-icon",
                size: "18",
                theme: "outline",
                strokeWidth: 3
              }),
              y(
                "span",
                null,
                B(h.$t("pin.resetZoom")),
                1
                /* TEXT */
              )
            ]),
            y("div", {
              class: "menu-item",
              onClick: To
            }, [
              p(M(on), {
                class: "menu-item-icon",
                size: "18",
                theme: "outline",
                strokeWidth: 3
              }),
              y(
                "span",
                null,
                B(h.$t("pin.copyImage")),
                1
                /* TEXT */
              )
            ]),
            y("div", {
              class: "menu-item",
              onClick: zo
            }, [
              p(M(Yi), {
                class: "menu-item-icon",
                size: "18",
                theme: "outline",
                strokeWidth: 3
              }),
              y(
                "span",
                null,
                B(h.$t("pin.saveImage")),
                1
                /* TEXT */
              )
            ]),
            a.value === "ocr" && r.value.trim() ? (z(), O("div", {
              key: 0,
              class: "menu-item",
              onClick: Ln
            }, [
              p(M(on), {
                class: "menu-item-icon",
                size: "18",
                theme: "outline",
                strokeWidth: 3
              }),
              y(
                "span",
                null,
                B(h.$t("pin.copyText")),
                1
                /* TEXT */
              )
            ])) : j("v-if", !0),
            x[8] || (x[8] = y(
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
              p(M(Vn), {
                class: "menu-item-icon",
                size: "18",
                theme: "outline",
                strokeWidth: 3
              }),
              y(
                "span",
                null,
                B(h.$t("pin.closePin")),
                1
                /* TEXT */
              )
            ])
          ],
          4
          /* STYLE */
        )) : j("v-if", !0)
      ],
      34
      /* CLASS, NEED_HYDRATION */
    ));
  }
}), vg = /* @__PURE__ */ qe(yg, [["__scopeId", "data-v-74349f0a"]]), xg = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: vg
}, Symbol.toStringTag, { value: "Module" }));
async function kg(n) {
  return n.toDataURL("image/png");
}
function bg(n) {
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
async function Sg(n) {
  const t = Date.now(), e = await kg(n);
  Rt.log("[RapidOCR] recognizeFromCanvas start", {
    width: n.width,
    height: n.height
  });
  try {
    const i = await b("recognize_text_from_image", {
      imageData: e,
      engine: "rapidocr",
      language: "auto"
    }), s = bg(i.blocks), o = typeof i.full_text == "string" && i.full_text || typeof i.text == "string" && i.text || s.map((r) => r.text).join(`
`), a = {
      blocks: s,
      full_text: o,
      text: o,
      language: typeof i.language == "string" && i.language || Ms(o),
      confidence: Number(i.confidence || 0),
      engine: typeof i.engine == "string" ? i.engine : "rapidocr"
    };
    return Rt.log("[RapidOCR] recognizeFromCanvas success", {
      durationMs: Date.now() - t,
      confidence: a.confidence,
      blocks: a.blocks.length,
      textLength: a.full_text.trim().length,
      textPreview: a.full_text.trim().slice(0, 300)
    }), a;
  } catch (i) {
    throw D.error("[OCR] RapidOCR recognizeFromCanvas failed", i), Rt.log("[RapidOCR] recognizeFromCanvas failed", {
      durationMs: Date.now() - t,
      error: i instanceof Error ? `${i.name}: ${i.message}` : String(i)
    }), i;
  }
}
async function Mg() {
  return Promise.resolve();
}
async function Cg() {
  return Promise.resolve();
}
const _g = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  recognizeFromCanvas: Sg,
  terminateOcr: Cg,
  warmupOcr: Mg
}, Symbol.toStringTag, { value: "Module" }));
export {
  Lg as activate
};
