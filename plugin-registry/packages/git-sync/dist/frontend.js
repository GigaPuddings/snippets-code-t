import { inject as de, createVNode as U, defineAsyncComponent as oo, getCurrentInstance as pt, ref as M, computed as C, unref as p, shallowRef as es, watchEffect as Pc, readonly as gl, getCurrentScope as n0, onScopeDispose as Ih, onMounted as qe, nextTick as Ze, watch as ae, isRef as It, warn as i0, provide as gt, defineComponent as J, createElementBlock as D, openBlock as S, mergeProps as hn, renderSlot as ne, createElementVNode as b, toRef as Mt, onUnmounted as wo, useAttrs as s0, useSlots as Ic, normalizeStyle as je, normalizeClass as F, createCommentVNode as N, Fragment as ye, createBlock as te, withCtx as j, resolveDynamicComponent as Rt, withModifiers as Xe, toDisplayString as R, onBeforeUnmount as tn, Transition as pi, withDirectives as Bt, vShow as Kn, reactive as Ii, onActivated as o0, onUpdated as Rh, cloneVNode as r0, Text as Lh, Comment as l0, Teleport as Bh, onBeforeMount as a0, onDeactivated as c0, createTextVNode as De, h as u0, createSlots as ml, resolveComponent as Ue, normalizeProps as f0, guardReactiveProps as d0, withKeys as ii, toRaw as h0, toRefs as Rc, resolveDirective as p0, toHandlerKey as g0, renderList as ct, vModelText as m0, shallowReactive as v0, isVNode as So, render as Hr } from "vue";
import { useI18n as vl } from "vue-i18n";
var y0 = {
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
function b0() {
  return "icon-" + ((1 + Math.random()) * 4294967296 | 0).toString(16).substring(1);
}
function w0(t, e, n) {
  var i = typeof e.fill == "string" ? [e.fill] : e.fill || [], s = [], o = e.theme || n.theme;
  switch (o) {
    case "outline":
      s.push(typeof i[0] == "string" ? i[0] : "currentColor"), s.push("none"), s.push(typeof i[0] == "string" ? i[0] : "currentColor"), s.push("none");
      break;
    case "filled":
      s.push(typeof i[0] == "string" ? i[0] : "currentColor"), s.push(typeof i[0] == "string" ? i[0] : "currentColor"), s.push("#FFF"), s.push("#FFF");
      break;
    case "two-tone":
      s.push(typeof i[0] == "string" ? i[0] : "currentColor"), s.push(typeof i[1] == "string" ? i[1] : n.colors.twoTone.twoTone), s.push(typeof i[0] == "string" ? i[0] : "currentColor"), s.push(typeof i[1] == "string" ? i[1] : n.colors.twoTone.twoTone);
      break;
    case "multi-color":
      s.push(typeof i[0] == "string" ? i[0] : "currentColor"), s.push(typeof i[1] == "string" ? i[1] : n.colors.multiColor.outFillColor), s.push(typeof i[2] == "string" ? i[2] : n.colors.multiColor.innerStrokeColor), s.push(typeof i[3] == "string" ? i[3] : n.colors.multiColor.innerFillColor);
      break;
  }
  return {
    size: e.size || n.size,
    strokeWidth: e.strokeWidth || n.strokeWidth,
    strokeLinecap: e.strokeLinecap || n.strokeLinecap,
    strokeLinejoin: e.strokeLinejoin || n.strokeLinejoin,
    colors: s,
    id: t
  };
}
var S0 = Symbol("icon-context");
function Vs(t, e, n) {
  var i = {
    name: "icon-" + t,
    props: ["size", "strokeWidth", "strokeLinecap", "strokeLinejoin", "theme", "fill", "spin"],
    setup: function(o) {
      var r = b0(), l = de(S0, y0);
      return function() {
        var a = o.size, c = o.strokeWidth, u = o.strokeLinecap, f = o.strokeLinejoin, d = o.theme, h = o.fill, g = o.spin, m = w0(r, {
          size: a,
          strokeWidth: c,
          strokeLinecap: u,
          strokeLinejoin: f,
          theme: d,
          fill: h
        }, l), y = [l.prefix + "-icon"];
        return y.push(l.prefix + "-icon-" + t), e && l.rtl && y.push(l.prefix + "-icon-rtl"), g && y.push(l.prefix + "-icon-spin"), U("span", {
          class: y.join(" ")
        }, [n(m)]);
      };
    }
  };
  return i;
}
const C0 = Vs("attention", !0, function(t) {
  return U("svg", {
    width: t.size,
    height: t.size,
    viewBox: "0 0 48 48",
    fill: "none"
  }, [U("path", {
    d: "M24 44C29.5228 44 34.5228 41.7614 38.1421 38.1421C41.7614 34.5228 44 29.5228 44 24C44 18.4772 41.7614 13.4772 38.1421 9.85786C34.5228 6.23858 29.5228 4 24 4C18.4772 4 13.4772 6.23858 9.85786 9.85786C6.23858 13.4772 4 18.4772 4 24C4 29.5228 6.23858 34.5228 9.85786 38.1421C13.4772 41.7614 18.4772 44 24 44Z",
    fill: t.colors[1],
    stroke: t.colors[0],
    "stroke-width": t.strokeWidth,
    "stroke-linejoin": t.strokeLinejoin
  }, null), U("path", {
    "fill-rule": "evenodd",
    "clip-rule": "evenodd",
    d: "M24 37C25.3807 37 26.5 35.8807 26.5 34.5C26.5 33.1193 25.3807 32 24 32C22.6193 32 21.5 33.1193 21.5 34.5C21.5 35.8807 22.6193 37 24 37Z",
    fill: t.colors[2]
  }, null), U("path", {
    d: "M24 12V28",
    stroke: t.colors[2],
    "stroke-width": t.strokeWidth,
    "stroke-linecap": t.strokeLinecap,
    "stroke-linejoin": t.strokeLinejoin
  }, null)]);
}), ju = Vs("branch", !0, function(t) {
  return U("svg", {
    width: t.size,
    height: t.size,
    viewBox: "0 0 48 48",
    fill: "none"
  }, [U("path", {
    d: "M40 28C42.2091 28 44 26.2091 44 24C44 21.7909 42.2091 20 40 20C37.7909 20 36 21.7909 36 24C36 26.2091 37.7909 28 40 28Z",
    fill: t.colors[1],
    stroke: t.colors[0],
    "stroke-width": t.strokeWidth,
    "stroke-linejoin": t.strokeLinejoin
  }, null), U("path", {
    d: "M9 12C11.2091 12 13 10.2091 13 8C13 5.79086 11.2091 4 9 4C6.79086 4 5 5.79086 5 8C5 10.2091 6.79086 12 9 12Z",
    fill: t.colors[1],
    stroke: t.colors[0],
    "stroke-width": t.strokeWidth,
    "stroke-linejoin": t.strokeLinejoin
  }, null), U("path", {
    d: "M9 44C11.2091 44 13 42.2091 13 40C13 37.7909 11.2091 36 9 36C6.79086 36 5 37.7909 5 40C5 42.2091 6.79086 44 9 44Z",
    fill: t.colors[1],
    stroke: t.colors[0],
    "stroke-width": t.strokeWidth,
    "stroke-linejoin": t.strokeLinejoin
  }, null), U("path", {
    d: "M9 12V36V24.0083H36",
    stroke: t.colors[0],
    "stroke-width": t.strokeWidth,
    "stroke-linecap": t.strokeLinecap,
    "stroke-linejoin": t.strokeLinejoin
  }, null)]);
}), k0 = Vs("check-one", !0, function(t) {
  return U("svg", {
    width: t.size,
    height: t.size,
    viewBox: "0 0 48 48",
    fill: "none"
  }, [U("path", {
    d: "M24 44C29.5228 44 34.5228 41.7614 38.1421 38.1421C41.7614 34.5228 44 29.5228 44 24C44 18.4772 41.7614 13.4772 38.1421 9.85786C34.5228 6.23858 29.5228 4 24 4C18.4772 4 13.4772 6.23858 9.85786 9.85786C6.23858 13.4772 4 18.4772 4 24C4 29.5228 6.23858 34.5228 9.85786 38.1421C13.4772 41.7614 18.4772 44 24 44Z",
    fill: t.colors[1],
    stroke: t.colors[0],
    "stroke-width": t.strokeWidth,
    "stroke-linejoin": t.strokeLinejoin
  }, null), U("path", {
    d: "M16 24L22 30L34 18",
    stroke: t.colors[2],
    "stroke-width": t.strokeWidth,
    "stroke-linecap": t.strokeLinecap,
    "stroke-linejoin": t.strokeLinejoin
  }, null)]);
}), _0 = Vs("close-small", !1, function(t) {
  return U("svg", {
    width: t.size,
    height: t.size,
    viewBox: "0 0 48 48",
    fill: "none"
  }, [U("path", {
    d: "M14 14L34 34",
    stroke: t.colors[0],
    "stroke-width": t.strokeWidth,
    "stroke-linecap": t.strokeLinecap,
    "stroke-linejoin": t.strokeLinejoin
  }, null), U("path", {
    d: "M14 34L34 14",
    stroke: t.colors[0],
    "stroke-width": t.strokeWidth,
    "stroke-linecap": t.strokeLinecap,
    "stroke-linejoin": t.strokeLinejoin
  }, null)]);
}), x0 = Vs("github", !0, function(t) {
  return U("svg", {
    width: t.size,
    height: t.size,
    viewBox: "0 0 48 48",
    fill: "none"
  }, [U("path", {
    "fill-rule": "evenodd",
    "clip-rule": "evenodd",
    d: "M24 4C12.9543 4 4 12.9543 4 24C4 35.0457 12.9543 44 24 44C35.0457 44 44 35.0457 44 24C44 12.9543 35.0457 4 24 4ZM0 24C0 10.7452 10.7452 0 24 0C37.2548 0 48 10.7452 48 24C48 37.2548 37.2548 48 24 48C10.7452 48 0 37.2548 0 24Z",
    fill: t.colors[0]
  }, null), U("path", {
    "fill-rule": "evenodd",
    "clip-rule": "evenodd",
    d: "M19.1833 45.4716C18.9898 45.2219 18.9898 42.9973 19.1833 38.798C17.1114 38.8696 15.8024 38.7258 15.2563 38.3667C14.437 37.828 13.6169 36.1667 12.8891 34.9959C12.1614 33.8251 10.5463 33.64 9.89405 33.3783C9.24182 33.1165 9.07809 32.0496 11.6913 32.8565C14.3044 33.6634 14.4319 35.8607 15.2563 36.3745C16.0806 36.8883 18.0515 36.6635 18.9448 36.2519C19.8382 35.8403 19.7724 34.3078 19.9317 33.7007C20.1331 33.134 19.4233 33.0083 19.4077 33.0037C18.5355 33.0037 13.9539 32.0073 12.6955 27.5706C11.437 23.134 13.0581 20.2341 13.9229 18.9875C14.4995 18.1564 14.4485 16.3852 13.7699 13.6737C16.2335 13.3589 18.1347 14.1343 19.4734 16.0001C19.4747 16.0108 21.2285 14.9572 24.0003 14.9572C26.772 14.9572 27.7553 15.8154 28.5142 16.0001C29.2731 16.1848 29.88 12.7341 34.5668 13.6737C33.5883 15.5969 32.7689 18.0001 33.3943 18.9875C34.0198 19.9749 36.4745 23.1147 34.9666 27.5706C33.9614 30.5413 31.9853 32.3523 29.0384 33.0037C28.7005 33.1115 28.5315 33.2855 28.5315 33.5255C28.5315 33.8856 28.9884 33.9249 29.6465 35.6117C30.0853 36.7362 30.117 39.948 29.7416 45.247C28.7906 45.4891 28.0508 45.6516 27.5221 45.7347C26.5847 45.882 25.5669 45.9646 24.5669 45.9965C23.5669 46.0284 23.2196 46.0248 21.837 45.8961C20.9154 45.8103 20.0308 45.6688 19.1833 45.4716Z",
    fill: t.colors[0]
  }, null)]);
}), $h = Vs("loading", !0, function(t) {
  return U("svg", {
    width: t.size,
    height: t.size,
    viewBox: "0 0 48 48",
    fill: "none"
  }, [U("path", {
    d: "M4 24C4 35.0457 12.9543 44 24 44V44C35.0457 44 44 35.0457 44 24C44 12.9543 35.0457 4 24 4",
    stroke: t.colors[0],
    "stroke-width": t.strokeWidth,
    "stroke-linecap": t.strokeLinecap,
    "stroke-linejoin": t.strokeLinejoin
  }, null), U("path", {
    d: "M36 24C36 17.3726 30.6274 12 24 12C17.3726 12 12 17.3726 12 24C12 30.6274 17.3726 36 24 36V36",
    stroke: t.colors[0],
    "stroke-width": t.strokeWidth,
    "stroke-linecap": t.strokeLinecap,
    "stroke-linejoin": t.strokeLinejoin
  }, null)]);
}), bP = (t) => {
  t.registerSettingsTab({
    id: "gitSync",
    labelKey: "settings.gitSync.menu",
    icon: x0,
    component: oo(() => Promise.resolve().then(() => RT))
  }), t.registerTitlebarAction({
    id: "git-sync-status",
    component: oo(() => Promise.resolve().then(() => HT))
  }), t.registerHostComponent({
    id: "git-sync-runtime",
    target: "config",
    component: oo(() => Promise.resolve().then(() => b4))
  });
}, Fh = Symbol(), ro = "el", A0 = "is-", Ki = (t, e, n, i, s) => {
  let o = `${t}-${e}`;
  return n && (o += `-${n}`), i && (o += `__${i}`), s && (o += `--${s}`), o;
}, Nh = Symbol("namespaceContextKey"), Lc = (t) => {
  const e = t || (pt() ? de(Nh, M(ro)) : M(ro));
  return C(() => p(e) || ro);
}, Le = (t, e) => {
  const n = Lc(e);
  return {
    namespace: n,
    b: (m = "") => Ki(n.value, t, m, "", ""),
    e: (m) => m ? Ki(n.value, t, "", m, "") : "",
    m: (m) => m ? Ki(n.value, t, "", "", m) : "",
    be: (m, y) => m && y ? Ki(n.value, t, m, y, "") : "",
    em: (m, y) => m && y ? Ki(n.value, t, "", m, y) : "",
    bm: (m, y) => m && y ? Ki(n.value, t, m, "", y) : "",
    bem: (m, y, v) => m && y && v ? Ki(n.value, t, m, y, v) : "",
    is: (m, ...y) => {
      const v = y.length >= 1 ? y[0] : !0;
      return m && v ? `${A0}${m}` : "";
    },
    cssVar: (m) => {
      const y = {};
      for (const v in m)
        m[v] && (y[`--${n.value}-${v}`] = m[v]);
      return y;
    },
    cssVarName: (m) => `--${n.value}-${m}`,
    cssVarBlock: (m) => {
      const y = {};
      for (const v in m)
        m[v] && (y[`--${n.value}-${t}-${v}`] = m[v]);
      return y;
    },
    cssVarBlockName: (m) => `--${n.value}-${t}-${m}`
  };
};
/**
* @vue/shared v3.5.13
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/
const Pi = () => {
}, E0 = Object.prototype.hasOwnProperty, Ku = (t, e) => E0.call(t, e), Nn = Array.isArray, tt = (t) => typeof t == "function", Qt = (t) => typeof t == "string", rn = (t) => t !== null && typeof t == "object", T0 = Object.prototype.toString, M0 = (t) => T0.call(t), O0 = (t) => M0(t) === "[object Object]", D0 = (t) => {
  const e = /* @__PURE__ */ Object.create(null);
  return (n) => e[n] || (e[n] = t(n));
}, P0 = /-(\w)/g, I0 = D0(
  (t) => t.replace(P0, (e, n) => n ? n.toUpperCase() : "")
);
var Vh = typeof global == "object" && global && global.Object === Object && global, R0 = typeof self == "object" && self && self.Object === Object && self, Zn = Vh || R0 || Function("return this")(), Un = Zn.Symbol, zh = Object.prototype, L0 = zh.hasOwnProperty, B0 = zh.toString, Ks = Un ? Un.toStringTag : void 0;
function $0(t) {
  var e = L0.call(t, Ks), n = t[Ks];
  try {
    t[Ks] = void 0;
    var i = !0;
  } catch {
  }
  var s = B0.call(t);
  return i && (e ? t[Ks] = n : delete t[Ks]), s;
}
var F0 = Object.prototype, N0 = F0.toString;
function V0(t) {
  return N0.call(t);
}
var z0 = "[object Null]", H0 = "[object Undefined]", Uu = Un ? Un.toStringTag : void 0;
function zs(t) {
  return t == null ? t === void 0 ? H0 : z0 : Uu && Uu in Object(t) ? $0(t) : V0(t);
}
function xs(t) {
  return t != null && typeof t == "object";
}
var W0 = "[object Symbol]";
function yl(t) {
  return typeof t == "symbol" || xs(t) && zs(t) == W0;
}
function G0(t, e) {
  for (var n = -1, i = t == null ? 0 : t.length, s = Array(i); ++n < i; )
    s[n] = e(t[n], n, t);
  return s;
}
var En = Array.isArray, qu = Un ? Un.prototype : void 0, Yu = qu ? qu.toString : void 0;
function Hh(t) {
  if (typeof t == "string")
    return t;
  if (En(t))
    return G0(t, Hh) + "";
  if (yl(t))
    return Yu ? Yu.call(t) : "";
  var e = t + "";
  return e == "0" && 1 / t == -1 / 0 ? "-0" : e;
}
var j0 = /\s/;
function K0(t) {
  for (var e = t.length; e-- && j0.test(t.charAt(e)); )
    ;
  return e;
}
var U0 = /^\s+/;
function q0(t) {
  return t && t.slice(0, K0(t) + 1).replace(U0, "");
}
function Ri(t) {
  var e = typeof t;
  return t != null && (e == "object" || e == "function");
}
var Ju = NaN, Y0 = /^[-+]0x[0-9a-f]+$/i, J0 = /^0b[01]+$/i, X0 = /^0o[0-7]+$/i, Z0 = parseInt;
function Xu(t) {
  if (typeof t == "number")
    return t;
  if (yl(t))
    return Ju;
  if (Ri(t)) {
    var e = typeof t.valueOf == "function" ? t.valueOf() : t;
    t = Ri(e) ? e + "" : e;
  }
  if (typeof t != "string")
    return t === 0 ? t : +t;
  t = q0(t);
  var n = J0.test(t);
  return n || X0.test(t) ? Z0(t.slice(2), n ? 2 : 8) : Y0.test(t) ? Ju : +t;
}
function Wh(t) {
  return t;
}
var Q0 = "[object AsyncFunction]", ey = "[object Function]", ty = "[object GeneratorFunction]", ny = "[object Proxy]";
function Gh(t) {
  if (!Ri(t))
    return !1;
  var e = zs(t);
  return e == ey || e == ty || e == Q0 || e == ny;
}
var ql = Zn["__core-js_shared__"], Zu = function() {
  var t = /[^.]+$/.exec(ql && ql.keys && ql.keys.IE_PROTO || "");
  return t ? "Symbol(src)_1." + t : "";
}();
function iy(t) {
  return !!Zu && Zu in t;
}
var sy = Function.prototype, oy = sy.toString;
function cs(t) {
  if (t != null) {
    try {
      return oy.call(t);
    } catch {
    }
    try {
      return t + "";
    } catch {
    }
  }
  return "";
}
var ry = /[\\^$.*+?()[\]{}|]/g, ly = /^\[object .+?Constructor\]$/, ay = Function.prototype, cy = Object.prototype, uy = ay.toString, fy = cy.hasOwnProperty, dy = RegExp(
  "^" + uy.call(fy).replace(ry, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$"
);
function hy(t) {
  if (!Ri(t) || iy(t))
    return !1;
  var e = Gh(t) ? dy : ly;
  return e.test(cs(t));
}
function py(t, e) {
  return t?.[e];
}
function us(t, e) {
  var n = py(t, e);
  return hy(n) ? n : void 0;
}
var Ea = us(Zn, "WeakMap");
function gy(t, e, n) {
  switch (n.length) {
    case 0:
      return t.call(e);
    case 1:
      return t.call(e, n[0]);
    case 2:
      return t.call(e, n[0], n[1]);
    case 3:
      return t.call(e, n[0], n[1], n[2]);
  }
  return t.apply(e, n);
}
var my = 800, vy = 16, yy = Date.now;
function by(t) {
  var e = 0, n = 0;
  return function() {
    var i = yy(), s = vy - (i - n);
    if (n = i, s > 0) {
      if (++e >= my)
        return arguments[0];
    } else
      e = 0;
    return t.apply(void 0, arguments);
  };
}
function wy(t) {
  return function() {
    return t;
  };
}
var Wr = function() {
  try {
    var t = us(Object, "defineProperty");
    return t({}, "", {}), t;
  } catch {
  }
}(), Sy = Wr ? function(t, e) {
  return Wr(t, "toString", {
    configurable: !0,
    enumerable: !1,
    value: wy(e),
    writable: !0
  });
} : Wh, Cy = by(Sy);
function ky(t, e, n, i) {
  t.length;
  for (var s = n + 1; s--; )
    if (e(t[s], s, t))
      return s;
  return -1;
}
var _y = 9007199254740991, xy = /^(?:0|[1-9]\d*)$/;
function Bc(t, e) {
  var n = typeof t;
  return e = e ?? _y, !!e && (n == "number" || n != "symbol" && xy.test(t)) && t > -1 && t % 1 == 0 && t < e;
}
function Ay(t, e, n) {
  e == "__proto__" && Wr ? Wr(t, e, {
    configurable: !0,
    enumerable: !0,
    value: n,
    writable: !0
  }) : t[e] = n;
}
function $c(t, e) {
  return t === e || t !== t && e !== e;
}
var Ey = Object.prototype, Ty = Ey.hasOwnProperty;
function My(t, e, n) {
  var i = t[e];
  (!(Ty.call(t, e) && $c(i, n)) || n === void 0 && !(e in t)) && Ay(t, e, n);
}
var Qu = Math.max;
function Oy(t, e, n) {
  return e = Qu(e === void 0 ? t.length - 1 : e, 0), function() {
    for (var i = arguments, s = -1, o = Qu(i.length - e, 0), r = Array(o); ++s < o; )
      r[s] = i[e + s];
    s = -1;
    for (var l = Array(e + 1); ++s < e; )
      l[s] = i[s];
    return l[e] = n(r), gy(t, this, l);
  };
}
var Dy = 9007199254740991;
function Fc(t) {
  return typeof t == "number" && t > -1 && t % 1 == 0 && t <= Dy;
}
function Py(t) {
  return t != null && Fc(t.length) && !Gh(t);
}
var Iy = Object.prototype;
function Ry(t) {
  var e = t && t.constructor, n = typeof e == "function" && e.prototype || Iy;
  return t === n;
}
function Ly(t, e) {
  for (var n = -1, i = Array(t); ++n < t; )
    i[n] = e(n);
  return i;
}
var By = "[object Arguments]";
function ef(t) {
  return xs(t) && zs(t) == By;
}
var jh = Object.prototype, $y = jh.hasOwnProperty, Fy = jh.propertyIsEnumerable, Nc = ef(/* @__PURE__ */ function() {
  return arguments;
}()) ? ef : function(t) {
  return xs(t) && $y.call(t, "callee") && !Fy.call(t, "callee");
};
function Ny() {
  return !1;
}
var Kh = typeof exports == "object" && exports && !exports.nodeType && exports, tf = Kh && typeof module == "object" && module && !module.nodeType && module, Vy = tf && tf.exports === Kh, nf = Vy ? Zn.Buffer : void 0, zy = nf ? nf.isBuffer : void 0, Ta = zy || Ny, Hy = "[object Arguments]", Wy = "[object Array]", Gy = "[object Boolean]", jy = "[object Date]", Ky = "[object Error]", Uy = "[object Function]", qy = "[object Map]", Yy = "[object Number]", Jy = "[object Object]", Xy = "[object RegExp]", Zy = "[object Set]", Qy = "[object String]", eb = "[object WeakMap]", tb = "[object ArrayBuffer]", nb = "[object DataView]", ib = "[object Float32Array]", sb = "[object Float64Array]", ob = "[object Int8Array]", rb = "[object Int16Array]", lb = "[object Int32Array]", ab = "[object Uint8Array]", cb = "[object Uint8ClampedArray]", ub = "[object Uint16Array]", fb = "[object Uint32Array]", He = {};
He[ib] = He[sb] = He[ob] = He[rb] = He[lb] = He[ab] = He[cb] = He[ub] = He[fb] = !0;
He[Hy] = He[Wy] = He[tb] = He[Gy] = He[nb] = He[jy] = He[Ky] = He[Uy] = He[qy] = He[Yy] = He[Jy] = He[Xy] = He[Zy] = He[Qy] = He[eb] = !1;
function db(t) {
  return xs(t) && Fc(t.length) && !!He[zs(t)];
}
function hb(t) {
  return function(e) {
    return t(e);
  };
}
var Uh = typeof exports == "object" && exports && !exports.nodeType && exports, lo = Uh && typeof module == "object" && module && !module.nodeType && module, pb = lo && lo.exports === Uh, Yl = pb && Vh.process, sf = function() {
  try {
    var t = lo && lo.require && lo.require("util").types;
    return t || Yl && Yl.binding && Yl.binding("util");
  } catch {
  }
}(), of = sf && sf.isTypedArray, qh = of ? hb(of) : db, gb = Object.prototype, mb = gb.hasOwnProperty;
function vb(t, e) {
  var n = En(t), i = !n && Nc(t), s = !n && !i && Ta(t), o = !n && !i && !s && qh(t), r = n || i || s || o, l = r ? Ly(t.length, String) : [], a = l.length;
  for (var c in t)
    mb.call(t, c) && !(r && // Safari 9 has enumerable `arguments.length` in strict mode.
    (c == "length" || // Node.js 0.10 has enumerable non-index properties on buffers.
    s && (c == "offset" || c == "parent") || // PhantomJS 2 has enumerable non-index properties on typed arrays.
    o && (c == "buffer" || c == "byteLength" || c == "byteOffset") || // Skip index properties.
    Bc(c, a))) && l.push(c);
  return l;
}
function yb(t, e) {
  return function(n) {
    return t(e(n));
  };
}
var bb = yb(Object.keys, Object), wb = Object.prototype, Sb = wb.hasOwnProperty;
function Cb(t) {
  if (!Ry(t))
    return bb(t);
  var e = [];
  for (var n in Object(t))
    Sb.call(t, n) && n != "constructor" && e.push(n);
  return e;
}
function Yh(t) {
  return Py(t) ? vb(t) : Cb(t);
}
var kb = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/, _b = /^\w*$/;
function Vc(t, e) {
  if (En(t))
    return !1;
  var n = typeof t;
  return n == "number" || n == "symbol" || n == "boolean" || t == null || yl(t) ? !0 : _b.test(t) || !kb.test(t) || e != null && t in Object(e);
}
var Co = us(Object, "create");
function xb() {
  this.__data__ = Co ? Co(null) : {}, this.size = 0;
}
function Ab(t) {
  var e = this.has(t) && delete this.__data__[t];
  return this.size -= e ? 1 : 0, e;
}
var Eb = "__lodash_hash_undefined__", Tb = Object.prototype, Mb = Tb.hasOwnProperty;
function Ob(t) {
  var e = this.__data__;
  if (Co) {
    var n = e[t];
    return n === Eb ? void 0 : n;
  }
  return Mb.call(e, t) ? e[t] : void 0;
}
var Db = Object.prototype, Pb = Db.hasOwnProperty;
function Ib(t) {
  var e = this.__data__;
  return Co ? e[t] !== void 0 : Pb.call(e, t);
}
var Rb = "__lodash_hash_undefined__";
function Lb(t, e) {
  var n = this.__data__;
  return this.size += this.has(t) ? 0 : 1, n[t] = Co && e === void 0 ? Rb : e, this;
}
function is(t) {
  var e = -1, n = t == null ? 0 : t.length;
  for (this.clear(); ++e < n; ) {
    var i = t[e];
    this.set(i[0], i[1]);
  }
}
is.prototype.clear = xb;
is.prototype.delete = Ab;
is.prototype.get = Ob;
is.prototype.has = Ib;
is.prototype.set = Lb;
function Bb() {
  this.__data__ = [], this.size = 0;
}
function bl(t, e) {
  for (var n = t.length; n--; )
    if ($c(t[n][0], e))
      return n;
  return -1;
}
var $b = Array.prototype, Fb = $b.splice;
function Nb(t) {
  var e = this.__data__, n = bl(e, t);
  if (n < 0)
    return !1;
  var i = e.length - 1;
  return n == i ? e.pop() : Fb.call(e, n, 1), --this.size, !0;
}
function Vb(t) {
  var e = this.__data__, n = bl(e, t);
  return n < 0 ? void 0 : e[n][1];
}
function zb(t) {
  return bl(this.__data__, t) > -1;
}
function Hb(t, e) {
  var n = this.__data__, i = bl(n, t);
  return i < 0 ? (++this.size, n.push([t, e])) : n[i][1] = e, this;
}
function gi(t) {
  var e = -1, n = t == null ? 0 : t.length;
  for (this.clear(); ++e < n; ) {
    var i = t[e];
    this.set(i[0], i[1]);
  }
}
gi.prototype.clear = Bb;
gi.prototype.delete = Nb;
gi.prototype.get = Vb;
gi.prototype.has = zb;
gi.prototype.set = Hb;
var ko = us(Zn, "Map");
function Wb() {
  this.size = 0, this.__data__ = {
    hash: new is(),
    map: new (ko || gi)(),
    string: new is()
  };
}
function Gb(t) {
  var e = typeof t;
  return e == "string" || e == "number" || e == "symbol" || e == "boolean" ? t !== "__proto__" : t === null;
}
function wl(t, e) {
  var n = t.__data__;
  return Gb(e) ? n[typeof e == "string" ? "string" : "hash"] : n.map;
}
function jb(t) {
  var e = wl(this, t).delete(t);
  return this.size -= e ? 1 : 0, e;
}
function Kb(t) {
  return wl(this, t).get(t);
}
function Ub(t) {
  return wl(this, t).has(t);
}
function qb(t, e) {
  var n = wl(this, t), i = n.size;
  return n.set(t, e), this.size += n.size == i ? 0 : 1, this;
}
function mi(t) {
  var e = -1, n = t == null ? 0 : t.length;
  for (this.clear(); ++e < n; ) {
    var i = t[e];
    this.set(i[0], i[1]);
  }
}
mi.prototype.clear = Wb;
mi.prototype.delete = jb;
mi.prototype.get = Kb;
mi.prototype.has = Ub;
mi.prototype.set = qb;
var Yb = "Expected a function";
function zc(t, e) {
  if (typeof t != "function" || e != null && typeof e != "function")
    throw new TypeError(Yb);
  var n = function() {
    var i = arguments, s = e ? e.apply(this, i) : i[0], o = n.cache;
    if (o.has(s))
      return o.get(s);
    var r = t.apply(this, i);
    return n.cache = o.set(s, r) || o, r;
  };
  return n.cache = new (zc.Cache || mi)(), n;
}
zc.Cache = mi;
var Jb = 500;
function Xb(t) {
  var e = zc(t, function(i) {
    return n.size === Jb && n.clear(), i;
  }), n = e.cache;
  return e;
}
var Zb = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g, Qb = /\\(\\)?/g, e1 = Xb(function(t) {
  var e = [];
  return t.charCodeAt(0) === 46 && e.push(""), t.replace(Zb, function(n, i, s, o) {
    e.push(s ? o.replace(Qb, "$1") : i || n);
  }), e;
});
function t1(t) {
  return t == null ? "" : Hh(t);
}
function Sl(t, e) {
  return En(t) ? t : Vc(t, e) ? [t] : e1(t1(t));
}
function $o(t) {
  if (typeof t == "string" || yl(t))
    return t;
  var e = t + "";
  return e == "0" && 1 / t == -1 / 0 ? "-0" : e;
}
function Hc(t, e) {
  e = Sl(e, t);
  for (var n = 0, i = e.length; t != null && n < i; )
    t = t[$o(e[n++])];
  return n && n == i ? t : void 0;
}
function Ei(t, e, n) {
  var i = t == null ? void 0 : Hc(t, e);
  return i === void 0 ? n : i;
}
function Jh(t, e) {
  for (var n = -1, i = e.length, s = t.length; ++n < i; )
    t[s + n] = e[n];
  return t;
}
var rf = Un ? Un.isConcatSpreadable : void 0;
function n1(t) {
  return En(t) || Nc(t) || !!(rf && t && t[rf]);
}
function i1(t, e, n, i, s) {
  var o = -1, r = t.length;
  for (n || (n = n1), s || (s = []); ++o < r; ) {
    var l = t[o];
    n(l) ? Jh(s, l) : s[s.length] = l;
  }
  return s;
}
function s1(t) {
  var e = t == null ? 0 : t.length;
  return e ? i1(t) : [];
}
function o1(t) {
  return Cy(Oy(t, void 0, s1), t + "");
}
function si() {
  if (!arguments.length)
    return [];
  var t = arguments[0];
  return En(t) ? t : [t];
}
function r1() {
  this.__data__ = new gi(), this.size = 0;
}
function l1(t) {
  var e = this.__data__, n = e.delete(t);
  return this.size = e.size, n;
}
function a1(t) {
  return this.__data__.get(t);
}
function c1(t) {
  return this.__data__.has(t);
}
var u1 = 200;
function f1(t, e) {
  var n = this.__data__;
  if (n instanceof gi) {
    var i = n.__data__;
    if (!ko || i.length < u1 - 1)
      return i.push([t, e]), this.size = ++n.size, this;
    n = this.__data__ = new mi(i);
  }
  return n.set(t, e), this.size = n.size, this;
}
function ai(t) {
  var e = this.__data__ = new gi(t);
  this.size = e.size;
}
ai.prototype.clear = r1;
ai.prototype.delete = l1;
ai.prototype.get = a1;
ai.prototype.has = c1;
ai.prototype.set = f1;
function d1(t, e) {
  for (var n = -1, i = t == null ? 0 : t.length, s = 0, o = []; ++n < i; ) {
    var r = t[n];
    e(r, n, t) && (o[s++] = r);
  }
  return o;
}
function h1() {
  return [];
}
var p1 = Object.prototype, g1 = p1.propertyIsEnumerable, lf = Object.getOwnPropertySymbols, m1 = lf ? function(t) {
  return t == null ? [] : (t = Object(t), d1(lf(t), function(e) {
    return g1.call(t, e);
  }));
} : h1;
function v1(t, e, n) {
  var i = e(t);
  return En(t) ? i : Jh(i, n(t));
}
function af(t) {
  return v1(t, Yh, m1);
}
var Ma = us(Zn, "DataView"), Oa = us(Zn, "Promise"), Da = us(Zn, "Set"), cf = "[object Map]", y1 = "[object Object]", uf = "[object Promise]", ff = "[object Set]", df = "[object WeakMap]", hf = "[object DataView]", b1 = cs(Ma), w1 = cs(ko), S1 = cs(Oa), C1 = cs(Da), k1 = cs(Ea), Ci = zs;
(Ma && Ci(new Ma(new ArrayBuffer(1))) != hf || ko && Ci(new ko()) != cf || Oa && Ci(Oa.resolve()) != uf || Da && Ci(new Da()) != ff || Ea && Ci(new Ea()) != df) && (Ci = function(t) {
  var e = zs(t), n = e == y1 ? t.constructor : void 0, i = n ? cs(n) : "";
  if (i)
    switch (i) {
      case b1:
        return hf;
      case w1:
        return cf;
      case S1:
        return uf;
      case C1:
        return ff;
      case k1:
        return df;
    }
  return e;
});
var pf = Zn.Uint8Array, _1 = "__lodash_hash_undefined__";
function x1(t) {
  return this.__data__.set(t, _1), this;
}
function A1(t) {
  return this.__data__.has(t);
}
function Gr(t) {
  var e = -1, n = t == null ? 0 : t.length;
  for (this.__data__ = new mi(); ++e < n; )
    this.add(t[e]);
}
Gr.prototype.add = Gr.prototype.push = x1;
Gr.prototype.has = A1;
function E1(t, e) {
  for (var n = -1, i = t == null ? 0 : t.length; ++n < i; )
    if (e(t[n], n, t))
      return !0;
  return !1;
}
function T1(t, e) {
  return t.has(e);
}
var M1 = 1, O1 = 2;
function Xh(t, e, n, i, s, o) {
  var r = n & M1, l = t.length, a = e.length;
  if (l != a && !(r && a > l))
    return !1;
  var c = o.get(t), u = o.get(e);
  if (c && u)
    return c == e && u == t;
  var f = -1, d = !0, h = n & O1 ? new Gr() : void 0;
  for (o.set(t, e), o.set(e, t); ++f < l; ) {
    var g = t[f], m = e[f];
    if (i)
      var y = r ? i(m, g, f, e, t, o) : i(g, m, f, t, e, o);
    if (y !== void 0) {
      if (y)
        continue;
      d = !1;
      break;
    }
    if (h) {
      if (!E1(e, function(v, w) {
        if (!T1(h, w) && (g === v || s(g, v, n, i, o)))
          return h.push(w);
      })) {
        d = !1;
        break;
      }
    } else if (!(g === m || s(g, m, n, i, o))) {
      d = !1;
      break;
    }
  }
  return o.delete(t), o.delete(e), d;
}
function D1(t) {
  var e = -1, n = Array(t.size);
  return t.forEach(function(i, s) {
    n[++e] = [s, i];
  }), n;
}
function P1(t) {
  var e = -1, n = Array(t.size);
  return t.forEach(function(i) {
    n[++e] = i;
  }), n;
}
var I1 = 1, R1 = 2, L1 = "[object Boolean]", B1 = "[object Date]", $1 = "[object Error]", F1 = "[object Map]", N1 = "[object Number]", V1 = "[object RegExp]", z1 = "[object Set]", H1 = "[object String]", W1 = "[object Symbol]", G1 = "[object ArrayBuffer]", j1 = "[object DataView]", gf = Un ? Un.prototype : void 0, Jl = gf ? gf.valueOf : void 0;
function K1(t, e, n, i, s, o, r) {
  switch (n) {
    case j1:
      if (t.byteLength != e.byteLength || t.byteOffset != e.byteOffset)
        return !1;
      t = t.buffer, e = e.buffer;
    case G1:
      return !(t.byteLength != e.byteLength || !o(new pf(t), new pf(e)));
    case L1:
    case B1:
    case N1:
      return $c(+t, +e);
    case $1:
      return t.name == e.name && t.message == e.message;
    case V1:
    case H1:
      return t == e + "";
    case F1:
      var l = D1;
    case z1:
      var a = i & I1;
      if (l || (l = P1), t.size != e.size && !a)
        return !1;
      var c = r.get(t);
      if (c)
        return c == e;
      i |= R1, r.set(t, e);
      var u = Xh(l(t), l(e), i, s, o, r);
      return r.delete(t), u;
    case W1:
      if (Jl)
        return Jl.call(t) == Jl.call(e);
  }
  return !1;
}
var U1 = 1, q1 = Object.prototype, Y1 = q1.hasOwnProperty;
function J1(t, e, n, i, s, o) {
  var r = n & U1, l = af(t), a = l.length, c = af(e), u = c.length;
  if (a != u && !r)
    return !1;
  for (var f = a; f--; ) {
    var d = l[f];
    if (!(r ? d in e : Y1.call(e, d)))
      return !1;
  }
  var h = o.get(t), g = o.get(e);
  if (h && g)
    return h == e && g == t;
  var m = !0;
  o.set(t, e), o.set(e, t);
  for (var y = r; ++f < a; ) {
    d = l[f];
    var v = t[d], w = e[d];
    if (i)
      var _ = r ? i(w, v, d, e, t, o) : i(v, w, d, t, e, o);
    if (!(_ === void 0 ? v === w || s(v, w, n, i, o) : _)) {
      m = !1;
      break;
    }
    y || (y = d == "constructor");
  }
  if (m && !y) {
    var x = t.constructor, k = e.constructor;
    x != k && "constructor" in t && "constructor" in e && !(typeof x == "function" && x instanceof x && typeof k == "function" && k instanceof k) && (m = !1);
  }
  return o.delete(t), o.delete(e), m;
}
var X1 = 1, mf = "[object Arguments]", vf = "[object Array]", Xo = "[object Object]", Z1 = Object.prototype, yf = Z1.hasOwnProperty;
function Q1(t, e, n, i, s, o) {
  var r = En(t), l = En(e), a = r ? vf : Ci(t), c = l ? vf : Ci(e);
  a = a == mf ? Xo : a, c = c == mf ? Xo : c;
  var u = a == Xo, f = c == Xo, d = a == c;
  if (d && Ta(t)) {
    if (!Ta(e))
      return !1;
    r = !0, u = !1;
  }
  if (d && !u)
    return o || (o = new ai()), r || qh(t) ? Xh(t, e, n, i, s, o) : K1(t, e, a, n, i, s, o);
  if (!(n & X1)) {
    var h = u && yf.call(t, "__wrapped__"), g = f && yf.call(e, "__wrapped__");
    if (h || g) {
      var m = h ? t.value() : t, y = g ? e.value() : e;
      return o || (o = new ai()), s(m, y, n, i, o);
    }
  }
  return d ? (o || (o = new ai()), J1(t, e, n, i, s, o)) : !1;
}
function Cl(t, e, n, i, s) {
  return t === e ? !0 : t == null || e == null || !xs(t) && !xs(e) ? t !== t && e !== e : Q1(t, e, n, i, Cl, s);
}
var ew = 1, tw = 2;
function nw(t, e, n, i) {
  var s = n.length, o = s;
  if (t == null)
    return !o;
  for (t = Object(t); s--; ) {
    var r = n[s];
    if (r[2] ? r[1] !== t[r[0]] : !(r[0] in t))
      return !1;
  }
  for (; ++s < o; ) {
    r = n[s];
    var l = r[0], a = t[l], c = r[1];
    if (r[2]) {
      if (a === void 0 && !(l in t))
        return !1;
    } else {
      var u = new ai(), f;
      if (!(f === void 0 ? Cl(c, a, ew | tw, i, u) : f))
        return !1;
    }
  }
  return !0;
}
function Zh(t) {
  return t === t && !Ri(t);
}
function iw(t) {
  for (var e = Yh(t), n = e.length; n--; ) {
    var i = e[n], s = t[i];
    e[n] = [i, s, Zh(s)];
  }
  return e;
}
function Qh(t, e) {
  return function(n) {
    return n == null ? !1 : n[t] === e && (e !== void 0 || t in Object(n));
  };
}
function sw(t) {
  var e = iw(t);
  return e.length == 1 && e[0][2] ? Qh(e[0][0], e[0][1]) : function(n) {
    return n === t || nw(n, t, e);
  };
}
function ow(t, e) {
  return t != null && e in Object(t);
}
function rw(t, e, n) {
  e = Sl(e, t);
  for (var i = -1, s = e.length, o = !1; ++i < s; ) {
    var r = $o(e[i]);
    if (!(o = t != null && n(t, r)))
      break;
    t = t[r];
  }
  return o || ++i != s ? o : (s = t == null ? 0 : t.length, !!s && Fc(s) && Bc(r, s) && (En(t) || Nc(t)));
}
function ep(t, e) {
  return t != null && rw(t, e, ow);
}
var lw = 1, aw = 2;
function cw(t, e) {
  return Vc(t) && Zh(e) ? Qh($o(t), e) : function(n) {
    var i = Ei(n, t);
    return i === void 0 && i === e ? ep(n, t) : Cl(e, i, lw | aw);
  };
}
function uw(t) {
  return function(e) {
    return e?.[t];
  };
}
function fw(t) {
  return function(e) {
    return Hc(e, t);
  };
}
function dw(t) {
  return Vc(t) ? uw($o(t)) : fw(t);
}
function hw(t) {
  return typeof t == "function" ? t : t == null ? Wh : typeof t == "object" ? En(t) ? cw(t[0], t[1]) : sw(t) : dw(t);
}
var Xl = function() {
  return Zn.Date.now();
}, pw = "Expected a function", gw = Math.max, mw = Math.min;
function vw(t, e, n) {
  var i, s, o, r, l, a, c = 0, u = !1, f = !1, d = !0;
  if (typeof t != "function")
    throw new TypeError(pw);
  e = Xu(e) || 0, Ri(n) && (u = !!n.leading, f = "maxWait" in n, o = f ? gw(Xu(n.maxWait) || 0, e) : o, d = "trailing" in n ? !!n.trailing : d);
  function h(T) {
    var A = i, z = s;
    return i = s = void 0, c = T, r = t.apply(z, A), r;
  }
  function g(T) {
    return c = T, l = setTimeout(v, e), u ? h(T) : r;
  }
  function m(T) {
    var A = T - a, z = T - c, B = e - A;
    return f ? mw(B, o - z) : B;
  }
  function y(T) {
    var A = T - a, z = T - c;
    return a === void 0 || A >= e || A < 0 || f && z >= o;
  }
  function v() {
    var T = Xl();
    if (y(T))
      return w(T);
    l = setTimeout(v, m(T));
  }
  function w(T) {
    return l = void 0, d && i ? h(T) : (i = s = void 0, r);
  }
  function _() {
    l !== void 0 && clearTimeout(l), c = 0, i = a = s = l = void 0;
  }
  function x() {
    return l === void 0 ? r : w(Xl());
  }
  function k() {
    var T = Xl(), A = y(T);
    if (i = arguments, s = this, a = T, A) {
      if (l === void 0)
        return g(a);
      if (f)
        return clearTimeout(l), l = setTimeout(v, e), h(a);
    }
    return l === void 0 && (l = setTimeout(v, e)), r;
  }
  return k.cancel = _, k.flush = x, k;
}
function yw(t, e, n) {
  var i = t == null ? 0 : t.length;
  if (!i)
    return -1;
  var s = i - 1;
  return ky(t, hw(e), s);
}
function jr(t) {
  for (var e = -1, n = t == null ? 0 : t.length, i = {}; ++e < n; ) {
    var s = t[e];
    i[s[0]] = s[1];
  }
  return i;
}
function ao(t, e) {
  return Cl(t, e);
}
function ci(t) {
  return t == null;
}
function tp(t) {
  return t === void 0;
}
function bw(t, e, n, i) {
  if (!Ri(t))
    return t;
  e = Sl(e, t);
  for (var s = -1, o = e.length, r = o - 1, l = t; l != null && ++s < o; ) {
    var a = $o(e[s]), c = n;
    if (a === "__proto__" || a === "constructor" || a === "prototype")
      return t;
    if (s != r) {
      var u = l[a];
      c = void 0, c === void 0 && (c = Ri(u) ? u : Bc(e[s + 1]) ? [] : {});
    }
    My(l, a, c), l = l[a];
  }
  return t;
}
function ww(t, e, n) {
  for (var i = -1, s = e.length, o = {}; ++i < s; ) {
    var r = e[i], l = Hc(t, r);
    n(l, r) && bw(o, Sl(r, t), l);
  }
  return o;
}
function Sw(t, e) {
  return ww(t, e, function(n, i) {
    return ep(t, i);
  });
}
var Cw = o1(function(t, e) {
  return t == null ? {} : Sw(t, e);
});
const Vn = (t) => t === void 0, _o = (t) => typeof t == "boolean", Fe = (t) => typeof t == "number", xn = (t) => typeof Element > "u" ? !1 : t instanceof Element, kw = (t) => Qt(t) ? !Number.isNaN(Number(t)) : !1;
var _w = Object.defineProperty, xw = Object.defineProperties, Aw = Object.getOwnPropertyDescriptors, bf = Object.getOwnPropertySymbols, Ew = Object.prototype.hasOwnProperty, Tw = Object.prototype.propertyIsEnumerable, wf = (t, e, n) => e in t ? _w(t, e, { enumerable: !0, configurable: !0, writable: !0, value: n }) : t[e] = n, Mw = (t, e) => {
  for (var n in e || (e = {}))
    Ew.call(e, n) && wf(t, n, e[n]);
  if (bf)
    for (var n of bf(e))
      Tw.call(e, n) && wf(t, n, e[n]);
  return t;
}, Ow = (t, e) => xw(t, Aw(e));
function Dw(t, e) {
  var n;
  const i = es();
  return Pc(() => {
    i.value = t();
  }, Ow(Mw({}, e), {
    flush: (n = void 0) != null ? n : "sync"
  })), gl(i);
}
var Sf;
const Ke = typeof window < "u", Pw = (t) => typeof t == "string", np = () => {
}, Pa = Ke && ((Sf = window?.navigator) == null ? void 0 : Sf.userAgent) && /iP(ad|hone|od)/.test(window.navigator.userAgent);
function Wc(t) {
  return typeof t == "function" ? t() : p(t);
}
function Iw(t) {
  return t;
}
function Fo(t) {
  return n0() ? (Ih(t), !0) : !1;
}
function Rw(t, e = !0) {
  pt() ? qe(t) : e ? t() : Ze(t);
}
function Kr(t, e, n = {}) {
  const {
    immediate: i = !0
  } = n, s = M(!1);
  let o = null;
  function r() {
    o && (clearTimeout(o), o = null);
  }
  function l() {
    s.value = !1, r();
  }
  function a(...c) {
    r(), s.value = !0, o = setTimeout(() => {
      s.value = !1, o = null, t(...c);
    }, Wc(e));
  }
  return i && (s.value = !0, Ke && a()), Fo(l), {
    isPending: gl(s),
    start: a,
    stop: l
  };
}
function ri(t) {
  var e;
  const n = Wc(t);
  return (e = n?.$el) != null ? e : n;
}
const kl = Ke ? window : void 0;
function an(...t) {
  let e, n, i, s;
  if (Pw(t[0]) || Array.isArray(t[0]) ? ([n, i, s] = t, e = kl) : [e, n, i, s] = t, !e)
    return np;
  Array.isArray(n) || (n = [n]), Array.isArray(i) || (i = [i]);
  const o = [], r = () => {
    o.forEach((u) => u()), o.length = 0;
  }, l = (u, f, d, h) => (u.addEventListener(f, d, h), () => u.removeEventListener(f, d, h)), a = ae(() => [ri(e), Wc(s)], ([u, f]) => {
    r(), u && o.push(...n.flatMap((d) => i.map((h) => l(u, d, h, f))));
  }, { immediate: !0, flush: "post" }), c = () => {
    a(), r();
  };
  return Fo(c), c;
}
let Cf = !1;
function Lw(t, e, n = {}) {
  const { window: i = kl, ignore: s = [], capture: o = !0, detectIframe: r = !1 } = n;
  if (!i)
    return;
  Pa && !Cf && (Cf = !0, Array.from(i.document.body.children).forEach((d) => d.addEventListener("click", np)));
  let l = !0;
  const a = (d) => s.some((h) => {
    if (typeof h == "string")
      return Array.from(i.document.querySelectorAll(h)).some((g) => g === d.target || d.composedPath().includes(g));
    {
      const g = ri(h);
      return g && (d.target === g || d.composedPath().includes(g));
    }
  }), u = [
    an(i, "click", (d) => {
      const h = ri(t);
      if (!(!h || h === d.target || d.composedPath().includes(h))) {
        if (d.detail === 0 && (l = !a(d)), !l) {
          l = !0;
          return;
        }
        e(d);
      }
    }, { passive: !0, capture: o }),
    an(i, "pointerdown", (d) => {
      const h = ri(t);
      h && (l = !d.composedPath().includes(h) && !a(d));
    }, { passive: !0 }),
    r && an(i, "blur", (d) => {
      var h;
      const g = ri(t);
      ((h = i.document.activeElement) == null ? void 0 : h.tagName) === "IFRAME" && !g?.contains(i.document.activeElement) && e(d);
    })
  ].filter(Boolean);
  return () => u.forEach((d) => d());
}
function ip(t, e = !1) {
  const n = M(), i = () => n.value = !!t();
  return i(), Rw(i, e), n;
}
const kf = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {}, _f = "__vueuse_ssr_handlers__";
kf[_f] = kf[_f] || {};
var xf = Object.getOwnPropertySymbols, Bw = Object.prototype.hasOwnProperty, $w = Object.prototype.propertyIsEnumerable, Fw = (t, e) => {
  var n = {};
  for (var i in t)
    Bw.call(t, i) && e.indexOf(i) < 0 && (n[i] = t[i]);
  if (t != null && xf)
    for (var i of xf(t))
      e.indexOf(i) < 0 && $w.call(t, i) && (n[i] = t[i]);
  return n;
};
function Bn(t, e, n = {}) {
  const i = n, { window: s = kl } = i, o = Fw(i, ["window"]);
  let r;
  const l = ip(() => s && "ResizeObserver" in s), a = () => {
    r && (r.disconnect(), r = void 0);
  }, c = ae(() => ri(t), (f) => {
    a(), l.value && s && f && (r = new ResizeObserver(e), r.observe(f, o));
  }, { immediate: !0, flush: "post" }), u = () => {
    a(), c();
  };
  return Fo(u), {
    isSupported: l,
    stop: u
  };
}
var Af = Object.getOwnPropertySymbols, Nw = Object.prototype.hasOwnProperty, Vw = Object.prototype.propertyIsEnumerable, zw = (t, e) => {
  var n = {};
  for (var i in t)
    Nw.call(t, i) && e.indexOf(i) < 0 && (n[i] = t[i]);
  if (t != null && Af)
    for (var i of Af(t))
      e.indexOf(i) < 0 && Vw.call(t, i) && (n[i] = t[i]);
  return n;
};
function Hw(t, e, n = {}) {
  const i = n, { window: s = kl } = i, o = zw(i, ["window"]);
  let r;
  const l = ip(() => s && "MutationObserver" in s), a = () => {
    r && (r.disconnect(), r = void 0);
  }, c = ae(() => ri(t), (f) => {
    a(), l.value && s && f && (r = new MutationObserver(e), r.observe(f, o));
  }, { immediate: !0 }), u = () => {
    a(), c();
  };
  return Fo(u), {
    isSupported: l,
    stop: u
  };
}
var Ef;
(function(t) {
  t.UP = "UP", t.RIGHT = "RIGHT", t.DOWN = "DOWN", t.LEFT = "LEFT", t.NONE = "NONE";
})(Ef || (Ef = {}));
var Ww = Object.defineProperty, Tf = Object.getOwnPropertySymbols, Gw = Object.prototype.hasOwnProperty, jw = Object.prototype.propertyIsEnumerable, Mf = (t, e, n) => e in t ? Ww(t, e, { enumerable: !0, configurable: !0, writable: !0, value: n }) : t[e] = n, Kw = (t, e) => {
  for (var n in e || (e = {}))
    Gw.call(e, n) && Mf(t, n, e[n]);
  if (Tf)
    for (var n of Tf(e))
      jw.call(e, n) && Mf(t, n, e[n]);
  return t;
};
const Uw = {
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
Kw({
  linear: Iw
}, Uw);
class qw extends Error {
  constructor(e) {
    super(e), this.name = "ElementPlusError";
  }
}
function Gc(t, e) {
  throw new qw(`[${t}] ${e}`);
}
const Of = {
  current: 0
}, Df = M(0), sp = 2e3, Pf = Symbol("elZIndexContextKey"), op = Symbol("zIndexContextKey"), jc = (t) => {
  const e = pt() ? de(Pf, Of) : Of, n = t || (pt() ? de(op, void 0) : void 0), i = C(() => {
    const r = p(n);
    return Fe(r) ? r : sp;
  }), s = C(() => i.value + Df.value), o = () => (e.current++, Df.value = e.current, s.value);
  return !Ke && de(Pf), {
    initialZIndex: i,
    currentZIndex: s,
    nextZIndex: o
  };
};
var Yw = {
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
const Jw = (t) => (e, n) => Xw(e, n, p(t)), Xw = (t, e, n) => Ei(n, t, t).replace(/\{(\w+)\}/g, (i, s) => {
  var o;
  return `${(o = e?.[s]) != null ? o : `{${s}}`}`;
}), Zw = (t) => {
  const e = C(() => p(t).name), n = It(t) ? t : M(t);
  return {
    lang: e,
    locale: n,
    t: Jw(t)
  };
}, rp = Symbol("localeContextKey"), No = (t) => {
  const e = t || de(rp, M());
  return Zw(C(() => e.value || Yw));
}, lp = "__epPropKey", re = (t) => t, Qw = (t) => rn(t) && !!t[lp], _l = (t, e) => {
  if (!rn(t) || Qw(t))
    return t;
  const { values: n, required: i, default: s, type: o, validator: r } = t, a = {
    type: o,
    required: !!i,
    validator: n || r ? (c) => {
      let u = !1, f = [];
      if (n && (f = Array.from(n), Ku(t, "default") && f.push(s), u || (u = f.includes(c))), r && (u || (u = r(c))), !u && f.length > 0) {
        const d = [...new Set(f)].map((h) => JSON.stringify(h)).join(", ");
        i0(`Invalid prop: validation failed${e ? ` for prop "${e}"` : ""}. Expected one of [${d}], got value ${JSON.stringify(c)}.`);
      }
      return u;
    } : void 0,
    [lp]: !0
  };
  return Ku(t, "default") && (a.default = s), a;
}, Ee = (t) => jr(Object.entries(t).map(([e, n]) => [
  e,
  _l(n, e)
])), ap = ["", "default", "small", "large"], Vo = _l({
  type: String,
  values: ap,
  required: !1
}), cp = Symbol("size"), eS = () => {
  const t = de(cp, {});
  return C(() => p(t.size) || "");
}, up = Symbol("emptyValuesContextKey"), tS = ["", void 0, null], nS = void 0, fp = Ee({
  emptyValues: Array,
  valueOnClear: {
    type: [String, Number, Boolean, Function],
    default: void 0,
    validator: (t) => tt(t) ? !t() : !t
  }
}), iS = (t, e) => {
  const n = pt() ? de(up, M({})) : M({}), i = C(() => t.emptyValues || n.value.emptyValues || tS), s = C(() => tt(t.valueOnClear) ? t.valueOnClear() : t.valueOnClear !== void 0 ? t.valueOnClear : tt(n.value.valueOnClear) ? n.value.valueOnClear() : n.value.valueOnClear !== void 0 ? n.value.valueOnClear : nS), o = (r) => i.value.includes(r);
  return i.value.includes(s.value), {
    emptyValues: i,
    valueOnClear: s,
    isEmptyValue: o
  };
}, If = (t) => Object.keys(t), Ur = M();
function xl(t, e = void 0) {
  const n = pt() ? de(Fh, Ur) : Ur;
  return t ? C(() => {
    var i, s;
    return (s = (i = n.value) == null ? void 0 : i[t]) != null ? s : e;
  }) : n;
}
function dp(t, e) {
  const n = xl(), i = Le(t, C(() => {
    var l;
    return ((l = n.value) == null ? void 0 : l.namespace) || ro;
  })), s = No(C(() => {
    var l;
    return (l = n.value) == null ? void 0 : l.locale;
  })), o = jc(C(() => {
    var l;
    return ((l = n.value) == null ? void 0 : l.zIndex) || sp;
  })), r = C(() => {
    var l;
    return p(e) || ((l = n.value) == null ? void 0 : l.size) || "";
  });
  return hp(C(() => p(n) || {})), {
    ns: i,
    locale: s,
    zIndex: o,
    size: r
  };
}
const hp = (t, e, n = !1) => {
  var i;
  const s = !!pt(), o = s ? xl() : void 0, r = (i = void 0) != null ? i : s ? gt : void 0;
  if (!r)
    return;
  const l = C(() => {
    const a = p(t);
    return o?.value ? sS(o.value, a) : a;
  });
  return r(Fh, l), r(rp, C(() => l.value.locale)), r(Nh, C(() => l.value.namespace)), r(op, C(() => l.value.zIndex)), r(cp, {
    size: C(() => l.value.size || "")
  }), r(up, C(() => ({
    emptyValues: l.value.emptyValues,
    valueOnClear: l.value.valueOnClear
  }))), (n || !Ur.value) && (Ur.value = l.value), l;
}, sS = (t, e) => {
  const n = [.../* @__PURE__ */ new Set([...If(t), ...If(e)])], i = {};
  for (const s of n)
    i[s] = e[s] !== void 0 ? e[s] : t[s];
  return i;
}, St = "update:modelValue", As = "change", Ss = "input";
var Se = (t, e) => {
  const n = t.__vccOpts || t;
  for (const [i, s] of e)
    n[i] = s;
  return n;
};
const pp = (t = "") => t.split(" ").filter((e) => !!e.trim()), Rf = (t, e) => {
  if (!t || !e)
    return !1;
  if (e.includes(" "))
    throw new Error("className should not contain space.");
  return t.classList.contains(e);
}, oS = (t, e) => {
  !t || !e.trim() || t.classList.add(...pp(e));
}, rS = (t, e) => {
  !t || !e.trim() || t.classList.remove(...pp(e));
}, lS = (t, e) => {
  var n;
  if (!Ke || !t)
    return "";
  let i = I0(e);
  i === "float" && (i = "cssFloat");
  try {
    const s = t.style[i];
    if (s)
      return s;
    const o = (n = document.defaultView) == null ? void 0 : n.getComputedStyle(t, "");
    return o ? o[i] : "";
  } catch {
    return t.style[i];
  }
};
function fi(t, e = "px") {
  if (!t)
    return "";
  if (Fe(t) || kw(t))
    return `${t}${e}`;
  if (Qt(t))
    return t;
}
let Zo;
const aS = (t) => {
  var e;
  if (!Ke)
    return 0;
  if (Zo !== void 0)
    return Zo;
  const n = document.createElement("div");
  n.className = `${t}-scrollbar__wrap`, n.style.visibility = "hidden", n.style.width = "100px", n.style.position = "absolute", n.style.top = "-9999px", document.body.appendChild(n);
  const i = n.offsetWidth;
  n.style.overflow = "scroll";
  const s = document.createElement("div");
  s.style.width = "100%", n.appendChild(s);
  const o = s.offsetWidth;
  return (e = n.parentNode) == null || e.removeChild(n), Zo = i - o, Zo;
};
function cS(t, e) {
  if (!Ke)
    return;
  if (!e) {
    t.scrollTop = 0;
    return;
  }
  const n = [];
  let i = e.offsetParent;
  for (; i !== null && t !== i && t.contains(i); )
    n.push(i), i = i.offsetParent;
  const s = e.offsetTop + n.reduce((a, c) => a + c.offsetTop, 0), o = s + e.offsetHeight, r = t.scrollTop, l = r + t.clientHeight;
  s < r ? t.scrollTop = s : o > l && (t.scrollTop = o - t.clientHeight);
}
const nn = (t, e) => {
  if (t.install = (n) => {
    for (const i of [t, ...Object.values(e ?? {})])
      n.component(i.name, i);
  }, e)
    for (const [n, i] of Object.entries(e))
      t[n] = i;
  return t;
}, gp = (t, e) => (t.install = (n) => {
  t._context = n._context, n.config.globalProperties[e] = t;
}, t), zo = (t) => (t.install = Pi, t), uS = Ee({
  size: {
    type: re([Number, String])
  },
  color: {
    type: String
  }
}), fS = J({
  name: "ElIcon",
  inheritAttrs: !1
}), dS = /* @__PURE__ */ J({
  ...fS,
  props: uS,
  setup(t) {
    const e = t, n = Le("icon"), i = C(() => {
      const { size: s, color: o } = e;
      return !s && !o ? {} : {
        fontSize: Vn(s) ? void 0 : fi(s),
        "--color": o
      };
    });
    return (s, o) => (S(), D("i", hn({
      class: p(n).b(),
      style: p(i)
    }, s.$attrs), [
      ne(s.$slots, "default")
    ], 16));
  }
});
var hS = /* @__PURE__ */ Se(dS, [["__file", "icon.vue"]]);
const ft = nn(hS);
/*! Element Plus Icons Vue v2.3.1 */
var pS = /* @__PURE__ */ J({
  name: "ArrowDown",
  __name: "arrow-down",
  setup(t) {
    return (e, n) => (S(), D("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 1024 1024"
    }, [
      b("path", {
        fill: "currentColor",
        d: "M831.872 340.864 512 652.672 192.128 340.864a30.592 30.592 0 0 0-42.752 0 29.12 29.12 0 0 0 0 41.6L489.664 714.24a32 32 0 0 0 44.672 0l340.288-331.712a29.12 29.12 0 0 0 0-41.728 30.592 30.592 0 0 0-42.752 0z"
      })
    ]));
  }
}), Kc = pS, gS = /* @__PURE__ */ J({
  name: "ArrowUp",
  __name: "arrow-up",
  setup(t) {
    return (e, n) => (S(), D("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 1024 1024"
    }, [
      b("path", {
        fill: "currentColor",
        d: "m488.832 344.32-339.84 356.672a32 32 0 0 0 0 44.16l.384.384a29.44 29.44 0 0 0 42.688 0l320-335.872 319.872 335.872a29.44 29.44 0 0 0 42.688 0l.384-.384a32 32 0 0 0 0-44.16L535.168 344.32a32 32 0 0 0-46.336 0"
      })
    ]));
  }
}), mS = gS, vS = /* @__PURE__ */ J({
  name: "CircleCheck",
  __name: "circle-check",
  setup(t) {
    return (e, n) => (S(), D("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 1024 1024"
    }, [
      b("path", {
        fill: "currentColor",
        d: "M512 896a384 384 0 1 0 0-768 384 384 0 0 0 0 768m0 64a448 448 0 1 1 0-896 448 448 0 0 1 0 896"
      }),
      b("path", {
        fill: "currentColor",
        d: "M745.344 361.344a32 32 0 0 1 45.312 45.312l-288 288a32 32 0 0 1-45.312 0l-160-160a32 32 0 1 1 45.312-45.312L480 626.752l265.344-265.408z"
      })
    ]));
  }
}), yS = vS, bS = /* @__PURE__ */ J({
  name: "CircleCloseFilled",
  __name: "circle-close-filled",
  setup(t) {
    return (e, n) => (S(), D("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 1024 1024"
    }, [
      b("path", {
        fill: "currentColor",
        d: "M512 64a448 448 0 1 1 0 896 448 448 0 0 1 0-896m0 393.664L407.936 353.6a38.4 38.4 0 1 0-54.336 54.336L457.664 512 353.6 616.064a38.4 38.4 0 1 0 54.336 54.336L512 566.336 616.064 670.4a38.4 38.4 0 1 0 54.336-54.336L566.336 512 670.4 407.936a38.4 38.4 0 1 0-54.336-54.336z"
      })
    ]));
  }
}), wS = bS, SS = /* @__PURE__ */ J({
  name: "CircleClose",
  __name: "circle-close",
  setup(t) {
    return (e, n) => (S(), D("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 1024 1024"
    }, [
      b("path", {
        fill: "currentColor",
        d: "m466.752 512-90.496-90.496a32 32 0 0 1 45.248-45.248L512 466.752l90.496-90.496a32 32 0 1 1 45.248 45.248L557.248 512l90.496 90.496a32 32 0 1 1-45.248 45.248L512 557.248l-90.496 90.496a32 32 0 0 1-45.248-45.248z"
      }),
      b("path", {
        fill: "currentColor",
        d: "M512 896a384 384 0 1 0 0-768 384 384 0 0 0 0 768m0 64a448 448 0 1 1 0-896 448 448 0 0 1 0 896"
      })
    ]));
  }
}), Uc = SS, CS = /* @__PURE__ */ J({
  name: "Close",
  __name: "close",
  setup(t) {
    return (e, n) => (S(), D("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 1024 1024"
    }, [
      b("path", {
        fill: "currentColor",
        d: "M764.288 214.592 512 466.88 259.712 214.592a31.936 31.936 0 0 0-45.12 45.12L466.752 512 214.528 764.224a31.936 31.936 0 1 0 45.12 45.184L512 557.184l252.288 252.288a31.936 31.936 0 0 0 45.12-45.12L557.12 512.064l252.288-252.352a31.936 31.936 0 1 0-45.12-45.184z"
      })
    ]));
  }
}), qr = CS, kS = /* @__PURE__ */ J({
  name: "Hide",
  __name: "hide",
  setup(t) {
    return (e, n) => (S(), D("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 1024 1024"
    }, [
      b("path", {
        fill: "currentColor",
        d: "M876.8 156.8c0-9.6-3.2-16-9.6-22.4-6.4-6.4-12.8-9.6-22.4-9.6-9.6 0-16 3.2-22.4 9.6L736 220.8c-64-32-137.6-51.2-224-60.8-160 16-288 73.6-377.6 176C44.8 438.4 0 496 0 512s48 73.6 134.4 176c22.4 25.6 44.8 48 73.6 67.2l-86.4 89.6c-6.4 6.4-9.6 12.8-9.6 22.4 0 9.6 3.2 16 9.6 22.4 6.4 6.4 12.8 9.6 22.4 9.6 9.6 0 16-3.2 22.4-9.6l704-710.4c3.2-6.4 6.4-12.8 6.4-22.4Zm-646.4 528c-76.8-70.4-128-128-153.6-172.8 28.8-48 80-105.6 153.6-172.8C304 272 400 230.4 512 224c64 3.2 124.8 19.2 176 44.8l-54.4 54.4C598.4 300.8 560 288 512 288c-64 0-115.2 22.4-160 64s-64 96-64 160c0 48 12.8 89.6 35.2 124.8L256 707.2c-9.6-6.4-19.2-16-25.6-22.4Zm140.8-96c-12.8-22.4-19.2-48-19.2-76.8 0-44.8 16-83.2 48-112 32-28.8 67.2-48 112-48 28.8 0 54.4 6.4 73.6 19.2zM889.599 336c-12.8-16-28.8-28.8-41.6-41.6l-48 48c73.6 67.2 124.8 124.8 150.4 169.6-28.8 48-80 105.6-153.6 172.8-73.6 67.2-172.8 108.8-284.8 115.2-51.2-3.2-99.2-12.8-140.8-28.8l-48 48c57.6 22.4 118.4 38.4 188.8 44.8 160-16 288-73.6 377.6-176C979.199 585.6 1024 528 1024 512s-48.001-73.6-134.401-176Z"
      }),
      b("path", {
        fill: "currentColor",
        d: "M511.998 672c-12.8 0-25.6-3.2-38.4-6.4l-51.2 51.2c28.8 12.8 57.6 19.2 89.6 19.2 64 0 115.2-22.4 160-64 41.6-41.6 64-96 64-160 0-32-6.4-64-19.2-89.6l-51.2 51.2c3.2 12.8 6.4 25.6 6.4 38.4 0 44.8-16 83.2-48 112-32 28.8-67.2 48-112 48Z"
      })
    ]));
  }
}), _S = kS, xS = /* @__PURE__ */ J({
  name: "InfoFilled",
  __name: "info-filled",
  setup(t) {
    return (e, n) => (S(), D("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 1024 1024"
    }, [
      b("path", {
        fill: "currentColor",
        d: "M512 64a448 448 0 1 1 0 896.064A448 448 0 0 1 512 64m67.2 275.072c33.28 0 60.288-23.104 60.288-57.344s-27.072-57.344-60.288-57.344c-33.28 0-60.16 23.104-60.16 57.344s26.88 57.344 60.16 57.344M590.912 699.2c0-6.848 2.368-24.64 1.024-34.752l-52.608 60.544c-10.88 11.456-24.512 19.392-30.912 17.28a12.992 12.992 0 0 1-8.256-14.72l87.68-276.992c7.168-35.136-12.544-67.2-54.336-71.296-44.096 0-108.992 44.736-148.48 101.504 0 6.784-1.28 23.68.064 33.792l52.544-60.608c10.88-11.328 23.552-19.328 29.952-17.152a12.8 12.8 0 0 1 7.808 16.128L388.48 728.576c-10.048 32.256 8.96 63.872 55.04 71.04 67.84 0 107.904-43.648 147.456-100.416z"
      })
    ]));
  }
}), AS = xS, ES = /* @__PURE__ */ J({
  name: "Loading",
  __name: "loading",
  setup(t) {
    return (e, n) => (S(), D("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 1024 1024"
    }, [
      b("path", {
        fill: "currentColor",
        d: "M512 64a32 32 0 0 1 32 32v192a32 32 0 0 1-64 0V96a32 32 0 0 1 32-32m0 640a32 32 0 0 1 32 32v192a32 32 0 1 1-64 0V736a32 32 0 0 1 32-32m448-192a32 32 0 0 1-32 32H736a32 32 0 1 1 0-64h192a32 32 0 0 1 32 32m-640 0a32 32 0 0 1-32 32H96a32 32 0 0 1 0-64h192a32 32 0 0 1 32 32M195.2 195.2a32 32 0 0 1 45.248 0L376.32 331.008a32 32 0 0 1-45.248 45.248L195.2 240.448a32 32 0 0 1 0-45.248zm452.544 452.544a32 32 0 0 1 45.248 0L828.8 783.552a32 32 0 0 1-45.248 45.248L647.744 692.992a32 32 0 0 1 0-45.248zM828.8 195.264a32 32 0 0 1 0 45.184L692.992 376.32a32 32 0 0 1-45.248-45.248l135.808-135.808a32 32 0 0 1 45.248 0m-452.544 452.48a32 32 0 0 1 0 45.248L240.448 828.8a32 32 0 0 1-45.248-45.248l135.808-135.808a32 32 0 0 1 45.248 0z"
      })
    ]));
  }
}), mp = ES, TS = /* @__PURE__ */ J({
  name: "Minus",
  __name: "minus",
  setup(t) {
    return (e, n) => (S(), D("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 1024 1024"
    }, [
      b("path", {
        fill: "currentColor",
        d: "M128 544h768a32 32 0 1 0 0-64H128a32 32 0 0 0 0 64"
      })
    ]));
  }
}), MS = TS, OS = /* @__PURE__ */ J({
  name: "Plus",
  __name: "plus",
  setup(t) {
    return (e, n) => (S(), D("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 1024 1024"
    }, [
      b("path", {
        fill: "currentColor",
        d: "M480 480V128a32 32 0 0 1 64 0v352h352a32 32 0 1 1 0 64H544v352a32 32 0 1 1-64 0V544H128a32 32 0 0 1 0-64z"
      })
    ]));
  }
}), DS = OS, PS = /* @__PURE__ */ J({
  name: "SuccessFilled",
  __name: "success-filled",
  setup(t) {
    return (e, n) => (S(), D("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 1024 1024"
    }, [
      b("path", {
        fill: "currentColor",
        d: "M512 64a448 448 0 1 1 0 896 448 448 0 0 1 0-896m-55.808 536.384-99.52-99.584a38.4 38.4 0 1 0-54.336 54.336l126.72 126.72a38.272 38.272 0 0 0 54.336 0l262.4-262.464a38.4 38.4 0 1 0-54.272-54.336z"
      })
    ]));
  }
}), IS = PS, RS = /* @__PURE__ */ J({
  name: "View",
  __name: "view",
  setup(t) {
    return (e, n) => (S(), D("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 1024 1024"
    }, [
      b("path", {
        fill: "currentColor",
        d: "M512 160c320 0 512 352 512 352S832 864 512 864 0 512 0 512s192-352 512-352m0 64c-225.28 0-384.128 208.064-436.8 288 52.608 79.872 211.456 288 436.8 288 225.28 0 384.128-208.064 436.8-288-52.608-79.872-211.456-288-436.8-288zm0 64a224 224 0 1 1 0 448 224 224 0 0 1 0-448m0 64a160.192 160.192 0 0 0-160 160c0 88.192 71.744 160 160 160s160-71.808 160-160-71.744-160-160-160"
      })
    ]));
  }
}), LS = RS, BS = /* @__PURE__ */ J({
  name: "WarningFilled",
  __name: "warning-filled",
  setup(t) {
    return (e, n) => (S(), D("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 1024 1024"
    }, [
      b("path", {
        fill: "currentColor",
        d: "M512 64a448 448 0 1 1 0 896 448 448 0 0 1 0-896m0 192a58.432 58.432 0 0 0-58.24 63.744l23.36 256.384a35.072 35.072 0 0 0 69.76 0l23.296-256.384A58.432 58.432 0 0 0 512 256m0 512a51.2 51.2 0 1 0 0-102.4 51.2 51.2 0 0 0 0 102.4"
      })
    ]));
  }
}), $S = BS;
const qn = re([
  String,
  Object,
  Function
]), vp = {
  Close: qr
}, FS = {
  Close: qr
}, Yr = {
  success: IS,
  warning: $S,
  error: wS,
  info: AS
}, yp = {
  validating: mp,
  success: yS,
  error: Uc
}, bp = () => Ke && /firefox/i.test(window.navigator.userAgent);
let Vt;
const NS = {
  height: "0",
  visibility: "hidden",
  overflow: bp() ? "" : "hidden",
  position: "absolute",
  "z-index": "-1000",
  top: "0",
  right: "0"
}, VS = [
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
function zS(t) {
  const e = window.getComputedStyle(t), n = e.getPropertyValue("box-sizing"), i = Number.parseFloat(e.getPropertyValue("padding-bottom")) + Number.parseFloat(e.getPropertyValue("padding-top")), s = Number.parseFloat(e.getPropertyValue("border-bottom-width")) + Number.parseFloat(e.getPropertyValue("border-top-width"));
  return { contextStyle: VS.map((r) => [
    r,
    e.getPropertyValue(r)
  ]), paddingSize: i, borderSize: s, boxSizing: n };
}
function Lf(t, e = 1, n) {
  var i;
  Vt || (Vt = document.createElement("textarea"), document.body.appendChild(Vt));
  const { paddingSize: s, borderSize: o, boxSizing: r, contextStyle: l } = zS(t);
  l.forEach(([f, d]) => Vt?.style.setProperty(f, d)), Object.entries(NS).forEach(([f, d]) => Vt?.style.setProperty(f, d, "important")), Vt.value = t.value || t.placeholder || "";
  let a = Vt.scrollHeight;
  const c = {};
  r === "border-box" ? a = a + o : r === "content-box" && (a = a - s), Vt.value = "";
  const u = Vt.scrollHeight - s;
  if (Fe(e)) {
    let f = u * e;
    r === "border-box" && (f = f + s + o), a = Math.max(f, a), c.minHeight = `${f}px`;
  }
  if (Fe(n)) {
    let f = u * n;
    r === "border-box" && (f = f + s + o), a = Math.min(f, a);
  }
  return c.height = `${a}px`, (i = Vt.parentNode) == null || i.removeChild(Vt), Vt = void 0, c;
}
const wp = (t) => t, HS = Ee({
  ariaLabel: String,
  ariaOrientation: {
    type: String,
    values: ["horizontal", "vertical", "undefined"]
  },
  ariaControls: String
}), Hs = (t) => Cw(HS, t), WS = Ee({
  id: {
    type: String,
    default: void 0
  },
  size: Vo,
  disabled: Boolean,
  modelValue: {
    type: re([
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
    type: re([Boolean, Object]),
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
    type: qn
  },
  prefixIcon: {
    type: qn
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
    type: re([Object, Array, String]),
    default: () => wp({})
  },
  autofocus: Boolean,
  rows: {
    type: Number,
    default: 2
  },
  ...Hs(["ariaLabel"])
}), GS = {
  [St]: (t) => Qt(t),
  input: (t) => Qt(t),
  change: (t) => Qt(t),
  focus: (t) => t instanceof FocusEvent,
  blur: (t) => t instanceof FocusEvent,
  clear: () => !0,
  mouseleave: (t) => t instanceof MouseEvent,
  mouseenter: (t) => t instanceof MouseEvent,
  keydown: (t) => t instanceof Event,
  compositionstart: (t) => t instanceof CompositionEvent,
  compositionupdate: (t) => t instanceof CompositionEvent,
  compositionend: (t) => t instanceof CompositionEvent
}, jS = ["class", "style"], KS = /^on[A-Z]/, US = (t = {}) => {
  const { excludeListeners: e = !1, excludeKeys: n } = t, i = C(() => (n?.value || []).concat(jS)), s = pt();
  return s ? C(() => {
    var o;
    return jr(Object.entries((o = s.proxy) == null ? void 0 : o.$attrs).filter(([r]) => !i.value.includes(r) && !(e && KS.test(r))));
  }) : C(() => ({}));
}, qc = Symbol("formContextKey"), Jr = Symbol("formItemContextKey"), Bf = {
  prefix: Math.floor(Math.random() * 1e4),
  current: 0
}, qS = Symbol("elIdInjection"), Sp = () => pt() ? de(qS, Bf) : Bf, Li = (t) => {
  const e = Sp(), n = Lc();
  return Dw(() => p(t) || `${n.value}-id-${e.prefix}-${e.current++}`);
}, Al = () => {
  const t = de(qc, void 0), e = de(Jr, void 0);
  return {
    form: t,
    formItem: e
  };
}, Cp = (t, {
  formItemContext: e,
  disableIdGeneration: n,
  disableIdManagement: i
}) => {
  n || (n = M(!1)), i || (i = M(!1));
  const s = M();
  let o;
  const r = C(() => {
    var l;
    return !!(!(t.label || t.ariaLabel) && e && e.inputIds && ((l = e.inputIds) == null ? void 0 : l.length) <= 1);
  });
  return qe(() => {
    o = ae([Mt(t, "id"), n], ([l, a]) => {
      const c = l ?? (a ? void 0 : Li().value);
      c !== s.value && (e?.removeInputId && (s.value && e.removeInputId(s.value), !i?.value && !a && c && e.addInputId(c)), s.value = c);
    }, { immediate: !0 });
  }), wo(() => {
    o && o(), e?.removeInputId && s.value && e.removeInputId(s.value);
  }), {
    isLabeledByFormItem: r,
    inputId: s
  };
}, kp = (t) => {
  const e = pt();
  return C(() => {
    var n, i;
    return (i = (n = e?.proxy) == null ? void 0 : n.$props) == null ? void 0 : i[t];
  });
}, Ws = (t, e = {}) => {
  const n = M(void 0), i = e.prop ? n : kp("size"), s = e.global ? n : eS(), o = e.form ? { size: void 0 } : de(qc, void 0), r = e.formItem ? { size: void 0 } : de(Jr, void 0);
  return C(() => i.value || p(t) || r?.size || o?.size || s.value || "");
}, El = (t) => {
  const e = kp("disabled"), n = de(qc, void 0);
  return C(() => e.value || p(t) || n?.disabled || !1);
};
function _p(t, {
  beforeFocus: e,
  afterFocus: n,
  beforeBlur: i,
  afterBlur: s
} = {}) {
  const o = pt(), { emit: r } = o, l = es(), a = M(!1), c = (d) => {
    tt(e) && e(d) || a.value || (a.value = !0, r("focus", d), n?.());
  }, u = (d) => {
    var h;
    tt(i) && i(d) || d.relatedTarget && ((h = l.value) != null && h.contains(d.relatedTarget)) || (a.value = !1, r("blur", d), s?.());
  }, f = () => {
    var d, h;
    (d = l.value) != null && d.contains(document.activeElement) && l.value !== document.activeElement || (h = t.value) == null || h.focus();
  };
  return ae(l, (d) => {
    d && d.setAttribute("tabindex", "-1");
  }), an(l, "focus", c, !0), an(l, "blur", u, !0), an(l, "click", f, !0), {
    isFocused: a,
    wrapperRef: l,
    handleFocus: c,
    handleBlur: u
  };
}
const YS = (t) => /([\uAC00-\uD7AF\u3130-\u318F])+/gi.test(t);
function xp({
  afterComposition: t,
  emit: e
}) {
  const n = M(!1), i = (l) => {
    e?.("compositionstart", l), n.value = !0;
  }, s = (l) => {
    var a;
    e?.("compositionupdate", l);
    const c = (a = l.target) == null ? void 0 : a.value, u = c[c.length - 1] || "";
    n.value = !YS(u);
  }, o = (l) => {
    e?.("compositionend", l), n.value && (n.value = !1, Ze(() => t(l)));
  };
  return {
    isComposing: n,
    handleComposition: (l) => {
      l.type === "compositionend" ? o(l) : s(l);
    },
    handleCompositionStart: i,
    handleCompositionUpdate: s,
    handleCompositionEnd: o
  };
}
function JS(t) {
  let e;
  function n() {
    if (t.value == null)
      return;
    const { selectionStart: s, selectionEnd: o, value: r } = t.value;
    if (s == null || o == null)
      return;
    const l = r.slice(0, Math.max(0, s)), a = r.slice(Math.max(0, o));
    e = {
      selectionStart: s,
      selectionEnd: o,
      value: r,
      beforeTxt: l,
      afterTxt: a
    };
  }
  function i() {
    if (t.value == null || e == null)
      return;
    const { value: s } = t.value, { beforeTxt: o, afterTxt: r, selectionStart: l } = e;
    if (o == null || r == null || l == null)
      return;
    let a = s.length;
    if (s.endsWith(r))
      a = s.length - r.length;
    else if (s.startsWith(o))
      a = o.length;
    else {
      const c = o[l - 1], u = s.indexOf(c, l - 1);
      u !== -1 && (a = u + 1);
    }
    t.value.setSelectionRange(a, a);
  }
  return [n, i];
}
const XS = "ElInput", ZS = J({
  name: XS,
  inheritAttrs: !1
}), QS = /* @__PURE__ */ J({
  ...ZS,
  props: WS,
  emits: GS,
  setup(t, { expose: e, emit: n }) {
    const i = t, s = s0(), o = US(), r = Ic(), l = C(() => [
      i.type === "textarea" ? m.b() : g.b(),
      g.m(d.value),
      g.is("disabled", h.value),
      g.is("exceed", xe.value),
      {
        [g.b("group")]: r.prepend || r.append,
        [g.m("prefix")]: r.prefix || i.prefixIcon,
        [g.m("suffix")]: r.suffix || i.suffixIcon || i.clearable || i.showPassword,
        [g.bm("suffix", "password-clear")]: oe.value && le.value,
        [g.b("hidden")]: i.type === "hidden"
      },
      s.class
    ]), a = C(() => [
      g.e("wrapper"),
      g.is("focus", z.value)
    ]), { form: c, formItem: u } = Al(), { inputId: f } = Cp(i, {
      formItemContext: u
    }), d = Ws(), h = El(), g = Le("input"), m = Le("textarea"), y = es(), v = es(), w = M(!1), _ = M(!1), x = M(), k = es(i.inputStyle), T = C(() => y.value || v.value), { wrapperRef: A, isFocused: z, handleFocus: B, handleBlur: q } = _p(T, {
      beforeFocus() {
        return h.value;
      },
      afterBlur() {
        var G;
        i.validateEvent && ((G = u?.validate) == null || G.call(u, "blur").catch((fe) => void 0));
      }
    }), $ = C(() => {
      var G;
      return (G = c?.statusIcon) != null ? G : !1;
    }), V = C(() => u?.validateState || ""), X = C(() => V.value && yp[V.value]), ce = C(() => _.value ? LS : _S), O = C(() => [
      s.style
    ]), I = C(() => [
      i.inputStyle,
      k.value,
      { resize: i.resize }
    ]), L = C(() => ci(i.modelValue) ? "" : String(i.modelValue)), oe = C(() => i.clearable && !h.value && !i.readonly && !!L.value && (z.value || w.value)), le = C(() => i.showPassword && !h.value && !!L.value && (!!L.value || z.value)), we = C(() => i.showWordLimit && !!i.maxlength && (i.type === "text" || i.type === "textarea") && !h.value && !i.readonly && !i.showPassword), Te = C(() => L.value.length), xe = C(() => !!we.value && Te.value > Number(i.maxlength)), be = C(() => !!r.suffix || !!i.suffixIcon || oe.value || i.showPassword || we.value || !!V.value && $.value), [Be, Ve] = JS(y);
    Bn(v, (G) => {
      if (Ie(), !we.value || i.resize !== "both")
        return;
      const fe = G[0], { width: Re } = fe.contentRect;
      x.value = {
        right: `calc(100% - ${Re + 15 + 6}px)`
      };
    });
    const Oe = () => {
      const { type: G, autosize: fe } = i;
      if (!(!Ke || G !== "textarea" || !v.value))
        if (fe) {
          const Re = rn(fe) ? fe.minRows : void 0, vt = rn(fe) ? fe.maxRows : void 0, _t = Lf(v.value, Re, vt);
          k.value = {
            overflowY: "hidden",
            ..._t
          }, Ze(() => {
            v.value.offsetHeight, k.value = _t;
          });
        } else
          k.value = {
            minHeight: Lf(v.value).minHeight
          };
    }, Ie = ((G) => {
      let fe = !1;
      return () => {
        var Re;
        if (fe || !i.autosize)
          return;
        ((Re = v.value) == null ? void 0 : Re.offsetParent) === null || (G(), fe = !0);
      };
    })(Oe), Ft = () => {
      const G = T.value, fe = i.formatter ? i.formatter(L.value) : L.value;
      !G || G.value === fe || (G.value = fe);
    }, jt = async (G) => {
      Be();
      let { value: fe } = G.target;
      if (i.formatter && i.parser && (fe = i.parser(fe)), !wn.value) {
        if (fe === L.value) {
          Ft();
          return;
        }
        n(St, fe), n(Ss, fe), await Ze(), Ft(), Ve();
      }
    }, Kt = (G) => {
      let { value: fe } = G.target;
      i.formatter && i.parser && (fe = i.parser(fe)), n(As, fe);
    }, {
      isComposing: wn,
      handleCompositionStart: Ut,
      handleCompositionUpdate: Sn,
      handleCompositionEnd: sn
    } = xp({ emit: n, afterComposition: jt }), Nt = () => {
      Be(), _.value = !_.value, setTimeout(Ve);
    }, Dn = () => {
      var G;
      return (G = T.value) == null ? void 0 : G.focus();
    }, mt = () => {
      var G;
      return (G = T.value) == null ? void 0 : G.blur();
    }, H = (G) => {
      w.value = !1, n("mouseleave", G);
    }, ie = (G) => {
      w.value = !0, n("mouseenter", G);
    }, me = (G) => {
      n("keydown", G);
    }, ke = () => {
      var G;
      (G = T.value) == null || G.select();
    }, it = () => {
      n(St, ""), n(As, ""), n("clear"), n(Ss, "");
    };
    return ae(() => i.modelValue, () => {
      var G;
      Ze(() => Oe()), i.validateEvent && ((G = u?.validate) == null || G.call(u, "change").catch((fe) => void 0));
    }), ae(L, () => Ft()), ae(() => i.type, async () => {
      await Ze(), Ft(), Oe();
    }), qe(() => {
      !i.formatter && i.parser, Ft(), Ze(Oe);
    }), e({
      input: y,
      textarea: v,
      ref: T,
      textareaStyle: I,
      autosize: Mt(i, "autosize"),
      isComposing: wn,
      focus: Dn,
      blur: mt,
      select: ke,
      clear: it,
      resizeTextarea: Oe
    }), (G, fe) => (S(), D("div", {
      class: F([
        p(l),
        {
          [p(g).bm("group", "append")]: G.$slots.append,
          [p(g).bm("group", "prepend")]: G.$slots.prepend
        }
      ]),
      style: je(p(O)),
      onMouseenter: ie,
      onMouseleave: H
    }, [
      N(" input "),
      G.type !== "textarea" ? (S(), D(ye, { key: 0 }, [
        N(" prepend slot "),
        G.$slots.prepend ? (S(), D("div", {
          key: 0,
          class: F(p(g).be("group", "prepend"))
        }, [
          ne(G.$slots, "prepend")
        ], 2)) : N("v-if", !0),
        b("div", {
          ref_key: "wrapperRef",
          ref: A,
          class: F(p(a))
        }, [
          N(" prefix slot "),
          G.$slots.prefix || G.prefixIcon ? (S(), D("span", {
            key: 0,
            class: F(p(g).e("prefix"))
          }, [
            b("span", {
              class: F(p(g).e("prefix-inner"))
            }, [
              ne(G.$slots, "prefix"),
              G.prefixIcon ? (S(), te(p(ft), {
                key: 0,
                class: F(p(g).e("icon"))
              }, {
                default: j(() => [
                  (S(), te(Rt(G.prefixIcon)))
                ]),
                _: 1
              }, 8, ["class"])) : N("v-if", !0)
            ], 2)
          ], 2)) : N("v-if", !0),
          b("input", hn({
            id: p(f),
            ref_key: "input",
            ref: y,
            class: p(g).e("inner")
          }, p(o), {
            minlength: G.minlength,
            maxlength: G.maxlength,
            type: G.showPassword ? _.value ? "text" : "password" : G.type,
            disabled: p(h),
            readonly: G.readonly,
            autocomplete: G.autocomplete,
            tabindex: G.tabindex,
            "aria-label": G.ariaLabel,
            placeholder: G.placeholder,
            style: G.inputStyle,
            form: G.form,
            autofocus: G.autofocus,
            role: G.containerRole,
            onCompositionstart: p(Ut),
            onCompositionupdate: p(Sn),
            onCompositionend: p(sn),
            onInput: jt,
            onChange: Kt,
            onKeydown: me
          }), null, 16, ["id", "minlength", "maxlength", "type", "disabled", "readonly", "autocomplete", "tabindex", "aria-label", "placeholder", "form", "autofocus", "role", "onCompositionstart", "onCompositionupdate", "onCompositionend"]),
          N(" suffix slot "),
          p(be) ? (S(), D("span", {
            key: 1,
            class: F(p(g).e("suffix"))
          }, [
            b("span", {
              class: F(p(g).e("suffix-inner"))
            }, [
              !p(oe) || !p(le) || !p(we) ? (S(), D(ye, { key: 0 }, [
                ne(G.$slots, "suffix"),
                G.suffixIcon ? (S(), te(p(ft), {
                  key: 0,
                  class: F(p(g).e("icon"))
                }, {
                  default: j(() => [
                    (S(), te(Rt(G.suffixIcon)))
                  ]),
                  _: 1
                }, 8, ["class"])) : N("v-if", !0)
              ], 64)) : N("v-if", !0),
              p(oe) ? (S(), te(p(ft), {
                key: 1,
                class: F([p(g).e("icon"), p(g).e("clear")]),
                onMousedown: Xe(p(Pi), ["prevent"]),
                onClick: it
              }, {
                default: j(() => [
                  U(p(Uc))
                ]),
                _: 1
              }, 8, ["class", "onMousedown"])) : N("v-if", !0),
              p(le) ? (S(), te(p(ft), {
                key: 2,
                class: F([p(g).e("icon"), p(g).e("password")]),
                onClick: Nt
              }, {
                default: j(() => [
                  (S(), te(Rt(p(ce))))
                ]),
                _: 1
              }, 8, ["class"])) : N("v-if", !0),
              p(we) ? (S(), D("span", {
                key: 3,
                class: F(p(g).e("count"))
              }, [
                b("span", {
                  class: F(p(g).e("count-inner"))
                }, R(p(Te)) + " / " + R(G.maxlength), 3)
              ], 2)) : N("v-if", !0),
              p(V) && p(X) && p($) ? (S(), te(p(ft), {
                key: 4,
                class: F([
                  p(g).e("icon"),
                  p(g).e("validateIcon"),
                  p(g).is("loading", p(V) === "validating")
                ])
              }, {
                default: j(() => [
                  (S(), te(Rt(p(X))))
                ]),
                _: 1
              }, 8, ["class"])) : N("v-if", !0)
            ], 2)
          ], 2)) : N("v-if", !0)
        ], 2),
        N(" append slot "),
        G.$slots.append ? (S(), D("div", {
          key: 1,
          class: F(p(g).be("group", "append"))
        }, [
          ne(G.$slots, "append")
        ], 2)) : N("v-if", !0)
      ], 64)) : (S(), D(ye, { key: 1 }, [
        N(" textarea "),
        b("textarea", hn({
          id: p(f),
          ref_key: "textarea",
          ref: v,
          class: [p(m).e("inner"), p(g).is("focus", p(z))]
        }, p(o), {
          minlength: G.minlength,
          maxlength: G.maxlength,
          tabindex: G.tabindex,
          disabled: p(h),
          readonly: G.readonly,
          autocomplete: G.autocomplete,
          style: p(I),
          "aria-label": G.ariaLabel,
          placeholder: G.placeholder,
          form: G.form,
          autofocus: G.autofocus,
          rows: G.rows,
          role: G.containerRole,
          onCompositionstart: p(Ut),
          onCompositionupdate: p(Sn),
          onCompositionend: p(sn),
          onInput: jt,
          onFocus: p(B),
          onBlur: p(q),
          onChange: Kt,
          onKeydown: me
        }), null, 16, ["id", "minlength", "maxlength", "tabindex", "disabled", "readonly", "autocomplete", "aria-label", "placeholder", "form", "autofocus", "rows", "role", "onCompositionstart", "onCompositionupdate", "onCompositionend", "onFocus", "onBlur"]),
        p(we) ? (S(), D("span", {
          key: 0,
          style: je(x.value),
          class: F(p(g).e("count"))
        }, R(p(Te)) + " / " + R(G.maxlength), 7)) : N("v-if", !0)
      ], 64))
    ], 38));
  }
});
var eC = /* @__PURE__ */ Se(QS, [["__file", "input.vue"]]);
const tC = nn(eC), ds = 4, nC = {
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
}, iC = ({
  move: t,
  size: e,
  bar: n
}) => ({
  [n.size]: e,
  transform: `translate${n.axis}(${t}%)`
}), Yc = Symbol("scrollbarContextKey"), sC = Ee({
  vertical: Boolean,
  size: String,
  move: Number,
  ratio: {
    type: Number,
    required: !0
  },
  always: Boolean
}), oC = "Thumb", rC = /* @__PURE__ */ J({
  __name: "thumb",
  props: sC,
  setup(t) {
    const e = t, n = de(Yc), i = Le("scrollbar");
    n || Gc(oC, "can not inject scrollbar context");
    const s = M(), o = M(), r = M({}), l = M(!1);
    let a = !1, c = !1, u = Ke ? document.onselectstart : null;
    const f = C(() => nC[e.vertical ? "vertical" : "horizontal"]), d = C(() => iC({
      size: e.size,
      move: e.move,
      bar: f.value
    })), h = C(() => s.value[f.value.offset] ** 2 / n.wrapElement[f.value.scrollSize] / e.ratio / o.value[f.value.offset]), g = (T) => {
      var A;
      if (T.stopPropagation(), T.ctrlKey || [1, 2].includes(T.button))
        return;
      (A = window.getSelection()) == null || A.removeAllRanges(), y(T);
      const z = T.currentTarget;
      z && (r.value[f.value.axis] = z[f.value.offset] - (T[f.value.client] - z.getBoundingClientRect()[f.value.direction]));
    }, m = (T) => {
      if (!o.value || !s.value || !n.wrapElement)
        return;
      const A = Math.abs(T.target.getBoundingClientRect()[f.value.direction] - T[f.value.client]), z = o.value[f.value.offset] / 2, B = (A - z) * 100 * h.value / s.value[f.value.offset];
      n.wrapElement[f.value.scroll] = B * n.wrapElement[f.value.scrollSize] / 100;
    }, y = (T) => {
      T.stopImmediatePropagation(), a = !0, document.addEventListener("mousemove", v), document.addEventListener("mouseup", w), u = document.onselectstart, document.onselectstart = () => !1;
    }, v = (T) => {
      if (!s.value || !o.value || a === !1)
        return;
      const A = r.value[f.value.axis];
      if (!A)
        return;
      const z = (s.value.getBoundingClientRect()[f.value.direction] - T[f.value.client]) * -1, B = o.value[f.value.offset] - A, q = (z - B) * 100 * h.value / s.value[f.value.offset];
      n.wrapElement[f.value.scroll] = q * n.wrapElement[f.value.scrollSize] / 100;
    }, w = () => {
      a = !1, r.value[f.value.axis] = 0, document.removeEventListener("mousemove", v), document.removeEventListener("mouseup", w), k(), c && (l.value = !1);
    }, _ = () => {
      c = !1, l.value = !!e.size;
    }, x = () => {
      c = !0, l.value = a;
    };
    tn(() => {
      k(), document.removeEventListener("mouseup", w);
    });
    const k = () => {
      document.onselectstart !== u && (document.onselectstart = u);
    };
    return an(Mt(n, "scrollbarElement"), "mousemove", _), an(Mt(n, "scrollbarElement"), "mouseleave", x), (T, A) => (S(), te(pi, {
      name: p(i).b("fade"),
      persisted: ""
    }, {
      default: j(() => [
        Bt(b("div", {
          ref_key: "instance",
          ref: s,
          class: F([p(i).e("bar"), p(i).is(p(f).key)]),
          onMousedown: m
        }, [
          b("div", {
            ref_key: "thumb",
            ref: o,
            class: F(p(i).e("thumb")),
            style: je(p(d)),
            onMousedown: g
          }, null, 38)
        ], 34), [
          [Kn, T.always || l.value]
        ])
      ]),
      _: 1
    }, 8, ["name"]));
  }
});
var $f = /* @__PURE__ */ Se(rC, [["__file", "thumb.vue"]]);
const lC = Ee({
  always: {
    type: Boolean,
    default: !0
  },
  minSize: {
    type: Number,
    required: !0
  }
}), aC = /* @__PURE__ */ J({
  __name: "bar",
  props: lC,
  setup(t, { expose: e }) {
    const n = t, i = de(Yc), s = M(0), o = M(0), r = M(""), l = M(""), a = M(1), c = M(1);
    return e({
      handleScroll: (d) => {
        if (d) {
          const h = d.offsetHeight - ds, g = d.offsetWidth - ds;
          o.value = d.scrollTop * 100 / h * a.value, s.value = d.scrollLeft * 100 / g * c.value;
        }
      },
      update: () => {
        const d = i?.wrapElement;
        if (!d)
          return;
        const h = d.offsetHeight - ds, g = d.offsetWidth - ds, m = h ** 2 / d.scrollHeight, y = g ** 2 / d.scrollWidth, v = Math.max(m, n.minSize), w = Math.max(y, n.minSize);
        a.value = m / (h - m) / (v / (h - v)), c.value = y / (g - y) / (w / (g - w)), l.value = v + ds < h ? `${v}px` : "", r.value = w + ds < g ? `${w}px` : "";
      }
    }), (d, h) => (S(), D(ye, null, [
      U($f, {
        move: s.value,
        ratio: c.value,
        size: r.value,
        always: d.always
      }, null, 8, ["move", "ratio", "size", "always"]),
      U($f, {
        move: o.value,
        ratio: a.value,
        size: l.value,
        vertical: "",
        always: d.always
      }, null, 8, ["move", "ratio", "size", "always"])
    ], 64));
  }
});
var cC = /* @__PURE__ */ Se(aC, [["__file", "bar.vue"]]);
const uC = Ee({
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
    type: re([String, Object, Array]),
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
  ...Hs(["ariaLabel", "ariaOrientation"])
}), fC = {
  scroll: ({
    scrollTop: t,
    scrollLeft: e
  }) => [t, e].every(Fe)
}, dC = "ElScrollbar", hC = J({
  name: dC
}), pC = /* @__PURE__ */ J({
  ...hC,
  props: uC,
  emits: fC,
  setup(t, { expose: e, emit: n }) {
    const i = t, s = Le("scrollbar");
    let o, r, l = 0, a = 0;
    const c = M(), u = M(), f = M(), d = M(), h = C(() => {
      const k = {};
      return i.height && (k.height = fi(i.height)), i.maxHeight && (k.maxHeight = fi(i.maxHeight)), [i.wrapStyle, k];
    }), g = C(() => [
      i.wrapClass,
      s.e("wrap"),
      { [s.em("wrap", "hidden-default")]: !i.native }
    ]), m = C(() => [s.e("view"), i.viewClass]), y = () => {
      var k;
      u.value && ((k = d.value) == null || k.handleScroll(u.value), l = u.value.scrollTop, a = u.value.scrollLeft, n("scroll", {
        scrollTop: u.value.scrollTop,
        scrollLeft: u.value.scrollLeft
      }));
    };
    function v(k, T) {
      rn(k) ? u.value.scrollTo(k) : Fe(k) && Fe(T) && u.value.scrollTo(k, T);
    }
    const w = (k) => {
      Fe(k) && (u.value.scrollTop = k);
    }, _ = (k) => {
      Fe(k) && (u.value.scrollLeft = k);
    }, x = () => {
      var k;
      (k = d.value) == null || k.update();
    };
    return ae(() => i.noresize, (k) => {
      k ? (o?.(), r?.()) : ({ stop: o } = Bn(f, x), r = an("resize", x));
    }, { immediate: !0 }), ae(() => [i.maxHeight, i.height], () => {
      i.native || Ze(() => {
        var k;
        x(), u.value && ((k = d.value) == null || k.handleScroll(u.value));
      });
    }), gt(Yc, Ii({
      scrollbarElement: c,
      wrapElement: u
    })), o0(() => {
      u.value && (u.value.scrollTop = l, u.value.scrollLeft = a);
    }), qe(() => {
      i.native || Ze(() => {
        x();
      });
    }), Rh(() => x()), e({
      wrapRef: u,
      update: x,
      scrollTo: v,
      setScrollTop: w,
      setScrollLeft: _,
      handleScroll: y
    }), (k, T) => (S(), D("div", {
      ref_key: "scrollbarRef",
      ref: c,
      class: F(p(s).b())
    }, [
      b("div", {
        ref_key: "wrapRef",
        ref: u,
        class: F(p(g)),
        style: je(p(h)),
        tabindex: k.tabindex,
        onScroll: y
      }, [
        (S(), te(Rt(k.tag), {
          id: k.id,
          ref_key: "resizeRef",
          ref: f,
          class: F(p(m)),
          style: je(k.viewStyle),
          role: k.role,
          "aria-label": k.ariaLabel,
          "aria-orientation": k.ariaOrientation
        }, {
          default: j(() => [
            ne(k.$slots, "default")
          ]),
          _: 3
        }, 8, ["id", "class", "style", "role", "aria-label", "aria-orientation"]))
      ], 46, ["tabindex"]),
      k.native ? N("v-if", !0) : (S(), te(cC, {
        key: 0,
        ref_key: "barRef",
        ref: d,
        always: k.always,
        "min-size": k.minSize
      }, null, 8, ["always", "min-size"]))
    ], 2));
  }
});
var gC = /* @__PURE__ */ Se(pC, [["__file", "scrollbar.vue"]]);
const Ap = nn(gC), Jc = Symbol("popper"), Ep = Symbol("popperContent"), Tp = [
  "dialog",
  "grid",
  "group",
  "listbox",
  "menu",
  "navigation",
  "tooltip",
  "tree"
], Mp = Ee({
  role: {
    type: String,
    values: Tp,
    default: "tooltip"
  }
}), mC = J({
  name: "ElPopper",
  inheritAttrs: !1
}), vC = /* @__PURE__ */ J({
  ...mC,
  props: Mp,
  setup(t, { expose: e }) {
    const n = t, i = M(), s = M(), o = M(), r = M(), l = C(() => n.role), a = {
      triggerRef: i,
      popperInstanceRef: s,
      contentRef: o,
      referenceRef: r,
      role: l
    };
    return e(a), gt(Jc, a), (c, u) => ne(c.$slots, "default");
  }
});
var yC = /* @__PURE__ */ Se(vC, [["__file", "popper.vue"]]);
const Op = Ee({
  arrowOffset: {
    type: Number,
    default: 5
  }
}), bC = J({
  name: "ElPopperArrow",
  inheritAttrs: !1
}), wC = /* @__PURE__ */ J({
  ...bC,
  props: Op,
  setup(t, { expose: e }) {
    const n = t, i = Le("popper"), { arrowOffset: s, arrowRef: o, arrowStyle: r } = de(Ep, void 0);
    return ae(() => n.arrowOffset, (l) => {
      s.value = l;
    }), tn(() => {
      o.value = void 0;
    }), e({
      arrowRef: o
    }), (l, a) => (S(), D("span", {
      ref_key: "arrowRef",
      ref: o,
      class: F(p(i).e("arrow")),
      style: je(p(r)),
      "data-popper-arrow": ""
    }, null, 6));
  }
});
var SC = /* @__PURE__ */ Se(wC, [["__file", "arrow.vue"]]);
const Dp = Ee({
  virtualRef: {
    type: re(Object)
  },
  virtualTriggering: Boolean,
  onMouseenter: {
    type: re(Function)
  },
  onMouseleave: {
    type: re(Function)
  },
  onClick: {
    type: re(Function)
  },
  onKeydown: {
    type: re(Function)
  },
  onFocus: {
    type: re(Function)
  },
  onBlur: {
    type: re(Function)
  },
  onContextmenu: {
    type: re(Function)
  },
  id: String,
  open: Boolean
}), Pp = Symbol("elForwardRef"), CC = (t) => {
  gt(Pp, {
    setForwardRef: (n) => {
      t.value = n;
    }
  });
}, kC = (t) => ({
  mounted(e) {
    t(e);
  },
  updated(e) {
    t(e);
  },
  unmounted() {
    t(null);
  }
}), Ia = (t) => {
  if (t.tabIndex > 0 || t.tabIndex === 0 && t.getAttribute("tabIndex") !== null)
    return !0;
  if (t.tabIndex < 0 || t.hasAttribute("disabled") || t.getAttribute("aria-disabled") === "true")
    return !1;
  switch (t.nodeName) {
    case "A":
      return !!t.href && t.rel !== "ignore";
    case "INPUT":
      return !(t.type === "hidden" || t.type === "file");
    case "BUTTON":
    case "SELECT":
    case "TEXTAREA":
      return !0;
    default:
      return !1;
  }
}, _C = "ElOnlyChild", Ip = J({
  name: _C,
  setup(t, {
    slots: e,
    attrs: n
  }) {
    var i;
    const s = de(Pp), o = kC((i = s?.setForwardRef) != null ? i : Pi);
    return () => {
      var r;
      const l = (r = e.default) == null ? void 0 : r.call(e, n);
      if (!l || l.length > 1)
        return null;
      const a = Rp(l);
      return a ? Bt(r0(a, n), [[o]]) : null;
    };
  }
});
function Rp(t) {
  if (!t)
    return null;
  const e = t;
  for (const n of e) {
    if (rn(n))
      switch (n.type) {
        case l0:
          continue;
        case Lh:
        case "svg":
          return Ff(n);
        case ye:
          return Rp(n.children);
        default:
          return n;
      }
    return Ff(n);
  }
  return null;
}
function Ff(t) {
  const e = Le("only-child");
  return U("span", {
    class: e.e("content")
  }, [t]);
}
const xC = J({
  name: "ElPopperTrigger",
  inheritAttrs: !1
}), AC = /* @__PURE__ */ J({
  ...xC,
  props: Dp,
  setup(t, { expose: e }) {
    const n = t, { role: i, triggerRef: s } = de(Jc, void 0);
    CC(s);
    const o = C(() => l.value ? n.id : void 0), r = C(() => {
      if (i && i.value === "tooltip")
        return n.open && n.id ? n.id : void 0;
    }), l = C(() => {
      if (i && i.value !== "tooltip")
        return i.value;
    }), a = C(() => l.value ? `${n.open}` : void 0);
    let c;
    const u = [
      "onMouseenter",
      "onMouseleave",
      "onClick",
      "onKeydown",
      "onFocus",
      "onBlur",
      "onContextmenu"
    ];
    return qe(() => {
      ae(() => n.virtualRef, (f) => {
        f && (s.value = ri(f));
      }, {
        immediate: !0
      }), ae(s, (f, d) => {
        c?.(), c = void 0, xn(f) && (u.forEach((h) => {
          var g;
          const m = n[h];
          m && (f.addEventListener(h.slice(2).toLowerCase(), m), (g = d?.removeEventListener) == null || g.call(d, h.slice(2).toLowerCase(), m));
        }), Ia(f) && (c = ae([o, r, l, a], (h) => {
          [
            "aria-controls",
            "aria-describedby",
            "aria-haspopup",
            "aria-expanded"
          ].forEach((g, m) => {
            ci(h[m]) ? f.removeAttribute(g) : f.setAttribute(g, h[m]);
          });
        }, { immediate: !0 }))), xn(d) && Ia(d) && [
          "aria-controls",
          "aria-describedby",
          "aria-haspopup",
          "aria-expanded"
        ].forEach((h) => d.removeAttribute(h));
      }, {
        immediate: !0
      });
    }), tn(() => {
      if (c?.(), c = void 0, s.value && xn(s.value)) {
        const f = s.value;
        u.forEach((d) => {
          const h = n[d];
          h && f.removeEventListener(d.slice(2).toLowerCase(), h);
        }), s.value = void 0;
      }
    }), e({
      triggerRef: s
    }), (f, d) => f.virtualTriggering ? N("v-if", !0) : (S(), te(p(Ip), hn({ key: 0 }, f.$attrs, {
      "aria-controls": p(o),
      "aria-describedby": p(r),
      "aria-expanded": p(a),
      "aria-haspopup": p(l)
    }), {
      default: j(() => [
        ne(f.$slots, "default")
      ]),
      _: 3
    }, 16, ["aria-controls", "aria-describedby", "aria-expanded", "aria-haspopup"]));
  }
});
var EC = /* @__PURE__ */ Se(AC, [["__file", "trigger.vue"]]);
const Zl = "focus-trap.focus-after-trapped", Ql = "focus-trap.focus-after-released", TC = "focus-trap.focusout-prevented", Nf = {
  cancelable: !0,
  bubbles: !1
}, MC = {
  cancelable: !0,
  bubbles: !1
}, Vf = "focusAfterTrapped", zf = "focusAfterReleased", Xc = Symbol("elFocusTrap"), Zc = M(), Tl = M(0), Qc = M(0);
let Qo = 0;
const Lp = (t) => {
  const e = [], n = document.createTreeWalker(t, NodeFilter.SHOW_ELEMENT, {
    acceptNode: (i) => {
      const s = i.tagName === "INPUT" && i.type === "hidden";
      return i.disabled || i.hidden || s ? NodeFilter.FILTER_SKIP : i.tabIndex >= 0 || i === document.activeElement ? NodeFilter.FILTER_ACCEPT : NodeFilter.FILTER_SKIP;
    }
  });
  for (; n.nextNode(); )
    e.push(n.currentNode);
  return e;
}, Hf = (t, e) => {
  for (const n of t)
    if (!OC(n, e))
      return n;
}, OC = (t, e) => {
  if (getComputedStyle(t).visibility === "hidden")
    return !0;
  for (; t; ) {
    if (e && t === e)
      return !1;
    if (getComputedStyle(t).display === "none")
      return !0;
    t = t.parentElement;
  }
  return !1;
}, DC = (t) => {
  const e = Lp(t), n = Hf(e, t), i = Hf(e.reverse(), t);
  return [n, i];
}, PC = (t) => t instanceof HTMLInputElement && "select" in t, ti = (t, e) => {
  if (t && t.focus) {
    const n = document.activeElement;
    let i = !1;
    xn(t) && !Ia(t) && !t.getAttribute("tabindex") && (t.setAttribute("tabindex", "-1"), i = !0), t.focus({ preventScroll: !0 }), Qc.value = window.performance.now(), t !== n && PC(t) && e && t.select(), xn(t) && i && t.removeAttribute("tabindex");
  }
};
function Wf(t, e) {
  const n = [...t], i = t.indexOf(e);
  return i !== -1 && n.splice(i, 1), n;
}
const IC = () => {
  let t = [];
  return {
    push: (i) => {
      const s = t[0];
      s && i !== s && s.pause(), t = Wf(t, i), t.unshift(i);
    },
    remove: (i) => {
      var s, o;
      t = Wf(t, i), (o = (s = t[0]) == null ? void 0 : s.resume) == null || o.call(s);
    }
  };
}, RC = (t, e = !1) => {
  const n = document.activeElement;
  for (const i of t)
    if (ti(i, e), document.activeElement !== n)
      return;
}, Gf = IC(), LC = () => Tl.value > Qc.value, er = () => {
  Zc.value = "pointer", Tl.value = window.performance.now();
}, jf = () => {
  Zc.value = "keyboard", Tl.value = window.performance.now();
}, BC = () => (qe(() => {
  Qo === 0 && (document.addEventListener("mousedown", er), document.addEventListener("touchstart", er), document.addEventListener("keydown", jf)), Qo++;
}), tn(() => {
  Qo--, Qo <= 0 && (document.removeEventListener("mousedown", er), document.removeEventListener("touchstart", er), document.removeEventListener("keydown", jf));
}), {
  focusReason: Zc,
  lastUserFocusTimestamp: Tl,
  lastAutomatedFocusTimestamp: Qc
}), tr = (t) => new CustomEvent(TC, {
  ...MC,
  detail: t
}), Ge = {
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
};
let vs = [];
const Kf = (t) => {
  t.code === Ge.esc && vs.forEach((e) => e(t));
}, $C = (t) => {
  qe(() => {
    vs.length === 0 && document.addEventListener("keydown", Kf), Ke && vs.push(t);
  }), tn(() => {
    vs = vs.filter((e) => e !== t), vs.length === 0 && Ke && document.removeEventListener("keydown", Kf);
  });
}, FC = J({
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
    Vf,
    zf,
    "focusin",
    "focusout",
    "focusout-prevented",
    "release-requested"
  ],
  setup(t, { emit: e }) {
    const n = M();
    let i, s;
    const { focusReason: o } = BC();
    $C((g) => {
      t.trapped && !r.paused && e("release-requested", g);
    });
    const r = {
      paused: !1,
      pause() {
        this.paused = !0;
      },
      resume() {
        this.paused = !1;
      }
    }, l = (g) => {
      if (!t.loop && !t.trapped || r.paused)
        return;
      const { code: m, altKey: y, ctrlKey: v, metaKey: w, currentTarget: _, shiftKey: x } = g, { loop: k } = t, T = m === Ge.tab && !y && !v && !w, A = document.activeElement;
      if (T && A) {
        const z = _, [B, q] = DC(z);
        if (B && q) {
          if (!x && A === q) {
            const V = tr({
              focusReason: o.value
            });
            e("focusout-prevented", V), V.defaultPrevented || (g.preventDefault(), k && ti(B, !0));
          } else if (x && [B, z].includes(A)) {
            const V = tr({
              focusReason: o.value
            });
            e("focusout-prevented", V), V.defaultPrevented || (g.preventDefault(), k && ti(q, !0));
          }
        } else if (A === z) {
          const V = tr({
            focusReason: o.value
          });
          e("focusout-prevented", V), V.defaultPrevented || g.preventDefault();
        }
      }
    };
    gt(Xc, {
      focusTrapRef: n,
      onKeydown: l
    }), ae(() => t.focusTrapEl, (g) => {
      g && (n.value = g);
    }, { immediate: !0 }), ae([n], ([g], [m]) => {
      g && (g.addEventListener("keydown", l), g.addEventListener("focusin", u), g.addEventListener("focusout", f)), m && (m.removeEventListener("keydown", l), m.removeEventListener("focusin", u), m.removeEventListener("focusout", f));
    });
    const a = (g) => {
      e(Vf, g);
    }, c = (g) => e(zf, g), u = (g) => {
      const m = p(n);
      if (!m)
        return;
      const y = g.target, v = g.relatedTarget, w = y && m.contains(y);
      t.trapped || v && m.contains(v) || (i = v), w && e("focusin", g), !r.paused && t.trapped && (w ? s = y : ti(s, !0));
    }, f = (g) => {
      const m = p(n);
      if (!(r.paused || !m))
        if (t.trapped) {
          const y = g.relatedTarget;
          !ci(y) && !m.contains(y) && setTimeout(() => {
            if (!r.paused && t.trapped) {
              const v = tr({
                focusReason: o.value
              });
              e("focusout-prevented", v), v.defaultPrevented || ti(s, !0);
            }
          }, 0);
        } else {
          const y = g.target;
          y && m.contains(y) || e("focusout", g);
        }
    };
    async function d() {
      await Ze();
      const g = p(n);
      if (g) {
        Gf.push(r);
        const m = g.contains(document.activeElement) ? i : document.activeElement;
        if (i = m, !g.contains(m)) {
          const v = new Event(Zl, Nf);
          g.addEventListener(Zl, a), g.dispatchEvent(v), v.defaultPrevented || Ze(() => {
            let w = t.focusStartEl;
            Qt(w) || (ti(w), document.activeElement !== w && (w = "first")), w === "first" && RC(Lp(g), !0), (document.activeElement === m || w === "container") && ti(g);
          });
        }
      }
    }
    function h() {
      const g = p(n);
      if (g) {
        g.removeEventListener(Zl, a);
        const m = new CustomEvent(Ql, {
          ...Nf,
          detail: {
            focusReason: o.value
          }
        });
        g.addEventListener(Ql, c), g.dispatchEvent(m), !m.defaultPrevented && (o.value == "keyboard" || !LC() || g.contains(document.activeElement)) && ti(i ?? document.body), g.removeEventListener(Ql, c), Gf.remove(r);
      }
    }
    return qe(() => {
      t.trapped && d(), ae(() => t.trapped, (g) => {
        g ? d() : h();
      });
    }), tn(() => {
      t.trapped && h(), n.value && (n.value.removeEventListener("keydown", l), n.value.removeEventListener("focusin", u), n.value.removeEventListener("focusout", f), n.value = void 0);
    }), {
      onKeydown: l
    };
  }
});
function NC(t, e, n, i, s, o) {
  return ne(t.$slots, "default", { handleKeydown: t.onKeydown });
}
var Bp = /* @__PURE__ */ Se(FC, [["render", NC], ["__file", "focus-trap.vue"]]), Wt = "top", pn = "bottom", gn = "right", Gt = "left", eu = "auto", Ho = [Wt, pn, gn, Gt], Es = "start", xo = "end", VC = "clippingParents", $p = "viewport", Us = "popper", zC = "reference", Uf = Ho.reduce(function(t, e) {
  return t.concat([e + "-" + Es, e + "-" + xo]);
}, []), Ml = [].concat(Ho, [eu]).reduce(function(t, e) {
  return t.concat([e, e + "-" + Es, e + "-" + xo]);
}, []), HC = "beforeRead", WC = "read", GC = "afterRead", jC = "beforeMain", KC = "main", UC = "afterMain", qC = "beforeWrite", YC = "write", JC = "afterWrite", XC = [HC, WC, GC, jC, KC, UC, qC, YC, JC];
function Yn(t) {
  return t ? (t.nodeName || "").toLowerCase() : null;
}
function en(t) {
  if (t == null) return window;
  if (t.toString() !== "[object Window]") {
    var e = t.ownerDocument;
    return e && e.defaultView || window;
  }
  return t;
}
function ss(t) {
  var e = en(t).Element;
  return t instanceof e || t instanceof Element;
}
function cn(t) {
  var e = en(t).HTMLElement;
  return t instanceof e || t instanceof HTMLElement;
}
function tu(t) {
  if (typeof ShadowRoot > "u") return !1;
  var e = en(t).ShadowRoot;
  return t instanceof e || t instanceof ShadowRoot;
}
function ZC(t) {
  var e = t.state;
  Object.keys(e.elements).forEach(function(n) {
    var i = e.styles[n] || {}, s = e.attributes[n] || {}, o = e.elements[n];
    !cn(o) || !Yn(o) || (Object.assign(o.style, i), Object.keys(s).forEach(function(r) {
      var l = s[r];
      l === !1 ? o.removeAttribute(r) : o.setAttribute(r, l === !0 ? "" : l);
    }));
  });
}
function QC(t) {
  var e = t.state, n = { popper: { position: e.options.strategy, left: "0", top: "0", margin: "0" }, arrow: { position: "absolute" }, reference: {} };
  return Object.assign(e.elements.popper.style, n.popper), e.styles = n, e.elements.arrow && Object.assign(e.elements.arrow.style, n.arrow), function() {
    Object.keys(e.elements).forEach(function(i) {
      var s = e.elements[i], o = e.attributes[i] || {}, r = Object.keys(e.styles.hasOwnProperty(i) ? e.styles[i] : n[i]), l = r.reduce(function(a, c) {
        return a[c] = "", a;
      }, {});
      !cn(s) || !Yn(s) || (Object.assign(s.style, l), Object.keys(o).forEach(function(a) {
        s.removeAttribute(a);
      }));
    });
  };
}
var Fp = { name: "applyStyles", enabled: !0, phase: "write", fn: ZC, effect: QC, requires: ["computeStyles"] };
function Gn(t) {
  return t.split("-")[0];
}
var ts = Math.max, Xr = Math.min, Ts = Math.round;
function Ra() {
  var t = navigator.userAgentData;
  return t != null && t.brands && Array.isArray(t.brands) ? t.brands.map(function(e) {
    return e.brand + "/" + e.version;
  }).join(" ") : navigator.userAgent;
}
function Np() {
  return !/^((?!chrome|android).)*safari/i.test(Ra());
}
function Ms(t, e, n) {
  e === void 0 && (e = !1), n === void 0 && (n = !1);
  var i = t.getBoundingClientRect(), s = 1, o = 1;
  e && cn(t) && (s = t.offsetWidth > 0 && Ts(i.width) / t.offsetWidth || 1, o = t.offsetHeight > 0 && Ts(i.height) / t.offsetHeight || 1);
  var r = ss(t) ? en(t) : window, l = r.visualViewport, a = !Np() && n, c = (i.left + (a && l ? l.offsetLeft : 0)) / s, u = (i.top + (a && l ? l.offsetTop : 0)) / o, f = i.width / s, d = i.height / o;
  return { width: f, height: d, top: u, right: c + f, bottom: u + d, left: c, x: c, y: u };
}
function nu(t) {
  var e = Ms(t), n = t.offsetWidth, i = t.offsetHeight;
  return Math.abs(e.width - n) <= 1 && (n = e.width), Math.abs(e.height - i) <= 1 && (i = e.height), { x: t.offsetLeft, y: t.offsetTop, width: n, height: i };
}
function Vp(t, e) {
  var n = e.getRootNode && e.getRootNode();
  if (t.contains(e)) return !0;
  if (n && tu(n)) {
    var i = e;
    do {
      if (i && t.isSameNode(i)) return !0;
      i = i.parentNode || i.host;
    } while (i);
  }
  return !1;
}
function di(t) {
  return en(t).getComputedStyle(t);
}
function e2(t) {
  return ["table", "td", "th"].indexOf(Yn(t)) >= 0;
}
function zi(t) {
  return ((ss(t) ? t.ownerDocument : t.document) || window.document).documentElement;
}
function Ol(t) {
  return Yn(t) === "html" ? t : t.assignedSlot || t.parentNode || (tu(t) ? t.host : null) || zi(t);
}
function qf(t) {
  return !cn(t) || di(t).position === "fixed" ? null : t.offsetParent;
}
function t2(t) {
  var e = /firefox/i.test(Ra()), n = /Trident/i.test(Ra());
  if (n && cn(t)) {
    var i = di(t);
    if (i.position === "fixed") return null;
  }
  var s = Ol(t);
  for (tu(s) && (s = s.host); cn(s) && ["html", "body"].indexOf(Yn(s)) < 0; ) {
    var o = di(s);
    if (o.transform !== "none" || o.perspective !== "none" || o.contain === "paint" || ["transform", "perspective"].indexOf(o.willChange) !== -1 || e && o.willChange === "filter" || e && o.filter && o.filter !== "none") return s;
    s = s.parentNode;
  }
  return null;
}
function Wo(t) {
  for (var e = en(t), n = qf(t); n && e2(n) && di(n).position === "static"; ) n = qf(n);
  return n && (Yn(n) === "html" || Yn(n) === "body" && di(n).position === "static") ? e : n || t2(t) || e;
}
function iu(t) {
  return ["top", "bottom"].indexOf(t) >= 0 ? "x" : "y";
}
function co(t, e, n) {
  return ts(t, Xr(e, n));
}
function n2(t, e, n) {
  var i = co(t, e, n);
  return i > n ? n : i;
}
function zp() {
  return { top: 0, right: 0, bottom: 0, left: 0 };
}
function Hp(t) {
  return Object.assign({}, zp(), t);
}
function Wp(t, e) {
  return e.reduce(function(n, i) {
    return n[i] = t, n;
  }, {});
}
var i2 = function(t, e) {
  return t = typeof t == "function" ? t(Object.assign({}, e.rects, { placement: e.placement })) : t, Hp(typeof t != "number" ? t : Wp(t, Ho));
};
function s2(t) {
  var e, n = t.state, i = t.name, s = t.options, o = n.elements.arrow, r = n.modifiersData.popperOffsets, l = Gn(n.placement), a = iu(l), c = [Gt, gn].indexOf(l) >= 0, u = c ? "height" : "width";
  if (!(!o || !r)) {
    var f = i2(s.padding, n), d = nu(o), h = a === "y" ? Wt : Gt, g = a === "y" ? pn : gn, m = n.rects.reference[u] + n.rects.reference[a] - r[a] - n.rects.popper[u], y = r[a] - n.rects.reference[a], v = Wo(o), w = v ? a === "y" ? v.clientHeight || 0 : v.clientWidth || 0 : 0, _ = m / 2 - y / 2, x = f[h], k = w - d[u] - f[g], T = w / 2 - d[u] / 2 + _, A = co(x, T, k), z = a;
    n.modifiersData[i] = (e = {}, e[z] = A, e.centerOffset = A - T, e);
  }
}
function o2(t) {
  var e = t.state, n = t.options, i = n.element, s = i === void 0 ? "[data-popper-arrow]" : i;
  s != null && (typeof s == "string" && (s = e.elements.popper.querySelector(s), !s) || Vp(e.elements.popper, s) && (e.elements.arrow = s));
}
var r2 = { name: "arrow", enabled: !0, phase: "main", fn: s2, effect: o2, requires: ["popperOffsets"], requiresIfExists: ["preventOverflow"] };
function Os(t) {
  return t.split("-")[1];
}
var l2 = { top: "auto", right: "auto", bottom: "auto", left: "auto" };
function a2(t, e) {
  var n = t.x, i = t.y, s = e.devicePixelRatio || 1;
  return { x: Ts(n * s) / s || 0, y: Ts(i * s) / s || 0 };
}
function Yf(t) {
  var e, n = t.popper, i = t.popperRect, s = t.placement, o = t.variation, r = t.offsets, l = t.position, a = t.gpuAcceleration, c = t.adaptive, u = t.roundOffsets, f = t.isFixed, d = r.x, h = d === void 0 ? 0 : d, g = r.y, m = g === void 0 ? 0 : g, y = typeof u == "function" ? u({ x: h, y: m }) : { x: h, y: m };
  h = y.x, m = y.y;
  var v = r.hasOwnProperty("x"), w = r.hasOwnProperty("y"), _ = Gt, x = Wt, k = window;
  if (c) {
    var T = Wo(n), A = "clientHeight", z = "clientWidth";
    if (T === en(n) && (T = zi(n), di(T).position !== "static" && l === "absolute" && (A = "scrollHeight", z = "scrollWidth")), T = T, s === Wt || (s === Gt || s === gn) && o === xo) {
      x = pn;
      var B = f && T === k && k.visualViewport ? k.visualViewport.height : T[A];
      m -= B - i.height, m *= a ? 1 : -1;
    }
    if (s === Gt || (s === Wt || s === pn) && o === xo) {
      _ = gn;
      var q = f && T === k && k.visualViewport ? k.visualViewport.width : T[z];
      h -= q - i.width, h *= a ? 1 : -1;
    }
  }
  var $ = Object.assign({ position: l }, c && l2), V = u === !0 ? a2({ x: h, y: m }, en(n)) : { x: h, y: m };
  if (h = V.x, m = V.y, a) {
    var X;
    return Object.assign({}, $, (X = {}, X[x] = w ? "0" : "", X[_] = v ? "0" : "", X.transform = (k.devicePixelRatio || 1) <= 1 ? "translate(" + h + "px, " + m + "px)" : "translate3d(" + h + "px, " + m + "px, 0)", X));
  }
  return Object.assign({}, $, (e = {}, e[x] = w ? m + "px" : "", e[_] = v ? h + "px" : "", e.transform = "", e));
}
function c2(t) {
  var e = t.state, n = t.options, i = n.gpuAcceleration, s = i === void 0 ? !0 : i, o = n.adaptive, r = o === void 0 ? !0 : o, l = n.roundOffsets, a = l === void 0 ? !0 : l, c = { placement: Gn(e.placement), variation: Os(e.placement), popper: e.elements.popper, popperRect: e.rects.popper, gpuAcceleration: s, isFixed: e.options.strategy === "fixed" };
  e.modifiersData.popperOffsets != null && (e.styles.popper = Object.assign({}, e.styles.popper, Yf(Object.assign({}, c, { offsets: e.modifiersData.popperOffsets, position: e.options.strategy, adaptive: r, roundOffsets: a })))), e.modifiersData.arrow != null && (e.styles.arrow = Object.assign({}, e.styles.arrow, Yf(Object.assign({}, c, { offsets: e.modifiersData.arrow, position: "absolute", adaptive: !1, roundOffsets: a })))), e.attributes.popper = Object.assign({}, e.attributes.popper, { "data-popper-placement": e.placement });
}
var Gp = { name: "computeStyles", enabled: !0, phase: "beforeWrite", fn: c2, data: {} }, nr = { passive: !0 };
function u2(t) {
  var e = t.state, n = t.instance, i = t.options, s = i.scroll, o = s === void 0 ? !0 : s, r = i.resize, l = r === void 0 ? !0 : r, a = en(e.elements.popper), c = [].concat(e.scrollParents.reference, e.scrollParents.popper);
  return o && c.forEach(function(u) {
    u.addEventListener("scroll", n.update, nr);
  }), l && a.addEventListener("resize", n.update, nr), function() {
    o && c.forEach(function(u) {
      u.removeEventListener("scroll", n.update, nr);
    }), l && a.removeEventListener("resize", n.update, nr);
  };
}
var jp = { name: "eventListeners", enabled: !0, phase: "write", fn: function() {
}, effect: u2, data: {} }, f2 = { left: "right", right: "left", bottom: "top", top: "bottom" };
function Ar(t) {
  return t.replace(/left|right|bottom|top/g, function(e) {
    return f2[e];
  });
}
var d2 = { start: "end", end: "start" };
function Jf(t) {
  return t.replace(/start|end/g, function(e) {
    return d2[e];
  });
}
function su(t) {
  var e = en(t), n = e.pageXOffset, i = e.pageYOffset;
  return { scrollLeft: n, scrollTop: i };
}
function ou(t) {
  return Ms(zi(t)).left + su(t).scrollLeft;
}
function h2(t, e) {
  var n = en(t), i = zi(t), s = n.visualViewport, o = i.clientWidth, r = i.clientHeight, l = 0, a = 0;
  if (s) {
    o = s.width, r = s.height;
    var c = Np();
    (c || !c && e === "fixed") && (l = s.offsetLeft, a = s.offsetTop);
  }
  return { width: o, height: r, x: l + ou(t), y: a };
}
function p2(t) {
  var e, n = zi(t), i = su(t), s = (e = t.ownerDocument) == null ? void 0 : e.body, o = ts(n.scrollWidth, n.clientWidth, s ? s.scrollWidth : 0, s ? s.clientWidth : 0), r = ts(n.scrollHeight, n.clientHeight, s ? s.scrollHeight : 0, s ? s.clientHeight : 0), l = -i.scrollLeft + ou(t), a = -i.scrollTop;
  return di(s || n).direction === "rtl" && (l += ts(n.clientWidth, s ? s.clientWidth : 0) - o), { width: o, height: r, x: l, y: a };
}
function ru(t) {
  var e = di(t), n = e.overflow, i = e.overflowX, s = e.overflowY;
  return /auto|scroll|overlay|hidden/.test(n + s + i);
}
function Kp(t) {
  return ["html", "body", "#document"].indexOf(Yn(t)) >= 0 ? t.ownerDocument.body : cn(t) && ru(t) ? t : Kp(Ol(t));
}
function uo(t, e) {
  var n;
  e === void 0 && (e = []);
  var i = Kp(t), s = i === ((n = t.ownerDocument) == null ? void 0 : n.body), o = en(i), r = s ? [o].concat(o.visualViewport || [], ru(i) ? i : []) : i, l = e.concat(r);
  return s ? l : l.concat(uo(Ol(r)));
}
function La(t) {
  return Object.assign({}, t, { left: t.x, top: t.y, right: t.x + t.width, bottom: t.y + t.height });
}
function g2(t, e) {
  var n = Ms(t, !1, e === "fixed");
  return n.top = n.top + t.clientTop, n.left = n.left + t.clientLeft, n.bottom = n.top + t.clientHeight, n.right = n.left + t.clientWidth, n.width = t.clientWidth, n.height = t.clientHeight, n.x = n.left, n.y = n.top, n;
}
function Xf(t, e, n) {
  return e === $p ? La(h2(t, n)) : ss(e) ? g2(e, n) : La(p2(zi(t)));
}
function m2(t) {
  var e = uo(Ol(t)), n = ["absolute", "fixed"].indexOf(di(t).position) >= 0, i = n && cn(t) ? Wo(t) : t;
  return ss(i) ? e.filter(function(s) {
    return ss(s) && Vp(s, i) && Yn(s) !== "body";
  }) : [];
}
function v2(t, e, n, i) {
  var s = e === "clippingParents" ? m2(t) : [].concat(e), o = [].concat(s, [n]), r = o[0], l = o.reduce(function(a, c) {
    var u = Xf(t, c, i);
    return a.top = ts(u.top, a.top), a.right = Xr(u.right, a.right), a.bottom = Xr(u.bottom, a.bottom), a.left = ts(u.left, a.left), a;
  }, Xf(t, r, i));
  return l.width = l.right - l.left, l.height = l.bottom - l.top, l.x = l.left, l.y = l.top, l;
}
function Up(t) {
  var e = t.reference, n = t.element, i = t.placement, s = i ? Gn(i) : null, o = i ? Os(i) : null, r = e.x + e.width / 2 - n.width / 2, l = e.y + e.height / 2 - n.height / 2, a;
  switch (s) {
    case Wt:
      a = { x: r, y: e.y - n.height };
      break;
    case pn:
      a = { x: r, y: e.y + e.height };
      break;
    case gn:
      a = { x: e.x + e.width, y: l };
      break;
    case Gt:
      a = { x: e.x - n.width, y: l };
      break;
    default:
      a = { x: e.x, y: e.y };
  }
  var c = s ? iu(s) : null;
  if (c != null) {
    var u = c === "y" ? "height" : "width";
    switch (o) {
      case Es:
        a[c] = a[c] - (e[u] / 2 - n[u] / 2);
        break;
      case xo:
        a[c] = a[c] + (e[u] / 2 - n[u] / 2);
        break;
    }
  }
  return a;
}
function Ao(t, e) {
  e === void 0 && (e = {});
  var n = e, i = n.placement, s = i === void 0 ? t.placement : i, o = n.strategy, r = o === void 0 ? t.strategy : o, l = n.boundary, a = l === void 0 ? VC : l, c = n.rootBoundary, u = c === void 0 ? $p : c, f = n.elementContext, d = f === void 0 ? Us : f, h = n.altBoundary, g = h === void 0 ? !1 : h, m = n.padding, y = m === void 0 ? 0 : m, v = Hp(typeof y != "number" ? y : Wp(y, Ho)), w = d === Us ? zC : Us, _ = t.rects.popper, x = t.elements[g ? w : d], k = v2(ss(x) ? x : x.contextElement || zi(t.elements.popper), a, u, r), T = Ms(t.elements.reference), A = Up({ reference: T, element: _, placement: s }), z = La(Object.assign({}, _, A)), B = d === Us ? z : T, q = { top: k.top - B.top + v.top, bottom: B.bottom - k.bottom + v.bottom, left: k.left - B.left + v.left, right: B.right - k.right + v.right }, $ = t.modifiersData.offset;
  if (d === Us && $) {
    var V = $[s];
    Object.keys(q).forEach(function(X) {
      var ce = [gn, pn].indexOf(X) >= 0 ? 1 : -1, O = [Wt, pn].indexOf(X) >= 0 ? "y" : "x";
      q[X] += V[O] * ce;
    });
  }
  return q;
}
function y2(t, e) {
  e === void 0 && (e = {});
  var n = e, i = n.placement, s = n.boundary, o = n.rootBoundary, r = n.padding, l = n.flipVariations, a = n.allowedAutoPlacements, c = a === void 0 ? Ml : a, u = Os(i), f = u ? l ? Uf : Uf.filter(function(g) {
    return Os(g) === u;
  }) : Ho, d = f.filter(function(g) {
    return c.indexOf(g) >= 0;
  });
  d.length === 0 && (d = f);
  var h = d.reduce(function(g, m) {
    return g[m] = Ao(t, { placement: m, boundary: s, rootBoundary: o, padding: r })[Gn(m)], g;
  }, {});
  return Object.keys(h).sort(function(g, m) {
    return h[g] - h[m];
  });
}
function b2(t) {
  if (Gn(t) === eu) return [];
  var e = Ar(t);
  return [Jf(t), e, Jf(e)];
}
function w2(t) {
  var e = t.state, n = t.options, i = t.name;
  if (!e.modifiersData[i]._skip) {
    for (var s = n.mainAxis, o = s === void 0 ? !0 : s, r = n.altAxis, l = r === void 0 ? !0 : r, a = n.fallbackPlacements, c = n.padding, u = n.boundary, f = n.rootBoundary, d = n.altBoundary, h = n.flipVariations, g = h === void 0 ? !0 : h, m = n.allowedAutoPlacements, y = e.options.placement, v = Gn(y), w = v === y, _ = a || (w || !g ? [Ar(y)] : b2(y)), x = [y].concat(_).reduce(function(Be, Ve) {
      return Be.concat(Gn(Ve) === eu ? y2(e, { placement: Ve, boundary: u, rootBoundary: f, padding: c, flipVariations: g, allowedAutoPlacements: m }) : Ve);
    }, []), k = e.rects.reference, T = e.rects.popper, A = /* @__PURE__ */ new Map(), z = !0, B = x[0], q = 0; q < x.length; q++) {
      var $ = x[q], V = Gn($), X = Os($) === Es, ce = [Wt, pn].indexOf(V) >= 0, O = ce ? "width" : "height", I = Ao(e, { placement: $, boundary: u, rootBoundary: f, altBoundary: d, padding: c }), L = ce ? X ? gn : Gt : X ? pn : Wt;
      k[O] > T[O] && (L = Ar(L));
      var oe = Ar(L), le = [];
      if (o && le.push(I[V] <= 0), l && le.push(I[L] <= 0, I[oe] <= 0), le.every(function(Be) {
        return Be;
      })) {
        B = $, z = !1;
        break;
      }
      A.set($, le);
    }
    if (z) for (var we = g ? 3 : 1, Te = function(Be) {
      var Ve = x.find(function(Oe) {
        var Ye = A.get(Oe);
        if (Ye) return Ye.slice(0, Be).every(function(Ie) {
          return Ie;
        });
      });
      if (Ve) return B = Ve, "break";
    }, xe = we; xe > 0; xe--) {
      var be = Te(xe);
      if (be === "break") break;
    }
    e.placement !== B && (e.modifiersData[i]._skip = !0, e.placement = B, e.reset = !0);
  }
}
var S2 = { name: "flip", enabled: !0, phase: "main", fn: w2, requiresIfExists: ["offset"], data: { _skip: !1 } };
function Zf(t, e, n) {
  return n === void 0 && (n = { x: 0, y: 0 }), { top: t.top - e.height - n.y, right: t.right - e.width + n.x, bottom: t.bottom - e.height + n.y, left: t.left - e.width - n.x };
}
function Qf(t) {
  return [Wt, gn, pn, Gt].some(function(e) {
    return t[e] >= 0;
  });
}
function C2(t) {
  var e = t.state, n = t.name, i = e.rects.reference, s = e.rects.popper, o = e.modifiersData.preventOverflow, r = Ao(e, { elementContext: "reference" }), l = Ao(e, { altBoundary: !0 }), a = Zf(r, i), c = Zf(l, s, o), u = Qf(a), f = Qf(c);
  e.modifiersData[n] = { referenceClippingOffsets: a, popperEscapeOffsets: c, isReferenceHidden: u, hasPopperEscaped: f }, e.attributes.popper = Object.assign({}, e.attributes.popper, { "data-popper-reference-hidden": u, "data-popper-escaped": f });
}
var k2 = { name: "hide", enabled: !0, phase: "main", requiresIfExists: ["preventOverflow"], fn: C2 };
function _2(t, e, n) {
  var i = Gn(t), s = [Gt, Wt].indexOf(i) >= 0 ? -1 : 1, o = typeof n == "function" ? n(Object.assign({}, e, { placement: t })) : n, r = o[0], l = o[1];
  return r = r || 0, l = (l || 0) * s, [Gt, gn].indexOf(i) >= 0 ? { x: l, y: r } : { x: r, y: l };
}
function x2(t) {
  var e = t.state, n = t.options, i = t.name, s = n.offset, o = s === void 0 ? [0, 0] : s, r = Ml.reduce(function(u, f) {
    return u[f] = _2(f, e.rects, o), u;
  }, {}), l = r[e.placement], a = l.x, c = l.y;
  e.modifiersData.popperOffsets != null && (e.modifiersData.popperOffsets.x += a, e.modifiersData.popperOffsets.y += c), e.modifiersData[i] = r;
}
var A2 = { name: "offset", enabled: !0, phase: "main", requires: ["popperOffsets"], fn: x2 };
function E2(t) {
  var e = t.state, n = t.name;
  e.modifiersData[n] = Up({ reference: e.rects.reference, element: e.rects.popper, placement: e.placement });
}
var qp = { name: "popperOffsets", enabled: !0, phase: "read", fn: E2, data: {} };
function T2(t) {
  return t === "x" ? "y" : "x";
}
function M2(t) {
  var e = t.state, n = t.options, i = t.name, s = n.mainAxis, o = s === void 0 ? !0 : s, r = n.altAxis, l = r === void 0 ? !1 : r, a = n.boundary, c = n.rootBoundary, u = n.altBoundary, f = n.padding, d = n.tether, h = d === void 0 ? !0 : d, g = n.tetherOffset, m = g === void 0 ? 0 : g, y = Ao(e, { boundary: a, rootBoundary: c, padding: f, altBoundary: u }), v = Gn(e.placement), w = Os(e.placement), _ = !w, x = iu(v), k = T2(x), T = e.modifiersData.popperOffsets, A = e.rects.reference, z = e.rects.popper, B = typeof m == "function" ? m(Object.assign({}, e.rects, { placement: e.placement })) : m, q = typeof B == "number" ? { mainAxis: B, altAxis: B } : Object.assign({ mainAxis: 0, altAxis: 0 }, B), $ = e.modifiersData.offset ? e.modifiersData.offset[e.placement] : null, V = { x: 0, y: 0 };
  if (T) {
    if (o) {
      var X, ce = x === "y" ? Wt : Gt, O = x === "y" ? pn : gn, I = x === "y" ? "height" : "width", L = T[x], oe = L + y[ce], le = L - y[O], we = h ? -z[I] / 2 : 0, Te = w === Es ? A[I] : z[I], xe = w === Es ? -z[I] : -A[I], be = e.elements.arrow, Be = h && be ? nu(be) : { width: 0, height: 0 }, Ve = e.modifiersData["arrow#persistent"] ? e.modifiersData["arrow#persistent"].padding : zp(), Oe = Ve[ce], Ye = Ve[O], Ie = co(0, A[I], Be[I]), Ft = _ ? A[I] / 2 - we - Ie - Oe - q.mainAxis : Te - Ie - Oe - q.mainAxis, jt = _ ? -A[I] / 2 + we + Ie + Ye + q.mainAxis : xe + Ie + Ye + q.mainAxis, Kt = e.elements.arrow && Wo(e.elements.arrow), wn = Kt ? x === "y" ? Kt.clientTop || 0 : Kt.clientLeft || 0 : 0, Ut = (X = $?.[x]) != null ? X : 0, Sn = L + Ft - Ut - wn, sn = L + jt - Ut, Nt = co(h ? Xr(oe, Sn) : oe, L, h ? ts(le, sn) : le);
      T[x] = Nt, V[x] = Nt - L;
    }
    if (l) {
      var Dn, mt = x === "x" ? Wt : Gt, H = x === "x" ? pn : gn, ie = T[k], me = k === "y" ? "height" : "width", ke = ie + y[mt], it = ie - y[H], G = [Wt, Gt].indexOf(v) !== -1, fe = (Dn = $?.[k]) != null ? Dn : 0, Re = G ? ke : ie - A[me] - z[me] - fe + q.altAxis, vt = G ? ie + A[me] + z[me] - fe - q.altAxis : it, _t = h && G ? n2(Re, ie, vt) : co(h ? Re : ke, ie, h ? vt : it);
      T[k] = _t, V[k] = _t - ie;
    }
    e.modifiersData[i] = V;
  }
}
var O2 = { name: "preventOverflow", enabled: !0, phase: "main", fn: M2, requiresIfExists: ["offset"] };
function D2(t) {
  return { scrollLeft: t.scrollLeft, scrollTop: t.scrollTop };
}
function P2(t) {
  return t === en(t) || !cn(t) ? su(t) : D2(t);
}
function I2(t) {
  var e = t.getBoundingClientRect(), n = Ts(e.width) / t.offsetWidth || 1, i = Ts(e.height) / t.offsetHeight || 1;
  return n !== 1 || i !== 1;
}
function R2(t, e, n) {
  n === void 0 && (n = !1);
  var i = cn(e), s = cn(e) && I2(e), o = zi(e), r = Ms(t, s, n), l = { scrollLeft: 0, scrollTop: 0 }, a = { x: 0, y: 0 };
  return (i || !i && !n) && ((Yn(e) !== "body" || ru(o)) && (l = P2(e)), cn(e) ? (a = Ms(e, !0), a.x += e.clientLeft, a.y += e.clientTop) : o && (a.x = ou(o))), { x: r.left + l.scrollLeft - a.x, y: r.top + l.scrollTop - a.y, width: r.width, height: r.height };
}
function L2(t) {
  var e = /* @__PURE__ */ new Map(), n = /* @__PURE__ */ new Set(), i = [];
  t.forEach(function(o) {
    e.set(o.name, o);
  });
  function s(o) {
    n.add(o.name);
    var r = [].concat(o.requires || [], o.requiresIfExists || []);
    r.forEach(function(l) {
      if (!n.has(l)) {
        var a = e.get(l);
        a && s(a);
      }
    }), i.push(o);
  }
  return t.forEach(function(o) {
    n.has(o.name) || s(o);
  }), i;
}
function B2(t) {
  var e = L2(t);
  return XC.reduce(function(n, i) {
    return n.concat(e.filter(function(s) {
      return s.phase === i;
    }));
  }, []);
}
function $2(t) {
  var e;
  return function() {
    return e || (e = new Promise(function(n) {
      Promise.resolve().then(function() {
        e = void 0, n(t());
      });
    })), e;
  };
}
function F2(t) {
  var e = t.reduce(function(n, i) {
    var s = n[i.name];
    return n[i.name] = s ? Object.assign({}, s, i, { options: Object.assign({}, s.options, i.options), data: Object.assign({}, s.data, i.data) }) : i, n;
  }, {});
  return Object.keys(e).map(function(n) {
    return e[n];
  });
}
var ed = { placement: "bottom", modifiers: [], strategy: "absolute" };
function td() {
  for (var t = arguments.length, e = new Array(t), n = 0; n < t; n++) e[n] = arguments[n];
  return !e.some(function(i) {
    return !(i && typeof i.getBoundingClientRect == "function");
  });
}
function lu(t) {
  t === void 0 && (t = {});
  var e = t, n = e.defaultModifiers, i = n === void 0 ? [] : n, s = e.defaultOptions, o = s === void 0 ? ed : s;
  return function(r, l, a) {
    a === void 0 && (a = o);
    var c = { placement: "bottom", orderedModifiers: [], options: Object.assign({}, ed, o), modifiersData: {}, elements: { reference: r, popper: l }, attributes: {}, styles: {} }, u = [], f = !1, d = { state: c, setOptions: function(m) {
      var y = typeof m == "function" ? m(c.options) : m;
      g(), c.options = Object.assign({}, o, c.options, y), c.scrollParents = { reference: ss(r) ? uo(r) : r.contextElement ? uo(r.contextElement) : [], popper: uo(l) };
      var v = B2(F2([].concat(i, c.options.modifiers)));
      return c.orderedModifiers = v.filter(function(w) {
        return w.enabled;
      }), h(), d.update();
    }, forceUpdate: function() {
      if (!f) {
        var m = c.elements, y = m.reference, v = m.popper;
        if (td(y, v)) {
          c.rects = { reference: R2(y, Wo(v), c.options.strategy === "fixed"), popper: nu(v) }, c.reset = !1, c.placement = c.options.placement, c.orderedModifiers.forEach(function(z) {
            return c.modifiersData[z.name] = Object.assign({}, z.data);
          });
          for (var w = 0; w < c.orderedModifiers.length; w++) {
            if (c.reset === !0) {
              c.reset = !1, w = -1;
              continue;
            }
            var _ = c.orderedModifiers[w], x = _.fn, k = _.options, T = k === void 0 ? {} : k, A = _.name;
            typeof x == "function" && (c = x({ state: c, options: T, name: A, instance: d }) || c);
          }
        }
      }
    }, update: $2(function() {
      return new Promise(function(m) {
        d.forceUpdate(), m(c);
      });
    }), destroy: function() {
      g(), f = !0;
    } };
    if (!td(r, l)) return d;
    d.setOptions(a).then(function(m) {
      !f && a.onFirstUpdate && a.onFirstUpdate(m);
    });
    function h() {
      c.orderedModifiers.forEach(function(m) {
        var y = m.name, v = m.options, w = v === void 0 ? {} : v, _ = m.effect;
        if (typeof _ == "function") {
          var x = _({ state: c, name: y, instance: d, options: w }), k = function() {
          };
          u.push(x || k);
        }
      });
    }
    function g() {
      u.forEach(function(m) {
        return m();
      }), u = [];
    }
    return d;
  };
}
lu();
var N2 = [jp, qp, Gp, Fp];
lu({ defaultModifiers: N2 });
var V2 = [jp, qp, Gp, Fp, A2, S2, O2, r2, k2], z2 = lu({ defaultModifiers: V2 });
const H2 = ["fixed", "absolute"], W2 = Ee({
  boundariesPadding: {
    type: Number,
    default: 0
  },
  fallbackPlacements: {
    type: re(Array),
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
    values: Ml,
    default: "bottom"
  },
  popperOptions: {
    type: re(Object),
    default: () => ({})
  },
  strategy: {
    type: String,
    values: H2,
    default: "absolute"
  }
}), Yp = Ee({
  ...W2,
  id: String,
  style: {
    type: re([String, Array, Object])
  },
  className: {
    type: re([String, Array, Object])
  },
  effect: {
    type: re(String),
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
    type: re([String, Array, Object])
  },
  popperStyle: {
    type: re([String, Array, Object])
  },
  referenceEl: {
    type: re(Object)
  },
  triggerTargetEl: {
    type: re(Object)
  },
  stopPopperMouseEvent: {
    type: Boolean,
    default: !0
  },
  virtualTriggering: Boolean,
  zIndex: Number,
  ...Hs(["ariaLabel"])
}), G2 = {
  mouseenter: (t) => t instanceof MouseEvent,
  mouseleave: (t) => t instanceof MouseEvent,
  focus: () => !0,
  blur: () => !0,
  close: () => !0
}, j2 = (t, e) => {
  const n = M(!1), i = M();
  return {
    focusStartRef: i,
    trapped: n,
    onFocusAfterReleased: (c) => {
      var u;
      ((u = c.detail) == null ? void 0 : u.focusReason) !== "pointer" && (i.value = "first", e("blur"));
    },
    onFocusAfterTrapped: () => {
      e("focus");
    },
    onFocusInTrap: (c) => {
      t.visible && !n.value && (c.target && (i.value = c.target), n.value = !0);
    },
    onFocusoutPrevented: (c) => {
      t.trapping || (c.detail.focusReason === "pointer" && c.preventDefault(), n.value = !1);
    },
    onReleaseRequested: () => {
      n.value = !1, e("close");
    }
  };
}, K2 = (t, e = []) => {
  const { placement: n, strategy: i, popperOptions: s } = t, o = {
    placement: n,
    strategy: i,
    ...s,
    modifiers: [...q2(t), ...e]
  };
  return Y2(o, s?.modifiers), o;
}, U2 = (t) => {
  if (Ke)
    return ri(t);
};
function q2(t) {
  const { offset: e, gpuAcceleration: n, fallbackPlacements: i } = t;
  return [
    {
      name: "offset",
      options: {
        offset: [0, e ?? 12]
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
        fallbackPlacements: i
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
function Y2(t, e) {
  e && (t.modifiers = [...t.modifiers, ...e ?? []]);
}
const J2 = (t, e, n = {}) => {
  const i = {
    name: "updateState",
    enabled: !0,
    phase: "write",
    fn: ({ state: a }) => {
      const c = X2(a);
      Object.assign(r.value, c);
    },
    requires: ["computeStyles"]
  }, s = C(() => {
    const { onFirstUpdate: a, placement: c, strategy: u, modifiers: f } = p(n);
    return {
      onFirstUpdate: a,
      placement: c || "bottom",
      strategy: u || "absolute",
      modifiers: [
        ...f || [],
        i,
        { name: "applyStyles", enabled: !1 }
      ]
    };
  }), o = es(), r = M({
    styles: {
      popper: {
        position: p(s).strategy,
        left: "0",
        top: "0"
      },
      arrow: {
        position: "absolute"
      }
    },
    attributes: {}
  }), l = () => {
    o.value && (o.value.destroy(), o.value = void 0);
  };
  return ae(s, (a) => {
    const c = p(o);
    c && c.setOptions(a);
  }, {
    deep: !0
  }), ae([t, e], ([a, c]) => {
    l(), !(!a || !c) && (o.value = z2(a, c, p(s)));
  }), tn(() => {
    l();
  }), {
    state: C(() => {
      var a;
      return { ...((a = p(o)) == null ? void 0 : a.state) || {} };
    }),
    styles: C(() => p(r).styles),
    attributes: C(() => p(r).attributes),
    update: () => {
      var a;
      return (a = p(o)) == null ? void 0 : a.update();
    },
    forceUpdate: () => {
      var a;
      return (a = p(o)) == null ? void 0 : a.forceUpdate();
    },
    instanceRef: C(() => p(o))
  };
};
function X2(t) {
  const e = Object.keys(t.elements), n = jr(e.map((s) => [s, t.styles[s] || {}])), i = jr(e.map((s) => [s, t.attributes[s]]));
  return {
    styles: n,
    attributes: i
  };
}
const Z2 = 0, Q2 = (t) => {
  const { popperInstanceRef: e, contentRef: n, triggerRef: i, role: s } = de(Jc, void 0), o = M(), r = M(), l = C(() => ({
    name: "eventListeners",
    enabled: !!t.visible
  })), a = C(() => {
    var v;
    const w = p(o), _ = (v = p(r)) != null ? v : Z2;
    return {
      name: "arrow",
      enabled: !tp(w),
      options: {
        element: w,
        padding: _
      }
    };
  }), c = C(() => ({
    onFirstUpdate: () => {
      g();
    },
    ...K2(t, [
      p(a),
      p(l)
    ])
  })), u = C(() => U2(t.referenceEl) || p(i)), { attributes: f, state: d, styles: h, update: g, forceUpdate: m, instanceRef: y } = J2(u, n, c);
  return ae(y, (v) => e.value = v), qe(() => {
    ae(() => {
      var v;
      return (v = p(u)) == null ? void 0 : v.getBoundingClientRect();
    }, () => {
      g();
    });
  }), {
    attributes: f,
    arrowRef: o,
    contentRef: n,
    instanceRef: y,
    state: d,
    styles: h,
    role: s,
    forceUpdate: m,
    update: g
  };
}, ek = (t, {
  attributes: e,
  styles: n,
  role: i
}) => {
  const { nextZIndex: s } = jc(), o = Le("popper"), r = C(() => p(e).popper), l = M(Fe(t.zIndex) ? t.zIndex : s()), a = C(() => [
    o.b(),
    o.is("pure", t.pure),
    o.is(t.effect),
    t.popperClass
  ]), c = C(() => [
    { zIndex: p(l) },
    p(n).popper,
    t.popperStyle || {}
  ]), u = C(() => i.value === "dialog" ? "false" : void 0), f = C(() => p(n).arrow || {});
  return {
    ariaModal: u,
    arrowStyle: f,
    contentAttrs: r,
    contentClass: a,
    contentStyle: c,
    contentZIndex: l,
    updateZIndex: () => {
      l.value = Fe(t.zIndex) ? t.zIndex : s();
    }
  };
}, tk = J({
  name: "ElPopperContent"
}), nk = /* @__PURE__ */ J({
  ...tk,
  props: Yp,
  emits: G2,
  setup(t, { expose: e, emit: n }) {
    const i = t, {
      focusStartRef: s,
      trapped: o,
      onFocusAfterReleased: r,
      onFocusAfterTrapped: l,
      onFocusInTrap: a,
      onFocusoutPrevented: c,
      onReleaseRequested: u
    } = j2(i, n), { attributes: f, arrowRef: d, contentRef: h, styles: g, instanceRef: m, role: y, update: v } = Q2(i), {
      ariaModal: w,
      arrowStyle: _,
      contentAttrs: x,
      contentClass: k,
      contentStyle: T,
      updateZIndex: A
    } = ek(i, {
      styles: g,
      attributes: f,
      role: y
    }), z = de(Jr, void 0), B = M();
    gt(Ep, {
      arrowStyle: _,
      arrowRef: d,
      arrowOffset: B
    }), z && gt(Jr, {
      ...z,
      addInputId: Pi,
      removeInputId: Pi
    });
    let q;
    const $ = (X = !0) => {
      v(), X && A();
    }, V = () => {
      $(!1), i.visible && i.focusOnShow ? o.value = !0 : i.visible === !1 && (o.value = !1);
    };
    return qe(() => {
      ae(() => i.triggerTargetEl, (X, ce) => {
        q?.(), q = void 0;
        const O = p(X || h.value), I = p(ce || h.value);
        xn(O) && (q = ae([y, () => i.ariaLabel, w, () => i.id], (L) => {
          ["role", "aria-label", "aria-modal", "id"].forEach((oe, le) => {
            ci(L[le]) ? O.removeAttribute(oe) : O.setAttribute(oe, L[le]);
          });
        }, { immediate: !0 })), I !== O && xn(I) && ["role", "aria-label", "aria-modal", "id"].forEach((L) => {
          I.removeAttribute(L);
        });
      }, { immediate: !0 }), ae(() => i.visible, V, { immediate: !0 });
    }), tn(() => {
      q?.(), q = void 0;
    }), e({
      popperContentRef: h,
      popperInstanceRef: m,
      updatePopper: $,
      contentStyle: T
    }), (X, ce) => (S(), D("div", hn({
      ref_key: "contentRef",
      ref: h
    }, p(x), {
      style: p(T),
      class: p(k),
      tabindex: "-1",
      onMouseenter: (O) => X.$emit("mouseenter", O),
      onMouseleave: (O) => X.$emit("mouseleave", O)
    }), [
      U(p(Bp), {
        trapped: p(o),
        "trap-on-focus-in": !0,
        "focus-trap-el": p(h),
        "focus-start-el": p(s),
        onFocusAfterTrapped: p(l),
        onFocusAfterReleased: p(r),
        onFocusin: p(a),
        onFocusoutPrevented: p(c),
        onReleaseRequested: p(u)
      }, {
        default: j(() => [
          ne(X.$slots, "default")
        ]),
        _: 3
      }, 8, ["trapped", "focus-trap-el", "focus-start-el", "onFocusAfterTrapped", "onFocusAfterReleased", "onFocusin", "onFocusoutPrevented", "onReleaseRequested"])
    ], 16, ["onMouseenter", "onMouseleave"]));
  }
});
var ik = /* @__PURE__ */ Se(nk, [["__file", "content.vue"]]);
const sk = nn(yC), au = Symbol("elTooltip");
function nd() {
  let t;
  const e = (i, s) => {
    n(), t = window.setTimeout(i, s);
  }, n = () => window.clearTimeout(t);
  return Fo(() => n()), {
    registerTimeout: e,
    cancelTimeout: n
  };
}
const ok = Ee({
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
}), rk = ({
  showAfter: t,
  hideAfter: e,
  autoClose: n,
  open: i,
  close: s
}) => {
  const { registerTimeout: o } = nd(), {
    registerTimeout: r,
    cancelTimeout: l
  } = nd();
  return {
    onOpen: (u) => {
      o(() => {
        i(u);
        const f = p(n);
        Fe(f) && f > 0 && r(() => {
          s(u);
        }, f);
      }, p(t));
    },
    onClose: (u) => {
      l(), o(() => {
        s(u);
      }, p(e));
    }
  };
}, Eo = Ee({
  ...ok,
  ...Yp,
  appendTo: {
    type: re([String, Object])
  },
  content: {
    type: String,
    default: ""
  },
  rawContent: Boolean,
  persistent: Boolean,
  visible: {
    type: re(Boolean),
    default: null
  },
  transition: String,
  teleported: {
    type: Boolean,
    default: !0
  },
  disabled: Boolean,
  ...Hs(["ariaLabel"])
}), cu = Ee({
  ...Dp,
  disabled: Boolean,
  trigger: {
    type: re([String, Array]),
    default: "hover"
  },
  triggerKeys: {
    type: re(Array),
    default: () => [Ge.enter, Ge.numpadEnter, Ge.space]
  }
}), lk = _l({
  type: re(Boolean),
  default: null
}), ak = _l({
  type: re(Function)
}), ck = (t) => {
  const e = `update:${t}`, n = `onUpdate:${t}`, i = [e], s = {
    [t]: lk,
    [n]: ak
  };
  return {
    useModelToggle: ({
      indicator: r,
      toggleReason: l,
      shouldHideWhenRouteChanges: a,
      shouldProceed: c,
      onShow: u,
      onHide: f
    }) => {
      const d = pt(), { emit: h } = d, g = d.props, m = C(() => tt(g[n])), y = C(() => g[t] === null), v = (A) => {
        r.value !== !0 && (r.value = !0, l && (l.value = A), tt(u) && u(A));
      }, w = (A) => {
        r.value !== !1 && (r.value = !1, l && (l.value = A), tt(f) && f(A));
      }, _ = (A) => {
        if (g.disabled === !0 || tt(c) && !c())
          return;
        const z = m.value && Ke;
        z && h(e, !0), (y.value || !z) && v(A);
      }, x = (A) => {
        if (g.disabled === !0 || !Ke)
          return;
        const z = m.value && Ke;
        z && h(e, !1), (y.value || !z) && w(A);
      }, k = (A) => {
        _o(A) && (g.disabled && A ? m.value && h(e, !1) : r.value !== A && (A ? v() : w()));
      }, T = () => {
        r.value ? x() : _();
      };
      return ae(() => g[t], k), a && d.appContext.config.globalProperties.$route !== void 0 && ae(() => ({
        ...d.proxy.$route
      }), () => {
        a.value && r.value && x();
      }), qe(() => {
        k(g[t]);
      }), {
        hide: x,
        show: _,
        toggle: T,
        hasUpdateHandler: m
      };
    },
    useModelToggleProps: s,
    useModelToggleEmits: i
  };
}, {
  useModelToggleProps: uk,
  useModelToggleEmits: fk,
  useModelToggle: dk
} = ck("visible"), hk = Ee({
  ...Mp,
  ...uk,
  ...Eo,
  ...cu,
  ...Op,
  showArrow: {
    type: Boolean,
    default: !0
  }
}), pk = [
  ...fk,
  "before-show",
  "before-hide",
  "show",
  "hide",
  "open",
  "close"
], gk = (t, e) => Nn(t) ? t.includes(e) : t === e, hs = (t, e, n) => (i) => {
  gk(p(t), e) && n(i);
}, rt = (t, e, { checkForDefaultPrevented: n = !0 } = {}) => (s) => {
  const o = t?.(s);
  if (n === !1 || !o)
    return e?.(s);
}, id = (t) => (e) => e.pointerType === "mouse" ? t(e) : void 0, mk = J({
  name: "ElTooltipTrigger"
}), vk = /* @__PURE__ */ J({
  ...mk,
  props: cu,
  setup(t, { expose: e }) {
    const n = t, i = Le("tooltip"), { controlled: s, id: o, open: r, onOpen: l, onClose: a, onToggle: c } = de(au, void 0), u = M(null), f = () => {
      if (p(s) || n.disabled)
        return !0;
    }, d = Mt(n, "trigger"), h = rt(f, hs(d, "hover", l)), g = rt(f, hs(d, "hover", a)), m = rt(f, hs(d, "click", (x) => {
      x.button === 0 && c(x);
    })), y = rt(f, hs(d, "focus", l)), v = rt(f, hs(d, "focus", a)), w = rt(f, hs(d, "contextmenu", (x) => {
      x.preventDefault(), c(x);
    })), _ = rt(f, (x) => {
      const { code: k } = x;
      n.triggerKeys.includes(k) && (x.preventDefault(), c(x));
    });
    return e({
      triggerRef: u
    }), (x, k) => (S(), te(p(EC), {
      id: p(o),
      "virtual-ref": x.virtualRef,
      open: p(r),
      "virtual-triggering": x.virtualTriggering,
      class: F(p(i).e("trigger")),
      onBlur: p(v),
      onClick: p(m),
      onContextmenu: p(w),
      onFocus: p(y),
      onMouseenter: p(h),
      onMouseleave: p(g),
      onKeydown: p(_)
    }, {
      default: j(() => [
        ne(x.$slots, "default")
      ]),
      _: 3
    }, 8, ["id", "virtual-ref", "open", "virtual-triggering", "class", "onBlur", "onClick", "onContextmenu", "onFocus", "onMouseenter", "onMouseleave", "onKeydown"]));
  }
});
var yk = /* @__PURE__ */ Se(vk, [["__file", "trigger.vue"]]);
const bk = Ee({
  to: {
    type: re([String, Object]),
    required: !0
  },
  disabled: Boolean
}), wk = /* @__PURE__ */ J({
  __name: "teleport",
  props: bk,
  setup(t) {
    return (e, n) => e.disabled ? ne(e.$slots, "default", { key: 0 }) : (S(), te(Bh, {
      key: 1,
      to: e.to
    }, [
      ne(e.$slots, "default")
    ], 8, ["to"]));
  }
});
var Sk = /* @__PURE__ */ Se(wk, [["__file", "teleport.vue"]]);
const Jp = nn(Sk), Xp = () => {
  const t = Lc(), e = Sp(), n = C(() => `${t.value}-popper-container-${e.prefix}`), i = C(() => `#${n.value}`);
  return {
    id: n,
    selector: i
  };
}, Ck = (t) => {
  const e = document.createElement("div");
  return e.id = t, document.body.appendChild(e), e;
}, kk = () => {
  const { id: t, selector: e } = Xp();
  return a0(() => {
    Ke && (document.body.querySelector(e.value) || Ck(t.value));
  }), {
    id: t,
    selector: e
  };
}, _k = J({
  name: "ElTooltipContent",
  inheritAttrs: !1
}), xk = /* @__PURE__ */ J({
  ..._k,
  props: Eo,
  setup(t, { expose: e }) {
    const n = t, { selector: i } = Xp(), s = Le("tooltip"), o = M();
    let r;
    const {
      controlled: l,
      id: a,
      open: c,
      trigger: u,
      onClose: f,
      onOpen: d,
      onShow: h,
      onHide: g,
      onBeforeShow: m,
      onBeforeHide: y
    } = de(au, void 0), v = C(() => n.transition || `${s.namespace.value}-fade-in-linear`), w = C(() => n.persistent);
    tn(() => {
      r?.();
    });
    const _ = C(() => p(w) ? !0 : p(c)), x = C(() => n.disabled ? !1 : p(c)), k = C(() => n.appendTo || i.value), T = C(() => {
      var L;
      return (L = n.style) != null ? L : {};
    }), A = M(!0), z = () => {
      g(), I() && ti(document.body), A.value = !0;
    }, B = () => {
      if (p(l))
        return !0;
    }, q = rt(B, () => {
      n.enterable && p(u) === "hover" && d();
    }), $ = rt(B, () => {
      p(u) === "hover" && f();
    }), V = () => {
      var L, oe;
      (oe = (L = o.value) == null ? void 0 : L.updatePopper) == null || oe.call(L), m?.();
    }, X = () => {
      y?.();
    }, ce = () => {
      h(), r = Lw(C(() => {
        var L;
        return (L = o.value) == null ? void 0 : L.popperContentRef;
      }), () => {
        if (p(l))
          return;
        p(u) !== "hover" && f();
      });
    }, O = () => {
      n.virtualTriggering || f();
    }, I = (L) => {
      var oe;
      const le = (oe = o.value) == null ? void 0 : oe.popperContentRef, we = L?.relatedTarget || document.activeElement;
      return le?.contains(we);
    };
    return ae(() => p(c), (L) => {
      L ? A.value = !1 : r?.();
    }, {
      flush: "post"
    }), ae(() => n.content, () => {
      var L, oe;
      (oe = (L = o.value) == null ? void 0 : L.updatePopper) == null || oe.call(L);
    }), e({
      contentRef: o,
      isFocusInsideContent: I
    }), (L, oe) => (S(), te(p(Jp), {
      disabled: !L.teleported,
      to: p(k)
    }, {
      default: j(() => [
        U(pi, {
          name: p(v),
          onAfterLeave: z,
          onBeforeEnter: V,
          onAfterEnter: ce,
          onBeforeLeave: X
        }, {
          default: j(() => [
            p(_) ? Bt((S(), te(p(ik), hn({
              key: 0,
              id: p(a),
              ref_key: "contentRef",
              ref: o
            }, L.$attrs, {
              "aria-label": L.ariaLabel,
              "aria-hidden": A.value,
              "boundaries-padding": L.boundariesPadding,
              "fallback-placements": L.fallbackPlacements,
              "gpu-acceleration": L.gpuAcceleration,
              offset: L.offset,
              placement: L.placement,
              "popper-options": L.popperOptions,
              strategy: L.strategy,
              effect: L.effect,
              enterable: L.enterable,
              pure: L.pure,
              "popper-class": L.popperClass,
              "popper-style": [L.popperStyle, p(T)],
              "reference-el": L.referenceEl,
              "trigger-target-el": L.triggerTargetEl,
              visible: p(x),
              "z-index": L.zIndex,
              onMouseenter: p(q),
              onMouseleave: p($),
              onBlur: O,
              onClose: p(f)
            }), {
              default: j(() => [
                ne(L.$slots, "default")
              ]),
              _: 3
            }, 16, ["id", "aria-label", "aria-hidden", "boundaries-padding", "fallback-placements", "gpu-acceleration", "offset", "placement", "popper-options", "strategy", "effect", "enterable", "pure", "popper-class", "popper-style", "reference-el", "trigger-target-el", "visible", "z-index", "onMouseenter", "onMouseleave", "onClose"])), [
              [Kn, p(x)]
            ]) : N("v-if", !0)
          ]),
          _: 3
        }, 8, ["name"])
      ]),
      _: 3
    }, 8, ["disabled", "to"]));
  }
});
var Ak = /* @__PURE__ */ Se(xk, [["__file", "content.vue"]]);
const Ek = J({
  name: "ElTooltip"
}), Tk = /* @__PURE__ */ J({
  ...Ek,
  props: hk,
  emits: pk,
  setup(t, { expose: e, emit: n }) {
    const i = t;
    kk();
    const s = Li(), o = M(), r = M(), l = () => {
      var v;
      const w = p(o);
      w && ((v = w.popperInstanceRef) == null || v.update());
    }, a = M(!1), c = M(), { show: u, hide: f, hasUpdateHandler: d } = dk({
      indicator: a,
      toggleReason: c
    }), { onOpen: h, onClose: g } = rk({
      showAfter: Mt(i, "showAfter"),
      hideAfter: Mt(i, "hideAfter"),
      autoClose: Mt(i, "autoClose"),
      open: u,
      close: f
    }), m = C(() => _o(i.visible) && !d.value);
    gt(au, {
      controlled: m,
      id: s,
      open: gl(a),
      trigger: Mt(i, "trigger"),
      onOpen: (v) => {
        h(v);
      },
      onClose: (v) => {
        g(v);
      },
      onToggle: (v) => {
        p(a) ? g(v) : h(v);
      },
      onShow: () => {
        n("show", c.value);
      },
      onHide: () => {
        n("hide", c.value);
      },
      onBeforeShow: () => {
        n("before-show", c.value);
      },
      onBeforeHide: () => {
        n("before-hide", c.value);
      },
      updatePopper: l
    }), ae(() => i.disabled, (v) => {
      v && a.value && (a.value = !1);
    });
    const y = (v) => {
      var w;
      return (w = r.value) == null ? void 0 : w.isFocusInsideContent(v);
    };
    return c0(() => a.value && f()), e({
      popperRef: o,
      contentRef: r,
      isFocusInsideContent: y,
      updatePopper: l,
      onOpen: h,
      onClose: g,
      hide: f
    }), (v, w) => (S(), te(p(sk), {
      ref_key: "popperRef",
      ref: o,
      role: v.role
    }, {
      default: j(() => [
        U(yk, {
          disabled: v.disabled,
          trigger: v.trigger,
          "trigger-keys": v.triggerKeys,
          "virtual-ref": v.virtualRef,
          "virtual-triggering": v.virtualTriggering
        }, {
          default: j(() => [
            v.$slots.default ? ne(v.$slots, "default", { key: 0 }) : N("v-if", !0)
          ]),
          _: 3
        }, 8, ["disabled", "trigger", "trigger-keys", "virtual-ref", "virtual-triggering"]),
        U(Ak, {
          ref_key: "contentRef",
          ref: r,
          "aria-label": v.ariaLabel,
          "boundaries-padding": v.boundariesPadding,
          content: v.content,
          disabled: v.disabled,
          effect: v.effect,
          enterable: v.enterable,
          "fallback-placements": v.fallbackPlacements,
          "hide-after": v.hideAfter,
          "gpu-acceleration": v.gpuAcceleration,
          offset: v.offset,
          persistent: v.persistent,
          "popper-class": v.popperClass,
          "popper-style": v.popperStyle,
          placement: v.placement,
          "popper-options": v.popperOptions,
          pure: v.pure,
          "raw-content": v.rawContent,
          "reference-el": v.referenceEl,
          "trigger-target-el": v.triggerTargetEl,
          "show-after": v.showAfter,
          strategy: v.strategy,
          teleported: v.teleported,
          transition: v.transition,
          "virtual-triggering": v.virtualTriggering,
          "z-index": v.zIndex,
          "append-to": v.appendTo
        }, {
          default: j(() => [
            ne(v.$slots, "content", {}, () => [
              v.rawContent ? (S(), D("span", {
                key: 0,
                innerHTML: v.content
              }, null, 8, ["innerHTML"])) : (S(), D("span", { key: 1 }, R(v.content), 1))
            ]),
            v.showArrow ? (S(), te(p(SC), {
              key: 0,
              "arrow-offset": v.arrowOffset
            }, null, 8, ["arrow-offset"])) : N("v-if", !0)
          ]),
          _: 3
        }, 8, ["aria-label", "boundaries-padding", "content", "disabled", "effect", "enterable", "fallback-placements", "hide-after", "gpu-acceleration", "offset", "persistent", "popper-class", "popper-style", "placement", "popper-options", "pure", "raw-content", "reference-el", "trigger-target-el", "show-after", "strategy", "teleported", "transition", "virtual-triggering", "z-index", "append-to"])
      ]),
      _: 3
    }, 8, ["role"]));
  }
});
var Mk = /* @__PURE__ */ Se(Tk, [["__file", "tooltip.vue"]]);
const Zp = nn(Mk), Ok = Ee({
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
    type: re([String, Object, Array])
  },
  offset: {
    type: re(Array),
    default: [0, 0]
  },
  badgeClass: {
    type: String
  }
}), Dk = J({
  name: "ElBadge"
}), Pk = /* @__PURE__ */ J({
  ...Dk,
  props: Ok,
  setup(t, { expose: e }) {
    const n = t, i = Le("badge"), s = C(() => n.isDot ? "" : Fe(n.value) && Fe(n.max) ? n.max < n.value ? `${n.max}+` : `${n.value}` : `${n.value}`), o = C(() => {
      var r, l, a, c, u;
      return [
        {
          backgroundColor: n.color,
          marginRight: fi(-((l = (r = n.offset) == null ? void 0 : r[0]) != null ? l : 0)),
          marginTop: fi((c = (a = n.offset) == null ? void 0 : a[1]) != null ? c : 0)
        },
        (u = n.badgeStyle) != null ? u : {}
      ];
    });
    return e({
      content: s
    }), (r, l) => (S(), D("div", {
      class: F(p(i).b())
    }, [
      ne(r.$slots, "default"),
      U(pi, {
        name: `${p(i).namespace.value}-zoom-in-center`,
        persisted: ""
      }, {
        default: j(() => [
          Bt(b("sup", {
            class: F([
              p(i).e("content"),
              p(i).em("content", r.type),
              p(i).is("fixed", !!r.$slots.default),
              p(i).is("dot", r.isDot),
              p(i).is("hide-zero", !r.showZero && n.value === 0),
              r.badgeClass
            ]),
            style: je(p(o))
          }, [
            ne(r.$slots, "content", { value: p(s) }, () => [
              De(R(p(s)), 1)
            ])
          ], 6), [
            [Kn, !r.hidden && (p(s) || r.isDot || r.$slots.content)]
          ])
        ]),
        _: 3
      }, 8, ["name"])
    ], 2));
  }
});
var Ik = /* @__PURE__ */ Se(Pk, [["__file", "badge.vue"]]);
const Rk = nn(Ik), Qp = Symbol("buttonGroupContextKey"), eg = ({ from: t, replacement: e, scope: n, version: i, ref: s, type: o = "API" }, r) => {
  ae(() => p(r), (l) => {
  }, {
    immediate: !0
  });
}, Lk = (t, e) => {
  eg({
    from: "type.text",
    replacement: "link",
    version: "3.0.0",
    scope: "props",
    ref: "https://element-plus.org/en-US/component/button.html#button-attributes"
  }, C(() => t.type === "text"));
  const n = de(Qp, void 0), i = xl("button"), { form: s } = Al(), o = Ws(C(() => n?.size)), r = El(), l = M(), a = Ic(), c = C(() => t.type || n?.type || ""), u = C(() => {
    var g, m, y;
    return (y = (m = t.autoInsertSpace) != null ? m : (g = i.value) == null ? void 0 : g.autoInsertSpace) != null ? y : !1;
  }), f = C(() => t.tag === "button" ? {
    ariaDisabled: r.value || t.loading,
    disabled: r.value || t.loading,
    autofocus: t.autofocus,
    type: t.nativeType
  } : {}), d = C(() => {
    var g;
    const m = (g = a.default) == null ? void 0 : g.call(a);
    if (u.value && m?.length === 1) {
      const y = m[0];
      if (y?.type === Lh) {
        const v = y.children;
        return /^\p{Unified_Ideograph}{2}$/u.test(v.trim());
      }
    }
    return !1;
  });
  return {
    _disabled: r,
    _size: o,
    _type: c,
    _ref: l,
    _props: f,
    shouldAddSpace: d,
    handleClick: (g) => {
      if (r.value || t.loading) {
        g.stopPropagation();
        return;
      }
      t.nativeType === "reset" && s?.resetFields(), e("click", g);
    }
  };
}, Bk = [
  "default",
  "primary",
  "success",
  "warning",
  "info",
  "danger",
  "text",
  ""
], $k = ["button", "submit", "reset"], Ba = Ee({
  size: Vo,
  disabled: Boolean,
  type: {
    type: String,
    values: Bk,
    default: ""
  },
  icon: {
    type: qn
  },
  nativeType: {
    type: String,
    values: $k,
    default: "button"
  },
  loading: Boolean,
  loadingIcon: {
    type: qn,
    default: () => mp
  },
  plain: Boolean,
  text: Boolean,
  link: Boolean,
  bg: Boolean,
  autofocus: Boolean,
  round: Boolean,
  circle: Boolean,
  color: String,
  dark: Boolean,
  autoInsertSpace: {
    type: Boolean,
    default: void 0
  },
  tag: {
    type: re([String, Object]),
    default: "button"
  }
}), Fk = {
  click: (t) => t instanceof MouseEvent
};
function Ct(t, e) {
  Nk(t) && (t = "100%");
  var n = Vk(t);
  return t = e === 360 ? t : Math.min(e, Math.max(0, parseFloat(t))), n && (t = parseInt(String(t * e), 10) / 100), Math.abs(t - e) < 1e-6 ? 1 : (e === 360 ? t = (t < 0 ? t % e + e : t % e) / parseFloat(String(e)) : t = t % e / parseFloat(String(e)), t);
}
function ir(t) {
  return Math.min(1, Math.max(0, t));
}
function Nk(t) {
  return typeof t == "string" && t.indexOf(".") !== -1 && parseFloat(t) === 1;
}
function Vk(t) {
  return typeof t == "string" && t.indexOf("%") !== -1;
}
function tg(t) {
  return t = parseFloat(t), (isNaN(t) || t < 0 || t > 1) && (t = 1), t;
}
function sr(t) {
  return t <= 1 ? "".concat(Number(t) * 100, "%") : t;
}
function Yi(t) {
  return t.length === 1 ? "0" + t : String(t);
}
function zk(t, e, n) {
  return {
    r: Ct(t, 255) * 255,
    g: Ct(e, 255) * 255,
    b: Ct(n, 255) * 255
  };
}
function sd(t, e, n) {
  t = Ct(t, 255), e = Ct(e, 255), n = Ct(n, 255);
  var i = Math.max(t, e, n), s = Math.min(t, e, n), o = 0, r = 0, l = (i + s) / 2;
  if (i === s)
    r = 0, o = 0;
  else {
    var a = i - s;
    switch (r = l > 0.5 ? a / (2 - i - s) : a / (i + s), i) {
      case t:
        o = (e - n) / a + (e < n ? 6 : 0);
        break;
      case e:
        o = (n - t) / a + 2;
        break;
      case n:
        o = (t - e) / a + 4;
        break;
    }
    o /= 6;
  }
  return { h: o, s: r, l };
}
function ea(t, e, n) {
  return n < 0 && (n += 1), n > 1 && (n -= 1), n < 1 / 6 ? t + (e - t) * (6 * n) : n < 1 / 2 ? e : n < 2 / 3 ? t + (e - t) * (2 / 3 - n) * 6 : t;
}
function Hk(t, e, n) {
  var i, s, o;
  if (t = Ct(t, 360), e = Ct(e, 100), n = Ct(n, 100), e === 0)
    s = n, o = n, i = n;
  else {
    var r = n < 0.5 ? n * (1 + e) : n + e - n * e, l = 2 * n - r;
    i = ea(l, r, t + 1 / 3), s = ea(l, r, t), o = ea(l, r, t - 1 / 3);
  }
  return { r: i * 255, g: s * 255, b: o * 255 };
}
function od(t, e, n) {
  t = Ct(t, 255), e = Ct(e, 255), n = Ct(n, 255);
  var i = Math.max(t, e, n), s = Math.min(t, e, n), o = 0, r = i, l = i - s, a = i === 0 ? 0 : l / i;
  if (i === s)
    o = 0;
  else {
    switch (i) {
      case t:
        o = (e - n) / l + (e < n ? 6 : 0);
        break;
      case e:
        o = (n - t) / l + 2;
        break;
      case n:
        o = (t - e) / l + 4;
        break;
    }
    o /= 6;
  }
  return { h: o, s: a, v: r };
}
function Wk(t, e, n) {
  t = Ct(t, 360) * 6, e = Ct(e, 100), n = Ct(n, 100);
  var i = Math.floor(t), s = t - i, o = n * (1 - e), r = n * (1 - s * e), l = n * (1 - (1 - s) * e), a = i % 6, c = [n, r, o, o, l, n][a], u = [l, n, n, r, o, o][a], f = [o, o, l, n, n, r][a];
  return { r: c * 255, g: u * 255, b: f * 255 };
}
function rd(t, e, n, i) {
  var s = [
    Yi(Math.round(t).toString(16)),
    Yi(Math.round(e).toString(16)),
    Yi(Math.round(n).toString(16))
  ];
  return i && s[0].startsWith(s[0].charAt(1)) && s[1].startsWith(s[1].charAt(1)) && s[2].startsWith(s[2].charAt(1)) ? s[0].charAt(0) + s[1].charAt(0) + s[2].charAt(0) : s.join("");
}
function Gk(t, e, n, i, s) {
  var o = [
    Yi(Math.round(t).toString(16)),
    Yi(Math.round(e).toString(16)),
    Yi(Math.round(n).toString(16)),
    Yi(jk(i))
  ];
  return s && o[0].startsWith(o[0].charAt(1)) && o[1].startsWith(o[1].charAt(1)) && o[2].startsWith(o[2].charAt(1)) && o[3].startsWith(o[3].charAt(1)) ? o[0].charAt(0) + o[1].charAt(0) + o[2].charAt(0) + o[3].charAt(0) : o.join("");
}
function jk(t) {
  return Math.round(parseFloat(t) * 255).toString(16);
}
function ld(t) {
  return Yt(t) / 255;
}
function Yt(t) {
  return parseInt(t, 16);
}
function Kk(t) {
  return {
    r: t >> 16,
    g: (t & 65280) >> 8,
    b: t & 255
  };
}
var $a = {
  aliceblue: "#f0f8ff",
  antiquewhite: "#faebd7",
  aqua: "#00ffff",
  aquamarine: "#7fffd4",
  azure: "#f0ffff",
  beige: "#f5f5dc",
  bisque: "#ffe4c4",
  black: "#000000",
  blanchedalmond: "#ffebcd",
  blue: "#0000ff",
  blueviolet: "#8a2be2",
  brown: "#a52a2a",
  burlywood: "#deb887",
  cadetblue: "#5f9ea0",
  chartreuse: "#7fff00",
  chocolate: "#d2691e",
  coral: "#ff7f50",
  cornflowerblue: "#6495ed",
  cornsilk: "#fff8dc",
  crimson: "#dc143c",
  cyan: "#00ffff",
  darkblue: "#00008b",
  darkcyan: "#008b8b",
  darkgoldenrod: "#b8860b",
  darkgray: "#a9a9a9",
  darkgreen: "#006400",
  darkgrey: "#a9a9a9",
  darkkhaki: "#bdb76b",
  darkmagenta: "#8b008b",
  darkolivegreen: "#556b2f",
  darkorange: "#ff8c00",
  darkorchid: "#9932cc",
  darkred: "#8b0000",
  darksalmon: "#e9967a",
  darkseagreen: "#8fbc8f",
  darkslateblue: "#483d8b",
  darkslategray: "#2f4f4f",
  darkslategrey: "#2f4f4f",
  darkturquoise: "#00ced1",
  darkviolet: "#9400d3",
  deeppink: "#ff1493",
  deepskyblue: "#00bfff",
  dimgray: "#696969",
  dimgrey: "#696969",
  dodgerblue: "#1e90ff",
  firebrick: "#b22222",
  floralwhite: "#fffaf0",
  forestgreen: "#228b22",
  fuchsia: "#ff00ff",
  gainsboro: "#dcdcdc",
  ghostwhite: "#f8f8ff",
  goldenrod: "#daa520",
  gold: "#ffd700",
  gray: "#808080",
  green: "#008000",
  greenyellow: "#adff2f",
  grey: "#808080",
  honeydew: "#f0fff0",
  hotpink: "#ff69b4",
  indianred: "#cd5c5c",
  indigo: "#4b0082",
  ivory: "#fffff0",
  khaki: "#f0e68c",
  lavenderblush: "#fff0f5",
  lavender: "#e6e6fa",
  lawngreen: "#7cfc00",
  lemonchiffon: "#fffacd",
  lightblue: "#add8e6",
  lightcoral: "#f08080",
  lightcyan: "#e0ffff",
  lightgoldenrodyellow: "#fafad2",
  lightgray: "#d3d3d3",
  lightgreen: "#90ee90",
  lightgrey: "#d3d3d3",
  lightpink: "#ffb6c1",
  lightsalmon: "#ffa07a",
  lightseagreen: "#20b2aa",
  lightskyblue: "#87cefa",
  lightslategray: "#778899",
  lightslategrey: "#778899",
  lightsteelblue: "#b0c4de",
  lightyellow: "#ffffe0",
  lime: "#00ff00",
  limegreen: "#32cd32",
  linen: "#faf0e6",
  magenta: "#ff00ff",
  maroon: "#800000",
  mediumaquamarine: "#66cdaa",
  mediumblue: "#0000cd",
  mediumorchid: "#ba55d3",
  mediumpurple: "#9370db",
  mediumseagreen: "#3cb371",
  mediumslateblue: "#7b68ee",
  mediumspringgreen: "#00fa9a",
  mediumturquoise: "#48d1cc",
  mediumvioletred: "#c71585",
  midnightblue: "#191970",
  mintcream: "#f5fffa",
  mistyrose: "#ffe4e1",
  moccasin: "#ffe4b5",
  navajowhite: "#ffdead",
  navy: "#000080",
  oldlace: "#fdf5e6",
  olive: "#808000",
  olivedrab: "#6b8e23",
  orange: "#ffa500",
  orangered: "#ff4500",
  orchid: "#da70d6",
  palegoldenrod: "#eee8aa",
  palegreen: "#98fb98",
  paleturquoise: "#afeeee",
  palevioletred: "#db7093",
  papayawhip: "#ffefd5",
  peachpuff: "#ffdab9",
  peru: "#cd853f",
  pink: "#ffc0cb",
  plum: "#dda0dd",
  powderblue: "#b0e0e6",
  purple: "#800080",
  rebeccapurple: "#663399",
  red: "#ff0000",
  rosybrown: "#bc8f8f",
  royalblue: "#4169e1",
  saddlebrown: "#8b4513",
  salmon: "#fa8072",
  sandybrown: "#f4a460",
  seagreen: "#2e8b57",
  seashell: "#fff5ee",
  sienna: "#a0522d",
  silver: "#c0c0c0",
  skyblue: "#87ceeb",
  slateblue: "#6a5acd",
  slategray: "#708090",
  slategrey: "#708090",
  snow: "#fffafa",
  springgreen: "#00ff7f",
  steelblue: "#4682b4",
  tan: "#d2b48c",
  teal: "#008080",
  thistle: "#d8bfd8",
  tomato: "#ff6347",
  turquoise: "#40e0d0",
  violet: "#ee82ee",
  wheat: "#f5deb3",
  white: "#ffffff",
  whitesmoke: "#f5f5f5",
  yellow: "#ffff00",
  yellowgreen: "#9acd32"
};
function Uk(t) {
  var e = { r: 0, g: 0, b: 0 }, n = 1, i = null, s = null, o = null, r = !1, l = !1;
  return typeof t == "string" && (t = Jk(t)), typeof t == "object" && (ei(t.r) && ei(t.g) && ei(t.b) ? (e = zk(t.r, t.g, t.b), r = !0, l = String(t.r).substr(-1) === "%" ? "prgb" : "rgb") : ei(t.h) && ei(t.s) && ei(t.v) ? (i = sr(t.s), s = sr(t.v), e = Wk(t.h, i, s), r = !0, l = "hsv") : ei(t.h) && ei(t.s) && ei(t.l) && (i = sr(t.s), o = sr(t.l), e = Hk(t.h, i, o), r = !0, l = "hsl"), Object.prototype.hasOwnProperty.call(t, "a") && (n = t.a)), n = tg(n), {
    ok: r,
    format: t.format || l,
    r: Math.min(255, Math.max(e.r, 0)),
    g: Math.min(255, Math.max(e.g, 0)),
    b: Math.min(255, Math.max(e.b, 0)),
    a: n
  };
}
var qk = "[-\\+]?\\d+%?", Yk = "[-\\+]?\\d*\\.\\d+%?", Ti = "(?:".concat(Yk, ")|(?:").concat(qk, ")"), ta = "[\\s|\\(]+(".concat(Ti, ")[,|\\s]+(").concat(Ti, ")[,|\\s]+(").concat(Ti, ")\\s*\\)?"), na = "[\\s|\\(]+(".concat(Ti, ")[,|\\s]+(").concat(Ti, ")[,|\\s]+(").concat(Ti, ")[,|\\s]+(").concat(Ti, ")\\s*\\)?"), Cn = {
  CSS_UNIT: new RegExp(Ti),
  rgb: new RegExp("rgb" + ta),
  rgba: new RegExp("rgba" + na),
  hsl: new RegExp("hsl" + ta),
  hsla: new RegExp("hsla" + na),
  hsv: new RegExp("hsv" + ta),
  hsva: new RegExp("hsva" + na),
  hex3: /^#?([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,
  hex6: /^#?([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})$/,
  hex4: /^#?([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,
  hex8: /^#?([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})$/
};
function Jk(t) {
  if (t = t.trim().toLowerCase(), t.length === 0)
    return !1;
  var e = !1;
  if ($a[t])
    t = $a[t], e = !0;
  else if (t === "transparent")
    return { r: 0, g: 0, b: 0, a: 0, format: "name" };
  var n = Cn.rgb.exec(t);
  return n ? { r: n[1], g: n[2], b: n[3] } : (n = Cn.rgba.exec(t), n ? { r: n[1], g: n[2], b: n[3], a: n[4] } : (n = Cn.hsl.exec(t), n ? { h: n[1], s: n[2], l: n[3] } : (n = Cn.hsla.exec(t), n ? { h: n[1], s: n[2], l: n[3], a: n[4] } : (n = Cn.hsv.exec(t), n ? { h: n[1], s: n[2], v: n[3] } : (n = Cn.hsva.exec(t), n ? { h: n[1], s: n[2], v: n[3], a: n[4] } : (n = Cn.hex8.exec(t), n ? {
    r: Yt(n[1]),
    g: Yt(n[2]),
    b: Yt(n[3]),
    a: ld(n[4]),
    format: e ? "name" : "hex8"
  } : (n = Cn.hex6.exec(t), n ? {
    r: Yt(n[1]),
    g: Yt(n[2]),
    b: Yt(n[3]),
    format: e ? "name" : "hex"
  } : (n = Cn.hex4.exec(t), n ? {
    r: Yt(n[1] + n[1]),
    g: Yt(n[2] + n[2]),
    b: Yt(n[3] + n[3]),
    a: ld(n[4] + n[4]),
    format: e ? "name" : "hex8"
  } : (n = Cn.hex3.exec(t), n ? {
    r: Yt(n[1] + n[1]),
    g: Yt(n[2] + n[2]),
    b: Yt(n[3] + n[3]),
    format: e ? "name" : "hex"
  } : !1)))))))));
}
function ei(t) {
  return !!Cn.CSS_UNIT.exec(String(t));
}
var Xk = (
  /** @class */
  function() {
    function t(e, n) {
      e === void 0 && (e = ""), n === void 0 && (n = {});
      var i;
      if (e instanceof t)
        return e;
      typeof e == "number" && (e = Kk(e)), this.originalInput = e;
      var s = Uk(e);
      this.originalInput = e, this.r = s.r, this.g = s.g, this.b = s.b, this.a = s.a, this.roundA = Math.round(100 * this.a) / 100, this.format = (i = n.format) !== null && i !== void 0 ? i : s.format, this.gradientType = n.gradientType, this.r < 1 && (this.r = Math.round(this.r)), this.g < 1 && (this.g = Math.round(this.g)), this.b < 1 && (this.b = Math.round(this.b)), this.isValid = s.ok;
    }
    return t.prototype.isDark = function() {
      return this.getBrightness() < 128;
    }, t.prototype.isLight = function() {
      return !this.isDark();
    }, t.prototype.getBrightness = function() {
      var e = this.toRgb();
      return (e.r * 299 + e.g * 587 + e.b * 114) / 1e3;
    }, t.prototype.getLuminance = function() {
      var e = this.toRgb(), n, i, s, o = e.r / 255, r = e.g / 255, l = e.b / 255;
      return o <= 0.03928 ? n = o / 12.92 : n = Math.pow((o + 0.055) / 1.055, 2.4), r <= 0.03928 ? i = r / 12.92 : i = Math.pow((r + 0.055) / 1.055, 2.4), l <= 0.03928 ? s = l / 12.92 : s = Math.pow((l + 0.055) / 1.055, 2.4), 0.2126 * n + 0.7152 * i + 0.0722 * s;
    }, t.prototype.getAlpha = function() {
      return this.a;
    }, t.prototype.setAlpha = function(e) {
      return this.a = tg(e), this.roundA = Math.round(100 * this.a) / 100, this;
    }, t.prototype.isMonochrome = function() {
      var e = this.toHsl().s;
      return e === 0;
    }, t.prototype.toHsv = function() {
      var e = od(this.r, this.g, this.b);
      return { h: e.h * 360, s: e.s, v: e.v, a: this.a };
    }, t.prototype.toHsvString = function() {
      var e = od(this.r, this.g, this.b), n = Math.round(e.h * 360), i = Math.round(e.s * 100), s = Math.round(e.v * 100);
      return this.a === 1 ? "hsv(".concat(n, ", ").concat(i, "%, ").concat(s, "%)") : "hsva(".concat(n, ", ").concat(i, "%, ").concat(s, "%, ").concat(this.roundA, ")");
    }, t.prototype.toHsl = function() {
      var e = sd(this.r, this.g, this.b);
      return { h: e.h * 360, s: e.s, l: e.l, a: this.a };
    }, t.prototype.toHslString = function() {
      var e = sd(this.r, this.g, this.b), n = Math.round(e.h * 360), i = Math.round(e.s * 100), s = Math.round(e.l * 100);
      return this.a === 1 ? "hsl(".concat(n, ", ").concat(i, "%, ").concat(s, "%)") : "hsla(".concat(n, ", ").concat(i, "%, ").concat(s, "%, ").concat(this.roundA, ")");
    }, t.prototype.toHex = function(e) {
      return e === void 0 && (e = !1), rd(this.r, this.g, this.b, e);
    }, t.prototype.toHexString = function(e) {
      return e === void 0 && (e = !1), "#" + this.toHex(e);
    }, t.prototype.toHex8 = function(e) {
      return e === void 0 && (e = !1), Gk(this.r, this.g, this.b, this.a, e);
    }, t.prototype.toHex8String = function(e) {
      return e === void 0 && (e = !1), "#" + this.toHex8(e);
    }, t.prototype.toHexShortString = function(e) {
      return e === void 0 && (e = !1), this.a === 1 ? this.toHexString(e) : this.toHex8String(e);
    }, t.prototype.toRgb = function() {
      return {
        r: Math.round(this.r),
        g: Math.round(this.g),
        b: Math.round(this.b),
        a: this.a
      };
    }, t.prototype.toRgbString = function() {
      var e = Math.round(this.r), n = Math.round(this.g), i = Math.round(this.b);
      return this.a === 1 ? "rgb(".concat(e, ", ").concat(n, ", ").concat(i, ")") : "rgba(".concat(e, ", ").concat(n, ", ").concat(i, ", ").concat(this.roundA, ")");
    }, t.prototype.toPercentageRgb = function() {
      var e = function(n) {
        return "".concat(Math.round(Ct(n, 255) * 100), "%");
      };
      return {
        r: e(this.r),
        g: e(this.g),
        b: e(this.b),
        a: this.a
      };
    }, t.prototype.toPercentageRgbString = function() {
      var e = function(n) {
        return Math.round(Ct(n, 255) * 100);
      };
      return this.a === 1 ? "rgb(".concat(e(this.r), "%, ").concat(e(this.g), "%, ").concat(e(this.b), "%)") : "rgba(".concat(e(this.r), "%, ").concat(e(this.g), "%, ").concat(e(this.b), "%, ").concat(this.roundA, ")");
    }, t.prototype.toName = function() {
      if (this.a === 0)
        return "transparent";
      if (this.a < 1)
        return !1;
      for (var e = "#" + rd(this.r, this.g, this.b, !1), n = 0, i = Object.entries($a); n < i.length; n++) {
        var s = i[n], o = s[0], r = s[1];
        if (e === r)
          return o;
      }
      return !1;
    }, t.prototype.toString = function(e) {
      var n = !!e;
      e = e ?? this.format;
      var i = !1, s = this.a < 1 && this.a >= 0, o = !n && s && (e.startsWith("hex") || e === "name");
      return o ? e === "name" && this.a === 0 ? this.toName() : this.toRgbString() : (e === "rgb" && (i = this.toRgbString()), e === "prgb" && (i = this.toPercentageRgbString()), (e === "hex" || e === "hex6") && (i = this.toHexString()), e === "hex3" && (i = this.toHexString(!0)), e === "hex4" && (i = this.toHex8String(!0)), e === "hex8" && (i = this.toHex8String()), e === "name" && (i = this.toName()), e === "hsl" && (i = this.toHslString()), e === "hsv" && (i = this.toHsvString()), i || this.toHexString());
    }, t.prototype.toNumber = function() {
      return (Math.round(this.r) << 16) + (Math.round(this.g) << 8) + Math.round(this.b);
    }, t.prototype.clone = function() {
      return new t(this.toString());
    }, t.prototype.lighten = function(e) {
      e === void 0 && (e = 10);
      var n = this.toHsl();
      return n.l += e / 100, n.l = ir(n.l), new t(n);
    }, t.prototype.brighten = function(e) {
      e === void 0 && (e = 10);
      var n = this.toRgb();
      return n.r = Math.max(0, Math.min(255, n.r - Math.round(255 * -(e / 100)))), n.g = Math.max(0, Math.min(255, n.g - Math.round(255 * -(e / 100)))), n.b = Math.max(0, Math.min(255, n.b - Math.round(255 * -(e / 100)))), new t(n);
    }, t.prototype.darken = function(e) {
      e === void 0 && (e = 10);
      var n = this.toHsl();
      return n.l -= e / 100, n.l = ir(n.l), new t(n);
    }, t.prototype.tint = function(e) {
      return e === void 0 && (e = 10), this.mix("white", e);
    }, t.prototype.shade = function(e) {
      return e === void 0 && (e = 10), this.mix("black", e);
    }, t.prototype.desaturate = function(e) {
      e === void 0 && (e = 10);
      var n = this.toHsl();
      return n.s -= e / 100, n.s = ir(n.s), new t(n);
    }, t.prototype.saturate = function(e) {
      e === void 0 && (e = 10);
      var n = this.toHsl();
      return n.s += e / 100, n.s = ir(n.s), new t(n);
    }, t.prototype.greyscale = function() {
      return this.desaturate(100);
    }, t.prototype.spin = function(e) {
      var n = this.toHsl(), i = (n.h + e) % 360;
      return n.h = i < 0 ? 360 + i : i, new t(n);
    }, t.prototype.mix = function(e, n) {
      n === void 0 && (n = 50);
      var i = this.toRgb(), s = new t(e).toRgb(), o = n / 100, r = {
        r: (s.r - i.r) * o + i.r,
        g: (s.g - i.g) * o + i.g,
        b: (s.b - i.b) * o + i.b,
        a: (s.a - i.a) * o + i.a
      };
      return new t(r);
    }, t.prototype.analogous = function(e, n) {
      e === void 0 && (e = 6), n === void 0 && (n = 30);
      var i = this.toHsl(), s = 360 / n, o = [this];
      for (i.h = (i.h - (s * e >> 1) + 720) % 360; --e; )
        i.h = (i.h + s) % 360, o.push(new t(i));
      return o;
    }, t.prototype.complement = function() {
      var e = this.toHsl();
      return e.h = (e.h + 180) % 360, new t(e);
    }, t.prototype.monochromatic = function(e) {
      e === void 0 && (e = 6);
      for (var n = this.toHsv(), i = n.h, s = n.s, o = n.v, r = [], l = 1 / e; e--; )
        r.push(new t({ h: i, s, v: o })), o = (o + l) % 1;
      return r;
    }, t.prototype.splitcomplement = function() {
      var e = this.toHsl(), n = e.h;
      return [
        this,
        new t({ h: (n + 72) % 360, s: e.s, l: e.l }),
        new t({ h: (n + 216) % 360, s: e.s, l: e.l })
      ];
    }, t.prototype.onBackground = function(e) {
      var n = this.toRgb(), i = new t(e).toRgb(), s = n.a + i.a * (1 - n.a);
      return new t({
        r: (n.r * n.a + i.r * i.a * (1 - n.a)) / s,
        g: (n.g * n.a + i.g * i.a * (1 - n.a)) / s,
        b: (n.b * n.a + i.b * i.a * (1 - n.a)) / s,
        a: s
      });
    }, t.prototype.triad = function() {
      return this.polyad(3);
    }, t.prototype.tetrad = function() {
      return this.polyad(4);
    }, t.prototype.polyad = function(e) {
      for (var n = this.toHsl(), i = n.h, s = [this], o = 360 / e, r = 1; r < e; r++)
        s.push(new t({ h: (i + r * o) % 360, s: n.s, l: n.l }));
      return s;
    }, t.prototype.equals = function(e) {
      return this.toRgbString() === new t(e).toRgbString();
    }, t;
  }()
);
function wi(t, e = 20) {
  return t.mix("#141414", e).toString();
}
function Zk(t) {
  const e = El(), n = Le("button");
  return C(() => {
    let i = {}, s = t.color;
    if (s) {
      const o = s.match(/var\((.*?)\)/);
      o && (s = window.getComputedStyle(window.document.documentElement).getPropertyValue(o[1]));
      const r = new Xk(s), l = t.dark ? r.tint(20).toString() : wi(r, 20);
      if (t.plain)
        i = n.cssVarBlock({
          "bg-color": t.dark ? wi(r, 90) : r.tint(90).toString(),
          "text-color": s,
          "border-color": t.dark ? wi(r, 50) : r.tint(50).toString(),
          "hover-text-color": `var(${n.cssVarName("color-white")})`,
          "hover-bg-color": s,
          "hover-border-color": s,
          "active-bg-color": l,
          "active-text-color": `var(${n.cssVarName("color-white")})`,
          "active-border-color": l
        }), e.value && (i[n.cssVarBlockName("disabled-bg-color")] = t.dark ? wi(r, 90) : r.tint(90).toString(), i[n.cssVarBlockName("disabled-text-color")] = t.dark ? wi(r, 50) : r.tint(50).toString(), i[n.cssVarBlockName("disabled-border-color")] = t.dark ? wi(r, 80) : r.tint(80).toString());
      else {
        const a = t.dark ? wi(r, 30) : r.tint(30).toString(), c = r.isDark() ? `var(${n.cssVarName("color-white")})` : `var(${n.cssVarName("color-black")})`;
        if (i = n.cssVarBlock({
          "bg-color": s,
          "text-color": c,
          "border-color": s,
          "hover-bg-color": a,
          "hover-text-color": c,
          "hover-border-color": a,
          "active-bg-color": l,
          "active-border-color": l
        }), e.value) {
          const u = t.dark ? wi(r, 50) : r.tint(50).toString();
          i[n.cssVarBlockName("disabled-bg-color")] = u, i[n.cssVarBlockName("disabled-text-color")] = t.dark ? "rgba(255, 255, 255, 0.5)" : `var(${n.cssVarName("color-white")})`, i[n.cssVarBlockName("disabled-border-color")] = u;
        }
      }
    }
    return i;
  });
}
const Qk = J({
  name: "ElButton"
}), e_ = /* @__PURE__ */ J({
  ...Qk,
  props: Ba,
  emits: Fk,
  setup(t, { expose: e, emit: n }) {
    const i = t, s = Zk(i), o = Le("button"), { _ref: r, _size: l, _type: a, _disabled: c, _props: u, shouldAddSpace: f, handleClick: d } = Lk(i, n), h = C(() => [
      o.b(),
      o.m(a.value),
      o.m(l.value),
      o.is("disabled", c.value),
      o.is("loading", i.loading),
      o.is("plain", i.plain),
      o.is("round", i.round),
      o.is("circle", i.circle),
      o.is("text", i.text),
      o.is("link", i.link),
      o.is("has-bg", i.bg)
    ]);
    return e({
      ref: r,
      size: l,
      type: a,
      disabled: c,
      shouldAddSpace: f
    }), (g, m) => (S(), te(Rt(g.tag), hn({
      ref_key: "_ref",
      ref: r
    }, p(u), {
      class: p(h),
      style: p(s),
      onClick: p(d)
    }), {
      default: j(() => [
        g.loading ? (S(), D(ye, { key: 0 }, [
          g.$slots.loading ? ne(g.$slots, "loading", { key: 0 }) : (S(), te(p(ft), {
            key: 1,
            class: F(p(o).is("loading"))
          }, {
            default: j(() => [
              (S(), te(Rt(g.loadingIcon)))
            ]),
            _: 1
          }, 8, ["class"]))
        ], 64)) : g.icon || g.$slots.icon ? (S(), te(p(ft), { key: 1 }, {
          default: j(() => [
            g.icon ? (S(), te(Rt(g.icon), { key: 0 })) : ne(g.$slots, "icon", { key: 1 })
          ]),
          _: 3
        })) : N("v-if", !0),
        g.$slots.default ? (S(), D("span", {
          key: 2,
          class: F({ [p(o).em("text", "expand")]: p(f) })
        }, [
          ne(g.$slots, "default")
        ], 2)) : N("v-if", !0)
      ]),
      _: 3
    }, 16, ["class", "style", "onClick"]));
  }
});
var t_ = /* @__PURE__ */ Se(e_, [["__file", "button.vue"]]);
const n_ = {
  size: Ba.size,
  type: Ba.type
}, i_ = J({
  name: "ElButtonGroup"
}), s_ = /* @__PURE__ */ J({
  ...i_,
  props: n_,
  setup(t) {
    const e = t;
    gt(Qp, Ii({
      size: Mt(e, "size"),
      type: Mt(e, "type")
    }));
    const n = Le("button");
    return (i, s) => (S(), D("div", {
      class: F(p(n).b("group"))
    }, [
      ne(i.$slots, "default")
    ], 2));
  }
});
var ng = /* @__PURE__ */ Se(s_, [["__file", "button-group.vue"]]);
const ig = nn(t_, {
  ButtonGroup: ng
});
zo(ng);
var Er = /* @__PURE__ */ ((t) => (t[t.TEXT = 1] = "TEXT", t[t.CLASS = 2] = "CLASS", t[t.STYLE = 4] = "STYLE", t[t.PROPS = 8] = "PROPS", t[t.FULL_PROPS = 16] = "FULL_PROPS", t[t.HYDRATE_EVENTS = 32] = "HYDRATE_EVENTS", t[t.STABLE_FRAGMENT = 64] = "STABLE_FRAGMENT", t[t.KEYED_FRAGMENT = 128] = "KEYED_FRAGMENT", t[t.UNKEYED_FRAGMENT = 256] = "UNKEYED_FRAGMENT", t[t.NEED_PATCH = 512] = "NEED_PATCH", t[t.DYNAMIC_SLOTS = 1024] = "DYNAMIC_SLOTS", t[t.HOISTED = -1] = "HOISTED", t[t.BAIL = -2] = "BAIL", t))(Er || {});
const o_ = (t = "") => t.replace(/[|\\{}()[\]^$+*?.]/g, "\\$&").replace(/-/g, "\\x2d"), Fa = Ee({
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
    values: ap
  },
  effect: {
    type: String,
    values: ["dark", "light", "plain"],
    default: "light"
  },
  round: Boolean
}), r_ = {
  close: (t) => t instanceof MouseEvent,
  click: (t) => t instanceof MouseEvent
}, l_ = J({
  name: "ElTag"
}), a_ = /* @__PURE__ */ J({
  ...l_,
  props: Fa,
  emits: r_,
  setup(t, { emit: e }) {
    const n = t, i = Ws(), s = Le("tag"), o = C(() => {
      const { type: c, hit: u, effect: f, closable: d, round: h } = n;
      return [
        s.b(),
        s.is("closable", d),
        s.m(c || "primary"),
        s.m(i.value),
        s.m(f),
        s.is("hit", u),
        s.is("round", h)
      ];
    }), r = (c) => {
      e("close", c);
    }, l = (c) => {
      e("click", c);
    }, a = (c) => {
      var u, f, d;
      (d = (f = (u = c?.component) == null ? void 0 : u.subTree) == null ? void 0 : f.component) != null && d.bum && (c.component.subTree.component.bum = null);
    };
    return (c, u) => c.disableTransitions ? (S(), D("span", {
      key: 0,
      class: F(p(o)),
      style: je({ backgroundColor: c.color }),
      onClick: l
    }, [
      b("span", {
        class: F(p(s).e("content"))
      }, [
        ne(c.$slots, "default")
      ], 2),
      c.closable ? (S(), te(p(ft), {
        key: 0,
        class: F(p(s).e("close")),
        onClick: Xe(r, ["stop"])
      }, {
        default: j(() => [
          U(p(qr))
        ]),
        _: 1
      }, 8, ["class", "onClick"])) : N("v-if", !0)
    ], 6)) : (S(), te(pi, {
      key: 1,
      name: `${p(s).namespace.value}-zoom-in-center`,
      appear: "",
      onVnodeMounted: a
    }, {
      default: j(() => [
        b("span", {
          class: F(p(o)),
          style: je({ backgroundColor: c.color }),
          onClick: l
        }, [
          b("span", {
            class: F(p(s).e("content"))
          }, [
            ne(c.$slots, "default")
          ], 2),
          c.closable ? (S(), te(p(ft), {
            key: 0,
            class: F(p(s).e("close")),
            onClick: Xe(r, ["stop"])
          }, {
            default: j(() => [
              U(p(qr))
            ]),
            _: 1
          }, 8, ["class", "onClick"])) : N("v-if", !0)
        ], 6)
      ]),
      _: 3
    }, 8, ["name"]));
  }
});
var c_ = /* @__PURE__ */ Se(a_, [["__file", "tag.vue"]]);
const u_ = nn(c_), Si = /* @__PURE__ */ new Map();
if (Ke) {
  let t;
  document.addEventListener("mousedown", (e) => t = e), document.addEventListener("mouseup", (e) => {
    if (t) {
      for (const n of Si.values())
        for (const { documentHandler: i } of n)
          i(e, t);
      t = void 0;
    }
  });
}
function ad(t, e) {
  let n = [];
  return Nn(e.arg) ? n = e.arg : xn(e.arg) && n.push(e.arg), function(i, s) {
    const o = e.instance.popperRef, r = i.target, l = s?.target, a = !e || !e.instance, c = !r || !l, u = t.contains(r) || t.contains(l), f = t === r, d = n.length && n.some((g) => g?.contains(r)) || n.length && n.includes(l), h = o && (o.contains(r) || o.contains(l));
    a || c || u || f || d || h || e.value(i, s);
  };
}
const f_ = {
  beforeMount(t, e) {
    Si.has(t) || Si.set(t, []), Si.get(t).push({
      documentHandler: ad(t, e),
      bindingFn: e.value
    });
  },
  updated(t, e) {
    Si.has(t) || Si.set(t, []);
    const n = Si.get(t), i = n.findIndex((o) => o.bindingFn === e.oldValue), s = {
      documentHandler: ad(t, e),
      bindingFn: e.value
    };
    i >= 0 ? n.splice(i, 1, s) : n.push(s);
  },
  unmounted(t) {
    Si.delete(t);
  }
}, d_ = Ee({
  a11y: {
    type: Boolean,
    default: !0
  },
  locale: {
    type: re(Object)
  },
  size: Vo,
  button: {
    type: re(Object)
  },
  experimentalFeatures: {
    type: re(Object)
  },
  keyboardNavigation: {
    type: Boolean,
    default: !0
  },
  message: {
    type: re(Object)
  },
  zIndex: Number,
  namespace: {
    type: String,
    default: "el"
  },
  ...fp
}), kn = {};
J({
  name: "ElConfigProvider",
  props: d_,
  setup(t, { slots: e }) {
    ae(() => t.message, (i) => {
      Object.assign(kn, i ?? {});
    }, { immediate: !0, deep: !0 });
    const n = hp(t);
    return () => ne(e, "default", { config: n?.value });
  }
});
const h_ = 100, p_ = 600, cd = {
  beforeMount(t, e) {
    const n = e.value, { interval: i = h_, delay: s = p_ } = tt(n) ? {} : n;
    let o, r;
    const l = () => tt(n) ? n() : n.handler(), a = () => {
      r && (clearTimeout(r), r = void 0), o && (clearInterval(o), o = void 0);
    };
    t.addEventListener("mousedown", (c) => {
      c.button === 0 && (a(), l(), document.addEventListener("mouseup", () => a(), {
        once: !0
      }), r = setTimeout(() => {
        o = setInterval(() => {
          l();
        }, i);
      }, s));
    });
  }
}, sg = (t) => {
  if (!t)
    return { onClick: Pi, onMousedown: Pi, onMouseup: Pi };
  let e = !1, n = !1;
  return { onClick: (r) => {
    e && n && t(r), e = n = !1;
  }, onMousedown: (r) => {
    e = r.target === r.currentTarget;
  }, onMouseup: (r) => {
    n = r.target === r.currentTarget;
  } };
}, g_ = Ee({
  mask: {
    type: Boolean,
    default: !0
  },
  customMaskEvent: Boolean,
  overlayClass: {
    type: re([
      String,
      Array,
      Object
    ])
  },
  zIndex: {
    type: re([String, Number])
  }
}), m_ = {
  click: (t) => t instanceof MouseEvent
}, v_ = "overlay";
var y_ = J({
  name: "ElOverlay",
  props: g_,
  emits: m_,
  setup(t, { slots: e, emit: n }) {
    const i = Le(v_), s = (a) => {
      n("click", a);
    }, { onClick: o, onMousedown: r, onMouseup: l } = sg(t.customMaskEvent ? void 0 : s);
    return () => t.mask ? U("div", {
      class: [i.b(), t.overlayClass],
      style: {
        zIndex: t.zIndex
      },
      onClick: o,
      onMousedown: r,
      onMouseup: l
    }, [ne(e, "default")], Er.STYLE | Er.CLASS | Er.PROPS, ["onClick", "onMouseup", "onMousedown"]) : u0("div", {
      class: t.overlayClass,
      style: {
        zIndex: t.zIndex,
        position: "fixed",
        top: "0px",
        right: "0px",
        bottom: "0px",
        left: "0px"
      }
    }, [ne(e, "default")]);
  }
});
const b_ = y_, og = Symbol("dialogInjectionKey"), rg = Ee({
  center: Boolean,
  alignCenter: Boolean,
  closeIcon: {
    type: qn
  },
  draggable: Boolean,
  overflow: Boolean,
  fullscreen: Boolean,
  headerClass: String,
  bodyClass: String,
  footerClass: String,
  showClose: {
    type: Boolean,
    default: !0
  },
  title: {
    type: String,
    default: ""
  },
  ariaLevel: {
    type: String,
    default: "2"
  }
}), w_ = {
  close: () => !0
}, S_ = (t, e, n, i) => {
  let s = {
    offsetX: 0,
    offsetY: 0
  };
  const o = (c) => {
    const u = c.clientX, f = c.clientY, { offsetX: d, offsetY: h } = s, g = t.value.getBoundingClientRect(), m = g.left, y = g.top, v = g.width, w = g.height, _ = document.documentElement.clientWidth, x = document.documentElement.clientHeight, k = -m + d, T = -y + h, A = _ - m - v + d, z = x - y - w + h, B = ($) => {
      let V = d + $.clientX - u, X = h + $.clientY - f;
      i?.value || (V = Math.min(Math.max(V, k), A), X = Math.min(Math.max(X, T), z)), s = {
        offsetX: V,
        offsetY: X
      }, t.value && (t.value.style.transform = `translate(${fi(V)}, ${fi(X)})`);
    }, q = () => {
      document.removeEventListener("mousemove", B), document.removeEventListener("mouseup", q);
    };
    document.addEventListener("mousemove", B), document.addEventListener("mouseup", q);
  }, r = () => {
    e.value && t.value && e.value.addEventListener("mousedown", o);
  }, l = () => {
    e.value && t.value && e.value.removeEventListener("mousedown", o);
  }, a = () => {
    s = {
      offsetX: 0,
      offsetY: 0
    }, t.value && (t.value.style.transform = "none");
  };
  return qe(() => {
    Pc(() => {
      n.value ? r() : l();
    });
  }), tn(() => {
    l();
  }), {
    resetPosition: a
  };
}, uu = (...t) => (e) => {
  t.forEach((n) => {
    tt(n) ? n(e) : n.value = e;
  });
}, C_ = J({ name: "ElDialogContent" }), k_ = /* @__PURE__ */ J({
  ...C_,
  props: rg,
  emits: w_,
  setup(t, { expose: e }) {
    const n = t, { t: i } = No(), { Close: s } = vp, { dialogRef: o, headerRef: r, bodyId: l, ns: a, style: c } = de(og), { focusTrapRef: u } = de(Xc), f = C(() => [
      a.b(),
      a.is("fullscreen", n.fullscreen),
      a.is("draggable", n.draggable),
      a.is("align-center", n.alignCenter),
      { [a.m("center")]: n.center }
    ]), d = uu(u, o), h = C(() => n.draggable), g = C(() => n.overflow), { resetPosition: m } = S_(o, r, h, g);
    return e({
      resetPosition: m
    }), (y, v) => (S(), D("div", {
      ref: p(d),
      class: F(p(f)),
      style: je(p(c)),
      tabindex: "-1"
    }, [
      b("header", {
        ref_key: "headerRef",
        ref: r,
        class: F([p(a).e("header"), y.headerClass, { "show-close": y.showClose }])
      }, [
        ne(y.$slots, "header", {}, () => [
          b("span", {
            role: "heading",
            "aria-level": y.ariaLevel,
            class: F(p(a).e("title"))
          }, R(y.title), 11, ["aria-level"])
        ]),
        y.showClose ? (S(), D("button", {
          key: 0,
          "aria-label": p(i)("el.dialog.close"),
          class: F(p(a).e("headerbtn")),
          type: "button",
          onClick: (w) => y.$emit("close")
        }, [
          U(p(ft), {
            class: F(p(a).e("close"))
          }, {
            default: j(() => [
              (S(), te(Rt(y.closeIcon || p(s))))
            ]),
            _: 1
          }, 8, ["class"])
        ], 10, ["aria-label", "onClick"])) : N("v-if", !0)
      ], 2),
      b("div", {
        id: p(l),
        class: F([p(a).e("body"), y.bodyClass])
      }, [
        ne(y.$slots, "default")
      ], 10, ["id"]),
      y.$slots.footer ? (S(), D("footer", {
        key: 0,
        class: F([p(a).e("footer"), y.footerClass])
      }, [
        ne(y.$slots, "footer")
      ], 2)) : N("v-if", !0)
    ], 6));
  }
});
var __ = /* @__PURE__ */ Se(k_, [["__file", "dialog-content.vue"]]);
const x_ = Ee({
  ...rg,
  appendToBody: Boolean,
  appendTo: {
    type: re([String, Object]),
    default: "body"
  },
  beforeClose: {
    type: re(Function)
  },
  destroyOnClose: Boolean,
  closeOnClickModal: {
    type: Boolean,
    default: !0
  },
  closeOnPressEscape: {
    type: Boolean,
    default: !0
  },
  lockScroll: {
    type: Boolean,
    default: !0
  },
  modal: {
    type: Boolean,
    default: !0
  },
  openDelay: {
    type: Number,
    default: 0
  },
  closeDelay: {
    type: Number,
    default: 0
  },
  top: {
    type: String
  },
  modelValue: Boolean,
  modalClass: String,
  headerClass: String,
  bodyClass: String,
  footerClass: String,
  width: {
    type: [String, Number]
  },
  zIndex: {
    type: Number
  },
  trapFocus: Boolean,
  headerAriaLevel: {
    type: String,
    default: "2"
  }
}), A_ = {
  open: () => !0,
  opened: () => !0,
  close: () => !0,
  closed: () => !0,
  [St]: (t) => _o(t),
  openAutoFocus: () => !0,
  closeAutoFocus: () => !0
}, E_ = (t, e = {}) => {
  It(t) || Gc("[useLockscreen]", "You need to pass a ref param to this function");
  const n = e.ns || Le("popup"), i = C(() => n.bm("parent", "hidden"));
  if (!Ke || Rf(document.body, i.value))
    return;
  let s = 0, o = !1, r = "0";
  const l = () => {
    setTimeout(() => {
      typeof document > "u" || o && document && (document.body.style.width = r, rS(document.body, i.value));
    }, 200);
  };
  ae(t, (a) => {
    if (!a) {
      l();
      return;
    }
    o = !Rf(document.body, i.value), o && (r = document.body.style.width, oS(document.body, i.value)), s = aS(n.namespace.value);
    const c = document.documentElement.clientHeight < document.body.scrollHeight, u = lS(document.body, "overflowY");
    s > 0 && (c || u === "scroll") && o && (document.body.style.width = `calc(100% - ${s}px)`);
  }), Ih(() => l());
}, T_ = (t, e) => {
  var n;
  const s = pt().emit, { nextZIndex: o } = jc();
  let r = "";
  const l = Li(), a = Li(), c = M(!1), u = M(!1), f = M(!1), d = M((n = t.zIndex) != null ? n : o());
  let h, g;
  const m = xl("namespace", ro), y = C(() => {
    const O = {}, I = `--${m.value}-dialog`;
    return t.fullscreen || (t.top && (O[`${I}-margin-top`] = t.top), t.width && (O[`${I}-width`] = fi(t.width))), O;
  }), v = C(() => t.alignCenter ? { display: "flex" } : {});
  function w() {
    s("opened");
  }
  function _() {
    s("closed"), s(St, !1), t.destroyOnClose && (f.value = !1);
  }
  function x() {
    s("close");
  }
  function k() {
    g?.(), h?.(), t.openDelay && t.openDelay > 0 ? { stop: h } = Kr(() => B(), t.openDelay) : B();
  }
  function T() {
    h?.(), g?.(), t.closeDelay && t.closeDelay > 0 ? { stop: g } = Kr(() => q(), t.closeDelay) : q();
  }
  function A() {
    function O(I) {
      I || (u.value = !0, c.value = !1);
    }
    t.beforeClose ? t.beforeClose(O) : T();
  }
  function z() {
    t.closeOnClickModal && A();
  }
  function B() {
    Ke && (c.value = !0);
  }
  function q() {
    c.value = !1;
  }
  function $() {
    s("openAutoFocus");
  }
  function V() {
    s("closeAutoFocus");
  }
  function X(O) {
    var I;
    ((I = O.detail) == null ? void 0 : I.focusReason) === "pointer" && O.preventDefault();
  }
  t.lockScroll && E_(c);
  function ce() {
    t.closeOnPressEscape && A();
  }
  return ae(() => t.modelValue, (O) => {
    O ? (u.value = !1, k(), f.value = !0, d.value = tp(t.zIndex) ? o() : d.value++, Ze(() => {
      s("open"), e.value && (e.value.parentElement.scrollTop = 0, e.value.parentElement.scrollLeft = 0, e.value.scrollTop = 0);
    })) : c.value && T();
  }), ae(() => t.fullscreen, (O) => {
    e.value && (O ? (r = e.value.style.transform, e.value.style.transform = "") : e.value.style.transform = r);
  }), qe(() => {
    t.modelValue && (c.value = !0, f.value = !0, k());
  }), {
    afterEnter: w,
    afterLeave: _,
    beforeLeave: x,
    handleClose: A,
    onModalClick: z,
    close: T,
    doClose: q,
    onOpenAutoFocus: $,
    onCloseAutoFocus: V,
    onCloseRequested: ce,
    onFocusoutPrevented: X,
    titleId: l,
    bodyId: a,
    closed: u,
    style: y,
    overlayDialogStyle: v,
    rendered: f,
    visible: c,
    zIndex: d
  };
}, M_ = J({
  name: "ElDialog",
  inheritAttrs: !1
}), O_ = /* @__PURE__ */ J({
  ...M_,
  props: x_,
  emits: A_,
  setup(t, { expose: e }) {
    const n = t, i = Ic();
    eg({
      scope: "el-dialog",
      from: "the title slot",
      replacement: "the header slot",
      version: "3.0.0",
      ref: "https://element-plus.org/en-US/component/dialog.html#slots"
    }, C(() => !!i.title));
    const s = Le("dialog"), o = M(), r = M(), l = M(), {
      visible: a,
      titleId: c,
      bodyId: u,
      style: f,
      overlayDialogStyle: d,
      rendered: h,
      zIndex: g,
      afterEnter: m,
      afterLeave: y,
      beforeLeave: v,
      handleClose: w,
      onModalClick: _,
      onOpenAutoFocus: x,
      onCloseAutoFocus: k,
      onCloseRequested: T,
      onFocusoutPrevented: A
    } = T_(n, o);
    gt(og, {
      dialogRef: o,
      headerRef: r,
      bodyId: u,
      ns: s,
      rendered: h,
      style: f
    });
    const z = sg(_), B = C(() => n.draggable && !n.fullscreen);
    return e({
      visible: a,
      dialogContentRef: l,
      resetPosition: () => {
        var $;
        ($ = l.value) == null || $.resetPosition();
      }
    }), ($, V) => (S(), te(p(Jp), {
      to: $.appendTo,
      disabled: $.appendTo !== "body" ? !1 : !$.appendToBody
    }, {
      default: j(() => [
        U(pi, {
          name: "dialog-fade",
          onAfterEnter: p(m),
          onAfterLeave: p(y),
          onBeforeLeave: p(v),
          persisted: ""
        }, {
          default: j(() => [
            Bt(U(p(b_), {
              "custom-mask-event": "",
              mask: $.modal,
              "overlay-class": $.modalClass,
              "z-index": p(g)
            }, {
              default: j(() => [
                b("div", {
                  role: "dialog",
                  "aria-modal": "true",
                  "aria-label": $.title || void 0,
                  "aria-labelledby": $.title ? void 0 : p(c),
                  "aria-describedby": p(u),
                  class: F(`${p(s).namespace.value}-overlay-dialog`),
                  style: je(p(d)),
                  onClick: p(z).onClick,
                  onMousedown: p(z).onMousedown,
                  onMouseup: p(z).onMouseup
                }, [
                  U(p(Bp), {
                    loop: "",
                    trapped: p(a),
                    "focus-start-el": "container",
                    onFocusAfterTrapped: p(x),
                    onFocusAfterReleased: p(k),
                    onFocusoutPrevented: p(A),
                    onReleaseRequested: p(T)
                  }, {
                    default: j(() => [
                      p(h) ? (S(), te(__, hn({
                        key: 0,
                        ref_key: "dialogContentRef",
                        ref: l
                      }, $.$attrs, {
                        center: $.center,
                        "align-center": $.alignCenter,
                        "close-icon": $.closeIcon,
                        draggable: p(B),
                        overflow: $.overflow,
                        fullscreen: $.fullscreen,
                        "header-class": $.headerClass,
                        "body-class": $.bodyClass,
                        "footer-class": $.footerClass,
                        "show-close": $.showClose,
                        title: $.title,
                        "aria-level": $.headerAriaLevel,
                        onClose: p(w)
                      }), ml({
                        header: j(() => [
                          $.$slots.title ? ne($.$slots, "title", { key: 1 }) : ne($.$slots, "header", {
                            key: 0,
                            close: p(w),
                            titleId: p(c),
                            titleClass: p(s).e("title")
                          })
                        ]),
                        default: j(() => [
                          ne($.$slots, "default")
                        ]),
                        _: 2
                      }, [
                        $.$slots.footer ? {
                          name: "footer",
                          fn: j(() => [
                            ne($.$slots, "footer")
                          ])
                        } : void 0
                      ]), 1040, ["center", "align-center", "close-icon", "draggable", "overflow", "fullscreen", "header-class", "body-class", "footer-class", "show-close", "title", "aria-level", "onClose"])) : N("v-if", !0)
                    ]),
                    _: 3
                  }, 8, ["trapped", "onFocusAfterTrapped", "onFocusAfterReleased", "onFocusoutPrevented", "onReleaseRequested"])
                ], 46, ["aria-label", "aria-labelledby", "aria-describedby", "onClick", "onMousedown", "onMouseup"])
              ]),
              _: 3
            }, 8, ["mask", "overlay-class", "z-index"]), [
              [Kn, p(a)]
            ])
          ]),
          _: 3
        }, 8, ["onAfterEnter", "onAfterLeave", "onBeforeLeave"])
      ]),
      _: 3
    }, 8, ["to", "disabled"]));
  }
});
var D_ = /* @__PURE__ */ Se(O_, [["__file", "dialog.vue"]]);
const P_ = nn(D_), I_ = /* @__PURE__ */ J({
  inheritAttrs: !1
});
function R_(t, e, n, i, s, o) {
  return ne(t.$slots, "default");
}
var L_ = /* @__PURE__ */ Se(I_, [["render", R_], ["__file", "collection.vue"]]);
const B_ = /* @__PURE__ */ J({
  name: "ElCollectionItem",
  inheritAttrs: !1
});
function $_(t, e, n, i, s, o) {
  return ne(t.$slots, "default");
}
var F_ = /* @__PURE__ */ Se(B_, [["render", $_], ["__file", "collection-item.vue"]]);
const lg = "data-el-collection-item", ag = (t) => {
  const e = `El${t}Collection`, n = `${e}Item`, i = Symbol(e), s = Symbol(n), o = {
    ...L_,
    name: e,
    setup() {
      const l = M(), a = /* @__PURE__ */ new Map();
      gt(i, {
        itemMap: a,
        getItems: () => {
          const u = p(l);
          if (!u)
            return [];
          const f = Array.from(u.querySelectorAll(`[${lg}]`));
          return [...a.values()].sort((h, g) => f.indexOf(h.ref) - f.indexOf(g.ref));
        },
        collectionRef: l
      });
    }
  }, r = {
    ...F_,
    name: n,
    setup(l, { attrs: a }) {
      const c = M(), u = de(i, void 0);
      gt(s, {
        collectionItemRef: c
      }), qe(() => {
        const f = p(c);
        f && u.itemMap.set(f, {
          ref: f,
          ...a
        });
      }), tn(() => {
        const f = p(c);
        u.itemMap.delete(f);
      });
    }
  };
  return {
    COLLECTION_INJECTION_KEY: i,
    COLLECTION_ITEM_INJECTION_KEY: s,
    ElCollection: o,
    ElCollectionItem: r
  };
}, N_ = Ee({
  style: { type: re([String, Array, Object]) },
  currentTabId: {
    type: re(String)
  },
  defaultCurrentTabId: String,
  loop: Boolean,
  dir: {
    type: String,
    values: ["ltr", "rtl"],
    default: "ltr"
  },
  orientation: {
    type: re(String)
  },
  onBlur: Function,
  onFocus: Function,
  onMousedown: Function
}), {
  ElCollection: V_,
  ElCollectionItem: z_,
  COLLECTION_INJECTION_KEY: fu,
  COLLECTION_ITEM_INJECTION_KEY: H_
} = ag("RovingFocusGroup"), du = Symbol("elRovingFocusGroup"), cg = Symbol("elRovingFocusGroupItem"), W_ = {
  ArrowLeft: "prev",
  ArrowUp: "prev",
  ArrowRight: "next",
  ArrowDown: "next",
  PageUp: "first",
  Home: "first",
  PageDown: "last",
  End: "last"
}, G_ = (t, e) => t, j_ = (t, e, n) => {
  const i = G_(t.code);
  return W_[i];
}, K_ = (t, e) => t.map((n, i) => t[(i + e) % t.length]), hu = (t) => {
  const { activeElement: e } = document;
  for (const n of t)
    if (n === e || (n.focus(), e !== document.activeElement))
      return;
}, ud = "currentTabIdChange", fd = "rovingFocusGroup.entryFocus", U_ = { bubbles: !1, cancelable: !0 }, q_ = J({
  name: "ElRovingFocusGroupImpl",
  inheritAttrs: !1,
  props: N_,
  emits: [ud, "entryFocus"],
  setup(t, { emit: e }) {
    var n;
    const i = M((n = t.currentTabId || t.defaultCurrentTabId) != null ? n : null), s = M(!1), o = M(!1), r = M(), { getItems: l } = de(fu, void 0), a = C(() => [
      {
        outline: "none"
      },
      t.style
    ]), c = (m) => {
      e(ud, m);
    }, u = () => {
      s.value = !0;
    }, f = rt((m) => {
      var y;
      (y = t.onMousedown) == null || y.call(t, m);
    }, () => {
      o.value = !0;
    }), d = rt((m) => {
      var y;
      (y = t.onFocus) == null || y.call(t, m);
    }, (m) => {
      const y = !p(o), { target: v, currentTarget: w } = m;
      if (v === w && y && !p(s)) {
        const _ = new Event(fd, U_);
        if (w?.dispatchEvent(_), !_.defaultPrevented) {
          const x = l().filter((B) => B.focusable), k = x.find((B) => B.active), T = x.find((B) => B.id === p(i)), z = [k, T, ...x].filter(Boolean).map((B) => B.ref);
          hu(z);
        }
      }
      o.value = !1;
    }), h = rt((m) => {
      var y;
      (y = t.onBlur) == null || y.call(t, m);
    }, () => {
      s.value = !1;
    }), g = (...m) => {
      e("entryFocus", ...m);
    };
    gt(du, {
      currentTabbedId: gl(i),
      loop: Mt(t, "loop"),
      tabIndex: C(() => p(s) ? -1 : 0),
      rovingFocusGroupRef: r,
      rovingFocusGroupRootStyle: a,
      orientation: Mt(t, "orientation"),
      dir: Mt(t, "dir"),
      onItemFocus: c,
      onItemShiftTab: u,
      onBlur: h,
      onFocus: d,
      onMousedown: f
    }), ae(() => t.currentTabId, (m) => {
      i.value = m ?? null;
    }), an(r, fd, g);
  }
});
function Y_(t, e, n, i, s, o) {
  return ne(t.$slots, "default");
}
var J_ = /* @__PURE__ */ Se(q_, [["render", Y_], ["__file", "roving-focus-group-impl.vue"]]);
const X_ = J({
  name: "ElRovingFocusGroup",
  components: {
    ElFocusGroupCollection: V_,
    ElRovingFocusGroupImpl: J_
  }
});
function Z_(t, e, n, i, s, o) {
  const r = Ue("el-roving-focus-group-impl"), l = Ue("el-focus-group-collection");
  return S(), te(l, null, {
    default: j(() => [
      U(r, f0(d0(t.$attrs)), {
        default: j(() => [
          ne(t.$slots, "default")
        ]),
        _: 3
      }, 16)
    ]),
    _: 3
  });
}
var Q_ = /* @__PURE__ */ Se(X_, [["render", Z_], ["__file", "roving-focus-group.vue"]]);
const ex = Ee({
  trigger: cu.trigger,
  triggerKeys: {
    type: re(Array),
    default: () => [
      Ge.enter,
      Ge.numpadEnter,
      Ge.space,
      Ge.down
    ]
  },
  effect: {
    ...Eo.effect,
    default: "light"
  },
  type: {
    type: re(String)
  },
  placement: {
    type: re(String),
    default: "bottom"
  },
  popperOptions: {
    type: re(Object),
    default: () => ({})
  },
  id: String,
  size: {
    type: String,
    default: ""
  },
  splitButton: Boolean,
  hideOnClick: {
    type: Boolean,
    default: !0
  },
  loop: {
    type: Boolean,
    default: !0
  },
  showTimeout: {
    type: Number,
    default: 150
  },
  hideTimeout: {
    type: Number,
    default: 150
  },
  tabindex: {
    type: re([Number, String]),
    default: 0
  },
  maxHeight: {
    type: re([Number, String]),
    default: ""
  },
  popperClass: {
    type: String,
    default: ""
  },
  disabled: Boolean,
  role: {
    type: String,
    values: Tp,
    default: "menu"
  },
  buttonProps: {
    type: re(Object)
  },
  teleported: Eo.teleported,
  persistent: {
    type: Boolean,
    default: !0
  }
}), ug = Ee({
  command: {
    type: [Object, String, Number],
    default: () => ({})
  },
  disabled: Boolean,
  divided: Boolean,
  textValue: String,
  icon: {
    type: qn
  }
}), tx = Ee({
  onKeydown: { type: re(Function) }
}), nx = [
  Ge.down,
  Ge.pageDown,
  Ge.home
], fg = [Ge.up, Ge.pageUp, Ge.end], ix = [...nx, ...fg], {
  ElCollection: sx,
  ElCollectionItem: ox,
  COLLECTION_INJECTION_KEY: rx,
  COLLECTION_ITEM_INJECTION_KEY: lx
} = ag("Dropdown"), Dl = Symbol("elDropdown"), { ButtonGroup: ax } = ig, cx = J({
  name: "ElDropdown",
  components: {
    ElButton: ig,
    ElButtonGroup: ax,
    ElScrollbar: Ap,
    ElDropdownCollection: sx,
    ElTooltip: Zp,
    ElRovingFocusGroup: Q_,
    ElOnlyChild: Ip,
    ElIcon: ft,
    ArrowDown: Kc
  },
  props: ex,
  emits: ["visible-change", "click", "command"],
  setup(t, { emit: e }) {
    const n = pt(), i = Le("dropdown"), { t: s } = No(), o = M(), r = M(), l = M(), a = M(), c = M(null), u = M(null), f = M(!1), d = C(() => ({
      maxHeight: fi(t.maxHeight)
    })), h = C(() => [i.m(x.value)]), g = C(() => si(t.trigger)), m = Li().value, y = C(() => t.id || m);
    ae([o, g], ([I, L], [oe]) => {
      var le, we, Te;
      (le = oe?.$el) != null && le.removeEventListener && oe.$el.removeEventListener("pointerenter", T), (we = I?.$el) != null && we.removeEventListener && I.$el.removeEventListener("pointerenter", T), (Te = I?.$el) != null && Te.addEventListener && L.includes("hover") && I.$el.addEventListener("pointerenter", T);
    }, { immediate: !0 }), tn(() => {
      var I, L;
      (L = (I = o.value) == null ? void 0 : I.$el) != null && L.removeEventListener && o.value.$el.removeEventListener("pointerenter", T);
    });
    function v() {
      w();
    }
    function w() {
      var I;
      (I = l.value) == null || I.onClose();
    }
    function _() {
      var I;
      (I = l.value) == null || I.onOpen();
    }
    const x = Ws();
    function k(...I) {
      e("command", ...I);
    }
    function T() {
      var I, L;
      (L = (I = o.value) == null ? void 0 : I.$el) == null || L.focus();
    }
    function A() {
    }
    function z() {
      const I = p(a);
      g.value.includes("hover") && I?.focus(), u.value = null;
    }
    function B(I) {
      u.value = I;
    }
    function q(I) {
      f.value || (I.preventDefault(), I.stopImmediatePropagation());
    }
    function $() {
      e("visible-change", !0);
    }
    function V(I) {
      var L;
      I?.type === "keydown" && ((L = a.value) == null || L.focus());
    }
    function X() {
      e("visible-change", !1);
    }
    return gt(Dl, {
      contentRef: a,
      role: C(() => t.role),
      triggerId: y,
      isUsingKeyboard: f,
      onItemEnter: A,
      onItemLeave: z
    }), gt("elDropdown", {
      instance: n,
      dropdownSize: x,
      handleClick: v,
      commandHandler: k,
      trigger: Mt(t, "trigger"),
      hideOnClick: Mt(t, "hideOnClick")
    }), {
      t: s,
      ns: i,
      scrollbar: c,
      wrapStyle: d,
      dropdownTriggerKls: h,
      dropdownSize: x,
      triggerId: y,
      currentTabId: u,
      handleCurrentTabIdChange: B,
      handlerMainButtonClick: (I) => {
        e("click", I);
      },
      handleEntryFocus: q,
      handleClose: w,
      handleOpen: _,
      handleBeforeShowTooltip: $,
      handleShowTooltip: V,
      handleBeforeHideTooltip: X,
      onFocusAfterTrapped: (I) => {
        var L, oe;
        I.preventDefault(), (oe = (L = a.value) == null ? void 0 : L.focus) == null || oe.call(L, {
          preventScroll: !0
        });
      },
      popperRef: l,
      contentRef: a,
      triggeringElementRef: o,
      referenceElementRef: r
    };
  }
});
function ux(t, e, n, i, s, o) {
  var r;
  const l = Ue("el-dropdown-collection"), a = Ue("el-roving-focus-group"), c = Ue("el-scrollbar"), u = Ue("el-only-child"), f = Ue("el-tooltip"), d = Ue("el-button"), h = Ue("arrow-down"), g = Ue("el-icon"), m = Ue("el-button-group");
  return S(), D("div", {
    class: F([t.ns.b(), t.ns.is("disabled", t.disabled)])
  }, [
    U(f, {
      ref: "popperRef",
      role: t.role,
      effect: t.effect,
      "fallback-placements": ["bottom", "top"],
      "popper-options": t.popperOptions,
      "gpu-acceleration": !1,
      "hide-after": t.trigger === "hover" ? t.hideTimeout : 0,
      "manual-mode": !0,
      placement: t.placement,
      "popper-class": [t.ns.e("popper"), t.popperClass],
      "reference-element": (r = t.referenceElementRef) == null ? void 0 : r.$el,
      trigger: t.trigger,
      "trigger-keys": t.triggerKeys,
      "trigger-target-el": t.contentRef,
      "show-after": t.trigger === "hover" ? t.showTimeout : 0,
      "stop-popper-mouse-event": !1,
      "virtual-ref": t.triggeringElementRef,
      "virtual-triggering": t.splitButton,
      disabled: t.disabled,
      transition: `${t.ns.namespace.value}-zoom-in-top`,
      teleported: t.teleported,
      pure: "",
      persistent: t.persistent,
      onBeforeShow: t.handleBeforeShowTooltip,
      onShow: t.handleShowTooltip,
      onBeforeHide: t.handleBeforeHideTooltip
    }, ml({
      content: j(() => [
        U(c, {
          ref: "scrollbar",
          "wrap-style": t.wrapStyle,
          tag: "div",
          "view-class": t.ns.e("list")
        }, {
          default: j(() => [
            U(a, {
              loop: t.loop,
              "current-tab-id": t.currentTabId,
              orientation: "horizontal",
              onCurrentTabIdChange: t.handleCurrentTabIdChange,
              onEntryFocus: t.handleEntryFocus
            }, {
              default: j(() => [
                U(l, null, {
                  default: j(() => [
                    ne(t.$slots, "dropdown")
                  ]),
                  _: 3
                })
              ]),
              _: 3
            }, 8, ["loop", "current-tab-id", "onCurrentTabIdChange", "onEntryFocus"])
          ]),
          _: 3
        }, 8, ["wrap-style", "view-class"])
      ]),
      _: 2
    }, [
      t.splitButton ? void 0 : {
        name: "default",
        fn: j(() => [
          U(u, {
            id: t.triggerId,
            ref: "triggeringElementRef",
            role: "button",
            tabindex: t.tabindex
          }, {
            default: j(() => [
              ne(t.$slots, "default")
            ]),
            _: 3
          }, 8, ["id", "tabindex"])
        ])
      }
    ]), 1032, ["role", "effect", "popper-options", "hide-after", "placement", "popper-class", "reference-element", "trigger", "trigger-keys", "trigger-target-el", "show-after", "virtual-ref", "virtual-triggering", "disabled", "transition", "teleported", "persistent", "onBeforeShow", "onShow", "onBeforeHide"]),
    t.splitButton ? (S(), te(m, { key: 0 }, {
      default: j(() => [
        U(d, hn({ ref: "referenceElementRef" }, t.buttonProps, {
          size: t.dropdownSize,
          type: t.type,
          disabled: t.disabled,
          tabindex: t.tabindex,
          onClick: t.handlerMainButtonClick
        }), {
          default: j(() => [
            ne(t.$slots, "default")
          ]),
          _: 3
        }, 16, ["size", "type", "disabled", "tabindex", "onClick"]),
        U(d, hn({
          id: t.triggerId,
          ref: "triggeringElementRef"
        }, t.buttonProps, {
          role: "button",
          size: t.dropdownSize,
          type: t.type,
          class: t.ns.e("caret-button"),
          disabled: t.disabled,
          tabindex: t.tabindex,
          "aria-label": t.t("el.dropdown.toggleDropdown")
        }), {
          default: j(() => [
            U(g, {
              class: F(t.ns.e("icon"))
            }, {
              default: j(() => [
                U(h)
              ]),
              _: 1
            }, 8, ["class"])
          ]),
          _: 1
        }, 16, ["id", "size", "type", "class", "disabled", "tabindex", "aria-label"])
      ]),
      _: 3
    })) : N("v-if", !0)
  ], 2);
}
var fx = /* @__PURE__ */ Se(cx, [["render", ux], ["__file", "dropdown.vue"]]);
const dx = J({
  components: {
    ElRovingFocusCollectionItem: z_
  },
  props: {
    focusable: {
      type: Boolean,
      default: !0
    },
    active: {
      type: Boolean,
      default: !1
    }
  },
  emits: ["mousedown", "focus", "keydown"],
  setup(t, { emit: e }) {
    const { currentTabbedId: n, loop: i, onItemFocus: s, onItemShiftTab: o } = de(du, void 0), { getItems: r } = de(fu, void 0), l = Li(), a = M(), c = rt((h) => {
      e("mousedown", h);
    }, (h) => {
      t.focusable ? s(p(l)) : h.preventDefault();
    }), u = rt((h) => {
      e("focus", h);
    }, () => {
      s(p(l));
    }), f = rt((h) => {
      e("keydown", h);
    }, (h) => {
      const { code: g, shiftKey: m, target: y, currentTarget: v } = h;
      if (g === Ge.tab && m) {
        o();
        return;
      }
      if (y !== v)
        return;
      const w = j_(h);
      if (w) {
        h.preventDefault();
        let x = r().filter((k) => k.focusable).map((k) => k.ref);
        switch (w) {
          case "last": {
            x.reverse();
            break;
          }
          case "prev":
          case "next": {
            w === "prev" && x.reverse();
            const k = x.indexOf(v);
            x = i.value ? K_(x, k + 1) : x.slice(k + 1);
            break;
          }
        }
        Ze(() => {
          hu(x);
        });
      }
    }), d = C(() => n.value === p(l));
    return gt(cg, {
      rovingFocusGroupItemRef: a,
      tabIndex: C(() => p(d) ? 0 : -1),
      handleMousedown: c,
      handleFocus: u,
      handleKeydown: f
    }), {
      id: l,
      handleKeydown: f,
      handleFocus: u,
      handleMousedown: c
    };
  }
});
function hx(t, e, n, i, s, o) {
  const r = Ue("el-roving-focus-collection-item");
  return S(), te(r, {
    id: t.id,
    focusable: t.focusable,
    active: t.active
  }, {
    default: j(() => [
      ne(t.$slots, "default")
    ]),
    _: 3
  }, 8, ["id", "focusable", "active"]);
}
var px = /* @__PURE__ */ Se(dx, [["render", hx], ["__file", "roving-focus-item.vue"]]);
const gx = J({
  name: "DropdownItemImpl",
  components: {
    ElIcon: ft
  },
  props: ug,
  emits: ["pointermove", "pointerleave", "click", "clickimpl"],
  setup(t, { emit: e }) {
    const n = Le("dropdown"), { role: i } = de(Dl, void 0), { collectionItemRef: s } = de(lx, void 0), { collectionItemRef: o } = de(H_, void 0), {
      rovingFocusGroupItemRef: r,
      tabIndex: l,
      handleFocus: a,
      handleKeydown: c,
      handleMousedown: u
    } = de(cg, void 0), f = uu(s, o, r), d = C(() => i.value === "menu" ? "menuitem" : i.value === "navigation" ? "link" : "button"), h = rt((g) => {
      if ([Ge.enter, Ge.numpadEnter, Ge.space].includes(g.code))
        return g.preventDefault(), g.stopImmediatePropagation(), e("clickimpl", g), !0;
    }, c);
    return {
      ns: n,
      itemRef: f,
      dataset: {
        [lg]: ""
      },
      role: d,
      tabIndex: l,
      handleFocus: a,
      handleKeydown: h,
      handleMousedown: u
    };
  }
});
function mx(t, e, n, i, s, o) {
  const r = Ue("el-icon");
  return S(), D(ye, null, [
    t.divided ? (S(), D("li", {
      key: 0,
      role: "separator",
      class: F(t.ns.bem("menu", "item", "divided"))
    }, null, 2)) : N("v-if", !0),
    b("li", hn({ ref: t.itemRef }, { ...t.dataset, ...t.$attrs }, {
      "aria-disabled": t.disabled,
      class: [t.ns.be("menu", "item"), t.ns.is("disabled", t.disabled)],
      tabindex: t.tabIndex,
      role: t.role,
      onClick: (l) => t.$emit("clickimpl", l),
      onFocus: t.handleFocus,
      onKeydown: Xe(t.handleKeydown, ["self"]),
      onMousedown: t.handleMousedown,
      onPointermove: (l) => t.$emit("pointermove", l),
      onPointerleave: (l) => t.$emit("pointerleave", l)
    }), [
      t.icon ? (S(), te(r, { key: 0 }, {
        default: j(() => [
          (S(), te(Rt(t.icon)))
        ]),
        _: 1
      })) : N("v-if", !0),
      ne(t.$slots, "default")
    ], 16, ["aria-disabled", "tabindex", "role", "onClick", "onFocus", "onKeydown", "onMousedown", "onPointermove", "onPointerleave"])
  ], 64);
}
var vx = /* @__PURE__ */ Se(gx, [["render", mx], ["__file", "dropdown-item-impl.vue"]]);
const dg = () => {
  const t = de("elDropdown", {}), e = C(() => t?.dropdownSize);
  return {
    elDropdown: t,
    _elDropdownSize: e
  };
}, yx = J({
  name: "ElDropdownItem",
  components: {
    ElDropdownCollectionItem: ox,
    ElRovingFocusItem: px,
    ElDropdownItemImpl: vx
  },
  inheritAttrs: !1,
  props: ug,
  emits: ["pointermove", "pointerleave", "click"],
  setup(t, { emit: e, attrs: n }) {
    const { elDropdown: i } = dg(), s = pt(), o = M(null), r = C(() => {
      var h, g;
      return (g = (h = p(o)) == null ? void 0 : h.textContent) != null ? g : "";
    }), { onItemEnter: l, onItemLeave: a } = de(Dl, void 0), c = rt((h) => (e("pointermove", h), h.defaultPrevented), id((h) => {
      if (t.disabled) {
        a(h);
        return;
      }
      const g = h.currentTarget;
      g === document.activeElement || g.contains(document.activeElement) || (l(h), h.defaultPrevented || g?.focus());
    })), u = rt((h) => (e("pointerleave", h), h.defaultPrevented), id(a)), f = rt((h) => {
      if (!t.disabled)
        return e("click", h), h.type !== "keydown" && h.defaultPrevented;
    }, (h) => {
      var g, m, y;
      if (t.disabled) {
        h.stopImmediatePropagation();
        return;
      }
      (g = i?.hideOnClick) != null && g.value && ((m = i.handleClick) == null || m.call(i)), (y = i.commandHandler) == null || y.call(i, t.command, s, h);
    }), d = C(() => ({ ...t, ...n }));
    return {
      handleClick: f,
      handlePointerMove: c,
      handlePointerLeave: u,
      textContent: r,
      propsAndAttrs: d
    };
  }
});
function bx(t, e, n, i, s, o) {
  var r;
  const l = Ue("el-dropdown-item-impl"), a = Ue("el-roving-focus-item"), c = Ue("el-dropdown-collection-item");
  return S(), te(c, {
    disabled: t.disabled,
    "text-value": (r = t.textValue) != null ? r : t.textContent
  }, {
    default: j(() => [
      U(a, {
        focusable: !t.disabled
      }, {
        default: j(() => [
          U(l, hn(t.propsAndAttrs, {
            onPointerleave: t.handlePointerLeave,
            onPointermove: t.handlePointerMove,
            onClickimpl: t.handleClick
          }), {
            default: j(() => [
              ne(t.$slots, "default")
            ]),
            _: 3
          }, 16, ["onPointerleave", "onPointermove", "onClickimpl"])
        ]),
        _: 3
      }, 8, ["focusable"])
    ]),
    _: 3
  }, 8, ["disabled", "text-value"]);
}
var hg = /* @__PURE__ */ Se(yx, [["render", bx], ["__file", "dropdown-item.vue"]]);
const wx = J({
  name: "ElDropdownMenu",
  props: tx,
  setup(t) {
    const e = Le("dropdown"), { _elDropdownSize: n } = dg(), i = n.value, { focusTrapRef: s, onKeydown: o } = de(Xc, void 0), { contentRef: r, role: l, triggerId: a } = de(Dl, void 0), { collectionRef: c, getItems: u } = de(rx, void 0), {
      rovingFocusGroupRef: f,
      rovingFocusGroupRootStyle: d,
      tabIndex: h,
      onBlur: g,
      onFocus: m,
      onMousedown: y
    } = de(du, void 0), { collectionRef: v } = de(fu, void 0), w = C(() => [e.b("menu"), e.bm("menu", i?.value)]), _ = uu(r, c, s, f, v), x = rt((T) => {
      var A;
      (A = t.onKeydown) == null || A.call(t, T);
    }, (T) => {
      const { currentTarget: A, code: z, target: B } = T;
      if (A.contains(B), Ge.tab === z && T.stopImmediatePropagation(), T.preventDefault(), B !== p(r) || !ix.includes(z))
        return;
      const $ = u().filter((V) => !V.disabled).map((V) => V.ref);
      fg.includes(z) && $.reverse(), hu($);
    });
    return {
      size: i,
      rovingFocusGroupRootStyle: d,
      tabIndex: h,
      dropdownKls: w,
      role: l,
      triggerId: a,
      dropdownListWrapperRef: _,
      handleKeydown: (T) => {
        x(T), o(T);
      },
      onBlur: g,
      onFocus: m,
      onMousedown: y
    };
  }
});
function Sx(t, e, n, i, s, o) {
  return S(), D("ul", {
    ref: t.dropdownListWrapperRef,
    class: F(t.dropdownKls),
    style: je(t.rovingFocusGroupRootStyle),
    tabindex: -1,
    role: t.role,
    "aria-labelledby": t.triggerId,
    onBlur: t.onBlur,
    onFocus: t.onFocus,
    onKeydown: Xe(t.handleKeydown, ["self"]),
    onMousedown: Xe(t.onMousedown, ["self"])
  }, [
    ne(t.$slots, "default")
  ], 46, ["role", "aria-labelledby", "onBlur", "onFocus", "onKeydown", "onMousedown"]);
}
var pg = /* @__PURE__ */ Se(wx, [["render", Sx], ["__file", "dropdown-menu.vue"]]);
nn(fx, {
  DropdownItem: hg,
  DropdownMenu: pg
});
const Cx = zo(hg);
zo(pg);
const kx = Ee({
  id: {
    type: String,
    default: void 0
  },
  step: {
    type: Number,
    default: 1
  },
  stepStrictly: Boolean,
  max: {
    type: Number,
    default: Number.POSITIVE_INFINITY
  },
  min: {
    type: Number,
    default: Number.NEGATIVE_INFINITY
  },
  modelValue: Number,
  readonly: Boolean,
  disabled: Boolean,
  size: Vo,
  controls: {
    type: Boolean,
    default: !0
  },
  controlsPosition: {
    type: String,
    default: "",
    values: ["", "right"]
  },
  valueOnClear: {
    type: [String, Number, null],
    validator: (t) => t === null || Fe(t) || ["min", "max"].includes(t),
    default: null
  },
  name: String,
  placeholder: String,
  precision: {
    type: Number,
    validator: (t) => t >= 0 && t === Number.parseInt(`${t}`, 10)
  },
  validateEvent: {
    type: Boolean,
    default: !0
  },
  ...Hs(["ariaLabel"])
}), _x = {
  [As]: (t, e) => e !== t,
  blur: (t) => t instanceof FocusEvent,
  focus: (t) => t instanceof FocusEvent,
  [Ss]: (t) => Fe(t) || ci(t),
  [St]: (t) => Fe(t) || ci(t)
}, xx = J({
  name: "ElInputNumber"
}), Ax = /* @__PURE__ */ J({
  ...xx,
  props: kx,
  emits: _x,
  setup(t, { expose: e, emit: n }) {
    const i = t, { t: s } = No(), o = Le("input-number"), r = M(), l = Ii({
      currentValue: i.modelValue,
      userInput: null
    }), { formItem: a } = Al(), c = C(() => Fe(i.modelValue) && i.modelValue <= i.min), u = C(() => Fe(i.modelValue) && i.modelValue >= i.max), f = C(() => {
      const O = v(i.step);
      return Vn(i.precision) ? Math.max(v(i.modelValue), O) : (O > i.precision, i.precision);
    }), d = C(() => i.controls && i.controlsPosition === "right"), h = Ws(), g = El(), m = C(() => {
      if (l.userInput !== null)
        return l.userInput;
      let O = l.currentValue;
      if (ci(O))
        return "";
      if (Fe(O)) {
        if (Number.isNaN(O))
          return "";
        Vn(i.precision) || (O = O.toFixed(i.precision));
      }
      return O;
    }), y = (O, I) => {
      if (Vn(I) && (I = f.value), I === 0)
        return Math.round(O);
      let L = String(O);
      const oe = L.indexOf(".");
      if (oe === -1 || !L.replace(".", "").split("")[oe + I])
        return O;
      const Te = L.length;
      return L.charAt(Te - 1) === "5" && (L = `${L.slice(0, Math.max(0, Te - 1))}6`), Number.parseFloat(Number(L).toFixed(I));
    }, v = (O) => {
      if (ci(O))
        return 0;
      const I = O.toString(), L = I.indexOf(".");
      let oe = 0;
      return L !== -1 && (oe = I.length - L - 1), oe;
    }, w = (O, I = 1) => Fe(O) ? y(O + i.step * I) : l.currentValue, _ = () => {
      if (i.readonly || g.value || u.value)
        return;
      const O = Number(m.value) || 0, I = w(O);
      T(I), n(Ss, l.currentValue), X();
    }, x = () => {
      if (i.readonly || g.value || c.value)
        return;
      const O = Number(m.value) || 0, I = w(O, -1);
      T(I), n(Ss, l.currentValue), X();
    }, k = (O, I) => {
      const { max: L, min: oe, step: le, precision: we, stepStrictly: Te, valueOnClear: xe } = i;
      L < oe && Gc("InputNumber", "min should not be greater than max.");
      let be = Number(O);
      if (ci(O) || Number.isNaN(be))
        return null;
      if (O === "") {
        if (xe === null)
          return null;
        be = Qt(xe) ? { min: oe, max: L }[xe] : xe;
      }
      return Te && (be = y(Math.round(be / le) * le, we), be !== O && I && n(St, be)), Vn(we) || (be = y(be, we)), (be > L || be < oe) && (be = be > L ? L : oe, I && n(St, be)), be;
    }, T = (O, I = !0) => {
      var L;
      const oe = l.currentValue, le = k(O);
      if (!I) {
        n(St, le);
        return;
      }
      oe === le && O || (l.userInput = null, n(St, le), oe !== le && n(As, le, oe), i.validateEvent && ((L = a?.validate) == null || L.call(a, "change").catch((we) => void 0)), l.currentValue = le);
    }, A = (O) => {
      l.userInput = O;
      const I = O === "" ? null : Number(O);
      n(Ss, I), T(I, !1);
    }, z = (O) => {
      const I = O !== "" ? Number(O) : "";
      (Fe(I) && !Number.isNaN(I) || O === "") && T(I), X(), l.userInput = null;
    }, B = () => {
      var O, I;
      (I = (O = r.value) == null ? void 0 : O.focus) == null || I.call(O);
    }, q = () => {
      var O, I;
      (I = (O = r.value) == null ? void 0 : O.blur) == null || I.call(O);
    }, $ = (O) => {
      n("focus", O);
    }, V = (O) => {
      var I, L;
      l.userInput = null, bp() && l.currentValue === null && ((I = r.value) != null && I.input) && (r.value.input.value = ""), n("blur", O), i.validateEvent && ((L = a?.validate) == null || L.call(a, "blur").catch((oe) => void 0));
    }, X = () => {
      l.currentValue !== i.modelValue && (l.currentValue = i.modelValue);
    }, ce = (O) => {
      document.activeElement === O.target && O.preventDefault();
    };
    return ae(() => i.modelValue, (O, I) => {
      const L = k(O, !0);
      l.userInput === null && L !== I && (l.currentValue = L);
    }, { immediate: !0 }), qe(() => {
      var O;
      const { min: I, max: L, modelValue: oe } = i, le = (O = r.value) == null ? void 0 : O.input;
      if (le.setAttribute("role", "spinbutton"), Number.isFinite(L) ? le.setAttribute("aria-valuemax", String(L)) : le.removeAttribute("aria-valuemax"), Number.isFinite(I) ? le.setAttribute("aria-valuemin", String(I)) : le.removeAttribute("aria-valuemin"), le.setAttribute("aria-valuenow", l.currentValue || l.currentValue === 0 ? String(l.currentValue) : ""), le.setAttribute("aria-disabled", String(g.value)), !Fe(oe) && oe != null) {
        let we = Number(oe);
        Number.isNaN(we) && (we = null), n(St, we);
      }
      le.addEventListener("wheel", ce, { passive: !1 });
    }), Rh(() => {
      var O, I;
      const L = (O = r.value) == null ? void 0 : O.input;
      L?.setAttribute("aria-valuenow", `${(I = l.currentValue) != null ? I : ""}`);
    }), e({
      focus: B,
      blur: q
    }), (O, I) => (S(), D("div", {
      class: F([
        p(o).b(),
        p(o).m(p(h)),
        p(o).is("disabled", p(g)),
        p(o).is("without-controls", !O.controls),
        p(o).is("controls-right", p(d))
      ]),
      onDragstart: Xe(() => {
      }, ["prevent"])
    }, [
      O.controls ? Bt((S(), D("span", {
        key: 0,
        role: "button",
        "aria-label": p(s)("el.inputNumber.decrease"),
        class: F([p(o).e("decrease"), p(o).is("disabled", p(c))]),
        onKeydown: ii(x, ["enter"])
      }, [
        ne(O.$slots, "decrease-icon", {}, () => [
          U(p(ft), null, {
            default: j(() => [
              p(d) ? (S(), te(p(Kc), { key: 0 })) : (S(), te(p(MS), { key: 1 }))
            ]),
            _: 1
          })
        ])
      ], 42, ["aria-label", "onKeydown"])), [
        [p(cd), x]
      ]) : N("v-if", !0),
      O.controls ? Bt((S(), D("span", {
        key: 1,
        role: "button",
        "aria-label": p(s)("el.inputNumber.increase"),
        class: F([p(o).e("increase"), p(o).is("disabled", p(u))]),
        onKeydown: ii(_, ["enter"])
      }, [
        ne(O.$slots, "increase-icon", {}, () => [
          U(p(ft), null, {
            default: j(() => [
              p(d) ? (S(), te(p(mS), { key: 0 })) : (S(), te(p(DS), { key: 1 }))
            ]),
            _: 1
          })
        ])
      ], 42, ["aria-label", "onKeydown"])), [
        [p(cd), _]
      ]) : N("v-if", !0),
      U(p(tC), {
        id: O.id,
        ref_key: "input",
        ref: r,
        type: "number",
        step: O.step,
        "model-value": p(m),
        placeholder: O.placeholder,
        readonly: O.readonly,
        disabled: p(g),
        size: p(h),
        max: O.max,
        min: O.min,
        name: O.name,
        "aria-label": O.ariaLabel,
        "validate-event": !1,
        onKeydown: [
          ii(Xe(_, ["prevent"]), ["up"]),
          ii(Xe(x, ["prevent"]), ["down"])
        ],
        onBlur: V,
        onFocus: $,
        onInput: A,
        onChange: z
      }, ml({
        _: 2
      }, [
        O.$slots.prefix ? {
          name: "prefix",
          fn: j(() => [
            ne(O.$slots, "prefix")
          ])
        } : void 0,
        O.$slots.suffix ? {
          name: "suffix",
          fn: j(() => [
            ne(O.$slots, "suffix")
          ])
        } : void 0
      ]), 1032, ["id", "step", "model-value", "placeholder", "readonly", "disabled", "size", "max", "min", "name", "aria-label", "onKeydown"])
    ], 42, ["onDragstart"]));
  }
});
var Ex = /* @__PURE__ */ Se(Ax, [["__file", "input-number.vue"]]);
const Tx = nn(Ex);
function Mx() {
  const t = es(), e = M(0), n = 11, i = C(() => ({
    minWidth: `${Math.max(e.value, n)}px`
  }));
  return Bn(t, () => {
    var o, r;
    e.value = (r = (o = t.value) == null ? void 0 : o.getBoundingClientRect().width) != null ? r : 0;
  }), {
    calculatorRef: t,
    calculatorWidth: e,
    inputStyle: i
  };
}
const gg = Symbol("ElSelectGroup"), Pl = Symbol("ElSelect");
function Ox(t, e) {
  const n = de(Pl), i = de(gg, { disabled: !1 }), s = C(() => u(si(n.props.modelValue), t.value)), o = C(() => {
    var h;
    if (n.props.multiple) {
      const g = si((h = n.props.modelValue) != null ? h : []);
      return !s.value && g.length >= n.props.multipleLimit && n.props.multipleLimit > 0;
    } else
      return !1;
  }), r = C(() => t.label || (rn(t.value) ? "" : t.value)), l = C(() => t.value || t.label || ""), a = C(() => t.disabled || e.groupDisabled || o.value), c = pt(), u = (h = [], g) => {
    if (rn(t.value)) {
      const m = n.props.valueKey;
      return h && h.some((y) => h0(Ei(y, m)) === Ei(g, m));
    } else
      return h && h.includes(g);
  }, f = () => {
    !t.disabled && !i.disabled && (n.states.hoveringIndex = n.optionsArray.indexOf(c.proxy));
  }, d = (h) => {
    const g = new RegExp(o_(h), "i");
    e.visible = g.test(r.value) || t.created;
  };
  return ae(() => r.value, () => {
    !t.created && !n.props.remote && n.setSelected();
  }), ae(() => t.value, (h, g) => {
    const { remote: m, valueKey: y } = n.props;
    if ((m ? h !== g : !ao(h, g)) && (n.onOptionDestroy(g, c.proxy), n.onOptionCreate(c.proxy)), !t.created && !m) {
      if (y && rn(h) && rn(g) && h[y] === g[y])
        return;
      n.setSelected();
    }
  }), ae(() => i.disabled, () => {
    e.groupDisabled = i.disabled;
  }, { immediate: !0 }), {
    select: n,
    currentLabel: r,
    currentValue: l,
    itemSelected: s,
    isDisabled: a,
    hoverItem: f,
    updateOption: d
  };
}
const Dx = J({
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
  setup(t) {
    const e = Le("select"), n = Li(), i = C(() => [
      e.be("dropdown", "item"),
      e.is("disabled", p(l)),
      e.is("selected", p(r)),
      e.is("hovering", p(d))
    ]), s = Ii({
      index: -1,
      groupDisabled: !1,
      visible: !0,
      hover: !1
    }), {
      currentLabel: o,
      itemSelected: r,
      isDisabled: l,
      select: a,
      hoverItem: c,
      updateOption: u
    } = Ox(t, s), { visible: f, hover: d } = Rc(s), h = pt().proxy;
    a.onOptionCreate(h), tn(() => {
      const m = h.value, { selected: y } = a.states, v = y.some((w) => w.value === h.value);
      Ze(() => {
        a.states.cachedOptions.get(m) === h && !v && a.states.cachedOptions.delete(m);
      }), a.onOptionDestroy(m, h);
    });
    function g() {
      l.value || a.handleOptionSelect(h);
    }
    return {
      ns: e,
      id: n,
      containerKls: i,
      currentLabel: o,
      itemSelected: r,
      isDisabled: l,
      select: a,
      hoverItem: c,
      updateOption: u,
      visible: f,
      hover: d,
      selectOptionClick: g,
      states: s
    };
  }
});
function Px(t, e, n, i, s, o) {
  return Bt((S(), D("li", {
    id: t.id,
    class: F(t.containerKls),
    role: "option",
    "aria-disabled": t.isDisabled || void 0,
    "aria-selected": t.itemSelected,
    onMousemove: t.hoverItem,
    onClick: Xe(t.selectOptionClick, ["stop"])
  }, [
    ne(t.$slots, "default", {}, () => [
      b("span", null, R(t.currentLabel), 1)
    ])
  ], 42, ["id", "aria-disabled", "aria-selected", "onMousemove", "onClick"])), [
    [Kn, t.visible]
  ]);
}
var pu = /* @__PURE__ */ Se(Dx, [["render", Px], ["__file", "option.vue"]]);
const Ix = J({
  name: "ElSelectDropdown",
  componentName: "ElSelectDropdown",
  setup() {
    const t = de(Pl), e = Le("select"), n = C(() => t.props.popperClass), i = C(() => t.props.multiple), s = C(() => t.props.fitInputWidth), o = M("");
    function r() {
      var l;
      o.value = `${(l = t.selectRef) == null ? void 0 : l.offsetWidth}px`;
    }
    return qe(() => {
      r(), Bn(t.selectRef, r);
    }), {
      ns: e,
      minWidth: o,
      popperClass: n,
      isMultiple: i,
      isFitInputWidth: s
    };
  }
});
function Rx(t, e, n, i, s, o) {
  return S(), D("div", {
    class: F([t.ns.b("dropdown"), t.ns.is("multiple", t.isMultiple), t.popperClass]),
    style: je({ [t.isFitInputWidth ? "width" : "minWidth"]: t.minWidth })
  }, [
    t.$slots.header ? (S(), D("div", {
      key: 0,
      class: F(t.ns.be("dropdown", "header"))
    }, [
      ne(t.$slots, "header")
    ], 2)) : N("v-if", !0),
    ne(t.$slots, "default"),
    t.$slots.footer ? (S(), D("div", {
      key: 1,
      class: F(t.ns.be("dropdown", "footer"))
    }, [
      ne(t.$slots, "footer")
    ], 2)) : N("v-if", !0)
  ], 6);
}
var Lx = /* @__PURE__ */ Se(Ix, [["render", Rx], ["__file", "select-dropdown.vue"]]);
const Bx = (t, e) => {
  const { t: n } = No(), i = Li(), s = Le("select"), o = Le("input"), r = Ii({
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
  }), l = M(null), a = M(null), c = M(null), u = M(null), f = M(null), d = M(null), h = M(null), g = M(null), m = M(null), y = M(null), v = M(null), {
    isComposing: w,
    handleCompositionStart: _,
    handleCompositionUpdate: x,
    handleCompositionEnd: k
  } = xp({
    afterComposition: (P) => _t(P)
  }), { wrapperRef: T, isFocused: A, handleBlur: z } = _p(f, {
    beforeFocus() {
      return I.value;
    },
    afterFocus() {
      t.automaticDropdown && !B.value && (B.value = !0, r.menuVisibleOnFocus = !0);
    },
    beforeBlur(P) {
      var Z, ve;
      return ((Z = c.value) == null ? void 0 : Z.isFocusInsideContent(P)) || ((ve = u.value) == null ? void 0 : ve.isFocusInsideContent(P));
    },
    afterBlur() {
      B.value = !1, r.menuVisibleOnFocus = !1;
    }
  }), B = M(!1), q = M(), { form: $, formItem: V } = Al(), { inputId: X } = Cp(t, {
    formItemContext: V
  }), { valueOnClear: ce, isEmptyValue: O } = iS(t), I = C(() => t.disabled || $?.disabled), L = C(() => Nn(t.modelValue) ? t.modelValue.length > 0 : !O(t.modelValue)), oe = C(() => {
    var P;
    return (P = $?.statusIcon) != null ? P : !1;
  }), le = C(() => t.clearable && !I.value && r.inputHovering && L.value), we = C(() => t.remote && t.filterable && !t.remoteShowSuffix ? "" : t.suffixIcon), Te = C(() => s.is("reverse", we.value && B.value)), xe = C(() => V?.validateState || ""), be = C(() => yp[xe.value]), Be = C(() => t.remote ? 300 : 0), Ve = C(() => t.remote && !r.inputValue && r.options.size === 0), Oe = C(() => t.loading ? t.loadingText || n("el.select.loading") : t.filterable && r.inputValue && r.options.size > 0 && Ye.value === 0 ? t.noMatchText || n("el.select.noMatch") : r.options.size === 0 ? t.noDataText || n("el.select.noData") : null), Ye = C(() => Ie.value.filter((P) => P.visible).length), Ie = C(() => {
    const P = Array.from(r.options.values()), Z = [];
    return r.optionValues.forEach((ve) => {
      const at = P.findIndex((qt) => qt.value === ve);
      at > -1 && Z.push(P[at]);
    }), Z.length >= P.length ? Z : P;
  }), Ft = C(() => Array.from(r.cachedOptions.values())), jt = C(() => {
    const P = Ie.value.filter((Z) => !Z.created).some((Z) => Z.currentLabel === r.inputValue);
    return t.filterable && t.allowCreate && r.inputValue !== "" && !P;
  }), Kt = () => {
    t.filterable && tt(t.filterMethod) || t.filterable && t.remote && tt(t.remoteMethod) || Ie.value.forEach((P) => {
      var Z;
      (Z = P.updateOption) == null || Z.call(P, r.inputValue);
    });
  }, wn = Ws(), Ut = C(() => ["small"].includes(wn.value) ? "small" : "default"), Sn = C({
    get() {
      return B.value && !Ve.value;
    },
    set(P) {
      B.value = P;
    }
  }), sn = C(() => {
    if (t.multiple && !Vn(t.modelValue))
      return si(t.modelValue).length === 0 && !r.inputValue;
    const P = Nn(t.modelValue) ? t.modelValue[0] : t.modelValue;
    return t.filterable || Vn(P) ? !r.inputValue : !0;
  }), Nt = C(() => {
    var P;
    const Z = (P = t.placeholder) != null ? P : n("el.select.placeholder");
    return t.multiple || !L.value ? Z : r.selectedLabel;
  }), Dn = C(() => Pa ? null : "mouseenter");
  ae(() => t.modelValue, (P, Z) => {
    t.multiple && t.filterable && !t.reserveKeyword && (r.inputValue = "", mt("")), ie(), !ao(P, Z) && t.validateEvent && V?.validate("change").catch((ve) => void 0);
  }, {
    flush: "post",
    deep: !0
  }), ae(() => B.value, (P) => {
    P ? mt(r.inputValue) : (r.inputValue = "", r.previousQuery = null, r.isBeforeHide = !0), e("visible-change", P);
  }), ae(() => r.options.entries(), () => {
    Ke && (ie(), t.defaultFirstOption && (t.filterable || t.remote) && Ye.value && H());
  }, {
    flush: "post"
  }), ae([() => r.hoveringIndex, Ie], ([P]) => {
    Fe(P) && P > -1 ? q.value = Ie.value[P] || {} : q.value = {}, Ie.value.forEach((Z) => {
      Z.hover = q.value === Z;
    });
  }), Pc(() => {
    r.isBeforeHide || Kt();
  });
  const mt = (P) => {
    r.previousQuery === P || w.value || (r.previousQuery = P, t.filterable && tt(t.filterMethod) ? t.filterMethod(P) : t.filterable && t.remote && tt(t.remoteMethod) && t.remoteMethod(P), t.defaultFirstOption && (t.filterable || t.remote) && Ye.value ? Ze(H) : Ze(ke));
  }, H = () => {
    const P = Ie.value.filter((qt) => qt.visible && !qt.disabled && !qt.states.groupDisabled), Z = P.find((qt) => qt.created), ve = P[0], at = Ie.value.map((qt) => qt.value);
    r.hoveringIndex = K(at, Z || ve);
  }, ie = () => {
    if (t.multiple)
      r.selectedLabel = "";
    else {
      const Z = Nn(t.modelValue) ? t.modelValue[0] : t.modelValue, ve = me(Z);
      r.selectedLabel = ve.currentLabel, r.selected = [ve];
      return;
    }
    const P = [];
    Vn(t.modelValue) || si(t.modelValue).forEach((Z) => {
      P.push(me(Z));
    }), r.selected = P;
  }, me = (P) => {
    let Z;
    const ve = O0(P);
    for (let fs = r.cachedOptions.size - 1; fs >= 0; fs--) {
      const bi = Ft.value[fs];
      if (ve ? Ei(bi.value, t.valueKey) === Ei(P, t.valueKey) : bi.value === P) {
        Z = {
          value: P,
          currentLabel: bi.currentLabel,
          get isDisabled() {
            return bi.isDisabled;
          }
        };
        break;
      }
    }
    if (Z)
      return Z;
    const at = ve ? P.label : P ?? "";
    return {
      value: P,
      currentLabel: at
    };
  }, ke = () => {
    r.hoveringIndex = Ie.value.findIndex((P) => r.selected.some((Z) => Yo(Z) === Yo(P)));
  }, it = () => {
    r.selectionWidth = a.value.getBoundingClientRect().width;
  }, G = () => {
    r.collapseItemWidth = y.value.getBoundingClientRect().width;
  }, fe = () => {
    var P, Z;
    (Z = (P = c.value) == null ? void 0 : P.updatePopper) == null || Z.call(P);
  }, Re = () => {
    var P, Z;
    (Z = (P = u.value) == null ? void 0 : P.updatePopper) == null || Z.call(P);
  }, vt = () => {
    r.inputValue.length > 0 && !B.value && (B.value = !0), mt(r.inputValue);
  }, _t = (P) => {
    if (r.inputValue = P.target.value, t.remote)
      Uo();
    else
      return vt();
  }, Uo = vw(() => {
    vt();
  }, Be.value), ji = (P) => {
    ao(t.modelValue, P) || e(As, P);
  }, jl = (P) => yw(P, (Z) => {
    const ve = r.cachedOptions.get(Z);
    return ve && !ve.disabled && !ve.states.groupDisabled;
  }), Kl = (P) => {
    if (t.multiple && P.code !== Ge.delete && P.target.value.length <= 0) {
      const Z = si(t.modelValue).slice(), ve = jl(Z);
      if (ve < 0)
        return;
      const at = Z[ve];
      Z.splice(ve, 1), e(St, Z), ji(Z), e("remove-tag", at);
    }
  }, Ul = (P, Z) => {
    const ve = r.selected.indexOf(Z);
    if (ve > -1 && !I.value) {
      const at = si(t.modelValue).slice();
      at.splice(ve, 1), e(St, at), ji(at), e("remove-tag", Z.value);
    }
    P.stopPropagation(), lt();
  }, qo = (P) => {
    P.stopPropagation();
    const Z = t.multiple ? [] : ce.value;
    if (t.multiple)
      for (const ve of r.selected)
        ve.isDisabled && Z.push(ve.value);
    e(St, Z), ji(Z), r.hoveringIndex = -1, B.value = !1, e("clear"), lt();
  }, E = (P) => {
    var Z;
    if (t.multiple) {
      const ve = si((Z = t.modelValue) != null ? Z : []).slice(), at = K(ve, P);
      at > -1 ? ve.splice(at, 1) : (t.multipleLimit <= 0 || ve.length < t.multipleLimit) && ve.push(P.value), e(St, ve), ji(ve), P.created && mt(""), t.filterable && !t.reserveKeyword && (r.inputValue = "");
    } else
      e(St, P.value), ji(P.value), B.value = !1;
    lt(), !B.value && Ze(() => {
      Ce(P);
    });
  }, K = (P = [], Z) => Vn(Z) ? -1 : rn(Z.value) ? P.findIndex((ve) => ao(Ei(ve, t.valueKey), Yo(Z))) : P.indexOf(Z.value), Ce = (P) => {
    var Z, ve, at, qt, fs;
    const bi = Nn(P) ? P[0] : P;
    let Jo = null;
    if (bi?.value) {
      const js = Ie.value.filter((t0) => t0.value === bi.value);
      js.length > 0 && (Jo = js[0].$el);
    }
    if (c.value && Jo) {
      const js = (qt = (at = (ve = (Z = c.value) == null ? void 0 : Z.popperRef) == null ? void 0 : ve.contentRef) == null ? void 0 : at.querySelector) == null ? void 0 : qt.call(at, `.${s.be("dropdown", "wrap")}`);
      js && cS(js, Jo);
    }
    (fs = v.value) == null || fs.handleScroll();
  }, st = (P) => {
    r.options.set(P.value, P), r.cachedOptions.set(P.value, P);
  }, Pt = (P, Z) => {
    r.options.get(P) === Z && r.options.delete(P);
  }, ee = C(() => {
    var P, Z;
    return (Z = (P = c.value) == null ? void 0 : P.popperRef) == null ? void 0 : Z.contentRef;
  }), Je = () => {
    r.isBeforeHide = !1, Ze(() => {
      var P;
      (P = v.value) == null || P.update(), Ce(r.selected);
    });
  }, lt = () => {
    var P;
    (P = f.value) == null || P.focus();
  }, yi = () => {
    var P;
    if (B.value) {
      B.value = !1, Ze(() => {
        var Z;
        return (Z = f.value) == null ? void 0 : Z.blur();
      });
      return;
    }
    (P = f.value) == null || P.blur();
  }, Gv = (P) => {
    qo(P);
  }, jv = (P) => {
    if (B.value = !1, A.value) {
      const Z = new FocusEvent("focus", P);
      Ze(() => z(Z));
    }
  }, Kv = () => {
    r.inputValue.length > 0 ? r.inputValue = "" : B.value = !1;
  }, Wu = () => {
    I.value || (Pa && (r.inputHovering = !0), r.menuVisibleOnFocus ? r.menuVisibleOnFocus = !1 : B.value = !B.value);
  }, Uv = () => {
    if (!B.value)
      Wu();
    else {
      const P = Ie.value[r.hoveringIndex];
      P && !P.isDisabled && E(P);
    }
  }, Yo = (P) => rn(P.value) ? Ei(P.value, t.valueKey) : P.value, qv = C(() => Ie.value.filter((P) => P.visible).every((P) => P.isDisabled)), Yv = C(() => t.multiple ? t.collapseTags ? r.selected.slice(0, t.maxCollapseTags) : r.selected : []), Jv = C(() => t.multiple ? t.collapseTags ? r.selected.slice(t.maxCollapseTags) : [] : []), Gu = (P) => {
    if (!B.value) {
      B.value = !0;
      return;
    }
    if (!(r.options.size === 0 || Ye.value === 0 || w.value) && !qv.value) {
      P === "next" ? (r.hoveringIndex++, r.hoveringIndex === r.options.size && (r.hoveringIndex = 0)) : P === "prev" && (r.hoveringIndex--, r.hoveringIndex < 0 && (r.hoveringIndex = r.options.size - 1));
      const Z = Ie.value[r.hoveringIndex];
      (Z.isDisabled || !Z.visible) && Gu(P), Ze(() => Ce(q.value));
    }
  }, Xv = () => {
    if (!a.value)
      return 0;
    const P = window.getComputedStyle(a.value);
    return Number.parseFloat(P.gap || "6px");
  }, Zv = C(() => {
    const P = Xv();
    return { maxWidth: `${y.value && t.maxCollapseTags === 1 ? r.selectionWidth - r.collapseItemWidth - P : r.selectionWidth}px` };
  }), Qv = C(() => ({ maxWidth: `${r.selectionWidth}px` })), e0 = (P) => {
    e("popup-scroll", P);
  };
  return Bn(a, it), Bn(g, fe), Bn(T, fe), Bn(m, Re), Bn(y, G), qe(() => {
    ie();
  }), {
    inputId: X,
    contentId: i,
    nsSelect: s,
    nsInput: o,
    states: r,
    isFocused: A,
    expanded: B,
    optionsArray: Ie,
    hoverOption: q,
    selectSize: wn,
    filteredOptionsCount: Ye,
    updateTooltip: fe,
    updateTagTooltip: Re,
    debouncedOnInputChange: Uo,
    onInput: _t,
    deletePrevTag: Kl,
    deleteTag: Ul,
    deleteSelected: qo,
    handleOptionSelect: E,
    scrollToOption: Ce,
    hasModelValue: L,
    shouldShowPlaceholder: sn,
    currentPlaceholder: Nt,
    mouseEnterEventName: Dn,
    needStatusIcon: oe,
    showClose: le,
    iconComponent: we,
    iconReverse: Te,
    validateState: xe,
    validateIcon: be,
    showNewOption: jt,
    updateOptions: Kt,
    collapseTagSize: Ut,
    setSelected: ie,
    selectDisabled: I,
    emptyText: Oe,
    handleCompositionStart: _,
    handleCompositionUpdate: x,
    handleCompositionEnd: k,
    onOptionCreate: st,
    onOptionDestroy: Pt,
    handleMenuEnter: Je,
    focus: lt,
    blur: yi,
    handleClearClick: Gv,
    handleClickOutside: jv,
    handleEsc: Kv,
    toggleMenu: Wu,
    selectOption: Uv,
    getValueKey: Yo,
    navigateOptions: Gu,
    dropdownMenuVisible: Sn,
    showTagList: Yv,
    collapseTagList: Jv,
    popupScroll: e0,
    tagStyle: Zv,
    collapseTagStyle: Qv,
    popperRef: ee,
    inputRef: f,
    tooltipRef: c,
    tagTooltipRef: u,
    prefixRef: d,
    suffixRef: h,
    selectRef: l,
    wrapperRef: T,
    selectionRef: a,
    scrollbarRef: v,
    menuRef: g,
    tagMenuRef: m,
    collapseItemRef: y
  };
};
var $x = J({
  name: "ElOptions",
  setup(t, { slots: e }) {
    const n = de(Pl);
    let i = [];
    return () => {
      var s, o;
      const r = (s = e.default) == null ? void 0 : s.call(e), l = [];
      function a(c) {
        Nn(c) && c.forEach((u) => {
          var f, d, h, g;
          const m = (f = u?.type || {}) == null ? void 0 : f.name;
          m === "ElOptionGroup" ? a(!Qt(u.children) && !Nn(u.children) && tt((d = u.children) == null ? void 0 : d.default) ? (h = u.children) == null ? void 0 : h.default() : u.children) : m === "ElOption" ? l.push((g = u.props) == null ? void 0 : g.value) : Nn(u.children) && a(u.children);
        });
      }
      return r.length && a((o = r[0]) == null ? void 0 : o.children), ao(l, i) || (i = l, n && (n.states.optionValues = l)), r;
    };
  }
});
const Fx = Ee({
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
  size: Vo,
  effect: {
    type: re(String),
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
    type: re(Object),
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
  teleported: Eo.teleported,
  persistent: {
    type: Boolean,
    default: !0
  },
  clearIcon: {
    type: qn,
    default: Uc
  },
  fitInputWidth: Boolean,
  suffixIcon: {
    type: qn,
    default: Kc
  },
  tagType: { ...Fa.type, default: "info" },
  tagEffect: { ...Fa.effect, default: "light" },
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
    type: re(String),
    values: Ml,
    default: "bottom-start"
  },
  fallbackPlacements: {
    type: re(Array),
    default: ["bottom-start", "top-start", "right", "left"]
  },
  tabindex: {
    type: [String, Number],
    default: 0
  },
  appendTo: String,
  ...fp,
  ...Hs(["ariaLabel"])
}), dd = "ElSelect", Nx = J({
  name: dd,
  componentName: dd,
  components: {
    ElSelectMenu: Lx,
    ElOption: pu,
    ElOptions: $x,
    ElTag: u_,
    ElScrollbar: Ap,
    ElTooltip: Zp,
    ElIcon: ft
  },
  directives: { ClickOutside: f_ },
  props: Fx,
  emits: [
    St,
    As,
    "remove-tag",
    "clear",
    "visible-change",
    "focus",
    "blur",
    "popup-scroll"
  ],
  setup(t, { emit: e }) {
    const n = C(() => {
      const { modelValue: a, multiple: c } = t, u = c ? [] : void 0;
      return Nn(a) ? c ? a : u : c ? u : a;
    }), i = Ii({
      ...Rc(t),
      modelValue: n
    }), s = Bx(i, e), { calculatorRef: o, inputStyle: r } = Mx();
    gt(Pl, Ii({
      props: i,
      states: s.states,
      optionsArray: s.optionsArray,
      handleOptionSelect: s.handleOptionSelect,
      onOptionCreate: s.onOptionCreate,
      onOptionDestroy: s.onOptionDestroy,
      selectRef: s.selectRef,
      setSelected: s.setSelected
    }));
    const l = C(() => t.multiple ? s.states.selected.map((a) => a.currentLabel) : s.states.selectedLabel);
    return {
      ...s,
      modelValue: n,
      selectedLabel: l,
      calculatorRef: o,
      inputStyle: r
    };
  }
});
function Vx(t, e, n, i, s, o) {
  const r = Ue("el-tag"), l = Ue("el-tooltip"), a = Ue("el-icon"), c = Ue("el-option"), u = Ue("el-options"), f = Ue("el-scrollbar"), d = Ue("el-select-menu"), h = p0("click-outside");
  return Bt((S(), D("div", {
    ref: "selectRef",
    class: F([t.nsSelect.b(), t.nsSelect.m(t.selectSize)]),
    [g0(t.mouseEnterEventName)]: (g) => t.states.inputHovering = !0,
    onMouseleave: (g) => t.states.inputHovering = !1
  }, [
    U(l, {
      ref: "tooltipRef",
      visible: t.dropdownMenuVisible,
      placement: t.placement,
      teleported: t.teleported,
      "popper-class": [t.nsSelect.e("popper"), t.popperClass],
      "popper-options": t.popperOptions,
      "fallback-placements": t.fallbackPlacements,
      effect: t.effect,
      pure: "",
      trigger: "click",
      transition: `${t.nsSelect.namespace.value}-zoom-in-top`,
      "stop-popper-mouse-event": !1,
      "gpu-acceleration": !1,
      persistent: t.persistent,
      "append-to": t.appendTo,
      "show-arrow": t.showArrow,
      offset: t.offset,
      onBeforeShow: t.handleMenuEnter,
      onHide: (g) => t.states.isBeforeHide = !1
    }, {
      default: j(() => {
        var g;
        return [
          b("div", {
            ref: "wrapperRef",
            class: F([
              t.nsSelect.e("wrapper"),
              t.nsSelect.is("focused", t.isFocused),
              t.nsSelect.is("hovering", t.states.inputHovering),
              t.nsSelect.is("filterable", t.filterable),
              t.nsSelect.is("disabled", t.selectDisabled)
            ]),
            onClick: Xe(t.toggleMenu, ["prevent"])
          }, [
            t.$slots.prefix ? (S(), D("div", {
              key: 0,
              ref: "prefixRef",
              class: F(t.nsSelect.e("prefix"))
            }, [
              ne(t.$slots, "prefix")
            ], 2)) : N("v-if", !0),
            b("div", {
              ref: "selectionRef",
              class: F([
                t.nsSelect.e("selection"),
                t.nsSelect.is("near", t.multiple && !t.$slots.prefix && !!t.states.selected.length)
              ])
            }, [
              t.multiple ? ne(t.$slots, "tag", { key: 0 }, () => [
                (S(!0), D(ye, null, ct(t.showTagList, (m) => (S(), D("div", {
                  key: t.getValueKey(m),
                  class: F(t.nsSelect.e("selected-item"))
                }, [
                  U(r, {
                    closable: !t.selectDisabled && !m.isDisabled,
                    size: t.collapseTagSize,
                    type: t.tagType,
                    effect: t.tagEffect,
                    "disable-transitions": "",
                    style: je(t.tagStyle),
                    onClose: (y) => t.deleteTag(y, m)
                  }, {
                    default: j(() => [
                      b("span", {
                        class: F(t.nsSelect.e("tags-text"))
                      }, [
                        ne(t.$slots, "label", {
                          label: m.currentLabel,
                          value: m.value
                        }, () => [
                          De(R(m.currentLabel), 1)
                        ])
                      ], 2)
                    ]),
                    _: 2
                  }, 1032, ["closable", "size", "type", "effect", "style", "onClose"])
                ], 2))), 128)),
                t.collapseTags && t.states.selected.length > t.maxCollapseTags ? (S(), te(l, {
                  key: 0,
                  ref: "tagTooltipRef",
                  disabled: t.dropdownMenuVisible || !t.collapseTagsTooltip,
                  "fallback-placements": ["bottom", "top", "right", "left"],
                  effect: t.effect,
                  placement: "bottom",
                  teleported: t.teleported
                }, {
                  default: j(() => [
                    b("div", {
                      ref: "collapseItemRef",
                      class: F(t.nsSelect.e("selected-item"))
                    }, [
                      U(r, {
                        closable: !1,
                        size: t.collapseTagSize,
                        type: t.tagType,
                        effect: t.tagEffect,
                        "disable-transitions": "",
                        style: je(t.collapseTagStyle)
                      }, {
                        default: j(() => [
                          b("span", {
                            class: F(t.nsSelect.e("tags-text"))
                          }, " + " + R(t.states.selected.length - t.maxCollapseTags), 3)
                        ]),
                        _: 1
                      }, 8, ["size", "type", "effect", "style"])
                    ], 2)
                  ]),
                  content: j(() => [
                    b("div", {
                      ref: "tagMenuRef",
                      class: F(t.nsSelect.e("selection"))
                    }, [
                      (S(!0), D(ye, null, ct(t.collapseTagList, (m) => (S(), D("div", {
                        key: t.getValueKey(m),
                        class: F(t.nsSelect.e("selected-item"))
                      }, [
                        U(r, {
                          class: "in-tooltip",
                          closable: !t.selectDisabled && !m.isDisabled,
                          size: t.collapseTagSize,
                          type: t.tagType,
                          effect: t.tagEffect,
                          "disable-transitions": "",
                          onClose: (y) => t.deleteTag(y, m)
                        }, {
                          default: j(() => [
                            b("span", {
                              class: F(t.nsSelect.e("tags-text"))
                            }, [
                              ne(t.$slots, "label", {
                                label: m.currentLabel,
                                value: m.value
                              }, () => [
                                De(R(m.currentLabel), 1)
                              ])
                            ], 2)
                          ]),
                          _: 2
                        }, 1032, ["closable", "size", "type", "effect", "onClose"])
                      ], 2))), 128))
                    ], 2)
                  ]),
                  _: 3
                }, 8, ["disabled", "effect", "teleported"])) : N("v-if", !0)
              ]) : N("v-if", !0),
              b("div", {
                class: F([
                  t.nsSelect.e("selected-item"),
                  t.nsSelect.e("input-wrapper"),
                  t.nsSelect.is("hidden", !t.filterable)
                ])
              }, [
                Bt(b("input", {
                  id: t.inputId,
                  ref: "inputRef",
                  "onUpdate:modelValue": (m) => t.states.inputValue = m,
                  type: "text",
                  name: t.name,
                  class: F([t.nsSelect.e("input"), t.nsSelect.is(t.selectSize)]),
                  disabled: t.selectDisabled,
                  autocomplete: t.autocomplete,
                  style: je(t.inputStyle),
                  tabindex: t.tabindex,
                  role: "combobox",
                  readonly: !t.filterable,
                  spellcheck: "false",
                  "aria-activedescendant": ((g = t.hoverOption) == null ? void 0 : g.id) || "",
                  "aria-controls": t.contentId,
                  "aria-expanded": t.dropdownMenuVisible,
                  "aria-label": t.ariaLabel,
                  "aria-autocomplete": "none",
                  "aria-haspopup": "listbox",
                  onKeydown: [
                    ii(Xe((m) => t.navigateOptions("next"), ["stop", "prevent"]), ["down"]),
                    ii(Xe((m) => t.navigateOptions("prev"), ["stop", "prevent"]), ["up"]),
                    ii(Xe(t.handleEsc, ["stop", "prevent"]), ["esc"]),
                    ii(Xe(t.selectOption, ["stop", "prevent"]), ["enter"]),
                    ii(Xe(t.deletePrevTag, ["stop"]), ["delete"])
                  ],
                  onCompositionstart: t.handleCompositionStart,
                  onCompositionupdate: t.handleCompositionUpdate,
                  onCompositionend: t.handleCompositionEnd,
                  onInput: t.onInput,
                  onClick: Xe(t.toggleMenu, ["stop"])
                }, null, 46, ["id", "onUpdate:modelValue", "name", "disabled", "autocomplete", "tabindex", "readonly", "aria-activedescendant", "aria-controls", "aria-expanded", "aria-label", "onKeydown", "onCompositionstart", "onCompositionupdate", "onCompositionend", "onInput", "onClick"]), [
                  [m0, t.states.inputValue]
                ]),
                t.filterable ? (S(), D("span", {
                  key: 0,
                  ref: "calculatorRef",
                  "aria-hidden": "true",
                  class: F(t.nsSelect.e("input-calculator")),
                  textContent: R(t.states.inputValue)
                }, null, 10, ["textContent"])) : N("v-if", !0)
              ], 2),
              t.shouldShowPlaceholder ? (S(), D("div", {
                key: 1,
                class: F([
                  t.nsSelect.e("selected-item"),
                  t.nsSelect.e("placeholder"),
                  t.nsSelect.is("transparent", !t.hasModelValue || t.expanded && !t.states.inputValue)
                ])
              }, [
                t.hasModelValue ? ne(t.$slots, "label", {
                  key: 0,
                  label: t.currentPlaceholder,
                  value: t.modelValue
                }, () => [
                  b("span", null, R(t.currentPlaceholder), 1)
                ]) : (S(), D("span", { key: 1 }, R(t.currentPlaceholder), 1))
              ], 2)) : N("v-if", !0)
            ], 2),
            b("div", {
              ref: "suffixRef",
              class: F(t.nsSelect.e("suffix"))
            }, [
              t.iconComponent && !t.showClose ? (S(), te(a, {
                key: 0,
                class: F([t.nsSelect.e("caret"), t.nsSelect.e("icon"), t.iconReverse])
              }, {
                default: j(() => [
                  (S(), te(Rt(t.iconComponent)))
                ]),
                _: 1
              }, 8, ["class"])) : N("v-if", !0),
              t.showClose && t.clearIcon ? (S(), te(a, {
                key: 1,
                class: F([
                  t.nsSelect.e("caret"),
                  t.nsSelect.e("icon"),
                  t.nsSelect.e("clear")
                ]),
                onClick: t.handleClearClick
              }, {
                default: j(() => [
                  (S(), te(Rt(t.clearIcon)))
                ]),
                _: 1
              }, 8, ["class", "onClick"])) : N("v-if", !0),
              t.validateState && t.validateIcon && t.needStatusIcon ? (S(), te(a, {
                key: 2,
                class: F([
                  t.nsInput.e("icon"),
                  t.nsInput.e("validateIcon"),
                  t.nsInput.is("loading", t.validateState === "validating")
                ])
              }, {
                default: j(() => [
                  (S(), te(Rt(t.validateIcon)))
                ]),
                _: 1
              }, 8, ["class"])) : N("v-if", !0)
            ], 2)
          ], 10, ["onClick"])
        ];
      }),
      content: j(() => [
        U(d, { ref: "menuRef" }, {
          default: j(() => [
            t.$slots.header ? (S(), D("div", {
              key: 0,
              class: F(t.nsSelect.be("dropdown", "header")),
              onClick: Xe(() => {
              }, ["stop"])
            }, [
              ne(t.$slots, "header")
            ], 10, ["onClick"])) : N("v-if", !0),
            Bt(U(f, {
              id: t.contentId,
              ref: "scrollbarRef",
              tag: "ul",
              "wrap-class": t.nsSelect.be("dropdown", "wrap"),
              "view-class": t.nsSelect.be("dropdown", "list"),
              class: F([t.nsSelect.is("empty", t.filteredOptionsCount === 0)]),
              role: "listbox",
              "aria-label": t.ariaLabel,
              "aria-orientation": "vertical",
              onScroll: t.popupScroll
            }, {
              default: j(() => [
                t.showNewOption ? (S(), te(c, {
                  key: 0,
                  value: t.states.inputValue,
                  created: !0
                }, null, 8, ["value"])) : N("v-if", !0),
                U(u, null, {
                  default: j(() => [
                    ne(t.$slots, "default")
                  ]),
                  _: 3
                })
              ]),
              _: 3
            }, 8, ["id", "wrap-class", "view-class", "class", "aria-label", "onScroll"]), [
              [Kn, t.states.options.size > 0 && !t.loading]
            ]),
            t.$slots.loading && t.loading ? (S(), D("div", {
              key: 1,
              class: F(t.nsSelect.be("dropdown", "loading"))
            }, [
              ne(t.$slots, "loading")
            ], 2)) : t.loading || t.filteredOptionsCount === 0 ? (S(), D("div", {
              key: 2,
              class: F(t.nsSelect.be("dropdown", "empty"))
            }, [
              ne(t.$slots, "empty", {}, () => [
                b("span", null, R(t.emptyText), 1)
              ])
            ], 2)) : N("v-if", !0),
            t.$slots.footer ? (S(), D("div", {
              key: 3,
              class: F(t.nsSelect.be("dropdown", "footer")),
              onClick: Xe(() => {
              }, ["stop"])
            }, [
              ne(t.$slots, "footer")
            ], 10, ["onClick"])) : N("v-if", !0)
          ]),
          _: 3
        }, 512)
      ]),
      _: 3
    }, 8, ["visible", "placement", "teleported", "popper-class", "popper-options", "fallback-placements", "effect", "transition", "persistent", "append-to", "show-arrow", "offset", "onBeforeShow", "onHide"])
  ], 16, ["onMouseleave"])), [
    [h, t.handleClickOutside, t.popperRef]
  ]);
}
var zx = /* @__PURE__ */ Se(Nx, [["render", Vx], ["__file", "select.vue"]]);
const Hx = J({
  name: "ElOptionGroup",
  componentName: "ElOptionGroup",
  props: {
    label: String,
    disabled: Boolean
  },
  setup(t) {
    const e = Le("select"), n = M(null), i = pt(), s = M([]);
    gt(gg, Ii({
      ...Rc(t)
    }));
    const o = C(() => s.value.some((c) => c.visible === !0)), r = (c) => {
      var u, f;
      return ((u = c.type) == null ? void 0 : u.name) === "ElOption" && !!((f = c.component) != null && f.proxy);
    }, l = (c) => {
      const u = si(c), f = [];
      return u.forEach((d) => {
        var h, g;
        r(d) ? f.push(d.component.proxy) : (h = d.children) != null && h.length ? f.push(...l(d.children)) : (g = d.component) != null && g.subTree && f.push(...l(d.component.subTree));
      }), f;
    }, a = () => {
      s.value = l(i.subTree);
    };
    return qe(() => {
      a();
    }), Hw(n, a, {
      attributes: !0,
      subtree: !0,
      childList: !0
    }), {
      groupRef: n,
      visible: o,
      ns: e
    };
  }
});
function Wx(t, e, n, i, s, o) {
  return Bt((S(), D("ul", {
    ref: "groupRef",
    class: F(t.ns.be("group", "wrap"))
  }, [
    b("li", {
      class: F(t.ns.be("group", "title"))
    }, R(t.label), 3),
    b("li", null, [
      b("ul", {
        class: F(t.ns.b("group"))
      }, [
        ne(t.$slots, "default")
      ], 2)
    ])
  ], 2)), [
    [Kn, t.visible]
  ]);
}
var mg = /* @__PURE__ */ Se(Hx, [["render", Wx], ["__file", "option-group.vue"]]);
const vg = nn(zx, {
  Option: pu,
  OptionGroup: mg
}), yg = zo(pu);
zo(mg);
const bg = ["success", "info", "warning", "error"], xt = wp({
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
  appendTo: Ke ? document.body : void 0
}), Gx = Ee({
  customClass: {
    type: String,
    default: xt.customClass
  },
  center: {
    type: Boolean,
    default: xt.center
  },
  dangerouslyUseHTMLString: {
    type: Boolean,
    default: xt.dangerouslyUseHTMLString
  },
  duration: {
    type: Number,
    default: xt.duration
  },
  icon: {
    type: qn,
    default: xt.icon
  },
  id: {
    type: String,
    default: xt.id
  },
  message: {
    type: re([
      String,
      Object,
      Function
    ]),
    default: xt.message
  },
  onClose: {
    type: re(Function),
    default: xt.onClose
  },
  showClose: {
    type: Boolean,
    default: xt.showClose
  },
  type: {
    type: String,
    values: bg,
    default: xt.type
  },
  plain: {
    type: Boolean,
    default: xt.plain
  },
  offset: {
    type: Number,
    default: xt.offset
  },
  zIndex: {
    type: Number,
    default: xt.zIndex
  },
  grouping: {
    type: Boolean,
    default: xt.grouping
  },
  repeatNum: {
    type: Number,
    default: xt.repeatNum
  }
}), jx = {
  destroy: () => !0
}, _n = v0([]), Kx = (t) => {
  const e = _n.findIndex((s) => s.id === t), n = _n[e];
  let i;
  return e > 0 && (i = _n[e - 1]), { current: n, prev: i };
}, Ux = (t) => {
  const { prev: e } = Kx(t);
  return e ? e.vm.exposed.bottom.value : 0;
}, qx = (t, e) => _n.findIndex((i) => i.id === t) > 0 ? 16 : e, Yx = J({
  name: "ElMessage"
}), Jx = /* @__PURE__ */ J({
  ...Yx,
  props: Gx,
  emits: jx,
  setup(t, { expose: e }) {
    const n = t, { Close: i } = FS, { ns: s, zIndex: o } = dp("message"), { currentZIndex: r, nextZIndex: l } = o, a = M(), c = M(!1), u = M(0);
    let f;
    const d = C(() => n.type ? n.type === "error" ? "danger" : n.type : "info"), h = C(() => {
      const A = n.type;
      return { [s.bm("icon", A)]: A && Yr[A] };
    }), g = C(() => n.icon || Yr[n.type] || ""), m = C(() => Ux(n.id)), y = C(() => qx(n.id, n.offset) + m.value), v = C(() => u.value + y.value), w = C(() => ({
      top: `${y.value}px`,
      zIndex: r.value
    }));
    function _() {
      n.duration !== 0 && ({ stop: f } = Kr(() => {
        k();
      }, n.duration));
    }
    function x() {
      f?.();
    }
    function k() {
      c.value = !1;
    }
    function T({ code: A }) {
      A === Ge.esc && k();
    }
    return qe(() => {
      _(), l(), c.value = !0;
    }), ae(() => n.repeatNum, () => {
      x(), _();
    }), an(document, "keydown", T), Bn(a, () => {
      u.value = a.value.getBoundingClientRect().height;
    }), e({
      visible: c,
      bottom: v,
      close: k
    }), (A, z) => (S(), te(pi, {
      name: p(s).b("fade"),
      onBeforeLeave: A.onClose,
      onAfterLeave: (B) => A.$emit("destroy"),
      persisted: ""
    }, {
      default: j(() => [
        Bt(b("div", {
          id: A.id,
          ref_key: "messageRef",
          ref: a,
          class: F([
            p(s).b(),
            { [p(s).m(A.type)]: A.type },
            p(s).is("center", A.center),
            p(s).is("closable", A.showClose),
            p(s).is("plain", A.plain),
            A.customClass
          ]),
          style: je(p(w)),
          role: "alert",
          onMouseenter: x,
          onMouseleave: _
        }, [
          A.repeatNum > 1 ? (S(), te(p(Rk), {
            key: 0,
            value: A.repeatNum,
            type: p(d),
            class: F(p(s).e("badge"))
          }, null, 8, ["value", "type", "class"])) : N("v-if", !0),
          p(g) ? (S(), te(p(ft), {
            key: 1,
            class: F([p(s).e("icon"), p(h)])
          }, {
            default: j(() => [
              (S(), te(Rt(p(g))))
            ]),
            _: 1
          }, 8, ["class"])) : N("v-if", !0),
          ne(A.$slots, "default", {}, () => [
            A.dangerouslyUseHTMLString ? (S(), D(ye, { key: 1 }, [
              N(" Caution here, message could've been compromised, never use user's input as message "),
              b("p", {
                class: F(p(s).e("content")),
                innerHTML: A.message
              }, null, 10, ["innerHTML"])
            ], 2112)) : (S(), D("p", {
              key: 0,
              class: F(p(s).e("content"))
            }, R(A.message), 3))
          ]),
          A.showClose ? (S(), te(p(ft), {
            key: 2,
            class: F(p(s).e("closeBtn")),
            onClick: Xe(k, ["stop"])
          }, {
            default: j(() => [
              U(p(i))
            ]),
            _: 1
          }, 8, ["class", "onClick"])) : N("v-if", !0)
        ], 46, ["id"]), [
          [Kn, c.value]
        ])
      ]),
      _: 3
    }, 8, ["name", "onBeforeLeave", "onAfterLeave"]));
  }
});
var Xx = /* @__PURE__ */ Se(Jx, [["__file", "message.vue"]]);
let Zx = 1;
const wg = (t) => {
  const e = !t || Qt(t) || So(t) || tt(t) ? { message: t } : t, n = {
    ...xt,
    ...e
  };
  if (!n.appendTo)
    n.appendTo = document.body;
  else if (Qt(n.appendTo)) {
    let i = document.querySelector(n.appendTo);
    xn(i) || (i = document.body), n.appendTo = i;
  }
  return _o(kn.grouping) && !n.grouping && (n.grouping = kn.grouping), Fe(kn.duration) && n.duration === 3e3 && (n.duration = kn.duration), Fe(kn.offset) && n.offset === 16 && (n.offset = kn.offset), _o(kn.showClose) && !n.showClose && (n.showClose = kn.showClose), n;
}, Qx = (t) => {
  const e = _n.indexOf(t);
  if (e === -1)
    return;
  _n.splice(e, 1);
  const { handler: n } = t;
  n.close();
}, eA = ({ appendTo: t, ...e }, n) => {
  const i = `message_${Zx++}`, s = e.onClose, o = document.createElement("div"), r = {
    ...e,
    id: i,
    onClose: () => {
      s?.(), Qx(u);
    },
    onDestroy: () => {
      Hr(null, o);
    }
  }, l = U(Xx, r, tt(r.message) || So(r.message) ? {
    default: tt(r.message) ? r.message : () => r.message
  } : null);
  l.appContext = n || Ds._context, Hr(l, o), t.appendChild(o.firstElementChild);
  const a = l.component, u = {
    id: i,
    vnode: l,
    vm: a,
    handler: {
      close: () => {
        a.exposed.visible.value = !1;
      }
    },
    props: l.component.props
  };
  return u;
}, Ds = (t = {}, e) => {
  if (!Ke)
    return { close: () => {
    } };
  const n = wg(t);
  if (n.grouping && _n.length) {
    const s = _n.find(({ vnode: o }) => {
      var r;
      return ((r = o.props) == null ? void 0 : r.message) === n.message;
    });
    if (s)
      return s.props.repeatNum += 1, s.props.type = n.type, s.handler;
  }
  if (Fe(kn.max) && _n.length >= kn.max)
    return { close: () => {
    } };
  const i = eA(n, e);
  return _n.push(i), i.handler;
};
bg.forEach((t) => {
  Ds[t] = (e = {}, n) => {
    const i = wg(e);
    return Ds({ ...i, type: t }, n);
  };
});
function tA(t) {
  for (const e of _n)
    (!t || t === e.props.type) && e.handler.close();
}
Ds.closeAll = tA;
Ds._context = null;
const nA = gp(Ds, "$message"), Sg = [
  "success",
  "info",
  "warning",
  "error"
], iA = Ee({
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
    type: qn
  },
  id: {
    type: String,
    default: ""
  },
  message: {
    type: re([
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
    type: re(Function),
    default: () => {
    }
  },
  onClose: {
    type: re(Function),
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
    values: [...Sg, ""],
    default: ""
  },
  zIndex: Number
}), sA = {
  destroy: () => !0
}, oA = J({
  name: "ElNotification"
}), rA = /* @__PURE__ */ J({
  ...oA,
  props: iA,
  emits: sA,
  setup(t, { expose: e }) {
    const n = t, { ns: i, zIndex: s } = dp("notification"), { nextZIndex: o, currentZIndex: r } = s, { Close: l } = vp, a = M(!1);
    let c;
    const u = C(() => {
      const _ = n.type;
      return _ && Yr[n.type] ? i.m(_) : "";
    }), f = C(() => n.type && Yr[n.type] || n.icon), d = C(() => n.position.endsWith("right") ? "right" : "left"), h = C(() => n.position.startsWith("top") ? "top" : "bottom"), g = C(() => {
      var _;
      return {
        [h.value]: `${n.offset}px`,
        zIndex: (_ = n.zIndex) != null ? _ : r.value
      };
    });
    function m() {
      n.duration > 0 && ({ stop: c } = Kr(() => {
        a.value && v();
      }, n.duration));
    }
    function y() {
      c?.();
    }
    function v() {
      a.value = !1;
    }
    function w({ code: _ }) {
      _ === Ge.delete || _ === Ge.backspace ? y() : _ === Ge.esc ? a.value && v() : m();
    }
    return qe(() => {
      m(), o(), a.value = !0;
    }), an(document, "keydown", w), e({
      visible: a,
      close: v
    }), (_, x) => (S(), te(pi, {
      name: p(i).b("fade"),
      onBeforeLeave: _.onClose,
      onAfterLeave: (k) => _.$emit("destroy"),
      persisted: ""
    }, {
      default: j(() => [
        Bt(b("div", {
          id: _.id,
          class: F([p(i).b(), _.customClass, p(d)]),
          style: je(p(g)),
          role: "alert",
          onMouseenter: y,
          onMouseleave: m,
          onClick: _.onClick
        }, [
          p(f) ? (S(), te(p(ft), {
            key: 0,
            class: F([p(i).e("icon"), p(u)])
          }, {
            default: j(() => [
              (S(), te(Rt(p(f))))
            ]),
            _: 1
          }, 8, ["class"])) : N("v-if", !0),
          b("div", {
            class: F(p(i).e("group"))
          }, [
            b("h2", {
              class: F(p(i).e("title")),
              textContent: R(_.title)
            }, null, 10, ["textContent"]),
            Bt(b("div", {
              class: F(p(i).e("content")),
              style: je(_.title ? void 0 : { margin: 0 })
            }, [
              ne(_.$slots, "default", {}, () => [
                _.dangerouslyUseHTMLString ? (S(), D(ye, { key: 1 }, [
                  N(" Caution here, message could've been compromised, never use user's input as message "),
                  b("p", { innerHTML: _.message }, null, 8, ["innerHTML"])
                ], 2112)) : (S(), D("p", { key: 0 }, R(_.message), 1))
              ])
            ], 6), [
              [Kn, _.message]
            ]),
            _.showClose ? (S(), te(p(ft), {
              key: 0,
              class: F(p(i).e("closeBtn")),
              onClick: Xe(v, ["stop"])
            }, {
              default: j(() => [
                U(p(l))
              ]),
              _: 1
            }, 8, ["class", "onClick"])) : N("v-if", !0)
          ], 2)
        ], 46, ["id", "onClick"]), [
          [Kn, a.value]
        ])
      ]),
      _: 3
    }, 8, ["name", "onBeforeLeave", "onAfterLeave"]));
  }
});
var lA = /* @__PURE__ */ Se(rA, [["__file", "notification.vue"]]);
const Zr = {
  "top-left": [],
  "top-right": [],
  "bottom-left": [],
  "bottom-right": []
}, Na = 16;
let aA = 1;
const Ps = function(t = {}, e) {
  if (!Ke)
    return { close: () => {
    } };
  (Qt(t) || So(t)) && (t = { message: t });
  const n = t.position || "top-right";
  let i = t.offset || 0;
  Zr[n].forEach(({ vm: u }) => {
    var f;
    i += (((f = u.el) == null ? void 0 : f.offsetHeight) || 0) + Na;
  }), i += Na;
  const s = `notification_${aA++}`, o = t.onClose, r = {
    ...t,
    offset: i,
    id: s,
    onClose: () => {
      cA(s, n, o);
    }
  };
  let l = document.body;
  xn(t.appendTo) ? l = t.appendTo : Qt(t.appendTo) && (l = document.querySelector(t.appendTo)), xn(l) || (l = document.body);
  const a = document.createElement("div"), c = U(lA, r, tt(r.message) ? r.message : So(r.message) ? () => r.message : null);
  return c.appContext = Vn(e) ? Ps._context : e, c.props.onDestroy = () => {
    Hr(null, a);
  }, Hr(c, a), Zr[n].push({ vm: c }), l.appendChild(a.firstElementChild), {
    close: () => {
      c.component.exposed.visible.value = !1;
    }
  };
};
Sg.forEach((t) => {
  Ps[t] = (e = {}, n) => ((Qt(e) || So(e)) && (e = {
    message: e
  }), Ps({ ...e, type: t }, n));
});
function cA(t, e, n) {
  const i = Zr[e], s = i.findIndex(({ vm: c }) => {
    var u;
    return ((u = c.component) == null ? void 0 : u.props.id) === t;
  });
  if (s === -1)
    return;
  const { vm: o } = i[s];
  if (!o)
    return;
  n?.(o);
  const r = o.el.offsetHeight, l = e.split("-")[0];
  i.splice(s, 1);
  const a = i.length;
  if (!(a < 1))
    for (let c = s; c < a; c++) {
      const { el: u, component: f } = i[c].vm, d = Number.parseInt(u.style[l], 10) - r - Na;
      f.props.offset = d;
    }
}
function uA() {
  for (const t of Object.values(Zr))
    t.forEach(({ vm: e }) => {
      e.component.exposed.visible.value = !1;
    });
}
Ps.closeAll = uA;
Ps._context = null;
const fA = gp(Ps, "$notify"), dA = ["disabled"], hA = {
  key: 0,
  class: "custom-button__loading"
}, pA = /* @__PURE__ */ J({
  name: "CustomButton",
  __name: "CustomButton",
  props: {
    type: {
      type: String,
      default: "default",
      validator: (t) => ["default", "primary", "success", "danger", "warning", "text"].includes(t)
    },
    size: {
      type: String,
      default: "",
      validator: (t) => ["", "small", "large"].includes(t)
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
  setup(t) {
    const e = t;
    return (n, i) => (S(), D("button", {
      class: F([
        "custom-button",
        `custom-button--${e.type || "default"}`,
        e.size ? `custom-button--${e.size}` : "custom-button--medium",
        { "custom-button--loading": e.loading },
        { "custom-button--circle": e.circle },
        { "custom-button--plain": e.plain }
      ]),
      disabled: t.loading || t.disabled,
      onClick: i[0] || (i[0] = (s) => n.$emit("click", s))
    }, [
      t.loading ? (S(), D("div", hA, i[1] || (i[1] = [
        b(
          "svg",
          {
            class: "custom-button__spinner",
            viewBox: "0 0 50 50"
          },
          [
            b("circle", {
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
      ]))) : N("v-if", !0),
      ne(n.$slots, "default", {}, void 0, !0)
    ], 10, dA));
  }
}), vi = (t, e) => {
  const n = t.__vccOpts || t;
  for (const [i, s] of e)
    n[i] = s;
  return n;
}, An = /* @__PURE__ */ vi(pA, [["__scopeId", "data-v-9497085f"]]), gA = /* @__PURE__ */ J({
  name: "CustomSwitch",
  __name: "CustomSwitch",
  props: {
    modelValue: {
      type: Boolean,
      default: !1
    },
    disabled: {
      type: Boolean,
      default: !1
    },
    activeText: {
      type: String,
      default: ""
    },
    inactiveText: {
      type: String,
      default: ""
    },
    activeColor: {
      type: String,
      default: "#4b94f8"
    }
  },
  emits: ["update:modelValue", "change"],
  setup(t, { emit: e }) {
    const n = t, i = e, s = () => {
      if (n.disabled) return;
      const o = !n.modelValue;
      i("update:modelValue", o), i("change", o);
    };
    return (o, r) => (S(), D(
      "div",
      {
        class: F(["custom-switch", {
          "custom-switch--active": t.modelValue,
          "custom-switch--disabled": t.disabled
        }]),
        onClick: s
      },
      [
        t.activeText || t.inactiveText ? (S(), D(
          "span",
          {
            key: 0,
            class: F(["custom-switch__text", { "custom-switch__text--active": t.modelValue }])
          },
          R(t.modelValue ? t.activeText : t.inactiveText),
          3
          /* TEXT, CLASS */
        )) : N("v-if", !0),
        r[0] || (r[0] = b(
          "div",
          { class: "custom-switch__core" },
          [
            b("div", { class: "custom-switch__handle" })
          ],
          -1
          /* HOISTED */
        ))
      ],
      2
      /* CLASS */
    ));
  }
}), ia = /* @__PURE__ */ vi(gA, [["__scopeId", "data-v-59686f54"]]), mA = { class: "dialog-footer-default" }, vA = { class: "footer-left" }, yA = { class: "footer-right" }, bA = /* @__PURE__ */ J({
  __name: "CommonDialog",
  props: {
    modelValue: { type: Boolean, default: !1 },
    title: { default: "" },
    width: { default: "540px" },
    closeOnClickModal: { type: Boolean, default: !1 },
    draggable: { type: Boolean, default: !0 },
    center: { type: Boolean, default: !1 },
    showClose: { type: Boolean, default: !0 },
    closeOnPressEscape: { type: Boolean, default: !0 },
    appendToBody: { type: Boolean, default: !0 },
    alignCenter: { type: Boolean, default: !0 },
    showDefaultFooter: { type: Boolean, default: !1 },
    confirmText: { default: "确定" },
    cancelText: { default: "取消" },
    loading: { type: Boolean, default: !1 },
    customClass: { default: "" }
  },
  emits: ["update:modelValue", "confirm", "cancel", "close"],
  setup(t, { expose: e, emit: n }) {
    const i = t, s = n, o = M(i.modelValue), r = C(() => ["app-dialog", i.customClass].filter(Boolean).join(" "));
    ae(
      () => i.modelValue,
      (u) => {
        o.value = u;
      }
    ), ae(o, (u) => {
      s("update:modelValue", u);
    });
    const l = () => {
      s("close");
    }, a = () => {
      s("confirm");
    }, c = () => {
      o.value = !1, s("cancel");
    };
    return e({
      open: () => {
        o.value = !0;
      },
      close: () => {
        o.value = !1;
      }
    }), (u, f) => {
      const d = P_;
      return S(), te(d, {
        modelValue: p(o),
        "onUpdate:modelValue": f[0] || (f[0] = (h) => It(o) ? o.value = h : null),
        title: u.title,
        width: u.width,
        "close-on-click-modal": u.closeOnClickModal,
        draggable: u.draggable,
        center: u.center,
        "show-close": u.showClose,
        "close-on-press-escape": u.closeOnPressEscape,
        "append-to-body": u.appendToBody,
        "align-center": u.alignCenter,
        "custom-class": p(r),
        onClose: l
      }, ml({
        default: j(() => [
          ne(u.$slots, "default", {}, void 0, !0)
        ]),
        _: 2
        /* DYNAMIC */
      }, [
        u.$slots.header ? {
          name: "header",
          fn: j(() => [
            ne(u.$slots, "header", {}, void 0, !0)
          ]),
          key: "0"
        } : void 0,
        u.$slots.footer || u.showDefaultFooter ? {
          name: "footer",
          fn: j(() => [
            ne(u.$slots, "footer", {}, () => [
              b("div", mA, [
                b("div", vA, [
                  ne(u.$slots, "footer-left", {}, void 0, !0)
                ]),
                b("div", yA, [
                  U(An, { onClick: c }, {
                    default: j(() => [
                      De(
                        R(u.cancelText),
                        1
                        /* TEXT */
                      )
                    ]),
                    _: 1
                    /* STABLE */
                  }),
                  U(An, {
                    type: "primary",
                    loading: u.loading,
                    onClick: a
                  }, {
                    default: j(() => [
                      De(
                        R(u.confirmText),
                        1
                        /* TEXT */
                      )
                    ]),
                    _: 1
                    /* STABLE */
                  }, 8, ["loading"])
                ])
              ])
            ], !0)
          ]),
          key: "1"
        } : void 0
      ]), 1032, ["modelValue", "title", "width", "close-on-click-modal", "draggable", "center", "show-close", "close-on-press-escape", "append-to-body", "align-center", "custom-class"]);
    };
  }
}), gu = /* @__PURE__ */ vi(bA, [["__scopeId", "data-v-a7e8a5d6"]]), wA = { class: "select-confirm-content" }, SA = { class: "mb-4" }, CA = { class: "select-confirm-footer" }, kA = /* @__PURE__ */ J({
  __name: "SelectConfirmDialog",
  props: {
    modelValue: { type: Boolean, default: !1 },
    title: { default: "提示" },
    message: { default: "" },
    options: { default: () => [] },
    defaultValue: { default: "" },
    selectPlaceholder: { default: "请选择" },
    width: { default: "420px" },
    center: { type: Boolean, default: !1 },
    showClose: { type: Boolean, default: !0 },
    confirmText: { default: "确定" },
    cancelText: { default: "取消" },
    loading: { type: Boolean, default: !1 }
  },
  emits: ["update:modelValue", "confirm", "cancel"],
  setup(t, { expose: e, emit: n }) {
    const i = t, s = n, o = M(i.modelValue), r = M(i.defaultValue);
    ae(
      () => i.modelValue,
      (c) => {
        o.value = c, c && (r.value = i.defaultValue);
      }
    ), ae(
      () => i.defaultValue,
      (c) => {
        o.value && (r.value = c);
      }
    ), ae(o, (c) => {
      s("update:modelValue", c);
    });
    const l = () => {
      s("confirm", r.value);
    }, a = () => {
      o.value = !1, s("cancel");
    };
    return e({
      open: () => {
        o.value = !0, r.value = i.defaultValue;
      },
      close: () => {
        o.value = !1;
      }
    }), (c, u) => {
      const f = yg, d = vg;
      return S(), te(gu, {
        modelValue: p(o),
        "onUpdate:modelValue": u[1] || (u[1] = (h) => It(o) ? o.value = h : null),
        title: c.title,
        width: c.width,
        center: c.center,
        "show-close": c.showClose
      }, {
        footer: j(() => [
          b("div", CA, [
            U(An, {
              type: "default",
              onClick: a
            }, {
              default: j(() => [
                De(
                  R(c.cancelText),
                  1
                  /* TEXT */
                )
              ]),
              _: 1
              /* STABLE */
            }),
            U(An, {
              type: "primary",
              loading: c.loading,
              onClick: l
            }, {
              default: j(() => [
                De(
                  R(c.confirmText),
                  1
                  /* TEXT */
                )
              ]),
              _: 1
              /* STABLE */
            }, 8, ["loading"])
          ])
        ]),
        default: j(() => [
          b("div", wA, [
            b(
              "div",
              SA,
              R(c.message),
              1
              /* TEXT */
            ),
            U(d, {
              modelValue: p(r),
              "onUpdate:modelValue": u[0] || (u[0] = (h) => It(r) ? r.value = h : null),
              class: "w-full",
              placeholder: c.selectPlaceholder
            }, {
              default: j(() => [
                (S(!0), D(
                  ye,
                  null,
                  ct(c.options, (h) => (S(), te(f, {
                    key: h.value,
                    label: h.label,
                    value: h.value
                  }, null, 8, ["label", "value"]))),
                  128
                  /* KEYED_FRAGMENT */
                ))
              ]),
              _: 1
              /* STABLE */
            }, 8, ["modelValue", "placeholder"])
          ])
        ]),
        _: 1
        /* STABLE */
      }, 8, ["modelValue", "title", "width", "center", "show-close"]);
    };
  }
}), _A = /* @__PURE__ */ vi(kA, [["__scopeId", "data-v-f4b56648"]]), ze = {
  /**
   * 显示消息提示（简化版）
   * @param message 消息内容
   * @param type 消息类型，默认 success
   * @param position 显示位置，默认 center
   * @param duration 显示时长（毫秒），默认 3000
   */
  msg(t, e = "success", n = "center", i) {
    this.message({
      message: t,
      type: e,
      position: n,
      duration: i
    });
  },
  /**
   * 显示消息提示（完整版）
   * @param options 消息选项
   */
  message(t) {
    const {
      message: e,
      type: n = "success",
      position: i = "center",
      duration: s = 3e3,
      showClose: o = !1
    } = t;
    i === "center" ? nA({
      message: e,
      type: n,
      duration: s,
      showClose: o,
      grouping: !0,
      customClass: `app-toast app-toast--${n}`
    }) : fA({
      message: e,
      type: n,
      position: i,
      duration: s,
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
  success(t, e = "center", n) {
    this.msg(t, "success", e, n);
  },
  /**
   * 显示警告消息
   * @param message 消息内容
   * @param position 显示位置，默认 center
   * @param duration 显示时长（毫秒），默认 3000
   */
  warning(t, e = "center", n) {
    this.msg(t, "warning", e, n);
  },
  /**
   * 显示信息消息
   * @param message 消息内容
   * @param position 显示位置，默认 center
   * @param duration 显示时长（毫秒），默认 3000
   */
  info(t, e = "center", n) {
    this.msg(t, "info", e, n);
  },
  /**
   * 显示错误消息
   * @param message 消息内容
   * @param position 显示位置，默认 center
   * @param duration 显示时长（毫秒），默认 3000
   */
  error(t, e = "center", n) {
    this.msg(t, "error", e, n);
  }
};
function xA(t, e, n, i) {
  if (typeof e == "function" ? t !== e || !0 : !e.has(t)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
  return n === "m" ? i : n === "a" ? i.call(t) : i ? i.value : e.get(t);
}
function AA(t, e, n, i, s) {
  if (typeof e == "function" ? t !== e || !0 : !e.has(t)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
  return e.set(t, n), n;
}
var Tr;
const mn = "__TAURI_TO_IPC_KEY__";
function EA(t, e = !1) {
  return window.__TAURI_INTERNALS__.transformCallback(t, e);
}
async function W(t, e = {}, n) {
  return window.__TAURI_INTERNALS__.invoke(t, e, n);
}
class TA {
  get rid() {
    return xA(this, Tr, "f");
  }
  constructor(e) {
    Tr.set(this, void 0), AA(this, Tr, e);
  }
  /**
   * Destroys and cleans up this resource from memory.
   * **You should not call any method on this object anymore and should drop any reference to it.**
   */
  async close() {
    return W("plugin:resources|close", {
      rid: this.rid
    });
  }
}
Tr = /* @__PURE__ */ new WeakMap();
const MA = "snippets-code:developer-mode", Cg = "snippets-code:frontend-diagnostics", OA = 240, qs = "[REDACTED]", Mr = (t) => t.replace(
  /("(?:[^"]*(?:token|password|secret|authorization)[^"]*)"\s*:\s*)("(?:\\.|[^"])*"|[^,\r\n}\]]+)/gi,
  `$1"${qs}"`
).replace(/\bBearer\s+[A-Za-z0-9._~+/=-]+/gi, `Bearer ${qs}`).replace(
  /\b(?:gh[pousr]_[A-Za-z0-9_]{12,}|github_pat_[A-Za-z0-9_]{12,})\b/g,
  qs
).replace(/(https?:\/\/)[^/\s@]+@/gi, `$1${qs}@`).replace(
  /([?&][^=&\s]*(?:token|password|secret|authorization)[^=&\s]*=)[^&\s]+/gi,
  `$1${qs}`
), kg = (t) => {
  if (t === void 0) return;
  if (typeof t == "string") return Mr(t);
  const e = /* @__PURE__ */ new WeakSet();
  try {
    return Mr(
      JSON.stringify(
        t,
        (n, i) => {
          if (i instanceof Error)
            return {
              name: i.name,
              message: i.message,
              stack: i.stack,
              cause: i.cause
            };
          if (typeof i == "bigint") return i.toString();
          if (typeof i == "object" && i !== null) {
            if (e.has(i)) return "[Circular]";
            e.add(i);
          }
          return i;
        },
        2
      )
    );
  } catch {
    return Mr(String(t));
  }
}, DA = () => {
  try {
    return globalThis.__TAURI_INTERNALS__?.metadata?.currentWindow?.label ?? "webview";
  } catch {
    return "webview";
  }
}, PA = () => {
  if (typeof localStorage > "u") return [];
  try {
    const t = JSON.parse(localStorage.getItem(Cg) || "[]");
    return Array.isArray(t) ? t : [];
  } catch {
    return [];
  }
}, mu = () => {
  if (typeof localStorage > "u") return !1;
  try {
    return localStorage.getItem(MA) === "true";
  } catch {
    return !1;
  }
}, IA = (t, e, n) => {
  if (!mu() || typeof localStorage > "u") return;
  const i = PA();
  i.push({
    timestamp: (/* @__PURE__ */ new Date()).toISOString(),
    level: t,
    windowLabel: DA(),
    message: Mr(e),
    data: kg(n)
  });
  try {
    localStorage.setItem(
      Cg,
      JSON.stringify(i.slice(-OA))
    );
  } catch {
  }
}, RA = () => mu(), LA = (t) => t === "error" || mu(), or = (t, e, n) => {
  IA(t, e, n), LA(t) && W("frontend_log", {
    level: t,
    message: e,
    data: n === void 0 ? null : kg(n)
  }).catch(() => {
  });
}, ge = {
  info: (t, e, ...n) => {
    or("info", t, e);
  },
  error: (t, e) => {
    or("error", t, e);
  },
  warn: (t, e) => {
    or("warn", t, e);
  },
  debug: (t, e) => {
    RA() && or("debug", t, e);
  }
}, BA = { class: "confirm-choice-body" }, $A = { class: "message-row" }, FA = { class: "message-text" }, NA = {
  key: 0,
  class: "hint-list"
}, VA = { class: "confirm-footer" }, zA = /* @__PURE__ */ J({
  __name: "ConfirmChoiceDialog",
  props: {
    modelValue: { type: Boolean, default: !1 },
    title: { default: "" },
    message: { default: "" },
    primaryText: { default: "确定" },
    secondaryText: { default: "取消" },
    type: { default: "info" }
  },
  emits: ["update:modelValue", "primary", "secondary", "close"],
  setup(t, { expose: e, emit: n }) {
    const i = t, s = n, o = M(i.modelValue), r = M(!1), l = C(() => {
      switch (i.type) {
        case "warning":
          return "!";
        case "danger":
          return "!";
        default:
          return "i";
      }
    }), a = C(
      () => `confirm-choice-dialog ${i.type === "danger" ? "delete-dialog" : i.type === "warning" ? "warning-dialog" : ""}`
    ), c = C(() => {
      const m = i.message || "", y = m.split(`
`).filter(Boolean), v = [];
      for (const w of y) {
        const _ = w.trim();
        if (/^[•·\-]\s*/.test(_)) break;
        _ && v.push(w);
      }
      return v.join(`
`) || y[0] || m;
    }), u = C(() => {
      const y = (i.message || "").split(`
`).filter(Boolean), v = [];
      for (const w of y) {
        const x = w.trim().match(/^[•·\-]\s*(.+)$/);
        x && v.push(x[1].trim());
      }
      return v;
    });
    ae(
      () => i.modelValue,
      (m) => {
        o.value = m;
      }
    ), ae(o, (m) => {
      s("update:modelValue", m);
    });
    function f() {
      g(), s("primary");
    }
    function d() {
      g(), s("secondary");
    }
    function h() {
      if (o.value = !1, r.value) {
        r.value = !1;
        return;
      }
      s("close");
    }
    function g() {
      r.value = !0, o.value = !1;
    }
    return e({
      open: () => {
        o.value = !0;
      },
      close: () => {
        o.value = !1;
      }
    }), (m, y) => (S(), te(gu, {
      modelValue: p(o),
      "onUpdate:modelValue": y[0] || (y[0] = (v) => It(o) ? o.value = v : null),
      title: m.title,
      width: "440px",
      "custom-class": p(a),
      onClose: h
    }, {
      footer: j(() => [
        b("div", VA, [
          m.secondaryText ? (S(), te(An, {
            key: 0,
            onClick: d
          }, {
            default: j(() => [
              De(
                R(m.secondaryText),
                1
                /* TEXT */
              )
            ]),
            _: 1
            /* STABLE */
          })) : N("v-if", !0),
          U(An, {
            type: m.type === "danger" ? "danger" : "primary",
            onClick: f
          }, {
            default: j(() => [
              De(
                R(m.primaryText),
                1
                /* TEXT */
              )
            ]),
            _: 1
            /* STABLE */
          }, 8, ["type"])
        ])
      ]),
      default: j(() => [
        b("div", BA, [
          b("div", $A, [
            b(
              "span",
              {
                class: F(["type-indicator", `type-${m.type}`])
              },
              R(p(l)),
              3
              /* TEXT, CLASS */
            ),
            b(
              "div",
              FA,
              R(p(c)),
              1
              /* TEXT */
            )
          ]),
          p(u).length ? (S(), D("div", NA, [
            (S(!0), D(
              ye,
              null,
              ct(p(u), (v, w) => (S(), D("div", {
                key: w,
                class: "hint-item"
              }, [
                y[1] || (y[1] = b(
                  "span",
                  { class: "hint-dot" },
                  null,
                  -1
                  /* HOISTED */
                )),
                b(
                  "span",
                  null,
                  R(v),
                  1
                  /* TEXT */
                )
              ]))),
              128
              /* KEYED_FRAGMENT */
            ))
          ])) : N("v-if", !0)
        ])
      ]),
      _: 1
      /* STABLE */
    }, 8, ["modelValue", "title", "custom-class"]));
  }
}), fo = /* @__PURE__ */ vi(zA, [["__scopeId", "data-v-42ef6276"]]);
var Jt;
(function(t) {
  t.WINDOW_RESIZED = "tauri://resize", t.WINDOW_MOVED = "tauri://move", t.WINDOW_CLOSE_REQUESTED = "tauri://close-requested", t.WINDOW_DESTROYED = "tauri://destroyed", t.WINDOW_FOCUS = "tauri://focus", t.WINDOW_BLUR = "tauri://blur", t.WINDOW_SCALE_FACTOR_CHANGED = "tauri://scale-change", t.WINDOW_THEME_CHANGED = "tauri://theme-changed", t.WINDOW_CREATED = "tauri://window-created", t.WEBVIEW_CREATED = "tauri://webview-created", t.DRAG_ENTER = "tauri://drag-enter", t.DRAG_OVER = "tauri://drag-over", t.DRAG_DROP = "tauri://drag-drop", t.DRAG_LEAVE = "tauri://drag-leave";
})(Jt || (Jt = {}));
async function _g(t, e) {
  await W("plugin:event|unlisten", {
    event: t,
    eventId: e
  });
}
async function At(t, e, n) {
  var i;
  const s = typeof n?.target == "string" ? { kind: "AnyLabel", label: n.target } : (i = n?.target) !== null && i !== void 0 ? i : { kind: "Any" };
  return W("plugin:event|listen", {
    event: t,
    target: s,
    handler: EA(e)
  }).then((o) => async () => _g(t, o));
}
async function HA(t, e, n) {
  return At(t, (i) => {
    _g(t, i.id), e(i);
  }, n);
}
async function xg(t, e) {
  await W("plugin:event|emit", {
    event: t,
    payload: e
  });
}
async function WA(t, e, n) {
  await W("plugin:event|emit_to", {
    target: typeof t == "string" ? { kind: "AnyLabel", label: t } : t,
    event: e,
    payload: n
  });
}
async function To() {
  try {
    return await W("get_git_settings_command");
  } catch (t) {
    throw new Error(`获取 Git 设置失败: ${t}`);
  }
}
async function GA(t) {
  try {
    await W("update_git_settings_command", { settings: t }), xg("git-settings-changed").catch(() => {
    });
  } catch (e) {
    throw new Error(`更新 Git 设置失败: ${e}`);
  }
}
var Va = /* @__PURE__ */ ((t) => (t.KeepLocal = "KeepLocal", t.KeepRemote = "KeepRemote", t))(Va || {});
async function jA() {
  try {
    return await W("check_git_repo_command");
  } catch (t) {
    throw new Error(`检查 Git 仓库失败: ${t}`);
  }
}
async function Ag() {
  try {
    return await W("get_git_status_command");
  } catch (t) {
    throw new Error(`获取 Git 状态失败: ${t}`);
  }
}
async function KA(t = 10) {
  try {
    return await W("get_git_records_command", { limit: t });
  } catch (e) {
    throw new Error(`获取 Git 记录失败: ${e}`);
  }
}
async function UA(t) {
  try {
    return await W("get_git_contribution_activity_command", { year: t });
  } catch (e) {
    throw new Error(`获取 Git 提交活跃度失败: ${e}`);
  }
}
async function qA(t, e) {
  try {
    await W("restore_git_record_file_command", { commitHash: t, filePath: e });
  } catch (n) {
    throw new Error(`恢复 Git 记录文件失败: ${n}`);
  }
}
async function YA(t, e, n, i) {
  try {
    await W("init_git_repository_command", { userName: t, userEmail: e, remoteUrl: n, token: i });
  } catch (s) {
    throw new Error(`Git 仓库初始化失败: ${s}`);
  }
}
async function za() {
  try {
    return await W("git_pull_command");
  } catch (t) {
    throw new Error(`Git pull 失败: ${t}`);
  }
}
async function hd(t) {
  try {
    await W("switch_git_branch_command", { branch: t });
  } catch (e) {
    throw new Error(`切换 Git 分支失败: ${e}`);
  }
}
async function Eg(t) {
  try {
    await W("remove_untracked_file_command", { filePath: t });
  } catch (e) {
    throw new Error(`删除未跟踪文件失败: ${e}`);
  }
}
async function JA(t) {
  try {
    return await W("git_push_command", { message: t });
  } catch (e) {
    throw new Error(`Git push 失败: ${e}`);
  }
}
async function Qr() {
  try {
    await W("start_auto_sync_command");
  } catch (t) {
    throw new Error(`启动自动同步失败: ${t}`);
  }
}
async function Ha() {
  try {
    await W("stop_auto_sync_command");
  } catch (t) {
    throw new Error(`停止自动同步失败: ${t}`);
  }
}
async function XA() {
  try {
    return await W("get_auto_sync_status_command");
  } catch (t) {
    return console.error("获取自动同步状态失败:", t), !1;
  }
}
async function Tg() {
  try {
    await W("pause_auto_sync_command");
  } catch (t) {
    throw new Error(`暂停自动同步失败: ${t}`);
  }
}
async function ZA() {
  try {
    await W("resume_auto_sync_command");
  } catch (t) {
    throw new Error(`恢复自动同步失败: ${t}`);
  }
}
async function QA(t) {
  try {
    return await W("get_conflict_file_content", {
      filePath: t
    });
  } catch (e) {
    throw new Error(`获取冲突文件内容失败: ${e}`);
  }
}
async function eE(t) {
  try {
    return await W("force_push_command", { message: t });
  } catch (e) {
    throw new Error(`强制推送失败: ${e}`);
  }
}
async function tE() {
  try {
    return await W("force_pull_command");
  } catch (t) {
    throw new Error(`强制拉取失败: ${t}`);
  }
}
async function nE(t) {
  try {
    return await W("resolve_conflicts_batch", { resolutions: t });
  } catch (e) {
    throw new Error(`批量解决冲突失败: ${e}`);
  }
}
async function iE() {
  try {
    return await W("ensure_gitignore_command");
  } catch (t) {
    throw new Error(`确保 .gitignore 失败: ${t}`);
  }
}
const Qe = M("disabled"), ni = M(null), ys = M(null), ps = M(null), rr = M(!1);
let Ji = null, Xi = null;
const sa = M(!1);
let lr = 0, oa = 0;
const Mg = M(0), Og = M(Date.now());
let ho = null, Or = null, Dr = null, Pr = null, Ir = null;
const Dg = (t) => {
  const n = (t instanceof Error ? t.message : String(t)).toLowerCase();
  return [
    "工作区未设置",
    "工作区未配置",
    "workspace not set",
    "workspace is not set",
    "workspace root"
  ].some((i) => n.includes(i.toLowerCase()));
}, Pg = (t) => {
  const n = (t instanceof Error ? t.message : String(t)).toLowerCase();
  return n.includes("插件 'git-sync' 未启用") || n.includes('插件 "git-sync" 未启用') || n.includes("plugin 'git-sync'") && (n.includes("disabled") || n.includes("not enabled") || n.includes("未启用"));
};
function vu() {
  const t = C(() => !ni.value || !ni.value.is_repo ? 0 : ni.value.changed_files.length), e = C(() => {
    if (Mg.value, !ys.value) return "";
    const l = new Date(ys.value), a = Og.value - l.getTime(), c = Math.floor(a / 6e4), u = Math.floor(c / 60), f = Math.floor(u / 24);
    return c < 1 ? "刚刚" : c < 60 ? `${c}分钟前` : u < 24 ? `${u}小时前` : f < 7 ? `${f}天前` : l.toLocaleDateString("zh-CN");
  }), n = C(() => {
    const l = ps.value;
    if (!l || !l.enabled)
      return "Git 同步已禁用";
    if (t.value > 0)
      return `${t.value} 个文件待同步`;
    switch (Qe.value) {
      case "syncing":
        return "同步中...";
      case "synced":
        return e.value || "已同步";
      case "has_changes":
        return `${t.value} 个文件待同步`;
      case "error":
        return "同步出错";
      default:
        return e.value || "已同步";
    }
  }), i = async () => {
    if (ps.value && !ps.value.enabled) {
      ni.value = null, Qe.value = "disabled";
      return;
    }
    if (rr.value || Qe.value === "syncing") {
      sa.value = !0, ge.debug("[GitStatus] 正在加载/同步中，标记待刷新");
      return;
    }
    rr.value = !0;
    try {
      const l = await Ag();
      ni.value = l, !l.is_repo || !ps.value?.enabled ? Qe.value = "disabled" : l.has_changes ? Qe.value = "has_changes" : Qe.value = "synced";
    } catch (l) {
      if (Dg(l) || Pg(l)) {
        ni.value = null, Qe.value = "disabled";
        return;
      }
      ge.error("[GitStatus] 获取 Git 状态失败", l), Qe.value = "error";
    } finally {
      rr.value = !1, sa.value && (sa.value = !1, ge.debug("[GitStatus] 执行待刷新请求"), setTimeout(() => i(), 100));
    }
  };
  return {
    syncState: Qe,
    gitStatus: ni,
    pendingFilesCount: t,
    lastSyncTime: ys,
    gitSettings: ps,
    isLoading: rr,
    refreshStatus: i,
    refreshSettings: async () => {
      try {
        const l = await To();
        ps.value = l, l.enabled ? (Qe.value === "disabled" && (Qe.value = "idle"), l.last_sync_time && (ys.value = l.last_sync_time)) : Qe.value = "disabled";
      } catch (l) {
        ge.error("[GitStatus] 获取 Git 设置失败", l);
      }
    },
    formattedLastSyncTime: e,
    stateDescription: n,
    // 导出内部方法供外部调用
    _setSyncState: (l) => {
      Qe.value = l;
    },
    _setLastSyncTime: (l) => {
      ys.value = l;
    }
  };
}
function sE() {
  ho || (ho = setInterval(() => {
    Og.value = Date.now(), Mg.value += 1;
  }, 6e4)), At("git-pull-start", () => {
    Qe.value = "syncing";
  }).then((t) => {
    Or = t;
  }), At("git-push-start", () => {
    Qe.value = "syncing";
  }).then((t) => {
    Dr = t;
  }), At("git-sync-complete", (t) => {
    t.payload.success ? (Qe.value = "syncing", t.payload.last_sync_time && (ys.value = t.payload.last_sync_time)) : Qe.value = "error", Xi !== null && clearTimeout(Xi), Xi = setTimeout(() => {
      Xi = null, ge.debug("[GitStatus] git-sync-complete 防抖时间到，刷新状态"), Ag().then((e) => {
        ni.value = e, e.has_changes ? Qe.value = "has_changes" : Qe.value = "synced";
      }).catch((e) => {
        if (Dg(e) || Pg(e)) {
          ni.value = null, Qe.value = "disabled";
          return;
        }
        ge.error("[GitStatus] git-sync-complete 后刷新状态失败", e), Qe.value = "error";
      });
    }, 1e3);
  }).then((t) => {
    Pr = t;
  });
}
function oE(t, e = 300) {
  At("git-workspace-changed", () => {
    lr++, ge.debug(`[GitStatus] 收到 git-workspace-changed 事件（累计: ${lr}），防抖刷新`), Ji !== null && clearTimeout(Ji), Ji = setTimeout(async () => {
      Ji = null, oa++;
      const n = lr - oa;
      n > 0 ? ge.debug(`[GitStatus] 防抖时间到，执行刷新（合并了 ${n} 个事件，累计收到 ${lr}，已执行 ${oa}）`) : ge.debug("[GitStatus] 防抖时间到，执行刷新"), await t();
    }, e);
  }).then((n) => {
    Ir = n;
  });
}
function rE() {
  ho && (clearInterval(ho), ho = null), Ji && (clearTimeout(Ji), Ji = null), Xi && (clearTimeout(Xi), Xi = null), Or && (Or(), Or = null), Dr && (Dr(), Dr = null), Pr && (Pr(), Pr = null), Ir && (Ir(), Ir = null);
}
function lE(t) {
  const e = String(t).toLowerCase();
  return e.includes("network") || e.includes("connection") || e.includes("tcp") || e.includes("无法连接") || e.includes("连接失败") || e.includes("网络") ? {
    type: "network",
    title: "网络连接失败",
    message: "无法连接到远程仓库，请检查网络连接",
    suggestions: [
      "检查网络连接是否正常",
      "确认是否需要代理才能访问 GitHub",
      "尝试使用 SSH 方式连接",
      "检查防火墙是否阻止了 Git 连接"
    ]
  } : e.includes("authentication") || e.includes("auth") || e.includes("token") || e.includes("credential") || e.includes("认证") || e.includes("权限") || e.includes("token") || e.includes("密码") || e.includes("身份验证") ? {
    type: "auth",
    title: "认证失败",
    message: "Git 认证失败，请检查 Token 是否正确",
    suggestions: [
      "确认 GitHub Personal Access Token 是否有效",
      "检查 Token 是否具有 repo 权限",
      "确认 Token 是否已过期",
      "尝试重新生成 Token 并更新设置"
    ]
  } : e.includes("conflict") || e.includes("冲突") || e.includes("merge") ? {
    type: "conflict",
    title: "合并冲突",
    message: "本地与远程存在冲突，需要手动解决",
    suggestions: [
      '点击"手动合并"逐个解决冲突',
      '或选择"强制拉取"以远程为准',
      '或选择"强制推送"以本地为准'
    ]
  } : e.includes("not found") || e.includes("repository") || e.includes("不存在") || e.includes("仓库") || e.includes("404") ? {
    type: "not_found",
    title: "仓库不存在",
    message: "远程仓库不存在或已被删除",
    suggestions: [
      "确认远程仓库 URL 是否正确",
      "检查仓库是否已被删除或重命名",
      "可以在 GitHub 上确认仓库是否存在",
      "如需重新创建仓库，请重新配置"
    ]
  } : e.includes("permission") || e.includes("access denied") || e.includes("访问被拒绝") || e.includes("权限不足") ? {
    type: "permission",
    title: "权限不足",
    message: "没有足够的权限访问或推送到此仓库",
    suggestions: [
      "确认 Token 具有仓库的写入权限",
      "检查是否被邀请加入仓库",
      "确认仓库是否是私有仓库"
    ]
  } : e.includes("git is not installed") || e.includes("git not found") || e.includes("git 未安装") || e.includes("找不到 git") ? {
    type: "git_not_installed",
    title: "Git 未安装",
    message: "系统未安装 Git，请先安装 Git",
    suggestions: [
      "下载并安装 Git: https://git-scm.com",
      "安装完成后重启应用程序",
      "确认 git 命令可以在终端中运行"
    ]
  } : e.includes("not a git repository") || e.includes("不是 git 仓库") || e.includes("不是有效的仓库") ? {
    type: "not_a_repo",
    title: "不是 Git 仓库",
    message: "当前目录不是 Git 仓库",
    suggestions: [
      "需要先初始化 Git 仓库",
      "或重新配置指向已有的 Git 仓库"
    ]
  } : e.includes("no remote") || e.includes("没有远程") || e.includes("未配置远程") ? {
    type: "no_remote",
    title: "未配置远程仓库",
    message: "未配置远程仓库地址",
    suggestions: [
      "在设置中配置远程仓库 URL",
      "确认 GitHub 仓库已创建",
      "使用 HTTPS 或 SSH 方式添加远程仓库"
    ]
  } : {
    type: "unknown",
    title: "未知错误",
    message: "发生了未知错误，请查看详细日志",
    suggestions: [
      "尝试重启应用程序",
      "检查 Git 设置是否正确",
      "查看控制台日志获取更多信息",
      "如问题持续，请提交问题反馈"
    ]
  };
}
function aE(t) {
  switch (t) {
    case "network":
      return "🌐";
    case "auth":
      return "🔐";
    case "conflict":
      return "⚔️";
    case "not_found":
      return "🔍";
    case "permission":
      return "🚫";
    case "git_not_installed":
      return "📦";
    case "not_a_repo":
      return "📁";
    case "no_remote":
      return "☁️";
    default:
      return "❓";
  }
}
const cE = { class: "settings-panel" }, uE = { class: "panel-header" }, fE = { class: "panel-title" }, dE = { class: "panel-content" }, hE = { class: "sync-status-panel__left" }, pE = { class: "sync-status-icon" }, gE = { class: "sync-status-info" }, mE = { class: "sync-status-label" }, vE = { class: "sync-status-detail" }, yE = {
  key: 1,
  class: "pending-count"
}, bE = { class: "sync-status-panel__right" }, wE = { class: "sync-pending-files-header" }, SE = { class: "sync-pending-files-list" }, CE = { class: "file-name" }, kE = {
  key: 1,
  class: "contribution-section"
}, _E = { class: "contribution-head" }, xE = { class: "contribution-summary" }, AE = { class: "summarize-label-title" }, EE = { class: "summarize-label-desc" }, TE = { class: "contribution-actions" }, ME = ["disabled", "onClick"], OE = {
  key: 0,
  class: "contribution-empty"
}, DE = {
  key: 1,
  class: "contribution-empty"
}, PE = ["aria-label"], IE = { class: "contribution-body" }, RE = {
  class: "contribution-weekdays",
  "aria-hidden": "true"
}, LE = ["title"], BE = { class: "contribution-footer" }, $E = { class: "contribution-legend" }, FE = { class: "settings-section-title" }, NE = { class: "summarize-section" }, VE = { class: "summarize-label" }, zE = { class: "summarize-label-title" }, HE = { class: "summarize-label-desc" }, WE = { class: "summarize-input-wrapper" }, GE = {
  key: 0,
  class: "summarize-section"
}, jE = { class: "summarize-label" }, KE = { class: "summarize-label-title" }, UE = { class: "summarize-label-desc" }, qE = { class: "summarize-input-wrapper" }, YE = { class: "summarize-section" }, JE = { class: "summarize-label" }, XE = { class: "summarize-label-title" }, ZE = { class: "summarize-label-desc" }, QE = { class: "summarize-input-wrapper" }, eT = { class: "summarize-section" }, tT = { class: "summarize-label" }, nT = { class: "summarize-label-title" }, iT = { class: "summarize-label-desc" }, sT = { class: "summarize-input-wrapper" }, oT = {
  key: 1,
  class: "summarize-section transparent-input"
}, rT = { class: "summarize-label" }, lT = { class: "summarize-label-title" }, aT = { class: "summarize-label-desc" }, cT = { class: "summarize-input-wrapper" }, uT = { class: "ml-2 text-sm text-panel" }, fT = { class: "settings-section-title" }, dT = { class: "summarize-section" }, hT = { class: "summarize-label" }, pT = { class: "summarize-label-title" }, gT = { class: "summarize-label-desc" }, mT = { class: "summarize-input-wrapper flex gap-2" }, vT = { class: "git-records-section" }, yT = { class: "git-records-head" }, bT = { class: "summarize-label-title" }, wT = { class: "summarize-label-desc" }, ST = {
  key: 0,
  class: "git-records-list"
}, CT = { class: "git-record-main" }, kT = ["title"], _T = { class: "git-record-time" }, xT = { class: "git-record-meta" }, AT = {
  key: 0,
  class: "git-record-files"
}, ET = ["title", "onClick"], TT = { class: "git-record-file-status" }, MT = { class: "git-record-file-name" }, OT = {
  key: 0,
  class: "git-record-more"
}, DT = {
  key: 1,
  class: "git-records-empty"
}, PT = /* @__PURE__ */ J({
  name: "GitSync",
  __name: "index",
  setup(t) {
    const { t: e, locale: n } = vl(), {
      syncState: i,
      pendingFilesCount: s,
      formattedLastSyncTime: o,
      gitStatus: r,
      refreshStatus: l,
      refreshSettings: a
    } = vu(), c = C(() => r.value?.changed_files ? r.value.changed_files : []), u = (E) => {
      switch (E) {
        case "syncing":
          return e("settings.gitSync.status.syncing");
        case "synced":
          return e("settings.gitSync.status.synced");
        case "has_changes":
          return e("settings.gitSync.status.hasChanges");
        case "error":
          return e("settings.gitSync.status.error");
        case "idle":
          return e("settings.gitSync.status.idle");
        case "disabled":
          return e("settings.gitSync.status.ready");
        default:
          return e("settings.gitSync.status.ready");
      }
    }, f = M({
      enabled: !1,
      user_name: "",
      user_email: "",
      token: "",
      remote_url: "",
      pull_on_start: !0,
      auto_sync: !1,
      auto_sync_delay: 1
    }), d = M(!1), h = M(!1), g = M(!1), m = M(!1), y = M({
      title: "",
      message: "",
      primaryText: "",
      secondaryText: "",
      type: "info"
    }), v = M(!1), w = M(null), _ = M("main"), x = M(!1), k = M(""), T = M([]), A = M([]), z = M(!1), B = M(!1), q = M(!1), $ = M(null), V = M(null), X = M((/* @__PURE__ */ new Date()).getFullYear()), ce = M(!1), O = (E) => E === "main" ? e("settings.gitSync.branch.mainLabel", { branch: E }) : E, I = C(() => (w.value?.available_branches?.length ? w.value.available_branches : ["main"]).map((K) => ({
      label: O(K),
      value: K
    }))), L = C(() => w.value ? e("settings.gitSync.branch.selectMessage", {
      current: w.value.current_branch || e("settings.gitSync.status.unknown"),
      recommended: w.value.recommended_branch
    }) : e("settings.gitSync.branch.selectMessageEmpty")), oe = C(() => {
      const E = T.value.map((K) => `- ${K}`).join(`
`);
      return e("settings.gitSync.branch.overwriteMessage", {
        branch: k.value || e("settings.gitSync.branch.targetBranch"),
        files: E
      });
    }), le = C(() => {
      const E = $.value;
      return E ? e("settings.gitSync.records.restoreMessage", {
        file: E.file.file_path,
        record: `${E.record.short_hash} ${E.record.message}`
      }) : "";
    }), we = C(() => {
      if (V.value?.years.length)
        return V.value.years;
      const E = (/* @__PURE__ */ new Date()).getFullYear();
      return Array.from({ length: 5 }, (K, Ce) => E - Ce);
    }), Te = C(() => {
      const E = V.value;
      return E ? E.year === E.current_year ? e("settings.gitSync.contribution.totalLastYear", { count: E.total }) : e("settings.gitSync.contribution.totalYear", {
        year: E.year,
        count: E.total
      }) : e("settings.gitSync.contribution.title");
    }), xe = C(() => {
      const E = V.value;
      return E ? `${E.start_date} - ${E.end_date}` : "";
    }), be = C(() => [
      "",
      e("settings.gitSync.contribution.weekdayMon"),
      "",
      e("settings.gitSync.contribution.weekdayWed"),
      "",
      e("settings.gitSync.contribution.weekdayFri"),
      ""
    ]), Be = C(() => {
      const E = V.value;
      if (!E) return [];
      const K = mt(E.start_date), Ce = [
        ...Array.from({ length: K.getDay() }, () => null),
        ...E.days
      ], st = Ce.length % 7 === 0 ? 0 : 7 - Ce.length % 7;
      Ce.push(...Array.from({ length: st }, () => null));
      const Pt = [];
      for (let ee = 0; ee < Ce.length; ee += 7)
        Pt.push(Ce.slice(ee, ee + 7));
      return Pt;
    }), Ve = C(() => {
      let E = "";
      return Be.value.map((K, Ce) => {
        const st = K.find((yi) => yi ? mt(yi.date).getDate() === 1 : !1), Pt = K.find((yi) => !!yi), ee = st ?? (Ce === 0 ? Pt : null);
        if (!ee) return "";
        const Je = mt(ee.date), lt = `${Je.getFullYear()}-${Je.getMonth()}`;
        return lt === E ? "" : (E = lt, H(ee.date));
      });
    }), Oe = (E) => {
      const K = lE(E), Ce = aE(K.type), st = String(E).replace(/^Error:\s*/, "");
      let Pt = `${Ce} ${K.title}

${K.message}`;
      st && !K.message.includes(st) && (Pt += `

${e("settings.gitSync.errorDetails", { details: `${st.slice(0, 100)}${st.length > 100 ? "..." : ""}` })}`), ze.msg(Pt, "error", "top-right"), console.group(`🔧 Git 错误解决建议 - ${K.title}`), console.log(st), console.log("建议步骤:"), K.suggestions.forEach((ee, Je) => {
        console.log(`${Je + 1}. ${ee}`);
      }), console.groupEnd();
    }, Ye = (E) => {
      m.value = !1;
    }, Ie = (E) => {
      w.value = E, _.value = E.recommended_branch || "main", v.value = !0;
    }, Ft = (E) => {
      const K = String(E), Ce = "would be overwritten by checkout:", st = K.indexOf(Ce);
      if (st < 0) return [];
      const Pt = K.slice(st + Ce.length), ee = Pt.search(/Please move|Aborting|Error:/);
      return (ee >= 0 ? Pt.slice(0, ee) : Pt).split(/\r?\n/).map((lt) => lt.trim()).filter((lt) => lt && !lt.startsWith("Please ") && !lt.startsWith("Aborting"));
    }, jt = async (E) => {
      try {
        return await hd(E), await l(), ze.msg(e("settings.gitSync.branch.switched", { branch: E }), "success", "bottom-right"), !0;
      } catch (K) {
        const Ce = Ft(K);
        if (Ce.length > 0)
          return k.value = E, T.value = Ce, v.value = !1, x.value = !0, !1;
        throw K;
      }
    }, Kt = async (E) => {
      d.value = !0;
      try {
        await jt(E);
      } catch (K) {
        ge.error("[GitSync] 切换分支失败", K), Oe(K);
      } finally {
        d.value = !1;
      }
    }, wn = async () => {
      const E = k.value, K = [...T.value];
      if (!E || K.length === 0) {
        x.value = !1;
        return;
      }
      d.value = !0;
      try {
        for (const Ce of K)
          await Eg(Ce);
        x.value = !1, T.value = [], k.value = "", await hd(E), await l(), ze.msg(e("settings.gitSync.branch.switched", { branch: E }), "success", "bottom-right");
      } catch (Ce) {
        ge.error("[GitSync] 处理未跟踪文件后切换分支失败", Ce), Oe(Ce);
      } finally {
        d.value = !1;
      }
    }, Ut = (E) => {
      if (E.branch_selection) {
        Ie(E.branch_selection);
        return;
      }
      E.success ? E.has_conflicts ? ge.info("[GitSync] Pull 检测到冲突，由全局对话框处理") : E.files_updated === 0 ? ze.msg(e("settings.gitSync.alreadyUpToDate"), "success", "bottom-right") : ze.msg(e("settings.gitSync.pullSuccess", { count: E.files_updated }), "success", "bottom-right") : ze.msg(e("settings.gitSync.pullFailed"), "error", "top-right");
    }, Sn = async () => {
      z.value = !0;
      try {
        A.value = await KA(10), B.value = !0;
      } catch (E) {
        ge.error("[GitSync] 加载 Git 记录失败", E), Oe(E);
      } finally {
        z.value = !1;
      }
    }, sn = async (E = X.value) => {
      ce.value = !0;
      try {
        const K = await UA(E);
        V.value = K, X.value = K.year;
      } catch (K) {
        ge.error("[GitSync] 加载 Git 提交活跃度失败", K), Oe(K);
      } finally {
        ce.value = !1;
      }
    }, Nt = async () => {
      f.value.enabled && await sn(X.value);
    }, Dn = (E) => {
      E === X.value || ce.value || (X.value = E, sn(E));
    };
    function mt(E) {
      const [K, Ce, st] = E.split("-").map(Number);
      return new Date(K, Ce - 1, st);
    }
    function H(E) {
      return new Intl.DateTimeFormat(n.value.startsWith("zh") ? "zh-CN" : "en-US", {
        month: "short"
      }).format(mt(E));
    }
    function ie(E) {
      if (E <= 0) return 0;
      const K = V.value?.max_count || 0;
      return K <= 1 ? 1 : Math.min(4, Math.max(1, Math.ceil(E / K * 4)));
    }
    function me(E) {
      return E ? `contribution-day--level-${ie(E.count)}` : "contribution-day--empty";
    }
    function ke(E) {
      return e("settings.gitSync.contribution.dayTitle", {
        date: E.date,
        count: E.count
      });
    }
    const it = (E, K) => {
      $.value = { record: E, file: K }, q.value = !0;
    }, G = async () => {
      const E = $.value;
      if (E)
        try {
          await qA(E.record.commit_hash, E.file.file_path), ze.msg(e("settings.gitSync.records.restored"), "success", "bottom-right"), $.value = null, await l(), await Nt();
        } catch (K) {
          ge.error("[GitSync] 恢复 Git 文件失败", K), Oe(K);
        }
    }, fe = async () => {
      try {
        ge.info("[GitSync] 开始加载 Git 设置");
        const E = await To();
        f.value = E, ge.info("[GitSync] Git 设置加载成功", E);
      } catch (E) {
        ge.error("[GitSync] 加载 Git 设置失败", E), ze.msg(e("settings.gitSync.loadFailed"), "error", "top-right");
      }
    }, Re = async () => {
      try {
        await GA(f.value);
      } catch (E) {
        throw ge.error("[GitSync] 保存 Git 设置失败", E), E;
      }
    }, vt = (E) => !!(E.user_name?.trim() && E.user_email?.trim() && E.remote_url?.trim()), _t = async (E) => {
      d.value = !0;
      try {
        if (E) {
          const K = await To();
          if (!vt(K)) {
            f.value.enabled = !1, ze.msg(e("settings.gitSync.configureBeforeEnable"), "warning", "bottom-right");
            return;
          }
          f.value.user_name = K.user_name, f.value.user_email = K.user_email, f.value.remote_url = K.remote_url;
        }
        await Re(), ze.msg(e(E ? "settings.gitSync.enabledSuccess" : "settings.gitSync.disabledSuccess"), "success", "bottom-right"), E && await Nt();
      } catch {
        ze.msg(e("settings.gitSync.saveFailed"), "error", "top-right"), f.value.enabled = !E;
      } finally {
        d.value = !1;
      }
    }, Uo = async (E) => {
      d.value = !0;
      try {
        await Re(), ze.msg(e(E ? "settings.gitSync.pullOnStartEnabled" : "settings.gitSync.pullOnStartDisabled"), "success", "bottom-right");
      } catch {
        ze.msg(e("settings.gitSync.saveFailed"), "error", "top-right"), f.value.pull_on_start = !E;
      } finally {
        d.value = !1;
      }
    }, ji = async (E) => {
      d.value = !0;
      try {
        await Re(), E ? await Qr() : await Ha(), ze.msg(e(E ? "settings.gitSync.autoSyncEnabled" : "settings.gitSync.autoSyncDisabled"), "success", "bottom-right");
      } catch {
        ze.msg(e("settings.gitSync.saveFailed"), "error", "top-right"), f.value.auto_sync = !E;
      } finally {
        d.value = !1;
      }
    }, jl = async () => {
      d.value = !0;
      try {
        await Re(), f.value.auto_sync && (await Ha(), await Qr());
      } catch {
        ze.msg(e("settings.gitSync.saveFailed"), "error", "top-right");
      } finally {
        d.value = !1;
      }
    }, Kl = async () => {
      ge.info("[GitSync] 手动 Pull 开始"), h.value = !0;
      try {
        const E = await za();
        Ut(E), await Nt();
      } catch (E) {
        ge.error("[GitSync] 手动 Pull 失败", E), Oe(E);
      } finally {
        h.value = !1;
      }
    }, Ul = async (E) => {
      const K = String(E || "main");
      h.value = !0;
      try {
        if (!await jt(K)) return;
        v.value = !1;
        const st = await za();
        Ut(st);
      } catch (Ce) {
        ge.error("[GitSync] 切换分支后 Pull 失败", Ce), Oe(Ce);
      } finally {
        h.value = !1;
      }
    }, qo = async () => {
      ge.info("[GitSync] 手动 Push 开始"), g.value = !0;
      try {
        const E = await JA("Manual sync");
        E.success ? (ze.msg(e("settings.gitSync.pushSuccess", { count: E.files_pushed }), "success", "bottom-right"), await Nt()) : ze.msg(e("settings.gitSync.pushFailed"), "error", "top-right");
      } catch (E) {
        ge.error("[GitSync] 手动 Push 失败", E), Oe(E);
      } finally {
        g.value = !1;
      }
    };
    return qe(async () => {
      await fe(), await a(), await l(), await Nt();
    }), (E, K) => {
      const Ce = yg, st = vg, Pt = Tx;
      return S(), D("div", cE, [
        N(" 固定标题 "),
        b("div", uE, [
          b(
            "h3",
            fE,
            R(E.$t("settings.gitSync.title")),
            1
            /* TEXT */
          )
        ]),
        N(" 可滚动内容 "),
        b("main", dE, [
          N(" 当前同步状态：同面板内左右分栏 "),
          p(f).enabled ? (S(), D(
            "div",
            {
              key: 0,
              class: F(["sync-status-panel", `sync-status-panel--${p(i)}`])
            },
            [
              N(" 左侧：状态摘要 "),
              b("div", hE, [
                b("div", pE, [
                  p(i) === "syncing" ? (S(), te(p($h), {
                    key: 0,
                    class: "git-sync-icon",
                    theme: "outline",
                    size: "24",
                    strokeWidth: 3
                  })) : p(i) === "synced" || p(i) === "idle" || p(i) === "disabled" ? (S(), te(p(k0), {
                    key: 1,
                    theme: "outline",
                    size: "24",
                    strokeWidth: 3
                  })) : p(i) === "has_changes" ? (S(), te(p(C0), {
                    key: 2,
                    theme: "outline",
                    size: "24",
                    strokeWidth: 3
                  })) : p(i) === "error" ? (S(), te(p(_0), {
                    key: 3,
                    theme: "outline",
                    size: "24",
                    strokeWidth: 3
                  })) : N("v-if", !0)
                ]),
                b("div", gE, [
                  b(
                    "div",
                    mE,
                    R(u(p(i))),
                    1
                    /* TEXT */
                  ),
                  b("div", vE, [
                    p(i) === "syncing" ? (S(), D(
                      ye,
                      { key: 0 },
                      [
                        De(
                          R(E.$t("settings.gitSync.status.syncing")),
                          1
                          /* TEXT */
                        )
                      ],
                      64
                      /* STABLE_FRAGMENT */
                    )) : p(i) === "has_changes" ? (S(), D(
                      "span",
                      yE,
                      R(p(s)) + " " + R(E.$t("settings.gitSync.status.pendingFiles")),
                      1
                      /* TEXT */
                    )) : p(i) === "synced" || p(i) === "idle" ? (S(), D(
                      ye,
                      { key: 2 },
                      [
                        De(
                          R(p(o) ? `${E.$t("settings.gitSync.status.lastSync")}: ${p(o)}` : E.$t("settings.gitSync.status.waitingSync")),
                          1
                          /* TEXT */
                        )
                      ],
                      64
                      /* STABLE_FRAGMENT */
                    )) : p(i) === "error" ? (S(), D(
                      ye,
                      { key: 3 },
                      [
                        De(
                          R(E.$t("settings.gitSync.status.error")),
                          1
                          /* TEXT */
                        )
                      ],
                      64
                      /* STABLE_FRAGMENT */
                    )) : p(i) === "disabled" ? (S(), D(
                      ye,
                      { key: 4 },
                      [
                        De(
                          R(E.$t("settings.gitSync.status.checking")),
                          1
                          /* TEXT */
                        )
                      ],
                      64
                      /* STABLE_FRAGMENT */
                    )) : N("v-if", !0)
                  ])
                ])
              ]),
              N(" 右侧：待同步文件列表（仅在有变更时显示） "),
              p(i) === "has_changes" && p(s) > 0 ? (S(), D(
                ye,
                { key: 0 },
                [
                  K[16] || (K[16] = b(
                    "div",
                    { class: "sync-status-panel__divider" },
                    null,
                    -1
                    /* HOISTED */
                  )),
                  b("div", bE, [
                    b(
                      "div",
                      wE,
                      R(E.$t("settings.gitSync.status.pendingFilesTitle")) + " (" + R(p(s)) + ") ",
                      1
                      /* TEXT */
                    ),
                    b("div", SE, [
                      (S(!0), D(
                        ye,
                        null,
                        ct(p(c), (ee) => (S(), D("div", {
                          key: ee,
                          class: "sync-pending-file-item"
                        }, [
                          b(
                            "span",
                            CE,
                            R(ee),
                            1
                            /* TEXT */
                          )
                        ]))),
                        128
                        /* KEYED_FRAGMENT */
                      ))
                    ])
                  ])
                ],
                64
                /* STABLE_FRAGMENT */
              )) : N("v-if", !0)
            ],
            2
            /* CLASS */
          )) : N("v-if", !0),
          p(f).enabled ? (S(), D("section", kE, [
            b("div", _E, [
              b("div", xE, [
                b(
                  "div",
                  AE,
                  R(p(Te)),
                  1
                  /* TEXT */
                ),
                b(
                  "div",
                  EE,
                  R(E.$t("settings.gitSync.contribution.desc")),
                  1
                  /* TEXT */
                )
              ]),
              b("div", TE, [
                (S(!0), D(
                  ye,
                  null,
                  ct(p(we), (ee) => (S(), D("button", {
                    key: ee,
                    class: F(["contribution-year", { active: ee === p(X) }]),
                    type: "button",
                    disabled: p(ce),
                    onClick: (Je) => Dn(ee)
                  }, R(ee), 11, ME))),
                  128
                  /* KEYED_FRAGMENT */
                ))
              ])
            ]),
            p(ce) && !p(V) ? (S(), D(
              "div",
              OE,
              R(E.$t("settings.gitSync.contribution.loading")),
              1
              /* TEXT */
            )) : p(V) ? (S(), D("div", {
              key: 2,
              class: "contribution-board",
              "aria-label": E.$t("settings.gitSync.contribution.title")
            }, [
              b(
                "div",
                {
                  class: "contribution-months",
                  style: je({ gridTemplateColumns: `repeat(${p(Be).length}, minmax(0, 1fr))` })
                },
                [
                  (S(!0), D(
                    ye,
                    null,
                    ct(p(Ve), (ee, Je) => (S(), D(
                      "span",
                      {
                        key: `${ee}-${Je}`
                      },
                      R(ee),
                      1
                      /* TEXT */
                    ))),
                    128
                    /* KEYED_FRAGMENT */
                  ))
                ],
                4
                /* STYLE */
              ),
              b("div", IE, [
                b("div", RE, [
                  (S(!0), D(
                    ye,
                    null,
                    ct(p(be), (ee, Je) => (S(), D(
                      "span",
                      { key: Je },
                      R(ee),
                      1
                      /* TEXT */
                    ))),
                    128
                    /* KEYED_FRAGMENT */
                  ))
                ]),
                b(
                  "div",
                  {
                    class: "contribution-weeks",
                    style: je({ gridTemplateColumns: `repeat(${p(Be).length}, minmax(0, 1fr))` })
                  },
                  [
                    (S(!0), D(
                      ye,
                      null,
                      ct(p(Be), (ee, Je) => (S(), D("div", {
                        key: Je,
                        class: "contribution-week"
                      }, [
                        (S(!0), D(
                          ye,
                          null,
                          ct(ee, (lt, yi) => (S(), D("span", {
                            key: lt?.date || `empty-${Je}-${yi}`,
                            class: F(["contribution-day", me(lt)]),
                            title: lt ? ke(lt) : ""
                          }, null, 10, LE))),
                          128
                          /* KEYED_FRAGMENT */
                        ))
                      ]))),
                      128
                      /* KEYED_FRAGMENT */
                    ))
                  ],
                  4
                  /* STYLE */
                )
              ]),
              b("div", BE, [
                b(
                  "span",
                  null,
                  R(p(xe)),
                  1
                  /* TEXT */
                ),
                b("span", $E, [
                  De(
                    R(E.$t("settings.gitSync.contribution.less")) + " ",
                    1
                    /* TEXT */
                  ),
                  (S(), D(
                    ye,
                    null,
                    ct([0, 1, 2, 3, 4], (ee) => b(
                      "i",
                      {
                        key: ee,
                        class: F(["contribution-day contribution-day--legend", `contribution-day--level-${ee}`])
                      },
                      null,
                      2
                      /* CLASS */
                    )),
                    64
                    /* STABLE_FRAGMENT */
                  )),
                  De(
                    " " + R(E.$t("settings.gitSync.contribution.more")),
                    1
                    /* TEXT */
                  )
                ])
              ])
            ], 8, PE)) : (S(), D(
              "div",
              DE,
              R(E.$t("settings.gitSync.contribution.empty")),
              1
              /* TEXT */
            ))
          ])) : N("v-if", !0),
          N(" 第一部分：Git 配置 "),
          b(
            "div",
            FE,
            R(E.$t("settings.gitSync.status.section.config")),
            1
            /* TEXT */
          ),
          N(" 启用 Git 同步 "),
          b("section", NE, [
            b("div", VE, [
              b(
                "div",
                zE,
                R(E.$t("settings.gitSync.enabled")),
                1
                /* TEXT */
              ),
              b(
                "div",
                HE,
                R(E.$t("settings.gitSync.enabledDesc")),
                1
                /* TEXT */
              )
            ]),
            b("div", WE, [
              U(p(ia), {
                modelValue: p(f).enabled,
                "onUpdate:modelValue": K[0] || (K[0] = (ee) => p(f).enabled = ee),
                "active-text": E.$t("common.on"),
                "inactive-text": E.$t("common.off"),
                disabled: p(d),
                onChange: _t
              }, null, 8, ["modelValue", "active-text", "inactive-text", "disabled"])
            ])
          ]),
          N(" 同步选项（Git 必要配置在个人中心填写，此处仅保留开关与同步操作） "),
          p(f).enabled ? (S(), D(
            ye,
            { key: 2 },
            [
              p(r)?.available_branches?.length ? (S(), D("section", GE, [
                b("div", jE, [
                  b(
                    "div",
                    KE,
                    R(E.$t("settings.gitSync.branch.title")),
                    1
                    /* TEXT */
                  ),
                  b(
                    "div",
                    UE,
                    R(E.$t("settings.gitSync.branch.desc")),
                    1
                    /* TEXT */
                  )
                ]),
                b("div", qE, [
                  U(st, {
                    "model-value": p(r).branch || "main",
                    class: "summarize-input !w-40",
                    disabled: p(d) || p(h) || p(g),
                    onChange: Kt
                  }, {
                    default: j(() => [
                      (S(!0), D(
                        ye,
                        null,
                        ct(p(r).available_branches, (ee) => (S(), te(Ce, {
                          key: ee,
                          label: O(ee),
                          value: ee
                        }, null, 8, ["label", "value"]))),
                        128
                        /* KEYED_FRAGMENT */
                      ))
                    ]),
                    _: 1
                    /* STABLE */
                  }, 8, ["model-value", "disabled"])
                ])
              ])) : N("v-if", !0),
              N(" 启动时自动拉取 "),
              b("section", YE, [
                b("div", JE, [
                  b(
                    "div",
                    XE,
                    R(E.$t("settings.gitSync.pullOnStart")),
                    1
                    /* TEXT */
                  ),
                  b(
                    "div",
                    ZE,
                    R(E.$t("settings.gitSync.pullOnStartDesc")),
                    1
                    /* TEXT */
                  )
                ]),
                b("div", QE, [
                  U(p(ia), {
                    modelValue: p(f).pull_on_start,
                    "onUpdate:modelValue": K[1] || (K[1] = (ee) => p(f).pull_on_start = ee),
                    "active-text": E.$t("common.on"),
                    "inactive-text": E.$t("common.off"),
                    disabled: p(d),
                    onChange: Uo
                  }, null, 8, ["modelValue", "active-text", "inactive-text", "disabled"])
                ])
              ]),
              N(" 自动同步 "),
              b("section", eT, [
                b("div", tT, [
                  b(
                    "div",
                    nT,
                    R(E.$t("settings.gitSync.autoSync")),
                    1
                    /* TEXT */
                  ),
                  b(
                    "div",
                    iT,
                    R(E.$t("settings.gitSync.autoSyncDesc")),
                    1
                    /* TEXT */
                  )
                ]),
                b("div", sT, [
                  U(p(ia), {
                    modelValue: p(f).auto_sync,
                    "onUpdate:modelValue": K[2] || (K[2] = (ee) => p(f).auto_sync = ee),
                    "active-text": E.$t("common.on"),
                    "inactive-text": E.$t("common.off"),
                    disabled: p(d),
                    onChange: ji
                  }, null, 8, ["modelValue", "active-text", "inactive-text", "disabled"])
                ])
              ]),
              N(" 自动同步延迟（仅在启用自动同步时显示） "),
              p(f).auto_sync ? (S(), D("section", oT, [
                b("div", rT, [
                  b(
                    "div",
                    lT,
                    R(E.$t("settings.gitSync.autoSyncDelay")),
                    1
                    /* TEXT */
                  ),
                  b(
                    "div",
                    aT,
                    R(E.$t("settings.gitSync.autoSyncDelayDesc")),
                    1
                    /* TEXT */
                  )
                ]),
                b("div", cT, [
                  U(Pt, {
                    modelValue: p(f).auto_sync_delay,
                    "onUpdate:modelValue": K[3] || (K[3] = (ee) => p(f).auto_sync_delay = ee),
                    min: 1,
                    max: 60,
                    disabled: p(d),
                    onChange: jl,
                    class: "!w-32"
                  }, null, 8, ["modelValue", "disabled"]),
                  b(
                    "span",
                    uT,
                    R(E.$t("settings.gitSync.minutes")),
                    1
                    /* TEXT */
                  )
                ])
              ])) : N("v-if", !0),
              N(" 第二部分：同步操作 "),
              b(
                "div",
                fT,
                R(E.$t("settings.gitSync.status.section.sync")),
                1
                /* TEXT */
              ),
              N(" 手动同步按钮 "),
              b("section", dT, [
                b("div", hT, [
                  b(
                    "div",
                    pT,
                    R(E.$t("settings.gitSync.manualSync")),
                    1
                    /* TEXT */
                  ),
                  b(
                    "div",
                    gT,
                    R(E.$t("settings.gitSync.manualSyncDesc")),
                    1
                    /* TEXT */
                  )
                ]),
                b("div", mT, [
                  U(p(An), {
                    type: "primary",
                    size: "small",
                    loading: p(h),
                    onClick: Kl
                  }, {
                    default: j(() => [
                      De(
                        R(E.$t("settings.gitSync.pull")),
                        1
                        /* TEXT */
                      )
                    ]),
                    _: 1
                    /* STABLE */
                  }, 8, ["loading"]),
                  U(p(An), {
                    type: "primary",
                    size: "small",
                    loading: p(g),
                    onClick: qo
                  }, {
                    default: j(() => [
                      De(
                        R(E.$t("settings.gitSync.push")),
                        1
                        /* TEXT */
                      )
                    ]),
                    _: 1
                    /* STABLE */
                  }, 8, ["loading"])
                ])
              ]),
              b("section", vT, [
                b("div", yT, [
                  b("div", null, [
                    b(
                      "div",
                      bT,
                      R(E.$t("settings.gitSync.records.title")),
                      1
                      /* TEXT */
                    ),
                    b(
                      "div",
                      wT,
                      R(E.$t("settings.gitSync.records.desc")),
                      1
                      /* TEXT */
                    )
                  ]),
                  U(p(An), {
                    size: "small",
                    loading: p(z),
                    onClick: Sn
                  }, {
                    default: j(() => [
                      De(
                        R(E.$t("settings.gitSync.records.refresh")),
                        1
                        /* TEXT */
                      )
                    ]),
                    _: 1
                    /* STABLE */
                  }, 8, ["loading"])
                ]),
                p(A).length ? (S(), D("div", ST, [
                  (S(!0), D(
                    ye,
                    null,
                    ct(p(A), (ee) => (S(), D("div", {
                      key: ee.commit_hash,
                      class: "git-record-item"
                    }, [
                      b("div", CT, [
                        b(
                          "span",
                          {
                            class: F(["git-record-state", { synced: ee.synced }])
                          },
                          R(ee.synced ? E.$t("settings.gitSync.records.synced") : E.$t("settings.gitSync.records.pendingPush")),
                          3
                          /* TEXT, CLASS */
                        ),
                        b("span", {
                          class: "git-record-message",
                          title: ee.message
                        }, R(ee.message), 9, kT),
                        b(
                          "span",
                          _T,
                          R(ee.time),
                          1
                          /* TEXT */
                        )
                      ]),
                      b("div", xT, [
                        b(
                          "span",
                          null,
                          R(ee.short_hash),
                          1
                          /* TEXT */
                        ),
                        b(
                          "span",
                          null,
                          R(ee.author),
                          1
                          /* TEXT */
                        )
                      ]),
                      ee.files.length ? (S(), D("div", AT, [
                        (S(!0), D(
                          ye,
                          null,
                          ct(ee.files.slice(0, 6), (Je) => (S(), D("button", {
                            key: `${ee.commit_hash}-${Je.file_path}`,
                            class: "git-record-file",
                            type: "button",
                            title: `${Je.status} ${Je.file_path}`,
                            onClick: (lt) => it(ee, Je)
                          }, [
                            b(
                              "span",
                              TT,
                              R(Je.status),
                              1
                              /* TEXT */
                            ),
                            b(
                              "span",
                              MT,
                              R(Je.file_name),
                              1
                              /* TEXT */
                            )
                          ], 8, ET))),
                          128
                          /* KEYED_FRAGMENT */
                        )),
                        ee.files.length > 6 ? (S(), D(
                          "span",
                          OT,
                          " +" + R(ee.files.length - 6),
                          1
                          /* TEXT */
                        )) : N("v-if", !0)
                      ])) : N("v-if", !0)
                    ]))),
                    128
                    /* KEYED_FRAGMENT */
                  ))
                ])) : (S(), D(
                  "div",
                  DT,
                  R(p(z) ? E.$t("settings.gitSync.records.loading") : p(B) ? E.$t("settings.gitSync.records.empty") : E.$t("settings.gitSync.records.loadHint")),
                  1
                  /* TEXT */
                ))
              ])
            ],
            64
            /* STABLE_FRAGMENT */
          )) : N("v-if", !0)
        ]),
        N(" 自定义确认框 "),
        U(fo, {
          modelValue: p(m),
          "onUpdate:modelValue": K[4] || (K[4] = (ee) => It(m) ? m.value = ee : null),
          title: p(y).title,
          message: p(y).message,
          "primary-text": p(y).primaryText,
          "secondary-text": p(y).secondaryText,
          type: p(y).type,
          onPrimary: K[5] || (K[5] = (ee) => Ye()),
          onSecondary: K[6] || (K[6] = (ee) => Ye()),
          onClose: K[7] || (K[7] = (ee) => Ye())
        }, null, 8, ["modelValue", "title", "message", "primary-text", "secondary-text", "type"]),
        U(p(_A), {
          modelValue: p(v),
          "onUpdate:modelValue": K[8] || (K[8] = (ee) => It(v) ? v.value = ee : null),
          title: E.$t("settings.gitSync.branch.selectTitle"),
          message: p(L),
          options: p(I),
          "default-value": p(_),
          "confirm-text": E.$t("settings.gitSync.branch.switchAndSync"),
          "cancel-text": E.$t("common.cancel"),
          loading: p(h),
          onConfirm: Ul,
          onCancel: K[9] || (K[9] = (ee) => v.value = !1)
        }, null, 8, ["modelValue", "title", "message", "options", "default-value", "confirm-text", "cancel-text", "loading"]),
        U(fo, {
          modelValue: p(x),
          "onUpdate:modelValue": K[10] || (K[10] = (ee) => It(x) ? x.value = ee : null),
          title: E.$t("settings.gitSync.branch.overwriteTitle"),
          message: p(oe),
          "primary-text": E.$t("settings.gitSync.branch.useTargetFiles"),
          "secondary-text": E.$t("common.cancel"),
          type: "warning",
          onPrimary: wn,
          onSecondary: K[11] || (K[11] = (ee) => x.value = !1),
          onClose: K[12] || (K[12] = (ee) => x.value = !1)
        }, null, 8, ["modelValue", "title", "message", "primary-text", "secondary-text"]),
        U(fo, {
          modelValue: p(q),
          "onUpdate:modelValue": K[13] || (K[13] = (ee) => It(q) ? q.value = ee : null),
          title: E.$t("settings.gitSync.records.restoreTitle"),
          message: p(le),
          "primary-text": E.$t("settings.gitSync.records.restoreConfirm"),
          "secondary-text": E.$t("common.cancel"),
          type: "warning",
          onPrimary: G,
          onSecondary: K[14] || (K[14] = (ee) => q.value = !1),
          onClose: K[15] || (K[15] = (ee) => q.value = !1)
        }, null, 8, ["modelValue", "title", "message", "primary-text", "secondary-text"])
      ]);
    };
  }
}), IT = /* @__PURE__ */ vi(PT, [["__scopeId", "data-v-0d8379df"]]), RT = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: IT
}, Symbol.toStringTag, { value: "Module" })), LT = ["title"], BT = {
  key: 2,
  class: "git-badge"
}, $T = {
  key: 3,
  class: "git-time"
}, FT = { class: "ml-2" }, NT = {
  key: 0,
  class: "git-badge ml-1"
}, VT = /* @__PURE__ */ J({
  __name: "TitlebarGitStatus",
  props: {
    variant: { default: "inline" }
  },
  setup(t) {
    const {
      syncState: e,
      pendingFilesCount: n,
      formattedLastSyncTime: i,
      refreshStatus: s,
      refreshSettings: o,
      stateDescription: r,
      gitSettings: l
    } = vu(), a = C(() => !!l.value?.enabled && e.value !== "error"), c = () => {
      window.location.hash = "#/config/category/settings?tab=gitSync";
    };
    return qe(async () => {
      sE(), oE(s), await o(), await s();
    }), wo(() => {
      rE();
    }), (u, f) => {
      const d = Cx;
      return a.value && u.variant === "inline" ? (S(), D("div", {
        key: 0,
        class: F(["git-status-indicator", `git-status-${p(e)}`]),
        title: p(r),
        onClick: c
      }, [
        p(e) === "syncing" ? (S(), te(p($h), {
          key: 0,
          class: "icon git-sync-icon",
          theme: "outline",
          size: "16",
          strokeWidth: 3
        })) : (S(), te(p(ju), {
          key: 1,
          class: "icon",
          theme: "outline",
          size: "16",
          strokeWidth: 3
        })),
        p(e) === "has_changes" ? (S(), D(
          "span",
          BT,
          R(p(n)),
          1
          /* TEXT */
        )) : N("v-if", !0),
        p(i) && p(e) !== "syncing" ? (S(), D(
          "span",
          $T,
          R(p(i)),
          1
          /* TEXT */
        )) : N("v-if", !0)
      ], 10, LT)) : a.value ? (S(), te(d, {
        key: 1,
        onClick: c
      }, {
        default: j(() => [
          U(p(ju), {
            theme: "outline",
            size: "16",
            strokeWidth: 3,
            class: "align-middle"
          }),
          b(
            "span",
            FT,
            R(u.$t("titlebar.gitSync")),
            1
            /* TEXT */
          ),
          p(e) === "has_changes" ? (S(), D(
            "span",
            NT,
            R(p(n)),
            1
            /* TEXT */
          )) : N("v-if", !0)
        ]),
        _: 1
        /* STABLE */
      })) : N("v-if", !0);
    };
  }
}), zT = /* @__PURE__ */ vi(VT, [["__scopeId", "data-v-c3eae0ab"]]), HT = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: zT
}, Symbol.toStringTag, { value: "Module" }));
class Ig {
  constructor(...e) {
    this.type = "Logical", e.length === 1 ? "Logical" in e[0] ? (this.width = e[0].Logical.width, this.height = e[0].Logical.height) : (this.width = e[0].width, this.height = e[0].height) : (this.width = e[0], this.height = e[1]);
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
  toPhysical(e) {
    return new po(this.width * e, this.height * e);
  }
  [mn]() {
    return {
      width: this.width,
      height: this.height
    };
  }
  toJSON() {
    return this[mn]();
  }
}
class po {
  constructor(...e) {
    this.type = "Physical", e.length === 1 ? "Physical" in e[0] ? (this.width = e[0].Physical.width, this.height = e[0].Physical.height) : (this.width = e[0].width, this.height = e[0].height) : (this.width = e[0], this.height = e[1]);
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
  toLogical(e) {
    return new Ig(this.width / e, this.height / e);
  }
  [mn]() {
    return {
      width: this.width,
      height: this.height
    };
  }
  toJSON() {
    return this[mn]();
  }
}
class gs {
  constructor(e) {
    this.size = e;
  }
  toLogical(e) {
    return this.size instanceof Ig ? this.size : this.size.toLogical(e);
  }
  toPhysical(e) {
    return this.size instanceof po ? this.size : this.size.toPhysical(e);
  }
  [mn]() {
    return {
      [`${this.size.type}`]: {
        width: this.size.width,
        height: this.size.height
      }
    };
  }
  toJSON() {
    return this[mn]();
  }
}
class Rg {
  constructor(...e) {
    this.type = "Logical", e.length === 1 ? "Logical" in e[0] ? (this.x = e[0].Logical.x, this.y = e[0].Logical.y) : (this.x = e[0].x, this.y = e[0].y) : (this.x = e[0], this.y = e[1]);
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
  toPhysical(e) {
    return new ki(this.x * e, this.y * e);
  }
  [mn]() {
    return {
      x: this.x,
      y: this.y
    };
  }
  toJSON() {
    return this[mn]();
  }
}
class ki {
  constructor(...e) {
    this.type = "Physical", e.length === 1 ? "Physical" in e[0] ? (this.x = e[0].Physical.x, this.y = e[0].Physical.y) : (this.x = e[0].x, this.y = e[0].y) : (this.x = e[0], this.y = e[1]);
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
  toLogical(e) {
    return new Rg(this.x / e, this.y / e);
  }
  [mn]() {
    return {
      x: this.x,
      y: this.y
    };
  }
  toJSON() {
    return this[mn]();
  }
}
class ar {
  constructor(e) {
    this.position = e;
  }
  toLogical(e) {
    return this.position instanceof Rg ? this.position : this.position.toLogical(e);
  }
  toPhysical(e) {
    return this.position instanceof ki ? this.position : this.position.toPhysical(e);
  }
  [mn]() {
    return {
      [`${this.position.type}`]: {
        x: this.position.x,
        y: this.position.y
      }
    };
  }
  toJSON() {
    return this[mn]();
  }
}
class go extends TA {
  /**
   * Creates an Image from a resource ID. For internal use only.
   *
   * @ignore
   */
  constructor(e) {
    super(e);
  }
  /** Creates a new Image using RGBA data, in row-major order from top to bottom, and with specified width and height. */
  static async new(e, n, i) {
    return W("plugin:image|new", {
      rgba: el(e),
      width: n,
      height: i
    }).then((s) => new go(s));
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
  static async fromBytes(e) {
    return W("plugin:image|from_bytes", {
      bytes: el(e)
    }).then((n) => new go(n));
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
  static async fromPath(e) {
    return W("plugin:image|from_path", { path: e }).then((n) => new go(n));
  }
  /** Returns the RGBA data for this image, in row-major order from top to bottom.  */
  async rgba() {
    return W("plugin:image|rgba", {
      rid: this.rid
    }).then((e) => new Uint8Array(e));
  }
  /** Returns the size of this image.  */
  async size() {
    return W("plugin:image|size", { rid: this.rid });
  }
}
function el(t) {
  return t == null ? null : typeof t == "string" ? t : t instanceof go ? t.rid : t;
}
var Wa;
(function(t) {
  t[t.Critical = 1] = "Critical", t[t.Informational = 2] = "Informational";
})(Wa || (Wa = {}));
class WT {
  constructor(e) {
    this._preventDefault = !1, this.event = e.event, this.id = e.id;
  }
  preventDefault() {
    this._preventDefault = !0;
  }
  isPreventDefault() {
    return this._preventDefault;
  }
}
var pd;
(function(t) {
  t.None = "none", t.Normal = "normal", t.Indeterminate = "indeterminate", t.Paused = "paused", t.Error = "error";
})(pd || (pd = {}));
function yu() {
  return new Lg(window.__TAURI_INTERNALS__.metadata.currentWindow.label, {
    // @ts-expect-error `skip` is not defined in the public API but it is handled by the constructor
    skip: !0
  });
}
async function ra() {
  return W("plugin:window|get_all_windows").then((t) => t.map((e) => new Lg(e, {
    // @ts-expect-error `skip` is not defined in the public API but it is handled by the constructor
    skip: !0
  })));
}
const la = ["tauri://created", "tauri://error"];
class Lg {
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
  constructor(e, n = {}) {
    var i;
    this.label = e, this.listeners = /* @__PURE__ */ Object.create(null), n?.skip || W("plugin:window|create", {
      options: {
        ...n,
        parent: typeof n.parent == "string" ? n.parent : (i = n.parent) === null || i === void 0 ? void 0 : i.label,
        label: e
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
  static async getByLabel(e) {
    var n;
    return (n = (await ra()).find((i) => i.label === e)) !== null && n !== void 0 ? n : null;
  }
  /**
   * Get an instance of `Window` for the current window.
   */
  static getCurrent() {
    return yu();
  }
  /**
   * Gets a list of instances of `Window` for all available windows.
   */
  static async getAll() {
    return ra();
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
    for (const e of await ra())
      if (await e.isFocused())
        return e;
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
  async listen(e, n) {
    return this._handleTauriEvent(e, n) ? () => {
      const i = this.listeners[e];
      i.splice(i.indexOf(n), 1);
    } : At(e, n, {
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
  async once(e, n) {
    return this._handleTauriEvent(e, n) ? () => {
      const i = this.listeners[e];
      i.splice(i.indexOf(n), 1);
    } : HA(e, n, {
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
  async emit(e, n) {
    if (la.includes(e)) {
      for (const i of this.listeners[e] || [])
        i({
          event: e,
          id: -1,
          payload: n
        });
      return;
    }
    return xg(e, n);
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
  async emitTo(e, n, i) {
    if (la.includes(n)) {
      for (const s of this.listeners[n] || [])
        s({
          event: n,
          id: -1,
          payload: i
        });
      return;
    }
    return WA(e, n, i);
  }
  /** @ignore */
  _handleTauriEvent(e, n) {
    return la.includes(e) ? (e in this.listeners ? this.listeners[e].push(n) : this.listeners[e] = [n], !0) : !1;
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
    return W("plugin:window|scale_factor", {
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
    return W("plugin:window|inner_position", {
      label: this.label
    }).then((e) => new ki(e));
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
    return W("plugin:window|outer_position", {
      label: this.label
    }).then((e) => new ki(e));
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
    return W("plugin:window|inner_size", {
      label: this.label
    }).then((e) => new po(e));
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
    return W("plugin:window|outer_size", {
      label: this.label
    }).then((e) => new po(e));
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
    return W("plugin:window|is_fullscreen", {
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
    return W("plugin:window|is_minimized", {
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
    return W("plugin:window|is_maximized", {
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
    return W("plugin:window|is_focused", {
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
    return W("plugin:window|is_decorated", {
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
    return W("plugin:window|is_resizable", {
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
    return W("plugin:window|is_maximizable", {
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
    return W("plugin:window|is_minimizable", {
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
    return W("plugin:window|is_closable", {
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
    return W("plugin:window|is_visible", {
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
    return W("plugin:window|title", {
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
    return W("plugin:window|theme", {
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
    return W("plugin:window|is_always_on_top", {
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
    return W("plugin:window|center", {
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
  async requestUserAttention(e) {
    let n = null;
    return e && (e === Wa.Critical ? n = { type: "Critical" } : n = { type: "Informational" }), W("plugin:window|request_user_attention", {
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
  async setResizable(e) {
    return W("plugin:window|set_resizable", {
      label: this.label,
      value: e
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
  async setEnabled(e) {
    return W("plugin:window|set_enabled", {
      label: this.label,
      value: e
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
    return W("plugin:window|is_enabled", {
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
  async setMaximizable(e) {
    return W("plugin:window|set_maximizable", {
      label: this.label,
      value: e
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
  async setMinimizable(e) {
    return W("plugin:window|set_minimizable", {
      label: this.label,
      value: e
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
  async setClosable(e) {
    return W("plugin:window|set_closable", {
      label: this.label,
      value: e
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
  async setTitle(e) {
    return W("plugin:window|set_title", {
      label: this.label,
      value: e
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
    return W("plugin:window|maximize", {
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
    return W("plugin:window|unmaximize", {
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
    return W("plugin:window|toggle_maximize", {
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
    return W("plugin:window|minimize", {
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
    return W("plugin:window|unminimize", {
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
    return W("plugin:window|show", {
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
    return W("plugin:window|hide", {
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
    return W("plugin:window|close", {
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
    return W("plugin:window|destroy", {
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
  async setDecorations(e) {
    return W("plugin:window|set_decorations", {
      label: this.label,
      value: e
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
  async setShadow(e) {
    return W("plugin:window|set_shadow", {
      label: this.label,
      value: e
    });
  }
  /**
   * Set window effects.
   */
  async setEffects(e) {
    return W("plugin:window|set_effects", {
      label: this.label,
      value: e
    });
  }
  /**
   * Clear any applied effects if possible.
   */
  async clearEffects() {
    return W("plugin:window|set_effects", {
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
  async setAlwaysOnTop(e) {
    return W("plugin:window|set_always_on_top", {
      label: this.label,
      value: e
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
  async setAlwaysOnBottom(e) {
    return W("plugin:window|set_always_on_bottom", {
      label: this.label,
      value: e
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
  async setContentProtected(e) {
    return W("plugin:window|set_content_protected", {
      label: this.label,
      value: e
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
  async setSize(e) {
    return W("plugin:window|set_size", {
      label: this.label,
      value: e instanceof gs ? e : new gs(e)
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
  async setMinSize(e) {
    return W("plugin:window|set_min_size", {
      label: this.label,
      value: e instanceof gs ? e : e ? new gs(e) : null
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
  async setMaxSize(e) {
    return W("plugin:window|set_max_size", {
      label: this.label,
      value: e instanceof gs ? e : e ? new gs(e) : null
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
  async setSizeConstraints(e) {
    function n(i) {
      return i ? { Logical: i } : null;
    }
    return W("plugin:window|set_size_constraints", {
      label: this.label,
      value: {
        minWidth: n(e?.minWidth),
        minHeight: n(e?.minHeight),
        maxWidth: n(e?.maxWidth),
        maxHeight: n(e?.maxHeight)
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
  async setPosition(e) {
    return W("plugin:window|set_position", {
      label: this.label,
      value: e instanceof ar ? e : new ar(e)
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
  async setFullscreen(e) {
    return W("plugin:window|set_fullscreen", {
      label: this.label,
      value: e
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
    return W("plugin:window|set_focus", {
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
  async setIcon(e) {
    return W("plugin:window|set_icon", {
      label: this.label,
      value: el(e)
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
  async setSkipTaskbar(e) {
    return W("plugin:window|set_skip_taskbar", {
      label: this.label,
      value: e
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
  async setCursorGrab(e) {
    return W("plugin:window|set_cursor_grab", {
      label: this.label,
      value: e
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
  async setCursorVisible(e) {
    return W("plugin:window|set_cursor_visible", {
      label: this.label,
      value: e
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
  async setCursorIcon(e) {
    return W("plugin:window|set_cursor_icon", {
      label: this.label,
      value: e
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
  async setBackgroundColor(e) {
    return W("plugin:window|set_background_color", { color: e });
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
  async setCursorPosition(e) {
    return W("plugin:window|set_cursor_position", {
      label: this.label,
      value: e instanceof ar ? e : new ar(e)
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
  async setIgnoreCursorEvents(e) {
    return W("plugin:window|set_ignore_cursor_events", {
      label: this.label,
      value: e
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
    return W("plugin:window|start_dragging", {
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
  async startResizeDragging(e) {
    return W("plugin:window|start_resize_dragging", {
      label: this.label,
      value: e
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
  async setBadgeCount(e) {
    return W("plugin:window|set_badge_count", {
      label: this.label,
      value: e
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
  async setBadgeLabel(e) {
    return W("plugin:window|set_badge_label", {
      label: this.label,
      value: e
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
  async setOverlayIcon(e) {
    return W("plugin:window|set_overlay_icon", {
      label: this.label,
      value: e ? el(e) : void 0
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
  async setProgressBar(e) {
    return W("plugin:window|set_progress_bar", {
      label: this.label,
      value: e
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
  async setVisibleOnAllWorkspaces(e) {
    return W("plugin:window|set_visible_on_all_workspaces", {
      label: this.label,
      value: e
    });
  }
  /**
   * Sets the title bar style. **macOS only**.
   *
   * @since 2.0.0
   */
  async setTitleBarStyle(e) {
    return W("plugin:window|set_title_bar_style", {
      label: this.label,
      value: e
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
  async setTheme(e) {
    return W("plugin:window|set_theme", {
      label: this.label,
      value: e
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
  async onResized(e) {
    return this.listen(Jt.WINDOW_RESIZED, (n) => {
      n.payload = new po(n.payload), e(n);
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
  async onMoved(e) {
    return this.listen(Jt.WINDOW_MOVED, (n) => {
      n.payload = new ki(n.payload), e(n);
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
  async onCloseRequested(e) {
    return this.listen(Jt.WINDOW_CLOSE_REQUESTED, async (n) => {
      const i = new WT(n);
      await e(i), i.isPreventDefault() || await this.destroy();
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
  async onDragDropEvent(e) {
    const n = await this.listen(Jt.DRAG_ENTER, (r) => {
      e({
        ...r,
        payload: {
          type: "enter",
          paths: r.payload.paths,
          position: new ki(r.payload.position)
        }
      });
    }), i = await this.listen(Jt.DRAG_OVER, (r) => {
      e({
        ...r,
        payload: {
          type: "over",
          position: new ki(r.payload.position)
        }
      });
    }), s = await this.listen(Jt.DRAG_DROP, (r) => {
      e({
        ...r,
        payload: {
          type: "drop",
          paths: r.payload.paths,
          position: new ki(r.payload.position)
        }
      });
    }), o = await this.listen(Jt.DRAG_LEAVE, (r) => {
      e({ ...r, payload: { type: "leave" } });
    });
    return () => {
      n(), s(), i(), o();
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
  async onFocusChanged(e) {
    const n = await this.listen(Jt.WINDOW_FOCUS, (s) => {
      e({ ...s, payload: !0 });
    }), i = await this.listen(Jt.WINDOW_BLUR, (s) => {
      e({ ...s, payload: !1 });
    });
    return () => {
      n(), i();
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
  async onScaleChanged(e) {
    return this.listen(Jt.WINDOW_SCALE_FACTOR_CHANGED, e);
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
  async onThemeChanged(e) {
    return this.listen(Jt.WINDOW_THEME_CHANGED, e);
  }
}
var gd;
(function(t) {
  t.Disabled = "disabled", t.Throttle = "throttle", t.Suspend = "suspend";
})(gd || (gd = {}));
var md;
(function(t) {
  t.AppearanceBased = "appearanceBased", t.Light = "light", t.Dark = "dark", t.MediumLight = "mediumLight", t.UltraDark = "ultraDark", t.Titlebar = "titlebar", t.Selection = "selection", t.Menu = "menu", t.Popover = "popover", t.Sidebar = "sidebar", t.HeaderView = "headerView", t.Sheet = "sheet", t.WindowBackground = "windowBackground", t.HudWindow = "hudWindow", t.FullScreenUI = "fullScreenUI", t.Tooltip = "tooltip", t.ContentBackground = "contentBackground", t.UnderWindowBackground = "underWindowBackground", t.UnderPageBackground = "underPageBackground", t.Mica = "mica", t.Blur = "blur", t.Acrylic = "acrylic", t.Tabbed = "tabbed", t.TabbedDark = "tabbedDark", t.TabbedLight = "tabbedLight";
})(md || (md = {}));
var vd;
(function(t) {
  t.FollowsWindowActiveState = "followsWindowActiveState", t.Active = "active", t.Inactive = "inactive";
})(vd || (vd = {}));
const GT = /* @__PURE__ */ J({
  __name: "GitSyncRuntimePortal",
  props: {
    runtimeReady: { type: Boolean },
    state: {},
    controller: {}
  },
  setup(t, { expose: e }) {
    const n = oo(() => Promise.resolve().then(() => U4)), i = oo(() => Promise.resolve().then(() => iP)), s = t, { t: o } = vl(), r = M(null), l = M(null), a = C(() => s.state.dialogs.conflictFiles.value), c = C(() => s.state.dialogs.untrackedFiles.value), u = C(() => s.state.dialogs.mergeFileList.value), f = C(() => s.state.repoNotFound.message.value), d = C(() => s.state.confirm.options.value), h = C({
      get: () => s.state.dialogs.showConflictDialog.value,
      set: (v) => {
        s.state.dialogs.showConflictDialog.value = v;
      }
    }), g = C({
      get: () => s.state.dialogs.showManualMergeDialog.value,
      set: (v) => {
        s.state.dialogs.showManualMergeDialog.value = v;
      }
    }), m = C({
      get: () => s.state.repoNotFound.visible.value,
      set: (v) => {
        s.state.repoNotFound.visible.value = v;
      }
    }), y = C({
      get: () => s.state.confirm.visible.value,
      set: (v) => {
        s.state.confirm.visible.value = v;
      }
    });
    return e({
      setConflictDialogLoading: (v) => {
        r.value?.setLoading(v);
      },
      setManualMergeLoading: (v) => {
        l.value?.setLoading(v);
      }
    }), (v, w) => (S(), D(
      ye,
      null,
      [
        v.runtimeReady ? (S(), te(p(n), {
          key: 0,
          modelValue: p(h),
          "onUpdate:modelValue": w[0] || (w[0] = (_) => It(h) ? h.value = _ : null),
          "conflict-files": p(a),
          "untracked-files": p(c),
          onConfirm: v.controller.handleConflictResolution,
          onCancel: v.controller.handleConflictCancel,
          onEscape: v.controller.handleConflictEscape,
          ref_key: "conflictDialogRef",
          ref: r
        }, null, 8, ["modelValue", "conflict-files", "untracked-files", "onConfirm", "onCancel", "onEscape"])) : N("v-if", !0),
        v.runtimeReady ? (S(), te(p(i), {
          key: 1,
          modelValue: p(g),
          "onUpdate:modelValue": w[1] || (w[1] = (_) => It(g) ? g.value = _ : null),
          "conflict-files": p(u),
          onComplete: v.controller.handleManualMergeComplete,
          onCancel: v.controller.handleManualMergeCancel,
          onBack: v.controller.handleManualMergeBack,
          onEscape: v.controller.handleManualMergeEscape,
          ref_key: "manualMergeRef",
          ref: l
        }, null, 8, ["modelValue", "conflict-files", "onComplete", "onCancel", "onBack", "onEscape"])) : N("v-if", !0),
        U(fo, {
          modelValue: p(m),
          "onUpdate:modelValue": w[2] || (w[2] = (_) => It(m) ? m.value = _ : null),
          title: p(o)("settings.gitSync.repoNotFoundTitle"),
          message: p(f),
          "primary-text": p(o)("settings.gitSync.repoNotFoundReconfig"),
          "secondary-text": p(o)("settings.gitSync.repoNotFoundIgnore"),
          type: "warning",
          onPrimary: v.controller.handleRepoNotFoundReconfig,
          onSecondary: v.controller.handleRepoNotFoundIgnore,
          onClose: v.controller.handleRepoNotFoundIgnore
        }, null, 8, ["modelValue", "title", "message", "primary-text", "secondary-text", "onPrimary", "onSecondary", "onClose"]),
        U(fo, {
          modelValue: p(y),
          "onUpdate:modelValue": w[3] || (w[3] = (_) => It(y) ? y.value = _ : null),
          title: p(d).title,
          message: p(d).message,
          "primary-text": p(d).primaryText,
          "secondary-text": p(d).secondaryText,
          type: p(d).type,
          onPrimary: w[4] || (w[4] = (_) => v.state.confirm.handleResult("primary")),
          onSecondary: w[5] || (w[5] = (_) => v.state.confirm.handleResult("secondary")),
          onClose: w[6] || (w[6] = (_) => v.state.confirm.handleResult("close"))
        }, null, 8, ["modelValue", "title", "message", "primary-text", "secondary-text", "type"])
      ],
      64
      /* STABLE_FRAGMENT */
    ));
  }
});
function jT({
  runtime: t,
  shouldInit: e,
  getAutoSyncWindow: n
}) {
  let i = !1;
  ae(
    e,
    async (s) => {
      s === null || i || (i = !0, await t.setupAndRestore({
        shouldInit: s,
        autoSyncWindow: n?.()
      }));
    },
    { immediate: !0 }
  ), wo(() => {
    t.cleanup();
  });
}
const KT = /* @__PURE__ */ J({
  __name: "GitSyncRuntimeMount",
  props: {
    runtime: {},
    shouldInit: { type: [Boolean, null] }
  },
  setup(t) {
    const e = t, { portalRef: n } = e.runtime;
    return jT({
      runtime: e.runtime,
      shouldInit: C(() => e.shouldInit),
      getAutoSyncWindow: yu
    }), (i, s) => (S(), te(GT, {
      ref_key: "portalRef",
      ref: n,
      "runtime-ready": i.runtime.ready.value,
      state: i.runtime.state,
      controller: i.runtime.controller
    }, null, 8, ["runtime-ready", "state", "controller"]));
  }
}), UT = (t) => {
  window.dispatchEvent(new CustomEvent("refresh-data", {
    detail: { source: t }
  }));
}, qT = (t) => ({
  t: t.t,
  modalMsg: t.modalMsg,
  dispatchRefreshData: t.dispatchRefreshData ?? UT,
  logger: t.logger ?? ge
});
function YT(t) {
  const {
    t: e,
    modalMsg: n,
    dispatchRefreshData: i,
    logger: s
  } = qT(t);
  return {
    notifyForcePushResolved: () => {
      n(e("settings.gitSync.forcePushSuccess"), "success", "bottom-right"), i("force-push");
    },
    notifyForcePullResolved: () => {
      n(e("settings.gitSync.forcePullSuccess"), "success", "bottom-right"), i("force-pull");
    },
    notifyManualMergeResolved: () => {
      n(e("settings.gitSync.mergeSuccess"), "success", "bottom-right"), i("manual-merge"), s.info("[GitSync] 手动合并完成，自动同步已由后端恢复");
    },
    notifyAutoSyncResumed: (c) => {
      n(e("settings.gitSync.autoSyncResumed"), "info", "bottom-right"), c === "manual-merge" ? s.info("[GitSync] 用户从手动合并中选择恢复自动同步") : s.info("[GitSync] 用户选择恢复自动同步");
    }
  };
}
const JT = async (t, e) => {
  await W("write_conflict_file", {
    filePath: t,
    content: e
  });
}, Il = (t = {}) => ({
  forcePush: t.forcePush ?? eE,
  forcePull: t.forcePull ?? tE,
  removeUntrackedFile: t.removeUntrackedFile ?? Eg,
  resumeAutoSync: t.resumeAutoSync ?? ZA,
  resolveConflictsBatch: t.resolveConflictsBatch ?? nE,
  writeConflictFile: t.writeConflictFile ?? JT,
  logger: t.logger ?? ge
});
async function bu(t = {}) {
  const { resumeAutoSync: e, logger: n } = Il(t);
  try {
    return await e(), n.info("[GitSync] 冲突已解决，已恢复自动同步"), !0;
  } catch (i) {
    return n.error("[GitSync] 恢复自动同步失败:", i), !1;
  }
}
async function XT(t = {}) {
  const { forcePush: e } = Il(t);
  await e(), await bu(t);
}
async function ZT(t, e = {}) {
  const { forcePull: n, removeUntrackedFile: i, logger: s } = Il(e);
  for (const o of t)
    try {
      await i(o), s.info("[GitSync] 已删除未跟踪文件:", o);
    } catch (r) {
      s.warn(`[GitSync] 删除未跟踪文件失败: ${o} ${r}`);
    }
  await n(), await bu(e);
}
async function QT(t, e = {}) {
  const { files: n, selections: i, editedContents: s } = t, { resolveConflictsBatch: o, writeConflictFile: r, logger: l } = Il(e);
  for (const [u, f] of Object.entries(s)) {
    const d = Number.parseInt(u, 10);
    if (i[d] === "local" && f) {
      const h = n[d];
      if (!h) continue;
      l.info("[GitSync] 保存编辑后的本地内容:", h), await r(h, f), l.info("[GitSync] 已保存编辑后的内容到:", h);
    }
  }
  const a = n.map((u, f) => [
    u,
    i[f] === "remote" ? Va.KeepRemote : Va.KeepLocal
  ]), c = await o(a);
  return l.info(`[GitSync] 手动合并成功，已解决 ${c.resolved_count} 个冲突`), c;
}
function e4(t) {
  const e = t.logger ?? ge, n = t.resolveForcePush ?? XT, i = t.resolveForcePull ?? ZT, s = t.completeMerge ?? QT, o = t.resumeAutoSync ?? bu;
  return {
    handleConflictResolution: async (h) => {
      if (t.conflictDialogRef.value) {
        t.resetConflictHandled();
        try {
          if (h === "force-push") {
            if (!await t.confirmForcePush()) throw "cancel";
            t.conflictDialogRef.value.setLoading(!0), await n(), t.feedback.notifyForcePushResolved(), t.closeConflictDialog(), t.clearConflictFiles();
          } else if (h === "force-pull") {
            if (!await t.confirmForcePull()) throw "cancel";
            t.conflictDialogRef.value.setLoading(!0), await i(t.getUntrackedFiles()), t.feedback.notifyForcePullResolved(), t.closeConflictDialog(), t.clearConflictFiles();
          } else h === "manual-merge" && t.openManualMergeDialog();
        } finally {
          t.conflictDialogRef.value?.setLoading(!1);
        }
      }
    },
    handleConflictEscape: () => {
      t.closeConflictDialog(), t.resetConflictHandled();
    },
    handleConflictCancel: async () => {
      const h = await t.confirmCancelConflict();
      t.closeConflictDialog(), t.resetConflictHandled(), h === "secondary" ? (t.clearConflictFiles({ clearUntracked: !1 }), await o() && t.feedback.notifyAutoSyncResumed("conflict-dialog")) : e.info("[GitSync] 用户选择稍后处理冲突");
    },
    handleManualMergeComplete: async (h, g) => {
      if (t.manualMergeRef.value) {
        t.resetConflictHandled(), t.manualMergeRef.value.setLoading(!0);
        try {
          await s(t.getManualMergeInput(h, g)), t.feedback.notifyManualMergeResolved(), t.closeManualMergeDialog(), t.clearConflictFiles();
        } finally {
          t.manualMergeRef.value?.setLoading(!1);
        }
      }
    },
    handleManualMergeCancel: async () => {
      const h = await t.confirmCancelConflict();
      t.closeManualMergeDialog(), t.resetConflictHandled(), h === "secondary" ? (t.clearConflictFiles(), await o() && t.feedback.notifyAutoSyncResumed("manual-merge")) : e.info("[GitSync] 用户选择稍后处理手动合并");
    },
    handleManualMergeBack: () => {
      t.backToConflictDialog(), e.info("[GitSync] 用户从手动合并返回到冲突对话框");
    },
    handleManualMergeEscape: () => {
      t.closeManualMergeDialog(), t.resetConflictHandled();
    }
  };
}
function t4(t) {
  const e = t.logger ?? ge, { dialogs: n, confirm: i, repoNotFound: s } = t.state, o = M(null), r = C(() => o.value ? {
    setLoading: o.value.setConflictDialogLoading
  } : null), l = C(() => o.value ? {
    setLoading: o.value.setManualMergeLoading
  } : null), a = YT({
    t: t.t,
    modalMsg: t.modalMsg
  }), c = (v, w) => {
    if (w === "cancel") return;
    const _ = String(w).replace(/^Error:\s*/, "");
    if (v === "manual-merge") {
      e.error("[GitSync] 手动合并失败:", w), t.modalMsg(`${t.t("settings.gitSync.mergeFailed")}: ${_}`, "error", "top-right");
      return;
    }
    e.error("[GitSync] 冲突处理失败:", w), t.modalMsg(`${t.t("settings.gitSync.conflictResolutionFailed")}: ${_}`, "error", "top-right");
  }, u = e4({
    conflictDialogRef: r,
    manualMergeRef: l,
    resetConflictHandled: t.resetConflictHandled,
    confirmForcePush: i.confirmForcePush,
    confirmForcePull: i.confirmForcePull,
    confirmCancelConflict: i.confirmCancelConflict,
    closeConflictDialog: n.closeConflictDialog,
    openManualMergeDialog: n.openManualMergeDialog,
    closeManualMergeDialog: n.closeManualMergeDialog,
    clearConflictFiles: n.clearConflictFiles,
    backToConflictDialog: n.backToConflictDialog,
    getUntrackedFiles: () => n.untrackedFiles.value,
    getManualMergeInput: (v, w) => ({
      files: n.mergeFileList.value,
      selections: v,
      editedContents: w
    }),
    feedback: a,
    logger: e
  }), f = async (v) => {
    try {
      await u.handleConflictResolution(v);
    } catch (w) {
      c("conflict", w);
    }
  }, d = async () => {
    try {
      await u.handleConflictCancel();
    } catch (v) {
      c("conflict", v);
    }
  }, h = async (v, w) => {
    try {
      await u.handleManualMergeComplete(v, w);
    } catch (_) {
      c("manual-merge", _);
    }
  }, g = async () => {
    try {
      await u.handleManualMergeCancel();
    } catch (v) {
      c("manual-merge", v);
    }
  }, m = async () => {
    s.close(), e.info("[GitSync] 用户选择重新配置仓库"), await t.routeToGitSettings();
  }, y = () => {
    s.ignore(), e.info("[GitSync] 用户选择忽略仓库不存在错误"), t.modalMsg(t.t("settings.gitSync.repoNotFoundIgnored"), "info", "bottom-right");
  };
  return {
    gitSyncRuntimePortalRef: o,
    handleConflictResolution: f,
    handleConflictEscape: u.handleConflictEscape,
    handleConflictCancel: d,
    handleManualMergeComplete: h,
    handleManualMergeCancel: g,
    handleManualMergeBack: u.handleManualMergeBack,
    handleManualMergeEscape: u.handleManualMergeEscape,
    handleRepoNotFoundReconfig: m,
    handleRepoNotFoundIgnore: y
  };
}
const n4 = () => {
  setTimeout(() => {
    window.dispatchEvent(new CustomEvent("refresh-data", {
      detail: { source: "startup-pull" }
    }));
  }, 500);
}, Bg = () => Promise.resolve().then(() => cP), $g = () => Promise.resolve().then(() => hP), Fg = () => Promise.resolve().then(() => mP);
async function i4(t) {
  const [
    e,
    n,
    i
  ] = await Promise.all([
    (t.loadGitLifecycle ?? Bg)(),
    (t.loadGitSyncRuntime ?? $g)(),
    (t.loadGitAutoSyncLifecycle ?? Fg)()
  ]);
  return o4({
    t: t.t,
    shouldInit: t.shouldInit,
    setupGitEventListeners: e.setupGitEventListeners,
    setupGitSyncRuntimeListeners: n.setupGitSyncRuntimeListeners,
    ensureWorkspaceGitignore: e.ensureWorkspaceGitignore,
    initGitSync: e.initGitSync,
    isConflictDialogVisible: t.isConflictDialogVisible,
    onConflictDetected: t.onConflictDetected,
    onRepoNotFound: t.onRepoNotFound,
    autoSyncWindow: t.autoSyncWindow,
    startAutoSyncForVisibleWindow: i.startAutoSyncForVisibleWindow,
    stopAutoSyncForHiddenWindow: i.stopAutoSyncForHiddenWindow,
    isPluginEnabled: t.isPluginEnabled,
    scheduleStartupRefresh: t.scheduleStartupRefresh,
    logger: t.logger
  });
}
async function s4(t) {
  const [
    e,
    n,
    i
  ] = await Promise.all([
    (t.loadGitLifecycle ?? Bg)(),
    (t.loadGitSyncRuntime ?? $g)(),
    (t.loadGitAutoSyncLifecycle ?? Fg)()
  ]);
  await r4({
    host: t.host,
    cleanupGitEventListeners: e.cleanupGitEventListeners,
    cleanupGitSyncRuntimeListeners: n.cleanupGitSyncRuntimeListeners,
    stopAutoSyncForHiddenWindow: i.stopAutoSyncForHiddenWindow,
    isPluginEnabled: t.isPluginEnabled,
    logger: t.logger
  });
}
async function o4(t) {
  const e = t.logger, n = {
    gitListeners: null,
    runtimeListeners: null,
    autoSyncWindowListeners: null
  };
  return n.gitListeners = await t.setupGitEventListeners(t.t), e?.info("[GitSync] Git 事件监听器已设置"), n.runtimeListeners = await t.setupGitSyncRuntimeListeners({
    isConflictDialogVisible: t.isConflictDialogVisible,
    onConflictDetected: t.onConflictDetected,
    onRepoNotFound: t.onRepoNotFound
  }), e?.info("[GitSync] Git runtime 事件监听器已设置"), await t.ensureWorkspaceGitignore(), t.shouldInit && await t.initGitSync(t.t) && (t.scheduleStartupRefresh ?? n4)(), t.autoSyncWindow && t.startAutoSyncForVisibleWindow && t.stopAutoSyncForHiddenWindow && (n.autoSyncWindowListeners = await l4(t)), n;
}
async function r4(t) {
  t.host.gitListeners && (t.cleanupGitEventListeners(t.host.gitListeners), t.logger?.info("[GitSync] Git 事件监听器已清理")), t.host.runtimeListeners && (t.cleanupGitSyncRuntimeListeners(t.host.runtimeListeners), t.logger?.info("[GitSync] Git runtime 事件监听器已清理")), t.host.autoSyncWindowListeners && (t.host.autoSyncWindowListeners.show?.(), t.host.autoSyncWindowListeners.hide?.(), t.logger?.info("[GitSync] Git 自动同步窗口监听器已清理")), t.stopAutoSyncForHiddenWindow && await t.stopAutoSyncForHiddenWindow({
    isPluginEnabled: t.isPluginEnabled
  });
}
async function l4(t) {
  const e = t.autoSyncWindow, n = t.startAutoSyncForVisibleWindow, i = t.stopAutoSyncForHiddenWindow;
  if (!e || !n || !i)
    return {
      show: null,
      hide: null
    };
  const s = async () => {
    await n({
      isPluginEnabled: t.isPluginEnabled
    });
  }, o = async () => {
    await i({
      isPluginEnabled: t.isPluginEnabled
    });
  }, r = await e.listen("tauri://show", async () => {
    t.logger?.info("[GitSync] 窗口显示事件触发"), await s();
  }), l = await e.listen("tauri://hide", async () => {
    t.logger?.info("[GitSync] 窗口隐藏事件触发"), await o();
  });
  return await e.isVisible() && await s(), {
    show: r,
    hide: l
  };
}
function a4(t = {}) {
  const e = t.logger ?? ge, n = t.setupHost ?? i4, i = t.cleanupHost ?? s4, s = M(!1), o = M(null), r = async (u) => {
    s.value = !0, o.value = await n({
      ...u,
      logger: e
    }), e.info("[GitSync] runtime host 已设置");
  };
  return {
    ready: s,
    host: o,
    setup: r,
    setupWithState: async (u) => r({
      t: u.t,
      shouldInit: u.shouldInit,
      isConflictDialogVisible: () => u.state.dialogs.showConflictDialog.value,
      onConflictDetected: ({ conflictFiles: f, untrackedFiles: d }) => {
        u.state.dialogs.setConflictFiles({
          conflictFiles: f,
          untrackedFiles: d
        });
      },
      onRepoNotFound: ({ remoteUrl: f, operation: d }) => {
        u.state.repoNotFound.open({
          remoteUrl: f,
          operation: d
        });
      },
      autoSyncWindow: u.autoSyncWindow,
      isPluginEnabled: u.isPluginEnabled
    }),
    cleanup: async (u) => {
      o.value && (await i({
        host: o.value,
        isPluginEnabled: u,
        logger: e
      }), o.value = null, s.value = !1);
    },
    resetConflictHandled: () => {
      o.value?.runtimeListeners?.resetConflictHandled();
    }
  };
}
const c4 = {
  title: "",
  message: "",
  primaryText: "",
  secondaryText: "",
  type: "info"
};
function u4(t) {
  const e = M(!1), n = M({ ...c4 });
  let i = null;
  const s = (c) => (n.value = {
    ...n.value,
    ...c
  }, e.value = !0, new Promise((u) => {
    i = u;
  }));
  return {
    visible: e,
    options: n,
    handleResult: (c) => {
      e.value = !1, i && (i(c), i = null);
    },
    confirmForcePush: async () => await s({
      title: t("settings.gitSync.confirmForcePush"),
      message: t("settings.gitSync.confirmForcePushMessage"),
      primaryText: t("common.confirm"),
      secondaryText: t("common.cancel"),
      type: "warning"
    }) === "primary",
    confirmForcePull: async () => await s({
      title: t("settings.gitSync.confirmForcePull"),
      message: t("settings.gitSync.confirmForcePullMessage"),
      primaryText: t("common.confirm"),
      secondaryText: t("common.cancel"),
      type: "warning"
    }) === "primary",
    confirmCancelConflict: async () => s({
      title: t("settings.gitSync.cancelConflictTitle"),
      message: t("settings.gitSync.cancelConflictMessage"),
      primaryText: t("settings.gitSync.handleLater"),
      secondaryText: t("settings.gitSync.resumeSync"),
      type: "warning"
    })
  };
}
const wu = "git-conflict-state", f4 = 1e4;
function yd(t) {
  try {
    const e = t.replace(/^"|"$/g, "");
    if (!e.includes("\\"))
      return e;
    const n = [];
    let i = 0;
    for (; i < e.length; )
      if (e[i] === "\\" && i + 1 < e.length) {
        if (i + 3 < e.length && /[0-7]{3}/.test(e.substring(i + 1, i + 4))) {
          n.push(parseInt(e.substring(i + 1, i + 4), 8)), i += 4;
          continue;
        }
        switch (e[i + 1]) {
          case "n":
            n.push(10);
            break;
          case "t":
            n.push(9);
            break;
          case "r":
            n.push(13);
            break;
          case "\\":
            n.push(92);
            break;
          case '"':
            n.push(34);
            break;
          default:
            n.push(e.charCodeAt(i + 1));
        }
        i += 2;
      } else
        n.push(e.charCodeAt(i)), i += 1;
    return new TextDecoder("utf-8").decode(new Uint8Array(n));
  } catch {
    return t.replace(/^"|"$/g, "").replace(/\\/g, "");
  }
}
function d4(t, e, n = Date.now()) {
  if (e.length === 0) return;
  const i = {
    conflictFiles: e,
    timestamp: n
  };
  t.setItem(wu, JSON.stringify(i));
}
function Ng(t) {
  t.removeItem(wu);
}
function h4(t, e = Date.now(), n = f4) {
  const i = t.getItem(wu);
  if (!i) return null;
  try {
    const s = JSON.parse(i), o = Array.isArray(s.conflictFiles) ? s.conflictFiles.filter((l) => typeof l == "string") : [], r = typeof s.timestamp == "number" ? s.timestamp : 0;
    if (o.length > 0 && e - r < n)
      return {
        conflictFiles: o,
        timestamp: r
      };
  } catch {
  }
  return Ng(t), null;
}
function p4(t = {}) {
  const e = t.storage ?? sessionStorage, n = t.logger ?? ge, i = M(!1), s = M(!1), o = M([]), r = M([]), l = C(() => [...o.value, ...r.value]), a = () => {
    d4(e, o.value);
  };
  return {
    showConflictDialog: i,
    showManualMergeDialog: s,
    conflictFiles: o,
    untrackedFiles: r,
    mergeFileList: l,
    persistConflictState: a,
    restoreConflictDialogState: () => {
      const y = h4(e);
      return y ? (o.value = y.conflictFiles, i.value = !0, n.info("[GitSync] 恢复冲突状态，显示对话框"), !0) : !1;
    },
    setConflictFiles: ({
      conflictFiles: y,
      untrackedFiles: v = []
    }) => {
      o.value = y, r.value = v, a(), i.value = !0;
    },
    clearConflictFiles: (y = {}) => {
      Ng(e), o.value = [], y.clearUntracked !== !1 && (r.value = []);
    },
    closeConflictDialog: () => {
      i.value = !1;
    },
    openManualMergeDialog: () => {
      i.value = !1, s.value = !0;
    },
    closeManualMergeDialog: () => {
      s.value = !1;
    },
    backToConflictDialog: () => {
      s.value = !1, i.value = !0;
    }
  };
}
function g4(t) {
  const e = M(!1), n = M({
    remoteUrl: "",
    operation: ""
  }), i = C(() => t("settings.gitSync.repoNotFoundMessage", {
    url: n.value.remoteUrl,
    operation: n.value.operation
  })), s = (a) => {
    n.value = a, e.value = !0;
  }, o = () => {
    e.value = !1;
  }, r = () => {
    n.value = {
      remoteUrl: "",
      operation: ""
    };
  };
  return {
    visible: e,
    info: n,
    message: i,
    open: s,
    close: o,
    reset: r,
    ignore: () => {
      o(), r();
    }
  };
}
function m4(t) {
  const e = p4({
    storage: t.storage,
    logger: t.logger
  }), n = u4(t.t), i = g4(t.t);
  return {
    dialogs: e,
    confirm: n,
    repoNotFound: i
  };
}
function v4(t) {
  const e = t.logger ?? ge, n = m4({
    t: t.t,
    ...t.stateDeps
  }), i = a4({
    ...t.hostControllerDeps,
    logger: e
  }), s = t4({
    t: t.t,
    modalMsg: t.modalMsg,
    routeToGitSettings: t.routeToGitSettings,
    resetConflictHandled: i.resetConflictHandled,
    state: n,
    logger: e
  }), o = async ({ shouldInit: c, autoSyncWindow: u }) => {
    if (!t.isPluginEnabled()) {
      e.info("[Config] Git 同步插件未启用，跳过 Git 事件监听和自动同步初始化");
      return;
    }
    await i.setupWithState({
      t: t.t,
      shouldInit: c,
      state: n,
      autoSyncWindow: u,
      isPluginEnabled: t.isPluginEnabled
    });
  }, r = () => n.dialogs.restoreConflictDialogState(), l = async (c) => (await o(c), r()), a = () => i.cleanup(t.isPluginEnabled);
  return {
    state: n,
    controller: s,
    portalRef: s.gitSyncRuntimePortalRef,
    ready: i.ready,
    setup: o,
    setupAndRestore: l,
    restoreConflictDialogState: r,
    cleanup: a
  };
}
const y4 = /* @__PURE__ */ J({
  name: "GitSyncRuntimeHost",
  __name: "GitSyncRuntimeHost",
  props: {
    configHostContext: {}
  },
  setup(t) {
    const e = t, { t: n } = vl(), i = v4({
      t: n,
      modalMsg: ze.msg.bind(ze),
      routeToGitSettings: () => e.configHostContext.navigateTo("/config/category/settings?tab=gitSync"),
      isPluginEnabled: () => e.configHostContext.isPluginEnabled("git-sync"),
      logger: ge
    });
    return (s, o) => (S(), te(KT, {
      runtime: p(i),
      "should-init": s.configHostContext.shouldInit
    }, null, 8, ["runtime", "should-init"]));
  }
}), b4 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: y4
}, Symbol.toStringTag, { value: "Module" })), w4 = { class: "conflict-body" }, S4 = {
  key: 0,
  class: "section"
}, C4 = { class: "section-label" }, k4 = { class: "file-list" }, _4 = { class: "file-name" }, x4 = {
  key: 1,
  class: "section"
}, A4 = { class: "section-label" }, E4 = { class: "file-list" }, T4 = { class: "file-name" }, M4 = { class: "section" }, O4 = { class: "section-label" }, D4 = { class: "strategy-list" }, P4 = { class: "card-body" }, I4 = { class: "card-title" }, R4 = { class: "card-desc" }, L4 = { class: "card-badge recommended" }, B4 = { class: "card-body" }, $4 = { class: "card-title" }, F4 = { class: "card-desc" }, N4 = { class: "card-body" }, V4 = { class: "card-title" }, z4 = { class: "card-desc" }, H4 = {
  key: 0,
  class: "warning-box"
}, W4 = { class: "warning-text" }, G4 = { class: "conflict-footer" }, j4 = /* @__PURE__ */ J({
  __name: "index",
  props: {
    modelValue: { type: Boolean },
    conflictFiles: {},
    untrackedFiles: {}
  },
  emits: ["update:modelValue", "confirm", "cancel", "escape"],
  setup(t, { expose: e, emit: n }) {
    const i = t, s = n, o = C({
      get: () => i.modelValue,
      set: (m) => s("update:modelValue", m)
    }), r = C(() => i.conflictFiles || []), l = C(() => i.untrackedFiles || []), a = M(""), c = M(!1), u = M(!1);
    ae(o, (m) => {
      m && (a.value = "", c.value = !1);
    });
    function f() {
      a.value && s("confirm", a.value);
    }
    function d() {
      g(), s("cancel");
    }
    function h() {
      if (o.value = !1, u.value) {
        u.value = !1;
        return;
      }
      s("escape");
    }
    function g() {
      u.value = !0, o.value = !1;
    }
    return e({
      setLoading: (m) => {
        c.value = m;
      }
    }), (m, y) => (S(), te(p(gu), {
      modelValue: p(o),
      "onUpdate:modelValue": y[3] || (y[3] = (v) => It(o) ? o.value = v : null),
      title: m.$t("settings.gitSync.conflictDetected"),
      width: "520px",
      "custom-class": "git-conflict-dialog warning-dialog",
      "close-on-click-modal": !0,
      onClose: h
    }, {
      footer: j(() => [
        b("div", G4, [
          U(p(An), {
            onClick: d,
            disabled: p(c)
          }, {
            default: j(() => [
              De(
                R(m.$t("common.cancel")),
                1
                /* TEXT */
              )
            ]),
            _: 1
            /* STABLE */
          }, 8, ["disabled"]),
          U(p(An), {
            type: "primary",
            onClick: f,
            disabled: !p(a),
            loading: p(c)
          }, {
            default: j(() => [
              De(
                R(m.$t("common.confirm")),
                1
                /* TEXT */
              )
            ]),
            _: 1
            /* STABLE */
          }, 8, ["disabled", "loading"])
        ])
      ]),
      default: j(() => [
        b("div", w4, [
          N(" 冲突文件列表 "),
          p(r).length > 0 ? (S(), D("div", S4, [
            b(
              "div",
              C4,
              R(m.$t("settings.gitSync.conflictFiles")),
              1
              /* TEXT */
            ),
            b("div", k4, [
              (S(!0), D(
                ye,
                null,
                ct(p(r), (v) => (S(), D("div", {
                  key: v,
                  class: "file-item conflict"
                }, [
                  y[4] || (y[4] = b(
                    "span",
                    { class: "file-dot conflict-dot" },
                    null,
                    -1
                    /* HOISTED */
                  )),
                  b(
                    "span",
                    _4,
                    R(v),
                    1
                    /* TEXT */
                  )
                ]))),
                128
                /* KEYED_FRAGMENT */
              ))
            ])
          ])) : N("v-if", !0),
          N(" 未跟踪文件列表（会被远程覆盖） "),
          p(l).length > 0 ? (S(), D("div", x4, [
            b(
              "div",
              A4,
              R(m.$t("settings.gitSync.untrackedFiles")),
              1
              /* TEXT */
            ),
            b("div", E4, [
              (S(!0), D(
                ye,
                null,
                ct(p(l), (v) => (S(), D("div", {
                  key: v,
                  class: "file-item untracked"
                }, [
                  y[5] || (y[5] = b(
                    "span",
                    { class: "file-dot untracked-dot" },
                    null,
                    -1
                    /* HOISTED */
                  )),
                  b(
                    "span",
                    T4,
                    R(v),
                    1
                    /* TEXT */
                  )
                ]))),
                128
                /* KEYED_FRAGMENT */
              ))
            ])
          ])) : N("v-if", !0),
          N(" 策略选择 "),
          b("div", M4, [
            b(
              "div",
              O4,
              R(m.$t("settings.gitSync.selectResolution")),
              1
              /* TEXT */
            ),
            b("div", D4, [
              b(
                "button",
                {
                  class: F(["strategy-card", { active: p(a) === "manual-merge" }]),
                  onClick: y[0] || (y[0] = (v) => a.value = "manual-merge")
                },
                [
                  y[6] || (y[6] = b(
                    "div",
                    { class: "card-icon merge-icon" },
                    "⇄",
                    -1
                    /* HOISTED */
                  )),
                  b("div", P4, [
                    b(
                      "div",
                      I4,
                      R(m.$t("settings.gitSync.manualMerge")),
                      1
                      /* TEXT */
                    ),
                    b(
                      "div",
                      R4,
                      R(m.$t("settings.gitSync.manualMergeDesc")),
                      1
                      /* TEXT */
                    )
                  ]),
                  b(
                    "div",
                    L4,
                    R(m.$t("settings.gitSync.recommended")),
                    1
                    /* TEXT */
                  )
                ],
                2
                /* CLASS */
              ),
              b(
                "button",
                {
                  class: F(["strategy-card", { active: p(a) === "force-pull" }]),
                  onClick: y[1] || (y[1] = (v) => a.value = "force-pull")
                },
                [
                  y[7] || (y[7] = b(
                    "div",
                    { class: "card-icon pull-icon" },
                    "↓",
                    -1
                    /* HOISTED */
                  )),
                  b("div", B4, [
                    b(
                      "div",
                      $4,
                      R(m.$t("settings.gitSync.forcePull")),
                      1
                      /* TEXT */
                    ),
                    b(
                      "div",
                      F4,
                      R(m.$t("settings.gitSync.forcePullDesc")),
                      1
                      /* TEXT */
                    )
                  ])
                ],
                2
                /* CLASS */
              ),
              b(
                "button",
                {
                  class: F(["strategy-card", { active: p(a) === "force-push" }]),
                  onClick: y[2] || (y[2] = (v) => a.value = "force-push")
                },
                [
                  y[8] || (y[8] = b(
                    "div",
                    { class: "card-icon push-icon" },
                    "↑",
                    -1
                    /* HOISTED */
                  )),
                  b("div", N4, [
                    b(
                      "div",
                      V4,
                      R(m.$t("settings.gitSync.forcePush")),
                      1
                      /* TEXT */
                    ),
                    b(
                      "div",
                      z4,
                      R(m.$t("settings.gitSync.forcePushDesc")),
                      1
                      /* TEXT */
                    )
                  ])
                ],
                2
                /* CLASS */
              )
            ])
          ]),
          N(" 警告提示 "),
          U(pi, { name: "warning-slide" }, {
            default: j(() => [
              p(a) === "force-push" || p(a) === "force-pull" ? (S(), D("div", H4, [
                y[9] || (y[9] = b(
                  "span",
                  { class: "warning-icon" },
                  "⚠",
                  -1
                  /* HOISTED */
                )),
                b(
                  "span",
                  W4,
                  R(p(a) === "force-push" ? m.$t("settings.gitSync.forcePushWarning") : m.$t("settings.gitSync.forcePullWarning")),
                  1
                  /* TEXT */
                )
              ])) : N("v-if", !0)
            ]),
            _: 1
            /* STABLE */
          })
        ])
      ]),
      _: 1
      /* STABLE */
    }, 8, ["modelValue", "title"]));
  }
}), K4 = /* @__PURE__ */ vi(j4, [["__scopeId", "data-v-c53b1b89"]]), U4 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: K4
}, Symbol.toStringTag, { value: "Module" }));
let Ga = [], Vg = [];
(() => {
  let t = "lc,34,7n,7,7b,19,,,,2,,2,,,20,b,1c,l,g,,2t,7,2,6,2,2,,4,z,,u,r,2j,b,1m,9,9,,o,4,,9,,3,,5,17,3,3b,f,,w,1j,,,,4,8,4,,3,7,a,2,t,,1m,,,,2,4,8,,9,,a,2,q,,2,2,1l,,4,2,4,2,2,3,3,,u,2,3,,b,2,1l,,4,5,,2,4,,k,2,m,6,,,1m,,,2,,4,8,,7,3,a,2,u,,1n,,,,c,,9,,14,,3,,1l,3,5,3,,4,7,2,b,2,t,,1m,,2,,2,,3,,5,2,7,2,b,2,s,2,1l,2,,,2,4,8,,9,,a,2,t,,20,,4,,2,3,,,8,,29,,2,7,c,8,2q,,2,9,b,6,22,2,r,,,,,,1j,e,,5,,2,5,b,,10,9,,2u,4,,6,,2,2,2,p,2,4,3,g,4,d,,2,2,6,,f,,jj,3,qa,3,t,3,t,2,u,2,1s,2,,7,8,,2,b,9,,19,3,3b,2,y,,3a,3,4,2,9,,6,3,63,2,2,,1m,,,7,,,,,2,8,6,a,2,,1c,h,1r,4,1c,7,,,5,,14,9,c,2,w,4,2,2,,3,1k,,,2,3,,,3,1m,8,2,2,48,3,,d,,7,4,,6,,3,2,5i,1m,,5,ek,,5f,x,2da,3,3x,,2o,w,fe,6,2x,2,n9w,4,,a,w,2,28,2,7k,,3,,4,,p,2,5,,47,2,q,i,d,,12,8,p,b,1a,3,1c,,2,4,2,2,13,,1v,6,2,2,2,2,c,,8,,1b,,1f,,,3,2,2,5,2,,,16,2,8,,6m,,2,,4,,fn4,,kh,g,g,g,a6,2,gt,,6a,,45,5,1ae,3,,2,5,4,14,3,4,,4l,2,fx,4,ar,2,49,b,4w,,1i,f,1k,3,1d,4,2,2,1x,3,10,5,,8,1q,,c,2,1g,9,a,4,2,,2n,3,2,,,2,6,,4g,,3,8,l,2,1l,2,,,,,m,,e,7,3,5,5f,8,2,3,,,n,,29,,2,6,,,2,,,2,,2,6j,,2,4,6,2,,2,r,2,2d,8,2,,,2,2y,,,,2,6,,,2t,3,2,4,,5,77,9,,2,6t,,a,2,,,4,,40,4,2,2,4,,w,a,14,6,2,4,8,,9,6,2,3,1a,d,,2,ba,7,,6,,,2a,m,2,7,,2,,2,3e,6,3,,,2,,7,,,20,2,3,,,,9n,2,f0b,5,1n,7,t4,,1r,4,29,,f5k,2,43q,,,3,4,5,8,8,2,7,u,4,44,3,1iz,1j,4,1e,8,,e,,m,5,,f,11s,7,,h,2,7,,2,,5,79,7,c5,4,15s,7,31,7,240,5,gx7k,2o,3k,6o".split(",").map((e) => e ? parseInt(e, 36) : 1);
  for (let e = 0, n = 0; e < t.length; e++)
    (e % 2 ? Vg : Ga).push(n = n + t[e]);
})();
function q4(t) {
  if (t < 768) return !1;
  for (let e = 0, n = Ga.length; ; ) {
    let i = e + n >> 1;
    if (t < Ga[i]) n = i;
    else if (t >= Vg[i]) e = i + 1;
    else return !0;
    if (e == n) return !1;
  }
}
function bd(t) {
  return t >= 127462 && t <= 127487;
}
const wd = 8205;
function Y4(t, e, n = !0, i = !0) {
  return (n ? zg : J4)(t, e, i);
}
function zg(t, e, n) {
  if (e == t.length) return e;
  e && Hg(t.charCodeAt(e)) && Wg(t.charCodeAt(e - 1)) && e--;
  let i = aa(t, e);
  for (e += Sd(i); e < t.length; ) {
    let s = aa(t, e);
    if (i == wd || s == wd || n && q4(s))
      e += Sd(s), i = s;
    else if (bd(s)) {
      let o = 0, r = e - 2;
      for (; r >= 0 && bd(aa(t, r)); )
        o++, r -= 2;
      if (o % 2 == 0) break;
      e += 2;
    } else
      break;
  }
  return e;
}
function J4(t, e, n) {
  for (; e > 0; ) {
    let i = zg(t, e - 2, n);
    if (i < e) return i;
    e--;
  }
  return 0;
}
function aa(t, e) {
  let n = t.charCodeAt(e);
  if (!Wg(n) || e + 1 == t.length) return n;
  let i = t.charCodeAt(e + 1);
  return Hg(i) ? (n - 55296 << 10) + (i - 56320) + 65536 : n;
}
function Hg(t) {
  return t >= 56320 && t < 57344;
}
function Wg(t) {
  return t >= 55296 && t < 56320;
}
function Sd(t) {
  return t < 65536 ? 1 : 2;
}
class Ae {
  /**
  Get the line description around the given position.
  */
  lineAt(e) {
    if (e < 0 || e > this.length)
      throw new RangeError(`Invalid position ${e} in document of length ${this.length}`);
    return this.lineInner(e, !1, 1, 0);
  }
  /**
  Get the description for the given (1-based) line number.
  */
  line(e) {
    if (e < 1 || e > this.lines)
      throw new RangeError(`Invalid line number ${e} in ${this.lines}-line document`);
    return this.lineInner(e, !0, 1, 0);
  }
  /**
  Replace a range of the text with the given content.
  */
  replace(e, n, i) {
    [e, n] = Is(this, e, n);
    let s = [];
    return this.decompose(
      0,
      e,
      s,
      2
      /* Open.To */
    ), i.length && i.decompose(
      0,
      i.length,
      s,
      3
      /* Open.To */
    ), this.decompose(
      n,
      this.length,
      s,
      1
      /* Open.From */
    ), $n.from(s, this.length - (n - e) + i.length);
  }
  /**
  Append another document to this one.
  */
  append(e) {
    return this.replace(this.length, this.length, e);
  }
  /**
  Retrieve the text between the given points.
  */
  slice(e, n = this.length) {
    [e, n] = Is(this, e, n);
    let i = [];
    return this.decompose(e, n, i, 0), $n.from(i, n - e);
  }
  /**
  Test whether this text is equal to another instance.
  */
  eq(e) {
    if (e == this)
      return !0;
    if (e.length != this.length || e.lines != this.lines)
      return !1;
    let n = this.scanIdentical(e, 1), i = this.length - this.scanIdentical(e, -1), s = new mo(this), o = new mo(e);
    for (let r = n, l = n; ; ) {
      if (s.next(r), o.next(r), r = 0, s.lineBreak != o.lineBreak || s.done != o.done || s.value != o.value)
        return !1;
      if (l += s.value.length, s.done || l >= i)
        return !0;
    }
  }
  /**
  Iterate over the text. When `dir` is `-1`, iteration happens
  from end to start. This will return lines and the breaks between
  them as separate strings.
  */
  iter(e = 1) {
    return new mo(this, e);
  }
  /**
  Iterate over a range of the text. When `from` > `to`, the
  iterator will run in reverse.
  */
  iterRange(e, n = this.length) {
    return new Gg(this, e, n);
  }
  /**
  Return a cursor that iterates over the given range of lines,
  _without_ returning the line breaks between, and yielding empty
  strings for empty lines.
  
  When `from` and `to` are given, they should be 1-based line numbers.
  */
  iterLines(e, n) {
    let i;
    if (e == null)
      i = this.iter();
    else {
      n == null && (n = this.lines + 1);
      let s = this.line(e).from;
      i = this.iterRange(s, Math.max(s, n == this.lines + 1 ? this.length : n <= 1 ? 0 : this.line(n - 1).to));
    }
    return new jg(i);
  }
  /**
  Return the document as a string, using newline characters to
  separate lines.
  */
  toString() {
    return this.sliceString(0);
  }
  /**
  Convert the document to an array of lines (which can be
  deserialized again via [`Text.of`](https://codemirror.net/6/docs/ref/#state.Text^of)).
  */
  toJSON() {
    let e = [];
    return this.flatten(e), e;
  }
  /**
  @internal
  */
  constructor() {
  }
  /**
  Create a `Text` instance for the given array of lines.
  */
  static of(e) {
    if (e.length == 0)
      throw new RangeError("A document must have at least one line");
    return e.length == 1 && !e[0] ? Ae.empty : e.length <= 32 ? new et(e) : $n.from(et.split(e, []));
  }
}
class et extends Ae {
  constructor(e, n = X4(e)) {
    super(), this.text = e, this.length = n;
  }
  get lines() {
    return this.text.length;
  }
  get children() {
    return null;
  }
  lineInner(e, n, i, s) {
    for (let o = 0; ; o++) {
      let r = this.text[o], l = s + r.length;
      if ((n ? i : l) >= e)
        return new Z4(s, l, i, r);
      s = l + 1, i++;
    }
  }
  decompose(e, n, i, s) {
    let o = e <= 0 && n >= this.length ? this : new et(Cd(this.text, e, n), Math.min(n, this.length) - Math.max(0, e));
    if (s & 1) {
      let r = i.pop(), l = Rr(o.text, r.text.slice(), 0, o.length);
      if (l.length <= 32)
        i.push(new et(l, r.length + o.length));
      else {
        let a = l.length >> 1;
        i.push(new et(l.slice(0, a)), new et(l.slice(a)));
      }
    } else
      i.push(o);
  }
  replace(e, n, i) {
    if (!(i instanceof et))
      return super.replace(e, n, i);
    [e, n] = Is(this, e, n);
    let s = Rr(this.text, Rr(i.text, Cd(this.text, 0, e)), n), o = this.length + i.length - (n - e);
    return s.length <= 32 ? new et(s, o) : $n.from(et.split(s, []), o);
  }
  sliceString(e, n = this.length, i = `
`) {
    [e, n] = Is(this, e, n);
    let s = "";
    for (let o = 0, r = 0; o <= n && r < this.text.length; r++) {
      let l = this.text[r], a = o + l.length;
      o > e && r && (s += i), e < a && n > o && (s += l.slice(Math.max(0, e - o), n - o)), o = a + 1;
    }
    return s;
  }
  flatten(e) {
    for (let n of this.text)
      e.push(n);
  }
  scanIdentical() {
    return 0;
  }
  static split(e, n) {
    let i = [], s = -1;
    for (let o of e)
      i.push(o), s += o.length + 1, i.length == 32 && (n.push(new et(i, s)), i = [], s = -1);
    return s > -1 && n.push(new et(i, s)), n;
  }
}
class $n extends Ae {
  constructor(e, n) {
    super(), this.children = e, this.length = n, this.lines = 0;
    for (let i of e)
      this.lines += i.lines;
  }
  lineInner(e, n, i, s) {
    for (let o = 0; ; o++) {
      let r = this.children[o], l = s + r.length, a = i + r.lines - 1;
      if ((n ? a : l) >= e)
        return r.lineInner(e, n, i, s);
      s = l + 1, i = a + 1;
    }
  }
  decompose(e, n, i, s) {
    for (let o = 0, r = 0; r <= n && o < this.children.length; o++) {
      let l = this.children[o], a = r + l.length;
      if (e <= a && n >= r) {
        let c = s & ((r <= e ? 1 : 0) | (a >= n ? 2 : 0));
        r >= e && a <= n && !c ? i.push(l) : l.decompose(e - r, n - r, i, c);
      }
      r = a + 1;
    }
  }
  replace(e, n, i) {
    if ([e, n] = Is(this, e, n), i.lines < this.lines)
      for (let s = 0, o = 0; s < this.children.length; s++) {
        let r = this.children[s], l = o + r.length;
        if (e >= o && n <= l) {
          let a = r.replace(e - o, n - o, i), c = this.lines - r.lines + a.lines;
          if (a.lines < c >> 4 && a.lines > c >> 6) {
            let u = this.children.slice();
            return u[s] = a, new $n(u, this.length - (n - e) + i.length);
          }
          return super.replace(o, l, a);
        }
        o = l + 1;
      }
    return super.replace(e, n, i);
  }
  sliceString(e, n = this.length, i = `
`) {
    [e, n] = Is(this, e, n);
    let s = "";
    for (let o = 0, r = 0; o < this.children.length && r <= n; o++) {
      let l = this.children[o], a = r + l.length;
      r > e && o && (s += i), e < a && n > r && (s += l.sliceString(e - r, n - r, i)), r = a + 1;
    }
    return s;
  }
  flatten(e) {
    for (let n of this.children)
      n.flatten(e);
  }
  scanIdentical(e, n) {
    if (!(e instanceof $n))
      return 0;
    let i = 0, [s, o, r, l] = n > 0 ? [0, 0, this.children.length, e.children.length] : [this.children.length - 1, e.children.length - 1, -1, -1];
    for (; ; s += n, o += n) {
      if (s == r || o == l)
        return i;
      let a = this.children[s], c = e.children[o];
      if (a != c)
        return i + a.scanIdentical(c, n);
      i += a.length + 1;
    }
  }
  static from(e, n = e.reduce((i, s) => i + s.length + 1, -1)) {
    let i = 0;
    for (let h of e)
      i += h.lines;
    if (i < 32) {
      let h = [];
      for (let g of e)
        g.flatten(h);
      return new et(h, n);
    }
    let s = Math.max(
      32,
      i >> 5
      /* Tree.BranchShift */
    ), o = s << 1, r = s >> 1, l = [], a = 0, c = -1, u = [];
    function f(h) {
      let g;
      if (h.lines > o && h instanceof $n)
        for (let m of h.children)
          f(m);
      else h.lines > r && (a > r || !a) ? (d(), l.push(h)) : h instanceof et && a && (g = u[u.length - 1]) instanceof et && h.lines + g.lines <= 32 ? (a += h.lines, c += h.length + 1, u[u.length - 1] = new et(g.text.concat(h.text), g.length + 1 + h.length)) : (a + h.lines > s && d(), a += h.lines, c += h.length + 1, u.push(h));
    }
    function d() {
      a != 0 && (l.push(u.length == 1 ? u[0] : $n.from(u, c)), c = -1, a = u.length = 0);
    }
    for (let h of e)
      f(h);
    return d(), l.length == 1 ? l[0] : new $n(l, n);
  }
}
Ae.empty = /* @__PURE__ */ new et([""], 0);
function X4(t) {
  let e = -1;
  for (let n of t)
    e += n.length + 1;
  return e;
}
function Rr(t, e, n = 0, i = 1e9) {
  for (let s = 0, o = 0, r = !0; o < t.length && s <= i; o++) {
    let l = t[o], a = s + l.length;
    a >= n && (a > i && (l = l.slice(0, i - s)), s < n && (l = l.slice(n - s)), r ? (e[e.length - 1] += l, r = !1) : e.push(l)), s = a + 1;
  }
  return e;
}
function Cd(t, e, n) {
  return Rr(t, [""], e, n);
}
class mo {
  constructor(e, n = 1) {
    this.dir = n, this.done = !1, this.lineBreak = !1, this.value = "", this.nodes = [e], this.offsets = [n > 0 ? 1 : (e instanceof et ? e.text.length : e.children.length) << 1];
  }
  nextInner(e, n) {
    for (this.done = this.lineBreak = !1; ; ) {
      let i = this.nodes.length - 1, s = this.nodes[i], o = this.offsets[i], r = o >> 1, l = s instanceof et ? s.text.length : s.children.length;
      if (r == (n > 0 ? l : 0)) {
        if (i == 0)
          return this.done = !0, this.value = "", this;
        n > 0 && this.offsets[i - 1]++, this.nodes.pop(), this.offsets.pop();
      } else if ((o & 1) == (n > 0 ? 0 : 1)) {
        if (this.offsets[i] += n, e == 0)
          return this.lineBreak = !0, this.value = `
`, this;
        e--;
      } else if (s instanceof et) {
        let a = s.text[r + (n < 0 ? -1 : 0)];
        if (this.offsets[i] += n, a.length > Math.max(0, e))
          return this.value = e == 0 ? a : n > 0 ? a.slice(e) : a.slice(0, a.length - e), this;
        e -= a.length;
      } else {
        let a = s.children[r + (n < 0 ? -1 : 0)];
        e > a.length ? (e -= a.length, this.offsets[i] += n) : (n < 0 && this.offsets[i]--, this.nodes.push(a), this.offsets.push(n > 0 ? 1 : (a instanceof et ? a.text.length : a.children.length) << 1));
      }
    }
  }
  next(e = 0) {
    return e < 0 && (this.nextInner(-e, -this.dir), e = this.value.length), this.nextInner(e, this.dir);
  }
}
class Gg {
  constructor(e, n, i) {
    this.value = "", this.done = !1, this.cursor = new mo(e, n > i ? -1 : 1), this.pos = n > i ? e.length : 0, this.from = Math.min(n, i), this.to = Math.max(n, i);
  }
  nextInner(e, n) {
    if (n < 0 ? this.pos <= this.from : this.pos >= this.to)
      return this.value = "", this.done = !0, this;
    e += Math.max(0, n < 0 ? this.pos - this.to : this.from - this.pos);
    let i = n < 0 ? this.pos - this.from : this.to - this.pos;
    e > i && (e = i), i -= e;
    let { value: s } = this.cursor.next(e);
    return this.pos += (s.length + e) * n, this.value = s.length <= i ? s : n < 0 ? s.slice(s.length - i) : s.slice(0, i), this.done = !this.value, this;
  }
  next(e = 0) {
    return e < 0 ? e = Math.max(e, this.from - this.pos) : e > 0 && (e = Math.min(e, this.to - this.pos)), this.nextInner(e, this.cursor.dir);
  }
  get lineBreak() {
    return this.cursor.lineBreak && this.value != "";
  }
}
class jg {
  constructor(e) {
    this.inner = e, this.afterBreak = !0, this.value = "", this.done = !1;
  }
  next(e = 0) {
    let { done: n, lineBreak: i, value: s } = this.inner.next(e);
    return n && this.afterBreak ? (this.value = "", this.afterBreak = !1) : n ? (this.done = !0, this.value = "") : i ? this.afterBreak ? this.value = "" : (this.afterBreak = !0, this.next()) : (this.value = s, this.afterBreak = !1), this;
  }
  get lineBreak() {
    return !1;
  }
}
typeof Symbol < "u" && (Ae.prototype[Symbol.iterator] = function() {
  return this.iter();
}, mo.prototype[Symbol.iterator] = Gg.prototype[Symbol.iterator] = jg.prototype[Symbol.iterator] = function() {
  return this;
});
class Z4 {
  /**
  @internal
  */
  constructor(e, n, i, s) {
    this.from = e, this.to = n, this.number = i, this.text = s;
  }
  /**
  The length of the line (not including any line break after it).
  */
  get length() {
    return this.to - this.from;
  }
}
function Is(t, e, n) {
  return e = Math.max(0, Math.min(t.length, e)), [e, Math.max(e, Math.min(t.length, n))];
}
function Lt(t, e, n = !0, i = !0) {
  return Y4(t, e, n, i);
}
function Q4(t) {
  return t >= 56320 && t < 57344;
}
function eM(t) {
  return t >= 55296 && t < 56320;
}
function tM(t, e) {
  let n = t.charCodeAt(e);
  if (!eM(n) || e + 1 == t.length)
    return n;
  let i = t.charCodeAt(e + 1);
  return Q4(i) ? (n - 55296 << 10) + (i - 56320) + 65536 : n;
}
function nM(t) {
  return t < 65536 ? 1 : 2;
}
const ja = /\r\n?|\n/;
var Zt = /* @__PURE__ */ function(t) {
  return t[t.Simple = 0] = "Simple", t[t.TrackDel = 1] = "TrackDel", t[t.TrackBefore = 2] = "TrackBefore", t[t.TrackAfter = 3] = "TrackAfter", t;
}(Zt || (Zt = {}));
class jn {
  // Sections are encoded as pairs of integers. The first is the
  // length in the current document, and the second is -1 for
  // unaffected sections, and the length of the replacement content
  // otherwise. So an insertion would be (0, n>0), a deletion (n>0,
  // 0), and a replacement two positive numbers.
  /**
  @internal
  */
  constructor(e) {
    this.sections = e;
  }
  /**
  The length of the document before the change.
  */
  get length() {
    let e = 0;
    for (let n = 0; n < this.sections.length; n += 2)
      e += this.sections[n];
    return e;
  }
  /**
  The length of the document after the change.
  */
  get newLength() {
    let e = 0;
    for (let n = 0; n < this.sections.length; n += 2) {
      let i = this.sections[n + 1];
      e += i < 0 ? this.sections[n] : i;
    }
    return e;
  }
  /**
  False when there are actual changes in this set.
  */
  get empty() {
    return this.sections.length == 0 || this.sections.length == 2 && this.sections[1] < 0;
  }
  /**
  Iterate over the unchanged parts left by these changes. `posA`
  provides the position of the range in the old document, `posB`
  the new position in the changed document.
  */
  iterGaps(e) {
    for (let n = 0, i = 0, s = 0; n < this.sections.length; ) {
      let o = this.sections[n++], r = this.sections[n++];
      r < 0 ? (e(i, s, o), s += o) : s += r, i += o;
    }
  }
  /**
  Iterate over the ranges changed by these changes. (See
  [`ChangeSet.iterChanges`](https://codemirror.net/6/docs/ref/#state.ChangeSet.iterChanges) for a
  variant that also provides you with the inserted text.)
  `fromA`/`toA` provides the extent of the change in the starting
  document, `fromB`/`toB` the extent of the replacement in the
  changed document.
  
  When `individual` is true, adjacent changes (which are kept
  separate for [position mapping](https://codemirror.net/6/docs/ref/#state.ChangeDesc.mapPos)) are
  reported separately.
  */
  iterChangedRanges(e, n = !1) {
    Ka(this, e, n);
  }
  /**
  Get a description of the inverted form of these changes.
  */
  get invertedDesc() {
    let e = [];
    for (let n = 0; n < this.sections.length; ) {
      let i = this.sections[n++], s = this.sections[n++];
      s < 0 ? e.push(i, s) : e.push(s, i);
    }
    return new jn(e);
  }
  /**
  Compute the combined effect of applying another set of changes
  after this one. The length of the document after this set should
  match the length before `other`.
  */
  composeDesc(e) {
    return this.empty ? e : e.empty ? this : Kg(this, e);
  }
  /**
  Map this description, which should start with the same document
  as `other`, over another set of changes, so that it can be
  applied after it. When `before` is true, map as if the changes
  in `this` happened before the ones in `other`.
  */
  mapDesc(e, n = !1) {
    return e.empty ? this : Ua(this, e, n);
  }
  mapPos(e, n = -1, i = Zt.Simple) {
    let s = 0, o = 0;
    for (let r = 0; r < this.sections.length; ) {
      let l = this.sections[r++], a = this.sections[r++], c = s + l;
      if (a < 0) {
        if (c > e)
          return o + (e - s);
        o += l;
      } else {
        if (i != Zt.Simple && c >= e && (i == Zt.TrackDel && s < e && c > e || i == Zt.TrackBefore && s < e || i == Zt.TrackAfter && c > e))
          return null;
        if (c > e || c == e && n < 0 && !l)
          return e == s || n < 0 ? o : o + a;
        o += a;
      }
      s = c;
    }
    if (e > s)
      throw new RangeError(`Position ${e} is out of range for changeset of length ${s}`);
    return o;
  }
  /**
  Check whether these changes touch a given range. When one of the
  changes entirely covers the range, the string `"cover"` is
  returned.
  */
  touchesRange(e, n = e) {
    for (let i = 0, s = 0; i < this.sections.length && s <= n; ) {
      let o = this.sections[i++], r = this.sections[i++], l = s + o;
      if (r >= 0 && s <= n && l >= e)
        return s < e && l > n ? "cover" : !0;
      s = l;
    }
    return !1;
  }
  /**
  @internal
  */
  toString() {
    let e = "";
    for (let n = 0; n < this.sections.length; ) {
      let i = this.sections[n++], s = this.sections[n++];
      e += (e ? " " : "") + i + (s >= 0 ? ":" + s : "");
    }
    return e;
  }
  /**
  Serialize this change desc to a JSON-representable value.
  */
  toJSON() {
    return this.sections;
  }
  /**
  Create a change desc from its JSON representation (as produced
  by [`toJSON`](https://codemirror.net/6/docs/ref/#state.ChangeDesc.toJSON).
  */
  static fromJSON(e) {
    if (!Array.isArray(e) || e.length % 2 || e.some((n) => typeof n != "number"))
      throw new RangeError("Invalid JSON representation of ChangeDesc");
    return new jn(e);
  }
  /**
  @internal
  */
  static create(e) {
    return new jn(e);
  }
}
class ut extends jn {
  constructor(e, n) {
    super(e), this.inserted = n;
  }
  /**
  Apply the changes to a document, returning the modified
  document.
  */
  apply(e) {
    if (this.length != e.length)
      throw new RangeError("Applying change set to a document with the wrong length");
    return Ka(this, (n, i, s, o, r) => e = e.replace(s, s + (i - n), r), !1), e;
  }
  mapDesc(e, n = !1) {
    return Ua(this, e, n, !0);
  }
  /**
  Given the document as it existed _before_ the changes, return a
  change set that represents the inverse of this set, which could
  be used to go from the document created by the changes back to
  the document as it existed before the changes.
  */
  invert(e) {
    let n = this.sections.slice(), i = [];
    for (let s = 0, o = 0; s < n.length; s += 2) {
      let r = n[s], l = n[s + 1];
      if (l >= 0) {
        n[s] = l, n[s + 1] = r;
        let a = s >> 1;
        for (; i.length < a; )
          i.push(Ae.empty);
        i.push(r ? e.slice(o, o + r) : Ae.empty);
      }
      o += r;
    }
    return new ut(n, i);
  }
  /**
  Combine two subsequent change sets into a single set. `other`
  must start in the document produced by `this`. If `this` goes
  `docA` → `docB` and `other` represents `docB` → `docC`, the
  returned value will represent the change `docA` → `docC`.
  */
  compose(e) {
    return this.empty ? e : e.empty ? this : Kg(this, e, !0);
  }
  /**
  Given another change set starting in the same document, maps this
  change set over the other, producing a new change set that can be
  applied to the document produced by applying `other`. When
  `before` is `true`, order changes as if `this` comes before
  `other`, otherwise (the default) treat `other` as coming first.
  
  Given two changes `A` and `B`, `A.compose(B.map(A))` and
  `B.compose(A.map(B, true))` will produce the same document. This
  provides a basic form of [operational
  transformation](https://en.wikipedia.org/wiki/Operational_transformation),
  and can be used for collaborative editing.
  */
  map(e, n = !1) {
    return e.empty ? this : Ua(this, e, n, !0);
  }
  /**
  Iterate over the changed ranges in the document, calling `f` for
  each, with the range in the original document (`fromA`-`toA`)
  and the range that replaces it in the new document
  (`fromB`-`toB`).
  
  When `individual` is true, adjacent changes are reported
  separately.
  */
  iterChanges(e, n = !1) {
    Ka(this, e, n);
  }
  /**
  Get a [change description](https://codemirror.net/6/docs/ref/#state.ChangeDesc) for this change
  set.
  */
  get desc() {
    return jn.create(this.sections);
  }
  /**
  @internal
  */
  filter(e) {
    let n = [], i = [], s = [], o = new Mo(this);
    e: for (let r = 0, l = 0; ; ) {
      let a = r == e.length ? 1e9 : e[r++];
      for (; l < a || l == a && o.len == 0; ) {
        if (o.done)
          break e;
        let u = Math.min(o.len, a - l);
        Et(s, u, -1);
        let f = o.ins == -1 ? -1 : o.off == 0 ? o.ins : 0;
        Et(n, u, f), f > 0 && Mi(i, n, o.text), o.forward(u), l += u;
      }
      let c = e[r++];
      for (; l < c; ) {
        if (o.done)
          break e;
        let u = Math.min(o.len, c - l);
        Et(n, u, -1), Et(s, u, o.ins == -1 ? -1 : o.off == 0 ? o.ins : 0), o.forward(u), l += u;
      }
    }
    return {
      changes: new ut(n, i),
      filtered: jn.create(s)
    };
  }
  /**
  Serialize this change set to a JSON-representable value.
  */
  toJSON() {
    let e = [];
    for (let n = 0; n < this.sections.length; n += 2) {
      let i = this.sections[n], s = this.sections[n + 1];
      s < 0 ? e.push(i) : s == 0 ? e.push([i]) : e.push([i].concat(this.inserted[n >> 1].toJSON()));
    }
    return e;
  }
  /**
  Create a change set for the given changes, for a document of the
  given length, using `lineSep` as line separator.
  */
  static of(e, n, i) {
    let s = [], o = [], r = 0, l = null;
    function a(u = !1) {
      if (!u && !s.length)
        return;
      r < n && Et(s, n - r, -1);
      let f = new ut(s, o);
      l = l ? l.compose(f.map(l)) : f, s = [], o = [], r = 0;
    }
    function c(u) {
      if (Array.isArray(u))
        for (let f of u)
          c(f);
      else if (u instanceof ut) {
        if (u.length != n)
          throw new RangeError(`Mismatched change set length (got ${u.length}, expected ${n})`);
        a(), l = l ? l.compose(u.map(l)) : u;
      } else {
        let { from: f, to: d = f, insert: h } = u;
        if (f > d || f < 0 || d > n)
          throw new RangeError(`Invalid change range ${f} to ${d} (in doc of length ${n})`);
        let g = h ? typeof h == "string" ? Ae.of(h.split(i || ja)) : h : Ae.empty, m = g.length;
        if (f == d && m == 0)
          return;
        f < r && a(), f > r && Et(s, f - r, -1), Et(s, d - f, m), Mi(o, s, g), r = d;
      }
    }
    return c(e), a(!l), l;
  }
  /**
  Create an empty changeset of the given length.
  */
  static empty(e) {
    return new ut(e ? [e, -1] : [], []);
  }
  /**
  Create a changeset from its JSON representation (as produced by
  [`toJSON`](https://codemirror.net/6/docs/ref/#state.ChangeSet.toJSON).
  */
  static fromJSON(e) {
    if (!Array.isArray(e))
      throw new RangeError("Invalid JSON representation of ChangeSet");
    let n = [], i = [];
    for (let s = 0; s < e.length; s++) {
      let o = e[s];
      if (typeof o == "number")
        n.push(o, -1);
      else {
        if (!Array.isArray(o) || typeof o[0] != "number" || o.some((r, l) => l && typeof r != "string"))
          throw new RangeError("Invalid JSON representation of ChangeSet");
        if (o.length == 1)
          n.push(o[0], 0);
        else {
          for (; i.length < s; )
            i.push(Ae.empty);
          i[s] = Ae.of(o.slice(1)), n.push(o[0], i[s].length);
        }
      }
    }
    return new ut(n, i);
  }
  /**
  @internal
  */
  static createSet(e, n) {
    return new ut(e, n);
  }
}
function Et(t, e, n, i = !1) {
  if (e == 0 && n <= 0)
    return;
  let s = t.length - 2;
  s >= 0 && n <= 0 && n == t[s + 1] ? t[s] += e : s >= 0 && e == 0 && t[s] == 0 ? t[s + 1] += n : i ? (t[s] += e, t[s + 1] += n) : t.push(e, n);
}
function Mi(t, e, n) {
  if (n.length == 0)
    return;
  let i = e.length - 2 >> 1;
  if (i < t.length)
    t[t.length - 1] = t[t.length - 1].append(n);
  else {
    for (; t.length < i; )
      t.push(Ae.empty);
    t.push(n);
  }
}
function Ka(t, e, n) {
  let i = t.inserted;
  for (let s = 0, o = 0, r = 0; r < t.sections.length; ) {
    let l = t.sections[r++], a = t.sections[r++];
    if (a < 0)
      s += l, o += l;
    else {
      let c = s, u = o, f = Ae.empty;
      for (; c += l, u += a, a && i && (f = f.append(i[r - 2 >> 1])), !(n || r == t.sections.length || t.sections[r + 1] < 0); )
        l = t.sections[r++], a = t.sections[r++];
      e(s, c, o, u, f), s = c, o = u;
    }
  }
}
function Ua(t, e, n, i = !1) {
  let s = [], o = i ? [] : null, r = new Mo(t), l = new Mo(e);
  for (let a = -1; ; ) {
    if (r.done && l.len || l.done && r.len)
      throw new Error("Mismatched change set lengths");
    if (r.ins == -1 && l.ins == -1) {
      let c = Math.min(r.len, l.len);
      Et(s, c, -1), r.forward(c), l.forward(c);
    } else if (l.ins >= 0 && (r.ins < 0 || a == r.i || r.off == 0 && (l.len < r.len || l.len == r.len && !n))) {
      let c = l.len;
      for (Et(s, l.ins, -1); c; ) {
        let u = Math.min(r.len, c);
        r.ins >= 0 && a < r.i && r.len <= u && (Et(s, 0, r.ins), o && Mi(o, s, r.text), a = r.i), r.forward(u), c -= u;
      }
      l.next();
    } else if (r.ins >= 0) {
      let c = 0, u = r.len;
      for (; u; )
        if (l.ins == -1) {
          let f = Math.min(u, l.len);
          c += f, u -= f, l.forward(f);
        } else if (l.ins == 0 && l.len < u)
          u -= l.len, l.next();
        else
          break;
      Et(s, c, a < r.i ? r.ins : 0), o && a < r.i && Mi(o, s, r.text), a = r.i, r.forward(r.len - u);
    } else {
      if (r.done && l.done)
        return o ? ut.createSet(s, o) : jn.create(s);
      throw new Error("Mismatched change set lengths");
    }
  }
}
function Kg(t, e, n = !1) {
  let i = [], s = n ? [] : null, o = new Mo(t), r = new Mo(e);
  for (let l = !1; ; ) {
    if (o.done && r.done)
      return s ? ut.createSet(i, s) : jn.create(i);
    if (o.ins == 0)
      Et(i, o.len, 0, l), o.next();
    else if (r.len == 0 && !r.done)
      Et(i, 0, r.ins, l), s && Mi(s, i, r.text), r.next();
    else {
      if (o.done || r.done)
        throw new Error("Mismatched change set lengths");
      {
        let a = Math.min(o.len2, r.len), c = i.length;
        if (o.ins == -1) {
          let u = r.ins == -1 ? -1 : r.off ? 0 : r.ins;
          Et(i, a, u, l), s && u && Mi(s, i, r.text);
        } else r.ins == -1 ? (Et(i, o.off ? 0 : o.len, a, l), s && Mi(s, i, o.textBit(a))) : (Et(i, o.off ? 0 : o.len, r.off ? 0 : r.ins, l), s && !r.off && Mi(s, i, r.text));
        l = (o.ins > a || r.ins >= 0 && r.len > a) && (l || i.length > c), o.forward2(a), r.forward(a);
      }
    }
  }
}
class Mo {
  constructor(e) {
    this.set = e, this.i = 0, this.next();
  }
  next() {
    let { sections: e } = this.set;
    this.i < e.length ? (this.len = e[this.i++], this.ins = e[this.i++]) : (this.len = 0, this.ins = -2), this.off = 0;
  }
  get done() {
    return this.ins == -2;
  }
  get len2() {
    return this.ins < 0 ? this.len : this.ins;
  }
  get text() {
    let { inserted: e } = this.set, n = this.i - 2 >> 1;
    return n >= e.length ? Ae.empty : e[n];
  }
  textBit(e) {
    let { inserted: n } = this.set, i = this.i - 2 >> 1;
    return i >= n.length && !e ? Ae.empty : n[i].slice(this.off, e == null ? void 0 : this.off + e);
  }
  forward(e) {
    e == this.len ? this.next() : (this.len -= e, this.off += e);
  }
  forward2(e) {
    this.ins == -1 ? this.forward(e) : e == this.ins ? this.next() : (this.ins -= e, this.off += e);
  }
}
class Zi {
  constructor(e, n, i) {
    this.from = e, this.to = n, this.flags = i;
  }
  /**
  The anchor of the range—the side that doesn't move when you
  extend it.
  */
  get anchor() {
    return this.flags & 32 ? this.to : this.from;
  }
  /**
  The head of the range, which is moved when the range is
  [extended](https://codemirror.net/6/docs/ref/#state.SelectionRange.extend).
  */
  get head() {
    return this.flags & 32 ? this.from : this.to;
  }
  /**
  True when `anchor` and `head` are at the same position.
  */
  get empty() {
    return this.from == this.to;
  }
  /**
  If this is a cursor that is explicitly associated with the
  character on one of its sides, this returns the side. -1 means
  the character before its position, 1 the character after, and 0
  means no association.
  */
  get assoc() {
    return this.flags & 8 ? -1 : this.flags & 16 ? 1 : 0;
  }
  /**
  The bidirectional text level associated with this cursor, if
  any.
  */
  get bidiLevel() {
    let e = this.flags & 7;
    return e == 7 ? null : e;
  }
  /**
  The goal column (stored vertical offset) associated with a
  cursor. This is used to preserve the vertical position when
  [moving](https://codemirror.net/6/docs/ref/#view.EditorView.moveVertically) across
  lines of different length.
  */
  get goalColumn() {
    let e = this.flags >> 6;
    return e == 16777215 ? void 0 : e;
  }
  /**
  Map this range through a change, producing a valid range in the
  updated document.
  */
  map(e, n = -1) {
    let i, s;
    return this.empty ? i = s = e.mapPos(this.from, n) : (i = e.mapPos(this.from, 1), s = e.mapPos(this.to, -1)), i == this.from && s == this.to ? this : new Zi(i, s, this.flags);
  }
  /**
  Extend this range to cover at least `from` to `to`.
  */
  extend(e, n = e) {
    if (e <= this.anchor && n >= this.anchor)
      return Y.range(e, n);
    let i = Math.abs(e - this.anchor) > Math.abs(n - this.anchor) ? e : n;
    return Y.range(this.anchor, i);
  }
  /**
  Compare this range to another range.
  */
  eq(e, n = !1) {
    return this.anchor == e.anchor && this.head == e.head && (!n || !this.empty || this.assoc == e.assoc);
  }
  /**
  Return a JSON-serializable object representing the range.
  */
  toJSON() {
    return { anchor: this.anchor, head: this.head };
  }
  /**
  Convert a JSON representation of a range to a `SelectionRange`
  instance.
  */
  static fromJSON(e) {
    if (!e || typeof e.anchor != "number" || typeof e.head != "number")
      throw new RangeError("Invalid JSON representation for SelectionRange");
    return Y.range(e.anchor, e.head);
  }
  /**
  @internal
  */
  static create(e, n, i) {
    return new Zi(e, n, i);
  }
}
class Y {
  constructor(e, n) {
    this.ranges = e, this.mainIndex = n;
  }
  /**
  Map a selection through a change. Used to adjust the selection
  position for changes.
  */
  map(e, n = -1) {
    return e.empty ? this : Y.create(this.ranges.map((i) => i.map(e, n)), this.mainIndex);
  }
  /**
  Compare this selection to another selection. By default, ranges
  are compared only by position. When `includeAssoc` is true,
  cursor ranges must also have the same
  [`assoc`](https://codemirror.net/6/docs/ref/#state.SelectionRange.assoc) value.
  */
  eq(e, n = !1) {
    if (this.ranges.length != e.ranges.length || this.mainIndex != e.mainIndex)
      return !1;
    for (let i = 0; i < this.ranges.length; i++)
      if (!this.ranges[i].eq(e.ranges[i], n))
        return !1;
    return !0;
  }
  /**
  Get the primary selection range. Usually, you should make sure
  your code applies to _all_ ranges, by using methods like
  [`changeByRange`](https://codemirror.net/6/docs/ref/#state.EditorState.changeByRange).
  */
  get main() {
    return this.ranges[this.mainIndex];
  }
  /**
  Make sure the selection only has one range. Returns a selection
  holding only the main range from this selection.
  */
  asSingle() {
    return this.ranges.length == 1 ? this : new Y([this.main], 0);
  }
  /**
  Extend this selection with an extra range.
  */
  addRange(e, n = !0) {
    return Y.create([e].concat(this.ranges), n ? 0 : this.mainIndex + 1);
  }
  /**
  Replace a given range with another range, and then normalize the
  selection to merge and sort ranges if necessary.
  */
  replaceRange(e, n = this.mainIndex) {
    let i = this.ranges.slice();
    return i[n] = e, Y.create(i, this.mainIndex);
  }
  /**
  Convert this selection to an object that can be serialized to
  JSON.
  */
  toJSON() {
    return { ranges: this.ranges.map((e) => e.toJSON()), main: this.mainIndex };
  }
  /**
  Create a selection from a JSON representation.
  */
  static fromJSON(e) {
    if (!e || !Array.isArray(e.ranges) || typeof e.main != "number" || e.main >= e.ranges.length)
      throw new RangeError("Invalid JSON representation for EditorSelection");
    return new Y(e.ranges.map((n) => Zi.fromJSON(n)), e.main);
  }
  /**
  Create a selection holding a single range.
  */
  static single(e, n = e) {
    return new Y([Y.range(e, n)], 0);
  }
  /**
  Sort and merge the given set of ranges, creating a valid
  selection.
  */
  static create(e, n = 0) {
    if (e.length == 0)
      throw new RangeError("A selection needs at least one range");
    for (let i = 0, s = 0; s < e.length; s++) {
      let o = e[s];
      if (o.empty ? o.from <= i : o.from < i)
        return Y.normalized(e.slice(), n);
      i = o.to;
    }
    return new Y(e, n);
  }
  /**
  Create a cursor selection range at the given position. You can
  safely ignore the optional arguments in most situations.
  */
  static cursor(e, n = 0, i, s) {
    return Zi.create(e, e, (n == 0 ? 0 : n < 0 ? 8 : 16) | (i == null ? 7 : Math.min(6, i)) | (s ?? 16777215) << 6);
  }
  /**
  Create a selection range.
  */
  static range(e, n, i, s) {
    let o = (i ?? 16777215) << 6 | (s == null ? 7 : Math.min(6, s));
    return n < e ? Zi.create(n, e, 48 | o) : Zi.create(e, n, (n > e ? 8 : 0) | o);
  }
  /**
  @internal
  */
  static normalized(e, n = 0) {
    let i = e[n];
    e.sort((s, o) => s.from - o.from), n = e.indexOf(i);
    for (let s = 1; s < e.length; s++) {
      let o = e[s], r = e[s - 1];
      if (o.empty ? o.from <= r.to : o.from < r.to) {
        let l = r.from, a = Math.max(o.to, r.to);
        s <= n && n--, e.splice(--s, 2, o.anchor > o.head ? Y.range(a, l) : Y.range(l, a));
      }
    }
    return new Y(e, n);
  }
}
function Ug(t, e) {
  for (let n of t.ranges)
    if (n.to > e)
      throw new RangeError("Selection points outside of document");
}
let Su = 0;
class ue {
  constructor(e, n, i, s, o) {
    this.combine = e, this.compareInput = n, this.compare = i, this.isStatic = s, this.id = Su++, this.default = e([]), this.extensions = typeof o == "function" ? o(this) : o;
  }
  /**
  Returns a facet reader for this facet, which can be used to
  [read](https://codemirror.net/6/docs/ref/#state.EditorState.facet) it but not to define values for it.
  */
  get reader() {
    return this;
  }
  /**
  Define a new facet.
  */
  static define(e = {}) {
    return new ue(e.combine || ((n) => n), e.compareInput || ((n, i) => n === i), e.compare || (e.combine ? (n, i) => n === i : Cu), !!e.static, e.enables);
  }
  /**
  Returns an extension that adds the given value to this facet.
  */
  of(e) {
    return new Lr([], this, 0, e);
  }
  /**
  Create an extension that computes a value for the facet from a
  state. You must take care to declare the parts of the state that
  this value depends on, since your function is only called again
  for a new state when one of those parts changed.
  
  In cases where your value depends only on a single field, you'll
  want to use the [`from`](https://codemirror.net/6/docs/ref/#state.Facet.from) method instead.
  */
  compute(e, n) {
    if (this.isStatic)
      throw new Error("Can't compute a static facet");
    return new Lr(e, this, 1, n);
  }
  /**
  Create an extension that computes zero or more values for this
  facet from a state.
  */
  computeN(e, n) {
    if (this.isStatic)
      throw new Error("Can't compute a static facet");
    return new Lr(e, this, 2, n);
  }
  from(e, n) {
    return n || (n = (i) => i), this.compute([e], (i) => n(i.field(e)));
  }
}
function Cu(t, e) {
  return t == e || t.length == e.length && t.every((n, i) => n === e[i]);
}
class Lr {
  constructor(e, n, i, s) {
    this.dependencies = e, this.facet = n, this.type = i, this.value = s, this.id = Su++;
  }
  dynamicSlot(e) {
    var n;
    let i = this.value, s = this.facet.compareInput, o = this.id, r = e[o] >> 1, l = this.type == 2, a = !1, c = !1, u = [];
    for (let f of this.dependencies)
      f == "doc" ? a = !0 : f == "selection" ? c = !0 : (((n = e[f.id]) !== null && n !== void 0 ? n : 1) & 1) == 0 && u.push(e[f.id]);
    return {
      create(f) {
        return f.values[r] = i(f), 1;
      },
      update(f, d) {
        if (a && d.docChanged || c && (d.docChanged || d.selection) || qa(f, u)) {
          let h = i(f);
          if (l ? !kd(h, f.values[r], s) : !s(h, f.values[r]))
            return f.values[r] = h, 1;
        }
        return 0;
      },
      reconfigure: (f, d) => {
        let h, g = d.config.address[o];
        if (g != null) {
          let m = nl(d, g);
          if (this.dependencies.every((y) => y instanceof ue ? d.facet(y) === f.facet(y) : y instanceof Hi ? d.field(y, !1) == f.field(y, !1) : !0) || (l ? kd(h = i(f), m, s) : s(h = i(f), m)))
            return f.values[r] = m, 0;
        } else
          h = i(f);
        return f.values[r] = h, 1;
      }
    };
  }
}
function kd(t, e, n) {
  if (t.length != e.length)
    return !1;
  for (let i = 0; i < t.length; i++)
    if (!n(t[i], e[i]))
      return !1;
  return !0;
}
function qa(t, e) {
  let n = !1;
  for (let i of e)
    vo(t, i) & 1 && (n = !0);
  return n;
}
function iM(t, e, n) {
  let i = n.map((a) => t[a.id]), s = n.map((a) => a.type), o = i.filter((a) => !(a & 1)), r = t[e.id] >> 1;
  function l(a) {
    let c = [];
    for (let u = 0; u < i.length; u++) {
      let f = nl(a, i[u]);
      if (s[u] == 2)
        for (let d of f)
          c.push(d);
      else
        c.push(f);
    }
    return e.combine(c);
  }
  return {
    create(a) {
      for (let c of i)
        vo(a, c);
      return a.values[r] = l(a), 1;
    },
    update(a, c) {
      if (!qa(a, o))
        return 0;
      let u = l(a);
      return e.compare(u, a.values[r]) ? 0 : (a.values[r] = u, 1);
    },
    reconfigure(a, c) {
      let u = qa(a, i), f = c.config.facets[e.id], d = c.facet(e);
      if (f && !u && Cu(n, f))
        return a.values[r] = d, 0;
      let h = l(a);
      return e.compare(h, d) ? (a.values[r] = d, 0) : (a.values[r] = h, 1);
    }
  };
}
const cr = /* @__PURE__ */ ue.define({ static: !0 });
class Hi {
  constructor(e, n, i, s, o) {
    this.id = e, this.createF = n, this.updateF = i, this.compareF = s, this.spec = o, this.provides = void 0;
  }
  /**
  Define a state field.
  */
  static define(e) {
    let n = new Hi(Su++, e.create, e.update, e.compare || ((i, s) => i === s), e);
    return e.provide && (n.provides = e.provide(n)), n;
  }
  create(e) {
    let n = e.facet(cr).find((i) => i.field == this);
    return (n?.create || this.createF)(e);
  }
  /**
  @internal
  */
  slot(e) {
    let n = e[this.id] >> 1;
    return {
      create: (i) => (i.values[n] = this.create(i), 1),
      update: (i, s) => {
        let o = i.values[n], r = this.updateF(o, s);
        return this.compareF(o, r) ? 0 : (i.values[n] = r, 1);
      },
      reconfigure: (i, s) => {
        let o = i.facet(cr), r = s.facet(cr), l;
        return (l = o.find((a) => a.field == this)) && l != r.find((a) => a.field == this) ? (i.values[n] = l.create(i), 1) : s.config.address[this.id] != null ? (i.values[n] = s.field(this), 0) : (i.values[n] = this.create(i), 1);
      }
    };
  }
  /**
  Returns an extension that enables this field and overrides the
  way it is initialized. Can be useful when you need to provide a
  non-default starting value for the field.
  */
  init(e) {
    return [this, cr.of({ field: this, create: e })];
  }
  /**
  State field instances can be used as
  [`Extension`](https://codemirror.net/6/docs/ref/#state.Extension) values to enable the field in a
  given state.
  */
  get extension() {
    return this;
  }
}
const qi = { lowest: 4, low: 3, default: 2, high: 1, highest: 0 };
function Ys(t) {
  return (e) => new qg(e, t);
}
const ku = {
  /**
  The highest precedence level, for extensions that should end up
  near the start of the precedence ordering.
  */
  highest: /* @__PURE__ */ Ys(qi.highest),
  /**
  A higher-than-default precedence, for extensions that should
  come before those with default precedence.
  */
  high: /* @__PURE__ */ Ys(qi.high),
  /**
  The default precedence, which is also used for extensions
  without an explicit precedence.
  */
  default: /* @__PURE__ */ Ys(qi.default),
  /**
  A lower-than-default precedence.
  */
  low: /* @__PURE__ */ Ys(qi.low),
  /**
  The lowest precedence level. Meant for things that should end up
  near the end of the extension order.
  */
  lowest: /* @__PURE__ */ Ys(qi.lowest)
};
class qg {
  constructor(e, n) {
    this.inner = e, this.prec = n;
  }
}
class Rl {
  /**
  Create an instance of this compartment to add to your [state
  configuration](https://codemirror.net/6/docs/ref/#state.EditorStateConfig.extensions).
  */
  of(e) {
    return new Ya(this, e);
  }
  /**
  Create an [effect](https://codemirror.net/6/docs/ref/#state.TransactionSpec.effects) that
  reconfigures this compartment.
  */
  reconfigure(e) {
    return Rl.reconfigure.of({ compartment: this, extension: e });
  }
  /**
  Get the current content of the compartment in the state, or
  `undefined` if it isn't present.
  */
  get(e) {
    return e.config.compartments.get(this);
  }
}
class Ya {
  constructor(e, n) {
    this.compartment = e, this.inner = n;
  }
}
class tl {
  constructor(e, n, i, s, o, r) {
    for (this.base = e, this.compartments = n, this.dynamicSlots = i, this.address = s, this.staticValues = o, this.facets = r, this.statusTemplate = []; this.statusTemplate.length < i.length; )
      this.statusTemplate.push(
        0
        /* SlotStatus.Unresolved */
      );
  }
  staticFacet(e) {
    let n = this.address[e.id];
    return n == null ? e.default : this.staticValues[n >> 1];
  }
  static resolve(e, n, i) {
    let s = [], o = /* @__PURE__ */ Object.create(null), r = /* @__PURE__ */ new Map();
    for (let d of sM(e, n, r))
      d instanceof Hi ? s.push(d) : (o[d.facet.id] || (o[d.facet.id] = [])).push(d);
    let l = /* @__PURE__ */ Object.create(null), a = [], c = [];
    for (let d of s)
      l[d.id] = c.length << 1, c.push((h) => d.slot(h));
    let u = i?.config.facets;
    for (let d in o) {
      let h = o[d], g = h[0].facet, m = u && u[d] || [];
      if (h.every(
        (y) => y.type == 0
        /* Provider.Static */
      ))
        if (l[g.id] = a.length << 1 | 1, Cu(m, h))
          a.push(i.facet(g));
        else {
          let y = g.combine(h.map((v) => v.value));
          a.push(i && g.compare(y, i.facet(g)) ? i.facet(g) : y);
        }
      else {
        for (let y of h)
          y.type == 0 ? (l[y.id] = a.length << 1 | 1, a.push(y.value)) : (l[y.id] = c.length << 1, c.push((v) => y.dynamicSlot(v)));
        l[g.id] = c.length << 1, c.push((y) => iM(y, g, h));
      }
    }
    let f = c.map((d) => d(l));
    return new tl(e, r, f, l, a, o);
  }
}
function sM(t, e, n) {
  let i = [[], [], [], [], []], s = /* @__PURE__ */ new Map();
  function o(r, l) {
    let a = s.get(r);
    if (a != null) {
      if (a <= l)
        return;
      let c = i[a].indexOf(r);
      c > -1 && i[a].splice(c, 1), r instanceof Ya && n.delete(r.compartment);
    }
    if (s.set(r, l), Array.isArray(r))
      for (let c of r)
        o(c, l);
    else if (r instanceof Ya) {
      if (n.has(r.compartment))
        throw new RangeError("Duplicate use of compartment in extensions");
      let c = e.get(r.compartment) || r.inner;
      n.set(r.compartment, c), o(c, l);
    } else if (r instanceof qg)
      o(r.inner, r.prec);
    else if (r instanceof Hi)
      i[l].push(r), r.provides && o(r.provides, l);
    else if (r instanceof Lr)
      i[l].push(r), r.facet.extensions && o(r.facet.extensions, qi.default);
    else {
      let c = r.extension;
      if (!c)
        throw new Error(`Unrecognized extension value in extension set (${r}). This sometimes happens because multiple instances of @codemirror/state are loaded, breaking instanceof checks.`);
      o(c, l);
    }
  }
  return o(t, qi.default), i.reduce((r, l) => r.concat(l));
}
function vo(t, e) {
  if (e & 1)
    return 2;
  let n = e >> 1, i = t.status[n];
  if (i == 4)
    throw new Error("Cyclic dependency between fields and/or facets");
  if (i & 2)
    return i;
  t.status[n] = 4;
  let s = t.computeSlot(t, t.config.dynamicSlots[n]);
  return t.status[n] = 2 | s;
}
function nl(t, e) {
  return e & 1 ? t.config.staticValues[e >> 1] : t.values[e >> 1];
}
const Yg = /* @__PURE__ */ ue.define(), Ja = /* @__PURE__ */ ue.define({
  combine: (t) => t.some((e) => e),
  static: !0
}), Jg = /* @__PURE__ */ ue.define({
  combine: (t) => t.length ? t[0] : void 0,
  static: !0
}), Xg = /* @__PURE__ */ ue.define(), Zg = /* @__PURE__ */ ue.define(), Qg = /* @__PURE__ */ ue.define(), em = /* @__PURE__ */ ue.define({
  combine: (t) => t.length ? t[0] : !1
});
class Wi {
  /**
  @internal
  */
  constructor(e, n) {
    this.type = e, this.value = n;
  }
  /**
  Define a new type of annotation.
  */
  static define() {
    return new oM();
  }
}
class oM {
  /**
  Create an instance of this annotation.
  */
  of(e) {
    return new Wi(this, e);
  }
}
class rM {
  /**
  @internal
  */
  constructor(e) {
    this.map = e;
  }
  /**
  Create a [state effect](https://codemirror.net/6/docs/ref/#state.StateEffect) instance of this
  type.
  */
  of(e) {
    return new nt(this, e);
  }
}
class nt {
  /**
  @internal
  */
  constructor(e, n) {
    this.type = e, this.value = n;
  }
  /**
  Map this effect through a position mapping. Will return
  `undefined` when that ends up deleting the effect.
  */
  map(e) {
    let n = this.type.map(this.value, e);
    return n === void 0 ? void 0 : n == this.value ? this : new nt(this.type, n);
  }
  /**
  Tells you whether this effect object is of a given
  [type](https://codemirror.net/6/docs/ref/#state.StateEffectType).
  */
  is(e) {
    return this.type == e;
  }
  /**
  Define a new effect type. The type parameter indicates the type
  of values that his effect holds. It should be a type that
  doesn't include `undefined`, since that is used in
  [mapping](https://codemirror.net/6/docs/ref/#state.StateEffect.map) to indicate that an effect is
  removed.
  */
  static define(e = {}) {
    return new rM(e.map || ((n) => n));
  }
  /**
  Map an array of effects through a change set.
  */
  static mapEffects(e, n) {
    if (!e.length)
      return e;
    let i = [];
    for (let s of e) {
      let o = s.map(n);
      o && i.push(o);
    }
    return i;
  }
}
nt.reconfigure = /* @__PURE__ */ nt.define();
nt.appendConfig = /* @__PURE__ */ nt.define();
class dt {
  constructor(e, n, i, s, o, r) {
    this.startState = e, this.changes = n, this.selection = i, this.effects = s, this.annotations = o, this.scrollIntoView = r, this._doc = null, this._state = null, i && Ug(i, n.newLength), o.some((l) => l.type == dt.time) || (this.annotations = o.concat(dt.time.of(Date.now())));
  }
  /**
  @internal
  */
  static create(e, n, i, s, o, r) {
    return new dt(e, n, i, s, o, r);
  }
  /**
  The new document produced by the transaction. Contrary to
  [`.state`](https://codemirror.net/6/docs/ref/#state.Transaction.state)`.doc`, accessing this won't
  force the entire new state to be computed right away, so it is
  recommended that [transaction
  filters](https://codemirror.net/6/docs/ref/#state.EditorState^transactionFilter) use this getter
  when they need to look at the new document.
  */
  get newDoc() {
    return this._doc || (this._doc = this.changes.apply(this.startState.doc));
  }
  /**
  The new selection produced by the transaction. If
  [`this.selection`](https://codemirror.net/6/docs/ref/#state.Transaction.selection) is undefined,
  this will [map](https://codemirror.net/6/docs/ref/#state.EditorSelection.map) the start state's
  current selection through the changes made by the transaction.
  */
  get newSelection() {
    return this.selection || this.startState.selection.map(this.changes);
  }
  /**
  The new state created by the transaction. Computed on demand
  (but retained for subsequent access), so it is recommended not to
  access it in [transaction
  filters](https://codemirror.net/6/docs/ref/#state.EditorState^transactionFilter) when possible.
  */
  get state() {
    return this._state || this.startState.applyTransaction(this), this._state;
  }
  /**
  Get the value of the given annotation type, if any.
  */
  annotation(e) {
    for (let n of this.annotations)
      if (n.type == e)
        return n.value;
  }
  /**
  Indicates whether the transaction changed the document.
  */
  get docChanged() {
    return !this.changes.empty;
  }
  /**
  Indicates whether this transaction reconfigures the state
  (through a [configuration compartment](https://codemirror.net/6/docs/ref/#state.Compartment) or
  with a top-level configuration
  [effect](https://codemirror.net/6/docs/ref/#state.StateEffect^reconfigure).
  */
  get reconfigured() {
    return this.startState.config != this.state.config;
  }
  /**
  Returns true if the transaction has a [user
  event](https://codemirror.net/6/docs/ref/#state.Transaction^userEvent) annotation that is equal to
  or more specific than `event`. For example, if the transaction
  has `"select.pointer"` as user event, `"select"` and
  `"select.pointer"` will match it.
  */
  isUserEvent(e) {
    let n = this.annotation(dt.userEvent);
    return !!(n && (n == e || n.length > e.length && n.slice(0, e.length) == e && n[e.length] == "."));
  }
}
dt.time = /* @__PURE__ */ Wi.define();
dt.userEvent = /* @__PURE__ */ Wi.define();
dt.addToHistory = /* @__PURE__ */ Wi.define();
dt.remote = /* @__PURE__ */ Wi.define();
function lM(t, e) {
  let n = [];
  for (let i = 0, s = 0; ; ) {
    let o, r;
    if (i < t.length && (s == e.length || e[s] >= t[i]))
      o = t[i++], r = t[i++];
    else if (s < e.length)
      o = e[s++], r = e[s++];
    else
      return n;
    !n.length || n[n.length - 1] < o ? n.push(o, r) : n[n.length - 1] < r && (n[n.length - 1] = r);
  }
}
function tm(t, e, n) {
  var i;
  let s, o, r;
  return n ? (s = e.changes, o = ut.empty(e.changes.length), r = t.changes.compose(e.changes)) : (s = e.changes.map(t.changes), o = t.changes.mapDesc(e.changes, !0), r = t.changes.compose(s)), {
    changes: r,
    selection: e.selection ? e.selection.map(o) : (i = t.selection) === null || i === void 0 ? void 0 : i.map(s),
    effects: nt.mapEffects(t.effects, s).concat(nt.mapEffects(e.effects, o)),
    annotations: t.annotations.length ? t.annotations.concat(e.annotations) : e.annotations,
    scrollIntoView: t.scrollIntoView || e.scrollIntoView
  };
}
function Xa(t, e, n) {
  let i = e.selection, s = Cs(e.annotations);
  return e.userEvent && (s = s.concat(dt.userEvent.of(e.userEvent))), {
    changes: e.changes instanceof ut ? e.changes : ut.of(e.changes || [], n, t.facet(Jg)),
    selection: i && (i instanceof Y ? i : Y.single(i.anchor, i.head)),
    effects: Cs(e.effects),
    annotations: s,
    scrollIntoView: !!e.scrollIntoView
  };
}
function nm(t, e, n) {
  let i = Xa(t, e.length ? e[0] : {}, t.doc.length);
  e.length && e[0].filter === !1 && (n = !1);
  for (let o = 1; o < e.length; o++) {
    e[o].filter === !1 && (n = !1);
    let r = !!e[o].sequential;
    i = tm(i, Xa(t, e[o], r ? i.changes.newLength : t.doc.length), r);
  }
  let s = dt.create(t, i.changes, i.selection, i.effects, i.annotations, i.scrollIntoView);
  return cM(n ? aM(s) : s);
}
function aM(t) {
  let e = t.startState, n = !0;
  for (let s of e.facet(Xg)) {
    let o = s(t);
    if (o === !1) {
      n = !1;
      break;
    }
    Array.isArray(o) && (n = n === !0 ? o : lM(n, o));
  }
  if (n !== !0) {
    let s, o;
    if (n === !1)
      o = t.changes.invertedDesc, s = ut.empty(e.doc.length);
    else {
      let r = t.changes.filter(n);
      s = r.changes, o = r.filtered.mapDesc(r.changes).invertedDesc;
    }
    t = dt.create(e, s, t.selection && t.selection.map(o), nt.mapEffects(t.effects, o), t.annotations, t.scrollIntoView);
  }
  let i = e.facet(Zg);
  for (let s = i.length - 1; s >= 0; s--) {
    let o = i[s](t);
    o instanceof dt ? t = o : Array.isArray(o) && o.length == 1 && o[0] instanceof dt ? t = o[0] : t = nm(e, Cs(o), !1);
  }
  return t;
}
function cM(t) {
  let e = t.startState, n = e.facet(Qg), i = t;
  for (let s = n.length - 1; s >= 0; s--) {
    let o = n[s](t);
    o && Object.keys(o).length && (i = tm(i, Xa(e, o, t.changes.newLength), !0));
  }
  return i == t ? t : dt.create(e, t.changes, t.selection, i.effects, i.annotations, i.scrollIntoView);
}
const uM = [];
function Cs(t) {
  return t == null ? uM : Array.isArray(t) ? t : [t];
}
var li = /* @__PURE__ */ function(t) {
  return t[t.Word = 0] = "Word", t[t.Space = 1] = "Space", t[t.Other = 2] = "Other", t;
}(li || (li = {}));
const fM = /[\u00df\u0587\u0590-\u05f4\u0600-\u06ff\u3040-\u309f\u30a0-\u30ff\u3400-\u4db5\u4e00-\u9fcc\uac00-\ud7af]/;
let Za;
try {
  Za = /* @__PURE__ */ new RegExp("[\\p{Alphabetic}\\p{Number}_]", "u");
} catch {
}
function dM(t) {
  if (Za)
    return Za.test(t);
  for (let e = 0; e < t.length; e++) {
    let n = t[e];
    if (/\w/.test(n) || n > "" && (n.toUpperCase() != n.toLowerCase() || fM.test(n)))
      return !0;
  }
  return !1;
}
function hM(t) {
  return (e) => {
    if (!/\S/.test(e))
      return li.Space;
    if (dM(e))
      return li.Word;
    for (let n = 0; n < t.length; n++)
      if (e.indexOf(t[n]) > -1)
        return li.Word;
    return li.Other;
  };
}
class Me {
  constructor(e, n, i, s, o, r) {
    this.config = e, this.doc = n, this.selection = i, this.values = s, this.status = e.statusTemplate.slice(), this.computeSlot = o, r && (r._state = this);
    for (let l = 0; l < this.config.dynamicSlots.length; l++)
      vo(this, l << 1);
    this.computeSlot = null;
  }
  field(e, n = !0) {
    let i = this.config.address[e.id];
    if (i == null) {
      if (n)
        throw new RangeError("Field is not present in this state");
      return;
    }
    return vo(this, i), nl(this, i);
  }
  /**
  Create a [transaction](https://codemirror.net/6/docs/ref/#state.Transaction) that updates this
  state. Any number of [transaction specs](https://codemirror.net/6/docs/ref/#state.TransactionSpec)
  can be passed. Unless
  [`sequential`](https://codemirror.net/6/docs/ref/#state.TransactionSpec.sequential) is set, the
  [changes](https://codemirror.net/6/docs/ref/#state.TransactionSpec.changes) (if any) of each spec
  are assumed to start in the _current_ document (not the document
  produced by previous specs), and its
  [selection](https://codemirror.net/6/docs/ref/#state.TransactionSpec.selection) and
  [effects](https://codemirror.net/6/docs/ref/#state.TransactionSpec.effects) are assumed to refer
  to the document created by its _own_ changes. The resulting
  transaction contains the combined effect of all the different
  specs. For [selection](https://codemirror.net/6/docs/ref/#state.TransactionSpec.selection), later
  specs take precedence over earlier ones.
  */
  update(...e) {
    return nm(this, e, !0);
  }
  /**
  @internal
  */
  applyTransaction(e) {
    let n = this.config, { base: i, compartments: s } = n;
    for (let l of e.effects)
      l.is(Rl.reconfigure) ? (n && (s = /* @__PURE__ */ new Map(), n.compartments.forEach((a, c) => s.set(c, a)), n = null), s.set(l.value.compartment, l.value.extension)) : l.is(nt.reconfigure) ? (n = null, i = l.value) : l.is(nt.appendConfig) && (n = null, i = Cs(i).concat(l.value));
    let o;
    n ? o = e.startState.values.slice() : (n = tl.resolve(i, s, this), o = new Me(n, this.doc, this.selection, n.dynamicSlots.map(() => null), (a, c) => c.reconfigure(a, this), null).values);
    let r = e.startState.facet(Ja) ? e.newSelection : e.newSelection.asSingle();
    new Me(n, e.newDoc, r, o, (l, a) => a.update(l, e), e);
  }
  /**
  Create a [transaction spec](https://codemirror.net/6/docs/ref/#state.TransactionSpec) that
  replaces every selection range with the given content.
  */
  replaceSelection(e) {
    return typeof e == "string" && (e = this.toText(e)), this.changeByRange((n) => ({
      changes: { from: n.from, to: n.to, insert: e },
      range: Y.cursor(n.from + e.length)
    }));
  }
  /**
  Create a set of changes and a new selection by running the given
  function for each range in the active selection. The function
  can return an optional set of changes (in the coordinate space
  of the start document), plus an updated range (in the coordinate
  space of the document produced by the call's own changes). This
  method will merge all the changes and ranges into a single
  changeset and selection, and return it as a [transaction
  spec](https://codemirror.net/6/docs/ref/#state.TransactionSpec), which can be passed to
  [`update`](https://codemirror.net/6/docs/ref/#state.EditorState.update).
  */
  changeByRange(e) {
    let n = this.selection, i = e(n.ranges[0]), s = this.changes(i.changes), o = [i.range], r = Cs(i.effects);
    for (let l = 1; l < n.ranges.length; l++) {
      let a = e(n.ranges[l]), c = this.changes(a.changes), u = c.map(s);
      for (let d = 0; d < l; d++)
        o[d] = o[d].map(u);
      let f = s.mapDesc(c, !0);
      o.push(a.range.map(f)), s = s.compose(u), r = nt.mapEffects(r, u).concat(nt.mapEffects(Cs(a.effects), f));
    }
    return {
      changes: s,
      selection: Y.create(o, n.mainIndex),
      effects: r
    };
  }
  /**
  Create a [change set](https://codemirror.net/6/docs/ref/#state.ChangeSet) from the given change
  description, taking the state's document length and line
  separator into account.
  */
  changes(e = []) {
    return e instanceof ut ? e : ut.of(e, this.doc.length, this.facet(Me.lineSeparator));
  }
  /**
  Using the state's [line
  separator](https://codemirror.net/6/docs/ref/#state.EditorState^lineSeparator), create a
  [`Text`](https://codemirror.net/6/docs/ref/#state.Text) instance from the given string.
  */
  toText(e) {
    return Ae.of(e.split(this.facet(Me.lineSeparator) || ja));
  }
  /**
  Return the given range of the document as a string.
  */
  sliceDoc(e = 0, n = this.doc.length) {
    return this.doc.sliceString(e, n, this.lineBreak);
  }
  /**
  Get the value of a state [facet](https://codemirror.net/6/docs/ref/#state.Facet).
  */
  facet(e) {
    let n = this.config.address[e.id];
    return n == null ? e.default : (vo(this, n), nl(this, n));
  }
  /**
  Convert this state to a JSON-serializable object. When custom
  fields should be serialized, you can pass them in as an object
  mapping property names (in the resulting object, which should
  not use `doc` or `selection`) to fields.
  */
  toJSON(e) {
    let n = {
      doc: this.sliceDoc(),
      selection: this.selection.toJSON()
    };
    if (e)
      for (let i in e) {
        let s = e[i];
        s instanceof Hi && this.config.address[s.id] != null && (n[i] = s.spec.toJSON(this.field(e[i]), this));
      }
    return n;
  }
  /**
  Deserialize a state from its JSON representation. When custom
  fields should be deserialized, pass the same object you passed
  to [`toJSON`](https://codemirror.net/6/docs/ref/#state.EditorState.toJSON) when serializing as
  third argument.
  */
  static fromJSON(e, n = {}, i) {
    if (!e || typeof e.doc != "string")
      throw new RangeError("Invalid JSON representation for EditorState");
    let s = [];
    if (i) {
      for (let o in i)
        if (Object.prototype.hasOwnProperty.call(e, o)) {
          let r = i[o], l = e[o];
          s.push(r.init((a) => r.spec.fromJSON(l, a)));
        }
    }
    return Me.create({
      doc: e.doc,
      selection: Y.fromJSON(e.selection),
      extensions: n.extensions ? s.concat([n.extensions]) : s
    });
  }
  /**
  Create a new state. You'll usually only need this when
  initializing an editor—updated states are created by applying
  transactions.
  */
  static create(e = {}) {
    let n = tl.resolve(e.extensions || [], /* @__PURE__ */ new Map()), i = e.doc instanceof Ae ? e.doc : Ae.of((e.doc || "").split(n.staticFacet(Me.lineSeparator) || ja)), s = e.selection ? e.selection instanceof Y ? e.selection : Y.single(e.selection.anchor, e.selection.head) : Y.single(0);
    return Ug(s, i.length), n.staticFacet(Ja) || (s = s.asSingle()), new Me(n, i, s, n.dynamicSlots.map(() => null), (o, r) => r.create(o), null);
  }
  /**
  The size (in columns) of a tab in the document, determined by
  the [`tabSize`](https://codemirror.net/6/docs/ref/#state.EditorState^tabSize) facet.
  */
  get tabSize() {
    return this.facet(Me.tabSize);
  }
  /**
  Get the proper [line-break](https://codemirror.net/6/docs/ref/#state.EditorState^lineSeparator)
  string for this state.
  */
  get lineBreak() {
    return this.facet(Me.lineSeparator) || `
`;
  }
  /**
  Returns true when the editor is
  [configured](https://codemirror.net/6/docs/ref/#state.EditorState^readOnly) to be read-only.
  */
  get readOnly() {
    return this.facet(em);
  }
  /**
  Look up a translation for the given phrase (via the
  [`phrases`](https://codemirror.net/6/docs/ref/#state.EditorState^phrases) facet), or return the
  original string if no translation is found.
  
  If additional arguments are passed, they will be inserted in
  place of markers like `$1` (for the first value) and `$2`, etc.
  A single `$` is equivalent to `$1`, and `$$` will produce a
  literal dollar sign.
  */
  phrase(e, ...n) {
    for (let i of this.facet(Me.phrases))
      if (Object.prototype.hasOwnProperty.call(i, e)) {
        e = i[e];
        break;
      }
    return n.length && (e = e.replace(/\$(\$|\d*)/g, (i, s) => {
      if (s == "$")
        return "$";
      let o = +(s || 1);
      return !o || o > n.length ? i : n[o - 1];
    })), e;
  }
  /**
  Find the values for a given language data field, provided by the
  the [`languageData`](https://codemirror.net/6/docs/ref/#state.EditorState^languageData) facet.
  
  Examples of language data fields are...
  
  - [`"commentTokens"`](https://codemirror.net/6/docs/ref/#commands.CommentTokens) for specifying
    comment syntax.
  - [`"autocomplete"`](https://codemirror.net/6/docs/ref/#autocomplete.autocompletion^config.override)
    for providing language-specific completion sources.
  - [`"wordChars"`](https://codemirror.net/6/docs/ref/#state.EditorState.charCategorizer) for adding
    characters that should be considered part of words in this
    language.
  - [`"closeBrackets"`](https://codemirror.net/6/docs/ref/#autocomplete.CloseBracketConfig) controls
    bracket closing behavior.
  */
  languageDataAt(e, n, i = -1) {
    let s = [];
    for (let o of this.facet(Yg))
      for (let r of o(this, n, i))
        Object.prototype.hasOwnProperty.call(r, e) && s.push(r[e]);
    return s;
  }
  /**
  Return a function that can categorize strings (expected to
  represent a single [grapheme cluster](https://codemirror.net/6/docs/ref/#state.findClusterBreak))
  into one of:
  
   - Word (contains an alphanumeric character or a character
     explicitly listed in the local language's `"wordChars"`
     language data, which should be a string)
   - Space (contains only whitespace)
   - Other (anything else)
  */
  charCategorizer(e) {
    return hM(this.languageDataAt("wordChars", e).join(""));
  }
  /**
  Find the word at the given position, meaning the range
  containing all [word](https://codemirror.net/6/docs/ref/#state.CharCategory.Word) characters
  around it. If no word characters are adjacent to the position,
  this returns null.
  */
  wordAt(e) {
    let { text: n, from: i, length: s } = this.doc.lineAt(e), o = this.charCategorizer(e), r = e - i, l = e - i;
    for (; r > 0; ) {
      let a = Lt(n, r, !1);
      if (o(n.slice(a, r)) != li.Word)
        break;
      r = a;
    }
    for (; l < s; ) {
      let a = Lt(n, l);
      if (o(n.slice(l, a)) != li.Word)
        break;
      l = a;
    }
    return r == l ? null : Y.range(r + i, l + i);
  }
}
Me.allowMultipleSelections = Ja;
Me.tabSize = /* @__PURE__ */ ue.define({
  combine: (t) => t.length ? t[0] : 4
});
Me.lineSeparator = Jg;
Me.readOnly = em;
Me.phrases = /* @__PURE__ */ ue.define({
  compare(t, e) {
    let n = Object.keys(t), i = Object.keys(e);
    return n.length == i.length && n.every((s) => t[s] == e[s]);
  }
});
Me.languageData = Yg;
Me.changeFilter = Xg;
Me.transactionFilter = Zg;
Me.transactionExtender = Qg;
Rl.reconfigure = /* @__PURE__ */ nt.define();
function im(t, e, n = {}) {
  let i = {};
  for (let s of t)
    for (let o of Object.keys(s)) {
      let r = s[o], l = i[o];
      if (l === void 0)
        i[o] = r;
      else if (!(l === r || r === void 0)) if (Object.hasOwnProperty.call(n, o))
        i[o] = n[o](l, r);
      else
        throw new Error("Config merge conflict for field " + o);
    }
  for (let s in e)
    i[s] === void 0 && (i[s] = e[s]);
  return i;
}
class Rs {
  /**
  Compare this value with another value. Used when comparing
  rangesets. The default implementation compares by identity.
  Unless you are only creating a fixed number of unique instances
  of your value type, it is a good idea to implement this
  properly.
  */
  eq(e) {
    return this == e;
  }
  /**
  Create a [range](https://codemirror.net/6/docs/ref/#state.Range) with this value.
  */
  range(e, n = e) {
    return Qa.create(e, n, this);
  }
}
Rs.prototype.startSide = Rs.prototype.endSide = 0;
Rs.prototype.point = !1;
Rs.prototype.mapMode = Zt.TrackDel;
let Qa = class sm {
  constructor(e, n, i) {
    this.from = e, this.to = n, this.value = i;
  }
  /**
  @internal
  */
  static create(e, n, i) {
    return new sm(e, n, i);
  }
};
function ec(t, e) {
  return t.from - e.from || t.value.startSide - e.value.startSide;
}
class _u {
  constructor(e, n, i, s) {
    this.from = e, this.to = n, this.value = i, this.maxPoint = s;
  }
  get length() {
    return this.to[this.to.length - 1];
  }
  // Find the index of the given position and side. Use the ranges'
  // `from` pos when `end == false`, `to` when `end == true`.
  findIndex(e, n, i, s = 0) {
    let o = i ? this.to : this.from;
    for (let r = s, l = o.length; ; ) {
      if (r == l)
        return r;
      let a = r + l >> 1, c = o[a] - e || (i ? this.value[a].endSide : this.value[a].startSide) - n;
      if (a == r)
        return c >= 0 ? r : l;
      c >= 0 ? l = a : r = a + 1;
    }
  }
  between(e, n, i, s) {
    for (let o = this.findIndex(n, -1e9, !0), r = this.findIndex(i, 1e9, !1, o); o < r; o++)
      if (s(this.from[o] + e, this.to[o] + e, this.value[o]) === !1)
        return !1;
  }
  map(e, n) {
    let i = [], s = [], o = [], r = -1, l = -1;
    for (let a = 0; a < this.value.length; a++) {
      let c = this.value[a], u = this.from[a] + e, f = this.to[a] + e, d, h;
      if (u == f) {
        let g = n.mapPos(u, c.startSide, c.mapMode);
        if (g == null || (d = h = g, c.startSide != c.endSide && (h = n.mapPos(u, c.endSide), h < d)))
          continue;
      } else if (d = n.mapPos(u, c.startSide), h = n.mapPos(f, c.endSide), d > h || d == h && c.startSide > 0 && c.endSide <= 0)
        continue;
      (h - d || c.endSide - c.startSide) < 0 || (r < 0 && (r = d), c.point && (l = Math.max(l, h - d)), i.push(c), s.push(d - r), o.push(h - r));
    }
    return { mapped: i.length ? new _u(s, o, i, l) : null, pos: r };
  }
}
class Pe {
  constructor(e, n, i, s) {
    this.chunkPos = e, this.chunk = n, this.nextLayer = i, this.maxPoint = s;
  }
  /**
  @internal
  */
  static create(e, n, i, s) {
    return new Pe(e, n, i, s);
  }
  /**
  @internal
  */
  get length() {
    let e = this.chunk.length - 1;
    return e < 0 ? 0 : Math.max(this.chunkEnd(e), this.nextLayer.length);
  }
  /**
  The number of ranges in the set.
  */
  get size() {
    if (this.isEmpty)
      return 0;
    let e = this.nextLayer.size;
    for (let n of this.chunk)
      e += n.value.length;
    return e;
  }
  /**
  @internal
  */
  chunkEnd(e) {
    return this.chunkPos[e] + this.chunk[e].length;
  }
  /**
  Update the range set, optionally adding new ranges or filtering
  out existing ones.
  
  (Note: The type parameter is just there as a kludge to work
  around TypeScript variance issues that prevented `RangeSet<X>`
  from being a subtype of `RangeSet<Y>` when `X` is a subtype of
  `Y`.)
  */
  update(e) {
    let { add: n = [], sort: i = !1, filterFrom: s = 0, filterTo: o = this.length } = e, r = e.filter;
    if (n.length == 0 && !r)
      return this;
    if (i && (n = n.slice().sort(ec)), this.isEmpty)
      return n.length ? Pe.of(n) : this;
    let l = new om(this, null, -1).goto(0), a = 0, c = [], u = new Oo();
    for (; l.value || a < n.length; )
      if (a < n.length && (l.from - n[a].from || l.startSide - n[a].value.startSide) >= 0) {
        let f = n[a++];
        u.addInner(f.from, f.to, f.value) || c.push(f);
      } else l.rangeIndex == 1 && l.chunkIndex < this.chunk.length && (a == n.length || this.chunkEnd(l.chunkIndex) < n[a].from) && (!r || s > this.chunkEnd(l.chunkIndex) || o < this.chunkPos[l.chunkIndex]) && u.addChunk(this.chunkPos[l.chunkIndex], this.chunk[l.chunkIndex]) ? l.nextChunk() : ((!r || s > l.to || o < l.from || r(l.from, l.to, l.value)) && (u.addInner(l.from, l.to, l.value) || c.push(Qa.create(l.from, l.to, l.value))), l.next());
    return u.finishInner(this.nextLayer.isEmpty && !c.length ? Pe.empty : this.nextLayer.update({ add: c, filter: r, filterFrom: s, filterTo: o }));
  }
  /**
  Map this range set through a set of changes, return the new set.
  */
  map(e) {
    if (e.empty || this.isEmpty)
      return this;
    let n = [], i = [], s = -1;
    for (let r = 0; r < this.chunk.length; r++) {
      let l = this.chunkPos[r], a = this.chunk[r], c = e.touchesRange(l, l + a.length);
      if (c === !1)
        s = Math.max(s, a.maxPoint), n.push(a), i.push(e.mapPos(l));
      else if (c === !0) {
        let { mapped: u, pos: f } = a.map(l, e);
        u && (s = Math.max(s, u.maxPoint), n.push(u), i.push(f));
      }
    }
    let o = this.nextLayer.map(e);
    return n.length == 0 ? o : new Pe(i, n, o || Pe.empty, s);
  }
  /**
  Iterate over the ranges that touch the region `from` to `to`,
  calling `f` for each. There is no guarantee that the ranges will
  be reported in any specific order. When the callback returns
  `false`, iteration stops.
  */
  between(e, n, i) {
    if (!this.isEmpty) {
      for (let s = 0; s < this.chunk.length; s++) {
        let o = this.chunkPos[s], r = this.chunk[s];
        if (n >= o && e <= o + r.length && r.between(o, e - o, n - o, i) === !1)
          return;
      }
      this.nextLayer.between(e, n, i);
    }
  }
  /**
  Iterate over the ranges in this set, in order, including all
  ranges that end at or after `from`.
  */
  iter(e = 0) {
    return Do.from([this]).goto(e);
  }
  /**
  @internal
  */
  get isEmpty() {
    return this.nextLayer == this;
  }
  /**
  Iterate over the ranges in a collection of sets, in order,
  starting from `from`.
  */
  static iter(e, n = 0) {
    return Do.from(e).goto(n);
  }
  /**
  Iterate over two groups of sets, calling methods on `comparator`
  to notify it of possible differences.
  */
  static compare(e, n, i, s, o = -1) {
    let r = e.filter((f) => f.maxPoint > 0 || !f.isEmpty && f.maxPoint >= o), l = n.filter((f) => f.maxPoint > 0 || !f.isEmpty && f.maxPoint >= o), a = _d(r, l, i), c = new Js(r, a, o), u = new Js(l, a, o);
    i.iterGaps((f, d, h) => xd(c, f, u, d, h, s)), i.empty && i.length == 0 && xd(c, 0, u, 0, 0, s);
  }
  /**
  Compare the contents of two groups of range sets, returning true
  if they are equivalent in the given range.
  */
  static eq(e, n, i = 0, s) {
    s == null && (s = 999999999);
    let o = e.filter((u) => !u.isEmpty && n.indexOf(u) < 0), r = n.filter((u) => !u.isEmpty && e.indexOf(u) < 0);
    if (o.length != r.length)
      return !1;
    if (!o.length)
      return !0;
    let l = _d(o, r), a = new Js(o, l, 0).goto(i), c = new Js(r, l, 0).goto(i);
    for (; ; ) {
      if (a.to != c.to || !tc(a.active, c.active) || a.point && (!c.point || !a.point.eq(c.point)))
        return !1;
      if (a.to > s)
        return !0;
      a.next(), c.next();
    }
  }
  /**
  Iterate over a group of range sets at the same time, notifying
  the iterator about the ranges covering every given piece of
  content. Returns the open count (see
  [`SpanIterator.span`](https://codemirror.net/6/docs/ref/#state.SpanIterator.span)) at the end
  of the iteration.
  */
  static spans(e, n, i, s, o = -1) {
    let r = new Js(e, null, o).goto(n), l = n, a = r.openStart;
    for (; ; ) {
      let c = Math.min(r.to, i);
      if (r.point) {
        let u = r.activeForPoint(r.to), f = r.pointFrom < n ? u.length + 1 : r.point.startSide < 0 ? u.length : Math.min(u.length, a);
        s.point(l, c, r.point, u, f, r.pointRank), a = Math.min(r.openEnd(c), u.length);
      } else c > l && (s.span(l, c, r.active, a), a = r.openEnd(c));
      if (r.to > i)
        return a + (r.point && r.to > i ? 1 : 0);
      l = r.to, r.next();
    }
  }
  /**
  Create a range set for the given range or array of ranges. By
  default, this expects the ranges to be _sorted_ (by start
  position and, if two start at the same position,
  `value.startSide`). You can pass `true` as second argument to
  cause the method to sort them.
  */
  static of(e, n = !1) {
    let i = new Oo();
    for (let s of e instanceof Qa ? [e] : n ? pM(e) : e)
      i.add(s.from, s.to, s.value);
    return i.finish();
  }
  /**
  Join an array of range sets into a single set.
  */
  static join(e) {
    if (!e.length)
      return Pe.empty;
    let n = e[e.length - 1];
    for (let i = e.length - 2; i >= 0; i--)
      for (let s = e[i]; s != Pe.empty; s = s.nextLayer)
        n = new Pe(s.chunkPos, s.chunk, n, Math.max(s.maxPoint, n.maxPoint));
    return n;
  }
}
Pe.empty = /* @__PURE__ */ new Pe([], [], null, -1);
function pM(t) {
  if (t.length > 1)
    for (let e = t[0], n = 1; n < t.length; n++) {
      let i = t[n];
      if (ec(e, i) > 0)
        return t.slice().sort(ec);
      e = i;
    }
  return t;
}
Pe.empty.nextLayer = Pe.empty;
class Oo {
  finishChunk(e) {
    this.chunks.push(new _u(this.from, this.to, this.value, this.maxPoint)), this.chunkPos.push(this.chunkStart), this.chunkStart = -1, this.setMaxPoint = Math.max(this.setMaxPoint, this.maxPoint), this.maxPoint = -1, e && (this.from = [], this.to = [], this.value = []);
  }
  /**
  Create an empty builder.
  */
  constructor() {
    this.chunks = [], this.chunkPos = [], this.chunkStart = -1, this.last = null, this.lastFrom = -1e9, this.lastTo = -1e9, this.from = [], this.to = [], this.value = [], this.maxPoint = -1, this.setMaxPoint = -1, this.nextLayer = null;
  }
  /**
  Add a range. Ranges should be added in sorted (by `from` and
  `value.startSide`) order.
  */
  add(e, n, i) {
    this.addInner(e, n, i) || (this.nextLayer || (this.nextLayer = new Oo())).add(e, n, i);
  }
  /**
  @internal
  */
  addInner(e, n, i) {
    let s = e - this.lastTo || i.startSide - this.last.endSide;
    if (s <= 0 && (e - this.lastFrom || i.startSide - this.last.startSide) < 0)
      throw new Error("Ranges must be added sorted by `from` position and `startSide`");
    return s < 0 ? !1 : (this.from.length == 250 && this.finishChunk(!0), this.chunkStart < 0 && (this.chunkStart = e), this.from.push(e - this.chunkStart), this.to.push(n - this.chunkStart), this.last = i, this.lastFrom = e, this.lastTo = n, this.value.push(i), i.point && (this.maxPoint = Math.max(this.maxPoint, n - e)), !0);
  }
  /**
  @internal
  */
  addChunk(e, n) {
    if ((e - this.lastTo || n.value[0].startSide - this.last.endSide) < 0)
      return !1;
    this.from.length && this.finishChunk(!0), this.setMaxPoint = Math.max(this.setMaxPoint, n.maxPoint), this.chunks.push(n), this.chunkPos.push(e);
    let i = n.value.length - 1;
    return this.last = n.value[i], this.lastFrom = n.from[i] + e, this.lastTo = n.to[i] + e, !0;
  }
  /**
  Finish the range set. Returns the new set. The builder can't be
  used anymore after this has been called.
  */
  finish() {
    return this.finishInner(Pe.empty);
  }
  /**
  @internal
  */
  finishInner(e) {
    if (this.from.length && this.finishChunk(!1), this.chunks.length == 0)
      return e;
    let n = Pe.create(this.chunkPos, this.chunks, this.nextLayer ? this.nextLayer.finishInner(e) : e, this.setMaxPoint);
    return this.from = null, n;
  }
}
function _d(t, e, n) {
  let i = /* @__PURE__ */ new Map();
  for (let o of t)
    for (let r = 0; r < o.chunk.length; r++)
      o.chunk[r].maxPoint <= 0 && i.set(o.chunk[r], o.chunkPos[r]);
  let s = /* @__PURE__ */ new Set();
  for (let o of e)
    for (let r = 0; r < o.chunk.length; r++) {
      let l = i.get(o.chunk[r]);
      l != null && (n ? n.mapPos(l) : l) == o.chunkPos[r] && !n?.touchesRange(l, l + o.chunk[r].length) && s.add(o.chunk[r]);
    }
  return s;
}
class om {
  constructor(e, n, i, s = 0) {
    this.layer = e, this.skip = n, this.minPoint = i, this.rank = s;
  }
  get startSide() {
    return this.value ? this.value.startSide : 0;
  }
  get endSide() {
    return this.value ? this.value.endSide : 0;
  }
  goto(e, n = -1e9) {
    return this.chunkIndex = this.rangeIndex = 0, this.gotoInner(e, n, !1), this;
  }
  gotoInner(e, n, i) {
    for (; this.chunkIndex < this.layer.chunk.length; ) {
      let s = this.layer.chunk[this.chunkIndex];
      if (!(this.skip && this.skip.has(s) || this.layer.chunkEnd(this.chunkIndex) < e || s.maxPoint < this.minPoint))
        break;
      this.chunkIndex++, i = !1;
    }
    if (this.chunkIndex < this.layer.chunk.length) {
      let s = this.layer.chunk[this.chunkIndex].findIndex(e - this.layer.chunkPos[this.chunkIndex], n, !0);
      (!i || this.rangeIndex < s) && this.setRangeIndex(s);
    }
    this.next();
  }
  forward(e, n) {
    (this.to - e || this.endSide - n) < 0 && this.gotoInner(e, n, !0);
  }
  next() {
    for (; ; )
      if (this.chunkIndex == this.layer.chunk.length) {
        this.from = this.to = 1e9, this.value = null;
        break;
      } else {
        let e = this.layer.chunkPos[this.chunkIndex], n = this.layer.chunk[this.chunkIndex], i = e + n.from[this.rangeIndex];
        if (this.from = i, this.to = e + n.to[this.rangeIndex], this.value = n.value[this.rangeIndex], this.setRangeIndex(this.rangeIndex + 1), this.minPoint < 0 || this.value.point && this.to - this.from >= this.minPoint)
          break;
      }
  }
  setRangeIndex(e) {
    if (e == this.layer.chunk[this.chunkIndex].value.length) {
      if (this.chunkIndex++, this.skip)
        for (; this.chunkIndex < this.layer.chunk.length && this.skip.has(this.layer.chunk[this.chunkIndex]); )
          this.chunkIndex++;
      this.rangeIndex = 0;
    } else
      this.rangeIndex = e;
  }
  nextChunk() {
    this.chunkIndex++, this.rangeIndex = 0, this.next();
  }
  compare(e) {
    return this.from - e.from || this.startSide - e.startSide || this.rank - e.rank || this.to - e.to || this.endSide - e.endSide;
  }
}
class Do {
  constructor(e) {
    this.heap = e;
  }
  static from(e, n = null, i = -1) {
    let s = [];
    for (let o = 0; o < e.length; o++)
      for (let r = e[o]; !r.isEmpty; r = r.nextLayer)
        r.maxPoint >= i && s.push(new om(r, n, i, o));
    return s.length == 1 ? s[0] : new Do(s);
  }
  get startSide() {
    return this.value ? this.value.startSide : 0;
  }
  goto(e, n = -1e9) {
    for (let i of this.heap)
      i.goto(e, n);
    for (let i = this.heap.length >> 1; i >= 0; i--)
      ca(this.heap, i);
    return this.next(), this;
  }
  forward(e, n) {
    for (let i of this.heap)
      i.forward(e, n);
    for (let i = this.heap.length >> 1; i >= 0; i--)
      ca(this.heap, i);
    (this.to - e || this.value.endSide - n) < 0 && this.next();
  }
  next() {
    if (this.heap.length == 0)
      this.from = this.to = 1e9, this.value = null, this.rank = -1;
    else {
      let e = this.heap[0];
      this.from = e.from, this.to = e.to, this.value = e.value, this.rank = e.rank, e.value && e.next(), ca(this.heap, 0);
    }
  }
}
function ca(t, e) {
  for (let n = t[e]; ; ) {
    let i = (e << 1) + 1;
    if (i >= t.length)
      break;
    let s = t[i];
    if (i + 1 < t.length && s.compare(t[i + 1]) >= 0 && (s = t[i + 1], i++), n.compare(s) < 0)
      break;
    t[i] = n, t[e] = s, e = i;
  }
}
class Js {
  constructor(e, n, i) {
    this.minPoint = i, this.active = [], this.activeTo = [], this.activeRank = [], this.minActive = -1, this.point = null, this.pointFrom = 0, this.pointRank = 0, this.to = -1e9, this.endSide = 0, this.openStart = -1, this.cursor = Do.from(e, n, i);
  }
  goto(e, n = -1e9) {
    return this.cursor.goto(e, n), this.active.length = this.activeTo.length = this.activeRank.length = 0, this.minActive = -1, this.to = e, this.endSide = n, this.openStart = -1, this.next(), this;
  }
  forward(e, n) {
    for (; this.minActive > -1 && (this.activeTo[this.minActive] - e || this.active[this.minActive].endSide - n) < 0; )
      this.removeActive(this.minActive);
    this.cursor.forward(e, n);
  }
  removeActive(e) {
    ur(this.active, e), ur(this.activeTo, e), ur(this.activeRank, e), this.minActive = Ad(this.active, this.activeTo);
  }
  addActive(e) {
    let n = 0, { value: i, to: s, rank: o } = this.cursor;
    for (; n < this.activeRank.length && (o - this.activeRank[n] || s - this.activeTo[n]) > 0; )
      n++;
    fr(this.active, n, i), fr(this.activeTo, n, s), fr(this.activeRank, n, o), e && fr(e, n, this.cursor.from), this.minActive = Ad(this.active, this.activeTo);
  }
  // After calling this, if `this.point` != null, the next range is a
  // point. Otherwise, it's a regular range, covered by `this.active`.
  next() {
    let e = this.to, n = this.point;
    this.point = null;
    let i = this.openStart < 0 ? [] : null;
    for (; ; ) {
      let s = this.minActive;
      if (s > -1 && (this.activeTo[s] - this.cursor.from || this.active[s].endSide - this.cursor.startSide) < 0) {
        if (this.activeTo[s] > e) {
          this.to = this.activeTo[s], this.endSide = this.active[s].endSide;
          break;
        }
        this.removeActive(s), i && ur(i, s);
      } else if (this.cursor.value)
        if (this.cursor.from > e) {
          this.to = this.cursor.from, this.endSide = this.cursor.startSide;
          break;
        } else {
          let o = this.cursor.value;
          if (!o.point)
            this.addActive(i), this.cursor.next();
          else if (n && this.cursor.to == this.to && this.cursor.from < this.cursor.to)
            this.cursor.next();
          else {
            this.point = o, this.pointFrom = this.cursor.from, this.pointRank = this.cursor.rank, this.to = this.cursor.to, this.endSide = o.endSide, this.cursor.next(), this.forward(this.to, this.endSide);
            break;
          }
        }
      else {
        this.to = this.endSide = 1e9;
        break;
      }
    }
    if (i) {
      this.openStart = 0;
      for (let s = i.length - 1; s >= 0 && i[s] < e; s--)
        this.openStart++;
    }
  }
  activeForPoint(e) {
    if (!this.active.length)
      return this.active;
    let n = [];
    for (let i = this.active.length - 1; i >= 0 && !(this.activeRank[i] < this.pointRank); i--)
      (this.activeTo[i] > e || this.activeTo[i] == e && this.active[i].endSide >= this.point.endSide) && n.push(this.active[i]);
    return n.reverse();
  }
  openEnd(e) {
    let n = 0;
    for (let i = this.activeTo.length - 1; i >= 0 && this.activeTo[i] > e; i--)
      n++;
    return n;
  }
}
function xd(t, e, n, i, s, o) {
  t.goto(e), n.goto(i);
  let r = i + s, l = i, a = i - e;
  for (; ; ) {
    let c = t.to + a - n.to, u = c || t.endSide - n.endSide, f = u < 0 ? t.to + a : n.to, d = Math.min(f, r);
    if (t.point || n.point ? t.point && n.point && (t.point == n.point || t.point.eq(n.point)) && tc(t.activeForPoint(t.to), n.activeForPoint(n.to)) || o.comparePoint(l, d, t.point, n.point) : d > l && !tc(t.active, n.active) && o.compareRange(l, d, t.active, n.active), f > r)
      break;
    (c || t.openEnd != n.openEnd) && o.boundChange && o.boundChange(f), l = f, u <= 0 && t.next(), u >= 0 && n.next();
  }
}
function tc(t, e) {
  if (t.length != e.length)
    return !1;
  for (let n = 0; n < t.length; n++)
    if (t[n] != e[n] && !t[n].eq(e[n]))
      return !1;
  return !0;
}
function ur(t, e) {
  for (let n = e, i = t.length - 1; n < i; n++)
    t[n] = t[n + 1];
  t.pop();
}
function fr(t, e, n) {
  for (let i = t.length - 1; i >= e; i--)
    t[i + 1] = t[i];
  t[e] = n;
}
function Ad(t, e) {
  let n = -1, i = 1e9;
  for (let s = 0; s < e.length; s++)
    (e[s] - i || t[s].endSide - t[n].endSide) < 0 && (n = s, i = e[s]);
  return n;
}
function Ll(t, e, n = t.length) {
  let i = 0;
  for (let s = 0; s < n && s < t.length; )
    t.charCodeAt(s) == 9 ? (i += e - i % e, s++) : (i++, s = Lt(t, s));
  return i;
}
function gM(t, e, n, i) {
  for (let s = 0, o = 0; ; ) {
    if (o >= e)
      return s;
    if (s == t.length)
      break;
    o += t.charCodeAt(s) == 9 ? n - o % n : 1, s = Lt(t, s);
  }
  return t.length;
}
const nc = "ͼ", Ed = typeof Symbol > "u" ? "__" + nc : Symbol.for(nc), ic = typeof Symbol > "u" ? "__styleSet" + Math.floor(Math.random() * 1e8) : Symbol("styleSet"), Td = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : {};
class Bi {
  // :: (Object<Style>, ?{finish: ?(string) → string})
  // Create a style module from the given spec.
  //
  // When `finish` is given, it is called on regular (non-`@`)
  // selectors (after `&` expansion) to compute the final selector.
  constructor(e, n) {
    this.rules = [];
    let { finish: i } = n || {};
    function s(r) {
      return /^@/.test(r) ? [r] : r.split(/,\s*/);
    }
    function o(r, l, a, c) {
      let u = [], f = /^@(\w+)\b/.exec(r[0]), d = f && f[1] == "keyframes";
      if (f && l == null) return a.push(r[0] + ";");
      for (let h in l) {
        let g = l[h];
        if (/&/.test(h))
          o(
            h.split(/,\s*/).map((m) => r.map((y) => m.replace(/&/, y))).reduce((m, y) => m.concat(y)),
            g,
            a
          );
        else if (g && typeof g == "object") {
          if (!f) throw new RangeError("The value of a property (" + h + ") should be a primitive value.");
          o(s(h), g, u, d);
        } else g != null && u.push(h.replace(/_.*/, "").replace(/[A-Z]/g, (m) => "-" + m.toLowerCase()) + ": " + g + ";");
      }
      (u.length || d) && a.push((i && !f && !c ? r.map(i) : r).join(", ") + " {" + u.join(" ") + "}");
    }
    for (let r in e) o(s(r), e[r], this.rules);
  }
  // :: () → string
  // Returns a string containing the module's CSS rules.
  getRules() {
    return this.rules.join(`
`);
  }
  // :: () → string
  // Generate a new unique CSS class name.
  static newName() {
    let e = Td[Ed] || 1;
    return Td[Ed] = e + 1, nc + e.toString(36);
  }
  // :: (union<Document, ShadowRoot>, union<[StyleModule], StyleModule>, ?{nonce: ?string})
  //
  // Mount the given set of modules in the given DOM root, which ensures
  // that the CSS rules defined by the module are available in that
  // context.
  //
  // Rules are only added to the document once per root.
  //
  // Rule order will follow the order of the modules, so that rules from
  // modules later in the array take precedence of those from earlier
  // modules. If you call this function multiple times for the same root
  // in a way that changes the order of already mounted modules, the old
  // order will be changed.
  //
  // If a Content Security Policy nonce is provided, it is added to
  // the `<style>` tag generated by the library.
  static mount(e, n, i) {
    let s = e[ic], o = i && i.nonce;
    s ? o && s.setNonce(o) : s = new mM(e, o), s.mount(Array.isArray(n) ? n : [n], e);
  }
}
let Md = /* @__PURE__ */ new Map();
class mM {
  constructor(e, n) {
    let i = e.ownerDocument || e, s = i.defaultView;
    if (!e.head && e.adoptedStyleSheets && s.CSSStyleSheet) {
      let o = Md.get(i);
      if (o) return e[ic] = o;
      this.sheet = new s.CSSStyleSheet(), Md.set(i, this);
    } else
      this.styleTag = i.createElement("style"), n && this.styleTag.setAttribute("nonce", n);
    this.modules = [], e[ic] = this;
  }
  mount(e, n) {
    let i = this.sheet, s = 0, o = 0;
    for (let r = 0; r < e.length; r++) {
      let l = e[r], a = this.modules.indexOf(l);
      if (a < o && a > -1 && (this.modules.splice(a, 1), o--, a = -1), a == -1) {
        if (this.modules.splice(o++, 0, l), i) for (let c = 0; c < l.rules.length; c++)
          i.insertRule(l.rules[c], s++);
      } else {
        for (; o < a; ) s += this.modules[o++].rules.length;
        s += l.rules.length, o++;
      }
    }
    if (i)
      n.adoptedStyleSheets.indexOf(this.sheet) < 0 && (n.adoptedStyleSheets = [this.sheet, ...n.adoptedStyleSheets]);
    else {
      let r = "";
      for (let a = 0; a < this.modules.length; a++)
        r += this.modules[a].getRules() + `
`;
      this.styleTag.textContent = r;
      let l = n.head || n;
      this.styleTag.parentNode != l && l.insertBefore(this.styleTag, l.firstChild);
    }
  }
  setNonce(e) {
    this.styleTag && this.styleTag.getAttribute("nonce") != e && this.styleTag.setAttribute("nonce", e);
  }
}
var $i = {
  8: "Backspace",
  9: "Tab",
  10: "Enter",
  12: "NumLock",
  13: "Enter",
  16: "Shift",
  17: "Control",
  18: "Alt",
  20: "CapsLock",
  27: "Escape",
  32: " ",
  33: "PageUp",
  34: "PageDown",
  35: "End",
  36: "Home",
  37: "ArrowLeft",
  38: "ArrowUp",
  39: "ArrowRight",
  40: "ArrowDown",
  44: "PrintScreen",
  45: "Insert",
  46: "Delete",
  59: ";",
  61: "=",
  91: "Meta",
  92: "Meta",
  106: "*",
  107: "+",
  108: ",",
  109: "-",
  110: ".",
  111: "/",
  144: "NumLock",
  145: "ScrollLock",
  160: "Shift",
  161: "Shift",
  162: "Control",
  163: "Control",
  164: "Alt",
  165: "Alt",
  173: "-",
  186: ";",
  187: "=",
  188: ",",
  189: "-",
  190: ".",
  191: "/",
  192: "`",
  219: "[",
  220: "\\",
  221: "]",
  222: "'"
}, Po = {
  48: ")",
  49: "!",
  50: "@",
  51: "#",
  52: "$",
  53: "%",
  54: "^",
  55: "&",
  56: "*",
  57: "(",
  59: ":",
  61: "+",
  173: "_",
  186: ":",
  187: "+",
  188: "<",
  189: "_",
  190: ">",
  191: "?",
  192: "~",
  219: "{",
  220: "|",
  221: "}",
  222: '"'
}, vM = typeof navigator < "u" && /Mac/.test(navigator.platform), yM = typeof navigator < "u" && /MSIE \d|Trident\/(?:[7-9]|\d{2,})\..*rv:(\d+)/.exec(navigator.userAgent);
for (var bt = 0; bt < 10; bt++) $i[48 + bt] = $i[96 + bt] = String(bt);
for (var bt = 1; bt <= 24; bt++) $i[bt + 111] = "F" + bt;
for (var bt = 65; bt <= 90; bt++)
  $i[bt] = String.fromCharCode(bt + 32), Po[bt] = String.fromCharCode(bt);
for (var ua in $i) Po.hasOwnProperty(ua) || (Po[ua] = $i[ua]);
function bM(t) {
  var e = vM && t.metaKey && t.shiftKey && !t.ctrlKey && !t.altKey || yM && t.shiftKey && t.key && t.key.length == 1 || t.key == "Unidentified", n = !e && t.key || (t.shiftKey ? Po : $i)[t.keyCode] || t.key || "Unidentified";
  return n == "Esc" && (n = "Escape"), n == "Del" && (n = "Delete"), n == "Left" && (n = "ArrowLeft"), n == "Up" && (n = "ArrowUp"), n == "Right" && (n = "ArrowRight"), n == "Down" && (n = "ArrowDown"), n;
}
function Io(t) {
  let e;
  return t.nodeType == 11 ? e = t.getSelection ? t : t.ownerDocument : e = t, e.getSelection();
}
function sc(t, e) {
  return e ? t == e || t.contains(e.nodeType != 1 ? e.parentNode : e) : !1;
}
function Br(t, e) {
  if (!e.anchorNode)
    return !1;
  try {
    return sc(t, e.anchorNode);
  } catch {
    return !1;
  }
}
function Ro(t) {
  return t.nodeType == 3 ? rs(t, 0, t.nodeValue.length).getClientRects() : t.nodeType == 1 ? t.getClientRects() : [];
}
function yo(t, e, n, i) {
  return n ? Od(t, e, n, i, -1) || Od(t, e, n, i, 1) : !1;
}
function os(t) {
  for (var e = 0; ; e++)
    if (t = t.previousSibling, !t)
      return e;
}
function il(t) {
  return t.nodeType == 1 && /^(DIV|P|LI|UL|OL|BLOCKQUOTE|DD|DT|H\d|SECTION|PRE)$/.test(t.nodeName);
}
function Od(t, e, n, i, s) {
  for (; ; ) {
    if (t == n && e == i)
      return !0;
    if (e == (s < 0 ? 0 : Jn(t))) {
      if (t.nodeName == "DIV")
        return !1;
      let o = t.parentNode;
      if (!o || o.nodeType != 1)
        return !1;
      e = os(t) + (s < 0 ? 0 : 1), t = o;
    } else if (t.nodeType == 1) {
      if (t = t.childNodes[e + (s < 0 ? -1 : 0)], t.nodeType == 1 && t.contentEditable == "false")
        return !1;
      e = s < 0 ? Jn(t) : 0;
    } else
      return !1;
  }
}
function Jn(t) {
  return t.nodeType == 3 ? t.nodeValue.length : t.childNodes.length;
}
function Bl(t, e) {
  let n = e ? t.left : t.right;
  return { left: n, right: n, top: t.top, bottom: t.bottom };
}
function wM(t) {
  let e = t.visualViewport;
  return e ? {
    left: 0,
    right: e.width,
    top: 0,
    bottom: e.height
  } : {
    left: 0,
    right: t.innerWidth,
    top: 0,
    bottom: t.innerHeight
  };
}
function rm(t, e) {
  let n = e.width / t.offsetWidth, i = e.height / t.offsetHeight;
  return (n > 0.995 && n < 1.005 || !isFinite(n) || Math.abs(e.width - t.offsetWidth) < 1) && (n = 1), (i > 0.995 && i < 1.005 || !isFinite(i) || Math.abs(e.height - t.offsetHeight) < 1) && (i = 1), { scaleX: n, scaleY: i };
}
function SM(t, e, n, i, s, o, r, l) {
  let a = t.ownerDocument, c = a.defaultView || window;
  for (let u = t, f = !1; u && !f; )
    if (u.nodeType == 1) {
      let d, h = u == a.body, g = 1, m = 1;
      if (h)
        d = wM(c);
      else {
        if (/^(fixed|sticky)$/.test(getComputedStyle(u).position) && (f = !0), u.scrollHeight <= u.clientHeight && u.scrollWidth <= u.clientWidth) {
          u = u.assignedSlot || u.parentNode;
          continue;
        }
        let w = u.getBoundingClientRect();
        ({ scaleX: g, scaleY: m } = rm(u, w)), d = {
          left: w.left,
          right: w.left + u.clientWidth * g,
          top: w.top,
          bottom: w.top + u.clientHeight * m
        };
      }
      let y = 0, v = 0;
      if (s == "nearest")
        e.top < d.top ? (v = e.top - (d.top + r), n > 0 && e.bottom > d.bottom + v && (v = e.bottom - d.bottom + r)) : e.bottom > d.bottom && (v = e.bottom - d.bottom + r, n < 0 && e.top - v < d.top && (v = e.top - (d.top + r)));
      else {
        let w = e.bottom - e.top, _ = d.bottom - d.top;
        v = (s == "center" && w <= _ ? e.top + w / 2 - _ / 2 : s == "start" || s == "center" && n < 0 ? e.top - r : e.bottom - _ + r) - d.top;
      }
      if (i == "nearest" ? e.left < d.left ? (y = e.left - (d.left + o), n > 0 && e.right > d.right + y && (y = e.right - d.right + o)) : e.right > d.right && (y = e.right - d.right + o, n < 0 && e.left < d.left + y && (y = e.left - (d.left + o))) : y = (i == "center" ? e.left + (e.right - e.left) / 2 - (d.right - d.left) / 2 : i == "start" == l ? e.left - o : e.right - (d.right - d.left) + o) - d.left, y || v)
        if (h)
          c.scrollBy(y, v);
        else {
          let w = 0, _ = 0;
          if (v) {
            let x = u.scrollTop;
            u.scrollTop += v / m, _ = (u.scrollTop - x) * m;
          }
          if (y) {
            let x = u.scrollLeft;
            u.scrollLeft += y / g, w = (u.scrollLeft - x) * g;
          }
          e = {
            left: e.left - w,
            top: e.top - _,
            right: e.right - w,
            bottom: e.bottom - _
          }, w && Math.abs(w - y) < 1 && (i = "nearest"), _ && Math.abs(_ - v) < 1 && (s = "nearest");
        }
      if (h)
        break;
      (e.top < d.top || e.bottom > d.bottom || e.left < d.left || e.right > d.right) && (e = {
        left: Math.max(e.left, d.left),
        right: Math.min(e.right, d.right),
        top: Math.max(e.top, d.top),
        bottom: Math.min(e.bottom, d.bottom)
      }), u = u.assignedSlot || u.parentNode;
    } else if (u.nodeType == 11)
      u = u.host;
    else
      break;
}
function CM(t) {
  let e = t.ownerDocument, n, i;
  for (let s = t.parentNode; s && !(s == e.body || n && i); )
    if (s.nodeType == 1)
      !i && s.scrollHeight > s.clientHeight && (i = s), !n && s.scrollWidth > s.clientWidth && (n = s), s = s.assignedSlot || s.parentNode;
    else if (s.nodeType == 11)
      s = s.host;
    else
      break;
  return { x: n, y: i };
}
class kM {
  constructor() {
    this.anchorNode = null, this.anchorOffset = 0, this.focusNode = null, this.focusOffset = 0;
  }
  eq(e) {
    return this.anchorNode == e.anchorNode && this.anchorOffset == e.anchorOffset && this.focusNode == e.focusNode && this.focusOffset == e.focusOffset;
  }
  setRange(e) {
    let { anchorNode: n, focusNode: i } = e;
    this.set(n, Math.min(e.anchorOffset, n ? Jn(n) : 0), i, Math.min(e.focusOffset, i ? Jn(i) : 0));
  }
  set(e, n, i, s) {
    this.anchorNode = e, this.anchorOffset = n, this.focusNode = i, this.focusOffset = s;
  }
}
let ms = null;
function lm(t) {
  if (t.setActive)
    return t.setActive();
  if (ms)
    return t.focus(ms);
  let e = [];
  for (let n = t; n && (e.push(n, n.scrollTop, n.scrollLeft), n != n.ownerDocument); n = n.parentNode)
    ;
  if (t.focus(ms == null ? {
    get preventScroll() {
      return ms = { preventScroll: !0 }, !0;
    }
  } : void 0), !ms) {
    ms = !1;
    for (let n = 0; n < e.length; ) {
      let i = e[n++], s = e[n++], o = e[n++];
      i.scrollTop != s && (i.scrollTop = s), i.scrollLeft != o && (i.scrollLeft = o);
    }
  }
}
let Dd;
function rs(t, e, n = e) {
  let i = Dd || (Dd = document.createRange());
  return i.setEnd(t, n), i.setStart(t, e), i;
}
function ks(t, e, n, i) {
  let s = { key: e, code: e, keyCode: n, which: n, cancelable: !0 };
  i && ({ altKey: s.altKey, ctrlKey: s.ctrlKey, shiftKey: s.shiftKey, metaKey: s.metaKey } = i);
  let o = new KeyboardEvent("keydown", s);
  o.synthetic = !0, t.dispatchEvent(o);
  let r = new KeyboardEvent("keyup", s);
  return r.synthetic = !0, t.dispatchEvent(r), o.defaultPrevented || r.defaultPrevented;
}
function _M(t) {
  for (; t; ) {
    if (t && (t.nodeType == 9 || t.nodeType == 11 && t.host))
      return t;
    t = t.assignedSlot || t.parentNode;
  }
  return null;
}
function am(t) {
  for (; t.attributes.length; )
    t.removeAttributeNode(t.attributes[0]);
}
function xM(t, e) {
  let n = e.focusNode, i = e.focusOffset;
  if (!n || e.anchorNode != n || e.anchorOffset != i)
    return !1;
  for (i = Math.min(i, Jn(n)); ; )
    if (i) {
      if (n.nodeType != 1)
        return !1;
      let s = n.childNodes[i - 1];
      s.contentEditable == "false" ? i-- : (n = s, i = Jn(n));
    } else {
      if (n == t)
        return !0;
      i = os(n), n = n.parentNode;
    }
}
function cm(t) {
  return t.scrollTop > Math.max(1, t.scrollHeight - t.clientHeight - 4);
}
function um(t, e) {
  for (let n = t, i = e; ; ) {
    if (n.nodeType == 3 && i > 0)
      return { node: n, offset: i };
    if (n.nodeType == 1 && i > 0) {
      if (n.contentEditable == "false")
        return null;
      n = n.childNodes[i - 1], i = Jn(n);
    } else if (n.parentNode && !il(n))
      i = os(n), n = n.parentNode;
    else
      return null;
  }
}
function fm(t, e) {
  for (let n = t, i = e; ; ) {
    if (n.nodeType == 3 && i < n.nodeValue.length)
      return { node: n, offset: i };
    if (n.nodeType == 1 && i < n.childNodes.length) {
      if (n.contentEditable == "false")
        return null;
      n = n.childNodes[i], i = 0;
    } else if (n.parentNode && !il(n))
      i = os(n) + 1, n = n.parentNode;
    else
      return null;
  }
}
class Tt {
  constructor(e, n, i = !0) {
    this.node = e, this.offset = n, this.precise = i;
  }
  static before(e, n) {
    return new Tt(e.parentNode, os(e), n);
  }
  static after(e, n) {
    return new Tt(e.parentNode, os(e) + 1, n);
  }
}
const xu = [];
class Ne {
  constructor() {
    this.parent = null, this.dom = null, this.flags = 2;
  }
  get overrideDOMText() {
    return null;
  }
  get posAtStart() {
    return this.parent ? this.parent.posBefore(this) : 0;
  }
  get posAtEnd() {
    return this.posAtStart + this.length;
  }
  posBefore(e) {
    let n = this.posAtStart;
    for (let i of this.children) {
      if (i == e)
        return n;
      n += i.length + i.breakAfter;
    }
    throw new RangeError("Invalid child in posBefore");
  }
  posAfter(e) {
    return this.posBefore(e) + e.length;
  }
  sync(e, n) {
    if (this.flags & 2) {
      let i = this.dom, s = null, o;
      for (let r of this.children) {
        if (r.flags & 7) {
          if (!r.dom && (o = s ? s.nextSibling : i.firstChild)) {
            let l = Ne.get(o);
            (!l || !l.parent && l.canReuseDOM(r)) && r.reuseDOM(o);
          }
          r.sync(e, n), r.flags &= -8;
        }
        if (o = s ? s.nextSibling : i.firstChild, n && !n.written && n.node == i && o != r.dom && (n.written = !0), r.dom.parentNode == i)
          for (; o && o != r.dom; )
            o = Pd(o);
        else
          i.insertBefore(r.dom, o);
        s = r.dom;
      }
      for (o = s ? s.nextSibling : i.firstChild, o && n && n.node == i && (n.written = !0); o; )
        o = Pd(o);
    } else if (this.flags & 1)
      for (let i of this.children)
        i.flags & 7 && (i.sync(e, n), i.flags &= -8);
  }
  reuseDOM(e) {
  }
  localPosFromDOM(e, n) {
    let i;
    if (e == this.dom)
      i = this.dom.childNodes[n];
    else {
      let s = Jn(e) == 0 ? 0 : n == 0 ? -1 : 1;
      for (; ; ) {
        let o = e.parentNode;
        if (o == this.dom)
          break;
        s == 0 && o.firstChild != o.lastChild && (e == o.firstChild ? s = -1 : s = 1), e = o;
      }
      s < 0 ? i = e : i = e.nextSibling;
    }
    if (i == this.dom.firstChild)
      return 0;
    for (; i && !Ne.get(i); )
      i = i.nextSibling;
    if (!i)
      return this.length;
    for (let s = 0, o = 0; ; s++) {
      let r = this.children[s];
      if (r.dom == i)
        return o;
      o += r.length + r.breakAfter;
    }
  }
  domBoundsAround(e, n, i = 0) {
    let s = -1, o = -1, r = -1, l = -1;
    for (let a = 0, c = i, u = i; a < this.children.length; a++) {
      let f = this.children[a], d = c + f.length;
      if (c < e && d > n)
        return f.domBoundsAround(e, n, c);
      if (d >= e && s == -1 && (s = a, o = c), c > n && f.dom.parentNode == this.dom) {
        r = a, l = u;
        break;
      }
      u = d, c = d + f.breakAfter;
    }
    return {
      from: o,
      to: l < 0 ? i + this.length : l,
      startDOM: (s ? this.children[s - 1].dom.nextSibling : null) || this.dom.firstChild,
      endDOM: r < this.children.length && r >= 0 ? this.children[r].dom : null
    };
  }
  markDirty(e = !1) {
    this.flags |= 2, this.markParentsDirty(e);
  }
  markParentsDirty(e) {
    for (let n = this.parent; n; n = n.parent) {
      if (e && (n.flags |= 2), n.flags & 1)
        return;
      n.flags |= 1, e = !1;
    }
  }
  setParent(e) {
    this.parent != e && (this.parent = e, this.flags & 7 && this.markParentsDirty(!0));
  }
  setDOM(e) {
    this.dom != e && (this.dom && (this.dom.cmView = null), this.dom = e, e.cmView = this);
  }
  get rootView() {
    for (let e = this; ; ) {
      let n = e.parent;
      if (!n)
        return e;
      e = n;
    }
  }
  replaceChildren(e, n, i = xu) {
    this.markDirty();
    for (let s = e; s < n; s++) {
      let o = this.children[s];
      o.parent == this && i.indexOf(o) < 0 && o.destroy();
    }
    i.length < 250 ? this.children.splice(e, n - e, ...i) : this.children = [].concat(this.children.slice(0, e), i, this.children.slice(n));
    for (let s = 0; s < i.length; s++)
      i[s].setParent(this);
  }
  ignoreMutation(e) {
    return !1;
  }
  ignoreEvent(e) {
    return !1;
  }
  childCursor(e = this.length) {
    return new dm(this.children, e, this.children.length);
  }
  childPos(e, n = 1) {
    return this.childCursor().findPos(e, n);
  }
  toString() {
    let e = this.constructor.name.replace("View", "");
    return e + (this.children.length ? "(" + this.children.join() + ")" : this.length ? "[" + (e == "Text" ? this.text : this.length) + "]" : "") + (this.breakAfter ? "#" : "");
  }
  static get(e) {
    return e.cmView;
  }
  get isEditable() {
    return !0;
  }
  get isWidget() {
    return !1;
  }
  get isHidden() {
    return !1;
  }
  merge(e, n, i, s, o, r) {
    return !1;
  }
  become(e) {
    return !1;
  }
  canReuseDOM(e) {
    return e.constructor == this.constructor && !((this.flags | e.flags) & 8);
  }
  // When this is a zero-length view with a side, this should return a
  // number <= 0 to indicate it is before its position, or a
  // number > 0 when after its position.
  getSide() {
    return 0;
  }
  destroy() {
    for (let e of this.children)
      e.parent == this && e.destroy();
    this.parent = null;
  }
}
Ne.prototype.breakAfter = 0;
function Pd(t) {
  let e = t.nextSibling;
  return t.parentNode.removeChild(t), e;
}
class dm {
  constructor(e, n, i) {
    this.children = e, this.pos = n, this.i = i, this.off = 0;
  }
  findPos(e, n = 1) {
    for (; ; ) {
      if (e > this.pos || e == this.pos && (n > 0 || this.i == 0 || this.children[this.i - 1].breakAfter))
        return this.off = e - this.pos, this;
      let i = this.children[--this.i];
      this.pos -= i.length + i.breakAfter;
    }
  }
}
function hm(t, e, n, i, s, o, r, l, a) {
  let { children: c } = t, u = c.length ? c[e] : null, f = o.length ? o[o.length - 1] : null, d = f ? f.breakAfter : r;
  if (!(e == i && u && !r && !d && o.length < 2 && u.merge(n, s, o.length ? f : null, n == 0, l, a))) {
    if (i < c.length) {
      let h = c[i];
      h && (s < h.length || h.breakAfter && f?.breakAfter) ? (e == i && (h = h.split(s), s = 0), !d && f && h.merge(0, s, f, !0, 0, a) ? o[o.length - 1] = h : ((s || h.children.length && !h.children[0].length) && h.merge(0, s, null, !1, 0, a), o.push(h))) : h?.breakAfter && (f ? f.breakAfter = 1 : r = 1), i++;
    }
    for (u && (u.breakAfter = r, n > 0 && (!r && o.length && u.merge(n, u.length, o[0], !1, l, 0) ? u.breakAfter = o.shift().breakAfter : (n < u.length || u.children.length && u.children[u.children.length - 1].length == 0) && u.merge(n, u.length, null, !1, l, 0), e++)); e < i && o.length; )
      if (c[i - 1].become(o[o.length - 1]))
        i--, o.pop(), a = o.length ? 0 : l;
      else if (c[e].become(o[0]))
        e++, o.shift(), l = o.length ? 0 : a;
      else
        break;
    !o.length && e && i < c.length && !c[e - 1].breakAfter && c[i].merge(0, 0, c[e - 1], !1, l, a) && e--, (e < i || o.length) && t.replaceChildren(e, i, o);
  }
}
function pm(t, e, n, i, s, o) {
  let r = t.childCursor(), { i: l, off: a } = r.findPos(n, 1), { i: c, off: u } = r.findPos(e, -1), f = e - n;
  for (let d of i)
    f += d.length;
  t.length += f, hm(t, c, u, l, a, i, 0, s, o);
}
let zt = typeof navigator < "u" ? navigator : { userAgent: "", vendor: "", platform: "" }, oc = typeof document < "u" ? document : { documentElement: { style: {} } };
const rc = /* @__PURE__ */ /Edge\/(\d+)/.exec(zt.userAgent), gm = /* @__PURE__ */ /MSIE \d/.test(zt.userAgent), lc = /* @__PURE__ */ /Trident\/(?:[7-9]|\d{2,})\..*rv:(\d+)/.exec(zt.userAgent), $l = !!(gm || lc || rc), Id = !$l && /* @__PURE__ */ /gecko\/(\d+)/i.test(zt.userAgent), fa = !$l && /* @__PURE__ */ /Chrome\/(\d+)/.exec(zt.userAgent), Rd = "webkitFontSmoothing" in oc.documentElement.style, mm = !$l && /* @__PURE__ */ /Apple Computer/.test(zt.vendor), Ld = mm && (/* @__PURE__ */ /Mobile\/\w+/.test(zt.userAgent) || zt.maxTouchPoints > 2);
var se = {
  mac: Ld || /* @__PURE__ */ /Mac/.test(zt.platform),
  windows: /* @__PURE__ */ /Win/.test(zt.platform),
  linux: /* @__PURE__ */ /Linux|X11/.test(zt.platform),
  ie: $l,
  ie_version: gm ? oc.documentMode || 6 : lc ? +lc[1] : rc ? +rc[1] : 0,
  gecko: Id,
  gecko_version: Id ? +(/* @__PURE__ */ /Firefox\/(\d+)/.exec(zt.userAgent) || [0, 0])[1] : 0,
  chrome: !!fa,
  chrome_version: fa ? +fa[1] : 0,
  ios: Ld,
  android: /* @__PURE__ */ /Android\b/.test(zt.userAgent),
  webkit: Rd,
  safari: mm,
  webkit_version: Rd ? +(/* @__PURE__ */ /\bAppleWebKit\/(\d+)/.exec(zt.userAgent) || [0, 0])[1] : 0,
  tabSize: oc.documentElement.style.tabSize != null ? "tab-size" : "-moz-tab-size"
};
const AM = 256;
class Tn extends Ne {
  constructor(e) {
    super(), this.text = e;
  }
  get length() {
    return this.text.length;
  }
  createDOM(e) {
    this.setDOM(e || document.createTextNode(this.text));
  }
  sync(e, n) {
    this.dom || this.createDOM(), this.dom.nodeValue != this.text && (n && n.node == this.dom && (n.written = !0), this.dom.nodeValue = this.text);
  }
  reuseDOM(e) {
    e.nodeType == 3 && this.createDOM(e);
  }
  merge(e, n, i) {
    return this.flags & 8 || i && (!(i instanceof Tn) || this.length - (n - e) + i.length > AM || i.flags & 8) ? !1 : (this.text = this.text.slice(0, e) + (i ? i.text : "") + this.text.slice(n), this.markDirty(), !0);
  }
  split(e) {
    let n = new Tn(this.text.slice(e));
    return this.text = this.text.slice(0, e), this.markDirty(), n.flags |= this.flags & 8, n;
  }
  localPosFromDOM(e, n) {
    return e == this.dom ? n : n ? this.text.length : 0;
  }
  domAtPos(e) {
    return new Tt(this.dom, e);
  }
  domBoundsAround(e, n, i) {
    return { from: i, to: i + this.length, startDOM: this.dom, endDOM: this.dom.nextSibling };
  }
  coordsAt(e, n) {
    return EM(this.dom, e, n);
  }
}
class hi extends Ne {
  constructor(e, n = [], i = 0) {
    super(), this.mark = e, this.children = n, this.length = i;
    for (let s of n)
      s.setParent(this);
  }
  setAttrs(e) {
    if (am(e), this.mark.class && (e.className = this.mark.class), this.mark.attrs)
      for (let n in this.mark.attrs)
        e.setAttribute(n, this.mark.attrs[n]);
    return e;
  }
  canReuseDOM(e) {
    return super.canReuseDOM(e) && !((this.flags | e.flags) & 8);
  }
  reuseDOM(e) {
    e.nodeName == this.mark.tagName.toUpperCase() && (this.setDOM(e), this.flags |= 6);
  }
  sync(e, n) {
    this.dom ? this.flags & 4 && this.setAttrs(this.dom) : this.setDOM(this.setAttrs(document.createElement(this.mark.tagName))), super.sync(e, n);
  }
  merge(e, n, i, s, o, r) {
    return i && (!(i instanceof hi && i.mark.eq(this.mark)) || e && o <= 0 || n < this.length && r <= 0) ? !1 : (pm(this, e, n, i ? i.children.slice() : [], o - 1, r - 1), this.markDirty(), !0);
  }
  split(e) {
    let n = [], i = 0, s = -1, o = 0;
    for (let l of this.children) {
      let a = i + l.length;
      a > e && n.push(i < e ? l.split(e - i) : l), s < 0 && i >= e && (s = o), i = a, o++;
    }
    let r = this.length - e;
    return this.length = e, s > -1 && (this.children.length = s, this.markDirty()), new hi(this.mark, n, r);
  }
  domAtPos(e) {
    return vm(this, e);
  }
  coordsAt(e, n) {
    return bm(this, e, n);
  }
}
function EM(t, e, n) {
  let i = t.nodeValue.length;
  e > i && (e = i);
  let s = e, o = e, r = 0;
  e == 0 && n < 0 || e == i && n >= 0 ? se.chrome || se.gecko || (e ? (s--, r = 1) : o < i && (o++, r = -1)) : n < 0 ? s-- : o < i && o++;
  let l = rs(t, s, o).getClientRects();
  if (!l.length)
    return null;
  let a = l[(r ? r < 0 : n >= 0) ? 0 : l.length - 1];
  return se.safari && !r && a.width == 0 && (a = Array.prototype.find.call(l, (c) => c.width) || a), r ? Bl(a, r < 0) : a || null;
}
class Qi extends Ne {
  static create(e, n, i) {
    return new Qi(e, n, i);
  }
  constructor(e, n, i) {
    super(), this.widget = e, this.length = n, this.side = i, this.prevWidget = null;
  }
  split(e) {
    let n = Qi.create(this.widget, this.length - e, this.side);
    return this.length -= e, n;
  }
  sync(e) {
    (!this.dom || !this.widget.updateDOM(this.dom, e)) && (this.dom && this.prevWidget && this.prevWidget.destroy(this.dom), this.prevWidget = null, this.setDOM(this.widget.toDOM(e)), this.widget.editable || (this.dom.contentEditable = "false"));
  }
  getSide() {
    return this.side;
  }
  merge(e, n, i, s, o, r) {
    return i && (!(i instanceof Qi) || !this.widget.compare(i.widget) || e > 0 && o <= 0 || n < this.length && r <= 0) ? !1 : (this.length = e + (i ? i.length : 0) + (this.length - n), !0);
  }
  become(e) {
    return e instanceof Qi && e.side == this.side && this.widget.constructor == e.widget.constructor ? (this.widget.compare(e.widget) || this.markDirty(!0), this.dom && !this.prevWidget && (this.prevWidget = this.widget), this.widget = e.widget, this.length = e.length, !0) : !1;
  }
  ignoreMutation() {
    return !0;
  }
  ignoreEvent(e) {
    return this.widget.ignoreEvent(e);
  }
  get overrideDOMText() {
    if (this.length == 0)
      return Ae.empty;
    let e = this;
    for (; e.parent; )
      e = e.parent;
    let { view: n } = e, i = n && n.state.doc, s = this.posAtStart;
    return i ? i.slice(s, s + this.length) : Ae.empty;
  }
  domAtPos(e) {
    return (this.length ? e == 0 : this.side > 0) ? Tt.before(this.dom) : Tt.after(this.dom, e == this.length);
  }
  domBoundsAround() {
    return null;
  }
  coordsAt(e, n) {
    let i = this.widget.coordsAt(this.dom, e, n);
    if (i)
      return i;
    let s = this.dom.getClientRects(), o = null;
    if (!s.length)
      return null;
    let r = this.side ? this.side < 0 : e > 0;
    for (let l = r ? s.length - 1 : 0; o = s[l], !(e > 0 ? l == 0 : l == s.length - 1 || o.top < o.bottom); l += r ? -1 : 1)
      ;
    return Bl(o, !r);
  }
  get isEditable() {
    return !1;
  }
  get isWidget() {
    return !0;
  }
  get isHidden() {
    return this.widget.isHidden;
  }
  destroy() {
    super.destroy(), this.dom && this.widget.destroy(this.dom);
  }
}
class Ls extends Ne {
  constructor(e) {
    super(), this.side = e;
  }
  get length() {
    return 0;
  }
  merge() {
    return !1;
  }
  become(e) {
    return e instanceof Ls && e.side == this.side;
  }
  split() {
    return new Ls(this.side);
  }
  sync() {
    if (!this.dom) {
      let e = document.createElement("img");
      e.className = "cm-widgetBuffer", e.setAttribute("aria-hidden", "true"), this.setDOM(e);
    }
  }
  getSide() {
    return this.side;
  }
  domAtPos(e) {
    return this.side > 0 ? Tt.before(this.dom) : Tt.after(this.dom);
  }
  localPosFromDOM() {
    return 0;
  }
  domBoundsAround() {
    return null;
  }
  coordsAt(e) {
    return this.dom.getBoundingClientRect();
  }
  get overrideDOMText() {
    return Ae.empty;
  }
  get isHidden() {
    return !0;
  }
}
Tn.prototype.children = Qi.prototype.children = Ls.prototype.children = xu;
function vm(t, e) {
  let n = t.dom, { children: i } = t, s = 0;
  for (let o = 0; s < i.length; s++) {
    let r = i[s], l = o + r.length;
    if (!(l == o && r.getSide() <= 0)) {
      if (e > o && e < l && r.dom.parentNode == n)
        return r.domAtPos(e - o);
      if (e <= o)
        break;
      o = l;
    }
  }
  for (let o = s; o > 0; o--) {
    let r = i[o - 1];
    if (r.dom.parentNode == n)
      return r.domAtPos(r.length);
  }
  for (let o = s; o < i.length; o++) {
    let r = i[o];
    if (r.dom.parentNode == n)
      return r.domAtPos(0);
  }
  return new Tt(n, 0);
}
function ym(t, e, n) {
  let i, { children: s } = t;
  n > 0 && e instanceof hi && s.length && (i = s[s.length - 1]) instanceof hi && i.mark.eq(e.mark) ? ym(i, e.children[0], n - 1) : (s.push(e), e.setParent(t)), t.length += e.length;
}
function bm(t, e, n) {
  let i = null, s = -1, o = null, r = -1;
  function l(c, u) {
    for (let f = 0, d = 0; f < c.children.length && d <= u; f++) {
      let h = c.children[f], g = d + h.length;
      g >= u && (h.children.length ? l(h, u - d) : (!o || o.isHidden && n > 0) && (g > u || d == g && h.getSide() > 0) ? (o = h, r = u - d) : (d < u || d == g && h.getSide() < 0 && !h.isHidden) && (i = h, s = u - d)), d = g;
    }
  }
  l(t, e);
  let a = (n < 0 ? i : o) || i || o;
  return a ? a.coordsAt(Math.max(0, a == i ? s : r), n) : TM(t);
}
function TM(t) {
  let e = t.dom.lastChild;
  if (!e)
    return t.dom.getBoundingClientRect();
  let n = Ro(e);
  return n[n.length - 1] || null;
}
function ac(t, e) {
  for (let n in t)
    n == "class" && e.class ? e.class += " " + t.class : n == "style" && e.style ? e.style += ";" + t.style : e[n] = t[n];
  return e;
}
const Bd = /* @__PURE__ */ Object.create(null);
function sl(t, e, n) {
  if (t == e)
    return !0;
  t || (t = Bd), e || (e = Bd);
  let i = Object.keys(t), s = Object.keys(e);
  if (i.length - (n && i.indexOf(n) > -1 ? 1 : 0) != s.length - (n && s.indexOf(n) > -1 ? 1 : 0))
    return !1;
  for (let o of i)
    if (o != n && (s.indexOf(o) == -1 || t[o] !== e[o]))
      return !1;
  return !0;
}
function cc(t, e, n) {
  let i = !1;
  if (e)
    for (let s in e)
      n && s in n || (i = !0, s == "style" ? t.style.cssText = "" : t.removeAttribute(s));
  if (n)
    for (let s in n)
      e && e[s] == n[s] || (i = !0, s == "style" ? t.style.cssText = n[s] : t.setAttribute(s, n[s]));
  return i;
}
function MM(t) {
  let e = /* @__PURE__ */ Object.create(null);
  for (let n = 0; n < t.attributes.length; n++) {
    let i = t.attributes[n];
    e[i.name] = i.value;
  }
  return e;
}
class Au {
  /**
  Compare this instance to another instance of the same type.
  (TypeScript can't express this, but only instances of the same
  specific class will be passed to this method.) This is used to
  avoid redrawing widgets when they are replaced by a new
  decoration of the same type. The default implementation just
  returns `false`, which will cause new instances of the widget to
  always be redrawn.
  */
  eq(e) {
    return !1;
  }
  /**
  Update a DOM element created by a widget of the same type (but
  different, non-`eq` content) to reflect this widget. May return
  true to indicate that it could update, false to indicate it
  couldn't (in which case the widget will be redrawn). The default
  implementation just returns false.
  */
  updateDOM(e, n) {
    return !1;
  }
  /**
  @internal
  */
  compare(e) {
    return this == e || this.constructor == e.constructor && this.eq(e);
  }
  /**
  The estimated height this widget will have, to be used when
  estimating the height of content that hasn't been drawn. May
  return -1 to indicate you don't know. The default implementation
  returns -1.
  */
  get estimatedHeight() {
    return -1;
  }
  /**
  For inline widgets that are displayed inline (as opposed to
  `inline-block`) and introduce line breaks (through `<br>` tags
  or textual newlines), this must indicate the amount of line
  breaks they introduce. Defaults to 0.
  */
  get lineBreaks() {
    return 0;
  }
  /**
  Can be used to configure which kinds of events inside the widget
  should be ignored by the editor. The default is to ignore all
  events.
  */
  ignoreEvent(e) {
    return !0;
  }
  /**
  Override the way screen coordinates for positions at/in the
  widget are found. `pos` will be the offset into the widget, and
  `side` the side of the position that is being queried—less than
  zero for before, greater than zero for after, and zero for
  directly at that position.
  */
  coordsAt(e, n, i) {
    return null;
  }
  /**
  @internal
  */
  get isHidden() {
    return !1;
  }
  /**
  @internal
  */
  get editable() {
    return !1;
  }
  /**
  This is called when the an instance of the widget is removed
  from the editor view.
  */
  destroy(e) {
  }
}
var un = /* @__PURE__ */ function(t) {
  return t[t.Text = 0] = "Text", t[t.WidgetBefore = 1] = "WidgetBefore", t[t.WidgetAfter = 2] = "WidgetAfter", t[t.WidgetRange = 3] = "WidgetRange", t;
}(un || (un = {}));
class kt extends Rs {
  constructor(e, n, i, s) {
    super(), this.startSide = e, this.endSide = n, this.widget = i, this.spec = s;
  }
  /**
  @internal
  */
  get heightRelevant() {
    return !1;
  }
  /**
  Create a mark decoration, which influences the styling of the
  content in its range. Nested mark decorations will cause nested
  DOM elements to be created. Nesting order is determined by
  precedence of the [facet](https://codemirror.net/6/docs/ref/#view.EditorView^decorations), with
  the higher-precedence decorations creating the inner DOM nodes.
  Such elements are split on line boundaries and on the boundaries
  of lower-precedence decorations.
  */
  static mark(e) {
    return new Go(e);
  }
  /**
  Create a widget decoration, which displays a DOM element at the
  given position.
  */
  static widget(e) {
    let n = Math.max(-1e4, Math.min(1e4, e.side || 0)), i = !!e.block;
    return n += i && !e.inlineOrder ? n > 0 ? 3e8 : -4e8 : n > 0 ? 1e8 : -1e8, new Fi(e, n, n, i, e.widget || null, !1);
  }
  /**
  Create a replace decoration which replaces the given range with
  a widget, or simply hides it.
  */
  static replace(e) {
    let n = !!e.block, i, s;
    if (e.isBlockGap)
      i = -5e8, s = 4e8;
    else {
      let { start: o, end: r } = wm(e, n);
      i = (o ? n ? -3e8 : -1 : 5e8) - 1, s = (r ? n ? 2e8 : 1 : -6e8) + 1;
    }
    return new Fi(e, i, s, n, e.widget || null, !0);
  }
  /**
  Create a line decoration, which can add DOM attributes to the
  line starting at the given position.
  */
  static line(e) {
    return new jo(e);
  }
  /**
  Build a [`DecorationSet`](https://codemirror.net/6/docs/ref/#view.DecorationSet) from the given
  decorated range or ranges. If the ranges aren't already sorted,
  pass `true` for `sort` to make the library sort them for you.
  */
  static set(e, n = !1) {
    return Pe.of(e, n);
  }
  /**
  @internal
  */
  hasHeight() {
    return this.widget ? this.widget.estimatedHeight > -1 : !1;
  }
}
kt.none = Pe.empty;
class Go extends kt {
  constructor(e) {
    let { start: n, end: i } = wm(e);
    super(n ? -1 : 5e8, i ? 1 : -6e8, null, e), this.tagName = e.tagName || "span", this.class = e.class || "", this.attrs = e.attributes || null;
  }
  eq(e) {
    var n, i;
    return this == e || e instanceof Go && this.tagName == e.tagName && (this.class || ((n = this.attrs) === null || n === void 0 ? void 0 : n.class)) == (e.class || ((i = e.attrs) === null || i === void 0 ? void 0 : i.class)) && sl(this.attrs, e.attrs, "class");
  }
  range(e, n = e) {
    if (e >= n)
      throw new RangeError("Mark decorations may not be empty");
    return super.range(e, n);
  }
}
Go.prototype.point = !1;
class jo extends kt {
  constructor(e) {
    super(-2e8, -2e8, null, e);
  }
  eq(e) {
    return e instanceof jo && this.spec.class == e.spec.class && sl(this.spec.attributes, e.spec.attributes);
  }
  range(e, n = e) {
    if (n != e)
      throw new RangeError("Line decoration ranges must be zero-length");
    return super.range(e, n);
  }
}
jo.prototype.mapMode = Zt.TrackBefore;
jo.prototype.point = !0;
class Fi extends kt {
  constructor(e, n, i, s, o, r) {
    super(n, i, o, e), this.block = s, this.isReplace = r, this.mapMode = s ? n <= 0 ? Zt.TrackBefore : Zt.TrackAfter : Zt.TrackDel;
  }
  // Only relevant when this.block == true
  get type() {
    return this.startSide != this.endSide ? un.WidgetRange : this.startSide <= 0 ? un.WidgetBefore : un.WidgetAfter;
  }
  get heightRelevant() {
    return this.block || !!this.widget && (this.widget.estimatedHeight >= 5 || this.widget.lineBreaks > 0);
  }
  eq(e) {
    return e instanceof Fi && OM(this.widget, e.widget) && this.block == e.block && this.startSide == e.startSide && this.endSide == e.endSide;
  }
  range(e, n = e) {
    if (this.isReplace && (e > n || e == n && this.startSide > 0 && this.endSide <= 0))
      throw new RangeError("Invalid range for replacement decoration");
    if (!this.isReplace && n != e)
      throw new RangeError("Widget decorations can only have zero-length ranges");
    return super.range(e, n);
  }
}
Fi.prototype.point = !0;
function wm(t, e = !1) {
  let { inclusiveStart: n, inclusiveEnd: i } = t;
  return n == null && (n = t.inclusive), i == null && (i = t.inclusive), { start: n ?? e, end: i ?? e };
}
function OM(t, e) {
  return t == e || !!(t && e && t.compare(e));
}
function $r(t, e, n, i = 0) {
  let s = n.length - 1;
  s >= 0 && n[s] + i >= t ? n[s] = Math.max(n[s], e) : n.push(t, e);
}
class ot extends Ne {
  constructor() {
    super(...arguments), this.children = [], this.length = 0, this.prevAttrs = void 0, this.attrs = null, this.breakAfter = 0;
  }
  // Consumes source
  merge(e, n, i, s, o, r) {
    if (i) {
      if (!(i instanceof ot))
        return !1;
      this.dom || i.transferDOM(this);
    }
    return s && this.setDeco(i ? i.attrs : null), pm(this, e, n, i ? i.children.slice() : [], o, r), !0;
  }
  split(e) {
    let n = new ot();
    if (n.breakAfter = this.breakAfter, this.length == 0)
      return n;
    let { i, off: s } = this.childPos(e);
    s && (n.append(this.children[i].split(s), 0), this.children[i].merge(s, this.children[i].length, null, !1, 0, 0), i++);
    for (let o = i; o < this.children.length; o++)
      n.append(this.children[o], 0);
    for (; i > 0 && this.children[i - 1].length == 0; )
      this.children[--i].destroy();
    return this.children.length = i, this.markDirty(), this.length = e, n;
  }
  transferDOM(e) {
    this.dom && (this.markDirty(), e.setDOM(this.dom), e.prevAttrs = this.prevAttrs === void 0 ? this.attrs : this.prevAttrs, this.prevAttrs = void 0, this.dom = null);
  }
  setDeco(e) {
    sl(this.attrs, e) || (this.dom && (this.prevAttrs = this.attrs, this.markDirty()), this.attrs = e);
  }
  append(e, n) {
    ym(this, e, n);
  }
  // Only called when building a line view in ContentBuilder
  addLineDeco(e) {
    let n = e.spec.attributes, i = e.spec.class;
    n && (this.attrs = ac(n, this.attrs || {})), i && (this.attrs = ac({ class: i }, this.attrs || {}));
  }
  domAtPos(e) {
    return vm(this, e);
  }
  reuseDOM(e) {
    e.nodeName == "DIV" && (this.setDOM(e), this.flags |= 6);
  }
  sync(e, n) {
    var i;
    this.dom ? this.flags & 4 && (am(this.dom), this.dom.className = "cm-line", this.prevAttrs = this.attrs ? null : void 0) : (this.setDOM(document.createElement("div")), this.dom.className = "cm-line", this.prevAttrs = this.attrs ? null : void 0), this.prevAttrs !== void 0 && (cc(this.dom, this.prevAttrs, this.attrs), this.dom.classList.add("cm-line"), this.prevAttrs = void 0), super.sync(e, n);
    let s = this.dom.lastChild;
    for (; s && Ne.get(s) instanceof hi; )
      s = s.lastChild;
    if (!s || !this.length || s.nodeName != "BR" && ((i = Ne.get(s)) === null || i === void 0 ? void 0 : i.isEditable) == !1 && (!se.ios || !this.children.some((o) => o instanceof Tn))) {
      let o = document.createElement("BR");
      o.cmIgnore = !0, this.dom.appendChild(o);
    }
  }
  measureTextSize() {
    if (this.children.length == 0 || this.length > 20)
      return null;
    let e = 0, n;
    for (let i of this.children) {
      if (!(i instanceof Tn) || /[^ -~]/.test(i.text))
        return null;
      let s = Ro(i.dom);
      if (s.length != 1)
        return null;
      e += s[0].width, n = s[0].height;
    }
    return e ? {
      lineHeight: this.dom.getBoundingClientRect().height,
      charWidth: e / this.length,
      textHeight: n
    } : null;
  }
  coordsAt(e, n) {
    let i = bm(this, e, n);
    if (!this.children.length && i && this.parent) {
      let { heightOracle: s } = this.parent.view.viewState, o = i.bottom - i.top;
      if (Math.abs(o - s.lineHeight) < 2 && s.textHeight < o) {
        let r = (o - s.textHeight) / 2;
        return { top: i.top + r, bottom: i.bottom - r, left: i.left, right: i.left };
      }
    }
    return i;
  }
  become(e) {
    return e instanceof ot && this.children.length == 0 && e.children.length == 0 && sl(this.attrs, e.attrs) && this.breakAfter == e.breakAfter;
  }
  covers() {
    return !0;
  }
  static find(e, n) {
    for (let i = 0, s = 0; i < e.children.length; i++) {
      let o = e.children[i], r = s + o.length;
      if (r >= n) {
        if (o instanceof ot)
          return o;
        if (r > n)
          break;
      }
      s = r + o.breakAfter;
    }
    return null;
  }
}
class ui extends Ne {
  constructor(e, n, i) {
    super(), this.widget = e, this.length = n, this.deco = i, this.breakAfter = 0, this.prevWidget = null;
  }
  merge(e, n, i, s, o, r) {
    return i && (!(i instanceof ui) || !this.widget.compare(i.widget) || e > 0 && o <= 0 || n < this.length && r <= 0) ? !1 : (this.length = e + (i ? i.length : 0) + (this.length - n), !0);
  }
  domAtPos(e) {
    return e == 0 ? Tt.before(this.dom) : Tt.after(this.dom, e == this.length);
  }
  split(e) {
    let n = this.length - e;
    this.length = e;
    let i = new ui(this.widget, n, this.deco);
    return i.breakAfter = this.breakAfter, i;
  }
  get children() {
    return xu;
  }
  sync(e) {
    (!this.dom || !this.widget.updateDOM(this.dom, e)) && (this.dom && this.prevWidget && this.prevWidget.destroy(this.dom), this.prevWidget = null, this.setDOM(this.widget.toDOM(e)), this.widget.editable || (this.dom.contentEditable = "false"));
  }
  get overrideDOMText() {
    return this.parent ? this.parent.view.state.doc.slice(this.posAtStart, this.posAtEnd) : Ae.empty;
  }
  domBoundsAround() {
    return null;
  }
  become(e) {
    return e instanceof ui && e.widget.constructor == this.widget.constructor ? (e.widget.compare(this.widget) || this.markDirty(!0), this.dom && !this.prevWidget && (this.prevWidget = this.widget), this.widget = e.widget, this.length = e.length, this.deco = e.deco, this.breakAfter = e.breakAfter, !0) : !1;
  }
  ignoreMutation() {
    return !0;
  }
  ignoreEvent(e) {
    return this.widget.ignoreEvent(e);
  }
  get isEditable() {
    return !1;
  }
  get isWidget() {
    return !0;
  }
  coordsAt(e, n) {
    let i = this.widget.coordsAt(this.dom, e, n);
    return i || (this.widget instanceof uc ? null : Bl(this.dom.getBoundingClientRect(), this.length ? e == 0 : n <= 0));
  }
  destroy() {
    super.destroy(), this.dom && this.widget.destroy(this.dom);
  }
  covers(e) {
    let { startSide: n, endSide: i } = this.deco;
    return n == i ? !1 : e < 0 ? n < 0 : i > 0;
  }
}
class uc extends Au {
  constructor(e) {
    super(), this.height = e;
  }
  toDOM() {
    let e = document.createElement("div");
    return e.className = "cm-gap", this.updateDOM(e), e;
  }
  eq(e) {
    return e.height == this.height;
  }
  updateDOM(e) {
    return e.style.height = this.height + "px", !0;
  }
  get editable() {
    return !0;
  }
  get estimatedHeight() {
    return this.height;
  }
  ignoreEvent() {
    return !1;
  }
}
class bo {
  constructor(e, n, i, s) {
    this.doc = e, this.pos = n, this.end = i, this.disallowBlockEffectsFor = s, this.content = [], this.curLine = null, this.breakAtStart = 0, this.pendingBuffer = 0, this.bufferMarks = [], this.atCursorPos = !0, this.openStart = -1, this.openEnd = -1, this.text = "", this.textOff = 0, this.cursor = e.iter(), this.skip = n;
  }
  posCovered() {
    if (this.content.length == 0)
      return !this.breakAtStart && this.doc.lineAt(this.pos).from != this.pos;
    let e = this.content[this.content.length - 1];
    return !(e.breakAfter || e instanceof ui && e.deco.endSide < 0);
  }
  getLine() {
    return this.curLine || (this.content.push(this.curLine = new ot()), this.atCursorPos = !0), this.curLine;
  }
  flushBuffer(e = this.bufferMarks) {
    this.pendingBuffer && (this.curLine.append(dr(new Ls(-1), e), e.length), this.pendingBuffer = 0);
  }
  addBlockWidget(e) {
    this.flushBuffer(), this.curLine = null, this.content.push(e);
  }
  finish(e) {
    this.pendingBuffer && e <= this.bufferMarks.length ? this.flushBuffer() : this.pendingBuffer = 0, !this.posCovered() && !(e && this.content.length && this.content[this.content.length - 1] instanceof ui) && this.getLine();
  }
  buildText(e, n, i) {
    for (; e > 0; ) {
      if (this.textOff == this.text.length) {
        let { value: o, lineBreak: r, done: l } = this.cursor.next(this.skip);
        if (this.skip = 0, l)
          throw new Error("Ran out of text content when drawing inline views");
        if (r) {
          this.posCovered() || this.getLine(), this.content.length ? this.content[this.content.length - 1].breakAfter = 1 : this.breakAtStart = 1, this.flushBuffer(), this.curLine = null, this.atCursorPos = !0, e--;
          continue;
        } else
          this.text = o, this.textOff = 0;
      }
      let s = Math.min(
        this.text.length - this.textOff,
        e,
        512
        /* T.Chunk */
      );
      this.flushBuffer(n.slice(n.length - i)), this.getLine().append(dr(new Tn(this.text.slice(this.textOff, this.textOff + s)), n), i), this.atCursorPos = !0, this.textOff += s, e -= s, i = 0;
    }
  }
  span(e, n, i, s) {
    this.buildText(n - e, i, s), this.pos = n, this.openStart < 0 && (this.openStart = s);
  }
  point(e, n, i, s, o, r) {
    if (this.disallowBlockEffectsFor[r] && i instanceof Fi) {
      if (i.block)
        throw new RangeError("Block decorations may not be specified via plugins");
      if (n > this.doc.lineAt(this.pos).to)
        throw new RangeError("Decorations that replace line breaks may not be specified via plugins");
    }
    let l = n - e;
    if (i instanceof Fi)
      if (i.block)
        i.startSide > 0 && !this.posCovered() && this.getLine(), this.addBlockWidget(new ui(i.widget || Bs.block, l, i));
      else {
        let a = Qi.create(i.widget || Bs.inline, l, l ? 0 : i.startSide), c = this.atCursorPos && !a.isEditable && o <= s.length && (e < n || i.startSide > 0), u = !a.isEditable && (e < n || o > s.length || i.startSide <= 0), f = this.getLine();
        this.pendingBuffer == 2 && !c && !a.isEditable && (this.pendingBuffer = 0), this.flushBuffer(s), c && (f.append(dr(new Ls(1), s), o), o = s.length + Math.max(0, o - s.length)), f.append(dr(a, s), o), this.atCursorPos = u, this.pendingBuffer = u ? e < n || o > s.length ? 1 : 2 : 0, this.pendingBuffer && (this.bufferMarks = s.slice());
      }
    else this.doc.lineAt(this.pos).from == this.pos && this.getLine().addLineDeco(i);
    l && (this.textOff + l <= this.text.length ? this.textOff += l : (this.skip += l - (this.text.length - this.textOff), this.text = "", this.textOff = 0), this.pos = n), this.openStart < 0 && (this.openStart = o);
  }
  static build(e, n, i, s, o) {
    let r = new bo(e, n, i, o);
    return r.openEnd = Pe.spans(s, n, i, r), r.openStart < 0 && (r.openStart = r.openEnd), r.finish(r.openEnd), r;
  }
}
function dr(t, e) {
  for (let n of e)
    t = new hi(n, [t], t.length);
  return t;
}
class Bs extends Au {
  constructor(e) {
    super(), this.tag = e;
  }
  eq(e) {
    return e.tag == this.tag;
  }
  toDOM() {
    return document.createElement(this.tag);
  }
  updateDOM(e) {
    return e.nodeName.toLowerCase() == this.tag;
  }
  get isHidden() {
    return !0;
  }
}
Bs.inline = /* @__PURE__ */ new Bs("span");
Bs.block = /* @__PURE__ */ new Bs("div");
var ht = /* @__PURE__ */ function(t) {
  return t[t.LTR = 0] = "LTR", t[t.RTL = 1] = "RTL", t;
}(ht || (ht = {}));
const ls = ht.LTR, Eu = ht.RTL;
function Sm(t) {
  let e = [];
  for (let n = 0; n < t.length; n++)
    e.push(1 << +t[n]);
  return e;
}
const DM = /* @__PURE__ */ Sm("88888888888888888888888888888888888666888888787833333333337888888000000000000000000000000008888880000000000000000000000000088888888888888888888888888888888888887866668888088888663380888308888800000000000000000000000800000000000000000000000000000008"), PM = /* @__PURE__ */ Sm("4444448826627288999999999992222222222222222222222222222222222222222222222229999999999999999999994444444444644222822222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222999999949999999229989999223333333333"), fc = /* @__PURE__ */ Object.create(null), Pn = [];
for (let t of ["()", "[]", "{}"]) {
  let e = /* @__PURE__ */ t.charCodeAt(0), n = /* @__PURE__ */ t.charCodeAt(1);
  fc[e] = n, fc[n] = -e;
}
function Cm(t) {
  return t <= 247 ? DM[t] : 1424 <= t && t <= 1524 ? 2 : 1536 <= t && t <= 1785 ? PM[t - 1536] : 1774 <= t && t <= 2220 ? 4 : 8192 <= t && t <= 8204 ? 256 : 64336 <= t && t <= 65023 ? 4 : 1;
}
const IM = /[\u0590-\u05f4\u0600-\u06ff\u0700-\u08ac\ufb50-\ufdff]/;
class Oi {
  /**
  The direction of this span.
  */
  get dir() {
    return this.level % 2 ? Eu : ls;
  }
  /**
  @internal
  */
  constructor(e, n, i) {
    this.from = e, this.to = n, this.level = i;
  }
  /**
  @internal
  */
  side(e, n) {
    return this.dir == n == e ? this.to : this.from;
  }
  /**
  @internal
  */
  forward(e, n) {
    return e == (this.dir == n);
  }
  /**
  @internal
  */
  static find(e, n, i, s) {
    let o = -1;
    for (let r = 0; r < e.length; r++) {
      let l = e[r];
      if (l.from <= n && l.to >= n) {
        if (l.level == i)
          return r;
        (o < 0 || (s != 0 ? s < 0 ? l.from < n : l.to > n : e[o].level > l.level)) && (o = r);
      }
    }
    if (o < 0)
      throw new RangeError("Index out of range");
    return o;
  }
}
function km(t, e) {
  if (t.length != e.length)
    return !1;
  for (let n = 0; n < t.length; n++) {
    let i = t[n], s = e[n];
    if (i.from != s.from || i.to != s.to || i.direction != s.direction || !km(i.inner, s.inner))
      return !1;
  }
  return !0;
}
const $e = [];
function RM(t, e, n, i, s) {
  for (let o = 0; o <= i.length; o++) {
    let r = o ? i[o - 1].to : e, l = o < i.length ? i[o].from : n, a = o ? 256 : s;
    for (let c = r, u = a, f = a; c < l; c++) {
      let d = Cm(t.charCodeAt(c));
      d == 512 ? d = u : d == 8 && f == 4 && (d = 16), $e[c] = d == 4 ? 2 : d, d & 7 && (f = d), u = d;
    }
    for (let c = r, u = a, f = a; c < l; c++) {
      let d = $e[c];
      if (d == 128)
        c < l - 1 && u == $e[c + 1] && u & 24 ? d = $e[c] = u : $e[c] = 256;
      else if (d == 64) {
        let h = c + 1;
        for (; h < l && $e[h] == 64; )
          h++;
        let g = c && u == 8 || h < n && $e[h] == 8 ? f == 1 ? 1 : 8 : 256;
        for (let m = c; m < h; m++)
          $e[m] = g;
        c = h - 1;
      } else d == 8 && f == 1 && ($e[c] = 1);
      u = d, d & 7 && (f = d);
    }
  }
}
function LM(t, e, n, i, s) {
  let o = s == 1 ? 2 : 1;
  for (let r = 0, l = 0, a = 0; r <= i.length; r++) {
    let c = r ? i[r - 1].to : e, u = r < i.length ? i[r].from : n;
    for (let f = c, d, h, g; f < u; f++)
      if (h = fc[d = t.charCodeAt(f)])
        if (h < 0) {
          for (let m = l - 3; m >= 0; m -= 3)
            if (Pn[m + 1] == -h) {
              let y = Pn[m + 2], v = y & 2 ? s : y & 4 ? y & 1 ? o : s : 0;
              v && ($e[f] = $e[Pn[m]] = v), l = m;
              break;
            }
        } else {
          if (Pn.length == 189)
            break;
          Pn[l++] = f, Pn[l++] = d, Pn[l++] = a;
        }
      else if ((g = $e[f]) == 2 || g == 1) {
        let m = g == s;
        a = m ? 0 : 1;
        for (let y = l - 3; y >= 0; y -= 3) {
          let v = Pn[y + 2];
          if (v & 2)
            break;
          if (m)
            Pn[y + 2] |= 2;
          else {
            if (v & 4)
              break;
            Pn[y + 2] |= 4;
          }
        }
      }
  }
}
function BM(t, e, n, i) {
  for (let s = 0, o = i; s <= n.length; s++) {
    let r = s ? n[s - 1].to : t, l = s < n.length ? n[s].from : e;
    for (let a = r; a < l; ) {
      let c = $e[a];
      if (c == 256) {
        let u = a + 1;
        for (; ; )
          if (u == l) {
            if (s == n.length)
              break;
            u = n[s++].to, l = s < n.length ? n[s].from : e;
          } else if ($e[u] == 256)
            u++;
          else
            break;
        let f = o == 1, d = (u < e ? $e[u] : i) == 1, h = f == d ? f ? 1 : 2 : i;
        for (let g = u, m = s, y = m ? n[m - 1].to : t; g > a; )
          g == y && (g = n[--m].from, y = m ? n[m - 1].to : t), $e[--g] = h;
        a = u;
      } else
        o = c, a++;
    }
  }
}
function dc(t, e, n, i, s, o, r) {
  let l = i % 2 ? 2 : 1;
  if (i % 2 == s % 2)
    for (let a = e, c = 0; a < n; ) {
      let u = !0, f = !1;
      if (c == o.length || a < o[c].from) {
        let m = $e[a];
        m != l && (u = !1, f = m == 16);
      }
      let d = !u && l == 1 ? [] : null, h = u ? i : i + 1, g = a;
      e: for (; ; )
        if (c < o.length && g == o[c].from) {
          if (f)
            break e;
          let m = o[c];
          if (!u)
            for (let y = m.to, v = c + 1; ; ) {
              if (y == n)
                break e;
              if (v < o.length && o[v].from == y)
                y = o[v++].to;
              else {
                if ($e[y] == l)
                  break e;
                break;
              }
            }
          if (c++, d)
            d.push(m);
          else {
            m.from > a && r.push(new Oi(a, m.from, h));
            let y = m.direction == ls != !(h % 2);
            hc(t, y ? i + 1 : i, s, m.inner, m.from, m.to, r), a = m.to;
          }
          g = m.to;
        } else {
          if (g == n || (u ? $e[g] != l : $e[g] == l))
            break;
          g++;
        }
      d ? dc(t, a, g, i + 1, s, d, r) : a < g && r.push(new Oi(a, g, h)), a = g;
    }
  else
    for (let a = n, c = o.length; a > e; ) {
      let u = !0, f = !1;
      if (!c || a > o[c - 1].to) {
        let m = $e[a - 1];
        m != l && (u = !1, f = m == 16);
      }
      let d = !u && l == 1 ? [] : null, h = u ? i : i + 1, g = a;
      e: for (; ; )
        if (c && g == o[c - 1].to) {
          if (f)
            break e;
          let m = o[--c];
          if (!u)
            for (let y = m.from, v = c; ; ) {
              if (y == e)
                break e;
              if (v && o[v - 1].to == y)
                y = o[--v].from;
              else {
                if ($e[y - 1] == l)
                  break e;
                break;
              }
            }
          if (d)
            d.push(m);
          else {
            m.to < a && r.push(new Oi(m.to, a, h));
            let y = m.direction == ls != !(h % 2);
            hc(t, y ? i + 1 : i, s, m.inner, m.from, m.to, r), a = m.from;
          }
          g = m.from;
        } else {
          if (g == e || (u ? $e[g - 1] != l : $e[g - 1] == l))
            break;
          g--;
        }
      d ? dc(t, g, a, i + 1, s, d, r) : g < a && r.push(new Oi(g, a, h)), a = g;
    }
}
function hc(t, e, n, i, s, o, r) {
  let l = e % 2 ? 2 : 1;
  RM(t, s, o, i, l), LM(t, s, o, i, l), BM(s, o, i, l), dc(t, s, o, e, n, i, r);
}
function $M(t, e, n) {
  if (!t)
    return [new Oi(0, 0, e == Eu ? 1 : 0)];
  if (e == ls && !n.length && !IM.test(t))
    return _m(t.length);
  if (n.length)
    for (; t.length > $e.length; )
      $e[$e.length] = 256;
  let i = [], s = e == ls ? 0 : 1;
  return hc(t, s, s, n, 0, t.length, i), i;
}
function _m(t) {
  return [new Oi(0, t, 0)];
}
let xm = "";
function FM(t, e, n, i, s) {
  var o;
  let r = i.head - t.from, l = Oi.find(e, r, (o = i.bidiLevel) !== null && o !== void 0 ? o : -1, i.assoc), a = e[l], c = a.side(s, n);
  if (r == c) {
    let d = l += s ? 1 : -1;
    if (d < 0 || d >= e.length)
      return null;
    a = e[l = d], r = a.side(!s, n), c = a.side(s, n);
  }
  let u = Lt(t.text, r, a.forward(s, n));
  (u < a.from || u > a.to) && (u = c), xm = t.text.slice(Math.min(r, u), Math.max(r, u));
  let f = l == (s ? e.length - 1 : 0) ? null : e[l + (s ? 1 : -1)];
  return f && u == c && f.level + (s ? 0 : 1) < a.level ? Y.cursor(f.side(!s, n) + t.from, f.forward(s, n) ? 1 : -1, f.level) : Y.cursor(u + t.from, a.forward(s, n) ? -1 : 1, a.level);
}
function NM(t, e, n) {
  for (let i = e; i < n; i++) {
    let s = Cm(t.charCodeAt(i));
    if (s == 1)
      return ls;
    if (s == 2 || s == 4)
      return Eu;
  }
  return ls;
}
const Am = /* @__PURE__ */ ue.define(), Em = /* @__PURE__ */ ue.define(), Tm = /* @__PURE__ */ ue.define(), Mm = /* @__PURE__ */ ue.define(), pc = /* @__PURE__ */ ue.define(), Om = /* @__PURE__ */ ue.define(), Dm = /* @__PURE__ */ ue.define(), Tu = /* @__PURE__ */ ue.define(), Mu = /* @__PURE__ */ ue.define(), Pm = /* @__PURE__ */ ue.define({
  combine: (t) => t.some((e) => e)
}), VM = /* @__PURE__ */ ue.define({
  combine: (t) => t.some((e) => e)
}), Im = /* @__PURE__ */ ue.define();
class _s {
  constructor(e, n = "nearest", i = "nearest", s = 5, o = 5, r = !1) {
    this.range = e, this.y = n, this.x = i, this.yMargin = s, this.xMargin = o, this.isSnapshot = r;
  }
  map(e) {
    return e.empty ? this : new _s(this.range.map(e), this.y, this.x, this.yMargin, this.xMargin, this.isSnapshot);
  }
  clip(e) {
    return this.range.to <= e.doc.length ? this : new _s(Y.cursor(e.doc.length), this.y, this.x, this.yMargin, this.xMargin, this.isSnapshot);
  }
}
const hr = /* @__PURE__ */ nt.define({ map: (t, e) => t.map(e) }), Rm = /* @__PURE__ */ nt.define();
function zn(t, e, n) {
  let i = t.facet(Mm);
  i.length ? i[0](e) : window.onerror ? window.onerror(String(e), n, void 0, void 0, e) : n ? console.error(n + ":", e) : console.error(e);
}
const oi = /* @__PURE__ */ ue.define({ combine: (t) => t.length ? t[0] : !0 });
let zM = 0;
const eo = /* @__PURE__ */ ue.define();
class Ni {
  constructor(e, n, i, s, o) {
    this.id = e, this.create = n, this.domEventHandlers = i, this.domEventObservers = s, this.extension = o(this);
  }
  /**
  Define a plugin from a constructor function that creates the
  plugin's value, given an editor view.
  */
  static define(e, n) {
    const { eventHandlers: i, eventObservers: s, provide: o, decorations: r } = n || {};
    return new Ni(zM++, e, i, s, (l) => {
      let a = [eo.of(l)];
      return r && a.push(Lo.of((c) => {
        let u = c.plugin(l);
        return u ? r(u) : kt.none;
      })), o && a.push(o(l)), a;
    });
  }
  /**
  Create a plugin for a class whose constructor takes a single
  editor view as argument.
  */
  static fromClass(e, n) {
    return Ni.define((i) => new e(i), n);
  }
}
class da {
  constructor(e) {
    this.spec = e, this.mustUpdate = null, this.value = null;
  }
  update(e) {
    if (this.value) {
      if (this.mustUpdate) {
        let n = this.mustUpdate;
        if (this.mustUpdate = null, this.value.update)
          try {
            this.value.update(n);
          } catch (i) {
            if (zn(n.state, i, "CodeMirror plugin crashed"), this.value.destroy)
              try {
                this.value.destroy();
              } catch {
              }
            this.deactivate();
          }
      }
    } else if (this.spec)
      try {
        this.value = this.spec.create(e);
      } catch (n) {
        zn(e.state, n, "CodeMirror plugin crashed"), this.deactivate();
      }
    return this;
  }
  destroy(e) {
    var n;
    if (!((n = this.value) === null || n === void 0) && n.destroy)
      try {
        this.value.destroy();
      } catch (i) {
        zn(e.state, i, "CodeMirror plugin crashed");
      }
  }
  deactivate() {
    this.spec = this.value = null;
  }
}
const Lm = /* @__PURE__ */ ue.define(), Ou = /* @__PURE__ */ ue.define(), Lo = /* @__PURE__ */ ue.define(), Bm = /* @__PURE__ */ ue.define(), Du = /* @__PURE__ */ ue.define(), $m = /* @__PURE__ */ ue.define();
function $d(t, e) {
  let n = t.state.facet($m);
  if (!n.length)
    return n;
  let i = n.map((o) => o instanceof Function ? o(t) : o), s = [];
  return Pe.spans(i, e.from, e.to, {
    point() {
    },
    span(o, r, l, a) {
      let c = o - e.from, u = r - e.from, f = s;
      for (let d = l.length - 1; d >= 0; d--, a--) {
        let h = l[d].spec.bidiIsolate, g;
        if (h == null && (h = NM(e.text, c, u)), a > 0 && f.length && (g = f[f.length - 1]).to == c && g.direction == h)
          g.to = u, f = g.inner;
        else {
          let m = { from: c, to: u, direction: h, inner: [] };
          f.push(m), f = m.inner;
        }
      }
    }
  }), s;
}
const Fm = /* @__PURE__ */ ue.define();
function Nm(t) {
  let e = 0, n = 0, i = 0, s = 0;
  for (let o of t.state.facet(Fm)) {
    let r = o(t);
    r && (r.left != null && (e = Math.max(e, r.left)), r.right != null && (n = Math.max(n, r.right)), r.top != null && (i = Math.max(i, r.top)), r.bottom != null && (s = Math.max(s, r.bottom)));
  }
  return { left: e, right: n, top: i, bottom: s };
}
const to = /* @__PURE__ */ ue.define();
class fn {
  constructor(e, n, i, s) {
    this.fromA = e, this.toA = n, this.fromB = i, this.toB = s;
  }
  join(e) {
    return new fn(Math.min(this.fromA, e.fromA), Math.max(this.toA, e.toA), Math.min(this.fromB, e.fromB), Math.max(this.toB, e.toB));
  }
  addToSet(e) {
    let n = e.length, i = this;
    for (; n > 0; n--) {
      let s = e[n - 1];
      if (!(s.fromA > i.toA)) {
        if (s.toA < i.fromA)
          break;
        i = i.join(s), e.splice(n - 1, 1);
      }
    }
    return e.splice(n, 0, i), e;
  }
  static extendWithRanges(e, n) {
    if (n.length == 0)
      return e;
    let i = [];
    for (let s = 0, o = 0, r = 0, l = 0; ; s++) {
      let a = s == e.length ? null : e[s], c = r - l, u = a ? a.fromB : 1e9;
      for (; o < n.length && n[o] < u; ) {
        let f = n[o], d = n[o + 1], h = Math.max(l, f), g = Math.min(u, d);
        if (h <= g && new fn(h + c, g + c, h, g).addToSet(i), d > u)
          break;
        o += 2;
      }
      if (!a)
        return i;
      new fn(a.fromA, a.toA, a.fromB, a.toB).addToSet(i), r = a.toA, l = a.toB;
    }
  }
}
class ol {
  constructor(e, n, i) {
    this.view = e, this.state = n, this.transactions = i, this.flags = 0, this.startState = e.state, this.changes = ut.empty(this.startState.doc.length);
    for (let o of i)
      this.changes = this.changes.compose(o.changes);
    let s = [];
    this.changes.iterChangedRanges((o, r, l, a) => s.push(new fn(o, r, l, a))), this.changedRanges = s;
  }
  /**
  @internal
  */
  static create(e, n, i) {
    return new ol(e, n, i);
  }
  /**
  Tells you whether the [viewport](https://codemirror.net/6/docs/ref/#view.EditorView.viewport) or
  [visible ranges](https://codemirror.net/6/docs/ref/#view.EditorView.visibleRanges) changed in this
  update.
  */
  get viewportChanged() {
    return (this.flags & 4) > 0;
  }
  /**
  Returns true when
  [`viewportChanged`](https://codemirror.net/6/docs/ref/#view.ViewUpdate.viewportChanged) is true
  and the viewport change is not just the result of mapping it in
  response to document changes.
  */
  get viewportMoved() {
    return (this.flags & 8) > 0;
  }
  /**
  Indicates whether the height of a block element in the editor
  changed in this update.
  */
  get heightChanged() {
    return (this.flags & 2) > 0;
  }
  /**
  Returns true when the document was modified or the size of the
  editor, or elements within the editor, changed.
  */
  get geometryChanged() {
    return this.docChanged || (this.flags & 18) > 0;
  }
  /**
  True when this update indicates a focus change.
  */
  get focusChanged() {
    return (this.flags & 1) > 0;
  }
  /**
  Whether the document changed in this update.
  */
  get docChanged() {
    return !this.changes.empty;
  }
  /**
  Whether the selection was explicitly set in this update.
  */
  get selectionSet() {
    return this.transactions.some((e) => e.selection);
  }
  /**
  @internal
  */
  get empty() {
    return this.flags == 0 && this.transactions.length == 0;
  }
}
class Fd extends Ne {
  get length() {
    return this.view.state.doc.length;
  }
  constructor(e) {
    super(), this.view = e, this.decorations = [], this.dynamicDecorationMap = [!1], this.domChanged = null, this.hasComposition = null, this.markedForComposition = /* @__PURE__ */ new Set(), this.editContextFormatting = kt.none, this.lastCompositionAfterCursor = !1, this.minWidth = 0, this.minWidthFrom = 0, this.minWidthTo = 0, this.impreciseAnchor = null, this.impreciseHead = null, this.forceSelection = !1, this.lastUpdate = Date.now(), this.setDOM(e.contentDOM), this.children = [new ot()], this.children[0].setParent(this), this.updateDeco(), this.updateInner([new fn(0, 0, 0, e.state.doc.length)], 0, null);
  }
  // Update the document view to a given state.
  update(e) {
    var n;
    let i = e.changedRanges;
    this.minWidth > 0 && i.length && (i.every(({ fromA: c, toA: u }) => u < this.minWidthFrom || c > this.minWidthTo) ? (this.minWidthFrom = e.changes.mapPos(this.minWidthFrom, 1), this.minWidthTo = e.changes.mapPos(this.minWidthTo, 1)) : this.minWidth = this.minWidthFrom = this.minWidthTo = 0), this.updateEditContextFormatting(e);
    let s = -1;
    this.view.inputState.composing >= 0 && !this.view.observer.editContext && (!((n = this.domChanged) === null || n === void 0) && n.newSel ? s = this.domChanged.newSel.head : !qM(e.changes, this.hasComposition) && !e.selectionSet && (s = e.state.selection.main.head));
    let o = s > -1 ? WM(this.view, e.changes, s) : null;
    if (this.domChanged = null, this.hasComposition) {
      this.markedForComposition.clear();
      let { from: c, to: u } = this.hasComposition;
      i = new fn(c, u, e.changes.mapPos(c, -1), e.changes.mapPos(u, 1)).addToSet(i.slice());
    }
    this.hasComposition = o ? { from: o.range.fromB, to: o.range.toB } : null, (se.ie || se.chrome) && !o && e && e.state.doc.lines != e.startState.doc.lines && (this.forceSelection = !0);
    let r = this.decorations, l = this.updateDeco(), a = KM(r, l, e.changes);
    return i = fn.extendWithRanges(i, a), !(this.flags & 7) && i.length == 0 ? !1 : (this.updateInner(i, e.startState.doc.length, o), e.transactions.length && (this.lastUpdate = Date.now()), !0);
  }
  // Used by update and the constructor do perform the actual DOM
  // update
  updateInner(e, n, i) {
    this.view.viewState.mustMeasureContent = !0, this.updateChildren(e, n, i);
    let { observer: s } = this.view;
    s.ignore(() => {
      this.dom.style.height = this.view.viewState.contentHeight / this.view.scaleY + "px", this.dom.style.flexBasis = this.minWidth ? this.minWidth + "px" : "";
      let r = se.chrome || se.ios ? { node: s.selectionRange.focusNode, written: !1 } : void 0;
      this.sync(this.view, r), this.flags &= -8, r && (r.written || s.selectionRange.focusNode != r.node) && (this.forceSelection = !0), this.dom.style.height = "";
    }), this.markedForComposition.forEach(
      (r) => r.flags &= -9
      /* ViewFlag.Composition */
    );
    let o = [];
    if (this.view.viewport.from || this.view.viewport.to < this.view.state.doc.length)
      for (let r of this.children)
        r instanceof ui && r.widget instanceof uc && o.push(r.dom);
    s.updateGaps(o);
  }
  updateChildren(e, n, i) {
    let s = i ? i.range.addToSet(e.slice()) : e, o = this.childCursor(n);
    for (let r = s.length - 1; ; r--) {
      let l = r >= 0 ? s[r] : null;
      if (!l)
        break;
      let { fromA: a, toA: c, fromB: u, toB: f } = l, d, h, g, m;
      if (i && i.range.fromB < f && i.range.toB > u) {
        let x = bo.build(this.view.state.doc, u, i.range.fromB, this.decorations, this.dynamicDecorationMap), k = bo.build(this.view.state.doc, i.range.toB, f, this.decorations, this.dynamicDecorationMap);
        h = x.breakAtStart, g = x.openStart, m = k.openEnd;
        let T = this.compositionView(i);
        k.breakAtStart ? T.breakAfter = 1 : k.content.length && T.merge(T.length, T.length, k.content[0], !1, k.openStart, 0) && (T.breakAfter = k.content[0].breakAfter, k.content.shift()), x.content.length && T.merge(0, 0, x.content[x.content.length - 1], !0, 0, x.openEnd) && x.content.pop(), d = x.content.concat(T).concat(k.content);
      } else
        ({ content: d, breakAtStart: h, openStart: g, openEnd: m } = bo.build(this.view.state.doc, u, f, this.decorations, this.dynamicDecorationMap));
      let { i: y, off: v } = o.findPos(c, 1), { i: w, off: _ } = o.findPos(a, -1);
      hm(this, w, _, y, v, d, h, g, m);
    }
    i && this.fixCompositionDOM(i);
  }
  updateEditContextFormatting(e) {
    this.editContextFormatting = this.editContextFormatting.map(e.changes);
    for (let n of e.transactions)
      for (let i of n.effects)
        i.is(Rm) && (this.editContextFormatting = i.value);
  }
  compositionView(e) {
    let n = new Tn(e.text.nodeValue);
    n.flags |= 8;
    for (let { deco: s } of e.marks)
      n = new hi(s, [n], n.length);
    let i = new ot();
    return i.append(n, 0), i;
  }
  fixCompositionDOM(e) {
    let n = (o, r) => {
      r.flags |= 8 | (r.children.some(
        (a) => a.flags & 7
        /* ViewFlag.Dirty */
      ) ? 1 : 0), this.markedForComposition.add(r);
      let l = Ne.get(o);
      l && l != r && (l.dom = null), r.setDOM(o);
    }, i = this.childPos(e.range.fromB, 1), s = this.children[i.i];
    n(e.line, s);
    for (let o = e.marks.length - 1; o >= -1; o--)
      i = s.childPos(i.off, 1), s = s.children[i.i], n(o >= 0 ? e.marks[o].node : e.text, s);
  }
  // Sync the DOM selection to this.state.selection
  updateSelection(e = !1, n = !1) {
    (e || !this.view.observer.selectionRange.focusNode) && this.view.observer.readSelectionRange();
    let i = this.view.root.activeElement, s = i == this.dom, o = !s && !(this.view.state.facet(oi) || this.dom.tabIndex > -1) && Br(this.dom, this.view.observer.selectionRange) && !(i && this.dom.contains(i));
    if (!(s || n || o))
      return;
    let r = this.forceSelection;
    this.forceSelection = !1;
    let l = this.view.state.selection.main, a = this.moveToLine(this.domAtPos(l.anchor)), c = l.empty ? a : this.moveToLine(this.domAtPos(l.head));
    if (se.gecko && l.empty && !this.hasComposition && HM(a)) {
      let f = document.createTextNode("");
      this.view.observer.ignore(() => a.node.insertBefore(f, a.node.childNodes[a.offset] || null)), a = c = new Tt(f, 0), r = !0;
    }
    let u = this.view.observer.selectionRange;
    (r || !u.focusNode || (!yo(a.node, a.offset, u.anchorNode, u.anchorOffset) || !yo(c.node, c.offset, u.focusNode, u.focusOffset)) && !this.suppressWidgetCursorChange(u, l)) && (this.view.observer.ignore(() => {
      se.android && se.chrome && this.dom.contains(u.focusNode) && UM(u.focusNode, this.dom) && (this.dom.blur(), this.dom.focus({ preventScroll: !0 }));
      let f = Io(this.view.root);
      if (f) if (l.empty) {
        if (se.gecko) {
          let d = GM(a.node, a.offset);
          if (d && d != 3) {
            let h = (d == 1 ? um : fm)(a.node, a.offset);
            h && (a = new Tt(h.node, h.offset));
          }
        }
        f.collapse(a.node, a.offset), l.bidiLevel != null && f.caretBidiLevel !== void 0 && (f.caretBidiLevel = l.bidiLevel);
      } else if (f.extend) {
        f.collapse(a.node, a.offset);
        try {
          f.extend(c.node, c.offset);
        } catch {
        }
      } else {
        let d = document.createRange();
        l.anchor > l.head && ([a, c] = [c, a]), d.setEnd(c.node, c.offset), d.setStart(a.node, a.offset), f.removeAllRanges(), f.addRange(d);
      }
      o && this.view.root.activeElement == this.dom && (this.dom.blur(), i && i.focus());
    }), this.view.observer.setSelectionRange(a, c)), this.impreciseAnchor = a.precise ? null : new Tt(u.anchorNode, u.anchorOffset), this.impreciseHead = c.precise ? null : new Tt(u.focusNode, u.focusOffset);
  }
  // If a zero-length widget is inserted next to the cursor during
  // composition, avoid moving it across it and disrupting the
  // composition.
  suppressWidgetCursorChange(e, n) {
    return this.hasComposition && n.empty && yo(e.focusNode, e.focusOffset, e.anchorNode, e.anchorOffset) && this.posFromDOM(e.focusNode, e.focusOffset) == n.head;
  }
  enforceCursorAssoc() {
    if (this.hasComposition)
      return;
    let { view: e } = this, n = e.state.selection.main, i = Io(e.root), { anchorNode: s, anchorOffset: o } = e.observer.selectionRange;
    if (!i || !n.empty || !n.assoc || !i.modify)
      return;
    let r = ot.find(this, n.head);
    if (!r)
      return;
    let l = r.posAtStart;
    if (n.head == l || n.head == l + r.length)
      return;
    let a = this.coordsAt(n.head, -1), c = this.coordsAt(n.head, 1);
    if (!a || !c || a.bottom > c.top)
      return;
    let u = this.domAtPos(n.head + n.assoc);
    i.collapse(u.node, u.offset), i.modify("move", n.assoc < 0 ? "forward" : "backward", "lineboundary"), e.observer.readSelectionRange();
    let f = e.observer.selectionRange;
    e.docView.posFromDOM(f.anchorNode, f.anchorOffset) != n.from && i.collapse(s, o);
  }
  // If a position is in/near a block widget, move it to a nearby text
  // line, since we don't want the cursor inside a block widget.
  moveToLine(e) {
    let n = this.dom, i;
    if (e.node != n)
      return e;
    for (let s = e.offset; !i && s < n.childNodes.length; s++) {
      let o = Ne.get(n.childNodes[s]);
      o instanceof ot && (i = o.domAtPos(0));
    }
    for (let s = e.offset - 1; !i && s >= 0; s--) {
      let o = Ne.get(n.childNodes[s]);
      o instanceof ot && (i = o.domAtPos(o.length));
    }
    return i ? new Tt(i.node, i.offset, !0) : e;
  }
  nearest(e) {
    for (let n = e; n; ) {
      let i = Ne.get(n);
      if (i && i.rootView == this)
        return i;
      n = n.parentNode;
    }
    return null;
  }
  posFromDOM(e, n) {
    let i = this.nearest(e);
    if (!i)
      throw new RangeError("Trying to find position for a DOM position outside of the document");
    return i.localPosFromDOM(e, n) + i.posAtStart;
  }
  domAtPos(e) {
    let { i: n, off: i } = this.childCursor().findPos(e, -1);
    for (; n < this.children.length - 1; ) {
      let s = this.children[n];
      if (i < s.length || s instanceof ot)
        break;
      n++, i = 0;
    }
    return this.children[n].domAtPos(i);
  }
  coordsAt(e, n) {
    let i = null, s = 0;
    for (let o = this.length, r = this.children.length - 1; r >= 0; r--) {
      let l = this.children[r], a = o - l.breakAfter, c = a - l.length;
      if (a < e)
        break;
      if (c <= e && (c < e || l.covers(-1)) && (a > e || l.covers(1)) && (!i || l instanceof ot && !(i instanceof ot && n >= 0)))
        i = l, s = c;
      else if (i && c == e && a == e && l instanceof ui && Math.abs(n) < 2) {
        if (l.deco.startSide < 0)
          break;
        r && (i = null);
      }
      o = c;
    }
    return i ? i.coordsAt(e - s, n) : null;
  }
  coordsForChar(e) {
    let { i: n, off: i } = this.childPos(e, 1), s = this.children[n];
    if (!(s instanceof ot))
      return null;
    for (; s.children.length; ) {
      let { i: l, off: a } = s.childPos(i, 1);
      for (; ; l++) {
        if (l == s.children.length)
          return null;
        if ((s = s.children[l]).length)
          break;
      }
      i = a;
    }
    if (!(s instanceof Tn))
      return null;
    let o = Lt(s.text, i);
    if (o == i)
      return null;
    let r = rs(s.dom, i, o).getClientRects();
    for (let l = 0; l < r.length; l++) {
      let a = r[l];
      if (l == r.length - 1 || a.top < a.bottom && a.left < a.right)
        return a;
    }
    return null;
  }
  measureVisibleLineHeights(e) {
    let n = [], { from: i, to: s } = e, o = this.view.contentDOM.clientWidth, r = o > Math.max(this.view.scrollDOM.clientWidth, this.minWidth) + 1, l = -1, a = this.view.textDirection == ht.LTR;
    for (let c = 0, u = 0; u < this.children.length; u++) {
      let f = this.children[u], d = c + f.length;
      if (d > s)
        break;
      if (c >= i) {
        let h = f.dom.getBoundingClientRect();
        if (n.push(h.height), r) {
          let g = f.dom.lastChild, m = g ? Ro(g) : [];
          if (m.length) {
            let y = m[m.length - 1], v = a ? y.right - h.left : h.right - y.left;
            v > l && (l = v, this.minWidth = o, this.minWidthFrom = c, this.minWidthTo = d);
          }
        }
      }
      c = d + f.breakAfter;
    }
    return n;
  }
  textDirectionAt(e) {
    let { i: n } = this.childPos(e, 1);
    return getComputedStyle(this.children[n].dom).direction == "rtl" ? ht.RTL : ht.LTR;
  }
  measureTextSize() {
    for (let o of this.children)
      if (o instanceof ot) {
        let r = o.measureTextSize();
        if (r)
          return r;
      }
    let e = document.createElement("div"), n, i, s;
    return e.className = "cm-line", e.style.width = "99999px", e.style.position = "absolute", e.textContent = "abc def ghi jkl mno pqr stu", this.view.observer.ignore(() => {
      this.dom.appendChild(e);
      let o = Ro(e.firstChild)[0];
      n = e.getBoundingClientRect().height, i = o ? o.width / 27 : 7, s = o ? o.height : n, e.remove();
    }), { lineHeight: n, charWidth: i, textHeight: s };
  }
  childCursor(e = this.length) {
    let n = this.children.length;
    return n && (e -= this.children[--n].length), new dm(this.children, e, n);
  }
  computeBlockGapDeco() {
    let e = [], n = this.view.viewState;
    for (let i = 0, s = 0; ; s++) {
      let o = s == n.viewports.length ? null : n.viewports[s], r = o ? o.from - 1 : this.length;
      if (r > i) {
        let l = (n.lineBlockAt(r).bottom - n.lineBlockAt(i).top) / this.view.scaleY;
        e.push(kt.replace({
          widget: new uc(l),
          block: !0,
          inclusive: !0,
          isBlockGap: !0
        }).range(i, r));
      }
      if (!o)
        break;
      i = o.to + 1;
    }
    return kt.set(e);
  }
  updateDeco() {
    let e = 1, n = this.view.state.facet(Lo).map((o) => (this.dynamicDecorationMap[e++] = typeof o == "function") ? o(this.view) : o), i = !1, s = this.view.state.facet(Bm).map((o, r) => {
      let l = typeof o == "function";
      return l && (i = !0), l ? o(this.view) : o;
    });
    for (s.length && (this.dynamicDecorationMap[e++] = i, n.push(Pe.join(s))), this.decorations = [
      this.editContextFormatting,
      ...n,
      this.computeBlockGapDeco(),
      this.view.viewState.lineGapDeco
    ]; e < this.decorations.length; )
      this.dynamicDecorationMap[e++] = !1;
    return this.decorations;
  }
  scrollIntoView(e) {
    if (e.isSnapshot) {
      let c = this.view.viewState.lineBlockAt(e.range.head);
      this.view.scrollDOM.scrollTop = c.top - e.yMargin, this.view.scrollDOM.scrollLeft = e.xMargin;
      return;
    }
    for (let c of this.view.state.facet(Im))
      try {
        if (c(this.view, e.range, e))
          return !0;
      } catch (u) {
        zn(this.view.state, u, "scroll handler");
      }
    let { range: n } = e, i = this.coordsAt(n.head, n.empty ? n.assoc : n.head > n.anchor ? -1 : 1), s;
    if (!i)
      return;
    !n.empty && (s = this.coordsAt(n.anchor, n.anchor > n.head ? -1 : 1)) && (i = {
      left: Math.min(i.left, s.left),
      top: Math.min(i.top, s.top),
      right: Math.max(i.right, s.right),
      bottom: Math.max(i.bottom, s.bottom)
    });
    let o = Nm(this.view), r = {
      left: i.left - o.left,
      top: i.top - o.top,
      right: i.right + o.right,
      bottom: i.bottom + o.bottom
    }, { offsetWidth: l, offsetHeight: a } = this.view.scrollDOM;
    SM(this.view.scrollDOM, r, n.head < n.anchor ? -1 : 1, e.x, e.y, Math.max(Math.min(e.xMargin, l), -l), Math.max(Math.min(e.yMargin, a), -a), this.view.textDirection == ht.LTR);
  }
}
function HM(t) {
  return t.node.nodeType == 1 && t.node.firstChild && (t.offset == 0 || t.node.childNodes[t.offset - 1].contentEditable == "false") && (t.offset == t.node.childNodes.length || t.node.childNodes[t.offset].contentEditable == "false");
}
function Vm(t, e) {
  let n = t.observer.selectionRange;
  if (!n.focusNode)
    return null;
  let i = um(n.focusNode, n.focusOffset), s = fm(n.focusNode, n.focusOffset), o = i || s;
  if (s && i && s.node != i.node) {
    let l = Ne.get(s.node);
    if (!l || l instanceof Tn && l.text != s.node.nodeValue)
      o = s;
    else if (t.docView.lastCompositionAfterCursor) {
      let a = Ne.get(i.node);
      !a || a instanceof Tn && a.text != i.node.nodeValue || (o = s);
    }
  }
  if (t.docView.lastCompositionAfterCursor = o != i, !o)
    return null;
  let r = e - o.offset;
  return { from: r, to: r + o.node.nodeValue.length, node: o.node };
}
function WM(t, e, n) {
  let i = Vm(t, n);
  if (!i)
    return null;
  let { node: s, from: o, to: r } = i, l = s.nodeValue;
  if (/[\n\r]/.test(l) || t.state.doc.sliceString(i.from, i.to) != l)
    return null;
  let a = e.invertedDesc, c = new fn(a.mapPos(o), a.mapPos(r), o, r), u = [];
  for (let f = s.parentNode; ; f = f.parentNode) {
    let d = Ne.get(f);
    if (d instanceof hi)
      u.push({ node: f, deco: d.mark });
    else {
      if (d instanceof ot || f.nodeName == "DIV" && f.parentNode == t.contentDOM)
        return { range: c, text: s, marks: u, line: f };
      if (f != t.contentDOM)
        u.push({ node: f, deco: new Go({
          inclusive: !0,
          attributes: MM(f),
          tagName: f.tagName.toLowerCase()
        }) });
      else
        return null;
    }
  }
}
function GM(t, e) {
  return t.nodeType != 1 ? 0 : (e && t.childNodes[e - 1].contentEditable == "false" ? 1 : 0) | (e < t.childNodes.length && t.childNodes[e].contentEditable == "false" ? 2 : 0);
}
let jM = class {
  constructor() {
    this.changes = [];
  }
  compareRange(e, n) {
    $r(e, n, this.changes);
  }
  comparePoint(e, n) {
    $r(e, n, this.changes);
  }
  boundChange(e) {
    $r(e, e, this.changes);
  }
};
function KM(t, e, n) {
  let i = new jM();
  return Pe.compare(t, e, n, i), i.changes;
}
function UM(t, e) {
  for (let n = t; n && n != e; n = n.assignedSlot || n.parentNode)
    if (n.nodeType == 1 && n.contentEditable == "false")
      return !0;
  return !1;
}
function qM(t, e) {
  let n = !1;
  return e && t.iterChangedRanges((i, s) => {
    i < e.to && s > e.from && (n = !0);
  }), n;
}
function YM(t, e, n = 1) {
  let i = t.charCategorizer(e), s = t.doc.lineAt(e), o = e - s.from;
  if (s.length == 0)
    return Y.cursor(e);
  o == 0 ? n = 1 : o == s.length && (n = -1);
  let r = o, l = o;
  n < 0 ? r = Lt(s.text, o, !1) : l = Lt(s.text, o);
  let a = i(s.text.slice(r, l));
  for (; r > 0; ) {
    let c = Lt(s.text, r, !1);
    if (i(s.text.slice(c, r)) != a)
      break;
    r = c;
  }
  for (; l < s.length; ) {
    let c = Lt(s.text, l);
    if (i(s.text.slice(l, c)) != a)
      break;
    l = c;
  }
  return Y.range(r + s.from, l + s.from);
}
function JM(t, e) {
  return e.left > t ? e.left - t : Math.max(0, t - e.right);
}
function XM(t, e) {
  return e.top > t ? e.top - t : Math.max(0, t - e.bottom);
}
function ha(t, e) {
  return t.top < e.bottom - 1 && t.bottom > e.top + 1;
}
function Nd(t, e) {
  return e < t.top ? { top: e, left: t.left, right: t.right, bottom: t.bottom } : t;
}
function Vd(t, e) {
  return e > t.bottom ? { top: t.top, left: t.left, right: t.right, bottom: e } : t;
}
function gc(t, e, n) {
  let i, s, o, r, l = !1, a, c, u, f;
  for (let g = t.firstChild; g; g = g.nextSibling) {
    let m = Ro(g);
    for (let y = 0; y < m.length; y++) {
      let v = m[y];
      s && ha(s, v) && (v = Nd(Vd(v, s.bottom), s.top));
      let w = JM(e, v), _ = XM(n, v);
      if (w == 0 && _ == 0)
        return g.nodeType == 3 ? zd(g, e, n) : gc(g, e, n);
      if (!i || r > _ || r == _ && o > w) {
        i = g, s = v, o = w, r = _;
        let x = _ ? n < v.top ? -1 : 1 : w ? e < v.left ? -1 : 1 : 0;
        l = !x || (x > 0 ? y < m.length - 1 : y > 0);
      }
      w == 0 ? n > v.bottom && (!u || u.bottom < v.bottom) ? (a = g, u = v) : n < v.top && (!f || f.top > v.top) && (c = g, f = v) : u && ha(u, v) ? u = Vd(u, v.bottom) : f && ha(f, v) && (f = Nd(f, v.top));
    }
  }
  if (u && u.bottom >= n ? (i = a, s = u) : f && f.top <= n && (i = c, s = f), !i)
    return { node: t, offset: 0 };
  let d = Math.max(s.left, Math.min(s.right, e));
  if (i.nodeType == 3)
    return zd(i, d, n);
  if (l && i.contentEditable != "false")
    return gc(i, d, n);
  let h = Array.prototype.indexOf.call(t.childNodes, i) + (e >= (s.left + s.right) / 2 ? 1 : 0);
  return { node: t, offset: h };
}
function zd(t, e, n) {
  let i = t.nodeValue.length, s = -1, o = 1e9, r = 0;
  for (let l = 0; l < i; l++) {
    let a = rs(t, l, l + 1).getClientRects();
    for (let c = 0; c < a.length; c++) {
      let u = a[c];
      if (u.top == u.bottom)
        continue;
      r || (r = e - u.left);
      let f = (u.top > n ? u.top - n : n - u.bottom) - 1;
      if (u.left - 1 <= e && u.right + 1 >= e && f < o) {
        let d = e >= (u.left + u.right) / 2, h = d;
        if ((se.chrome || se.gecko) && rs(t, l).getBoundingClientRect().left == u.right && (h = !d), f <= 0)
          return { node: t, offset: l + (h ? 1 : 0) };
        s = l + (h ? 1 : 0), o = f;
      }
    }
  }
  return { node: t, offset: s > -1 ? s : r > 0 ? t.nodeValue.length : 0 };
}
function zm(t, e, n, i = -1) {
  var s, o;
  let r = t.contentDOM.getBoundingClientRect(), l = r.top + t.viewState.paddingTop, a, { docHeight: c } = t.viewState, { x: u, y: f } = e, d = f - l;
  if (d < 0)
    return 0;
  if (d > c)
    return t.state.doc.length;
  for (let x = t.viewState.heightOracle.textHeight / 2, k = !1; a = t.elementAtHeight(d), a.type != un.Text; )
    for (; d = i > 0 ? a.bottom + x : a.top - x, !(d >= 0 && d <= c); ) {
      if (k)
        return n ? null : 0;
      k = !0, i = -i;
    }
  f = l + d;
  let h = a.from;
  if (h < t.viewport.from)
    return t.viewport.from == 0 ? 0 : n ? null : Hd(t, r, a, u, f);
  if (h > t.viewport.to)
    return t.viewport.to == t.state.doc.length ? t.state.doc.length : n ? null : Hd(t, r, a, u, f);
  let g = t.dom.ownerDocument, m = t.root.elementFromPoint ? t.root : g, y = m.elementFromPoint(u, f);
  y && !t.contentDOM.contains(y) && (y = null), y || (u = Math.max(r.left + 1, Math.min(r.right - 1, u)), y = m.elementFromPoint(u, f), y && !t.contentDOM.contains(y) && (y = null));
  let v, w = -1;
  if (y && ((s = t.docView.nearest(y)) === null || s === void 0 ? void 0 : s.isEditable) != !1) {
    if (g.caretPositionFromPoint) {
      let x = g.caretPositionFromPoint(u, f);
      x && ({ offsetNode: v, offset: w } = x);
    } else if (g.caretRangeFromPoint) {
      let x = g.caretRangeFromPoint(u, f);
      x && ({ startContainer: v, startOffset: w } = x, (!t.contentDOM.contains(v) || se.safari && ZM(v, w, u) || se.chrome && QM(v, w, u)) && (v = void 0));
    }
    v && (w = Math.min(Jn(v), w));
  }
  if (!v || !t.docView.dom.contains(v)) {
    let x = ot.find(t.docView, h);
    if (!x)
      return d > a.top + a.height / 2 ? a.to : a.from;
    ({ node: v, offset: w } = gc(x.dom, u, f));
  }
  let _ = t.docView.nearest(v);
  if (!_)
    return null;
  if (_.isWidget && ((o = _.dom) === null || o === void 0 ? void 0 : o.nodeType) == 1) {
    let x = _.dom.getBoundingClientRect();
    return e.y < x.top || e.y <= x.bottom && e.x <= (x.left + x.right) / 2 ? _.posAtStart : _.posAtEnd;
  } else
    return _.localPosFromDOM(v, w) + _.posAtStart;
}
function Hd(t, e, n, i, s) {
  let o = Math.round((i - e.left) * t.defaultCharacterWidth);
  if (t.lineWrapping && n.height > t.defaultLineHeight * 1.5) {
    let l = t.viewState.heightOracle.textHeight, a = Math.floor((s - n.top - (t.defaultLineHeight - l) * 0.5) / l);
    o += a * t.viewState.heightOracle.lineLength;
  }
  let r = t.state.sliceDoc(n.from, n.to);
  return n.from + gM(r, o, t.state.tabSize);
}
function ZM(t, e, n) {
  let i;
  if (t.nodeType != 3 || e != (i = t.nodeValue.length))
    return !1;
  for (let s = t.nextSibling; s; s = s.nextSibling)
    if (s.nodeType != 1 || s.nodeName != "BR")
      return !1;
  return rs(t, i - 1, i).getBoundingClientRect().left > n;
}
function QM(t, e, n) {
  if (e != 0)
    return !1;
  for (let s = t; ; ) {
    let o = s.parentNode;
    if (!o || o.nodeType != 1 || o.firstChild != s)
      return !1;
    if (o.classList.contains("cm-line"))
      break;
    s = o;
  }
  let i = t.nodeType == 1 ? t.getBoundingClientRect() : rs(t, 0, Math.max(t.nodeValue.length, 1)).getBoundingClientRect();
  return n - i.left > 5;
}
function eO(t, e) {
  let n = t.lineBlockAt(e);
  if (Array.isArray(n.type)) {
    for (let i of n.type)
      if (i.to > e || i.to == e && (i.to == n.to || i.type == un.Text))
        return i;
  }
  return n;
}
function tO(t, e, n, i) {
  let s = eO(t, e.head), o = !i || s.type != un.Text || !(t.lineWrapping || s.widgetLineBreaks) ? null : t.coordsAtPos(e.assoc < 0 && e.head > s.from ? e.head - 1 : e.head);
  if (o) {
    let r = t.dom.getBoundingClientRect(), l = t.textDirectionAt(s.from), a = t.posAtCoords({
      x: n == (l == ht.LTR) ? r.right - 1 : r.left + 1,
      y: (o.top + o.bottom) / 2
    });
    if (a != null)
      return Y.cursor(a, n ? -1 : 1);
  }
  return Y.cursor(n ? s.to : s.from, n ? -1 : 1);
}
function Wd(t, e, n, i) {
  let s = t.state.doc.lineAt(e.head), o = t.bidiSpans(s), r = t.textDirectionAt(s.from);
  for (let l = e, a = null; ; ) {
    let c = FM(s, o, r, l, n), u = xm;
    if (!c) {
      if (s.number == (n ? t.state.doc.lines : 1))
        return l;
      u = `
`, s = t.state.doc.line(s.number + (n ? 1 : -1)), o = t.bidiSpans(s), c = t.visualLineSide(s, !n);
    }
    if (a) {
      if (!a(u))
        return l;
    } else {
      if (!i)
        return c;
      a = i(u);
    }
    l = c;
  }
}
function nO(t, e, n) {
  let i = t.state.charCategorizer(e), s = i(n);
  return (o) => {
    let r = i(o);
    return s == li.Space && (s = r), s == r;
  };
}
function iO(t, e, n, i) {
  let s = e.head, o = n ? 1 : -1;
  if (s == (n ? t.state.doc.length : 0))
    return Y.cursor(s, e.assoc);
  let r = e.goalColumn, l, a = t.contentDOM.getBoundingClientRect(), c = t.coordsAtPos(s, e.assoc || -1), u = t.documentTop;
  if (c)
    r == null && (r = c.left - a.left), l = o < 0 ? c.top : c.bottom;
  else {
    let h = t.viewState.lineBlockAt(s);
    r == null && (r = Math.min(a.right - a.left, t.defaultCharacterWidth * (s - h.from))), l = (o < 0 ? h.top : h.bottom) + u;
  }
  let f = a.left + r, d = i ?? t.viewState.heightOracle.textHeight >> 1;
  for (let h = 0; ; h += 10) {
    let g = l + (d + h) * o, m = zm(t, { x: f, y: g }, !1, o);
    if (g < a.top || g > a.bottom || (o < 0 ? m < s : m > s)) {
      let y = t.docView.coordsForChar(m), v = !y || g < y.top ? -1 : 1;
      return Y.cursor(m, v, void 0, r);
    }
  }
}
function Fr(t, e, n) {
  for (; ; ) {
    let i = 0;
    for (let s of t)
      s.between(e - 1, e + 1, (o, r, l) => {
        if (e > o && e < r) {
          let a = i || n || (e - o < r - e ? -1 : 1);
          e = a < 0 ? o : r, i = a;
        }
      });
    if (!i)
      return e;
  }
}
function pa(t, e, n) {
  let i = Fr(t.state.facet(Du).map((s) => s(t)), n.from, e.head > n.from ? -1 : 1);
  return i == n.from ? n : Y.cursor(i, i < n.from ? 1 : -1);
}
const no = "￿";
class sO {
  constructor(e, n) {
    this.points = e, this.text = "", this.lineSeparator = n.facet(Me.lineSeparator);
  }
  append(e) {
    this.text += e;
  }
  lineBreak() {
    this.text += no;
  }
  readRange(e, n) {
    if (!e)
      return this;
    let i = e.parentNode;
    for (let s = e; ; ) {
      this.findPointBefore(i, s);
      let o = this.text.length;
      this.readNode(s);
      let r = s.nextSibling;
      if (r == n)
        break;
      let l = Ne.get(s), a = Ne.get(r);
      (l && a ? l.breakAfter : (l ? l.breakAfter : il(s)) || il(r) && (s.nodeName != "BR" || s.cmIgnore) && this.text.length > o) && this.lineBreak(), s = r;
    }
    return this.findPointBefore(i, n), this;
  }
  readTextNode(e) {
    let n = e.nodeValue;
    for (let i of this.points)
      i.node == e && (i.pos = this.text.length + Math.min(i.offset, n.length));
    for (let i = 0, s = this.lineSeparator ? null : /\r\n?|\n/g; ; ) {
      let o = -1, r = 1, l;
      if (this.lineSeparator ? (o = n.indexOf(this.lineSeparator, i), r = this.lineSeparator.length) : (l = s.exec(n)) && (o = l.index, r = l[0].length), this.append(n.slice(i, o < 0 ? n.length : o)), o < 0)
        break;
      if (this.lineBreak(), r > 1)
        for (let a of this.points)
          a.node == e && a.pos > this.text.length && (a.pos -= r - 1);
      i = o + r;
    }
  }
  readNode(e) {
    if (e.cmIgnore)
      return;
    let n = Ne.get(e), i = n && n.overrideDOMText;
    if (i != null) {
      this.findPointInside(e, i.length);
      for (let s = i.iter(); !s.next().done; )
        s.lineBreak ? this.lineBreak() : this.append(s.value);
    } else e.nodeType == 3 ? this.readTextNode(e) : e.nodeName == "BR" ? e.nextSibling && this.lineBreak() : e.nodeType == 1 && this.readRange(e.firstChild, null);
  }
  findPointBefore(e, n) {
    for (let i of this.points)
      i.node == e && e.childNodes[i.offset] == n && (i.pos = this.text.length);
  }
  findPointInside(e, n) {
    for (let i of this.points)
      (e.nodeType == 3 ? i.node == e : e.contains(i.node)) && (i.pos = this.text.length + (oO(e, i.node, i.offset) ? n : 0));
  }
}
function oO(t, e, n) {
  for (; ; ) {
    if (!e || n < Jn(e))
      return !1;
    if (e == t)
      return !0;
    n = os(e) + 1, e = e.parentNode;
  }
}
class Gd {
  constructor(e, n) {
    this.node = e, this.offset = n, this.pos = -1;
  }
}
class rO {
  constructor(e, n, i, s) {
    this.typeOver = s, this.bounds = null, this.text = "", this.domChanged = n > -1;
    let { impreciseHead: o, impreciseAnchor: r } = e.docView;
    if (e.state.readOnly && n > -1)
      this.newSel = null;
    else if (n > -1 && (this.bounds = e.docView.domBoundsAround(n, i, 0))) {
      let l = o || r ? [] : cO(e), a = new sO(l, e.state);
      a.readRange(this.bounds.startDOM, this.bounds.endDOM), this.text = a.text, this.newSel = uO(l, this.bounds.from);
    } else {
      let l = e.observer.selectionRange, a = o && o.node == l.focusNode && o.offset == l.focusOffset || !sc(e.contentDOM, l.focusNode) ? e.state.selection.main.head : e.docView.posFromDOM(l.focusNode, l.focusOffset), c = r && r.node == l.anchorNode && r.offset == l.anchorOffset || !sc(e.contentDOM, l.anchorNode) ? e.state.selection.main.anchor : e.docView.posFromDOM(l.anchorNode, l.anchorOffset), u = e.viewport;
      if ((se.ios || se.chrome) && e.state.selection.main.empty && a != c && (u.from > 0 || u.to < e.state.doc.length)) {
        let f = Math.min(a, c), d = Math.max(a, c), h = u.from - f, g = u.to - d;
        (h == 0 || h == 1 || f == 0) && (g == 0 || g == -1 || d == e.state.doc.length) && (a = 0, c = e.state.doc.length);
      }
      this.newSel = Y.single(c, a);
    }
  }
}
function Hm(t, e) {
  let n, { newSel: i } = e, s = t.state.selection.main, o = t.inputState.lastKeyTime > Date.now() - 100 ? t.inputState.lastKeyCode : -1;
  if (e.bounds) {
    let { from: r, to: l } = e.bounds, a = s.from, c = null;
    (o === 8 || se.android && e.text.length < l - r) && (a = s.to, c = "end");
    let u = aO(t.state.doc.sliceString(r, l, no), e.text, a - r, c);
    u && (se.chrome && o == 13 && u.toB == u.from + 2 && e.text.slice(u.from, u.toB) == no + no && u.toB--, n = {
      from: r + u.from,
      to: r + u.toA,
      insert: Ae.of(e.text.slice(u.from, u.toB).split(no))
    });
  } else i && (!t.hasFocus && t.state.facet(oi) || i.main.eq(s)) && (i = null);
  if (!n && !i)
    return !1;
  if (!n && e.typeOver && !s.empty && i && i.main.empty ? n = { from: s.from, to: s.to, insert: t.state.doc.slice(s.from, s.to) } : (se.mac || se.android) && n && n.from == n.to && n.from == s.head - 1 && /^\. ?$/.test(n.insert.toString()) && t.contentDOM.getAttribute("autocorrect") == "off" ? (i && n.insert.length == 2 && (i = Y.single(i.main.anchor - 1, i.main.head - 1)), n = { from: n.from, to: n.to, insert: Ae.of([n.insert.toString().replace(".", " ")]) }) : n && n.from >= s.from && n.to <= s.to && (n.from != s.from || n.to != s.to) && s.to - s.from - (n.to - n.from) <= 4 ? n = {
    from: s.from,
    to: s.to,
    insert: t.state.doc.slice(s.from, n.from).append(n.insert).append(t.state.doc.slice(n.to, s.to))
  } : se.chrome && n && n.from == n.to && n.from == s.head && n.insert.toString() == `
 ` && t.lineWrapping && (i && (i = Y.single(i.main.anchor - 1, i.main.head - 1)), n = { from: s.from, to: s.to, insert: Ae.of([" "]) }), n)
    return Pu(t, n, i, o);
  if (i && !i.main.eq(s)) {
    let r = !1, l = "select";
    return t.inputState.lastSelectionTime > Date.now() - 50 && (t.inputState.lastSelectionOrigin == "select" && (r = !0), l = t.inputState.lastSelectionOrigin), t.dispatch({ selection: i, scrollIntoView: r, userEvent: l }), !0;
  } else
    return !1;
}
function Pu(t, e, n, i = -1) {
  if (se.ios && t.inputState.flushIOSKey(e))
    return !0;
  let s = t.state.selection.main;
  if (se.android && (e.to == s.to && // GBoard will sometimes remove a space it just inserted
  // after a completion when you press enter
  (e.from == s.from || e.from == s.from - 1 && t.state.sliceDoc(e.from, s.from) == " ") && e.insert.length == 1 && e.insert.lines == 2 && ks(t.contentDOM, "Enter", 13) || (e.from == s.from - 1 && e.to == s.to && e.insert.length == 0 || i == 8 && e.insert.length < e.to - e.from && e.to > s.head) && ks(t.contentDOM, "Backspace", 8) || e.from == s.from && e.to == s.to + 1 && e.insert.length == 0 && ks(t.contentDOM, "Delete", 46)))
    return !0;
  let o = e.insert.toString();
  t.inputState.composing >= 0 && t.inputState.composing++;
  let r, l = () => r || (r = lO(t, e, n));
  return t.state.facet(Om).some((a) => a(t, e.from, e.to, o, l)) || t.dispatch(l()), !0;
}
function lO(t, e, n) {
  let i, s = t.state, o = s.selection.main;
  if (e.from >= o.from && e.to <= o.to && e.to - e.from >= (o.to - o.from) / 3 && (!n || n.main.empty && n.main.from == e.from + e.insert.length) && t.inputState.composing < 0) {
    let l = o.from < e.from ? s.sliceDoc(o.from, e.from) : "", a = o.to > e.to ? s.sliceDoc(e.to, o.to) : "";
    i = s.replaceSelection(t.state.toText(l + e.insert.sliceString(0, void 0, t.state.lineBreak) + a));
  } else {
    let l = s.changes(e), a = n && n.main.to <= l.newLength ? n.main : void 0;
    if (s.selection.ranges.length > 1 && t.inputState.composing >= 0 && e.to <= o.to && e.to >= o.to - 10) {
      let c = t.state.sliceDoc(e.from, e.to), u, f = n && Vm(t, n.main.head);
      if (f) {
        let g = e.insert.length - (e.to - e.from);
        u = { from: f.from, to: f.to - g };
      } else
        u = t.state.doc.lineAt(o.head);
      let d = o.to - e.to, h = o.to - o.from;
      i = s.changeByRange((g) => {
        if (g.from == o.from && g.to == o.to)
          return { changes: l, range: a || g.map(l) };
        let m = g.to - d, y = m - c.length;
        if (g.to - g.from != h || t.state.sliceDoc(y, m) != c || // Unfortunately, there's no way to make multiple
        // changes in the same node work without aborting
        // composition, so cursors in the composition range are
        // ignored.
        g.to >= u.from && g.from <= u.to)
          return { range: g };
        let v = s.changes({ from: y, to: m, insert: e.insert }), w = g.to - o.to;
        return {
          changes: v,
          range: a ? Y.range(Math.max(0, a.anchor + w), Math.max(0, a.head + w)) : g.map(v)
        };
      });
    } else
      i = {
        changes: l,
        selection: a && s.selection.replaceRange(a)
      };
  }
  let r = "input.type";
  return (t.composing || t.inputState.compositionPendingChange && t.inputState.compositionEndedAt > Date.now() - 50) && (t.inputState.compositionPendingChange = !1, r += ".compose", t.inputState.compositionFirstChange && (r += ".start", t.inputState.compositionFirstChange = !1)), s.update(i, { userEvent: r, scrollIntoView: !0 });
}
function aO(t, e, n, i) {
  let s = Math.min(t.length, e.length), o = 0;
  for (; o < s && t.charCodeAt(o) == e.charCodeAt(o); )
    o++;
  if (o == s && t.length == e.length)
    return null;
  let r = t.length, l = e.length;
  for (; r > 0 && l > 0 && t.charCodeAt(r - 1) == e.charCodeAt(l - 1); )
    r--, l--;
  if (i == "end") {
    let a = Math.max(0, o - Math.min(r, l));
    n -= r + a - o;
  }
  if (r < o && t.length < e.length) {
    let a = n <= o && n >= r ? o - n : 0;
    o -= a, l = o + (l - r), r = o;
  } else if (l < o) {
    let a = n <= o && n >= l ? o - n : 0;
    o -= a, r = o + (r - l), l = o;
  }
  return { from: o, toA: r, toB: l };
}
function cO(t) {
  let e = [];
  if (t.root.activeElement != t.contentDOM)
    return e;
  let { anchorNode: n, anchorOffset: i, focusNode: s, focusOffset: o } = t.observer.selectionRange;
  return n && (e.push(new Gd(n, i)), (s != n || o != i) && e.push(new Gd(s, o))), e;
}
function uO(t, e) {
  if (t.length == 0)
    return null;
  let n = t[0].pos, i = t.length == 2 ? t[1].pos : n;
  return n > -1 && i > -1 ? Y.single(n + e, i + e) : null;
}
class fO {
  setSelectionOrigin(e) {
    this.lastSelectionOrigin = e, this.lastSelectionTime = Date.now();
  }
  constructor(e) {
    this.view = e, this.lastKeyCode = 0, this.lastKeyTime = 0, this.lastTouchTime = 0, this.lastFocusTime = 0, this.lastScrollTop = 0, this.lastScrollLeft = 0, this.pendingIOSKey = void 0, this.tabFocusMode = -1, this.lastSelectionOrigin = null, this.lastSelectionTime = 0, this.lastContextMenu = 0, this.scrollHandlers = [], this.handlers = /* @__PURE__ */ Object.create(null), this.composing = -1, this.compositionFirstChange = null, this.compositionEndedAt = 0, this.compositionPendingKey = !1, this.compositionPendingChange = !1, this.mouseSelection = null, this.draggedContent = null, this.handleEvent = this.handleEvent.bind(this), this.notifiedFocused = e.hasFocus, se.safari && e.contentDOM.addEventListener("input", () => null), se.gecko && EO(e.contentDOM.ownerDocument);
  }
  handleEvent(e) {
    !bO(this.view, e) || this.ignoreDuringComposition(e) || e.type == "keydown" && this.keydown(e) || (this.view.updateState != 0 ? Promise.resolve().then(() => this.runHandlers(e.type, e)) : this.runHandlers(e.type, e));
  }
  runHandlers(e, n) {
    let i = this.handlers[e];
    if (i) {
      for (let s of i.observers)
        s(this.view, n);
      for (let s of i.handlers) {
        if (n.defaultPrevented)
          break;
        if (s(this.view, n)) {
          n.preventDefault();
          break;
        }
      }
    }
  }
  ensureHandlers(e) {
    let n = dO(e), i = this.handlers, s = this.view.contentDOM;
    for (let o in n)
      if (o != "scroll") {
        let r = !n[o].handlers.length, l = i[o];
        l && r != !l.handlers.length && (s.removeEventListener(o, this.handleEvent), l = null), l || s.addEventListener(o, this.handleEvent, { passive: r });
      }
    for (let o in i)
      o != "scroll" && !n[o] && s.removeEventListener(o, this.handleEvent);
    this.handlers = n;
  }
  keydown(e) {
    if (this.lastKeyCode = e.keyCode, this.lastKeyTime = Date.now(), e.keyCode == 9 && this.tabFocusMode > -1 && (!this.tabFocusMode || Date.now() <= this.tabFocusMode))
      return !0;
    if (this.tabFocusMode > 0 && e.keyCode != 27 && Gm.indexOf(e.keyCode) < 0 && (this.tabFocusMode = -1), se.android && se.chrome && !e.synthetic && (e.keyCode == 13 || e.keyCode == 8))
      return this.view.observer.delayAndroidKey(e.key, e.keyCode), !0;
    let n;
    return se.ios && !e.synthetic && !e.altKey && !e.metaKey && ((n = Wm.find((i) => i.keyCode == e.keyCode)) && !e.ctrlKey || hO.indexOf(e.key) > -1 && e.ctrlKey && !e.shiftKey) ? (this.pendingIOSKey = n || e, setTimeout(() => this.flushIOSKey(), 250), !0) : (e.keyCode != 229 && this.view.observer.forceFlush(), !1);
  }
  flushIOSKey(e) {
    let n = this.pendingIOSKey;
    return !n || n.key == "Enter" && e && e.from < e.to && /^\S+$/.test(e.insert.toString()) ? !1 : (this.pendingIOSKey = void 0, ks(this.view.contentDOM, n.key, n.keyCode, n instanceof KeyboardEvent ? n : void 0));
  }
  ignoreDuringComposition(e) {
    return /^key/.test(e.type) ? this.composing > 0 ? !0 : se.safari && !se.ios && this.compositionPendingKey && Date.now() - this.compositionEndedAt < 100 ? (this.compositionPendingKey = !1, !0) : !1 : !1;
  }
  startMouseSelection(e) {
    this.mouseSelection && this.mouseSelection.destroy(), this.mouseSelection = e;
  }
  update(e) {
    this.view.observer.update(e), this.mouseSelection && this.mouseSelection.update(e), this.draggedContent && e.docChanged && (this.draggedContent = this.draggedContent.map(e.changes)), e.transactions.length && (this.lastKeyCode = this.lastSelectionTime = 0);
  }
  destroy() {
    this.mouseSelection && this.mouseSelection.destroy();
  }
}
function jd(t, e) {
  return (n, i) => {
    try {
      return e.call(t, i, n);
    } catch (s) {
      zn(n.state, s);
    }
  };
}
function dO(t) {
  let e = /* @__PURE__ */ Object.create(null);
  function n(i) {
    return e[i] || (e[i] = { observers: [], handlers: [] });
  }
  for (let i of t) {
    let s = i.spec;
    if (s && s.domEventHandlers)
      for (let o in s.domEventHandlers) {
        let r = s.domEventHandlers[o];
        r && n(o).handlers.push(jd(i.value, r));
      }
    if (s && s.domEventObservers)
      for (let o in s.domEventObservers) {
        let r = s.domEventObservers[o];
        r && n(o).observers.push(jd(i.value, r));
      }
  }
  for (let i in Mn)
    n(i).handlers.push(Mn[i]);
  for (let i in vn)
    n(i).observers.push(vn[i]);
  return e;
}
const Wm = [
  { key: "Backspace", keyCode: 8, inputType: "deleteContentBackward" },
  { key: "Enter", keyCode: 13, inputType: "insertParagraph" },
  { key: "Enter", keyCode: 13, inputType: "insertLineBreak" },
  { key: "Delete", keyCode: 46, inputType: "deleteContentForward" }
], hO = "dthko", Gm = [16, 17, 18, 20, 91, 92, 224, 225], pr = 6;
function gr(t) {
  return Math.max(0, t) * 0.7 + 8;
}
function pO(t, e) {
  return Math.max(Math.abs(t.clientX - e.clientX), Math.abs(t.clientY - e.clientY));
}
class gO {
  constructor(e, n, i, s) {
    this.view = e, this.startEvent = n, this.style = i, this.mustSelect = s, this.scrollSpeed = { x: 0, y: 0 }, this.scrolling = -1, this.lastEvent = n, this.scrollParents = CM(e.contentDOM), this.atoms = e.state.facet(Du).map((r) => r(e));
    let o = e.contentDOM.ownerDocument;
    o.addEventListener("mousemove", this.move = this.move.bind(this)), o.addEventListener("mouseup", this.up = this.up.bind(this)), this.extend = n.shiftKey, this.multiple = e.state.facet(Me.allowMultipleSelections) && mO(e, n), this.dragging = yO(e, n) && Um(n) == 1 ? null : !1;
  }
  start(e) {
    this.dragging === !1 && this.select(e);
  }
  move(e) {
    if (e.buttons == 0)
      return this.destroy();
    if (this.dragging || this.dragging == null && pO(this.startEvent, e) < 10)
      return;
    this.select(this.lastEvent = e);
    let n = 0, i = 0, s = 0, o = 0, r = this.view.win.innerWidth, l = this.view.win.innerHeight;
    this.scrollParents.x && ({ left: s, right: r } = this.scrollParents.x.getBoundingClientRect()), this.scrollParents.y && ({ top: o, bottom: l } = this.scrollParents.y.getBoundingClientRect());
    let a = Nm(this.view);
    e.clientX - a.left <= s + pr ? n = -gr(s - e.clientX) : e.clientX + a.right >= r - pr && (n = gr(e.clientX - r)), e.clientY - a.top <= o + pr ? i = -gr(o - e.clientY) : e.clientY + a.bottom >= l - pr && (i = gr(e.clientY - l)), this.setScrollSpeed(n, i);
  }
  up(e) {
    this.dragging == null && this.select(this.lastEvent), this.dragging || e.preventDefault(), this.destroy();
  }
  destroy() {
    this.setScrollSpeed(0, 0);
    let e = this.view.contentDOM.ownerDocument;
    e.removeEventListener("mousemove", this.move), e.removeEventListener("mouseup", this.up), this.view.inputState.mouseSelection = this.view.inputState.draggedContent = null;
  }
  setScrollSpeed(e, n) {
    this.scrollSpeed = { x: e, y: n }, e || n ? this.scrolling < 0 && (this.scrolling = setInterval(() => this.scroll(), 50)) : this.scrolling > -1 && (clearInterval(this.scrolling), this.scrolling = -1);
  }
  scroll() {
    let { x: e, y: n } = this.scrollSpeed;
    e && this.scrollParents.x && (this.scrollParents.x.scrollLeft += e, e = 0), n && this.scrollParents.y && (this.scrollParents.y.scrollTop += n, n = 0), (e || n) && this.view.win.scrollBy(e, n), this.dragging === !1 && this.select(this.lastEvent);
  }
  skipAtoms(e) {
    let n = null;
    for (let i = 0; i < e.ranges.length; i++) {
      let s = e.ranges[i], o = null;
      if (s.empty) {
        let r = Fr(this.atoms, s.from, 0);
        r != s.from && (o = Y.cursor(r, -1));
      } else {
        let r = Fr(this.atoms, s.from, -1), l = Fr(this.atoms, s.to, 1);
        (r != s.from || l != s.to) && (o = Y.range(s.from == s.anchor ? r : l, s.from == s.head ? r : l));
      }
      o && (n || (n = e.ranges.slice()), n[i] = o);
    }
    return n ? Y.create(n, e.mainIndex) : e;
  }
  select(e) {
    let { view: n } = this, i = this.skipAtoms(this.style.get(e, this.extend, this.multiple));
    (this.mustSelect || !i.eq(n.state.selection, this.dragging === !1)) && this.view.dispatch({
      selection: i,
      userEvent: "select.pointer"
    }), this.mustSelect = !1;
  }
  update(e) {
    e.transactions.some((n) => n.isUserEvent("input.type")) ? this.destroy() : this.style.update(e) && setTimeout(() => this.select(this.lastEvent), 20);
  }
}
function mO(t, e) {
  let n = t.state.facet(Am);
  return n.length ? n[0](e) : se.mac ? e.metaKey : e.ctrlKey;
}
function vO(t, e) {
  let n = t.state.facet(Em);
  return n.length ? n[0](e) : se.mac ? !e.altKey : !e.ctrlKey;
}
function yO(t, e) {
  let { main: n } = t.state.selection;
  if (n.empty)
    return !1;
  let i = Io(t.root);
  if (!i || i.rangeCount == 0)
    return !0;
  let s = i.getRangeAt(0).getClientRects();
  for (let o = 0; o < s.length; o++) {
    let r = s[o];
    if (r.left <= e.clientX && r.right >= e.clientX && r.top <= e.clientY && r.bottom >= e.clientY)
      return !0;
  }
  return !1;
}
function bO(t, e) {
  if (!e.bubbles)
    return !0;
  if (e.defaultPrevented)
    return !1;
  for (let n = e.target, i; n != t.contentDOM; n = n.parentNode)
    if (!n || n.nodeType == 11 || (i = Ne.get(n)) && i.ignoreEvent(e))
      return !1;
  return !0;
}
const Mn = /* @__PURE__ */ Object.create(null), vn = /* @__PURE__ */ Object.create(null), jm = se.ie && se.ie_version < 15 || se.ios && se.webkit_version < 604;
function wO(t) {
  let e = t.dom.parentNode;
  if (!e)
    return;
  let n = e.appendChild(document.createElement("textarea"));
  n.style.cssText = "position: fixed; left: -10000px; top: 10px", n.focus(), setTimeout(() => {
    t.focus(), n.remove(), Km(t, n.value);
  }, 50);
}
function Fl(t, e, n) {
  for (let i of t.facet(e))
    n = i(n, t);
  return n;
}
function Km(t, e) {
  e = Fl(t.state, Tu, e);
  let { state: n } = t, i, s = 1, o = n.toText(e), r = o.lines == n.selection.ranges.length;
  if (mc != null && n.selection.ranges.every((a) => a.empty) && mc == o.toString()) {
    let a = -1;
    i = n.changeByRange((c) => {
      let u = n.doc.lineAt(c.from);
      if (u.from == a)
        return { range: c };
      a = u.from;
      let f = n.toText((r ? o.line(s++).text : e) + n.lineBreak);
      return {
        changes: { from: u.from, insert: f },
        range: Y.cursor(c.from + f.length)
      };
    });
  } else r ? i = n.changeByRange((a) => {
    let c = o.line(s++);
    return {
      changes: { from: a.from, to: a.to, insert: c.text },
      range: Y.cursor(a.from + c.length)
    };
  }) : i = n.replaceSelection(o);
  t.dispatch(i, {
    userEvent: "input.paste",
    scrollIntoView: !0
  });
}
vn.scroll = (t) => {
  t.inputState.lastScrollTop = t.scrollDOM.scrollTop, t.inputState.lastScrollLeft = t.scrollDOM.scrollLeft;
};
Mn.keydown = (t, e) => (t.inputState.setSelectionOrigin("select"), e.keyCode == 27 && t.inputState.tabFocusMode != 0 && (t.inputState.tabFocusMode = Date.now() + 2e3), !1);
vn.touchstart = (t, e) => {
  t.inputState.lastTouchTime = Date.now(), t.inputState.setSelectionOrigin("select.pointer");
};
vn.touchmove = (t) => {
  t.inputState.setSelectionOrigin("select.pointer");
};
Mn.mousedown = (t, e) => {
  if (t.observer.flush(), t.inputState.lastTouchTime > Date.now() - 2e3)
    return !1;
  let n = null;
  for (let i of t.state.facet(Tm))
    if (n = i(t, e), n)
      break;
  if (!n && e.button == 0 && (n = kO(t, e)), n) {
    let i = !t.hasFocus;
    t.inputState.startMouseSelection(new gO(t, e, n, i)), i && t.observer.ignore(() => {
      lm(t.contentDOM);
      let o = t.root.activeElement;
      o && !o.contains(t.contentDOM) && o.blur();
    });
    let s = t.inputState.mouseSelection;
    if (s)
      return s.start(e), s.dragging === !1;
  }
  return !1;
};
function Kd(t, e, n, i) {
  if (i == 1)
    return Y.cursor(e, n);
  if (i == 2)
    return YM(t.state, e, n);
  {
    let s = ot.find(t.docView, e), o = t.state.doc.lineAt(s ? s.posAtEnd : e), r = s ? s.posAtStart : o.from, l = s ? s.posAtEnd : o.to;
    return l < t.state.doc.length && l == o.to && l++, Y.range(r, l);
  }
}
let Ud = (t, e, n) => e >= n.top && e <= n.bottom && t >= n.left && t <= n.right;
function SO(t, e, n, i) {
  let s = ot.find(t.docView, e);
  if (!s)
    return 1;
  let o = e - s.posAtStart;
  if (o == 0)
    return 1;
  if (o == s.length)
    return -1;
  let r = s.coordsAt(o, -1);
  if (r && Ud(n, i, r))
    return -1;
  let l = s.coordsAt(o, 1);
  return l && Ud(n, i, l) ? 1 : r && r.bottom >= i ? -1 : 1;
}
function qd(t, e) {
  let n = t.posAtCoords({ x: e.clientX, y: e.clientY }, !1);
  return { pos: n, bias: SO(t, n, e.clientX, e.clientY) };
}
const CO = se.ie && se.ie_version <= 11;
let Yd = null, Jd = 0, Xd = 0;
function Um(t) {
  if (!CO)
    return t.detail;
  let e = Yd, n = Xd;
  return Yd = t, Xd = Date.now(), Jd = !e || n > Date.now() - 400 && Math.abs(e.clientX - t.clientX) < 2 && Math.abs(e.clientY - t.clientY) < 2 ? (Jd + 1) % 3 : 1;
}
function kO(t, e) {
  let n = qd(t, e), i = Um(e), s = t.state.selection;
  return {
    update(o) {
      o.docChanged && (n.pos = o.changes.mapPos(n.pos), s = s.map(o.changes));
    },
    get(o, r, l) {
      let a = qd(t, o), c, u = Kd(t, a.pos, a.bias, i);
      if (n.pos != a.pos && !r) {
        let f = Kd(t, n.pos, n.bias, i), d = Math.min(f.from, u.from), h = Math.max(f.to, u.to);
        u = d < u.from ? Y.range(d, h) : Y.range(h, d);
      }
      return r ? s.replaceRange(s.main.extend(u.from, u.to)) : l && i == 1 && s.ranges.length > 1 && (c = _O(s, a.pos)) ? c : l ? s.addRange(u) : Y.create([u]);
    }
  };
}
function _O(t, e) {
  for (let n = 0; n < t.ranges.length; n++) {
    let { from: i, to: s } = t.ranges[n];
    if (i <= e && s >= e)
      return Y.create(t.ranges.slice(0, n).concat(t.ranges.slice(n + 1)), t.mainIndex == n ? 0 : t.mainIndex - (t.mainIndex > n ? 1 : 0));
  }
  return null;
}
Mn.dragstart = (t, e) => {
  let { selection: { main: n } } = t.state;
  if (e.target.draggable) {
    let s = t.docView.nearest(e.target);
    if (s && s.isWidget) {
      let o = s.posAtStart, r = o + s.length;
      (o >= n.to || r <= n.from) && (n = Y.range(o, r));
    }
  }
  let { inputState: i } = t;
  return i.mouseSelection && (i.mouseSelection.dragging = !0), i.draggedContent = n, e.dataTransfer && (e.dataTransfer.setData("Text", Fl(t.state, Mu, t.state.sliceDoc(n.from, n.to))), e.dataTransfer.effectAllowed = "copyMove"), !1;
};
Mn.dragend = (t) => (t.inputState.draggedContent = null, !1);
function Zd(t, e, n, i) {
  if (n = Fl(t.state, Tu, n), !n)
    return;
  let s = t.posAtCoords({ x: e.clientX, y: e.clientY }, !1), { draggedContent: o } = t.inputState, r = i && o && vO(t, e) ? { from: o.from, to: o.to } : null, l = { from: s, insert: n }, a = t.state.changes(r ? [r, l] : l);
  t.focus(), t.dispatch({
    changes: a,
    selection: { anchor: a.mapPos(s, -1), head: a.mapPos(s, 1) },
    userEvent: r ? "move.drop" : "input.drop"
  }), t.inputState.draggedContent = null;
}
Mn.drop = (t, e) => {
  if (!e.dataTransfer)
    return !1;
  if (t.state.readOnly)
    return !0;
  let n = e.dataTransfer.files;
  if (n && n.length) {
    let i = Array(n.length), s = 0, o = () => {
      ++s == n.length && Zd(t, e, i.filter((r) => r != null).join(t.state.lineBreak), !1);
    };
    for (let r = 0; r < n.length; r++) {
      let l = new FileReader();
      l.onerror = o, l.onload = () => {
        /[\x00-\x08\x0e-\x1f]{2}/.test(l.result) || (i[r] = l.result), o();
      }, l.readAsText(n[r]);
    }
    return !0;
  } else {
    let i = e.dataTransfer.getData("Text");
    if (i)
      return Zd(t, e, i, !0), !0;
  }
  return !1;
};
Mn.paste = (t, e) => {
  if (t.state.readOnly)
    return !0;
  t.observer.flush();
  let n = jm ? null : e.clipboardData;
  return n ? (Km(t, n.getData("text/plain") || n.getData("text/uri-list")), !0) : (wO(t), !1);
};
function xO(t, e) {
  let n = t.dom.parentNode;
  if (!n)
    return;
  let i = n.appendChild(document.createElement("textarea"));
  i.style.cssText = "position: fixed; left: -10000px; top: 10px", i.value = e, i.focus(), i.selectionEnd = e.length, i.selectionStart = 0, setTimeout(() => {
    i.remove(), t.focus();
  }, 50);
}
function AO(t) {
  let e = [], n = [], i = !1;
  for (let s of t.selection.ranges)
    s.empty || (e.push(t.sliceDoc(s.from, s.to)), n.push(s));
  if (!e.length) {
    let s = -1;
    for (let { from: o } of t.selection.ranges) {
      let r = t.doc.lineAt(o);
      r.number > s && (e.push(r.text), n.push({ from: r.from, to: Math.min(t.doc.length, r.to + 1) })), s = r.number;
    }
    i = !0;
  }
  return { text: Fl(t, Mu, e.join(t.lineBreak)), ranges: n, linewise: i };
}
let mc = null;
Mn.copy = Mn.cut = (t, e) => {
  let { text: n, ranges: i, linewise: s } = AO(t.state);
  if (!n && !s)
    return !1;
  mc = s ? n : null, e.type == "cut" && !t.state.readOnly && t.dispatch({
    changes: i,
    scrollIntoView: !0,
    userEvent: "delete.cut"
  });
  let o = jm ? null : e.clipboardData;
  return o ? (o.clearData(), o.setData("text/plain", n), !0) : (xO(t, n), !1);
};
const qm = /* @__PURE__ */ Wi.define();
function Ym(t, e) {
  let n = [];
  for (let i of t.facet(Dm)) {
    let s = i(t, e);
    s && n.push(s);
  }
  return n ? t.update({ effects: n, annotations: qm.of(!0) }) : null;
}
function Jm(t) {
  setTimeout(() => {
    let e = t.hasFocus;
    if (e != t.inputState.notifiedFocused) {
      let n = Ym(t.state, e);
      n ? t.dispatch(n) : t.update([]);
    }
  }, 10);
}
vn.focus = (t) => {
  t.inputState.lastFocusTime = Date.now(), !t.scrollDOM.scrollTop && (t.inputState.lastScrollTop || t.inputState.lastScrollLeft) && (t.scrollDOM.scrollTop = t.inputState.lastScrollTop, t.scrollDOM.scrollLeft = t.inputState.lastScrollLeft), Jm(t);
};
vn.blur = (t) => {
  t.observer.clearSelectionRange(), Jm(t);
};
vn.compositionstart = vn.compositionupdate = (t) => {
  t.observer.editContext || (t.inputState.compositionFirstChange == null && (t.inputState.compositionFirstChange = !0), t.inputState.composing < 0 && (t.inputState.composing = 0));
};
vn.compositionend = (t) => {
  t.observer.editContext || (t.inputState.composing = -1, t.inputState.compositionEndedAt = Date.now(), t.inputState.compositionPendingKey = !0, t.inputState.compositionPendingChange = t.observer.pendingRecords().length > 0, t.inputState.compositionFirstChange = null, se.chrome && se.android ? t.observer.flushSoon() : t.inputState.compositionPendingChange ? Promise.resolve().then(() => t.observer.flush()) : setTimeout(() => {
    t.inputState.composing < 0 && t.docView.hasComposition && t.update([]);
  }, 50));
};
vn.contextmenu = (t) => {
  t.inputState.lastContextMenu = Date.now();
};
Mn.beforeinput = (t, e) => {
  var n, i;
  if (e.inputType == "insertReplacementText" && t.observer.editContext) {
    let o = (n = e.dataTransfer) === null || n === void 0 ? void 0 : n.getData("text/plain"), r = e.getTargetRanges();
    if (o && r.length) {
      let l = r[0], a = t.posAtDOM(l.startContainer, l.startOffset), c = t.posAtDOM(l.endContainer, l.endOffset);
      return Pu(t, { from: a, to: c, insert: t.state.toText(o) }, null), !0;
    }
  }
  let s;
  if (se.chrome && se.android && (s = Wm.find((o) => o.inputType == e.inputType)) && (t.observer.delayAndroidKey(s.key, s.keyCode), s.key == "Backspace" || s.key == "Delete")) {
    let o = ((i = window.visualViewport) === null || i === void 0 ? void 0 : i.height) || 0;
    setTimeout(() => {
      var r;
      (((r = window.visualViewport) === null || r === void 0 ? void 0 : r.height) || 0) > o + 10 && t.hasFocus && (t.contentDOM.blur(), t.focus());
    }, 100);
  }
  return se.ios && e.inputType == "deleteContentForward" && t.observer.flushSoon(), se.safari && e.inputType == "insertText" && t.inputState.composing >= 0 && setTimeout(() => vn.compositionend(t, e), 20), !1;
};
const Qd = /* @__PURE__ */ new Set();
function EO(t) {
  Qd.has(t) || (Qd.add(t), t.addEventListener("copy", () => {
  }), t.addEventListener("cut", () => {
  }));
}
const eh = ["pre-wrap", "normal", "pre-line", "break-spaces"];
let $s = !1;
function th() {
  $s = !1;
}
class TO {
  constructor(e) {
    this.lineWrapping = e, this.doc = Ae.empty, this.heightSamples = {}, this.lineHeight = 14, this.charWidth = 7, this.textHeight = 14, this.lineLength = 30;
  }
  heightForGap(e, n) {
    let i = this.doc.lineAt(n).number - this.doc.lineAt(e).number + 1;
    return this.lineWrapping && (i += Math.max(0, Math.ceil((n - e - i * this.lineLength * 0.5) / this.lineLength))), this.lineHeight * i;
  }
  heightForLine(e) {
    return this.lineWrapping ? (1 + Math.max(0, Math.ceil((e - this.lineLength) / (this.lineLength - 5)))) * this.lineHeight : this.lineHeight;
  }
  setDoc(e) {
    return this.doc = e, this;
  }
  mustRefreshForWrapping(e) {
    return eh.indexOf(e) > -1 != this.lineWrapping;
  }
  mustRefreshForHeights(e) {
    let n = !1;
    for (let i = 0; i < e.length; i++) {
      let s = e[i];
      s < 0 ? i++ : this.heightSamples[Math.floor(s * 10)] || (n = !0, this.heightSamples[Math.floor(s * 10)] = !0);
    }
    return n;
  }
  refresh(e, n, i, s, o, r) {
    let l = eh.indexOf(e) > -1, a = Math.round(n) != Math.round(this.lineHeight) || this.lineWrapping != l;
    if (this.lineWrapping = l, this.lineHeight = n, this.charWidth = i, this.textHeight = s, this.lineLength = o, a) {
      this.heightSamples = {};
      for (let c = 0; c < r.length; c++) {
        let u = r[c];
        u < 0 ? c++ : this.heightSamples[Math.floor(u * 10)] = !0;
      }
    }
    return a;
  }
}
class MO {
  constructor(e, n) {
    this.from = e, this.heights = n, this.index = 0;
  }
  get more() {
    return this.index < this.heights.length;
  }
}
class Fn {
  /**
  @internal
  */
  constructor(e, n, i, s, o) {
    this.from = e, this.length = n, this.top = i, this.height = s, this._content = o;
  }
  /**
  The type of element this is. When querying lines, this may be
  an array of all the blocks that make up the line.
  */
  get type() {
    return typeof this._content == "number" ? un.Text : Array.isArray(this._content) ? this._content : this._content.type;
  }
  /**
  The end of the element as a document position.
  */
  get to() {
    return this.from + this.length;
  }
  /**
  The bottom position of the element.
  */
  get bottom() {
    return this.top + this.height;
  }
  /**
  If this is a widget block, this will return the widget
  associated with it.
  */
  get widget() {
    return this._content instanceof Fi ? this._content.widget : null;
  }
  /**
  If this is a textblock, this holds the number of line breaks
  that appear in widgets inside the block.
  */
  get widgetLineBreaks() {
    return typeof this._content == "number" ? this._content : 0;
  }
  /**
  @internal
  */
  join(e) {
    let n = (Array.isArray(this._content) ? this._content : [this]).concat(Array.isArray(e._content) ? e._content : [e]);
    return new Fn(this.from, this.length + e.length, this.top, this.height + e.height, n);
  }
}
var We = /* @__PURE__ */ function(t) {
  return t[t.ByPos = 0] = "ByPos", t[t.ByHeight = 1] = "ByHeight", t[t.ByPosNoHeight = 2] = "ByPosNoHeight", t;
}(We || (We = {}));
const Nr = 1e-3;
class $t {
  constructor(e, n, i = 2) {
    this.length = e, this.height = n, this.flags = i;
  }
  get outdated() {
    return (this.flags & 2) > 0;
  }
  set outdated(e) {
    this.flags = (e ? 2 : 0) | this.flags & -3;
  }
  setHeight(e) {
    this.height != e && (Math.abs(this.height - e) > Nr && ($s = !0), this.height = e);
  }
  // Base case is to replace a leaf node, which simply builds a tree
  // from the new nodes and returns that (HeightMapBranch and
  // HeightMapGap override this to actually use from/to)
  replace(e, n, i) {
    return $t.of(i);
  }
  // Again, these are base cases, and are overridden for branch and gap nodes.
  decomposeLeft(e, n) {
    n.push(this);
  }
  decomposeRight(e, n) {
    n.push(this);
  }
  applyChanges(e, n, i, s) {
    let o = this, r = i.doc;
    for (let l = s.length - 1; l >= 0; l--) {
      let { fromA: a, toA: c, fromB: u, toB: f } = s[l], d = o.lineAt(a, We.ByPosNoHeight, i.setDoc(n), 0, 0), h = d.to >= c ? d : o.lineAt(c, We.ByPosNoHeight, i, 0, 0);
      for (f += h.to - c, c = h.to; l > 0 && d.from <= s[l - 1].toA; )
        a = s[l - 1].fromA, u = s[l - 1].fromB, l--, a < d.from && (d = o.lineAt(a, We.ByPosNoHeight, i, 0, 0));
      u += d.from - a, a = d.from;
      let g = Iu.build(i.setDoc(r), e, u, f);
      o = rl(o, o.replace(a, c, g));
    }
    return o.updateHeight(i, 0);
  }
  static empty() {
    return new Xt(0, 0);
  }
  // nodes uses null values to indicate the position of line breaks.
  // There are never line breaks at the start or end of the array, or
  // two line breaks next to each other, and the array isn't allowed
  // to be empty (same restrictions as return value from the builder).
  static of(e) {
    if (e.length == 1)
      return e[0];
    let n = 0, i = e.length, s = 0, o = 0;
    for (; ; )
      if (n == i)
        if (s > o * 2) {
          let l = e[n - 1];
          l.break ? e.splice(--n, 1, l.left, null, l.right) : e.splice(--n, 1, l.left, l.right), i += 1 + l.break, s -= l.size;
        } else if (o > s * 2) {
          let l = e[i];
          l.break ? e.splice(i, 1, l.left, null, l.right) : e.splice(i, 1, l.left, l.right), i += 2 + l.break, o -= l.size;
        } else
          break;
      else if (s < o) {
        let l = e[n++];
        l && (s += l.size);
      } else {
        let l = e[--i];
        l && (o += l.size);
      }
    let r = 0;
    return e[n - 1] == null ? (r = 1, n--) : e[n] == null && (r = 1, i++), new OO($t.of(e.slice(0, n)), r, $t.of(e.slice(i)));
  }
}
function rl(t, e) {
  return t == e ? t : (t.constructor != e.constructor && ($s = !0), e);
}
$t.prototype.size = 1;
class Xm extends $t {
  constructor(e, n, i) {
    super(e, n), this.deco = i;
  }
  blockAt(e, n, i, s) {
    return new Fn(s, this.length, i, this.height, this.deco || 0);
  }
  lineAt(e, n, i, s, o) {
    return this.blockAt(0, i, s, o);
  }
  forEachLine(e, n, i, s, o, r) {
    e <= o + this.length && n >= o && r(this.blockAt(0, i, s, o));
  }
  updateHeight(e, n = 0, i = !1, s) {
    return s && s.from <= n && s.more && this.setHeight(s.heights[s.index++]), this.outdated = !1, this;
  }
  toString() {
    return `block(${this.length})`;
  }
}
class Xt extends Xm {
  constructor(e, n) {
    super(e, n, null), this.collapsed = 0, this.widgetHeight = 0, this.breaks = 0;
  }
  blockAt(e, n, i, s) {
    return new Fn(s, this.length, i, this.height, this.breaks);
  }
  replace(e, n, i) {
    let s = i[0];
    return i.length == 1 && (s instanceof Xt || s instanceof yt && s.flags & 4) && Math.abs(this.length - s.length) < 10 ? (s instanceof yt ? s = new Xt(s.length, this.height) : s.height = this.height, this.outdated || (s.outdated = !1), s) : $t.of(i);
  }
  updateHeight(e, n = 0, i = !1, s) {
    return s && s.from <= n && s.more ? this.setHeight(s.heights[s.index++]) : (i || this.outdated) && this.setHeight(Math.max(this.widgetHeight, e.heightForLine(this.length - this.collapsed)) + this.breaks * e.lineHeight), this.outdated = !1, this;
  }
  toString() {
    return `line(${this.length}${this.collapsed ? -this.collapsed : ""}${this.widgetHeight ? ":" + this.widgetHeight : ""})`;
  }
}
class yt extends $t {
  constructor(e) {
    super(e, 0);
  }
  heightMetrics(e, n) {
    let i = e.doc.lineAt(n).number, s = e.doc.lineAt(n + this.length).number, o = s - i + 1, r, l = 0;
    if (e.lineWrapping) {
      let a = Math.min(this.height, e.lineHeight * o);
      r = a / o, this.length > o + 1 && (l = (this.height - a) / (this.length - o - 1));
    } else
      r = this.height / o;
    return { firstLine: i, lastLine: s, perLine: r, perChar: l };
  }
  blockAt(e, n, i, s) {
    let { firstLine: o, lastLine: r, perLine: l, perChar: a } = this.heightMetrics(n, s);
    if (n.lineWrapping) {
      let c = s + (e < n.lineHeight ? 0 : Math.round(Math.max(0, Math.min(1, (e - i) / this.height)) * this.length)), u = n.doc.lineAt(c), f = l + u.length * a, d = Math.max(i, e - f / 2);
      return new Fn(u.from, u.length, d, f, 0);
    } else {
      let c = Math.max(0, Math.min(r - o, Math.floor((e - i) / l))), { from: u, length: f } = n.doc.line(o + c);
      return new Fn(u, f, i + l * c, l, 0);
    }
  }
  lineAt(e, n, i, s, o) {
    if (n == We.ByHeight)
      return this.blockAt(e, i, s, o);
    if (n == We.ByPosNoHeight) {
      let { from: h, to: g } = i.doc.lineAt(e);
      return new Fn(h, g - h, 0, 0, 0);
    }
    let { firstLine: r, perLine: l, perChar: a } = this.heightMetrics(i, o), c = i.doc.lineAt(e), u = l + c.length * a, f = c.number - r, d = s + l * f + a * (c.from - o - f);
    return new Fn(c.from, c.length, Math.max(s, Math.min(d, s + this.height - u)), u, 0);
  }
  forEachLine(e, n, i, s, o, r) {
    e = Math.max(e, o), n = Math.min(n, o + this.length);
    let { firstLine: l, perLine: a, perChar: c } = this.heightMetrics(i, o);
    for (let u = e, f = s; u <= n; ) {
      let d = i.doc.lineAt(u);
      if (u == e) {
        let g = d.number - l;
        f += a * g + c * (e - o - g);
      }
      let h = a + c * d.length;
      r(new Fn(d.from, d.length, f, h, 0)), f += h, u = d.to + 1;
    }
  }
  replace(e, n, i) {
    let s = this.length - n;
    if (s > 0) {
      let o = i[i.length - 1];
      o instanceof yt ? i[i.length - 1] = new yt(o.length + s) : i.push(null, new yt(s - 1));
    }
    if (e > 0) {
      let o = i[0];
      o instanceof yt ? i[0] = new yt(e + o.length) : i.unshift(new yt(e - 1), null);
    }
    return $t.of(i);
  }
  decomposeLeft(e, n) {
    n.push(new yt(e - 1), null);
  }
  decomposeRight(e, n) {
    n.push(null, new yt(this.length - e - 1));
  }
  updateHeight(e, n = 0, i = !1, s) {
    let o = n + this.length;
    if (s && s.from <= n + this.length && s.more) {
      let r = [], l = Math.max(n, s.from), a = -1;
      for (s.from > n && r.push(new yt(s.from - n - 1).updateHeight(e, n)); l <= o && s.more; ) {
        let u = e.doc.lineAt(l).length;
        r.length && r.push(null);
        let f = s.heights[s.index++];
        a == -1 ? a = f : Math.abs(f - a) >= Nr && (a = -2);
        let d = new Xt(u, f);
        d.outdated = !1, r.push(d), l += u + 1;
      }
      l <= o && r.push(null, new yt(o - l).updateHeight(e, l));
      let c = $t.of(r);
      return (a < 0 || Math.abs(c.height - this.height) >= Nr || Math.abs(a - this.heightMetrics(e, n).perLine) >= Nr) && ($s = !0), rl(this, c);
    } else (i || this.outdated) && (this.setHeight(e.heightForGap(n, n + this.length)), this.outdated = !1);
    return this;
  }
  toString() {
    return `gap(${this.length})`;
  }
}
class OO extends $t {
  constructor(e, n, i) {
    super(e.length + n + i.length, e.height + i.height, n | (e.outdated || i.outdated ? 2 : 0)), this.left = e, this.right = i, this.size = e.size + i.size;
  }
  get break() {
    return this.flags & 1;
  }
  blockAt(e, n, i, s) {
    let o = i + this.left.height;
    return e < o ? this.left.blockAt(e, n, i, s) : this.right.blockAt(e, n, o, s + this.left.length + this.break);
  }
  lineAt(e, n, i, s, o) {
    let r = s + this.left.height, l = o + this.left.length + this.break, a = n == We.ByHeight ? e < r : e < l, c = a ? this.left.lineAt(e, n, i, s, o) : this.right.lineAt(e, n, i, r, l);
    if (this.break || (a ? c.to < l : c.from > l))
      return c;
    let u = n == We.ByPosNoHeight ? We.ByPosNoHeight : We.ByPos;
    return a ? c.join(this.right.lineAt(l, u, i, r, l)) : this.left.lineAt(l, u, i, s, o).join(c);
  }
  forEachLine(e, n, i, s, o, r) {
    let l = s + this.left.height, a = o + this.left.length + this.break;
    if (this.break)
      e < a && this.left.forEachLine(e, n, i, s, o, r), n >= a && this.right.forEachLine(e, n, i, l, a, r);
    else {
      let c = this.lineAt(a, We.ByPos, i, s, o);
      e < c.from && this.left.forEachLine(e, c.from - 1, i, s, o, r), c.to >= e && c.from <= n && r(c), n > c.to && this.right.forEachLine(c.to + 1, n, i, l, a, r);
    }
  }
  replace(e, n, i) {
    let s = this.left.length + this.break;
    if (n < s)
      return this.balanced(this.left.replace(e, n, i), this.right);
    if (e > this.left.length)
      return this.balanced(this.left, this.right.replace(e - s, n - s, i));
    let o = [];
    e > 0 && this.decomposeLeft(e, o);
    let r = o.length;
    for (let l of i)
      o.push(l);
    if (e > 0 && nh(o, r - 1), n < this.length) {
      let l = o.length;
      this.decomposeRight(n, o), nh(o, l);
    }
    return $t.of(o);
  }
  decomposeLeft(e, n) {
    let i = this.left.length;
    if (e <= i)
      return this.left.decomposeLeft(e, n);
    n.push(this.left), this.break && (i++, e >= i && n.push(null)), e > i && this.right.decomposeLeft(e - i, n);
  }
  decomposeRight(e, n) {
    let i = this.left.length, s = i + this.break;
    if (e >= s)
      return this.right.decomposeRight(e - s, n);
    e < i && this.left.decomposeRight(e, n), this.break && e < s && n.push(null), n.push(this.right);
  }
  balanced(e, n) {
    return e.size > 2 * n.size || n.size > 2 * e.size ? $t.of(this.break ? [e, null, n] : [e, n]) : (this.left = rl(this.left, e), this.right = rl(this.right, n), this.setHeight(e.height + n.height), this.outdated = e.outdated || n.outdated, this.size = e.size + n.size, this.length = e.length + this.break + n.length, this);
  }
  updateHeight(e, n = 0, i = !1, s) {
    let { left: o, right: r } = this, l = n + o.length + this.break, a = null;
    return s && s.from <= n + o.length && s.more ? a = o = o.updateHeight(e, n, i, s) : o.updateHeight(e, n, i), s && s.from <= l + r.length && s.more ? a = r = r.updateHeight(e, l, i, s) : r.updateHeight(e, l, i), a ? this.balanced(o, r) : (this.height = this.left.height + this.right.height, this.outdated = !1, this);
  }
  toString() {
    return this.left + (this.break ? " " : "-") + this.right;
  }
}
function nh(t, e) {
  let n, i;
  t[e] == null && (n = t[e - 1]) instanceof yt && (i = t[e + 1]) instanceof yt && t.splice(e - 1, 3, new yt(n.length + 1 + i.length));
}
const DO = 5;
class Iu {
  constructor(e, n) {
    this.pos = e, this.oracle = n, this.nodes = [], this.lineStart = -1, this.lineEnd = -1, this.covering = null, this.writtenTo = e;
  }
  get isCovered() {
    return this.covering && this.nodes[this.nodes.length - 1] == this.covering;
  }
  span(e, n) {
    if (this.lineStart > -1) {
      let i = Math.min(n, this.lineEnd), s = this.nodes[this.nodes.length - 1];
      s instanceof Xt ? s.length += i - this.pos : (i > this.pos || !this.isCovered) && this.nodes.push(new Xt(i - this.pos, -1)), this.writtenTo = i, n > i && (this.nodes.push(null), this.writtenTo++, this.lineStart = -1);
    }
    this.pos = n;
  }
  point(e, n, i) {
    if (e < n || i.heightRelevant) {
      let s = i.widget ? i.widget.estimatedHeight : 0, o = i.widget ? i.widget.lineBreaks : 0;
      s < 0 && (s = this.oracle.lineHeight);
      let r = n - e;
      i.block ? this.addBlock(new Xm(r, s, i)) : (r || o || s >= DO) && this.addLineDeco(s, o, r);
    } else n > e && this.span(e, n);
    this.lineEnd > -1 && this.lineEnd < this.pos && (this.lineEnd = this.oracle.doc.lineAt(this.pos).to);
  }
  enterLine() {
    if (this.lineStart > -1)
      return;
    let { from: e, to: n } = this.oracle.doc.lineAt(this.pos);
    this.lineStart = e, this.lineEnd = n, this.writtenTo < e && ((this.writtenTo < e - 1 || this.nodes[this.nodes.length - 1] == null) && this.nodes.push(this.blankContent(this.writtenTo, e - 1)), this.nodes.push(null)), this.pos > e && this.nodes.push(new Xt(this.pos - e, -1)), this.writtenTo = this.pos;
  }
  blankContent(e, n) {
    let i = new yt(n - e);
    return this.oracle.doc.lineAt(e).to == n && (i.flags |= 4), i;
  }
  ensureLine() {
    this.enterLine();
    let e = this.nodes.length ? this.nodes[this.nodes.length - 1] : null;
    if (e instanceof Xt)
      return e;
    let n = new Xt(0, -1);
    return this.nodes.push(n), n;
  }
  addBlock(e) {
    this.enterLine();
    let n = e.deco;
    n && n.startSide > 0 && !this.isCovered && this.ensureLine(), this.nodes.push(e), this.writtenTo = this.pos = this.pos + e.length, n && n.endSide > 0 && (this.covering = e);
  }
  addLineDeco(e, n, i) {
    let s = this.ensureLine();
    s.length += i, s.collapsed += i, s.widgetHeight = Math.max(s.widgetHeight, e), s.breaks += n, this.writtenTo = this.pos = this.pos + i;
  }
  finish(e) {
    let n = this.nodes.length == 0 ? null : this.nodes[this.nodes.length - 1];
    this.lineStart > -1 && !(n instanceof Xt) && !this.isCovered ? this.nodes.push(new Xt(0, -1)) : (this.writtenTo < this.pos || n == null) && this.nodes.push(this.blankContent(this.writtenTo, this.pos));
    let i = e;
    for (let s of this.nodes)
      s instanceof Xt && s.updateHeight(this.oracle, i), i += s ? s.length : 1;
    return this.nodes;
  }
  // Always called with a region that on both sides either stretches
  // to a line break or the end of the document.
  // The returned array uses null to indicate line breaks, but never
  // starts or ends in a line break, or has multiple line breaks next
  // to each other.
  static build(e, n, i, s) {
    let o = new Iu(i, e);
    return Pe.spans(n, i, s, o, 0), o.finish(i);
  }
}
function PO(t, e, n) {
  let i = new IO();
  return Pe.compare(t, e, n, i, 0), i.changes;
}
class IO {
  constructor() {
    this.changes = [];
  }
  compareRange() {
  }
  comparePoint(e, n, i, s) {
    (e < n || i && i.heightRelevant || s && s.heightRelevant) && $r(e, n, this.changes, 5);
  }
}
function RO(t, e) {
  let n = t.getBoundingClientRect(), i = t.ownerDocument, s = i.defaultView || window, o = Math.max(0, n.left), r = Math.min(s.innerWidth, n.right), l = Math.max(0, n.top), a = Math.min(s.innerHeight, n.bottom);
  for (let c = t.parentNode; c && c != i.body; )
    if (c.nodeType == 1) {
      let u = c, f = window.getComputedStyle(u);
      if ((u.scrollHeight > u.clientHeight || u.scrollWidth > u.clientWidth) && f.overflow != "visible") {
        let d = u.getBoundingClientRect();
        o = Math.max(o, d.left), r = Math.min(r, d.right), l = Math.max(l, d.top), a = Math.min(c == t.parentNode ? s.innerHeight : a, d.bottom);
      }
      c = f.position == "absolute" || f.position == "fixed" ? u.offsetParent : u.parentNode;
    } else if (c.nodeType == 11)
      c = c.host;
    else
      break;
  return {
    left: o - n.left,
    right: Math.max(o, r) - n.left,
    top: l - (n.top + e),
    bottom: Math.max(l, a) - (n.top + e)
  };
}
function LO(t) {
  let e = t.getBoundingClientRect(), n = t.ownerDocument.defaultView || window;
  return e.left < n.innerWidth && e.right > 0 && e.top < n.innerHeight && e.bottom > 0;
}
function BO(t, e) {
  let n = t.getBoundingClientRect();
  return {
    left: 0,
    right: n.right - n.left,
    top: e,
    bottom: n.bottom - (n.top + e)
  };
}
class ga {
  constructor(e, n, i, s) {
    this.from = e, this.to = n, this.size = i, this.displaySize = s;
  }
  static same(e, n) {
    if (e.length != n.length)
      return !1;
    for (let i = 0; i < e.length; i++) {
      let s = e[i], o = n[i];
      if (s.from != o.from || s.to != o.to || s.size != o.size)
        return !1;
    }
    return !0;
  }
  draw(e, n) {
    return kt.replace({
      widget: new $O(this.displaySize * (n ? e.scaleY : e.scaleX), n)
    }).range(this.from, this.to);
  }
}
class $O extends Au {
  constructor(e, n) {
    super(), this.size = e, this.vertical = n;
  }
  eq(e) {
    return e.size == this.size && e.vertical == this.vertical;
  }
  toDOM() {
    let e = document.createElement("div");
    return this.vertical ? e.style.height = this.size + "px" : (e.style.width = this.size + "px", e.style.height = "2px", e.style.display = "inline-block"), e;
  }
  get estimatedHeight() {
    return this.vertical ? this.size : -1;
  }
}
class ih {
  constructor(e) {
    this.state = e, this.pixelViewport = { left: 0, right: window.innerWidth, top: 0, bottom: 0 }, this.inView = !0, this.paddingTop = 0, this.paddingBottom = 0, this.contentDOMWidth = 0, this.contentDOMHeight = 0, this.editorHeight = 0, this.editorWidth = 0, this.scrollTop = 0, this.scrolledToBottom = !1, this.scaleX = 1, this.scaleY = 1, this.scrollAnchorPos = 0, this.scrollAnchorHeight = -1, this.scaler = sh, this.scrollTarget = null, this.printing = !1, this.mustMeasureContent = !0, this.defaultTextDirection = ht.LTR, this.visibleRanges = [], this.mustEnforceCursorAssoc = !1;
    let n = e.facet(Ou).some((i) => typeof i != "function" && i.class == "cm-lineWrapping");
    this.heightOracle = new TO(n), this.stateDeco = e.facet(Lo).filter((i) => typeof i != "function"), this.heightMap = $t.empty().applyChanges(this.stateDeco, Ae.empty, this.heightOracle.setDoc(e.doc), [new fn(0, 0, 0, e.doc.length)]);
    for (let i = 0; i < 2 && (this.viewport = this.getViewport(0, null), !!this.updateForViewport()); i++)
      ;
    this.updateViewportLines(), this.lineGaps = this.ensureLineGaps([]), this.lineGapDeco = kt.set(this.lineGaps.map((i) => i.draw(this, !1))), this.computeVisibleRanges();
  }
  updateForViewport() {
    let e = [this.viewport], { main: n } = this.state.selection;
    for (let i = 0; i <= 1; i++) {
      let s = i ? n.head : n.anchor;
      if (!e.some(({ from: o, to: r }) => s >= o && s <= r)) {
        let { from: o, to: r } = this.lineBlockAt(s);
        e.push(new mr(o, r));
      }
    }
    return this.viewports = e.sort((i, s) => i.from - s.from), this.updateScaler();
  }
  updateScaler() {
    let e = this.scaler;
    return this.scaler = this.heightMap.height <= 7e6 ? sh : new Ru(this.heightOracle, this.heightMap, this.viewports), e.eq(this.scaler) ? 0 : 2;
  }
  updateViewportLines() {
    this.viewportLines = [], this.heightMap.forEachLine(this.viewport.from, this.viewport.to, this.heightOracle.setDoc(this.state.doc), 0, 0, (e) => {
      this.viewportLines.push(io(e, this.scaler));
    });
  }
  update(e, n = null) {
    this.state = e.state;
    let i = this.stateDeco;
    this.stateDeco = this.state.facet(Lo).filter((u) => typeof u != "function");
    let s = e.changedRanges, o = fn.extendWithRanges(s, PO(i, this.stateDeco, e ? e.changes : ut.empty(this.state.doc.length))), r = this.heightMap.height, l = this.scrolledToBottom ? null : this.scrollAnchorAt(this.scrollTop);
    th(), this.heightMap = this.heightMap.applyChanges(this.stateDeco, e.startState.doc, this.heightOracle.setDoc(this.state.doc), o), (this.heightMap.height != r || $s) && (e.flags |= 2), l ? (this.scrollAnchorPos = e.changes.mapPos(l.from, -1), this.scrollAnchorHeight = l.top) : (this.scrollAnchorPos = -1, this.scrollAnchorHeight = this.heightMap.height);
    let a = o.length ? this.mapViewport(this.viewport, e.changes) : this.viewport;
    (n && (n.range.head < a.from || n.range.head > a.to) || !this.viewportIsAppropriate(a)) && (a = this.getViewport(0, n));
    let c = a.from != this.viewport.from || a.to != this.viewport.to;
    this.viewport = a, e.flags |= this.updateForViewport(), (c || !e.changes.empty || e.flags & 2) && this.updateViewportLines(), (this.lineGaps.length || this.viewport.to - this.viewport.from > 4e3) && this.updateLineGaps(this.ensureLineGaps(this.mapLineGaps(this.lineGaps, e.changes))), e.flags |= this.computeVisibleRanges(e.changes), n && (this.scrollTarget = n), !this.mustEnforceCursorAssoc && e.selectionSet && e.view.lineWrapping && e.state.selection.main.empty && e.state.selection.main.assoc && !e.state.facet(VM) && (this.mustEnforceCursorAssoc = !0);
  }
  measure(e) {
    let n = e.contentDOM, i = window.getComputedStyle(n), s = this.heightOracle, o = i.whiteSpace;
    this.defaultTextDirection = i.direction == "rtl" ? ht.RTL : ht.LTR;
    let r = this.heightOracle.mustRefreshForWrapping(o), l = n.getBoundingClientRect(), a = r || this.mustMeasureContent || this.contentDOMHeight != l.height;
    this.contentDOMHeight = l.height, this.mustMeasureContent = !1;
    let c = 0, u = 0;
    if (l.width && l.height) {
      let { scaleX: x, scaleY: k } = rm(n, l);
      (x > 5e-3 && Math.abs(this.scaleX - x) > 5e-3 || k > 5e-3 && Math.abs(this.scaleY - k) > 5e-3) && (this.scaleX = x, this.scaleY = k, c |= 16, r = a = !0);
    }
    let f = (parseInt(i.paddingTop) || 0) * this.scaleY, d = (parseInt(i.paddingBottom) || 0) * this.scaleY;
    (this.paddingTop != f || this.paddingBottom != d) && (this.paddingTop = f, this.paddingBottom = d, c |= 18), this.editorWidth != e.scrollDOM.clientWidth && (s.lineWrapping && (a = !0), this.editorWidth = e.scrollDOM.clientWidth, c |= 16);
    let h = e.scrollDOM.scrollTop * this.scaleY;
    this.scrollTop != h && (this.scrollAnchorHeight = -1, this.scrollTop = h), this.scrolledToBottom = cm(e.scrollDOM);
    let g = (this.printing ? BO : RO)(n, this.paddingTop), m = g.top - this.pixelViewport.top, y = g.bottom - this.pixelViewport.bottom;
    this.pixelViewport = g;
    let v = this.pixelViewport.bottom > this.pixelViewport.top && this.pixelViewport.right > this.pixelViewport.left;
    if (v != this.inView && (this.inView = v, v && (a = !0)), !this.inView && !this.scrollTarget && !LO(e.dom))
      return 0;
    let w = l.width;
    if ((this.contentDOMWidth != w || this.editorHeight != e.scrollDOM.clientHeight) && (this.contentDOMWidth = l.width, this.editorHeight = e.scrollDOM.clientHeight, c |= 16), a) {
      let x = e.docView.measureVisibleLineHeights(this.viewport);
      if (s.mustRefreshForHeights(x) && (r = !0), r || s.lineWrapping && Math.abs(w - this.contentDOMWidth) > s.charWidth) {
        let { lineHeight: k, charWidth: T, textHeight: A } = e.docView.measureTextSize();
        r = k > 0 && s.refresh(o, k, T, A, w / T, x), r && (e.docView.minWidth = 0, c |= 16);
      }
      m > 0 && y > 0 ? u = Math.max(m, y) : m < 0 && y < 0 && (u = Math.min(m, y)), th();
      for (let k of this.viewports) {
        let T = k.from == this.viewport.from ? x : e.docView.measureVisibleLineHeights(k);
        this.heightMap = (r ? $t.empty().applyChanges(this.stateDeco, Ae.empty, this.heightOracle, [new fn(0, 0, 0, e.state.doc.length)]) : this.heightMap).updateHeight(s, 0, r, new MO(k.from, T));
      }
      $s && (c |= 2);
    }
    let _ = !this.viewportIsAppropriate(this.viewport, u) || this.scrollTarget && (this.scrollTarget.range.head < this.viewport.from || this.scrollTarget.range.head > this.viewport.to);
    return _ && (c & 2 && (c |= this.updateScaler()), this.viewport = this.getViewport(u, this.scrollTarget), c |= this.updateForViewport()), (c & 2 || _) && this.updateViewportLines(), (this.lineGaps.length || this.viewport.to - this.viewport.from > 4e3) && this.updateLineGaps(this.ensureLineGaps(r ? [] : this.lineGaps, e)), c |= this.computeVisibleRanges(), this.mustEnforceCursorAssoc && (this.mustEnforceCursorAssoc = !1, e.docView.enforceCursorAssoc()), c;
  }
  get visibleTop() {
    return this.scaler.fromDOM(this.pixelViewport.top);
  }
  get visibleBottom() {
    return this.scaler.fromDOM(this.pixelViewport.bottom);
  }
  getViewport(e, n) {
    let i = 0.5 - Math.max(-0.5, Math.min(0.5, e / 1e3 / 2)), s = this.heightMap, o = this.heightOracle, { visibleTop: r, visibleBottom: l } = this, a = new mr(s.lineAt(r - i * 1e3, We.ByHeight, o, 0, 0).from, s.lineAt(l + (1 - i) * 1e3, We.ByHeight, o, 0, 0).to);
    if (n) {
      let { head: c } = n.range;
      if (c < a.from || c > a.to) {
        let u = Math.min(this.editorHeight, this.pixelViewport.bottom - this.pixelViewport.top), f = s.lineAt(c, We.ByPos, o, 0, 0), d;
        n.y == "center" ? d = (f.top + f.bottom) / 2 - u / 2 : n.y == "start" || n.y == "nearest" && c < a.from ? d = f.top : d = f.bottom - u, a = new mr(s.lineAt(d - 1e3 / 2, We.ByHeight, o, 0, 0).from, s.lineAt(d + u + 1e3 / 2, We.ByHeight, o, 0, 0).to);
      }
    }
    return a;
  }
  mapViewport(e, n) {
    let i = n.mapPos(e.from, -1), s = n.mapPos(e.to, 1);
    return new mr(this.heightMap.lineAt(i, We.ByPos, this.heightOracle, 0, 0).from, this.heightMap.lineAt(s, We.ByPos, this.heightOracle, 0, 0).to);
  }
  // Checks if a given viewport covers the visible part of the
  // document and not too much beyond that.
  viewportIsAppropriate({ from: e, to: n }, i = 0) {
    if (!this.inView)
      return !0;
    let { top: s } = this.heightMap.lineAt(e, We.ByPos, this.heightOracle, 0, 0), { bottom: o } = this.heightMap.lineAt(n, We.ByPos, this.heightOracle, 0, 0), { visibleTop: r, visibleBottom: l } = this;
    return (e == 0 || s <= r - Math.max(10, Math.min(
      -i,
      250
      /* VP.MaxCoverMargin */
    ))) && (n == this.state.doc.length || o >= l + Math.max(10, Math.min(
      i,
      250
      /* VP.MaxCoverMargin */
    ))) && s > r - 2 * 1e3 && o < l + 2 * 1e3;
  }
  mapLineGaps(e, n) {
    if (!e.length || n.empty)
      return e;
    let i = [];
    for (let s of e)
      n.touchesRange(s.from, s.to) || i.push(new ga(n.mapPos(s.from), n.mapPos(s.to), s.size, s.displaySize));
    return i;
  }
  // Computes positions in the viewport where the start or end of a
  // line should be hidden, trying to reuse existing line gaps when
  // appropriate to avoid unneccesary redraws.
  // Uses crude character-counting for the positioning and sizing,
  // since actual DOM coordinates aren't always available and
  // predictable. Relies on generous margins (see LG.Margin) to hide
  // the artifacts this might produce from the user.
  ensureLineGaps(e, n) {
    let i = this.heightOracle.lineWrapping, s = i ? 1e4 : 2e3, o = s >> 1, r = s << 1;
    if (this.defaultTextDirection != ht.LTR && !i)
      return [];
    let l = [], a = (u, f, d, h) => {
      if (f - u < o)
        return;
      let g = this.state.selection.main, m = [g.from];
      g.empty || m.push(g.to);
      for (let v of m)
        if (v > u && v < f) {
          a(u, v - 10, d, h), a(v + 10, f, d, h);
          return;
        }
      let y = NO(e, (v) => v.from >= d.from && v.to <= d.to && Math.abs(v.from - u) < o && Math.abs(v.to - f) < o && !m.some((w) => v.from < w && v.to > w));
      if (!y) {
        if (f < d.to && n && i && n.visibleRanges.some((_) => _.from <= f && _.to >= f)) {
          let _ = n.moveToLineBoundary(Y.cursor(f), !1, !0).head;
          _ > u && (f = _);
        }
        let v = this.gapSize(d, u, f, h), w = i || v < 2e6 ? v : 2e6;
        y = new ga(u, f, v, w);
      }
      l.push(y);
    }, c = (u) => {
      if (u.length < r || u.type != un.Text)
        return;
      let f = FO(u.from, u.to, this.stateDeco);
      if (f.total < r)
        return;
      let d = this.scrollTarget ? this.scrollTarget.range.head : null, h, g;
      if (i) {
        let m = s / this.heightOracle.lineLength * this.heightOracle.lineHeight, y, v;
        if (d != null) {
          let w = yr(f, d), _ = ((this.visibleBottom - this.visibleTop) / 2 + m) / u.height;
          y = w - _, v = w + _;
        } else
          y = (this.visibleTop - u.top - m) / u.height, v = (this.visibleBottom - u.top + m) / u.height;
        h = vr(f, y), g = vr(f, v);
      } else {
        let m = f.total * this.heightOracle.charWidth, y = s * this.heightOracle.charWidth, v = 0;
        if (m > 2e6)
          for (let T of e)
            T.from >= u.from && T.from < u.to && T.size != T.displaySize && T.from * this.heightOracle.charWidth + v < this.pixelViewport.left && (v = T.size - T.displaySize);
        let w = this.pixelViewport.left + v, _ = this.pixelViewport.right + v, x, k;
        if (d != null) {
          let T = yr(f, d), A = ((_ - w) / 2 + y) / m;
          x = T - A, k = T + A;
        } else
          x = (w - y) / m, k = (_ + y) / m;
        h = vr(f, x), g = vr(f, k);
      }
      h > u.from && a(u.from, h, u, f), g < u.to && a(g, u.to, u, f);
    };
    for (let u of this.viewportLines)
      Array.isArray(u.type) ? u.type.forEach(c) : c(u);
    return l;
  }
  gapSize(e, n, i, s) {
    let o = yr(s, i) - yr(s, n);
    return this.heightOracle.lineWrapping ? e.height * o : s.total * this.heightOracle.charWidth * o;
  }
  updateLineGaps(e) {
    ga.same(e, this.lineGaps) || (this.lineGaps = e, this.lineGapDeco = kt.set(e.map((n) => n.draw(this, this.heightOracle.lineWrapping))));
  }
  computeVisibleRanges(e) {
    let n = this.stateDeco;
    this.lineGaps.length && (n = n.concat(this.lineGapDeco));
    let i = [];
    Pe.spans(n, this.viewport.from, this.viewport.to, {
      span(o, r) {
        i.push({ from: o, to: r });
      },
      point() {
      }
    }, 20);
    let s = 0;
    if (i.length != this.visibleRanges.length)
      s = 12;
    else
      for (let o = 0; o < i.length && !(s & 8); o++) {
        let r = this.visibleRanges[o], l = i[o];
        (r.from != l.from || r.to != l.to) && (s |= 4, e && e.mapPos(r.from, -1) == l.from && e.mapPos(r.to, 1) == l.to || (s |= 8));
      }
    return this.visibleRanges = i, s;
  }
  lineBlockAt(e) {
    return e >= this.viewport.from && e <= this.viewport.to && this.viewportLines.find((n) => n.from <= e && n.to >= e) || io(this.heightMap.lineAt(e, We.ByPos, this.heightOracle, 0, 0), this.scaler);
  }
  lineBlockAtHeight(e) {
    return e >= this.viewportLines[0].top && e <= this.viewportLines[this.viewportLines.length - 1].bottom && this.viewportLines.find((n) => n.top <= e && n.bottom >= e) || io(this.heightMap.lineAt(this.scaler.fromDOM(e), We.ByHeight, this.heightOracle, 0, 0), this.scaler);
  }
  scrollAnchorAt(e) {
    let n = this.lineBlockAtHeight(e + 8);
    return n.from >= this.viewport.from || this.viewportLines[0].top - e > 200 ? n : this.viewportLines[0];
  }
  elementAtHeight(e) {
    return io(this.heightMap.blockAt(this.scaler.fromDOM(e), this.heightOracle, 0, 0), this.scaler);
  }
  get docHeight() {
    return this.scaler.toDOM(this.heightMap.height);
  }
  get contentHeight() {
    return this.docHeight + this.paddingTop + this.paddingBottom;
  }
}
class mr {
  constructor(e, n) {
    this.from = e, this.to = n;
  }
}
function FO(t, e, n) {
  let i = [], s = t, o = 0;
  return Pe.spans(n, t, e, {
    span() {
    },
    point(r, l) {
      r > s && (i.push({ from: s, to: r }), o += r - s), s = l;
    }
  }, 20), s < e && (i.push({ from: s, to: e }), o += e - s), { total: o, ranges: i };
}
function vr({ total: t, ranges: e }, n) {
  if (n <= 0)
    return e[0].from;
  if (n >= 1)
    return e[e.length - 1].to;
  let i = Math.floor(t * n);
  for (let s = 0; ; s++) {
    let { from: o, to: r } = e[s], l = r - o;
    if (i <= l)
      return o + i;
    i -= l;
  }
}
function yr(t, e) {
  let n = 0;
  for (let { from: i, to: s } of t.ranges) {
    if (e <= s) {
      n += e - i;
      break;
    }
    n += s - i;
  }
  return n / t.total;
}
function NO(t, e) {
  for (let n of t)
    if (e(n))
      return n;
}
const sh = {
  toDOM(t) {
    return t;
  },
  fromDOM(t) {
    return t;
  },
  scale: 1,
  eq(t) {
    return t == this;
  }
};
class Ru {
  constructor(e, n, i) {
    let s = 0, o = 0, r = 0;
    this.viewports = i.map(({ from: l, to: a }) => {
      let c = n.lineAt(l, We.ByPos, e, 0, 0).top, u = n.lineAt(a, We.ByPos, e, 0, 0).bottom;
      return s += u - c, { from: l, to: a, top: c, bottom: u, domTop: 0, domBottom: 0 };
    }), this.scale = (7e6 - s) / (n.height - s);
    for (let l of this.viewports)
      l.domTop = r + (l.top - o) * this.scale, r = l.domBottom = l.domTop + (l.bottom - l.top), o = l.bottom;
  }
  toDOM(e) {
    for (let n = 0, i = 0, s = 0; ; n++) {
      let o = n < this.viewports.length ? this.viewports[n] : null;
      if (!o || e < o.top)
        return s + (e - i) * this.scale;
      if (e <= o.bottom)
        return o.domTop + (e - o.top);
      i = o.bottom, s = o.domBottom;
    }
  }
  fromDOM(e) {
    for (let n = 0, i = 0, s = 0; ; n++) {
      let o = n < this.viewports.length ? this.viewports[n] : null;
      if (!o || e < o.domTop)
        return i + (e - s) / this.scale;
      if (e <= o.domBottom)
        return o.top + (e - o.domTop);
      i = o.bottom, s = o.domBottom;
    }
  }
  eq(e) {
    return e instanceof Ru ? this.scale == e.scale && this.viewports.length == e.viewports.length && this.viewports.every((n, i) => n.from == e.viewports[i].from && n.to == e.viewports[i].to) : !1;
  }
}
function io(t, e) {
  if (e.scale == 1)
    return t;
  let n = e.toDOM(t.top), i = e.toDOM(t.bottom);
  return new Fn(t.from, t.length, n, i - n, Array.isArray(t._content) ? t._content.map((s) => io(s, e)) : t._content);
}
const br = /* @__PURE__ */ ue.define({ combine: (t) => t.join(" ") }), vc = /* @__PURE__ */ ue.define({ combine: (t) => t.indexOf(!0) > -1 }), yc = /* @__PURE__ */ Bi.newName(), Zm = /* @__PURE__ */ Bi.newName(), Qm = /* @__PURE__ */ Bi.newName(), ev = { "&light": "." + Zm, "&dark": "." + Qm };
function bc(t, e, n) {
  return new Bi(e, {
    finish(i) {
      return /&/.test(i) ? i.replace(/&\w*/, (s) => {
        if (s == "&")
          return t;
        if (!n || !n[s])
          throw new RangeError(`Unsupported selector: ${s}`);
        return n[s];
      }) : t + " " + i;
    }
  });
}
const VO = /* @__PURE__ */ bc("." + yc, {
  "&": {
    position: "relative !important",
    boxSizing: "border-box",
    "&.cm-focused": {
      // Provide a simple default outline to make sure a focused
      // editor is visually distinct. Can't leave the default behavior
      // because that will apply to the content element, which is
      // inside the scrollable container and doesn't include the
      // gutters. We also can't use an 'auto' outline, since those
      // are, for some reason, drawn behind the element content, which
      // will cause things like the active line background to cover
      // the outline (#297).
      outline: "1px dotted #212121"
    },
    display: "flex !important",
    flexDirection: "column"
  },
  ".cm-scroller": {
    display: "flex !important",
    alignItems: "flex-start !important",
    fontFamily: "monospace",
    lineHeight: 1.4,
    height: "100%",
    overflowX: "auto",
    position: "relative",
    zIndex: 0,
    overflowAnchor: "none"
  },
  ".cm-content": {
    margin: 0,
    flexGrow: 2,
    flexShrink: 0,
    display: "block",
    whiteSpace: "pre",
    wordWrap: "normal",
    // https://github.com/codemirror/dev/issues/456
    boxSizing: "border-box",
    minHeight: "100%",
    padding: "4px 0",
    outline: "none",
    "&[contenteditable=true]": {
      WebkitUserModify: "read-write-plaintext-only"
    }
  },
  ".cm-lineWrapping": {
    whiteSpace_fallback: "pre-wrap",
    // For IE
    whiteSpace: "break-spaces",
    wordBreak: "break-word",
    // For Safari, which doesn't support overflow-wrap: anywhere
    overflowWrap: "anywhere",
    flexShrink: 1
  },
  "&light .cm-content": { caretColor: "black" },
  "&dark .cm-content": { caretColor: "white" },
  ".cm-line": {
    display: "block",
    padding: "0 2px 0 6px"
  },
  ".cm-layer": {
    position: "absolute",
    left: 0,
    top: 0,
    contain: "size style",
    "& > *": {
      position: "absolute"
    }
  },
  "&light .cm-selectionBackground": {
    background: "#d9d9d9"
  },
  "&dark .cm-selectionBackground": {
    background: "#222"
  },
  "&light.cm-focused > .cm-scroller > .cm-selectionLayer .cm-selectionBackground": {
    background: "#d7d4f0"
  },
  "&dark.cm-focused > .cm-scroller > .cm-selectionLayer .cm-selectionBackground": {
    background: "#233"
  },
  ".cm-cursorLayer": {
    pointerEvents: "none"
  },
  "&.cm-focused > .cm-scroller > .cm-cursorLayer": {
    animation: "steps(1) cm-blink 1.2s infinite"
  },
  // Two animations defined so that we can switch between them to
  // restart the animation without forcing another style
  // recomputation.
  "@keyframes cm-blink": { "0%": {}, "50%": { opacity: 0 }, "100%": {} },
  "@keyframes cm-blink2": { "0%": {}, "50%": { opacity: 0 }, "100%": {} },
  ".cm-cursor, .cm-dropCursor": {
    borderLeft: "1.2px solid black",
    marginLeft: "-0.6px",
    pointerEvents: "none"
  },
  ".cm-cursor": {
    display: "none"
  },
  "&dark .cm-cursor": {
    borderLeftColor: "#ddd"
  },
  ".cm-dropCursor": {
    position: "absolute"
  },
  "&.cm-focused > .cm-scroller > .cm-cursorLayer .cm-cursor": {
    display: "block"
  },
  ".cm-iso": {
    unicodeBidi: "isolate"
  },
  ".cm-announced": {
    position: "fixed",
    top: "-10000px"
  },
  "@media print": {
    ".cm-announced": { display: "none" }
  },
  "&light .cm-activeLine": { backgroundColor: "#cceeff44" },
  "&dark .cm-activeLine": { backgroundColor: "#99eeff33" },
  "&light .cm-specialChar": { color: "red" },
  "&dark .cm-specialChar": { color: "#f78" },
  ".cm-gutters": {
    flexShrink: 0,
    display: "flex",
    height: "100%",
    boxSizing: "border-box",
    insetInlineStart: 0,
    zIndex: 200
  },
  "&light .cm-gutters": {
    backgroundColor: "#f5f5f5",
    color: "#6c6c6c",
    borderRight: "1px solid #ddd"
  },
  "&dark .cm-gutters": {
    backgroundColor: "#333338",
    color: "#ccc"
  },
  ".cm-gutter": {
    display: "flex !important",
    // Necessary -- prevents margin collapsing
    flexDirection: "column",
    flexShrink: 0,
    boxSizing: "border-box",
    minHeight: "100%",
    overflow: "hidden"
  },
  ".cm-gutterElement": {
    boxSizing: "border-box"
  },
  ".cm-lineNumbers .cm-gutterElement": {
    padding: "0 3px 0 5px",
    minWidth: "20px",
    textAlign: "right",
    whiteSpace: "nowrap"
  },
  "&light .cm-activeLineGutter": {
    backgroundColor: "#e2f2ff"
  },
  "&dark .cm-activeLineGutter": {
    backgroundColor: "#222227"
  },
  ".cm-panels": {
    boxSizing: "border-box",
    position: "sticky",
    left: 0,
    right: 0,
    zIndex: 300
  },
  "&light .cm-panels": {
    backgroundColor: "#f5f5f5",
    color: "black"
  },
  "&light .cm-panels-top": {
    borderBottom: "1px solid #ddd"
  },
  "&light .cm-panels-bottom": {
    borderTop: "1px solid #ddd"
  },
  "&dark .cm-panels": {
    backgroundColor: "#333338",
    color: "white"
  },
  ".cm-tab": {
    display: "inline-block",
    overflow: "hidden",
    verticalAlign: "bottom"
  },
  ".cm-widgetBuffer": {
    verticalAlign: "text-top",
    height: "1em",
    width: 0,
    display: "inline"
  },
  ".cm-placeholder": {
    color: "#888",
    display: "inline-block",
    verticalAlign: "top"
  },
  ".cm-highlightSpace": {
    backgroundImage: "radial-gradient(circle at 50% 55%, #aaa 20%, transparent 5%)",
    backgroundPosition: "center"
  },
  ".cm-highlightTab": {
    backgroundImage: `url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" width="200" height="20"><path stroke="%23888" stroke-width="1" fill="none" d="M1 10H196L190 5M190 15L196 10M197 4L197 16"/></svg>')`,
    backgroundSize: "auto 100%",
    backgroundPosition: "right 90%",
    backgroundRepeat: "no-repeat"
  },
  ".cm-trailingSpace": {
    backgroundColor: "#ff332255"
  },
  ".cm-button": {
    verticalAlign: "middle",
    color: "inherit",
    fontSize: "70%",
    padding: ".2em 1em",
    borderRadius: "1px"
  },
  "&light .cm-button": {
    backgroundImage: "linear-gradient(#eff1f5, #d9d9df)",
    border: "1px solid #888",
    "&:active": {
      backgroundImage: "linear-gradient(#b4b4b4, #d0d3d6)"
    }
  },
  "&dark .cm-button": {
    backgroundImage: "linear-gradient(#393939, #111)",
    border: "1px solid #888",
    "&:active": {
      backgroundImage: "linear-gradient(#111, #333)"
    }
  },
  ".cm-textfield": {
    verticalAlign: "middle",
    color: "inherit",
    fontSize: "70%",
    border: "1px solid silver",
    padding: ".2em .5em"
  },
  "&light .cm-textfield": {
    backgroundColor: "white"
  },
  "&dark .cm-textfield": {
    border: "1px solid #555",
    backgroundColor: "inherit"
  }
}, ev), zO = {
  childList: !0,
  characterData: !0,
  subtree: !0,
  attributes: !0,
  characterDataOldValue: !0
}, ma = se.ie && se.ie_version <= 11;
class HO {
  constructor(e) {
    this.view = e, this.active = !1, this.editContext = null, this.selectionRange = new kM(), this.selectionChanged = !1, this.delayedFlush = -1, this.resizeTimeout = -1, this.queue = [], this.delayedAndroidKey = null, this.flushingAndroidKey = -1, this.lastChange = 0, this.scrollTargets = [], this.intersection = null, this.resizeScroll = null, this.intersecting = !1, this.gapIntersection = null, this.gaps = [], this.printQuery = null, this.parentCheck = -1, this.dom = e.contentDOM, this.observer = new MutationObserver((n) => {
      for (let i of n)
        this.queue.push(i);
      (se.ie && se.ie_version <= 11 || se.ios && e.composing) && n.some((i) => i.type == "childList" && i.removedNodes.length || i.type == "characterData" && i.oldValue.length > i.target.nodeValue.length) ? this.flushSoon() : this.flush();
    }), window.EditContext && e.constructor.EDIT_CONTEXT !== !1 && // Chrome <126 doesn't support inverted selections in edit context (#1392)
    !(se.chrome && se.chrome_version < 126) && (this.editContext = new GO(e), e.state.facet(oi) && (e.contentDOM.editContext = this.editContext.editContext)), ma && (this.onCharData = (n) => {
      this.queue.push({
        target: n.target,
        type: "characterData",
        oldValue: n.prevValue
      }), this.flushSoon();
    }), this.onSelectionChange = this.onSelectionChange.bind(this), this.onResize = this.onResize.bind(this), this.onPrint = this.onPrint.bind(this), this.onScroll = this.onScroll.bind(this), window.matchMedia && (this.printQuery = window.matchMedia("print")), typeof ResizeObserver == "function" && (this.resizeScroll = new ResizeObserver(() => {
      var n;
      ((n = this.view.docView) === null || n === void 0 ? void 0 : n.lastUpdate) < Date.now() - 75 && this.onResize();
    }), this.resizeScroll.observe(e.scrollDOM)), this.addWindowListeners(this.win = e.win), this.start(), typeof IntersectionObserver == "function" && (this.intersection = new IntersectionObserver((n) => {
      this.parentCheck < 0 && (this.parentCheck = setTimeout(this.listenForScroll.bind(this), 1e3)), n.length > 0 && n[n.length - 1].intersectionRatio > 0 != this.intersecting && (this.intersecting = !this.intersecting, this.intersecting != this.view.inView && this.onScrollChanged(document.createEvent("Event")));
    }, { threshold: [0, 1e-3] }), this.intersection.observe(this.dom), this.gapIntersection = new IntersectionObserver((n) => {
      n.length > 0 && n[n.length - 1].intersectionRatio > 0 && this.onScrollChanged(document.createEvent("Event"));
    }, {})), this.listenForScroll(), this.readSelectionRange();
  }
  onScrollChanged(e) {
    this.view.inputState.runHandlers("scroll", e), this.intersecting && this.view.measure();
  }
  onScroll(e) {
    this.intersecting && this.flush(!1), this.editContext && this.view.requestMeasure(this.editContext.measureReq), this.onScrollChanged(e);
  }
  onResize() {
    this.resizeTimeout < 0 && (this.resizeTimeout = setTimeout(() => {
      this.resizeTimeout = -1, this.view.requestMeasure();
    }, 50));
  }
  onPrint(e) {
    (e.type == "change" || !e.type) && !e.matches || (this.view.viewState.printing = !0, this.view.measure(), setTimeout(() => {
      this.view.viewState.printing = !1, this.view.requestMeasure();
    }, 500));
  }
  updateGaps(e) {
    if (this.gapIntersection && (e.length != this.gaps.length || this.gaps.some((n, i) => n != e[i]))) {
      this.gapIntersection.disconnect();
      for (let n of e)
        this.gapIntersection.observe(n);
      this.gaps = e;
    }
  }
  onSelectionChange(e) {
    let n = this.selectionChanged;
    if (!this.readSelectionRange() || this.delayedAndroidKey)
      return;
    let { view: i } = this, s = this.selectionRange;
    if (i.state.facet(oi) ? i.root.activeElement != this.dom : !Br(this.dom, s))
      return;
    let o = s.anchorNode && i.docView.nearest(s.anchorNode);
    if (o && o.ignoreEvent(e)) {
      n || (this.selectionChanged = !1);
      return;
    }
    (se.ie && se.ie_version <= 11 || se.android && se.chrome) && !i.state.selection.main.empty && // (Selection.isCollapsed isn't reliable on IE)
    s.focusNode && yo(s.focusNode, s.focusOffset, s.anchorNode, s.anchorOffset) ? this.flushSoon() : this.flush(!1);
  }
  readSelectionRange() {
    let { view: e } = this, n = Io(e.root);
    if (!n)
      return !1;
    let i = se.safari && e.root.nodeType == 11 && e.root.activeElement == this.dom && WO(this.view, n) || n;
    if (!i || this.selectionRange.eq(i))
      return !1;
    let s = Br(this.dom, i);
    return s && !this.selectionChanged && e.inputState.lastFocusTime > Date.now() - 200 && e.inputState.lastTouchTime < Date.now() - 300 && xM(this.dom, i) ? (this.view.inputState.lastFocusTime = 0, e.docView.updateSelection(), !1) : (this.selectionRange.setRange(i), s && (this.selectionChanged = !0), !0);
  }
  setSelectionRange(e, n) {
    this.selectionRange.set(e.node, e.offset, n.node, n.offset), this.selectionChanged = !1;
  }
  clearSelectionRange() {
    this.selectionRange.set(null, 0, null, 0);
  }
  listenForScroll() {
    this.parentCheck = -1;
    let e = 0, n = null;
    for (let i = this.dom; i; )
      if (i.nodeType == 1)
        !n && e < this.scrollTargets.length && this.scrollTargets[e] == i ? e++ : n || (n = this.scrollTargets.slice(0, e)), n && n.push(i), i = i.assignedSlot || i.parentNode;
      else if (i.nodeType == 11)
        i = i.host;
      else
        break;
    if (e < this.scrollTargets.length && !n && (n = this.scrollTargets.slice(0, e)), n) {
      for (let i of this.scrollTargets)
        i.removeEventListener("scroll", this.onScroll);
      for (let i of this.scrollTargets = n)
        i.addEventListener("scroll", this.onScroll);
    }
  }
  ignore(e) {
    if (!this.active)
      return e();
    try {
      return this.stop(), e();
    } finally {
      this.start(), this.clear();
    }
  }
  start() {
    this.active || (this.observer.observe(this.dom, zO), ma && this.dom.addEventListener("DOMCharacterDataModified", this.onCharData), this.active = !0);
  }
  stop() {
    this.active && (this.active = !1, this.observer.disconnect(), ma && this.dom.removeEventListener("DOMCharacterDataModified", this.onCharData));
  }
  // Throw away any pending changes
  clear() {
    this.processRecords(), this.queue.length = 0, this.selectionChanged = !1;
  }
  // Chrome Android, especially in combination with GBoard, not only
  // doesn't reliably fire regular key events, but also often
  // surrounds the effect of enter or backspace with a bunch of
  // composition events that, when interrupted, cause text duplication
  // or other kinds of corruption. This hack makes the editor back off
  // from handling DOM changes for a moment when such a key is
  // detected (via beforeinput or keydown), and then tries to flush
  // them or, if that has no effect, dispatches the given key.
  delayAndroidKey(e, n) {
    var i;
    if (!this.delayedAndroidKey) {
      let s = () => {
        let o = this.delayedAndroidKey;
        o && (this.clearDelayedAndroidKey(), this.view.inputState.lastKeyCode = o.keyCode, this.view.inputState.lastKeyTime = Date.now(), !this.flush() && o.force && ks(this.dom, o.key, o.keyCode));
      };
      this.flushingAndroidKey = this.view.win.requestAnimationFrame(s);
    }
    (!this.delayedAndroidKey || e == "Enter") && (this.delayedAndroidKey = {
      key: e,
      keyCode: n,
      // Only run the key handler when no changes are detected if
      // this isn't coming right after another change, in which case
      // it is probably part of a weird chain of updates, and should
      // be ignored if it returns the DOM to its previous state.
      force: this.lastChange < Date.now() - 50 || !!(!((i = this.delayedAndroidKey) === null || i === void 0) && i.force)
    });
  }
  clearDelayedAndroidKey() {
    this.win.cancelAnimationFrame(this.flushingAndroidKey), this.delayedAndroidKey = null, this.flushingAndroidKey = -1;
  }
  flushSoon() {
    this.delayedFlush < 0 && (this.delayedFlush = this.view.win.requestAnimationFrame(() => {
      this.delayedFlush = -1, this.flush();
    }));
  }
  forceFlush() {
    this.delayedFlush >= 0 && (this.view.win.cancelAnimationFrame(this.delayedFlush), this.delayedFlush = -1), this.flush();
  }
  pendingRecords() {
    for (let e of this.observer.takeRecords())
      this.queue.push(e);
    return this.queue;
  }
  processRecords() {
    let e = this.pendingRecords();
    e.length && (this.queue = []);
    let n = -1, i = -1, s = !1;
    for (let o of e) {
      let r = this.readMutation(o);
      r && (r.typeOver && (s = !0), n == -1 ? { from: n, to: i } = r : (n = Math.min(r.from, n), i = Math.max(r.to, i)));
    }
    return { from: n, to: i, typeOver: s };
  }
  readChange() {
    let { from: e, to: n, typeOver: i } = this.processRecords(), s = this.selectionChanged && Br(this.dom, this.selectionRange);
    if (e < 0 && !s)
      return null;
    e > -1 && (this.lastChange = Date.now()), this.view.inputState.lastFocusTime = 0, this.selectionChanged = !1;
    let o = new rO(this.view, e, n, i);
    return this.view.docView.domChanged = { newSel: o.newSel ? o.newSel.main : null }, o;
  }
  // Apply pending changes, if any
  flush(e = !0) {
    if (this.delayedFlush >= 0 || this.delayedAndroidKey)
      return !1;
    e && this.readSelectionRange();
    let n = this.readChange();
    if (!n)
      return this.view.requestMeasure(), !1;
    let i = this.view.state, s = Hm(this.view, n);
    return this.view.state == i && (n.domChanged || n.newSel && !n.newSel.main.eq(this.view.state.selection.main)) && this.view.update([]), s;
  }
  readMutation(e) {
    let n = this.view.docView.nearest(e.target);
    if (!n || n.ignoreMutation(e))
      return null;
    if (n.markDirty(e.type == "attributes"), e.type == "attributes" && (n.flags |= 4), e.type == "childList") {
      let i = oh(n, e.previousSibling || e.target.previousSibling, -1), s = oh(n, e.nextSibling || e.target.nextSibling, 1);
      return {
        from: i ? n.posAfter(i) : n.posAtStart,
        to: s ? n.posBefore(s) : n.posAtEnd,
        typeOver: !1
      };
    } else return e.type == "characterData" ? { from: n.posAtStart, to: n.posAtEnd, typeOver: e.target.nodeValue == e.oldValue } : null;
  }
  setWindow(e) {
    e != this.win && (this.removeWindowListeners(this.win), this.win = e, this.addWindowListeners(this.win));
  }
  addWindowListeners(e) {
    e.addEventListener("resize", this.onResize), this.printQuery ? this.printQuery.addEventListener ? this.printQuery.addEventListener("change", this.onPrint) : this.printQuery.addListener(this.onPrint) : e.addEventListener("beforeprint", this.onPrint), e.addEventListener("scroll", this.onScroll), e.document.addEventListener("selectionchange", this.onSelectionChange);
  }
  removeWindowListeners(e) {
    e.removeEventListener("scroll", this.onScroll), e.removeEventListener("resize", this.onResize), this.printQuery ? this.printQuery.removeEventListener ? this.printQuery.removeEventListener("change", this.onPrint) : this.printQuery.removeListener(this.onPrint) : e.removeEventListener("beforeprint", this.onPrint), e.document.removeEventListener("selectionchange", this.onSelectionChange);
  }
  update(e) {
    this.editContext && (this.editContext.update(e), e.startState.facet(oi) != e.state.facet(oi) && (e.view.contentDOM.editContext = e.state.facet(oi) ? this.editContext.editContext : null));
  }
  destroy() {
    var e, n, i;
    this.stop(), (e = this.intersection) === null || e === void 0 || e.disconnect(), (n = this.gapIntersection) === null || n === void 0 || n.disconnect(), (i = this.resizeScroll) === null || i === void 0 || i.disconnect();
    for (let s of this.scrollTargets)
      s.removeEventListener("scroll", this.onScroll);
    this.removeWindowListeners(this.win), clearTimeout(this.parentCheck), clearTimeout(this.resizeTimeout), this.win.cancelAnimationFrame(this.delayedFlush), this.win.cancelAnimationFrame(this.flushingAndroidKey), this.editContext && (this.view.contentDOM.editContext = null, this.editContext.destroy());
  }
}
function oh(t, e, n) {
  for (; e; ) {
    let i = Ne.get(e);
    if (i && i.parent == t)
      return i;
    let s = e.parentNode;
    e = s != t.dom ? s : n > 0 ? e.nextSibling : e.previousSibling;
  }
  return null;
}
function rh(t, e) {
  let n = e.startContainer, i = e.startOffset, s = e.endContainer, o = e.endOffset, r = t.docView.domAtPos(t.state.selection.main.anchor);
  return yo(r.node, r.offset, s, o) && ([n, i, s, o] = [s, o, n, i]), { anchorNode: n, anchorOffset: i, focusNode: s, focusOffset: o };
}
function WO(t, e) {
  if (e.getComposedRanges) {
    let s = e.getComposedRanges(t.root)[0];
    if (s)
      return rh(t, s);
  }
  let n = null;
  function i(s) {
    s.preventDefault(), s.stopImmediatePropagation(), n = s.getTargetRanges()[0];
  }
  return t.contentDOM.addEventListener("beforeinput", i, !0), t.dom.ownerDocument.execCommand("indent"), t.contentDOM.removeEventListener("beforeinput", i, !0), n ? rh(t, n) : null;
}
class GO {
  constructor(e) {
    this.from = 0, this.to = 0, this.pendingContextChange = null, this.handlers = /* @__PURE__ */ Object.create(null), this.composing = null, this.resetRange(e.state);
    let n = this.editContext = new window.EditContext({
      text: e.state.doc.sliceString(this.from, this.to),
      selectionStart: this.toContextPos(Math.max(this.from, Math.min(this.to, e.state.selection.main.anchor))),
      selectionEnd: this.toContextPos(e.state.selection.main.head)
    });
    this.handlers.textupdate = (i) => {
      let s = e.state.selection.main, { anchor: o, head: r } = s, l = this.toEditorPos(i.updateRangeStart), a = this.toEditorPos(i.updateRangeEnd);
      e.inputState.composing >= 0 && !this.composing && (this.composing = { contextBase: i.updateRangeStart, editorBase: l, drifted: !1 });
      let c = { from: l, to: a, insert: Ae.of(i.text.split(`
`)) };
      if (c.from == this.from && o < this.from ? c.from = o : c.to == this.to && o > this.to && (c.to = o), c.from == c.to && !c.insert.length) {
        let u = Y.single(this.toEditorPos(i.selectionStart), this.toEditorPos(i.selectionEnd));
        u.main.eq(s) || e.dispatch({ selection: u, userEvent: "select" });
        return;
      }
      if ((se.mac || se.android) && c.from == r - 1 && /^\. ?$/.test(i.text) && e.contentDOM.getAttribute("autocorrect") == "off" && (c = { from: l, to: a, insert: Ae.of([i.text.replace(".", " ")]) }), this.pendingContextChange = c, !e.state.readOnly) {
        let u = this.to - this.from + (c.to - c.from + c.insert.length);
        Pu(e, c, Y.single(this.toEditorPos(i.selectionStart, u), this.toEditorPos(i.selectionEnd, u)));
      }
      this.pendingContextChange && (this.revertPending(e.state), this.setSelection(e.state));
    }, this.handlers.characterboundsupdate = (i) => {
      let s = [], o = null;
      for (let r = this.toEditorPos(i.rangeStart), l = this.toEditorPos(i.rangeEnd); r < l; r++) {
        let a = e.coordsForChar(r);
        o = a && new DOMRect(a.left, a.top, a.right - a.left, a.bottom - a.top) || o || new DOMRect(), s.push(o);
      }
      n.updateCharacterBounds(i.rangeStart, s);
    }, this.handlers.textformatupdate = (i) => {
      let s = [];
      for (let o of i.getTextFormats()) {
        let r = o.underlineStyle, l = o.underlineThickness;
        if (r != "None" && l != "None") {
          let a = this.toEditorPos(o.rangeStart), c = this.toEditorPos(o.rangeEnd);
          if (a < c) {
            let u = `text-decoration: underline ${r == "Dashed" ? "dashed " : r == "Squiggle" ? "wavy " : ""}${l == "Thin" ? 1 : 2}px`;
            s.push(kt.mark({ attributes: { style: u } }).range(a, c));
          }
        }
      }
      e.dispatch({ effects: Rm.of(kt.set(s)) });
    }, this.handlers.compositionstart = () => {
      e.inputState.composing < 0 && (e.inputState.composing = 0, e.inputState.compositionFirstChange = !0);
    }, this.handlers.compositionend = () => {
      if (e.inputState.composing = -1, e.inputState.compositionFirstChange = null, this.composing) {
        let { drifted: i } = this.composing;
        this.composing = null, i && this.reset(e.state);
      }
    };
    for (let i in this.handlers)
      n.addEventListener(i, this.handlers[i]);
    this.measureReq = { read: (i) => {
      this.editContext.updateControlBounds(i.contentDOM.getBoundingClientRect());
      let s = Io(i.root);
      s && s.rangeCount && this.editContext.updateSelectionBounds(s.getRangeAt(0).getBoundingClientRect());
    } };
  }
  applyEdits(e) {
    let n = 0, i = !1, s = this.pendingContextChange;
    return e.changes.iterChanges((o, r, l, a, c) => {
      if (i)
        return;
      let u = c.length - (r - o);
      if (s && r >= s.to)
        if (s.from == o && s.to == r && s.insert.eq(c)) {
          s = this.pendingContextChange = null, n += u, this.to += u;
          return;
        } else
          s = null, this.revertPending(e.state);
      if (o += n, r += n, r <= this.from)
        this.from += u, this.to += u;
      else if (o < this.to) {
        if (o < this.from || r > this.to || this.to - this.from + c.length > 3e4) {
          i = !0;
          return;
        }
        this.editContext.updateText(this.toContextPos(o), this.toContextPos(r), c.toString()), this.to += u;
      }
      n += u;
    }), s && !i && this.revertPending(e.state), !i;
  }
  update(e) {
    let n = this.pendingContextChange, i = e.startState.selection.main;
    this.composing && (this.composing.drifted || !e.changes.touchesRange(i.from, i.to) && e.transactions.some((s) => !s.isUserEvent("input.type") && s.changes.touchesRange(this.from, this.to))) ? (this.composing.drifted = !0, this.composing.editorBase = e.changes.mapPos(this.composing.editorBase)) : !this.applyEdits(e) || !this.rangeIsValid(e.state) ? (this.pendingContextChange = null, this.reset(e.state)) : (e.docChanged || e.selectionSet || n) && this.setSelection(e.state), (e.geometryChanged || e.docChanged || e.selectionSet) && e.view.requestMeasure(this.measureReq);
  }
  resetRange(e) {
    let { head: n } = e.selection.main;
    this.from = Math.max(
      0,
      n - 1e4
      /* CxVp.Margin */
    ), this.to = Math.min(
      e.doc.length,
      n + 1e4
      /* CxVp.Margin */
    );
  }
  reset(e) {
    this.resetRange(e), this.editContext.updateText(0, this.editContext.text.length, e.doc.sliceString(this.from, this.to)), this.setSelection(e);
  }
  revertPending(e) {
    let n = this.pendingContextChange;
    this.pendingContextChange = null, this.editContext.updateText(this.toContextPos(n.from), this.toContextPos(n.from + n.insert.length), e.doc.sliceString(n.from, n.to));
  }
  setSelection(e) {
    let { main: n } = e.selection, i = this.toContextPos(Math.max(this.from, Math.min(this.to, n.anchor))), s = this.toContextPos(n.head);
    (this.editContext.selectionStart != i || this.editContext.selectionEnd != s) && this.editContext.updateSelection(i, s);
  }
  rangeIsValid(e) {
    let { head: n } = e.selection.main;
    return !(this.from > 0 && n - this.from < 500 || this.to < e.doc.length && this.to - n < 500 || this.to - this.from > 1e4 * 3);
  }
  toEditorPos(e, n = this.to - this.from) {
    e = Math.min(e, n);
    let i = this.composing;
    return i && i.drifted ? i.editorBase + (e - i.contextBase) : e + this.from;
  }
  toContextPos(e) {
    let n = this.composing;
    return n && n.drifted ? n.contextBase + (e - n.editorBase) : e - this.from;
  }
  destroy() {
    for (let e in this.handlers)
      this.editContext.removeEventListener(e, this.handlers[e]);
  }
}
class he {
  /**
  The current editor state.
  */
  get state() {
    return this.viewState.state;
  }
  /**
  To be able to display large documents without consuming too much
  memory or overloading the browser, CodeMirror only draws the
  code that is visible (plus a margin around it) to the DOM. This
  property tells you the extent of the current drawn viewport, in
  document positions.
  */
  get viewport() {
    return this.viewState.viewport;
  }
  /**
  When there are, for example, large collapsed ranges in the
  viewport, its size can be a lot bigger than the actual visible
  content. Thus, if you are doing something like styling the
  content in the viewport, it is preferable to only do so for
  these ranges, which are the subset of the viewport that is
  actually drawn.
  */
  get visibleRanges() {
    return this.viewState.visibleRanges;
  }
  /**
  Returns false when the editor is entirely scrolled out of view
  or otherwise hidden.
  */
  get inView() {
    return this.viewState.inView;
  }
  /**
  Indicates whether the user is currently composing text via
  [IME](https://en.wikipedia.org/wiki/Input_method), and at least
  one change has been made in the current composition.
  */
  get composing() {
    return this.inputState.composing > 0;
  }
  /**
  Indicates whether the user is currently in composing state. Note
  that on some platforms, like Android, this will be the case a
  lot, since just putting the cursor on a word starts a
  composition there.
  */
  get compositionStarted() {
    return this.inputState.composing >= 0;
  }
  /**
  The document or shadow root that the view lives in.
  */
  get root() {
    return this._root;
  }
  /**
  @internal
  */
  get win() {
    return this.dom.ownerDocument.defaultView || window;
  }
  /**
  Construct a new view. You'll want to either provide a `parent`
  option, or put `view.dom` into your document after creating a
  view, so that the user can see the editor.
  */
  constructor(e = {}) {
    var n;
    this.plugins = [], this.pluginMap = /* @__PURE__ */ new Map(), this.editorAttrs = {}, this.contentAttrs = {}, this.bidiCache = [], this.destroyed = !1, this.updateState = 2, this.measureScheduled = -1, this.measureRequests = [], this.contentDOM = document.createElement("div"), this.scrollDOM = document.createElement("div"), this.scrollDOM.tabIndex = -1, this.scrollDOM.className = "cm-scroller", this.scrollDOM.appendChild(this.contentDOM), this.announceDOM = document.createElement("div"), this.announceDOM.className = "cm-announced", this.announceDOM.setAttribute("aria-live", "polite"), this.dom = document.createElement("div"), this.dom.appendChild(this.announceDOM), this.dom.appendChild(this.scrollDOM), e.parent && e.parent.appendChild(this.dom);
    let { dispatch: i } = e;
    this.dispatchTransactions = e.dispatchTransactions || i && ((s) => s.forEach((o) => i(o, this))) || ((s) => this.update(s)), this.dispatch = this.dispatch.bind(this), this._root = e.root || _M(e.parent) || document, this.viewState = new ih(e.state || Me.create(e)), e.scrollTo && e.scrollTo.is(hr) && (this.viewState.scrollTarget = e.scrollTo.value.clip(this.viewState.state)), this.plugins = this.state.facet(eo).map((s) => new da(s));
    for (let s of this.plugins)
      s.update(this);
    this.observer = new HO(this), this.inputState = new fO(this), this.inputState.ensureHandlers(this.plugins), this.docView = new Fd(this), this.mountStyles(), this.updateAttrs(), this.updateState = 0, this.requestMeasure(), !((n = document.fonts) === null || n === void 0) && n.ready && document.fonts.ready.then(() => this.requestMeasure());
  }
  dispatch(...e) {
    let n = e.length == 1 && e[0] instanceof dt ? e : e.length == 1 && Array.isArray(e[0]) ? e[0] : [this.state.update(...e)];
    this.dispatchTransactions(n, this);
  }
  /**
  Update the view for the given array of transactions. This will
  update the visible document and selection to match the state
  produced by the transactions, and notify view plugins of the
  change. You should usually call
  [`dispatch`](https://codemirror.net/6/docs/ref/#view.EditorView.dispatch) instead, which uses this
  as a primitive.
  */
  update(e) {
    if (this.updateState != 0)
      throw new Error("Calls to EditorView.update are not allowed while an update is in progress");
    let n = !1, i = !1, s, o = this.state;
    for (let d of e) {
      if (d.startState != o)
        throw new RangeError("Trying to update state with a transaction that doesn't start from the previous state.");
      o = d.state;
    }
    if (this.destroyed) {
      this.viewState.state = o;
      return;
    }
    let r = this.hasFocus, l = 0, a = null;
    e.some((d) => d.annotation(qm)) ? (this.inputState.notifiedFocused = r, l = 1) : r != this.inputState.notifiedFocused && (this.inputState.notifiedFocused = r, a = Ym(o, r), a || (l = 1));
    let c = this.observer.delayedAndroidKey, u = null;
    if (c ? (this.observer.clearDelayedAndroidKey(), u = this.observer.readChange(), (u && !this.state.doc.eq(o.doc) || !this.state.selection.eq(o.selection)) && (u = null)) : this.observer.clear(), o.facet(Me.phrases) != this.state.facet(Me.phrases))
      return this.setState(o);
    s = ol.create(this, o, e), s.flags |= l;
    let f = this.viewState.scrollTarget;
    try {
      this.updateState = 2;
      for (let d of e) {
        if (f && (f = f.map(d.changes)), d.scrollIntoView) {
          let { main: h } = d.state.selection;
          f = new _s(h.empty ? h : Y.cursor(h.head, h.head > h.anchor ? -1 : 1));
        }
        for (let h of d.effects)
          h.is(hr) && (f = h.value.clip(this.state));
      }
      this.viewState.update(s, f), this.bidiCache = ll.update(this.bidiCache, s.changes), s.empty || (this.updatePlugins(s), this.inputState.update(s)), n = this.docView.update(s), this.state.facet(to) != this.styleModules && this.mountStyles(), i = this.updateAttrs(), this.showAnnouncements(e), this.docView.updateSelection(n, e.some((d) => d.isUserEvent("select.pointer")));
    } finally {
      this.updateState = 0;
    }
    if (s.startState.facet(br) != s.state.facet(br) && (this.viewState.mustMeasureContent = !0), (n || i || f || this.viewState.mustEnforceCursorAssoc || this.viewState.mustMeasureContent) && this.requestMeasure(), n && this.docViewUpdate(), !s.empty)
      for (let d of this.state.facet(pc))
        try {
          d(s);
        } catch (h) {
          zn(this.state, h, "update listener");
        }
    (a || u) && Promise.resolve().then(() => {
      a && this.state == a.startState && this.dispatch(a), u && !Hm(this, u) && c.force && ks(this.contentDOM, c.key, c.keyCode);
    });
  }
  /**
  Reset the view to the given state. (This will cause the entire
  document to be redrawn and all view plugins to be reinitialized,
  so you should probably only use it when the new state isn't
  derived from the old state. Otherwise, use
  [`dispatch`](https://codemirror.net/6/docs/ref/#view.EditorView.dispatch) instead.)
  */
  setState(e) {
    if (this.updateState != 0)
      throw new Error("Calls to EditorView.setState are not allowed while an update is in progress");
    if (this.destroyed) {
      this.viewState.state = e;
      return;
    }
    this.updateState = 2;
    let n = this.hasFocus;
    try {
      for (let i of this.plugins)
        i.destroy(this);
      this.viewState = new ih(e), this.plugins = e.facet(eo).map((i) => new da(i)), this.pluginMap.clear();
      for (let i of this.plugins)
        i.update(this);
      this.docView.destroy(), this.docView = new Fd(this), this.inputState.ensureHandlers(this.plugins), this.mountStyles(), this.updateAttrs(), this.bidiCache = [];
    } finally {
      this.updateState = 0;
    }
    n && this.focus(), this.requestMeasure();
  }
  updatePlugins(e) {
    let n = e.startState.facet(eo), i = e.state.facet(eo);
    if (n != i) {
      let s = [];
      for (let o of i) {
        let r = n.indexOf(o);
        if (r < 0)
          s.push(new da(o));
        else {
          let l = this.plugins[r];
          l.mustUpdate = e, s.push(l);
        }
      }
      for (let o of this.plugins)
        o.mustUpdate != e && o.destroy(this);
      this.plugins = s, this.pluginMap.clear();
    } else
      for (let s of this.plugins)
        s.mustUpdate = e;
    for (let s = 0; s < this.plugins.length; s++)
      this.plugins[s].update(this);
    n != i && this.inputState.ensureHandlers(this.plugins);
  }
  docViewUpdate() {
    for (let e of this.plugins) {
      let n = e.value;
      if (n && n.docViewUpdate)
        try {
          n.docViewUpdate(this);
        } catch (i) {
          zn(this.state, i, "doc view update listener");
        }
    }
  }
  /**
  @internal
  */
  measure(e = !0) {
    if (this.destroyed)
      return;
    if (this.measureScheduled > -1 && this.win.cancelAnimationFrame(this.measureScheduled), this.observer.delayedAndroidKey) {
      this.measureScheduled = -1, this.requestMeasure();
      return;
    }
    this.measureScheduled = 0, e && this.observer.forceFlush();
    let n = null, i = this.scrollDOM, s = i.scrollTop * this.scaleY, { scrollAnchorPos: o, scrollAnchorHeight: r } = this.viewState;
    Math.abs(s - this.viewState.scrollTop) > 1 && (r = -1), this.viewState.scrollAnchorHeight = -1;
    try {
      for (let l = 0; ; l++) {
        if (r < 0)
          if (cm(i))
            o = -1, r = this.viewState.heightMap.height;
          else {
            let h = this.viewState.scrollAnchorAt(s);
            o = h.from, r = h.top;
          }
        this.updateState = 1;
        let a = this.viewState.measure(this);
        if (!a && !this.measureRequests.length && this.viewState.scrollTarget == null)
          break;
        if (l > 5) {
          console.warn(this.measureRequests.length ? "Measure loop restarted more than 5 times" : "Viewport failed to stabilize");
          break;
        }
        let c = [];
        a & 4 || ([this.measureRequests, c] = [c, this.measureRequests]);
        let u = c.map((h) => {
          try {
            return h.read(this);
          } catch (g) {
            return zn(this.state, g), lh;
          }
        }), f = ol.create(this, this.state, []), d = !1;
        f.flags |= a, n ? n.flags |= a : n = f, this.updateState = 2, f.empty || (this.updatePlugins(f), this.inputState.update(f), this.updateAttrs(), d = this.docView.update(f), d && this.docViewUpdate());
        for (let h = 0; h < c.length; h++)
          if (u[h] != lh)
            try {
              let g = c[h];
              g.write && g.write(u[h], this);
            } catch (g) {
              zn(this.state, g);
            }
        if (d && this.docView.updateSelection(!0), !f.viewportChanged && this.measureRequests.length == 0) {
          if (this.viewState.editorHeight)
            if (this.viewState.scrollTarget) {
              this.docView.scrollIntoView(this.viewState.scrollTarget), this.viewState.scrollTarget = null, r = -1;
              continue;
            } else {
              let g = (o < 0 ? this.viewState.heightMap.height : this.viewState.lineBlockAt(o).top) - r;
              if (g > 1 || g < -1) {
                s = s + g, i.scrollTop = s / this.scaleY, r = -1;
                continue;
              }
            }
          break;
        }
      }
    } finally {
      this.updateState = 0, this.measureScheduled = -1;
    }
    if (n && !n.empty)
      for (let l of this.state.facet(pc))
        l(n);
  }
  /**
  Get the CSS classes for the currently active editor themes.
  */
  get themeClasses() {
    return yc + " " + (this.state.facet(vc) ? Qm : Zm) + " " + this.state.facet(br);
  }
  updateAttrs() {
    let e = ah(this, Lm, {
      class: "cm-editor" + (this.hasFocus ? " cm-focused " : " ") + this.themeClasses
    }), n = {
      spellcheck: "false",
      autocorrect: "off",
      autocapitalize: "off",
      writingsuggestions: "false",
      translate: "no",
      contenteditable: this.state.facet(oi) ? "true" : "false",
      class: "cm-content",
      style: `${se.tabSize}: ${this.state.tabSize}`,
      role: "textbox",
      "aria-multiline": "true"
    };
    this.state.readOnly && (n["aria-readonly"] = "true"), ah(this, Ou, n);
    let i = this.observer.ignore(() => {
      let s = cc(this.contentDOM, this.contentAttrs, n), o = cc(this.dom, this.editorAttrs, e);
      return s || o;
    });
    return this.editorAttrs = e, this.contentAttrs = n, i;
  }
  showAnnouncements(e) {
    let n = !0;
    for (let i of e)
      for (let s of i.effects)
        if (s.is(he.announce)) {
          n && (this.announceDOM.textContent = ""), n = !1;
          let o = this.announceDOM.appendChild(document.createElement("div"));
          o.textContent = s.value;
        }
  }
  mountStyles() {
    this.styleModules = this.state.facet(to);
    let e = this.state.facet(he.cspNonce);
    Bi.mount(this.root, this.styleModules.concat(VO).reverse(), e ? { nonce: e } : void 0);
  }
  readMeasured() {
    if (this.updateState == 2)
      throw new Error("Reading the editor layout isn't allowed during an update");
    this.updateState == 0 && this.measureScheduled > -1 && this.measure(!1);
  }
  /**
  Schedule a layout measurement, optionally providing callbacks to
  do custom DOM measuring followed by a DOM write phase. Using
  this is preferable reading DOM layout directly from, for
  example, an event handler, because it'll make sure measuring and
  drawing done by other components is synchronized, avoiding
  unnecessary DOM layout computations.
  */
  requestMeasure(e) {
    if (this.measureScheduled < 0 && (this.measureScheduled = this.win.requestAnimationFrame(() => this.measure())), e) {
      if (this.measureRequests.indexOf(e) > -1)
        return;
      if (e.key != null) {
        for (let n = 0; n < this.measureRequests.length; n++)
          if (this.measureRequests[n].key === e.key) {
            this.measureRequests[n] = e;
            return;
          }
      }
      this.measureRequests.push(e);
    }
  }
  /**
  Get the value of a specific plugin, if present. Note that
  plugins that crash can be dropped from a view, so even when you
  know you registered a given plugin, it is recommended to check
  the return value of this method.
  */
  plugin(e) {
    let n = this.pluginMap.get(e);
    return (n === void 0 || n && n.spec != e) && this.pluginMap.set(e, n = this.plugins.find((i) => i.spec == e) || null), n && n.update(this).value;
  }
  /**
  The top position of the document, in screen coordinates. This
  may be negative when the editor is scrolled down. Points
  directly to the top of the first line, not above the padding.
  */
  get documentTop() {
    return this.contentDOM.getBoundingClientRect().top + this.viewState.paddingTop;
  }
  /**
  Reports the padding above and below the document.
  */
  get documentPadding() {
    return { top: this.viewState.paddingTop, bottom: this.viewState.paddingBottom };
  }
  /**
  If the editor is transformed with CSS, this provides the scale
  along the X axis. Otherwise, it will just be 1. Note that
  transforms other than translation and scaling are not supported.
  */
  get scaleX() {
    return this.viewState.scaleX;
  }
  /**
  Provide the CSS transformed scale along the Y axis.
  */
  get scaleY() {
    return this.viewState.scaleY;
  }
  /**
  Find the text line or block widget at the given vertical
  position (which is interpreted as relative to the [top of the
  document](https://codemirror.net/6/docs/ref/#view.EditorView.documentTop)).
  */
  elementAtHeight(e) {
    return this.readMeasured(), this.viewState.elementAtHeight(e);
  }
  /**
  Find the line block (see
  [`lineBlockAt`](https://codemirror.net/6/docs/ref/#view.EditorView.lineBlockAt) at the given
  height, again interpreted relative to the [top of the
  document](https://codemirror.net/6/docs/ref/#view.EditorView.documentTop).
  */
  lineBlockAtHeight(e) {
    return this.readMeasured(), this.viewState.lineBlockAtHeight(e);
  }
  /**
  Get the extent and vertical position of all [line
  blocks](https://codemirror.net/6/docs/ref/#view.EditorView.lineBlockAt) in the viewport. Positions
  are relative to the [top of the
  document](https://codemirror.net/6/docs/ref/#view.EditorView.documentTop);
  */
  get viewportLineBlocks() {
    return this.viewState.viewportLines;
  }
  /**
  Find the line block around the given document position. A line
  block is a range delimited on both sides by either a
  non-[hidden](https://codemirror.net/6/docs/ref/#view.Decoration^replace) line break, or the
  start/end of the document. It will usually just hold a line of
  text, but may be broken into multiple textblocks by block
  widgets.
  */
  lineBlockAt(e) {
    return this.viewState.lineBlockAt(e);
  }
  /**
  The editor's total content height.
  */
  get contentHeight() {
    return this.viewState.contentHeight;
  }
  /**
  Move a cursor position by [grapheme
  cluster](https://codemirror.net/6/docs/ref/#state.findClusterBreak). `forward` determines whether
  the motion is away from the line start, or towards it. In
  bidirectional text, the line is traversed in visual order, using
  the editor's [text direction](https://codemirror.net/6/docs/ref/#view.EditorView.textDirection).
  When the start position was the last one on the line, the
  returned position will be across the line break. If there is no
  further line, the original position is returned.
  
  By default, this method moves over a single cluster. The
  optional `by` argument can be used to move across more. It will
  be called with the first cluster as argument, and should return
  a predicate that determines, for each subsequent cluster,
  whether it should also be moved over.
  */
  moveByChar(e, n, i) {
    return pa(this, e, Wd(this, e, n, i));
  }
  /**
  Move a cursor position across the next group of either
  [letters](https://codemirror.net/6/docs/ref/#state.EditorState.charCategorizer) or non-letter
  non-whitespace characters.
  */
  moveByGroup(e, n) {
    return pa(this, e, Wd(this, e, n, (i) => nO(this, e.head, i)));
  }
  /**
  Get the cursor position visually at the start or end of a line.
  Note that this may differ from the _logical_ position at its
  start or end (which is simply at `line.from`/`line.to`) if text
  at the start or end goes against the line's base text direction.
  */
  visualLineSide(e, n) {
    let i = this.bidiSpans(e), s = this.textDirectionAt(e.from), o = i[n ? i.length - 1 : 0];
    return Y.cursor(o.side(n, s) + e.from, o.forward(!n, s) ? 1 : -1);
  }
  /**
  Move to the next line boundary in the given direction. If
  `includeWrap` is true, line wrapping is on, and there is a
  further wrap point on the current line, the wrap point will be
  returned. Otherwise this function will return the start or end
  of the line.
  */
  moveToLineBoundary(e, n, i = !0) {
    return tO(this, e, n, i);
  }
  /**
  Move a cursor position vertically. When `distance` isn't given,
  it defaults to moving to the next line (including wrapped
  lines). Otherwise, `distance` should provide a positive distance
  in pixels.
  
  When `start` has a
  [`goalColumn`](https://codemirror.net/6/docs/ref/#state.SelectionRange.goalColumn), the vertical
  motion will use that as a target horizontal position. Otherwise,
  the cursor's own horizontal position is used. The returned
  cursor will have its goal column set to whichever column was
  used.
  */
  moveVertically(e, n, i) {
    return pa(this, e, iO(this, e, n, i));
  }
  /**
  Find the DOM parent node and offset (child offset if `node` is
  an element, character offset when it is a text node) at the
  given document position.
  
  Note that for positions that aren't currently in
  `visibleRanges`, the resulting DOM position isn't necessarily
  meaningful (it may just point before or after a placeholder
  element).
  */
  domAtPos(e) {
    return this.docView.domAtPos(e);
  }
  /**
  Find the document position at the given DOM node. Can be useful
  for associating positions with DOM events. Will raise an error
  when `node` isn't part of the editor content.
  */
  posAtDOM(e, n = 0) {
    return this.docView.posFromDOM(e, n);
  }
  posAtCoords(e, n = !0) {
    return this.readMeasured(), zm(this, e, n);
  }
  /**
  Get the screen coordinates at the given document position.
  `side` determines whether the coordinates are based on the
  element before (-1) or after (1) the position (if no element is
  available on the given side, the method will transparently use
  another strategy to get reasonable coordinates).
  */
  coordsAtPos(e, n = 1) {
    this.readMeasured();
    let i = this.docView.coordsAt(e, n);
    if (!i || i.left == i.right)
      return i;
    let s = this.state.doc.lineAt(e), o = this.bidiSpans(s), r = o[Oi.find(o, e - s.from, -1, n)];
    return Bl(i, r.dir == ht.LTR == n > 0);
  }
  /**
  Return the rectangle around a given character. If `pos` does not
  point in front of a character that is in the viewport and
  rendered (i.e. not replaced, not a line break), this will return
  null. For space characters that are a line wrap point, this will
  return the position before the line break.
  */
  coordsForChar(e) {
    return this.readMeasured(), this.docView.coordsForChar(e);
  }
  /**
  The default width of a character in the editor. May not
  accurately reflect the width of all characters (given variable
  width fonts or styling of invididual ranges).
  */
  get defaultCharacterWidth() {
    return this.viewState.heightOracle.charWidth;
  }
  /**
  The default height of a line in the editor. May not be accurate
  for all lines.
  */
  get defaultLineHeight() {
    return this.viewState.heightOracle.lineHeight;
  }
  /**
  The text direction
  ([`direction`](https://developer.mozilla.org/en-US/docs/Web/CSS/direction)
  CSS property) of the editor's content element.
  */
  get textDirection() {
    return this.viewState.defaultTextDirection;
  }
  /**
  Find the text direction of the block at the given position, as
  assigned by CSS. If
  [`perLineTextDirection`](https://codemirror.net/6/docs/ref/#view.EditorView^perLineTextDirection)
  isn't enabled, or the given position is outside of the viewport,
  this will always return the same as
  [`textDirection`](https://codemirror.net/6/docs/ref/#view.EditorView.textDirection). Note that
  this may trigger a DOM layout.
  */
  textDirectionAt(e) {
    return !this.state.facet(Pm) || e < this.viewport.from || e > this.viewport.to ? this.textDirection : (this.readMeasured(), this.docView.textDirectionAt(e));
  }
  /**
  Whether this editor [wraps lines](https://codemirror.net/6/docs/ref/#view.EditorView.lineWrapping)
  (as determined by the
  [`white-space`](https://developer.mozilla.org/en-US/docs/Web/CSS/white-space)
  CSS property of its content element).
  */
  get lineWrapping() {
    return this.viewState.heightOracle.lineWrapping;
  }
  /**
  Returns the bidirectional text structure of the given line
  (which should be in the current document) as an array of span
  objects. The order of these spans matches the [text
  direction](https://codemirror.net/6/docs/ref/#view.EditorView.textDirection)—if that is
  left-to-right, the leftmost spans come first, otherwise the
  rightmost spans come first.
  */
  bidiSpans(e) {
    if (e.length > jO)
      return _m(e.length);
    let n = this.textDirectionAt(e.from), i;
    for (let o of this.bidiCache)
      if (o.from == e.from && o.dir == n && (o.fresh || km(o.isolates, i = $d(this, e))))
        return o.order;
    i || (i = $d(this, e));
    let s = $M(e.text, n, i);
    return this.bidiCache.push(new ll(e.from, e.to, n, i, !0, s)), s;
  }
  /**
  Check whether the editor has focus.
  */
  get hasFocus() {
    var e;
    return (this.dom.ownerDocument.hasFocus() || se.safari && ((e = this.inputState) === null || e === void 0 ? void 0 : e.lastContextMenu) > Date.now() - 3e4) && this.root.activeElement == this.contentDOM;
  }
  /**
  Put focus on the editor.
  */
  focus() {
    this.observer.ignore(() => {
      lm(this.contentDOM), this.docView.updateSelection();
    });
  }
  /**
  Update the [root](https://codemirror.net/6/docs/ref/##view.EditorViewConfig.root) in which the editor lives. This is only
  necessary when moving the editor's existing DOM to a new window or shadow root.
  */
  setRoot(e) {
    this._root != e && (this._root = e, this.observer.setWindow((e.nodeType == 9 ? e : e.ownerDocument).defaultView || window), this.mountStyles());
  }
  /**
  Clean up this editor view, removing its element from the
  document, unregistering event handlers, and notifying
  plugins. The view instance can no longer be used after
  calling this.
  */
  destroy() {
    this.root.activeElement == this.contentDOM && this.contentDOM.blur();
    for (let e of this.plugins)
      e.destroy(this);
    this.plugins = [], this.inputState.destroy(), this.docView.destroy(), this.dom.remove(), this.observer.destroy(), this.measureScheduled > -1 && this.win.cancelAnimationFrame(this.measureScheduled), this.destroyed = !0;
  }
  /**
  Returns an effect that can be
  [added](https://codemirror.net/6/docs/ref/#state.TransactionSpec.effects) to a transaction to
  cause it to scroll the given position or range into view.
  */
  static scrollIntoView(e, n = {}) {
    return hr.of(new _s(typeof e == "number" ? Y.cursor(e) : e, n.y, n.x, n.yMargin, n.xMargin));
  }
  /**
  Return an effect that resets the editor to its current (at the
  time this method was called) scroll position. Note that this
  only affects the editor's own scrollable element, not parents.
  See also
  [`EditorViewConfig.scrollTo`](https://codemirror.net/6/docs/ref/#view.EditorViewConfig.scrollTo).
  
  The effect should be used with a document identical to the one
  it was created for. Failing to do so is not an error, but may
  not scroll to the expected position. You can
  [map](https://codemirror.net/6/docs/ref/#state.StateEffect.map) the effect to account for changes.
  */
  scrollSnapshot() {
    let { scrollTop: e, scrollLeft: n } = this.scrollDOM, i = this.viewState.scrollAnchorAt(e);
    return hr.of(new _s(Y.cursor(i.from), "start", "start", i.top - e, n, !0));
  }
  /**
  Enable or disable tab-focus mode, which disables key bindings
  for Tab and Shift-Tab, letting the browser's default
  focus-changing behavior go through instead. This is useful to
  prevent trapping keyboard users in your editor.
  
  Without argument, this toggles the mode. With a boolean, it
  enables (true) or disables it (false). Given a number, it
  temporarily enables the mode until that number of milliseconds
  have passed or another non-Tab key is pressed.
  */
  setTabFocusMode(e) {
    e == null ? this.inputState.tabFocusMode = this.inputState.tabFocusMode < 0 ? 0 : -1 : typeof e == "boolean" ? this.inputState.tabFocusMode = e ? 0 : -1 : this.inputState.tabFocusMode != 0 && (this.inputState.tabFocusMode = Date.now() + e);
  }
  /**
  Returns an extension that can be used to add DOM event handlers.
  The value should be an object mapping event names to handler
  functions. For any given event, such functions are ordered by
  extension precedence, and the first handler to return true will
  be assumed to have handled that event, and no other handlers or
  built-in behavior will be activated for it. These are registered
  on the [content element](https://codemirror.net/6/docs/ref/#view.EditorView.contentDOM), except
  for `scroll` handlers, which will be called any time the
  editor's [scroll element](https://codemirror.net/6/docs/ref/#view.EditorView.scrollDOM) or one of
  its parent nodes is scrolled.
  */
  static domEventHandlers(e) {
    return Ni.define(() => ({}), { eventHandlers: e });
  }
  /**
  Create an extension that registers DOM event observers. Contrary
  to event [handlers](https://codemirror.net/6/docs/ref/#view.EditorView^domEventHandlers),
  observers can't be prevented from running by a higher-precedence
  handler returning true. They also don't prevent other handlers
  and observers from running when they return true, and should not
  call `preventDefault`.
  */
  static domEventObservers(e) {
    return Ni.define(() => ({}), { eventObservers: e });
  }
  /**
  Create a theme extension. The first argument can be a
  [`style-mod`](https://github.com/marijnh/style-mod#documentation)
  style spec providing the styles for the theme. These will be
  prefixed with a generated class for the style.
  
  Because the selectors will be prefixed with a scope class, rule
  that directly match the editor's [wrapper
  element](https://codemirror.net/6/docs/ref/#view.EditorView.dom)—to which the scope class will be
  added—need to be explicitly differentiated by adding an `&` to
  the selector for that element—for example
  `&.cm-focused`.
  
  When `dark` is set to true, the theme will be marked as dark,
  which will cause the `&dark` rules from [base
  themes](https://codemirror.net/6/docs/ref/#view.EditorView^baseTheme) to be used (as opposed to
  `&light` when a light theme is active).
  */
  static theme(e, n) {
    let i = Bi.newName(), s = [br.of(i), to.of(bc(`.${i}`, e))];
    return n && n.dark && s.push(vc.of(!0)), s;
  }
  /**
  Create an extension that adds styles to the base theme. Like
  with [`theme`](https://codemirror.net/6/docs/ref/#view.EditorView^theme), use `&` to indicate the
  place of the editor wrapper element when directly targeting
  that. You can also use `&dark` or `&light` instead to only
  target editors with a dark or light theme.
  */
  static baseTheme(e) {
    return ku.lowest(to.of(bc("." + yc, e, ev)));
  }
  /**
  Retrieve an editor view instance from the view's DOM
  representation.
  */
  static findFromDOM(e) {
    var n;
    let i = e.querySelector(".cm-content"), s = i && Ne.get(i) || Ne.get(e);
    return ((n = s?.rootView) === null || n === void 0 ? void 0 : n.view) || null;
  }
}
he.styleModule = to;
he.inputHandler = Om;
he.clipboardInputFilter = Tu;
he.clipboardOutputFilter = Mu;
he.scrollHandler = Im;
he.focusChangeEffect = Dm;
he.perLineTextDirection = Pm;
he.exceptionSink = Mm;
he.updateListener = pc;
he.editable = oi;
he.mouseSelectionStyle = Tm;
he.dragMovesSelection = Em;
he.clickAddsSelectionRange = Am;
he.decorations = Lo;
he.outerDecorations = Bm;
he.atomicRanges = Du;
he.bidiIsolatedRanges = $m;
he.scrollMargins = Fm;
he.darkTheme = vc;
he.cspNonce = /* @__PURE__ */ ue.define({ combine: (t) => t.length ? t[0] : "" });
he.contentAttributes = Ou;
he.editorAttributes = Lm;
he.lineWrapping = /* @__PURE__ */ he.contentAttributes.of({ class: "cm-lineWrapping" });
he.announce = /* @__PURE__ */ nt.define();
const jO = 4096, lh = {};
class ll {
  constructor(e, n, i, s, o, r) {
    this.from = e, this.to = n, this.dir = i, this.isolates = s, this.fresh = o, this.order = r;
  }
  static update(e, n) {
    if (n.empty && !e.some((o) => o.fresh))
      return e;
    let i = [], s = e.length ? e[e.length - 1].dir : ht.LTR;
    for (let o = Math.max(0, e.length - 10); o < e.length; o++) {
      let r = e[o];
      r.dir == s && !n.touchesRange(r.from, r.to) && i.push(new ll(n.mapPos(r.from, 1), n.mapPos(r.to, -1), r.dir, r.isolates, !1, r.order));
    }
    return i;
  }
}
function ah(t, e, n) {
  for (let i = t.state.facet(e), s = i.length - 1; s >= 0; s--) {
    let o = i[s], r = typeof o == "function" ? o(t) : o;
    r && ac(r, n);
  }
  return n;
}
const KO = se.mac ? "mac" : se.windows ? "win" : se.linux ? "linux" : "key";
function UO(t, e) {
  const n = t.split(/-(?!$)/);
  let i = n[n.length - 1];
  i == "Space" && (i = " ");
  let s, o, r, l;
  for (let a = 0; a < n.length - 1; ++a) {
    const c = n[a];
    if (/^(cmd|meta|m)$/i.test(c))
      l = !0;
    else if (/^a(lt)?$/i.test(c))
      s = !0;
    else if (/^(c|ctrl|control)$/i.test(c))
      o = !0;
    else if (/^s(hift)?$/i.test(c))
      r = !0;
    else if (/^mod$/i.test(c))
      e == "mac" ? l = !0 : o = !0;
    else
      throw new Error("Unrecognized modifier name: " + c);
  }
  return s && (i = "Alt-" + i), o && (i = "Ctrl-" + i), l && (i = "Meta-" + i), r && (i = "Shift-" + i), i;
}
function wr(t, e, n) {
  return e.altKey && (t = "Alt-" + t), e.ctrlKey && (t = "Ctrl-" + t), e.metaKey && (t = "Meta-" + t), n !== !1 && e.shiftKey && (t = "Shift-" + t), t;
}
const qO = /* @__PURE__ */ ku.default(/* @__PURE__ */ he.domEventHandlers({
  keydown(t, e) {
    return ZO(YO(e.state), t, e, "editor");
  }
})), tv = /* @__PURE__ */ ue.define({ enables: qO }), ch = /* @__PURE__ */ new WeakMap();
function YO(t) {
  let e = t.facet(tv), n = ch.get(e);
  return n || ch.set(e, n = XO(e.reduce((i, s) => i.concat(s), []))), n;
}
let Ai = null;
const JO = 4e3;
function XO(t, e = KO) {
  let n = /* @__PURE__ */ Object.create(null), i = /* @__PURE__ */ Object.create(null), s = (r, l) => {
    let a = i[r];
    if (a == null)
      i[r] = l;
    else if (a != l)
      throw new Error("Key binding " + r + " is used both as a regular binding and as a multi-stroke prefix");
  }, o = (r, l, a, c, u) => {
    var f, d;
    let h = n[r] || (n[r] = /* @__PURE__ */ Object.create(null)), g = l.split(/ (?!$)/).map((v) => UO(v, e));
    for (let v = 1; v < g.length; v++) {
      let w = g.slice(0, v).join(" ");
      s(w, !0), h[w] || (h[w] = {
        preventDefault: !0,
        stopPropagation: !1,
        run: [(_) => {
          let x = Ai = { view: _, prefix: w, scope: r };
          return setTimeout(() => {
            Ai == x && (Ai = null);
          }, JO), !0;
        }]
      });
    }
    let m = g.join(" ");
    s(m, !1);
    let y = h[m] || (h[m] = {
      preventDefault: !1,
      stopPropagation: !1,
      run: ((d = (f = h._any) === null || f === void 0 ? void 0 : f.run) === null || d === void 0 ? void 0 : d.slice()) || []
    });
    a && y.run.push(a), c && (y.preventDefault = !0), u && (y.stopPropagation = !0);
  };
  for (let r of t) {
    let l = r.scope ? r.scope.split(" ") : ["editor"];
    if (r.any)
      for (let c of l) {
        let u = n[c] || (n[c] = /* @__PURE__ */ Object.create(null));
        u._any || (u._any = { preventDefault: !1, stopPropagation: !1, run: [] });
        let { any: f } = r;
        for (let d in u)
          u[d].run.push((h) => f(h, wc));
      }
    let a = r[e] || r.key;
    if (a)
      for (let c of l)
        o(c, a, r.run, r.preventDefault, r.stopPropagation), r.shift && o(c, "Shift-" + a, r.shift, r.preventDefault, r.stopPropagation);
  }
  return n;
}
let wc = null;
function ZO(t, e, n, i) {
  wc = e;
  let s = bM(e), o = tM(s, 0), r = nM(o) == s.length && s != " ", l = "", a = !1, c = !1, u = !1;
  Ai && Ai.view == n && Ai.scope == i && (l = Ai.prefix + " ", Gm.indexOf(e.keyCode) < 0 && (c = !0, Ai = null));
  let f = /* @__PURE__ */ new Set(), d = (y) => {
    if (y) {
      for (let v of y.run)
        if (!f.has(v) && (f.add(v), v(n)))
          return y.stopPropagation && (u = !0), !0;
      y.preventDefault && (y.stopPropagation && (u = !0), c = !0);
    }
    return !1;
  }, h = t[i], g, m;
  return h && (d(h[l + wr(s, e, !r)]) ? a = !0 : r && (e.altKey || e.metaKey || e.ctrlKey) && // Ctrl-Alt may be used for AltGr on Windows
  !(se.windows && e.ctrlKey && e.altKey) && (g = $i[e.keyCode]) && g != s ? (d(h[l + wr(g, e, !0)]) || e.shiftKey && (m = Po[e.keyCode]) != s && m != g && d(h[l + wr(m, e, !1)])) && (a = !0) : r && e.shiftKey && d(h[l + wr(s, e, !0)]) && (a = !0), !a && d(h._any) && (a = !0)), c && (a = !0), a && u && e.stopPropagation(), wc = null, a;
}
const QO = !(se.ios && se.webkit && se.webkit_version < 534), uh = {
  ".cm-line": {},
  ".cm-content": {}
};
QO && (uh[".cm-line"].caretColor = uh[".cm-content"].caretColor = "transparent !important");
class as extends Rs {
  /**
  @internal
  */
  compare(e) {
    return this == e || this.constructor == e.constructor && this.eq(e);
  }
  /**
  Compare this marker to another marker of the same type.
  */
  eq(e) {
    return !1;
  }
  /**
  Called if the marker has a `toDOM` method and its representation
  was removed from a gutter.
  */
  destroy(e) {
  }
}
as.prototype.elementClass = "";
as.prototype.toDOM = void 0;
as.prototype.mapMode = Zt.TrackBefore;
as.prototype.startSide = as.prototype.endSide = -1;
as.prototype.point = !0;
const va = /* @__PURE__ */ ue.define(), e3 = /* @__PURE__ */ ue.define(), Vr = /* @__PURE__ */ ue.define(), fh = /* @__PURE__ */ ue.define({
  combine: (t) => t.some((e) => e)
});
function t3(t) {
  return [
    n3
  ];
}
const n3 = /* @__PURE__ */ Ni.fromClass(class {
  constructor(t) {
    this.view = t, this.prevViewport = t.viewport, this.dom = document.createElement("div"), this.dom.className = "cm-gutters", this.dom.setAttribute("aria-hidden", "true"), this.dom.style.minHeight = this.view.contentHeight / this.view.scaleY + "px", this.gutters = t.state.facet(Vr).map((e) => new hh(t, e));
    for (let e of this.gutters)
      this.dom.appendChild(e.dom);
    this.fixed = !t.state.facet(fh), this.fixed && (this.dom.style.position = "sticky"), this.syncGutters(!1), t.scrollDOM.insertBefore(this.dom, t.contentDOM);
  }
  update(t) {
    if (this.updateGutters(t)) {
      let e = this.prevViewport, n = t.view.viewport, i = Math.min(e.to, n.to) - Math.max(e.from, n.from);
      this.syncGutters(i < (n.to - n.from) * 0.8);
    }
    t.geometryChanged && (this.dom.style.minHeight = this.view.contentHeight / this.view.scaleY + "px"), this.view.state.facet(fh) != !this.fixed && (this.fixed = !this.fixed, this.dom.style.position = this.fixed ? "sticky" : ""), this.prevViewport = t.view.viewport;
  }
  syncGutters(t) {
    let e = this.dom.nextSibling;
    t && this.dom.remove();
    let n = Pe.iter(this.view.state.facet(va), this.view.viewport.from), i = [], s = this.gutters.map((o) => new i3(o, this.view.viewport, -this.view.documentPadding.top));
    for (let o of this.view.viewportLineBlocks)
      if (i.length && (i = []), Array.isArray(o.type)) {
        let r = !0;
        for (let l of o.type)
          if (l.type == un.Text && r) {
            Sc(n, i, l.from);
            for (let a of s)
              a.line(this.view, l, i);
            r = !1;
          } else if (l.widget)
            for (let a of s)
              a.widget(this.view, l);
      } else if (o.type == un.Text) {
        Sc(n, i, o.from);
        for (let r of s)
          r.line(this.view, o, i);
      } else if (o.widget)
        for (let r of s)
          r.widget(this.view, o);
    for (let o of s)
      o.finish();
    t && this.view.scrollDOM.insertBefore(this.dom, e);
  }
  updateGutters(t) {
    let e = t.startState.facet(Vr), n = t.state.facet(Vr), i = t.docChanged || t.heightChanged || t.viewportChanged || !Pe.eq(t.startState.facet(va), t.state.facet(va), t.view.viewport.from, t.view.viewport.to);
    if (e == n)
      for (let s of this.gutters)
        s.update(t) && (i = !0);
    else {
      i = !0;
      let s = [];
      for (let o of n) {
        let r = e.indexOf(o);
        r < 0 ? s.push(new hh(this.view, o)) : (this.gutters[r].update(t), s.push(this.gutters[r]));
      }
      for (let o of this.gutters)
        o.dom.remove(), s.indexOf(o) < 0 && o.destroy();
      for (let o of s)
        this.dom.appendChild(o.dom);
      this.gutters = s;
    }
    return i;
  }
  destroy() {
    for (let t of this.gutters)
      t.destroy();
    this.dom.remove();
  }
}, {
  provide: (t) => he.scrollMargins.of((e) => {
    let n = e.plugin(t);
    return !n || n.gutters.length == 0 || !n.fixed ? null : e.textDirection == ht.LTR ? { left: n.dom.offsetWidth * e.scaleX } : { right: n.dom.offsetWidth * e.scaleX };
  })
});
function dh(t) {
  return Array.isArray(t) ? t : [t];
}
function Sc(t, e, n) {
  for (; t.value && t.from <= n; )
    t.from == n && e.push(t.value), t.next();
}
class i3 {
  constructor(e, n, i) {
    this.gutter = e, this.height = i, this.i = 0, this.cursor = Pe.iter(e.markers, n.from);
  }
  addElement(e, n, i) {
    let { gutter: s } = this, o = (n.top - this.height) / e.scaleY, r = n.height / e.scaleY;
    if (this.i == s.elements.length) {
      let l = new nv(e, r, o, i);
      s.elements.push(l), s.dom.appendChild(l.dom);
    } else
      s.elements[this.i].update(e, r, o, i);
    this.height = n.bottom, this.i++;
  }
  line(e, n, i) {
    let s = [];
    Sc(this.cursor, s, n.from), i.length && (s = s.concat(i));
    let o = this.gutter.config.lineMarker(e, n, s);
    o && s.unshift(o);
    let r = this.gutter;
    s.length == 0 && !r.config.renderEmptyElements || this.addElement(e, n, s);
  }
  widget(e, n) {
    let i = this.gutter.config.widgetMarker(e, n.widget, n), s = i ? [i] : null;
    for (let o of e.state.facet(e3)) {
      let r = o(e, n.widget, n);
      r && (s || (s = [])).push(r);
    }
    s && this.addElement(e, n, s);
  }
  finish() {
    let e = this.gutter;
    for (; e.elements.length > this.i; ) {
      let n = e.elements.pop();
      e.dom.removeChild(n.dom), n.destroy();
    }
  }
}
class hh {
  constructor(e, n) {
    this.view = e, this.config = n, this.elements = [], this.spacer = null, this.dom = document.createElement("div"), this.dom.className = "cm-gutter" + (this.config.class ? " " + this.config.class : "");
    for (let i in n.domEventHandlers)
      this.dom.addEventListener(i, (s) => {
        let o = s.target, r;
        if (o != this.dom && this.dom.contains(o)) {
          for (; o.parentNode != this.dom; )
            o = o.parentNode;
          let a = o.getBoundingClientRect();
          r = (a.top + a.bottom) / 2;
        } else
          r = s.clientY;
        let l = e.lineBlockAtHeight(r - e.documentTop);
        n.domEventHandlers[i](e, l, s) && s.preventDefault();
      });
    this.markers = dh(n.markers(e)), n.initialSpacer && (this.spacer = new nv(e, 0, 0, [n.initialSpacer(e)]), this.dom.appendChild(this.spacer.dom), this.spacer.dom.style.cssText += "visibility: hidden; pointer-events: none");
  }
  update(e) {
    let n = this.markers;
    if (this.markers = dh(this.config.markers(e.view)), this.spacer && this.config.updateSpacer) {
      let s = this.config.updateSpacer(this.spacer.markers[0], e);
      s != this.spacer.markers[0] && this.spacer.update(e.view, 0, 0, [s]);
    }
    let i = e.view.viewport;
    return !Pe.eq(this.markers, n, i.from, i.to) || (this.config.lineMarkerChange ? this.config.lineMarkerChange(e) : !1);
  }
  destroy() {
    for (let e of this.elements)
      e.destroy();
  }
}
class nv {
  constructor(e, n, i, s) {
    this.height = -1, this.above = 0, this.markers = [], this.dom = document.createElement("div"), this.dom.className = "cm-gutterElement", this.update(e, n, i, s);
  }
  update(e, n, i, s) {
    this.height != n && (this.height = n, this.dom.style.height = n + "px"), this.above != i && (this.dom.style.marginTop = (this.above = i) ? i + "px" : ""), s3(this.markers, s) || this.setMarkers(e, s);
  }
  setMarkers(e, n) {
    let i = "cm-gutterElement", s = this.dom.firstChild;
    for (let o = 0, r = 0; ; ) {
      let l = r, a = o < n.length ? n[o++] : null, c = !1;
      if (a) {
        let u = a.elementClass;
        u && (i += " " + u);
        for (let f = r; f < this.markers.length; f++)
          if (this.markers[f].compare(a)) {
            l = f, c = !0;
            break;
          }
      } else
        l = this.markers.length;
      for (; r < l; ) {
        let u = this.markers[r++];
        if (u.toDOM) {
          u.destroy(s);
          let f = s.nextSibling;
          s.remove(), s = f;
        }
      }
      if (!a)
        break;
      a.toDOM && (c ? s = s.nextSibling : this.dom.insertBefore(a.toDOM(e), s)), c && r++;
    }
    this.dom.className = i, this.markers = n;
  }
  destroy() {
    this.setMarkers(null, []);
  }
}
function s3(t, e) {
  if (t.length != e.length)
    return !1;
  for (let n = 0; n < t.length; n++)
    if (!t[n].compare(e[n]))
      return !1;
  return !0;
}
const o3 = /* @__PURE__ */ ue.define(), r3 = /* @__PURE__ */ ue.define(), bs = /* @__PURE__ */ ue.define({
  combine(t) {
    return im(t, { formatNumber: String, domEventHandlers: {} }, {
      domEventHandlers(e, n) {
        let i = Object.assign({}, e);
        for (let s in n) {
          let o = i[s], r = n[s];
          i[s] = o ? (l, a, c) => o(l, a, c) || r(l, a, c) : r;
        }
        return i;
      }
    });
  }
});
class ya extends as {
  constructor(e) {
    super(), this.number = e;
  }
  eq(e) {
    return this.number == e.number;
  }
  toDOM() {
    return document.createTextNode(this.number);
  }
}
function ba(t, e) {
  return t.state.facet(bs).formatNumber(e, t.state);
}
const l3 = /* @__PURE__ */ Vr.compute([bs], (t) => ({
  class: "cm-lineNumbers",
  renderEmptyElements: !1,
  markers(e) {
    return e.state.facet(o3);
  },
  lineMarker(e, n, i) {
    return i.some((s) => s.toDOM) ? null : new ya(ba(e, e.state.doc.lineAt(n.from).number));
  },
  widgetMarker: (e, n, i) => {
    for (let s of e.state.facet(r3)) {
      let o = s(e, n, i);
      if (o)
        return o;
    }
    return null;
  },
  lineMarkerChange: (e) => e.startState.facet(bs) != e.state.facet(bs),
  initialSpacer(e) {
    return new ya(ba(e, ph(e.state.doc.lines)));
  },
  updateSpacer(e, n) {
    let i = ba(n.view, ph(n.view.state.doc.lines));
    return i == e.number ? e : new ya(i);
  },
  domEventHandlers: t.facet(bs).domEventHandlers
}));
function a3(t = {}) {
  return [
    bs.of(t),
    t3(),
    l3
  ];
}
function ph(t) {
  let e = 9;
  for (; e < t; )
    e = e * 10 + 9;
  return e;
}
const c3 = 1024;
let u3 = 0;
class wa {
  constructor(e, n) {
    this.from = e, this.to = n;
  }
}
class _e {
  /**
  Create a new node prop type.
  */
  constructor(e = {}) {
    this.id = u3++, this.perNode = !!e.perNode, this.deserialize = e.deserialize || (() => {
      throw new Error("This node type doesn't define a deserialize function");
    });
  }
  /**
  This is meant to be used with
  [`NodeSet.extend`](#common.NodeSet.extend) or
  [`LRParser.configure`](#lr.ParserConfig.props) to compute
  prop values for each node type in the set. Takes a [match
  object](#common.NodeType^match) or function that returns undefined
  if the node type doesn't get this prop, and the prop's value if
  it does.
  */
  add(e) {
    if (this.perNode)
      throw new RangeError("Can't add per-node props to node types");
    return typeof e != "function" && (e = yn.match(e)), (n) => {
      let i = e(n);
      return i === void 0 ? null : [this, i];
    };
  }
}
_e.closedBy = new _e({ deserialize: (t) => t.split(" ") });
_e.openedBy = new _e({ deserialize: (t) => t.split(" ") });
_e.group = new _e({ deserialize: (t) => t.split(" ") });
_e.isolate = new _e({ deserialize: (t) => {
  if (t && t != "rtl" && t != "ltr" && t != "auto")
    throw new RangeError("Invalid value for isolate: " + t);
  return t || "auto";
} });
_e.contextHash = new _e({ perNode: !0 });
_e.lookAhead = new _e({ perNode: !0 });
_e.mounted = new _e({ perNode: !0 });
class al {
  constructor(e, n, i) {
    this.tree = e, this.overlay = n, this.parser = i;
  }
  /**
  @internal
  */
  static get(e) {
    return e && e.props && e.props[_e.mounted.id];
  }
}
const f3 = /* @__PURE__ */ Object.create(null);
class yn {
  /**
  @internal
  */
  constructor(e, n, i, s = 0) {
    this.name = e, this.props = n, this.id = i, this.flags = s;
  }
  /**
  Define a node type.
  */
  static define(e) {
    let n = e.props && e.props.length ? /* @__PURE__ */ Object.create(null) : f3, i = (e.top ? 1 : 0) | (e.skipped ? 2 : 0) | (e.error ? 4 : 0) | (e.name == null ? 8 : 0), s = new yn(e.name || "", n, e.id, i);
    if (e.props) {
      for (let o of e.props)
        if (Array.isArray(o) || (o = o(s)), o) {
          if (o[0].perNode)
            throw new RangeError("Can't store a per-node prop on a node type");
          n[o[0].id] = o[1];
        }
    }
    return s;
  }
  /**
  Retrieves a node prop for this type. Will return `undefined` if
  the prop isn't present on this node.
  */
  prop(e) {
    return this.props[e.id];
  }
  /**
  True when this is the top node of a grammar.
  */
  get isTop() {
    return (this.flags & 1) > 0;
  }
  /**
  True when this node is produced by a skip rule.
  */
  get isSkipped() {
    return (this.flags & 2) > 0;
  }
  /**
  Indicates whether this is an error node.
  */
  get isError() {
    return (this.flags & 4) > 0;
  }
  /**
  When true, this node type doesn't correspond to a user-declared
  named node, for example because it is used to cache repetition.
  */
  get isAnonymous() {
    return (this.flags & 8) > 0;
  }
  /**
  Returns true when this node's name or one of its
  [groups](#common.NodeProp^group) matches the given string.
  */
  is(e) {
    if (typeof e == "string") {
      if (this.name == e)
        return !0;
      let n = this.prop(_e.group);
      return n ? n.indexOf(e) > -1 : !1;
    }
    return this.id == e;
  }
  /**
  Create a function from node types to arbitrary values by
  specifying an object whose property names are node or
  [group](#common.NodeProp^group) names. Often useful with
  [`NodeProp.add`](#common.NodeProp.add). You can put multiple
  names, separated by spaces, in a single property name to map
  multiple node names to a single value.
  */
  static match(e) {
    let n = /* @__PURE__ */ Object.create(null);
    for (let i in e)
      for (let s of i.split(" "))
        n[s] = e[i];
    return (i) => {
      for (let s = i.prop(_e.group), o = -1; o < (s ? s.length : 0); o++) {
        let r = n[o < 0 ? i.name : s[o]];
        if (r)
          return r;
      }
    };
  }
}
yn.none = new yn(
  "",
  /* @__PURE__ */ Object.create(null),
  0,
  8
  /* NodeFlag.Anonymous */
);
const Sr = /* @__PURE__ */ new WeakMap(), gh = /* @__PURE__ */ new WeakMap();
var wt;
(function(t) {
  t[t.ExcludeBuffers = 1] = "ExcludeBuffers", t[t.IncludeAnonymous = 2] = "IncludeAnonymous", t[t.IgnoreMounts = 4] = "IgnoreMounts", t[t.IgnoreOverlays = 8] = "IgnoreOverlays";
})(wt || (wt = {}));
class Ot {
  /**
  Construct a new tree. See also [`Tree.build`](#common.Tree^build).
  */
  constructor(e, n, i, s, o) {
    if (this.type = e, this.children = n, this.positions = i, this.length = s, this.props = null, o && o.length) {
      this.props = /* @__PURE__ */ Object.create(null);
      for (let [r, l] of o)
        this.props[typeof r == "number" ? r : r.id] = l;
    }
  }
  /**
  @internal
  */
  toString() {
    let e = al.get(this);
    if (e && !e.overlay)
      return e.tree.toString();
    let n = "";
    for (let i of this.children) {
      let s = i.toString();
      s && (n && (n += ","), n += s);
    }
    return this.type.name ? (/\W/.test(this.type.name) && !this.type.isError ? JSON.stringify(this.type.name) : this.type.name) + (n.length ? "(" + n + ")" : "") : n;
  }
  /**
  Get a [tree cursor](#common.TreeCursor) positioned at the top of
  the tree. Mode can be used to [control](#common.IterMode) which
  nodes the cursor visits.
  */
  cursor(e = 0) {
    return new kc(this.topNode, e);
  }
  /**
  Get a [tree cursor](#common.TreeCursor) pointing into this tree
  at the given position and side (see
  [`moveTo`](#common.TreeCursor.moveTo).
  */
  cursorAt(e, n = 0, i = 0) {
    let s = Sr.get(this) || this.topNode, o = new kc(s);
    return o.moveTo(e, n), Sr.set(this, o._tree), o;
  }
  /**
  Get a [syntax node](#common.SyntaxNode) object for the top of the
  tree.
  */
  get topNode() {
    return new dn(this, 0, 0, null);
  }
  /**
  Get the [syntax node](#common.SyntaxNode) at the given position.
  If `side` is -1, this will move into nodes that end at the
  position. If 1, it'll move into nodes that start at the
  position. With 0, it'll only enter nodes that cover the position
  from both sides.
  
  Note that this will not enter
  [overlays](#common.MountedTree.overlay), and you often want
  [`resolveInner`](#common.Tree.resolveInner) instead.
  */
  resolve(e, n = 0) {
    let i = Bo(Sr.get(this) || this.topNode, e, n, !1);
    return Sr.set(this, i), i;
  }
  /**
  Like [`resolve`](#common.Tree.resolve), but will enter
  [overlaid](#common.MountedTree.overlay) nodes, producing a syntax node
  pointing into the innermost overlaid tree at the given position
  (with parent links going through all parent structure, including
  the host trees).
  */
  resolveInner(e, n = 0) {
    let i = Bo(gh.get(this) || this.topNode, e, n, !0);
    return gh.set(this, i), i;
  }
  /**
  In some situations, it can be useful to iterate through all
  nodes around a position, including those in overlays that don't
  directly cover the position. This method gives you an iterator
  that will produce all nodes, from small to big, around the given
  position.
  */
  resolveStack(e, n = 0) {
    return p3(this, e, n);
  }
  /**
  Iterate over the tree and its children, calling `enter` for any
  node that touches the `from`/`to` region (if given) before
  running over such a node's children, and `leave` (if given) when
  leaving the node. When `enter` returns `false`, that node will
  not have its children iterated over (or `leave` called).
  */
  iterate(e) {
    let { enter: n, leave: i, from: s = 0, to: o = this.length } = e, r = e.mode || 0, l = (r & wt.IncludeAnonymous) > 0;
    for (let a = this.cursor(r | wt.IncludeAnonymous); ; ) {
      let c = !1;
      if (a.from <= o && a.to >= s && (!l && a.type.isAnonymous || n(a) !== !1)) {
        if (a.firstChild())
          continue;
        c = !0;
      }
      for (; c && i && (l || !a.type.isAnonymous) && i(a), !a.nextSibling(); ) {
        if (!a.parent())
          return;
        c = !0;
      }
    }
  }
  /**
  Get the value of the given [node prop](#common.NodeProp) for this
  node. Works with both per-node and per-type props.
  */
  prop(e) {
    return e.perNode ? this.props ? this.props[e.id] : void 0 : this.type.prop(e);
  }
  /**
  Returns the node's [per-node props](#common.NodeProp.perNode) in a
  format that can be passed to the [`Tree`](#common.Tree)
  constructor.
  */
  get propValues() {
    let e = [];
    if (this.props)
      for (let n in this.props)
        e.push([+n, this.props[n]]);
    return e;
  }
  /**
  Balance the direct children of this tree, producing a copy of
  which may have children grouped into subtrees with type
  [`NodeType.none`](#common.NodeType^none).
  */
  balance(e = {}) {
    return this.children.length <= 8 ? this : $u(yn.none, this.children, this.positions, 0, this.children.length, 0, this.length, (n, i, s) => new Ot(this.type, n, i, s, this.propValues), e.makeTree || ((n, i, s) => new Ot(yn.none, n, i, s)));
  }
  /**
  Build a tree from a postfix-ordered buffer of node information,
  or a cursor over such a buffer.
  */
  static build(e) {
    return g3(e);
  }
}
Ot.empty = new Ot(yn.none, [], [], 0);
class Lu {
  constructor(e, n) {
    this.buffer = e, this.index = n;
  }
  get id() {
    return this.buffer[this.index - 4];
  }
  get start() {
    return this.buffer[this.index - 3];
  }
  get end() {
    return this.buffer[this.index - 2];
  }
  get size() {
    return this.buffer[this.index - 1];
  }
  get pos() {
    return this.index;
  }
  next() {
    this.index -= 4;
  }
  fork() {
    return new Lu(this.buffer, this.index);
  }
}
class Vi {
  /**
  Create a tree buffer.
  */
  constructor(e, n, i) {
    this.buffer = e, this.length = n, this.set = i;
  }
  /**
  @internal
  */
  get type() {
    return yn.none;
  }
  /**
  @internal
  */
  toString() {
    let e = [];
    for (let n = 0; n < this.buffer.length; )
      e.push(this.childString(n)), n = this.buffer[n + 3];
    return e.join(",");
  }
  /**
  @internal
  */
  childString(e) {
    let n = this.buffer[e], i = this.buffer[e + 3], s = this.set.types[n], o = s.name;
    if (/\W/.test(o) && !s.isError && (o = JSON.stringify(o)), e += 4, i == e)
      return o;
    let r = [];
    for (; e < i; )
      r.push(this.childString(e)), e = this.buffer[e + 3];
    return o + "(" + r.join(",") + ")";
  }
  /**
  @internal
  */
  findChild(e, n, i, s, o) {
    let { buffer: r } = this, l = -1;
    for (let a = e; a != n && !(iv(o, s, r[a + 1], r[a + 2]) && (l = a, i > 0)); a = r[a + 3])
      ;
    return l;
  }
  /**
  @internal
  */
  slice(e, n, i) {
    let s = this.buffer, o = new Uint16Array(n - e), r = 0;
    for (let l = e, a = 0; l < n; ) {
      o[a++] = s[l++], o[a++] = s[l++] - i;
      let c = o[a++] = s[l++] - i;
      o[a++] = s[l++] - e, r = Math.max(r, c);
    }
    return new Vi(o, r, this.set);
  }
}
function iv(t, e, n, i) {
  switch (t) {
    case -2:
      return n < e;
    case -1:
      return i >= e && n < e;
    case 0:
      return n < e && i > e;
    case 1:
      return n <= e && i > e;
    case 2:
      return i > e;
    case 4:
      return !0;
  }
}
function Bo(t, e, n, i) {
  for (var s; t.from == t.to || (n < 1 ? t.from >= e : t.from > e) || (n > -1 ? t.to <= e : t.to < e); ) {
    let r = !i && t instanceof dn && t.index < 0 ? null : t.parent;
    if (!r)
      return t;
    t = r;
  }
  let o = i ? 0 : wt.IgnoreOverlays;
  if (i)
    for (let r = t, l = r.parent; l; r = l, l = r.parent)
      r instanceof dn && r.index < 0 && ((s = l.enter(e, n, o)) === null || s === void 0 ? void 0 : s.from) != r.from && (t = l);
  for (; ; ) {
    let r = t.enter(e, n, o);
    if (!r)
      return t;
    t = r;
  }
}
class sv {
  cursor(e = 0) {
    return new kc(this, e);
  }
  getChild(e, n = null, i = null) {
    let s = mh(this, e, n, i);
    return s.length ? s[0] : null;
  }
  getChildren(e, n = null, i = null) {
    return mh(this, e, n, i);
  }
  resolve(e, n = 0) {
    return Bo(this, e, n, !1);
  }
  resolveInner(e, n = 0) {
    return Bo(this, e, n, !0);
  }
  matchContext(e) {
    return Cc(this.parent, e);
  }
  enterUnfinishedNodesBefore(e) {
    let n = this.childBefore(e), i = this;
    for (; n; ) {
      let s = n.lastChild;
      if (!s || s.to != n.to)
        break;
      s.type.isError && s.from == s.to ? (i = n, n = s.prevSibling) : n = s;
    }
    return i;
  }
  get node() {
    return this;
  }
  get next() {
    return this.parent;
  }
}
class dn extends sv {
  constructor(e, n, i, s) {
    super(), this._tree = e, this.from = n, this.index = i, this._parent = s;
  }
  get type() {
    return this._tree.type;
  }
  get name() {
    return this._tree.type.name;
  }
  get to() {
    return this.from + this._tree.length;
  }
  nextChild(e, n, i, s, o = 0) {
    for (let r = this; ; ) {
      for (let { children: l, positions: a } = r._tree, c = n > 0 ? l.length : -1; e != c; e += n) {
        let u = l[e], f = a[e] + r.from;
        if (iv(s, i, f, f + u.length)) {
          if (u instanceof Vi) {
            if (o & wt.ExcludeBuffers)
              continue;
            let d = u.findChild(0, u.buffer.length, n, i - f, s);
            if (d > -1)
              return new Di(new d3(r, u, e, f), null, d);
          } else if (o & wt.IncludeAnonymous || !u.type.isAnonymous || Bu(u)) {
            let d;
            if (!(o & wt.IgnoreMounts) && (d = al.get(u)) && !d.overlay)
              return new dn(d.tree, f, e, r);
            let h = new dn(u, f, e, r);
            return o & wt.IncludeAnonymous || !h.type.isAnonymous ? h : h.nextChild(n < 0 ? u.children.length - 1 : 0, n, i, s);
          }
        }
      }
      if (o & wt.IncludeAnonymous || !r.type.isAnonymous || (r.index >= 0 ? e = r.index + n : e = n < 0 ? -1 : r._parent._tree.children.length, r = r._parent, !r))
        return null;
    }
  }
  get firstChild() {
    return this.nextChild(
      0,
      1,
      0,
      4
      /* Side.DontCare */
    );
  }
  get lastChild() {
    return this.nextChild(
      this._tree.children.length - 1,
      -1,
      0,
      4
      /* Side.DontCare */
    );
  }
  childAfter(e) {
    return this.nextChild(
      0,
      1,
      e,
      2
      /* Side.After */
    );
  }
  childBefore(e) {
    return this.nextChild(
      this._tree.children.length - 1,
      -1,
      e,
      -2
      /* Side.Before */
    );
  }
  enter(e, n, i = 0) {
    let s;
    if (!(i & wt.IgnoreOverlays) && (s = al.get(this._tree)) && s.overlay) {
      let o = e - this.from;
      for (let { from: r, to: l } of s.overlay)
        if ((n > 0 ? r <= o : r < o) && (n < 0 ? l >= o : l > o))
          return new dn(s.tree, s.overlay[0].from + this.from, -1, this);
    }
    return this.nextChild(0, 1, e, n, i);
  }
  nextSignificantParent() {
    let e = this;
    for (; e.type.isAnonymous && e._parent; )
      e = e._parent;
    return e;
  }
  get parent() {
    return this._parent ? this._parent.nextSignificantParent() : null;
  }
  get nextSibling() {
    return this._parent && this.index >= 0 ? this._parent.nextChild(
      this.index + 1,
      1,
      0,
      4
      /* Side.DontCare */
    ) : null;
  }
  get prevSibling() {
    return this._parent && this.index >= 0 ? this._parent.nextChild(
      this.index - 1,
      -1,
      0,
      4
      /* Side.DontCare */
    ) : null;
  }
  get tree() {
    return this._tree;
  }
  toTree() {
    return this._tree;
  }
  /**
  @internal
  */
  toString() {
    return this._tree.toString();
  }
}
function mh(t, e, n, i) {
  let s = t.cursor(), o = [];
  if (!s.firstChild())
    return o;
  if (n != null) {
    for (let r = !1; !r; )
      if (r = s.type.is(n), !s.nextSibling())
        return o;
  }
  for (; ; ) {
    if (i != null && s.type.is(i))
      return o;
    if (s.type.is(e) && o.push(s.node), !s.nextSibling())
      return i == null ? o : [];
  }
}
function Cc(t, e, n = e.length - 1) {
  for (let i = t; n >= 0; i = i.parent) {
    if (!i)
      return !1;
    if (!i.type.isAnonymous) {
      if (e[n] && e[n] != i.name)
        return !1;
      n--;
    }
  }
  return !0;
}
class d3 {
  constructor(e, n, i, s) {
    this.parent = e, this.buffer = n, this.index = i, this.start = s;
  }
}
class Di extends sv {
  get name() {
    return this.type.name;
  }
  get from() {
    return this.context.start + this.context.buffer.buffer[this.index + 1];
  }
  get to() {
    return this.context.start + this.context.buffer.buffer[this.index + 2];
  }
  constructor(e, n, i) {
    super(), this.context = e, this._parent = n, this.index = i, this.type = e.buffer.set.types[e.buffer.buffer[i]];
  }
  child(e, n, i) {
    let { buffer: s } = this.context, o = s.findChild(this.index + 4, s.buffer[this.index + 3], e, n - this.context.start, i);
    return o < 0 ? null : new Di(this.context, this, o);
  }
  get firstChild() {
    return this.child(
      1,
      0,
      4
      /* Side.DontCare */
    );
  }
  get lastChild() {
    return this.child(
      -1,
      0,
      4
      /* Side.DontCare */
    );
  }
  childAfter(e) {
    return this.child(
      1,
      e,
      2
      /* Side.After */
    );
  }
  childBefore(e) {
    return this.child(
      -1,
      e,
      -2
      /* Side.Before */
    );
  }
  enter(e, n, i = 0) {
    if (i & wt.ExcludeBuffers)
      return null;
    let { buffer: s } = this.context, o = s.findChild(this.index + 4, s.buffer[this.index + 3], n > 0 ? 1 : -1, e - this.context.start, n);
    return o < 0 ? null : new Di(this.context, this, o);
  }
  get parent() {
    return this._parent || this.context.parent.nextSignificantParent();
  }
  externalSibling(e) {
    return this._parent ? null : this.context.parent.nextChild(
      this.context.index + e,
      e,
      0,
      4
      /* Side.DontCare */
    );
  }
  get nextSibling() {
    let { buffer: e } = this.context, n = e.buffer[this.index + 3];
    return n < (this._parent ? e.buffer[this._parent.index + 3] : e.buffer.length) ? new Di(this.context, this._parent, n) : this.externalSibling(1);
  }
  get prevSibling() {
    let { buffer: e } = this.context, n = this._parent ? this._parent.index + 4 : 0;
    return this.index == n ? this.externalSibling(-1) : new Di(this.context, this._parent, e.findChild(
      n,
      this.index,
      -1,
      0,
      4
      /* Side.DontCare */
    ));
  }
  get tree() {
    return null;
  }
  toTree() {
    let e = [], n = [], { buffer: i } = this.context, s = this.index + 4, o = i.buffer[this.index + 3];
    if (o > s) {
      let r = i.buffer[this.index + 1];
      e.push(i.slice(s, o, r)), n.push(0);
    }
    return new Ot(this.type, e, n, this.to - this.from);
  }
  /**
  @internal
  */
  toString() {
    return this.context.buffer.childString(this.index);
  }
}
function ov(t) {
  if (!t.length)
    return null;
  let e = 0, n = t[0];
  for (let o = 1; o < t.length; o++) {
    let r = t[o];
    (r.from > n.from || r.to < n.to) && (n = r, e = o);
  }
  let i = n instanceof dn && n.index < 0 ? null : n.parent, s = t.slice();
  return i ? s[e] = i : s.splice(e, 1), new h3(s, n);
}
class h3 {
  constructor(e, n) {
    this.heads = e, this.node = n;
  }
  get next() {
    return ov(this.heads);
  }
}
function p3(t, e, n) {
  let i = t.resolveInner(e, n), s = null;
  for (let o = i instanceof dn ? i : i.context.parent; o; o = o.parent)
    if (o.index < 0) {
      let r = o.parent;
      (s || (s = [i])).push(r.resolve(e, n)), o = r;
    } else {
      let r = al.get(o.tree);
      if (r && r.overlay && r.overlay[0].from <= e && r.overlay[r.overlay.length - 1].to >= e) {
        let l = new dn(r.tree, r.overlay[0].from + o.from, -1, o);
        (s || (s = [i])).push(Bo(l, e, n, !1));
      }
    }
  return s ? ov(s) : i;
}
class kc {
  /**
  Shorthand for `.type.name`.
  */
  get name() {
    return this.type.name;
  }
  /**
  @internal
  */
  constructor(e, n = 0) {
    if (this.mode = n, this.buffer = null, this.stack = [], this.index = 0, this.bufferNode = null, e instanceof dn)
      this.yieldNode(e);
    else {
      this._tree = e.context.parent, this.buffer = e.context;
      for (let i = e._parent; i; i = i._parent)
        this.stack.unshift(i.index);
      this.bufferNode = e, this.yieldBuf(e.index);
    }
  }
  yieldNode(e) {
    return e ? (this._tree = e, this.type = e.type, this.from = e.from, this.to = e.to, !0) : !1;
  }
  yieldBuf(e, n) {
    this.index = e;
    let { start: i, buffer: s } = this.buffer;
    return this.type = n || s.set.types[s.buffer[e]], this.from = i + s.buffer[e + 1], this.to = i + s.buffer[e + 2], !0;
  }
  /**
  @internal
  */
  yield(e) {
    return e ? e instanceof dn ? (this.buffer = null, this.yieldNode(e)) : (this.buffer = e.context, this.yieldBuf(e.index, e.type)) : !1;
  }
  /**
  @internal
  */
  toString() {
    return this.buffer ? this.buffer.buffer.childString(this.index) : this._tree.toString();
  }
  /**
  @internal
  */
  enterChild(e, n, i) {
    if (!this.buffer)
      return this.yield(this._tree.nextChild(e < 0 ? this._tree._tree.children.length - 1 : 0, e, n, i, this.mode));
    let { buffer: s } = this.buffer, o = s.findChild(this.index + 4, s.buffer[this.index + 3], e, n - this.buffer.start, i);
    return o < 0 ? !1 : (this.stack.push(this.index), this.yieldBuf(o));
  }
  /**
  Move the cursor to this node's first child. When this returns
  false, the node has no child, and the cursor has not been moved.
  */
  firstChild() {
    return this.enterChild(
      1,
      0,
      4
      /* Side.DontCare */
    );
  }
  /**
  Move the cursor to this node's last child.
  */
  lastChild() {
    return this.enterChild(
      -1,
      0,
      4
      /* Side.DontCare */
    );
  }
  /**
  Move the cursor to the first child that ends after `pos`.
  */
  childAfter(e) {
    return this.enterChild(
      1,
      e,
      2
      /* Side.After */
    );
  }
  /**
  Move to the last child that starts before `pos`.
  */
  childBefore(e) {
    return this.enterChild(
      -1,
      e,
      -2
      /* Side.Before */
    );
  }
  /**
  Move the cursor to the child around `pos`. If side is -1 the
  child may end at that position, when 1 it may start there. This
  will also enter [overlaid](#common.MountedTree.overlay)
  [mounted](#common.NodeProp^mounted) trees unless `overlays` is
  set to false.
  */
  enter(e, n, i = this.mode) {
    return this.buffer ? i & wt.ExcludeBuffers ? !1 : this.enterChild(1, e, n) : this.yield(this._tree.enter(e, n, i));
  }
  /**
  Move to the node's parent node, if this isn't the top node.
  */
  parent() {
    if (!this.buffer)
      return this.yieldNode(this.mode & wt.IncludeAnonymous ? this._tree._parent : this._tree.parent);
    if (this.stack.length)
      return this.yieldBuf(this.stack.pop());
    let e = this.mode & wt.IncludeAnonymous ? this.buffer.parent : this.buffer.parent.nextSignificantParent();
    return this.buffer = null, this.yieldNode(e);
  }
  /**
  @internal
  */
  sibling(e) {
    if (!this.buffer)
      return this._tree._parent ? this.yield(this._tree.index < 0 ? null : this._tree._parent.nextChild(this._tree.index + e, e, 0, 4, this.mode)) : !1;
    let { buffer: n } = this.buffer, i = this.stack.length - 1;
    if (e < 0) {
      let s = i < 0 ? 0 : this.stack[i] + 4;
      if (this.index != s)
        return this.yieldBuf(n.findChild(
          s,
          this.index,
          -1,
          0,
          4
          /* Side.DontCare */
        ));
    } else {
      let s = n.buffer[this.index + 3];
      if (s < (i < 0 ? n.buffer.length : n.buffer[this.stack[i] + 3]))
        return this.yieldBuf(s);
    }
    return i < 0 ? this.yield(this.buffer.parent.nextChild(this.buffer.index + e, e, 0, 4, this.mode)) : !1;
  }
  /**
  Move to this node's next sibling, if any.
  */
  nextSibling() {
    return this.sibling(1);
  }
  /**
  Move to this node's previous sibling, if any.
  */
  prevSibling() {
    return this.sibling(-1);
  }
  atLastNode(e) {
    let n, i, { buffer: s } = this;
    if (s) {
      if (e > 0) {
        if (this.index < s.buffer.buffer.length)
          return !1;
      } else
        for (let o = 0; o < this.index; o++)
          if (s.buffer.buffer[o + 3] < this.index)
            return !1;
      ({ index: n, parent: i } = s);
    } else
      ({ index: n, _parent: i } = this._tree);
    for (; i; { index: n, _parent: i } = i)
      if (n > -1)
        for (let o = n + e, r = e < 0 ? -1 : i._tree.children.length; o != r; o += e) {
          let l = i._tree.children[o];
          if (this.mode & wt.IncludeAnonymous || l instanceof Vi || !l.type.isAnonymous || Bu(l))
            return !1;
        }
    return !0;
  }
  move(e, n) {
    if (n && this.enterChild(
      e,
      0,
      4
      /* Side.DontCare */
    ))
      return !0;
    for (; ; ) {
      if (this.sibling(e))
        return !0;
      if (this.atLastNode(e) || !this.parent())
        return !1;
    }
  }
  /**
  Move to the next node in a
  [pre-order](https://en.wikipedia.org/wiki/Tree_traversal#Pre-order,_NLR)
  traversal, going from a node to its first child or, if the
  current node is empty or `enter` is false, its next sibling or
  the next sibling of the first parent node that has one.
  */
  next(e = !0) {
    return this.move(1, e);
  }
  /**
  Move to the next node in a last-to-first pre-order traversal. A
  node is followed by its last child or, if it has none, its
  previous sibling or the previous sibling of the first parent
  node that has one.
  */
  prev(e = !0) {
    return this.move(-1, e);
  }
  /**
  Move the cursor to the innermost node that covers `pos`. If
  `side` is -1, it will enter nodes that end at `pos`. If it is 1,
  it will enter nodes that start at `pos`.
  */
  moveTo(e, n = 0) {
    for (; (this.from == this.to || (n < 1 ? this.from >= e : this.from > e) || (n > -1 ? this.to <= e : this.to < e)) && this.parent(); )
      ;
    for (; this.enterChild(1, e, n); )
      ;
    return this;
  }
  /**
  Get a [syntax node](#common.SyntaxNode) at the cursor's current
  position.
  */
  get node() {
    if (!this.buffer)
      return this._tree;
    let e = this.bufferNode, n = null, i = 0;
    if (e && e.context == this.buffer)
      e: for (let s = this.index, o = this.stack.length; o >= 0; ) {
        for (let r = e; r; r = r._parent)
          if (r.index == s) {
            if (s == this.index)
              return r;
            n = r, i = o + 1;
            break e;
          }
        s = this.stack[--o];
      }
    for (let s = i; s < this.stack.length; s++)
      n = new Di(this.buffer, n, this.stack[s]);
    return this.bufferNode = new Di(this.buffer, n, this.index);
  }
  /**
  Get the [tree](#common.Tree) that represents the current node, if
  any. Will return null when the node is in a [tree
  buffer](#common.TreeBuffer).
  */
  get tree() {
    return this.buffer ? null : this._tree._tree;
  }
  /**
  Iterate over the current node and all its descendants, calling
  `enter` when entering a node and `leave`, if given, when leaving
  one. When `enter` returns `false`, any children of that node are
  skipped, and `leave` isn't called for it.
  */
  iterate(e, n) {
    for (let i = 0; ; ) {
      let s = !1;
      if (this.type.isAnonymous || e(this) !== !1) {
        if (this.firstChild()) {
          i++;
          continue;
        }
        this.type.isAnonymous || (s = !0);
      }
      for (; ; ) {
        if (s && n && n(this), s = this.type.isAnonymous, !i)
          return;
        if (this.nextSibling())
          break;
        this.parent(), i--, s = !0;
      }
    }
  }
  /**
  Test whether the current node matches a given context—a sequence
  of direct parent node names. Empty strings in the context array
  are treated as wildcards.
  */
  matchContext(e) {
    if (!this.buffer)
      return Cc(this.node.parent, e);
    let { buffer: n } = this.buffer, { types: i } = n.set;
    for (let s = e.length - 1, o = this.stack.length - 1; s >= 0; o--) {
      if (o < 0)
        return Cc(this._tree, e, s);
      let r = i[n.buffer[this.stack[o]]];
      if (!r.isAnonymous) {
        if (e[s] && e[s] != r.name)
          return !1;
        s--;
      }
    }
    return !0;
  }
}
function Bu(t) {
  return t.children.some((e) => e instanceof Vi || !e.type.isAnonymous || Bu(e));
}
function g3(t) {
  var e;
  let { buffer: n, nodeSet: i, maxBufferLength: s = c3, reused: o = [], minRepeatType: r = i.types.length } = t, l = Array.isArray(n) ? new Lu(n, n.length) : n, a = i.types, c = 0, u = 0;
  function f(k, T, A, z, B, q) {
    let { id: $, start: V, end: X, size: ce } = l, O = u, I = c;
    for (; ce < 0; )
      if (l.next(), ce == -1) {
        let Te = o[$];
        A.push(Te), z.push(V - k);
        return;
      } else if (ce == -3) {
        c = $;
        return;
      } else if (ce == -4) {
        u = $;
        return;
      } else
        throw new RangeError(`Unrecognized record size: ${ce}`);
    let L = a[$], oe, le, we = V - k;
    if (X - V <= s && (le = y(l.pos - T, B))) {
      let Te = new Uint16Array(le.size - le.skip), xe = l.pos - le.size, be = Te.length;
      for (; l.pos > xe; )
        be = v(le.start, Te, be);
      oe = new Vi(Te, X - le.start, i), we = le.start - k;
    } else {
      let Te = l.pos - ce;
      l.next();
      let xe = [], be = [], Be = $ >= r ? $ : -1, Ve = 0, Oe = X;
      for (; l.pos > Te; )
        Be >= 0 && l.id == Be && l.size >= 0 ? (l.end <= Oe - s && (g(xe, be, V, Ve, l.end, Oe, Be, O, I), Ve = xe.length, Oe = l.end), l.next()) : q > 2500 ? d(V, Te, xe, be) : f(V, Te, xe, be, Be, q + 1);
      if (Be >= 0 && Ve > 0 && Ve < xe.length && g(xe, be, V, Ve, V, Oe, Be, O, I), xe.reverse(), be.reverse(), Be > -1 && Ve > 0) {
        let Ye = h(L, I);
        oe = $u(L, xe, be, 0, xe.length, 0, X - V, Ye, Ye);
      } else
        oe = m(L, xe, be, X - V, O - X, I);
    }
    A.push(oe), z.push(we);
  }
  function d(k, T, A, z) {
    let B = [], q = 0, $ = -1;
    for (; l.pos > T; ) {
      let { id: V, start: X, end: ce, size: O } = l;
      if (O > 4)
        l.next();
      else {
        if ($ > -1 && X < $)
          break;
        $ < 0 && ($ = ce - s), B.push(V, X, ce), q++, l.next();
      }
    }
    if (q) {
      let V = new Uint16Array(q * 4), X = B[B.length - 2];
      for (let ce = B.length - 3, O = 0; ce >= 0; ce -= 3)
        V[O++] = B[ce], V[O++] = B[ce + 1] - X, V[O++] = B[ce + 2] - X, V[O++] = O;
      A.push(new Vi(V, B[2] - X, i)), z.push(X - k);
    }
  }
  function h(k, T) {
    return (A, z, B) => {
      let q = 0, $ = A.length - 1, V, X;
      if ($ >= 0 && (V = A[$]) instanceof Ot) {
        if (!$ && V.type == k && V.length == B)
          return V;
        (X = V.prop(_e.lookAhead)) && (q = z[$] + V.length + X);
      }
      return m(k, A, z, B, q, T);
    };
  }
  function g(k, T, A, z, B, q, $, V, X) {
    let ce = [], O = [];
    for (; k.length > z; )
      ce.push(k.pop()), O.push(T.pop() + A - B);
    k.push(m(i.types[$], ce, O, q - B, V - q, X)), T.push(B - A);
  }
  function m(k, T, A, z, B, q, $) {
    if (q) {
      let V = [_e.contextHash, q];
      $ = $ ? [V].concat($) : [V];
    }
    if (B > 25) {
      let V = [_e.lookAhead, B];
      $ = $ ? [V].concat($) : [V];
    }
    return new Ot(k, T, A, z, $);
  }
  function y(k, T) {
    let A = l.fork(), z = 0, B = 0, q = 0, $ = A.end - s, V = { size: 0, start: 0, skip: 0 };
    e: for (let X = A.pos - k; A.pos > X; ) {
      let ce = A.size;
      if (A.id == T && ce >= 0) {
        V.size = z, V.start = B, V.skip = q, q += 4, z += 4, A.next();
        continue;
      }
      let O = A.pos - ce;
      if (ce < 0 || O < X || A.start < $)
        break;
      let I = A.id >= r ? 4 : 0, L = A.start;
      for (A.next(); A.pos > O; ) {
        if (A.size < 0)
          if (A.size == -3)
            I += 4;
          else
            break e;
        else A.id >= r && (I += 4);
        A.next();
      }
      B = L, z += ce, q += I;
    }
    return (T < 0 || z == k) && (V.size = z, V.start = B, V.skip = q), V.size > 4 ? V : void 0;
  }
  function v(k, T, A) {
    let { id: z, start: B, end: q, size: $ } = l;
    if (l.next(), $ >= 0 && z < r) {
      let V = A;
      if ($ > 4) {
        let X = l.pos - ($ - 4);
        for (; l.pos > X; )
          A = v(k, T, A);
      }
      T[--A] = V, T[--A] = q - k, T[--A] = B - k, T[--A] = z;
    } else $ == -3 ? c = z : $ == -4 && (u = z);
    return A;
  }
  let w = [], _ = [];
  for (; l.pos > 0; )
    f(t.start || 0, t.bufferStart || 0, w, _, -1, 0);
  let x = (e = t.length) !== null && e !== void 0 ? e : w.length ? _[0] + w[0].length : 0;
  return new Ot(a[t.topID], w.reverse(), _.reverse(), x);
}
const vh = /* @__PURE__ */ new WeakMap();
function zr(t, e) {
  if (!t.isAnonymous || e instanceof Vi || e.type != t)
    return 1;
  let n = vh.get(e);
  if (n == null) {
    n = 1;
    for (let i of e.children) {
      if (i.type != t || !(i instanceof Ot)) {
        n = 1;
        break;
      }
      n += zr(t, i);
    }
    vh.set(e, n);
  }
  return n;
}
function $u(t, e, n, i, s, o, r, l, a) {
  let c = 0;
  for (let g = i; g < s; g++)
    c += zr(t, e[g]);
  let u = Math.ceil(
    c * 1.5 / 8
    /* Balance.BranchFactor */
  ), f = [], d = [];
  function h(g, m, y, v, w) {
    for (let _ = y; _ < v; ) {
      let x = _, k = m[_], T = zr(t, g[_]);
      for (_++; _ < v; _++) {
        let A = zr(t, g[_]);
        if (T + A >= u)
          break;
        T += A;
      }
      if (_ == x + 1) {
        if (T > u) {
          let A = g[x];
          h(A.children, A.positions, 0, A.children.length, m[x] + w);
          continue;
        }
        f.push(g[x]);
      } else {
        let A = m[_ - 1] + g[_ - 1].length - k;
        f.push($u(t, g, m, x, _, k, A, null, a));
      }
      d.push(k + w - o);
    }
  }
  return h(e, n, i, s, 0), (l || a)(f, d, r);
}
class ns {
  /**
  Construct a tree fragment. You'll usually want to use
  [`addTree`](#common.TreeFragment^addTree) and
  [`applyChanges`](#common.TreeFragment^applyChanges) instead of
  calling this directly.
  */
  constructor(e, n, i, s, o = !1, r = !1) {
    this.from = e, this.to = n, this.tree = i, this.offset = s, this.open = (o ? 1 : 0) | (r ? 2 : 0);
  }
  /**
  Whether the start of the fragment represents the start of a
  parse, or the end of a change. (In the second case, it may not
  be safe to reuse some nodes at the start, depending on the
  parsing algorithm.)
  */
  get openStart() {
    return (this.open & 1) > 0;
  }
  /**
  Whether the end of the fragment represents the end of a
  full-document parse, or the start of a change.
  */
  get openEnd() {
    return (this.open & 2) > 0;
  }
  /**
  Create a set of fragments from a freshly parsed tree, or update
  an existing set of fragments by replacing the ones that overlap
  with a tree with content from the new tree. When `partial` is
  true, the parse is treated as incomplete, and the resulting
  fragment has [`openEnd`](#common.TreeFragment.openEnd) set to
  true.
  */
  static addTree(e, n = [], i = !1) {
    let s = [new ns(0, e.length, e, 0, !1, i)];
    for (let o of n)
      o.to > e.length && s.push(o);
    return s;
  }
  /**
  Apply a set of edits to an array of fragments, removing or
  splitting fragments as necessary to remove edited ranges, and
  adjusting offsets for fragments that moved.
  */
  static applyChanges(e, n, i = 128) {
    if (!n.length)
      return e;
    let s = [], o = 1, r = e.length ? e[0] : null;
    for (let l = 0, a = 0, c = 0; ; l++) {
      let u = l < n.length ? n[l] : null, f = u ? u.fromA : 1e9;
      if (f - a >= i)
        for (; r && r.from < f; ) {
          let d = r;
          if (a >= d.from || f <= d.to || c) {
            let h = Math.max(d.from, a) - c, g = Math.min(d.to, f) - c;
            d = h >= g ? null : new ns(h, g, d.tree, d.offset + c, l > 0, !!u);
          }
          if (d && s.push(d), r.to > f)
            break;
          r = o < e.length ? e[o++] : null;
        }
      if (!u)
        break;
      a = u.toA, c = u.toA - u.toB;
    }
    return s;
  }
}
class m3 {
  /**
  Start a parse, returning a [partial parse](#common.PartialParse)
  object. [`fragments`](#common.TreeFragment) can be passed in to
  make the parse incremental.
  
  By default, the entire input is parsed. You can pass `ranges`,
  which should be a sorted array of non-empty, non-overlapping
  ranges, to parse only those ranges. The tree returned in that
  case will start at `ranges[0].from`.
  */
  startParse(e, n, i) {
    return typeof e == "string" && (e = new v3(e)), i = i ? i.length ? i.map((s) => new wa(s.from, s.to)) : [new wa(0, 0)] : [new wa(0, e.length)], this.createParse(e, n || [], i);
  }
  /**
  Run a full parse, returning the resulting tree.
  */
  parse(e, n, i) {
    let s = this.startParse(e, n, i);
    for (; ; ) {
      let o = s.advance();
      if (o)
        return o;
    }
  }
}
class v3 {
  constructor(e) {
    this.string = e;
  }
  get length() {
    return this.string.length;
  }
  chunk(e) {
    return this.string.slice(e);
  }
  get lineChunks() {
    return !1;
  }
  read(e, n) {
    return this.string.slice(e, n);
  }
}
new _e({ perNode: !0 });
let y3 = 0;
class on {
  /**
  @internal
  */
  constructor(e, n, i, s) {
    this.name = e, this.set = n, this.base = i, this.modified = s, this.id = y3++;
  }
  toString() {
    let { name: e } = this;
    for (let n of this.modified)
      n.name && (e = `${n.name}(${e})`);
    return e;
  }
  static define(e, n) {
    let i = typeof e == "string" ? e : "?";
    if (e instanceof on && (n = e), n?.base)
      throw new Error("Can not derive from a modified tag");
    let s = new on(i, [], null, []);
    if (s.set.push(s), n)
      for (let o of n.set)
        s.set.push(o);
    return s;
  }
  /**
  Define a tag _modifier_, which is a function that, given a tag,
  will return a tag that is a subtag of the original. Applying the
  same modifier to a twice tag will return the same value (`m1(t1)
  == m1(t1)`) and applying multiple modifiers will, regardless or
  order, produce the same tag (`m1(m2(t1)) == m2(m1(t1))`).
  
  When multiple modifiers are applied to a given base tag, each
  smaller set of modifiers is registered as a parent, so that for
  example `m1(m2(m3(t1)))` is a subtype of `m1(m2(t1))`,
  `m1(m3(t1)`, and so on.
  */
  static defineModifier(e) {
    let n = new cl(e);
    return (i) => i.modified.indexOf(n) > -1 ? i : cl.get(i.base || i, i.modified.concat(n).sort((s, o) => s.id - o.id));
  }
}
let b3 = 0;
class cl {
  constructor(e) {
    this.name = e, this.instances = [], this.id = b3++;
  }
  static get(e, n) {
    if (!n.length)
      return e;
    let i = n[0].instances.find((l) => l.base == e && w3(n, l.modified));
    if (i)
      return i;
    let s = [], o = new on(e.name, s, e, n);
    for (let l of n)
      l.instances.push(o);
    let r = S3(n);
    for (let l of e.set)
      if (!l.modified.length)
        for (let a of r)
          s.push(cl.get(l, a));
    return o;
  }
}
function w3(t, e) {
  return t.length == e.length && t.every((n, i) => n == e[i]);
}
function S3(t) {
  let e = [[]];
  for (let n = 0; n < t.length; n++)
    for (let i = 0, s = e.length; i < s; i++)
      e.push(e[i].concat(t[n]));
  return e.sort((n, i) => i.length - n.length);
}
function C3(t) {
  let e = /* @__PURE__ */ Object.create(null);
  for (let n in t) {
    let i = t[n];
    Array.isArray(i) || (i = [i]);
    for (let s of n.split(" "))
      if (s) {
        let o = [], r = 2, l = s;
        for (let f = 0; ; ) {
          if (l == "..." && f > 0 && f + 3 == s.length) {
            r = 1;
            break;
          }
          let d = /^"(?:[^"\\]|\\.)*?"|[^\/!]+/.exec(l);
          if (!d)
            throw new RangeError("Invalid path: " + s);
          if (o.push(d[0] == "*" ? "" : d[0][0] == '"' ? JSON.parse(d[0]) : d[0]), f += d[0].length, f == s.length)
            break;
          let h = s[f++];
          if (f == s.length && h == "!") {
            r = 0;
            break;
          }
          if (h != "/")
            throw new RangeError("Invalid path: " + s);
          l = s.slice(f);
        }
        let a = o.length - 1, c = o[a];
        if (!c)
          throw new RangeError("Invalid path: " + s);
        let u = new ul(i, r, a > 0 ? o.slice(0, a) : null);
        e[c] = u.sort(e[c]);
      }
  }
  return rv.add(e);
}
const rv = new _e();
class ul {
  constructor(e, n, i, s) {
    this.tags = e, this.mode = n, this.context = i, this.next = s;
  }
  get opaque() {
    return this.mode == 0;
  }
  get inherit() {
    return this.mode == 1;
  }
  sort(e) {
    return !e || e.depth < this.depth ? (this.next = e, this) : (e.next = this.sort(e.next), e);
  }
  get depth() {
    return this.context ? this.context.length : 0;
  }
}
ul.empty = new ul([], 2, null);
function lv(t, e) {
  let n = /* @__PURE__ */ Object.create(null);
  for (let o of t)
    if (!Array.isArray(o.tag))
      n[o.tag.id] = o.class;
    else
      for (let r of o.tag)
        n[r.id] = o.class;
  let { scope: i, all: s = null } = e || {};
  return {
    style: (o) => {
      let r = s;
      for (let l of o)
        for (let a of l.set) {
          let c = n[a.id];
          if (c) {
            r = r ? r + " " + c : c;
            break;
          }
        }
      return r;
    },
    scope: i
  };
}
function k3(t, e) {
  let n = null;
  for (let i of t) {
    let s = i.style(e);
    s && (n = n ? n + " " + s : s);
  }
  return n;
}
function _3(t, e, n, i = 0, s = t.length) {
  let o = new x3(i, Array.isArray(e) ? e : [e], n);
  o.highlightRange(t.cursor(), i, s, "", o.highlighters), o.flush(s);
}
class x3 {
  constructor(e, n, i) {
    this.at = e, this.highlighters = n, this.span = i, this.class = "";
  }
  startSpan(e, n) {
    n != this.class && (this.flush(e), e > this.at && (this.at = e), this.class = n);
  }
  flush(e) {
    e > this.at && this.class && this.span(this.at, e, this.class);
  }
  highlightRange(e, n, i, s, o) {
    let { type: r, from: l, to: a } = e;
    if (l >= i || a <= n)
      return;
    r.isTop && (o = this.highlighters.filter((h) => !h.scope || h.scope(r)));
    let c = s, u = A3(e) || ul.empty, f = k3(o, u.tags);
    if (f && (c && (c += " "), c += f, u.mode == 1 && (s += (s ? " " : "") + f)), this.startSpan(Math.max(n, l), c), u.opaque)
      return;
    let d = e.tree && e.tree.prop(_e.mounted);
    if (d && d.overlay) {
      let h = e.node.enter(d.overlay[0].from + l, 1), g = this.highlighters.filter((y) => !y.scope || y.scope(d.tree.type)), m = e.firstChild();
      for (let y = 0, v = l; ; y++) {
        let w = y < d.overlay.length ? d.overlay[y] : null, _ = w ? w.from + l : a, x = Math.max(n, v), k = Math.min(i, _);
        if (x < k && m)
          for (; e.from < k && (this.highlightRange(e, x, k, s, o), this.startSpan(Math.min(k, e.to), c), !(e.to >= _ || !e.nextSibling())); )
            ;
        if (!w || _ > i)
          break;
        v = w.to + l, v > n && (this.highlightRange(h.cursor(), Math.max(n, w.from + l), Math.min(i, v), "", g), this.startSpan(Math.min(i, v), c));
      }
      m && e.parent();
    } else if (e.firstChild()) {
      d && (s = "");
      do
        if (!(e.to <= n)) {
          if (e.from >= i)
            break;
          this.highlightRange(e, n, i, s, o), this.startSpan(Math.min(i, e.to), c);
        }
      while (e.nextSibling());
      e.parent();
    }
  }
}
function A3(t) {
  let e = t.type.prop(rv);
  for (; e && e.context && !t.matchContext(e.context); )
    e = e.next;
  return e || null;
}
const Q = on.define, Cr = Q(), _i = Q(), yh = Q(_i), bh = Q(_i), xi = Q(), kr = Q(xi), Sa = Q(xi), Ln = Q(), Ui = Q(Ln), In = Q(), Rn = Q(), _c = Q(), Xs = Q(_c), _r = Q(), pe = {
  /**
  A comment.
  */
  comment: Cr,
  /**
  A line [comment](#highlight.tags.comment).
  */
  lineComment: Q(Cr),
  /**
  A block [comment](#highlight.tags.comment).
  */
  blockComment: Q(Cr),
  /**
  A documentation [comment](#highlight.tags.comment).
  */
  docComment: Q(Cr),
  /**
  Any kind of identifier.
  */
  name: _i,
  /**
  The [name](#highlight.tags.name) of a variable.
  */
  variableName: Q(_i),
  /**
  A type [name](#highlight.tags.name).
  */
  typeName: yh,
  /**
  A tag name (subtag of [`typeName`](#highlight.tags.typeName)).
  */
  tagName: Q(yh),
  /**
  A property or field [name](#highlight.tags.name).
  */
  propertyName: bh,
  /**
  An attribute name (subtag of [`propertyName`](#highlight.tags.propertyName)).
  */
  attributeName: Q(bh),
  /**
  The [name](#highlight.tags.name) of a class.
  */
  className: Q(_i),
  /**
  A label [name](#highlight.tags.name).
  */
  labelName: Q(_i),
  /**
  A namespace [name](#highlight.tags.name).
  */
  namespace: Q(_i),
  /**
  The [name](#highlight.tags.name) of a macro.
  */
  macroName: Q(_i),
  /**
  A literal value.
  */
  literal: xi,
  /**
  A string [literal](#highlight.tags.literal).
  */
  string: kr,
  /**
  A documentation [string](#highlight.tags.string).
  */
  docString: Q(kr),
  /**
  A character literal (subtag of [string](#highlight.tags.string)).
  */
  character: Q(kr),
  /**
  An attribute value (subtag of [string](#highlight.tags.string)).
  */
  attributeValue: Q(kr),
  /**
  A number [literal](#highlight.tags.literal).
  */
  number: Sa,
  /**
  An integer [number](#highlight.tags.number) literal.
  */
  integer: Q(Sa),
  /**
  A floating-point [number](#highlight.tags.number) literal.
  */
  float: Q(Sa),
  /**
  A boolean [literal](#highlight.tags.literal).
  */
  bool: Q(xi),
  /**
  Regular expression [literal](#highlight.tags.literal).
  */
  regexp: Q(xi),
  /**
  An escape [literal](#highlight.tags.literal), for example a
  backslash escape in a string.
  */
  escape: Q(xi),
  /**
  A color [literal](#highlight.tags.literal).
  */
  color: Q(xi),
  /**
  A URL [literal](#highlight.tags.literal).
  */
  url: Q(xi),
  /**
  A language keyword.
  */
  keyword: In,
  /**
  The [keyword](#highlight.tags.keyword) for the self or this
  object.
  */
  self: Q(In),
  /**
  The [keyword](#highlight.tags.keyword) for null.
  */
  null: Q(In),
  /**
  A [keyword](#highlight.tags.keyword) denoting some atomic value.
  */
  atom: Q(In),
  /**
  A [keyword](#highlight.tags.keyword) that represents a unit.
  */
  unit: Q(In),
  /**
  A modifier [keyword](#highlight.tags.keyword).
  */
  modifier: Q(In),
  /**
  A [keyword](#highlight.tags.keyword) that acts as an operator.
  */
  operatorKeyword: Q(In),
  /**
  A control-flow related [keyword](#highlight.tags.keyword).
  */
  controlKeyword: Q(In),
  /**
  A [keyword](#highlight.tags.keyword) that defines something.
  */
  definitionKeyword: Q(In),
  /**
  A [keyword](#highlight.tags.keyword) related to defining or
  interfacing with modules.
  */
  moduleKeyword: Q(In),
  /**
  An operator.
  */
  operator: Rn,
  /**
  An [operator](#highlight.tags.operator) that dereferences something.
  */
  derefOperator: Q(Rn),
  /**
  Arithmetic-related [operator](#highlight.tags.operator).
  */
  arithmeticOperator: Q(Rn),
  /**
  Logical [operator](#highlight.tags.operator).
  */
  logicOperator: Q(Rn),
  /**
  Bit [operator](#highlight.tags.operator).
  */
  bitwiseOperator: Q(Rn),
  /**
  Comparison [operator](#highlight.tags.operator).
  */
  compareOperator: Q(Rn),
  /**
  [Operator](#highlight.tags.operator) that updates its operand.
  */
  updateOperator: Q(Rn),
  /**
  [Operator](#highlight.tags.operator) that defines something.
  */
  definitionOperator: Q(Rn),
  /**
  Type-related [operator](#highlight.tags.operator).
  */
  typeOperator: Q(Rn),
  /**
  Control-flow [operator](#highlight.tags.operator).
  */
  controlOperator: Q(Rn),
  /**
  Program or markup punctuation.
  */
  punctuation: _c,
  /**
  [Punctuation](#highlight.tags.punctuation) that separates
  things.
  */
  separator: Q(_c),
  /**
  Bracket-style [punctuation](#highlight.tags.punctuation).
  */
  bracket: Xs,
  /**
  Angle [brackets](#highlight.tags.bracket) (usually `<` and `>`
  tokens).
  */
  angleBracket: Q(Xs),
  /**
  Square [brackets](#highlight.tags.bracket) (usually `[` and `]`
  tokens).
  */
  squareBracket: Q(Xs),
  /**
  Parentheses (usually `(` and `)` tokens). Subtag of
  [bracket](#highlight.tags.bracket).
  */
  paren: Q(Xs),
  /**
  Braces (usually `{` and `}` tokens). Subtag of
  [bracket](#highlight.tags.bracket).
  */
  brace: Q(Xs),
  /**
  Content, for example plain text in XML or markup documents.
  */
  content: Ln,
  /**
  [Content](#highlight.tags.content) that represents a heading.
  */
  heading: Ui,
  /**
  A level 1 [heading](#highlight.tags.heading).
  */
  heading1: Q(Ui),
  /**
  A level 2 [heading](#highlight.tags.heading).
  */
  heading2: Q(Ui),
  /**
  A level 3 [heading](#highlight.tags.heading).
  */
  heading3: Q(Ui),
  /**
  A level 4 [heading](#highlight.tags.heading).
  */
  heading4: Q(Ui),
  /**
  A level 5 [heading](#highlight.tags.heading).
  */
  heading5: Q(Ui),
  /**
  A level 6 [heading](#highlight.tags.heading).
  */
  heading6: Q(Ui),
  /**
  A prose [content](#highlight.tags.content) separator (such as a horizontal rule).
  */
  contentSeparator: Q(Ln),
  /**
  [Content](#highlight.tags.content) that represents a list.
  */
  list: Q(Ln),
  /**
  [Content](#highlight.tags.content) that represents a quote.
  */
  quote: Q(Ln),
  /**
  [Content](#highlight.tags.content) that is emphasized.
  */
  emphasis: Q(Ln),
  /**
  [Content](#highlight.tags.content) that is styled strong.
  */
  strong: Q(Ln),
  /**
  [Content](#highlight.tags.content) that is part of a link.
  */
  link: Q(Ln),
  /**
  [Content](#highlight.tags.content) that is styled as code or
  monospace.
  */
  monospace: Q(Ln),
  /**
  [Content](#highlight.tags.content) that has a strike-through
  style.
  */
  strikethrough: Q(Ln),
  /**
  Inserted text in a change-tracking format.
  */
  inserted: Q(),
  /**
  Deleted text.
  */
  deleted: Q(),
  /**
  Changed text.
  */
  changed: Q(),
  /**
  An invalid or unsyntactic element.
  */
  invalid: Q(),
  /**
  Metadata or meta-instruction.
  */
  meta: _r,
  /**
  [Metadata](#highlight.tags.meta) that applies to the entire
  document.
  */
  documentMeta: Q(_r),
  /**
  [Metadata](#highlight.tags.meta) that annotates or adds
  attributes to a given syntactic element.
  */
  annotation: Q(_r),
  /**
  Processing instruction or preprocessor directive. Subtag of
  [meta](#highlight.tags.meta).
  */
  processingInstruction: Q(_r),
  /**
  [Modifier](#highlight.Tag^defineModifier) that indicates that a
  given element is being defined. Expected to be used with the
  various [name](#highlight.tags.name) tags.
  */
  definition: on.defineModifier("definition"),
  /**
  [Modifier](#highlight.Tag^defineModifier) that indicates that
  something is constant. Mostly expected to be used with
  [variable names](#highlight.tags.variableName).
  */
  constant: on.defineModifier("constant"),
  /**
  [Modifier](#highlight.Tag^defineModifier) used to indicate that
  a [variable](#highlight.tags.variableName) or [property
  name](#highlight.tags.propertyName) is being called or defined
  as a function.
  */
  function: on.defineModifier("function"),
  /**
  [Modifier](#highlight.Tag^defineModifier) that can be applied to
  [names](#highlight.tags.name) to indicate that they belong to
  the language's standard environment.
  */
  standard: on.defineModifier("standard"),
  /**
  [Modifier](#highlight.Tag^defineModifier) that indicates a given
  [names](#highlight.tags.name) is local to some scope.
  */
  local: on.defineModifier("local"),
  /**
  A generic variant [modifier](#highlight.Tag^defineModifier) that
  can be used to tag language-specific alternative variants of
  some common tag. It is recommended for themes to define special
  forms of at least the [string](#highlight.tags.string) and
  [variable name](#highlight.tags.variableName) tags, since those
  come up a lot.
  */
  special: on.defineModifier("special")
};
for (let t in pe) {
  let e = pe[t];
  e instanceof on && (e.name = t);
}
lv([
  { tag: pe.link, class: "tok-link" },
  { tag: pe.heading, class: "tok-heading" },
  { tag: pe.emphasis, class: "tok-emphasis" },
  { tag: pe.strong, class: "tok-strong" },
  { tag: pe.keyword, class: "tok-keyword" },
  { tag: pe.atom, class: "tok-atom" },
  { tag: pe.bool, class: "tok-bool" },
  { tag: pe.url, class: "tok-url" },
  { tag: pe.labelName, class: "tok-labelName" },
  { tag: pe.inserted, class: "tok-inserted" },
  { tag: pe.deleted, class: "tok-deleted" },
  { tag: pe.literal, class: "tok-literal" },
  { tag: pe.string, class: "tok-string" },
  { tag: pe.number, class: "tok-number" },
  { tag: [pe.regexp, pe.escape, pe.special(pe.string)], class: "tok-string2" },
  { tag: pe.variableName, class: "tok-variableName" },
  { tag: pe.local(pe.variableName), class: "tok-variableName tok-local" },
  { tag: pe.definition(pe.variableName), class: "tok-variableName tok-definition" },
  { tag: pe.special(pe.variableName), class: "tok-variableName2" },
  { tag: pe.definition(pe.propertyName), class: "tok-propertyName tok-definition" },
  { tag: pe.typeName, class: "tok-typeName" },
  { tag: pe.namespace, class: "tok-namespace" },
  { tag: pe.className, class: "tok-className" },
  { tag: pe.macroName, class: "tok-macroName" },
  { tag: pe.propertyName, class: "tok-propertyName" },
  { tag: pe.operator, class: "tok-operator" },
  { tag: pe.comment, class: "tok-comment" },
  { tag: pe.meta, class: "tok-meta" },
  { tag: pe.invalid, class: "tok-invalid" },
  { tag: pe.punctuation, class: "tok-punctuation" }
]);
var Ca;
const so = /* @__PURE__ */ new _e(), E3 = /* @__PURE__ */ new _e();
class Hn {
  /**
  Construct a language object. If you need to invoke this
  directly, first define a data facet with
  [`defineLanguageFacet`](https://codemirror.net/6/docs/ref/#language.defineLanguageFacet), and then
  configure your parser to [attach](https://codemirror.net/6/docs/ref/#language.languageDataProp) it
  to the language's outer syntax node.
  */
  constructor(e, n, i = [], s = "") {
    this.data = e, this.name = s, Me.prototype.hasOwnProperty("tree") || Object.defineProperty(Me.prototype, "tree", { get() {
      return Xn(this);
    } }), this.parser = n, this.extension = [
      Ns.of(this),
      Me.languageData.of((o, r, l) => {
        let a = wh(o, r, l), c = a.type.prop(so);
        if (!c)
          return [];
        let u = o.facet(c), f = a.type.prop(E3);
        if (f) {
          let d = a.resolve(r - a.from, l);
          for (let h of f)
            if (h.test(d, o)) {
              let g = o.facet(h.facet);
              return h.type == "replace" ? g : g.concat(u);
            }
        }
        return u;
      })
    ].concat(i);
  }
  /**
  Query whether this language is active at the given position.
  */
  isActiveAt(e, n, i = -1) {
    return wh(e, n, i).type.prop(so) == this.data;
  }
  /**
  Find the document regions that were parsed using this language.
  The returned regions will _include_ any nested languages rooted
  in this language, when those exist.
  */
  findRegions(e) {
    let n = e.facet(Ns);
    if (n?.data == this.data)
      return [{ from: 0, to: e.doc.length }];
    if (!n || !n.allowsNesting)
      return [];
    let i = [], s = (o, r) => {
      if (o.prop(so) == this.data) {
        i.push({ from: r, to: r + o.length });
        return;
      }
      let l = o.prop(_e.mounted);
      if (l) {
        if (l.tree.prop(so) == this.data) {
          if (l.overlay)
            for (let a of l.overlay)
              i.push({ from: a.from + r, to: a.to + r });
          else
            i.push({ from: r, to: r + o.length });
          return;
        } else if (l.overlay) {
          let a = i.length;
          if (s(l.tree, l.overlay[0].from + r), i.length > a)
            return;
        }
      }
      for (let a = 0; a < o.children.length; a++) {
        let c = o.children[a];
        c instanceof Ot && s(c, o.positions[a] + r);
      }
    };
    return s(Xn(e), 0), i;
  }
  /**
  Indicates whether this language allows nested languages. The
  default implementation returns true.
  */
  get allowsNesting() {
    return !0;
  }
}
Hn.setState = /* @__PURE__ */ nt.define();
function wh(t, e, n) {
  let i = t.facet(Ns), s = Xn(t).topNode;
  if (!i || i.allowsNesting)
    for (let o = s; o; o = o.enter(e, n, wt.ExcludeBuffers))
      o.type.isTop && (s = o);
  return s;
}
function Xn(t) {
  let e = t.field(Hn.state, !1);
  return e ? e.tree : Ot.empty;
}
class T3 {
  /**
  Create an input object for the given document.
  */
  constructor(e) {
    this.doc = e, this.cursorPos = 0, this.string = "", this.cursor = e.iter();
  }
  get length() {
    return this.doc.length;
  }
  syncTo(e) {
    return this.string = this.cursor.next(e - this.cursorPos).value, this.cursorPos = e + this.string.length, this.cursorPos - this.string.length;
  }
  chunk(e) {
    return this.syncTo(e), this.string;
  }
  get lineChunks() {
    return !0;
  }
  read(e, n) {
    let i = this.cursorPos - this.string.length;
    return e < i || n >= this.cursorPos ? this.doc.sliceString(e, n) : this.string.slice(e - i, n - i);
  }
}
let Zs = null;
class fl {
  constructor(e, n, i = [], s, o, r, l, a) {
    this.parser = e, this.state = n, this.fragments = i, this.tree = s, this.treeLen = o, this.viewport = r, this.skipped = l, this.scheduleOn = a, this.parse = null, this.tempSkipped = [];
  }
  /**
  @internal
  */
  static create(e, n, i) {
    return new fl(e, n, [], Ot.empty, 0, i, [], null);
  }
  startParse() {
    return this.parser.startParse(new T3(this.state.doc), this.fragments);
  }
  /**
  @internal
  */
  work(e, n) {
    return n != null && n >= this.state.doc.length && (n = void 0), this.tree != Ot.empty && this.isDone(n ?? this.state.doc.length) ? (this.takeTree(), !0) : this.withContext(() => {
      var i;
      if (typeof e == "number") {
        let s = Date.now() + e;
        e = () => Date.now() > s;
      }
      for (this.parse || (this.parse = this.startParse()), n != null && (this.parse.stoppedAt == null || this.parse.stoppedAt > n) && n < this.state.doc.length && this.parse.stopAt(n); ; ) {
        let s = this.parse.advance();
        if (s)
          if (this.fragments = this.withoutTempSkipped(ns.addTree(s, this.fragments, this.parse.stoppedAt != null)), this.treeLen = (i = this.parse.stoppedAt) !== null && i !== void 0 ? i : this.state.doc.length, this.tree = s, this.parse = null, this.treeLen < (n ?? this.state.doc.length))
            this.parse = this.startParse();
          else
            return !0;
        if (e())
          return !1;
      }
    });
  }
  /**
  @internal
  */
  takeTree() {
    let e, n;
    this.parse && (e = this.parse.parsedPos) >= this.treeLen && ((this.parse.stoppedAt == null || this.parse.stoppedAt > e) && this.parse.stopAt(e), this.withContext(() => {
      for (; !(n = this.parse.advance()); )
        ;
    }), this.treeLen = e, this.tree = n, this.fragments = this.withoutTempSkipped(ns.addTree(this.tree, this.fragments, !0)), this.parse = null);
  }
  withContext(e) {
    let n = Zs;
    Zs = this;
    try {
      return e();
    } finally {
      Zs = n;
    }
  }
  withoutTempSkipped(e) {
    for (let n; n = this.tempSkipped.pop(); )
      e = Sh(e, n.from, n.to);
    return e;
  }
  /**
  @internal
  */
  changes(e, n) {
    let { fragments: i, tree: s, treeLen: o, viewport: r, skipped: l } = this;
    if (this.takeTree(), !e.empty) {
      let a = [];
      if (e.iterChangedRanges((c, u, f, d) => a.push({ fromA: c, toA: u, fromB: f, toB: d })), i = ns.applyChanges(i, a), s = Ot.empty, o = 0, r = { from: e.mapPos(r.from, -1), to: e.mapPos(r.to, 1) }, this.skipped.length) {
        l = [];
        for (let c of this.skipped) {
          let u = e.mapPos(c.from, 1), f = e.mapPos(c.to, -1);
          u < f && l.push({ from: u, to: f });
        }
      }
    }
    return new fl(this.parser, n, i, s, o, r, l, this.scheduleOn);
  }
  /**
  @internal
  */
  updateViewport(e) {
    if (this.viewport.from == e.from && this.viewport.to == e.to)
      return !1;
    this.viewport = e;
    let n = this.skipped.length;
    for (let i = 0; i < this.skipped.length; i++) {
      let { from: s, to: o } = this.skipped[i];
      s < e.to && o > e.from && (this.fragments = Sh(this.fragments, s, o), this.skipped.splice(i--, 1));
    }
    return this.skipped.length >= n ? !1 : (this.reset(), !0);
  }
  /**
  @internal
  */
  reset() {
    this.parse && (this.takeTree(), this.parse = null);
  }
  /**
  Notify the parse scheduler that the given region was skipped
  because it wasn't in view, and the parse should be restarted
  when it comes into view.
  */
  skipUntilInView(e, n) {
    this.skipped.push({ from: e, to: n });
  }
  /**
  Returns a parser intended to be used as placeholder when
  asynchronously loading a nested parser. It'll skip its input and
  mark it as not-really-parsed, so that the next update will parse
  it again.
  
  When `until` is given, a reparse will be scheduled when that
  promise resolves.
  */
  static getSkippingParser(e) {
    return new class extends m3 {
      createParse(n, i, s) {
        let o = s[0].from, r = s[s.length - 1].to;
        return {
          parsedPos: o,
          advance() {
            let a = Zs;
            if (a) {
              for (let c of s)
                a.tempSkipped.push(c);
              e && (a.scheduleOn = a.scheduleOn ? Promise.all([a.scheduleOn, e]) : e);
            }
            return this.parsedPos = r, new Ot(yn.none, [], [], r - o);
          },
          stoppedAt: null,
          stopAt() {
          }
        };
      }
    }();
  }
  /**
  @internal
  */
  isDone(e) {
    e = Math.min(e, this.state.doc.length);
    let n = this.fragments;
    return this.treeLen >= e && n.length && n[0].from == 0 && n[0].to >= e;
  }
  /**
  Get the context for the current parse, or `null` if no editor
  parse is in progress.
  */
  static get() {
    return Zs;
  }
}
function Sh(t, e, n) {
  return ns.applyChanges(t, [{ fromA: e, toA: n, fromB: e, toB: n }]);
}
class Fs {
  constructor(e) {
    this.context = e, this.tree = e.tree;
  }
  apply(e) {
    if (!e.docChanged && this.tree == this.context.tree)
      return this;
    let n = this.context.changes(e.changes, e.state), i = this.context.treeLen == e.startState.doc.length ? void 0 : Math.max(e.changes.mapPos(this.context.treeLen), n.viewport.to);
    return n.work(20, i) || n.takeTree(), new Fs(n);
  }
  static init(e) {
    let n = Math.min(3e3, e.doc.length), i = fl.create(e.facet(Ns).parser, e, { from: 0, to: n });
    return i.work(20, n) || i.takeTree(), new Fs(i);
  }
}
Hn.state = /* @__PURE__ */ Hi.define({
  create: Fs.init,
  update(t, e) {
    for (let n of e.effects)
      if (n.is(Hn.setState))
        return n.value;
    return e.startState.facet(Ns) != e.state.facet(Ns) ? Fs.init(e.state) : t.apply(e);
  }
});
let av = (t) => {
  let e = setTimeout(
    () => t(),
    500
    /* Work.MaxPause */
  );
  return () => clearTimeout(e);
};
typeof requestIdleCallback < "u" && (av = (t) => {
  let e = -1, n = setTimeout(
    () => {
      e = requestIdleCallback(t, {
        timeout: 400
        /* Work.MinPause */
      });
    },
    100
    /* Work.MinPause */
  );
  return () => e < 0 ? clearTimeout(n) : cancelIdleCallback(e);
});
const ka = typeof navigator < "u" && (!((Ca = navigator.scheduling) === null || Ca === void 0) && Ca.isInputPending) ? () => navigator.scheduling.isInputPending() : null, M3 = /* @__PURE__ */ Ni.fromClass(class {
  constructor(e) {
    this.view = e, this.working = null, this.workScheduled = 0, this.chunkEnd = -1, this.chunkBudget = -1, this.work = this.work.bind(this), this.scheduleWork();
  }
  update(e) {
    let n = this.view.state.field(Hn.state).context;
    (n.updateViewport(e.view.viewport) || this.view.viewport.to > n.treeLen) && this.scheduleWork(), (e.docChanged || e.selectionSet) && (this.view.hasFocus && (this.chunkBudget += 50), this.scheduleWork()), this.checkAsyncSchedule(n);
  }
  scheduleWork() {
    if (this.working)
      return;
    let { state: e } = this.view, n = e.field(Hn.state);
    (n.tree != n.context.tree || !n.context.isDone(e.doc.length)) && (this.working = av(this.work));
  }
  work(e) {
    this.working = null;
    let n = Date.now();
    if (this.chunkEnd < n && (this.chunkEnd < 0 || this.view.hasFocus) && (this.chunkEnd = n + 3e4, this.chunkBudget = 3e3), this.chunkBudget <= 0)
      return;
    let { state: i, viewport: { to: s } } = this.view, o = i.field(Hn.state);
    if (o.tree == o.context.tree && o.context.isDone(
      s + 1e5
      /* Work.MaxParseAhead */
    ))
      return;
    let r = Date.now() + Math.min(this.chunkBudget, 100, e && !ka ? Math.max(25, e.timeRemaining() - 5) : 1e9), l = o.context.treeLen < s && i.doc.length > s + 1e3, a = o.context.work(() => ka && ka() || Date.now() > r, s + (l ? 0 : 1e5));
    this.chunkBudget -= Date.now() - n, (a || this.chunkBudget <= 0) && (o.context.takeTree(), this.view.dispatch({ effects: Hn.setState.of(new Fs(o.context)) })), this.chunkBudget > 0 && !(a && !l) && this.scheduleWork(), this.checkAsyncSchedule(o.context);
  }
  checkAsyncSchedule(e) {
    e.scheduleOn && (this.workScheduled++, e.scheduleOn.then(() => this.scheduleWork()).catch((n) => zn(this.view.state, n)).then(() => this.workScheduled--), e.scheduleOn = null);
  }
  destroy() {
    this.working && this.working();
  }
  isWorking() {
    return !!(this.working || this.workScheduled > 0);
  }
}, {
  eventHandlers: { focus() {
    this.scheduleWork();
  } }
}), Ns = /* @__PURE__ */ ue.define({
  combine(t) {
    return t.length ? t[0] : null;
  },
  enables: (t) => [
    Hn.state,
    M3,
    he.contentAttributes.compute([t], (e) => {
      let n = e.facet(t);
      return n && n.name ? { "data-language": n.name } : {};
    })
  ]
}), O3 = /* @__PURE__ */ ue.define(), Fu = /* @__PURE__ */ ue.define({
  combine: (t) => {
    if (!t.length)
      return "  ";
    let e = t[0];
    if (!e || /\S/.test(e) || Array.from(e).some((n) => n != e[0]))
      throw new Error("Invalid indent unit: " + JSON.stringify(t[0]));
    return e;
  }
});
function dl(t) {
  let e = t.facet(Fu);
  return e.charCodeAt(0) == 9 ? t.tabSize * e.length : e.length;
}
function hl(t, e) {
  let n = "", i = t.tabSize, s = t.facet(Fu)[0];
  if (s == "	") {
    for (; e >= i; )
      n += "	", e -= i;
    s = " ";
  }
  for (let o = 0; o < e; o++)
    n += s;
  return n;
}
function cv(t, e) {
  t instanceof Me && (t = new Nl(t));
  for (let i of t.state.facet(O3)) {
    let s = i(t, e);
    if (s !== void 0)
      return s;
  }
  let n = Xn(t.state);
  return n.length >= e ? P3(t, n, e) : null;
}
class Nl {
  /**
  Create an indent context.
  */
  constructor(e, n = {}) {
    this.state = e, this.options = n, this.unit = dl(e);
  }
  /**
  Get a description of the line at the given position, taking
  [simulated line
  breaks](https://codemirror.net/6/docs/ref/#language.IndentContext.constructor^options.simulateBreak)
  into account. If there is such a break at `pos`, the `bias`
  argument determines whether the part of the line line before or
  after the break is used.
  */
  lineAt(e, n = 1) {
    let i = this.state.doc.lineAt(e), { simulateBreak: s, simulateDoubleBreak: o } = this.options;
    return s != null && s >= i.from && s <= i.to ? o && s == e ? { text: "", from: e } : (n < 0 ? s < e : s <= e) ? { text: i.text.slice(s - i.from), from: s } : { text: i.text.slice(0, s - i.from), from: i.from } : i;
  }
  /**
  Get the text directly after `pos`, either the entire line
  or the next 100 characters, whichever is shorter.
  */
  textAfterPos(e, n = 1) {
    if (this.options.simulateDoubleBreak && e == this.options.simulateBreak)
      return "";
    let { text: i, from: s } = this.lineAt(e, n);
    return i.slice(e - s, Math.min(i.length, e + 100 - s));
  }
  /**
  Find the column for the given position.
  */
  column(e, n = 1) {
    let { text: i, from: s } = this.lineAt(e, n), o = this.countColumn(i, e - s), r = this.options.overrideIndentation ? this.options.overrideIndentation(s) : -1;
    return r > -1 && (o += r - this.countColumn(i, i.search(/\S|$/))), o;
  }
  /**
  Find the column position (taking tabs into account) of the given
  position in the given string.
  */
  countColumn(e, n = e.length) {
    return Ll(e, this.state.tabSize, n);
  }
  /**
  Find the indentation column of the line at the given point.
  */
  lineIndent(e, n = 1) {
    let { text: i, from: s } = this.lineAt(e, n), o = this.options.overrideIndentation;
    if (o) {
      let r = o(s);
      if (r > -1)
        return r;
    }
    return this.countColumn(i, i.search(/\S|$/));
  }
  /**
  Returns the [simulated line
  break](https://codemirror.net/6/docs/ref/#language.IndentContext.constructor^options.simulateBreak)
  for this context, if any.
  */
  get simulatedBreak() {
    return this.options.simulateBreak || null;
  }
}
const D3 = /* @__PURE__ */ new _e();
function P3(t, e, n) {
  let i = e.resolveStack(n), s = e.resolveInner(n, -1).resolve(n, 0).enterUnfinishedNodesBefore(n);
  if (s != i.node) {
    let o = [];
    for (let r = s; r && !(r.from == i.node.from && r.type == i.node.type); r = r.parent)
      o.push(r);
    for (let r = o.length - 1; r >= 0; r--)
      i = { node: o[r], next: i };
  }
  return uv(i, t, n);
}
function uv(t, e, n) {
  for (let i = t; i; i = i.next) {
    let s = R3(i.node);
    if (s)
      return s(Nu.create(e, n, i));
  }
  return 0;
}
function I3(t) {
  return t.pos == t.options.simulateBreak && t.options.simulateDoubleBreak;
}
function R3(t) {
  let e = t.type.prop(D3);
  if (e)
    return e;
  let n = t.firstChild, i;
  if (n && (i = n.type.prop(_e.closedBy))) {
    let s = t.lastChild, o = s && i.indexOf(s.name) > -1;
    return (r) => F3(r, !0, 1, void 0, o && !I3(r) ? s.from : void 0);
  }
  return t.parent == null ? L3 : null;
}
function L3() {
  return 0;
}
class Nu extends Nl {
  constructor(e, n, i) {
    super(e.state, e.options), this.base = e, this.pos = n, this.context = i;
  }
  /**
  The syntax tree node to which the indentation strategy
  applies.
  */
  get node() {
    return this.context.node;
  }
  /**
  @internal
  */
  static create(e, n, i) {
    return new Nu(e, n, i);
  }
  /**
  Get the text directly after `this.pos`, either the entire line
  or the next 100 characters, whichever is shorter.
  */
  get textAfter() {
    return this.textAfterPos(this.pos);
  }
  /**
  Get the indentation at the reference line for `this.node`, which
  is the line on which it starts, unless there is a node that is
  _not_ a parent of this node covering the start of that line. If
  so, the line at the start of that node is tried, again skipping
  on if it is covered by another such node.
  */
  get baseIndent() {
    return this.baseIndentFor(this.node);
  }
  /**
  Get the indentation for the reference line of the given node
  (see [`baseIndent`](https://codemirror.net/6/docs/ref/#language.TreeIndentContext.baseIndent)).
  */
  baseIndentFor(e) {
    let n = this.state.doc.lineAt(e.from);
    for (; ; ) {
      let i = e.resolve(n.from);
      for (; i.parent && i.parent.from == i.from; )
        i = i.parent;
      if (B3(i, e))
        break;
      n = this.state.doc.lineAt(i.from);
    }
    return this.lineIndent(n.from);
  }
  /**
  Continue looking for indentations in the node's parent nodes,
  and return the result of that.
  */
  continue() {
    return uv(this.context.next, this.base, this.pos);
  }
}
function B3(t, e) {
  for (let n = e; n; n = n.parent)
    if (t == n)
      return !0;
  return !1;
}
function $3(t) {
  let e = t.node, n = e.childAfter(e.from), i = e.lastChild;
  if (!n)
    return null;
  let s = t.options.simulateBreak, o = t.state.doc.lineAt(n.from), r = s == null || s <= o.from ? o.to : Math.min(o.to, s);
  for (let l = n.to; ; ) {
    let a = e.childAfter(l);
    if (!a || a == i)
      return null;
    if (!a.type.isSkipped) {
      if (a.from >= r)
        return null;
      let c = /^ */.exec(o.text.slice(n.to - o.from))[0].length;
      return { from: n.from, to: n.to + c };
    }
    l = a.to;
  }
}
function F3(t, e, n, i, s) {
  let o = t.textAfter, r = o.match(/^\s*/)[0].length, l = i && o.slice(r, r + i.length) == i || s == t.pos + r, a = $3(t);
  return a ? l ? t.column(a.from) : t.column(a.to) : t.baseIndent + (l ? 0 : t.unit * n);
}
class Vl {
  constructor(e, n) {
    this.specs = e;
    let i;
    function s(l) {
      let a = Bi.newName();
      return (i || (i = /* @__PURE__ */ Object.create(null)))["." + a] = l, a;
    }
    const o = typeof n.all == "string" ? n.all : n.all ? s(n.all) : void 0, r = n.scope;
    this.scope = r instanceof Hn ? (l) => l.prop(so) == r.data : r ? (l) => l == r : void 0, this.style = lv(e.map((l) => ({
      tag: l.tag,
      class: l.class || s(Object.assign({}, l, { tag: null }))
    })), {
      all: o
    }).style, this.module = i ? new Bi(i) : null, this.themeType = n.themeType;
  }
  /**
  Create a highlighter style that associates the given styles to
  the given tags. The specs must be objects that hold a style tag
  or array of tags in their `tag` property, and either a single
  `class` property providing a static CSS class (for highlighter
  that rely on external styling), or a
  [`style-mod`](https://github.com/marijnh/style-mod#documentation)-style
  set of CSS properties (which define the styling for those tags).
  
  The CSS rules created for a highlighter will be emitted in the
  order of the spec's properties. That means that for elements that
  have multiple tags associated with them, styles defined further
  down in the list will have a higher CSS precedence than styles
  defined earlier.
  */
  static define(e, n) {
    return new Vl(e, n || {});
  }
}
const xc = /* @__PURE__ */ ue.define(), N3 = /* @__PURE__ */ ue.define({
  combine(t) {
    return t.length ? [t[0]] : null;
  }
});
function _a(t) {
  let e = t.facet(xc);
  return e.length ? e : t.facet(N3);
}
function V3(t, e) {
  let n = [H3], i;
  return t instanceof Vl && (t.module && n.push(he.styleModule.of(t.module)), i = t.themeType), i ? n.push(xc.computeN([he.darkTheme], (s) => s.facet(he.darkTheme) == (i == "dark") ? [t] : [])) : n.push(xc.of(t)), n;
}
class z3 {
  constructor(e) {
    this.markCache = /* @__PURE__ */ Object.create(null), this.tree = Xn(e.state), this.decorations = this.buildDeco(e, _a(e.state)), this.decoratedTo = e.viewport.to;
  }
  update(e) {
    let n = Xn(e.state), i = _a(e.state), s = i != _a(e.startState), { viewport: o } = e.view, r = e.changes.mapPos(this.decoratedTo, 1);
    n.length < o.to && !s && n.type == this.tree.type && r >= o.to ? (this.decorations = this.decorations.map(e.changes), this.decoratedTo = r) : (n != this.tree || e.viewportChanged || s) && (this.tree = n, this.decorations = this.buildDeco(e.view, i), this.decoratedTo = o.to);
  }
  buildDeco(e, n) {
    if (!n || !this.tree.length)
      return kt.none;
    let i = new Oo();
    for (let { from: s, to: o } of e.visibleRanges)
      _3(this.tree, n, (r, l, a) => {
        i.add(r, l, this.markCache[a] || (this.markCache[a] = kt.mark({ class: a })));
      }, s, o);
    return i.finish();
  }
}
const H3 = /* @__PURE__ */ ku.high(/* @__PURE__ */ Ni.fromClass(z3, {
  decorations: (t) => t.decorations
})), W3 = 1e4, G3 = "()[]{}", j3 = /* @__PURE__ */ new _e();
function Ac(t, e, n) {
  let i = t.prop(e < 0 ? _e.openedBy : _e.closedBy);
  if (i)
    return i;
  if (t.name.length == 1) {
    let s = n.indexOf(t.name);
    if (s > -1 && s % 2 == (e < 0 ? 1 : 0))
      return [n[s + e]];
  }
  return null;
}
function Ec(t) {
  let e = t.type.prop(j3);
  return e ? e(t.node) : t;
}
function ws(t, e, n, i = {}) {
  let s = i.maxScanDistance || W3, o = i.brackets || G3, r = Xn(t), l = r.resolveInner(e, n);
  for (let a = l; a; a = a.parent) {
    let c = Ac(a.type, n, o);
    if (c && a.from < a.to) {
      let u = Ec(a);
      if (u && (n > 0 ? e >= u.from && e < u.to : e > u.from && e <= u.to))
        return K3(t, e, n, a, u, c, o);
    }
  }
  return U3(t, e, n, r, l.type, s, o);
}
function K3(t, e, n, i, s, o, r) {
  let l = i.parent, a = { from: s.from, to: s.to }, c = 0, u = l?.cursor();
  if (u && (n < 0 ? u.childBefore(i.from) : u.childAfter(i.to)))
    do
      if (n < 0 ? u.to <= i.from : u.from >= i.to) {
        if (c == 0 && o.indexOf(u.type.name) > -1 && u.from < u.to) {
          let f = Ec(u);
          return { start: a, end: f ? { from: f.from, to: f.to } : void 0, matched: !0 };
        } else if (Ac(u.type, n, r))
          c++;
        else if (Ac(u.type, -n, r)) {
          if (c == 0) {
            let f = Ec(u);
            return {
              start: a,
              end: f && f.from < f.to ? { from: f.from, to: f.to } : void 0,
              matched: !1
            };
          }
          c--;
        }
      }
    while (n < 0 ? u.prevSibling() : u.nextSibling());
  return { start: a, matched: !1 };
}
function U3(t, e, n, i, s, o, r) {
  let l = n < 0 ? t.sliceDoc(e - 1, e) : t.sliceDoc(e, e + 1), a = r.indexOf(l);
  if (a < 0 || a % 2 == 0 != n > 0)
    return null;
  let c = { from: n < 0 ? e - 1 : e, to: n > 0 ? e + 1 : e }, u = t.doc.iterRange(e, n > 0 ? t.doc.length : 0), f = 0;
  for (let d = 0; !u.next().done && d <= o; ) {
    let h = u.value;
    n < 0 && (d += h.length);
    let g = e + d * n;
    for (let m = n > 0 ? 0 : h.length - 1, y = n > 0 ? h.length : -1; m != y; m += n) {
      let v = r.indexOf(h[m]);
      if (!(v < 0 || i.resolveInner(g + m, 1).type != s))
        if (v % 2 == 0 == n > 0)
          f++;
        else {
          if (f == 1)
            return { start: c, end: { from: g + m, to: g + m + 1 }, matched: v >> 1 == a >> 1 };
          f--;
        }
    }
    n > 0 && (d += h.length);
  }
  return u.done ? { start: c, matched: !1 } : null;
}
const q3 = /* @__PURE__ */ Object.create(null), Ch = [yn.none], kh = [], _h = /* @__PURE__ */ Object.create(null), Y3 = /* @__PURE__ */ Object.create(null);
for (let [t, e] of [
  ["variable", "variableName"],
  ["variable-2", "variableName.special"],
  ["string-2", "string.special"],
  ["def", "variableName.definition"],
  ["tag", "tagName"],
  ["attribute", "attributeName"],
  ["type", "typeName"],
  ["builtin", "variableName.standard"],
  ["qualifier", "modifier"],
  ["error", "invalid"],
  ["header", "heading"],
  ["property", "propertyName"]
])
  Y3[t] = /* @__PURE__ */ J3(q3, e);
function xa(t, e) {
  kh.indexOf(t) > -1 || (kh.push(t), console.warn(e));
}
function J3(t, e) {
  let n = [];
  for (let l of e.split(" ")) {
    let a = [];
    for (let c of l.split(".")) {
      let u = t[c] || pe[c];
      u ? typeof u == "function" ? a.length ? a = a.map(u) : xa(c, `Modifier ${c} used at start of tag`) : a.length ? xa(c, `Tag ${c} used as modifier`) : a = Array.isArray(u) ? u : [u] : xa(c, `Unknown highlighting tag ${c}`);
    }
    for (let c of a)
      n.push(c);
  }
  if (!n.length)
    return 0;
  let i = e.replace(/ /g, "_"), s = i + " " + n.map((l) => l.id), o = _h[s];
  if (o)
    return o.id;
  let r = _h[s] = yn.define({
    id: Ch.length,
    name: i,
    props: [C3({ [i]: n })]
  });
  return Ch.push(r), r.id;
}
ht.RTL, ht.LTR;
const X3 = (t) => {
  let { state: e } = t, n = e.doc.lineAt(e.selection.main.from), i = zu(t.state, n.from);
  return i.line ? Z3(t) : i.block ? e8(t) : !1;
};
function Vu(t, e) {
  return ({ state: n, dispatch: i }) => {
    if (n.readOnly)
      return !1;
    let s = t(e, n);
    return s ? (i(n.update(s)), !0) : !1;
  };
}
const Z3 = /* @__PURE__ */ Vu(
  i8,
  0
  /* CommentOption.Toggle */
), Q3 = /* @__PURE__ */ Vu(
  fv,
  0
  /* CommentOption.Toggle */
), e8 = /* @__PURE__ */ Vu(
  (t, e) => fv(t, e, n8(e)),
  0
  /* CommentOption.Toggle */
);
function zu(t, e) {
  let n = t.languageDataAt("commentTokens", e);
  return n.length ? n[0] : {};
}
const Qs = 50;
function t8(t, { open: e, close: n }, i, s) {
  let o = t.sliceDoc(i - Qs, i), r = t.sliceDoc(s, s + Qs), l = /\s*$/.exec(o)[0].length, a = /^\s*/.exec(r)[0].length, c = o.length - l;
  if (o.slice(c - e.length, c) == e && r.slice(a, a + n.length) == n)
    return {
      open: { pos: i - l, margin: l && 1 },
      close: { pos: s + a, margin: a && 1 }
    };
  let u, f;
  s - i <= 2 * Qs ? u = f = t.sliceDoc(i, s) : (u = t.sliceDoc(i, i + Qs), f = t.sliceDoc(s - Qs, s));
  let d = /^\s*/.exec(u)[0].length, h = /\s*$/.exec(f)[0].length, g = f.length - h - n.length;
  return u.slice(d, d + e.length) == e && f.slice(g, g + n.length) == n ? {
    open: {
      pos: i + d + e.length,
      margin: /\s/.test(u.charAt(d + e.length)) ? 1 : 0
    },
    close: {
      pos: s - h - n.length,
      margin: /\s/.test(f.charAt(g - 1)) ? 1 : 0
    }
  } : null;
}
function n8(t) {
  let e = [];
  for (let n of t.selection.ranges) {
    let i = t.doc.lineAt(n.from), s = n.to <= i.to ? i : t.doc.lineAt(n.to);
    s.from > i.from && s.from == n.to && (s = n.to == i.to + 1 ? i : t.doc.lineAt(n.to - 1));
    let o = e.length - 1;
    o >= 0 && e[o].to > i.from ? e[o].to = s.to : e.push({ from: i.from + /^\s*/.exec(i.text)[0].length, to: s.to });
  }
  return e;
}
function fv(t, e, n = e.selection.ranges) {
  let i = n.map((o) => zu(e, o.from).block);
  if (!i.every((o) => o))
    return null;
  let s = n.map((o, r) => t8(e, i[r], o.from, o.to));
  if (t != 2 && !s.every((o) => o))
    return { changes: e.changes(n.map((o, r) => s[r] ? [] : [{ from: o.from, insert: i[r].open + " " }, { from: o.to, insert: " " + i[r].close }])) };
  if (t != 1 && s.some((o) => o)) {
    let o = [];
    for (let r = 0, l; r < s.length; r++)
      if (l = s[r]) {
        let a = i[r], { open: c, close: u } = l;
        o.push({ from: c.pos - a.open.length, to: c.pos + c.margin }, { from: u.pos - u.margin, to: u.pos + a.close.length });
      }
    return { changes: o };
  }
  return null;
}
function i8(t, e, n = e.selection.ranges) {
  let i = [], s = -1;
  for (let { from: o, to: r } of n) {
    let l = i.length, a = 1e9, c = zu(e, o).line;
    if (c) {
      for (let u = o; u <= r; ) {
        let f = e.doc.lineAt(u);
        if (f.from > s && (o == r || r > f.from)) {
          s = f.from;
          let d = /^\s*/.exec(f.text)[0].length, h = d == f.length, g = f.text.slice(d, d + c.length) == c ? d : -1;
          d < f.text.length && d < a && (a = d), i.push({ line: f, comment: g, token: c, indent: d, empty: h, single: !1 });
        }
        u = f.to + 1;
      }
      if (a < 1e9)
        for (let u = l; u < i.length; u++)
          i[u].indent < i[u].line.text.length && (i[u].indent = a);
      i.length == l + 1 && (i[l].single = !0);
    }
  }
  if (t != 2 && i.some((o) => o.comment < 0 && (!o.empty || o.single))) {
    let o = [];
    for (let { line: l, token: a, indent: c, empty: u, single: f } of i)
      (f || !u) && o.push({ from: l.from + c, insert: a + " " });
    let r = e.changes(o);
    return { changes: r, selection: e.selection.map(r, 1) };
  } else if (t != 1 && i.some((o) => o.comment >= 0)) {
    let o = [];
    for (let { line: r, comment: l, token: a } of i)
      if (l >= 0) {
        let c = r.from + l, u = c + a.length;
        r.text[u - r.from] == " " && u++, o.push({ from: c, to: u });
      }
    return { changes: o };
  }
  return null;
}
const Tc = /* @__PURE__ */ Wi.define(), s8 = /* @__PURE__ */ Wi.define(), o8 = /* @__PURE__ */ ue.define(), dv = /* @__PURE__ */ ue.define({
  combine(t) {
    return im(t, {
      minDepth: 100,
      newGroupDelay: 500,
      joinToEvent: (e, n) => n
    }, {
      minDepth: Math.max,
      newGroupDelay: Math.min,
      joinToEvent: (e, n) => (i, s) => e(i, s) || n(i, s)
    });
  }
}), hv = /* @__PURE__ */ Hi.define({
  create() {
    return Wn.empty;
  },
  update(t, e) {
    let n = e.state.facet(dv), i = e.annotation(Tc);
    if (i) {
      let a = Ht.fromTransaction(e, i.selection), c = i.side, u = c == 0 ? t.undone : t.done;
      return a ? u = pl(u, u.length, n.minDepth, a) : u = mv(u, e.startState.selection), new Wn(c == 0 ? i.rest : u, c == 0 ? u : i.rest);
    }
    let s = e.annotation(s8);
    if ((s == "full" || s == "before") && (t = t.isolate()), e.annotation(dt.addToHistory) === !1)
      return e.changes.empty ? t : t.addMapping(e.changes.desc);
    let o = Ht.fromTransaction(e), r = e.annotation(dt.time), l = e.annotation(dt.userEvent);
    return o ? t = t.addChanges(o, r, l, n, e) : e.selection && (t = t.addSelection(e.startState.selection, r, l, n.newGroupDelay)), (s == "full" || s == "after") && (t = t.isolate()), t;
  },
  toJSON(t) {
    return { done: t.done.map((e) => e.toJSON()), undone: t.undone.map((e) => e.toJSON()) };
  },
  fromJSON(t) {
    return new Wn(t.done.map(Ht.fromJSON), t.undone.map(Ht.fromJSON));
  }
});
function r8(t = {}) {
  return [
    hv,
    dv.of(t),
    he.domEventHandlers({
      beforeinput(e, n) {
        let i = e.inputType == "historyUndo" ? pv : e.inputType == "historyRedo" ? Mc : null;
        return i ? (e.preventDefault(), i(n)) : !1;
      }
    })
  ];
}
function zl(t, e) {
  return function({ state: n, dispatch: i }) {
    if (!e && n.readOnly)
      return !1;
    let s = n.field(hv, !1);
    if (!s)
      return !1;
    let o = s.pop(t, n, e);
    return o ? (i(o), !0) : !1;
  };
}
const pv = /* @__PURE__ */ zl(0, !1), Mc = /* @__PURE__ */ zl(1, !1), l8 = /* @__PURE__ */ zl(0, !0), a8 = /* @__PURE__ */ zl(1, !0);
class Ht {
  constructor(e, n, i, s, o) {
    this.changes = e, this.effects = n, this.mapped = i, this.startSelection = s, this.selectionsAfter = o;
  }
  setSelAfter(e) {
    return new Ht(this.changes, this.effects, this.mapped, this.startSelection, e);
  }
  toJSON() {
    var e, n, i;
    return {
      changes: (e = this.changes) === null || e === void 0 ? void 0 : e.toJSON(),
      mapped: (n = this.mapped) === null || n === void 0 ? void 0 : n.toJSON(),
      startSelection: (i = this.startSelection) === null || i === void 0 ? void 0 : i.toJSON(),
      selectionsAfter: this.selectionsAfter.map((s) => s.toJSON())
    };
  }
  static fromJSON(e) {
    return new Ht(e.changes && ut.fromJSON(e.changes), [], e.mapped && jn.fromJSON(e.mapped), e.startSelection && Y.fromJSON(e.startSelection), e.selectionsAfter.map(Y.fromJSON));
  }
  // This does not check `addToHistory` and such, it assumes the
  // transaction needs to be converted to an item. Returns null when
  // there are no changes or effects in the transaction.
  static fromTransaction(e, n) {
    let i = ln;
    for (let s of e.startState.facet(o8)) {
      let o = s(e);
      o.length && (i = i.concat(o));
    }
    return !i.length && e.changes.empty ? null : new Ht(e.changes.invert(e.startState.doc), i, void 0, n || e.startState.selection, ln);
  }
  static selection(e) {
    return new Ht(void 0, ln, void 0, void 0, e);
  }
}
function pl(t, e, n, i) {
  let s = e + 1 > n + 20 ? e - n - 1 : 0, o = t.slice(s, e);
  return o.push(i), o;
}
function c8(t, e) {
  let n = [], i = !1;
  return t.iterChangedRanges((s, o) => n.push(s, o)), e.iterChangedRanges((s, o, r, l) => {
    for (let a = 0; a < n.length; ) {
      let c = n[a++], u = n[a++];
      l >= c && r <= u && (i = !0);
    }
  }), i;
}
function u8(t, e) {
  return t.ranges.length == e.ranges.length && t.ranges.filter((n, i) => n.empty != e.ranges[i].empty).length === 0;
}
function gv(t, e) {
  return t.length ? e.length ? t.concat(e) : t : e;
}
const ln = [], f8 = 200;
function mv(t, e) {
  if (t.length) {
    let n = t[t.length - 1], i = n.selectionsAfter.slice(Math.max(0, n.selectionsAfter.length - f8));
    return i.length && i[i.length - 1].eq(e) ? t : (i.push(e), pl(t, t.length - 1, 1e9, n.setSelAfter(i)));
  } else
    return [Ht.selection([e])];
}
function d8(t) {
  let e = t[t.length - 1], n = t.slice();
  return n[t.length - 1] = e.setSelAfter(e.selectionsAfter.slice(0, e.selectionsAfter.length - 1)), n;
}
function Aa(t, e) {
  if (!t.length)
    return t;
  let n = t.length, i = ln;
  for (; n; ) {
    let s = h8(t[n - 1], e, i);
    if (s.changes && !s.changes.empty || s.effects.length) {
      let o = t.slice(0, n);
      return o[n - 1] = s, o;
    } else
      e = s.mapped, n--, i = s.selectionsAfter;
  }
  return i.length ? [Ht.selection(i)] : ln;
}
function h8(t, e, n) {
  let i = gv(t.selectionsAfter.length ? t.selectionsAfter.map((l) => l.map(e)) : ln, n);
  if (!t.changes)
    return Ht.selection(i);
  let s = t.changes.map(e), o = e.mapDesc(t.changes, !0), r = t.mapped ? t.mapped.composeDesc(o) : o;
  return new Ht(s, nt.mapEffects(t.effects, e), r, t.startSelection.map(o), i);
}
const p8 = /^(input\.type|delete)($|\.)/;
class Wn {
  constructor(e, n, i = 0, s = void 0) {
    this.done = e, this.undone = n, this.prevTime = i, this.prevUserEvent = s;
  }
  isolate() {
    return this.prevTime ? new Wn(this.done, this.undone) : this;
  }
  addChanges(e, n, i, s, o) {
    let r = this.done, l = r[r.length - 1];
    return l && l.changes && !l.changes.empty && e.changes && (!i || p8.test(i)) && (!l.selectionsAfter.length && n - this.prevTime < s.newGroupDelay && s.joinToEvent(o, c8(l.changes, e.changes)) || // For compose (but not compose.start) events, always join with previous event
    i == "input.type.compose") ? r = pl(r, r.length - 1, s.minDepth, new Ht(e.changes.compose(l.changes), gv(nt.mapEffects(e.effects, l.changes), l.effects), l.mapped, l.startSelection, ln)) : r = pl(r, r.length, s.minDepth, e), new Wn(r, ln, n, i);
  }
  addSelection(e, n, i, s) {
    let o = this.done.length ? this.done[this.done.length - 1].selectionsAfter : ln;
    return o.length > 0 && n - this.prevTime < s && i == this.prevUserEvent && i && /^select($|\.)/.test(i) && u8(o[o.length - 1], e) ? this : new Wn(mv(this.done, e), this.undone, n, i);
  }
  addMapping(e) {
    return new Wn(Aa(this.done, e), Aa(this.undone, e), this.prevTime, this.prevUserEvent);
  }
  pop(e, n, i) {
    let s = e == 0 ? this.done : this.undone;
    if (s.length == 0)
      return null;
    let o = s[s.length - 1], r = o.selectionsAfter[0] || n.selection;
    if (i && o.selectionsAfter.length)
      return n.update({
        selection: o.selectionsAfter[o.selectionsAfter.length - 1],
        annotations: Tc.of({ side: e, rest: d8(s), selection: r }),
        userEvent: e == 0 ? "select.undo" : "select.redo",
        scrollIntoView: !0
      });
    if (o.changes) {
      let l = s.length == 1 ? ln : s.slice(0, s.length - 1);
      return o.mapped && (l = Aa(l, o.mapped)), n.update({
        changes: o.changes,
        selection: o.startSelection,
        effects: o.effects,
        annotations: Tc.of({ side: e, rest: l, selection: r }),
        filter: !1,
        userEvent: e == 0 ? "undo" : "redo",
        scrollIntoView: !0
      });
    } else
      return null;
  }
}
Wn.empty = /* @__PURE__ */ new Wn(ln, ln);
const g8 = [
  { key: "Mod-z", run: pv, preventDefault: !0 },
  { key: "Mod-y", mac: "Mod-Shift-z", run: Mc, preventDefault: !0 },
  { linux: "Ctrl-Shift-z", run: Mc, preventDefault: !0 },
  { key: "Mod-u", run: l8, preventDefault: !0 },
  { key: "Alt-u", mac: "Mod-Shift-u", run: a8, preventDefault: !0 }
];
function Gs(t, e) {
  return Y.create(t.ranges.map(e), t.mainIndex);
}
function Qn(t, e) {
  return t.update({ selection: e, scrollIntoView: !0, userEvent: "select" });
}
function On({ state: t, dispatch: e }, n) {
  let i = Gs(t.selection, n);
  return i.eq(t.selection, !0) ? !1 : (e(Qn(t, i)), !0);
}
function Hl(t, e) {
  return Y.cursor(e ? t.to : t.from);
}
function vv(t, e) {
  return On(t, (n) => n.empty ? t.moveByChar(n, e) : Hl(n, e));
}
function Dt(t) {
  return t.textDirectionAt(t.state.selection.main.head) == ht.LTR;
}
const yv = (t) => vv(t, !Dt(t)), bv = (t) => vv(t, Dt(t));
function wv(t, e) {
  return On(t, (n) => n.empty ? t.moveByGroup(n, e) : Hl(n, e));
}
const m8 = (t) => wv(t, !Dt(t)), v8 = (t) => wv(t, Dt(t));
function y8(t, e, n) {
  if (e.type.prop(n))
    return !0;
  let i = e.to - e.from;
  return i && (i > 2 || /[^\s,.;:]/.test(t.sliceDoc(e.from, e.to))) || e.firstChild;
}
function Wl(t, e, n) {
  let i = Xn(t).resolveInner(e.head), s = n ? _e.closedBy : _e.openedBy;
  for (let a = e.head; ; ) {
    let c = n ? i.childAfter(a) : i.childBefore(a);
    if (!c)
      break;
    y8(t, c, s) ? i = c : a = n ? c.to : c.from;
  }
  let o = i.type.prop(s), r, l;
  return o && (r = n ? ws(t, i.from, 1) : ws(t, i.to, -1)) && r.matched ? l = n ? r.end.to : r.end.from : l = n ? i.to : i.from, Y.cursor(l, n ? -1 : 1);
}
const b8 = (t) => On(t, (e) => Wl(t.state, e, !Dt(t))), w8 = (t) => On(t, (e) => Wl(t.state, e, Dt(t)));
function Sv(t, e) {
  return On(t, (n) => {
    if (!n.empty)
      return Hl(n, e);
    let i = t.moveVertically(n, e);
    return i.head != n.head ? i : t.moveToLineBoundary(n, e);
  });
}
const Cv = (t) => Sv(t, !1), kv = (t) => Sv(t, !0);
function _v(t) {
  let e = t.scrollDOM.clientHeight < t.scrollDOM.scrollHeight - 2, n = 0, i = 0, s;
  if (e) {
    for (let o of t.state.facet(he.scrollMargins)) {
      let r = o(t);
      r?.top && (n = Math.max(r?.top, n)), r?.bottom && (i = Math.max(r?.bottom, i));
    }
    s = t.scrollDOM.clientHeight - n - i;
  } else
    s = (t.dom.ownerDocument.defaultView || window).innerHeight;
  return {
    marginTop: n,
    marginBottom: i,
    selfScroll: e,
    height: Math.max(t.defaultLineHeight, s - 5)
  };
}
function xv(t, e) {
  let n = _v(t), { state: i } = t, s = Gs(i.selection, (r) => r.empty ? t.moveVertically(r, e, n.height) : Hl(r, e));
  if (s.eq(i.selection))
    return !1;
  let o;
  if (n.selfScroll) {
    let r = t.coordsAtPos(i.selection.main.head), l = t.scrollDOM.getBoundingClientRect(), a = l.top + n.marginTop, c = l.bottom - n.marginBottom;
    r && r.top > a && r.bottom < c && (o = he.scrollIntoView(s.main.head, { y: "start", yMargin: r.top - a }));
  }
  return t.dispatch(Qn(i, s), { effects: o }), !0;
}
const xh = (t) => xv(t, !1), Oc = (t) => xv(t, !0);
function Gi(t, e, n) {
  let i = t.lineBlockAt(e.head), s = t.moveToLineBoundary(e, n);
  if (s.head == e.head && s.head != (n ? i.to : i.from) && (s = t.moveToLineBoundary(e, n, !1)), !n && s.head == i.from && i.length) {
    let o = /^\s*/.exec(t.state.sliceDoc(i.from, Math.min(i.from + 100, i.to)))[0].length;
    o && e.head != i.from + o && (s = Y.cursor(i.from + o));
  }
  return s;
}
const S8 = (t) => On(t, (e) => Gi(t, e, !0)), C8 = (t) => On(t, (e) => Gi(t, e, !1)), k8 = (t) => On(t, (e) => Gi(t, e, !Dt(t))), _8 = (t) => On(t, (e) => Gi(t, e, Dt(t))), x8 = (t) => On(t, (e) => Y.cursor(t.lineBlockAt(e.head).from, 1)), A8 = (t) => On(t, (e) => Y.cursor(t.lineBlockAt(e.head).to, -1));
function E8(t, e, n) {
  let i = !1, s = Gs(t.selection, (o) => {
    let r = ws(t, o.head, -1) || ws(t, o.head, 1) || o.head > 0 && ws(t, o.head - 1, 1) || o.head < t.doc.length && ws(t, o.head + 1, -1);
    if (!r || !r.end)
      return o;
    i = !0;
    let l = r.start.from == o.head ? r.end.to : r.end.from;
    return Y.cursor(l);
  });
  return i ? (e(Qn(t, s)), !0) : !1;
}
const T8 = ({ state: t, dispatch: e }) => E8(t, e);
function bn(t, e) {
  let n = Gs(t.state.selection, (i) => {
    let s = e(i);
    return Y.range(i.anchor, s.head, s.goalColumn, s.bidiLevel || void 0);
  });
  return n.eq(t.state.selection) ? !1 : (t.dispatch(Qn(t.state, n)), !0);
}
function Av(t, e) {
  return bn(t, (n) => t.moveByChar(n, e));
}
const Ev = (t) => Av(t, !Dt(t)), Tv = (t) => Av(t, Dt(t));
function Mv(t, e) {
  return bn(t, (n) => t.moveByGroup(n, e));
}
const M8 = (t) => Mv(t, !Dt(t)), O8 = (t) => Mv(t, Dt(t)), D8 = (t) => bn(t, (e) => Wl(t.state, e, !Dt(t))), P8 = (t) => bn(t, (e) => Wl(t.state, e, Dt(t)));
function Ov(t, e) {
  return bn(t, (n) => t.moveVertically(n, e));
}
const Dv = (t) => Ov(t, !1), Pv = (t) => Ov(t, !0);
function Iv(t, e) {
  return bn(t, (n) => t.moveVertically(n, e, _v(t).height));
}
const Ah = (t) => Iv(t, !1), Eh = (t) => Iv(t, !0), I8 = (t) => bn(t, (e) => Gi(t, e, !0)), R8 = (t) => bn(t, (e) => Gi(t, e, !1)), L8 = (t) => bn(t, (e) => Gi(t, e, !Dt(t))), B8 = (t) => bn(t, (e) => Gi(t, e, Dt(t))), $8 = (t) => bn(t, (e) => Y.cursor(t.lineBlockAt(e.head).from)), F8 = (t) => bn(t, (e) => Y.cursor(t.lineBlockAt(e.head).to)), Th = ({ state: t, dispatch: e }) => (e(Qn(t, { anchor: 0 })), !0), Mh = ({ state: t, dispatch: e }) => (e(Qn(t, { anchor: t.doc.length })), !0), Oh = ({ state: t, dispatch: e }) => (e(Qn(t, { anchor: t.selection.main.anchor, head: 0 })), !0), Dh = ({ state: t, dispatch: e }) => (e(Qn(t, { anchor: t.selection.main.anchor, head: t.doc.length })), !0), N8 = ({ state: t, dispatch: e }) => (e(t.update({ selection: { anchor: 0, head: t.doc.length }, userEvent: "select" })), !0), V8 = ({ state: t, dispatch: e }) => {
  let n = Gl(t).map(({ from: i, to: s }) => Y.range(i, Math.min(s + 1, t.doc.length)));
  return e(t.update({ selection: Y.create(n), userEvent: "select" })), !0;
}, z8 = ({ state: t, dispatch: e }) => {
  let n = Gs(t.selection, (i) => {
    let s = Xn(t), o = s.resolveStack(i.from, 1);
    if (i.empty) {
      let r = s.resolveStack(i.from, -1);
      r.node.from >= o.node.from && r.node.to <= o.node.to && (o = r);
    }
    for (let r = o; r; r = r.next) {
      let { node: l } = r;
      if ((l.from < i.from && l.to >= i.to || l.to > i.to && l.from <= i.from) && r.next)
        return Y.range(l.to, l.from);
    }
    return i;
  });
  return n.eq(t.selection) ? !1 : (e(Qn(t, n)), !0);
}, H8 = ({ state: t, dispatch: e }) => {
  let n = t.selection, i = null;
  return n.ranges.length > 1 ? i = Y.create([n.main]) : n.main.empty || (i = Y.create([Y.cursor(n.main.head)])), i ? (e(Qn(t, i)), !0) : !1;
};
function Ko(t, e) {
  if (t.state.readOnly)
    return !1;
  let n = "delete.selection", { state: i } = t, s = i.changeByRange((o) => {
    let { from: r, to: l } = o;
    if (r == l) {
      let a = e(o);
      a < r ? (n = "delete.backward", a = xr(t, a, !1)) : a > r && (n = "delete.forward", a = xr(t, a, !0)), r = Math.min(r, a), l = Math.max(l, a);
    } else
      r = xr(t, r, !1), l = xr(t, l, !0);
    return r == l ? { range: o } : { changes: { from: r, to: l }, range: Y.cursor(r, r < o.head ? -1 : 1) };
  });
  return s.changes.empty ? !1 : (t.dispatch(i.update(s, {
    scrollIntoView: !0,
    userEvent: n,
    effects: n == "delete.selection" ? he.announce.of(i.phrase("Selection deleted")) : void 0
  })), !0);
}
function xr(t, e, n) {
  if (t instanceof he)
    for (let i of t.state.facet(he.atomicRanges).map((s) => s(t)))
      i.between(e, e, (s, o) => {
        s < e && o > e && (e = n ? o : s);
      });
  return e;
}
const Rv = (t, e, n) => Ko(t, (i) => {
  let s = i.from, { state: o } = t, r = o.doc.lineAt(s), l, a;
  if (n && !e && s > r.from && s < r.from + 200 && !/[^ \t]/.test(l = r.text.slice(0, s - r.from))) {
    if (l[l.length - 1] == "	")
      return s - 1;
    let c = Ll(l, o.tabSize), u = c % dl(o) || dl(o);
    for (let f = 0; f < u && l[l.length - 1 - f] == " "; f++)
      s--;
    a = s;
  } else
    a = Lt(r.text, s - r.from, e, e) + r.from, a == s && r.number != (e ? o.doc.lines : 1) ? a += e ? 1 : -1 : !e && /[\ufe00-\ufe0f]/.test(r.text.slice(a - r.from, s - r.from)) && (a = Lt(r.text, a - r.from, !1, !1) + r.from);
  return a;
}), Dc = (t) => Rv(t, !1, !0), Lv = (t) => Rv(t, !0, !1), Bv = (t, e) => Ko(t, (n) => {
  let i = n.head, { state: s } = t, o = s.doc.lineAt(i), r = s.charCategorizer(i);
  for (let l = null; ; ) {
    if (i == (e ? o.to : o.from)) {
      i == n.head && o.number != (e ? s.doc.lines : 1) && (i += e ? 1 : -1);
      break;
    }
    let a = Lt(o.text, i - o.from, e) + o.from, c = o.text.slice(Math.min(i, a) - o.from, Math.max(i, a) - o.from), u = r(c);
    if (l != null && u != l)
      break;
    (c != " " || i != n.head) && (l = u), i = a;
  }
  return i;
}), $v = (t) => Bv(t, !1), W8 = (t) => Bv(t, !0), G8 = (t) => Ko(t, (e) => {
  let n = t.lineBlockAt(e.head).to;
  return e.head < n ? n : Math.min(t.state.doc.length, e.head + 1);
}), j8 = (t) => Ko(t, (e) => {
  let n = t.moveToLineBoundary(e, !1).head;
  return e.head > n ? n : Math.max(0, e.head - 1);
}), K8 = (t) => Ko(t, (e) => {
  let n = t.moveToLineBoundary(e, !0).head;
  return e.head < n ? n : Math.min(t.state.doc.length, e.head + 1);
}), U8 = ({ state: t, dispatch: e }) => {
  if (t.readOnly)
    return !1;
  let n = t.changeByRange((i) => ({
    changes: { from: i.from, to: i.to, insert: Ae.of(["", ""]) },
    range: Y.cursor(i.from)
  }));
  return e(t.update(n, { scrollIntoView: !0, userEvent: "input" })), !0;
}, q8 = ({ state: t, dispatch: e }) => {
  if (t.readOnly)
    return !1;
  let n = t.changeByRange((i) => {
    if (!i.empty || i.from == 0 || i.from == t.doc.length)
      return { range: i };
    let s = i.from, o = t.doc.lineAt(s), r = s == o.from ? s - 1 : Lt(o.text, s - o.from, !1) + o.from, l = s == o.to ? s + 1 : Lt(o.text, s - o.from, !0) + o.from;
    return {
      changes: { from: r, to: l, insert: t.doc.slice(s, l).append(t.doc.slice(r, s)) },
      range: Y.cursor(l)
    };
  });
  return n.changes.empty ? !1 : (e(t.update(n, { scrollIntoView: !0, userEvent: "move.character" })), !0);
};
function Gl(t) {
  let e = [], n = -1;
  for (let i of t.selection.ranges) {
    let s = t.doc.lineAt(i.from), o = t.doc.lineAt(i.to);
    if (!i.empty && i.to == o.from && (o = t.doc.lineAt(i.to - 1)), n >= s.number) {
      let r = e[e.length - 1];
      r.to = o.to, r.ranges.push(i);
    } else
      e.push({ from: s.from, to: o.to, ranges: [i] });
    n = o.number + 1;
  }
  return e;
}
function Fv(t, e, n) {
  if (t.readOnly)
    return !1;
  let i = [], s = [];
  for (let o of Gl(t)) {
    if (n ? o.to == t.doc.length : o.from == 0)
      continue;
    let r = t.doc.lineAt(n ? o.to + 1 : o.from - 1), l = r.length + 1;
    if (n) {
      i.push({ from: o.to, to: r.to }, { from: o.from, insert: r.text + t.lineBreak });
      for (let a of o.ranges)
        s.push(Y.range(Math.min(t.doc.length, a.anchor + l), Math.min(t.doc.length, a.head + l)));
    } else {
      i.push({ from: r.from, to: o.from }, { from: o.to, insert: t.lineBreak + r.text });
      for (let a of o.ranges)
        s.push(Y.range(a.anchor - l, a.head - l));
    }
  }
  return i.length ? (e(t.update({
    changes: i,
    scrollIntoView: !0,
    selection: Y.create(s, t.selection.mainIndex),
    userEvent: "move.line"
  })), !0) : !1;
}
const Y8 = ({ state: t, dispatch: e }) => Fv(t, e, !1), J8 = ({ state: t, dispatch: e }) => Fv(t, e, !0);
function Nv(t, e, n) {
  if (t.readOnly)
    return !1;
  let i = [];
  for (let s of Gl(t))
    n ? i.push({ from: s.from, insert: t.doc.slice(s.from, s.to) + t.lineBreak }) : i.push({ from: s.to, insert: t.lineBreak + t.doc.slice(s.from, s.to) });
  return e(t.update({ changes: i, scrollIntoView: !0, userEvent: "input.copyline" })), !0;
}
const X8 = ({ state: t, dispatch: e }) => Nv(t, e, !1), Z8 = ({ state: t, dispatch: e }) => Nv(t, e, !0), Q8 = (t) => {
  if (t.state.readOnly)
    return !1;
  let { state: e } = t, n = e.changes(Gl(e).map(({ from: s, to: o }) => (s > 0 ? s-- : o < e.doc.length && o++, { from: s, to: o }))), i = Gs(e.selection, (s) => {
    let o;
    if (t.lineWrapping) {
      let r = t.lineBlockAt(s.head), l = t.coordsAtPos(s.head, s.assoc || 1);
      l && (o = r.bottom + t.documentTop - l.bottom + t.defaultLineHeight / 2);
    }
    return t.moveVertically(s, !0, o);
  }).map(n);
  return t.dispatch({ changes: n, selection: i, scrollIntoView: !0, userEvent: "delete.line" }), !0;
};
function eD(t, e) {
  if (/\(\)|\[\]|\{\}/.test(t.sliceDoc(e - 1, e + 1)))
    return { from: e, to: e };
  let n = Xn(t).resolveInner(e), i = n.childBefore(e), s = n.childAfter(e), o;
  return i && s && i.to <= e && s.from >= e && (o = i.type.prop(_e.closedBy)) && o.indexOf(s.name) > -1 && t.doc.lineAt(i.to).from == t.doc.lineAt(s.from).from && !/\S/.test(t.sliceDoc(i.to, s.from)) ? { from: i.to, to: s.from } : null;
}
const Ph = /* @__PURE__ */ Vv(!1), tD = /* @__PURE__ */ Vv(!0);
function Vv(t) {
  return ({ state: e, dispatch: n }) => {
    if (e.readOnly)
      return !1;
    let i = e.changeByRange((s) => {
      let { from: o, to: r } = s, l = e.doc.lineAt(o), a = !t && o == r && eD(e, o);
      t && (o = r = (r <= l.to ? l : e.doc.lineAt(r)).to);
      let c = new Nl(e, { simulateBreak: o, simulateDoubleBreak: !!a }), u = cv(c, o);
      for (u == null && (u = Ll(/^\s*/.exec(e.doc.lineAt(o).text)[0], e.tabSize)); r < l.to && /\s/.test(l.text[r - l.from]); )
        r++;
      a ? { from: o, to: r } = a : o > l.from && o < l.from + 100 && !/\S/.test(l.text.slice(0, o)) && (o = l.from);
      let f = ["", hl(e, u)];
      return a && f.push(hl(e, c.lineIndent(l.from, -1))), {
        changes: { from: o, to: r, insert: Ae.of(f) },
        range: Y.cursor(o + 1 + f[1].length)
      };
    });
    return n(e.update(i, { scrollIntoView: !0, userEvent: "input" })), !0;
  };
}
function Hu(t, e) {
  let n = -1;
  return t.changeByRange((i) => {
    let s = [];
    for (let r = i.from; r <= i.to; ) {
      let l = t.doc.lineAt(r);
      l.number > n && (i.empty || i.to > l.from) && (e(l, s, i), n = l.number), r = l.to + 1;
    }
    let o = t.changes(s);
    return {
      changes: s,
      range: Y.range(o.mapPos(i.anchor, 1), o.mapPos(i.head, 1))
    };
  });
}
const nD = ({ state: t, dispatch: e }) => {
  if (t.readOnly)
    return !1;
  let n = /* @__PURE__ */ Object.create(null), i = new Nl(t, { overrideIndentation: (o) => {
    let r = n[o];
    return r ?? -1;
  } }), s = Hu(t, (o, r, l) => {
    let a = cv(i, o.from);
    if (a == null)
      return;
    /\S/.test(o.text) || (a = 0);
    let c = /^\s*/.exec(o.text)[0], u = hl(t, a);
    (c != u || l.from < o.from + c.length) && (n[o.from] = a, r.push({ from: o.from, to: o.from + c.length, insert: u }));
  });
  return s.changes.empty || e(t.update(s, { userEvent: "indent" })), !0;
}, zv = ({ state: t, dispatch: e }) => t.readOnly ? !1 : (e(t.update(Hu(t, (n, i) => {
  i.push({ from: n.from, insert: t.facet(Fu) });
}), { userEvent: "input.indent" })), !0), Hv = ({ state: t, dispatch: e }) => t.readOnly ? !1 : (e(t.update(Hu(t, (n, i) => {
  let s = /^\s*/.exec(n.text)[0];
  if (!s)
    return;
  let o = Ll(s, t.tabSize), r = 0, l = hl(t, Math.max(0, o - dl(t)));
  for (; r < s.length && r < l.length && s.charCodeAt(r) == l.charCodeAt(r); )
    r++;
  i.push({ from: n.from + r, to: n.from + s.length, insert: l.slice(r) });
}), { userEvent: "delete.dedent" })), !0), iD = (t) => (t.setTabFocusMode(), !0), sD = [
  { key: "Ctrl-b", run: yv, shift: Ev, preventDefault: !0 },
  { key: "Ctrl-f", run: bv, shift: Tv },
  { key: "Ctrl-p", run: Cv, shift: Dv },
  { key: "Ctrl-n", run: kv, shift: Pv },
  { key: "Ctrl-a", run: x8, shift: $8 },
  { key: "Ctrl-e", run: A8, shift: F8 },
  { key: "Ctrl-d", run: Lv },
  { key: "Ctrl-h", run: Dc },
  { key: "Ctrl-k", run: G8 },
  { key: "Ctrl-Alt-h", run: $v },
  { key: "Ctrl-o", run: U8 },
  { key: "Ctrl-t", run: q8 },
  { key: "Ctrl-v", run: Oc }
], oD = /* @__PURE__ */ [
  { key: "ArrowLeft", run: yv, shift: Ev, preventDefault: !0 },
  { key: "Mod-ArrowLeft", mac: "Alt-ArrowLeft", run: m8, shift: M8, preventDefault: !0 },
  { mac: "Cmd-ArrowLeft", run: k8, shift: L8, preventDefault: !0 },
  { key: "ArrowRight", run: bv, shift: Tv, preventDefault: !0 },
  { key: "Mod-ArrowRight", mac: "Alt-ArrowRight", run: v8, shift: O8, preventDefault: !0 },
  { mac: "Cmd-ArrowRight", run: _8, shift: B8, preventDefault: !0 },
  { key: "ArrowUp", run: Cv, shift: Dv, preventDefault: !0 },
  { mac: "Cmd-ArrowUp", run: Th, shift: Oh },
  { mac: "Ctrl-ArrowUp", run: xh, shift: Ah },
  { key: "ArrowDown", run: kv, shift: Pv, preventDefault: !0 },
  { mac: "Cmd-ArrowDown", run: Mh, shift: Dh },
  { mac: "Ctrl-ArrowDown", run: Oc, shift: Eh },
  { key: "PageUp", run: xh, shift: Ah },
  { key: "PageDown", run: Oc, shift: Eh },
  { key: "Home", run: C8, shift: R8, preventDefault: !0 },
  { key: "Mod-Home", run: Th, shift: Oh },
  { key: "End", run: S8, shift: I8, preventDefault: !0 },
  { key: "Mod-End", run: Mh, shift: Dh },
  { key: "Enter", run: Ph, shift: Ph },
  { key: "Mod-a", run: N8 },
  { key: "Backspace", run: Dc, shift: Dc },
  { key: "Delete", run: Lv },
  { key: "Mod-Backspace", mac: "Alt-Backspace", run: $v },
  { key: "Mod-Delete", mac: "Alt-Delete", run: W8 },
  { mac: "Mod-Backspace", run: j8 },
  { mac: "Mod-Delete", run: K8 }
].concat(/* @__PURE__ */ sD.map((t) => ({ mac: t.key, run: t.run, shift: t.shift }))), rD = /* @__PURE__ */ [
  { key: "Alt-ArrowLeft", mac: "Ctrl-ArrowLeft", run: b8, shift: D8 },
  { key: "Alt-ArrowRight", mac: "Ctrl-ArrowRight", run: w8, shift: P8 },
  { key: "Alt-ArrowUp", run: Y8 },
  { key: "Shift-Alt-ArrowUp", run: X8 },
  { key: "Alt-ArrowDown", run: J8 },
  { key: "Shift-Alt-ArrowDown", run: Z8 },
  { key: "Escape", run: H8 },
  { key: "Mod-Enter", run: tD },
  { key: "Alt-l", mac: "Ctrl-l", run: V8 },
  { key: "Mod-i", run: z8, preventDefault: !0 },
  { key: "Mod-[", run: Hv },
  { key: "Mod-]", run: zv },
  { key: "Mod-Alt-\\", run: nD },
  { key: "Shift-Mod-k", run: Q8 },
  { key: "Shift-Mod-\\", run: T8 },
  { key: "Mod-/", run: X3 },
  { key: "Alt-A", run: Q3 },
  { key: "Ctrl-m", mac: "Shift-Alt-m", run: iD }
].concat(oD), lD = { key: "Tab", run: zv, shift: Hv };
var aD = (t) => {
  var {
    theme: e,
    settings: n = {},
    styles: i = []
  } = t, s = {
    ".cm-gutters": {}
  }, o = {};
  n.background && (o.backgroundColor = n.background), n.backgroundImage && (o.backgroundImage = n.backgroundImage), n.foreground && (o.color = n.foreground), n.fontSize && (o.fontSize = n.fontSize), (n.background || n.foreground) && (s["&"] = o), n.fontFamily && (s["&.cm-editor .cm-scroller"] = {
    fontFamily: n.fontFamily
  }), n.gutterBackground && (s[".cm-gutters"].backgroundColor = n.gutterBackground), n.gutterForeground && (s[".cm-gutters"].color = n.gutterForeground), n.gutterBorder && (s[".cm-gutters"].borderRightColor = n.gutterBorder), n.caret && (s[".cm-content"] = {
    caretColor: n.caret
  }, s[".cm-cursor, .cm-dropCursor"] = {
    borderLeftColor: n.caret
  });
  var r = {};
  n.gutterActiveForeground && (r.color = n.gutterActiveForeground), n.lineHighlight && (s[".cm-activeLine"] = {
    backgroundColor: n.lineHighlight
  }, r.backgroundColor = n.lineHighlight), s[".cm-activeLineGutter"] = r, n.selection && (s["&.cm-focused .cm-selectionBackground, & .cm-line::selection, & .cm-selectionLayer .cm-selectionBackground, .cm-content ::selection"] = {
    background: n.selection + " !important"
  }), n.selectionMatch && (s["& .cm-selectionMatch"] = {
    backgroundColor: n.selectionMatch
  });
  var l = he.theme(s, {
    dark: e === "dark"
  }), a = Vl.define(i), c = [l, V3(a)];
  return c;
};
const cD = { class: "merge-dialog" }, uD = { class: "merge-titlebar" }, fD = { class: "titlebar-left" }, dD = { class: "titlebar-text" }, hD = { class: "titlebar-center" }, pD = { class: "file-tabs" }, gD = ["onClick", "title"], mD = { class: "tab-name" }, vD = { class: "file-breadcrumb" }, yD = { class: "breadcrumb-label" }, bD = { class: "breadcrumb-path" }, wD = { class: "breadcrumb-counter" }, SD = { class: "diff-body" }, CD = { class: "pane-toolbar" }, kD = { class: "toolbar-label" }, _D = { class: "label-badge" }, xD = { class: "toolbar-actions" }, AD = ["title"], ED = { class: "sync-icon" }, TD = {
  key: 0,
  class: "diff-markers"
}, MD = ["title"], OD = { class: "pane-toolbar" }, DD = { class: "toolbar-label" }, PD = { class: "label-badge" }, ID = {
  key: 0,
  class: "edited-indicator"
}, RD = {
  key: 0,
  class: "diff-markers"
}, LD = ["title"], BD = { class: "merge-statusbar" }, $D = { class: "statusbar-left" }, FD = ["title"], ND = { class: "nav-group" }, VD = ["disabled"], zD = ["disabled"], HD = { class: "resolve-progress" }, WD = {
  key: 0,
  class: "progress-container"
}, GD = { class: "progress-bar" }, jD = { class: "progress-text" }, KD = { class: "batch-actions" }, UD = ["title"], qD = ["title"], YD = { class: "statusbar-right" }, JD = { class: "shortcut-hints" }, XD = { class: "hint-item" }, ZD = { class: "hint-item" }, QD = ["disabled"], eP = {
  key: 0,
  class: "btn-spinner"
}, tP = /* @__PURE__ */ J({
  __name: "index",
  props: {
    modelValue: { type: Boolean },
    conflictFiles: {}
  },
  emits: ["update:modelValue", "complete", "cancel", "back", "escape"],
  setup(t, { expose: e, emit: n }) {
    const i = t, s = n, { t: o } = vl(), r = C({
      get: () => i.modelValue,
      set: (H) => s("update:modelValue", H)
    }), l = M(0), a = M({}), c = M({}), u = M({}), f = M(!1), d = M(""), h = M(0), g = M(""), m = M(!0), y = M(null), v = M(null), w = M(!1), _ = M(!1), x = M(null), k = M(null);
    let T = null, A = null;
    const z = M(""), B = M(""), q = M(/* @__PURE__ */ new Set()), $ = M(/* @__PURE__ */ new Set()), V = (H) => {
      const ie = getComputedStyle(document.documentElement), me = ie.getPropertyValue("--categories-panel-bg").trim() || (H ? "#1e1e1e" : "#ffffff"), ke = ie.getPropertyValue("--categories-text-color").trim() || (H ? "#d4d4d4" : "#000000"), it = ie.getPropertyValue("--editor-selection-bg").trim() || (H ? "#264f78" : "#add6ff");
      return aD({
        theme: H ? "dark" : "light",
        settings: {
          background: me,
          foreground: ke,
          caret: H ? "#aeafad" : "#000000",
          selection: it
        },
        styles: [
          { tag: pe.comment, color: "#6a9955" },
          { tag: pe.keyword, color: "#569cd6" },
          { tag: pe.string, color: "#ce9178" }
        ]
      });
    }, X = C(() => i.conflictFiles[l.value]), ce = C(() => i.conflictFiles.every((H, ie) => a.value[ie])), O = C(() => i.conflictFiles.filter((H, ie) => a.value[ie]).length), I = C(() => {
      const H = u.value[l.value], ie = A ? A.state.doc.toString() : B.value;
      return H && ie !== H;
    }), L = () => document.documentElement.classList.contains("dark") || document.documentElement.classList.contains("dark-theme") || document.body.classList.contains("dark") || document.body.classList.contains("dark-theme"), oe = M(L());
    let le = null;
    function we(H) {
      return H.split("/").pop() || H;
    }
    function Te(H, ie) {
      const me = H.split(`
`), ke = ie.split(`
`), it = /* @__PURE__ */ new Set(), G = /* @__PURE__ */ new Set(), fe = Math.max(me.length, ke.length);
      for (let Re = 0; Re < fe; Re++) {
        const vt = me[Re], _t = ke[Re];
        vt !== _t && (Re < me.length && it.add(Re + 1), Re < ke.length && G.add(Re + 1));
      }
      return { oldSet: it, newSet: G };
    }
    function xe(H, ie, me, ke) {
      if (!H) return null;
      const it = [
        a3(),
        r8(),
        tv.of([...rD, ...g8, lD]),
        V(oe.value),
        he.lineWrapping,
        Me.readOnly.of(me),
        he.updateListener.of((vt) => {
          if (!me && vt.docChanged) {
            const _t = vt.state.doc.toString();
            ke ? z.value = _t : (B.value = _t, c.value[l.value] = _t), Ve();
          }
        })
      ], G = Me.create({
        doc: ie,
        extensions: it
      }), fe = new he({
        state: G,
        parent: H
      }), Re = (vt) => {
        be(ke, vt);
      };
      return fe.scrollDOM.addEventListener("scroll", Re), fe;
    }
    function be(H, ie) {
      if (!m.value) return;
      const me = ie.target;
      if (!me) return;
      const ke = me.scrollHeight - me.clientHeight, it = ke > 0 ? me.scrollTop / ke : 0;
      if (H) {
        if (_.value) return;
        if (w.value = !0, A) {
          const G = A.scrollDOM, fe = G.scrollHeight - G.clientHeight;
          G.scrollTop = it * (fe > 0 ? fe : 0), G.scrollLeft = me.scrollLeft;
        }
        requestAnimationFrame(() => {
          w.value = !1;
        });
      } else {
        if (w.value) return;
        if (_.value = !0, T) {
          const G = T.scrollDOM, fe = G.scrollHeight - G.clientHeight;
          G.scrollTop = it * (fe > 0 ? fe : 0), G.scrollLeft = me.scrollLeft;
        }
        requestAnimationFrame(() => {
          _.value = !1;
        });
      }
    }
    function Be() {
      m.value = !m.value;
    }
    function Ve() {
      const H = z.value, ie = A ? A.state.doc.toString() : B.value, { oldSet: me, newSet: ke } = Te(H, ie);
      q.value = me, $.value = ke;
    }
    function Oe(H, ie) {
      T && (T.destroy(), T = null), A && (A.destroy(), A = null), Ze(() => {
        T = xe(x.value, H, !0, !0), A = xe(k.value, ie, !1, !1), Ve();
      });
    }
    async function Ye() {
      try {
        f.value = !0, d.value = "loading", h.value = 30, g.value = o("settings.gitSync.loadingFile");
        const H = await QA(X.value);
        z.value = H.remote_content, u.value[l.value] || (u.value[l.value] = H.local_content);
        const ie = c.value[l.value] || H.local_content;
        B.value = ie, h.value = 80, g.value = o("settings.gitSync.initEditor"), Oe(H.remote_content, ie), h.value = 100, d.value = "complete";
      } catch (H) {
        console.error("加载文件内容失败:", H), z.value = o("settings.gitSync.loadFileFailed"), B.value = o("settings.gitSync.loadFileFailed");
      } finally {
        f.value = !1;
      }
    }
    function Ie(H) {
      r.value && (H.ctrlKey && H.key === "1" || H.key === "ArrowLeft" && !H.ctrlKey ? (H.preventDefault(), jt()) : H.ctrlKey && H.key === "2" || H.key === "ArrowRight" && !H.ctrlKey ? (H.preventDefault(), Ft()) : H.ctrlKey && H.key === "Enter" ? (H.preventDefault(), ce.value && !f.value && sn()) : H.key === "Escape" ? (H.preventDefault(), mt()) : H.ctrlKey && H.key === "ArrowLeft" ? (H.preventDefault(), Ut()) : H.ctrlKey && H.key === "ArrowRight" && (H.preventDefault(), Sn()));
    }
    function Ft() {
      a.value[l.value] = "remote";
    }
    function jt() {
      a.value[l.value] = "local";
    }
    function Kt() {
      i.conflictFiles.forEach((H, ie) => {
        a.value[ie] = "remote";
      });
    }
    function wn() {
      i.conflictFiles.forEach((H, ie) => {
        a.value[ie] = "local";
      });
    }
    function Ut() {
      l.value > 0 && l.value--;
    }
    function Sn() {
      l.value < i.conflictFiles.length - 1 && l.value++;
    }
    function sn() {
      A && a.value[l.value] === "local" && (c.value[l.value] = A.state.doc.toString());
      const H = { ...c.value };
      for (let ke = 0; ke < i.conflictFiles.length; ke++)
        a.value[ke] === "local" && !H[ke] && (H[ke] = u.value[ke] || "");
      f.value = !0, d.value = "merging", h.value = 0, g.value = o("settings.gitSync.mergingProgress", {
        current: 1,
        total: i.conflictFiles.length
      });
      let ie = 0;
      const me = setInterval(() => {
        ie += 20, h.value = Math.min(ie, 90), ie >= 100 && clearInterval(me);
      }, 100);
      s("complete", a.value, H);
    }
    function Nt() {
      r.value = !1, s("back");
    }
    function Dn() {
      r.value = !1, s("cancel");
    }
    function mt() {
      r.value = !1, s("escape");
    }
    return ae(r, (H) => {
      H && i.conflictFiles.length > 0 && (l.value = 0, a.value = {}, c.value = {}, u.value = {}, Ye());
    }), ae(l, () => {
      Ye();
    }), ae(oe, () => {
      T && A && Oe(z.value, B.value);
    }), wo(() => {
      T && T.destroy(), A && A.destroy();
    }), qe(() => {
      document.addEventListener("keydown", Ie), le = new MutationObserver(() => {
        oe.value = L();
      }), le.observe(document.documentElement, {
        attributes: !0,
        attributeFilter: ["class"]
      }), le.observe(document.body, {
        attributes: !0,
        attributeFilter: ["class"]
      });
    }), wo(() => {
      document.removeEventListener("keydown", Ie), le?.disconnect(), le = null;
    }), e({
      setLoading: (H) => {
        f.value = H;
      }
    }), (H, ie) => (S(), te(Bh, { to: "body" }, [
      U(pi, { name: "merge-fade" }, {
        default: j(() => [
          p(r) ? (S(), D("div", {
            key: 0,
            class: "merge-overlay",
            onClick: Xe(mt, ["self"])
          }, [
            b("div", cD, [
              N(" 顶栏 "),
              b("div", uD, [
                b("div", fD, [
                  ie[0] || (ie[0] = b(
                    "span",
                    { class: "titlebar-icon" },
                    "⚡",
                    -1
                    /* HOISTED */
                  )),
                  b(
                    "span",
                    dD,
                    R(H.$t("settings.gitSync.mergeTitle")),
                    1
                    /* TEXT */
                  )
                ]),
                b("div", hD, [
                  b("div", pD, [
                    (S(!0), D(
                      ye,
                      null,
                      ct(H.conflictFiles, (me, ke) => (S(), D("button", {
                        key: me,
                        class: F(["file-tab", { active: p(l) === ke, resolved: p(a)[ke] }]),
                        onClick: (it) => l.value = ke,
                        title: me
                      }, [
                        b(
                          "span",
                          {
                            class: F(["tab-dot", { done: p(a)[ke] }])
                          },
                          null,
                          2
                          /* CLASS */
                        ),
                        b(
                          "span",
                          mD,
                          R(we(me)),
                          1
                          /* TEXT */
                        )
                      ], 10, gD))),
                      128
                      /* KEYED_FRAGMENT */
                    ))
                  ])
                ]),
                b("button", {
                  class: "titlebar-close",
                  onClick: mt
                }, ie[1] || (ie[1] = [
                  b(
                    "span",
                    null,
                    "×",
                    -1
                    /* HOISTED */
                  )
                ]))
              ]),
              N(" 文件路径栏 "),
              b("div", vD, [
                b(
                  "span",
                  yD,
                  R(H.$t("settings.gitSync.conflictFile")) + ":",
                  1
                  /* TEXT */
                ),
                b(
                  "span",
                  bD,
                  R(p(X)),
                  1
                  /* TEXT */
                ),
                b(
                  "span",
                  wD,
                  R(p(l) + 1) + " / " + R(H.conflictFiles.length),
                  1
                  /* TEXT */
                )
              ]),
              N(" 对比主体 "),
              b("div", SD, [
                N(" 远程 (Incoming) "),
                b(
                  "div",
                  {
                    class: F(["diff-pane incoming", { selected: p(a)[p(l)] === "remote" }])
                  },
                  [
                    b("div", CD, [
                      b("div", kD, [
                        ie[2] || (ie[2] = b(
                          "span",
                          { class: "label-dot incoming-dot" },
                          null,
                          -1
                          /* HOISTED */
                        )),
                        b(
                          "span",
                          null,
                          R(H.$t("settings.gitSync.remoteVersion")),
                          1
                          /* TEXT */
                        ),
                        b(
                          "span",
                          _D,
                          R(H.$t("settings.gitSync.incomingBadge")),
                          1
                          /* TEXT */
                        )
                      ]),
                      b("div", xD, [
                        b("button", {
                          class: F(["sync-scroll-btn", { active: p(m) }]),
                          onClick: Be,
                          title: p(m) ? H.$t("settings.gitSync.syncScrollOn") : H.$t("settings.gitSync.syncScrollOff")
                        }, [
                          b(
                            "span",
                            ED,
                            R(p(m) ? "⤳" : "⇥"),
                            1
                            /* TEXT */
                          )
                        ], 10, AD),
                        b(
                          "button",
                          {
                            class: F(["accept-btn incoming-btn", { accepted: p(a)[p(l)] === "remote" }]),
                            onClick: Ft
                          },
                          [
                            p(a)[p(l)] === "remote" ? (S(), D(
                              ye,
                              { key: 0 },
                              [
                                De(
                                  " ✓ " + R(H.$t("settings.gitSync.accepted")),
                                  1
                                  /* TEXT */
                                )
                              ],
                              64
                              /* STABLE_FRAGMENT */
                            )) : (S(), D(
                              ye,
                              { key: 1 },
                              [
                                De(
                                  R(H.$t("settings.gitSync.acceptIncoming")),
                                  1
                                  /* TEXT */
                                )
                              ],
                              64
                              /* STABLE_FRAGMENT */
                            ))
                          ],
                          2
                          /* CLASS */
                        )
                      ])
                    ]),
                    b(
                      "div",
                      {
                        ref_key: "remotePaneRef",
                        ref: y,
                        class: F(["pane-content", { "has-diff": p(q).size > 0 }])
                      },
                      [
                        b(
                          "div",
                          {
                            ref_key: "remoteEditorRef",
                            ref: x,
                            class: "code-editor-container"
                          },
                          null,
                          512
                          /* NEED_PATCH */
                        ),
                        N(" 差异标记 "),
                        p(q).size > 0 ? (S(), D("div", TD, [
                          (S(!0), D(
                            ye,
                            null,
                            ct(Array.from(p(q)), (me) => (S(), D("span", {
                              key: me,
                              class: "diff-line-marker remote",
                              style: je({ top: `${(me - 1) * 20 + 8}px` }),
                              title: H.$t("settings.gitSync.lineChanged")
                            }, null, 12, MD))),
                            128
                            /* KEYED_FRAGMENT */
                          ))
                        ])) : N("v-if", !0)
                      ],
                      2
                      /* CLASS */
                    )
                  ],
                  2
                  /* CLASS */
                ),
                N(" 分隔条 "),
                ie[4] || (ie[4] = b(
                  "div",
                  { class: "diff-gutter" },
                  [
                    b("div", { class: "gutter-line" })
                  ],
                  -1
                  /* HOISTED */
                )),
                N(" 本地 (Current) "),
                b(
                  "div",
                  {
                    class: F(["diff-pane current", { selected: p(a)[p(l)] === "local" }])
                  },
                  [
                    b("div", OD, [
                      b("div", DD, [
                        ie[3] || (ie[3] = b(
                          "span",
                          { class: "label-dot current-dot" },
                          null,
                          -1
                          /* HOISTED */
                        )),
                        b(
                          "span",
                          null,
                          R(H.$t("settings.gitSync.localVersion")),
                          1
                          /* TEXT */
                        ),
                        b(
                          "span",
                          PD,
                          R(H.$t("settings.gitSync.currentBadge")),
                          1
                          /* TEXT */
                        ),
                        p(I) ? (S(), D(
                          "span",
                          ID,
                          R(H.$t("settings.gitSync.edited")),
                          1
                          /* TEXT */
                        )) : N("v-if", !0)
                      ]),
                      b(
                        "button",
                        {
                          class: F(["accept-btn current-btn", { accepted: p(a)[p(l)] === "local" }]),
                          onClick: jt
                        },
                        [
                          p(a)[p(l)] === "local" ? (S(), D(
                            ye,
                            { key: 0 },
                            [
                              De(
                                " ✓ " + R(H.$t("settings.gitSync.accepted")),
                                1
                                /* TEXT */
                              )
                            ],
                            64
                            /* STABLE_FRAGMENT */
                          )) : (S(), D(
                            ye,
                            { key: 1 },
                            [
                              De(
                                R(H.$t("settings.gitSync.acceptCurrent")),
                                1
                                /* TEXT */
                              )
                            ],
                            64
                            /* STABLE_FRAGMENT */
                          ))
                        ],
                        2
                        /* CLASS */
                      )
                    ]),
                    b(
                      "div",
                      {
                        ref_key: "localPaneRef",
                        ref: v,
                        class: F(["pane-content editable", { "has-diff": p($).size > 0 }])
                      },
                      [
                        b(
                          "div",
                          {
                            ref_key: "localEditorRef",
                            ref: k,
                            class: "code-editor-container"
                          },
                          null,
                          512
                          /* NEED_PATCH */
                        ),
                        N(" 差异标记 "),
                        p($).size > 0 ? (S(), D("div", RD, [
                          (S(!0), D(
                            ye,
                            null,
                            ct(Array.from(p($)), (me) => (S(), D("span", {
                              key: me,
                              class: "diff-line-marker local",
                              style: je({ top: `${(me - 1) * 20 + 8}px` }),
                              title: H.$t("settings.gitSync.lineChanged")
                            }, null, 12, LD))),
                            128
                            /* KEYED_FRAGMENT */
                          ))
                        ])) : N("v-if", !0)
                      ],
                      2
                      /* CLASS */
                    )
                  ],
                  2
                  /* CLASS */
                )
              ]),
              N(" 底栏 "),
              b("div", BD, [
                b("div", $D, [
                  b("button", {
                    class: "status-btn",
                    onClick: Nt,
                    title: H.$t("settings.gitSync.backToConflictDialog")
                  }, " ← " + R(H.$t("settings.gitSync.backToConflictDialog")), 9, FD),
                  b("div", ND, [
                    b("button", {
                      class: "nav-btn",
                      onClick: Ut,
                      disabled: p(l) === 0
                    }, " ‹ " + R(H.$t("settings.gitSync.prev")), 9, VD),
                    b("button", {
                      class: "nav-btn",
                      onClick: Sn,
                      disabled: p(l) === H.conflictFiles.length - 1
                    }, R(H.$t("settings.gitSync.next")) + " › ", 9, zD)
                  ]),
                  b(
                    "span",
                    HD,
                    R(p(O)) + "/" + R(H.conflictFiles.length) + " " + R(H.$t("settings.gitSync.resolved")),
                    1
                    /* TEXT */
                  ),
                  N(" 进度条 "),
                  p(f) || p(d) ? (S(), D("div", WD, [
                    b("div", GD, [
                      b(
                        "div",
                        {
                          class: F(["progress-fill", { "progress-loading": p(d) === "loading", "progress-merging": p(d) === "merging" }]),
                          style: je({ width: p(h) + "%" })
                        },
                        null,
                        6
                        /* CLASS, STYLE */
                      )
                    ]),
                    b(
                      "span",
                      jD,
                      R(p(g)),
                      1
                      /* TEXT */
                    )
                  ])) : N("v-if", !0),
                  N(" 批量操作按钮 "),
                  b("div", KD, [
                    b("button", {
                      class: "batch-btn",
                      onClick: Kt,
                      title: H.$t("settings.gitSync.acceptAllRemote")
                    }, R(H.$t("settings.gitSync.acceptAllRemote")), 9, UD),
                    b("button", {
                      class: "batch-btn",
                      onClick: wn,
                      title: H.$t("settings.gitSync.acceptAllLocal")
                    }, R(H.$t("settings.gitSync.acceptAllLocal")), 9, qD)
                  ])
                ]),
                b("div", YD, [
                  N(" 快捷键提示 "),
                  b("div", JD, [
                    b("span", XD, [
                      ie[5] || (ie[5] = b(
                        "kbd",
                        null,
                        "Ctrl",
                        -1
                        /* HOISTED */
                      )),
                      ie[6] || (ie[6] = De("+")),
                      ie[7] || (ie[7] = b(
                        "kbd",
                        null,
                        "1",
                        -1
                        /* HOISTED */
                      )),
                      De(
                        " " + R(H.$t("settings.gitSync.acceptCurrent")),
                        1
                        /* TEXT */
                      )
                    ]),
                    b("span", ZD, [
                      ie[8] || (ie[8] = b(
                        "kbd",
                        null,
                        "Ctrl",
                        -1
                        /* HOISTED */
                      )),
                      ie[9] || (ie[9] = De("+")),
                      ie[10] || (ie[10] = b(
                        "kbd",
                        null,
                        "2",
                        -1
                        /* HOISTED */
                      )),
                      De(
                        " " + R(H.$t("settings.gitSync.acceptIncoming")),
                        1
                        /* TEXT */
                      )
                    ])
                  ]),
                  b(
                    "button",
                    {
                      class: "status-btn cancel-btn",
                      onClick: Dn
                    },
                    R(H.$t("common.cancel")),
                    1
                    /* TEXT */
                  ),
                  b("button", {
                    class: F(["status-btn primary-btn", { loading: p(f) }]),
                    onClick: sn,
                    disabled: !p(ce) || p(f)
                  }, [
                    p(f) ? (S(), D("span", eP)) : N("v-if", !0),
                    De(
                      " " + R(H.$t("settings.gitSync.completeMerge")),
                      1
                      /* TEXT */
                    )
                  ], 10, QD)
                ])
              ])
            ])
          ])) : N("v-if", !0)
        ]),
        _: 1
        /* STABLE */
      })
    ]));
  }
}), nP = /* @__PURE__ */ vi(tP, [["__scopeId", "data-v-77ffc468"]]), iP = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: nP
}, Symbol.toStringTag, { value: "Module" }));
async function sP(t) {
  const n = yu().label, { refreshStatus: i, refreshSettings: s, _setLastSyncTime: o } = vu();
  ge.info(`[GitSync] [${n}] 设置 Git 事件监听器...`);
  const r = {
    gitSyncSuccess: null,
    gitSyncError: null,
    gitPullCompleted: null,
    gitSyncComplete: null,
    fileCreated: null,
    fileModified: null,
    fileDeleted: null,
    filesChangedBatch: null,
    dirsChangedBatch: null
  };
  let l = !1, a = !1;
  try {
    r.gitSyncSuccess = await At("git-sync-success", (c) => {
      ze.msg(c.payload, "success", "bottom-right");
    }), r.gitSyncComplete = await At("git-sync-complete", async (c) => {
      c.payload.success && c.payload.last_sync_time && o(c.payload.last_sync_time), await s(), await i();
    }), r.gitSyncError = await At("git-sync-error", (c) => {
      const u = c.payload;
      if (ge.error(`[GitSync] [${n}] Git 自动同步失败:`, u), u.includes("would be overwritten by merge") || u.includes("Please commit your changes")) {
        const f = u.match(/following files? would be overwritten[^:]*:\s*([^\n]+(?:\n\t[^\n]+)*)/);
        if (f) {
          const d = f[1].split(`
`).map((h) => h.trim()).filter((h) => h);
          ze.msg(t("settings.gitSync.conflictError", { files: d.join(", ") }), "error", "top-right", 5e3);
        } else
          ze.msg(t("settings.gitSync.conflictError", { files: "未知文件" }), "error", "top-right", 5e3);
      } else u.includes("unmerged files") || u.includes("unresolved conflict") ? ze.msg(t("settings.gitSync.unresolvedConflict"), "error", "top-right", 5e3) : ze.msg(u.split(`
`)[0] || u, "error", "top-right", 5e3);
    }), r.gitPullCompleted = await At("git-pull-completed", async (c) => {
      if (!l) {
        l = !0;
        try {
          window.dispatchEvent(
            new CustomEvent("refresh-data", {
              detail: { source: "git-pull", filesCount: c.payload }
            })
          );
        } finally {
          setTimeout(() => {
            l = !1;
          }, 2e3);
        }
      }
    }), r.fileCreated = await At("file-created", (c) => {
      a || (a = !0, window.dispatchEvent(new CustomEvent("refresh-data", {
        detail: { source: "file-created", path: c.payload.path }
      })), setTimeout(() => {
        a = !1;
      }, 2e3));
    }), r.fileModified = await At("file-modified", (c) => {
      a || (a = !0, window.dispatchEvent(new CustomEvent("refresh-data", {
        detail: { source: "file-modified", path: c.payload.path }
      })), setTimeout(() => {
        a = !1;
      }, 2e3));
    }), r.fileDeleted = await At("file-deleted", (c) => {
      a || (a = !0, window.dispatchEvent(new CustomEvent("refresh-data", {
        detail: { source: "file-deleted", path: c.payload.path }
      })), setTimeout(() => {
        a = !1;
      }, 2e3));
    }), r.filesChangedBatch = await At("files-changed-batch", (c) => {
      if (a) return;
      a = !0;
      const { created: u, modified: f, deleted: d, renamed: h } = c.payload;
      window.dispatchEvent(new CustomEvent("refresh-data", {
        detail: {
          source: "files-changed-batch",
          created: u,
          modified: f,
          deleted: d,
          renamed: h,
          totalCount: u.length + f.length + d.length + (h?.length ?? 0)
        }
      })), setTimeout(() => {
        a = !1;
      }, 2e3);
    }), r.dirsChangedBatch = await At("dirs-changed-batch", (c) => {
      const { created: u, deleted: f, renamed: d } = c.payload;
      ge.info(`[GitSync] dirs-changed-batch: +${u.length} -${f.length} r${d?.length ?? 0}`), window.dispatchEvent(new CustomEvent("refresh-categories", {
        detail: { source: "dirs-changed-batch", created: u, deleted: f, renamed: d }
      }));
    }), ge.info(`[GitSync] [${n}] 所有 Git 事件监听器设置完成`);
  } catch (c) {
    ge.error(`[GitSync] [${n}] 设置 Git 事件监听器失败:`, c);
  }
  return r;
}
async function oP() {
  try {
    if (!await W("get_workspace_root_path")) return;
    await iE() && ge.info("[GitSync] 已为工作区自动创建 .gitignore");
  } catch (t) {
    ge.debug("[GitSync] 确保 .gitignore 跳过或失败", t);
  }
}
const rP = {
  getGitSettings: To,
  checkGitRepo: jA,
  initGitRepository: YA,
  gitPull: za,
  startAutoSync: Qr,
  pauseAutoSync: Tg,
  logger: ge
};
async function lP(t, e = {}) {
  const n = { ...rP, ...e };
  try {
    const i = await n.getGitSettings();
    if (!(i.enabled && i.user_name.trim() && i.user_email.trim() && i.remote_url.trim()))
      return !1;
    let o = !1, r = !1, l = i.pull_on_start;
    if (await n.checkGitRepo() || (n.logger.info("[GitSync] 本地 Git 仓库缺失，开始根据已保存的远程配置恢复"), await n.initGitRepository(
      i.user_name,
      i.user_email,
      i.remote_url,
      i.token
    ), l = !0), l)
      try {
        const a = await n.gitPull();
        a.success && !a.has_conflicts && a.files_updated > 0 ? (ze.msg(t("settings.gitSync.pullSuccess", { count: a.files_updated }), "success", "bottom-right"), o = !0) : a.success || (r = !0);
      } catch (a) {
        r = !0, ge.error("[GitSync] 启动时拉取失败", a);
      }
    if (i.auto_sync && (await n.startAutoSync(), r))
      try {
        await n.pauseAutoSync();
      } catch (a) {
        n.logger.error("[GitSync] 暂停自动同步失败", a);
      }
    return o;
  } catch (i) {
    return n.logger.error("[GitSync] Git 同步初始化失败", i), !1;
  }
}
function aP(t) {
  t.gitSyncSuccess && t.gitSyncSuccess(), t.gitSyncError && t.gitSyncError(), t.gitPullCompleted && t.gitPullCompleted(), t.gitSyncComplete && t.gitSyncComplete(), t.fileCreated && t.fileCreated(), t.fileModified && t.fileModified(), t.fileDeleted && t.fileDeleted(), t.filesChangedBatch && t.filesChangedBatch(), t.dirsChangedBatch && t.dirsChangedBatch();
}
const cP = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  cleanupGitEventListeners: aP,
  ensureWorkspaceGitignore: oP,
  initGitSync: lP,
  setupGitEventListeners: sP
}, Symbol.toStringTag, { value: "Module" })), uP = (t) => ({
  listen: t.listen ?? At,
  pauseAutoSync: t.pauseAutoSync ?? Tg,
  logger: t.logger ?? ge,
  isConflictDialogVisible: t.isConflictDialogVisible ?? (() => !1),
  onConflictDetected: t.onConflictDetected,
  onRepoNotFound: t.onRepoNotFound
});
async function fP(t) {
  const {
    listen: e,
    pauseAutoSync: n,
    logger: i,
    isConflictDialogVisible: s,
    onConflictDetected: o,
    onRepoNotFound: r
  } = uP(t), l = {
    conflict: null,
    repoNotFound: null,
    resetConflictHandled: () => {
      a = !1;
    }
  };
  let a = !1;
  try {
    l.conflict = await e(
      "git-conflict-detected",
      async (c) => {
        if (a && s()) {
          i.info("[GitSync] 冲突事件已处理，跳过重复事件");
          return;
        }
        i.info("[GitSync] 收到冲突事件:", c.payload), a = !0;
        const u = c.payload.conflict_files.map(yd), f = (c.payload.untracked_files || []).map(yd);
        i.info("[GitSync] 解码后的冲突文件:", u), i.info("[GitSync] 解码后的未跟踪文件:", f);
        try {
          await n(), i.info("[GitSync] 已暂停自动同步，等待冲突解决");
        } catch (d) {
          i.error("[GitSync] 暂停自动同步失败:", d);
        }
        await o({
          conflictFiles: u,
          untrackedFiles: f
        });
      }
    ), i.info("[GitSync] Git 冲突事件监听器已设置");
  } catch (c) {
    i.error("[GitSync] 设置冲突事件监听器失败:", c);
  }
  try {
    l.repoNotFound = await e(
      "git-repo-not-found",
      async (c) => {
        i.info("[GitSync] 收到仓库不存在事件:", c.payload);
        try {
          await n(), i.info("[GitSync] 已暂停自动同步，等待仓库重新配置");
        } catch (u) {
          i.error("[GitSync] 暂停自动同步失败:", u);
        }
        await r({
          remoteUrl: c.payload.remote_url,
          operation: c.payload.operation
        });
      }
    ), i.info("[GitSync] Git 仓库不存在事件监听器已设置");
  } catch (c) {
    i.error("[GitSync] 设置仓库不存在事件监听器失败:", c);
  }
  return l;
}
function dP(t) {
  t.conflict && t.conflict(), t.repoNotFound && t.repoNotFound();
}
const hP = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  cleanupGitSyncRuntimeListeners: dP,
  setupGitSyncRuntimeListeners: fP
}, Symbol.toStringTag, { value: "Module" })), Wv = (t = {}) => ({
  isPluginEnabled: t.isPluginEnabled ?? (() => !0),
  getGitSettings: t.getGitSettings ?? To,
  getAutoSyncStatus: t.getAutoSyncStatus ?? XA,
  startAutoSync: t.startAutoSync ?? Qr,
  stopAutoSync: t.stopAutoSync ?? Ha,
  logger: t.logger ?? ge
});
async function pP(t = {}) {
  const {
    isPluginEnabled: e,
    getGitSettings: n,
    getAutoSyncStatus: i,
    startAutoSync: s,
    logger: o
  } = Wv(t);
  if (!e())
    return !1;
  try {
    const r = await n();
    return !r.enabled || !r.auto_sync ? !1 : await i() ? (o.info("[GitSync] 窗口显示，自动同步已在运行"), !1) : (await s(), o.info("[GitSync] 窗口显示，已启动自动同步"), !0);
  } catch (r) {
    return o.error("[GitSync] 启动自动同步失败:", r), !1;
  }
}
async function gP(t = {}) {
  const {
    isPluginEnabled: e,
    getAutoSyncStatus: n,
    stopAutoSync: i,
    logger: s
  } = Wv(t);
  if (!e())
    return !1;
  try {
    return await n() ? (await i(), s.info("[GitSync] 窗口隐藏，已停止自动同步"), !0) : !1;
  } catch (o) {
    return s.error("[GitSync] 停止自动同步失败:", o), !1;
  }
}
const mP = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  startAutoSyncForVisibleWindow: pP,
  stopAutoSyncForHiddenWindow: gP
}, Symbol.toStringTag, { value: "Module" }));
export {
  bP as activate
};
