import { b as bt, d as Ne, _ as Pt, u as wt, n as kt, o as St, q as Et, r as $t, s as Nt, v as Ct, w as It, k as rt, l as m, x as Rt, y as xt, f as D, h as lt, z as Dt, A as ct, B as Ot, C as Mt, D as zt, F as At, G as Lt, H as Ft, e as Vt, I as ue, J as fe, K as Tt, E as Ut, m as M, j as jt, L as Bt, M as Wt, N as Kt, O as We, P as Ht, Q as Gt, R as Zt, S as Ke } from "./_plugin-vue_export-helper-Dr9QzqbK.js";
import { I as dt, c as H, d as ce, k as C, z as Jt, A as He, a as $, o as _, e as I, n as A, u as g, q as l, B as Q, g as Me, s as v, b as U, v as Y, y as Qt, C as Xt, D as Yt, E as qt, r as L, G as es, H as K, J as ts, x as le, K as je, t as Ce, L as ss, l as Ge, M as ns, N as as, w as is, O as Ze, P as ut, Q as os, f as rs, F as Je, h as Qe, R as pe } from "./runtime-entry-BlsNyzIU.js";
const ls = dt("folder-open", !0, function(e) {
  return H("svg", {
    width: e.size,
    height: e.size,
    viewBox: "0 0 48 48",
    fill: "none"
  }, [H("path", {
    d: "M4 9V41L9 21H39.5V15C39.5 13.8954 38.6046 13 37.5 13H24L19 7H6C4.89543 7 4 7.89543 4 9Z",
    stroke: e.colors[0],
    "stroke-width": e.strokeWidth,
    "stroke-linecap": e.strokeLinecap,
    "stroke-linejoin": e.strokeLinejoin
  }, null), H("path", {
    d: "M40 41L44 21H8.8125L4 41H40Z",
    fill: e.colors[1],
    stroke: e.colors[0],
    "stroke-width": e.strokeWidth,
    "stroke-linecap": e.strokeLinecap,
    "stroke-linejoin": e.strokeLinejoin
  }, null)]);
}), cs = dt("setting-two", !1, function(e) {
  return H("svg", {
    width: e.size,
    height: e.size,
    viewBox: "0 0 48 48",
    fill: "none"
  }, [H("path", {
    d: "M18.2838 43.1713C14.9327 42.1736 11.9498 40.3213 9.58787 37.867C10.469 36.8227 11 35.4734 11 34.0001C11 30.6864 8.31371 28.0001 5 28.0001C4.79955 28.0001 4.60139 28.01 4.40599 28.0292C4.13979 26.7277 4 25.3803 4 24.0001C4 21.9095 4.32077 19.8938 4.91579 17.9995C4.94381 17.9999 4.97188 18.0001 5 18.0001C8.31371 18.0001 11 15.3138 11 12.0001C11 11.0488 10.7786 10.1493 10.3846 9.35011C12.6975 7.1995 15.5205 5.59002 18.6521 4.72314C19.6444 6.66819 21.6667 8.00013 24 8.00013C26.3333 8.00013 28.3556 6.66819 29.3479 4.72314C32.4795 5.59002 35.3025 7.1995 37.6154 9.35011C37.2214 10.1493 37 11.0488 37 12.0001C37 15.3138 39.6863 18.0001 43 18.0001C43.0281 18.0001 43.0562 17.9999 43.0842 17.9995C43.6792 19.8938 44 21.9095 44 24.0001C44 25.3803 43.8602 26.7277 43.594 28.0292C43.3986 28.01 43.2005 28.0001 43 28.0001C39.6863 28.0001 37 30.6864 37 34.0001C37 35.4734 37.531 36.8227 38.4121 37.867C36.0502 40.3213 33.0673 42.1736 29.7162 43.1713C28.9428 40.752 26.676 39.0001 24 39.0001C21.324 39.0001 19.0572 40.752 18.2838 43.1713Z",
    fill: e.colors[1],
    stroke: e.colors[0],
    "stroke-width": e.strokeWidth,
    "stroke-linejoin": e.strokeLinejoin
  }, null), H("path", {
    d: "M24 31C27.866 31 31 27.866 31 24C31 20.134 27.866 17 24 17C20.134 17 17 20.134 17 24C17 27.866 20.134 31 24 31Z",
    fill: e.colors[3],
    stroke: e.colors[2],
    "stroke-width": e.strokeWidth,
    "stroke-linejoin": e.strokeLinejoin
  }, null)]);
});
function me(e, t, s) {
  return Array.isArray(e) ? (e.length = Math.max(e.length, t), e.splice(t, 1, s), s) : (e[t] = s, s);
}
function Ie(e, t) {
  if (Array.isArray(e)) {
    e.splice(t, 1);
    return;
  }
  delete e[t];
}
const ds = bt({
  type: {
    type: String,
    default: "line",
    values: ["line", "circle", "dashboard"]
  },
  percentage: {
    type: Number,
    default: 0,
    validator: (e) => e >= 0 && e <= 100
  },
  status: {
    type: String,
    default: "",
    values: ["", "success", "exception", "warning"]
  },
  indeterminate: Boolean,
  duration: {
    type: Number,
    default: 3
  },
  strokeWidth: {
    type: Number,
    default: 6
  },
  strokeLinecap: {
    type: Ne(String),
    default: "round"
  },
  textInside: Boolean,
  width: {
    type: Number,
    default: 126
  },
  showText: {
    type: Boolean,
    default: !0
  },
  color: {
    type: Ne([
      String,
      Array,
      Function
    ]),
    default: ""
  },
  striped: Boolean,
  stripedFlow: Boolean,
  format: {
    type: Ne(Function),
    default: (e) => `${e}%`
  }
}), us = ce({
  name: "ElProgress"
}), fs = /* @__PURE__ */ ce({
  ...us,
  props: ds,
  setup(e) {
    const t = e, s = {
      success: "#13ce66",
      exception: "#ff4949",
      warning: "#e6a23c",
      default: "#20a0ff"
    }, n = wt("progress"), i = C(() => {
      const d = {
        width: `${t.percentage}%`,
        animationDuration: `${t.duration}s`
      }, S = J(t.percentage);
      return S.includes("gradient") ? d.background = S : d.backgroundColor = S, d;
    }), r = C(() => (t.strokeWidth / t.width * 100).toFixed(1)), c = C(() => ["circle", "dashboard"].includes(t.type) ? Number.parseInt(`${50 - Number.parseFloat(r.value) / 2}`, 10) : 0), p = C(() => {
      const d = c.value, S = t.type === "dashboard";
      return `
          M 50 50
          m 0 ${S ? "" : "-"}${d}
          a ${d} ${d} 0 1 1 0 ${S ? "-" : ""}${d * 2}
          a ${d} ${d} 0 1 1 0 ${S ? "" : "-"}${d * 2}
          `;
    }), y = C(() => 2 * Math.PI * c.value), E = C(() => t.type === "dashboard" ? 0.75 : 1), u = C(() => `${-1 * y.value * (1 - E.value) / 2}px`), w = C(() => ({
      strokeDasharray: `${y.value * E.value}px, ${y.value}px`,
      strokeDashoffset: u.value
    })), b = C(() => ({
      strokeDasharray: `${y.value * E.value * (t.percentage / 100)}px, ${y.value}px`,
      strokeDashoffset: u.value,
      transition: "stroke-dasharray 0.6s ease 0s, stroke 0.6s ease, opacity ease 0.6s"
    })), k = C(() => {
      let d;
      return t.color ? d = J(t.percentage) : d = s[t.status] || s.default, d;
    }), F = C(() => t.status === "warning" ? kt : t.type === "line" ? t.status === "success" ? St : Et : t.status === "success" ? $t : Nt), B = C(() => t.type === "line" ? 12 + t.strokeWidth * 0.4 : t.width * 0.111111 + 2), W = C(() => t.format(t.percentage));
    function Z(d) {
      const S = 100 / d.length;
      return d.map((R, f) => He(R) ? {
        color: R,
        percentage: (f + 1) * S
      } : R).sort((R, f) => R.percentage - f.percentage);
    }
    const J = (d) => {
      var S;
      const { color: x } = t;
      if (Jt(x))
        return x(d);
      if (He(x))
        return x;
      {
        const R = Z(x);
        for (const f of R)
          if (f.percentage > d)
            return f.color;
        return (S = R[R.length - 1]) == null ? void 0 : S.color;
      }
    };
    return (d, S) => (_(), $("div", {
      class: A([
        g(n).b(),
        g(n).m(d.type),
        g(n).is(d.status),
        {
          [g(n).m("without-text")]: !d.showText,
          [g(n).m("text-inside")]: d.textInside
        }
      ]),
      role: "progressbar",
      "aria-valuenow": d.percentage,
      "aria-valuemin": "0",
      "aria-valuemax": "100"
    }, [
      d.type === "line" ? (_(), $("div", {
        key: 0,
        class: A(g(n).b("bar"))
      }, [
        l("div", {
          class: A(g(n).be("bar", "outer")),
          style: Q({ height: `${d.strokeWidth}px` })
        }, [
          l("div", {
            class: A([
              g(n).be("bar", "inner"),
              { [g(n).bem("bar", "inner", "indeterminate")]: d.indeterminate },
              { [g(n).bem("bar", "inner", "striped")]: d.striped },
              { [g(n).bem("bar", "inner", "striped-flow")]: d.stripedFlow }
            ]),
            style: Q(g(i))
          }, [
            (d.showText || d.$slots.default) && d.textInside ? (_(), $("div", {
              key: 0,
              class: A(g(n).be("bar", "innerText"))
            }, [
              Me(d.$slots, "default", { percentage: d.percentage }, () => [
                l("span", null, v(g(W)), 1)
              ])
            ], 2)) : I("v-if", !0)
          ], 6)
        ], 6)
      ], 2)) : (_(), $("div", {
        key: 1,
        class: A(g(n).b("circle")),
        style: Q({ height: `${d.width}px`, width: `${d.width}px` })
      }, [
        (_(), $("svg", { viewBox: "0 0 100 100" }, [
          l("path", {
            class: A(g(n).be("circle", "track")),
            d: g(p),
            stroke: `var(${g(n).cssVarName("fill-color-light")}, #e5e9f2)`,
            "stroke-linecap": d.strokeLinecap,
            "stroke-width": g(r),
            fill: "none",
            style: Q(g(w))
          }, null, 14, ["d", "stroke", "stroke-linecap", "stroke-width"]),
          l("path", {
            class: A(g(n).be("circle", "path")),
            d: g(p),
            stroke: g(k),
            fill: "none",
            opacity: d.percentage ? 1 : 0,
            "stroke-linecap": d.strokeLinecap,
            "stroke-width": g(r),
            style: Q(g(b))
          }, null, 14, ["d", "stroke", "opacity", "stroke-linecap", "stroke-width"])
        ]))
      ], 6)),
      (d.showText || d.$slots.default) && !d.textInside ? (_(), $("div", {
        key: 2,
        class: A(g(n).e("text")),
        style: Q({ fontSize: `${g(B)}px` })
      }, [
        Me(d.$slots, "default", { percentage: d.percentage }, () => [
          d.status ? (_(), U(g(Ct), { key: 1 }, {
            default: Y(() => [
              (_(), U(Qt(g(F))))
            ]),
            _: 1
          })) : (_(), $("span", { key: 0 }, v(g(W)), 1))
        ])
      ], 6)) : I("v-if", !0)
    ], 10, ["aria-valuenow"]));
  }
});
var ps = /* @__PURE__ */ Pt(fs, [["__file", "progress.vue"]]);
const ms = It(ps), hs = ["disabled"], gs = {
  key: 0,
  class: "custom-button__loading"
}, ys = /* @__PURE__ */ ce({
  name: "CustomButton",
  __name: "CustomButton",
  props: {
    type: {
      type: String,
      default: "default",
      validator: (e) => ["default", "primary", "success", "danger", "warning", "text"].includes(e)
    },
    size: {
      type: String,
      default: "",
      validator: (e) => ["", "small", "large"].includes(e)
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
  setup(e) {
    const t = e;
    return (s, n) => (_(), $("button", {
      class: A([
        "custom-button",
        `custom-button--${t.type || "default"}`,
        t.size ? `custom-button--${t.size}` : "custom-button--medium",
        { "custom-button--loading": t.loading },
        { "custom-button--circle": t.circle },
        { "custom-button--plain": t.plain }
      ]),
      disabled: e.loading || e.disabled,
      onClick: n[0] || (n[0] = (i) => s.$emit("click", i))
    }, [
      e.loading ? (_(), $("div", gs, n[1] || (n[1] = [
        l(
          "svg",
          {
            class: "custom-button__spinner",
            viewBox: "0 0 50 50"
          },
          [
            l("circle", {
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
      ]))) : I("v-if", !0),
      Me(s.$slots, "default", {}, void 0, !0)
    ], 10, hs));
  }
}), he = /* @__PURE__ */ rt(ys, [["__scopeId", "data-v-9497085f"]]);
/*!
 * pinia v2.3.1
 * (c) 2025 Eduardo San Martin Morote
 * @license MIT
 */
let ne;
const _e = (e) => ne = e, vs = process.env.NODE_ENV !== "production" ? Symbol("pinia") : (
  /* istanbul ignore next */
  Symbol()
);
function G(e) {
  return e && typeof e == "object" && Object.prototype.toString.call(e) === "[object Object]" && typeof e.toJSON != "function";
}
var oe;
(function(e) {
  e.direct = "direct", e.patchObject = "patch object", e.patchFunction = "patch function";
})(oe || (oe = {}));
const ae = typeof window < "u";
function ft(e, t) {
  for (const s in t) {
    const n = t[s];
    if (!(s in e))
      continue;
    const i = e[s];
    G(i) && G(n) && !le(n) && !je(n) ? e[s] = ft(i, n) : e[s] = n;
  }
  return e;
}
const pt = () => {
};
function Xe(e, t, s, n = pt) {
  e.push(t);
  const i = () => {
    const r = e.indexOf(t);
    r > -1 && (e.splice(r, 1), n());
  };
  return !s && ns() && as(i), i;
}
function X(e, ...t) {
  e.slice().forEach((s) => {
    s(...t);
  });
}
const _s = (e) => e(), Ye = Symbol(), Re = Symbol();
function ze(e, t) {
  e instanceof Map && t instanceof Map ? t.forEach((s, n) => e.set(n, s)) : e instanceof Set && t instanceof Set && t.forEach(e.add, e);
  for (const s in t) {
    if (!t.hasOwnProperty(s))
      continue;
    const n = t[s], i = e[s];
    G(i) && G(n) && e.hasOwnProperty(s) && !le(n) && !je(n) ? e[s] = ze(i, n) : e[s] = n;
  }
  return e;
}
const bs = process.env.NODE_ENV !== "production" ? Symbol("pinia:skipHydration") : (
  /* istanbul ignore next */
  Symbol()
);
function Ps(e) {
  return !G(e) || !e.hasOwnProperty(bs);
}
const { assign: z } = Object;
function qe(e) {
  return !!(le(e) && e.effect);
}
function et(e, t, s, n) {
  const { state: i, actions: r, getters: c } = t, p = s.state.value[e];
  let y;
  function E() {
    !p && (process.env.NODE_ENV === "production" || !n) && (s.state.value[e] = i ? i() : {});
    const u = process.env.NODE_ENV !== "production" && n ? (
      // use ref() to unwrap refs inside state TODO: check if this is still necessary
      Ze(L(i ? i() : {}).value)
    ) : Ze(s.state.value[e]);
    return z(u, r, Object.keys(c || {}).reduce((w, b) => (process.env.NODE_ENV !== "production" && b in u && console.warn(`[🍍]: A getter cannot have the same name as another state property. Rename one of them. Found with "${b}" in store "${e}".`), w[b] = K(C(() => {
      _e(s);
      const k = s._s.get(e);
      return c[b].call(k, k);
    })), w), {}));
  }
  return y = Ae(e, E, t, s, n, !0), y;
}
function Ae(e, t, s = {}, n, i, r) {
  let c;
  const p = z({ actions: {} }, s);
  if (process.env.NODE_ENV !== "production" && !n._e.active)
    throw new Error("Pinia destroyed");
  const y = { deep: !0 };
  process.env.NODE_ENV !== "production" && (y.onTrigger = (a) => {
    E ? k = a : E == !1 && !f._hotUpdating && (Array.isArray(k) ? k.push(a) : console.error("🍍 debuggerEvents should be an array. This is most likely an internal Pinia bug."));
  });
  let E, u, w = [], b = [], k;
  const F = n.state.value[e];
  !r && !F && (process.env.NODE_ENV === "production" || !i) && (n.state.value[e] = {});
  const B = L({});
  let W;
  function Z(a) {
    let o;
    E = u = !1, process.env.NODE_ENV !== "production" && (k = []), typeof a == "function" ? (a(n.state.value[e]), o = {
      type: oe.patchFunction,
      storeId: e,
      events: k
    }) : (ze(n.state.value[e], a), o = {
      type: oe.patchObject,
      payload: a,
      storeId: e,
      events: k
    });
    const h = W = Symbol();
    Ge().then(() => {
      W === h && (E = !0);
    }), u = !0, X(w, o, n.state.value[e]);
  }
  const J = r ? function() {
    const { state: o } = s, h = o ? o() : {};
    this.$patch((P) => {
      z(P, h);
    });
  } : (
    /* istanbul ignore next */
    process.env.NODE_ENV !== "production" ? () => {
      throw new Error(`🍍: Store "${e}" is built using the setup syntax and does not implement $reset().`);
    } : pt
  );
  function d() {
    c.stop(), w = [], b = [], n._s.delete(e);
  }
  const S = (a, o = "") => {
    if (Ye in a)
      return a[Re] = o, a;
    const h = function() {
      _e(n);
      const P = Array.from(arguments), T = [], N = [];
      function vt(O) {
        T.push(O);
      }
      function _t(O) {
        N.push(O);
      }
      X(b, {
        args: P,
        name: h[Re],
        store: f,
        after: vt,
        onError: _t
      });
      let se;
      try {
        se = a.apply(this && this.$id === e ? this : f, P);
      } catch (O) {
        throw X(N, O), O;
      }
      return se instanceof Promise ? se.then((O) => (X(T, O), O)).catch((O) => (X(N, O), Promise.reject(O))) : (X(T, se), se);
    };
    return h[Ye] = !0, h[Re] = o, h;
  }, x = /* @__PURE__ */ K({
    actions: {},
    getters: {},
    state: [],
    hotState: B
  }), R = {
    _p: n,
    // _s: scope,
    $id: e,
    $onAction: Xe.bind(null, b),
    $patch: Z,
    $reset: J,
    $subscribe(a, o = {}) {
      const h = Xe(w, a, o.detached, () => P()), P = c.run(() => is(() => n.state.value[e], (T) => {
        (o.flush === "sync" ? u : E) && a({
          storeId: e,
          type: oe.direct,
          events: k
        }, T);
      }, z({}, y, o)));
      return h;
    },
    $dispose: d
  }, f = es(process.env.NODE_ENV !== "production" || process.env.NODE_ENV !== "production" && process.env.NODE_ENV !== "test" && ae ? z(
    {
      _hmrPayload: x,
      _customProperties: K(/* @__PURE__ */ new Set())
      // devtools custom properties
    },
    R
    // must be added later
    // setupStore
  ) : R);
  n._s.set(e, f);
  const V = (n._a && n._a.runWithContext || _s)(() => n._e.run(() => (c = ts()).run(() => t({ action: S }))));
  for (const a in V) {
    const o = V[a];
    if (le(o) && !qe(o) || je(o))
      process.env.NODE_ENV !== "production" && i ? me(B.value, a, Ce(V, a)) : r || (F && Ps(o) && (le(o) ? o.value = F[a] : ze(o, F[a])), n.state.value[e][a] = o), process.env.NODE_ENV !== "production" && x.state.push(a);
    else if (typeof o == "function") {
      const h = process.env.NODE_ENV !== "production" && i ? o : S(o, a);
      V[a] = h, process.env.NODE_ENV !== "production" && (x.actions[a] = o), p.actions[a] = o;
    } else process.env.NODE_ENV !== "production" && qe(o) && (x.getters[a] = r ? (
      // @ts-expect-error
      s.getters[a]
    ) : o, ae && (V._getters || // @ts-expect-error: same
    (V._getters = K([]))).push(a));
  }
  if (z(f, V), z(ss(f), V), Object.defineProperty(f, "$state", {
    get: () => process.env.NODE_ENV !== "production" && i ? B.value : n.state.value[e],
    set: (a) => {
      if (process.env.NODE_ENV !== "production" && i)
        throw new Error("cannot set hotState");
      Z((o) => {
        z(o, a);
      });
    }
  }), process.env.NODE_ENV !== "production" && (f._hotUpdate = K((a) => {
    f._hotUpdating = !0, a._hmrPayload.state.forEach((o) => {
      if (o in f.$state) {
        const h = a.$state[o], P = f.$state[o];
        typeof h == "object" && G(h) && G(P) ? ft(h, P) : a.$state[o] = P;
      }
      me(f, o, Ce(a.$state, o));
    }), Object.keys(f.$state).forEach((o) => {
      o in a.$state || Ie(f, o);
    }), E = !1, u = !1, n.state.value[e] = Ce(a._hmrPayload, "hotState"), u = !0, Ge().then(() => {
      E = !0;
    });
    for (const o in a._hmrPayload.actions) {
      const h = a[o];
      me(f, o, S(h, o));
    }
    for (const o in a._hmrPayload.getters) {
      const h = a._hmrPayload.getters[o], P = r ? (
        // special handling of options api
        C(() => (_e(n), h.call(f, f)))
      ) : h;
      me(f, o, P);
    }
    Object.keys(f._hmrPayload.getters).forEach((o) => {
      o in a._hmrPayload.getters || Ie(f, o);
    }), Object.keys(f._hmrPayload.actions).forEach((o) => {
      o in a._hmrPayload.actions || Ie(f, o);
    }), f._hmrPayload = a._hmrPayload, f._getters = a._getters, f._hotUpdating = !1;
  })), process.env.NODE_ENV !== "production" && process.env.NODE_ENV !== "test" && ae) {
    const a = {
      writable: !0,
      configurable: !0,
      // avoid warning on devtools trying to display this property
      enumerable: !1
    };
    ["_p", "_hmrPayload", "_getters", "_customProperties"].forEach((o) => {
      Object.defineProperty(f, o, z({ value: f[o] }, a));
    });
  }
  return n._p.forEach((a) => {
    if (process.env.NODE_ENV !== "production" && process.env.NODE_ENV !== "test" && ae) {
      const o = c.run(() => a({
        store: f,
        app: n._a,
        pinia: n,
        options: p
      }));
      Object.keys(o || {}).forEach((h) => f._customProperties.add(h)), z(f, o);
    } else
      z(f, c.run(() => a({
        store: f,
        app: n._a,
        pinia: n,
        options: p
      })));
  }), process.env.NODE_ENV !== "production" && f.$state && typeof f.$state == "object" && typeof f.$state.constructor == "function" && !f.$state.constructor.toString().includes("[native code]") && console.warn(`[🍍]: The "state" must be a plain object. It cannot be
	state: () => new MyClass()
Found in store "${f.$id}".`), F && r && s.hydrate && s.hydrate(f.$state, F), E = !0, u = !0, f;
}
/*! #__NO_SIDE_EFFECTS__ */
// @__NO_SIDE_EFFECTS__
function ws(e, t, s) {
  let n, i;
  const r = typeof t == "function";
  if (typeof e == "string")
    n = e, i = r ? s : t;
  else if (i = e, n = e.id, process.env.NODE_ENV !== "production" && typeof n != "string")
    throw new Error('[🍍]: "defineStore()" must be passed a store id as its first argument.');
  function c(p, y) {
    const E = qt();
    if (p = // in test mode, ignore the argument provided as we can always retrieve a
    // pinia instance with getActivePinia()
    (process.env.NODE_ENV === "test" && ne && ne._testing ? null : p) || (E ? Xt(vs, null) : null), p && _e(p), process.env.NODE_ENV !== "production" && !ne)
      throw new Error(`[🍍]: "getActivePinia()" was called but there was no active Pinia. Are you trying to use a store before calling "app.use(pinia)"?
See https://pinia.vuejs.org/core-concepts/outside-component-usage.html for help.
This will fail in production.`);
    p = ne, p._s.has(n) || (r ? Ae(n, t, i, p) : et(n, i, p), process.env.NODE_ENV !== "production" && (c._pinia = p));
    const u = p._s.get(n);
    if (process.env.NODE_ENV !== "production" && y) {
      const w = "__hot:" + n, b = r ? Ae(w, t, i, p, !0) : et(w, z({}, i), p, !0);
      y._hotUpdate(b), delete p.state.value[w], p._s.delete(w);
    }
    if (process.env.NODE_ENV !== "production" && ae) {
      const w = Yt();
      if (w && w.proxy && // avoid adding stores that are just built for hot module replacement
      !y) {
        const b = w.proxy, k = "_pStores" in b ? b._pStores : b._pStores = {};
        k[n] = u;
      }
    }
    return u;
  }
  return c.$id = n, c;
}
const ks = (e, t, s, n) => ({
  id: e.id,
  source: t,
  packagePath: s,
  installedAt: n,
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
}), j = (e) => typeof e == "object" && e !== null, Ss = (e) => j(e) && "manifest" in e && j(e.manifest) ? {
  manifest: e.manifest,
  packagePath: typeof e.packagePath == "string" ? e.packagePath : void 0,
  installedAt: typeof e.installedAt == "string" ? e.installedAt : void 0
} : { manifest: e }, Es = (e) => typeof e == "string" && ["capture", "automation", "search", "sync", "editor", "appearance"].includes(e), $s = (e) => {
  if (!j(e) || e.schemaVersion !== 1 || typeof e.id != "string" || !e.id.trim() || typeof e.version != "string" || !e.version.trim() || e.kind !== "builtin" && e.kind !== "local" || !j(e.name) || typeof e.name.i18nKey != "string" || typeof e.name.fallback != "string" || !j(e.description) || typeof e.description.i18nKey != "string" || typeof e.description.fallback != "string" || !Es(e.category) || typeof e.enabledByDefault != "boolean") return null;
  const t = {
    i18nKey: e.name.i18nKey,
    fallback: e.name.fallback
  }, s = {
    i18nKey: e.description.i18nKey,
    fallback: e.description.fallback
  };
  return {
    schemaVersion: 1,
    id: e.id,
    version: e.version,
    kind: e.kind,
    name: t,
    description: s,
    category: e.category,
    enabledByDefault: e.enabledByDefault,
    capabilities: j(e.capabilities) ? e.capabilities : void 0,
    resources: j(e.resources) ? e.resources : void 0,
    entry: j(e.entry) ? e.entry : void 0,
    permissions: Array.isArray(e.permissions) ? e.permissions.filter((n) => typeof n == "string") : void 0,
    dependencies: Array.isArray(e.dependencies) ? e.dependencies.filter((n) => typeof n == "string") : void 0,
    resourceFor: typeof e.resourceFor == "string" ? e.resourceFor : void 0,
    compatibleAppVersion: typeof e.compatibleAppVersion == "string" ? e.compatibleAppVersion : void 0,
    minAppVersion: typeof e.minAppVersion == "string" ? e.minAppVersion : void 0,
    repository: typeof e.repository == "string" ? e.repository : void 0,
    releaseUrl: typeof e.releaseUrl == "string" ? e.releaseUrl : void 0
  };
}, Ns = (e) => e.map((t) => {
  const { manifest: s, packagePath: n, installedAt: i } = Ss(t), r = $s(s);
  if (!r) return null;
  const c = {
    manifest: r,
    packagePath: n ?? ""
  };
  return i && (c.installedAt = i), c;
}).filter((t) => t !== null), mt = (e = []) => {
  const t = [], s = Ns(e).map((r) => ks(
    r.manifest,
    "local",
    r.packagePath || void 0,
    r.installedAt
  )).sort(Cs), n = [
    ...t,
    ...s
  ], i = /* @__PURE__ */ new Map();
  for (const r of n)
    i.has(r.id) || i.set(r.id, r);
  return Array.from(i.values());
}, tt = (e) => {
  const t = e.installedAt ? Date.parse(e.installedAt) : NaN;
  return Number.isFinite(t) ? t : 0;
}, Cs = (e, t) => {
  const s = tt(t) - tt(e);
  return s !== 0 ? s : String(e.id).localeCompare(String(t.id));
}, ht = mt();
ht.filter((e) => e.source === "builtin");
const be = ht, Is = be.map((e) => e.id), gt = be.reduce((e, t) => (e[t.id] = t.enabledByDefault, e), {}), Rs = (e) => Is.includes(e), ge = [], q = [
  { id: "attachment", labelKey: "settings.attachment.menu", icon: ls }
], Le = {
  attachment: ut(() => import("./index-BiBMxi4Q.js"))
}, ee = [], ye = [], Fe = [], Ve = [], Te = [], ie = /* @__PURE__ */ new Set(), Pe = /* @__PURE__ */ new Map(), we = /* @__PURE__ */ new Map(), xs = /* @__PURE__ */ new Set(), st = /* @__PURE__ */ new Map(), te = /* @__PURE__ */ new Map(), ke = /* @__PURE__ */ new Set(), Se = /* @__PURE__ */ new Set(), $e = (e) => e.replace(/^[\\/]+|[\\/]+$/g, ""), Ds = (e) => !!e && !e.includes("://") && !e.startsWith("/") && !/^[a-zA-Z]:[\\/]/.test(e) && !$e(e).split(/[\\/]+/).includes(".."), Os = (e, t) => {
  if (!e.packagePath)
    throw new Error(`插件 ${e.id} 缺少 packagePath`);
  if (!Ds(t))
    throw new Error(
      `插件 ${e.id} 使用了不安全的资源路径: ${t}`
    );
  return `${e.packagePath.replace(/[\\/]+$/g, "")}/${$e(t)}`;
}, de = (e, t) => xt(Os(e, t)), Ms = (e) => {
  const t = $e(e).split(/[\\/]+/);
  return t.pop(), t.join("/");
}, yt = (e) => {
  const t = /^([^?#]*)([?#].*)?$/.exec(e);
  return {
    path: t?.[1] ?? e,
    suffix: t?.[2] ?? ""
  };
}, zs = (e, t) => {
  const { path: s } = yt(t), n = [
    ...$e(e).split(/[\\/]+/),
    ...s.split(/[\\/]+/)
  ], i = [];
  for (const r of n)
    if (!(!r || r === ".")) {
      if (r === "..") {
        if (!i.length)
          throw new Error(`插件资源路径越界: ${t}`);
        i.pop();
        continue;
      }
      i.push(r);
    }
  return i.join("/");
}, As = (e, t, s) => {
  const { suffix: n } = yt(s), i = zs(
    Ms(t),
    s
  );
  return `${de(e, i)}${n}`;
}, Ls = (e, t, s) => {
  const n = (i) => !i.startsWith("./") && !i.startsWith("../") ? i : As(e, t, i);
  return s.replace(
    /((?:import|export)\s+(?:[^'"]*?\s+from\s*)?)(['"])(\.{1,2}\/[^'"]+)\2/g,
    (i, r, c, p) => `${r}${c}${n(p)}${c}`
  ).replace(
    /(import\s*\(\s*)(['"])(\.{1,2}\/[^'"]+)\2(\s*\))/g,
    (i, r, c, p, y) => `${r}${c}${n(p)}${c}${y}`
  );
}, Fs = (e, t) => {
  const s = we.get(e) ?? [];
  s.push(t), we.set(e, s);
}, Vs = (e) => {
  (we.get(e) ?? []).forEach((s) => URL.revokeObjectURL(s)), we.delete(e);
}, Ts = async (e, t) => {
  const s = de(e, t), n = await fetch(s);
  if (!n.ok)
    throw new Error(
      `插件 ${e.id} 前端入口读取失败: ${n.status} ${n.statusText}`
    );
  const i = await n.text(), r = Ls(
    e,
    t,
    i
  ), c = URL.createObjectURL(
    new Blob([r], { type: "text/javascript" })
  );
  return Fs(String(e.id), c), await import(
    /* @vite-ignore */
    c
  );
}, Us = (e, t) => {
  const s = e.manifest.permissions ?? [];
  return s.includes("command:*") || s.includes(`command:${t}`);
}, js = (e, t) => {
  const s = e.manifest.permissions ?? [];
  return s.includes("backend:*") || s.includes(`backend:${t}`);
}, Bs = (e) => async (t, s, n) => {
  if (!Us(e, t))
    throw new Error(`插件 ${e.id} 没有调用命令 ${t} 的权限`);
  return D(t, s, n);
}, Ws = (e) => async (t, s = null) => {
  if (!js(e, t))
    throw new Error(`插件 ${e.id} 没有调用后端命令 ${t} 的权限`);
  return await D("invoke_plugin_backend", {
    pluginId: e.id,
    command: t,
    payload: s
  });
}, ve = (e, t) => {
  const s = te.get(e) ?? /* @__PURE__ */ new Set();
  s.add(t), te.set(e, s);
}, Ks = (e, t) => {
  const s = te.get(e);
  s && (s.delete(t), s.size === 0 && te.delete(e));
}, Hs = (e) => {
  const t = Array.from(te.get(e) ?? []);
  te.delete(e);
  for (const s of t)
    try {
      s();
    } catch (n) {
      m.warn(`[PluginRuntime] 清理插件运行时失败: ${e}`, n);
    }
}, Gs = (e) => async (...t) => {
  const s = String(e.id), n = await lt(...t);
  let i = !0;
  const r = () => {
    i && (i = !1, Ks(s, r), n());
  };
  return ve(s, r), r;
}, xe = (e, t, s) => {
  if (t) return K(t);
  if (!s)
    throw new Error(
      `插件 ${e.id} 注册组件时缺少 component 或 componentUrl`
    );
  return K(
    ut(
      () => import(
        /* @vite-ignore */
        de(e, s)
      )
    )
  );
}, Zs = (e, t) => {
  if (e === "config") {
    Fe.push(t);
    return;
  }
  if (e === "window") {
    Te.push(t);
    return;
  }
  Ve.push(t);
}, De = (e, t) => {
  for (let s = e.length - 1; s >= 0; s -= 1)
    e[s].meta?.pluginId === t && e.splice(s, 1);
}, Oe = (e, t, s) => {
  const n = e[t] ?? [];
  n.includes(s) || (e[t] = [...n, s]), e.manifest.capabilities = {
    ...e.manifest.capabilities,
    [t]: e[t]
  };
}, Ee = (e, t) => `${e}:${t}`, Ue = (e) => ({
  pluginId: String(e.id),
  packagePath: e.packagePath ?? "",
  manifest: e.manifest,
  resolveAssetUrl: (t) => de(e, t),
  api: {
    invoke: Bs(e),
    invokeBackend: Ws(e),
    listen: Gs(e),
    emit: Rt
  },
  ui: {
    h: os,
    defineComponent: ce
  },
  storage: {
    get: async (t) => await D("get_local_plugin_data", {
      pluginId: e.id,
      key: t
    }) ?? null,
    set: async (t, s) => {
      await D("set_local_plugin_data", {
        pluginId: e.id,
        key: t,
        value: s
      });
    },
    delete: async (t) => {
      await D("delete_local_plugin_data", {
        pluginId: e.id,
        key: t
      });
    }
  },
  registerRoute(t) {
    const s = t.target ?? "layout";
    Oe(e, "routeNames", t.name), Zs(s, {
      path: t.path,
      name: t.name,
      component: xe(e, t.component, t.componentUrl),
      meta: {
        ...t.meta,
        pluginId: e.id
      }
    });
  },
  registerSettingsTab(t) {
    const s = t.labelKey ?? `plugins.${e.id}.${t.id}`, n = {
      id: t.id,
      pluginId: String(e.id),
      labelKey: s,
      label: t.label,
      icon: t.icon ?? cs
    }, i = Ee(String(e.id), t.id), r = q.findIndex(
      (p) => p.id === t.id && p.pluginId === String(e.id)
    ), c = xe(e, t.component, t.componentUrl);
    r === -1 ? (q.push(n), Le[t.id] = c, ke.add(i)) : ke.has(i) && (q[r] = n, Le[t.id] = c), Oe(e, "settingsTabs", t.id);
  },
  registerSearchProvider(t) {
    ge.push({
      pluginId: e.id,
      search: t.search
    }), Oe(e, "searchSources", t.source);
  },
  registerTitlebarAction(t) {
    const s = Ee(
      String(e.id),
      t.id
    ), n = ee.findIndex(
      (r) => r.id === t.id && r.pluginId === e.id
    ), i = {
      id: t.id,
      pluginId: e.id,
      component: xe(e, t.component, t.componentUrl)
    };
    n === -1 ? (ee.push(i), Se.add(s)) : Se.has(s) && (ee[n] = i);
  },
  registerWindowShortcut(t) {
    ye.push({
      label: t.label,
      pluginId: e.id,
      closeCommandLabel: t.closeCommandLabel
    });
  }
}), Js = async (e, t) => {
  const s = t.activate ?? (typeof t.default == "function" ? t.default : t.default?.activate);
  if (typeof s != "function")
    throw new Error(`插件 ${e.id} 的前端入口没有导出 activate(context)`);
  const n = await s(Ue(e)), i = String(e.id);
  if (typeof n == "function") {
    ve(i, n);
    return;
  }
  typeof n?.deactivate == "function" && ve(i, n.deactivate), typeof n?.dispose == "function" && ve(i, n.dispose);
}, Qs = async (e) => {
  const { activateOfficialLocalPlugin: t } = await import("./official-runtime-Bgo86mtY.js");
  return t(e);
}, Xs = async (e) => !1, Ys = (e) => {
  if (Pe.has(String(e.id))) return;
  const t = e.manifest.entry?.styles ?? [];
  if (!t.length) return;
  const s = t.map((n) => {
    const i = document.createElement("link");
    return i.rel = "stylesheet", i.href = de(e, n), i.dataset.pluginId = String(e.id), document.head.appendChild(i), i;
  });
  Pe.set(String(e.id), s);
}, qs = (e) => {
  (Pe.get(e) ?? []).forEach((s) => s.remove()), Pe.delete(e);
}, en = async (e, t) => {
  for (const s of e)
    if (s.source === "local" && t(String(s.id)) && !ie.has(String(s.id))) {
      if (s.manifest.entry?.frontend) {
        try {
          Ys(s);
          const n = await Ts(
            s,
            s.manifest.entry.frontend
          );
          await Js(s, n), ie.add(String(s.id));
        } catch (n) {
          re(String(s.id)), m.warn(`[PluginRuntime] 加载本地插件失败: ${s.id}`, n);
          try {
            await Qs(
              Ue(s)
            ) && (ie.add(String(s.id)), m.warn(
              `[PluginRuntime] 已回退到内置官方插件运行时: ${s.id}`
            ));
          } catch (i) {
            re(String(s.id)), m.warn(
              `[PluginRuntime] 回退内置官方插件运行时失败: ${s.id}`,
              i
            );
          }
        }
        continue;
      }
      try {
        await Xs(
          Ue(s)
        ) && ie.add(String(s.id));
      } catch (n) {
        re(String(s.id)), m.warn(
          `[PluginRuntime] 加载官方插件运行时失败: ${s.id}`,
          n
        );
      }
    }
};
function re(e) {
  Hs(e), ie.delete(e), qs(e), Vs(e);
  for (const [
    t,
    s
  ] of st.entries())
    [
      ...Fe,
      ...Ve,
      ...Te
    ].some(
      (i) => i.name === t && i.meta?.pluginId === e
    ) && (s(), xs.delete(t), st.delete(t));
  De(Fe, e), De(Ve, e), De(Te, e);
  for (let t = q.length - 1; t >= 0; t -= 1) {
    const s = q[t], n = Ee(e, s.id);
    s.pluginId === e && ke.has(n) && (delete Le[s.id], q.splice(t, 1), ke.delete(n));
  }
  for (let t = ge.length - 1; t >= 0; t -= 1)
    ge[t].pluginId === e && ge.splice(t, 1);
  for (let t = ee.length - 1; t >= 0; t -= 1) {
    const s = ee[t], n = Ee(e, s.id);
    s.pluginId === e && Se.has(n) && (ee.splice(t, 1), Se.delete(n));
  }
  for (let t = ye.length - 1; t >= 0; t -= 1)
    ye[t].pluginId === e && ye.splice(t, 1);
}
const nt = (e) => e.replace(/^v/i, "").split(".").map((t) => Number.parseInt(t, 10)).map((t) => Number.isFinite(t) ? t : 0), tn = (e, t) => {
  const s = nt(e), n = nt(t), i = Math.max(s.length, n.length);
  for (let r = 0; r < i; r += 1) {
    const c = (s[r] ?? 0) - (n[r] ?? 0);
    if (c !== 0) return c;
  }
  return 0;
}, at = (e) => Array.isArray(e.dependencies) ? e.dependencies.filter(
  (t) => typeof t == "string" && !!t.trim()
) : [], it = (e) => JSON.stringify({
  id: e.id,
  source: e.source,
  packagePath: e.packagePath,
  installedAt: e.installedAt,
  version: e.manifest.version,
  entry: e.manifest.entry,
  capabilities: e.manifest.capabilities,
  dependencies: e.manifest.dependencies,
  resourceFor: e.resourceFor
}), sn = (e, t) => it(e) !== it(t), ot = (e, t) => {
  const s = e.reduce(
    (n, i) => (n[i.id] = i.enabledByDefault, n),
    { ...gt }
  );
  if (!t)
    return s;
  for (const n of e) {
    const i = t[n.id];
    typeof i == "boolean" && (s[n.id] = i);
  }
  return s;
}, nn = /* @__PURE__ */ ws("plugins", {
  state: () => ({
    enabled: { ...gt },
    installedPlugins: be,
    initialized: !1,
    resourceStatusByPluginId: {},
    runtimeRevision: 0,
    stateUnlisten: null
  }),
  getters: {
    plugins: (e) => e.installedPlugins,
    visiblePlugins: (e) => e.installedPlugins.filter((t) => !t.resourceFor),
    resourcesForPlugin: (e) => (t) => e.installedPlugins.filter(
      (s) => s.resourceFor === t
    ),
    isInstalled: (e) => (t) => e.installedPlugins.some((s) => s.id === t),
    isEnabled: (e) => (t) => e.installedPlugins.some((s) => s.id === t) ? e.enabled[t] ?? !0 : !1
  },
  actions: {
    async initialize() {
      if (this.initialized) {
        m.info(
          "[PluginStore] initialize skipped; refreshing installed plugins"
        ), await this.reconcileInstalledPlugins("initialize-refresh"), await this.ensureStateListener();
        return;
      }
      try {
        m.info("[PluginStore] initialize start"), await this.reconcileInstalledPlugins("initialize"), m.info("[PluginStore] initialize complete", {
          plugins: this.installedPlugins.map((e) => ({
            id: e.id,
            source: e.source,
            enabled: this.isEnabled(e.id),
            packagePath: e.packagePath
          }))
        });
      } catch (e) {
        m.warn("[PluginStore] 加载插件状态失败，使用默认状态", e), this.installedPlugins = be, this.enabled = ot(
          this.installedPlugins,
          this.enabled
        );
      } finally {
        this.initialized = !0, await this.ensureStateListener();
      }
    },
    async refreshInstalledPlugins() {
      await this.reconcileInstalledPlugins("manual-refresh");
    },
    async reconcileInstalledPlugins(e, t = []) {
      m.info("[PluginStore] reconcile installed plugins start", {
        reason: e
      });
      const s = this.installedPlugins, n = new Map(
        s.map((u) => [String(u.id), u])
      ), i = await Lt(), r = mt(i), c = new Map(
        r.map((u) => [String(u.id), u])
      ), p = new Set(t);
      for (const u of s) {
        if (u.source !== "local") continue;
        const w = String(u.id), b = c.get(w);
        (!b || sn(u, b)) && p.add(w);
      }
      this.installedPlugins = r;
      const y = await Ft(), E = Object.fromEntries(
        Object.entries(this.enabled).filter(
          ([u]) => n.has(u) && c.has(u)
        )
      );
      this.enabled = ot(this.installedPlugins, {
        ...E,
        ...y
      }), this.installedPlugins.filter(
        (u) => u.source === "local" && !this.isEnabled(u.id)
      ).forEach((u) => p.add(String(u.id))), p.forEach(
        (u) => re(u)
      ), await this.refreshPluginResourceStatus(), await this.loadEnabledPluginEntries(), m.info("[PluginStore] reconcile installed plugins complete", {
        reason: e,
        resetPluginIds: Array.from(p),
        plugins: this.installedPlugins.map((u) => ({
          id: u.id,
          source: u.source,
          enabled: this.isEnabled(u.id),
          hotkeys: u.hotkeys,
          packagePath: u.packagePath
        }))
      });
    },
    async installFromPath(e, t = !1) {
      m.info("[PluginStore] install from path start", {
        sourcePath: e,
        overwrite: t
      });
      const s = await At(
        e,
        t
      );
      m.info("[PluginStore] install from path complete", {
        pluginId: s.manifest.id,
        packagePath: s.packagePath
      }), await this.reconcileInstalledPlugins("install-path", [
        String(s.manifest.id)
      ]);
    },
    async installFromUrl(e, t = !1, s, n) {
      m.info("[PluginStore] install from url start", {
        packageUrl: e,
        overwrite: t,
        packageSubdir: s,
        expectedSizeBytes: n
      });
      const i = await zt(
        e,
        t,
        s,
        n
      );
      m.info("[PluginStore] install from url complete", {
        pluginId: i.manifest.id,
        packagePath: i.packagePath,
        packageUrl: e
      }), await this.reconcileInstalledPlugins("install-url", [
        String(i.manifest.id)
      ]);
    },
    async uninstall(e) {
      m.info("[PluginStore] uninstall start", { pluginId: e }), await Mt(e), await this.reconcileInstalledPlugins("uninstall", [String(e)]), m.info("[PluginStore] uninstall complete", { pluginId: e });
    },
    async ensureStateListener() {
      if (!this.stateUnlisten)
        try {
          this.stateUnlisten = await lt(
            "plugin-state-changed",
            async (e) => {
              const { pluginId: t, enabled: s } = e.payload;
              (this.installedPlugins.some((n) => n.id === t) || Rs(t)) && (this.enabled[t] = s), await this.reconcileInstalledPlugins(
                "backend-state-event",
                s ? [] : [t]
              );
            }
          );
        } catch (e) {
          m.warn("[PluginStore] 监听插件状态变化失败", e);
        }
    },
    async setEnabled(e, t) {
      const s = this.enabled[e];
      this.enabled[e] = t;
      try {
        m.info("[PluginStore] set enabled start", { pluginId: e, enabled: t }), t || (re(String(e)), this.runtimeRevision += 1), await Ot(e, t), await this.reconcileInstalledPlugins(
          "set-enabled",
          t ? [] : [String(e)]
        ), m.info("[PluginStore] set enabled complete", {
          pluginId: e,
          enabled: t
        });
      } catch (n) {
        throw typeof s == "boolean" ? this.enabled[e] = s : delete this.enabled[e], s && await this.loadEnabledPluginEntries(), m.error("[PluginStore] 保存插件状态失败", {
          pluginId: e,
          enabled: t,
          error: n
        }), n;
      }
    },
    async loadEnabledPluginEntries() {
      await en(
        this.installedPlugins,
        (e) => this.isEnabled(e)
      ), this.runtimeRevision += 1;
    },
    shouldInstallMarketplaceItem(e) {
      const t = this.installedPlugins.find(
        (s) => s.id === e.id
      );
      return !t || t.source === "local" && tn(e.version, t.manifest.version) > 0;
    },
    async installMarketplaceItemWithDependencies(e, t, s = {}, n = /* @__PURE__ */ new Set()) {
      if (n.has(e.id))
        throw new Error(
          s.formatCircularDependencyError?.(e) ?? `Circular plugin dependency: ${e.id}`
        );
      n.add(e.id);
      try {
        for (const i of at(e)) {
          const r = t.find(
            (c) => c.id === i
          );
          if (!r)
            throw new Error(
              s.formatMissingDependencyError?.(i) ?? `Missing plugin dependency: ${i}`
            );
          if (s.isCompatible && !s.isCompatible(r)) {
            const c = r.name?.fallback || r.name?.i18nKey || r.id;
            throw new Error(
              s.formatIncompatibleDependencyError?.(r) ?? `Incompatible plugin dependency: ${c}`
            );
          }
          this.shouldInstallMarketplaceItem(r) && await this.installMarketplaceItemWithDependencies(
            r,
            t,
            s,
            n
          );
        }
        e.packageUrl && this.shouldInstallMarketplaceItem(e) && (s.onInstallingPackage?.(e), m.info("[PluginStore] marketplace lifecycle install package", {
          pluginId: e.id,
          packageUrl: e.packageUrl,
          packageSubdir: e.packageSubdir,
          dependencies: at(e)
        }), await this.installFromUrl(
          e.packageUrl,
          !0,
          e.packageSubdir,
          e.sizeBytes
        ));
      } finally {
        n.delete(e.id);
      }
    },
    async refreshPluginResourceStatus() {
      const e = {}, t = (s) => this.installedPlugins.some(
        (n) => n.id === s || n.resourceFor === s
      );
      if (t("screenshot"))
        try {
          const s = await Dt();
          e[s.pluginId] = s;
        } catch (s) {
          m.warn("[PluginStore] 获取截图插件资源状态失败", s);
        }
      if (t("translation")) {
        const s = "resources/transformers/transformers.min.js", n = ["translation-offline-runtime", "translation"];
        let i = null, r;
        for (const c of n)
          if (i = await ct(
            c,
            s
          ), i) {
            r = `plugin:${c}:${s}`;
            break;
          }
        e.translation = {
          pluginId: "translation",
          resourceId: "offline-transformers-runtime",
          available: !!i,
          source: r,
          path: i ?? void 0,
          searchedPaths: n.map(
            (c) => `plugins/${c}/${s}`
          )
        };
      }
      this.resourceStatusByPluginId = e;
    }
  },
  persist: {
    pick: ["enabled"]
  }
}), an = { class: "settings-panel" }, on = { class: "panel-header" }, rn = { class: "panel-title" }, ln = { class: "panel-content" }, cn = { class: "summarize-section" }, dn = { class: "summarize-label" }, un = { class: "summarize-label-title" }, fn = { class: "summarize-label-desc" }, pn = { class: "summarize-input-wrapper" }, mn = { class: "summarize-section" }, hn = { class: "summarize-label" }, gn = { class: "summarize-label-title" }, yn = { class: "summarize-label-desc" }, vn = { class: "summarize-input-wrapper" }, _n = { class: "flex items-center gap-3" }, bn = {
  key: 0,
  class: "summarize-section"
}, Pn = { class: "summarize-label" }, wn = { class: "summarize-label-title" }, kn = { class: "summarize-label-desc" }, Sn = { class: "summarize-input-wrapper flex-col !items-start" }, En = { class: "w-full space-y-2" }, $n = { class: "w-5 text-center" }, Nn = {
  key: 0,
  class: "text-green-500 text-base"
}, Cn = {
  key: 1,
  class: "text-red-500 text-base"
}, In = {
  key: 2,
  class: "text-yellow-500 text-base"
}, Rn = {
  key: 3,
  class: "text-panel-text-secondary text-base"
}, xn = ["title"], Dn = { class: "w-16 text-right text-xs text-panel-text-secondary" }, On = { class: "w-24" }, Mn = {
  key: 1,
  class: "text-green-500 text-xs"
}, zn = {
  key: 2,
  class: "text-red-500 text-xs"
}, An = {
  key: 3,
  class: "text-panel-text-secondary text-xs"
}, Ln = {
  key: 1,
  class: "summarize-section !mt-2"
}, Fn = { class: "summarize-label" }, Vn = { class: "summarize-label-title" }, Tn = { class: "summarize-label-desc" }, Un = { class: "summarize-input-wrapper" }, jn = { class: "model-info-card" }, Bn = { class: "info-row" }, Wn = { class: "info-item" }, Kn = { class: "info-label" }, Hn = { class: "info-item" }, Gn = { class: "info-label" }, Zn = { class: "info-value" }, Jn = { class: "info-item" }, Qn = { class: "info-label" }, Xn = { class: "info-value" }, Yn = { class: "summarize-section !mt-2" }, qn = { class: "summarize-label" }, ea = { class: "summarize-label-title" }, ta = { class: "summarize-label-desc" }, sa = { class: "summarize-input-wrapper" }, na = { class: "usage-tips" }, aa = { class: "tip-item" }, ia = { class: "tip-text" }, oa = { class: "tip-item" }, ra = { class: "tip-text" }, la = { class: "tip-item" }, ca = { class: "tip-text" }, da = { class: "tip-item" }, ua = { class: "tip-text" }, fa = "resources/transformers/transformers.min.js", pa = "translation-offline-runtime", ma = /* @__PURE__ */ ce({
  name: "Translation",
  __name: "index",
  setup(e) {
    const { t } = Vt(), s = nn(), n = ["translation-offline-runtime", "translation"], i = L("bing"), r = L(!1), c = L(!1), p = L({ isCached: !1, cacheType: "none" }), y = L(!1), E = L(!1), u = L(!1), w = L(!1), b = L([]), k = C(() => p.value.isCached), F = C(() => [
      { value: "google", label: t("translation.google") },
      { value: "bing", label: t("translation.bing") },
      { value: "offline", label: t("translation.offline") }
    ]), B = C(() => y.value ? t("translation.modelLoading") : u.value ? r.value ? t("translation.modelReady") : k.value && c.value ? t("translation.modelActivated") : k.value ? t("translation.modelCached") : t("translation.modelNotLoaded") : t("translation.runtimeMissing")), W = C(() => y.value ? "text-yellow-500" : u.value ? r.value || k.value && c.value ? "text-green-500" : k.value ? "text-blue-500" : "text-panel-text-secondary" : "text-red-500"), Z = C(() => r.value || k.value), J = () => {
      const a = Zt();
      b.value = a.map((o) => ({
        file: o.name,
        progress: 0,
        status: "pending",
        size: o.size
      }));
    }, d = (a, o, h) => {
      const P = b.value.find((T) => a.includes(T.file) || T.file.includes(a));
      P && (P.progress = o, P.status = h);
    }, S = async () => {
      for (const a of n)
        if (await ct(a, fa))
          return u.value = !0, !0;
      return u.value = !1, !1;
    }, x = async () => {
      w.value = !0;
      try {
        const a = await Bt(Wt), o = Array.isArray(a.plugins) ? a.plugins : [], h = o.find((P) => P.id === pa);
        if (!h)
          throw new Error(t("translation.runtimeMarketplaceMissing"));
        if (await s.installMarketplaceItemWithDependencies(
          h,
          o,
          {
            formatMissingDependencyError: (P) => t("plugins.dependencyMissing", { id: P }),
            onInstallingPackage: (P) => {
              m.info("[翻译设置] 开始安装离线翻译运行时资源包", {
                pluginId: P.id,
                packageUrl: P.packageUrl
              });
            }
          }
        ), await S() || (m.info("[翻译设置] 运行时资源包缺少 runtime 文件，开始补全资源"), await Kt()), !await S())
          throw new Error(t("translation.runtimeInstallVerifyFailed"));
        M.msg(t("translation.runtimeInstallSuccess"));
      } catch (a) {
        m.error("[翻译设置] 安装离线翻译运行时失败:", a), M.msg(
          a instanceof Error ? a.message : t("translation.runtimeInstallFailed"),
          "error"
        );
      } finally {
        w.value = !1;
      }
    }, R = async (a) => {
      try {
        await D("set_translation_engine", { engine: a }), M.msg(t("translation.engineSaved"));
      } catch (o) {
        m.info("Failed to save translation engine:", o), M.msg(t("translation.engineSaveFailed"), "error");
      }
    }, f = async () => {
      if (m.info("[翻译设置] 开始下载离线模型..."), !await S()) {
        M.msg(t("translation.runtimeMissingInstallFirst"), "error");
        return;
      }
      y.value = !0, J(), Ke((a) => {
        const o = a.file || "";
        a.status === "initiate" ? d(o, 0, "downloading") : a.status === "progress" && a.progress !== void 0 ? d(o, Math.round(a.progress), "downloading") : a.status === "done" && d(o, 100, "done");
      });
      try {
        await We(), b.value.forEach((a) => {
          a.status !== "done" && (a.status = "done"), a.progress = 100;
        }), r.value = !0, c.value = !0, p.value = await ue(), m.info("[翻译设置] 模型下载并加载成功，更新后端激活状态为 true"), await D("set_offline_model_activated", { activated: !0 }), M.msg(t("translation.modelLoadSuccess"));
      } catch (a) {
        m.error("[翻译设置] 模型下载失败:", a), b.value.forEach((o) => {
          (o.status === "downloading" || o.status === "pending") && (o.status = "error");
        }), r.value = !1, M.msg(a instanceof Error ? a.message : t("translation.modelLoadFailed"), "error");
      } finally {
        y.value = !1, Ke(null), r.value = fe(), p.value = await ue(), m.info(`[翻译设置] 最终状态 - 内存加载: ${r.value}, 缓存存在: ${p.value.isCached}`);
      }
    }, Be = async () => {
      if (m.info("[翻译设置] 开始激活离线模型..."), !await S()) {
        M.msg(t("translation.runtimeMissingInstallFirst"), "error");
        return;
      }
      y.value = !0;
      try {
        await We(), r.value = !0, c.value = !0, m.info("[翻译设置] 模型激活成功，更新后端激活状态为 true"), await D("set_offline_model_activated", { activated: !0 }), M.msg(t("translation.modelLoadSuccess"));
      } catch (a) {
        m.error("[翻译设置] 模型激活失败:", a), r.value = !1, M.msg(a instanceof Error ? a.message : t("translation.modelLoadFailed"), "error");
      } finally {
        y.value = !1, r.value = fe(), m.info(`[翻译设置] 激活后状态 - 内存加载: ${r.value}`);
      }
    }, V = async () => {
      m.info("[翻译设置] 开始删除离线模型..."), E.value = !0;
      try {
        await Ht(), await Gt(), r.value = !1, c.value = !1, p.value = { isCached: !1, cacheType: "none" }, m.info("[翻译设置] 模型删除成功，更新后端激活状态为 false"), await D("set_offline_model_activated", { activated: !1 }), M.msg(t("translation.modelDeleted"));
      } catch (a) {
        m.error("[翻译设置] 模型删除失败:", a), M.msg(t("translation.modelDeleteFailed"), "error");
      } finally {
        E.value = !1, r.value = fe(), p.value = await ue(), m.info(`[翻译设置] 删除后状态 - 内存加载: ${r.value}, 缓存存在: ${p.value.isCached}`);
      }
    };
    return rs(async () => {
      m.info("[翻译设置] 页面初始化..."), await S();
      try {
        const h = await D("get_translation_engine");
        m.info(`[翻译设置] 从后端获取翻译引擎: ${h}`), h && ["google", "bing", "offline"].includes(h) && (i.value = h);
      } catch (h) {
        m.error("[翻译设置] 获取翻译引擎失败:", h);
      }
      const a = fe(), o = Tt();
      p.value = await ue(), m.info(`[翻译设置] 前端状态 - 内存加载: ${a}, 正在初始化: ${o}, 缓存存在: ${p.value.isCached}`), r.value = a, y.value = o;
      try {
        const h = await D("get_offline_model_activated");
        m.info(`[翻译设置] 后端激活状态: ${h}`), c.value = h, h && !p.value.isCached && (m.info("[翻译设置] 后端已激活但缓存不存在，重置后端状态"), await D("set_offline_model_activated", { activated: !1 }), c.value = !1), !h && a && (m.info("[翻译设置] 内存已加载但后端未标记，同步后端状态为 true"), await D("set_offline_model_activated", { activated: !0 }), c.value = !0);
      } catch (h) {
        m.error("[翻译设置] 处理激活状态失败:", h);
      }
    }), (a, o) => {
      const h = jt, P = Ut, T = ms;
      return _(), $("div", an, [
        I(" 固定标题 "),
        l("div", on, [
          l(
            "h3",
            rn,
            v(a.$t("translation.title")),
            1
            /* TEXT */
          )
        ]),
        I(" 可滚动内容 "),
        l("main", ln, [
          I(" 默认翻译引擎 "),
          l("section", cn, [
            l("div", dn, [
              l(
                "div",
                un,
                v(a.$t("translation.defaultEngine")),
                1
                /* TEXT */
              ),
              l(
                "div",
                fn,
                v(a.$t("translation.defaultEngineDesc")),
                1
                /* TEXT */
              )
            ]),
            l("div", pn, [
              H(P, {
                class: "summarize-input !w-36",
                modelValue: i.value,
                "onUpdate:modelValue": o[0] || (o[0] = (N) => i.value = N),
                onChange: R
              }, {
                default: Y(() => [
                  (_(!0), $(
                    Je,
                    null,
                    Qe(F.value, (N) => (_(), U(h, {
                      key: N.value,
                      label: N.label,
                      value: N.value
                    }, null, 8, ["label", "value"]))),
                    128
                    /* KEYED_FRAGMENT */
                  ))
                ]),
                _: 1
                /* STABLE */
              }, 8, ["modelValue"])
            ])
          ]),
          I(" 离线翻译模型 "),
          l("section", mn, [
            l("div", hn, [
              l(
                "div",
                gn,
                v(a.$t("translation.offlineModel")),
                1
                /* TEXT */
              ),
              l(
                "div",
                yn,
                v(a.$t("translation.offlineModelDesc")),
                1
                /* TEXT */
              )
            ]),
            l("div", vn, [
              l("div", _n, [
                l(
                  "span",
                  {
                    class: A(["text-sm font-medium", W.value])
                  },
                  v(B.value),
                  3
                  /* TEXT, CLASS */
                ),
                !u.value && !y.value ? (_(), U(g(he), {
                  key: 0,
                  type: "primary",
                  size: "small",
                  loading: w.value,
                  onClick: x
                }, {
                  default: Y(() => [
                    pe(
                      v(a.$t("translation.installRuntime")),
                      1
                      /* TEXT */
                    )
                  ]),
                  _: 1
                  /* STABLE */
                }, 8, ["loading"])) : I("v-if", !0),
                u.value && !k.value && !y.value ? (_(), U(g(he), {
                  key: 1,
                  type: "primary",
                  size: "small",
                  onClick: f
                }, {
                  default: Y(() => [
                    pe(
                      v(a.$t("translation.loadModel")),
                      1
                      /* TEXT */
                    )
                  ]),
                  _: 1
                  /* STABLE */
                })) : I("v-if", !0),
                u.value && k.value && !r.value && !c.value && !y.value ? (_(), U(g(he), {
                  key: 2,
                  type: "primary",
                  size: "small",
                  onClick: Be
                }, {
                  default: Y(() => [
                    pe(
                      v(a.$t("translation.activateModel")),
                      1
                      /* TEXT */
                    )
                  ]),
                  _: 1
                  /* STABLE */
                })) : I("v-if", !0),
                k.value && !y.value ? (_(), U(g(he), {
                  key: 3,
                  type: "default",
                  size: "small",
                  onClick: V,
                  loading: E.value
                }, {
                  default: Y(() => [
                    pe(
                      v(a.$t("translation.deleteModel")),
                      1
                      /* TEXT */
                    )
                  ]),
                  _: 1
                  /* STABLE */
                }, 8, ["loading"])) : I("v-if", !0)
              ])
            ])
          ]),
          I(" 多文件下载进度（独立区块） "),
          y.value ? (_(), $("section", bn, [
            l("div", Pn, [
              l(
                "div",
                wn,
                v(a.$t("translation.downloadProgress")),
                1
                /* TEXT */
              ),
              l(
                "div",
                kn,
                v(a.$t("translation.downloadProgressDesc")),
                1
                /* TEXT */
              )
            ]),
            l("div", Sn, [
              l("div", En, [
                (_(!0), $(
                  Je,
                  null,
                  Qe(b.value, (N) => (_(), $("div", {
                    key: N.file,
                    class: "flex items-center gap-3 py-1"
                  }, [
                    l("span", $n, [
                      N.status === "done" ? (_(), $("span", Nn, "✓")) : N.status === "error" ? (_(), $("span", Cn, "✗")) : N.status === "downloading" ? (_(), $("span", In, "↓")) : (_(), $("span", Rn, "○"))
                    ]),
                    l("span", {
                      class: "w-64 truncate text-sm text-panel-text-secondary",
                      title: N.file
                    }, v(N.file), 9, xn),
                    l(
                      "span",
                      Dn,
                      v(N.size),
                      1
                      /* TEXT */
                    ),
                    l("div", On, [
                      N.status === "downloading" ? (_(), U(T, {
                        key: 0,
                        percentage: N.progress,
                        "stroke-width": 6,
                        "show-text": !0,
                        "text-inside": !1
                      }, null, 8, ["percentage"])) : N.status === "done" ? (_(), $(
                        "span",
                        Mn,
                        v(a.$t("translation.completed")),
                        1
                        /* TEXT */
                      )) : N.status === "error" ? (_(), $(
                        "span",
                        zn,
                        v(a.$t("translation.failed")),
                        1
                        /* TEXT */
                      )) : (_(), $(
                        "span",
                        An,
                        v(a.$t("translation.waiting")),
                        1
                        /* TEXT */
                      ))
                    ])
                  ]))),
                  128
                  /* KEYED_FRAGMENT */
                ))
              ])
            ])
          ])) : I("v-if", !0),
          I(" 模型信息（仅在已缓存或已加载时显示） "),
          Z.value && !y.value ? (_(), $("section", Ln, [
            l("div", Fn, [
              l(
                "div",
                Vn,
                v(a.$t("translation.modelInfo")),
                1
                /* TEXT */
              ),
              l(
                "div",
                Tn,
                v(a.$t("translation.modelInfoDesc")),
                1
                /* TEXT */
              )
            ]),
            l("div", Un, [
              l("div", jn, [
                l("div", Bn, [
                  l("div", Wn, [
                    l(
                      "span",
                      Kn,
                      v(a.$t("translation.modelName")),
                      1
                      /* TEXT */
                    ),
                    o[1] || (o[1] = l(
                      "span",
                      { class: "info-value" },
                      "Xenova/opus-mt-en-zh",
                      -1
                      /* HOISTED */
                    ))
                  ]),
                  l("div", Hn, [
                    l(
                      "span",
                      Gn,
                      v(a.$t("translation.modelSize")),
                      1
                      /* TEXT */
                    ),
                    l(
                      "span",
                      Zn,
                      v(p.value.estimatedSize || "~300MB"),
                      1
                      /* TEXT */
                    )
                  ]),
                  l("div", Jn, [
                    l(
                      "span",
                      Qn,
                      v(a.$t("translation.supportLang")),
                      1
                      /* TEXT */
                    ),
                    l(
                      "span",
                      Xn,
                      v(a.$t("translation.enToZh")),
                      1
                      /* TEXT */
                    )
                  ])
                ])
              ])
            ])
          ])) : I("v-if", !0),
          I(" 使用说明 "),
          l("section", Yn, [
            l("div", qn, [
              l(
                "div",
                ea,
                v(a.$t("translation.usage")),
                1
                /* TEXT */
              ),
              l(
                "div",
                ta,
                v(a.$t("translation.usageDesc")),
                1
                /* TEXT */
              )
            ]),
            l("div", sa, [
              l("div", na, [
                l("div", aa, [
                  o[2] || (o[2] = l(
                    "span",
                    { class: "tip-icon" },
                    "•",
                    -1
                    /* HOISTED */
                  )),
                  l(
                    "span",
                    ia,
                    v(a.$t("translation.usageTip1")),
                    1
                    /* TEXT */
                  )
                ]),
                l("div", oa, [
                  o[3] || (o[3] = l(
                    "span",
                    { class: "tip-icon" },
                    "•",
                    -1
                    /* HOISTED */
                  )),
                  l(
                    "span",
                    ra,
                    v(a.$t("translation.usageTip2")),
                    1
                    /* TEXT */
                  )
                ]),
                l("div", la, [
                  o[4] || (o[4] = l(
                    "span",
                    { class: "tip-icon" },
                    "•",
                    -1
                    /* HOISTED */
                  )),
                  l(
                    "span",
                    ca,
                    v(a.$t("translation.usageTip3")),
                    1
                    /* TEXT */
                  )
                ]),
                l("div", da, [
                  o[5] || (o[5] = l(
                    "span",
                    { class: "tip-icon" },
                    "•",
                    -1
                    /* HOISTED */
                  )),
                  l(
                    "span",
                    ua,
                    v(a.$t("translation.usageTip4")),
                    1
                    /* TEXT */
                  )
                ])
              ])
            ])
          ])
        ])
      ]);
    };
  }
}), ha = /* @__PURE__ */ rt(ma, [["__scopeId", "data-v-4f420b66"]]), va = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: ha
}, Symbol.toStringTag, { value: "Module" }));
export {
  he as C,
  ls as F,
  ws as d,
  va as i
};
