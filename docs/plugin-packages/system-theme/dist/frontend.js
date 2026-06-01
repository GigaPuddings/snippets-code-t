import * as Tr from "vue";
import { defineAsyncComponent as Ji, hasInjectionContext as Cc, inject as fe, ref as x, reactive as wn, effectScope as Ec, isRef as lo, isReactive as Xi, toRaw as Qi, getCurrentScope as el, onScopeDispose as tl, watch as Q, nextTick as Te, toRefs as ir, markRaw as Sc, computed as P, createVNode as z, shallowRef as dn, onMounted as Ae, onUnmounted as cs, defineComponent as q, h as nl, Text as ol, Fragment as ft, getCurrentInstance as Ke, unref as c, watchEffect as rl, readonly as ds, warn as Tc, provide as Rt, createElementBlock as G, openBlock as R, mergeProps as Dn, renderSlot as ae, createElementVNode as O, toRef as Ut, useAttrs as kc, useSlots as Oc, normalizeStyle as Ue, normalizeClass as j, createCommentVNode as U, createBlock as ee, withCtx as ne, resolveDynamicComponent as It, withModifiers as He, toDisplayString as V, onBeforeUnmount as Ft, Transition as Gn, withDirectives as Le, vShow as qt, onActivated as Lc, onUpdated as Ic, cloneVNode as Pc, Comment as Ac, Teleport as Nc, onBeforeMount as Mc, onDeactivated as Rc, createTextVNode as jt, resolveComponent as gn, resolveDirective as $c, toHandlerKey as Dc, renderList as ta, withKeys as qn, vModelText as zr, shallowReactive as Fc, isVNode as uo, render as Ko, vModelRadio as Ln } from "vue";
const L2 = (e) => {
  e.registerRoute({
    target: "layout",
    path: "/dark-mode",
    name: "DarkMode",
    component: Ji(() => Promise.resolve().then(() => t2))
  }), e.registerWindowShortcut({
    label: "dark_mode"
  });
};
/*!
 * pinia v2.3.1
 * (c) 2025 Eduardo San Martin Morote
 * @license MIT
 */
