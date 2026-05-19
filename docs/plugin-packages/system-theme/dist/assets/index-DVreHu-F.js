import { i as Fe, r as Z, a as sa, m as St, e as oa, b as mt, c as fs, t as Un, d as ra, n as an, g as Wo, o as jo, w as tt, f as Ds, h as W, j as Be, k as aa, l as R, V as Ps, s as ia, p as zt, q as Bo, u as ce, v as zo, T as la, F as Ht, x as h, y as ze, z as ca, A as Ho, B as Ms, C as ua, D as Ft, E as da, G as J, H as B, I as $t, J as fa, K as b, L as et, M as Ee, N as ln, O as re, P as qe, Q as U, R as cn, S as _s, U as _a, W as Ne, X as Y, Y as Go, Z as Ko, _ as Ut, $ as un, a0 as ut, a1 as Rs } from "./runtime-entry-PuCWRlTX.js";
function Zt(e, t, n) {
  return Array.isArray(e) ? (e.length = Math.max(e.length, t), e.splice(t, 1, n), n) : (e[t] = n, n);
}
function Vn(e, t) {
  if (Array.isArray(e)) {
    e.splice(t, 1);
    return;
  }
  delete e[t];
}
/*!
 * pinia v2.3.1
 * (c) 2025 Eduardo San Martin Morote
 * @license MIT
 */
