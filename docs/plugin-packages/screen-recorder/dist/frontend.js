import { inject as ee, createVNode as T, getCurrentInstance as he, ref as x, computed as m, unref as r, readonly as oo, getCurrentScope as so, onScopeDispose as io, onMounted as Ye, nextTick as Oe, watch as fe, isRef as ao, warn as ro, provide as lo, defineComponent as $, createElementBlock as N, openBlock as S, mergeProps as uo, renderSlot as ge, createElementVNode as d, normalizeClass as z, Transition as gt, withCtx as te, withDirectives as ne, normalizeStyle as Ne, createTextVNode as sn, toDisplayString as L, vShow as He, shallowReactive as co, createBlock as Z, createCommentVNode as J, resolveDynamicComponent as an, Fragment as xe, withModifiers as Ie, isVNode as ze, render as Ge, onUnmounted as rn, renderList as po, vModelSelect as ot } from "vue";
const ur = (e) => {
  e.registerRoute({
    target: "window",
    path: "/screen-recorder",
    name: "ScreenRecorder",
    component: () => Promise.resolve().then(() => ar)
  });
};
function ho(e, t, n, o) {
  if (typeof t == "function" ? e !== t || !0 : !t.has(e)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
  return n === "m" ? o : n === "a" ? o.call(e) : o ? o.value : t.get(e);
}
function fo(e, t, n, o, s) {
  if (typeof t == "function" ? e !== t || !0 : !t.has(e)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
  return t.set(e, n), n;
}
var Ae;
const F = "__TAURI_TO_IPC_KEY__";
function go(e, t = !1) {
  return window.__TAURI_INTERNALS__.transformCallback(e, t);
}
async function l(e, t = {}, n) {
  return window.__TAURI_INTERNALS__.invoke(e, t, n);
}
class vo {
  get rid() {
    return ho(this, Ae, "f");
  }
  constructor(t) {
    Ae.set(this, void 0), fo(this, Ae, t);
  }
  /**
   * Destroys and cleans up this resource from memory.
   * **You should not call any method on this object anymore and should drop any reference to it.**
   */
  async close() {
    return l("plugin:resources|close", {
      rid: this.rid
    });
  }
}
Ae = /* @__PURE__ */ new WeakMap();
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
    return new oe(this.width * t, this.height * t);
  }
  [F]() {
    return {
      width: this.width,
      height: this.height
    };
  }
  toJSON() {
    return this[F]();
  }
}
class oe {
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
  [F]() {
    return {
      width: this.width,
      height: this.height
    };
  }
  toJSON() {
    return this[F]();
  }
}
class de {
  constructor(t) {
    this.size = t;
  }
  toLogical(t) {
    return this.size instanceof Ue ? this.size : this.size.toLogical(t);
  }
  toPhysical(t) {
    return this.size instanceof oe ? this.size : this.size.toPhysical(t);
  }
  [F]() {
    return {
      [`${this.size.type}`]: {
        width: this.size.width,
        height: this.size.height
      }
    };
  }
  toJSON() {
    return this[F]();
  }
}
class ln {
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
    return new q(this.x * t, this.y * t);
  }
  [F]() {
    return {
      x: this.x,
      y: this.y
    };
  }
  toJSON() {
    return this[F]();
  }
}
class q {
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
    return new ln(this.x / t, this.y / t);
  }
  [F]() {
    return {
      x: this.x,
      y: this.y
    };
  }
  toJSON() {
    return this[F]();
  }
}
class We {
  constructor(t) {
    this.position = t;
  }
  toLogical(t) {
    return this.position instanceof ln ? this.position : this.position.toLogical(t);
  }
  toPhysical(t) {
    return this.position instanceof q ? this.position : this.position.toPhysical(t);
  }
  [F]() {
    return {
      [`${this.position.type}`]: {
        x: this.position.x,
        y: this.position.y
      }
    };
  }
  toJSON() {
    return this[F]();
  }
}
var E;
(function(e) {
  e.WINDOW_RESIZED = "tauri://resize", e.WINDOW_MOVED = "tauri://move", e.WINDOW_CLOSE_REQUESTED = "tauri://close-requested", e.WINDOW_DESTROYED = "tauri://destroyed", e.WINDOW_FOCUS = "tauri://focus", e.WINDOW_BLUR = "tauri://blur", e.WINDOW_SCALE_FACTOR_CHANGED = "tauri://scale-change", e.WINDOW_THEME_CHANGED = "tauri://theme-changed", e.WINDOW_CREATED = "tauri://window-created", e.WEBVIEW_CREATED = "tauri://webview-created", e.DRAG_ENTER = "tauri://drag-enter", e.DRAG_OVER = "tauri://drag-over", e.DRAG_DROP = "tauri://drag-drop", e.DRAG_LEAVE = "tauri://drag-leave";
})(E || (E = {}));
async function un(e, t) {
  await l("plugin:event|unlisten", {
    event: e,
    eventId: t
  });
}
async function vt(e, t, n) {
  var o;
  const s = typeof n?.target == "string" ? { kind: "AnyLabel", label: n.target } : (o = n?.target) !== null && o !== void 0 ? o : { kind: "Any" };
  return l("plugin:event|listen", {
    event: e,
    target: s,
    handler: go(t)
  }).then((a) => async () => un(e, a));
}
async function yo(e, t, n) {
  return vt(e, (o) => {
    un(e, o.id), t(o);
  }, n);
}
async function mo(e, t) {
  await l("plugin:event|emit", {
    event: e,
    payload: t
  });
}
async function wo(e, t, n) {
  await l("plugin:event|emit_to", {
    target: typeof e == "string" ? { kind: "AnyLabel", label: e } : e,
    event: t,
    payload: n
  });
}
class Te extends vo {
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
    return l("plugin:image|new", {
      rgba: Ve(t),
      width: n,
      height: o
    }).then((s) => new Te(s));
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
    return l("plugin:image|from_bytes", {
      bytes: Ve(t)
    }).then((n) => new Te(n));
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
    return l("plugin:image|from_path", { path: t }).then((n) => new Te(n));
  }
  /** Returns the RGBA data for this image, in row-major order from top to bottom.  */
  async rgba() {
    return l("plugin:image|rgba", {
      rid: this.rid
    }).then((t) => new Uint8Array(t));
  }
  /** Returns the size of this image.  */
  async size() {
    return l("plugin:image|size", { rid: this.rid });
  }
}
function Ve(e) {
  return e == null ? null : typeof e == "string" ? e : e instanceof Te ? e.rid : e;
}
var dt;
(function(e) {
  e[e.Critical = 1] = "Critical", e[e.Informational = 2] = "Informational";
})(dt || (dt = {}));
class _o {
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
var $t;
(function(e) {
  e.None = "none", e.Normal = "normal", e.Indeterminate = "indeterminate", e.Paused = "paused", e.Error = "error";
})($t || ($t = {}));
function cn() {
  return new dn(window.__TAURI_INTERNALS__.metadata.currentWindow.label, {
    // @ts-expect-error `skip` is not defined in the public API but it is handled by the constructor
    skip: !0
  });
}
async function st() {
  return l("plugin:window|get_all_windows").then((e) => e.map((t) => new dn(t, {
    // @ts-expect-error `skip` is not defined in the public API but it is handled by the constructor
    skip: !0
  })));
}
const it = ["tauri://created", "tauri://error"];
class dn {
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
    this.label = t, this.listeners = /* @__PURE__ */ Object.create(null), n?.skip || l("plugin:window|create", {
      options: {
        ...n,
        parent: typeof n.parent == "string" ? n.parent : (o = n.parent) === null || o === void 0 ? void 0 : o.label,
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
    var n;
    return (n = (await st()).find((o) => o.label === t)) !== null && n !== void 0 ? n : null;
  }
  /**
   * Get an instance of `Window` for the current window.
   */
  static getCurrent() {
    return cn();
  }
  /**
   * Gets a list of instances of `Window` for all available windows.
   */
  static async getAll() {
    return st();
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
    for (const t of await st())
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
    } : vt(t, n, {
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
    } : yo(t, n, {
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
    if (it.includes(t)) {
      for (const o of this.listeners[t] || [])
        o({
          event: t,
          id: -1,
          payload: n
        });
      return;
    }
    return mo(t, n);
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
    if (it.includes(n)) {
      for (const s of this.listeners[n] || [])
        s({
          event: n,
          id: -1,
          payload: o
        });
      return;
    }
    return wo(t, n, o);
  }
  /** @ignore */
  _handleTauriEvent(t, n) {
    return it.includes(t) ? (t in this.listeners ? this.listeners[t].push(n) : this.listeners[t] = [n], !0) : !1;
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
    return l("plugin:window|scale_factor", {
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
    return l("plugin:window|inner_position", {
      label: this.label
    }).then((t) => new q(t));
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
    return l("plugin:window|outer_position", {
      label: this.label
    }).then((t) => new q(t));
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
    return l("plugin:window|inner_size", {
      label: this.label
    }).then((t) => new oe(t));
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
    return l("plugin:window|outer_size", {
      label: this.label
    }).then((t) => new oe(t));
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
    return l("plugin:window|is_fullscreen", {
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
    return l("plugin:window|is_minimized", {
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
    return l("plugin:window|is_maximized", {
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
    return l("plugin:window|is_focused", {
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
    return l("plugin:window|is_decorated", {
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
    return l("plugin:window|is_resizable", {
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
    return l("plugin:window|is_maximizable", {
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
    return l("plugin:window|is_minimizable", {
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
    return l("plugin:window|is_closable", {
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
    return l("plugin:window|is_visible", {
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
    return l("plugin:window|title", {
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
    return l("plugin:window|theme", {
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
    return l("plugin:window|is_always_on_top", {
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
    return l("plugin:window|center", {
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
    return t && (t === dt.Critical ? n = { type: "Critical" } : n = { type: "Informational" }), l("plugin:window|request_user_attention", {
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
    return l("plugin:window|set_resizable", {
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
    return l("plugin:window|set_enabled", {
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
    return l("plugin:window|is_enabled", {
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
    return l("plugin:window|set_maximizable", {
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
    return l("plugin:window|set_minimizable", {
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
    return l("plugin:window|set_closable", {
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
    return l("plugin:window|set_title", {
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
    return l("plugin:window|maximize", {
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
    return l("plugin:window|unmaximize", {
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
    return l("plugin:window|toggle_maximize", {
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
    return l("plugin:window|minimize", {
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
    return l("plugin:window|unminimize", {
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
    return l("plugin:window|show", {
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
    return l("plugin:window|hide", {
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
    return l("plugin:window|close", {
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
    return l("plugin:window|destroy", {
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
    return l("plugin:window|set_decorations", {
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
    return l("plugin:window|set_shadow", {
      label: this.label,
      value: t
    });
  }
  /**
   * Set window effects.
   */
  async setEffects(t) {
    return l("plugin:window|set_effects", {
      label: this.label,
      value: t
    });
  }
  /**
   * Clear any applied effects if possible.
   */
  async clearEffects() {
    return l("plugin:window|set_effects", {
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
    return l("plugin:window|set_always_on_top", {
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
    return l("plugin:window|set_always_on_bottom", {
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
    return l("plugin:window|set_content_protected", {
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
    return l("plugin:window|set_size", {
      label: this.label,
      value: t instanceof de ? t : new de(t)
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
    return l("plugin:window|set_min_size", {
      label: this.label,
      value: t instanceof de ? t : t ? new de(t) : null
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
    return l("plugin:window|set_max_size", {
      label: this.label,
      value: t instanceof de ? t : t ? new de(t) : null
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
    return l("plugin:window|set_size_constraints", {
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
    return l("plugin:window|set_position", {
      label: this.label,
      value: t instanceof We ? t : new We(t)
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
    return l("plugin:window|set_fullscreen", {
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
    return l("plugin:window|set_focus", {
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
    return l("plugin:window|set_icon", {
      label: this.label,
      value: Ve(t)
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
    return l("plugin:window|set_skip_taskbar", {
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
    return l("plugin:window|set_cursor_grab", {
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
    return l("plugin:window|set_cursor_visible", {
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
    return l("plugin:window|set_cursor_icon", {
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
    return l("plugin:window|set_background_color", { color: t });
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
    return l("plugin:window|set_cursor_position", {
      label: this.label,
      value: t instanceof We ? t : new We(t)
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
    return l("plugin:window|set_ignore_cursor_events", {
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
    return l("plugin:window|start_dragging", {
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
    return l("plugin:window|start_resize_dragging", {
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
    return l("plugin:window|set_badge_count", {
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
    return l("plugin:window|set_badge_label", {
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
    return l("plugin:window|set_overlay_icon", {
      label: this.label,
      value: t ? Ve(t) : void 0
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
    return l("plugin:window|set_progress_bar", {
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
    return l("plugin:window|set_visible_on_all_workspaces", {
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
    return l("plugin:window|set_title_bar_style", {
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
    return l("plugin:window|set_theme", {
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
    return this.listen(E.WINDOW_RESIZED, (n) => {
      n.payload = new oe(n.payload), t(n);
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
    return this.listen(E.WINDOW_MOVED, (n) => {
      n.payload = new q(n.payload), t(n);
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
    return this.listen(E.WINDOW_CLOSE_REQUESTED, async (n) => {
      const o = new _o(n);
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
    const n = await this.listen(E.DRAG_ENTER, (i) => {
      t({
        ...i,
        payload: {
          type: "enter",
          paths: i.payload.paths,
          position: new q(i.payload.position)
        }
      });
    }), o = await this.listen(E.DRAG_OVER, (i) => {
      t({
        ...i,
        payload: {
          type: "over",
          position: new q(i.payload.position)
        }
      });
    }), s = await this.listen(E.DRAG_DROP, (i) => {
      t({
        ...i,
        payload: {
          type: "drop",
          paths: i.payload.paths,
          position: new q(i.payload.position)
        }
      });
    }), a = await this.listen(E.DRAG_LEAVE, (i) => {
      t({ ...i, payload: { type: "leave" } });
    });
    return () => {
      n(), s(), o(), a();
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
    const n = await this.listen(E.WINDOW_FOCUS, (s) => {
      t({ ...s, payload: !0 });
    }), o = await this.listen(E.WINDOW_BLUR, (s) => {
      t({ ...s, payload: !1 });
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
    return this.listen(E.WINDOW_SCALE_FACTOR_CHANGED, t);
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
    return this.listen(E.WINDOW_THEME_CHANGED, t);
  }
}
var Et;
(function(e) {
  e.Disabled = "disabled", e.Throttle = "throttle", e.Suspend = "suspend";
})(Et || (Et = {}));
var Dt;
(function(e) {
  e.AppearanceBased = "appearanceBased", e.Light = "light", e.Dark = "dark", e.MediumLight = "mediumLight", e.UltraDark = "ultraDark", e.Titlebar = "titlebar", e.Selection = "selection", e.Menu = "menu", e.Popover = "popover", e.Sidebar = "sidebar", e.HeaderView = "headerView", e.Sheet = "sheet", e.WindowBackground = "windowBackground", e.HudWindow = "hudWindow", e.FullScreenUI = "fullScreenUI", e.Tooltip = "tooltip", e.ContentBackground = "contentBackground", e.UnderWindowBackground = "underWindowBackground", e.UnderPageBackground = "underPageBackground", e.Mica = "mica", e.Blur = "blur", e.Acrylic = "acrylic", e.Tabbed = "tabbed", e.TabbedDark = "tabbedDark", e.TabbedLight = "tabbedLight";
})(Dt || (Dt = {}));
var Rt;
(function(e) {
  e.FollowsWindowActiveState = "followsWindowActiveState", e.Active = "active", e.Inactive = "inactive";
})(Rt || (Rt = {}));
function bo(e) {
  return e === null ? null : {
    name: e.name,
    scaleFactor: e.scaleFactor,
    position: new q(e.position),
    size: new oe(e.size)
  };
}
async function Co(e, t) {
  return l("plugin:window|monitor_from_point", {
    x: e,
    y: t
  }).then(bo);
}
var ko = {
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
function So() {
  return "icon-" + ((1 + Math.random()) * 4294967296 | 0).toString(16).substring(1);
}
function Oo(e, t, n) {
  var o = typeof t.fill == "string" ? [t.fill] : t.fill || [], s = [], a = t.theme || n.theme;
  switch (a) {
    case "outline":
      s.push(typeof o[0] == "string" ? o[0] : "currentColor"), s.push("none"), s.push(typeof o[0] == "string" ? o[0] : "currentColor"), s.push("none");
      break;
    case "filled":
      s.push(typeof o[0] == "string" ? o[0] : "currentColor"), s.push(typeof o[0] == "string" ? o[0] : "currentColor"), s.push("#FFF"), s.push("#FFF");
      break;
    case "two-tone":
      s.push(typeof o[0] == "string" ? o[0] : "currentColor"), s.push(typeof o[1] == "string" ? o[1] : n.colors.twoTone.twoTone), s.push(typeof o[0] == "string" ? o[0] : "currentColor"), s.push(typeof o[1] == "string" ? o[1] : n.colors.twoTone.twoTone);
      break;
    case "multi-color":
      s.push(typeof o[0] == "string" ? o[0] : "currentColor"), s.push(typeof o[1] == "string" ? o[1] : n.colors.multiColor.outFillColor), s.push(typeof o[2] == "string" ? o[2] : n.colors.multiColor.innerStrokeColor), s.push(typeof o[3] == "string" ? o[3] : n.colors.multiColor.innerFillColor);
      break;
  }
  return {
    size: t.size || n.size,
    strokeWidth: t.strokeWidth || n.strokeWidth,
    strokeLinecap: t.strokeLinecap || n.strokeLinecap,
    strokeLinejoin: t.strokeLinejoin || n.strokeLinejoin,
    colors: s,
    id: e
  };
}
var xo = Symbol("icon-context");
function yt(e, t, n) {
  var o = {
    name: "icon-" + e,
    props: ["size", "strokeWidth", "strokeLinecap", "strokeLinejoin", "theme", "fill", "spin"],
    setup: function(a) {
      var i = So(), c = ee(xo, ko);
      return function() {
        var f = a.size, v = a.strokeWidth, p = a.strokeLinecap, y = a.strokeLinejoin, O = a.theme, b = a.fill, A = a.spin, g = Oo(i, {
          size: f,
          strokeWidth: v,
          strokeLinecap: p,
          strokeLinejoin: y,
          theme: O,
          fill: b
        }, c), w = [c.prefix + "-icon"];
        return w.push(c.prefix + "-icon-" + e), A && w.push(c.prefix + "-icon-spin"), T("span", {
          class: w.join(" ")
        }, [n(g)]);
      };
    }
  };
  return o;
}
const Io = yt("close-small", !1, function(e) {
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
}), To = yt("minus", !1, function(e) {
  return T("svg", {
    width: e.size,
    height: e.size,
    viewBox: "0 0 48 48",
    fill: "none"
  }, [T("path", {
    d: "M10.5 24L38.5 24",
    stroke: e.colors[0],
    "stroke-width": e.strokeWidth,
    "stroke-linecap": e.strokeLinecap,
    "stroke-linejoin": e.strokeLinejoin
  }, null)]);
}), No = yt("radar", !1, function(e) {
  return T("svg", {
    width: e.size,
    height: e.size,
    viewBox: "0 0 48 48",
    fill: "none"
  }, [T("path", {
    "fill-rule": "evenodd",
    "clip-rule": "evenodd",
    d: "M24 44C35.0457 44 44 35.0457 44 24C44 12.9543 35.0457 4 24 4C12.9543 4 4 12.9543 4 24C4 35.0457 12.9543 44 24 44Z",
    stroke: e.colors[0],
    "stroke-width": e.strokeWidth,
    "stroke-linecap": e.strokeLinecap,
    "stroke-linejoin": e.strokeLinejoin
  }, null), T("path", {
    "fill-rule": "evenodd",
    "clip-rule": "evenodd",
    d: "M24 34C29.5228 34 34 29.5228 34 24C34 18.4772 29.5228 14 24 14C18.4772 14 14 18.4772 14 24C14 29.5228 18.4772 34 24 34Z",
    stroke: e.colors[0],
    "stroke-width": e.strokeWidth,
    "stroke-linecap": e.strokeLinecap,
    "stroke-linejoin": e.strokeLinejoin
  }, null), T("path", {
    d: "M24 4V44",
    stroke: e.colors[0],
    "stroke-width": e.strokeWidth,
    "stroke-linecap": e.strokeLinecap,
    "stroke-linejoin": e.strokeLinejoin
  }, null), T("path", {
    d: "M4 24.0002L18 24.0086",
    stroke: e.colors[0],
    "stroke-width": e.strokeWidth,
    "stroke-linecap": e.strokeLinecap
  }, null), T("path", {
    d: "M4 24.0083L44 24.0083",
    stroke: e.colors[0],
    "stroke-width": e.strokeWidth,
    "stroke-linecap": e.strokeLinecap,
    "stroke-linejoin": e.strokeLinejoin
  }, null)]);
}), pn = Symbol(), je = "el", zo = "is-", X = (e, t, n, o, s) => {
  let a = `${e}-${t}`;
  return n && (a += `-${n}`), o && (a += `__${o}`), s && (a += `--${s}`), a;
}, hn = Symbol("namespaceContextKey"), Mo = (e) => {
  const t = e || (he() ? ee(hn, x(je)) : x(je));
  return m(() => r(t) || je);
}, mt = (e, t) => {
  const n = Mo(t);
  return {
    namespace: n,
    b: (g = "") => X(n.value, e, g, "", ""),
    e: (g) => g ? X(n.value, e, "", g, "") : "",
    m: (g) => g ? X(n.value, e, "", "", g) : "",
    be: (g, w) => g && w ? X(n.value, e, g, w, "") : "",
    em: (g, w) => g && w ? X(n.value, e, "", g, w) : "",
    bm: (g, w) => g && w ? X(n.value, e, g, "", w) : "",
    bem: (g, w, I) => g && w && I ? X(n.value, e, g, w, I) : "",
    is: (g, ...w) => {
      const I = w.length >= 1 ? w[0] : !0;
      return g && I ? `${zo}${g}` : "";
    },
    cssVar: (g) => {
      const w = {};
      for (const I in g)
        g[I] && (w[`--${n.value}-${I}`] = g[I]);
      return w;
    },
    cssVarName: (g) => `--${n.value}-${g}`,
    cssVarBlock: (g) => {
      const w = {};
      for (const I in g)
        g[I] && (w[`--${n.value}-${e}-${I}`] = g[I]);
      return w;
    },
    cssVarBlockName: (g) => `--${n.value}-${e}-${g}`
  };
};
/**
* @vue/shared v3.5.13
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/
const Po = Object.prototype.hasOwnProperty, Wt = (e, t) => Po.call(e, t), Me = (e) => typeof e == "function", se = (e) => typeof e == "string", fn = (e) => e !== null && typeof e == "object";
var Lo = typeof global == "object" && global && global.Object === Object && global, $o = typeof self == "object" && self && self.Object === Object && self, wt = Lo || $o || Function("return this")(), ve = wt.Symbol, gn = Object.prototype, Eo = gn.hasOwnProperty, Do = gn.toString, ke = ve ? ve.toStringTag : void 0;
function Ro(e) {
  var t = Eo.call(e, ke), n = e[ke];
  try {
    e[ke] = void 0;
    var o = !0;
  } catch {
  }
  var s = Do.call(e);
  return o && (t ? e[ke] = n : delete e[ke]), s;
}
var Wo = Object.prototype, Fo = Wo.toString;
function Ao(e) {
  return Fo.call(e);
}
var jo = "[object Null]", Bo = "[object Undefined]", Ft = ve ? ve.toStringTag : void 0;
function vn(e) {
  return e == null ? e === void 0 ? Bo : jo : Ft && Ft in Object(e) ? Ro(e) : Ao(e);
}
function Ho(e) {
  return e != null && typeof e == "object";
}
var Go = "[object Symbol]";
function _t(e) {
  return typeof e == "symbol" || Ho(e) && vn(e) == Go;
}
function Uo(e, t) {
  for (var n = -1, o = e == null ? 0 : e.length, s = Array(o); ++n < o; )
    s[n] = t(e[n], n, e);
  return s;
}
var bt = Array.isArray, At = ve ? ve.prototype : void 0, jt = At ? At.toString : void 0;
function yn(e) {
  if (typeof e == "string")
    return e;
  if (bt(e))
    return Uo(e, yn) + "";
  if (_t(e))
    return jt ? jt.call(e) : "";
  var t = e + "";
  return t == "0" && 1 / e == -1 / 0 ? "-0" : t;
}
function mn(e) {
  var t = typeof e;
  return e != null && (t == "object" || t == "function");
}
var Vo = "[object AsyncFunction]", qo = "[object Function]", Ko = "[object GeneratorFunction]", Zo = "[object Proxy]";
function Jo(e) {
  if (!mn(e))
    return !1;
  var t = vn(e);
  return t == qo || t == Ko || t == Vo || t == Zo;
}
var at = wt["__core-js_shared__"], Bt = function() {
  var e = /[^.]+$/.exec(at && at.keys && at.keys.IE_PROTO || "");
  return e ? "Symbol(src)_1." + e : "";
}();
function Yo(e) {
  return !!Bt && Bt in e;
}
var Qo = Function.prototype, Xo = Qo.toString;
function es(e) {
  if (e != null) {
    try {
      return Xo.call(e);
    } catch {
    }
    try {
      return e + "";
    } catch {
    }
  }
  return "";
}
var ts = /[\\^$.*+?()[\]{}|]/g, ns = /^\[object .+?Constructor\]$/, os = Function.prototype, ss = Object.prototype, is = os.toString, as = ss.hasOwnProperty, rs = RegExp(
  "^" + is.call(as).replace(ts, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$"
);
function ls(e) {
  if (!mn(e) || Yo(e))
    return !1;
  var t = Jo(e) ? rs : ns;
  return t.test(es(e));
}
function us(e, t) {
  return e?.[t];
}
function wn(e, t) {
  var n = us(e, t);
  return ls(n) ? n : void 0;
}
function cs(e, t) {
  return e === t || e !== e && t !== t;
}
var ds = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/, ps = /^\w*$/;
function hs(e, t) {
  if (bt(e))
    return !1;
  var n = typeof e;
  return n == "number" || n == "symbol" || n == "boolean" || e == null || _t(e) ? !0 : ps.test(e) || !ds.test(e) || t != null && e in Object(t);
}
var Pe = wn(Object, "create");
function fs() {
  this.__data__ = Pe ? Pe(null) : {}, this.size = 0;
}
function gs(e) {
  var t = this.has(e) && delete this.__data__[e];
  return this.size -= t ? 1 : 0, t;
}
var vs = "__lodash_hash_undefined__", ys = Object.prototype, ms = ys.hasOwnProperty;
function ws(e) {
  var t = this.__data__;
  if (Pe) {
    var n = t[e];
    return n === vs ? void 0 : n;
  }
  return ms.call(t, e) ? t[e] : void 0;
}
var _s = Object.prototype, bs = _s.hasOwnProperty;
function Cs(e) {
  var t = this.__data__;
  return Pe ? t[e] !== void 0 : bs.call(t, e);
}
var ks = "__lodash_hash_undefined__";
function Ss(e, t) {
  var n = this.__data__;
  return this.size += this.has(e) ? 0 : 1, n[e] = Pe && t === void 0 ? ks : t, this;
}
function ie(e) {
  var t = -1, n = e == null ? 0 : e.length;
  for (this.clear(); ++t < n; ) {
    var o = e[t];
    this.set(o[0], o[1]);
  }
}
ie.prototype.clear = fs;
ie.prototype.delete = gs;
ie.prototype.get = ws;
ie.prototype.has = Cs;
ie.prototype.set = Ss;
function Os() {
  this.__data__ = [], this.size = 0;
}
function Qe(e, t) {
  for (var n = e.length; n--; )
    if (cs(e[n][0], t))
      return n;
  return -1;
}
var xs = Array.prototype, Is = xs.splice;
function Ts(e) {
  var t = this.__data__, n = Qe(t, e);
  if (n < 0)
    return !1;
  var o = t.length - 1;
  return n == o ? t.pop() : Is.call(t, n, 1), --this.size, !0;
}
function Ns(e) {
  var t = this.__data__, n = Qe(t, e);
  return n < 0 ? void 0 : t[n][1];
}
function zs(e) {
  return Qe(this.__data__, e) > -1;
}
function Ms(e, t) {
  var n = this.__data__, o = Qe(n, e);
  return o < 0 ? (++this.size, n.push([e, t])) : n[o][1] = t, this;
}
function we(e) {
  var t = -1, n = e == null ? 0 : e.length;
  for (this.clear(); ++t < n; ) {
    var o = e[t];
    this.set(o[0], o[1]);
  }
}
we.prototype.clear = Os;
we.prototype.delete = Ts;
we.prototype.get = Ns;
we.prototype.has = zs;
we.prototype.set = Ms;
var Ps = wn(wt, "Map");
function Ls() {
  this.size = 0, this.__data__ = {
    hash: new ie(),
    map: new (Ps || we)(),
    string: new ie()
  };
}
function $s(e) {
  var t = typeof e;
  return t == "string" || t == "number" || t == "symbol" || t == "boolean" ? e !== "__proto__" : e === null;
}
function Xe(e, t) {
  var n = e.__data__;
  return $s(t) ? n[typeof t == "string" ? "string" : "hash"] : n.map;
}
function Es(e) {
  var t = Xe(this, e).delete(e);
  return this.size -= t ? 1 : 0, t;
}
function Ds(e) {
  return Xe(this, e).get(e);
}
function Rs(e) {
  return Xe(this, e).has(e);
}
function Ws(e, t) {
  var n = Xe(this, e), o = n.size;
  return n.set(e, t), this.size += n.size == o ? 0 : 1, this;
}
function re(e) {
  var t = -1, n = e == null ? 0 : e.length;
  for (this.clear(); ++t < n; ) {
    var o = e[t];
    this.set(o[0], o[1]);
  }
}
re.prototype.clear = Ls;
re.prototype.delete = Es;
re.prototype.get = Ds;
re.prototype.has = Rs;
re.prototype.set = Ws;
var Fs = "Expected a function";
function Ct(e, t) {
  if (typeof e != "function" || t != null && typeof t != "function")
    throw new TypeError(Fs);
  var n = function() {
    var o = arguments, s = t ? t.apply(this, o) : o[0], a = n.cache;
    if (a.has(s))
      return a.get(s);
    var i = e.apply(this, o);
    return n.cache = a.set(s, i) || a, i;
  };
  return n.cache = new (Ct.Cache || re)(), n;
}
Ct.Cache = re;
var As = 500;
function js(e) {
  var t = Ct(e, function(o) {
    return n.size === As && n.clear(), o;
  }), n = t.cache;
  return t;
}
var Bs = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g, Hs = /\\(\\)?/g, Gs = js(function(e) {
  var t = [];
  return e.charCodeAt(0) === 46 && t.push(""), e.replace(Bs, function(n, o, s, a) {
    t.push(s ? a.replace(Hs, "$1") : o || n);
  }), t;
});
function Us(e) {
  return e == null ? "" : yn(e);
}
function Vs(e, t) {
  return bt(e) ? e : hs(e, t) ? [e] : Gs(Us(e));
}
function qs(e) {
  if (typeof e == "string" || _t(e))
    return e;
  var t = e + "";
  return t == "0" && 1 / e == -1 / 0 ? "-0" : t;
}
function Ks(e, t) {
  t = Vs(t, e);
  for (var n = 0, o = t.length; e != null && n < o; )
    e = e[qs(t[n++])];
  return n && n == o ? e : void 0;
}
function Zs(e, t, n) {
  var o = e == null ? void 0 : Ks(e, t);
  return o === void 0 ? n : o;
}
function Js(e) {
  for (var t = -1, n = e == null ? 0 : e.length, o = {}; ++t < n; ) {
    var s = e[t];
    o[s[0]] = s[1];
  }
  return o;
}
const _n = (e) => e === void 0, Ht = (e) => typeof e == "boolean", ae = (e) => typeof e == "number", pt = (e) => typeof Element > "u" ? !1 : e instanceof Element, Ys = (e) => se(e) ? !Number.isNaN(Number(e)) : !1;
var Gt;
const le = typeof window < "u", Qs = (e) => typeof e == "string", Xs = () => {
};
le && ((Gt = window?.navigator) != null && Gt.userAgent) && /iP(ad|hone|od)/.test(window.navigator.userAgent);
function kt(e) {
  return typeof e == "function" ? e() : r(e);
}
function ei(e) {
  return e;
}
function St(e) {
  return so() ? (io(e), !0) : !1;
}
function ti(e, t = !0) {
  he() ? Ye(e) : t ? e() : Oe(e);
}
function bn(e, t, n = {}) {
  const {
    immediate: o = !0
  } = n, s = x(!1);
  let a = null;
  function i() {
    a && (clearTimeout(a), a = null);
  }
  function c() {
    s.value = !1, i();
  }
  function f(...v) {
    i(), s.value = !0, a = setTimeout(() => {
      s.value = !1, a = null, e(...v);
    }, kt(t));
  }
  return o && (s.value = !0, le && f()), St(c), {
    isPending: oo(s),
    start: f,
    stop: c
  };
}
function Cn(e) {
  var t;
  const n = kt(e);
  return (t = n?.$el) != null ? t : n;
}
const kn = le ? window : void 0;
function Sn(...e) {
  let t, n, o, s;
  if (Qs(e[0]) || Array.isArray(e[0]) ? ([n, o, s] = e, t = kn) : [t, n, o, s] = e, !t)
    return Xs;
  Array.isArray(n) || (n = [n]), Array.isArray(o) || (o = [o]);
  const a = [], i = () => {
    a.forEach((p) => p()), a.length = 0;
  }, c = (p, y, O, b) => (p.addEventListener(y, O, b), () => p.removeEventListener(y, O, b)), f = fe(() => [Cn(t), kt(s)], ([p, y]) => {
    i(), p && a.push(...n.flatMap((O) => o.map((b) => c(p, O, b, y))));
  }, { immediate: !0, flush: "post" }), v = () => {
    f(), i();
  };
  return St(v), v;
}
function ni(e, t = !1) {
  const n = x(), o = () => n.value = !!e();
  return o(), ti(o, t), n;
}
const Ut = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {}, Vt = "__vueuse_ssr_handlers__";
Ut[Vt] = Ut[Vt] || {};
var qt = Object.getOwnPropertySymbols, oi = Object.prototype.hasOwnProperty, si = Object.prototype.propertyIsEnumerable, ii = (e, t) => {
  var n = {};
  for (var o in e)
    oi.call(e, o) && t.indexOf(o) < 0 && (n[o] = e[o]);
  if (e != null && qt)
    for (var o of qt(e))
      t.indexOf(o) < 0 && si.call(e, o) && (n[o] = e[o]);
  return n;
};
function ai(e, t, n = {}) {
  const o = n, { window: s = kn } = o, a = ii(o, ["window"]);
  let i;
  const c = ni(() => s && "ResizeObserver" in s), f = () => {
    i && (i.disconnect(), i = void 0);
  }, v = fe(() => Cn(e), (y) => {
    f(), c.value && s && y && (i = new ResizeObserver(t), i.observe(y, a));
  }, { immediate: !0, flush: "post" }), p = () => {
    f(), v();
  };
  return St(p), {
    isSupported: c,
    stop: p
  };
}
var Kt;
(function(e) {
  e.UP = "UP", e.RIGHT = "RIGHT", e.DOWN = "DOWN", e.LEFT = "LEFT", e.NONE = "NONE";
})(Kt || (Kt = {}));
var ri = Object.defineProperty, Zt = Object.getOwnPropertySymbols, li = Object.prototype.hasOwnProperty, ui = Object.prototype.propertyIsEnumerable, Jt = (e, t, n) => t in e ? ri(e, t, { enumerable: !0, configurable: !0, writable: !0, value: n }) : e[t] = n, ci = (e, t) => {
  for (var n in t || (t = {}))
    li.call(t, n) && Jt(e, n, t[n]);
  if (Zt)
    for (var n of Zt(t))
      ui.call(t, n) && Jt(e, n, t[n]);
  return e;
};
const di = {
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
ci({
  linear: ei
}, di);
const Yt = {
  current: 0
}, Qt = x(0), On = 2e3, Xt = Symbol("elZIndexContextKey"), xn = Symbol("zIndexContextKey"), pi = (e) => {
  const t = he() ? ee(Xt, Yt) : Yt, n = e || (he() ? ee(xn, void 0) : void 0), o = m(() => {
    const i = r(n);
    return ae(i) ? i : On;
  }), s = m(() => o.value + Qt.value), a = () => (t.current++, Qt.value = t.current, s.value);
  return !le && ee(Xt), {
    initialZIndex: o,
    currentZIndex: s,
    nextZIndex: a
  };
};
var hi = {
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
const fi = (e) => (t, n) => gi(t, n, r(e)), gi = (e, t, n) => Zs(n, e, e).replace(/\{(\w+)\}/g, (o, s) => {
  var a;
  return `${(a = t?.[s]) != null ? a : `{${s}}`}`;
}), vi = (e) => {
  const t = m(() => r(e).name), n = ao(e) ? e : x(e);
  return {
    lang: t,
    locale: n,
    t: fi(e)
  };
}, In = Symbol("localeContextKey"), yi = (e) => {
  const t = e || ee(In, x());
  return vi(m(() => t.value || hi));
}, Tn = "__epPropKey", D = (e) => e, mi = (e) => fn(e) && !!e[Tn], Nn = (e, t) => {
  if (!fn(e) || mi(e))
    return e;
  const { values: n, required: o, default: s, type: a, validator: i } = e, f = {
    type: a,
    required: !!o,
    validator: n || i ? (v) => {
      let p = !1, y = [];
      if (n && (y = Array.from(n), Wt(e, "default") && y.push(s), p || (p = y.includes(v))), i && (p || (p = i(v))), !p && y.length > 0) {
        const O = [...new Set(y)].map((b) => JSON.stringify(b)).join(", ");
        ro(`Invalid prop: validation failed${t ? ` for prop "${t}"` : ""}. Expected one of [${O}], got value ${JSON.stringify(v)}.`);
      }
      return p;
    } : void 0,
    [Tn]: !0
  };
  return Wt(e, "default") && (f.default = s), f;
}, _e = (e) => Js(Object.entries(e).map(([t, n]) => [
  t,
  Nn(n, t)
])), wi = ["", "default", "small", "large"], _i = Nn({
  type: String,
  values: wi,
  required: !1
}), bi = Symbol("size"), Ci = Symbol("emptyValuesContextKey"), ki = _e({
  emptyValues: Array,
  valueOnClear: {
    type: [String, Number, Boolean, Function],
    default: void 0,
    validator: (e) => Me(e) ? !e() : !e
  }
}), en = (e) => Object.keys(e), qe = x();
function zn(e, t = void 0) {
  return he() ? ee(pn, qe) : qe;
}
function Mn(e, t) {
  const n = zn(), o = mt(e, m(() => {
    var c;
    return ((c = n.value) == null ? void 0 : c.namespace) || je;
  })), s = yi(m(() => {
    var c;
    return (c = n.value) == null ? void 0 : c.locale;
  })), a = pi(m(() => {
    var c;
    return ((c = n.value) == null ? void 0 : c.zIndex) || On;
  })), i = m(() => {
    var c;
    return r(t) || ((c = n.value) == null ? void 0 : c.size) || "";
  });
  return Pn(m(() => r(n) || {})), {
    ns: o,
    locale: s,
    zIndex: a,
    size: i
  };
}
const Pn = (e, t, n = !1) => {
  var o;
  const s = !!he(), a = s ? zn() : void 0, i = (o = void 0) != null ? o : s ? lo : void 0;
  if (!i)
    return;
  const c = m(() => {
    const f = r(e);
    return a?.value ? Si(a.value, f) : f;
  });
  return i(pn, c), i(In, m(() => c.value.locale)), i(hn, m(() => c.value.namespace)), i(xn, m(() => c.value.zIndex)), i(bi, {
    size: m(() => c.value.size || "")
  }), i(Ci, m(() => ({
    emptyValues: c.value.emptyValues,
    valueOnClear: c.value.valueOnClear
  }))), (n || !qe.value) && (qe.value = c.value), c;
}, Si = (e, t) => {
  const n = [.../* @__PURE__ */ new Set([...en(e), ...en(t)])], o = {};
  for (const s of n)
    o[s] = t[s] !== void 0 ? t[s] : e[s];
  return o;
};
var et = (e, t) => {
  const n = e.__vccOpts || e;
  for (const [o, s] of t)
    n[o] = s;
  return n;
};
function ht(e, t = "px") {
  if (!e)
    return "";
  if (ae(e) || Ys(e))
    return `${e}${t}`;
  if (se(e))
    return e;
}
const Ln = (e, t) => (e.install = (n) => {
  for (const o of [e, ...Object.values({})])
    n.component(o.name, o);
}, e), $n = (e, t) => (e.install = (n) => {
  e._context = n._context, n.config.globalProperties[t] = e;
}, e), Oi = _e({
  size: {
    type: D([Number, String])
  },
  color: {
    type: String
  }
}), xi = $({
  name: "ElIcon",
  inheritAttrs: !1
}), Ii = /* @__PURE__ */ $({
  ...xi,
  props: Oi,
  setup(e) {
    const t = e, n = mt("icon"), o = m(() => {
      const { size: s, color: a } = t;
      return !s && !a ? {} : {
        fontSize: _n(s) ? void 0 : ht(s),
        "--color": a
      };
    });
    return (s, a) => (S(), N("i", uo({
      class: r(n).b(),
      style: r(o)
    }, s.$attrs), [
      ge(s.$slots, "default")
    ], 16));
  }
});
var Ti = /* @__PURE__ */ et(Ii, [["__file", "icon.vue"]]);
const Ke = Ln(Ti);
/*! Element Plus Icons Vue v2.3.1 */
var Ni = /* @__PURE__ */ $({
  name: "CircleCloseFilled",
  __name: "circle-close-filled",
  setup(e) {
    return (t, n) => (S(), N("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 1024 1024"
    }, [
      d("path", {
        fill: "currentColor",
        d: "M512 64a448 448 0 1 1 0 896 448 448 0 0 1 0-896m0 393.664L407.936 353.6a38.4 38.4 0 1 0-54.336 54.336L457.664 512 353.6 616.064a38.4 38.4 0 1 0 54.336 54.336L512 566.336 616.064 670.4a38.4 38.4 0 1 0 54.336-54.336L566.336 512 670.4 407.936a38.4 38.4 0 1 0-54.336-54.336z"
      })
    ]));
  }
}), zi = Ni, Mi = /* @__PURE__ */ $({
  name: "Close",
  __name: "close",
  setup(e) {
    return (t, n) => (S(), N("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 1024 1024"
    }, [
      d("path", {
        fill: "currentColor",
        d: "M764.288 214.592 512 466.88 259.712 214.592a31.936 31.936 0 0 0-45.12 45.12L466.752 512 214.528 764.224a31.936 31.936 0 1 0 45.12 45.184L512 557.184l252.288 252.288a31.936 31.936 0 0 0 45.12-45.12L557.12 512.064l252.288-252.352a31.936 31.936 0 1 0-45.12-45.184z"
      })
    ]));
  }
}), En = Mi, Pi = /* @__PURE__ */ $({
  name: "InfoFilled",
  __name: "info-filled",
  setup(e) {
    return (t, n) => (S(), N("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 1024 1024"
    }, [
      d("path", {
        fill: "currentColor",
        d: "M512 64a448 448 0 1 1 0 896.064A448 448 0 0 1 512 64m67.2 275.072c33.28 0 60.288-23.104 60.288-57.344s-27.072-57.344-60.288-57.344c-33.28 0-60.16 23.104-60.16 57.344s26.88 57.344 60.16 57.344M590.912 699.2c0-6.848 2.368-24.64 1.024-34.752l-52.608 60.544c-10.88 11.456-24.512 19.392-30.912 17.28a12.992 12.992 0 0 1-8.256-14.72l87.68-276.992c7.168-35.136-12.544-67.2-54.336-71.296-44.096 0-108.992 44.736-148.48 101.504 0 6.784-1.28 23.68.064 33.792l52.544-60.608c10.88-11.328 23.552-19.328 29.952-17.152a12.8 12.8 0 0 1 7.808 16.128L388.48 728.576c-10.048 32.256 8.96 63.872 55.04 71.04 67.84 0 107.904-43.648 147.456-100.416z"
      })
    ]));
  }
}), Li = Pi, $i = /* @__PURE__ */ $({
  name: "SuccessFilled",
  __name: "success-filled",
  setup(e) {
    return (t, n) => (S(), N("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 1024 1024"
    }, [
      d("path", {
        fill: "currentColor",
        d: "M512 64a448 448 0 1 1 0 896 448 448 0 0 1 0-896m-55.808 536.384-99.52-99.584a38.4 38.4 0 1 0-54.336 54.336l126.72 126.72a38.272 38.272 0 0 0 54.336 0l262.4-262.464a38.4 38.4 0 1 0-54.272-54.336z"
      })
    ]));
  }
}), Ei = $i, Di = /* @__PURE__ */ $({
  name: "WarningFilled",
  __name: "warning-filled",
  setup(e) {
    return (t, n) => (S(), N("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 1024 1024"
    }, [
      d("path", {
        fill: "currentColor",
        d: "M512 64a448 448 0 1 1 0 896 448 448 0 0 1 0-896m0 192a58.432 58.432 0 0 0-58.24 63.744l23.36 256.384a35.072 35.072 0 0 0 69.76 0l23.296-256.384A58.432 58.432 0 0 0 512 256m0 512a51.2 51.2 0 1 0 0-102.4 51.2 51.2 0 0 0 0 102.4"
      })
    ]));
  }
}), Ri = Di;
const Dn = D([
  String,
  Object,
  Function
]), Wi = {
  Close: En
}, Fi = {
  Close: En
}, Ze = {
  success: Ei,
  warning: Ri,
  error: zi,
  info: Li
}, Ai = (e) => e, Be = {
  esc: "Escape",
  delete: "Delete",
  backspace: "Backspace"
}, ji = _e({
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
    type: D([String, Object, Array])
  },
  offset: {
    type: D(Array),
    default: [0, 0]
  },
  badgeClass: {
    type: String
  }
}), Bi = $({
  name: "ElBadge"
}), Hi = /* @__PURE__ */ $({
  ...Bi,
  props: ji,
  setup(e, { expose: t }) {
    const n = e, o = mt("badge"), s = m(() => n.isDot ? "" : ae(n.value) && ae(n.max) ? n.max < n.value ? `${n.max}+` : `${n.value}` : `${n.value}`), a = m(() => {
      var i, c, f, v, p;
      return [
        {
          backgroundColor: n.color,
          marginRight: ht(-((c = (i = n.offset) == null ? void 0 : i[0]) != null ? c : 0)),
          marginTop: ht((v = (f = n.offset) == null ? void 0 : f[1]) != null ? v : 0)
        },
        (p = n.badgeStyle) != null ? p : {}
      ];
    });
    return t({
      content: s
    }), (i, c) => (S(), N("div", {
      class: z(r(o).b())
    }, [
      ge(i.$slots, "default"),
      T(gt, {
        name: `${r(o).namespace.value}-zoom-in-center`,
        persisted: ""
      }, {
        default: te(() => [
          ne(d("sup", {
            class: z([
              r(o).e("content"),
              r(o).em("content", i.type),
              r(o).is("fixed", !!i.$slots.default),
              r(o).is("dot", i.isDot),
              r(o).is("hide-zero", !i.showZero && n.value === 0),
              i.badgeClass
            ]),
            style: Ne(r(a))
          }, [
            ge(i.$slots, "content", { value: r(s) }, () => [
              sn(L(r(s)), 1)
            ])
          ], 6), [
            [He, !i.hidden && (r(s) || i.isDot || i.$slots.content)]
          ])
        ]),
        _: 3
      }, 8, ["name"])
    ], 2));
  }
});
var Gi = /* @__PURE__ */ et(Hi, [["__file", "badge.vue"]]);
const Ui = Ln(Gi), Vi = _e({
  a11y: {
    type: Boolean,
    default: !0
  },
  locale: {
    type: D(Object)
  },
  size: _i,
  button: {
    type: D(Object)
  },
  experimentalFeatures: {
    type: D(Object)
  },
  keyboardNavigation: {
    type: Boolean,
    default: !0
  },
  message: {
    type: D(Object)
  },
  zIndex: Number,
  namespace: {
    type: String,
    default: "el"
  },
  ...ki
}), H = {};
$({
  name: "ElConfigProvider",
  props: Vi,
  setup(e, { slots: t }) {
    fe(() => e.message, (o) => {
      Object.assign(H, o ?? {});
    }, { immediate: !0, deep: !0 });
    const n = Pn(e);
    return () => ge(t, "default", { config: n?.value });
  }
});
const Rn = ["success", "info", "warning", "error"], M = Ai({
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
  appendTo: le ? document.body : void 0
}), qi = _e({
  customClass: {
    type: String,
    default: M.customClass
  },
  center: {
    type: Boolean,
    default: M.center
  },
  dangerouslyUseHTMLString: {
    type: Boolean,
    default: M.dangerouslyUseHTMLString
  },
  duration: {
    type: Number,
    default: M.duration
  },
  icon: {
    type: Dn,
    default: M.icon
  },
  id: {
    type: String,
    default: M.id
  },
  message: {
    type: D([
      String,
      Object,
      Function
    ]),
    default: M.message
  },
  onClose: {
    type: D(Function),
    default: M.onClose
  },
  showClose: {
    type: Boolean,
    default: M.showClose
  },
  type: {
    type: String,
    values: Rn,
    default: M.type
  },
  plain: {
    type: Boolean,
    default: M.plain
  },
  offset: {
    type: Number,
    default: M.offset
  },
  zIndex: {
    type: Number,
    default: M.zIndex
  },
  grouping: {
    type: Boolean,
    default: M.grouping
  },
  repeatNum: {
    type: Number,
    default: M.repeatNum
  }
}), Ki = {
  destroy: () => !0
}, G = co([]), Zi = (e) => {
  const t = G.findIndex((s) => s.id === e), n = G[t];
  let o;
  return t > 0 && (o = G[t - 1]), { current: n, prev: o };
}, Ji = (e) => {
  const { prev: t } = Zi(e);
  return t ? t.vm.exposed.bottom.value : 0;
}, Yi = (e, t) => G.findIndex((o) => o.id === e) > 0 ? 16 : t, Qi = $({
  name: "ElMessage"
}), Xi = /* @__PURE__ */ $({
  ...Qi,
  props: qi,
  emits: Ki,
  setup(e, { expose: t }) {
    const n = e, { Close: o } = Fi, { ns: s, zIndex: a } = Mn("message"), { currentZIndex: i, nextZIndex: c } = a, f = x(), v = x(!1), p = x(0);
    let y;
    const O = m(() => n.type ? n.type === "error" ? "danger" : n.type : "info"), b = m(() => {
      const C = n.type;
      return { [s.bm("icon", C)]: C && Ze[C] };
    }), A = m(() => n.icon || Ze[n.type] || ""), g = m(() => Ji(n.id)), w = m(() => Yi(n.id, n.offset) + g.value), I = m(() => p.value + w.value), Q = m(() => ({
      top: `${w.value}px`,
      zIndex: i.value
    }));
    function _() {
      n.duration !== 0 && ({ stop: y } = bn(() => {
        V();
      }, n.duration));
    }
    function j() {
      y?.();
    }
    function V() {
      v.value = !1;
    }
    function tt({ code: C }) {
      C === Be.esc && V();
    }
    return Ye(() => {
      _(), c(), v.value = !0;
    }), fe(() => n.repeatNum, () => {
      j(), _();
    }), Sn(document, "keydown", tt), ai(f, () => {
      p.value = f.value.getBoundingClientRect().height;
    }), t({
      visible: v,
      bottom: I,
      close: V
    }), (C, Le) => (S(), Z(gt, {
      name: r(s).b("fade"),
      onBeforeLeave: C.onClose,
      onAfterLeave: (ue) => C.$emit("destroy"),
      persisted: ""
    }, {
      default: te(() => [
        ne(d("div", {
          id: C.id,
          ref_key: "messageRef",
          ref: f,
          class: z([
            r(s).b(),
            { [r(s).m(C.type)]: C.type },
            r(s).is("center", C.center),
            r(s).is("closable", C.showClose),
            r(s).is("plain", C.plain),
            C.customClass
          ]),
          style: Ne(r(Q)),
          role: "alert",
          onMouseenter: j,
          onMouseleave: _
        }, [
          C.repeatNum > 1 ? (S(), Z(r(Ui), {
            key: 0,
            value: C.repeatNum,
            type: r(O),
            class: z(r(s).e("badge"))
          }, null, 8, ["value", "type", "class"])) : J("v-if", !0),
          r(A) ? (S(), Z(r(Ke), {
            key: 1,
            class: z([r(s).e("icon"), r(b)])
          }, {
            default: te(() => [
              (S(), Z(an(r(A))))
            ]),
            _: 1
          }, 8, ["class"])) : J("v-if", !0),
          ge(C.$slots, "default", {}, () => [
            C.dangerouslyUseHTMLString ? (S(), N(xe, { key: 1 }, [
              J(" Caution here, message could've been compromised, never use user's input as message "),
              d("p", {
                class: z(r(s).e("content")),
                innerHTML: C.message
              }, null, 10, ["innerHTML"])
            ], 2112)) : (S(), N("p", {
              key: 0,
              class: z(r(s).e("content"))
            }, L(C.message), 3))
          ]),
          C.showClose ? (S(), Z(r(Ke), {
            key: 2,
            class: z(r(s).e("closeBtn")),
            onClick: Ie(V, ["stop"])
          }, {
            default: te(() => [
              T(r(o))
            ]),
            _: 1
          }, 8, ["class", "onClick"])) : J("v-if", !0)
        ], 46, ["id"]), [
          [He, v.value]
        ])
      ]),
      _: 3
    }, 8, ["name", "onBeforeLeave", "onAfterLeave"]));
  }
});
var ea = /* @__PURE__ */ et(Xi, [["__file", "message.vue"]]);
let ta = 1;
const Wn = (e) => {
  const t = !e || se(e) || ze(e) || Me(e) ? { message: e } : e, n = {
    ...M,
    ...t
  };
  if (!n.appendTo)
    n.appendTo = document.body;
  else if (se(n.appendTo)) {
    let o = document.querySelector(n.appendTo);
    pt(o) || (o = document.body), n.appendTo = o;
  }
  return Ht(H.grouping) && !n.grouping && (n.grouping = H.grouping), ae(H.duration) && n.duration === 3e3 && (n.duration = H.duration), ae(H.offset) && n.offset === 16 && (n.offset = H.offset), Ht(H.showClose) && !n.showClose && (n.showClose = H.showClose), n;
}, na = (e) => {
  const t = G.indexOf(e);
  if (t === -1)
    return;
  G.splice(t, 1);
  const { handler: n } = e;
  n.close();
}, oa = ({ appendTo: e, ...t }, n) => {
  const o = `message_${ta++}`, s = t.onClose, a = document.createElement("div"), i = {
    ...t,
    id: o,
    onClose: () => {
      s?.(), na(p);
    },
    onDestroy: () => {
      Ge(null, a);
    }
  }, c = T(ea, i, Me(i.message) || ze(i.message) ? {
    default: Me(i.message) ? i.message : () => i.message
  } : null);
  c.appContext = n || ye._context, Ge(c, a), e.appendChild(a.firstElementChild);
  const f = c.component, p = {
    id: o,
    vnode: c,
    vm: f,
    handler: {
      close: () => {
        f.exposed.visible.value = !1;
      }
    },
    props: c.component.props
  };
  return p;
}, ye = (e = {}, t) => {
  if (!le)
    return { close: () => {
    } };
  const n = Wn(e);
  if (n.grouping && G.length) {
    const s = G.find(({ vnode: a }) => {
      var i;
      return ((i = a.props) == null ? void 0 : i.message) === n.message;
    });
    if (s)
      return s.props.repeatNum += 1, s.props.type = n.type, s.handler;
  }
  if (ae(H.max) && G.length >= H.max)
    return { close: () => {
    } };
  const o = oa(n, t);
  return G.push(o), o.handler;
};
Rn.forEach((e) => {
  ye[e] = (t = {}, n) => {
    const o = Wn(t);
    return ye({ ...o, type: e }, n);
  };
});
function sa(e) {
  for (const t of G)
    (!e || e === t.props.type) && t.handler.close();
}
ye.closeAll = sa;
ye._context = null;
const ia = $n(ye, "$message"), Fn = [
  "success",
  "info",
  "warning",
  "error"
], aa = _e({
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
    type: Dn
  },
  id: {
    type: String,
    default: ""
  },
  message: {
    type: D([
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
    type: D(Function),
    default: () => {
    }
  },
  onClose: {
    type: D(Function),
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
    values: [...Fn, ""],
    default: ""
  },
  zIndex: Number
}), ra = {
  destroy: () => !0
}, la = $({
  name: "ElNotification"
}), ua = /* @__PURE__ */ $({
  ...la,
  props: aa,
  emits: ra,
  setup(e, { expose: t }) {
    const n = e, { ns: o, zIndex: s } = Mn("notification"), { nextZIndex: a, currentZIndex: i } = s, { Close: c } = Wi, f = x(!1);
    let v;
    const p = m(() => {
      const _ = n.type;
      return _ && Ze[n.type] ? o.m(_) : "";
    }), y = m(() => n.type && Ze[n.type] || n.icon), O = m(() => n.position.endsWith("right") ? "right" : "left"), b = m(() => n.position.startsWith("top") ? "top" : "bottom"), A = m(() => {
      var _;
      return {
        [b.value]: `${n.offset}px`,
        zIndex: (_ = n.zIndex) != null ? _ : i.value
      };
    });
    function g() {
      n.duration > 0 && ({ stop: v } = bn(() => {
        f.value && I();
      }, n.duration));
    }
    function w() {
      v?.();
    }
    function I() {
      f.value = !1;
    }
    function Q({ code: _ }) {
      _ === Be.delete || _ === Be.backspace ? w() : _ === Be.esc ? f.value && I() : g();
    }
    return Ye(() => {
      g(), a(), f.value = !0;
    }), Sn(document, "keydown", Q), t({
      visible: f,
      close: I
    }), (_, j) => (S(), Z(gt, {
      name: r(o).b("fade"),
      onBeforeLeave: _.onClose,
      onAfterLeave: (V) => _.$emit("destroy"),
      persisted: ""
    }, {
      default: te(() => [
        ne(d("div", {
          id: _.id,
          class: z([r(o).b(), _.customClass, r(O)]),
          style: Ne(r(A)),
          role: "alert",
          onMouseenter: w,
          onMouseleave: g,
          onClick: _.onClick
        }, [
          r(y) ? (S(), Z(r(Ke), {
            key: 0,
            class: z([r(o).e("icon"), r(p)])
          }, {
            default: te(() => [
              (S(), Z(an(r(y))))
            ]),
            _: 1
          }, 8, ["class"])) : J("v-if", !0),
          d("div", {
            class: z(r(o).e("group"))
          }, [
            d("h2", {
              class: z(r(o).e("title")),
              textContent: L(_.title)
            }, null, 10, ["textContent"]),
            ne(d("div", {
              class: z(r(o).e("content")),
              style: Ne(_.title ? void 0 : { margin: 0 })
            }, [
              ge(_.$slots, "default", {}, () => [
                _.dangerouslyUseHTMLString ? (S(), N(xe, { key: 1 }, [
                  J(" Caution here, message could've been compromised, never use user's input as message "),
                  d("p", { innerHTML: _.message }, null, 8, ["innerHTML"])
                ], 2112)) : (S(), N("p", { key: 0 }, L(_.message), 1))
              ])
            ], 6), [
              [He, _.message]
            ]),
            _.showClose ? (S(), Z(r(Ke), {
              key: 0,
              class: z(r(o).e("closeBtn")),
              onClick: Ie(I, ["stop"])
            }, {
              default: te(() => [
                T(r(c))
              ]),
              _: 1
            }, 8, ["class", "onClick"])) : J("v-if", !0)
          ], 2)
        ], 46, ["id", "onClick"]), [
          [He, f.value]
        ])
      ]),
      _: 3
    }, 8, ["name", "onBeforeLeave", "onAfterLeave"]));
  }
});
var ca = /* @__PURE__ */ et(ua, [["__file", "notification.vue"]]);
const Je = {
  "top-left": [],
  "top-right": [],
  "bottom-left": [],
  "bottom-right": []
}, ft = 16;
let da = 1;
const me = function(e = {}, t) {
  if (!le)
    return { close: () => {
    } };
  (se(e) || ze(e)) && (e = { message: e });
  const n = e.position || "top-right";
  let o = e.offset || 0;
  Je[n].forEach(({ vm: p }) => {
    var y;
    o += (((y = p.el) == null ? void 0 : y.offsetHeight) || 0) + ft;
  }), o += ft;
  const s = `notification_${da++}`, a = e.onClose, i = {
    ...e,
    offset: o,
    id: s,
    onClose: () => {
      pa(s, n, a);
    }
  };
  let c = document.body;
  pt(e.appendTo) ? c = e.appendTo : se(e.appendTo) && (c = document.querySelector(e.appendTo)), pt(c) || (c = document.body);
  const f = document.createElement("div"), v = T(ca, i, Me(i.message) ? i.message : ze(i.message) ? () => i.message : null);
  return v.appContext = _n(t) ? me._context : t, v.props.onDestroy = () => {
    Ge(null, f);
  }, Ge(v, f), Je[n].push({ vm: v }), c.appendChild(f.firstElementChild), {
    close: () => {
      v.component.exposed.visible.value = !1;
    }
  };
};
Fn.forEach((e) => {
  me[e] = (t = {}, n) => ((se(t) || ze(t)) && (t = {
    message: t
  }), me({ ...t, type: e }, n));
});
function pa(e, t, n) {
  const o = Je[t], s = o.findIndex(({ vm: v }) => {
    var p;
    return ((p = v.component) == null ? void 0 : p.props.id) === e;
  });
  if (s === -1)
    return;
  const { vm: a } = o[s];
  if (!a)
    return;
  n?.(a);
  const i = a.el.offsetHeight, c = t.split("-")[0];
  o.splice(s, 1);
  const f = o.length;
  if (!(f < 1))
    for (let v = s; v < f; v++) {
      const { el: p, component: y } = o[v].vm, O = Number.parseInt(p.style[c], 10) - i - ft;
      y.props.offset = O;
    }
}
function ha() {
  for (const e of Object.values(Je))
    e.forEach(({ vm: t }) => {
      t.component.exposed.visible.value = !1;
    });
}
me.closeAll = ha;
me._context = null;
const fa = $n(me, "$notify"), rt = {
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
      duration: s = 3e3,
      showClose: a = !1
    } = e;
    o === "center" ? ia({
      message: t,
      type: n,
      duration: s,
      showClose: a,
      grouping: !0
    }) : fa({
      message: t,
      type: n,
      position: o,
      duration: s,
      showClose: !1,
      // 角落通知统一不显示关闭按钮，更简洁
      title: "",
      offset: 50,
      // 距离顶部/底部 50px，避免遮挡窗口控制按钮
      customClass: "custom-notification"
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
}, lt = "[screen-recorder]", ga = (e) => {
  if (e)
    return JSON.parse(JSON.stringify(e));
}, U = async (e, t) => {
  const n = performance.now(), o = ga(t);
  console.info(`${lt} invoke:start ${e}`, o ?? "");
  try {
    const s = await l(e, t);
    return console.info(`${lt} invoke:success ${e}`, {
      elapsedMs: Math.round(performance.now() - n),
      result: s
    }), s;
  } catch (s) {
    throw console.error(`${lt} invoke:error ${e}`, {
      elapsedMs: Math.round(performance.now() - n),
      error: s
    }), s;
  }
}, va = () => U("screen_recorder_get_ffmpeg_status"), pe = (e) => U("screen_recorder_set_capture_excluded", { excluded: e }), Se = (e) => U("screen_recorder_set_passthrough_region", { region: e }), ya = () => U("screen_recorder_pick_target_window"), ma = () => U("screen_recorder_close_window"), wa = (e, t) => U("screen_recorder_start_recording", {
  region: e,
  fps: t.fps,
  quality: t.quality,
  audio: t.format === "mp4"
}), _a = () => U("screen_recorder_pause_recording"), ba = (e, t) => U("screen_recorder_resume_recording", {
  region: e,
  fps: t.fps,
  quality: t.quality,
  audio: t.format === "mp4"
}), Ca = () => U("screen_recorder_stop_recording"), ka = () => U("screen_recorder_cancel_recording"), Sa = (e) => U("screen_recorder_export_recording", {
  format: e.format,
  fps: e.fps,
  quality: e.quality,
  savePath: e.savePath
}), tn = () => ({
  format: "mp4",
  fps: 30,
  quality: "standard",
  savePath: "",
  audio: !0
}), P = "[screen-recorder]";
function Oa() {
  const e = x("selecting"), t = x(tn()), n = x(null), o = x(null), s = x(""), a = x(null), i = x(0), c = x(0), f = x(null), v = () => {
    c.value = e.value === "recording" && a.value !== null ? i.value + Date.now() - a.value : i.value;
  }, p = () => {
    f.value !== null && (window.clearInterval(f.value), f.value = null);
  }, y = () => {
    p(), v(), f.value = window.setInterval(() => {
      v();
    }, 250);
  }, O = async () => (console.info(`${P} refresh ffmpeg status`), n.value = await va(), console.info(`${P} ffmpeg status`, n.value), n.value), b = async (j) => {
    s.value = "", o.value = null, console.info(`${P} begin requested`, { region: j, settings: t.value });
    const V = n.value ?? await O();
    if (!V.available)
      throw new Error(V.message || "FFmpeg unavailable");
    await wa(j, t.value), e.value = "recording", i.value = 0, c.value = 0, a.value = Date.now(), y(), console.info(`${P} recording started`, { status: e.value });
  }, A = async () => {
    e.value === "recording" && (console.info(`${P} pause requested`, { elapsedMs: c.value }), v(), i.value = c.value, a.value = null, p(), await _a(), e.value = "paused", console.info(`${P} recording paused`, { accumulatedMs: i.value }));
  }, g = async (j) => {
    e.value === "paused" && (console.info(`${P} resume requested`, { region: j, settings: t.value }), await ba(j, t.value), e.value = "recording", a.value = Date.now(), y(), console.info(`${P} recording resumed`));
  }, w = async () => {
    e.value !== "recording" && e.value !== "paused" || (console.info(`${P} stop requested`, { status: e.value, elapsedMs: c.value }), v(), i.value = c.value, a.value = null, p(), await Ca(), e.value = "exporting", console.info(`${P} recording stopped`, { accumulatedMs: i.value }));
  }, I = async () => (console.info(`${P} export requested`, { settings: t.value }), e.value = "exporting", o.value = await Sa(t.value), e.value = "completed", console.info(`${P} export completed`, o.value), o.value), Q = async () => {
    console.info(`${P} cancel requested`, { status: e.value, elapsedMs: c.value }), p(), await ka(), e.value = "selecting", a.value = null, i.value = 0, c.value = 0, o.value = null, console.info(`${P} canceled`);
  }, _ = () => {
    console.info(`${P} reset session`), e.value = "selecting", a.value = null, i.value = 0, c.value = 0, o.value = null, s.value = "", t.value = tn();
  };
  return rn(() => {
    p();
  }), {
    status: e,
    settings: t,
    ffmpegStatus: n,
    result: o,
    errorMessage: s,
    elapsedMs: c,
    refreshFfmpegStatus: O,
    begin: b,
    pause: A,
    resume: g,
    stop: w,
    exportFile: I,
    cancel: Q,
    reset: _
  };
}
const xa = { class: "screen-recorder" }, Ia = ["onMousedown"], Ta = { class: "window-title" }, Na = { class: "capture-viewport" }, za = { class: "capture-frame" }, Ma = { class: "control-strip" }, Pa = { class: "control-group control-group--tools" }, La = { class: "tool-pill" }, $a = ["title", "disabled"], Ea = { class: "select-field" }, Da = ["disabled"], Ra = ["disabled"], Wa = ["disabled"], Fa = { value: "high" }, Aa = { value: "standard" }, ja = { value: "small" }, Ba = { class: "dimension-group optional-size" }, Ha = { class: "dimension" }, Ga = ["value"], Ua = { class: "dimension" }, Va = ["value"], qa = { class: "control-group control-group--actions" }, Ka = { class: "time" }, Za = {
  key: 1,
  class: "save-status"
}, Ja = ["title"], Ya = ["disabled"], Qa = {
  key: 0,
  class: "warning"
}, Y = "[screen-recorder]", Fe = 80, Xa = 468, er = 300, nn = 420, on = 260, tr = 38, nr = 60, ut = 8, ct = 1, or = /* @__PURE__ */ $({
  __name: "index",
  setup(e) {
    const t = cn(), n = x(null), o = x({ width: 0, height: 0 }), s = x(0), a = x(!1);
    let i = null, c = null, f = null;
    const v = [
      { className: "n", direction: "North" },
      { className: "ne", direction: "NorthEast" },
      { className: "e", direction: "East" },
      { className: "se", direction: "SouthEast" },
      { className: "s", direction: "South" },
      { className: "sw", direction: "SouthWest" },
      { className: "w", direction: "West" },
      { className: "nw", direction: "NorthWest" }
    ], {
      status: p,
      settings: y,
      ffmpegStatus: O,
      result: b,
      elapsedMs: A,
      refreshFfmpegStatus: g,
      begin: w,
      pause: I,
      resume: Q,
      stop: _,
      exportFile: j,
      cancel: V,
      reset: tt
    } = Oa(), C = m(() => p.value === "recording" || p.value === "paused" || p.value === "exporting"), Le = m(() => y.value.audio && y.value.format === "mp4"), ue = m(() => Le.value && p.value === "recording"), An = m(() => {
      const h = ue.value && !a.value ? s.value : 0, u = (k, K) => Math.max(0.18, Math.min(1, k + h * K)).toFixed(3);
      return {
        "--bar-1": u(0.28, 0.64),
        "--bar-2": u(0.42, 0.78),
        "--bar-3": u(0.34, 0.94),
        "--bar-4": u(0.22, 0.72)
      };
    }), jn = m(() => {
      if (y.value.format === "gif")
        return "GIF 不支持音频";
      if (a.value && y.value.audio)
        return "音频已开启；实时音量动画不可用不影响导出系统声音";
      if (b.value?.audioDevice)
        return `已录制音频：${b.value.audioDevice}`;
      if (b.value && !b.value.hasAudio)
        return "未检测到可用音频设备，导出视频无声音";
      if (O.value?.available && !O.value.systemAudioAvailable) {
        const h = O.value.audioDevices?.join("、") || "无";
        return y.value.audio ? `未发现系统声音/立体声混音设备；不会自动录制麦克风。当前可用音频设备：${h}` : "录制音频已关闭";
      }
      return y.value.audio ? "录制音频已开启。系统声音将通过 WASAPI Loopback 捕获" : "录制音频已关闭";
    }), Bn = m(() => {
      const h = Math.floor(A.value / 1e3), u = Math.floor(h / 60).toString().padStart(2, "0"), k = (h % 60).toString().padStart(2, "0");
      return `${u}:${k}`;
    }), be = async (h) => {
      try {
        await h();
      } catch (u) {
        console.error(`${Y} action failed`, u), rt.msg(u?.message || String(u), "error");
      }
    }, Ot = (h) => Math.max(2, Math.floor(Math.round(h) / 2) * 2), nt = async () => {
      const h = n.value;
      if (!h)
        throw new Error("录制视口尚未准备好");
      const u = h.getBoundingClientRect(), k = await t.scaleFactor(), K = await t.innerPosition(), Ce = Ot(u.width * k), ce = Ot(u.height * k);
      if (Ce < Fe || ce < Fe)
        throw new Error("录制区域太小，请放大录制窗口");
      const De = {
        x: u.left,
        y: u.top,
        width: Ce / k,
        height: ce / k,
        screenX: Math.round(K.x + u.left * k),
        screenY: Math.round(K.y + u.top * k),
        physicalWidth: Ce,
        physicalHeight: ce,
        scale: k
      };
      return console.info(`${Y} capture region`, De), De;
    }, R = async () => {
      try {
        const h = await nt();
        o.value = {
          width: h.physicalWidth,
          height: h.physicalHeight
        }, await Se({
          x: Math.round(h.x * h.scale),
          y: Math.round(h.y * h.scale),
          width: h.physicalWidth,
          height: h.physicalHeight
        }).catch(() => {
        });
      } catch {
        o.value = { width: 0, height: 0 }, await Se(null).catch(() => {
        });
      }
    }, $e = async () => {
      await Se(null).catch(() => {
      });
    }, xt = () => {
      window.setTimeout(() => {
        R();
      }, 120);
    }, It = async () => {
      f?.(), f = null, s.value = 0;
    }, Ee = async () => {
      if (!(!Le.value || f))
        try {
          console.info(`${Y} backend audio meter listening`), f = await vt("screen_recorder_audio_level", (h) => {
            if (!ue.value) {
              s.value = 0;
              return;
            }
            const u = Math.max(0, Math.min(1, Number(h.payload?.level ?? 0)));
            s.value = s.value * 0.38 + u * 0.62;
          }), a.value = !1;
        } catch (h) {
          console.error(`${Y} audio meter failed`, h), a.value = !0;
        }
    }, Hn = async (h) => {
      h.button !== 0 || C.value || (await $e(), await t.startDragging().catch((u) => {
        rt.msg(u?.message || String(u), "error");
      }), xt());
    }, Gn = async (h) => {
      C.value || (await $e(), await t.startResizeDragging(h).catch((u) => {
        rt.msg(u?.message || String(u), "error");
      }), xt());
    }, Un = () => be(async () => {
      console.info(`${Y} handle start`), await Ee(), await pe(!0).catch(() => {
      }), await R(), await w(await nt());
    }), Vn = () => be(async () => {
      console.info(`${Y} handle pause`), await I();
    }), qn = () => be(async () => {
      console.info(`${Y} handle resume`), await Q(await nt());
    }), Kn = () => be(async () => {
      console.info(`${Y} handle stop/export`), await _(), s.value = 0, await j(), await R(), await pe(!1).catch(() => {
      });
    }), Zn = () => {
      $e(), tt(), p.value = "ready", b.value = null, pe(!0).catch(() => {
      }), t.setSize(new Ue(Xa, er)), Oe(R), Ee();
    }, Jn = async (h) => {
      const u = await Co(h.screenX, h.screenY), k = u?.scaleFactor || await t.scaleFactor(), K = Math.round((ut + ct) * k), Ce = K, ce = Math.round((tr + ut + ct) * k), De = Math.round((nr + ut + ct) * k), to = Math.round(nn * k), no = Math.round(on * k), W = {
        x: h.screenX - K,
        y: h.screenY - ce,
        width: Math.max(to, h.physicalWidth + K + Ce),
        height: Math.max(no, h.physicalHeight + ce + De)
      }, B = u ? {
        x: u.position.x,
        y: u.position.y,
        width: u.size.width,
        height: u.size.height
      } : null, Re = (() => {
        if (!B) return W;
        const zt = B.x + B.width, Mt = B.y + B.height;
        if (W.x >= B.x && W.y >= B.y && W.x + W.width <= zt && W.y + W.height <= Mt) return W;
        const Pt = Math.min(W.width, B.width), Lt = Math.min(W.height, B.height);
        return {
          x: Math.min(Math.max(W.x, B.x), zt - Pt),
          y: Math.min(Math.max(W.y, B.y), Mt - Lt),
          width: Pt,
          height: Lt
        };
      })();
      await t.setPosition(new q(Re.x, Re.y)), await t.setSize(new oe(Re.width, Re.height)), await Oe(), await R();
    }, Yn = () => be(async () => {
      await $e();
      const h = await ya();
      await Jn(h);
    }), Qn = async () => {
      await t.minimize();
    }, Tt = async () => {
      try {
        await V(), await Se(null).catch(() => {
        }), await pe(!1).catch(() => {
        });
      } catch {
      }
      await ma();
    }, Xn = async () => {
      b.value && (await R(), await l("open_file_with_default_app", { filePath: b.value.path }));
    }, eo = async () => {
      b.value && (await R(), await l("show_file_in_folder", { filePath: b.value.path }));
    }, Nt = (h) => {
      h.key === "Escape" && (h.preventDefault(), Tt());
    };
    return Ye(async () => {
      p.value = "ready", await t.setMinSize(new Ue(nn, on)).catch(() => {
      }), await pe(!0).catch(() => {
      }), await g().catch(() => {
      }), await Oe(), await R(), await Ee(), await Oe(), await t.emit("screen_recorder_ready"), n.value && (i = new ResizeObserver(() => {
        R();
      }), i.observe(n.value)), c = await t.onMoved(() => {
        R();
      }).catch(() => null), window.addEventListener("resize", R), window.addEventListener("keydown", Nt);
    }), fe(Le, (h) => {
      h ? Ee() : It();
    }), fe(p, (h) => {
      h !== "recording" && (s.value = 0);
    }), rn(() => {
      i?.disconnect(), c?.(), window.removeEventListener("resize", R), window.removeEventListener("keydown", Nt), Se(null).catch(() => {
      }), pe(!1).catch(() => {
      }), It();
    }), (h, u) => (S(), N("div", xa, [
      d(
        "div",
        {
          class: z(["recorder-shell", { recording: r(p) === "recording", paused: r(p) === "paused" }])
        },
        [
          (S(), N(
            xe,
            null,
            po(v, (k) => d("span", {
              key: k.className,
              class: z(["resize-zone", k.className]),
              onMousedown: Ie((K) => Gn(k.direction), ["prevent"])
            }, null, 42, Ia)),
            64
            /* STABLE_FRAGMENT */
          )),
          d(
            "header",
            {
              class: "title-bar",
              onMousedown: Hn
            },
            [
              d(
                "span",
                Ta,
                L(h.$t("screenRecorder.title") || "区域录制"),
                1
                /* TEXT */
              ),
              d(
                "div",
                {
                  class: "window-actions",
                  onMousedown: u[0] || (u[0] = Ie(() => {
                  }, ["stop"]))
                },
                [
                  d("button", {
                    class: "title-button title-button--window",
                    title: "最小化",
                    onClick: Qn
                  }, [
                    T(r(To), {
                      class: "title-icon",
                      theme: "outline",
                      size: "20",
                      strokeWidth: 3,
                      strokeLinecap: "butt"
                    })
                  ]),
                  d("button", {
                    class: "title-button title-button--close",
                    title: "关闭",
                    onClick: Tt
                  }, [
                    T(r(Io), {
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
            32
            /* NEED_HYDRATION */
          ),
          d("main", Na, [
            u[9] || (u[9] = d(
              "span",
              { class: "viewport-mask top" },
              null,
              -1
              /* HOISTED */
            )),
            u[10] || (u[10] = d(
              "span",
              { class: "viewport-mask right" },
              null,
              -1
              /* HOISTED */
            )),
            u[11] || (u[11] = d(
              "span",
              { class: "viewport-mask bottom" },
              null,
              -1
              /* HOISTED */
            )),
            u[12] || (u[12] = d(
              "span",
              { class: "viewport-mask left" },
              null,
              -1
              /* HOISTED */
            )),
            d("div", za, [
              d(
                "div",
                {
                  ref_key: "captureHoleRef",
                  ref: n,
                  class: "capture-hole"
                },
                null,
                512
                /* NEED_PATCH */
              ),
              u[5] || (u[5] = d(
                "span",
                { class: "viewport-border top" },
                null,
                -1
                /* HOISTED */
              )),
              u[6] || (u[6] = d(
                "span",
                { class: "viewport-border right" },
                null,
                -1
                /* HOISTED */
              )),
              u[7] || (u[7] = d(
                "span",
                { class: "viewport-border bottom" },
                null,
                -1
                /* HOISTED */
              )),
              u[8] || (u[8] = d(
                "span",
                { class: "viewport-border left" },
                null,
                -1
                /* HOISTED */
              ))
            ])
          ]),
          d("footer", Ma, [
            d("div", Pa, [
              d("div", La, [
                r(p) === "ready" || r(p) === "completed" ? (S(), N(
                  "button",
                  {
                    key: 0,
                    class: "icon-control snap-control",
                    title: "拖到目标窗口并松开以对齐",
                    "aria-label": "对齐目标窗口",
                    onMousedown: Ie(Yn, ["prevent"])
                  },
                  [
                    T(r(No), {
                      theme: "outline",
                      size: "18",
                      strokeWidth: 3,
                      strokeLinecap: "butt"
                    })
                  ],
                  32
                  /* NEED_HYDRATION */
                )) : J("v-if", !0),
                d("button", {
                  class: z(["audio-meter", { active: ue.value && s.value > 0.03, metering: ue.value && !a.value, muted: !ue.value || a.value }]),
                  title: jn.value,
                  "aria-label": "系统声音录制状态",
                  disabled: r(p) === "exporting" || r(y).format === "gif"
                }, [
                  d(
                    "span",
                    {
                      class: "audio-bars",
                      style: Ne(An.value)
                    },
                    u[13] || (u[13] = [
                      d(
                        "i",
                        null,
                        null,
                        -1
                        /* HOISTED */
                      ),
                      d(
                        "i",
                        null,
                        null,
                        -1
                        /* HOISTED */
                      ),
                      d(
                        "i",
                        null,
                        null,
                        -1
                        /* HOISTED */
                      ),
                      d(
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
                ], 10, $a)
              ]),
              d("label", Ea, [
                ne(d("select", {
                  "onUpdate:modelValue": u[1] || (u[1] = (k) => r(y).fps = k),
                  disabled: C.value
                }, u[14] || (u[14] = [
                  d(
                    "option",
                    { value: 15 },
                    "15",
                    -1
                    /* HOISTED */
                  ),
                  d(
                    "option",
                    { value: 24 },
                    "24",
                    -1
                    /* HOISTED */
                  ),
                  d(
                    "option",
                    { value: 30 },
                    "30",
                    -1
                    /* HOISTED */
                  ),
                  d(
                    "option",
                    { value: 60 },
                    "60",
                    -1
                    /* HOISTED */
                  )
                ]), 8, Da), [
                  [ot, r(y).fps]
                ]),
                u[15] || (u[15] = d(
                  "span",
                  { class: "unit" },
                  "fps",
                  -1
                  /* HOISTED */
                ))
              ]),
              ne(d("select", {
                "onUpdate:modelValue": u[2] || (u[2] = (k) => r(y).format = k),
                class: "format-select optional-format",
                disabled: C.value
              }, u[16] || (u[16] = [
                d(
                  "option",
                  { value: "mp4" },
                  "MP4",
                  -1
                  /* HOISTED */
                ),
                d(
                  "option",
                  { value: "gif" },
                  "GIF",
                  -1
                  /* HOISTED */
                )
              ]), 8, Ra), [
                [ot, r(y).format]
              ]),
              ne(d("select", {
                "onUpdate:modelValue": u[3] || (u[3] = (k) => r(y).quality = k),
                class: "quality-select optional-quality",
                disabled: C.value
              }, [
                d(
                  "option",
                  Fa,
                  L(h.$t("screenRecorder.qualityHigh")),
                  1
                  /* TEXT */
                ),
                d(
                  "option",
                  Aa,
                  L(h.$t("screenRecorder.qualityStandard")),
                  1
                  /* TEXT */
                ),
                d(
                  "option",
                  ja,
                  L(h.$t("screenRecorder.qualitySmall")),
                  1
                  /* TEXT */
                )
              ], 8, Wa), [
                [ot, r(y).quality]
              ]),
              d("div", Ba, [
                d("label", Ha, [
                  d("input", {
                    value: o.value.width,
                    readonly: ""
                  }, null, 8, Ga)
                ]),
                u[17] || (u[17] = d(
                  "span",
                  { class: "multiply" },
                  "×",
                  -1
                  /* HOISTED */
                )),
                d("label", Ua, [
                  d("input", {
                    value: o.value.height,
                    readonly: ""
                  }, null, 8, Va)
                ]),
                u[18] || (u[18] = d(
                  "span",
                  { class: "unit" },
                  "px",
                  -1
                  /* HOISTED */
                ))
              ])
            ]),
            d("div", qa, [
              r(p) === "recording" || r(p) === "paused" ? (S(), N(
                xe,
                { key: 0 },
                [
                  d(
                    "span",
                    Ka,
                    L(Bn.value),
                    1
                    /* TEXT */
                  ),
                  d(
                    "button",
                    {
                      class: "control-button",
                      onClick: u[4] || (u[4] = (k) => r(p) === "paused" ? qn() : Vn())
                    },
                    L(r(p) === "paused" ? h.$t("screenRecorder.resume") : h.$t("screenRecorder.pause")),
                    1
                    /* TEXT */
                  ),
                  d(
                    "button",
                    {
                      class: "control-button danger",
                      onClick: Kn
                    },
                    L(h.$t("screenRecorder.stop")),
                    1
                    /* TEXT */
                  )
                ],
                64
                /* STABLE_FRAGMENT */
              )) : r(p) === "exporting" ? (S(), N(
                "span",
                Za,
                L(h.$t("screenRecorder.exporting") || "正在导出..."),
                1
                /* TEXT */
              )) : r(p) === "completed" && r(b) ? (S(), N(
                xe,
                { key: 2 },
                [
                  d("span", {
                    class: "save-status optional-save-status",
                    title: r(b).path
                  }, L(r(b).hasAudio ? "已保存·有声" : "已保存·无声"), 9, Ja),
                  d("button", {
                    class: "control-button",
                    title: "打开文件",
                    onClick: Xn
                  }, "打开"),
                  d("button", {
                    class: "control-button",
                    title: "打开所在文件夹",
                    onClick: eo
                  }, "文件夹"),
                  d("button", {
                    class: "control-button",
                    title: "重新录制",
                    onClick: Zn
                  }, "重录")
                ],
                64
                /* STABLE_FRAGMENT */
              )) : (S(), N("button", {
                key: 3,
                class: "record-button",
                disabled: r(O)?.available === !1 || o.value.width < Fe || o.value.height < Fe,
                onClick: Un
              }, [
                u[19] || (u[19] = d(
                  "span",
                  null,
                  null,
                  -1
                  /* HOISTED */
                )),
                sn(
                  " " + L(h.$t("screenRecorder.start")),
                  1
                  /* TEXT */
                )
              ], 8, Ya))
            ])
          ])
        ],
        2
        /* CLASS */
      ),
      r(O) && !r(O).available ? (S(), N(
        "p",
        Qa,
        L(r(O).message || h.$t("screenRecorder.ffmpegMissing")),
        1
        /* TEXT */
      )) : J("v-if", !0)
    ]));
  }
}), sr = (e, t) => {
  const n = e.__vccOpts || e;
  for (const [o, s] of t)
    n[o] = s;
  return n;
}, ir = /* @__PURE__ */ sr(or, [["__scopeId", "data-v-a140f8ab"]]), ar = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: ir
}, Symbol.toStringTag, { value: "Module" }));
export {
  ur as activate
};