let sl;
const fs = (e) => sl = e, xc = (
  /* istanbul ignore next */
  Symbol()
);
function Wr(e) {
  return e && typeof e == "object" && Object.prototype.toString.call(e) === "[object Object]" && typeof e.toJSON != "function";
}
var to;
(function(e) {
  e.direct = "direct", e.patchObject = "patch object", e.patchFunction = "patch function";
})(to || (to = {}));
const al = () => {
};
function na(e, t, n, o = al) {
  e.push(t);
  const r = () => {
    const s = e.indexOf(t);
    s > -1 && (e.splice(s, 1), o());
  };
  return !n && el() && tl(r), r;
}
function In(e, ...t) {
  e.slice().forEach((n) => {
    n(...t);
  });
}
const zc = (e) => e(), oa = Symbol(), kr = Symbol();
function Br(e, t) {
  e instanceof Map && t instanceof Map ? t.forEach((n, o) => e.set(o, n)) : e instanceof Set && t instanceof Set && t.forEach(e.add, e);
  for (const n in t) {
    if (!t.hasOwnProperty(n))
      continue;
    const o = t[n], r = e[n];
    Wr(r) && Wr(o) && e.hasOwnProperty(n) && !lo(o) && !Xi(o) ? e[n] = Br(r, o) : e[n] = o;
  }
  return e;
}
const Wc = (
  /* istanbul ignore next */
  Symbol()
);
function Bc(e) {
  return !Wr(e) || !e.hasOwnProperty(Wc);
}
const { assign: on } = Object;
function jc(e) {
  return !!(lo(e) && e.effect);
}
function Vc(e, t, n, o) {
  const { state: r, actions: s, getters: a } = t, i = n.state.value[e];
  let l;
  function u() {
    i || (n.state.value[e] = r ? r() : {});
    const f = ir(n.state.value[e]);
    return on(f, s, Object.keys(a || {}).reduce((p, m) => (p[m] = Sc(P(() => {
      fs(n);
      const g = n._s.get(e);
      return a[m].call(g, g);
    })), p), {}));
  }
  return l = il(e, u, t, n, o, !0), l;
}
function il(e, t, n = {}, o, r, s) {
  let a;
  const i = on({ actions: {} }, n), l = { deep: !0 };
  let u, f, p = [], m = [], g;
  const h = o.state.value[e];
  !s && !h && (o.state.value[e] = {}), x({});
  let v;
  function w($) {
    let C;
    u = f = !1, typeof $ == "function" ? ($(o.state.value[e]), C = {
      type: to.patchFunction,
      storeId: e,
      events: g
    }) : (Br(o.state.value[e], $), C = {
      type: to.patchObject,
      payload: $,
      storeId: e,
      events: g
    });
    const D = v = Symbol();
    Te().then(() => {
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
    al
  );
  function E() {
    a.stop(), p = [], m = [], o._s.delete(e);
  }
  const L = ($, C = "") => {
    if (oa in $)
      return $[kr] = C, $;
    const D = function() {
      fs(o);
      const K = Array.from(arguments), Y = [], se = [];
      function Ce(W) {
        Y.push(W);
      }
      function me(W) {
        se.push(W);
      }
      In(m, {
        args: K,
        name: D[kr],
        store: T,
        after: Ce,
        onError: me
      });
      let oe;
      try {
        oe = $.apply(this && this.$id === e ? this : T, K);
      } catch (W) {
        throw In(se, W), W;
      }
      return oe instanceof Promise ? oe.then((W) => (In(Y, W), W)).catch((W) => (In(se, W), Promise.reject(W))) : (In(Y, oe), oe);
    };
    return D[oa] = !0, D[kr] = C, D;
  }, S = {
    _p: o,
    // _s: scope,
    $id: e,
    $onAction: na.bind(null, m),
    $patch: w,
    $reset: d,
    $subscribe($, C = {}) {
      const D = na(p, $, C.detached, () => K()), K = a.run(() => Q(() => o.state.value[e], (Y) => {
        (C.flush === "sync" ? f : u) && $({
          storeId: e,
          type: to.direct,
          events: g
        }, Y);
      }, on({}, l, C)));
      return D;
    },
    $dispose: E
  }, T = wn(S);
  o._s.set(e, T);
  const k = (o._a && o._a.runWithContext || zc)(() => o._e.run(() => (a = Ec()).run(() => t({ action: L }))));
  for (const $ in k) {
    const C = k[$];
    if (lo(C) && !jc(C) || Xi(C))
      s || (h && Bc(C) && (lo(C) ? C.value = h[$] : Br(C, h[$])), o.state.value[e][$] = C);
    else if (typeof C == "function") {
      const D = L(C, $);
      k[$] = D, i.actions[$] = C;
    }
  }
  return on(T, k), on(Qi(T), k), Object.defineProperty(T, "$state", {
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
function Uc(e, t, n) {
  let o, r;
  const s = typeof t == "function";
  typeof e == "string" ? (o = e, r = s ? n : t) : (r = e, o = e.id);
  function a(i, l) {
    const u = Cc();
    return i = // in test mode, ignore the argument provided as we can always retrieve a
    // pinia instance with getActivePinia()
    i || (u ? fe(xc, null) : null), i && fs(i), i = sl, i._s.has(o) || (s ? il(o, t, r, i) : Vc(o, r, i)), i._s.get(o);
  }
  return a.$id = o, a;
}
function Hc(e, t, n, o) {
  if (typeof t == "function" ? e !== t || !0 : !t.has(e)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
  return n === "m" ? o : n === "a" ? o.call(e) : o ? o.value : t.get(e);
}
function Kc(e, t, n, o, r) {
  if (typeof t == "function" ? e !== t || !0 : !t.has(e)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
  return t.set(e, n), n;
}
var Wo;
const ht = "__TAURI_TO_IPC_KEY__";
function Gc(e, t = !1) {
  return window.__TAURI_INTERNALS__.transformCallback(e, t);
}
async function F(e, t = {}, n) {
  return window.__TAURI_INTERNALS__.invoke(e, t, n);
}
class Yc {
  get rid() {
    return Hc(this, Wo, "f");
  }
  constructor(t) {
    Wo.set(this, void 0), Kc(this, Wo, t);
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
Wo = /* @__PURE__ */ new WeakMap();
const Zc = "snippets-code:developer-mode", ll = "snippets-code:frontend-diagnostics", qc = 240, Jn = "[REDACTED]", Bo = (e) => e.replace(
  /("(?:[^"]*(?:token|password|secret|authorization)[^"]*)"\s*:\s*)("(?:\\.|[^"])*"|[^,\r\n}\]]+)/gi,
  `$1"${Jn}"`
).replace(/\bBearer\s+[A-Za-z0-9._~+/=-]+/gi, `Bearer ${Jn}`).replace(
  /\b(?:gh[pousr]_[A-Za-z0-9_]{12,}|github_pat_[A-Za-z0-9_]{12,})\b/g,
  Jn
).replace(/(https?:\/\/)[^/\s@]+@/gi, `$1${Jn}@`).replace(
  /([?&][^=&\s]*(?:token|password|secret|authorization)[^=&\s]*=)[^&\s]+/gi,
  `$1${Jn}`
), ul = (e) => {
  if (e === void 0) return;
  if (typeof e == "string") return Bo(e);
  const t = /* @__PURE__ */ new WeakSet();
  try {
    return Bo(
      JSON.stringify(
        e,
        (n, o) => {
          if (o instanceof Error)
            return {
              name: o.name,
              message: o.message,
              stack: o.stack,
              cause: o.cause
            };
          if (typeof o == "bigint") return o.toString();
          if (typeof o == "object" && o !== null) {
            if (t.has(o)) return "[Circular]";
            t.add(o);
          }
          return o;
        },
        2
      )
    );
  } catch {
    return Bo(String(e));
  }
}, Jc = () => {
  try {
    return globalThis.__TAURI_INTERNALS__?.metadata?.currentWindow?.label ?? "webview";
  } catch {
    return "webview";
  }
}, Xc = () => {
  if (typeof localStorage > "u") return [];
  try {
    const e = JSON.parse(localStorage.getItem(ll) || "[]");
    return Array.isArray(e) ? e : [];
  } catch {
    return [];
  }
}, cl = () => {
  if (typeof localStorage > "u") return !1;
  try {
    return localStorage.getItem(Zc) === "true";
  } catch {
    return !1;
  }
}, Qc = (e, t, n) => {
  if (!cl() && e !== "warn" && e !== "error" || typeof localStorage > "u") return;
  const o = Xc();
  o.push({
    timestamp: (/* @__PURE__ */ new Date()).toISOString(),
    level: e,
    windowLabel: Jc(),
    message: Bo(t),
    data: ul(n)
  });
  try {
    localStorage.setItem(
      ll,
      JSON.stringify(o.slice(-qc))
    );
  } catch {
  }
}, ed = () => cl(), Po = (e, t, n) => {
  Qc(e, t, n), F("frontend_log", {
    level: e,
    message: t,
    data: n === void 0 ? null : ul(n)
  }).catch(() => {
  });
}, be = {
  info: (e, t, ...n) => {
    Po("info", e, t);
  },
  error: (e, t) => {
    Po("error", e, t);
  },
  warn: (e, t) => {
    Po("warn", e, t);
  },
  debug: (e, t) => {
    ed() && Po("debug", e, t);
  }
};
var rt;
(function(e) {
  e.WINDOW_RESIZED = "tauri://resize", e.WINDOW_MOVED = "tauri://move", e.WINDOW_CLOSE_REQUESTED = "tauri://close-requested", e.WINDOW_DESTROYED = "tauri://destroyed", e.WINDOW_FOCUS = "tauri://focus", e.WINDOW_BLUR = "tauri://blur", e.WINDOW_SCALE_FACTOR_CHANGED = "tauri://scale-change", e.WINDOW_THEME_CHANGED = "tauri://theme-changed", e.WINDOW_CREATED = "tauri://window-created", e.WEBVIEW_CREATED = "tauri://webview-created", e.DRAG_ENTER = "tauri://drag-enter", e.DRAG_OVER = "tauri://drag-over", e.DRAG_DROP = "tauri://drag-drop", e.DRAG_LEAVE = "tauri://drag-leave";
})(rt || (rt = {}));
async function dl(e, t) {
  await F("plugin:event|unlisten", {
    event: e,
    eventId: t
  });
}
async function ps(e, t, n) {
  var o;
  const r = typeof n?.target == "string" ? { kind: "AnyLabel", label: n.target } : (o = n?.target) !== null && o !== void 0 ? o : { kind: "Any" };
  return F("plugin:event|listen", {
    event: e,
    target: r,
    handler: Gc(t)
  }).then((s) => async () => dl(e, s));
}
async function td(e, t, n) {
  return ps(e, (o) => {
    dl(e, o.id), t(o);
  }, n);
}
async function nd(e, t) {
  await F("plugin:event|emit", {
    event: e,
    payload: t
  });
}
async function od(e, t, n) {
  await F("plugin:event|emit_to", {
    target: typeof e == "string" ? { kind: "AnyLabel", label: e } : e,
    event: t,
    payload: n
  });
}
const rd = (e, t, n, o) => ({
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
}), sn = (e) => typeof e == "object" && e !== null, sd = (e) => sn(e) && "manifest" in e && sn(e.manifest) ? {
  manifest: e.manifest,
  packagePath: typeof e.packagePath == "string" ? e.packagePath : void 0,
  installedAt: typeof e.installedAt == "string" ? e.installedAt : void 0
} : { manifest: e }, ad = (e) => typeof e == "string" && ["capture", "automation", "search", "sync", "editor", "appearance"].includes(e), id = (e) => {
  if (!sn(e) || e.schemaVersion !== 1 || typeof e.id != "string" || !e.id.trim() || typeof e.version != "string" || !e.version.trim() || e.kind !== "builtin" && e.kind !== "local" || !sn(e.name) || typeof e.name.i18nKey != "string" || typeof e.name.fallback != "string" || !sn(e.description) || typeof e.description.i18nKey != "string" || typeof e.description.fallback != "string" || !ad(e.category) || typeof e.enabledByDefault != "boolean") return null;
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
}, ld = (e) => e.map((t) => {
  const { manifest: n, packagePath: o, installedAt: r } = sd(t), s = id(n);
  if (!s) return null;
  const a = {
    manifest: s,
    packagePath: o ?? ""
  };
  return r && (a.installedAt = r), a;
}).filter((t) => t !== null), ud = (e = []) => {
  const t = [], n = ld(e).map((s) => rd(
    s.manifest,
    "local",
    s.packagePath || void 0,
    s.installedAt
  )).sort(cd), o = [
    ...t,
    ...n
  ], r = /* @__PURE__ */ new Map();
  for (const s of o)
    r.has(s.id) || r.set(s.id, s);
  return Array.from(r.values());
}, ra = (e) => {
  const t = e.installedAt ? Date.parse(e.installedAt) : NaN;
  return Number.isFinite(t) ? t : 0;
}, cd = (e, t) => {
  const n = ra(t) - ra(e);
  return n !== 0 ? n : String(e.id).localeCompare(String(t.id));
}, fl = ud();
fl.filter((e) => e.source === "builtin");
const pl = fl;
pl.map((e) => e.id);
pl.reduce((e, t) => (e[t.id] = t.enabledByDefault, e), {});
var dd = {
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
function fd() {
  return "icon-" + ((1 + Math.random()) * 4294967296 | 0).toString(16).substring(1);
}
function pd(e, t, n) {
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
var md = Symbol("icon-context");
function Xt(e, t, n) {
  var o = {
    name: "icon-" + e,
    props: ["size", "strokeWidth", "strokeLinecap", "strokeLinejoin", "theme", "fill", "spin"],
    setup: function(s) {
      var a = fd(), i = fe(md, dd);
      return function() {
        var l = s.size, u = s.strokeWidth, f = s.strokeLinecap, p = s.strokeLinejoin, m = s.theme, g = s.fill, h = s.spin, v = pd(a, {
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
const hd = Xt("close", !1, function(e) {
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
}), vd = Xt("computer", !1, function(e) {
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
}), gd = Xt("local", !1, function(e) {
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
}), Or = Xt("moon", !0, function(e) {
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
}), sa = Xt("refresh", !0, function(e) {
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
}), aa = Xt("sun-one", !1, function(e) {
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
}), ia = Xt("sunrise", !0, function(e) {
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
}), yd = Xt("sunset", !1, function(e) {
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
}), la = Xt("time", !0, function(e) {
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
Ji(() => Promise.resolve().then(() => k2));
const bd = /* @__PURE__ */ Uc("configuration", {
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
        be.error("获取数据库路径失败:", e);
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
        be.error("获取快捷键配置失败:", e);
      }
      try {
        this.autoUpdateCheck = await F("get_auto_update_check");
      } catch (e) {
        be.error("获取自动检查失败:", e);
      }
      try {
        this.autoHideOnBlur = await F("get_auto_hide_on_blur");
      } catch (e) {
        be.error("获取自动失焦隐藏设置:", e);
      }
      try {
        const e = await F("get_language");
        e && (e === "zh-CN" || e === "en-US") && (this.language = e);
      } catch (e) {
        be.error("获取语言设置失败:", e);
      }
    },
    // 更新主题并立即应用
    updateTheme(e) {
      be.debug(`[主题][Store] 更新主题并立即应用：newTheme=${e}`), this.theme = e, this.applyTheme();
    },
    // 应用主题到DOM，并同步 systemPrefersDark 供组件响应式使用
    applyTheme() {
      const e = document.documentElement, t = window.matchMedia("(prefers-color-scheme: dark)").matches;
      be.debug(`[主题][Store] 应用主题到 DOM：theme=${this.theme}, prefersDark=${t}`), this.theme === "auto" && (this.systemPrefersDark = t), this.theme === "dark" || this.theme === "auto" && t ? (e.classList.add("dark"), be.debug("[主题][Store] applyTheme：添加 dark 类")) : (e.classList.remove("dark"), be.debug("[主题][Store] applyTheme：移除 dark 类"));
    },
    // 同步系统主题样式（仅在 auto 模式下生效，不修改 store.theme）
    // 用于响应 Windows 系统主题变化
    syncSystemThemeStyle(e) {
      be.debug(`[主题][Store] 同步系统主题样式：isDark=${e}, store.theme=${this.theme}`);
      let t = this.theme;
      try {
        const n = localStorage.getItem("configuration");
        if (n) {
          const o = JSON.parse(n);
          o.theme && (t = o.theme, this.theme = t);
        }
      } catch (n) {
        be.error("从 localStorage 同步主题失败:", n);
      }
      if (be.debug(`[主题][Store] syncSystemThemeStyle：currentTheme=${t}, isDark=${e}`), t === "auto") {
        this.systemPrefersDark = e;
        const n = document.documentElement;
        e ? (n.classList.add("dark"), be.debug("[主题][Store] 添加 dark 类到 <html>")) : (n.classList.remove("dark"), be.debug("[主题][Store] 从 <html> 移除 dark 类"));
      } else
        be.debug(`[主题][Store] currentTheme=${t} 非 auto，跳过 dark 类切换`);
    }
  },
  persist: {
    pick: ["theme", "dbPath"]
  }
});
class ml {
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
    return new no(this.width * t, this.height * t);
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
class no {
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
    return new ml(this.width / t, this.height / t);
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
    return this.size instanceof ml ? this.size : this.size.toLogical(t);
  }
  toPhysical(t) {
    return this.size instanceof no ? this.size : this.size.toPhysical(t);
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
class hl {
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
    return new hl(this.x / t, this.y / t);
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
class Ao {
  constructor(t) {
    this.position = t;
  }
  toLogical(t) {
    return this.position instanceof hl ? this.position : this.position.toLogical(t);
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
class oo extends Yc {
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
      rgba: Go(t),
      width: n,
      height: o
    }).then((r) => new oo(r));
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
      bytes: Go(t)
    }).then((n) => new oo(n));
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
    return F("plugin:image|from_path", { path: t }).then((n) => new oo(n));
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
function Go(e) {
  return e == null ? null : typeof e == "string" ? e : e instanceof oo ? e.rid : e;
}
var jr;
(function(e) {
  e[e.Critical = 1] = "Critical", e[e.Informational = 2] = "Informational";
})(jr || (jr = {}));
class _d {
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
var ua;
(function(e) {
  e.None = "none", e.Normal = "normal", e.Indeterminate = "indeterminate", e.Paused = "paused", e.Error = "error";
})(ua || (ua = {}));
function Vr() {
  return new vl(window.__TAURI_INTERNALS__.metadata.currentWindow.label, {
    // @ts-expect-error `skip` is not defined in the public API but it is handled by the constructor
    skip: !0
  });
}
async function Lr() {
  return F("plugin:window|get_all_windows").then((e) => e.map((t) => new vl(t, {
    // @ts-expect-error `skip` is not defined in the public API but it is handled by the constructor
    skip: !0
  })));
}
const Ir = ["tauri://created", "tauri://error"];
class vl {
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
    return (n = (await Lr()).find((o) => o.label === t)) !== null && n !== void 0 ? n : null;
  }
  /**
   * Get an instance of `Window` for the current window.
   */
  static getCurrent() {
    return Vr();
  }
  /**
   * Gets a list of instances of `Window` for all available windows.
   */
  static async getAll() {
    return Lr();
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
    for (const t of await Lr())
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
    } : ps(t, n, {
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
    } : td(t, n, {
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
    if (Ir.includes(t)) {
      for (const o of this.listeners[t] || [])
        o({
          event: t,
          id: -1,
          payload: n
        });
      return;
    }
    return nd(t, n);
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
    if (Ir.includes(n)) {
      for (const r of this.listeners[n] || [])
        r({
          event: n,
          id: -1,
          payload: o
        });
      return;
    }
    return od(t, n, o);
  }
  /** @ignore */
  _handleTauriEvent(t, n) {
    return Ir.includes(t) ? (t in this.listeners ? this.listeners[t].push(n) : this.listeners[t] = [n], !0) : !1;
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
    }).then((t) => new no(t));
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
    }).then((t) => new no(t));
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
    return t && (t === jr.Critical ? n = { type: "Critical" } : n = { type: "Informational" }), F("plugin:window|request_user_attention", {
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
      value: t instanceof Ao ? t : new Ao(t)
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
      value: Go(t)
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
      value: t instanceof Ao ? t : new Ao(t)
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
      value: t ? Go(t) : void 0
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
      n.payload = new no(n.payload), t(n);
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
      const o = new _d(n);
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
var ca;
(function(e) {
  e.Disabled = "disabled", e.Throttle = "throttle", e.Suspend = "suspend";
})(ca || (ca = {}));
var da;
(function(e) {
  e.AppearanceBased = "appearanceBased", e.Light = "light", e.Dark = "dark", e.MediumLight = "mediumLight", e.UltraDark = "ultraDark", e.Titlebar = "titlebar", e.Selection = "selection", e.Menu = "menu", e.Popover = "popover", e.Sidebar = "sidebar", e.HeaderView = "headerView", e.Sheet = "sheet", e.WindowBackground = "windowBackground", e.HudWindow = "hudWindow", e.FullScreenUI = "fullScreenUI", e.Tooltip = "tooltip", e.ContentBackground = "contentBackground", e.UnderWindowBackground = "underWindowBackground", e.UnderPageBackground = "underPageBackground", e.Mica = "mica", e.Blur = "blur", e.Acrylic = "acrylic", e.Tabbed = "tabbed", e.TabbedDark = "tabbedDark", e.TabbedLight = "tabbedLight";
})(da || (da = {}));
var fa;
(function(e) {
  e.FollowsWindowActiveState = "followsWindowActiveState", e.Active = "active", e.Inactive = "inactive";
})(fa || (fa = {}));
/*!
  * shared v11.2.2
  * (c) 2025 kazuya kawaguchi
  * Released under the MIT License.
  */
function wd(e, t) {
  typeof console < "u" && (console.warn("[intlify] " + e), t && console.warn(t.stack));
}
const pa = typeof window < "u", Sn = (e, t = !1) => t ? Symbol.for(e) : Symbol(e), Cd = (e, t, n) => Ed({ l: e, k: t, s: n }), Ed = (e) => JSON.stringify(e).replace(/\u2028/g, "\\u2028").replace(/\u2029/g, "\\u2029").replace(/\u0027/g, "\\u0027"), Ne = (e) => typeof e == "number" && isFinite(e), Sd = (e) => ms(e) === "[object Date]", Yo = (e) => ms(e) === "[object RegExp]", lr = (e) => le(e) && Object.keys(e).length === 0, Fe = Object.assign, Td = Object.create, ge = (e = null) => Td(e);
let ma;
const jo = () => ma || (ma = typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : typeof window < "u" ? window : typeof global < "u" ? global : ge());
function ha(e) {
  return e.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;").replace(/'/g, "&apos;").replace(/\//g, "&#x2F;").replace(/=/g, "&#x3D;");
}
function va(e) {
  return e.replace(/&(?![a-zA-Z0-9#]{2,6};)/g, "&amp;").replace(/"/g, "&quot;").replace(/'/g, "&apos;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
}
function kd(e) {
  return e = e.replace(/(\w+)\s*=\s*"([^"]*)"/g, (o, r, s) => `${r}="${va(s)}"`), e = e.replace(/(\w+)\s*=\s*'([^']*)'/g, (o, r, s) => `${r}='${va(s)}'`), /\s*on\w+\s*=\s*["']?[^"'>]+["']?/gi.test(e) && (e = e.replace(/(\s+)(on)(\w+\s*=)/gi, "$1&#111;n$3")), [
    // In href, src, action, formaction attributes
    /(\s+(?:href|src|action|formaction)\s*=\s*["']?)\s*javascript:/gi,
    // In style attributes within url()
    /(style\s*=\s*["'][^"']*url\s*\(\s*)javascript:/gi
  ].forEach((o) => {
    e = e.replace(o, "$1javascript&#58;");
  }), e;
}
const Od = Object.prototype.hasOwnProperty;
function _t(e, t) {
  return Od.call(e, t);
}
const Oe = Array.isArray, _e = (e) => typeof e == "function", Z = (e) => typeof e == "string", ke = (e) => typeof e == "boolean", ue = (e) => e !== null && typeof e == "object", Ld = (e) => ue(e) && _e(e.then) && _e(e.catch), gl = Object.prototype.toString, ms = (e) => gl.call(e), le = (e) => ms(e) === "[object Object]", Id = (e) => e == null ? "" : Oe(e) || le(e) && e.toString === gl ? JSON.stringify(e, null, 2) : String(e);
function hs(e, t = "") {
  return e.reduce((n, o, r) => r === 0 ? n + o : n + t + o, "");
}
const No = (e) => !ue(e) || Oe(e);
function Vo(e, t) {
  if (No(e) || No(t))
    throw new Error("Invalid value");
  const n = [{ src: e, des: t }];
  for (; n.length; ) {
    const { src: o, des: r } = n.pop();
    Object.keys(o).forEach((s) => {
      s !== "__proto__" && (ue(o[s]) && !ue(r[s]) && (r[s] = Array.isArray(o[s]) ? [] : ge()), No(r[s]) || No(o[s]) ? r[s] = o[s] : n.push({ src: o[s], des: r[s] }));
    });
  }
}
/*!
  * message-compiler v11.2.2
  * (c) 2025 kazuya kawaguchi
  * Released under the MIT License.
  */
function Pd(e, t, n) {
  return { line: e, column: t, offset: n };
}
function Ur(e, t, n) {
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
}, Ad = 17;
function ur(e, t, n = {}) {
  const { domain: o, messages: r, args: s } = n, a = e, i = new SyntaxError(String(a));
  return i.code = e, t && (i.location = t), i.domain = o, i;
}
function Nd(e) {
  throw e;
}
const kt = " ", Md = "\r", Ve = `
`, Rd = "\u2028", $d = "\u2029";
function Dd(e) {
  const t = e;
  let n = 0, o = 1, r = 1, s = 0;
  const a = (k) => t[k] === Md && t[k + 1] === Ve, i = (k) => t[k] === Ve, l = (k) => t[k] === $d, u = (k) => t[k] === Rd, f = (k) => a(k) || i(k) || l(k) || u(k), p = () => n, m = () => o, g = () => r, h = () => s, v = (k) => a(k) || l(k) || u(k) ? Ve : t[k], w = () => v(n), d = () => v(n + s);
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
const zt = void 0, Fd = ".", ga = "'", xd = "tokenizer";
function zd(e, t = {}) {
  const n = t.location !== !1, o = Dd(e), r = () => o.index(), s = () => Pd(o.line(), o.column(), o.index()), a = s(), i = r(), l = {
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
      const J = n ? Ur(ie.startLoc, _) : null, y = ur(b, J, {
        domain: xd,
        args: H
      });
      f(y);
    }
  }
  function m(b, _, M) {
    b.endLoc = s(), b.currentType = _;
    const H = { type: _ };
    return n && (H.loc = Ur(b.startLoc, b.endLoc)), M != null && (H.value = M), H;
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
    for (; b.currentPeek() === kt || b.currentPeek() === Ve; )
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
    const H = b.currentPeek() === ga;
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
      return J === "{" ? d(b.peek()) : J === "@" || J === "|" || J === ":" || J === "." || J === kt || !J ? !1 : J === Ve ? (b.peek(), H()) : K(b, !1);
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
      return y === "{" || y === "@" || !y ? ie : y === "|" ? !(J === kt || J === Ve) : y === kt ? (b.peek(), M(!0, kt)) : y === Ve ? (b.peek(), M(!0, Ve)) : !0;
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
  function Ce(b) {
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
  function W(b) {
    const _ = b.charCodeAt(0);
    return _ >= 48 && _ <= 57;
  }
  function he(b) {
    return Y(b, W);
  }
  function pe(b) {
    const _ = b.charCodeAt(0);
    return _ >= 48 && _ <= 57 || // 0-9
    _ >= 65 && _ <= 70 || // A-F
    _ >= 97 && _ <= 102;
  }
  function Se(b) {
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
      if (M === kt || M === Ve)
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
    if (H && H !== "}" && H !== zt && H !== kt && H !== Ve && H !== "　") {
      const ie = it(b);
      return p(de.INVALID_TOKEN_IN_PLACEHOLDER, s(), 0, M + ie), M + ie;
    }
    return b.currentChar() === zt && p(de.UNTERMINATED_CLOSING_BRACE, s(), 0), M;
  }
  function xe(b) {
    w(b);
    let _ = "";
    return b.currentChar() === "-" ? (b.next(), _ += `-${Ge(b)}`) : _ += Ge(b), b.currentChar() === zt && p(de.UNTERMINATED_CLOSING_BRACE, s(), 0), _;
  }
  function De(b) {
    return b !== ga && b !== Ve;
  }
  function ze(b) {
    w(b), h(b, "'");
    let _ = "", M = "";
    for (; _ = Y(b, De); )
      _ === "\\" ? M += We(b) : M += _;
    const H = b.currentChar();
    return H === Ve || H === zt ? (p(de.UNTERMINATED_SINGLE_QUOTE_IN_PLACEHOLDER, s(), 0), H === Ve && (b.next(), h(b, "'")), M) : (h(b, "'"), M);
  }
  function We(b) {
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
      const J = Se(b);
      if (!J) {
        p(de.INVALID_UNICODE_ESCAPE_SEQUENCE, s(), 0, `\\${_}${H}${b.currentChar()}`);
        break;
      }
      H += J;
    }
    return `\\${_}${H}`;
  }
  function Xe(b) {
    return b !== "{" && b !== "}" && b !== kt && b !== Ve;
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
    for (; _ = Ce(b); )
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
          return M = m(_, 5, xe(b)), w(b), M;
        if (y = T(b, _))
          return M = m(_, 6, ze(b)), w(b), M;
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
    switch ((M === 7 || M === 8 || M === 11 || M === 9) && (ie === Ve || ie === kt) && p(de.INVALID_LINKED_FORMAT, s(), 0), ie) {
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
const Wd = "parser", Bd = /(?:\\\\|\\'|\\u([0-9a-fA-F]{4})|\\U([0-9a-fA-F]{6}))/g;
function jd(e, t, n) {
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
function Vd(e = {}) {
  const t = e.location !== !1, { onError: n } = e;
  function o(d, E, L, S, ...T) {
    const I = d.currentPosition();
    if (I.offset += S, I.column += S, n) {
      const k = t ? Ur(L, I) : null, $ = ur(E, k, {
        domain: Wd,
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
    return I.value = E.replace(Bd, jd), d.nextToken(), s(I, d.currentOffset(), d.currentPosition()), I;
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
    const E = zd(d, Fe({}, e)), L = E.context(), S = r(0, L.offset, L.startLoc);
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
function Ud(e, t = {}) {
  const n = {
    ast: e,
    helpers: /* @__PURE__ */ new Set()
  };
  return { context: () => n, helper: (s) => (n.helpers.add(s), s) };
}
function ya(e, t) {
  for (let n = 0; n < e.length; n++)
    vs(e[n], t);
}
function vs(e, t) {
  switch (e.type) {
    case 1:
      ya(e.cases, t), t.helper(
        "plural"
        /* HelperNameMap.PLURAL */
      );
      break;
    case 2:
      ya(e.items, t);
      break;
    case 6: {
      vs(e.key, t), t.helper(
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
function Hd(e, t = {}) {
  const n = Ud(e);
  n.helper(
    "normalize"
    /* HelperNameMap.NORMALIZE */
  ), e.body && vs(e.body, n);
  const o = n.context();
  e.helpers = Array.from(o.helpers);
}
function Kd(e) {
  const t = e.body;
  return t.type === 2 ? ba(t) : t.cases.forEach((n) => ba(n)), e;
}
function ba(e) {
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
      e.static = hs(t);
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
function Gd(e, t) {
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
function Yd(e, t) {
  const { helper: n } = e;
  e.push(`${n(
    "linked"
    /* HelperNameMap.LINKED */
  )}(`), Fn(e, t.key), t.modifier ? (e.push(", "), Fn(e, t.modifier), e.push(", _type")) : e.push(", undefined, _type"), e.push(")");
}
function Zd(e, t) {
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
function qd(e, t) {
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
function Jd(e, t) {
  t.body ? Fn(e, t.body) : e.push("null");
}
function Fn(e, t) {
  const { helper: n } = e;
  switch (t.type) {
    case 0:
      Jd(e, t);
      break;
    case 1:
      qd(e, t);
      break;
    case 2:
      Zd(e, t);
      break;
    case 6:
      Yd(e, t);
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
const Xd = (e, t = {}) => {
  const n = Z(t.mode) ? t.mode : "normal", o = Z(t.filename) ? t.filename : "message.intl";
  t.sourceMap;
  const r = t.breakLineCode != null ? t.breakLineCode : n === "arrow" ? ";" : `
`, s = t.needIndent ? t.needIndent : n !== "arrow", a = e.helpers || [], i = Gd(e, {
    filename: o,
    breakLineCode: r,
    needIndent: s
  });
  i.push(n === "normal" ? "function __msg__ (ctx) {" : "(ctx) => {"), i.indent(s), a.length > 0 && (i.push(`const { ${hs(a.map((f) => `${f}: _${f}`), ", ")} } = ctx`), i.newline()), i.push("return "), Fn(i, e), i.deindent(s), i.push("}"), delete e.helpers;
  const { code: l, map: u } = i.context();
  return {
    ast: e,
    code: l,
    map: u ? u.toJSON() : void 0
    // eslint-disable-line @typescript-eslint/no-explicit-any
  };
};
function Qd(e, t = {}) {
  const n = Fe({}, t), o = !!n.jit, r = !!n.minify, s = n.optimize == null ? !0 : n.optimize, i = Vd(n).parse(e);
  return o ? (s && Kd(i), r && Mn(i), { ast: i, code: "" }) : (Hd(i, n), Xd(i, n));
}
/*!
  * core-base v11.2.2
  * (c) 2025 kazuya kawaguchi
  * Released under the MIT License.
  */
function ef() {
  typeof __INTLIFY_DROP_MESSAGE_COMPILER__ != "boolean" && (jo().__INTLIFY_DROP_MESSAGE_COMPILER__ = !1);
}
function At(e) {
  return ue(e) && gs(e) === 0 && (_t(e, "b") || _t(e, "body"));
}
const yl = ["b", "body"];
function tf(e) {
  return pn(e, yl);
}
const bl = ["c", "cases"];
function nf(e) {
  return pn(e, bl, []);
}
const _l = ["s", "static"];
function of(e) {
  return pn(e, _l);
}
const wl = ["i", "items"];
function rf(e) {
  return pn(e, wl, []);
}
const Cl = ["t", "type"];
function gs(e) {
  return pn(e, Cl);
}
const El = ["v", "value"];
function Mo(e, t) {
  const n = pn(e, El);
  if (n != null)
    return n;
  throw co(t);
}
const Sl = ["m", "modifier"];
function sf(e) {
  return pn(e, Sl);
}
const Tl = ["k", "key"];
function af(e) {
  const t = pn(e, Tl);
  if (t)
    return t;
  throw co(
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
const kl = [
  ...yl,
  ...bl,
  ..._l,
  ...wl,
  ...Tl,
  ...Sl,
  ...El,
  ...Cl
];
function co(e) {
  return new Error(`unhandled node type: ${e}`);
}
function Pr(e) {
  return (n) => lf(n, e);
}
function lf(e, t) {
  const n = tf(t);
  if (n == null)
    throw co(
      0
      /* NodeTypes.Resource */
    );
  if (gs(n) === 1) {
    const s = nf(n);
    return e.plural(s.reduce((a, i) => [
      ...a,
      _a(e, i)
    ], []));
  } else
    return _a(e, n);
}
function _a(e, t) {
  const n = of(t);
  if (n != null)
    return e.type === "text" ? n : e.normalize([n]);
  {
    const o = rf(t).reduce((r, s) => [...r, Hr(e, s)], []);
    return e.normalize(o);
  }
}
function Hr(e, t) {
  const n = gs(t);
  switch (n) {
    case 3:
      return Mo(t, n);
    case 9:
      return Mo(t, n);
    case 4: {
      const o = t;
      if (_t(o, "k") && o.k)
        return e.interpolate(e.named(o.k));
      if (_t(o, "key") && o.key)
        return e.interpolate(e.named(o.key));
      throw co(n);
    }
    case 5: {
      const o = t;
      if (_t(o, "i") && Ne(o.i))
        return e.interpolate(e.list(o.i));
      if (_t(o, "index") && Ne(o.index))
        return e.interpolate(e.list(o.index));
      throw co(n);
    }
    case 6: {
      const o = t, r = sf(o), s = af(o);
      return e.linked(Hr(e, s), r ? Hr(e, r) : void 0, e.type);
    }
    case 7:
      return Mo(t, n);
    case 8:
      return Mo(t, n);
    default:
      throw new Error(`unhandled node on format message part: ${n}`);
  }
}
const uf = (e) => e;
let Ro = ge();
function cf(e, t = {}) {
  let n = !1;
  const o = t.onError || Nd;
  return t.onError = (r) => {
    n = !0, o(r);
  }, { ...Qd(e, t), detectError: n };
}
// @__NO_SIDE_EFFECTS__
function df(e, t) {
  if (!__INTLIFY_DROP_MESSAGE_COMPILER__ && Z(e)) {
    ke(t.warnHtmlMessage) && t.warnHtmlMessage;
    const o = (t.onCacheKey || uf)(e), r = Ro[o];
    if (r)
      return r;
    const { ast: s, detectError: a } = cf(e, {
      ...t,
      location: !1,
      jit: !0
    }), i = Pr(s);
    return a ? i : Ro[o] = i;
  } else {
    const n = e.cacheKey;
    if (n) {
      const o = Ro[n];
      return o || (Ro[n] = Pr(e));
    } else
      return Pr(e);
  }
}
const Ht = {
  INVALID_ARGUMENT: Ad,
  // 17
  INVALID_DATE_ARGUMENT: 18,
  INVALID_ISO_DATE_ARGUMENT: 19,
  NOT_SUPPORT_LOCALE_PROMISE_VALUE: 21,
  NOT_SUPPORT_LOCALE_ASYNC_FUNCTION: 22,
  NOT_SUPPORT_LOCALE_TYPE: 23
}, ff = 24;
function Kt(e) {
  return ur(e, null, void 0);
}
function ys(e, t) {
  return t.locale != null ? wa(t.locale) : wa(e.locale);
}
let Ar;
function wa(e) {
  if (Z(e))
    return e;
  if (_e(e)) {
    if (e.resolvedOnce && Ar != null)
      return Ar;
    if (e.constructor.name === "Function") {
      const t = e();
      if (Ld(t))
        throw Kt(Ht.NOT_SUPPORT_LOCALE_PROMISE_VALUE);
      return Ar = t;
    } else
      throw Kt(Ht.NOT_SUPPORT_LOCALE_ASYNC_FUNCTION);
  } else
    throw Kt(Ht.NOT_SUPPORT_LOCALE_TYPE);
}
function pf(e, t, n) {
  return [.../* @__PURE__ */ new Set([
    n,
    ...Oe(t) ? t : ue(t) ? Object.keys(t) : Z(t) ? [t] : [n]
  ])];
}
function Ol(e, t, n) {
  const o = Z(n) ? n : Zo, r = e;
  r.__localeChainCache || (r.__localeChainCache = /* @__PURE__ */ new Map());
  let s = r.__localeChainCache.get(o);
  if (!s) {
    s = [];
    let a = [n];
    for (; Oe(a); )
      a = Ca(s, a, t);
    const i = Oe(t) || !le(t) ? t : t.default ? t.default : null;
    a = Z(i) ? [i] : i, Oe(a) && Ca(s, a, !1), r.__localeChainCache.set(o, s);
  }
  return s;
}
function Ca(e, t, n) {
  let o = !0;
  for (let r = 0; r < t.length && ke(o); r++) {
    const s = t[r];
    Z(s) && (o = mf(e, t[r], n));
  }
  return o;
}
function mf(e, t, n) {
  let o;
  const r = t.split("-");
  do {
    const s = r.join("-");
    o = hf(e, s, n), r.splice(-1, 1);
  } while (r.length && o === !0);
  return o;
}
function hf(e, t, n) {
  let o = !1;
  if (!e.includes(t) && (o = !0, t)) {
    o = t[t.length - 1] !== "!";
    const r = t.replace(/!/g, "");
    e.push(r), (Oe(n) || le(n)) && n[r] && (o = n[r]);
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
const vf = /^\s?(?:true|false|-?[\d.]+|'[^']*'|"[^"]*")\s?$/;
function gf(e) {
  return vf.test(e);
}
function yf(e) {
  const t = e.charCodeAt(0), n = e.charCodeAt(e.length - 1);
  return t === n && (t === 34 || t === 39) ? e.slice(1, -1) : e;
}
function bf(e) {
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
function _f(e) {
  const t = e.trim();
  return e.charAt(0) === "0" && isNaN(parseInt(e)) ? !1 : gf(t) ? yf(t) : "*" + t;
}
function wf(e) {
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
      if (r = 0, a === void 0 || (a = _f(a), a === !1))
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
      if (l = bf(s), p = mn[o], u = p[l] || p.l || 8, u === 8 || (o = u[0], u[1] !== void 0 && (f = m[u[1]], f && (i = s, f() === !1))))
        return;
      if (o === 7)
        return t;
    }
}
const Ea = /* @__PURE__ */ new Map();
function Cf(e, t) {
  return ue(e) ? e[t] : null;
}
function Ef(e, t) {
  if (!ue(e))
    return null;
  let n = Ea.get(t);
  if (n || (n = wf(t), n && Ea.set(t, n)), !n)
    return null;
  const o = n.length;
  let r = e, s = 0;
  for (; s < o; ) {
    const a = n[s];
    if (kl.includes(a) && At(r))
      return null;
    const i = r[a];
    if (i === void 0 || _e(r))
      return null;
    r = i, s++;
  }
  return r;
}
const Sf = "11.2.2", cr = -1, Zo = "en-US", Sa = "", Ta = (e) => `${e.charAt(0).toLocaleUpperCase()}${e.substr(1)}`;
function Tf() {
  return {
    upper: (e, t) => t === "text" && Z(e) ? e.toUpperCase() : t === "vnode" && ue(e) && "__v_isVNode" in e ? e.children.toUpperCase() : e,
    lower: (e, t) => t === "text" && Z(e) ? e.toLowerCase() : t === "vnode" && ue(e) && "__v_isVNode" in e ? e.children.toLowerCase() : e,
    capitalize: (e, t) => t === "text" && Z(e) ? Ta(e) : t === "vnode" && ue(e) && "__v_isVNode" in e ? Ta(e.children) : e
  };
}
let Ll;
function kf(e) {
  Ll = e;
}
let Il;
function Of(e) {
  Il = e;
}
let Pl;
function Lf(e) {
  Pl = e;
}
let Al = null;
const ka = (e) => {
  Al = e;
}, If = () => Al;
let Oa = 0;
function Pf(e = {}) {
  const t = _e(e.onWarn) ? e.onWarn : wd, n = Z(e.version) ? e.version : Sf, o = Z(e.locale) || _e(e.locale) ? e.locale : Zo, r = _e(o) ? Zo : o, s = Oe(e.fallbackLocale) || le(e.fallbackLocale) || Z(e.fallbackLocale) || e.fallbackLocale === !1 ? e.fallbackLocale : r, a = le(e.messages) ? e.messages : Nr(r), i = le(e.datetimeFormats) ? e.datetimeFormats : Nr(r), l = le(e.numberFormats) ? e.numberFormats : Nr(r), u = Fe(ge(), e.modifiers, Tf()), f = e.pluralRules || ge(), p = _e(e.missing) ? e.missing : null, m = ke(e.missingWarn) || Yo(e.missingWarn) ? e.missingWarn : !0, g = ke(e.fallbackWarn) || Yo(e.fallbackWarn) ? e.fallbackWarn : !0, h = !!e.fallbackFormat, v = !!e.unresolving, w = _e(e.postTranslation) ? e.postTranslation : null, d = le(e.processor) ? e.processor : null, E = ke(e.warnHtmlMessage) ? e.warnHtmlMessage : !0, L = !!e.escapeParameter, S = _e(e.messageCompiler) ? e.messageCompiler : Ll, T = _e(e.messageResolver) ? e.messageResolver : Il || Cf, I = _e(e.localeFallbacker) ? e.localeFallbacker : Pl || pf, k = ue(e.fallbackContext) ? e.fallbackContext : void 0, $ = e, C = ue($.__datetimeFormatters) ? $.__datetimeFormatters : /* @__PURE__ */ new Map(), D = ue($.__numberFormatters) ? $.__numberFormatters : /* @__PURE__ */ new Map(), K = ue($.__meta) ? $.__meta : {};
  Oa++;
  const Y = {
    version: n,
    cid: Oa,
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
const Nr = (e) => ({ [e]: ge() });
function bs(e, t, n, o, r) {
  const { missing: s, onWarn: a } = e;
  if (s !== null) {
    const i = s(e, n, t, r);
    return Z(i) ? i : t;
  } else
    return t;
}
function Xn(e, t, n) {
  const o = e;
  o.__localeChainCache = /* @__PURE__ */ new Map(), e.localeFallbacker(e, n, t);
}
function Af(e, t) {
  return e === t ? !1 : e.split("-")[0] === t.split("-")[0];
}
function Nf(e, t) {
  const n = t.indexOf(e);
  if (n === -1)
    return !1;
  for (let o = n + 1; o < t.length; o++)
    if (Af(e, t[o]))
      return !0;
  return !1;
}
function La(e, ...t) {
  const { datetimeFormats: n, unresolving: o, fallbackLocale: r, onWarn: s, localeFallbacker: a } = e, { __datetimeFormatters: i } = e, [l, u, f, p] = Kr(...t), m = ke(f.missingWarn) ? f.missingWarn : e.missingWarn;
  ke(f.fallbackWarn) ? f.fallbackWarn : e.fallbackWarn;
  const g = !!f.part, h = ys(e, f), v = a(
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
    bs(e, l, d, m, L);
  if (!le(E) || !Z(d))
    return o ? cr : l;
  let S = `${d}__${l}`;
  lr(p) || (S = `${S}__${JSON.stringify(p)}`);
  let T = i.get(S);
  return T || (T = new Intl.DateTimeFormat(d, Fe({}, E, p)), i.set(S, T)), g ? T.formatToParts(u) : T.format(u);
}
const Nl = [
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
function Kr(...e) {
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
  } else if (Sd(t)) {
    if (isNaN(t.getTime()))
      throw Kt(Ht.INVALID_DATE_ARGUMENT);
    i = t;
  } else if (Ne(t))
    i = t;
  else
    throw Kt(Ht.INVALID_ARGUMENT);
  return Z(n) ? s.key = n : le(n) && Object.keys(n).forEach((l) => {
    Nl.includes(l) ? a[l] = n[l] : s[l] = n[l];
  }), Z(o) ? s.locale = o : le(o) && (a = o), le(r) && (a = r), [s.key || "", i, s, a];
}
function Ia(e, t, n) {
  const o = e;
  for (const r in n) {
    const s = `${t}__${r}`;
    o.__datetimeFormatters.has(s) && o.__datetimeFormatters.delete(s);
  }
}
function Pa(e, ...t) {
  const { numberFormats: n, unresolving: o, fallbackLocale: r, onWarn: s, localeFallbacker: a } = e, { __numberFormatters: i } = e, [l, u, f, p] = Gr(...t), m = ke(f.missingWarn) ? f.missingWarn : e.missingWarn;
  ke(f.fallbackWarn) ? f.fallbackWarn : e.fallbackWarn;
  const g = !!f.part, h = ys(e, f), v = a(
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
    bs(e, l, d, m, L);
  if (!le(E) || !Z(d))
    return o ? cr : l;
  let S = `${d}__${l}`;
  lr(p) || (S = `${S}__${JSON.stringify(p)}`);
  let T = i.get(S);
  return T || (T = new Intl.NumberFormat(d, Fe({}, E, p)), i.set(S, T)), g ? T.formatToParts(u) : T.format(u);
}
const Ml = [
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
function Gr(...e) {
  const [t, n, o, r] = e, s = ge();
  let a = ge();
  if (!Ne(t))
    throw Kt(Ht.INVALID_ARGUMENT);
  const i = t;
  return Z(n) ? s.key = n : le(n) && Object.keys(n).forEach((l) => {
    Ml.includes(l) ? a[l] = n[l] : s[l] = n[l];
  }), Z(o) ? s.locale = o : le(o) && (a = o), le(r) && (a = r), [s.key || "", i, s, a];
}
function Aa(e, t, n) {
  const o = e;
  for (const r in n) {
    const s = `${t}__${r}`;
    o.__numberFormatters.has(s) && o.__numberFormatters.delete(s);
  }
}
const Mf = (e) => e, Rf = (e) => "", $f = "text", Df = (e) => e.length === 0 ? "" : hs(e), Ff = Id;
function Na(e, t) {
  return e = Math.abs(e), t === 2 ? e ? e > 1 ? 1 : 0 : 1 : e ? Math.min(e, 2) : 0;
}
function xf(e) {
  const t = Ne(e.pluralIndex) ? e.pluralIndex : -1;
  return e.named && (Ne(e.named.count) || Ne(e.named.n)) ? Ne(e.named.count) ? e.named.count : Ne(e.named.n) ? e.named.n : t : t;
}
function zf(e, t) {
  t.count || (t.count = e), t.n || (t.n = e);
}
function Wf(e = {}) {
  const t = e.locale, n = xf(e), o = ue(e.pluralRules) && Z(t) && _e(e.pluralRules[t]) ? e.pluralRules[t] : Na, r = ue(e.pluralRules) && Z(t) && _e(e.pluralRules[t]) ? Na : void 0, s = (d) => d[o(n, d.length, r)], a = e.list || [], i = (d) => a[d], l = e.named || ge();
  Ne(e.pluralIndex) && zf(n, l);
  const u = (d) => l[d];
  function f(d, E) {
    const L = _e(e.messages) ? e.messages(d, !!E) : ue(e.messages) ? e.messages[d] : !1;
    return L || (e.parent ? e.parent.message(d) : Rf);
  }
  const p = (d) => e.modifiers ? e.modifiers[d] : Mf, m = le(e.processor) && _e(e.processor.normalize) ? e.processor.normalize : Df, g = le(e.processor) && _e(e.processor.interpolate) ? e.processor.interpolate : Ff, h = le(e.processor) && Z(e.processor.type) ? e.processor.type : $f, w = {
    list: i,
    named: u,
    plural: s,
    linked: (d, ...E) => {
      const [L, S] = E;
      let T = "text", I = "";
      E.length === 1 ? ue(L) ? (I = L.modifier || I, T = L.type || T) : Z(L) && (I = L || I) : E.length === 2 && (Z(L) && (I = L || I), Z(S) && (T = S || T));
      const k = f(d, !0)(w), $ = (
        // The message in vnode resolved with linked are returned as an array by processor.nomalize
        T === "vnode" && Oe(k) && I ? k[0] : k
      );
      return I ? p(I)($, T) : $;
    },
    message: f,
    type: h,
    interpolate: g,
    normalize: m,
    values: Fe(ge(), a, l)
  };
  return w;
}
const Ma = () => "", Yt = (e) => _e(e);
function Ra(e, ...t) {
  const { fallbackFormat: n, postTranslation: o, unresolving: r, messageCompiler: s, fallbackLocale: a, messages: i } = e, [l, u] = Yr(...t), f = ke(u.missingWarn) ? u.missingWarn : e.missingWarn, p = ke(u.fallbackWarn) ? u.fallbackWarn : e.fallbackWarn, m = ke(u.escapeParameter) ? u.escapeParameter : e.escapeParameter, g = !!u.resolvedMessage, h = Z(u.default) || ke(u.default) ? ke(u.default) ? s ? l : () => l : u.default : n ? s ? l : () => l : null, v = n || h != null && (Z(h) || _e(h)), w = ys(e, u);
  m && Bf(u);
  let [d, E, L] = g ? [
    l,
    w,
    i[w] || ge()
  ] : Rl(e, l, w, a, p, f), S = d, T = l;
  if (!g && !(Z(S) || At(S) || Yt(S)) && v && (S = h, T = S), !g && (!(Z(S) || At(S) || Yt(S)) || !Z(E)))
    return r ? cr : l;
  let I = !1;
  const k = () => {
    I = !0;
  }, $ = Yt(S) ? S : $l(e, l, E, S, T, k);
  if (I)
    return S;
  const C = Uf(e, E, L, u), D = Wf(C), K = jf(e, $, D);
  let Y = o ? o(K, l) : K;
  return m && Z(Y) && (Y = kd(Y)), Y;
}
function Bf(e) {
  Oe(e.list) ? e.list = e.list.map((t) => Z(t) ? ha(t) : t) : ue(e.named) && Object.keys(e.named).forEach((t) => {
    Z(e.named[t]) && (e.named[t] = ha(e.named[t]));
  });
}
function Rl(e, t, n, o, r, s) {
  const { messages: a, onWarn: i, messageResolver: l, localeFallbacker: u } = e, f = u(e, o, n);
  let p = ge(), m, g = null;
  const h = "translate";
  for (let v = 0; v < f.length && (m = f[v], p = a[m] || ge(), (g = l(p, t)) === null && (g = p[t]), !(Z(g) || At(g) || Yt(g))); v++)
    if (!Nf(m, f)) {
      const w = bs(
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
function $l(e, t, n, o, r, s) {
  const { messageCompiler: a, warnHtmlMessage: i } = e;
  if (Yt(o)) {
    const u = o;
    return u.locale = u.locale || n, u.key = u.key || t, u;
  }
  if (a == null) {
    const u = () => o;
    return u.locale = n, u.key = t, u;
  }
  const l = a(o, Vf(e, n, r, o, i, s));
  return l.locale = n, l.key = t, l.source = o, l;
}
function jf(e, t, n) {
  return t(n);
}
function Yr(...e) {
  const [t, n, o] = e, r = ge();
  if (!Z(t) && !Ne(t) && !Yt(t) && !At(t))
    throw Kt(Ht.INVALID_ARGUMENT);
  const s = Ne(t) ? String(t) : (Yt(t), t);
  return Ne(n) ? r.plural = n : Z(n) ? r.default = n : le(n) && !lr(n) ? r.named = n : Oe(n) && (r.list = n), Ne(o) ? r.plural = o : Z(o) ? r.default = o : le(o) && Fe(r, o), [s, r];
}
function Vf(e, t, n, o, r, s) {
  return {
    locale: t,
    key: n,
    warnHtmlMessage: r,
    onError: (a) => {
      throw s && s(a), a;
    },
    onCacheKey: (a) => Cd(t, n, a)
  };
}
function Uf(e, t, n, o) {
  const { modifiers: r, pluralRules: s, messageResolver: a, fallbackLocale: i, fallbackWarn: l, missingWarn: u, fallbackContext: f } = e, m = {
    locale: t,
    modifiers: r,
    pluralRules: s,
    messages: (g, h) => {
      let v = a(n, g);
      if (v == null && (f || h)) {
        const [, , w] = Rl(
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
        const E = $l(e, g, t, v, g, () => {
          w = !0;
        });
        return w ? Ma : E;
      } else return Yt(v) ? v : Ma;
    }
  };
  return e.processor && (m.processor = e.processor), o.list && (m.list = o.list), o.named && (m.named = o.named), Ne(o.plural) && (m.pluralIndex = o.plural), m;
}
ef();
/*!
  * vue-i18n v11.2.2
  * (c) 2025 kazuya kawaguchi
  * Released under the MIT License.
  */
const Hf = "11.2.2";
function Kf() {
  typeof __VUE_I18N_FULL_INSTALL__ != "boolean" && (jo().__VUE_I18N_FULL_INSTALL__ = !0), typeof __VUE_I18N_LEGACY_API__ != "boolean" && (jo().__VUE_I18N_LEGACY_API__ = !0), typeof __INTLIFY_DROP_MESSAGE_COMPILER__ != "boolean" && (jo().__INTLIFY_DROP_MESSAGE_COMPILER__ = !1);
}
const xn = {
  // composer module errors
  UNEXPECTED_RETURN_TYPE: ff,
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
function fo(e, ...t) {
  return ur(e, null, void 0);
}
const Zr = /* @__PURE__ */ Sn("__translateVNode"), qr = /* @__PURE__ */ Sn("__datetimeParts"), Jr = /* @__PURE__ */ Sn("__numberParts"), Gf = Sn("__setPluralRules"), Dl = /* @__PURE__ */ Sn("__injectWithOption"), Xr = /* @__PURE__ */ Sn("__dispose");
function po(e) {
  if (!ue(e) || At(e))
    return e;
  for (const t in e)
    if (_t(e, t))
      if (!t.includes("."))
        ue(e[t]) && po(e[t]);
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
        if (s || (At(r) ? kl.includes(n[o]) || delete e[t] : (r[n[o]] = e[t], delete e[t])), !At(r)) {
          const a = r[n[o]];
          ue(a) && po(a);
        }
      }
  return e;
}
function Fl(e, t) {
  const { messages: n, __i18n: o, messageResolver: r, flatJson: s } = t, a = le(n) ? n : Oe(o) ? ge() : { [e]: ge() };
  if (Oe(o) && o.forEach((i) => {
    if ("locale" in i && "resource" in i) {
      const { locale: l, resource: u } = i;
      l ? (a[l] = a[l] || ge(), Vo(u, a[l])) : Vo(u, a);
    } else
      Z(i) && Vo(JSON.parse(i), a);
  }), r == null && s)
    for (const i in a)
      _t(a, i) && po(a[i]);
  return a;
}
function Yf(e) {
  return e.type;
}
function Zf(e, t, n) {
  let o = ue(t.messages) ? t.messages : ge();
  "__i18nGlobal" in n && (o = Fl(e.locale.value, {
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
function $a(e) {
  return z(ol, null, e, 0);
}
function xl() {
  return "currentInstance" in Tr ? Tr["currentInstance"] : Tr.getCurrentInstance();
}
const Da = () => [], qf = () => !1;
let Fa = 0;
function xa(e) {
  return (t, n, o, r) => e(n, o, xl() || void 0, r);
}
function Jf(e = {}) {
  const { __root: t, __injectWithOption: n } = e, o = t === void 0, r = e.flatJson, s = pa ? x : dn;
  let a = ke(e.inheritLocale) ? e.inheritLocale : !0;
  const i = s(
    // prettier-ignore
    t && a ? t.locale.value : Z(e.locale) ? e.locale : Zo
  ), l = s(
    // prettier-ignore
    t && a ? t.fallbackLocale.value : Z(e.fallbackLocale) || Oe(e.fallbackLocale) || le(e.fallbackLocale) || e.fallbackLocale === !1 ? e.fallbackLocale : i.value
  ), u = s(Fl(i.value, e)), f = s(le(e.datetimeFormats) ? e.datetimeFormats : { [i.value]: {} }), p = s(le(e.numberFormats) ? e.numberFormats : { [i.value]: {} });
  let m = t ? t.missingWarn : ke(e.missingWarn) || Yo(e.missingWarn) ? e.missingWarn : !0, g = t ? t.fallbackWarn : ke(e.fallbackWarn) || Yo(e.fallbackWarn) ? e.fallbackWarn : !0, h = t ? t.fallbackRoot : ke(e.fallbackRoot) ? e.fallbackRoot : !0, v = !!e.fallbackFormat, w = _e(e.missing) ? e.missing : null, d = _e(e.missing) ? xa(e.missing) : null, E = _e(e.postTranslation) ? e.postTranslation : null, L = t ? t.warnHtmlMessage : ke(e.warnHtmlMessage) ? e.warnHtmlMessage : !0, S = !!e.escapeParameter;
  const T = t ? t.modifiers : le(e.modifiers) ? e.modifiers : {};
  let I = e.pluralRules || t && t.pluralRules, k;
  k = (() => {
    o && ka(null);
    const y = {
      version: Hf,
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
    const N = Pf(y);
    return o && ka(N), N;
  })(), Xn(k, i.value, l.value);
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
      k.fallbackLocale = y, l.value = y, Xn(k, i.value, y);
    }
  }), Y = P(() => u.value), se = /* @__PURE__ */ P(() => f.value), Ce = /* @__PURE__ */ P(() => p.value);
  function me() {
    return _e(E) ? E : null;
  }
  function oe(y) {
    E = y, k.postTranslation = y;
  }
  function W() {
    return w;
  }
  function he(y) {
    y !== null && (d = xa(y)), w = y, k.missing = d;
  }
  const pe = (y, N, te, ce, Be, vn) => {
    C();
    let ut;
    try {
      o || (k.fallbackContext = t ? If() : void 0), ut = y(k);
    } finally {
      o || (k.fallbackContext = void 0);
    }
    if (te !== "translate exists" && // for not `te` (e.g `t`)
    Ne(ut) && ut === cr || te === "translate exists" && !ut) {
      const [Sr, Zs] = N();
      return t && h ? ce(t) : Be(Sr);
    } else {
      if (vn(ut))
        return ut;
      throw fo(xn.UNEXPECTED_RETURN_TYPE);
    }
  };
  function Se(...y) {
    return pe((N) => Reflect.apply(Ra, null, [N, ...y]), () => Yr(...y), "translate", (N) => Reflect.apply(N.t, N, [...y]), (N) => N, (N) => Z(N));
  }
  function Ge(...y) {
    const [N, te, ce] = y;
    if (ce && !ue(ce))
      throw fo(xn.INVALID_ARGUMENT);
    return Se(N, te, Fe({ resolvedMessage: !0 }, ce || {}));
  }
  function Ye(...y) {
    return pe((N) => Reflect.apply(La, null, [N, ...y]), () => Kr(...y), "datetime format", (N) => Reflect.apply(N.d, N, [...y]), () => Sa, (N) => Z(N) || Oe(N));
  }
  function at(...y) {
    return pe((N) => Reflect.apply(Pa, null, [N, ...y]), () => Gr(...y), "number format", (N) => Reflect.apply(N.n, N, [...y]), () => Sa, (N) => Z(N) || Oe(N));
  }
  function xe(y) {
    return y.map((N) => Z(N) || Ne(N) || ke(N) ? $a(String(N)) : N);
  }
  const ze = {
    normalize: xe,
    interpolate: (y) => y,
    type: "vnode"
  };
  function We(...y) {
    return pe((N) => {
      let te;
      const ce = N;
      try {
        ce.processor = ze, te = Reflect.apply(Ra, null, [ce, ...y]);
      } finally {
        ce.processor = null;
      }
      return te;
    }, () => Yr(...y), "translate", (N) => N[Zr](...y), (N) => [$a(N)], (N) => Oe(N));
  }
  function ve(...y) {
    return pe((N) => Reflect.apply(Pa, null, [N, ...y]), () => Gr(...y), "number format", (N) => N[Jr](...y), Da, (N) => Z(N) || Oe(N));
  }
  function Xe(...y) {
    return pe((N) => Reflect.apply(La, null, [N, ...y]), () => Kr(...y), "datetime format", (N) => N[qr](...y), Da, (N) => Z(N) || Oe(N));
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
    }, () => [y], "translate exists", (te) => Reflect.apply(te.te, te, [y, N]), qf, (te) => ke(te));
  }
  function yt(y) {
    let N = null;
    const te = Ol(k, l.value, i.value);
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
        _t(te, ce) && po(te[ce]);
      N = te[y];
    }
    u.value[y] = N, k.messages = u.value;
  }
  function lt(y, N) {
    u.value[y] = u.value[y] || {};
    const te = { [y]: N };
    if (r)
      for (const ce in te)
        _t(te, ce) && po(te[ce]);
    N = te[y], Vo(N, u.value[y]), k.messages = u.value;
  }
  function Tt(y) {
    return f.value[y] || {};
  }
  function b(y, N) {
    f.value[y] = N, k.datetimeFormats = f.value, Ia(k, y, N);
  }
  function _(y, N) {
    f.value[y] = Fe(f.value[y] || {}, N), k.datetimeFormats = f.value, Ia(k, y, N);
  }
  function M(y) {
    return p.value[y] || {};
  }
  function H(y, N) {
    p.value[y] = N, k.numberFormats = p.value, Aa(k, y, N);
  }
  function ie(y, N) {
    p.value[y] = Fe(p.value[y] || {}, N), k.numberFormats = p.value, Aa(k, y, N);
  }
  Fa++, t && pa && (Q(t.locale, (y) => {
    a && (i.value = y, k.locale = y, Xn(k, i.value, l.value));
  }), Q(t.fallbackLocale, (y) => {
    a && (l.value = y, k.fallbackLocale = y, Xn(k, i.value, l.value));
  }));
  const J = {
    id: Fa,
    locale: D,
    fallbackLocale: K,
    get inheritLocale() {
      return a;
    },
    set inheritLocale(y) {
      a = y, y && t && (i.value = t.locale.value, l.value = t.fallbackLocale.value, Xn(k, i.value, l.value));
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
    t: Se,
    getLocaleMessage: tt,
    setLocaleMessage: nt,
    mergeLocaleMessage: lt,
    getPostTranslationHandler: me,
    setPostTranslationHandler: oe,
    getMissingHandler: W,
    setMissingHandler: he,
    [Gf]: it
  };
  return J.datetimeFormats = se, J.numberFormats = Ce, J.rt = Ge, J.te = Qe, J.tm = et, J.d = Ye, J.n = at, J.getDateTimeFormat = Tt, J.setDateTimeFormat = b, J.mergeDateTimeFormat = _, J.getNumberFormat = M, J.setNumberFormat = H, J.mergeNumberFormat = ie, J[Dl] = n, J[Zr] = We, J[qr] = Xe, J[Jr] = ve, J;
}
const _s = {
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
function Xf({ slots: e }, t) {
  return t.length === 1 && t[0] === "default" ? (e.default ? e.default() : []).reduce((o, r) => [
    ...o,
    // prettier-ignore
    ...r.type === ft ? r.children : [r]
  ], []) : t.reduce((n, o) => {
    const r = e[o];
    return r && (n[o] = r()), n;
  }, ge());
}
function zl() {
  return ft;
}
Fe({
  keypath: {
    type: String,
    required: !0
  },
  plural: {
    type: [Number, String],
    validator: (e) => Ne(e) || !isNaN(e)
  }
}, _s);
function Qf(e) {
  return Oe(e) && !Z(e[0]);
}
function Wl(e, t, n, o) {
  const { slots: r, attrs: s } = t;
  return () => {
    const a = { part: !0 };
    let i = ge();
    e.locale && (a.locale = e.locale), Z(e.format) ? a.key = e.format : ue(e.format) && (Z(e.format.key) && (a.key = e.format.key), i = Object.keys(e.format).reduce((m, g) => n.includes(g) ? Fe(ge(), m, { [g]: e.format[g] }) : m, ge()));
    const l = o(e.value, a, i);
    let u = [a.key];
    Oe(l) ? u = l.map((m, g) => {
      const h = r[m.type], v = h ? h({ [m.type]: m.value, index: g, parts: l }) : [m.value];
      return Qf(v) && (v[0].key = `${m.type}-${g}`), v;
    }) : Z(l) && (u = [l]);
    const f = Fe(ge(), s), p = Z(e.tag) || ue(e.tag) ? e.tag : zl();
    return nl(p, f, u);
  };
}
Fe({
  value: {
    type: Number,
    required: !0
  },
  format: {
    type: [String, Object]
  }
}, _s);
const ep = /* @__PURE__ */ Sn("global-vue-i18n");
function _o(e = {}) {
  const t = xl();
  if (t == null)
    throw fo(xn.MUST_BE_CALL_SETUP_TOP);
  if (!t.isCE && t.appContext.app != null && !t.appContext.app.__VUE_I18N_SYMBOL__)
    throw fo(xn.NOT_INSTALLED);
  const n = tp(t), o = op(n), r = Yf(t), s = np(e, r);
  if (s === "global")
    return Zf(o, e, r), o;
  if (s === "parent") {
    let l = rp(n, t, e.__useComponent);
    return l == null && (l = o), l;
  }
  const a = n;
  let i = a.__getInstance(t);
  if (i == null) {
    const l = Fe({}, e);
    "__i18n" in r && (l.__i18n = r.__i18n), o && (l.__root = o), i = Jf(l), a.__composerExtend && (i[Xr] = a.__composerExtend(i)), ap(a, t, i), a.__setInstance(t, i);
  }
  return i;
}
function tp(e) {
  const t = fe(e.isCE ? ep : e.appContext.app.__VUE_I18N_SYMBOL__);
  if (!t)
    throw fo(e.isCE ? xn.NOT_INSTALLED_WITH_PROVIDE : xn.UNEXPECTED_ERROR);
  return t;
}
function np(e, t) {
  return lr(e) ? "__i18n" in t ? "local" : "global" : e.useScope ? e.useScope : "local";
}
function op(e) {
  return e.mode === "composition" ? e.global : e.global.__composer;
}
function rp(e, t, n = !1) {
  let o = null;
  const r = t.root;
  let s = sp(t, n);
  for (; s != null; ) {
    const a = e;
    if (e.mode === "composition")
      o = a.__getInstance(s);
    else if (__VUE_I18N_LEGACY_API__) {
      const i = a.__getInstance(s);
      i != null && (o = i.__composer, n && o && !o[Dl] && (o = null));
    }
    if (o != null || r === s)
      break;
    s = s.parent;
  }
  return o;
}
function sp(e, t = !1) {
  return e == null ? null : t && e.vnode.ctx || e.parent;
}
function ap(e, t, n) {
  Ae(() => {
  }, t), cs(() => {
    const o = n;
    e.__deleteInstance(t);
    const r = o[Xr];
    r && (r(), delete o[Xr]);
  }, t);
}
Fe({
  value: {
    type: [Number, Date],
    required: !0
  },
  format: {
    type: [String, Object]
  }
}, _s);
Kf();
kf(df);
Of(Ef);
Lf(Ol);
const Bl = Symbol(), Uo = "el", ip = "is-", yn = (e, t, n, o, r) => {
  let s = `${e}-${t}`;
  return n && (s += `-${n}`), o && (s += `__${o}`), r && (s += `--${r}`), s;
}, jl = Symbol("namespaceContextKey"), ws = (e) => {
  const t = e || (Ke() ? fe(jl, x(Uo)) : x(Uo));
  return P(() => c(t) || Uo);
}, $e = (e, t) => {
  const n = ws(t);
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
      return v && d ? `${ip}${v}` : "";
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
const mo = () => {
}, lp = Object.prototype.hasOwnProperty, za = (e, t) => lp.call(e, t), Pt = Array.isArray, Me = (e) => typeof e == "function", pt = (e) => typeof e == "string", dt = (e) => e !== null && typeof e == "object", up = Object.prototype.toString, cp = (e) => up.call(e), dp = (e) => cp(e) === "[object Object]";
var Vl = typeof global == "object" && global && global.Object === Object && global, fp = typeof self == "object" && self && self.Object === Object && self, xt = Vl || fp || Function("return this")(), $t = xt.Symbol, Ul = Object.prototype, pp = Ul.hasOwnProperty, mp = Ul.toString, Qn = $t ? $t.toStringTag : void 0;
function hp(e) {
  var t = pp.call(e, Qn), n = e[Qn];
  try {
    e[Qn] = void 0;
    var o = !0;
  } catch {
  }
  var r = mp.call(e);
  return o && (t ? e[Qn] = n : delete e[Qn]), r;
}
var vp = Object.prototype, gp = vp.toString;
function yp(e) {
  return gp.call(e);
}
var bp = "[object Null]", _p = "[object Undefined]", Wa = $t ? $t.toStringTag : void 0;
function Yn(e) {
  return e == null ? e === void 0 ? _p : bp : Wa && Wa in Object(e) ? hp(e) : yp(e);
}
function zn(e) {
  return e != null && typeof e == "object";
}
var wp = "[object Symbol]";
function dr(e) {
  return typeof e == "symbol" || zn(e) && Yn(e) == wp;
}
function Cp(e, t) {
  for (var n = -1, o = e == null ? 0 : e.length, r = Array(o); ++n < o; )
    r[n] = t(e[n], n, e);
  return r;
}
var St = Array.isArray, Ba = $t ? $t.prototype : void 0, ja = Ba ? Ba.toString : void 0;
function Hl(e) {
  if (typeof e == "string")
    return e;
  if (St(e))
    return Cp(e, Hl) + "";
  if (dr(e))
    return ja ? ja.call(e) : "";
  var t = e + "";
  return t == "0" && 1 / e == -1 / 0 ? "-0" : t;
}
var Ep = /\s/;
function Sp(e) {
  for (var t = e.length; t-- && Ep.test(e.charAt(t)); )
    ;
  return t;
}
var Tp = /^\s+/;
function kp(e) {
  return e && e.slice(0, Sp(e) + 1).replace(Tp, "");
}
function fn(e) {
  var t = typeof e;
  return e != null && (t == "object" || t == "function");
}
var Va = NaN, Op = /^[-+]0x[0-9a-f]+$/i, Lp = /^0b[01]+$/i, Ip = /^0o[0-7]+$/i, Pp = parseInt;
function Ua(e) {
  if (typeof e == "number")
    return e;
  if (dr(e))
    return Va;
  if (fn(e)) {
    var t = typeof e.valueOf == "function" ? e.valueOf() : e;
    e = fn(t) ? t + "" : t;
  }
  if (typeof e != "string")
    return e === 0 ? e : +e;
  e = kp(e);
  var n = Lp.test(e);
  return n || Ip.test(e) ? Pp(e.slice(2), n ? 2 : 8) : Op.test(e) ? Va : +e;
}
function Kl(e) {
  return e;
}
var Ap = "[object AsyncFunction]", Np = "[object Function]", Mp = "[object GeneratorFunction]", Rp = "[object Proxy]";
function Gl(e) {
  if (!fn(e))
    return !1;
  var t = Yn(e);
  return t == Np || t == Mp || t == Ap || t == Rp;
}
var Mr = xt["__core-js_shared__"], Ha = function() {
  var e = /[^.]+$/.exec(Mr && Mr.keys && Mr.keys.IE_PROTO || "");
  return e ? "Symbol(src)_1." + e : "";
}();
function $p(e) {
  return !!Ha && Ha in e;
}
var Dp = Function.prototype, Fp = Dp.toString;
function Tn(e) {
  if (e != null) {
    try {
      return Fp.call(e);
    } catch {
    }
    try {
      return e + "";
    } catch {
    }
  }
  return "";
}
var xp = /[\\^$.*+?()[\]{}|]/g, zp = /^\[object .+?Constructor\]$/, Wp = Function.prototype, Bp = Object.prototype, jp = Wp.toString, Vp = Bp.hasOwnProperty, Up = RegExp(
  "^" + jp.call(Vp).replace(xp, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$"
);
function Hp(e) {
  if (!fn(e) || $p(e))
    return !1;
  var t = Gl(e) ? Up : zp;
  return t.test(Tn(e));
}
function Kp(e, t) {
  return e?.[t];
}
function kn(e, t) {
  var n = Kp(e, t);
  return Hp(n) ? n : void 0;
}
var Qr = kn(xt, "WeakMap");
function Gp(e, t, n) {
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
var Yp = 800, Zp = 16, qp = Date.now;
function Jp(e) {
  var t = 0, n = 0;
  return function() {
    var o = qp(), r = Zp - (o - n);
    if (n = o, r > 0) {
      if (++t >= Yp)
        return arguments[0];
    } else
      t = 0;
    return e.apply(void 0, arguments);
  };
}
function Xp(e) {
  return function() {
    return e;
  };
}
var qo = function() {
  try {
    var e = kn(Object, "defineProperty");
    return e({}, "", {}), e;
  } catch {
  }
}(), Qp = qo ? function(e, t) {
  return qo(e, "toString", {
    configurable: !0,
    enumerable: !1,
    value: Xp(t),
    writable: !0
  });
} : Kl, em = Jp(Qp);
function tm(e, t, n, o) {
  e.length;
  for (var r = n + 1; r--; )
    if (t(e[r], r, e))
      return r;
  return -1;
}
var nm = 9007199254740991, om = /^(?:0|[1-9]\d*)$/;
function Cs(e, t) {
  var n = typeof e;
  return t = t ?? nm, !!t && (n == "number" || n != "symbol" && om.test(e)) && e > -1 && e % 1 == 0 && e < t;
}
function rm(e, t, n) {
  t == "__proto__" && qo ? qo(e, t, {
    configurable: !0,
    enumerable: !0,
    value: n,
    writable: !0
  }) : e[t] = n;
}
function Es(e, t) {
  return e === t || e !== e && t !== t;
}
var sm = Object.prototype, am = sm.hasOwnProperty;
function im(e, t, n) {
  var o = e[t];
  (!(am.call(e, t) && Es(o, n)) || n === void 0 && !(t in e)) && rm(e, t, n);
}
var Ka = Math.max;
function lm(e, t, n) {
  return t = Ka(t === void 0 ? e.length - 1 : t, 0), function() {
    for (var o = arguments, r = -1, s = Ka(o.length - t, 0), a = Array(s); ++r < s; )
      a[r] = o[t + r];
    r = -1;
    for (var i = Array(t + 1); ++r < t; )
      i[r] = o[r];
    return i[t] = n(a), Gp(e, this, i);
  };
}
var um = 9007199254740991;
function Ss(e) {
  return typeof e == "number" && e > -1 && e % 1 == 0 && e <= um;
}
function cm(e) {
  return e != null && Ss(e.length) && !Gl(e);
}
var dm = Object.prototype;
function fm(e) {
  var t = e && e.constructor, n = typeof t == "function" && t.prototype || dm;
  return e === n;
}
function pm(e, t) {
  for (var n = -1, o = Array(e); ++n < e; )
    o[n] = t(n);
  return o;
}
var mm = "[object Arguments]";
function Ga(e) {
  return zn(e) && Yn(e) == mm;
}
var Yl = Object.prototype, hm = Yl.hasOwnProperty, vm = Yl.propertyIsEnumerable, Ts = Ga(/* @__PURE__ */ function() {
  return arguments;
}()) ? Ga : function(e) {
  return zn(e) && hm.call(e, "callee") && !vm.call(e, "callee");
};
function gm() {
  return !1;
}
var Zl = typeof exports == "object" && exports && !exports.nodeType && exports, Ya = Zl && typeof module == "object" && module && !module.nodeType && module, ym = Ya && Ya.exports === Zl, Za = ym ? xt.Buffer : void 0, bm = Za ? Za.isBuffer : void 0, es = bm || gm, _m = "[object Arguments]", wm = "[object Array]", Cm = "[object Boolean]", Em = "[object Date]", Sm = "[object Error]", Tm = "[object Function]", km = "[object Map]", Om = "[object Number]", Lm = "[object Object]", Im = "[object RegExp]", Pm = "[object Set]", Am = "[object String]", Nm = "[object WeakMap]", Mm = "[object ArrayBuffer]", Rm = "[object DataView]", $m = "[object Float32Array]", Dm = "[object Float64Array]", Fm = "[object Int8Array]", xm = "[object Int16Array]", zm = "[object Int32Array]", Wm = "[object Uint8Array]", Bm = "[object Uint8ClampedArray]", jm = "[object Uint16Array]", Vm = "[object Uint32Array]", ye = {};
ye[$m] = ye[Dm] = ye[Fm] = ye[xm] = ye[zm] = ye[Wm] = ye[Bm] = ye[jm] = ye[Vm] = !0;
ye[_m] = ye[wm] = ye[Mm] = ye[Cm] = ye[Rm] = ye[Em] = ye[Sm] = ye[Tm] = ye[km] = ye[Om] = ye[Lm] = ye[Im] = ye[Pm] = ye[Am] = ye[Nm] = !1;
function Um(e) {
  return zn(e) && Ss(e.length) && !!ye[Yn(e)];
}
function Hm(e) {
  return function(t) {
    return e(t);
  };
}
var ql = typeof exports == "object" && exports && !exports.nodeType && exports, ro = ql && typeof module == "object" && module && !module.nodeType && module, Km = ro && ro.exports === ql, Rr = Km && Vl.process, qa = function() {
  try {
    var e = ro && ro.require && ro.require("util").types;
    return e || Rr && Rr.binding && Rr.binding("util");
  } catch {
  }
}(), Ja = qa && qa.isTypedArray, Jl = Ja ? Hm(Ja) : Um, Gm = Object.prototype, Ym = Gm.hasOwnProperty;
function Zm(e, t) {
  var n = St(e), o = !n && Ts(e), r = !n && !o && es(e), s = !n && !o && !r && Jl(e), a = n || o || r || s, i = a ? pm(e.length, String) : [], l = i.length;
  for (var u in e)
    Ym.call(e, u) && !(a && // Safari 9 has enumerable `arguments.length` in strict mode.
    (u == "length" || // Node.js 0.10 has enumerable non-index properties on buffers.
    r && (u == "offset" || u == "parent") || // PhantomJS 2 has enumerable non-index properties on typed arrays.
    s && (u == "buffer" || u == "byteLength" || u == "byteOffset") || // Skip index properties.
    Cs(u, l))) && i.push(u);
  return i;
}
function qm(e, t) {
  return function(n) {
    return e(t(n));
  };
}
var Jm = qm(Object.keys, Object), Xm = Object.prototype, Qm = Xm.hasOwnProperty;
function eh(e) {
  if (!fm(e))
    return Jm(e);
  var t = [];
  for (var n in Object(e))
    Qm.call(e, n) && n != "constructor" && t.push(n);
  return t;
}
function Xl(e) {
  return cm(e) ? Zm(e) : eh(e);
}
var th = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/, nh = /^\w*$/;
function ks(e, t) {
  if (St(e))
    return !1;
  var n = typeof e;
  return n == "number" || n == "symbol" || n == "boolean" || e == null || dr(e) ? !0 : nh.test(e) || !th.test(e) || t != null && e in Object(t);
}
var ho = kn(Object, "create");
function oh() {
  this.__data__ = ho ? ho(null) : {}, this.size = 0;
}
function rh(e) {
  var t = this.has(e) && delete this.__data__[e];
  return this.size -= t ? 1 : 0, t;
}
var sh = "__lodash_hash_undefined__", ah = Object.prototype, ih = ah.hasOwnProperty;
function lh(e) {
  var t = this.__data__;
  if (ho) {
    var n = t[e];
    return n === sh ? void 0 : n;
  }
  return ih.call(t, e) ? t[e] : void 0;
}
var uh = Object.prototype, ch = uh.hasOwnProperty;
function dh(e) {
  var t = this.__data__;
  return ho ? t[e] !== void 0 : ch.call(t, e);
}
var fh = "__lodash_hash_undefined__";
function ph(e, t) {
  var n = this.__data__;
  return this.size += this.has(e) ? 0 : 1, n[e] = ho && t === void 0 ? fh : t, this;
}
function Cn(e) {
  var t = -1, n = e == null ? 0 : e.length;
  for (this.clear(); ++t < n; ) {
    var o = e[t];
    this.set(o[0], o[1]);
  }
}
Cn.prototype.clear = oh;
Cn.prototype.delete = rh;
Cn.prototype.get = lh;
Cn.prototype.has = dh;
Cn.prototype.set = ph;
function mh() {
  this.__data__ = [], this.size = 0;
}
function fr(e, t) {
  for (var n = e.length; n--; )
    if (Es(e[n][0], t))
      return n;
  return -1;
}
var hh = Array.prototype, vh = hh.splice;
function gh(e) {
  var t = this.__data__, n = fr(t, e);
  if (n < 0)
    return !1;
  var o = t.length - 1;
  return n == o ? t.pop() : vh.call(t, n, 1), --this.size, !0;
}
function yh(e) {
  var t = this.__data__, n = fr(t, e);
  return n < 0 ? void 0 : t[n][1];
}
function bh(e) {
  return fr(this.__data__, e) > -1;
}
function _h(e, t) {
  var n = this.__data__, o = fr(n, e);
  return o < 0 ? (++this.size, n.push([e, t])) : n[o][1] = t, this;
}
function Qt(e) {
  var t = -1, n = e == null ? 0 : e.length;
  for (this.clear(); ++t < n; ) {
    var o = e[t];
    this.set(o[0], o[1]);
  }
}
Qt.prototype.clear = mh;
Qt.prototype.delete = gh;
Qt.prototype.get = yh;
Qt.prototype.has = bh;
Qt.prototype.set = _h;
var vo = kn(xt, "Map");
function wh() {
  this.size = 0, this.__data__ = {
    hash: new Cn(),
    map: new (vo || Qt)(),
    string: new Cn()
  };
}
function Ch(e) {
  var t = typeof e;
  return t == "string" || t == "number" || t == "symbol" || t == "boolean" ? e !== "__proto__" : e === null;
}
function pr(e, t) {
  var n = e.__data__;
  return Ch(t) ? n[typeof t == "string" ? "string" : "hash"] : n.map;
}
function Eh(e) {
  var t = pr(this, e).delete(e);
  return this.size -= t ? 1 : 0, t;
}
function Sh(e) {
  return pr(this, e).get(e);
}
function Th(e) {
  return pr(this, e).has(e);
}
function kh(e, t) {
  var n = pr(this, e), o = n.size;
  return n.set(e, t), this.size += n.size == o ? 0 : 1, this;
}
function en(e) {
  var t = -1, n = e == null ? 0 : e.length;
  for (this.clear(); ++t < n; ) {
    var o = e[t];
    this.set(o[0], o[1]);
  }
}
en.prototype.clear = wh;
en.prototype.delete = Eh;
en.prototype.get = Sh;
en.prototype.has = Th;
en.prototype.set = kh;
var Oh = "Expected a function";
function Os(e, t) {
  if (typeof e != "function" || t != null && typeof t != "function")
    throw new TypeError(Oh);
  var n = function() {
    var o = arguments, r = t ? t.apply(this, o) : o[0], s = n.cache;
    if (s.has(r))
      return s.get(r);
    var a = e.apply(this, o);
    return n.cache = s.set(r, a) || s, a;
  };
  return n.cache = new (Os.Cache || en)(), n;
}
Os.Cache = en;
var Lh = 500;
function Ih(e) {
  var t = Os(e, function(o) {
    return n.size === Lh && n.clear(), o;
  }), n = t.cache;
  return t;
}
var Ph = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g, Ah = /\\(\\)?/g, Nh = Ih(function(e) {
  var t = [];
  return e.charCodeAt(0) === 46 && t.push(""), e.replace(Ph, function(n, o, r, s) {
    t.push(r ? s.replace(Ah, "$1") : o || n);
  }), t;
});
function Mh(e) {
  return e == null ? "" : Hl(e);
}
function mr(e, t) {
  return St(e) ? e : ks(e, t) ? [e] : Nh(Mh(e));
}
function wo(e) {
  if (typeof e == "string" || dr(e))
    return e;
  var t = e + "";
  return t == "0" && 1 / e == -1 / 0 ? "-0" : t;
}
function Ls(e, t) {
  t = mr(t, e);
  for (var n = 0, o = t.length; e != null && n < o; )
    e = e[wo(t[n++])];
  return n && n == o ? e : void 0;
}
function cn(e, t, n) {
  var o = e == null ? void 0 : Ls(e, t);
  return o === void 0 ? n : o;
}
function Ql(e, t) {
  for (var n = -1, o = t.length, r = e.length; ++n < o; )
    e[r + n] = t[n];
  return e;
}
var Xa = $t ? $t.isConcatSpreadable : void 0;
function Rh(e) {
  return St(e) || Ts(e) || !!(Xa && e && e[Xa]);
}
function $h(e, t, n, o, r) {
  var s = -1, a = e.length;
  for (n || (n = Rh), r || (r = []); ++s < a; ) {
    var i = e[s];
    n(i) ? Ql(r, i) : r[r.length] = i;
  }
  return r;
}
function Dh(e) {
  var t = e == null ? 0 : e.length;
  return t ? $h(e) : [];
}
function Fh(e) {
  return em(lm(e, void 0, Dh), e + "");
}
function un() {
  if (!arguments.length)
    return [];
  var e = arguments[0];
  return St(e) ? e : [e];
}
function xh() {
  this.__data__ = new Qt(), this.size = 0;
}
function zh(e) {
  var t = this.__data__, n = t.delete(e);
  return this.size = t.size, n;
}
function Wh(e) {
  return this.__data__.get(e);
}
function Bh(e) {
  return this.__data__.has(e);
}
var jh = 200;
function Vh(e, t) {
  var n = this.__data__;
  if (n instanceof Qt) {
    var o = n.__data__;
    if (!vo || o.length < jh - 1)
      return o.push([e, t]), this.size = ++n.size, this;
    n = this.__data__ = new en(o);
  }
  return n.set(e, t), this.size = n.size, this;
}
function Zt(e) {
  var t = this.__data__ = new Qt(e);
  this.size = t.size;
}
Zt.prototype.clear = xh;
Zt.prototype.delete = zh;
Zt.prototype.get = Wh;
Zt.prototype.has = Bh;
Zt.prototype.set = Vh;
function Uh(e, t) {
  for (var n = -1, o = e == null ? 0 : e.length, r = 0, s = []; ++n < o; ) {
    var a = e[n];
    t(a, n, e) && (s[r++] = a);
  }
  return s;
}
function Hh() {
  return [];
}
var Kh = Object.prototype, Gh = Kh.propertyIsEnumerable, Qa = Object.getOwnPropertySymbols, Yh = Qa ? function(e) {
  return e == null ? [] : (e = Object(e), Uh(Qa(e), function(t) {
    return Gh.call(e, t);
  }));
} : Hh;
function Zh(e, t, n) {
  var o = t(e);
  return St(e) ? o : Ql(o, n(e));
}
function ei(e) {
  return Zh(e, Xl, Yh);
}
var ts = kn(xt, "DataView"), ns = kn(xt, "Promise"), os = kn(xt, "Set"), ti = "[object Map]", qh = "[object Object]", ni = "[object Promise]", oi = "[object Set]", ri = "[object WeakMap]", si = "[object DataView]", Jh = Tn(ts), Xh = Tn(vo), Qh = Tn(ns), ev = Tn(os), tv = Tn(Qr), ln = Yn;
(ts && ln(new ts(new ArrayBuffer(1))) != si || vo && ln(new vo()) != ti || ns && ln(ns.resolve()) != ni || os && ln(new os()) != oi || Qr && ln(new Qr()) != ri) && (ln = function(e) {
  var t = Yn(e), n = t == qh ? e.constructor : void 0, o = n ? Tn(n) : "";
  if (o)
    switch (o) {
      case Jh:
        return si;
      case Xh:
        return ti;
      case Qh:
        return ni;
      case ev:
        return oi;
      case tv:
        return ri;
    }
  return t;
});
var ai = xt.Uint8Array, nv = "__lodash_hash_undefined__";
function ov(e) {
  return this.__data__.set(e, nv), this;
}
function rv(e) {
  return this.__data__.has(e);
}
function Jo(e) {
  var t = -1, n = e == null ? 0 : e.length;
  for (this.__data__ = new en(); ++t < n; )
    this.add(e[t]);
}
Jo.prototype.add = Jo.prototype.push = ov;
Jo.prototype.has = rv;
function sv(e, t) {
  for (var n = -1, o = e == null ? 0 : e.length; ++n < o; )
    if (t(e[n], n, e))
      return !0;
  return !1;
}
function av(e, t) {
  return e.has(t);
}
var iv = 1, lv = 2;
function eu(e, t, n, o, r, s) {
  var a = n & iv, i = e.length, l = t.length;
  if (i != l && !(a && l > i))
    return !1;
  var u = s.get(e), f = s.get(t);
  if (u && f)
    return u == t && f == e;
  var p = -1, m = !0, g = n & lv ? new Jo() : void 0;
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
      if (!sv(t, function(d, E) {
        if (!av(g, E) && (h === d || r(h, d, n, o, s)))
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
function uv(e) {
  var t = -1, n = Array(e.size);
  return e.forEach(function(o, r) {
    n[++t] = [r, o];
  }), n;
}
function cv(e) {
  var t = -1, n = Array(e.size);
  return e.forEach(function(o) {
    n[++t] = o;
  }), n;
}
var dv = 1, fv = 2, pv = "[object Boolean]", mv = "[object Date]", hv = "[object Error]", vv = "[object Map]", gv = "[object Number]", yv = "[object RegExp]", bv = "[object Set]", _v = "[object String]", wv = "[object Symbol]", Cv = "[object ArrayBuffer]", Ev = "[object DataView]", ii = $t ? $t.prototype : void 0, $r = ii ? ii.valueOf : void 0;
function Sv(e, t, n, o, r, s, a) {
  switch (n) {
    case Ev:
      if (e.byteLength != t.byteLength || e.byteOffset != t.byteOffset)
        return !1;
      e = e.buffer, t = t.buffer;
    case Cv:
      return !(e.byteLength != t.byteLength || !s(new ai(e), new ai(t)));
    case pv:
    case mv:
    case gv:
      return Es(+e, +t);
    case hv:
      return e.name == t.name && e.message == t.message;
    case yv:
    case _v:
      return e == t + "";
    case vv:
      var i = uv;
    case bv:
      var l = o & dv;
      if (i || (i = cv), e.size != t.size && !l)
        return !1;
      var u = a.get(e);
      if (u)
        return u == t;
      o |= fv, a.set(e, t);
      var f = eu(i(e), i(t), o, r, s, a);
      return a.delete(e), f;
    case wv:
      if ($r)
        return $r.call(e) == $r.call(t);
  }
  return !1;
}
var Tv = 1, kv = Object.prototype, Ov = kv.hasOwnProperty;
function Lv(e, t, n, o, r, s) {
  var a = n & Tv, i = ei(e), l = i.length, u = ei(t), f = u.length;
  if (l != f && !a)
    return !1;
  for (var p = l; p--; ) {
    var m = i[p];
    if (!(a ? m in t : Ov.call(t, m)))
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
var Iv = 1, li = "[object Arguments]", ui = "[object Array]", $o = "[object Object]", Pv = Object.prototype, ci = Pv.hasOwnProperty;
function Av(e, t, n, o, r, s) {
  var a = St(e), i = St(t), l = a ? ui : ln(e), u = i ? ui : ln(t);
  l = l == li ? $o : l, u = u == li ? $o : u;
  var f = l == $o, p = u == $o, m = l == u;
  if (m && es(e)) {
    if (!es(t))
      return !1;
    a = !0, f = !1;
  }
  if (m && !f)
    return s || (s = new Zt()), a || Jl(e) ? eu(e, t, n, o, r, s) : Sv(e, t, l, n, o, r, s);
  if (!(n & Iv)) {
    var g = f && ci.call(e, "__wrapped__"), h = p && ci.call(t, "__wrapped__");
    if (g || h) {
      var v = g ? e.value() : e, w = h ? t.value() : t;
      return s || (s = new Zt()), r(v, w, n, o, s);
    }
  }
  return m ? (s || (s = new Zt()), Lv(e, t, n, o, r, s)) : !1;
}
function hr(e, t, n, o, r) {
  return e === t ? !0 : e == null || t == null || !zn(e) && !zn(t) ? e !== e && t !== t : Av(e, t, n, o, hr, r);
}
var Nv = 1, Mv = 2;
function Rv(e, t, n, o) {
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
      if (!(p === void 0 ? hr(u, l, Nv | Mv, o, f) : p))
        return !1;
    }
  }
  return !0;
}
function tu(e) {
  return e === e && !fn(e);
}
function $v(e) {
  for (var t = Xl(e), n = t.length; n--; ) {
    var o = t[n], r = e[o];
    t[n] = [o, r, tu(r)];
  }
  return t;
}
function nu(e, t) {
  return function(n) {
    return n == null ? !1 : n[e] === t && (t !== void 0 || e in Object(n));
  };
}
function Dv(e) {
  var t = $v(e);
  return t.length == 1 && t[0][2] ? nu(t[0][0], t[0][1]) : function(n) {
    return n === e || Rv(n, e, t);
  };
}
function Fv(e, t) {
  return e != null && t in Object(e);
}
function xv(e, t, n) {
  t = mr(t, e);
  for (var o = -1, r = t.length, s = !1; ++o < r; ) {
    var a = wo(t[o]);
    if (!(s = e != null && n(e, a)))
      break;
    e = e[a];
  }
  return s || ++o != r ? s : (r = e == null ? 0 : e.length, !!r && Ss(r) && Cs(a, r) && (St(e) || Ts(e)));
}
function ou(e, t) {
  return e != null && xv(e, t, Fv);
}
var zv = 1, Wv = 2;
function Bv(e, t) {
  return ks(e) && tu(t) ? nu(wo(e), t) : function(n) {
    var o = cn(n, e);
    return o === void 0 && o === t ? ou(n, e) : hr(t, o, zv | Wv);
  };
}
function jv(e) {
  return function(t) {
    return t?.[e];
  };
}
function Vv(e) {
  return function(t) {
    return Ls(t, e);
  };
}
function Uv(e) {
  return ks(e) ? jv(wo(e)) : Vv(e);
}
function Hv(e) {
  return typeof e == "function" ? e : e == null ? Kl : typeof e == "object" ? St(e) ? Bv(e[0], e[1]) : Dv(e) : Uv(e);
}
var Dr = function() {
  return xt.Date.now();
}, Kv = "Expected a function", Gv = Math.max, Yv = Math.min;
function Zv(e, t, n) {
  var o, r, s, a, i, l, u = 0, f = !1, p = !1, m = !0;
  if (typeof e != "function")
    throw new TypeError(Kv);
  t = Ua(t) || 0, fn(n) && (f = !!n.leading, p = "maxWait" in n, s = p ? Gv(Ua(n.maxWait) || 0, t) : s, m = "trailing" in n ? !!n.trailing : m);
  function g(I) {
    var k = o, $ = r;
    return o = r = void 0, u = I, a = e.apply($, k), a;
  }
  function h(I) {
    return u = I, i = setTimeout(d, t), f ? g(I) : a;
  }
  function v(I) {
    var k = I - l, $ = I - u, C = t - k;
    return p ? Yv(C, s - $) : C;
  }
  function w(I) {
    var k = I - l, $ = I - u;
    return l === void 0 || k >= t || k < 0 || p && $ >= s;
  }
  function d() {
    var I = Dr();
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
    return i === void 0 ? a : E(Dr());
  }
  function T() {
    var I = Dr(), k = w(I);
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
function qv(e, t, n) {
  var o = e == null ? 0 : e.length;
  if (!o)
    return -1;
  var r = o - 1;
  return tm(e, Hv(t), r);
}
function Xo(e) {
  for (var t = -1, n = e == null ? 0 : e.length, o = {}; ++t < n; ) {
    var r = e[t];
    o[r[0]] = r[1];
  }
  return o;
}
function so(e, t) {
  return hr(e, t);
}
function vr(e) {
  return e == null;
}
function Jv(e) {
  return e === void 0;
}
function Xv(e, t, n, o) {
  if (!fn(e))
    return e;
  t = mr(t, e);
  for (var r = -1, s = t.length, a = s - 1, i = e; i != null && ++r < s; ) {
    var l = wo(t[r]), u = n;
    if (l === "__proto__" || l === "constructor" || l === "prototype")
      return e;
    if (r != a) {
      var f = i[l];
      u = void 0, u === void 0 && (u = fn(f) ? f : Cs(t[r + 1]) ? [] : {});
    }
    im(i, l, u), i = i[l];
  }
  return e;
}
function Qv(e, t, n) {
  for (var o = -1, r = t.length, s = {}; ++o < r; ) {
    var a = t[o], i = Ls(e, a);
    n(i, a) && Xv(s, mr(a, e), i);
  }
  return s;
}
function eg(e, t) {
  return Qv(e, t, function(n, o) {
    return ou(e, o);
  });
}
var tg = Fh(function(e, t) {
  return e == null ? {} : eg(e, t);
});
const $n = (e) => e === void 0, Qo = (e) => typeof e == "boolean", Re = (e) => typeof e == "number", Ct = (e) => typeof Element > "u" ? !1 : e instanceof Element, ng = (e) => pt(e) ? !Number.isNaN(Number(e)) : !1;
var og = Object.defineProperty, rg = Object.defineProperties, sg = Object.getOwnPropertyDescriptors, di = Object.getOwnPropertySymbols, ag = Object.prototype.hasOwnProperty, ig = Object.prototype.propertyIsEnumerable, fi = (e, t, n) => t in e ? og(e, t, { enumerable: !0, configurable: !0, writable: !0, value: n }) : e[t] = n, lg = (e, t) => {
  for (var n in t || (t = {}))
    ag.call(t, n) && fi(e, n, t[n]);
  if (di)
    for (var n of di(t))
      ig.call(t, n) && fi(e, n, t[n]);
  return e;
}, ug = (e, t) => rg(e, sg(t));
function cg(e, t) {
  var n;
  const o = dn();
  return rl(() => {
    o.value = e();
  }, ug(lg({}, t), {
    flush: (n = void 0) != null ? n : "sync"
  })), ds(o);
}
var pi;
const Ie = typeof window < "u", dg = (e) => typeof e == "string", ru = () => {
}, rs = Ie && ((pi = window?.navigator) == null ? void 0 : pi.userAgent) && /iP(ad|hone|od)/.test(window.navigator.userAgent);
function Is(e) {
  return typeof e == "function" ? e() : c(e);
}
function fg(e) {
  return e;
}
function Co(e) {
  return el() ? (tl(e), !0) : !1;
}
function pg(e, t = !0) {
  Ke() ? Ae(e) : t ? e() : Te(e);
}
function su(e, t, n = {}) {
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
    }, Is(t));
  }
  return o && (r.value = !0, Ie && l()), Co(i), {
    isPending: ds(r),
    start: l,
    stop: i
  };
}
function Gt(e) {
  var t;
  const n = Is(e);
  return (t = n?.$el) != null ? t : n;
}
const gr = Ie ? window : void 0;
function Et(...e) {
  let t, n, o, r;
  if (dg(e[0]) || Array.isArray(e[0]) ? ([n, o, r] = e, t = gr) : [t, n, o, r] = e, !t)
    return ru;
  Array.isArray(n) || (n = [n]), Array.isArray(o) || (o = [o]);
  const s = [], a = () => {
    s.forEach((f) => f()), s.length = 0;
  }, i = (f, p, m, g) => (f.addEventListener(p, m, g), () => f.removeEventListener(p, m, g)), l = Q(() => [Gt(t), Is(r)], ([f, p]) => {
    a(), f && s.push(...n.flatMap((m) => o.map((g) => i(f, m, g, p))));
  }, { immediate: !0, flush: "post" }), u = () => {
    l(), a();
  };
  return Co(u), u;
}
let mi = !1;
function mg(e, t, n = {}) {
  const { window: o = gr, ignore: r = [], capture: s = !0, detectIframe: a = !1 } = n;
  if (!o)
    return;
  rs && !mi && (mi = !0, Array.from(o.document.body.children).forEach((m) => m.addEventListener("click", ru)));
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
function au(e, t = !1) {
  const n = x(), o = () => n.value = !!e();
  return o(), pg(o, t), n;
}
const hi = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {}, vi = "__vueuse_ssr_handlers__";
hi[vi] = hi[vi] || {};
var gi = Object.getOwnPropertySymbols, hg = Object.prototype.hasOwnProperty, vg = Object.prototype.propertyIsEnumerable, gg = (e, t) => {
  var n = {};
  for (var o in e)
    hg.call(e, o) && t.indexOf(o) < 0 && (n[o] = e[o]);
  if (e != null && gi)
    for (var o of gi(e))
      t.indexOf(o) < 0 && vg.call(e, o) && (n[o] = e[o]);
  return n;
};
function Lt(e, t, n = {}) {
  const o = n, { window: r = gr } = o, s = gg(o, ["window"]);
  let a;
  const i = au(() => r && "ResizeObserver" in r), l = () => {
    a && (a.disconnect(), a = void 0);
  }, u = Q(() => Gt(e), (p) => {
    l(), i.value && r && p && (a = new ResizeObserver(t), a.observe(p, s));
  }, { immediate: !0, flush: "post" }), f = () => {
    l(), u();
  };
  return Co(f), {
    isSupported: i,
    stop: f
  };
}
var yi = Object.getOwnPropertySymbols, yg = Object.prototype.hasOwnProperty, bg = Object.prototype.propertyIsEnumerable, _g = (e, t) => {
  var n = {};
  for (var o in e)
    yg.call(e, o) && t.indexOf(o) < 0 && (n[o] = e[o]);
  if (e != null && yi)
    for (var o of yi(e))
      t.indexOf(o) < 0 && bg.call(e, o) && (n[o] = e[o]);
  return n;
};
function wg(e, t, n = {}) {
  const o = n, { window: r = gr } = o, s = _g(o, ["window"]);
  let a;
  const i = au(() => r && "MutationObserver" in r), l = () => {
    a && (a.disconnect(), a = void 0);
  }, u = Q(() => Gt(e), (p) => {
    l(), i.value && r && p && (a = new MutationObserver(t), a.observe(p, s));
  }, { immediate: !0 }), f = () => {
    l(), u();
  };
  return Co(f), {
    isSupported: i,
    stop: f
  };
}
var bi;
(function(e) {
  e.UP = "UP", e.RIGHT = "RIGHT", e.DOWN = "DOWN", e.LEFT = "LEFT", e.NONE = "NONE";
})(bi || (bi = {}));
var Cg = Object.defineProperty, _i = Object.getOwnPropertySymbols, Eg = Object.prototype.hasOwnProperty, Sg = Object.prototype.propertyIsEnumerable, wi = (e, t, n) => t in e ? Cg(e, t, { enumerable: !0, configurable: !0, writable: !0, value: n }) : e[t] = n, Tg = (e, t) => {
  for (var n in t || (t = {}))
    Eg.call(t, n) && wi(e, n, t[n]);
  if (_i)
    for (var n of _i(t))
      Sg.call(t, n) && wi(e, n, t[n]);
  return e;
};
const kg = {
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
Tg({
  linear: fg
}, kg);
class Og extends Error {
  constructor(t) {
    super(t), this.name = "ElementPlusError";
  }
}
function Lg(e, t) {
  throw new Og(`[${e}] ${t}`);
}
const Ci = {
  current: 0
}, Ei = x(0), iu = 2e3, Si = Symbol("elZIndexContextKey"), lu = Symbol("zIndexContextKey"), uu = (e) => {
  const t = Ke() ? fe(Si, Ci) : Ci, n = e || (Ke() ? fe(lu, void 0) : void 0), o = P(() => {
    const a = c(n);
    return Re(a) ? a : iu;
  }), r = P(() => o.value + Ei.value), s = () => (t.current++, Ei.value = t.current, r.value);
  return !Ie && fe(Si), {
    initialZIndex: o,
    currentZIndex: r,
    nextZIndex: s
  };
};
var Ig = {
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
const Pg = (e) => (t, n) => Ag(t, n, c(e)), Ag = (e, t, n) => cn(n, e, e).replace(/\{(\w+)\}/g, (o, r) => {
  var s;
  return `${(s = t?.[r]) != null ? s : `{${r}}`}`;
}), Ng = (e) => {
  const t = P(() => c(e).name), n = lo(e) ? e : x(e);
  return {
    lang: t,
    locale: n,
    t: Pg(e)
  };
}, cu = Symbol("localeContextKey"), du = (e) => {
  const t = e || fe(cu, x());
  return Ng(P(() => t.value || Ig));
}, fu = "__epPropKey", X = (e) => e, Mg = (e) => dt(e) && !!e[fu], yr = (e, t) => {
  if (!dt(e) || Mg(e))
    return e;
  const { values: n, required: o, default: r, type: s, validator: a } = e, l = {
    type: s,
    required: !!o,
    validator: n || a ? (u) => {
      let f = !1, p = [];
      if (n && (p = Array.from(n), za(e, "default") && p.push(r), f || (f = p.includes(u))), a && (f || (f = a(u))), !f && p.length > 0) {
        const m = [...new Set(p)].map((g) => JSON.stringify(g)).join(", ");
        Tc(`Invalid prop: validation failed${t ? ` for prop "${t}"` : ""}. Expected one of [${m}], got value ${JSON.stringify(u)}.`);
      }
      return f;
    } : void 0,
    [fu]: !0
  };
  return za(e, "default") && (l.default = r), l;
}, we = (e) => Xo(Object.entries(e).map(([t, n]) => [
  t,
  yr(n, t)
])), pu = ["", "default", "small", "large"], Ps = yr({
  type: String,
  values: pu,
  required: !1
}), mu = Symbol("size"), Rg = () => {
  const e = fe(mu, {});
  return P(() => c(e.size) || "");
}, hu = Symbol("emptyValuesContextKey"), $g = ["", void 0, null], Dg = void 0, vu = we({
  emptyValues: Array,
  valueOnClear: {
    type: [String, Number, Boolean, Function],
    default: void 0,
    validator: (e) => Me(e) ? !e() : !e
  }
}), Fg = (e, t) => {
  const n = Ke() ? fe(hu, x({})) : x({}), o = P(() => e.emptyValues || n.value.emptyValues || $g), r = P(() => Me(e.valueOnClear) ? e.valueOnClear() : e.valueOnClear !== void 0 ? e.valueOnClear : Me(n.value.valueOnClear) ? n.value.valueOnClear() : n.value.valueOnClear !== void 0 ? n.value.valueOnClear : Dg), s = (a) => o.value.includes(a);
  return o.value.includes(r.value), {
    emptyValues: o,
    valueOnClear: r,
    isEmptyValue: s
  };
}, Ti = (e) => Object.keys(e), er = x();
function gu(e, t = void 0) {
  return Ke() ? fe(Bl, er) : er;
}
function yu(e, t) {
  const n = gu(), o = $e(e, P(() => {
    var i;
    return ((i = n.value) == null ? void 0 : i.namespace) || Uo;
  })), r = du(P(() => {
    var i;
    return (i = n.value) == null ? void 0 : i.locale;
  })), s = uu(P(() => {
    var i;
    return ((i = n.value) == null ? void 0 : i.zIndex) || iu;
  })), a = P(() => {
    var i;
    return c(t) || ((i = n.value) == null ? void 0 : i.size) || "";
  });
  return bu(P(() => c(n) || {})), {
    ns: o,
    locale: r,
    zIndex: s,
    size: a
  };
}
const bu = (e, t, n = !1) => {
  var o;
  const r = !!Ke(), s = r ? gu() : void 0, a = (o = void 0) != null ? o : r ? Rt : void 0;
  if (!a)
    return;
  const i = P(() => {
    const l = c(e);
    return s?.value ? xg(s.value, l) : l;
  });
  return a(Bl, i), a(cu, P(() => i.value.locale)), a(jl, P(() => i.value.namespace)), a(lu, P(() => i.value.zIndex)), a(mu, {
    size: P(() => i.value.size || "")
  }), a(hu, P(() => ({
    emptyValues: i.value.emptyValues,
    valueOnClear: i.value.valueOnClear
  }))), (n || !er.value) && (er.value = i.value), i;
}, xg = (e, t) => {
  const n = [.../* @__PURE__ */ new Set([...Ti(e), ...Ti(t)])], o = {};
  for (const r of n)
    o[r] = t[r] !== void 0 ? t[r] : e[r];
  return o;
}, Vt = "update:modelValue", tr = "change", ki = "input";
var Ee = (e, t) => {
  const n = e.__vccOpts || e;
  for (const [o, r] of t)
    n[o] = r;
  return n;
};
function go(e, t = "px") {
  if (!e)
    return "";
  if (Re(e) || ng(e))
    return `${e}${t}`;
  if (pt(e))
    return e;
}
function zg(e, t) {
  if (!Ie)
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
}, _u = (e, t) => (e.install = (n) => {
  e._context = n._context, n.config.globalProperties[t] = e;
}, e), wu = (e) => (e.install = mo, e), Wg = we({
  size: {
    type: X([Number, String])
  },
  color: {
    type: String
  }
}), Bg = q({
  name: "ElIcon",
  inheritAttrs: !1
}), jg = /* @__PURE__ */ q({
  ...Bg,
  props: Wg,
  setup(e) {
    const t = e, n = $e("icon"), o = P(() => {
      const { size: r, color: s } = t;
      return !r && !s ? {} : {
        fontSize: $n(r) ? void 0 : go(r),
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
var Vg = /* @__PURE__ */ Ee(jg, [["__file", "icon.vue"]]);
const ct = tn(Vg);
/*! Element Plus Icons Vue v2.3.1 */
var Ug = /* @__PURE__ */ q({
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
}), Hg = Ug, Kg = /* @__PURE__ */ q({
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
}), Gg = Kg, Yg = /* @__PURE__ */ q({
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
}), Zg = Yg, qg = /* @__PURE__ */ q({
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
}), As = qg, Jg = /* @__PURE__ */ q({
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
}), nr = Jg, Xg = /* @__PURE__ */ q({
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
}), Qg = Xg, ey = /* @__PURE__ */ q({
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
}), ty = ey, ny = /* @__PURE__ */ q({
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
}), oy = ny, ry = /* @__PURE__ */ q({
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
}), sy = ry, ay = /* @__PURE__ */ q({
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
}), iy = ay, ly = /* @__PURE__ */ q({
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
}), uy = ly;
const Wn = X([
  String,
  Object,
  Function
]), cy = {
  Close: nr
}, dy = {
  Close: nr
}, or = {
  success: sy,
  warning: uy,
  error: Zg,
  info: ty
}, Cu = {
  validating: oy,
  success: Gg,
  error: As
}, fy = () => Ie && /firefox/i.test(window.navigator.userAgent);
let Ze;
const py = {
  height: "0",
  visibility: "hidden",
  overflow: fy() ? "" : "hidden",
  position: "absolute",
  "z-index": "-1000",
  top: "0",
  right: "0"
}, my = [
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
function hy(e) {
  const t = window.getComputedStyle(e), n = t.getPropertyValue("box-sizing"), o = Number.parseFloat(t.getPropertyValue("padding-bottom")) + Number.parseFloat(t.getPropertyValue("padding-top")), r = Number.parseFloat(t.getPropertyValue("border-bottom-width")) + Number.parseFloat(t.getPropertyValue("border-top-width"));
  return { contextStyle: my.map((a) => [
    a,
    t.getPropertyValue(a)
  ]), paddingSize: o, borderSize: r, boxSizing: n };
}
function Oi(e, t = 1, n) {
  var o;
  Ze || (Ze = document.createElement("textarea"), document.body.appendChild(Ze));
  const { paddingSize: r, borderSize: s, boxSizing: a, contextStyle: i } = hy(e);
  i.forEach(([p, m]) => Ze?.style.setProperty(p, m)), Object.entries(py).forEach(([p, m]) => Ze?.style.setProperty(p, m, "important")), Ze.value = e.value || e.placeholder || "";
  let l = Ze.scrollHeight;
  const u = {};
  a === "border-box" ? l = l + s : a === "content-box" && (l = l - r), Ze.value = "";
  const f = Ze.scrollHeight - r;
  if (Re(t)) {
    let p = f * t;
    a === "border-box" && (p = p + r + s), l = Math.max(p, l), u.minHeight = `${p}px`;
  }
  if (Re(n)) {
    let p = f * n;
    a === "border-box" && (p = p + r + s), l = Math.min(p, l);
  }
  return u.height = `${l}px`, (o = Ze.parentNode) == null || o.removeChild(Ze), Ze = void 0, u;
}
const Eu = (e) => e, vy = we({
  ariaLabel: String,
  ariaOrientation: {
    type: String,
    values: ["horizontal", "vertical", "undefined"]
  },
  ariaControls: String
}), Eo = (e) => tg(vy, e), gy = we({
  id: {
    type: String,
    default: void 0
  },
  size: Ps,
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
    type: Wn
  },
  prefixIcon: {
    type: Wn
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
    default: () => Eu({})
  },
  autofocus: Boolean,
  rows: {
    type: Number,
    default: 2
  },
  ...Eo(["ariaLabel"])
}), yy = {
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
}, by = ["class", "style"], _y = /^on[A-Z]/, wy = (e = {}) => {
  const { excludeListeners: t = !1, excludeKeys: n } = e, o = P(() => (n?.value || []).concat(by)), r = Ke();
  return r ? P(() => {
    var s;
    return Xo(Object.entries((s = r.proxy) == null ? void 0 : s.$attrs).filter(([a]) => !o.value.includes(a) && !(t && _y.test(a))));
  }) : P(() => ({}));
}, Ns = Symbol("formContextKey"), rr = Symbol("formItemContextKey"), Li = {
  prefix: Math.floor(Math.random() * 1e4),
  current: 0
}, Cy = Symbol("elIdInjection"), Su = () => Ke() ? fe(Cy, Li) : Li, br = (e) => {
  const t = Su(), n = ws();
  return cg(() => c(e) || `${n.value}-id-${t.prefix}-${t.current++}`);
}, Tu = () => {
  const e = fe(Ns, void 0), t = fe(rr, void 0);
  return {
    form: e,
    formItem: t
  };
}, ku = (e, {
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
  return Ae(() => {
    s = Q([Ut(e, "id"), n], ([i, l]) => {
      const u = i ?? (l ? void 0 : br().value);
      u !== r.value && (t?.removeInputId && (r.value && t.removeInputId(r.value), !o?.value && !l && u && t.addInputId(u)), r.value = u);
    }, { immediate: !0 });
  }), cs(() => {
    s && s(), t?.removeInputId && r.value && t.removeInputId(r.value);
  }), {
    isLabeledByFormItem: a,
    inputId: r
  };
}, Ou = (e) => {
  const t = Ke();
  return P(() => {
    var n, o;
    return (o = (n = t?.proxy) == null ? void 0 : n.$props) == null ? void 0 : o[e];
  });
}, Ms = (e, t = {}) => {
  const n = x(void 0), o = t.prop ? n : Ou("size"), r = t.global ? n : Rg(), s = t.form ? { size: void 0 } : fe(Ns, void 0), a = t.formItem ? { size: void 0 } : fe(rr, void 0);
  return P(() => o.value || c(e) || a?.size || s?.size || r.value || "");
}, Ey = (e) => {
  const t = Ou("disabled"), n = fe(Ns, void 0);
  return P(() => t.value || c(e) || n?.disabled || !1);
};
function Lu(e, {
  beforeFocus: t,
  afterFocus: n,
  beforeBlur: o,
  afterBlur: r
} = {}) {
  const s = Ke(), { emit: a } = s, i = dn(), l = x(!1), u = (m) => {
    Me(t) && t(m) || l.value || (l.value = !0, a("focus", m), n?.());
  }, f = (m) => {
    var g;
    Me(o) && o(m) || m.relatedTarget && ((g = i.value) != null && g.contains(m.relatedTarget)) || (l.value = !1, a("blur", m), r?.());
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
const Sy = (e) => /([\uAC00-\uD7AF\u3130-\u318F])+/gi.test(e);
function Iu({
  afterComposition: e,
  emit: t
}) {
  const n = x(!1), o = (i) => {
    t?.("compositionstart", i), n.value = !0;
  }, r = (i) => {
    var l;
    t?.("compositionupdate", i);
    const u = (l = i.target) == null ? void 0 : l.value, f = u[u.length - 1] || "";
    n.value = !Sy(f);
  }, s = (i) => {
    t?.("compositionend", i), n.value && (n.value = !1, Te(() => e(i)));
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
function Ty(e) {
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
const ky = "ElInput", Oy = q({
  name: ky,
  inheritAttrs: !1
}), Ly = /* @__PURE__ */ q({
  ...Oy,
  props: gy,
  emits: yy,
  setup(e, { expose: t, emit: n }) {
    const o = e, r = kc(), s = wy(), a = Oc(), i = P(() => [
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
    ]), { form: u, formItem: f } = Tu(), { inputId: p } = ku(o, {
      formItemContext: f
    }), m = Ms(), g = Ey(), h = $e("input"), v = $e("textarea"), w = dn(), d = dn(), E = x(!1), L = x(!1), S = x(), T = dn(o.inputStyle), I = P(() => w.value || d.value), { wrapperRef: k, isFocused: $, handleFocus: C, handleBlur: D } = Lu(I, {
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
    }), Y = P(() => f?.validateState || ""), se = P(() => Y.value && Cu[Y.value]), Ce = P(() => L.value ? iy : Qg), me = P(() => [
      r.style
    ]), oe = P(() => [
      o.inputStyle,
      T.value,
      { resize: o.resize }
    ]), W = P(() => vr(o.modelValue) ? "" : String(o.modelValue)), he = P(() => o.clearable && !g.value && !o.readonly && !!W.value && ($.value || E.value)), pe = P(() => o.showPassword && !g.value && !!W.value && (!!W.value || $.value)), Se = P(() => o.showWordLimit && !!o.maxlength && (o.type === "text" || o.type === "textarea") && !g.value && !o.readonly && !o.showPassword), Ge = P(() => W.value.length), Ye = P(() => !!Se.value && Ge.value > Number(o.maxlength)), at = P(() => !!a.suffix || !!o.suffixIcon || he.value || o.showPassword || Se.value || !!Y.value && K.value), [xe, De] = Ty(w);
    Lt(d, (y) => {
      if (ve(), !Se.value || o.resize !== "both")
        return;
      const N = y[0], { width: te } = N.contentRect;
      S.value = {
        right: `calc(100% - ${te + 15 + 6}px)`
      };
    });
    const ze = () => {
      const { type: y, autosize: N } = o;
      if (!(!Ie || y !== "textarea" || !d.value))
        if (N) {
          const te = dt(N) ? N.minRows : void 0, ce = dt(N) ? N.maxRows : void 0, Be = Oi(d.value, te, ce);
          T.value = {
            overflowY: "hidden",
            ...Be
          }, Te(() => {
            d.value.offsetHeight, T.value = Be;
          });
        } else
          T.value = {
            minHeight: Oi(d.value).minHeight
          };
    }, ve = ((y) => {
      let N = !1;
      return () => {
        var te;
        if (N || !o.autosize)
          return;
        ((te = d.value) == null ? void 0 : te.offsetParent) === null || (y(), N = !0);
      };
    })(ze), Xe = () => {
      const y = I.value, N = o.formatter ? o.formatter(W.value) : W.value;
      !y || y.value === N || (y.value = N);
    }, it = async (y) => {
      xe();
      let { value: N } = y.target;
      if (o.formatter && o.parser && (N = o.parser(N)), !yt.value) {
        if (N === W.value) {
          Xe();
          return;
        }
        n(Vt, N), n(ki, N), await Te(), Xe(), De();
      }
    }, Qe = (y) => {
      let { value: N } = y.target;
      o.formatter && o.parser && (N = o.parser(N)), n(tr, N);
    }, {
      isComposing: yt,
      handleCompositionStart: et,
      handleCompositionUpdate: tt,
      handleCompositionEnd: nt
    } = Iu({ emit: n, afterComposition: it }), lt = () => {
      xe(), L.value = !L.value, setTimeout(De);
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
      n(Vt, ""), n(tr, ""), n("clear"), n(ki, "");
    };
    return Q(() => o.modelValue, () => {
      var y;
      Te(() => ze()), o.validateEvent && ((y = f?.validate) == null || y.call(f, "change").catch((N) => void 0));
    }), Q(W, () => Xe()), Q(() => o.type, async () => {
      await Te(), Xe(), ze();
    }), Ae(() => {
      !o.formatter && o.parser, Xe(), Te(ze);
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
      resizeTextarea: ze
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
              !c(he) || !c(pe) || !c(Se) ? (R(), G(ft, { key: 0 }, [
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
                onMousedown: He(c(mo), ["prevent"]),
                onClick: J
              }, {
                default: ne(() => [
                  z(c(As))
                ]),
                _: 1
              }, 8, ["class", "onMousedown"])) : U("v-if", !0),
              c(pe) ? (R(), ee(c(ct), {
                key: 2,
                class: j([c(h).e("icon"), c(h).e("password")]),
                onClick: lt
              }, {
                default: ne(() => [
                  (R(), ee(It(c(Ce))))
                ]),
                _: 1
              }, 8, ["class"])) : U("v-if", !0),
              c(Se) ? (R(), G("span", {
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
        c(Se) ? (R(), G("span", {
          key: 0,
          style: Ue(S.value),
          class: j(c(h).e("count"))
        }, V(c(Ge)) + " / " + V(y.maxlength), 7)) : U("v-if", !0)
      ], 64))
    ], 38));
  }
});
var Iy = /* @__PURE__ */ Ee(Ly, [["__file", "input.vue"]]);
const Py = tn(Iy), An = 4, Ay = {
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
}, Ny = ({
  move: e,
  size: t,
  bar: n
}) => ({
  [n.size]: t,
  transform: `translate${n.axis}(${e}%)`
}), Rs = Symbol("scrollbarContextKey"), My = we({
  vertical: Boolean,
  size: String,
  move: Number,
  ratio: {
    type: Number,
    required: !0
  },
  always: Boolean
}), Ry = "Thumb", $y = /* @__PURE__ */ q({
  __name: "thumb",
  props: My,
  setup(e) {
    const t = e, n = fe(Rs), o = $e("scrollbar");
    n || Lg(Ry, "can not inject scrollbar context");
    const r = x(), s = x(), a = x({}), i = x(!1);
    let l = !1, u = !1, f = Ie ? document.onselectstart : null;
    const p = P(() => Ay[t.vertical ? "vertical" : "horizontal"]), m = P(() => Ny({
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
        Le(O("div", {
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
var Ii = /* @__PURE__ */ Ee($y, [["__file", "thumb.vue"]]);
const Dy = we({
  always: {
    type: Boolean,
    default: !0
  },
  minSize: {
    type: Number,
    required: !0
  }
}), Fy = /* @__PURE__ */ q({
  __name: "bar",
  props: Dy,
  setup(e, { expose: t }) {
    const n = e, o = fe(Rs), r = x(0), s = x(0), a = x(""), i = x(""), l = x(1), u = x(1);
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
      z(Ii, {
        move: r.value,
        ratio: u.value,
        size: a.value,
        always: m.always
      }, null, 8, ["move", "ratio", "size", "always"]),
      z(Ii, {
        move: s.value,
        ratio: l.value,
        size: i.value,
        vertical: "",
        always: m.always
      }, null, 8, ["move", "ratio", "size", "always"])
    ], 64));
  }
});
var xy = /* @__PURE__ */ Ee(Fy, [["__file", "bar.vue"]]);
const zy = we({
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
  ...Eo(["ariaLabel", "ariaOrientation"])
}), Wy = {
  scroll: ({
    scrollTop: e,
    scrollLeft: t
  }) => [e, t].every(Re)
}, By = "ElScrollbar", jy = q({
  name: By
}), Vy = /* @__PURE__ */ q({
  ...jy,
  props: zy,
  emits: Wy,
  setup(e, { expose: t, emit: n }) {
    const o = e, r = $e("scrollbar");
    let s, a, i = 0, l = 0;
    const u = x(), f = x(), p = x(), m = x(), g = P(() => {
      const T = {};
      return o.height && (T.height = go(o.height)), o.maxHeight && (T.maxHeight = go(o.maxHeight)), [o.wrapStyle, T];
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
      dt(T) ? f.value.scrollTo(T) : Re(T) && Re(I) && f.value.scrollTo(T, I);
    }
    const E = (T) => {
      Re(T) && (f.value.scrollTop = T);
    }, L = (T) => {
      Re(T) && (f.value.scrollLeft = T);
    }, S = () => {
      var T;
      (T = m.value) == null || T.update();
    };
    return Q(() => o.noresize, (T) => {
      T ? (s?.(), a?.()) : ({ stop: s } = Lt(p, S), a = Et("resize", S));
    }, { immediate: !0 }), Q(() => [o.maxHeight, o.height], () => {
      o.native || Te(() => {
        var T;
        S(), f.value && ((T = m.value) == null || T.handleScroll(f.value));
      });
    }), Rt(Rs, wn({
      scrollbarElement: u,
      wrapElement: f
    })), Lc(() => {
      f.value && (f.value.scrollTop = i, f.value.scrollLeft = l);
    }), Ae(() => {
      o.native || Te(() => {
        S();
      });
    }), Ic(() => S()), t({
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
      T.native ? U("v-if", !0) : (R(), ee(xy, {
        key: 0,
        ref_key: "barRef",
        ref: m,
        always: T.always,
        "min-size": T.minSize
      }, null, 8, ["always", "min-size"]))
    ], 2));
  }
});
var Uy = /* @__PURE__ */ Ee(Vy, [["__file", "scrollbar.vue"]]);
const Hy = tn(Uy), $s = Symbol("popper"), Pu = Symbol("popperContent"), Ky = [
  "dialog",
  "grid",
  "group",
  "listbox",
  "menu",
  "navigation",
  "tooltip",
  "tree"
], Au = we({
  role: {
    type: String,
    values: Ky,
    default: "tooltip"
  }
}), Gy = q({
  name: "ElPopper",
  inheritAttrs: !1
}), Yy = /* @__PURE__ */ q({
  ...Gy,
  props: Au,
  setup(e, { expose: t }) {
    const n = e, o = x(), r = x(), s = x(), a = x(), i = P(() => n.role), l = {
      triggerRef: o,
      popperInstanceRef: r,
      contentRef: s,
      referenceRef: a,
      role: i
    };
    return t(l), Rt($s, l), (u, f) => ae(u.$slots, "default");
  }
});
var Zy = /* @__PURE__ */ Ee(Yy, [["__file", "popper.vue"]]);
const Nu = we({
  arrowOffset: {
    type: Number,
    default: 5
  }
}), qy = q({
  name: "ElPopperArrow",
  inheritAttrs: !1
}), Jy = /* @__PURE__ */ q({
  ...qy,
  props: Nu,
  setup(e, { expose: t }) {
    const n = e, o = $e("popper"), { arrowOffset: r, arrowRef: s, arrowStyle: a } = fe(Pu, void 0);
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
var Xy = /* @__PURE__ */ Ee(Jy, [["__file", "arrow.vue"]]);
const Mu = we({
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
}), Ru = Symbol("elForwardRef"), Qy = (e) => {
  Rt(Ru, {
    setForwardRef: (n) => {
      e.value = n;
    }
  });
}, eb = (e) => ({
  mounted(t) {
    e(t);
  },
  updated(t) {
    e(t);
  },
  unmounted() {
    e(null);
  }
}), ss = (e) => {
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
}, tb = "ElOnlyChild", nb = q({
  name: tb,
  setup(e, {
    slots: t,
    attrs: n
  }) {
    var o;
    const r = fe(Ru), s = eb((o = r?.setForwardRef) != null ? o : mo);
    return () => {
      var a;
      const i = (a = t.default) == null ? void 0 : a.call(t, n);
      if (!i || i.length > 1)
        return null;
      const l = $u(i);
      return l ? Le(Pc(l, n), [[s]]) : null;
    };
  }
});
function $u(e) {
  if (!e)
    return null;
  const t = e;
  for (const n of t) {
    if (dt(n))
      switch (n.type) {
        case Ac:
          continue;
        case ol:
        case "svg":
          return Pi(n);
        case ft:
          return $u(n.children);
        default:
          return n;
      }
    return Pi(n);
  }
  return null;
}
function Pi(e) {
  const t = $e("only-child");
  return z("span", {
    class: t.e("content")
  }, [e]);
}
const ob = q({
  name: "ElPopperTrigger",
  inheritAttrs: !1
}), rb = /* @__PURE__ */ q({
  ...ob,
  props: Mu,
  setup(e, { expose: t }) {
    const n = e, { role: o, triggerRef: r } = fe($s, void 0);
    Qy(r);
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
    return Ae(() => {
      Q(() => n.virtualRef, (p) => {
        p && (r.value = Gt(p));
      }, {
        immediate: !0
      }), Q(r, (p, m) => {
        u?.(), u = void 0, Ct(p) && (f.forEach((g) => {
          var h;
          const v = n[g];
          v && (p.addEventListener(g.slice(2).toLowerCase(), v), (h = m?.removeEventListener) == null || h.call(m, g.slice(2).toLowerCase(), v));
        }), ss(p) && (u = Q([s, a, i, l], (g) => {
          [
            "aria-controls",
            "aria-describedby",
            "aria-haspopup",
            "aria-expanded"
          ].forEach((h, v) => {
            vr(g[v]) ? p.removeAttribute(h) : p.setAttribute(h, g[v]);
          });
        }, { immediate: !0 }))), Ct(m) && ss(m) && [
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
    }), (p, m) => p.virtualTriggering ? U("v-if", !0) : (R(), ee(c(nb), Dn({ key: 0 }, p.$attrs, {
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
var sb = /* @__PURE__ */ Ee(rb, [["__file", "trigger.vue"]]);
const Fr = "focus-trap.focus-after-trapped", xr = "focus-trap.focus-after-released", ab = "focus-trap.focusout-prevented", Ai = {
  cancelable: !0,
  bubbles: !1
}, ib = {
  cancelable: !0,
  bubbles: !1
}, Ni = "focusAfterTrapped", Mi = "focusAfterReleased", lb = Symbol("elFocusTrap"), Ds = x(), _r = x(0), Fs = x(0);
let Do = 0;
const Du = (e) => {
  const t = [], n = document.createTreeWalker(e, NodeFilter.SHOW_ELEMENT, {
    acceptNode: (o) => {
      const r = o.tagName === "INPUT" && o.type === "hidden";
      return o.disabled || o.hidden || r ? NodeFilter.FILTER_SKIP : o.tabIndex >= 0 || o === document.activeElement ? NodeFilter.FILTER_ACCEPT : NodeFilter.FILTER_SKIP;
    }
  });
  for (; n.nextNode(); )
    t.push(n.currentNode);
  return t;
}, Ri = (e, t) => {
  for (const n of e)
    if (!ub(n, t))
      return n;
}, ub = (e, t) => {
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
}, cb = (e) => {
  const t = Du(e), n = Ri(t, e), o = Ri(t.reverse(), e);
  return [n, o];
}, db = (e) => e instanceof HTMLInputElement && "select" in e, Wt = (e, t) => {
  if (e && e.focus) {
    const n = document.activeElement;
    let o = !1;
    Ct(e) && !ss(e) && !e.getAttribute("tabindex") && (e.setAttribute("tabindex", "-1"), o = !0), e.focus({ preventScroll: !0 }), Fs.value = window.performance.now(), e !== n && db(e) && t && e.select(), Ct(e) && o && e.removeAttribute("tabindex");
  }
};
function $i(e, t) {
  const n = [...e], o = e.indexOf(t);
  return o !== -1 && n.splice(o, 1), n;
}
const fb = () => {
  let e = [];
  return {
    push: (o) => {
      const r = e[0];
      r && o !== r && r.pause(), e = $i(e, o), e.unshift(o);
    },
    remove: (o) => {
      var r, s;
      e = $i(e, o), (s = (r = e[0]) == null ? void 0 : r.resume) == null || s.call(r);
    }
  };
}, pb = (e, t = !1) => {
  const n = document.activeElement;
  for (const o of e)
    if (Wt(o, t), document.activeElement !== n)
      return;
}, Di = fb(), mb = () => _r.value > Fs.value, Fo = () => {
  Ds.value = "pointer", _r.value = window.performance.now();
}, Fi = () => {
  Ds.value = "keyboard", _r.value = window.performance.now();
}, hb = () => (Ae(() => {
  Do === 0 && (document.addEventListener("mousedown", Fo), document.addEventListener("touchstart", Fo), document.addEventListener("keydown", Fi)), Do++;
}), Ft(() => {
  Do--, Do <= 0 && (document.removeEventListener("mousedown", Fo), document.removeEventListener("touchstart", Fo), document.removeEventListener("keydown", Fi));
}), {
  focusReason: Ds,
  lastUserFocusTimestamp: _r,
  lastAutomatedFocusTimestamp: Fs
}), xo = (e) => new CustomEvent(ab, {
  ...ib,
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
const xi = (e) => {
  e.code === Nt.esc && Rn.forEach((t) => t(e));
}, vb = (e) => {
  Ae(() => {
    Rn.length === 0 && document.addEventListener("keydown", xi), Ie && Rn.push(e);
  }), Ft(() => {
    Rn = Rn.filter((t) => t !== e), Rn.length === 0 && Ie && document.removeEventListener("keydown", xi);
  });
}, gb = q({
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
    Ni,
    Mi,
    "focusin",
    "focusout",
    "focusout-prevented",
    "release-requested"
  ],
  setup(e, { emit: t }) {
    const n = x();
    let o, r;
    const { focusReason: s } = hb();
    vb((h) => {
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
        const $ = L, [C, D] = cb($);
        if (C && D) {
          if (!S && k === D) {
            const Y = xo({
              focusReason: s.value
            });
            t("focusout-prevented", Y), Y.defaultPrevented || (h.preventDefault(), T && Wt(C, !0));
          } else if (S && [C, $].includes(k)) {
            const Y = xo({
              focusReason: s.value
            });
            t("focusout-prevented", Y), Y.defaultPrevented || (h.preventDefault(), T && Wt(D, !0));
          }
        } else if (k === $) {
          const Y = xo({
            focusReason: s.value
          });
          t("focusout-prevented", Y), Y.defaultPrevented || h.preventDefault();
        }
      }
    };
    Rt(lb, {
      focusTrapRef: n,
      onKeydown: i
    }), Q(() => e.focusTrapEl, (h) => {
      h && (n.value = h);
    }, { immediate: !0 }), Q([n], ([h], [v]) => {
      h && (h.addEventListener("keydown", i), h.addEventListener("focusin", f), h.addEventListener("focusout", p)), v && (v.removeEventListener("keydown", i), v.removeEventListener("focusin", f), v.removeEventListener("focusout", p));
    });
    const l = (h) => {
      t(Ni, h);
    }, u = (h) => t(Mi, h), f = (h) => {
      const v = c(n);
      if (!v)
        return;
      const w = h.target, d = h.relatedTarget, E = w && v.contains(w);
      e.trapped || d && v.contains(d) || (o = d), E && t("focusin", h), !a.paused && e.trapped && (E ? r = w : Wt(r, !0));
    }, p = (h) => {
      const v = c(n);
      if (!(a.paused || !v))
        if (e.trapped) {
          const w = h.relatedTarget;
          !vr(w) && !v.contains(w) && setTimeout(() => {
            if (!a.paused && e.trapped) {
              const d = xo({
                focusReason: s.value
              });
              t("focusout-prevented", d), d.defaultPrevented || Wt(r, !0);
            }
          }, 0);
        } else {
          const w = h.target;
          w && v.contains(w) || t("focusout", h);
        }
    };
    async function m() {
      await Te();
      const h = c(n);
      if (h) {
        Di.push(a);
        const v = h.contains(document.activeElement) ? o : document.activeElement;
        if (o = v, !h.contains(v)) {
          const d = new Event(Fr, Ai);
          h.addEventListener(Fr, l), h.dispatchEvent(d), d.defaultPrevented || Te(() => {
            let E = e.focusStartEl;
            pt(E) || (Wt(E), document.activeElement !== E && (E = "first")), E === "first" && pb(Du(h), !0), (document.activeElement === v || E === "container") && Wt(h);
          });
        }
      }
    }
    function g() {
      const h = c(n);
      if (h) {
        h.removeEventListener(Fr, l);
        const v = new CustomEvent(xr, {
          ...Ai,
          detail: {
            focusReason: s.value
          }
        });
        h.addEventListener(xr, u), h.dispatchEvent(v), !v.defaultPrevented && (s.value == "keyboard" || !mb() || h.contains(document.activeElement)) && Wt(o ?? document.body), h.removeEventListener(xr, u), Di.remove(a);
      }
    }
    return Ae(() => {
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
function yb(e, t, n, o, r, s) {
  return ae(e.$slots, "default", { handleKeydown: e.onKeydown });
}
var bb = /* @__PURE__ */ Ee(gb, [["render", yb], ["__file", "focus-trap.vue"]]), qe = "top", vt = "bottom", gt = "right", Je = "left", xs = "auto", So = [qe, vt, gt, Je], Bn = "start", yo = "end", _b = "clippingParents", Fu = "viewport", eo = "popper", wb = "reference", zi = So.reduce(function(e, t) {
  return e.concat([t + "-" + Bn, t + "-" + yo]);
}, []), wr = [].concat(So, [xs]).reduce(function(e, t) {
  return e.concat([t, t + "-" + Bn, t + "-" + yo]);
}, []), Cb = "beforeRead", Eb = "read", Sb = "afterRead", Tb = "beforeMain", kb = "main", Ob = "afterMain", Lb = "beforeWrite", Ib = "write", Pb = "afterWrite", Ab = [Cb, Eb, Sb, Tb, kb, Ob, Lb, Ib, Pb];
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
function zs(e) {
  if (typeof ShadowRoot > "u") return !1;
  var t = st(e).ShadowRoot;
  return e instanceof t || e instanceof ShadowRoot;
}
function Nb(e) {
  var t = e.state;
  Object.keys(t.elements).forEach(function(n) {
    var o = t.styles[n] || {}, r = t.attributes[n] || {}, s = t.elements[n];
    !mt(s) || !Dt(s) || (Object.assign(s.style, o), Object.keys(r).forEach(function(a) {
      var i = r[a];
      i === !1 ? s.removeAttribute(a) : s.setAttribute(a, i === !0 ? "" : i);
    }));
  });
}
function Mb(e) {
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
var xu = { name: "applyStyles", enabled: !0, phase: "write", fn: Nb, effect: Mb, requires: ["computeStyles"] };
function Mt(e) {
  return e.split("-")[0];
}
var _n = Math.max, sr = Math.min, jn = Math.round;
function as() {
  var e = navigator.userAgentData;
  return e != null && e.brands && Array.isArray(e.brands) ? e.brands.map(function(t) {
    return t.brand + "/" + t.version;
  }).join(" ") : navigator.userAgent;
}
function zu() {
  return !/^((?!chrome|android).)*safari/i.test(as());
}
function Vn(e, t, n) {
  t === void 0 && (t = !1), n === void 0 && (n = !1);
  var o = e.getBoundingClientRect(), r = 1, s = 1;
  t && mt(e) && (r = e.offsetWidth > 0 && jn(o.width) / e.offsetWidth || 1, s = e.offsetHeight > 0 && jn(o.height) / e.offsetHeight || 1);
  var a = En(e) ? st(e) : window, i = a.visualViewport, l = !zu() && n, u = (o.left + (l && i ? i.offsetLeft : 0)) / r, f = (o.top + (l && i ? i.offsetTop : 0)) / s, p = o.width / r, m = o.height / s;
  return { width: p, height: m, top: f, right: u + p, bottom: f + m, left: u, x: u, y: f };
}
function Ws(e) {
  var t = Vn(e), n = e.offsetWidth, o = e.offsetHeight;
  return Math.abs(t.width - n) <= 1 && (n = t.width), Math.abs(t.height - o) <= 1 && (o = t.height), { x: e.offsetLeft, y: e.offsetTop, width: n, height: o };
}
function Wu(e, t) {
  var n = t.getRootNode && t.getRootNode();
  if (e.contains(t)) return !0;
  if (n && zs(n)) {
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
function Rb(e) {
  return ["table", "td", "th"].indexOf(Dt(e)) >= 0;
}
function hn(e) {
  return ((En(e) ? e.ownerDocument : e.document) || window.document).documentElement;
}
function Cr(e) {
  return Dt(e) === "html" ? e : e.assignedSlot || e.parentNode || (zs(e) ? e.host : null) || hn(e);
}
function Wi(e) {
  return !mt(e) || Jt(e).position === "fixed" ? null : e.offsetParent;
}
function $b(e) {
  var t = /firefox/i.test(as()), n = /Trident/i.test(as());
  if (n && mt(e)) {
    var o = Jt(e);
    if (o.position === "fixed") return null;
  }
  var r = Cr(e);
  for (zs(r) && (r = r.host); mt(r) && ["html", "body"].indexOf(Dt(r)) < 0; ) {
    var s = Jt(r);
    if (s.transform !== "none" || s.perspective !== "none" || s.contain === "paint" || ["transform", "perspective"].indexOf(s.willChange) !== -1 || t && s.willChange === "filter" || t && s.filter && s.filter !== "none") return r;
    r = r.parentNode;
  }
  return null;
}
function To(e) {
  for (var t = st(e), n = Wi(e); n && Rb(n) && Jt(n).position === "static"; ) n = Wi(n);
  return n && (Dt(n) === "html" || Dt(n) === "body" && Jt(n).position === "static") ? t : n || $b(e) || t;
}
function Bs(e) {
  return ["top", "bottom"].indexOf(e) >= 0 ? "x" : "y";
}
function ao(e, t, n) {
  return _n(e, sr(t, n));
}
function Db(e, t, n) {
  var o = ao(e, t, n);
  return o > n ? n : o;
}
function Bu() {
  return { top: 0, right: 0, bottom: 0, left: 0 };
}
function ju(e) {
  return Object.assign({}, Bu(), e);
}
function Vu(e, t) {
  return t.reduce(function(n, o) {
    return n[o] = e, n;
  }, {});
}
var Fb = function(e, t) {
  return e = typeof e == "function" ? e(Object.assign({}, t.rects, { placement: t.placement })) : e, ju(typeof e != "number" ? e : Vu(e, So));
};
function xb(e) {
  var t, n = e.state, o = e.name, r = e.options, s = n.elements.arrow, a = n.modifiersData.popperOffsets, i = Mt(n.placement), l = Bs(i), u = [Je, gt].indexOf(i) >= 0, f = u ? "height" : "width";
  if (!(!s || !a)) {
    var p = Fb(r.padding, n), m = Ws(s), g = l === "y" ? qe : Je, h = l === "y" ? vt : gt, v = n.rects.reference[f] + n.rects.reference[l] - a[l] - n.rects.popper[f], w = a[l] - n.rects.reference[l], d = To(s), E = d ? l === "y" ? d.clientHeight || 0 : d.clientWidth || 0 : 0, L = v / 2 - w / 2, S = p[g], T = E - m[f] - p[h], I = E / 2 - m[f] / 2 + L, k = ao(S, I, T), $ = l;
    n.modifiersData[o] = (t = {}, t[$] = k, t.centerOffset = k - I, t);
  }
}
function zb(e) {
  var t = e.state, n = e.options, o = n.element, r = o === void 0 ? "[data-popper-arrow]" : o;
  r != null && (typeof r == "string" && (r = t.elements.popper.querySelector(r), !r) || Wu(t.elements.popper, r) && (t.elements.arrow = r));
}
var Wb = { name: "arrow", enabled: !0, phase: "main", fn: xb, effect: zb, requires: ["popperOffsets"], requiresIfExists: ["preventOverflow"] };
function Un(e) {
  return e.split("-")[1];
}
var Bb = { top: "auto", right: "auto", bottom: "auto", left: "auto" };
function jb(e, t) {
  var n = e.x, o = e.y, r = t.devicePixelRatio || 1;
  return { x: jn(n * r) / r || 0, y: jn(o * r) / r || 0 };
}
function Bi(e) {
  var t, n = e.popper, o = e.popperRect, r = e.placement, s = e.variation, a = e.offsets, i = e.position, l = e.gpuAcceleration, u = e.adaptive, f = e.roundOffsets, p = e.isFixed, m = a.x, g = m === void 0 ? 0 : m, h = a.y, v = h === void 0 ? 0 : h, w = typeof f == "function" ? f({ x: g, y: v }) : { x: g, y: v };
  g = w.x, v = w.y;
  var d = a.hasOwnProperty("x"), E = a.hasOwnProperty("y"), L = Je, S = qe, T = window;
  if (u) {
    var I = To(n), k = "clientHeight", $ = "clientWidth";
    if (I === st(n) && (I = hn(n), Jt(I).position !== "static" && i === "absolute" && (k = "scrollHeight", $ = "scrollWidth")), I = I, r === qe || (r === Je || r === gt) && s === yo) {
      S = vt;
      var C = p && I === T && T.visualViewport ? T.visualViewport.height : I[k];
      v -= C - o.height, v *= l ? 1 : -1;
    }
    if (r === Je || (r === qe || r === vt) && s === yo) {
      L = gt;
      var D = p && I === T && T.visualViewport ? T.visualViewport.width : I[$];
      g -= D - o.width, g *= l ? 1 : -1;
    }
  }
  var K = Object.assign({ position: i }, u && Bb), Y = f === !0 ? jb({ x: g, y: v }, st(n)) : { x: g, y: v };
  if (g = Y.x, v = Y.y, l) {
    var se;
    return Object.assign({}, K, (se = {}, se[S] = E ? "0" : "", se[L] = d ? "0" : "", se.transform = (T.devicePixelRatio || 1) <= 1 ? "translate(" + g + "px, " + v + "px)" : "translate3d(" + g + "px, " + v + "px, 0)", se));
  }
  return Object.assign({}, K, (t = {}, t[S] = E ? v + "px" : "", t[L] = d ? g + "px" : "", t.transform = "", t));
}
function Vb(e) {
  var t = e.state, n = e.options, o = n.gpuAcceleration, r = o === void 0 ? !0 : o, s = n.adaptive, a = s === void 0 ? !0 : s, i = n.roundOffsets, l = i === void 0 ? !0 : i, u = { placement: Mt(t.placement), variation: Un(t.placement), popper: t.elements.popper, popperRect: t.rects.popper, gpuAcceleration: r, isFixed: t.options.strategy === "fixed" };
  t.modifiersData.popperOffsets != null && (t.styles.popper = Object.assign({}, t.styles.popper, Bi(Object.assign({}, u, { offsets: t.modifiersData.popperOffsets, position: t.options.strategy, adaptive: a, roundOffsets: l })))), t.modifiersData.arrow != null && (t.styles.arrow = Object.assign({}, t.styles.arrow, Bi(Object.assign({}, u, { offsets: t.modifiersData.arrow, position: "absolute", adaptive: !1, roundOffsets: l })))), t.attributes.popper = Object.assign({}, t.attributes.popper, { "data-popper-placement": t.placement });
}
var Uu = { name: "computeStyles", enabled: !0, phase: "beforeWrite", fn: Vb, data: {} }, zo = { passive: !0 };
function Ub(e) {
  var t = e.state, n = e.instance, o = e.options, r = o.scroll, s = r === void 0 ? !0 : r, a = o.resize, i = a === void 0 ? !0 : a, l = st(t.elements.popper), u = [].concat(t.scrollParents.reference, t.scrollParents.popper);
  return s && u.forEach(function(f) {
    f.addEventListener("scroll", n.update, zo);
  }), i && l.addEventListener("resize", n.update, zo), function() {
    s && u.forEach(function(f) {
      f.removeEventListener("scroll", n.update, zo);
    }), i && l.removeEventListener("resize", n.update, zo);
  };
}
var Hu = { name: "eventListeners", enabled: !0, phase: "write", fn: function() {
}, effect: Ub, data: {} }, Hb = { left: "right", right: "left", bottom: "top", top: "bottom" };
function Ho(e) {
  return e.replace(/left|right|bottom|top/g, function(t) {
    return Hb[t];
  });
}
var Kb = { start: "end", end: "start" };
function ji(e) {
  return e.replace(/start|end/g, function(t) {
    return Kb[t];
  });
}
function js(e) {
  var t = st(e), n = t.pageXOffset, o = t.pageYOffset;
  return { scrollLeft: n, scrollTop: o };
}
function Vs(e) {
  return Vn(hn(e)).left + js(e).scrollLeft;
}
function Gb(e, t) {
  var n = st(e), o = hn(e), r = n.visualViewport, s = o.clientWidth, a = o.clientHeight, i = 0, l = 0;
  if (r) {
    s = r.width, a = r.height;
    var u = zu();
    (u || !u && t === "fixed") && (i = r.offsetLeft, l = r.offsetTop);
  }
  return { width: s, height: a, x: i + Vs(e), y: l };
}
function Yb(e) {
  var t, n = hn(e), o = js(e), r = (t = e.ownerDocument) == null ? void 0 : t.body, s = _n(n.scrollWidth, n.clientWidth, r ? r.scrollWidth : 0, r ? r.clientWidth : 0), a = _n(n.scrollHeight, n.clientHeight, r ? r.scrollHeight : 0, r ? r.clientHeight : 0), i = -o.scrollLeft + Vs(e), l = -o.scrollTop;
  return Jt(r || n).direction === "rtl" && (i += _n(n.clientWidth, r ? r.clientWidth : 0) - s), { width: s, height: a, x: i, y: l };
}
function Us(e) {
  var t = Jt(e), n = t.overflow, o = t.overflowX, r = t.overflowY;
  return /auto|scroll|overlay|hidden/.test(n + r + o);
}
function Ku(e) {
  return ["html", "body", "#document"].indexOf(Dt(e)) >= 0 ? e.ownerDocument.body : mt(e) && Us(e) ? e : Ku(Cr(e));
}
function io(e, t) {
  var n;
  t === void 0 && (t = []);
  var o = Ku(e), r = o === ((n = e.ownerDocument) == null ? void 0 : n.body), s = st(o), a = r ? [s].concat(s.visualViewport || [], Us(o) ? o : []) : o, i = t.concat(a);
  return r ? i : i.concat(io(Cr(a)));
}
function is(e) {
  return Object.assign({}, e, { left: e.x, top: e.y, right: e.x + e.width, bottom: e.y + e.height });
}
function Zb(e, t) {
  var n = Vn(e, !1, t === "fixed");
  return n.top = n.top + e.clientTop, n.left = n.left + e.clientLeft, n.bottom = n.top + e.clientHeight, n.right = n.left + e.clientWidth, n.width = e.clientWidth, n.height = e.clientHeight, n.x = n.left, n.y = n.top, n;
}
function Vi(e, t, n) {
  return t === Fu ? is(Gb(e, n)) : En(t) ? Zb(t, n) : is(Yb(hn(e)));
}
function qb(e) {
  var t = io(Cr(e)), n = ["absolute", "fixed"].indexOf(Jt(e).position) >= 0, o = n && mt(e) ? To(e) : e;
  return En(o) ? t.filter(function(r) {
    return En(r) && Wu(r, o) && Dt(r) !== "body";
  }) : [];
}
function Jb(e, t, n, o) {
  var r = t === "clippingParents" ? qb(e) : [].concat(t), s = [].concat(r, [n]), a = s[0], i = s.reduce(function(l, u) {
    var f = Vi(e, u, o);
    return l.top = _n(f.top, l.top), l.right = sr(f.right, l.right), l.bottom = sr(f.bottom, l.bottom), l.left = _n(f.left, l.left), l;
  }, Vi(e, a, o));
  return i.width = i.right - i.left, i.height = i.bottom - i.top, i.x = i.left, i.y = i.top, i;
}
function Gu(e) {
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
  var u = r ? Bs(r) : null;
  if (u != null) {
    var f = u === "y" ? "height" : "width";
    switch (s) {
      case Bn:
        l[u] = l[u] - (t[f] / 2 - n[f] / 2);
        break;
      case yo:
        l[u] = l[u] + (t[f] / 2 - n[f] / 2);
        break;
    }
  }
  return l;
}
function bo(e, t) {
  t === void 0 && (t = {});
  var n = t, o = n.placement, r = o === void 0 ? e.placement : o, s = n.strategy, a = s === void 0 ? e.strategy : s, i = n.boundary, l = i === void 0 ? _b : i, u = n.rootBoundary, f = u === void 0 ? Fu : u, p = n.elementContext, m = p === void 0 ? eo : p, g = n.altBoundary, h = g === void 0 ? !1 : g, v = n.padding, w = v === void 0 ? 0 : v, d = ju(typeof w != "number" ? w : Vu(w, So)), E = m === eo ? wb : eo, L = e.rects.popper, S = e.elements[h ? E : m], T = Jb(En(S) ? S : S.contextElement || hn(e.elements.popper), l, f, a), I = Vn(e.elements.reference), k = Gu({ reference: I, element: L, placement: r }), $ = is(Object.assign({}, L, k)), C = m === eo ? $ : I, D = { top: T.top - C.top + d.top, bottom: C.bottom - T.bottom + d.bottom, left: T.left - C.left + d.left, right: C.right - T.right + d.right }, K = e.modifiersData.offset;
  if (m === eo && K) {
    var Y = K[r];
    Object.keys(D).forEach(function(se) {
      var Ce = [gt, vt].indexOf(se) >= 0 ? 1 : -1, me = [qe, vt].indexOf(se) >= 0 ? "y" : "x";
      D[se] += Y[me] * Ce;
    });
  }
  return D;
}
function Xb(e, t) {
  t === void 0 && (t = {});
  var n = t, o = n.placement, r = n.boundary, s = n.rootBoundary, a = n.padding, i = n.flipVariations, l = n.allowedAutoPlacements, u = l === void 0 ? wr : l, f = Un(o), p = f ? i ? zi : zi.filter(function(h) {
    return Un(h) === f;
  }) : So, m = p.filter(function(h) {
    return u.indexOf(h) >= 0;
  });
  m.length === 0 && (m = p);
  var g = m.reduce(function(h, v) {
    return h[v] = bo(e, { placement: v, boundary: r, rootBoundary: s, padding: a })[Mt(v)], h;
  }, {});
  return Object.keys(g).sort(function(h, v) {
    return g[h] - g[v];
  });
}
function Qb(e) {
  if (Mt(e) === xs) return [];
  var t = Ho(e);
  return [ji(e), t, ji(t)];
}
function e0(e) {
  var t = e.state, n = e.options, o = e.name;
  if (!t.modifiersData[o]._skip) {
    for (var r = n.mainAxis, s = r === void 0 ? !0 : r, a = n.altAxis, i = a === void 0 ? !0 : a, l = n.fallbackPlacements, u = n.padding, f = n.boundary, p = n.rootBoundary, m = n.altBoundary, g = n.flipVariations, h = g === void 0 ? !0 : g, v = n.allowedAutoPlacements, w = t.options.placement, d = Mt(w), E = d === w, L = l || (E || !h ? [Ho(w)] : Qb(w)), S = [w].concat(L).reduce(function(xe, De) {
      return xe.concat(Mt(De) === xs ? Xb(t, { placement: De, boundary: f, rootBoundary: p, padding: u, flipVariations: h, allowedAutoPlacements: v }) : De);
    }, []), T = t.rects.reference, I = t.rects.popper, k = /* @__PURE__ */ new Map(), $ = !0, C = S[0], D = 0; D < S.length; D++) {
      var K = S[D], Y = Mt(K), se = Un(K) === Bn, Ce = [qe, vt].indexOf(Y) >= 0, me = Ce ? "width" : "height", oe = bo(t, { placement: K, boundary: f, rootBoundary: p, altBoundary: m, padding: u }), W = Ce ? se ? gt : Je : se ? vt : qe;
      T[me] > I[me] && (W = Ho(W));
      var he = Ho(W), pe = [];
      if (s && pe.push(oe[Y] <= 0), i && pe.push(oe[W] <= 0, oe[he] <= 0), pe.every(function(xe) {
        return xe;
      })) {
        C = K, $ = !1;
        break;
      }
      k.set(K, pe);
    }
    if ($) for (var Se = h ? 3 : 1, Ge = function(xe) {
      var De = S.find(function(ze) {
        var We = k.get(ze);
        if (We) return We.slice(0, xe).every(function(ve) {
          return ve;
        });
      });
      if (De) return C = De, "break";
    }, Ye = Se; Ye > 0; Ye--) {
      var at = Ge(Ye);
      if (at === "break") break;
    }
    t.placement !== C && (t.modifiersData[o]._skip = !0, t.placement = C, t.reset = !0);
  }
}
var t0 = { name: "flip", enabled: !0, phase: "main", fn: e0, requiresIfExists: ["offset"], data: { _skip: !1 } };
function Ui(e, t, n) {
  return n === void 0 && (n = { x: 0, y: 0 }), { top: e.top - t.height - n.y, right: e.right - t.width + n.x, bottom: e.bottom - t.height + n.y, left: e.left - t.width - n.x };
}
function Hi(e) {
  return [qe, gt, vt, Je].some(function(t) {
    return e[t] >= 0;
  });
}
function n0(e) {
  var t = e.state, n = e.name, o = t.rects.reference, r = t.rects.popper, s = t.modifiersData.preventOverflow, a = bo(t, { elementContext: "reference" }), i = bo(t, { altBoundary: !0 }), l = Ui(a, o), u = Ui(i, r, s), f = Hi(l), p = Hi(u);
  t.modifiersData[n] = { referenceClippingOffsets: l, popperEscapeOffsets: u, isReferenceHidden: f, hasPopperEscaped: p }, t.attributes.popper = Object.assign({}, t.attributes.popper, { "data-popper-reference-hidden": f, "data-popper-escaped": p });
}
var o0 = { name: "hide", enabled: !0, phase: "main", requiresIfExists: ["preventOverflow"], fn: n0 };
function r0(e, t, n) {
  var o = Mt(e), r = [Je, qe].indexOf(o) >= 0 ? -1 : 1, s = typeof n == "function" ? n(Object.assign({}, t, { placement: e })) : n, a = s[0], i = s[1];
  return a = a || 0, i = (i || 0) * r, [Je, gt].indexOf(o) >= 0 ? { x: i, y: a } : { x: a, y: i };
}
function s0(e) {
  var t = e.state, n = e.options, o = e.name, r = n.offset, s = r === void 0 ? [0, 0] : r, a = wr.reduce(function(f, p) {
    return f[p] = r0(p, t.rects, s), f;
  }, {}), i = a[t.placement], l = i.x, u = i.y;
  t.modifiersData.popperOffsets != null && (t.modifiersData.popperOffsets.x += l, t.modifiersData.popperOffsets.y += u), t.modifiersData[o] = a;
}
var a0 = { name: "offset", enabled: !0, phase: "main", requires: ["popperOffsets"], fn: s0 };
function i0(e) {
  var t = e.state, n = e.name;
  t.modifiersData[n] = Gu({ reference: t.rects.reference, element: t.rects.popper, placement: t.placement });
}
var Yu = { name: "popperOffsets", enabled: !0, phase: "read", fn: i0, data: {} };
function l0(e) {
  return e === "x" ? "y" : "x";
}
function u0(e) {
  var t = e.state, n = e.options, o = e.name, r = n.mainAxis, s = r === void 0 ? !0 : r, a = n.altAxis, i = a === void 0 ? !1 : a, l = n.boundary, u = n.rootBoundary, f = n.altBoundary, p = n.padding, m = n.tether, g = m === void 0 ? !0 : m, h = n.tetherOffset, v = h === void 0 ? 0 : h, w = bo(t, { boundary: l, rootBoundary: u, padding: p, altBoundary: f }), d = Mt(t.placement), E = Un(t.placement), L = !E, S = Bs(d), T = l0(S), I = t.modifiersData.popperOffsets, k = t.rects.reference, $ = t.rects.popper, C = typeof v == "function" ? v(Object.assign({}, t.rects, { placement: t.placement })) : v, D = typeof C == "number" ? { mainAxis: C, altAxis: C } : Object.assign({ mainAxis: 0, altAxis: 0 }, C), K = t.modifiersData.offset ? t.modifiersData.offset[t.placement] : null, Y = { x: 0, y: 0 };
  if (I) {
    if (s) {
      var se, Ce = S === "y" ? qe : Je, me = S === "y" ? vt : gt, oe = S === "y" ? "height" : "width", W = I[S], he = W + w[Ce], pe = W - w[me], Se = g ? -$[oe] / 2 : 0, Ge = E === Bn ? k[oe] : $[oe], Ye = E === Bn ? -$[oe] : -k[oe], at = t.elements.arrow, xe = g && at ? Ws(at) : { width: 0, height: 0 }, De = t.modifiersData["arrow#persistent"] ? t.modifiersData["arrow#persistent"].padding : Bu(), ze = De[Ce], We = De[me], ve = ao(0, k[oe], xe[oe]), Xe = L ? k[oe] / 2 - Se - ve - ze - D.mainAxis : Ge - ve - ze - D.mainAxis, it = L ? -k[oe] / 2 + Se + ve + We + D.mainAxis : Ye + ve + We + D.mainAxis, Qe = t.elements.arrow && To(t.elements.arrow), yt = Qe ? S === "y" ? Qe.clientTop || 0 : Qe.clientLeft || 0 : 0, et = (se = K?.[S]) != null ? se : 0, tt = W + Xe - et - yt, nt = W + it - et, lt = ao(g ? sr(he, tt) : he, W, g ? _n(pe, nt) : pe);
      I[S] = lt, Y[S] = lt - W;
    }
    if (i) {
      var Tt, b = S === "x" ? qe : Je, _ = S === "x" ? vt : gt, M = I[T], H = T === "y" ? "height" : "width", ie = M + w[b], J = M - w[_], y = [qe, Je].indexOf(d) !== -1, N = (Tt = K?.[T]) != null ? Tt : 0, te = y ? ie : M - k[H] - $[H] - N + D.altAxis, ce = y ? M + k[H] + $[H] - N - D.altAxis : J, Be = g && y ? Db(te, M, ce) : ao(g ? te : ie, M, g ? ce : J);
      I[T] = Be, Y[T] = Be - M;
    }
    t.modifiersData[o] = Y;
  }
}
var c0 = { name: "preventOverflow", enabled: !0, phase: "main", fn: u0, requiresIfExists: ["offset"] };
function d0(e) {
  return { scrollLeft: e.scrollLeft, scrollTop: e.scrollTop };
}
function f0(e) {
  return e === st(e) || !mt(e) ? js(e) : d0(e);
}
function p0(e) {
  var t = e.getBoundingClientRect(), n = jn(t.width) / e.offsetWidth || 1, o = jn(t.height) / e.offsetHeight || 1;
  return n !== 1 || o !== 1;
}
function m0(e, t, n) {
  n === void 0 && (n = !1);
  var o = mt(t), r = mt(t) && p0(t), s = hn(t), a = Vn(e, r, n), i = { scrollLeft: 0, scrollTop: 0 }, l = { x: 0, y: 0 };
  return (o || !o && !n) && ((Dt(t) !== "body" || Us(s)) && (i = f0(t)), mt(t) ? (l = Vn(t, !0), l.x += t.clientLeft, l.y += t.clientTop) : s && (l.x = Vs(s))), { x: a.left + i.scrollLeft - l.x, y: a.top + i.scrollTop - l.y, width: a.width, height: a.height };
}
function h0(e) {
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
function v0(e) {
  var t = h0(e);
  return Ab.reduce(function(n, o) {
    return n.concat(t.filter(function(r) {
      return r.phase === o;
    }));
  }, []);
}
function g0(e) {
  var t;
  return function() {
    return t || (t = new Promise(function(n) {
      Promise.resolve().then(function() {
        t = void 0, n(e());
      });
    })), t;
  };
}
function y0(e) {
  var t = e.reduce(function(n, o) {
    var r = n[o.name];
    return n[o.name] = r ? Object.assign({}, r, o, { options: Object.assign({}, r.options, o.options), data: Object.assign({}, r.data, o.data) }) : o, n;
  }, {});
  return Object.keys(t).map(function(n) {
    return t[n];
  });
}
var Ki = { placement: "bottom", modifiers: [], strategy: "absolute" };
function Gi() {
  for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++) t[n] = arguments[n];
  return !t.some(function(o) {
    return !(o && typeof o.getBoundingClientRect == "function");
  });
}
function Hs(e) {
  e === void 0 && (e = {});
  var t = e, n = t.defaultModifiers, o = n === void 0 ? [] : n, r = t.defaultOptions, s = r === void 0 ? Ki : r;
  return function(a, i, l) {
    l === void 0 && (l = s);
    var u = { placement: "bottom", orderedModifiers: [], options: Object.assign({}, Ki, s), modifiersData: {}, elements: { reference: a, popper: i }, attributes: {}, styles: {} }, f = [], p = !1, m = { state: u, setOptions: function(v) {
      var w = typeof v == "function" ? v(u.options) : v;
      h(), u.options = Object.assign({}, s, u.options, w), u.scrollParents = { reference: En(a) ? io(a) : a.contextElement ? io(a.contextElement) : [], popper: io(i) };
      var d = v0(y0([].concat(o, u.options.modifiers)));
      return u.orderedModifiers = d.filter(function(E) {
        return E.enabled;
      }), g(), m.update();
    }, forceUpdate: function() {
      if (!p) {
        var v = u.elements, w = v.reference, d = v.popper;
        if (Gi(w, d)) {
          u.rects = { reference: m0(w, To(d), u.options.strategy === "fixed"), popper: Ws(d) }, u.reset = !1, u.placement = u.options.placement, u.orderedModifiers.forEach(function($) {
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
    }, update: g0(function() {
      return new Promise(function(v) {
        m.forceUpdate(), v(u);
      });
    }), destroy: function() {
      h(), p = !0;
    } };
    if (!Gi(a, i)) return m;
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
Hs();
var b0 = [Hu, Yu, Uu, xu];
Hs({ defaultModifiers: b0 });
var _0 = [Hu, Yu, Uu, xu, a0, t0, c0, Wb, o0], w0 = Hs({ defaultModifiers: _0 });
const C0 = ["fixed", "absolute"], E0 = we({
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
    values: wr,
    default: "bottom"
  },
  popperOptions: {
    type: X(Object),
    default: () => ({})
  },
  strategy: {
    type: String,
    values: C0,
    default: "absolute"
  }
}), Zu = we({
  ...E0,
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
  ...Eo(["ariaLabel"])
}), S0 = {
  mouseenter: (e) => e instanceof MouseEvent,
  mouseleave: (e) => e instanceof MouseEvent,
  focus: () => !0,
  blur: () => !0,
  close: () => !0
}, T0 = (e, t) => {
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
}, k0 = (e, t = []) => {
  const { placement: n, strategy: o, popperOptions: r } = e, s = {
    placement: n,
    strategy: o,
    ...r,
    modifiers: [...L0(e), ...t]
  };
  return I0(s, r?.modifiers), s;
}, O0 = (e) => {
  if (Ie)
    return Gt(e);
};
function L0(e) {
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
function I0(e, t) {
  t && (e.modifiers = [...e.modifiers, ...t ?? []]);
}
const P0 = (e, t, n = {}) => {
  const o = {
    name: "updateState",
    enabled: !0,
    phase: "write",
    fn: ({ state: l }) => {
      const u = A0(l);
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
    i(), !(!l || !u) && (s.value = w0(l, u, c(r)));
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
function A0(e) {
  const t = Object.keys(e.elements), n = Xo(t.map((r) => [r, e.styles[r] || {}])), o = Xo(t.map((r) => [r, e.attributes[r]]));
  return {
    styles: n,
    attributes: o
  };
}
const N0 = 0, M0 = (e) => {
  const { popperInstanceRef: t, contentRef: n, triggerRef: o, role: r } = fe($s, void 0), s = x(), a = x(), i = P(() => ({
    name: "eventListeners",
    enabled: !!e.visible
  })), l = P(() => {
    var d;
    const E = c(s), L = (d = c(a)) != null ? d : N0;
    return {
      name: "arrow",
      enabled: !Jv(E),
      options: {
        element: E,
        padding: L
      }
    };
  }), u = P(() => ({
    onFirstUpdate: () => {
      h();
    },
    ...k0(e, [
      c(l),
      c(i)
    ])
  })), f = P(() => O0(e.referenceEl) || c(o)), { attributes: p, state: m, styles: g, update: h, forceUpdate: v, instanceRef: w } = P0(f, n, u);
  return Q(w, (d) => t.value = d), Ae(() => {
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
}, R0 = (e, {
  attributes: t,
  styles: n,
  role: o
}) => {
  const { nextZIndex: r } = uu(), s = $e("popper"), a = P(() => c(t).popper), i = x(Re(e.zIndex) ? e.zIndex : r()), l = P(() => [
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
      i.value = Re(e.zIndex) ? e.zIndex : r();
    }
  };
}, $0 = q({
  name: "ElPopperContent"
}), D0 = /* @__PURE__ */ q({
  ...$0,
  props: Zu,
  emits: S0,
  setup(e, { expose: t, emit: n }) {
    const o = e, {
      focusStartRef: r,
      trapped: s,
      onFocusAfterReleased: a,
      onFocusAfterTrapped: i,
      onFocusInTrap: l,
      onFocusoutPrevented: u,
      onReleaseRequested: f
    } = T0(o, n), { attributes: p, arrowRef: m, contentRef: g, styles: h, instanceRef: v, role: w, update: d } = M0(o), {
      ariaModal: E,
      arrowStyle: L,
      contentAttrs: S,
      contentClass: T,
      contentStyle: I,
      updateZIndex: k
    } = R0(o, {
      styles: h,
      attributes: p,
      role: w
    }), $ = fe(rr, void 0), C = x();
    Rt(Pu, {
      arrowStyle: L,
      arrowRef: m,
      arrowOffset: C
    }), $ && Rt(rr, {
      ...$,
      addInputId: mo,
      removeInputId: mo
    });
    let D;
    const K = (se = !0) => {
      d(), se && k();
    }, Y = () => {
      K(!1), o.visible && o.focusOnShow ? s.value = !0 : o.visible === !1 && (s.value = !1);
    };
    return Ae(() => {
      Q(() => o.triggerTargetEl, (se, Ce) => {
        D?.(), D = void 0;
        const me = c(se || g.value), oe = c(Ce || g.value);
        Ct(me) && (D = Q([w, () => o.ariaLabel, E, () => o.id], (W) => {
          ["role", "aria-label", "aria-modal", "id"].forEach((he, pe) => {
            vr(W[pe]) ? me.removeAttribute(he) : me.setAttribute(he, W[pe]);
          });
        }, { immediate: !0 })), oe !== me && Ct(oe) && ["role", "aria-label", "aria-modal", "id"].forEach((W) => {
          oe.removeAttribute(W);
        });
      }, { immediate: !0 }), Q(() => o.visible, Y, { immediate: !0 });
    }), Ft(() => {
      D?.(), D = void 0;
    }), t({
      popperContentRef: g,
      popperInstanceRef: v,
      updatePopper: K,
      contentStyle: I
    }), (se, Ce) => (R(), G("div", Dn({
      ref_key: "contentRef",
      ref: g
    }, c(S), {
      style: c(I),
      class: c(T),
      tabindex: "-1",
      onMouseenter: (me) => se.$emit("mouseenter", me),
      onMouseleave: (me) => se.$emit("mouseleave", me)
    }), [
      z(c(bb), {
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
var F0 = /* @__PURE__ */ Ee(D0, [["__file", "content.vue"]]);
const x0 = tn(Zy), Ks = Symbol("elTooltip");
function Yi() {
  let e;
  const t = (o, r) => {
    n(), e = window.setTimeout(o, r);
  }, n = () => window.clearTimeout(e);
  return Co(() => n()), {
    registerTimeout: t,
    cancelTimeout: n
  };
}
const z0 = we({
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
}), W0 = ({
  showAfter: e,
  hideAfter: t,
  autoClose: n,
  open: o,
  close: r
}) => {
  const { registerTimeout: s } = Yi(), {
    registerTimeout: a,
    cancelTimeout: i
  } = Yi();
  return {
    onOpen: (f) => {
      s(() => {
        o(f);
        const p = c(n);
        Re(p) && p > 0 && a(() => {
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
}, Gs = we({
  ...z0,
  ...Zu,
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
  ...Eo(["ariaLabel"])
}), qu = we({
  ...Mu,
  disabled: Boolean,
  trigger: {
    type: X([String, Array]),
    default: "hover"
  },
  triggerKeys: {
    type: X(Array),
    default: () => [Nt.enter, Nt.numpadEnter, Nt.space]
  }
}), B0 = yr({
  type: X(Boolean),
  default: null
}), j0 = yr({
  type: X(Function)
}), V0 = (e) => {
  const t = `update:${e}`, n = `onUpdate:${e}`, o = [t], r = {
    [e]: B0,
    [n]: j0
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
      const m = Ke(), { emit: g } = m, h = m.props, v = P(() => Me(h[n])), w = P(() => h[e] === null), d = (k) => {
        a.value !== !0 && (a.value = !0, i && (i.value = k), Me(f) && f(k));
      }, E = (k) => {
        a.value !== !1 && (a.value = !1, i && (i.value = k), Me(p) && p(k));
      }, L = (k) => {
        if (h.disabled === !0 || Me(u) && !u())
          return;
        const $ = v.value && Ie;
        $ && g(t, !0), (w.value || !$) && d(k);
      }, S = (k) => {
        if (h.disabled === !0 || !Ie)
          return;
        const $ = v.value && Ie;
        $ && g(t, !1), (w.value || !$) && E(k);
      }, T = (k) => {
        Qo(k) && (h.disabled && k ? v.value && g(t, !1) : a.value !== k && (k ? d() : E()));
      }, I = () => {
        a.value ? S() : L();
      };
      return Q(() => h[e], T), l && m.appContext.config.globalProperties.$route !== void 0 && Q(() => ({
        ...m.proxy.$route
      }), () => {
        l.value && a.value && S();
      }), Ae(() => {
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
  useModelToggleProps: U0,
  useModelToggleEmits: H0,
  useModelToggle: K0
} = V0("visible"), G0 = we({
  ...Au,
  ...U0,
  ...Gs,
  ...qu,
  ...Nu,
  showArrow: {
    type: Boolean,
    default: !0
  }
}), Y0 = [
  ...H0,
  "before-show",
  "before-hide",
  "show",
  "hide",
  "open",
  "close"
], Z0 = (e, t) => Pt(e) ? e.includes(t) : e === t, Nn = (e, t, n) => (o) => {
  Z0(c(e), t) && n(o);
}, Bt = (e, t, { checkForDefaultPrevented: n = !0 } = {}) => (r) => {
  const s = e?.(r);
  if (n === !1 || !s)
    return t?.(r);
}, q0 = q({
  name: "ElTooltipTrigger"
}), J0 = /* @__PURE__ */ q({
  ...q0,
  props: qu,
  setup(e, { expose: t }) {
    const n = e, o = $e("tooltip"), { controlled: r, id: s, open: a, onOpen: i, onClose: l, onToggle: u } = fe(Ks, void 0), f = x(null), p = () => {
      if (c(r) || n.disabled)
        return !0;
    }, m = Ut(n, "trigger"), g = Bt(p, Nn(m, "hover", i)), h = Bt(p, Nn(m, "hover", l)), v = Bt(p, Nn(m, "click", (S) => {
      S.button === 0 && u(S);
    })), w = Bt(p, Nn(m, "focus", i)), d = Bt(p, Nn(m, "focus", l)), E = Bt(p, Nn(m, "contextmenu", (S) => {
      S.preventDefault(), u(S);
    })), L = Bt(p, (S) => {
      const { code: T } = S;
      n.triggerKeys.includes(T) && (S.preventDefault(), u(S));
    });
    return t({
      triggerRef: f
    }), (S, T) => (R(), ee(c(sb), {
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
var X0 = /* @__PURE__ */ Ee(J0, [["__file", "trigger.vue"]]);
const Q0 = we({
  to: {
    type: X([String, Object]),
    required: !0
  },
  disabled: Boolean
}), e_ = /* @__PURE__ */ q({
  __name: "teleport",
  props: Q0,
  setup(e) {
    return (t, n) => t.disabled ? ae(t.$slots, "default", { key: 0 }) : (R(), ee(Nc, {
      key: 1,
      to: t.to
    }, [
      ae(t.$slots, "default")
    ], 8, ["to"]));
  }
});
var t_ = /* @__PURE__ */ Ee(e_, [["__file", "teleport.vue"]]);
const n_ = tn(t_), Ju = () => {
  const e = ws(), t = Su(), n = P(() => `${e.value}-popper-container-${t.prefix}`), o = P(() => `#${n.value}`);
  return {
    id: n,
    selector: o
  };
}, o_ = (e) => {
  const t = document.createElement("div");
  return t.id = e, document.body.appendChild(t), t;
}, r_ = () => {
  const { id: e, selector: t } = Ju();
  return Mc(() => {
    Ie && (document.body.querySelector(t.value) || o_(e.value));
  }), {
    id: e,
    selector: t
  };
}, s_ = q({
  name: "ElTooltipContent",
  inheritAttrs: !1
}), a_ = /* @__PURE__ */ q({
  ...s_,
  props: Gs,
  setup(e, { expose: t }) {
    const n = e, { selector: o } = Ju(), r = $e("tooltip"), s = x();
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
    } = fe(Ks, void 0), d = P(() => n.transition || `${r.namespace.value}-fade-in-linear`), E = P(() => n.persistent);
    Ft(() => {
      a?.();
    });
    const L = P(() => c(E) ? !0 : c(u)), S = P(() => n.disabled ? !1 : c(u)), T = P(() => n.appendTo || o.value), I = P(() => {
      var W;
      return (W = n.style) != null ? W : {};
    }), k = x(!0), $ = () => {
      h(), oe() && Wt(document.body), k.value = !0;
    }, C = () => {
      if (c(i))
        return !0;
    }, D = Bt(C, () => {
      n.enterable && c(f) === "hover" && m();
    }), K = Bt(C, () => {
      c(f) === "hover" && p();
    }), Y = () => {
      var W, he;
      (he = (W = s.value) == null ? void 0 : W.updatePopper) == null || he.call(W), v?.();
    }, se = () => {
      w?.();
    }, Ce = () => {
      g(), a = mg(P(() => {
        var W;
        return (W = s.value) == null ? void 0 : W.popperContentRef;
      }), () => {
        if (c(i))
          return;
        c(f) !== "hover" && p();
      });
    }, me = () => {
      n.virtualTriggering || p();
    }, oe = (W) => {
      var he;
      const pe = (he = s.value) == null ? void 0 : he.popperContentRef, Se = W?.relatedTarget || document.activeElement;
      return pe?.contains(Se);
    };
    return Q(() => c(u), (W) => {
      W ? k.value = !1 : a?.();
    }, {
      flush: "post"
    }), Q(() => n.content, () => {
      var W, he;
      (he = (W = s.value) == null ? void 0 : W.updatePopper) == null || he.call(W);
    }), t({
      contentRef: s,
      isFocusInsideContent: oe
    }), (W, he) => (R(), ee(c(n_), {
      disabled: !W.teleported,
      to: c(T)
    }, {
      default: ne(() => [
        z(Gn, {
          name: c(d),
          onAfterLeave: $,
          onBeforeEnter: Y,
          onAfterEnter: Ce,
          onBeforeLeave: se
        }, {
          default: ne(() => [
            c(L) ? Le((R(), ee(c(F0), Dn({
              key: 0,
              id: c(l),
              ref_key: "contentRef",
              ref: s
            }, W.$attrs, {
              "aria-label": W.ariaLabel,
              "aria-hidden": k.value,
              "boundaries-padding": W.boundariesPadding,
              "fallback-placements": W.fallbackPlacements,
              "gpu-acceleration": W.gpuAcceleration,
              offset: W.offset,
              placement: W.placement,
              "popper-options": W.popperOptions,
              strategy: W.strategy,
              effect: W.effect,
              enterable: W.enterable,
              pure: W.pure,
              "popper-class": W.popperClass,
              "popper-style": [W.popperStyle, c(I)],
              "reference-el": W.referenceEl,
              "trigger-target-el": W.triggerTargetEl,
              visible: c(S),
              "z-index": W.zIndex,
              onMouseenter: c(D),
              onMouseleave: c(K),
              onBlur: me,
              onClose: c(p)
            }), {
              default: ne(() => [
                ae(W.$slots, "default")
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
var i_ = /* @__PURE__ */ Ee(a_, [["__file", "content.vue"]]);
const l_ = q({
  name: "ElTooltip"
}), u_ = /* @__PURE__ */ q({
  ...l_,
  props: G0,
  emits: Y0,
  setup(e, { expose: t, emit: n }) {
    const o = e;
    r_();
    const r = br(), s = x(), a = x(), i = () => {
      var d;
      const E = c(s);
      E && ((d = E.popperInstanceRef) == null || d.update());
    }, l = x(!1), u = x(), { show: f, hide: p, hasUpdateHandler: m } = K0({
      indicator: l,
      toggleReason: u
    }), { onOpen: g, onClose: h } = W0({
      showAfter: Ut(o, "showAfter"),
      hideAfter: Ut(o, "hideAfter"),
      autoClose: Ut(o, "autoClose"),
      open: f,
      close: p
    }), v = P(() => Qo(o.visible) && !m.value);
    Rt(Ks, {
      controlled: v,
      id: r,
      open: ds(l),
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
    return Rc(() => l.value && p()), t({
      popperRef: s,
      contentRef: a,
      isFocusInsideContent: w,
      updatePopper: i,
      onOpen: g,
      onClose: h,
      hide: p
    }), (d, E) => (R(), ee(c(x0), {
      ref_key: "popperRef",
      ref: s,
      role: d.role
    }, {
      default: ne(() => [
        z(X0, {
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
        z(i_, {
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
            d.showArrow ? (R(), ee(c(Xy), {
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
var c_ = /* @__PURE__ */ Ee(u_, [["__file", "tooltip.vue"]]);
const d_ = tn(c_), f_ = we({
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
}), p_ = q({
  name: "ElBadge"
}), m_ = /* @__PURE__ */ q({
  ...p_,
  props: f_,
  setup(e, { expose: t }) {
    const n = e, o = $e("badge"), r = P(() => n.isDot ? "" : Re(n.value) && Re(n.max) ? n.max < n.value ? `${n.max}+` : `${n.value}` : `${n.value}`), s = P(() => {
      var a, i, l, u, f;
      return [
        {
          backgroundColor: n.color,
          marginRight: go(-((i = (a = n.offset) == null ? void 0 : a[0]) != null ? i : 0)),
          marginTop: go((u = (l = n.offset) == null ? void 0 : l[1]) != null ? u : 0)
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
          Le(O("sup", {
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
var h_ = /* @__PURE__ */ Ee(m_, [["__file", "badge.vue"]]);
const v_ = tn(h_), g_ = (e = "") => e.replace(/[|\\{}()[\]^$+*?.]/g, "\\$&").replace(/-/g, "\\x2d"), ls = we({
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
    values: pu
  },
  effect: {
    type: String,
    values: ["dark", "light", "plain"],
    default: "light"
  },
  round: Boolean
}), y_ = {
  close: (e) => e instanceof MouseEvent,
  click: (e) => e instanceof MouseEvent
}, b_ = q({
  name: "ElTag"
}), __ = /* @__PURE__ */ q({
  ...b_,
  props: ls,
  emits: y_,
  setup(e, { emit: t }) {
    const n = e, o = Ms(), r = $e("tag"), s = P(() => {
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
          z(c(nr))
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
              z(c(nr))
            ]),
            _: 1
          }, 8, ["class", "onClick"])) : U("v-if", !0)
        ], 6)
      ]),
      _: 3
    }, 8, ["name"]));
  }
});
var w_ = /* @__PURE__ */ Ee(__, [["__file", "tag.vue"]]);
const C_ = tn(w_), rn = /* @__PURE__ */ new Map();
if (Ie) {
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
function Zi(e, t) {
  let n = [];
  return Pt(t.arg) ? n = t.arg : Ct(t.arg) && n.push(t.arg), function(o, r) {
    const s = t.instance.popperRef, a = o.target, i = r?.target, l = !t || !t.instance, u = !a || !i, f = e.contains(a) || e.contains(i), p = e === a, m = n.length && n.some((h) => h?.contains(a)) || n.length && n.includes(i), g = s && (s.contains(a) || s.contains(i));
    l || u || f || p || m || g || t.value(o, r);
  };
}
const E_ = {
  beforeMount(e, t) {
    rn.has(e) || rn.set(e, []), rn.get(e).push({
      documentHandler: Zi(e, t),
      bindingFn: t.value
    });
  },
  updated(e, t) {
    rn.has(e) || rn.set(e, []);
    const n = rn.get(e), o = n.findIndex((s) => s.bindingFn === t.oldValue), r = {
      documentHandler: Zi(e, t),
      bindingFn: t.value
    };
    o >= 0 ? n.splice(o, 1, r) : n.push(r);
  },
  unmounted(e) {
    rn.delete(e);
  }
}, S_ = we({
  a11y: {
    type: Boolean,
    default: !0
  },
  locale: {
    type: X(Object)
  },
  size: Ps,
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
  ...vu
}), bt = {};
q({
  name: "ElConfigProvider",
  props: S_,
  setup(e, { slots: t }) {
    Q(() => e.message, (o) => {
      Object.assign(bt, o ?? {});
    }, { immediate: !0, deep: !0 });
    const n = bu(e);
    return () => ae(t, "default", { config: n?.value });
  }
});
function T_() {
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
const Xu = Symbol("ElSelectGroup"), Er = Symbol("ElSelect");
function k_(e, t) {
  const n = fe(Er), o = fe(Xu, { disabled: !1 }), r = P(() => f(un(n.props.modelValue), e.value)), s = P(() => {
    var g;
    if (n.props.multiple) {
      const h = un((g = n.props.modelValue) != null ? g : []);
      return !r.value && h.length >= n.props.multipleLimit && n.props.multipleLimit > 0;
    } else
      return !1;
  }), a = P(() => e.label || (dt(e.value) ? "" : e.value)), i = P(() => e.value || e.label || ""), l = P(() => e.disabled || t.groupDisabled || s.value), u = Ke(), f = (g = [], h) => {
    if (dt(e.value)) {
      const v = n.props.valueKey;
      return g && g.some((w) => Qi(cn(w, v)) === cn(h, v));
    } else
      return g && g.includes(h);
  }, p = () => {
    !e.disabled && !o.disabled && (n.states.hoveringIndex = n.optionsArray.indexOf(u.proxy));
  }, m = (g) => {
    const h = new RegExp(g_(g), "i");
    t.visible = h.test(a.value) || e.created;
  };
  return Q(() => a.value, () => {
    !e.created && !n.props.remote && n.setSelected();
  }), Q(() => e.value, (g, h) => {
    const { remote: v, valueKey: w } = n.props;
    if ((v ? g !== h : !so(g, h)) && (n.onOptionDestroy(h, u.proxy), n.onOptionCreate(u.proxy)), !e.created && !v) {
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
const O_ = q({
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
    const t = $e("select"), n = br(), o = P(() => [
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
    } = k_(e, r), { visible: p, hover: m } = ir(r), g = Ke().proxy;
    l.onOptionCreate(g), Ft(() => {
      const v = g.value, { selected: w } = l.states, d = w.some((E) => E.value === g.value);
      Te(() => {
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
function L_(e, t, n, o, r, s) {
  return Le((R(), G("li", {
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
var Ys = /* @__PURE__ */ Ee(O_, [["render", L_], ["__file", "option.vue"]]);
const I_ = q({
  name: "ElSelectDropdown",
  componentName: "ElSelectDropdown",
  setup() {
    const e = fe(Er), t = $e("select"), n = P(() => e.props.popperClass), o = P(() => e.props.multiple), r = P(() => e.props.fitInputWidth), s = x("");
    function a() {
      var i;
      s.value = `${(i = e.selectRef) == null ? void 0 : i.offsetWidth}px`;
    }
    return Ae(() => {
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
function P_(e, t, n, o, r, s) {
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
var A_ = /* @__PURE__ */ Ee(I_, [["render", P_], ["__file", "select-dropdown.vue"]]);
const N_ = (e, t) => {
  const { t: n } = du(), o = br(), r = $e("select"), s = $e("input"), a = wn({
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
  } = Iu({
    afterComposition: (A) => Be(A)
  }), { wrapperRef: I, isFocused: k, handleBlur: $ } = Lu(p, {
    beforeFocus() {
      return oe.value;
    },
    afterFocus() {
      e.automaticDropdown && !C.value && (C.value = !0, a.menuVisibleOnFocus = !0);
    },
    beforeBlur(A) {
      var B, re;
      return ((B = u.value) == null ? void 0 : B.isFocusInsideContent(A)) || ((re = f.value) == null ? void 0 : re.isFocusInsideContent(A));
    },
    afterBlur() {
      C.value = !1, a.menuVisibleOnFocus = !1;
    }
  }), C = x(!1), D = x(), { form: K, formItem: Y } = Tu(), { inputId: se } = ku(e, {
    formItemContext: Y
  }), { valueOnClear: Ce, isEmptyValue: me } = Fg(e), oe = P(() => e.disabled || K?.disabled), W = P(() => Pt(e.modelValue) ? e.modelValue.length > 0 : !me(e.modelValue)), he = P(() => {
    var A;
    return (A = K?.statusIcon) != null ? A : !1;
  }), pe = P(() => e.clearable && !oe.value && a.inputHovering && W.value), Se = P(() => e.remote && e.filterable && !e.remoteShowSuffix ? "" : e.suffixIcon), Ge = P(() => r.is("reverse", Se.value && C.value)), Ye = P(() => Y?.validateState || ""), at = P(() => Cu[Ye.value]), xe = P(() => e.remote ? 300 : 0), De = P(() => e.remote && !a.inputValue && a.options.size === 0), ze = P(() => e.loading ? e.loadingText || n("el.select.loading") : e.filterable && a.inputValue && a.options.size > 0 && We.value === 0 ? e.noMatchText || n("el.select.noMatch") : a.options.size === 0 ? e.noDataText || n("el.select.noData") : null), We = P(() => ve.value.filter((A) => A.visible).length), ve = P(() => {
    const A = Array.from(a.options.values()), B = [];
    return a.optionValues.forEach((re) => {
      const Pe = A.findIndex((ot) => ot.value === re);
      Pe > -1 && B.push(A[Pe]);
    }), B.length >= A.length ? B : A;
  }), Xe = P(() => Array.from(a.cachedOptions.values())), it = P(() => {
    const A = ve.value.filter((B) => !B.created).some((B) => B.currentLabel === a.inputValue);
    return e.filterable && e.allowCreate && a.inputValue !== "" && !A;
  }), Qe = () => {
    e.filterable && Me(e.filterMethod) || e.filterable && e.remote && Me(e.remoteMethod) || ve.value.forEach((A) => {
      var B;
      (B = A.updateOption) == null || B.call(A, a.inputValue);
    });
  }, yt = Ms(), et = P(() => ["small"].includes(yt.value) ? "small" : "default"), tt = P({
    get() {
      return C.value && !De.value;
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
    const B = (A = e.placeholder) != null ? A : n("el.select.placeholder");
    return e.multiple || !W.value ? B : a.selectedLabel;
  }), Tt = P(() => rs ? null : "mouseenter");
  Q(() => e.modelValue, (A, B) => {
    e.multiple && e.filterable && !e.reserveKeyword && (a.inputValue = "", b("")), M(), !so(A, B) && e.validateEvent && Y?.validate("change").catch((re) => void 0);
  }, {
    flush: "post",
    deep: !0
  }), Q(() => C.value, (A) => {
    A ? b(a.inputValue) : (a.inputValue = "", a.previousQuery = null, a.isBeforeHide = !0), t("visible-change", A);
  }), Q(() => a.options.entries(), () => {
    Ie && (M(), e.defaultFirstOption && (e.filterable || e.remote) && We.value && _());
  }, {
    flush: "post"
  }), Q([() => a.hoveringIndex, ve], ([A]) => {
    Re(A) && A > -1 ? D.value = ve.value[A] || {} : D.value = {}, ve.value.forEach((B) => {
      B.hover = D.value === B;
    });
  }), rl(() => {
    a.isBeforeHide || Qe();
  });
  const b = (A) => {
    a.previousQuery === A || E.value || (a.previousQuery = A, e.filterable && Me(e.filterMethod) ? e.filterMethod(A) : e.filterable && e.remote && Me(e.remoteMethod) && e.remoteMethod(A), e.defaultFirstOption && (e.filterable || e.remote) && We.value ? Te(_) : Te(ie));
  }, _ = () => {
    const A = ve.value.filter((ot) => ot.visible && !ot.disabled && !ot.states.groupDisabled), B = A.find((ot) => ot.created), re = A[0], Pe = ve.value.map((ot) => ot.value);
    a.hoveringIndex = Xs(Pe, B || re);
  }, M = () => {
    if (e.multiple)
      a.selectedLabel = "";
    else {
      const B = Pt(e.modelValue) ? e.modelValue[0] : e.modelValue, re = H(B);
      a.selectedLabel = re.currentLabel, a.selected = [re];
      return;
    }
    const A = [];
    $n(e.modelValue) || un(e.modelValue).forEach((B) => {
      A.push(H(B));
    }), a.selected = A;
  }, H = (A) => {
    let B;
    const re = dp(A);
    for (let On = a.cachedOptions.size - 1; On >= 0; On--) {
      const nn = Xe.value[On];
      if (re ? cn(nn.value, e.valueKey) === cn(A, e.valueKey) : nn.value === A) {
        B = {
          value: A,
          currentLabel: nn.currentLabel,
          get isDisabled() {
            return nn.isDisabled;
          }
        };
        break;
      }
    }
    if (B)
      return B;
    const Pe = re ? A.label : A ?? "";
    return {
      value: A,
      currentLabel: Pe
    };
  }, ie = () => {
    a.hoveringIndex = ve.value.findIndex((A) => a.selected.some((B) => Lo(B) === Lo(A)));
  }, J = () => {
    a.selectionWidth = l.value.getBoundingClientRect().width;
  }, y = () => {
    a.collapseItemWidth = w.value.getBoundingClientRect().width;
  }, N = () => {
    var A, B;
    (B = (A = u.value) == null ? void 0 : A.updatePopper) == null || B.call(A);
  }, te = () => {
    var A, B;
    (B = (A = f.value) == null ? void 0 : A.updatePopper) == null || B.call(A);
  }, ce = () => {
    a.inputValue.length > 0 && !C.value && (C.value = !0), b(a.inputValue);
  }, Be = (A) => {
    if (a.inputValue = A.target.value, e.remote)
      vn();
    else
      return ce();
  }, vn = Zv(() => {
    ce();
  }, xe.value), ut = (A) => {
    so(e.modelValue, A) || t(tr, A);
  }, Sr = (A) => qv(A, (B) => {
    const re = a.cachedOptions.get(B);
    return re && !re.disabled && !re.states.groupDisabled;
  }), Zs = (A) => {
    if (e.multiple && A.code !== Nt.delete && A.target.value.length <= 0) {
      const B = un(e.modelValue).slice(), re = Sr(B);
      if (re < 0)
        return;
      const Pe = B[re];
      B.splice(re, 1), t(Vt, B), ut(B), t("remove-tag", Pe);
    }
  }, rc = (A, B) => {
    const re = a.selected.indexOf(B);
    if (re > -1 && !oe.value) {
      const Pe = un(e.modelValue).slice();
      Pe.splice(re, 1), t(Vt, Pe), ut(Pe), t("remove-tag", B.value);
    }
    A.stopPropagation(), Oo();
  }, qs = (A) => {
    A.stopPropagation();
    const B = e.multiple ? [] : Ce.value;
    if (e.multiple)
      for (const re of a.selected)
        re.isDisabled && B.push(re.value);
    t(Vt, B), ut(B), a.hoveringIndex = -1, C.value = !1, t("clear"), Oo();
  }, Js = (A) => {
    var B;
    if (e.multiple) {
      const re = un((B = e.modelValue) != null ? B : []).slice(), Pe = Xs(re, A);
      Pe > -1 ? re.splice(Pe, 1) : (e.multipleLimit <= 0 || re.length < e.multipleLimit) && re.push(A.value), t(Vt, re), ut(re), A.created && b(""), e.filterable && !e.reserveKeyword && (a.inputValue = "");
    } else
      t(Vt, A.value), ut(A.value), C.value = !1;
    Oo(), !C.value && Te(() => {
      ko(A);
    });
  }, Xs = (A = [], B) => $n(B) ? -1 : dt(B.value) ? A.findIndex((re) => so(cn(re, e.valueKey), Lo(B))) : A.indexOf(B.value), ko = (A) => {
    var B, re, Pe, ot, On;
    const nn = Pt(A) ? A[0] : A;
    let Io = null;
    if (nn?.value) {
      const Zn = ve.value.filter((wc) => wc.value === nn.value);
      Zn.length > 0 && (Io = Zn[0].$el);
    }
    if (u.value && Io) {
      const Zn = (ot = (Pe = (re = (B = u.value) == null ? void 0 : B.popperRef) == null ? void 0 : re.contentRef) == null ? void 0 : Pe.querySelector) == null ? void 0 : ot.call(Pe, `.${r.be("dropdown", "wrap")}`);
      Zn && zg(Zn, Io);
    }
    (On = d.value) == null || On.handleScroll();
  }, sc = (A) => {
    a.options.set(A.value, A), a.cachedOptions.set(A.value, A);
  }, ac = (A, B) => {
    a.options.get(A) === B && a.options.delete(A);
  }, ic = P(() => {
    var A, B;
    return (B = (A = u.value) == null ? void 0 : A.popperRef) == null ? void 0 : B.contentRef;
  }), lc = () => {
    a.isBeforeHide = !1, Te(() => {
      var A;
      (A = d.value) == null || A.update(), ko(a.selected);
    });
  }, Oo = () => {
    var A;
    (A = p.value) == null || A.focus();
  }, uc = () => {
    var A;
    if (C.value) {
      C.value = !1, Te(() => {
        var B;
        return (B = p.value) == null ? void 0 : B.blur();
      });
      return;
    }
    (A = p.value) == null || A.blur();
  }, cc = (A) => {
    qs(A);
  }, dc = (A) => {
    if (C.value = !1, k.value) {
      const B = new FocusEvent("focus", A);
      Te(() => $(B));
    }
  }, fc = () => {
    a.inputValue.length > 0 ? a.inputValue = "" : C.value = !1;
  }, Qs = () => {
    oe.value || (rs && (a.inputHovering = !0), a.menuVisibleOnFocus ? a.menuVisibleOnFocus = !1 : C.value = !C.value);
  }, pc = () => {
    if (!C.value)
      Qs();
    else {
      const A = ve.value[a.hoveringIndex];
      A && !A.isDisabled && Js(A);
    }
  }, Lo = (A) => dt(A.value) ? cn(A.value, e.valueKey) : A.value, mc = P(() => ve.value.filter((A) => A.visible).every((A) => A.isDisabled)), hc = P(() => e.multiple ? e.collapseTags ? a.selected.slice(0, e.maxCollapseTags) : a.selected : []), vc = P(() => e.multiple ? e.collapseTags ? a.selected.slice(e.maxCollapseTags) : [] : []), ea = (A) => {
    if (!C.value) {
      C.value = !0;
      return;
    }
    if (!(a.options.size === 0 || We.value === 0 || E.value) && !mc.value) {
      A === "next" ? (a.hoveringIndex++, a.hoveringIndex === a.options.size && (a.hoveringIndex = 0)) : A === "prev" && (a.hoveringIndex--, a.hoveringIndex < 0 && (a.hoveringIndex = a.options.size - 1));
      const B = ve.value[a.hoveringIndex];
      (B.isDisabled || !B.visible) && ea(A), Te(() => ko(D.value));
    }
  }, gc = () => {
    if (!l.value)
      return 0;
    const A = window.getComputedStyle(l.value);
    return Number.parseFloat(A.gap || "6px");
  }, yc = P(() => {
    const A = gc();
    return { maxWidth: `${w.value && e.maxCollapseTags === 1 ? a.selectionWidth - a.collapseItemWidth - A : a.selectionWidth}px` };
  }), bc = P(() => ({ maxWidth: `${a.selectionWidth}px` })), _c = (A) => {
    t("popup-scroll", A);
  };
  return Lt(l, J), Lt(h, N), Lt(I, N), Lt(v, te), Lt(w, y), Ae(() => {
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
    filteredOptionsCount: We,
    updateTooltip: N,
    updateTagTooltip: te,
    debouncedOnInputChange: vn,
    onInput: Be,
    deletePrevTag: Zs,
    deleteTag: rc,
    deleteSelected: qs,
    handleOptionSelect: Js,
    scrollToOption: ko,
    hasModelValue: W,
    shouldShowPlaceholder: nt,
    currentPlaceholder: lt,
    mouseEnterEventName: Tt,
    needStatusIcon: he,
    showClose: pe,
    iconComponent: Se,
    iconReverse: Ge,
    validateState: Ye,
    validateIcon: at,
    showNewOption: it,
    updateOptions: Qe,
    collapseTagSize: et,
    setSelected: M,
    selectDisabled: oe,
    emptyText: ze,
    handleCompositionStart: L,
    handleCompositionUpdate: S,
    handleCompositionEnd: T,
    onOptionCreate: sc,
    onOptionDestroy: ac,
    handleMenuEnter: lc,
    focus: Oo,
    blur: uc,
    handleClearClick: cc,
    handleClickOutside: dc,
    handleEsc: fc,
    toggleMenu: Qs,
    selectOption: pc,
    getValueKey: Lo,
    navigateOptions: ea,
    dropdownMenuVisible: tt,
    showTagList: hc,
    collapseTagList: vc,
    popupScroll: _c,
    tagStyle: yc,
    collapseTagStyle: bc,
    popperRef: ic,
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
var M_ = q({
  name: "ElOptions",
  setup(e, { slots: t }) {
    const n = fe(Er);
    let o = [];
    return () => {
      var r, s;
      const a = (r = t.default) == null ? void 0 : r.call(t), i = [];
      function l(u) {
        Pt(u) && u.forEach((f) => {
          var p, m, g, h;
          const v = (p = f?.type || {}) == null ? void 0 : p.name;
          v === "ElOptionGroup" ? l(!pt(f.children) && !Pt(f.children) && Me((m = f.children) == null ? void 0 : m.default) ? (g = f.children) == null ? void 0 : g.default() : f.children) : v === "ElOption" ? i.push((h = f.props) == null ? void 0 : h.value) : Pt(f.children) && l(f.children);
        });
      }
      return a.length && l((s = a[0]) == null ? void 0 : s.children), so(i, o) || (o = i, n && (n.states.optionValues = i)), a;
    };
  }
});
const R_ = we({
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
  size: Ps,
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
  teleported: Gs.teleported,
  persistent: {
    type: Boolean,
    default: !0
  },
  clearIcon: {
    type: Wn,
    default: As
  },
  fitInputWidth: Boolean,
  suffixIcon: {
    type: Wn,
    default: Hg
  },
  tagType: { ...ls.type, default: "info" },
  tagEffect: { ...ls.effect, default: "light" },
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
    values: wr,
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
  ...vu,
  ...Eo(["ariaLabel"])
}), qi = "ElSelect", $_ = q({
  name: qi,
  componentName: qi,
  components: {
    ElSelectMenu: A_,
    ElOption: Ys,
    ElOptions: M_,
    ElTag: C_,
    ElScrollbar: Hy,
    ElTooltip: d_,
    ElIcon: ct
  },
  directives: { ClickOutside: E_ },
  props: R_,
  emits: [
    Vt,
    tr,
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
      ...ir(e),
      modelValue: n
    }), r = N_(o, t), { calculatorRef: s, inputStyle: a } = T_();
    Rt(Er, wn({
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
function D_(e, t, n, o, r, s) {
  const a = gn("el-tag"), i = gn("el-tooltip"), l = gn("el-icon"), u = gn("el-option"), f = gn("el-options"), p = gn("el-scrollbar"), m = gn("el-select-menu"), g = $c("click-outside");
  return Le((R(), G("div", {
    ref: "selectRef",
    class: j([e.nsSelect.b(), e.nsSelect.m(e.selectSize)]),
    [Dc(e.mouseEnterEventName)]: (h) => e.states.inputHovering = !0,
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
                (R(!0), G(ft, null, ta(e.showTagList, (v) => (R(), G("div", {
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
                      (R(!0), G(ft, null, ta(e.collapseTagList, (v) => (R(), G("div", {
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
                Le(O("input", {
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
                  [zr, e.states.inputValue]
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
            Le(z(p, {
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
var F_ = /* @__PURE__ */ Ee($_, [["render", D_], ["__file", "select.vue"]]);
const x_ = q({
  name: "ElOptionGroup",
  componentName: "ElOptionGroup",
  props: {
    label: String,
    disabled: Boolean
  },
  setup(e) {
    const t = $e("select"), n = x(null), o = Ke(), r = x([]);
    Rt(Xu, wn({
      ...ir(e)
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
    return Ae(() => {
      l();
    }), wg(n, l, {
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
function z_(e, t, n, o, r, s) {
  return Le((R(), G("ul", {
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
var Qu = /* @__PURE__ */ Ee(x_, [["render", z_], ["__file", "option-group.vue"]]);
const W_ = tn(F_, {
  Option: Ys,
  OptionGroup: Qu
}), B_ = wu(Ys);
wu(Qu);
const ec = ["success", "info", "warning", "error"], je = Eu({
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
  appendTo: Ie ? document.body : void 0
}), j_ = we({
  customClass: {
    type: String,
    default: je.customClass
  },
  center: {
    type: Boolean,
    default: je.center
  },
  dangerouslyUseHTMLString: {
    type: Boolean,
    default: je.dangerouslyUseHTMLString
  },
  duration: {
    type: Number,
    default: je.duration
  },
  icon: {
    type: Wn,
    default: je.icon
  },
  id: {
    type: String,
    default: je.id
  },
  message: {
    type: X([
      String,
      Object,
      Function
    ]),
    default: je.message
  },
  onClose: {
    type: X(Function),
    default: je.onClose
  },
  showClose: {
    type: Boolean,
    default: je.showClose
  },
  type: {
    type: String,
    values: ec,
    default: je.type
  },
  plain: {
    type: Boolean,
    default: je.plain
  },
  offset: {
    type: Number,
    default: je.offset
  },
  zIndex: {
    type: Number,
    default: je.zIndex
  },
  grouping: {
    type: Boolean,
    default: je.grouping
  },
  repeatNum: {
    type: Number,
    default: je.repeatNum
  }
}), V_ = {
  destroy: () => !0
}, wt = Fc([]), U_ = (e) => {
  const t = wt.findIndex((r) => r.id === e), n = wt[t];
  let o;
  return t > 0 && (o = wt[t - 1]), { current: n, prev: o };
}, H_ = (e) => {
  const { prev: t } = U_(e);
  return t ? t.vm.exposed.bottom.value : 0;
}, K_ = (e, t) => wt.findIndex((o) => o.id === e) > 0 ? 16 : t, G_ = q({
  name: "ElMessage"
}), Y_ = /* @__PURE__ */ q({
  ...G_,
  props: j_,
  emits: V_,
  setup(e, { expose: t }) {
    const n = e, { Close: o } = dy, { ns: r, zIndex: s } = yu("message"), { currentZIndex: a, nextZIndex: i } = s, l = x(), u = x(!1), f = x(0);
    let p;
    const m = P(() => n.type ? n.type === "error" ? "danger" : n.type : "info"), g = P(() => {
      const k = n.type;
      return { [r.bm("icon", k)]: k && or[k] };
    }), h = P(() => n.icon || or[n.type] || ""), v = P(() => H_(n.id)), w = P(() => K_(n.id, n.offset) + v.value), d = P(() => f.value + w.value), E = P(() => ({
      top: `${w.value}px`,
      zIndex: a.value
    }));
    function L() {
      n.duration !== 0 && ({ stop: p } = su(() => {
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
    return Ae(() => {
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
        Le(O("div", {
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
          k.repeatNum > 1 ? (R(), ee(c(v_), {
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
var Z_ = /* @__PURE__ */ Ee(Y_, [["__file", "message.vue"]]);
let q_ = 1;
const tc = (e) => {
  const t = !e || pt(e) || uo(e) || Me(e) ? { message: e } : e, n = {
    ...je,
    ...t
  };
  if (!n.appendTo)
    n.appendTo = document.body;
  else if (pt(n.appendTo)) {
    let o = document.querySelector(n.appendTo);
    Ct(o) || (o = document.body), n.appendTo = o;
  }
  return Qo(bt.grouping) && !n.grouping && (n.grouping = bt.grouping), Re(bt.duration) && n.duration === 3e3 && (n.duration = bt.duration), Re(bt.offset) && n.offset === 16 && (n.offset = bt.offset), Qo(bt.showClose) && !n.showClose && (n.showClose = bt.showClose), n;
}, J_ = (e) => {
  const t = wt.indexOf(e);
  if (t === -1)
    return;
  wt.splice(t, 1);
  const { handler: n } = e;
  n.close();
}, X_ = ({ appendTo: e, ...t }, n) => {
  const o = `message_${q_++}`, r = t.onClose, s = document.createElement("div"), a = {
    ...t,
    id: o,
    onClose: () => {
      r?.(), J_(f);
    },
    onDestroy: () => {
      Ko(null, s);
    }
  }, i = z(Z_, a, Me(a.message) || uo(a.message) ? {
    default: Me(a.message) ? a.message : () => a.message
  } : null);
  i.appContext = n || Hn._context, Ko(i, s), e.appendChild(s.firstElementChild);
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
  if (!Ie)
    return { close: () => {
    } };
  const n = tc(e);
  if (n.grouping && wt.length) {
    const r = wt.find(({ vnode: s }) => {
      var a;
      return ((a = s.props) == null ? void 0 : a.message) === n.message;
    });
    if (r)
      return r.props.repeatNum += 1, r.props.type = n.type, r.handler;
  }
  if (Re(bt.max) && wt.length >= bt.max)
    return { close: () => {
    } };
  const o = X_(n, t);
  return wt.push(o), o.handler;
};
ec.forEach((e) => {
  Hn[e] = (t = {}, n) => {
    const o = tc(t);
    return Hn({ ...o, type: e }, n);
  };
});
function Q_(e) {
  for (const t of wt)
    (!e || e === t.props.type) && t.handler.close();
}
Hn.closeAll = Q_;
Hn._context = null;
const e1 = _u(Hn, "$message"), nc = [
  "success",
  "info",
  "warning",
  "error"
], t1 = we({
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
    type: Wn
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
    values: [...nc, ""],
    default: ""
  },
  zIndex: Number
}), n1 = {
  destroy: () => !0
}, o1 = q({
  name: "ElNotification"
}), r1 = /* @__PURE__ */ q({
  ...o1,
  props: t1,
  emits: n1,
  setup(e, { expose: t }) {
    const n = e, { ns: o, zIndex: r } = yu("notification"), { nextZIndex: s, currentZIndex: a } = r, { Close: i } = cy, l = x(!1);
    let u;
    const f = P(() => {
      const L = n.type;
      return L && or[n.type] ? o.m(L) : "";
    }), p = P(() => n.type && or[n.type] || n.icon), m = P(() => n.position.endsWith("right") ? "right" : "left"), g = P(() => n.position.startsWith("top") ? "top" : "bottom"), h = P(() => {
      var L;
      return {
        [g.value]: `${n.offset}px`,
        zIndex: (L = n.zIndex) != null ? L : a.value
      };
    });
    function v() {
      n.duration > 0 && ({ stop: u } = su(() => {
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
    return Ae(() => {
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
        Le(O("div", {
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
            Le(O("div", {
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
var s1 = /* @__PURE__ */ Ee(r1, [["__file", "notification.vue"]]);
const ar = {
  "top-left": [],
  "top-right": [],
  "bottom-left": [],
  "bottom-right": []
}, us = 16;
let a1 = 1;
const Kn = function(e = {}, t) {
  if (!Ie)
    return { close: () => {
    } };
  (pt(e) || uo(e)) && (e = { message: e });
  const n = e.position || "top-right";
  let o = e.offset || 0;
  ar[n].forEach(({ vm: f }) => {
    var p;
    o += (((p = f.el) == null ? void 0 : p.offsetHeight) || 0) + us;
  }), o += us;
  const r = `notification_${a1++}`, s = e.onClose, a = {
    ...e,
    offset: o,
    id: r,
    onClose: () => {
      i1(r, n, s);
    }
  };
  let i = document.body;
  Ct(e.appendTo) ? i = e.appendTo : pt(e.appendTo) && (i = document.querySelector(e.appendTo)), Ct(i) || (i = document.body);
  const l = document.createElement("div"), u = z(s1, a, Me(a.message) ? a.message : uo(a.message) ? () => a.message : null);
  return u.appContext = $n(t) ? Kn._context : t, u.props.onDestroy = () => {
    Ko(null, l);
  }, Ko(u, l), ar[n].push({ vm: u }), i.appendChild(l.firstElementChild), {
    close: () => {
      u.component.exposed.visible.value = !1;
    }
  };
};
nc.forEach((e) => {
  Kn[e] = (t = {}, n) => ((pt(t) || uo(t)) && (t = {
    message: t
  }), Kn({ ...t, type: e }, n));
});
function i1(e, t, n) {
  const o = ar[t], r = o.findIndex(({ vm: u }) => {
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
      const { el: f, component: p } = o[u].vm, m = Number.parseInt(f.style[i], 10) - a - us;
      p.props.offset = m;
    }
}
function l1() {
  for (const e of Object.values(ar))
    e.forEach(({ vm: t }) => {
      t.component.exposed.visible.value = !1;
    });
}
Kn.closeAll = l1;
Kn._context = null;
const u1 = _u(Kn, "$notify"), bn = {
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
    o === "center" ? e1({
      message: t,
      type: n,
      duration: r,
      showClose: s,
      grouping: !0,
      customClass: `app-toast app-toast--${n}`
    }) : u1({
      message: t,
      type: n,
      position: o,
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
}, c1 = {
  class: "title-bar fixed top-0 left-0 right-0 z-10 flex items-center justify-between px-4 py-3",
  "data-tauri-drag-region": ""
}, d1 = { class: "flex items-center gap-3" }, f1 = { class: "title-icon-wrap" }, p1 = { class: "m-0 text-lg font-medium tracking-tight" }, m1 = { class: "content mx-auto max-w-2xl px-5 pt-20 pb-8" }, h1 = { class: "section" }, v1 = { class: "section-title" }, g1 = { class: "mode-selector grid grid-cols-2 gap-3" }, y1 = { class: "mode-option block cursor-pointer h-full" }, b1 = { class: "mode-content mode-system" }, _1 = { class: "mode-icon-wrap" }, w1 = { class: "mode-body" }, C1 = { class: "mode-title" }, E1 = { class: "mode-desc" }, S1 = { class: "mode-option block cursor-pointer h-full" }, T1 = { class: "mode-content mode-light" }, k1 = { class: "mode-icon-wrap" }, O1 = { class: "mode-body" }, L1 = { class: "mode-title" }, I1 = { class: "mode-desc" }, P1 = { class: "mode-option block cursor-pointer h-full" }, A1 = { class: "mode-content mode-dark" }, N1 = { class: "mode-icon-wrap" }, M1 = { class: "mode-body" }, R1 = { class: "mode-title" }, $1 = { class: "mode-desc" }, D1 = { class: "mode-option block cursor-pointer h-full" }, F1 = { class: "mode-content mode-schedule" }, x1 = { class: "mode-icon-wrap" }, z1 = { class: "mode-body" }, W1 = { class: "mode-title" }, B1 = { class: "mode-desc" }, j1 = { class: "section" }, V1 = { class: "status-card" }, U1 = { class: "status-row" }, H1 = { class: "status-label" }, K1 = {
  key: 0,
  class: "status-row"
}, G1 = { class: "status-label" }, Y1 = {
  key: 1,
  class: "status-hint"
}, Z1 = { class: "section" }, q1 = { class: "section-title" }, J1 = { class: "mode-selector grid grid-cols-2 gap-3" }, X1 = { class: "mode-option block cursor-pointer h-full" }, Q1 = { class: "schedule-type-card" }, ew = { class: "schedule-type-title" }, tw = { class: "schedule-type-desc" }, nw = { class: "mode-option block cursor-pointer h-full" }, ow = { class: "schedule-type-card" }, rw = { class: "schedule-type-title" }, sw = { class: "schedule-type-desc" }, aw = {
  key: 0,
  class: "section"
}, iw = { class: "section-title section-title-with-icon" }, lw = { class: "inset-card location-card" }, uw = {
  key: 0,
  class: "loading-hint"
}, cw = {
  key: 1,
  class: "location-info"
}, dw = { class: "info-row" }, fw = { class: "info-label" }, pw = { class: "info-value" }, mw = { class: "info-row" }, hw = { class: "info-label" }, vw = { class: "info-value" }, gw = { class: "info-row" }, yw = { class: "info-label" }, bw = { class: "info-value" }, _w = ["disabled"], ww = {
  key: 1,
  class: "section"
}, Cw = { class: "section-title" }, Ew = { class: "inset-card sun-times-card" }, Sw = { class: "sun-row" }, Tw = { class: "sun-info" }, kw = { class: "sun-label" }, Ow = { class: "sun-value" }, Lw = { class: "sun-row" }, Iw = { class: "sun-info" }, Pw = { class: "sun-label" }, Aw = { class: "sun-value" }, Nw = { class: "sun-row sun-period" }, Mw = { class: "sun-label" }, Rw = {
  key: 2,
  class: "section"
}, $w = { class: "inset-card location-card" }, Dw = { class: "info-row" }, Fw = { class: "info-value" }, xw = {
  key: 0,
  class: "info-row"
}, zw = { class: "info-value" }, Ww = {
  key: 1,
  class: "info-row"
}, Bw = { class: "info-value" }, jw = {
  key: 2,
  class: "info-row"
}, Vw = { class: "info-value" }, Uw = {
  key: 3,
  class: "info-row"
}, Hw = { class: "info-value" }, Kw = {
  key: 3,
  class: "section"
}, Gw = { class: "section-title" }, Yw = { class: "inset-card time-settings" }, Zw = { class: "time-row" }, qw = { class: "time-label-text" }, Jw = { class: "time-row" }, Xw = { class: "time-label-text" }, Qw = /* @__PURE__ */ q({
  __name: "index",
  setup(e) {
    const { t } = _o(), n = bd(), o = P(() => n.theme === "auto" ? s.value : n.theme === "dark"), r = x({
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
        be.error("[主题] 加载配置失败", C), bn.msg(t("darkMode.loadConfigFailed"), "error");
      }
    }, w = async () => {
      try {
        const C = await F("get_dark_mode_status_command");
        s.value = C.currentIsDark, a.value = C.schedulerRunning, u.value = C.sunCalcDebug ?? null;
      } catch (C) {
        be.error("[主题] 加载状态失败", C);
      }
    }, d = async () => {
      f.value = !0;
      try {
        const C = await F("get_location_info");
        i.value = C, r.value.latitude = C.latitude, r.value.longitude = C.longitude, r.value.timezone_offset = C.timezone_offset, r.value.location_name = `${C.city}, ${C.region}`, r.value.schedule_type === "SunBased" && await E(), await I();
      } catch (C) {
        be.error("[主题] 获取位置失败", C), bn.msg(t("darkMode.getLocationFailed"), "error");
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
          be.error("[主题] 计算日出日落时间失败", C);
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
          be.error("[主题] 保存配置失败", C), bn.msg(t("darkMode.saveConfigFailed"), "error");
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
        be.error("[主题] 切换主题失败", C), bn.msg(t("darkMode.toggleFailed"), "error");
      }
    }, $ = () => {
      Vr().close();
    };
    return Ae(async () => {
      await v(), r.value.theme_mode === "Schedule" && r.value.schedule_type === "SunBased" && await d(), g.value = await ps("dark-mode-changed", async (C) => {
        be.debug(`[主题][窗口:dark_mode] 收到主题变更：${JSON.stringify(C.payload)}`), s.value = C.payload.isDark, m.value = !0;
        try {
          await v(), be.debug(`[主题][窗口:dark_mode] 已从后端刷新配置：theme_mode=${r.value.theme_mode}, schedule_type=${r.value.schedule_type}`);
        } finally {
          m.value = !1;
        }
        n.theme === "auto" && n.syncSystemThemeStyle(C.payload.isDark);
      }), Te(() => {
        setTimeout(() => {
          Vr().emit("dark_mode_ready");
        }, 100);
      });
    }), Q(() => r.value.schedule_type, async (C) => {
      C === "SunBased" && r.value.latitude && r.value.longitude && await E();
    }), cs(() => {
      g.value && g.value();
    }), (C, D) => (R(), G(
      "div",
      {
        class: j(["dark-mode-container select-none rounded-lg", { dark: c(o) }])
      },
      [
        U(" 标题栏 "),
        O("div", c1, [
          O("div", d1, [
            O("div", f1, [
              z(c(Or), {
                class: "text-xl",
                theme: "filled"
              })
            ]),
            O(
              "h1",
              p1,
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
            z(c(hd), { size: 18 })
          ])
        ]),
        U(" 主要内容 "),
        O("div", m1, [
          U(" 主题模式选择（四选一） "),
          O("div", h1, [
            O(
              "h2",
              v1,
              V(C.$t("darkMode.themeMode")),
              1
              /* TEXT */
            ),
            O("div", g1, [
              O("label", y1, [
                Le(O(
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
                O("div", b1, [
                  O("span", _1, [
                    z(c(vd), {
                      class: "mode-icon",
                      theme: "filled",
                      size: 22
                    })
                  ]),
                  O("div", w1, [
                    O(
                      "span",
                      C1,
                      V(C.$t("darkMode.systemMode")),
                      1
                      /* TEXT */
                    ),
                    O(
                      "span",
                      E1,
                      V(C.$t("darkMode.systemModeDesc")),
                      1
                      /* TEXT */
                    )
                  ])
                ])
              ]),
              O("label", S1, [
                Le(O(
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
                O("div", T1, [
                  O("span", k1, [
                    z(c(aa), {
                      class: "mode-icon",
                      theme: "filled",
                      size: 22
                    })
                  ]),
                  O("div", O1, [
                    O(
                      "span",
                      L1,
                      V(C.$t("darkMode.lightMode")),
                      1
                      /* TEXT */
                    ),
                    O(
                      "span",
                      I1,
                      V(C.$t("darkMode.lightModeDesc")),
                      1
                      /* TEXT */
                    )
                  ])
                ])
              ]),
              O("label", P1, [
                Le(O(
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
                O("div", A1, [
                  O("span", N1, [
                    z(c(Or), {
                      class: "mode-icon",
                      theme: "filled",
                      size: 22
                    })
                  ]),
                  O("div", M1, [
                    O(
                      "span",
                      R1,
                      V(C.$t("darkMode.darkMode")),
                      1
                      /* TEXT */
                    ),
                    O(
                      "span",
                      $1,
                      V(C.$t("darkMode.darkModeDesc")),
                      1
                      /* TEXT */
                    )
                  ])
                ])
              ]),
              O("label", D1, [
                Le(O(
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
                O("div", F1, [
                  O("span", x1, [
                    z(c(la), {
                      class: "mode-icon",
                      theme: "filled",
                      size: 22
                    })
                  ]),
                  O("div", z1, [
                    O(
                      "span",
                      W1,
                      V(C.$t("darkMode.scheduleMode")),
                      1
                      /* TEXT */
                    ),
                    O(
                      "span",
                      B1,
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
          O("div", j1, [
            O("div", V1, [
              O("div", U1, [
                O(
                  "span",
                  H1,
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
              c(r).theme_mode === "Schedule" ? (R(), G("div", K1, [
                O(
                  "span",
                  G1,
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
                Y1,
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
              O("div", Z1, [
                O(
                  "h2",
                  q1,
                  V(C.$t("darkMode.scheduleType")),
                  1
                  /* TEXT */
                ),
                O("div", J1, [
                  O("label", X1, [
                    Le(O(
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
                    O("div", Q1, [
                      O("span", ew, [
                        z(c(ia), { size: 18 }),
                        jt(
                          " " + V(C.$t("darkMode.sunBased")),
                          1
                          /* TEXT */
                        )
                      ]),
                      O(
                        "span",
                        tw,
                        V(C.$t("darkMode.sunBasedDesc")),
                        1
                        /* TEXT */
                      )
                    ])
                  ]),
                  O("label", nw, [
                    Le(O(
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
                    O("div", ow, [
                      O("span", rw, [
                        z(c(la), { size: 18 }),
                        jt(
                          " " + V(C.$t("darkMode.customSchedule")),
                          1
                          /* TEXT */
                        )
                      ]),
                      O(
                        "span",
                        sw,
                        V(C.$t("darkMode.customScheduleDesc")),
                        1
                        /* TEXT */
                      )
                    ])
                  ])
                ])
              ]),
              U(" 位置信息（日出日落模式） "),
              c(r).schedule_type === "SunBased" ? (R(), G("div", aw, [
                O("h2", iw, [
                  z(c(gd), {
                    theme: "filled",
                    size: 18
                  }),
                  jt(
                    " " + V(C.$t("darkMode.locationInfo")),
                    1
                    /* TEXT */
                  )
                ]),
                O("div", lw, [
                  c(f) ? (R(), G(
                    "div",
                    uw,
                    V(C.$t("darkMode.gettingLocation")),
                    1
                    /* TEXT */
                  )) : c(i) ? (R(), G("div", cw, [
                    O("div", dw, [
                      O(
                        "span",
                        fw,
                        V(C.$t("darkMode.location")),
                        1
                        /* TEXT */
                      ),
                      O(
                        "span",
                        pw,
                        V(c(i).city) + ", " + V(c(i).region) + ", " + V(c(i).country),
                        1
                        /* TEXT */
                      )
                    ]),
                    O("div", mw, [
                      O(
                        "span",
                        hw,
                        V(C.$t("darkMode.timezone")),
                        1
                        /* TEXT */
                      ),
                      O(
                        "span",
                        vw,
                        V(c(i).timezone),
                        1
                        /* TEXT */
                      )
                    ]),
                    O("div", gw, [
                      O(
                        "span",
                        yw,
                        V(C.$t("darkMode.coordinates")),
                        1
                        /* TEXT */
                      ),
                      O(
                        "span",
                        bw,
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
                    c(f) ? (R(), ee(c(sa), {
                      key: 1,
                      class: "animate-spin",
                      size: 16
                    })) : (R(), ee(c(sa), {
                      key: 0,
                      size: 16
                    })),
                    jt(
                      " " + V(c(f) ? C.$t("darkMode.refreshing") : C.$t("darkMode.refreshLocation")),
                      1
                      /* TEXT */
                    )
                  ], 8, _w)
                ])
              ])) : U("v-if", !0),
              U(" 日出日落时间 "),
              c(r).schedule_type === "SunBased" && c(l) ? (R(), G("div", ww, [
                O(
                  "h2",
                  Cw,
                  V(C.$t("darkMode.sunTimes")),
                  1
                  /* TEXT */
                ),
                O("div", Ew, [
                  O("div", Sw, [
                    z(c(ia), {
                      class: "sun-icon",
                      theme: "filled",
                      size: 20
                    }),
                    O("div", Tw, [
                      O(
                        "span",
                        kw,
                        V(C.$t("darkMode.sunrise")),
                        1
                        /* TEXT */
                      ),
                      O(
                        "span",
                        Ow,
                        V(c(l).sunrise),
                        1
                        /* TEXT */
                      )
                    ])
                  ]),
                  O("div", Lw, [
                    z(c(yd), {
                      class: "sun-icon",
                      theme: "filled",
                      size: 20
                    }),
                    O("div", Iw, [
                      O(
                        "span",
                        Pw,
                        V(C.$t("darkMode.sunset")),
                        1
                        /* TEXT */
                      ),
                      O(
                        "span",
                        Aw,
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
                  O("div", Nw, [
                    O(
                      "span",
                      Mw,
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
              c(r).schedule_type === "SunBased" ? (R(), G("div", Rw, [
                D[14] || (D[14] = O(
                  "h2",
                  { class: "section-title" },
                  "计算依据",
                  -1
                  /* HOISTED */
                )),
                O("div", $w, [
                  O("div", Dw, [
                    D[9] || (D[9] = O(
                      "span",
                      { class: "info-label" },
                      "来源",
                      -1
                      /* HOISTED */
                    )),
                    O(
                      "span",
                      Fw,
                      V(c(h)),
                      1
                      /* TEXT */
                    )
                  ]),
                  c(u)?.latitude !== void 0 && c(u)?.longitude !== void 0 ? (R(), G("div", xw, [
                    D[10] || (D[10] = O(
                      "span",
                      { class: "info-label" },
                      "计算坐标",
                      -1
                      /* HOISTED */
                    )),
                    O(
                      "span",
                      zw,
                      V(Number(c(u)?.latitude).toFixed(4)) + ", " + V(Number(c(u)?.longitude).toFixed(4)),
                      1
                      /* TEXT */
                    )
                  ])) : U("v-if", !0),
                  c(u)?.timezoneOffset !== void 0 ? (R(), G("div", Ww, [
                    D[11] || (D[11] = O(
                      "span",
                      { class: "info-label" },
                      "时区偏移(分钟)",
                      -1
                      /* HOISTED */
                    )),
                    O(
                      "span",
                      Bw,
                      V(c(u)?.timezoneOffset),
                      1
                      /* TEXT */
                    )
                  ])) : U("v-if", !0),
                  c(u)?.sunset ? (R(), G("div", jw, [
                    D[12] || (D[12] = O(
                      "span",
                      { class: "info-label" },
                      "用于切换的日落时间",
                      -1
                      /* HOISTED */
                    )),
                    O(
                      "span",
                      Vw,
                      V(c(u)?.sunset),
                      1
                      /* TEXT */
                    )
                  ])) : U("v-if", !0),
                  c(u)?.error ? (R(), G("div", Uw, [
                    D[13] || (D[13] = O(
                      "span",
                      { class: "info-label" },
                      "错误",
                      -1
                      /* HOISTED */
                    )),
                    O(
                      "span",
                      Hw,
                      V(c(u)?.error),
                      1
                      /* TEXT */
                    )
                  ])) : U("v-if", !0)
                ])
              ])) : U("v-if", !0),
              U(" 自定义时间 "),
              c(r).schedule_type === "Custom" ? (R(), G("div", Kw, [
                O(
                  "h2",
                  Gw,
                  V(C.$t("darkMode.customTime")),
                  1
                  /* TEXT */
                ),
                O("div", Yw, [
                  O("label", Zw, [
                    O("span", qw, [
                      z(c(aa), {
                        theme: "filled",
                        size: 18
                      }),
                      jt(
                        " " + V(C.$t("darkMode.lightModeStart")),
                        1
                        /* TEXT */
                      )
                    ]),
                    Le(O(
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
                      [zr, c(r).custom_light_time]
                    ])
                  ]),
                  O("label", Jw, [
                    O("span", Xw, [
                      z(c(Or), {
                        theme: "filled",
                        size: 18
                      }),
                      jt(
                        " " + V(C.$t("darkMode.darkModeStart")),
                        1
                        /* TEXT */
                      )
                    ]),
                    Le(O(
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
                      [zr, c(r).custom_dark_time]
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
}), oc = (e, t) => {
  const n = e.__vccOpts || e;
  for (const [o, r] of t)
    n[o] = r;
  return n;
}, e2 = /* @__PURE__ */ oc(Qw, [["__scopeId", "data-v-aba87ad9"]]), t2 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: e2
}, Symbol.toStringTag, { value: "Module" }));
async function n2() {
  try {
    return await F("get_attachment_config");
  } catch (e) {
    throw new Error(`获取附件配置失败: ${e}`);
  }
}
async function o2(e) {
  try {
    await F("update_attachment_config", { config: e });
  } catch (t) {
    throw new Error(`更新附件配置失败: ${t}`);
  }
}
const r2 = { class: "settings-panel" }, s2 = { class: "panel-header" }, a2 = { class: "panel-title" }, i2 = { class: "panel-content" }, l2 = { class: "summarize-section transparent-input" }, u2 = { class: "summarize-label" }, c2 = { class: "summarize-label-title" }, d2 = { class: "summarize-label-desc" }, f2 = { class: "summarize-input-wrapper" }, p2 = { class: "summarize-section transparent-input" }, m2 = { class: "summarize-label" }, h2 = { class: "summarize-label-title" }, v2 = { class: "summarize-label-desc" }, g2 = { class: "summarize-input-wrapper" }, y2 = { class: "summarize-section transparent-input" }, b2 = { class: "summarize-label" }, _2 = { class: "summarize-label-title" }, w2 = { class: "summarize-label-desc" }, C2 = { class: "summarize-input-wrapper" }, E2 = { class: "preview-box" }, S2 = /* @__PURE__ */ q({
  name: "AttachmentSettings",
  __name: "index",
  setup(e) {
    const { t } = _o(), n = x({
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
          await o2(n.value), bn.msg(t("settings.attachment.configSaved"));
        } catch (l) {
          console.error("保存配置失败:", l), bn.msg(t("settings.attachment.configSaveFailed"), "error");
        } finally {
          r.value = !1;
        }
      }
    }
    return Ae(async () => {
      o.value = !0;
      try {
        n.value = await n2();
      } catch (l) {
        console.error("加载配置失败:", l);
      } finally {
        o.value = !1;
      }
    }), (l, u) => {
      const f = Py, p = B_, m = W_;
      return R(), G("div", r2, [
        U(" 固定标题 "),
        O("div", s2, [
          O(
            "h3",
            a2,
            V(l.$t("settings.attachment.title")),
            1
            /* TEXT */
          )
        ]),
        U(" 可滚动内容 "),
        O("main", i2, [
          U(" 附件路径模板 "),
          O("section", l2, [
            O("div", u2, [
              O(
                "div",
                c2,
                V(l.$t("settings.attachment.pathTemplate")),
                1
                /* TEXT */
              ),
              O(
                "div",
                d2,
                V(l.$t("settings.attachment.pathTemplateHint")),
                1
                /* TEXT */
              )
            ]),
            O("div", f2, [
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
          O("section", p2, [
            O("div", m2, [
              O(
                "div",
                h2,
                V(l.$t("settings.attachment.filenameFormat")),
                1
                /* TEXT */
              ),
              O(
                "div",
                v2,
                V(l.$t("settings.attachment.filenameFormatHint")),
                1
                /* TEXT */
              )
            ]),
            O("div", g2, [
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
          O("section", y2, [
            O("div", b2, [
              O(
                "div",
                _2,
                V(l.$t("settings.attachment.pathPreview")),
                1
                /* TEXT */
              ),
              O(
                "div",
                w2,
                V(l.$t("settings.attachment.pathPreviewHint")),
                1
                /* TEXT */
              )
            ]),
            O("div", C2, [
              O("div", E2, [
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
}), T2 = /* @__PURE__ */ oc(S2, [["__scopeId", "data-v-52dba400"]]), k2 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: T2
}, Symbol.toStringTag, { value: "Module" }));
export {
  L2 as activate
};
