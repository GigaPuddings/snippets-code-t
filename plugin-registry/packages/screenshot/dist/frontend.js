var xa = Object.defineProperty;
var ka = (n, t, e) => t in n ? xa(n, t, { enumerable: !0, configurable: !0, writable: !0, value: e }) : n[t] = e;
var P = (n, t, e) => ka(n, typeof t != "symbol" ? t + "" : t, e);
import { inject as xe, createVNode as y, defineComponent as Tt, ref as E, computed as O, watch as We, nextTick as ke, createElementBlock as D, openBlock as R, createCommentVNode as F, createElementVNode as x, Fragment as Ut, renderList as qt, normalizeClass as rt, createBlock as St, resolveDynamicComponent as ve, unref as M, toDisplayString as H, normalizeStyle as ht, onMounted as nn, onUnmounted as ui, withDirectives as qe, withKeys as Zi, vModelText as ba, getCurrentInstance as De, readonly as Sa, getCurrentScope as Ma, onScopeDispose as Ca, isRef as _a, warn as Ta, provide as za, mergeProps as Ra, renderSlot as se, Transition as di, withCtx as Lt, createTextVNode as Do, vShow as kn, shallowReactive as La, withModifiers as wt, isVNode as Je, render as bn } from "vue";
import { useI18n as Oo } from "vue-i18n";
const Sf = (n) => {
  n.registerRoute({
    target: "window",
    path: "/screenshot",
    name: "Screenshot",
    component: () => Promise.resolve().then(() => Qc)
  }), n.registerRoute({
    target: "window",
    path: "/pin",
    name: "Pin",
    component: () => Promise.resolve().then(() => gf)
  });
};
function Pa(n, t, e, i) {
  if (typeof t == "function" ? n !== t || !0 : !t.has(n)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
  return e === "m" ? i : e === "a" ? i.call(n) : i ? i.value : t.get(n);
}
function Aa(n, t, e, i, o) {
  if (typeof t == "function" ? n !== t || !0 : !t.has(n)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
  return t.set(n, e), e;
}
var fn;
const Zt = "__TAURI_TO_IPC_KEY__";
function Ia(n, t = !1) {
  return window.__TAURI_INTERNALS__.transformCallback(n, t);
}
async function S(n, t = {}, e) {
  return window.__TAURI_INTERNALS__.invoke(n, t, e);
}
function Da(n, t = "asset") {
  return window.__TAURI_INTERNALS__.convertFileSrc(n, t);
}
class Oa {
  get rid() {
    return Pa(this, fn, "f");
  }
  constructor(t) {
    fn.set(this, void 0), Aa(this, fn, t);
  }
  /**
   * Destroys and cleans up this resource from memory.
   * **You should not call any method on this object anymore and should drop any reference to it.**
   */
  async close() {
    return S("plugin:resources|close", {
      rid: this.rid
    });
  }
}
fn = /* @__PURE__ */ new WeakMap();
class Ze {
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
    return new Ge(this.width * t, this.height * t);
  }
  [Zt]() {
    return {
      width: this.width,
      height: this.height
    };
  }
  toJSON() {
    return this[Zt]();
  }
}
class Ge {
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
    return new Ze(this.width / t, this.height / t);
  }
  [Zt]() {
    return {
      width: this.width,
      height: this.height
    };
  }
  toJSON() {
    return this[Zt]();
  }
}
class Re {
  constructor(t) {
    this.size = t;
  }
  toLogical(t) {
    return this.size instanceof Ze ? this.size : this.size.toLogical(t);
  }
  toPhysical(t) {
    return this.size instanceof Ge ? this.size : this.size.toPhysical(t);
  }
  [Zt]() {
    return {
      [`${this.size.type}`]: {
        width: this.size.width,
        height: this.size.height
      }
    };
  }
  toJSON() {
    return this[Zt]();
  }
}
class Eo {
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
    return new ce(this.x * t, this.y * t);
  }
  [Zt]() {
    return {
      x: this.x,
      y: this.y
    };
  }
  toJSON() {
    return this[Zt]();
  }
}
class ce {
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
    return new Eo(this.x / t, this.y / t);
  }
  [Zt]() {
    return {
      x: this.x,
      y: this.y
    };
  }
  toJSON() {
    return this[Zt]();
  }
}
class cn {
  constructor(t) {
    this.position = t;
  }
  toLogical(t) {
    return this.position instanceof Eo ? this.position : this.position.toLogical(t);
  }
  toPhysical(t) {
    return this.position instanceof ce ? this.position : this.position.toPhysical(t);
  }
  [Zt]() {
    return {
      [`${this.position.type}`]: {
        x: this.position.x,
        y: this.position.y
      }
    };
  }
  toJSON() {
    return this[Zt]();
  }
}
var Vt;
(function(n) {
  n.WINDOW_RESIZED = "tauri://resize", n.WINDOW_MOVED = "tauri://move", n.WINDOW_CLOSE_REQUESTED = "tauri://close-requested", n.WINDOW_DESTROYED = "tauri://destroyed", n.WINDOW_FOCUS = "tauri://focus", n.WINDOW_BLUR = "tauri://blur", n.WINDOW_SCALE_FACTOR_CHANGED = "tauri://scale-change", n.WINDOW_THEME_CHANGED = "tauri://theme-changed", n.WINDOW_CREATED = "tauri://window-created", n.WEBVIEW_CREATED = "tauri://webview-created", n.DRAG_ENTER = "tauri://drag-enter", n.DRAG_OVER = "tauri://drag-over", n.DRAG_DROP = "tauri://drag-drop", n.DRAG_LEAVE = "tauri://drag-leave";
})(Vt || (Vt = {}));
async function $o(n, t) {
  await S("plugin:event|unlisten", {
    event: n,
    eventId: t
  });
}
async function Sn(n, t, e) {
  var i;
  const o = typeof e?.target == "string" ? { kind: "AnyLabel", label: e.target } : (i = e?.target) !== null && i !== void 0 ? i : { kind: "Any" };
  return S("plugin:event|listen", {
    event: n,
    target: o,
    handler: Ia(t)
  }).then((s) => async () => $o(n, s));
}
async function Ea(n, t, e) {
  return Sn(n, (i) => {
    $o(n, i.id), t(i);
  }, e);
}
async function $a(n, t) {
  await S("plugin:event|emit", {
    event: n,
    payload: t
  });
}
async function Wa(n, t, e) {
  await S("plugin:event|emit_to", {
    target: typeof n == "string" ? { kind: "AnyLabel", label: n } : n,
    event: t,
    payload: e
  });
}
let Ba = class mn extends Oa {
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
    return S("plugin:image|new", {
      rgba: Mn(t),
      width: e,
      height: i
    }).then((o) => new mn(o));
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
    return S("plugin:image|from_bytes", {
      bytes: Mn(t)
    }).then((e) => new mn(e));
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
    return S("plugin:image|from_path", { path: t }).then((e) => new mn(e));
  }
  /** Returns the RGBA data for this image, in row-major order from top to bottom.  */
  async rgba() {
    return S("plugin:image|rgba", {
      rid: this.rid
    }).then((t) => new Uint8Array(t));
  }
  /** Returns the size of this image.  */
  async size() {
    return S("plugin:image|size", { rid: this.rid });
  }
};
function Mn(n) {
  return n == null ? null : typeof n == "string" ? n : n instanceof Ba ? n.rid : n;
}
var Qn;
(function(n) {
  n[n.Critical = 1] = "Critical", n[n.Informational = 2] = "Informational";
})(Qn || (Qn = {}));
class Na {
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
var Gi;
(function(n) {
  n.None = "none", n.Normal = "normal", n.Indeterminate = "indeterminate", n.Paused = "paused", n.Error = "error";
})(Gi || (Gi = {}));
function Ha() {
  return new on(window.__TAURI_INTERNALS__.metadata.currentWindow.label, {
    // @ts-expect-error `skip` is not defined in the public API but it is handled by the constructor
    skip: !0
  });
}
async function Zn() {
  return S("plugin:window|get_all_windows").then((n) => n.map((t) => new on(t, {
    // @ts-expect-error `skip` is not defined in the public API but it is handled by the constructor
    skip: !0
  })));
}
const Gn = ["tauri://created", "tauri://error"];
class on {
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
    this.label = t, this.listeners = /* @__PURE__ */ Object.create(null), e?.skip || S("plugin:window|create", {
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
    return (e = (await Zn()).find((i) => i.label === t)) !== null && e !== void 0 ? e : null;
  }
  /**
   * Get an instance of `Window` for the current window.
   */
  static getCurrent() {
    return Ha();
  }
  /**
   * Gets a list of instances of `Window` for all available windows.
   */
  static async getAll() {
    return Zn();
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
    for (const t of await Zn())
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
    } : Sn(t, e, {
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
    } : Ea(t, e, {
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
    if (Gn.includes(t)) {
      for (const i of this.listeners[t] || [])
        i({
          event: t,
          id: -1,
          payload: e
        });
      return;
    }
    return $a(t, e);
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
    if (Gn.includes(e)) {
      for (const o of this.listeners[e] || [])
        o({
          event: e,
          id: -1,
          payload: i
        });
      return;
    }
    return Wa(t, e, i);
  }
  /** @ignore */
  _handleTauriEvent(t, e) {
    return Gn.includes(t) ? (t in this.listeners ? this.listeners[t].push(e) : this.listeners[t] = [e], !0) : !1;
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
    return S("plugin:window|scale_factor", {
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
    return S("plugin:window|inner_position", {
      label: this.label
    }).then((t) => new ce(t));
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
    return S("plugin:window|outer_position", {
      label: this.label
    }).then((t) => new ce(t));
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
    return S("plugin:window|inner_size", {
      label: this.label
    }).then((t) => new Ge(t));
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
    return S("plugin:window|outer_size", {
      label: this.label
    }).then((t) => new Ge(t));
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
    return S("plugin:window|is_fullscreen", {
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
    return S("plugin:window|is_minimized", {
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
    return S("plugin:window|is_maximized", {
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
    return S("plugin:window|is_focused", {
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
    return S("plugin:window|is_decorated", {
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
    return S("plugin:window|is_resizable", {
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
    return S("plugin:window|is_maximizable", {
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
    return S("plugin:window|is_minimizable", {
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
    return S("plugin:window|is_closable", {
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
    return S("plugin:window|is_visible", {
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
    return S("plugin:window|title", {
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
    return S("plugin:window|theme", {
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
    return S("plugin:window|is_always_on_top", {
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
    return S("plugin:window|center", {
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
    return t && (t === Qn.Critical ? e = { type: "Critical" } : e = { type: "Informational" }), S("plugin:window|request_user_attention", {
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
    return S("plugin:window|set_resizable", {
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
    return S("plugin:window|set_enabled", {
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
    return S("plugin:window|is_enabled", {
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
    return S("plugin:window|set_maximizable", {
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
    return S("plugin:window|set_minimizable", {
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
    return S("plugin:window|set_closable", {
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
    return S("plugin:window|set_title", {
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
    return S("plugin:window|maximize", {
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
    return S("plugin:window|unmaximize", {
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
    return S("plugin:window|toggle_maximize", {
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
    return S("plugin:window|minimize", {
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
    return S("plugin:window|unminimize", {
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
    return S("plugin:window|show", {
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
    return S("plugin:window|hide", {
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
    return S("plugin:window|close", {
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
    return S("plugin:window|destroy", {
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
    return S("plugin:window|set_decorations", {
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
    return S("plugin:window|set_shadow", {
      label: this.label,
      value: t
    });
  }
  /**
   * Set window effects.
   */
  async setEffects(t) {
    return S("plugin:window|set_effects", {
      label: this.label,
      value: t
    });
  }
  /**
   * Clear any applied effects if possible.
   */
  async clearEffects() {
    return S("plugin:window|set_effects", {
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
    return S("plugin:window|set_always_on_top", {
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
    return S("plugin:window|set_always_on_bottom", {
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
    return S("plugin:window|set_content_protected", {
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
    return S("plugin:window|set_size", {
      label: this.label,
      value: t instanceof Re ? t : new Re(t)
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
    return S("plugin:window|set_min_size", {
      label: this.label,
      value: t instanceof Re ? t : t ? new Re(t) : null
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
    return S("plugin:window|set_max_size", {
      label: this.label,
      value: t instanceof Re ? t : t ? new Re(t) : null
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
    return S("plugin:window|set_size_constraints", {
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
    return S("plugin:window|set_position", {
      label: this.label,
      value: t instanceof cn ? t : new cn(t)
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
    return S("plugin:window|set_fullscreen", {
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
    return S("plugin:window|set_focus", {
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
    return S("plugin:window|set_icon", {
      label: this.label,
      value: Mn(t)
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
    return S("plugin:window|set_skip_taskbar", {
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
    return S("plugin:window|set_cursor_grab", {
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
    return S("plugin:window|set_cursor_visible", {
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
    return S("plugin:window|set_cursor_icon", {
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
    return S("plugin:window|set_background_color", { color: t });
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
    return S("plugin:window|set_cursor_position", {
      label: this.label,
      value: t instanceof cn ? t : new cn(t)
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
    return S("plugin:window|set_ignore_cursor_events", {
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
    return S("plugin:window|start_dragging", {
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
    return S("plugin:window|start_resize_dragging", {
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
    return S("plugin:window|set_badge_count", {
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
    return S("plugin:window|set_badge_label", {
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
    return S("plugin:window|set_overlay_icon", {
      label: this.label,
      value: t ? Mn(t) : void 0
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
    return S("plugin:window|set_progress_bar", {
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
    return S("plugin:window|set_visible_on_all_workspaces", {
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
    return S("plugin:window|set_title_bar_style", {
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
    return S("plugin:window|set_theme", {
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
    return this.listen(Vt.WINDOW_RESIZED, (e) => {
      e.payload = new Ge(e.payload), t(e);
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
    return this.listen(Vt.WINDOW_MOVED, (e) => {
      e.payload = new ce(e.payload), t(e);
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
    return this.listen(Vt.WINDOW_CLOSE_REQUESTED, async (e) => {
      const i = new Na(e);
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
    const e = await this.listen(Vt.DRAG_ENTER, (a) => {
      t({
        ...a,
        payload: {
          type: "enter",
          paths: a.payload.paths,
          position: new ce(a.payload.position)
        }
      });
    }), i = await this.listen(Vt.DRAG_OVER, (a) => {
      t({
        ...a,
        payload: {
          type: "over",
          position: new ce(a.payload.position)
        }
      });
    }), o = await this.listen(Vt.DRAG_DROP, (a) => {
      t({
        ...a,
        payload: {
          type: "drop",
          paths: a.payload.paths,
          position: new ce(a.payload.position)
        }
      });
    }), s = await this.listen(Vt.DRAG_LEAVE, (a) => {
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
    const e = await this.listen(Vt.WINDOW_FOCUS, (o) => {
      t({ ...o, payload: !0 });
    }), i = await this.listen(Vt.WINDOW_BLUR, (o) => {
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
    return this.listen(Vt.WINDOW_SCALE_FACTOR_CHANGED, t);
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
    return this.listen(Vt.WINDOW_THEME_CHANGED, t);
  }
}
var Ki;
(function(n) {
  n.Disabled = "disabled", n.Throttle = "throttle", n.Suspend = "suspend";
})(Ki || (Ki = {}));
var qi;
(function(n) {
  n.AppearanceBased = "appearanceBased", n.Light = "light", n.Dark = "dark", n.MediumLight = "mediumLight", n.UltraDark = "ultraDark", n.Titlebar = "titlebar", n.Selection = "selection", n.Menu = "menu", n.Popover = "popover", n.Sidebar = "sidebar", n.HeaderView = "headerView", n.Sheet = "sheet", n.WindowBackground = "windowBackground", n.HudWindow = "hudWindow", n.FullScreenUI = "fullScreenUI", n.Tooltip = "tooltip", n.ContentBackground = "contentBackground", n.UnderWindowBackground = "underWindowBackground", n.UnderPageBackground = "underPageBackground", n.Mica = "mica", n.Blur = "blur", n.Acrylic = "acrylic", n.Tabbed = "tabbed", n.TabbedDark = "tabbedDark", n.TabbedLight = "tabbedLight";
})(qi || (qi = {}));
var Ji;
(function(n) {
  n.FollowsWindowActiveState = "followsWindowActiveState", n.Active = "active", n.Inactive = "inactive";
})(Ji || (Ji = {}));
var L = /* @__PURE__ */ ((n) => (n.None = "none", n.Drawing = "drawing", n.Moving = "moving", n.ResizingNW = "resizing-nw", n.ResizingNE = "resizing-ne", n.ResizingSW = "resizing-sw", n.ResizingSE = "resizing-se", n.ResizingN = "resizing-n", n.ResizingS = "resizing-s", n.ResizingW = "resizing-w", n.ResizingE = "resizing-e", n.DrawingRect = "drawing-rect", n.DrawingEllipse = "drawing-ellipse", n.DrawingLine = "drawing-line", n.DrawingArrow = "drawing-arrow", n.DrawingPen = "drawing-pen", n.EditingAnnotation = "editing-annotation", n.MovingAnnotation = "moving-annotation", n.ResizingAnnotationNW = "resizing-annotation-nw", n.ResizingAnnotationSE = "resizing-annotation-se", n.DrawingText = "drawing-text", n.DrawingMarker = "drawing-marker", n.DrawingMosaic = "drawing-mosaic", n.ColorPicking = "color-picking", n.Pinning = "pinning", n))(L || {}), f = /* @__PURE__ */ ((n) => (n.Select = "select", n.Rectangle = "rectangle", n.Ellipse = "ellipse", n.Line = "line", n.Arrow = "arrow", n.Pen = "pen", n.Mosaic = "mosaic", n.Text = "text", n.Marker = "marker", n.ColorPicker = "color-picker", n.Ocr = "ocr", n.Pin = "pin", n.Translate = "translate", n))(f || {});
function ti(n, t, e) {
  return !Number.isFinite(n) || n <= 0 ? 0 : Math.min(n, Math.max(0, t) / 2, Math.max(0, e) / 2);
}
function Fa(n, t, e, i) {
  if (!i) return e;
  const o = e.x - t.x, s = e.y - t.y;
  if (n === f.Ellipse || n === f.Rectangle) {
    const a = Math.max(Math.abs(o), Math.abs(s));
    return {
      x: t.x + Math.sign(o || 1) * a,
      y: t.y + Math.sign(s || 1) * a
    };
  }
  if (n === f.Line || n === f.Arrow) {
    const a = Math.hypot(o, s), r = Math.PI / 4, l = Math.round(Math.atan2(s, o) / r) * r;
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
function Qi(n, t) {
  return n.x >= t.x && n.x <= t.x + t.width && n.y >= t.y && n.y <= t.y + t.height;
}
function Wo(n) {
  return {
    x: n.x + n.width / 2,
    y: n.y + n.height / 2
  };
}
function ja(n, t) {
  return {
    x: Math.max(t.x, Math.min(n.x, t.x + t.width)),
    y: Math.max(t.y, Math.min(n.y, t.y + t.height))
  };
}
function te(n) {
  return n != null && typeof n.x == "number" && typeof n.y == "number" && !isNaN(n.x) && !isNaN(n.y) && isFinite(n.x) && isFinite(n.y);
}
function Le(n) {
  return n != null && typeof n.x == "number" && typeof n.y == "number" && typeof n.width == "number" && typeof n.height == "number" && !isNaN(n.x) && !isNaN(n.y) && !isNaN(n.width) && !isNaN(n.height) && isFinite(n.x) && isFinite(n.y) && isFinite(n.width) && isFinite(n.height) && n.width > 0 && n.height > 0;
}
class Va {
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
    if (!Le(t)) {
      console.warn("Invalid selection rect in drawMask:", t);
      return;
    }
    this.ctx.save();
    const i = this.canvas.width / (window.devicePixelRatio || 1), o = this.canvas.height / (window.devicePixelRatio || 1), s = Math.round(t.x), a = Math.round(t.y), r = Math.round(t.width), l = Math.round(t.height), h = ti(e, r, l);
    this.ctx.fillStyle = "rgba(0, 0, 0, 0.5)", this.ctx.beginPath(), this.ctx.rect(0, 0, i, o), this.ctx.roundRect(s, a, r, l, h), this.ctx.fill("evenodd"), this.ctx.restore();
  }
  // 绘制选择框
  drawSelectionBox(t, e = !0, i = 0) {
    const { x: o, y: s, width: a, height: r } = t;
    this.ctx.save();
    const l = Math.round(o) + 0.5, h = Math.round(s) + 0.5, u = Math.max(0, Math.round(a) - 1), d = Math.max(0, Math.round(r) - 1), v = ti(i, u, d);
    this.ctx.lineWidth = 1, this.ctx.setLineDash([5, 4]), this.ctx.strokeStyle = "rgba(0, 0, 0, 0.62)", this.ctx.beginPath(), this.ctx.roundRect(
      l + 1,
      h + 1,
      u,
      d,
      v
    ), this.ctx.stroke(), this.ctx.strokeStyle = "rgba(255, 255, 255, 0.96)", this.ctx.beginPath(), this.ctx.roundRect(l, h, u, d, v), this.ctx.stroke(), e && this.drawHandles(t), this.ctx.restore();
  }
  // 绘制控制点
  drawHandles(t) {
    const { x: e, y: i, width: o, height: s } = t, a = Wo(t);
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
    let v = i.x + d, k = i.y + d;
    v + h > e.x + e.width && (v = i.x - h - d), k + u > e.y + e.height && (k = i.y - u - d), v < e.x && (v = e.x + d), k < e.y && (k = e.y + d), this.ctx.save(), this.ctx.fillStyle = "rgba(250, 250, 250, 0.96)", this.ctx.strokeStyle = "rgba(0, 0, 0, 0.14)", this.ctx.lineWidth = 1, this.ctx.shadowColor = "rgba(0, 0, 0, 0.24)", this.ctx.shadowBlur = 18, this.ctx.shadowOffsetY = 8, this.ctx.beginPath(), this.ctx.roundRect(v, k, h, u, 10), this.ctx.fill(), this.ctx.stroke(), this.ctx.shadowColor = "transparent", this.ctx.shadowBlur = 0, this.ctx.shadowOffsetY = 0;
    const C = 108, m = v + (h - C) / 2, p = k + 16;
    this.ctx.fillStyle = "#f3f4f6", this.ctx.fillRect(m, p, C, C), this.ctx.strokeStyle = "rgba(0, 0, 0, 0.26)", this.ctx.lineWidth = 1, this.ctx.strokeRect(m, p, C, C);
    const z = a ? a.width : r, A = C / z;
    a && (this.ctx.imageSmoothingEnabled = !1, this.ctx.drawImage(
      a,
      0,
      0,
      a.width,
      a.height,
      m,
      p,
      C,
      C
    ), this.ctx.imageSmoothingEnabled = !0), this.ctx.beginPath(), this.ctx.strokeStyle = "rgba(255, 255, 255, 0.5)", this.ctx.lineWidth = 1;
    for (let Z = 1; Z < z; Z++) {
      const K = m + Z * A;
      this.ctx.moveTo(K, p), this.ctx.lineTo(K, p + C);
      const q = p + Z * A;
      this.ctx.moveTo(m, q), this.ctx.lineTo(m + C, q);
    }
    this.ctx.stroke(), this.ctx.beginPath(), this.ctx.strokeStyle = "rgba(0, 0, 0, 0.22)";
    for (let Z = 1; Z < z; Z++) {
      const K = m + Z * A + 0.5;
      this.ctx.moveTo(K, p), this.ctx.lineTo(K, p + C);
      const q = p + Z * A + 0.5;
      this.ctx.moveTo(m, q), this.ctx.lineTo(m + C, q);
    }
    this.ctx.stroke();
    const T = Math.floor(z / 2), j = m + T * A, X = p + T * A;
    this.ctx.fillStyle = "rgba(255, 255, 255, 0.18)", this.ctx.fillRect(j, X, A, A), this.ctx.setLineDash([]), this.ctx.strokeStyle = "rgba(255, 255, 255, 0.96)", this.ctx.lineWidth = 4, this.ctx.strokeRect(
      j - 1,
      X - 1,
      A + 2,
      A + 2
    ), this.ctx.strokeStyle = "rgba(0, 0, 0, 0.9)", this.ctx.lineWidth = 2, this.ctx.strokeRect(
      j,
      X,
      A,
      A
    ), this.ctx.fillStyle = "#333", this.ctx.font = '12px "SF Mono", "Consolas", "Monaco", monospace';
    let G = p + C + 22;
    if (o) {
      this.ctx.fillStyle = o.hex, this.ctx.fillRect(v + 16, G - 14, 20, 20), this.ctx.strokeStyle = "rgba(0, 0, 0, 0.22)", this.ctx.strokeRect(v + 16, G - 14, 20, 20), this.ctx.fillStyle = "#111827", this.ctx.font = '12px "SF Mono", "Consolas", "Monaco", monospace';
      const Z = s === "hex" ? o.hex : `${o.rgb.r}, ${o.rgb.g}, ${o.rgb.b}`;
      this.ctx.fillText(Z, v + 44, G), G += 19;
    }
    this.ctx.fillStyle = "#6b7280", this.ctx.font = "12px Arial", this.ctx.fillText(`X: ${Math.round(i.x)}, Y: ${Math.round(i.y)}`, v + 16, G), G += 17, this.ctx.font = "12px Arial";
    const V = l ? "已复制!" : "Q:复制 Shift:切换";
    this.ctx.fillStyle = l ? "#059669" : "#8b8f98", this.ctx.fillText(V, v + 16, G), this.ctx.restore();
  }
}
class Ua {
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
    return te(t) ? {
      x: t.x * this.scale,
      y: t.y * this.scale
    } : (console.warn("Invalid point in logicalToPhysical:", t), { x: 0, y: 0 });
  }
  // 物理像素转逻辑像素
  physicalToLogical(t) {
    return te(t) ? {
      x: t.x / this.scale,
      y: t.y / this.scale
    } : (console.warn("Invalid point in physicalToLogical:", t), { x: 0, y: 0 });
  }
  // 逻辑坐标转相对坐标（相对于截图区域）
  logicalToRelative(t, e) {
    return !te(t) || !Le(e) ? (console.warn("Invalid point or bounds in logicalToRelative"), { x: 0, y: 0 }) : {
      x: t.x - e.x,
      y: t.y - e.y
    };
  }
  // 相对坐标转逻辑坐标
  relativeToLogical(t, e) {
    return !te(t) || !Le(e) ? (console.warn("Invalid point or bounds in relativeToLogical"), { x: 0, y: 0 }) : {
      x: t.x + e.x,
      y: t.y + e.y
    };
  }
  // 矩形逻辑坐标转物理坐标
  rectLogicalToPhysical(t) {
    return Le(t) ? {
      x: t.x * this.scale,
      y: t.y * this.scale,
      width: t.width * this.scale,
      height: t.height * this.scale
    } : (console.warn("Invalid rect in rectLogicalToPhysical:", t), { x: 0, y: 0, width: 0, height: 0 });
  }
  // 限制点在画布范围内
  clampToCanvas(t) {
    if (!te(t))
      return console.warn("Invalid point in clampToCanvas:", t), { x: 0, y: 0 };
    const e = {
      x: 0,
      y: 0,
      width: this.canvasSize.width,
      height: this.canvasSize.height
    };
    return ja(t, e);
  }
  // 限制矩形在画布范围内
  clampRectToCanvas(t) {
    if (!Le(t))
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
    return Mt(t, e);
  }
  // 检查点是否在矩形内（使用工具函数）
  isPointInRect(t, e, i = 0) {
    if (!te(t) || !Le(e))
      return !1;
    if (i === 0)
      return Qi(t, e);
    const o = {
      x: e.x - i,
      y: e.y - i,
      width: e.width + i * 2,
      height: e.height + i * 2
    };
    return Qi(t, o);
  }
  // 检查点是否在线段附近
  isPointNearLine(t, e, i, o = 8) {
    if (!te(t) || !te(e) || !te(i))
      return !1;
    const s = t.x - e.x, a = t.y - e.y, r = i.x - e.x, l = i.y - e.y, h = s * r + a * l, u = r * r + l * l;
    if (u === 0)
      return Mt(t, e) <= o;
    const d = h / u;
    let v;
    return d < 0 ? v = e : d > 1 ? v = i : v = {
      x: e.x + d * r,
      y: e.y + d * l
    }, Mt(t, v) <= o;
  }
}
class Ya {
  constructor(t, e) {
    P(this, "coordinateSystem");
    P(this, "canvas");
    P(this, "isDrawing", !1);
    P(this, "currentOperation", L.None);
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
  getOperationType(t, e, i, o) {
    const s = this.getAnnotationAtPoint(t, o);
    if (e !== f.Select)
      return i ? this.coordinateSystem.isPointInRect(t, i) ? this.getDrawingOperationType(e) : L.None : L.Drawing;
    if (s) {
      if (s.getData().type === f.Mosaic)
        return L.None;
      const a = this.getAnnotationControlPointOperation(t, s);
      return a !== L.None ? a : L.MovingAnnotation;
    }
    return i ? this.getSelectionOperationType(t, i, o.length > 0) : L.Drawing;
  }
  // 获取绘图操作类型
  getDrawingOperationType(t) {
    return {
      [f.Rectangle]: L.DrawingRect,
      [f.Ellipse]: L.DrawingEllipse,
      [f.Line]: L.DrawingLine,
      [f.Arrow]: L.DrawingArrow,
      [f.Pen]: L.DrawingPen,
      [f.Text]: L.DrawingText,
      [f.Marker]: L.DrawingMarker,
      [f.Mosaic]: L.DrawingMosaic,
      [f.ColorPicker]: L.ColorPicking,
      [f.Ocr]: L.None,
      [f.Pin]: L.Pinning,
      [f.Translate]: L.None,
      [f.Select]: L.None
    }[t] || L.Drawing;
  }
  // 获取选择框操作类型
  getSelectionOperationType(t, e, i) {
    const { x: o, y: s, width: a, height: r } = e, l = 12;
    if (i)
      return L.None;
    const h = Wo(e);
    return this.isInHandle(t, { x: o, y: s }, l) ? L.ResizingNW : this.isInHandle(t, { x: o + a, y: s }, l) ? L.ResizingNE : this.isInHandle(t, { x: o, y: s + r }, l) ? L.ResizingSW : this.isInHandle(t, { x: o + a, y: s + r }, l) ? L.ResizingSE : this.isInHandle(t, { x: h.x, y: s }, l) ? L.ResizingN : this.isInHandle(t, { x: h.x, y: s + r }, l) ? L.ResizingS : this.isInHandle(t, { x: o, y: h.y }, l) ? L.ResizingW : this.isInHandle(t, { x: o + a, y: h.y }, l) ? L.ResizingE : this.coordinateSystem.isPointInRect(t, e) ? L.Moving : L.Drawing;
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
    if (!te(t))
      return L.None;
    const i = e.getData();
    if (i.type === f.Mosaic || i.type === f.Text || i.type === f.Marker)
      return L.None;
    if ([
      f.Rectangle,
      f.Ellipse,
      f.Line,
      f.Arrow
    ].includes(i.type) && i.points.length >= 2) {
      const o = i.points[0], s = i.points[i.points.length - 1], a = 8, r = 6, l = Mt(t, o), h = Mt(t, s);
      if (l <= a + r)
        return L.ResizingAnnotationNW;
      if (h <= a + r)
        return L.ResizingAnnotationSE;
    }
    return L.None;
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
    this.isDrawing = !1, this.currentOperation = L.None;
  }
  // 更新鼠标位置
  updateMousePosition(t) {
    this.lastMousePos = t;
  }
}
class de {
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
class Xa extends de {
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
      if (Mt(t, o) <= e)
        return i;
    }
    return null;
  }
  // 更新控制点
  updateControlPoint(t, e) {
    t >= 0 && t < this.data.points.length && (this.data.points[t] = e);
  }
}
class Za extends de {
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
class Ga extends de {
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
      return Mt(t, e) <= o;
    const l = Math.max(0, Math.min(1, ((t.x - e.x) * s + (t.y - e.y) * a) / r)), h = {
      x: e.x + l * s,
      y: e.y + l * a
    };
    return Mt(t, h) <= o;
  }
}
class Ka extends de {
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
      return Mt(t, e) <= o;
    const d = h / u;
    let v;
    return d < 0 ? v = e : d > 1 ? v = i : v = {
      x: e.x + d * r,
      y: e.y + d * l
    }, Mt(t, v) <= o;
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
      if (Mt(t, o) <= e)
        return i;
    }
    return null;
  }
  // 更新控制点
  updateControlPoint(t, e) {
    t >= 0 && t < this.data.points.length && (this.data.points[t] = e);
  }
}
class qa extends de {
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
      const e = this.data.points[this.data.points.length - 1], i = Mt(t, e);
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
      return this.data.points.length === 1 ? Mt(t, this.data.points[0]) <= e : !1;
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
      return Mt(t, e) <= o;
    const d = h / u;
    let v;
    return d < 0 ? v = e : d > 1 ? v = i : v = {
      x: e.x + d * r,
      y: e.y + d * l
    }, Mt(t, v) <= o;
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
const ie = "sans-serif", Pe = (n) => ({
  x: n.x + 4,
  y: n.y - 8
});
class Ja extends de {
  constructor(t, e, i, o = 16) {
    super({
      id: Math.random().toString(36).substr(2, 9),
      type: f.Text,
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
    const r = Pe(a), l = r.x * e - i.x, h = r.y * e - i.y;
    t.fillText(this.data.text, l, h), t.restore();
  }
  hitTest(t, e = 8) {
    if (!this.data.text || this.data.points.length === 0) return !1;
    const i = this.data.points[0], o = this.data.fontSize || 16, a = document.createElement("canvas").getContext("2d");
    if (!a) return !1;
    a.font = `${o}px ${ie}`;
    const l = a.measureText(this.data.text).width, { x: h, y: u } = Pe(i);
    return t.x >= h - e && t.x <= h + l + e && t.y >= u - e && t.y <= u + o + e;
  }
  getBounds() {
    if (!this.data.text || this.data.points.length === 0) return null;
    const t = this.data.points[0], e = this.data.fontSize || 16, o = document.createElement("canvas").getContext("2d");
    if (!o) return null;
    o.font = `${e}px ${ie}`;
    const a = o.measureText(this.data.text).width, { x: r, y: l } = Pe(t);
    return {
      x: r,
      y: l,
      width: a,
      height: e
    };
  }
  drawSelection(t) {
    if (!this.data.text || this.data.points.length === 0) return;
    const { ctx: e, scale: i, offset: o } = t, s = this.data.points[0], a = (this.data.fontSize || 16) * i, r = Pe(s), l = r.x * i - o.x, h = r.y * i - o.y;
    e.save(), e.font = `${a}px ${ie}`;
    const d = e.measureText(this.data.text).width;
    e.setLineDash([2, 2]), e.strokeStyle = "#3b82f6", e.lineWidth = 1, e.strokeRect(l, h, d, a), e.restore();
  }
  drawHover(t) {
    if (!this.data.text || this.data.points.length === 0) return;
    const { ctx: e, scale: i, offset: o } = t, s = this.data.points[0], a = (this.data.fontSize || 16) * i, r = Pe(s), l = r.x * i - o.x, h = r.y * i - o.y;
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
const ee = class ee extends de {
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
      const e = this.data.points[this.data.points.length - 1], i = Mt(t, e);
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
    ee.helperCanvas || (ee.helperCanvas = document.createElement("canvas"), ee.helperCtx = ee.helperCanvas.getContext("2d", { willReadFrequently: !0 }));
    const s = ee.helperCanvas, a = ee.helperCtx, r = e || 1, l = this.data.mosaicSize || 8, h = Math.max(Math.round(l * r), 4), u = Math.max(l * 3, 24), d = this.getBounds();
    if (!d) return;
    const v = u, k = Math.floor(d.x - v), C = Math.floor(d.y - v), m = Math.ceil(d.width + v * 2), p = Math.ceil(d.height + v * 2);
    if (m <= 0 || p <= 0) return;
    const z = Math.floor(k * r - i.x), A = Math.floor(C * r - i.y), T = Math.ceil(m * r), j = Math.ceil(p * r), X = t.canvas.width, G = t.canvas.height, V = Math.max(0, z), Z = Math.max(0, A), K = Math.min(T, X - V), q = Math.min(j, G - Z);
    if (K <= 0 || q <= 0) return;
    let Q;
    try {
      t.save(), t.setTransform(1, 0, 0, 1, 0, 0), Q = t.getImageData(V, Z, K, q), t.restore();
    } catch {
      return;
    }
    const nt = Q.data, at = V % h, xt = Z % h;
    for (let ot = -xt; ot < q; ot += h)
      for (let Y = -at; Y < K; Y += h) {
        const it = Math.max(0, Y), mt = Math.max(0, ot), lt = Math.min(K, Y + h), dt = Math.min(q, ot + h);
        if (it >= lt || mt >= dt) continue;
        let bt = 0, $ = 0, At = 0, U = 0;
        for (let zt = mt; zt < dt; zt++)
          for (let gt = it; gt < lt; gt++) {
            const Ot = (zt * K + gt) * 4;
            bt += nt[Ot], $ += nt[Ot + 1], At += nt[Ot + 2], U++;
          }
        if (U > 0) {
          bt = Math.round(bt / U / 8) * 8, $ = Math.round($ / U / 8) * 8, At = Math.round(At / U / 8) * 8;
          for (let gt = mt; gt < dt; gt++)
            for (let Ot = it; Ot < lt; Ot++) {
              const Ht = (gt * K + Ot) * 4;
              nt[Ht] = bt, nt[Ht + 1] = $, nt[Ht + 2] = At;
            }
        }
      }
    s.width = K, s.height = q, a.putImageData(Q, 0, 0), a.globalCompositeOperation = "destination-in", a.lineCap = "round", a.lineJoin = "round", a.lineWidth = u * r, a.fillStyle = "#000000", a.strokeStyle = "#000000", this.drawPathPhysical(a, r, i, V, Z), t.save(), this.applyOpacity(t), t.setTransform(1, 0, 0, 1, 0, 0), o && (t.beginPath(), t.rect(
      o.x * r - i.x,
      o.y * r - i.y,
      o.width * r,
      o.height * r
    ), t.clip()), t.drawImage(s, V, Z), t.restore();
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
        const d = this.data.points[u], v = this.data.points[u + 1], k = (a(d) + a(v)) / 2, C = (r(d) + r(v)) / 2;
        t.quadraticCurveTo(a(d), r(d), k, C);
      }
      const h = this.data.points[this.data.points.length - 1];
      t.lineTo(a(h), r(h)), t.stroke();
    }
  }
  hitTest(t, e = 8) {
    if (this.data.points.length === 0) return !1;
    if (this.data.points.length === 1)
      return Mt(t, this.data.points[0]) <= (this.data.mosaicSize || 8) * 1.5 + e;
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
    let v, k;
    d < 0 ? (v = e.x, k = e.y) : d > 1 ? (v = i.x, k = i.y) : (v = e.x + d * r, k = e.y + d * l);
    const C = t.x - v, m = t.y - k;
    return C * C + m * m <= o * o;
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
P(ee, "helperCanvas", null), P(ee, "helperCtx", null);
let ei = ee;
const he = 16, pn = (n = he) => Math.max(12, Math.round(n * 0.75)), ni = (n, t = he) => {
  const e = pn(t);
  return {
    x: n.x + e + 12,
    y: n.y - t / 2
  };
};
class Qa extends de {
  constructor(t, e, i, o, s = he) {
    super({
      id: Math.random().toString(36).substr(2, 9),
      type: f.Marker,
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
    const s = (this.data.fontSize || he) * e, a = pn(this.data.fontSize || he) * e, r = o.x * e - i.x, l = o.y * e - i.y, h = this.data.text?.trim() || "";
    if (t.save(), this.applyOpacity(t), t.lineCap = "round", t.lineJoin = "round", t.setLineDash([]), this.drawMarkerFace(t, r, l, a, s, e), h) {
      const u = ni(
        o,
        this.data.fontSize || he
      ), d = u.x * e - i.x, v = u.y * e - i.y, k = v + s + 3 * e;
      t.font = `${s}px ${ie}`, t.textAlign = "left", t.textBaseline = "top", t.fillStyle = this.data.style.color, t.fillText(h, d, v);
      const C = t.measureText(h).width;
      t.strokeStyle = this.data.style.color, t.lineWidth = Math.max(2, this.data.style.lineWidth * e * 0.75), t.beginPath(), t.moveTo(r + a * 0.72, l + a * 0.72), t.lineTo(d - 5 * e, k), t.lineTo(d + C + 3 * e, k), t.stroke();
    }
    t.restore();
  }
  drawMarkerFace(t, e, i, o, s, a) {
    t.beginPath(), t.arc(e, i, o, 0, Math.PI * 2), t.fillStyle = this.data.style.color, t.fill(), t.strokeStyle = "rgba(255, 255, 255, 0.92)", t.lineWidth = Math.max(1, a), t.stroke(), t.fillStyle = "#ffffff", t.font = `600 ${s}px ${ie}`, t.textAlign = "center", t.textBaseline = "middle", t.fillText(String(this.data.markerNumber || 1), e, i + a * 0.5);
  }
  hitTest(t, e = 8) {
    const i = this.data.points[0];
    if (!i) return !1;
    const o = pn(this.data.fontSize || he);
    if (Math.hypot(t.x - i.x, t.y - i.y) <= o + e) return !0;
    const a = this.getBounds();
    return !!a && t.x >= a.x - e && t.x <= a.x + a.width + e && t.y >= a.y - e && t.y <= a.y + a.height + e;
  }
  getBounds() {
    const t = this.data.points[0];
    if (!t) return null;
    const e = this.data.fontSize || he, i = pn(e), o = this.data.text?.trim() || "";
    let s = t.x + i;
    if (o) {
      const r = document.createElement("canvas").getContext("2d");
      r && (r.font = `${e}px ${ie}`, s = ni(t, e).x + r.measureText(o).width + 4);
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
class hn {
  static createAnnotation(t, e, i, o = {}) {
    switch (t) {
      case f.Rectangle:
        return new Xa(e, i);
      case f.Ellipse:
        return new Za(e, i);
      case f.Line:
        return new Ga(e, i);
      case f.Arrow:
        return new Ka(e, i);
      case f.Pen:
        return new qa(e, i);
      case f.Text:
        return new Ja(
          e,
          o.text || "",
          i,
          o.fontSize || 16
        );
      case f.Marker:
        return new Qa(
          e,
          o.markerNumber || 1,
          o.text || "",
          i,
          o.fontSize || 16
        );
      case f.Mosaic:
        return new ei(
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
const we = class we {
  constructor() {
    P(this, "pool", []);
    P(this, "maxPoolSize", 5);
    // 最大池大小
    P(this, "inUse", /* @__PURE__ */ new Set());
  }
  static getInstance() {
    return we.instance || (we.instance = new we()), we.instance;
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
P(we, "instance");
let ii = we;
async function tr(n, t) {
  return await S("get_local_plugin_resource_path", {
    pluginId: n,
    relativePath: t
  });
}
const er = "snippets-code:developer-mode", Bo = "snippets-code:frontend-diagnostics", nr = 240, je = "[REDACTED]", yn = (n) => n.replace(
  /("(?:[^"]*(?:token|password|secret|authorization)[^"]*)"\s*:\s*)("(?:\\.|[^"])*"|[^,\r\n}\]]+)/gi,
  `$1"${je}"`
).replace(/\bBearer\s+[A-Za-z0-9._~+/=-]+/gi, `Bearer ${je}`).replace(
  /\b(?:gh[pousr]_[A-Za-z0-9_]{12,}|github_pat_[A-Za-z0-9_]{12,})\b/g,
  je
).replace(/(https?:\/\/)[^/\s@]+@/gi, `$1${je}@`).replace(
  /([?&][^=&\s]*(?:token|password|secret|authorization)[^=&\s]*=)[^&\s]+/gi,
  `$1${je}`
), gi = (n) => {
  if (n === void 0) return;
  if (typeof n == "string") return yn(n);
  const t = /* @__PURE__ */ new WeakSet();
  try {
    return yn(
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
    return yn(String(n));
  }
}, ir = () => {
  try {
    return globalThis.__TAURI_INTERNALS__?.metadata?.currentWindow?.label ?? "webview";
  } catch {
    return "webview";
  }
}, or = () => {
  if (typeof localStorage > "u") return [];
  try {
    const n = JSON.parse(localStorage.getItem(Bo) || "[]");
    return Array.isArray(n) ? n : [];
  } catch {
    return [];
  }
}, fi = () => {
  if (typeof localStorage > "u") return !1;
  try {
    return localStorage.getItem(er) === "true";
  } catch {
    return !1;
  }
}, sr = (n, t, e) => {
  if (!fi() || typeof localStorage > "u") return;
  const i = or();
  i.push({
    timestamp: (/* @__PURE__ */ new Date()).toISOString(),
    level: n,
    windowLabel: ir(),
    message: yn(t),
    data: gi(e)
  });
  try {
    localStorage.setItem(
      Bo,
      JSON.stringify(i.slice(-nr))
    );
  } catch {
  }
}, ar = () => fi(), rr = (n) => n === "error" || fi(), un = (n, t, e) => {
  sr(n, t, e), rr(n) && S("frontend_log", {
    level: n,
    message: t,
    data: e === void 0 ? null : gi(e)
  }).catch(() => {
  });
}, I = {
  info: (n, t, ...e) => {
    un("info", n, t);
  },
  error: (n, t) => {
    un("error", n, t);
  },
  warn: (n, t) => {
    un("warn", n, t);
  },
  debug: (n, t) => {
    ar() && un("debug", n, t);
  }
}, Pt = {
  log: (n, t) => {
    S("append_ocr_diagnostic_log", {
      message: n,
      data: t === void 0 ? null : gi(t)
    }).catch(() => {
    });
  }
}, lr = "resources/transformers/transformers.min.js", cr = ["translation-offline-runtime", "translation"], hr = "https://huggingface.co/", ur = "{model}/resolve/{revision}/", dr = "/__snippets_code_disabled_transformers_local_models__/", gr = [
  "ort-wasm-simd-threaded.wasm",
  "ort-wasm-simd.wasm",
  "ort-wasm-threaded.wasm",
  "ort-wasm.wasm"
];
let Ve = null;
const fr = (n) => {
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
}, No = (n) => {
  const t = n.search(/[?#]/), e = t >= 0 ? n.slice(0, t) : n, i = fr(e);
  return i.index >= 0 ? e.slice(0, i.index + i.length) : e;
}, Ho = (n) => {
  const t = No(n);
  return Object.fromEntries(
    gr.map((e) => [e, `${t}${e}`])
  );
}, mr = (n, t) => {
  var e, i;
  n.useBrowserCache = !0, n.allowRemoteModels = !0, n.remoteHost = hr, n.remotePathTemplate = ur, n.allowLocalModels = !1, n.localModelPath = dr, t && (n.backends ?? (n.backends = {}), (e = n.backends).onnx ?? (e.onnx = {}), (i = n.backends.onnx).wasm ?? (i.wasm = {}), n.backends.onnx.wasm.wasmPaths = Ho(t), n.backends.onnx.wasm.numThreads = 1);
};
async function pr() {
  return Ve || (Ve = (async () => {
    for (const n of cr) {
      const t = await tr(n, lr);
      if (!t) continue;
      const e = Da(t), i = await import(
        /* @vite-ignore */
        e
      );
      return mr(i.env, e), I.info(`[离线翻译] 已从插件资源加载 Transformers runtime: ${n}`, {
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
    throw Ve = null, n;
  }), Ve);
}
let oe = null, Ke = !1, Ae = null, be = null, oi = null;
const yr = "Xenova/opus-mt-en-zh", wr = [
  { name: "tokenizer_config.json", size: "~1KB" },
  { name: "config.json", size: "~1KB" },
  { name: "tokenizer.json", size: "~2MB" },
  { name: "generation_config.json", size: "~1KB" },
  { name: "onnx/encoder_model_quantized.onnx", size: "~75MB" },
  { name: "onnx/decoder_model_merged_quantized.onnx", size: "~220MB" }
], vr = 3e5;
function xr(n) {
  oi = n;
}
function kr() {
  return wr;
}
function br(n, t, e) {
  return Promise.race([
    n,
    new Promise(
      (i, o) => setTimeout(() => o(new Error(e)), t)
    )
  ]);
}
async function Fo() {
  return oe || Ae || (Ke = !0, I.info("[离线翻译] 正在加载翻译模型..."), Ae = (async () => {
    try {
      const { pipeline: n } = await pr();
      let t = "";
      const e = n("translation", yr, {
        dtype: "q8",
        device: "wasm",
        revision: "main",
        local_files_only: !1,
        progress_callback: (o) => {
          o.status === "done" && o.file && o.file !== t && (t = o.file, I.info(`[离线翻译] 已加载: ${o.file}`)), oi && oi({
            status: o.status,
            progress: o.progress,
            file: o.file
          });
        }
      });
      return oe = await br(
        e,
        vr,
        "模型加载超时，请检查网络连接后重试"
      ), I.info("[离线翻译] 翻译模型加载完成"), Ke = !1, oe;
    } catch (n) {
      throw Ke = !1, Ae = null, I.error("[离线翻译] 模型加载失败:", n), n;
    }
  })(), Ae);
}
async function jo(n) {
  if (!n?.trim()) return n;
  be = new AbortController();
  const t = be.signal;
  try {
    const e = await Fo();
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
    throw e instanceof Error && e.message === "翻译已取消" ? (I.info("[离线翻译] 翻译已取消"), e) : e instanceof Error && e.message.includes("离线翻译运行时未安装") ? (I.warn("[离线翻译] 运行时资源未安装"), e) : (I.error("[离线翻译] 翻译失败:", e), new Error("离线翻译失败，请检查模型是否正确加载"));
  } finally {
    be = null;
  }
}
function Sr() {
  be && (be.abort(), be = null, I.info("[离线翻译] 已发送取消信号"));
}
function Mr() {
  return be !== null;
}
async function Vo() {
  await Fo();
}
function Cr() {
  return oe !== null;
}
function _r() {
  return Ke;
}
async function mi() {
  try {
    if ("caches" in window) {
      const t = await caches.keys();
      I.info(`[离线翻译] Cache Storage 列表: ${JSON.stringify(t)}`);
      for (const e of t)
        if (e.includes("transformers") || e.includes("huggingface")) {
          const o = await (await caches.open(e)).keys();
          if (I.info(`[离线翻译] Cache "${e}" 包含 ${o.length} 个文件`), o.some(
            (a) => a.url.includes("opus-mt-en-zh") || a.url.includes("Xenova")
          )) {
            const a = o.some((r) => r.url.includes(".onnx"));
            if (I.info(`[离线翻译] 找到模型缓存，包含 ONNX: ${a}`), a)
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
    I.info(`[离线翻译] IndexedDB 列表: ${JSON.stringify(n.map((t) => t.name))}`);
    for (const t of n)
      if (t.name && (t.name.includes("transformers") || t.name.includes("huggingface") || t.name.includes("onnx") || t.name.includes("localforage")))
        return I.info(`[离线翻译] 找到 IndexedDB 缓存: ${t.name}`), {
          isCached: !0,
          cacheType: "indexeddb",
          cacheName: t.name,
          estimatedSize: "~300MB"
        };
    return I.info("[离线翻译] 未找到模型缓存"), { isCached: !1, cacheType: "none" };
  } catch (n) {
    return I.warn("[离线翻译] 检查缓存失败:", n), { isCached: !1, cacheType: "none" };
  }
}
async function Tr() {
  return (await mi()).isCached;
}
function zr() {
  return oe !== null;
}
async function Rr() {
  if (oe)
    try {
      await oe.dispose?.();
    } catch {
    }
  oe = null, Ae = null, Ke = !1, I.info("[离线翻译] 翻译器已释放");
}
async function Lr() {
  try {
    const n = await indexedDB.databases();
    for (const t of n)
      t.name && (t.name.includes("transformers") || t.name.includes("onnx")) && (indexedDB.deleteDatabase(t.name), I.info(`[离线翻译] 已删除 IndexedDB: ${t.name}`));
    if ("caches" in window) {
      const t = await caches.keys();
      for (const e of t)
        (e.includes("transformers") || e.includes("onnx")) && (await caches.delete(e), I.info(`[离线翻译] 已删除 Cache: ${e}`));
    }
    I.info("[离线翻译] 模型缓存已清除");
  } catch (n) {
    throw I.error("[离线翻译] 清除缓存失败:", n), n;
  }
}
const Pr = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  canUseOfflineTranslation: zr,
  cancelOfflineTranslation: Sr,
  clearModelCache: Lr,
  disposeOfflineTranslator: Rr,
  getModelCacheInfo: mi,
  getModelFiles: kr,
  getRuntimeBaseUrl: No,
  getRuntimeWasmPaths: Ho,
  isModelCached: Tr,
  isOfflineTranslatorInitializing: _r,
  isOfflineTranslatorReady: Cr,
  isTranslationInProgress: Mr,
  setProgressCallback: xr,
  translateOffline: jo,
  warmupOfflineTranslator: Vo
}, Symbol.toStringTag, { value: "Module" }));
class ye {
  /**
   * 懒加载 OCR 模块
   */
  static async loadOCR() {
    const t = "ocr";
    if (this.loadedModules.has(t))
      return this.loadedModules.get(t);
    if (this.loadingPromises.has(t))
      return this.loadingPromises.get(t);
    const e = Promise.resolve().then(() => vf).then((i) => (this.loadedModules.set(t, i), this.loadingPromises.delete(t), i));
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
    const e = Promise.resolve(Pr).then((i) => (this.loadedModules.set(t, i), this.loadingPromises.delete(t), i));
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
P(ye, "loadedModules", /* @__PURE__ */ new Map()), P(ye, "loadingPromises", /* @__PURE__ */ new Map());
async function Ar() {
  return await S("local_ai_get_config");
}
async function Ir(n) {
  return await S("local_ai_scan_models", {
    config: n ?? null
  });
}
async function Uo() {
  return await S("local_ai_get_status");
}
async function Dr(n) {
  return await S("local_ai_start_service", {
    config: null
  });
}
async function Yo(n) {
  return await S("local_ai_chat", { request: n });
}
function Xo(n) {
  if (!n) return "unknown";
  const t = n.match(/[\u4e00-\u9fa5]/g), e = t ? t.length : 0, i = n.match(/[\u3040-\u30ff]/g), o = i ? i.length : 0, s = n.match(/[\uac00-\ud7af]/g), a = s ? s.length : 0, r = n.match(/[a-zA-Z]/g), l = r ? r.length : 0, u = e + o + a + l;
  return u === 0 ? "unknown" : o >= 3 && o > l && o / u >= 0.2 ? "ja" : a >= 3 && a > e && a > l && a / u >= 0.2 ? "ko" : e > l ? "zh" : l > e ? "en" : "unknown";
}
function Ie(n) {
  return n === "zh" || n === "en";
}
function pe(n) {
  return Xo(n);
}
const Or = /[.!?。！？；;：:][)"'”’】）\]]*$/, to = /[\u3040-\u30ff\u3400-\u4dbf\u4e00-\u9fff\uac00-\ud7af]/, dn = /[A-Za-z0-9]/, Er = /^\s*(?:(?:[-*+•·●○■□▪▫◆◇]|[▶▷►▸▹→]\s*(?:[·•]\s*)?)\s+|\d+[.)、）]\s*|[a-zA-Z][.)]\s+)/, eo = /(?:^|\s)(?:(?:[-*+•·●○■□▪▫◆◇]|[▶▷►▸▹→]\s*[·•])\s+|\d+[.)、）]\s*|[a-zA-Z][.)]\s+)/g;
function Zo(n, t = {}) {
  const e = kl(n), i = Gr(n, e);
  return i.length === 0 ? [] : Yr(i, e) ? Ur(i, e) : (t.mode === "single_para" ? [Xe(i, e)] : Wr(i, e)).flatMap((s) => $r(s, e));
}
function $r(n, t) {
  const e = yi(n, t), i = [];
  for (const o of e) {
    const s = i[i.length - 1], a = s ? el(s, o, t) : !1;
    if (!s || !a) {
      i.push(il(o));
      continue;
    }
    s.text = sl(s.text, o.text), s.blocks = [...s.blocks, ...o.blocks], s.bbox = ts(s.bbox, o.bbox), s.fontSize = oo(
      s.fontSize || o.fontSize,
      s.blocks.length - o.blocks.length,
      o.fontSize,
      o.blocks.length
    ), s.lineHeight = oo(
      s.lineHeight || o.lineHeight,
      s.blocks.length - o.blocks.length,
      o.lineHeight,
      o.blocks.length
    ), s.isCodeBlock = !!(s.isCodeBlock || o.isCodeLike || o.hasTableColumns), s.isStructuredBlock = !!(s.isStructuredBlock || o.hasTableColumns);
  }
  return al(i, t);
}
function Wr(n, t) {
  if (n.length <= 1)
    return [n];
  const e = n.map((l) => ({
    bbox: Xr(l),
    block: l
  })).filter((l) => Zr(l.bbox)).sort(pi);
  if (e.length <= 1)
    return [Xe(n, t)];
  if (Br(e, t))
    return [Xe(n, t)];
  const { cuts: i, rows: o } = Nr(e);
  if (i.length < 2 || o.length <= 1)
    return [Xe(n, t)];
  const s = jr(i, o), r = Vr(s).filter((l) => l.units.length > 0).map((l) => l.units.map((h) => h.block)).filter((l) => l.length > 0);
  return r.length > 0 ? r : [Xe(n, t)];
}
function Br(n, t) {
  if (n.length < 2)
    return !0;
  const e = [...n].sort(pi);
  let i = 0, o = 0;
  for (let s = 1; s < e.length; s += 1) {
    const a = e[s - 1].bbox, r = e[s].bbox;
    if (r.top - a.bottom > t * 2.5)
      continue;
    i += 1;
    const h = Math.min(a.right, r.right) - Math.max(a.left, r.left), u = Math.max(Math.min(a.right - a.left, r.right - r.left), 1), d = h / u >= 0.45, v = Math.abs(a.left - r.left) <= t * 1.5;
    (d || v) && (o += 1);
  }
  return i > 0 && o / i >= 0.72;
}
function Nr(n) {
  const t = Math.min(...n.map((l) => l.bbox.left)) - 1, e = Math.max(...n.map((l) => l.bbox.right)) + 1, i = [], o = [];
  let s = [], a = 0;
  for (; a < n.length; ) {
    const h = n[a].bbox.bottom, u = [];
    for (; a < n.length && n[a].bbox.top <= h; )
      u.push(n[a]), a += 1;
    u.sort((m, p) => m.bbox.left - p.bbox.left || m.bbox.right - p.bbox.right);
    const d = Hr(u, t, e, i.length), { gaps: v, removedGaps: k } = Fr(s, d), C = i.length - 1;
    for (const m of k)
      o.push({
        left: m.left,
        right: m.right,
        startRow: m.startRow,
        endRow: C
      });
    s = v, i.push(u);
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
function Hr(n, t, e, i) {
  const o = [];
  let s = t;
  for (const a of n)
    a.bbox.left > s && o.push({ left: s, right: a.bbox.left, startRow: i }), a.bbox.right > s && (s = a.bbox.right);
  return o.push({ left: s, right: e, startRow: i }), o;
}
function Fr(n, t) {
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
function jr(n, t) {
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
    const l = r.xRight - 2, h = o.filter((k) => l >= k.xLeft && l <= k.xRight + 1e-4 && k.rowBottom < r.rowTop), u = Math.max(...h.map((k) => k.rowBottom), i.rowBottom), d = h.filter((k) => k.rowBottom === u);
    (d.length > 0 ? d.reduce((k, C) => C.xRight > k.xRight ? C : k) : i).children.push(r), o.push(r);
  };
  for (let r = 0; r < t.length; r += 1) {
    const l = e[r], h = [];
    for (const k of s) {
      let C = !1, m = !1, p = !1;
      for (const z of l)
        if (gn(z.right, k.xLeft) && (C = !0), gn(z.left, k.xRight) && (m = !0), k.xLeft < z.left && z.left < k.xRight || k.xLeft < z.right && z.right < k.xRight) {
          p = !0;
          break;
        }
      !C || !m || p ? a(k) : (k.rowBottom = r, h.push(k));
    }
    s = h;
    let u = 0, d = 0;
    const v = t[r];
    for (; u < v.length && l.length >= 2; ) {
      const k = v[u];
      d + 1 >= l.length && (d = Math.max(0, l.length - 2));
      const C = l[d].right, m = l[d + 1].left;
      if (k.bbox.left + 1e-4 > m && d < l.length - 2) {
        d += 1;
        continue;
      }
      let p = s.find((z) => gn(z.xLeft, C) && gn(z.xRight, m));
      p || (p = {
        xLeft: C,
        xRight: m,
        rowTop: r,
        rowBottom: r,
        units: [],
        children: []
      }, s.push(p)), p.units.push(k), u += 1;
    }
  }
  for (const r of s)
    a(r);
  for (const r of o)
    r.children.sort((l, h) => l.xLeft - h.xLeft || l.rowTop - h.rowTop), r.units.sort(pi);
  return i;
}
function Vr(n) {
  const t = [n], e = [];
  for (; t.length > 0; ) {
    const i = t.pop();
    i && (e.push(i), t.push(...[...i.children].reverse()));
  }
  return e;
}
function Xe(n, t) {
  return [...n].sort((e, i) => {
    const o = e.y - i.y;
    return Math.abs(o) > t * 0.45 ? o : e.x - i.x;
  });
}
function Ur(n, t) {
  const e = ue(Nt(n.map((a) => a.width)), t * 0.5), i = Math.max(e * 1.4, t * 0.28), o = [...n].sort((a, r) => {
    const l = r.x + r.width / 2 - (a.x + a.width / 2);
    return Math.abs(l) > t * 0.65 ? l : a.y - r.y;
  }), s = [];
  for (const a of o) {
    const r = a.x + a.width / 2, l = s[s.length - 1], h = l ? Nt(l.map((u) => u.x + u.width / 2)) : 0;
    l && Math.abs(r - h) <= i ? l.push(a) : s.push([a]);
  }
  return s.map((a) => {
    const r = [...a].sort((v, k) => v.y - k.y), l = r.reduce((v, k, C) => {
      const m = k.text.trim();
      return C === 0 ? m : wi(v, m);
    }, ""), h = Qo(r), u = Nt(r.map((v) => ue(v.fontSize, t))), d = Nt(r.map((v) => Ln(v)));
    return {
      text: l,
      blocks: r,
      bbox: h,
      isCodeBlock: !1,
      isStructuredBlock: !1,
      fontSize: u,
      lineHeight: d,
      angle: Nt(r.map((v) => v.angle || 0))
    };
  });
}
function Yr(n, t) {
  return n.length < 2 ? !1 : n.filter((i) => {
    const o = Math.max(i.width, 1);
    return i.height > o * 1.35 && i.height > Math.max(18, t * 0.35);
  }).length >= Math.max(2, Math.ceil(n.length * 0.56));
}
function Xr(n) {
  return {
    left: n.x,
    top: n.y,
    right: n.x + n.width,
    bottom: n.y + n.height
  };
}
function Zr(n) {
  return Number.isFinite(n.left) && Number.isFinite(n.top) && Number.isFinite(n.right) && Number.isFinite(n.bottom) && n.right >= n.left && n.bottom >= n.top;
}
function pi(n, t) {
  return n.bbox.top - t.bbox.top || n.bbox.left - t.bbox.left;
}
function gn(n, t) {
  return Math.abs(n - t) <= 1e-4;
}
function Gr(n, t) {
  return n.map((e) => {
    const i = e.text.trim();
    if (!i || Kr(e, t) || Jr(i))
      return null;
    const o = Qr(qr(i, e, t));
    return o === e.text ? e : { ...e, text: o };
  }).filter((e) => !!e);
}
function Kr(n, t) {
  const e = n.text.trim();
  if (!/^[cC]$/.test(e))
    return !1;
  const i = t * 1.25;
  return n.width <= i && n.height <= i;
}
function qr(n, t, e) {
  return /^xC$/i.test(n) && t.width <= e * 2.4 ? "X" : n;
}
function Jr(n) {
  return /^(?:en|zh|ja|ko|de|fr|es|ru|pt|it|nl)[A-Z]{2,4}$/.test(n.trim());
}
function Qr(n) {
  return n.replace(/^:\s+(?=[A-Z])/, "- ");
}
function yi(n, t) {
  const e = [...n].sort((s, a) => {
    const r = s.y - a.y;
    return Math.abs(r) > t * 0.45 ? r : s.x - a.x;
  }), i = [], o = t * 0.45;
  for (const s of e) {
    const a = i[i.length - 1];
    a && Math.abs(s.y - a.y) < o && !pl(a.blocks, s, t) ? (a.blocks.push(s), a.y = Nt(a.blocks.map((r) => r.y))) : i.push({ y: s.y, blocks: [s] });
  }
  return i.map((s) => tl(s.blocks, t));
}
function tl(n, t) {
  const e = [...n].sort((r, l) => r.x - l.x), i = Qo(e), o = e.reduce((r, l, h) => {
    const u = l.text.trim();
    return h === 0 ? u : ol(r, u);
  }, ""), s = Nt(e.map((r) => ue(r.fontSize, t))), a = Nt(e.map((r) => Ln(r)));
  return {
    text: o,
    blocks: e,
    bbox: i,
    fontSize: s,
    lineHeight: a,
    centerY: i.y + i.height / 2,
    hasTableColumns: yl(e, t),
    isCodeLike: qo(o)
  };
}
function el(n, t, e) {
  const i = yi(n.blocks, e), o = i[i.length - 1];
  if (!o) return !1;
  const s = Qe(o.text);
  if (Rn(o.text) || Qe(t.text) || s && !nl(o, t, e) || t.isCodeLike || o.isCodeLike || t.hasTableColumns || o.hasTableColumns) return !1;
  const a = t.bbox.y - (o.bbox.y + o.bbox.height);
  if (a < -e * 0.25 || a >= e * 1.8 || ul(i, a, e) || dl(o, t, a, e) || gl(o, t, a, e) || fl(o, t, a, e) || ml(o, t, a, e))
    return !1;
  if (s)
    return !0;
  const r = Math.max(e * 1.2, o.lineHeight * 0.9);
  return Math.abs(t.bbox.x - o.bbox.x) <= r;
}
function nl(n, t, e) {
  if (Ko(t.text))
    return !1;
  const i = t.bbox.x - n.bbox.x, o = Math.max(e * 0.8, n.lineHeight * 0.65);
  return i >= o;
}
function il(n) {
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
function ol(n, t) {
  return wi(n, t);
}
function sl(n, t) {
  return wi(n, t);
}
function wi(n, t) {
  const e = n.trimEnd(), i = t.trimStart();
  if (!e) return i;
  if (!i) return e;
  const o = e.charAt(e.length - 1), s = i.charAt(0), a = e.charAt(e.length - 2);
  return o === "-" && dn.test(a) && dn.test(s) ? `${e.slice(0, -1)}${i}` : bl(s) || Sl(o) ? `${e}${i}` : to.test(o) || to.test(s) || so(o) || so(s) ? `${e}${i}` : dn.test(o) && dn.test(s) ? `${e} ${i}` : `${e} ${i}`.replace(/\s+/g, " ");
}
function Rn(n) {
  return Or.test(n.trim());
}
function Qe(n) {
  return Er.test(n);
}
function al(n, t) {
  return n.flatMap((e) => rl(e, t));
}
function rl(n, t) {
  const e = Go(n.text);
  if (e.length <= 1)
    return [n];
  const i = yi(n.blocks, t), o = i.length === e.length;
  return e.map((s, a) => {
    const r = o ? i[a] : null, l = r?.bbox || cl(n.bbox, a, e.length), h = r?.blocks || [hl(n, s, l, a)];
    return {
      ...n,
      text: s,
      blocks: h,
      bbox: l,
      isCodeBlock: !!h.some((u) => qo(u.text)),
      isStructuredBlock: n.isStructuredBlock,
      fontSize: Nt(h.map((u) => ue(u.fontSize, n.fontSize || t))),
      lineHeight: Nt(h.map((u) => Ln(u))),
      angle: Nt(h.map((u) => u.angle || 0))
    };
  });
}
function Go(n) {
  const t = n.split(/\r?\n+/).map((i) => i.trim()).filter(Boolean);
  if (t.length > 1)
    return t.flatMap(Go);
  const e = ll(n);
  return e.length > 1 ? e.flatMap(no) : no(n);
}
function ll(n) {
  const t = n.trim(), e = [];
  eo.lastIndex = 0;
  for (const i of t.matchAll(eo)) {
    const o = i[0], s = i.index ?? 0;
    e.push(s + (o.startsWith(" ") ? 1 : 0));
  }
  return e.length <= 1 ? [t] : e.map((i, o) => {
    const s = e[o + 1] ?? t.length;
    return t.slice(i, s).trim();
  }).filter(Boolean);
}
function no(n) {
  const t = n.trim();
  if (!Qe(t))
    return [t];
  const e = t.match(/^(.+?\([^)]{1,80}\))\s+([A-Z][A-Za-z0-9][A-Za-z0-9\s:,'&()[\]/-]{2,40})$/);
  return !e || !Ko(e[2]) ? [t] : [e[1].trim(), e[2].trim()];
}
function cl(n, t, e) {
  const i = n.height / Math.max(e, 1);
  return {
    x: n.x,
    y: n.y + i * t,
    width: n.width,
    height: i
  };
}
function hl(n, t, e, i) {
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
function Ko(n) {
  const t = n.trim();
  return !t || Rn(t) || Qe(t) ? !1 : t.split(/\s+/).filter(Boolean).length <= 5 && /^[A-Z][A-Za-z0-9\s:,'&()[\]/-]+$/.test(t);
}
function ul(n, t, e) {
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
function dl(n, t, e, i) {
  const o = n.text.trim();
  if (!o || Rn(o) || Qe(o) || n.isCodeLike || o.endsWith("-"))
    return !1;
  const s = o.split(/\s+/).filter(Boolean).length, a = n.bbox.width < t.bbox.width * 0.72, r = /^[A-Z][A-Za-z0-9\s:,'&()[\]/-]+$/.test(o) && s <= 8 && a, l = /[\u3400-\u4dbf\u4e00-\u9fff]/.test(o) && o.length <= 12 && a, h = r || l;
  return n.fontSize >= t.fontSize * 1.18 && h ? !0 : e > i * 0.7 && h;
}
function gl(n, t, e, i) {
  if (e <= 0)
    return !1;
  const o = Math.max(n.fontSize, t.fontSize), s = Math.max(Math.min(n.fontSize, t.fontSize), 1), a = o / s, r = e / Math.max(s, i * 0.6, 1);
  if (a >= 1.45 && r >= 0.65)
    return !0;
  const l = n.fontSize >= i * 1.08 && n.bbox.width >= t.bbox.width * 0.82, h = t.fontSize <= n.fontSize * 0.78 && e >= Math.max(t.lineHeight * 0.75, i * 0.55);
  return l && h;
}
function fl(n, t, e, i) {
  if (e < i * 0.45)
    return !1;
  const s = n.text.split(/\s+/).filter(Boolean).length <= 3 && n.bbox.width < t.bbox.width * 0.35, a = Math.abs(n.bbox.x - t.bbox.x) <= i * 0.6;
  return s && a;
}
function ml(n, t, e, i) {
  return e < i * 0.25 || !(Math.abs(n.bbox.x - t.bbox.x) <= i * 0.35) ? !1 : io(n.text) && io(t.text);
}
function io(n) {
  const t = n.trim();
  return t.split(/\s+/).filter(Boolean).length <= 3 && t.length <= 32 && !Rn(t);
}
function qo(n) {
  const t = n.trim();
  return t ? !!(/^(?:\$|>|PS>|C:\\|[A-Za-z]:\\|\/[\w.-]+\/)/.test(t) || /^(?:const|let|var|return|import|export|function|class|if|else|for|while|try|catch)\b/.test(t) || /^[{}()[\];,]+$/.test(t) || /^(?:sudo|npm|yarn|pnpm|deno|bun|git|cd|ls|cat|chmod|mkdir|rm|cp|mv|curl|wget|brew|apt|yum|dnf|pip|cargo)\s+\S+/.test(t) || /[{};]/.test(t) && /[=()]/.test(t) || /^<\/?[A-Za-z][^>]*>$/.test(t) || /^[\w.-]+\([^)]*\)\s*[{;]?$/.test(t)) : !1;
}
function pl(n, t, e) {
  const i = [...n].sort((a, r) => a.x - r.x), o = i[i.length - 1], s = t.x - (o.x + o.width);
  return s > e * 0.9 && xl(o.text) && Jo(t.text) ? !1 : s > e * 3.2;
}
function yl(n, t) {
  if (n.length < 2)
    return n.some((o) => wl(o.text));
  const e = [...n].sort((o, s) => o.x - s.x);
  let i = 0;
  for (let o = 1; o < e.length; o++) {
    const s = e[o - 1], a = e[o], r = e[o].x - (s.x + s.width);
    (r > t * 1.8 || r > t * 0.9 && vl(s.text) && Jo(a.text)) && (i += 1);
  }
  return i >= 1;
}
function wl(n) {
  const t = n.trim();
  return /\S\s{3,}\S/.test(t) && (/^Option\s{2,}Description\b/i.test(t) || /^[A-Za-z_][A-Za-z0-9_-]{1,24}\s{2,}[A-Z]/.test(t));
}
function vl(n) {
  return /^[A-Za-z_][A-Za-z0-9_-]{1,24}$/.test(n.trim());
}
function xl(n) {
  const t = n.trim();
  return /^[a-z_][A-Za-z0-9_-]{1,24}$/.test(t) || /[_-]/.test(t);
}
function Jo(n) {
  const t = n.trim();
  return /^[A-Z]/.test(t) && t.length > 6;
}
function Qo(n) {
  const t = n.map((e) => ({
    x: e.x,
    y: e.y,
    width: e.width,
    height: e.height
  }));
  return t.reduce((e, i) => ts(e, i), t[0]);
}
function ts(n, t) {
  const e = Math.min(n.x, t.x), i = Math.min(n.y, t.y), o = Math.max(n.x + n.width, t.x + t.width), s = Math.max(n.y + n.height, t.y + t.height);
  return {
    x: e,
    y: i,
    width: o - e,
    height: s - i
  };
}
function kl(n) {
  return ue(Nt(n.map((t) => Ln(t))), 16);
}
function Ln(n) {
  return ue(n.lineHeight, ue(n.height, ue(n.fontSize, 16) * 1.2));
}
function oo(n, t, e, i) {
  const o = t + i;
  return o <= 0 ? e : (n * t + e * i) / o;
}
function ue(n, t) {
  return Number.isFinite(n) && n > 0 ? n : t;
}
function Nt(n) {
  return n.length === 0 ? 0 : n.reduce((t, e) => t + e, 0) / n.length;
}
function bl(n) {
  return /^[,.;:!?，。！？；：、)\]}>"'”’]$/.test(n);
}
function Sl(n) {
  return /^[(\[{<"'“‘]$/.test(n);
}
function so(n) {
  return /^[，。！？；：、（）【】《》“”‘’]$/.test(n);
}
const ao = 34;
class Ml {
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
    const { left: o, top: s, right: a, bottom: r, width: l, height: h } = e, u = new Uint8Array(l * h), d = new Int32Array(l * h), v = new Int32Array(l * h);
    let k = 0, C = 1, m = t.x, p = t.x, z = t.y, A = t.y;
    for (d[0] = t.x, v[0] = t.y, u[(t.y - s) * l + t.x - o] = 1; k < C; ) {
      const G = d[k], V = v[k];
      if (k += 1, m = Math.min(m, G), p = Math.max(p, G), z = Math.min(z, V), A = Math.max(A, V), C = this.enqueueNeighbors(
        G,
        V,
        o,
        s,
        a,
        r,
        l,
        i,
        u,
        d,
        v,
        C
      ), C > l * h * 0.94) return null;
    }
    const T = p - m + 1, j = A - z + 1;
    return C / Math.max(1, T * j) >= 0.24 ? { x: m, y: z, width: T, height: j } : null;
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
  enqueueNeighbors(t, e, i, o, s, a, r, l, h, u, d, v) {
    let k = v;
    const C = [
      { x: t - 1, y: e },
      { x: t + 1, y: e },
      { x: t, y: e - 1 },
      { x: t, y: e + 1 }
    ];
    for (const m of C) {
      if (m.x < i || m.x >= s || m.y < o || m.y >= a)
        continue;
      const p = (m.y - o) * r + m.x - i;
      h[p] || (h[p] = 1, this.isColorNear(this.getColor(m.x, m.y), l) && (u[k] = m.x, d[k] = m.y, k += 1));
    }
    return k;
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
    return i * i + o * o + s * s <= ao * ao;
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
const Cl = 960, _l = 640;
class vi {
  constructor(t, e, i, o, s) {
    P(this, "regionDetector");
    P(this, "lastDetection", null);
    this.sampleWidth = e, this.sampleHeight = i, this.logicalWidth = o, this.logicalHeight = s, this.regionDetector = new Ml(
      t,
      e,
      i
    );
  }
  static fromImage(t, e, i) {
    if (e <= 0 || i <= 0) return null;
    const o = Math.min(
      1,
      Cl / e,
      _l / i
    ), s = Math.max(1, Math.round(e * o)), a = Math.max(1, Math.round(i * o)), r = document.createElement("canvas");
    r.width = s, r.height = a;
    const l = r.getContext("2d", { willReadFrequently: !0 });
    if (!l) return null;
    l.drawImage(t, 0, 0, s, a);
    const h = l.getImageData(0, 0, s, a);
    return new vi(
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
function ro(n, t) {
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
class Tl {
  constructor() {
    P(this, "currentRect", null);
    P(this, "isFinalized", !1);
  }
  preview(t) {
    return t ? this.isFinalized && ro(this.currentRect, t) ? {
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
    const e = !ro(this.currentRect, t);
    return this.currentRect = this.cloneRect(t), {
      rect: this.cloneRect(this.currentRect),
      changed: e
    };
  }
  cloneRect(t) {
    return t ? { ...t } : null;
  }
}
class zl {
  constructor(t, e, i, o) {
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
    P(this, "elementCandidateStabilizer", new Tl());
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
    P(this, "canvasPool", ii.getInstance());
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
    this.canvas = t, this.onStateChange = e, this.onTextInputRequest = i, this.onColorPicked = o, this.coordinateSystem = new Ua(t), this.drawingEngine = new Va(t, this.coordinateSystem), this.eventHandler = new Ya(t, this.coordinateSystem), this.bindMouseEvents(), this.initCanvas(), Promise.all([
      this.loadAllWindows().then(() => {
        this.detectInitialWindowSnap();
      }),
      this.loadScreenBackground()
    ]), ye.preloadModules();
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
    if (this.annotations = t.annotations.map((e) => hn.fromData(this.cloneAnnotationData(e))).filter((e) => e !== null), this.selectedAnnotation = null, this.hoveredAnnotation = null, this.draggedAnnotation = null, this.resizingAnnotation = null, this.editingAnnotation = null, t.selectedAnnotationId) {
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
        I.error("[截图] 加载屏幕背景失败", t), this.createFallbackBackground();
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
        const o = await S("get_screenshot_background");
        if (o) {
          const s = new Image();
          await new Promise((a, r) => {
            const l = setTimeout(() => {
              s.onload = null, s.onerror = null, r(new Error("Image load timeout"));
            }, 5e3);
            s.onload = () => {
              clearTimeout(l), this.backgroundImage = s;
              const h = window.devicePixelRatio || 1;
              this.visualElementDetector = vi.fromImage(
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
      I.error("[截图] 创建后备背景失败", t);
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
            S("get_cached_monitor_info"),
            S("get_cached_window_list")
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
            S("get_window_info"),
            S("get_all_windows")
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
      I.error("[截图] 加载窗口列表失败", t), this.allWindows = [];
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
        const r = await S("get_cached_monitor_info");
        o = {
          x: r.x,
          y: r.y,
          scale: r.scale
        };
      } catch {
        o = await S("get_window_info");
      }
      let s;
      try {
        const r = await S("get_mouse_position"), l = o?.scale || 1;
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
      I.error("[截图] 初始窗口吸附检测失败", t);
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
      const r = await S("get_ui_element_at_point", {
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
    if ((this.currentTool === f.Select || this.currentTool === f.Marker) && i?.getData().type === f.Marker) {
      this.clearSelection(), i.updateData({ selected: !0 }), this.selectedAnnotation = i, this.startTextInput(i.getData().points[0], i), this.draw(), this.onStateChange?.();
      return;
    }
    const o = this.eventHandler.getOperationType(
      e,
      this.currentTool,
      this.selectionRect,
      this.annotations
    );
    if (o !== L.None)
      switch (this.eventHandler.setCurrentOperation(o), this.eventHandler.startDrawing(e), o) {
        case L.Drawing:
          if (!this.selectionRect && this.currentTool === f.Select) {
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
        case L.DrawingRect:
        case L.DrawingEllipse:
        case L.DrawingLine:
        case L.DrawingArrow:
        case L.DrawingPen:
        case L.DrawingMosaic:
        case L.DrawingMarker:
          this.startAnnotation(e);
          break;
        case L.DrawingText:
          this.startTextInput(e), this.eventHandler.stopDrawing();
          break;
        case L.ColorPicking:
          this.handleColorPicking(e), this.eventHandler.stopDrawing();
          break;
        case L.Pinning:
          this.selectionRect && (this.createPinWindow(), this.eventHandler.stopDrawing());
          break;
        case L.EditingAnnotation:
          this.selectAnnotationAtPoint(e), this.selectedAnnotation && this.selectedAnnotation.getData().type === f.Text && this.startTextInput(this.selectedAnnotation.getData().points[0], this.selectedAnnotation);
          break;
        case L.MovingAnnotation:
          this.startAnnotationDrag(e);
          break;
        case L.ResizingAnnotationNW:
        case L.ResizingAnnotationSE:
          this.startAnnotationResize(e, o);
          break;
        case L.Moving:
        case L.ResizingNW:
        case L.ResizingNE:
        case L.ResizingSW:
        case L.ResizingSE:
        case L.ResizingN:
        case L.ResizingS:
        case L.ResizingW:
        case L.ResizingE:
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
      }, this.pendingSnapCandidate = null, this.onStateChange?.()), this.currentAnnotation ? this.updateCurrentAnnotation(e) : this.draggedAnnotation ? this.updateAnnotationDrag(e) : this.resizingAnnotation ? this.updateAnnotationResize(e) : this.selectionRect && this.currentTool === f.Select && this.updateSelectionRect(e, i), this.draw(), this.onStateChange?.();
    else {
      if (this.currentTool === f.Select && !this.selectionRect) {
        const o = this.detectNearbyWindow(e);
        o !== this.snappedWindow && (this.cancelSmartDetection(), this.snappedWindow = o, this.snappedElement = null, this.elementCandidateStabilizer.reset(), this.showSnapPreview = !0, this.draw()), this.showSnapPreview || (this.showSnapPreview = !0, this.draw()), o && this.scheduleUiElementDetection(e, o);
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
    const i = e.currentOperation, o = t.x - e.lastMousePos.x, s = t.y - e.lastMousePos.y;
    switch (i) {
      case L.Drawing:
        this.selectionRect.width = t.x - e.startPoint.x, this.selectionRect.height = t.y - e.startPoint.y;
        break;
      case L.Moving:
        this.selectionRect.x += o, this.selectionRect.y += s;
        break;
      case L.ResizingNW:
        this.selectionRect.x += o, this.selectionRect.y += s, this.selectionRect.width -= o, this.selectionRect.height -= s;
        break;
      case L.ResizingNE:
        this.selectionRect.y += s, this.selectionRect.width += o, this.selectionRect.height -= s;
        break;
      case L.ResizingSW:
        this.selectionRect.x += o, this.selectionRect.width -= o, this.selectionRect.height += s;
        break;
      case L.ResizingSE:
        this.selectionRect.width += o, this.selectionRect.height += s;
        break;
      case L.ResizingN:
        this.selectionRect.y += s, this.selectionRect.height -= s;
        break;
      case L.ResizingS:
        this.selectionRect.height += s;
        break;
      case L.ResizingW:
        this.selectionRect.x += o, this.selectionRect.width -= o;
        break;
      case L.ResizingE:
        this.selectionRect.width += o;
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
      case L.ResizingAnnotationNW:
        this.resizingAnnotation.updateData({
          points: [t, e.points[1]]
        });
        break;
      case L.ResizingAnnotationSE:
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
    ), o = {
      [L.Moving]: "move",
      [L.ResizingNW]: "nw-resize",
      [L.ResizingNE]: "ne-resize",
      [L.ResizingSW]: "sw-resize",
      [L.ResizingSE]: "se-resize",
      [L.ResizingN]: "n-resize",
      [L.ResizingS]: "s-resize",
      [L.ResizingW]: "w-resize",
      [L.ResizingE]: "e-resize",
      [L.EditingAnnotation]: "pointer",
      [L.MovingAnnotation]: "move",
      [L.ResizingAnnotationNW]: "nw-resize",
      [L.ResizingAnnotationSE]: "se-resize",
      [L.Drawing]: "crosshair"
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
    const { x: e, y: i, width: o, height: s } = this.selectionRect, a = 8;
    if (this.translationOverlay.isLoading) {
      const m = e + o / 2, p = i + s / 2;
      t.fillStyle = "rgba(0, 0, 0, 0.7)", t.fillRect(e, i, o, s), t.font = '16px "Microsoft YaHei", sans-serif', t.fillStyle = "#ffffff", t.textAlign = "center", t.textBaseline = "middle";
      let z = "正在识别翻译...";
      this.translationOverlay.engine === "local-ai" && (this.translationOverlay.loadingStage === "starting-service" ? z = "正在启动 AI 模型服务..." : z = "正在由 AI 识图翻译..."), t.fillText(z, m, p), t.restore();
      return;
    }
    if (this.translationOverlay.errorMessage) {
      const m = e + o / 2, p = i + s / 2;
      t.fillStyle = "rgba(0, 0, 0, 0.8)", t.fillRect(e, i, o, s), t.font = '16px "Microsoft YaHei", sans-serif', t.fillStyle = "#ff6b6b", t.textAlign = "center", t.textBaseline = "middle", t.fillText(this.translationOverlay.errorMessage, m, p), t.restore();
      return;
    }
    if (this.translationOverlay.blocks.length === 0) {
      t.restore();
      return;
    }
    const r = { x: e, y: i, width: o, height: s }, l = this.sampleRegionColor(r), h = l.brightness < 128;
    let u, d;
    if (h) {
      const m = Math.max(0, Math.round(l.r * 0.1)), p = Math.max(0, Math.round(l.g * 0.1)), z = Math.max(0, Math.round(l.b * 0.1));
      u = `rgba(${m}, ${p}, ${z}, 0.95)`, d = "rgba(255, 255, 255, 0.9)";
    } else {
      const m = Math.min(255, Math.round(l.r + (255 - l.r) * 0.95)), p = Math.min(255, Math.round(l.g + (255 - l.g) * 0.95)), z = Math.min(255, Math.round(l.b + (255 - l.b) * 0.95));
      u = `rgba(${m}, ${p}, ${z}, 0.95)`, d = "rgba(0, 0, 0, 0.85)";
    }
    t.fillStyle = u, t.fillRect(e, i, o, s), t.fillStyle = d, t.textAlign = "left", t.textBaseline = "top";
    const v = this.translationOverlay.paragraphBlocks?.length ? this.translationOverlay.paragraphBlocks : this.translationOverlay.blocks.map((m) => ({
      text: m.text,
      translatedText: m.translatedText,
      blocks: [m],
      bbox: {
        x: m.x,
        y: m.y,
        width: m.width,
        height: m.height
      },
      isCodeBlock: m.isCodeBlock,
      isStructuredBlock: !1,
      fontSize: m.fontSize,
      lineHeight: m.lineHeight,
      angle: m.angle
    })), k = v.filter((m) => m.isStructuredBlock), C = v.filter((m) => !m.isStructuredBlock);
    C.length > 0 && this.drawFlowedTranslationBlocks(t, C, e, i, a, o, s);
    for (const m of k)
      this.drawStructuredTranslationBlock(t, m, e, i, a, o, s);
    t.restore();
  }
  drawFlowedTranslationBlocks(t, e, i, o, s, a, r) {
    const l = [...e].filter((T) => (T.translatedText || T.text).trim()).sort((T, j) => {
      const X = T.bbox.y - j.bbox.y;
      return Math.abs(X) > 4 ? X : T.bbox.x - j.bbox.x;
    });
    if (l.length === 0)
      return;
    const h = Math.max(24, r - s * 2), u = s, d = (T, j, X) => l.map((G) => {
      const V = (G.translatedText || G.text).trim(), Z = Math.max(12, Math.min(G.fontSize || 16, 48)), K = Math.max(8, Math.round(Z * T)), q = G.isCodeBlock ? '"Consolas", "Monaco", monospace' : '"Microsoft YaHei", "PingFang SC", "Hiragino Sans GB", sans-serif', Q = Math.max(
        s,
        Math.min(G.bbox.x + s, a * 0.38)
      ), nt = j ? s : Q, at = Math.max(48, a - nt - u), xt = G.lineHeight || K * 1.35, ot = Math.max(
        K * (X ? 1.04 : 1.14),
        Math.min(xt * T, K * (X ? 1.18 : 1.42))
      );
      return t.font = `${K}px ${q}`, {
        text: V,
        fontSize: K,
        fontFamily: q,
        lineHeight: ot,
        paragraphGap: X ? Math.max(1, ot * 0.16) : Math.max(3, ot * 0.35),
        x: i + nt,
        lines: this.wrapTextToLines(t, V, at)
      };
    }), v = (T) => T.reduce((j, X, G) => {
      const V = G === T.length - 1 ? 0 : X.paragraphGap;
      return j + X.lines.length * X.lineHeight + V;
    }, 0);
    let k = d(1, !1, !1), C = v(k);
    if (C > h) {
      const T = Math.max(0.56, h / C);
      k = d(T, !1, !1), C = v(k);
    }
    if (C > h && (k = d(1, !0, !1), C = v(k)), C > h) {
      const T = Math.max(0.38, h / C * 0.96);
      k = d(T, !0, !0), C = v(k);
    }
    if (C > h) {
      const T = Math.max(0.3, h / C * 0.94);
      k = d(T, !0, !0), C = v(k);
    }
    const m = Math.min(...l.map((T) => T.bbox.y)), p = o + Math.max(s, Math.min(m, r - s)), z = o + r - s;
    let A = p + C > z ? o + s : p;
    for (const T of k) {
      t.font = `${T.fontSize}px ${T.fontFamily}`;
      for (const j of T.lines)
        t.fillText(j, T.x, A), A += T.lineHeight;
      A += T.paragraphGap;
    }
  }
  drawStructuredTranslationBlock(t, e, i, o, s, a, r) {
    const l = [...e.blocks].sort((d, v) => d.x - v.x), h = Math.max(12, Math.min(e.fontSize || 14, 32)), u = e.lineHeight || h * 1.35;
    t.font = `${h}px "Consolas", "Monaco", monospace`;
    for (const d of l) {
      const v = d.translatedText || d.text;
      if (!v.trim()) continue;
      const k = i + d.x + Math.min(4, s), C = o + d.y, m = l.find((T) => T.x > d.x), p = m ? Math.max(d.width, m.x - d.x - 8) : Math.max(d.width, a - d.x - s), z = this.wrapTextToLines(t, v.trim(), p);
      let A = C;
      for (const T of z) {
        if (A + h > o + r) break;
        t.fillText(T, k, A), A += u;
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
        const v = u + d;
        t.measureText(v).width > i && u !== "" ? (s.push(u), u = d) : u = v;
      }
      r = u;
    };
    for (const h of a) {
      const u = /^\s+$/.test(h), d = u ? " " : h, v = r + d;
      if (t.measureText(v).width <= i) {
        r = v;
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
    const h = this.backgroundImage.width, u = this.backgroundImage.height, d = this.canvas.width / o, v = this.canvas.height / o, k = h / d, C = u / v, m = t.x * k, p = t.y * C, z = t.width * k, A = t.height * C;
    try {
      l.drawImage(
        this.backgroundImage,
        m,
        p,
        z,
        A,
        0,
        0,
        s,
        a
      );
    } catch (Y) {
      return I.error("[截图] 采样区域绘制失败", Y), this.canvasPool.release(r), i;
    }
    let T;
    try {
      T = l.getImageData(0, 0, s, a);
    } catch (Y) {
      return I.error("[截图] 获取像素数据失败", Y), this.canvasPool.release(r), i;
    }
    const j = T.data, X = Math.ceil(Math.sqrt(e)), G = s / (X + 1), V = a / (X + 1);
    let Z = 0, K = 0, q = 0, Q = 0;
    for (let Y = 1; Y <= X; Y++)
      for (let it = 1; it <= X && !(Q >= e); it++) {
        const mt = Math.floor(it * G), lt = Math.floor(Y * V);
        if (mt >= 0 && mt < s && lt >= 0 && lt < a) {
          const dt = (lt * s + mt) * 4;
          dt >= 0 && dt + 2 < j.length && (Z += j[dt], K += j[dt + 1], q += j[dt + 2], Q++);
        }
      }
    if (this.canvasPool.release(r), Q === 0)
      return i;
    const nt = Math.round(Z / Q), at = Math.round(K / Q), xt = Math.round(q / Q), ot = this.getBrightness(nt, at, xt);
    return {
      r: nt,
      g: at,
      b: xt,
      brightness: ot
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
    const h = this.backgroundImage.width, u = this.backgroundImage.height, d = this.canvas.width / o, v = this.canvas.height / o, k = h / d, C = u / v, m = t.x * k, p = t.y * C, z = t.width * k, A = t.height * C;
    try {
      l.drawImage(
        this.backgroundImage,
        m,
        p,
        z,
        A,
        0,
        0,
        s,
        a
      );
    } catch (Y) {
      return I.error("[截图] isUniformColor: 采样区域绘制失败", Y), this.canvasPool.release(r), !1;
    }
    let T;
    try {
      T = l.getImageData(0, 0, s, a);
    } catch (Y) {
      return I.error("[截图] isUniformColor: 获取像素数据失败", Y), this.canvasPool.release(r), !1;
    }
    const j = T.data, X = Math.ceil(Math.sqrt(i)), G = s / (X + 1), V = a / (X + 1), Z = [];
    for (let Y = 1; Y <= X; Y++)
      for (let it = 1; it <= X && !(Z.length >= i); it++) {
        const mt = Math.floor(it * G), lt = Math.floor(Y * V);
        if (mt >= 0 && mt < s && lt >= 0 && lt < a) {
          const dt = (lt * s + mt) * 4;
          dt >= 0 && dt + 2 < j.length && Z.push({
            r: j[dt],
            g: j[dt + 1],
            b: j[dt + 2]
          });
        }
      }
    if (this.canvasPool.release(r), Z.length < 2)
      return !1;
    const K = Z.reduce((Y, it) => Y + it.r, 0) / Z.length, q = Z.reduce((Y, it) => Y + it.g, 0) / Z.length, Q = Z.reduce((Y, it) => Y + it.b, 0) / Z.length, nt = Z.reduce((Y, it) => Y + Math.pow(it.r - K, 2), 0) / Z.length, at = Z.reduce((Y, it) => Y + Math.pow(it.g - q, 2), 0) / Z.length, xt = Z.reduce((Y, it) => Y + Math.pow(it.b - Q, 2), 0) / Z.length;
    return (nt + at + xt) / 3 < e;
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
    this.currentTool = t, this.clearSelection(), this.showGuides = t === f.Select, this.colorPickerState.isActive = t === f.ColorPicker, this.colorPickerState.isActive || (this.colorPickerState.isVisible = !1, this.colorPickerState.colorInfo = void 0), t !== f.Translate && this.translationOverlay.isVisible && this.clearTranslationOverlay(), t !== f.Select && this.hoveredAnnotation && (this.hoveredAnnotation.updateData({ hovered: !1 }), this.hoveredAnnotation = null), this.snappedWindow = null, this.snappedElement = null, this.elementCandidateStabilizer.reset(), this.showSnapPreview = !1, this.pendingSnapCandidate = null, this.cancelSmartDetection(), this.dragStartPosition = null, t !== f.Select && this.updateToolCursor(), this.draw(), this.onStateChange?.();
  }
  // 执行翻译（供外部调用）
  executeTranslation() {
    this.currentTool === f.Translate && this.selectionRect && (this.translationOverlay.isLoading = !0, this.translationOverlay.isVisible = !0, this.draw(), this.onStateChange?.(), this.performOcrTranslation());
  }
  // 开始创建标注
  startAnnotation(t) {
    if (hn.isDrawingTool(this.currentTool)) {
      if (this.currentTool === f.Text) {
        this.startTextInput(t);
        return;
      }
      this.currentAnnotation = hn.createAnnotation(
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
        t = Fa(
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
    let i = e[0].x, o = e[0].x, s = e[0].y, a = e[0].y;
    e.forEach((k) => {
      i = Math.min(i, k.x), o = Math.max(o, k.x), s = Math.min(s, k.y), a = Math.max(a, k.y);
    });
    const r = o - i, l = a - s;
    let h = 0;
    for (let k = 1; k < e.length; k++)
      h += Mt(e[k - 1], e[k]);
    const d = Mt(e[0], e[e.length - 1]) / h, v = Math.max(r, l) / Math.max(Math.min(r, l), 1);
    if (d > 0.85 || v > 5) {
      const k = e[0], C = e[e.length - 1];
      this.currentAnnotation.updateData({ points: [k, C] });
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
    const i = hn.createAnnotation(
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
      const { x: e, y: i, width: o, height: s } = this.selectionRect, r = (await S("get_window_info"))?.scale || 1, l = await this.cropFromBackground(e, i, o, s);
      if (!l?.image)
        throw new Error("无法从背景图像裁剪选区");
      const h = await this.renderWithAnnotations(l, r, t);
      t === "copy" ? await S("copy_to_clipboard", { image: h }) : await S("save_screenshot_to_file", { image: h });
    } catch (e) {
      const i = t === "save" ? "保存" : "复制";
      throw I.error(`[截图] ${i}截图失败`, e), new Error(`${i}截图失败: ${e?.message || e?.toString() || "未知错误"}`);
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
            await new Promise(($) => setTimeout($, 100)), bt += 100;
          if (!this.backgroundImage)
            throw new Error("背景图像加载超时");
        }
        const h = window.devicePixelRatio || 1, u = Math.max(0, s.padding || 0), d = this.canvas.width / h, v = this.canvas.height / h, k = t - u, C = e - u, m = i + u * 2, p = o + u * 2, z = Math.max(1, Math.round(m * h)), A = Math.max(1, Math.round(p * h)), T = Math.max(0, k), j = Math.max(0, C), X = Math.min(d, k + m), G = Math.min(v, C + p), V = Math.max(0, X - T), Z = Math.max(0, G - j), K = Math.round(T * h), q = Math.round(j * h), Q = Math.min(
          this.canvas.width - K,
          Math.round(V * h)
        ), nt = Math.min(
          this.canvas.height - q,
          Math.round(Z * h)
        ), at = Math.round((T - k) * h), xt = Math.round((j - C) * h), ot = document.createElement("canvas");
        ot.width = z, ot.height = A;
        const Y = ot.getContext("2d", {
          alpha: !0,
          desynchronized: !1,
          willReadFrequently: !1
        });
        if (!Y)
          throw new Error("无法获取2D绘图上下文");
        Y.imageSmoothingEnabled = !1, s.fillColor && (Y.fillStyle = s.fillColor, Y.fillRect(0, 0, z, A)), Q > 0 && nt > 0 && Y.drawImage(
          this.backgroundImage,
          K,
          q,
          Q,
          nt,
          at,
          xt,
          Q,
          nt
        );
        const mt = ot.toDataURL("image/png", 1).replace(/^data:image\/png;base64,/, "");
        clearTimeout(l), a({
          image: mt,
          adjusted_width: z,
          adjusted_height: A,
          logical_x: k,
          logical_y: C,
          logical_width: m,
          logical_height: p
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
            const v = t.logical_width > 0 ? t.adjusted_width / t.logical_width : e, k = {
              x: t.logical_x,
              y: t.logical_y,
              width: t.logical_width,
              height: t.logical_height
            }, C = this.drawingEngine.createScreenshotContext(
              l,
              v,
              k
            );
            this.annotations.forEach((m, p) => {
              try {
                m.drawToScreenshot(C);
              } catch (z) {
                I.error(`[截图] 绘制标注 ${p} 失败`, z);
              }
            });
          }
          const u = ti(
            this.selectionCornerRadius,
            t.logical_width,
            t.logical_height
          );
          if (u > 0) {
            const v = t.logical_width > 0 ? t.adjusted_width / t.logical_width : e;
            l.save(), l.globalCompositeOperation = "destination-in", l.fillStyle = "#000", l.beginPath(), l.roundRect(
              0,
              0,
              r.width,
              r.height,
              u * v
            ), l.fill(), l.restore();
          }
          let d;
          d = r.toDataURL("image/png"), clearTimeout(a), o(d);
        } catch (u) {
          I.error("[截图] 绘制过程出错", u);
          try {
            const d = r.toDataURL("image/png");
            clearTimeout(a), o(d);
          } catch {
            clearTimeout(a), s(new Error(`渲染失败: ${u.message || u}`));
          }
        }
      }, h.onerror = (u) => {
        I.error("[截图] 图像加载失败", u), clearTimeout(a), s(new Error("图像加载失败"));
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
        const { x: e, y: i, width: o, height: s } = this.selectionRect, a = await S("get_window_info"), r = a?.scale || 1, l = Math.round(a.x + e * r), h = Math.round(a.y + i * r), u = Math.round(o * r), d = Math.round(s * r), v = Math.round(a.x + window.innerWidth * r), k = Math.round(a.y + window.innerHeight * r), C = t === "ocr" ? Math.min(Math.max(u, 760), Math.max(360, v - a.x)) : u, m = t === "ocr" ? Math.min(Math.max(d, 520), Math.max(260, k - a.y)) : d, p = t === "ocr" ? Math.round(l - Math.max(0, C - u) / 2) : l, z = t === "ocr" ? Math.max(a.x, Math.min(p, v - C)) : l, A = t === "ocr" ? Math.max(a.y, Math.min(h, k - m)) : h, T = {}, j = await this.cropFromBackground(e, i, o, s, T);
        if (!j?.image)
          throw new Error("Failed to crop from background image");
        const X = await this.renderWithAnnotations(j, r, "save");
        await S("create_pin_window", {
          mode: t,
          imageData: X,
          x: z,
          y: A,
          width: C,
          height: m
        }), this.onStateChange?.(), setTimeout(() => {
          new on("screenshot").close();
        }, 100);
      } catch (e) {
        throw I.error(`[截图] 创建${t === "ocr" ? "文字识别" : "贴图"}窗口失败`, e), e;
      }
  }
  // 处理颜色取样
  async handleColorPicking(t) {
    if (this.selectionRect)
      try {
        const e = await S("get_window_info"), i = e?.scale || 1, o = Math.round(e.x + (this.selectionRect.x + t.x - this.selectionRect.x) * i), s = Math.round(e.y + (this.selectionRect.y + t.y - this.selectionRect.y) * i), a = await S("get_pixel_color", {
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
        I.error("[截图] 获取像素颜色失败", e);
      }
  }
  // 实时更新颜色预览（鼠标移动时调用）
  async updateColorPreview(t) {
    if (this.selectionRect)
      try {
        const e = await S("get_window_info"), i = e?.scale || 1, o = this.colorPickerState.zoomFactor, s = Math.floor(o / 2), a = Math.round(e.x + t.x * i), r = Math.round(e.y + t.y * i), l = await S("get_screen_preview", {
          x: a - s,
          y: r - s,
          width: o,
          height: o
        }), h = new Image();
        h.src = `data:image/png;base64,${l.image}`, await h.decode();
        const u = await createImageBitmap(h);
        this.colorPickerState.previewImage?.close?.(), this.colorPickerState.previewImage = u;
        const v = new OffscreenCanvas(o, o).getContext("2d");
        if (v) {
          v.drawImage(u, 0, 0, o, o);
          const k = v.getImageData(s, s, 1, 1).data, C = { r: k[0], g: k[1], b: k[2] }, m = this.rgbToHex(C.r, C.g, C.b);
          this.colorPickerState.colorInfo = { rgb: C, hex: m, position: t };
        }
        this.draw();
      } catch (e) {
        I.error("[截图] 更新颜色预览失败", e);
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
        const { x: r, y: l, width: h, height: u } = this.selectionRect, d = window.devicePixelRatio || 1, v = h * d, k = u * d, C = this.canvasPool.acquire(v, k), m = C.getContext("2d");
        if (!m)
          throw this.canvasPool.release(C), new Error("无法创建临时canvas");
        const p = r * d, z = l * d, A = performance.now();
        m.drawImage(
          this.backgroundImage,
          p,
          z,
          v,
          k,
          0,
          0,
          v,
          k
        ), e = Math.round(performance.now() - A);
        const T = performance.now(), { recognizeFromCanvas: j } = await ye.loadOCR();
        i = Math.round(performance.now() - T);
        const X = performance.now(), G = await j(C);
        o = Math.round(performance.now() - X), this.canvasPool.release(C);
        const V = {
          cropDurationMs: e,
          ocrModuleLoadDurationMs: i,
          ocrRecognitionDurationMs: o,
          confidence: G.confidence,
          rawLineCount: G.blocks.length,
          textLength: G.full_text.trim().length
        };
        I.info("[OCR] 识别耗时统计", V), Pt.log("[OCR] recognition timing", V);
        const Z = G.blocks, K = performance.now(), q = Zo(Z);
        s = Math.round(performance.now() - K);
        const Q = q.map((_) => _.text).join(`

`), nt = {
          rawLineCount: Z.length,
          paragraphCount: q.length,
          durationMs: s,
          paragraphs: q.map((_, J) => ({
            index: J,
            text: _.text,
            blockCount: _.blocks.length,
            isCodeBlock: !!_.isCodeBlock,
            isStructuredBlock: !!_.isStructuredBlock,
            bbox: _.bbox,
            sourceBlocks: _.blocks.map((pt) => ({
              text: pt.text,
              x: pt.x,
              y: pt.y,
              width: pt.width,
              height: pt.height
            }))
          }))
        };
        if (I.info("[OCR] 版面重组完成", nt), Pt.log("[OCR] layout reflow complete", nt), !Q || !Q.trim()) {
          this.translationOverlay.isLoading = !1, this.translationOverlay.isVisible = !1, this.draw(), this.onStateChange?.();
          return;
        }
        const at = this.translationOverlay.engine;
        this.translationOverlay.sourceLanguage = "auto", this.translationOverlay.targetLanguage = this.getAutoTargetLanguage(pe(Q));
        const xt = (_) => {
          const J = _.trim();
          return !!(J.match(/^(sudo|npm|yarn|pip|git|cd|ls|cat|chmod|chown|mkdir|rm|cp|mv|curl|wget|brew|apt|yum|dnf|sh|SH|Bash|PowerShell|Fish|Yarn|pnpm|deno|bun|Cargo)\s+\S+/) && !J.match(/^(If|When|Click|Please|You|After|Before|Then|Open|Go|Download)/i));
        };
        let ot = "";
        const Y = pe(Q), it = {
          detectedLanguage: Y,
          textLength: Q.trim().length,
          textPreview: Q.trim().slice(0, 500)
        };
        I.info("[OCR] 翻译语言检测完成", it), Pt.log("[OCR] translation language detected", it), Ie(Y) && (this.translationOverlay.sourceLanguage = Y, this.translationOverlay.targetLanguage = this.getAutoTargetLanguage(Y));
        const mt = at === "offline" ? ye.loadOfflineTranslator() : null, lt = (_) => _.includes("插件") && _.includes("未启用") ? _.includes("translation") ? "OCR识别已完成，但翻译插件未启用，请在插件设置中安装并启用 Translation 插件" : _ : at === "offline" ? _.includes("未激活") || _.includes("未下载") || _.includes("运行时未安装") ? _ : _.includes("超时") ? "模型加载超时，请重试" : _.includes("离线翻译暂仅支持") ? _ : "离线翻译失败: " + _.substring(0, 50) : _.includes("timeout") || _.includes("超时") ? "翻译超时，请检查网络连接" : _.includes("network") || _.includes("网络") || _.includes("请求") || _.includes("令牌") ? "翻译失败，请检查网络连接" : _.trim() ? _.slice(0, 80) : "翻译失败，请检查网络连接", dt = async () => {
          if (!mt)
            throw new Error("离线翻译模块未加载");
          const {
            translateOffline: _,
            canUseOfflineTranslation: J,
            warmupOfflineTranslator: pt,
            getModelCacheInfo: ct
          } = await mt, vt = J();
          if (this.offlineModelActivated && !vt)
            if ((await ct()).isCached)
              await pt();
            else
              throw new Error("离线翻译模型未下载，请在设置-翻译配置中下载模型");
          else if (!this.offlineModelActivated)
            throw new Error("离线翻译模型未激活，请在设置-翻译配置中激活模型");
          return _;
        }, bt = async (_, J, pt) => {
          if (!_.trim())
            return _;
          if (at === "offline") {
            if (J !== "en" || pt !== "zh")
              throw new Error("离线翻译暂仅支持英译中，请切换 Google 或 Bing 进行中译英");
            return (await dt())(_);
          }
          return await S("translate_text", {
            text: _,
            from: J,
            to: pt,
            engine: at
          });
        }, $ = (_) => {
          const J = _.trim();
          return /^(?:option|description|name|value|type|default|example|required)$/i.test(J) ? !1 : /^[A-Za-z_][A-Za-z0-9_-]{1,32}$/.test(J);
        }, At = async (_, J, pt) => {
          const ct = _.trim();
          if (!ct || xt(ct))
            return _;
          const vt = _.match(/^(\s*)(\S+)(\s{2,})(.+?)(\s*)$/);
          if (vt) {
            const [, ut, ft, et, Ct, Bt] = vt, Et = pe(ft), re = $(ft) || !Ie(Et) ? ft : await bt(ft, Et, this.getAutoTargetLanguage(Et)), _t = pe(Ct), Qt = Ie(_t) && !xt(Ct) ? await bt(Ct, _t, this.getAutoTargetLanguage(_t)) : Ct;
            return `${ut}${re}${et}${Qt}${Bt}`;
          }
          if ($(ct))
            return _;
          const Rt = pe(ct);
          if (!Ie(Rt))
            return _;
          const Xt = this.getAutoTargetLanguage(Rt), b = await bt(ct, Rt, Xt), N = {
            paragraphIndex: J,
            blockIndex: pt,
            sourceLanguage: Rt,
            targetLanguage: Xt,
            sourceText: ct,
            translatedText: b.slice(0, 200)
          };
          return I.info("[OCR] 结构化块翻译完成", N), Pt.log("[OCR] structured block translation complete", N), b;
        }, U = async (_, J) => {
          const pt = performance.now(), ct = (b) => ({
            index: J,
            durationMs: Math.round(performance.now() - pt),
            ...b
          }), vt = pe(_.text), Rt = this.getAutoTargetLanguage(vt), Xt = {
            index: J,
            text: _.text,
            sourceLanguage: vt,
            targetLanguage: Rt,
            engine: at,
            structured: !!_.isStructuredBlock
          };
          if (I.info("[OCR] 段落翻译方向", Xt), Pt.log("[OCR] paragraph translation direction", Xt), !Ie(vt)) {
            _.translatedText = _.text;
            const b = ct({
              skipped: !0,
              cancelled: !1,
              errorMessage: "部分文本暂不支持翻译，已保留原文"
            }), N = {
              index: J,
              detectedLanguage: vt,
              durationMs: b.durationMs,
              text: _.text
            };
            return I.warn("[OCR] 跳过不支持的段落语言", N), Pt.log("[OCR] skip unsupported paragraph language", N), b;
          }
          try {
            if (_.isStructuredBlock && _.blocks.length > 0) {
              const ut = async (et, Ct) => {
                const Bt = await At(et.text, J, Ct);
                return et.translatedText = Bt, Bt;
              }, ft = [];
              if (at === "offline")
                for (let et = 0; et < _.blocks.length; et += 1)
                  ft.push(await ut(_.blocks[et], et));
              else
                ft.push(
                  ...await Promise.all(
                    _.blocks.map((et, Ct) => ut(et, Ct))
                  )
                );
              _.translatedText = ft.join(" ");
            } else if (xt(_.text) || _.isCodeBlock) {
              _.translatedText = _.text;
              const ut = _.isCodeBlock ? "code_block" : "command_like_text", ft = ct({ skipped: !0, cancelled: !1 }), et = {
                index: J,
                reason: ut,
                durationMs: ft.durationMs,
                text: _.text
              };
              return I.info("[OCR] 跳过代码段翻译", et), Pt.log("[OCR] skip code paragraph translation", et), ft;
            } else
              _.translatedText = await bt(
                _.text,
                vt,
                Rt
              );
            const b = ct({ skipped: !1, cancelled: !1 }), N = {
              index: J,
              durationMs: b.durationMs,
              sourceLanguage: vt,
              targetLanguage: Rt,
              engine: at,
              structured: !!_.isStructuredBlock,
              sourceLength: _.text.length,
              translatedLength: (_.translatedText || "").length,
              translatedPreview: (_.translatedText || "").slice(0, 300)
            };
            return I.info("[OCR] 段落翻译完成", N), Pt.log("[OCR] paragraph translation complete", N), b;
          } catch (b) {
            const N = b instanceof Error ? b.message : String(b);
            if (N === "翻译已取消")
              return ct({ skipped: !1, cancelled: !0 });
            _.translatedText = _.text;
            const ut = lt(N), ft = ct({
              skipped: !1,
              cancelled: !1,
              errorMessage: ut
            }), et = {
              index: J,
              durationMs: ft.durationMs,
              sourceLanguage: vt,
              targetLanguage: Rt,
              engine: at,
              error: N,
              structured: !!_.isStructuredBlock,
              text: _.text
            };
            return I.error("[OCR] 段落翻译失败", et), Pt.log("[OCR] paragraph translation failed", et), ft;
          }
        }, zt = performance.now();
        let gt = [];
        if (at === "offline")
          for (let _ = 0; _ < q.length; _ += 1) {
            const J = await U(q[_], _);
            if (gt.push(J), J.cancelled)
              return;
            if (J.errorMessage) {
              ot = J.errorMessage;
              break;
            }
          }
        else {
          if (gt = await Promise.all(
            q.map((_, J) => U(_, J))
          ), gt.some((_) => _.cancelled))
            return;
          ot = gt.find((_) => _.errorMessage)?.errorMessage || "";
        }
        a = Math.round(performance.now() - zt);
        const Ot = {
          durationMs: a,
          engine: at,
          paragraphCount: q.length,
          translatedParagraphCount: gt.filter((_) => !_.skipped && !_.errorMessage).length,
          skippedParagraphCount: gt.filter((_) => _.skipped).length,
          failedParagraphCount: gt.filter((_) => !!_.errorMessage).length
        };
        I.info("[OCR] 翻译耗时统计", Ot), Pt.log("[OCR] translation timing", Ot);
        const Ht = q.map((_) => this.toDisplayParagraph(_, d)), ae = Ht.map((_) => this.toLegacyOverlayBlock(_));
        this.translationOverlay.blocks = ae, this.translationOverlay.paragraphBlocks = Ht, this.translationOverlay.isLoading = !1, this.translationOverlay.errorMessage = ot || void 0;
        const Ft = {
          cropDurationMs: e,
          ocrModuleLoadDurationMs: i,
          ocrRecognitionDurationMs: o,
          reflowDurationMs: s,
          translationDurationMs: a,
          totalDurationMs: Math.round(performance.now() - t),
          rawLineCount: Z.length,
          paragraphCount: q.length,
          engine: at
        };
        I.info("[OCR] 截图翻译总耗时统计", Ft), Pt.log("[OCR] pipeline timing", Ft), this.draw(), this.onStateChange?.();
      } catch (t) {
        I.error("[OCR] OCR翻译失败:", t);
        const e = t instanceof Error ? t.message : String(t);
        this.translationOverlay.isLoading = !1, this.translationOverlay.isVisible = !0, this.translationOverlay.errorMessage = this.getOcrTranslationErrorMessage(e), this.draw(), this.onStateChange?.();
      }
    }
  }
  async performVisionTranslation() {
    if (!(!this.selectionRect || !this.backgroundImage))
      try {
        const { x: t, y: e, width: i, height: o } = this.selectionRect;
        this.translationOverlay.loadingStage = "starting-service", this.draw(), this.onStateChange?.(), (await Uo()).running || (I.info("[截图] AI 服务未运行，正在启动..."), await Dr(), I.info("[截图] AI 服务启动完成"));
        const a = await this.cropFromBackground(t, e, i, o);
        if (!a?.image)
          throw new Error("无法获取截图选区图像");
        this.translationOverlay.loadingStage = "translating", this.draw(), this.onStateChange?.(), await new Promise((p) => setTimeout(p, 100));
        const l = (await Yo({
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
        const h = Math.max(14, Math.min(20, Math.round(o / 18))), u = Math.max(18, Math.min(28, Math.round(o / 12))), d = l.split(/\n\n+/).filter((p) => p.trim()), v = Math.max(d.length, 1), k = (o - 16) / v, C = d.map((p, z) => {
          const A = z * k + 8, T = z === v - 1 ? o - A - 8 : k, j = {
            text: "",
            translatedText: p.trim(),
            x: 0,
            y: A,
            width: i,
            height: T,
            fontSize: h,
            lineHeight: u,
            angle: 0
          };
          return {
            text: "",
            translatedText: p.trim(),
            blocks: [j],
            bbox: { x: 0, y: A, width: i, height: T },
            isCodeBlock: !1,
            isStructuredBlock: !1,
            fontSize: h,
            lineHeight: u,
            angle: 0
          };
        }), m = C.length > 0 ? C : [{
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
        this.translationOverlay.blocks = m.map((p) => p.blocks[0]), this.translationOverlay.paragraphBlocks = m, this.translationOverlay.sourceLanguage = "auto", this.translationOverlay.targetLanguage = "zh", this.translationOverlay.isLoading = !1, this.translationOverlay.loadingStage = void 0, this.translationOverlay.isVisible = !0, this.translationOverlay.errorMessage = void 0, this.draw(), this.onStateChange?.();
      } catch (t) {
        const e = t instanceof Error ? t.message : String(t);
        I.error("[截图] AI 识图翻译失败", t), this.translationOverlay.isLoading = !1, this.translationOverlay.loadingStage = void 0, this.translationOverlay.isVisible = !0, this.translationOverlay.blocks = [], this.translationOverlay.paragraphBlocks = [], this.translationOverlay.errorMessage = e.includes("mmproj") || e.includes("vision") ? "AI 翻译需要在“本地 AI”中配置视觉模型（mmproj）" : `AI 识图翻译失败：${e.slice(0, 80)}`, this.draw(), this.onStateChange?.();
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
      const { cancelOfflineTranslation: t } = await ye.loadOfflineTranslator();
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
    ye.loadOfflineTranslator().then(({ cancelOfflineTranslation: e }) => e()).catch(() => {
    }), this.canvasPool.clear(), this.throttleTimer && (cancelAnimationFrame(this.throttleTimer), this.throttleTimer = null), this.cancelSmartDetection(), this.backgroundImage && (this.backgroundImage.onload = null, this.backgroundImage.onerror = null, this.backgroundImage.src = "", this.backgroundImage = null, this.visualElementDetector = null), this.annotations.forEach((e) => {
      typeof e.destroy == "function" && e.destroy();
    }), this.annotations = [], this.annotationUndoStack = [], this.annotationRedoStack = [], this.pendingDragSnapshot = null, this.pendingResizeSnapshot = null, this.currentAnnotation = null, this.selectedAnnotation = null, this.hoveredAnnotation = null, this.draggedAnnotation = null, this.resizingAnnotation = null, this.editingAnnotation = null, this.selectionRect = null, this.dragStartPoint = null, this.resizeStartBounds = null, this.resizeOperation = null, this.pendingSnapCandidate = null, this.dragStartPosition = null, this.snappedWindow = null, this.snappedElement = null, this.elementCandidateStabilizer.reset(), this.allWindows = [], this.translationOverlay.blocks = [], this.translationOverlay.paragraphBlocks = [], this.translationOverlay.isVisible = !1, this.translationOverlay.isLoading = !1, this.colorPickerState.previewImage && (this.colorPickerState.previewImage.close?.(), this.colorPickerState.previewImage = void 0), this.colorPickerState.isActive = !1, this.colorPickerState.isVisible = !1, this.colorPickerState.isCopied = !1, this.colorPickerState.colorInfo = void 0, this.eventHandler.unbind(), this.canvas.removeEventListener("mousedown", this.mouseDownHandler), this.canvas.removeEventListener("mousemove", this.mouseMoveHandler), this.canvas.removeEventListener("mouseup", this.mouseUpHandler), this.canvas.removeEventListener("dblclick", this.doubleClickHandler), window.removeEventListener("keydown", this.keyDownHandler), window.removeEventListener("keyup", this.keyUpHandler), this.onStateChange = void 0, this.onTextInputRequest = void 0, this.onColorPicked = void 0;
    const t = this.canvas.getContext("2d");
    t && (t.save(), t.setTransform(1, 0, 0, 1, 0, 0), t.clearRect(0, 0, this.canvas.width, this.canvas.height), t.restore());
  }
}
var Rl = {
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
function Ll() {
  return "icon-" + ((1 + Math.random()) * 4294967296 | 0).toString(16).substring(1);
}
function Pl(n, t, e) {
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
var Al = Symbol("icon-context");
function st(n, t, e) {
  var i = {
    name: "icon-" + n,
    props: ["size", "strokeWidth", "strokeLinecap", "strokeLinejoin", "theme", "fill", "spin"],
    setup: function(s) {
      var a = Ll(), r = xe(Al, Rl);
      return function() {
        var l = s.size, h = s.strokeWidth, u = s.strokeLinecap, d = s.strokeLinejoin, v = s.theme, k = s.fill, C = s.spin, m = Pl(a, {
          size: l,
          strokeWidth: h,
          strokeLinecap: u,
          strokeLinejoin: d,
          theme: v,
          fill: k
        }, r), p = [r.prefix + "-icon"];
        return p.push(r.prefix + "-icon-" + n), t && r.rtl && p.push(r.prefix + "-icon-rtl"), C && p.push(r.prefix + "-icon-spin"), y("span", {
          class: p.join(" ")
        }, [e(m)]);
      };
    }
  };
  return i;
}
const Il = st("arrow-right-up", !0, function(n) {
  return y("svg", {
    width: n.size,
    height: n.size,
    viewBox: "0 0 48 48",
    fill: "none"
  }, [y("path", {
    d: "M19 11H37V29",
    stroke: n.colors[0],
    "stroke-width": n.strokeWidth,
    "stroke-linecap": n.strokeLinecap,
    "stroke-linejoin": n.strokeLinejoin
  }, null), y("path", {
    d: "M11.5439 36.4559L36.9997 11",
    stroke: n.colors[0],
    "stroke-width": n.strokeWidth,
    "stroke-linecap": n.strokeLinecap,
    "stroke-linejoin": n.strokeLinejoin
  }, null)]);
}), wn = st("check", !0, function(n) {
  return y("svg", {
    width: n.size,
    height: n.size,
    viewBox: "0 0 48 48",
    fill: "none"
  }, [y("path", {
    d: "M43 11L16.875 37L5 25.1818",
    stroke: n.colors[0],
    "stroke-width": n.strokeWidth,
    "stroke-linecap": n.strokeLinecap,
    "stroke-linejoin": n.strokeLinejoin
  }, null)]);
}), si = st("close", !1, function(n) {
  return y("svg", {
    width: n.size,
    height: n.size,
    viewBox: "0 0 48 48",
    fill: "none"
  }, [y("path", {
    d: "M8 8L40 40",
    stroke: n.colors[0],
    "stroke-width": n.strokeWidth,
    "stroke-linecap": n.strokeLinecap,
    "stroke-linejoin": n.strokeLinejoin
  }, null), y("path", {
    d: "M8 40L40 8",
    stroke: n.colors[0],
    "stroke-width": n.strokeWidth,
    "stroke-linecap": n.strokeLinecap,
    "stroke-linejoin": n.strokeLinejoin
  }, null)]);
}), Ue = st("copy", !0, function(n) {
  return y("svg", {
    width: n.size,
    height: n.size,
    viewBox: "0 0 48 48",
    fill: "none"
  }, [y("path", {
    d: "M13 12.4316V7.8125C13 6.2592 14.2592 5 15.8125 5H40.1875C41.7408 5 43 6.2592 43 7.8125V32.1875C43 33.7408 41.7408 35 40.1875 35H35.5163",
    stroke: n.colors[0],
    "stroke-width": n.strokeWidth,
    "stroke-linecap": n.strokeLinecap,
    "stroke-linejoin": n.strokeLinejoin
  }, null), y("path", {
    d: "M32.1875 13H7.8125C6.2592 13 5 14.2592 5 15.8125V40.1875C5 41.7408 6.2592 43 7.8125 43H32.1875C33.7408 43 35 41.7408 35 40.1875V15.8125C35 14.2592 33.7408 13 32.1875 13Z",
    fill: n.colors[1],
    stroke: n.colors[0],
    "stroke-width": n.strokeWidth,
    "stroke-linejoin": n.strokeLinejoin
  }, null)]);
}), Dl = st("delete-four", !1, function(n) {
  return y("svg", {
    width: n.size,
    height: n.size,
    viewBox: "0 0 48 48",
    fill: "none"
  }, [y("path", {
    d: "M8 11L40 11",
    stroke: n.colors[0],
    "stroke-width": n.strokeWidth,
    "stroke-linecap": n.strokeLinecap,
    "stroke-linejoin": n.strokeLinejoin
  }, null), y("path", {
    d: "M18 5L30 5",
    stroke: n.colors[0],
    "stroke-width": n.strokeWidth,
    "stroke-linecap": n.strokeLinecap,
    "stroke-linejoin": n.strokeLinejoin
  }, null), y("path", {
    d: "M12 17H36V40C36 41.6569 34.6569 43 33 43H15C13.3431 43 12 41.6569 12 40V17Z",
    fill: n.colors[1],
    stroke: n.colors[0],
    "stroke-width": n.strokeWidth,
    "stroke-linejoin": n.strokeLinejoin
  }, null)]);
}), lo = st("down", !1, function(n) {
  return y("svg", {
    width: n.size,
    height: n.size,
    viewBox: "0 0 48 48",
    fill: "none"
  }, [y("path", {
    d: "M36 18L24 30L12 18",
    stroke: n.colors[0],
    "stroke-width": n.strokeWidth,
    "stroke-linecap": n.strokeLinecap,
    "stroke-linejoin": n.strokeLinejoin
  }, null)]);
}), Ol = st("download", !1, function(n) {
  return y("svg", {
    width: n.size,
    height: n.size,
    viewBox: "0 0 48 48",
    fill: "none"
  }, [y("path", {
    d: "M6 24.0083V42H42V24",
    stroke: n.colors[0],
    "stroke-width": n.strokeWidth,
    "stroke-linecap": n.strokeLinecap,
    "stroke-linejoin": n.strokeLinejoin
  }, null), y("path", {
    d: "M33 23L24 32L15 23",
    stroke: n.colors[0],
    "stroke-width": n.strokeWidth,
    "stroke-linecap": n.strokeLinecap,
    "stroke-linejoin": n.strokeLinejoin
  }, null), y("path", {
    d: "M23.9917 6V32",
    stroke: n.colors[0],
    "stroke-width": n.strokeWidth,
    "stroke-linecap": n.strokeLinecap,
    "stroke-linejoin": n.strokeLinejoin
  }, null)]);
}), El = st("font-size", !0, function(n) {
  return y("svg", {
    width: n.size,
    height: n.size,
    viewBox: "0 0 48 48",
    fill: "none"
  }, [y("path", {
    d: "M8 10.9333L8 6H40V10.9333",
    stroke: n.colors[0],
    "stroke-width": n.strokeWidth,
    "stroke-linecap": n.strokeLinecap,
    "stroke-linejoin": n.strokeLinejoin
  }, null), y("path", {
    d: "M24 6V42",
    stroke: n.colors[0],
    "stroke-width": n.strokeWidth,
    "stroke-linecap": n.strokeLinecap,
    "stroke-linejoin": n.strokeLinejoin
  }, null), y("path", {
    d: "M16 42H32",
    stroke: n.colors[0],
    "stroke-width": n.strokeWidth,
    "stroke-linecap": n.strokeLinecap,
    "stroke-linejoin": n.strokeLinejoin
  }, null)]);
}), $l = st("go-on", !0, function(n) {
  return y("svg", {
    width: n.size,
    height: n.size,
    viewBox: "0 0 48 48",
    fill: "none"
  }, [y("path", {
    d: "M36 7L43 13.4615L36 21",
    stroke: n.colors[0],
    "stroke-width": n.strokeWidth,
    "stroke-linecap": n.strokeLinecap,
    "stroke-linejoin": n.strokeLinejoin
  }, null), y("path", {
    d: "M40 14H17.0062C10.1232 14 4.27787 19.6204 4.00964 26.5C3.72612 33.7696 9.73291 40 17.0062 40H34.0016",
    stroke: n.colors[0],
    "stroke-width": n.strokeWidth,
    "stroke-linecap": n.strokeLinecap,
    "stroke-linejoin": n.strokeLinejoin
  }, null)]);
}), Wl = st("left", !0, function(n) {
  return y("svg", {
    width: n.size,
    height: n.size,
    viewBox: "0 0 48 48",
    fill: "none"
  }, [y("path", {
    d: "M31 36L19 24L31 12",
    stroke: n.colors[0],
    "stroke-width": n.strokeWidth,
    "stroke-linecap": n.strokeLinecap,
    "stroke-linejoin": n.strokeLinejoin
  }, null)]);
}), Bl = st("list-numbers", !0, function(n) {
  return y("svg", {
    width: n.size,
    height: n.size,
    viewBox: "0 0 48 48",
    fill: "none"
  }, [y("path", {
    d: "M20 9H42",
    stroke: n.colors[0],
    "stroke-width": n.strokeWidth,
    "stroke-linecap": n.strokeLinecap,
    "stroke-linejoin": n.strokeLinejoin
  }, null), y("path", {
    d: "M20 19H42",
    stroke: n.colors[0],
    "stroke-width": n.strokeWidth,
    "stroke-linecap": n.strokeLinecap,
    "stroke-linejoin": n.strokeLinejoin
  }, null), y("path", {
    d: "M20 29H42",
    stroke: n.colors[0],
    "stroke-width": n.strokeWidth,
    "stroke-linecap": n.strokeLinecap,
    "stroke-linejoin": n.strokeLinejoin
  }, null), y("path", {
    d: "M20 39H42",
    stroke: n.colors[0],
    "stroke-width": n.strokeWidth,
    "stroke-linecap": n.strokeLinecap,
    "stroke-linejoin": n.strokeLinejoin
  }, null), y("path", {
    d: "M6 29H12V32L6 38V39H12",
    stroke: n.colors[0],
    "stroke-width": n.strokeWidth,
    "stroke-linecap": n.strokeLinecap,
    "stroke-linejoin": n.strokeLinejoin
  }, null), y("path", {
    d: "M7 11L9 9V19M9 19H7M9 19H11",
    stroke: n.colors[0],
    "stroke-width": n.strokeWidth,
    "stroke-linecap": n.strokeLinecap,
    "stroke-linejoin": n.strokeLinejoin
  }, null)]);
}), co = st("loading", !0, function(n) {
  return y("svg", {
    width: n.size,
    height: n.size,
    viewBox: "0 0 48 48",
    fill: "none"
  }, [y("path", {
    d: "M4 24C4 35.0457 12.9543 44 24 44V44C35.0457 44 44 35.0457 44 24C44 12.9543 35.0457 4 24 4",
    stroke: n.colors[0],
    "stroke-width": n.strokeWidth,
    "stroke-linecap": n.strokeLinecap,
    "stroke-linejoin": n.strokeLinejoin
  }, null), y("path", {
    d: "M36 24C36 17.3726 30.6274 12 24 12C17.3726 12 12 17.3726 12 24C12 30.6274 17.3726 36 24 36V36",
    stroke: n.colors[0],
    "stroke-width": n.strokeWidth,
    "stroke-linecap": n.strokeLinecap,
    "stroke-linejoin": n.strokeLinejoin
  }, null)]);
}), Kn = st("magic", !0, function(n) {
  return y("svg", {
    width: n.size,
    height: n.size,
    viewBox: "0 0 48 48",
    fill: "none"
  }, [y("path", {
    d: "M20.1005 8.1005L24.3431 12.3431M30 4V10V4ZM39.8995 8.1005L35.6569 12.3431L39.8995 8.1005ZM44 18H38H44ZM39.8995 27.8995L35.6569 23.6569L39.8995 27.8995ZM30 32V26V32ZM20.1005 27.8995L24.3431 23.6569L20.1005 27.8995ZM16 18H22H16Z",
    stroke: n.colors[0],
    "stroke-width": n.strokeWidth,
    "stroke-linecap": n.strokeLinecap,
    "stroke-linejoin": n.strokeLinejoin
  }, null), y("path", {
    d: "M29.5856 18.4143L5.54395 42.4559",
    stroke: n.colors[0],
    "stroke-width": n.strokeWidth,
    "stroke-linecap": n.strokeLinecap,
    "stroke-linejoin": n.strokeLinejoin
  }, null)]);
}), es = st("minus", !1, function(n) {
  return y("svg", {
    width: n.size,
    height: n.size,
    viewBox: "0 0 48 48",
    fill: "none"
  }, [y("path", {
    d: "M10.5 24L38.5 24",
    stroke: n.colors[0],
    "stroke-width": n.strokeWidth,
    "stroke-linecap": n.strokeLinecap,
    "stroke-linejoin": n.strokeLinejoin
  }, null)]);
}), Nl = st("more", !1, function(n) {
  return y("svg", {
    width: n.size,
    height: n.size,
    viewBox: "0 0 48 48",
    fill: "none"
  }, [y("circle", {
    cx: "12",
    cy: "24",
    r: "3",
    fill: n.colors[0]
  }, null), y("circle", {
    cx: "24",
    cy: "24",
    r: "3",
    fill: n.colors[0]
  }, null), y("circle", {
    cx: "36",
    cy: "24",
    r: "3",
    fill: n.colors[0]
  }, null)]);
}), Hl = st("mosaic", !0, function(n) {
  return y("svg", {
    width: n.size,
    height: n.size,
    viewBox: "0 0 48 48",
    fill: "none"
  }, [y("path", {
    d: "M44 36H36V44H44V36Z",
    fill: n.colors[0]
  }, null), y("path", {
    d: "M28 36H20V44H28V36Z",
    fill: n.colors[0]
  }, null), y("path", {
    d: "M12 36H4V44H12V36Z",
    fill: n.colors[0]
  }, null), y("path", {
    d: "M44 20H36V28H44V20Z",
    fill: n.colors[0]
  }, null), y("path", {
    d: "M28 20H20V28H28V20Z",
    fill: n.colors[0]
  }, null), y("path", {
    d: "M12 20H4V28H12V20Z",
    fill: n.colors[0]
  }, null), y("path", {
    d: "M44 4H36V12H44V4Z",
    fill: n.colors[0]
  }, null), y("path", {
    d: "M28 4H20V12H28V4Z",
    fill: n.colors[0]
  }, null), y("path", {
    d: "M12 4H4V12H12V4Z",
    fill: n.colors[0]
  }, null), y("path", {
    d: "M20 12H12V20H20V12Z",
    fill: n.colors[0]
  }, null), y("path", {
    d: "M20 28H12V36H20V28Z",
    fill: n.colors[0]
  }, null), y("path", {
    d: "M36 12H28V20H36V12Z",
    fill: n.colors[0]
  }, null), y("path", {
    d: "M36 28H28V36H36V28Z",
    fill: n.colors[0]
  }, null)]);
}), Fl = st("move-one", !0, function(n) {
  return y("svg", {
    width: n.size,
    height: n.size,
    viewBox: "0 0 48 48",
    fill: "none"
  }, [y("path", {
    d: "M8 6L43 25L24 27L13.9948 44L8 6Z",
    fill: n.colors[1],
    stroke: n.colors[0],
    "stroke-width": n.strokeWidth,
    "stroke-linejoin": n.strokeLinejoin
  }, null)]);
}), ho = st("pin", !0, function(n) {
  return y("svg", {
    width: n.size,
    height: n.size,
    viewBox: "0 0 48 48",
    fill: "none"
  }, [y("g", {
    "clip-path": "url(#" + n.id + "1c742167)"
  }, [y("path", {
    d: "M10.6963 17.5042C13.3347 14.8657 16.4701 14.9387 19.8781 16.8076L32.62 9.74509L31.8989 4.78683L43.2126 16.1005L38.2656 15.3907L31.1918 28.1214C32.9752 31.7589 33.1337 34.6647 30.4953 37.3032C30.4953 37.3032 26.235 33.0429 22.7171 29.525L6.44305 41.5564L18.4382 25.2461C14.9202 21.7281 10.6963 17.5042 10.6963 17.5042Z",
    fill: n.colors[1],
    stroke: n.colors[0],
    "stroke-width": n.strokeWidth,
    "stroke-linejoin": n.strokeLinejoin
  }, null)]), y("defs", null, [y("clipPath", {
    id: n.id + "1c742167"
  }, [y("rect", {
    width: "48",
    height: "48",
    fill: n.colors[2]
  }, null)])])]);
}), uo = st("platte", !0, function(n) {
  return y("svg", {
    width: n.size,
    height: n.size,
    viewBox: "0 0 48 48",
    fill: "none"
  }, [y("path", {
    d: "M24 44C29.9601 44 26.3359 35.136 30 31C33.1264 27.4709 44 29.0856 44 24C44 12.9543 35.0457 4 24 4C12.9543 4 4 12.9543 4 24C4 35.0457 12.9543 44 24 44Z",
    fill: n.colors[1],
    stroke: n.colors[0],
    "stroke-width": n.strokeWidth,
    "stroke-linejoin": n.strokeLinejoin
  }, null), y("path", {
    d: "M28 17C29.6569 17 31 15.6569 31 14C31 12.3431 29.6569 11 28 11C26.3431 11 25 12.3431 25 14C25 15.6569 26.3431 17 28 17Z",
    fill: n.colors[3],
    stroke: n.colors[2],
    "stroke-width": n.strokeWidth,
    "stroke-linejoin": n.strokeLinejoin
  }, null), y("path", {
    d: "M16 21C17.6569 21 19 19.6569 19 18C19 16.3431 17.6569 15 16 15C14.3431 15 13 16.3431 13 18C13 19.6569 14.3431 21 16 21Z",
    fill: n.colors[3],
    stroke: n.colors[2],
    "stroke-width": n.strokeWidth,
    "stroke-linejoin": n.strokeLinejoin
  }, null), y("path", {
    d: "M17 34C18.6569 34 20 32.6569 20 31C20 29.3431 18.6569 28 17 28C15.3431 28 14 29.3431 14 31C14 32.6569 15.3431 34 17 34Z",
    fill: n.colors[3],
    stroke: n.colors[2],
    "stroke-width": n.strokeWidth,
    "stroke-linejoin": n.strokeLinejoin
  }, null)]);
}), ai = st("pushpin", !1, function(n) {
  return y("svg", {
    width: n.size,
    height: n.size,
    viewBox: "0 0 48 48",
    fill: "none"
  }, [y("path", {
    d: "M32 4H16L20 7L16 20C16 20 10 24 10 28H20L24 44L28 28H38C38 24 34 21.1667 32 20L28 7L32 4Z",
    fill: n.colors[1],
    stroke: n.colors[0],
    "stroke-width": n.strokeWidth,
    "stroke-linecap": n.strokeLinecap,
    "stroke-linejoin": n.strokeLinejoin
  }, null)]);
}), jl = st("rectangle-one", !1, function(n) {
  return y("svg", {
    width: n.size,
    height: n.size,
    viewBox: "0 0 48 48",
    fill: "none"
  }, [y("path", {
    d: "M42 8H6C4.89543 8 4 8.89543 4 10V38C4 39.1046 4.89543 40 6 40H42C43.1046 40 44 39.1046 44 38V10C44 8.89543 43.1046 8 42 8Z",
    fill: n.colors[1],
    stroke: n.colors[0],
    "stroke-width": n.strokeWidth
  }, null)]);
}), Vl = st("redo", !0, function(n) {
  return y("svg", {
    width: n.size,
    height: n.size,
    viewBox: "0 0 48 48",
    fill: "none"
  }, [y("path", {
    d: "M36.7279 36.7279C33.4706 39.9853 28.9706 42 24 42C14.0589 42 6 33.9411 6 24C6 14.0589 14.0589 6 24 6C28.9706 6 33.4706 8.01472 36.7279 11.2721C38.3859 12.9301 42 17 42 17",
    stroke: n.colors[0],
    "stroke-width": n.strokeWidth,
    "stroke-linecap": n.strokeLinecap,
    "stroke-linejoin": n.strokeLinejoin
  }, null), y("path", {
    d: "M42 8V17H33",
    stroke: n.colors[0],
    "stroke-width": n.strokeWidth,
    "stroke-linecap": n.strokeLinecap,
    "stroke-linejoin": n.strokeLinejoin
  }, null)]);
}), Ul = st("return", !0, function(n) {
  return y("svg", {
    width: n.size,
    height: n.size,
    viewBox: "0 0 48 48",
    fill: "none"
  }, [y("path", {
    d: "M12.9998 8L6 14L12.9998 21",
    stroke: n.colors[0],
    "stroke-width": n.strokeWidth,
    "stroke-linecap": n.strokeLinecap,
    "stroke-linejoin": n.strokeLinejoin
  }, null), y("path", {
    d: "M6 14H28.9938C35.8768 14 41.7221 19.6204 41.9904 26.5C42.2739 33.7696 36.2671 40 28.9938 40H11.9984",
    stroke: n.colors[0],
    "stroke-width": n.strokeWidth,
    "stroke-linecap": n.strokeLinecap,
    "stroke-linejoin": n.strokeLinejoin
  }, null)]);
}), Yl = st("right", !0, function(n) {
  return y("svg", {
    width: n.size,
    height: n.size,
    viewBox: "0 0 48 48",
    fill: "none"
  }, [y("path", {
    d: "M19 12L31 24L19 36",
    stroke: n.colors[0],
    "stroke-width": n.strokeWidth,
    "stroke-linecap": n.strokeLinecap,
    "stroke-linejoin": n.strokeLinejoin
  }, null)]);
}), Xl = st("round", !1, function(n) {
  return y("svg", {
    width: n.size,
    height: n.size,
    viewBox: "0 0 48 48",
    fill: "none"
  }, [y("circle", {
    cx: "24",
    cy: "24",
    r: "20",
    fill: n.colors[1],
    stroke: n.colors[0],
    "stroke-width": n.strokeWidth
  }, null)]);
}), go = st("save", !0, function(n) {
  return y("svg", {
    width: n.size,
    height: n.size,
    viewBox: "0 0 48 48",
    fill: "none"
  }, [y("path", {
    d: "M6 9C6 7.34315 7.34315 6 9 6H34.2814L42 13.2065V39C42 40.6569 40.6569 42 39 42H9C7.34315 42 6 40.6569 6 39V9Z",
    fill: n.colors[1],
    stroke: n.colors[0],
    "stroke-width": n.strokeWidth,
    "stroke-linejoin": n.strokeLinejoin
  }, null), y("path", {
    "fill-rule": "evenodd",
    "clip-rule": "evenodd",
    d: "M24.0083 6L24 13.3846C24 13.7245 23.5523 14 23 14H15C14.4477 14 14 13.7245 14 13.3846L14 6",
    fill: n.colors[3]
  }, null), y("path", {
    d: "M24.0083 6L24 13.3846C24 13.7245 23.5523 14 23 14H15C14.4477 14 14 13.7245 14 13.3846L14 6H24.0083Z",
    stroke: n.colors[2],
    "stroke-width": n.strokeWidth,
    "stroke-linejoin": n.strokeLinejoin
  }, null), y("path", {
    d: "M9 6H34.2814",
    stroke: n.colors[0],
    "stroke-width": n.strokeWidth,
    "stroke-linecap": n.strokeLinecap,
    "stroke-linejoin": n.strokeLinejoin
  }, null), y("path", {
    d: "M14 26H34",
    stroke: n.colors[2],
    "stroke-width": n.strokeWidth,
    "stroke-linecap": n.strokeLinecap,
    "stroke-linejoin": n.strokeLinejoin
  }, null), y("path", {
    d: "M14 34H24.0083",
    stroke: n.colors[2],
    "stroke-width": n.strokeWidth,
    "stroke-linecap": n.strokeLinecap,
    "stroke-linejoin": n.strokeLinejoin
  }, null)]);
}), Zl = st("square", !1, function(n) {
  return y("svg", {
    width: n.size,
    height: n.size,
    viewBox: "0 0 48 48",
    fill: "none"
  }, [y("path", {
    d: "M39 6H9C7.34315 6 6 7.34315 6 9V39C6 40.6569 7.34315 42 9 42H39C40.6569 42 42 40.6569 42 39V9C42 7.34315 40.6569 6 39 6Z",
    fill: n.colors[1],
    stroke: n.colors[0],
    "stroke-width": n.strokeWidth
  }, null)]);
}), ri = st("text-recognition", !1, function(n) {
  return y("svg", {
    width: n.size,
    height: n.size,
    viewBox: "0 0 48 48",
    fill: "none"
  }, [y("path", {
    d: "M6 33V39C6 40.6569 7.34315 42 9 42H15",
    stroke: n.colors[0],
    "stroke-width": n.strokeWidth,
    "stroke-linecap": n.strokeLinecap,
    "stroke-linejoin": n.strokeLinejoin
  }, null), y("path", {
    d: "M33 42H39C40.6569 42 42 40.6569 42 39V33",
    stroke: n.colors[0],
    "stroke-width": n.strokeWidth,
    "stroke-linecap": n.strokeLinecap,
    "stroke-linejoin": n.strokeLinejoin
  }, null), y("path", {
    d: "M42 15V9C42 7.34315 40.6569 6 39 6H33",
    stroke: n.colors[0],
    "stroke-width": n.strokeWidth,
    "stroke-linecap": n.strokeLinecap,
    "stroke-linejoin": n.strokeLinejoin
  }, null), y("path", {
    d: "M6 15V9C6 7.34315 7.34315 6 9 6H15",
    stroke: n.colors[0],
    "stroke-width": n.strokeWidth,
    "stroke-linecap": n.strokeLinecap,
    "stroke-linejoin": n.strokeLinejoin
  }, null), y("path", {
    d: "M24 15V35",
    stroke: n.colors[0],
    "stroke-width": n.strokeWidth,
    "stroke-linecap": n.strokeLinecap,
    "stroke-linejoin": n.strokeLinejoin
  }, null), y("path", {
    d: "M17 15H24H31",
    stroke: n.colors[0],
    "stroke-width": n.strokeWidth,
    "stroke-linecap": n.strokeLinecap,
    "stroke-linejoin": n.strokeLinejoin
  }, null)]);
}), ns = st("translate", !0, function(n) {
  return y("svg", {
    width: n.size,
    height: n.size,
    viewBox: "0 0 48 48",
    fill: "none"
  }, [y("path", {
    d: "M28.2857 37H39.7143M42 42L39.7143 37L42 42ZM26 42L28.2857 37L26 42ZM28.2857 37L34 24L39.7143 37H28.2857Z",
    stroke: n.colors[0],
    "stroke-width": n.strokeWidth,
    "stroke-linecap": n.strokeLinecap,
    "stroke-linejoin": n.strokeLinejoin
  }, null), y("path", {
    d: "M16 6L17 9",
    stroke: n.colors[0],
    "stroke-width": n.strokeWidth,
    "stroke-linecap": n.strokeLinecap,
    "stroke-linejoin": n.strokeLinejoin
  }, null), y("path", {
    d: "M6 11H28",
    stroke: n.colors[0],
    "stroke-width": n.strokeWidth,
    "stroke-linecap": n.strokeLinecap,
    "stroke-linejoin": n.strokeLinejoin
  }, null), y("path", {
    d: "M10 16C10 16 11.7895 22.2609 16.2632 25.7391C20.7368 29.2174 28 32 28 32",
    stroke: n.colors[0],
    "stroke-width": n.strokeWidth,
    "stroke-linecap": n.strokeLinecap,
    "stroke-linejoin": n.strokeLinejoin
  }, null), y("path", {
    d: "M24 11C24 11 22.2105 19.2174 17.7368 23.7826C13.2632 28.3478 6 32 6 32",
    stroke: n.colors[0],
    "stroke-width": n.strokeWidth,
    "stroke-linecap": n.strokeLinecap,
    "stroke-linejoin": n.strokeLinejoin
  }, null)]);
}), Gl = st("write", !0, function(n) {
  return y("svg", {
    width: n.size,
    height: n.size,
    viewBox: "0 0 48 48",
    fill: "none"
  }, [y("path", {
    d: "M5.32497 43.4996L13.81 43.4998L44.9227 12.3871L36.4374 3.90186L5.32471 35.0146L5.32497 43.4996Z",
    fill: n.colors[1],
    stroke: n.colors[0],
    "stroke-width": n.strokeWidth,
    "stroke-linejoin": n.strokeLinejoin
  }, null), y("path", {
    d: "M27.9521 12.3872L36.4374 20.8725",
    stroke: n.colors[0],
    "stroke-width": n.strokeWidth,
    "stroke-linecap": n.strokeLinecap,
    "stroke-linejoin": n.strokeLinejoin
  }, null)]);
}), Kl = { class: "toolbar-panel first-panel" }, ql = { class: "tool-section" }, Jl = ["onClick", "title", "aria-pressed"], Ql = { class: "action-section" }, tc = ["disabled", "title"], ec = ["disabled", "title"], nc = ["disabled", "title"], ic = ["title"], oc = ["title"], sc = ["title"], ac = {
  key: 0,
  class: "toolbar-panel second-panel"
}, rc = { class: "style-section" }, lc = {
  key: 0,
  class: "style-group opacity-group"
}, cc = { class: "style-label" }, hc = ["value", "title", "aria-label"], uc = { class: "style-value" }, dc = {
  key: 1,
  class: "style-group"
}, gc = { class: "style-label" }, fc = { class: "line-width-selector" }, mc = ["onClick", "title", "aria-pressed"], pc = { class: "style-value" }, yc = {
  key: 2,
  class: "style-divider"
}, wc = {
  key: 3,
  class: "style-group opacity-group"
}, vc = { class: "style-label" }, xc = ["value", "title", "aria-label"], kc = { class: "style-value" }, bc = {
  key: 4,
  class: "style-divider"
}, Sc = {
  key: 5,
  class: "style-group color-picker-group"
}, Mc = { class: "style-label" }, Cc = { class: "color-row" }, _c = ["onClick", "title", "aria-pressed"], Tc = { class: "custom-color-wrapper" }, zc = ["title"], Rc = ["value", "title", "aria-label"], Lc = {
  key: 6,
  class: "style-group"
}, Pc = { class: "style-label" }, Ac = { class: "text-size-selector" }, Ic = ["onClick", "title", "aria-pressed"], Dc = { class: "style-value" }, Oc = {
  key: 7,
  class: "style-group"
}, Ec = { class: "style-label" }, $c = { class: "mosaic-size-selector" }, Wc = ["onClick", "title", "aria-pressed"], Bc = { class: "style-value" }, Nc = {
  key: 8,
  class: "style-group"
}, Hc = { class: "style-label" }, Fc = { class: "translate-engine-selector" }, jc = ["onClick", "title", "aria-pressed"], Vc = /* @__PURE__ */ Tt({
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
    const i = E(null), { t: o } = Oo(), s = n, a = e, r = O(() => [
      { type: f.Select, icon: Fl, title: o("screenshot.select") },
      { type: f.Rectangle, icon: jl, title: o("screenshot.rectangle") },
      { type: f.Ellipse, icon: Xl, title: o("screenshot.ellipse") },
      { type: f.Line, icon: es, title: o("screenshot.line") },
      { type: f.Arrow, icon: Il, title: o("screenshot.arrow") },
      { type: f.Pen, icon: Gl, title: o("screenshot.pen") },
      { type: f.Mosaic, icon: Hl, title: o("screenshot.mosaic") },
      { type: f.Text, icon: El, title: o("screenshot.text") },
      { type: f.Marker, icon: Bl, title: o("screenshot.marker") },
      { type: f.ColorPicker, icon: uo, title: o("screenshot.colorPicker") },
      { type: f.Ocr, icon: ri, title: o("screenshot.ocr") },
      { type: f.Translate, icon: ns, title: o("screenshot.translate") },
      { type: f.Pin, icon: ai, title: o("screenshot.pin") }
    ]), l = O(() => [
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
    ], d = [12, 14, 16, 18, 20, 24], v = [8, 12, 16, 20], k = O(() => ![f.ColorPicker, f.Ocr, f.Pin].includes(s.currentTool)), C = O(
      () => s.currentTool === f.Select
    ), m = O(
      () => [f.Rectangle, f.Ellipse, f.Line, f.Arrow, f.Pen].includes(s.currentTool)
    ), p = O(
      () => [f.Rectangle, f.Ellipse, f.Line, f.Arrow, f.Pen, f.Text, f.Marker].includes(s.currentTool)
    ), z = O(
      () => [
        f.Rectangle,
        f.Ellipse,
        f.Line,
        f.Arrow,
        f.Pen,
        f.Mosaic,
        f.Text,
        f.Marker
      ].includes(s.currentTool)
    ), A = O(
      () => s.currentTool === f.Text || s.currentTool === f.Marker
    ), T = O(() => s.currentTool === f.Mosaic), j = O(() => s.currentTool === f.Translate), X = ($) => a("tool-select", $), G = ($) => a("color-change", $), V = ($) => a("line-width-change", $), Z = ($) => {
      a("opacity-change", Number($.target.value) / 100);
    }, K = ($) => a("text-size-change", $), q = ($) => a("mosaic-size-change", $), Q = ($) => {
      a(
        "selection-corner-radius-change",
        Number($.target.value)
      );
    }, nt = () => a("undo"), at = () => a("redo"), xt = () => a("delete"), ot = () => a("save"), Y = () => a("confirm"), it = () => a("cancel"), mt = ($) => {
      a("translate-engine-change", $);
    }, lt = ($) => {
      G($);
    }, dt = ($) => {
      const At = $.target;
      At.value && G(At.value);
    }, bt = () => {
      const $ = i.value?.getBoundingClientRect();
      return {
        width: $?.width ?? 590,
        height: $?.height ?? 50
      };
    };
    return We(() => s.currentTool, () => {
      ke(() => {
        window.dispatchEvent(new CustomEvent("screenshot-toolbar-resize", {
          detail: bt()
        }));
      });
    }, { immediate: !0 }), t({
      getToolbarSize: bt
    }), ($, At) => (R(), D(
      "div",
      {
        ref_key: "toolbarContainerRef",
        ref: i,
        class: "toolbar-container"
      },
      [
        F(" 第一个面板：工具选择 + 操作按钮 "),
        x("div", Kl, [
          F(" 工具选择区域 "),
          x("div", ql, [
            (R(!0), D(
              Ut,
              null,
              qt(r.value, (U) => (R(), D("button", {
                key: U.type,
                onClick: (zt) => X(U.type),
                class: rt(["tool-btn", { active: $.currentTool === U.type }]),
                title: U.title,
                "aria-pressed": $.currentTool === U.type
              }, [
                (R(), St(ve(U.icon), {
                  theme: "outline",
                  size: "18",
                  strokeWidth: 2.5
                }))
              ], 10, Jl))),
              128
              /* KEYED_FRAGMENT */
            ))
          ]),
          F(" 分隔线 "),
          At[0] || (At[0] = x(
            "div",
            { class: "toolbar-divider" },
            null,
            -1
            /* HOISTED */
          )),
          F(" 操作按钮区域 "),
          x("div", Ql, [
            x("button", {
              onClick: nt,
              disabled: !$.canUndo,
              class: "action-btn undo",
              title: M(o)("screenshot.undo")
            }, [
              y(M(Ul), {
                theme: "outline",
                size: "18",
                strokeWidth: 2.5
              })
            ], 8, tc),
            x("button", {
              onClick: at,
              disabled: !$.canRedo,
              class: "action-btn redo",
              title: M(o)("screenshot.redo")
            }, [
              y(M($l), {
                theme: "outline",
                size: "18",
                strokeWidth: 2.5
              })
            ], 8, ec),
            x("button", {
              onClick: xt,
              disabled: !$.canDelete,
              class: "action-btn delete",
              title: M(o)("screenshot.delete")
            }, [
              y(M(Dl), {
                theme: "outline",
                size: "18",
                strokeWidth: 2.5
              })
            ], 8, nc),
            x("button", {
              onClick: it,
              class: "action-btn cancel",
              title: M(o)("screenshot.cancel")
            }, [
              y(M(si), {
                theme: "outline",
                size: "18",
                strokeWidth: 2.5
              })
            ], 8, ic),
            x("button", {
              onClick: ot,
              class: "action-btn save",
              title: M(o)("screenshot.save")
            }, [
              y(M(Ol), {
                theme: "outline",
                size: "18",
                strokeWidth: 2.5
              })
            ], 8, oc),
            x("button", {
              onClick: Y,
              class: "action-btn confirm",
              title: M(o)("screenshot.confirm")
            }, [
              y(M(wn), {
                theme: "outline",
                size: "18",
                strokeWidth: 2.5
              })
            ], 8, sc)
          ])
        ]),
        F(" 第二个面板：样式设置区域 "),
        k.value ? (R(), D("div", ac, [
          x("div", rc, [
            C.value ? (R(), D("div", lc, [
              x(
                "span",
                cc,
                H(M(o)("screenshot.cornerRadius")),
                1
                /* TEXT */
              ),
              x("input", {
                class: "opacity-slider",
                type: "range",
                min: "0",
                max: "80",
                step: "2",
                value: $.currentSelectionCornerRadius,
                style: ht({
                  "--opacity-color": "#2e90fa",
                  "--opacity-progress": `${$.currentSelectionCornerRadius / 80 * 100}%`
                }),
                title: `${$.currentSelectionCornerRadius}px`,
                "aria-label": M(o)("screenshot.cornerRadius"),
                onInput: Q
              }, null, 44, hc),
              x(
                "span",
                uc,
                H($.currentSelectionCornerRadius) + " px",
                1
                /* TEXT */
              )
            ])) : F("v-if", !0),
            F(" 线宽设置 "),
            m.value ? (R(), D("div", dc, [
              x(
                "span",
                gc,
                H(M(o)("screenshot.lineWidth")),
                1
                /* TEXT */
              ),
              x("div", fc, [
                (R(), D(
                  Ut,
                  null,
                  qt(h, (U) => x("button", {
                    key: U,
                    onClick: (zt) => V(U),
                    class: rt(["width-btn", { active: $.currentLineWidth === U }]),
                    title: `${U}px`,
                    "aria-pressed": $.currentLineWidth === U
                  }, [
                    x(
                      "span",
                      {
                        class: "line-preview",
                        style: ht({ height: `${U}px`, backgroundColor: $.currentColor })
                      },
                      null,
                      4
                      /* STYLE */
                    )
                  ], 10, mc)),
                  64
                  /* STABLE_FRAGMENT */
                ))
              ]),
              x(
                "span",
                pc,
                H($.currentLineWidth) + " px",
                1
                /* TEXT */
              )
            ])) : F("v-if", !0),
            m.value && p.value ? (R(), D("div", yc)) : F("v-if", !0),
            F(" 不透明度设置 "),
            z.value ? (R(), D("div", wc, [
              x(
                "span",
                vc,
                H(M(o)("screenshot.opacity")),
                1
                /* TEXT */
              ),
              x("input", {
                class: "opacity-slider",
                type: "range",
                min: "10",
                max: "100",
                step: "5",
                value: Math.round($.currentOpacity * 100),
                style: ht({
                  "--opacity-color": $.currentColor,
                  "--opacity-progress": `${Math.round($.currentOpacity * 100)}%`
                }),
                title: `${Math.round($.currentOpacity * 100)}%`,
                "aria-label": M(o)("screenshot.opacity"),
                onInput: Z
              }, null, 44, xc),
              x(
                "span",
                kc,
                H(Math.round($.currentOpacity * 100)) + "%",
                1
                /* TEXT */
              )
            ])) : F("v-if", !0),
            z.value && p.value ? (R(), D("div", bc)) : F("v-if", !0),
            F(" 颜色设置 "),
            p.value ? (R(), D("div", Sc, [
              x(
                "span",
                Mc,
                H(M(o)("screenshot.color")),
                1
                /* TEXT */
              ),
              x("div", Cc, [
                (R(), D(
                  Ut,
                  null,
                  qt(u, (U) => x("button", {
                    key: U,
                    onClick: (zt) => lt(U),
                    class: rt(["color-btn", { active: $.currentColor === U }]),
                    style: ht({ backgroundColor: U }),
                    title: U,
                    "aria-pressed": $.currentColor === U
                  }, null, 14, _c)),
                  64
                  /* STABLE_FRAGMENT */
                )),
                x("div", Tc, [
                  x("button", {
                    class: rt(["color-btn custom-color-btn", { active: !u.includes($.currentColor) }]),
                    title: M(o)("screenshot.customColor")
                  }, [
                    y(M(uo), {
                      theme: "outline",
                      size: "13",
                      strokeWidth: 2.5
                    })
                  ], 10, zc),
                  x("input", {
                    type: "color",
                    onChange: dt,
                    value: $.currentColor,
                    class: "color-input-hidden",
                    title: M(o)("screenshot.customColor"),
                    "aria-label": M(o)("screenshot.customColor")
                  }, null, 40, Rc)
                ])
              ])
            ])) : F("v-if", !0),
            F(" 文字大小设置 "),
            A.value ? (R(), D("div", Lc, [
              x(
                "span",
                Pc,
                H(M(o)("screenshot.fontSize")),
                1
                /* TEXT */
              ),
              x("div", Ac, [
                (R(), D(
                  Ut,
                  null,
                  qt(d, (U) => x("button", {
                    key: U,
                    onClick: (zt) => K(U),
                    class: rt(["size-btn", { active: $.currentTextSize === U }]),
                    title: `${U}px`,
                    "aria-pressed": $.currentTextSize === U
                  }, [
                    x(
                      "span",
                      {
                        class: "size-text",
                        style: ht({ fontSize: `${Math.min(U, 18)}px` })
                      },
                      "A",
                      4
                      /* STYLE */
                    )
                  ], 10, Ic)),
                  64
                  /* STABLE_FRAGMENT */
                ))
              ]),
              x(
                "span",
                Dc,
                H($.currentTextSize) + " px",
                1
                /* TEXT */
              )
            ])) : F("v-if", !0),
            F(" 马赛克大小设置 "),
            T.value ? (R(), D("div", Oc, [
              x(
                "span",
                Ec,
                H(M(o)("screenshot.mosaicSize")),
                1
                /* TEXT */
              ),
              x("div", $c, [
                (R(), D(
                  Ut,
                  null,
                  qt(v, (U) => x("button", {
                    key: U,
                    onClick: (zt) => q(U),
                    class: rt(["size-btn", { active: $.currentMosaicSize === U }]),
                    title: `${M(o)("screenshot.brush")} ${U * 3}px`,
                    "aria-pressed": $.currentMosaicSize === U
                  }, [
                    x(
                      "span",
                      {
                        class: "mosaic-preview",
                        style: ht({
                          width: `${Math.min(U * 1.25, 18)}px`,
                          height: `${Math.min(U * 1.25, 18)}px`
                        })
                      },
                      null,
                      4
                      /* STYLE */
                    )
                  ], 10, Wc)),
                  64
                  /* STABLE_FRAGMENT */
                ))
              ]),
              x(
                "span",
                Bc,
                H($.currentMosaicSize * 3) + " px",
                1
                /* TEXT */
              )
            ])) : F("v-if", !0),
            F(" 翻译引擎选择 "),
            j.value ? (R(), D("div", Nc, [
              x(
                "span",
                Hc,
                H(M(o)("screenshot.engine")),
                1
                /* TEXT */
              ),
              x("div", Fc, [
                (R(!0), D(
                  Ut,
                  null,
                  qt(l.value, (U) => (R(), D("button", {
                    key: U.value,
                    onClick: (zt) => mt(U.value),
                    class: rt(["engine-btn", { active: $.currentTranslateEngine === U.value }]),
                    title: U.label,
                    "aria-pressed": $.currentTranslateEngine === U.value
                  }, H(U.short), 11, jc))),
                  128
                  /* KEYED_FRAGMENT */
                ))
              ])
            ])) : F("v-if", !0)
          ])
        ])) : F("v-if", !0)
      ],
      512
      /* NEED_PATCH */
    ));
  }
}), sn = (n, t) => {
  const e = n.__vccOpts || n;
  for (const [i, o] of t)
    e[i] = o;
  return e;
}, Uc = /* @__PURE__ */ sn(Vc, [["__scopeId", "data-v-afb70887"]]), Yc = {
  class: "screenshot-container",
  ref: "containerRef"
}, Xc = {
  key: 0,
  class: "mask-layers"
}, Zc = {
  key: 1,
  class: "mask-full"
}, Gc = { class: "size-text" }, Kc = {
  key: 4,
  class: "loading-overlay"
}, qc = /* @__PURE__ */ Tt({
  __name: "index",
  setup(n) {
    const t = E(), e = E(), i = E(null), o = E(null);
    let s = null;
    const a = E(!0), r = E(!1), l = E(""), h = E({ x: 0, y: 0 }), u = E(16), d = E(!1), v = E("bing"), k = E({ width: 590, height: 50 });
    let C = !1, m = null;
    const p = E({
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
    }), z = E(), A = E(), T = O(() => p.value.isDrawing), j = O(() => {
      if (!p.value.selectionRect) return {};
      const { y: b } = p.value.selectionRect;
      return {
        top: "0",
        left: "0",
        right: "0",
        height: `${b}px`
      };
    }), X = O(() => {
      if (!p.value.selectionRect) return {};
      const { y: b, height: N } = p.value.selectionRect;
      return {
        top: `${b + N}px`,
        left: "0",
        right: "0",
        bottom: "0"
      };
    }), G = O(() => {
      if (!p.value.selectionRect) return {};
      const { x: b, y: N, height: ut } = p.value.selectionRect;
      return {
        top: `${N}px`,
        left: "0",
        width: `${b}px`,
        height: `${ut}px`
      };
    }), V = O(() => {
      if (!p.value.selectionRect) return {};
      const { x: b, y: N, width: ut, height: ft } = p.value.selectionRect;
      return {
        top: `${N}px`,
        left: `${b + ut}px`,
        right: "0",
        height: `${ft}px`
      };
    }), Z = O(() => {
      if (!p.value.selectionRect) return {};
      const { x: b, y: N, width: ut, height: ft } = p.value.selectionRect, et = 10, Ct = 12, Bt = Math.min(k.value.width, Math.max(0, window.innerWidth - et * 2)), Et = Math.min(k.value.height, Math.max(0, window.innerHeight - et * 2)), re = Math.max(et, window.innerHeight - Et - et), _t = Math.max(et, window.innerWidth - Bt - et);
      let Qt;
      return N + ft + Et + Ct <= window.innerHeight - et ? Qt = N + ft + Ct : N - Et - Ct >= et ? Qt = N - Et - Ct : Qt = N + ft - Et - et, Qt = Math.min(Math.max(Qt, et), re), {
        left: `${Math.min(Math.max(b + (ut - Bt) / 2, et), _t)}px`,
        top: `${Qt}px`
      };
    }), K = O(() => {
      if (!p.value.selectionRect) return {};
      const { x: b, y: N, width: ut, height: ft } = p.value.selectionRect, et = 10;
      let Ct = b - et, Bt = N - et, Et = "translateY(-100%)";
      return Ct < 10 && (Ct = b + ut + et, Et = "translateY(-100%)"), Bt < 30 && (Bt = N + ft + et, Et = "translateY(0)"), {
        left: `${Ct}px`,
        top: `${Bt}px`,
        transform: Et
      };
    }), q = O(() => {
      if (!p.value.selectionRect) return "";
      const { width: b, height: N } = p.value.selectionRect;
      return `${Math.round(b)} × ${Math.round(N)}`;
    }), Q = O(
      () => m?.getData().style.color || p.value.currentStyle.color
    ), nt = O(() => {
      const b = m?.getData().type === f.Marker ? ni(h.value, u.value) : Pe(h.value);
      return {
        "--text-accent-color": Q.value,
        left: `${b.x}px`,
        top: `${b.y}px`
      };
    }), at = (b) => {
      if (b === f.Pin && p.value.selectionRect) {
        xt();
        return;
      }
      if (b === f.Ocr && p.value.selectionRect) {
        ot();
        return;
      }
      s?.setTool(b);
    }, xt = async () => {
      try {
        await s?.createPinWindow();
      } catch (b) {
        I.error("[截图] 创建贴图失败", b);
      }
    }, ot = async () => {
      try {
        await s?.createOcrPinWindow();
      } catch (b) {
        I.error("[截图] 创建文字识别贴图失败", b);
      }
    }, Y = (b) => {
      s?.updateStyle({ color: b });
    }, it = (b) => {
      s?.updateStyle({ lineWidth: b });
    }, mt = (b) => {
      s?.updateStyle({ opacity: b });
    }, lt = (b) => {
      s?.updateTextSize(b);
    }, dt = (b) => {
      s?.updateMosaicSize(b);
    }, bt = (b) => {
      s?.updateSelectionCornerRadius(b);
    }, $ = (b) => {
      v.value = b, s?.setTranslationEngine(b), s?.executeTranslation();
    }, At = () => {
      s?.undoAnnotation();
    }, U = () => {
      s?.redoAnnotation();
    }, zt = () => {
      s?.deleteSelectedAnnotation();
    }, gt = async () => {
      try {
        await s?.processScreenshot("save"), ct();
      } catch (b) {
        const N = b?.message || b?.toString() || "保存失败";
        if (N.includes("保存已取消") || N.includes("cancelled"))
          return;
        I.error("保存截图时发生错误", N);
      }
    }, Ot = async () => {
      try {
        await s?.processScreenshot("copy"), ct();
      } catch {
      }
    }, Ht = () => {
      ct();
    }, ae = (b, N) => {
      if (N && [f.Text, f.Marker].includes(N.getData().type)) {
        const ut = N.getData();
        h.value = {
          x: ut.points[0].x,
          y: ut.points[0].y
        }, u.value = ut.fontSize || p.value.textSize;
      } else
        h.value = b, u.value = p.value.textSize;
      r.value = !0, m = N || null, N && s?.setEditingAnnotation(N), N && N.getData().text ? l.value = N.getData().text || "" : l.value = "", ke(() => {
        e.value?.focus(), m && e.value?.select();
      });
    }, Ft = () => {
      const b = m?.getData().type === f.Marker;
      l.value.trim() || b ? m ? s?.updateTextAnnotation(m, l.value.trim()) : s?.createTextAnnotation(h.value, l.value) : m && s?.deleteAnnotation(m), _();
    }, _ = () => {
      r.value = !1, l.value = "", m && s?.clearEditingAnnotation(), m = null;
    }, J = (b) => {
      navigator.clipboard && navigator.clipboard.writeText(b.hex).catch((N) => {
        I.error("[截图] 复制颜色到剪贴板失败", N);
      });
    }, pt = (b) => {
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
          Ft(), b.preventDefault();
          return;
        }
        if (b.key === "Tab") {
          b.preventDefault();
          return;
        }
        return;
      }
      if (!p.value.selectionRect) {
        if (b.key === "Escape") {
          ct();
          return;
        }
        b.preventDefault(), b.stopPropagation();
        return;
      }
      if (s?.handleKeyDown(b)) {
        b.preventDefault();
        return;
      }
      const N = navigator.platform.toLowerCase().includes("mac");
      if ((N ? b.metaKey : b.ctrlKey) && b.key.toLowerCase() === "z") {
        b.shiftKey ? U() : At(), b.preventDefault();
        return;
      }
      if (!N && b.ctrlKey && b.key.toLowerCase() === "y") {
        U(), b.preventDefault();
        return;
      }
      if (b.key === "Escape") {
        ct();
        return;
      } else if (b.key === "Delete" || b.key === "Backspace") {
        zt(), b.preventDefault();
        return;
      }
      ["Shift", "Control", "Alt", "Meta"].includes(b.key) || b.preventDefault();
    }, ct = async () => {
      if (!C) {
        C = !0, s?.destroy(), s = null;
        try {
          await S("cleanup_screenshot_resources");
        } catch {
          try {
            await S("clear_screenshot_background");
          } catch (N) {
            I.error("[截图] 清理后台缓存失败", N);
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
        }, r.value = !1, l.value = "", m = null, d.value = !1, a.value = !0;
        try {
          await S("close_and_destroy_screenshot_window");
        } catch (b) {
          I.error("[截图] 销毁截图窗口失败，回退到 close()", b), await o.value?.close();
        } finally {
          C = !1;
        }
      }
    }, vt = () => {
      const b = s?.getState();
      b && (p.value = b);
    }, Rt = () => {
      const b = i.value?.getToolbarSize?.();
      b && (k.value = b);
    }, Xt = (b) => {
      const N = b.detail;
      N && (k.value = N);
    };
    return nn(async () => {
      if (t.value) {
        o.value = new on("screenshot"), s = new zl(
          t.value,
          vt,
          ae,
          J
        ), document.addEventListener("keydown", pt), window.addEventListener("resize", Rt), window.addEventListener("screenshot-toolbar-resize", Xt), A.value = await Sn("screenshot-close-requested", () => {
          ct();
        }), z.value = await Sn("tauri://blur", () => {
          if (r.value && document.activeElement === e.value)
            return;
          const b = s?.getTranslationState();
          b?.isLoading || b?.isVisible || setTimeout(() => {
            if (!r.value || document.activeElement !== e.value) {
              const N = s?.getTranslationState();
              if (N?.isLoading || N?.isVisible)
                return;
              ct();
            }
          }, 100);
        }), await ke(), Rt(), await o.value.emit("screenshot_ready");
        try {
          const b = await S("get_translation_engine");
          b && ["google", "bing", "offline", "local-ai"].includes(b) && (v.value = b, s?.setTranslationEngine(b));
        } catch (b) {
          I.error("[截图] 获取翻译引擎设置失败", b);
        }
        try {
          const b = await S("get_offline_model_activated");
          s?.setOfflineModelActivated(b);
        } catch (b) {
          I.error("[截图] 获取离线模型激活状态失败", b);
        }
      }
    }), ui(() => {
      s?.destroy(), s = null, document.removeEventListener("keydown", pt), window.removeEventListener("resize", Rt), window.removeEventListener("screenshot-toolbar-resize", Xt), z.value?.(), A.value?.(), z.value = void 0, A.value = void 0, o.value = null;
    }), (b, N) => (R(), D(
      "div",
      Yc,
      [
        F(" 遮罩层 "),
        p.value.selectionRect ? (R(), D("div", Xc, [
          x(
            "div",
            {
              class: "mask-top",
              style: ht(j.value)
            },
            null,
            4
            /* STYLE */
          ),
          x(
            "div",
            {
              class: "mask-bottom",
              style: ht(X.value)
            },
            null,
            4
            /* STYLE */
          ),
          x(
            "div",
            {
              class: "mask-left",
              style: ht(G.value)
            },
            null,
            4
            /* STYLE */
          ),
          x(
            "div",
            {
              class: "mask-right",
              style: ht(V.value)
            },
            null,
            4
            /* STYLE */
          )
        ])) : (R(), D("div", Zc)),
        F(" 画布 "),
        x(
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
        F(" 尺寸信息 "),
        p.value.selectionRect && a.value ? (R(), D(
          "div",
          {
            key: 2,
            class: "size-info",
            style: ht(K.value)
          },
          [
            x(
              "span",
              Gc,
              H(q.value),
              1
              /* TEXT */
            )
          ],
          4
          /* STYLE */
        )) : F("v-if", !0),
        F(" 工具栏 "),
        p.value.selectionRect && !T.value ? (R(), St(Uc, {
          key: 3,
          ref_key: "toolbarRef",
          ref: i,
          style: ht(Z.value),
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
          "current-translate-engine": v.value,
          onToolSelect: at,
          onColorChange: Y,
          onLineWidthChange: it,
          onOpacityChange: mt,
          onTextSizeChange: lt,
          onMosaicSizeChange: dt,
          onSelectionCornerRadiusChange: bt,
          onTranslateEngineChange: $,
          onUndo: At,
          onRedo: U,
          onDelete: zt,
          onSave: gt,
          onConfirm: Ot,
          onCancel: Ht
        }, null, 8, ["style", "current-tool", "current-color", "current-line-width", "current-opacity", "current-text-size", "current-mosaic-size", "current-selection-corner-radius", "can-undo", "can-redo", "can-delete", "current-translate-engine"])) : F("v-if", !0),
        F(" 加载提示 - 仅在初始化时显示 "),
        d.value ? (R(), D("div", Kc, [
          N[1] || (N[1] = x(
            "div",
            { class: "loading-spinner" },
            null,
            -1
            /* HOISTED */
          )),
          x(
            "p",
            null,
            H(b.$t("screenshotTool.loading")),
            1
            /* TEXT */
          )
        ])) : F("v-if", !0),
        F(" 文字输入框 "),
        r.value ? (R(), D(
          "div",
          {
            key: 5,
            class: "text-input-container",
            style: ht(nt.value)
          },
          [
            qe(x(
              "input",
              {
                ref_key: "textInputRef",
                ref: e,
                "onUpdate:modelValue": N[0] || (N[0] = (ut) => l.value = ut),
                type: "text",
                class: "text-input",
                style: ht({
                  color: Q.value,
                  fontFamily: M(ie),
                  fontSize: u.value + "px",
                  height: u.value + "px",
                  lineHeight: u.value + "px"
                }),
                onKeydown: [
                  Zi(Ft, ["enter"]),
                  Zi(_, ["escape"])
                ],
                onBlur: Ft,
                autofocus: ""
              },
              null,
              36
              /* STYLE, NEED_HYDRATION */
            ), [
              [ba, l.value]
            ])
          ],
          4
          /* STYLE */
        )) : F("v-if", !0)
      ],
      512
      /* NEED_PATCH */
    ));
  }
}), Jc = /* @__PURE__ */ sn(qc, [["__scopeId", "data-v-a3b3737e"]]), Qc = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Jc
}, Symbol.toStringTag, { value: "Module" })), is = Symbol(), vn = "el", th = "is-", me = (n, t, e, i, o) => {
  let s = `${n}-${t}`;
  return e && (s += `-${e}`), i && (s += `__${i}`), o && (s += `--${o}`), s;
}, os = Symbol("namespaceContextKey"), eh = (n) => {
  const t = n || (De() ? xe(os, E(vn)) : E(vn));
  return O(() => M(t) || vn);
}, xi = (n, t) => {
  const e = eh(t);
  return {
    namespace: e,
    b: (m = "") => me(e.value, n, m, "", ""),
    e: (m) => m ? me(e.value, n, "", m, "") : "",
    m: (m) => m ? me(e.value, n, "", "", m) : "",
    be: (m, p) => m && p ? me(e.value, n, m, p, "") : "",
    em: (m, p) => m && p ? me(e.value, n, "", m, p) : "",
    bm: (m, p) => m && p ? me(e.value, n, m, "", p) : "",
    bem: (m, p, z) => m && p && z ? me(e.value, n, m, p, z) : "",
    is: (m, ...p) => {
      const z = p.length >= 1 ? p[0] : !0;
      return m && z ? `${th}${m}` : "";
    },
    cssVar: (m) => {
      const p = {};
      for (const z in m)
        m[z] && (p[`--${e.value}-${z}`] = m[z]);
      return p;
    },
    cssVarName: (m) => `--${e.value}-${m}`,
    cssVarBlock: (m) => {
      const p = {};
      for (const z in m)
        m[z] && (p[`--${e.value}-${n}-${z}`] = m[z]);
      return p;
    },
    cssVarBlockName: (m) => `--${e.value}-${n}-${m}`
  };
};
/**
* @vue/shared v3.5.13
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/
const nh = Object.prototype.hasOwnProperty, fo = (n, t) => nh.call(n, t), tn = (n) => typeof n == "function", Se = (n) => typeof n == "string", ss = (n) => n !== null && typeof n == "object";
var ih = typeof global == "object" && global && global.Object === Object && global, oh = typeof self == "object" && self && self.Object === Object && self, ki = ih || oh || Function("return this")(), Oe = ki.Symbol, as = Object.prototype, sh = as.hasOwnProperty, ah = as.toString, Ye = Oe ? Oe.toStringTag : void 0;
function rh(n) {
  var t = sh.call(n, Ye), e = n[Ye];
  try {
    n[Ye] = void 0;
    var i = !0;
  } catch {
  }
  var o = ah.call(n);
  return i && (t ? n[Ye] = e : delete n[Ye]), o;
}
var lh = Object.prototype, ch = lh.toString;
function hh(n) {
  return ch.call(n);
}
var uh = "[object Null]", dh = "[object Undefined]", mo = Oe ? Oe.toStringTag : void 0;
function rs(n) {
  return n == null ? n === void 0 ? dh : uh : mo && mo in Object(n) ? rh(n) : hh(n);
}
function gh(n) {
  return n != null && typeof n == "object";
}
var fh = "[object Symbol]";
function bi(n) {
  return typeof n == "symbol" || gh(n) && rs(n) == fh;
}
function mh(n, t) {
  for (var e = -1, i = n == null ? 0 : n.length, o = Array(i); ++e < i; )
    o[e] = t(n[e], e, n);
  return o;
}
var Si = Array.isArray, po = Oe ? Oe.prototype : void 0, yo = po ? po.toString : void 0;
function ls(n) {
  if (typeof n == "string")
    return n;
  if (Si(n))
    return mh(n, ls) + "";
  if (bi(n))
    return yo ? yo.call(n) : "";
  var t = n + "";
  return t == "0" && 1 / n == -1 / 0 ? "-0" : t;
}
function cs(n) {
  var t = typeof n;
  return n != null && (t == "object" || t == "function");
}
var ph = "[object AsyncFunction]", yh = "[object Function]", wh = "[object GeneratorFunction]", vh = "[object Proxy]";
function xh(n) {
  if (!cs(n))
    return !1;
  var t = rs(n);
  return t == yh || t == wh || t == ph || t == vh;
}
var qn = ki["__core-js_shared__"], wo = function() {
  var n = /[^.]+$/.exec(qn && qn.keys && qn.keys.IE_PROTO || "");
  return n ? "Symbol(src)_1." + n : "";
}();
function kh(n) {
  return !!wo && wo in n;
}
var bh = Function.prototype, Sh = bh.toString;
function Mh(n) {
  if (n != null) {
    try {
      return Sh.call(n);
    } catch {
    }
    try {
      return n + "";
    } catch {
    }
  }
  return "";
}
var Ch = /[\\^$.*+?()[\]{}|]/g, _h = /^\[object .+?Constructor\]$/, Th = Function.prototype, zh = Object.prototype, Rh = Th.toString, Lh = zh.hasOwnProperty, Ph = RegExp(
  "^" + Rh.call(Lh).replace(Ch, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$"
);
function Ah(n) {
  if (!cs(n) || kh(n))
    return !1;
  var t = xh(n) ? Ph : _h;
  return t.test(Mh(n));
}
function Ih(n, t) {
  return n?.[t];
}
function hs(n, t) {
  var e = Ih(n, t);
  return Ah(e) ? e : void 0;
}
function Dh(n, t) {
  return n === t || n !== n && t !== t;
}
var Oh = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/, Eh = /^\w*$/;
function $h(n, t) {
  if (Si(n))
    return !1;
  var e = typeof n;
  return e == "number" || e == "symbol" || e == "boolean" || n == null || bi(n) ? !0 : Eh.test(n) || !Oh.test(n) || t != null && n in Object(t);
}
var en = hs(Object, "create");
function Wh() {
  this.__data__ = en ? en(null) : {}, this.size = 0;
}
function Bh(n) {
  var t = this.has(n) && delete this.__data__[n];
  return this.size -= t ? 1 : 0, t;
}
var Nh = "__lodash_hash_undefined__", Hh = Object.prototype, Fh = Hh.hasOwnProperty;
function jh(n) {
  var t = this.__data__;
  if (en) {
    var e = t[n];
    return e === Nh ? void 0 : e;
  }
  return Fh.call(t, n) ? t[n] : void 0;
}
var Vh = Object.prototype, Uh = Vh.hasOwnProperty;
function Yh(n) {
  var t = this.__data__;
  return en ? t[n] !== void 0 : Uh.call(t, n);
}
var Xh = "__lodash_hash_undefined__";
function Zh(n, t) {
  var e = this.__data__;
  return this.size += this.has(n) ? 0 : 1, e[n] = en && t === void 0 ? Xh : t, this;
}
function Me(n) {
  var t = -1, e = n == null ? 0 : n.length;
  for (this.clear(); ++t < e; ) {
    var i = n[t];
    this.set(i[0], i[1]);
  }
}
Me.prototype.clear = Wh;
Me.prototype.delete = Bh;
Me.prototype.get = jh;
Me.prototype.has = Yh;
Me.prototype.set = Zh;
function Gh() {
  this.__data__ = [], this.size = 0;
}
function Pn(n, t) {
  for (var e = n.length; e--; )
    if (Dh(n[e][0], t))
      return e;
  return -1;
}
var Kh = Array.prototype, qh = Kh.splice;
function Jh(n) {
  var t = this.__data__, e = Pn(t, n);
  if (e < 0)
    return !1;
  var i = t.length - 1;
  return e == i ? t.pop() : qh.call(t, e, 1), --this.size, !0;
}
function Qh(n) {
  var t = this.__data__, e = Pn(t, n);
  return e < 0 ? void 0 : t[e][1];
}
function tu(n) {
  return Pn(this.__data__, n) > -1;
}
function eu(n, t) {
  var e = this.__data__, i = Pn(e, n);
  return i < 0 ? (++this.size, e.push([n, t])) : e[i][1] = t, this;
}
function Be(n) {
  var t = -1, e = n == null ? 0 : n.length;
  for (this.clear(); ++t < e; ) {
    var i = n[t];
    this.set(i[0], i[1]);
  }
}
Be.prototype.clear = Gh;
Be.prototype.delete = Jh;
Be.prototype.get = Qh;
Be.prototype.has = tu;
Be.prototype.set = eu;
var nu = hs(ki, "Map");
function iu() {
  this.size = 0, this.__data__ = {
    hash: new Me(),
    map: new (nu || Be)(),
    string: new Me()
  };
}
function ou(n) {
  var t = typeof n;
  return t == "string" || t == "number" || t == "symbol" || t == "boolean" ? n !== "__proto__" : n === null;
}
function An(n, t) {
  var e = n.__data__;
  return ou(t) ? e[typeof t == "string" ? "string" : "hash"] : e.map;
}
function su(n) {
  var t = An(this, n).delete(n);
  return this.size -= t ? 1 : 0, t;
}
function au(n) {
  return An(this, n).get(n);
}
function ru(n) {
  return An(this, n).has(n);
}
function lu(n, t) {
  var e = An(this, n), i = e.size;
  return e.set(n, t), this.size += e.size == i ? 0 : 1, this;
}
function _e(n) {
  var t = -1, e = n == null ? 0 : n.length;
  for (this.clear(); ++t < e; ) {
    var i = n[t];
    this.set(i[0], i[1]);
  }
}
_e.prototype.clear = iu;
_e.prototype.delete = su;
_e.prototype.get = au;
_e.prototype.has = ru;
_e.prototype.set = lu;
var cu = "Expected a function";
function Mi(n, t) {
  if (typeof n != "function" || t != null && typeof t != "function")
    throw new TypeError(cu);
  var e = function() {
    var i = arguments, o = t ? t.apply(this, i) : i[0], s = e.cache;
    if (s.has(o))
      return s.get(o);
    var a = n.apply(this, i);
    return e.cache = s.set(o, a) || s, a;
  };
  return e.cache = new (Mi.Cache || _e)(), e;
}
Mi.Cache = _e;
var hu = 500;
function uu(n) {
  var t = Mi(n, function(i) {
    return e.size === hu && e.clear(), i;
  }), e = t.cache;
  return t;
}
var du = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g, gu = /\\(\\)?/g, fu = uu(function(n) {
  var t = [];
  return n.charCodeAt(0) === 46 && t.push(""), n.replace(du, function(e, i, o, s) {
    t.push(o ? s.replace(gu, "$1") : i || e);
  }), t;
});
function mu(n) {
  return n == null ? "" : ls(n);
}
function pu(n, t) {
  return Si(n) ? n : $h(n, t) ? [n] : fu(mu(n));
}
function yu(n) {
  if (typeof n == "string" || bi(n))
    return n;
  var t = n + "";
  return t == "0" && 1 / n == -1 / 0 ? "-0" : t;
}
function wu(n, t) {
  t = pu(t, n);
  for (var e = 0, i = t.length; n != null && e < i; )
    n = n[yu(t[e++])];
  return e && e == i ? n : void 0;
}
function vu(n, t, e) {
  var i = n == null ? void 0 : wu(n, t);
  return i === void 0 ? e : i;
}
function xu(n) {
  for (var t = -1, e = n == null ? 0 : n.length, i = {}; ++t < e; ) {
    var o = n[t];
    i[o[0]] = o[1];
  }
  return i;
}
const us = (n) => n === void 0, vo = (n) => typeof n == "boolean", Ce = (n) => typeof n == "number", li = (n) => typeof Element > "u" ? !1 : n instanceof Element, ku = (n) => Se(n) ? !Number.isNaN(Number(n)) : !1;
var xo;
const Te = typeof window < "u", bu = (n) => typeof n == "string", Su = () => {
};
Te && ((xo = window?.navigator) != null && xo.userAgent) && /iP(ad|hone|od)/.test(window.navigator.userAgent);
function Ci(n) {
  return typeof n == "function" ? n() : M(n);
}
function Mu(n) {
  return n;
}
function _i(n) {
  return Ma() ? (Ca(n), !0) : !1;
}
function Cu(n, t = !0) {
  De() ? nn(n) : t ? n() : ke(n);
}
function ds(n, t, e = {}) {
  const {
    immediate: i = !0
  } = e, o = E(!1);
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
    }, Ci(t));
  }
  return i && (o.value = !0, Te && l()), _i(r), {
    isPending: Sa(o),
    start: l,
    stop: r
  };
}
function gs(n) {
  var t;
  const e = Ci(n);
  return (t = e?.$el) != null ? t : e;
}
const fs = Te ? window : void 0;
function ms(...n) {
  let t, e, i, o;
  if (bu(n[0]) || Array.isArray(n[0]) ? ([e, i, o] = n, t = fs) : [t, e, i, o] = n, !t)
    return Su;
  Array.isArray(e) || (e = [e]), Array.isArray(i) || (i = [i]);
  const s = [], a = () => {
    s.forEach((u) => u()), s.length = 0;
  }, r = (u, d, v, k) => (u.addEventListener(d, v, k), () => u.removeEventListener(d, v, k)), l = We(() => [gs(t), Ci(o)], ([u, d]) => {
    a(), u && s.push(...e.flatMap((v) => i.map((k) => r(u, v, k, d))));
  }, { immediate: !0, flush: "post" }), h = () => {
    l(), a();
  };
  return _i(h), h;
}
function _u(n, t = !1) {
  const e = E(), i = () => e.value = !!n();
  return i(), Cu(i, t), e;
}
const ko = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {}, bo = "__vueuse_ssr_handlers__";
ko[bo] = ko[bo] || {};
var So = Object.getOwnPropertySymbols, Tu = Object.prototype.hasOwnProperty, zu = Object.prototype.propertyIsEnumerable, Ru = (n, t) => {
  var e = {};
  for (var i in n)
    Tu.call(n, i) && t.indexOf(i) < 0 && (e[i] = n[i]);
  if (n != null && So)
    for (var i of So(n))
      t.indexOf(i) < 0 && zu.call(n, i) && (e[i] = n[i]);
  return e;
};
function Lu(n, t, e = {}) {
  const i = e, { window: o = fs } = i, s = Ru(i, ["window"]);
  let a;
  const r = _u(() => o && "ResizeObserver" in o), l = () => {
    a && (a.disconnect(), a = void 0);
  }, h = We(() => gs(n), (d) => {
    l(), r.value && o && d && (a = new ResizeObserver(t), a.observe(d, s));
  }, { immediate: !0, flush: "post" }), u = () => {
    l(), h();
  };
  return _i(u), {
    isSupported: r,
    stop: u
  };
}
var Mo;
(function(n) {
  n.UP = "UP", n.RIGHT = "RIGHT", n.DOWN = "DOWN", n.LEFT = "LEFT", n.NONE = "NONE";
})(Mo || (Mo = {}));
var Pu = Object.defineProperty, Co = Object.getOwnPropertySymbols, Au = Object.prototype.hasOwnProperty, Iu = Object.prototype.propertyIsEnumerable, _o = (n, t, e) => t in n ? Pu(n, t, { enumerable: !0, configurable: !0, writable: !0, value: e }) : n[t] = e, Du = (n, t) => {
  for (var e in t || (t = {}))
    Au.call(t, e) && _o(n, e, t[e]);
  if (Co)
    for (var e of Co(t))
      Iu.call(t, e) && _o(n, e, t[e]);
  return n;
};
const Ou = {
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
Du({
  linear: Mu
}, Ou);
const To = {
  current: 0
}, zo = E(0), ps = 2e3, Ro = Symbol("elZIndexContextKey"), ys = Symbol("zIndexContextKey"), Eu = (n) => {
  const t = De() ? xe(Ro, To) : To, e = n || (De() ? xe(ys, void 0) : void 0), i = O(() => {
    const a = M(e);
    return Ce(a) ? a : ps;
  }), o = O(() => i.value + zo.value), s = () => (t.current++, zo.value = t.current, o.value);
  return !Te && xe(Ro), {
    initialZIndex: i,
    currentZIndex: o,
    nextZIndex: s
  };
};
var $u = {
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
const Wu = (n) => (t, e) => Bu(t, e, M(n)), Bu = (n, t, e) => vu(e, n, n).replace(/\{(\w+)\}/g, (i, o) => {
  var s;
  return `${(s = t?.[o]) != null ? s : `{${o}}`}`;
}), Nu = (n) => {
  const t = O(() => M(n).name), e = _a(n) ? n : E(n);
  return {
    lang: t,
    locale: e,
    t: Wu(n)
  };
}, ws = Symbol("localeContextKey"), Hu = (n) => {
  const t = n || xe(ws, E());
  return Nu(O(() => t.value || $u));
}, vs = "__epPropKey", Yt = (n) => n, Fu = (n) => ss(n) && !!n[vs], xs = (n, t) => {
  if (!ss(n) || Fu(n))
    return n;
  const { values: e, required: i, default: o, type: s, validator: a } = n, l = {
    type: s,
    required: !!i,
    validator: e || a ? (h) => {
      let u = !1, d = [];
      if (e && (d = Array.from(e), fo(n, "default") && d.push(o), u || (u = d.includes(h))), a && (u || (u = a(h))), !u && d.length > 0) {
        const v = [...new Set(d)].map((k) => JSON.stringify(k)).join(", ");
        Ta(`Invalid prop: validation failed${t ? ` for prop "${t}"` : ""}. Expected one of [${v}], got value ${JSON.stringify(h)}.`);
      }
      return u;
    } : void 0,
    [vs]: !0
  };
  return fo(n, "default") && (l.default = o), l;
}, Ne = (n) => xu(Object.entries(n).map(([t, e]) => [
  t,
  xs(e, t)
])), ju = ["", "default", "small", "large"], Vu = xs({
  type: String,
  values: ju,
  required: !1
}), Uu = Symbol("size"), Yu = Symbol("emptyValuesContextKey"), Xu = Ne({
  emptyValues: Array,
  valueOnClear: {
    type: [String, Number, Boolean, Function],
    default: void 0,
    validator: (n) => tn(n) ? !n() : !n
  }
}), Lo = (n) => Object.keys(n), Cn = E();
function ks(n, t = void 0) {
  return De() ? xe(is, Cn) : Cn;
}
function bs(n, t) {
  const e = ks(), i = xi(n, O(() => {
    var r;
    return ((r = e.value) == null ? void 0 : r.namespace) || vn;
  })), o = Hu(O(() => {
    var r;
    return (r = e.value) == null ? void 0 : r.locale;
  })), s = Eu(O(() => {
    var r;
    return ((r = e.value) == null ? void 0 : r.zIndex) || ps;
  })), a = O(() => {
    var r;
    return M(t) || ((r = e.value) == null ? void 0 : r.size) || "";
  });
  return Ss(O(() => M(e) || {})), {
    ns: i,
    locale: o,
    zIndex: s,
    size: a
  };
}
const Ss = (n, t, e = !1) => {
  var i;
  const o = !!De(), s = o ? ks() : void 0, a = (i = void 0) != null ? i : o ? za : void 0;
  if (!a)
    return;
  const r = O(() => {
    const l = M(n);
    return s?.value ? Zu(s.value, l) : l;
  });
  return a(is, r), a(ws, O(() => r.value.locale)), a(os, O(() => r.value.namespace)), a(ys, O(() => r.value.zIndex)), a(Uu, {
    size: O(() => r.value.size || "")
  }), a(Yu, O(() => ({
    emptyValues: r.value.emptyValues,
    valueOnClear: r.value.valueOnClear
  }))), (e || !Cn.value) && (Cn.value = r.value), r;
}, Zu = (n, t) => {
  const e = [.../* @__PURE__ */ new Set([...Lo(n), ...Lo(t)])], i = {};
  for (const o of e)
    i[o] = t[o] !== void 0 ? t[o] : n[o];
  return i;
};
var In = (n, t) => {
  const e = n.__vccOpts || n;
  for (const [i, o] of t)
    e[i] = o;
  return e;
};
function ci(n, t = "px") {
  if (!n)
    return "";
  if (Ce(n) || ku(n))
    return `${n}${t}`;
  if (Se(n))
    return n;
}
const Ms = (n, t) => (n.install = (e) => {
  for (const i of [n, ...Object.values({})])
    e.component(i.name, i);
}, n), Cs = (n, t) => (n.install = (e) => {
  n._context = e._context, e.config.globalProperties[t] = n;
}, n), Gu = Ne({
  size: {
    type: Yt([Number, String])
  },
  color: {
    type: String
  }
}), Ku = Tt({
  name: "ElIcon",
  inheritAttrs: !1
}), qu = /* @__PURE__ */ Tt({
  ...Ku,
  props: Gu,
  setup(n) {
    const t = n, e = xi("icon"), i = O(() => {
      const { size: o, color: s } = t;
      return !o && !s ? {} : {
        fontSize: us(o) ? void 0 : ci(o),
        "--color": s
      };
    });
    return (o, s) => (R(), D("i", Ra({
      class: M(e).b(),
      style: M(i)
    }, o.$attrs), [
      se(o.$slots, "default")
    ], 16));
  }
});
var Ju = /* @__PURE__ */ In(qu, [["__file", "icon.vue"]]);
const _n = Ms(Ju);
/*! Element Plus Icons Vue v2.3.1 */
var Qu = /* @__PURE__ */ Tt({
  name: "CircleCloseFilled",
  __name: "circle-close-filled",
  setup(n) {
    return (t, e) => (R(), D("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 1024 1024"
    }, [
      x("path", {
        fill: "currentColor",
        d: "M512 64a448 448 0 1 1 0 896 448 448 0 0 1 0-896m0 393.664L407.936 353.6a38.4 38.4 0 1 0-54.336 54.336L457.664 512 353.6 616.064a38.4 38.4 0 1 0 54.336 54.336L512 566.336 616.064 670.4a38.4 38.4 0 1 0 54.336-54.336L566.336 512 670.4 407.936a38.4 38.4 0 1 0-54.336-54.336z"
      })
    ]));
  }
}), td = Qu, ed = /* @__PURE__ */ Tt({
  name: "Close",
  __name: "close",
  setup(n) {
    return (t, e) => (R(), D("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 1024 1024"
    }, [
      x("path", {
        fill: "currentColor",
        d: "M764.288 214.592 512 466.88 259.712 214.592a31.936 31.936 0 0 0-45.12 45.12L466.752 512 214.528 764.224a31.936 31.936 0 1 0 45.12 45.184L512 557.184l252.288 252.288a31.936 31.936 0 0 0 45.12-45.12L557.12 512.064l252.288-252.352a31.936 31.936 0 1 0-45.12-45.184z"
      })
    ]));
  }
}), _s = ed, nd = /* @__PURE__ */ Tt({
  name: "InfoFilled",
  __name: "info-filled",
  setup(n) {
    return (t, e) => (R(), D("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 1024 1024"
    }, [
      x("path", {
        fill: "currentColor",
        d: "M512 64a448 448 0 1 1 0 896.064A448 448 0 0 1 512 64m67.2 275.072c33.28 0 60.288-23.104 60.288-57.344s-27.072-57.344-60.288-57.344c-33.28 0-60.16 23.104-60.16 57.344s26.88 57.344 60.16 57.344M590.912 699.2c0-6.848 2.368-24.64 1.024-34.752l-52.608 60.544c-10.88 11.456-24.512 19.392-30.912 17.28a12.992 12.992 0 0 1-8.256-14.72l87.68-276.992c7.168-35.136-12.544-67.2-54.336-71.296-44.096 0-108.992 44.736-148.48 101.504 0 6.784-1.28 23.68.064 33.792l52.544-60.608c10.88-11.328 23.552-19.328 29.952-17.152a12.8 12.8 0 0 1 7.808 16.128L388.48 728.576c-10.048 32.256 8.96 63.872 55.04 71.04 67.84 0 107.904-43.648 147.456-100.416z"
      })
    ]));
  }
}), id = nd, od = /* @__PURE__ */ Tt({
  name: "SuccessFilled",
  __name: "success-filled",
  setup(n) {
    return (t, e) => (R(), D("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 1024 1024"
    }, [
      x("path", {
        fill: "currentColor",
        d: "M512 64a448 448 0 1 1 0 896 448 448 0 0 1 0-896m-55.808 536.384-99.52-99.584a38.4 38.4 0 1 0-54.336 54.336l126.72 126.72a38.272 38.272 0 0 0 54.336 0l262.4-262.464a38.4 38.4 0 1 0-54.272-54.336z"
      })
    ]));
  }
}), sd = od, ad = /* @__PURE__ */ Tt({
  name: "WarningFilled",
  __name: "warning-filled",
  setup(n) {
    return (t, e) => (R(), D("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 1024 1024"
    }, [
      x("path", {
        fill: "currentColor",
        d: "M512 64a448 448 0 1 1 0 896 448 448 0 0 1 0-896m0 192a58.432 58.432 0 0 0-58.24 63.744l23.36 256.384a35.072 35.072 0 0 0 69.76 0l23.296-256.384A58.432 58.432 0 0 0 512 256m0 512a51.2 51.2 0 1 0 0-102.4 51.2 51.2 0 0 0 0 102.4"
      })
    ]));
  }
}), rd = ad;
const Ts = Yt([
  String,
  Object,
  Function
]), ld = {
  Close: _s
}, cd = {
  Close: _s
}, Tn = {
  success: sd,
  warning: rd,
  error: td,
  info: id
}, hd = (n) => n, xn = {
  esc: "Escape",
  delete: "Delete",
  backspace: "Backspace"
}, ud = Ne({
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
    type: Yt([String, Object, Array])
  },
  offset: {
    type: Yt(Array),
    default: [0, 0]
  },
  badgeClass: {
    type: String
  }
}), dd = Tt({
  name: "ElBadge"
}), gd = /* @__PURE__ */ Tt({
  ...dd,
  props: ud,
  setup(n, { expose: t }) {
    const e = n, i = xi("badge"), o = O(() => e.isDot ? "" : Ce(e.value) && Ce(e.max) ? e.max < e.value ? `${e.max}+` : `${e.value}` : `${e.value}`), s = O(() => {
      var a, r, l, h, u;
      return [
        {
          backgroundColor: e.color,
          marginRight: ci(-((r = (a = e.offset) == null ? void 0 : a[0]) != null ? r : 0)),
          marginTop: ci((h = (l = e.offset) == null ? void 0 : l[1]) != null ? h : 0)
        },
        (u = e.badgeStyle) != null ? u : {}
      ];
    });
    return t({
      content: o
    }), (a, r) => (R(), D("div", {
      class: rt(M(i).b())
    }, [
      se(a.$slots, "default"),
      y(di, {
        name: `${M(i).namespace.value}-zoom-in-center`,
        persisted: ""
      }, {
        default: Lt(() => [
          qe(x("sup", {
            class: rt([
              M(i).e("content"),
              M(i).em("content", a.type),
              M(i).is("fixed", !!a.$slots.default),
              M(i).is("dot", a.isDot),
              M(i).is("hide-zero", !a.showZero && e.value === 0),
              a.badgeClass
            ]),
            style: ht(M(s))
          }, [
            se(a.$slots, "content", { value: M(o) }, () => [
              Do(H(M(o)), 1)
            ])
          ], 6), [
            [kn, !a.hidden && (M(o) || a.isDot || a.$slots.content)]
          ])
        ]),
        _: 3
      }, 8, ["name"])
    ], 2));
  }
});
var fd = /* @__PURE__ */ In(gd, [["__file", "badge.vue"]]);
const md = Ms(fd), pd = Ne({
  a11y: {
    type: Boolean,
    default: !0
  },
  locale: {
    type: Yt(Object)
  },
  size: Vu,
  button: {
    type: Yt(Object)
  },
  experimentalFeatures: {
    type: Yt(Object)
  },
  keyboardNavigation: {
    type: Boolean,
    default: !0
  },
  message: {
    type: Yt(Object)
  },
  zIndex: Number,
  namespace: {
    type: String,
    default: "el"
  },
  ...Xu
}), Kt = {};
Tt({
  name: "ElConfigProvider",
  props: pd,
  setup(n, { slots: t }) {
    We(() => n.message, (i) => {
      Object.assign(Kt, i ?? {});
    }, { immediate: !0, deep: !0 });
    const e = Ss(n);
    return () => se(t, "default", { config: e?.value });
  }
});
const zs = ["success", "info", "warning", "error"], Dt = hd({
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
  appendTo: Te ? document.body : void 0
}), yd = Ne({
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
    type: Ts,
    default: Dt.icon
  },
  id: {
    type: String,
    default: Dt.id
  },
  message: {
    type: Yt([
      String,
      Object,
      Function
    ]),
    default: Dt.message
  },
  onClose: {
    type: Yt(Function),
    default: Dt.onClose
  },
  showClose: {
    type: Boolean,
    default: Dt.showClose
  },
  type: {
    type: String,
    values: zs,
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
}), wd = {
  destroy: () => !0
}, Jt = La([]), vd = (n) => {
  const t = Jt.findIndex((o) => o.id === n), e = Jt[t];
  let i;
  return t > 0 && (i = Jt[t - 1]), { current: e, prev: i };
}, xd = (n) => {
  const { prev: t } = vd(n);
  return t ? t.vm.exposed.bottom.value : 0;
}, kd = (n, t) => Jt.findIndex((i) => i.id === n) > 0 ? 16 : t, bd = Tt({
  name: "ElMessage"
}), Sd = /* @__PURE__ */ Tt({
  ...bd,
  props: yd,
  emits: wd,
  setup(n, { expose: t }) {
    const e = n, { Close: i } = cd, { ns: o, zIndex: s } = bs("message"), { currentZIndex: a, nextZIndex: r } = s, l = E(), h = E(!1), u = E(0);
    let d;
    const v = O(() => e.type ? e.type === "error" ? "danger" : e.type : "info"), k = O(() => {
      const V = e.type;
      return { [o.bm("icon", V)]: V && Tn[V] };
    }), C = O(() => e.icon || Tn[e.type] || ""), m = O(() => xd(e.id)), p = O(() => kd(e.id, e.offset) + m.value), z = O(() => u.value + p.value), A = O(() => ({
      top: `${p.value}px`,
      zIndex: a.value
    }));
    function T() {
      e.duration !== 0 && ({ stop: d } = ds(() => {
        X();
      }, e.duration));
    }
    function j() {
      d?.();
    }
    function X() {
      h.value = !1;
    }
    function G({ code: V }) {
      V === xn.esc && X();
    }
    return nn(() => {
      T(), r(), h.value = !0;
    }), We(() => e.repeatNum, () => {
      j(), T();
    }), ms(document, "keydown", G), Lu(l, () => {
      u.value = l.value.getBoundingClientRect().height;
    }), t({
      visible: h,
      bottom: z,
      close: X
    }), (V, Z) => (R(), St(di, {
      name: M(o).b("fade"),
      onBeforeLeave: V.onClose,
      onAfterLeave: (K) => V.$emit("destroy"),
      persisted: ""
    }, {
      default: Lt(() => [
        qe(x("div", {
          id: V.id,
          ref_key: "messageRef",
          ref: l,
          class: rt([
            M(o).b(),
            { [M(o).m(V.type)]: V.type },
            M(o).is("center", V.center),
            M(o).is("closable", V.showClose),
            M(o).is("plain", V.plain),
            V.customClass
          ]),
          style: ht(M(A)),
          role: "alert",
          onMouseenter: j,
          onMouseleave: T
        }, [
          V.repeatNum > 1 ? (R(), St(M(md), {
            key: 0,
            value: V.repeatNum,
            type: M(v),
            class: rt(M(o).e("badge"))
          }, null, 8, ["value", "type", "class"])) : F("v-if", !0),
          M(C) ? (R(), St(M(_n), {
            key: 1,
            class: rt([M(o).e("icon"), M(k)])
          }, {
            default: Lt(() => [
              (R(), St(ve(M(C))))
            ]),
            _: 1
          }, 8, ["class"])) : F("v-if", !0),
          se(V.$slots, "default", {}, () => [
            V.dangerouslyUseHTMLString ? (R(), D(Ut, { key: 1 }, [
              F(" Caution here, message could've been compromised, never use user's input as message "),
              x("p", {
                class: rt(M(o).e("content")),
                innerHTML: V.message
              }, null, 10, ["innerHTML"])
            ], 2112)) : (R(), D("p", {
              key: 0,
              class: rt(M(o).e("content"))
            }, H(V.message), 3))
          ]),
          V.showClose ? (R(), St(M(_n), {
            key: 2,
            class: rt(M(o).e("closeBtn")),
            onClick: wt(X, ["stop"])
          }, {
            default: Lt(() => [
              y(M(i))
            ]),
            _: 1
          }, 8, ["class", "onClick"])) : F("v-if", !0)
        ], 46, ["id"]), [
          [kn, h.value]
        ])
      ]),
      _: 3
    }, 8, ["name", "onBeforeLeave", "onAfterLeave"]));
  }
});
var Md = /* @__PURE__ */ In(Sd, [["__file", "message.vue"]]);
let Cd = 1;
const Rs = (n) => {
  const t = !n || Se(n) || Je(n) || tn(n) ? { message: n } : n, e = {
    ...Dt,
    ...t
  };
  if (!e.appendTo)
    e.appendTo = document.body;
  else if (Se(e.appendTo)) {
    let i = document.querySelector(e.appendTo);
    li(i) || (i = document.body), e.appendTo = i;
  }
  return vo(Kt.grouping) && !e.grouping && (e.grouping = Kt.grouping), Ce(Kt.duration) && e.duration === 3e3 && (e.duration = Kt.duration), Ce(Kt.offset) && e.offset === 16 && (e.offset = Kt.offset), vo(Kt.showClose) && !e.showClose && (e.showClose = Kt.showClose), e;
}, _d = (n) => {
  const t = Jt.indexOf(n);
  if (t === -1)
    return;
  Jt.splice(t, 1);
  const { handler: e } = n;
  e.close();
}, Td = ({ appendTo: n, ...t }, e) => {
  const i = `message_${Cd++}`, o = t.onClose, s = document.createElement("div"), a = {
    ...t,
    id: i,
    onClose: () => {
      o?.(), _d(u);
    },
    onDestroy: () => {
      bn(null, s);
    }
  }, r = y(Md, a, tn(a.message) || Je(a.message) ? {
    default: tn(a.message) ? a.message : () => a.message
  } : null);
  r.appContext = e || Ee._context, bn(r, s), n.appendChild(s.firstElementChild);
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
}, Ee = (n = {}, t) => {
  if (!Te)
    return { close: () => {
    } };
  const e = Rs(n);
  if (e.grouping && Jt.length) {
    const o = Jt.find(({ vnode: s }) => {
      var a;
      return ((a = s.props) == null ? void 0 : a.message) === e.message;
    });
    if (o)
      return o.props.repeatNum += 1, o.props.type = e.type, o.handler;
  }
  if (Ce(Kt.max) && Jt.length >= Kt.max)
    return { close: () => {
    } };
  const i = Td(e, t);
  return Jt.push(i), i.handler;
};
zs.forEach((n) => {
  Ee[n] = (t = {}, e) => {
    const i = Rs(t);
    return Ee({ ...i, type: n }, e);
  };
});
function zd(n) {
  for (const t of Jt)
    (!n || n === t.props.type) && t.handler.close();
}
Ee.closeAll = zd;
Ee._context = null;
const Rd = Cs(Ee, "$message"), Ls = [
  "success",
  "info",
  "warning",
  "error"
], Ld = Ne({
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
    type: Ts
  },
  id: {
    type: String,
    default: ""
  },
  message: {
    type: Yt([
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
    type: Yt(Function),
    default: () => {
    }
  },
  onClose: {
    type: Yt(Function),
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
    values: [...Ls, ""],
    default: ""
  },
  zIndex: Number
}), Pd = {
  destroy: () => !0
}, Ad = Tt({
  name: "ElNotification"
}), Id = /* @__PURE__ */ Tt({
  ...Ad,
  props: Ld,
  emits: Pd,
  setup(n, { expose: t }) {
    const e = n, { ns: i, zIndex: o } = bs("notification"), { nextZIndex: s, currentZIndex: a } = o, { Close: r } = ld, l = E(!1);
    let h;
    const u = O(() => {
      const T = e.type;
      return T && Tn[e.type] ? i.m(T) : "";
    }), d = O(() => e.type && Tn[e.type] || e.icon), v = O(() => e.position.endsWith("right") ? "right" : "left"), k = O(() => e.position.startsWith("top") ? "top" : "bottom"), C = O(() => {
      var T;
      return {
        [k.value]: `${e.offset}px`,
        zIndex: (T = e.zIndex) != null ? T : a.value
      };
    });
    function m() {
      e.duration > 0 && ({ stop: h } = ds(() => {
        l.value && z();
      }, e.duration));
    }
    function p() {
      h?.();
    }
    function z() {
      l.value = !1;
    }
    function A({ code: T }) {
      T === xn.delete || T === xn.backspace ? p() : T === xn.esc ? l.value && z() : m();
    }
    return nn(() => {
      m(), s(), l.value = !0;
    }), ms(document, "keydown", A), t({
      visible: l,
      close: z
    }), (T, j) => (R(), St(di, {
      name: M(i).b("fade"),
      onBeforeLeave: T.onClose,
      onAfterLeave: (X) => T.$emit("destroy"),
      persisted: ""
    }, {
      default: Lt(() => [
        qe(x("div", {
          id: T.id,
          class: rt([M(i).b(), T.customClass, M(v)]),
          style: ht(M(C)),
          role: "alert",
          onMouseenter: p,
          onMouseleave: m,
          onClick: T.onClick
        }, [
          M(d) ? (R(), St(M(_n), {
            key: 0,
            class: rt([M(i).e("icon"), M(u)])
          }, {
            default: Lt(() => [
              (R(), St(ve(M(d))))
            ]),
            _: 1
          }, 8, ["class"])) : F("v-if", !0),
          x("div", {
            class: rt(M(i).e("group"))
          }, [
            x("h2", {
              class: rt(M(i).e("title")),
              textContent: H(T.title)
            }, null, 10, ["textContent"]),
            qe(x("div", {
              class: rt(M(i).e("content")),
              style: ht(T.title ? void 0 : { margin: 0 })
            }, [
              se(T.$slots, "default", {}, () => [
                T.dangerouslyUseHTMLString ? (R(), D(Ut, { key: 1 }, [
                  F(" Caution here, message could've been compromised, never use user's input as message "),
                  x("p", { innerHTML: T.message }, null, 8, ["innerHTML"])
                ], 2112)) : (R(), D("p", { key: 0 }, H(T.message), 1))
              ])
            ], 6), [
              [kn, T.message]
            ]),
            T.showClose ? (R(), St(M(_n), {
              key: 0,
              class: rt(M(i).e("closeBtn")),
              onClick: wt(z, ["stop"])
            }, {
              default: Lt(() => [
                y(M(r))
              ]),
              _: 1
            }, 8, ["class", "onClick"])) : F("v-if", !0)
          ], 2)
        ], 46, ["id", "onClick"]), [
          [kn, l.value]
        ])
      ]),
      _: 3
    }, 8, ["name", "onBeforeLeave", "onAfterLeave"]));
  }
});
var Dd = /* @__PURE__ */ In(Id, [["__file", "notification.vue"]]);
const zn = {
  "top-left": [],
  "top-right": [],
  "bottom-left": [],
  "bottom-right": []
}, hi = 16;
let Od = 1;
const $e = function(n = {}, t) {
  if (!Te)
    return { close: () => {
    } };
  (Se(n) || Je(n)) && (n = { message: n });
  const e = n.position || "top-right";
  let i = n.offset || 0;
  zn[e].forEach(({ vm: u }) => {
    var d;
    i += (((d = u.el) == null ? void 0 : d.offsetHeight) || 0) + hi;
  }), i += hi;
  const o = `notification_${Od++}`, s = n.onClose, a = {
    ...n,
    offset: i,
    id: o,
    onClose: () => {
      Ed(o, e, s);
    }
  };
  let r = document.body;
  li(n.appendTo) ? r = n.appendTo : Se(n.appendTo) && (r = document.querySelector(n.appendTo)), li(r) || (r = document.body);
  const l = document.createElement("div"), h = y(Dd, a, tn(a.message) ? a.message : Je(a.message) ? () => a.message : null);
  return h.appContext = us(t) ? $e._context : t, h.props.onDestroy = () => {
    bn(null, l);
  }, bn(h, l), zn[e].push({ vm: h }), r.appendChild(l.firstElementChild), {
    close: () => {
      h.component.exposed.visible.value = !1;
    }
  };
};
Ls.forEach((n) => {
  $e[n] = (t = {}, e) => ((Se(t) || Je(t)) && (t = {
    message: t
  }), $e({ ...t, type: n }, e));
});
function Ed(n, t, e) {
  const i = zn[t], o = i.findIndex(({ vm: h }) => {
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
      const { el: u, component: d } = i[h].vm, v = Number.parseInt(u.style[r], 10) - a - hi;
      d.props.offset = v;
    }
}
function $d() {
  for (const n of Object.values(zn))
    n.forEach(({ vm: t }) => {
      t.component.exposed.visible.value = !1;
    });
}
$e.closeAll = $d;
$e._context = null;
const Wd = Cs($e, "$notify"), Wt = {
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
    i === "center" ? Rd({
      message: t,
      type: e,
      duration: o,
      showClose: s,
      grouping: !0,
      customClass: `app-toast app-toast--${e}`
    }) : Wd({
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
}, Bd = ["disabled"], Nd = {
  key: 0,
  class: "custom-button__loading"
}, Hd = /* @__PURE__ */ Tt({
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
    return (e, i) => (R(), D("button", {
      class: rt([
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
      n.loading ? (R(), D("div", Nd, i[1] || (i[1] = [
        x(
          "svg",
          {
            class: "custom-button__spinner",
            viewBox: "0 0 50 50"
          },
          [
            x("circle", {
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
      ]))) : F("v-if", !0),
      se(e.$slots, "default", {}, void 0, !0)
    ], 10, Bd));
  }
}), ne = /* @__PURE__ */ sn(Hd, [["__scopeId", "data-v-9497085f"]]), Fd = {
  key: 1,
  class: "splitter-panel second-panel"
}, jd = /* @__PURE__ */ Tt({
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
    const t = n, e = E(null), i = (A) => typeof A == "string" && A.includes("%"), o = (A) => typeof A == "string" ? parseFloat(A.replace("%", "")) : A, s = E(o(t.defaultSize)), a = O(() => i(t.defaultSize)), r = O(() => a.value ? `${s.value}%` : `${s.value}px`), l = O(() => t.firstCollapsed ? "0px" : t.secondCollapsed ? "100%" : r.value);
    let h = !1, u = 0, d = 0;
    const v = () => e.value?.offsetWidth || 0, k = (A) => {
      const T = v();
      return A / T * 100;
    }, C = (A) => {
      const T = v();
      return A * T / 100;
    }, m = (A) => {
      A.preventDefault(), A.stopPropagation(), !(!e.value || t.firstCollapsed || t.secondCollapsed) && (h = !0, u = A.clientX, d = a.value ? C(s.value) : s.value, document.addEventListener("mousemove", p), document.addEventListener("mouseup", z));
    }, p = (A) => {
      if (A.preventDefault(), A.stopPropagation(), !h || !e.value) return;
      const T = A.clientX - u;
      let j = d + T;
      const X = a.value ? C(o(t.minSize)) : o(t.minSize), G = a.value ? C(o(t.maxSize)) : o(t.maxSize);
      j = Math.max(X, Math.min(G, j)), s.value = a.value ? k(j) : j;
    }, z = () => {
      h = !1, document.removeEventListener("mousemove", p), document.removeEventListener("mouseup", z);
    };
    return ui(() => {
      document.removeEventListener("mousemove", p), document.removeEventListener("mouseup", z);
    }), (A, T) => (R(), D(
      "main",
      {
        ref_key: "splitterRef",
        ref: e,
        class: "splitter-container"
      },
      [
        x(
          "div",
          {
            class: "splitter-panel first-panel",
            style: ht({ width: M(l), minWidth: M(l) })
          },
          [
            se(A.$slots, "first", {}, void 0, !0)
          ],
          4
          /* STYLE */
        ),
        !A.firstCollapsed && !A.secondCollapsed ? (R(), D(
          "div",
          {
            key: 0,
            class: "splitter-divider",
            style: ht({ left: M(l) }),
            role: "separator",
            "aria-orientation": "vertical",
            onMousedown: m
          },
          T[0] || (T[0] = [
            x(
              "div",
              { class: "splitter-divider-line" },
              null,
              -1
              /* HOISTED */
            )
          ]),
          36
          /* STYLE, NEED_HYDRATION */
        )) : F("v-if", !0),
        A.secondCollapsed ? F("v-if", !0) : (R(), D("div", Fd, [
          se(A.$slots, "second", {}, void 0, !0)
        ]))
      ],
      512
      /* NEED_PATCH */
    ));
  }
}), Vd = /* @__PURE__ */ sn(jd, [["__scopeId", "data-v-79af4cc0"]]);
function Ud(n) {
  return Gd(n.anchor, n.focus) <= 0 ? { start: n.anchor, end: n.focus } : { start: n.focus, end: n.anchor };
}
function Ps(n, t) {
  if (!t || n.length === 0)
    return [];
  const { start: e, end: i } = Ud(t);
  if (e.blockIndex < 0 || i.blockIndex >= n.length)
    return [];
  const o = [];
  for (let s = e.blockIndex; s <= i.blockIndex; s += 1) {
    const a = n[s].text.length, r = s === e.blockIndex ? Po(e.offset, a) : 0, l = s === i.blockIndex ? Po(i.offset, a) : a;
    l > r && o.push({ blockIndex: s, start: r, end: l });
  }
  return o;
}
function Yd(n, t) {
  const e = Ps(n, t);
  return e.map((i, o) => {
    const s = n[i.blockIndex], a = s.text.slice(i.start, i.end), r = i.end === s.text.length, l = o < e.length - 1;
    return a + (r && l ? s.separator : "");
  }).join("");
}
function Xd(n, t) {
  let e = 0, i = Number.POSITIVE_INFINITY;
  for (let o = 0; o < n.length; o += 1) {
    const s = Math.abs(n[o] - t);
    s < i && (e = o, i = s);
  }
  return e;
}
function Zd(n, t, e, i = Number.POSITIVE_INFINITY) {
  let o = null;
  for (const s of n) {
    const a = t < s.left ? s.left - t : t > s.right ? t - s.right : 0, r = e < s.top ? s.top - e : e > s.bottom ? e - s.bottom : 0, l = Math.hypot(a, r);
    l <= i && (!o || l < o.distance) && (o = {
      blockIndex: s.blockIndex,
      distance: l
    });
  }
  return o;
}
function Gd(n, t) {
  return n.blockIndex - t.blockIndex || n.offset - t.offset;
}
function Po(n, t) {
  return Number.isFinite(n) ? Math.max(0, Math.min(t, Math.round(n))) : 0;
}
const Kd = `你是高精度图片文字识别引擎。逐字读取图片，保留原语言、标点、数字、换行、列表和代码，不要翻译、总结或解释。
仅返回合法 JSON，结构必须为：
{"text":"完整文字","sections":[{"type":"title|paragraph|list|code|table","text":"原文分块"}]}
sections 必须覆盖完整文字。`, Ao = {
  auto: "自动判断图片文字语言",
  zh: "优先按简体中文识别",
  "zh-tw": "优先按繁体中文识别",
  en: "优先按英文识别",
  ja: "优先按日文识别",
  ko: "优先按韩文识别"
}, qd = /* @__PURE__ */ new Set([
  "title",
  "paragraph",
  "list",
  "code",
  "table"
]), As = (n, t, e) => typeof n == "string" && qd.has(n) ? n : e === 0 && t.length <= 80 && !/[。！？.!?]\s*$/.test(t) ? "title" : /^\s*(?:[-*+•·]|\d+[.)、）])\s+/m.test(t) ? "list" : "paragraph", Jd = (n) => n.split(/\n{2,}/).map((t) => t.trim()).filter(Boolean).map((t, e) => ({
  type: As(void 0, t, e),
  text: t
})), Qd = (n) => {
  const t = n.match(/```(?:json)?\s*([\s\S]*?)```/i)?.[1]?.trim();
  if (t?.startsWith("{") && t.endsWith("}"))
    return t;
  const e = n.indexOf("{"), i = n.lastIndexOf("}");
  return e >= 0 && i > e ? n.slice(e, i + 1) : null;
}, tg = (n) => {
  const t = n.trim();
  if (!t)
    throw new Error("AI_OCR_EMPTY_RESPONSE");
  const e = Qd(t);
  let i = null;
  if (e)
    try {
      i = JSON.parse(e);
    } catch {
      i = null;
    }
  const o = typeof i?.text == "string" ? i.text.trim() : "", a = (Array.isArray(i?.sections) ? i.sections : []).map((h, u) => {
    if (!h || typeof h != "object") return null;
    const d = h, v = typeof d.text == "string" ? d.text.trim() : "";
    return v ? {
      type: As(d.type, v, u),
      text: v
    } : null;
  }).filter((h) => !!h), r = o || a.map((h) => h.text).join(`

`) || t, l = a.length > 0 ? a : Jd(r);
  return {
    text: r,
    sections: l
  };
}, Io = (n) => n && n.split(/[\\/]/).filter(Boolean).pop() || "", eg = async (n, t) => {
  const e = await Ar(), i = await Ir(e);
  if (!i.selectedMmprojPath)
    throw new Error("AI_OCR_VISION_MODEL_UNAVAILABLE");
  const o = await Yo({
    messages: [
      { role: "system", content: Kd },
      {
        role: "user",
        content: [
          {
            type: "text",
            text: `${Ao[t] || Ao.auto}。现在识别这张图片。`
          },
          {
            type: "image_url",
            image_url: { url: n }
          }
        ]
      }
    ],
    temperature: 0,
    enableThinking: !1,
    maxTokens: 4096
  }), s = tg(o.content), a = await Uo().catch(() => null);
  return {
    ...s,
    modelName: Io(a?.modelPath) || Io(i.selectedModelPath) || "Local Vision"
  };
}, ng = ["src", "alt"], ig = { class: "ocr-header" }, og = {
  class: "ocr-title-copy",
  "data-tauri-drag-region": ""
}, sg = {
  class: "ocr-window-title",
  "data-tauri-drag-region": ""
}, ag = { "data-tauri-drag-region": "" }, rg = {
  class: "ocr-source-inline",
  "data-tauri-drag-region": ""
}, lg = {
  class: "ocr-source-name",
  "data-tauri-drag-region": ""
}, cg = { "data-tauri-drag-region": "" }, hg = { class: "ocr-title-actions" }, ug = ["title"], dg = { class: "ocr-window-controls" }, gg = ["title"], fg = ["title"], mg = ["title"], pg = ["title"], yg = { class: "ocr-preview-pane" }, wg = { class: "ocr-pane-header" }, vg = { class: "ocr-pane-heading" }, xg = { class: "ocr-pane-header-actions" }, kg = {
  key: 0,
  class: "ocr-ready-badge"
}, bg = ["title"], Sg = { class: "ocr-preview-canvas" }, Mg = { class: "ocr-preview-stage" }, Cg = ["src", "alt"], _g = {
  key: 0,
  class: "ocr-selection-highlight-layer",
  "aria-hidden": "true"
}, Tg = ["data-selection-index", "textContent"], zg = {
  key: 0,
  class: "ocr-selection-copy"
}, Rg = { class: "ocr-record-pane" }, Lg = { class: "ocr-pane-header result-header" }, Pg = { class: "ocr-pane-heading" }, Ag = { key: 0 }, Ig = { key: 1 }, Dg = { class: "ocr-pane-header-actions" }, Og = ["title"], Eg = {
  key: 0,
  class: "ocr-state"
}, $g = { class: "ocr-ai-orbit" }, Wg = {
  key: 1,
  class: "ocr-state error"
}, Bg = {
  key: 2,
  class: "ocr-state muted"
}, Ng = {
  key: 3,
  class: "ocr-result-scroll"
}, Hg = {
  key: 0,
  class: "ocr-selection-translation"
}, Fg = { class: "ocr-translation-section" }, jg = { class: "ocr-translation-label" }, Vg = { class: "ocr-translation-source" }, Ug = { class: "ocr-translation-section result" }, Yg = { class: "ocr-translation-label" }, Xg = ["textContent"], Zg = { class: "ocr-record-header" }, Gg = ["aria-pressed", "title", "onClick"], Kg = { key: 1 }, qg = { class: "ocr-record-kind" }, Jg = {
  key: 0,
  class: "ocr-record-score"
}, Qg = ["textContent"], tf = {
  key: 0,
  class: "ocr-record-translation"
}, ef = { class: "ocr-translation-label" }, nf = ["textContent"], of = { class: "ocr-action-bar" }, sf = ["onClick"], af = { class: "engine-label" }, rf = ["onClick"], lf = { class: "engine-label" }, cf = { class: "ocr-engine-btn-group relative" }, hf = {
  key: 2,
  class: "zoom-info"
}, Jn = '"Microsoft YaHei", "PingFang SC", "Segoe UI", Arial, sans-serif', uf = /* @__PURE__ */ Tt({
  __name: "index",
  setup(n) {
    const { t } = Oo(), e = E(), i = E(), o = E(null), s = E(""), a = E(""), r = E("pin"), l = E(""), h = E([]), u = E([]), d = E(!1), v = E(""), k = E("pending"), C = E(""), m = E(""), p = E(0), z = E(0), A = E({ width: 0, height: 0 }), T = E({ width: 0, height: 0 }), j = E(null), X = E(null), G = E(!1), V = E(null), Z = E(!1);
    let K = null, q = null;
    const Q = E(!1), nt = E(!1), at = E(), xt = E({}), ot = E("bing"), Y = E(!1), it = E(), mt = E({}), lt = E("auto"), dt = O(() => [
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
    ]), bt = O(() => [
      { value: "auto", label: t("pin.ocrLanguageAuto") },
      { value: "zh", label: t("pin.ocrLanguageZh") },
      { value: "zh-tw", label: t("pin.ocrLanguageZhTw") },
      { value: "en", label: t("pin.ocrLanguageEn") },
      { value: "ja", label: t("pin.ocrLanguageJa") },
      { value: "ko", label: t("pin.ocrLanguageKo") }
    ]), $ = (c) => {
      const g = typeof c == "string" ? c.trim().toLowerCase() : "";
      return g === "auto" || g === "zh" || g === "zh-tw" || g === "en" || g === "ja" || g === "ko" ? g : "auto";
    }, At = O(() => bt.value.find((c) => c.value === lt.value)?.label || t("pin.ocrLanguageAuto")), U = O(() => t("pin.translationResult")), zt = (c, g) => {
      if (!c) {
        g.value = {};
        return;
      }
      const w = c.getBoundingClientRect(), W = 180, B = 8, tt = Math.min(
        Math.max(
          w.left + w.width / 2,
          B + W / 2
        ),
        window.innerWidth - B - W / 2
      );
      g.value = {
        left: `${tt}px`,
        bottom: `${Math.max(8, window.innerHeight - w.top + 8)}px`
      };
    }, gt = () => {
      nt.value && zt(at.value, xt), Y.value && zt(
        it.value,
        mt
      );
    }, Ot = O(() => lt.value), Ht = E(1), ae = E(!1), Ft = E(!1);
    let _ = null, J = null;
    const pt = E(!1), ct = E({ x: 0, y: 0 }), vt = E(!0), Rt = E({ width: 0, height: 0 });
    let Xt = null, b = 0;
    const N = E(""), ut = O(() => ({
      width: "100%",
      height: r.value === "ocr" ? "auto" : "100%",
      flex: r.value === "ocr" ? "1 1 auto" : void 0,
      minHeight: r.value === "ocr" ? "120px" : void 0,
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      overflow: "hidden"
    })), ft = O(() => ({
      width: "100%",
      height: "100%",
      objectFit: "contain"
    })), et = O(() => p.value > 0 && z.value > 0 ? `${p.value} × ${z.value}` : t("pin.screenshotPreview")), Ct = O(() => d.value ? t("pin.recognizing") : v.value ? t("pin.recognizeFailed") : l.value.trim() ? t("pin.recognizeSuccess") : t("pin.noTextRecognized")), Bt = O(() => d.value ? t("pin.aiRecognizing") : k.value === "ai" ? t("pin.aiVision") : k.value === "rapidocr" ? t("pin.rapidOcrFallback") : t("pin.aiVision")), Et = O(() => {
      const c = Bt.value;
      return C.value ? `${c} · ${C.value}` : c;
    }), re = O(
      () => h.value.filter((c) => c.selected)
    ), _t = O(
      () => u.value.flatMap(
        (c) => c.blocks.filter(Ri).map((g, w) => ({
          ...g,
          id: `${c.id}-block-${w}`,
          recordId: c.id,
          separator: Es(g, c.blocks[w + 1])
        }))
      )
    ), Qt = O(
      () => _t.value.length > 0 ? t("pin.dragToSelectText") : d.value ? t("pin.imageSelectionPreparing") : t("pin.imageSelectionUnavailable")
    ), Dn = O(
      () => Ps(
        _t.value,
        X.value
      )
    ), Is = O(
      () => new Set(Dn.value.map((c) => c.blockIndex))
    ), ge = O(
      () => Yd(_t.value, X.value)
    ), Ti = O(
      () => Dn.value.map((c) => {
        const g = _t.value[c.blockIndex], w = En(g), W = w.boundaries[c.start] || 0, B = w.boundaries[c.end] || w.renderedWidth, tt = W / w.renderedWidth, yt = B / w.renderedWidth;
        return {
          id: `${g.id}-${c.start}-${c.end}`,
          left: g.x + g.width * tt,
          top: g.y,
          width: g.width * Math.max(0, yt - tt),
          height: g.height
        };
      })
    ), zi = O(() => re.value.length), Ds = (c) => t(`pin.sectionKinds.${c}`), Os = (c) => (c.translatedText || c.text).trim(), On = (c) => c.map(Os).filter(Boolean).join(`

`), He = () => {
      l.value = On(h.value);
    }, Ri = (c) => p.value > 0 && z.value > 0 && c.width > 0 && c.height > 0, Es = (c, g) => {
      if (!g)
        return `

`;
      const w = c.text.trim().slice(-1), W = g.text.trim().slice(0, 1), B = /[\u3040-\u30ff\u3400-\u4dbf\u4e00-\u9fff\uac00-\ud7af]/;
      return B.test(w) || B.test(W) ? "" : " ";
    }, $s = (c) => {
      if (!Ri(c))
        return {};
      const g = le(c.x / p.value * 100), w = le(c.y / z.value * 100), W = le(c.width / p.value * 100, 1), B = le(c.height / z.value * 100, 1), tt = En(c);
      return {
        left: `${g}%`,
        top: `${w}%`,
        width: `${W}%`,
        height: `${B}%`,
        fontSize: `${tt.fontSize}px`,
        lineHeight: `${tt.lineHeight}px`,
        letterSpacing: `${tt.letterSpacing}px`
      };
    }, Ws = (c) => p.value <= 0 || z.value <= 0 ? {} : {
      left: `${le(c.left / p.value * 100)}%`,
      top: `${le(c.top / z.value * 100)}%`,
      width: `${le(c.width / p.value * 100)}%`,
      height: `${le(c.height / z.value * 100)}%`
    }, ze = /* @__PURE__ */ new Map();
    let Li = null;
    const En = (c) => {
      const g = Ns(), w = c.text.trim(), W = `${c.id}:${w}:${g.toFixed(4)}`, B = ze.get(W);
      if (B)
        return B;
      const tt = Math.max(c.width * g, 1), yt = Math.max(c.height * g, 1);
      let kt = Pi(
        Math.min(
          (c.fontSize || c.height * 0.8) * g,
          yt * 0.86
        ),
        5,
        28
      );
      const $t = Bs();
      $t.font = `${kt}px ${Jn}`;
      let It = Math.max($t.measureText(w).width, 1);
      It > tt && (kt = Math.max(5, kt * (tt / It)), $t.font = `${kt}px ${Jn}`, It = Math.max($t.measureText(w).width, 1));
      const jt = w.length > 0 ? Math.max(0, (tt - It) / w.length) : 0, Un = Array.from({ length: w.length + 1 }, (Fe, Xn) => Xn === 0 ? 0 : ($t.font = `${kt}px ${Jn}`, $t.measureText(w.slice(0, Xn)).width + jt * Xn)), Yn = Math.max(Un[w.length] || It, 1), fe = {
        fontSize: kt,
        lineHeight: yt,
        letterSpacing: jt,
        boundaries: Un,
        renderedWidth: Yn
      };
      return ze.set(W, fe), fe;
    }, Bs = () => {
      Li || (Li = document.createElement("canvas"));
      const c = Li.getContext("2d");
      if (!c)
        throw new Error(t("pin.ocrMeasureFailed"));
      return c;
    }, Ns = () => p.value <= 0 || z.value <= 0 || A.value.width <= 0 || A.value.height <= 0 ? 1 : Math.min(
      A.value.width / p.value,
      A.value.height / z.value
    ), $n = () => {
      const c = i.value;
      if (ze.clear(), !c) {
        A.value = { width: 0, height: 0 };
        return;
      }
      A.value = {
        width: c.clientWidth,
        height: c.clientHeight
      };
    }, le = (c, g = 0) => Number.isFinite(c) ? Math.min(100, Math.max(g, c)) : g, Pi = (c, g, w) => Number.isFinite(c) ? Math.min(w, Math.max(g, c)) : g, Hs = () => {
      const c = /* @__PURE__ */ new Date(), g = (w) => w.toString().padStart(2, "0");
      return `${t("pin.screenshotPrefix")} ${c.getFullYear()}-${g(c.getMonth() + 1)}-${g(c.getDate())} ${g(c.getHours())}.${g(c.getMinutes())}.${g(c.getSeconds())}.png`;
    }, Fs = O(() => {
      const c = Math.min(
        Rt.value.width,
        Rt.value.height
      );
      let g = 1;
      return c < 300 && (g = Math.max(0.4, c / 300)), {
        left: `${ct.value.x}px`,
        top: `${ct.value.y}px`,
        transform: `scale(${g})`,
        transformOrigin: "top left"
      };
    }), js = (c) => {
      s.value = c, p.value = 0, z.value = 0, A.value = { width: 0, height: 0 }, jn(), ze.clear(), T.value = { width: 0, height: 0 }, r.value === "ocr" && (m.value = Hs()), a.value && (URL.revokeObjectURL(a.value), a.value = "");
      try {
        const g = c.split(",")[1] || c, w = c.match(/data:([^;]+);/), W = w ? w[1] : "image/png", B = atob(g), tt = new Uint8Array(B.length);
        for (let kt = 0; kt < B.length; kt++)
          tt[kt] = B.charCodeAt(kt);
        const yt = new Blob([tt], { type: W });
        a.value = URL.createObjectURL(yt);
      } catch (g) {
        I.error("[PIN窗口] 转换 Blob URL 失败", g), a.value = c;
      }
    }, Ai = async () => {
      await ke(), await new Promise((c) => requestAnimationFrame(() => c()));
      try {
        await o.value?.emit("pin-window-ready");
      } catch (c) {
        I.error("[PIN窗口] 发送 ready 事件失败", c);
      }
    }, Ii = (c) => {
      if (!c?.imageData)
        return I.error("[PIN窗口] 收到的事件数据格式不正确", c), !1;
      const g = c.mode === "ocr" ? "ocr" : "pin", w = `${g}:${c.imageData.length}`;
      return w === N.value ? !1 : (N.value = w, r.value = g, js(c.imageData), Gt(), r.value === "ocr" ? (Di(c.text || ""), v.value = "", Wn()) : (b++, d.value = !1, v.value = "", l.value = "", h.value = [], u.value = []), !0);
    }, Wn = async () => {
      if (!s.value) return;
      const c = ++b;
      jn(), j.value = null, ze.clear(), d.value = !0, v.value = "", k.value = "pending", C.value = "";
      const g = Date.now();
      Pt.log("[Pin AI OCR] recognize start", {
        requestId: c,
        imageDataLength: s.value.length,
        imageWidth: p.value,
        imageHeight: z.value,
        language: lt.value,
        backendLanguage: Ot.value
      });
      try {
        const [w, W] = await Promise.allSettled([
          eg(s.value, lt.value),
          S("recognize_text_from_image", {
            imageData: s.value,
            engine: "rapidocr",
            language: Ot.value
          })
        ]);
        if (c !== b) return;
        const B = W.status === "fulfilled" ? Ys(W.value) : [];
        if (u.value = B, w.status === "fulfilled") {
          const tt = Us(w.value);
          if (tt.length === 0 && !w.value.text.trim())
            throw new Error("AI_OCR_EMPTY_RESPONSE");
          h.value = tt.length > 0 ? tt : Bn(w.value.text), He(), k.value = "ai", C.value = w.value.modelName;
        } else if (W.status === "fulfilled") {
          const tt = B.length > 0 ? On(B) : Ks(W.value);
          h.value = B.length > 0 ? B : Bn(tt), He(), k.value = "rapidocr", Pt.log("[Pin AI OCR] vision fallback", {
            requestId: c,
            error: an(w.reason)
          }), Wt.warning(t("pin.aiOcrFallbackNotice"));
        } else
          throw new Error(
            [
              an(w.reason),
              an(W.reason)
            ].join(`
`)
          );
        ze.clear(), Pt.log("[Pin AI OCR] recognize success", {
          requestId: c,
          durationMs: Date.now() - g,
          engine: k.value,
          geometryBlocks: _t.value.length,
          textLength: l.value.length,
          textPreview: l.value.slice(0, 300)
        });
      } catch (w) {
        if (c !== b) return;
        I.error("[PIN窗口] AI OCR 识别失败", w), Pt.log("[Pin AI OCR] recognize failed", {
          requestId: c,
          durationMs: Date.now() - g,
          error: an(w)
        }), v.value = t("pin.recognizeFailed"), l.value = "", h.value = [], u.value = [], Wt.error(t("pin.recognizeFailed"));
      } finally {
        c === b && (d.value = !1);
      }
    }, Di = (c) => {
      const g = c.trim();
      l.value = g, h.value = Bn(g);
    }, Bn = (c) => c.split(/\n{2,}|\n/).map((g, w) => Vs(g, w)).filter((g) => g.text.trim()), Oi = (c, g) => g === 0 && c.length <= 80 && !/[。！？.!?]\s*$/.test(c) ? "title" : /^\s*(?:[-*+•·]|\d+[.)、）])\s+/.test(c) ? "list" : "paragraph", Vs = (c, g) => ({
      id: `plain-${Date.now()}-${g}`,
      kind: Oi(c, g),
      text: c.trim(),
      sourceText: c.trim(),
      translatedText: "",
      bbox: { x: 0, y: 0, width: 0, height: 0 },
      blocks: [],
      confidence: 0,
      selected: !1
    }), Us = (c) => c.sections.map((g, w) => ({
      id: `ai-${Date.now()}-${w}`,
      kind: g.type,
      text: g.text.trim(),
      sourceText: g.text.trim(),
      translatedText: "",
      bbox: { x: 0, y: 0, width: 0, height: 0 },
      blocks: [],
      confidence: 0,
      selected: !1
    })).filter((g) => g.text), Ys = (c) => {
      const g = Zs(c?.blocks);
      return g.length === 0 ? [] : Zo(g).map((W, B) => Xs(W, B)).filter((W) => W.text.trim());
    }, Xs = (c, g) => {
      const w = c.text.trim(), W = c.blocks;
      return {
        id: `ocr-${Date.now()}-${g}`,
        kind: Oi(w, g),
        text: w,
        sourceText: w,
        translatedText: c.translatedText?.trim() || "",
        bbox: { ...c.bbox },
        blocks: W,
        confidence: Gs(W),
        selected: !1
      };
    }, Zs = (c) => Array.isArray(c) ? c.map((g) => {
      if (!g || typeof g != "object")
        return null;
      const w = g, W = typeof w.text == "string" ? w.text.trim() : "";
      if (!W)
        return null;
      const B = {
        text: W,
        x: Number(w.x || 0),
        y: Number(w.y || 0),
        width: Number(w.width || 0),
        height: Number(w.height || 0),
        fontSize: Number(w.fontSize || 0),
        lineHeight: Number(w.lineHeight || 0),
        angle: Number(w.angle || 0),
        isCodeBlock: !!w.isCodeBlock,
        confidence: Number(w.confidence || 0)
      };
      return typeof w.translatedText == "string" && (B.translatedText = w.translatedText), B;
    }).filter((g) => g !== null) : [], Gs = (c) => {
      const g = c.map((w) => Number(w.confidence || 0)).filter((w) => Number.isFinite(w) && w > 0);
      return g.length === 0 ? 0 : g.reduce((w, W) => w + W, 0) / g.length;
    }, Ks = (c) => typeof c == "string" ? c : c?.text ? c.text : c?.full_text ? c.full_text : Array.isArray(c?.blocks) ? c.blocks.map((g) => g?.text).filter(Boolean).join(`
`) : "", an = (c) => c instanceof Error ? `${c.name}: ${c.message}
${c.stack || ""}`.trim() : typeof c == "string" ? c : JSON.stringify(c) || String(c), rn = async () => {
      const c = Qs();
      c && await Ei(c);
    }, qs = async () => {
      const c = ge.value.trim();
      c && await Ei(c);
    }, Ei = async (c) => {
      try {
        await navigator.clipboard.writeText(c), Wt.success(t("pin.copySuccess"));
      } catch (g) {
        I.error("[PIN窗口] 复制识别文本失败", g), Wt.error(t("pin.copyFailed"));
      } finally {
        Gt();
      }
    }, Js = async () => {
      He();
      const c = l.value.trim();
      if (c)
        try {
          await S("save_text_to_file", { text: c }), Wt.success(t("pin.saveSuccess"));
        } catch (g) {
          g !== "SAVE_CANCELLED" && (I.error("[PIN窗口] 保存文本失败", g), Wt.error(t("pin.saveFailed")));
        }
    }, Qs = () => {
      const c = ta();
      if (c)
        return c;
      if (ge.value)
        return ge.value;
      const g = On(
        re.value
      );
      return g || (He(), l.value.trim());
    }, ta = () => {
      const c = window.getSelection(), g = e.value?.querySelector(".ocr-reading-surface");
      if (!c || c.rangeCount === 0 || !g)
        return "";
      for (let w = 0; w < c.rangeCount; w += 1) {
        const B = c.getRangeAt(w).commonAncestorContainer;
        if (g.contains(B))
          return c.toString().trim();
      }
      return "";
    }, ea = (c) => {
      const g = h.value.find((w) => w.id === c);
      g && (g.selected = !g.selected);
    }, na = (c) => {
      const g = c.target;
      !g || !j.value || (j.value.translatedText = g.innerText.trim());
    }, ia = async () => {
      nt.value = !nt.value, Y.value = !1, nt.value && (await ke(), gt());
    }, oa = (c) => {
      ot.value = c, nt.value = !1, S("set_translation_engine", { engine: c }).catch((g) => {
        I.error("[PIN窗口] 保存翻译引擎设置失败", g);
      });
    }, $i = async () => {
      Y.value = !Y.value, nt.value = !1, Y.value && (await ke(), gt());
    }, sa = (c) => {
      lt.value = c, Y.value = !1, S("set_ocr_language", { language: c }).catch((g) => {
        I.error("[PIN窗口] 保存 OCR 语言设置失败", g);
      }), s.value && Wn();
    }, aa = async () => {
      if (Gt(), nt.value = !1, Y.value = !1, !l.value.trim() || Q.value) return;
      const c = ge.value.trim(), g = c ? [] : re.value.length > 0 ? re.value : h.value, w = c || (g.length > 0 ? g.map((B) => B.text).join(`

`) : l.value), W = pe(w);
      if (!Ie(W)) {
        Wt.warning(t("pin.unsupportedTranslateLanguage"));
        return;
      }
      Q.value = !0;
      try {
        if (await ra(), c) {
          const B = await Nn(
            c,
            W
          );
          B && (j.value = {
            sourceText: c,
            translatedText: B.trim()
          }), Wt.success(t("pin.translateSuccess"));
        } else if (g.length > 0) {
          for (const B of g) {
            const tt = await Nn(
              B.text,
              W
            );
            tt && (B.translatedText = tt.trim());
          }
          He(), Wt.success(t("pin.translateSuccess"));
        } else {
          const B = await Nn(
            l.value,
            W
          );
          B && Di(B), Wt.success(t("pin.translateSuccess"));
        }
      } catch (B) {
        I.error("[PIN窗口] 翻译失败", B);
        const tt = B instanceof Error ? B.message : String(B);
        if (tt !== "翻译已取消") {
          const yt = [
            t("pin.offlineModelNotDownloaded"),
            t("pin.offlineModelNotActivated")
          ];
          Wt.error(
            yt.includes(tt) ? tt : t("pin.translateFailed")
          );
        }
      } finally {
        Q.value = !1;
      }
    }, ra = async () => {
      if (ot.value !== "offline")
        return;
      if ((await mi()).isCached)
        await Vo();
      else
        throw new Error(t("pin.offlineModelNotDownloaded"));
      if (!await S("get_offline_model_activated"))
        throw new Error(t("pin.offlineModelNotActivated"));
    }, Nn = async (c, g) => {
      const w = c.trim();
      return w ? ot.value === "offline" ? jo(w) : await S("translate_text", {
        text: w,
        from: "auto",
        to: g === "zh" ? "en" : "zh",
        engine: ot.value
      }) : "";
    }, la = (c) => {
      ln(c);
    }, ca = async () => {
      if (!o.value) return;
      const c = o.value;
      typeof c.minimize == "function" && await c.minimize();
    }, ha = async () => {
      if (!o.value) return;
      const c = o.value;
      (typeof c.isMaximized == "function" ? await c.isMaximized() : !1) && typeof c.unmaximize == "function" ? await c.unmaximize() : typeof c.maximize == "function" && await c.maximize();
    }, Wi = async (c) => {
      const g = c.target;
      if (p.value = g.naturalWidth, z.value = g.naturalHeight, g === i.value && $n(), o.value && T.value.width === 0)
        try {
          const w = await o.value.innerSize(), W = await o.value.scaleFactor(), B = w.toLogical(W);
          T.value = {
            width: B.width,
            height: B.height
          };
        } catch (w) {
          I.error("[PIN窗口] 获取窗口初始尺寸失败", w);
        }
    }, Bi = async (c) => {
      if (c.ctrlKey && (c.preventDefault(), c.stopPropagation(), !Ft.value && o.value)) {
        Ft.value = !0;
        try {
          const w = (await o.value.innerSize()).toLogical(
            await o.value.scaleFactor()
          ), W = c.deltaY > 0 ? 0.95 : 1.05, B = w.width, tt = w.height, yt = Math.round(B * W), kt = Math.round(tt * W), $t = 50, It = 3e3;
          if (yt >= $t && yt <= It && kt >= $t && kt <= It) {
            if (await o.value.setSize(new Ze(yt, kt)), p.value > 0) {
              const jt = Math.round(
                yt / p.value * 100
              );
              Ht.value = jt / 100;
            }
            ae.value = !0, Hn();
          }
        } catch (g) {
          I.error("[PIN窗口] 窗口缩放失败", g);
        } finally {
          setTimeout(() => {
            Ft.value = !1;
          }, 100);
        }
      }
    }, ua = (c) => {
      r.value === "ocr" && c.ctrlKey && Bi(c);
    }, Hn = () => {
      ae.value = !0, _ && clearTimeout(_), _ = setTimeout(() => {
        ae.value = !1;
      }, 1e3);
    }, ln = (c) => {
      c.preventDefault(), c.stopPropagation(), pt.value = !1, setTimeout(() => {
        const g = window.innerWidth, w = window.innerHeight;
        Rt.value = { width: g, height: w };
        const W = Math.min(g, w);
        let B = 1;
        W < 300 && (B = Math.max(0.4, W / 300));
        const tt = r.value === "ocr" ? 176 : 150, yt = r.value === "ocr" && l.value.trim() ? 222 : 180, kt = tt * B, $t = yt * B;
        let It = c.clientX, jt = c.clientY;
        It + kt > g && (It = g - kt - 5), jt + $t > w && (jt = w - $t - 5), It = Math.max(5, It), jt = Math.max(5, jt), ct.value = { x: It, y: jt }, pt.value = !0;
      }, 10);
    }, Gt = () => {
      pt.value = !1, nt.value = !1, Y.value = !1;
    }, Ni = async () => {
      o.value && (vt.value = !vt.value, await o.value.setAlwaysOnTop(vt.value), Gt());
    }, Hi = async (c) => {
      if (o.value && !Ft.value) {
        Ft.value = !0;
        try {
          const w = (await o.value.innerSize()).toLogical(
            await o.value.scaleFactor()
          ), W = Math.round(w.width * c), B = Math.round(w.height * c), tt = 50, yt = 3e3;
          W >= tt && W <= yt && B >= tt && B <= yt && (await o.value.setSize(new Ze(W, B)), p.value > 0 && (Ht.value = W / p.value), Hn());
        } catch (g) {
          I.error("[PIN窗口] 键盘缩放失败", g);
        } finally {
          setTimeout(() => {
            Ft.value = !1;
          }, 100);
        }
      }
    }, Fi = async () => {
      if (o.value && T.value.width > 0 && T.value.height > 0)
        try {
          await o.value.setSize(
            new Ze(
              T.value.width,
              T.value.height
            )
          ), Ht.value = 1, Hn();
        } catch (c) {
          I.error("[PIN窗口] 重置缩放失败", c);
        }
      Gt();
    }, da = async () => {
      try {
        const c = s.value;
        Gt(), o.value && await o.value.hide(), await S("copy_image_to_clipboard", { imageData: c }), Wt.success(t("pin.copySuccess")), o.value && await o.value.close();
      } catch (c) {
        I.error("[PIN窗口] 复制图片失败", c), Wt.error(t("pin.copyFailed")), o.value && await o.value.close();
      }
    }, ga = async () => {
      const c = s.value;
      Gt(), o.value && await o.value.hide();
      try {
        await S("save_pin_image", { imageData: c }), Wt.success(t("pin.saveSuccess")), o.value && await o.value.close();
      } catch (g) {
        g === "SAVE_CANCELLED" ? (I.info("[PIN窗口] 用户取消保存，恢复窗口显示"), o.value && await o.value.show()) : (I.error("[PIN窗口] 保存图片失败", g), Wt.error(t("pin.saveFailed")), o.value && await o.value.close());
      }
    }, Fn = async () => {
      o.value && await o.value.close();
    }, ji = (c) => {
      c.preventDefault();
    }, Vi = async (c) => {
      if (c.button === 0 && o.value) {
        const g = c.target;
        if (g.hasAttribute("data-tauri-drag-region") || g.closest("[data-tauri-drag-region]")) {
          if (g.closest("button") || g.closest(".ocr-view-original"))
            return;
          try {
            await o.value.startDragging();
          } catch (w) {
            I.error("[PIN窗口] 拖拽窗口失败", w);
          }
        }
      }
    }, Ui = (c) => {
      const g = c.target;
      !g.closest(".context-menu") && !g.closest(".ocr-engine-btn-group") && !g.closest(".translate-btn-group") && !g.closest(".ocr-floating-menu") && Gt();
    }, fa = (c) => {
      if (c.button !== 0)
        return;
      const g = c.currentTarget, w = Vn(
        g,
        c.clientX,
        c.clientY,
        !1
      );
      if (window.getSelection()?.removeAllRanges(), !w) {
        jn();
        return;
      }
      c.preventDefault(), g.setPointerCapture(c.pointerId), K = c.pointerId, q = { x: c.clientX, y: c.clientY }, G.value = !0, V.value = w.blockIndex, X.value = {
        anchor: w,
        focus: w
      };
    }, Yi = (c) => {
      const g = c.currentTarget, w = Vn(
        g,
        c.clientX,
        c.clientY,
        G.value
      );
      V.value = w?.blockIndex ?? null, !(!G.value || c.pointerId !== K) && (!w || !X.value || (c.preventDefault(), X.value = {
        anchor: X.value.anchor,
        focus: w
      }));
    }, ma = (c) => {
      if (c.pointerId !== K)
        return;
      Yi(c);
      const g = c.currentTarget;
      g.hasPointerCapture(c.pointerId) && g.releasePointerCapture(c.pointerId);
      const w = q, W = Vn(
        g,
        c.clientX,
        c.clientY,
        !0
      );
      if (w && W && Math.hypot(c.clientX - w.x, c.clientY - w.y) < 4) {
        const B = _t.value[W.blockIndex];
        B && (X.value = {
          anchor: { blockIndex: W.blockIndex, offset: 0 },
          focus: { blockIndex: W.blockIndex, offset: B.text.length }
        });
      }
      G.value = !1, K = null, q = null;
    }, pa = (c) => {
      c.pointerId === K && (G.value = !1, K = null, q = null);
    }, ya = () => {
      G.value || (V.value = null);
    }, jn = () => {
      X.value = null, G.value = !1, V.value = null, K = null, q = null;
    }, wa = () => {
      const c = _t.value.length - 1;
      c < 0 || (window.getSelection()?.removeAllRanges(), X.value = {
        anchor: { blockIndex: 0, offset: 0 },
        focus: {
          blockIndex: c,
          offset: _t.value[c].text.length
        }
      });
    }, Vn = (c, g, w, W) => {
      const B = Array.from(
        c.querySelectorAll(
          ".ocr-overlay-block[data-selection-index]"
        )
      ), tt = B.map((fe) => {
        const Fe = fe.getBoundingClientRect();
        return {
          blockIndex: Number(fe.dataset.selectionIndex),
          left: Fe.left,
          top: Fe.top,
          right: Fe.right,
          bottom: Fe.bottom
        };
      }), yt = Zd(
        tt,
        g,
        w,
        W ? Number.POSITIVE_INFINITY : 14
      );
      if (!yt)
        return null;
      const kt = B.find(
        (fe) => Number(fe.dataset.selectionIndex) === yt.blockIndex
      ), $t = _t.value[yt.blockIndex];
      if (!kt || !$t)
        return null;
      const It = kt.getBoundingClientRect(), jt = En($t), Yn = Pi(
        (g - It.left) / Math.max(It.width, 1),
        0,
        1
      ) * jt.renderedWidth;
      return {
        blockIndex: yt.blockIndex,
        offset: Xd(jt.boundaries, Yn)
      };
    }, Xi = (c) => {
      if (c.altKey && c.code === "Space") {
        c.preventDefault(), c.stopPropagation();
        return;
      }
      if (c.key === "Escape")
        pt.value ? Gt() : Fn();
      else if (c.ctrlKey || c.metaKey) {
        const w = !!c.target?.closest(
          'input, textarea, [contenteditable="true"], [contenteditable="plaintext-only"]'
        );
        c.key.toLowerCase() === "c" && r.value === "ocr" && ge.value && !w ? (c.preventDefault(), rn()) : c.key.toLowerCase() === "a" && r.value === "ocr" && _t.value.length > 0 && !w ? (c.preventDefault(), wa()) : c.key === "0" ? (c.preventDefault(), Fi()) : c.key === "=" || c.key === "+" ? (c.preventDefault(), Hi(1.05)) : c.key === "-" && (c.preventDefault(), Hi(0.95));
      }
    }, va = async () => {
      if (o.value)
        try {
          const c = await S(
            "get_pin_window_data",
            { label: o.value.label }
          );
          c && Ii(c) && await Ai();
        } catch (c) {
          I.error("[PIN窗口] 主动获取窗口数据失败", c);
        }
    };
    return We(
      i,
      (c) => {
        if (J?.disconnect(), J = null, !c) {
          A.value = { width: 0, height: 0 };
          return;
        }
        $n(), J = new ResizeObserver($n), J.observe(c);
      },
      { flush: "post" }
    ), nn(async () => {
      if (e.value) {
        try {
          const [c, g] = await Promise.all([
            S("get_translation_engine"),
            S("get_ocr_language")
          ]);
          (c === "google" || c === "bing" || c === "offline" || c === "local-ai") && (ot.value = c), lt.value = $(g);
        } catch (c) {
          I.error("[PIN窗口] 读取默认 OCR/翻译设置失败", c);
        }
        try {
          o.value = on.getCurrent();
          try {
            Xt = await o.value.listen(
              "pin-window-data",
              (c) => {
                Ii(c.payload) && Ai();
              }
            ), await va();
          } catch (c) {
            I.error("[PIN窗口] 设置事件监听失败", c);
          }
        } catch (c) {
          if (I.error("[PIN窗口] 初始化错误", c), o.value)
            try {
              await o.value.show();
            } catch (g) {
              I.error("[PIN窗口] 显示窗口失败", g);
            }
        }
        document.addEventListener("click", Ui), document.addEventListener("keydown", Xi, !0), document.addEventListener("contextmenu", ji, !0), window.addEventListener("resize", gt), window.addEventListener("scroll", gt, !0), window.addEventListener("blur", Gt), document.body && (document.body.oncontextmenu = (c) => (c.preventDefault(), !1));
      }
    }), ui(() => {
      a.value && URL.revokeObjectURL(a.value), Xt && Xt(), document.removeEventListener("click", Ui), document.removeEventListener("keydown", Xi, !0), document.removeEventListener("contextmenu", ji, !0), window.removeEventListener("resize", gt), window.removeEventListener("scroll", gt, !0), window.removeEventListener("blur", Gt), J?.disconnect(), J = null, document.body && (document.body.oncontextmenu = null), _ && clearTimeout(_);
    }), (c, g) => (R(), D(
      "div",
      {
        class: rt(["pin-container", { "ocr-mode": r.value === "ocr" }]),
        ref_key: "containerRef",
        ref: e,
        onContextmenu: wt(ln, ["prevent"]),
        onWheelCapture: ua
      },
      [
        F(" 图片容器 "),
        a.value && r.value === "pin" ? (R(), D(
          "div",
          {
            key: 0,
            class: "image-wrapper",
            style: ht(ut.value),
            onWheelCapture: Bi,
            onContextmenu: wt(ln, ["prevent"]),
            "data-tauri-drag-region": "",
            onMousedown: Vi
          },
          [
            x("img", {
              src: a.value,
              alt: c.$t("screenshot.pin"),
              style: ht(ft.value),
              onLoad: Wi,
              draggable: "false",
              "data-tauri-drag-region": ""
            }, null, 44, ng)
          ],
          36
          /* STYLE, NEED_HYDRATION */
        )) : F("v-if", !0),
        r.value === "ocr" ? (R(), D(
          "section",
          {
            key: 1,
            class: "ocr-shell",
            onContextmenu: wt(ln, ["prevent"])
          },
          [
            x("header", ig, [
              x(
                "div",
                {
                  class: "ocr-titlebar",
                  "data-tauri-drag-region": "",
                  onMousedown: Vi
                },
                [
                  x("div", og, [
                    x("div", sg, [
                      y(M(ri), {
                        theme: "outline",
                        size: "18"
                      }),
                      x(
                        "span",
                        ag,
                        H(c.$t("pin.ocrResult")),
                        1
                        /* TEXT */
                      )
                    ]),
                    x("div", rg, [
                      x(
                        "span",
                        lg,
                        H(m.value),
                        1
                        /* TEXT */
                      ),
                      g[3] || (g[3] = x(
                        "span",
                        {
                          class: "ocr-meta-dot",
                          "data-tauri-drag-region": ""
                        },
                        "·",
                        -1
                        /* HOISTED */
                      )),
                      x(
                        "span",
                        cg,
                        H(et.value),
                        1
                        /* TEXT */
                      )
                    ])
                  ]),
                  x("div", hg, [
                    x("div", {
                      class: rt(["ocr-engine-status", `is-${k.value}`]),
                      title: Et.value
                    }, [
                      d.value ? (R(), St(M(co), {
                        key: 0,
                        class: "ocr-loading-icon",
                        size: "14",
                        theme: "outline"
                      })) : (R(), St(M(Kn), {
                        key: 1,
                        size: "14",
                        theme: "outline"
                      })),
                      x(
                        "span",
                        null,
                        H(Bt.value),
                        1
                        /* TEXT */
                      )
                    ], 10, ug),
                    x("div", dg, [
                      x("button", {
                        class: "ocr-window-btn",
                        title: vt.value ? c.$t("pin.togglePin") : c.$t("pin.pinWindow"),
                        onClick: wt(Ni, ["stop"])
                      }, [
                        (R(), St(ve(vt.value ? M(ai) : M(ho)), {
                          size: "18",
                          theme: "outline"
                        }))
                      ], 8, gg),
                      g[4] || (g[4] = x(
                        "span",
                        { class: "ocr-window-divider" },
                        null,
                        -1
                        /* HOISTED */
                      )),
                      x("button", {
                        class: "ocr-window-btn",
                        title: c.$t("pin.minimize"),
                        onClick: wt(ca, ["stop"])
                      }, [
                        y(M(es), {
                          size: "18",
                          theme: "outline"
                        })
                      ], 8, fg),
                      x("button", {
                        class: "ocr-window-btn",
                        title: c.$t("pin.maximize"),
                        onClick: wt(ha, ["stop"])
                      }, [
                        y(M(Zl), {
                          size: "14",
                          theme: "outline",
                          strokeWidth: 5
                        })
                      ], 8, mg),
                      x("button", {
                        class: "ocr-window-btn",
                        title: c.$t("pin.close"),
                        onClick: wt(Fn, ["stop"])
                      }, [
                        y(M(si), {
                          size: "14",
                          theme: "outline",
                          strokeWidth: 6
                        })
                      ], 8, pg)
                    ])
                  ])
                ],
                32
                /* NEED_HYDRATION */
              )
            ]),
            x(
              "main",
              {
                class: "ocr-reading-surface",
                onMousedown: g[2] || (g[2] = wt(() => {
                }, ["stop"]))
              },
              [
                y(Vd, {
                  class: "ocr-result-layout",
                  "default-size": "44%",
                  "min-size": "26%",
                  "max-size": "72%",
                  "second-collapsed": Z.value
                }, {
                  first: Lt(() => [
                    x("section", yg, [
                      x("header", wg, [
                        x("div", vg, [
                          x(
                            "strong",
                            null,
                            H(c.$t("pin.sourceImage")),
                            1
                            /* TEXT */
                          ),
                          x(
                            "span",
                            null,
                            H(Qt.value),
                            1
                            /* TEXT */
                          )
                        ]),
                        x("div", xg, [
                          _t.value.length > 0 ? (R(), D(
                            "span",
                            kg,
                            H(c.$t("pin.imageTextSelectable")),
                            1
                            /* TEXT */
                          )) : F("v-if", !0),
                          Z.value ? (R(), D("button", {
                            key: 1,
                            type: "button",
                            class: "ocr-panel-toggle",
                            title: c.$t("pin.showAiPanel"),
                            onClick: g[0] || (g[0] = wt((w) => Z.value = !1, ["stop"]))
                          }, [
                            y(M(Wl), {
                              size: "14",
                              theme: "outline"
                            }),
                            x(
                              "span",
                              null,
                              H(c.$t("pin.showAiPanel")),
                              1
                              /* TEXT */
                            )
                          ], 8, bg)) : F("v-if", !0)
                        ])
                      ]),
                      x("div", Sg, [
                        x("div", Mg, [
                          x("img", {
                            ref_key: "ocrPreviewImageRef",
                            ref: i,
                            src: a.value || s.value,
                            alt: c.$t("pin.ocrSourceAlt"),
                            onLoad: Wi
                          }, null, 40, Cg),
                          Ti.value.length > 0 ? (R(), D("div", _g, [
                            (R(!0), D(
                              Ut,
                              null,
                              qt(Ti.value, (w) => (R(), D(
                                "span",
                                {
                                  key: w.id,
                                  class: "ocr-selection-highlight",
                                  style: ht(Ws(w))
                                },
                                null,
                                4
                                /* STYLE */
                              ))),
                              128
                              /* KEYED_FRAGMENT */
                            ))
                          ])) : F("v-if", !0),
                          _t.value.length > 0 ? (R(), D(
                            "div",
                            {
                              key: 1,
                              class: "ocr-text-overlay",
                              onPointerdown: fa,
                              onPointermove: Yi,
                              onPointerup: ma,
                              onPointercancel: pa,
                              onPointerleave: ya
                            },
                            [
                              (R(!0), D(
                                Ut,
                                null,
                                qt(_t.value, (w, W) => (R(), D("span", {
                                  key: w.id,
                                  class: rt(["ocr-overlay-block", {
                                    hovered: V.value === W,
                                    selected: Is.value.has(W)
                                  }]),
                                  "data-selection-index": W,
                                  style: ht($s(w)),
                                  textContent: H(w.text.trim())
                                }, null, 14, Tg))),
                                128
                                /* KEYED_FRAGMENT */
                              ))
                            ],
                            32
                            /* NEED_HYDRATION */
                          )) : F("v-if", !0)
                        ])
                      ]),
                      ge.value ? (R(), D("div", zg, [
                        x("div", null, [
                          x(
                            "span",
                            null,
                            H(c.$t("pin.selectedText")),
                            1
                            /* TEXT */
                          ),
                          x(
                            "strong",
                            null,
                            H(c.$t("pin.selectedCharacters", {
                              count: ge.value.length
                            })),
                            1
                            /* TEXT */
                          )
                        ]),
                        x("button", {
                          type: "button",
                          onClick: wt(qs, ["stop"])
                        }, [
                          y(M(Ue), {
                            size: "14",
                            theme: "outline"
                          }),
                          Do(
                            " " + H(c.$t("pin.copySelection")),
                            1
                            /* TEXT */
                          )
                        ])
                      ])) : F("v-if", !0)
                    ])
                  ]),
                  second: Lt(() => [
                    x("section", Rg, [
                      x("header", Lg, [
                        x("div", Pg, [
                          x(
                            "strong",
                            null,
                            H(c.$t("pin.aiRecognizedText")),
                            1
                            /* TEXT */
                          ),
                          l.value.trim() ? (R(), D(
                            "span",
                            Ag,
                            H(c.$t("pin.resultStats", {
                              sections: h.value.length,
                              characters: l.value.length
                            })),
                            1
                            /* TEXT */
                          )) : (R(), D(
                            "span",
                            Ig,
                            H(Ct.value),
                            1
                            /* TEXT */
                          ))
                        ]),
                        x("div", Dg, [
                          y(ne, {
                            class: "ocr-inline-copy",
                            type: "text",
                            title: c.$t("pin.copyText"),
                            disabled: !l.value.trim(),
                            onClick: wt(rn, ["stop"])
                          }, {
                            default: Lt(() => [
                              y(M(Ue), {
                                size: "15",
                                theme: "outline"
                              }),
                              x(
                                "span",
                                null,
                                H(c.$t("pin.copyAll")),
                                1
                                /* TEXT */
                              )
                            ]),
                            _: 1
                            /* STABLE */
                          }, 8, ["title", "disabled"]),
                          x("button", {
                            type: "button",
                            class: "ocr-panel-toggle icon-only",
                            title: c.$t("pin.hideAiPanel"),
                            onClick: g[1] || (g[1] = wt((w) => Z.value = !0, ["stop"]))
                          }, [
                            y(M(Yl), {
                              size: "14",
                              theme: "outline"
                            })
                          ], 8, Og)
                        ])
                      ]),
                      d.value && !l.value.trim() ? (R(), D("div", Eg, [
                        x("div", $g, [
                          y(M(Kn), {
                            size: "22",
                            theme: "outline"
                          })
                        ]),
                        x(
                          "strong",
                          null,
                          H(c.$t("pin.aiReadingImage")),
                          1
                          /* TEXT */
                        ),
                        x(
                          "span",
                          null,
                          H(c.$t("pin.aiReadingHint")),
                          1
                          /* TEXT */
                        )
                      ])) : v.value && !l.value.trim() ? (R(), D("div", Wg, [
                        x(
                          "strong",
                          null,
                          H(v.value),
                          1
                          /* TEXT */
                        ),
                        x(
                          "span",
                          null,
                          H(c.$t("pin.aiOcrRetryHint")),
                          1
                          /* TEXT */
                        )
                      ])) : l.value.trim() ? (R(), D("div", Ng, [
                        j.value ? (R(), D("section", Hg, [
                          x("div", Fg, [
                            x(
                              "span",
                              jg,
                              H(c.$t("pin.selectedText")),
                              1
                              /* TEXT */
                            ),
                            x(
                              "div",
                              Vg,
                              H(j.value.sourceText),
                              1
                              /* TEXT */
                            )
                          ]),
                          x("div", Ug, [
                            x(
                              "span",
                              Yg,
                              H(U.value),
                              1
                              /* TEXT */
                            ),
                            x("div", {
                              class: "ocr-selection-translation-editor",
                              contenteditable: "plaintext-only",
                              spellcheck: "false",
                              textContent: H(j.value.translatedText),
                              onBlur: na
                            }, null, 40, Xg)
                          ])
                        ])) : F("v-if", !0),
                        (R(!0), D(
                          Ut,
                          null,
                          qt(h.value, (w, W) => (R(), D(
                            "article",
                            {
                              key: w.id,
                              class: rt(["ocr-record-item", [`is-${w.kind}`, { selected: w.selected }]])
                            },
                            [
                              x("header", Zg, [
                                x("button", {
                                  type: "button",
                                  class: rt(["ocr-record-select", { selected: w.selected }]),
                                  "aria-pressed": w.selected,
                                  title: c.$t("pin.selectSection"),
                                  onClick: wt((B) => ea(w.id), ["stop"])
                                }, [
                                  w.selected ? (R(), St(M(wn), {
                                    key: 0,
                                    size: "11",
                                    theme: "outline"
                                  })) : (R(), D(
                                    "span",
                                    Kg,
                                    H(W + 1),
                                    1
                                    /* TEXT */
                                  ))
                                ], 10, Gg),
                                x(
                                  "span",
                                  qg,
                                  H(Ds(w.kind)),
                                  1
                                  /* TEXT */
                                ),
                                w.confidence > 0 ? (R(), D(
                                  "span",
                                  Jg,
                                  H(Math.round(w.confidence)) + "% ",
                                  1
                                  /* TEXT */
                                )) : F("v-if", !0)
                              ]),
                              x("div", {
                                class: "ocr-record-text",
                                textContent: H(w.text)
                              }, null, 8, Qg),
                              w.translatedText ? (R(), D("div", tf, [
                                x(
                                  "span",
                                  ef,
                                  H(U.value),
                                  1
                                  /* TEXT */
                                ),
                                x("div", {
                                  class: "ocr-record-text translated",
                                  textContent: H(w.translatedText)
                                }, null, 8, nf)
                              ])) : F("v-if", !0)
                            ],
                            2
                            /* CLASS */
                          ))),
                          128
                          /* KEYED_FRAGMENT */
                        ))
                      ])) : (R(), D(
                        "div",
                        Bg,
                        H(c.$t("pin.noTextRecognized")),
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
            x("footer", of, [
              y(ne, {
                class: "ocr-action-btn primary",
                type: "text",
                title: c.$t("pin.copyText"),
                disabled: !l.value.trim(),
                onClick: wt(rn, ["stop"])
              }, {
                default: Lt(() => [
                  y(M(Ue), {
                    size: "18",
                    theme: "outline",
                    strokeWidth: 2.5
                  }),
                  x(
                    "span",
                    null,
                    H(zi.value > 0 ? `${c.$t("pin.copyText")} (${zi.value})` : c.$t("pin.copyText")),
                    1
                    /* TEXT */
                  )
                ]),
                _: 1
                /* STABLE */
              }, 8, ["title", "disabled"]),
              x(
                "div",
                {
                  ref_key: "translateMenuAnchorRef",
                  ref: at,
                  class: "translate-btn-group relative"
                },
                [
                  y(ne, {
                    class: "ocr-action-btn translate-main",
                    type: "text",
                    title: c.$t("pin.translate"),
                    disabled: !l.value.trim() || Q.value,
                    onClick: wt(aa, ["stop"])
                  }, {
                    default: Lt(() => [
                      Q.value ? (R(), St(M(co), {
                        key: 1,
                        class: "ocr-loading-icon",
                        size: "18",
                        theme: "outline",
                        strokeWidth: 2.5
                      })) : (R(), St(M(ns), {
                        key: 0,
                        size: "18",
                        theme: "outline",
                        strokeWidth: 2.5
                      })),
                      x(
                        "span",
                        null,
                        H(c.$t("pin.translate")),
                        1
                        /* TEXT */
                      )
                    ]),
                    _: 1
                    /* STABLE */
                  }, 8, ["title", "disabled"]),
                  y(ne, {
                    class: "ocr-action-btn translate-arrow",
                    type: "text",
                    disabled: !l.value.trim() || Q.value,
                    onClick: wt(ia, ["stop"])
                  }, {
                    default: Lt(() => [
                      y(M(lo), {
                        size: "14",
                        theme: "outline",
                        strokeWidth: 2.7
                      })
                    ]),
                    _: 1
                    /* STABLE */
                  }, 8, ["disabled"]),
                  F(" 翻译引擎菜单 "),
                  nt.value ? (R(), D(
                    "div",
                    {
                      key: 0,
                      class: "translate-menu ocr-floating-menu",
                      style: ht(xt.value)
                    },
                    [
                      (R(!0), D(
                        Ut,
                        null,
                        qt(dt.value, (w) => (R(), D("div", {
                          key: w.value,
                          class: rt(["menu-item", { active: ot.value === w.value }]),
                          onClick: (W) => oa(w.value)
                        }, [
                          x(
                            "span",
                            af,
                            H(w.label),
                            1
                            /* TEXT */
                          ),
                          ot.value === w.value ? (R(), St(ve(M(wn)), {
                            key: 0,
                            class: "menu-item-icon",
                            size: "16"
                          })) : F("v-if", !0)
                        ], 10, sf))),
                        128
                        /* KEYED_FRAGMENT */
                      ))
                    ],
                    4
                    /* STYLE */
                  )) : F("v-if", !0)
                ],
                512
                /* NEED_PATCH */
              ),
              x(
                "div",
                {
                  ref_key: "ocrLanguageMenuAnchorRef",
                  ref: it,
                  class: "ocr-engine-btn-group relative"
                },
                [
                  y(ne, {
                    class: "ocr-action-btn ocr-engine-main",
                    type: "text",
                    title: c.$t("pin.ocrLanguage"),
                    disabled: d.value,
                    onClick: wt($i, ["stop"])
                  }, {
                    default: Lt(() => [
                      y(M(ri), {
                        size: "18",
                        theme: "outline",
                        strokeWidth: 2.5
                      }),
                      x(
                        "span",
                        null,
                        H(At.value),
                        1
                        /* TEXT */
                      )
                    ]),
                    _: 1
                    /* STABLE */
                  }, 8, ["title", "disabled"]),
                  y(ne, {
                    class: "ocr-action-btn ocr-engine-arrow",
                    type: "text",
                    disabled: d.value,
                    onClick: wt($i, ["stop"])
                  }, {
                    default: Lt(() => [
                      y(M(lo), {
                        size: "14",
                        theme: "outline",
                        strokeWidth: 3
                      })
                    ]),
                    _: 1
                    /* STABLE */
                  }, 8, ["disabled"]),
                  Y.value ? (R(), D(
                    "div",
                    {
                      key: 0,
                      class: "ocr-engine-menu ocr-floating-menu",
                      style: ht(mt.value)
                    },
                    [
                      (R(!0), D(
                        Ut,
                        null,
                        qt(bt.value, (w) => (R(), D("div", {
                          key: w.value,
                          class: rt(["menu-item", { active: lt.value === w.value }]),
                          onClick: (W) => sa(w.value)
                        }, [
                          x(
                            "span",
                            lf,
                            H(w.label),
                            1
                            /* TEXT */
                          ),
                          lt.value === w.value ? (R(), St(ve(M(wn)), {
                            key: 0,
                            class: "menu-item-icon",
                            size: "16"
                          })) : F("v-if", !0)
                        ], 10, rf))),
                        128
                        /* KEYED_FRAGMENT */
                      ))
                    ],
                    4
                    /* STYLE */
                  )) : F("v-if", !0)
                ],
                512
                /* NEED_PATCH */
              ),
              x("div", cf, [
                y(ne, {
                  class: "ocr-action-btn ocr-engine-main",
                  type: "text",
                  title: c.$t("pin.recognizeAgain"),
                  disabled: d.value || !s.value,
                  onClick: wt(Wn, ["stop"])
                }, {
                  default: Lt(() => [
                    y(M(Kn), {
                      size: "17",
                      theme: "outline",
                      strokeWidth: 2.5
                    }),
                    x(
                      "span",
                      null,
                      H(c.$t("pin.aiRecognizeAgain")),
                      1
                      /* TEXT */
                    )
                  ]),
                  _: 1
                  /* STABLE */
                }, 8, ["title", "disabled"])
              ]),
              y(ne, {
                class: "ocr-action-btn",
                type: "text",
                title: c.$t("pin.saveAsText"),
                disabled: !l.value.trim(),
                onClick: wt(Js, ["stop"])
              }, {
                default: Lt(() => [
                  y(M(go), {
                    size: "18",
                    theme: "outline",
                    strokeWidth: 2.5
                  }),
                  x(
                    "span",
                    null,
                    H(c.$t("pin.saveAsText")),
                    1
                    /* TEXT */
                  )
                ]),
                _: 1
                /* STABLE */
              }, 8, ["title", "disabled"]),
              g[5] || (g[5] = x(
                "span",
                { class: "ocr-action-divider" },
                null,
                -1
                /* HOISTED */
              )),
              y(ne, {
                class: "ocr-action-btn more",
                type: "text",
                title: c.$t("pin.more"),
                onClick: wt(la, ["stop"])
              }, {
                default: Lt(() => [
                  y(M(Nl), {
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
        )) : F("v-if", !0),
        ae.value ? (R(), D(
          "div",
          hf,
          H(Math.round(Ht.value * 100)) + "% ",
          1
          /* TEXT */
        )) : F("v-if", !0),
        F(" 右键菜单 "),
        pt.value ? (R(), D(
          "div",
          {
            key: 3,
            class: "context-menu",
            style: ht(Fs.value)
          },
          [
            x("div", {
              class: "menu-item",
              onClick: Ni
            }, [
              (R(), St(ve(vt.value ? M(ho) : M(ai)), {
                class: "menu-item-icon",
                size: "18",
                strokeWidth: 3
              })),
              x(
                "span",
                null,
                H(vt.value ? c.$t("pin.togglePin") : c.$t("pin.pinWindow")),
                1
                /* TEXT */
              )
            ]),
            x("div", {
              class: "menu-item",
              onClick: Fi
            }, [
              y(M(Vl), {
                class: "menu-item-icon",
                size: "18",
                theme: "outline",
                strokeWidth: 3
              }),
              x(
                "span",
                null,
                H(c.$t("pin.resetZoom")),
                1
                /* TEXT */
              )
            ]),
            x("div", {
              class: "menu-item",
              onClick: da
            }, [
              y(M(Ue), {
                class: "menu-item-icon",
                size: "18",
                theme: "outline",
                strokeWidth: 3
              }),
              x(
                "span",
                null,
                H(c.$t("pin.copyImage")),
                1
                /* TEXT */
              )
            ]),
            x("div", {
              class: "menu-item",
              onClick: ga
            }, [
              y(M(go), {
                class: "menu-item-icon",
                size: "18",
                theme: "outline",
                strokeWidth: 3
              }),
              x(
                "span",
                null,
                H(c.$t("pin.saveImage")),
                1
                /* TEXT */
              )
            ]),
            r.value === "ocr" && l.value.trim() ? (R(), D("div", {
              key: 0,
              class: "menu-item",
              onClick: rn
            }, [
              y(M(Ue), {
                class: "menu-item-icon",
                size: "18",
                theme: "outline",
                strokeWidth: 3
              }),
              x(
                "span",
                null,
                H(c.$t("pin.copyText")),
                1
                /* TEXT */
              )
            ])) : F("v-if", !0),
            g[6] || (g[6] = x(
              "div",
              { class: "menu-divider" },
              null,
              -1
              /* HOISTED */
            )),
            x("div", {
              class: "menu-item danger",
              onClick: Fn
            }, [
              y(M(si), {
                class: "menu-item-icon",
                size: "18",
                theme: "outline",
                strokeWidth: 3
              }),
              x(
                "span",
                null,
                H(c.$t("pin.closePin")),
                1
                /* TEXT */
              )
            ])
          ],
          4
          /* STYLE */
        )) : F("v-if", !0)
      ],
      34
      /* CLASS, NEED_HYDRATION */
    ));
  }
}), df = /* @__PURE__ */ sn(uf, [["__scopeId", "data-v-b1deedb5"]]), gf = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: df
}, Symbol.toStringTag, { value: "Module" }));
async function ff(n) {
  return n.toDataURL("image/png");
}
function mf(n) {
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
async function pf(n) {
  const t = Date.now(), e = await ff(n);
  Pt.log("[RapidOCR] recognizeFromCanvas start", {
    width: n.width,
    height: n.height
  });
  try {
    const i = await S("recognize_text_from_image", {
      imageData: e,
      engine: "rapidocr",
      language: "auto"
    }), o = mf(i.blocks), s = typeof i.full_text == "string" && i.full_text || typeof i.text == "string" && i.text || o.map((r) => r.text).join(`
`), a = {
      blocks: o,
      full_text: s,
      text: s,
      language: typeof i.language == "string" && i.language || Xo(s),
      confidence: Number(i.confidence || 0),
      engine: typeof i.engine == "string" ? i.engine : "rapidocr"
    };
    return Pt.log("[RapidOCR] recognizeFromCanvas success", {
      durationMs: Date.now() - t,
      confidence: a.confidence,
      blocks: a.blocks.length,
      textLength: a.full_text.trim().length,
      textPreview: a.full_text.trim().slice(0, 300)
    }), a;
  } catch (i) {
    throw I.error("[OCR] RapidOCR recognizeFromCanvas failed", i), Pt.log("[RapidOCR] recognizeFromCanvas failed", {
      durationMs: Date.now() - t,
      error: i instanceof Error ? `${i.name}: ${i.message}` : String(i)
    }), i;
  }
}
async function yf() {
  return Promise.resolve();
}
async function wf() {
  return Promise.resolve();
}
const vf = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  recognizeFromCanvas: pf,
  terminateOcr: wf,
  warmupOcr: yf
}, Symbol.toStringTag, { value: "Module" }));
export {
  Sf as activate
};
