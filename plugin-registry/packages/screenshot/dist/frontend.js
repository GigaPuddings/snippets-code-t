var zo = Object.defineProperty;
var Ro = (n, t, e) => t in n ? zo(n, t, { enumerable: !0, configurable: !0, writable: !0, value: e }) : n[t] = e;
var R = (n, t, e) => Ro(n, typeof t != "symbol" ? t + "" : t, e);
import { inject as fe, createVNode as m, defineComponent as _t, ref as W, computed as E, watch as Xe, nextTick as me, createElementBlock as O, openBlock as L, createCommentVNode as V, createElementVNode as y, Fragment as Nt, renderList as Kt, normalizeClass as et, createBlock as xt, resolveDynamicComponent as ae, unref as M, toDisplayString as H, normalizeStyle as ut, onMounted as Ge, onUnmounted as qn, withDirectives as Fe, withKeys as Ti, vModelText as Lo, getCurrentInstance as ze, readonly as Po, getCurrentScope as Ao, onScopeDispose as Do, isRef as Io, warn as Oo, provide as Eo, mergeProps as $o, renderSlot as te, Transition as Jn, withCtx as Ct, createTextVNode as hs, vShow as mn, shallowReactive as Wo, withModifiers as wt, isVNode as Ve, render as pn } from "vue";
import { useI18n as us } from "vue-i18n";
const Cg = (n) => {
  n.registerRoute({
    target: "window",
    path: "/screenshot",
    name: "Screenshot",
    component: () => Promise.resolve().then(() => lc)
  }), n.registerRoute({
    target: "window",
    path: "/pin",
    name: "Pin",
    component: () => Promise.resolve().then(() => mg)
  });
};
function Bo(n, t, e, i) {
  if (typeof t == "function" ? n !== t || !0 : !t.has(n)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
  return e === "m" ? i : e === "a" ? i.call(n) : i ? i.value : t.get(n);
}
function No(n, t, e, i, s) {
  if (typeof t == "function" ? n !== t || !0 : !t.has(n)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
  return t.set(n, e), e;
}
var ln;
const Ht = "__TAURI_TO_IPC_KEY__";
function Ho(n, t = !1) {
  return window.__TAURI_INTERNALS__.transformCallback(n, t);
}
async function b(n, t = {}, e) {
  return window.__TAURI_INTERNALS__.invoke(n, t, e);
}
function jo(n, t = "asset") {
  return window.__TAURI_INTERNALS__.convertFileSrc(n, t);
}
class Fo {
  get rid() {
    return Bo(this, ln, "f");
  }
  constructor(t) {
    ln.set(this, void 0), No(this, ln, t);
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
  [Ht]() {
    return {
      width: this.width,
      height: this.height
    };
  }
  toJSON() {
    return this[Ht]();
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
  [Ht]() {
    return {
      width: this.width,
      height: this.height
    };
  }
  toJSON() {
    return this[Ht]();
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
  [Ht]() {
    return {
      [`${this.size.type}`]: {
        width: this.size.width,
        height: this.size.height
      }
    };
  }
  toJSON() {
    return this[Ht]();
  }
}
class ds {
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
  [Ht]() {
    return {
      x: this.x,
      y: this.y
    };
  }
  toJSON() {
    return this[Ht]();
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
    return new ds(this.x / t, this.y / t);
  }
  [Ht]() {
    return {
      x: this.x,
      y: this.y
    };
  }
  toJSON() {
    return this[Ht]();
  }
}
class Qe {
  constructor(t) {
    this.position = t;
  }
  toLogical(t) {
    return this.position instanceof ds ? this.position : this.position.toLogical(t);
  }
  toPhysical(t) {
    return this.position instanceof se ? this.position : this.position.toPhysical(t);
  }
  [Ht]() {
    return {
      [`${this.position.type}`]: {
        x: this.position.x,
        y: this.position.y
      }
    };
  }
  toJSON() {
    return this[Ht]();
  }
}
var Wt;
(function(n) {
  n.WINDOW_RESIZED = "tauri://resize", n.WINDOW_MOVED = "tauri://move", n.WINDOW_CLOSE_REQUESTED = "tauri://close-requested", n.WINDOW_DESTROYED = "tauri://destroyed", n.WINDOW_FOCUS = "tauri://focus", n.WINDOW_BLUR = "tauri://blur", n.WINDOW_SCALE_FACTOR_CHANGED = "tauri://scale-change", n.WINDOW_THEME_CHANGED = "tauri://theme-changed", n.WINDOW_CREATED = "tauri://window-created", n.WEBVIEW_CREATED = "tauri://webview-created", n.DRAG_ENTER = "tauri://drag-enter", n.DRAG_OVER = "tauri://drag-over", n.DRAG_DROP = "tauri://drag-drop", n.DRAG_LEAVE = "tauri://drag-leave";
})(Wt || (Wt = {}));
async function gs(n, t) {
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
    handler: Ho(t)
  }).then((o) => async () => gs(n, o));
}
async function Vo(n, t, e) {
  return wn(n, (i) => {
    gs(n, i.id), t(i);
  }, e);
}
async function Uo(n, t) {
  await b("plugin:event|emit", {
    event: n,
    payload: t
  });
}
async function Yo(n, t, e) {
  await b("plugin:event|emit_to", {
    target: typeof n == "string" ? { kind: "AnyLabel", label: n } : n,
    event: t,
    payload: e
  });
}
let Zo = class cn extends Fo {
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
  return n == null ? null : typeof n == "string" ? n : n instanceof Zo ? n.rid : n;
}
var $n;
(function(n) {
  n[n.Critical = 1] = "Critical", n[n.Informational = 2] = "Informational";
})($n || ($n = {}));
class Xo {
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
var zi;
(function(n) {
  n.None = "none", n.Normal = "normal", n.Indeterminate = "indeterminate", n.Paused = "paused", n.Error = "error";
})(zi || (zi = {}));
function Go() {
  return new Ke(window.__TAURI_INTERNALS__.metadata.currentWindow.label, {
    // @ts-expect-error `skip` is not defined in the public API but it is handled by the constructor
    skip: !0
  });
}
async function Dn() {
  return b("plugin:window|get_all_windows").then((n) => n.map((t) => new Ke(t, {
    // @ts-expect-error `skip` is not defined in the public API but it is handled by the constructor
    skip: !0
  })));
}
const In = ["tauri://created", "tauri://error"];
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
    return (e = (await Dn()).find((i) => i.label === t)) !== null && e !== void 0 ? e : null;
  }
  /**
   * Get an instance of `Window` for the current window.
   */
  static getCurrent() {
    return Go();
  }
  /**
   * Gets a list of instances of `Window` for all available windows.
   */
  static async getAll() {
    return Dn();
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
    for (const t of await Dn())
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
    } : Vo(t, e, {
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
    if (In.includes(t)) {
      for (const i of this.listeners[t] || [])
        i({
          event: t,
          id: -1,
          payload: e
        });
      return;
    }
    return Uo(t, e);
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
    if (In.includes(e)) {
      for (const s of this.listeners[e] || [])
        s({
          event: e,
          id: -1,
          payload: i
        });
      return;
    }
    return Yo(t, e, i);
  }
  /** @ignore */
  _handleTauriEvent(t, e) {
    return In.includes(t) ? (t in this.listeners ? this.listeners[t].push(e) : this.listeners[t] = [e], !0) : !1;
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
    return t && (t === $n.Critical ? e = { type: "Critical" } : e = { type: "Informational" }), b("plugin:window|request_user_attention", {
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
      const i = new Xo(e);
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
var Ri;
(function(n) {
  n.Disabled = "disabled", n.Throttle = "throttle", n.Suspend = "suspend";
})(Ri || (Ri = {}));
var Li;
(function(n) {
  n.AppearanceBased = "appearanceBased", n.Light = "light", n.Dark = "dark", n.MediumLight = "mediumLight", n.UltraDark = "ultraDark", n.Titlebar = "titlebar", n.Selection = "selection", n.Menu = "menu", n.Popover = "popover", n.Sidebar = "sidebar", n.HeaderView = "headerView", n.Sheet = "sheet", n.WindowBackground = "windowBackground", n.HudWindow = "hudWindow", n.FullScreenUI = "fullScreenUI", n.Tooltip = "tooltip", n.ContentBackground = "contentBackground", n.UnderWindowBackground = "underWindowBackground", n.UnderPageBackground = "underPageBackground", n.Mica = "mica", n.Blur = "blur", n.Acrylic = "acrylic", n.Tabbed = "tabbed", n.TabbedDark = "tabbedDark", n.TabbedLight = "tabbedLight";
})(Li || (Li = {}));
var Pi;
(function(n) {
  n.FollowsWindowActiveState = "followsWindowActiveState", n.Active = "active", n.Inactive = "inactive";
})(Pi || (Pi = {}));
var T = /* @__PURE__ */ ((n) => (n.None = "none", n.Drawing = "drawing", n.Moving = "moving", n.ResizingNW = "resizing-nw", n.ResizingNE = "resizing-ne", n.ResizingSW = "resizing-sw", n.ResizingSE = "resizing-se", n.ResizingN = "resizing-n", n.ResizingS = "resizing-s", n.ResizingW = "resizing-w", n.ResizingE = "resizing-e", n.DrawingRect = "drawing-rect", n.DrawingEllipse = "drawing-ellipse", n.DrawingLine = "drawing-line", n.DrawingArrow = "drawing-arrow", n.DrawingPen = "drawing-pen", n.EditingAnnotation = "editing-annotation", n.MovingAnnotation = "moving-annotation", n.ResizingAnnotationNW = "resizing-annotation-nw", n.ResizingAnnotationSE = "resizing-annotation-se", n.DrawingText = "drawing-text", n.DrawingMarker = "drawing-marker", n.DrawingMosaic = "drawing-mosaic", n.ColorPicking = "color-picking", n.Pinning = "pinning", n))(T || {}), f = /* @__PURE__ */ ((n) => (n.Select = "select", n.Rectangle = "rectangle", n.Ellipse = "ellipse", n.Line = "line", n.Arrow = "arrow", n.Pen = "pen", n.Mosaic = "mosaic", n.Text = "text", n.Marker = "marker", n.ColorPicker = "color-picker", n.Ocr = "ocr", n.Pin = "pin", n.Translate = "translate", n))(f || {});
function Wn(n, t, e) {
  return !Number.isFinite(n) || n <= 0 ? 0 : Math.min(n, Math.max(0, t) / 2, Math.max(0, e) / 2);
}
function Ko(n, t, e, i) {
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
function bt(n, t) {
  const e = t.x - n.x, i = t.y - n.y;
  return Math.sqrt(e * e + i * i);
}
function Ai(n, t) {
  return n.x >= t.x && n.x <= t.x + t.width && n.y >= t.y && n.y <= t.y + t.height;
}
function fs(n) {
  return {
    x: n.x + n.width / 2,
    y: n.y + n.height / 2
  };
}
function qo(n, t) {
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
class Jo {
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
    if (!Me(t)) {
      console.warn("Invalid selection rect in drawMask:", t);
      return;
    }
    this.ctx.save();
    const i = this.canvas.width / (window.devicePixelRatio || 1), s = this.canvas.height / (window.devicePixelRatio || 1), o = Math.round(t.x), a = Math.round(t.y), r = Math.round(t.width), l = Math.round(t.height), c = Wn(e, r, l);
    this.ctx.fillStyle = "rgba(0, 0, 0, 0.5)", this.ctx.beginPath(), this.ctx.rect(0, 0, i, s), this.ctx.roundRect(o, a, r, l, c), this.ctx.fill("evenodd"), this.ctx.restore();
  }
  // 绘制选择框
  drawSelectionBox(t, e = !0, i = 0) {
    const { x: s, y: o, width: a, height: r } = t;
    this.ctx.save();
    const l = Math.round(s) + 0.5, c = Math.round(o) + 0.5, u = Math.max(0, Math.round(a) - 1), d = Math.max(0, Math.round(r) - 1), w = Wn(i, u, d);
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
    const { x: e, y: i, width: s, height: o } = t, a = fs(t);
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
    const S = 108, g = w + (c - S) / 2, p = v + 16;
    this.ctx.fillStyle = "#f3f4f6", this.ctx.fillRect(g, p, S, S), this.ctx.strokeStyle = "rgba(0, 0, 0, 0.26)", this.ctx.lineWidth = 1, this.ctx.strokeRect(g, p, S, S);
    const z = a ? a.width : r, A = S / z;
    a && (this.ctx.imageSmoothingEnabled = !1, this.ctx.drawImage(
      a,
      0,
      0,
      a.width,
      a.height,
      g,
      p,
      S,
      S
    ), this.ctx.imageSmoothingEnabled = !0), this.ctx.beginPath(), this.ctx.strokeStyle = "rgba(255, 255, 255, 0.5)", this.ctx.lineWidth = 1;
    for (let j = 1; j < z; j++) {
      const q = g + j * A;
      this.ctx.moveTo(q, p), this.ctx.lineTo(q, p + S);
      const X = p + j * A;
      this.ctx.moveTo(g, X), this.ctx.lineTo(g + S, X);
    }
    this.ctx.stroke(), this.ctx.beginPath(), this.ctx.strokeStyle = "rgba(0, 0, 0, 0.22)";
    for (let j = 1; j < z; j++) {
      const q = g + j * A + 0.5;
      this.ctx.moveTo(q, p), this.ctx.lineTo(q, p + S);
      const X = p + j * A + 0.5;
      this.ctx.moveTo(g, X), this.ctx.lineTo(g + S, X);
    }
    this.ctx.stroke();
    const C = Math.floor(z / 2), B = g + C * A, Y = p + C * A;
    this.ctx.fillStyle = "rgba(255, 255, 255, 0.18)", this.ctx.fillRect(B, Y, A, A), this.ctx.setLineDash([]), this.ctx.strokeStyle = "rgba(255, 255, 255, 0.96)", this.ctx.lineWidth = 4, this.ctx.strokeRect(
      B - 1,
      Y - 1,
      A + 2,
      A + 2
    ), this.ctx.strokeStyle = "rgba(0, 0, 0, 0.9)", this.ctx.lineWidth = 2, this.ctx.strokeRect(
      B,
      Y,
      A,
      A
    ), this.ctx.fillStyle = "#333", this.ctx.font = '12px "SF Mono", "Consolas", "Monaco", monospace';
    let Z = p + S + 22;
    if (s) {
      this.ctx.fillStyle = s.hex, this.ctx.fillRect(w + 16, Z - 14, 20, 20), this.ctx.strokeStyle = "rgba(0, 0, 0, 0.22)", this.ctx.strokeRect(w + 16, Z - 14, 20, 20), this.ctx.fillStyle = "#111827", this.ctx.font = '12px "SF Mono", "Consolas", "Monaco", monospace';
      const j = o === "hex" ? s.hex : `${s.rgb.r}, ${s.rgb.g}, ${s.rgb.b}`;
      this.ctx.fillText(j, w + 44, Z), Z += 19;
    }
    this.ctx.fillStyle = "#6b7280", this.ctx.font = "12px Arial", this.ctx.fillText(`X: ${Math.round(i.x)}, Y: ${Math.round(i.y)}`, w + 16, Z), Z += 17, this.ctx.font = "12px Arial";
    const N = l ? "已复制!" : "Q:复制 Shift:切换";
    this.ctx.fillStyle = l ? "#059669" : "#8b8f98", this.ctx.fillText(N, w + 16, Z), this.ctx.restore();
  }
}
class Qo {
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
    return qo(t, e);
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
    return bt(t, e);
  }
  // 检查点是否在矩形内（使用工具函数）
  isPointInRect(t, e, i = 0) {
    if (!Xt(t) || !Me(e))
      return !1;
    if (i === 0)
      return Ai(t, e);
    const s = {
      x: e.x - i,
      y: e.y - i,
      width: e.width + i * 2,
      height: e.height + i * 2
    };
    return Ai(t, s);
  }
  // 检查点是否在线段附近
  isPointNearLine(t, e, i, s = 8) {
    if (!Xt(t) || !Xt(e) || !Xt(i))
      return !1;
    const o = t.x - e.x, a = t.y - e.y, r = i.x - e.x, l = i.y - e.y, c = o * r + a * l, u = r * r + l * l;
    if (u === 0)
      return bt(t, e) <= s;
    const d = c / u;
    let w;
    return d < 0 ? w = e : d > 1 ? w = i : w = {
      x: e.x + d * r,
      y: e.y + d * l
    }, bt(t, w) <= s;
  }
}
class ta {
  constructor(t, e) {
    R(this, "coordinateSystem");
    R(this, "canvas");
    R(this, "isDrawing", !1);
    R(this, "currentOperation", T.None);
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
    const c = fs(e);
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
      const s = i.points[0], o = i.points[i.points.length - 1], a = 8, r = 6, l = bt(t, s), c = bt(t, o);
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
class ea extends le {
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
      if (bt(t, s) <= e)
        return i;
    }
    return null;
  }
  // 更新控制点
  updateControlPoint(t, e) {
    t >= 0 && t < this.data.points.length && (this.data.points[t] = e);
  }
}
class na extends le {
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
class ia extends le {
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
      return bt(t, e) <= s;
    const l = Math.max(0, Math.min(1, ((t.x - e.x) * o + (t.y - e.y) * a) / r)), c = {
      x: e.x + l * o,
      y: e.y + l * a
    };
    return bt(t, c) <= s;
  }
}
class sa extends le {
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
      return bt(t, e) <= s;
    const d = c / u;
    let w;
    return d < 0 ? w = e : d > 1 ? w = i : w = {
      x: e.x + d * r,
      y: e.y + d * l
    }, bt(t, w) <= s;
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
      if (bt(t, s) <= e)
        return i;
    }
    return null;
  }
  // 更新控制点
  updateControlPoint(t, e) {
    t >= 0 && t < this.data.points.length && (this.data.points[t] = e);
  }
}
class oa extends le {
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
      const e = this.data.points[this.data.points.length - 1], i = bt(t, e);
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
      return this.data.points.length === 1 ? bt(t, this.data.points[0]) <= e : !1;
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
      return bt(t, e) <= s;
    const d = c / u;
    let w;
    return d < 0 ? w = e : d > 1 ? w = i : w = {
      x: e.x + d * r,
      y: e.y + d * l
    }, bt(t, w) <= s;
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
const Jt = "sans-serif", Ce = (n) => ({
  x: n.x + 4,
  y: n.y - 8
});
class aa extends le {
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
    t.save(), this.applyOpacity(t), t.font = `${o}px ${Jt}`, t.fillStyle = this.data.style.color, t.textAlign = "left", t.textBaseline = "top";
    const r = Ce(a), l = r.x * e - i.x, c = r.y * e - i.y;
    t.fillText(this.data.text, l, c), t.restore();
  }
  hitTest(t, e = 8) {
    if (!this.data.text || this.data.points.length === 0) return !1;
    const i = this.data.points[0], s = this.data.fontSize || 16, a = document.createElement("canvas").getContext("2d");
    if (!a) return !1;
    a.font = `${s}px ${Jt}`;
    const l = a.measureText(this.data.text).width, { x: c, y: u } = Ce(i);
    return t.x >= c - e && t.x <= c + l + e && t.y >= u - e && t.y <= u + s + e;
  }
  getBounds() {
    if (!this.data.text || this.data.points.length === 0) return null;
    const t = this.data.points[0], e = this.data.fontSize || 16, s = document.createElement("canvas").getContext("2d");
    if (!s) return null;
    s.font = `${e}px ${Jt}`;
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
    e.save(), e.font = `${a}px ${Jt}`;
    const d = e.measureText(this.data.text).width;
    e.setLineDash([2, 2]), e.strokeStyle = "#3b82f6", e.lineWidth = 1, e.strokeRect(l, c, d, a), e.restore();
  }
  drawHover(t) {
    if (!this.data.text || this.data.points.length === 0) return;
    const { ctx: e, scale: i, offset: s } = t, o = this.data.points[0], a = (this.data.fontSize || 16) * i, r = Ce(o), l = r.x * i - s.x, c = r.y * i - s.y;
    e.save(), e.font = `${a}px ${Jt}`;
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
      const e = this.data.points[this.data.points.length - 1], i = bt(t, e);
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
    const w = u, v = Math.floor(d.x - w), S = Math.floor(d.y - w), g = Math.ceil(d.width + w * 2), p = Math.ceil(d.height + w * 2);
    if (g <= 0 || p <= 0) return;
    const z = Math.floor(v * r - i.x), A = Math.floor(S * r - i.y), C = Math.ceil(g * r), B = Math.ceil(p * r), Y = t.canvas.width, Z = t.canvas.height, N = Math.max(0, z), j = Math.max(0, A), q = Math.min(C, Y - N), X = Math.min(B, Z - j);
    if (q <= 0 || X <= 0) return;
    let G;
    try {
      t.save(), t.setTransform(1, 0, 0, 1, 0, 0), G = t.getImageData(N, j, q, X), t.restore();
    } catch {
      return;
    }
    const ot = G.data, it = N % c, kt = j % c;
    for (let at = -kt; at < X; at += c)
      for (let U = -it; U < q; U += c) {
        const Q = Math.max(0, U), rt = Math.max(0, at), ft = Math.min(q, U + c), lt = Math.min(X, at + c);
        if (Q >= ft || rt >= lt) continue;
        let dt = 0, I = 0, yt = 0, F = 0;
        for (let mt = rt; mt < lt; mt++)
          for (let vt = Q; vt < ft; vt++) {
            const Rt = (mt * q + vt) * 4;
            dt += ot[Rt], I += ot[Rt + 1], yt += ot[Rt + 2], F++;
          }
        if (F > 0) {
          dt = Math.round(dt / F / 8) * 8, I = Math.round(I / F / 8) * 8, yt = Math.round(yt / F / 8) * 8;
          for (let vt = rt; vt < lt; vt++)
            for (let Rt = Q; Rt < ft; Rt++) {
              const Dt = (vt * q + Rt) * 4;
              ot[Dt] = dt, ot[Dt + 1] = I, ot[Dt + 2] = yt;
            }
        }
      }
    o.width = q, o.height = X, a.putImageData(G, 0, 0), a.globalCompositeOperation = "destination-in", a.lineCap = "round", a.lineJoin = "round", a.lineWidth = u * r, a.fillStyle = "#000000", a.strokeStyle = "#000000", this.drawPathPhysical(a, r, i, N, j), t.save(), this.applyOpacity(t), t.setTransform(1, 0, 0, 1, 0, 0), s && (t.beginPath(), t.rect(
      s.x * r - i.x,
      s.y * r - i.y,
      s.width * r,
      s.height * r
    ), t.clip()), t.drawImage(o, N, j), t.restore();
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
      return bt(t, this.data.points[0]) <= (this.data.mosaicSize || 8) * 1.5 + e;
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
R(Gt, "helperCanvas", null), R(Gt, "helperCtx", null);
let Bn = Gt;
const oe = 16, hn = (n = oe) => Math.max(12, Math.round(n * 0.75)), Nn = (n, t = oe) => {
  const e = hn(t);
  return {
    x: n.x + e + 12,
    y: n.y - t / 2
  };
};
class ra extends le {
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
      const u = Nn(
        s,
        this.data.fontSize || oe
      ), d = u.x * e - i.x, w = u.y * e - i.y, v = w + o + 3 * e;
      t.font = `${o}px ${Jt}`, t.textAlign = "left", t.textBaseline = "top", t.fillStyle = this.data.style.color, t.fillText(c, d, w);
      const S = t.measureText(c).width;
      t.strokeStyle = this.data.style.color, t.lineWidth = Math.max(2, this.data.style.lineWidth * e * 0.75), t.beginPath(), t.moveTo(r + a * 0.72, l + a * 0.72), t.lineTo(d - 5 * e, v), t.lineTo(d + S + 3 * e, v), t.stroke();
    }
    t.restore();
  }
  drawMarkerFace(t, e, i, s, o, a) {
    t.beginPath(), t.arc(e, i, s, 0, Math.PI * 2), t.fillStyle = this.data.style.color, t.fill(), t.strokeStyle = "rgba(255, 255, 255, 0.92)", t.lineWidth = Math.max(1, a), t.stroke(), t.fillStyle = "#ffffff", t.font = `600 ${o}px ${Jt}`, t.textAlign = "center", t.textBaseline = "middle", t.fillText(String(this.data.markerNumber || 1), e, i + a * 0.5);
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
      r && (r.font = `${e}px ${Jt}`, o = Nn(t, e).x + r.measureText(s).width + 4);
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
        return new ea(e, i);
      case f.Ellipse:
        return new na(e, i);
      case f.Line:
        return new ia(e, i);
      case f.Arrow:
        return new sa(e, i);
      case f.Pen:
        return new oa(e, i);
      case f.Text:
        return new aa(
          e,
          s.text || "",
          i,
          s.fontSize || 16
        );
      case f.Marker:
        return new ra(
          e,
          s.markerNumber || 1,
          s.text || "",
          i,
          s.fontSize || 16
        );
      case f.Mosaic:
        return new Bn(
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
const ge = class ge {
  constructor() {
    R(this, "pool", []);
    R(this, "maxPoolSize", 5);
    // 最大池大小
    R(this, "inUse", /* @__PURE__ */ new Set());
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
R(ge, "instance");
let Hn = ge;
async function la(n, t) {
  return await b("get_local_plugin_resource_path", {
    pluginId: n,
    relativePath: t
  });
}
const ca = "snippets-code:developer-mode", ms = "snippets-code:frontend-diagnostics", ha = 240, Ee = "[REDACTED]", un = (n) => n.replace(
  /("(?:[^"]*(?:token|password|secret|authorization)[^"]*)"\s*:\s*)("(?:\\.|[^"])*"|[^,\r\n}\]]+)/gi,
  `$1"${Ee}"`
).replace(/\bBearer\s+[A-Za-z0-9._~+/=-]+/gi, `Bearer ${Ee}`).replace(
  /\b(?:gh[pousr]_[A-Za-z0-9_]{12,}|github_pat_[A-Za-z0-9_]{12,})\b/g,
  Ee
).replace(/(https?:\/\/)[^/\s@]+@/gi, `$1${Ee}@`).replace(
  /([?&][^=&\s]*(?:token|password|secret|authorization)[^=&\s]*=)[^&\s]+/gi,
  `$1${Ee}`
), Qn = (n) => {
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
}, ua = () => {
  try {
    return globalThis.__TAURI_INTERNALS__?.metadata?.currentWindow?.label ?? "webview";
  } catch {
    return "webview";
  }
}, da = () => {
  if (typeof localStorage > "u") return [];
  try {
    const n = JSON.parse(localStorage.getItem(ms) || "[]");
    return Array.isArray(n) ? n : [];
  } catch {
    return [];
  }
}, ti = () => {
  if (typeof localStorage > "u") return !1;
  try {
    return localStorage.getItem(ca) === "true";
  } catch {
    return !1;
  }
}, ga = (n, t, e) => {
  if (!ti() || typeof localStorage > "u") return;
  const i = da();
  i.push({
    timestamp: (/* @__PURE__ */ new Date()).toISOString(),
    level: n,
    windowLabel: ua(),
    message: un(t),
    data: Qn(e)
  });
  try {
    localStorage.setItem(
      ms,
      JSON.stringify(i.slice(-ha))
    );
  } catch {
  }
}, fa = () => ti(), ma = (n) => n === "error" || ti(), en = (n, t, e) => {
  ga(n, t, e), ma(n) && b("frontend_log", {
    level: n,
    message: t,
    data: e === void 0 ? null : Qn(e)
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
    fa() && en("debug", n, t);
  }
}, zt = {
  log: (n, t) => {
    b("append_ocr_diagnostic_log", {
      message: n,
      data: t === void 0 ? null : Qn(t)
    }).catch(() => {
    });
  }
}, pa = "resources/transformers/transformers.min.js", wa = ["translation-offline-runtime", "translation"], ya = "https://huggingface.co/", va = "{model}/resolve/{revision}/", xa = "/__snippets_code_disabled_transformers_local_models__/", ka = [
  "ort-wasm-simd-threaded.wasm",
  "ort-wasm-simd.wasm",
  "ort-wasm-threaded.wasm",
  "ort-wasm.wasm"
];
let $e = null;
const ba = (n) => {
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
}, ps = (n) => {
  const t = n.search(/[?#]/), e = t >= 0 ? n.slice(0, t) : n, i = ba(e);
  return i.index >= 0 ? e.slice(0, i.index + i.length) : e;
}, ws = (n) => {
  const t = ps(n);
  return Object.fromEntries(
    ka.map((e) => [e, `${t}${e}`])
  );
}, Sa = (n, t) => {
  var e, i;
  n.useBrowserCache = !0, n.allowRemoteModels = !0, n.remoteHost = ya, n.remotePathTemplate = va, n.allowLocalModels = !1, n.localModelPath = xa, t && (n.backends ?? (n.backends = {}), (e = n.backends).onnx ?? (e.onnx = {}), (i = n.backends.onnx).wasm ?? (i.wasm = {}), n.backends.onnx.wasm.wasmPaths = ws(t), n.backends.onnx.wasm.numThreads = 1);
};
async function Ma() {
  return $e || ($e = (async () => {
    for (const n of wa) {
      const t = await la(n, pa);
      if (!t) continue;
      const e = jo(t), i = await import(
        /* @vite-ignore */
        e
      );
      return Sa(i.env, e), D.info(`[离线翻译] 已从插件资源加载 Transformers runtime: ${n}`, {
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
let Qt = null, je = !1, _e = null, pe = null, jn = null;
const Ca = "Xenova/opus-mt-en-zh", _a = [
  { name: "tokenizer_config.json", size: "~1KB" },
  { name: "config.json", size: "~1KB" },
  { name: "tokenizer.json", size: "~2MB" },
  { name: "generation_config.json", size: "~1KB" },
  { name: "onnx/encoder_model_quantized.onnx", size: "~75MB" },
  { name: "onnx/decoder_model_merged_quantized.onnx", size: "~220MB" }
], Ta = 3e5;
function za(n) {
  jn = n;
}
function Ra() {
  return _a;
}
function La(n, t, e) {
  return Promise.race([
    n,
    new Promise(
      (i, s) => setTimeout(() => s(new Error(e)), t)
    )
  ]);
}
async function ys() {
  return Qt || _e || (je = !0, D.info("[离线翻译] 正在加载翻译模型..."), _e = (async () => {
    try {
      const { pipeline: n } = await Ma();
      let t = "";
      const e = n("translation", Ca, {
        dtype: "q8",
        device: "wasm",
        revision: "main",
        local_files_only: !1,
        progress_callback: (s) => {
          s.status === "done" && s.file && s.file !== t && (t = s.file, D.info(`[离线翻译] 已加载: ${s.file}`)), jn && jn({
            status: s.status,
            progress: s.progress,
            file: s.file
          });
        }
      });
      return Qt = await La(
        e,
        Ta,
        "模型加载超时，请检查网络连接后重试"
      ), D.info("[离线翻译] 翻译模型加载完成"), je = !1, Qt;
    } catch (n) {
      throw je = !1, _e = null, D.error("[离线翻译] 模型加载失败:", n), n;
    }
  })(), _e);
}
async function vs(n) {
  if (!n?.trim()) return n;
  pe = new AbortController();
  const t = pe.signal;
  try {
    const e = await ys();
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
    pe = null;
  }
}
function Pa() {
  pe && (pe.abort(), pe = null, D.info("[离线翻译] 已发送取消信号"));
}
function Aa() {
  return pe !== null;
}
async function xs() {
  await ys();
}
function Da() {
  return Qt !== null;
}
function Ia() {
  return je;
}
async function ei() {
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
async function Oa() {
  return (await ei()).isCached;
}
function Ea() {
  return Qt !== null;
}
async function $a() {
  if (Qt)
    try {
      await Qt.dispose?.();
    } catch {
    }
  Qt = null, _e = null, je = !1, D.info("[离线翻译] 翻译器已释放");
}
async function Wa() {
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
const Ba = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  canUseOfflineTranslation: Ea,
  cancelOfflineTranslation: Pa,
  clearModelCache: Wa,
  disposeOfflineTranslator: $a,
  getModelCacheInfo: ei,
  getModelFiles: Ra,
  getRuntimeBaseUrl: ps,
  getRuntimeWasmPaths: ws,
  isModelCached: Oa,
  isOfflineTranslatorInitializing: Ia,
  isOfflineTranslatorReady: Da,
  isTranslationInProgress: Aa,
  setProgressCallback: za,
  translateOffline: vs,
  warmupOfflineTranslator: xs
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
    const e = Promise.resolve().then(() => kg).then((i) => (this.loadedModules.set(t, i), this.loadingPromises.delete(t), i));
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
    const e = Promise.resolve(Ba).then((i) => (this.loadedModules.set(t, i), this.loadingPromises.delete(t), i));
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
R(de, "loadedModules", /* @__PURE__ */ new Map()), R(de, "loadingPromises", /* @__PURE__ */ new Map());
async function Na() {
  return await b("local_ai_get_config");
}
async function Ha(n) {
  return await b("local_ai_scan_models", {
    config: n ?? null
  });
}
async function ks() {
  return await b("local_ai_get_status");
}
async function ja(n) {
  return await b("local_ai_start_service", {
    config: null
  });
}
async function bs(n) {
  return await b("local_ai_chat", { request: n });
}
function Ss(n) {
  if (!n) return "unknown";
  const t = n.match(/[\u4e00-\u9fa5]/g), e = t ? t.length : 0, i = n.match(/[\u3040-\u30ff]/g), s = i ? i.length : 0, o = n.match(/[\uac00-\ud7af]/g), a = o ? o.length : 0, r = n.match(/[a-zA-Z]/g), l = r ? r.length : 0, u = e + s + a + l;
  return u === 0 ? "unknown" : s >= 3 && s > l && s / u >= 0.2 ? "ja" : a >= 3 && a > e && a > l && a / u >= 0.2 ? "ko" : e > l ? "zh" : l > e ? "en" : "unknown";
}
function Te(n) {
  return n === "zh" || n === "en";
}
function ue(n) {
  return Ss(n);
}
const Fa = /[.!?。！？；;：:][)"'”’】）\]]*$/, Di = /[\u3040-\u30ff\u3400-\u4dbf\u4e00-\u9fff\uac00-\ud7af]/, nn = /[A-Za-z0-9]/, Va = /^\s*(?:(?:[-*+•·●○■□▪▫◆◇]|[▶▷►▸▹→]\s*(?:[·•]\s*)?)\s+|\d+[.)、）]\s*|[a-zA-Z][.)]\s+)/, Ii = /(?:^|\s)(?:(?:[-*+•·●○■□▪▫◆◇]|[▶▷►▸▹→]\s*[·•])\s+|\d+[.)、）]\s*|[a-zA-Z][.)]\s+)/g;
function Ua(n, t = {}) {
  const e = Lr(n), i = sr(n, e);
  return i.length === 0 ? [] : er(i, e) ? tr(i, e) : (t.mode === "single_para" ? [Be(i, e)] : Za(i, e)).flatMap((o) => Ya(o, e));
}
function Ya(n, t) {
  const e = ii(n, t), i = [];
  for (const s of e) {
    const o = i[i.length - 1], a = o ? hr(o, s, t) : !1;
    if (!o || !a) {
      i.push(dr(s));
      continue;
    }
    o.text = fr(o.text, s.text), o.blocks = [...o.blocks, ...s.blocks], o.bbox = Rs(o.bbox, s.bbox), o.fontSize = $i(
      o.fontSize || s.fontSize,
      o.blocks.length - s.blocks.length,
      s.fontSize,
      s.blocks.length
    ), o.lineHeight = $i(
      o.lineHeight || s.lineHeight,
      o.blocks.length - s.blocks.length,
      s.lineHeight,
      s.blocks.length
    ), o.isCodeBlock = !!(o.isCodeBlock || s.isCodeLike || s.hasTableColumns), o.isStructuredBlock = !!(o.isStructuredBlock || s.hasTableColumns);
  }
  return mr(i, t);
}
function Za(n, t) {
  if (n.length <= 1)
    return [n];
  const e = n.map((l) => ({
    bbox: nr(l),
    block: l
  })).filter((l) => ir(l.bbox)).sort(ni);
  if (e.length <= 1)
    return [Be(n, t)];
  if (Xa(e, t))
    return [Be(n, t)];
  const { cuts: i, rows: s } = Ga(e);
  if (i.length < 2 || s.length <= 1)
    return [Be(n, t)];
  const o = Ja(i, s), r = Qa(o).filter((l) => l.units.length > 0).map((l) => l.units.map((c) => c.block)).filter((l) => l.length > 0);
  return r.length > 0 ? r : [Be(n, t)];
}
function Xa(n, t) {
  if (n.length < 2)
    return !0;
  const e = [...n].sort(ni);
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
function Ga(n) {
  const t = Math.min(...n.map((l) => l.bbox.left)) - 1, e = Math.max(...n.map((l) => l.bbox.right)) + 1, i = [], s = [];
  let o = [], a = 0;
  for (; a < n.length; ) {
    const c = n[a].bbox.bottom, u = [];
    for (; a < n.length && n[a].bbox.top <= c; )
      u.push(n[a]), a += 1;
    u.sort((g, p) => g.bbox.left - p.bbox.left || g.bbox.right - p.bbox.right);
    const d = Ka(u, t, e, i.length), { gaps: w, removedGaps: v } = qa(o, d), S = i.length - 1;
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
function Ka(n, t, e, i) {
  const s = [];
  let o = t;
  for (const a of n)
    a.bbox.left > o && s.push({ left: o, right: a.bbox.left, startRow: i }), a.bbox.right > o && (o = a.bbox.right);
  return s.push({ left: o, right: e, startRow: i }), s;
}
function qa(n, t) {
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
function Ja(n, t) {
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
      let S = !1, g = !1, p = !1;
      for (const z of l)
        if (sn(z.right, v.xLeft) && (S = !0), sn(z.left, v.xRight) && (g = !0), v.xLeft < z.left && z.left < v.xRight || v.xLeft < z.right && z.right < v.xRight) {
          p = !0;
          break;
        }
      !S || !g || p ? a(v) : (v.rowBottom = r, c.push(v));
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
      let p = o.find((z) => sn(z.xLeft, S) && sn(z.xRight, g));
      p || (p = {
        xLeft: S,
        xRight: g,
        rowTop: r,
        rowBottom: r,
        units: [],
        children: []
      }, o.push(p)), p.units.push(v), u += 1;
    }
  }
  for (const r of o)
    a(r);
  for (const r of s)
    r.children.sort((l, c) => l.xLeft - c.xLeft || l.rowTop - c.rowTop), r.units.sort(ni);
  return i;
}
function Qa(n) {
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
function tr(n, t) {
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
      return S === 0 ? g : si(w, g);
    }, ""), c = zs(r), u = Ot(r.map((w) => re(w.fontSize, t))), d = Ot(r.map((w) => Mn(w)));
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
function er(n, t) {
  return n.length < 2 ? !1 : n.filter((i) => {
    const s = Math.max(i.width, 1);
    return i.height > s * 1.35 && i.height > Math.max(18, t * 0.35);
  }).length >= Math.max(2, Math.ceil(n.length * 0.56));
}
function nr(n) {
  return {
    left: n.x,
    top: n.y,
    right: n.x + n.width,
    bottom: n.y + n.height
  };
}
function ir(n) {
  return Number.isFinite(n.left) && Number.isFinite(n.top) && Number.isFinite(n.right) && Number.isFinite(n.bottom) && n.right >= n.left && n.bottom >= n.top;
}
function ni(n, t) {
  return n.bbox.top - t.bbox.top || n.bbox.left - t.bbox.left;
}
function sn(n, t) {
  return Math.abs(n - t) <= 1e-4;
}
function sr(n, t) {
  return n.map((e) => {
    const i = e.text.trim();
    if (!i || or(e, t) || rr(i))
      return null;
    const s = lr(ar(i, e, t));
    return s === e.text ? e : { ...e, text: s };
  }).filter((e) => !!e);
}
function or(n, t) {
  const e = n.text.trim();
  if (!/^[cC]$/.test(e))
    return !1;
  const i = t * 1.25;
  return n.width <= i && n.height <= i;
}
function ar(n, t, e) {
  return /^xC$/i.test(n) && t.width <= e * 2.4 ? "X" : n;
}
function rr(n) {
  return /^(?:en|zh|ja|ko|de|fr|es|ru|pt|it|nl)[A-Z]{2,4}$/.test(n.trim());
}
function lr(n) {
  return n.replace(/^:\s+(?=[A-Z])/, "- ");
}
function ii(n, t) {
  const e = [...n].sort((o, a) => {
    const r = o.y - a.y;
    return Math.abs(r) > t * 0.45 ? r : o.x - a.x;
  }), i = [], s = t * 0.45;
  for (const o of e) {
    const a = i[i.length - 1];
    a && Math.abs(o.y - a.y) < s && !Cr(a.blocks, o, t) ? (a.blocks.push(o), a.y = Ot(a.blocks.map((r) => r.y))) : i.push({ y: o.y, blocks: [o] });
  }
  return i.map((o) => cr(o.blocks, t));
}
function cr(n, t) {
  const e = [...n].sort((r, l) => r.x - l.x), i = zs(e), s = e.reduce((r, l, c) => {
    const u = l.text.trim();
    return c === 0 ? u : gr(r, u);
  }, ""), o = Ot(e.map((r) => re(r.fontSize, t))), a = Ot(e.map((r) => Mn(r)));
  return {
    text: s,
    blocks: e,
    bbox: i,
    fontSize: o,
    lineHeight: a,
    centerY: i.y + i.height / 2,
    hasTableColumns: _r(e, t),
    isCodeLike: _s(s)
  };
}
function hr(n, t, e) {
  const i = ii(n.blocks, e), s = i[i.length - 1];
  if (!s) return !1;
  const o = Ue(s.text);
  if (Sn(s.text) || Ue(t.text) || o && !ur(s, t, e) || t.isCodeLike || s.isCodeLike || t.hasTableColumns || s.hasTableColumns) return !1;
  const a = t.bbox.y - (s.bbox.y + s.bbox.height);
  if (a < -e * 0.25 || a >= e * 1.8 || xr(i, a, e) || kr(s, t, a, e) || br(s, t, a, e) || Sr(s, t, a, e) || Mr(s, t, a, e))
    return !1;
  if (o)
    return !0;
  const r = Math.max(e * 1.2, s.lineHeight * 0.9);
  return Math.abs(t.bbox.x - s.bbox.x) <= r;
}
function ur(n, t, e) {
  if (Cs(t.text))
    return !1;
  const i = t.bbox.x - n.bbox.x, s = Math.max(e * 0.8, n.lineHeight * 0.65);
  return i >= s;
}
function dr(n) {
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
function gr(n, t) {
  return si(n, t);
}
function fr(n, t) {
  return si(n, t);
}
function si(n, t) {
  const e = n.trimEnd(), i = t.trimStart();
  if (!e) return i;
  if (!i) return e;
  const s = e.charAt(e.length - 1), o = i.charAt(0), a = e.charAt(e.length - 2);
  return s === "-" && nn.test(a) && nn.test(o) ? `${e.slice(0, -1)}${i}` : Pr(o) || Ar(s) ? `${e}${i}` : Di.test(s) || Di.test(o) || Wi(s) || Wi(o) ? `${e}${i}` : nn.test(s) && nn.test(o) ? `${e} ${i}` : `${e} ${i}`.replace(/\s+/g, " ");
}
function Sn(n) {
  return Fa.test(n.trim());
}
function Ue(n) {
  return Va.test(n);
}
function mr(n, t) {
  return n.flatMap((e) => pr(e, t));
}
function pr(n, t) {
  const e = Ms(n.text);
  if (e.length <= 1)
    return [n];
  const i = ii(n.blocks, t), s = i.length === e.length;
  return e.map((o, a) => {
    const r = s ? i[a] : null, l = r?.bbox || yr(n.bbox, a, e.length), c = r?.blocks || [vr(n, o, l, a)];
    return {
      ...n,
      text: o,
      blocks: c,
      bbox: l,
      isCodeBlock: !!c.some((u) => _s(u.text)),
      isStructuredBlock: n.isStructuredBlock,
      fontSize: Ot(c.map((u) => re(u.fontSize, n.fontSize || t))),
      lineHeight: Ot(c.map((u) => Mn(u))),
      angle: Ot(c.map((u) => u.angle || 0))
    };
  });
}
function Ms(n) {
  const t = n.split(/\r?\n+/).map((i) => i.trim()).filter(Boolean);
  if (t.length > 1)
    return t.flatMap(Ms);
  const e = wr(n);
  return e.length > 1 ? e.flatMap(Oi) : Oi(n);
}
function wr(n) {
  const t = n.trim(), e = [];
  Ii.lastIndex = 0;
  for (const i of t.matchAll(Ii)) {
    const s = i[0], o = i.index ?? 0;
    e.push(o + (s.startsWith(" ") ? 1 : 0));
  }
  return e.length <= 1 ? [t] : e.map((i, s) => {
    const o = e[s + 1] ?? t.length;
    return t.slice(i, o).trim();
  }).filter(Boolean);
}
function Oi(n) {
  const t = n.trim();
  if (!Ue(t))
    return [t];
  const e = t.match(/^(.+?\([^)]{1,80}\))\s+([A-Z][A-Za-z0-9][A-Za-z0-9\s:,'&()[\]/-]{2,40})$/);
  return !e || !Cs(e[2]) ? [t] : [e[1].trim(), e[2].trim()];
}
function yr(n, t, e) {
  const i = n.height / Math.max(e, 1);
  return {
    x: n.x,
    y: n.y + i * t,
    width: n.width,
    height: i
  };
}
function vr(n, t, e, i) {
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
function Cs(n) {
  const t = n.trim();
  return !t || Sn(t) || Ue(t) ? !1 : t.split(/\s+/).filter(Boolean).length <= 5 && /^[A-Z][A-Za-z0-9\s:,'&()[\]/-]+$/.test(t);
}
function xr(n, t, e) {
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
function kr(n, t, e, i) {
  const s = n.text.trim();
  if (!s || Sn(s) || Ue(s) || n.isCodeLike || s.endsWith("-"))
    return !1;
  const o = s.split(/\s+/).filter(Boolean).length, a = n.bbox.width < t.bbox.width * 0.72, r = /^[A-Z][A-Za-z0-9\s:,'&()[\]/-]+$/.test(s) && o <= 8 && a, l = /[\u3400-\u4dbf\u4e00-\u9fff]/.test(s) && s.length <= 12 && a, c = r || l;
  return n.fontSize >= t.fontSize * 1.18 && c ? !0 : e > i * 0.7 && c;
}
function br(n, t, e, i) {
  if (e <= 0)
    return !1;
  const s = Math.max(n.fontSize, t.fontSize), o = Math.max(Math.min(n.fontSize, t.fontSize), 1), a = s / o, r = e / Math.max(o, i * 0.6, 1);
  if (a >= 1.45 && r >= 0.65)
    return !0;
  const l = n.fontSize >= i * 1.08 && n.bbox.width >= t.bbox.width * 0.82, c = t.fontSize <= n.fontSize * 0.78 && e >= Math.max(t.lineHeight * 0.75, i * 0.55);
  return l && c;
}
function Sr(n, t, e, i) {
  if (e < i * 0.45)
    return !1;
  const o = n.text.split(/\s+/).filter(Boolean).length <= 3 && n.bbox.width < t.bbox.width * 0.35, a = Math.abs(n.bbox.x - t.bbox.x) <= i * 0.6;
  return o && a;
}
function Mr(n, t, e, i) {
  return e < i * 0.25 || !(Math.abs(n.bbox.x - t.bbox.x) <= i * 0.35) ? !1 : Ei(n.text) && Ei(t.text);
}
function Ei(n) {
  const t = n.trim();
  return t.split(/\s+/).filter(Boolean).length <= 3 && t.length <= 32 && !Sn(t);
}
function _s(n) {
  const t = n.trim();
  return t ? !!(/^(?:\$|>|PS>|C:\\|[A-Za-z]:\\|\/[\w.-]+\/)/.test(t) || /^(?:const|let|var|return|import|export|function|class|if|else|for|while|try|catch)\b/.test(t) || /^[{}()[\];,]+$/.test(t) || /^(?:sudo|npm|yarn|pnpm|deno|bun|git|cd|ls|cat|chmod|mkdir|rm|cp|mv|curl|wget|brew|apt|yum|dnf|pip|cargo)\s+\S+/.test(t) || /[{};]/.test(t) && /[=()]/.test(t) || /^<\/?[A-Za-z][^>]*>$/.test(t) || /^[\w.-]+\([^)]*\)\s*[{;]?$/.test(t)) : !1;
}
function Cr(n, t, e) {
  const i = [...n].sort((a, r) => a.x - r.x), s = i[i.length - 1], o = t.x - (s.x + s.width);
  return o > e * 0.9 && Rr(s.text) && Ts(t.text) ? !1 : o > e * 3.2;
}
function _r(n, t) {
  if (n.length < 2)
    return n.some((s) => Tr(s.text));
  const e = [...n].sort((s, o) => s.x - o.x);
  let i = 0;
  for (let s = 1; s < e.length; s++) {
    const o = e[s - 1], a = e[s], r = e[s].x - (o.x + o.width);
    (r > t * 1.8 || r > t * 0.9 && zr(o.text) && Ts(a.text)) && (i += 1);
  }
  return i >= 1;
}
function Tr(n) {
  const t = n.trim();
  return /\S\s{3,}\S/.test(t) && (/^Option\s{2,}Description\b/i.test(t) || /^[A-Za-z_][A-Za-z0-9_-]{1,24}\s{2,}[A-Z]/.test(t));
}
function zr(n) {
  return /^[A-Za-z_][A-Za-z0-9_-]{1,24}$/.test(n.trim());
}
function Rr(n) {
  const t = n.trim();
  return /^[a-z_][A-Za-z0-9_-]{1,24}$/.test(t) || /[_-]/.test(t);
}
function Ts(n) {
  const t = n.trim();
  return /^[A-Z]/.test(t) && t.length > 6;
}
function zs(n) {
  const t = n.map((e) => ({
    x: e.x,
    y: e.y,
    width: e.width,
    height: e.height
  }));
  return t.reduce((e, i) => Rs(e, i), t[0]);
}
function Rs(n, t) {
  const e = Math.min(n.x, t.x), i = Math.min(n.y, t.y), s = Math.max(n.x + n.width, t.x + t.width), o = Math.max(n.y + n.height, t.y + t.height);
  return {
    x: e,
    y: i,
    width: s - e,
    height: o - i
  };
}
function Lr(n) {
  return re(Ot(n.map((t) => Mn(t))), 16);
}
function Mn(n) {
  return re(n.lineHeight, re(n.height, re(n.fontSize, 16) * 1.2));
}
function $i(n, t, e, i) {
  const s = t + i;
  return s <= 0 ? e : (n * t + e * i) / s;
}
function re(n, t) {
  return Number.isFinite(n) && n > 0 ? n : t;
}
function Ot(n) {
  return n.length === 0 ? 0 : n.reduce((t, e) => t + e, 0) / n.length;
}
function Pr(n) {
  return /^[,.;:!?，。！？；：、)\]}>"'”’]$/.test(n);
}
function Ar(n) {
  return /^[(\[{<"'“‘]$/.test(n);
}
function Wi(n) {
  return /^[，。！？；：、（）【】《》“”‘’]$/.test(n);
}
const Bi = 34;
class Dr {
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
    let v = 0, S = 1, g = t.x, p = t.x, z = t.y, A = t.y;
    for (d[0] = t.x, w[0] = t.y, u[(t.y - o) * l + t.x - s] = 1; v < S; ) {
      const Z = d[v], N = w[v];
      if (v += 1, g = Math.min(g, Z), p = Math.max(p, Z), z = Math.min(z, N), A = Math.max(A, N), S = this.enqueueNeighbors(
        Z,
        N,
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
    const C = p - g + 1, B = A - z + 1;
    return S / Math.max(1, C * B) >= 0.24 ? { x: g, y: z, width: C, height: B } : null;
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
      const p = (g.y - s) * r + g.x - i;
      c[p] || (c[p] = 1, this.isColorNear(this.getColor(g.x, g.y), l) && (u[v] = g.x, d[v] = g.y, v += 1));
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
    return i * i + s * s + o * o <= Bi * Bi;
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
const Ir = 960, Or = 640;
class oi {
  constructor(t, e, i, s, o) {
    R(this, "regionDetector");
    R(this, "lastDetection", null);
    this.sampleWidth = e, this.sampleHeight = i, this.logicalWidth = s, this.logicalHeight = o, this.regionDetector = new Dr(
      t,
      e,
      i
    );
  }
  static fromImage(t, e, i) {
    if (e <= 0 || i <= 0) return null;
    const s = Math.min(
      1,
      Ir / e,
      Or / i
    ), o = Math.max(1, Math.round(e * s)), a = Math.max(1, Math.round(i * s)), r = document.createElement("canvas");
    r.width = o, r.height = a;
    const l = r.getContext("2d", { willReadFrequently: !0 });
    if (!l) return null;
    l.drawImage(t, 0, 0, o, a);
    const c = l.getImageData(0, 0, o, a);
    return new oi(
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
function Ni(n, t) {
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
class Er {
  constructor() {
    R(this, "currentRect", null);
    R(this, "isFinalized", !1);
  }
  preview(t) {
    return t ? this.isFinalized && Ni(this.currentRect, t) ? {
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
    const e = !Ni(this.currentRect, t);
    return this.currentRect = this.cloneRect(t), {
      rect: this.cloneRect(this.currentRect),
      changed: e
    };
  }
  cloneRect(t) {
    return t ? { ...t } : null;
  }
}
class $r {
  constructor(t, e, i, s) {
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
    R(this, "currentTool", f.Select);
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
    R(this, "elementCandidateStabilizer", new Er());
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
    R(this, "canvasPool", Hn.getInstance());
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
    this.canvas = t, this.onStateChange = e, this.onTextInputRequest = i, this.onColorPicked = s, this.coordinateSystem = new Qo(t), this.drawingEngine = new Jo(t, this.coordinateSystem), this.eventHandler = new ta(t, this.coordinateSystem), this.bindMouseEvents(), this.initCanvas(), Promise.all([
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
              this.visualElementDetector = oi.fromImage(
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
      this.eventHandler.updateMousePosition(e), this.pendingSnapCandidate && this.dragStartPosition && !this.selectionRect && bt(e, this.dragStartPosition) > this.dragThreshold && (this.selectionRect = {
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
      const g = e + s / 2, p = i + o / 2;
      t.fillStyle = "rgba(0, 0, 0, 0.7)", t.fillRect(e, i, s, o), t.font = '16px "Microsoft YaHei", sans-serif', t.fillStyle = "#ffffff", t.textAlign = "center", t.textBaseline = "middle";
      let z = "正在识别翻译...";
      this.translationOverlay.engine === "local-ai" && (this.translationOverlay.loadingStage === "starting-service" ? z = "正在启动 AI 模型服务..." : z = "正在由 AI 识图翻译..."), t.fillText(z, g, p), t.restore();
      return;
    }
    if (this.translationOverlay.errorMessage) {
      const g = e + s / 2, p = i + o / 2;
      t.fillStyle = "rgba(0, 0, 0, 0.8)", t.fillRect(e, i, s, o), t.font = '16px "Microsoft YaHei", sans-serif', t.fillStyle = "#ff6b6b", t.textAlign = "center", t.textBaseline = "middle", t.fillText(this.translationOverlay.errorMessage, g, p), t.restore();
      return;
    }
    if (this.translationOverlay.blocks.length === 0) {
      t.restore();
      return;
    }
    const r = { x: e, y: i, width: s, height: o }, l = this.sampleRegionColor(r), c = l.brightness < 128;
    let u, d;
    if (c) {
      const g = Math.max(0, Math.round(l.r * 0.1)), p = Math.max(0, Math.round(l.g * 0.1)), z = Math.max(0, Math.round(l.b * 0.1));
      u = `rgba(${g}, ${p}, ${z}, 0.95)`, d = "rgba(255, 255, 255, 0.9)";
    } else {
      const g = Math.min(255, Math.round(l.r + (255 - l.r) * 0.95)), p = Math.min(255, Math.round(l.g + (255 - l.g) * 0.95)), z = Math.min(255, Math.round(l.b + (255 - l.b) * 0.95));
      u = `rgba(${g}, ${p}, ${z}, 0.95)`, d = "rgba(0, 0, 0, 0.85)";
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
    const l = [...e].filter((C) => (C.translatedText || C.text).trim()).sort((C, B) => {
      const Y = C.bbox.y - B.bbox.y;
      return Math.abs(Y) > 4 ? Y : C.bbox.x - B.bbox.x;
    });
    if (l.length === 0)
      return;
    const c = Math.max(24, r - o * 2), u = o, d = (C, B, Y) => l.map((Z) => {
      const N = (Z.translatedText || Z.text).trim(), j = Math.max(12, Math.min(Z.fontSize || 16, 48)), q = Math.max(8, Math.round(j * C)), X = Z.isCodeBlock ? '"Consolas", "Monaco", monospace' : '"Microsoft YaHei", "PingFang SC", "Hiragino Sans GB", sans-serif', G = Math.max(
        o,
        Math.min(Z.bbox.x + o, a * 0.38)
      ), ot = B ? o : G, it = Math.max(48, a - ot - u), kt = Z.lineHeight || q * 1.35, at = Math.max(
        q * (Y ? 1.04 : 1.14),
        Math.min(kt * C, q * (Y ? 1.18 : 1.42))
      );
      return t.font = `${q}px ${X}`, {
        text: N,
        fontSize: q,
        fontFamily: X,
        lineHeight: at,
        paragraphGap: Y ? Math.max(1, at * 0.16) : Math.max(3, at * 0.35),
        x: i + ot,
        lines: this.wrapTextToLines(t, N, it)
      };
    }), w = (C) => C.reduce((B, Y, Z) => {
      const N = Z === C.length - 1 ? 0 : Y.paragraphGap;
      return B + Y.lines.length * Y.lineHeight + N;
    }, 0);
    let v = d(1, !1, !1), S = w(v);
    if (S > c) {
      const C = Math.max(0.56, c / S);
      v = d(C, !1, !1), S = w(v);
    }
    if (S > c && (v = d(1, !0, !1), S = w(v)), S > c) {
      const C = Math.max(0.38, c / S * 0.96);
      v = d(C, !0, !0), S = w(v);
    }
    if (S > c) {
      const C = Math.max(0.3, c / S * 0.94);
      v = d(C, !0, !0), S = w(v);
    }
    const g = Math.min(...l.map((C) => C.bbox.y)), p = s + Math.max(o, Math.min(g, r - o)), z = s + r - o;
    let A = p + S > z ? s + o : p;
    for (const C of v) {
      t.font = `${C.fontSize}px ${C.fontFamily}`;
      for (const B of C.lines)
        t.fillText(B, C.x, A), A += C.lineHeight;
      A += C.paragraphGap;
    }
  }
  drawStructuredTranslationBlock(t, e, i, s, o, a, r) {
    const l = [...e.blocks].sort((d, w) => d.x - w.x), c = Math.max(12, Math.min(e.fontSize || 14, 32)), u = e.lineHeight || c * 1.35;
    t.font = `${c}px "Consolas", "Monaco", monospace`;
    for (const d of l) {
      const w = d.translatedText || d.text;
      if (!w.trim()) continue;
      const v = i + d.x + Math.min(4, o), S = s + d.y, g = l.find((C) => C.x > d.x), p = g ? Math.max(d.width, g.x - d.x - 8) : Math.max(d.width, a - d.x - o), z = this.wrapTextToLines(t, w.trim(), p);
      let A = S;
      for (const C of z) {
        if (A + c > s + r) break;
        t.fillText(C, v, A), A += u;
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
    const c = this.backgroundImage.width, u = this.backgroundImage.height, d = this.canvas.width / s, w = this.canvas.height / s, v = c / d, S = u / w, g = t.x * v, p = t.y * S, z = t.width * v, A = t.height * S;
    try {
      l.drawImage(
        this.backgroundImage,
        g,
        p,
        z,
        A,
        0,
        0,
        o,
        a
      );
    } catch (U) {
      return D.error("[截图] 采样区域绘制失败", U), this.canvasPool.release(r), i;
    }
    let C;
    try {
      C = l.getImageData(0, 0, o, a);
    } catch (U) {
      return D.error("[截图] 获取像素数据失败", U), this.canvasPool.release(r), i;
    }
    const B = C.data, Y = Math.ceil(Math.sqrt(e)), Z = o / (Y + 1), N = a / (Y + 1);
    let j = 0, q = 0, X = 0, G = 0;
    for (let U = 1; U <= Y; U++)
      for (let Q = 1; Q <= Y && !(G >= e); Q++) {
        const rt = Math.floor(Q * Z), ft = Math.floor(U * N);
        if (rt >= 0 && rt < o && ft >= 0 && ft < a) {
          const lt = (ft * o + rt) * 4;
          lt >= 0 && lt + 2 < B.length && (j += B[lt], q += B[lt + 1], X += B[lt + 2], G++);
        }
      }
    if (this.canvasPool.release(r), G === 0)
      return i;
    const ot = Math.round(j / G), it = Math.round(q / G), kt = Math.round(X / G), at = this.getBrightness(ot, it, kt);
    return {
      r: ot,
      g: it,
      b: kt,
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
    const c = this.backgroundImage.width, u = this.backgroundImage.height, d = this.canvas.width / s, w = this.canvas.height / s, v = c / d, S = u / w, g = t.x * v, p = t.y * S, z = t.width * v, A = t.height * S;
    try {
      l.drawImage(
        this.backgroundImage,
        g,
        p,
        z,
        A,
        0,
        0,
        o,
        a
      );
    } catch (U) {
      return D.error("[截图] isUniformColor: 采样区域绘制失败", U), this.canvasPool.release(r), !1;
    }
    let C;
    try {
      C = l.getImageData(0, 0, o, a);
    } catch (U) {
      return D.error("[截图] isUniformColor: 获取像素数据失败", U), this.canvasPool.release(r), !1;
    }
    const B = C.data, Y = Math.ceil(Math.sqrt(i)), Z = o / (Y + 1), N = a / (Y + 1), j = [];
    for (let U = 1; U <= Y; U++)
      for (let Q = 1; Q <= Y && !(j.length >= i); Q++) {
        const rt = Math.floor(Q * Z), ft = Math.floor(U * N);
        if (rt >= 0 && rt < o && ft >= 0 && ft < a) {
          const lt = (ft * o + rt) * 4;
          lt >= 0 && lt + 2 < B.length && j.push({
            r: B[lt],
            g: B[lt + 1],
            b: B[lt + 2]
          });
        }
      }
    if (this.canvasPool.release(r), j.length < 2)
      return !1;
    const q = j.reduce((U, Q) => U + Q.r, 0) / j.length, X = j.reduce((U, Q) => U + Q.g, 0) / j.length, G = j.reduce((U, Q) => U + Q.b, 0) / j.length, ot = j.reduce((U, Q) => U + Math.pow(Q.r - q, 2), 0) / j.length, it = j.reduce((U, Q) => U + Math.pow(Q.g - X, 2), 0) / j.length, kt = j.reduce((U, Q) => U + Math.pow(Q.b - G, 2), 0) / j.length;
    return (ot + it + kt) / 3 < e;
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
        t = Ko(
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
      c += bt(e[v - 1], e[v]);
    const d = bt(e[0], e[e.length - 1]) / c, w = Math.max(r, l) / Math.max(Math.min(r, l), 1);
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
          let dt = 0;
          for (; !this.backgroundImage && dt < 3e3; )
            await new Promise((I) => setTimeout(I, 100)), dt += 100;
          if (!this.backgroundImage)
            throw new Error("背景图像加载超时");
        }
        const c = window.devicePixelRatio || 1, u = Math.max(0, o.padding || 0), d = this.canvas.width / c, w = this.canvas.height / c, v = t - u, S = e - u, g = i + u * 2, p = s + u * 2, z = Math.max(1, Math.round(g * c)), A = Math.max(1, Math.round(p * c)), C = Math.max(0, v), B = Math.max(0, S), Y = Math.min(d, v + g), Z = Math.min(w, S + p), N = Math.max(0, Y - C), j = Math.max(0, Z - B), q = Math.round(C * c), X = Math.round(B * c), G = Math.min(
          this.canvas.width - q,
          Math.round(N * c)
        ), ot = Math.min(
          this.canvas.height - X,
          Math.round(j * c)
        ), it = Math.round((C - v) * c), kt = Math.round((B - S) * c), at = document.createElement("canvas");
        at.width = z, at.height = A;
        const U = at.getContext("2d", {
          alpha: !0,
          desynchronized: !1,
          willReadFrequently: !1
        });
        if (!U)
          throw new Error("无法获取2D绘图上下文");
        U.imageSmoothingEnabled = !1, o.fillColor && (U.fillStyle = o.fillColor, U.fillRect(0, 0, z, A)), G > 0 && ot > 0 && U.drawImage(
          this.backgroundImage,
          q,
          X,
          G,
          ot,
          it,
          kt,
          G,
          ot
        );
        const rt = at.toDataURL("image/png", 1).replace(/^data:image\/png;base64,/, "");
        clearTimeout(l), a({
          image: rt,
          adjusted_width: z,
          adjusted_height: A,
          logical_x: v,
          logical_y: S,
          logical_width: g,
          logical_height: p
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
            this.annotations.forEach((g, p) => {
              try {
                g.drawToScreenshot(S);
              } catch (z) {
                D.error(`[截图] 绘制标注 ${p} 失败`, z);
              }
            });
          }
          const u = Wn(
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
        const { x: e, y: i, width: s, height: o } = this.selectionRect, a = await b("get_window_info"), r = a?.scale || 1, l = Math.round(a.x + e * r), c = Math.round(a.y + i * r), u = Math.round(s * r), d = Math.round(o * r), w = Math.round(a.x + window.innerWidth * r), v = Math.round(a.y + window.innerHeight * r), S = t === "ocr" ? Math.min(Math.max(u, 760), Math.max(360, w - a.x)) : u, g = t === "ocr" ? Math.min(Math.max(d, 520), Math.max(260, v - a.y)) : d, p = t === "ocr" ? Math.round(l - Math.max(0, S - u) / 2) : l, z = t === "ocr" ? Math.max(a.x, Math.min(p, w - S)) : l, A = t === "ocr" ? Math.max(a.y, Math.min(c, v - g)) : c, C = {}, B = await this.cropFromBackground(e, i, s, o, C);
        if (!B?.image)
          throw new Error("Failed to crop from background image");
        const Y = await this.renderWithAnnotations(B, r, "save");
        await b("create_pin_window", {
          mode: t,
          imageData: Y,
          x: z,
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
        const p = r * d, z = l * d, A = performance.now();
        g.drawImage(
          this.backgroundImage,
          p,
          z,
          w,
          v,
          0,
          0,
          w,
          v
        ), e = Math.round(performance.now() - A);
        const C = performance.now(), { recognizeFromCanvas: B } = await de.loadOCR();
        i = Math.round(performance.now() - C);
        const Y = performance.now(), Z = await B(S);
        s = Math.round(performance.now() - Y), this.canvasPool.release(S);
        const N = {
          cropDurationMs: e,
          ocrModuleLoadDurationMs: i,
          ocrRecognitionDurationMs: s,
          confidence: Z.confidence,
          rawLineCount: Z.blocks.length,
          textLength: Z.full_text.trim().length
        };
        D.info("[OCR] 识别耗时统计", N), zt.log("[OCR] recognition timing", N);
        const j = Z.blocks, q = performance.now(), X = Ua(j);
        o = Math.round(performance.now() - q);
        const G = X.map((_) => _.text).join(`

`), ot = {
          rawLineCount: j.length,
          paragraphCount: X.length,
          durationMs: o,
          paragraphs: X.map((_, tt) => ({
            index: tt,
            text: _.text,
            blockCount: _.blocks.length,
            isCodeBlock: !!_.isCodeBlock,
            isStructuredBlock: !!_.isStructuredBlock,
            bbox: _.bbox,
            sourceBlocks: _.blocks.map((St) => ({
              text: St.text,
              x: St.x,
              y: St.y,
              width: St.width,
              height: St.height
            }))
          }))
        };
        if (D.info("[OCR] 版面重组完成", ot), zt.log("[OCR] layout reflow complete", ot), !G || !G.trim()) {
          this.translationOverlay.isLoading = !1, this.translationOverlay.isVisible = !1, this.draw(), this.onStateChange?.();
          return;
        }
        const it = this.translationOverlay.engine;
        this.translationOverlay.sourceLanguage = "auto", this.translationOverlay.targetLanguage = this.getAutoTargetLanguage(ue(G));
        const kt = (_) => {
          const tt = _.trim();
          return !!(tt.match(/^(sudo|npm|yarn|pip|git|cd|ls|cat|chmod|chown|mkdir|rm|cp|mv|curl|wget|brew|apt|yum|dnf|sh|SH|Bash|PowerShell|Fish|Yarn|pnpm|deno|bun|Cargo)\s+\S+/) && !tt.match(/^(If|When|Click|Please|You|After|Before|Then|Open|Go|Download)/i));
        };
        let at = "";
        const U = ue(G), Q = {
          detectedLanguage: U,
          textLength: G.trim().length,
          textPreview: G.trim().slice(0, 500)
        };
        D.info("[OCR] 翻译语言检测完成", Q), zt.log("[OCR] translation language detected", Q), Te(U) && (this.translationOverlay.sourceLanguage = U, this.translationOverlay.targetLanguage = this.getAutoTargetLanguage(U));
        const rt = it === "offline" ? de.loadOfflineTranslator() : null, ft = (_) => _.includes("插件") && _.includes("未启用") ? _.includes("translation") ? "OCR识别已完成，但翻译插件未启用，请在插件设置中安装并启用 Translation 插件" : _ : it === "offline" ? _.includes("未激活") || _.includes("未下载") || _.includes("运行时未安装") ? _ : _.includes("超时") ? "模型加载超时，请重试" : _.includes("离线翻译暂仅支持") ? _ : "离线翻译失败: " + _.substring(0, 50) : _.includes("timeout") || _.includes("超时") ? "翻译超时，请检查网络连接" : _.includes("network") || _.includes("网络") || _.includes("请求") || _.includes("令牌") ? "翻译失败，请检查网络连接" : _.trim() ? _.slice(0, 80) : "翻译失败，请检查网络连接", lt = async () => {
          if (!rt)
            throw new Error("离线翻译模块未加载");
          const {
            translateOffline: _,
            canUseOfflineTranslation: tt,
            warmupOfflineTranslator: St,
            getModelCacheInfo: ct
          } = await rt, Lt = tt();
          if (this.offlineModelActivated && !Lt)
            if ((await ct()).isCached)
              await St();
            else
              throw new Error("离线翻译模型未下载，请在设置-翻译配置中下载模型");
          else if (!this.offlineModelActivated)
            throw new Error("离线翻译模型未激活，请在设置-翻译配置中激活模型");
          return _;
        }, dt = async (_, tt, St) => {
          if (!_.trim())
            return _;
          if (it === "offline") {
            if (tt !== "en" || St !== "zh")
              throw new Error("离线翻译暂仅支持英译中，请切换 Google 或 Bing 进行中译英");
            return (await lt())(_);
          }
          return await b("translate_text", {
            text: _,
            from: tt,
            to: St,
            engine: it
          });
        }, I = (_) => {
          const tt = _.trim();
          return /^(?:option|description|name|value|type|default|example|required)$/i.test(tt) ? !1 : /^[A-Za-z_][A-Za-z0-9_-]{1,32}$/.test(tt);
        }, yt = async (_, tt, St) => {
          const ct = _.trim();
          if (!ct || kt(ct))
            return _;
          const Lt = _.match(/^(\s*)(\S+)(\s{2,})(.+?)(\s*)$/);
          if (Lt) {
            const [, ht, gt, J, pt, Et] = Lt, At = ue(gt), Ie = I(gt) || !Te(At) ? gt : await dt(gt, At, this.getAutoTargetLanguage(At)), ne = ue(pt), jt = Te(ne) && !kt(pt) ? await dt(pt, ne, this.getAutoTargetLanguage(ne)) : pt;
            return `${ht}${Ie}${J}${jt}${Et}`;
          }
          if (I(ct))
            return _;
          const Mt = ue(ct);
          if (!Te(Mt))
            return _;
          const Zt = this.getAutoTargetLanguage(Mt), x = await dt(ct, Mt, Zt), $ = {
            paragraphIndex: tt,
            blockIndex: St,
            sourceLanguage: Mt,
            targetLanguage: Zt,
            sourceText: ct,
            translatedText: x.slice(0, 200)
          };
          return D.info("[OCR] 结构化块翻译完成", $), zt.log("[OCR] structured block translation complete", $), x;
        }, F = async (_, tt) => {
          const St = performance.now(), ct = (x) => ({
            index: tt,
            durationMs: Math.round(performance.now() - St),
            ...x
          }), Lt = ue(_.text), Mt = this.getAutoTargetLanguage(Lt), Zt = {
            index: tt,
            text: _.text,
            sourceLanguage: Lt,
            targetLanguage: Mt,
            engine: it,
            structured: !!_.isStructuredBlock
          };
          if (D.info("[OCR] 段落翻译方向", Zt), zt.log("[OCR] paragraph translation direction", Zt), !Te(Lt)) {
            _.translatedText = _.text;
            const x = ct({
              skipped: !0,
              cancelled: !1,
              errorMessage: "部分文本暂不支持翻译，已保留原文"
            }), $ = {
              index: tt,
              detectedLanguage: Lt,
              durationMs: x.durationMs,
              text: _.text
            };
            return D.warn("[OCR] 跳过不支持的段落语言", $), zt.log("[OCR] skip unsupported paragraph language", $), x;
          }
          try {
            if (_.isStructuredBlock && _.blocks.length > 0) {
              const ht = async (J, pt) => {
                const Et = await yt(J.text, tt, pt);
                return J.translatedText = Et, Et;
              }, gt = [];
              if (it === "offline")
                for (let J = 0; J < _.blocks.length; J += 1)
                  gt.push(await ht(_.blocks[J], J));
              else
                gt.push(
                  ...await Promise.all(
                    _.blocks.map((J, pt) => ht(J, pt))
                  )
                );
              _.translatedText = gt.join(" ");
            } else if (kt(_.text) || _.isCodeBlock) {
              _.translatedText = _.text;
              const ht = _.isCodeBlock ? "code_block" : "command_like_text", gt = ct({ skipped: !0, cancelled: !1 }), J = {
                index: tt,
                reason: ht,
                durationMs: gt.durationMs,
                text: _.text
              };
              return D.info("[OCR] 跳过代码段翻译", J), zt.log("[OCR] skip code paragraph translation", J), gt;
            } else
              _.translatedText = await dt(
                _.text,
                Lt,
                Mt
              );
            const x = ct({ skipped: !1, cancelled: !1 }), $ = {
              index: tt,
              durationMs: x.durationMs,
              sourceLanguage: Lt,
              targetLanguage: Mt,
              engine: it,
              structured: !!_.isStructuredBlock,
              sourceLength: _.text.length,
              translatedLength: (_.translatedText || "").length,
              translatedPreview: (_.translatedText || "").slice(0, 300)
            };
            return D.info("[OCR] 段落翻译完成", $), zt.log("[OCR] paragraph translation complete", $), x;
          } catch (x) {
            const $ = x instanceof Error ? x.message : String(x);
            if ($ === "翻译已取消")
              return ct({ skipped: !1, cancelled: !0 });
            _.translatedText = _.text;
            const ht = ft($), gt = ct({
              skipped: !1,
              cancelled: !1,
              errorMessage: ht
            }), J = {
              index: tt,
              durationMs: gt.durationMs,
              sourceLanguage: Lt,
              targetLanguage: Mt,
              engine: it,
              error: $,
              structured: !!_.isStructuredBlock,
              text: _.text
            };
            return D.error("[OCR] 段落翻译失败", J), zt.log("[OCR] paragraph translation failed", J), gt;
          }
        }, mt = performance.now();
        let vt = [];
        if (it === "offline")
          for (let _ = 0; _ < X.length; _ += 1) {
            const tt = await F(X[_], _);
            if (vt.push(tt), tt.cancelled)
              return;
            if (tt.errorMessage) {
              at = tt.errorMessage;
              break;
            }
          }
        else {
          if (vt = await Promise.all(
            X.map((_, tt) => F(_, tt))
          ), vt.some((_) => _.cancelled))
            return;
          at = vt.find((_) => _.errorMessage)?.errorMessage || "";
        }
        a = Math.round(performance.now() - mt);
        const Rt = {
          durationMs: a,
          engine: it,
          paragraphCount: X.length,
          translatedParagraphCount: vt.filter((_) => !_.skipped && !_.errorMessage).length,
          skippedParagraphCount: vt.filter((_) => _.skipped).length,
          failedParagraphCount: vt.filter((_) => !!_.errorMessage).length
        };
        D.info("[OCR] 翻译耗时统计", Rt), zt.log("[OCR] translation timing", Rt);
        const Dt = X.map((_) => this.toDisplayParagraph(_, d)), be = Dt.map((_) => this.toLegacyOverlayBlock(_));
        this.translationOverlay.blocks = be, this.translationOverlay.paragraphBlocks = Dt, this.translationOverlay.isLoading = !1, this.translationOverlay.errorMessage = at || void 0;
        const ee = {
          cropDurationMs: e,
          ocrModuleLoadDurationMs: i,
          ocrRecognitionDurationMs: s,
          reflowDurationMs: o,
          translationDurationMs: a,
          totalDurationMs: Math.round(performance.now() - t),
          rawLineCount: j.length,
          paragraphCount: X.length,
          engine: it
        };
        D.info("[OCR] 截图翻译总耗时统计", ee), zt.log("[OCR] pipeline timing", ee), this.draw(), this.onStateChange?.();
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
        this.translationOverlay.loadingStage = "starting-service", this.draw(), this.onStateChange?.(), (await ks()).running || (D.info("[截图] AI 服务未运行，正在启动..."), await ja(), D.info("[截图] AI 服务启动完成"));
        const a = await this.cropFromBackground(t, e, i, s);
        if (!a?.image)
          throw new Error("无法获取截图选区图像");
        this.translationOverlay.loadingStage = "translating", this.draw(), this.onStateChange?.(), await new Promise((p) => setTimeout(p, 100));
        const l = (await bs({
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
        const c = Math.max(14, Math.min(20, Math.round(s / 18))), u = Math.max(18, Math.min(28, Math.round(s / 12))), d = l.split(/\n\n+/).filter((p) => p.trim()), w = Math.max(d.length, 1), v = (s - 16) / w, S = d.map((p, z) => {
          const A = z * v + 8, C = z === w - 1 ? s - A - 8 : v, B = {
            text: "",
            translatedText: p.trim(),
            x: 0,
            y: A,
            width: i,
            height: C,
            fontSize: c,
            lineHeight: u,
            angle: 0
          };
          return {
            text: "",
            translatedText: p.trim(),
            blocks: [B],
            bbox: { x: 0, y: A, width: i, height: C },
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
        this.translationOverlay.blocks = g.map((p) => p.blocks[0]), this.translationOverlay.paragraphBlocks = g, this.translationOverlay.sourceLanguage = "auto", this.translationOverlay.targetLanguage = "zh", this.translationOverlay.isLoading = !1, this.translationOverlay.loadingStage = void 0, this.translationOverlay.isVisible = !0, this.translationOverlay.errorMessage = void 0, this.draw(), this.onStateChange?.();
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
var Wr = {
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
function Br() {
  return "icon-" + ((1 + Math.random()) * 4294967296 | 0).toString(16).substring(1);
}
function Nr(n, t, e) {
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
var Hr = Symbol("icon-context");
function nt(n, t, e) {
  var i = {
    name: "icon-" + n,
    props: ["size", "strokeWidth", "strokeLinecap", "strokeLinejoin", "theme", "fill", "spin"],
    setup: function(o) {
      var a = Br(), r = fe(Hr, Wr);
      return function() {
        var l = o.size, c = o.strokeWidth, u = o.strokeLinecap, d = o.strokeLinejoin, w = o.theme, v = o.fill, S = o.spin, g = Nr(a, {
          size: l,
          strokeWidth: c,
          strokeLinecap: u,
          strokeLinejoin: d,
          theme: w,
          fill: v
        }, r), p = [r.prefix + "-icon"];
        return p.push(r.prefix + "-icon-" + n), t && r.rtl && p.push(r.prefix + "-icon-rtl"), S && p.push(r.prefix + "-icon-spin"), m("span", {
          class: p.join(" ")
        }, [e(g)]);
      };
    }
  };
  return i;
}
const jr = nt("arrow-right-up", !0, function(n) {
  return m("svg", {
    width: n.size,
    height: n.size,
    viewBox: "0 0 48 48",
    fill: "none"
  }, [m("path", {
    d: "M19 11H37V29",
    stroke: n.colors[0],
    "stroke-width": n.strokeWidth,
    "stroke-linecap": n.strokeLinecap,
    "stroke-linejoin": n.strokeLinejoin
  }, null), m("path", {
    d: "M11.5439 36.4559L36.9997 11",
    stroke: n.colors[0],
    "stroke-width": n.strokeWidth,
    "stroke-linecap": n.strokeLinecap,
    "stroke-linejoin": n.strokeLinejoin
  }, null)]);
}), dn = nt("check", !0, function(n) {
  return m("svg", {
    width: n.size,
    height: n.size,
    viewBox: "0 0 48 48",
    fill: "none"
  }, [m("path", {
    d: "M43 11L16.875 37L5 25.1818",
    stroke: n.colors[0],
    "stroke-width": n.strokeWidth,
    "stroke-linecap": n.strokeLinecap,
    "stroke-linejoin": n.strokeLinejoin
  }, null)]);
}), Fn = nt("close", !1, function(n) {
  return m("svg", {
    width: n.size,
    height: n.size,
    viewBox: "0 0 48 48",
    fill: "none"
  }, [m("path", {
    d: "M8 8L40 40",
    stroke: n.colors[0],
    "stroke-width": n.strokeWidth,
    "stroke-linecap": n.strokeLinecap,
    "stroke-linejoin": n.strokeLinejoin
  }, null), m("path", {
    d: "M8 40L40 8",
    stroke: n.colors[0],
    "stroke-width": n.strokeWidth,
    "stroke-linecap": n.strokeLinecap,
    "stroke-linejoin": n.strokeLinejoin
  }, null)]);
}), on = nt("copy", !0, function(n) {
  return m("svg", {
    width: n.size,
    height: n.size,
    viewBox: "0 0 48 48",
    fill: "none"
  }, [m("path", {
    d: "M13 12.4316V7.8125C13 6.2592 14.2592 5 15.8125 5H40.1875C41.7408 5 43 6.2592 43 7.8125V32.1875C43 33.7408 41.7408 35 40.1875 35H35.5163",
    stroke: n.colors[0],
    "stroke-width": n.strokeWidth,
    "stroke-linecap": n.strokeLinecap,
    "stroke-linejoin": n.strokeLinejoin
  }, null), m("path", {
    d: "M32.1875 13H7.8125C6.2592 13 5 14.2592 5 15.8125V40.1875C5 41.7408 6.2592 43 7.8125 43H32.1875C33.7408 43 35 41.7408 35 40.1875V15.8125C35 14.2592 33.7408 13 32.1875 13Z",
    fill: n.colors[1],
    stroke: n.colors[0],
    "stroke-width": n.strokeWidth,
    "stroke-linejoin": n.strokeLinejoin
  }, null)]);
}), Fr = nt("delete-four", !1, function(n) {
  return m("svg", {
    width: n.size,
    height: n.size,
    viewBox: "0 0 48 48",
    fill: "none"
  }, [m("path", {
    d: "M8 11L40 11",
    stroke: n.colors[0],
    "stroke-width": n.strokeWidth,
    "stroke-linecap": n.strokeLinecap,
    "stroke-linejoin": n.strokeLinejoin
  }, null), m("path", {
    d: "M18 5L30 5",
    stroke: n.colors[0],
    "stroke-width": n.strokeWidth,
    "stroke-linecap": n.strokeLinecap,
    "stroke-linejoin": n.strokeLinejoin
  }, null), m("path", {
    d: "M12 17H36V40C36 41.6569 34.6569 43 33 43H15C13.3431 43 12 41.6569 12 40V17Z",
    fill: n.colors[1],
    stroke: n.colors[0],
    "stroke-width": n.strokeWidth,
    "stroke-linejoin": n.strokeLinejoin
  }, null)]);
}), Hi = nt("down", !1, function(n) {
  return m("svg", {
    width: n.size,
    height: n.size,
    viewBox: "0 0 48 48",
    fill: "none"
  }, [m("path", {
    d: "M36 18L24 30L12 18",
    stroke: n.colors[0],
    "stroke-width": n.strokeWidth,
    "stroke-linecap": n.strokeLinecap,
    "stroke-linejoin": n.strokeLinejoin
  }, null)]);
}), Vr = nt("download", !1, function(n) {
  return m("svg", {
    width: n.size,
    height: n.size,
    viewBox: "0 0 48 48",
    fill: "none"
  }, [m("path", {
    d: "M6 24.0083V42H42V24",
    stroke: n.colors[0],
    "stroke-width": n.strokeWidth,
    "stroke-linecap": n.strokeLinecap,
    "stroke-linejoin": n.strokeLinejoin
  }, null), m("path", {
    d: "M33 23L24 32L15 23",
    stroke: n.colors[0],
    "stroke-width": n.strokeWidth,
    "stroke-linecap": n.strokeLinecap,
    "stroke-linejoin": n.strokeLinejoin
  }, null), m("path", {
    d: "M23.9917 6V32",
    stroke: n.colors[0],
    "stroke-width": n.strokeWidth,
    "stroke-linecap": n.strokeLinecap,
    "stroke-linejoin": n.strokeLinejoin
  }, null)]);
}), Ur = nt("font-size", !0, function(n) {
  return m("svg", {
    width: n.size,
    height: n.size,
    viewBox: "0 0 48 48",
    fill: "none"
  }, [m("path", {
    d: "M8 10.9333L8 6H40V10.9333",
    stroke: n.colors[0],
    "stroke-width": n.strokeWidth,
    "stroke-linecap": n.strokeLinecap,
    "stroke-linejoin": n.strokeLinejoin
  }, null), m("path", {
    d: "M24 6V42",
    stroke: n.colors[0],
    "stroke-width": n.strokeWidth,
    "stroke-linecap": n.strokeLinecap,
    "stroke-linejoin": n.strokeLinejoin
  }, null), m("path", {
    d: "M16 42H32",
    stroke: n.colors[0],
    "stroke-width": n.strokeWidth,
    "stroke-linecap": n.strokeLinecap,
    "stroke-linejoin": n.strokeLinejoin
  }, null)]);
}), Yr = nt("go-on", !0, function(n) {
  return m("svg", {
    width: n.size,
    height: n.size,
    viewBox: "0 0 48 48",
    fill: "none"
  }, [m("path", {
    d: "M36 7L43 13.4615L36 21",
    stroke: n.colors[0],
    "stroke-width": n.strokeWidth,
    "stroke-linecap": n.strokeLinecap,
    "stroke-linejoin": n.strokeLinejoin
  }, null), m("path", {
    d: "M40 14H17.0062C10.1232 14 4.27787 19.6204 4.00964 26.5C3.72612 33.7696 9.73291 40 17.0062 40H34.0016",
    stroke: n.colors[0],
    "stroke-width": n.strokeWidth,
    "stroke-linecap": n.strokeLinecap,
    "stroke-linejoin": n.strokeLinejoin
  }, null)]);
}), Zr = nt("left", !0, function(n) {
  return m("svg", {
    width: n.size,
    height: n.size,
    viewBox: "0 0 48 48",
    fill: "none"
  }, [m("path", {
    d: "M31 36L19 24L31 12",
    stroke: n.colors[0],
    "stroke-width": n.strokeWidth,
    "stroke-linecap": n.strokeLinecap,
    "stroke-linejoin": n.strokeLinejoin
  }, null)]);
}), Xr = nt("list-numbers", !0, function(n) {
  return m("svg", {
    width: n.size,
    height: n.size,
    viewBox: "0 0 48 48",
    fill: "none"
  }, [m("path", {
    d: "M20 9H42",
    stroke: n.colors[0],
    "stroke-width": n.strokeWidth,
    "stroke-linecap": n.strokeLinecap,
    "stroke-linejoin": n.strokeLinejoin
  }, null), m("path", {
    d: "M20 19H42",
    stroke: n.colors[0],
    "stroke-width": n.strokeWidth,
    "stroke-linecap": n.strokeLinecap,
    "stroke-linejoin": n.strokeLinejoin
  }, null), m("path", {
    d: "M20 29H42",
    stroke: n.colors[0],
    "stroke-width": n.strokeWidth,
    "stroke-linecap": n.strokeLinecap,
    "stroke-linejoin": n.strokeLinejoin
  }, null), m("path", {
    d: "M20 39H42",
    stroke: n.colors[0],
    "stroke-width": n.strokeWidth,
    "stroke-linecap": n.strokeLinecap,
    "stroke-linejoin": n.strokeLinejoin
  }, null), m("path", {
    d: "M6 29H12V32L6 38V39H12",
    stroke: n.colors[0],
    "stroke-width": n.strokeWidth,
    "stroke-linecap": n.strokeLinecap,
    "stroke-linejoin": n.strokeLinejoin
  }, null), m("path", {
    d: "M7 11L9 9V19M9 19H7M9 19H11",
    stroke: n.colors[0],
    "stroke-width": n.strokeWidth,
    "stroke-linecap": n.strokeLinecap,
    "stroke-linejoin": n.strokeLinejoin
  }, null)]);
}), ji = nt("loading", !0, function(n) {
  return m("svg", {
    width: n.size,
    height: n.size,
    viewBox: "0 0 48 48",
    fill: "none"
  }, [m("path", {
    d: "M4 24C4 35.0457 12.9543 44 24 44V44C35.0457 44 44 35.0457 44 24C44 12.9543 35.0457 4 24 4",
    stroke: n.colors[0],
    "stroke-width": n.strokeWidth,
    "stroke-linecap": n.strokeLinecap,
    "stroke-linejoin": n.strokeLinejoin
  }, null), m("path", {
    d: "M36 24C36 17.3726 30.6274 12 24 12C17.3726 12 12 17.3726 12 24C12 30.6274 17.3726 36 24 36V36",
    stroke: n.colors[0],
    "stroke-width": n.strokeWidth,
    "stroke-linecap": n.strokeLinecap,
    "stroke-linejoin": n.strokeLinejoin
  }, null)]);
}), On = nt("magic", !0, function(n) {
  return m("svg", {
    width: n.size,
    height: n.size,
    viewBox: "0 0 48 48",
    fill: "none"
  }, [m("path", {
    d: "M20.1005 8.1005L24.3431 12.3431M30 4V10V4ZM39.8995 8.1005L35.6569 12.3431L39.8995 8.1005ZM44 18H38H44ZM39.8995 27.8995L35.6569 23.6569L39.8995 27.8995ZM30 32V26V32ZM20.1005 27.8995L24.3431 23.6569L20.1005 27.8995ZM16 18H22H16Z",
    stroke: n.colors[0],
    "stroke-width": n.strokeWidth,
    "stroke-linecap": n.strokeLinecap,
    "stroke-linejoin": n.strokeLinejoin
  }, null), m("path", {
    d: "M29.5856 18.4143L5.54395 42.4559",
    stroke: n.colors[0],
    "stroke-width": n.strokeWidth,
    "stroke-linecap": n.strokeLinecap,
    "stroke-linejoin": n.strokeLinejoin
  }, null)]);
}), Ls = nt("minus", !1, function(n) {
  return m("svg", {
    width: n.size,
    height: n.size,
    viewBox: "0 0 48 48",
    fill: "none"
  }, [m("path", {
    d: "M10.5 24L38.5 24",
    stroke: n.colors[0],
    "stroke-width": n.strokeWidth,
    "stroke-linecap": n.strokeLinecap,
    "stroke-linejoin": n.strokeLinejoin
  }, null)]);
}), Gr = nt("more", !1, function(n) {
  return m("svg", {
    width: n.size,
    height: n.size,
    viewBox: "0 0 48 48",
    fill: "none"
  }, [m("circle", {
    cx: "12",
    cy: "24",
    r: "3",
    fill: n.colors[0]
  }, null), m("circle", {
    cx: "24",
    cy: "24",
    r: "3",
    fill: n.colors[0]
  }, null), m("circle", {
    cx: "36",
    cy: "24",
    r: "3",
    fill: n.colors[0]
  }, null)]);
}), Kr = nt("mosaic", !0, function(n) {
  return m("svg", {
    width: n.size,
    height: n.size,
    viewBox: "0 0 48 48",
    fill: "none"
  }, [m("path", {
    d: "M44 36H36V44H44V36Z",
    fill: n.colors[0]
  }, null), m("path", {
    d: "M28 36H20V44H28V36Z",
    fill: n.colors[0]
  }, null), m("path", {
    d: "M12 36H4V44H12V36Z",
    fill: n.colors[0]
  }, null), m("path", {
    d: "M44 20H36V28H44V20Z",
    fill: n.colors[0]
  }, null), m("path", {
    d: "M28 20H20V28H28V20Z",
    fill: n.colors[0]
  }, null), m("path", {
    d: "M12 20H4V28H12V20Z",
    fill: n.colors[0]
  }, null), m("path", {
    d: "M44 4H36V12H44V4Z",
    fill: n.colors[0]
  }, null), m("path", {
    d: "M28 4H20V12H28V4Z",
    fill: n.colors[0]
  }, null), m("path", {
    d: "M12 4H4V12H12V4Z",
    fill: n.colors[0]
  }, null), m("path", {
    d: "M20 12H12V20H20V12Z",
    fill: n.colors[0]
  }, null), m("path", {
    d: "M20 28H12V36H20V28Z",
    fill: n.colors[0]
  }, null), m("path", {
    d: "M36 12H28V20H36V12Z",
    fill: n.colors[0]
  }, null), m("path", {
    d: "M36 28H28V36H36V28Z",
    fill: n.colors[0]
  }, null)]);
}), qr = nt("move-one", !0, function(n) {
  return m("svg", {
    width: n.size,
    height: n.size,
    viewBox: "0 0 48 48",
    fill: "none"
  }, [m("path", {
    d: "M8 6L43 25L24 27L13.9948 44L8 6Z",
    fill: n.colors[1],
    stroke: n.colors[0],
    "stroke-width": n.strokeWidth,
    "stroke-linejoin": n.strokeLinejoin
  }, null)]);
}), Fi = nt("pin", !0, function(n) {
  return m("svg", {
    width: n.size,
    height: n.size,
    viewBox: "0 0 48 48",
    fill: "none"
  }, [m("g", {
    "clip-path": "url(#" + n.id + "1c742167)"
  }, [m("path", {
    d: "M10.6963 17.5042C13.3347 14.8657 16.4701 14.9387 19.8781 16.8076L32.62 9.74509L31.8989 4.78683L43.2126 16.1005L38.2656 15.3907L31.1918 28.1214C32.9752 31.7589 33.1337 34.6647 30.4953 37.3032C30.4953 37.3032 26.235 33.0429 22.7171 29.525L6.44305 41.5564L18.4382 25.2461C14.9202 21.7281 10.6963 17.5042 10.6963 17.5042Z",
    fill: n.colors[1],
    stroke: n.colors[0],
    "stroke-width": n.strokeWidth,
    "stroke-linejoin": n.strokeLinejoin
  }, null)]), m("defs", null, [m("clipPath", {
    id: n.id + "1c742167"
  }, [m("rect", {
    width: "48",
    height: "48",
    fill: n.colors[2]
  }, null)])])]);
}), Vi = nt("platte", !0, function(n) {
  return m("svg", {
    width: n.size,
    height: n.size,
    viewBox: "0 0 48 48",
    fill: "none"
  }, [m("path", {
    d: "M24 44C29.9601 44 26.3359 35.136 30 31C33.1264 27.4709 44 29.0856 44 24C44 12.9543 35.0457 4 24 4C12.9543 4 4 12.9543 4 24C4 35.0457 12.9543 44 24 44Z",
    fill: n.colors[1],
    stroke: n.colors[0],
    "stroke-width": n.strokeWidth,
    "stroke-linejoin": n.strokeLinejoin
  }, null), m("path", {
    d: "M28 17C29.6569 17 31 15.6569 31 14C31 12.3431 29.6569 11 28 11C26.3431 11 25 12.3431 25 14C25 15.6569 26.3431 17 28 17Z",
    fill: n.colors[3],
    stroke: n.colors[2],
    "stroke-width": n.strokeWidth,
    "stroke-linejoin": n.strokeLinejoin
  }, null), m("path", {
    d: "M16 21C17.6569 21 19 19.6569 19 18C19 16.3431 17.6569 15 16 15C14.3431 15 13 16.3431 13 18C13 19.6569 14.3431 21 16 21Z",
    fill: n.colors[3],
    stroke: n.colors[2],
    "stroke-width": n.strokeWidth,
    "stroke-linejoin": n.strokeLinejoin
  }, null), m("path", {
    d: "M17 34C18.6569 34 20 32.6569 20 31C20 29.3431 18.6569 28 17 28C15.3431 28 14 29.3431 14 31C14 32.6569 15.3431 34 17 34Z",
    fill: n.colors[3],
    stroke: n.colors[2],
    "stroke-width": n.strokeWidth,
    "stroke-linejoin": n.strokeLinejoin
  }, null)]);
}), Vn = nt("pushpin", !1, function(n) {
  return m("svg", {
    width: n.size,
    height: n.size,
    viewBox: "0 0 48 48",
    fill: "none"
  }, [m("path", {
    d: "M32 4H16L20 7L16 20C16 20 10 24 10 28H20L24 44L28 28H38C38 24 34 21.1667 32 20L28 7L32 4Z",
    fill: n.colors[1],
    stroke: n.colors[0],
    "stroke-width": n.strokeWidth,
    "stroke-linecap": n.strokeLinecap,
    "stroke-linejoin": n.strokeLinejoin
  }, null)]);
}), Jr = nt("rectangle-one", !1, function(n) {
  return m("svg", {
    width: n.size,
    height: n.size,
    viewBox: "0 0 48 48",
    fill: "none"
  }, [m("path", {
    d: "M42 8H6C4.89543 8 4 8.89543 4 10V38C4 39.1046 4.89543 40 6 40H42C43.1046 40 44 39.1046 44 38V10C44 8.89543 43.1046 8 42 8Z",
    fill: n.colors[1],
    stroke: n.colors[0],
    "stroke-width": n.strokeWidth
  }, null)]);
}), Qr = nt("redo", !0, function(n) {
  return m("svg", {
    width: n.size,
    height: n.size,
    viewBox: "0 0 48 48",
    fill: "none"
  }, [m("path", {
    d: "M36.7279 36.7279C33.4706 39.9853 28.9706 42 24 42C14.0589 42 6 33.9411 6 24C6 14.0589 14.0589 6 24 6C28.9706 6 33.4706 8.01472 36.7279 11.2721C38.3859 12.9301 42 17 42 17",
    stroke: n.colors[0],
    "stroke-width": n.strokeWidth,
    "stroke-linecap": n.strokeLinecap,
    "stroke-linejoin": n.strokeLinejoin
  }, null), m("path", {
    d: "M42 8V17H33",
    stroke: n.colors[0],
    "stroke-width": n.strokeWidth,
    "stroke-linecap": n.strokeLinecap,
    "stroke-linejoin": n.strokeLinejoin
  }, null)]);
}), tl = nt("return", !0, function(n) {
  return m("svg", {
    width: n.size,
    height: n.size,
    viewBox: "0 0 48 48",
    fill: "none"
  }, [m("path", {
    d: "M12.9998 8L6 14L12.9998 21",
    stroke: n.colors[0],
    "stroke-width": n.strokeWidth,
    "stroke-linecap": n.strokeLinecap,
    "stroke-linejoin": n.strokeLinejoin
  }, null), m("path", {
    d: "M6 14H28.9938C35.8768 14 41.7221 19.6204 41.9904 26.5C42.2739 33.7696 36.2671 40 28.9938 40H11.9984",
    stroke: n.colors[0],
    "stroke-width": n.strokeWidth,
    "stroke-linecap": n.strokeLinecap,
    "stroke-linejoin": n.strokeLinejoin
  }, null)]);
}), el = nt("right", !0, function(n) {
  return m("svg", {
    width: n.size,
    height: n.size,
    viewBox: "0 0 48 48",
    fill: "none"
  }, [m("path", {
    d: "M19 12L31 24L19 36",
    stroke: n.colors[0],
    "stroke-width": n.strokeWidth,
    "stroke-linecap": n.strokeLinecap,
    "stroke-linejoin": n.strokeLinejoin
  }, null)]);
}), nl = nt("round", !1, function(n) {
  return m("svg", {
    width: n.size,
    height: n.size,
    viewBox: "0 0 48 48",
    fill: "none"
  }, [m("circle", {
    cx: "24",
    cy: "24",
    r: "20",
    fill: n.colors[1],
    stroke: n.colors[0],
    "stroke-width": n.strokeWidth
  }, null)]);
}), Ui = nt("save", !0, function(n) {
  return m("svg", {
    width: n.size,
    height: n.size,
    viewBox: "0 0 48 48",
    fill: "none"
  }, [m("path", {
    d: "M6 9C6 7.34315 7.34315 6 9 6H34.2814L42 13.2065V39C42 40.6569 40.6569 42 39 42H9C7.34315 42 6 40.6569 6 39V9Z",
    fill: n.colors[1],
    stroke: n.colors[0],
    "stroke-width": n.strokeWidth,
    "stroke-linejoin": n.strokeLinejoin
  }, null), m("path", {
    "fill-rule": "evenodd",
    "clip-rule": "evenodd",
    d: "M24.0083 6L24 13.3846C24 13.7245 23.5523 14 23 14H15C14.4477 14 14 13.7245 14 13.3846L14 6",
    fill: n.colors[3]
  }, null), m("path", {
    d: "M24.0083 6L24 13.3846C24 13.7245 23.5523 14 23 14H15C14.4477 14 14 13.7245 14 13.3846L14 6H24.0083Z",
    stroke: n.colors[2],
    "stroke-width": n.strokeWidth,
    "stroke-linejoin": n.strokeLinejoin
  }, null), m("path", {
    d: "M9 6H34.2814",
    stroke: n.colors[0],
    "stroke-width": n.strokeWidth,
    "stroke-linecap": n.strokeLinecap,
    "stroke-linejoin": n.strokeLinejoin
  }, null), m("path", {
    d: "M14 26H34",
    stroke: n.colors[2],
    "stroke-width": n.strokeWidth,
    "stroke-linecap": n.strokeLinecap,
    "stroke-linejoin": n.strokeLinejoin
  }, null), m("path", {
    d: "M14 34H24.0083",
    stroke: n.colors[2],
    "stroke-width": n.strokeWidth,
    "stroke-linecap": n.strokeLinecap,
    "stroke-linejoin": n.strokeLinejoin
  }, null)]);
}), il = nt("square", !1, function(n) {
  return m("svg", {
    width: n.size,
    height: n.size,
    viewBox: "0 0 48 48",
    fill: "none"
  }, [m("path", {
    d: "M39 6H9C7.34315 6 6 7.34315 6 9V39C6 40.6569 7.34315 42 9 42H39C40.6569 42 42 40.6569 42 39V9C42 7.34315 40.6569 6 39 6Z",
    fill: n.colors[1],
    stroke: n.colors[0],
    "stroke-width": n.strokeWidth
  }, null)]);
}), Un = nt("text-recognition", !1, function(n) {
  return m("svg", {
    width: n.size,
    height: n.size,
    viewBox: "0 0 48 48",
    fill: "none"
  }, [m("path", {
    d: "M6 33V39C6 40.6569 7.34315 42 9 42H15",
    stroke: n.colors[0],
    "stroke-width": n.strokeWidth,
    "stroke-linecap": n.strokeLinecap,
    "stroke-linejoin": n.strokeLinejoin
  }, null), m("path", {
    d: "M33 42H39C40.6569 42 42 40.6569 42 39V33",
    stroke: n.colors[0],
    "stroke-width": n.strokeWidth,
    "stroke-linecap": n.strokeLinecap,
    "stroke-linejoin": n.strokeLinejoin
  }, null), m("path", {
    d: "M42 15V9C42 7.34315 40.6569 6 39 6H33",
    stroke: n.colors[0],
    "stroke-width": n.strokeWidth,
    "stroke-linecap": n.strokeLinecap,
    "stroke-linejoin": n.strokeLinejoin
  }, null), m("path", {
    d: "M6 15V9C6 7.34315 7.34315 6 9 6H15",
    stroke: n.colors[0],
    "stroke-width": n.strokeWidth,
    "stroke-linecap": n.strokeLinecap,
    "stroke-linejoin": n.strokeLinejoin
  }, null), m("path", {
    d: "M24 15V35",
    stroke: n.colors[0],
    "stroke-width": n.strokeWidth,
    "stroke-linecap": n.strokeLinecap,
    "stroke-linejoin": n.strokeLinejoin
  }, null), m("path", {
    d: "M17 15H24H31",
    stroke: n.colors[0],
    "stroke-width": n.strokeWidth,
    "stroke-linecap": n.strokeLinecap,
    "stroke-linejoin": n.strokeLinejoin
  }, null)]);
}), Ps = nt("translate", !0, function(n) {
  return m("svg", {
    width: n.size,
    height: n.size,
    viewBox: "0 0 48 48",
    fill: "none"
  }, [m("path", {
    d: "M28.2857 37H39.7143M42 42L39.7143 37L42 42ZM26 42L28.2857 37L26 42ZM28.2857 37L34 24L39.7143 37H28.2857Z",
    stroke: n.colors[0],
    "stroke-width": n.strokeWidth,
    "stroke-linecap": n.strokeLinecap,
    "stroke-linejoin": n.strokeLinejoin
  }, null), m("path", {
    d: "M16 6L17 9",
    stroke: n.colors[0],
    "stroke-width": n.strokeWidth,
    "stroke-linecap": n.strokeLinecap,
    "stroke-linejoin": n.strokeLinejoin
  }, null), m("path", {
    d: "M6 11H28",
    stroke: n.colors[0],
    "stroke-width": n.strokeWidth,
    "stroke-linecap": n.strokeLinecap,
    "stroke-linejoin": n.strokeLinejoin
  }, null), m("path", {
    d: "M10 16C10 16 11.7895 22.2609 16.2632 25.7391C20.7368 29.2174 28 32 28 32",
    stroke: n.colors[0],
    "stroke-width": n.strokeWidth,
    "stroke-linecap": n.strokeLinecap,
    "stroke-linejoin": n.strokeLinejoin
  }, null), m("path", {
    d: "M24 11C24 11 22.2105 19.2174 17.7368 23.7826C13.2632 28.3478 6 32 6 32",
    stroke: n.colors[0],
    "stroke-width": n.strokeWidth,
    "stroke-linecap": n.strokeLinecap,
    "stroke-linejoin": n.strokeLinejoin
  }, null)]);
}), sl = nt("write", !0, function(n) {
  return m("svg", {
    width: n.size,
    height: n.size,
    viewBox: "0 0 48 48",
    fill: "none"
  }, [m("path", {
    d: "M5.32497 43.4996L13.81 43.4998L44.9227 12.3871L36.4374 3.90186L5.32471 35.0146L5.32497 43.4996Z",
    fill: n.colors[1],
    stroke: n.colors[0],
    "stroke-width": n.strokeWidth,
    "stroke-linejoin": n.strokeLinejoin
  }, null), m("path", {
    d: "M27.9521 12.3872L36.4374 20.8725",
    stroke: n.colors[0],
    "stroke-width": n.strokeWidth,
    "stroke-linecap": n.strokeLinecap,
    "stroke-linejoin": n.strokeLinejoin
  }, null)]);
}), ol = { class: "toolbar-panel first-panel" }, al = { class: "tool-section" }, rl = ["onClick", "title", "aria-pressed"], ll = { class: "action-section" }, cl = ["disabled", "title"], hl = ["disabled", "title"], ul = ["disabled", "title"], dl = ["title"], gl = ["title"], fl = ["title"], ml = {
  key: 0,
  class: "toolbar-panel second-panel"
}, pl = { class: "style-section" }, wl = {
  key: 0,
  class: "style-group opacity-group"
}, yl = { class: "style-label" }, vl = ["value", "title", "aria-label"], xl = { class: "style-value" }, kl = {
  key: 1,
  class: "style-group"
}, bl = { class: "style-label" }, Sl = { class: "line-width-selector" }, Ml = ["onClick", "title", "aria-pressed"], Cl = { class: "style-value" }, _l = {
  key: 2,
  class: "style-divider"
}, Tl = {
  key: 3,
  class: "style-group opacity-group"
}, zl = { class: "style-label" }, Rl = ["value", "title", "aria-label"], Ll = { class: "style-value" }, Pl = {
  key: 4,
  class: "style-divider"
}, Al = {
  key: 5,
  class: "style-group color-picker-group"
}, Dl = { class: "style-label" }, Il = { class: "color-row" }, Ol = ["onClick", "title", "aria-pressed"], El = { class: "custom-color-wrapper" }, $l = ["title"], Wl = ["value", "title", "aria-label"], Bl = {
  key: 6,
  class: "style-group"
}, Nl = { class: "style-label" }, Hl = { class: "text-size-selector" }, jl = ["onClick", "title", "aria-pressed"], Fl = { class: "style-value" }, Vl = {
  key: 7,
  class: "style-group"
}, Ul = { class: "style-label" }, Yl = { class: "mosaic-size-selector" }, Zl = ["onClick", "title", "aria-pressed"], Xl = { class: "style-value" }, Gl = {
  key: 8,
  class: "style-group"
}, Kl = { class: "style-label" }, ql = { class: "translate-engine-selector" }, Jl = ["onClick", "title", "aria-pressed"], Ql = /* @__PURE__ */ _t({
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
    const i = W(null), { t: s } = us(), o = n, a = e, r = E(() => [
      { type: f.Select, icon: qr, title: s("screenshot.select") },
      { type: f.Rectangle, icon: Jr, title: s("screenshot.rectangle") },
      { type: f.Ellipse, icon: nl, title: s("screenshot.ellipse") },
      { type: f.Line, icon: Ls, title: s("screenshot.line") },
      { type: f.Arrow, icon: jr, title: s("screenshot.arrow") },
      { type: f.Pen, icon: sl, title: s("screenshot.pen") },
      { type: f.Mosaic, icon: Kr, title: s("screenshot.mosaic") },
      { type: f.Text, icon: Ur, title: s("screenshot.text") },
      { type: f.Marker, icon: Xr, title: s("screenshot.marker") },
      { type: f.ColorPicker, icon: Vi, title: s("screenshot.colorPicker") },
      { type: f.Ocr, icon: Un, title: s("screenshot.ocr") },
      { type: f.Translate, icon: Ps, title: s("screenshot.translate") },
      { type: f.Pin, icon: Vn, title: s("screenshot.pin") }
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
    ), p = E(
      () => [f.Rectangle, f.Ellipse, f.Line, f.Arrow, f.Pen, f.Text, f.Marker].includes(o.currentTool)
    ), z = E(
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
    ), C = E(() => o.currentTool === f.Mosaic), B = E(() => o.currentTool === f.Translate), Y = (I) => a("tool-select", I), Z = (I) => a("color-change", I), N = (I) => a("line-width-change", I), j = (I) => {
      a("opacity-change", Number(I.target.value) / 100);
    }, q = (I) => a("text-size-change", I), X = (I) => a("mosaic-size-change", I), G = (I) => {
      a(
        "selection-corner-radius-change",
        Number(I.target.value)
      );
    }, ot = () => a("undo"), it = () => a("redo"), kt = () => a("delete"), at = () => a("save"), U = () => a("confirm"), Q = () => a("cancel"), rt = (I) => {
      a("translate-engine-change", I);
    }, ft = (I) => {
      Z(I);
    }, lt = (I) => {
      const yt = I.target;
      yt.value && Z(yt.value);
    }, dt = () => {
      const I = i.value?.getBoundingClientRect();
      return {
        width: I?.width ?? 590,
        height: I?.height ?? 50
      };
    };
    return Xe(() => o.currentTool, () => {
      me(() => {
        window.dispatchEvent(new CustomEvent("screenshot-toolbar-resize", {
          detail: dt()
        }));
      });
    }, { immediate: !0 }), t({
      getToolbarSize: dt
    }), (I, yt) => (L(), O(
      "div",
      {
        ref_key: "toolbarContainerRef",
        ref: i,
        class: "toolbar-container"
      },
      [
        V(" 第一个面板：工具选择 + 操作按钮 "),
        y("div", ol, [
          V(" 工具选择区域 "),
          y("div", al, [
            (L(!0), O(
              Nt,
              null,
              Kt(r.value, (F) => (L(), O("button", {
                key: F.type,
                onClick: (mt) => Y(F.type),
                class: et(["tool-btn", { active: I.currentTool === F.type }]),
                title: F.title,
                "aria-pressed": I.currentTool === F.type
              }, [
                (L(), xt(ae(F.icon), {
                  theme: "outline",
                  size: "18",
                  strokeWidth: 2.5
                }))
              ], 10, rl))),
              128
              /* KEYED_FRAGMENT */
            ))
          ]),
          V(" 分隔线 "),
          yt[0] || (yt[0] = y(
            "div",
            { class: "toolbar-divider" },
            null,
            -1
            /* HOISTED */
          )),
          V(" 操作按钮区域 "),
          y("div", ll, [
            y("button", {
              onClick: ot,
              disabled: !I.canUndo,
              class: "action-btn undo",
              title: M(s)("screenshot.undo")
            }, [
              m(M(tl), {
                theme: "outline",
                size: "18",
                strokeWidth: 2.5
              })
            ], 8, cl),
            y("button", {
              onClick: it,
              disabled: !I.canRedo,
              class: "action-btn redo",
              title: M(s)("screenshot.redo")
            }, [
              m(M(Yr), {
                theme: "outline",
                size: "18",
                strokeWidth: 2.5
              })
            ], 8, hl),
            y("button", {
              onClick: kt,
              disabled: !I.canDelete,
              class: "action-btn delete",
              title: M(s)("screenshot.delete")
            }, [
              m(M(Fr), {
                theme: "outline",
                size: "18",
                strokeWidth: 2.5
              })
            ], 8, ul),
            y("button", {
              onClick: Q,
              class: "action-btn cancel",
              title: M(s)("screenshot.cancel")
            }, [
              m(M(Fn), {
                theme: "outline",
                size: "18",
                strokeWidth: 2.5
              })
            ], 8, dl),
            y("button", {
              onClick: at,
              class: "action-btn save",
              title: M(s)("screenshot.save")
            }, [
              m(M(Vr), {
                theme: "outline",
                size: "18",
                strokeWidth: 2.5
              })
            ], 8, gl),
            y("button", {
              onClick: U,
              class: "action-btn confirm",
              title: M(s)("screenshot.confirm")
            }, [
              m(M(dn), {
                theme: "outline",
                size: "18",
                strokeWidth: 2.5
              })
            ], 8, fl)
          ])
        ]),
        V(" 第二个面板：样式设置区域 "),
        v.value ? (L(), O("div", ml, [
          y("div", pl, [
            S.value ? (L(), O("div", wl, [
              y(
                "span",
                yl,
                H(M(s)("screenshot.cornerRadius")),
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
                style: ut({
                  "--opacity-color": "#2e90fa",
                  "--opacity-progress": `${I.currentSelectionCornerRadius / 80 * 100}%`
                }),
                title: `${I.currentSelectionCornerRadius}px`,
                "aria-label": M(s)("screenshot.cornerRadius"),
                onInput: G
              }, null, 44, vl),
              y(
                "span",
                xl,
                H(I.currentSelectionCornerRadius) + " px",
                1
                /* TEXT */
              )
            ])) : V("v-if", !0),
            V(" 线宽设置 "),
            g.value ? (L(), O("div", kl, [
              y(
                "span",
                bl,
                H(M(s)("screenshot.lineWidth")),
                1
                /* TEXT */
              ),
              y("div", Sl, [
                (L(), O(
                  Nt,
                  null,
                  Kt(c, (F) => y("button", {
                    key: F,
                    onClick: (mt) => N(F),
                    class: et(["width-btn", { active: I.currentLineWidth === F }]),
                    title: `${F}px`,
                    "aria-pressed": I.currentLineWidth === F
                  }, [
                    y(
                      "span",
                      {
                        class: "line-preview",
                        style: ut({ height: `${F}px`, backgroundColor: I.currentColor })
                      },
                      null,
                      4
                      /* STYLE */
                    )
                  ], 10, Ml)),
                  64
                  /* STABLE_FRAGMENT */
                ))
              ]),
              y(
                "span",
                Cl,
                H(I.currentLineWidth) + " px",
                1
                /* TEXT */
              )
            ])) : V("v-if", !0),
            g.value && p.value ? (L(), O("div", _l)) : V("v-if", !0),
            V(" 不透明度设置 "),
            z.value ? (L(), O("div", Tl, [
              y(
                "span",
                zl,
                H(M(s)("screenshot.opacity")),
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
                style: ut({
                  "--opacity-color": I.currentColor,
                  "--opacity-progress": `${Math.round(I.currentOpacity * 100)}%`
                }),
                title: `${Math.round(I.currentOpacity * 100)}%`,
                "aria-label": M(s)("screenshot.opacity"),
                onInput: j
              }, null, 44, Rl),
              y(
                "span",
                Ll,
                H(Math.round(I.currentOpacity * 100)) + "%",
                1
                /* TEXT */
              )
            ])) : V("v-if", !0),
            z.value && p.value ? (L(), O("div", Pl)) : V("v-if", !0),
            V(" 颜色设置 "),
            p.value ? (L(), O("div", Al, [
              y(
                "span",
                Dl,
                H(M(s)("screenshot.color")),
                1
                /* TEXT */
              ),
              y("div", Il, [
                (L(), O(
                  Nt,
                  null,
                  Kt(u, (F) => y("button", {
                    key: F,
                    onClick: (mt) => ft(F),
                    class: et(["color-btn", { active: I.currentColor === F }]),
                    style: ut({ backgroundColor: F }),
                    title: F,
                    "aria-pressed": I.currentColor === F
                  }, null, 14, Ol)),
                  64
                  /* STABLE_FRAGMENT */
                )),
                y("div", El, [
                  y("button", {
                    class: et(["color-btn custom-color-btn", { active: !u.includes(I.currentColor) }]),
                    title: M(s)("screenshot.customColor")
                  }, [
                    m(M(Vi), {
                      theme: "outline",
                      size: "13",
                      strokeWidth: 2.5
                    })
                  ], 10, $l),
                  y("input", {
                    type: "color",
                    onChange: lt,
                    value: I.currentColor,
                    class: "color-input-hidden",
                    title: M(s)("screenshot.customColor"),
                    "aria-label": M(s)("screenshot.customColor")
                  }, null, 40, Wl)
                ])
              ])
            ])) : V("v-if", !0),
            V(" 文字大小设置 "),
            A.value ? (L(), O("div", Bl, [
              y(
                "span",
                Nl,
                H(M(s)("screenshot.fontSize")),
                1
                /* TEXT */
              ),
              y("div", Hl, [
                (L(), O(
                  Nt,
                  null,
                  Kt(d, (F) => y("button", {
                    key: F,
                    onClick: (mt) => q(F),
                    class: et(["size-btn", { active: I.currentTextSize === F }]),
                    title: `${F}px`,
                    "aria-pressed": I.currentTextSize === F
                  }, [
                    y(
                      "span",
                      {
                        class: "size-text",
                        style: ut({ fontSize: `${Math.min(F, 18)}px` })
                      },
                      "A",
                      4
                      /* STYLE */
                    )
                  ], 10, jl)),
                  64
                  /* STABLE_FRAGMENT */
                ))
              ]),
              y(
                "span",
                Fl,
                H(I.currentTextSize) + " px",
                1
                /* TEXT */
              )
            ])) : V("v-if", !0),
            V(" 马赛克大小设置 "),
            C.value ? (L(), O("div", Vl, [
              y(
                "span",
                Ul,
                H(M(s)("screenshot.mosaicSize")),
                1
                /* TEXT */
              ),
              y("div", Yl, [
                (L(), O(
                  Nt,
                  null,
                  Kt(w, (F) => y("button", {
                    key: F,
                    onClick: (mt) => X(F),
                    class: et(["size-btn", { active: I.currentMosaicSize === F }]),
                    title: `${M(s)("screenshot.brush")} ${F * 3}px`,
                    "aria-pressed": I.currentMosaicSize === F
                  }, [
                    y(
                      "span",
                      {
                        class: "mosaic-preview",
                        style: ut({
                          width: `${Math.min(F * 1.25, 18)}px`,
                          height: `${Math.min(F * 1.25, 18)}px`
                        })
                      },
                      null,
                      4
                      /* STYLE */
                    )
                  ], 10, Zl)),
                  64
                  /* STABLE_FRAGMENT */
                ))
              ]),
              y(
                "span",
                Xl,
                H(I.currentMosaicSize * 3) + " px",
                1
                /* TEXT */
              )
            ])) : V("v-if", !0),
            V(" 翻译引擎选择 "),
            B.value ? (L(), O("div", Gl, [
              y(
                "span",
                Kl,
                H(M(s)("screenshot.engine")),
                1
                /* TEXT */
              ),
              y("div", ql, [
                (L(!0), O(
                  Nt,
                  null,
                  Kt(l.value, (F) => (L(), O("button", {
                    key: F.value,
                    onClick: (mt) => rt(F.value),
                    class: et(["engine-btn", { active: I.currentTranslateEngine === F.value }]),
                    title: F.label,
                    "aria-pressed": I.currentTranslateEngine === F.value
                  }, H(F.short), 11, Jl))),
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
}), qe = (n, t) => {
  const e = n.__vccOpts || n;
  for (const [i, s] of t)
    e[i] = s;
  return e;
}, tc = /* @__PURE__ */ qe(Ql, [["__scopeId", "data-v-afb70887"]]), ec = {
  class: "screenshot-container",
  ref: "containerRef"
}, nc = {
  key: 0,
  class: "mask-layers"
}, ic = {
  key: 1,
  class: "mask-full"
}, sc = { class: "size-text" }, oc = {
  key: 4,
  class: "loading-overlay"
}, ac = /* @__PURE__ */ _t({
  __name: "index",
  setup(n) {
    const t = W(), e = W(), i = W(null), s = W(null);
    let o = null;
    const a = W(!0), r = W(!1), l = W(""), c = W({ x: 0, y: 0 }), u = W(16), d = W(!1), w = W("bing"), v = W({ width: 590, height: 50 });
    let S = !1, g = null;
    const p = W({
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
    }), z = W(), A = W(), C = E(() => p.value.isDrawing), B = E(() => {
      if (!p.value.selectionRect) return {};
      const { y: x } = p.value.selectionRect;
      return {
        top: "0",
        left: "0",
        right: "0",
        height: `${x}px`
      };
    }), Y = E(() => {
      if (!p.value.selectionRect) return {};
      const { y: x, height: $ } = p.value.selectionRect;
      return {
        top: `${x + $}px`,
        left: "0",
        right: "0",
        bottom: "0"
      };
    }), Z = E(() => {
      if (!p.value.selectionRect) return {};
      const { x, y: $, height: ht } = p.value.selectionRect;
      return {
        top: `${$}px`,
        left: "0",
        width: `${x}px`,
        height: `${ht}px`
      };
    }), N = E(() => {
      if (!p.value.selectionRect) return {};
      const { x, y: $, width: ht, height: gt } = p.value.selectionRect;
      return {
        top: `${$}px`,
        left: `${x + ht}px`,
        right: "0",
        height: `${gt}px`
      };
    }), j = E(() => {
      if (!p.value.selectionRect) return {};
      const { x, y: $, width: ht, height: gt } = p.value.selectionRect, J = 10, pt = 12, Et = Math.min(v.value.width, Math.max(0, window.innerWidth - J * 2)), At = Math.min(v.value.height, Math.max(0, window.innerHeight - J * 2)), Ie = Math.max(J, window.innerHeight - At - J), ne = Math.max(J, window.innerWidth - Et - J);
      let jt;
      return $ + gt + At + pt <= window.innerHeight - J ? jt = $ + gt + pt : $ - At - pt >= J ? jt = $ - At - pt : jt = $ + gt - At - J, jt = Math.min(Math.max(jt, J), Ie), {
        left: `${Math.min(Math.max(x + (ht - Et) / 2, J), ne)}px`,
        top: `${jt}px`
      };
    }), q = E(() => {
      if (!p.value.selectionRect) return {};
      const { x, y: $, width: ht, height: gt } = p.value.selectionRect, J = 10;
      let pt = x - J, Et = $ - J, At = "translateY(-100%)";
      return pt < 10 && (pt = x + ht + J, At = "translateY(-100%)"), Et < 30 && (Et = $ + gt + J, At = "translateY(0)"), {
        left: `${pt}px`,
        top: `${Et}px`,
        transform: At
      };
    }), X = E(() => {
      if (!p.value.selectionRect) return "";
      const { width: x, height: $ } = p.value.selectionRect;
      return `${Math.round(x)} × ${Math.round($)}`;
    }), G = E(
      () => g?.getData().style.color || p.value.currentStyle.color
    ), ot = E(() => {
      const x = g?.getData().type === f.Marker ? Nn(c.value, u.value) : Ce(c.value);
      return {
        "--text-accent-color": G.value,
        left: `${x.x}px`,
        top: `${x.y}px`
      };
    }), it = (x) => {
      if (x === f.Pin && p.value.selectionRect) {
        kt();
        return;
      }
      if (x === f.Ocr && p.value.selectionRect) {
        at();
        return;
      }
      o?.setTool(x);
    }, kt = async () => {
      try {
        await o?.createPinWindow();
      } catch (x) {
        D.error("[截图] 创建贴图失败", x);
      }
    }, at = async () => {
      try {
        await o?.createOcrPinWindow();
      } catch (x) {
        D.error("[截图] 创建文字识别贴图失败", x);
      }
    }, U = (x) => {
      o?.updateStyle({ color: x });
    }, Q = (x) => {
      o?.updateStyle({ lineWidth: x });
    }, rt = (x) => {
      o?.updateStyle({ opacity: x });
    }, ft = (x) => {
      o?.updateTextSize(x);
    }, lt = (x) => {
      o?.updateMosaicSize(x);
    }, dt = (x) => {
      o?.updateSelectionCornerRadius(x);
    }, I = (x) => {
      w.value = x, o?.setTranslationEngine(x), o?.executeTranslation();
    }, yt = () => {
      o?.undoAnnotation();
    }, F = () => {
      o?.redoAnnotation();
    }, mt = () => {
      o?.deleteSelectedAnnotation();
    }, vt = async () => {
      try {
        await o?.processScreenshot("save"), ct();
      } catch (x) {
        const $ = x?.message || x?.toString() || "保存失败";
        if ($.includes("保存已取消") || $.includes("cancelled"))
          return;
        D.error("保存截图时发生错误", $);
      }
    }, Rt = async () => {
      try {
        await o?.processScreenshot("copy"), ct();
      } catch {
      }
    }, Dt = () => {
      ct();
    }, be = (x, $) => {
      if ($ && [f.Text, f.Marker].includes($.getData().type)) {
        const ht = $.getData();
        c.value = {
          x: ht.points[0].x,
          y: ht.points[0].y
        }, u.value = ht.fontSize || p.value.textSize;
      } else
        c.value = x, u.value = p.value.textSize;
      r.value = !0, g = $ || null, $ && o?.setEditingAnnotation($), $ && $.getData().text ? l.value = $.getData().text || "" : l.value = "", me(() => {
        e.value?.focus(), g && e.value?.select();
      });
    }, ee = () => {
      const x = g?.getData().type === f.Marker;
      l.value.trim() || x ? g ? o?.updateTextAnnotation(g, l.value.trim()) : o?.createTextAnnotation(c.value, l.value) : g && o?.deleteAnnotation(g), _();
    }, _ = () => {
      r.value = !1, l.value = "", g && o?.clearEditingAnnotation(), g = null;
    }, tt = (x) => {
      navigator.clipboard && navigator.clipboard.writeText(x.hex).catch(($) => {
        D.error("[截图] 复制颜色到剪贴板失败", $);
      });
    }, St = (x) => {
      if (x.key === "Meta" || x.key === "Win" || x.altKey && x.key === "Tab" || x.altKey && x.key === "F4") {
        x.preventDefault(), x.stopPropagation();
        return;
      }
      if (r.value && document.activeElement === e.value) {
        if (x.key === "Escape") {
          _(), x.preventDefault();
          return;
        }
        if (x.key === "Enter") {
          ee(), x.preventDefault();
          return;
        }
        if (x.key === "Tab") {
          x.preventDefault();
          return;
        }
        return;
      }
      if (!p.value.selectionRect) {
        if (x.key === "Escape") {
          ct();
          return;
        }
        x.preventDefault(), x.stopPropagation();
        return;
      }
      if (o?.handleKeyDown(x)) {
        x.preventDefault();
        return;
      }
      const $ = navigator.platform.toLowerCase().includes("mac");
      if (($ ? x.metaKey : x.ctrlKey) && x.key.toLowerCase() === "z") {
        x.shiftKey ? F() : yt(), x.preventDefault();
        return;
      }
      if (!$ && x.ctrlKey && x.key.toLowerCase() === "y") {
        F(), x.preventDefault();
        return;
      }
      if (x.key === "Escape") {
        ct();
        return;
      } else if (x.key === "Delete" || x.key === "Backspace") {
        mt(), x.preventDefault();
        return;
      }
      ["Shift", "Control", "Alt", "Meta"].includes(x.key) || x.preventDefault();
    }, ct = async () => {
      if (!S) {
        S = !0, o?.destroy(), o = null;
        try {
          await b("cleanup_screenshot_resources");
        } catch {
          try {
            await b("clear_screenshot_background");
          } catch ($) {
            D.error("[截图] 清理后台缓存失败", $);
          }
        }
        p.value = {
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
        } catch (x) {
          D.error("[截图] 销毁截图窗口失败，回退到 close()", x), await s.value?.close();
        } finally {
          S = !1;
        }
      }
    }, Lt = () => {
      const x = o?.getState();
      x && (p.value = x);
    }, Mt = () => {
      const x = i.value?.getToolbarSize?.();
      x && (v.value = x);
    }, Zt = (x) => {
      const $ = x.detail;
      $ && (v.value = $);
    };
    return Ge(async () => {
      if (t.value) {
        s.value = new Ke("screenshot"), o = new $r(
          t.value,
          Lt,
          be,
          tt
        ), document.addEventListener("keydown", St), window.addEventListener("resize", Mt), window.addEventListener("screenshot-toolbar-resize", Zt), A.value = await wn("screenshot-close-requested", () => {
          ct();
        }), z.value = await wn("tauri://blur", () => {
          if (r.value && document.activeElement === e.value)
            return;
          const x = o?.getTranslationState();
          x?.isLoading || x?.isVisible || setTimeout(() => {
            if (!r.value || document.activeElement !== e.value) {
              const $ = o?.getTranslationState();
              if ($?.isLoading || $?.isVisible)
                return;
              ct();
            }
          }, 100);
        }), await me(), Mt(), await s.value.emit("screenshot_ready");
        try {
          const x = await b("get_translation_engine");
          x && ["google", "bing", "offline", "local-ai"].includes(x) && (w.value = x, o?.setTranslationEngine(x));
        } catch (x) {
          D.error("[截图] 获取翻译引擎设置失败", x);
        }
        try {
          const x = await b("get_offline_model_activated");
          o?.setOfflineModelActivated(x);
        } catch (x) {
          D.error("[截图] 获取离线模型激活状态失败", x);
        }
      }
    }), qn(() => {
      o?.destroy(), o = null, document.removeEventListener("keydown", St), window.removeEventListener("resize", Mt), window.removeEventListener("screenshot-toolbar-resize", Zt), z.value?.(), A.value?.(), z.value = void 0, A.value = void 0, s.value = null;
    }), (x, $) => (L(), O(
      "div",
      ec,
      [
        V(" 遮罩层 "),
        p.value.selectionRect ? (L(), O("div", nc, [
          y(
            "div",
            {
              class: "mask-top",
              style: ut(B.value)
            },
            null,
            4
            /* STYLE */
          ),
          y(
            "div",
            {
              class: "mask-bottom",
              style: ut(Y.value)
            },
            null,
            4
            /* STYLE */
          ),
          y(
            "div",
            {
              class: "mask-left",
              style: ut(Z.value)
            },
            null,
            4
            /* STYLE */
          ),
          y(
            "div",
            {
              class: "mask-right",
              style: ut(N.value)
            },
            null,
            4
            /* STYLE */
          )
        ])) : (L(), O("div", ic)),
        V(" 画布 "),
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
        V(" 尺寸信息 "),
        p.value.selectionRect && a.value ? (L(), O(
          "div",
          {
            key: 2,
            class: "size-info",
            style: ut(q.value)
          },
          [
            y(
              "span",
              sc,
              H(X.value),
              1
              /* TEXT */
            )
          ],
          4
          /* STYLE */
        )) : V("v-if", !0),
        V(" 工具栏 "),
        p.value.selectionRect && !C.value ? (L(), xt(tc, {
          key: 3,
          ref_key: "toolbarRef",
          ref: i,
          style: ut(j.value),
          class: "toolbar",
          "current-tool": p.value.currentTool,
          "current-color": p.value.currentStyle.color,
          "current-line-width": p.value.currentStyle.lineWidth,
          "current-opacity": p.value.currentStyle.opacity,
          "current-text-size": p.value.textSize,
          "current-mosaic-size": p.value.mosaicSize,
          "current-selection-corner-radius": p.value.selectionCornerRadius,
          "can-undo": p.value.hasAnnotations,
          "can-redo": p.value.canRedo,
          "can-delete": !!p.value.selectedAnnotation,
          "current-translate-engine": w.value,
          onToolSelect: it,
          onColorChange: U,
          onLineWidthChange: Q,
          onOpacityChange: rt,
          onTextSizeChange: ft,
          onMosaicSizeChange: lt,
          onSelectionCornerRadiusChange: dt,
          onTranslateEngineChange: I,
          onUndo: yt,
          onRedo: F,
          onDelete: mt,
          onSave: vt,
          onConfirm: Rt,
          onCancel: Dt
        }, null, 8, ["style", "current-tool", "current-color", "current-line-width", "current-opacity", "current-text-size", "current-mosaic-size", "current-selection-corner-radius", "can-undo", "can-redo", "can-delete", "current-translate-engine"])) : V("v-if", !0),
        V(" 加载提示 - 仅在初始化时显示 "),
        d.value ? (L(), O("div", oc, [
          $[1] || ($[1] = y(
            "div",
            { class: "loading-spinner" },
            null,
            -1
            /* HOISTED */
          )),
          y(
            "p",
            null,
            H(x.$t("screenshotTool.loading")),
            1
            /* TEXT */
          )
        ])) : V("v-if", !0),
        V(" 文字输入框 "),
        r.value ? (L(), O(
          "div",
          {
            key: 5,
            class: "text-input-container",
            style: ut(ot.value)
          },
          [
            Fe(y(
              "input",
              {
                ref_key: "textInputRef",
                ref: e,
                "onUpdate:modelValue": $[0] || ($[0] = (ht) => l.value = ht),
                type: "text",
                class: "text-input",
                style: ut({
                  color: G.value,
                  fontFamily: M(Jt),
                  fontSize: u.value + "px",
                  height: u.value + "px",
                  lineHeight: u.value + "px"
                }),
                onKeydown: [
                  Ti(ee, ["enter"]),
                  Ti(_, ["escape"])
                ],
                onBlur: ee,
                autofocus: ""
              },
              null,
              36
              /* STYLE, NEED_HYDRATION */
            ), [
              [Lo, l.value]
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
}), rc = /* @__PURE__ */ qe(ac, [["__scopeId", "data-v-a3b3737e"]]), lc = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: rc
}, Symbol.toStringTag, { value: "Module" })), As = Symbol(), gn = "el", cc = "is-", he = (n, t, e, i, s) => {
  let o = `${n}-${t}`;
  return e && (o += `-${e}`), i && (o += `__${i}`), s && (o += `--${s}`), o;
}, Ds = Symbol("namespaceContextKey"), hc = (n) => {
  const t = n || (ze() ? fe(Ds, W(gn)) : W(gn));
  return E(() => M(t) || gn);
}, ai = (n, t) => {
  const e = hc(t);
  return {
    namespace: e,
    b: (g = "") => he(e.value, n, g, "", ""),
    e: (g) => g ? he(e.value, n, "", g, "") : "",
    m: (g) => g ? he(e.value, n, "", "", g) : "",
    be: (g, p) => g && p ? he(e.value, n, g, p, "") : "",
    em: (g, p) => g && p ? he(e.value, n, "", g, p) : "",
    bm: (g, p) => g && p ? he(e.value, n, g, "", p) : "",
    bem: (g, p, z) => g && p && z ? he(e.value, n, g, p, z) : "",
    is: (g, ...p) => {
      const z = p.length >= 1 ? p[0] : !0;
      return g && z ? `${cc}${g}` : "";
    },
    cssVar: (g) => {
      const p = {};
      for (const z in g)
        g[z] && (p[`--${e.value}-${z}`] = g[z]);
      return p;
    },
    cssVarName: (g) => `--${e.value}-${g}`,
    cssVarBlock: (g) => {
      const p = {};
      for (const z in g)
        g[z] && (p[`--${e.value}-${n}-${z}`] = g[z]);
      return p;
    },
    cssVarBlockName: (g) => `--${e.value}-${n}-${g}`
  };
};
/**
* @vue/shared v3.5.13
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/
const uc = Object.prototype.hasOwnProperty, Yi = (n, t) => uc.call(n, t), Ye = (n) => typeof n == "function", we = (n) => typeof n == "string", Is = (n) => n !== null && typeof n == "object";
var dc = typeof global == "object" && global && global.Object === Object && global, gc = typeof self == "object" && self && self.Object === Object && self, ri = dc || gc || Function("return this")(), Re = ri.Symbol, Os = Object.prototype, fc = Os.hasOwnProperty, mc = Os.toString, We = Re ? Re.toStringTag : void 0;
function pc(n) {
  var t = fc.call(n, We), e = n[We];
  try {
    n[We] = void 0;
    var i = !0;
  } catch {
  }
  var s = mc.call(n);
  return i && (t ? n[We] = e : delete n[We]), s;
}
var wc = Object.prototype, yc = wc.toString;
function vc(n) {
  return yc.call(n);
}
var xc = "[object Null]", kc = "[object Undefined]", Zi = Re ? Re.toStringTag : void 0;
function Es(n) {
  return n == null ? n === void 0 ? kc : xc : Zi && Zi in Object(n) ? pc(n) : vc(n);
}
function bc(n) {
  return n != null && typeof n == "object";
}
var Sc = "[object Symbol]";
function li(n) {
  return typeof n == "symbol" || bc(n) && Es(n) == Sc;
}
function Mc(n, t) {
  for (var e = -1, i = n == null ? 0 : n.length, s = Array(i); ++e < i; )
    s[e] = t(n[e], e, n);
  return s;
}
var ci = Array.isArray, Xi = Re ? Re.prototype : void 0, Gi = Xi ? Xi.toString : void 0;
function $s(n) {
  if (typeof n == "string")
    return n;
  if (ci(n))
    return Mc(n, $s) + "";
  if (li(n))
    return Gi ? Gi.call(n) : "";
  var t = n + "";
  return t == "0" && 1 / n == -1 / 0 ? "-0" : t;
}
function Ws(n) {
  var t = typeof n;
  return n != null && (t == "object" || t == "function");
}
var Cc = "[object AsyncFunction]", _c = "[object Function]", Tc = "[object GeneratorFunction]", zc = "[object Proxy]";
function Rc(n) {
  if (!Ws(n))
    return !1;
  var t = Es(n);
  return t == _c || t == Tc || t == Cc || t == zc;
}
var En = ri["__core-js_shared__"], Ki = function() {
  var n = /[^.]+$/.exec(En && En.keys && En.keys.IE_PROTO || "");
  return n ? "Symbol(src)_1." + n : "";
}();
function Lc(n) {
  return !!Ki && Ki in n;
}
var Pc = Function.prototype, Ac = Pc.toString;
function Dc(n) {
  if (n != null) {
    try {
      return Ac.call(n);
    } catch {
    }
    try {
      return n + "";
    } catch {
    }
  }
  return "";
}
var Ic = /[\\^$.*+?()[\]{}|]/g, Oc = /^\[object .+?Constructor\]$/, Ec = Function.prototype, $c = Object.prototype, Wc = Ec.toString, Bc = $c.hasOwnProperty, Nc = RegExp(
  "^" + Wc.call(Bc).replace(Ic, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$"
);
function Hc(n) {
  if (!Ws(n) || Lc(n))
    return !1;
  var t = Rc(n) ? Nc : Oc;
  return t.test(Dc(n));
}
function jc(n, t) {
  return n?.[t];
}
function Bs(n, t) {
  var e = jc(n, t);
  return Hc(e) ? e : void 0;
}
function Fc(n, t) {
  return n === t || n !== n && t !== t;
}
var Vc = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/, Uc = /^\w*$/;
function Yc(n, t) {
  if (ci(n))
    return !1;
  var e = typeof n;
  return e == "number" || e == "symbol" || e == "boolean" || n == null || li(n) ? !0 : Uc.test(n) || !Vc.test(n) || t != null && n in Object(t);
}
var Ze = Bs(Object, "create");
function Zc() {
  this.__data__ = Ze ? Ze(null) : {}, this.size = 0;
}
function Xc(n) {
  var t = this.has(n) && delete this.__data__[n];
  return this.size -= t ? 1 : 0, t;
}
var Gc = "__lodash_hash_undefined__", Kc = Object.prototype, qc = Kc.hasOwnProperty;
function Jc(n) {
  var t = this.__data__;
  if (Ze) {
    var e = t[n];
    return e === Gc ? void 0 : e;
  }
  return qc.call(t, n) ? t[n] : void 0;
}
var Qc = Object.prototype, th = Qc.hasOwnProperty;
function eh(n) {
  var t = this.__data__;
  return Ze ? t[n] !== void 0 : th.call(t, n);
}
var nh = "__lodash_hash_undefined__";
function ih(n, t) {
  var e = this.__data__;
  return this.size += this.has(n) ? 0 : 1, e[n] = Ze && t === void 0 ? nh : t, this;
}
function ye(n) {
  var t = -1, e = n == null ? 0 : n.length;
  for (this.clear(); ++t < e; ) {
    var i = n[t];
    this.set(i[0], i[1]);
  }
}
ye.prototype.clear = Zc;
ye.prototype.delete = Xc;
ye.prototype.get = Jc;
ye.prototype.has = eh;
ye.prototype.set = ih;
function sh() {
  this.__data__ = [], this.size = 0;
}
function Cn(n, t) {
  for (var e = n.length; e--; )
    if (Fc(n[e][0], t))
      return e;
  return -1;
}
var oh = Array.prototype, ah = oh.splice;
function rh(n) {
  var t = this.__data__, e = Cn(t, n);
  if (e < 0)
    return !1;
  var i = t.length - 1;
  return e == i ? t.pop() : ah.call(t, e, 1), --this.size, !0;
}
function lh(n) {
  var t = this.__data__, e = Cn(t, n);
  return e < 0 ? void 0 : t[e][1];
}
function ch(n) {
  return Cn(this.__data__, n) > -1;
}
function hh(n, t) {
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
Ae.prototype.clear = sh;
Ae.prototype.delete = rh;
Ae.prototype.get = lh;
Ae.prototype.has = ch;
Ae.prototype.set = hh;
var uh = Bs(ri, "Map");
function dh() {
  this.size = 0, this.__data__ = {
    hash: new ye(),
    map: new (uh || Ae)(),
    string: new ye()
  };
}
function gh(n) {
  var t = typeof n;
  return t == "string" || t == "number" || t == "symbol" || t == "boolean" ? n !== "__proto__" : n === null;
}
function _n(n, t) {
  var e = n.__data__;
  return gh(t) ? e[typeof t == "string" ? "string" : "hash"] : e.map;
}
function fh(n) {
  var t = _n(this, n).delete(n);
  return this.size -= t ? 1 : 0, t;
}
function mh(n) {
  return _n(this, n).get(n);
}
function ph(n) {
  return _n(this, n).has(n);
}
function wh(n, t) {
  var e = _n(this, n), i = e.size;
  return e.set(n, t), this.size += e.size == i ? 0 : 1, this;
}
function xe(n) {
  var t = -1, e = n == null ? 0 : n.length;
  for (this.clear(); ++t < e; ) {
    var i = n[t];
    this.set(i[0], i[1]);
  }
}
xe.prototype.clear = dh;
xe.prototype.delete = fh;
xe.prototype.get = mh;
xe.prototype.has = ph;
xe.prototype.set = wh;
var yh = "Expected a function";
function hi(n, t) {
  if (typeof n != "function" || t != null && typeof t != "function")
    throw new TypeError(yh);
  var e = function() {
    var i = arguments, s = t ? t.apply(this, i) : i[0], o = e.cache;
    if (o.has(s))
      return o.get(s);
    var a = n.apply(this, i);
    return e.cache = o.set(s, a) || o, a;
  };
  return e.cache = new (hi.Cache || xe)(), e;
}
hi.Cache = xe;
var vh = 500;
function xh(n) {
  var t = hi(n, function(i) {
    return e.size === vh && e.clear(), i;
  }), e = t.cache;
  return t;
}
var kh = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g, bh = /\\(\\)?/g, Sh = xh(function(n) {
  var t = [];
  return n.charCodeAt(0) === 46 && t.push(""), n.replace(kh, function(e, i, s, o) {
    t.push(s ? o.replace(bh, "$1") : i || e);
  }), t;
});
function Mh(n) {
  return n == null ? "" : $s(n);
}
function Ch(n, t) {
  return ci(n) ? n : Yc(n, t) ? [n] : Sh(Mh(n));
}
function _h(n) {
  if (typeof n == "string" || li(n))
    return n;
  var t = n + "";
  return t == "0" && 1 / n == -1 / 0 ? "-0" : t;
}
function Th(n, t) {
  t = Ch(t, n);
  for (var e = 0, i = t.length; n != null && e < i; )
    n = n[_h(t[e++])];
  return e && e == i ? n : void 0;
}
function zh(n, t, e) {
  var i = n == null ? void 0 : Th(n, t);
  return i === void 0 ? e : i;
}
function Rh(n) {
  for (var t = -1, e = n == null ? 0 : n.length, i = {}; ++t < e; ) {
    var s = n[t];
    i[s[0]] = s[1];
  }
  return i;
}
const Ns = (n) => n === void 0, qi = (n) => typeof n == "boolean", ve = (n) => typeof n == "number", Yn = (n) => typeof Element > "u" ? !1 : n instanceof Element, Lh = (n) => we(n) ? !Number.isNaN(Number(n)) : !1;
var Ji;
const ke = typeof window < "u", Ph = (n) => typeof n == "string", Ah = () => {
};
ke && ((Ji = window?.navigator) != null && Ji.userAgent) && /iP(ad|hone|od)/.test(window.navigator.userAgent);
function ui(n) {
  return typeof n == "function" ? n() : M(n);
}
function Dh(n) {
  return n;
}
function di(n) {
  return Ao() ? (Do(n), !0) : !1;
}
function Ih(n, t = !0) {
  ze() ? Ge(n) : t ? n() : me(n);
}
function Hs(n, t, e = {}) {
  const {
    immediate: i = !0
  } = e, s = W(!1);
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
    }, ui(t));
  }
  return i && (s.value = !0, ke && l()), di(r), {
    isPending: Po(s),
    start: l,
    stop: r
  };
}
function js(n) {
  var t;
  const e = ui(n);
  return (t = e?.$el) != null ? t : e;
}
const Fs = ke ? window : void 0;
function Vs(...n) {
  let t, e, i, s;
  if (Ph(n[0]) || Array.isArray(n[0]) ? ([e, i, s] = n, t = Fs) : [t, e, i, s] = n, !t)
    return Ah;
  Array.isArray(e) || (e = [e]), Array.isArray(i) || (i = [i]);
  const o = [], a = () => {
    o.forEach((u) => u()), o.length = 0;
  }, r = (u, d, w, v) => (u.addEventListener(d, w, v), () => u.removeEventListener(d, w, v)), l = Xe(() => [js(t), ui(s)], ([u, d]) => {
    a(), u && o.push(...e.flatMap((w) => i.map((v) => r(u, w, v, d))));
  }, { immediate: !0, flush: "post" }), c = () => {
    l(), a();
  };
  return di(c), c;
}
function Oh(n, t = !1) {
  const e = W(), i = () => e.value = !!n();
  return i(), Ih(i, t), e;
}
const Qi = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {}, ts = "__vueuse_ssr_handlers__";
Qi[ts] = Qi[ts] || {};
var es = Object.getOwnPropertySymbols, Eh = Object.prototype.hasOwnProperty, $h = Object.prototype.propertyIsEnumerable, Wh = (n, t) => {
  var e = {};
  for (var i in n)
    Eh.call(n, i) && t.indexOf(i) < 0 && (e[i] = n[i]);
  if (n != null && es)
    for (var i of es(n))
      t.indexOf(i) < 0 && $h.call(n, i) && (e[i] = n[i]);
  return e;
};
function Bh(n, t, e = {}) {
  const i = e, { window: s = Fs } = i, o = Wh(i, ["window"]);
  let a;
  const r = Oh(() => s && "ResizeObserver" in s), l = () => {
    a && (a.disconnect(), a = void 0);
  }, c = Xe(() => js(n), (d) => {
    l(), r.value && s && d && (a = new ResizeObserver(t), a.observe(d, o));
  }, { immediate: !0, flush: "post" }), u = () => {
    l(), c();
  };
  return di(u), {
    isSupported: r,
    stop: u
  };
}
var ns;
(function(n) {
  n.UP = "UP", n.RIGHT = "RIGHT", n.DOWN = "DOWN", n.LEFT = "LEFT", n.NONE = "NONE";
})(ns || (ns = {}));
var Nh = Object.defineProperty, is = Object.getOwnPropertySymbols, Hh = Object.prototype.hasOwnProperty, jh = Object.prototype.propertyIsEnumerable, ss = (n, t, e) => t in n ? Nh(n, t, { enumerable: !0, configurable: !0, writable: !0, value: e }) : n[t] = e, Fh = (n, t) => {
  for (var e in t || (t = {}))
    Hh.call(t, e) && ss(n, e, t[e]);
  if (is)
    for (var e of is(t))
      jh.call(t, e) && ss(n, e, t[e]);
  return n;
};
const Vh = {
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
Fh({
  linear: Dh
}, Vh);
const os = {
  current: 0
}, as = W(0), Us = 2e3, rs = Symbol("elZIndexContextKey"), Ys = Symbol("zIndexContextKey"), Uh = (n) => {
  const t = ze() ? fe(rs, os) : os, e = n || (ze() ? fe(Ys, void 0) : void 0), i = E(() => {
    const a = M(e);
    return ve(a) ? a : Us;
  }), s = E(() => i.value + as.value), o = () => (t.current++, as.value = t.current, s.value);
  return !ke && fe(rs), {
    initialZIndex: i,
    currentZIndex: s,
    nextZIndex: o
  };
};
var Yh = {
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
const Zh = (n) => (t, e) => Xh(t, e, M(n)), Xh = (n, t, e) => zh(e, n, n).replace(/\{(\w+)\}/g, (i, s) => {
  var o;
  return `${(o = t?.[s]) != null ? o : `{${s}}`}`;
}), Gh = (n) => {
  const t = E(() => M(n).name), e = Io(n) ? n : W(n);
  return {
    lang: t,
    locale: e,
    t: Zh(n)
  };
}, Zs = Symbol("localeContextKey"), Kh = (n) => {
  const t = n || fe(Zs, W());
  return Gh(E(() => t.value || Yh));
}, Xs = "__epPropKey", Bt = (n) => n, qh = (n) => Is(n) && !!n[Xs], Gs = (n, t) => {
  if (!Is(n) || qh(n))
    return n;
  const { values: e, required: i, default: s, type: o, validator: a } = n, l = {
    type: o,
    required: !!i,
    validator: e || a ? (c) => {
      let u = !1, d = [];
      if (e && (d = Array.from(e), Yi(n, "default") && d.push(s), u || (u = d.includes(c))), a && (u || (u = a(c))), !u && d.length > 0) {
        const w = [...new Set(d)].map((v) => JSON.stringify(v)).join(", ");
        Oo(`Invalid prop: validation failed${t ? ` for prop "${t}"` : ""}. Expected one of [${w}], got value ${JSON.stringify(c)}.`);
      }
      return u;
    } : void 0,
    [Xs]: !0
  };
  return Yi(n, "default") && (l.default = s), l;
}, De = (n) => Rh(Object.entries(n).map(([t, e]) => [
  t,
  Gs(e, t)
])), Jh = ["", "default", "small", "large"], Qh = Gs({
  type: String,
  values: Jh,
  required: !1
}), tu = Symbol("size"), eu = Symbol("emptyValuesContextKey"), nu = De({
  emptyValues: Array,
  valueOnClear: {
    type: [String, Number, Boolean, Function],
    default: void 0,
    validator: (n) => Ye(n) ? !n() : !n
  }
}), ls = (n) => Object.keys(n), vn = W();
function Ks(n, t = void 0) {
  return ze() ? fe(As, vn) : vn;
}
function qs(n, t) {
  const e = Ks(), i = ai(n, E(() => {
    var r;
    return ((r = e.value) == null ? void 0 : r.namespace) || gn;
  })), s = Kh(E(() => {
    var r;
    return (r = e.value) == null ? void 0 : r.locale;
  })), o = Uh(E(() => {
    var r;
    return ((r = e.value) == null ? void 0 : r.zIndex) || Us;
  })), a = E(() => {
    var r;
    return M(t) || ((r = e.value) == null ? void 0 : r.size) || "";
  });
  return Js(E(() => M(e) || {})), {
    ns: i,
    locale: s,
    zIndex: o,
    size: a
  };
}
const Js = (n, t, e = !1) => {
  var i;
  const s = !!ze(), o = s ? Ks() : void 0, a = (i = void 0) != null ? i : s ? Eo : void 0;
  if (!a)
    return;
  const r = E(() => {
    const l = M(n);
    return o?.value ? iu(o.value, l) : l;
  });
  return a(As, r), a(Zs, E(() => r.value.locale)), a(Ds, E(() => r.value.namespace)), a(Ys, E(() => r.value.zIndex)), a(tu, {
    size: E(() => r.value.size || "")
  }), a(eu, E(() => ({
    emptyValues: r.value.emptyValues,
    valueOnClear: r.value.valueOnClear
  }))), (e || !vn.value) && (vn.value = r.value), r;
}, iu = (n, t) => {
  const e = [.../* @__PURE__ */ new Set([...ls(n), ...ls(t)])], i = {};
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
function Zn(n, t = "px") {
  if (!n)
    return "";
  if (ve(n) || Lh(n))
    return `${n}${t}`;
  if (we(n))
    return n;
}
const Qs = (n, t) => (n.install = (e) => {
  for (const i of [n, ...Object.values({})])
    e.component(i.name, i);
}, n), to = (n, t) => (n.install = (e) => {
  n._context = e._context, e.config.globalProperties[t] = n;
}, n), su = De({
  size: {
    type: Bt([Number, String])
  },
  color: {
    type: String
  }
}), ou = _t({
  name: "ElIcon",
  inheritAttrs: !1
}), au = /* @__PURE__ */ _t({
  ...ou,
  props: su,
  setup(n) {
    const t = n, e = ai("icon"), i = E(() => {
      const { size: s, color: o } = t;
      return !s && !o ? {} : {
        fontSize: Ns(s) ? void 0 : Zn(s),
        "--color": o
      };
    });
    return (s, o) => (L(), O("i", $o({
      class: M(e).b(),
      style: M(i)
    }, s.$attrs), [
      te(s.$slots, "default")
    ], 16));
  }
});
var ru = /* @__PURE__ */ Tn(au, [["__file", "icon.vue"]]);
const xn = Qs(ru);
/*! Element Plus Icons Vue v2.3.1 */
var lu = /* @__PURE__ */ _t({
  name: "CircleCloseFilled",
  __name: "circle-close-filled",
  setup(n) {
    return (t, e) => (L(), O("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 1024 1024"
    }, [
      y("path", {
        fill: "currentColor",
        d: "M512 64a448 448 0 1 1 0 896 448 448 0 0 1 0-896m0 393.664L407.936 353.6a38.4 38.4 0 1 0-54.336 54.336L457.664 512 353.6 616.064a38.4 38.4 0 1 0 54.336 54.336L512 566.336 616.064 670.4a38.4 38.4 0 1 0 54.336-54.336L566.336 512 670.4 407.936a38.4 38.4 0 1 0-54.336-54.336z"
      })
    ]));
  }
}), cu = lu, hu = /* @__PURE__ */ _t({
  name: "Close",
  __name: "close",
  setup(n) {
    return (t, e) => (L(), O("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 1024 1024"
    }, [
      y("path", {
        fill: "currentColor",
        d: "M764.288 214.592 512 466.88 259.712 214.592a31.936 31.936 0 0 0-45.12 45.12L466.752 512 214.528 764.224a31.936 31.936 0 1 0 45.12 45.184L512 557.184l252.288 252.288a31.936 31.936 0 0 0 45.12-45.12L557.12 512.064l252.288-252.352a31.936 31.936 0 1 0-45.12-45.184z"
      })
    ]));
  }
}), eo = hu, uu = /* @__PURE__ */ _t({
  name: "InfoFilled",
  __name: "info-filled",
  setup(n) {
    return (t, e) => (L(), O("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 1024 1024"
    }, [
      y("path", {
        fill: "currentColor",
        d: "M512 64a448 448 0 1 1 0 896.064A448 448 0 0 1 512 64m67.2 275.072c33.28 0 60.288-23.104 60.288-57.344s-27.072-57.344-60.288-57.344c-33.28 0-60.16 23.104-60.16 57.344s26.88 57.344 60.16 57.344M590.912 699.2c0-6.848 2.368-24.64 1.024-34.752l-52.608 60.544c-10.88 11.456-24.512 19.392-30.912 17.28a12.992 12.992 0 0 1-8.256-14.72l87.68-276.992c7.168-35.136-12.544-67.2-54.336-71.296-44.096 0-108.992 44.736-148.48 101.504 0 6.784-1.28 23.68.064 33.792l52.544-60.608c10.88-11.328 23.552-19.328 29.952-17.152a12.8 12.8 0 0 1 7.808 16.128L388.48 728.576c-10.048 32.256 8.96 63.872 55.04 71.04 67.84 0 107.904-43.648 147.456-100.416z"
      })
    ]));
  }
}), du = uu, gu = /* @__PURE__ */ _t({
  name: "SuccessFilled",
  __name: "success-filled",
  setup(n) {
    return (t, e) => (L(), O("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 1024 1024"
    }, [
      y("path", {
        fill: "currentColor",
        d: "M512 64a448 448 0 1 1 0 896 448 448 0 0 1 0-896m-55.808 536.384-99.52-99.584a38.4 38.4 0 1 0-54.336 54.336l126.72 126.72a38.272 38.272 0 0 0 54.336 0l262.4-262.464a38.4 38.4 0 1 0-54.272-54.336z"
      })
    ]));
  }
}), fu = gu, mu = /* @__PURE__ */ _t({
  name: "WarningFilled",
  __name: "warning-filled",
  setup(n) {
    return (t, e) => (L(), O("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 1024 1024"
    }, [
      y("path", {
        fill: "currentColor",
        d: "M512 64a448 448 0 1 1 0 896 448 448 0 0 1 0-896m0 192a58.432 58.432 0 0 0-58.24 63.744l23.36 256.384a35.072 35.072 0 0 0 69.76 0l23.296-256.384A58.432 58.432 0 0 0 512 256m0 512a51.2 51.2 0 1 0 0-102.4 51.2 51.2 0 0 0 0 102.4"
      })
    ]));
  }
}), pu = mu;
const no = Bt([
  String,
  Object,
  Function
]), wu = {
  Close: eo
}, yu = {
  Close: eo
}, kn = {
  success: fu,
  warning: pu,
  error: cu,
  info: du
}, vu = (n) => n, fn = {
  esc: "Escape",
  delete: "Delete",
  backspace: "Backspace"
}, xu = De({
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
}), ku = _t({
  name: "ElBadge"
}), bu = /* @__PURE__ */ _t({
  ...ku,
  props: xu,
  setup(n, { expose: t }) {
    const e = n, i = ai("badge"), s = E(() => e.isDot ? "" : ve(e.value) && ve(e.max) ? e.max < e.value ? `${e.max}+` : `${e.value}` : `${e.value}`), o = E(() => {
      var a, r, l, c, u;
      return [
        {
          backgroundColor: e.color,
          marginRight: Zn(-((r = (a = e.offset) == null ? void 0 : a[0]) != null ? r : 0)),
          marginTop: Zn((c = (l = e.offset) == null ? void 0 : l[1]) != null ? c : 0)
        },
        (u = e.badgeStyle) != null ? u : {}
      ];
    });
    return t({
      content: s
    }), (a, r) => (L(), O("div", {
      class: et(M(i).b())
    }, [
      te(a.$slots, "default"),
      m(Jn, {
        name: `${M(i).namespace.value}-zoom-in-center`,
        persisted: ""
      }, {
        default: Ct(() => [
          Fe(y("sup", {
            class: et([
              M(i).e("content"),
              M(i).em("content", a.type),
              M(i).is("fixed", !!a.$slots.default),
              M(i).is("dot", a.isDot),
              M(i).is("hide-zero", !a.showZero && e.value === 0),
              a.badgeClass
            ]),
            style: ut(M(o))
          }, [
            te(a.$slots, "content", { value: M(s) }, () => [
              hs(H(M(s)), 1)
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
var Su = /* @__PURE__ */ Tn(bu, [["__file", "badge.vue"]]);
const Mu = Qs(Su), Cu = De({
  a11y: {
    type: Boolean,
    default: !0
  },
  locale: {
    type: Bt(Object)
  },
  size: Qh,
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
  ...nu
}), Ut = {};
_t({
  name: "ElConfigProvider",
  props: Cu,
  setup(n, { slots: t }) {
    Xe(() => n.message, (i) => {
      Object.assign(Ut, i ?? {});
    }, { immediate: !0, deep: !0 });
    const e = Js(n);
    return () => te(t, "default", { config: e?.value });
  }
});
const io = ["success", "info", "warning", "error"], Pt = vu({
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
  appendTo: ke ? document.body : void 0
}), _u = De({
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
    type: no,
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
    values: io,
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
}), Tu = {
  destroy: () => !0
}, Yt = Wo([]), zu = (n) => {
  const t = Yt.findIndex((s) => s.id === n), e = Yt[t];
  let i;
  return t > 0 && (i = Yt[t - 1]), { current: e, prev: i };
}, Ru = (n) => {
  const { prev: t } = zu(n);
  return t ? t.vm.exposed.bottom.value : 0;
}, Lu = (n, t) => Yt.findIndex((i) => i.id === n) > 0 ? 16 : t, Pu = _t({
  name: "ElMessage"
}), Au = /* @__PURE__ */ _t({
  ...Pu,
  props: _u,
  emits: Tu,
  setup(n, { expose: t }) {
    const e = n, { Close: i } = yu, { ns: s, zIndex: o } = qs("message"), { currentZIndex: a, nextZIndex: r } = o, l = W(), c = W(!1), u = W(0);
    let d;
    const w = E(() => e.type ? e.type === "error" ? "danger" : e.type : "info"), v = E(() => {
      const N = e.type;
      return { [s.bm("icon", N)]: N && kn[N] };
    }), S = E(() => e.icon || kn[e.type] || ""), g = E(() => Ru(e.id)), p = E(() => Lu(e.id, e.offset) + g.value), z = E(() => u.value + p.value), A = E(() => ({
      top: `${p.value}px`,
      zIndex: a.value
    }));
    function C() {
      e.duration !== 0 && ({ stop: d } = Hs(() => {
        Y();
      }, e.duration));
    }
    function B() {
      d?.();
    }
    function Y() {
      c.value = !1;
    }
    function Z({ code: N }) {
      N === fn.esc && Y();
    }
    return Ge(() => {
      C(), r(), c.value = !0;
    }), Xe(() => e.repeatNum, () => {
      B(), C();
    }), Vs(document, "keydown", Z), Bh(l, () => {
      u.value = l.value.getBoundingClientRect().height;
    }), t({
      visible: c,
      bottom: z,
      close: Y
    }), (N, j) => (L(), xt(Jn, {
      name: M(s).b("fade"),
      onBeforeLeave: N.onClose,
      onAfterLeave: (q) => N.$emit("destroy"),
      persisted: ""
    }, {
      default: Ct(() => [
        Fe(y("div", {
          id: N.id,
          ref_key: "messageRef",
          ref: l,
          class: et([
            M(s).b(),
            { [M(s).m(N.type)]: N.type },
            M(s).is("center", N.center),
            M(s).is("closable", N.showClose),
            M(s).is("plain", N.plain),
            N.customClass
          ]),
          style: ut(M(A)),
          role: "alert",
          onMouseenter: B,
          onMouseleave: C
        }, [
          N.repeatNum > 1 ? (L(), xt(M(Mu), {
            key: 0,
            value: N.repeatNum,
            type: M(w),
            class: et(M(s).e("badge"))
          }, null, 8, ["value", "type", "class"])) : V("v-if", !0),
          M(S) ? (L(), xt(M(xn), {
            key: 1,
            class: et([M(s).e("icon"), M(v)])
          }, {
            default: Ct(() => [
              (L(), xt(ae(M(S))))
            ]),
            _: 1
          }, 8, ["class"])) : V("v-if", !0),
          te(N.$slots, "default", {}, () => [
            N.dangerouslyUseHTMLString ? (L(), O(Nt, { key: 1 }, [
              V(" Caution here, message could've been compromised, never use user's input as message "),
              y("p", {
                class: et(M(s).e("content")),
                innerHTML: N.message
              }, null, 10, ["innerHTML"])
            ], 2112)) : (L(), O("p", {
              key: 0,
              class: et(M(s).e("content"))
            }, H(N.message), 3))
          ]),
          N.showClose ? (L(), xt(M(xn), {
            key: 2,
            class: et(M(s).e("closeBtn")),
            onClick: wt(Y, ["stop"])
          }, {
            default: Ct(() => [
              m(M(i))
            ]),
            _: 1
          }, 8, ["class", "onClick"])) : V("v-if", !0)
        ], 46, ["id"]), [
          [mn, c.value]
        ])
      ]),
      _: 3
    }, 8, ["name", "onBeforeLeave", "onAfterLeave"]));
  }
});
var Du = /* @__PURE__ */ Tn(Au, [["__file", "message.vue"]]);
let Iu = 1;
const so = (n) => {
  const t = !n || we(n) || Ve(n) || Ye(n) ? { message: n } : n, e = {
    ...Pt,
    ...t
  };
  if (!e.appendTo)
    e.appendTo = document.body;
  else if (we(e.appendTo)) {
    let i = document.querySelector(e.appendTo);
    Yn(i) || (i = document.body), e.appendTo = i;
  }
  return qi(Ut.grouping) && !e.grouping && (e.grouping = Ut.grouping), ve(Ut.duration) && e.duration === 3e3 && (e.duration = Ut.duration), ve(Ut.offset) && e.offset === 16 && (e.offset = Ut.offset), qi(Ut.showClose) && !e.showClose && (e.showClose = Ut.showClose), e;
}, Ou = (n) => {
  const t = Yt.indexOf(n);
  if (t === -1)
    return;
  Yt.splice(t, 1);
  const { handler: e } = n;
  e.close();
}, Eu = ({ appendTo: n, ...t }, e) => {
  const i = `message_${Iu++}`, s = t.onClose, o = document.createElement("div"), a = {
    ...t,
    id: i,
    onClose: () => {
      s?.(), Ou(u);
    },
    onDestroy: () => {
      pn(null, o);
    }
  }, r = m(Du, a, Ye(a.message) || Ve(a.message) ? {
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
  if (!ke)
    return { close: () => {
    } };
  const e = so(n);
  if (e.grouping && Yt.length) {
    const s = Yt.find(({ vnode: o }) => {
      var a;
      return ((a = o.props) == null ? void 0 : a.message) === e.message;
    });
    if (s)
      return s.props.repeatNum += 1, s.props.type = e.type, s.handler;
  }
  if (ve(Ut.max) && Yt.length >= Ut.max)
    return { close: () => {
    } };
  const i = Eu(e, t);
  return Yt.push(i), i.handler;
};
io.forEach((n) => {
  Le[n] = (t = {}, e) => {
    const i = so(t);
    return Le({ ...i, type: n }, e);
  };
});
function $u(n) {
  for (const t of Yt)
    (!n || n === t.props.type) && t.handler.close();
}
Le.closeAll = $u;
Le._context = null;
const Wu = to(Le, "$message"), oo = [
  "success",
  "info",
  "warning",
  "error"
], Bu = De({
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
    type: no
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
    values: [...oo, ""],
    default: ""
  },
  zIndex: Number
}), Nu = {
  destroy: () => !0
}, Hu = _t({
  name: "ElNotification"
}), ju = /* @__PURE__ */ _t({
  ...Hu,
  props: Bu,
  emits: Nu,
  setup(n, { expose: t }) {
    const e = n, { ns: i, zIndex: s } = qs("notification"), { nextZIndex: o, currentZIndex: a } = s, { Close: r } = wu, l = W(!1);
    let c;
    const u = E(() => {
      const C = e.type;
      return C && kn[e.type] ? i.m(C) : "";
    }), d = E(() => e.type && kn[e.type] || e.icon), w = E(() => e.position.endsWith("right") ? "right" : "left"), v = E(() => e.position.startsWith("top") ? "top" : "bottom"), S = E(() => {
      var C;
      return {
        [v.value]: `${e.offset}px`,
        zIndex: (C = e.zIndex) != null ? C : a.value
      };
    });
    function g() {
      e.duration > 0 && ({ stop: c } = Hs(() => {
        l.value && z();
      }, e.duration));
    }
    function p() {
      c?.();
    }
    function z() {
      l.value = !1;
    }
    function A({ code: C }) {
      C === fn.delete || C === fn.backspace ? p() : C === fn.esc ? l.value && z() : g();
    }
    return Ge(() => {
      g(), o(), l.value = !0;
    }), Vs(document, "keydown", A), t({
      visible: l,
      close: z
    }), (C, B) => (L(), xt(Jn, {
      name: M(i).b("fade"),
      onBeforeLeave: C.onClose,
      onAfterLeave: (Y) => C.$emit("destroy"),
      persisted: ""
    }, {
      default: Ct(() => [
        Fe(y("div", {
          id: C.id,
          class: et([M(i).b(), C.customClass, M(w)]),
          style: ut(M(S)),
          role: "alert",
          onMouseenter: p,
          onMouseleave: g,
          onClick: C.onClick
        }, [
          M(d) ? (L(), xt(M(xn), {
            key: 0,
            class: et([M(i).e("icon"), M(u)])
          }, {
            default: Ct(() => [
              (L(), xt(ae(M(d))))
            ]),
            _: 1
          }, 8, ["class"])) : V("v-if", !0),
          y("div", {
            class: et(M(i).e("group"))
          }, [
            y("h2", {
              class: et(M(i).e("title")),
              textContent: H(C.title)
            }, null, 10, ["textContent"]),
            Fe(y("div", {
              class: et(M(i).e("content")),
              style: ut(C.title ? void 0 : { margin: 0 })
            }, [
              te(C.$slots, "default", {}, () => [
                C.dangerouslyUseHTMLString ? (L(), O(Nt, { key: 1 }, [
                  V(" Caution here, message could've been compromised, never use user's input as message "),
                  y("p", { innerHTML: C.message }, null, 8, ["innerHTML"])
                ], 2112)) : (L(), O("p", { key: 0 }, H(C.message), 1))
              ])
            ], 6), [
              [mn, C.message]
            ]),
            C.showClose ? (L(), xt(M(xn), {
              key: 0,
              class: et(M(i).e("closeBtn")),
              onClick: wt(z, ["stop"])
            }, {
              default: Ct(() => [
                m(M(r))
              ]),
              _: 1
            }, 8, ["class", "onClick"])) : V("v-if", !0)
          ], 2)
        ], 46, ["id", "onClick"]), [
          [mn, l.value]
        ])
      ]),
      _: 3
    }, 8, ["name", "onBeforeLeave", "onAfterLeave"]));
  }
});
var Fu = /* @__PURE__ */ Tn(ju, [["__file", "notification.vue"]]);
const bn = {
  "top-left": [],
  "top-right": [],
  "bottom-left": [],
  "bottom-right": []
}, Xn = 16;
let Vu = 1;
const Pe = function(n = {}, t) {
  if (!ke)
    return { close: () => {
    } };
  (we(n) || Ve(n)) && (n = { message: n });
  const e = n.position || "top-right";
  let i = n.offset || 0;
  bn[e].forEach(({ vm: u }) => {
    var d;
    i += (((d = u.el) == null ? void 0 : d.offsetHeight) || 0) + Xn;
  }), i += Xn;
  const s = `notification_${Vu++}`, o = n.onClose, a = {
    ...n,
    offset: i,
    id: s,
    onClose: () => {
      Uu(s, e, o);
    }
  };
  let r = document.body;
  Yn(n.appendTo) ? r = n.appendTo : we(n.appendTo) && (r = document.querySelector(n.appendTo)), Yn(r) || (r = document.body);
  const l = document.createElement("div"), c = m(Fu, a, Ye(a.message) ? a.message : Ve(a.message) ? () => a.message : null);
  return c.appContext = Ns(t) ? Pe._context : t, c.props.onDestroy = () => {
    pn(null, l);
  }, pn(c, l), bn[e].push({ vm: c }), r.appendChild(l.firstElementChild), {
    close: () => {
      c.component.exposed.visible.value = !1;
    }
  };
};
oo.forEach((n) => {
  Pe[n] = (t = {}, e) => ((we(t) || Ve(t)) && (t = {
    message: t
  }), Pe({ ...t, type: n }, e));
});
function Uu(n, t, e) {
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
      const { el: u, component: d } = i[c].vm, w = Number.parseInt(u.style[r], 10) - a - Xn;
      d.props.offset = w;
    }
}
function Yu() {
  for (const n of Object.values(bn))
    n.forEach(({ vm: t }) => {
      t.component.exposed.visible.value = !1;
    });
}
Pe.closeAll = Yu;
Pe._context = null;
const Zu = to(Pe, "$notify"), It = {
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
    i === "center" ? Wu({
      message: t,
      type: e,
      duration: s,
      showClose: o,
      grouping: !0,
      customClass: `app-toast app-toast--${e}`
    }) : Zu({
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
}, Xu = ["disabled"], Gu = {
  key: 0,
  class: "custom-button__loading"
}, Ku = /* @__PURE__ */ _t({
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
    return (e, i) => (L(), O("button", {
      class: et([
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
      n.loading ? (L(), O("div", Gu, i[1] || (i[1] = [
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
      ]))) : V("v-if", !0),
      te(e.$slots, "default", {}, void 0, !0)
    ], 10, Xu));
  }
}), qt = /* @__PURE__ */ qe(Ku, [["__scopeId", "data-v-9497085f"]]), qu = {
  key: 1,
  class: "splitter-panel second-panel"
}, Ju = /* @__PURE__ */ _t({
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
    const t = n, e = W(null), i = (A) => typeof A == "string" && A.includes("%"), s = (A) => typeof A == "string" ? parseFloat(A.replace("%", "")) : A, o = W(s(t.defaultSize)), a = E(() => i(t.defaultSize)), r = E(() => a.value ? `${o.value}%` : `${o.value}px`), l = E(() => t.firstCollapsed ? "0px" : t.secondCollapsed ? "100%" : r.value);
    let c = !1, u = 0, d = 0;
    const w = () => e.value?.offsetWidth || 0, v = (A) => {
      const C = w();
      return A / C * 100;
    }, S = (A) => {
      const C = w();
      return A * C / 100;
    }, g = (A) => {
      A.preventDefault(), A.stopPropagation(), !(!e.value || t.firstCollapsed || t.secondCollapsed) && (c = !0, u = A.clientX, d = a.value ? S(o.value) : o.value, document.addEventListener("mousemove", p), document.addEventListener("mouseup", z));
    }, p = (A) => {
      if (A.preventDefault(), A.stopPropagation(), !c || !e.value) return;
      const C = A.clientX - u;
      let B = d + C;
      const Y = a.value ? S(s(t.minSize)) : s(t.minSize), Z = a.value ? S(s(t.maxSize)) : s(t.maxSize);
      B = Math.max(Y, Math.min(Z, B)), o.value = a.value ? v(B) : B;
    }, z = () => {
      c = !1, document.removeEventListener("mousemove", p), document.removeEventListener("mouseup", z);
    };
    return qn(() => {
      document.removeEventListener("mousemove", p), document.removeEventListener("mouseup", z);
    }), (A, C) => (L(), O(
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
            style: ut({ width: M(l), minWidth: M(l) })
          },
          [
            te(A.$slots, "first", {}, void 0, !0)
          ],
          4
          /* STYLE */
        ),
        !A.firstCollapsed && !A.secondCollapsed ? (L(), O(
          "div",
          {
            key: 0,
            class: "splitter-divider",
            style: ut({ left: M(l) }),
            role: "separator",
            "aria-orientation": "vertical",
            onMousedown: g
          },
          C[0] || (C[0] = [
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
        )) : V("v-if", !0),
        A.secondCollapsed ? V("v-if", !0) : (L(), O("div", qu, [
          te(A.$slots, "second", {}, void 0, !0)
        ]))
      ],
      512
      /* NEED_PATCH */
    ));
  }
}), Qu = /* @__PURE__ */ qe(Ju, [["__scopeId", "data-v-79af4cc0"]]), td = `你正在执行图片原文转写。像在 AI 聊天中直接阅读图片一样，按视觉阅读顺序从上到下完整读取所有可见文字。
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
}, ed = /* @__PURE__ */ new Set([
  "title",
  "paragraph",
  "list",
  "code",
  "table"
]), Gn = (n, t, e) => typeof n == "string" && ed.has(n) ? n : e === 0 && t.length <= 80 && !/[。！？.!?]\s*$/.test(t) ? "title" : /^\s*(?:[-*+•·]|\d+[.)、）])\s+/m.test(t) ? "list" : "paragraph", nd = /^\s*(?:[-*+•·]|\d+[.)、）])\s+/, rn = (n) => n.replace(/^\s{0,3}#{1,6}\s+/, "").replace(/^\s*>\s?/, "").replace(/(\*\*|__|~~)(.*?)\1/g, "$2").trim(), id = (n) => {
  const e = n.trim().replace(/^```(?:text|plaintext|markdown)?\s*\n?/i, "").replace(/\n?```\s*$/i, "").split(/\n{2,}/).map((s) => s.trim()).filter(Boolean), i = [];
  for (const s of e) {
    const o = s.split(/\n/).map((c) => c.trim()).filter(Boolean);
    if (o.length === 0) continue;
    if (o.every((c) => nd.test(c))) {
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
        type: Gn(void 0, c, i.length),
        text: c
      });
      continue;
    }
    const l = o.map(rn).join(" ").trim();
    l && i.push({
      type: Gn(void 0, l, i.length),
      text: l
    });
  }
  return i;
}, sd = (n) => {
  const t = n.match(/```(?:json)?\s*([\s\S]*?)```/i)?.[1]?.trim();
  if (t?.startsWith("{") && t.endsWith("}") || t?.startsWith("[") && t.endsWith("]"))
    return t;
  const e = n.indexOf("{"), i = n.lastIndexOf("}"), s = n.indexOf("["), o = n.lastIndexOf("]");
  return s >= 0 && o > s && (e < 0 || s < e) ? n.slice(s, o + 1) : e >= 0 && i > e ? n.slice(e, i + 1) : null;
}, od = (n) => {
  const t = n.trim();
  if (!t)
    throw new Error("AI_OCR_EMPTY_RESPONSE");
  const e = sd(t);
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
      type: Gn(d.type, w, u),
      text: w
    } : null;
  }).filter((c) => !!c), r = a.length > 0 ? a : id(s || t);
  return {
    text: r.map((c) => c.text).join(`

`) || s || t,
    sections: r
  };
}, Kn = (n) => n.replace(/[\s\p{P}\p{S}]/gu, "").length, ad = (n) => Kn(n.text) < 180 && n.sections.length <= 2, cs = (n) => n && n.split(/[\\/]/).filter(Boolean).pop() || "", rd = async (n, t) => {
  const e = await Na(), i = await Ha(e);
  if (!i.selectedMmprojPath)
    throw new Error("AI_OCR_VISION_MODEL_UNAVAILABLE");
  const s = async (u) => {
    const d = await bs({
      messages: [
        { role: "system", content: td },
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
    return od(d.content);
  }, o = await s(!1), a = ad(o) ? await s(!0) : null, r = a && Kn(a.text) > Kn(o.text) ? a : o, l = await ks().catch(() => null), c = cs(l?.modelPath) || cs(i.selectedModelPath) || "Local Vision";
  return {
    text: r.text,
    sections: r.sections,
    modelName: c
  };
}, ld = ["src", "alt"], cd = { class: "ocr-header" }, hd = {
  class: "ocr-title-copy",
  "data-tauri-drag-region": ""
}, ud = {
  class: "ocr-window-title",
  "data-tauri-drag-region": ""
}, dd = { "data-tauri-drag-region": "" }, gd = {
  class: "ocr-source-inline",
  "data-tauri-drag-region": ""
}, fd = {
  class: "ocr-source-name",
  "data-tauri-drag-region": ""
}, md = { "data-tauri-drag-region": "" }, pd = { class: "ocr-title-actions" }, wd = ["title"], yd = { class: "ocr-window-controls" }, vd = ["title"], xd = ["title"], kd = ["title"], bd = ["title"], Sd = { class: "ocr-preview-pane" }, Md = { class: "ocr-pane-header" }, Cd = { class: "ocr-pane-heading" }, _d = { class: "ocr-pane-header-actions" }, Td = ["title"], zd = { class: "ocr-preview-canvas" }, Rd = ["src", "alt"], Ld = ["aria-label"], Pd = { class: "ocr-overlay-document" }, Ad = { class: "ocr-record-pane" }, Dd = { class: "ocr-pane-header result-header" }, Id = { class: "ocr-pane-heading" }, Od = { key: 0 }, Ed = { key: 1 }, $d = { class: "ocr-pane-header-actions" }, Wd = ["title"], Bd = {
  key: 0,
  class: "ocr-state"
}, Nd = { class: "ocr-ai-orbit" }, Hd = {
  key: 1,
  class: "ocr-state error"
}, jd = {
  key: 2,
  class: "ocr-state muted"
}, Fd = {
  key: 3,
  class: "ocr-result-scroll"
}, Vd = {
  key: 0,
  class: "ocr-selection-translation"
}, Ud = { class: "ocr-translation-section" }, Yd = { class: "ocr-translation-label" }, Zd = { class: "ocr-translation-source" }, Xd = { class: "ocr-translation-section result" }, Gd = { class: "ocr-translation-label" }, Kd = ["textContent"], qd = { class: "ocr-record-header" }, Jd = ["aria-pressed", "title", "onClick"], Qd = { key: 1 }, tg = { class: "ocr-record-kind" }, eg = {
  key: 0,
  class: "ocr-record-score"
}, ng = ["textContent"], ig = {
  key: 0,
  class: "ocr-record-translation"
}, sg = { class: "ocr-translation-label" }, og = ["textContent"], ag = { class: "ocr-action-bar" }, rg = ["onClick"], lg = { class: "engine-label" }, cg = ["onClick"], hg = { class: "engine-label" }, ug = { class: "ocr-engine-btn-group relative" }, dg = {
  key: 2,
  class: "zoom-info"
}, gg = /* @__PURE__ */ _t({
  __name: "index",
  setup(n) {
    const { t } = us(), e = W(), i = W(null), s = W(""), o = W(""), a = W("pin"), r = W(""), l = W([]), c = W(!1), u = W(""), d = W("pending"), w = W(""), v = W(""), S = W(0), g = W(0), p = W({ width: 0, height: 0 }), z = W(null), A = W(!1), C = W(!1), B = W(!1), Y = W(), Z = W({}), N = W("bing"), j = W(!1), q = W(), X = W({}), G = W("auto"), ot = E(() => [
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
    ]), it = E(() => [
      { value: "auto", label: t("pin.ocrLanguageAuto") },
      { value: "zh", label: t("pin.ocrLanguageZh") },
      { value: "zh-tw", label: t("pin.ocrLanguageZhTw") },
      { value: "en", label: t("pin.ocrLanguageEn") },
      { value: "ja", label: t("pin.ocrLanguageJa") },
      { value: "ko", label: t("pin.ocrLanguageKo") }
    ]), kt = (h) => {
      const k = typeof h == "string" ? h.trim().toLowerCase() : "";
      return k === "auto" || k === "zh" || k === "zh-tw" || k === "en" || k === "ja" || k === "ko" ? k : "auto";
    }, at = E(() => it.value.find((h) => h.value === G.value)?.label || t("pin.ocrLanguageAuto")), U = E(() => t("pin.translationResult")), Q = (h, k) => {
      if (!h) {
        k.value = {};
        return;
      }
      const P = h.getBoundingClientRect(), st = 180, K = 8, Tt = Math.min(
        Math.max(
          P.left + P.width / 2,
          K + st / 2
        ),
        window.innerWidth - K - st / 2
      );
      k.value = {
        left: `${Tt}px`,
        bottom: `${Math.max(8, window.innerHeight - P.top + 8)}px`
      };
    }, rt = () => {
      B.value && Q(Y.value, Z), j.value && Q(
        q.value,
        X
      );
    }, ft = W(1), lt = W(!1), dt = W(!1);
    let I = null;
    const yt = W(!1), F = W({ x: 0, y: 0 }), mt = W(!0), vt = W({ width: 0, height: 0 });
    let Rt = null, Dt = 0;
    const be = W(""), ee = E(() => ({
      width: "100%",
      height: a.value === "ocr" ? "auto" : "100%",
      flex: a.value === "ocr" ? "1 1 auto" : void 0,
      minHeight: a.value === "ocr" ? "120px" : void 0,
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      overflow: "hidden"
    })), _ = E(() => ({
      width: "100%",
      height: "100%",
      objectFit: "contain"
    })), tt = E(() => S.value > 0 && g.value > 0 ? `${S.value} × ${g.value}` : t("pin.screenshotPreview")), St = E(() => c.value ? t("pin.recognizing") : u.value ? t("pin.recognizeFailed") : r.value.trim() ? t("pin.recognizeSuccess") : t("pin.noTextRecognized")), ct = E(() => c.value ? t("pin.aiRecognizing") : (d.value === "ai", t("pin.aiVision"))), Lt = E(() => {
      const h = ct.value;
      return w.value ? `${h} · ${w.value}` : h;
    }), Mt = E(
      () => l.value.filter((h) => h.selected)
    ), Zt = E(() => c.value && !r.value.trim() ? t("pin.selectableTextPreparing") : r.value.trim() ? t("pin.nativeTextSelectionHint") : ""), x = (h) => h === "title" ? "h2" : h === "code" ? "pre" : "p", $ = E(() => Mt.value.length), ht = (h) => t(`pin.sectionKinds.${h}`), gt = (h) => (h.translatedText || h.text).trim(), J = (h) => h.map(gt).filter(Boolean).join(`

`), pt = () => {
      r.value = J(l.value);
    }, Et = () => {
      const h = /* @__PURE__ */ new Date(), k = (P) => P.toString().padStart(2, "0");
      return `${t("pin.screenshotPrefix")} ${h.getFullYear()}-${k(h.getMonth() + 1)}-${k(h.getDate())} ${k(h.getHours())}.${k(h.getMinutes())}.${k(h.getSeconds())}.png`;
    }, At = E(() => {
      const h = Math.min(
        vt.value.width,
        vt.value.height
      );
      let k = 1;
      return h < 300 && (k = Math.max(0.4, h / 300)), {
        left: `${F.value.x}px`,
        top: `${F.value.y}px`,
        transform: `scale(${k})`,
        transformOrigin: "top left"
      };
    }), Ie = (h) => {
      s.value = h, S.value = 0, g.value = 0, p.value = { width: 0, height: 0 }, a.value === "ocr" && (v.value = Et()), o.value && (URL.revokeObjectURL(o.value), o.value = "");
      try {
        const k = h.split(",")[1] || h, P = h.match(/data:([^;]+);/), st = P ? P[1] : "image/png", K = atob(k), Tt = new Uint8Array(K.length);
        for (let Vt = 0; Vt < K.length; Vt++)
          Tt[Vt] = K.charCodeAt(Vt);
        const $t = new Blob([Tt], { type: st });
        o.value = URL.createObjectURL($t);
      } catch (k) {
        D.error("[PIN窗口] 转换 Blob URL 失败", k), o.value = h;
      }
    }, ne = async () => {
      await me(), await new Promise((h) => requestAnimationFrame(() => h()));
      try {
        await i.value?.emit("pin-window-ready");
      } catch (h) {
        D.error("[PIN窗口] 发送 ready 事件失败", h);
      }
    }, jt = (h) => {
      if (!h?.imageData)
        return D.error("[PIN窗口] 收到的事件数据格式不正确", h), !1;
      const k = h.mode === "ocr" ? "ocr" : "pin", P = `${k}:${h.imageData.length}`;
      return P === be.value ? !1 : (be.value = P, a.value = k, Ie(h.imageData), Ft(), a.value === "ocr" ? (fi(h.text || ""), u.value = "", zn()) : (Dt++, c.value = !1, u.value = "", r.value = "", l.value = []), !0);
    }, gi = (h) => {
      const k = lo(h);
      k.length === 0 && !h.text.trim() || (l.value = k.length > 0 ? k : mi(h.text), pt(), d.value = "ai", w.value = h.modelName);
    }, zn = async () => {
      if (!s.value) return;
      const h = ++Dt;
      z.value = null, c.value = !0, u.value = "", d.value = "pending", w.value = "";
      const k = Date.now();
      zt.log("[Pin AI OCR] recognize start", {
        requestId: h,
        imageDataLength: s.value.length,
        imageWidth: S.value,
        imageHeight: g.value,
        language: G.value
      });
      try {
        const P = await rd(
          s.value,
          G.value
        );
        if (h !== Dt) return;
        if (!P.text.trim())
          throw new Error("AI_OCR_EMPTY_RESPONSE");
        gi(P), zt.log("[Pin AI OCR] recognize success", {
          requestId: h,
          durationMs: Date.now() - k,
          engine: d.value,
          textLength: r.value.length,
          textPreview: r.value.slice(0, 300)
        });
      } catch (P) {
        if (h !== Dt) return;
        if (D.error("[PIN窗口] AI OCR 识别失败", P), zt.log("[Pin AI OCR] recognize failed", {
          requestId: h,
          durationMs: Date.now() - k,
          error: co(P)
        }), r.value.trim()) {
          u.value = "";
          return;
        }
        u.value = t("pin.recognizeFailed"), r.value = "", l.value = [], It.error(t("pin.recognizeFailed"));
      } finally {
        h === Dt && (c.value = !1);
      }
    }, fi = (h) => {
      const k = h.trim();
      r.value = k, l.value = mi(k);
    }, mi = (h) => h.split(/\n{2,}|\n/).map((k, P) => ro(k, P)).filter((k) => k.text.trim()), ao = (h, k) => k === 0 && h.length <= 80 && !/[。！？.!?]\s*$/.test(h) ? "title" : /^\s*(?:[-*+•·]|\d+[.)、）])\s+/.test(h) ? "list" : "paragraph", ro = (h, k) => ({
      id: `plain-${Date.now()}-${k}`,
      kind: ao(h, k),
      text: h.trim(),
      sourceText: h.trim(),
      translatedText: "",
      confidence: 0,
      selected: !1
    }), lo = (h) => {
      const k = Date.now();
      return h.sections.map((P, st) => ({
        id: `ai-${k}-${st}`,
        kind: P.type,
        text: P.text.trim(),
        sourceText: P.text.trim(),
        translatedText: "",
        confidence: 0,
        selected: !1
      })).filter((P) => P.text);
    }, co = (h) => h instanceof Error ? `${h.name}: ${h.message}
${h.stack || ""}`.trim() : typeof h == "string" ? h : JSON.stringify(h) || String(h), Rn = async () => {
      const h = go();
      h && await ho(h);
    }, ho = async (h) => {
      try {
        await navigator.clipboard.writeText(h), It.success(t("pin.copySuccess"));
      } catch (k) {
        D.error("[PIN窗口] 复制识别文本失败", k), It.error(t("pin.copyFailed"));
      } finally {
        Ft();
      }
    }, uo = async () => {
      pt();
      const h = r.value.trim();
      if (h)
        try {
          await b("save_text_to_file", { text: h }), It.success(t("pin.saveSuccess"));
        } catch (k) {
          k !== "SAVE_CANCELLED" && (D.error("[PIN窗口] 保存文本失败", k), It.error(t("pin.saveFailed")));
        }
    }, go = () => {
      const h = pi();
      if (h)
        return h;
      const k = J(
        Mt.value
      );
      return k || (pt(), r.value.trim());
    }, pi = () => {
      const h = window.getSelection(), k = e.value?.querySelector(".ocr-reading-surface");
      if (!h || h.rangeCount === 0 || !k)
        return "";
      for (let P = 0; P < h.rangeCount; P += 1) {
        const K = h.getRangeAt(P).commonAncestorContainer;
        if (k.contains(K))
          return h.toString().trim();
      }
      return "";
    }, fo = (h) => {
      const k = l.value.find((P) => P.id === h);
      k && (k.selected = !k.selected);
    }, mo = (h) => {
      const k = h.target;
      !k || !z.value || (z.value.translatedText = k.innerText.trim());
    }, po = async () => {
      B.value = !B.value, j.value = !1, B.value && (await me(), rt());
    }, wo = (h) => {
      N.value = h, B.value = !1, b("set_translation_engine", { engine: h }).catch((k) => {
        D.error("[PIN窗口] 保存翻译引擎设置失败", k);
      });
    }, wi = async () => {
      j.value = !j.value, B.value = !1, j.value && (await me(), rt());
    }, yo = (h) => {
      G.value = h, j.value = !1, b("set_ocr_language", { language: h }).catch((k) => {
        D.error("[PIN窗口] 保存 OCR 语言设置失败", k);
      }), s.value && zn();
    }, vo = async () => {
      if (Ft(), B.value = !1, j.value = !1, !r.value.trim() || C.value) return;
      const h = pi(), k = h ? [] : Mt.value.length > 0 ? Mt.value : l.value, P = h || (k.length > 0 ? k.map((K) => K.text).join(`

`) : r.value), st = ue(P);
      if (!Te(st)) {
        It.warning(t("pin.unsupportedTranslateLanguage"));
        return;
      }
      C.value = !0;
      try {
        if (await xo(), h) {
          const K = await Ln(
            h,
            st
          );
          K && (z.value = {
            sourceText: h,
            translatedText: K.trim()
          }), It.success(t("pin.translateSuccess"));
        } else if (k.length > 0) {
          for (const K of k) {
            const Tt = await Ln(
              K.text,
              st
            );
            Tt && (K.translatedText = Tt.trim());
          }
          pt(), It.success(t("pin.translateSuccess"));
        } else {
          const K = await Ln(
            r.value,
            st
          );
          K && fi(K), It.success(t("pin.translateSuccess"));
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
        C.value = !1;
      }
    }, xo = async () => {
      if (N.value !== "offline")
        return;
      if ((await ei()).isCached)
        await xs();
      else
        throw new Error(t("pin.offlineModelNotDownloaded"));
      if (!await b("get_offline_model_activated"))
        throw new Error(t("pin.offlineModelNotActivated"));
    }, Ln = async (h, k) => {
      const P = h.trim();
      return P ? N.value === "offline" ? vs(P) : await b("translate_text", {
        text: P,
        from: "auto",
        to: k === "zh" ? "en" : "zh",
        engine: N.value
      }) : "";
    }, ko = (h) => {
      Je(h);
    }, bo = async () => {
      if (!i.value) return;
      const h = i.value;
      typeof h.minimize == "function" && await h.minimize();
    }, So = async () => {
      if (!i.value) return;
      const h = i.value;
      (typeof h.isMaximized == "function" ? await h.isMaximized() : !1) && typeof h.unmaximize == "function" ? await h.unmaximize() : typeof h.maximize == "function" && await h.maximize();
    }, yi = async (h) => {
      const k = h.target;
      if (S.value = k.naturalWidth, g.value = k.naturalHeight, i.value && p.value.width === 0)
        try {
          const P = await i.value.innerSize(), st = await i.value.scaleFactor(), K = P.toLogical(st);
          p.value = {
            width: K.width,
            height: K.height
          };
        } catch (P) {
          D.error("[PIN窗口] 获取窗口初始尺寸失败", P);
        }
    }, vi = async (h) => {
      if (h.ctrlKey && (h.preventDefault(), h.stopPropagation(), !dt.value && i.value)) {
        dt.value = !0;
        try {
          const P = (await i.value.innerSize()).toLogical(
            await i.value.scaleFactor()
          ), st = h.deltaY > 0 ? 0.95 : 1.05, K = P.width, Tt = P.height, $t = Math.round(K * st), Vt = Math.round(Tt * st), Oe = 50, ie = 3e3;
          if ($t >= Oe && $t <= ie && Vt >= Oe && Vt <= ie) {
            if (await i.value.setSize(new Ne($t, Vt)), S.value > 0) {
              const ce = Math.round(
                $t / S.value * 100
              );
              ft.value = ce / 100;
            }
            lt.value = !0, Pn();
          }
        } catch (k) {
          D.error("[PIN窗口] 窗口缩放失败", k);
        } finally {
          setTimeout(() => {
            dt.value = !1;
          }, 100);
        }
      }
    }, Mo = (h) => {
      a.value === "ocr" && h.ctrlKey && vi(h);
    }, Pn = () => {
      lt.value = !0, I && clearTimeout(I), I = setTimeout(() => {
        lt.value = !1;
      }, 1e3);
    }, Je = (h) => {
      h.preventDefault(), h.stopPropagation(), yt.value = !1, setTimeout(() => {
        const k = window.innerWidth, P = window.innerHeight;
        vt.value = { width: k, height: P };
        const st = Math.min(k, P);
        let K = 1;
        st < 300 && (K = Math.max(0.4, st / 300));
        const Tt = a.value === "ocr" ? 176 : 150, $t = a.value === "ocr" && r.value.trim() ? 222 : 180, Vt = Tt * K, Oe = $t * K;
        let ie = h.clientX, ce = h.clientY;
        ie + Vt > k && (ie = k - Vt - 5), ce + Oe > P && (ce = P - Oe - 5), ie = Math.max(5, ie), ce = Math.max(5, ce), F.value = { x: ie, y: ce }, yt.value = !0;
      }, 10);
    }, Ft = () => {
      yt.value = !1, B.value = !1, j.value = !1;
    }, xi = async () => {
      i.value && (mt.value = !mt.value, await i.value.setAlwaysOnTop(mt.value), Ft());
    }, ki = async (h) => {
      if (i.value && !dt.value) {
        dt.value = !0;
        try {
          const P = (await i.value.innerSize()).toLogical(
            await i.value.scaleFactor()
          ), st = Math.round(P.width * h), K = Math.round(P.height * h), Tt = 50, $t = 3e3;
          st >= Tt && st <= $t && K >= Tt && K <= $t && (await i.value.setSize(new Ne(st, K)), S.value > 0 && (ft.value = st / S.value), Pn());
        } catch (k) {
          D.error("[PIN窗口] 键盘缩放失败", k);
        } finally {
          setTimeout(() => {
            dt.value = !1;
          }, 100);
        }
      }
    }, bi = async () => {
      if (i.value && p.value.width > 0 && p.value.height > 0)
        try {
          await i.value.setSize(
            new Ne(
              p.value.width,
              p.value.height
            )
          ), ft.value = 1, Pn();
        } catch (h) {
          D.error("[PIN窗口] 重置缩放失败", h);
        }
      Ft();
    }, Co = async () => {
      try {
        const h = s.value;
        Ft(), i.value && await i.value.hide(), await b("copy_image_to_clipboard", { imageData: h }), It.success(t("pin.copySuccess")), i.value && await i.value.close();
      } catch (h) {
        D.error("[PIN窗口] 复制图片失败", h), It.error(t("pin.copyFailed")), i.value && await i.value.close();
      }
    }, _o = async () => {
      const h = s.value;
      Ft(), i.value && await i.value.hide();
      try {
        await b("save_pin_image", { imageData: h }), It.success(t("pin.saveSuccess")), i.value && await i.value.close();
      } catch (k) {
        k === "SAVE_CANCELLED" ? (D.info("[PIN窗口] 用户取消保存，恢复窗口显示"), i.value && await i.value.show()) : (D.error("[PIN窗口] 保存图片失败", k), It.error(t("pin.saveFailed")), i.value && await i.value.close());
      }
    }, An = async () => {
      i.value && await i.value.close();
    }, Si = (h) => {
      h.preventDefault();
    }, Mi = async (h) => {
      if (h.button === 0 && i.value) {
        const k = h.target;
        if (k.hasAttribute("data-tauri-drag-region") || k.closest("[data-tauri-drag-region]")) {
          if (k.closest("button") || k.closest(".ocr-view-original"))
            return;
          try {
            await i.value.startDragging();
          } catch (P) {
            D.error("[PIN窗口] 拖拽窗口失败", P);
          }
        }
      }
    }, Ci = (h) => {
      const k = h.target;
      !k.closest(".context-menu") && !k.closest(".ocr-engine-btn-group") && !k.closest(".translate-btn-group") && !k.closest(".ocr-floating-menu") && Ft();
    }, _i = (h) => {
      if (h.altKey && h.code === "Space") {
        h.preventDefault(), h.stopPropagation();
        return;
      }
      h.key === "Escape" ? yt.value ? Ft() : An() : (h.ctrlKey || h.metaKey) && (h.key === "0" ? (h.preventDefault(), bi()) : h.key === "=" || h.key === "+" ? (h.preventDefault(), ki(1.05)) : h.key === "-" && (h.preventDefault(), ki(0.95)));
    }, To = async () => {
      if (i.value)
        try {
          const h = await b(
            "get_pin_window_data",
            { label: i.value.label }
          );
          h && jt(h) && await ne();
        } catch (h) {
          D.error("[PIN窗口] 主动获取窗口数据失败", h);
        }
    };
    return Ge(async () => {
      if (e.value) {
        try {
          const [h, k] = await Promise.all([
            b("get_translation_engine"),
            b("get_ocr_language")
          ]);
          (h === "google" || h === "bing" || h === "offline" || h === "local-ai") && (N.value = h), G.value = kt(k);
        } catch (h) {
          D.error("[PIN窗口] 读取默认 OCR/翻译设置失败", h);
        }
        try {
          i.value = Ke.getCurrent();
          try {
            Rt = await i.value.listen(
              "pin-window-data",
              (h) => {
                jt(h.payload) && ne();
              }
            ), await To();
          } catch (h) {
            D.error("[PIN窗口] 设置事件监听失败", h);
          }
        } catch (h) {
          if (D.error("[PIN窗口] 初始化错误", h), i.value)
            try {
              await i.value.show();
            } catch (k) {
              D.error("[PIN窗口] 显示窗口失败", k);
            }
        }
        document.addEventListener("click", Ci), document.addEventListener("keydown", _i, !0), document.addEventListener("contextmenu", Si, !0), window.addEventListener("resize", rt), window.addEventListener("scroll", rt, !0), window.addEventListener("blur", Ft), document.body && (document.body.oncontextmenu = (h) => (h.preventDefault(), !1));
      }
    }), qn(() => {
      o.value && URL.revokeObjectURL(o.value), Rt && Rt(), document.removeEventListener("click", Ci), document.removeEventListener("keydown", _i, !0), document.removeEventListener("contextmenu", Si, !0), window.removeEventListener("resize", rt), window.removeEventListener("scroll", rt, !0), window.removeEventListener("blur", Ft), document.body && (document.body.oncontextmenu = null), I && clearTimeout(I);
    }), (h, k) => (L(), O(
      "div",
      {
        class: et(["pin-container", { "ocr-mode": a.value === "ocr" }]),
        ref_key: "containerRef",
        ref: e,
        onContextmenu: wt(Je, ["prevent"]),
        onWheelCapture: Mo
      },
      [
        V(" 图片容器 "),
        o.value && a.value === "pin" ? (L(), O(
          "div",
          {
            key: 0,
            class: "image-wrapper",
            style: ut(ee.value),
            onWheelCapture: vi,
            onContextmenu: wt(Je, ["prevent"]),
            "data-tauri-drag-region": "",
            onMousedown: Mi
          },
          [
            y("img", {
              src: o.value,
              alt: h.$t("screenshot.pin"),
              style: ut(_.value),
              onLoad: yi,
              draggable: "false",
              "data-tauri-drag-region": ""
            }, null, 44, ld)
          ],
          36
          /* STYLE, NEED_HYDRATION */
        )) : V("v-if", !0),
        a.value === "ocr" ? (L(), O(
          "section",
          {
            key: 1,
            class: "ocr-shell",
            onContextmenu: wt(Je, ["prevent"])
          },
          [
            y("header", cd, [
              y(
                "div",
                {
                  class: "ocr-titlebar",
                  "data-tauri-drag-region": "",
                  onMousedown: Mi
                },
                [
                  y("div", hd, [
                    y("div", ud, [
                      m(M(Un), {
                        theme: "outline",
                        size: "18"
                      }),
                      y(
                        "span",
                        dd,
                        H(h.$t("pin.ocrResult")),
                        1
                        /* TEXT */
                      )
                    ]),
                    y("div", gd, [
                      y(
                        "span",
                        fd,
                        H(v.value),
                        1
                        /* TEXT */
                      ),
                      k[3] || (k[3] = y(
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
                        md,
                        H(tt.value),
                        1
                        /* TEXT */
                      )
                    ])
                  ]),
                  y("div", pd, [
                    y("div", {
                      class: et(["ocr-engine-status", `is-${d.value}`]),
                      title: Lt.value
                    }, [
                      c.value ? (L(), xt(M(ji), {
                        key: 0,
                        class: "ocr-loading-icon",
                        size: "14",
                        theme: "outline"
                      })) : (L(), xt(M(On), {
                        key: 1,
                        size: "14",
                        theme: "outline"
                      })),
                      y(
                        "span",
                        null,
                        H(ct.value),
                        1
                        /* TEXT */
                      )
                    ], 10, wd),
                    y("div", yd, [
                      y("button", {
                        class: "ocr-window-btn",
                        title: mt.value ? h.$t("pin.togglePin") : h.$t("pin.pinWindow"),
                        onClick: wt(xi, ["stop"])
                      }, [
                        (L(), xt(ae(mt.value ? M(Vn) : M(Fi)), {
                          size: "18",
                          theme: "outline"
                        }))
                      ], 8, vd),
                      k[4] || (k[4] = y(
                        "span",
                        { class: "ocr-window-divider" },
                        null,
                        -1
                        /* HOISTED */
                      )),
                      y("button", {
                        class: "ocr-window-btn",
                        title: h.$t("pin.minimize"),
                        onClick: wt(bo, ["stop"])
                      }, [
                        m(M(Ls), {
                          size: "18",
                          theme: "outline"
                        })
                      ], 8, xd),
                      y("button", {
                        class: "ocr-window-btn",
                        title: h.$t("pin.maximize"),
                        onClick: wt(So, ["stop"])
                      }, [
                        m(M(il), {
                          size: "14",
                          theme: "outline",
                          strokeWidth: 5
                        })
                      ], 8, kd),
                      y("button", {
                        class: "ocr-window-btn",
                        title: h.$t("pin.close"),
                        onClick: wt(An, ["stop"])
                      }, [
                        m(M(Fn), {
                          size: "14",
                          theme: "outline",
                          strokeWidth: 6
                        })
                      ], 8, bd)
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
                onMousedown: k[2] || (k[2] = wt(() => {
                }, ["stop"]))
              },
              [
                m(Qu, {
                  class: "ocr-result-layout",
                  "default-size": "44%",
                  "min-size": "26%",
                  "max-size": "72%",
                  "second-collapsed": A.value
                }, {
                  first: Ct(() => [
                    y("section", Sd, [
                      y("header", Md, [
                        y("div", Cd, [
                          y(
                            "strong",
                            null,
                            H(h.$t("pin.sourceImage")),
                            1
                            /* TEXT */
                          ),
                          y(
                            "span",
                            null,
                            H(Zt.value),
                            1
                            /* TEXT */
                          )
                        ]),
                        y("div", _d, [
                          A.value ? (L(), O("button", {
                            key: 0,
                            type: "button",
                            class: "ocr-panel-toggle",
                            title: h.$t("pin.showAiPanel"),
                            onClick: k[0] || (k[0] = wt((P) => A.value = !1, ["stop"]))
                          }, [
                            m(M(Zr), {
                              size: "14",
                              theme: "outline"
                            }),
                            y(
                              "span",
                              null,
                              H(h.$t("pin.showAiPanel")),
                              1
                              /* TEXT */
                            )
                          ], 8, Td)) : V("v-if", !0)
                        ])
                      ]),
                      y("div", zd, [
                        y(
                          "div",
                          {
                            class: et(["ocr-preview-stage", { "has-text-overlay": r.value.trim() }])
                          },
                          [
                            y("img", {
                              src: o.value || s.value,
                              alt: h.$t("pin.ocrSourceAlt"),
                              onLoad: yi
                            }, null, 40, Rd),
                            r.value.trim() ? (L(), O("div", {
                              key: 0,
                              class: "ocr-text-overlay-layer",
                              "aria-label": h.$t("pin.selectableTextView")
                            }, [
                              y("div", Pd, [
                                (L(!0), O(
                                  Nt,
                                  null,
                                  Kt(l.value, (P) => (L(), xt(ae(x(P.kind)), {
                                    key: `overlay-${P.id}`,
                                    class: et(["ocr-overlay-block", `is-${P.kind}`])
                                  }, {
                                    default: Ct(() => [
                                      hs(
                                        H(P.text),
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
                            ], 8, Ld)) : V("v-if", !0)
                          ],
                          2
                          /* CLASS */
                        )
                      ])
                    ])
                  ]),
                  second: Ct(() => [
                    y("section", Ad, [
                      y("header", Dd, [
                        y("div", Id, [
                          y(
                            "strong",
                            null,
                            H(h.$t("pin.aiRecognizedText")),
                            1
                            /* TEXT */
                          ),
                          r.value.trim() ? (L(), O(
                            "span",
                            Od,
                            H(h.$t("pin.resultStats", {
                              sections: l.value.length,
                              characters: r.value.length
                            })),
                            1
                            /* TEXT */
                          )) : (L(), O(
                            "span",
                            Ed,
                            H(St.value),
                            1
                            /* TEXT */
                          ))
                        ]),
                        y("div", $d, [
                          m(qt, {
                            class: "ocr-inline-copy",
                            type: "text",
                            title: h.$t("pin.copyText"),
                            disabled: !r.value.trim(),
                            onClick: wt(Rn, ["stop"])
                          }, {
                            default: Ct(() => [
                              m(M(on), {
                                size: "15",
                                theme: "outline"
                              }),
                              y(
                                "span",
                                null,
                                H(h.$t("pin.copyAll")),
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
                            onClick: k[1] || (k[1] = wt((P) => A.value = !0, ["stop"]))
                          }, [
                            m(M(el), {
                              size: "14",
                              theme: "outline"
                            })
                          ], 8, Wd)
                        ])
                      ]),
                      c.value && !r.value.trim() ? (L(), O("div", Bd, [
                        y("div", Nd, [
                          m(M(On), {
                            size: "22",
                            theme: "outline"
                          })
                        ]),
                        y(
                          "strong",
                          null,
                          H(h.$t("pin.aiReadingImage")),
                          1
                          /* TEXT */
                        ),
                        y(
                          "span",
                          null,
                          H(h.$t("pin.aiReadingHint")),
                          1
                          /* TEXT */
                        )
                      ])) : u.value && !r.value.trim() ? (L(), O("div", Hd, [
                        y(
                          "strong",
                          null,
                          H(u.value),
                          1
                          /* TEXT */
                        ),
                        y(
                          "span",
                          null,
                          H(h.$t("pin.aiOcrRetryHint")),
                          1
                          /* TEXT */
                        )
                      ])) : r.value.trim() ? (L(), O("div", Fd, [
                        z.value ? (L(), O("section", Vd, [
                          y("div", Ud, [
                            y(
                              "span",
                              Yd,
                              H(h.$t("pin.selectedText")),
                              1
                              /* TEXT */
                            ),
                            y(
                              "div",
                              Zd,
                              H(z.value.sourceText),
                              1
                              /* TEXT */
                            )
                          ]),
                          y("div", Xd, [
                            y(
                              "span",
                              Gd,
                              H(U.value),
                              1
                              /* TEXT */
                            ),
                            y("div", {
                              class: "ocr-selection-translation-editor",
                              contenteditable: "plaintext-only",
                              spellcheck: "false",
                              textContent: H(z.value.translatedText),
                              onBlur: mo
                            }, null, 40, Kd)
                          ])
                        ])) : V("v-if", !0),
                        (L(!0), O(
                          Nt,
                          null,
                          Kt(l.value, (P, st) => (L(), O(
                            "article",
                            {
                              key: P.id,
                              class: et(["ocr-record-item", [`is-${P.kind}`, { selected: P.selected }]])
                            },
                            [
                              y("header", qd, [
                                y("button", {
                                  type: "button",
                                  class: et(["ocr-record-select", { selected: P.selected }]),
                                  "aria-pressed": P.selected,
                                  title: h.$t("pin.selectSection"),
                                  onClick: wt((K) => fo(P.id), ["stop"])
                                }, [
                                  P.selected ? (L(), xt(M(dn), {
                                    key: 0,
                                    size: "11",
                                    theme: "outline"
                                  })) : (L(), O(
                                    "span",
                                    Qd,
                                    H(st + 1),
                                    1
                                    /* TEXT */
                                  ))
                                ], 10, Jd),
                                y(
                                  "span",
                                  tg,
                                  H(ht(P.kind)),
                                  1
                                  /* TEXT */
                                ),
                                P.confidence > 0 ? (L(), O(
                                  "span",
                                  eg,
                                  H(Math.round(P.confidence)) + "% ",
                                  1
                                  /* TEXT */
                                )) : V("v-if", !0)
                              ]),
                              y("div", {
                                class: "ocr-record-text",
                                textContent: H(P.text)
                              }, null, 8, ng),
                              P.translatedText ? (L(), O("div", ig, [
                                y(
                                  "span",
                                  sg,
                                  H(U.value),
                                  1
                                  /* TEXT */
                                ),
                                y("div", {
                                  class: "ocr-record-text translated",
                                  textContent: H(P.translatedText)
                                }, null, 8, og)
                              ])) : V("v-if", !0)
                            ],
                            2
                            /* CLASS */
                          ))),
                          128
                          /* KEYED_FRAGMENT */
                        ))
                      ])) : (L(), O(
                        "div",
                        jd,
                        H(h.$t("pin.noTextRecognized")),
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
            y("footer", ag, [
              m(qt, {
                class: "ocr-action-btn primary",
                type: "text",
                title: h.$t("pin.copyText"),
                disabled: !r.value.trim(),
                onClick: wt(Rn, ["stop"])
              }, {
                default: Ct(() => [
                  m(M(on), {
                    size: "18",
                    theme: "outline",
                    strokeWidth: 2.5
                  }),
                  y(
                    "span",
                    null,
                    H($.value > 0 ? `${h.$t("pin.copyText")} (${$.value})` : h.$t("pin.copyText")),
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
                  ref: Y,
                  class: "translate-btn-group relative"
                },
                [
                  m(qt, {
                    class: "ocr-action-btn translate-main",
                    type: "text",
                    title: h.$t("pin.translate"),
                    disabled: !r.value.trim() || C.value,
                    onClick: wt(vo, ["stop"])
                  }, {
                    default: Ct(() => [
                      C.value ? (L(), xt(M(ji), {
                        key: 1,
                        class: "ocr-loading-icon",
                        size: "18",
                        theme: "outline",
                        strokeWidth: 2.5
                      })) : (L(), xt(M(Ps), {
                        key: 0,
                        size: "18",
                        theme: "outline",
                        strokeWidth: 2.5
                      })),
                      y(
                        "span",
                        null,
                        H(h.$t("pin.translate")),
                        1
                        /* TEXT */
                      )
                    ]),
                    _: 1
                    /* STABLE */
                  }, 8, ["title", "disabled"]),
                  m(qt, {
                    class: "ocr-action-btn translate-arrow",
                    type: "text",
                    disabled: !r.value.trim() || C.value,
                    onClick: wt(po, ["stop"])
                  }, {
                    default: Ct(() => [
                      m(M(Hi), {
                        size: "14",
                        theme: "outline",
                        strokeWidth: 2.7
                      })
                    ]),
                    _: 1
                    /* STABLE */
                  }, 8, ["disabled"]),
                  V(" 翻译引擎菜单 "),
                  B.value ? (L(), O(
                    "div",
                    {
                      key: 0,
                      class: "translate-menu ocr-floating-menu",
                      style: ut(Z.value)
                    },
                    [
                      (L(!0), O(
                        Nt,
                        null,
                        Kt(ot.value, (P) => (L(), O("div", {
                          key: P.value,
                          class: et(["menu-item", { active: N.value === P.value }]),
                          onClick: (st) => wo(P.value)
                        }, [
                          y(
                            "span",
                            lg,
                            H(P.label),
                            1
                            /* TEXT */
                          ),
                          N.value === P.value ? (L(), xt(ae(M(dn)), {
                            key: 0,
                            class: "menu-item-icon",
                            size: "16"
                          })) : V("v-if", !0)
                        ], 10, rg))),
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
              y(
                "div",
                {
                  ref_key: "ocrLanguageMenuAnchorRef",
                  ref: q,
                  class: "ocr-engine-btn-group relative"
                },
                [
                  m(qt, {
                    class: "ocr-action-btn ocr-engine-main",
                    type: "text",
                    title: h.$t("pin.ocrLanguage"),
                    disabled: c.value,
                    onClick: wt(wi, ["stop"])
                  }, {
                    default: Ct(() => [
                      m(M(Un), {
                        size: "18",
                        theme: "outline",
                        strokeWidth: 2.5
                      }),
                      y(
                        "span",
                        null,
                        H(at.value),
                        1
                        /* TEXT */
                      )
                    ]),
                    _: 1
                    /* STABLE */
                  }, 8, ["title", "disabled"]),
                  m(qt, {
                    class: "ocr-action-btn ocr-engine-arrow",
                    type: "text",
                    disabled: c.value,
                    onClick: wt(wi, ["stop"])
                  }, {
                    default: Ct(() => [
                      m(M(Hi), {
                        size: "14",
                        theme: "outline",
                        strokeWidth: 3
                      })
                    ]),
                    _: 1
                    /* STABLE */
                  }, 8, ["disabled"]),
                  j.value ? (L(), O(
                    "div",
                    {
                      key: 0,
                      class: "ocr-engine-menu ocr-floating-menu",
                      style: ut(X.value)
                    },
                    [
                      (L(!0), O(
                        Nt,
                        null,
                        Kt(it.value, (P) => (L(), O("div", {
                          key: P.value,
                          class: et(["menu-item", { active: G.value === P.value }]),
                          onClick: (st) => yo(P.value)
                        }, [
                          y(
                            "span",
                            hg,
                            H(P.label),
                            1
                            /* TEXT */
                          ),
                          G.value === P.value ? (L(), xt(ae(M(dn)), {
                            key: 0,
                            class: "menu-item-icon",
                            size: "16"
                          })) : V("v-if", !0)
                        ], 10, cg))),
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
              y("div", ug, [
                m(qt, {
                  class: "ocr-action-btn ocr-engine-main",
                  type: "text",
                  title: h.$t("pin.recognizeAgain"),
                  disabled: c.value || !s.value,
                  onClick: wt(zn, ["stop"])
                }, {
                  default: Ct(() => [
                    m(M(On), {
                      size: "17",
                      theme: "outline",
                      strokeWidth: 2.5
                    }),
                    y(
                      "span",
                      null,
                      H(h.$t("pin.aiRecognizeAgain")),
                      1
                      /* TEXT */
                    )
                  ]),
                  _: 1
                  /* STABLE */
                }, 8, ["title", "disabled"])
              ]),
              m(qt, {
                class: "ocr-action-btn",
                type: "text",
                title: h.$t("pin.saveAsText"),
                disabled: !r.value.trim(),
                onClick: wt(uo, ["stop"])
              }, {
                default: Ct(() => [
                  m(M(Ui), {
                    size: "18",
                    theme: "outline",
                    strokeWidth: 2.5
                  }),
                  y(
                    "span",
                    null,
                    H(h.$t("pin.saveAsText")),
                    1
                    /* TEXT */
                  )
                ]),
                _: 1
                /* STABLE */
              }, 8, ["title", "disabled"]),
              k[5] || (k[5] = y(
                "span",
                { class: "ocr-action-divider" },
                null,
                -1
                /* HOISTED */
              )),
              m(qt, {
                class: "ocr-action-btn more",
                type: "text",
                title: h.$t("pin.more"),
                onClick: wt(ko, ["stop"])
              }, {
                default: Ct(() => [
                  m(M(Gr), {
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
        )) : V("v-if", !0),
        lt.value ? (L(), O(
          "div",
          dg,
          H(Math.round(ft.value * 100)) + "% ",
          1
          /* TEXT */
        )) : V("v-if", !0),
        V(" 右键菜单 "),
        yt.value ? (L(), O(
          "div",
          {
            key: 3,
            class: "context-menu",
            style: ut(At.value)
          },
          [
            y("div", {
              class: "menu-item",
              onClick: xi
            }, [
              (L(), xt(ae(mt.value ? M(Fi) : M(Vn)), {
                class: "menu-item-icon",
                size: "18",
                strokeWidth: 3
              })),
              y(
                "span",
                null,
                H(mt.value ? h.$t("pin.togglePin") : h.$t("pin.pinWindow")),
                1
                /* TEXT */
              )
            ]),
            y("div", {
              class: "menu-item",
              onClick: bi
            }, [
              m(M(Qr), {
                class: "menu-item-icon",
                size: "18",
                theme: "outline",
                strokeWidth: 3
              }),
              y(
                "span",
                null,
                H(h.$t("pin.resetZoom")),
                1
                /* TEXT */
              )
            ]),
            y("div", {
              class: "menu-item",
              onClick: Co
            }, [
              m(M(on), {
                class: "menu-item-icon",
                size: "18",
                theme: "outline",
                strokeWidth: 3
              }),
              y(
                "span",
                null,
                H(h.$t("pin.copyImage")),
                1
                /* TEXT */
              )
            ]),
            y("div", {
              class: "menu-item",
              onClick: _o
            }, [
              m(M(Ui), {
                class: "menu-item-icon",
                size: "18",
                theme: "outline",
                strokeWidth: 3
              }),
              y(
                "span",
                null,
                H(h.$t("pin.saveImage")),
                1
                /* TEXT */
              )
            ]),
            a.value === "ocr" && r.value.trim() ? (L(), O("div", {
              key: 0,
              class: "menu-item",
              onClick: Rn
            }, [
              m(M(on), {
                class: "menu-item-icon",
                size: "18",
                theme: "outline",
                strokeWidth: 3
              }),
              y(
                "span",
                null,
                H(h.$t("pin.copyText")),
                1
                /* TEXT */
              )
            ])) : V("v-if", !0),
            k[6] || (k[6] = y(
              "div",
              { class: "menu-divider" },
              null,
              -1
              /* HOISTED */
            )),
            y("div", {
              class: "menu-item danger",
              onClick: An
            }, [
              m(M(Fn), {
                class: "menu-item-icon",
                size: "18",
                theme: "outline",
                strokeWidth: 3
              }),
              y(
                "span",
                null,
                H(h.$t("pin.closePin")),
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
}), fg = /* @__PURE__ */ qe(gg, [["__scopeId", "data-v-8f08fe7a"]]), mg = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: fg
}, Symbol.toStringTag, { value: "Module" }));
async function pg(n) {
  return n.toDataURL("image/png");
}
function wg(n) {
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
async function yg(n) {
  const t = Date.now(), e = await pg(n);
  zt.log("[RapidOCR] recognizeFromCanvas start", {
    width: n.width,
    height: n.height
  });
  try {
    const i = await b("recognize_text_from_image", {
      imageData: e,
      engine: "rapidocr",
      language: "auto"
    }), s = wg(i.blocks), o = typeof i.full_text == "string" && i.full_text || typeof i.text == "string" && i.text || s.map((r) => r.text).join(`
`), a = {
      blocks: s,
      full_text: o,
      text: o,
      language: typeof i.language == "string" && i.language || Ss(o),
      confidence: Number(i.confidence || 0),
      engine: typeof i.engine == "string" ? i.engine : "rapidocr"
    };
    return zt.log("[RapidOCR] recognizeFromCanvas success", {
      durationMs: Date.now() - t,
      confidence: a.confidence,
      blocks: a.blocks.length,
      textLength: a.full_text.trim().length,
      textPreview: a.full_text.trim().slice(0, 300)
    }), a;
  } catch (i) {
    throw D.error("[OCR] RapidOCR recognizeFromCanvas failed", i), zt.log("[RapidOCR] recognizeFromCanvas failed", {
      durationMs: Date.now() - t,
      error: i instanceof Error ? `${i.name}: ${i.message}` : String(i)
    }), i;
  }
}
async function vg() {
  return Promise.resolve();
}
async function xg() {
  return Promise.resolve();
}
const kg = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  recognizeFromCanvas: yg,
  terminateOcr: xg,
  warmupOcr: vg
}, Symbol.toStringTag, { value: "Module" }));
export {
  Cg as activate
};
