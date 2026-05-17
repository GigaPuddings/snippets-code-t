import { i as Ie, r as Z, a as da, m as mt, e as fa, b as pt, c as ms, t as xn, d as _a, n as cn, g as Go, o as Yo, w as tt, f as Rs, h as W, j as Be, k as ma, l as F, p as ha, V as Fs, s as Xo, q as Kt, u as Jo, v as re, x as Zo, T as pa, F as Gt, y as p, z as ze, A as ga, B as qo, C as Qo, D as $s, E as ya, G as Ut, H as va, N as Ea, I as J, J as B, K as Vt, L as ba, M as v, O as et, P as ve, Q as un, R as ae, S as qe, U, W as dn, X as hs, Y as Na, Z as Ne, _ as Y, $ as er, a0 as tr, a1 as xt, a2 as fn, a3 as ut, a4 as Us } from "./runtime-entry-aon156ox.js";
function Qt(e, t, n) {
  return Array.isArray(e) ? (e.length = Math.max(e.length, t), e.splice(t, 1, n), n) : (e[t] = n, n);
}
function Wn(e, t) {
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
let Pt;
const _n = (e) => Pt = e, ka = process.env.NODE_ENV !== "production" ? Symbol("pinia") : (
  /* istanbul ignore next */
  Symbol()
);
function nt(e) {
  return e && typeof e == "object" && Object.prototype.toString.call(e) === "[object Object]" && typeof e.toJSON != "function";
}
var Mt;
(function(e) {
  e.direct = "direct", e.patchObject = "patch object", e.patchFunction = "patch function";
})(Mt || (Mt = {}));
const At = typeof window < "u";
function nr(e, t) {
  for (const n in t) {
    const s = t[n];
    if (!(n in e))
      continue;
    const o = e[n];
    nt(o) && nt(s) && !pt(s) && !ms(s) ? e[n] = nr(o, s) : e[n] = s;
  }
  return e;
}
const sr = () => {
};
function Vs(e, t, n, s = sr) {
  e.push(t);
  const o = () => {
    const r = e.indexOf(t);
    r > -1 && (e.splice(r, 1), s());
  };
  return !n && Go() && Yo(o), o;
}
function dt(e, ...t) {
  e.slice().forEach((n) => {
    n(...t);
  });
}
const wa = (e) => e(), xs = Symbol(), jn = Symbol();
function Jn(e, t) {
  e instanceof Map && t instanceof Map ? t.forEach((n, s) => e.set(s, n)) : e instanceof Set && t instanceof Set && t.forEach(e.add, e);
  for (const n in t) {
    if (!t.hasOwnProperty(n))
      continue;
    const s = t[n], o = e[n];
    nt(o) && nt(s) && e.hasOwnProperty(n) && !pt(s) && !ms(s) ? e[n] = Jn(o, s) : e[n] = s;
  }
  return e;
}
const Ca = process.env.NODE_ENV !== "production" ? Symbol("pinia:skipHydration") : (
  /* istanbul ignore next */
  Symbol()
);
function Oa(e) {
  return !nt(e) || !e.hasOwnProperty(Ca);
}
const { assign: ye } = Object;
function Ws(e) {
  return !!(pt(e) && e.effect);
}
function js(e, t, n, s) {
  const { state: o, actions: r, getters: a } = t, i = n.state.value[e];
  let c;
  function _() {
    !i && (process.env.NODE_ENV === "production" || !s) && (n.state.value[e] = o ? o() : {});
    const h = process.env.NODE_ENV !== "production" && s ? (
      // use ref() to unwrap refs inside state TODO: check if this is still necessary
      Rs(Z(o ? o() : {}).value)
    ) : Rs(n.state.value[e]);
    return ye(h, r, Object.keys(a || {}).reduce((b, m) => (process.env.NODE_ENV !== "production" && m in h && console.warn(`[🍍]: A getter cannot have the same name as another state property. Rename one of them. Found with "${m}" in store "${e}".`), b[m] = mt(W(() => {
      _n(n);
      const O = n._s.get(e);
      return a[m].call(O, O);
    })), b), {}));
  }
  return c = Zn(e, _, t, n, s, !0), c;
}
function Zn(e, t, n = {}, s, o, r) {
  let a;
  const i = ye({ actions: {} }, n);
  if (process.env.NODE_ENV !== "production" && !s._e.active)
    throw new Error("Pinia destroyed");
  const c = { deep: !0 };
  process.env.NODE_ENV !== "production" && (c.onTrigger = (C) => {
    _ ? O = C : _ == !1 && !d._hotUpdating && (Array.isArray(O) ? O.push(C) : console.error("🍍 debuggerEvents should be an array. This is most likely an internal Pinia bug."));
  });
  let _, h, b = [], m = [], O;
  const M = s.state.value[e];
  !r && !M && (process.env.NODE_ENV === "production" || !o) && (s.state.value[e] = {});
  const w = Z({});
  let T;
  function f(C) {
    let I;
    _ = h = !1, process.env.NODE_ENV !== "production" && (O = []), typeof C == "function" ? (C(s.state.value[e]), I = {
      type: Mt.patchFunction,
      storeId: e,
      events: O
    }) : (Jn(s.state.value[e], C), I = {
      type: Mt.patchObject,
      payload: C,
      storeId: e,
      events: O
    });
    const x = T = Symbol();
    cn().then(() => {
      T === x && (_ = !0);
    }), h = !0, dt(b, I, s.state.value[e]);
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
    } : sr
  );
  function E() {
    a.stop(), b = [], m = [], s._s.delete(e);
  }
  const N = (C, I = "") => {
    if (xs in C)
      return C[jn] = I, C;
    const x = function() {
      _n(s);
      const oe = Array.from(arguments), Pe = [], Ge = [];
      function kt(ue) {
        Pe.push(ue);
      }
      function wt(ue) {
        Ge.push(ue);
      }
      dt(m, {
        args: oe,
        name: x[jn],
        store: d,
        after: kt,
        onError: wt
      });
      let Ae;
      try {
        Ae = C.apply(this && this.$id === e ? this : d, oe);
      } catch (ue) {
        throw dt(Ge, ue), ue;
      }
      return Ae instanceof Promise ? Ae.then((ue) => (dt(Pe, ue), ue)).catch((ue) => (dt(Ge, ue), Promise.reject(ue))) : (dt(Pe, Ae), Ae);
    };
    return x[xs] = !0, x[jn] = I, x;
  }, P = /* @__PURE__ */ mt({
    actions: {},
    getters: {},
    state: [],
    hotState: w
  }), A = {
    _p: s,
    // _s: scope,
    $id: e,
    $onAction: Vs.bind(null, m),
    $patch: f,
    $reset: k,
    $subscribe(C, I = {}) {
      const x = Vs(b, C, I.detached, () => oe()), oe = a.run(() => tt(() => s.state.value[e], (Pe) => {
        (I.flush === "sync" ? h : _) && C({
          storeId: e,
          type: Mt.direct,
          events: O
        }, Pe);
      }, ye({}, c, I)));
      return x;
    },
    $dispose: E
  }, d = da(process.env.NODE_ENV !== "production" || process.env.NODE_ENV !== "production" && process.env.NODE_ENV !== "test" && At ? ye(
    {
      _hmrPayload: P,
      _customProperties: mt(/* @__PURE__ */ new Set())
      // devtools custom properties
    },
    A
    // must be added later
    // setupStore
  ) : A);
  s._s.set(e, d);
  const g = (s._a && s._a.runWithContext || wa)(() => s._e.run(() => (a = fa()).run(() => t({ action: N }))));
  for (const C in g) {
    const I = g[C];
    if (pt(I) && !Ws(I) || ms(I))
      process.env.NODE_ENV !== "production" && o ? Qt(w.value, C, xn(g, C)) : r || (M && Oa(I) && (pt(I) ? I.value = M[C] : Jn(I, M[C])), s.state.value[e][C] = I), process.env.NODE_ENV !== "production" && P.state.push(C);
    else if (typeof I == "function") {
      const x = process.env.NODE_ENV !== "production" && o ? I : N(I, C);
      g[C] = x, process.env.NODE_ENV !== "production" && (P.actions[C] = I), i.actions[C] = I;
    } else process.env.NODE_ENV !== "production" && Ws(I) && (P.getters[C] = r ? (
      // @ts-expect-error
      n.getters[C]
    ) : I, At && (g._getters || // @ts-expect-error: same
    (g._getters = mt([]))).push(C));
  }
  if (ye(d, g), ye(_a(d), g), Object.defineProperty(d, "$state", {
    get: () => process.env.NODE_ENV !== "production" && o ? w.value : s.state.value[e],
    set: (C) => {
      if (process.env.NODE_ENV !== "production" && o)
        throw new Error("cannot set hotState");
      f((I) => {
        ye(I, C);
      });
    }
  }), process.env.NODE_ENV !== "production" && (d._hotUpdate = mt((C) => {
    d._hotUpdating = !0, C._hmrPayload.state.forEach((I) => {
      if (I in d.$state) {
        const x = C.$state[I], oe = d.$state[I];
        typeof x == "object" && nt(x) && nt(oe) ? nr(x, oe) : C.$state[I] = oe;
      }
      Qt(d, I, xn(C.$state, I));
    }), Object.keys(d.$state).forEach((I) => {
      I in C.$state || Wn(d, I);
    }), _ = !1, h = !1, s.state.value[e] = xn(C._hmrPayload, "hotState"), h = !0, cn().then(() => {
      _ = !0;
    });
    for (const I in C._hmrPayload.actions) {
      const x = C[I];
      Qt(d, I, N(x, I));
    }
    for (const I in C._hmrPayload.getters) {
      const x = C._hmrPayload.getters[I], oe = r ? (
        // special handling of options api
        W(() => (_n(s), x.call(d, d)))
      ) : x;
      Qt(d, I, oe);
    }
    Object.keys(d._hmrPayload.getters).forEach((I) => {
      I in C._hmrPayload.getters || Wn(d, I);
    }), Object.keys(d._hmrPayload.actions).forEach((I) => {
      I in C._hmrPayload.actions || Wn(d, I);
    }), d._hmrPayload = C._hmrPayload, d._getters = C._getters, d._hotUpdating = !1;
  })), process.env.NODE_ENV !== "production" && process.env.NODE_ENV !== "test" && At) {
    const C = {
      writable: !0,
      configurable: !0,
      // avoid warning on devtools trying to display this property
      enumerable: !1
    };
    ["_p", "_hmrPayload", "_getters", "_customProperties"].forEach((I) => {
      Object.defineProperty(d, I, ye({ value: d[I] }, C));
    });
  }
  return s._p.forEach((C) => {
    if (process.env.NODE_ENV !== "production" && process.env.NODE_ENV !== "test" && At) {
      const I = a.run(() => C({
        store: d,
        app: s._a,
        pinia: s,
        options: i
      }));
      Object.keys(I || {}).forEach((x) => d._customProperties.add(x)), ye(d, I);
    } else
      ye(d, a.run(() => C({
        store: d,
        app: s._a,
        pinia: s,
        options: i
      })));
  }), process.env.NODE_ENV !== "production" && d.$state && typeof d.$state == "object" && typeof d.$state.constructor == "function" && !d.$state.constructor.toString().includes("[native code]") && console.warn(`[🍍]: The "state" must be a plain object. It cannot be
	state: () => new MyClass()
Found in store "${d.$id}".`), M && r && n.hydrate && n.hydrate(d.$state, M), _ = !0, h = !0, d;
}
/*! #__NO_SIDE_EFFECTS__ */
// @__NO_SIDE_EFFECTS__
function La(e, t, n) {
  let s, o;
  const r = typeof t == "function";
  if (typeof e == "string")
    s = e, o = r ? n : t;
  else if (o = e, s = e.id, process.env.NODE_ENV !== "production" && typeof s != "string")
    throw new Error('[🍍]: "defineStore()" must be passed a store id as its first argument.');
  function a(i, c) {
    const _ = ma();
    if (i = // in test mode, ignore the argument provided as we can always retrieve a
    // pinia instance with getActivePinia()
    (process.env.NODE_ENV === "test" && Pt && Pt._testing ? null : i) || (_ ? Ie(ka, null) : null), i && _n(i), process.env.NODE_ENV !== "production" && !Pt)
      throw new Error(`[🍍]: "getActivePinia()" was called but there was no active Pinia. Are you trying to use a store before calling "app.use(pinia)"?
See https://pinia.vuejs.org/core-concepts/outside-component-usage.html for help.
This will fail in production.`);
    i = Pt, i._s.has(s) || (r ? Zn(s, t, o, i) : js(s, o, i), process.env.NODE_ENV !== "production" && (a._pinia = i));
    const h = i._s.get(s);
    if (process.env.NODE_ENV !== "production" && c) {
      const b = "__hot:" + s, m = r ? Zn(b, t, o, i, !0) : js(b, ye({}, o), i, !0);
      c._hotUpdate(m), delete i.state.value[b], i._s.delete(b);
    }
    if (process.env.NODE_ENV !== "production" && At) {
      const b = Be();
      if (b && b.proxy && // avoid adding stores that are just built for hot module replacement
      !c) {
        const m = b.proxy, O = "_pStores" in m ? m._pStores : m._pStores = {};
        O[s] = h;
      }
    }
    return h;
  }
  return a.$id = s, a;
}
function Ta(e, t, n, s) {
  if (typeof t == "function" ? e !== t || !0 : !t.has(e)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
  return n === "m" ? s : n === "a" ? s.call(e) : s ? s.value : t.get(e);
}
function Sa(e, t, n, s, o) {
  if (typeof t == "function" ? e !== t || !0 : !t.has(e)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
  return t.set(e, n), n;
}
var on;
const be = "__TAURI_TO_IPC_KEY__";
function Ia(e, t = !1) {
  return window.__TAURI_INTERNALS__.transformCallback(e, t);
}
async function S(e, t = {}, n) {
  return window.__TAURI_INTERNALS__.invoke(e, t, n);
}
class Da {
  get rid() {
    return Ta(this, on, "f");
  }
  constructor(t) {
    on.set(this, void 0), Sa(this, on, t);
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
on = /* @__PURE__ */ new WeakMap();
const _e = {
  info: (e, t, ...n) => {
    S("frontend_log", {
      level: "info",
      message: e,
      data: t ? JSON.stringify(t, null, 2) : null
    }).catch(() => {
    });
  },
  error: (e, t) => {
    S("frontend_log", {
      level: "error",
      message: e,
      data: t ? JSON.stringify(t, null, 2) : null
    }).catch(() => {
    });
  },
  warn: (e, t) => {
    S("frontend_log", {
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
async function or(e, t) {
  await S("plugin:event|unlisten", {
    event: e,
    eventId: t
  });
}
async function ps(e, t, n) {
  var s;
  const o = typeof n?.target == "string" ? { kind: "AnyLabel", label: n.target } : (s = n?.target) !== null && s !== void 0 ? s : { kind: "Any" };
  return S("plugin:event|listen", {
    event: e,
    target: o,
    handler: Ia(t)
  }).then((r) => async () => or(e, r));
}
async function Pa(e, t, n) {
  return ps(e, (s) => {
    or(e, s.id), t(s);
  }, n);
}
async function Aa(e, t) {
  await S("plugin:event|emit", {
    event: e,
    payload: t
  });
}
async function Ma(e, t, n) {
  await S("plugin:event|emit_to", {
    target: typeof e == "string" ? { kind: "AnyLabel", label: e } : e,
    event: t,
    payload: n
  });
}
const Ra = {
  id: "attachments",
  nameKey: "plugins.attachments.name",
  descriptionKey: "plugins.attachments.description",
  category: "editor",
  enabledByDefault: !0,
  settingsTabs: ["attachment"]
}, Fa = {
  id: "desktop-files",
  nameKey: "plugins.desktopFiles.name",
  descriptionKey: "plugins.desktopFiles.description",
  category: "search",
  enabledByDefault: !0,
  searchSources: ["desktop-files"]
}, $a = {
  id: "git-sync",
  nameKey: "plugins.gitSync.name",
  descriptionKey: "plugins.gitSync.description",
  category: "sync",
  enabledByDefault: !0,
  settingsTabs: ["gitSync"]
}, Ua = {
  id: "local-launcher",
  nameKey: "plugins.localLauncher.name",
  descriptionKey: "plugins.localLauncher.description",
  category: "search",
  enabledByDefault: !0,
  routeNames: ["Local"],
  settingsTabs: ["local"],
  searchSources: ["apps", "bookmarks"]
}, Va = {
  id: "screenshot",
  nameKey: "plugins.screenshot.name",
  descriptionKey: "plugins.screenshot.description",
  category: "capture",
  enabledByDefault: !0,
  routeNames: ["Screenshot", "Pin"],
  hotkeys: ["screenshot"],
  resourceHintKey: "plugins.screenshot.resourceHint"
}, xa = {
  id: "search-engines",
  nameKey: "plugins.searchEngines.name",
  descriptionKey: "plugins.searchEngines.description",
  category: "search",
  enabledByDefault: !0,
  routeNames: ["Retrieve"],
  settingsTabs: ["retrieve"],
  searchSources: ["web-search"]
}, Wa = {
  id: "system-theme",
  nameKey: "plugins.systemTheme.name",
  descriptionKey: "plugins.systemTheme.description",
  category: "appearance",
  enabledByDefault: !0,
  routeNames: ["DarkMode"],
  hotkeys: ["dark_mode"]
}, ja = {
  id: "todo",
  nameKey: "plugins.todo.name",
  descriptionKey: "plugins.todo.description",
  category: "automation",
  enabledByDefault: !0,
  routeNames: ["Todo"],
  settingsTabs: ["todo"]
}, Ba = {
  id: "translation",
  nameKey: "plugins.translation.name",
  descriptionKey: "plugins.translation.description",
  category: "automation",
  enabledByDefault: !0,
  routeNames: ["Translate"],
  settingsTabs: ["translation"],
  hotkeys: ["translate", "selection_translate"],
  searchSources: [],
  resourceHintKey: "plugins.translation.resourceHint"
}, za = [
  Ba,
  Va,
  ja,
  Wa,
  Ua,
  Fa,
  xa,
  $a,
  Ra
], Ha = "1.0.0", Ka = (e) => String(e), Ga = (e) => ({
  schemaVersion: 1,
  id: e.id,
  version: e.version ?? Ha,
  kind: "builtin",
  name: {
    i18nKey: e.nameKey,
    fallback: e.fallbackName ?? Ka(e.id)
  },
  description: {
    i18nKey: e.descriptionKey,
    fallback: e.fallbackDescription ?? ""
  },
  category: e.category,
  enabledByDefault: e.enabledByDefault,
  capabilities: {
    routeNames: e.routeNames,
    settingsTabs: e.settingsTabs,
    hotkeys: e.hotkeys,
    searchSources: e.searchSources
  },
  resources: e.resourceHintKey ? {
    hintKey: e.resourceHintKey,
    bundled: !1
  } : void 0
}), Bs = (e, t, n) => ({
  id: e.id,
  source: t,
  packagePath: n,
  manifest: e,
  nameKey: e.name.i18nKey,
  descriptionKey: e.description.i18nKey,
  category: e.category,
  enabledByDefault: e.enabledByDefault,
  routeNames: e.capabilities?.routeNames,
  settingsTabs: e.capabilities?.settingsTabs,
  hotkeys: e.capabilities?.hotkeys,
  searchSources: e.capabilities?.searchSources,
  resourceHintKey: e.resources?.hintKey
}), We = (e) => typeof e == "object" && e !== null, Ya = (e) => We(e) && "manifest" in e && We(e.manifest) ? {
  manifest: e.manifest,
  packagePath: typeof e.packagePath == "string" ? e.packagePath : void 0
} : { manifest: e }, Xa = (e) => typeof e == "string" && ["capture", "automation", "search", "sync", "editor", "appearance"].includes(e), Ja = (e) => {
  if (!We(e) || e.schemaVersion !== 1 || typeof e.id != "string" || !e.id.trim() || typeof e.version != "string" || !e.version.trim() || e.kind !== "builtin" && e.kind !== "local" || !We(e.name) || typeof e.name.i18nKey != "string" || typeof e.name.fallback != "string" || !We(e.description) || typeof e.description.i18nKey != "string" || typeof e.description.fallback != "string" || !Xa(e.category) || typeof e.enabledByDefault != "boolean") return null;
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
    compatibleAppVersion: typeof e.compatibleAppVersion == "string" ? e.compatibleAppVersion : void 0,
    minAppVersion: typeof e.minAppVersion == "string" ? e.minAppVersion : void 0,
    repository: typeof e.repository == "string" ? e.repository : void 0,
    releaseUrl: typeof e.releaseUrl == "string" ? e.releaseUrl : void 0
  };
}, Za = () => za.map(Ga), qa = (e) => e.map((t) => {
  const { manifest: n, packagePath: s } = Ya(t), o = Ja(n);
  return o ? {
    manifest: o,
    packagePath: s ?? ""
  } : null;
}).filter((t) => t !== null), Qa = (e = []) => {
  const n = [
    ...Za().map((o) => Bs(o, "builtin")),
    ...qa(e).map((o) => Bs(
      o.manifest,
      "local",
      o.packagePath || void 0
    ))
  ], s = /* @__PURE__ */ new Map();
  for (const o of n)
    s.has(o.id) || s.set(o.id, o);
  return Array.from(s.values());
}, rr = Qa();
rr.filter((e) => e.source === "builtin");
const ar = rr;
ar.map((e) => e.id);
ar.reduce((e, t) => (e[t.id] = t.enabledByDefault, e), {});
var ei = {
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
function ti() {
  return "icon-" + ((1 + Math.random()) * 4294967296 | 0).toString(16).substring(1);
}
function ni(e, t, n) {
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
var si = Symbol("icon-context");
function Ve(e, t, n) {
  var s = {
    name: "icon-" + e,
    props: ["size", "strokeWidth", "strokeLinecap", "strokeLinejoin", "theme", "fill", "spin"],
    setup: function(r) {
      var a = ti(), i = Ie(si, ei);
      return function() {
        var c = r.size, _ = r.strokeWidth, h = r.strokeLinecap, b = r.strokeLinejoin, m = r.theme, O = r.fill, M = r.spin, w = ni(a, {
          size: c,
          strokeWidth: _,
          strokeLinecap: h,
          strokeLinejoin: b,
          theme: m,
          fill: O
        }, i), T = [i.prefix + "-icon"];
        return T.push(i.prefix + "-icon-" + e), t && i.rtl && T.push(i.prefix + "-icon-rtl"), M && T.push(i.prefix + "-icon-spin"), F("span", {
          class: T.join(" ")
        }, [n(w)]);
      };
    }
  };
  return s;
}
const oi = Ve("close", !1, function(e) {
  return F("svg", {
    width: e.size,
    height: e.size,
    viewBox: "0 0 48 48",
    fill: "none"
  }, [F("path", {
    d: "M8 8L40 40",
    stroke: e.colors[0],
    "stroke-width": e.strokeWidth,
    "stroke-linecap": e.strokeLinecap,
    "stroke-linejoin": e.strokeLinejoin
  }, null), F("path", {
    d: "M8 40L40 8",
    stroke: e.colors[0],
    "stroke-width": e.strokeWidth,
    "stroke-linecap": e.strokeLinecap,
    "stroke-linejoin": e.strokeLinejoin
  }, null)]);
}), ri = Ve("computer", !1, function(e) {
  return F("svg", {
    width: e.size,
    height: e.size,
    viewBox: "0 0 48 48",
    fill: "none"
  }, [F("rect", {
    x: "19",
    y: "32",
    width: "10",
    height: "9",
    stroke: e.colors[0],
    "stroke-width": e.strokeWidth,
    "stroke-linecap": e.strokeLinecap,
    "stroke-linejoin": e.strokeLinejoin
  }, null), F("rect", {
    x: "5",
    y: "8",
    width: "38",
    height: "24",
    rx: "2",
    fill: e.colors[1],
    stroke: e.colors[0],
    "stroke-width": e.strokeWidth
  }, null), F("path", {
    d: "M22 27H26",
    stroke: e.colors[2],
    "stroke-width": e.strokeWidth,
    "stroke-linecap": e.strokeLinecap,
    "stroke-linejoin": e.strokeLinejoin
  }, null), F("path", {
    d: "M14 41L34 41",
    stroke: e.colors[0],
    "stroke-width": e.strokeWidth,
    "stroke-linecap": e.strokeLinecap,
    "stroke-linejoin": e.strokeLinejoin
  }, null)]);
}), ai = Ve("local", !1, function(e) {
  return F("svg", {
    width: e.size,
    height: e.size,
    viewBox: "0 0 48 48",
    fill: "none"
  }, [F("path", {
    d: "M9.85786 32.7574C6.23858 33.8432 4 35.3432 4 37C4 40.3137 12.9543 43 24 43C35.0457 43 44 40.3137 44 37C44 35.3432 41.7614 33.8432 38.1421 32.7574",
    stroke: e.colors[0],
    "stroke-width": e.strokeWidth,
    "stroke-linecap": e.strokeLinecap,
    "stroke-linejoin": e.strokeLinejoin
  }, null), F("path", {
    d: "M24 35C24 35 37 26.504 37 16.6818C37 9.67784 31.1797 4 24 4C16.8203 4 11 9.67784 11 16.6818C11 26.504 24 35 24 35Z",
    fill: e.colors[1],
    stroke: e.colors[0],
    "stroke-width": e.strokeWidth,
    "stroke-linejoin": e.strokeLinejoin
  }, null), F("path", {
    d: "M24 22C26.7614 22 29 19.7614 29 17C29 14.2386 26.7614 12 24 12C21.2386 12 19 14.2386 19 17C19 19.7614 21.2386 22 24 22Z",
    fill: e.colors[3],
    stroke: e.colors[2],
    "stroke-width": e.strokeWidth,
    "stroke-linejoin": e.strokeLinejoin
  }, null)]);
}), Bn = Ve("moon", !0, function(e) {
  return F("svg", {
    width: e.size,
    height: e.size,
    viewBox: "0 0 48 48",
    fill: "none"
  }, [F("path", {
    d: "M28.0527 4.41085C22.5828 5.83695 18.5455 10.8106 18.5455 16.7273C18.5455 23.7564 24.2436 29.4545 31.2727 29.4545C37.1894 29.4545 42.1631 25.4172 43.5891 19.9473C43.8585 21.256 44 22.6115 44 24C44 35.0457 35.0457 44 24 44C12.9543 44 4 35.0457 4 24C4 12.9543 12.9543 4 24 4C25.3885 4 26.744 4.14149 28.0527 4.41085Z",
    fill: e.colors[1],
    stroke: e.colors[0],
    "stroke-width": e.strokeWidth,
    "stroke-linejoin": e.strokeLinejoin
  }, null)]);
}), zs = Ve("refresh", !0, function(e) {
  return F("svg", {
    width: e.size,
    height: e.size,
    viewBox: "0 0 48 48",
    fill: "none"
  }, [F("path", {
    d: "M42 8V24",
    stroke: e.colors[0],
    "stroke-width": e.strokeWidth,
    "stroke-linecap": e.strokeLinecap,
    "stroke-linejoin": e.strokeLinejoin
  }, null), F("path", {
    d: "M6 24L6 40",
    stroke: e.colors[0],
    "stroke-width": e.strokeWidth,
    "stroke-linecap": e.strokeLinecap,
    "stroke-linejoin": e.strokeLinejoin
  }, null), F("path", {
    d: "M42 24C42 14.0589 33.9411 6 24 6C18.9145 6 14.3216 8.10896 11.0481 11.5M6 24C6 33.9411 14.0589 42 24 42C28.8556 42 33.2622 40.0774 36.5 36.9519",
    stroke: e.colors[0],
    "stroke-width": e.strokeWidth,
    "stroke-linecap": e.strokeLinecap,
    "stroke-linejoin": e.strokeLinejoin
  }, null)]);
}), Hs = Ve("sun-one", !1, function(e) {
  return F("svg", {
    width: e.size,
    height: e.size,
    viewBox: "0 0 48 48",
    fill: "none"
  }, [F("path", {
    d: "M24 37C31.1797 37 37 31.1797 37 24C37 16.8203 31.1797 11 24 11C16.8203 11 11 16.8203 11 24C11 31.1797 16.8203 37 24 37Z",
    fill: e.colors[1],
    stroke: e.colors[0],
    "stroke-width": e.strokeWidth,
    "stroke-linejoin": e.strokeLinejoin
  }, null), F("path", {
    d: "M24 6C25.3807 6 26.5 4.88071 26.5 3.5C26.5 2.11929 25.3807 1 24 1C22.6193 1 21.5 2.11929 21.5 3.5C21.5 4.88071 22.6193 6 24 6Z",
    fill: e.colors[0]
  }, null), F("path", {
    d: "M38.5 12C39.8807 12 41 10.8807 41 9.5C41 8.11929 39.8807 7 38.5 7C37.1193 7 36 8.11929 36 9.5C36 10.8807 37.1193 12 38.5 12Z",
    fill: e.colors[0]
  }, null), F("path", {
    d: "M44.5 26.5C45.8807 26.5 47 25.3807 47 24C47 22.6193 45.8807 21.5 44.5 21.5C43.1193 21.5 42 22.6193 42 24C42 25.3807 43.1193 26.5 44.5 26.5Z",
    fill: e.colors[0]
  }, null), F("path", {
    d: "M38.5 41C39.8807 41 41 39.8807 41 38.5C41 37.1193 39.8807 36 38.5 36C37.1193 36 36 37.1193 36 38.5C36 39.8807 37.1193 41 38.5 41Z",
    fill: e.colors[0]
  }, null), F("path", {
    d: "M24 47C25.3807 47 26.5 45.8807 26.5 44.5C26.5 43.1193 25.3807 42 24 42C22.6193 42 21.5 43.1193 21.5 44.5C21.5 45.8807 22.6193 47 24 47Z",
    fill: e.colors[0]
  }, null), F("path", {
    d: "M9.5 41C10.8807 41 12 39.8807 12 38.5C12 37.1193 10.8807 36 9.5 36C8.11929 36 7 37.1193 7 38.5C7 39.8807 8.11929 41 9.5 41Z",
    fill: e.colors[0]
  }, null), F("path", {
    d: "M3.5 26.5C4.88071 26.5 6 25.3807 6 24C6 22.6193 4.88071 21.5 3.5 21.5C2.11929 21.5 1 22.6193 1 24C1 25.3807 2.11929 26.5 3.5 26.5Z",
    fill: e.colors[0]
  }, null), F("path", {
    d: "M9.5 12C10.8807 12 12 10.8807 12 9.5C12 8.11929 10.8807 7 9.5 7C8.11929 7 7 8.11929 7 9.5C7 10.8807 8.11929 12 9.5 12Z",
    fill: e.colors[0]
  }, null)]);
}), Ks = Ve("sunrise", !0, function(e) {
  return F("svg", {
    width: e.size,
    height: e.size,
    viewBox: "0 0 48 48",
    fill: "none"
  }, [F("path", {
    d: "M4 24H7",
    stroke: e.colors[0],
    "stroke-width": e.strokeWidth,
    "stroke-linecap": e.strokeLinecap,
    "stroke-linejoin": e.strokeLinejoin
  }, null), F("path", {
    d: "M10 10L12 12",
    stroke: e.colors[0],
    "stroke-width": e.strokeWidth,
    "stroke-linecap": e.strokeLinecap,
    "stroke-linejoin": e.strokeLinejoin
  }, null), F("path", {
    d: "M24 4V7",
    stroke: e.colors[0],
    "stroke-width": e.strokeWidth,
    "stroke-linecap": e.strokeLinecap,
    "stroke-linejoin": e.strokeLinejoin
  }, null), F("path", {
    d: "M14 24C14 18.4776 18.4776 14 24 14C29.5224 14 34 18.4776 34 24C34 27.3674 32.3357 30.3458 29.785 32.1578",
    stroke: e.colors[0],
    "stroke-width": e.strokeWidth,
    "stroke-linecap": e.strokeLinecap,
    "stroke-linejoin": e.strokeLinejoin
  }, null), F("path", {
    d: "M38 10L36 12",
    stroke: e.colors[0],
    "stroke-width": e.strokeWidth,
    "stroke-linecap": e.strokeLinecap,
    "stroke-linejoin": e.strokeLinejoin
  }, null), F("path", {
    d: "M44 24L41 24",
    stroke: e.colors[0],
    "stroke-width": e.strokeWidth,
    "stroke-linecap": e.strokeLinecap,
    "stroke-linejoin": e.strokeLinejoin
  }, null), F("path", {
    d: "M37.9814 37.982L36.3614 36.362",
    stroke: e.colors[0],
    "stroke-width": e.strokeWidth,
    "stroke-linecap": e.strokeLinecap,
    "stroke-linejoin": e.strokeLinejoin
  }, null), F("path", {
    d: "M23.4999 28C20.4999 28 14 28.2 14 31C14 33.8 18.6058 33.7908 20.9998 34C23 34.1747 26.4624 35.6879 25.9999 38C24.9998 43 8.99982 42 4.99994 42",
    stroke: e.colors[0],
    "stroke-width": e.strokeWidth,
    "stroke-linecap": e.strokeLinecap,
    "stroke-linejoin": e.strokeLinejoin
  }, null)]);
}), ii = Ve("sunset", !1, function(e) {
  return F("svg", {
    width: e.size,
    height: e.size,
    viewBox: "0 0 48 48",
    fill: "none"
  }, [F("path", {
    d: "M19 8L33 34H5L19 8Z",
    fill: e.colors[1],
    stroke: e.colors[0],
    "stroke-width": e.strokeWidth,
    "stroke-linejoin": e.strokeLinejoin
  }, null), F("path", {
    d: "M29 26L34 20L43 34H32",
    stroke: e.colors[0],
    "stroke-width": e.strokeWidth,
    "stroke-linecap": e.strokeLinecap,
    "stroke-linejoin": e.strokeLinejoin
  }, null), F("path", {
    d: "M10 41L38 41",
    stroke: e.colors[0],
    "stroke-width": e.strokeWidth,
    "stroke-linecap": e.strokeLinecap,
    "stroke-linejoin": e.strokeLinejoin
  }, null), F("circle", {
    cx: "38",
    cy: "10",
    r: "3",
    fill: e.colors[1],
    stroke: e.colors[0],
    "stroke-width": e.strokeWidth
  }, null)]);
}), Gs = Ve("time", !0, function(e) {
  return F("svg", {
    width: e.size,
    height: e.size,
    viewBox: "0 0 48 48",
    fill: "none"
  }, [F("path", {
    d: "M24 44C35.0457 44 44 35.0457 44 24C44 12.9543 35.0457 4 24 4C12.9543 4 4 12.9543 4 24C4 35.0457 12.9543 44 24 44Z",
    fill: e.colors[1],
    stroke: e.colors[0],
    "stroke-width": e.strokeWidth,
    "stroke-linejoin": e.strokeLinejoin
  }, null), F("path", {
    d: "M24.0084 12.0001L24.0072 24.0089L32.4866 32.4883",
    stroke: e.colors[2],
    "stroke-width": e.strokeWidth,
    "stroke-linecap": e.strokeLinecap,
    "stroke-linejoin": e.strokeLinejoin
  }, null)]);
});
mt(ha(() => import("./TitlebarGitStatus-DHcww25m.js")));
const li = /* @__PURE__ */ La("configuration", {
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
        this.dbPath = await S("get_db_path") || "";
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
        ] = await S("get_shortcuts");
        this.searchHotkey = e, this.configHotkey = t, this.translateHotkey = n, this.selectionTranslateHotkey = s || "", this.screenshotHotkey = o || "", this.darkModeHotkey = r || "";
      } catch (e) {
        _e.error("获取快捷键配置失败:", e);
      }
      try {
        this.autoUpdateCheck = await S("get_auto_update_check");
      } catch (e) {
        _e.error("获取自动检查失败:", e);
      }
      try {
        this.autoHideOnBlur = await S("get_auto_hide_on_blur");
      } catch (e) {
        _e.error("获取自动失焦隐藏设置:", e);
      }
      try {
        const e = await S("get_language");
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
class ir {
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
    return new Rt(this.width * t, this.height * t);
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
class Rt {
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
    return new ir(this.width / t, this.height / t);
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
    return this.size instanceof ir ? this.size : this.size.toLogical(t);
  }
  toPhysical(t) {
    return this.size instanceof Rt ? this.size : this.size.toPhysical(t);
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
class lr {
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
    return new lr(this.x / t, this.y / t);
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
class en {
  constructor(t) {
    this.position = t;
  }
  toLogical(t) {
    return this.position instanceof lr ? this.position : this.position.toLogical(t);
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
class Ft extends Da {
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
    return S("plugin:image|new", {
      rgba: mn(t),
      width: n,
      height: s
    }).then((o) => new Ft(o));
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
      bytes: mn(t)
    }).then((n) => new Ft(n));
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
    return S("plugin:image|from_path", { path: t }).then((n) => new Ft(n));
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
}
function mn(e) {
  return e == null ? null : typeof e == "string" ? e : e instanceof Ft ? e.rid : e;
}
var qn;
(function(e) {
  e[e.Critical = 1] = "Critical", e[e.Informational = 2] = "Informational";
})(qn || (qn = {}));
class ci {
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
var Ys;
(function(e) {
  e.None = "none", e.Normal = "normal", e.Indeterminate = "indeterminate", e.Paused = "paused", e.Error = "error";
})(Ys || (Ys = {}));
function Qn() {
  return new cr(window.__TAURI_INTERNALS__.metadata.currentWindow.label, {
    // @ts-expect-error `skip` is not defined in the public API but it is handled by the constructor
    skip: !0
  });
}
async function zn() {
  return S("plugin:window|get_all_windows").then((e) => e.map((t) => new cr(t, {
    // @ts-expect-error `skip` is not defined in the public API but it is handled by the constructor
    skip: !0
  })));
}
const Hn = ["tauri://created", "tauri://error"];
class cr {
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
    this.label = t, this.listeners = /* @__PURE__ */ Object.create(null), n?.skip || S("plugin:window|create", {
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
    return (n = (await zn()).find((s) => s.label === t)) !== null && n !== void 0 ? n : null;
  }
  /**
   * Get an instance of `Window` for the current window.
   */
  static getCurrent() {
    return Qn();
  }
  /**
   * Gets a list of instances of `Window` for all available windows.
   */
  static async getAll() {
    return zn();
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
    for (const t of await zn())
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
      const s = this.listeners[t];
      s.splice(s.indexOf(n), 1);
    } : Pa(t, n, {
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
    if (Hn.includes(t)) {
      for (const s of this.listeners[t] || [])
        s({
          event: t,
          id: -1,
          payload: n
        });
      return;
    }
    return Aa(t, n);
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
    if (Hn.includes(n)) {
      for (const o of this.listeners[n] || [])
        o({
          event: n,
          id: -1,
          payload: s
        });
      return;
    }
    return Ma(t, n, s);
  }
  /** @ignore */
  _handleTauriEvent(t, n) {
    return Hn.includes(t) ? (t in this.listeners ? this.listeners[t].push(n) : this.listeners[t] = [n], !0) : !1;
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
    return S("plugin:window|outer_position", {
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
    return S("plugin:window|inner_size", {
      label: this.label
    }).then((t) => new Rt(t));
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
    }).then((t) => new Rt(t));
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
    let n = null;
    return t && (t === qn.Critical ? n = { type: "Critical" } : n = { type: "Informational" }), S("plugin:window|request_user_attention", {
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
    return S("plugin:window|set_min_size", {
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
    return S("plugin:window|set_max_size", {
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
    return S("plugin:window|set_size_constraints", {
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
    return S("plugin:window|set_position", {
      label: this.label,
      value: t instanceof en ? t : new en(t)
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
      value: mn(t)
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
      value: t instanceof en ? t : new en(t)
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
      value: t ? mn(t) : void 0
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
    return this.listen(pe.WINDOW_RESIZED, (n) => {
      n.payload = new Rt(n.payload), t(n);
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
      const s = new ci(n);
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
var Xs;
(function(e) {
  e.Disabled = "disabled", e.Throttle = "throttle", e.Suspend = "suspend";
})(Xs || (Xs = {}));
var Js;
(function(e) {
  e.AppearanceBased = "appearanceBased", e.Light = "light", e.Dark = "dark", e.MediumLight = "mediumLight", e.UltraDark = "ultraDark", e.Titlebar = "titlebar", e.Selection = "selection", e.Menu = "menu", e.Popover = "popover", e.Sidebar = "sidebar", e.HeaderView = "headerView", e.Sheet = "sheet", e.WindowBackground = "windowBackground", e.HudWindow = "hudWindow", e.FullScreenUI = "fullScreenUI", e.Tooltip = "tooltip", e.ContentBackground = "contentBackground", e.UnderWindowBackground = "underWindowBackground", e.UnderPageBackground = "underPageBackground", e.Mica = "mica", e.Blur = "blur", e.Acrylic = "acrylic", e.Tabbed = "tabbed", e.TabbedDark = "tabbedDark", e.TabbedLight = "tabbedLight";
})(Js || (Js = {}));
var Zs;
(function(e) {
  e.FollowsWindowActiveState = "followsWindowActiveState", e.Active = "active", e.Inactive = "inactive";
})(Zs || (Zs = {}));
/*!
  * shared v11.2.2
  * (c) 2025 kazuya kawaguchi
  * Released under the MIT License.
  */
function De(e, t) {
  typeof console < "u" && (console.warn("[intlify] " + e), t && console.warn(t.stack));
}
const qs = {};
function ui(e) {
  qs[e] || (qs[e] = !0, De(e));
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
const di = /\{([0-9a-zA-Z]+)\}/g;
function kn(e, ...t) {
  return t.length === 1 && K(t[0]) && (t = t[0]), (!t || !t.hasOwnProperty) && (t = {}), e.replace(di, (n, s) => t.hasOwnProperty(s) ? t[s] : "");
}
const xe = (e, t = !1) => t ? Symbol.for(e) : Symbol(e), fi = (e, t, n) => _i({ l: e, k: t, s: n }), _i = (e) => JSON.stringify(e).replace(/\u2028/g, "\\u2028").replace(/\u2029/g, "\\u2029").replace(/\u0027/g, "\\u0027"), ie = (e) => typeof e == "number" && isFinite(e), mi = (e) => gs(e) === "[object Date]", hn = (e) => gs(e) === "[object RegExp]", wn = (e) => H(e) && Object.keys(e).length === 0, le = Object.assign, hi = Object.create, X = (e = null) => hi(e);
let Qs;
const Qe = () => Qs || (Qs = typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : typeof window < "u" ? window : typeof global < "u" ? global : X());
function eo(e) {
  return e.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;").replace(/'/g, "&apos;").replace(/\//g, "&#x2F;").replace(/=/g, "&#x3D;");
}
function to(e) {
  return e.replace(/&(?![a-zA-Z0-9#]{2,6};)/g, "&amp;").replace(/"/g, "&quot;").replace(/'/g, "&apos;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
}
function pi(e) {
  return e = e.replace(/(\w+)\s*=\s*"([^"]*)"/g, (s, o, r) => `${o}="${to(r)}"`), e = e.replace(/(\w+)\s*=\s*'([^']*)'/g, (s, o, r) => `${o}='${to(r)}'`), /\s*on\w+\s*=\s*["']?[^"'>]+["']?/gi.test(e) && (process.env.NODE_ENV !== "production" && De("Potentially dangerous event handlers detected in translation. Consider removing onclick, onerror, etc. from your translation messages."), e = e.replace(/(\s+)(on)(\w+\s*=)/gi, "$1&#111;n$3")), [
    // In href, src, action, formaction attributes
    /(\s+(?:href|src|action|formaction)\s*=\s*["']?)\s*javascript:/gi,
    // In style attributes within url()
    /(style\s*=\s*["'][^"']*url\s*\(\s*)javascript:/gi
  ].forEach((s) => {
    e = e.replace(s, "$1javascript&#58;");
  }), e;
}
const gi = Object.prototype.hasOwnProperty;
function ke(e, t) {
  return gi.call(e, t);
}
const se = Array.isArray, Q = (e) => typeof e == "function", R = (e) => typeof e == "string", ne = (e) => typeof e == "boolean", K = (e) => e !== null && typeof e == "object", yi = (e) => K(e) && Q(e.then) && Q(e.catch), ur = Object.prototype.toString, gs = (e) => ur.call(e), H = (e) => gs(e) === "[object Object]", vi = (e) => e == null ? "" : se(e) || H(e) && e.toString === ur ? JSON.stringify(e, null, 2) : String(e);
function ys(e, t = "") {
  return e.reduce((n, s, o) => o === 0 ? n + s : n + t + s, "");
}
const no = 2;
function Ei(e, t = 0, n = e.length) {
  const s = e.split(/\r?\n/);
  let o = 0;
  const r = [];
  for (let a = 0; a < s.length; a++)
    if (o += s[a].length + 1, o >= t) {
      for (let i = a - no; i <= a + no || n > o; i++) {
        if (i < 0 || i >= s.length)
          continue;
        const c = i + 1;
        r.push(`${c}${" ".repeat(3 - String(c).length)}|  ${s[i]}`);
        const _ = s[i].length;
        if (i === a) {
          const h = t - (o - _) + 1, b = Math.max(1, n > o ? _ - h : n - t);
          r.push("   |  " + " ".repeat(h) + "^".repeat(b));
        } else if (i > a) {
          if (n > o) {
            const h = Math.max(Math.min(n - o, _), 1);
            r.push("   |  " + "^".repeat(h));
          }
          o += _ + 1;
        }
      }
      break;
    }
  return r.join(`
`);
}
function bi() {
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
const tn = (e) => !K(e) || se(e);
function rn(e, t) {
  if (tn(e) || tn(t))
    throw new Error("Invalid value");
  const n = [{ src: e, des: t }];
  for (; n.length; ) {
    const { src: s, des: o } = n.pop();
    Object.keys(s).forEach((r) => {
      r !== "__proto__" && (K(s[r]) && !K(o[r]) && (o[r] = Array.isArray(s[r]) ? [] : X()), tn(o[r]) || tn(s[r]) ? o[r] = s[r] : n.push({ src: s[r], des: o[r] }));
    });
  }
}
/*!
  * message-compiler v11.2.2
  * (c) 2025 kazuya kawaguchi
  * Released under the MIT License.
  */
function Ni(e, t, n) {
  return { line: e, column: t, offset: n };
}
function es(e, t, n) {
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
}, ki = 17, wi = {
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
function bt(e, t, n = {}) {
  const { domain: s, messages: o, args: r } = n, a = process.env.NODE_ENV !== "production" ? kn((o || wi)[e] || "", ...r || []) : e, i = new SyntaxError(String(a));
  return i.code = e, t && (i.location = t), i.domain = s, i;
}
function Ci(e) {
  throw e;
}
const Oi = /<\/?[\w\s="/.':;#-\/]+>/, Li = (e) => Oi.test(e), Oe = " ", Ti = "\r", fe = `
`, Si = "\u2028", Ii = "\u2029";
function Di(e) {
  const t = e;
  let n = 0, s = 1, o = 1, r = 0;
  const a = (d) => t[d] === Ti && t[d + 1] === fe, i = (d) => t[d] === fe, c = (d) => t[d] === Ii, _ = (d) => t[d] === Si, h = (d) => a(d) || i(d) || c(d) || _(d), b = () => n, m = () => s, O = () => o, M = () => r, w = (d) => a(d) || c(d) || _(d) ? fe : t[d], T = () => w(n), f = () => w(n + r);
  function k() {
    return r = 0, h(n) && (s++, o = 0), a(n) && n++, n++, o++, t[n];
  }
  function E() {
    return a(n + r) && r++, r++, t[n + r];
  }
  function N() {
    n = 0, s = 1, o = 1, r = 0;
  }
  function P(d = 0) {
    r = d;
  }
  function A() {
    const d = n + r;
    for (; d !== n; )
      k();
    r = 0;
  }
  return {
    index: b,
    line: m,
    column: O,
    peekOffset: M,
    charAt: w,
    currentChar: T,
    currentPeek: f,
    next: k,
    peek: E,
    reset: N,
    resetPeek: P,
    skipToPeek: A
  };
}
const Re = void 0, Pi = ".", so = "'", Ai = "tokenizer";
function Mi(e, t = {}) {
  const n = t.location !== !1, s = Di(e), o = () => s.index(), r = () => Ni(s.line(), s.column(), s.index()), a = r(), i = o(), c = {
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
  }, _ = () => c, { onError: h } = t;
  function b(l, u, L, ...$) {
    const q = _();
    if (u.column += L, u.offset += L, h) {
      const ee = n ? es(q.startLoc, u) : null, z = bt(l, ee, {
        domain: Ai,
        args: $
      });
      h(z);
    }
  }
  function m(l, u, L) {
    l.endLoc = r(), l.currentType = u;
    const $ = { type: u };
    return n && ($.loc = es(l.startLoc, l.endLoc)), L != null && ($.value = L), $;
  }
  const O = (l) => m(
    l,
    13
    /* TokenTypes.EOF */
  );
  function M(l, u) {
    return l.currentChar() === u ? (l.next(), u) : (b(V.EXPECTED_TOKEN, r(), 0, u), "");
  }
  function w(l) {
    let u = "";
    for (; l.currentPeek() === Oe || l.currentPeek() === fe; )
      u += l.currentPeek(), l.peek();
    return u;
  }
  function T(l) {
    const u = w(l);
    return l.skipToPeek(), u;
  }
  function f(l) {
    if (l === Re)
      return !1;
    const u = l.charCodeAt(0);
    return u >= 97 && u <= 122 || // a-z
    u >= 65 && u <= 90 || // A-Z
    u === 95;
  }
  function k(l) {
    if (l === Re)
      return !1;
    const u = l.charCodeAt(0);
    return u >= 48 && u <= 57;
  }
  function E(l, u) {
    const { currentType: L } = u;
    if (L !== 2)
      return !1;
    w(l);
    const $ = f(l.currentPeek());
    return l.resetPeek(), $;
  }
  function N(l, u) {
    const { currentType: L } = u;
    if (L !== 2)
      return !1;
    w(l);
    const $ = l.currentPeek() === "-" ? l.peek() : l.currentPeek(), q = k($);
    return l.resetPeek(), q;
  }
  function P(l, u) {
    const { currentType: L } = u;
    if (L !== 2)
      return !1;
    w(l);
    const $ = l.currentPeek() === so;
    return l.resetPeek(), $;
  }
  function A(l, u) {
    const { currentType: L } = u;
    if (L !== 7)
      return !1;
    w(l);
    const $ = l.currentPeek() === ".";
    return l.resetPeek(), $;
  }
  function d(l, u) {
    const { currentType: L } = u;
    if (L !== 8)
      return !1;
    w(l);
    const $ = f(l.currentPeek());
    return l.resetPeek(), $;
  }
  function j(l, u) {
    const { currentType: L } = u;
    if (!(L === 7 || L === 11))
      return !1;
    w(l);
    const $ = l.currentPeek() === ":";
    return l.resetPeek(), $;
  }
  function g(l, u) {
    const { currentType: L } = u;
    if (L !== 9)
      return !1;
    const $ = () => {
      const ee = l.currentPeek();
      return ee === "{" ? f(l.peek()) : ee === "@" || ee === "|" || ee === ":" || ee === "." || ee === Oe || !ee ? !1 : ee === fe ? (l.peek(), $()) : I(l, !1);
    }, q = $();
    return l.resetPeek(), q;
  }
  function C(l) {
    w(l);
    const u = l.currentPeek() === "|";
    return l.resetPeek(), u;
  }
  function I(l, u = !0) {
    const L = (q = !1, ee = "") => {
      const z = l.currentPeek();
      return z === "{" || z === "@" || !z ? q : z === "|" ? !(ee === Oe || ee === fe) : z === Oe ? (l.peek(), L(!0, Oe)) : z === fe ? (l.peek(), L(!0, fe)) : !0;
    }, $ = L();
    return u && l.resetPeek(), $;
  }
  function x(l, u) {
    const L = l.currentChar();
    return L === Re ? Re : u(L) ? (l.next(), L) : null;
  }
  function oe(l) {
    const u = l.charCodeAt(0);
    return u >= 97 && u <= 122 || // a-z
    u >= 65 && u <= 90 || // A-Z
    u >= 48 && u <= 57 || // 0-9
    u === 95 || // _
    u === 36;
  }
  function Pe(l) {
    return x(l, oe);
  }
  function Ge(l) {
    const u = l.charCodeAt(0);
    return u >= 97 && u <= 122 || // a-z
    u >= 65 && u <= 90 || // A-Z
    u >= 48 && u <= 57 || // 0-9
    u === 95 || // _
    u === 36 || // $
    u === 45;
  }
  function kt(l) {
    return x(l, Ge);
  }
  function wt(l) {
    const u = l.charCodeAt(0);
    return u >= 48 && u <= 57;
  }
  function Ae(l) {
    return x(l, wt);
  }
  function ue(l) {
    const u = l.charCodeAt(0);
    return u >= 48 && u <= 57 || // 0-9
    u >= 65 && u <= 70 || // A-F
    u >= 97 && u <= 102;
  }
  function Me(l) {
    return x(l, ue);
  }
  function Ct(l) {
    let u = "", L = "";
    for (; u = Ae(l); )
      L += u;
    return L;
  }
  function Dn(l) {
    let u = "";
    for (; ; ) {
      const L = l.currentChar();
      if (L === "{" || L === "}" || L === "@" || L === "|" || !L)
        break;
      if (L === Oe || L === fe)
        if (I(l))
          u += L, l.next();
        else {
          if (C(l))
            break;
          u += L, l.next();
        }
      else
        u += L, l.next();
    }
    return u;
  }
  function Pn(l) {
    T(l);
    let u = "", L = "";
    for (; u = kt(l); )
      L += u;
    const $ = l.currentChar();
    if ($ && $ !== "}" && $ !== Re && $ !== Oe && $ !== fe && $ !== "　") {
      const q = Zt(l);
      return b(V.INVALID_TOKEN_IN_PLACEHOLDER, r(), 0, L + q), L + q;
    }
    return l.currentChar() === Re && b(V.UNTERMINATED_CLOSING_BRACE, r(), 0), L;
  }
  function An(l) {
    T(l);
    let u = "";
    return l.currentChar() === "-" ? (l.next(), u += `-${Ct(l)}`) : u += Ct(l), l.currentChar() === Re && b(V.UNTERMINATED_CLOSING_BRACE, r(), 0), u;
  }
  function Mn(l) {
    return l !== so && l !== fe;
  }
  function As(l) {
    T(l), M(l, "'");
    let u = "", L = "";
    for (; u = x(l, Mn); )
      u === "\\" ? L += Rn(l) : L += u;
    const $ = l.currentChar();
    return $ === fe || $ === Re ? (b(V.UNTERMINATED_SINGLE_QUOTE_IN_PLACEHOLDER, r(), 0), $ === fe && (l.next(), M(l, "'")), L) : (M(l, "'"), L);
  }
  function Rn(l) {
    const u = l.currentChar();
    switch (u) {
      case "\\":
      case "'":
        return l.next(), `\\${u}`;
      case "u":
        return Jt(l, u, 4);
      case "U":
        return Jt(l, u, 6);
      default:
        return b(V.UNKNOWN_ESCAPE_SEQUENCE, r(), 0, u), "";
    }
  }
  function Jt(l, u, L) {
    M(l, u);
    let $ = "";
    for (let q = 0; q < L; q++) {
      const ee = Me(l);
      if (!ee) {
        b(V.INVALID_UNICODE_ESCAPE_SEQUENCE, r(), 0, `\\${u}${$}${l.currentChar()}`);
        break;
      }
      $ += ee;
    }
    return `\\${u}${$}`;
  }
  function Fn(l) {
    return l !== "{" && l !== "}" && l !== Oe && l !== fe;
  }
  function Zt(l) {
    T(l);
    let u = "", L = "";
    for (; u = x(l, Fn); )
      L += u;
    return L;
  }
  function $n(l) {
    let u = "", L = "";
    for (; u = Pe(l); )
      L += u;
    return L;
  }
  function Un(l) {
    const u = (L) => {
      const $ = l.currentChar();
      return $ === "{" || $ === "@" || $ === "|" || $ === "(" || $ === ")" || !$ || $ === Oe ? L : (L += $, l.next(), u(L));
    };
    return u("");
  }
  function Ot(l) {
    T(l);
    const u = M(
      l,
      "|"
      /* TokenChars.Pipe */
    );
    return T(l), u;
  }
  function Lt(l, u) {
    let L = null;
    switch (l.currentChar()) {
      case "{":
        return u.braceNest >= 1 && b(V.NOT_ALLOW_NEST_PLACEHOLDER, r(), 0), l.next(), L = m(
          u,
          2,
          "{"
          /* TokenChars.BraceLeft */
        ), T(l), u.braceNest++, L;
      case "}":
        return u.braceNest > 0 && u.currentType === 2 && b(V.EMPTY_PLACEHOLDER, r(), 0), l.next(), L = m(
          u,
          3,
          "}"
          /* TokenChars.BraceRight */
        ), u.braceNest--, u.braceNest > 0 && T(l), u.inLinked && u.braceNest === 0 && (u.inLinked = !1), L;
      case "@":
        return u.braceNest > 0 && b(V.UNTERMINATED_CLOSING_BRACE, r(), 0), L = Ye(l, u) || O(u), u.braceNest = 0, L;
      default: {
        let q = !0, ee = !0, z = !0;
        if (C(l))
          return u.braceNest > 0 && b(V.UNTERMINATED_CLOSING_BRACE, r(), 0), L = m(u, 1, Ot(l)), u.braceNest = 0, u.inLinked = !1, L;
        if (u.braceNest > 0 && (u.currentType === 4 || u.currentType === 5 || u.currentType === 6))
          return b(V.UNTERMINATED_CLOSING_BRACE, r(), 0), u.braceNest = 0, Tt(l, u);
        if (q = E(l, u))
          return L = m(u, 4, Pn(l)), T(l), L;
        if (ee = N(l, u))
          return L = m(u, 5, An(l)), T(l), L;
        if (z = P(l, u))
          return L = m(u, 6, As(l)), T(l), L;
        if (!q && !ee && !z)
          return L = m(u, 12, Zt(l)), b(V.INVALID_TOKEN_IN_PLACEHOLDER, r(), 0, L.value), T(l), L;
        break;
      }
    }
    return L;
  }
  function Ye(l, u) {
    const { currentType: L } = u;
    let $ = null;
    const q = l.currentChar();
    switch ((L === 7 || L === 8 || L === 11 || L === 9) && (q === fe || q === Oe) && b(V.INVALID_LINKED_FORMAT, r(), 0), q) {
      case "@":
        return l.next(), $ = m(
          u,
          7,
          "@"
          /* TokenChars.LinkedAlias */
        ), u.inLinked = !0, $;
      case ".":
        return T(l), l.next(), m(
          u,
          8,
          "."
          /* TokenChars.LinkedDot */
        );
      case ":":
        return T(l), l.next(), m(
          u,
          9,
          ":"
          /* TokenChars.LinkedDelimiter */
        );
      default:
        return C(l) ? ($ = m(u, 1, Ot(l)), u.braceNest = 0, u.inLinked = !1, $) : A(l, u) || j(l, u) ? (T(l), Ye(l, u)) : d(l, u) ? (T(l), m(u, 11, $n(l))) : g(l, u) ? (T(l), q === "{" ? Lt(l, u) || $ : m(u, 10, Un(l))) : (L === 7 && b(V.INVALID_LINKED_FORMAT, r(), 0), u.braceNest = 0, u.inLinked = !1, Tt(l, u));
    }
  }
  function Tt(l, u) {
    let L = {
      type: 13
      /* TokenTypes.EOF */
    };
    if (u.braceNest > 0)
      return Lt(l, u) || O(u);
    if (u.inLinked)
      return Ye(l, u) || O(u);
    switch (l.currentChar()) {
      case "{":
        return Lt(l, u) || O(u);
      case "}":
        return b(V.UNBALANCED_CLOSING_BRACE, r(), 0), l.next(), m(
          u,
          3,
          "}"
          /* TokenChars.BraceRight */
        );
      case "@":
        return Ye(l, u) || O(u);
      default: {
        if (C(l))
          return L = m(u, 1, Ot(l)), u.braceNest = 0, u.inLinked = !1, L;
        if (I(l))
          return m(u, 0, Dn(l));
        break;
      }
    }
    return L;
  }
  function Vn() {
    const { currentType: l, offset: u, startLoc: L, endLoc: $ } = c;
    return c.lastType = l, c.lastOffset = u, c.lastStartLoc = L, c.lastEndLoc = $, c.offset = o(), c.startLoc = r(), s.currentChar() === Re ? m(
      c,
      13
      /* TokenTypes.EOF */
    ) : Tt(s, c);
  }
  return {
    nextToken: Vn,
    currentOffset: o,
    currentPosition: r,
    context: _
  };
}
const Ri = "parser", Fi = /(?:\\\\|\\'|\\u([0-9a-fA-F]{4})|\\U([0-9a-fA-F]{6}))/g;
function $i(e, t, n) {
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
function Ui(e = {}) {
  const t = e.location !== !1, { onError: n } = e;
  function s(f, k, E, N, ...P) {
    const A = f.currentPosition();
    if (A.offset += N, A.column += N, n) {
      const d = t ? es(E, A) : null, j = bt(k, d, {
        domain: Ri,
        args: P
      });
      n(j);
    }
  }
  function o(f, k, E) {
    const N = { type: f };
    return t && (N.start = k, N.end = k, N.loc = { start: E, end: E }), N;
  }
  function r(f, k, E, N) {
    t && (f.end = k, f.loc && (f.loc.end = E));
  }
  function a(f, k) {
    const E = f.context(), N = o(3, E.offset, E.startLoc);
    return N.value = k, r(N, f.currentOffset(), f.currentPosition()), N;
  }
  function i(f, k) {
    const E = f.context(), { lastOffset: N, lastStartLoc: P } = E, A = o(5, N, P);
    return A.index = parseInt(k, 10), f.nextToken(), r(A, f.currentOffset(), f.currentPosition()), A;
  }
  function c(f, k) {
    const E = f.context(), { lastOffset: N, lastStartLoc: P } = E, A = o(4, N, P);
    return A.key = k, f.nextToken(), r(A, f.currentOffset(), f.currentPosition()), A;
  }
  function _(f, k) {
    const E = f.context(), { lastOffset: N, lastStartLoc: P } = E, A = o(9, N, P);
    return A.value = k.replace(Fi, $i), f.nextToken(), r(A, f.currentOffset(), f.currentPosition()), A;
  }
  function h(f) {
    const k = f.nextToken(), E = f.context(), { lastOffset: N, lastStartLoc: P } = E, A = o(8, N, P);
    return k.type !== 11 ? (s(f, V.UNEXPECTED_EMPTY_LINKED_MODIFIER, E.lastStartLoc, 0), A.value = "", r(A, N, P), {
      nextConsumeToken: k,
      node: A
    }) : (k.value == null && s(f, V.UNEXPECTED_LEXICAL_ANALYSIS, E.lastStartLoc, 0, Le(k)), A.value = k.value || "", r(A, f.currentOffset(), f.currentPosition()), {
      node: A
    });
  }
  function b(f, k) {
    const E = f.context(), N = o(7, E.offset, E.startLoc);
    return N.value = k, r(N, f.currentOffset(), f.currentPosition()), N;
  }
  function m(f) {
    const k = f.context(), E = o(6, k.offset, k.startLoc);
    let N = f.nextToken();
    if (N.type === 8) {
      const P = h(f);
      E.modifier = P.node, N = P.nextConsumeToken || f.nextToken();
    }
    switch (N.type !== 9 && s(f, V.UNEXPECTED_LEXICAL_ANALYSIS, k.lastStartLoc, 0, Le(N)), N = f.nextToken(), N.type === 2 && (N = f.nextToken()), N.type) {
      case 10:
        N.value == null && s(f, V.UNEXPECTED_LEXICAL_ANALYSIS, k.lastStartLoc, 0, Le(N)), E.key = b(f, N.value || "");
        break;
      case 4:
        N.value == null && s(f, V.UNEXPECTED_LEXICAL_ANALYSIS, k.lastStartLoc, 0, Le(N)), E.key = c(f, N.value || "");
        break;
      case 5:
        N.value == null && s(f, V.UNEXPECTED_LEXICAL_ANALYSIS, k.lastStartLoc, 0, Le(N)), E.key = i(f, N.value || "");
        break;
      case 6:
        N.value == null && s(f, V.UNEXPECTED_LEXICAL_ANALYSIS, k.lastStartLoc, 0, Le(N)), E.key = _(f, N.value || "");
        break;
      default: {
        s(f, V.UNEXPECTED_EMPTY_LINKED_KEY, k.lastStartLoc, 0);
        const P = f.context(), A = o(7, P.offset, P.startLoc);
        return A.value = "", r(A, P.offset, P.startLoc), E.key = A, r(E, P.offset, P.startLoc), {
          nextConsumeToken: N,
          node: E
        };
      }
    }
    return r(E, f.currentOffset(), f.currentPosition()), {
      node: E
    };
  }
  function O(f) {
    const k = f.context(), E = k.currentType === 1 ? f.currentOffset() : k.offset, N = k.currentType === 1 ? k.endLoc : k.startLoc, P = o(2, E, N);
    P.items = [];
    let A = null;
    do {
      const g = A || f.nextToken();
      switch (A = null, g.type) {
        case 0:
          g.value == null && s(f, V.UNEXPECTED_LEXICAL_ANALYSIS, k.lastStartLoc, 0, Le(g)), P.items.push(a(f, g.value || ""));
          break;
        case 5:
          g.value == null && s(f, V.UNEXPECTED_LEXICAL_ANALYSIS, k.lastStartLoc, 0, Le(g)), P.items.push(i(f, g.value || ""));
          break;
        case 4:
          g.value == null && s(f, V.UNEXPECTED_LEXICAL_ANALYSIS, k.lastStartLoc, 0, Le(g)), P.items.push(c(f, g.value || ""));
          break;
        case 6:
          g.value == null && s(f, V.UNEXPECTED_LEXICAL_ANALYSIS, k.lastStartLoc, 0, Le(g)), P.items.push(_(f, g.value || ""));
          break;
        case 7: {
          const C = m(f);
          P.items.push(C.node), A = C.nextConsumeToken || null;
          break;
        }
      }
    } while (k.currentType !== 13 && k.currentType !== 1);
    const d = k.currentType === 1 ? k.lastOffset : f.currentOffset(), j = k.currentType === 1 ? k.lastEndLoc : f.currentPosition();
    return r(P, d, j), P;
  }
  function M(f, k, E, N) {
    const P = f.context();
    let A = N.items.length === 0;
    const d = o(1, k, E);
    d.cases = [], d.cases.push(N);
    do {
      const j = O(f);
      A || (A = j.items.length === 0), d.cases.push(j);
    } while (P.currentType !== 13);
    return A && s(f, V.MUST_HAVE_MESSAGES_IN_PLURAL, E, 0), r(d, f.currentOffset(), f.currentPosition()), d;
  }
  function w(f) {
    const k = f.context(), { offset: E, startLoc: N } = k, P = O(f);
    return k.currentType === 13 ? P : M(f, E, N, P);
  }
  function T(f) {
    const k = Mi(f, le({}, e)), E = k.context(), N = o(0, E.offset, E.startLoc);
    return t && N.loc && (N.loc.source = f), N.body = w(k), e.onCacheKey && (N.cacheKey = e.onCacheKey(f)), E.currentType !== 13 && s(k, V.UNEXPECTED_LEXICAL_ANALYSIS, E.lastStartLoc, 0, f[E.offset] || ""), r(N, k.currentOffset(), k.currentPosition()), N;
  }
  return { parse: T };
}
function Le(e) {
  if (e.type === 13)
    return "EOF";
  const t = (e.value || "").replace(/\r?\n/gu, "\\n");
  return t.length > 10 ? t.slice(0, 9) + "…" : t;
}
function Vi(e, t = {}) {
  const n = {
    ast: e,
    helpers: /* @__PURE__ */ new Set()
  };
  return { context: () => n, helper: (r) => (n.helpers.add(r), r) };
}
function oo(e, t) {
  for (let n = 0; n < e.length; n++)
    vs(e[n], t);
}
function vs(e, t) {
  switch (e.type) {
    case 1:
      oo(e.cases, t), t.helper(
        "plural"
        /* HelperNameMap.PLURAL */
      );
      break;
    case 2:
      oo(e.items, t);
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
function xi(e, t = {}) {
  const n = Vi(e);
  n.helper(
    "normalize"
    /* HelperNameMap.NORMALIZE */
  ), e.body && vs(e.body, n);
  const s = n.context();
  e.helpers = Array.from(s.helpers);
}
function Wi(e) {
  const t = e.body;
  return t.type === 2 ? ro(t) : t.cases.forEach((n) => ro(n)), e;
}
function ro(e) {
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
      e.static = ys(t);
      for (let n = 0; n < e.items.length; n++) {
        const s = e.items[n];
        (s.type === 3 || s.type === 9) && delete s.value;
      }
    }
  }
}
const ji = "minifier";
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
        throw bt(V.UNHANDLED_MINIFIER_NODE_TYPE, null, {
          domain: ji,
          args: [e.type]
        });
  }
  delete e.type;
}
const Bi = "parser";
function zi(e, t) {
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
  function c(w, T) {
    a.code += w;
  }
  function _(w, T = !0) {
    const f = T ? s : "";
    c(o ? f + "  ".repeat(w) : f);
  }
  function h(w = !0) {
    const T = ++a.indentLevel;
    w && _(T);
  }
  function b(w = !0) {
    const T = --a.indentLevel;
    w && _(T);
  }
  function m() {
    _(a.indentLevel);
  }
  return {
    context: i,
    push: c,
    indent: h,
    deindent: b,
    newline: m,
    helper: (w) => `_${w}`,
    needIndent: () => a.needIndent
  };
}
function Hi(e, t) {
  const { helper: n } = e;
  e.push(`${n(
    "linked"
    /* HelperNameMap.LINKED */
  )}(`), gt(e, t.key), t.modifier ? (e.push(", "), gt(e, t.modifier), e.push(", _type")) : e.push(", undefined, _type"), e.push(")");
}
function Ki(e, t) {
  const { helper: n, needIndent: s } = e;
  e.push(`${n(
    "normalize"
    /* HelperNameMap.NORMALIZE */
  )}([`), e.indent(s());
  const o = t.items.length;
  for (let r = 0; r < o && (gt(e, t.items[r]), r !== o - 1); r++)
    e.push(", ");
  e.deindent(s()), e.push("])");
}
function Gi(e, t) {
  const { helper: n, needIndent: s } = e;
  if (t.cases.length > 1) {
    e.push(`${n(
      "plural"
      /* HelperNameMap.PLURAL */
    )}([`), e.indent(s());
    const o = t.cases.length;
    for (let r = 0; r < o && (gt(e, t.cases[r]), r !== o - 1); r++)
      e.push(", ");
    e.deindent(s()), e.push("])");
  }
}
function Yi(e, t) {
  t.body ? gt(e, t.body) : e.push("null");
}
function gt(e, t) {
  const { helper: n } = e;
  switch (t.type) {
    case 0:
      Yi(e, t);
      break;
    case 1:
      Gi(e, t);
      break;
    case 2:
      Ki(e, t);
      break;
    case 6:
      Hi(e, t);
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
        throw bt(V.UNHANDLED_CODEGEN_NODE_TYPE, null, {
          domain: Bi,
          args: [t.type]
        });
  }
}
const Xi = (e, t = {}) => {
  const n = R(t.mode) ? t.mode : "normal", s = R(t.filename) ? t.filename : "message.intl";
  t.sourceMap;
  const o = t.breakLineCode != null ? t.breakLineCode : n === "arrow" ? ";" : `
`, r = t.needIndent ? t.needIndent : n !== "arrow", a = e.helpers || [], i = zi(e, {
    filename: s,
    breakLineCode: o,
    needIndent: r
  });
  i.push(n === "normal" ? "function __msg__ (ctx) {" : "(ctx) => {"), i.indent(r), a.length > 0 && (i.push(`const { ${ys(a.map((h) => `${h}: _${h}`), ", ")} } = ctx`), i.newline()), i.push("return "), gt(i, e), i.deindent(r), i.push("}"), delete e.helpers;
  const { code: c, map: _ } = i.context();
  return {
    ast: e,
    code: c,
    map: _ ? _.toJSON() : void 0
    // eslint-disable-line @typescript-eslint/no-explicit-any
  };
};
function Ji(e, t = {}) {
  const n = le({}, t), s = !!n.jit, o = !!n.minify, r = n.optimize == null ? !0 : n.optimize, i = Ui(n).parse(e);
  return s ? (r && Wi(i), o && _t(i), { ast: i, code: "" }) : (xi(i, n), Xi(i, n));
}
/*!
  * core-base v11.2.2
  * (c) 2025 kazuya kawaguchi
  * Released under the MIT License.
  */
function Zi() {
  typeof __INTLIFY_PROD_DEVTOOLS__ != "boolean" && (Qe().__INTLIFY_PROD_DEVTOOLS__ = !1), typeof __INTLIFY_DROP_MESSAGE_COMPILER__ != "boolean" && (Qe().__INTLIFY_DROP_MESSAGE_COMPILER__ = !1);
}
function Ce(e) {
  return K(e) && Es(e) === 0 && (ke(e, "b") || ke(e, "body"));
}
const dr = ["b", "body"];
function qi(e) {
  return He(e, dr);
}
const fr = ["c", "cases"];
function Qi(e) {
  return He(e, fr, []);
}
const _r = ["s", "static"];
function el(e) {
  return He(e, _r);
}
const mr = ["i", "items"];
function tl(e) {
  return He(e, mr, []);
}
const hr = ["t", "type"];
function Es(e) {
  return He(e, hr);
}
const pr = ["v", "value"];
function nn(e, t) {
  const n = He(e, pr);
  if (n != null)
    return n;
  throw Wt(t);
}
const gr = ["m", "modifier"];
function nl(e) {
  return He(e, gr);
}
const yr = ["k", "key"];
function sl(e) {
  const t = He(e, yr);
  if (t)
    return t;
  throw Wt(
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
const vr = [
  ...dr,
  ...fr,
  ..._r,
  ...mr,
  ...yr,
  ...gr,
  ...pr,
  ...hr
];
function Wt(e) {
  return new Error(`unhandled node type: ${e}`);
}
function Kn(e) {
  return (n) => ol(n, e);
}
function ol(e, t) {
  const n = qi(t);
  if (n == null)
    throw Wt(
      0
      /* NodeTypes.Resource */
    );
  if (Es(n) === 1) {
    const r = Qi(n);
    return e.plural(r.reduce((a, i) => [
      ...a,
      ao(e, i)
    ], []));
  } else
    return ao(e, n);
}
function ao(e, t) {
  const n = el(t);
  if (n != null)
    return e.type === "text" ? n : e.normalize([n]);
  {
    const s = tl(t).reduce((o, r) => [...o, ts(e, r)], []);
    return e.normalize(s);
  }
}
function ts(e, t) {
  const n = Es(t);
  switch (n) {
    case 3:
      return nn(t, n);
    case 9:
      return nn(t, n);
    case 4: {
      const s = t;
      if (ke(s, "k") && s.k)
        return e.interpolate(e.named(s.k));
      if (ke(s, "key") && s.key)
        return e.interpolate(e.named(s.key));
      throw Wt(n);
    }
    case 5: {
      const s = t;
      if (ke(s, "i") && ie(s.i))
        return e.interpolate(e.list(s.i));
      if (ke(s, "index") && ie(s.index))
        return e.interpolate(e.list(s.index));
      throw Wt(n);
    }
    case 6: {
      const s = t, o = nl(s), r = sl(s);
      return e.linked(ts(e, r), o ? ts(e, o) : void 0, e.type);
    }
    case 7:
      return nn(t, n);
    case 8:
      return nn(t, n);
    default:
      throw new Error(`unhandled node on format message part: ${n}`);
  }
}
const rl = "Detected HTML in '{source}' message. Recommend not using HTML messages to avoid XSS.";
function al(e, t) {
  t && Li(e) && De(kn(rl, { source: e }));
}
const il = (e) => e;
let sn = X();
function ll(e, t = {}) {
  let n = !1;
  const s = t.onError || Ci;
  return t.onError = (o) => {
    n = !0, s(o);
  }, { ...Ji(e, t), detectError: n };
}
// @__NO_SIDE_EFFECTS__
function cl(e, t) {
  if (!__INTLIFY_DROP_MESSAGE_COMPILER__ && R(e)) {
    const n = ne(t.warnHtmlMessage) ? t.warnHtmlMessage : !0;
    process.env.NODE_ENV !== "production" && al(e, n);
    const o = (t.onCacheKey || il)(e), r = sn[o];
    if (r)
      return r;
    const { ast: a, detectError: i } = ll(e, {
      ...t,
      location: process.env.NODE_ENV !== "production",
      jit: !0
    }), c = Kn(a);
    return i ? c : sn[o] = c;
  } else {
    if (process.env.NODE_ENV !== "production" && !Ce(e))
      return De(`the message that is resolve with key '${t.key}' is not supported for jit compilation`), () => e;
    const n = e.cacheKey;
    if (n) {
      const s = sn[n];
      return s || (sn[n] = Kn(e));
    } else
      return Kn(e);
  }
}
let jt = null;
function ul(e) {
  jt = e;
}
function dl(e, t, n) {
  jt && jt.emit("i18n:init", {
    timestamp: Date.now(),
    i18n: e,
    version: t,
    meta: n
  });
}
const fl = /* @__PURE__ */ _l("function:translate");
function _l(e) {
  return (t) => jt && jt.emit(e, t);
}
const me = {
  INVALID_ARGUMENT: ki,
  // 17
  INVALID_DATE_ARGUMENT: 18,
  INVALID_ISO_DATE_ARGUMENT: 19,
  NOT_SUPPORT_NON_STRING_MESSAGE: 20,
  NOT_SUPPORT_LOCALE_PROMISE_VALUE: 21,
  NOT_SUPPORT_LOCALE_ASYNC_FUNCTION: 22,
  NOT_SUPPORT_LOCALE_TYPE: 23
}, ml = 24;
function Fe(e) {
  return bt(e, null, process.env.NODE_ENV !== "production" ? { messages: hl } : void 0);
}
const hl = {
  [me.INVALID_ARGUMENT]: "Invalid arguments",
  [me.INVALID_DATE_ARGUMENT]: "The date provided is an invalid Date object.Make sure your Date represents a valid date.",
  [me.INVALID_ISO_DATE_ARGUMENT]: "The argument provided is not a valid ISO date string",
  [me.NOT_SUPPORT_NON_STRING_MESSAGE]: "Not support non-string message",
  [me.NOT_SUPPORT_LOCALE_PROMISE_VALUE]: "cannot support promise value",
  [me.NOT_SUPPORT_LOCALE_ASYNC_FUNCTION]: "cannot support async function",
  [me.NOT_SUPPORT_LOCALE_TYPE]: "cannot support locale type"
};
function bs(e, t) {
  return t.locale != null ? io(t.locale) : io(e.locale);
}
let Gn;
function io(e) {
  if (R(e))
    return e;
  if (Q(e)) {
    if (e.resolvedOnce && Gn != null)
      return Gn;
    if (e.constructor.name === "Function") {
      const t = e();
      if (yi(t))
        throw Fe(me.NOT_SUPPORT_LOCALE_PROMISE_VALUE);
      return Gn = t;
    } else
      throw Fe(me.NOT_SUPPORT_LOCALE_ASYNC_FUNCTION);
  } else
    throw Fe(me.NOT_SUPPORT_LOCALE_TYPE);
}
function pl(e, t, n) {
  return [.../* @__PURE__ */ new Set([
    n,
    ...se(t) ? t : K(t) ? Object.keys(t) : R(t) ? [t] : [n]
  ])];
}
function Er(e, t, n) {
  const s = R(n) ? n : pn, o = e;
  o.__localeChainCache || (o.__localeChainCache = /* @__PURE__ */ new Map());
  let r = o.__localeChainCache.get(s);
  if (!r) {
    r = [];
    let a = [n];
    for (; se(a); )
      a = lo(r, a, t);
    const i = se(t) || !H(t) ? t : t.default ? t.default : null;
    a = R(i) ? [i] : i, se(a) && lo(r, a, !1), o.__localeChainCache.set(s, r);
  }
  return r;
}
function lo(e, t, n) {
  let s = !0;
  for (let o = 0; o < t.length && ne(s); o++) {
    const r = t[o];
    R(r) && (s = gl(e, t[o], n));
  }
  return s;
}
function gl(e, t, n) {
  let s;
  const o = t.split("-");
  do {
    const r = o.join("-");
    s = yl(e, r, n), o.splice(-1, 1);
  } while (o.length && s === !0);
  return s;
}
function yl(e, t, n) {
  let s = !1;
  if (!e.includes(t) && (s = !0, t)) {
    s = t[t.length - 1] !== "!";
    const o = t.replace(/!/g, "");
    e.push(o), (se(n) || H(n)) && n[o] && (s = n[o]);
  }
  return s;
}
const Ke = [];
Ke[
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
Ke[
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
Ke[
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
Ke[
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
Ke[
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
Ke[
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
Ke[
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
const vl = /^\s?(?:true|false|-?[\d.]+|'[^']*'|"[^"]*")\s?$/;
function El(e) {
  return vl.test(e);
}
function bl(e) {
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
function kl(e) {
  const t = e.trim();
  return e.charAt(0) === "0" && isNaN(parseInt(e)) ? !1 : El(t) ? bl(t) : "*" + t;
}
function wl(e) {
  const t = [];
  let n = -1, s = 0, o = 0, r, a, i, c, _, h, b;
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
    ](), o++;
  }, m[
    3
    /* Actions.PUSH_SUB_PATH */
  ] = () => {
    if (o > 0)
      o--, s = 4, m[
        0
        /* Actions.APPEND */
      ]();
    else {
      if (o = 0, a === void 0 || (a = kl(a), a === !1))
        return !1;
      m[
        1
        /* Actions.PUSH */
      ]();
    }
  };
  function O() {
    const M = e[n + 1];
    if (s === 5 && M === "'" || s === 6 && M === '"')
      return n++, i = "\\" + M, m[
        0
        /* Actions.APPEND */
      ](), !0;
  }
  for (; s !== null; )
    if (n++, r = e[n], !(r === "\\" && O())) {
      if (c = Nl(r), b = Ke[s], _ = b[c] || b.l || 8, _ === 8 || (s = _[0], _[1] !== void 0 && (h = m[_[1]], h && (i = r, h() === !1))))
        return;
      if (s === 7)
        return t;
    }
}
const co = /* @__PURE__ */ new Map();
function Cl(e, t) {
  return K(e) ? e[t] : null;
}
function Ol(e, t) {
  if (!K(e))
    return null;
  let n = co.get(t);
  if (n || (n = wl(t), n && co.set(t, n)), !n)
    return null;
  const s = n.length;
  let o = e, r = 0;
  for (; r < s; ) {
    const a = n[r];
    if (vr.includes(a) && Ce(o))
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
}, Ll = 8, Tl = {
  [he.NOT_FOUND_KEY]: "Not found '{key}' key in '{locale}' locale messages.",
  [he.FALLBACK_TO_TRANSLATE]: "Fall back to translate '{key}' key with '{target}' locale.",
  [he.CANNOT_FORMAT_NUMBER]: "Cannot format a number value due to not supported Intl.NumberFormat.",
  [he.FALLBACK_TO_NUMBER_FORMAT]: "Fall back to number format '{key}' key with '{target}' locale.",
  [he.CANNOT_FORMAT_DATE]: "Cannot format a date value due to not supported Intl.DateTimeFormat.",
  [he.FALLBACK_TO_DATE_FORMAT]: "Fall back to datetime format '{key}' key with '{target}' locale.",
  [he.EXPERIMENTAL_CUSTOM_MESSAGE_COMPILER]: "This project is using Custom Message Compiler, which is an experimental feature. It may receive breaking changes or be removed in the future."
};
function ot(e, ...t) {
  return kn(Tl[e], ...t);
}
const Sl = "11.2.2", Cn = -1, pn = "en-US", gn = "", uo = (e) => `${e.charAt(0).toLocaleUpperCase()}${e.substr(1)}`;
function Il() {
  return {
    upper: (e, t) => t === "text" && R(e) ? e.toUpperCase() : t === "vnode" && K(e) && "__v_isVNode" in e ? e.children.toUpperCase() : e,
    lower: (e, t) => t === "text" && R(e) ? e.toLowerCase() : t === "vnode" && K(e) && "__v_isVNode" in e ? e.children.toLowerCase() : e,
    capitalize: (e, t) => t === "text" && R(e) ? uo(e) : t === "vnode" && K(e) && "__v_isVNode" in e ? uo(e.children) : e
  };
}
let br;
function Dl(e) {
  br = e;
}
let Nr;
function Pl(e) {
  Nr = e;
}
let kr;
function Al(e) {
  kr = e;
}
let wr = null;
const Ml = /* @__NO_SIDE_EFFECTS__ */ (e) => {
  wr = e;
}, Rl = /* @__NO_SIDE_EFFECTS__ */ () => wr;
let Cr = null;
const fo = (e) => {
  Cr = e;
}, Fl = () => Cr;
let _o = 0;
function $l(e = {}) {
  const t = Q(e.onWarn) ? e.onWarn : De, n = R(e.version) ? e.version : Sl, s = R(e.locale) || Q(e.locale) ? e.locale : pn, o = Q(s) ? pn : s, r = se(e.fallbackLocale) || H(e.fallbackLocale) || R(e.fallbackLocale) || e.fallbackLocale === !1 ? e.fallbackLocale : o, a = H(e.messages) ? e.messages : Yn(o), i = H(e.datetimeFormats) ? e.datetimeFormats : Yn(o), c = H(e.numberFormats) ? e.numberFormats : Yn(o), _ = le(X(), e.modifiers, Il()), h = e.pluralRules || X(), b = Q(e.missing) ? e.missing : null, m = ne(e.missingWarn) || hn(e.missingWarn) ? e.missingWarn : !0, O = ne(e.fallbackWarn) || hn(e.fallbackWarn) ? e.fallbackWarn : !0, M = !!e.fallbackFormat, w = !!e.unresolving, T = Q(e.postTranslation) ? e.postTranslation : null, f = H(e.processor) ? e.processor : null, k = ne(e.warnHtmlMessage) ? e.warnHtmlMessage : !0, E = !!e.escapeParameter, N = Q(e.messageCompiler) ? e.messageCompiler : br;
  process.env.NODE_ENV !== "production" && Q(e.messageCompiler) && ui(ot(he.EXPERIMENTAL_CUSTOM_MESSAGE_COMPILER));
  const P = Q(e.messageResolver) ? e.messageResolver : Nr || Cl, A = Q(e.localeFallbacker) ? e.localeFallbacker : kr || pl, d = K(e.fallbackContext) ? e.fallbackContext : void 0, j = e, g = K(j.__datetimeFormatters) ? j.__datetimeFormatters : /* @__PURE__ */ new Map(), C = K(j.__numberFormatters) ? j.__numberFormatters : /* @__PURE__ */ new Map(), I = K(j.__meta) ? j.__meta : {};
  _o++;
  const x = {
    version: n,
    cid: _o,
    locale: s,
    fallbackLocale: r,
    messages: a,
    modifiers: _,
    pluralRules: h,
    missing: b,
    missingWarn: m,
    fallbackWarn: O,
    fallbackFormat: M,
    unresolving: w,
    postTranslation: T,
    processor: f,
    warnHtmlMessage: k,
    escapeParameter: E,
    messageCompiler: N,
    messageResolver: P,
    localeFallbacker: A,
    fallbackContext: d,
    onWarn: t,
    __meta: I
  };
  return x.datetimeFormats = i, x.numberFormats = c, x.__datetimeFormatters = g, x.__numberFormatters = C, process.env.NODE_ENV !== "production" && (x.__v_emitter = j.__v_emitter != null ? j.__v_emitter : void 0), (process.env.NODE_ENV !== "production" || __INTLIFY_PROD_DEVTOOLS__) && dl(x, n, I), x;
}
const Yn = (e) => ({ [e]: X() });
function On(e, t) {
  return e instanceof RegExp ? e.test(t) : e;
}
function Or(e, t) {
  return e instanceof RegExp ? e.test(t) : e;
}
function Ns(e, t, n, s, o) {
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
    return R(i) ? i : t;
  } else
    return process.env.NODE_ENV !== "production" && Or(s, t) && a(ot(he.NOT_FOUND_KEY, { key: t, locale: n })), t;
}
function St(e, t, n) {
  const s = e;
  s.__localeChainCache = /* @__PURE__ */ new Map(), e.localeFallbacker(e, n, t);
}
function Lr(e, t) {
  return e === t ? !1 : e.split("-")[0] === t.split("-")[0];
}
function Ul(e, t) {
  const n = t.indexOf(e);
  if (n === -1)
    return !1;
  for (let s = n + 1; s < t.length; s++)
    if (Lr(e, t[s]))
      return !0;
  return !1;
}
const mo = typeof Intl < "u", Tr = {
  dateTimeFormat: mo && typeof Intl.DateTimeFormat < "u",
  numberFormat: mo && typeof Intl.NumberFormat < "u"
};
function ho(e, ...t) {
  const { datetimeFormats: n, unresolving: s, fallbackLocale: o, onWarn: r, localeFallbacker: a } = e, { __datetimeFormatters: i } = e;
  if (process.env.NODE_ENV !== "production" && !Tr.dateTimeFormat)
    return r(ot(he.CANNOT_FORMAT_DATE)), gn;
  const [c, _, h, b] = ns(...t), m = ne(h.missingWarn) ? h.missingWarn : e.missingWarn, O = ne(h.fallbackWarn) ? h.fallbackWarn : e.fallbackWarn, M = !!h.part, w = bs(e, h), T = a(
    e,
    // eslint-disable-line @typescript-eslint/no-explicit-any
    o,
    w
  );
  if (!R(c) || c === "")
    return new Intl.DateTimeFormat(w, b).format(_);
  let f = {}, k, E = null, N = w, P = null;
  const A = "datetime format";
  for (let g = 0; g < T.length; g++) {
    if (k = P = T[g], process.env.NODE_ENV !== "production" && w !== k && On(O, c) && r(ot(he.FALLBACK_TO_DATE_FORMAT, {
      key: c,
      target: k
    })), process.env.NODE_ENV !== "production" && w !== k) {
      const C = e.__v_emitter;
      C && C.emit("fallback", {
        type: A,
        key: c,
        from: N,
        to: P,
        groupId: `${A}:${c}`
      });
    }
    if (f = n[k] || {}, E = f[c], H(E))
      break;
    Ns(e, c, k, m, A), N = P;
  }
  if (!H(E) || !R(k))
    return s ? Cn : c;
  let d = `${k}__${c}`;
  wn(b) || (d = `${d}__${JSON.stringify(b)}`);
  let j = i.get(d);
  return j || (j = new Intl.DateTimeFormat(k, le({}, E, b)), i.set(d, j)), M ? j.formatToParts(_) : j.format(_);
}
const Sr = [
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
function ns(...e) {
  const [t, n, s, o] = e, r = X();
  let a = X(), i;
  if (R(t)) {
    const c = t.match(/(\d{4}-\d{2}-\d{2})(T|\s)?(.*)/);
    if (!c)
      throw Fe(me.INVALID_ISO_DATE_ARGUMENT);
    const _ = c[3] ? c[3].trim().startsWith("T") ? `${c[1].trim()}${c[3].trim()}` : `${c[1].trim()}T${c[3].trim()}` : c[1].trim();
    i = new Date(_);
    try {
      i.toISOString();
    } catch {
      throw Fe(me.INVALID_ISO_DATE_ARGUMENT);
    }
  } else if (mi(t)) {
    if (isNaN(t.getTime()))
      throw Fe(me.INVALID_DATE_ARGUMENT);
    i = t;
  } else if (ie(t))
    i = t;
  else
    throw Fe(me.INVALID_ARGUMENT);
  return R(n) ? r.key = n : H(n) && Object.keys(n).forEach((c) => {
    Sr.includes(c) ? a[c] = n[c] : r[c] = n[c];
  }), R(s) ? r.locale = s : H(s) && (a = s), H(o) && (a = o), [r.key || "", i, r, a];
}
function po(e, t, n) {
  const s = e;
  for (const o in n) {
    const r = `${t}__${o}`;
    s.__datetimeFormatters.has(r) && s.__datetimeFormatters.delete(r);
  }
}
function go(e, ...t) {
  const { numberFormats: n, unresolving: s, fallbackLocale: o, onWarn: r, localeFallbacker: a } = e, { __numberFormatters: i } = e;
  if (process.env.NODE_ENV !== "production" && !Tr.numberFormat)
    return r(ot(he.CANNOT_FORMAT_NUMBER)), gn;
  const [c, _, h, b] = ss(...t), m = ne(h.missingWarn) ? h.missingWarn : e.missingWarn, O = ne(h.fallbackWarn) ? h.fallbackWarn : e.fallbackWarn, M = !!h.part, w = bs(e, h), T = a(
    e,
    // eslint-disable-line @typescript-eslint/no-explicit-any
    o,
    w
  );
  if (!R(c) || c === "")
    return new Intl.NumberFormat(w, b).format(_);
  let f = {}, k, E = null, N = w, P = null;
  const A = "number format";
  for (let g = 0; g < T.length; g++) {
    if (k = P = T[g], process.env.NODE_ENV !== "production" && w !== k && On(O, c) && r(ot(he.FALLBACK_TO_NUMBER_FORMAT, {
      key: c,
      target: k
    })), process.env.NODE_ENV !== "production" && w !== k) {
      const C = e.__v_emitter;
      C && C.emit("fallback", {
        type: A,
        key: c,
        from: N,
        to: P,
        groupId: `${A}:${c}`
      });
    }
    if (f = n[k] || {}, E = f[c], H(E))
      break;
    Ns(e, c, k, m, A), N = P;
  }
  if (!H(E) || !R(k))
    return s ? Cn : c;
  let d = `${k}__${c}`;
  wn(b) || (d = `${d}__${JSON.stringify(b)}`);
  let j = i.get(d);
  return j || (j = new Intl.NumberFormat(k, le({}, E, b)), i.set(d, j)), M ? j.formatToParts(_) : j.format(_);
}
const Ir = [
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
function ss(...e) {
  const [t, n, s, o] = e, r = X();
  let a = X();
  if (!ie(t))
    throw Fe(me.INVALID_ARGUMENT);
  const i = t;
  return R(n) ? r.key = n : H(n) && Object.keys(n).forEach((c) => {
    Ir.includes(c) ? a[c] = n[c] : r[c] = n[c];
  }), R(s) ? r.locale = s : H(s) && (a = s), H(o) && (a = o), [r.key || "", i, r, a];
}
function yo(e, t, n) {
  const s = e;
  for (const o in n) {
    const r = `${t}__${o}`;
    s.__numberFormatters.has(r) && s.__numberFormatters.delete(r);
  }
}
const Vl = (e) => e, xl = (e) => "", Wl = "text", jl = (e) => e.length === 0 ? "" : ys(e), Bl = vi;
function vo(e, t) {
  return e = Math.abs(e), t === 2 ? e ? e > 1 ? 1 : 0 : 1 : e ? Math.min(e, 2) : 0;
}
function zl(e) {
  const t = ie(e.pluralIndex) ? e.pluralIndex : -1;
  return e.named && (ie(e.named.count) || ie(e.named.n)) ? ie(e.named.count) ? e.named.count : ie(e.named.n) ? e.named.n : t : t;
}
function Hl(e, t) {
  t.count || (t.count = e), t.n || (t.n = e);
}
function Kl(e = {}) {
  const t = e.locale, n = zl(e), s = K(e.pluralRules) && R(t) && Q(e.pluralRules[t]) ? e.pluralRules[t] : vo, o = K(e.pluralRules) && R(t) && Q(e.pluralRules[t]) ? vo : void 0, r = (f) => f[s(n, f.length, o)], a = e.list || [], i = (f) => a[f], c = e.named || X();
  ie(e.pluralIndex) && Hl(n, c);
  const _ = (f) => c[f];
  function h(f, k) {
    const E = Q(e.messages) ? e.messages(f, !!k) : K(e.messages) ? e.messages[f] : !1;
    return E || (e.parent ? e.parent.message(f) : xl);
  }
  const b = (f) => e.modifiers ? e.modifiers[f] : Vl, m = H(e.processor) && Q(e.processor.normalize) ? e.processor.normalize : jl, O = H(e.processor) && Q(e.processor.interpolate) ? e.processor.interpolate : Bl, M = H(e.processor) && R(e.processor.type) ? e.processor.type : Wl, T = {
    list: i,
    named: _,
    plural: r,
    linked: (f, ...k) => {
      const [E, N] = k;
      let P = "text", A = "";
      k.length === 1 ? K(E) ? (A = E.modifier || A, P = E.type || P) : R(E) && (A = E || A) : k.length === 2 && (R(E) && (A = E || A), R(N) && (P = N || P));
      const d = h(f, !0)(T), j = (
        // The message in vnode resolved with linked are returned as an array by processor.nomalize
        P === "vnode" && se(d) && A ? d[0] : d
      );
      return A ? b(A)(j, P) : j;
    },
    message: h,
    type: M,
    interpolate: O,
    normalize: m,
    values: le(X(), a, c)
  };
  return T;
}
const Eo = () => "", Ee = (e) => Q(e);
function bo(e, ...t) {
  const { fallbackFormat: n, postTranslation: s, unresolving: o, messageCompiler: r, fallbackLocale: a, messages: i } = e, [c, _] = os(...t), h = ne(_.missingWarn) ? _.missingWarn : e.missingWarn, b = ne(_.fallbackWarn) ? _.fallbackWarn : e.fallbackWarn, m = ne(_.escapeParameter) ? _.escapeParameter : e.escapeParameter, O = !!_.resolvedMessage, M = R(_.default) || ne(_.default) ? ne(_.default) ? r ? c : () => c : _.default : n ? r ? c : () => c : null, w = n || M != null && (R(M) || Q(M)), T = bs(e, _);
  m && Gl(_);
  let [f, k, E] = O ? [
    c,
    T,
    i[T] || X()
  ] : Dr(e, c, T, a, b, h), N = f, P = c;
  if (!O && !(R(N) || Ce(N) || Ee(N)) && w && (N = M, P = N), !O && (!(R(N) || Ce(N) || Ee(N)) || !R(k)))
    return o ? Cn : c;
  if (process.env.NODE_ENV !== "production" && R(N) && e.messageCompiler == null)
    return De(`The message format compilation is not supported in this build. Because message compiler isn't included. You need to pre-compilation all message format. So translate function return '${c}'.`), c;
  let A = !1;
  const d = () => {
    A = !0;
  }, j = Ee(N) ? N : Pr(e, c, k, N, P, d);
  if (A)
    return N;
  const g = Zl(e, k, E, _), C = Kl(g), I = Yl(e, j, C);
  let x = s ? s(I, c) : I;
  if (m && R(x) && (x = pi(x)), process.env.NODE_ENV !== "production" || __INTLIFY_PROD_DEVTOOLS__) {
    const oe = {
      timestamp: Date.now(),
      key: R(c) ? c : Ee(N) ? N.key : "",
      locale: k || (Ee(N) ? N.locale : ""),
      format: R(N) ? N : Ee(N) ? N.source : "",
      message: x
    };
    oe.meta = le({}, e.__meta, /* @__PURE__ */ Rl() || {}), fl(oe);
  }
  return x;
}
function Gl(e) {
  se(e.list) ? e.list = e.list.map((t) => R(t) ? eo(t) : t) : K(e.named) && Object.keys(e.named).forEach((t) => {
    R(e.named[t]) && (e.named[t] = eo(e.named[t]));
  });
}
function Dr(e, t, n, s, o, r) {
  const { messages: a, onWarn: i, messageResolver: c, localeFallbacker: _ } = e, h = _(e, s, n);
  let b = X(), m, O = null, M = n, w = null;
  const T = "translate";
  for (let f = 0; f < h.length; f++) {
    if (m = w = h[f], process.env.NODE_ENV !== "production" && n !== m && !Lr(n, m) && On(o, t) && i(ot(he.FALLBACK_TO_TRANSLATE, {
      key: t,
      target: m
    })), process.env.NODE_ENV !== "production" && n !== m) {
      const P = e.__v_emitter;
      P && P.emit("fallback", {
        type: T,
        key: t,
        from: M,
        to: w,
        groupId: `${T}:${t}`
      });
    }
    b = a[m] || X();
    let k = null, E, N;
    if (process.env.NODE_ENV !== "production" && Ue && (k = window.performance.now(), E = "intlify-message-resolve-start", N = "intlify-message-resolve-end", ge && ge(E)), (O = c(b, t)) === null && (O = b[t]), process.env.NODE_ENV !== "production" && Ue) {
      const P = window.performance.now(), A = e.__v_emitter;
      A && k && O && A.emit("message-resolve", {
        type: "message-resolve",
        key: t,
        message: O,
        time: P - k,
        groupId: `${T}:${t}`
      }), E && N && ge && st && (ge(N), st("intlify message resolve", E, N));
    }
    if (R(O) || Ce(O) || Ee(O))
      break;
    if (!Ul(m, h)) {
      const P = Ns(
        e,
        // eslint-disable-line @typescript-eslint/no-explicit-any
        t,
        m,
        r,
        T
      );
      P !== t && (O = P);
    }
    M = w;
  }
  return [O, m, b];
}
function Pr(e, t, n, s, o, r) {
  const { messageCompiler: a, warnHtmlMessage: i } = e;
  if (Ee(s)) {
    const m = s;
    return m.locale = m.locale || n, m.key = m.key || t, m;
  }
  if (a == null) {
    const m = () => s;
    return m.locale = n, m.key = t, m;
  }
  let c = null, _, h;
  process.env.NODE_ENV !== "production" && Ue && (c = window.performance.now(), _ = "intlify-message-compilation-start", h = "intlify-message-compilation-end", ge && ge(_));
  const b = a(s, Xl(e, n, o, s, i, r));
  if (process.env.NODE_ENV !== "production" && Ue) {
    const m = window.performance.now(), O = e.__v_emitter;
    O && c && O.emit("message-compilation", {
      type: "message-compilation",
      message: s,
      time: m - c,
      groupId: `translate:${t}`
    }), _ && h && ge && st && (ge(h), st("intlify message compilation", _, h));
  }
  return b.locale = n, b.key = t, b.source = s, b;
}
function Yl(e, t, n) {
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
function os(...e) {
  const [t, n, s] = e, o = X();
  if (!R(t) && !ie(t) && !Ee(t) && !Ce(t))
    throw Fe(me.INVALID_ARGUMENT);
  const r = ie(t) ? String(t) : (Ee(t), t);
  return ie(n) ? o.plural = n : R(n) ? o.default = n : H(n) && !wn(n) ? o.named = n : se(n) && (o.list = n), ie(s) ? o.plural = s : R(s) ? o.default = s : H(s) && le(o, s), [r, o];
}
function Xl(e, t, n, s, o, r) {
  return {
    locale: t,
    key: n,
    warnHtmlMessage: o,
    onError: (a) => {
      if (r && r(a), process.env.NODE_ENV !== "production") {
        const i = Jl(s), c = `Message compilation error: ${a.message}`, _ = a.location && i && Ei(i, a.location.start.offset, a.location.end.offset), h = e.__v_emitter;
        h && i && h.emit("compile-error", {
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
    onCacheKey: (a) => fi(t, n, a)
  };
}
function Jl(e) {
  if (R(e))
    return e;
  if (e.loc && e.loc.source)
    return e.loc.source;
}
function Zl(e, t, n, s) {
  const { modifiers: o, pluralRules: r, messageResolver: a, fallbackLocale: i, fallbackWarn: c, missingWarn: _, fallbackContext: h } = e, m = {
    locale: t,
    modifiers: o,
    pluralRules: r,
    messages: (O, M) => {
      let w = a(n, O);
      if (w == null && (h || M)) {
        const [, , T] = Dr(
          h || e,
          // NOTE: if has fallbackContext, fallback to root, else if use linked, fallback to local context
          O,
          t,
          i,
          c,
          _
        );
        w = a(T, O);
      }
      if (R(w) || Ce(w)) {
        let T = !1;
        const k = Pr(e, O, t, w, O, () => {
          T = !0;
        });
        return T ? Eo : k;
      } else return Ee(w) ? w : Eo;
    }
  };
  return e.processor && (m.processor = e.processor), s.list && (m.list = s.list), s.named && (m.named = s.named), ie(s.plural) && (m.pluralIndex = s.plural), m;
}
Zi();
/*!
  * vue-i18n v11.2.2
  * (c) 2025 kazuya kawaguchi
  * Released under the MIT License.
  */
const ql = "11.2.2";
function Ql() {
  typeof __VUE_I18N_FULL_INSTALL__ != "boolean" && (Qe().__VUE_I18N_FULL_INSTALL__ = !0), typeof __VUE_I18N_LEGACY_API__ != "boolean" && (Qe().__VUE_I18N_LEGACY_API__ = !0), typeof __INTLIFY_DROP_MESSAGE_COMPILER__ != "boolean" && (Qe().__INTLIFY_DROP_MESSAGE_COMPILER__ = !1), typeof __INTLIFY_PROD_DEVTOOLS__ != "boolean" && (Qe().__INTLIFY_PROD_DEVTOOLS__ = !1);
}
const ce = {
  // composer module errors
  UNEXPECTED_RETURN_TYPE: ml,
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
function Bt(e, ...t) {
  return bt(e, null, process.env.NODE_ENV !== "production" ? { messages: ec, args: t } : void 0);
}
const ec = {
  [ce.UNEXPECTED_RETURN_TYPE]: "Unexpected return type in composer",
  [ce.INVALID_ARGUMENT]: "Invalid argument",
  [ce.MUST_BE_CALL_SETUP_TOP]: "Must be called at the top of a `setup` function",
  [ce.NOT_INSTALLED]: "Need to install with `app.use` function",
  [ce.UNEXPECTED_ERROR]: "Unexpected error",
  [ce.REQUIRED_VALUE]: "Required in value: {0}",
  [ce.INVALID_VALUE]: "Invalid value",
  [ce.CANNOT_SETUP_VUE_DEVTOOLS_PLUGIN]: "Cannot setup vue-devtools plugin",
  [ce.NOT_INSTALLED_WITH_PROVIDE]: "Need to install with `provide` function",
  [ce.NOT_COMPATIBLE_LEGACY_VUE_I18N]: "Not compatible legacy VueI18n.",
  [ce.NOT_AVAILABLE_COMPOSITION_IN_LEGACY]: "Not available Compostion API in Legacy API mode. Please make sure that the legacy API mode is working properly"
}, rs = /* @__PURE__ */ xe("__translateVNode"), as = /* @__PURE__ */ xe("__datetimeParts"), is = /* @__PURE__ */ xe("__numberParts"), ls = /* @__PURE__ */ xe("__enableEmitter"), cs = /* @__PURE__ */ xe("__disableEmitter"), tc = xe("__setPluralRules"), Ar = /* @__PURE__ */ xe("__injectWithOption"), us = /* @__PURE__ */ xe("__dispose"), Se = {
  FALLBACK_TO_ROOT: Ll,
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
}, nc = {
  [Se.FALLBACK_TO_ROOT]: "Fall back to {type} '{key}' with root locale.",
  [Se.NOT_FOUND_PARENT_SCOPE]: "Not found parent scope. use the global scope.",
  [Se.IGNORE_OBJ_FLATTEN]: "Ignore object flatten: '{key}' key has an string value",
  /**
   * @deprecated will be removed at vue-i18n v12
   */
  [Se.DEPRECATE_LEGACY_MODE]: `Legacy API mode has been deprecated in v11. Use Composition API mode instead.
About how to use the Composition API mode, see https://vue-i18n.intlify.dev/guide/advanced/composition.html`,
  /**
   * @deprecated will be removed at vue-i18n v12
   */
  [Se.DEPRECATE_TRANSLATE_CUSTOME_DIRECTIVE]: "'v-t' has been deprecated in v11. Use translate APIs ('t' or '$t') instead.",
  [Se.DUPLICATE_USE_I18N_CALLING]: "Duplicate `useI18n` calling by local scope. Please don't call it on local scope, due to it does not work properly in component."
};
function yn(e, ...t) {
  return kn(nc[e], ...t);
}
function zt(e) {
  if (!K(e) || Ce(e))
    return e;
  for (const t in e)
    if (ke(e, t))
      if (!t.includes("."))
        K(e[t]) && zt(e[t]);
      else {
        const n = t.split("."), s = n.length - 1;
        let o = e, r = !1;
        for (let a = 0; a < s; a++) {
          if (n[a] === "__proto__")
            throw new Error(`unsafe key: ${n[a]}`);
          if (n[a] in o || (o[n[a]] = X()), !K(o[n[a]])) {
            process.env.NODE_ENV !== "production" && De(yn(Se.IGNORE_OBJ_FLATTEN, {
              key: n[a]
            })), r = !0;
            break;
          }
          o = o[n[a]];
        }
        if (r || (Ce(o) ? vr.includes(n[s]) || delete e[t] : (o[n[s]] = e[t], delete e[t])), !Ce(o)) {
          const a = o[n[s]];
          K(a) && zt(a);
        }
      }
  return e;
}
function Mr(e, t) {
  const { messages: n, __i18n: s, messageResolver: o, flatJson: r } = t, a = H(n) ? n : se(s) ? X() : { [e]: X() };
  if (se(s) && s.forEach((i) => {
    if ("locale" in i && "resource" in i) {
      const { locale: c, resource: _ } = i;
      c ? (a[c] = a[c] || X(), rn(_, a[c])) : rn(_, a);
    } else
      R(i) && rn(JSON.parse(i), a);
  }), o == null && r)
    for (const i in a)
      ke(a, i) && zt(a[i]);
  return a;
}
function Rr(e) {
  return e.type;
}
function sc(e, t, n) {
  let s = K(t.messages) ? t.messages : X();
  "__i18nGlobal" in n && (s = Mr(e.locale.value, {
    messages: s,
    __i18n: n.__i18nGlobal
  }));
  const o = Object.keys(s);
  o.length && o.forEach((r) => {
    e.mergeLocaleMessage(r, s[r]);
  });
  {
    if (K(t.datetimeFormats)) {
      const r = Object.keys(t.datetimeFormats);
      r.length && r.forEach((a) => {
        e.mergeDateTimeFormat(a, t.datetimeFormats[a]);
      });
    }
    if (K(t.numberFormats)) {
      const r = Object.keys(t.numberFormats);
      r.length && r.forEach((a) => {
        e.mergeNumberFormat(a, t.numberFormats[a]);
      });
    }
  }
}
function No(e) {
  return F(pa, null, e, 0);
}
function ks() {
  return "currentInstance" in Fs ? Fs["currentInstance"] : Be();
}
const ko = "__INTLIFY_META__", wo = () => [], oc = () => !1;
let Co = 0;
function Oo(e) {
  return (t, n, s, o) => e(n, s, ks() || void 0, o);
}
const rc = /* @__NO_SIDE_EFFECTS__ */ () => {
  const e = ks();
  let t = null;
  return e && (t = Rr(e)[ko]) ? { [ko]: t } : null;
};
function ac(e = {}) {
  const { __root: t, __injectWithOption: n } = e, s = t === void 0, o = e.flatJson, r = Ue ? Z : Xo;
  let a = ne(e.inheritLocale) ? e.inheritLocale : !0;
  const i = r(
    // prettier-ignore
    t && a ? t.locale.value : R(e.locale) ? e.locale : pn
  ), c = r(
    // prettier-ignore
    t && a ? t.fallbackLocale.value : R(e.fallbackLocale) || se(e.fallbackLocale) || H(e.fallbackLocale) || e.fallbackLocale === !1 ? e.fallbackLocale : i.value
  ), _ = r(Mr(i.value, e)), h = r(H(e.datetimeFormats) ? e.datetimeFormats : { [i.value]: {} }), b = r(H(e.numberFormats) ? e.numberFormats : { [i.value]: {} });
  let m = t ? t.missingWarn : ne(e.missingWarn) || hn(e.missingWarn) ? e.missingWarn : !0, O = t ? t.fallbackWarn : ne(e.fallbackWarn) || hn(e.fallbackWarn) ? e.fallbackWarn : !0, M = t ? t.fallbackRoot : ne(e.fallbackRoot) ? e.fallbackRoot : !0, w = !!e.fallbackFormat, T = Q(e.missing) ? e.missing : null, f = Q(e.missing) ? Oo(e.missing) : null, k = Q(e.postTranslation) ? e.postTranslation : null, E = t ? t.warnHtmlMessage : ne(e.warnHtmlMessage) ? e.warnHtmlMessage : !0, N = !!e.escapeParameter;
  const P = t ? t.modifiers : H(e.modifiers) ? e.modifiers : {};
  let A = e.pluralRules || t && t.pluralRules, d;
  d = (() => {
    s && fo(null);
    const y = {
      version: ql,
      locale: i.value,
      fallbackLocale: c.value,
      messages: _.value,
      modifiers: P,
      pluralRules: A,
      missing: f === null ? void 0 : f,
      missingWarn: m,
      fallbackWarn: O,
      fallbackFormat: w,
      unresolving: !0,
      postTranslation: k === null ? void 0 : k,
      warnHtmlMessage: E,
      escapeParameter: N,
      messageResolver: e.messageResolver,
      messageCompiler: e.messageCompiler,
      __meta: { framework: "vue" }
    };
    y.datetimeFormats = h.value, y.numberFormats = b.value, y.__datetimeFormatters = H(d) ? d.__datetimeFormatters : void 0, y.__numberFormatters = H(d) ? d.__numberFormatters : void 0, process.env.NODE_ENV !== "production" && (y.__v_emitter = H(d) ? d.__v_emitter : void 0);
    const D = $l(y);
    return s && fo(D), D;
  })(), St(d, i.value, c.value);
  function g() {
    return [
      i.value,
      c.value,
      _.value,
      h.value,
      b.value
    ];
  }
  const C = W({
    get: () => i.value,
    set: (y) => {
      d.locale = y, i.value = y;
    }
  }), I = W({
    get: () => c.value,
    set: (y) => {
      d.fallbackLocale = y, c.value = y, St(d, i.value, y);
    }
  }), x = W(() => _.value), oe = /* @__PURE__ */ W(() => h.value), Pe = /* @__PURE__ */ W(() => b.value);
  function Ge() {
    return Q(k) ? k : null;
  }
  function kt(y) {
    k = y, d.postTranslation = y;
  }
  function wt() {
    return T;
  }
  function Ae(y) {
    y !== null && (f = Oo(y)), T = y, d.missing = f;
  }
  function ue(y, D) {
    return y !== "translate" || !D.resolvedMessage;
  }
  const Me = (y, D, G, te, Xe, qt) => {
    g();
    let ct;
    try {
      process.env.NODE_ENV !== "production" || __INTLIFY_PROD_DEVTOOLS__, s || (d.fallbackContext = t ? Fl() : void 0), ct = y(d);
    } finally {
      process.env.NODE_ENV !== "production" || __INTLIFY_PROD_DEVTOOLS__, s || (d.fallbackContext = void 0);
    }
    if (G !== "translate exists" && // for not `te` (e.g `t`)
    ie(ct) && ct === Cn || G === "translate exists" && !ct) {
      const [Je, ua] = D();
      if (process.env.NODE_ENV !== "production" && t && R(Je) && ue(G, ua) && (M && (On(O, Je) || Or(m, Je)) && De(yn(Se.FALLBACK_TO_ROOT, {
        key: Je,
        type: G
      })), process.env.NODE_ENV !== "production")) {
        const { __v_emitter: Ms } = d;
        Ms && M && Ms.emit("fallback", {
          type: G,
          key: Je,
          to: "global",
          groupId: `${G}:${Je}`
        });
      }
      return t && M ? te(t) : Xe(Je);
    } else {
      if (qt(ct))
        return ct;
      throw Bt(ce.UNEXPECTED_RETURN_TYPE);
    }
  };
  function Ct(...y) {
    return Me((D) => Reflect.apply(bo, null, [D, ...y]), () => os(...y), "translate", (D) => Reflect.apply(D.t, D, [...y]), (D) => D, (D) => R(D));
  }
  function Dn(...y) {
    const [D, G, te] = y;
    if (te && !K(te))
      throw Bt(ce.INVALID_ARGUMENT);
    return Ct(D, G, le({ resolvedMessage: !0 }, te || {}));
  }
  function Pn(...y) {
    return Me((D) => Reflect.apply(ho, null, [D, ...y]), () => ns(...y), "datetime format", (D) => Reflect.apply(D.d, D, [...y]), () => gn, (D) => R(D) || se(D));
  }
  function An(...y) {
    return Me((D) => Reflect.apply(go, null, [D, ...y]), () => ss(...y), "number format", (D) => Reflect.apply(D.n, D, [...y]), () => gn, (D) => R(D) || se(D));
  }
  function Mn(y) {
    return y.map((D) => R(D) || ie(D) || ne(D) ? No(String(D)) : D);
  }
  const Rn = {
    normalize: Mn,
    interpolate: (y) => y,
    type: "vnode"
  };
  function Jt(...y) {
    return Me((D) => {
      let G;
      const te = D;
      try {
        te.processor = Rn, G = Reflect.apply(bo, null, [te, ...y]);
      } finally {
        te.processor = null;
      }
      return G;
    }, () => os(...y), "translate", (D) => D[rs](...y), (D) => [No(D)], (D) => se(D));
  }
  function Fn(...y) {
    return Me((D) => Reflect.apply(go, null, [D, ...y]), () => ss(...y), "number format", (D) => D[is](...y), wo, (D) => R(D) || se(D));
  }
  function Zt(...y) {
    return Me((D) => Reflect.apply(ho, null, [D, ...y]), () => ns(...y), "datetime format", (D) => D[as](...y), wo, (D) => R(D) || se(D));
  }
  function $n(y) {
    A = y, d.pluralRules = A;
  }
  function Un(y, D) {
    return Me(() => {
      if (!y)
        return !1;
      const G = R(D) ? D : i.value, te = Ye(G), Xe = d.messageResolver(te, y);
      return Ce(Xe) || Ee(Xe) || R(Xe);
    }, () => [y], "translate exists", (G) => Reflect.apply(G.te, G, [y, D]), oc, (G) => ne(G));
  }
  function Ot(y) {
    let D = null;
    const G = Er(d, c.value, i.value);
    for (let te = 0; te < G.length; te++) {
      const Xe = _.value[G[te]] || {}, qt = d.messageResolver(Xe, y);
      if (qt != null) {
        D = qt;
        break;
      }
    }
    return D;
  }
  function Lt(y) {
    const D = Ot(y);
    return D ?? (t ? t.tm(y) || {} : {});
  }
  function Ye(y) {
    return _.value[y] || {};
  }
  function Tt(y, D) {
    if (o) {
      const G = { [y]: D };
      for (const te in G)
        ke(G, te) && zt(G[te]);
      D = G[y];
    }
    _.value[y] = D, d.messages = _.value;
  }
  function Vn(y, D) {
    _.value[y] = _.value[y] || {};
    const G = { [y]: D };
    if (o)
      for (const te in G)
        ke(G, te) && zt(G[te]);
    D = G[y], rn(D, _.value[y]), d.messages = _.value;
  }
  function l(y) {
    return h.value[y] || {};
  }
  function u(y, D) {
    h.value[y] = D, d.datetimeFormats = h.value, po(d, y, D);
  }
  function L(y, D) {
    h.value[y] = le(h.value[y] || {}, D), d.datetimeFormats = h.value, po(d, y, D);
  }
  function $(y) {
    return b.value[y] || {};
  }
  function q(y, D) {
    b.value[y] = D, d.numberFormats = b.value, yo(d, y, D);
  }
  function ee(y, D) {
    b.value[y] = le(b.value[y] || {}, D), d.numberFormats = b.value, yo(d, y, D);
  }
  Co++, t && Ue && (tt(t.locale, (y) => {
    a && (i.value = y, d.locale = y, St(d, i.value, c.value));
  }), tt(t.fallbackLocale, (y) => {
    a && (c.value = y, d.fallbackLocale = y, St(d, i.value, c.value));
  }));
  const z = {
    id: Co,
    locale: C,
    fallbackLocale: I,
    get inheritLocale() {
      return a;
    },
    set inheritLocale(y) {
      a = y, y && t && (i.value = t.locale.value, c.value = t.fallbackLocale.value, St(d, i.value, c.value));
    },
    get availableLocales() {
      return Object.keys(_.value).sort();
    },
    messages: x,
    get modifiers() {
      return P;
    },
    get pluralRules() {
      return A || {};
    },
    get isGlobal() {
      return s;
    },
    get missingWarn() {
      return m;
    },
    set missingWarn(y) {
      m = y, d.missingWarn = m;
    },
    get fallbackWarn() {
      return O;
    },
    set fallbackWarn(y) {
      O = y, d.fallbackWarn = O;
    },
    get fallbackRoot() {
      return M;
    },
    set fallbackRoot(y) {
      M = y;
    },
    get fallbackFormat() {
      return w;
    },
    set fallbackFormat(y) {
      w = y, d.fallbackFormat = w;
    },
    get warnHtmlMessage() {
      return E;
    },
    set warnHtmlMessage(y) {
      E = y, d.warnHtmlMessage = y;
    },
    get escapeParameter() {
      return N;
    },
    set escapeParameter(y) {
      N = y, d.escapeParameter = y;
    },
    t: Ct,
    getLocaleMessage: Ye,
    setLocaleMessage: Tt,
    mergeLocaleMessage: Vn,
    getPostTranslationHandler: Ge,
    setPostTranslationHandler: kt,
    getMissingHandler: wt,
    setMissingHandler: Ae,
    [tc]: $n
  };
  return z.datetimeFormats = oe, z.numberFormats = Pe, z.rt = Dn, z.te = Un, z.tm = Lt, z.d = Pn, z.n = An, z.getDateTimeFormat = l, z.setDateTimeFormat = u, z.mergeDateTimeFormat = L, z.getNumberFormat = $, z.setNumberFormat = q, z.mergeNumberFormat = ee, z[Ar] = n, z[rs] = Jt, z[as] = Zt, z[is] = Fn, process.env.NODE_ENV !== "production" && (z[ls] = (y) => {
    d.__v_emitter = y;
  }, z[cs] = () => {
    d.__v_emitter = void 0;
  }), z;
}
function Lo(e, t) {
}
const ws = {
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
function ic({ slots: e }, t) {
  return t.length === 1 && t[0] === "default" ? (e.default ? e.default() : []).reduce((s, o) => [
    ...s,
    // prettier-ignore
    ...o.type === Gt ? o.children : [o]
  ], []) : t.reduce((n, s) => {
    const o = e[s];
    return o && (n[s] = o()), n;
  }, X());
}
function Fr() {
  return Gt;
}
le({
  keypath: {
    type: String,
    required: !0
  },
  plural: {
    type: [Number, String],
    validator: (e) => ie(e) || !isNaN(e)
  }
}, ws);
function lc(e) {
  return se(e) && !R(e[0]);
}
function $r(e, t, n, s) {
  const { slots: o, attrs: r } = t;
  return () => {
    const a = { part: !0 };
    let i = X();
    e.locale && (a.locale = e.locale), R(e.format) ? a.key = e.format : K(e.format) && (R(e.format.key) && (a.key = e.format.key), i = Object.keys(e.format).reduce((m, O) => n.includes(O) ? le(X(), m, { [O]: e.format[O] }) : m, X()));
    const c = s(e.value, a, i);
    let _ = [a.key];
    se(c) ? _ = c.map((m, O) => {
      const M = o[m.type], w = M ? M({ [m.type]: m.value, index: O, parts: c }) : [m.value];
      return lc(w) && (w[0].key = `${m.type}-${O}`), w;
    }) : R(c) && (_ = [c]);
    const h = le(X(), r), b = R(e.tag) || K(e.tag) ? e.tag : Fr();
    return Zo(b, h, _);
  };
}
le({
  value: {
    type: Number,
    required: !0
  },
  format: {
    type: [String, Object]
  }
}, ws);
const cc = /* @__PURE__ */ xe("global-vue-i18n");
function Ln(e = {}) {
  const t = ks();
  if (t == null)
    throw Bt(ce.MUST_BE_CALL_SETUP_TOP);
  if (!t.isCE && t.appContext.app != null && !t.appContext.app.__VUE_I18N_SYMBOL__)
    throw Bt(ce.NOT_INSTALLED);
  const n = uc(t), s = fc(n), o = Rr(t), r = dc(e, o);
  if (r === "global")
    return sc(s, e, o), s;
  if (r === "parent") {
    let c = _c(n, t, e.__useComponent);
    return c == null && (process.env.NODE_ENV !== "production" && De(yn(Se.NOT_FOUND_PARENT_SCOPE)), c = s), c;
  }
  const a = n;
  let i = a.__getInstance(t);
  if (i == null) {
    const c = le({}, e);
    "__i18n" in o && (c.__i18n = o.__i18n), s && (c.__root = s), i = ac(c), a.__composerExtend && (i[us] = a.__composerExtend(i)), hc(a, t, i), a.__setInstance(t, i);
  } else
    process.env.NODE_ENV !== "production" && r === "local" && De(yn(Se.DUPLICATE_USE_I18N_CALLING));
  return i;
}
function uc(e) {
  const t = Ie(e.isCE ? cc : e.appContext.app.__VUE_I18N_SYMBOL__);
  if (!t)
    throw Bt(e.isCE ? ce.NOT_INSTALLED_WITH_PROVIDE : ce.UNEXPECTED_ERROR);
  return t;
}
function dc(e, t) {
  return wn(e) ? "__i18n" in t ? "local" : "global" : e.useScope ? e.useScope : "local";
}
function fc(e) {
  return e.mode === "composition" ? e.global : e.global.__composer;
}
function _c(e, t, n = !1) {
  let s = null;
  const o = t.root;
  let r = mc(t, n);
  for (; r != null; ) {
    const a = e;
    if (e.mode === "composition")
      s = a.__getInstance(r);
    else if (__VUE_I18N_LEGACY_API__) {
      const i = a.__getInstance(r);
      i != null && (s = i.__composer, n && s && !s[Ar] && (s = null));
    }
    if (s != null || o === r)
      break;
    r = r.parent;
  }
  return s;
}
function mc(e, t = !1) {
  return e == null ? null : t && e.vnode.ctx || e.parent;
}
function hc(e, t, n) {
  let s = null;
  Kt(() => {
    if (process.env.NODE_ENV !== "production") {
      t.__VUE_I18N__ = n, s = bi();
      const o = n;
      o[ls] && o[ls](s), s.on("*", Lo);
    }
  }, t), Jo(() => {
    const o = n;
    process.env.NODE_ENV !== "production" && (s && s.off("*", Lo), o[cs] && o[cs](), delete t.__VUE_I18N__), e.__deleteInstance(t);
    const r = o[us];
    r && (r(), delete o[us]);
  }, t);
}
le({
  value: {
    type: [Number, Date],
    required: !0
  },
  format: {
    type: [String, Object]
  }
}, ws);
Ql();
Dl(cl);
Pl(Ol);
Al(Er);
if (process.env.NODE_ENV !== "production" || __INTLIFY_PROD_DEVTOOLS__) {
  const e = Qe();
  e.__INTLIFY__ = !0, ul(e.__INTLIFY_DEVTOOLS_GLOBAL_HOOK__);
}
process.env.NODE_ENV;
const Ur = Symbol(), an = "el", pc = "is-", Ze = (e, t, n, s, o) => {
  let r = `${e}-${t}`;
  return n && (r += `-${n}`), s && (r += `__${s}`), o && (r += `--${o}`), r;
}, Vr = Symbol("namespaceContextKey"), gc = (e) => {
  const t = e || (Be() ? Ie(Vr, Z(an)) : Z(an));
  return W(() => p(t) || an);
}, Cs = (e, t) => {
  const n = gc(t);
  return {
    namespace: n,
    b: (w = "") => Ze(n.value, e, w, "", ""),
    e: (w) => w ? Ze(n.value, e, "", w, "") : "",
    m: (w) => w ? Ze(n.value, e, "", "", w) : "",
    be: (w, T) => w && T ? Ze(n.value, e, w, T, "") : "",
    em: (w, T) => w && T ? Ze(n.value, e, "", w, T) : "",
    bm: (w, T) => w && T ? Ze(n.value, e, w, "", T) : "",
    bem: (w, T, f) => w && T && f ? Ze(n.value, e, w, T, f) : "",
    is: (w, ...T) => {
      const f = T.length >= 1 ? T[0] : !0;
      return w && f ? `${pc}${w}` : "";
    },
    cssVar: (w) => {
      const T = {};
      for (const f in w)
        w[f] && (T[`--${n.value}-${f}`] = w[f]);
      return T;
    },
    cssVarName: (w) => `--${n.value}-${w}`,
    cssVarBlock: (w) => {
      const T = {};
      for (const f in w)
        w[f] && (T[`--${n.value}-${e}-${f}`] = w[f]);
      return T;
    },
    cssVarBlockName: (w) => `--${n.value}-${e}-${w}`
  };
};
var yc = typeof global == "object" && global && global.Object === Object && global, vc = typeof self == "object" && self && self.Object === Object && self, Os = yc || vc || Function("return this")(), yt = Os.Symbol, xr = Object.prototype, Ec = xr.hasOwnProperty, bc = xr.toString, It = yt ? yt.toStringTag : void 0;
function Nc(e) {
  var t = Ec.call(e, It), n = e[It];
  try {
    e[It] = void 0;
    var s = !0;
  } catch {
  }
  var o = bc.call(e);
  return s && (t ? e[It] = n : delete e[It]), o;
}
var kc = Object.prototype, wc = kc.toString;
function Cc(e) {
  return wc.call(e);
}
var Oc = "[object Null]", Lc = "[object Undefined]", To = yt ? yt.toStringTag : void 0;
function Wr(e) {
  return e == null ? e === void 0 ? Lc : Oc : To && To in Object(e) ? Nc(e) : Cc(e);
}
function Tc(e) {
  return e != null && typeof e == "object";
}
var Sc = "[object Symbol]";
function Ls(e) {
  return typeof e == "symbol" || Tc(e) && Wr(e) == Sc;
}
function Ic(e, t) {
  for (var n = -1, s = e == null ? 0 : e.length, o = Array(s); ++n < s; )
    o[n] = t(e[n], n, e);
  return o;
}
var Ts = Array.isArray, So = yt ? yt.prototype : void 0, Io = So ? So.toString : void 0;
function jr(e) {
  if (typeof e == "string")
    return e;
  if (Ts(e))
    return Ic(e, jr) + "";
  if (Ls(e))
    return Io ? Io.call(e) : "";
  var t = e + "";
  return t == "0" && 1 / e == -1 / 0 ? "-0" : t;
}
function Br(e) {
  var t = typeof e;
  return e != null && (t == "object" || t == "function");
}
var Dc = "[object AsyncFunction]", Pc = "[object Function]", Ac = "[object GeneratorFunction]", Mc = "[object Proxy]";
function Rc(e) {
  if (!Br(e))
    return !1;
  var t = Wr(e);
  return t == Pc || t == Ac || t == Dc || t == Mc;
}
var Xn = Os["__core-js_shared__"], Do = function() {
  var e = /[^.]+$/.exec(Xn && Xn.keys && Xn.keys.IE_PROTO || "");
  return e ? "Symbol(src)_1." + e : "";
}();
function Fc(e) {
  return !!Do && Do in e;
}
var $c = Function.prototype, Uc = $c.toString;
function Vc(e) {
  if (e != null) {
    try {
      return Uc.call(e);
    } catch {
    }
    try {
      return e + "";
    } catch {
    }
  }
  return "";
}
var xc = /[\\^$.*+?()[\]{}|]/g, Wc = /^\[object .+?Constructor\]$/, jc = Function.prototype, Bc = Object.prototype, zc = jc.toString, Hc = Bc.hasOwnProperty, Kc = RegExp(
  "^" + zc.call(Hc).replace(xc, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$"
);
function Gc(e) {
  if (!Br(e) || Fc(e))
    return !1;
  var t = Rc(e) ? Kc : Wc;
  return t.test(Vc(e));
}
function Yc(e, t) {
  return e?.[t];
}
function zr(e, t) {
  var n = Yc(e, t);
  return Gc(n) ? n : void 0;
}
function Xc(e, t) {
  return e === t || e !== e && t !== t;
}
var Jc = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/, Zc = /^\w*$/;
function qc(e, t) {
  if (Ts(e))
    return !1;
  var n = typeof e;
  return n == "number" || n == "symbol" || n == "boolean" || e == null || Ls(e) ? !0 : Zc.test(e) || !Jc.test(e) || t != null && e in Object(t);
}
var Ht = zr(Object, "create");
function Qc() {
  this.__data__ = Ht ? Ht(null) : {}, this.size = 0;
}
function eu(e) {
  var t = this.has(e) && delete this.__data__[e];
  return this.size -= t ? 1 : 0, t;
}
var tu = "__lodash_hash_undefined__", nu = Object.prototype, su = nu.hasOwnProperty;
function ou(e) {
  var t = this.__data__;
  if (Ht) {
    var n = t[e];
    return n === tu ? void 0 : n;
  }
  return su.call(t, e) ? t[e] : void 0;
}
var ru = Object.prototype, au = ru.hasOwnProperty;
function iu(e) {
  var t = this.__data__;
  return Ht ? t[e] !== void 0 : au.call(t, e);
}
var lu = "__lodash_hash_undefined__";
function cu(e, t) {
  var n = this.__data__;
  return this.size += this.has(e) ? 0 : 1, n[e] = Ht && t === void 0 ? lu : t, this;
}
function rt(e) {
  var t = -1, n = e == null ? 0 : e.length;
  for (this.clear(); ++t < n; ) {
    var s = e[t];
    this.set(s[0], s[1]);
  }
}
rt.prototype.clear = Qc;
rt.prototype.delete = eu;
rt.prototype.get = ou;
rt.prototype.has = iu;
rt.prototype.set = cu;
function uu() {
  this.__data__ = [], this.size = 0;
}
function Tn(e, t) {
  for (var n = e.length; n--; )
    if (Xc(e[n][0], t))
      return n;
  return -1;
}
var du = Array.prototype, fu = du.splice;
function _u(e) {
  var t = this.__data__, n = Tn(t, e);
  if (n < 0)
    return !1;
  var s = t.length - 1;
  return n == s ? t.pop() : fu.call(t, n, 1), --this.size, !0;
}
function mu(e) {
  var t = this.__data__, n = Tn(t, e);
  return n < 0 ? void 0 : t[n][1];
}
function hu(e) {
  return Tn(this.__data__, e) > -1;
}
function pu(e, t) {
  var n = this.__data__, s = Tn(n, e);
  return s < 0 ? (++this.size, n.push([e, t])) : n[s][1] = t, this;
}
function Nt(e) {
  var t = -1, n = e == null ? 0 : e.length;
  for (this.clear(); ++t < n; ) {
    var s = e[t];
    this.set(s[0], s[1]);
  }
}
Nt.prototype.clear = uu;
Nt.prototype.delete = _u;
Nt.prototype.get = mu;
Nt.prototype.has = hu;
Nt.prototype.set = pu;
var gu = zr(Os, "Map");
function yu() {
  this.size = 0, this.__data__ = {
    hash: new rt(),
    map: new (gu || Nt)(),
    string: new rt()
  };
}
function vu(e) {
  var t = typeof e;
  return t == "string" || t == "number" || t == "symbol" || t == "boolean" ? e !== "__proto__" : e === null;
}
function Sn(e, t) {
  var n = e.__data__;
  return vu(t) ? n[typeof t == "string" ? "string" : "hash"] : n.map;
}
function Eu(e) {
  var t = Sn(this, e).delete(e);
  return this.size -= t ? 1 : 0, t;
}
function bu(e) {
  return Sn(this, e).get(e);
}
function Nu(e) {
  return Sn(this, e).has(e);
}
function ku(e, t) {
  var n = Sn(this, e), s = n.size;
  return n.set(e, t), this.size += n.size == s ? 0 : 1, this;
}
function it(e) {
  var t = -1, n = e == null ? 0 : e.length;
  for (this.clear(); ++t < n; ) {
    var s = e[t];
    this.set(s[0], s[1]);
  }
}
it.prototype.clear = yu;
it.prototype.delete = Eu;
it.prototype.get = bu;
it.prototype.has = Nu;
it.prototype.set = ku;
var wu = "Expected a function";
function Ss(e, t) {
  if (typeof e != "function" || t != null && typeof t != "function")
    throw new TypeError(wu);
  var n = function() {
    var s = arguments, o = t ? t.apply(this, s) : s[0], r = n.cache;
    if (r.has(o))
      return r.get(o);
    var a = e.apply(this, s);
    return n.cache = r.set(o, a) || r, a;
  };
  return n.cache = new (Ss.Cache || it)(), n;
}
Ss.Cache = it;
var Cu = 500;
function Ou(e) {
  var t = Ss(e, function(s) {
    return n.size === Cu && n.clear(), s;
  }), n = t.cache;
  return t;
}
var Lu = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g, Tu = /\\(\\)?/g, Su = Ou(function(e) {
  var t = [];
  return e.charCodeAt(0) === 46 && t.push(""), e.replace(Lu, function(n, s, o, r) {
    t.push(o ? r.replace(Tu, "$1") : s || n);
  }), t;
});
function Iu(e) {
  return e == null ? "" : jr(e);
}
function Du(e, t) {
  return Ts(e) ? e : qc(e, t) ? [e] : Su(Iu(e));
}
function Pu(e) {
  if (typeof e == "string" || Ls(e))
    return e;
  var t = e + "";
  return t == "0" && 1 / e == -1 / 0 ? "-0" : t;
}
function Au(e, t) {
  t = Du(t, e);
  for (var n = 0, s = t.length; e != null && n < s; )
    e = e[Pu(t[n++])];
  return n && n == s ? e : void 0;
}
function Mu(e, t, n) {
  var s = e == null ? void 0 : Au(e, t);
  return s === void 0 ? n : s;
}
function Ru(e) {
  for (var t = -1, n = e == null ? 0 : e.length, s = {}; ++t < n; ) {
    var o = e[t];
    s[o[0]] = o[1];
  }
  return s;
}
const Hr = (e) => e === void 0, Po = (e) => typeof e == "boolean", at = (e) => typeof e == "number", ds = (e) => typeof Element > "u" ? !1 : e instanceof Element, Fu = (e) => ze(e) ? !Number.isNaN(Number(e)) : !1;
var $u = Object.defineProperty, Uu = Object.defineProperties, Vu = Object.getOwnPropertyDescriptors, Ao = Object.getOwnPropertySymbols, xu = Object.prototype.hasOwnProperty, Wu = Object.prototype.propertyIsEnumerable, Mo = (e, t, n) => t in e ? $u(e, t, { enumerable: !0, configurable: !0, writable: !0, value: n }) : e[t] = n, ju = (e, t) => {
  for (var n in t || (t = {}))
    xu.call(t, n) && Mo(e, n, t[n]);
  if (Ao)
    for (var n of Ao(t))
      Wu.call(t, n) && Mo(e, n, t[n]);
  return e;
}, Bu = (e, t) => Uu(e, Vu(t));
function tm(e, t) {
  var n;
  const s = Xo();
  return ga(() => {
    s.value = e();
  }, Bu(ju({}, t), {
    flush: (n = void 0) != null ? n : "sync"
  })), qo(s);
}
var Ro;
const lt = typeof window < "u", zu = (e) => typeof e == "string", Kr = () => {
}, Hu = lt && ((Ro = window?.navigator) == null ? void 0 : Ro.userAgent) && /iP(ad|hone|od)/.test(window.navigator.userAgent);
function Is(e) {
  return typeof e == "function" ? e() : p(e);
}
function Ku(e) {
  return e;
}
function Ds(e) {
  return Go() ? (Yo(e), !0) : !1;
}
function Gu(e, t = !0) {
  Be() ? Kt(e) : t ? e() : cn(e);
}
function Gr(e, t, n = {}) {
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
    }, Is(t));
  }
  return s && (o.value = !0, lt && c()), Ds(i), {
    isPending: qo(o),
    start: c,
    stop: i
  };
}
function ht(e) {
  var t;
  const n = Is(e);
  return (t = n?.$el) != null ? t : n;
}
const Ps = lt ? window : void 0;
function $t(...e) {
  let t, n, s, o;
  if (zu(e[0]) || Array.isArray(e[0]) ? ([n, s, o] = e, t = Ps) : [t, n, s, o] = e, !t)
    return Kr;
  Array.isArray(n) || (n = [n]), Array.isArray(s) || (s = [s]);
  const r = [], a = () => {
    r.forEach((h) => h()), r.length = 0;
  }, i = (h, b, m, O) => (h.addEventListener(b, m, O), () => h.removeEventListener(b, m, O)), c = tt(() => [ht(t), Is(o)], ([h, b]) => {
    a(), h && r.push(...n.flatMap((m) => s.map((O) => i(h, m, O, b))));
  }, { immediate: !0, flush: "post" }), _ = () => {
    c(), a();
  };
  return Ds(_), _;
}
let Fo = !1;
function nm(e, t, n = {}) {
  const { window: s = Ps, ignore: o = [], capture: r = !0, detectIframe: a = !1 } = n;
  if (!s)
    return;
  Hu && !Fo && (Fo = !0, Array.from(s.document.body.children).forEach((m) => m.addEventListener("click", Kr)));
  let i = !0;
  const c = (m) => o.some((O) => {
    if (typeof O == "string")
      return Array.from(s.document.querySelectorAll(O)).some((M) => M === m.target || m.composedPath().includes(M));
    {
      const M = ht(O);
      return M && (m.target === M || m.composedPath().includes(M));
    }
  }), h = [
    $t(s, "click", (m) => {
      const O = ht(e);
      if (!(!O || O === m.target || m.composedPath().includes(O))) {
        if (m.detail === 0 && (i = !c(m)), !i) {
          i = !0;
          return;
        }
        t(m);
      }
    }, { passive: !0, capture: r }),
    $t(s, "pointerdown", (m) => {
      const O = ht(e);
      O && (i = !m.composedPath().includes(O) && !c(m));
    }, { passive: !0 }),
    a && $t(s, "blur", (m) => {
      var O;
      const M = ht(e);
      ((O = s.document.activeElement) == null ? void 0 : O.tagName) === "IFRAME" && !M?.contains(s.document.activeElement) && t(m);
    })
  ].filter(Boolean);
  return () => h.forEach((m) => m());
}
function Yu(e, t = !1) {
  const n = Z(), s = () => n.value = !!e();
  return s(), Gu(s, t), n;
}
const $o = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {}, Uo = "__vueuse_ssr_handlers__";
$o[Uo] = $o[Uo] || {};
var Vo = Object.getOwnPropertySymbols, Xu = Object.prototype.hasOwnProperty, Ju = Object.prototype.propertyIsEnumerable, Zu = (e, t) => {
  var n = {};
  for (var s in e)
    Xu.call(e, s) && t.indexOf(s) < 0 && (n[s] = e[s]);
  if (e != null && Vo)
    for (var s of Vo(e))
      t.indexOf(s) < 0 && Ju.call(e, s) && (n[s] = e[s]);
  return n;
};
function qu(e, t, n = {}) {
  const s = n, { window: o = Ps } = s, r = Zu(s, ["window"]);
  let a;
  const i = Yu(() => o && "ResizeObserver" in o), c = () => {
    a && (a.disconnect(), a = void 0);
  }, _ = tt(() => ht(e), (b) => {
    c(), i.value && o && b && (a = new ResizeObserver(t), a.observe(b, r));
  }, { immediate: !0, flush: "post" }), h = () => {
    c(), _();
  };
  return Ds(h), {
    isSupported: i,
    stop: h
  };
}
var xo;
(function(e) {
  e.UP = "UP", e.RIGHT = "RIGHT", e.DOWN = "DOWN", e.LEFT = "LEFT", e.NONE = "NONE";
})(xo || (xo = {}));
var Qu = Object.defineProperty, Wo = Object.getOwnPropertySymbols, ed = Object.prototype.hasOwnProperty, td = Object.prototype.propertyIsEnumerable, jo = (e, t, n) => t in e ? Qu(e, t, { enumerable: !0, configurable: !0, writable: !0, value: n }) : e[t] = n, nd = (e, t) => {
  for (var n in t || (t = {}))
    ed.call(t, n) && jo(e, n, t[n]);
  if (Wo)
    for (var n of Wo(t))
      td.call(t, n) && jo(e, n, t[n]);
  return e;
};
const sd = {
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
nd({
  linear: Ku
}, sd);
class Yr extends Error {
  constructor(t) {
    super(t), this.name = "ElementPlusError";
  }
}
function sm(e, t) {
  throw new Yr(`[${e}] ${t}`);
}
function Yt(e, t) {
  if (process.env.NODE_ENV !== "production") {
    const n = ze(e) ? new Yr(`[${e}] ${t}`) : e;
    console.warn(n);
  }
}
const Bo = {
  current: 0
}, zo = Z(0), Xr = 2e3, Ho = Symbol("elZIndexContextKey"), Jr = Symbol("zIndexContextKey"), od = (e) => {
  const t = Be() ? Ie(Ho, Bo) : Bo, n = e || (Be() ? Ie(Jr, void 0) : void 0), s = W(() => {
    const a = p(n);
    return at(a) ? a : Xr;
  }), o = W(() => s.value + zo.value), r = () => (t.current++, zo.value = t.current, o.value);
  return !lt && !Ie(Ho) && Yt("ZIndexInjection", `Looks like you are using server rendering, you must provide a z-index provider to ensure the hydration process to be succeed
usage: app.provide(ZINDEX_INJECTION_KEY, { current: 0 })`), {
    initialZIndex: s,
    currentZIndex: o,
    nextZIndex: r
  };
};
var rd = {
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
const ad = (e) => (t, n) => id(t, n, p(e)), id = (e, t, n) => Mu(n, e, e).replace(/\{(\w+)\}/g, (s, o) => {
  var r;
  return `${(r = t?.[o]) != null ? r : `{${o}}`}`;
}), ld = (e) => {
  const t = W(() => p(e).name), n = pt(e) ? e : Z(e);
  return {
    lang: t,
    locale: n,
    t: ad(e)
  };
}, Zr = Symbol("localeContextKey"), cd = (e) => {
  const t = e || Ie(Zr, Z());
  return ld(W(() => t.value || rd));
}, qr = "__epPropKey", $e = (e) => e, ud = (e) => Qo(e) && !!e[qr], Qr = (e, t) => {
  if (!Qo(e) || ud(e))
    return e;
  const { values: n, required: s, default: o, type: r, validator: a } = e, c = {
    type: r,
    required: !!s,
    validator: n || a ? (_) => {
      let h = !1, b = [];
      if (n && (b = Array.from(n), $s(e, "default") && b.push(o), h || (h = b.includes(_))), a && (h || (h = a(_))), !h && b.length > 0) {
        const m = [...new Set(b)].map((O) => JSON.stringify(O)).join(", ");
        ya(`Invalid prop: validation failed${t ? ` for prop "${t}"` : ""}. Expected one of [${m}], got value ${JSON.stringify(_)}.`);
      }
      return h;
    } : void 0,
    [qr]: !0
  };
  return $s(e, "default") && (c.default = o), c;
}, Xt = (e) => Ru(Object.entries(e).map(([t, n]) => [
  t,
  Qr(n, t)
])), dd = ["", "default", "small", "large"], om = Qr({
  type: String,
  values: dd,
  required: !1
}), ea = Symbol("size"), rm = () => {
  const e = Ie(ea, {});
  return W(() => p(e.size) || "");
}, fd = Symbol("emptyValuesContextKey"), am = Xt({
  emptyValues: Array,
  valueOnClear: {
    type: [String, Number, Boolean, Function],
    default: void 0,
    validator: (e) => Ut(e) ? !e() : !e
  }
}), Ko = (e) => Object.keys(e), vn = Z();
function ta(e, t = void 0) {
  const n = Be() ? Ie(Ur, vn) : vn;
  return e ? W(() => {
    var s, o;
    return (o = (s = n.value) == null ? void 0 : s[e]) != null ? o : t;
  }) : n;
}
function na(e, t) {
  const n = ta(), s = Cs(e, W(() => {
    var i;
    return ((i = n.value) == null ? void 0 : i.namespace) || an;
  })), o = cd(W(() => {
    var i;
    return (i = n.value) == null ? void 0 : i.locale;
  })), r = od(W(() => {
    var i;
    return ((i = n.value) == null ? void 0 : i.zIndex) || Xr;
  })), a = W(() => {
    var i;
    return p(t) || ((i = n.value) == null ? void 0 : i.size) || "";
  });
  return _d(W(() => p(n) || {})), {
    ns: s,
    locale: o,
    zIndex: r,
    size: a
  };
}
const _d = (e, t, n = !1) => {
  var s;
  const o = !!Be(), r = o ? ta() : void 0, a = (s = void 0) != null ? s : o ? va : void 0;
  if (!a) {
    Yt("provideGlobalConfig", "provideGlobalConfig() can only be used inside setup().");
    return;
  }
  const i = W(() => {
    const c = p(e);
    return r?.value ? md(r.value, c) : c;
  });
  return a(Ur, i), a(Zr, W(() => i.value.locale)), a(Vr, W(() => i.value.namespace)), a(Jr, W(() => i.value.zIndex)), a(ea, {
    size: W(() => i.value.size || "")
  }), a(fd, W(() => ({
    emptyValues: i.value.emptyValues,
    valueOnClear: i.value.valueOnClear
  }))), (n || !vn.value) && (vn.value = i.value), i;
}, md = (e, t) => {
  const n = [.../* @__PURE__ */ new Set([...Ko(e), ...Ko(t)])], s = {};
  for (const o of n)
    s[o] = t[o] !== void 0 ? t[o] : e[o];
  return s;
};
var In = (e, t) => {
  const n = e.__vccOpts || e;
  for (const [s, o] of t)
    n[s] = o;
  return n;
};
const hd = "utils/dom/style";
function fs(e, t = "px") {
  if (!e)
    return "";
  if (at(e) || Fu(e))
    return `${e}${t}`;
  if (ze(e))
    return e;
  Yt(hd, "binding value must be a string or number");
}
const sa = (e, t) => {
  if (e.install = (n) => {
    for (const s of [e, ...Object.values(t ?? {})])
      n.component(s.name, s);
  }, t)
    for (const [n, s] of Object.entries(t))
      e[n] = s;
  return e;
}, oa = (e, t) => (e.install = (n) => {
  e._context = n._context, n.config.globalProperties[t] = e;
}, e), im = (e) => (e.install = Ea, e), pd = Xt({
  size: {
    type: $e([Number, String])
  },
  color: {
    type: String
  }
}), gd = re({
  name: "ElIcon",
  inheritAttrs: !1
}), yd = /* @__PURE__ */ re({
  ...gd,
  props: pd,
  setup(e) {
    const t = e, n = Cs("icon"), s = W(() => {
      const { size: o, color: r } = t;
      return !o && !r ? {} : {
        fontSize: Hr(o) ? void 0 : fs(o),
        "--color": r
      };
    });
    return (o, r) => (B(), J("i", ba({
      class: p(n).b(),
      style: p(s)
    }, o.$attrs), [
      Vt(o.$slots, "default")
    ], 16));
  }
});
var vd = /* @__PURE__ */ In(yd, [["__file", "icon.vue"]]);
const En = sa(vd);
/*! Element Plus Icons Vue v2.3.1 */
var Ed = /* @__PURE__ */ re({
  name: "ArrowDown",
  __name: "arrow-down",
  setup(e) {
    return (t, n) => (B(), J("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 1024 1024"
    }, [
      v("path", {
        fill: "currentColor",
        d: "M831.872 340.864 512 652.672 192.128 340.864a30.592 30.592 0 0 0-42.752 0 29.12 29.12 0 0 0 0 41.6L489.664 714.24a32 32 0 0 0 44.672 0l340.288-331.712a29.12 29.12 0 0 0 0-41.728 30.592 30.592 0 0 0-42.752 0z"
      })
    ]));
  }
}), lm = Ed, bd = /* @__PURE__ */ re({
  name: "CircleCloseFilled",
  __name: "circle-close-filled",
  setup(e) {
    return (t, n) => (B(), J("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 1024 1024"
    }, [
      v("path", {
        fill: "currentColor",
        d: "M512 64a448 448 0 1 1 0 896 448 448 0 0 1 0-896m0 393.664L407.936 353.6a38.4 38.4 0 1 0-54.336 54.336L457.664 512 353.6 616.064a38.4 38.4 0 1 0 54.336 54.336L512 566.336 616.064 670.4a38.4 38.4 0 1 0 54.336-54.336L566.336 512 670.4 407.936a38.4 38.4 0 1 0-54.336-54.336z"
      })
    ]));
  }
}), Nd = bd, kd = /* @__PURE__ */ re({
  name: "Close",
  __name: "close",
  setup(e) {
    return (t, n) => (B(), J("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 1024 1024"
    }, [
      v("path", {
        fill: "currentColor",
        d: "M764.288 214.592 512 466.88 259.712 214.592a31.936 31.936 0 0 0-45.12 45.12L466.752 512 214.528 764.224a31.936 31.936 0 1 0 45.12 45.184L512 557.184l252.288 252.288a31.936 31.936 0 0 0 45.12-45.12L557.12 512.064l252.288-252.352a31.936 31.936 0 1 0-45.12-45.184z"
      })
    ]));
  }
}), ra = kd, wd = /* @__PURE__ */ re({
  name: "InfoFilled",
  __name: "info-filled",
  setup(e) {
    return (t, n) => (B(), J("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 1024 1024"
    }, [
      v("path", {
        fill: "currentColor",
        d: "M512 64a448 448 0 1 1 0 896.064A448 448 0 0 1 512 64m67.2 275.072c33.28 0 60.288-23.104 60.288-57.344s-27.072-57.344-60.288-57.344c-33.28 0-60.16 23.104-60.16 57.344s26.88 57.344 60.16 57.344M590.912 699.2c0-6.848 2.368-24.64 1.024-34.752l-52.608 60.544c-10.88 11.456-24.512 19.392-30.912 17.28a12.992 12.992 0 0 1-8.256-14.72l87.68-276.992c7.168-35.136-12.544-67.2-54.336-71.296-44.096 0-108.992 44.736-148.48 101.504 0 6.784-1.28 23.68.064 33.792l52.544-60.608c10.88-11.328 23.552-19.328 29.952-17.152a12.8 12.8 0 0 1 7.808 16.128L388.48 728.576c-10.048 32.256 8.96 63.872 55.04 71.04 67.84 0 107.904-43.648 147.456-100.416z"
      })
    ]));
  }
}), Cd = wd, Od = /* @__PURE__ */ re({
  name: "Loading",
  __name: "loading",
  setup(e) {
    return (t, n) => (B(), J("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 1024 1024"
    }, [
      v("path", {
        fill: "currentColor",
        d: "M512 64a32 32 0 0 1 32 32v192a32 32 0 0 1-64 0V96a32 32 0 0 1 32-32m0 640a32 32 0 0 1 32 32v192a32 32 0 1 1-64 0V736a32 32 0 0 1 32-32m448-192a32 32 0 0 1-32 32H736a32 32 0 1 1 0-64h192a32 32 0 0 1 32 32m-640 0a32 32 0 0 1-32 32H96a32 32 0 0 1 0-64h192a32 32 0 0 1 32 32M195.2 195.2a32 32 0 0 1 45.248 0L376.32 331.008a32 32 0 0 1-45.248 45.248L195.2 240.448a32 32 0 0 1 0-45.248zm452.544 452.544a32 32 0 0 1 45.248 0L828.8 783.552a32 32 0 0 1-45.248 45.248L647.744 692.992a32 32 0 0 1 0-45.248zM828.8 195.264a32 32 0 0 1 0 45.184L692.992 376.32a32 32 0 0 1-45.248-45.248l135.808-135.808a32 32 0 0 1 45.248 0m-452.544 452.48a32 32 0 0 1 0 45.248L240.448 828.8a32 32 0 0 1-45.248-45.248l135.808-135.808a32 32 0 0 1 45.248 0z"
      })
    ]));
  }
}), cm = Od, Ld = /* @__PURE__ */ re({
  name: "SuccessFilled",
  __name: "success-filled",
  setup(e) {
    return (t, n) => (B(), J("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 1024 1024"
    }, [
      v("path", {
        fill: "currentColor",
        d: "M512 64a448 448 0 1 1 0 896 448 448 0 0 1 0-896m-55.808 536.384-99.52-99.584a38.4 38.4 0 1 0-54.336 54.336l126.72 126.72a38.272 38.272 0 0 0 54.336 0l262.4-262.464a38.4 38.4 0 1 0-54.272-54.336z"
      })
    ]));
  }
}), Td = Ld, Sd = /* @__PURE__ */ re({
  name: "WarningFilled",
  __name: "warning-filled",
  setup(e) {
    return (t, n) => (B(), J("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 1024 1024"
    }, [
      v("path", {
        fill: "currentColor",
        d: "M512 64a448 448 0 1 1 0 896 448 448 0 0 1 0-896m0 192a58.432 58.432 0 0 0-58.24 63.744l23.36 256.384a35.072 35.072 0 0 0 69.76 0l23.296-256.384A58.432 58.432 0 0 0 512 256m0 512a51.2 51.2 0 1 0 0-102.4 51.2 51.2 0 0 0 0 102.4"
      })
    ]));
  }
}), Id = Sd;
const aa = $e([
  String,
  Object,
  Function
]), Dd = {
  Close: ra
}, Pd = {
  Close: ra
}, bn = {
  success: Td,
  warning: Id,
  error: Nd,
  info: Cd
}, Ad = (e) => e, ln = {
  tab: "Tab",
  enter: "Enter",
  space: "Space",
  up: "ArrowUp",
  down: "ArrowDown",
  esc: "Escape",
  delete: "Delete",
  backspace: "Backspace",
  numpadEnter: "NumpadEnter",
  pageUp: "PageUp",
  pageDown: "PageDown",
  home: "Home",
  end: "End"
}, Md = Xt({
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
}), Rd = re({
  name: "ElBadge"
}), Fd = /* @__PURE__ */ re({
  ...Rd,
  props: Md,
  setup(e, { expose: t }) {
    const n = e, s = Cs("badge"), o = W(() => n.isDot ? "" : at(n.value) && at(n.max) ? n.max < n.value ? `${n.max}+` : `${n.value}` : `${n.value}`), r = W(() => {
      var a, i, c, _, h;
      return [
        {
          backgroundColor: n.color,
          marginRight: fs(-((i = (a = n.offset) == null ? void 0 : a[0]) != null ? i : 0)),
          marginTop: fs((_ = (c = n.offset) == null ? void 0 : c[1]) != null ? _ : 0)
        },
        (h = n.badgeStyle) != null ? h : {}
      ];
    });
    return t({
      content: o
    }), (a, i) => (B(), J("div", {
      class: ae(p(s).b())
    }, [
      Vt(a.$slots, "default"),
      F(hs, {
        name: `${p(s).namespace.value}-zoom-in-center`,
        persisted: ""
      }, {
        default: et(() => [
          ve(v("sup", {
            class: ae([
              p(s).e("content"),
              p(s).em("content", a.type),
              p(s).is("fixed", !!a.$slots.default),
              p(s).is("dot", a.isDot),
              p(s).is("hide-zero", !a.showZero && n.value === 0),
              a.badgeClass
            ]),
            style: un(p(r))
          }, [
            Vt(a.$slots, "content", { value: p(o) }, () => [
              qe(U(p(o)), 1)
            ])
          ], 6), [
            [dn, !a.hidden && (p(o) || a.isDot || a.$slots.content)]
          ])
        ]),
        _: 3
      }, 8, ["name"])
    ], 2));
  }
});
var $d = /* @__PURE__ */ In(Fd, [["__file", "badge.vue"]]);
const Ud = sa($d), Te = {}, ia = ["success", "info", "warning", "error"], de = Ad({
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
}), Vd = Xt({
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
    type: aa,
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
    values: ia,
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
}), xd = {
  destroy: () => !0
}, we = Na([]), Wd = (e) => {
  const t = we.findIndex((o) => o.id === e), n = we[t];
  let s;
  return t > 0 && (s = we[t - 1]), { current: n, prev: s };
}, jd = (e) => {
  const { prev: t } = Wd(e);
  return t ? t.vm.exposed.bottom.value : 0;
}, Bd = (e, t) => we.findIndex((s) => s.id === e) > 0 ? 16 : t, zd = re({
  name: "ElMessage"
}), Hd = /* @__PURE__ */ re({
  ...zd,
  props: Vd,
  emits: xd,
  setup(e, { expose: t }) {
    const n = e, { Close: s } = Pd, { ns: o, zIndex: r } = na("message"), { currentZIndex: a, nextZIndex: i } = r, c = Z(), _ = Z(!1), h = Z(0);
    let b;
    const m = W(() => n.type ? n.type === "error" ? "danger" : n.type : "info"), O = W(() => {
      const d = n.type;
      return { [o.bm("icon", d)]: d && bn[d] };
    }), M = W(() => n.icon || bn[n.type] || ""), w = W(() => jd(n.id)), T = W(() => Bd(n.id, n.offset) + w.value), f = W(() => h.value + T.value), k = W(() => ({
      top: `${T.value}px`,
      zIndex: a.value
    }));
    function E() {
      n.duration !== 0 && ({ stop: b } = Gr(() => {
        P();
      }, n.duration));
    }
    function N() {
      b?.();
    }
    function P() {
      _.value = !1;
    }
    function A({ code: d }) {
      d === ln.esc && P();
    }
    return Kt(() => {
      E(), i(), _.value = !0;
    }), tt(() => n.repeatNum, () => {
      N(), E();
    }), $t(document, "keydown", A), qu(c, () => {
      h.value = c.value.getBoundingClientRect().height;
    }), t({
      visible: _,
      bottom: f,
      close: P
    }), (d, j) => (B(), Ne(hs, {
      name: p(o).b("fade"),
      onBeforeLeave: d.onClose,
      onAfterLeave: (g) => d.$emit("destroy"),
      persisted: ""
    }, {
      default: et(() => [
        ve(v("div", {
          id: d.id,
          ref_key: "messageRef",
          ref: c,
          class: ae([
            p(o).b(),
            { [p(o).m(d.type)]: d.type },
            p(o).is("center", d.center),
            p(o).is("closable", d.showClose),
            p(o).is("plain", d.plain),
            d.customClass
          ]),
          style: un(p(k)),
          role: "alert",
          onMouseenter: N,
          onMouseleave: E
        }, [
          d.repeatNum > 1 ? (B(), Ne(p(Ud), {
            key: 0,
            value: d.repeatNum,
            type: p(m),
            class: ae(p(o).e("badge"))
          }, null, 8, ["value", "type", "class"])) : Y("v-if", !0),
          p(M) ? (B(), Ne(p(En), {
            key: 1,
            class: ae([p(o).e("icon"), p(O)])
          }, {
            default: et(() => [
              (B(), Ne(er(p(M))))
            ]),
            _: 1
          }, 8, ["class"])) : Y("v-if", !0),
          Vt(d.$slots, "default", {}, () => [
            d.dangerouslyUseHTMLString ? (B(), J(Gt, { key: 1 }, [
              Y(" Caution here, message could've been compromised, never use user's input as message "),
              v("p", {
                class: ae(p(o).e("content")),
                innerHTML: d.message
              }, null, 10, ["innerHTML"])
            ], 2112)) : (B(), J("p", {
              key: 0,
              class: ae(p(o).e("content"))
            }, U(d.message), 3))
          ]),
          d.showClose ? (B(), Ne(p(En), {
            key: 2,
            class: ae(p(o).e("closeBtn")),
            onClick: tr(P, ["stop"])
          }, {
            default: et(() => [
              F(p(s))
            ]),
            _: 1
          }, 8, ["class", "onClick"])) : Y("v-if", !0)
        ], 46, ["id"]), [
          [dn, _.value]
        ])
      ]),
      _: 3
    }, 8, ["name", "onBeforeLeave", "onAfterLeave"]));
  }
});
var Kd = /* @__PURE__ */ In(Hd, [["__file", "message.vue"]]);
let Gd = 1;
const la = (e) => {
  const t = !e || ze(e) || xt(e) || Ut(e) ? { message: e } : e, n = {
    ...de,
    ...t
  };
  if (!n.appendTo)
    n.appendTo = document.body;
  else if (ze(n.appendTo)) {
    let s = document.querySelector(n.appendTo);
    ds(s) || (Yt("ElMessage", "the appendTo option is not an HTMLElement. Falling back to document.body."), s = document.body), n.appendTo = s;
  }
  return Po(Te.grouping) && !n.grouping && (n.grouping = Te.grouping), at(Te.duration) && n.duration === 3e3 && (n.duration = Te.duration), at(Te.offset) && n.offset === 16 && (n.offset = Te.offset), Po(Te.showClose) && !n.showClose && (n.showClose = Te.showClose), n;
}, Yd = (e) => {
  const t = we.indexOf(e);
  if (t === -1)
    return;
  we.splice(t, 1);
  const { handler: n } = e;
  n.close();
}, Xd = ({ appendTo: e, ...t }, n) => {
  const s = `message_${Gd++}`, o = t.onClose, r = document.createElement("div"), a = {
    ...t,
    id: s,
    onClose: () => {
      o?.(), Yd(h);
    },
    onDestroy: () => {
      fn(null, r);
    }
  }, i = F(Kd, a, Ut(a.message) || xt(a.message) ? {
    default: Ut(a.message) ? a.message : () => a.message
  } : null);
  i.appContext = n || vt._context, fn(i, r), e.appendChild(r.firstElementChild);
  const c = i.component, h = {
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
  return h;
}, vt = (e = {}, t) => {
  if (!lt)
    return { close: () => {
    } };
  const n = la(e);
  if (n.grouping && we.length) {
    const o = we.find(({ vnode: r }) => {
      var a;
      return ((a = r.props) == null ? void 0 : a.message) === n.message;
    });
    if (o)
      return o.props.repeatNum += 1, o.props.type = n.type, o.handler;
  }
  if (at(Te.max) && we.length >= Te.max)
    return { close: () => {
    } };
  const s = Xd(n, t);
  return we.push(s), s.handler;
};
ia.forEach((e) => {
  vt[e] = (t = {}, n) => {
    const s = la(t);
    return vt({ ...s, type: e }, n);
  };
});
function Jd(e) {
  for (const t of we)
    (!e || e === t.props.type) && t.handler.close();
}
vt.closeAll = Jd;
vt._context = null;
const Zd = oa(vt, "$message"), ca = [
  "success",
  "info",
  "warning",
  "error"
], qd = Xt({
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
    type: aa
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
    values: [...ca, ""],
    default: ""
  },
  zIndex: Number
}), Qd = {
  destroy: () => !0
}, ef = re({
  name: "ElNotification"
}), tf = /* @__PURE__ */ re({
  ...ef,
  props: qd,
  emits: Qd,
  setup(e, { expose: t }) {
    const n = e, { ns: s, zIndex: o } = na("notification"), { nextZIndex: r, currentZIndex: a } = o, { Close: i } = Dd, c = Z(!1);
    let _;
    const h = W(() => {
      const E = n.type;
      return E && bn[n.type] ? s.m(E) : "";
    }), b = W(() => n.type && bn[n.type] || n.icon), m = W(() => n.position.endsWith("right") ? "right" : "left"), O = W(() => n.position.startsWith("top") ? "top" : "bottom"), M = W(() => {
      var E;
      return {
        [O.value]: `${n.offset}px`,
        zIndex: (E = n.zIndex) != null ? E : a.value
      };
    });
    function w() {
      n.duration > 0 && ({ stop: _ } = Gr(() => {
        c.value && f();
      }, n.duration));
    }
    function T() {
      _?.();
    }
    function f() {
      c.value = !1;
    }
    function k({ code: E }) {
      E === ln.delete || E === ln.backspace ? T() : E === ln.esc ? c.value && f() : w();
    }
    return Kt(() => {
      w(), r(), c.value = !0;
    }), $t(document, "keydown", k), t({
      visible: c,
      close: f
    }), (E, N) => (B(), Ne(hs, {
      name: p(s).b("fade"),
      onBeforeLeave: E.onClose,
      onAfterLeave: (P) => E.$emit("destroy"),
      persisted: ""
    }, {
      default: et(() => [
        ve(v("div", {
          id: E.id,
          class: ae([p(s).b(), E.customClass, p(m)]),
          style: un(p(M)),
          role: "alert",
          onMouseenter: T,
          onMouseleave: w,
          onClick: E.onClick
        }, [
          p(b) ? (B(), Ne(p(En), {
            key: 0,
            class: ae([p(s).e("icon"), p(h)])
          }, {
            default: et(() => [
              (B(), Ne(er(p(b))))
            ]),
            _: 1
          }, 8, ["class"])) : Y("v-if", !0),
          v("div", {
            class: ae(p(s).e("group"))
          }, [
            v("h2", {
              class: ae(p(s).e("title")),
              textContent: U(E.title)
            }, null, 10, ["textContent"]),
            ve(v("div", {
              class: ae(p(s).e("content")),
              style: un(E.title ? void 0 : { margin: 0 })
            }, [
              Vt(E.$slots, "default", {}, () => [
                E.dangerouslyUseHTMLString ? (B(), J(Gt, { key: 1 }, [
                  Y(" Caution here, message could've been compromised, never use user's input as message "),
                  v("p", { innerHTML: E.message }, null, 8, ["innerHTML"])
                ], 2112)) : (B(), J("p", { key: 0 }, U(E.message), 1))
              ])
            ], 6), [
              [dn, E.message]
            ]),
            E.showClose ? (B(), Ne(p(En), {
              key: 0,
              class: ae(p(s).e("closeBtn")),
              onClick: tr(f, ["stop"])
            }, {
              default: et(() => [
                F(p(i))
              ]),
              _: 1
            }, 8, ["class", "onClick"])) : Y("v-if", !0)
          ], 2)
        ], 46, ["id", "onClick"]), [
          [dn, c.value]
        ])
      ]),
      _: 3
    }, 8, ["name", "onBeforeLeave", "onAfterLeave"]));
  }
});
var nf = /* @__PURE__ */ In(tf, [["__file", "notification.vue"]]);
const Nn = {
  "top-left": [],
  "top-right": [],
  "bottom-left": [],
  "bottom-right": []
}, _s = 16;
let sf = 1;
const Et = function(e = {}, t) {
  if (!lt)
    return { close: () => {
    } };
  (ze(e) || xt(e)) && (e = { message: e });
  const n = e.position || "top-right";
  let s = e.offset || 0;
  Nn[n].forEach(({ vm: h }) => {
    var b;
    s += (((b = h.el) == null ? void 0 : b.offsetHeight) || 0) + _s;
  }), s += _s;
  const o = `notification_${sf++}`, r = e.onClose, a = {
    ...e,
    offset: s,
    id: o,
    onClose: () => {
      of(o, n, r);
    }
  };
  let i = document.body;
  ds(e.appendTo) ? i = e.appendTo : ze(e.appendTo) && (i = document.querySelector(e.appendTo)), ds(i) || (Yt("ElNotification", "the appendTo option is not an HTMLElement. Falling back to document.body."), i = document.body);
  const c = document.createElement("div"), _ = F(nf, a, Ut(a.message) ? a.message : xt(a.message) ? () => a.message : null);
  return _.appContext = Hr(t) ? Et._context : t, _.props.onDestroy = () => {
    fn(null, c);
  }, fn(_, c), Nn[n].push({ vm: _ }), i.appendChild(c.firstElementChild), {
    close: () => {
      _.component.exposed.visible.value = !1;
    }
  };
};
ca.forEach((e) => {
  Et[e] = (t = {}, n) => ((ze(t) || xt(t)) && (t = {
    message: t
  }), Et({ ...t, type: e }, n));
});
function of(e, t, n) {
  const s = Nn[t], o = s.findIndex(({ vm: _ }) => {
    var h;
    return ((h = _.component) == null ? void 0 : h.props.id) === e;
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
      const { el: h, component: b } = s[_].vm, m = Number.parseInt(h.style[i], 10) - a - _s;
      b.props.offset = m;
    }
}
function rf() {
  for (const e of Object.values(Nn))
    e.forEach(({ vm: t }) => {
      t.component.exposed.visible.value = !1;
    });
}
Et.closeAll = rf;
Et._context = null;
const af = oa(Et, "$notify"), Dt = {
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
    s === "center" ? Zd({
      message: t,
      type: n,
      duration: o,
      showClose: r,
      grouping: !0
    }) : af({
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
}, lf = {
  class: "title-bar fixed top-0 left-0 right-0 z-10 flex items-center justify-between px-4 py-3",
  "data-tauri-drag-region": ""
}, cf = { class: "flex items-center gap-3" }, uf = { class: "title-icon-wrap" }, df = { class: "m-0 text-lg font-medium tracking-tight" }, ff = { class: "content mx-auto max-w-2xl px-5 pt-20 pb-8" }, _f = { class: "section" }, mf = { class: "section-title" }, hf = { class: "mode-selector grid grid-cols-2 gap-3" }, pf = { class: "mode-option block cursor-pointer h-full" }, gf = { class: "mode-content mode-system" }, yf = { class: "mode-icon-wrap" }, vf = { class: "mode-body" }, Ef = { class: "mode-title" }, bf = { class: "mode-desc" }, Nf = { class: "mode-option block cursor-pointer h-full" }, kf = { class: "mode-content mode-light" }, wf = { class: "mode-icon-wrap" }, Cf = { class: "mode-body" }, Of = { class: "mode-title" }, Lf = { class: "mode-desc" }, Tf = { class: "mode-option block cursor-pointer h-full" }, Sf = { class: "mode-content mode-dark" }, If = { class: "mode-icon-wrap" }, Df = { class: "mode-body" }, Pf = { class: "mode-title" }, Af = { class: "mode-desc" }, Mf = { class: "mode-option block cursor-pointer h-full" }, Rf = { class: "mode-content mode-schedule" }, Ff = { class: "mode-icon-wrap" }, $f = { class: "mode-body" }, Uf = { class: "mode-title" }, Vf = { class: "mode-desc" }, xf = { class: "section" }, Wf = { class: "status-card" }, jf = { class: "status-row" }, Bf = { class: "status-label" }, zf = {
  key: 0,
  class: "status-row"
}, Hf = { class: "status-label" }, Kf = {
  key: 1,
  class: "status-hint"
}, Gf = { class: "section" }, Yf = { class: "section-title" }, Xf = { class: "mode-selector grid grid-cols-2 gap-3" }, Jf = { class: "mode-option block cursor-pointer h-full" }, Zf = { class: "schedule-type-card" }, qf = { class: "schedule-type-title" }, Qf = { class: "schedule-type-desc" }, e_ = { class: "mode-option block cursor-pointer h-full" }, t_ = { class: "schedule-type-card" }, n_ = { class: "schedule-type-title" }, s_ = { class: "schedule-type-desc" }, o_ = {
  key: 0,
  class: "section"
}, r_ = { class: "section-title section-title-with-icon" }, a_ = { class: "inset-card location-card" }, i_ = {
  key: 0,
  class: "loading-hint"
}, l_ = {
  key: 1,
  class: "location-info"
}, c_ = { class: "info-row" }, u_ = { class: "info-label" }, d_ = { class: "info-value" }, f_ = { class: "info-row" }, __ = { class: "info-label" }, m_ = { class: "info-value" }, h_ = { class: "info-row" }, p_ = { class: "info-label" }, g_ = { class: "info-value" }, y_ = ["disabled"], v_ = {
  key: 1,
  class: "section"
}, E_ = { class: "section-title" }, b_ = { class: "inset-card sun-times-card" }, N_ = { class: "sun-row" }, k_ = { class: "sun-info" }, w_ = { class: "sun-label" }, C_ = { class: "sun-value" }, O_ = { class: "sun-row" }, L_ = { class: "sun-info" }, T_ = { class: "sun-label" }, S_ = { class: "sun-value" }, I_ = { class: "sun-row sun-period" }, D_ = { class: "sun-label" }, P_ = {
  key: 2,
  class: "section"
}, A_ = { class: "inset-card location-card" }, M_ = { class: "info-row" }, R_ = { class: "info-value" }, F_ = {
  key: 0,
  class: "info-row"
}, $_ = { class: "info-value" }, U_ = {
  key: 1,
  class: "info-row"
}, V_ = { class: "info-value" }, x_ = {
  key: 2,
  class: "info-row"
}, W_ = { class: "info-value" }, j_ = {
  key: 3,
  class: "info-row"
}, B_ = { class: "info-value" }, z_ = {
  key: 3,
  class: "section"
}, H_ = { class: "section-title" }, K_ = { class: "inset-card time-settings" }, G_ = { class: "time-row" }, Y_ = { class: "time-label-text" }, X_ = { class: "time-row" }, J_ = { class: "time-label-text" }, Z_ = /* @__PURE__ */ re({
  __name: "index",
  setup(e) {
    const { t } = Ln(), n = li(), s = W(() => n.theme === "auto" ? r.value : n.theme === "dark"), o = Z({
      theme_mode: "Light",
      schedule_type: "SunBased",
      custom_light_time: "06:00",
      custom_dark_time: "18:00",
      latitude: null,
      longitude: null,
      timezone_offset: null,
      location_name: null
    }), r = Z(!1), a = Z(!1), i = Z(null), c = Z(null), _ = Z(null), h = Z(!1), b = Z(!1), m = Z(!1), O = Z(null), M = W(() => {
      const g = _.value?.source || "";
      return g.startsWith("manual:") ? `手动位置（${g.replace("manual:", "")}）` : g.startsWith("ip:") ? `自动定位（${g.replace("ip:", "")}）` : g || "-";
    }), w = async () => {
      try {
        const g = await S("get_dark_mode_config");
        o.value = g, await T();
      } catch (g) {
        _e.error("[主题] 加载配置失败", g), Dt.msg(t("darkMode.loadConfigFailed"), "error");
      }
    }, T = async () => {
      try {
        const g = await S("get_dark_mode_status_command");
        r.value = g.currentIsDark, a.value = g.schedulerRunning, _.value = g.sunCalcDebug ?? null;
      } catch (g) {
        _e.error("[主题] 加载状态失败", g);
      }
    }, f = async () => {
      h.value = !0;
      try {
        const g = await S("get_location_info");
        i.value = g, o.value.latitude = g.latitude, o.value.longitude = g.longitude, o.value.timezone_offset = g.timezone_offset, o.value.location_name = `${g.city}, ${g.region}`, o.value.schedule_type === "SunBased" && await k(), await A();
      } catch (g) {
        _e.error("[主题] 获取位置失败", g), Dt.msg(t("darkMode.getLocationFailed"), "error");
      } finally {
        await T(), h.value = !1;
      }
    }, k = async () => {
      if (!(!o.value.latitude || !o.value.longitude))
        try {
          const g = await S("calculate_sun_times_command", {
            latitude: o.value.latitude,
            longitude: o.value.longitude,
            timezoneOffset: o.value.timezone_offset || 0
          });
          c.value = g;
        } catch (g) {
          _e.error("[主题] 计算日出日落时间失败", g);
        }
    }, E = async () => {
      m.value || (await A(), o.value.theme_mode === "Schedule" && o.value.schedule_type === "SunBased" && !i.value && await f());
    }, N = async () => {
      m.value || (o.value.schedule_type === "SunBased" && !i.value && await f(), await A());
    }, P = async () => {
      m.value || o.value.schedule_type === "Custom" && await A();
    }, A = async () => {
      if (!m.value) {
        b.value = !0;
        try {
          await S("save_dark_mode_config_command", { config: o.value }), await T();
        } catch (g) {
          _e.error("[主题] 保存配置失败", g), Dt.msg(t("darkMode.saveConfigFailed"), "error");
        } finally {
          b.value = !1;
        }
      }
    }, d = async () => {
      try {
        const g = await S("toggle_system_theme");
        r.value = g;
        const C = t(g ? "darkMode.darkTheme" : "darkMode.lightTheme");
        let I = t("darkMode.switchedTo", { theme: C });
        o.value.theme_mode === "Schedule" && (I += t("darkMode.autoRestoreNote")), Dt.msg(I, "success");
      } catch (g) {
        _e.error("[主题] 切换主题失败", g), Dt.msg(t("darkMode.toggleFailed"), "error");
      }
    }, j = () => {
      Qn().close();
    };
    return Kt(async () => {
      await w(), o.value.theme_mode === "Schedule" && o.value.schedule_type === "SunBased" && await f(), O.value = await ps("dark-mode-changed", async (g) => {
        _e.debug(`[主题][窗口:dark_mode] 收到主题变更：${JSON.stringify(g.payload)}`), r.value = g.payload.isDark, m.value = !0;
        try {
          await w(), _e.debug(`[主题][窗口:dark_mode] 已从后端刷新配置：theme_mode=${o.value.theme_mode}, schedule_type=${o.value.schedule_type}`);
        } finally {
          m.value = !1;
        }
        n.theme === "auto" && n.syncSystemThemeStyle(g.payload.isDark);
      }), cn(() => {
        setTimeout(() => {
          Qn().emit("dark_mode_ready");
        }, 100);
      });
    }), tt(() => o.value.schedule_type, async (g) => {
      g === "SunBased" && o.value.latitude && o.value.longitude && await k();
    }), Jo(() => {
      O.value && O.value();
    }), (g, C) => (B(), J(
      "div",
      {
        class: ae(["dark-mode-container select-none rounded-lg", { dark: p(s) }])
      },
      [
        Y(" 标题栏 "),
        v("div", lf, [
          v("div", cf, [
            v("div", uf, [
              F(p(Bn), {
                class: "text-xl",
                theme: "filled"
              })
            ]),
            v(
              "h1",
              df,
              U(g.$t("darkMode.title")),
              1
              /* TEXT */
            )
          ]),
          v("button", {
            type: "button",
            onClick: j,
            class: "close-btn",
            "aria-label": "Close"
          }, [
            F(p(oi), { size: 18 })
          ])
        ]),
        Y(" 主要内容 "),
        v("div", ff, [
          Y(" 主题模式选择（四选一） "),
          v("div", _f, [
            v(
              "h2",
              mf,
              U(g.$t("darkMode.themeMode")),
              1
              /* TEXT */
            ),
            v("div", hf, [
              v("label", pf, [
                ve(v(
                  "input",
                  {
                    type: "radio",
                    value: "System",
                    "onUpdate:modelValue": C[0] || (C[0] = (I) => p(o).theme_mode = I),
                    onChange: E,
                    class: "sr-only"
                  },
                  null,
                  544
                  /* NEED_HYDRATION, NEED_PATCH */
                ), [
                  [ut, p(o).theme_mode]
                ]),
                v("div", gf, [
                  v("span", yf, [
                    F(p(ri), {
                      class: "mode-icon",
                      theme: "filled",
                      size: 22
                    })
                  ]),
                  v("div", vf, [
                    v(
                      "span",
                      Ef,
                      U(g.$t("darkMode.systemMode")),
                      1
                      /* TEXT */
                    ),
                    v(
                      "span",
                      bf,
                      U(g.$t("darkMode.systemModeDesc")),
                      1
                      /* TEXT */
                    )
                  ])
                ])
              ]),
              v("label", Nf, [
                ve(v(
                  "input",
                  {
                    type: "radio",
                    value: "Light",
                    "onUpdate:modelValue": C[1] || (C[1] = (I) => p(o).theme_mode = I),
                    onChange: E,
                    class: "sr-only"
                  },
                  null,
                  544
                  /* NEED_HYDRATION, NEED_PATCH */
                ), [
                  [ut, p(o).theme_mode]
                ]),
                v("div", kf, [
                  v("span", wf, [
                    F(p(Hs), {
                      class: "mode-icon",
                      theme: "filled",
                      size: 22
                    })
                  ]),
                  v("div", Cf, [
                    v(
                      "span",
                      Of,
                      U(g.$t("darkMode.lightMode")),
                      1
                      /* TEXT */
                    ),
                    v(
                      "span",
                      Lf,
                      U(g.$t("darkMode.lightModeDesc")),
                      1
                      /* TEXT */
                    )
                  ])
                ])
              ]),
              v("label", Tf, [
                ve(v(
                  "input",
                  {
                    type: "radio",
                    value: "Dark",
                    "onUpdate:modelValue": C[2] || (C[2] = (I) => p(o).theme_mode = I),
                    onChange: E,
                    class: "sr-only"
                  },
                  null,
                  544
                  /* NEED_HYDRATION, NEED_PATCH */
                ), [
                  [ut, p(o).theme_mode]
                ]),
                v("div", Sf, [
                  v("span", If, [
                    F(p(Bn), {
                      class: "mode-icon",
                      theme: "filled",
                      size: 22
                    })
                  ]),
                  v("div", Df, [
                    v(
                      "span",
                      Pf,
                      U(g.$t("darkMode.darkMode")),
                      1
                      /* TEXT */
                    ),
                    v(
                      "span",
                      Af,
                      U(g.$t("darkMode.darkModeDesc")),
                      1
                      /* TEXT */
                    )
                  ])
                ])
              ]),
              v("label", Mf, [
                ve(v(
                  "input",
                  {
                    type: "radio",
                    value: "Schedule",
                    "onUpdate:modelValue": C[3] || (C[3] = (I) => p(o).theme_mode = I),
                    onChange: E,
                    class: "sr-only"
                  },
                  null,
                  544
                  /* NEED_HYDRATION, NEED_PATCH */
                ), [
                  [ut, p(o).theme_mode]
                ]),
                v("div", Rf, [
                  v("span", Ff, [
                    F(p(Gs), {
                      class: "mode-icon",
                      theme: "filled",
                      size: 22
                    })
                  ]),
                  v("div", $f, [
                    v(
                      "span",
                      Uf,
                      U(g.$t("darkMode.scheduleMode")),
                      1
                      /* TEXT */
                    ),
                    v(
                      "span",
                      Vf,
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
          v("div", xf, [
            v("div", Wf, [
              v("div", jf, [
                v(
                  "span",
                  Bf,
                  U(g.$t("darkMode.currentTheme")),
                  1
                  /* TEXT */
                ),
                v(
                  "span",
                  {
                    class: ae(["status-badge", p(r) ? "badge-dark" : "badge-light"])
                  },
                  U(p(r) ? g.$t("darkMode.darkTheme") : g.$t("darkMode.lightTheme")),
                  3
                  /* TEXT, CLASS */
                )
              ]),
              p(o).theme_mode === "Schedule" ? (B(), J("div", zf, [
                v(
                  "span",
                  Hf,
                  U(g.$t("darkMode.schedulerStatus")),
                  1
                  /* TEXT */
                ),
                v(
                  "span",
                  {
                    class: ae(["status-badge", p(a) ? "badge-success" : "badge-danger"])
                  },
                  U(p(a) ? g.$t("darkMode.running") : g.$t("darkMode.stopped")),
                  3
                  /* TEXT, CLASS */
                )
              ])) : Y("v-if", !0),
              p(o).theme_mode !== "Schedule" ? (B(), J(
                "p",
                Kf,
                U(p(o).theme_mode === "System" ? g.$t("darkMode.systemModeDesc") : p(o).theme_mode === "Light" ? g.$t("darkMode.lightModeDesc") : g.$t("darkMode.darkModeDesc")),
                1
                /* TEXT */
              )) : Y("v-if", !0),
              v(
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
          p(o).theme_mode === "Schedule" ? (B(), J(
            Gt,
            { key: 0 },
            [
              Y(" 定时类型选择 "),
              v("div", Gf, [
                v(
                  "h2",
                  Yf,
                  U(g.$t("darkMode.scheduleType")),
                  1
                  /* TEXT */
                ),
                v("div", Xf, [
                  v("label", Jf, [
                    ve(v(
                      "input",
                      {
                        type: "radio",
                        value: "SunBased",
                        "onUpdate:modelValue": C[4] || (C[4] = (I) => p(o).schedule_type = I),
                        onChange: N,
                        class: "sr-only"
                      },
                      null,
                      544
                      /* NEED_HYDRATION, NEED_PATCH */
                    ), [
                      [ut, p(o).schedule_type]
                    ]),
                    v("div", Zf, [
                      v("span", qf, [
                        F(p(Ks), { size: 18 }),
                        qe(
                          " " + U(g.$t("darkMode.sunBased")),
                          1
                          /* TEXT */
                        )
                      ]),
                      v(
                        "span",
                        Qf,
                        U(g.$t("darkMode.sunBasedDesc")),
                        1
                        /* TEXT */
                      )
                    ])
                  ]),
                  v("label", e_, [
                    ve(v(
                      "input",
                      {
                        type: "radio",
                        value: "Custom",
                        "onUpdate:modelValue": C[5] || (C[5] = (I) => p(o).schedule_type = I),
                        onChange: N,
                        class: "sr-only"
                      },
                      null,
                      544
                      /* NEED_HYDRATION, NEED_PATCH */
                    ), [
                      [ut, p(o).schedule_type]
                    ]),
                    v("div", t_, [
                      v("span", n_, [
                        F(p(Gs), { size: 18 }),
                        qe(
                          " " + U(g.$t("darkMode.customSchedule")),
                          1
                          /* TEXT */
                        )
                      ]),
                      v(
                        "span",
                        s_,
                        U(g.$t("darkMode.customScheduleDesc")),
                        1
                        /* TEXT */
                      )
                    ])
                  ])
                ])
              ]),
              Y(" 位置信息（日出日落模式） "),
              p(o).schedule_type === "SunBased" ? (B(), J("div", o_, [
                v("h2", r_, [
                  F(p(ai), {
                    theme: "filled",
                    size: 18
                  }),
                  qe(
                    " " + U(g.$t("darkMode.locationInfo")),
                    1
                    /* TEXT */
                  )
                ]),
                v("div", a_, [
                  p(h) ? (B(), J(
                    "div",
                    i_,
                    U(g.$t("darkMode.gettingLocation")),
                    1
                    /* TEXT */
                  )) : p(i) ? (B(), J("div", l_, [
                    v("div", c_, [
                      v(
                        "span",
                        u_,
                        U(g.$t("darkMode.location")),
                        1
                        /* TEXT */
                      ),
                      v(
                        "span",
                        d_,
                        U(p(i).city) + ", " + U(p(i).region) + ", " + U(p(i).country),
                        1
                        /* TEXT */
                      )
                    ]),
                    v("div", f_, [
                      v(
                        "span",
                        __,
                        U(g.$t("darkMode.timezone")),
                        1
                        /* TEXT */
                      ),
                      v(
                        "span",
                        m_,
                        U(p(i).timezone),
                        1
                        /* TEXT */
                      )
                    ]),
                    v("div", h_, [
                      v(
                        "span",
                        p_,
                        U(g.$t("darkMode.coordinates")),
                        1
                        /* TEXT */
                      ),
                      v(
                        "span",
                        g_,
                        U(p(i).latitude.toFixed(4)) + ", " + U(p(i).longitude.toFixed(4)),
                        1
                        /* TEXT */
                      )
                    ])
                  ])) : Y("v-if", !0),
                  v("button", {
                    type: "button",
                    onClick: f,
                    class: "btn-secondary btn-with-icon mt-3",
                    disabled: p(h)
                  }, [
                    p(h) ? (B(), Ne(p(zs), {
                      key: 1,
                      class: "animate-spin",
                      size: 16
                    })) : (B(), Ne(p(zs), {
                      key: 0,
                      size: 16
                    })),
                    qe(
                      " " + U(p(h) ? g.$t("darkMode.refreshing") : g.$t("darkMode.refreshLocation")),
                      1
                      /* TEXT */
                    )
                  ], 8, y_)
                ])
              ])) : Y("v-if", !0),
              Y(" 日出日落时间 "),
              p(o).schedule_type === "SunBased" && p(c) ? (B(), J("div", v_, [
                v(
                  "h2",
                  E_,
                  U(g.$t("darkMode.sunTimes")),
                  1
                  /* TEXT */
                ),
                v("div", b_, [
                  v("div", N_, [
                    F(p(Ks), {
                      class: "sun-icon",
                      theme: "filled",
                      size: 20
                    }),
                    v("div", k_, [
                      v(
                        "span",
                        w_,
                        U(g.$t("darkMode.sunrise")),
                        1
                        /* TEXT */
                      ),
                      v(
                        "span",
                        C_,
                        U(p(c).sunrise),
                        1
                        /* TEXT */
                      )
                    ])
                  ]),
                  v("div", O_, [
                    F(p(ii), {
                      class: "sun-icon",
                      theme: "filled",
                      size: 20
                    }),
                    v("div", L_, [
                      v(
                        "span",
                        T_,
                        U(g.$t("darkMode.sunset")),
                        1
                        /* TEXT */
                      ),
                      v(
                        "span",
                        S_,
                        U(p(c).sunset),
                        1
                        /* TEXT */
                      )
                    ])
                  ]),
                  C[8] || (C[8] = v(
                    "div",
                    { class: "sun-divider" },
                    null,
                    -1
                    /* HOISTED */
                  )),
                  v("div", I_, [
                    v(
                      "span",
                      D_,
                      U(g.$t("darkMode.currentPeriod")),
                      1
                      /* TEXT */
                    ),
                    v(
                      "span",
                      {
                        class: ae(["sun-value", p(c).is_day ? "period-day" : "period-night"])
                      },
                      U(p(c).is_day ? g.$t("darkMode.daytime") : g.$t("darkMode.nighttime")),
                      3
                      /* TEXT, CLASS */
                    )
                  ])
                ])
              ])) : Y("v-if", !0),
              Y(" 计算调试信息 "),
              p(o).schedule_type === "SunBased" ? (B(), J("div", P_, [
                C[14] || (C[14] = v(
                  "h2",
                  { class: "section-title" },
                  "计算依据",
                  -1
                  /* HOISTED */
                )),
                v("div", A_, [
                  v("div", M_, [
                    C[9] || (C[9] = v(
                      "span",
                      { class: "info-label" },
                      "来源",
                      -1
                      /* HOISTED */
                    )),
                    v(
                      "span",
                      R_,
                      U(p(M)),
                      1
                      /* TEXT */
                    )
                  ]),
                  p(_)?.latitude !== void 0 && p(_)?.longitude !== void 0 ? (B(), J("div", F_, [
                    C[10] || (C[10] = v(
                      "span",
                      { class: "info-label" },
                      "计算坐标",
                      -1
                      /* HOISTED */
                    )),
                    v(
                      "span",
                      $_,
                      U(Number(p(_)?.latitude).toFixed(4)) + ", " + U(Number(p(_)?.longitude).toFixed(4)),
                      1
                      /* TEXT */
                    )
                  ])) : Y("v-if", !0),
                  p(_)?.timezoneOffset !== void 0 ? (B(), J("div", U_, [
                    C[11] || (C[11] = v(
                      "span",
                      { class: "info-label" },
                      "时区偏移(分钟)",
                      -1
                      /* HOISTED */
                    )),
                    v(
                      "span",
                      V_,
                      U(p(_)?.timezoneOffset),
                      1
                      /* TEXT */
                    )
                  ])) : Y("v-if", !0),
                  p(_)?.sunset ? (B(), J("div", x_, [
                    C[12] || (C[12] = v(
                      "span",
                      { class: "info-label" },
                      "用于切换的日落时间",
                      -1
                      /* HOISTED */
                    )),
                    v(
                      "span",
                      W_,
                      U(p(_)?.sunset),
                      1
                      /* TEXT */
                    )
                  ])) : Y("v-if", !0),
                  p(_)?.error ? (B(), J("div", j_, [
                    C[13] || (C[13] = v(
                      "span",
                      { class: "info-label" },
                      "错误",
                      -1
                      /* HOISTED */
                    )),
                    v(
                      "span",
                      B_,
                      U(p(_)?.error),
                      1
                      /* TEXT */
                    )
                  ])) : Y("v-if", !0)
                ])
              ])) : Y("v-if", !0),
              Y(" 自定义时间 "),
              p(o).schedule_type === "Custom" ? (B(), J("div", z_, [
                v(
                  "h2",
                  H_,
                  U(g.$t("darkMode.customTime")),
                  1
                  /* TEXT */
                ),
                v("div", K_, [
                  v("label", G_, [
                    v("span", Y_, [
                      F(p(Hs), {
                        theme: "filled",
                        size: 18
                      }),
                      qe(
                        " " + U(g.$t("darkMode.lightModeStart")),
                        1
                        /* TEXT */
                      )
                    ]),
                    ve(v(
                      "input",
                      {
                        type: "time",
                        "onUpdate:modelValue": C[6] || (C[6] = (I) => p(o).custom_light_time = I),
                        onChange: P,
                        class: "time-input"
                      },
                      null,
                      544
                      /* NEED_HYDRATION, NEED_PATCH */
                    ), [
                      [Us, p(o).custom_light_time]
                    ])
                  ]),
                  v("label", X_, [
                    v("span", J_, [
                      F(p(Bn), {
                        theme: "filled",
                        size: 18
                      }),
                      qe(
                        " " + U(g.$t("darkMode.darkModeStart")),
                        1
                        /* TEXT */
                      )
                    ]),
                    ve(v(
                      "input",
                      {
                        type: "time",
                        "onUpdate:modelValue": C[7] || (C[7] = (I) => p(o).custom_dark_time = I),
                        onChange: P,
                        class: "time-input"
                      },
                      null,
                      544
                      /* NEED_HYDRATION, NEED_PATCH */
                    ), [
                      [Us, p(o).custom_dark_time]
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
}), q_ = (e, t) => {
  const n = e.__vccOpts || e;
  for (const [s, o] of t)
    n[s] = o;
  return n;
}, Q_ = /* @__PURE__ */ q_(Z_, [["__scopeId", "data-v-f88d67ce"]]), um = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Q_
}, Symbol.toStringTag, { value: "Module" }));
export {
  od as A,
  Ds as B,
  Qr as C,
  Po as D,
  ln as E,
  nm as F,
  ta as G,
  cm as H,
  Ve as I,
  aa as J,
  om as K,
  En as L,
  im as M,
  lm as N,
  cd as O,
  S as P,
  ps as Q,
  _e as R,
  yt as S,
  q_ as T,
  um as U,
  In as _,
  Ts as a,
  Wr as b,
  Du as c,
  Br as d,
  Xc as e,
  Au as f,
  zr as g,
  Xt as h,
  Tc as i,
  lt as j,
  Yt as k,
  tm as l,
  rm as m,
  Cs as n,
  sm as o,
  $t as p,
  at as q,
  $e as r,
  fs as s,
  Pu as t,
  gc as u,
  qu as v,
  sa as w,
  ht as x,
  ds as y,
  Ru as z
};
