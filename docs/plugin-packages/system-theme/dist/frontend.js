import * as Cr from "vue";
import { defineAsyncComponent as Zi, hasInjectionContext as gc, inject as fe, ref as x, reactive as wn, effectScope as yc, isRef as io, isReactive as qi, toRaw as Ji, getCurrentScope as Xi, onScopeDispose as Qi, watch as Q, nextTick as Se, toRefs as rr, markRaw as bc, computed as P, createVNode as z, shallowRef as dn, onMounted as Pe, onUnmounted as ls, defineComponent as q, h as el, Text as tl, Fragment as ft, getCurrentInstance as Ke, unref as c, watchEffect as nl, readonly as us, warn as _c, provide as Rt, createElementBlock as G, openBlock as R, mergeProps as Dn, renderSlot as ae, createElementVNode as O, toRef as Ut, useAttrs as wc, useSlots as Cc, normalizeStyle as Ue, normalizeClass as j, createCommentVNode as U, createBlock as ee, withCtx as ne, resolveDynamicComponent as It, withModifiers as He, toDisplayString as V, onBeforeUnmount as Ft, Transition as Gn, withDirectives as Oe, vShow as qt, onActivated as Ec, onUpdated as Sc, cloneVNode as Tc, Comment as kc, Teleport as Oc, onBeforeMount as Lc, onDeactivated as Ic, createTextVNode as jt, resolveComponent as gn, resolveDirective as Pc, toHandlerKey as Ac, renderList as Qs, withKeys as qn, vModelText as Fr, shallowReactive as Nc, isVNode as lo, render as Vo, vModelRadio as Ln } from "vue";
const g2 = (e) => {
  e.registerRoute({
    target: "layout",
    path: "/dark-mode",
    name: "DarkMode",
    component: Zi(() => Promise.resolve().then(() => Uw))
  }), e.registerWindowShortcut({
    label: "dark_mode"
  });
};
/*!
 * pinia v2.3.1
 * (c) 2025 Eduardo San Martin Morote
 * @license MIT
 */
let ol;
const cs = (e) => ol = e, Mc = (
  /* istanbul ignore next */
  Symbol()
);
function xr(e) {
  return e && typeof e == "object" && Object.prototype.toString.call(e) === "[object Object]" && typeof e.toJSON != "function";
}
var eo;
(function(e) {
  e.direct = "direct", e.patchObject = "patch object", e.patchFunction = "patch function";
})(eo || (eo = {}));
const rl = () => {
};
function ea(e, t, n, o = rl) {
  e.push(t);
  const r = () => {
    const s = e.indexOf(t);
    s > -1 && (e.splice(s, 1), o());
  };
  return !n && Xi() && Qi(r), r;
}
function In(e, ...t) {
  e.slice().forEach((n) => {
    n(...t);
  });
}
const Rc = (e) => e(), ta = Symbol(), Er = Symbol();
function zr(e, t) {
  e instanceof Map && t instanceof Map ? t.forEach((n, o) => e.set(o, n)) : e instanceof Set && t instanceof Set && t.forEach(e.add, e);
  for (const n in t) {
    if (!t.hasOwnProperty(n))
      continue;
    const o = t[n], r = e[n];
    xr(r) && xr(o) && e.hasOwnProperty(n) && !io(o) && !qi(o) ? e[n] = zr(r, o) : e[n] = o;
  }
  return e;
}
const $c = (
  /* istanbul ignore next */
  Symbol()
);
function Dc(e) {
  return !xr(e) || !e.hasOwnProperty($c);
}
const { assign: on } = Object;
function Fc(e) {
  return !!(io(e) && e.effect);
}
function xc(e, t, n, o) {
  const { state: r, actions: s, getters: a } = t, i = n.state.value[e];
  let l;
  function u() {
    i || (n.state.value[e] = r ? r() : {});
    const f = rr(n.state.value[e]);
    return on(f, s, Object.keys(a || {}).reduce((p, m) => (p[m] = bc(P(() => {
      cs(n);
      const g = n._s.get(e);
      return a[m].call(g, g);
    })), p), {}));
  }
  return l = sl(e, u, t, n, o, !0), l;
}
function sl(e, t, n = {}, o, r, s) {
  let a;
  const i = on({ actions: {} }, n), l = { deep: !0 };
  let u, f, p = [], m = [], g;
  const h = o.state.value[e];
  !s && !h && (o.state.value[e] = {}), x({});
  let v;
  function w($) {
    let C;
    u = f = !1, typeof $ == "function" ? ($(o.state.value[e]), C = {
      type: eo.patchFunction,
      storeId: e,
      events: g
    }) : (zr(o.state.value[e], $), C = {
      type: eo.patchObject,
      payload: $,
      storeId: e,
      events: g
    });
    const D = v = Symbol();
    Se().then(() => {
      v === D && (u = !0);
    }), f = !0, In(p, C, o.state.value[e]);
  }
  const d = s ? function() {
    const { state: C } = n, D = C ? C() : {};
    this.$patch((K) => {
      on(K, D);
    });
  } : (
    /* istanbul ignore next */
    rl
  );
  function E() {
    a.stop(), p = [], m = [], o._s.delete(e);
  }
  const L = ($, C = "") => {
    if (ta in $)
      return $[Er] = C, $;
    const D = function() {
      cs(o);
      const K = Array.from(arguments), Y = [], se = [];
      function we(B) {
        Y.push(B);
      }
      function me(B) {
        se.push(B);
      }
      In(m, {
        args: K,
        name: D[Er],
        store: T,
        after: we,
        onError: me
      });
      let oe;
      try {
        oe = $.apply(this && this.$id === e ? this : T, K);
      } catch (B) {
        throw In(se, B), B;
      }
      return oe instanceof Promise ? oe.then((B) => (In(Y, B), B)).catch((B) => (In(se, B), Promise.reject(B))) : (In(Y, oe), oe);
    };
    return D[ta] = !0, D[Er] = C, D;
  }, S = {
    _p: o,
    // _s: scope,
    $id: e,
    $onAction: ea.bind(null, m),
    $patch: w,
    $reset: d,
    $subscribe($, C = {}) {
      const D = ea(p, $, C.detached, () => K()), K = a.run(() => Q(() => o.state.value[e], (Y) => {
        (C.flush === "sync" ? f : u) && $({
          storeId: e,
          type: eo.direct,
          events: g
        }, Y);
      }, on({}, l, C)));
      return D;
    },
    $dispose: E
  }, T = wn(S);
  o._s.set(e, T);
  const k = (o._a && o._a.runWithContext || Rc)(() => o._e.run(() => (a = yc()).run(() => t({ action: L }))));
  for (const $ in k) {
    const C = k[$];
    if (io(C) && !Fc(C) || qi(C))
      s || (h && Dc(C) && (io(C) ? C.value = h[$] : zr(C, h[$])), o.state.value[e][$] = C);
    else if (typeof C == "function") {
      const D = L(C, $);
      k[$] = D, i.actions[$] = C;
    }
  }
  return on(T, k), on(Ji(T), k), Object.defineProperty(T, "$state", {
    get: () => o.state.value[e],
    set: ($) => {
      w((C) => {
        on(C, $);
      });
    }
  }), o._p.forEach(($) => {
    on(T, a.run(() => $({
      store: T,
      app: o._a,
      pinia: o,
      options: i
    })));
  }), h && s && n.hydrate && n.hydrate(T.$state, h), u = !0, f = !0, T;
}
/*! #__NO_SIDE_EFFECTS__ */
// @__NO_SIDE_EFFECTS__
function zc(e, t, n) {
  let o, r;
  const s = typeof t == "function";
  typeof e == "string" ? (o = e, r = s ? n : t) : (r = e, o = e.id);
  function a(i, l) {
    const u = gc();
    return i = // in test mode, ignore the argument provided as we can always retrieve a
    // pinia instance with getActivePinia()
    i || (u ? fe(Mc, null) : null), i && cs(i), i = ol, i._s.has(o) || (s ? sl(o, t, r, i) : xc(o, r, i)), i._s.get(o);
  }
  return a.$id = o, a;
}
function Bc(e, t, n, o) {
  if (typeof t == "function" ? e !== t || !0 : !t.has(e)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
  return n === "m" ? o : n === "a" ? o.call(e) : o ? o.value : t.get(e);
}
function Wc(e, t, n, o, r) {
  if (typeof t == "function" ? e !== t || !0 : !t.has(e)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
  return t.set(e, n), n;
}
var xo;
const ht = "__TAURI_TO_IPC_KEY__";
function jc(e, t = !1) {
  return window.__TAURI_INTERNALS__.transformCallback(e, t);
}
async function F(e, t = {}, n) {
  return window.__TAURI_INTERNALS__.invoke(e, t, n);
}
class Vc {
  get rid() {
    return Bc(this, xo, "f");
  }
  constructor(t) {
    xo.set(this, void 0), Wc(this, xo, t);
  }
  /**
   * Destroys and cleans up this resource from memory.
   * **You should not call any method on this object anymore and should drop any reference to it.**
   */
  async close() {
    return F("plugin:resources|close", {
      rid: this.rid
    });
  }
}
xo = /* @__PURE__ */ new WeakMap();
const Ve = {
  info: (e, t, ...n) => {
    F("frontend_log", {
      level: "info",
      message: e,
      data: t === void 0 ? null : Sr(t)
    }).catch(() => {
    });
  },
  error: (e, t) => {
    F("frontend_log", {
      level: "error",
      message: e,
      data: t === void 0 ? null : Sr(t)
    }).catch(() => {
    });
  },
  warn: (e, t) => {
    F("frontend_log", {
      level: "warn",
      message: e,
      data: t === void 0 ? null : Sr(t)
    }).catch(() => {
    });
  },
  // 调试日志 - 只在开发模式或调试模式下输出
  debug: (e, t) => {
  }
};
function Sr(e) {
  if (e instanceof Error)
    return `${e.name}: ${e.message}
${e.stack || ""}`.trim();
  if (typeof e == "string")
    return e;
  try {
    return JSON.stringify(e, null, 2);
  } catch {
    return String(e);
  }
}
var rt;
(function(e) {
  e.WINDOW_RESIZED = "tauri://resize", e.WINDOW_MOVED = "tauri://move", e.WINDOW_CLOSE_REQUESTED = "tauri://close-requested", e.WINDOW_DESTROYED = "tauri://destroyed", e.WINDOW_FOCUS = "tauri://focus", e.WINDOW_BLUR = "tauri://blur", e.WINDOW_SCALE_FACTOR_CHANGED = "tauri://scale-change", e.WINDOW_THEME_CHANGED = "tauri://theme-changed", e.WINDOW_CREATED = "tauri://window-created", e.WEBVIEW_CREATED = "tauri://webview-created", e.DRAG_ENTER = "tauri://drag-enter", e.DRAG_OVER = "tauri://drag-over", e.DRAG_DROP = "tauri://drag-drop", e.DRAG_LEAVE = "tauri://drag-leave";
})(rt || (rt = {}));
async function al(e, t) {
  await F("plugin:event|unlisten", {
    event: e,
    eventId: t
  });
}
async function ds(e, t, n) {
  var o;
  const r = typeof n?.target == "string" ? { kind: "AnyLabel", label: n.target } : (o = n?.target) !== null && o !== void 0 ? o : { kind: "Any" };
  return F("plugin:event|listen", {
    event: e,
    target: r,
    handler: jc(t)
  }).then((s) => async () => al(e, s));
}
async function Uc(e, t, n) {
  return ds(e, (o) => {
    al(e, o.id), t(o);
  }, n);
}
async function Hc(e, t) {
  await F("plugin:event|emit", {
    event: e,
    payload: t
  });
}
async function Kc(e, t, n) {
  await F("plugin:event|emit_to", {
    target: typeof e == "string" ? { kind: "AnyLabel", label: e } : e,
    event: t,
    payload: n
  });
}
const Gc = (e, t, n, o) => ({
  id: e.id,
  source: t,
  packagePath: n,
  installedAt: o,
  manifest: e,
  nameKey: e.name.i18nKey,
  descriptionKey: e.description.i18nKey,
  category: e.category,
  enabledByDefault: e.enabledByDefault,
  routeNames: e.capabilities?.routeNames,
  settingsTabs: e.capabilities?.settingsTabs,
  hotkeys: e.capabilities?.hotkeys,
  searchSources: e.capabilities?.searchSources,
  resourceHintKey: e.resources?.hintKey,
  resourceFor: e.resourceFor
}), sn = (e) => typeof e == "object" && e !== null, Yc = (e) => sn(e) && "manifest" in e && sn(e.manifest) ? {
  manifest: e.manifest,
  packagePath: typeof e.packagePath == "string" ? e.packagePath : void 0,
  installedAt: typeof e.installedAt == "string" ? e.installedAt : void 0
} : { manifest: e }, Zc = (e) => typeof e == "string" && ["capture", "automation", "search", "sync", "editor", "appearance"].includes(e), qc = (e) => {
  if (!sn(e) || e.schemaVersion !== 1 || typeof e.id != "string" || !e.id.trim() || typeof e.version != "string" || !e.version.trim() || e.kind !== "builtin" && e.kind !== "local" || !sn(e.name) || typeof e.name.i18nKey != "string" || typeof e.name.fallback != "string" || !sn(e.description) || typeof e.description.i18nKey != "string" || typeof e.description.fallback != "string" || !Zc(e.category) || typeof e.enabledByDefault != "boolean") return null;
  const t = {
    i18nKey: e.name.i18nKey,
    fallback: e.name.fallback
  }, n = {
    i18nKey: e.description.i18nKey,
    fallback: e.description.fallback
  };
  return {
    schemaVersion: 1,
    id: e.id,
    version: e.version,
    kind: e.kind,
    name: t,
    description: n,
    category: e.category,
    enabledByDefault: e.enabledByDefault,
    capabilities: sn(e.capabilities) ? e.capabilities : void 0,
    resources: sn(e.resources) ? e.resources : void 0,
    entry: sn(e.entry) ? e.entry : void 0,
    permissions: Array.isArray(e.permissions) ? e.permissions.filter((o) => typeof o == "string") : void 0,
    dependencies: Array.isArray(e.dependencies) ? e.dependencies.filter((o) => typeof o == "string") : void 0,
    resourceFor: typeof e.resourceFor == "string" ? e.resourceFor : void 0,
    compatibleAppVersion: typeof e.compatibleAppVersion == "string" ? e.compatibleAppVersion : void 0,
    minAppVersion: typeof e.minAppVersion == "string" ? e.minAppVersion : void 0,
    repository: typeof e.repository == "string" ? e.repository : void 0,
    releaseUrl: typeof e.releaseUrl == "string" ? e.releaseUrl : void 0
  };
}, Jc = (e) => e.map((t) => {
  const { manifest: n, packagePath: o, installedAt: r } = Yc(t), s = qc(n);
  if (!s) return null;
  const a = {
    manifest: s,
    packagePath: o ?? ""
  };
  return r && (a.installedAt = r), a;
}).filter((t) => t !== null), Xc = (e = []) => {
  const t = [], n = Jc(e).map((s) => Gc(
    s.manifest,
    "local",
    s.packagePath || void 0,
    s.installedAt
  )).sort(Qc), o = [
    ...t,
    ...n
  ], r = /* @__PURE__ */ new Map();
  for (const s of o)
    r.has(s.id) || r.set(s.id, s);
  return Array.from(r.values());
}, na = (e) => {
  const t = e.installedAt ? Date.parse(e.installedAt) : NaN;
  return Number.isFinite(t) ? t : 0;
}, Qc = (e, t) => {
  const n = na(t) - na(e);
  return n !== 0 ? n : String(e.id).localeCompare(String(t.id));
}, il = Xc();
il.filter((e) => e.source === "builtin");
const ll = il;
ll.map((e) => e.id);
ll.reduce((e, t) => (e[t.id] = t.enabledByDefault, e), {});
var ed = {
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
function td() {
  return "icon-" + ((1 + Math.random()) * 4294967296 | 0).toString(16).substring(1);
}
function nd(e, t, n) {
  var o = typeof t.fill == "string" ? [t.fill] : t.fill || [], r = [], s = t.theme || n.theme;
  switch (s) {
    case "outline":
      r.push(typeof o[0] == "string" ? o[0] : "currentColor"), r.push("none"), r.push(typeof o[0] == "string" ? o[0] : "currentColor"), r.push("none");
      break;
    case "filled":
      r.push(typeof o[0] == "string" ? o[0] : "currentColor"), r.push(typeof o[0] == "string" ? o[0] : "currentColor"), r.push("#FFF"), r.push("#FFF");
      break;
    case "two-tone":
      r.push(typeof o[0] == "string" ? o[0] : "currentColor"), r.push(typeof o[1] == "string" ? o[1] : n.colors.twoTone.twoTone), r.push(typeof o[0] == "string" ? o[0] : "currentColor"), r.push(typeof o[1] == "string" ? o[1] : n.colors.twoTone.twoTone);
      break;
    case "multi-color":
      r.push(typeof o[0] == "string" ? o[0] : "currentColor"), r.push(typeof o[1] == "string" ? o[1] : n.colors.multiColor.outFillColor), r.push(typeof o[2] == "string" ? o[2] : n.colors.multiColor.innerStrokeColor), r.push(typeof o[3] == "string" ? o[3] : n.colors.multiColor.innerFillColor);
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
var od = Symbol("icon-context");
function Xt(e, t, n) {
  var o = {
    name: "icon-" + e,
    props: ["size", "strokeWidth", "strokeLinecap", "strokeLinejoin", "theme", "fill", "spin"],
    setup: function(s) {
      var a = td(), i = fe(od, ed);
      return function() {
        var l = s.size, u = s.strokeWidth, f = s.strokeLinecap, p = s.strokeLinejoin, m = s.theme, g = s.fill, h = s.spin, v = nd(a, {
          size: l,
          strokeWidth: u,
          strokeLinecap: f,
          strokeLinejoin: p,
          theme: m,
          fill: g
        }, i), w = [i.prefix + "-icon"];
        return w.push(i.prefix + "-icon-" + e), t && i.rtl && w.push(i.prefix + "-icon-rtl"), h && w.push(i.prefix + "-icon-spin"), z("span", {
          class: w.join(" ")
        }, [n(v)]);
      };
    }
  };
  return o;
}
const rd = Xt("close", !1, function(e) {
  return z("svg", {
    width: e.size,
    height: e.size,
    viewBox: "0 0 48 48",
    fill: "none"
  }, [z("path", {
    d: "M8 8L40 40",
    stroke: e.colors[0],
    "stroke-width": e.strokeWidth,
    "stroke-linecap": e.strokeLinecap,
    "stroke-linejoin": e.strokeLinejoin
  }, null), z("path", {
    d: "M8 40L40 8",
    stroke: e.colors[0],
    "stroke-width": e.strokeWidth,
    "stroke-linecap": e.strokeLinecap,
    "stroke-linejoin": e.strokeLinejoin
  }, null)]);
}), sd = Xt("computer", !1, function(e) {
  return z("svg", {
    width: e.size,
    height: e.size,
    viewBox: "0 0 48 48",
    fill: "none"
  }, [z("rect", {
    x: "19",
    y: "32",
    width: "10",
    height: "9",
    stroke: e.colors[0],
    "stroke-width": e.strokeWidth,
    "stroke-linecap": e.strokeLinecap,
    "stroke-linejoin": e.strokeLinejoin
  }, null), z("rect", {
    x: "5",
    y: "8",
    width: "38",
    height: "24",
    rx: "2",
    fill: e.colors[1],
    stroke: e.colors[0],
    "stroke-width": e.strokeWidth
  }, null), z("path", {
    d: "M22 27H26",
    stroke: e.colors[2],
    "stroke-width": e.strokeWidth,
    "stroke-linecap": e.strokeLinecap,
    "stroke-linejoin": e.strokeLinejoin
  }, null), z("path", {
    d: "M14 41L34 41",
    stroke: e.colors[0],
    "stroke-width": e.strokeWidth,
    "stroke-linecap": e.strokeLinecap,
    "stroke-linejoin": e.strokeLinejoin
  }, null)]);
}), ad = Xt("local", !1, function(e) {
  return z("svg", {
    width: e.size,
    height: e.size,
    viewBox: "0 0 48 48",
    fill: "none"
  }, [z("path", {
    d: "M9.85786 32.7574C6.23858 33.8432 4 35.3432 4 37C4 40.3137 12.9543 43 24 43C35.0457 43 44 40.3137 44 37C44 35.3432 41.7614 33.8432 38.1421 32.7574",
    stroke: e.colors[0],
    "stroke-width": e.strokeWidth,
    "stroke-linecap": e.strokeLinecap,
    "stroke-linejoin": e.strokeLinejoin
  }, null), z("path", {
    d: "M24 35C24 35 37 26.504 37 16.6818C37 9.67784 31.1797 4 24 4C16.8203 4 11 9.67784 11 16.6818C11 26.504 24 35 24 35Z",
    fill: e.colors[1],
    stroke: e.colors[0],
    "stroke-width": e.strokeWidth,
    "stroke-linejoin": e.strokeLinejoin
  }, null), z("path", {
    d: "M24 22C26.7614 22 29 19.7614 29 17C29 14.2386 26.7614 12 24 12C21.2386 12 19 14.2386 19 17C19 19.7614 21.2386 22 24 22Z",
    fill: e.colors[3],
    stroke: e.colors[2],
    "stroke-width": e.strokeWidth,
    "stroke-linejoin": e.strokeLinejoin
  }, null)]);
}), Tr = Xt("moon", !0, function(e) {
  return z("svg", {
    width: e.size,
    height: e.size,
    viewBox: "0 0 48 48",
    fill: "none"
  }, [z("path", {
    d: "M28.0527 4.41085C22.5828 5.83695 18.5455 10.8106 18.5455 16.7273C18.5455 23.7564 24.2436 29.4545 31.2727 29.4545C37.1894 29.4545 42.1631 25.4172 43.5891 19.9473C43.8585 21.256 44 22.6115 44 24C44 35.0457 35.0457 44 24 44C12.9543 44 4 35.0457 4 24C4 12.9543 12.9543 4 24 4C25.3885 4 26.744 4.14149 28.0527 4.41085Z",
    fill: e.colors[1],
    stroke: e.colors[0],
    "stroke-width": e.strokeWidth,
    "stroke-linejoin": e.strokeLinejoin
  }, null)]);
}), oa = Xt("refresh", !0, function(e) {
  return z("svg", {
    width: e.size,
    height: e.size,
    viewBox: "0 0 48 48",
    fill: "none"
  }, [z("path", {
    d: "M42 8V24",
    stroke: e.colors[0],
    "stroke-width": e.strokeWidth,
    "stroke-linecap": e.strokeLinecap,
    "stroke-linejoin": e.strokeLinejoin
  }, null), z("path", {
    d: "M6 24L6 40",
    stroke: e.colors[0],
    "stroke-width": e.strokeWidth,
    "stroke-linecap": e.strokeLinecap,
    "stroke-linejoin": e.strokeLinejoin
  }, null), z("path", {
    d: "M42 24C42 14.0589 33.9411 6 24 6C18.9145 6 14.3216 8.10896 11.0481 11.5M6 24C6 33.9411 14.0589 42 24 42C28.8556 42 33.2622 40.0774 36.5 36.9519",
    stroke: e.colors[0],
    "stroke-width": e.strokeWidth,
    "stroke-linecap": e.strokeLinecap,
    "stroke-linejoin": e.strokeLinejoin
  }, null)]);
}), ra = Xt("sun-one", !1, function(e) {
  return z("svg", {
    width: e.size,
    height: e.size,
    viewBox: "0 0 48 48",
    fill: "none"
  }, [z("path", {
    d: "M24 37C31.1797 37 37 31.1797 37 24C37 16.8203 31.1797 11 24 11C16.8203 11 11 16.8203 11 24C11 31.1797 16.8203 37 24 37Z",
    fill: e.colors[1],
    stroke: e.colors[0],
    "stroke-width": e.strokeWidth,
    "stroke-linejoin": e.strokeLinejoin
  }, null), z("path", {
    d: "M24 6C25.3807 6 26.5 4.88071 26.5 3.5C26.5 2.11929 25.3807 1 24 1C22.6193 1 21.5 2.11929 21.5 3.5C21.5 4.88071 22.6193 6 24 6Z",
    fill: e.colors[0]
  }, null), z("path", {
    d: "M38.5 12C39.8807 12 41 10.8807 41 9.5C41 8.11929 39.8807 7 38.5 7C37.1193 7 36 8.11929 36 9.5C36 10.8807 37.1193 12 38.5 12Z",
    fill: e.colors[0]
  }, null), z("path", {
    d: "M44.5 26.5C45.8807 26.5 47 25.3807 47 24C47 22.6193 45.8807 21.5 44.5 21.5C43.1193 21.5 42 22.6193 42 24C42 25.3807 43.1193 26.5 44.5 26.5Z",
    fill: e.colors[0]
  }, null), z("path", {
    d: "M38.5 41C39.8807 41 41 39.8807 41 38.5C41 37.1193 39.8807 36 38.5 36C37.1193 36 36 37.1193 36 38.5C36 39.8807 37.1193 41 38.5 41Z",
    fill: e.colors[0]
  }, null), z("path", {
    d: "M24 47C25.3807 47 26.5 45.8807 26.5 44.5C26.5 43.1193 25.3807 42 24 42C22.6193 42 21.5 43.1193 21.5 44.5C21.5 45.8807 22.6193 47 24 47Z",
    fill: e.colors[0]
  }, null), z("path", {
    d: "M9.5 41C10.8807 41 12 39.8807 12 38.5C12 37.1193 10.8807 36 9.5 36C8.11929 36 7 37.1193 7 38.5C7 39.8807 8.11929 41 9.5 41Z",
    fill: e.colors[0]
  }, null), z("path", {
    d: "M3.5 26.5C4.88071 26.5 6 25.3807 6 24C6 22.6193 4.88071 21.5 3.5 21.5C2.11929 21.5 1 22.6193 1 24C1 25.3807 2.11929 26.5 3.5 26.5Z",
    fill: e.colors[0]
  }, null), z("path", {
    d: "M9.5 12C10.8807 12 12 10.8807 12 9.5C12 8.11929 10.8807 7 9.5 7C8.11929 7 7 8.11929 7 9.5C7 10.8807 8.11929 12 9.5 12Z",
    fill: e.colors[0]
  }, null)]);
}), sa = Xt("sunrise", !0, function(e) {
  return z("svg", {
    width: e.size,
    height: e.size,
    viewBox: "0 0 48 48",
    fill: "none"
  }, [z("path", {
    d: "M4 24H7",
    stroke: e.colors[0],
    "stroke-width": e.strokeWidth,
    "stroke-linecap": e.strokeLinecap,
    "stroke-linejoin": e.strokeLinejoin
  }, null), z("path", {
    d: "M10 10L12 12",
    stroke: e.colors[0],
    "stroke-width": e.strokeWidth,
    "stroke-linecap": e.strokeLinecap,
    "stroke-linejoin": e.strokeLinejoin
  }, null), z("path", {
    d: "M24 4V7",
    stroke: e.colors[0],
    "stroke-width": e.strokeWidth,
    "stroke-linecap": e.strokeLinecap,
    "stroke-linejoin": e.strokeLinejoin
  }, null), z("path", {
    d: "M14 24C14 18.4776 18.4776 14 24 14C29.5224 14 34 18.4776 34 24C34 27.3674 32.3357 30.3458 29.785 32.1578",
    stroke: e.colors[0],
    "stroke-width": e.strokeWidth,
    "stroke-linecap": e.strokeLinecap,
    "stroke-linejoin": e.strokeLinejoin
  }, null), z("path", {
    d: "M38 10L36 12",
    stroke: e.colors[0],
    "stroke-width": e.strokeWidth,
    "stroke-linecap": e.strokeLinecap,
    "stroke-linejoin": e.strokeLinejoin
  }, null), z("path", {
    d: "M44 24L41 24",
    stroke: e.colors[0],
    "stroke-width": e.strokeWidth,
    "stroke-linecap": e.strokeLinecap,
    "stroke-linejoin": e.strokeLinejoin
  }, null), z("path", {
    d: "M37.9814 37.982L36.3614 36.362",
    stroke: e.colors[0],
    "stroke-width": e.strokeWidth,
    "stroke-linecap": e.strokeLinecap,
    "stroke-linejoin": e.strokeLinejoin
  }, null), z("path", {
    d: "M23.4999 28C20.4999 28 14 28.2 14 31C14 33.8 18.6058 33.7908 20.9998 34C23 34.1747 26.4624 35.6879 25.9999 38C24.9998 43 8.99982 42 4.99994 42",
    stroke: e.colors[0],
    "stroke-width": e.strokeWidth,
    "stroke-linecap": e.strokeLinecap,
    "stroke-linejoin": e.strokeLinejoin
  }, null)]);
}), id = Xt("sunset", !1, function(e) {
  return z("svg", {
    width: e.size,
    height: e.size,
    viewBox: "0 0 48 48",
    fill: "none"
  }, [z("path", {
    d: "M19 8L33 34H5L19 8Z",
    fill: e.colors[1],
    stroke: e.colors[0],
    "stroke-width": e.strokeWidth,
    "stroke-linejoin": e.strokeLinejoin
  }, null), z("path", {
    d: "M29 26L34 20L43 34H32",
    stroke: e.colors[0],
    "stroke-width": e.strokeWidth,
    "stroke-linecap": e.strokeLinecap,
    "stroke-linejoin": e.strokeLinejoin
  }, null), z("path", {
    d: "M10 41L38 41",
    stroke: e.colors[0],
    "stroke-width": e.strokeWidth,
    "stroke-linecap": e.strokeLinecap,
    "stroke-linejoin": e.strokeLinejoin
  }, null), z("circle", {
    cx: "38",
    cy: "10",
    r: "3",
    fill: e.colors[1],
    stroke: e.colors[0],
    "stroke-width": e.strokeWidth
  }, null)]);
}), aa = Xt("time", !0, function(e) {
  return z("svg", {
    width: e.size,
    height: e.size,
    viewBox: "0 0 48 48",
    fill: "none"
  }, [z("path", {
    d: "M24 44C35.0457 44 44 35.0457 44 24C44 12.9543 35.0457 4 24 4C12.9543 4 4 12.9543 4 24C4 35.0457 12.9543 44 24 44Z",
    fill: e.colors[1],
    stroke: e.colors[0],
    "stroke-width": e.strokeWidth,
    "stroke-linejoin": e.strokeLinejoin
  }, null), z("path", {
    d: "M24.0084 12.0001L24.0072 24.0089L32.4866 32.4883",
    stroke: e.colors[2],
    "stroke-width": e.strokeWidth,
    "stroke-linecap": e.strokeLinecap,
    "stroke-linejoin": e.strokeLinejoin
  }, null)]);
});
Zi(() => Promise.resolve().then(() => h2));
const ld = /* @__PURE__ */ zc("configuration", {
  state: () => ({
    id: "",
    // 搜索框的 id
    data: [],
    // 搜索结果
    contents: [],
    // 搜索结果
    categories: [],
    // 分类集合
    editCategoryId: "",
    // 编辑分类的 id
    categorySort: "asc",
    // 分类排序
    searchHotkey: "",
    // 搜索快捷键
    configHotkey: "",
    // 配置快捷键
    translateHotkey: "",
    // 翻译快捷键
    selectionTranslateHotkey: "",
    // 划词翻译快捷键
    screenshotHotkey: "",
    // 截图快捷键
    screenRecorderHotkey: "",
    // 录屏快捷键
    darkModeHotkey: "",
    // Auto Dark Mode快捷键
    dbPath: null,
    // 数据库路径
    dbBackup: "A",
    // 数据库备份
    theme: "auto",
    // 主题
    systemPrefersDark: !1,
    // 系统是否深色（auto 时与 html.dark 同步，供组件响应式使用）
    language: "zh-CN",
    // 界面语言
    autoStart: !1,
    // 开机自启
    autoUpdateCheck: !1,
    // 检查更新
    autoHideOnBlur: !0
    // 搜索窗口失焦时是否自动隐藏
  }),
  getters: {
    /** 当前实际是否为深色模式（供组件 :dark 等使用，会随系统主题变化更新） */
    effectiveDark() {
      return this.theme === "dark" || this.theme === "auto" && this.systemPrefersDark;
    }
  },
  actions: {
    // 初始化配置
    async initialize() {
      try {
        this.dbPath = await F("get_db_path") || "";
      } catch (e) {
        Ve.error("获取数据库路径失败:", e);
      }
      try {
        const [
          e,
          t,
          n,
          o,
          r,
          s,
          a
        ] = await F("get_shortcuts");
        this.searchHotkey = e, this.configHotkey = t, this.translateHotkey = n, this.selectionTranslateHotkey = o || "", this.screenshotHotkey = r || "", this.screenRecorderHotkey = s || "", this.darkModeHotkey = a || "";
      } catch (e) {
        Ve.error("获取快捷键配置失败:", e);
      }
      try {
        this.autoUpdateCheck = await F("get_auto_update_check");
      } catch (e) {
        Ve.error("获取自动检查失败:", e);
      }
      try {
        this.autoHideOnBlur = await F("get_auto_hide_on_blur");
      } catch (e) {
        Ve.error("获取自动失焦隐藏设置:", e);
      }
      try {
        const e = await F("get_language");
        e && (e === "zh-CN" || e === "en-US") && (this.language = e);
      } catch (e) {
        Ve.error("获取语言设置失败:", e);
      }
    },
    // 更新主题并立即应用
    updateTheme(e) {
      this.theme = e, this.applyTheme();
    },
    // 应用主题到DOM，并同步 systemPrefersDark 供组件响应式使用
    applyTheme() {
      const e = document.documentElement, t = window.matchMedia("(prefers-color-scheme: dark)").matches;
      Ve.debug(`[主题][Store] 应用主题到 DOM：theme=${this.theme}, prefersDark=${t}`), this.theme === "auto" && (this.systemPrefersDark = t), this.theme === "dark" || this.theme === "auto" && t ? e.classList.add("dark") : e.classList.remove("dark");
    },
    // 同步系统主题样式（仅在 auto 模式下生效，不修改 store.theme）
    // 用于响应 Windows 系统主题变化
    syncSystemThemeStyle(e) {
      Ve.debug(`[主题][Store] 同步系统主题样式：isDark=${e}, store.theme=${this.theme}`);
      let t = this.theme;
      try {
        const n = localStorage.getItem("configuration");
        if (n) {
          const o = JSON.parse(n);
          o.theme && (t = o.theme, this.theme = t);
        }
      } catch (n) {
        Ve.error("从 localStorage 同步主题失败:", n);
      }
      if (t === "auto") {
        this.systemPrefersDark = e;
        const n = document.documentElement;
        e ? n.classList.add("dark") : n.classList.remove("dark");
      }
    }
  },
  persist: {
    pick: ["theme", "dbPath"]
  }
});
class ul {
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
    return new to(this.width * t, this.height * t);
  }
  [ht]() {
    return {
      width: this.width,
      height: this.height
    };
  }
  toJSON() {
    return this[ht]();
  }
}
class to {
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
    return new ul(this.width / t, this.height / t);
  }
  [ht]() {
    return {
      width: this.width,
      height: this.height
    };
  }
  toJSON() {
    return this[ht]();
  }
}
class Pn {
  constructor(t) {
    this.size = t;
  }
  toLogical(t) {
    return this.size instanceof ul ? this.size : this.size.toLogical(t);
  }
  toPhysical(t) {
    return this.size instanceof to ? this.size : this.size.toPhysical(t);
  }
  [ht]() {
    return {
      [`${this.size.type}`]: {
        width: this.size.width,
        height: this.size.height
      }
    };
  }
  toJSON() {
    return this[ht]();
  }
}
class cl {
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
    return new an(this.x * t, this.y * t);
  }
  [ht]() {
    return {
      x: this.x,
      y: this.y
    };
  }
  toJSON() {
    return this[ht]();
  }
}
class an {
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
    return new cl(this.x / t, this.y / t);
  }
  [ht]() {
    return {
      x: this.x,
      y: this.y
    };
  }
  toJSON() {
    return this[ht]();
  }
}
class Io {
  constructor(t) {
    this.position = t;
  }
  toLogical(t) {
    return this.position instanceof cl ? this.position : this.position.toLogical(t);
  }
  toPhysical(t) {
    return this.position instanceof an ? this.position : this.position.toPhysical(t);
  }
  [ht]() {
    return {
      [`${this.position.type}`]: {
        x: this.position.x,
        y: this.position.y
      }
    };
  }
  toJSON() {
    return this[ht]();
  }
}
class no extends Vc {
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
    return F("plugin:image|new", {
      rgba: Uo(t),
      width: n,
      height: o
    }).then((r) => new no(r));
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
    return F("plugin:image|from_bytes", {
      bytes: Uo(t)
    }).then((n) => new no(n));
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
    return F("plugin:image|from_path", { path: t }).then((n) => new no(n));
  }
  /** Returns the RGBA data for this image, in row-major order from top to bottom.  */
  async rgba() {
    return F("plugin:image|rgba", {
      rid: this.rid
    }).then((t) => new Uint8Array(t));
  }
  /** Returns the size of this image.  */
  async size() {
    return F("plugin:image|size", { rid: this.rid });
  }
}
function Uo(e) {
  return e == null ? null : typeof e == "string" ? e : e instanceof no ? e.rid : e;
}
var Br;
(function(e) {
  e[e.Critical = 1] = "Critical", e[e.Informational = 2] = "Informational";
})(Br || (Br = {}));
class ud {
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
var ia;
(function(e) {
  e.None = "none", e.Normal = "normal", e.Indeterminate = "indeterminate", e.Paused = "paused", e.Error = "error";
})(ia || (ia = {}));
function Wr() {
  return new dl(window.__TAURI_INTERNALS__.metadata.currentWindow.label, {
    // @ts-expect-error `skip` is not defined in the public API but it is handled by the constructor
    skip: !0
  });
}
async function kr() {
  return F("plugin:window|get_all_windows").then((e) => e.map((t) => new dl(t, {
    // @ts-expect-error `skip` is not defined in the public API but it is handled by the constructor
    skip: !0
  })));
}
const Or = ["tauri://created", "tauri://error"];
class dl {
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
    this.label = t, this.listeners = /* @__PURE__ */ Object.create(null), n?.skip || F("plugin:window|create", {
      options: {
        ...n,
        parent: typeof n.parent == "string" ? n.parent : (o = n.parent) === null || o === void 0 ? void 0 : o.label,
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
    return (n = (await kr()).find((o) => o.label === t)) !== null && n !== void 0 ? n : null;
  }
  /**
   * Get an instance of `Window` for the current window.
   */
  static getCurrent() {
    return Wr();
  }
  /**
   * Gets a list of instances of `Window` for all available windows.
   */
  static async getAll() {
    return kr();
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
    for (const t of await kr())
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
    } : ds(t, n, {
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
    } : Uc(t, n, {
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
    if (Or.includes(t)) {
      for (const o of this.listeners[t] || [])
        o({
          event: t,
          id: -1,
          payload: n
        });
      return;
    }
    return Hc(t, n);
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
    if (Or.includes(n)) {
      for (const r of this.listeners[n] || [])
        r({
          event: n,
          id: -1,
          payload: o
        });
      return;
    }
    return Kc(t, n, o);
  }
  /** @ignore */
  _handleTauriEvent(t, n) {
    return Or.includes(t) ? (t in this.listeners ? this.listeners[t].push(n) : this.listeners[t] = [n], !0) : !1;
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
    return F("plugin:window|scale_factor", {
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
    return F("plugin:window|inner_position", {
      label: this.label
    }).then((t) => new an(t));
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
    return F("plugin:window|outer_position", {
      label: this.label
    }).then((t) => new an(t));
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
    return F("plugin:window|inner_size", {
      label: this.label
    }).then((t) => new to(t));
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
    return F("plugin:window|outer_size", {
      label: this.label
    }).then((t) => new to(t));
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
    return F("plugin:window|is_fullscreen", {
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
    return F("plugin:window|is_minimized", {
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
    return F("plugin:window|is_maximized", {
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
    return F("plugin:window|is_focused", {
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
    return F("plugin:window|is_decorated", {
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
    return F("plugin:window|is_resizable", {
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
    return F("plugin:window|is_maximizable", {
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
    return F("plugin:window|is_minimizable", {
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
    return F("plugin:window|is_closable", {
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
    return F("plugin:window|is_visible", {
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
    return F("plugin:window|title", {
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
    return F("plugin:window|theme", {
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
    return F("plugin:window|is_always_on_top", {
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
    return F("plugin:window|center", {
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
    return t && (t === Br.Critical ? n = { type: "Critical" } : n = { type: "Informational" }), F("plugin:window|request_user_attention", {
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
    return F("plugin:window|set_resizable", {
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
    return F("plugin:window|set_enabled", {
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
    return F("plugin:window|is_enabled", {
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
    return F("plugin:window|set_maximizable", {
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
    return F("plugin:window|set_minimizable", {
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
    return F("plugin:window|set_closable", {
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
    return F("plugin:window|set_title", {
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
    return F("plugin:window|maximize", {
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
    return F("plugin:window|unmaximize", {
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
    return F("plugin:window|toggle_maximize", {
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
    return F("plugin:window|minimize", {
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
    return F("plugin:window|unminimize", {
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
    return F("plugin:window|show", {
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
    return F("plugin:window|hide", {
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
    return F("plugin:window|close", {
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
    return F("plugin:window|destroy", {
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
    return F("plugin:window|set_decorations", {
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
    return F("plugin:window|set_shadow", {
      label: this.label,
      value: t
    });
  }
  /**
   * Set window effects.
   */
  async setEffects(t) {
    return F("plugin:window|set_effects", {
      label: this.label,
      value: t
    });
  }
  /**
   * Clear any applied effects if possible.
   */
  async clearEffects() {
    return F("plugin:window|set_effects", {
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
    return F("plugin:window|set_always_on_top", {
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
    return F("plugin:window|set_always_on_bottom", {
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
    return F("plugin:window|set_content_protected", {
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
    return F("plugin:window|set_size", {
      label: this.label,
      value: t instanceof Pn ? t : new Pn(t)
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
    return F("plugin:window|set_min_size", {
      label: this.label,
      value: t instanceof Pn ? t : t ? new Pn(t) : null
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
    return F("plugin:window|set_max_size", {
      label: this.label,
      value: t instanceof Pn ? t : t ? new Pn(t) : null
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
    return F("plugin:window|set_size_constraints", {
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
    return F("plugin:window|set_position", {
      label: this.label,
      value: t instanceof Io ? t : new Io(t)
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
    return F("plugin:window|set_fullscreen", {
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
    return F("plugin:window|set_focus", {
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
    return F("plugin:window|set_icon", {
      label: this.label,
      value: Uo(t)
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
    return F("plugin:window|set_skip_taskbar", {
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
    return F("plugin:window|set_cursor_grab", {
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
    return F("plugin:window|set_cursor_visible", {
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
    return F("plugin:window|set_cursor_icon", {
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
    return F("plugin:window|set_background_color", { color: t });
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
    return F("plugin:window|set_cursor_position", {
      label: this.label,
      value: t instanceof Io ? t : new Io(t)
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
    return F("plugin:window|set_ignore_cursor_events", {
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
    return F("plugin:window|start_dragging", {
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
    return F("plugin:window|start_resize_dragging", {
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
    return F("plugin:window|set_badge_count", {
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
    return F("plugin:window|set_badge_label", {
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
    return F("plugin:window|set_overlay_icon", {
      label: this.label,
      value: t ? Uo(t) : void 0
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
    return F("plugin:window|set_progress_bar", {
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
    return F("plugin:window|set_visible_on_all_workspaces", {
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
    return F("plugin:window|set_title_bar_style", {
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
    return F("plugin:window|set_theme", {
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
    return this.listen(rt.WINDOW_RESIZED, (n) => {
      n.payload = new to(n.payload), t(n);
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
    return this.listen(rt.WINDOW_MOVED, (n) => {
      n.payload = new an(n.payload), t(n);
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
    return this.listen(rt.WINDOW_CLOSE_REQUESTED, async (n) => {
      const o = new ud(n);
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
    const n = await this.listen(rt.DRAG_ENTER, (a) => {
      t({
        ...a,
        payload: {
          type: "enter",
          paths: a.payload.paths,
          position: new an(a.payload.position)
        }
      });
    }), o = await this.listen(rt.DRAG_OVER, (a) => {
      t({
        ...a,
        payload: {
          type: "over",
          position: new an(a.payload.position)
        }
      });
    }), r = await this.listen(rt.DRAG_DROP, (a) => {
      t({
        ...a,
        payload: {
          type: "drop",
          paths: a.payload.paths,
          position: new an(a.payload.position)
        }
      });
    }), s = await this.listen(rt.DRAG_LEAVE, (a) => {
      t({ ...a, payload: { type: "leave" } });
    });
    return () => {
      n(), r(), o(), s();
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
    const n = await this.listen(rt.WINDOW_FOCUS, (r) => {
      t({ ...r, payload: !0 });
    }), o = await this.listen(rt.WINDOW_BLUR, (r) => {
      t({ ...r, payload: !1 });
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
    return this.listen(rt.WINDOW_SCALE_FACTOR_CHANGED, t);
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
    return this.listen(rt.WINDOW_THEME_CHANGED, t);
  }
}
var la;
(function(e) {
  e.Disabled = "disabled", e.Throttle = "throttle", e.Suspend = "suspend";
})(la || (la = {}));
var ua;
(function(e) {
  e.AppearanceBased = "appearanceBased", e.Light = "light", e.Dark = "dark", e.MediumLight = "mediumLight", e.UltraDark = "ultraDark", e.Titlebar = "titlebar", e.Selection = "selection", e.Menu = "menu", e.Popover = "popover", e.Sidebar = "sidebar", e.HeaderView = "headerView", e.Sheet = "sheet", e.WindowBackground = "windowBackground", e.HudWindow = "hudWindow", e.FullScreenUI = "fullScreenUI", e.Tooltip = "tooltip", e.ContentBackground = "contentBackground", e.UnderWindowBackground = "underWindowBackground", e.UnderPageBackground = "underPageBackground", e.Mica = "mica", e.Blur = "blur", e.Acrylic = "acrylic", e.Tabbed = "tabbed", e.TabbedDark = "tabbedDark", e.TabbedLight = "tabbedLight";
})(ua || (ua = {}));
var ca;
(function(e) {
  e.FollowsWindowActiveState = "followsWindowActiveState", e.Active = "active", e.Inactive = "inactive";
})(ca || (ca = {}));
/*!
  * shared v11.2.2
  * (c) 2025 kazuya kawaguchi
  * Released under the MIT License.
  */
function cd(e, t) {
  typeof console < "u" && (console.warn("[intlify] " + e), t && console.warn(t.stack));
}
const da = typeof window < "u", Sn = (e, t = !1) => t ? Symbol.for(e) : Symbol(e), dd = (e, t, n) => fd({ l: e, k: t, s: n }), fd = (e) => JSON.stringify(e).replace(/\u2028/g, "\\u2028").replace(/\u2029/g, "\\u2029").replace(/\u0027/g, "\\u0027"), Ae = (e) => typeof e == "number" && isFinite(e), pd = (e) => fs(e) === "[object Date]", Ho = (e) => fs(e) === "[object RegExp]", sr = (e) => le(e) && Object.keys(e).length === 0, De = Object.assign, md = Object.create, ge = (e = null) => md(e);
let fa;
const zo = () => fa || (fa = typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : typeof window < "u" ? window : typeof global < "u" ? global : ge());
function pa(e) {
  return e.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;").replace(/'/g, "&apos;").replace(/\//g, "&#x2F;").replace(/=/g, "&#x3D;");
}
function ma(e) {
  return e.replace(/&(?![a-zA-Z0-9#]{2,6};)/g, "&amp;").replace(/"/g, "&quot;").replace(/'/g, "&apos;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
}
function hd(e) {
  return e = e.replace(/(\w+)\s*=\s*"([^"]*)"/g, (o, r, s) => `${r}="${ma(s)}"`), e = e.replace(/(\w+)\s*=\s*'([^']*)'/g, (o, r, s) => `${r}='${ma(s)}'`), /\s*on\w+\s*=\s*["']?[^"'>]+["']?/gi.test(e) && (e = e.replace(/(\s+)(on)(\w+\s*=)/gi, "$1&#111;n$3")), [
    // In href, src, action, formaction attributes
    /(\s+(?:href|src|action|formaction)\s*=\s*["']?)\s*javascript:/gi,
    // In style attributes within url()
    /(style\s*=\s*["'][^"']*url\s*\(\s*)javascript:/gi
  ].forEach((o) => {
    e = e.replace(o, "$1javascript&#58;");
  }), e;
}
const vd = Object.prototype.hasOwnProperty;
function _t(e, t) {
  return vd.call(e, t);
}
const ke = Array.isArray, be = (e) => typeof e == "function", Z = (e) => typeof e == "string", Te = (e) => typeof e == "boolean", ue = (e) => e !== null && typeof e == "object", gd = (e) => ue(e) && be(e.then) && be(e.catch), fl = Object.prototype.toString, fs = (e) => fl.call(e), le = (e) => fs(e) === "[object Object]", yd = (e) => e == null ? "" : ke(e) || le(e) && e.toString === fl ? JSON.stringify(e, null, 2) : String(e);
function ps(e, t = "") {
  return e.reduce((n, o, r) => r === 0 ? n + o : n + t + o, "");
}
const Po = (e) => !ue(e) || ke(e);
function Bo(e, t) {
  if (Po(e) || Po(t))
    throw new Error("Invalid value");
  const n = [{ src: e, des: t }];
  for (; n.length; ) {
    const { src: o, des: r } = n.pop();
    Object.keys(o).forEach((s) => {
      s !== "__proto__" && (ue(o[s]) && !ue(r[s]) && (r[s] = Array.isArray(o[s]) ? [] : ge()), Po(r[s]) || Po(o[s]) ? r[s] = o[s] : n.push({ src: o[s], des: r[s] }));
    });
  }
}
/*!
  * message-compiler v11.2.2
  * (c) 2025 kazuya kawaguchi
  * Released under the MIT License.
  */
function bd(e, t, n) {
  return { line: e, column: t, offset: n };
}
function jr(e, t, n) {
  return { start: e, end: t };
}
const de = {
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
}, _d = 17;
function ar(e, t, n = {}) {
  const { domain: o, messages: r, args: s } = n, a = e, i = new SyntaxError(String(a));
  return i.code = e, t && (i.location = t), i.domain = o, i;
}
function wd(e) {
  throw e;
}
const kt = " ", Cd = "\r", je = `
`, Ed = "\u2028", Sd = "\u2029";
function Td(e) {
  const t = e;
  let n = 0, o = 1, r = 1, s = 0;
  const a = (k) => t[k] === Cd && t[k + 1] === je, i = (k) => t[k] === je, l = (k) => t[k] === Sd, u = (k) => t[k] === Ed, f = (k) => a(k) || i(k) || l(k) || u(k), p = () => n, m = () => o, g = () => r, h = () => s, v = (k) => a(k) || l(k) || u(k) ? je : t[k], w = () => v(n), d = () => v(n + s);
  function E() {
    return s = 0, f(n) && (o++, r = 0), a(n) && n++, n++, r++, t[n];
  }
  function L() {
    return a(n + s) && s++, s++, t[n + s];
  }
  function S() {
    n = 0, o = 1, r = 1, s = 0;
  }
  function T(k = 0) {
    s = k;
  }
  function I() {
    const k = n + s;
    for (; k !== n; )
      E();
    s = 0;
  }
  return {
    index: p,
    line: m,
    column: g,
    peekOffset: h,
    charAt: v,
    currentChar: w,
    currentPeek: d,
    next: E,
    peek: L,
    reset: S,
    resetPeek: T,
    skipToPeek: I
  };
}
const zt = void 0, kd = ".", ha = "'", Od = "tokenizer";
function Ld(e, t = {}) {
  const n = t.location !== !1, o = Td(e), r = () => o.index(), s = () => bd(o.line(), o.column(), o.index()), a = s(), i = r(), l = {
    currentType: 13,
    offset: i,
    startLoc: a,
    endLoc: a,
    lastType: 13,
    lastOffset: i,
    lastStartLoc: a,
    lastEndLoc: a,
    braceNest: 0,
    inLinked: !1,
    text: ""
  }, u = () => l, { onError: f } = t;
  function p(b, _, M, ...H) {
    const ie = u();
    if (_.column += M, _.offset += M, f) {
      const J = n ? jr(ie.startLoc, _) : null, y = ar(b, J, {
        domain: Od,
        args: H
      });
      f(y);
    }
  }
  function m(b, _, M) {
    b.endLoc = s(), b.currentType = _;
    const H = { type: _ };
    return n && (H.loc = jr(b.startLoc, b.endLoc)), M != null && (H.value = M), H;
  }
  const g = (b) => m(
    b,
    13
    /* TokenTypes.EOF */
  );
  function h(b, _) {
    return b.currentChar() === _ ? (b.next(), _) : (p(de.EXPECTED_TOKEN, s(), 0, _), "");
  }
  function v(b) {
    let _ = "";
    for (; b.currentPeek() === kt || b.currentPeek() === je; )
      _ += b.currentPeek(), b.peek();
    return _;
  }
  function w(b) {
    const _ = v(b);
    return b.skipToPeek(), _;
  }
  function d(b) {
    if (b === zt)
      return !1;
    const _ = b.charCodeAt(0);
    return _ >= 97 && _ <= 122 || // a-z
    _ >= 65 && _ <= 90 || // A-Z
    _ === 95;
  }
  function E(b) {
    if (b === zt)
      return !1;
    const _ = b.charCodeAt(0);
    return _ >= 48 && _ <= 57;
  }
  function L(b, _) {
    const { currentType: M } = _;
    if (M !== 2)
      return !1;
    v(b);
    const H = d(b.currentPeek());
    return b.resetPeek(), H;
  }
  function S(b, _) {
    const { currentType: M } = _;
    if (M !== 2)
      return !1;
    v(b);
    const H = b.currentPeek() === "-" ? b.peek() : b.currentPeek(), ie = E(H);
    return b.resetPeek(), ie;
  }
  function T(b, _) {
    const { currentType: M } = _;
    if (M !== 2)
      return !1;
    v(b);
    const H = b.currentPeek() === ha;
    return b.resetPeek(), H;
  }
  function I(b, _) {
    const { currentType: M } = _;
    if (M !== 7)
      return !1;
    v(b);
    const H = b.currentPeek() === ".";
    return b.resetPeek(), H;
  }
  function k(b, _) {
    const { currentType: M } = _;
    if (M !== 8)
      return !1;
    v(b);
    const H = d(b.currentPeek());
    return b.resetPeek(), H;
  }
  function $(b, _) {
    const { currentType: M } = _;
    if (!(M === 7 || M === 11))
      return !1;
    v(b);
    const H = b.currentPeek() === ":";
    return b.resetPeek(), H;
  }
  function C(b, _) {
    const { currentType: M } = _;
    if (M !== 9)
      return !1;
    const H = () => {
      const J = b.currentPeek();
      return J === "{" ? d(b.peek()) : J === "@" || J === "|" || J === ":" || J === "." || J === kt || !J ? !1 : J === je ? (b.peek(), H()) : K(b, !1);
    }, ie = H();
    return b.resetPeek(), ie;
  }
  function D(b) {
    v(b);
    const _ = b.currentPeek() === "|";
    return b.resetPeek(), _;
  }
  function K(b, _ = !0) {
    const M = (ie = !1, J = "") => {
      const y = b.currentPeek();
      return y === "{" || y === "@" || !y ? ie : y === "|" ? !(J === kt || J === je) : y === kt ? (b.peek(), M(!0, kt)) : y === je ? (b.peek(), M(!0, je)) : !0;
    }, H = M();
    return _ && b.resetPeek(), H;
  }
  function Y(b, _) {
    const M = b.currentChar();
    return M === zt ? zt : _(M) ? (b.next(), M) : null;
  }
  function se(b) {
    const _ = b.charCodeAt(0);
    return _ >= 97 && _ <= 122 || // a-z
    _ >= 65 && _ <= 90 || // A-Z
    _ >= 48 && _ <= 57 || // 0-9
    _ === 95 || // _
    _ === 36;
  }
  function we(b) {
    return Y(b, se);
  }
  function me(b) {
    const _ = b.charCodeAt(0);
    return _ >= 97 && _ <= 122 || // a-z
    _ >= 65 && _ <= 90 || // A-Z
    _ >= 48 && _ <= 57 || // 0-9
    _ === 95 || // _
    _ === 36 || // $
    _ === 45;
  }
  function oe(b) {
    return Y(b, me);
  }
  function B(b) {
    const _ = b.charCodeAt(0);
    return _ >= 48 && _ <= 57;
  }
  function he(b) {
    return Y(b, B);
  }
  function pe(b) {
    const _ = b.charCodeAt(0);
    return _ >= 48 && _ <= 57 || // 0-9
    _ >= 65 && _ <= 70 || // A-F
    _ >= 97 && _ <= 102;
  }
  function Ee(b) {
    return Y(b, pe);
  }
  function Ge(b) {
    let _ = "", M = "";
    for (; _ = he(b); )
      M += _;
    return M;
  }
  function Ye(b) {
    let _ = "";
    for (; ; ) {
      const M = b.currentChar();
      if (M === "{" || M === "}" || M === "@" || M === "|" || !M)
        break;
      if (M === kt || M === je)
        if (K(b))
          _ += M, b.next();
        else {
          if (D(b))
            break;
          _ += M, b.next();
        }
      else
        _ += M, b.next();
    }
    return _;
  }
  function at(b) {
    w(b);
    let _ = "", M = "";
    for (; _ = oe(b); )
      M += _;
    const H = b.currentChar();
    if (H && H !== "}" && H !== zt && H !== kt && H !== je && H !== "　") {
      const ie = it(b);
      return p(de.INVALID_TOKEN_IN_PLACEHOLDER, s(), 0, M + ie), M + ie;
    }
    return b.currentChar() === zt && p(de.UNTERMINATED_CLOSING_BRACE, s(), 0), M;
  }
  function Fe(b) {
    w(b);
    let _ = "";
    return b.currentChar() === "-" ? (b.next(), _ += `-${Ge(b)}`) : _ += Ge(b), b.currentChar() === zt && p(de.UNTERMINATED_CLOSING_BRACE, s(), 0), _;
  }
  function $e(b) {
    return b !== ha && b !== je;
  }
  function xe(b) {
    w(b), h(b, "'");
    let _ = "", M = "";
    for (; _ = Y(b, $e); )
      _ === "\\" ? M += ze(b) : M += _;
    const H = b.currentChar();
    return H === je || H === zt ? (p(de.UNTERMINATED_SINGLE_QUOTE_IN_PLACEHOLDER, s(), 0), H === je && (b.next(), h(b, "'")), M) : (h(b, "'"), M);
  }
  function ze(b) {
    const _ = b.currentChar();
    switch (_) {
      case "\\":
      case "'":
        return b.next(), `\\${_}`;
      case "u":
        return ve(b, _, 4);
      case "U":
        return ve(b, _, 6);
      default:
        return p(de.UNKNOWN_ESCAPE_SEQUENCE, s(), 0, _), "";
    }
  }
  function ve(b, _, M) {
    h(b, _);
    let H = "";
    for (let ie = 0; ie < M; ie++) {
      const J = Ee(b);
      if (!J) {
        p(de.INVALID_UNICODE_ESCAPE_SEQUENCE, s(), 0, `\\${_}${H}${b.currentChar()}`);
        break;
      }
      H += J;
    }
    return `\\${_}${H}`;
  }
  function Xe(b) {
    return b !== "{" && b !== "}" && b !== kt && b !== je;
  }
  function it(b) {
    w(b);
    let _ = "", M = "";
    for (; _ = Y(b, Xe); )
      M += _;
    return M;
  }
  function Qe(b) {
    let _ = "", M = "";
    for (; _ = we(b); )
      M += _;
    return M;
  }
  function yt(b) {
    const _ = (M) => {
      const H = b.currentChar();
      return H === "{" || H === "@" || H === "|" || H === "(" || H === ")" || !H || H === kt ? M : (M += H, b.next(), _(M));
    };
    return _("");
  }
  function et(b) {
    w(b);
    const _ = h(
      b,
      "|"
      /* TokenChars.Pipe */
    );
    return w(b), _;
  }
  function tt(b, _) {
    let M = null;
    switch (b.currentChar()) {
      case "{":
        return _.braceNest >= 1 && p(de.NOT_ALLOW_NEST_PLACEHOLDER, s(), 0), b.next(), M = m(
          _,
          2,
          "{"
          /* TokenChars.BraceLeft */
        ), w(b), _.braceNest++, M;
      case "}":
        return _.braceNest > 0 && _.currentType === 2 && p(de.EMPTY_PLACEHOLDER, s(), 0), b.next(), M = m(
          _,
          3,
          "}"
          /* TokenChars.BraceRight */
        ), _.braceNest--, _.braceNest > 0 && w(b), _.inLinked && _.braceNest === 0 && (_.inLinked = !1), M;
      case "@":
        return _.braceNest > 0 && p(de.UNTERMINATED_CLOSING_BRACE, s(), 0), M = nt(b, _) || g(_), _.braceNest = 0, M;
      default: {
        let ie = !0, J = !0, y = !0;
        if (D(b))
          return _.braceNest > 0 && p(de.UNTERMINATED_CLOSING_BRACE, s(), 0), M = m(_, 1, et(b)), _.braceNest = 0, _.inLinked = !1, M;
        if (_.braceNest > 0 && (_.currentType === 4 || _.currentType === 5 || _.currentType === 6))
          return p(de.UNTERMINATED_CLOSING_BRACE, s(), 0), _.braceNest = 0, lt(b, _);
        if (ie = L(b, _))
          return M = m(_, 4, at(b)), w(b), M;
        if (J = S(b, _))
          return M = m(_, 5, Fe(b)), w(b), M;
        if (y = T(b, _))
          return M = m(_, 6, xe(b)), w(b), M;
        if (!ie && !J && !y)
          return M = m(_, 12, it(b)), p(de.INVALID_TOKEN_IN_PLACEHOLDER, s(), 0, M.value), w(b), M;
        break;
      }
    }
    return M;
  }
  function nt(b, _) {
    const { currentType: M } = _;
    let H = null;
    const ie = b.currentChar();
    switch ((M === 7 || M === 8 || M === 11 || M === 9) && (ie === je || ie === kt) && p(de.INVALID_LINKED_FORMAT, s(), 0), ie) {
      case "@":
        return b.next(), H = m(
          _,
          7,
          "@"
          /* TokenChars.LinkedAlias */
        ), _.inLinked = !0, H;
      case ".":
        return w(b), b.next(), m(
          _,
          8,
          "."
          /* TokenChars.LinkedDot */
        );
      case ":":
        return w(b), b.next(), m(
          _,
          9,
          ":"
          /* TokenChars.LinkedDelimiter */
        );
      default:
        return D(b) ? (H = m(_, 1, et(b)), _.braceNest = 0, _.inLinked = !1, H) : I(b, _) || $(b, _) ? (w(b), nt(b, _)) : k(b, _) ? (w(b), m(_, 11, Qe(b))) : C(b, _) ? (w(b), ie === "{" ? tt(b, _) || H : m(_, 10, yt(b))) : (M === 7 && p(de.INVALID_LINKED_FORMAT, s(), 0), _.braceNest = 0, _.inLinked = !1, lt(b, _));
    }
  }
  function lt(b, _) {
    let M = {
      type: 13
      /* TokenTypes.EOF */
    };
    if (_.braceNest > 0)
      return tt(b, _) || g(_);
    if (_.inLinked)
      return nt(b, _) || g(_);
    switch (b.currentChar()) {
      case "{":
        return tt(b, _) || g(_);
      case "}":
        return p(de.UNBALANCED_CLOSING_BRACE, s(), 0), b.next(), m(
          _,
          3,
          "}"
          /* TokenChars.BraceRight */
        );
      case "@":
        return nt(b, _) || g(_);
      default: {
        if (D(b))
          return M = m(_, 1, et(b)), _.braceNest = 0, _.inLinked = !1, M;
        if (K(b))
          return m(_, 0, Ye(b));
        break;
      }
    }
    return M;
  }
  function Tt() {
    const { currentType: b, offset: _, startLoc: M, endLoc: H } = l;
    return l.lastType = b, l.lastOffset = _, l.lastStartLoc = M, l.lastEndLoc = H, l.offset = r(), l.startLoc = s(), o.currentChar() === zt ? m(
      l,
      13
      /* TokenTypes.EOF */
    ) : lt(o, l);
  }
  return {
    nextToken: Tt,
    currentOffset: r,
    currentPosition: s,
    context: u
  };
}
const Id = "parser", Pd = /(?:\\\\|\\'|\\u([0-9a-fA-F]{4})|\\U([0-9a-fA-F]{6}))/g;
function Ad(e, t, n) {
  switch (e) {
    case "\\\\":
      return "\\";
    // eslint-disable-next-line no-useless-escape
    case "\\'":
      return "'";
    default: {
      const o = parseInt(t || n, 16);
      return o <= 55295 || o >= 57344 ? String.fromCodePoint(o) : "�";
    }
  }
}
function Nd(e = {}) {
  const t = e.location !== !1, { onError: n } = e;
  function o(d, E, L, S, ...T) {
    const I = d.currentPosition();
    if (I.offset += S, I.column += S, n) {
      const k = t ? jr(L, I) : null, $ = ar(E, k, {
        domain: Id,
        args: T
      });
      n($);
    }
  }
  function r(d, E, L) {
    const S = { type: d };
    return t && (S.start = E, S.end = E, S.loc = { start: L, end: L }), S;
  }
  function s(d, E, L, S) {
    t && (d.end = E, d.loc && (d.loc.end = L));
  }
  function a(d, E) {
    const L = d.context(), S = r(3, L.offset, L.startLoc);
    return S.value = E, s(S, d.currentOffset(), d.currentPosition()), S;
  }
  function i(d, E) {
    const L = d.context(), { lastOffset: S, lastStartLoc: T } = L, I = r(5, S, T);
    return I.index = parseInt(E, 10), d.nextToken(), s(I, d.currentOffset(), d.currentPosition()), I;
  }
  function l(d, E) {
    const L = d.context(), { lastOffset: S, lastStartLoc: T } = L, I = r(4, S, T);
    return I.key = E, d.nextToken(), s(I, d.currentOffset(), d.currentPosition()), I;
  }
  function u(d, E) {
    const L = d.context(), { lastOffset: S, lastStartLoc: T } = L, I = r(9, S, T);
    return I.value = E.replace(Pd, Ad), d.nextToken(), s(I, d.currentOffset(), d.currentPosition()), I;
  }
  function f(d) {
    const E = d.nextToken(), L = d.context(), { lastOffset: S, lastStartLoc: T } = L, I = r(8, S, T);
    return E.type !== 11 ? (o(d, de.UNEXPECTED_EMPTY_LINKED_MODIFIER, L.lastStartLoc, 0), I.value = "", s(I, S, T), {
      nextConsumeToken: E,
      node: I
    }) : (E.value == null && o(d, de.UNEXPECTED_LEXICAL_ANALYSIS, L.lastStartLoc, 0, Ot(E)), I.value = E.value || "", s(I, d.currentOffset(), d.currentPosition()), {
      node: I
    });
  }
  function p(d, E) {
    const L = d.context(), S = r(7, L.offset, L.startLoc);
    return S.value = E, s(S, d.currentOffset(), d.currentPosition()), S;
  }
  function m(d) {
    const E = d.context(), L = r(6, E.offset, E.startLoc);
    let S = d.nextToken();
    if (S.type === 8) {
      const T = f(d);
      L.modifier = T.node, S = T.nextConsumeToken || d.nextToken();
    }
    switch (S.type !== 9 && o(d, de.UNEXPECTED_LEXICAL_ANALYSIS, E.lastStartLoc, 0, Ot(S)), S = d.nextToken(), S.type === 2 && (S = d.nextToken()), S.type) {
      case 10:
        S.value == null && o(d, de.UNEXPECTED_LEXICAL_ANALYSIS, E.lastStartLoc, 0, Ot(S)), L.key = p(d, S.value || "");
        break;
      case 4:
        S.value == null && o(d, de.UNEXPECTED_LEXICAL_ANALYSIS, E.lastStartLoc, 0, Ot(S)), L.key = l(d, S.value || "");
        break;
      case 5:
        S.value == null && o(d, de.UNEXPECTED_LEXICAL_ANALYSIS, E.lastStartLoc, 0, Ot(S)), L.key = i(d, S.value || "");
        break;
      case 6:
        S.value == null && o(d, de.UNEXPECTED_LEXICAL_ANALYSIS, E.lastStartLoc, 0, Ot(S)), L.key = u(d, S.value || "");
        break;
      default: {
        o(d, de.UNEXPECTED_EMPTY_LINKED_KEY, E.lastStartLoc, 0);
        const T = d.context(), I = r(7, T.offset, T.startLoc);
        return I.value = "", s(I, T.offset, T.startLoc), L.key = I, s(L, T.offset, T.startLoc), {
          nextConsumeToken: S,
          node: L
        };
      }
    }
    return s(L, d.currentOffset(), d.currentPosition()), {
      node: L
    };
  }
  function g(d) {
    const E = d.context(), L = E.currentType === 1 ? d.currentOffset() : E.offset, S = E.currentType === 1 ? E.endLoc : E.startLoc, T = r(2, L, S);
    T.items = [];
    let I = null;
    do {
      const C = I || d.nextToken();
      switch (I = null, C.type) {
        case 0:
          C.value == null && o(d, de.UNEXPECTED_LEXICAL_ANALYSIS, E.lastStartLoc, 0, Ot(C)), T.items.push(a(d, C.value || ""));
          break;
        case 5:
          C.value == null && o(d, de.UNEXPECTED_LEXICAL_ANALYSIS, E.lastStartLoc, 0, Ot(C)), T.items.push(i(d, C.value || ""));
          break;
        case 4:
          C.value == null && o(d, de.UNEXPECTED_LEXICAL_ANALYSIS, E.lastStartLoc, 0, Ot(C)), T.items.push(l(d, C.value || ""));
          break;
        case 6:
          C.value == null && o(d, de.UNEXPECTED_LEXICAL_ANALYSIS, E.lastStartLoc, 0, Ot(C)), T.items.push(u(d, C.value || ""));
          break;
        case 7: {
          const D = m(d);
          T.items.push(D.node), I = D.nextConsumeToken || null;
          break;
        }
      }
    } while (E.currentType !== 13 && E.currentType !== 1);
    const k = E.currentType === 1 ? E.lastOffset : d.currentOffset(), $ = E.currentType === 1 ? E.lastEndLoc : d.currentPosition();
    return s(T, k, $), T;
  }
  function h(d, E, L, S) {
    const T = d.context();
    let I = S.items.length === 0;
    const k = r(1, E, L);
    k.cases = [], k.cases.push(S);
    do {
      const $ = g(d);
      I || (I = $.items.length === 0), k.cases.push($);
    } while (T.currentType !== 13);
    return I && o(d, de.MUST_HAVE_MESSAGES_IN_PLURAL, L, 0), s(k, d.currentOffset(), d.currentPosition()), k;
  }
  function v(d) {
    const E = d.context(), { offset: L, startLoc: S } = E, T = g(d);
    return E.currentType === 13 ? T : h(d, L, S, T);
  }
  function w(d) {
    const E = Ld(d, De({}, e)), L = E.context(), S = r(0, L.offset, L.startLoc);
    return t && S.loc && (S.loc.source = d), S.body = v(E), e.onCacheKey && (S.cacheKey = e.onCacheKey(d)), L.currentType !== 13 && o(E, de.UNEXPECTED_LEXICAL_ANALYSIS, L.lastStartLoc, 0, d[L.offset] || ""), s(S, E.currentOffset(), E.currentPosition()), S;
  }
  return { parse: w };
}
function Ot(e) {
  if (e.type === 13)
    return "EOF";
  const t = (e.value || "").replace(/\r?\n/gu, "\\n");
  return t.length > 10 ? t.slice(0, 9) + "…" : t;
}
function Md(e, t = {}) {
  const n = {
    ast: e,
    helpers: /* @__PURE__ */ new Set()
  };
  return { context: () => n, helper: (s) => (n.helpers.add(s), s) };
}
function va(e, t) {
  for (let n = 0; n < e.length; n++)
    ms(e[n], t);
}
function ms(e, t) {
  switch (e.type) {
    case 1:
      va(e.cases, t), t.helper(
        "plural"
        /* HelperNameMap.PLURAL */
      );
      break;
    case 2:
      va(e.items, t);
      break;
    case 6: {
      ms(e.key, t), t.helper(
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
function Rd(e, t = {}) {
  const n = Md(e);
  n.helper(
    "normalize"
    /* HelperNameMap.NORMALIZE */
  ), e.body && ms(e.body, n);
  const o = n.context();
  e.helpers = Array.from(o.helpers);
}
function $d(e) {
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
      const o = e.items[n];
      if (!(o.type === 3 || o.type === 9) || o.value == null)
        break;
      t.push(o.value);
    }
    if (t.length === e.items.length) {
      e.static = ps(t);
      for (let n = 0; n < e.items.length; n++) {
        const o = e.items[n];
        (o.type === 3 || o.type === 9) && delete o.value;
      }
    }
  }
}
function Mn(e) {
  switch (e.t = e.type, e.type) {
    case 0: {
      const t = e;
      Mn(t.body), t.b = t.body, delete t.body;
      break;
    }
    case 1: {
      const t = e, n = t.cases;
      for (let o = 0; o < n.length; o++)
        Mn(n[o]);
      t.c = n, delete t.cases;
      break;
    }
    case 2: {
      const t = e, n = t.items;
      for (let o = 0; o < n.length; o++)
        Mn(n[o]);
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
      Mn(t.key), t.k = t.key, delete t.key, t.modifier && (Mn(t.modifier), t.m = t.modifier, delete t.modifier);
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
function Dd(e, t) {
  const { filename: n, breakLineCode: o, needIndent: r } = t, s = t.location !== !1, a = {
    filename: n,
    code: "",
    column: 1,
    line: 1,
    offset: 0,
    map: void 0,
    breakLineCode: o,
    needIndent: r,
    indentLevel: 0
  };
  s && e.loc && (a.source = e.loc.source);
  const i = () => a;
  function l(v, w) {
    a.code += v;
  }
  function u(v, w = !0) {
    const d = w ? o : "";
    l(r ? d + "  ".repeat(v) : d);
  }
  function f(v = !0) {
    const w = ++a.indentLevel;
    v && u(w);
  }
  function p(v = !0) {
    const w = --a.indentLevel;
    v && u(w);
  }
  function m() {
    u(a.indentLevel);
  }
  return {
    context: i,
    push: l,
    indent: f,
    deindent: p,
    newline: m,
    helper: (v) => `_${v}`,
    needIndent: () => a.needIndent
  };
}
function Fd(e, t) {
  const { helper: n } = e;
  e.push(`${n(
    "linked"
    /* HelperNameMap.LINKED */
  )}(`), Fn(e, t.key), t.modifier ? (e.push(", "), Fn(e, t.modifier), e.push(", _type")) : e.push(", undefined, _type"), e.push(")");
}
function xd(e, t) {
  const { helper: n, needIndent: o } = e;
  e.push(`${n(
    "normalize"
    /* HelperNameMap.NORMALIZE */
  )}([`), e.indent(o());
  const r = t.items.length;
  for (let s = 0; s < r && (Fn(e, t.items[s]), s !== r - 1); s++)
    e.push(", ");
  e.deindent(o()), e.push("])");
}
function zd(e, t) {
  const { helper: n, needIndent: o } = e;
  if (t.cases.length > 1) {
    e.push(`${n(
      "plural"
      /* HelperNameMap.PLURAL */
    )}([`), e.indent(o());
    const r = t.cases.length;
    for (let s = 0; s < r && (Fn(e, t.cases[s]), s !== r - 1); s++)
      e.push(", ");
    e.deindent(o()), e.push("])");
  }
}
function Bd(e, t) {
  t.body ? Fn(e, t.body) : e.push("null");
}
function Fn(e, t) {
  const { helper: n } = e;
  switch (t.type) {
    case 0:
      Bd(e, t);
      break;
    case 1:
      zd(e, t);
      break;
    case 2:
      xd(e, t);
      break;
    case 6:
      Fd(e, t);
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
const Wd = (e, t = {}) => {
  const n = Z(t.mode) ? t.mode : "normal", o = Z(t.filename) ? t.filename : "message.intl";
  t.sourceMap;
  const r = t.breakLineCode != null ? t.breakLineCode : n === "arrow" ? ";" : `
`, s = t.needIndent ? t.needIndent : n !== "arrow", a = e.helpers || [], i = Dd(e, {
    filename: o,
    breakLineCode: r,
    needIndent: s
  });
  i.push(n === "normal" ? "function __msg__ (ctx) {" : "(ctx) => {"), i.indent(s), a.length > 0 && (i.push(`const { ${ps(a.map((f) => `${f}: _${f}`), ", ")} } = ctx`), i.newline()), i.push("return "), Fn(i, e), i.deindent(s), i.push("}"), delete e.helpers;
  const { code: l, map: u } = i.context();
  return {
    ast: e,
    code: l,
    map: u ? u.toJSON() : void 0
    // eslint-disable-line @typescript-eslint/no-explicit-any
  };
};
function jd(e, t = {}) {
  const n = De({}, t), o = !!n.jit, r = !!n.minify, s = n.optimize == null ? !0 : n.optimize, i = Nd(n).parse(e);
  return o ? (s && $d(i), r && Mn(i), { ast: i, code: "" }) : (Rd(i, n), Wd(i, n));
}
/*!
  * core-base v11.2.2
  * (c) 2025 kazuya kawaguchi
  * Released under the MIT License.
  */
function Vd() {
  typeof __INTLIFY_DROP_MESSAGE_COMPILER__ != "boolean" && (zo().__INTLIFY_DROP_MESSAGE_COMPILER__ = !1);
}
function At(e) {
  return ue(e) && hs(e) === 0 && (_t(e, "b") || _t(e, "body"));
}
const pl = ["b", "body"];
function Ud(e) {
  return pn(e, pl);
}
const ml = ["c", "cases"];
function Hd(e) {
  return pn(e, ml, []);
}
const hl = ["s", "static"];
function Kd(e) {
  return pn(e, hl);
}
const vl = ["i", "items"];
function Gd(e) {
  return pn(e, vl, []);
}
const gl = ["t", "type"];
function hs(e) {
  return pn(e, gl);
}
const yl = ["v", "value"];
function Ao(e, t) {
  const n = pn(e, yl);
  if (n != null)
    return n;
  throw uo(t);
}
const bl = ["m", "modifier"];
function Yd(e) {
  return pn(e, bl);
}
const _l = ["k", "key"];
function Zd(e) {
  const t = pn(e, _l);
  if (t)
    return t;
  throw uo(
    6
    /* NodeTypes.Linked */
  );
}
function pn(e, t, n) {
  for (let o = 0; o < t.length; o++) {
    const r = t[o];
    if (_t(e, r) && e[r] != null)
      return e[r];
  }
  return n;
}
const wl = [
  ...pl,
  ...ml,
  ...hl,
  ...vl,
  ..._l,
  ...bl,
  ...yl,
  ...gl
];
function uo(e) {
  return new Error(`unhandled node type: ${e}`);
}
function Lr(e) {
  return (n) => qd(n, e);
}
function qd(e, t) {
  const n = Ud(t);
  if (n == null)
    throw uo(
      0
      /* NodeTypes.Resource */
    );
  if (hs(n) === 1) {
    const s = Hd(n);
    return e.plural(s.reduce((a, i) => [
      ...a,
      ya(e, i)
    ], []));
  } else
    return ya(e, n);
}
function ya(e, t) {
  const n = Kd(t);
  if (n != null)
    return e.type === "text" ? n : e.normalize([n]);
  {
    const o = Gd(t).reduce((r, s) => [...r, Vr(e, s)], []);
    return e.normalize(o);
  }
}
function Vr(e, t) {
  const n = hs(t);
  switch (n) {
    case 3:
      return Ao(t, n);
    case 9:
      return Ao(t, n);
    case 4: {
      const o = t;
      if (_t(o, "k") && o.k)
        return e.interpolate(e.named(o.k));
      if (_t(o, "key") && o.key)
        return e.interpolate(e.named(o.key));
      throw uo(n);
    }
    case 5: {
      const o = t;
      if (_t(o, "i") && Ae(o.i))
        return e.interpolate(e.list(o.i));
      if (_t(o, "index") && Ae(o.index))
        return e.interpolate(e.list(o.index));
      throw uo(n);
    }
    case 6: {
      const o = t, r = Yd(o), s = Zd(o);
      return e.linked(Vr(e, s), r ? Vr(e, r) : void 0, e.type);
    }
    case 7:
      return Ao(t, n);
    case 8:
      return Ao(t, n);
    default:
      throw new Error(`unhandled node on format message part: ${n}`);
  }
}
const Jd = (e) => e;
let No = ge();
function Xd(e, t = {}) {
  let n = !1;
  const o = t.onError || wd;
  return t.onError = (r) => {
    n = !0, o(r);
  }, { ...jd(e, t), detectError: n };
}
// @__NO_SIDE_EFFECTS__
function Qd(e, t) {
  if (!__INTLIFY_DROP_MESSAGE_COMPILER__ && Z(e)) {
    Te(t.warnHtmlMessage) && t.warnHtmlMessage;
    const o = (t.onCacheKey || Jd)(e), r = No[o];
    if (r)
      return r;
    const { ast: s, detectError: a } = Xd(e, {
      ...t,
      location: !1,
      jit: !0
    }), i = Lr(s);
    return a ? i : No[o] = i;
  } else {
    const n = e.cacheKey;
    if (n) {
      const o = No[n];
      return o || (No[n] = Lr(e));
    } else
      return Lr(e);
  }
}
const Ht = {
  INVALID_ARGUMENT: _d,
  // 17
  INVALID_DATE_ARGUMENT: 18,
  INVALID_ISO_DATE_ARGUMENT: 19,
  NOT_SUPPORT_LOCALE_PROMISE_VALUE: 21,
  NOT_SUPPORT_LOCALE_ASYNC_FUNCTION: 22,
  NOT_SUPPORT_LOCALE_TYPE: 23
}, ef = 24;
function Kt(e) {
  return ar(e, null, void 0);
}
function vs(e, t) {
  return t.locale != null ? ba(t.locale) : ba(e.locale);
}
let Ir;
function ba(e) {
  if (Z(e))
    return e;
  if (be(e)) {
    if (e.resolvedOnce && Ir != null)
      return Ir;
    if (e.constructor.name === "Function") {
      const t = e();
      if (gd(t))
        throw Kt(Ht.NOT_SUPPORT_LOCALE_PROMISE_VALUE);
      return Ir = t;
    } else
      throw Kt(Ht.NOT_SUPPORT_LOCALE_ASYNC_FUNCTION);
  } else
    throw Kt(Ht.NOT_SUPPORT_LOCALE_TYPE);
}
function tf(e, t, n) {
  return [.../* @__PURE__ */ new Set([
    n,
    ...ke(t) ? t : ue(t) ? Object.keys(t) : Z(t) ? [t] : [n]
  ])];
}
function Cl(e, t, n) {
  const o = Z(n) ? n : Ko, r = e;
  r.__localeChainCache || (r.__localeChainCache = /* @__PURE__ */ new Map());
  let s = r.__localeChainCache.get(o);
  if (!s) {
    s = [];
    let a = [n];
    for (; ke(a); )
      a = _a(s, a, t);
    const i = ke(t) || !le(t) ? t : t.default ? t.default : null;
    a = Z(i) ? [i] : i, ke(a) && _a(s, a, !1), r.__localeChainCache.set(o, s);
  }
  return s;
}
function _a(e, t, n) {
  let o = !0;
  for (let r = 0; r < t.length && Te(o); r++) {
    const s = t[r];
    Z(s) && (o = nf(e, t[r], n));
  }
  return o;
}
function nf(e, t, n) {
  let o;
  const r = t.split("-");
  do {
    const s = r.join("-");
    o = of(e, s, n), r.splice(-1, 1);
  } while (r.length && o === !0);
  return o;
}
function of(e, t, n) {
  let o = !1;
  if (!e.includes(t) && (o = !0, t)) {
    o = t[t.length - 1] !== "!";
    const r = t.replace(/!/g, "");
    e.push(r), (ke(n) || le(n)) && n[r] && (o = n[r]);
  }
  return o;
}
const mn = [];
mn[
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
mn[
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
mn[
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
mn[
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
mn[
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
mn[
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
mn[
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
const rf = /^\s?(?:true|false|-?[\d.]+|'[^']*'|"[^"]*")\s?$/;
function sf(e) {
  return rf.test(e);
}
function af(e) {
  const t = e.charCodeAt(0), n = e.charCodeAt(e.length - 1);
  return t === n && (t === 34 || t === 39) ? e.slice(1, -1) : e;
}
function lf(e) {
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
function uf(e) {
  const t = e.trim();
  return e.charAt(0) === "0" && isNaN(parseInt(e)) ? !1 : sf(t) ? af(t) : "*" + t;
}
function cf(e) {
  const t = [];
  let n = -1, o = 0, r = 0, s, a, i, l, u, f, p;
  const m = [];
  m[
    0
    /* Actions.APPEND */
  ] = () => {
    a === void 0 ? a = i : a += i;
  }, m[
    1
    /* Actions.PUSH */
  ] = () => {
    a !== void 0 && (t.push(a), a = void 0);
  }, m[
    2
    /* Actions.INC_SUB_PATH_DEPTH */
  ] = () => {
    m[
      0
      /* Actions.APPEND */
    ](), r++;
  }, m[
    3
    /* Actions.PUSH_SUB_PATH */
  ] = () => {
    if (r > 0)
      r--, o = 4, m[
        0
        /* Actions.APPEND */
      ]();
    else {
      if (r = 0, a === void 0 || (a = uf(a), a === !1))
        return !1;
      m[
        1
        /* Actions.PUSH */
      ]();
    }
  };
  function g() {
    const h = e[n + 1];
    if (o === 5 && h === "'" || o === 6 && h === '"')
      return n++, i = "\\" + h, m[
        0
        /* Actions.APPEND */
      ](), !0;
  }
  for (; o !== null; )
    if (n++, s = e[n], !(s === "\\" && g())) {
      if (l = lf(s), p = mn[o], u = p[l] || p.l || 8, u === 8 || (o = u[0], u[1] !== void 0 && (f = m[u[1]], f && (i = s, f() === !1))))
        return;
      if (o === 7)
        return t;
    }
}
const wa = /* @__PURE__ */ new Map();
function df(e, t) {
  return ue(e) ? e[t] : null;
}
function ff(e, t) {
  if (!ue(e))
    return null;
  let n = wa.get(t);
  if (n || (n = cf(t), n && wa.set(t, n)), !n)
    return null;
  const o = n.length;
  let r = e, s = 0;
  for (; s < o; ) {
    const a = n[s];
    if (wl.includes(a) && At(r))
      return null;
    const i = r[a];
    if (i === void 0 || be(r))
      return null;
    r = i, s++;
  }
  return r;
}
const pf = "11.2.2", ir = -1, Ko = "en-US", Ca = "", Ea = (e) => `${e.charAt(0).toLocaleUpperCase()}${e.substr(1)}`;
function mf() {
  return {
    upper: (e, t) => t === "text" && Z(e) ? e.toUpperCase() : t === "vnode" && ue(e) && "__v_isVNode" in e ? e.children.toUpperCase() : e,
    lower: (e, t) => t === "text" && Z(e) ? e.toLowerCase() : t === "vnode" && ue(e) && "__v_isVNode" in e ? e.children.toLowerCase() : e,
    capitalize: (e, t) => t === "text" && Z(e) ? Ea(e) : t === "vnode" && ue(e) && "__v_isVNode" in e ? Ea(e.children) : e
  };
}
let El;
function hf(e) {
  El = e;
}
let Sl;
function vf(e) {
  Sl = e;
}
let Tl;
function gf(e) {
  Tl = e;
}
let kl = null;
const Sa = (e) => {
  kl = e;
}, yf = () => kl;
let Ta = 0;
function bf(e = {}) {
  const t = be(e.onWarn) ? e.onWarn : cd, n = Z(e.version) ? e.version : pf, o = Z(e.locale) || be(e.locale) ? e.locale : Ko, r = be(o) ? Ko : o, s = ke(e.fallbackLocale) || le(e.fallbackLocale) || Z(e.fallbackLocale) || e.fallbackLocale === !1 ? e.fallbackLocale : r, a = le(e.messages) ? e.messages : Pr(r), i = le(e.datetimeFormats) ? e.datetimeFormats : Pr(r), l = le(e.numberFormats) ? e.numberFormats : Pr(r), u = De(ge(), e.modifiers, mf()), f = e.pluralRules || ge(), p = be(e.missing) ? e.missing : null, m = Te(e.missingWarn) || Ho(e.missingWarn) ? e.missingWarn : !0, g = Te(e.fallbackWarn) || Ho(e.fallbackWarn) ? e.fallbackWarn : !0, h = !!e.fallbackFormat, v = !!e.unresolving, w = be(e.postTranslation) ? e.postTranslation : null, d = le(e.processor) ? e.processor : null, E = Te(e.warnHtmlMessage) ? e.warnHtmlMessage : !0, L = !!e.escapeParameter, S = be(e.messageCompiler) ? e.messageCompiler : El, T = be(e.messageResolver) ? e.messageResolver : Sl || df, I = be(e.localeFallbacker) ? e.localeFallbacker : Tl || tf, k = ue(e.fallbackContext) ? e.fallbackContext : void 0, $ = e, C = ue($.__datetimeFormatters) ? $.__datetimeFormatters : /* @__PURE__ */ new Map(), D = ue($.__numberFormatters) ? $.__numberFormatters : /* @__PURE__ */ new Map(), K = ue($.__meta) ? $.__meta : {};
  Ta++;
  const Y = {
    version: n,
    cid: Ta,
    locale: o,
    fallbackLocale: s,
    messages: a,
    modifiers: u,
    pluralRules: f,
    missing: p,
    missingWarn: m,
    fallbackWarn: g,
    fallbackFormat: h,
    unresolving: v,
    postTranslation: w,
    processor: d,
    warnHtmlMessage: E,
    escapeParameter: L,
    messageCompiler: S,
    messageResolver: T,
    localeFallbacker: I,
    fallbackContext: k,
    onWarn: t,
    __meta: K
  };
  return Y.datetimeFormats = i, Y.numberFormats = l, Y.__datetimeFormatters = C, Y.__numberFormatters = D, Y;
}
const Pr = (e) => ({ [e]: ge() });
function gs(e, t, n, o, r) {
  const { missing: s, onWarn: a } = e;
  if (s !== null) {
    const i = s(e, n, t, r);
    return Z(i) ? i : t;
  } else
    return t;
}
function Jn(e, t, n) {
  const o = e;
  o.__localeChainCache = /* @__PURE__ */ new Map(), e.localeFallbacker(e, n, t);
}
function _f(e, t) {
  return e === t ? !1 : e.split("-")[0] === t.split("-")[0];
}
function wf(e, t) {
  const n = t.indexOf(e);
  if (n === -1)
    return !1;
  for (let o = n + 1; o < t.length; o++)
    if (_f(e, t[o]))
      return !0;
  return !1;
}
function ka(e, ...t) {
  const { datetimeFormats: n, unresolving: o, fallbackLocale: r, onWarn: s, localeFallbacker: a } = e, { __datetimeFormatters: i } = e, [l, u, f, p] = Ur(...t), m = Te(f.missingWarn) ? f.missingWarn : e.missingWarn;
  Te(f.fallbackWarn) ? f.fallbackWarn : e.fallbackWarn;
  const g = !!f.part, h = vs(e, f), v = a(
    e,
    // eslint-disable-line @typescript-eslint/no-explicit-any
    r,
    h
  );
  if (!Z(l) || l === "")
    return new Intl.DateTimeFormat(h, p).format(u);
  let w = {}, d, E = null;
  const L = "datetime format";
  for (let I = 0; I < v.length && (d = v[I], w = n[d] || {}, E = w[l], !le(E)); I++)
    gs(e, l, d, m, L);
  if (!le(E) || !Z(d))
    return o ? ir : l;
  let S = `${d}__${l}`;
  sr(p) || (S = `${S}__${JSON.stringify(p)}`);
  let T = i.get(S);
  return T || (T = new Intl.DateTimeFormat(d, De({}, E, p)), i.set(S, T)), g ? T.formatToParts(u) : T.format(u);
}
const Ol = [
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
function Ur(...e) {
  const [t, n, o, r] = e, s = ge();
  let a = ge(), i;
  if (Z(t)) {
    const l = t.match(/(\d{4}-\d{2}-\d{2})(T|\s)?(.*)/);
    if (!l)
      throw Kt(Ht.INVALID_ISO_DATE_ARGUMENT);
    const u = l[3] ? l[3].trim().startsWith("T") ? `${l[1].trim()}${l[3].trim()}` : `${l[1].trim()}T${l[3].trim()}` : l[1].trim();
    i = new Date(u);
    try {
      i.toISOString();
    } catch {
      throw Kt(Ht.INVALID_ISO_DATE_ARGUMENT);
    }
  } else if (pd(t)) {
    if (isNaN(t.getTime()))
      throw Kt(Ht.INVALID_DATE_ARGUMENT);
    i = t;
  } else if (Ae(t))
    i = t;
  else
    throw Kt(Ht.INVALID_ARGUMENT);
  return Z(n) ? s.key = n : le(n) && Object.keys(n).forEach((l) => {
    Ol.includes(l) ? a[l] = n[l] : s[l] = n[l];
  }), Z(o) ? s.locale = o : le(o) && (a = o), le(r) && (a = r), [s.key || "", i, s, a];
}
function Oa(e, t, n) {
  const o = e;
  for (const r in n) {
    const s = `${t}__${r}`;
    o.__datetimeFormatters.has(s) && o.__datetimeFormatters.delete(s);
  }
}
function La(e, ...t) {
  const { numberFormats: n, unresolving: o, fallbackLocale: r, onWarn: s, localeFallbacker: a } = e, { __numberFormatters: i } = e, [l, u, f, p] = Hr(...t), m = Te(f.missingWarn) ? f.missingWarn : e.missingWarn;
  Te(f.fallbackWarn) ? f.fallbackWarn : e.fallbackWarn;
  const g = !!f.part, h = vs(e, f), v = a(
    e,
    // eslint-disable-line @typescript-eslint/no-explicit-any
    r,
    h
  );
  if (!Z(l) || l === "")
    return new Intl.NumberFormat(h, p).format(u);
  let w = {}, d, E = null;
  const L = "number format";
  for (let I = 0; I < v.length && (d = v[I], w = n[d] || {}, E = w[l], !le(E)); I++)
    gs(e, l, d, m, L);
  if (!le(E) || !Z(d))
    return o ? ir : l;
  let S = `${d}__${l}`;
  sr(p) || (S = `${S}__${JSON.stringify(p)}`);
  let T = i.get(S);
  return T || (T = new Intl.NumberFormat(d, De({}, E, p)), i.set(S, T)), g ? T.formatToParts(u) : T.format(u);
}
const Ll = [
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
function Hr(...e) {
  const [t, n, o, r] = e, s = ge();
  let a = ge();
  if (!Ae(t))
    throw Kt(Ht.INVALID_ARGUMENT);
  const i = t;
  return Z(n) ? s.key = n : le(n) && Object.keys(n).forEach((l) => {
    Ll.includes(l) ? a[l] = n[l] : s[l] = n[l];
  }), Z(o) ? s.locale = o : le(o) && (a = o), le(r) && (a = r), [s.key || "", i, s, a];
}
function Ia(e, t, n) {
  const o = e;
  for (const r in n) {
    const s = `${t}__${r}`;
    o.__numberFormatters.has(s) && o.__numberFormatters.delete(s);
  }
}
const Cf = (e) => e, Ef = (e) => "", Sf = "text", Tf = (e) => e.length === 0 ? "" : ps(e), kf = yd;
function Pa(e, t) {
  return e = Math.abs(e), t === 2 ? e ? e > 1 ? 1 : 0 : 1 : e ? Math.min(e, 2) : 0;
}
function Of(e) {
  const t = Ae(e.pluralIndex) ? e.pluralIndex : -1;
  return e.named && (Ae(e.named.count) || Ae(e.named.n)) ? Ae(e.named.count) ? e.named.count : Ae(e.named.n) ? e.named.n : t : t;
}
function Lf(e, t) {
  t.count || (t.count = e), t.n || (t.n = e);
}
function If(e = {}) {
  const t = e.locale, n = Of(e), o = ue(e.pluralRules) && Z(t) && be(e.pluralRules[t]) ? e.pluralRules[t] : Pa, r = ue(e.pluralRules) && Z(t) && be(e.pluralRules[t]) ? Pa : void 0, s = (d) => d[o(n, d.length, r)], a = e.list || [], i = (d) => a[d], l = e.named || ge();
  Ae(e.pluralIndex) && Lf(n, l);
  const u = (d) => l[d];
  function f(d, E) {
    const L = be(e.messages) ? e.messages(d, !!E) : ue(e.messages) ? e.messages[d] : !1;
    return L || (e.parent ? e.parent.message(d) : Ef);
  }
  const p = (d) => e.modifiers ? e.modifiers[d] : Cf, m = le(e.processor) && be(e.processor.normalize) ? e.processor.normalize : Tf, g = le(e.processor) && be(e.processor.interpolate) ? e.processor.interpolate : kf, h = le(e.processor) && Z(e.processor.type) ? e.processor.type : Sf, w = {
    list: i,
    named: u,
    plural: s,
    linked: (d, ...E) => {
      const [L, S] = E;
      let T = "text", I = "";
      E.length === 1 ? ue(L) ? (I = L.modifier || I, T = L.type || T) : Z(L) && (I = L || I) : E.length === 2 && (Z(L) && (I = L || I), Z(S) && (T = S || T));
      const k = f(d, !0)(w), $ = (
        // The message in vnode resolved with linked are returned as an array by processor.nomalize
        T === "vnode" && ke(k) && I ? k[0] : k
      );
      return I ? p(I)($, T) : $;
    },
    message: f,
    type: h,
    interpolate: g,
    normalize: m,
    values: De(ge(), a, l)
  };
  return w;
}
const Aa = () => "", Yt = (e) => be(e);
function Na(e, ...t) {
  const { fallbackFormat: n, postTranslation: o, unresolving: r, messageCompiler: s, fallbackLocale: a, messages: i } = e, [l, u] = Kr(...t), f = Te(u.missingWarn) ? u.missingWarn : e.missingWarn, p = Te(u.fallbackWarn) ? u.fallbackWarn : e.fallbackWarn, m = Te(u.escapeParameter) ? u.escapeParameter : e.escapeParameter, g = !!u.resolvedMessage, h = Z(u.default) || Te(u.default) ? Te(u.default) ? s ? l : () => l : u.default : n ? s ? l : () => l : null, v = n || h != null && (Z(h) || be(h)), w = vs(e, u);
  m && Pf(u);
  let [d, E, L] = g ? [
    l,
    w,
    i[w] || ge()
  ] : Il(e, l, w, a, p, f), S = d, T = l;
  if (!g && !(Z(S) || At(S) || Yt(S)) && v && (S = h, T = S), !g && (!(Z(S) || At(S) || Yt(S)) || !Z(E)))
    return r ? ir : l;
  let I = !1;
  const k = () => {
    I = !0;
  }, $ = Yt(S) ? S : Pl(e, l, E, S, T, k);
  if (I)
    return S;
  const C = Mf(e, E, L, u), D = If(C), K = Af(e, $, D);
  let Y = o ? o(K, l) : K;
  return m && Z(Y) && (Y = hd(Y)), Y;
}
function Pf(e) {
  ke(e.list) ? e.list = e.list.map((t) => Z(t) ? pa(t) : t) : ue(e.named) && Object.keys(e.named).forEach((t) => {
    Z(e.named[t]) && (e.named[t] = pa(e.named[t]));
  });
}
function Il(e, t, n, o, r, s) {
  const { messages: a, onWarn: i, messageResolver: l, localeFallbacker: u } = e, f = u(e, o, n);
  let p = ge(), m, g = null;
  const h = "translate";
  for (let v = 0; v < f.length && (m = f[v], p = a[m] || ge(), (g = l(p, t)) === null && (g = p[t]), !(Z(g) || At(g) || Yt(g))); v++)
    if (!wf(m, f)) {
      const w = gs(
        e,
        // eslint-disable-line @typescript-eslint/no-explicit-any
        t,
        m,
        s,
        h
      );
      w !== t && (g = w);
    }
  return [g, m, p];
}
function Pl(e, t, n, o, r, s) {
  const { messageCompiler: a, warnHtmlMessage: i } = e;
  if (Yt(o)) {
    const u = o;
    return u.locale = u.locale || n, u.key = u.key || t, u;
  }
  if (a == null) {
    const u = () => o;
    return u.locale = n, u.key = t, u;
  }
  const l = a(o, Nf(e, n, r, o, i, s));
  return l.locale = n, l.key = t, l.source = o, l;
}
function Af(e, t, n) {
  return t(n);
}
function Kr(...e) {
  const [t, n, o] = e, r = ge();
  if (!Z(t) && !Ae(t) && !Yt(t) && !At(t))
    throw Kt(Ht.INVALID_ARGUMENT);
  const s = Ae(t) ? String(t) : (Yt(t), t);
  return Ae(n) ? r.plural = n : Z(n) ? r.default = n : le(n) && !sr(n) ? r.named = n : ke(n) && (r.list = n), Ae(o) ? r.plural = o : Z(o) ? r.default = o : le(o) && De(r, o), [s, r];
}
function Nf(e, t, n, o, r, s) {
  return {
    locale: t,
    key: n,
    warnHtmlMessage: r,
    onError: (a) => {
      throw s && s(a), a;
    },
    onCacheKey: (a) => dd(t, n, a)
  };
}
function Mf(e, t, n, o) {
  const { modifiers: r, pluralRules: s, messageResolver: a, fallbackLocale: i, fallbackWarn: l, missingWarn: u, fallbackContext: f } = e, m = {
    locale: t,
    modifiers: r,
    pluralRules: s,
    messages: (g, h) => {
      let v = a(n, g);
      if (v == null && (f || h)) {
        const [, , w] = Il(
          f || e,
          // NOTE: if has fallbackContext, fallback to root, else if use linked, fallback to local context
          g,
          t,
          i,
          l,
          u
        );
        v = a(w, g);
      }
      if (Z(v) || At(v)) {
        let w = !1;
        const E = Pl(e, g, t, v, g, () => {
          w = !0;
        });
        return w ? Aa : E;
      } else return Yt(v) ? v : Aa;
    }
  };
  return e.processor && (m.processor = e.processor), o.list && (m.list = o.list), o.named && (m.named = o.named), Ae(o.plural) && (m.pluralIndex = o.plural), m;
}
Vd();
/*!
  * vue-i18n v11.2.2
  * (c) 2025 kazuya kawaguchi
  * Released under the MIT License.
  */
const Rf = "11.2.2";
function $f() {
  typeof __VUE_I18N_FULL_INSTALL__ != "boolean" && (zo().__VUE_I18N_FULL_INSTALL__ = !0), typeof __VUE_I18N_LEGACY_API__ != "boolean" && (zo().__VUE_I18N_LEGACY_API__ = !0), typeof __INTLIFY_DROP_MESSAGE_COMPILER__ != "boolean" && (zo().__INTLIFY_DROP_MESSAGE_COMPILER__ = !1);
}
const xn = {
  // composer module errors
  UNEXPECTED_RETURN_TYPE: ef,
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
function co(e, ...t) {
  return ar(e, null, void 0);
}
const Gr = /* @__PURE__ */ Sn("__translateVNode"), Yr = /* @__PURE__ */ Sn("__datetimeParts"), Zr = /* @__PURE__ */ Sn("__numberParts"), Df = Sn("__setPluralRules"), Al = /* @__PURE__ */ Sn("__injectWithOption"), qr = /* @__PURE__ */ Sn("__dispose");
function fo(e) {
  if (!ue(e) || At(e))
    return e;
  for (const t in e)
    if (_t(e, t))
      if (!t.includes("."))
        ue(e[t]) && fo(e[t]);
      else {
        const n = t.split("."), o = n.length - 1;
        let r = e, s = !1;
        for (let a = 0; a < o; a++) {
          if (n[a] === "__proto__")
            throw new Error(`unsafe key: ${n[a]}`);
          if (n[a] in r || (r[n[a]] = ge()), !ue(r[n[a]])) {
            s = !0;
            break;
          }
          r = r[n[a]];
        }
        if (s || (At(r) ? wl.includes(n[o]) || delete e[t] : (r[n[o]] = e[t], delete e[t])), !At(r)) {
          const a = r[n[o]];
          ue(a) && fo(a);
        }
      }
  return e;
}
function Nl(e, t) {
  const { messages: n, __i18n: o, messageResolver: r, flatJson: s } = t, a = le(n) ? n : ke(o) ? ge() : { [e]: ge() };
  if (ke(o) && o.forEach((i) => {
    if ("locale" in i && "resource" in i) {
      const { locale: l, resource: u } = i;
      l ? (a[l] = a[l] || ge(), Bo(u, a[l])) : Bo(u, a);
    } else
      Z(i) && Bo(JSON.parse(i), a);
  }), r == null && s)
    for (const i in a)
      _t(a, i) && fo(a[i]);
  return a;
}
function Ff(e) {
  return e.type;
}
function xf(e, t, n) {
  let o = ue(t.messages) ? t.messages : ge();
  "__i18nGlobal" in n && (o = Nl(e.locale.value, {
    messages: o,
    __i18n: n.__i18nGlobal
  }));
  const r = Object.keys(o);
  r.length && r.forEach((s) => {
    e.mergeLocaleMessage(s, o[s]);
  });
  {
    if (ue(t.datetimeFormats)) {
      const s = Object.keys(t.datetimeFormats);
      s.length && s.forEach((a) => {
        e.mergeDateTimeFormat(a, t.datetimeFormats[a]);
      });
    }
    if (ue(t.numberFormats)) {
      const s = Object.keys(t.numberFormats);
      s.length && s.forEach((a) => {
        e.mergeNumberFormat(a, t.numberFormats[a]);
      });
    }
  }
}
function Ma(e) {
  return z(tl, null, e, 0);
}
function Ml() {
  return "currentInstance" in Cr ? Cr["currentInstance"] : Cr.getCurrentInstance();
}
const Ra = () => [], zf = () => !1;
let $a = 0;
function Da(e) {
  return (t, n, o, r) => e(n, o, Ml() || void 0, r);
}
function Bf(e = {}) {
  const { __root: t, __injectWithOption: n } = e, o = t === void 0, r = e.flatJson, s = da ? x : dn;
  let a = Te(e.inheritLocale) ? e.inheritLocale : !0;
  const i = s(
    // prettier-ignore
    t && a ? t.locale.value : Z(e.locale) ? e.locale : Ko
  ), l = s(
    // prettier-ignore
    t && a ? t.fallbackLocale.value : Z(e.fallbackLocale) || ke(e.fallbackLocale) || le(e.fallbackLocale) || e.fallbackLocale === !1 ? e.fallbackLocale : i.value
  ), u = s(Nl(i.value, e)), f = s(le(e.datetimeFormats) ? e.datetimeFormats : { [i.value]: {} }), p = s(le(e.numberFormats) ? e.numberFormats : { [i.value]: {} });
  let m = t ? t.missingWarn : Te(e.missingWarn) || Ho(e.missingWarn) ? e.missingWarn : !0, g = t ? t.fallbackWarn : Te(e.fallbackWarn) || Ho(e.fallbackWarn) ? e.fallbackWarn : !0, h = t ? t.fallbackRoot : Te(e.fallbackRoot) ? e.fallbackRoot : !0, v = !!e.fallbackFormat, w = be(e.missing) ? e.missing : null, d = be(e.missing) ? Da(e.missing) : null, E = be(e.postTranslation) ? e.postTranslation : null, L = t ? t.warnHtmlMessage : Te(e.warnHtmlMessage) ? e.warnHtmlMessage : !0, S = !!e.escapeParameter;
  const T = t ? t.modifiers : le(e.modifiers) ? e.modifiers : {};
  let I = e.pluralRules || t && t.pluralRules, k;
  k = (() => {
    o && Sa(null);
    const y = {
      version: Rf,
      locale: i.value,
      fallbackLocale: l.value,
      messages: u.value,
      modifiers: T,
      pluralRules: I,
      missing: d === null ? void 0 : d,
      missingWarn: m,
      fallbackWarn: g,
      fallbackFormat: v,
      unresolving: !0,
      postTranslation: E === null ? void 0 : E,
      warnHtmlMessage: L,
      escapeParameter: S,
      messageResolver: e.messageResolver,
      messageCompiler: e.messageCompiler,
      __meta: { framework: "vue" }
    };
    y.datetimeFormats = f.value, y.numberFormats = p.value, y.__datetimeFormatters = le(k) ? k.__datetimeFormatters : void 0, y.__numberFormatters = le(k) ? k.__numberFormatters : void 0;
    const N = bf(y);
    return o && Sa(N), N;
  })(), Jn(k, i.value, l.value);
  function C() {
    return [
      i.value,
      l.value,
      u.value,
      f.value,
      p.value
    ];
  }
  const D = P({
    get: () => i.value,
    set: (y) => {
      k.locale = y, i.value = y;
    }
  }), K = P({
    get: () => l.value,
    set: (y) => {
      k.fallbackLocale = y, l.value = y, Jn(k, i.value, y);
    }
  }), Y = P(() => u.value), se = /* @__PURE__ */ P(() => f.value), we = /* @__PURE__ */ P(() => p.value);
  function me() {
    return be(E) ? E : null;
  }
  function oe(y) {
    E = y, k.postTranslation = y;
  }
  function B() {
    return w;
  }
  function he(y) {
    y !== null && (d = Da(y)), w = y, k.missing = d;
  }
  const pe = (y, N, te, ce, Be, vn) => {
    C();
    let ut;
    try {
      o || (k.fallbackContext = t ? yf() : void 0), ut = y(k);
    } finally {
      o || (k.fallbackContext = void 0);
    }
    if (te !== "translate exists" && // for not `te` (e.g `t`)
    Ae(ut) && ut === ir || te === "translate exists" && !ut) {
      const [wr, Gs] = N();
      return t && h ? ce(t) : Be(wr);
    } else {
      if (vn(ut))
        return ut;
      throw co(xn.UNEXPECTED_RETURN_TYPE);
    }
  };
  function Ee(...y) {
    return pe((N) => Reflect.apply(Na, null, [N, ...y]), () => Kr(...y), "translate", (N) => Reflect.apply(N.t, N, [...y]), (N) => N, (N) => Z(N));
  }
  function Ge(...y) {
    const [N, te, ce] = y;
    if (ce && !ue(ce))
      throw co(xn.INVALID_ARGUMENT);
    return Ee(N, te, De({ resolvedMessage: !0 }, ce || {}));
  }
  function Ye(...y) {
    return pe((N) => Reflect.apply(ka, null, [N, ...y]), () => Ur(...y), "datetime format", (N) => Reflect.apply(N.d, N, [...y]), () => Ca, (N) => Z(N) || ke(N));
  }
  function at(...y) {
    return pe((N) => Reflect.apply(La, null, [N, ...y]), () => Hr(...y), "number format", (N) => Reflect.apply(N.n, N, [...y]), () => Ca, (N) => Z(N) || ke(N));
  }
  function Fe(y) {
    return y.map((N) => Z(N) || Ae(N) || Te(N) ? Ma(String(N)) : N);
  }
  const xe = {
    normalize: Fe,
    interpolate: (y) => y,
    type: "vnode"
  };
  function ze(...y) {
    return pe((N) => {
      let te;
      const ce = N;
      try {
        ce.processor = xe, te = Reflect.apply(Na, null, [ce, ...y]);
      } finally {
        ce.processor = null;
      }
      return te;
    }, () => Kr(...y), "translate", (N) => N[Gr](...y), (N) => [Ma(N)], (N) => ke(N));
  }
  function ve(...y) {
    return pe((N) => Reflect.apply(La, null, [N, ...y]), () => Hr(...y), "number format", (N) => N[Zr](...y), Ra, (N) => Z(N) || ke(N));
  }
  function Xe(...y) {
    return pe((N) => Reflect.apply(ka, null, [N, ...y]), () => Ur(...y), "datetime format", (N) => N[Yr](...y), Ra, (N) => Z(N) || ke(N));
  }
  function it(y) {
    I = y, k.pluralRules = I;
  }
  function Qe(y, N) {
    return pe(() => {
      if (!y)
        return !1;
      const te = Z(N) ? N : i.value, ce = tt(te), Be = k.messageResolver(ce, y);
      return At(Be) || Yt(Be) || Z(Be);
    }, () => [y], "translate exists", (te) => Reflect.apply(te.te, te, [y, N]), zf, (te) => Te(te));
  }
  function yt(y) {
    let N = null;
    const te = Cl(k, l.value, i.value);
    for (let ce = 0; ce < te.length; ce++) {
      const Be = u.value[te[ce]] || {}, vn = k.messageResolver(Be, y);
      if (vn != null) {
        N = vn;
        break;
      }
    }
    return N;
  }
  function et(y) {
    const N = yt(y);
    return N ?? (t ? t.tm(y) || {} : {});
  }
  function tt(y) {
    return u.value[y] || {};
  }
  function nt(y, N) {
    if (r) {
      const te = { [y]: N };
      for (const ce in te)
        _t(te, ce) && fo(te[ce]);
      N = te[y];
    }
    u.value[y] = N, k.messages = u.value;
  }
  function lt(y, N) {
    u.value[y] = u.value[y] || {};
    const te = { [y]: N };
    if (r)
      for (const ce in te)
        _t(te, ce) && fo(te[ce]);
    N = te[y], Bo(N, u.value[y]), k.messages = u.value;
  }
  function Tt(y) {
    return f.value[y] || {};
  }
  function b(y, N) {
    f.value[y] = N, k.datetimeFormats = f.value, Oa(k, y, N);
  }
  function _(y, N) {
    f.value[y] = De(f.value[y] || {}, N), k.datetimeFormats = f.value, Oa(k, y, N);
  }
  function M(y) {
    return p.value[y] || {};
  }
  function H(y, N) {
    p.value[y] = N, k.numberFormats = p.value, Ia(k, y, N);
  }
  function ie(y, N) {
    p.value[y] = De(p.value[y] || {}, N), k.numberFormats = p.value, Ia(k, y, N);
  }
  $a++, t && da && (Q(t.locale, (y) => {
    a && (i.value = y, k.locale = y, Jn(k, i.value, l.value));
  }), Q(t.fallbackLocale, (y) => {
    a && (l.value = y, k.fallbackLocale = y, Jn(k, i.value, l.value));
  }));
  const J = {
    id: $a,
    locale: D,
    fallbackLocale: K,
    get inheritLocale() {
      return a;
    },
    set inheritLocale(y) {
      a = y, y && t && (i.value = t.locale.value, l.value = t.fallbackLocale.value, Jn(k, i.value, l.value));
    },
    get availableLocales() {
      return Object.keys(u.value).sort();
    },
    messages: Y,
    get modifiers() {
      return T;
    },
    get pluralRules() {
      return I || {};
    },
    get isGlobal() {
      return o;
    },
    get missingWarn() {
      return m;
    },
    set missingWarn(y) {
      m = y, k.missingWarn = m;
    },
    get fallbackWarn() {
      return g;
    },
    set fallbackWarn(y) {
      g = y, k.fallbackWarn = g;
    },
    get fallbackRoot() {
      return h;
    },
    set fallbackRoot(y) {
      h = y;
    },
    get fallbackFormat() {
      return v;
    },
    set fallbackFormat(y) {
      v = y, k.fallbackFormat = v;
    },
    get warnHtmlMessage() {
      return L;
    },
    set warnHtmlMessage(y) {
      L = y, k.warnHtmlMessage = y;
    },
    get escapeParameter() {
      return S;
    },
    set escapeParameter(y) {
      S = y, k.escapeParameter = y;
    },
    t: Ee,
    getLocaleMessage: tt,
    setLocaleMessage: nt,
    mergeLocaleMessage: lt,
    getPostTranslationHandler: me,
    setPostTranslationHandler: oe,
    getMissingHandler: B,
    setMissingHandler: he,
    [Df]: it
  };
  return J.datetimeFormats = se, J.numberFormats = we, J.rt = Ge, J.te = Qe, J.tm = et, J.d = Ye, J.n = at, J.getDateTimeFormat = Tt, J.setDateTimeFormat = b, J.mergeDateTimeFormat = _, J.getNumberFormat = M, J.setNumberFormat = H, J.mergeNumberFormat = ie, J[Al] = n, J[Gr] = ze, J[Yr] = Xe, J[Zr] = ve, J;
}
const ys = {
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
function Wf({ slots: e }, t) {
  return t.length === 1 && t[0] === "default" ? (e.default ? e.default() : []).reduce((o, r) => [
    ...o,
    // prettier-ignore
    ...r.type === ft ? r.children : [r]
  ], []) : t.reduce((n, o) => {
    const r = e[o];
    return r && (n[o] = r()), n;
  }, ge());
}
function Rl() {
  return ft;
}
De({
  keypath: {
    type: String,
    required: !0
  },
  plural: {
    type: [Number, String],
    validator: (e) => Ae(e) || !isNaN(e)
  }
}, ys);
function jf(e) {
  return ke(e) && !Z(e[0]);
}
function $l(e, t, n, o) {
  const { slots: r, attrs: s } = t;
  return () => {
    const a = { part: !0 };
    let i = ge();
    e.locale && (a.locale = e.locale), Z(e.format) ? a.key = e.format : ue(e.format) && (Z(e.format.key) && (a.key = e.format.key), i = Object.keys(e.format).reduce((m, g) => n.includes(g) ? De(ge(), m, { [g]: e.format[g] }) : m, ge()));
    const l = o(e.value, a, i);
    let u = [a.key];
    ke(l) ? u = l.map((m, g) => {
      const h = r[m.type], v = h ? h({ [m.type]: m.value, index: g, parts: l }) : [m.value];
      return jf(v) && (v[0].key = `${m.type}-${g}`), v;
    }) : Z(l) && (u = [l]);
    const f = De(ge(), s), p = Z(e.tag) || ue(e.tag) ? e.tag : Rl();
    return el(p, f, u);
  };
}
De({
  value: {
    type: Number,
    required: !0
  },
  format: {
    type: [String, Object]
  }
}, ys);
const Vf = /* @__PURE__ */ Sn("global-vue-i18n");
function bo(e = {}) {
  const t = Ml();
  if (t == null)
    throw co(xn.MUST_BE_CALL_SETUP_TOP);
  if (!t.isCE && t.appContext.app != null && !t.appContext.app.__VUE_I18N_SYMBOL__)
    throw co(xn.NOT_INSTALLED);
  const n = Uf(t), o = Kf(n), r = Ff(t), s = Hf(e, r);
  if (s === "global")
    return xf(o, e, r), o;
  if (s === "parent") {
    let l = Gf(n, t, e.__useComponent);
    return l == null && (l = o), l;
  }
  const a = n;
  let i = a.__getInstance(t);
  if (i == null) {
    const l = De({}, e);
    "__i18n" in r && (l.__i18n = r.__i18n), o && (l.__root = o), i = Bf(l), a.__composerExtend && (i[qr] = a.__composerExtend(i)), Zf(a, t, i), a.__setInstance(t, i);
  }
  return i;
}
function Uf(e) {
  const t = fe(e.isCE ? Vf : e.appContext.app.__VUE_I18N_SYMBOL__);
  if (!t)
    throw co(e.isCE ? xn.NOT_INSTALLED_WITH_PROVIDE : xn.UNEXPECTED_ERROR);
  return t;
}
function Hf(e, t) {
  return sr(e) ? "__i18n" in t ? "local" : "global" : e.useScope ? e.useScope : "local";
}
function Kf(e) {
  return e.mode === "composition" ? e.global : e.global.__composer;
}
function Gf(e, t, n = !1) {
  let o = null;
  const r = t.root;
  let s = Yf(t, n);
  for (; s != null; ) {
    const a = e;
    if (e.mode === "composition")
      o = a.__getInstance(s);
    else if (__VUE_I18N_LEGACY_API__) {
      const i = a.__getInstance(s);
      i != null && (o = i.__composer, n && o && !o[Al] && (o = null));
    }
    if (o != null || r === s)
      break;
    s = s.parent;
  }
  return o;
}
function Yf(e, t = !1) {
  return e == null ? null : t && e.vnode.ctx || e.parent;
}
function Zf(e, t, n) {
  Pe(() => {
  }, t), ls(() => {
    const o = n;
    e.__deleteInstance(t);
    const r = o[qr];
    r && (r(), delete o[qr]);
  }, t);
}
De({
  value: {
    type: [Number, Date],
    required: !0
  },
  format: {
    type: [String, Object]
  }
}, ys);
$f();
hf(Qd);
vf(ff);
gf(Cl);
const Dl = Symbol(), Wo = "el", qf = "is-", yn = (e, t, n, o, r) => {
  let s = `${e}-${t}`;
  return n && (s += `-${n}`), o && (s += `__${o}`), r && (s += `--${r}`), s;
}, Fl = Symbol("namespaceContextKey"), bs = (e) => {
  const t = e || (Ke() ? fe(Fl, x(Wo)) : x(Wo));
  return P(() => c(t) || Wo);
}, Re = (e, t) => {
  const n = bs(t);
  return {
    namespace: n,
    b: (v = "") => yn(n.value, e, v, "", ""),
    e: (v) => v ? yn(n.value, e, "", v, "") : "",
    m: (v) => v ? yn(n.value, e, "", "", v) : "",
    be: (v, w) => v && w ? yn(n.value, e, v, w, "") : "",
    em: (v, w) => v && w ? yn(n.value, e, "", v, w) : "",
    bm: (v, w) => v && w ? yn(n.value, e, v, "", w) : "",
    bem: (v, w, d) => v && w && d ? yn(n.value, e, v, w, d) : "",
    is: (v, ...w) => {
      const d = w.length >= 1 ? w[0] : !0;
      return v && d ? `${qf}${v}` : "";
    },
    cssVar: (v) => {
      const w = {};
      for (const d in v)
        v[d] && (w[`--${n.value}-${d}`] = v[d]);
      return w;
    },
    cssVarName: (v) => `--${n.value}-${v}`,
    cssVarBlock: (v) => {
      const w = {};
      for (const d in v)
        v[d] && (w[`--${n.value}-${e}-${d}`] = v[d]);
      return w;
    },
    cssVarBlockName: (v) => `--${n.value}-${e}-${v}`
  };
};
/**
* @vue/shared v3.5.13
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/
const po = () => {
}, Jf = Object.prototype.hasOwnProperty, Fa = (e, t) => Jf.call(e, t), Pt = Array.isArray, Ne = (e) => typeof e == "function", pt = (e) => typeof e == "string", dt = (e) => e !== null && typeof e == "object", Xf = Object.prototype.toString, Qf = (e) => Xf.call(e), ep = (e) => Qf(e) === "[object Object]";
var xl = typeof global == "object" && global && global.Object === Object && global, tp = typeof self == "object" && self && self.Object === Object && self, xt = xl || tp || Function("return this")(), $t = xt.Symbol, zl = Object.prototype, np = zl.hasOwnProperty, op = zl.toString, Xn = $t ? $t.toStringTag : void 0;
function rp(e) {
  var t = np.call(e, Xn), n = e[Xn];
  try {
    e[Xn] = void 0;
    var o = !0;
  } catch {
  }
  var r = op.call(e);
  return o && (t ? e[Xn] = n : delete e[Xn]), r;
}
var sp = Object.prototype, ap = sp.toString;
function ip(e) {
  return ap.call(e);
}
var lp = "[object Null]", up = "[object Undefined]", xa = $t ? $t.toStringTag : void 0;
function Yn(e) {
  return e == null ? e === void 0 ? up : lp : xa && xa in Object(e) ? rp(e) : ip(e);
}
function zn(e) {
  return e != null && typeof e == "object";
}
var cp = "[object Symbol]";
function lr(e) {
  return typeof e == "symbol" || zn(e) && Yn(e) == cp;
}
function dp(e, t) {
  for (var n = -1, o = e == null ? 0 : e.length, r = Array(o); ++n < o; )
    r[n] = t(e[n], n, e);
  return r;
}
var St = Array.isArray, za = $t ? $t.prototype : void 0, Ba = za ? za.toString : void 0;
function Bl(e) {
  if (typeof e == "string")
    return e;
  if (St(e))
    return dp(e, Bl) + "";
  if (lr(e))
    return Ba ? Ba.call(e) : "";
  var t = e + "";
  return t == "0" && 1 / e == -1 / 0 ? "-0" : t;
}
var fp = /\s/;
function pp(e) {
  for (var t = e.length; t-- && fp.test(e.charAt(t)); )
    ;
  return t;
}
var mp = /^\s+/;
function hp(e) {
  return e && e.slice(0, pp(e) + 1).replace(mp, "");
}
function fn(e) {
  var t = typeof e;
  return e != null && (t == "object" || t == "function");
}
var Wa = NaN, vp = /^[-+]0x[0-9a-f]+$/i, gp = /^0b[01]+$/i, yp = /^0o[0-7]+$/i, bp = parseInt;
function ja(e) {
  if (typeof e == "number")
    return e;
  if (lr(e))
    return Wa;
  if (fn(e)) {
    var t = typeof e.valueOf == "function" ? e.valueOf() : e;
    e = fn(t) ? t + "" : t;
  }
  if (typeof e != "string")
    return e === 0 ? e : +e;
  e = hp(e);
  var n = gp.test(e);
  return n || yp.test(e) ? bp(e.slice(2), n ? 2 : 8) : vp.test(e) ? Wa : +e;
}
function Wl(e) {
  return e;
}
var _p = "[object AsyncFunction]", wp = "[object Function]", Cp = "[object GeneratorFunction]", Ep = "[object Proxy]";
function jl(e) {
  if (!fn(e))
    return !1;
  var t = Yn(e);
  return t == wp || t == Cp || t == _p || t == Ep;
}
var Ar = xt["__core-js_shared__"], Va = function() {
  var e = /[^.]+$/.exec(Ar && Ar.keys && Ar.keys.IE_PROTO || "");
  return e ? "Symbol(src)_1." + e : "";
}();
function Sp(e) {
  return !!Va && Va in e;
}
var Tp = Function.prototype, kp = Tp.toString;
function Tn(e) {
  if (e != null) {
    try {
      return kp.call(e);
    } catch {
    }
    try {
      return e + "";
    } catch {
    }
  }
  return "";
}
var Op = /[\\^$.*+?()[\]{}|]/g, Lp = /^\[object .+?Constructor\]$/, Ip = Function.prototype, Pp = Object.prototype, Ap = Ip.toString, Np = Pp.hasOwnProperty, Mp = RegExp(
  "^" + Ap.call(Np).replace(Op, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$"
);
function Rp(e) {
  if (!fn(e) || Sp(e))
    return !1;
  var t = jl(e) ? Mp : Lp;
  return t.test(Tn(e));
}
function $p(e, t) {
  return e?.[t];
}
function kn(e, t) {
  var n = $p(e, t);
  return Rp(n) ? n : void 0;
}
var Jr = kn(xt, "WeakMap");
function Dp(e, t, n) {
  switch (n.length) {
    case 0:
      return e.call(t);
    case 1:
      return e.call(t, n[0]);
    case 2:
      return e.call(t, n[0], n[1]);
    case 3:
      return e.call(t, n[0], n[1], n[2]);
  }
  return e.apply(t, n);
}
var Fp = 800, xp = 16, zp = Date.now;
function Bp(e) {
  var t = 0, n = 0;
  return function() {
    var o = zp(), r = xp - (o - n);
    if (n = o, r > 0) {
      if (++t >= Fp)
        return arguments[0];
    } else
      t = 0;
    return e.apply(void 0, arguments);
  };
}
function Wp(e) {
  return function() {
    return e;
  };
}
var Go = function() {
  try {
    var e = kn(Object, "defineProperty");
    return e({}, "", {}), e;
  } catch {
  }
}(), jp = Go ? function(e, t) {
  return Go(e, "toString", {
    configurable: !0,
    enumerable: !1,
    value: Wp(t),
    writable: !0
  });
} : Wl, Vp = Bp(jp);
function Up(e, t, n, o) {
  e.length;
  for (var r = n + 1; r--; )
    if (t(e[r], r, e))
      return r;
  return -1;
}
var Hp = 9007199254740991, Kp = /^(?:0|[1-9]\d*)$/;
function _s(e, t) {
  var n = typeof e;
  return t = t ?? Hp, !!t && (n == "number" || n != "symbol" && Kp.test(e)) && e > -1 && e % 1 == 0 && e < t;
}
function Gp(e, t, n) {
  t == "__proto__" && Go ? Go(e, t, {
    configurable: !0,
    enumerable: !0,
    value: n,
    writable: !0
  }) : e[t] = n;
}
function ws(e, t) {
  return e === t || e !== e && t !== t;
}
var Yp = Object.prototype, Zp = Yp.hasOwnProperty;
function qp(e, t, n) {
  var o = e[t];
  (!(Zp.call(e, t) && ws(o, n)) || n === void 0 && !(t in e)) && Gp(e, t, n);
}
var Ua = Math.max;
function Jp(e, t, n) {
  return t = Ua(t === void 0 ? e.length - 1 : t, 0), function() {
    for (var o = arguments, r = -1, s = Ua(o.length - t, 0), a = Array(s); ++r < s; )
      a[r] = o[t + r];
    r = -1;
    for (var i = Array(t + 1); ++r < t; )
      i[r] = o[r];
    return i[t] = n(a), Dp(e, this, i);
  };
}
var Xp = 9007199254740991;
function Cs(e) {
  return typeof e == "number" && e > -1 && e % 1 == 0 && e <= Xp;
}
function Qp(e) {
  return e != null && Cs(e.length) && !jl(e);
}
var em = Object.prototype;
function tm(e) {
  var t = e && e.constructor, n = typeof t == "function" && t.prototype || em;
  return e === n;
}
function nm(e, t) {
  for (var n = -1, o = Array(e); ++n < e; )
    o[n] = t(n);
  return o;
}
var om = "[object Arguments]";
function Ha(e) {
  return zn(e) && Yn(e) == om;
}
var Vl = Object.prototype, rm = Vl.hasOwnProperty, sm = Vl.propertyIsEnumerable, Es = Ha(/* @__PURE__ */ function() {
  return arguments;
}()) ? Ha : function(e) {
  return zn(e) && rm.call(e, "callee") && !sm.call(e, "callee");
};
function am() {
  return !1;
}
var Ul = typeof exports == "object" && exports && !exports.nodeType && exports, Ka = Ul && typeof module == "object" && module && !module.nodeType && module, im = Ka && Ka.exports === Ul, Ga = im ? xt.Buffer : void 0, lm = Ga ? Ga.isBuffer : void 0, Xr = lm || am, um = "[object Arguments]", cm = "[object Array]", dm = "[object Boolean]", fm = "[object Date]", pm = "[object Error]", mm = "[object Function]", hm = "[object Map]", vm = "[object Number]", gm = "[object Object]", ym = "[object RegExp]", bm = "[object Set]", _m = "[object String]", wm = "[object WeakMap]", Cm = "[object ArrayBuffer]", Em = "[object DataView]", Sm = "[object Float32Array]", Tm = "[object Float64Array]", km = "[object Int8Array]", Om = "[object Int16Array]", Lm = "[object Int32Array]", Im = "[object Uint8Array]", Pm = "[object Uint8ClampedArray]", Am = "[object Uint16Array]", Nm = "[object Uint32Array]", ye = {};
ye[Sm] = ye[Tm] = ye[km] = ye[Om] = ye[Lm] = ye[Im] = ye[Pm] = ye[Am] = ye[Nm] = !0;
ye[um] = ye[cm] = ye[Cm] = ye[dm] = ye[Em] = ye[fm] = ye[pm] = ye[mm] = ye[hm] = ye[vm] = ye[gm] = ye[ym] = ye[bm] = ye[_m] = ye[wm] = !1;
function Mm(e) {
  return zn(e) && Cs(e.length) && !!ye[Yn(e)];
}
function Rm(e) {
  return function(t) {
    return e(t);
  };
}
var Hl = typeof exports == "object" && exports && !exports.nodeType && exports, oo = Hl && typeof module == "object" && module && !module.nodeType && module, $m = oo && oo.exports === Hl, Nr = $m && xl.process, Ya = function() {
  try {
    var e = oo && oo.require && oo.require("util").types;
    return e || Nr && Nr.binding && Nr.binding("util");
  } catch {
  }
}(), Za = Ya && Ya.isTypedArray, Kl = Za ? Rm(Za) : Mm, Dm = Object.prototype, Fm = Dm.hasOwnProperty;
function xm(e, t) {
  var n = St(e), o = !n && Es(e), r = !n && !o && Xr(e), s = !n && !o && !r && Kl(e), a = n || o || r || s, i = a ? nm(e.length, String) : [], l = i.length;
  for (var u in e)
    Fm.call(e, u) && !(a && // Safari 9 has enumerable `arguments.length` in strict mode.
    (u == "length" || // Node.js 0.10 has enumerable non-index properties on buffers.
    r && (u == "offset" || u == "parent") || // PhantomJS 2 has enumerable non-index properties on typed arrays.
    s && (u == "buffer" || u == "byteLength" || u == "byteOffset") || // Skip index properties.
    _s(u, l))) && i.push(u);
  return i;
}
function zm(e, t) {
  return function(n) {
    return e(t(n));
  };
}
var Bm = zm(Object.keys, Object), Wm = Object.prototype, jm = Wm.hasOwnProperty;
function Vm(e) {
  if (!tm(e))
    return Bm(e);
  var t = [];
  for (var n in Object(e))
    jm.call(e, n) && n != "constructor" && t.push(n);
  return t;
}
function Gl(e) {
  return Qp(e) ? xm(e) : Vm(e);
}
var Um = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/, Hm = /^\w*$/;
function Ss(e, t) {
  if (St(e))
    return !1;
  var n = typeof e;
  return n == "number" || n == "symbol" || n == "boolean" || e == null || lr(e) ? !0 : Hm.test(e) || !Um.test(e) || t != null && e in Object(t);
}
var mo = kn(Object, "create");
function Km() {
  this.__data__ = mo ? mo(null) : {}, this.size = 0;
}
function Gm(e) {
  var t = this.has(e) && delete this.__data__[e];
  return this.size -= t ? 1 : 0, t;
}
var Ym = "__lodash_hash_undefined__", Zm = Object.prototype, qm = Zm.hasOwnProperty;
function Jm(e) {
  var t = this.__data__;
  if (mo) {
    var n = t[e];
    return n === Ym ? void 0 : n;
  }
  return qm.call(t, e) ? t[e] : void 0;
}
var Xm = Object.prototype, Qm = Xm.hasOwnProperty;
function eh(e) {
  var t = this.__data__;
  return mo ? t[e] !== void 0 : Qm.call(t, e);
}
var th = "__lodash_hash_undefined__";
function nh(e, t) {
  var n = this.__data__;
  return this.size += this.has(e) ? 0 : 1, n[e] = mo && t === void 0 ? th : t, this;
}
function Cn(e) {
  var t = -1, n = e == null ? 0 : e.length;
  for (this.clear(); ++t < n; ) {
    var o = e[t];
    this.set(o[0], o[1]);
  }
}
Cn.prototype.clear = Km;
Cn.prototype.delete = Gm;
Cn.prototype.get = Jm;
Cn.prototype.has = eh;
Cn.prototype.set = nh;
function oh() {
  this.__data__ = [], this.size = 0;
}
function ur(e, t) {
  for (var n = e.length; n--; )
    if (ws(e[n][0], t))
      return n;
  return -1;
}
var rh = Array.prototype, sh = rh.splice;
function ah(e) {
  var t = this.__data__, n = ur(t, e);
  if (n < 0)
    return !1;
  var o = t.length - 1;
  return n == o ? t.pop() : sh.call(t, n, 1), --this.size, !0;
}
function ih(e) {
  var t = this.__data__, n = ur(t, e);
  return n < 0 ? void 0 : t[n][1];
}
function lh(e) {
  return ur(this.__data__, e) > -1;
}
function uh(e, t) {
  var n = this.__data__, o = ur(n, e);
  return o < 0 ? (++this.size, n.push([e, t])) : n[o][1] = t, this;
}
function Qt(e) {
  var t = -1, n = e == null ? 0 : e.length;
  for (this.clear(); ++t < n; ) {
    var o = e[t];
    this.set(o[0], o[1]);
  }
}
Qt.prototype.clear = oh;
Qt.prototype.delete = ah;
Qt.prototype.get = ih;
Qt.prototype.has = lh;
Qt.prototype.set = uh;
var ho = kn(xt, "Map");
function ch() {
  this.size = 0, this.__data__ = {
    hash: new Cn(),
    map: new (ho || Qt)(),
    string: new Cn()
  };
}
function dh(e) {
  var t = typeof e;
  return t == "string" || t == "number" || t == "symbol" || t == "boolean" ? e !== "__proto__" : e === null;
}
function cr(e, t) {
  var n = e.__data__;
  return dh(t) ? n[typeof t == "string" ? "string" : "hash"] : n.map;
}
function fh(e) {
  var t = cr(this, e).delete(e);
  return this.size -= t ? 1 : 0, t;
}
function ph(e) {
  return cr(this, e).get(e);
}
function mh(e) {
  return cr(this, e).has(e);
}
function hh(e, t) {
  var n = cr(this, e), o = n.size;
  return n.set(e, t), this.size += n.size == o ? 0 : 1, this;
}
function en(e) {
  var t = -1, n = e == null ? 0 : e.length;
  for (this.clear(); ++t < n; ) {
    var o = e[t];
    this.set(o[0], o[1]);
  }
}
en.prototype.clear = ch;
en.prototype.delete = fh;
en.prototype.get = ph;
en.prototype.has = mh;
en.prototype.set = hh;
var vh = "Expected a function";
function Ts(e, t) {
  if (typeof e != "function" || t != null && typeof t != "function")
    throw new TypeError(vh);
  var n = function() {
    var o = arguments, r = t ? t.apply(this, o) : o[0], s = n.cache;
    if (s.has(r))
      return s.get(r);
    var a = e.apply(this, o);
    return n.cache = s.set(r, a) || s, a;
  };
  return n.cache = new (Ts.Cache || en)(), n;
}
Ts.Cache = en;
var gh = 500;
function yh(e) {
  var t = Ts(e, function(o) {
    return n.size === gh && n.clear(), o;
  }), n = t.cache;
  return t;
}
var bh = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g, _h = /\\(\\)?/g, wh = yh(function(e) {
  var t = [];
  return e.charCodeAt(0) === 46 && t.push(""), e.replace(bh, function(n, o, r, s) {
    t.push(r ? s.replace(_h, "$1") : o || n);
  }), t;
});
function Ch(e) {
  return e == null ? "" : Bl(e);
}
function dr(e, t) {
  return St(e) ? e : Ss(e, t) ? [e] : wh(Ch(e));
}
function _o(e) {
  if (typeof e == "string" || lr(e))
    return e;
  var t = e + "";
  return t == "0" && 1 / e == -1 / 0 ? "-0" : t;
}
function ks(e, t) {
  t = dr(t, e);
  for (var n = 0, o = t.length; e != null && n < o; )
    e = e[_o(t[n++])];
  return n && n == o ? e : void 0;
}
function cn(e, t, n) {
  var o = e == null ? void 0 : ks(e, t);
  return o === void 0 ? n : o;
}
function Yl(e, t) {
  for (var n = -1, o = t.length, r = e.length; ++n < o; )
    e[r + n] = t[n];
  return e;
}
var qa = $t ? $t.isConcatSpreadable : void 0;
function Eh(e) {
  return St(e) || Es(e) || !!(qa && e && e[qa]);
}
function Sh(e, t, n, o, r) {
  var s = -1, a = e.length;
  for (n || (n = Eh), r || (r = []); ++s < a; ) {
    var i = e[s];
    n(i) ? Yl(r, i) : r[r.length] = i;
  }
  return r;
}
function Th(e) {
  var t = e == null ? 0 : e.length;
  return t ? Sh(e) : [];
}
function kh(e) {
  return Vp(Jp(e, void 0, Th), e + "");
}
function un() {
  if (!arguments.length)
    return [];
  var e = arguments[0];
  return St(e) ? e : [e];
}
function Oh() {
  this.__data__ = new Qt(), this.size = 0;
}
function Lh(e) {
  var t = this.__data__, n = t.delete(e);
  return this.size = t.size, n;
}
function Ih(e) {
  return this.__data__.get(e);
}
function Ph(e) {
  return this.__data__.has(e);
}
var Ah = 200;
function Nh(e, t) {
  var n = this.__data__;
  if (n instanceof Qt) {
    var o = n.__data__;
    if (!ho || o.length < Ah - 1)
      return o.push([e, t]), this.size = ++n.size, this;
    n = this.__data__ = new en(o);
  }
  return n.set(e, t), this.size = n.size, this;
}
function Zt(e) {
  var t = this.__data__ = new Qt(e);
  this.size = t.size;
}
Zt.prototype.clear = Oh;
Zt.prototype.delete = Lh;
Zt.prototype.get = Ih;
Zt.prototype.has = Ph;
Zt.prototype.set = Nh;
function Mh(e, t) {
  for (var n = -1, o = e == null ? 0 : e.length, r = 0, s = []; ++n < o; ) {
    var a = e[n];
    t(a, n, e) && (s[r++] = a);
  }
  return s;
}
function Rh() {
  return [];
}
var $h = Object.prototype, Dh = $h.propertyIsEnumerable, Ja = Object.getOwnPropertySymbols, Fh = Ja ? function(e) {
  return e == null ? [] : (e = Object(e), Mh(Ja(e), function(t) {
    return Dh.call(e, t);
  }));
} : Rh;
function xh(e, t, n) {
  var o = t(e);
  return St(e) ? o : Yl(o, n(e));
}
function Xa(e) {
  return xh(e, Gl, Fh);
}
var Qr = kn(xt, "DataView"), es = kn(xt, "Promise"), ts = kn(xt, "Set"), Qa = "[object Map]", zh = "[object Object]", ei = "[object Promise]", ti = "[object Set]", ni = "[object WeakMap]", oi = "[object DataView]", Bh = Tn(Qr), Wh = Tn(ho), jh = Tn(es), Vh = Tn(ts), Uh = Tn(Jr), ln = Yn;
(Qr && ln(new Qr(new ArrayBuffer(1))) != oi || ho && ln(new ho()) != Qa || es && ln(es.resolve()) != ei || ts && ln(new ts()) != ti || Jr && ln(new Jr()) != ni) && (ln = function(e) {
  var t = Yn(e), n = t == zh ? e.constructor : void 0, o = n ? Tn(n) : "";
  if (o)
    switch (o) {
      case Bh:
        return oi;
      case Wh:
        return Qa;
      case jh:
        return ei;
      case Vh:
        return ti;
      case Uh:
        return ni;
    }
  return t;
});
var ri = xt.Uint8Array, Hh = "__lodash_hash_undefined__";
function Kh(e) {
  return this.__data__.set(e, Hh), this;
}
function Gh(e) {
  return this.__data__.has(e);
}
function Yo(e) {
  var t = -1, n = e == null ? 0 : e.length;
  for (this.__data__ = new en(); ++t < n; )
    this.add(e[t]);
}
Yo.prototype.add = Yo.prototype.push = Kh;
Yo.prototype.has = Gh;
function Yh(e, t) {
  for (var n = -1, o = e == null ? 0 : e.length; ++n < o; )
    if (t(e[n], n, e))
      return !0;
  return !1;
}
function Zh(e, t) {
  return e.has(t);
}
var qh = 1, Jh = 2;
function Zl(e, t, n, o, r, s) {
  var a = n & qh, i = e.length, l = t.length;
  if (i != l && !(a && l > i))
    return !1;
  var u = s.get(e), f = s.get(t);
  if (u && f)
    return u == t && f == e;
  var p = -1, m = !0, g = n & Jh ? new Yo() : void 0;
  for (s.set(e, t), s.set(t, e); ++p < i; ) {
    var h = e[p], v = t[p];
    if (o)
      var w = a ? o(v, h, p, t, e, s) : o(h, v, p, e, t, s);
    if (w !== void 0) {
      if (w)
        continue;
      m = !1;
      break;
    }
    if (g) {
      if (!Yh(t, function(d, E) {
        if (!Zh(g, E) && (h === d || r(h, d, n, o, s)))
          return g.push(E);
      })) {
        m = !1;
        break;
      }
    } else if (!(h === v || r(h, v, n, o, s))) {
      m = !1;
      break;
    }
  }
  return s.delete(e), s.delete(t), m;
}
function Xh(e) {
  var t = -1, n = Array(e.size);
  return e.forEach(function(o, r) {
    n[++t] = [r, o];
  }), n;
}
function Qh(e) {
  var t = -1, n = Array(e.size);
  return e.forEach(function(o) {
    n[++t] = o;
  }), n;
}
var ev = 1, tv = 2, nv = "[object Boolean]", ov = "[object Date]", rv = "[object Error]", sv = "[object Map]", av = "[object Number]", iv = "[object RegExp]", lv = "[object Set]", uv = "[object String]", cv = "[object Symbol]", dv = "[object ArrayBuffer]", fv = "[object DataView]", si = $t ? $t.prototype : void 0, Mr = si ? si.valueOf : void 0;
function pv(e, t, n, o, r, s, a) {
  switch (n) {
    case fv:
      if (e.byteLength != t.byteLength || e.byteOffset != t.byteOffset)
        return !1;
      e = e.buffer, t = t.buffer;
    case dv:
      return !(e.byteLength != t.byteLength || !s(new ri(e), new ri(t)));
    case nv:
    case ov:
    case av:
      return ws(+e, +t);
    case rv:
      return e.name == t.name && e.message == t.message;
    case iv:
    case uv:
      return e == t + "";
    case sv:
      var i = Xh;
    case lv:
      var l = o & ev;
      if (i || (i = Qh), e.size != t.size && !l)
        return !1;
      var u = a.get(e);
      if (u)
        return u == t;
      o |= tv, a.set(e, t);
      var f = Zl(i(e), i(t), o, r, s, a);
      return a.delete(e), f;
    case cv:
      if (Mr)
        return Mr.call(e) == Mr.call(t);
  }
  return !1;
}
var mv = 1, hv = Object.prototype, vv = hv.hasOwnProperty;
function gv(e, t, n, o, r, s) {
  var a = n & mv, i = Xa(e), l = i.length, u = Xa(t), f = u.length;
  if (l != f && !a)
    return !1;
  for (var p = l; p--; ) {
    var m = i[p];
    if (!(a ? m in t : vv.call(t, m)))
      return !1;
  }
  var g = s.get(e), h = s.get(t);
  if (g && h)
    return g == t && h == e;
  var v = !0;
  s.set(e, t), s.set(t, e);
  for (var w = a; ++p < l; ) {
    m = i[p];
    var d = e[m], E = t[m];
    if (o)
      var L = a ? o(E, d, m, t, e, s) : o(d, E, m, e, t, s);
    if (!(L === void 0 ? d === E || r(d, E, n, o, s) : L)) {
      v = !1;
      break;
    }
    w || (w = m == "constructor");
  }
  if (v && !w) {
    var S = e.constructor, T = t.constructor;
    S != T && "constructor" in e && "constructor" in t && !(typeof S == "function" && S instanceof S && typeof T == "function" && T instanceof T) && (v = !1);
  }
  return s.delete(e), s.delete(t), v;
}
var yv = 1, ai = "[object Arguments]", ii = "[object Array]", Mo = "[object Object]", bv = Object.prototype, li = bv.hasOwnProperty;
function _v(e, t, n, o, r, s) {
  var a = St(e), i = St(t), l = a ? ii : ln(e), u = i ? ii : ln(t);
  l = l == ai ? Mo : l, u = u == ai ? Mo : u;
  var f = l == Mo, p = u == Mo, m = l == u;
  if (m && Xr(e)) {
    if (!Xr(t))
      return !1;
    a = !0, f = !1;
  }
  if (m && !f)
    return s || (s = new Zt()), a || Kl(e) ? Zl(e, t, n, o, r, s) : pv(e, t, l, n, o, r, s);
  if (!(n & yv)) {
    var g = f && li.call(e, "__wrapped__"), h = p && li.call(t, "__wrapped__");
    if (g || h) {
      var v = g ? e.value() : e, w = h ? t.value() : t;
      return s || (s = new Zt()), r(v, w, n, o, s);
    }
  }
  return m ? (s || (s = new Zt()), gv(e, t, n, o, r, s)) : !1;
}
function fr(e, t, n, o, r) {
  return e === t ? !0 : e == null || t == null || !zn(e) && !zn(t) ? e !== e && t !== t : _v(e, t, n, o, fr, r);
}
var wv = 1, Cv = 2;
function Ev(e, t, n, o) {
  var r = n.length, s = r;
  if (e == null)
    return !s;
  for (e = Object(e); r--; ) {
    var a = n[r];
    if (a[2] ? a[1] !== e[a[0]] : !(a[0] in e))
      return !1;
  }
  for (; ++r < s; ) {
    a = n[r];
    var i = a[0], l = e[i], u = a[1];
    if (a[2]) {
      if (l === void 0 && !(i in e))
        return !1;
    } else {
      var f = new Zt(), p;
      if (!(p === void 0 ? fr(u, l, wv | Cv, o, f) : p))
        return !1;
    }
  }
  return !0;
}
function ql(e) {
  return e === e && !fn(e);
}
function Sv(e) {
  for (var t = Gl(e), n = t.length; n--; ) {
    var o = t[n], r = e[o];
    t[n] = [o, r, ql(r)];
  }
  return t;
}
function Jl(e, t) {
  return function(n) {
    return n == null ? !1 : n[e] === t && (t !== void 0 || e in Object(n));
  };
}
function Tv(e) {
  var t = Sv(e);
  return t.length == 1 && t[0][2] ? Jl(t[0][0], t[0][1]) : function(n) {
    return n === e || Ev(n, e, t);
  };
}
function kv(e, t) {
  return e != null && t in Object(e);
}
function Ov(e, t, n) {
  t = dr(t, e);
  for (var o = -1, r = t.length, s = !1; ++o < r; ) {
    var a = _o(t[o]);
    if (!(s = e != null && n(e, a)))
      break;
    e = e[a];
  }
  return s || ++o != r ? s : (r = e == null ? 0 : e.length, !!r && Cs(r) && _s(a, r) && (St(e) || Es(e)));
}
function Xl(e, t) {
  return e != null && Ov(e, t, kv);
}
var Lv = 1, Iv = 2;
function Pv(e, t) {
  return Ss(e) && ql(t) ? Jl(_o(e), t) : function(n) {
    var o = cn(n, e);
    return o === void 0 && o === t ? Xl(n, e) : fr(t, o, Lv | Iv);
  };
}
function Av(e) {
  return function(t) {
    return t?.[e];
  };
}
function Nv(e) {
  return function(t) {
    return ks(t, e);
  };
}
function Mv(e) {
  return Ss(e) ? Av(_o(e)) : Nv(e);
}
function Rv(e) {
  return typeof e == "function" ? e : e == null ? Wl : typeof e == "object" ? St(e) ? Pv(e[0], e[1]) : Tv(e) : Mv(e);
}
var Rr = function() {
  return xt.Date.now();
}, $v = "Expected a function", Dv = Math.max, Fv = Math.min;
function xv(e, t, n) {
  var o, r, s, a, i, l, u = 0, f = !1, p = !1, m = !0;
  if (typeof e != "function")
    throw new TypeError($v);
  t = ja(t) || 0, fn(n) && (f = !!n.leading, p = "maxWait" in n, s = p ? Dv(ja(n.maxWait) || 0, t) : s, m = "trailing" in n ? !!n.trailing : m);
  function g(I) {
    var k = o, $ = r;
    return o = r = void 0, u = I, a = e.apply($, k), a;
  }
  function h(I) {
    return u = I, i = setTimeout(d, t), f ? g(I) : a;
  }
  function v(I) {
    var k = I - l, $ = I - u, C = t - k;
    return p ? Fv(C, s - $) : C;
  }
  function w(I) {
    var k = I - l, $ = I - u;
    return l === void 0 || k >= t || k < 0 || p && $ >= s;
  }
  function d() {
    var I = Rr();
    if (w(I))
      return E(I);
    i = setTimeout(d, v(I));
  }
  function E(I) {
    return i = void 0, m && o ? g(I) : (o = r = void 0, a);
  }
  function L() {
    i !== void 0 && clearTimeout(i), u = 0, o = l = r = i = void 0;
  }
  function S() {
    return i === void 0 ? a : E(Rr());
  }
  function T() {
    var I = Rr(), k = w(I);
    if (o = arguments, r = this, l = I, k) {
      if (i === void 0)
        return h(l);
      if (p)
        return clearTimeout(i), i = setTimeout(d, t), g(l);
    }
    return i === void 0 && (i = setTimeout(d, t)), a;
  }
  return T.cancel = L, T.flush = S, T;
}
function zv(e, t, n) {
  var o = e == null ? 0 : e.length;
  if (!o)
    return -1;
  var r = o - 1;
  return Up(e, Rv(t), r);
}
function Zo(e) {
  for (var t = -1, n = e == null ? 0 : e.length, o = {}; ++t < n; ) {
    var r = e[t];
    o[r[0]] = r[1];
  }
  return o;
}
function ro(e, t) {
  return fr(e, t);
}
function pr(e) {
  return e == null;
}
function Bv(e) {
  return e === void 0;
}
function Wv(e, t, n, o) {
  if (!fn(e))
    return e;
  t = dr(t, e);
  for (var r = -1, s = t.length, a = s - 1, i = e; i != null && ++r < s; ) {
    var l = _o(t[r]), u = n;
    if (l === "__proto__" || l === "constructor" || l === "prototype")
      return e;
    if (r != a) {
      var f = i[l];
      u = void 0, u === void 0 && (u = fn(f) ? f : _s(t[r + 1]) ? [] : {});
    }
    qp(i, l, u), i = i[l];
  }
  return e;
}
function jv(e, t, n) {
  for (var o = -1, r = t.length, s = {}; ++o < r; ) {
    var a = t[o], i = ks(e, a);
    n(i, a) && Wv(s, dr(a, e), i);
  }
  return s;
}
function Vv(e, t) {
  return jv(e, t, function(n, o) {
    return Xl(e, o);
  });
}
var Uv = kh(function(e, t) {
  return e == null ? {} : Vv(e, t);
});
const $n = (e) => e === void 0, qo = (e) => typeof e == "boolean", Me = (e) => typeof e == "number", Ct = (e) => typeof Element > "u" ? !1 : e instanceof Element, Hv = (e) => pt(e) ? !Number.isNaN(Number(e)) : !1;
var Kv = Object.defineProperty, Gv = Object.defineProperties, Yv = Object.getOwnPropertyDescriptors, ui = Object.getOwnPropertySymbols, Zv = Object.prototype.hasOwnProperty, qv = Object.prototype.propertyIsEnumerable, ci = (e, t, n) => t in e ? Kv(e, t, { enumerable: !0, configurable: !0, writable: !0, value: n }) : e[t] = n, Jv = (e, t) => {
  for (var n in t || (t = {}))
    Zv.call(t, n) && ci(e, n, t[n]);
  if (ui)
    for (var n of ui(t))
      qv.call(t, n) && ci(e, n, t[n]);
  return e;
}, Xv = (e, t) => Gv(e, Yv(t));
function Qv(e, t) {
  var n;
  const o = dn();
  return nl(() => {
    o.value = e();
  }, Xv(Jv({}, t), {
    flush: (n = void 0) != null ? n : "sync"
  })), us(o);
}
var di;
const Le = typeof window < "u", eg = (e) => typeof e == "string", Ql = () => {
}, ns = Le && ((di = window?.navigator) == null ? void 0 : di.userAgent) && /iP(ad|hone|od)/.test(window.navigator.userAgent);
function Os(e) {
  return typeof e == "function" ? e() : c(e);
}
function tg(e) {
  return e;
}
function wo(e) {
  return Xi() ? (Qi(e), !0) : !1;
}
function ng(e, t = !0) {
  Ke() ? Pe(e) : t ? e() : Se(e);
}
function eu(e, t, n = {}) {
  const {
    immediate: o = !0
  } = n, r = x(!1);
  let s = null;
  function a() {
    s && (clearTimeout(s), s = null);
  }
  function i() {
    r.value = !1, a();
  }
  function l(...u) {
    a(), r.value = !0, s = setTimeout(() => {
      r.value = !1, s = null, e(...u);
    }, Os(t));
  }
  return o && (r.value = !0, Le && l()), wo(i), {
    isPending: us(r),
    start: l,
    stop: i
  };
}
function Gt(e) {
  var t;
  const n = Os(e);
  return (t = n?.$el) != null ? t : n;
}
const mr = Le ? window : void 0;
function Et(...e) {
  let t, n, o, r;
  if (eg(e[0]) || Array.isArray(e[0]) ? ([n, o, r] = e, t = mr) : [t, n, o, r] = e, !t)
    return Ql;
  Array.isArray(n) || (n = [n]), Array.isArray(o) || (o = [o]);
  const s = [], a = () => {
    s.forEach((f) => f()), s.length = 0;
  }, i = (f, p, m, g) => (f.addEventListener(p, m, g), () => f.removeEventListener(p, m, g)), l = Q(() => [Gt(t), Os(r)], ([f, p]) => {
    a(), f && s.push(...n.flatMap((m) => o.map((g) => i(f, m, g, p))));
  }, { immediate: !0, flush: "post" }), u = () => {
    l(), a();
  };
  return wo(u), u;
}
let fi = !1;
function og(e, t, n = {}) {
  const { window: o = mr, ignore: r = [], capture: s = !0, detectIframe: a = !1 } = n;
  if (!o)
    return;
  ns && !fi && (fi = !0, Array.from(o.document.body.children).forEach((m) => m.addEventListener("click", Ql)));
  let i = !0;
  const l = (m) => r.some((g) => {
    if (typeof g == "string")
      return Array.from(o.document.querySelectorAll(g)).some((h) => h === m.target || m.composedPath().includes(h));
    {
      const h = Gt(g);
      return h && (m.target === h || m.composedPath().includes(h));
    }
  }), f = [
    Et(o, "click", (m) => {
      const g = Gt(e);
      if (!(!g || g === m.target || m.composedPath().includes(g))) {
        if (m.detail === 0 && (i = !l(m)), !i) {
          i = !0;
          return;
        }
        t(m);
      }
    }, { passive: !0, capture: s }),
    Et(o, "pointerdown", (m) => {
      const g = Gt(e);
      g && (i = !m.composedPath().includes(g) && !l(m));
    }, { passive: !0 }),
    a && Et(o, "blur", (m) => {
      var g;
      const h = Gt(e);
      ((g = o.document.activeElement) == null ? void 0 : g.tagName) === "IFRAME" && !h?.contains(o.document.activeElement) && t(m);
    })
  ].filter(Boolean);
  return () => f.forEach((m) => m());
}
function tu(e, t = !1) {
  const n = x(), o = () => n.value = !!e();
  return o(), ng(o, t), n;
}
const pi = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {}, mi = "__vueuse_ssr_handlers__";
pi[mi] = pi[mi] || {};
var hi = Object.getOwnPropertySymbols, rg = Object.prototype.hasOwnProperty, sg = Object.prototype.propertyIsEnumerable, ag = (e, t) => {
  var n = {};
  for (var o in e)
    rg.call(e, o) && t.indexOf(o) < 0 && (n[o] = e[o]);
  if (e != null && hi)
    for (var o of hi(e))
      t.indexOf(o) < 0 && sg.call(e, o) && (n[o] = e[o]);
  return n;
};
function Lt(e, t, n = {}) {
  const o = n, { window: r = mr } = o, s = ag(o, ["window"]);
  let a;
  const i = tu(() => r && "ResizeObserver" in r), l = () => {
    a && (a.disconnect(), a = void 0);
  }, u = Q(() => Gt(e), (p) => {
    l(), i.value && r && p && (a = new ResizeObserver(t), a.observe(p, s));
  }, { immediate: !0, flush: "post" }), f = () => {
    l(), u();
  };
  return wo(f), {
    isSupported: i,
    stop: f
  };
}
var vi = Object.getOwnPropertySymbols, ig = Object.prototype.hasOwnProperty, lg = Object.prototype.propertyIsEnumerable, ug = (e, t) => {
  var n = {};
  for (var o in e)
    ig.call(e, o) && t.indexOf(o) < 0 && (n[o] = e[o]);
  if (e != null && vi)
    for (var o of vi(e))
      t.indexOf(o) < 0 && lg.call(e, o) && (n[o] = e[o]);
  return n;
};
function cg(e, t, n = {}) {
  const o = n, { window: r = mr } = o, s = ug(o, ["window"]);
  let a;
  const i = tu(() => r && "MutationObserver" in r), l = () => {
    a && (a.disconnect(), a = void 0);
  }, u = Q(() => Gt(e), (p) => {
    l(), i.value && r && p && (a = new MutationObserver(t), a.observe(p, s));
  }, { immediate: !0 }), f = () => {
    l(), u();
  };
  return wo(f), {
    isSupported: i,
    stop: f
  };
}
var gi;
(function(e) {
  e.UP = "UP", e.RIGHT = "RIGHT", e.DOWN = "DOWN", e.LEFT = "LEFT", e.NONE = "NONE";
})(gi || (gi = {}));
var dg = Object.defineProperty, yi = Object.getOwnPropertySymbols, fg = Object.prototype.hasOwnProperty, pg = Object.prototype.propertyIsEnumerable, bi = (e, t, n) => t in e ? dg(e, t, { enumerable: !0, configurable: !0, writable: !0, value: n }) : e[t] = n, mg = (e, t) => {
  for (var n in t || (t = {}))
    fg.call(t, n) && bi(e, n, t[n]);
  if (yi)
    for (var n of yi(t))
      pg.call(t, n) && bi(e, n, t[n]);
  return e;
};
const hg = {
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
mg({
  linear: tg
}, hg);
class vg extends Error {
  constructor(t) {
    super(t), this.name = "ElementPlusError";
  }
}
function gg(e, t) {
  throw new vg(`[${e}] ${t}`);
}
const _i = {
  current: 0
}, wi = x(0), nu = 2e3, Ci = Symbol("elZIndexContextKey"), ou = Symbol("zIndexContextKey"), ru = (e) => {
  const t = Ke() ? fe(Ci, _i) : _i, n = e || (Ke() ? fe(ou, void 0) : void 0), o = P(() => {
    const a = c(n);
    return Me(a) ? a : nu;
  }), r = P(() => o.value + wi.value), s = () => (t.current++, wi.value = t.current, r.value);
  return !Le && fe(Ci), {
    initialZIndex: o,
    currentZIndex: r,
    nextZIndex: s
  };
};
var yg = {
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
const bg = (e) => (t, n) => _g(t, n, c(e)), _g = (e, t, n) => cn(n, e, e).replace(/\{(\w+)\}/g, (o, r) => {
  var s;
  return `${(s = t?.[r]) != null ? s : `{${r}}`}`;
}), wg = (e) => {
  const t = P(() => c(e).name), n = io(e) ? e : x(e);
  return {
    lang: t,
    locale: n,
    t: bg(e)
  };
}, su = Symbol("localeContextKey"), au = (e) => {
  const t = e || fe(su, x());
  return wg(P(() => t.value || yg));
}, iu = "__epPropKey", X = (e) => e, Cg = (e) => dt(e) && !!e[iu], hr = (e, t) => {
  if (!dt(e) || Cg(e))
    return e;
  const { values: n, required: o, default: r, type: s, validator: a } = e, l = {
    type: s,
    required: !!o,
    validator: n || a ? (u) => {
      let f = !1, p = [];
      if (n && (p = Array.from(n), Fa(e, "default") && p.push(r), f || (f = p.includes(u))), a && (f || (f = a(u))), !f && p.length > 0) {
        const m = [...new Set(p)].map((g) => JSON.stringify(g)).join(", ");
        _c(`Invalid prop: validation failed${t ? ` for prop "${t}"` : ""}. Expected one of [${m}], got value ${JSON.stringify(u)}.`);
      }
      return f;
    } : void 0,
    [iu]: !0
  };
  return Fa(e, "default") && (l.default = r), l;
}, _e = (e) => Zo(Object.entries(e).map(([t, n]) => [
  t,
  hr(n, t)
])), lu = ["", "default", "small", "large"], Ls = hr({
  type: String,
  values: lu,
  required: !1
}), uu = Symbol("size"), Eg = () => {
  const e = fe(uu, {});
  return P(() => c(e.size) || "");
}, cu = Symbol("emptyValuesContextKey"), Sg = ["", void 0, null], Tg = void 0, du = _e({
  emptyValues: Array,
  valueOnClear: {
    type: [String, Number, Boolean, Function],
    default: void 0,
    validator: (e) => Ne(e) ? !e() : !e
  }
}), kg = (e, t) => {
  const n = Ke() ? fe(cu, x({})) : x({}), o = P(() => e.emptyValues || n.value.emptyValues || Sg), r = P(() => Ne(e.valueOnClear) ? e.valueOnClear() : e.valueOnClear !== void 0 ? e.valueOnClear : Ne(n.value.valueOnClear) ? n.value.valueOnClear() : n.value.valueOnClear !== void 0 ? n.value.valueOnClear : Tg), s = (a) => o.value.includes(a);
  return o.value.includes(r.value), {
    emptyValues: o,
    valueOnClear: r,
    isEmptyValue: s
  };
}, Ei = (e) => Object.keys(e), Jo = x();
function fu(e, t = void 0) {
  return Ke() ? fe(Dl, Jo) : Jo;
}
function pu(e, t) {
  const n = fu(), o = Re(e, P(() => {
    var i;
    return ((i = n.value) == null ? void 0 : i.namespace) || Wo;
  })), r = au(P(() => {
    var i;
    return (i = n.value) == null ? void 0 : i.locale;
  })), s = ru(P(() => {
    var i;
    return ((i = n.value) == null ? void 0 : i.zIndex) || nu;
  })), a = P(() => {
    var i;
    return c(t) || ((i = n.value) == null ? void 0 : i.size) || "";
  });
  return mu(P(() => c(n) || {})), {
    ns: o,
    locale: r,
    zIndex: s,
    size: a
  };
}
const mu = (e, t, n = !1) => {
  var o;
  const r = !!Ke(), s = r ? fu() : void 0, a = (o = void 0) != null ? o : r ? Rt : void 0;
  if (!a)
    return;
  const i = P(() => {
    const l = c(e);
    return s?.value ? Og(s.value, l) : l;
  });
  return a(Dl, i), a(su, P(() => i.value.locale)), a(Fl, P(() => i.value.namespace)), a(ou, P(() => i.value.zIndex)), a(uu, {
    size: P(() => i.value.size || "")
  }), a(cu, P(() => ({
    emptyValues: i.value.emptyValues,
    valueOnClear: i.value.valueOnClear
  }))), (n || !Jo.value) && (Jo.value = i.value), i;
}, Og = (e, t) => {
  const n = [.../* @__PURE__ */ new Set([...Ei(e), ...Ei(t)])], o = {};
  for (const r of n)
    o[r] = t[r] !== void 0 ? t[r] : e[r];
  return o;
}, Vt = "update:modelValue", Xo = "change", Si = "input";
var Ce = (e, t) => {
  const n = e.__vccOpts || e;
  for (const [o, r] of t)
    n[o] = r;
  return n;
};
function vo(e, t = "px") {
  if (!e)
    return "";
  if (Me(e) || Hv(e))
    return `${e}${t}`;
  if (pt(e))
    return e;
}
function Lg(e, t) {
  if (!Le)
    return;
  if (!t) {
    e.scrollTop = 0;
    return;
  }
  const n = [];
  let o = t.offsetParent;
  for (; o !== null && e !== o && e.contains(o); )
    n.push(o), o = o.offsetParent;
  const r = t.offsetTop + n.reduce((l, u) => l + u.offsetTop, 0), s = r + t.offsetHeight, a = e.scrollTop, i = a + e.clientHeight;
  r < a ? e.scrollTop = r : s > i && (e.scrollTop = s - e.clientHeight);
}
const tn = (e, t) => {
  if (e.install = (n) => {
    for (const o of [e, ...Object.values(t ?? {})])
      n.component(o.name, o);
  }, t)
    for (const [n, o] of Object.entries(t))
      e[n] = o;
  return e;
}, hu = (e, t) => (e.install = (n) => {
  e._context = n._context, n.config.globalProperties[t] = e;
}, e), vu = (e) => (e.install = po, e), Ig = _e({
  size: {
    type: X([Number, String])
  },
  color: {
    type: String
  }
}), Pg = q({
  name: "ElIcon",
  inheritAttrs: !1
}), Ag = /* @__PURE__ */ q({
  ...Pg,
  props: Ig,
  setup(e) {
    const t = e, n = Re("icon"), o = P(() => {
      const { size: r, color: s } = t;
      return !r && !s ? {} : {
        fontSize: $n(r) ? void 0 : vo(r),
        "--color": s
      };
    });
    return (r, s) => (R(), G("i", Dn({
      class: c(n).b(),
      style: c(o)
    }, r.$attrs), [
      ae(r.$slots, "default")
    ], 16));
  }
});
var Ng = /* @__PURE__ */ Ce(Ag, [["__file", "icon.vue"]]);
const ct = tn(Ng);
/*! Element Plus Icons Vue v2.3.1 */
var Mg = /* @__PURE__ */ q({
  name: "ArrowDown",
  __name: "arrow-down",
  setup(e) {
    return (t, n) => (R(), G("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 1024 1024"
    }, [
      O("path", {
        fill: "currentColor",
        d: "M831.872 340.864 512 652.672 192.128 340.864a30.592 30.592 0 0 0-42.752 0 29.12 29.12 0 0 0 0 41.6L489.664 714.24a32 32 0 0 0 44.672 0l340.288-331.712a29.12 29.12 0 0 0 0-41.728 30.592 30.592 0 0 0-42.752 0z"
      })
    ]));
  }
}), Rg = Mg, $g = /* @__PURE__ */ q({
  name: "CircleCheck",
  __name: "circle-check",
  setup(e) {
    return (t, n) => (R(), G("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 1024 1024"
    }, [
      O("path", {
        fill: "currentColor",
        d: "M512 896a384 384 0 1 0 0-768 384 384 0 0 0 0 768m0 64a448 448 0 1 1 0-896 448 448 0 0 1 0 896"
      }),
      O("path", {
        fill: "currentColor",
        d: "M745.344 361.344a32 32 0 0 1 45.312 45.312l-288 288a32 32 0 0 1-45.312 0l-160-160a32 32 0 1 1 45.312-45.312L480 626.752l265.344-265.408z"
      })
    ]));
  }
}), Dg = $g, Fg = /* @__PURE__ */ q({
  name: "CircleCloseFilled",
  __name: "circle-close-filled",
  setup(e) {
    return (t, n) => (R(), G("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 1024 1024"
    }, [
      O("path", {
        fill: "currentColor",
        d: "M512 64a448 448 0 1 1 0 896 448 448 0 0 1 0-896m0 393.664L407.936 353.6a38.4 38.4 0 1 0-54.336 54.336L457.664 512 353.6 616.064a38.4 38.4 0 1 0 54.336 54.336L512 566.336 616.064 670.4a38.4 38.4 0 1 0 54.336-54.336L566.336 512 670.4 407.936a38.4 38.4 0 1 0-54.336-54.336z"
      })
    ]));
  }
}), xg = Fg, zg = /* @__PURE__ */ q({
  name: "CircleClose",
  __name: "circle-close",
  setup(e) {
    return (t, n) => (R(), G("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 1024 1024"
    }, [
      O("path", {
        fill: "currentColor",
        d: "m466.752 512-90.496-90.496a32 32 0 0 1 45.248-45.248L512 466.752l90.496-90.496a32 32 0 1 1 45.248 45.248L557.248 512l90.496 90.496a32 32 0 1 1-45.248 45.248L512 557.248l-90.496 90.496a32 32 0 0 1-45.248-45.248z"
      }),
      O("path", {
        fill: "currentColor",
        d: "M512 896a384 384 0 1 0 0-768 384 384 0 0 0 0 768m0 64a448 448 0 1 1 0-896 448 448 0 0 1 0 896"
      })
    ]));
  }
}), Is = zg, Bg = /* @__PURE__ */ q({
  name: "Close",
  __name: "close",
  setup(e) {
    return (t, n) => (R(), G("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 1024 1024"
    }, [
      O("path", {
        fill: "currentColor",
        d: "M764.288 214.592 512 466.88 259.712 214.592a31.936 31.936 0 0 0-45.12 45.12L466.752 512 214.528 764.224a31.936 31.936 0 1 0 45.12 45.184L512 557.184l252.288 252.288a31.936 31.936 0 0 0 45.12-45.12L557.12 512.064l252.288-252.352a31.936 31.936 0 1 0-45.12-45.184z"
      })
    ]));
  }
}), Qo = Bg, Wg = /* @__PURE__ */ q({
  name: "Hide",
  __name: "hide",
  setup(e) {
    return (t, n) => (R(), G("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 1024 1024"
    }, [
      O("path", {
        fill: "currentColor",
        d: "M876.8 156.8c0-9.6-3.2-16-9.6-22.4-6.4-6.4-12.8-9.6-22.4-9.6-9.6 0-16 3.2-22.4 9.6L736 220.8c-64-32-137.6-51.2-224-60.8-160 16-288 73.6-377.6 176C44.8 438.4 0 496 0 512s48 73.6 134.4 176c22.4 25.6 44.8 48 73.6 67.2l-86.4 89.6c-6.4 6.4-9.6 12.8-9.6 22.4 0 9.6 3.2 16 9.6 22.4 6.4 6.4 12.8 9.6 22.4 9.6 9.6 0 16-3.2 22.4-9.6l704-710.4c3.2-6.4 6.4-12.8 6.4-22.4Zm-646.4 528c-76.8-70.4-128-128-153.6-172.8 28.8-48 80-105.6 153.6-172.8C304 272 400 230.4 512 224c64 3.2 124.8 19.2 176 44.8l-54.4 54.4C598.4 300.8 560 288 512 288c-64 0-115.2 22.4-160 64s-64 96-64 160c0 48 12.8 89.6 35.2 124.8L256 707.2c-9.6-6.4-19.2-16-25.6-22.4Zm140.8-96c-12.8-22.4-19.2-48-19.2-76.8 0-44.8 16-83.2 48-112 32-28.8 67.2-48 112-48 28.8 0 54.4 6.4 73.6 19.2zM889.599 336c-12.8-16-28.8-28.8-41.6-41.6l-48 48c73.6 67.2 124.8 124.8 150.4 169.6-28.8 48-80 105.6-153.6 172.8-73.6 67.2-172.8 108.8-284.8 115.2-51.2-3.2-99.2-12.8-140.8-28.8l-48 48c57.6 22.4 118.4 38.4 188.8 44.8 160-16 288-73.6 377.6-176C979.199 585.6 1024 528 1024 512s-48.001-73.6-134.401-176Z"
      }),
      O("path", {
        fill: "currentColor",
        d: "M511.998 672c-12.8 0-25.6-3.2-38.4-6.4l-51.2 51.2c28.8 12.8 57.6 19.2 89.6 19.2 64 0 115.2-22.4 160-64 41.6-41.6 64-96 64-160 0-32-6.4-64-19.2-89.6l-51.2 51.2c3.2 12.8 6.4 25.6 6.4 38.4 0 44.8-16 83.2-48 112-32 28.8-67.2 48-112 48Z"
      })
    ]));
  }
}), jg = Wg, Vg = /* @__PURE__ */ q({
  name: "InfoFilled",
  __name: "info-filled",
  setup(e) {
    return (t, n) => (R(), G("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 1024 1024"
    }, [
      O("path", {
        fill: "currentColor",
        d: "M512 64a448 448 0 1 1 0 896.064A448 448 0 0 1 512 64m67.2 275.072c33.28 0 60.288-23.104 60.288-57.344s-27.072-57.344-60.288-57.344c-33.28 0-60.16 23.104-60.16 57.344s26.88 57.344 60.16 57.344M590.912 699.2c0-6.848 2.368-24.64 1.024-34.752l-52.608 60.544c-10.88 11.456-24.512 19.392-30.912 17.28a12.992 12.992 0 0 1-8.256-14.72l87.68-276.992c7.168-35.136-12.544-67.2-54.336-71.296-44.096 0-108.992 44.736-148.48 101.504 0 6.784-1.28 23.68.064 33.792l52.544-60.608c10.88-11.328 23.552-19.328 29.952-17.152a12.8 12.8 0 0 1 7.808 16.128L388.48 728.576c-10.048 32.256 8.96 63.872 55.04 71.04 67.84 0 107.904-43.648 147.456-100.416z"
      })
    ]));
  }
}), Ug = Vg, Hg = /* @__PURE__ */ q({
  name: "Loading",
  __name: "loading",
  setup(e) {
    return (t, n) => (R(), G("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 1024 1024"
    }, [
      O("path", {
        fill: "currentColor",
        d: "M512 64a32 32 0 0 1 32 32v192a32 32 0 0 1-64 0V96a32 32 0 0 1 32-32m0 640a32 32 0 0 1 32 32v192a32 32 0 1 1-64 0V736a32 32 0 0 1 32-32m448-192a32 32 0 0 1-32 32H736a32 32 0 1 1 0-64h192a32 32 0 0 1 32 32m-640 0a32 32 0 0 1-32 32H96a32 32 0 0 1 0-64h192a32 32 0 0 1 32 32M195.2 195.2a32 32 0 0 1 45.248 0L376.32 331.008a32 32 0 0 1-45.248 45.248L195.2 240.448a32 32 0 0 1 0-45.248zm452.544 452.544a32 32 0 0 1 45.248 0L828.8 783.552a32 32 0 0 1-45.248 45.248L647.744 692.992a32 32 0 0 1 0-45.248zM828.8 195.264a32 32 0 0 1 0 45.184L692.992 376.32a32 32 0 0 1-45.248-45.248l135.808-135.808a32 32 0 0 1 45.248 0m-452.544 452.48a32 32 0 0 1 0 45.248L240.448 828.8a32 32 0 0 1-45.248-45.248l135.808-135.808a32 32 0 0 1 45.248 0z"
      })
    ]));
  }
}), Kg = Hg, Gg = /* @__PURE__ */ q({
  name: "SuccessFilled",
  __name: "success-filled",
  setup(e) {
    return (t, n) => (R(), G("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 1024 1024"
    }, [
      O("path", {
        fill: "currentColor",
        d: "M512 64a448 448 0 1 1 0 896 448 448 0 0 1 0-896m-55.808 536.384-99.52-99.584a38.4 38.4 0 1 0-54.336 54.336l126.72 126.72a38.272 38.272 0 0 0 54.336 0l262.4-262.464a38.4 38.4 0 1 0-54.272-54.336z"
      })
    ]));
  }
}), Yg = Gg, Zg = /* @__PURE__ */ q({
  name: "View",
  __name: "view",
  setup(e) {
    return (t, n) => (R(), G("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 1024 1024"
    }, [
      O("path", {
        fill: "currentColor",
        d: "M512 160c320 0 512 352 512 352S832 864 512 864 0 512 0 512s192-352 512-352m0 64c-225.28 0-384.128 208.064-436.8 288 52.608 79.872 211.456 288 436.8 288 225.28 0 384.128-208.064 436.8-288-52.608-79.872-211.456-288-436.8-288zm0 64a224 224 0 1 1 0 448 224 224 0 0 1 0-448m0 64a160.192 160.192 0 0 0-160 160c0 88.192 71.744 160 160 160s160-71.808 160-160-71.744-160-160-160"
      })
    ]));
  }
}), qg = Zg, Jg = /* @__PURE__ */ q({
  name: "WarningFilled",
  __name: "warning-filled",
  setup(e) {
    return (t, n) => (R(), G("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 1024 1024"
    }, [
      O("path", {
        fill: "currentColor",
        d: "M512 64a448 448 0 1 1 0 896 448 448 0 0 1 0-896m0 192a58.432 58.432 0 0 0-58.24 63.744l23.36 256.384a35.072 35.072 0 0 0 69.76 0l23.296-256.384A58.432 58.432 0 0 0 512 256m0 512a51.2 51.2 0 1 0 0-102.4 51.2 51.2 0 0 0 0 102.4"
      })
    ]));
  }
}), Xg = Jg;
const Bn = X([
  String,
  Object,
  Function
]), Qg = {
  Close: Qo
}, ey = {
  Close: Qo
}, er = {
  success: Yg,
  warning: Xg,
  error: xg,
  info: Ug
}, gu = {
  validating: Kg,
  success: Dg,
  error: Is
}, ty = () => Le && /firefox/i.test(window.navigator.userAgent);
let Ze;
const ny = {
  height: "0",
  visibility: "hidden",
  overflow: ty() ? "" : "hidden",
  position: "absolute",
  "z-index": "-1000",
  top: "0",
  right: "0"
}, oy = [
  "letter-spacing",
  "line-height",
  "padding-top",
  "padding-bottom",
  "font-family",
  "font-weight",
  "font-size",
  "text-rendering",
  "text-transform",
  "width",
  "text-indent",
  "padding-left",
  "padding-right",
  "border-width",
  "box-sizing"
];
function ry(e) {
  const t = window.getComputedStyle(e), n = t.getPropertyValue("box-sizing"), o = Number.parseFloat(t.getPropertyValue("padding-bottom")) + Number.parseFloat(t.getPropertyValue("padding-top")), r = Number.parseFloat(t.getPropertyValue("border-bottom-width")) + Number.parseFloat(t.getPropertyValue("border-top-width"));
  return { contextStyle: oy.map((a) => [
    a,
    t.getPropertyValue(a)
  ]), paddingSize: o, borderSize: r, boxSizing: n };
}
function Ti(e, t = 1, n) {
  var o;
  Ze || (Ze = document.createElement("textarea"), document.body.appendChild(Ze));
  const { paddingSize: r, borderSize: s, boxSizing: a, contextStyle: i } = ry(e);
  i.forEach(([p, m]) => Ze?.style.setProperty(p, m)), Object.entries(ny).forEach(([p, m]) => Ze?.style.setProperty(p, m, "important")), Ze.value = e.value || e.placeholder || "";
  let l = Ze.scrollHeight;
  const u = {};
  a === "border-box" ? l = l + s : a === "content-box" && (l = l - r), Ze.value = "";
  const f = Ze.scrollHeight - r;
  if (Me(t)) {
    let p = f * t;
    a === "border-box" && (p = p + r + s), l = Math.max(p, l), u.minHeight = `${p}px`;
  }
  if (Me(n)) {
    let p = f * n;
    a === "border-box" && (p = p + r + s), l = Math.min(p, l);
  }
  return u.height = `${l}px`, (o = Ze.parentNode) == null || o.removeChild(Ze), Ze = void 0, u;
}
const yu = (e) => e, sy = _e({
  ariaLabel: String,
  ariaOrientation: {
    type: String,
    values: ["horizontal", "vertical", "undefined"]
  },
  ariaControls: String
}), Co = (e) => Uv(sy, e), ay = _e({
  id: {
    type: String,
    default: void 0
  },
  size: Ls,
  disabled: Boolean,
  modelValue: {
    type: X([
      String,
      Number,
      Object
    ]),
    default: ""
  },
  maxlength: {
    type: [String, Number]
  },
  minlength: {
    type: [String, Number]
  },
  type: {
    type: String,
    default: "text"
  },
  resize: {
    type: String,
    values: ["none", "both", "horizontal", "vertical"]
  },
  autosize: {
    type: X([Boolean, Object]),
    default: !1
  },
  autocomplete: {
    type: String,
    default: "off"
  },
  formatter: {
    type: Function
  },
  parser: {
    type: Function
  },
  placeholder: {
    type: String
  },
  form: {
    type: String
  },
  readonly: Boolean,
  clearable: Boolean,
  showPassword: Boolean,
  showWordLimit: Boolean,
  suffixIcon: {
    type: Bn
  },
  prefixIcon: {
    type: Bn
  },
  containerRole: {
    type: String,
    default: void 0
  },
  tabindex: {
    type: [String, Number],
    default: 0
  },
  validateEvent: {
    type: Boolean,
    default: !0
  },
  inputStyle: {
    type: X([Object, Array, String]),
    default: () => yu({})
  },
  autofocus: Boolean,
  rows: {
    type: Number,
    default: 2
  },
  ...Co(["ariaLabel"])
}), iy = {
  [Vt]: (e) => pt(e),
  input: (e) => pt(e),
  change: (e) => pt(e),
  focus: (e) => e instanceof FocusEvent,
  blur: (e) => e instanceof FocusEvent,
  clear: () => !0,
  mouseleave: (e) => e instanceof MouseEvent,
  mouseenter: (e) => e instanceof MouseEvent,
  keydown: (e) => e instanceof Event,
  compositionstart: (e) => e instanceof CompositionEvent,
  compositionupdate: (e) => e instanceof CompositionEvent,
  compositionend: (e) => e instanceof CompositionEvent
}, ly = ["class", "style"], uy = /^on[A-Z]/, cy = (e = {}) => {
  const { excludeListeners: t = !1, excludeKeys: n } = e, o = P(() => (n?.value || []).concat(ly)), r = Ke();
  return r ? P(() => {
    var s;
    return Zo(Object.entries((s = r.proxy) == null ? void 0 : s.$attrs).filter(([a]) => !o.value.includes(a) && !(t && uy.test(a))));
  }) : P(() => ({}));
}, Ps = Symbol("formContextKey"), tr = Symbol("formItemContextKey"), ki = {
  prefix: Math.floor(Math.random() * 1e4),
  current: 0
}, dy = Symbol("elIdInjection"), bu = () => Ke() ? fe(dy, ki) : ki, vr = (e) => {
  const t = bu(), n = bs();
  return Qv(() => c(e) || `${n.value}-id-${t.prefix}-${t.current++}`);
}, _u = () => {
  const e = fe(Ps, void 0), t = fe(tr, void 0);
  return {
    form: e,
    formItem: t
  };
}, wu = (e, {
  formItemContext: t,
  disableIdGeneration: n,
  disableIdManagement: o
}) => {
  n || (n = x(!1)), o || (o = x(!1));
  const r = x();
  let s;
  const a = P(() => {
    var i;
    return !!(!(e.label || e.ariaLabel) && t && t.inputIds && ((i = t.inputIds) == null ? void 0 : i.length) <= 1);
  });
  return Pe(() => {
    s = Q([Ut(e, "id"), n], ([i, l]) => {
      const u = i ?? (l ? void 0 : vr().value);
      u !== r.value && (t?.removeInputId && (r.value && t.removeInputId(r.value), !o?.value && !l && u && t.addInputId(u)), r.value = u);
    }, { immediate: !0 });
  }), ls(() => {
    s && s(), t?.removeInputId && r.value && t.removeInputId(r.value);
  }), {
    isLabeledByFormItem: a,
    inputId: r
  };
}, Cu = (e) => {
  const t = Ke();
  return P(() => {
    var n, o;
    return (o = (n = t?.proxy) == null ? void 0 : n.$props) == null ? void 0 : o[e];
  });
}, As = (e, t = {}) => {
  const n = x(void 0), o = t.prop ? n : Cu("size"), r = t.global ? n : Eg(), s = t.form ? { size: void 0 } : fe(Ps, void 0), a = t.formItem ? { size: void 0 } : fe(tr, void 0);
  return P(() => o.value || c(e) || a?.size || s?.size || r.value || "");
}, fy = (e) => {
  const t = Cu("disabled"), n = fe(Ps, void 0);
  return P(() => t.value || c(e) || n?.disabled || !1);
};
function Eu(e, {
  beforeFocus: t,
  afterFocus: n,
  beforeBlur: o,
  afterBlur: r
} = {}) {
  const s = Ke(), { emit: a } = s, i = dn(), l = x(!1), u = (m) => {
    Ne(t) && t(m) || l.value || (l.value = !0, a("focus", m), n?.());
  }, f = (m) => {
    var g;
    Ne(o) && o(m) || m.relatedTarget && ((g = i.value) != null && g.contains(m.relatedTarget)) || (l.value = !1, a("blur", m), r?.());
  }, p = () => {
    var m, g;
    (m = i.value) != null && m.contains(document.activeElement) && i.value !== document.activeElement || (g = e.value) == null || g.focus();
  };
  return Q(i, (m) => {
    m && m.setAttribute("tabindex", "-1");
  }), Et(i, "focus", u, !0), Et(i, "blur", f, !0), Et(i, "click", p, !0), {
    isFocused: l,
    wrapperRef: i,
    handleFocus: u,
    handleBlur: f
  };
}
const py = (e) => /([\uAC00-\uD7AF\u3130-\u318F])+/gi.test(e);
function Su({
  afterComposition: e,
  emit: t
}) {
  const n = x(!1), o = (i) => {
    t?.("compositionstart", i), n.value = !0;
  }, r = (i) => {
    var l;
    t?.("compositionupdate", i);
    const u = (l = i.target) == null ? void 0 : l.value, f = u[u.length - 1] || "";
    n.value = !py(f);
  }, s = (i) => {
    t?.("compositionend", i), n.value && (n.value = !1, Se(() => e(i)));
  };
  return {
    isComposing: n,
    handleComposition: (i) => {
      i.type === "compositionend" ? s(i) : r(i);
    },
    handleCompositionStart: o,
    handleCompositionUpdate: r,
    handleCompositionEnd: s
  };
}
function my(e) {
  let t;
  function n() {
    if (e.value == null)
      return;
    const { selectionStart: r, selectionEnd: s, value: a } = e.value;
    if (r == null || s == null)
      return;
    const i = a.slice(0, Math.max(0, r)), l = a.slice(Math.max(0, s));
    t = {
      selectionStart: r,
      selectionEnd: s,
      value: a,
      beforeTxt: i,
      afterTxt: l
    };
  }
  function o() {
    if (e.value == null || t == null)
      return;
    const { value: r } = e.value, { beforeTxt: s, afterTxt: a, selectionStart: i } = t;
    if (s == null || a == null || i == null)
      return;
    let l = r.length;
    if (r.endsWith(a))
      l = r.length - a.length;
    else if (r.startsWith(s))
      l = s.length;
    else {
      const u = s[i - 1], f = r.indexOf(u, i - 1);
      f !== -1 && (l = f + 1);
    }
    e.value.setSelectionRange(l, l);
  }
  return [n, o];
}
const hy = "ElInput", vy = q({
  name: hy,
  inheritAttrs: !1
}), gy = /* @__PURE__ */ q({
  ...vy,
  props: ay,
  emits: iy,
  setup(e, { expose: t, emit: n }) {
    const o = e, r = wc(), s = cy(), a = Cc(), i = P(() => [
      o.type === "textarea" ? v.b() : h.b(),
      h.m(m.value),
      h.is("disabled", g.value),
      h.is("exceed", Ye.value),
      {
        [h.b("group")]: a.prepend || a.append,
        [h.m("prefix")]: a.prefix || o.prefixIcon,
        [h.m("suffix")]: a.suffix || o.suffixIcon || o.clearable || o.showPassword,
        [h.bm("suffix", "password-clear")]: he.value && pe.value,
        [h.b("hidden")]: o.type === "hidden"
      },
      r.class
    ]), l = P(() => [
      h.e("wrapper"),
      h.is("focus", $.value)
    ]), { form: u, formItem: f } = _u(), { inputId: p } = wu(o, {
      formItemContext: f
    }), m = As(), g = fy(), h = Re("input"), v = Re("textarea"), w = dn(), d = dn(), E = x(!1), L = x(!1), S = x(), T = dn(o.inputStyle), I = P(() => w.value || d.value), { wrapperRef: k, isFocused: $, handleFocus: C, handleBlur: D } = Eu(I, {
      beforeFocus() {
        return g.value;
      },
      afterBlur() {
        var y;
        o.validateEvent && ((y = f?.validate) == null || y.call(f, "blur").catch((N) => void 0));
      }
    }), K = P(() => {
      var y;
      return (y = u?.statusIcon) != null ? y : !1;
    }), Y = P(() => f?.validateState || ""), se = P(() => Y.value && gu[Y.value]), we = P(() => L.value ? qg : jg), me = P(() => [
      r.style
    ]), oe = P(() => [
      o.inputStyle,
      T.value,
      { resize: o.resize }
    ]), B = P(() => pr(o.modelValue) ? "" : String(o.modelValue)), he = P(() => o.clearable && !g.value && !o.readonly && !!B.value && ($.value || E.value)), pe = P(() => o.showPassword && !g.value && !!B.value && (!!B.value || $.value)), Ee = P(() => o.showWordLimit && !!o.maxlength && (o.type === "text" || o.type === "textarea") && !g.value && !o.readonly && !o.showPassword), Ge = P(() => B.value.length), Ye = P(() => !!Ee.value && Ge.value > Number(o.maxlength)), at = P(() => !!a.suffix || !!o.suffixIcon || he.value || o.showPassword || Ee.value || !!Y.value && K.value), [Fe, $e] = my(w);
    Lt(d, (y) => {
      if (ve(), !Ee.value || o.resize !== "both")
        return;
      const N = y[0], { width: te } = N.contentRect;
      S.value = {
        right: `calc(100% - ${te + 15 + 6}px)`
      };
    });
    const xe = () => {
      const { type: y, autosize: N } = o;
      if (!(!Le || y !== "textarea" || !d.value))
        if (N) {
          const te = dt(N) ? N.minRows : void 0, ce = dt(N) ? N.maxRows : void 0, Be = Ti(d.value, te, ce);
          T.value = {
            overflowY: "hidden",
            ...Be
          }, Se(() => {
            d.value.offsetHeight, T.value = Be;
          });
        } else
          T.value = {
            minHeight: Ti(d.value).minHeight
          };
    }, ve = ((y) => {
      let N = !1;
      return () => {
        var te;
        if (N || !o.autosize)
          return;
        ((te = d.value) == null ? void 0 : te.offsetParent) === null || (y(), N = !0);
      };
    })(xe), Xe = () => {
      const y = I.value, N = o.formatter ? o.formatter(B.value) : B.value;
      !y || y.value === N || (y.value = N);
    }, it = async (y) => {
      Fe();
      let { value: N } = y.target;
      if (o.formatter && o.parser && (N = o.parser(N)), !yt.value) {
        if (N === B.value) {
          Xe();
          return;
        }
        n(Vt, N), n(Si, N), await Se(), Xe(), $e();
      }
    }, Qe = (y) => {
      let { value: N } = y.target;
      o.formatter && o.parser && (N = o.parser(N)), n(Xo, N);
    }, {
      isComposing: yt,
      handleCompositionStart: et,
      handleCompositionUpdate: tt,
      handleCompositionEnd: nt
    } = Su({ emit: n, afterComposition: it }), lt = () => {
      Fe(), L.value = !L.value, setTimeout($e);
    }, Tt = () => {
      var y;
      return (y = I.value) == null ? void 0 : y.focus();
    }, b = () => {
      var y;
      return (y = I.value) == null ? void 0 : y.blur();
    }, _ = (y) => {
      E.value = !1, n("mouseleave", y);
    }, M = (y) => {
      E.value = !0, n("mouseenter", y);
    }, H = (y) => {
      n("keydown", y);
    }, ie = () => {
      var y;
      (y = I.value) == null || y.select();
    }, J = () => {
      n(Vt, ""), n(Xo, ""), n("clear"), n(Si, "");
    };
    return Q(() => o.modelValue, () => {
      var y;
      Se(() => xe()), o.validateEvent && ((y = f?.validate) == null || y.call(f, "change").catch((N) => void 0));
    }), Q(B, () => Xe()), Q(() => o.type, async () => {
      await Se(), Xe(), xe();
    }), Pe(() => {
      !o.formatter && o.parser, Xe(), Se(xe);
    }), t({
      input: w,
      textarea: d,
      ref: I,
      textareaStyle: oe,
      autosize: Ut(o, "autosize"),
      isComposing: yt,
      focus: Tt,
      blur: b,
      select: ie,
      clear: J,
      resizeTextarea: xe
    }), (y, N) => (R(), G("div", {
      class: j([
        c(i),
        {
          [c(h).bm("group", "append")]: y.$slots.append,
          [c(h).bm("group", "prepend")]: y.$slots.prepend
        }
      ]),
      style: Ue(c(me)),
      onMouseenter: M,
      onMouseleave: _
    }, [
      U(" input "),
      y.type !== "textarea" ? (R(), G(ft, { key: 0 }, [
        U(" prepend slot "),
        y.$slots.prepend ? (R(), G("div", {
          key: 0,
          class: j(c(h).be("group", "prepend"))
        }, [
          ae(y.$slots, "prepend")
        ], 2)) : U("v-if", !0),
        O("div", {
          ref_key: "wrapperRef",
          ref: k,
          class: j(c(l))
        }, [
          U(" prefix slot "),
          y.$slots.prefix || y.prefixIcon ? (R(), G("span", {
            key: 0,
            class: j(c(h).e("prefix"))
          }, [
            O("span", {
              class: j(c(h).e("prefix-inner"))
            }, [
              ae(y.$slots, "prefix"),
              y.prefixIcon ? (R(), ee(c(ct), {
                key: 0,
                class: j(c(h).e("icon"))
              }, {
                default: ne(() => [
                  (R(), ee(It(y.prefixIcon)))
                ]),
                _: 1
              }, 8, ["class"])) : U("v-if", !0)
            ], 2)
          ], 2)) : U("v-if", !0),
          O("input", Dn({
            id: c(p),
            ref_key: "input",
            ref: w,
            class: c(h).e("inner")
          }, c(s), {
            minlength: y.minlength,
            maxlength: y.maxlength,
            type: y.showPassword ? L.value ? "text" : "password" : y.type,
            disabled: c(g),
            readonly: y.readonly,
            autocomplete: y.autocomplete,
            tabindex: y.tabindex,
            "aria-label": y.ariaLabel,
            placeholder: y.placeholder,
            style: y.inputStyle,
            form: y.form,
            autofocus: y.autofocus,
            role: y.containerRole,
            onCompositionstart: c(et),
            onCompositionupdate: c(tt),
            onCompositionend: c(nt),
            onInput: it,
            onChange: Qe,
            onKeydown: H
          }), null, 16, ["id", "minlength", "maxlength", "type", "disabled", "readonly", "autocomplete", "tabindex", "aria-label", "placeholder", "form", "autofocus", "role", "onCompositionstart", "onCompositionupdate", "onCompositionend"]),
          U(" suffix slot "),
          c(at) ? (R(), G("span", {
            key: 1,
            class: j(c(h).e("suffix"))
          }, [
            O("span", {
              class: j(c(h).e("suffix-inner"))
            }, [
              !c(he) || !c(pe) || !c(Ee) ? (R(), G(ft, { key: 0 }, [
                ae(y.$slots, "suffix"),
                y.suffixIcon ? (R(), ee(c(ct), {
                  key: 0,
                  class: j(c(h).e("icon"))
                }, {
                  default: ne(() => [
                    (R(), ee(It(y.suffixIcon)))
                  ]),
                  _: 1
                }, 8, ["class"])) : U("v-if", !0)
              ], 64)) : U("v-if", !0),
              c(he) ? (R(), ee(c(ct), {
                key: 1,
                class: j([c(h).e("icon"), c(h).e("clear")]),
                onMousedown: He(c(po), ["prevent"]),
                onClick: J
              }, {
                default: ne(() => [
                  z(c(Is))
                ]),
                _: 1
              }, 8, ["class", "onMousedown"])) : U("v-if", !0),
              c(pe) ? (R(), ee(c(ct), {
                key: 2,
                class: j([c(h).e("icon"), c(h).e("password")]),
                onClick: lt
              }, {
                default: ne(() => [
                  (R(), ee(It(c(we))))
                ]),
                _: 1
              }, 8, ["class"])) : U("v-if", !0),
              c(Ee) ? (R(), G("span", {
                key: 3,
                class: j(c(h).e("count"))
              }, [
                O("span", {
                  class: j(c(h).e("count-inner"))
                }, V(c(Ge)) + " / " + V(y.maxlength), 3)
              ], 2)) : U("v-if", !0),
              c(Y) && c(se) && c(K) ? (R(), ee(c(ct), {
                key: 4,
                class: j([
                  c(h).e("icon"),
                  c(h).e("validateIcon"),
                  c(h).is("loading", c(Y) === "validating")
                ])
              }, {
                default: ne(() => [
                  (R(), ee(It(c(se))))
                ]),
                _: 1
              }, 8, ["class"])) : U("v-if", !0)
            ], 2)
          ], 2)) : U("v-if", !0)
        ], 2),
        U(" append slot "),
        y.$slots.append ? (R(), G("div", {
          key: 1,
          class: j(c(h).be("group", "append"))
        }, [
          ae(y.$slots, "append")
        ], 2)) : U("v-if", !0)
      ], 64)) : (R(), G(ft, { key: 1 }, [
        U(" textarea "),
        O("textarea", Dn({
          id: c(p),
          ref_key: "textarea",
          ref: d,
          class: [c(v).e("inner"), c(h).is("focus", c($))]
        }, c(s), {
          minlength: y.minlength,
          maxlength: y.maxlength,
          tabindex: y.tabindex,
          disabled: c(g),
          readonly: y.readonly,
          autocomplete: y.autocomplete,
          style: c(oe),
          "aria-label": y.ariaLabel,
          placeholder: y.placeholder,
          form: y.form,
          autofocus: y.autofocus,
          rows: y.rows,
          role: y.containerRole,
          onCompositionstart: c(et),
          onCompositionupdate: c(tt),
          onCompositionend: c(nt),
          onInput: it,
          onFocus: c(C),
          onBlur: c(D),
          onChange: Qe,
          onKeydown: H
        }), null, 16, ["id", "minlength", "maxlength", "tabindex", "disabled", "readonly", "autocomplete", "aria-label", "placeholder", "form", "autofocus", "rows", "role", "onCompositionstart", "onCompositionupdate", "onCompositionend", "onFocus", "onBlur"]),
        c(Ee) ? (R(), G("span", {
          key: 0,
          style: Ue(S.value),
          class: j(c(h).e("count"))
        }, V(c(Ge)) + " / " + V(y.maxlength), 7)) : U("v-if", !0)
      ], 64))
    ], 38));
  }
});
var yy = /* @__PURE__ */ Ce(gy, [["__file", "input.vue"]]);
const by = tn(yy), An = 4, _y = {
  vertical: {
    offset: "offsetHeight",
    scroll: "scrollTop",
    scrollSize: "scrollHeight",
    size: "height",
    key: "vertical",
    axis: "Y",
    client: "clientY",
    direction: "top"
  },
  horizontal: {
    offset: "offsetWidth",
    scroll: "scrollLeft",
    scrollSize: "scrollWidth",
    size: "width",
    key: "horizontal",
    axis: "X",
    client: "clientX",
    direction: "left"
  }
}, wy = ({
  move: e,
  size: t,
  bar: n
}) => ({
  [n.size]: t,
  transform: `translate${n.axis}(${e}%)`
}), Ns = Symbol("scrollbarContextKey"), Cy = _e({
  vertical: Boolean,
  size: String,
  move: Number,
  ratio: {
    type: Number,
    required: !0
  },
  always: Boolean
}), Ey = "Thumb", Sy = /* @__PURE__ */ q({
  __name: "thumb",
  props: Cy,
  setup(e) {
    const t = e, n = fe(Ns), o = Re("scrollbar");
    n || gg(Ey, "can not inject scrollbar context");
    const r = x(), s = x(), a = x({}), i = x(!1);
    let l = !1, u = !1, f = Le ? document.onselectstart : null;
    const p = P(() => _y[t.vertical ? "vertical" : "horizontal"]), m = P(() => wy({
      size: t.size,
      move: t.move,
      bar: p.value
    })), g = P(() => r.value[p.value.offset] ** 2 / n.wrapElement[p.value.scrollSize] / t.ratio / s.value[p.value.offset]), h = (I) => {
      var k;
      if (I.stopPropagation(), I.ctrlKey || [1, 2].includes(I.button))
        return;
      (k = window.getSelection()) == null || k.removeAllRanges(), w(I);
      const $ = I.currentTarget;
      $ && (a.value[p.value.axis] = $[p.value.offset] - (I[p.value.client] - $.getBoundingClientRect()[p.value.direction]));
    }, v = (I) => {
      if (!s.value || !r.value || !n.wrapElement)
        return;
      const k = Math.abs(I.target.getBoundingClientRect()[p.value.direction] - I[p.value.client]), $ = s.value[p.value.offset] / 2, C = (k - $) * 100 * g.value / r.value[p.value.offset];
      n.wrapElement[p.value.scroll] = C * n.wrapElement[p.value.scrollSize] / 100;
    }, w = (I) => {
      I.stopImmediatePropagation(), l = !0, document.addEventListener("mousemove", d), document.addEventListener("mouseup", E), f = document.onselectstart, document.onselectstart = () => !1;
    }, d = (I) => {
      if (!r.value || !s.value || l === !1)
        return;
      const k = a.value[p.value.axis];
      if (!k)
        return;
      const $ = (r.value.getBoundingClientRect()[p.value.direction] - I[p.value.client]) * -1, C = s.value[p.value.offset] - k, D = ($ - C) * 100 * g.value / r.value[p.value.offset];
      n.wrapElement[p.value.scroll] = D * n.wrapElement[p.value.scrollSize] / 100;
    }, E = () => {
      l = !1, a.value[p.value.axis] = 0, document.removeEventListener("mousemove", d), document.removeEventListener("mouseup", E), T(), u && (i.value = !1);
    }, L = () => {
      u = !1, i.value = !!t.size;
    }, S = () => {
      u = !0, i.value = l;
    };
    Ft(() => {
      T(), document.removeEventListener("mouseup", E);
    });
    const T = () => {
      document.onselectstart !== f && (document.onselectstart = f);
    };
    return Et(Ut(n, "scrollbarElement"), "mousemove", L), Et(Ut(n, "scrollbarElement"), "mouseleave", S), (I, k) => (R(), ee(Gn, {
      name: c(o).b("fade"),
      persisted: ""
    }, {
      default: ne(() => [
        Oe(O("div", {
          ref_key: "instance",
          ref: r,
          class: j([c(o).e("bar"), c(o).is(c(p).key)]),
          onMousedown: v
        }, [
          O("div", {
            ref_key: "thumb",
            ref: s,
            class: j(c(o).e("thumb")),
            style: Ue(c(m)),
            onMousedown: h
          }, null, 38)
        ], 34), [
          [qt, I.always || i.value]
        ])
      ]),
      _: 1
    }, 8, ["name"]));
  }
});
var Oi = /* @__PURE__ */ Ce(Sy, [["__file", "thumb.vue"]]);
const Ty = _e({
  always: {
    type: Boolean,
    default: !0
  },
  minSize: {
    type: Number,
    required: !0
  }
}), ky = /* @__PURE__ */ q({
  __name: "bar",
  props: Ty,
  setup(e, { expose: t }) {
    const n = e, o = fe(Ns), r = x(0), s = x(0), a = x(""), i = x(""), l = x(1), u = x(1);
    return t({
      handleScroll: (m) => {
        if (m) {
          const g = m.offsetHeight - An, h = m.offsetWidth - An;
          s.value = m.scrollTop * 100 / g * l.value, r.value = m.scrollLeft * 100 / h * u.value;
        }
      },
      update: () => {
        const m = o?.wrapElement;
        if (!m)
          return;
        const g = m.offsetHeight - An, h = m.offsetWidth - An, v = g ** 2 / m.scrollHeight, w = h ** 2 / m.scrollWidth, d = Math.max(v, n.minSize), E = Math.max(w, n.minSize);
        l.value = v / (g - v) / (d / (g - d)), u.value = w / (h - w) / (E / (h - E)), i.value = d + An < g ? `${d}px` : "", a.value = E + An < h ? `${E}px` : "";
      }
    }), (m, g) => (R(), G(ft, null, [
      z(Oi, {
        move: r.value,
        ratio: u.value,
        size: a.value,
        always: m.always
      }, null, 8, ["move", "ratio", "size", "always"]),
      z(Oi, {
        move: s.value,
        ratio: l.value,
        size: i.value,
        vertical: "",
        always: m.always
      }, null, 8, ["move", "ratio", "size", "always"])
    ], 64));
  }
});
var Oy = /* @__PURE__ */ Ce(ky, [["__file", "bar.vue"]]);
const Ly = _e({
  height: {
    type: [String, Number],
    default: ""
  },
  maxHeight: {
    type: [String, Number],
    default: ""
  },
  native: {
    type: Boolean,
    default: !1
  },
  wrapStyle: {
    type: X([String, Object, Array]),
    default: ""
  },
  wrapClass: {
    type: [String, Array],
    default: ""
  },
  viewClass: {
    type: [String, Array],
    default: ""
  },
  viewStyle: {
    type: [String, Array, Object],
    default: ""
  },
  noresize: Boolean,
  tag: {
    type: String,
    default: "div"
  },
  always: Boolean,
  minSize: {
    type: Number,
    default: 20
  },
  tabindex: {
    type: [String, Number],
    default: void 0
  },
  id: String,
  role: String,
  ...Co(["ariaLabel", "ariaOrientation"])
}), Iy = {
  scroll: ({
    scrollTop: e,
    scrollLeft: t
  }) => [e, t].every(Me)
}, Py = "ElScrollbar", Ay = q({
  name: Py
}), Ny = /* @__PURE__ */ q({
  ...Ay,
  props: Ly,
  emits: Iy,
  setup(e, { expose: t, emit: n }) {
    const o = e, r = Re("scrollbar");
    let s, a, i = 0, l = 0;
    const u = x(), f = x(), p = x(), m = x(), g = P(() => {
      const T = {};
      return o.height && (T.height = vo(o.height)), o.maxHeight && (T.maxHeight = vo(o.maxHeight)), [o.wrapStyle, T];
    }), h = P(() => [
      o.wrapClass,
      r.e("wrap"),
      { [r.em("wrap", "hidden-default")]: !o.native }
    ]), v = P(() => [r.e("view"), o.viewClass]), w = () => {
      var T;
      f.value && ((T = m.value) == null || T.handleScroll(f.value), i = f.value.scrollTop, l = f.value.scrollLeft, n("scroll", {
        scrollTop: f.value.scrollTop,
        scrollLeft: f.value.scrollLeft
      }));
    };
    function d(T, I) {
      dt(T) ? f.value.scrollTo(T) : Me(T) && Me(I) && f.value.scrollTo(T, I);
    }
    const E = (T) => {
      Me(T) && (f.value.scrollTop = T);
    }, L = (T) => {
      Me(T) && (f.value.scrollLeft = T);
    }, S = () => {
      var T;
      (T = m.value) == null || T.update();
    };
    return Q(() => o.noresize, (T) => {
      T ? (s?.(), a?.()) : ({ stop: s } = Lt(p, S), a = Et("resize", S));
    }, { immediate: !0 }), Q(() => [o.maxHeight, o.height], () => {
      o.native || Se(() => {
        var T;
        S(), f.value && ((T = m.value) == null || T.handleScroll(f.value));
      });
    }), Rt(Ns, wn({
      scrollbarElement: u,
      wrapElement: f
    })), Ec(() => {
      f.value && (f.value.scrollTop = i, f.value.scrollLeft = l);
    }), Pe(() => {
      o.native || Se(() => {
        S();
      });
    }), Sc(() => S()), t({
      wrapRef: f,
      update: S,
      scrollTo: d,
      setScrollTop: E,
      setScrollLeft: L,
      handleScroll: w
    }), (T, I) => (R(), G("div", {
      ref_key: "scrollbarRef",
      ref: u,
      class: j(c(r).b())
    }, [
      O("div", {
        ref_key: "wrapRef",
        ref: f,
        class: j(c(h)),
        style: Ue(c(g)),
        tabindex: T.tabindex,
        onScroll: w
      }, [
        (R(), ee(It(T.tag), {
          id: T.id,
          ref_key: "resizeRef",
          ref: p,
          class: j(c(v)),
          style: Ue(T.viewStyle),
          role: T.role,
          "aria-label": T.ariaLabel,
          "aria-orientation": T.ariaOrientation
        }, {
          default: ne(() => [
            ae(T.$slots, "default")
          ]),
          _: 3
        }, 8, ["id", "class", "style", "role", "aria-label", "aria-orientation"]))
      ], 46, ["tabindex"]),
      T.native ? U("v-if", !0) : (R(), ee(Oy, {
        key: 0,
        ref_key: "barRef",
        ref: m,
        always: T.always,
        "min-size": T.minSize
      }, null, 8, ["always", "min-size"]))
    ], 2));
  }
});
var My = /* @__PURE__ */ Ce(Ny, [["__file", "scrollbar.vue"]]);
const Ry = tn(My), Ms = Symbol("popper"), Tu = Symbol("popperContent"), $y = [
  "dialog",
  "grid",
  "group",
  "listbox",
  "menu",
  "navigation",
  "tooltip",
  "tree"
], ku = _e({
  role: {
    type: String,
    values: $y,
    default: "tooltip"
  }
}), Dy = q({
  name: "ElPopper",
  inheritAttrs: !1
}), Fy = /* @__PURE__ */ q({
  ...Dy,
  props: ku,
  setup(e, { expose: t }) {
    const n = e, o = x(), r = x(), s = x(), a = x(), i = P(() => n.role), l = {
      triggerRef: o,
      popperInstanceRef: r,
      contentRef: s,
      referenceRef: a,
      role: i
    };
    return t(l), Rt(Ms, l), (u, f) => ae(u.$slots, "default");
  }
});
var xy = /* @__PURE__ */ Ce(Fy, [["__file", "popper.vue"]]);
const Ou = _e({
  arrowOffset: {
    type: Number,
    default: 5
  }
}), zy = q({
  name: "ElPopperArrow",
  inheritAttrs: !1
}), By = /* @__PURE__ */ q({
  ...zy,
  props: Ou,
  setup(e, { expose: t }) {
    const n = e, o = Re("popper"), { arrowOffset: r, arrowRef: s, arrowStyle: a } = fe(Tu, void 0);
    return Q(() => n.arrowOffset, (i) => {
      r.value = i;
    }), Ft(() => {
      s.value = void 0;
    }), t({
      arrowRef: s
    }), (i, l) => (R(), G("span", {
      ref_key: "arrowRef",
      ref: s,
      class: j(c(o).e("arrow")),
      style: Ue(c(a)),
      "data-popper-arrow": ""
    }, null, 6));
  }
});
var Wy = /* @__PURE__ */ Ce(By, [["__file", "arrow.vue"]]);
const Lu = _e({
  virtualRef: {
    type: X(Object)
  },
  virtualTriggering: Boolean,
  onMouseenter: {
    type: X(Function)
  },
  onMouseleave: {
    type: X(Function)
  },
  onClick: {
    type: X(Function)
  },
  onKeydown: {
    type: X(Function)
  },
  onFocus: {
    type: X(Function)
  },
  onBlur: {
    type: X(Function)
  },
  onContextmenu: {
    type: X(Function)
  },
  id: String,
  open: Boolean
}), Iu = Symbol("elForwardRef"), jy = (e) => {
  Rt(Iu, {
    setForwardRef: (n) => {
      e.value = n;
    }
  });
}, Vy = (e) => ({
  mounted(t) {
    e(t);
  },
  updated(t) {
    e(t);
  },
  unmounted() {
    e(null);
  }
}), os = (e) => {
  if (e.tabIndex > 0 || e.tabIndex === 0 && e.getAttribute("tabIndex") !== null)
    return !0;
  if (e.tabIndex < 0 || e.hasAttribute("disabled") || e.getAttribute("aria-disabled") === "true")
    return !1;
  switch (e.nodeName) {
    case "A":
      return !!e.href && e.rel !== "ignore";
    case "INPUT":
      return !(e.type === "hidden" || e.type === "file");
    case "BUTTON":
    case "SELECT":
    case "TEXTAREA":
      return !0;
    default:
      return !1;
  }
}, Uy = "ElOnlyChild", Hy = q({
  name: Uy,
  setup(e, {
    slots: t,
    attrs: n
  }) {
    var o;
    const r = fe(Iu), s = Vy((o = r?.setForwardRef) != null ? o : po);
    return () => {
      var a;
      const i = (a = t.default) == null ? void 0 : a.call(t, n);
      if (!i || i.length > 1)
        return null;
      const l = Pu(i);
      return l ? Oe(Tc(l, n), [[s]]) : null;
    };
  }
});
function Pu(e) {
  if (!e)
    return null;
  const t = e;
  for (const n of t) {
    if (dt(n))
      switch (n.type) {
        case kc:
          continue;
        case tl:
        case "svg":
          return Li(n);
        case ft:
          return Pu(n.children);
        default:
          return n;
      }
    return Li(n);
  }
  return null;
}
function Li(e) {
  const t = Re("only-child");
  return z("span", {
    class: t.e("content")
  }, [e]);
}
const Ky = q({
  name: "ElPopperTrigger",
  inheritAttrs: !1
}), Gy = /* @__PURE__ */ q({
  ...Ky,
  props: Lu,
  setup(e, { expose: t }) {
    const n = e, { role: o, triggerRef: r } = fe(Ms, void 0);
    jy(r);
    const s = P(() => i.value ? n.id : void 0), a = P(() => {
      if (o && o.value === "tooltip")
        return n.open && n.id ? n.id : void 0;
    }), i = P(() => {
      if (o && o.value !== "tooltip")
        return o.value;
    }), l = P(() => i.value ? `${n.open}` : void 0);
    let u;
    const f = [
      "onMouseenter",
      "onMouseleave",
      "onClick",
      "onKeydown",
      "onFocus",
      "onBlur",
      "onContextmenu"
    ];
    return Pe(() => {
      Q(() => n.virtualRef, (p) => {
        p && (r.value = Gt(p));
      }, {
        immediate: !0
      }), Q(r, (p, m) => {
        u?.(), u = void 0, Ct(p) && (f.forEach((g) => {
          var h;
          const v = n[g];
          v && (p.addEventListener(g.slice(2).toLowerCase(), v), (h = m?.removeEventListener) == null || h.call(m, g.slice(2).toLowerCase(), v));
        }), os(p) && (u = Q([s, a, i, l], (g) => {
          [
            "aria-controls",
            "aria-describedby",
            "aria-haspopup",
            "aria-expanded"
          ].forEach((h, v) => {
            pr(g[v]) ? p.removeAttribute(h) : p.setAttribute(h, g[v]);
          });
        }, { immediate: !0 }))), Ct(m) && os(m) && [
          "aria-controls",
          "aria-describedby",
          "aria-haspopup",
          "aria-expanded"
        ].forEach((g) => m.removeAttribute(g));
      }, {
        immediate: !0
      });
    }), Ft(() => {
      if (u?.(), u = void 0, r.value && Ct(r.value)) {
        const p = r.value;
        f.forEach((m) => {
          const g = n[m];
          g && p.removeEventListener(m.slice(2).toLowerCase(), g);
        }), r.value = void 0;
      }
    }), t({
      triggerRef: r
    }), (p, m) => p.virtualTriggering ? U("v-if", !0) : (R(), ee(c(Hy), Dn({ key: 0 }, p.$attrs, {
      "aria-controls": c(s),
      "aria-describedby": c(a),
      "aria-expanded": c(l),
      "aria-haspopup": c(i)
    }), {
      default: ne(() => [
        ae(p.$slots, "default")
      ]),
      _: 3
    }, 16, ["aria-controls", "aria-describedby", "aria-expanded", "aria-haspopup"]));
  }
});
var Yy = /* @__PURE__ */ Ce(Gy, [["__file", "trigger.vue"]]);
const $r = "focus-trap.focus-after-trapped", Dr = "focus-trap.focus-after-released", Zy = "focus-trap.focusout-prevented", Ii = {
  cancelable: !0,
  bubbles: !1
}, qy = {
  cancelable: !0,
  bubbles: !1
}, Pi = "focusAfterTrapped", Ai = "focusAfterReleased", Jy = Symbol("elFocusTrap"), Rs = x(), gr = x(0), $s = x(0);
let Ro = 0;
const Au = (e) => {
  const t = [], n = document.createTreeWalker(e, NodeFilter.SHOW_ELEMENT, {
    acceptNode: (o) => {
      const r = o.tagName === "INPUT" && o.type === "hidden";
      return o.disabled || o.hidden || r ? NodeFilter.FILTER_SKIP : o.tabIndex >= 0 || o === document.activeElement ? NodeFilter.FILTER_ACCEPT : NodeFilter.FILTER_SKIP;
    }
  });
  for (; n.nextNode(); )
    t.push(n.currentNode);
  return t;
}, Ni = (e, t) => {
  for (const n of e)
    if (!Xy(n, t))
      return n;
}, Xy = (e, t) => {
  if (getComputedStyle(e).visibility === "hidden")
    return !0;
  for (; e; ) {
    if (t && e === t)
      return !1;
    if (getComputedStyle(e).display === "none")
      return !0;
    e = e.parentElement;
  }
  return !1;
}, Qy = (e) => {
  const t = Au(e), n = Ni(t, e), o = Ni(t.reverse(), e);
  return [n, o];
}, eb = (e) => e instanceof HTMLInputElement && "select" in e, Bt = (e, t) => {
  if (e && e.focus) {
    const n = document.activeElement;
    let o = !1;
    Ct(e) && !os(e) && !e.getAttribute("tabindex") && (e.setAttribute("tabindex", "-1"), o = !0), e.focus({ preventScroll: !0 }), $s.value = window.performance.now(), e !== n && eb(e) && t && e.select(), Ct(e) && o && e.removeAttribute("tabindex");
  }
};
function Mi(e, t) {
  const n = [...e], o = e.indexOf(t);
  return o !== -1 && n.splice(o, 1), n;
}
const tb = () => {
  let e = [];
  return {
    push: (o) => {
      const r = e[0];
      r && o !== r && r.pause(), e = Mi(e, o), e.unshift(o);
    },
    remove: (o) => {
      var r, s;
      e = Mi(e, o), (s = (r = e[0]) == null ? void 0 : r.resume) == null || s.call(r);
    }
  };
}, nb = (e, t = !1) => {
  const n = document.activeElement;
  for (const o of e)
    if (Bt(o, t), document.activeElement !== n)
      return;
}, Ri = tb(), ob = () => gr.value > $s.value, $o = () => {
  Rs.value = "pointer", gr.value = window.performance.now();
}, $i = () => {
  Rs.value = "keyboard", gr.value = window.performance.now();
}, rb = () => (Pe(() => {
  Ro === 0 && (document.addEventListener("mousedown", $o), document.addEventListener("touchstart", $o), document.addEventListener("keydown", $i)), Ro++;
}), Ft(() => {
  Ro--, Ro <= 0 && (document.removeEventListener("mousedown", $o), document.removeEventListener("touchstart", $o), document.removeEventListener("keydown", $i));
}), {
  focusReason: Rs,
  lastUserFocusTimestamp: gr,
  lastAutomatedFocusTimestamp: $s
}), Do = (e) => new CustomEvent(Zy, {
  ...qy,
  detail: e
}), Nt = {
  tab: "Tab",
  enter: "Enter",
  space: "Space",
  esc: "Escape",
  delete: "Delete",
  backspace: "Backspace",
  numpadEnter: "NumpadEnter"
};
let Rn = [];
const Di = (e) => {
  e.code === Nt.esc && Rn.forEach((t) => t(e));
}, sb = (e) => {
  Pe(() => {
    Rn.length === 0 && document.addEventListener("keydown", Di), Le && Rn.push(e);
  }), Ft(() => {
    Rn = Rn.filter((t) => t !== e), Rn.length === 0 && Le && document.removeEventListener("keydown", Di);
  });
}, ab = q({
  name: "ElFocusTrap",
  inheritAttrs: !1,
  props: {
    loop: Boolean,
    trapped: Boolean,
    focusTrapEl: Object,
    focusStartEl: {
      type: [Object, String],
      default: "first"
    }
  },
  emits: [
    Pi,
    Ai,
    "focusin",
    "focusout",
    "focusout-prevented",
    "release-requested"
  ],
  setup(e, { emit: t }) {
    const n = x();
    let o, r;
    const { focusReason: s } = rb();
    sb((h) => {
      e.trapped && !a.paused && t("release-requested", h);
    });
    const a = {
      paused: !1,
      pause() {
        this.paused = !0;
      },
      resume() {
        this.paused = !1;
      }
    }, i = (h) => {
      if (!e.loop && !e.trapped || a.paused)
        return;
      const { code: v, altKey: w, ctrlKey: d, metaKey: E, currentTarget: L, shiftKey: S } = h, { loop: T } = e, I = v === Nt.tab && !w && !d && !E, k = document.activeElement;
      if (I && k) {
        const $ = L, [C, D] = Qy($);
        if (C && D) {
          if (!S && k === D) {
            const Y = Do({
              focusReason: s.value
            });
            t("focusout-prevented", Y), Y.defaultPrevented || (h.preventDefault(), T && Bt(C, !0));
          } else if (S && [C, $].includes(k)) {
            const Y = Do({
              focusReason: s.value
            });
            t("focusout-prevented", Y), Y.defaultPrevented || (h.preventDefault(), T && Bt(D, !0));
          }
        } else if (k === $) {
          const Y = Do({
            focusReason: s.value
          });
          t("focusout-prevented", Y), Y.defaultPrevented || h.preventDefault();
        }
      }
    };
    Rt(Jy, {
      focusTrapRef: n,
      onKeydown: i
    }), Q(() => e.focusTrapEl, (h) => {
      h && (n.value = h);
    }, { immediate: !0 }), Q([n], ([h], [v]) => {
      h && (h.addEventListener("keydown", i), h.addEventListener("focusin", f), h.addEventListener("focusout", p)), v && (v.removeEventListener("keydown", i), v.removeEventListener("focusin", f), v.removeEventListener("focusout", p));
    });
    const l = (h) => {
      t(Pi, h);
    }, u = (h) => t(Ai, h), f = (h) => {
      const v = c(n);
      if (!v)
        return;
      const w = h.target, d = h.relatedTarget, E = w && v.contains(w);
      e.trapped || d && v.contains(d) || (o = d), E && t("focusin", h), !a.paused && e.trapped && (E ? r = w : Bt(r, !0));
    }, p = (h) => {
      const v = c(n);
      if (!(a.paused || !v))
        if (e.trapped) {
          const w = h.relatedTarget;
          !pr(w) && !v.contains(w) && setTimeout(() => {
            if (!a.paused && e.trapped) {
              const d = Do({
                focusReason: s.value
              });
              t("focusout-prevented", d), d.defaultPrevented || Bt(r, !0);
            }
          }, 0);
        } else {
          const w = h.target;
          w && v.contains(w) || t("focusout", h);
        }
    };
    async function m() {
      await Se();
      const h = c(n);
      if (h) {
        Ri.push(a);
        const v = h.contains(document.activeElement) ? o : document.activeElement;
        if (o = v, !h.contains(v)) {
          const d = new Event($r, Ii);
          h.addEventListener($r, l), h.dispatchEvent(d), d.defaultPrevented || Se(() => {
            let E = e.focusStartEl;
            pt(E) || (Bt(E), document.activeElement !== E && (E = "first")), E === "first" && nb(Au(h), !0), (document.activeElement === v || E === "container") && Bt(h);
          });
        }
      }
    }
    function g() {
      const h = c(n);
      if (h) {
        h.removeEventListener($r, l);
        const v = new CustomEvent(Dr, {
          ...Ii,
          detail: {
            focusReason: s.value
          }
        });
        h.addEventListener(Dr, u), h.dispatchEvent(v), !v.defaultPrevented && (s.value == "keyboard" || !ob() || h.contains(document.activeElement)) && Bt(o ?? document.body), h.removeEventListener(Dr, u), Ri.remove(a);
      }
    }
    return Pe(() => {
      e.trapped && m(), Q(() => e.trapped, (h) => {
        h ? m() : g();
      });
    }), Ft(() => {
      e.trapped && g(), n.value && (n.value.removeEventListener("keydown", i), n.value.removeEventListener("focusin", f), n.value.removeEventListener("focusout", p), n.value = void 0);
    }), {
      onKeydown: i
    };
  }
});
function ib(e, t, n, o, r, s) {
  return ae(e.$slots, "default", { handleKeydown: e.onKeydown });
}
var lb = /* @__PURE__ */ Ce(ab, [["render", ib], ["__file", "focus-trap.vue"]]), qe = "top", vt = "bottom", gt = "right", Je = "left", Ds = "auto", Eo = [qe, vt, gt, Je], Wn = "start", go = "end", ub = "clippingParents", Nu = "viewport", Qn = "popper", cb = "reference", Fi = Eo.reduce(function(e, t) {
  return e.concat([t + "-" + Wn, t + "-" + go]);
}, []), yr = [].concat(Eo, [Ds]).reduce(function(e, t) {
  return e.concat([t, t + "-" + Wn, t + "-" + go]);
}, []), db = "beforeRead", fb = "read", pb = "afterRead", mb = "beforeMain", hb = "main", vb = "afterMain", gb = "beforeWrite", yb = "write", bb = "afterWrite", _b = [db, fb, pb, mb, hb, vb, gb, yb, bb];
function Dt(e) {
  return e ? (e.nodeName || "").toLowerCase() : null;
}
function st(e) {
  if (e == null) return window;
  if (e.toString() !== "[object Window]") {
    var t = e.ownerDocument;
    return t && t.defaultView || window;
  }
  return e;
}
function En(e) {
  var t = st(e).Element;
  return e instanceof t || e instanceof Element;
}
function mt(e) {
  var t = st(e).HTMLElement;
  return e instanceof t || e instanceof HTMLElement;
}
function Fs(e) {
  if (typeof ShadowRoot > "u") return !1;
  var t = st(e).ShadowRoot;
  return e instanceof t || e instanceof ShadowRoot;
}
function wb(e) {
  var t = e.state;
  Object.keys(t.elements).forEach(function(n) {
    var o = t.styles[n] || {}, r = t.attributes[n] || {}, s = t.elements[n];
    !mt(s) || !Dt(s) || (Object.assign(s.style, o), Object.keys(r).forEach(function(a) {
      var i = r[a];
      i === !1 ? s.removeAttribute(a) : s.setAttribute(a, i === !0 ? "" : i);
    }));
  });
}
function Cb(e) {
  var t = e.state, n = { popper: { position: t.options.strategy, left: "0", top: "0", margin: "0" }, arrow: { position: "absolute" }, reference: {} };
  return Object.assign(t.elements.popper.style, n.popper), t.styles = n, t.elements.arrow && Object.assign(t.elements.arrow.style, n.arrow), function() {
    Object.keys(t.elements).forEach(function(o) {
      var r = t.elements[o], s = t.attributes[o] || {}, a = Object.keys(t.styles.hasOwnProperty(o) ? t.styles[o] : n[o]), i = a.reduce(function(l, u) {
        return l[u] = "", l;
      }, {});
      !mt(r) || !Dt(r) || (Object.assign(r.style, i), Object.keys(s).forEach(function(l) {
        r.removeAttribute(l);
      }));
    });
  };
}
var Mu = { name: "applyStyles", enabled: !0, phase: "write", fn: wb, effect: Cb, requires: ["computeStyles"] };
function Mt(e) {
  return e.split("-")[0];
}
var _n = Math.max, nr = Math.min, jn = Math.round;
function rs() {
  var e = navigator.userAgentData;
  return e != null && e.brands && Array.isArray(e.brands) ? e.brands.map(function(t) {
    return t.brand + "/" + t.version;
  }).join(" ") : navigator.userAgent;
}
function Ru() {
  return !/^((?!chrome|android).)*safari/i.test(rs());
}
function Vn(e, t, n) {
  t === void 0 && (t = !1), n === void 0 && (n = !1);
  var o = e.getBoundingClientRect(), r = 1, s = 1;
  t && mt(e) && (r = e.offsetWidth > 0 && jn(o.width) / e.offsetWidth || 1, s = e.offsetHeight > 0 && jn(o.height) / e.offsetHeight || 1);
  var a = En(e) ? st(e) : window, i = a.visualViewport, l = !Ru() && n, u = (o.left + (l && i ? i.offsetLeft : 0)) / r, f = (o.top + (l && i ? i.offsetTop : 0)) / s, p = o.width / r, m = o.height / s;
  return { width: p, height: m, top: f, right: u + p, bottom: f + m, left: u, x: u, y: f };
}
function xs(e) {
  var t = Vn(e), n = e.offsetWidth, o = e.offsetHeight;
  return Math.abs(t.width - n) <= 1 && (n = t.width), Math.abs(t.height - o) <= 1 && (o = t.height), { x: e.offsetLeft, y: e.offsetTop, width: n, height: o };
}
function $u(e, t) {
  var n = t.getRootNode && t.getRootNode();
  if (e.contains(t)) return !0;
  if (n && Fs(n)) {
    var o = t;
    do {
      if (o && e.isSameNode(o)) return !0;
      o = o.parentNode || o.host;
    } while (o);
  }
  return !1;
}
function Jt(e) {
  return st(e).getComputedStyle(e);
}
function Eb(e) {
  return ["table", "td", "th"].indexOf(Dt(e)) >= 0;
}
function hn(e) {
  return ((En(e) ? e.ownerDocument : e.document) || window.document).documentElement;
}
function br(e) {
  return Dt(e) === "html" ? e : e.assignedSlot || e.parentNode || (Fs(e) ? e.host : null) || hn(e);
}
function xi(e) {
  return !mt(e) || Jt(e).position === "fixed" ? null : e.offsetParent;
}
function Sb(e) {
  var t = /firefox/i.test(rs()), n = /Trident/i.test(rs());
  if (n && mt(e)) {
    var o = Jt(e);
    if (o.position === "fixed") return null;
  }
  var r = br(e);
  for (Fs(r) && (r = r.host); mt(r) && ["html", "body"].indexOf(Dt(r)) < 0; ) {
    var s = Jt(r);
    if (s.transform !== "none" || s.perspective !== "none" || s.contain === "paint" || ["transform", "perspective"].indexOf(s.willChange) !== -1 || t && s.willChange === "filter" || t && s.filter && s.filter !== "none") return r;
    r = r.parentNode;
  }
  return null;
}
function So(e) {
  for (var t = st(e), n = xi(e); n && Eb(n) && Jt(n).position === "static"; ) n = xi(n);
  return n && (Dt(n) === "html" || Dt(n) === "body" && Jt(n).position === "static") ? t : n || Sb(e) || t;
}
function zs(e) {
  return ["top", "bottom"].indexOf(e) >= 0 ? "x" : "y";
}
function so(e, t, n) {
  return _n(e, nr(t, n));
}
function Tb(e, t, n) {
  var o = so(e, t, n);
  return o > n ? n : o;
}
function Du() {
  return { top: 0, right: 0, bottom: 0, left: 0 };
}
function Fu(e) {
  return Object.assign({}, Du(), e);
}
function xu(e, t) {
  return t.reduce(function(n, o) {
    return n[o] = e, n;
  }, {});
}
var kb = function(e, t) {
  return e = typeof e == "function" ? e(Object.assign({}, t.rects, { placement: t.placement })) : e, Fu(typeof e != "number" ? e : xu(e, Eo));
};
function Ob(e) {
  var t, n = e.state, o = e.name, r = e.options, s = n.elements.arrow, a = n.modifiersData.popperOffsets, i = Mt(n.placement), l = zs(i), u = [Je, gt].indexOf(i) >= 0, f = u ? "height" : "width";
  if (!(!s || !a)) {
    var p = kb(r.padding, n), m = xs(s), g = l === "y" ? qe : Je, h = l === "y" ? vt : gt, v = n.rects.reference[f] + n.rects.reference[l] - a[l] - n.rects.popper[f], w = a[l] - n.rects.reference[l], d = So(s), E = d ? l === "y" ? d.clientHeight || 0 : d.clientWidth || 0 : 0, L = v / 2 - w / 2, S = p[g], T = E - m[f] - p[h], I = E / 2 - m[f] / 2 + L, k = so(S, I, T), $ = l;
    n.modifiersData[o] = (t = {}, t[$] = k, t.centerOffset = k - I, t);
  }
}
function Lb(e) {
  var t = e.state, n = e.options, o = n.element, r = o === void 0 ? "[data-popper-arrow]" : o;
  r != null && (typeof r == "string" && (r = t.elements.popper.querySelector(r), !r) || $u(t.elements.popper, r) && (t.elements.arrow = r));
}
var Ib = { name: "arrow", enabled: !0, phase: "main", fn: Ob, effect: Lb, requires: ["popperOffsets"], requiresIfExists: ["preventOverflow"] };
function Un(e) {
  return e.split("-")[1];
}
var Pb = { top: "auto", right: "auto", bottom: "auto", left: "auto" };
function Ab(e, t) {
  var n = e.x, o = e.y, r = t.devicePixelRatio || 1;
  return { x: jn(n * r) / r || 0, y: jn(o * r) / r || 0 };
}
function zi(e) {
  var t, n = e.popper, o = e.popperRect, r = e.placement, s = e.variation, a = e.offsets, i = e.position, l = e.gpuAcceleration, u = e.adaptive, f = e.roundOffsets, p = e.isFixed, m = a.x, g = m === void 0 ? 0 : m, h = a.y, v = h === void 0 ? 0 : h, w = typeof f == "function" ? f({ x: g, y: v }) : { x: g, y: v };
  g = w.x, v = w.y;
  var d = a.hasOwnProperty("x"), E = a.hasOwnProperty("y"), L = Je, S = qe, T = window;
  if (u) {
    var I = So(n), k = "clientHeight", $ = "clientWidth";
    if (I === st(n) && (I = hn(n), Jt(I).position !== "static" && i === "absolute" && (k = "scrollHeight", $ = "scrollWidth")), I = I, r === qe || (r === Je || r === gt) && s === go) {
      S = vt;
      var C = p && I === T && T.visualViewport ? T.visualViewport.height : I[k];
      v -= C - o.height, v *= l ? 1 : -1;
    }
    if (r === Je || (r === qe || r === vt) && s === go) {
      L = gt;
      var D = p && I === T && T.visualViewport ? T.visualViewport.width : I[$];
      g -= D - o.width, g *= l ? 1 : -1;
    }
  }
  var K = Object.assign({ position: i }, u && Pb), Y = f === !0 ? Ab({ x: g, y: v }, st(n)) : { x: g, y: v };
  if (g = Y.x, v = Y.y, l) {
    var se;
    return Object.assign({}, K, (se = {}, se[S] = E ? "0" : "", se[L] = d ? "0" : "", se.transform = (T.devicePixelRatio || 1) <= 1 ? "translate(" + g + "px, " + v + "px)" : "translate3d(" + g + "px, " + v + "px, 0)", se));
  }
  return Object.assign({}, K, (t = {}, t[S] = E ? v + "px" : "", t[L] = d ? g + "px" : "", t.transform = "", t));
}
function Nb(e) {
  var t = e.state, n = e.options, o = n.gpuAcceleration, r = o === void 0 ? !0 : o, s = n.adaptive, a = s === void 0 ? !0 : s, i = n.roundOffsets, l = i === void 0 ? !0 : i, u = { placement: Mt(t.placement), variation: Un(t.placement), popper: t.elements.popper, popperRect: t.rects.popper, gpuAcceleration: r, isFixed: t.options.strategy === "fixed" };
  t.modifiersData.popperOffsets != null && (t.styles.popper = Object.assign({}, t.styles.popper, zi(Object.assign({}, u, { offsets: t.modifiersData.popperOffsets, position: t.options.strategy, adaptive: a, roundOffsets: l })))), t.modifiersData.arrow != null && (t.styles.arrow = Object.assign({}, t.styles.arrow, zi(Object.assign({}, u, { offsets: t.modifiersData.arrow, position: "absolute", adaptive: !1, roundOffsets: l })))), t.attributes.popper = Object.assign({}, t.attributes.popper, { "data-popper-placement": t.placement });
}
var zu = { name: "computeStyles", enabled: !0, phase: "beforeWrite", fn: Nb, data: {} }, Fo = { passive: !0 };
function Mb(e) {
  var t = e.state, n = e.instance, o = e.options, r = o.scroll, s = r === void 0 ? !0 : r, a = o.resize, i = a === void 0 ? !0 : a, l = st(t.elements.popper), u = [].concat(t.scrollParents.reference, t.scrollParents.popper);
  return s && u.forEach(function(f) {
    f.addEventListener("scroll", n.update, Fo);
  }), i && l.addEventListener("resize", n.update, Fo), function() {
    s && u.forEach(function(f) {
      f.removeEventListener("scroll", n.update, Fo);
    }), i && l.removeEventListener("resize", n.update, Fo);
  };
}
var Bu = { name: "eventListeners", enabled: !0, phase: "write", fn: function() {
}, effect: Mb, data: {} }, Rb = { left: "right", right: "left", bottom: "top", top: "bottom" };
function jo(e) {
  return e.replace(/left|right|bottom|top/g, function(t) {
    return Rb[t];
  });
}
var $b = { start: "end", end: "start" };
function Bi(e) {
  return e.replace(/start|end/g, function(t) {
    return $b[t];
  });
}
function Bs(e) {
  var t = st(e), n = t.pageXOffset, o = t.pageYOffset;
  return { scrollLeft: n, scrollTop: o };
}
function Ws(e) {
  return Vn(hn(e)).left + Bs(e).scrollLeft;
}
function Db(e, t) {
  var n = st(e), o = hn(e), r = n.visualViewport, s = o.clientWidth, a = o.clientHeight, i = 0, l = 0;
  if (r) {
    s = r.width, a = r.height;
    var u = Ru();
    (u || !u && t === "fixed") && (i = r.offsetLeft, l = r.offsetTop);
  }
  return { width: s, height: a, x: i + Ws(e), y: l };
}
function Fb(e) {
  var t, n = hn(e), o = Bs(e), r = (t = e.ownerDocument) == null ? void 0 : t.body, s = _n(n.scrollWidth, n.clientWidth, r ? r.scrollWidth : 0, r ? r.clientWidth : 0), a = _n(n.scrollHeight, n.clientHeight, r ? r.scrollHeight : 0, r ? r.clientHeight : 0), i = -o.scrollLeft + Ws(e), l = -o.scrollTop;
  return Jt(r || n).direction === "rtl" && (i += _n(n.clientWidth, r ? r.clientWidth : 0) - s), { width: s, height: a, x: i, y: l };
}
function js(e) {
  var t = Jt(e), n = t.overflow, o = t.overflowX, r = t.overflowY;
  return /auto|scroll|overlay|hidden/.test(n + r + o);
}
function Wu(e) {
  return ["html", "body", "#document"].indexOf(Dt(e)) >= 0 ? e.ownerDocument.body : mt(e) && js(e) ? e : Wu(br(e));
}
function ao(e, t) {
  var n;
  t === void 0 && (t = []);
  var o = Wu(e), r = o === ((n = e.ownerDocument) == null ? void 0 : n.body), s = st(o), a = r ? [s].concat(s.visualViewport || [], js(o) ? o : []) : o, i = t.concat(a);
  return r ? i : i.concat(ao(br(a)));
}
function ss(e) {
  return Object.assign({}, e, { left: e.x, top: e.y, right: e.x + e.width, bottom: e.y + e.height });
}
function xb(e, t) {
  var n = Vn(e, !1, t === "fixed");
  return n.top = n.top + e.clientTop, n.left = n.left + e.clientLeft, n.bottom = n.top + e.clientHeight, n.right = n.left + e.clientWidth, n.width = e.clientWidth, n.height = e.clientHeight, n.x = n.left, n.y = n.top, n;
}
function Wi(e, t, n) {
  return t === Nu ? ss(Db(e, n)) : En(t) ? xb(t, n) : ss(Fb(hn(e)));
}
function zb(e) {
  var t = ao(br(e)), n = ["absolute", "fixed"].indexOf(Jt(e).position) >= 0, o = n && mt(e) ? So(e) : e;
  return En(o) ? t.filter(function(r) {
    return En(r) && $u(r, o) && Dt(r) !== "body";
  }) : [];
}
function Bb(e, t, n, o) {
  var r = t === "clippingParents" ? zb(e) : [].concat(t), s = [].concat(r, [n]), a = s[0], i = s.reduce(function(l, u) {
    var f = Wi(e, u, o);
    return l.top = _n(f.top, l.top), l.right = nr(f.right, l.right), l.bottom = nr(f.bottom, l.bottom), l.left = _n(f.left, l.left), l;
  }, Wi(e, a, o));
  return i.width = i.right - i.left, i.height = i.bottom - i.top, i.x = i.left, i.y = i.top, i;
}
function ju(e) {
  var t = e.reference, n = e.element, o = e.placement, r = o ? Mt(o) : null, s = o ? Un(o) : null, a = t.x + t.width / 2 - n.width / 2, i = t.y + t.height / 2 - n.height / 2, l;
  switch (r) {
    case qe:
      l = { x: a, y: t.y - n.height };
      break;
    case vt:
      l = { x: a, y: t.y + t.height };
      break;
    case gt:
      l = { x: t.x + t.width, y: i };
      break;
    case Je:
      l = { x: t.x - n.width, y: i };
      break;
    default:
      l = { x: t.x, y: t.y };
  }
  var u = r ? zs(r) : null;
  if (u != null) {
    var f = u === "y" ? "height" : "width";
    switch (s) {
      case Wn:
        l[u] = l[u] - (t[f] / 2 - n[f] / 2);
        break;
      case go:
        l[u] = l[u] + (t[f] / 2 - n[f] / 2);
        break;
    }
  }
  return l;
}
function yo(e, t) {
  t === void 0 && (t = {});
  var n = t, o = n.placement, r = o === void 0 ? e.placement : o, s = n.strategy, a = s === void 0 ? e.strategy : s, i = n.boundary, l = i === void 0 ? ub : i, u = n.rootBoundary, f = u === void 0 ? Nu : u, p = n.elementContext, m = p === void 0 ? Qn : p, g = n.altBoundary, h = g === void 0 ? !1 : g, v = n.padding, w = v === void 0 ? 0 : v, d = Fu(typeof w != "number" ? w : xu(w, Eo)), E = m === Qn ? cb : Qn, L = e.rects.popper, S = e.elements[h ? E : m], T = Bb(En(S) ? S : S.contextElement || hn(e.elements.popper), l, f, a), I = Vn(e.elements.reference), k = ju({ reference: I, element: L, placement: r }), $ = ss(Object.assign({}, L, k)), C = m === Qn ? $ : I, D = { top: T.top - C.top + d.top, bottom: C.bottom - T.bottom + d.bottom, left: T.left - C.left + d.left, right: C.right - T.right + d.right }, K = e.modifiersData.offset;
  if (m === Qn && K) {
    var Y = K[r];
    Object.keys(D).forEach(function(se) {
      var we = [gt, vt].indexOf(se) >= 0 ? 1 : -1, me = [qe, vt].indexOf(se) >= 0 ? "y" : "x";
      D[se] += Y[me] * we;
    });
  }
  return D;
}
function Wb(e, t) {
  t === void 0 && (t = {});
  var n = t, o = n.placement, r = n.boundary, s = n.rootBoundary, a = n.padding, i = n.flipVariations, l = n.allowedAutoPlacements, u = l === void 0 ? yr : l, f = Un(o), p = f ? i ? Fi : Fi.filter(function(h) {
    return Un(h) === f;
  }) : Eo, m = p.filter(function(h) {
    return u.indexOf(h) >= 0;
  });
  m.length === 0 && (m = p);
  var g = m.reduce(function(h, v) {
    return h[v] = yo(e, { placement: v, boundary: r, rootBoundary: s, padding: a })[Mt(v)], h;
  }, {});
  return Object.keys(g).sort(function(h, v) {
    return g[h] - g[v];
  });
}
function jb(e) {
  if (Mt(e) === Ds) return [];
  var t = jo(e);
  return [Bi(e), t, Bi(t)];
}
function Vb(e) {
  var t = e.state, n = e.options, o = e.name;
  if (!t.modifiersData[o]._skip) {
    for (var r = n.mainAxis, s = r === void 0 ? !0 : r, a = n.altAxis, i = a === void 0 ? !0 : a, l = n.fallbackPlacements, u = n.padding, f = n.boundary, p = n.rootBoundary, m = n.altBoundary, g = n.flipVariations, h = g === void 0 ? !0 : g, v = n.allowedAutoPlacements, w = t.options.placement, d = Mt(w), E = d === w, L = l || (E || !h ? [jo(w)] : jb(w)), S = [w].concat(L).reduce(function(Fe, $e) {
      return Fe.concat(Mt($e) === Ds ? Wb(t, { placement: $e, boundary: f, rootBoundary: p, padding: u, flipVariations: h, allowedAutoPlacements: v }) : $e);
    }, []), T = t.rects.reference, I = t.rects.popper, k = /* @__PURE__ */ new Map(), $ = !0, C = S[0], D = 0; D < S.length; D++) {
      var K = S[D], Y = Mt(K), se = Un(K) === Wn, we = [qe, vt].indexOf(Y) >= 0, me = we ? "width" : "height", oe = yo(t, { placement: K, boundary: f, rootBoundary: p, altBoundary: m, padding: u }), B = we ? se ? gt : Je : se ? vt : qe;
      T[me] > I[me] && (B = jo(B));
      var he = jo(B), pe = [];
      if (s && pe.push(oe[Y] <= 0), i && pe.push(oe[B] <= 0, oe[he] <= 0), pe.every(function(Fe) {
        return Fe;
      })) {
        C = K, $ = !1;
        break;
      }
      k.set(K, pe);
    }
    if ($) for (var Ee = h ? 3 : 1, Ge = function(Fe) {
      var $e = S.find(function(xe) {
        var ze = k.get(xe);
        if (ze) return ze.slice(0, Fe).every(function(ve) {
          return ve;
        });
      });
      if ($e) return C = $e, "break";
    }, Ye = Ee; Ye > 0; Ye--) {
      var at = Ge(Ye);
      if (at === "break") break;
    }
    t.placement !== C && (t.modifiersData[o]._skip = !0, t.placement = C, t.reset = !0);
  }
}
var Ub = { name: "flip", enabled: !0, phase: "main", fn: Vb, requiresIfExists: ["offset"], data: { _skip: !1 } };
function ji(e, t, n) {
  return n === void 0 && (n = { x: 0, y: 0 }), { top: e.top - t.height - n.y, right: e.right - t.width + n.x, bottom: e.bottom - t.height + n.y, left: e.left - t.width - n.x };
}
function Vi(e) {
  return [qe, gt, vt, Je].some(function(t) {
    return e[t] >= 0;
  });
}
function Hb(e) {
  var t = e.state, n = e.name, o = t.rects.reference, r = t.rects.popper, s = t.modifiersData.preventOverflow, a = yo(t, { elementContext: "reference" }), i = yo(t, { altBoundary: !0 }), l = ji(a, o), u = ji(i, r, s), f = Vi(l), p = Vi(u);
  t.modifiersData[n] = { referenceClippingOffsets: l, popperEscapeOffsets: u, isReferenceHidden: f, hasPopperEscaped: p }, t.attributes.popper = Object.assign({}, t.attributes.popper, { "data-popper-reference-hidden": f, "data-popper-escaped": p });
}
var Kb = { name: "hide", enabled: !0, phase: "main", requiresIfExists: ["preventOverflow"], fn: Hb };
function Gb(e, t, n) {
  var o = Mt(e), r = [Je, qe].indexOf(o) >= 0 ? -1 : 1, s = typeof n == "function" ? n(Object.assign({}, t, { placement: e })) : n, a = s[0], i = s[1];
  return a = a || 0, i = (i || 0) * r, [Je, gt].indexOf(o) >= 0 ? { x: i, y: a } : { x: a, y: i };
}
function Yb(e) {
  var t = e.state, n = e.options, o = e.name, r = n.offset, s = r === void 0 ? [0, 0] : r, a = yr.reduce(function(f, p) {
    return f[p] = Gb(p, t.rects, s), f;
  }, {}), i = a[t.placement], l = i.x, u = i.y;
  t.modifiersData.popperOffsets != null && (t.modifiersData.popperOffsets.x += l, t.modifiersData.popperOffsets.y += u), t.modifiersData[o] = a;
}
var Zb = { name: "offset", enabled: !0, phase: "main", requires: ["popperOffsets"], fn: Yb };
function qb(e) {
  var t = e.state, n = e.name;
  t.modifiersData[n] = ju({ reference: t.rects.reference, element: t.rects.popper, placement: t.placement });
}
var Vu = { name: "popperOffsets", enabled: !0, phase: "read", fn: qb, data: {} };
function Jb(e) {
  return e === "x" ? "y" : "x";
}
function Xb(e) {
  var t = e.state, n = e.options, o = e.name, r = n.mainAxis, s = r === void 0 ? !0 : r, a = n.altAxis, i = a === void 0 ? !1 : a, l = n.boundary, u = n.rootBoundary, f = n.altBoundary, p = n.padding, m = n.tether, g = m === void 0 ? !0 : m, h = n.tetherOffset, v = h === void 0 ? 0 : h, w = yo(t, { boundary: l, rootBoundary: u, padding: p, altBoundary: f }), d = Mt(t.placement), E = Un(t.placement), L = !E, S = zs(d), T = Jb(S), I = t.modifiersData.popperOffsets, k = t.rects.reference, $ = t.rects.popper, C = typeof v == "function" ? v(Object.assign({}, t.rects, { placement: t.placement })) : v, D = typeof C == "number" ? { mainAxis: C, altAxis: C } : Object.assign({ mainAxis: 0, altAxis: 0 }, C), K = t.modifiersData.offset ? t.modifiersData.offset[t.placement] : null, Y = { x: 0, y: 0 };
  if (I) {
    if (s) {
      var se, we = S === "y" ? qe : Je, me = S === "y" ? vt : gt, oe = S === "y" ? "height" : "width", B = I[S], he = B + w[we], pe = B - w[me], Ee = g ? -$[oe] / 2 : 0, Ge = E === Wn ? k[oe] : $[oe], Ye = E === Wn ? -$[oe] : -k[oe], at = t.elements.arrow, Fe = g && at ? xs(at) : { width: 0, height: 0 }, $e = t.modifiersData["arrow#persistent"] ? t.modifiersData["arrow#persistent"].padding : Du(), xe = $e[we], ze = $e[me], ve = so(0, k[oe], Fe[oe]), Xe = L ? k[oe] / 2 - Ee - ve - xe - D.mainAxis : Ge - ve - xe - D.mainAxis, it = L ? -k[oe] / 2 + Ee + ve + ze + D.mainAxis : Ye + ve + ze + D.mainAxis, Qe = t.elements.arrow && So(t.elements.arrow), yt = Qe ? S === "y" ? Qe.clientTop || 0 : Qe.clientLeft || 0 : 0, et = (se = K?.[S]) != null ? se : 0, tt = B + Xe - et - yt, nt = B + it - et, lt = so(g ? nr(he, tt) : he, B, g ? _n(pe, nt) : pe);
      I[S] = lt, Y[S] = lt - B;
    }
    if (i) {
      var Tt, b = S === "x" ? qe : Je, _ = S === "x" ? vt : gt, M = I[T], H = T === "y" ? "height" : "width", ie = M + w[b], J = M - w[_], y = [qe, Je].indexOf(d) !== -1, N = (Tt = K?.[T]) != null ? Tt : 0, te = y ? ie : M - k[H] - $[H] - N + D.altAxis, ce = y ? M + k[H] + $[H] - N - D.altAxis : J, Be = g && y ? Tb(te, M, ce) : so(g ? te : ie, M, g ? ce : J);
      I[T] = Be, Y[T] = Be - M;
    }
    t.modifiersData[o] = Y;
  }
}
var Qb = { name: "preventOverflow", enabled: !0, phase: "main", fn: Xb, requiresIfExists: ["offset"] };
function e0(e) {
  return { scrollLeft: e.scrollLeft, scrollTop: e.scrollTop };
}
function t0(e) {
  return e === st(e) || !mt(e) ? Bs(e) : e0(e);
}
function n0(e) {
  var t = e.getBoundingClientRect(), n = jn(t.width) / e.offsetWidth || 1, o = jn(t.height) / e.offsetHeight || 1;
  return n !== 1 || o !== 1;
}
function o0(e, t, n) {
  n === void 0 && (n = !1);
  var o = mt(t), r = mt(t) && n0(t), s = hn(t), a = Vn(e, r, n), i = { scrollLeft: 0, scrollTop: 0 }, l = { x: 0, y: 0 };
  return (o || !o && !n) && ((Dt(t) !== "body" || js(s)) && (i = t0(t)), mt(t) ? (l = Vn(t, !0), l.x += t.clientLeft, l.y += t.clientTop) : s && (l.x = Ws(s))), { x: a.left + i.scrollLeft - l.x, y: a.top + i.scrollTop - l.y, width: a.width, height: a.height };
}
function r0(e) {
  var t = /* @__PURE__ */ new Map(), n = /* @__PURE__ */ new Set(), o = [];
  e.forEach(function(s) {
    t.set(s.name, s);
  });
  function r(s) {
    n.add(s.name);
    var a = [].concat(s.requires || [], s.requiresIfExists || []);
    a.forEach(function(i) {
      if (!n.has(i)) {
        var l = t.get(i);
        l && r(l);
      }
    }), o.push(s);
  }
  return e.forEach(function(s) {
    n.has(s.name) || r(s);
  }), o;
}
function s0(e) {
  var t = r0(e);
  return _b.reduce(function(n, o) {
    return n.concat(t.filter(function(r) {
      return r.phase === o;
    }));
  }, []);
}
function a0(e) {
  var t;
  return function() {
    return t || (t = new Promise(function(n) {
      Promise.resolve().then(function() {
        t = void 0, n(e());
      });
    })), t;
  };
}
function i0(e) {
  var t = e.reduce(function(n, o) {
    var r = n[o.name];
    return n[o.name] = r ? Object.assign({}, r, o, { options: Object.assign({}, r.options, o.options), data: Object.assign({}, r.data, o.data) }) : o, n;
  }, {});
  return Object.keys(t).map(function(n) {
    return t[n];
  });
}
var Ui = { placement: "bottom", modifiers: [], strategy: "absolute" };
function Hi() {
  for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++) t[n] = arguments[n];
  return !t.some(function(o) {
    return !(o && typeof o.getBoundingClientRect == "function");
  });
}
function Vs(e) {
  e === void 0 && (e = {});
  var t = e, n = t.defaultModifiers, o = n === void 0 ? [] : n, r = t.defaultOptions, s = r === void 0 ? Ui : r;
  return function(a, i, l) {
    l === void 0 && (l = s);
    var u = { placement: "bottom", orderedModifiers: [], options: Object.assign({}, Ui, s), modifiersData: {}, elements: { reference: a, popper: i }, attributes: {}, styles: {} }, f = [], p = !1, m = { state: u, setOptions: function(v) {
      var w = typeof v == "function" ? v(u.options) : v;
      h(), u.options = Object.assign({}, s, u.options, w), u.scrollParents = { reference: En(a) ? ao(a) : a.contextElement ? ao(a.contextElement) : [], popper: ao(i) };
      var d = s0(i0([].concat(o, u.options.modifiers)));
      return u.orderedModifiers = d.filter(function(E) {
        return E.enabled;
      }), g(), m.update();
    }, forceUpdate: function() {
      if (!p) {
        var v = u.elements, w = v.reference, d = v.popper;
        if (Hi(w, d)) {
          u.rects = { reference: o0(w, So(d), u.options.strategy === "fixed"), popper: xs(d) }, u.reset = !1, u.placement = u.options.placement, u.orderedModifiers.forEach(function($) {
            return u.modifiersData[$.name] = Object.assign({}, $.data);
          });
          for (var E = 0; E < u.orderedModifiers.length; E++) {
            if (u.reset === !0) {
              u.reset = !1, E = -1;
              continue;
            }
            var L = u.orderedModifiers[E], S = L.fn, T = L.options, I = T === void 0 ? {} : T, k = L.name;
            typeof S == "function" && (u = S({ state: u, options: I, name: k, instance: m }) || u);
          }
        }
      }
    }, update: a0(function() {
      return new Promise(function(v) {
        m.forceUpdate(), v(u);
      });
    }), destroy: function() {
      h(), p = !0;
    } };
    if (!Hi(a, i)) return m;
    m.setOptions(l).then(function(v) {
      !p && l.onFirstUpdate && l.onFirstUpdate(v);
    });
    function g() {
      u.orderedModifiers.forEach(function(v) {
        var w = v.name, d = v.options, E = d === void 0 ? {} : d, L = v.effect;
        if (typeof L == "function") {
          var S = L({ state: u, name: w, instance: m, options: E }), T = function() {
          };
          f.push(S || T);
        }
      });
    }
    function h() {
      f.forEach(function(v) {
        return v();
      }), f = [];
    }
    return m;
  };
}
Vs();
var l0 = [Bu, Vu, zu, Mu];
Vs({ defaultModifiers: l0 });
var u0 = [Bu, Vu, zu, Mu, Zb, Ub, Qb, Ib, Kb], c0 = Vs({ defaultModifiers: u0 });
const d0 = ["fixed", "absolute"], f0 = _e({
  boundariesPadding: {
    type: Number,
    default: 0
  },
  fallbackPlacements: {
    type: X(Array),
    default: void 0
  },
  gpuAcceleration: {
    type: Boolean,
    default: !0
  },
  offset: {
    type: Number,
    default: 12
  },
  placement: {
    type: String,
    values: yr,
    default: "bottom"
  },
  popperOptions: {
    type: X(Object),
    default: () => ({})
  },
  strategy: {
    type: String,
    values: d0,
    default: "absolute"
  }
}), Uu = _e({
  ...f0,
  id: String,
  style: {
    type: X([String, Array, Object])
  },
  className: {
    type: X([String, Array, Object])
  },
  effect: {
    type: X(String),
    default: "dark"
  },
  visible: Boolean,
  enterable: {
    type: Boolean,
    default: !0
  },
  pure: Boolean,
  focusOnShow: {
    type: Boolean,
    default: !1
  },
  trapping: {
    type: Boolean,
    default: !1
  },
  popperClass: {
    type: X([String, Array, Object])
  },
  popperStyle: {
    type: X([String, Array, Object])
  },
  referenceEl: {
    type: X(Object)
  },
  triggerTargetEl: {
    type: X(Object)
  },
  stopPopperMouseEvent: {
    type: Boolean,
    default: !0
  },
  virtualTriggering: Boolean,
  zIndex: Number,
  ...Co(["ariaLabel"])
}), p0 = {
  mouseenter: (e) => e instanceof MouseEvent,
  mouseleave: (e) => e instanceof MouseEvent,
  focus: () => !0,
  blur: () => !0,
  close: () => !0
}, m0 = (e, t) => {
  const n = x(!1), o = x();
  return {
    focusStartRef: o,
    trapped: n,
    onFocusAfterReleased: (u) => {
      var f;
      ((f = u.detail) == null ? void 0 : f.focusReason) !== "pointer" && (o.value = "first", t("blur"));
    },
    onFocusAfterTrapped: () => {
      t("focus");
    },
    onFocusInTrap: (u) => {
      e.visible && !n.value && (u.target && (o.value = u.target), n.value = !0);
    },
    onFocusoutPrevented: (u) => {
      e.trapping || (u.detail.focusReason === "pointer" && u.preventDefault(), n.value = !1);
    },
    onReleaseRequested: () => {
      n.value = !1, t("close");
    }
  };
}, h0 = (e, t = []) => {
  const { placement: n, strategy: o, popperOptions: r } = e, s = {
    placement: n,
    strategy: o,
    ...r,
    modifiers: [...g0(e), ...t]
  };
  return y0(s, r?.modifiers), s;
}, v0 = (e) => {
  if (Le)
    return Gt(e);
};
function g0(e) {
  const { offset: t, gpuAcceleration: n, fallbackPlacements: o } = e;
  return [
    {
      name: "offset",
      options: {
        offset: [0, t ?? 12]
      }
    },
    {
      name: "preventOverflow",
      options: {
        padding: {
          top: 2,
          bottom: 2,
          left: 5,
          right: 5
        }
      }
    },
    {
      name: "flip",
      options: {
        padding: 5,
        fallbackPlacements: o
      }
    },
    {
      name: "computeStyles",
      options: {
        gpuAcceleration: n
      }
    }
  ];
}
function y0(e, t) {
  t && (e.modifiers = [...e.modifiers, ...t ?? []]);
}
const b0 = (e, t, n = {}) => {
  const o = {
    name: "updateState",
    enabled: !0,
    phase: "write",
    fn: ({ state: l }) => {
      const u = _0(l);
      Object.assign(a.value, u);
    },
    requires: ["computeStyles"]
  }, r = P(() => {
    const { onFirstUpdate: l, placement: u, strategy: f, modifiers: p } = c(n);
    return {
      onFirstUpdate: l,
      placement: u || "bottom",
      strategy: f || "absolute",
      modifiers: [
        ...p || [],
        o,
        { name: "applyStyles", enabled: !1 }
      ]
    };
  }), s = dn(), a = x({
    styles: {
      popper: {
        position: c(r).strategy,
        left: "0",
        top: "0"
      },
      arrow: {
        position: "absolute"
      }
    },
    attributes: {}
  }), i = () => {
    s.value && (s.value.destroy(), s.value = void 0);
  };
  return Q(r, (l) => {
    const u = c(s);
    u && u.setOptions(l);
  }, {
    deep: !0
  }), Q([e, t], ([l, u]) => {
    i(), !(!l || !u) && (s.value = c0(l, u, c(r)));
  }), Ft(() => {
    i();
  }), {
    state: P(() => {
      var l;
      return { ...((l = c(s)) == null ? void 0 : l.state) || {} };
    }),
    styles: P(() => c(a).styles),
    attributes: P(() => c(a).attributes),
    update: () => {
      var l;
      return (l = c(s)) == null ? void 0 : l.update();
    },
    forceUpdate: () => {
      var l;
      return (l = c(s)) == null ? void 0 : l.forceUpdate();
    },
    instanceRef: P(() => c(s))
  };
};
function _0(e) {
  const t = Object.keys(e.elements), n = Zo(t.map((r) => [r, e.styles[r] || {}])), o = Zo(t.map((r) => [r, e.attributes[r]]));
  return {
    styles: n,
    attributes: o
  };
}
const w0 = 0, C0 = (e) => {
  const { popperInstanceRef: t, contentRef: n, triggerRef: o, role: r } = fe(Ms, void 0), s = x(), a = x(), i = P(() => ({
    name: "eventListeners",
    enabled: !!e.visible
  })), l = P(() => {
    var d;
    const E = c(s), L = (d = c(a)) != null ? d : w0;
    return {
      name: "arrow",
      enabled: !Bv(E),
      options: {
        element: E,
        padding: L
      }
    };
  }), u = P(() => ({
    onFirstUpdate: () => {
      h();
    },
    ...h0(e, [
      c(l),
      c(i)
    ])
  })), f = P(() => v0(e.referenceEl) || c(o)), { attributes: p, state: m, styles: g, update: h, forceUpdate: v, instanceRef: w } = b0(f, n, u);
  return Q(w, (d) => t.value = d), Pe(() => {
    Q(() => {
      var d;
      return (d = c(f)) == null ? void 0 : d.getBoundingClientRect();
    }, () => {
      h();
    });
  }), {
    attributes: p,
    arrowRef: s,
    contentRef: n,
    instanceRef: w,
    state: m,
    styles: g,
    role: r,
    forceUpdate: v,
    update: h
  };
}, E0 = (e, {
  attributes: t,
  styles: n,
  role: o
}) => {
  const { nextZIndex: r } = ru(), s = Re("popper"), a = P(() => c(t).popper), i = x(Me(e.zIndex) ? e.zIndex : r()), l = P(() => [
    s.b(),
    s.is("pure", e.pure),
    s.is(e.effect),
    e.popperClass
  ]), u = P(() => [
    { zIndex: c(i) },
    c(n).popper,
    e.popperStyle || {}
  ]), f = P(() => o.value === "dialog" ? "false" : void 0), p = P(() => c(n).arrow || {});
  return {
    ariaModal: f,
    arrowStyle: p,
    contentAttrs: a,
    contentClass: l,
    contentStyle: u,
    contentZIndex: i,
    updateZIndex: () => {
      i.value = Me(e.zIndex) ? e.zIndex : r();
    }
  };
}, S0 = q({
  name: "ElPopperContent"
}), T0 = /* @__PURE__ */ q({
  ...S0,
  props: Uu,
  emits: p0,
  setup(e, { expose: t, emit: n }) {
    const o = e, {
      focusStartRef: r,
      trapped: s,
      onFocusAfterReleased: a,
      onFocusAfterTrapped: i,
      onFocusInTrap: l,
      onFocusoutPrevented: u,
      onReleaseRequested: f
    } = m0(o, n), { attributes: p, arrowRef: m, contentRef: g, styles: h, instanceRef: v, role: w, update: d } = C0(o), {
      ariaModal: E,
      arrowStyle: L,
      contentAttrs: S,
      contentClass: T,
      contentStyle: I,
      updateZIndex: k
    } = E0(o, {
      styles: h,
      attributes: p,
      role: w
    }), $ = fe(tr, void 0), C = x();
    Rt(Tu, {
      arrowStyle: L,
      arrowRef: m,
      arrowOffset: C
    }), $ && Rt(tr, {
      ...$,
      addInputId: po,
      removeInputId: po
    });
    let D;
    const K = (se = !0) => {
      d(), se && k();
    }, Y = () => {
      K(!1), o.visible && o.focusOnShow ? s.value = !0 : o.visible === !1 && (s.value = !1);
    };
    return Pe(() => {
      Q(() => o.triggerTargetEl, (se, we) => {
        D?.(), D = void 0;
        const me = c(se || g.value), oe = c(we || g.value);
        Ct(me) && (D = Q([w, () => o.ariaLabel, E, () => o.id], (B) => {
          ["role", "aria-label", "aria-modal", "id"].forEach((he, pe) => {
            pr(B[pe]) ? me.removeAttribute(he) : me.setAttribute(he, B[pe]);
          });
        }, { immediate: !0 })), oe !== me && Ct(oe) && ["role", "aria-label", "aria-modal", "id"].forEach((B) => {
          oe.removeAttribute(B);
        });
      }, { immediate: !0 }), Q(() => o.visible, Y, { immediate: !0 });
    }), Ft(() => {
      D?.(), D = void 0;
    }), t({
      popperContentRef: g,
      popperInstanceRef: v,
      updatePopper: K,
      contentStyle: I
    }), (se, we) => (R(), G("div", Dn({
      ref_key: "contentRef",
      ref: g
    }, c(S), {
      style: c(I),
      class: c(T),
      tabindex: "-1",
      onMouseenter: (me) => se.$emit("mouseenter", me),
      onMouseleave: (me) => se.$emit("mouseleave", me)
    }), [
      z(c(lb), {
        trapped: c(s),
        "trap-on-focus-in": !0,
        "focus-trap-el": c(g),
        "focus-start-el": c(r),
        onFocusAfterTrapped: c(i),
        onFocusAfterReleased: c(a),
        onFocusin: c(l),
        onFocusoutPrevented: c(u),
        onReleaseRequested: c(f)
      }, {
        default: ne(() => [
          ae(se.$slots, "default")
        ]),
        _: 3
      }, 8, ["trapped", "focus-trap-el", "focus-start-el", "onFocusAfterTrapped", "onFocusAfterReleased", "onFocusin", "onFocusoutPrevented", "onReleaseRequested"])
    ], 16, ["onMouseenter", "onMouseleave"]));
  }
});
var k0 = /* @__PURE__ */ Ce(T0, [["__file", "content.vue"]]);
const O0 = tn(xy), Us = Symbol("elTooltip");
function Ki() {
  let e;
  const t = (o, r) => {
    n(), e = window.setTimeout(o, r);
  }, n = () => window.clearTimeout(e);
  return wo(() => n()), {
    registerTimeout: t,
    cancelTimeout: n
  };
}
const L0 = _e({
  showAfter: {
    type: Number,
    default: 0
  },
  hideAfter: {
    type: Number,
    default: 200
  },
  autoClose: {
    type: Number,
    default: 0
  }
}), I0 = ({
  showAfter: e,
  hideAfter: t,
  autoClose: n,
  open: o,
  close: r
}) => {
  const { registerTimeout: s } = Ki(), {
    registerTimeout: a,
    cancelTimeout: i
  } = Ki();
  return {
    onOpen: (f) => {
      s(() => {
        o(f);
        const p = c(n);
        Me(p) && p > 0 && a(() => {
          r(f);
        }, p);
      }, c(e));
    },
    onClose: (f) => {
      i(), s(() => {
        r(f);
      }, c(t));
    }
  };
}, Hs = _e({
  ...L0,
  ...Uu,
  appendTo: {
    type: X([String, Object])
  },
  content: {
    type: String,
    default: ""
  },
  rawContent: Boolean,
  persistent: Boolean,
  visible: {
    type: X(Boolean),
    default: null
  },
  transition: String,
  teleported: {
    type: Boolean,
    default: !0
  },
  disabled: Boolean,
  ...Co(["ariaLabel"])
}), Hu = _e({
  ...Lu,
  disabled: Boolean,
  trigger: {
    type: X([String, Array]),
    default: "hover"
  },
  triggerKeys: {
    type: X(Array),
    default: () => [Nt.enter, Nt.numpadEnter, Nt.space]
  }
}), P0 = hr({
  type: X(Boolean),
  default: null
}), A0 = hr({
  type: X(Function)
}), N0 = (e) => {
  const t = `update:${e}`, n = `onUpdate:${e}`, o = [t], r = {
    [e]: P0,
    [n]: A0
  };
  return {
    useModelToggle: ({
      indicator: a,
      toggleReason: i,
      shouldHideWhenRouteChanges: l,
      shouldProceed: u,
      onShow: f,
      onHide: p
    }) => {
      const m = Ke(), { emit: g } = m, h = m.props, v = P(() => Ne(h[n])), w = P(() => h[e] === null), d = (k) => {
        a.value !== !0 && (a.value = !0, i && (i.value = k), Ne(f) && f(k));
      }, E = (k) => {
        a.value !== !1 && (a.value = !1, i && (i.value = k), Ne(p) && p(k));
      }, L = (k) => {
        if (h.disabled === !0 || Ne(u) && !u())
          return;
        const $ = v.value && Le;
        $ && g(t, !0), (w.value || !$) && d(k);
      }, S = (k) => {
        if (h.disabled === !0 || !Le)
          return;
        const $ = v.value && Le;
        $ && g(t, !1), (w.value || !$) && E(k);
      }, T = (k) => {
        qo(k) && (h.disabled && k ? v.value && g(t, !1) : a.value !== k && (k ? d() : E()));
      }, I = () => {
        a.value ? S() : L();
      };
      return Q(() => h[e], T), l && m.appContext.config.globalProperties.$route !== void 0 && Q(() => ({
        ...m.proxy.$route
      }), () => {
        l.value && a.value && S();
      }), Pe(() => {
        T(h[e]);
      }), {
        hide: S,
        show: L,
        toggle: I,
        hasUpdateHandler: v
      };
    },
    useModelToggleProps: r,
    useModelToggleEmits: o
  };
}, {
  useModelToggleProps: M0,
  useModelToggleEmits: R0,
  useModelToggle: $0
} = N0("visible"), D0 = _e({
  ...ku,
  ...M0,
  ...Hs,
  ...Hu,
  ...Ou,
  showArrow: {
    type: Boolean,
    default: !0
  }
}), F0 = [
  ...R0,
  "before-show",
  "before-hide",
  "show",
  "hide",
  "open",
  "close"
], x0 = (e, t) => Pt(e) ? e.includes(t) : e === t, Nn = (e, t, n) => (o) => {
  x0(c(e), t) && n(o);
}, Wt = (e, t, { checkForDefaultPrevented: n = !0 } = {}) => (r) => {
  const s = e?.(r);
  if (n === !1 || !s)
    return t?.(r);
}, z0 = q({
  name: "ElTooltipTrigger"
}), B0 = /* @__PURE__ */ q({
  ...z0,
  props: Hu,
  setup(e, { expose: t }) {
    const n = e, o = Re("tooltip"), { controlled: r, id: s, open: a, onOpen: i, onClose: l, onToggle: u } = fe(Us, void 0), f = x(null), p = () => {
      if (c(r) || n.disabled)
        return !0;
    }, m = Ut(n, "trigger"), g = Wt(p, Nn(m, "hover", i)), h = Wt(p, Nn(m, "hover", l)), v = Wt(p, Nn(m, "click", (S) => {
      S.button === 0 && u(S);
    })), w = Wt(p, Nn(m, "focus", i)), d = Wt(p, Nn(m, "focus", l)), E = Wt(p, Nn(m, "contextmenu", (S) => {
      S.preventDefault(), u(S);
    })), L = Wt(p, (S) => {
      const { code: T } = S;
      n.triggerKeys.includes(T) && (S.preventDefault(), u(S));
    });
    return t({
      triggerRef: f
    }), (S, T) => (R(), ee(c(Yy), {
      id: c(s),
      "virtual-ref": S.virtualRef,
      open: c(a),
      "virtual-triggering": S.virtualTriggering,
      class: j(c(o).e("trigger")),
      onBlur: c(d),
      onClick: c(v),
      onContextmenu: c(E),
      onFocus: c(w),
      onMouseenter: c(g),
      onMouseleave: c(h),
      onKeydown: c(L)
    }, {
      default: ne(() => [
        ae(S.$slots, "default")
      ]),
      _: 3
    }, 8, ["id", "virtual-ref", "open", "virtual-triggering", "class", "onBlur", "onClick", "onContextmenu", "onFocus", "onMouseenter", "onMouseleave", "onKeydown"]));
  }
});
var W0 = /* @__PURE__ */ Ce(B0, [["__file", "trigger.vue"]]);
const j0 = _e({
  to: {
    type: X([String, Object]),
    required: !0
  },
  disabled: Boolean
}), V0 = /* @__PURE__ */ q({
  __name: "teleport",
  props: j0,
  setup(e) {
    return (t, n) => t.disabled ? ae(t.$slots, "default", { key: 0 }) : (R(), ee(Oc, {
      key: 1,
      to: t.to
    }, [
      ae(t.$slots, "default")
    ], 8, ["to"]));
  }
});
var U0 = /* @__PURE__ */ Ce(V0, [["__file", "teleport.vue"]]);
const H0 = tn(U0), Ku = () => {
  const e = bs(), t = bu(), n = P(() => `${e.value}-popper-container-${t.prefix}`), o = P(() => `#${n.value}`);
  return {
    id: n,
    selector: o
  };
}, K0 = (e) => {
  const t = document.createElement("div");
  return t.id = e, document.body.appendChild(t), t;
}, G0 = () => {
  const { id: e, selector: t } = Ku();
  return Lc(() => {
    Le && (document.body.querySelector(t.value) || K0(e.value));
  }), {
    id: e,
    selector: t
  };
}, Y0 = q({
  name: "ElTooltipContent",
  inheritAttrs: !1
}), Z0 = /* @__PURE__ */ q({
  ...Y0,
  props: Hs,
  setup(e, { expose: t }) {
    const n = e, { selector: o } = Ku(), r = Re("tooltip"), s = x();
    let a;
    const {
      controlled: i,
      id: l,
      open: u,
      trigger: f,
      onClose: p,
      onOpen: m,
      onShow: g,
      onHide: h,
      onBeforeShow: v,
      onBeforeHide: w
    } = fe(Us, void 0), d = P(() => n.transition || `${r.namespace.value}-fade-in-linear`), E = P(() => n.persistent);
    Ft(() => {
      a?.();
    });
    const L = P(() => c(E) ? !0 : c(u)), S = P(() => n.disabled ? !1 : c(u)), T = P(() => n.appendTo || o.value), I = P(() => {
      var B;
      return (B = n.style) != null ? B : {};
    }), k = x(!0), $ = () => {
      h(), oe() && Bt(document.body), k.value = !0;
    }, C = () => {
      if (c(i))
        return !0;
    }, D = Wt(C, () => {
      n.enterable && c(f) === "hover" && m();
    }), K = Wt(C, () => {
      c(f) === "hover" && p();
    }), Y = () => {
      var B, he;
      (he = (B = s.value) == null ? void 0 : B.updatePopper) == null || he.call(B), v?.();
    }, se = () => {
      w?.();
    }, we = () => {
      g(), a = og(P(() => {
        var B;
        return (B = s.value) == null ? void 0 : B.popperContentRef;
      }), () => {
        if (c(i))
          return;
        c(f) !== "hover" && p();
      });
    }, me = () => {
      n.virtualTriggering || p();
    }, oe = (B) => {
      var he;
      const pe = (he = s.value) == null ? void 0 : he.popperContentRef, Ee = B?.relatedTarget || document.activeElement;
      return pe?.contains(Ee);
    };
    return Q(() => c(u), (B) => {
      B ? k.value = !1 : a?.();
    }, {
      flush: "post"
    }), Q(() => n.content, () => {
      var B, he;
      (he = (B = s.value) == null ? void 0 : B.updatePopper) == null || he.call(B);
    }), t({
      contentRef: s,
      isFocusInsideContent: oe
    }), (B, he) => (R(), ee(c(H0), {
      disabled: !B.teleported,
      to: c(T)
    }, {
      default: ne(() => [
        z(Gn, {
          name: c(d),
          onAfterLeave: $,
          onBeforeEnter: Y,
          onAfterEnter: we,
          onBeforeLeave: se
        }, {
          default: ne(() => [
            c(L) ? Oe((R(), ee(c(k0), Dn({
              key: 0,
              id: c(l),
              ref_key: "contentRef",
              ref: s
            }, B.$attrs, {
              "aria-label": B.ariaLabel,
              "aria-hidden": k.value,
              "boundaries-padding": B.boundariesPadding,
              "fallback-placements": B.fallbackPlacements,
              "gpu-acceleration": B.gpuAcceleration,
              offset: B.offset,
              placement: B.placement,
              "popper-options": B.popperOptions,
              strategy: B.strategy,
              effect: B.effect,
              enterable: B.enterable,
              pure: B.pure,
              "popper-class": B.popperClass,
              "popper-style": [B.popperStyle, c(I)],
              "reference-el": B.referenceEl,
              "trigger-target-el": B.triggerTargetEl,
              visible: c(S),
              "z-index": B.zIndex,
              onMouseenter: c(D),
              onMouseleave: c(K),
              onBlur: me,
              onClose: c(p)
            }), {
              default: ne(() => [
                ae(B.$slots, "default")
              ]),
              _: 3
            }, 16, ["id", "aria-label", "aria-hidden", "boundaries-padding", "fallback-placements", "gpu-acceleration", "offset", "placement", "popper-options", "strategy", "effect", "enterable", "pure", "popper-class", "popper-style", "reference-el", "trigger-target-el", "visible", "z-index", "onMouseenter", "onMouseleave", "onClose"])), [
              [qt, c(S)]
            ]) : U("v-if", !0)
          ]),
          _: 3
        }, 8, ["name"])
      ]),
      _: 3
    }, 8, ["disabled", "to"]));
  }
});
var q0 = /* @__PURE__ */ Ce(Z0, [["__file", "content.vue"]]);
const J0 = q({
  name: "ElTooltip"
}), X0 = /* @__PURE__ */ q({
  ...J0,
  props: D0,
  emits: F0,
  setup(e, { expose: t, emit: n }) {
    const o = e;
    G0();
    const r = vr(), s = x(), a = x(), i = () => {
      var d;
      const E = c(s);
      E && ((d = E.popperInstanceRef) == null || d.update());
    }, l = x(!1), u = x(), { show: f, hide: p, hasUpdateHandler: m } = $0({
      indicator: l,
      toggleReason: u
    }), { onOpen: g, onClose: h } = I0({
      showAfter: Ut(o, "showAfter"),
      hideAfter: Ut(o, "hideAfter"),
      autoClose: Ut(o, "autoClose"),
      open: f,
      close: p
    }), v = P(() => qo(o.visible) && !m.value);
    Rt(Us, {
      controlled: v,
      id: r,
      open: us(l),
      trigger: Ut(o, "trigger"),
      onOpen: (d) => {
        g(d);
      },
      onClose: (d) => {
        h(d);
      },
      onToggle: (d) => {
        c(l) ? h(d) : g(d);
      },
      onShow: () => {
        n("show", u.value);
      },
      onHide: () => {
        n("hide", u.value);
      },
      onBeforeShow: () => {
        n("before-show", u.value);
      },
      onBeforeHide: () => {
        n("before-hide", u.value);
      },
      updatePopper: i
    }), Q(() => o.disabled, (d) => {
      d && l.value && (l.value = !1);
    });
    const w = (d) => {
      var E;
      return (E = a.value) == null ? void 0 : E.isFocusInsideContent(d);
    };
    return Ic(() => l.value && p()), t({
      popperRef: s,
      contentRef: a,
      isFocusInsideContent: w,
      updatePopper: i,
      onOpen: g,
      onClose: h,
      hide: p
    }), (d, E) => (R(), ee(c(O0), {
      ref_key: "popperRef",
      ref: s,
      role: d.role
    }, {
      default: ne(() => [
        z(W0, {
          disabled: d.disabled,
          trigger: d.trigger,
          "trigger-keys": d.triggerKeys,
          "virtual-ref": d.virtualRef,
          "virtual-triggering": d.virtualTriggering
        }, {
          default: ne(() => [
            d.$slots.default ? ae(d.$slots, "default", { key: 0 }) : U("v-if", !0)
          ]),
          _: 3
        }, 8, ["disabled", "trigger", "trigger-keys", "virtual-ref", "virtual-triggering"]),
        z(q0, {
          ref_key: "contentRef",
          ref: a,
          "aria-label": d.ariaLabel,
          "boundaries-padding": d.boundariesPadding,
          content: d.content,
          disabled: d.disabled,
          effect: d.effect,
          enterable: d.enterable,
          "fallback-placements": d.fallbackPlacements,
          "hide-after": d.hideAfter,
          "gpu-acceleration": d.gpuAcceleration,
          offset: d.offset,
          persistent: d.persistent,
          "popper-class": d.popperClass,
          "popper-style": d.popperStyle,
          placement: d.placement,
          "popper-options": d.popperOptions,
          pure: d.pure,
          "raw-content": d.rawContent,
          "reference-el": d.referenceEl,
          "trigger-target-el": d.triggerTargetEl,
          "show-after": d.showAfter,
          strategy: d.strategy,
          teleported: d.teleported,
          transition: d.transition,
          "virtual-triggering": d.virtualTriggering,
          "z-index": d.zIndex,
          "append-to": d.appendTo
        }, {
          default: ne(() => [
            ae(d.$slots, "content", {}, () => [
              d.rawContent ? (R(), G("span", {
                key: 0,
                innerHTML: d.content
              }, null, 8, ["innerHTML"])) : (R(), G("span", { key: 1 }, V(d.content), 1))
            ]),
            d.showArrow ? (R(), ee(c(Wy), {
              key: 0,
              "arrow-offset": d.arrowOffset
            }, null, 8, ["arrow-offset"])) : U("v-if", !0)
          ]),
          _: 3
        }, 8, ["aria-label", "boundaries-padding", "content", "disabled", "effect", "enterable", "fallback-placements", "hide-after", "gpu-acceleration", "offset", "persistent", "popper-class", "popper-style", "placement", "popper-options", "pure", "raw-content", "reference-el", "trigger-target-el", "show-after", "strategy", "teleported", "transition", "virtual-triggering", "z-index", "append-to"])
      ]),
      _: 3
    }, 8, ["role"]));
  }
});
var Q0 = /* @__PURE__ */ Ce(X0, [["__file", "tooltip.vue"]]);
const e_ = tn(Q0), t_ = _e({
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
    type: X([String, Object, Array])
  },
  offset: {
    type: X(Array),
    default: [0, 0]
  },
  badgeClass: {
    type: String
  }
}), n_ = q({
  name: "ElBadge"
}), o_ = /* @__PURE__ */ q({
  ...n_,
  props: t_,
  setup(e, { expose: t }) {
    const n = e, o = Re("badge"), r = P(() => n.isDot ? "" : Me(n.value) && Me(n.max) ? n.max < n.value ? `${n.max}+` : `${n.value}` : `${n.value}`), s = P(() => {
      var a, i, l, u, f;
      return [
        {
          backgroundColor: n.color,
          marginRight: vo(-((i = (a = n.offset) == null ? void 0 : a[0]) != null ? i : 0)),
          marginTop: vo((u = (l = n.offset) == null ? void 0 : l[1]) != null ? u : 0)
        },
        (f = n.badgeStyle) != null ? f : {}
      ];
    });
    return t({
      content: r
    }), (a, i) => (R(), G("div", {
      class: j(c(o).b())
    }, [
      ae(a.$slots, "default"),
      z(Gn, {
        name: `${c(o).namespace.value}-zoom-in-center`,
        persisted: ""
      }, {
        default: ne(() => [
          Oe(O("sup", {
            class: j([
              c(o).e("content"),
              c(o).em("content", a.type),
              c(o).is("fixed", !!a.$slots.default),
              c(o).is("dot", a.isDot),
              c(o).is("hide-zero", !a.showZero && n.value === 0),
              a.badgeClass
            ]),
            style: Ue(c(s))
          }, [
            ae(a.$slots, "content", { value: c(r) }, () => [
              jt(V(c(r)), 1)
            ])
          ], 6), [
            [qt, !a.hidden && (c(r) || a.isDot || a.$slots.content)]
          ])
        ]),
        _: 3
      }, 8, ["name"])
    ], 2));
  }
});
var r_ = /* @__PURE__ */ Ce(o_, [["__file", "badge.vue"]]);
const s_ = tn(r_), a_ = (e = "") => e.replace(/[|\\{}()[\]^$+*?.]/g, "\\$&").replace(/-/g, "\\x2d"), as = _e({
  type: {
    type: String,
    values: ["primary", "success", "info", "warning", "danger"],
    default: "primary"
  },
  closable: Boolean,
  disableTransitions: Boolean,
  hit: Boolean,
  color: String,
  size: {
    type: String,
    values: lu
  },
  effect: {
    type: String,
    values: ["dark", "light", "plain"],
    default: "light"
  },
  round: Boolean
}), i_ = {
  close: (e) => e instanceof MouseEvent,
  click: (e) => e instanceof MouseEvent
}, l_ = q({
  name: "ElTag"
}), u_ = /* @__PURE__ */ q({
  ...l_,
  props: as,
  emits: i_,
  setup(e, { emit: t }) {
    const n = e, o = As(), r = Re("tag"), s = P(() => {
      const { type: u, hit: f, effect: p, closable: m, round: g } = n;
      return [
        r.b(),
        r.is("closable", m),
        r.m(u || "primary"),
        r.m(o.value),
        r.m(p),
        r.is("hit", f),
        r.is("round", g)
      ];
    }), a = (u) => {
      t("close", u);
    }, i = (u) => {
      t("click", u);
    }, l = (u) => {
      var f, p, m;
      (m = (p = (f = u?.component) == null ? void 0 : f.subTree) == null ? void 0 : p.component) != null && m.bum && (u.component.subTree.component.bum = null);
    };
    return (u, f) => u.disableTransitions ? (R(), G("span", {
      key: 0,
      class: j(c(s)),
      style: Ue({ backgroundColor: u.color }),
      onClick: i
    }, [
      O("span", {
        class: j(c(r).e("content"))
      }, [
        ae(u.$slots, "default")
      ], 2),
      u.closable ? (R(), ee(c(ct), {
        key: 0,
        class: j(c(r).e("close")),
        onClick: He(a, ["stop"])
      }, {
        default: ne(() => [
          z(c(Qo))
        ]),
        _: 1
      }, 8, ["class", "onClick"])) : U("v-if", !0)
    ], 6)) : (R(), ee(Gn, {
      key: 1,
      name: `${c(r).namespace.value}-zoom-in-center`,
      appear: "",
      onVnodeMounted: l
    }, {
      default: ne(() => [
        O("span", {
          class: j(c(s)),
          style: Ue({ backgroundColor: u.color }),
          onClick: i
        }, [
          O("span", {
            class: j(c(r).e("content"))
          }, [
            ae(u.$slots, "default")
          ], 2),
          u.closable ? (R(), ee(c(ct), {
            key: 0,
            class: j(c(r).e("close")),
            onClick: He(a, ["stop"])
          }, {
            default: ne(() => [
              z(c(Qo))
            ]),
            _: 1
          }, 8, ["class", "onClick"])) : U("v-if", !0)
        ], 6)
      ]),
      _: 3
    }, 8, ["name"]));
  }
});
var c_ = /* @__PURE__ */ Ce(u_, [["__file", "tag.vue"]]);
const d_ = tn(c_), rn = /* @__PURE__ */ new Map();
if (Le) {
  let e;
  document.addEventListener("mousedown", (t) => e = t), document.addEventListener("mouseup", (t) => {
    if (e) {
      for (const n of rn.values())
        for (const { documentHandler: o } of n)
          o(t, e);
      e = void 0;
    }
  });
}
function Gi(e, t) {
  let n = [];
  return Pt(t.arg) ? n = t.arg : Ct(t.arg) && n.push(t.arg), function(o, r) {
    const s = t.instance.popperRef, a = o.target, i = r?.target, l = !t || !t.instance, u = !a || !i, f = e.contains(a) || e.contains(i), p = e === a, m = n.length && n.some((h) => h?.contains(a)) || n.length && n.includes(i), g = s && (s.contains(a) || s.contains(i));
    l || u || f || p || m || g || t.value(o, r);
  };
}
const f_ = {
  beforeMount(e, t) {
    rn.has(e) || rn.set(e, []), rn.get(e).push({
      documentHandler: Gi(e, t),
      bindingFn: t.value
    });
  },
  updated(e, t) {
    rn.has(e) || rn.set(e, []);
    const n = rn.get(e), o = n.findIndex((s) => s.bindingFn === t.oldValue), r = {
      documentHandler: Gi(e, t),
      bindingFn: t.value
    };
    o >= 0 ? n.splice(o, 1, r) : n.push(r);
  },
  unmounted(e) {
    rn.delete(e);
  }
}, p_ = _e({
  a11y: {
    type: Boolean,
    default: !0
  },
  locale: {
    type: X(Object)
  },
  size: Ls,
  button: {
    type: X(Object)
  },
  experimentalFeatures: {
    type: X(Object)
  },
  keyboardNavigation: {
    type: Boolean,
    default: !0
  },
  message: {
    type: X(Object)
  },
  zIndex: Number,
  namespace: {
    type: String,
    default: "el"
  },
  ...du
}), bt = {};
q({
  name: "ElConfigProvider",
  props: p_,
  setup(e, { slots: t }) {
    Q(() => e.message, (o) => {
      Object.assign(bt, o ?? {});
    }, { immediate: !0, deep: !0 });
    const n = mu(e);
    return () => ae(t, "default", { config: n?.value });
  }
});
function m_() {
  const e = dn(), t = x(0), n = 11, o = P(() => ({
    minWidth: `${Math.max(t.value, n)}px`
  }));
  return Lt(e, () => {
    var s, a;
    t.value = (a = (s = e.value) == null ? void 0 : s.getBoundingClientRect().width) != null ? a : 0;
  }), {
    calculatorRef: e,
    calculatorWidth: t,
    inputStyle: o
  };
}
const Gu = Symbol("ElSelectGroup"), _r = Symbol("ElSelect");
function h_(e, t) {
  const n = fe(_r), o = fe(Gu, { disabled: !1 }), r = P(() => f(un(n.props.modelValue), e.value)), s = P(() => {
    var g;
    if (n.props.multiple) {
      const h = un((g = n.props.modelValue) != null ? g : []);
      return !r.value && h.length >= n.props.multipleLimit && n.props.multipleLimit > 0;
    } else
      return !1;
  }), a = P(() => e.label || (dt(e.value) ? "" : e.value)), i = P(() => e.value || e.label || ""), l = P(() => e.disabled || t.groupDisabled || s.value), u = Ke(), f = (g = [], h) => {
    if (dt(e.value)) {
      const v = n.props.valueKey;
      return g && g.some((w) => Ji(cn(w, v)) === cn(h, v));
    } else
      return g && g.includes(h);
  }, p = () => {
    !e.disabled && !o.disabled && (n.states.hoveringIndex = n.optionsArray.indexOf(u.proxy));
  }, m = (g) => {
    const h = new RegExp(a_(g), "i");
    t.visible = h.test(a.value) || e.created;
  };
  return Q(() => a.value, () => {
    !e.created && !n.props.remote && n.setSelected();
  }), Q(() => e.value, (g, h) => {
    const { remote: v, valueKey: w } = n.props;
    if ((v ? g !== h : !ro(g, h)) && (n.onOptionDestroy(h, u.proxy), n.onOptionCreate(u.proxy)), !e.created && !v) {
      if (w && dt(g) && dt(h) && g[w] === h[w])
        return;
      n.setSelected();
    }
  }), Q(() => o.disabled, () => {
    t.groupDisabled = o.disabled;
  }, { immediate: !0 }), {
    select: n,
    currentLabel: a,
    currentValue: i,
    itemSelected: r,
    isDisabled: l,
    hoverItem: p,
    updateOption: m
  };
}
const v_ = q({
  name: "ElOption",
  componentName: "ElOption",
  props: {
    value: {
      required: !0,
      type: [String, Number, Boolean, Object]
    },
    label: [String, Number],
    created: Boolean,
    disabled: Boolean
  },
  setup(e) {
    const t = Re("select"), n = vr(), o = P(() => [
      t.be("dropdown", "item"),
      t.is("disabled", c(i)),
      t.is("selected", c(a)),
      t.is("hovering", c(m))
    ]), r = wn({
      index: -1,
      groupDisabled: !1,
      visible: !0,
      hover: !1
    }), {
      currentLabel: s,
      itemSelected: a,
      isDisabled: i,
      select: l,
      hoverItem: u,
      updateOption: f
    } = h_(e, r), { visible: p, hover: m } = rr(r), g = Ke().proxy;
    l.onOptionCreate(g), Ft(() => {
      const v = g.value, { selected: w } = l.states, d = w.some((E) => E.value === g.value);
      Se(() => {
        l.states.cachedOptions.get(v) === g && !d && l.states.cachedOptions.delete(v);
      }), l.onOptionDestroy(v, g);
    });
    function h() {
      i.value || l.handleOptionSelect(g);
    }
    return {
      ns: t,
      id: n,
      containerKls: o,
      currentLabel: s,
      itemSelected: a,
      isDisabled: i,
      select: l,
      hoverItem: u,
      updateOption: f,
      visible: p,
      hover: m,
      selectOptionClick: h,
      states: r
    };
  }
});
function g_(e, t, n, o, r, s) {
  return Oe((R(), G("li", {
    id: e.id,
    class: j(e.containerKls),
    role: "option",
    "aria-disabled": e.isDisabled || void 0,
    "aria-selected": e.itemSelected,
    onMousemove: e.hoverItem,
    onClick: He(e.selectOptionClick, ["stop"])
  }, [
    ae(e.$slots, "default", {}, () => [
      O("span", null, V(e.currentLabel), 1)
    ])
  ], 42, ["id", "aria-disabled", "aria-selected", "onMousemove", "onClick"])), [
    [qt, e.visible]
  ]);
}
var Ks = /* @__PURE__ */ Ce(v_, [["render", g_], ["__file", "option.vue"]]);
const y_ = q({
  name: "ElSelectDropdown",
  componentName: "ElSelectDropdown",
  setup() {
    const e = fe(_r), t = Re("select"), n = P(() => e.props.popperClass), o = P(() => e.props.multiple), r = P(() => e.props.fitInputWidth), s = x("");
    function a() {
      var i;
      s.value = `${(i = e.selectRef) == null ? void 0 : i.offsetWidth}px`;
    }
    return Pe(() => {
      a(), Lt(e.selectRef, a);
    }), {
      ns: t,
      minWidth: s,
      popperClass: n,
      isMultiple: o,
      isFitInputWidth: r
    };
  }
});
function b_(e, t, n, o, r, s) {
  return R(), G("div", {
    class: j([e.ns.b("dropdown"), e.ns.is("multiple", e.isMultiple), e.popperClass]),
    style: Ue({ [e.isFitInputWidth ? "width" : "minWidth"]: e.minWidth })
  }, [
    e.$slots.header ? (R(), G("div", {
      key: 0,
      class: j(e.ns.be("dropdown", "header"))
    }, [
      ae(e.$slots, "header")
    ], 2)) : U("v-if", !0),
    ae(e.$slots, "default"),
    e.$slots.footer ? (R(), G("div", {
      key: 1,
      class: j(e.ns.be("dropdown", "footer"))
    }, [
      ae(e.$slots, "footer")
    ], 2)) : U("v-if", !0)
  ], 6);
}
var __ = /* @__PURE__ */ Ce(y_, [["render", b_], ["__file", "select-dropdown.vue"]]);
const w_ = (e, t) => {
  const { t: n } = au(), o = vr(), r = Re("select"), s = Re("input"), a = wn({
    inputValue: "",
    options: /* @__PURE__ */ new Map(),
    cachedOptions: /* @__PURE__ */ new Map(),
    optionValues: [],
    selected: [],
    selectionWidth: 0,
    collapseItemWidth: 0,
    selectedLabel: "",
    hoveringIndex: -1,
    previousQuery: null,
    inputHovering: !1,
    menuVisibleOnFocus: !1,
    isBeforeHide: !1
  }), i = x(null), l = x(null), u = x(null), f = x(null), p = x(null), m = x(null), g = x(null), h = x(null), v = x(null), w = x(null), d = x(null), {
    isComposing: E,
    handleCompositionStart: L,
    handleCompositionUpdate: S,
    handleCompositionEnd: T
  } = Su({
    afterComposition: (A) => Be(A)
  }), { wrapperRef: I, isFocused: k, handleBlur: $ } = Eu(p, {
    beforeFocus() {
      return oe.value;
    },
    afterFocus() {
      e.automaticDropdown && !C.value && (C.value = !0, a.menuVisibleOnFocus = !0);
    },
    beforeBlur(A) {
      var W, re;
      return ((W = u.value) == null ? void 0 : W.isFocusInsideContent(A)) || ((re = f.value) == null ? void 0 : re.isFocusInsideContent(A));
    },
    afterBlur() {
      C.value = !1, a.menuVisibleOnFocus = !1;
    }
  }), C = x(!1), D = x(), { form: K, formItem: Y } = _u(), { inputId: se } = wu(e, {
    formItemContext: Y
  }), { valueOnClear: we, isEmptyValue: me } = kg(e), oe = P(() => e.disabled || K?.disabled), B = P(() => Pt(e.modelValue) ? e.modelValue.length > 0 : !me(e.modelValue)), he = P(() => {
    var A;
    return (A = K?.statusIcon) != null ? A : !1;
  }), pe = P(() => e.clearable && !oe.value && a.inputHovering && B.value), Ee = P(() => e.remote && e.filterable && !e.remoteShowSuffix ? "" : e.suffixIcon), Ge = P(() => r.is("reverse", Ee.value && C.value)), Ye = P(() => Y?.validateState || ""), at = P(() => gu[Ye.value]), Fe = P(() => e.remote ? 300 : 0), $e = P(() => e.remote && !a.inputValue && a.options.size === 0), xe = P(() => e.loading ? e.loadingText || n("el.select.loading") : e.filterable && a.inputValue && a.options.size > 0 && ze.value === 0 ? e.noMatchText || n("el.select.noMatch") : a.options.size === 0 ? e.noDataText || n("el.select.noData") : null), ze = P(() => ve.value.filter((A) => A.visible).length), ve = P(() => {
    const A = Array.from(a.options.values()), W = [];
    return a.optionValues.forEach((re) => {
      const Ie = A.findIndex((ot) => ot.value === re);
      Ie > -1 && W.push(A[Ie]);
    }), W.length >= A.length ? W : A;
  }), Xe = P(() => Array.from(a.cachedOptions.values())), it = P(() => {
    const A = ve.value.filter((W) => !W.created).some((W) => W.currentLabel === a.inputValue);
    return e.filterable && e.allowCreate && a.inputValue !== "" && !A;
  }), Qe = () => {
    e.filterable && Ne(e.filterMethod) || e.filterable && e.remote && Ne(e.remoteMethod) || ve.value.forEach((A) => {
      var W;
      (W = A.updateOption) == null || W.call(A, a.inputValue);
    });
  }, yt = As(), et = P(() => ["small"].includes(yt.value) ? "small" : "default"), tt = P({
    get() {
      return C.value && !$e.value;
    },
    set(A) {
      C.value = A;
    }
  }), nt = P(() => {
    if (e.multiple && !$n(e.modelValue))
      return un(e.modelValue).length === 0 && !a.inputValue;
    const A = Pt(e.modelValue) ? e.modelValue[0] : e.modelValue;
    return e.filterable || $n(A) ? !a.inputValue : !0;
  }), lt = P(() => {
    var A;
    const W = (A = e.placeholder) != null ? A : n("el.select.placeholder");
    return e.multiple || !B.value ? W : a.selectedLabel;
  }), Tt = P(() => ns ? null : "mouseenter");
  Q(() => e.modelValue, (A, W) => {
    e.multiple && e.filterable && !e.reserveKeyword && (a.inputValue = "", b("")), M(), !ro(A, W) && e.validateEvent && Y?.validate("change").catch((re) => void 0);
  }, {
    flush: "post",
    deep: !0
  }), Q(() => C.value, (A) => {
    A ? b(a.inputValue) : (a.inputValue = "", a.previousQuery = null, a.isBeforeHide = !0), t("visible-change", A);
  }), Q(() => a.options.entries(), () => {
    Le && (M(), e.defaultFirstOption && (e.filterable || e.remote) && ze.value && _());
  }, {
    flush: "post"
  }), Q([() => a.hoveringIndex, ve], ([A]) => {
    Me(A) && A > -1 ? D.value = ve.value[A] || {} : D.value = {}, ve.value.forEach((W) => {
      W.hover = D.value === W;
    });
  }), nl(() => {
    a.isBeforeHide || Qe();
  });
  const b = (A) => {
    a.previousQuery === A || E.value || (a.previousQuery = A, e.filterable && Ne(e.filterMethod) ? e.filterMethod(A) : e.filterable && e.remote && Ne(e.remoteMethod) && e.remoteMethod(A), e.defaultFirstOption && (e.filterable || e.remote) && ze.value ? Se(_) : Se(ie));
  }, _ = () => {
    const A = ve.value.filter((ot) => ot.visible && !ot.disabled && !ot.states.groupDisabled), W = A.find((ot) => ot.created), re = A[0], Ie = ve.value.map((ot) => ot.value);
    a.hoveringIndex = qs(Ie, W || re);
  }, M = () => {
    if (e.multiple)
      a.selectedLabel = "";
    else {
      const W = Pt(e.modelValue) ? e.modelValue[0] : e.modelValue, re = H(W);
      a.selectedLabel = re.currentLabel, a.selected = [re];
      return;
    }
    const A = [];
    $n(e.modelValue) || un(e.modelValue).forEach((W) => {
      A.push(H(W));
    }), a.selected = A;
  }, H = (A) => {
    let W;
    const re = ep(A);
    for (let On = a.cachedOptions.size - 1; On >= 0; On--) {
      const nn = Xe.value[On];
      if (re ? cn(nn.value, e.valueKey) === cn(A, e.valueKey) : nn.value === A) {
        W = {
          value: A,
          currentLabel: nn.currentLabel,
          get isDisabled() {
            return nn.isDisabled;
          }
        };
        break;
      }
    }
    if (W)
      return W;
    const Ie = re ? A.label : A ?? "";
    return {
      value: A,
      currentLabel: Ie
    };
  }, ie = () => {
    a.hoveringIndex = ve.value.findIndex((A) => a.selected.some((W) => Oo(W) === Oo(A)));
  }, J = () => {
    a.selectionWidth = l.value.getBoundingClientRect().width;
  }, y = () => {
    a.collapseItemWidth = w.value.getBoundingClientRect().width;
  }, N = () => {
    var A, W;
    (W = (A = u.value) == null ? void 0 : A.updatePopper) == null || W.call(A);
  }, te = () => {
    var A, W;
    (W = (A = f.value) == null ? void 0 : A.updatePopper) == null || W.call(A);
  }, ce = () => {
    a.inputValue.length > 0 && !C.value && (C.value = !0), b(a.inputValue);
  }, Be = (A) => {
    if (a.inputValue = A.target.value, e.remote)
      vn();
    else
      return ce();
  }, vn = xv(() => {
    ce();
  }, Fe.value), ut = (A) => {
    ro(e.modelValue, A) || t(Xo, A);
  }, wr = (A) => zv(A, (W) => {
    const re = a.cachedOptions.get(W);
    return re && !re.disabled && !re.states.groupDisabled;
  }), Gs = (A) => {
    if (e.multiple && A.code !== Nt.delete && A.target.value.length <= 0) {
      const W = un(e.modelValue).slice(), re = wr(W);
      if (re < 0)
        return;
      const Ie = W[re];
      W.splice(re, 1), t(Vt, W), ut(W), t("remove-tag", Ie);
    }
  }, Qu = (A, W) => {
    const re = a.selected.indexOf(W);
    if (re > -1 && !oe.value) {
      const Ie = un(e.modelValue).slice();
      Ie.splice(re, 1), t(Vt, Ie), ut(Ie), t("remove-tag", W.value);
    }
    A.stopPropagation(), ko();
  }, Ys = (A) => {
    A.stopPropagation();
    const W = e.multiple ? [] : we.value;
    if (e.multiple)
      for (const re of a.selected)
        re.isDisabled && W.push(re.value);
    t(Vt, W), ut(W), a.hoveringIndex = -1, C.value = !1, t("clear"), ko();
  }, Zs = (A) => {
    var W;
    if (e.multiple) {
      const re = un((W = e.modelValue) != null ? W : []).slice(), Ie = qs(re, A);
      Ie > -1 ? re.splice(Ie, 1) : (e.multipleLimit <= 0 || re.length < e.multipleLimit) && re.push(A.value), t(Vt, re), ut(re), A.created && b(""), e.filterable && !e.reserveKeyword && (a.inputValue = "");
    } else
      t(Vt, A.value), ut(A.value), C.value = !1;
    ko(), !C.value && Se(() => {
      To(A);
    });
  }, qs = (A = [], W) => $n(W) ? -1 : dt(W.value) ? A.findIndex((re) => ro(cn(re, e.valueKey), Oo(W))) : A.indexOf(W.value), To = (A) => {
    var W, re, Ie, ot, On;
    const nn = Pt(A) ? A[0] : A;
    let Lo = null;
    if (nn?.value) {
      const Zn = ve.value.filter((vc) => vc.value === nn.value);
      Zn.length > 0 && (Lo = Zn[0].$el);
    }
    if (u.value && Lo) {
      const Zn = (ot = (Ie = (re = (W = u.value) == null ? void 0 : W.popperRef) == null ? void 0 : re.contentRef) == null ? void 0 : Ie.querySelector) == null ? void 0 : ot.call(Ie, `.${r.be("dropdown", "wrap")}`);
      Zn && Lg(Zn, Lo);
    }
    (On = d.value) == null || On.handleScroll();
  }, ec = (A) => {
    a.options.set(A.value, A), a.cachedOptions.set(A.value, A);
  }, tc = (A, W) => {
    a.options.get(A) === W && a.options.delete(A);
  }, nc = P(() => {
    var A, W;
    return (W = (A = u.value) == null ? void 0 : A.popperRef) == null ? void 0 : W.contentRef;
  }), oc = () => {
    a.isBeforeHide = !1, Se(() => {
      var A;
      (A = d.value) == null || A.update(), To(a.selected);
    });
  }, ko = () => {
    var A;
    (A = p.value) == null || A.focus();
  }, rc = () => {
    var A;
    if (C.value) {
      C.value = !1, Se(() => {
        var W;
        return (W = p.value) == null ? void 0 : W.blur();
      });
      return;
    }
    (A = p.value) == null || A.blur();
  }, sc = (A) => {
    Ys(A);
  }, ac = (A) => {
    if (C.value = !1, k.value) {
      const W = new FocusEvent("focus", A);
      Se(() => $(W));
    }
  }, ic = () => {
    a.inputValue.length > 0 ? a.inputValue = "" : C.value = !1;
  }, Js = () => {
    oe.value || (ns && (a.inputHovering = !0), a.menuVisibleOnFocus ? a.menuVisibleOnFocus = !1 : C.value = !C.value);
  }, lc = () => {
    if (!C.value)
      Js();
    else {
      const A = ve.value[a.hoveringIndex];
      A && !A.isDisabled && Zs(A);
    }
  }, Oo = (A) => dt(A.value) ? cn(A.value, e.valueKey) : A.value, uc = P(() => ve.value.filter((A) => A.visible).every((A) => A.isDisabled)), cc = P(() => e.multiple ? e.collapseTags ? a.selected.slice(0, e.maxCollapseTags) : a.selected : []), dc = P(() => e.multiple ? e.collapseTags ? a.selected.slice(e.maxCollapseTags) : [] : []), Xs = (A) => {
    if (!C.value) {
      C.value = !0;
      return;
    }
    if (!(a.options.size === 0 || ze.value === 0 || E.value) && !uc.value) {
      A === "next" ? (a.hoveringIndex++, a.hoveringIndex === a.options.size && (a.hoveringIndex = 0)) : A === "prev" && (a.hoveringIndex--, a.hoveringIndex < 0 && (a.hoveringIndex = a.options.size - 1));
      const W = ve.value[a.hoveringIndex];
      (W.isDisabled || !W.visible) && Xs(A), Se(() => To(D.value));
    }
  }, fc = () => {
    if (!l.value)
      return 0;
    const A = window.getComputedStyle(l.value);
    return Number.parseFloat(A.gap || "6px");
  }, pc = P(() => {
    const A = fc();
    return { maxWidth: `${w.value && e.maxCollapseTags === 1 ? a.selectionWidth - a.collapseItemWidth - A : a.selectionWidth}px` };
  }), mc = P(() => ({ maxWidth: `${a.selectionWidth}px` })), hc = (A) => {
    t("popup-scroll", A);
  };
  return Lt(l, J), Lt(h, N), Lt(I, N), Lt(v, te), Lt(w, y), Pe(() => {
    M();
  }), {
    inputId: se,
    contentId: o,
    nsSelect: r,
    nsInput: s,
    states: a,
    isFocused: k,
    expanded: C,
    optionsArray: ve,
    hoverOption: D,
    selectSize: yt,
    filteredOptionsCount: ze,
    updateTooltip: N,
    updateTagTooltip: te,
    debouncedOnInputChange: vn,
    onInput: Be,
    deletePrevTag: Gs,
    deleteTag: Qu,
    deleteSelected: Ys,
    handleOptionSelect: Zs,
    scrollToOption: To,
    hasModelValue: B,
    shouldShowPlaceholder: nt,
    currentPlaceholder: lt,
    mouseEnterEventName: Tt,
    needStatusIcon: he,
    showClose: pe,
    iconComponent: Ee,
    iconReverse: Ge,
    validateState: Ye,
    validateIcon: at,
    showNewOption: it,
    updateOptions: Qe,
    collapseTagSize: et,
    setSelected: M,
    selectDisabled: oe,
    emptyText: xe,
    handleCompositionStart: L,
    handleCompositionUpdate: S,
    handleCompositionEnd: T,
    onOptionCreate: ec,
    onOptionDestroy: tc,
    handleMenuEnter: oc,
    focus: ko,
    blur: rc,
    handleClearClick: sc,
    handleClickOutside: ac,
    handleEsc: ic,
    toggleMenu: Js,
    selectOption: lc,
    getValueKey: Oo,
    navigateOptions: Xs,
    dropdownMenuVisible: tt,
    showTagList: cc,
    collapseTagList: dc,
    popupScroll: hc,
    tagStyle: pc,
    collapseTagStyle: mc,
    popperRef: nc,
    inputRef: p,
    tooltipRef: u,
    tagTooltipRef: f,
    prefixRef: m,
    suffixRef: g,
    selectRef: i,
    wrapperRef: I,
    selectionRef: l,
    scrollbarRef: d,
    menuRef: h,
    tagMenuRef: v,
    collapseItemRef: w
  };
};
var C_ = q({
  name: "ElOptions",
  setup(e, { slots: t }) {
    const n = fe(_r);
    let o = [];
    return () => {
      var r, s;
      const a = (r = t.default) == null ? void 0 : r.call(t), i = [];
      function l(u) {
        Pt(u) && u.forEach((f) => {
          var p, m, g, h;
          const v = (p = f?.type || {}) == null ? void 0 : p.name;
          v === "ElOptionGroup" ? l(!pt(f.children) && !Pt(f.children) && Ne((m = f.children) == null ? void 0 : m.default) ? (g = f.children) == null ? void 0 : g.default() : f.children) : v === "ElOption" ? i.push((h = f.props) == null ? void 0 : h.value) : Pt(f.children) && l(f.children);
        });
      }
      return a.length && l((s = a[0]) == null ? void 0 : s.children), ro(i, o) || (o = i, n && (n.states.optionValues = i)), a;
    };
  }
});
const E_ = _e({
  name: String,
  id: String,
  modelValue: {
    type: [Array, String, Number, Boolean, Object],
    default: void 0
  },
  autocomplete: {
    type: String,
    default: "off"
  },
  automaticDropdown: Boolean,
  size: Ls,
  effect: {
    type: X(String),
    default: "light"
  },
  disabled: Boolean,
  clearable: Boolean,
  filterable: Boolean,
  allowCreate: Boolean,
  loading: Boolean,
  popperClass: {
    type: String,
    default: ""
  },
  popperOptions: {
    type: X(Object),
    default: () => ({})
  },
  remote: Boolean,
  loadingText: String,
  noMatchText: String,
  noDataText: String,
  remoteMethod: Function,
  filterMethod: Function,
  multiple: Boolean,
  multipleLimit: {
    type: Number,
    default: 0
  },
  placeholder: {
    type: String
  },
  defaultFirstOption: Boolean,
  reserveKeyword: {
    type: Boolean,
    default: !0
  },
  valueKey: {
    type: String,
    default: "value"
  },
  collapseTags: Boolean,
  collapseTagsTooltip: Boolean,
  maxCollapseTags: {
    type: Number,
    default: 1
  },
  teleported: Hs.teleported,
  persistent: {
    type: Boolean,
    default: !0
  },
  clearIcon: {
    type: Bn,
    default: Is
  },
  fitInputWidth: Boolean,
  suffixIcon: {
    type: Bn,
    default: Rg
  },
  tagType: { ...as.type, default: "info" },
  tagEffect: { ...as.effect, default: "light" },
  validateEvent: {
    type: Boolean,
    default: !0
  },
  remoteShowSuffix: Boolean,
  showArrow: {
    type: Boolean,
    default: !0
  },
  offset: {
    type: Number,
    default: 12
  },
  placement: {
    type: X(String),
    values: yr,
    default: "bottom-start"
  },
  fallbackPlacements: {
    type: X(Array),
    default: ["bottom-start", "top-start", "right", "left"]
  },
  tabindex: {
    type: [String, Number],
    default: 0
  },
  appendTo: String,
  ...du,
  ...Co(["ariaLabel"])
}), Yi = "ElSelect", S_ = q({
  name: Yi,
  componentName: Yi,
  components: {
    ElSelectMenu: __,
    ElOption: Ks,
    ElOptions: C_,
    ElTag: d_,
    ElScrollbar: Ry,
    ElTooltip: e_,
    ElIcon: ct
  },
  directives: { ClickOutside: f_ },
  props: E_,
  emits: [
    Vt,
    Xo,
    "remove-tag",
    "clear",
    "visible-change",
    "focus",
    "blur",
    "popup-scroll"
  ],
  setup(e, { emit: t }) {
    const n = P(() => {
      const { modelValue: l, multiple: u } = e, f = u ? [] : void 0;
      return Pt(l) ? u ? l : f : u ? f : l;
    }), o = wn({
      ...rr(e),
      modelValue: n
    }), r = w_(o, t), { calculatorRef: s, inputStyle: a } = m_();
    Rt(_r, wn({
      props: o,
      states: r.states,
      optionsArray: r.optionsArray,
      handleOptionSelect: r.handleOptionSelect,
      onOptionCreate: r.onOptionCreate,
      onOptionDestroy: r.onOptionDestroy,
      selectRef: r.selectRef,
      setSelected: r.setSelected
    }));
    const i = P(() => e.multiple ? r.states.selected.map((l) => l.currentLabel) : r.states.selectedLabel);
    return {
      ...r,
      modelValue: n,
      selectedLabel: i,
      calculatorRef: s,
      inputStyle: a
    };
  }
});
function T_(e, t, n, o, r, s) {
  const a = gn("el-tag"), i = gn("el-tooltip"), l = gn("el-icon"), u = gn("el-option"), f = gn("el-options"), p = gn("el-scrollbar"), m = gn("el-select-menu"), g = Pc("click-outside");
  return Oe((R(), G("div", {
    ref: "selectRef",
    class: j([e.nsSelect.b(), e.nsSelect.m(e.selectSize)]),
    [Ac(e.mouseEnterEventName)]: (h) => e.states.inputHovering = !0,
    onMouseleave: (h) => e.states.inputHovering = !1
  }, [
    z(i, {
      ref: "tooltipRef",
      visible: e.dropdownMenuVisible,
      placement: e.placement,
      teleported: e.teleported,
      "popper-class": [e.nsSelect.e("popper"), e.popperClass],
      "popper-options": e.popperOptions,
      "fallback-placements": e.fallbackPlacements,
      effect: e.effect,
      pure: "",
      trigger: "click",
      transition: `${e.nsSelect.namespace.value}-zoom-in-top`,
      "stop-popper-mouse-event": !1,
      "gpu-acceleration": !1,
      persistent: e.persistent,
      "append-to": e.appendTo,
      "show-arrow": e.showArrow,
      offset: e.offset,
      onBeforeShow: e.handleMenuEnter,
      onHide: (h) => e.states.isBeforeHide = !1
    }, {
      default: ne(() => {
        var h;
        return [
          O("div", {
            ref: "wrapperRef",
            class: j([
              e.nsSelect.e("wrapper"),
              e.nsSelect.is("focused", e.isFocused),
              e.nsSelect.is("hovering", e.states.inputHovering),
              e.nsSelect.is("filterable", e.filterable),
              e.nsSelect.is("disabled", e.selectDisabled)
            ]),
            onClick: He(e.toggleMenu, ["prevent"])
          }, [
            e.$slots.prefix ? (R(), G("div", {
              key: 0,
              ref: "prefixRef",
              class: j(e.nsSelect.e("prefix"))
            }, [
              ae(e.$slots, "prefix")
            ], 2)) : U("v-if", !0),
            O("div", {
              ref: "selectionRef",
              class: j([
                e.nsSelect.e("selection"),
                e.nsSelect.is("near", e.multiple && !e.$slots.prefix && !!e.states.selected.length)
              ])
            }, [
              e.multiple ? ae(e.$slots, "tag", { key: 0 }, () => [
                (R(!0), G(ft, null, Qs(e.showTagList, (v) => (R(), G("div", {
                  key: e.getValueKey(v),
                  class: j(e.nsSelect.e("selected-item"))
                }, [
                  z(a, {
                    closable: !e.selectDisabled && !v.isDisabled,
                    size: e.collapseTagSize,
                    type: e.tagType,
                    effect: e.tagEffect,
                    "disable-transitions": "",
                    style: Ue(e.tagStyle),
                    onClose: (w) => e.deleteTag(w, v)
                  }, {
                    default: ne(() => [
                      O("span", {
                        class: j(e.nsSelect.e("tags-text"))
                      }, [
                        ae(e.$slots, "label", {
                          label: v.currentLabel,
                          value: v.value
                        }, () => [
                          jt(V(v.currentLabel), 1)
                        ])
                      ], 2)
                    ]),
                    _: 2
                  }, 1032, ["closable", "size", "type", "effect", "style", "onClose"])
                ], 2))), 128)),
                e.collapseTags && e.states.selected.length > e.maxCollapseTags ? (R(), ee(i, {
                  key: 0,
                  ref: "tagTooltipRef",
                  disabled: e.dropdownMenuVisible || !e.collapseTagsTooltip,
                  "fallback-placements": ["bottom", "top", "right", "left"],
                  effect: e.effect,
                  placement: "bottom",
                  teleported: e.teleported
                }, {
                  default: ne(() => [
                    O("div", {
                      ref: "collapseItemRef",
                      class: j(e.nsSelect.e("selected-item"))
                    }, [
                      z(a, {
                        closable: !1,
                        size: e.collapseTagSize,
                        type: e.tagType,
                        effect: e.tagEffect,
                        "disable-transitions": "",
                        style: Ue(e.collapseTagStyle)
                      }, {
                        default: ne(() => [
                          O("span", {
                            class: j(e.nsSelect.e("tags-text"))
                          }, " + " + V(e.states.selected.length - e.maxCollapseTags), 3)
                        ]),
                        _: 1
                      }, 8, ["size", "type", "effect", "style"])
                    ], 2)
                  ]),
                  content: ne(() => [
                    O("div", {
                      ref: "tagMenuRef",
                      class: j(e.nsSelect.e("selection"))
                    }, [
                      (R(!0), G(ft, null, Qs(e.collapseTagList, (v) => (R(), G("div", {
                        key: e.getValueKey(v),
                        class: j(e.nsSelect.e("selected-item"))
                      }, [
                        z(a, {
                          class: "in-tooltip",
                          closable: !e.selectDisabled && !v.isDisabled,
                          size: e.collapseTagSize,
                          type: e.tagType,
                          effect: e.tagEffect,
                          "disable-transitions": "",
                          onClose: (w) => e.deleteTag(w, v)
                        }, {
                          default: ne(() => [
                            O("span", {
                              class: j(e.nsSelect.e("tags-text"))
                            }, [
                              ae(e.$slots, "label", {
                                label: v.currentLabel,
                                value: v.value
                              }, () => [
                                jt(V(v.currentLabel), 1)
                              ])
                            ], 2)
                          ]),
                          _: 2
                        }, 1032, ["closable", "size", "type", "effect", "onClose"])
                      ], 2))), 128))
                    ], 2)
                  ]),
                  _: 3
                }, 8, ["disabled", "effect", "teleported"])) : U("v-if", !0)
              ]) : U("v-if", !0),
              O("div", {
                class: j([
                  e.nsSelect.e("selected-item"),
                  e.nsSelect.e("input-wrapper"),
                  e.nsSelect.is("hidden", !e.filterable)
                ])
              }, [
                Oe(O("input", {
                  id: e.inputId,
                  ref: "inputRef",
                  "onUpdate:modelValue": (v) => e.states.inputValue = v,
                  type: "text",
                  name: e.name,
                  class: j([e.nsSelect.e("input"), e.nsSelect.is(e.selectSize)]),
                  disabled: e.selectDisabled,
                  autocomplete: e.autocomplete,
                  style: Ue(e.inputStyle),
                  tabindex: e.tabindex,
                  role: "combobox",
                  readonly: !e.filterable,
                  spellcheck: "false",
                  "aria-activedescendant": ((h = e.hoverOption) == null ? void 0 : h.id) || "",
                  "aria-controls": e.contentId,
                  "aria-expanded": e.dropdownMenuVisible,
                  "aria-label": e.ariaLabel,
                  "aria-autocomplete": "none",
                  "aria-haspopup": "listbox",
                  onKeydown: [
                    qn(He((v) => e.navigateOptions("next"), ["stop", "prevent"]), ["down"]),
                    qn(He((v) => e.navigateOptions("prev"), ["stop", "prevent"]), ["up"]),
                    qn(He(e.handleEsc, ["stop", "prevent"]), ["esc"]),
                    qn(He(e.selectOption, ["stop", "prevent"]), ["enter"]),
                    qn(He(e.deletePrevTag, ["stop"]), ["delete"])
                  ],
                  onCompositionstart: e.handleCompositionStart,
                  onCompositionupdate: e.handleCompositionUpdate,
                  onCompositionend: e.handleCompositionEnd,
                  onInput: e.onInput,
                  onClick: He(e.toggleMenu, ["stop"])
                }, null, 46, ["id", "onUpdate:modelValue", "name", "disabled", "autocomplete", "tabindex", "readonly", "aria-activedescendant", "aria-controls", "aria-expanded", "aria-label", "onKeydown", "onCompositionstart", "onCompositionupdate", "onCompositionend", "onInput", "onClick"]), [
                  [Fr, e.states.inputValue]
                ]),
                e.filterable ? (R(), G("span", {
                  key: 0,
                  ref: "calculatorRef",
                  "aria-hidden": "true",
                  class: j(e.nsSelect.e("input-calculator")),
                  textContent: V(e.states.inputValue)
                }, null, 10, ["textContent"])) : U("v-if", !0)
              ], 2),
              e.shouldShowPlaceholder ? (R(), G("div", {
                key: 1,
                class: j([
                  e.nsSelect.e("selected-item"),
                  e.nsSelect.e("placeholder"),
                  e.nsSelect.is("transparent", !e.hasModelValue || e.expanded && !e.states.inputValue)
                ])
              }, [
                e.hasModelValue ? ae(e.$slots, "label", {
                  key: 0,
                  label: e.currentPlaceholder,
                  value: e.modelValue
                }, () => [
                  O("span", null, V(e.currentPlaceholder), 1)
                ]) : (R(), G("span", { key: 1 }, V(e.currentPlaceholder), 1))
              ], 2)) : U("v-if", !0)
            ], 2),
            O("div", {
              ref: "suffixRef",
              class: j(e.nsSelect.e("suffix"))
            }, [
              e.iconComponent && !e.showClose ? (R(), ee(l, {
                key: 0,
                class: j([e.nsSelect.e("caret"), e.nsSelect.e("icon"), e.iconReverse])
              }, {
                default: ne(() => [
                  (R(), ee(It(e.iconComponent)))
                ]),
                _: 1
              }, 8, ["class"])) : U("v-if", !0),
              e.showClose && e.clearIcon ? (R(), ee(l, {
                key: 1,
                class: j([
                  e.nsSelect.e("caret"),
                  e.nsSelect.e("icon"),
                  e.nsSelect.e("clear")
                ]),
                onClick: e.handleClearClick
              }, {
                default: ne(() => [
                  (R(), ee(It(e.clearIcon)))
                ]),
                _: 1
              }, 8, ["class", "onClick"])) : U("v-if", !0),
              e.validateState && e.validateIcon && e.needStatusIcon ? (R(), ee(l, {
                key: 2,
                class: j([
                  e.nsInput.e("icon"),
                  e.nsInput.e("validateIcon"),
                  e.nsInput.is("loading", e.validateState === "validating")
                ])
              }, {
                default: ne(() => [
                  (R(), ee(It(e.validateIcon)))
                ]),
                _: 1
              }, 8, ["class"])) : U("v-if", !0)
            ], 2)
          ], 10, ["onClick"])
        ];
      }),
      content: ne(() => [
        z(m, { ref: "menuRef" }, {
          default: ne(() => [
            e.$slots.header ? (R(), G("div", {
              key: 0,
              class: j(e.nsSelect.be("dropdown", "header")),
              onClick: He(() => {
              }, ["stop"])
            }, [
              ae(e.$slots, "header")
            ], 10, ["onClick"])) : U("v-if", !0),
            Oe(z(p, {
              id: e.contentId,
              ref: "scrollbarRef",
              tag: "ul",
              "wrap-class": e.nsSelect.be("dropdown", "wrap"),
              "view-class": e.nsSelect.be("dropdown", "list"),
              class: j([e.nsSelect.is("empty", e.filteredOptionsCount === 0)]),
              role: "listbox",
              "aria-label": e.ariaLabel,
              "aria-orientation": "vertical",
              onScroll: e.popupScroll
            }, {
              default: ne(() => [
                e.showNewOption ? (R(), ee(u, {
                  key: 0,
                  value: e.states.inputValue,
                  created: !0
                }, null, 8, ["value"])) : U("v-if", !0),
                z(f, null, {
                  default: ne(() => [
                    ae(e.$slots, "default")
                  ]),
                  _: 3
                })
              ]),
              _: 3
            }, 8, ["id", "wrap-class", "view-class", "class", "aria-label", "onScroll"]), [
              [qt, e.states.options.size > 0 && !e.loading]
            ]),
            e.$slots.loading && e.loading ? (R(), G("div", {
              key: 1,
              class: j(e.nsSelect.be("dropdown", "loading"))
            }, [
              ae(e.$slots, "loading")
            ], 2)) : e.loading || e.filteredOptionsCount === 0 ? (R(), G("div", {
              key: 2,
              class: j(e.nsSelect.be("dropdown", "empty"))
            }, [
              ae(e.$slots, "empty", {}, () => [
                O("span", null, V(e.emptyText), 1)
              ])
            ], 2)) : U("v-if", !0),
            e.$slots.footer ? (R(), G("div", {
              key: 3,
              class: j(e.nsSelect.be("dropdown", "footer")),
              onClick: He(() => {
              }, ["stop"])
            }, [
              ae(e.$slots, "footer")
            ], 10, ["onClick"])) : U("v-if", !0)
          ]),
          _: 3
        }, 512)
      ]),
      _: 3
    }, 8, ["visible", "placement", "teleported", "popper-class", "popper-options", "fallback-placements", "effect", "transition", "persistent", "append-to", "show-arrow", "offset", "onBeforeShow", "onHide"])
  ], 16, ["onMouseleave"])), [
    [g, e.handleClickOutside, e.popperRef]
  ]);
}
var k_ = /* @__PURE__ */ Ce(S_, [["render", T_], ["__file", "select.vue"]]);
const O_ = q({
  name: "ElOptionGroup",
  componentName: "ElOptionGroup",
  props: {
    label: String,
    disabled: Boolean
  },
  setup(e) {
    const t = Re("select"), n = x(null), o = Ke(), r = x([]);
    Rt(Gu, wn({
      ...rr(e)
    }));
    const s = P(() => r.value.some((u) => u.visible === !0)), a = (u) => {
      var f, p;
      return ((f = u.type) == null ? void 0 : f.name) === "ElOption" && !!((p = u.component) != null && p.proxy);
    }, i = (u) => {
      const f = un(u), p = [];
      return f.forEach((m) => {
        var g, h;
        a(m) ? p.push(m.component.proxy) : (g = m.children) != null && g.length ? p.push(...i(m.children)) : (h = m.component) != null && h.subTree && p.push(...i(m.component.subTree));
      }), p;
    }, l = () => {
      r.value = i(o.subTree);
    };
    return Pe(() => {
      l();
    }), cg(n, l, {
      attributes: !0,
      subtree: !0,
      childList: !0
    }), {
      groupRef: n,
      visible: s,
      ns: t
    };
  }
});
function L_(e, t, n, o, r, s) {
  return Oe((R(), G("ul", {
    ref: "groupRef",
    class: j(e.ns.be("group", "wrap"))
  }, [
    O("li", {
      class: j(e.ns.be("group", "title"))
    }, V(e.label), 3),
    O("li", null, [
      O("ul", {
        class: j(e.ns.b("group"))
      }, [
        ae(e.$slots, "default")
      ], 2)
    ])
  ], 2)), [
    [qt, e.visible]
  ]);
}
var Yu = /* @__PURE__ */ Ce(O_, [["render", L_], ["__file", "option-group.vue"]]);
const I_ = tn(k_, {
  Option: Ks,
  OptionGroup: Yu
}), P_ = vu(Ks);
vu(Yu);
const Zu = ["success", "info", "warning", "error"], We = yu({
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
  appendTo: Le ? document.body : void 0
}), A_ = _e({
  customClass: {
    type: String,
    default: We.customClass
  },
  center: {
    type: Boolean,
    default: We.center
  },
  dangerouslyUseHTMLString: {
    type: Boolean,
    default: We.dangerouslyUseHTMLString
  },
  duration: {
    type: Number,
    default: We.duration
  },
  icon: {
    type: Bn,
    default: We.icon
  },
  id: {
    type: String,
    default: We.id
  },
  message: {
    type: X([
      String,
      Object,
      Function
    ]),
    default: We.message
  },
  onClose: {
    type: X(Function),
    default: We.onClose
  },
  showClose: {
    type: Boolean,
    default: We.showClose
  },
  type: {
    type: String,
    values: Zu,
    default: We.type
  },
  plain: {
    type: Boolean,
    default: We.plain
  },
  offset: {
    type: Number,
    default: We.offset
  },
  zIndex: {
    type: Number,
    default: We.zIndex
  },
  grouping: {
    type: Boolean,
    default: We.grouping
  },
  repeatNum: {
    type: Number,
    default: We.repeatNum
  }
}), N_ = {
  destroy: () => !0
}, wt = Nc([]), M_ = (e) => {
  const t = wt.findIndex((r) => r.id === e), n = wt[t];
  let o;
  return t > 0 && (o = wt[t - 1]), { current: n, prev: o };
}, R_ = (e) => {
  const { prev: t } = M_(e);
  return t ? t.vm.exposed.bottom.value : 0;
}, $_ = (e, t) => wt.findIndex((o) => o.id === e) > 0 ? 16 : t, D_ = q({
  name: "ElMessage"
}), F_ = /* @__PURE__ */ q({
  ...D_,
  props: A_,
  emits: N_,
  setup(e, { expose: t }) {
    const n = e, { Close: o } = ey, { ns: r, zIndex: s } = pu("message"), { currentZIndex: a, nextZIndex: i } = s, l = x(), u = x(!1), f = x(0);
    let p;
    const m = P(() => n.type ? n.type === "error" ? "danger" : n.type : "info"), g = P(() => {
      const k = n.type;
      return { [r.bm("icon", k)]: k && er[k] };
    }), h = P(() => n.icon || er[n.type] || ""), v = P(() => R_(n.id)), w = P(() => $_(n.id, n.offset) + v.value), d = P(() => f.value + w.value), E = P(() => ({
      top: `${w.value}px`,
      zIndex: a.value
    }));
    function L() {
      n.duration !== 0 && ({ stop: p } = eu(() => {
        T();
      }, n.duration));
    }
    function S() {
      p?.();
    }
    function T() {
      u.value = !1;
    }
    function I({ code: k }) {
      k === Nt.esc && T();
    }
    return Pe(() => {
      L(), i(), u.value = !0;
    }), Q(() => n.repeatNum, () => {
      S(), L();
    }), Et(document, "keydown", I), Lt(l, () => {
      f.value = l.value.getBoundingClientRect().height;
    }), t({
      visible: u,
      bottom: d,
      close: T
    }), (k, $) => (R(), ee(Gn, {
      name: c(r).b("fade"),
      onBeforeLeave: k.onClose,
      onAfterLeave: (C) => k.$emit("destroy"),
      persisted: ""
    }, {
      default: ne(() => [
        Oe(O("div", {
          id: k.id,
          ref_key: "messageRef",
          ref: l,
          class: j([
            c(r).b(),
            { [c(r).m(k.type)]: k.type },
            c(r).is("center", k.center),
            c(r).is("closable", k.showClose),
            c(r).is("plain", k.plain),
            k.customClass
          ]),
          style: Ue(c(E)),
          role: "alert",
          onMouseenter: S,
          onMouseleave: L
        }, [
          k.repeatNum > 1 ? (R(), ee(c(s_), {
            key: 0,
            value: k.repeatNum,
            type: c(m),
            class: j(c(r).e("badge"))
          }, null, 8, ["value", "type", "class"])) : U("v-if", !0),
          c(h) ? (R(), ee(c(ct), {
            key: 1,
            class: j([c(r).e("icon"), c(g)])
          }, {
            default: ne(() => [
              (R(), ee(It(c(h))))
            ]),
            _: 1
          }, 8, ["class"])) : U("v-if", !0),
          ae(k.$slots, "default", {}, () => [
            k.dangerouslyUseHTMLString ? (R(), G(ft, { key: 1 }, [
              U(" Caution here, message could've been compromised, never use user's input as message "),
              O("p", {
                class: j(c(r).e("content")),
                innerHTML: k.message
              }, null, 10, ["innerHTML"])
            ], 2112)) : (R(), G("p", {
              key: 0,
              class: j(c(r).e("content"))
            }, V(k.message), 3))
          ]),
          k.showClose ? (R(), ee(c(ct), {
            key: 2,
            class: j(c(r).e("closeBtn")),
            onClick: He(T, ["stop"])
          }, {
            default: ne(() => [
              z(c(o))
            ]),
            _: 1
          }, 8, ["class", "onClick"])) : U("v-if", !0)
        ], 46, ["id"]), [
          [qt, u.value]
        ])
      ]),
      _: 3
    }, 8, ["name", "onBeforeLeave", "onAfterLeave"]));
  }
});
var x_ = /* @__PURE__ */ Ce(F_, [["__file", "message.vue"]]);
let z_ = 1;
const qu = (e) => {
  const t = !e || pt(e) || lo(e) || Ne(e) ? { message: e } : e, n = {
    ...We,
    ...t
  };
  if (!n.appendTo)
    n.appendTo = document.body;
  else if (pt(n.appendTo)) {
    let o = document.querySelector(n.appendTo);
    Ct(o) || (o = document.body), n.appendTo = o;
  }
  return qo(bt.grouping) && !n.grouping && (n.grouping = bt.grouping), Me(bt.duration) && n.duration === 3e3 && (n.duration = bt.duration), Me(bt.offset) && n.offset === 16 && (n.offset = bt.offset), qo(bt.showClose) && !n.showClose && (n.showClose = bt.showClose), n;
}, B_ = (e) => {
  const t = wt.indexOf(e);
  if (t === -1)
    return;
  wt.splice(t, 1);
  const { handler: n } = e;
  n.close();
}, W_ = ({ appendTo: e, ...t }, n) => {
  const o = `message_${z_++}`, r = t.onClose, s = document.createElement("div"), a = {
    ...t,
    id: o,
    onClose: () => {
      r?.(), B_(f);
    },
    onDestroy: () => {
      Vo(null, s);
    }
  }, i = z(x_, a, Ne(a.message) || lo(a.message) ? {
    default: Ne(a.message) ? a.message : () => a.message
  } : null);
  i.appContext = n || Hn._context, Vo(i, s), e.appendChild(s.firstElementChild);
  const l = i.component, f = {
    id: o,
    vnode: i,
    vm: l,
    handler: {
      close: () => {
        l.exposed.visible.value = !1;
      }
    },
    props: i.component.props
  };
  return f;
}, Hn = (e = {}, t) => {
  if (!Le)
    return { close: () => {
    } };
  const n = qu(e);
  if (n.grouping && wt.length) {
    const r = wt.find(({ vnode: s }) => {
      var a;
      return ((a = s.props) == null ? void 0 : a.message) === n.message;
    });
    if (r)
      return r.props.repeatNum += 1, r.props.type = n.type, r.handler;
  }
  if (Me(bt.max) && wt.length >= bt.max)
    return { close: () => {
    } };
  const o = W_(n, t);
  return wt.push(o), o.handler;
};
Zu.forEach((e) => {
  Hn[e] = (t = {}, n) => {
    const o = qu(t);
    return Hn({ ...o, type: e }, n);
  };
});
function j_(e) {
  for (const t of wt)
    (!e || e === t.props.type) && t.handler.close();
}
Hn.closeAll = j_;
Hn._context = null;
const V_ = hu(Hn, "$message"), Ju = [
  "success",
  "info",
  "warning",
  "error"
], U_ = _e({
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
    type: Bn
  },
  id: {
    type: String,
    default: ""
  },
  message: {
    type: X([
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
    type: X(Function),
    default: () => {
    }
  },
  onClose: {
    type: X(Function),
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
    values: [...Ju, ""],
    default: ""
  },
  zIndex: Number
}), H_ = {
  destroy: () => !0
}, K_ = q({
  name: "ElNotification"
}), G_ = /* @__PURE__ */ q({
  ...K_,
  props: U_,
  emits: H_,
  setup(e, { expose: t }) {
    const n = e, { ns: o, zIndex: r } = pu("notification"), { nextZIndex: s, currentZIndex: a } = r, { Close: i } = Qg, l = x(!1);
    let u;
    const f = P(() => {
      const L = n.type;
      return L && er[n.type] ? o.m(L) : "";
    }), p = P(() => n.type && er[n.type] || n.icon), m = P(() => n.position.endsWith("right") ? "right" : "left"), g = P(() => n.position.startsWith("top") ? "top" : "bottom"), h = P(() => {
      var L;
      return {
        [g.value]: `${n.offset}px`,
        zIndex: (L = n.zIndex) != null ? L : a.value
      };
    });
    function v() {
      n.duration > 0 && ({ stop: u } = eu(() => {
        l.value && d();
      }, n.duration));
    }
    function w() {
      u?.();
    }
    function d() {
      l.value = !1;
    }
    function E({ code: L }) {
      L === Nt.delete || L === Nt.backspace ? w() : L === Nt.esc ? l.value && d() : v();
    }
    return Pe(() => {
      v(), s(), l.value = !0;
    }), Et(document, "keydown", E), t({
      visible: l,
      close: d
    }), (L, S) => (R(), ee(Gn, {
      name: c(o).b("fade"),
      onBeforeLeave: L.onClose,
      onAfterLeave: (T) => L.$emit("destroy"),
      persisted: ""
    }, {
      default: ne(() => [
        Oe(O("div", {
          id: L.id,
          class: j([c(o).b(), L.customClass, c(m)]),
          style: Ue(c(h)),
          role: "alert",
          onMouseenter: w,
          onMouseleave: v,
          onClick: L.onClick
        }, [
          c(p) ? (R(), ee(c(ct), {
            key: 0,
            class: j([c(o).e("icon"), c(f)])
          }, {
            default: ne(() => [
              (R(), ee(It(c(p))))
            ]),
            _: 1
          }, 8, ["class"])) : U("v-if", !0),
          O("div", {
            class: j(c(o).e("group"))
          }, [
            O("h2", {
              class: j(c(o).e("title")),
              textContent: V(L.title)
            }, null, 10, ["textContent"]),
            Oe(O("div", {
              class: j(c(o).e("content")),
              style: Ue(L.title ? void 0 : { margin: 0 })
            }, [
              ae(L.$slots, "default", {}, () => [
                L.dangerouslyUseHTMLString ? (R(), G(ft, { key: 1 }, [
                  U(" Caution here, message could've been compromised, never use user's input as message "),
                  O("p", { innerHTML: L.message }, null, 8, ["innerHTML"])
                ], 2112)) : (R(), G("p", { key: 0 }, V(L.message), 1))
              ])
            ], 6), [
              [qt, L.message]
            ]),
            L.showClose ? (R(), ee(c(ct), {
              key: 0,
              class: j(c(o).e("closeBtn")),
              onClick: He(d, ["stop"])
            }, {
              default: ne(() => [
                z(c(i))
              ]),
              _: 1
            }, 8, ["class", "onClick"])) : U("v-if", !0)
          ], 2)
        ], 46, ["id", "onClick"]), [
          [qt, l.value]
        ])
      ]),
      _: 3
    }, 8, ["name", "onBeforeLeave", "onAfterLeave"]));
  }
});
var Y_ = /* @__PURE__ */ Ce(G_, [["__file", "notification.vue"]]);
const or = {
  "top-left": [],
  "top-right": [],
  "bottom-left": [],
  "bottom-right": []
}, is = 16;
let Z_ = 1;
const Kn = function(e = {}, t) {
  if (!Le)
    return { close: () => {
    } };
  (pt(e) || lo(e)) && (e = { message: e });
  const n = e.position || "top-right";
  let o = e.offset || 0;
  or[n].forEach(({ vm: f }) => {
    var p;
    o += (((p = f.el) == null ? void 0 : p.offsetHeight) || 0) + is;
  }), o += is;
  const r = `notification_${Z_++}`, s = e.onClose, a = {
    ...e,
    offset: o,
    id: r,
    onClose: () => {
      q_(r, n, s);
    }
  };
  let i = document.body;
  Ct(e.appendTo) ? i = e.appendTo : pt(e.appendTo) && (i = document.querySelector(e.appendTo)), Ct(i) || (i = document.body);
  const l = document.createElement("div"), u = z(Y_, a, Ne(a.message) ? a.message : lo(a.message) ? () => a.message : null);
  return u.appContext = $n(t) ? Kn._context : t, u.props.onDestroy = () => {
    Vo(null, l);
  }, Vo(u, l), or[n].push({ vm: u }), i.appendChild(l.firstElementChild), {
    close: () => {
      u.component.exposed.visible.value = !1;
    }
  };
};
Ju.forEach((e) => {
  Kn[e] = (t = {}, n) => ((pt(t) || lo(t)) && (t = {
    message: t
  }), Kn({ ...t, type: e }, n));
});
function q_(e, t, n) {
  const o = or[t], r = o.findIndex(({ vm: u }) => {
    var f;
    return ((f = u.component) == null ? void 0 : f.props.id) === e;
  });
  if (r === -1)
    return;
  const { vm: s } = o[r];
  if (!s)
    return;
  n?.(s);
  const a = s.el.offsetHeight, i = t.split("-")[0];
  o.splice(r, 1);
  const l = o.length;
  if (!(l < 1))
    for (let u = r; u < l; u++) {
      const { el: f, component: p } = o[u].vm, m = Number.parseInt(f.style[i], 10) - a - is;
      p.props.offset = m;
    }
}
function J_() {
  for (const e of Object.values(or))
    e.forEach(({ vm: t }) => {
      t.component.exposed.visible.value = !1;
    });
}
Kn.closeAll = J_;
Kn._context = null;
const X_ = hu(Kn, "$notify"), bn = {
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
      duration: r = 3e3,
      showClose: s = !1
    } = e;
    o === "center" ? V_({
      message: t,
      type: n,
      duration: r,
      showClose: s,
      grouping: !0
    }) : X_({
      message: t,
      type: n,
      position: o,
      duration: r,
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
}, Q_ = {
  class: "title-bar fixed top-0 left-0 right-0 z-10 flex items-center justify-between px-4 py-3",
  "data-tauri-drag-region": ""
}, e1 = { class: "flex items-center gap-3" }, t1 = { class: "title-icon-wrap" }, n1 = { class: "m-0 text-lg font-medium tracking-tight" }, o1 = { class: "content mx-auto max-w-2xl px-5 pt-20 pb-8" }, r1 = { class: "section" }, s1 = { class: "section-title" }, a1 = { class: "mode-selector grid grid-cols-2 gap-3" }, i1 = { class: "mode-option block cursor-pointer h-full" }, l1 = { class: "mode-content mode-system" }, u1 = { class: "mode-icon-wrap" }, c1 = { class: "mode-body" }, d1 = { class: "mode-title" }, f1 = { class: "mode-desc" }, p1 = { class: "mode-option block cursor-pointer h-full" }, m1 = { class: "mode-content mode-light" }, h1 = { class: "mode-icon-wrap" }, v1 = { class: "mode-body" }, g1 = { class: "mode-title" }, y1 = { class: "mode-desc" }, b1 = { class: "mode-option block cursor-pointer h-full" }, _1 = { class: "mode-content mode-dark" }, w1 = { class: "mode-icon-wrap" }, C1 = { class: "mode-body" }, E1 = { class: "mode-title" }, S1 = { class: "mode-desc" }, T1 = { class: "mode-option block cursor-pointer h-full" }, k1 = { class: "mode-content mode-schedule" }, O1 = { class: "mode-icon-wrap" }, L1 = { class: "mode-body" }, I1 = { class: "mode-title" }, P1 = { class: "mode-desc" }, A1 = { class: "section" }, N1 = { class: "status-card" }, M1 = { class: "status-row" }, R1 = { class: "status-label" }, $1 = {
  key: 0,
  class: "status-row"
}, D1 = { class: "status-label" }, F1 = {
  key: 1,
  class: "status-hint"
}, x1 = { class: "section" }, z1 = { class: "section-title" }, B1 = { class: "mode-selector grid grid-cols-2 gap-3" }, W1 = { class: "mode-option block cursor-pointer h-full" }, j1 = { class: "schedule-type-card" }, V1 = { class: "schedule-type-title" }, U1 = { class: "schedule-type-desc" }, H1 = { class: "mode-option block cursor-pointer h-full" }, K1 = { class: "schedule-type-card" }, G1 = { class: "schedule-type-title" }, Y1 = { class: "schedule-type-desc" }, Z1 = {
  key: 0,
  class: "section"
}, q1 = { class: "section-title section-title-with-icon" }, J1 = { class: "inset-card location-card" }, X1 = {
  key: 0,
  class: "loading-hint"
}, Q1 = {
  key: 1,
  class: "location-info"
}, ew = { class: "info-row" }, tw = { class: "info-label" }, nw = { class: "info-value" }, ow = { class: "info-row" }, rw = { class: "info-label" }, sw = { class: "info-value" }, aw = { class: "info-row" }, iw = { class: "info-label" }, lw = { class: "info-value" }, uw = ["disabled"], cw = {
  key: 1,
  class: "section"
}, dw = { class: "section-title" }, fw = { class: "inset-card sun-times-card" }, pw = { class: "sun-row" }, mw = { class: "sun-info" }, hw = { class: "sun-label" }, vw = { class: "sun-value" }, gw = { class: "sun-row" }, yw = { class: "sun-info" }, bw = { class: "sun-label" }, _w = { class: "sun-value" }, ww = { class: "sun-row sun-period" }, Cw = { class: "sun-label" }, Ew = {
  key: 2,
  class: "section"
}, Sw = { class: "inset-card location-card" }, Tw = { class: "info-row" }, kw = { class: "info-value" }, Ow = {
  key: 0,
  class: "info-row"
}, Lw = { class: "info-value" }, Iw = {
  key: 1,
  class: "info-row"
}, Pw = { class: "info-value" }, Aw = {
  key: 2,
  class: "info-row"
}, Nw = { class: "info-value" }, Mw = {
  key: 3,
  class: "info-row"
}, Rw = { class: "info-value" }, $w = {
  key: 3,
  class: "section"
}, Dw = { class: "section-title" }, Fw = { class: "inset-card time-settings" }, xw = { class: "time-row" }, zw = { class: "time-label-text" }, Bw = { class: "time-row" }, Ww = { class: "time-label-text" }, jw = /* @__PURE__ */ q({
  __name: "index",
  setup(e) {
    const { t } = bo(), n = ld(), o = P(() => n.theme === "auto" ? s.value : n.theme === "dark"), r = x({
      theme_mode: "Light",
      schedule_type: "SunBased",
      custom_light_time: "06:00",
      custom_dark_time: "18:00",
      latitude: null,
      longitude: null,
      timezone_offset: null,
      location_name: null
    }), s = x(!1), a = x(!1), i = x(null), l = x(null), u = x(null), f = x(!1), p = x(!1), m = x(!1), g = x(null), h = P(() => {
      const C = u.value?.source || "";
      return C.startsWith("manual:") ? `手动位置（${C.replace("manual:", "")}）` : C.startsWith("ip:") ? `自动定位（${C.replace("ip:", "")}）` : C || "-";
    }), v = async () => {
      try {
        const C = await F("get_dark_mode_config");
        r.value = C, await w();
      } catch (C) {
        Ve.error("[主题] 加载配置失败", C), bn.msg(t("darkMode.loadConfigFailed"), "error");
      }
    }, w = async () => {
      try {
        const C = await F("get_dark_mode_status_command");
        s.value = C.currentIsDark, a.value = C.schedulerRunning, u.value = C.sunCalcDebug ?? null;
      } catch (C) {
        Ve.error("[主题] 加载状态失败", C);
      }
    }, d = async () => {
      f.value = !0;
      try {
        const C = await F("get_location_info");
        i.value = C, r.value.latitude = C.latitude, r.value.longitude = C.longitude, r.value.timezone_offset = C.timezone_offset, r.value.location_name = `${C.city}, ${C.region}`, r.value.schedule_type === "SunBased" && await E(), await I();
      } catch (C) {
        Ve.error("[主题] 获取位置失败", C), bn.msg(t("darkMode.getLocationFailed"), "error");
      } finally {
        await w(), f.value = !1;
      }
    }, E = async () => {
      if (!(!r.value.latitude || !r.value.longitude))
        try {
          const C = await F("calculate_sun_times_command", {
            latitude: r.value.latitude,
            longitude: r.value.longitude,
            timezoneOffset: r.value.timezone_offset || 0
          });
          l.value = C;
        } catch (C) {
          Ve.error("[主题] 计算日出日落时间失败", C);
        }
    }, L = async () => {
      m.value || (await I(), r.value.theme_mode === "Schedule" && r.value.schedule_type === "SunBased" && !i.value && await d());
    }, S = async () => {
      m.value || (r.value.schedule_type === "SunBased" && !i.value && await d(), await I());
    }, T = async () => {
      m.value || r.value.schedule_type === "Custom" && await I();
    }, I = async () => {
      if (!m.value) {
        p.value = !0;
        try {
          await F("save_dark_mode_config_command", { config: r.value }), await w();
        } catch (C) {
          Ve.error("[主题] 保存配置失败", C), bn.msg(t("darkMode.saveConfigFailed"), "error");
        } finally {
          p.value = !1;
        }
      }
    }, k = async () => {
      try {
        const C = await F("toggle_system_theme");
        s.value = C;
        const D = t(C ? "darkMode.darkTheme" : "darkMode.lightTheme");
        let K = t("darkMode.switchedTo", { theme: D });
        r.value.theme_mode === "Schedule" && (K += t("darkMode.autoRestoreNote")), bn.msg(K, "success");
      } catch (C) {
        Ve.error("[主题] 切换主题失败", C), bn.msg(t("darkMode.toggleFailed"), "error");
      }
    }, $ = () => {
      Wr().close();
    };
    return Pe(async () => {
      await v(), r.value.theme_mode === "Schedule" && r.value.schedule_type === "SunBased" && await d(), g.value = await ds("dark-mode-changed", async (C) => {
        Ve.debug(`[主题][窗口:dark_mode] 收到主题变更：${JSON.stringify(C.payload)}`), s.value = C.payload.isDark, m.value = !0;
        try {
          await v(), Ve.debug(`[主题][窗口:dark_mode] 已从后端刷新配置：theme_mode=${r.value.theme_mode}, schedule_type=${r.value.schedule_type}`);
        } finally {
          m.value = !1;
        }
        n.theme === "auto" && n.syncSystemThemeStyle(C.payload.isDark);
      }), Se(() => {
        setTimeout(() => {
          Wr().emit("dark_mode_ready");
        }, 100);
      });
    }), Q(() => r.value.schedule_type, async (C) => {
      C === "SunBased" && r.value.latitude && r.value.longitude && await E();
    }), ls(() => {
      g.value && g.value();
    }), (C, D) => (R(), G(
      "div",
      {
        class: j(["dark-mode-container select-none rounded-lg", { dark: c(o) }])
      },
      [
        U(" 标题栏 "),
        O("div", Q_, [
          O("div", e1, [
            O("div", t1, [
              z(c(Tr), {
                class: "text-xl",
                theme: "filled"
              })
            ]),
            O(
              "h1",
              n1,
              V(C.$t("darkMode.title")),
              1
              /* TEXT */
            )
          ]),
          O("button", {
            type: "button",
            onClick: $,
            class: "close-btn",
            "aria-label": "Close"
          }, [
            z(c(rd), { size: 18 })
          ])
        ]),
        U(" 主要内容 "),
        O("div", o1, [
          U(" 主题模式选择（四选一） "),
          O("div", r1, [
            O(
              "h2",
              s1,
              V(C.$t("darkMode.themeMode")),
              1
              /* TEXT */
            ),
            O("div", a1, [
              O("label", i1, [
                Oe(O(
                  "input",
                  {
                    type: "radio",
                    value: "System",
                    "onUpdate:modelValue": D[0] || (D[0] = (K) => c(r).theme_mode = K),
                    onChange: L,
                    class: "sr-only"
                  },
                  null,
                  544
                  /* NEED_HYDRATION, NEED_PATCH */
                ), [
                  [Ln, c(r).theme_mode]
                ]),
                O("div", l1, [
                  O("span", u1, [
                    z(c(sd), {
                      class: "mode-icon",
                      theme: "filled",
                      size: 22
                    })
                  ]),
                  O("div", c1, [
                    O(
                      "span",
                      d1,
                      V(C.$t("darkMode.systemMode")),
                      1
                      /* TEXT */
                    ),
                    O(
                      "span",
                      f1,
                      V(C.$t("darkMode.systemModeDesc")),
                      1
                      /* TEXT */
                    )
                  ])
                ])
              ]),
              O("label", p1, [
                Oe(O(
                  "input",
                  {
                    type: "radio",
                    value: "Light",
                    "onUpdate:modelValue": D[1] || (D[1] = (K) => c(r).theme_mode = K),
                    onChange: L,
                    class: "sr-only"
                  },
                  null,
                  544
                  /* NEED_HYDRATION, NEED_PATCH */
                ), [
                  [Ln, c(r).theme_mode]
                ]),
                O("div", m1, [
                  O("span", h1, [
                    z(c(ra), {
                      class: "mode-icon",
                      theme: "filled",
                      size: 22
                    })
                  ]),
                  O("div", v1, [
                    O(
                      "span",
                      g1,
                      V(C.$t("darkMode.lightMode")),
                      1
                      /* TEXT */
                    ),
                    O(
                      "span",
                      y1,
                      V(C.$t("darkMode.lightModeDesc")),
                      1
                      /* TEXT */
                    )
                  ])
                ])
              ]),
              O("label", b1, [
                Oe(O(
                  "input",
                  {
                    type: "radio",
                    value: "Dark",
                    "onUpdate:modelValue": D[2] || (D[2] = (K) => c(r).theme_mode = K),
                    onChange: L,
                    class: "sr-only"
                  },
                  null,
                  544
                  /* NEED_HYDRATION, NEED_PATCH */
                ), [
                  [Ln, c(r).theme_mode]
                ]),
                O("div", _1, [
                  O("span", w1, [
                    z(c(Tr), {
                      class: "mode-icon",
                      theme: "filled",
                      size: 22
                    })
                  ]),
                  O("div", C1, [
                    O(
                      "span",
                      E1,
                      V(C.$t("darkMode.darkMode")),
                      1
                      /* TEXT */
                    ),
                    O(
                      "span",
                      S1,
                      V(C.$t("darkMode.darkModeDesc")),
                      1
                      /* TEXT */
                    )
                  ])
                ])
              ]),
              O("label", T1, [
                Oe(O(
                  "input",
                  {
                    type: "radio",
                    value: "Schedule",
                    "onUpdate:modelValue": D[3] || (D[3] = (K) => c(r).theme_mode = K),
                    onChange: L,
                    class: "sr-only"
                  },
                  null,
                  544
                  /* NEED_HYDRATION, NEED_PATCH */
                ), [
                  [Ln, c(r).theme_mode]
                ]),
                O("div", k1, [
                  O("span", O1, [
                    z(c(aa), {
                      class: "mode-icon",
                      theme: "filled",
                      size: 22
                    })
                  ]),
                  O("div", L1, [
                    O(
                      "span",
                      I1,
                      V(C.$t("darkMode.scheduleMode")),
                      1
                      /* TEXT */
                    ),
                    O(
                      "span",
                      P1,
                      V(C.$t("darkMode.scheduleModeDesc")),
                      1
                      /* TEXT */
                    )
                  ])
                ])
              ])
            ])
          ]),
          U(" 当前状态卡片（始终显示） "),
          O("div", A1, [
            O("div", N1, [
              O("div", M1, [
                O(
                  "span",
                  R1,
                  V(C.$t("darkMode.currentTheme")),
                  1
                  /* TEXT */
                ),
                O(
                  "span",
                  {
                    class: j(["status-badge", c(s) ? "badge-dark" : "badge-light"])
                  },
                  V(c(s) ? C.$t("darkMode.darkTheme") : C.$t("darkMode.lightTheme")),
                  3
                  /* TEXT, CLASS */
                )
              ]),
              c(r).theme_mode === "Schedule" ? (R(), G("div", $1, [
                O(
                  "span",
                  D1,
                  V(C.$t("darkMode.schedulerStatus")),
                  1
                  /* TEXT */
                ),
                O(
                  "span",
                  {
                    class: j(["status-badge", c(a) ? "badge-success" : "badge-danger"])
                  },
                  V(c(a) ? C.$t("darkMode.running") : C.$t("darkMode.stopped")),
                  3
                  /* TEXT, CLASS */
                )
              ])) : U("v-if", !0),
              c(r).theme_mode !== "Schedule" ? (R(), G(
                "p",
                F1,
                V(c(r).theme_mode === "System" ? C.$t("darkMode.systemModeDesc") : c(r).theme_mode === "Light" ? C.$t("darkMode.lightModeDesc") : C.$t("darkMode.darkModeDesc")),
                1
                /* TEXT */
              )) : U("v-if", !0),
              O(
                "button",
                {
                  type: "button",
                  onClick: k,
                  class: "btn-primary"
                },
                V(C.$t("darkMode.manualToggle")),
                1
                /* TEXT */
              )
            ])
          ]),
          U(" 定时切换详细设置（仅在Schedule模式下显示） "),
          c(r).theme_mode === "Schedule" ? (R(), G(
            ft,
            { key: 0 },
            [
              U(" 定时类型选择 "),
              O("div", x1, [
                O(
                  "h2",
                  z1,
                  V(C.$t("darkMode.scheduleType")),
                  1
                  /* TEXT */
                ),
                O("div", B1, [
                  O("label", W1, [
                    Oe(O(
                      "input",
                      {
                        type: "radio",
                        value: "SunBased",
                        "onUpdate:modelValue": D[4] || (D[4] = (K) => c(r).schedule_type = K),
                        onChange: S,
                        class: "sr-only"
                      },
                      null,
                      544
                      /* NEED_HYDRATION, NEED_PATCH */
                    ), [
                      [Ln, c(r).schedule_type]
                    ]),
                    O("div", j1, [
                      O("span", V1, [
                        z(c(sa), { size: 18 }),
                        jt(
                          " " + V(C.$t("darkMode.sunBased")),
                          1
                          /* TEXT */
                        )
                      ]),
                      O(
                        "span",
                        U1,
                        V(C.$t("darkMode.sunBasedDesc")),
                        1
                        /* TEXT */
                      )
                    ])
                  ]),
                  O("label", H1, [
                    Oe(O(
                      "input",
                      {
                        type: "radio",
                        value: "Custom",
                        "onUpdate:modelValue": D[5] || (D[5] = (K) => c(r).schedule_type = K),
                        onChange: S,
                        class: "sr-only"
                      },
                      null,
                      544
                      /* NEED_HYDRATION, NEED_PATCH */
                    ), [
                      [Ln, c(r).schedule_type]
                    ]),
                    O("div", K1, [
                      O("span", G1, [
                        z(c(aa), { size: 18 }),
                        jt(
                          " " + V(C.$t("darkMode.customSchedule")),
                          1
                          /* TEXT */
                        )
                      ]),
                      O(
                        "span",
                        Y1,
                        V(C.$t("darkMode.customScheduleDesc")),
                        1
                        /* TEXT */
                      )
                    ])
                  ])
                ])
              ]),
              U(" 位置信息（日出日落模式） "),
              c(r).schedule_type === "SunBased" ? (R(), G("div", Z1, [
                O("h2", q1, [
                  z(c(ad), {
                    theme: "filled",
                    size: 18
                  }),
                  jt(
                    " " + V(C.$t("darkMode.locationInfo")),
                    1
                    /* TEXT */
                  )
                ]),
                O("div", J1, [
                  c(f) ? (R(), G(
                    "div",
                    X1,
                    V(C.$t("darkMode.gettingLocation")),
                    1
                    /* TEXT */
                  )) : c(i) ? (R(), G("div", Q1, [
                    O("div", ew, [
                      O(
                        "span",
                        tw,
                        V(C.$t("darkMode.location")),
                        1
                        /* TEXT */
                      ),
                      O(
                        "span",
                        nw,
                        V(c(i).city) + ", " + V(c(i).region) + ", " + V(c(i).country),
                        1
                        /* TEXT */
                      )
                    ]),
                    O("div", ow, [
                      O(
                        "span",
                        rw,
                        V(C.$t("darkMode.timezone")),
                        1
                        /* TEXT */
                      ),
                      O(
                        "span",
                        sw,
                        V(c(i).timezone),
                        1
                        /* TEXT */
                      )
                    ]),
                    O("div", aw, [
                      O(
                        "span",
                        iw,
                        V(C.$t("darkMode.coordinates")),
                        1
                        /* TEXT */
                      ),
                      O(
                        "span",
                        lw,
                        V(c(i).latitude.toFixed(4)) + ", " + V(c(i).longitude.toFixed(4)),
                        1
                        /* TEXT */
                      )
                    ])
                  ])) : U("v-if", !0),
                  O("button", {
                    type: "button",
                    onClick: d,
                    class: "btn-secondary btn-with-icon mt-3",
                    disabled: c(f)
                  }, [
                    c(f) ? (R(), ee(c(oa), {
                      key: 1,
                      class: "animate-spin",
                      size: 16
                    })) : (R(), ee(c(oa), {
                      key: 0,
                      size: 16
                    })),
                    jt(
                      " " + V(c(f) ? C.$t("darkMode.refreshing") : C.$t("darkMode.refreshLocation")),
                      1
                      /* TEXT */
                    )
                  ], 8, uw)
                ])
              ])) : U("v-if", !0),
              U(" 日出日落时间 "),
              c(r).schedule_type === "SunBased" && c(l) ? (R(), G("div", cw, [
                O(
                  "h2",
                  dw,
                  V(C.$t("darkMode.sunTimes")),
                  1
                  /* TEXT */
                ),
                O("div", fw, [
                  O("div", pw, [
                    z(c(sa), {
                      class: "sun-icon",
                      theme: "filled",
                      size: 20
                    }),
                    O("div", mw, [
                      O(
                        "span",
                        hw,
                        V(C.$t("darkMode.sunrise")),
                        1
                        /* TEXT */
                      ),
                      O(
                        "span",
                        vw,
                        V(c(l).sunrise),
                        1
                        /* TEXT */
                      )
                    ])
                  ]),
                  O("div", gw, [
                    z(c(id), {
                      class: "sun-icon",
                      theme: "filled",
                      size: 20
                    }),
                    O("div", yw, [
                      O(
                        "span",
                        bw,
                        V(C.$t("darkMode.sunset")),
                        1
                        /* TEXT */
                      ),
                      O(
                        "span",
                        _w,
                        V(c(l).sunset),
                        1
                        /* TEXT */
                      )
                    ])
                  ]),
                  D[8] || (D[8] = O(
                    "div",
                    { class: "sun-divider" },
                    null,
                    -1
                    /* HOISTED */
                  )),
                  O("div", ww, [
                    O(
                      "span",
                      Cw,
                      V(C.$t("darkMode.currentPeriod")),
                      1
                      /* TEXT */
                    ),
                    O(
                      "span",
                      {
                        class: j(["sun-value", c(l).is_day ? "period-day" : "period-night"])
                      },
                      V(c(l).is_day ? C.$t("darkMode.daytime") : C.$t("darkMode.nighttime")),
                      3
                      /* TEXT, CLASS */
                    )
                  ])
                ])
              ])) : U("v-if", !0),
              U(" 计算调试信息 "),
              c(r).schedule_type === "SunBased" ? (R(), G("div", Ew, [
                D[14] || (D[14] = O(
                  "h2",
                  { class: "section-title" },
                  "计算依据",
                  -1
                  /* HOISTED */
                )),
                O("div", Sw, [
                  O("div", Tw, [
                    D[9] || (D[9] = O(
                      "span",
                      { class: "info-label" },
                      "来源",
                      -1
                      /* HOISTED */
                    )),
                    O(
                      "span",
                      kw,
                      V(c(h)),
                      1
                      /* TEXT */
                    )
                  ]),
                  c(u)?.latitude !== void 0 && c(u)?.longitude !== void 0 ? (R(), G("div", Ow, [
                    D[10] || (D[10] = O(
                      "span",
                      { class: "info-label" },
                      "计算坐标",
                      -1
                      /* HOISTED */
                    )),
                    O(
                      "span",
                      Lw,
                      V(Number(c(u)?.latitude).toFixed(4)) + ", " + V(Number(c(u)?.longitude).toFixed(4)),
                      1
                      /* TEXT */
                    )
                  ])) : U("v-if", !0),
                  c(u)?.timezoneOffset !== void 0 ? (R(), G("div", Iw, [
                    D[11] || (D[11] = O(
                      "span",
                      { class: "info-label" },
                      "时区偏移(分钟)",
                      -1
                      /* HOISTED */
                    )),
                    O(
                      "span",
                      Pw,
                      V(c(u)?.timezoneOffset),
                      1
                      /* TEXT */
                    )
                  ])) : U("v-if", !0),
                  c(u)?.sunset ? (R(), G("div", Aw, [
                    D[12] || (D[12] = O(
                      "span",
                      { class: "info-label" },
                      "用于切换的日落时间",
                      -1
                      /* HOISTED */
                    )),
                    O(
                      "span",
                      Nw,
                      V(c(u)?.sunset),
                      1
                      /* TEXT */
                    )
                  ])) : U("v-if", !0),
                  c(u)?.error ? (R(), G("div", Mw, [
                    D[13] || (D[13] = O(
                      "span",
                      { class: "info-label" },
                      "错误",
                      -1
                      /* HOISTED */
                    )),
                    O(
                      "span",
                      Rw,
                      V(c(u)?.error),
                      1
                      /* TEXT */
                    )
                  ])) : U("v-if", !0)
                ])
              ])) : U("v-if", !0),
              U(" 自定义时间 "),
              c(r).schedule_type === "Custom" ? (R(), G("div", $w, [
                O(
                  "h2",
                  Dw,
                  V(C.$t("darkMode.customTime")),
                  1
                  /* TEXT */
                ),
                O("div", Fw, [
                  O("label", xw, [
                    O("span", zw, [
                      z(c(ra), {
                        theme: "filled",
                        size: 18
                      }),
                      jt(
                        " " + V(C.$t("darkMode.lightModeStart")),
                        1
                        /* TEXT */
                      )
                    ]),
                    Oe(O(
                      "input",
                      {
                        type: "time",
                        "onUpdate:modelValue": D[6] || (D[6] = (K) => c(r).custom_light_time = K),
                        onChange: T,
                        class: "time-input"
                      },
                      null,
                      544
                      /* NEED_HYDRATION, NEED_PATCH */
                    ), [
                      [Fr, c(r).custom_light_time]
                    ])
                  ]),
                  O("label", Bw, [
                    O("span", Ww, [
                      z(c(Tr), {
                        theme: "filled",
                        size: 18
                      }),
                      jt(
                        " " + V(C.$t("darkMode.darkModeStart")),
                        1
                        /* TEXT */
                      )
                    ]),
                    Oe(O(
                      "input",
                      {
                        type: "time",
                        "onUpdate:modelValue": D[7] || (D[7] = (K) => c(r).custom_dark_time = K),
                        onChange: T,
                        class: "time-input"
                      },
                      null,
                      544
                      /* NEED_HYDRATION, NEED_PATCH */
                    ), [
                      [Fr, c(r).custom_dark_time]
                    ])
                  ])
                ])
              ])) : U("v-if", !0)
            ],
            64
            /* STABLE_FRAGMENT */
          )) : U("v-if", !0)
        ])
      ],
      2
      /* CLASS */
    ));
  }
}), Xu = (e, t) => {
  const n = e.__vccOpts || e;
  for (const [o, r] of t)
    n[o] = r;
  return n;
}, Vw = /* @__PURE__ */ Xu(jw, [["__scopeId", "data-v-aba87ad9"]]), Uw = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Vw
}, Symbol.toStringTag, { value: "Module" }));
async function Hw() {
  try {
    return await F("get_attachment_config");
  } catch (e) {
    throw new Error(`获取附件配置失败: ${e}`);
  }
}
async function Kw(e) {
  try {
    await F("update_attachment_config", { config: e });
  } catch (t) {
    throw new Error(`更新附件配置失败: ${t}`);
  }
}
const Gw = { class: "settings-panel" }, Yw = { class: "panel-header" }, Zw = { class: "panel-title" }, qw = { class: "panel-content" }, Jw = { class: "summarize-section transparent-input" }, Xw = { class: "summarize-label" }, Qw = { class: "summarize-label-title" }, e2 = { class: "summarize-label-desc" }, t2 = { class: "summarize-input-wrapper" }, n2 = { class: "summarize-section transparent-input" }, o2 = { class: "summarize-label" }, r2 = { class: "summarize-label-title" }, s2 = { class: "summarize-label-desc" }, a2 = { class: "summarize-input-wrapper" }, i2 = { class: "summarize-section transparent-input" }, l2 = { class: "summarize-label" }, u2 = { class: "summarize-label-title" }, c2 = { class: "summarize-label-desc" }, d2 = { class: "summarize-input-wrapper" }, f2 = { class: "preview-box" }, p2 = /* @__PURE__ */ q({
  name: "AttachmentSettings",
  __name: "index",
  setup(e) {
    const { t } = bo(), n = x({
      pathTemplate: "assets/${noteFileName}/",
      filenameFormat: "snippets-code"
    }), o = x(!1), r = x(!1), s = P(() => {
      const l = t("settings.attachment.exampleNoteName") || "示例笔记", u = a(n.value.filenameFormat);
      return n.value.pathTemplate.replace("${noteFileName}", l) + u;
    });
    function a(l) {
      const u = /* @__PURE__ */ new Date(), f = u.toISOString().slice(0, 10).replace(/-/g, ""), p = u.toTimeString().slice(0, 8).replace(/:/g, "");
      switch (l) {
        case "snippets-code":
          return `Pasted image ${f}${p}.png`;
        case "simple":
          return `image-${f}-${p}.png`;
        case "uuid":
          return `${crypto.randomUUID()}.png`;
        default:
          return "image.png";
      }
    }
    async function i() {
      if (!r.value) {
        r.value = !0;
        try {
          await Kw(n.value), bn.msg(t("settings.attachment.configSaved"));
        } catch (l) {
          console.error("保存配置失败:", l), bn.msg(t("settings.attachment.configSaveFailed"), "error");
        } finally {
          r.value = !1;
        }
      }
    }
    return Pe(async () => {
      o.value = !0;
      try {
        n.value = await Hw();
      } catch (l) {
        console.error("加载配置失败:", l);
      } finally {
        o.value = !1;
      }
    }), (l, u) => {
      const f = by, p = P_, m = I_;
      return R(), G("div", Gw, [
        U(" 固定标题 "),
        O("div", Yw, [
          O(
            "h3",
            Zw,
            V(l.$t("settings.attachment.title")),
            1
            /* TEXT */
          )
        ]),
        U(" 可滚动内容 "),
        O("main", qw, [
          U(" 附件路径模板 "),
          O("section", Jw, [
            O("div", Xw, [
              O(
                "div",
                Qw,
                V(l.$t("settings.attachment.pathTemplate")),
                1
                /* TEXT */
              ),
              O(
                "div",
                e2,
                V(l.$t("settings.attachment.pathTemplateHint")),
                1
                /* TEXT */
              )
            ]),
            O("div", t2, [
              z(f, {
                class: "summarize-input",
                modelValue: c(n).pathTemplate,
                "onUpdate:modelValue": u[0] || (u[0] = (g) => c(n).pathTemplate = g),
                placeholder: l.$t("settings.attachment.pathTemplatePlaceholder"),
                disabled: c(r),
                onBlur: i
              }, null, 8, ["modelValue", "placeholder", "disabled"])
            ])
          ]),
          U(" 文件名生成格式 "),
          O("section", n2, [
            O("div", o2, [
              O(
                "div",
                r2,
                V(l.$t("settings.attachment.filenameFormat")),
                1
                /* TEXT */
              ),
              O(
                "div",
                s2,
                V(l.$t("settings.attachment.filenameFormatHint")),
                1
                /* TEXT */
              )
            ]),
            O("div", a2, [
              z(m, {
                class: "summarize-input !w-64",
                modelValue: c(n).filenameFormat,
                "onUpdate:modelValue": u[1] || (u[1] = (g) => c(n).filenameFormat = g),
                disabled: c(r),
                onChange: i
              }, {
                default: ne(() => [
                  z(p, {
                    label: l.$t("settings.attachment.formatObsidian"),
                    value: "obsidian"
                  }, null, 8, ["label"]),
                  z(p, {
                    label: l.$t("settings.attachment.formatSimple"),
                    value: "simple"
                  }, null, 8, ["label"]),
                  z(p, {
                    label: l.$t("settings.attachment.formatUuid"),
                    value: "uuid"
                  }, null, 8, ["label"])
                ]),
                _: 1
                /* STABLE */
              }, 8, ["modelValue", "disabled"])
            ])
          ]),
          U(" 路径预览 "),
          O("section", i2, [
            O("div", l2, [
              O(
                "div",
                u2,
                V(l.$t("settings.attachment.pathPreview")),
                1
                /* TEXT */
              ),
              O(
                "div",
                c2,
                V(l.$t("settings.attachment.pathPreviewHint")),
                1
                /* TEXT */
              )
            ]),
            O("div", d2, [
              O("div", f2, [
                O(
                  "code",
                  null,
                  V(c(s)),
                  1
                  /* TEXT */
                )
              ])
            ])
          ])
        ])
      ]);
    };
  }
}), m2 = /* @__PURE__ */ Xu(p2, [["__scopeId", "data-v-52dba400"]]), h2 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: m2
}, Symbol.toStringTag, { value: "Module" }));
export {
  g2 as activate
};