let At;
const dn = (e) => At = e, ma = process.env.NODE_ENV !== "production" ? Symbol("pinia") : (
  /* istanbul ignore next */
  Symbol()
);
function nt(e) {
  return e && typeof e == "object" && Object.prototype.toString.call(e) === "[object Object]" && typeof e.toJSON != "function";
}
var Pt;
(function(e) {
  e.direct = "direct", e.patchObject = "patch object", e.patchFunction = "patch function";
})(Pt || (Pt = {}));
const Dt = typeof window < "u";
function Yo(e, t) {
  for (const n in t) {
    const s = t[n];
    if (!(n in e))
      continue;
    const o = e[n];
    nt(o) && nt(s) && !mt(s) && !fs(s) ? e[n] = Yo(o, s) : e[n] = s;
  }
  return e;
}
const Xo = () => {
};
function Fs(e, t, n, s = Xo) {
  e.push(t);
  const o = () => {
    const r = e.indexOf(t);
    r > -1 && (e.splice(r, 1), s());
  };
  return !n && Wo() && jo(o), o;
}
function dt(e, ...t) {
  e.slice().forEach((n) => {
    n(...t);
  });
}
const ha = (e) => e(), $s = Symbol(), xn = Symbol();
function Yn(e, t) {
  e instanceof Map && t instanceof Map ? t.forEach((n, s) => e.set(s, n)) : e instanceof Set && t instanceof Set && t.forEach(e.add, e);
  for (const n in t) {
    if (!t.hasOwnProperty(n))
      continue;
    const s = t[n], o = e[n];
    nt(o) && nt(s) && e.hasOwnProperty(n) && !mt(s) && !fs(s) ? e[n] = Yn(o, s) : e[n] = s;
  }
  return e;
}
const pa = process.env.NODE_ENV !== "production" ? Symbol("pinia:skipHydration") : (
  /* istanbul ignore next */
  Symbol()
);
function ga(e) {
  return !nt(e) || !e.hasOwnProperty(pa);
}
const { assign: ye } = Object;
function Us(e) {
  return !!(mt(e) && e.effect);
}
function Vs(e, t, n, s) {
  const { state: o, actions: r, getters: a } = t, i = n.state.value[e];
  let c;
  function _() {
    !i && (process.env.NODE_ENV === "production" || !s) && (n.state.value[e] = o ? o() : {});
    const m = process.env.NODE_ENV !== "production" && s ? (
      // use ref() to unwrap refs inside state TODO: check if this is still necessary
      Ds(Z(o ? o() : {}).value)
    ) : Ds(n.state.value[e]);
    return ye(m, r, Object.keys(a || {}).reduce((N, p) => (process.env.NODE_ENV !== "production" && p in m && console.warn(`[🍍]: A getter cannot have the same name as another state property. Rename one of them. Found with "${p}" in store "${e}".`), N[p] = St(W(() => {
      dn(n);
      const A = n._s.get(e);
      return a[p].call(A, A);
    })), N), {}));
  }
  return c = Xn(e, _, t, n, s, !0), c;
}
function Xn(e, t, n = {}, s, o, r) {
  let a;
  const i = ye({ actions: {} }, n);
  if (process.env.NODE_ENV !== "production" && !s._e.active)
    throw new Error("Pinia destroyed");
  const c = { deep: !0 };
  process.env.NODE_ENV !== "production" && (c.onTrigger = (w) => {
    _ ? A = w : _ == !1 && !d._hotUpdating && (Array.isArray(A) ? A.push(w) : console.error("🍍 debuggerEvents should be an array. This is most likely an internal Pinia bug."));
  });
  let _, m, N = [], p = [], A;
  const $ = s.state.value[e];
  !r && !$ && (process.env.NODE_ENV === "production" || !o) && (s.state.value[e] = {});
  const C = Z({});
  let L;
  function f(w) {
    let I;
    _ = m = !1, process.env.NODE_ENV !== "production" && (A = []), typeof w == "function" ? (w(s.state.value[e]), I = {
      type: Pt.patchFunction,
      storeId: e,
      events: A
    }) : (Yn(s.state.value[e], w), I = {
      type: Pt.patchObject,
      payload: w,
      storeId: e,
      events: A
    });
    const x = L = Symbol();
    an().then(() => {
      L === x && (_ = !0);
    }), m = !0, dt(N, I, s.state.value[e]);
  }
  const k = r ? function() {
    const { state: I } = n, x = I ? I() : {};
    this.$patch((oe) => {
      ye(oe, x);
    });
  } : (
    /* istanbul ignore next */
    process.env.NODE_ENV !== "production" ? () => {
      throw new Error(`🍍: Store "${e}" is built using the setup syntax and does not implement $reset().`);
    } : Xo
  );
  function E() {
    a.stop(), N = [], p = [], s._s.delete(e);
  }
  const v = (w, I = "") => {
    if ($s in w)
      return w[xn] = I, w;
    const x = function() {
      dn(s);
      const oe = Array.from(arguments), Ae = [], Ke = [];
      function bt(ue) {
        Ae.push(ue);
      }
      function Nt(ue) {
        Ke.push(ue);
      }
      dt(p, {
        args: oe,
        name: x[xn],
        store: d,
        after: bt,
        onError: Nt
      });
      let De;
      try {
        De = w.apply(this && this.$id === e ? this : d, oe);
      } catch (ue) {
        throw dt(Ke, ue), ue;
      }
      return De instanceof Promise ? De.then((ue) => (dt(Ae, ue), ue)).catch((ue) => (dt(Ke, ue), Promise.reject(ue))) : (dt(Ae, De), De);
    };
    return x[$s] = !0, x[xn] = I, x;
  }, D = /* @__PURE__ */ St({
    actions: {},
    getters: {},
    state: [],
    hotState: C
  }), P = {
    _p: s,
    // _s: scope,
    $id: e,
    $onAction: Fs.bind(null, p),
    $patch: f,
    $reset: k,
    $subscribe(w, I = {}) {
      const x = Fs(N, w, I.detached, () => oe()), oe = a.run(() => tt(() => s.state.value[e], (Ae) => {
        (I.flush === "sync" ? m : _) && w({
          storeId: e,
          type: Pt.direct,
          events: A
        }, Ae);
      }, ye({}, c, I)));
      return x;
    },
    $dispose: E
  }, d = sa(process.env.NODE_ENV !== "production" || process.env.NODE_ENV !== "production" && process.env.NODE_ENV !== "test" && Dt ? ye(
    {
      _hmrPayload: D,
      _customProperties: St(/* @__PURE__ */ new Set())
      // devtools custom properties
    },
    P
    // must be added later
    // setupStore
  ) : P);
  s._s.set(e, d);
  const g = (s._a && s._a.runWithContext || ha)(() => s._e.run(() => (a = oa()).run(() => t({ action: v }))));
  for (const w in g) {
    const I = g[w];
    if (mt(I) && !Us(I) || fs(I))
      process.env.NODE_ENV !== "production" && o ? Zt(C.value, w, Un(g, w)) : r || ($ && ga(I) && (mt(I) ? I.value = $[w] : Yn(I, $[w])), s.state.value[e][w] = I), process.env.NODE_ENV !== "production" && D.state.push(w);
    else if (typeof I == "function") {
      const x = process.env.NODE_ENV !== "production" && o ? I : v(I, w);
      g[w] = x, process.env.NODE_ENV !== "production" && (D.actions[w] = I), i.actions[w] = I;
    } else process.env.NODE_ENV !== "production" && Us(I) && (D.getters[w] = r ? (
      // @ts-expect-error
      n.getters[w]
    ) : I, Dt && (g._getters || // @ts-expect-error: same
    (g._getters = St([]))).push(w));
  }
  if (ye(d, g), ye(ra(d), g), Object.defineProperty(d, "$state", {
    get: () => process.env.NODE_ENV !== "production" && o ? C.value : s.state.value[e],
    set: (w) => {
      if (process.env.NODE_ENV !== "production" && o)
        throw new Error("cannot set hotState");
      f((I) => {
        ye(I, w);
      });
    }
  }), process.env.NODE_ENV !== "production" && (d._hotUpdate = St((w) => {
    d._hotUpdating = !0, w._hmrPayload.state.forEach((I) => {
      if (I in d.$state) {
        const x = w.$state[I], oe = d.$state[I];
        typeof x == "object" && nt(x) && nt(oe) ? Yo(x, oe) : w.$state[I] = oe;
      }
      Zt(d, I, Un(w.$state, I));
    }), Object.keys(d.$state).forEach((I) => {
      I in w.$state || Vn(d, I);
    }), _ = !1, m = !1, s.state.value[e] = Un(w._hmrPayload, "hotState"), m = !0, an().then(() => {
      _ = !0;
    });
    for (const I in w._hmrPayload.actions) {
      const x = w[I];
      Zt(d, I, v(x, I));
    }
    for (const I in w._hmrPayload.getters) {
      const x = w._hmrPayload.getters[I], oe = r ? (
        // special handling of options api
        W(() => (dn(s), x.call(d, d)))
      ) : x;
      Zt(d, I, oe);
    }
    Object.keys(d._hmrPayload.getters).forEach((I) => {
      I in w._hmrPayload.getters || Vn(d, I);
    }), Object.keys(d._hmrPayload.actions).forEach((I) => {
      I in w._hmrPayload.actions || Vn(d, I);
    }), d._hmrPayload = w._hmrPayload, d._getters = w._getters, d._hotUpdating = !1;
  })), process.env.NODE_ENV !== "production" && process.env.NODE_ENV !== "test" && Dt) {
    const w = {
      writable: !0,
      configurable: !0,
      // avoid warning on devtools trying to display this property
      enumerable: !1
    };
    ["_p", "_hmrPayload", "_getters", "_customProperties"].forEach((I) => {
      Object.defineProperty(d, I, ye({ value: d[I] }, w));
    });
  }
  return s._p.forEach((w) => {
    if (process.env.NODE_ENV !== "production" && process.env.NODE_ENV !== "test" && Dt) {
      const I = a.run(() => w({
        store: d,
        app: s._a,
        pinia: s,
        options: i
      }));
      Object.keys(I || {}).forEach((x) => d._customProperties.add(x)), ye(d, I);
    } else
      ye(d, a.run(() => w({
        store: d,
        app: s._a,
        pinia: s,
        options: i
      })));
  }), process.env.NODE_ENV !== "production" && d.$state && typeof d.$state == "object" && typeof d.$state.constructor == "function" && !d.$state.constructor.toString().includes("[native code]") && console.warn(`[🍍]: The "state" must be a plain object. It cannot be
	state: () => new MyClass()
Found in store "${d.$id}".`), $ && r && n.hydrate && n.hydrate(d.$state, $), _ = !0, m = !0, d;
}
/*! #__NO_SIDE_EFFECTS__ */
// @__NO_SIDE_EFFECTS__
function ya(e, t, n) {
  let s, o;
  const r = typeof t == "function";
  if (typeof e == "string")
    s = e, o = r ? n : t;
  else if (o = e, s = e.id, process.env.NODE_ENV !== "production" && typeof s != "string")
    throw new Error('[🍍]: "defineStore()" must be passed a store id as its first argument.');
  function a(i, c) {
    const _ = aa();
    if (i = // in test mode, ignore the argument provided as we can always retrieve a
    // pinia instance with getActivePinia()
    (process.env.NODE_ENV === "test" && At && At._testing ? null : i) || (_ ? Fe(ma, null) : null), i && dn(i), process.env.NODE_ENV !== "production" && !At)
      throw new Error(`[🍍]: "getActivePinia()" was called but there was no active Pinia. Are you trying to use a store before calling "app.use(pinia)"?
See https://pinia.vuejs.org/core-concepts/outside-component-usage.html for help.
This will fail in production.`);
    i = At, i._s.has(s) || (r ? Xn(s, t, o, i) : Vs(s, o, i), process.env.NODE_ENV !== "production" && (a._pinia = i));
    const m = i._s.get(s);
    if (process.env.NODE_ENV !== "production" && c) {
      const N = "__hot:" + s, p = r ? Xn(N, t, o, i, !0) : Vs(N, ye({}, o), i, !0);
      c._hotUpdate(p), delete i.state.value[N], i._s.delete(N);
    }
    if (process.env.NODE_ENV !== "production" && Dt) {
      const N = Be();
      if (N && N.proxy && // avoid adding stores that are just built for hot module replacement
      !c) {
        const p = N.proxy, A = "_pStores" in p ? p._pStores : p._pStores = {};
        A[s] = m;
      }
    }
    return m;
  }
  return a.$id = s, a;
}
function Ea(e, t, n, s) {
  if (typeof t == "function" ? e !== t || !0 : !t.has(e)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
  return n === "m" ? s : n === "a" ? s.call(e) : s ? s.value : t.get(e);
}
function va(e, t, n, s, o) {
  if (typeof t == "function" ? e !== t || !0 : !t.has(e)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
  return t.set(e, n), n;
}
var nn;
const be = "__TAURI_TO_IPC_KEY__";
function ba(e, t = !1) {
  return window.__TAURI_INTERNALS__.transformCallback(e, t);
}
async function T(e, t = {}, n) {
  return window.__TAURI_INTERNALS__.invoke(e, t, n);
}
class Na {
  get rid() {
    return Ea(this, nn, "f");
  }
  constructor(t) {
    nn.set(this, void 0), va(this, nn, t);
  }
  /**
   * Destroys and cleans up this resource from memory.
   * **You should not call any method on this object anymore and should drop any reference to it.**
   */
  async close() {
    return T("plugin:resources|close", {
      rid: this.rid
    });
  }
}
nn = /* @__PURE__ */ new WeakMap();
const _e = {
  info: (e, t, ...n) => {
    T("frontend_log", {
      level: "info",
      message: e,
      data: t ? JSON.stringify(t, null, 2) : null
    }).catch(() => {
    });
  },
  error: (e, t) => {
    T("frontend_log", {
      level: "error",
      message: e,
      data: t ? JSON.stringify(t, null, 2) : null
    }).catch(() => {
    });
  },
  warn: (e, t) => {
    T("frontend_log", {
      level: "warn",
      message: e,
      data: t ? JSON.stringify(t, null, 2) : null
    }).catch(() => {
    });
  },
  // 调试日志 - 只在开发模式或调试模式下输出
  debug: (e, t) => {
  }
};
var pe;
(function(e) {
  e.WINDOW_RESIZED = "tauri://resize", e.WINDOW_MOVED = "tauri://move", e.WINDOW_CLOSE_REQUESTED = "tauri://close-requested", e.WINDOW_DESTROYED = "tauri://destroyed", e.WINDOW_FOCUS = "tauri://focus", e.WINDOW_BLUR = "tauri://blur", e.WINDOW_SCALE_FACTOR_CHANGED = "tauri://scale-change", e.WINDOW_THEME_CHANGED = "tauri://theme-changed", e.WINDOW_CREATED = "tauri://window-created", e.WEBVIEW_CREATED = "tauri://webview-created", e.DRAG_ENTER = "tauri://drag-enter", e.DRAG_OVER = "tauri://drag-over", e.DRAG_DROP = "tauri://drag-drop", e.DRAG_LEAVE = "tauri://drag-leave";
})(pe || (pe = {}));
async function Jo(e, t) {
  await T("plugin:event|unlisten", {
    event: e,
    eventId: t
  });
}
async function ms(e, t, n) {
  var s;
  const o = typeof n?.target == "string" ? { kind: "AnyLabel", label: n.target } : (s = n?.target) !== null && s !== void 0 ? s : { kind: "Any" };
  return T("plugin:event|listen", {
    event: e,
    target: o,
    handler: ba(t)
  }).then((r) => async () => Jo(e, r));
}
async function ka(e, t, n) {
  return ms(e, (s) => {
    Jo(e, s.id), t(s);
  }, n);
}
async function Ca(e, t) {
  await T("plugin:event|emit", {
    event: e,
    payload: t
  });
}
async function wa(e, t, n) {
  await T("plugin:event|emit_to", {
    target: typeof e == "string" ? { kind: "AnyLabel", label: e } : e,
    event: t,
    payload: n
  });
}
const Oa = (e, t, n, s) => ({
  id: e.id,
  source: t,
  packagePath: n,
  installedAt: s,
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
}), We = (e) => typeof e == "object" && e !== null, La = (e) => We(e) && "manifest" in e && We(e.manifest) ? {
  manifest: e.manifest,
  packagePath: typeof e.packagePath == "string" ? e.packagePath : void 0,
  installedAt: typeof e.installedAt == "string" ? e.installedAt : void 0
} : { manifest: e }, Ta = (e) => typeof e == "string" && ["capture", "automation", "search", "sync", "editor", "appearance"].includes(e), Ia = (e) => {
  if (!We(e) || e.schemaVersion !== 1 || typeof e.id != "string" || !e.id.trim() || typeof e.version != "string" || !e.version.trim() || e.kind !== "builtin" && e.kind !== "local" || !We(e.name) || typeof e.name.i18nKey != "string" || typeof e.name.fallback != "string" || !We(e.description) || typeof e.description.i18nKey != "string" || typeof e.description.fallback != "string" || !Ta(e.category) || typeof e.enabledByDefault != "boolean") return null;
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
    capabilities: We(e.capabilities) ? e.capabilities : void 0,
    resources: We(e.resources) ? e.resources : void 0,
    entry: We(e.entry) ? e.entry : void 0,
    permissions: Array.isArray(e.permissions) ? e.permissions.filter((s) => typeof s == "string") : void 0,
    dependencies: Array.isArray(e.dependencies) ? e.dependencies.filter((s) => typeof s == "string") : void 0,
    resourceFor: typeof e.resourceFor == "string" ? e.resourceFor : void 0,
    compatibleAppVersion: typeof e.compatibleAppVersion == "string" ? e.compatibleAppVersion : void 0,
    minAppVersion: typeof e.minAppVersion == "string" ? e.minAppVersion : void 0,
    repository: typeof e.repository == "string" ? e.repository : void 0,
    releaseUrl: typeof e.releaseUrl == "string" ? e.releaseUrl : void 0
  };
}, Sa = (e) => e.map((t) => {
  const { manifest: n, packagePath: s, installedAt: o } = La(t), r = Ia(n);
  if (!r) return null;
  const a = {
    manifest: r,
    packagePath: s ?? ""
  };
  return o && (a.installedAt = o), a;
}).filter((t) => t !== null), Aa = (e = []) => {
  const t = [], n = Sa(e).map((r) => Oa(
    r.manifest,
    "local",
    r.packagePath || void 0,
    r.installedAt
  )).sort(Da), s = [
    ...t,
    ...n
  ], o = /* @__PURE__ */ new Map();
  for (const r of s)
    o.has(r.id) || o.set(r.id, r);
  return Array.from(o.values());
}, xs = (e) => {
  const t = e.installedAt ? Date.parse(e.installedAt) : NaN;
  return Number.isFinite(t) ? t : 0;
}, Da = (e, t) => {
  const n = xs(t) - xs(e);
  return n !== 0 ? n : String(e.id).localeCompare(String(t.id));
}, Zo = Aa();
Zo.filter((e) => e.source === "builtin");
const qo = Zo;
qo.map((e) => e.id);
qo.reduce((e, t) => (e[t.id] = t.enabledByDefault, e), {});
var Pa = {
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
function Ma() {
  return "icon-" + ((1 + Math.random()) * 4294967296 | 0).toString(16).substring(1);
}
function Ra(e, t, n) {
  var s = typeof t.fill == "string" ? [t.fill] : t.fill || [], o = [], r = t.theme || n.theme;
  switch (r) {
    case "outline":
      o.push(typeof s[0] == "string" ? s[0] : "currentColor"), o.push("none"), o.push(typeof s[0] == "string" ? s[0] : "currentColor"), o.push("none");
      break;
    case "filled":
      o.push(typeof s[0] == "string" ? s[0] : "currentColor"), o.push(typeof s[0] == "string" ? s[0] : "currentColor"), o.push("#FFF"), o.push("#FFF");
      break;
    case "two-tone":
      o.push(typeof s[0] == "string" ? s[0] : "currentColor"), o.push(typeof s[1] == "string" ? s[1] : n.colors.twoTone.twoTone), o.push(typeof s[0] == "string" ? s[0] : "currentColor"), o.push(typeof s[1] == "string" ? s[1] : n.colors.twoTone.twoTone);
      break;
    case "multi-color":
      o.push(typeof s[0] == "string" ? s[0] : "currentColor"), o.push(typeof s[1] == "string" ? s[1] : n.colors.multiColor.outFillColor), o.push(typeof s[2] == "string" ? s[2] : n.colors.multiColor.innerStrokeColor), o.push(typeof s[3] == "string" ? s[3] : n.colors.multiColor.innerFillColor);
      break;
  }
  return {
    size: t.size || n.size,
    strokeWidth: t.strokeWidth || n.strokeWidth,
    strokeLinecap: t.strokeLinecap || n.strokeLinecap,
    strokeLinejoin: t.strokeLinejoin || n.strokeLinejoin,
    colors: o,
    id: e
  };
}
var Fa = Symbol("icon-context");
function Ve(e, t, n) {
  var s = {
    name: "icon-" + e,
    props: ["size", "strokeWidth", "strokeLinecap", "strokeLinejoin", "theme", "fill", "spin"],
    setup: function(r) {
      var a = Ma(), i = Fe(Fa, Pa);
      return function() {
        var c = r.size, _ = r.strokeWidth, m = r.strokeLinecap, N = r.strokeLinejoin, p = r.theme, A = r.fill, $ = r.spin, C = Ra(a, {
          size: c,
          strokeWidth: _,
          strokeLinecap: m,
          strokeLinejoin: N,
          theme: p,
          fill: A
        }, i), L = [i.prefix + "-icon"];
        return L.push(i.prefix + "-icon-" + e), t && i.rtl && L.push(i.prefix + "-icon-rtl"), $ && L.push(i.prefix + "-icon-spin"), R("span", {
          class: L.join(" ")
        }, [n(C)]);
      };
    }
  };
  return s;
}
const $a = Ve("close", !1, function(e) {
  return R("svg", {
    width: e.size,
    height: e.size,
    viewBox: "0 0 48 48",
    fill: "none"
  }, [R("path", {
    d: "M8 8L40 40",
    stroke: e.colors[0],
    "stroke-width": e.strokeWidth,
    "stroke-linecap": e.strokeLinecap,
    "stroke-linejoin": e.strokeLinejoin
  }, null), R("path", {
    d: "M8 40L40 8",
    stroke: e.colors[0],
    "stroke-width": e.strokeWidth,
    "stroke-linecap": e.strokeLinecap,
    "stroke-linejoin": e.strokeLinejoin
  }, null)]);
}), Ua = Ve("computer", !1, function(e) {
  return R("svg", {
    width: e.size,
    height: e.size,
    viewBox: "0 0 48 48",
    fill: "none"
  }, [R("rect", {
    x: "19",
    y: "32",
    width: "10",
    height: "9",
    stroke: e.colors[0],
    "stroke-width": e.strokeWidth,
    "stroke-linecap": e.strokeLinecap,
    "stroke-linejoin": e.strokeLinejoin
  }, null), R("rect", {
    x: "5",
    y: "8",
    width: "38",
    height: "24",
    rx: "2",
    fill: e.colors[1],
    stroke: e.colors[0],
    "stroke-width": e.strokeWidth
  }, null), R("path", {
    d: "M22 27H26",
    stroke: e.colors[2],
    "stroke-width": e.strokeWidth,
    "stroke-linecap": e.strokeLinecap,
    "stroke-linejoin": e.strokeLinejoin
  }, null), R("path", {
    d: "M14 41L34 41",
    stroke: e.colors[0],
    "stroke-width": e.strokeWidth,
    "stroke-linecap": e.strokeLinecap,
    "stroke-linejoin": e.strokeLinejoin
  }, null)]);
}), Va = Ve("local", !1, function(e) {
  return R("svg", {
    width: e.size,
    height: e.size,
    viewBox: "0 0 48 48",
    fill: "none"
  }, [R("path", {
    d: "M9.85786 32.7574C6.23858 33.8432 4 35.3432 4 37C4 40.3137 12.9543 43 24 43C35.0457 43 44 40.3137 44 37C44 35.3432 41.7614 33.8432 38.1421 32.7574",
    stroke: e.colors[0],
    "stroke-width": e.strokeWidth,
    "stroke-linecap": e.strokeLinecap,
    "stroke-linejoin": e.strokeLinejoin
  }, null), R("path", {
    d: "M24 35C24 35 37 26.504 37 16.6818C37 9.67784 31.1797 4 24 4C16.8203 4 11 9.67784 11 16.6818C11 26.504 24 35 24 35Z",
    fill: e.colors[1],
    stroke: e.colors[0],
    "stroke-width": e.strokeWidth,
    "stroke-linejoin": e.strokeLinejoin
  }, null), R("path", {
    d: "M24 22C26.7614 22 29 19.7614 29 17C29 14.2386 26.7614 12 24 12C21.2386 12 19 14.2386 19 17C19 19.7614 21.2386 22 24 22Z",
    fill: e.colors[3],
    stroke: e.colors[2],
    "stroke-width": e.strokeWidth,
    "stroke-linejoin": e.strokeLinejoin
  }, null)]);
}), Wn = Ve("moon", !0, function(e) {
  return R("svg", {
    width: e.size,
    height: e.size,
    viewBox: "0 0 48 48",
    fill: "none"
  }, [R("path", {
    d: "M28.0527 4.41085C22.5828 5.83695 18.5455 10.8106 18.5455 16.7273C18.5455 23.7564 24.2436 29.4545 31.2727 29.4545C37.1894 29.4545 42.1631 25.4172 43.5891 19.9473C43.8585 21.256 44 22.6115 44 24C44 35.0457 35.0457 44 24 44C12.9543 44 4 35.0457 4 24C4 12.9543 12.9543 4 24 4C25.3885 4 26.744 4.14149 28.0527 4.41085Z",
    fill: e.colors[1],
    stroke: e.colors[0],
    "stroke-width": e.strokeWidth,
    "stroke-linejoin": e.strokeLinejoin
  }, null)]);
}), Ws = Ve("refresh", !0, function(e) {
  return R("svg", {
    width: e.size,
    height: e.size,
    viewBox: "0 0 48 48",
    fill: "none"
  }, [R("path", {
    d: "M42 8V24",
    stroke: e.colors[0],
    "stroke-width": e.strokeWidth,
    "stroke-linecap": e.strokeLinecap,
    "stroke-linejoin": e.strokeLinejoin
  }, null), R("path", {
    d: "M6 24L6 40",
    stroke: e.colors[0],
    "stroke-width": e.strokeWidth,
    "stroke-linecap": e.strokeLinecap,
    "stroke-linejoin": e.strokeLinejoin
  }, null), R("path", {
    d: "M42 24C42 14.0589 33.9411 6 24 6C18.9145 6 14.3216 8.10896 11.0481 11.5M6 24C6 33.9411 14.0589 42 24 42C28.8556 42 33.2622 40.0774 36.5 36.9519",
    stroke: e.colors[0],
    "stroke-width": e.strokeWidth,
    "stroke-linecap": e.strokeLinecap,
    "stroke-linejoin": e.strokeLinejoin
  }, null)]);
}), js = Ve("sun-one", !1, function(e) {
  return R("svg", {
    width: e.size,
    height: e.size,
    viewBox: "0 0 48 48",
    fill: "none"
  }, [R("path", {
    d: "M24 37C31.1797 37 37 31.1797 37 24C37 16.8203 31.1797 11 24 11C16.8203 11 11 16.8203 11 24C11 31.1797 16.8203 37 24 37Z",
    fill: e.colors[1],
    stroke: e.colors[0],
    "stroke-width": e.strokeWidth,
    "stroke-linejoin": e.strokeLinejoin
  }, null), R("path", {
    d: "M24 6C25.3807 6 26.5 4.88071 26.5 3.5C26.5 2.11929 25.3807 1 24 1C22.6193 1 21.5 2.11929 21.5 3.5C21.5 4.88071 22.6193 6 24 6Z",
    fill: e.colors[0]
  }, null), R("path", {
    d: "M38.5 12C39.8807 12 41 10.8807 41 9.5C41 8.11929 39.8807 7 38.5 7C37.1193 7 36 8.11929 36 9.5C36 10.8807 37.1193 12 38.5 12Z",
    fill: e.colors[0]
  }, null), R("path", {
    d: "M44.5 26.5C45.8807 26.5 47 25.3807 47 24C47 22.6193 45.8807 21.5 44.5 21.5C43.1193 21.5 42 22.6193 42 24C42 25.3807 43.1193 26.5 44.5 26.5Z",
    fill: e.colors[0]
  }, null), R("path", {
    d: "M38.5 41C39.8807 41 41 39.8807 41 38.5C41 37.1193 39.8807 36 38.5 36C37.1193 36 36 37.1193 36 38.5C36 39.8807 37.1193 41 38.5 41Z",
    fill: e.colors[0]
  }, null), R("path", {
    d: "M24 47C25.3807 47 26.5 45.8807 26.5 44.5C26.5 43.1193 25.3807 42 24 42C22.6193 42 21.5 43.1193 21.5 44.5C21.5 45.8807 22.6193 47 24 47Z",
    fill: e.colors[0]
  }, null), R("path", {
    d: "M9.5 41C10.8807 41 12 39.8807 12 38.5C12 37.1193 10.8807 36 9.5 36C8.11929 36 7 37.1193 7 38.5C7 39.8807 8.11929 41 9.5 41Z",
    fill: e.colors[0]
  }, null), R("path", {
    d: "M3.5 26.5C4.88071 26.5 6 25.3807 6 24C6 22.6193 4.88071 21.5 3.5 21.5C2.11929 21.5 1 22.6193 1 24C1 25.3807 2.11929 26.5 3.5 26.5Z",
    fill: e.colors[0]
  }, null), R("path", {
    d: "M9.5 12C10.8807 12 12 10.8807 12 9.5C12 8.11929 10.8807 7 9.5 7C8.11929 7 7 8.11929 7 9.5C7 10.8807 8.11929 12 9.5 12Z",
    fill: e.colors[0]
  }, null)]);
}), Bs = Ve("sunrise", !0, function(e) {
  return R("svg", {
    width: e.size,
    height: e.size,
    viewBox: "0 0 48 48",
    fill: "none"
  }, [R("path", {
    d: "M4 24H7",
    stroke: e.colors[0],
    "stroke-width": e.strokeWidth,
    "stroke-linecap": e.strokeLinecap,
    "stroke-linejoin": e.strokeLinejoin
  }, null), R("path", {
    d: "M10 10L12 12",
    stroke: e.colors[0],
    "stroke-width": e.strokeWidth,
    "stroke-linecap": e.strokeLinecap,
    "stroke-linejoin": e.strokeLinejoin
  }, null), R("path", {
    d: "M24 4V7",
    stroke: e.colors[0],
    "stroke-width": e.strokeWidth,
    "stroke-linecap": e.strokeLinecap,
    "stroke-linejoin": e.strokeLinejoin
  }, null), R("path", {
    d: "M14 24C14 18.4776 18.4776 14 24 14C29.5224 14 34 18.4776 34 24C34 27.3674 32.3357 30.3458 29.785 32.1578",
    stroke: e.colors[0],
    "stroke-width": e.strokeWidth,
    "stroke-linecap": e.strokeLinecap,
    "stroke-linejoin": e.strokeLinejoin
  }, null), R("path", {
    d: "M38 10L36 12",
    stroke: e.colors[0],
    "stroke-width": e.strokeWidth,
    "stroke-linecap": e.strokeLinecap,
    "stroke-linejoin": e.strokeLinejoin
  }, null), R("path", {
    d: "M44 24L41 24",
    stroke: e.colors[0],
    "stroke-width": e.strokeWidth,
    "stroke-linecap": e.strokeLinecap,
    "stroke-linejoin": e.strokeLinejoin
  }, null), R("path", {
    d: "M37.9814 37.982L36.3614 36.362",
    stroke: e.colors[0],
    "stroke-width": e.strokeWidth,
    "stroke-linecap": e.strokeLinecap,
    "stroke-linejoin": e.strokeLinejoin
  }, null), R("path", {
    d: "M23.4999 28C20.4999 28 14 28.2 14 31C14 33.8 18.6058 33.7908 20.9998 34C23 34.1747 26.4624 35.6879 25.9999 38C24.9998 43 8.99982 42 4.99994 42",
    stroke: e.colors[0],
    "stroke-width": e.strokeWidth,
    "stroke-linecap": e.strokeLinecap,
    "stroke-linejoin": e.strokeLinejoin
  }, null)]);
}), xa = Ve("sunset", !1, function(e) {
  return R("svg", {
    width: e.size,
    height: e.size,
    viewBox: "0 0 48 48",
    fill: "none"
  }, [R("path", {
    d: "M19 8L33 34H5L19 8Z",
    fill: e.colors[1],
    stroke: e.colors[0],
    "stroke-width": e.strokeWidth,
    "stroke-linejoin": e.strokeLinejoin
  }, null), R("path", {
    d: "M29 26L34 20L43 34H32",
    stroke: e.colors[0],
    "stroke-width": e.strokeWidth,
    "stroke-linecap": e.strokeLinecap,
    "stroke-linejoin": e.strokeLinejoin
  }, null), R("path", {
    d: "M10 41L38 41",
    stroke: e.colors[0],
    "stroke-width": e.strokeWidth,
    "stroke-linecap": e.strokeLinecap,
    "stroke-linejoin": e.strokeLinejoin
  }, null), R("circle", {
    cx: "38",
    cy: "10",
    r: "3",
    fill: e.colors[1],
    stroke: e.colors[0],
    "stroke-width": e.strokeWidth
  }, null)]);
}), zs = Ve("time", !0, function(e) {
  return R("svg", {
    width: e.size,
    height: e.size,
    viewBox: "0 0 48 48",
    fill: "none"
  }, [R("path", {
    d: "M24 44C35.0457 44 44 35.0457 44 24C44 12.9543 35.0457 4 24 4C12.9543 4 4 12.9543 4 24C4 35.0457 12.9543 44 24 44Z",
    fill: e.colors[1],
    stroke: e.colors[0],
    "stroke-width": e.strokeWidth,
    "stroke-linejoin": e.strokeLinejoin
  }, null), R("path", {
    d: "M24.0084 12.0001L24.0072 24.0089L32.4866 32.4883",
    stroke: e.colors[2],
    "stroke-width": e.strokeWidth,
    "stroke-linecap": e.strokeLinecap,
    "stroke-linejoin": e.strokeLinejoin
  }, null)]);
}), Wa = /* @__PURE__ */ ya("configuration", {
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
        this.dbPath = await T("get_db_path") || "";
      } catch (e) {
        _e.error("获取数据库路径失败:", e);
      }
      try {
        const [
          e,
          t,
          n,
          s,
          o,
          r
        ] = await T("get_shortcuts");
        this.searchHotkey = e, this.configHotkey = t, this.translateHotkey = n, this.selectionTranslateHotkey = s || "", this.screenshotHotkey = o || "", this.darkModeHotkey = r || "";
      } catch (e) {
        _e.error("获取快捷键配置失败:", e);
      }
      try {
        this.autoUpdateCheck = await T("get_auto_update_check");
      } catch (e) {
        _e.error("获取自动检查失败:", e);
      }
      try {
        this.autoHideOnBlur = await T("get_auto_hide_on_blur");
      } catch (e) {
        _e.error("获取自动失焦隐藏设置:", e);
      }
      try {
        const e = await T("get_language");
        e && (e === "zh-CN" || e === "en-US") && (this.language = e);
      } catch (e) {
        _e.error("获取语言设置失败:", e);
      }
    },
    // 更新主题并立即应用
    updateTheme(e) {
      this.theme = e, this.applyTheme();
    },
    // 应用主题到DOM，并同步 systemPrefersDark 供组件响应式使用
    applyTheme() {
      const e = document.documentElement, t = window.matchMedia("(prefers-color-scheme: dark)").matches;
      _e.debug(`[主题][Store] 应用主题到 DOM：theme=${this.theme}, prefersDark=${t}`), this.theme === "auto" && (this.systemPrefersDark = t), this.theme === "dark" || this.theme === "auto" && t ? e.classList.add("dark") : e.classList.remove("dark");
    },
    // 同步系统主题样式（仅在 auto 模式下生效，不修改 store.theme）
    // 用于响应 Windows 系统主题变化
    syncSystemThemeStyle(e) {
      _e.debug(`[主题][Store] 同步系统主题样式：isDark=${e}, store.theme=${this.theme}`);
      let t = this.theme;
      try {
        const n = localStorage.getItem("configuration");
        if (n) {
          const s = JSON.parse(n);
          s.theme && (t = s.theme, this.theme = t);
        }
      } catch (n) {
        _e.error("从 localStorage 同步主题失败:", n);
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
class Qo {
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
    return new Mt(this.width * t, this.height * t);
  }
  [be]() {
    return {
      width: this.width,
      height: this.height
    };
  }
  toJSON() {
    return this[be]();
  }
}
class Mt {
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
    return new Qo(this.width / t, this.height / t);
  }
  [be]() {
    return {
      width: this.width,
      height: this.height
    };
  }
  toJSON() {
    return this[be]();
  }
}
class ft {
  constructor(t) {
    this.size = t;
  }
  toLogical(t) {
    return this.size instanceof Qo ? this.size : this.size.toLogical(t);
  }
  toPhysical(t) {
    return this.size instanceof Mt ? this.size : this.size.toPhysical(t);
  }
  [be]() {
    return {
      [`${this.size.type}`]: {
        width: this.size.width,
        height: this.size.height
      }
    };
  }
  toJSON() {
    return this[be]();
  }
}
class er {
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
    return new je(this.x * t, this.y * t);
  }
  [be]() {
    return {
      x: this.x,
      y: this.y
    };
  }
  toJSON() {
    return this[be]();
  }
}
class je {
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
    return new er(this.x / t, this.y / t);
  }
  [be]() {
    return {
      x: this.x,
      y: this.y
    };
  }
  toJSON() {
    return this[be]();
  }
}
class qt {
  constructor(t) {
    this.position = t;
  }
  toLogical(t) {
    return this.position instanceof er ? this.position : this.position.toLogical(t);
  }
  toPhysical(t) {
    return this.position instanceof je ? this.position : this.position.toPhysical(t);
  }
  [be]() {
    return {
      [`${this.position.type}`]: {
        x: this.position.x,
        y: this.position.y
      }
    };
  }
  toJSON() {
    return this[be]();
  }
}
class Rt extends Na {
  /**
   * Creates an Image from a resource ID. For internal use only.
   *
   * @ignore
   */
  constructor(t) {
    super(t);
  }
  /** Creates a new Image using RGBA data, in row-major order from top to bottom, and with specified width and height. */
  static async new(t, n, s) {
    return T("plugin:image|new", {
      rgba: fn(t),
      width: n,
      height: s
    }).then((o) => new Rt(o));
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
    return T("plugin:image|from_bytes", {
      bytes: fn(t)
    }).then((n) => new Rt(n));
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
    return T("plugin:image|from_path", { path: t }).then((n) => new Rt(n));
  }
  /** Returns the RGBA data for this image, in row-major order from top to bottom.  */
  async rgba() {
    return T("plugin:image|rgba", {
      rid: this.rid
    }).then((t) => new Uint8Array(t));
  }
  /** Returns the size of this image.  */
  async size() {
    return T("plugin:image|size", { rid: this.rid });
  }
}
function fn(e) {
  return e == null ? null : typeof e == "string" ? e : e instanceof Rt ? e.rid : e;
}
var Jn;
(function(e) {
  e[e.Critical = 1] = "Critical", e[e.Informational = 2] = "Informational";
})(Jn || (Jn = {}));
class ja {
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
var Hs;
(function(e) {
  e.None = "none", e.Normal = "normal", e.Indeterminate = "indeterminate", e.Paused = "paused", e.Error = "error";
})(Hs || (Hs = {}));
function Zn() {
  return new tr(window.__TAURI_INTERNALS__.metadata.currentWindow.label, {
    // @ts-expect-error `skip` is not defined in the public API but it is handled by the constructor
    skip: !0
  });
}
async function jn() {
  return T("plugin:window|get_all_windows").then((e) => e.map((t) => new tr(t, {
    // @ts-expect-error `skip` is not defined in the public API but it is handled by the constructor
    skip: !0
  })));
}
const Bn = ["tauri://created", "tauri://error"];
class tr {
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
    var s;
    this.label = t, this.listeners = /* @__PURE__ */ Object.create(null), n?.skip || T("plugin:window|create", {
      options: {
        ...n,
        parent: typeof n.parent == "string" ? n.parent : (s = n.parent) === null || s === void 0 ? void 0 : s.label,
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
    var n;
    return (n = (await jn()).find((s) => s.label === t)) !== null && n !== void 0 ? n : null;
  }
  /**
   * Get an instance of `Window` for the current window.
   */
  static getCurrent() {
    return Zn();
  }
  /**
   * Gets a list of instances of `Window` for all available windows.
   */
  static async getAll() {
    return jn();
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
    for (const t of await jn())
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
      const s = this.listeners[t];
      s.splice(s.indexOf(n), 1);
    } : ms(t, n, {
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
      const s = this.listeners[t];
      s.splice(s.indexOf(n), 1);
    } : ka(t, n, {
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
    if (Bn.includes(t)) {
      for (const s of this.listeners[t] || [])
        s({
          event: t,
          id: -1,
          payload: n
        });
      return;
    }
    return Ca(t, n);
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
  async emitTo(t, n, s) {
    if (Bn.includes(n)) {
      for (const o of this.listeners[n] || [])
        o({
          event: n,
          id: -1,
          payload: s
        });
      return;
    }
    return wa(t, n, s);
  }
  /** @ignore */
  _handleTauriEvent(t, n) {
    return Bn.includes(t) ? (t in this.listeners ? this.listeners[t].push(n) : this.listeners[t] = [n], !0) : !1;
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
    return T("plugin:window|scale_factor", {
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
    return T("plugin:window|inner_position", {
      label: this.label
    }).then((t) => new je(t));
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
    return T("plugin:window|outer_position", {
      label: this.label
    }).then((t) => new je(t));
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
    return T("plugin:window|inner_size", {
      label: this.label
    }).then((t) => new Mt(t));
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
    return T("plugin:window|outer_size", {
      label: this.label
    }).then((t) => new Mt(t));
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
    return T("plugin:window|is_fullscreen", {
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
    return T("plugin:window|is_minimized", {
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
    return T("plugin:window|is_maximized", {
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
    return T("plugin:window|is_focused", {
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
    return T("plugin:window|is_decorated", {
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
    return T("plugin:window|is_resizable", {
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
    return T("plugin:window|is_maximizable", {
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
    return T("plugin:window|is_minimizable", {
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
    return T("plugin:window|is_closable", {
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
    return T("plugin:window|is_visible", {
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
    return T("plugin:window|title", {
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
    return T("plugin:window|theme", {
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
    return T("plugin:window|is_always_on_top", {
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
    return T("plugin:window|center", {
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
    return t && (t === Jn.Critical ? n = { type: "Critical" } : n = { type: "Informational" }), T("plugin:window|request_user_attention", {
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
    return T("plugin:window|set_resizable", {
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
    return T("plugin:window|set_enabled", {
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
    return T("plugin:window|is_enabled", {
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
    return T("plugin:window|set_maximizable", {
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
    return T("plugin:window|set_minimizable", {
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
    return T("plugin:window|set_closable", {
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
    return T("plugin:window|set_title", {
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
    return T("plugin:window|maximize", {
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
    return T("plugin:window|unmaximize", {
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
    return T("plugin:window|toggle_maximize", {
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
    return T("plugin:window|minimize", {
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
    return T("plugin:window|unminimize", {
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
    return T("plugin:window|show", {
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
    return T("plugin:window|hide", {
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
    return T("plugin:window|close", {
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
    return T("plugin:window|destroy", {
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
    return T("plugin:window|set_decorations", {
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
    return T("plugin:window|set_shadow", {
      label: this.label,
      value: t
    });
  }
  /**
   * Set window effects.
   */
  async setEffects(t) {
    return T("plugin:window|set_effects", {
      label: this.label,
      value: t
    });
  }
  /**
   * Clear any applied effects if possible.
   */
  async clearEffects() {
    return T("plugin:window|set_effects", {
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
    return T("plugin:window|set_always_on_top", {
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
    return T("plugin:window|set_always_on_bottom", {
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
    return T("plugin:window|set_content_protected", {
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
    return T("plugin:window|set_size", {
      label: this.label,
      value: t instanceof ft ? t : new ft(t)
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
    return T("plugin:window|set_min_size", {
      label: this.label,
      value: t instanceof ft ? t : t ? new ft(t) : null
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
    return T("plugin:window|set_max_size", {
      label: this.label,
      value: t instanceof ft ? t : t ? new ft(t) : null
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
    function n(s) {
      return s ? { Logical: s } : null;
    }
    return T("plugin:window|set_size_constraints", {
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
    return T("plugin:window|set_position", {
      label: this.label,
      value: t instanceof qt ? t : new qt(t)
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
    return T("plugin:window|set_fullscreen", {
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
    return T("plugin:window|set_focus", {
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
    return T("plugin:window|set_icon", {
      label: this.label,
      value: fn(t)
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
    return T("plugin:window|set_skip_taskbar", {
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
    return T("plugin:window|set_cursor_grab", {
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
    return T("plugin:window|set_cursor_visible", {
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
    return T("plugin:window|set_cursor_icon", {
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
    return T("plugin:window|set_background_color", { color: t });
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
    return T("plugin:window|set_cursor_position", {
      label: this.label,
      value: t instanceof qt ? t : new qt(t)
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
    return T("plugin:window|set_ignore_cursor_events", {
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
    return T("plugin:window|start_dragging", {
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
    return T("plugin:window|start_resize_dragging", {
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
    return T("plugin:window|set_badge_count", {
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
    return T("plugin:window|set_badge_label", {
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
    return T("plugin:window|set_overlay_icon", {
      label: this.label,
      value: t ? fn(t) : void 0
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
    return T("plugin:window|set_progress_bar", {
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
    return T("plugin:window|set_visible_on_all_workspaces", {
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
    return T("plugin:window|set_title_bar_style", {
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
    return T("plugin:window|set_theme", {
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
    return this.listen(pe.WINDOW_RESIZED, (n) => {
      n.payload = new Mt(n.payload), t(n);
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
    return this.listen(pe.WINDOW_MOVED, (n) => {
      n.payload = new je(n.payload), t(n);
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
    return this.listen(pe.WINDOW_CLOSE_REQUESTED, async (n) => {
      const s = new ja(n);
      await t(s), s.isPreventDefault() || await this.destroy();
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
    const n = await this.listen(pe.DRAG_ENTER, (a) => {
      t({
        ...a,
        payload: {
          type: "enter",
          paths: a.payload.paths,
          position: new je(a.payload.position)
        }
      });
    }), s = await this.listen(pe.DRAG_OVER, (a) => {
      t({
        ...a,
        payload: {
          type: "over",
          position: new je(a.payload.position)
        }
      });
    }), o = await this.listen(pe.DRAG_DROP, (a) => {
      t({
        ...a,
        payload: {
          type: "drop",
          paths: a.payload.paths,
          position: new je(a.payload.position)
        }
      });
    }), r = await this.listen(pe.DRAG_LEAVE, (a) => {
      t({ ...a, payload: { type: "leave" } });
    });
    return () => {
      n(), o(), s(), r();
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
    const n = await this.listen(pe.WINDOW_FOCUS, (o) => {
      t({ ...o, payload: !0 });
    }), s = await this.listen(pe.WINDOW_BLUR, (o) => {
      t({ ...o, payload: !1 });
    });
    return () => {
      n(), s();
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
    return this.listen(pe.WINDOW_SCALE_FACTOR_CHANGED, t);
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
    return this.listen(pe.WINDOW_THEME_CHANGED, t);
  }
}
var Gs;
(function(e) {
  e.Disabled = "disabled", e.Throttle = "throttle", e.Suspend = "suspend";
})(Gs || (Gs = {}));
var Ks;
(function(e) {
  e.AppearanceBased = "appearanceBased", e.Light = "light", e.Dark = "dark", e.MediumLight = "mediumLight", e.UltraDark = "ultraDark", e.Titlebar = "titlebar", e.Selection = "selection", e.Menu = "menu", e.Popover = "popover", e.Sidebar = "sidebar", e.HeaderView = "headerView", e.Sheet = "sheet", e.WindowBackground = "windowBackground", e.HudWindow = "hudWindow", e.FullScreenUI = "fullScreenUI", e.Tooltip = "tooltip", e.ContentBackground = "contentBackground", e.UnderWindowBackground = "underWindowBackground", e.UnderPageBackground = "underPageBackground", e.Mica = "mica", e.Blur = "blur", e.Acrylic = "acrylic", e.Tabbed = "tabbed", e.TabbedDark = "tabbedDark", e.TabbedLight = "tabbedLight";
})(Ks || (Ks = {}));
var Ys;
(function(e) {
  e.FollowsWindowActiveState = "followsWindowActiveState", e.Active = "active", e.Inactive = "inactive";
})(Ys || (Ys = {}));
/*!
  * shared v11.2.2
  * (c) 2025 kazuya kawaguchi
  * Released under the MIT License.
  */
function Se(e, t) {
  typeof console < "u" && (console.warn("[intlify] " + e), t && console.warn(t.stack));
}
const Xs = {};
function Ba(e) {
  Xs[e] || (Xs[e] = !0, Se(e));
}
const Ue = typeof window < "u";
let ge, st;
if (process.env.NODE_ENV !== "production") {
  const e = Ue && window.performance;
  e && e.mark && e.measure && e.clearMarks && // @ts-ignore browser compat
  e.clearMeasures && (ge = (t) => {
    e.mark(t);
  }, st = (t, n, s) => {
    e.measure(t, n, s), e.clearMarks(n), e.clearMarks(s);
  });
}
const za = /\{([0-9a-zA-Z]+)\}/g;
function bn(e, ...t) {
  return t.length === 1 && G(t[0]) && (t = t[0]), (!t || !t.hasOwnProperty) && (t = {}), e.replace(za, (n, s) => t.hasOwnProperty(s) ? t[s] : "");
}
const xe = (e, t = !1) => t ? Symbol.for(e) : Symbol(e), Ha = (e, t, n) => Ga({ l: e, k: t, s: n }), Ga = (e) => JSON.stringify(e).replace(/\u2028/g, "\\u2028").replace(/\u2029/g, "\\u2029").replace(/\u0027/g, "\\u0027"), ae = (e) => typeof e == "number" && isFinite(e), Ka = (e) => hs(e) === "[object Date]", _n = (e) => hs(e) === "[object RegExp]", Nn = (e) => H(e) && Object.keys(e).length === 0, ie = Object.assign, Ya = Object.create, X = (e = null) => Ya(e);
let Js;
const Qe = () => Js || (Js = typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : typeof window < "u" ? window : typeof global < "u" ? global : X());
function Zs(e) {
  return e.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;").replace(/'/g, "&apos;").replace(/\//g, "&#x2F;").replace(/=/g, "&#x3D;");
}
function qs(e) {
  return e.replace(/&(?![a-zA-Z0-9#]{2,6};)/g, "&amp;").replace(/"/g, "&quot;").replace(/'/g, "&apos;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
}
function Xa(e) {
  return e = e.replace(/(\w+)\s*=\s*"([^"]*)"/g, (s, o, r) => `${o}="${qs(r)}"`), e = e.replace(/(\w+)\s*=\s*'([^']*)'/g, (s, o, r) => `${o}='${qs(r)}'`), /\s*on\w+\s*=\s*["']?[^"'>]+["']?/gi.test(e) && (process.env.NODE_ENV !== "production" && Se("Potentially dangerous event handlers detected in translation. Consider removing onclick, onerror, etc. from your translation messages."), e = e.replace(/(\s+)(on)(\w+\s*=)/gi, "$1&#111;n$3")), [
    // In href, src, action, formaction attributes
    /(\s+(?:href|src|action|formaction)\s*=\s*["']?)\s*javascript:/gi,
    // In style attributes within url()
    /(style\s*=\s*["'][^"']*url\s*\(\s*)javascript:/gi
  ].forEach((s) => {
    e = e.replace(s, "$1javascript&#58;");
  }), e;
}
const Ja = Object.prototype.hasOwnProperty;
function ke(e, t) {
  return Ja.call(e, t);
}
const se = Array.isArray, Q = (e) => typeof e == "function", M = (e) => typeof e == "string", ne = (e) => typeof e == "boolean", G = (e) => e !== null && typeof e == "object", Za = (e) => G(e) && Q(e.then) && Q(e.catch), nr = Object.prototype.toString, hs = (e) => nr.call(e), H = (e) => hs(e) === "[object Object]", qa = (e) => e == null ? "" : se(e) || H(e) && e.toString === nr ? JSON.stringify(e, null, 2) : String(e);
function ps(e, t = "") {
  return e.reduce((n, s, o) => o === 0 ? n + s : n + t + s, "");
}
const Qs = 2;
function Qa(e, t = 0, n = e.length) {
  const s = e.split(/\r?\n/);
  let o = 0;
  const r = [];
  for (let a = 0; a < s.length; a++)
    if (o += s[a].length + 1, o >= t) {
      for (let i = a - Qs; i <= a + Qs || n > o; i++) {
        if (i < 0 || i >= s.length)
          continue;
        const c = i + 1;
        r.push(`${c}${" ".repeat(3 - String(c).length)}|  ${s[i]}`);
        const _ = s[i].length;
        if (i === a) {
          const m = t - (o - _) + 1, N = Math.max(1, n > o ? _ - m : n - t);
          r.push("   |  " + " ".repeat(m) + "^".repeat(N));
        } else if (i > a) {
          if (n > o) {
            const m = Math.max(Math.min(n - o, _), 1);
            r.push("   |  " + "^".repeat(m));
          }
          o += _ + 1;
        }
      }
      break;
    }
  return r.join(`
`);
}
function ei() {
  const e = /* @__PURE__ */ new Map();
  return {
    events: e,
    on(n, s) {
      const o = e.get(n);
      o && o.push(s) || e.set(n, [s]);
    },
    off(n, s) {
      const o = e.get(n);
      o && o.splice(o.indexOf(s) >>> 0, 1);
    },
    emit(n, s) {
      (e.get(n) || []).slice().map((o) => o(s)), (e.get("*") || []).slice().map((o) => o(n, s));
    }
  };
}
const Qt = (e) => !G(e) || se(e);
function sn(e, t) {
  if (Qt(e) || Qt(t))
    throw new Error("Invalid value");
  const n = [{ src: e, des: t }];
  for (; n.length; ) {
    const { src: s, des: o } = n.pop();
    Object.keys(s).forEach((r) => {
      r !== "__proto__" && (G(s[r]) && !G(o[r]) && (o[r] = Array.isArray(s[r]) ? [] : X()), Qt(o[r]) || Qt(s[r]) ? o[r] = s[r] : n.push({ src: s[r], des: o[r] }));
    });
  }
}
/*!
  * message-compiler v11.2.2
  * (c) 2025 kazuya kawaguchi
  * Released under the MIT License.
  */
function ti(e, t, n) {
  return { line: e, column: t, offset: n };
}
function qn(e, t, n) {
  return { start: e, end: t };
}
const V = {
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
  UNEXPECTED_LEXICAL_ANALYSIS: 14,
  // generator error codes
  UNHANDLED_CODEGEN_NODE_TYPE: 15,
  // minifier error codes
  UNHANDLED_MINIFIER_NODE_TYPE: 16
}, ni = 17, si = {
  // tokenizer error messages
  [V.EXPECTED_TOKEN]: "Expected token: '{0}'",
  [V.INVALID_TOKEN_IN_PLACEHOLDER]: "Invalid token in placeholder: '{0}'",
  [V.UNTERMINATED_SINGLE_QUOTE_IN_PLACEHOLDER]: "Unterminated single quote in placeholder",
  [V.UNKNOWN_ESCAPE_SEQUENCE]: "Unknown escape sequence: \\{0}",
  [V.INVALID_UNICODE_ESCAPE_SEQUENCE]: "Invalid unicode escape sequence: {0}",
  [V.UNBALANCED_CLOSING_BRACE]: "Unbalanced closing brace",
  [V.UNTERMINATED_CLOSING_BRACE]: "Unterminated closing brace",
  [V.EMPTY_PLACEHOLDER]: "Empty placeholder",
  [V.NOT_ALLOW_NEST_PLACEHOLDER]: "Not allowed nest placeholder",
  [V.INVALID_LINKED_FORMAT]: "Invalid linked format",
  // parser error messages
  [V.MUST_HAVE_MESSAGES_IN_PLURAL]: "Plural must have messages",
  [V.UNEXPECTED_EMPTY_LINKED_MODIFIER]: "Unexpected empty linked modifier",
  [V.UNEXPECTED_EMPTY_LINKED_KEY]: "Unexpected empty linked key",
  [V.UNEXPECTED_LEXICAL_ANALYSIS]: "Unexpected lexical analysis in token: '{0}'",
  // generator error messages
  [V.UNHANDLED_CODEGEN_NODE_TYPE]: "unhandled codegen node type: '{0}'",
  // minimizer error messages
  [V.UNHANDLED_MINIFIER_NODE_TYPE]: "unhandled mimifier node type: '{0}'"
};
function Et(e, t, n = {}) {
  const { domain: s, messages: o, args: r } = n, a = process.env.NODE_ENV !== "production" ? bn((o || si)[e] || "", ...r || []) : e, i = new SyntaxError(String(a));
  return i.code = e, t && (i.location = t), i.domain = s, i;
}
function oi(e) {
  throw e;
}
const ri = /<\/?[\w\s="/.':;#-\/]+>/, ai = (e) => ri.test(e), Oe = " ", ii = "\r", fe = `
`, li = "\u2028", ci = "\u2029";
function ui(e) {
  const t = e;
  let n = 0, s = 1, o = 1, r = 0;
  const a = (d) => t[d] === ii && t[d + 1] === fe, i = (d) => t[d] === fe, c = (d) => t[d] === ci, _ = (d) => t[d] === li, m = (d) => a(d) || i(d) || c(d) || _(d), N = () => n, p = () => s, A = () => o, $ = () => r, C = (d) => a(d) || c(d) || _(d) ? fe : t[d], L = () => C(n), f = () => C(n + r);
  function k() {
    return r = 0, m(n) && (s++, o = 0), a(n) && n++, n++, o++, t[n];
  }
  function E() {
    return a(n + r) && r++, r++, t[n + r];
  }
  function v() {
    n = 0, s = 1, o = 1, r = 0;
  }
  function D(d = 0) {
    r = d;
  }
  function P() {
    const d = n + r;
    for (; d !== n; )
      k();
    r = 0;
  }
  return {
    index: N,
    line: p,
    column: A,
    peekOffset: $,
    charAt: C,
    currentChar: L,
    currentPeek: f,
    next: k,
    peek: E,
    reset: v,
    resetPeek: D,
    skipToPeek: P
  };
}
const Me = void 0, di = ".", eo = "'", fi = "tokenizer";
function _i(e, t = {}) {
  const n = t.location !== !1, s = ui(e), o = () => s.index(), r = () => ti(s.line(), s.column(), s.index()), a = r(), i = o(), c = {
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
  }, _ = () => c, { onError: m } = t;
  function N(l, u, O, ...F) {
    const q = _();
    if (u.column += O, u.offset += O, m) {
      const ee = n ? qn(q.startLoc, u) : null, z = Et(l, ee, {
        domain: fi,
        args: F
      });
      m(z);
    }
  }
  function p(l, u, O) {
    l.endLoc = r(), l.currentType = u;
    const F = { type: u };
    return n && (F.loc = qn(l.startLoc, l.endLoc)), O != null && (F.value = O), F;
  }
  const A = (l) => p(
    l,
    13
    /* TokenTypes.EOF */
  );
  function $(l, u) {
    return l.currentChar() === u ? (l.next(), u) : (N(V.EXPECTED_TOKEN, r(), 0, u), "");
  }
  function C(l) {
    let u = "";
    for (; l.currentPeek() === Oe || l.currentPeek() === fe; )
      u += l.currentPeek(), l.peek();
    return u;
  }
  function L(l) {
    const u = C(l);
    return l.skipToPeek(), u;
  }
  function f(l) {
    if (l === Me)
      return !1;
    const u = l.charCodeAt(0);
    return u >= 97 && u <= 122 || // a-z
    u >= 65 && u <= 90 || // A-Z
    u === 95;
  }
  function k(l) {
    if (l === Me)
      return !1;
    const u = l.charCodeAt(0);
    return u >= 48 && u <= 57;
  }
  function E(l, u) {
    const { currentType: O } = u;
    if (O !== 2)
      return !1;
    C(l);
    const F = f(l.currentPeek());
    return l.resetPeek(), F;
  }
  function v(l, u) {
    const { currentType: O } = u;
    if (O !== 2)
      return !1;
    C(l);
    const F = l.currentPeek() === "-" ? l.peek() : l.currentPeek(), q = k(F);
    return l.resetPeek(), q;
  }
  function D(l, u) {
    const { currentType: O } = u;
    if (O !== 2)
      return !1;
    C(l);
    const F = l.currentPeek() === eo;
    return l.resetPeek(), F;
  }
  function P(l, u) {
    const { currentType: O } = u;
    if (O !== 7)
      return !1;
    C(l);
    const F = l.currentPeek() === ".";
    return l.resetPeek(), F;
  }
  function d(l, u) {
    const { currentType: O } = u;
    if (O !== 8)
      return !1;
    C(l);
    const F = f(l.currentPeek());
    return l.resetPeek(), F;
  }
  function j(l, u) {
    const { currentType: O } = u;
    if (!(O === 7 || O === 11))
      return !1;
    C(l);
    const F = l.currentPeek() === ":";
    return l.resetPeek(), F;
  }
  function g(l, u) {
    const { currentType: O } = u;
    if (O !== 9)
      return !1;
    const F = () => {
      const ee = l.currentPeek();
      return ee === "{" ? f(l.peek()) : ee === "@" || ee === "|" || ee === ":" || ee === "." || ee === Oe || !ee ? !1 : ee === fe ? (l.peek(), F()) : I(l, !1);
    }, q = F();
    return l.resetPeek(), q;
  }
  function w(l) {
    C(l);
    const u = l.currentPeek() === "|";
    return l.resetPeek(), u;
  }
  function I(l, u = !0) {
    const O = (q = !1, ee = "") => {
      const z = l.currentPeek();
      return z === "{" || z === "@" || !z ? q : z === "|" ? !(ee === Oe || ee === fe) : z === Oe ? (l.peek(), O(!0, Oe)) : z === fe ? (l.peek(), O(!0, fe)) : !0;
    }, F = O();
    return u && l.resetPeek(), F;
  }
  function x(l, u) {
    const O = l.currentChar();
    return O === Me ? Me : u(O) ? (l.next(), O) : null;
  }
  function oe(l) {
    const u = l.charCodeAt(0);
    return u >= 97 && u <= 122 || // a-z
    u >= 65 && u <= 90 || // A-Z
    u >= 48 && u <= 57 || // 0-9
    u === 95 || // _
    u === 36;
  }
  function Ae(l) {
    return x(l, oe);
  }
  function Ke(l) {
    const u = l.charCodeAt(0);
    return u >= 97 && u <= 122 || // a-z
    u >= 65 && u <= 90 || // A-Z
    u >= 48 && u <= 57 || // 0-9
    u === 95 || // _
    u === 36 || // $
    u === 45;
  }
  function bt(l) {
    return x(l, Ke);
  }
  function Nt(l) {
    const u = l.charCodeAt(0);
    return u >= 48 && u <= 57;
  }
  function De(l) {
    return x(l, Nt);
  }
  function ue(l) {
    const u = l.charCodeAt(0);
    return u >= 48 && u <= 57 || // 0-9
    u >= 65 && u <= 70 || // A-F
    u >= 97 && u <= 102;
  }
  function Pe(l) {
    return x(l, ue);
  }
  function kt(l) {
    let u = "", O = "";
    for (; u = De(l); )
      O += u;
    return O;
  }
  function In(l) {
    let u = "";
    for (; ; ) {
      const O = l.currentChar();
      if (O === "{" || O === "}" || O === "@" || O === "|" || !O)
        break;
      if (O === Oe || O === fe)
        if (I(l))
          u += O, l.next();
        else {
          if (w(l))
            break;
          u += O, l.next();
        }
      else
        u += O, l.next();
    }
    return u;
  }
  function Sn(l) {
    L(l);
    let u = "", O = "";
    for (; u = bt(l); )
      O += u;
    const F = l.currentChar();
    if (F && F !== "}" && F !== Me && F !== Oe && F !== fe && F !== "　") {
      const q = Xt(l);
      return N(V.INVALID_TOKEN_IN_PLACEHOLDER, r(), 0, O + q), O + q;
    }
    return l.currentChar() === Me && N(V.UNTERMINATED_CLOSING_BRACE, r(), 0), O;
  }
  function An(l) {
    L(l);
    let u = "";
    return l.currentChar() === "-" ? (l.next(), u += `-${kt(l)}`) : u += kt(l), l.currentChar() === Me && N(V.UNTERMINATED_CLOSING_BRACE, r(), 0), u;
  }
  function Dn(l) {
    return l !== eo && l !== fe;
  }
  function Ss(l) {
    L(l), $(l, "'");
    let u = "", O = "";
    for (; u = x(l, Dn); )
      u === "\\" ? O += Pn(l) : O += u;
    const F = l.currentChar();
    return F === fe || F === Me ? (N(V.UNTERMINATED_SINGLE_QUOTE_IN_PLACEHOLDER, r(), 0), F === fe && (l.next(), $(l, "'")), O) : ($(l, "'"), O);
  }
  function Pn(l) {
    const u = l.currentChar();
    switch (u) {
      case "\\":
      case "'":
        return l.next(), `\\${u}`;
      case "u":
        return Yt(l, u, 4);
      case "U":
        return Yt(l, u, 6);
      default:
        return N(V.UNKNOWN_ESCAPE_SEQUENCE, r(), 0, u), "";
    }
  }
  function Yt(l, u, O) {
    $(l, u);
    let F = "";
    for (let q = 0; q < O; q++) {
      const ee = Pe(l);
      if (!ee) {
        N(V.INVALID_UNICODE_ESCAPE_SEQUENCE, r(), 0, `\\${u}${F}${l.currentChar()}`);
        break;
      }
      F += ee;
    }
    return `\\${u}${F}`;
  }
  function Mn(l) {
    return l !== "{" && l !== "}" && l !== Oe && l !== fe;
  }
  function Xt(l) {
    L(l);
    let u = "", O = "";
    for (; u = x(l, Mn); )
      O += u;
    return O;
  }
  function Rn(l) {
    let u = "", O = "";
    for (; u = Ae(l); )
      O += u;
    return O;
  }
  function Fn(l) {
    const u = (O) => {
      const F = l.currentChar();
      return F === "{" || F === "@" || F === "|" || F === "(" || F === ")" || !F || F === Oe ? O : (O += F, l.next(), u(O));
    };
    return u("");
  }
  function Ct(l) {
    L(l);
    const u = $(
      l,
      "|"
      /* TokenChars.Pipe */
    );
    return L(l), u;
  }
  function wt(l, u) {
    let O = null;
    switch (l.currentChar()) {
      case "{":
        return u.braceNest >= 1 && N(V.NOT_ALLOW_NEST_PLACEHOLDER, r(), 0), l.next(), O = p(
          u,
          2,
          "{"
          /* TokenChars.BraceLeft */
        ), L(l), u.braceNest++, O;
      case "}":
        return u.braceNest > 0 && u.currentType === 2 && N(V.EMPTY_PLACEHOLDER, r(), 0), l.next(), O = p(
          u,
          3,
          "}"
          /* TokenChars.BraceRight */
        ), u.braceNest--, u.braceNest > 0 && L(l), u.inLinked && u.braceNest === 0 && (u.inLinked = !1), O;
      case "@":
        return u.braceNest > 0 && N(V.UNTERMINATED_CLOSING_BRACE, r(), 0), O = Ye(l, u) || A(u), u.braceNest = 0, O;
      default: {
        let q = !0, ee = !0, z = !0;
        if (w(l))
          return u.braceNest > 0 && N(V.UNTERMINATED_CLOSING_BRACE, r(), 0), O = p(u, 1, Ct(l)), u.braceNest = 0, u.inLinked = !1, O;
        if (u.braceNest > 0 && (u.currentType === 4 || u.currentType === 5 || u.currentType === 6))
          return N(V.UNTERMINATED_CLOSING_BRACE, r(), 0), u.braceNest = 0, Ot(l, u);
        if (q = E(l, u))
          return O = p(u, 4, Sn(l)), L(l), O;
        if (ee = v(l, u))
          return O = p(u, 5, An(l)), L(l), O;
        if (z = D(l, u))
          return O = p(u, 6, Ss(l)), L(l), O;
        if (!q && !ee && !z)
          return O = p(u, 12, Xt(l)), N(V.INVALID_TOKEN_IN_PLACEHOLDER, r(), 0, O.value), L(l), O;
        break;
      }
    }
    return O;
  }
  function Ye(l, u) {
    const { currentType: O } = u;
    let F = null;
    const q = l.currentChar();
    switch ((O === 7 || O === 8 || O === 11 || O === 9) && (q === fe || q === Oe) && N(V.INVALID_LINKED_FORMAT, r(), 0), q) {
      case "@":
        return l.next(), F = p(
          u,
          7,
          "@"
          /* TokenChars.LinkedAlias */
        ), u.inLinked = !0, F;
      case ".":
        return L(l), l.next(), p(
          u,
          8,
          "."
          /* TokenChars.LinkedDot */
        );
      case ":":
        return L(l), l.next(), p(
          u,
          9,
          ":"
          /* TokenChars.LinkedDelimiter */
        );
      default:
        return w(l) ? (F = p(u, 1, Ct(l)), u.braceNest = 0, u.inLinked = !1, F) : P(l, u) || j(l, u) ? (L(l), Ye(l, u)) : d(l, u) ? (L(l), p(u, 11, Rn(l))) : g(l, u) ? (L(l), q === "{" ? wt(l, u) || F : p(u, 10, Fn(l))) : (O === 7 && N(V.INVALID_LINKED_FORMAT, r(), 0), u.braceNest = 0, u.inLinked = !1, Ot(l, u));
    }
  }
  function Ot(l, u) {
    let O = {
      type: 13
      /* TokenTypes.EOF */
    };
    if (u.braceNest > 0)
      return wt(l, u) || A(u);
    if (u.inLinked)
      return Ye(l, u) || A(u);
    switch (l.currentChar()) {
      case "{":
        return wt(l, u) || A(u);
      case "}":
        return N(V.UNBALANCED_CLOSING_BRACE, r(), 0), l.next(), p(
          u,
          3,
          "}"
          /* TokenChars.BraceRight */
        );
      case "@":
        return Ye(l, u) || A(u);
      default: {
        if (w(l))
          return O = p(u, 1, Ct(l)), u.braceNest = 0, u.inLinked = !1, O;
        if (I(l))
          return p(u, 0, In(l));
        break;
      }
    }
    return O;
  }
  function $n() {
    const { currentType: l, offset: u, startLoc: O, endLoc: F } = c;
    return c.lastType = l, c.lastOffset = u, c.lastStartLoc = O, c.lastEndLoc = F, c.offset = o(), c.startLoc = r(), s.currentChar() === Me ? p(
      c,
      13
      /* TokenTypes.EOF */
    ) : Ot(s, c);
  }
  return {
    nextToken: $n,
    currentOffset: o,
    currentPosition: r,
    context: _
  };
}
const mi = "parser", hi = /(?:\\\\|\\'|\\u([0-9a-fA-F]{4})|\\U([0-9a-fA-F]{6}))/g;
function pi(e, t, n) {
  switch (e) {
    case "\\\\":
      return "\\";
    // eslint-disable-next-line no-useless-escape
    case "\\'":
      return "'";
    default: {
      const s = parseInt(t || n, 16);
      return s <= 55295 || s >= 57344 ? String.fromCodePoint(s) : "�";
    }
  }
}
function gi(e = {}) {
  const t = e.location !== !1, { onError: n } = e;
  function s(f, k, E, v, ...D) {
    const P = f.currentPosition();
    if (P.offset += v, P.column += v, n) {
      const d = t ? qn(E, P) : null, j = Et(k, d, {
        domain: mi,
        args: D
      });
      n(j);
    }
  }
  function o(f, k, E) {
    const v = { type: f };
    return t && (v.start = k, v.end = k, v.loc = { start: E, end: E }), v;
  }
  function r(f, k, E, v) {
    t && (f.end = k, f.loc && (f.loc.end = E));
  }
  function a(f, k) {
    const E = f.context(), v = o(3, E.offset, E.startLoc);
    return v.value = k, r(v, f.currentOffset(), f.currentPosition()), v;
  }
  function i(f, k) {
    const E = f.context(), { lastOffset: v, lastStartLoc: D } = E, P = o(5, v, D);
    return P.index = parseInt(k, 10), f.nextToken(), r(P, f.currentOffset(), f.currentPosition()), P;
  }
  function c(f, k) {
    const E = f.context(), { lastOffset: v, lastStartLoc: D } = E, P = o(4, v, D);
    return P.key = k, f.nextToken(), r(P, f.currentOffset(), f.currentPosition()), P;
  }
  function _(f, k) {
    const E = f.context(), { lastOffset: v, lastStartLoc: D } = E, P = o(9, v, D);
    return P.value = k.replace(hi, pi), f.nextToken(), r(P, f.currentOffset(), f.currentPosition()), P;
  }
  function m(f) {
    const k = f.nextToken(), E = f.context(), { lastOffset: v, lastStartLoc: D } = E, P = o(8, v, D);
    return k.type !== 11 ? (s(f, V.UNEXPECTED_EMPTY_LINKED_MODIFIER, E.lastStartLoc, 0), P.value = "", r(P, v, D), {
      nextConsumeToken: k,
      node: P
    }) : (k.value == null && s(f, V.UNEXPECTED_LEXICAL_ANALYSIS, E.lastStartLoc, 0, Le(k)), P.value = k.value || "", r(P, f.currentOffset(), f.currentPosition()), {
      node: P
    });
  }
  function N(f, k) {
    const E = f.context(), v = o(7, E.offset, E.startLoc);
    return v.value = k, r(v, f.currentOffset(), f.currentPosition()), v;
  }
  function p(f) {
    const k = f.context(), E = o(6, k.offset, k.startLoc);
    let v = f.nextToken();
    if (v.type === 8) {
      const D = m(f);
      E.modifier = D.node, v = D.nextConsumeToken || f.nextToken();
    }
    switch (v.type !== 9 && s(f, V.UNEXPECTED_LEXICAL_ANALYSIS, k.lastStartLoc, 0, Le(v)), v = f.nextToken(), v.type === 2 && (v = f.nextToken()), v.type) {
      case 10:
        v.value == null && s(f, V.UNEXPECTED_LEXICAL_ANALYSIS, k.lastStartLoc, 0, Le(v)), E.key = N(f, v.value || "");
        break;
      case 4:
        v.value == null && s(f, V.UNEXPECTED_LEXICAL_ANALYSIS, k.lastStartLoc, 0, Le(v)), E.key = c(f, v.value || "");
        break;
      case 5:
        v.value == null && s(f, V.UNEXPECTED_LEXICAL_ANALYSIS, k.lastStartLoc, 0, Le(v)), E.key = i(f, v.value || "");
        break;
      case 6:
        v.value == null && s(f, V.UNEXPECTED_LEXICAL_ANALYSIS, k.lastStartLoc, 0, Le(v)), E.key = _(f, v.value || "");
        break;
      default: {
        s(f, V.UNEXPECTED_EMPTY_LINKED_KEY, k.lastStartLoc, 0);
        const D = f.context(), P = o(7, D.offset, D.startLoc);
        return P.value = "", r(P, D.offset, D.startLoc), E.key = P, r(E, D.offset, D.startLoc), {
          nextConsumeToken: v,
          node: E
        };
      }
    }
    return r(E, f.currentOffset(), f.currentPosition()), {
      node: E
    };
  }
  function A(f) {
    const k = f.context(), E = k.currentType === 1 ? f.currentOffset() : k.offset, v = k.currentType === 1 ? k.endLoc : k.startLoc, D = o(2, E, v);
    D.items = [];
    let P = null;
    do {
      const g = P || f.nextToken();
      switch (P = null, g.type) {
        case 0:
          g.value == null && s(f, V.UNEXPECTED_LEXICAL_ANALYSIS, k.lastStartLoc, 0, Le(g)), D.items.push(a(f, g.value || ""));
          break;
        case 5:
          g.value == null && s(f, V.UNEXPECTED_LEXICAL_ANALYSIS, k.lastStartLoc, 0, Le(g)), D.items.push(i(f, g.value || ""));
          break;
        case 4:
          g.value == null && s(f, V.UNEXPECTED_LEXICAL_ANALYSIS, k.lastStartLoc, 0, Le(g)), D.items.push(c(f, g.value || ""));
          break;
        case 6:
          g.value == null && s(f, V.UNEXPECTED_LEXICAL_ANALYSIS, k.lastStartLoc, 0, Le(g)), D.items.push(_(f, g.value || ""));
          break;
        case 7: {
          const w = p(f);
          D.items.push(w.node), P = w.nextConsumeToken || null;
          break;
        }
      }
    } while (k.currentType !== 13 && k.currentType !== 1);
    const d = k.currentType === 1 ? k.lastOffset : f.currentOffset(), j = k.currentType === 1 ? k.lastEndLoc : f.currentPosition();
    return r(D, d, j), D;
  }
  function $(f, k, E, v) {
    const D = f.context();
    let P = v.items.length === 0;
    const d = o(1, k, E);
    d.cases = [], d.cases.push(v);
    do {
      const j = A(f);
      P || (P = j.items.length === 0), d.cases.push(j);
    } while (D.currentType !== 13);
    return P && s(f, V.MUST_HAVE_MESSAGES_IN_PLURAL, E, 0), r(d, f.currentOffset(), f.currentPosition()), d;
  }
  function C(f) {
    const k = f.context(), { offset: E, startLoc: v } = k, D = A(f);
    return k.currentType === 13 ? D : $(f, E, v, D);
  }
  function L(f) {
    const k = _i(f, ie({}, e)), E = k.context(), v = o(0, E.offset, E.startLoc);
    return t && v.loc && (v.loc.source = f), v.body = C(k), e.onCacheKey && (v.cacheKey = e.onCacheKey(f)), E.currentType !== 13 && s(k, V.UNEXPECTED_LEXICAL_ANALYSIS, E.lastStartLoc, 0, f[E.offset] || ""), r(v, k.currentOffset(), k.currentPosition()), v;
  }
  return { parse: L };
}
function Le(e) {
  if (e.type === 13)
    return "EOF";
  const t = (e.value || "").replace(/\r?\n/gu, "\\n");
  return t.length > 10 ? t.slice(0, 9) + "…" : t;
}
function yi(e, t = {}) {
  const n = {
    ast: e,
    helpers: /* @__PURE__ */ new Set()
  };
  return { context: () => n, helper: (r) => (n.helpers.add(r), r) };
}
function to(e, t) {
  for (let n = 0; n < e.length; n++)
    gs(e[n], t);
}
function gs(e, t) {
  switch (e.type) {
    case 1:
      to(e.cases, t), t.helper(
        "plural"
        /* HelperNameMap.PLURAL */
      );
      break;
    case 2:
      to(e.items, t);
      break;
    case 6: {
      gs(e.key, t), t.helper(
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
function Ei(e, t = {}) {
  const n = yi(e);
  n.helper(
    "normalize"
    /* HelperNameMap.NORMALIZE */
  ), e.body && gs(e.body, n);
  const s = n.context();
  e.helpers = Array.from(s.helpers);
}
function vi(e) {
  const t = e.body;
  return t.type === 2 ? no(t) : t.cases.forEach((n) => no(n)), e;
}
function no(e) {
  if (e.items.length === 1) {
    const t = e.items[0];
    (t.type === 3 || t.type === 9) && (e.static = t.value, delete t.value);
  } else {
    const t = [];
    for (let n = 0; n < e.items.length; n++) {
      const s = e.items[n];
      if (!(s.type === 3 || s.type === 9) || s.value == null)
        break;
      t.push(s.value);
    }
    if (t.length === e.items.length) {
      e.static = ps(t);
      for (let n = 0; n < e.items.length; n++) {
        const s = e.items[n];
        (s.type === 3 || s.type === 9) && delete s.value;
      }
    }
  }
}
const bi = "minifier";
function _t(e) {
  switch (e.t = e.type, e.type) {
    case 0: {
      const t = e;
      _t(t.body), t.b = t.body, delete t.body;
      break;
    }
    case 1: {
      const t = e, n = t.cases;
      for (let s = 0; s < n.length; s++)
        _t(n[s]);
      t.c = n, delete t.cases;
      break;
    }
    case 2: {
      const t = e, n = t.items;
      for (let s = 0; s < n.length; s++)
        _t(n[s]);
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
      _t(t.key), t.k = t.key, delete t.key, t.modifier && (_t(t.modifier), t.m = t.modifier, delete t.modifier);
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
    default:
      if (process.env.NODE_ENV !== "production")
        throw Et(V.UNHANDLED_MINIFIER_NODE_TYPE, null, {
          domain: bi,
          args: [e.type]
        });
  }
  delete e.type;
}
const Ni = "parser";
function ki(e, t) {
  const { filename: n, breakLineCode: s, needIndent: o } = t, r = t.location !== !1, a = {
    filename: n,
    code: "",
    column: 1,
    line: 1,
    offset: 0,
    map: void 0,
    breakLineCode: s,
    needIndent: o,
    indentLevel: 0
  };
  r && e.loc && (a.source = e.loc.source);
  const i = () => a;
  function c(C, L) {
    a.code += C;
  }
  function _(C, L = !0) {
    const f = L ? s : "";
    c(o ? f + "  ".repeat(C) : f);
  }
  function m(C = !0) {
    const L = ++a.indentLevel;
    C && _(L);
  }
  function N(C = !0) {
    const L = --a.indentLevel;
    C && _(L);
  }
  function p() {
    _(a.indentLevel);
  }
  return {
    context: i,
    push: c,
    indent: m,
    deindent: N,
    newline: p,
    helper: (C) => `_${C}`,
    needIndent: () => a.needIndent
  };
}
function Ci(e, t) {
  const { helper: n } = e;
  e.push(`${n(
    "linked"
    /* HelperNameMap.LINKED */
  )}(`), ht(e, t.key), t.modifier ? (e.push(", "), ht(e, t.modifier), e.push(", _type")) : e.push(", undefined, _type"), e.push(")");
}
function wi(e, t) {
  const { helper: n, needIndent: s } = e;
  e.push(`${n(
    "normalize"
    /* HelperNameMap.NORMALIZE */
  )}([`), e.indent(s());
  const o = t.items.length;
  for (let r = 0; r < o && (ht(e, t.items[r]), r !== o - 1); r++)
    e.push(", ");
  e.deindent(s()), e.push("])");
}
function Oi(e, t) {
  const { helper: n, needIndent: s } = e;
  if (t.cases.length > 1) {
    e.push(`${n(
      "plural"
      /* HelperNameMap.PLURAL */
    )}([`), e.indent(s());
    const o = t.cases.length;
    for (let r = 0; r < o && (ht(e, t.cases[r]), r !== o - 1); r++)
      e.push(", ");
    e.deindent(s()), e.push("])");
  }
}
function Li(e, t) {
  t.body ? ht(e, t.body) : e.push("null");
}
function ht(e, t) {
  const { helper: n } = e;
  switch (t.type) {
    case 0:
      Li(e, t);
      break;
    case 1:
      Oi(e, t);
      break;
    case 2:
      wi(e, t);
      break;
    case 6:
      Ci(e, t);
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
    default:
      if (process.env.NODE_ENV !== "production")
        throw Et(V.UNHANDLED_CODEGEN_NODE_TYPE, null, {
          domain: Ni,
          args: [t.type]
        });
  }
}
const Ti = (e, t = {}) => {
  const n = M(t.mode) ? t.mode : "normal", s = M(t.filename) ? t.filename : "message.intl";
  t.sourceMap;
  const o = t.breakLineCode != null ? t.breakLineCode : n === "arrow" ? ";" : `
`, r = t.needIndent ? t.needIndent : n !== "arrow", a = e.helpers || [], i = ki(e, {
    filename: s,
    breakLineCode: o,
    needIndent: r
  });
  i.push(n === "normal" ? "function __msg__ (ctx) {" : "(ctx) => {"), i.indent(r), a.length > 0 && (i.push(`const { ${ps(a.map((m) => `${m}: _${m}`), ", ")} } = ctx`), i.newline()), i.push("return "), ht(i, e), i.deindent(r), i.push("}"), delete e.helpers;
  const { code: c, map: _ } = i.context();
  return {
    ast: e,
    code: c,
    map: _ ? _.toJSON() : void 0
    // eslint-disable-line @typescript-eslint/no-explicit-any
  };
};
function Ii(e, t = {}) {
  const n = ie({}, t), s = !!n.jit, o = !!n.minify, r = n.optimize == null ? !0 : n.optimize, i = gi(n).parse(e);
  return s ? (r && vi(i), o && _t(i), { ast: i, code: "" }) : (Ei(i, n), Ti(i, n));
}
/*!
  * core-base v11.2.2
  * (c) 2025 kazuya kawaguchi
  * Released under the MIT License.
  */
function Si() {
  typeof __INTLIFY_PROD_DEVTOOLS__ != "boolean" && (Qe().__INTLIFY_PROD_DEVTOOLS__ = !1), typeof __INTLIFY_DROP_MESSAGE_COMPILER__ != "boolean" && (Qe().__INTLIFY_DROP_MESSAGE_COMPILER__ = !1);
}
function we(e) {
  return G(e) && ys(e) === 0 && (ke(e, "b") || ke(e, "body"));
}
const sr = ["b", "body"];
function Ai(e) {
  return He(e, sr);
}
const or = ["c", "cases"];
function Di(e) {
  return He(e, or, []);
}
const rr = ["s", "static"];
function Pi(e) {
  return He(e, rr);
}
const ar = ["i", "items"];
function Mi(e) {
  return He(e, ar, []);
}
const ir = ["t", "type"];
function ys(e) {
  return He(e, ir);
}
const lr = ["v", "value"];
function en(e, t) {
  const n = He(e, lr);
  if (n != null)
    return n;
  throw Vt(t);
}
const cr = ["m", "modifier"];
function Ri(e) {
  return He(e, cr);
}
const ur = ["k", "key"];
function Fi(e) {
  const t = He(e, ur);
  if (t)
    return t;
  throw Vt(
    6
    /* NodeTypes.Linked */
  );
}
function He(e, t, n) {
  for (let s = 0; s < t.length; s++) {
    const o = t[s];
    if (ke(e, o) && e[o] != null)
      return e[o];
  }
  return n;
}
const dr = [
  ...sr,
  ...or,
  ...rr,
  ...ar,
  ...ur,
  ...cr,
  ...lr,
  ...ir
];
function Vt(e) {
  return new Error(`unhandled node type: ${e}`);
}
function zn(e) {
  return (n) => $i(n, e);
}
function $i(e, t) {
  const n = Ai(t);
  if (n == null)
    throw Vt(
      0
      /* NodeTypes.Resource */
    );
  if (ys(n) === 1) {
    const r = Di(n);
    return e.plural(r.reduce((a, i) => [
      ...a,
      so(e, i)
    ], []));
  } else
    return so(e, n);
}
function so(e, t) {
  const n = Pi(t);
  if (n != null)
    return e.type === "text" ? n : e.normalize([n]);
  {
    const s = Mi(t).reduce((o, r) => [...o, Qn(e, r)], []);
    return e.normalize(s);
  }
}
function Qn(e, t) {
  const n = ys(t);
  switch (n) {
    case 3:
      return en(t, n);
    case 9:
      return en(t, n);
    case 4: {
      const s = t;
      if (ke(s, "k") && s.k)
        return e.interpolate(e.named(s.k));
      if (ke(s, "key") && s.key)
        return e.interpolate(e.named(s.key));
      throw Vt(n);
    }
    case 5: {
      const s = t;
      if (ke(s, "i") && ae(s.i))
        return e.interpolate(e.list(s.i));
      if (ke(s, "index") && ae(s.index))
        return e.interpolate(e.list(s.index));
      throw Vt(n);
    }
    case 6: {
      const s = t, o = Ri(s), r = Fi(s);
      return e.linked(Qn(e, r), o ? Qn(e, o) : void 0, e.type);
    }
    case 7:
      return en(t, n);
    case 8:
      return en(t, n);
    default:
      throw new Error(`unhandled node on format message part: ${n}`);
  }
}
const Ui = "Detected HTML in '{source}' message. Recommend not using HTML messages to avoid XSS.";
function Vi(e, t) {
  t && ai(e) && Se(bn(Ui, { source: e }));
}
const xi = (e) => e;
let tn = X();
function Wi(e, t = {}) {
  let n = !1;
  const s = t.onError || oi;
  return t.onError = (o) => {
    n = !0, s(o);
  }, { ...Ii(e, t), detectError: n };
}
// @__NO_SIDE_EFFECTS__
function ji(e, t) {
  if (!__INTLIFY_DROP_MESSAGE_COMPILER__ && M(e)) {
    const n = ne(t.warnHtmlMessage) ? t.warnHtmlMessage : !0;
    process.env.NODE_ENV !== "production" && Vi(e, n);
    const o = (t.onCacheKey || xi)(e), r = tn[o];
    if (r)
      return r;
    const { ast: a, detectError: i } = Wi(e, {
      ...t,
      location: process.env.NODE_ENV !== "production",
      jit: !0
    }), c = zn(a);
    return i ? c : tn[o] = c;
  } else {
    if (process.env.NODE_ENV !== "production" && !we(e))
      return Se(`the message that is resolve with key '${t.key}' is not supported for jit compilation`), () => e;
    const n = e.cacheKey;
    if (n) {
      const s = tn[n];
      return s || (tn[n] = zn(e));
    } else
      return zn(e);
  }
}
let xt = null;
function Bi(e) {
  xt = e;
}
function zi(e, t, n) {
  xt && xt.emit("i18n:init", {
    timestamp: Date.now(),
    i18n: e,
    version: t,
    meta: n
  });
}
const Hi = /* @__PURE__ */ Gi("function:translate");
function Gi(e) {
  return (t) => xt && xt.emit(e, t);
}
const me = {
  INVALID_ARGUMENT: ni,
  // 17
  INVALID_DATE_ARGUMENT: 18,
  INVALID_ISO_DATE_ARGUMENT: 19,
  NOT_SUPPORT_NON_STRING_MESSAGE: 20,
  NOT_SUPPORT_LOCALE_PROMISE_VALUE: 21,
  NOT_SUPPORT_LOCALE_ASYNC_FUNCTION: 22,
  NOT_SUPPORT_LOCALE_TYPE: 23
}, Ki = 24;
function Re(e) {
  return Et(e, null, process.env.NODE_ENV !== "production" ? { messages: Yi } : void 0);
}
const Yi = {
  [me.INVALID_ARGUMENT]: "Invalid arguments",
  [me.INVALID_DATE_ARGUMENT]: "The date provided is an invalid Date object.Make sure your Date represents a valid date.",
  [me.INVALID_ISO_DATE_ARGUMENT]: "The argument provided is not a valid ISO date string",
  [me.NOT_SUPPORT_NON_STRING_MESSAGE]: "Not support non-string message",
  [me.NOT_SUPPORT_LOCALE_PROMISE_VALUE]: "cannot support promise value",
  [me.NOT_SUPPORT_LOCALE_ASYNC_FUNCTION]: "cannot support async function",
  [me.NOT_SUPPORT_LOCALE_TYPE]: "cannot support locale type"
};
function Es(e, t) {
  return t.locale != null ? oo(t.locale) : oo(e.locale);
}
let Hn;
function oo(e) {
  if (M(e))
    return e;
  if (Q(e)) {
    if (e.resolvedOnce && Hn != null)
      return Hn;
    if (e.constructor.name === "Function") {
      const t = e();
      if (Za(t))
        throw Re(me.NOT_SUPPORT_LOCALE_PROMISE_VALUE);
      return Hn = t;
    } else
      throw Re(me.NOT_SUPPORT_LOCALE_ASYNC_FUNCTION);
  } else
    throw Re(me.NOT_SUPPORT_LOCALE_TYPE);
}
function Xi(e, t, n) {
  return [.../* @__PURE__ */ new Set([
    n,
    ...se(t) ? t : G(t) ? Object.keys(t) : M(t) ? [t] : [n]
  ])];
}
function fr(e, t, n) {
  const s = M(n) ? n : mn, o = e;
  o.__localeChainCache || (o.__localeChainCache = /* @__PURE__ */ new Map());
  let r = o.__localeChainCache.get(s);
  if (!r) {
    r = [];
    let a = [n];
    for (; se(a); )
      a = ro(r, a, t);
    const i = se(t) || !H(t) ? t : t.default ? t.default : null;
    a = M(i) ? [i] : i, se(a) && ro(r, a, !1), o.__localeChainCache.set(s, r);
  }
  return r;
}
function ro(e, t, n) {
  let s = !0;
  for (let o = 0; o < t.length && ne(s); o++) {
    const r = t[o];
    M(r) && (s = Ji(e, t[o], n));
  }
  return s;
}
function Ji(e, t, n) {
  let s;
  const o = t.split("-");
  do {
    const r = o.join("-");
    s = Zi(e, r, n), o.splice(-1, 1);
  } while (o.length && s === !0);
  return s;
}
function Zi(e, t, n) {
  let s = !1;
  if (!e.includes(t) && (s = !0, t)) {
    s = t[t.length - 1] !== "!";
    const o = t.replace(/!/g, "");
    e.push(o), (se(n) || H(n)) && n[o] && (s = n[o]);
  }
  return s;
}
const Ge = [];
Ge[
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
Ge[
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
Ge[
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
Ge[
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
Ge[
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
Ge[
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
Ge[
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
const qi = /^\s?(?:true|false|-?[\d.]+|'[^']*'|"[^"]*")\s?$/;
function Qi(e) {
  return qi.test(e);
}
function el(e) {
  const t = e.charCodeAt(0), n = e.charCodeAt(e.length - 1);
  return t === n && (t === 34 || t === 39) ? e.slice(1, -1) : e;
}
function tl(e) {
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
function nl(e) {
  const t = e.trim();
  return e.charAt(0) === "0" && isNaN(parseInt(e)) ? !1 : Qi(t) ? el(t) : "*" + t;
}
function sl(e) {
  const t = [];
  let n = -1, s = 0, o = 0, r, a, i, c, _, m, N;
  const p = [];
  p[
    0
    /* Actions.APPEND */
  ] = () => {
    a === void 0 ? a = i : a += i;
  }, p[
    1
    /* Actions.PUSH */
  ] = () => {
    a !== void 0 && (t.push(a), a = void 0);
  }, p[
    2
    /* Actions.INC_SUB_PATH_DEPTH */
  ] = () => {
    p[
      0
      /* Actions.APPEND */
    ](), o++;
  }, p[
    3
    /* Actions.PUSH_SUB_PATH */
  ] = () => {
    if (o > 0)
      o--, s = 4, p[
        0
        /* Actions.APPEND */
      ]();
    else {
      if (o = 0, a === void 0 || (a = nl(a), a === !1))
        return !1;
      p[
        1
        /* Actions.PUSH */
      ]();
    }
  };
  function A() {
    const $ = e[n + 1];
    if (s === 5 && $ === "'" || s === 6 && $ === '"')
      return n++, i = "\\" + $, p[
        0
        /* Actions.APPEND */
      ](), !0;
  }
  for (; s !== null; )
    if (n++, r = e[n], !(r === "\\" && A())) {
      if (c = tl(r), N = Ge[s], _ = N[c] || N.l || 8, _ === 8 || (s = _[0], _[1] !== void 0 && (m = p[_[1]], m && (i = r, m() === !1))))
        return;
      if (s === 7)
        return t;
    }
}
const ao = /* @__PURE__ */ new Map();
function ol(e, t) {
  return G(e) ? e[t] : null;
}
function rl(e, t) {
  if (!G(e))
    return null;
  let n = ao.get(t);
  if (n || (n = sl(t), n && ao.set(t, n)), !n)
    return null;
  const s = n.length;
  let o = e, r = 0;
  for (; r < s; ) {
    const a = n[r];
    if (dr.includes(a) && we(o))
      return null;
    const i = o[a];
    if (i === void 0 || Q(o))
      return null;
    o = i, r++;
  }
  return o;
}
const he = {
  NOT_FOUND_KEY: 1,
  FALLBACK_TO_TRANSLATE: 2,
  CANNOT_FORMAT_NUMBER: 3,
  FALLBACK_TO_NUMBER_FORMAT: 4,
  CANNOT_FORMAT_DATE: 5,
  FALLBACK_TO_DATE_FORMAT: 6,
  EXPERIMENTAL_CUSTOM_MESSAGE_COMPILER: 7
}, al = 8, il = {
  [he.NOT_FOUND_KEY]: "Not found '{key}' key in '{locale}' locale messages.",
  [he.FALLBACK_TO_TRANSLATE]: "Fall back to translate '{key}' key with '{target}' locale.",
  [he.CANNOT_FORMAT_NUMBER]: "Cannot format a number value due to not supported Intl.NumberFormat.",
  [he.FALLBACK_TO_NUMBER_FORMAT]: "Fall back to number format '{key}' key with '{target}' locale.",
  [he.CANNOT_FORMAT_DATE]: "Cannot format a date value due to not supported Intl.DateTimeFormat.",
  [he.FALLBACK_TO_DATE_FORMAT]: "Fall back to datetime format '{key}' key with '{target}' locale.",
  [he.EXPERIMENTAL_CUSTOM_MESSAGE_COMPILER]: "This project is using Custom Message Compiler, which is an experimental feature. It may receive breaking changes or be removed in the future."
};
function ot(e, ...t) {
  return bn(il[e], ...t);
}
const ll = "11.2.2", kn = -1, mn = "en-US", hn = "", io = (e) => `${e.charAt(0).toLocaleUpperCase()}${e.substr(1)}`;
function cl() {
  return {
    upper: (e, t) => t === "text" && M(e) ? e.toUpperCase() : t === "vnode" && G(e) && "__v_isVNode" in e ? e.children.toUpperCase() : e,
    lower: (e, t) => t === "text" && M(e) ? e.toLowerCase() : t === "vnode" && G(e) && "__v_isVNode" in e ? e.children.toLowerCase() : e,
    capitalize: (e, t) => t === "text" && M(e) ? io(e) : t === "vnode" && G(e) && "__v_isVNode" in e ? io(e.children) : e
  };
}
let _r;
function ul(e) {
  _r = e;
}
let mr;
function dl(e) {
  mr = e;
}
let hr;
function fl(e) {
  hr = e;
}
let pr = null;
const _l = /* @__NO_SIDE_EFFECTS__ */ (e) => {
  pr = e;
}, ml = /* @__NO_SIDE_EFFECTS__ */ () => pr;
let gr = null;
const lo = (e) => {
  gr = e;
}, hl = () => gr;
let co = 0;
function pl(e = {}) {
  const t = Q(e.onWarn) ? e.onWarn : Se, n = M(e.version) ? e.version : ll, s = M(e.locale) || Q(e.locale) ? e.locale : mn, o = Q(s) ? mn : s, r = se(e.fallbackLocale) || H(e.fallbackLocale) || M(e.fallbackLocale) || e.fallbackLocale === !1 ? e.fallbackLocale : o, a = H(e.messages) ? e.messages : Gn(o), i = H(e.datetimeFormats) ? e.datetimeFormats : Gn(o), c = H(e.numberFormats) ? e.numberFormats : Gn(o), _ = ie(X(), e.modifiers, cl()), m = e.pluralRules || X(), N = Q(e.missing) ? e.missing : null, p = ne(e.missingWarn) || _n(e.missingWarn) ? e.missingWarn : !0, A = ne(e.fallbackWarn) || _n(e.fallbackWarn) ? e.fallbackWarn : !0, $ = !!e.fallbackFormat, C = !!e.unresolving, L = Q(e.postTranslation) ? e.postTranslation : null, f = H(e.processor) ? e.processor : null, k = ne(e.warnHtmlMessage) ? e.warnHtmlMessage : !0, E = !!e.escapeParameter, v = Q(e.messageCompiler) ? e.messageCompiler : _r;
  process.env.NODE_ENV !== "production" && Q(e.messageCompiler) && Ba(ot(he.EXPERIMENTAL_CUSTOM_MESSAGE_COMPILER));
  const D = Q(e.messageResolver) ? e.messageResolver : mr || ol, P = Q(e.localeFallbacker) ? e.localeFallbacker : hr || Xi, d = G(e.fallbackContext) ? e.fallbackContext : void 0, j = e, g = G(j.__datetimeFormatters) ? j.__datetimeFormatters : /* @__PURE__ */ new Map(), w = G(j.__numberFormatters) ? j.__numberFormatters : /* @__PURE__ */ new Map(), I = G(j.__meta) ? j.__meta : {};
  co++;
  const x = {
    version: n,
    cid: co,
    locale: s,
    fallbackLocale: r,
    messages: a,
    modifiers: _,
    pluralRules: m,
    missing: N,
    missingWarn: p,
    fallbackWarn: A,
    fallbackFormat: $,
    unresolving: C,
    postTranslation: L,
    processor: f,
    warnHtmlMessage: k,
    escapeParameter: E,
    messageCompiler: v,
    messageResolver: D,
    localeFallbacker: P,
    fallbackContext: d,
    onWarn: t,
    __meta: I
  };
  return x.datetimeFormats = i, x.numberFormats = c, x.__datetimeFormatters = g, x.__numberFormatters = w, process.env.NODE_ENV !== "production" && (x.__v_emitter = j.__v_emitter != null ? j.__v_emitter : void 0), (process.env.NODE_ENV !== "production" || __INTLIFY_PROD_DEVTOOLS__) && zi(x, n, I), x;
}
const Gn = (e) => ({ [e]: X() });
function Cn(e, t) {
  return e instanceof RegExp ? e.test(t) : e;
}
function yr(e, t) {
  return e instanceof RegExp ? e.test(t) : e;
}
function vs(e, t, n, s, o) {
  const { missing: r, onWarn: a } = e;
  if (process.env.NODE_ENV !== "production") {
    const i = e.__v_emitter;
    i && i.emit("missing", {
      locale: n,
      key: t,
      type: o,
      groupId: `${o}:${t}`
    });
  }
  if (r !== null) {
    const i = r(e, n, t, o);
    return M(i) ? i : t;
  } else
    return process.env.NODE_ENV !== "production" && yr(s, t) && a(ot(he.NOT_FOUND_KEY, { key: t, locale: n })), t;
}
function Lt(e, t, n) {
  const s = e;
  s.__localeChainCache = /* @__PURE__ */ new Map(), e.localeFallbacker(e, n, t);
}
function Er(e, t) {
  return e === t ? !1 : e.split("-")[0] === t.split("-")[0];
}
function gl(e, t) {
  const n = t.indexOf(e);
  if (n === -1)
    return !1;
  for (let s = n + 1; s < t.length; s++)
    if (Er(e, t[s]))
      return !0;
  return !1;
}
const uo = typeof Intl < "u", vr = {
  dateTimeFormat: uo && typeof Intl.DateTimeFormat < "u",
  numberFormat: uo && typeof Intl.NumberFormat < "u"
};
function fo(e, ...t) {
  const { datetimeFormats: n, unresolving: s, fallbackLocale: o, onWarn: r, localeFallbacker: a } = e, { __datetimeFormatters: i } = e;
  if (process.env.NODE_ENV !== "production" && !vr.dateTimeFormat)
    return r(ot(he.CANNOT_FORMAT_DATE)), hn;
  const [c, _, m, N] = es(...t), p = ne(m.missingWarn) ? m.missingWarn : e.missingWarn, A = ne(m.fallbackWarn) ? m.fallbackWarn : e.fallbackWarn, $ = !!m.part, C = Es(e, m), L = a(
    e,
    // eslint-disable-line @typescript-eslint/no-explicit-any
    o,
    C
  );
  if (!M(c) || c === "")
    return new Intl.DateTimeFormat(C, N).format(_);
  let f = {}, k, E = null, v = C, D = null;
  const P = "datetime format";
  for (let g = 0; g < L.length; g++) {
    if (k = D = L[g], process.env.NODE_ENV !== "production" && C !== k && Cn(A, c) && r(ot(he.FALLBACK_TO_DATE_FORMAT, {
      key: c,
      target: k
    })), process.env.NODE_ENV !== "production" && C !== k) {
      const w = e.__v_emitter;
      w && w.emit("fallback", {
        type: P,
        key: c,
        from: v,
        to: D,
        groupId: `${P}:${c}`
      });
    }
    if (f = n[k] || {}, E = f[c], H(E))
      break;
    vs(e, c, k, p, P), v = D;
  }
  if (!H(E) || !M(k))
    return s ? kn : c;
  let d = `${k}__${c}`;
  Nn(N) || (d = `${d}__${JSON.stringify(N)}`);
  let j = i.get(d);
  return j || (j = new Intl.DateTimeFormat(k, ie({}, E, N)), i.set(d, j)), $ ? j.formatToParts(_) : j.format(_);
}
const br = [
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
function es(...e) {
  const [t, n, s, o] = e, r = X();
  let a = X(), i;
  if (M(t)) {
    const c = t.match(/(\d{4}-\d{2}-\d{2})(T|\s)?(.*)/);
    if (!c)
      throw Re(me.INVALID_ISO_DATE_ARGUMENT);
    const _ = c[3] ? c[3].trim().startsWith("T") ? `${c[1].trim()}${c[3].trim()}` : `${c[1].trim()}T${c[3].trim()}` : c[1].trim();
    i = new Date(_);
    try {
      i.toISOString();
    } catch {
      throw Re(me.INVALID_ISO_DATE_ARGUMENT);
    }
  } else if (Ka(t)) {
    if (isNaN(t.getTime()))
      throw Re(me.INVALID_DATE_ARGUMENT);
    i = t;
  } else if (ae(t))
    i = t;
  else
    throw Re(me.INVALID_ARGUMENT);
  return M(n) ? r.key = n : H(n) && Object.keys(n).forEach((c) => {
    br.includes(c) ? a[c] = n[c] : r[c] = n[c];
  }), M(s) ? r.locale = s : H(s) && (a = s), H(o) && (a = o), [r.key || "", i, r, a];
}
function _o(e, t, n) {
  const s = e;
  for (const o in n) {
    const r = `${t}__${o}`;
    s.__datetimeFormatters.has(r) && s.__datetimeFormatters.delete(r);
  }
}
function mo(e, ...t) {
  const { numberFormats: n, unresolving: s, fallbackLocale: o, onWarn: r, localeFallbacker: a } = e, { __numberFormatters: i } = e;
  if (process.env.NODE_ENV !== "production" && !vr.numberFormat)
    return r(ot(he.CANNOT_FORMAT_NUMBER)), hn;
  const [c, _, m, N] = ts(...t), p = ne(m.missingWarn) ? m.missingWarn : e.missingWarn, A = ne(m.fallbackWarn) ? m.fallbackWarn : e.fallbackWarn, $ = !!m.part, C = Es(e, m), L = a(
    e,
    // eslint-disable-line @typescript-eslint/no-explicit-any
    o,
    C
  );
  if (!M(c) || c === "")
    return new Intl.NumberFormat(C, N).format(_);
  let f = {}, k, E = null, v = C, D = null;
  const P = "number format";
  for (let g = 0; g < L.length; g++) {
    if (k = D = L[g], process.env.NODE_ENV !== "production" && C !== k && Cn(A, c) && r(ot(he.FALLBACK_TO_NUMBER_FORMAT, {
      key: c,
      target: k
    })), process.env.NODE_ENV !== "production" && C !== k) {
      const w = e.__v_emitter;
      w && w.emit("fallback", {
        type: P,
        key: c,
        from: v,
        to: D,
        groupId: `${P}:${c}`
      });
    }
    if (f = n[k] || {}, E = f[c], H(E))
      break;
    vs(e, c, k, p, P), v = D;
  }
  if (!H(E) || !M(k))
    return s ? kn : c;
  let d = `${k}__${c}`;
  Nn(N) || (d = `${d}__${JSON.stringify(N)}`);
  let j = i.get(d);
  return j || (j = new Intl.NumberFormat(k, ie({}, E, N)), i.set(d, j)), $ ? j.formatToParts(_) : j.format(_);
}
const Nr = [
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
function ts(...e) {
  const [t, n, s, o] = e, r = X();
  let a = X();
  if (!ae(t))
    throw Re(me.INVALID_ARGUMENT);
  const i = t;
  return M(n) ? r.key = n : H(n) && Object.keys(n).forEach((c) => {
    Nr.includes(c) ? a[c] = n[c] : r[c] = n[c];
  }), M(s) ? r.locale = s : H(s) && (a = s), H(o) && (a = o), [r.key || "", i, r, a];
}
function ho(e, t, n) {
  const s = e;
  for (const o in n) {
    const r = `${t}__${o}`;
    s.__numberFormatters.has(r) && s.__numberFormatters.delete(r);
  }
}
const yl = (e) => e, El = (e) => "", vl = "text", bl = (e) => e.length === 0 ? "" : ps(e), Nl = qa;
function po(e, t) {
  return e = Math.abs(e), t === 2 ? e ? e > 1 ? 1 : 0 : 1 : e ? Math.min(e, 2) : 0;
}
function kl(e) {
  const t = ae(e.pluralIndex) ? e.pluralIndex : -1;
  return e.named && (ae(e.named.count) || ae(e.named.n)) ? ae(e.named.count) ? e.named.count : ae(e.named.n) ? e.named.n : t : t;
}
function Cl(e, t) {
  t.count || (t.count = e), t.n || (t.n = e);
}
function wl(e = {}) {
  const t = e.locale, n = kl(e), s = G(e.pluralRules) && M(t) && Q(e.pluralRules[t]) ? e.pluralRules[t] : po, o = G(e.pluralRules) && M(t) && Q(e.pluralRules[t]) ? po : void 0, r = (f) => f[s(n, f.length, o)], a = e.list || [], i = (f) => a[f], c = e.named || X();
  ae(e.pluralIndex) && Cl(n, c);
  const _ = (f) => c[f];
  function m(f, k) {
    const E = Q(e.messages) ? e.messages(f, !!k) : G(e.messages) ? e.messages[f] : !1;
    return E || (e.parent ? e.parent.message(f) : El);
  }
  const N = (f) => e.modifiers ? e.modifiers[f] : yl, p = H(e.processor) && Q(e.processor.normalize) ? e.processor.normalize : bl, A = H(e.processor) && Q(e.processor.interpolate) ? e.processor.interpolate : Nl, $ = H(e.processor) && M(e.processor.type) ? e.processor.type : vl, L = {
    list: i,
    named: _,
    plural: r,
    linked: (f, ...k) => {
      const [E, v] = k;
      let D = "text", P = "";
      k.length === 1 ? G(E) ? (P = E.modifier || P, D = E.type || D) : M(E) && (P = E || P) : k.length === 2 && (M(E) && (P = E || P), M(v) && (D = v || D));
      const d = m(f, !0)(L), j = (
        // The message in vnode resolved with linked are returned as an array by processor.nomalize
        D === "vnode" && se(d) && P ? d[0] : d
      );
      return P ? N(P)(j, D) : j;
    },
    message: m,
    type: $,
    interpolate: A,
    normalize: p,
    values: ie(X(), a, c)
  };
  return L;
}
const go = () => "", ve = (e) => Q(e);
function yo(e, ...t) {
  const { fallbackFormat: n, postTranslation: s, unresolving: o, messageCompiler: r, fallbackLocale: a, messages: i } = e, [c, _] = ns(...t), m = ne(_.missingWarn) ? _.missingWarn : e.missingWarn, N = ne(_.fallbackWarn) ? _.fallbackWarn : e.fallbackWarn, p = ne(_.escapeParameter) ? _.escapeParameter : e.escapeParameter, A = !!_.resolvedMessage, $ = M(_.default) || ne(_.default) ? ne(_.default) ? r ? c : () => c : _.default : n ? r ? c : () => c : null, C = n || $ != null && (M($) || Q($)), L = Es(e, _);
  p && Ol(_);
  let [f, k, E] = A ? [
    c,
    L,
    i[L] || X()
  ] : kr(e, c, L, a, N, m), v = f, D = c;
  if (!A && !(M(v) || we(v) || ve(v)) && C && (v = $, D = v), !A && (!(M(v) || we(v) || ve(v)) || !M(k)))
    return o ? kn : c;
  if (process.env.NODE_ENV !== "production" && M(v) && e.messageCompiler == null)
    return Se(`The message format compilation is not supported in this build. Because message compiler isn't included. You need to pre-compilation all message format. So translate function return '${c}'.`), c;
  let P = !1;
  const d = () => {
    P = !0;
  }, j = ve(v) ? v : Cr(e, c, k, v, D, d);
  if (P)
    return v;
  const g = Sl(e, k, E, _), w = wl(g), I = Ll(e, j, w);
  let x = s ? s(I, c) : I;
  if (p && M(x) && (x = Xa(x)), process.env.NODE_ENV !== "production" || __INTLIFY_PROD_DEVTOOLS__) {
    const oe = {
      timestamp: Date.now(),
      key: M(c) ? c : ve(v) ? v.key : "",
      locale: k || (ve(v) ? v.locale : ""),
      format: M(v) ? v : ve(v) ? v.source : "",
      message: x
    };
    oe.meta = ie({}, e.__meta, /* @__PURE__ */ ml() || {}), Hi(oe);
  }
  return x;
}
function Ol(e) {
  se(e.list) ? e.list = e.list.map((t) => M(t) ? Zs(t) : t) : G(e.named) && Object.keys(e.named).forEach((t) => {
    M(e.named[t]) && (e.named[t] = Zs(e.named[t]));
  });
}
function kr(e, t, n, s, o, r) {
  const { messages: a, onWarn: i, messageResolver: c, localeFallbacker: _ } = e, m = _(e, s, n);
  let N = X(), p, A = null, $ = n, C = null;
  const L = "translate";
  for (let f = 0; f < m.length; f++) {
    if (p = C = m[f], process.env.NODE_ENV !== "production" && n !== p && !Er(n, p) && Cn(o, t) && i(ot(he.FALLBACK_TO_TRANSLATE, {
      key: t,
      target: p
    })), process.env.NODE_ENV !== "production" && n !== p) {
      const D = e.__v_emitter;
      D && D.emit("fallback", {
        type: L,
        key: t,
        from: $,
        to: C,
        groupId: `${L}:${t}`
      });
    }
    N = a[p] || X();
    let k = null, E, v;
    if (process.env.NODE_ENV !== "production" && Ue && (k = window.performance.now(), E = "intlify-message-resolve-start", v = "intlify-message-resolve-end", ge && ge(E)), (A = c(N, t)) === null && (A = N[t]), process.env.NODE_ENV !== "production" && Ue) {
      const D = window.performance.now(), P = e.__v_emitter;
      P && k && A && P.emit("message-resolve", {
        type: "message-resolve",
        key: t,
        message: A,
        time: D - k,
        groupId: `${L}:${t}`
      }), E && v && ge && st && (ge(v), st("intlify message resolve", E, v));
    }
    if (M(A) || we(A) || ve(A))
      break;
    if (!gl(p, m)) {
      const D = vs(
        e,
        // eslint-disable-line @typescript-eslint/no-explicit-any
        t,
        p,
        r,
        L
      );
      D !== t && (A = D);
    }
    $ = C;
  }
  return [A, p, N];
}
function Cr(e, t, n, s, o, r) {
  const { messageCompiler: a, warnHtmlMessage: i } = e;
  if (ve(s)) {
    const p = s;
    return p.locale = p.locale || n, p.key = p.key || t, p;
  }
  if (a == null) {
    const p = () => s;
    return p.locale = n, p.key = t, p;
  }
  let c = null, _, m;
  process.env.NODE_ENV !== "production" && Ue && (c = window.performance.now(), _ = "intlify-message-compilation-start", m = "intlify-message-compilation-end", ge && ge(_));
  const N = a(s, Tl(e, n, o, s, i, r));
  if (process.env.NODE_ENV !== "production" && Ue) {
    const p = window.performance.now(), A = e.__v_emitter;
    A && c && A.emit("message-compilation", {
      type: "message-compilation",
      message: s,
      time: p - c,
      groupId: `translate:${t}`
    }), _ && m && ge && st && (ge(m), st("intlify message compilation", _, m));
  }
  return N.locale = n, N.key = t, N.source = s, N;
}
function Ll(e, t, n) {
  let s = null, o, r;
  process.env.NODE_ENV !== "production" && Ue && (s = window.performance.now(), o = "intlify-message-evaluation-start", r = "intlify-message-evaluation-end", ge && ge(o));
  const a = t(n);
  if (process.env.NODE_ENV !== "production" && Ue) {
    const i = window.performance.now(), c = e.__v_emitter;
    c && s && c.emit("message-evaluation", {
      type: "message-evaluation",
      value: a,
      time: i - s,
      groupId: `translate:${t.key}`
    }), o && r && ge && st && (ge(r), st("intlify message evaluation", o, r));
  }
  return a;
}
function ns(...e) {
  const [t, n, s] = e, o = X();
  if (!M(t) && !ae(t) && !ve(t) && !we(t))
    throw Re(me.INVALID_ARGUMENT);
  const r = ae(t) ? String(t) : (ve(t), t);
  return ae(n) ? o.plural = n : M(n) ? o.default = n : H(n) && !Nn(n) ? o.named = n : se(n) && (o.list = n), ae(s) ? o.plural = s : M(s) ? o.default = s : H(s) && ie(o, s), [r, o];
}
function Tl(e, t, n, s, o, r) {
  return {
    locale: t,
    key: n,
    warnHtmlMessage: o,
    onError: (a) => {
      if (r && r(a), process.env.NODE_ENV !== "production") {
        const i = Il(s), c = `Message compilation error: ${a.message}`, _ = a.location && i && Qa(i, a.location.start.offset, a.location.end.offset), m = e.__v_emitter;
        m && i && m.emit("compile-error", {
          message: i,
          error: a.message,
          start: a.location && a.location.start.offset,
          end: a.location && a.location.end.offset,
          groupId: `translate:${n}`
        }), console.error(_ ? `${c}
${_}` : c);
      } else
        throw a;
    },
    onCacheKey: (a) => Ha(t, n, a)
  };
}
function Il(e) {
  if (M(e))
    return e;
  if (e.loc && e.loc.source)
    return e.loc.source;
}
function Sl(e, t, n, s) {
  const { modifiers: o, pluralRules: r, messageResolver: a, fallbackLocale: i, fallbackWarn: c, missingWarn: _, fallbackContext: m } = e, p = {
    locale: t,
    modifiers: o,
    pluralRules: r,
    messages: (A, $) => {
      let C = a(n, A);
      if (C == null && (m || $)) {
        const [, , L] = kr(
          m || e,
          // NOTE: if has fallbackContext, fallback to root, else if use linked, fallback to local context
          A,
          t,
          i,
          c,
          _
        );
        C = a(L, A);
      }
      if (M(C) || we(C)) {
        let L = !1;
        const k = Cr(e, A, t, C, A, () => {
          L = !0;
        });
        return L ? go : k;
      } else return ve(C) ? C : go;
    }
  };
  return e.processor && (p.processor = e.processor), s.list && (p.list = s.list), s.named && (p.named = s.named), ae(s.plural) && (p.pluralIndex = s.plural), p;
}
Si();
/*!
  * vue-i18n v11.2.2
  * (c) 2025 kazuya kawaguchi
  * Released under the MIT License.
  */
const Al = "11.2.2";
function Dl() {
  typeof __VUE_I18N_FULL_INSTALL__ != "boolean" && (Qe().__VUE_I18N_FULL_INSTALL__ = !0), typeof __VUE_I18N_LEGACY_API__ != "boolean" && (Qe().__VUE_I18N_LEGACY_API__ = !0), typeof __INTLIFY_DROP_MESSAGE_COMPILER__ != "boolean" && (Qe().__INTLIFY_DROP_MESSAGE_COMPILER__ = !1), typeof __INTLIFY_PROD_DEVTOOLS__ != "boolean" && (Qe().__INTLIFY_PROD_DEVTOOLS__ = !1);
}
const le = {
  // composer module errors
  UNEXPECTED_RETURN_TYPE: Ki,
  // 24
  // legacy module errors
  INVALID_ARGUMENT: 25,
  // i18n module errors
  MUST_BE_CALL_SETUP_TOP: 26,
  NOT_INSTALLED: 27,
  // directive module errors
  REQUIRED_VALUE: 28,
  INVALID_VALUE: 29,
  // vue-devtools errors
  CANNOT_SETUP_VUE_DEVTOOLS_PLUGIN: 30,
  NOT_INSTALLED_WITH_PROVIDE: 31,
  // unexpected error
  UNEXPECTED_ERROR: 32,
  // not compatible legacy vue-i18n constructor
  NOT_COMPATIBLE_LEGACY_VUE_I18N: 33,
  // Not available Compostion API in Legacy API mode. Please make sure that the legacy API mode is working properly
  NOT_AVAILABLE_COMPOSITION_IN_LEGACY: 34
};
function Wt(e, ...t) {
  return Et(e, null, process.env.NODE_ENV !== "production" ? { messages: Pl, args: t } : void 0);
}
const Pl = {
  [le.UNEXPECTED_RETURN_TYPE]: "Unexpected return type in composer",
  [le.INVALID_ARGUMENT]: "Invalid argument",
  [le.MUST_BE_CALL_SETUP_TOP]: "Must be called at the top of a `setup` function",
  [le.NOT_INSTALLED]: "Need to install with `app.use` function",
  [le.UNEXPECTED_ERROR]: "Unexpected error",
  [le.REQUIRED_VALUE]: "Required in value: {0}",
  [le.INVALID_VALUE]: "Invalid value",
  [le.CANNOT_SETUP_VUE_DEVTOOLS_PLUGIN]: "Cannot setup vue-devtools plugin",
  [le.NOT_INSTALLED_WITH_PROVIDE]: "Need to install with `provide` function",
  [le.NOT_COMPATIBLE_LEGACY_VUE_I18N]: "Not compatible legacy VueI18n.",
  [le.NOT_AVAILABLE_COMPOSITION_IN_LEGACY]: "Not available Compostion API in Legacy API mode. Please make sure that the legacy API mode is working properly"
}, ss = /* @__PURE__ */ xe("__translateVNode"), os = /* @__PURE__ */ xe("__datetimeParts"), rs = /* @__PURE__ */ xe("__numberParts"), as = /* @__PURE__ */ xe("__enableEmitter"), is = /* @__PURE__ */ xe("__disableEmitter"), Ml = xe("__setPluralRules"), wr = /* @__PURE__ */ xe("__injectWithOption"), ls = /* @__PURE__ */ xe("__dispose"), Ie = {
  FALLBACK_TO_ROOT: al,
  // 8
  NOT_FOUND_PARENT_SCOPE: 9,
  IGNORE_OBJ_FLATTEN: 10,
  /**
   * @deprecated will be removed at vue-i18n v12
   */
  DEPRECATE_LEGACY_MODE: 11,
  /**
   * @deprecated will be removed at vue-i18n v12
   */
  DEPRECATE_TRANSLATE_CUSTOME_DIRECTIVE: 12,
  // duplicate `useI18n` calling
  DUPLICATE_USE_I18N_CALLING: 13
}, Rl = {
  [Ie.FALLBACK_TO_ROOT]: "Fall back to {type} '{key}' with root locale.",
  [Ie.NOT_FOUND_PARENT_SCOPE]: "Not found parent scope. use the global scope.",
  [Ie.IGNORE_OBJ_FLATTEN]: "Ignore object flatten: '{key}' key has an string value",
  /**
   * @deprecated will be removed at vue-i18n v12
   */
  [Ie.DEPRECATE_LEGACY_MODE]: `Legacy API mode has been deprecated in v11. Use Composition API mode instead.
About how to use the Composition API mode, see https://vue-i18n.intlify.dev/guide/advanced/composition.html`,
  /**
   * @deprecated will be removed at vue-i18n v12
   */
  [Ie.DEPRECATE_TRANSLATE_CUSTOME_DIRECTIVE]: "'v-t' has been deprecated in v11. Use translate APIs ('t' or '$t') instead.",
  [Ie.DUPLICATE_USE_I18N_CALLING]: "Duplicate `useI18n` calling by local scope. Please don't call it on local scope, due to it does not work properly in component."
};
function pn(e, ...t) {
  return bn(Rl[e], ...t);
}
function jt(e) {
  if (!G(e) || we(e))
    return e;
  for (const t in e)
    if (ke(e, t))
      if (!t.includes("."))
        G(e[t]) && jt(e[t]);
      else {
        const n = t.split("."), s = n.length - 1;
        let o = e, r = !1;
        for (let a = 0; a < s; a++) {
          if (n[a] === "__proto__")
            throw new Error(`unsafe key: ${n[a]}`);
          if (n[a] in o || (o[n[a]] = X()), !G(o[n[a]])) {
            process.env.NODE_ENV !== "production" && Se(pn(Ie.IGNORE_OBJ_FLATTEN, {
              key: n[a]
            })), r = !0;
            break;
          }
          o = o[n[a]];
        }
        if (r || (we(o) ? dr.includes(n[s]) || delete e[t] : (o[n[s]] = e[t], delete e[t])), !we(o)) {
          const a = o[n[s]];
          G(a) && jt(a);
        }
      }
  return e;
}
function Or(e, t) {
  const { messages: n, __i18n: s, messageResolver: o, flatJson: r } = t, a = H(n) ? n : se(s) ? X() : { [e]: X() };
  if (se(s) && s.forEach((i) => {
    if ("locale" in i && "resource" in i) {
      const { locale: c, resource: _ } = i;
      c ? (a[c] = a[c] || X(), sn(_, a[c])) : sn(_, a);
    } else
      M(i) && sn(JSON.parse(i), a);
  }), o == null && r)
    for (const i in a)
      ke(a, i) && jt(a[i]);
  return a;
}
function Lr(e) {
  return e.type;
}
function Fl(e, t, n) {
  let s = G(t.messages) ? t.messages : X();
  "__i18nGlobal" in n && (s = Or(e.locale.value, {
    messages: s,
    __i18n: n.__i18nGlobal
  }));
  const o = Object.keys(s);
  o.length && o.forEach((r) => {
    e.mergeLocaleMessage(r, s[r]);
  });
  {
    if (G(t.datetimeFormats)) {
      const r = Object.keys(t.datetimeFormats);
      r.length && r.forEach((a) => {
        e.mergeDateTimeFormat(a, t.datetimeFormats[a]);
      });
    }
    if (G(t.numberFormats)) {
      const r = Object.keys(t.numberFormats);
      r.length && r.forEach((a) => {
        e.mergeNumberFormat(a, t.numberFormats[a]);
      });
    }
  }
}
function Eo(e) {
  return R(la, null, e, 0);
}
function bs() {
  return "currentInstance" in Ps ? Ps["currentInstance"] : Be();
}
const vo = "__INTLIFY_META__", bo = () => [], $l = () => !1;
let No = 0;
function ko(e) {
  return (t, n, s, o) => e(n, s, bs() || void 0, o);
}
const Ul = /* @__NO_SIDE_EFFECTS__ */ () => {
  const e = bs();
  let t = null;
  return e && (t = Lr(e)[vo]) ? { [vo]: t } : null;
};
function Vl(e = {}) {
  const { __root: t, __injectWithOption: n } = e, s = t === void 0, o = e.flatJson, r = Ue ? Z : ia;
  let a = ne(e.inheritLocale) ? e.inheritLocale : !0;
  const i = r(
    // prettier-ignore
    t && a ? t.locale.value : M(e.locale) ? e.locale : mn
  ), c = r(
    // prettier-ignore
    t && a ? t.fallbackLocale.value : M(e.fallbackLocale) || se(e.fallbackLocale) || H(e.fallbackLocale) || e.fallbackLocale === !1 ? e.fallbackLocale : i.value
  ), _ = r(Or(i.value, e)), m = r(H(e.datetimeFormats) ? e.datetimeFormats : { [i.value]: {} }), N = r(H(e.numberFormats) ? e.numberFormats : { [i.value]: {} });
  let p = t ? t.missingWarn : ne(e.missingWarn) || _n(e.missingWarn) ? e.missingWarn : !0, A = t ? t.fallbackWarn : ne(e.fallbackWarn) || _n(e.fallbackWarn) ? e.fallbackWarn : !0, $ = t ? t.fallbackRoot : ne(e.fallbackRoot) ? e.fallbackRoot : !0, C = !!e.fallbackFormat, L = Q(e.missing) ? e.missing : null, f = Q(e.missing) ? ko(e.missing) : null, k = Q(e.postTranslation) ? e.postTranslation : null, E = t ? t.warnHtmlMessage : ne(e.warnHtmlMessage) ? e.warnHtmlMessage : !0, v = !!e.escapeParameter;
  const D = t ? t.modifiers : H(e.modifiers) ? e.modifiers : {};
  let P = e.pluralRules || t && t.pluralRules, d;
  d = (() => {
    s && lo(null);
    const y = {
      version: Al,
      locale: i.value,
      fallbackLocale: c.value,
      messages: _.value,
      modifiers: D,
      pluralRules: P,
      missing: f === null ? void 0 : f,
      missingWarn: p,
      fallbackWarn: A,
      fallbackFormat: C,
      unresolving: !0,
      postTranslation: k === null ? void 0 : k,
      warnHtmlMessage: E,
      escapeParameter: v,
      messageResolver: e.messageResolver,
      messageCompiler: e.messageCompiler,
      __meta: { framework: "vue" }
    };
    y.datetimeFormats = m.value, y.numberFormats = N.value, y.__datetimeFormatters = H(d) ? d.__datetimeFormatters : void 0, y.__numberFormatters = H(d) ? d.__numberFormatters : void 0, process.env.NODE_ENV !== "production" && (y.__v_emitter = H(d) ? d.__v_emitter : void 0);
    const S = pl(y);
    return s && lo(S), S;
  })(), Lt(d, i.value, c.value);
  function g() {
    return [
      i.value,
      c.value,
      _.value,
      m.value,
      N.value
    ];
  }
  const w = W({
    get: () => i.value,
    set: (y) => {
      d.locale = y, i.value = y;
    }
  }), I = W({
    get: () => c.value,
    set: (y) => {
      d.fallbackLocale = y, c.value = y, Lt(d, i.value, y);
    }
  }), x = W(() => _.value), oe = /* @__PURE__ */ W(() => m.value), Ae = /* @__PURE__ */ W(() => N.value);
  function Ke() {
    return Q(k) ? k : null;
  }
  function bt(y) {
    k = y, d.postTranslation = y;
  }
  function Nt() {
    return L;
  }
  function De(y) {
    y !== null && (f = ko(y)), L = y, d.missing = f;
  }
  function ue(y, S) {
    return y !== "translate" || !S.resolvedMessage;
  }
  const Pe = (y, S, K, te, Xe, Jt) => {
    g();
    let ct;
    try {
      process.env.NODE_ENV !== "production" || __INTLIFY_PROD_DEVTOOLS__, s || (d.fallbackContext = t ? hl() : void 0), ct = y(d);
    } finally {
      process.env.NODE_ENV !== "production" || __INTLIFY_PROD_DEVTOOLS__, s || (d.fallbackContext = void 0);
    }
    if (K !== "translate exists" && // for not `te` (e.g `t`)
    ae(ct) && ct === kn || K === "translate exists" && !ct) {
      const [Je, na] = S();
      if (process.env.NODE_ENV !== "production" && t && M(Je) && ue(K, na) && ($ && (Cn(A, Je) || yr(p, Je)) && Se(pn(Ie.FALLBACK_TO_ROOT, {
        key: Je,
        type: K
      })), process.env.NODE_ENV !== "production")) {
        const { __v_emitter: As } = d;
        As && $ && As.emit("fallback", {
          type: K,
          key: Je,
          to: "global",
          groupId: `${K}:${Je}`
        });
      }
      return t && $ ? te(t) : Xe(Je);
    } else {
      if (Jt(ct))
        return ct;
      throw Wt(le.UNEXPECTED_RETURN_TYPE);
    }
  };
  function kt(...y) {
    return Pe((S) => Reflect.apply(yo, null, [S, ...y]), () => ns(...y), "translate", (S) => Reflect.apply(S.t, S, [...y]), (S) => S, (S) => M(S));
  }
  function In(...y) {
    const [S, K, te] = y;
    if (te && !G(te))
      throw Wt(le.INVALID_ARGUMENT);
    return kt(S, K, ie({ resolvedMessage: !0 }, te || {}));
  }
  function Sn(...y) {
    return Pe((S) => Reflect.apply(fo, null, [S, ...y]), () => es(...y), "datetime format", (S) => Reflect.apply(S.d, S, [...y]), () => hn, (S) => M(S) || se(S));
  }
  function An(...y) {
    return Pe((S) => Reflect.apply(mo, null, [S, ...y]), () => ts(...y), "number format", (S) => Reflect.apply(S.n, S, [...y]), () => hn, (S) => M(S) || se(S));
  }
  function Dn(y) {
    return y.map((S) => M(S) || ae(S) || ne(S) ? Eo(String(S)) : S);
  }
  const Pn = {
    normalize: Dn,
    interpolate: (y) => y,
    type: "vnode"
  };
  function Yt(...y) {
    return Pe((S) => {
      let K;
      const te = S;
      try {
        te.processor = Pn, K = Reflect.apply(yo, null, [te, ...y]);
      } finally {
        te.processor = null;
      }
      return K;
    }, () => ns(...y), "translate", (S) => S[ss](...y), (S) => [Eo(S)], (S) => se(S));
  }
  function Mn(...y) {
    return Pe((S) => Reflect.apply(mo, null, [S, ...y]), () => ts(...y), "number format", (S) => S[rs](...y), bo, (S) => M(S) || se(S));
  }
  function Xt(...y) {
    return Pe((S) => Reflect.apply(fo, null, [S, ...y]), () => es(...y), "datetime format", (S) => S[os](...y), bo, (S) => M(S) || se(S));
  }
  function Rn(y) {
    P = y, d.pluralRules = P;
  }
  function Fn(y, S) {
    return Pe(() => {
      if (!y)
        return !1;
      const K = M(S) ? S : i.value, te = Ye(K), Xe = d.messageResolver(te, y);
      return we(Xe) || ve(Xe) || M(Xe);
    }, () => [y], "translate exists", (K) => Reflect.apply(K.te, K, [y, S]), $l, (K) => ne(K));
  }
  function Ct(y) {
    let S = null;
    const K = fr(d, c.value, i.value);
    for (let te = 0; te < K.length; te++) {
      const Xe = _.value[K[te]] || {}, Jt = d.messageResolver(Xe, y);
      if (Jt != null) {
        S = Jt;
        break;
      }
    }
    return S;
  }
  function wt(y) {
    const S = Ct(y);
    return S ?? (t ? t.tm(y) || {} : {});
  }
  function Ye(y) {
    return _.value[y] || {};
  }
  function Ot(y, S) {
    if (o) {
      const K = { [y]: S };
      for (const te in K)
        ke(K, te) && jt(K[te]);
      S = K[y];
    }
    _.value[y] = S, d.messages = _.value;
  }
  function $n(y, S) {
    _.value[y] = _.value[y] || {};
    const K = { [y]: S };
    if (o)
      for (const te in K)
        ke(K, te) && jt(K[te]);
    S = K[y], sn(S, _.value[y]), d.messages = _.value;
  }
  function l(y) {
    return m.value[y] || {};
  }
  function u(y, S) {
    m.value[y] = S, d.datetimeFormats = m.value, _o(d, y, S);
  }
  function O(y, S) {
    m.value[y] = ie(m.value[y] || {}, S), d.datetimeFormats = m.value, _o(d, y, S);
  }
  function F(y) {
    return N.value[y] || {};
  }
  function q(y, S) {
    N.value[y] = S, d.numberFormats = N.value, ho(d, y, S);
  }
  function ee(y, S) {
    N.value[y] = ie(N.value[y] || {}, S), d.numberFormats = N.value, ho(d, y, S);
  }
  No++, t && Ue && (tt(t.locale, (y) => {
    a && (i.value = y, d.locale = y, Lt(d, i.value, c.value));
  }), tt(t.fallbackLocale, (y) => {
    a && (c.value = y, d.fallbackLocale = y, Lt(d, i.value, c.value));
  }));
  const z = {
    id: No,
    locale: w,
    fallbackLocale: I,
    get inheritLocale() {
      return a;
    },
    set inheritLocale(y) {
      a = y, y && t && (i.value = t.locale.value, c.value = t.fallbackLocale.value, Lt(d, i.value, c.value));
    },
    get availableLocales() {
      return Object.keys(_.value).sort();
    },
    messages: x,
    get modifiers() {
      return D;
    },
    get pluralRules() {
      return P || {};
    },
    get isGlobal() {
      return s;
    },
    get missingWarn() {
      return p;
    },
    set missingWarn(y) {
      p = y, d.missingWarn = p;
    },
    get fallbackWarn() {
      return A;
    },
    set fallbackWarn(y) {
      A = y, d.fallbackWarn = A;
    },
    get fallbackRoot() {
      return $;
    },
    set fallbackRoot(y) {
      $ = y;
    },
    get fallbackFormat() {
      return C;
    },
    set fallbackFormat(y) {
      C = y, d.fallbackFormat = C;
    },
    get warnHtmlMessage() {
      return E;
    },
    set warnHtmlMessage(y) {
      E = y, d.warnHtmlMessage = y;
    },
    get escapeParameter() {
      return v;
    },
    set escapeParameter(y) {
      v = y, d.escapeParameter = y;
    },
    t: kt,
    getLocaleMessage: Ye,
    setLocaleMessage: Ot,
    mergeLocaleMessage: $n,
    getPostTranslationHandler: Ke,
    setPostTranslationHandler: bt,
    getMissingHandler: Nt,
    setMissingHandler: De,
    [Ml]: Rn
  };
  return z.datetimeFormats = oe, z.numberFormats = Ae, z.rt = In, z.te = Fn, z.tm = wt, z.d = Sn, z.n = An, z.getDateTimeFormat = l, z.setDateTimeFormat = u, z.mergeDateTimeFormat = O, z.getNumberFormat = F, z.setNumberFormat = q, z.mergeNumberFormat = ee, z[wr] = n, z[ss] = Yt, z[os] = Xt, z[rs] = Mn, process.env.NODE_ENV !== "production" && (z[as] = (y) => {
    d.__v_emitter = y;
  }, z[is] = () => {
    d.__v_emitter = void 0;
  }), z;
}
function Co(e, t) {
}
const Ns = {
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
function xl({ slots: e }, t) {
  return t.length === 1 && t[0] === "default" ? (e.default ? e.default() : []).reduce((s, o) => [
    ...s,
    // prettier-ignore
    ...o.type === Ht ? o.children : [o]
  ], []) : t.reduce((n, s) => {
    const o = e[s];
    return o && (n[s] = o()), n;
  }, X());
}
function Tr() {
  return Ht;
}
ie({
  keypath: {
    type: String,
    required: !0
  },
  plural: {
    type: [Number, String],
    validator: (e) => ae(e) || !isNaN(e)
  }
}, Ns);
function Wl(e) {
  return se(e) && !M(e[0]);
}
function Ir(e, t, n, s) {
  const { slots: o, attrs: r } = t;
  return () => {
    const a = { part: !0 };
    let i = X();
    e.locale && (a.locale = e.locale), M(e.format) ? a.key = e.format : G(e.format) && (M(e.format.key) && (a.key = e.format.key), i = Object.keys(e.format).reduce((p, A) => n.includes(A) ? ie(X(), p, { [A]: e.format[A] }) : p, X()));
    const c = s(e.value, a, i);
    let _ = [a.key];
    se(c) ? _ = c.map((p, A) => {
      const $ = o[p.type], C = $ ? $({ [p.type]: p.value, index: A, parts: c }) : [p.value];
      return Wl(C) && (C[0].key = `${p.type}-${A}`), C;
    }) : M(c) && (_ = [c]);
    const m = ie(X(), r), N = M(e.tag) || G(e.tag) ? e.tag : Tr();
    return zo(N, m, _);
  };
}
ie({
  value: {
    type: Number,
    required: !0
  },
  format: {
    type: [String, Object]
  }
}, Ns);
const jl = /* @__PURE__ */ xe("global-vue-i18n");
function wn(e = {}) {
  const t = bs();
  if (t == null)
    throw Wt(le.MUST_BE_CALL_SETUP_TOP);
  if (!t.isCE && t.appContext.app != null && !t.appContext.app.__VUE_I18N_SYMBOL__)
    throw Wt(le.NOT_INSTALLED);
  const n = Bl(t), s = Hl(n), o = Lr(t), r = zl(e, o);
  if (r === "global")
    return Fl(s, e, o), s;
  if (r === "parent") {
    let c = Gl(n, t, e.__useComponent);
    return c == null && (process.env.NODE_ENV !== "production" && Se(pn(Ie.NOT_FOUND_PARENT_SCOPE)), c = s), c;
  }
  const a = n;
  let i = a.__getInstance(t);
  if (i == null) {
    const c = ie({}, e);
    "__i18n" in o && (c.__i18n = o.__i18n), s && (c.__root = s), i = Vl(c), a.__composerExtend && (i[ls] = a.__composerExtend(i)), Yl(a, t, i), a.__setInstance(t, i);
  } else
    process.env.NODE_ENV !== "production" && r === "local" && Se(pn(Ie.DUPLICATE_USE_I18N_CALLING));
  return i;
}
function Bl(e) {
  const t = Fe(e.isCE ? jl : e.appContext.app.__VUE_I18N_SYMBOL__);
  if (!t)
    throw Wt(e.isCE ? le.NOT_INSTALLED_WITH_PROVIDE : le.UNEXPECTED_ERROR);
  return t;
}
function zl(e, t) {
  return Nn(e) ? "__i18n" in t ? "local" : "global" : e.useScope ? e.useScope : "local";
}
function Hl(e) {
  return e.mode === "composition" ? e.global : e.global.__composer;
}
function Gl(e, t, n = !1) {
  let s = null;
  const o = t.root;
  let r = Kl(t, n);
  for (; r != null; ) {
    const a = e;
    if (e.mode === "composition")
      s = a.__getInstance(r);
    else if (__VUE_I18N_LEGACY_API__) {
      const i = a.__getInstance(r);
      i != null && (s = i.__composer, n && s && !s[wr] && (s = null));
    }
    if (s != null || o === r)
      break;
    r = r.parent;
  }
  return s;
}
function Kl(e, t = !1) {
  return e == null ? null : t && e.vnode.ctx || e.parent;
}
function Yl(e, t, n) {
  let s = null;
  zt(() => {
    if (process.env.NODE_ENV !== "production") {
      t.__VUE_I18N__ = n, s = ei();
      const o = n;
      o[as] && o[as](s), s.on("*", Co);
    }
  }, t), Bo(() => {
    const o = n;
    process.env.NODE_ENV !== "production" && (s && s.off("*", Co), o[is] && o[is](), delete t.__VUE_I18N__), e.__deleteInstance(t);
    const r = o[ls];
    r && (r(), delete o[ls]);
  }, t);
}
ie({
  value: {
    type: [Number, Date],
    required: !0
  },
  format: {
    type: [String, Object]
  }
}, Ns);
Dl();
ul(ji);
dl(rl);
fl(fr);
if (process.env.NODE_ENV !== "production" || __INTLIFY_PROD_DEVTOOLS__) {
  const e = Qe();
  e.__INTLIFY__ = !0, Bi(e.__INTLIFY_DEVTOOLS_GLOBAL_HOOK__);
}
process.env.NODE_ENV;
const Sr = Symbol(), on = "el", Xl = "is-", Ze = (e, t, n, s, o) => {
  let r = `${e}-${t}`;
  return n && (r += `-${n}`), s && (r += `__${s}`), o && (r += `--${o}`), r;
}, Ar = Symbol("namespaceContextKey"), Jl = (e) => {
  const t = e || (Be() ? Fe(Ar, Z(on)) : Z(on));
  return W(() => h(t) || on);
}, ks = (e, t) => {
  const n = Jl(t);
  return {
    namespace: n,
    b: (C = "") => Ze(n.value, e, C, "", ""),
    e: (C) => C ? Ze(n.value, e, "", C, "") : "",
    m: (C) => C ? Ze(n.value, e, "", "", C) : "",
    be: (C, L) => C && L ? Ze(n.value, e, C, L, "") : "",
    em: (C, L) => C && L ? Ze(n.value, e, "", C, L) : "",
    bm: (C, L) => C && L ? Ze(n.value, e, C, "", L) : "",
    bem: (C, L, f) => C && L && f ? Ze(n.value, e, C, L, f) : "",
    is: (C, ...L) => {
      const f = L.length >= 1 ? L[0] : !0;
      return C && f ? `${Xl}${C}` : "";
    },
    cssVar: (C) => {
      const L = {};
      for (const f in C)
        C[f] && (L[`--${n.value}-${f}`] = C[f]);
      return L;
    },
    cssVarName: (C) => `--${n.value}-${C}`,
    cssVarBlock: (C) => {
      const L = {};
      for (const f in C)
        C[f] && (L[`--${n.value}-${e}-${f}`] = C[f]);
      return L;
    },
    cssVarBlockName: (C) => `--${n.value}-${e}-${C}`
  };
};
var Zl = typeof global == "object" && global && global.Object === Object && global, ql = typeof self == "object" && self && self.Object === Object && self, Cs = Zl || ql || Function("return this")(), pt = Cs.Symbol, Dr = Object.prototype, Ql = Dr.hasOwnProperty, ec = Dr.toString, Tt = pt ? pt.toStringTag : void 0;
function tc(e) {
  var t = Ql.call(e, Tt), n = e[Tt];
  try {
    e[Tt] = void 0;
    var s = !0;
  } catch {
  }
  var o = ec.call(e);
  return s && (t ? e[Tt] = n : delete e[Tt]), o;
}
var nc = Object.prototype, sc = nc.toString;
function oc(e) {
  return sc.call(e);
}
var rc = "[object Null]", ac = "[object Undefined]", wo = pt ? pt.toStringTag : void 0;
function Pr(e) {
  return e == null ? e === void 0 ? ac : rc : wo && wo in Object(e) ? tc(e) : oc(e);
}
function ic(e) {
  return e != null && typeof e == "object";
}
var lc = "[object Symbol]";
function ws(e) {
  return typeof e == "symbol" || ic(e) && Pr(e) == lc;
}
function cc(e, t) {
  for (var n = -1, s = e == null ? 0 : e.length, o = Array(s); ++n < s; )
    o[n] = t(e[n], n, e);
  return o;
}
var Os = Array.isArray, Oo = pt ? pt.prototype : void 0, Lo = Oo ? Oo.toString : void 0;
function Mr(e) {
  if (typeof e == "string")
    return e;
  if (Os(e))
    return cc(e, Mr) + "";
  if (ws(e))
    return Lo ? Lo.call(e) : "";
  var t = e + "";
  return t == "0" && 1 / e == -1 / 0 ? "-0" : t;
}
function Rr(e) {
  var t = typeof e;
  return e != null && (t == "object" || t == "function");
}
var uc = "[object AsyncFunction]", dc = "[object Function]", fc = "[object GeneratorFunction]", _c = "[object Proxy]";
function mc(e) {
  if (!Rr(e))
    return !1;
  var t = Pr(e);
  return t == dc || t == fc || t == uc || t == _c;
}
var Kn = Cs["__core-js_shared__"], To = function() {
  var e = /[^.]+$/.exec(Kn && Kn.keys && Kn.keys.IE_PROTO || "");
  return e ? "Symbol(src)_1." + e : "";
}();
function hc(e) {
  return !!To && To in e;
}
var pc = Function.prototype, gc = pc.toString;
function yc(e) {
  if (e != null) {
    try {
      return gc.call(e);
    } catch {
    }
    try {
      return e + "";
    } catch {
    }
  }
  return "";
}
var Ec = /[\\^$.*+?()[\]{}|]/g, vc = /^\[object .+?Constructor\]$/, bc = Function.prototype, Nc = Object.prototype, kc = bc.toString, Cc = Nc.hasOwnProperty, wc = RegExp(
  "^" + kc.call(Cc).replace(Ec, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$"
);
function Oc(e) {
  if (!Rr(e) || hc(e))
    return !1;
  var t = mc(e) ? wc : vc;
  return t.test(yc(e));
}
function Lc(e, t) {
  return e?.[t];
}
function Fr(e, t) {
  var n = Lc(e, t);
  return Oc(n) ? n : void 0;
}
function Tc(e, t) {
  return e === t || e !== e && t !== t;
}
var Ic = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/, Sc = /^\w*$/;
function Ac(e, t) {
  if (Os(e))
    return !1;
  var n = typeof e;
  return n == "number" || n == "symbol" || n == "boolean" || e == null || ws(e) ? !0 : Sc.test(e) || !Ic.test(e) || t != null && e in Object(t);
}
var Bt = Fr(Object, "create");
function Dc() {
  this.__data__ = Bt ? Bt(null) : {}, this.size = 0;
}
function Pc(e) {
  var t = this.has(e) && delete this.__data__[e];
  return this.size -= t ? 1 : 0, t;
}
var Mc = "__lodash_hash_undefined__", Rc = Object.prototype, Fc = Rc.hasOwnProperty;
function $c(e) {
  var t = this.__data__;
  if (Bt) {
    var n = t[e];
    return n === Mc ? void 0 : n;
  }
  return Fc.call(t, e) ? t[e] : void 0;
}
var Uc = Object.prototype, Vc = Uc.hasOwnProperty;
function xc(e) {
  var t = this.__data__;
  return Bt ? t[e] !== void 0 : Vc.call(t, e);
}
var Wc = "__lodash_hash_undefined__";
function jc(e, t) {
  var n = this.__data__;
  return this.size += this.has(e) ? 0 : 1, n[e] = Bt && t === void 0 ? Wc : t, this;
}
function rt(e) {
  var t = -1, n = e == null ? 0 : e.length;
  for (this.clear(); ++t < n; ) {
    var s = e[t];
    this.set(s[0], s[1]);
  }
}
rt.prototype.clear = Dc;
rt.prototype.delete = Pc;
rt.prototype.get = $c;
rt.prototype.has = xc;
rt.prototype.set = jc;
function Bc() {
  this.__data__ = [], this.size = 0;
}
function On(e, t) {
  for (var n = e.length; n--; )
    if (Tc(e[n][0], t))
      return n;
  return -1;
}
var zc = Array.prototype, Hc = zc.splice;
function Gc(e) {
  var t = this.__data__, n = On(t, e);
  if (n < 0)
    return !1;
  var s = t.length - 1;
  return n == s ? t.pop() : Hc.call(t, n, 1), --this.size, !0;
}
function Kc(e) {
  var t = this.__data__, n = On(t, e);
  return n < 0 ? void 0 : t[n][1];
}
function Yc(e) {
  return On(this.__data__, e) > -1;
}
function Xc(e, t) {
  var n = this.__data__, s = On(n, e);
  return s < 0 ? (++this.size, n.push([e, t])) : n[s][1] = t, this;
}
function vt(e) {
  var t = -1, n = e == null ? 0 : e.length;
  for (this.clear(); ++t < n; ) {
    var s = e[t];
    this.set(s[0], s[1]);
  }
}
vt.prototype.clear = Bc;
vt.prototype.delete = Gc;
vt.prototype.get = Kc;
vt.prototype.has = Yc;
vt.prototype.set = Xc;
var Jc = Fr(Cs, "Map");
function Zc() {
  this.size = 0, this.__data__ = {
    hash: new rt(),
    map: new (Jc || vt)(),
    string: new rt()
  };
}
function qc(e) {
  var t = typeof e;
  return t == "string" || t == "number" || t == "symbol" || t == "boolean" ? e !== "__proto__" : e === null;
}
function Ln(e, t) {
  var n = e.__data__;
  return qc(t) ? n[typeof t == "string" ? "string" : "hash"] : n.map;
}
function Qc(e) {
  var t = Ln(this, e).delete(e);
  return this.size -= t ? 1 : 0, t;
}
function eu(e) {
  return Ln(this, e).get(e);
}
function tu(e) {
  return Ln(this, e).has(e);
}
function nu(e, t) {
  var n = Ln(this, e), s = n.size;
  return n.set(e, t), this.size += n.size == s ? 0 : 1, this;
}
function it(e) {
  var t = -1, n = e == null ? 0 : e.length;
  for (this.clear(); ++t < n; ) {
    var s = e[t];
    this.set(s[0], s[1]);
  }
}
it.prototype.clear = Zc;
it.prototype.delete = Qc;
it.prototype.get = eu;
it.prototype.has = tu;
it.prototype.set = nu;
var su = "Expected a function";
function Ls(e, t) {
  if (typeof e != "function" || t != null && typeof t != "function")
    throw new TypeError(su);
  var n = function() {
    var s = arguments, o = t ? t.apply(this, s) : s[0], r = n.cache;
    if (r.has(o))
      return r.get(o);
    var a = e.apply(this, s);
    return n.cache = r.set(o, a) || r, a;
  };
  return n.cache = new (Ls.Cache || it)(), n;
}
Ls.Cache = it;
var ou = 500;
function ru(e) {
  var t = Ls(e, function(s) {
    return n.size === ou && n.clear(), s;
  }), n = t.cache;
  return t;
}
var au = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g, iu = /\\(\\)?/g, lu = ru(function(e) {
  var t = [];
  return e.charCodeAt(0) === 46 && t.push(""), e.replace(au, function(n, s, o, r) {
    t.push(o ? r.replace(iu, "$1") : s || n);
  }), t;
});
function cu(e) {
  return e == null ? "" : Mr(e);
}
function uu(e, t) {
  return Os(e) ? e : Ac(e, t) ? [e] : lu(cu(e));
}
function du(e) {
  if (typeof e == "string" || ws(e))
    return e;
  var t = e + "";
  return t == "0" && 1 / e == -1 / 0 ? "-0" : t;
}
function fu(e, t) {
  t = uu(t, e);
  for (var n = 0, s = t.length; e != null && n < s; )
    e = e[du(t[n++])];
  return n && n == s ? e : void 0;
}
function _u(e, t, n) {
  var s = e == null ? void 0 : fu(e, t);
  return s === void 0 ? n : s;
}
function mu(e) {
  for (var t = -1, n = e == null ? 0 : e.length, s = {}; ++t < n; ) {
    var o = e[t];
    s[o[0]] = o[1];
  }
  return s;
}
const $r = (e) => e === void 0, Io = (e) => typeof e == "boolean", at = (e) => typeof e == "number", cs = (e) => typeof Element > "u" ? !1 : e instanceof Element, hu = (e) => ze(e) ? !Number.isNaN(Number(e)) : !1;
var So;
const lt = typeof window < "u", pu = (e) => typeof e == "string", gu = () => {
};
lt && ((So = window?.navigator) != null && So.userAgent) && /iP(ad|hone|od)/.test(window.navigator.userAgent);
function Ts(e) {
  return typeof e == "function" ? e() : h(e);
}
function yu(e) {
  return e;
}
function Is(e) {
  return Wo() ? (jo(e), !0) : !1;
}
function Eu(e, t = !0) {
  Be() ? zt(e) : t ? e() : an(e);
}
function Ur(e, t, n = {}) {
  const {
    immediate: s = !0
  } = n, o = Z(!1);
  let r = null;
  function a() {
    r && (clearTimeout(r), r = null);
  }
  function i() {
    o.value = !1, a();
  }
  function c(..._) {
    a(), o.value = !0, r = setTimeout(() => {
      o.value = !1, r = null, e(..._);
    }, Ts(t));
  }
  return s && (o.value = !0, lt && c()), Is(i), {
    isPending: ca(o),
    start: c,
    stop: i
  };
}
function Vr(e) {
  var t;
  const n = Ts(e);
  return (t = n?.$el) != null ? t : n;
}
const xr = lt ? window : void 0;
function Wr(...e) {
  let t, n, s, o;
  if (pu(e[0]) || Array.isArray(e[0]) ? ([n, s, o] = e, t = xr) : [t, n, s, o] = e, !t)
    return gu;
  Array.isArray(n) || (n = [n]), Array.isArray(s) || (s = [s]);
  const r = [], a = () => {
    r.forEach((m) => m()), r.length = 0;
  }, i = (m, N, p, A) => (m.addEventListener(N, p, A), () => m.removeEventListener(N, p, A)), c = tt(() => [Vr(t), Ts(o)], ([m, N]) => {
    a(), m && r.push(...n.flatMap((p) => s.map((A) => i(m, p, A, N))));
  }, { immediate: !0, flush: "post" }), _ = () => {
    c(), a();
  };
  return Is(_), _;
}
function vu(e, t = !1) {
  const n = Z(), s = () => n.value = !!e();
  return s(), Eu(s, t), n;
}
const Ao = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {}, Do = "__vueuse_ssr_handlers__";
Ao[Do] = Ao[Do] || {};
var Po = Object.getOwnPropertySymbols, bu = Object.prototype.hasOwnProperty, Nu = Object.prototype.propertyIsEnumerable, ku = (e, t) => {
  var n = {};
  for (var s in e)
    bu.call(e, s) && t.indexOf(s) < 0 && (n[s] = e[s]);
  if (e != null && Po)
    for (var s of Po(e))
      t.indexOf(s) < 0 && Nu.call(e, s) && (n[s] = e[s]);
  return n;
};
function Cu(e, t, n = {}) {
  const s = n, { window: o = xr } = s, r = ku(s, ["window"]);
  let a;
  const i = vu(() => o && "ResizeObserver" in o), c = () => {
    a && (a.disconnect(), a = void 0);
  }, _ = tt(() => Vr(e), (N) => {
    c(), i.value && o && N && (a = new ResizeObserver(t), a.observe(N, r));
  }, { immediate: !0, flush: "post" }), m = () => {
    c(), _();
  };
  return Is(m), {
    isSupported: i,
    stop: m
  };
}
var Mo;
(function(e) {
  e.UP = "UP", e.RIGHT = "RIGHT", e.DOWN = "DOWN", e.LEFT = "LEFT", e.NONE = "NONE";
})(Mo || (Mo = {}));
var wu = Object.defineProperty, Ro = Object.getOwnPropertySymbols, Ou = Object.prototype.hasOwnProperty, Lu = Object.prototype.propertyIsEnumerable, Fo = (e, t, n) => t in e ? wu(e, t, { enumerable: !0, configurable: !0, writable: !0, value: n }) : e[t] = n, Tu = (e, t) => {
  for (var n in t || (t = {}))
    Ou.call(t, n) && Fo(e, n, t[n]);
  if (Ro)
    for (var n of Ro(t))
      Lu.call(t, n) && Fo(e, n, t[n]);
  return e;
};
const Iu = {
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
Tu({
  linear: yu
}, Iu);
class Su extends Error {
  constructor(t) {
    super(t), this.name = "ElementPlusError";
  }
}
function Gt(e, t) {
  if (process.env.NODE_ENV !== "production") {
    const n = ze(e) ? new Su(`[${e}] ${t}`) : e;
    console.warn(n);
  }
}
const $o = {
  current: 0
}, Uo = Z(0), jr = 2e3, Vo = Symbol("elZIndexContextKey"), Br = Symbol("zIndexContextKey"), Au = (e) => {
  const t = Be() ? Fe(Vo, $o) : $o, n = e || (Be() ? Fe(Br, void 0) : void 0), s = W(() => {
    const a = h(n);
    return at(a) ? a : jr;
  }), o = W(() => s.value + Uo.value), r = () => (t.current++, Uo.value = t.current, o.value);
  return !lt && !Fe(Vo) && Gt("ZIndexInjection", `Looks like you are using server rendering, you must provide a z-index provider to ensure the hydration process to be succeed
usage: app.provide(ZINDEX_INJECTION_KEY, { current: 0 })`), {
    initialZIndex: s,
    currentZIndex: o,
    nextZIndex: r
  };
};
var Du = {
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
const Pu = (e) => (t, n) => Mu(t, n, h(e)), Mu = (e, t, n) => _u(n, e, e).replace(/\{(\w+)\}/g, (s, o) => {
  var r;
  return `${(r = t?.[o]) != null ? r : `{${o}}`}`;
}), Ru = (e) => {
  const t = W(() => h(e).name), n = mt(e) ? e : Z(e);
  return {
    lang: t,
    locale: n,
    t: Pu(e)
  };
}, zr = Symbol("localeContextKey"), Fu = (e) => {
  const t = e || Fe(zr, Z());
  return Ru(W(() => t.value || Du));
}, Hr = "__epPropKey", $e = (e) => e, $u = (e) => Ho(e) && !!e[Hr], Gr = (e, t) => {
  if (!Ho(e) || $u(e))
    return e;
  const { values: n, required: s, default: o, type: r, validator: a } = e, c = {
    type: r,
    required: !!s,
    validator: n || a ? (_) => {
      let m = !1, N = [];
      if (n && (N = Array.from(n), Ms(e, "default") && N.push(o), m || (m = N.includes(_))), a && (m || (m = a(_))), !m && N.length > 0) {
        const p = [...new Set(N)].map((A) => JSON.stringify(A)).join(", ");
        ua(`Invalid prop: validation failed${t ? ` for prop "${t}"` : ""}. Expected one of [${p}], got value ${JSON.stringify(_)}.`);
      }
      return m;
    } : void 0,
    [Hr]: !0
  };
  return Ms(e, "default") && (c.default = o), c;
}, Kt = (e) => mu(Object.entries(e).map(([t, n]) => [
  t,
  Gr(n, t)
])), Uu = ["", "default", "small", "large"], O_ = Gr({
  type: String,
  values: Uu,
  required: !1
}), Vu = Symbol("size"), xu = Symbol("emptyValuesContextKey"), L_ = Kt({
  emptyValues: Array,
  valueOnClear: {
    type: [String, Number, Boolean, Function],
    default: void 0,
    validator: (e) => Ft(e) ? !e() : !e
  }
}), xo = (e) => Object.keys(e), gn = Z();
function Kr(e, t = void 0) {
  return Be() ? Fe(Sr, gn) : gn;
}
function Yr(e, t) {
  const n = Kr(), s = ks(e, W(() => {
    var i;
    return ((i = n.value) == null ? void 0 : i.namespace) || on;
  })), o = Fu(W(() => {
    var i;
    return (i = n.value) == null ? void 0 : i.locale;
  })), r = Au(W(() => {
    var i;
    return ((i = n.value) == null ? void 0 : i.zIndex) || jr;
  })), a = W(() => {
    var i;
    return h(t) || ((i = n.value) == null ? void 0 : i.size) || "";
  });
  return Wu(W(() => h(n) || {})), {
    ns: s,
    locale: o,
    zIndex: r,
    size: a
  };
}
const Wu = (e, t, n = !1) => {
  var s;
  const o = !!Be(), r = o ? Kr() : void 0, a = (s = void 0) != null ? s : o ? da : void 0;
  if (!a) {
    Gt("provideGlobalConfig", "provideGlobalConfig() can only be used inside setup().");
    return;
  }
  const i = W(() => {
    const c = h(e);
    return r?.value ? ju(r.value, c) : c;
  });
  return a(Sr, i), a(zr, W(() => i.value.locale)), a(Ar, W(() => i.value.namespace)), a(Br, W(() => i.value.zIndex)), a(Vu, {
    size: W(() => i.value.size || "")
  }), a(xu, W(() => ({
    emptyValues: i.value.emptyValues,
    valueOnClear: i.value.valueOnClear
  }))), (n || !gn.value) && (gn.value = i.value), i;
}, ju = (e, t) => {
  const n = [.../* @__PURE__ */ new Set([...xo(e), ...xo(t)])], s = {};
  for (const o of n)
    s[o] = t[o] !== void 0 ? t[o] : e[o];
  return s;
};
var Tn = (e, t) => {
  const n = e.__vccOpts || e;
  for (const [s, o] of t)
    n[s] = o;
  return n;
};
const Bu = "utils/dom/style";
function us(e, t = "px") {
  if (!e)
    return "";
  if (at(e) || hu(e))
    return `${e}${t}`;
  if (ze(e))
    return e;
  Gt(Bu, "binding value must be a string or number");
}
const Xr = (e, t) => (e.install = (n) => {
  for (const s of [e, ...Object.values({})])
    n.component(s.name, s);
}, e), Jr = (e, t) => (e.install = (n) => {
  e._context = n._context, n.config.globalProperties[t] = e;
}, e), zu = Kt({
  size: {
    type: $e([Number, String])
  },
  color: {
    type: String
  }
}), Hu = ce({
  name: "ElIcon",
  inheritAttrs: !1
}), Gu = /* @__PURE__ */ ce({
  ...Hu,
  props: zu,
  setup(e) {
    const t = e, n = ks("icon"), s = W(() => {
      const { size: o, color: r } = t;
      return !o && !r ? {} : {
        fontSize: $r(o) ? void 0 : us(o),
        "--color": r
      };
    });
    return (o, r) => (B(), J("i", fa({
      class: h(n).b(),
      style: h(s)
    }, o.$attrs), [
      $t(o.$slots, "default")
    ], 16));
  }
});
var Ku = /* @__PURE__ */ Tn(Gu, [["__file", "icon.vue"]]);
const yn = Xr(Ku);
/*! Element Plus Icons Vue v2.3.1 */
var Yu = /* @__PURE__ */ ce({
  name: "CircleCloseFilled",
  __name: "circle-close-filled",
  setup(e) {
    return (t, n) => (B(), J("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 1024 1024"
    }, [
      b("path", {
        fill: "currentColor",
        d: "M512 64a448 448 0 1 1 0 896 448 448 0 0 1 0-896m0 393.664L407.936 353.6a38.4 38.4 0 1 0-54.336 54.336L457.664 512 353.6 616.064a38.4 38.4 0 1 0 54.336 54.336L512 566.336 616.064 670.4a38.4 38.4 0 1 0 54.336-54.336L566.336 512 670.4 407.936a38.4 38.4 0 1 0-54.336-54.336z"
      })
    ]));
  }
}), Xu = Yu, Ju = /* @__PURE__ */ ce({
  name: "Close",
  __name: "close",
  setup(e) {
    return (t, n) => (B(), J("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 1024 1024"
    }, [
      b("path", {
        fill: "currentColor",
        d: "M764.288 214.592 512 466.88 259.712 214.592a31.936 31.936 0 0 0-45.12 45.12L466.752 512 214.528 764.224a31.936 31.936 0 1 0 45.12 45.184L512 557.184l252.288 252.288a31.936 31.936 0 0 0 45.12-45.12L557.12 512.064l252.288-252.352a31.936 31.936 0 1 0-45.12-45.184z"
      })
    ]));
  }
}), Zr = Ju, Zu = /* @__PURE__ */ ce({
  name: "InfoFilled",
  __name: "info-filled",
  setup(e) {
    return (t, n) => (B(), J("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 1024 1024"
    }, [
      b("path", {
        fill: "currentColor",
        d: "M512 64a448 448 0 1 1 0 896.064A448 448 0 0 1 512 64m67.2 275.072c33.28 0 60.288-23.104 60.288-57.344s-27.072-57.344-60.288-57.344c-33.28 0-60.16 23.104-60.16 57.344s26.88 57.344 60.16 57.344M590.912 699.2c0-6.848 2.368-24.64 1.024-34.752l-52.608 60.544c-10.88 11.456-24.512 19.392-30.912 17.28a12.992 12.992 0 0 1-8.256-14.72l87.68-276.992c7.168-35.136-12.544-67.2-54.336-71.296-44.096 0-108.992 44.736-148.48 101.504 0 6.784-1.28 23.68.064 33.792l52.544-60.608c10.88-11.328 23.552-19.328 29.952-17.152a12.8 12.8 0 0 1 7.808 16.128L388.48 728.576c-10.048 32.256 8.96 63.872 55.04 71.04 67.84 0 107.904-43.648 147.456-100.416z"
      })
    ]));
  }
}), qu = Zu, Qu = /* @__PURE__ */ ce({
  name: "SuccessFilled",
  __name: "success-filled",
  setup(e) {
    return (t, n) => (B(), J("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 1024 1024"
    }, [
      b("path", {
        fill: "currentColor",
        d: "M512 64a448 448 0 1 1 0 896 448 448 0 0 1 0-896m-55.808 536.384-99.52-99.584a38.4 38.4 0 1 0-54.336 54.336l126.72 126.72a38.272 38.272 0 0 0 54.336 0l262.4-262.464a38.4 38.4 0 1 0-54.272-54.336z"
      })
    ]));
  }
}), ed = Qu, td = /* @__PURE__ */ ce({
  name: "WarningFilled",
  __name: "warning-filled",
  setup(e) {
    return (t, n) => (B(), J("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 1024 1024"
    }, [
      b("path", {
        fill: "currentColor",
        d: "M512 64a448 448 0 1 1 0 896 448 448 0 0 1 0-896m0 192a58.432 58.432 0 0 0-58.24 63.744l23.36 256.384a35.072 35.072 0 0 0 69.76 0l23.296-256.384A58.432 58.432 0 0 0 512 256m0 512a51.2 51.2 0 1 0 0-102.4 51.2 51.2 0 0 0 0 102.4"
      })
    ]));
  }
}), nd = td;
const qr = $e([
  String,
  Object,
  Function
]), sd = {
  Close: Zr
}, od = {
  Close: Zr
}, En = {
  success: ed,
  warning: nd,
  error: Xu,
  info: qu
}, rd = (e) => e, rn = {
  esc: "Escape",
  delete: "Delete",
  backspace: "Backspace"
}, ad = Kt({
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
    type: $e([String, Object, Array])
  },
  offset: {
    type: $e(Array),
    default: [0, 0]
  },
  badgeClass: {
    type: String
  }
}), id = ce({
  name: "ElBadge"
}), ld = /* @__PURE__ */ ce({
  ...id,
  props: ad,
  setup(e, { expose: t }) {
    const n = e, s = ks("badge"), o = W(() => n.isDot ? "" : at(n.value) && at(n.max) ? n.max < n.value ? `${n.max}+` : `${n.value}` : `${n.value}`), r = W(() => {
      var a, i, c, _, m;
      return [
        {
          backgroundColor: n.color,
          marginRight: us(-((i = (a = n.offset) == null ? void 0 : a[0]) != null ? i : 0)),
          marginTop: us((_ = (c = n.offset) == null ? void 0 : c[1]) != null ? _ : 0)
        },
        (m = n.badgeStyle) != null ? m : {}
      ];
    });
    return t({
      content: o
    }), (a, i) => (B(), J("div", {
      class: re(h(s).b())
    }, [
      $t(a.$slots, "default"),
      R(_s, {
        name: `${h(s).namespace.value}-zoom-in-center`,
        persisted: ""
      }, {
        default: et(() => [
          Ee(b("sup", {
            class: re([
              h(s).e("content"),
              h(s).em("content", a.type),
              h(s).is("fixed", !!a.$slots.default),
              h(s).is("dot", a.isDot),
              h(s).is("hide-zero", !a.showZero && n.value === 0),
              a.badgeClass
            ]),
            style: ln(h(r))
          }, [
            $t(a.$slots, "content", { value: h(o) }, () => [
              qe(U(h(o)), 1)
            ])
          ], 6), [
            [cn, !a.hidden && (h(o) || a.isDot || a.$slots.content)]
          ])
        ]),
        _: 3
      }, 8, ["name"])
    ], 2));
  }
});
var cd = /* @__PURE__ */ Tn(ld, [["__file", "badge.vue"]]);
const ud = Xr(cd), Te = {}, Qr = ["success", "info", "warning", "error"], de = rd({
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
  appendTo: lt ? document.body : void 0
}), dd = Kt({
  customClass: {
    type: String,
    default: de.customClass
  },
  center: {
    type: Boolean,
    default: de.center
  },
  dangerouslyUseHTMLString: {
    type: Boolean,
    default: de.dangerouslyUseHTMLString
  },
  duration: {
    type: Number,
    default: de.duration
  },
  icon: {
    type: qr,
    default: de.icon
  },
  id: {
    type: String,
    default: de.id
  },
  message: {
    type: $e([
      String,
      Object,
      Function
    ]),
    default: de.message
  },
  onClose: {
    type: $e(Function),
    default: de.onClose
  },
  showClose: {
    type: Boolean,
    default: de.showClose
  },
  type: {
    type: String,
    values: Qr,
    default: de.type
  },
  plain: {
    type: Boolean,
    default: de.plain
  },
  offset: {
    type: Number,
    default: de.offset
  },
  zIndex: {
    type: Number,
    default: de.zIndex
  },
  grouping: {
    type: Boolean,
    default: de.grouping
  },
  repeatNum: {
    type: Number,
    default: de.repeatNum
  }
}), fd = {
  destroy: () => !0
}, Ce = _a([]), _d = (e) => {
  const t = Ce.findIndex((o) => o.id === e), n = Ce[t];
  let s;
  return t > 0 && (s = Ce[t - 1]), { current: n, prev: s };
}, md = (e) => {
  const { prev: t } = _d(e);
  return t ? t.vm.exposed.bottom.value : 0;
}, hd = (e, t) => Ce.findIndex((s) => s.id === e) > 0 ? 16 : t, pd = ce({
  name: "ElMessage"
}), gd = /* @__PURE__ */ ce({
  ...pd,
  props: dd,
  emits: fd,
  setup(e, { expose: t }) {
    const n = e, { Close: s } = od, { ns: o, zIndex: r } = Yr("message"), { currentZIndex: a, nextZIndex: i } = r, c = Z(), _ = Z(!1), m = Z(0);
    let N;
    const p = W(() => n.type ? n.type === "error" ? "danger" : n.type : "info"), A = W(() => {
      const d = n.type;
      return { [o.bm("icon", d)]: d && En[d] };
    }), $ = W(() => n.icon || En[n.type] || ""), C = W(() => md(n.id)), L = W(() => hd(n.id, n.offset) + C.value), f = W(() => m.value + L.value), k = W(() => ({
      top: `${L.value}px`,
      zIndex: a.value
    }));
    function E() {
      n.duration !== 0 && ({ stop: N } = Ur(() => {
        D();
      }, n.duration));
    }
    function v() {
      N?.();
    }
    function D() {
      _.value = !1;
    }
    function P({ code: d }) {
      d === rn.esc && D();
    }
    return zt(() => {
      E(), i(), _.value = !0;
    }), tt(() => n.repeatNum, () => {
      v(), E();
    }), Wr(document, "keydown", P), Cu(c, () => {
      m.value = c.value.getBoundingClientRect().height;
    }), t({
      visible: _,
      bottom: f,
      close: D
    }), (d, j) => (B(), Ne(_s, {
      name: h(o).b("fade"),
      onBeforeLeave: d.onClose,
      onAfterLeave: (g) => d.$emit("destroy"),
      persisted: ""
    }, {
      default: et(() => [
        Ee(b("div", {
          id: d.id,
          ref_key: "messageRef",
          ref: c,
          class: re([
            h(o).b(),
            { [h(o).m(d.type)]: d.type },
            h(o).is("center", d.center),
            h(o).is("closable", d.showClose),
            h(o).is("plain", d.plain),
            d.customClass
          ]),
          style: ln(h(k)),
          role: "alert",
          onMouseenter: v,
          onMouseleave: E
        }, [
          d.repeatNum > 1 ? (B(), Ne(h(ud), {
            key: 0,
            value: d.repeatNum,
            type: h(p),
            class: re(h(o).e("badge"))
          }, null, 8, ["value", "type", "class"])) : Y("v-if", !0),
          h($) ? (B(), Ne(h(yn), {
            key: 1,
            class: re([h(o).e("icon"), h(A)])
          }, {
            default: et(() => [
              (B(), Ne(Go(h($))))
            ]),
            _: 1
          }, 8, ["class"])) : Y("v-if", !0),
          $t(d.$slots, "default", {}, () => [
            d.dangerouslyUseHTMLString ? (B(), J(Ht, { key: 1 }, [
              Y(" Caution here, message could've been compromised, never use user's input as message "),
              b("p", {
                class: re(h(o).e("content")),
                innerHTML: d.message
              }, null, 10, ["innerHTML"])
            ], 2112)) : (B(), J("p", {
              key: 0,
              class: re(h(o).e("content"))
            }, U(d.message), 3))
          ]),
          d.showClose ? (B(), Ne(h(yn), {
            key: 2,
            class: re(h(o).e("closeBtn")),
            onClick: Ko(D, ["stop"])
          }, {
            default: et(() => [
              R(h(s))
            ]),
            _: 1
          }, 8, ["class", "onClick"])) : Y("v-if", !0)
        ], 46, ["id"]), [
          [cn, _.value]
        ])
      ]),
      _: 3
    }, 8, ["name", "onBeforeLeave", "onAfterLeave"]));
  }
});
var yd = /* @__PURE__ */ Tn(gd, [["__file", "message.vue"]]);
let Ed = 1;
const ea = (e) => {
  const t = !e || ze(e) || Ut(e) || Ft(e) ? { message: e } : e, n = {
    ...de,
    ...t
  };
  if (!n.appendTo)
    n.appendTo = document.body;
  else if (ze(n.appendTo)) {
    let s = document.querySelector(n.appendTo);
    cs(s) || (Gt("ElMessage", "the appendTo option is not an HTMLElement. Falling back to document.body."), s = document.body), n.appendTo = s;
  }
  return Io(Te.grouping) && !n.grouping && (n.grouping = Te.grouping), at(Te.duration) && n.duration === 3e3 && (n.duration = Te.duration), at(Te.offset) && n.offset === 16 && (n.offset = Te.offset), Io(Te.showClose) && !n.showClose && (n.showClose = Te.showClose), n;
}, vd = (e) => {
  const t = Ce.indexOf(e);
  if (t === -1)
    return;
  Ce.splice(t, 1);
  const { handler: n } = e;
  n.close();
}, bd = ({ appendTo: e, ...t }, n) => {
  const s = `message_${Ed++}`, o = t.onClose, r = document.createElement("div"), a = {
    ...t,
    id: s,
    onClose: () => {
      o?.(), vd(m);
    },
    onDestroy: () => {
      un(null, r);
    }
  }, i = R(yd, a, Ft(a.message) || Ut(a.message) ? {
    default: Ft(a.message) ? a.message : () => a.message
  } : null);
  i.appContext = n || gt._context, un(i, r), e.appendChild(r.firstElementChild);
  const c = i.component, m = {
    id: s,
    vnode: i,
    vm: c,
    handler: {
      close: () => {
        c.exposed.visible.value = !1;
      }
    },
    props: i.component.props
  };
  return m;
}, gt = (e = {}, t) => {
  if (!lt)
    return { close: () => {
    } };
  const n = ea(e);
  if (n.grouping && Ce.length) {
    const o = Ce.find(({ vnode: r }) => {
      var a;
      return ((a = r.props) == null ? void 0 : a.message) === n.message;
    });
    if (o)
      return o.props.repeatNum += 1, o.props.type = n.type, o.handler;
  }
  if (at(Te.max) && Ce.length >= Te.max)
    return { close: () => {
    } };
  const s = bd(n, t);
  return Ce.push(s), s.handler;
};
Qr.forEach((e) => {
  gt[e] = (t = {}, n) => {
    const s = ea(t);
    return gt({ ...s, type: e }, n);
  };
});
function Nd(e) {
  for (const t of Ce)
    (!e || e === t.props.type) && t.handler.close();
}
gt.closeAll = Nd;
gt._context = null;
const kd = Jr(gt, "$message"), ta = [
  "success",
  "info",
  "warning",
  "error"
], Cd = Kt({
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
    type: qr
  },
  id: {
    type: String,
    default: ""
  },
  message: {
    type: $e([
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
    type: $e(Function),
    default: () => {
    }
  },
  onClose: {
    type: $e(Function),
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
    values: [...ta, ""],
    default: ""
  },
  zIndex: Number
}), wd = {
  destroy: () => !0
}, Od = ce({
  name: "ElNotification"
}), Ld = /* @__PURE__ */ ce({
  ...Od,
  props: Cd,
  emits: wd,
  setup(e, { expose: t }) {
    const n = e, { ns: s, zIndex: o } = Yr("notification"), { nextZIndex: r, currentZIndex: a } = o, { Close: i } = sd, c = Z(!1);
    let _;
    const m = W(() => {
      const E = n.type;
      return E && En[n.type] ? s.m(E) : "";
    }), N = W(() => n.type && En[n.type] || n.icon), p = W(() => n.position.endsWith("right") ? "right" : "left"), A = W(() => n.position.startsWith("top") ? "top" : "bottom"), $ = W(() => {
      var E;
      return {
        [A.value]: `${n.offset}px`,
        zIndex: (E = n.zIndex) != null ? E : a.value
      };
    });
    function C() {
      n.duration > 0 && ({ stop: _ } = Ur(() => {
        c.value && f();
      }, n.duration));
    }
    function L() {
      _?.();
    }
    function f() {
      c.value = !1;
    }
    function k({ code: E }) {
      E === rn.delete || E === rn.backspace ? L() : E === rn.esc ? c.value && f() : C();
    }
    return zt(() => {
      C(), r(), c.value = !0;
    }), Wr(document, "keydown", k), t({
      visible: c,
      close: f
    }), (E, v) => (B(), Ne(_s, {
      name: h(s).b("fade"),
      onBeforeLeave: E.onClose,
      onAfterLeave: (D) => E.$emit("destroy"),
      persisted: ""
    }, {
      default: et(() => [
        Ee(b("div", {
          id: E.id,
          class: re([h(s).b(), E.customClass, h(p)]),
          style: ln(h($)),
          role: "alert",
          onMouseenter: L,
          onMouseleave: C,
          onClick: E.onClick
        }, [
          h(N) ? (B(), Ne(h(yn), {
            key: 0,
            class: re([h(s).e("icon"), h(m)])
          }, {
            default: et(() => [
              (B(), Ne(Go(h(N))))
            ]),
            _: 1
          }, 8, ["class"])) : Y("v-if", !0),
          b("div", {
            class: re(h(s).e("group"))
          }, [
            b("h2", {
              class: re(h(s).e("title")),
              textContent: U(E.title)
            }, null, 10, ["textContent"]),
            Ee(b("div", {
              class: re(h(s).e("content")),
              style: ln(E.title ? void 0 : { margin: 0 })
            }, [
              $t(E.$slots, "default", {}, () => [
                E.dangerouslyUseHTMLString ? (B(), J(Ht, { key: 1 }, [
                  Y(" Caution here, message could've been compromised, never use user's input as message "),
                  b("p", { innerHTML: E.message }, null, 8, ["innerHTML"])
                ], 2112)) : (B(), J("p", { key: 0 }, U(E.message), 1))
              ])
            ], 6), [
              [cn, E.message]
            ]),
            E.showClose ? (B(), Ne(h(yn), {
              key: 0,
              class: re(h(s).e("closeBtn")),
              onClick: Ko(f, ["stop"])
            }, {
              default: et(() => [
                R(h(i))
              ]),
              _: 1
            }, 8, ["class", "onClick"])) : Y("v-if", !0)
          ], 2)
        ], 46, ["id", "onClick"]), [
          [cn, c.value]
        ])
      ]),
      _: 3
    }, 8, ["name", "onBeforeLeave", "onAfterLeave"]));
  }
});
var Td = /* @__PURE__ */ Tn(Ld, [["__file", "notification.vue"]]);
const vn = {
  "top-left": [],
  "top-right": [],
  "bottom-left": [],
  "bottom-right": []
}, ds = 16;
let Id = 1;
const yt = function(e = {}, t) {
  if (!lt)
    return { close: () => {
    } };
  (ze(e) || Ut(e)) && (e = { message: e });
  const n = e.position || "top-right";
  let s = e.offset || 0;
  vn[n].forEach(({ vm: m }) => {
    var N;
    s += (((N = m.el) == null ? void 0 : N.offsetHeight) || 0) + ds;
  }), s += ds;
  const o = `notification_${Id++}`, r = e.onClose, a = {
    ...e,
    offset: s,
    id: o,
    onClose: () => {
      Sd(o, n, r);
    }
  };
  let i = document.body;
  cs(e.appendTo) ? i = e.appendTo : ze(e.appendTo) && (i = document.querySelector(e.appendTo)), cs(i) || (Gt("ElNotification", "the appendTo option is not an HTMLElement. Falling back to document.body."), i = document.body);
  const c = document.createElement("div"), _ = R(Td, a, Ft(a.message) ? a.message : Ut(a.message) ? () => a.message : null);
  return _.appContext = $r(t) ? yt._context : t, _.props.onDestroy = () => {
    un(null, c);
  }, un(_, c), vn[n].push({ vm: _ }), i.appendChild(c.firstElementChild), {
    close: () => {
      _.component.exposed.visible.value = !1;
    }
  };
};
ta.forEach((e) => {
  yt[e] = (t = {}, n) => ((ze(t) || Ut(t)) && (t = {
    message: t
  }), yt({ ...t, type: e }, n));
});
function Sd(e, t, n) {
  const s = vn[t], o = s.findIndex(({ vm: _ }) => {
    var m;
    return ((m = _.component) == null ? void 0 : m.props.id) === e;
  });
  if (o === -1)
    return;
  const { vm: r } = s[o];
  if (!r)
    return;
  n?.(r);
  const a = r.el.offsetHeight, i = t.split("-")[0];
  s.splice(o, 1);
  const c = s.length;
  if (!(c < 1))
    for (let _ = o; _ < c; _++) {
      const { el: m, component: N } = s[_].vm, p = Number.parseInt(m.style[i], 10) - a - ds;
      N.props.offset = p;
    }
}
function Ad() {
  for (const e of Object.values(vn))
    e.forEach(({ vm: t }) => {
      t.component.exposed.visible.value = !1;
    });
}
yt.closeAll = Ad;
yt._context = null;
const Dd = Jr(yt, "$notify"), It = {
  /**
   * 显示消息提示（简化版）
   * @param message 消息内容
   * @param type 消息类型，默认 success
   * @param position 显示位置，默认 center
   * @param duration 显示时长（毫秒），默认 3000
   */
  msg(e, t = "success", n = "center", s) {
    this.message({
      message: e,
      type: t,
      position: n,
      duration: s
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
      position: s = "center",
      duration: o = 3e3,
      showClose: r = !1
    } = e;
    s === "center" ? kd({
      message: t,
      type: n,
      duration: o,
      showClose: r,
      grouping: !0
    }) : Dd({
      message: t,
      type: n,
      position: s,
      duration: o,
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
}, Pd = {
  class: "title-bar fixed top-0 left-0 right-0 z-10 flex items-center justify-between px-4 py-3",
  "data-tauri-drag-region": ""
}, Md = { class: "flex items-center gap-3" }, Rd = { class: "title-icon-wrap" }, Fd = { class: "m-0 text-lg font-medium tracking-tight" }, $d = { class: "content mx-auto max-w-2xl px-5 pt-20 pb-8" }, Ud = { class: "section" }, Vd = { class: "section-title" }, xd = { class: "mode-selector grid grid-cols-2 gap-3" }, Wd = { class: "mode-option block cursor-pointer h-full" }, jd = { class: "mode-content mode-system" }, Bd = { class: "mode-icon-wrap" }, zd = { class: "mode-body" }, Hd = { class: "mode-title" }, Gd = { class: "mode-desc" }, Kd = { class: "mode-option block cursor-pointer h-full" }, Yd = { class: "mode-content mode-light" }, Xd = { class: "mode-icon-wrap" }, Jd = { class: "mode-body" }, Zd = { class: "mode-title" }, qd = { class: "mode-desc" }, Qd = { class: "mode-option block cursor-pointer h-full" }, ef = { class: "mode-content mode-dark" }, tf = { class: "mode-icon-wrap" }, nf = { class: "mode-body" }, sf = { class: "mode-title" }, of = { class: "mode-desc" }, rf = { class: "mode-option block cursor-pointer h-full" }, af = { class: "mode-content mode-schedule" }, lf = { class: "mode-icon-wrap" }, cf = { class: "mode-body" }, uf = { class: "mode-title" }, df = { class: "mode-desc" }, ff = { class: "section" }, _f = { class: "status-card" }, mf = { class: "status-row" }, hf = { class: "status-label" }, pf = {
  key: 0,
  class: "status-row"
}, gf = { class: "status-label" }, yf = {
  key: 1,
  class: "status-hint"
}, Ef = { class: "section" }, vf = { class: "section-title" }, bf = { class: "mode-selector grid grid-cols-2 gap-3" }, Nf = { class: "mode-option block cursor-pointer h-full" }, kf = { class: "schedule-type-card" }, Cf = { class: "schedule-type-title" }, wf = { class: "schedule-type-desc" }, Of = { class: "mode-option block cursor-pointer h-full" }, Lf = { class: "schedule-type-card" }, Tf = { class: "schedule-type-title" }, If = { class: "schedule-type-desc" }, Sf = {
  key: 0,
  class: "section"
}, Af = { class: "section-title section-title-with-icon" }, Df = { class: "inset-card location-card" }, Pf = {
  key: 0,
  class: "loading-hint"
}, Mf = {
  key: 1,
  class: "location-info"
}, Rf = { class: "info-row" }, Ff = { class: "info-label" }, $f = { class: "info-value" }, Uf = { class: "info-row" }, Vf = { class: "info-label" }, xf = { class: "info-value" }, Wf = { class: "info-row" }, jf = { class: "info-label" }, Bf = { class: "info-value" }, zf = ["disabled"], Hf = {
  key: 1,
  class: "section"
}, Gf = { class: "section-title" }, Kf = { class: "inset-card sun-times-card" }, Yf = { class: "sun-row" }, Xf = { class: "sun-info" }, Jf = { class: "sun-label" }, Zf = { class: "sun-value" }, qf = { class: "sun-row" }, Qf = { class: "sun-info" }, e_ = { class: "sun-label" }, t_ = { class: "sun-value" }, n_ = { class: "sun-row sun-period" }, s_ = { class: "sun-label" }, o_ = {
  key: 2,
  class: "section"
}, r_ = { class: "inset-card location-card" }, a_ = { class: "info-row" }, i_ = { class: "info-value" }, l_ = {
  key: 0,
  class: "info-row"
}, c_ = { class: "info-value" }, u_ = {
  key: 1,
  class: "info-row"
}, d_ = { class: "info-value" }, f_ = {
  key: 2,
  class: "info-row"
}, __ = { class: "info-value" }, m_ = {
  key: 3,
  class: "info-row"
}, h_ = { class: "info-value" }, p_ = {
  key: 3,
  class: "section"
}, g_ = { class: "section-title" }, y_ = { class: "inset-card time-settings" }, E_ = { class: "time-row" }, v_ = { class: "time-label-text" }, b_ = { class: "time-row" }, N_ = { class: "time-label-text" }, k_ = /* @__PURE__ */ ce({
  __name: "index",
  setup(e) {
    const { t } = wn(), n = Wa(), s = W(() => n.theme === "auto" ? r.value : n.theme === "dark"), o = Z({
      theme_mode: "Light",
      schedule_type: "SunBased",
      custom_light_time: "06:00",
      custom_dark_time: "18:00",
      latitude: null,
      longitude: null,
      timezone_offset: null,
      location_name: null
    }), r = Z(!1), a = Z(!1), i = Z(null), c = Z(null), _ = Z(null), m = Z(!1), N = Z(!1), p = Z(!1), A = Z(null), $ = W(() => {
      const g = _.value?.source || "";
      return g.startsWith("manual:") ? `手动位置（${g.replace("manual:", "")}）` : g.startsWith("ip:") ? `自动定位（${g.replace("ip:", "")}）` : g || "-";
    }), C = async () => {
      try {
        const g = await T("get_dark_mode_config");
        o.value = g, await L();
      } catch (g) {
        _e.error("[主题] 加载配置失败", g), It.msg(t("darkMode.loadConfigFailed"), "error");
      }
    }, L = async () => {
      try {
        const g = await T("get_dark_mode_status_command");
        r.value = g.currentIsDark, a.value = g.schedulerRunning, _.value = g.sunCalcDebug ?? null;
      } catch (g) {
        _e.error("[主题] 加载状态失败", g);
      }
    }, f = async () => {
      m.value = !0;
      try {
        const g = await T("get_location_info");
        i.value = g, o.value.latitude = g.latitude, o.value.longitude = g.longitude, o.value.timezone_offset = g.timezone_offset, o.value.location_name = `${g.city}, ${g.region}`, o.value.schedule_type === "SunBased" && await k(), await P();
      } catch (g) {
        _e.error("[主题] 获取位置失败", g), It.msg(t("darkMode.getLocationFailed"), "error");
      } finally {
        await L(), m.value = !1;
      }
    }, k = async () => {
      if (!(!o.value.latitude || !o.value.longitude))
        try {
          const g = await T("calculate_sun_times_command", {
            latitude: o.value.latitude,
            longitude: o.value.longitude,
            timezoneOffset: o.value.timezone_offset || 0
          });
          c.value = g;
        } catch (g) {
          _e.error("[主题] 计算日出日落时间失败", g);
        }
    }, E = async () => {
      p.value || (await P(), o.value.theme_mode === "Schedule" && o.value.schedule_type === "SunBased" && !i.value && await f());
    }, v = async () => {
      p.value || (o.value.schedule_type === "SunBased" && !i.value && await f(), await P());
    }, D = async () => {
      p.value || o.value.schedule_type === "Custom" && await P();
    }, P = async () => {
      if (!p.value) {
        N.value = !0;
        try {
          await T("save_dark_mode_config_command", { config: o.value }), await L();
        } catch (g) {
          _e.error("[主题] 保存配置失败", g), It.msg(t("darkMode.saveConfigFailed"), "error");
        } finally {
          N.value = !1;
        }
      }
    }, d = async () => {
      try {
        const g = await T("toggle_system_theme");
        r.value = g;
        const w = t(g ? "darkMode.darkTheme" : "darkMode.lightTheme");
        let I = t("darkMode.switchedTo", { theme: w });
        o.value.theme_mode === "Schedule" && (I += t("darkMode.autoRestoreNote")), It.msg(I, "success");
      } catch (g) {
        _e.error("[主题] 切换主题失败", g), It.msg(t("darkMode.toggleFailed"), "error");
      }
    }, j = () => {
      Zn().close();
    };
    return zt(async () => {
      await C(), o.value.theme_mode === "Schedule" && o.value.schedule_type === "SunBased" && await f(), A.value = await ms("dark-mode-changed", async (g) => {
        _e.debug(`[主题][窗口:dark_mode] 收到主题变更：${JSON.stringify(g.payload)}`), r.value = g.payload.isDark, p.value = !0;
        try {
          await C(), _e.debug(`[主题][窗口:dark_mode] 已从后端刷新配置：theme_mode=${o.value.theme_mode}, schedule_type=${o.value.schedule_type}`);
        } finally {
          p.value = !1;
        }
        n.theme === "auto" && n.syncSystemThemeStyle(g.payload.isDark);
      }), an(() => {
        setTimeout(() => {
          Zn().emit("dark_mode_ready");
        }, 100);
      });
    }), tt(() => o.value.schedule_type, async (g) => {
      g === "SunBased" && o.value.latitude && o.value.longitude && await k();
    }), Bo(() => {
      A.value && A.value();
    }), (g, w) => (B(), J(
      "div",
      {
        class: re(["dark-mode-container select-none rounded-lg", { dark: h(s) }])
      },
      [
        Y(" 标题栏 "),
        b("div", Pd, [
          b("div", Md, [
            b("div", Rd, [
              R(h(Wn), {
                class: "text-xl",
                theme: "filled"
              })
            ]),
            b(
              "h1",
              Fd,
              U(g.$t("darkMode.title")),
              1
              /* TEXT */
            )
          ]),
          b("button", {
            type: "button",
            onClick: j,
            class: "close-btn",
            "aria-label": "Close"
          }, [
            R(h($a), { size: 18 })
          ])
        ]),
        Y(" 主要内容 "),
        b("div", $d, [
          Y(" 主题模式选择（四选一） "),
          b("div", Ud, [
            b(
              "h2",
              Vd,
              U(g.$t("darkMode.themeMode")),
              1
              /* TEXT */
            ),
            b("div", xd, [
              b("label", Wd, [
                Ee(b(
                  "input",
                  {
                    type: "radio",
                    value: "System",
                    "onUpdate:modelValue": w[0] || (w[0] = (I) => h(o).theme_mode = I),
                    onChange: E,
                    class: "sr-only"
                  },
                  null,
                  544
                  /* NEED_HYDRATION, NEED_PATCH */
                ), [
                  [ut, h(o).theme_mode]
                ]),
                b("div", jd, [
                  b("span", Bd, [
                    R(h(Ua), {
                      class: "mode-icon",
                      theme: "filled",
                      size: 22
                    })
                  ]),
                  b("div", zd, [
                    b(
                      "span",
                      Hd,
                      U(g.$t("darkMode.systemMode")),
                      1
                      /* TEXT */
                    ),
                    b(
                      "span",
                      Gd,
                      U(g.$t("darkMode.systemModeDesc")),
                      1
                      /* TEXT */
                    )
                  ])
                ])
              ]),
              b("label", Kd, [
                Ee(b(
                  "input",
                  {
                    type: "radio",
                    value: "Light",
                    "onUpdate:modelValue": w[1] || (w[1] = (I) => h(o).theme_mode = I),
                    onChange: E,
                    class: "sr-only"
                  },
                  null,
                  544
                  /* NEED_HYDRATION, NEED_PATCH */
                ), [
                  [ut, h(o).theme_mode]
                ]),
                b("div", Yd, [
                  b("span", Xd, [
                    R(h(js), {
                      class: "mode-icon",
                      theme: "filled",
                      size: 22
                    })
                  ]),
                  b("div", Jd, [
                    b(
                      "span",
                      Zd,
                      U(g.$t("darkMode.lightMode")),
                      1
                      /* TEXT */
                    ),
                    b(
                      "span",
                      qd,
                      U(g.$t("darkMode.lightModeDesc")),
                      1
                      /* TEXT */
                    )
                  ])
                ])
              ]),
              b("label", Qd, [
                Ee(b(
                  "input",
                  {
                    type: "radio",
                    value: "Dark",
                    "onUpdate:modelValue": w[2] || (w[2] = (I) => h(o).theme_mode = I),
                    onChange: E,
                    class: "sr-only"
                  },
                  null,
                  544
                  /* NEED_HYDRATION, NEED_PATCH */
                ), [
                  [ut, h(o).theme_mode]
                ]),
                b("div", ef, [
                  b("span", tf, [
                    R(h(Wn), {
                      class: "mode-icon",
                      theme: "filled",
                      size: 22
                    })
                  ]),
                  b("div", nf, [
                    b(
                      "span",
                      sf,
                      U(g.$t("darkMode.darkMode")),
                      1
                      /* TEXT */
                    ),
                    b(
                      "span",
                      of,
                      U(g.$t("darkMode.darkModeDesc")),
                      1
                      /* TEXT */
                    )
                  ])
                ])
              ]),
              b("label", rf, [
                Ee(b(
                  "input",
                  {
                    type: "radio",
                    value: "Schedule",
                    "onUpdate:modelValue": w[3] || (w[3] = (I) => h(o).theme_mode = I),
                    onChange: E,
                    class: "sr-only"
                  },
                  null,
                  544
                  /* NEED_HYDRATION, NEED_PATCH */
                ), [
                  [ut, h(o).theme_mode]
                ]),
                b("div", af, [
                  b("span", lf, [
                    R(h(zs), {
                      class: "mode-icon",
                      theme: "filled",
                      size: 22
                    })
                  ]),
                  b("div", cf, [
                    b(
                      "span",
                      uf,
                      U(g.$t("darkMode.scheduleMode")),
                      1
                      /* TEXT */
                    ),
                    b(
                      "span",
                      df,
                      U(g.$t("darkMode.scheduleModeDesc")),
                      1
                      /* TEXT */
                    )
                  ])
                ])
              ])
            ])
          ]),
          Y(" 当前状态卡片（始终显示） "),
          b("div", ff, [
            b("div", _f, [
              b("div", mf, [
                b(
                  "span",
                  hf,
                  U(g.$t("darkMode.currentTheme")),
                  1
                  /* TEXT */
                ),
                b(
                  "span",
                  {
                    class: re(["status-badge", h(r) ? "badge-dark" : "badge-light"])
                  },
                  U(h(r) ? g.$t("darkMode.darkTheme") : g.$t("darkMode.lightTheme")),
                  3
                  /* TEXT, CLASS */
                )
              ]),
              h(o).theme_mode === "Schedule" ? (B(), J("div", pf, [
                b(
                  "span",
                  gf,
                  U(g.$t("darkMode.schedulerStatus")),
                  1
                  /* TEXT */
                ),
                b(
                  "span",
                  {
                    class: re(["status-badge", h(a) ? "badge-success" : "badge-danger"])
                  },
                  U(h(a) ? g.$t("darkMode.running") : g.$t("darkMode.stopped")),
                  3
                  /* TEXT, CLASS */
                )
              ])) : Y("v-if", !0),
              h(o).theme_mode !== "Schedule" ? (B(), J(
                "p",
                yf,
                U(h(o).theme_mode === "System" ? g.$t("darkMode.systemModeDesc") : h(o).theme_mode === "Light" ? g.$t("darkMode.lightModeDesc") : g.$t("darkMode.darkModeDesc")),
                1
                /* TEXT */
              )) : Y("v-if", !0),
              b(
                "button",
                {
                  type: "button",
                  onClick: d,
                  class: "btn-primary"
                },
                U(g.$t("darkMode.manualToggle")),
                1
                /* TEXT */
              )
            ])
          ]),
          Y(" 定时切换详细设置（仅在Schedule模式下显示） "),
          h(o).theme_mode === "Schedule" ? (B(), J(
            Ht,
            { key: 0 },
            [
              Y(" 定时类型选择 "),
              b("div", Ef, [
                b(
                  "h2",
                  vf,
                  U(g.$t("darkMode.scheduleType")),
                  1
                  /* TEXT */
                ),
                b("div", bf, [
                  b("label", Nf, [
                    Ee(b(
                      "input",
                      {
                        type: "radio",
                        value: "SunBased",
                        "onUpdate:modelValue": w[4] || (w[4] = (I) => h(o).schedule_type = I),
                        onChange: v,
                        class: "sr-only"
                      },
                      null,
                      544
                      /* NEED_HYDRATION, NEED_PATCH */
                    ), [
                      [ut, h(o).schedule_type]
                    ]),
                    b("div", kf, [
                      b("span", Cf, [
                        R(h(Bs), { size: 18 }),
                        qe(
                          " " + U(g.$t("darkMode.sunBased")),
                          1
                          /* TEXT */
                        )
                      ]),
                      b(
                        "span",
                        wf,
                        U(g.$t("darkMode.sunBasedDesc")),
                        1
                        /* TEXT */
                      )
                    ])
                  ]),
                  b("label", Of, [
                    Ee(b(
                      "input",
                      {
                        type: "radio",
                        value: "Custom",
                        "onUpdate:modelValue": w[5] || (w[5] = (I) => h(o).schedule_type = I),
                        onChange: v,
                        class: "sr-only"
                      },
                      null,
                      544
                      /* NEED_HYDRATION, NEED_PATCH */
                    ), [
                      [ut, h(o).schedule_type]
                    ]),
                    b("div", Lf, [
                      b("span", Tf, [
                        R(h(zs), { size: 18 }),
                        qe(
                          " " + U(g.$t("darkMode.customSchedule")),
                          1
                          /* TEXT */
                        )
                      ]),
                      b(
                        "span",
                        If,
                        U(g.$t("darkMode.customScheduleDesc")),
                        1
                        /* TEXT */
                      )
                    ])
                  ])
                ])
              ]),
              Y(" 位置信息（日出日落模式） "),
              h(o).schedule_type === "SunBased" ? (B(), J("div", Sf, [
                b("h2", Af, [
                  R(h(Va), {
                    theme: "filled",
                    size: 18
                  }),
                  qe(
                    " " + U(g.$t("darkMode.locationInfo")),
                    1
                    /* TEXT */
                  )
                ]),
                b("div", Df, [
                  h(m) ? (B(), J(
                    "div",
                    Pf,
                    U(g.$t("darkMode.gettingLocation")),
                    1
                    /* TEXT */
                  )) : h(i) ? (B(), J("div", Mf, [
                    b("div", Rf, [
                      b(
                        "span",
                        Ff,
                        U(g.$t("darkMode.location")),
                        1
                        /* TEXT */
                      ),
                      b(
                        "span",
                        $f,
                        U(h(i).city) + ", " + U(h(i).region) + ", " + U(h(i).country),
                        1
                        /* TEXT */
                      )
                    ]),
                    b("div", Uf, [
                      b(
                        "span",
                        Vf,
                        U(g.$t("darkMode.timezone")),
                        1
                        /* TEXT */
                      ),
                      b(
                        "span",
                        xf,
                        U(h(i).timezone),
                        1
                        /* TEXT */
                      )
                    ]),
                    b("div", Wf, [
                      b(
                        "span",
                        jf,
                        U(g.$t("darkMode.coordinates")),
                        1
                        /* TEXT */
                      ),
                      b(
                        "span",
                        Bf,
                        U(h(i).latitude.toFixed(4)) + ", " + U(h(i).longitude.toFixed(4)),
                        1
                        /* TEXT */
                      )
                    ])
                  ])) : Y("v-if", !0),
                  b("button", {
                    type: "button",
                    onClick: f,
                    class: "btn-secondary btn-with-icon mt-3",
                    disabled: h(m)
                  }, [
                    h(m) ? (B(), Ne(h(Ws), {
                      key: 1,
                      class: "animate-spin",
                      size: 16
                    })) : (B(), Ne(h(Ws), {
                      key: 0,
                      size: 16
                    })),
                    qe(
                      " " + U(h(m) ? g.$t("darkMode.refreshing") : g.$t("darkMode.refreshLocation")),
                      1
                      /* TEXT */
                    )
                  ], 8, zf)
                ])
              ])) : Y("v-if", !0),
              Y(" 日出日落时间 "),
              h(o).schedule_type === "SunBased" && h(c) ? (B(), J("div", Hf, [
                b(
                  "h2",
                  Gf,
                  U(g.$t("darkMode.sunTimes")),
                  1
                  /* TEXT */
                ),
                b("div", Kf, [
                  b("div", Yf, [
                    R(h(Bs), {
                      class: "sun-icon",
                      theme: "filled",
                      size: 20
                    }),
                    b("div", Xf, [
                      b(
                        "span",
                        Jf,
                        U(g.$t("darkMode.sunrise")),
                        1
                        /* TEXT */
                      ),
                      b(
                        "span",
                        Zf,
                        U(h(c).sunrise),
                        1
                        /* TEXT */
                      )
                    ])
                  ]),
                  b("div", qf, [
                    R(h(xa), {
                      class: "sun-icon",
                      theme: "filled",
                      size: 20
                    }),
                    b("div", Qf, [
                      b(
                        "span",
                        e_,
                        U(g.$t("darkMode.sunset")),
                        1
                        /* TEXT */
                      ),
                      b(
                        "span",
                        t_,
                        U(h(c).sunset),
                        1
                        /* TEXT */
                      )
                    ])
                  ]),
                  w[8] || (w[8] = b(
                    "div",
                    { class: "sun-divider" },
                    null,
                    -1
                    /* HOISTED */
                  )),
                  b("div", n_, [
                    b(
                      "span",
                      s_,
                      U(g.$t("darkMode.currentPeriod")),
                      1
                      /* TEXT */
                    ),
                    b(
                      "span",
                      {
                        class: re(["sun-value", h(c).is_day ? "period-day" : "period-night"])
                      },
                      U(h(c).is_day ? g.$t("darkMode.daytime") : g.$t("darkMode.nighttime")),
                      3
                      /* TEXT, CLASS */
                    )
                  ])
                ])
              ])) : Y("v-if", !0),
              Y(" 计算调试信息 "),
              h(o).schedule_type === "SunBased" ? (B(), J("div", o_, [
                w[14] || (w[14] = b(
                  "h2",
                  { class: "section-title" },
                  "计算依据",
                  -1
                  /* HOISTED */
                )),
                b("div", r_, [
                  b("div", a_, [
                    w[9] || (w[9] = b(
                      "span",
                      { class: "info-label" },
                      "来源",
                      -1
                      /* HOISTED */
                    )),
                    b(
                      "span",
                      i_,
                      U(h($)),
                      1
                      /* TEXT */
                    )
                  ]),
                  h(_)?.latitude !== void 0 && h(_)?.longitude !== void 0 ? (B(), J("div", l_, [
                    w[10] || (w[10] = b(
                      "span",
                      { class: "info-label" },
                      "计算坐标",
                      -1
                      /* HOISTED */
                    )),
                    b(
                      "span",
                      c_,
                      U(Number(h(_)?.latitude).toFixed(4)) + ", " + U(Number(h(_)?.longitude).toFixed(4)),
                      1
                      /* TEXT */
                    )
                  ])) : Y("v-if", !0),
                  h(_)?.timezoneOffset !== void 0 ? (B(), J("div", u_, [
                    w[11] || (w[11] = b(
                      "span",
                      { class: "info-label" },
                      "时区偏移(分钟)",
                      -1
                      /* HOISTED */
                    )),
                    b(
                      "span",
                      d_,
                      U(h(_)?.timezoneOffset),
                      1
                      /* TEXT */
                    )
                  ])) : Y("v-if", !0),
                  h(_)?.sunset ? (B(), J("div", f_, [
                    w[12] || (w[12] = b(
                      "span",
                      { class: "info-label" },
                      "用于切换的日落时间",
                      -1
                      /* HOISTED */
                    )),
                    b(
                      "span",
                      __,
                      U(h(_)?.sunset),
                      1
                      /* TEXT */
                    )
                  ])) : Y("v-if", !0),
                  h(_)?.error ? (B(), J("div", m_, [
                    w[13] || (w[13] = b(
                      "span",
                      { class: "info-label" },
                      "错误",
                      -1
                      /* HOISTED */
                    )),
                    b(
                      "span",
                      h_,
                      U(h(_)?.error),
                      1
                      /* TEXT */
                    )
                  ])) : Y("v-if", !0)
                ])
              ])) : Y("v-if", !0),
              Y(" 自定义时间 "),
              h(o).schedule_type === "Custom" ? (B(), J("div", p_, [
                b(
                  "h2",
                  g_,
                  U(g.$t("darkMode.customTime")),
                  1
                  /* TEXT */
                ),
                b("div", y_, [
                  b("label", E_, [
                    b("span", v_, [
                      R(h(js), {
                        theme: "filled",
                        size: 18
                      }),
                      qe(
                        " " + U(g.$t("darkMode.lightModeStart")),
                        1
                        /* TEXT */
                      )
                    ]),
                    Ee(b(
                      "input",
                      {
                        type: "time",
                        "onUpdate:modelValue": w[6] || (w[6] = (I) => h(o).custom_light_time = I),
                        onChange: D,
                        class: "time-input"
                      },
                      null,
                      544
                      /* NEED_HYDRATION, NEED_PATCH */
                    ), [
                      [Rs, h(o).custom_light_time]
                    ])
                  ]),
                  b("label", b_, [
                    b("span", N_, [
                      R(h(Wn), {
                        theme: "filled",
                        size: 18
                      }),
                      qe(
                        " " + U(g.$t("darkMode.darkModeStart")),
                        1
                        /* TEXT */
                      )
                    ]),
                    Ee(b(
                      "input",
                      {
                        type: "time",
                        "onUpdate:modelValue": w[7] || (w[7] = (I) => h(o).custom_dark_time = I),
                        onChange: D,
                        class: "time-input"
                      },
                      null,
                      544
                      /* NEED_HYDRATION, NEED_PATCH */
                    ), [
                      [Rs, h(o).custom_dark_time]
                    ])
                  ])
                ])
              ])) : Y("v-if", !0)
            ],
            64
            /* STABLE_FRAGMENT */
          )) : Y("v-if", !0)
        ])
      ],
      2
      /* CLASS */
    ));
  }
}), C_ = (e, t) => {
  const n = e.__vccOpts || e;
  for (const [s, o] of t)
    n[s] = o;
  return n;
}, T_ = /* @__PURE__ */ C_(k_, [["__scopeId", "data-v-f88d67ce"]]);
export {
  T_ as default
};
