import * as Po from "vue";
import { inject as Ce, createVNode as H, defineAsyncComponent as as, getCurrentInstance as Qe, ref as M, computed as L, unref as d, shallowRef as fn, watchEffect as Xl, readonly as ma, getCurrentScope as bc, onScopeDispose as _c, onMounted as Fe, nextTick as Ne, watch as ce, isRef as Vr, warn as wc, provide as Ft, defineComponent as Y, createElementBlock as x, openBlock as P, mergeProps as pn, renderSlot as ie, createElementVNode as N, toRef as Nt, onUnmounted as va, useAttrs as Ec, useSlots as Tc, normalizeStyle as Ae, normalizeClass as z, createCommentVNode as G, Fragment as Ve, createBlock as Q, withCtx as te, resolveDynamicComponent as mt, withModifiers as Je, toDisplayString as J, onBeforeUnmount as Bt, Transition as Gn, withDirectives as vt, vShow as Qt, reactive as Dn, onActivated as Cc, onUpdated as Sc, cloneVNode as Oc, Text as Jl, Comment as kc, Teleport as Lc, onBeforeMount as Ic, onDeactivated as Pc, createTextVNode as wn, toRaw as Ac, toRefs as ga, resolveComponent as bn, resolveDirective as Nc, toHandlerKey as Rc, renderList as qt, withKeys as qn, vModelText as $c, normalizeProps as Mc, shallowReactive as Dc, isVNode as cr, render as qr, h as Ql } from "vue";
var Fc = {
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
function xc() {
  return "icon-" + ((1 + Math.random()) * 4294967296 | 0).toString(16).substring(1);
}
function zc(e, t, n) {
  var r = typeof t.fill == "string" ? [t.fill] : t.fill || [], o = [], a = t.theme || n.theme;
  switch (a) {
    case "outline":
      o.push(typeof r[0] == "string" ? r[0] : "currentColor"), o.push("none"), o.push(typeof r[0] == "string" ? r[0] : "currentColor"), o.push("none");
      break;
    case "filled":
      o.push(typeof r[0] == "string" ? r[0] : "currentColor"), o.push(typeof r[0] == "string" ? r[0] : "currentColor"), o.push("#FFF"), o.push("#FFF");
      break;
    case "two-tone":
      o.push(typeof r[0] == "string" ? r[0] : "currentColor"), o.push(typeof r[1] == "string" ? r[1] : n.colors.twoTone.twoTone), o.push(typeof r[0] == "string" ? r[0] : "currentColor"), o.push(typeof r[1] == "string" ? r[1] : n.colors.twoTone.twoTone);
      break;
    case "multi-color":
      o.push(typeof r[0] == "string" ? r[0] : "currentColor"), o.push(typeof r[1] == "string" ? r[1] : n.colors.multiColor.outFillColor), o.push(typeof r[2] == "string" ? r[2] : n.colors.multiColor.innerStrokeColor), o.push(typeof r[3] == "string" ? r[3] : n.colors.multiColor.innerFillColor);
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
var Bc = Symbol("icon-context");
function tn(e, t, n) {
  var r = {
    name: "icon-" + e,
    props: ["size", "strokeWidth", "strokeLinecap", "strokeLinejoin", "theme", "fill", "spin"],
    setup: function(a) {
      var s = xc(), l = Ce(Bc, Fc);
      return function() {
        var i = a.size, u = a.strokeWidth, f = a.strokeLinecap, p = a.strokeLinejoin, m = a.theme, h = a.fill, g = a.spin, v = zc(s, {
          size: i,
          strokeWidth: u,
          strokeLinecap: f,
          strokeLinejoin: p,
          theme: m,
          fill: h
        }, l), E = [l.prefix + "-icon"];
        return E.push(l.prefix + "-icon-" + e), t && l.rtl && E.push(l.prefix + "-icon-rtl"), g && E.push(l.prefix + "-icon-spin"), H("span", {
          class: E.join(" ")
        }, [n(v)]);
      };
    }
  };
  return r;
}
const Wc = tn("close-small", !1, function(e) {
  return H("svg", {
    width: e.size,
    height: e.size,
    viewBox: "0 0 48 48",
    fill: "none"
  }, [H("path", {
    d: "M14 14L34 34",
    stroke: e.colors[0],
    "stroke-width": e.strokeWidth,
    "stroke-linecap": e.strokeLinecap,
    "stroke-linejoin": e.strokeLinejoin
  }, null), H("path", {
    d: "M14 34L34 14",
    stroke: e.colors[0],
    "stroke-width": e.strokeWidth,
    "stroke-linecap": e.strokeLinecap,
    "stroke-linejoin": e.strokeLinejoin
  }, null)]);
}), jc = tn("copy", !0, function(e) {
  return H("svg", {
    width: e.size,
    height: e.size,
    viewBox: "0 0 48 48",
    fill: "none"
  }, [H("path", {
    d: "M13 12.4316V7.8125C13 6.2592 14.2592 5 15.8125 5H40.1875C41.7408 5 43 6.2592 43 7.8125V32.1875C43 33.7408 41.7408 35 40.1875 35H35.5163",
    stroke: e.colors[0],
    "stroke-width": e.strokeWidth,
    "stroke-linecap": e.strokeLinecap,
    "stroke-linejoin": e.strokeLinejoin
  }, null), H("path", {
    d: "M32.1875 13H7.8125C6.2592 13 5 14.2592 5 15.8125V40.1875C5 41.7408 6.2592 43 7.8125 43H32.1875C33.7408 43 35 41.7408 35 40.1875V15.8125C35 14.2592 33.7408 13 32.1875 13Z",
    fill: e.colors[1],
    stroke: e.colors[0],
    "stroke-width": e.strokeWidth,
    "stroke-linejoin": e.strokeLinejoin
  }, null)]);
}), Vc = tn("delete", !1, function(e) {
  return H("svg", {
    width: e.size,
    height: e.size,
    viewBox: "0 0 48 48",
    fill: "none"
  }, [H("path", {
    d: "M9 10V44H39V10H9Z",
    fill: e.colors[1],
    stroke: e.colors[0],
    "stroke-width": e.strokeWidth,
    "stroke-linejoin": e.strokeLinejoin
  }, null), H("path", {
    d: "M20 20V33",
    stroke: e.colors[2],
    "stroke-width": e.strokeWidth,
    "stroke-linecap": e.strokeLinecap,
    "stroke-linejoin": e.strokeLinejoin
  }, null), H("path", {
    d: "M28 20V33",
    stroke: e.colors[2],
    "stroke-width": e.strokeWidth,
    "stroke-linecap": e.strokeLinecap,
    "stroke-linejoin": e.strokeLinejoin
  }, null), H("path", {
    d: "M4 10H44",
    stroke: e.colors[0],
    "stroke-width": e.strokeWidth,
    "stroke-linecap": e.strokeLinecap,
    "stroke-linejoin": e.strokeLinejoin
  }, null), H("path", {
    d: "M16 10L19.289 4H28.7771L32 10H16Z",
    fill: e.colors[1],
    stroke: e.colors[0],
    "stroke-width": e.strokeWidth,
    "stroke-linejoin": e.strokeLinejoin
  }, null)]);
}), Uc = tn("down", !1, function(e) {
  return H("svg", {
    width: e.size,
    height: e.size,
    viewBox: "0 0 48 48",
    fill: "none"
  }, [H("path", {
    d: "M36 18L24 30L12 18",
    stroke: e.colors[0],
    "stroke-width": e.strokeWidth,
    "stroke-linecap": e.strokeLinecap,
    "stroke-linejoin": e.strokeLinejoin
  }, null)]);
}), Hc = tn("pushpin", !1, function(e) {
  return H("svg", {
    width: e.size,
    height: e.size,
    viewBox: "0 0 48 48",
    fill: "none"
  }, [H("path", {
    d: "M32 4H16L20 7L16 20C16 20 10 24 10 28H20L24 44L28 28H38C38 24 34 21.1667 32 20L28 7L32 4Z",
    fill: e.colors[1],
    stroke: e.colors[0],
    "stroke-width": e.strokeWidth,
    "stroke-linecap": e.strokeLinecap,
    "stroke-linejoin": e.strokeLinejoin
  }, null)]);
}), ss = tn("switch", !0, function(e) {
  return H("svg", {
    width: e.size,
    height: e.size,
    viewBox: "0 0 48 48",
    fill: "none"
  }, [H("path", {
    d: "M42 19H5.99998",
    stroke: e.colors[0],
    "stroke-width": e.strokeWidth,
    "stroke-linecap": e.strokeLinecap,
    "stroke-linejoin": e.strokeLinejoin
  }, null), H("path", {
    d: "M30 7L42 19",
    stroke: e.colors[0],
    "stroke-width": e.strokeWidth,
    "stroke-linecap": e.strokeLinecap,
    "stroke-linejoin": e.strokeLinejoin
  }, null), H("path", {
    d: "M6.79897 29H42.799",
    stroke: e.colors[0],
    "stroke-width": e.strokeWidth,
    "stroke-linecap": e.strokeLinecap,
    "stroke-linejoin": e.strokeLinejoin
  }, null), H("path", {
    d: "M6.79895 29L18.799 41",
    stroke: e.colors[0],
    "stroke-width": e.strokeWidth,
    "stroke-linecap": e.strokeLinecap,
    "stroke-linejoin": e.strokeLinejoin
  }, null)]);
}), Kc = tn("translate", !0, function(e) {
  return H("svg", {
    width: e.size,
    height: e.size,
    viewBox: "0 0 48 48",
    fill: "none"
  }, [H("path", {
    d: "M28.2857 37H39.7143M42 42L39.7143 37L42 42ZM26 42L28.2857 37L26 42ZM28.2857 37L34 24L39.7143 37H28.2857Z",
    stroke: e.colors[0],
    "stroke-width": e.strokeWidth,
    "stroke-linecap": e.strokeLinecap,
    "stroke-linejoin": e.strokeLinejoin
  }, null), H("path", {
    d: "M16 6L17 9",
    stroke: e.colors[0],
    "stroke-width": e.strokeWidth,
    "stroke-linecap": e.strokeLinecap,
    "stroke-linejoin": e.strokeLinejoin
  }, null), H("path", {
    d: "M6 11H28",
    stroke: e.colors[0],
    "stroke-width": e.strokeWidth,
    "stroke-linecap": e.strokeLinecap,
    "stroke-linejoin": e.strokeLinejoin
  }, null), H("path", {
    d: "M10 16C10 16 11.7895 22.2609 16.2632 25.7391C20.7368 29.2174 28 32 28 32",
    stroke: e.colors[0],
    "stroke-width": e.strokeWidth,
    "stroke-linecap": e.strokeLinecap,
    "stroke-linejoin": e.strokeLinejoin
  }, null), H("path", {
    d: "M24 11C24 11 22.2105 19.2174 17.7368 23.7826C13.2632 28.3478 6 32 6 32",
    stroke: e.colors[0],
    "stroke-width": e.strokeWidth,
    "stroke-linecap": e.strokeLinecap,
    "stroke-linejoin": e.strokeLinejoin
  }, null)]);
}), Gc = tn("up", !1, function(e) {
  return H("svg", {
    width: e.size,
    height: e.size,
    viewBox: "0 0 48 48",
    fill: "none"
  }, [H("path", {
    d: "M13 30L25 18L37 30",
    stroke: e.colors[0],
    "stroke-width": e.strokeWidth,
    "stroke-linecap": e.strokeLinecap,
    "stroke-linejoin": e.strokeLinejoin
  }, null)]);
}), ls = tn("volume-up", !0, function(e) {
  return H("svg", {
    width: e.size,
    height: e.size,
    viewBox: "0 0 48 48",
    fill: "none"
  }, [H("path", {
    d: "M24 6V42C17 42 11.7985 32.8391 11.7985 32.8391H6C4.89543 32.8391 4 31.9437 4 30.8391V17.0108C4 15.9062 4.89543 15.0108 6 15.0108H11.7985C11.7985 15.0108 17 6 24 6Z",
    fill: e.colors[1],
    stroke: e.colors[0],
    "stroke-width": e.strokeWidth,
    "stroke-linejoin": e.strokeLinejoin
  }, null), H("path", {
    d: "M32 24H44",
    stroke: e.colors[0],
    "stroke-width": e.strokeWidth,
    "stroke-linecap": e.strokeLinecap,
    "stroke-linejoin": e.strokeLinejoin
  }, null), H("path", {
    d: "M38 18V30",
    stroke: e.colors[0],
    "stroke-width": e.strokeWidth,
    "stroke-linecap": e.strokeLinecap,
    "stroke-linejoin": e.strokeLinejoin
  }, null)]);
}), k2 = (e) => {
  e.registerRoute({
    target: "layout",
    path: "/translate",
    name: "Translate",
    component: as(() => Promise.resolve().then(() => cw))
  }), e.registerSettingsTab({
    id: "translation",
    labelKey: "translation.title",
    icon: Kc,
    component: as(() => Promise.resolve().then(() => S2))
  });
}, ei = Symbol(), Ur = "el", Yc = "is-", _n = (e, t, n, r, o) => {
  let a = `${e}-${t}`;
  return n && (a += `-${n}`), r && (a += `__${r}`), o && (a += `--${o}`), a;
}, ti = Symbol("namespaceContextKey"), ha = (e) => {
  const t = e || (Qe() ? Ce(ti, M(Ur)) : M(Ur));
  return L(() => d(t) || Ur);
}, Me = (e, t) => {
  const n = ha(t);
  return {
    namespace: n,
    b: (v = "") => _n(n.value, e, v, "", ""),
    e: (v) => v ? _n(n.value, e, "", v, "") : "",
    m: (v) => v ? _n(n.value, e, "", "", v) : "",
    be: (v, E) => v && E ? _n(n.value, e, v, E, "") : "",
    em: (v, E) => v && E ? _n(n.value, e, "", v, E) : "",
    bm: (v, E) => v && E ? _n(n.value, e, v, "", E) : "",
    bem: (v, E, c) => v && E && c ? _n(n.value, e, v, E, c) : "",
    is: (v, ...E) => {
      const c = E.length >= 1 ? E[0] : !0;
      return v && c ? `${Yc}${v}` : "";
    },
    cssVar: (v) => {
      const E = {};
      for (const c in v)
        v[c] && (E[`--${n.value}-${c}`] = v[c]);
      return E;
    },
    cssVarName: (v) => `--${n.value}-${v}`,
    cssVarBlock: (v) => {
      const E = {};
      for (const c in v)
        v[c] && (E[`--${n.value}-${e}-${c}`] = v[c]);
      return E;
    },
    cssVarBlockName: (v) => `--${n.value}-${e}-${v}`
  };
};
/**
* @vue/shared v3.5.13
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/
const dr = () => {
}, Zc = Object.prototype.hasOwnProperty, is = (e, t) => Zc.call(e, t), Rt = Array.isArray, We = (e) => typeof e == "function", nt = (e) => typeof e == "string", tt = (e) => e !== null && typeof e == "object", qc = Object.prototype.toString, Xc = (e) => qc.call(e), Jc = (e) => Xc(e) === "[object Object]";
var ni = typeof global == "object" && global && global.Object === Object && global, Qc = typeof self == "object" && self && self.Object === Object && self, Wt = ni || Qc || Function("return this")(), xt = Wt.Symbol, ri = Object.prototype, ed = ri.hasOwnProperty, td = ri.toString, Xn = xt ? xt.toStringTag : void 0;
function nd(e) {
  var t = ed.call(e, Xn), n = e[Xn];
  try {
    e[Xn] = void 0;
    var r = !0;
  } catch {
  }
  var o = td.call(e);
  return r && (t ? e[Xn] = n : delete e[Xn]), o;
}
var rd = Object.prototype, od = rd.toString;
function ad(e) {
  return od.call(e);
}
var sd = "[object Null]", ld = "[object Undefined]", us = xt ? xt.toStringTag : void 0;
function Yn(e) {
  return e == null ? e === void 0 ? ld : sd : us && us in Object(e) ? nd(e) : ad(e);
}
function Fn(e) {
  return e != null && typeof e == "object";
}
var id = "[object Symbol]";
function fo(e) {
  return typeof e == "symbol" || Fn(e) && Yn(e) == id;
}
function ud(e, t) {
  for (var n = -1, r = e == null ? 0 : e.length, o = Array(r); ++n < r; )
    o[n] = t(e[n], n, e);
  return o;
}
var Ot = Array.isArray, cs = xt ? xt.prototype : void 0, ds = cs ? cs.toString : void 0;
function oi(e) {
  if (typeof e == "string")
    return e;
  if (Ot(e))
    return ud(e, oi) + "";
  if (fo(e))
    return ds ? ds.call(e) : "";
  var t = e + "";
  return t == "0" && 1 / e == -1 / 0 ? "-0" : t;
}
var cd = /\s/;
function dd(e) {
  for (var t = e.length; t-- && cd.test(e.charAt(t)); )
    ;
  return t;
}
var fd = /^\s+/;
function pd(e) {
  return e && e.slice(0, dd(e) + 1).replace(fd, "");
}
function mn(e) {
  var t = typeof e;
  return e != null && (t == "object" || t == "function");
}
var fs = NaN, md = /^[-+]0x[0-9a-f]+$/i, vd = /^0b[01]+$/i, gd = /^0o[0-7]+$/i, hd = parseInt;
function ps(e) {
  if (typeof e == "number")
    return e;
  if (fo(e))
    return fs;
  if (mn(e)) {
    var t = typeof e.valueOf == "function" ? e.valueOf() : e;
    e = mn(t) ? t + "" : t;
  }
  if (typeof e != "string")
    return e === 0 ? e : +e;
  e = pd(e);
  var n = vd.test(e);
  return n || gd.test(e) ? hd(e.slice(2), n ? 2 : 8) : md.test(e) ? fs : +e;
}
function ai(e) {
  return e;
}
var yd = "[object AsyncFunction]", bd = "[object Function]", _d = "[object GeneratorFunction]", wd = "[object Proxy]";
function si(e) {
  if (!mn(e))
    return !1;
  var t = Yn(e);
  return t == bd || t == _d || t == yd || t == wd;
}
var Ao = Wt["__core-js_shared__"], ms = function() {
  var e = /[^.]+$/.exec(Ao && Ao.keys && Ao.keys.IE_PROTO || "");
  return e ? "Symbol(src)_1." + e : "";
}();
function Ed(e) {
  return !!ms && ms in e;
}
var Td = Function.prototype, Cd = Td.toString;
function On(e) {
  if (e != null) {
    try {
      return Cd.call(e);
    } catch {
    }
    try {
      return e + "";
    } catch {
    }
  }
  return "";
}
var Sd = /[\\^$.*+?()[\]{}|]/g, Od = /^\[object .+?Constructor\]$/, kd = Function.prototype, Ld = Object.prototype, Id = kd.toString, Pd = Ld.hasOwnProperty, Ad = RegExp(
  "^" + Id.call(Pd).replace(Sd, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$"
);
function Nd(e) {
  if (!mn(e) || Ed(e))
    return !1;
  var t = si(e) ? Ad : Od;
  return t.test(On(e));
}
function Rd(e, t) {
  return e?.[t];
}
function kn(e, t) {
  var n = Rd(e, t);
  return Nd(n) ? n : void 0;
}
var Ho = kn(Wt, "WeakMap");
function $d(e, t, n) {
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
var Md = 800, Dd = 16, Fd = Date.now;
function xd(e) {
  var t = 0, n = 0;
  return function() {
    var r = Fd(), o = Dd - (r - n);
    if (n = r, o > 0) {
      if (++t >= Md)
        return arguments[0];
    } else
      t = 0;
    return e.apply(void 0, arguments);
  };
}
function zd(e) {
  return function() {
    return e;
  };
}
var Xr = function() {
  try {
    var e = kn(Object, "defineProperty");
    return e({}, "", {}), e;
  } catch {
  }
}(), Bd = Xr ? function(e, t) {
  return Xr(e, "toString", {
    configurable: !0,
    enumerable: !1,
    value: zd(t),
    writable: !0
  });
} : ai, Wd = xd(Bd);
function jd(e, t, n, r) {
  e.length;
  for (var o = n + 1; o--; )
    if (t(e[o], o, e))
      return o;
  return -1;
}
var Vd = 9007199254740991, Ud = /^(?:0|[1-9]\d*)$/;
function ya(e, t) {
  var n = typeof e;
  return t = t ?? Vd, !!t && (n == "number" || n != "symbol" && Ud.test(e)) && e > -1 && e % 1 == 0 && e < t;
}
function Hd(e, t, n) {
  t == "__proto__" && Xr ? Xr(e, t, {
    configurable: !0,
    enumerable: !0,
    value: n,
    writable: !0
  }) : e[t] = n;
}
function ba(e, t) {
  return e === t || e !== e && t !== t;
}
var Kd = Object.prototype, Gd = Kd.hasOwnProperty;
function Yd(e, t, n) {
  var r = e[t];
  (!(Gd.call(e, t) && ba(r, n)) || n === void 0 && !(t in e)) && Hd(e, t, n);
}
var vs = Math.max;
function Zd(e, t, n) {
  return t = vs(t === void 0 ? e.length - 1 : t, 0), function() {
    for (var r = arguments, o = -1, a = vs(r.length - t, 0), s = Array(a); ++o < a; )
      s[o] = r[t + o];
    o = -1;
    for (var l = Array(t + 1); ++o < t; )
      l[o] = r[o];
    return l[t] = n(s), $d(e, this, l);
  };
}
var qd = 9007199254740991;
function _a(e) {
  return typeof e == "number" && e > -1 && e % 1 == 0 && e <= qd;
}
function Xd(e) {
  return e != null && _a(e.length) && !si(e);
}
var Jd = Object.prototype;
function Qd(e) {
  var t = e && e.constructor, n = typeof t == "function" && t.prototype || Jd;
  return e === n;
}
function ef(e, t) {
  for (var n = -1, r = Array(e); ++n < e; )
    r[n] = t(n);
  return r;
}
var tf = "[object Arguments]";
function gs(e) {
  return Fn(e) && Yn(e) == tf;
}
var li = Object.prototype, nf = li.hasOwnProperty, rf = li.propertyIsEnumerable, wa = gs(/* @__PURE__ */ function() {
  return arguments;
}()) ? gs : function(e) {
  return Fn(e) && nf.call(e, "callee") && !rf.call(e, "callee");
};
function of() {
  return !1;
}
var ii = typeof exports == "object" && exports && !exports.nodeType && exports, hs = ii && typeof module == "object" && module && !module.nodeType && module, af = hs && hs.exports === ii, ys = af ? Wt.Buffer : void 0, sf = ys ? ys.isBuffer : void 0, Ko = sf || of, lf = "[object Arguments]", uf = "[object Array]", cf = "[object Boolean]", df = "[object Date]", ff = "[object Error]", pf = "[object Function]", mf = "[object Map]", vf = "[object Number]", gf = "[object Object]", hf = "[object RegExp]", yf = "[object Set]", bf = "[object String]", _f = "[object WeakMap]", wf = "[object ArrayBuffer]", Ef = "[object DataView]", Tf = "[object Float32Array]", Cf = "[object Float64Array]", Sf = "[object Int8Array]", Of = "[object Int16Array]", kf = "[object Int32Array]", Lf = "[object Uint8Array]", If = "[object Uint8ClampedArray]", Pf = "[object Uint16Array]", Af = "[object Uint32Array]", ke = {};
ke[Tf] = ke[Cf] = ke[Sf] = ke[Of] = ke[kf] = ke[Lf] = ke[If] = ke[Pf] = ke[Af] = !0;
ke[lf] = ke[uf] = ke[wf] = ke[cf] = ke[Ef] = ke[df] = ke[ff] = ke[pf] = ke[mf] = ke[vf] = ke[gf] = ke[hf] = ke[yf] = ke[bf] = ke[_f] = !1;
function Nf(e) {
  return Fn(e) && _a(e.length) && !!ke[Yn(e)];
}
function Rf(e) {
  return function(t) {
    return e(t);
  };
}
var ui = typeof exports == "object" && exports && !exports.nodeType && exports, rr = ui && typeof module == "object" && module && !module.nodeType && module, $f = rr && rr.exports === ui, No = $f && ni.process, bs = function() {
  try {
    var e = rr && rr.require && rr.require("util").types;
    return e || No && No.binding && No.binding("util");
  } catch {
  }
}(), _s = bs && bs.isTypedArray, ci = _s ? Rf(_s) : Nf, Mf = Object.prototype, Df = Mf.hasOwnProperty;
function Ff(e, t) {
  var n = Ot(e), r = !n && wa(e), o = !n && !r && Ko(e), a = !n && !r && !o && ci(e), s = n || r || o || a, l = s ? ef(e.length, String) : [], i = l.length;
  for (var u in e)
    Df.call(e, u) && !(s && // Safari 9 has enumerable `arguments.length` in strict mode.
    (u == "length" || // Node.js 0.10 has enumerable non-index properties on buffers.
    o && (u == "offset" || u == "parent") || // PhantomJS 2 has enumerable non-index properties on typed arrays.
    a && (u == "buffer" || u == "byteLength" || u == "byteOffset") || // Skip index properties.
    ya(u, i))) && l.push(u);
  return l;
}
function xf(e, t) {
  return function(n) {
    return e(t(n));
  };
}
var zf = xf(Object.keys, Object), Bf = Object.prototype, Wf = Bf.hasOwnProperty;
function jf(e) {
  if (!Qd(e))
    return zf(e);
  var t = [];
  for (var n in Object(e))
    Wf.call(e, n) && n != "constructor" && t.push(n);
  return t;
}
function di(e) {
  return Xd(e) ? Ff(e) : jf(e);
}
var Vf = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/, Uf = /^\w*$/;
function Ea(e, t) {
  if (Ot(e))
    return !1;
  var n = typeof e;
  return n == "number" || n == "symbol" || n == "boolean" || e == null || fo(e) ? !0 : Uf.test(e) || !Vf.test(e) || t != null && e in Object(t);
}
var fr = kn(Object, "create");
function Hf() {
  this.__data__ = fr ? fr(null) : {}, this.size = 0;
}
function Kf(e) {
  var t = this.has(e) && delete this.__data__[e];
  return this.size -= t ? 1 : 0, t;
}
var Gf = "__lodash_hash_undefined__", Yf = Object.prototype, Zf = Yf.hasOwnProperty;
function qf(e) {
  var t = this.__data__;
  if (fr) {
    var n = t[e];
    return n === Gf ? void 0 : n;
  }
  return Zf.call(t, e) ? t[e] : void 0;
}
var Xf = Object.prototype, Jf = Xf.hasOwnProperty;
function Qf(e) {
  var t = this.__data__;
  return fr ? t[e] !== void 0 : Jf.call(t, e);
}
var ep = "__lodash_hash_undefined__";
function tp(e, t) {
  var n = this.__data__;
  return this.size += this.has(e) ? 0 : 1, n[e] = fr && t === void 0 ? ep : t, this;
}
function Cn(e) {
  var t = -1, n = e == null ? 0 : e.length;
  for (this.clear(); ++t < n; ) {
    var r = e[t];
    this.set(r[0], r[1]);
  }
}
Cn.prototype.clear = Hf;
Cn.prototype.delete = Kf;
Cn.prototype.get = qf;
Cn.prototype.has = Qf;
Cn.prototype.set = tp;
function np() {
  this.__data__ = [], this.size = 0;
}
function po(e, t) {
  for (var n = e.length; n--; )
    if (ba(e[n][0], t))
      return n;
  return -1;
}
var rp = Array.prototype, op = rp.splice;
function ap(e) {
  var t = this.__data__, n = po(t, e);
  if (n < 0)
    return !1;
  var r = t.length - 1;
  return n == r ? t.pop() : op.call(t, n, 1), --this.size, !0;
}
function sp(e) {
  var t = this.__data__, n = po(t, e);
  return n < 0 ? void 0 : t[n][1];
}
function lp(e) {
  return po(this.__data__, e) > -1;
}
function ip(e, t) {
  var n = this.__data__, r = po(n, e);
  return r < 0 ? (++this.size, n.push([e, t])) : n[r][1] = t, this;
}
function nn(e) {
  var t = -1, n = e == null ? 0 : e.length;
  for (this.clear(); ++t < n; ) {
    var r = e[t];
    this.set(r[0], r[1]);
  }
}
nn.prototype.clear = np;
nn.prototype.delete = ap;
nn.prototype.get = sp;
nn.prototype.has = lp;
nn.prototype.set = ip;
var pr = kn(Wt, "Map");
function up() {
  this.size = 0, this.__data__ = {
    hash: new Cn(),
    map: new (pr || nn)(),
    string: new Cn()
  };
}
function cp(e) {
  var t = typeof e;
  return t == "string" || t == "number" || t == "symbol" || t == "boolean" ? e !== "__proto__" : e === null;
}
function mo(e, t) {
  var n = e.__data__;
  return cp(t) ? n[typeof t == "string" ? "string" : "hash"] : n.map;
}
function dp(e) {
  var t = mo(this, e).delete(e);
  return this.size -= t ? 1 : 0, t;
}
function fp(e) {
  return mo(this, e).get(e);
}
function pp(e) {
  return mo(this, e).has(e);
}
function mp(e, t) {
  var n = mo(this, e), r = n.size;
  return n.set(e, t), this.size += n.size == r ? 0 : 1, this;
}
function rn(e) {
  var t = -1, n = e == null ? 0 : e.length;
  for (this.clear(); ++t < n; ) {
    var r = e[t];
    this.set(r[0], r[1]);
  }
}
rn.prototype.clear = up;
rn.prototype.delete = dp;
rn.prototype.get = fp;
rn.prototype.has = pp;
rn.prototype.set = mp;
var vp = "Expected a function";
function Ta(e, t) {
  if (typeof e != "function" || t != null && typeof t != "function")
    throw new TypeError(vp);
  var n = function() {
    var r = arguments, o = t ? t.apply(this, r) : r[0], a = n.cache;
    if (a.has(o))
      return a.get(o);
    var s = e.apply(this, r);
    return n.cache = a.set(o, s) || a, s;
  };
  return n.cache = new (Ta.Cache || rn)(), n;
}
Ta.Cache = rn;
var gp = 500;
function hp(e) {
  var t = Ta(e, function(r) {
    return n.size === gp && n.clear(), r;
  }), n = t.cache;
  return t;
}
var yp = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g, bp = /\\(\\)?/g, _p = hp(function(e) {
  var t = [];
  return e.charCodeAt(0) === 46 && t.push(""), e.replace(yp, function(n, r, o, a) {
    t.push(o ? a.replace(bp, "$1") : r || n);
  }), t;
});
function wp(e) {
  return e == null ? "" : oi(e);
}
function vo(e, t) {
  return Ot(e) ? e : Ea(e, t) ? [e] : _p(wp(e));
}
function wr(e) {
  if (typeof e == "string" || fo(e))
    return e;
  var t = e + "";
  return t == "0" && 1 / e == -1 / 0 ? "-0" : t;
}
function Ca(e, t) {
  t = vo(t, e);
  for (var n = 0, r = t.length; e != null && n < r; )
    e = e[wr(t[n++])];
  return n && n == r ? e : void 0;
}
function dn(e, t, n) {
  var r = e == null ? void 0 : Ca(e, t);
  return r === void 0 ? n : r;
}
function fi(e, t) {
  for (var n = -1, r = t.length, o = e.length; ++n < r; )
    e[o + n] = t[n];
  return e;
}
var ws = xt ? xt.isConcatSpreadable : void 0;
function Ep(e) {
  return Ot(e) || wa(e) || !!(ws && e && e[ws]);
}
function Tp(e, t, n, r, o) {
  var a = -1, s = e.length;
  for (n || (n = Ep), o || (o = []); ++a < s; ) {
    var l = e[a];
    n(l) ? fi(o, l) : o[o.length] = l;
  }
  return o;
}
function Cp(e) {
  var t = e == null ? 0 : e.length;
  return t ? Tp(e) : [];
}
function Sp(e) {
  return Wd(Zd(e, void 0, Cp), e + "");
}
function cn() {
  if (!arguments.length)
    return [];
  var e = arguments[0];
  return Ot(e) ? e : [e];
}
function Op() {
  this.__data__ = new nn(), this.size = 0;
}
function kp(e) {
  var t = this.__data__, n = t.delete(e);
  return this.size = t.size, n;
}
function Lp(e) {
  return this.__data__.get(e);
}
function Ip(e) {
  return this.__data__.has(e);
}
var Pp = 200;
function Ap(e, t) {
  var n = this.__data__;
  if (n instanceof nn) {
    var r = n.__data__;
    if (!pr || r.length < Pp - 1)
      return r.push([e, t]), this.size = ++n.size, this;
    n = this.__data__ = new rn(r);
  }
  return n.set(e, t), this.size = n.size, this;
}
function Xt(e) {
  var t = this.__data__ = new nn(e);
  this.size = t.size;
}
Xt.prototype.clear = Op;
Xt.prototype.delete = kp;
Xt.prototype.get = Lp;
Xt.prototype.has = Ip;
Xt.prototype.set = Ap;
function Np(e, t) {
  for (var n = -1, r = e == null ? 0 : e.length, o = 0, a = []; ++n < r; ) {
    var s = e[n];
    t(s, n, e) && (a[o++] = s);
  }
  return a;
}
function Rp() {
  return [];
}
var $p = Object.prototype, Mp = $p.propertyIsEnumerable, Es = Object.getOwnPropertySymbols, Dp = Es ? function(e) {
  return e == null ? [] : (e = Object(e), Np(Es(e), function(t) {
    return Mp.call(e, t);
  }));
} : Rp;
function Fp(e, t, n) {
  var r = t(e);
  return Ot(e) ? r : fi(r, n(e));
}
function Ts(e) {
  return Fp(e, di, Dp);
}
var Go = kn(Wt, "DataView"), Yo = kn(Wt, "Promise"), Zo = kn(Wt, "Set"), Cs = "[object Map]", xp = "[object Object]", Ss = "[object Promise]", Os = "[object Set]", ks = "[object WeakMap]", Ls = "[object DataView]", zp = On(Go), Bp = On(pr), Wp = On(Yo), jp = On(Zo), Vp = On(Ho), sn = Yn;
(Go && sn(new Go(new ArrayBuffer(1))) != Ls || pr && sn(new pr()) != Cs || Yo && sn(Yo.resolve()) != Ss || Zo && sn(new Zo()) != Os || Ho && sn(new Ho()) != ks) && (sn = function(e) {
  var t = Yn(e), n = t == xp ? e.constructor : void 0, r = n ? On(n) : "";
  if (r)
    switch (r) {
      case zp:
        return Ls;
      case Bp:
        return Cs;
      case Wp:
        return Ss;
      case jp:
        return Os;
      case Vp:
        return ks;
    }
  return t;
});
var Is = Wt.Uint8Array, Up = "__lodash_hash_undefined__";
function Hp(e) {
  return this.__data__.set(e, Up), this;
}
function Kp(e) {
  return this.__data__.has(e);
}
function Jr(e) {
  var t = -1, n = e == null ? 0 : e.length;
  for (this.__data__ = new rn(); ++t < n; )
    this.add(e[t]);
}
Jr.prototype.add = Jr.prototype.push = Hp;
Jr.prototype.has = Kp;
function Gp(e, t) {
  for (var n = -1, r = e == null ? 0 : e.length; ++n < r; )
    if (t(e[n], n, e))
      return !0;
  return !1;
}
function Yp(e, t) {
  return e.has(t);
}
var Zp = 1, qp = 2;
function pi(e, t, n, r, o, a) {
  var s = n & Zp, l = e.length, i = t.length;
  if (l != i && !(s && i > l))
    return !1;
  var u = a.get(e), f = a.get(t);
  if (u && f)
    return u == t && f == e;
  var p = -1, m = !0, h = n & qp ? new Jr() : void 0;
  for (a.set(e, t), a.set(t, e); ++p < l; ) {
    var g = e[p], v = t[p];
    if (r)
      var E = s ? r(v, g, p, t, e, a) : r(g, v, p, e, t, a);
    if (E !== void 0) {
      if (E)
        continue;
      m = !1;
      break;
    }
    if (h) {
      if (!Gp(t, function(c, T) {
        if (!Yp(h, T) && (g === c || o(g, c, n, r, a)))
          return h.push(T);
      })) {
        m = !1;
        break;
      }
    } else if (!(g === v || o(g, v, n, r, a))) {
      m = !1;
      break;
    }
  }
  return a.delete(e), a.delete(t), m;
}
function Xp(e) {
  var t = -1, n = Array(e.size);
  return e.forEach(function(r, o) {
    n[++t] = [o, r];
  }), n;
}
function Jp(e) {
  var t = -1, n = Array(e.size);
  return e.forEach(function(r) {
    n[++t] = r;
  }), n;
}
var Qp = 1, em = 2, tm = "[object Boolean]", nm = "[object Date]", rm = "[object Error]", om = "[object Map]", am = "[object Number]", sm = "[object RegExp]", lm = "[object Set]", im = "[object String]", um = "[object Symbol]", cm = "[object ArrayBuffer]", dm = "[object DataView]", Ps = xt ? xt.prototype : void 0, Ro = Ps ? Ps.valueOf : void 0;
function fm(e, t, n, r, o, a, s) {
  switch (n) {
    case dm:
      if (e.byteLength != t.byteLength || e.byteOffset != t.byteOffset)
        return !1;
      e = e.buffer, t = t.buffer;
    case cm:
      return !(e.byteLength != t.byteLength || !a(new Is(e), new Is(t)));
    case tm:
    case nm:
    case am:
      return ba(+e, +t);
    case rm:
      return e.name == t.name && e.message == t.message;
    case sm:
    case im:
      return e == t + "";
    case om:
      var l = Xp;
    case lm:
      var i = r & Qp;
      if (l || (l = Jp), e.size != t.size && !i)
        return !1;
      var u = s.get(e);
      if (u)
        return u == t;
      r |= em, s.set(e, t);
      var f = pi(l(e), l(t), r, o, a, s);
      return s.delete(e), f;
    case um:
      if (Ro)
        return Ro.call(e) == Ro.call(t);
  }
  return !1;
}
var pm = 1, mm = Object.prototype, vm = mm.hasOwnProperty;
function gm(e, t, n, r, o, a) {
  var s = n & pm, l = Ts(e), i = l.length, u = Ts(t), f = u.length;
  if (i != f && !s)
    return !1;
  for (var p = i; p--; ) {
    var m = l[p];
    if (!(s ? m in t : vm.call(t, m)))
      return !1;
  }
  var h = a.get(e), g = a.get(t);
  if (h && g)
    return h == t && g == e;
  var v = !0;
  a.set(e, t), a.set(t, e);
  for (var E = s; ++p < i; ) {
    m = l[p];
    var c = e[m], T = t[m];
    if (r)
      var b = s ? r(T, c, m, t, e, a) : r(c, T, m, e, t, a);
    if (!(b === void 0 ? c === T || o(c, T, n, r, a) : b)) {
      v = !1;
      break;
    }
    E || (E = m == "constructor");
  }
  if (v && !E) {
    var w = e.constructor, O = t.constructor;
    w != O && "constructor" in e && "constructor" in t && !(typeof w == "function" && w instanceof w && typeof O == "function" && O instanceof O) && (v = !1);
  }
  return a.delete(e), a.delete(t), v;
}
var hm = 1, As = "[object Arguments]", Ns = "[object Array]", Ar = "[object Object]", ym = Object.prototype, Rs = ym.hasOwnProperty;
function bm(e, t, n, r, o, a) {
  var s = Ot(e), l = Ot(t), i = s ? Ns : sn(e), u = l ? Ns : sn(t);
  i = i == As ? Ar : i, u = u == As ? Ar : u;
  var f = i == Ar, p = u == Ar, m = i == u;
  if (m && Ko(e)) {
    if (!Ko(t))
      return !1;
    s = !0, f = !1;
  }
  if (m && !f)
    return a || (a = new Xt()), s || ci(e) ? pi(e, t, n, r, o, a) : fm(e, t, i, n, r, o, a);
  if (!(n & hm)) {
    var h = f && Rs.call(e, "__wrapped__"), g = p && Rs.call(t, "__wrapped__");
    if (h || g) {
      var v = h ? e.value() : e, E = g ? t.value() : t;
      return a || (a = new Xt()), o(v, E, n, r, a);
    }
  }
  return m ? (a || (a = new Xt()), gm(e, t, n, r, o, a)) : !1;
}
function go(e, t, n, r, o) {
  return e === t ? !0 : e == null || t == null || !Fn(e) && !Fn(t) ? e !== e && t !== t : bm(e, t, n, r, go, o);
}
var _m = 1, wm = 2;
function Em(e, t, n, r) {
  var o = n.length, a = o;
  if (e == null)
    return !a;
  for (e = Object(e); o--; ) {
    var s = n[o];
    if (s[2] ? s[1] !== e[s[0]] : !(s[0] in e))
      return !1;
  }
  for (; ++o < a; ) {
    s = n[o];
    var l = s[0], i = e[l], u = s[1];
    if (s[2]) {
      if (i === void 0 && !(l in e))
        return !1;
    } else {
      var f = new Xt(), p;
      if (!(p === void 0 ? go(u, i, _m | wm, r, f) : p))
        return !1;
    }
  }
  return !0;
}
function mi(e) {
  return e === e && !mn(e);
}
function Tm(e) {
  for (var t = di(e), n = t.length; n--; ) {
    var r = t[n], o = e[r];
    t[n] = [r, o, mi(o)];
  }
  return t;
}
function vi(e, t) {
  return function(n) {
    return n == null ? !1 : n[e] === t && (t !== void 0 || e in Object(n));
  };
}
function Cm(e) {
  var t = Tm(e);
  return t.length == 1 && t[0][2] ? vi(t[0][0], t[0][1]) : function(n) {
    return n === e || Em(n, e, t);
  };
}
function Sm(e, t) {
  return e != null && t in Object(e);
}
function Om(e, t, n) {
  t = vo(t, e);
  for (var r = -1, o = t.length, a = !1; ++r < o; ) {
    var s = wr(t[r]);
    if (!(a = e != null && n(e, s)))
      break;
    e = e[s];
  }
  return a || ++r != o ? a : (o = e == null ? 0 : e.length, !!o && _a(o) && ya(s, o) && (Ot(e) || wa(e)));
}
function gi(e, t) {
  return e != null && Om(e, t, Sm);
}
var km = 1, Lm = 2;
function Im(e, t) {
  return Ea(e) && mi(t) ? vi(wr(e), t) : function(n) {
    var r = dn(n, e);
    return r === void 0 && r === t ? gi(n, e) : go(t, r, km | Lm);
  };
}
function Pm(e) {
  return function(t) {
    return t?.[e];
  };
}
function Am(e) {
  return function(t) {
    return Ca(t, e);
  };
}
function Nm(e) {
  return Ea(e) ? Pm(wr(e)) : Am(e);
}
function Rm(e) {
  return typeof e == "function" ? e : e == null ? ai : typeof e == "object" ? Ot(e) ? Im(e[0], e[1]) : Cm(e) : Nm(e);
}
var $o = function() {
  return Wt.Date.now();
}, $m = "Expected a function", Mm = Math.max, Dm = Math.min;
function Fm(e, t, n) {
  var r, o, a, s, l, i, u = 0, f = !1, p = !1, m = !0;
  if (typeof e != "function")
    throw new TypeError($m);
  t = ps(t) || 0, mn(n) && (f = !!n.leading, p = "maxWait" in n, a = p ? Mm(ps(n.maxWait) || 0, t) : a, m = "trailing" in n ? !!n.trailing : m);
  function h(k) {
    var S = r, W = o;
    return r = o = void 0, u = k, s = e.apply(W, S), s;
  }
  function g(k) {
    return u = k, l = setTimeout(c, t), f ? h(k) : s;
  }
  function v(k) {
    var S = k - i, W = k - u, B = t - S;
    return p ? Dm(B, a - W) : B;
  }
  function E(k) {
    var S = k - i, W = k - u;
    return i === void 0 || S >= t || S < 0 || p && W >= a;
  }
  function c() {
    var k = $o();
    if (E(k))
      return T(k);
    l = setTimeout(c, v(k));
  }
  function T(k) {
    return l = void 0, m && r ? h(k) : (r = o = void 0, s);
  }
  function b() {
    l !== void 0 && clearTimeout(l), u = 0, r = i = o = l = void 0;
  }
  function w() {
    return l === void 0 ? s : T($o());
  }
  function O() {
    var k = $o(), S = E(k);
    if (r = arguments, o = this, i = k, S) {
      if (l === void 0)
        return g(i);
      if (p)
        return clearTimeout(l), l = setTimeout(c, t), h(i);
    }
    return l === void 0 && (l = setTimeout(c, t)), s;
  }
  return O.cancel = b, O.flush = w, O;
}
function xm(e, t, n) {
  var r = e == null ? 0 : e.length;
  if (!r)
    return -1;
  var o = r - 1;
  return jd(e, Rm(t), o);
}
function Qr(e) {
  for (var t = -1, n = e == null ? 0 : e.length, r = {}; ++t < n; ) {
    var o = e[t];
    r[o[0]] = o[1];
  }
  return r;
}
function or(e, t) {
  return go(e, t);
}
function ho(e) {
  return e == null;
}
function zm(e) {
  return e === void 0;
}
function Bm(e, t, n, r) {
  if (!mn(e))
    return e;
  t = vo(t, e);
  for (var o = -1, a = t.length, s = a - 1, l = e; l != null && ++o < a; ) {
    var i = wr(t[o]), u = n;
    if (i === "__proto__" || i === "constructor" || i === "prototype")
      return e;
    if (o != s) {
      var f = l[i];
      u = void 0, u === void 0 && (u = mn(f) ? f : ya(t[o + 1]) ? [] : {});
    }
    Yd(l, i, u), l = l[i];
  }
  return e;
}
function Wm(e, t, n) {
  for (var r = -1, o = t.length, a = {}; ++r < o; ) {
    var s = t[r], l = Ca(e, s);
    n(l, s) && Bm(a, vo(s, e), l);
  }
  return a;
}
function jm(e, t) {
  return Wm(e, t, function(n, r) {
    return gi(e, r);
  });
}
var Vm = Sp(function(e, t) {
  return e == null ? {} : jm(e, t);
});
const En = (e) => e === void 0, eo = (e) => typeof e == "boolean", je = (e) => typeof e == "number", Ct = (e) => typeof Element > "u" ? !1 : e instanceof Element, Um = (e) => nt(e) ? !Number.isNaN(Number(e)) : !1;
var Hm = Object.defineProperty, Km = Object.defineProperties, Gm = Object.getOwnPropertyDescriptors, $s = Object.getOwnPropertySymbols, Ym = Object.prototype.hasOwnProperty, Zm = Object.prototype.propertyIsEnumerable, Ms = (e, t, n) => t in e ? Hm(e, t, { enumerable: !0, configurable: !0, writable: !0, value: n }) : e[t] = n, qm = (e, t) => {
  for (var n in t || (t = {}))
    Ym.call(t, n) && Ms(e, n, t[n]);
  if ($s)
    for (var n of $s(t))
      Zm.call(t, n) && Ms(e, n, t[n]);
  return e;
}, Xm = (e, t) => Km(e, Gm(t));
function Jm(e, t) {
  var n;
  const r = fn();
  return Xl(() => {
    r.value = e();
  }, Xm(qm({}, t), {
    flush: (n = void 0) != null ? n : "sync"
  })), ma(r);
}
var Ds;
const De = typeof window < "u", Qm = (e) => typeof e == "string", hi = () => {
}, qo = De && ((Ds = window?.navigator) == null ? void 0 : Ds.userAgent) && /iP(ad|hone|od)/.test(window.navigator.userAgent);
function Sa(e) {
  return typeof e == "function" ? e() : d(e);
}
function ev(e) {
  return e;
}
function Er(e) {
  return bc() ? (_c(e), !0) : !1;
}
function tv(e, t = !0) {
  Qe() ? Fe(e) : t ? e() : Ne(e);
}
function yi(e, t, n = {}) {
  const {
    immediate: r = !0
  } = n, o = M(!1);
  let a = null;
  function s() {
    a && (clearTimeout(a), a = null);
  }
  function l() {
    o.value = !1, s();
  }
  function i(...u) {
    s(), o.value = !0, a = setTimeout(() => {
      o.value = !1, a = null, e(...u);
    }, Sa(t));
  }
  return r && (o.value = !0, De && i()), Er(l), {
    isPending: ma(o),
    start: i,
    stop: l
  };
}
function Kt(e) {
  var t;
  const n = Sa(e);
  return (t = n?.$el) != null ? t : n;
}
const yo = De ? window : void 0;
function St(...e) {
  let t, n, r, o;
  if (Qm(e[0]) || Array.isArray(e[0]) ? ([n, r, o] = e, t = yo) : [t, n, r, o] = e, !t)
    return hi;
  Array.isArray(n) || (n = [n]), Array.isArray(r) || (r = [r]);
  const a = [], s = () => {
    a.forEach((f) => f()), a.length = 0;
  }, l = (f, p, m, h) => (f.addEventListener(p, m, h), () => f.removeEventListener(p, m, h)), i = ce(() => [Kt(t), Sa(o)], ([f, p]) => {
    s(), f && a.push(...n.flatMap((m) => r.map((h) => l(f, m, h, p))));
  }, { immediate: !0, flush: "post" }), u = () => {
    i(), s();
  };
  return Er(u), u;
}
let Fs = !1;
function nv(e, t, n = {}) {
  const { window: r = yo, ignore: o = [], capture: a = !0, detectIframe: s = !1 } = n;
  if (!r)
    return;
  qo && !Fs && (Fs = !0, Array.from(r.document.body.children).forEach((m) => m.addEventListener("click", hi)));
  let l = !0;
  const i = (m) => o.some((h) => {
    if (typeof h == "string")
      return Array.from(r.document.querySelectorAll(h)).some((g) => g === m.target || m.composedPath().includes(g));
    {
      const g = Kt(h);
      return g && (m.target === g || m.composedPath().includes(g));
    }
  }), f = [
    St(r, "click", (m) => {
      const h = Kt(e);
      if (!(!h || h === m.target || m.composedPath().includes(h))) {
        if (m.detail === 0 && (l = !i(m)), !l) {
          l = !0;
          return;
        }
        t(m);
      }
    }, { passive: !0, capture: a }),
    St(r, "pointerdown", (m) => {
      const h = Kt(e);
      h && (l = !m.composedPath().includes(h) && !i(m));
    }, { passive: !0 }),
    s && St(r, "blur", (m) => {
      var h;
      const g = Kt(e);
      ((h = r.document.activeElement) == null ? void 0 : h.tagName) === "IFRAME" && !g?.contains(r.document.activeElement) && t(m);
    })
  ].filter(Boolean);
  return () => f.forEach((m) => m());
}
function bi(e, t = !1) {
  const n = M(), r = () => n.value = !!e();
  return r(), tv(r, t), n;
}
const xs = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {}, zs = "__vueuse_ssr_handlers__";
xs[zs] = xs[zs] || {};
var Bs = Object.getOwnPropertySymbols, rv = Object.prototype.hasOwnProperty, ov = Object.prototype.propertyIsEnumerable, av = (e, t) => {
  var n = {};
  for (var r in e)
    rv.call(e, r) && t.indexOf(r) < 0 && (n[r] = e[r]);
  if (e != null && Bs)
    for (var r of Bs(e))
      t.indexOf(r) < 0 && ov.call(e, r) && (n[r] = e[r]);
  return n;
};
function At(e, t, n = {}) {
  const r = n, { window: o = yo } = r, a = av(r, ["window"]);
  let s;
  const l = bi(() => o && "ResizeObserver" in o), i = () => {
    s && (s.disconnect(), s = void 0);
  }, u = ce(() => Kt(e), (p) => {
    i(), l.value && o && p && (s = new ResizeObserver(t), s.observe(p, a));
  }, { immediate: !0, flush: "post" }), f = () => {
    i(), u();
  };
  return Er(f), {
    isSupported: l,
    stop: f
  };
}
var Ws = Object.getOwnPropertySymbols, sv = Object.prototype.hasOwnProperty, lv = Object.prototype.propertyIsEnumerable, iv = (e, t) => {
  var n = {};
  for (var r in e)
    sv.call(e, r) && t.indexOf(r) < 0 && (n[r] = e[r]);
  if (e != null && Ws)
    for (var r of Ws(e))
      t.indexOf(r) < 0 && lv.call(e, r) && (n[r] = e[r]);
  return n;
};
function uv(e, t, n = {}) {
  const r = n, { window: o = yo } = r, a = iv(r, ["window"]);
  let s;
  const l = bi(() => o && "MutationObserver" in o), i = () => {
    s && (s.disconnect(), s = void 0);
  }, u = ce(() => Kt(e), (p) => {
    i(), l.value && o && p && (s = new MutationObserver(t), s.observe(p, a));
  }, { immediate: !0 }), f = () => {
    i(), u();
  };
  return Er(f), {
    isSupported: l,
    stop: f
  };
}
var js;
(function(e) {
  e.UP = "UP", e.RIGHT = "RIGHT", e.DOWN = "DOWN", e.LEFT = "LEFT", e.NONE = "NONE";
})(js || (js = {}));
var cv = Object.defineProperty, Vs = Object.getOwnPropertySymbols, dv = Object.prototype.hasOwnProperty, fv = Object.prototype.propertyIsEnumerable, Us = (e, t, n) => t in e ? cv(e, t, { enumerable: !0, configurable: !0, writable: !0, value: n }) : e[t] = n, pv = (e, t) => {
  for (var n in t || (t = {}))
    dv.call(t, n) && Us(e, n, t[n]);
  if (Vs)
    for (var n of Vs(t))
      fv.call(t, n) && Us(e, n, t[n]);
  return e;
};
const mv = {
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
pv({
  linear: ev
}, mv);
class vv extends Error {
  constructor(t) {
    super(t), this.name = "ElementPlusError";
  }
}
function gv(e, t) {
  throw new vv(`[${e}] ${t}`);
}
const Hs = {
  current: 0
}, Ks = M(0), _i = 2e3, Gs = Symbol("elZIndexContextKey"), wi = Symbol("zIndexContextKey"), Ei = (e) => {
  const t = Qe() ? Ce(Gs, Hs) : Hs, n = e || (Qe() ? Ce(wi, void 0) : void 0), r = L(() => {
    const s = d(n);
    return je(s) ? s : _i;
  }), o = L(() => r.value + Ks.value), a = () => (t.current++, Ks.value = t.current, o.value);
  return !De && Ce(Gs), {
    initialZIndex: r,
    currentZIndex: o,
    nextZIndex: a
  };
};
var hv = {
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
const yv = (e) => (t, n) => bv(t, n, d(e)), bv = (e, t, n) => dn(n, e, e).replace(/\{(\w+)\}/g, (r, o) => {
  var a;
  return `${(a = t?.[o]) != null ? a : `{${o}}`}`;
}), _v = (e) => {
  const t = L(() => d(e).name), n = Vr(e) ? e : M(e);
  return {
    lang: t,
    locale: n,
    t: yv(e)
  };
}, Ti = Symbol("localeContextKey"), Ci = (e) => {
  const t = e || Ce(Ti, M());
  return _v(L(() => t.value || hv));
}, Si = "__epPropKey", re = (e) => e, wv = (e) => tt(e) && !!e[Si], bo = (e, t) => {
  if (!tt(e) || wv(e))
    return e;
  const { values: n, required: r, default: o, type: a, validator: s } = e, i = {
    type: a,
    required: !!r,
    validator: n || s ? (u) => {
      let f = !1, p = [];
      if (n && (p = Array.from(n), is(e, "default") && p.push(o), f || (f = p.includes(u))), s && (f || (f = s(u))), !f && p.length > 0) {
        const m = [...new Set(p)].map((h) => JSON.stringify(h)).join(", ");
        wc(`Invalid prop: validation failed${t ? ` for prop "${t}"` : ""}. Expected one of [${m}], got value ${JSON.stringify(u)}.`);
      }
      return f;
    } : void 0,
    [Si]: !0
  };
  return is(e, "default") && (i.default = o), i;
}, Oe = (e) => Qr(Object.entries(e).map(([t, n]) => [
  t,
  bo(n, t)
])), Oi = ["", "default", "small", "large"], Oa = bo({
  type: String,
  values: Oi,
  required: !1
}), ki = Symbol("size"), Ev = () => {
  const e = Ce(ki, {});
  return L(() => d(e.size) || "");
}, Li = Symbol("emptyValuesContextKey"), Tv = ["", void 0, null], Cv = void 0, Ii = Oe({
  emptyValues: Array,
  valueOnClear: {
    type: [String, Number, Boolean, Function],
    default: void 0,
    validator: (e) => We(e) ? !e() : !e
  }
}), Sv = (e, t) => {
  const n = Qe() ? Ce(Li, M({})) : M({}), r = L(() => e.emptyValues || n.value.emptyValues || Tv), o = L(() => We(e.valueOnClear) ? e.valueOnClear() : e.valueOnClear !== void 0 ? e.valueOnClear : We(n.value.valueOnClear) ? n.value.valueOnClear() : n.value.valueOnClear !== void 0 ? n.value.valueOnClear : Cv), a = (s) => r.value.includes(s);
  return r.value.includes(o.value), {
    emptyValues: r,
    valueOnClear: o,
    isEmptyValue: a
  };
}, Ys = (e) => Object.keys(e), to = M();
function Pi(e, t = void 0) {
  return Qe() ? Ce(ei, to) : to;
}
function Ai(e, t) {
  const n = Pi(), r = Me(e, L(() => {
    var l;
    return ((l = n.value) == null ? void 0 : l.namespace) || Ur;
  })), o = Ci(L(() => {
    var l;
    return (l = n.value) == null ? void 0 : l.locale;
  })), a = Ei(L(() => {
    var l;
    return ((l = n.value) == null ? void 0 : l.zIndex) || _i;
  })), s = L(() => {
    var l;
    return d(t) || ((l = n.value) == null ? void 0 : l.size) || "";
  });
  return Ni(L(() => d(n) || {})), {
    ns: r,
    locale: o,
    zIndex: a,
    size: s
  };
}
const Ni = (e, t, n = !1) => {
  var r;
  const o = !!Qe(), a = o ? Pi() : void 0, s = (r = void 0) != null ? r : o ? Ft : void 0;
  if (!s)
    return;
  const l = L(() => {
    const i = d(e);
    return a?.value ? Ov(a.value, i) : i;
  });
  return s(ei, l), s(Ti, L(() => l.value.locale)), s(ti, L(() => l.value.namespace)), s(wi, L(() => l.value.zIndex)), s(ki, {
    size: L(() => l.value.size || "")
  }), s(Li, L(() => ({
    emptyValues: l.value.emptyValues,
    valueOnClear: l.value.valueOnClear
  }))), (n || !to.value) && (to.value = l.value), l;
}, Ov = (e, t) => {
  const n = [.../* @__PURE__ */ new Set([...Ys(e), ...Ys(t)])], r = {};
  for (const o of n)
    r[o] = t[o] !== void 0 ? t[o] : e[o];
  return r;
}, Ht = "update:modelValue", no = "change", Zs = "input";
var Le = (e, t) => {
  const n = e.__vccOpts || e;
  for (const [r, o] of t)
    n[r] = o;
  return n;
};
function mr(e, t = "px") {
  if (!e)
    return "";
  if (je(e) || Um(e))
    return `${e}${t}`;
  if (nt(e))
    return e;
}
function kv(e, t) {
  if (!De)
    return;
  if (!t) {
    e.scrollTop = 0;
    return;
  }
  const n = [];
  let r = t.offsetParent;
  for (; r !== null && e !== r && e.contains(r); )
    n.push(r), r = r.offsetParent;
  const o = t.offsetTop + n.reduce((i, u) => i + u.offsetTop, 0), a = o + t.offsetHeight, s = e.scrollTop, l = s + e.clientHeight;
  o < s ? e.scrollTop = o : a > l && (e.scrollTop = a - e.clientHeight);
}
const kt = (e, t) => {
  if (e.install = (n) => {
    for (const r of [e, ...Object.values(t ?? {})])
      n.component(r.name, r);
  }, t)
    for (const [n, r] of Object.entries(t))
      e[n] = r;
  return e;
}, Ri = (e, t) => (e.install = (n) => {
  e._context = n._context, n.config.globalProperties[t] = e;
}, e), ka = (e) => (e.install = dr, e), Lv = Oe({
  size: {
    type: re([Number, String])
  },
  color: {
    type: String
  }
}), Iv = Y({
  name: "ElIcon",
  inheritAttrs: !1
}), Pv = /* @__PURE__ */ Y({
  ...Iv,
  props: Lv,
  setup(e) {
    const t = e, n = Me("icon"), r = L(() => {
      const { size: o, color: a } = t;
      return !o && !a ? {} : {
        fontSize: En(o) ? void 0 : mr(o),
        "--color": a
      };
    });
    return (o, a) => (P(), x("i", pn({
      class: d(n).b(),
      style: d(r)
    }, o.$attrs), [
      ie(o.$slots, "default")
    ], 16));
  }
});
var Av = /* @__PURE__ */ Le(Pv, [["__file", "icon.vue"]]);
const ct = kt(Av);
/*! Element Plus Icons Vue v2.3.1 */
var Nv = /* @__PURE__ */ Y({
  name: "ArrowDown",
  __name: "arrow-down",
  setup(e) {
    return (t, n) => (P(), x("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 1024 1024"
    }, [
      N("path", {
        fill: "currentColor",
        d: "M831.872 340.864 512 652.672 192.128 340.864a30.592 30.592 0 0 0-42.752 0 29.12 29.12 0 0 0 0 41.6L489.664 714.24a32 32 0 0 0 44.672 0l340.288-331.712a29.12 29.12 0 0 0 0-41.728 30.592 30.592 0 0 0-42.752 0z"
      })
    ]));
  }
}), Rv = Nv, $v = /* @__PURE__ */ Y({
  name: "Check",
  __name: "check",
  setup(e) {
    return (t, n) => (P(), x("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 1024 1024"
    }, [
      N("path", {
        fill: "currentColor",
        d: "M406.656 706.944 195.84 496.256a32 32 0 1 0-45.248 45.248l256 256 512-512a32 32 0 0 0-45.248-45.248L406.592 706.944z"
      })
    ]));
  }
}), Mv = $v, Dv = /* @__PURE__ */ Y({
  name: "CircleCheck",
  __name: "circle-check",
  setup(e) {
    return (t, n) => (P(), x("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 1024 1024"
    }, [
      N("path", {
        fill: "currentColor",
        d: "M512 896a384 384 0 1 0 0-768 384 384 0 0 0 0 768m0 64a448 448 0 1 1 0-896 448 448 0 0 1 0 896"
      }),
      N("path", {
        fill: "currentColor",
        d: "M745.344 361.344a32 32 0 0 1 45.312 45.312l-288 288a32 32 0 0 1-45.312 0l-160-160a32 32 0 1 1 45.312-45.312L480 626.752l265.344-265.408z"
      })
    ]));
  }
}), $i = Dv, Fv = /* @__PURE__ */ Y({
  name: "CircleCloseFilled",
  __name: "circle-close-filled",
  setup(e) {
    return (t, n) => (P(), x("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 1024 1024"
    }, [
      N("path", {
        fill: "currentColor",
        d: "M512 64a448 448 0 1 1 0 896 448 448 0 0 1 0-896m0 393.664L407.936 353.6a38.4 38.4 0 1 0-54.336 54.336L457.664 512 353.6 616.064a38.4 38.4 0 1 0 54.336 54.336L512 566.336 616.064 670.4a38.4 38.4 0 1 0 54.336-54.336L566.336 512 670.4 407.936a38.4 38.4 0 1 0-54.336-54.336z"
      })
    ]));
  }
}), xv = Fv, zv = /* @__PURE__ */ Y({
  name: "CircleClose",
  __name: "circle-close",
  setup(e) {
    return (t, n) => (P(), x("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 1024 1024"
    }, [
      N("path", {
        fill: "currentColor",
        d: "m466.752 512-90.496-90.496a32 32 0 0 1 45.248-45.248L512 466.752l90.496-90.496a32 32 0 1 1 45.248 45.248L557.248 512l90.496 90.496a32 32 0 1 1-45.248 45.248L512 557.248l-90.496 90.496a32 32 0 0 1-45.248-45.248z"
      }),
      N("path", {
        fill: "currentColor",
        d: "M512 896a384 384 0 1 0 0-768 384 384 0 0 0 0 768m0 64a448 448 0 1 1 0-896 448 448 0 0 1 0 896"
      })
    ]));
  }
}), _o = zv, Bv = /* @__PURE__ */ Y({
  name: "Close",
  __name: "close",
  setup(e) {
    return (t, n) => (P(), x("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 1024 1024"
    }, [
      N("path", {
        fill: "currentColor",
        d: "M764.288 214.592 512 466.88 259.712 214.592a31.936 31.936 0 0 0-45.12 45.12L466.752 512 214.528 764.224a31.936 31.936 0 1 0 45.12 45.184L512 557.184l252.288 252.288a31.936 31.936 0 0 0 45.12-45.12L557.12 512.064l252.288-252.352a31.936 31.936 0 1 0-45.12-45.184z"
      })
    ]));
  }
}), vr = Bv, Wv = /* @__PURE__ */ Y({
  name: "Hide",
  __name: "hide",
  setup(e) {
    return (t, n) => (P(), x("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 1024 1024"
    }, [
      N("path", {
        fill: "currentColor",
        d: "M876.8 156.8c0-9.6-3.2-16-9.6-22.4-6.4-6.4-12.8-9.6-22.4-9.6-9.6 0-16 3.2-22.4 9.6L736 220.8c-64-32-137.6-51.2-224-60.8-160 16-288 73.6-377.6 176C44.8 438.4 0 496 0 512s48 73.6 134.4 176c22.4 25.6 44.8 48 73.6 67.2l-86.4 89.6c-6.4 6.4-9.6 12.8-9.6 22.4 0 9.6 3.2 16 9.6 22.4 6.4 6.4 12.8 9.6 22.4 9.6 9.6 0 16-3.2 22.4-9.6l704-710.4c3.2-6.4 6.4-12.8 6.4-22.4Zm-646.4 528c-76.8-70.4-128-128-153.6-172.8 28.8-48 80-105.6 153.6-172.8C304 272 400 230.4 512 224c64 3.2 124.8 19.2 176 44.8l-54.4 54.4C598.4 300.8 560 288 512 288c-64 0-115.2 22.4-160 64s-64 96-64 160c0 48 12.8 89.6 35.2 124.8L256 707.2c-9.6-6.4-19.2-16-25.6-22.4Zm140.8-96c-12.8-22.4-19.2-48-19.2-76.8 0-44.8 16-83.2 48-112 32-28.8 67.2-48 112-48 28.8 0 54.4 6.4 73.6 19.2zM889.599 336c-12.8-16-28.8-28.8-41.6-41.6l-48 48c73.6 67.2 124.8 124.8 150.4 169.6-28.8 48-80 105.6-153.6 172.8-73.6 67.2-172.8 108.8-284.8 115.2-51.2-3.2-99.2-12.8-140.8-28.8l-48 48c57.6 22.4 118.4 38.4 188.8 44.8 160-16 288-73.6 377.6-176C979.199 585.6 1024 528 1024 512s-48.001-73.6-134.401-176Z"
      }),
      N("path", {
        fill: "currentColor",
        d: "M511.998 672c-12.8 0-25.6-3.2-38.4-6.4l-51.2 51.2c28.8 12.8 57.6 19.2 89.6 19.2 64 0 115.2-22.4 160-64 41.6-41.6 64-96 64-160 0-32-6.4-64-19.2-89.6l-51.2 51.2c3.2 12.8 6.4 25.6 6.4 38.4 0 44.8-16 83.2-48 112-32 28.8-67.2 48-112 48Z"
      })
    ]));
  }
}), jv = Wv, Vv = /* @__PURE__ */ Y({
  name: "InfoFilled",
  __name: "info-filled",
  setup(e) {
    return (t, n) => (P(), x("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 1024 1024"
    }, [
      N("path", {
        fill: "currentColor",
        d: "M512 64a448 448 0 1 1 0 896.064A448 448 0 0 1 512 64m67.2 275.072c33.28 0 60.288-23.104 60.288-57.344s-27.072-57.344-60.288-57.344c-33.28 0-60.16 23.104-60.16 57.344s26.88 57.344 60.16 57.344M590.912 699.2c0-6.848 2.368-24.64 1.024-34.752l-52.608 60.544c-10.88 11.456-24.512 19.392-30.912 17.28a12.992 12.992 0 0 1-8.256-14.72l87.68-276.992c7.168-35.136-12.544-67.2-54.336-71.296-44.096 0-108.992 44.736-148.48 101.504 0 6.784-1.28 23.68.064 33.792l52.544-60.608c10.88-11.328 23.552-19.328 29.952-17.152a12.8 12.8 0 0 1 7.808 16.128L388.48 728.576c-10.048 32.256 8.96 63.872 55.04 71.04 67.84 0 107.904-43.648 147.456-100.416z"
      })
    ]));
  }
}), Uv = Vv, Hv = /* @__PURE__ */ Y({
  name: "Loading",
  __name: "loading",
  setup(e) {
    return (t, n) => (P(), x("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 1024 1024"
    }, [
      N("path", {
        fill: "currentColor",
        d: "M512 64a32 32 0 0 1 32 32v192a32 32 0 0 1-64 0V96a32 32 0 0 1 32-32m0 640a32 32 0 0 1 32 32v192a32 32 0 1 1-64 0V736a32 32 0 0 1 32-32m448-192a32 32 0 0 1-32 32H736a32 32 0 1 1 0-64h192a32 32 0 0 1 32 32m-640 0a32 32 0 0 1-32 32H96a32 32 0 0 1 0-64h192a32 32 0 0 1 32 32M195.2 195.2a32 32 0 0 1 45.248 0L376.32 331.008a32 32 0 0 1-45.248 45.248L195.2 240.448a32 32 0 0 1 0-45.248zm452.544 452.544a32 32 0 0 1 45.248 0L828.8 783.552a32 32 0 0 1-45.248 45.248L647.744 692.992a32 32 0 0 1 0-45.248zM828.8 195.264a32 32 0 0 1 0 45.184L692.992 376.32a32 32 0 0 1-45.248-45.248l135.808-135.808a32 32 0 0 1 45.248 0m-452.544 452.48a32 32 0 0 1 0 45.248L240.448 828.8a32 32 0 0 1-45.248-45.248l135.808-135.808a32 32 0 0 1 45.248 0z"
      })
    ]));
  }
}), Kv = Hv, Gv = /* @__PURE__ */ Y({
  name: "PictureFilled",
  __name: "picture-filled",
  setup(e) {
    return (t, n) => (P(), x("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 1024 1024"
    }, [
      N("path", {
        fill: "currentColor",
        d: "M96 896a32 32 0 0 1-32-32V160a32 32 0 0 1 32-32h832a32 32 0 0 1 32 32v704a32 32 0 0 1-32 32zm315.52-228.48-68.928-68.928a32 32 0 0 0-45.248 0L128 768.064h778.688l-242.112-290.56a32 32 0 0 0-49.216 0L458.752 665.408a32 32 0 0 1-47.232 2.112M256 384a96 96 0 1 0 192.064-.064A96 96 0 0 0 256 384"
      })
    ]));
  }
}), Yv = Gv, Zv = /* @__PURE__ */ Y({
  name: "SuccessFilled",
  __name: "success-filled",
  setup(e) {
    return (t, n) => (P(), x("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 1024 1024"
    }, [
      N("path", {
        fill: "currentColor",
        d: "M512 64a448 448 0 1 1 0 896 448 448 0 0 1 0-896m-55.808 536.384-99.52-99.584a38.4 38.4 0 1 0-54.336 54.336l126.72 126.72a38.272 38.272 0 0 0 54.336 0l262.4-262.464a38.4 38.4 0 1 0-54.272-54.336z"
      })
    ]));
  }
}), qv = Zv, Xv = /* @__PURE__ */ Y({
  name: "View",
  __name: "view",
  setup(e) {
    return (t, n) => (P(), x("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 1024 1024"
    }, [
      N("path", {
        fill: "currentColor",
        d: "M512 160c320 0 512 352 512 352S832 864 512 864 0 512 0 512s192-352 512-352m0 64c-225.28 0-384.128 208.064-436.8 288 52.608 79.872 211.456 288 436.8 288 225.28 0 384.128-208.064 436.8-288-52.608-79.872-211.456-288-436.8-288zm0 64a224 224 0 1 1 0 448 224 224 0 0 1 0-448m0 64a160.192 160.192 0 0 0-160 160c0 88.192 71.744 160 160 160s160-71.808 160-160-71.744-160-160-160"
      })
    ]));
  }
}), Jv = Xv, Qv = /* @__PURE__ */ Y({
  name: "WarningFilled",
  __name: "warning-filled",
  setup(e) {
    return (t, n) => (P(), x("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 1024 1024"
    }, [
      N("path", {
        fill: "currentColor",
        d: "M512 64a448 448 0 1 1 0 896 448 448 0 0 1 0-896m0 192a58.432 58.432 0 0 0-58.24 63.744l23.36 256.384a35.072 35.072 0 0 0 69.76 0l23.296-256.384A58.432 58.432 0 0 0 512 256m0 512a51.2 51.2 0 1 0 0-102.4 51.2 51.2 0 0 0 0 102.4"
      })
    ]));
  }
}), Mi = Qv;
const xn = re([
  String,
  Object,
  Function
]), eg = {
  Close: vr
}, tg = {
  Close: vr
}, ro = {
  success: qv,
  warning: Mi,
  error: xv,
  info: Uv
}, Di = {
  validating: Kv,
  success: $i,
  error: _o
}, ng = () => De && /firefox/i.test(window.navigator.userAgent);
let et;
const rg = {
  height: "0",
  visibility: "hidden",
  overflow: ng() ? "" : "hidden",
  position: "absolute",
  "z-index": "-1000",
  top: "0",
  right: "0"
}, og = [
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
function ag(e) {
  const t = window.getComputedStyle(e), n = t.getPropertyValue("box-sizing"), r = Number.parseFloat(t.getPropertyValue("padding-bottom")) + Number.parseFloat(t.getPropertyValue("padding-top")), o = Number.parseFloat(t.getPropertyValue("border-bottom-width")) + Number.parseFloat(t.getPropertyValue("border-top-width"));
  return { contextStyle: og.map((s) => [
    s,
    t.getPropertyValue(s)
  ]), paddingSize: r, borderSize: o, boxSizing: n };
}
function qs(e, t = 1, n) {
  var r;
  et || (et = document.createElement("textarea"), document.body.appendChild(et));
  const { paddingSize: o, borderSize: a, boxSizing: s, contextStyle: l } = ag(e);
  l.forEach(([p, m]) => et?.style.setProperty(p, m)), Object.entries(rg).forEach(([p, m]) => et?.style.setProperty(p, m, "important")), et.value = e.value || e.placeholder || "";
  let i = et.scrollHeight;
  const u = {};
  s === "border-box" ? i = i + a : s === "content-box" && (i = i - o), et.value = "";
  const f = et.scrollHeight - o;
  if (je(t)) {
    let p = f * t;
    s === "border-box" && (p = p + o + a), i = Math.max(p, i), u.minHeight = `${p}px`;
  }
  if (je(n)) {
    let p = f * n;
    s === "border-box" && (p = p + o + a), i = Math.min(p, i);
  }
  return u.height = `${i}px`, (r = et.parentNode) == null || r.removeChild(et), et = void 0, u;
}
const Fi = (e) => e, sg = Oe({
  ariaLabel: String,
  ariaOrientation: {
    type: String,
    values: ["horizontal", "vertical", "undefined"]
  },
  ariaControls: String
}), Tr = (e) => Vm(sg, e), lg = Oe({
  id: {
    type: String,
    default: void 0
  },
  size: Oa,
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
    type: xn
  },
  prefixIcon: {
    type: xn
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
    default: () => Fi({})
  },
  autofocus: Boolean,
  rows: {
    type: Number,
    default: 2
  },
  ...Tr(["ariaLabel"])
}), ig = {
  [Ht]: (e) => nt(e),
  input: (e) => nt(e),
  change: (e) => nt(e),
  focus: (e) => e instanceof FocusEvent,
  blur: (e) => e instanceof FocusEvent,
  clear: () => !0,
  mouseleave: (e) => e instanceof MouseEvent,
  mouseenter: (e) => e instanceof MouseEvent,
  keydown: (e) => e instanceof Event,
  compositionstart: (e) => e instanceof CompositionEvent,
  compositionupdate: (e) => e instanceof CompositionEvent,
  compositionend: (e) => e instanceof CompositionEvent
}, ug = ["class", "style"], cg = /^on[A-Z]/, dg = (e = {}) => {
  const { excludeListeners: t = !1, excludeKeys: n } = e, r = L(() => (n?.value || []).concat(ug)), o = Qe();
  return o ? L(() => {
    var a;
    return Qr(Object.entries((a = o.proxy) == null ? void 0 : a.$attrs).filter(([s]) => !r.value.includes(s) && !(t && cg.test(s))));
  }) : L(() => ({}));
}, La = Symbol("formContextKey"), oo = Symbol("formItemContextKey"), Xs = {
  prefix: Math.floor(Math.random() * 1e4),
  current: 0
}, fg = Symbol("elIdInjection"), xi = () => Qe() ? Ce(fg, Xs) : Xs, wo = (e) => {
  const t = xi(), n = ha();
  return Jm(() => d(e) || `${n.value}-id-${t.prefix}-${t.current++}`);
}, zi = () => {
  const e = Ce(La, void 0), t = Ce(oo, void 0);
  return {
    form: e,
    formItem: t
  };
}, Bi = (e, {
  formItemContext: t,
  disableIdGeneration: n,
  disableIdManagement: r
}) => {
  n || (n = M(!1)), r || (r = M(!1));
  const o = M();
  let a;
  const s = L(() => {
    var l;
    return !!(!(e.label || e.ariaLabel) && t && t.inputIds && ((l = t.inputIds) == null ? void 0 : l.length) <= 1);
  });
  return Fe(() => {
    a = ce([Nt(e, "id"), n], ([l, i]) => {
      const u = l ?? (i ? void 0 : wo().value);
      u !== o.value && (t?.removeInputId && (o.value && t.removeInputId(o.value), !r?.value && !i && u && t.addInputId(u)), o.value = u);
    }, { immediate: !0 });
  }), va(() => {
    a && a(), t?.removeInputId && o.value && t.removeInputId(o.value);
  }), {
    isLabeledByFormItem: s,
    inputId: o
  };
}, Wi = (e) => {
  const t = Qe();
  return L(() => {
    var n, r;
    return (r = (n = t?.proxy) == null ? void 0 : n.$props) == null ? void 0 : r[e];
  });
}, Ia = (e, t = {}) => {
  const n = M(void 0), r = t.prop ? n : Wi("size"), o = t.global ? n : Ev(), a = t.form ? { size: void 0 } : Ce(La, void 0), s = t.formItem ? { size: void 0 } : Ce(oo, void 0);
  return L(() => r.value || d(e) || s?.size || a?.size || o.value || "");
}, pg = (e) => {
  const t = Wi("disabled"), n = Ce(La, void 0);
  return L(() => t.value || d(e) || n?.disabled || !1);
};
function ji(e, {
  beforeFocus: t,
  afterFocus: n,
  beforeBlur: r,
  afterBlur: o
} = {}) {
  const a = Qe(), { emit: s } = a, l = fn(), i = M(!1), u = (m) => {
    We(t) && t(m) || i.value || (i.value = !0, s("focus", m), n?.());
  }, f = (m) => {
    var h;
    We(r) && r(m) || m.relatedTarget && ((h = l.value) != null && h.contains(m.relatedTarget)) || (i.value = !1, s("blur", m), o?.());
  }, p = () => {
    var m, h;
    (m = l.value) != null && m.contains(document.activeElement) && l.value !== document.activeElement || (h = e.value) == null || h.focus();
  };
  return ce(l, (m) => {
    m && m.setAttribute("tabindex", "-1");
  }), St(l, "focus", u, !0), St(l, "blur", f, !0), St(l, "click", p, !0), {
    isFocused: i,
    wrapperRef: l,
    handleFocus: u,
    handleBlur: f
  };
}
const mg = (e) => /([\uAC00-\uD7AF\u3130-\u318F])+/gi.test(e);
function Vi({
  afterComposition: e,
  emit: t
}) {
  const n = M(!1), r = (l) => {
    t?.("compositionstart", l), n.value = !0;
  }, o = (l) => {
    var i;
    t?.("compositionupdate", l);
    const u = (i = l.target) == null ? void 0 : i.value, f = u[u.length - 1] || "";
    n.value = !mg(f);
  }, a = (l) => {
    t?.("compositionend", l), n.value && (n.value = !1, Ne(() => e(l)));
  };
  return {
    isComposing: n,
    handleComposition: (l) => {
      l.type === "compositionend" ? a(l) : o(l);
    },
    handleCompositionStart: r,
    handleCompositionUpdate: o,
    handleCompositionEnd: a
  };
}
function vg(e) {
  let t;
  function n() {
    if (e.value == null)
      return;
    const { selectionStart: o, selectionEnd: a, value: s } = e.value;
    if (o == null || a == null)
      return;
    const l = s.slice(0, Math.max(0, o)), i = s.slice(Math.max(0, a));
    t = {
      selectionStart: o,
      selectionEnd: a,
      value: s,
      beforeTxt: l,
      afterTxt: i
    };
  }
  function r() {
    if (e.value == null || t == null)
      return;
    const { value: o } = e.value, { beforeTxt: a, afterTxt: s, selectionStart: l } = t;
    if (a == null || s == null || l == null)
      return;
    let i = o.length;
    if (o.endsWith(s))
      i = o.length - s.length;
    else if (o.startsWith(a))
      i = a.length;
    else {
      const u = a[l - 1], f = o.indexOf(u, l - 1);
      f !== -1 && (i = f + 1);
    }
    e.value.setSelectionRange(i, i);
  }
  return [n, r];
}
const gg = "ElInput", hg = Y({
  name: gg,
  inheritAttrs: !1
}), yg = /* @__PURE__ */ Y({
  ...hg,
  props: lg,
  emits: ig,
  setup(e, { expose: t, emit: n }) {
    const r = e, o = Ec(), a = dg(), s = Tc(), l = L(() => [
      r.type === "textarea" ? v.b() : g.b(),
      g.m(m.value),
      g.is("disabled", h.value),
      g.is("exceed", Ge.value),
      {
        [g.b("group")]: s.prepend || s.append,
        [g.m("prefix")]: s.prefix || r.prefixIcon,
        [g.m("suffix")]: s.suffix || r.suffixIcon || r.clearable || r.showPassword,
        [g.bm("suffix", "password-clear")]: ve.value && ge.value,
        [g.b("hidden")]: r.type === "hidden"
      },
      o.class
    ]), i = L(() => [
      g.e("wrapper"),
      g.is("focus", W.value)
    ]), { form: u, formItem: f } = zi(), { inputId: p } = Bi(r, {
      formItemContext: f
    }), m = Ia(), h = pg(), g = Me("input"), v = Me("textarea"), E = fn(), c = fn(), T = M(!1), b = M(!1), w = M(), O = fn(r.inputStyle), k = L(() => E.value || c.value), { wrapperRef: S, isFocused: W, handleFocus: B, handleBlur: q } = ji(k, {
      beforeFocus() {
        return h.value;
      },
      afterBlur() {
        var y;
        r.validateEvent && ((y = f?.validate) == null || y.call(f, "blur").catch((R) => void 0));
      }
    }), oe = L(() => {
      var y;
      return (y = u?.statusIcon) != null ? y : !1;
    }), I = L(() => f?.validateState || ""), V = L(() => I.value && Di[I.value]), ee = L(() => b.value ? Jv : jv), fe = L(() => [
      o.style
    ]), le = L(() => [
      r.inputStyle,
      O.value,
      { resize: r.resize }
    ]), D = L(() => ho(r.modelValue) ? "" : String(r.modelValue)), ve = L(() => r.clearable && !h.value && !r.readonly && !!D.value && (W.value || T.value)), ge = L(() => r.showPassword && !h.value && !!D.value && (!!D.value || W.value)), Ie = L(() => r.showWordLimit && !!r.maxlength && (r.type === "text" || r.type === "textarea") && !h.value && !r.readonly && !r.showPassword), xe = L(() => D.value.length), Ge = L(() => !!Ie.value && xe.value > Number(r.maxlength)), U = L(() => !!s.suffix || !!r.suffixIcon || ve.value || r.showPassword || Ie.value || !!I.value && oe.value), [X, me] = vg(E);
    At(c, (y) => {
      if (ae(), !Ie.value || r.resize !== "both")
        return;
      const R = y[0], { width: de } = R.contentRect;
      w.value = {
        right: `calc(100% - ${de + 15 + 6}px)`
      };
    });
    const Ee = () => {
      const { type: y, autosize: R } = r;
      if (!(!De || y !== "textarea" || !c.value))
        if (R) {
          const de = tt(R) ? R.minRows : void 0, _e = tt(R) ? R.maxRows : void 0, Ye = qs(c.value, de, _e);
          O.value = {
            overflowY: "hidden",
            ...Ye
          }, Ne(() => {
            c.value.offsetHeight, O.value = Ye;
          });
        } else
          O.value = {
            minHeight: qs(c.value).minHeight
          };
    }, ae = ((y) => {
      let R = !1;
      return () => {
        var de;
        if (R || !r.autosize)
          return;
        ((de = c.value) == null ? void 0 : de.offsetParent) === null || (y(), R = !0);
      };
    })(Ee), ze = () => {
      const y = k.value, R = r.formatter ? r.formatter(D.value) : D.value;
      !y || y.value === R || (y.value = R);
    }, ue = async (y) => {
      X();
      let { value: R } = y.target;
      if (r.formatter && r.parser && (R = r.parser(R)), !_t.value) {
        if (R === D.value) {
          ze();
          return;
        }
        n(Ht, R), n(Zs, R), await Ne(), ze(), me();
      }
    }, He = (y) => {
      let { value: R } = y.target;
      r.formatter && r.parser && (R = r.parser(R)), n(no, R);
    }, {
      isComposing: _t,
      handleCompositionStart: at,
      handleCompositionUpdate: st,
      handleCompositionEnd: lt
    } = Vi({ emit: n, afterComposition: ue }), ft = () => {
      X(), b.value = !b.value, setTimeout(me);
    }, Lt = () => {
      var y;
      return (y = k.value) == null ? void 0 : y.focus();
    }, _ = () => {
      var y;
      return (y = k.value) == null ? void 0 : y.blur();
    }, C = (y) => {
      T.value = !1, n("mouseleave", y);
    }, $ = (y) => {
      T.value = !0, n("mouseenter", y);
    }, K = (y) => {
      n("keydown", y);
    }, he = () => {
      var y;
      (y = k.value) == null || y.select();
    }, se = () => {
      n(Ht, ""), n(no, ""), n("clear"), n(Zs, "");
    };
    return ce(() => r.modelValue, () => {
      var y;
      Ne(() => Ee()), r.validateEvent && ((y = f?.validate) == null || y.call(f, "change").catch((R) => void 0));
    }), ce(D, () => ze()), ce(() => r.type, async () => {
      await Ne(), ze(), Ee();
    }), Fe(() => {
      !r.formatter && r.parser, ze(), Ne(Ee);
    }), t({
      input: E,
      textarea: c,
      ref: k,
      textareaStyle: le,
      autosize: Nt(r, "autosize"),
      isComposing: _t,
      focus: Lt,
      blur: _,
      select: he,
      clear: se,
      resizeTextarea: Ee
    }), (y, R) => (P(), x("div", {
      class: z([
        d(l),
        {
          [d(g).bm("group", "append")]: y.$slots.append,
          [d(g).bm("group", "prepend")]: y.$slots.prepend
        }
      ]),
      style: Ae(d(fe)),
      onMouseenter: $,
      onMouseleave: C
    }, [
      G(" input "),
      y.type !== "textarea" ? (P(), x(Ve, { key: 0 }, [
        G(" prepend slot "),
        y.$slots.prepend ? (P(), x("div", {
          key: 0,
          class: z(d(g).be("group", "prepend"))
        }, [
          ie(y.$slots, "prepend")
        ], 2)) : G("v-if", !0),
        N("div", {
          ref_key: "wrapperRef",
          ref: S,
          class: z(d(i))
        }, [
          G(" prefix slot "),
          y.$slots.prefix || y.prefixIcon ? (P(), x("span", {
            key: 0,
            class: z(d(g).e("prefix"))
          }, [
            N("span", {
              class: z(d(g).e("prefix-inner"))
            }, [
              ie(y.$slots, "prefix"),
              y.prefixIcon ? (P(), Q(d(ct), {
                key: 0,
                class: z(d(g).e("icon"))
              }, {
                default: te(() => [
                  (P(), Q(mt(y.prefixIcon)))
                ]),
                _: 1
              }, 8, ["class"])) : G("v-if", !0)
            ], 2)
          ], 2)) : G("v-if", !0),
          N("input", pn({
            id: d(p),
            ref_key: "input",
            ref: E,
            class: d(g).e("inner")
          }, d(a), {
            minlength: y.minlength,
            maxlength: y.maxlength,
            type: y.showPassword ? b.value ? "text" : "password" : y.type,
            disabled: d(h),
            readonly: y.readonly,
            autocomplete: y.autocomplete,
            tabindex: y.tabindex,
            "aria-label": y.ariaLabel,
            placeholder: y.placeholder,
            style: y.inputStyle,
            form: y.form,
            autofocus: y.autofocus,
            role: y.containerRole,
            onCompositionstart: d(at),
            onCompositionupdate: d(st),
            onCompositionend: d(lt),
            onInput: ue,
            onChange: He,
            onKeydown: K
          }), null, 16, ["id", "minlength", "maxlength", "type", "disabled", "readonly", "autocomplete", "tabindex", "aria-label", "placeholder", "form", "autofocus", "role", "onCompositionstart", "onCompositionupdate", "onCompositionend"]),
          G(" suffix slot "),
          d(U) ? (P(), x("span", {
            key: 1,
            class: z(d(g).e("suffix"))
          }, [
            N("span", {
              class: z(d(g).e("suffix-inner"))
            }, [
              !d(ve) || !d(ge) || !d(Ie) ? (P(), x(Ve, { key: 0 }, [
                ie(y.$slots, "suffix"),
                y.suffixIcon ? (P(), Q(d(ct), {
                  key: 0,
                  class: z(d(g).e("icon"))
                }, {
                  default: te(() => [
                    (P(), Q(mt(y.suffixIcon)))
                  ]),
                  _: 1
                }, 8, ["class"])) : G("v-if", !0)
              ], 64)) : G("v-if", !0),
              d(ve) ? (P(), Q(d(ct), {
                key: 1,
                class: z([d(g).e("icon"), d(g).e("clear")]),
                onMousedown: Je(d(dr), ["prevent"]),
                onClick: se
              }, {
                default: te(() => [
                  H(d(_o))
                ]),
                _: 1
              }, 8, ["class", "onMousedown"])) : G("v-if", !0),
              d(ge) ? (P(), Q(d(ct), {
                key: 2,
                class: z([d(g).e("icon"), d(g).e("password")]),
                onClick: ft
              }, {
                default: te(() => [
                  (P(), Q(mt(d(ee))))
                ]),
                _: 1
              }, 8, ["class"])) : G("v-if", !0),
              d(Ie) ? (P(), x("span", {
                key: 3,
                class: z(d(g).e("count"))
              }, [
                N("span", {
                  class: z(d(g).e("count-inner"))
                }, J(d(xe)) + " / " + J(y.maxlength), 3)
              ], 2)) : G("v-if", !0),
              d(I) && d(V) && d(oe) ? (P(), Q(d(ct), {
                key: 4,
                class: z([
                  d(g).e("icon"),
                  d(g).e("validateIcon"),
                  d(g).is("loading", d(I) === "validating")
                ])
              }, {
                default: te(() => [
                  (P(), Q(mt(d(V))))
                ]),
                _: 1
              }, 8, ["class"])) : G("v-if", !0)
            ], 2)
          ], 2)) : G("v-if", !0)
        ], 2),
        G(" append slot "),
        y.$slots.append ? (P(), x("div", {
          key: 1,
          class: z(d(g).be("group", "append"))
        }, [
          ie(y.$slots, "append")
        ], 2)) : G("v-if", !0)
      ], 64)) : (P(), x(Ve, { key: 1 }, [
        G(" textarea "),
        N("textarea", pn({
          id: d(p),
          ref_key: "textarea",
          ref: c,
          class: [d(v).e("inner"), d(g).is("focus", d(W))]
        }, d(a), {
          minlength: y.minlength,
          maxlength: y.maxlength,
          tabindex: y.tabindex,
          disabled: d(h),
          readonly: y.readonly,
          autocomplete: y.autocomplete,
          style: d(le),
          "aria-label": y.ariaLabel,
          placeholder: y.placeholder,
          form: y.form,
          autofocus: y.autofocus,
          rows: y.rows,
          role: y.containerRole,
          onCompositionstart: d(at),
          onCompositionupdate: d(st),
          onCompositionend: d(lt),
          onInput: ue,
          onFocus: d(B),
          onBlur: d(q),
          onChange: He,
          onKeydown: K
        }), null, 16, ["id", "minlength", "maxlength", "tabindex", "disabled", "readonly", "autocomplete", "aria-label", "placeholder", "form", "autofocus", "rows", "role", "onCompositionstart", "onCompositionupdate", "onCompositionend", "onFocus", "onBlur"]),
        d(Ie) ? (P(), x("span", {
          key: 0,
          style: Ae(w.value),
          class: z(d(g).e("count"))
        }, J(d(xe)) + " / " + J(y.maxlength), 7)) : G("v-if", !0)
      ], 64))
    ], 38));
  }
});
var bg = /* @__PURE__ */ Le(yg, [["__file", "input.vue"]]);
const _g = kt(bg), Pn = 4, wg = {
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
}, Eg = ({
  move: e,
  size: t,
  bar: n
}) => ({
  [n.size]: t,
  transform: `translate${n.axis}(${e}%)`
}), Pa = Symbol("scrollbarContextKey"), Tg = Oe({
  vertical: Boolean,
  size: String,
  move: Number,
  ratio: {
    type: Number,
    required: !0
  },
  always: Boolean
}), Cg = "Thumb", Sg = /* @__PURE__ */ Y({
  __name: "thumb",
  props: Tg,
  setup(e) {
    const t = e, n = Ce(Pa), r = Me("scrollbar");
    n || gv(Cg, "can not inject scrollbar context");
    const o = M(), a = M(), s = M({}), l = M(!1);
    let i = !1, u = !1, f = De ? document.onselectstart : null;
    const p = L(() => wg[t.vertical ? "vertical" : "horizontal"]), m = L(() => Eg({
      size: t.size,
      move: t.move,
      bar: p.value
    })), h = L(() => o.value[p.value.offset] ** 2 / n.wrapElement[p.value.scrollSize] / t.ratio / a.value[p.value.offset]), g = (k) => {
      var S;
      if (k.stopPropagation(), k.ctrlKey || [1, 2].includes(k.button))
        return;
      (S = window.getSelection()) == null || S.removeAllRanges(), E(k);
      const W = k.currentTarget;
      W && (s.value[p.value.axis] = W[p.value.offset] - (k[p.value.client] - W.getBoundingClientRect()[p.value.direction]));
    }, v = (k) => {
      if (!a.value || !o.value || !n.wrapElement)
        return;
      const S = Math.abs(k.target.getBoundingClientRect()[p.value.direction] - k[p.value.client]), W = a.value[p.value.offset] / 2, B = (S - W) * 100 * h.value / o.value[p.value.offset];
      n.wrapElement[p.value.scroll] = B * n.wrapElement[p.value.scrollSize] / 100;
    }, E = (k) => {
      k.stopImmediatePropagation(), i = !0, document.addEventListener("mousemove", c), document.addEventListener("mouseup", T), f = document.onselectstart, document.onselectstart = () => !1;
    }, c = (k) => {
      if (!o.value || !a.value || i === !1)
        return;
      const S = s.value[p.value.axis];
      if (!S)
        return;
      const W = (o.value.getBoundingClientRect()[p.value.direction] - k[p.value.client]) * -1, B = a.value[p.value.offset] - S, q = (W - B) * 100 * h.value / o.value[p.value.offset];
      n.wrapElement[p.value.scroll] = q * n.wrapElement[p.value.scrollSize] / 100;
    }, T = () => {
      i = !1, s.value[p.value.axis] = 0, document.removeEventListener("mousemove", c), document.removeEventListener("mouseup", T), O(), u && (l.value = !1);
    }, b = () => {
      u = !1, l.value = !!t.size;
    }, w = () => {
      u = !0, l.value = i;
    };
    Bt(() => {
      O(), document.removeEventListener("mouseup", T);
    });
    const O = () => {
      document.onselectstart !== f && (document.onselectstart = f);
    };
    return St(Nt(n, "scrollbarElement"), "mousemove", b), St(Nt(n, "scrollbarElement"), "mouseleave", w), (k, S) => (P(), Q(Gn, {
      name: d(r).b("fade"),
      persisted: ""
    }, {
      default: te(() => [
        vt(N("div", {
          ref_key: "instance",
          ref: o,
          class: z([d(r).e("bar"), d(r).is(d(p).key)]),
          onMousedown: v
        }, [
          N("div", {
            ref_key: "thumb",
            ref: a,
            class: z(d(r).e("thumb")),
            style: Ae(d(m)),
            onMousedown: g
          }, null, 38)
        ], 34), [
          [Qt, k.always || l.value]
        ])
      ]),
      _: 1
    }, 8, ["name"]));
  }
});
var Js = /* @__PURE__ */ Le(Sg, [["__file", "thumb.vue"]]);
const Og = Oe({
  always: {
    type: Boolean,
    default: !0
  },
  minSize: {
    type: Number,
    required: !0
  }
}), kg = /* @__PURE__ */ Y({
  __name: "bar",
  props: Og,
  setup(e, { expose: t }) {
    const n = e, r = Ce(Pa), o = M(0), a = M(0), s = M(""), l = M(""), i = M(1), u = M(1);
    return t({
      handleScroll: (m) => {
        if (m) {
          const h = m.offsetHeight - Pn, g = m.offsetWidth - Pn;
          a.value = m.scrollTop * 100 / h * i.value, o.value = m.scrollLeft * 100 / g * u.value;
        }
      },
      update: () => {
        const m = r?.wrapElement;
        if (!m)
          return;
        const h = m.offsetHeight - Pn, g = m.offsetWidth - Pn, v = h ** 2 / m.scrollHeight, E = g ** 2 / m.scrollWidth, c = Math.max(v, n.minSize), T = Math.max(E, n.minSize);
        i.value = v / (h - v) / (c / (h - c)), u.value = E / (g - E) / (T / (g - T)), l.value = c + Pn < h ? `${c}px` : "", s.value = T + Pn < g ? `${T}px` : "";
      }
    }), (m, h) => (P(), x(Ve, null, [
      H(Js, {
        move: o.value,
        ratio: u.value,
        size: s.value,
        always: m.always
      }, null, 8, ["move", "ratio", "size", "always"]),
      H(Js, {
        move: a.value,
        ratio: i.value,
        size: l.value,
        vertical: "",
        always: m.always
      }, null, 8, ["move", "ratio", "size", "always"])
    ], 64));
  }
});
var Lg = /* @__PURE__ */ Le(kg, [["__file", "bar.vue"]]);
const Ig = Oe({
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
  ...Tr(["ariaLabel", "ariaOrientation"])
}), Pg = {
  scroll: ({
    scrollTop: e,
    scrollLeft: t
  }) => [e, t].every(je)
}, Ag = "ElScrollbar", Ng = Y({
  name: Ag
}), Rg = /* @__PURE__ */ Y({
  ...Ng,
  props: Ig,
  emits: Pg,
  setup(e, { expose: t, emit: n }) {
    const r = e, o = Me("scrollbar");
    let a, s, l = 0, i = 0;
    const u = M(), f = M(), p = M(), m = M(), h = L(() => {
      const O = {};
      return r.height && (O.height = mr(r.height)), r.maxHeight && (O.maxHeight = mr(r.maxHeight)), [r.wrapStyle, O];
    }), g = L(() => [
      r.wrapClass,
      o.e("wrap"),
      { [o.em("wrap", "hidden-default")]: !r.native }
    ]), v = L(() => [o.e("view"), r.viewClass]), E = () => {
      var O;
      f.value && ((O = m.value) == null || O.handleScroll(f.value), l = f.value.scrollTop, i = f.value.scrollLeft, n("scroll", {
        scrollTop: f.value.scrollTop,
        scrollLeft: f.value.scrollLeft
      }));
    };
    function c(O, k) {
      tt(O) ? f.value.scrollTo(O) : je(O) && je(k) && f.value.scrollTo(O, k);
    }
    const T = (O) => {
      je(O) && (f.value.scrollTop = O);
    }, b = (O) => {
      je(O) && (f.value.scrollLeft = O);
    }, w = () => {
      var O;
      (O = m.value) == null || O.update();
    };
    return ce(() => r.noresize, (O) => {
      O ? (a?.(), s?.()) : ({ stop: a } = At(p, w), s = St("resize", w));
    }, { immediate: !0 }), ce(() => [r.maxHeight, r.height], () => {
      r.native || Ne(() => {
        var O;
        w(), f.value && ((O = m.value) == null || O.handleScroll(f.value));
      });
    }), Ft(Pa, Dn({
      scrollbarElement: u,
      wrapElement: f
    })), Cc(() => {
      f.value && (f.value.scrollTop = l, f.value.scrollLeft = i);
    }), Fe(() => {
      r.native || Ne(() => {
        w();
      });
    }), Sc(() => w()), t({
      wrapRef: f,
      update: w,
      scrollTo: c,
      setScrollTop: T,
      setScrollLeft: b,
      handleScroll: E
    }), (O, k) => (P(), x("div", {
      ref_key: "scrollbarRef",
      ref: u,
      class: z(d(o).b())
    }, [
      N("div", {
        ref_key: "wrapRef",
        ref: f,
        class: z(d(g)),
        style: Ae(d(h)),
        tabindex: O.tabindex,
        onScroll: E
      }, [
        (P(), Q(mt(O.tag), {
          id: O.id,
          ref_key: "resizeRef",
          ref: p,
          class: z(d(v)),
          style: Ae(O.viewStyle),
          role: O.role,
          "aria-label": O.ariaLabel,
          "aria-orientation": O.ariaOrientation
        }, {
          default: te(() => [
            ie(O.$slots, "default")
          ]),
          _: 3
        }, 8, ["id", "class", "style", "role", "aria-label", "aria-orientation"]))
      ], 46, ["tabindex"]),
      O.native ? G("v-if", !0) : (P(), Q(Lg, {
        key: 0,
        ref_key: "barRef",
        ref: m,
        always: O.always,
        "min-size": O.minSize
      }, null, 8, ["always", "min-size"]))
    ], 2));
  }
});
var $g = /* @__PURE__ */ Le(Rg, [["__file", "scrollbar.vue"]]);
const Mg = kt($g), Aa = Symbol("popper"), Ui = Symbol("popperContent"), Dg = [
  "dialog",
  "grid",
  "group",
  "listbox",
  "menu",
  "navigation",
  "tooltip",
  "tree"
], Hi = Oe({
  role: {
    type: String,
    values: Dg,
    default: "tooltip"
  }
}), Fg = Y({
  name: "ElPopper",
  inheritAttrs: !1
}), xg = /* @__PURE__ */ Y({
  ...Fg,
  props: Hi,
  setup(e, { expose: t }) {
    const n = e, r = M(), o = M(), a = M(), s = M(), l = L(() => n.role), i = {
      triggerRef: r,
      popperInstanceRef: o,
      contentRef: a,
      referenceRef: s,
      role: l
    };
    return t(i), Ft(Aa, i), (u, f) => ie(u.$slots, "default");
  }
});
var zg = /* @__PURE__ */ Le(xg, [["__file", "popper.vue"]]);
const Ki = Oe({
  arrowOffset: {
    type: Number,
    default: 5
  }
}), Bg = Y({
  name: "ElPopperArrow",
  inheritAttrs: !1
}), Wg = /* @__PURE__ */ Y({
  ...Bg,
  props: Ki,
  setup(e, { expose: t }) {
    const n = e, r = Me("popper"), { arrowOffset: o, arrowRef: a, arrowStyle: s } = Ce(Ui, void 0);
    return ce(() => n.arrowOffset, (l) => {
      o.value = l;
    }), Bt(() => {
      a.value = void 0;
    }), t({
      arrowRef: a
    }), (l, i) => (P(), x("span", {
      ref_key: "arrowRef",
      ref: a,
      class: z(d(r).e("arrow")),
      style: Ae(d(s)),
      "data-popper-arrow": ""
    }, null, 6));
  }
});
var jg = /* @__PURE__ */ Le(Wg, [["__file", "arrow.vue"]]);
const Gi = Oe({
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
}), Yi = Symbol("elForwardRef"), Vg = (e) => {
  Ft(Yi, {
    setForwardRef: (n) => {
      e.value = n;
    }
  });
}, Ug = (e) => ({
  mounted(t) {
    e(t);
  },
  updated(t) {
    e(t);
  },
  unmounted() {
    e(null);
  }
}), Xo = (e) => {
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
}, Hg = "ElOnlyChild", Kg = Y({
  name: Hg,
  setup(e, {
    slots: t,
    attrs: n
  }) {
    var r;
    const o = Ce(Yi), a = Ug((r = o?.setForwardRef) != null ? r : dr);
    return () => {
      var s;
      const l = (s = t.default) == null ? void 0 : s.call(t, n);
      if (!l || l.length > 1)
        return null;
      const i = Zi(l);
      return i ? vt(Oc(i, n), [[a]]) : null;
    };
  }
});
function Zi(e) {
  if (!e)
    return null;
  const t = e;
  for (const n of t) {
    if (tt(n))
      switch (n.type) {
        case kc:
          continue;
        case Jl:
        case "svg":
          return Qs(n);
        case Ve:
          return Zi(n.children);
        default:
          return n;
      }
    return Qs(n);
  }
  return null;
}
function Qs(e) {
  const t = Me("only-child");
  return H("span", {
    class: t.e("content")
  }, [e]);
}
const Gg = Y({
  name: "ElPopperTrigger",
  inheritAttrs: !1
}), Yg = /* @__PURE__ */ Y({
  ...Gg,
  props: Gi,
  setup(e, { expose: t }) {
    const n = e, { role: r, triggerRef: o } = Ce(Aa, void 0);
    Vg(o);
    const a = L(() => l.value ? n.id : void 0), s = L(() => {
      if (r && r.value === "tooltip")
        return n.open && n.id ? n.id : void 0;
    }), l = L(() => {
      if (r && r.value !== "tooltip")
        return r.value;
    }), i = L(() => l.value ? `${n.open}` : void 0);
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
    return Fe(() => {
      ce(() => n.virtualRef, (p) => {
        p && (o.value = Kt(p));
      }, {
        immediate: !0
      }), ce(o, (p, m) => {
        u?.(), u = void 0, Ct(p) && (f.forEach((h) => {
          var g;
          const v = n[h];
          v && (p.addEventListener(h.slice(2).toLowerCase(), v), (g = m?.removeEventListener) == null || g.call(m, h.slice(2).toLowerCase(), v));
        }), Xo(p) && (u = ce([a, s, l, i], (h) => {
          [
            "aria-controls",
            "aria-describedby",
            "aria-haspopup",
            "aria-expanded"
          ].forEach((g, v) => {
            ho(h[v]) ? p.removeAttribute(g) : p.setAttribute(g, h[v]);
          });
        }, { immediate: !0 }))), Ct(m) && Xo(m) && [
          "aria-controls",
          "aria-describedby",
          "aria-haspopup",
          "aria-expanded"
        ].forEach((h) => m.removeAttribute(h));
      }, {
        immediate: !0
      });
    }), Bt(() => {
      if (u?.(), u = void 0, o.value && Ct(o.value)) {
        const p = o.value;
        f.forEach((m) => {
          const h = n[m];
          h && p.removeEventListener(m.slice(2).toLowerCase(), h);
        }), o.value = void 0;
      }
    }), t({
      triggerRef: o
    }), (p, m) => p.virtualTriggering ? G("v-if", !0) : (P(), Q(d(Kg), pn({ key: 0 }, p.$attrs, {
      "aria-controls": d(a),
      "aria-describedby": d(s),
      "aria-expanded": d(i),
      "aria-haspopup": d(l)
    }), {
      default: te(() => [
        ie(p.$slots, "default")
      ]),
      _: 3
    }, 16, ["aria-controls", "aria-describedby", "aria-expanded", "aria-haspopup"]));
  }
});
var Zg = /* @__PURE__ */ Le(Yg, [["__file", "trigger.vue"]]);
const Mo = "focus-trap.focus-after-trapped", Do = "focus-trap.focus-after-released", qg = "focus-trap.focusout-prevented", el = {
  cancelable: !0,
  bubbles: !1
}, Xg = {
  cancelable: !0,
  bubbles: !1
}, tl = "focusAfterTrapped", nl = "focusAfterReleased", Jg = Symbol("elFocusTrap"), Na = M(), Eo = M(0), Ra = M(0);
let Nr = 0;
const qi = (e) => {
  const t = [], n = document.createTreeWalker(e, NodeFilter.SHOW_ELEMENT, {
    acceptNode: (r) => {
      const o = r.tagName === "INPUT" && r.type === "hidden";
      return r.disabled || r.hidden || o ? NodeFilter.FILTER_SKIP : r.tabIndex >= 0 || r === document.activeElement ? NodeFilter.FILTER_ACCEPT : NodeFilter.FILTER_SKIP;
    }
  });
  for (; n.nextNode(); )
    t.push(n.currentNode);
  return t;
}, rl = (e, t) => {
  for (const n of e)
    if (!Qg(n, t))
      return n;
}, Qg = (e, t) => {
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
}, eh = (e) => {
  const t = qi(e), n = rl(t, e), r = rl(t.reverse(), e);
  return [n, r];
}, th = (e) => e instanceof HTMLInputElement && "select" in e, Vt = (e, t) => {
  if (e && e.focus) {
    const n = document.activeElement;
    let r = !1;
    Ct(e) && !Xo(e) && !e.getAttribute("tabindex") && (e.setAttribute("tabindex", "-1"), r = !0), e.focus({ preventScroll: !0 }), Ra.value = window.performance.now(), e !== n && th(e) && t && e.select(), Ct(e) && r && e.removeAttribute("tabindex");
  }
};
function ol(e, t) {
  const n = [...e], r = e.indexOf(t);
  return r !== -1 && n.splice(r, 1), n;
}
const nh = () => {
  let e = [];
  return {
    push: (r) => {
      const o = e[0];
      o && r !== o && o.pause(), e = ol(e, r), e.unshift(r);
    },
    remove: (r) => {
      var o, a;
      e = ol(e, r), (a = (o = e[0]) == null ? void 0 : o.resume) == null || a.call(o);
    }
  };
}, rh = (e, t = !1) => {
  const n = document.activeElement;
  for (const r of e)
    if (Vt(r, t), document.activeElement !== n)
      return;
}, al = nh(), oh = () => Eo.value > Ra.value, Rr = () => {
  Na.value = "pointer", Eo.value = window.performance.now();
}, sl = () => {
  Na.value = "keyboard", Eo.value = window.performance.now();
}, ah = () => (Fe(() => {
  Nr === 0 && (document.addEventListener("mousedown", Rr), document.addEventListener("touchstart", Rr), document.addEventListener("keydown", sl)), Nr++;
}), Bt(() => {
  Nr--, Nr <= 0 && (document.removeEventListener("mousedown", Rr), document.removeEventListener("touchstart", Rr), document.removeEventListener("keydown", sl));
}), {
  focusReason: Na,
  lastUserFocusTimestamp: Eo,
  lastAutomatedFocusTimestamp: Ra
}), $r = (e) => new CustomEvent(qg, {
  ...Xg,
  detail: e
}), $t = {
  tab: "Tab",
  enter: "Enter",
  space: "Space",
  esc: "Escape",
  delete: "Delete",
  backspace: "Backspace",
  numpadEnter: "NumpadEnter"
};
let Rn = [];
const ll = (e) => {
  e.code === $t.esc && Rn.forEach((t) => t(e));
}, sh = (e) => {
  Fe(() => {
    Rn.length === 0 && document.addEventListener("keydown", ll), De && Rn.push(e);
  }), Bt(() => {
    Rn = Rn.filter((t) => t !== e), Rn.length === 0 && De && document.removeEventListener("keydown", ll);
  });
}, lh = Y({
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
    tl,
    nl,
    "focusin",
    "focusout",
    "focusout-prevented",
    "release-requested"
  ],
  setup(e, { emit: t }) {
    const n = M();
    let r, o;
    const { focusReason: a } = ah();
    sh((g) => {
      e.trapped && !s.paused && t("release-requested", g);
    });
    const s = {
      paused: !1,
      pause() {
        this.paused = !0;
      },
      resume() {
        this.paused = !1;
      }
    }, l = (g) => {
      if (!e.loop && !e.trapped || s.paused)
        return;
      const { code: v, altKey: E, ctrlKey: c, metaKey: T, currentTarget: b, shiftKey: w } = g, { loop: O } = e, k = v === $t.tab && !E && !c && !T, S = document.activeElement;
      if (k && S) {
        const W = b, [B, q] = eh(W);
        if (B && q) {
          if (!w && S === q) {
            const I = $r({
              focusReason: a.value
            });
            t("focusout-prevented", I), I.defaultPrevented || (g.preventDefault(), O && Vt(B, !0));
          } else if (w && [B, W].includes(S)) {
            const I = $r({
              focusReason: a.value
            });
            t("focusout-prevented", I), I.defaultPrevented || (g.preventDefault(), O && Vt(q, !0));
          }
        } else if (S === W) {
          const I = $r({
            focusReason: a.value
          });
          t("focusout-prevented", I), I.defaultPrevented || g.preventDefault();
        }
      }
    };
    Ft(Jg, {
      focusTrapRef: n,
      onKeydown: l
    }), ce(() => e.focusTrapEl, (g) => {
      g && (n.value = g);
    }, { immediate: !0 }), ce([n], ([g], [v]) => {
      g && (g.addEventListener("keydown", l), g.addEventListener("focusin", f), g.addEventListener("focusout", p)), v && (v.removeEventListener("keydown", l), v.removeEventListener("focusin", f), v.removeEventListener("focusout", p));
    });
    const i = (g) => {
      t(tl, g);
    }, u = (g) => t(nl, g), f = (g) => {
      const v = d(n);
      if (!v)
        return;
      const E = g.target, c = g.relatedTarget, T = E && v.contains(E);
      e.trapped || c && v.contains(c) || (r = c), T && t("focusin", g), !s.paused && e.trapped && (T ? o = E : Vt(o, !0));
    }, p = (g) => {
      const v = d(n);
      if (!(s.paused || !v))
        if (e.trapped) {
          const E = g.relatedTarget;
          !ho(E) && !v.contains(E) && setTimeout(() => {
            if (!s.paused && e.trapped) {
              const c = $r({
                focusReason: a.value
              });
              t("focusout-prevented", c), c.defaultPrevented || Vt(o, !0);
            }
          }, 0);
        } else {
          const E = g.target;
          E && v.contains(E) || t("focusout", g);
        }
    };
    async function m() {
      await Ne();
      const g = d(n);
      if (g) {
        al.push(s);
        const v = g.contains(document.activeElement) ? r : document.activeElement;
        if (r = v, !g.contains(v)) {
          const c = new Event(Mo, el);
          g.addEventListener(Mo, i), g.dispatchEvent(c), c.defaultPrevented || Ne(() => {
            let T = e.focusStartEl;
            nt(T) || (Vt(T), document.activeElement !== T && (T = "first")), T === "first" && rh(qi(g), !0), (document.activeElement === v || T === "container") && Vt(g);
          });
        }
      }
    }
    function h() {
      const g = d(n);
      if (g) {
        g.removeEventListener(Mo, i);
        const v = new CustomEvent(Do, {
          ...el,
          detail: {
            focusReason: a.value
          }
        });
        g.addEventListener(Do, u), g.dispatchEvent(v), !v.defaultPrevented && (a.value == "keyboard" || !oh() || g.contains(document.activeElement)) && Vt(r ?? document.body), g.removeEventListener(Do, u), al.remove(s);
      }
    }
    return Fe(() => {
      e.trapped && m(), ce(() => e.trapped, (g) => {
        g ? m() : h();
      });
    }), Bt(() => {
      e.trapped && h(), n.value && (n.value.removeEventListener("keydown", l), n.value.removeEventListener("focusin", f), n.value.removeEventListener("focusout", p), n.value = void 0);
    }), {
      onKeydown: l
    };
  }
});
function ih(e, t, n, r, o, a) {
  return ie(e.$slots, "default", { handleKeydown: e.onKeydown });
}
var uh = /* @__PURE__ */ Le(lh, [["render", ih], ["__file", "focus-trap.vue"]]), rt = "top", ht = "bottom", yt = "right", ot = "left", $a = "auto", Cr = [rt, ht, yt, ot], zn = "start", gr = "end", ch = "clippingParents", Xi = "viewport", Jn = "popper", dh = "reference", il = Cr.reduce(function(e, t) {
  return e.concat([t + "-" + zn, t + "-" + gr]);
}, []), To = [].concat(Cr, [$a]).reduce(function(e, t) {
  return e.concat([t, t + "-" + zn, t + "-" + gr]);
}, []), fh = "beforeRead", ph = "read", mh = "afterRead", vh = "beforeMain", gh = "main", hh = "afterMain", yh = "beforeWrite", bh = "write", _h = "afterWrite", wh = [fh, ph, mh, vh, gh, hh, yh, bh, _h];
function zt(e) {
  return e ? (e.nodeName || "").toLowerCase() : null;
}
function dt(e) {
  if (e == null) return window;
  if (e.toString() !== "[object Window]") {
    var t = e.ownerDocument;
    return t && t.defaultView || window;
  }
  return e;
}
function Sn(e) {
  var t = dt(e).Element;
  return e instanceof t || e instanceof Element;
}
function gt(e) {
  var t = dt(e).HTMLElement;
  return e instanceof t || e instanceof HTMLElement;
}
function Ma(e) {
  if (typeof ShadowRoot > "u") return !1;
  var t = dt(e).ShadowRoot;
  return e instanceof t || e instanceof ShadowRoot;
}
function Eh(e) {
  var t = e.state;
  Object.keys(t.elements).forEach(function(n) {
    var r = t.styles[n] || {}, o = t.attributes[n] || {}, a = t.elements[n];
    !gt(a) || !zt(a) || (Object.assign(a.style, r), Object.keys(o).forEach(function(s) {
      var l = o[s];
      l === !1 ? a.removeAttribute(s) : a.setAttribute(s, l === !0 ? "" : l);
    }));
  });
}
function Th(e) {
  var t = e.state, n = { popper: { position: t.options.strategy, left: "0", top: "0", margin: "0" }, arrow: { position: "absolute" }, reference: {} };
  return Object.assign(t.elements.popper.style, n.popper), t.styles = n, t.elements.arrow && Object.assign(t.elements.arrow.style, n.arrow), function() {
    Object.keys(t.elements).forEach(function(r) {
      var o = t.elements[r], a = t.attributes[r] || {}, s = Object.keys(t.styles.hasOwnProperty(r) ? t.styles[r] : n[r]), l = s.reduce(function(i, u) {
        return i[u] = "", i;
      }, {});
      !gt(o) || !zt(o) || (Object.assign(o.style, l), Object.keys(a).forEach(function(i) {
        o.removeAttribute(i);
      }));
    });
  };
}
var Ji = { name: "applyStyles", enabled: !0, phase: "write", fn: Eh, effect: Th, requires: ["computeStyles"] };
function Mt(e) {
  return e.split("-")[0];
}
var Tn = Math.max, ao = Math.min, Bn = Math.round;
function Jo() {
  var e = navigator.userAgentData;
  return e != null && e.brands && Array.isArray(e.brands) ? e.brands.map(function(t) {
    return t.brand + "/" + t.version;
  }).join(" ") : navigator.userAgent;
}
function Qi() {
  return !/^((?!chrome|android).)*safari/i.test(Jo());
}
function Wn(e, t, n) {
  t === void 0 && (t = !1), n === void 0 && (n = !1);
  var r = e.getBoundingClientRect(), o = 1, a = 1;
  t && gt(e) && (o = e.offsetWidth > 0 && Bn(r.width) / e.offsetWidth || 1, a = e.offsetHeight > 0 && Bn(r.height) / e.offsetHeight || 1);
  var s = Sn(e) ? dt(e) : window, l = s.visualViewport, i = !Qi() && n, u = (r.left + (i && l ? l.offsetLeft : 0)) / o, f = (r.top + (i && l ? l.offsetTop : 0)) / a, p = r.width / o, m = r.height / a;
  return { width: p, height: m, top: f, right: u + p, bottom: f + m, left: u, x: u, y: f };
}
function Da(e) {
  var t = Wn(e), n = e.offsetWidth, r = e.offsetHeight;
  return Math.abs(t.width - n) <= 1 && (n = t.width), Math.abs(t.height - r) <= 1 && (r = t.height), { x: e.offsetLeft, y: e.offsetTop, width: n, height: r };
}
function eu(e, t) {
  var n = t.getRootNode && t.getRootNode();
  if (e.contains(t)) return !0;
  if (n && Ma(n)) {
    var r = t;
    do {
      if (r && e.isSameNode(r)) return !0;
      r = r.parentNode || r.host;
    } while (r);
  }
  return !1;
}
function en(e) {
  return dt(e).getComputedStyle(e);
}
function Ch(e) {
  return ["table", "td", "th"].indexOf(zt(e)) >= 0;
}
function vn(e) {
  return ((Sn(e) ? e.ownerDocument : e.document) || window.document).documentElement;
}
function Co(e) {
  return zt(e) === "html" ? e : e.assignedSlot || e.parentNode || (Ma(e) ? e.host : null) || vn(e);
}
function ul(e) {
  return !gt(e) || en(e).position === "fixed" ? null : e.offsetParent;
}
function Sh(e) {
  var t = /firefox/i.test(Jo()), n = /Trident/i.test(Jo());
  if (n && gt(e)) {
    var r = en(e);
    if (r.position === "fixed") return null;
  }
  var o = Co(e);
  for (Ma(o) && (o = o.host); gt(o) && ["html", "body"].indexOf(zt(o)) < 0; ) {
    var a = en(o);
    if (a.transform !== "none" || a.perspective !== "none" || a.contain === "paint" || ["transform", "perspective"].indexOf(a.willChange) !== -1 || t && a.willChange === "filter" || t && a.filter && a.filter !== "none") return o;
    o = o.parentNode;
  }
  return null;
}
function Sr(e) {
  for (var t = dt(e), n = ul(e); n && Ch(n) && en(n).position === "static"; ) n = ul(n);
  return n && (zt(n) === "html" || zt(n) === "body" && en(n).position === "static") ? t : n || Sh(e) || t;
}
function Fa(e) {
  return ["top", "bottom"].indexOf(e) >= 0 ? "x" : "y";
}
function ar(e, t, n) {
  return Tn(e, ao(t, n));
}
function Oh(e, t, n) {
  var r = ar(e, t, n);
  return r > n ? n : r;
}
function tu() {
  return { top: 0, right: 0, bottom: 0, left: 0 };
}
function nu(e) {
  return Object.assign({}, tu(), e);
}
function ru(e, t) {
  return t.reduce(function(n, r) {
    return n[r] = e, n;
  }, {});
}
var kh = function(e, t) {
  return e = typeof e == "function" ? e(Object.assign({}, t.rects, { placement: t.placement })) : e, nu(typeof e != "number" ? e : ru(e, Cr));
};
function Lh(e) {
  var t, n = e.state, r = e.name, o = e.options, a = n.elements.arrow, s = n.modifiersData.popperOffsets, l = Mt(n.placement), i = Fa(l), u = [ot, yt].indexOf(l) >= 0, f = u ? "height" : "width";
  if (!(!a || !s)) {
    var p = kh(o.padding, n), m = Da(a), h = i === "y" ? rt : ot, g = i === "y" ? ht : yt, v = n.rects.reference[f] + n.rects.reference[i] - s[i] - n.rects.popper[f], E = s[i] - n.rects.reference[i], c = Sr(a), T = c ? i === "y" ? c.clientHeight || 0 : c.clientWidth || 0 : 0, b = v / 2 - E / 2, w = p[h], O = T - m[f] - p[g], k = T / 2 - m[f] / 2 + b, S = ar(w, k, O), W = i;
    n.modifiersData[r] = (t = {}, t[W] = S, t.centerOffset = S - k, t);
  }
}
function Ih(e) {
  var t = e.state, n = e.options, r = n.element, o = r === void 0 ? "[data-popper-arrow]" : r;
  o != null && (typeof o == "string" && (o = t.elements.popper.querySelector(o), !o) || eu(t.elements.popper, o) && (t.elements.arrow = o));
}
var Ph = { name: "arrow", enabled: !0, phase: "main", fn: Lh, effect: Ih, requires: ["popperOffsets"], requiresIfExists: ["preventOverflow"] };
function jn(e) {
  return e.split("-")[1];
}
var Ah = { top: "auto", right: "auto", bottom: "auto", left: "auto" };
function Nh(e, t) {
  var n = e.x, r = e.y, o = t.devicePixelRatio || 1;
  return { x: Bn(n * o) / o || 0, y: Bn(r * o) / o || 0 };
}
function cl(e) {
  var t, n = e.popper, r = e.popperRect, o = e.placement, a = e.variation, s = e.offsets, l = e.position, i = e.gpuAcceleration, u = e.adaptive, f = e.roundOffsets, p = e.isFixed, m = s.x, h = m === void 0 ? 0 : m, g = s.y, v = g === void 0 ? 0 : g, E = typeof f == "function" ? f({ x: h, y: v }) : { x: h, y: v };
  h = E.x, v = E.y;
  var c = s.hasOwnProperty("x"), T = s.hasOwnProperty("y"), b = ot, w = rt, O = window;
  if (u) {
    var k = Sr(n), S = "clientHeight", W = "clientWidth";
    if (k === dt(n) && (k = vn(n), en(k).position !== "static" && l === "absolute" && (S = "scrollHeight", W = "scrollWidth")), k = k, o === rt || (o === ot || o === yt) && a === gr) {
      w = ht;
      var B = p && k === O && O.visualViewport ? O.visualViewport.height : k[S];
      v -= B - r.height, v *= i ? 1 : -1;
    }
    if (o === ot || (o === rt || o === ht) && a === gr) {
      b = yt;
      var q = p && k === O && O.visualViewport ? O.visualViewport.width : k[W];
      h -= q - r.width, h *= i ? 1 : -1;
    }
  }
  var oe = Object.assign({ position: l }, u && Ah), I = f === !0 ? Nh({ x: h, y: v }, dt(n)) : { x: h, y: v };
  if (h = I.x, v = I.y, i) {
    var V;
    return Object.assign({}, oe, (V = {}, V[w] = T ? "0" : "", V[b] = c ? "0" : "", V.transform = (O.devicePixelRatio || 1) <= 1 ? "translate(" + h + "px, " + v + "px)" : "translate3d(" + h + "px, " + v + "px, 0)", V));
  }
  return Object.assign({}, oe, (t = {}, t[w] = T ? v + "px" : "", t[b] = c ? h + "px" : "", t.transform = "", t));
}
function Rh(e) {
  var t = e.state, n = e.options, r = n.gpuAcceleration, o = r === void 0 ? !0 : r, a = n.adaptive, s = a === void 0 ? !0 : a, l = n.roundOffsets, i = l === void 0 ? !0 : l, u = { placement: Mt(t.placement), variation: jn(t.placement), popper: t.elements.popper, popperRect: t.rects.popper, gpuAcceleration: o, isFixed: t.options.strategy === "fixed" };
  t.modifiersData.popperOffsets != null && (t.styles.popper = Object.assign({}, t.styles.popper, cl(Object.assign({}, u, { offsets: t.modifiersData.popperOffsets, position: t.options.strategy, adaptive: s, roundOffsets: i })))), t.modifiersData.arrow != null && (t.styles.arrow = Object.assign({}, t.styles.arrow, cl(Object.assign({}, u, { offsets: t.modifiersData.arrow, position: "absolute", adaptive: !1, roundOffsets: i })))), t.attributes.popper = Object.assign({}, t.attributes.popper, { "data-popper-placement": t.placement });
}
var ou = { name: "computeStyles", enabled: !0, phase: "beforeWrite", fn: Rh, data: {} }, Mr = { passive: !0 };
function $h(e) {
  var t = e.state, n = e.instance, r = e.options, o = r.scroll, a = o === void 0 ? !0 : o, s = r.resize, l = s === void 0 ? !0 : s, i = dt(t.elements.popper), u = [].concat(t.scrollParents.reference, t.scrollParents.popper);
  return a && u.forEach(function(f) {
    f.addEventListener("scroll", n.update, Mr);
  }), l && i.addEventListener("resize", n.update, Mr), function() {
    a && u.forEach(function(f) {
      f.removeEventListener("scroll", n.update, Mr);
    }), l && i.removeEventListener("resize", n.update, Mr);
  };
}
var au = { name: "eventListeners", enabled: !0, phase: "write", fn: function() {
}, effect: $h, data: {} }, Mh = { left: "right", right: "left", bottom: "top", top: "bottom" };
function Hr(e) {
  return e.replace(/left|right|bottom|top/g, function(t) {
    return Mh[t];
  });
}
var Dh = { start: "end", end: "start" };
function dl(e) {
  return e.replace(/start|end/g, function(t) {
    return Dh[t];
  });
}
function xa(e) {
  var t = dt(e), n = t.pageXOffset, r = t.pageYOffset;
  return { scrollLeft: n, scrollTop: r };
}
function za(e) {
  return Wn(vn(e)).left + xa(e).scrollLeft;
}
function Fh(e, t) {
  var n = dt(e), r = vn(e), o = n.visualViewport, a = r.clientWidth, s = r.clientHeight, l = 0, i = 0;
  if (o) {
    a = o.width, s = o.height;
    var u = Qi();
    (u || !u && t === "fixed") && (l = o.offsetLeft, i = o.offsetTop);
  }
  return { width: a, height: s, x: l + za(e), y: i };
}
function xh(e) {
  var t, n = vn(e), r = xa(e), o = (t = e.ownerDocument) == null ? void 0 : t.body, a = Tn(n.scrollWidth, n.clientWidth, o ? o.scrollWidth : 0, o ? o.clientWidth : 0), s = Tn(n.scrollHeight, n.clientHeight, o ? o.scrollHeight : 0, o ? o.clientHeight : 0), l = -r.scrollLeft + za(e), i = -r.scrollTop;
  return en(o || n).direction === "rtl" && (l += Tn(n.clientWidth, o ? o.clientWidth : 0) - a), { width: a, height: s, x: l, y: i };
}
function Ba(e) {
  var t = en(e), n = t.overflow, r = t.overflowX, o = t.overflowY;
  return /auto|scroll|overlay|hidden/.test(n + o + r);
}
function su(e) {
  return ["html", "body", "#document"].indexOf(zt(e)) >= 0 ? e.ownerDocument.body : gt(e) && Ba(e) ? e : su(Co(e));
}
function sr(e, t) {
  var n;
  t === void 0 && (t = []);
  var r = su(e), o = r === ((n = e.ownerDocument) == null ? void 0 : n.body), a = dt(r), s = o ? [a].concat(a.visualViewport || [], Ba(r) ? r : []) : r, l = t.concat(s);
  return o ? l : l.concat(sr(Co(s)));
}
function Qo(e) {
  return Object.assign({}, e, { left: e.x, top: e.y, right: e.x + e.width, bottom: e.y + e.height });
}
function zh(e, t) {
  var n = Wn(e, !1, t === "fixed");
  return n.top = n.top + e.clientTop, n.left = n.left + e.clientLeft, n.bottom = n.top + e.clientHeight, n.right = n.left + e.clientWidth, n.width = e.clientWidth, n.height = e.clientHeight, n.x = n.left, n.y = n.top, n;
}
function fl(e, t, n) {
  return t === Xi ? Qo(Fh(e, n)) : Sn(t) ? zh(t, n) : Qo(xh(vn(e)));
}
function Bh(e) {
  var t = sr(Co(e)), n = ["absolute", "fixed"].indexOf(en(e).position) >= 0, r = n && gt(e) ? Sr(e) : e;
  return Sn(r) ? t.filter(function(o) {
    return Sn(o) && eu(o, r) && zt(o) !== "body";
  }) : [];
}
function Wh(e, t, n, r) {
  var o = t === "clippingParents" ? Bh(e) : [].concat(t), a = [].concat(o, [n]), s = a[0], l = a.reduce(function(i, u) {
    var f = fl(e, u, r);
    return i.top = Tn(f.top, i.top), i.right = ao(f.right, i.right), i.bottom = ao(f.bottom, i.bottom), i.left = Tn(f.left, i.left), i;
  }, fl(e, s, r));
  return l.width = l.right - l.left, l.height = l.bottom - l.top, l.x = l.left, l.y = l.top, l;
}
function lu(e) {
  var t = e.reference, n = e.element, r = e.placement, o = r ? Mt(r) : null, a = r ? jn(r) : null, s = t.x + t.width / 2 - n.width / 2, l = t.y + t.height / 2 - n.height / 2, i;
  switch (o) {
    case rt:
      i = { x: s, y: t.y - n.height };
      break;
    case ht:
      i = { x: s, y: t.y + t.height };
      break;
    case yt:
      i = { x: t.x + t.width, y: l };
      break;
    case ot:
      i = { x: t.x - n.width, y: l };
      break;
    default:
      i = { x: t.x, y: t.y };
  }
  var u = o ? Fa(o) : null;
  if (u != null) {
    var f = u === "y" ? "height" : "width";
    switch (a) {
      case zn:
        i[u] = i[u] - (t[f] / 2 - n[f] / 2);
        break;
      case gr:
        i[u] = i[u] + (t[f] / 2 - n[f] / 2);
        break;
    }
  }
  return i;
}
function hr(e, t) {
  t === void 0 && (t = {});
  var n = t, r = n.placement, o = r === void 0 ? e.placement : r, a = n.strategy, s = a === void 0 ? e.strategy : a, l = n.boundary, i = l === void 0 ? ch : l, u = n.rootBoundary, f = u === void 0 ? Xi : u, p = n.elementContext, m = p === void 0 ? Jn : p, h = n.altBoundary, g = h === void 0 ? !1 : h, v = n.padding, E = v === void 0 ? 0 : v, c = nu(typeof E != "number" ? E : ru(E, Cr)), T = m === Jn ? dh : Jn, b = e.rects.popper, w = e.elements[g ? T : m], O = Wh(Sn(w) ? w : w.contextElement || vn(e.elements.popper), i, f, s), k = Wn(e.elements.reference), S = lu({ reference: k, element: b, placement: o }), W = Qo(Object.assign({}, b, S)), B = m === Jn ? W : k, q = { top: O.top - B.top + c.top, bottom: B.bottom - O.bottom + c.bottom, left: O.left - B.left + c.left, right: B.right - O.right + c.right }, oe = e.modifiersData.offset;
  if (m === Jn && oe) {
    var I = oe[o];
    Object.keys(q).forEach(function(V) {
      var ee = [yt, ht].indexOf(V) >= 0 ? 1 : -1, fe = [rt, ht].indexOf(V) >= 0 ? "y" : "x";
      q[V] += I[fe] * ee;
    });
  }
  return q;
}
function jh(e, t) {
  t === void 0 && (t = {});
  var n = t, r = n.placement, o = n.boundary, a = n.rootBoundary, s = n.padding, l = n.flipVariations, i = n.allowedAutoPlacements, u = i === void 0 ? To : i, f = jn(r), p = f ? l ? il : il.filter(function(g) {
    return jn(g) === f;
  }) : Cr, m = p.filter(function(g) {
    return u.indexOf(g) >= 0;
  });
  m.length === 0 && (m = p);
  var h = m.reduce(function(g, v) {
    return g[v] = hr(e, { placement: v, boundary: o, rootBoundary: a, padding: s })[Mt(v)], g;
  }, {});
  return Object.keys(h).sort(function(g, v) {
    return h[g] - h[v];
  });
}
function Vh(e) {
  if (Mt(e) === $a) return [];
  var t = Hr(e);
  return [dl(e), t, dl(t)];
}
function Uh(e) {
  var t = e.state, n = e.options, r = e.name;
  if (!t.modifiersData[r]._skip) {
    for (var o = n.mainAxis, a = o === void 0 ? !0 : o, s = n.altAxis, l = s === void 0 ? !0 : s, i = n.fallbackPlacements, u = n.padding, f = n.boundary, p = n.rootBoundary, m = n.altBoundary, h = n.flipVariations, g = h === void 0 ? !0 : h, v = n.allowedAutoPlacements, E = t.options.placement, c = Mt(E), T = c === E, b = i || (T || !g ? [Hr(E)] : Vh(E)), w = [E].concat(b).reduce(function(X, me) {
      return X.concat(Mt(me) === $a ? jh(t, { placement: me, boundary: f, rootBoundary: p, padding: u, flipVariations: g, allowedAutoPlacements: v }) : me);
    }, []), O = t.rects.reference, k = t.rects.popper, S = /* @__PURE__ */ new Map(), W = !0, B = w[0], q = 0; q < w.length; q++) {
      var oe = w[q], I = Mt(oe), V = jn(oe) === zn, ee = [rt, ht].indexOf(I) >= 0, fe = ee ? "width" : "height", le = hr(t, { placement: oe, boundary: f, rootBoundary: p, altBoundary: m, padding: u }), D = ee ? V ? yt : ot : V ? ht : rt;
      O[fe] > k[fe] && (D = Hr(D));
      var ve = Hr(D), ge = [];
      if (a && ge.push(le[I] <= 0), l && ge.push(le[D] <= 0, le[ve] <= 0), ge.every(function(X) {
        return X;
      })) {
        B = oe, W = !1;
        break;
      }
      S.set(oe, ge);
    }
    if (W) for (var Ie = g ? 3 : 1, xe = function(X) {
      var me = w.find(function(Ee) {
        var Te = S.get(Ee);
        if (Te) return Te.slice(0, X).every(function(ae) {
          return ae;
        });
      });
      if (me) return B = me, "break";
    }, Ge = Ie; Ge > 0; Ge--) {
      var U = xe(Ge);
      if (U === "break") break;
    }
    t.placement !== B && (t.modifiersData[r]._skip = !0, t.placement = B, t.reset = !0);
  }
}
var Hh = { name: "flip", enabled: !0, phase: "main", fn: Uh, requiresIfExists: ["offset"], data: { _skip: !1 } };
function pl(e, t, n) {
  return n === void 0 && (n = { x: 0, y: 0 }), { top: e.top - t.height - n.y, right: e.right - t.width + n.x, bottom: e.bottom - t.height + n.y, left: e.left - t.width - n.x };
}
function ml(e) {
  return [rt, yt, ht, ot].some(function(t) {
    return e[t] >= 0;
  });
}
function Kh(e) {
  var t = e.state, n = e.name, r = t.rects.reference, o = t.rects.popper, a = t.modifiersData.preventOverflow, s = hr(t, { elementContext: "reference" }), l = hr(t, { altBoundary: !0 }), i = pl(s, r), u = pl(l, o, a), f = ml(i), p = ml(u);
  t.modifiersData[n] = { referenceClippingOffsets: i, popperEscapeOffsets: u, isReferenceHidden: f, hasPopperEscaped: p }, t.attributes.popper = Object.assign({}, t.attributes.popper, { "data-popper-reference-hidden": f, "data-popper-escaped": p });
}
var Gh = { name: "hide", enabled: !0, phase: "main", requiresIfExists: ["preventOverflow"], fn: Kh };
function Yh(e, t, n) {
  var r = Mt(e), o = [ot, rt].indexOf(r) >= 0 ? -1 : 1, a = typeof n == "function" ? n(Object.assign({}, t, { placement: e })) : n, s = a[0], l = a[1];
  return s = s || 0, l = (l || 0) * o, [ot, yt].indexOf(r) >= 0 ? { x: l, y: s } : { x: s, y: l };
}
function Zh(e) {
  var t = e.state, n = e.options, r = e.name, o = n.offset, a = o === void 0 ? [0, 0] : o, s = To.reduce(function(f, p) {
    return f[p] = Yh(p, t.rects, a), f;
  }, {}), l = s[t.placement], i = l.x, u = l.y;
  t.modifiersData.popperOffsets != null && (t.modifiersData.popperOffsets.x += i, t.modifiersData.popperOffsets.y += u), t.modifiersData[r] = s;
}
var qh = { name: "offset", enabled: !0, phase: "main", requires: ["popperOffsets"], fn: Zh };
function Xh(e) {
  var t = e.state, n = e.name;
  t.modifiersData[n] = lu({ reference: t.rects.reference, element: t.rects.popper, placement: t.placement });
}
var iu = { name: "popperOffsets", enabled: !0, phase: "read", fn: Xh, data: {} };
function Jh(e) {
  return e === "x" ? "y" : "x";
}
function Qh(e) {
  var t = e.state, n = e.options, r = e.name, o = n.mainAxis, a = o === void 0 ? !0 : o, s = n.altAxis, l = s === void 0 ? !1 : s, i = n.boundary, u = n.rootBoundary, f = n.altBoundary, p = n.padding, m = n.tether, h = m === void 0 ? !0 : m, g = n.tetherOffset, v = g === void 0 ? 0 : g, E = hr(t, { boundary: i, rootBoundary: u, padding: p, altBoundary: f }), c = Mt(t.placement), T = jn(t.placement), b = !T, w = Fa(c), O = Jh(w), k = t.modifiersData.popperOffsets, S = t.rects.reference, W = t.rects.popper, B = typeof v == "function" ? v(Object.assign({}, t.rects, { placement: t.placement })) : v, q = typeof B == "number" ? { mainAxis: B, altAxis: B } : Object.assign({ mainAxis: 0, altAxis: 0 }, B), oe = t.modifiersData.offset ? t.modifiersData.offset[t.placement] : null, I = { x: 0, y: 0 };
  if (k) {
    if (a) {
      var V, ee = w === "y" ? rt : ot, fe = w === "y" ? ht : yt, le = w === "y" ? "height" : "width", D = k[w], ve = D + E[ee], ge = D - E[fe], Ie = h ? -W[le] / 2 : 0, xe = T === zn ? S[le] : W[le], Ge = T === zn ? -W[le] : -S[le], U = t.elements.arrow, X = h && U ? Da(U) : { width: 0, height: 0 }, me = t.modifiersData["arrow#persistent"] ? t.modifiersData["arrow#persistent"].padding : tu(), Ee = me[ee], Te = me[fe], ae = ar(0, S[le], X[le]), ze = b ? S[le] / 2 - Ie - ae - Ee - q.mainAxis : xe - ae - Ee - q.mainAxis, ue = b ? -S[le] / 2 + Ie + ae + Te + q.mainAxis : Ge + ae + Te + q.mainAxis, He = t.elements.arrow && Sr(t.elements.arrow), _t = He ? w === "y" ? He.clientTop || 0 : He.clientLeft || 0 : 0, at = (V = oe?.[w]) != null ? V : 0, st = D + ze - at - _t, lt = D + ue - at, ft = ar(h ? ao(ve, st) : ve, D, h ? Tn(ge, lt) : ge);
      k[w] = ft, I[w] = ft - D;
    }
    if (l) {
      var Lt, _ = w === "x" ? rt : ot, C = w === "x" ? ht : yt, $ = k[O], K = O === "y" ? "height" : "width", he = $ + E[_], se = $ - E[C], y = [rt, ot].indexOf(c) !== -1, R = (Lt = oe?.[O]) != null ? Lt : 0, de = y ? he : $ - S[K] - W[K] - R + q.altAxis, _e = y ? $ + S[K] + W[K] - R - q.altAxis : se, Ye = h && y ? Oh(de, $, _e) : ar(h ? de : he, $, h ? _e : se);
      k[O] = Ye, I[O] = Ye - $;
    }
    t.modifiersData[r] = I;
  }
}
var e0 = { name: "preventOverflow", enabled: !0, phase: "main", fn: Qh, requiresIfExists: ["offset"] };
function t0(e) {
  return { scrollLeft: e.scrollLeft, scrollTop: e.scrollTop };
}
function n0(e) {
  return e === dt(e) || !gt(e) ? xa(e) : t0(e);
}
function r0(e) {
  var t = e.getBoundingClientRect(), n = Bn(t.width) / e.offsetWidth || 1, r = Bn(t.height) / e.offsetHeight || 1;
  return n !== 1 || r !== 1;
}
function o0(e, t, n) {
  n === void 0 && (n = !1);
  var r = gt(t), o = gt(t) && r0(t), a = vn(t), s = Wn(e, o, n), l = { scrollLeft: 0, scrollTop: 0 }, i = { x: 0, y: 0 };
  return (r || !r && !n) && ((zt(t) !== "body" || Ba(a)) && (l = n0(t)), gt(t) ? (i = Wn(t, !0), i.x += t.clientLeft, i.y += t.clientTop) : a && (i.x = za(a))), { x: s.left + l.scrollLeft - i.x, y: s.top + l.scrollTop - i.y, width: s.width, height: s.height };
}
function a0(e) {
  var t = /* @__PURE__ */ new Map(), n = /* @__PURE__ */ new Set(), r = [];
  e.forEach(function(a) {
    t.set(a.name, a);
  });
  function o(a) {
    n.add(a.name);
    var s = [].concat(a.requires || [], a.requiresIfExists || []);
    s.forEach(function(l) {
      if (!n.has(l)) {
        var i = t.get(l);
        i && o(i);
      }
    }), r.push(a);
  }
  return e.forEach(function(a) {
    n.has(a.name) || o(a);
  }), r;
}
function s0(e) {
  var t = a0(e);
  return wh.reduce(function(n, r) {
    return n.concat(t.filter(function(o) {
      return o.phase === r;
    }));
  }, []);
}
function l0(e) {
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
  var t = e.reduce(function(n, r) {
    var o = n[r.name];
    return n[r.name] = o ? Object.assign({}, o, r, { options: Object.assign({}, o.options, r.options), data: Object.assign({}, o.data, r.data) }) : r, n;
  }, {});
  return Object.keys(t).map(function(n) {
    return t[n];
  });
}
var vl = { placement: "bottom", modifiers: [], strategy: "absolute" };
function gl() {
  for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++) t[n] = arguments[n];
  return !t.some(function(r) {
    return !(r && typeof r.getBoundingClientRect == "function");
  });
}
function Wa(e) {
  e === void 0 && (e = {});
  var t = e, n = t.defaultModifiers, r = n === void 0 ? [] : n, o = t.defaultOptions, a = o === void 0 ? vl : o;
  return function(s, l, i) {
    i === void 0 && (i = a);
    var u = { placement: "bottom", orderedModifiers: [], options: Object.assign({}, vl, a), modifiersData: {}, elements: { reference: s, popper: l }, attributes: {}, styles: {} }, f = [], p = !1, m = { state: u, setOptions: function(v) {
      var E = typeof v == "function" ? v(u.options) : v;
      g(), u.options = Object.assign({}, a, u.options, E), u.scrollParents = { reference: Sn(s) ? sr(s) : s.contextElement ? sr(s.contextElement) : [], popper: sr(l) };
      var c = s0(i0([].concat(r, u.options.modifiers)));
      return u.orderedModifiers = c.filter(function(T) {
        return T.enabled;
      }), h(), m.update();
    }, forceUpdate: function() {
      if (!p) {
        var v = u.elements, E = v.reference, c = v.popper;
        if (gl(E, c)) {
          u.rects = { reference: o0(E, Sr(c), u.options.strategy === "fixed"), popper: Da(c) }, u.reset = !1, u.placement = u.options.placement, u.orderedModifiers.forEach(function(W) {
            return u.modifiersData[W.name] = Object.assign({}, W.data);
          });
          for (var T = 0; T < u.orderedModifiers.length; T++) {
            if (u.reset === !0) {
              u.reset = !1, T = -1;
              continue;
            }
            var b = u.orderedModifiers[T], w = b.fn, O = b.options, k = O === void 0 ? {} : O, S = b.name;
            typeof w == "function" && (u = w({ state: u, options: k, name: S, instance: m }) || u);
          }
        }
      }
    }, update: l0(function() {
      return new Promise(function(v) {
        m.forceUpdate(), v(u);
      });
    }), destroy: function() {
      g(), p = !0;
    } };
    if (!gl(s, l)) return m;
    m.setOptions(i).then(function(v) {
      !p && i.onFirstUpdate && i.onFirstUpdate(v);
    });
    function h() {
      u.orderedModifiers.forEach(function(v) {
        var E = v.name, c = v.options, T = c === void 0 ? {} : c, b = v.effect;
        if (typeof b == "function") {
          var w = b({ state: u, name: E, instance: m, options: T }), O = function() {
          };
          f.push(w || O);
        }
      });
    }
    function g() {
      f.forEach(function(v) {
        return v();
      }), f = [];
    }
    return m;
  };
}
Wa();
var u0 = [au, iu, ou, Ji];
Wa({ defaultModifiers: u0 });
var c0 = [au, iu, ou, Ji, qh, Hh, e0, Ph, Gh], d0 = Wa({ defaultModifiers: c0 });
const f0 = ["fixed", "absolute"], p0 = Oe({
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
    values: To,
    default: "bottom"
  },
  popperOptions: {
    type: re(Object),
    default: () => ({})
  },
  strategy: {
    type: String,
    values: f0,
    default: "absolute"
  }
}), uu = Oe({
  ...p0,
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
  ...Tr(["ariaLabel"])
}), m0 = {
  mouseenter: (e) => e instanceof MouseEvent,
  mouseleave: (e) => e instanceof MouseEvent,
  focus: () => !0,
  blur: () => !0,
  close: () => !0
}, v0 = (e, t) => {
  const n = M(!1), r = M();
  return {
    focusStartRef: r,
    trapped: n,
    onFocusAfterReleased: (u) => {
      var f;
      ((f = u.detail) == null ? void 0 : f.focusReason) !== "pointer" && (r.value = "first", t("blur"));
    },
    onFocusAfterTrapped: () => {
      t("focus");
    },
    onFocusInTrap: (u) => {
      e.visible && !n.value && (u.target && (r.value = u.target), n.value = !0);
    },
    onFocusoutPrevented: (u) => {
      e.trapping || (u.detail.focusReason === "pointer" && u.preventDefault(), n.value = !1);
    },
    onReleaseRequested: () => {
      n.value = !1, t("close");
    }
  };
}, g0 = (e, t = []) => {
  const { placement: n, strategy: r, popperOptions: o } = e, a = {
    placement: n,
    strategy: r,
    ...o,
    modifiers: [...y0(e), ...t]
  };
  return b0(a, o?.modifiers), a;
}, h0 = (e) => {
  if (De)
    return Kt(e);
};
function y0(e) {
  const { offset: t, gpuAcceleration: n, fallbackPlacements: r } = e;
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
        fallbackPlacements: r
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
function b0(e, t) {
  t && (e.modifiers = [...e.modifiers, ...t ?? []]);
}
const _0 = (e, t, n = {}) => {
  const r = {
    name: "updateState",
    enabled: !0,
    phase: "write",
    fn: ({ state: i }) => {
      const u = w0(i);
      Object.assign(s.value, u);
    },
    requires: ["computeStyles"]
  }, o = L(() => {
    const { onFirstUpdate: i, placement: u, strategy: f, modifiers: p } = d(n);
    return {
      onFirstUpdate: i,
      placement: u || "bottom",
      strategy: f || "absolute",
      modifiers: [
        ...p || [],
        r,
        { name: "applyStyles", enabled: !1 }
      ]
    };
  }), a = fn(), s = M({
    styles: {
      popper: {
        position: d(o).strategy,
        left: "0",
        top: "0"
      },
      arrow: {
        position: "absolute"
      }
    },
    attributes: {}
  }), l = () => {
    a.value && (a.value.destroy(), a.value = void 0);
  };
  return ce(o, (i) => {
    const u = d(a);
    u && u.setOptions(i);
  }, {
    deep: !0
  }), ce([e, t], ([i, u]) => {
    l(), !(!i || !u) && (a.value = d0(i, u, d(o)));
  }), Bt(() => {
    l();
  }), {
    state: L(() => {
      var i;
      return { ...((i = d(a)) == null ? void 0 : i.state) || {} };
    }),
    styles: L(() => d(s).styles),
    attributes: L(() => d(s).attributes),
    update: () => {
      var i;
      return (i = d(a)) == null ? void 0 : i.update();
    },
    forceUpdate: () => {
      var i;
      return (i = d(a)) == null ? void 0 : i.forceUpdate();
    },
    instanceRef: L(() => d(a))
  };
};
function w0(e) {
  const t = Object.keys(e.elements), n = Qr(t.map((o) => [o, e.styles[o] || {}])), r = Qr(t.map((o) => [o, e.attributes[o]]));
  return {
    styles: n,
    attributes: r
  };
}
const E0 = 0, T0 = (e) => {
  const { popperInstanceRef: t, contentRef: n, triggerRef: r, role: o } = Ce(Aa, void 0), a = M(), s = M(), l = L(() => ({
    name: "eventListeners",
    enabled: !!e.visible
  })), i = L(() => {
    var c;
    const T = d(a), b = (c = d(s)) != null ? c : E0;
    return {
      name: "arrow",
      enabled: !zm(T),
      options: {
        element: T,
        padding: b
      }
    };
  }), u = L(() => ({
    onFirstUpdate: () => {
      g();
    },
    ...g0(e, [
      d(i),
      d(l)
    ])
  })), f = L(() => h0(e.referenceEl) || d(r)), { attributes: p, state: m, styles: h, update: g, forceUpdate: v, instanceRef: E } = _0(f, n, u);
  return ce(E, (c) => t.value = c), Fe(() => {
    ce(() => {
      var c;
      return (c = d(f)) == null ? void 0 : c.getBoundingClientRect();
    }, () => {
      g();
    });
  }), {
    attributes: p,
    arrowRef: a,
    contentRef: n,
    instanceRef: E,
    state: m,
    styles: h,
    role: o,
    forceUpdate: v,
    update: g
  };
}, C0 = (e, {
  attributes: t,
  styles: n,
  role: r
}) => {
  const { nextZIndex: o } = Ei(), a = Me("popper"), s = L(() => d(t).popper), l = M(je(e.zIndex) ? e.zIndex : o()), i = L(() => [
    a.b(),
    a.is("pure", e.pure),
    a.is(e.effect),
    e.popperClass
  ]), u = L(() => [
    { zIndex: d(l) },
    d(n).popper,
    e.popperStyle || {}
  ]), f = L(() => r.value === "dialog" ? "false" : void 0), p = L(() => d(n).arrow || {});
  return {
    ariaModal: f,
    arrowStyle: p,
    contentAttrs: s,
    contentClass: i,
    contentStyle: u,
    contentZIndex: l,
    updateZIndex: () => {
      l.value = je(e.zIndex) ? e.zIndex : o();
    }
  };
}, S0 = Y({
  name: "ElPopperContent"
}), O0 = /* @__PURE__ */ Y({
  ...S0,
  props: uu,
  emits: m0,
  setup(e, { expose: t, emit: n }) {
    const r = e, {
      focusStartRef: o,
      trapped: a,
      onFocusAfterReleased: s,
      onFocusAfterTrapped: l,
      onFocusInTrap: i,
      onFocusoutPrevented: u,
      onReleaseRequested: f
    } = v0(r, n), { attributes: p, arrowRef: m, contentRef: h, styles: g, instanceRef: v, role: E, update: c } = T0(r), {
      ariaModal: T,
      arrowStyle: b,
      contentAttrs: w,
      contentClass: O,
      contentStyle: k,
      updateZIndex: S
    } = C0(r, {
      styles: g,
      attributes: p,
      role: E
    }), W = Ce(oo, void 0), B = M();
    Ft(Ui, {
      arrowStyle: b,
      arrowRef: m,
      arrowOffset: B
    }), W && Ft(oo, {
      ...W,
      addInputId: dr,
      removeInputId: dr
    });
    let q;
    const oe = (V = !0) => {
      c(), V && S();
    }, I = () => {
      oe(!1), r.visible && r.focusOnShow ? a.value = !0 : r.visible === !1 && (a.value = !1);
    };
    return Fe(() => {
      ce(() => r.triggerTargetEl, (V, ee) => {
        q?.(), q = void 0;
        const fe = d(V || h.value), le = d(ee || h.value);
        Ct(fe) && (q = ce([E, () => r.ariaLabel, T, () => r.id], (D) => {
          ["role", "aria-label", "aria-modal", "id"].forEach((ve, ge) => {
            ho(D[ge]) ? fe.removeAttribute(ve) : fe.setAttribute(ve, D[ge]);
          });
        }, { immediate: !0 })), le !== fe && Ct(le) && ["role", "aria-label", "aria-modal", "id"].forEach((D) => {
          le.removeAttribute(D);
        });
      }, { immediate: !0 }), ce(() => r.visible, I, { immediate: !0 });
    }), Bt(() => {
      q?.(), q = void 0;
    }), t({
      popperContentRef: h,
      popperInstanceRef: v,
      updatePopper: oe,
      contentStyle: k
    }), (V, ee) => (P(), x("div", pn({
      ref_key: "contentRef",
      ref: h
    }, d(w), {
      style: d(k),
      class: d(O),
      tabindex: "-1",
      onMouseenter: (fe) => V.$emit("mouseenter", fe),
      onMouseleave: (fe) => V.$emit("mouseleave", fe)
    }), [
      H(d(uh), {
        trapped: d(a),
        "trap-on-focus-in": !0,
        "focus-trap-el": d(h),
        "focus-start-el": d(o),
        onFocusAfterTrapped: d(l),
        onFocusAfterReleased: d(s),
        onFocusin: d(i),
        onFocusoutPrevented: d(u),
        onReleaseRequested: d(f)
      }, {
        default: te(() => [
          ie(V.$slots, "default")
        ]),
        _: 3
      }, 8, ["trapped", "focus-trap-el", "focus-start-el", "onFocusAfterTrapped", "onFocusAfterReleased", "onFocusin", "onFocusoutPrevented", "onReleaseRequested"])
    ], 16, ["onMouseenter", "onMouseleave"]));
  }
});
var k0 = /* @__PURE__ */ Le(O0, [["__file", "content.vue"]]);
const L0 = kt(zg), ja = Symbol("elTooltip");
function hl() {
  let e;
  const t = (r, o) => {
    n(), e = window.setTimeout(r, o);
  }, n = () => window.clearTimeout(e);
  return Er(() => n()), {
    registerTimeout: t,
    cancelTimeout: n
  };
}
const I0 = Oe({
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
}), P0 = ({
  showAfter: e,
  hideAfter: t,
  autoClose: n,
  open: r,
  close: o
}) => {
  const { registerTimeout: a } = hl(), {
    registerTimeout: s,
    cancelTimeout: l
  } = hl();
  return {
    onOpen: (f) => {
      a(() => {
        r(f);
        const p = d(n);
        je(p) && p > 0 && s(() => {
          o(f);
        }, p);
      }, d(e));
    },
    onClose: (f) => {
      l(), a(() => {
        o(f);
      }, d(t));
    }
  };
}, Va = Oe({
  ...I0,
  ...uu,
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
  ...Tr(["ariaLabel"])
}), cu = Oe({
  ...Gi,
  disabled: Boolean,
  trigger: {
    type: re([String, Array]),
    default: "hover"
  },
  triggerKeys: {
    type: re(Array),
    default: () => [$t.enter, $t.numpadEnter, $t.space]
  }
}), A0 = bo({
  type: re(Boolean),
  default: null
}), N0 = bo({
  type: re(Function)
}), R0 = (e) => {
  const t = `update:${e}`, n = `onUpdate:${e}`, r = [t], o = {
    [e]: A0,
    [n]: N0
  };
  return {
    useModelToggle: ({
      indicator: s,
      toggleReason: l,
      shouldHideWhenRouteChanges: i,
      shouldProceed: u,
      onShow: f,
      onHide: p
    }) => {
      const m = Qe(), { emit: h } = m, g = m.props, v = L(() => We(g[n])), E = L(() => g[e] === null), c = (S) => {
        s.value !== !0 && (s.value = !0, l && (l.value = S), We(f) && f(S));
      }, T = (S) => {
        s.value !== !1 && (s.value = !1, l && (l.value = S), We(p) && p(S));
      }, b = (S) => {
        if (g.disabled === !0 || We(u) && !u())
          return;
        const W = v.value && De;
        W && h(t, !0), (E.value || !W) && c(S);
      }, w = (S) => {
        if (g.disabled === !0 || !De)
          return;
        const W = v.value && De;
        W && h(t, !1), (E.value || !W) && T(S);
      }, O = (S) => {
        eo(S) && (g.disabled && S ? v.value && h(t, !1) : s.value !== S && (S ? c() : T()));
      }, k = () => {
        s.value ? w() : b();
      };
      return ce(() => g[e], O), i && m.appContext.config.globalProperties.$route !== void 0 && ce(() => ({
        ...m.proxy.$route
      }), () => {
        i.value && s.value && w();
      }), Fe(() => {
        O(g[e]);
      }), {
        hide: w,
        show: b,
        toggle: k,
        hasUpdateHandler: v
      };
    },
    useModelToggleProps: o,
    useModelToggleEmits: r
  };
}, {
  useModelToggleProps: $0,
  useModelToggleEmits: M0,
  useModelToggle: D0
} = R0("visible"), F0 = Oe({
  ...Hi,
  ...$0,
  ...Va,
  ...cu,
  ...Ki,
  showArrow: {
    type: Boolean,
    default: !0
  }
}), x0 = [
  ...M0,
  "before-show",
  "before-hide",
  "show",
  "hide",
  "open",
  "close"
], z0 = (e, t) => Rt(e) ? e.includes(t) : e === t, An = (e, t, n) => (r) => {
  z0(d(e), t) && n(r);
}, Ut = (e, t, { checkForDefaultPrevented: n = !0 } = {}) => (o) => {
  const a = e?.(o);
  if (n === !1 || !a)
    return t?.(o);
}, B0 = Y({
  name: "ElTooltipTrigger"
}), W0 = /* @__PURE__ */ Y({
  ...B0,
  props: cu,
  setup(e, { expose: t }) {
    const n = e, r = Me("tooltip"), { controlled: o, id: a, open: s, onOpen: l, onClose: i, onToggle: u } = Ce(ja, void 0), f = M(null), p = () => {
      if (d(o) || n.disabled)
        return !0;
    }, m = Nt(n, "trigger"), h = Ut(p, An(m, "hover", l)), g = Ut(p, An(m, "hover", i)), v = Ut(p, An(m, "click", (w) => {
      w.button === 0 && u(w);
    })), E = Ut(p, An(m, "focus", l)), c = Ut(p, An(m, "focus", i)), T = Ut(p, An(m, "contextmenu", (w) => {
      w.preventDefault(), u(w);
    })), b = Ut(p, (w) => {
      const { code: O } = w;
      n.triggerKeys.includes(O) && (w.preventDefault(), u(w));
    });
    return t({
      triggerRef: f
    }), (w, O) => (P(), Q(d(Zg), {
      id: d(a),
      "virtual-ref": w.virtualRef,
      open: d(s),
      "virtual-triggering": w.virtualTriggering,
      class: z(d(r).e("trigger")),
      onBlur: d(c),
      onClick: d(v),
      onContextmenu: d(T),
      onFocus: d(E),
      onMouseenter: d(h),
      onMouseleave: d(g),
      onKeydown: d(b)
    }, {
      default: te(() => [
        ie(w.$slots, "default")
      ]),
      _: 3
    }, 8, ["id", "virtual-ref", "open", "virtual-triggering", "class", "onBlur", "onClick", "onContextmenu", "onFocus", "onMouseenter", "onMouseleave", "onKeydown"]));
  }
});
var j0 = /* @__PURE__ */ Le(W0, [["__file", "trigger.vue"]]);
const V0 = Oe({
  to: {
    type: re([String, Object]),
    required: !0
  },
  disabled: Boolean
}), U0 = /* @__PURE__ */ Y({
  __name: "teleport",
  props: V0,
  setup(e) {
    return (t, n) => t.disabled ? ie(t.$slots, "default", { key: 0 }) : (P(), Q(Lc, {
      key: 1,
      to: t.to
    }, [
      ie(t.$slots, "default")
    ], 8, ["to"]));
  }
});
var H0 = /* @__PURE__ */ Le(U0, [["__file", "teleport.vue"]]);
const K0 = kt(H0), du = () => {
  const e = ha(), t = xi(), n = L(() => `${e.value}-popper-container-${t.prefix}`), r = L(() => `#${n.value}`);
  return {
    id: n,
    selector: r
  };
}, G0 = (e) => {
  const t = document.createElement("div");
  return t.id = e, document.body.appendChild(t), t;
}, Y0 = () => {
  const { id: e, selector: t } = du();
  return Ic(() => {
    De && (document.body.querySelector(t.value) || G0(e.value));
  }), {
    id: e,
    selector: t
  };
}, Z0 = Y({
  name: "ElTooltipContent",
  inheritAttrs: !1
}), q0 = /* @__PURE__ */ Y({
  ...Z0,
  props: Va,
  setup(e, { expose: t }) {
    const n = e, { selector: r } = du(), o = Me("tooltip"), a = M();
    let s;
    const {
      controlled: l,
      id: i,
      open: u,
      trigger: f,
      onClose: p,
      onOpen: m,
      onShow: h,
      onHide: g,
      onBeforeShow: v,
      onBeforeHide: E
    } = Ce(ja, void 0), c = L(() => n.transition || `${o.namespace.value}-fade-in-linear`), T = L(() => n.persistent);
    Bt(() => {
      s?.();
    });
    const b = L(() => d(T) ? !0 : d(u)), w = L(() => n.disabled ? !1 : d(u)), O = L(() => n.appendTo || r.value), k = L(() => {
      var D;
      return (D = n.style) != null ? D : {};
    }), S = M(!0), W = () => {
      g(), le() && Vt(document.body), S.value = !0;
    }, B = () => {
      if (d(l))
        return !0;
    }, q = Ut(B, () => {
      n.enterable && d(f) === "hover" && m();
    }), oe = Ut(B, () => {
      d(f) === "hover" && p();
    }), I = () => {
      var D, ve;
      (ve = (D = a.value) == null ? void 0 : D.updatePopper) == null || ve.call(D), v?.();
    }, V = () => {
      E?.();
    }, ee = () => {
      h(), s = nv(L(() => {
        var D;
        return (D = a.value) == null ? void 0 : D.popperContentRef;
      }), () => {
        if (d(l))
          return;
        d(f) !== "hover" && p();
      });
    }, fe = () => {
      n.virtualTriggering || p();
    }, le = (D) => {
      var ve;
      const ge = (ve = a.value) == null ? void 0 : ve.popperContentRef, Ie = D?.relatedTarget || document.activeElement;
      return ge?.contains(Ie);
    };
    return ce(() => d(u), (D) => {
      D ? S.value = !1 : s?.();
    }, {
      flush: "post"
    }), ce(() => n.content, () => {
      var D, ve;
      (ve = (D = a.value) == null ? void 0 : D.updatePopper) == null || ve.call(D);
    }), t({
      contentRef: a,
      isFocusInsideContent: le
    }), (D, ve) => (P(), Q(d(K0), {
      disabled: !D.teleported,
      to: d(O)
    }, {
      default: te(() => [
        H(Gn, {
          name: d(c),
          onAfterLeave: W,
          onBeforeEnter: I,
          onAfterEnter: ee,
          onBeforeLeave: V
        }, {
          default: te(() => [
            d(b) ? vt((P(), Q(d(k0), pn({
              key: 0,
              id: d(i),
              ref_key: "contentRef",
              ref: a
            }, D.$attrs, {
              "aria-label": D.ariaLabel,
              "aria-hidden": S.value,
              "boundaries-padding": D.boundariesPadding,
              "fallback-placements": D.fallbackPlacements,
              "gpu-acceleration": D.gpuAcceleration,
              offset: D.offset,
              placement: D.placement,
              "popper-options": D.popperOptions,
              strategy: D.strategy,
              effect: D.effect,
              enterable: D.enterable,
              pure: D.pure,
              "popper-class": D.popperClass,
              "popper-style": [D.popperStyle, d(k)],
              "reference-el": D.referenceEl,
              "trigger-target-el": D.triggerTargetEl,
              visible: d(w),
              "z-index": D.zIndex,
              onMouseenter: d(q),
              onMouseleave: d(oe),
              onBlur: fe,
              onClose: d(p)
            }), {
              default: te(() => [
                ie(D.$slots, "default")
              ]),
              _: 3
            }, 16, ["id", "aria-label", "aria-hidden", "boundaries-padding", "fallback-placements", "gpu-acceleration", "offset", "placement", "popper-options", "strategy", "effect", "enterable", "pure", "popper-class", "popper-style", "reference-el", "trigger-target-el", "visible", "z-index", "onMouseenter", "onMouseleave", "onClose"])), [
              [Qt, d(w)]
            ]) : G("v-if", !0)
          ]),
          _: 3
        }, 8, ["name"])
      ]),
      _: 3
    }, 8, ["disabled", "to"]));
  }
});
var X0 = /* @__PURE__ */ Le(q0, [["__file", "content.vue"]]);
const J0 = Y({
  name: "ElTooltip"
}), Q0 = /* @__PURE__ */ Y({
  ...J0,
  props: F0,
  emits: x0,
  setup(e, { expose: t, emit: n }) {
    const r = e;
    Y0();
    const o = wo(), a = M(), s = M(), l = () => {
      var c;
      const T = d(a);
      T && ((c = T.popperInstanceRef) == null || c.update());
    }, i = M(!1), u = M(), { show: f, hide: p, hasUpdateHandler: m } = D0({
      indicator: i,
      toggleReason: u
    }), { onOpen: h, onClose: g } = P0({
      showAfter: Nt(r, "showAfter"),
      hideAfter: Nt(r, "hideAfter"),
      autoClose: Nt(r, "autoClose"),
      open: f,
      close: p
    }), v = L(() => eo(r.visible) && !m.value);
    Ft(ja, {
      controlled: v,
      id: o,
      open: ma(i),
      trigger: Nt(r, "trigger"),
      onOpen: (c) => {
        h(c);
      },
      onClose: (c) => {
        g(c);
      },
      onToggle: (c) => {
        d(i) ? g(c) : h(c);
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
      updatePopper: l
    }), ce(() => r.disabled, (c) => {
      c && i.value && (i.value = !1);
    });
    const E = (c) => {
      var T;
      return (T = s.value) == null ? void 0 : T.isFocusInsideContent(c);
    };
    return Pc(() => i.value && p()), t({
      popperRef: a,
      contentRef: s,
      isFocusInsideContent: E,
      updatePopper: l,
      onOpen: h,
      onClose: g,
      hide: p
    }), (c, T) => (P(), Q(d(L0), {
      ref_key: "popperRef",
      ref: a,
      role: c.role
    }, {
      default: te(() => [
        H(j0, {
          disabled: c.disabled,
          trigger: c.trigger,
          "trigger-keys": c.triggerKeys,
          "virtual-ref": c.virtualRef,
          "virtual-triggering": c.virtualTriggering
        }, {
          default: te(() => [
            c.$slots.default ? ie(c.$slots, "default", { key: 0 }) : G("v-if", !0)
          ]),
          _: 3
        }, 8, ["disabled", "trigger", "trigger-keys", "virtual-ref", "virtual-triggering"]),
        H(X0, {
          ref_key: "contentRef",
          ref: s,
          "aria-label": c.ariaLabel,
          "boundaries-padding": c.boundariesPadding,
          content: c.content,
          disabled: c.disabled,
          effect: c.effect,
          enterable: c.enterable,
          "fallback-placements": c.fallbackPlacements,
          "hide-after": c.hideAfter,
          "gpu-acceleration": c.gpuAcceleration,
          offset: c.offset,
          persistent: c.persistent,
          "popper-class": c.popperClass,
          "popper-style": c.popperStyle,
          placement: c.placement,
          "popper-options": c.popperOptions,
          pure: c.pure,
          "raw-content": c.rawContent,
          "reference-el": c.referenceEl,
          "trigger-target-el": c.triggerTargetEl,
          "show-after": c.showAfter,
          strategy: c.strategy,
          teleported: c.teleported,
          transition: c.transition,
          "virtual-triggering": c.virtualTriggering,
          "z-index": c.zIndex,
          "append-to": c.appendTo
        }, {
          default: te(() => [
            ie(c.$slots, "content", {}, () => [
              c.rawContent ? (P(), x("span", {
                key: 0,
                innerHTML: c.content
              }, null, 8, ["innerHTML"])) : (P(), x("span", { key: 1 }, J(c.content), 1))
            ]),
            c.showArrow ? (P(), Q(d(jg), {
              key: 0,
              "arrow-offset": c.arrowOffset
            }, null, 8, ["arrow-offset"])) : G("v-if", !0)
          ]),
          _: 3
        }, 8, ["aria-label", "boundaries-padding", "content", "disabled", "effect", "enterable", "fallback-placements", "hide-after", "gpu-acceleration", "offset", "persistent", "popper-class", "popper-style", "placement", "popper-options", "pure", "raw-content", "reference-el", "trigger-target-el", "show-after", "strategy", "teleported", "transition", "virtual-triggering", "z-index", "append-to"])
      ]),
      _: 3
    }, 8, ["role"]));
  }
});
var ey = /* @__PURE__ */ Le(Q0, [["__file", "tooltip.vue"]]);
const fu = kt(ey), ty = Oe({
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
}), ny = Y({
  name: "ElBadge"
}), ry = /* @__PURE__ */ Y({
  ...ny,
  props: ty,
  setup(e, { expose: t }) {
    const n = e, r = Me("badge"), o = L(() => n.isDot ? "" : je(n.value) && je(n.max) ? n.max < n.value ? `${n.max}+` : `${n.value}` : `${n.value}`), a = L(() => {
      var s, l, i, u, f;
      return [
        {
          backgroundColor: n.color,
          marginRight: mr(-((l = (s = n.offset) == null ? void 0 : s[0]) != null ? l : 0)),
          marginTop: mr((u = (i = n.offset) == null ? void 0 : i[1]) != null ? u : 0)
        },
        (f = n.badgeStyle) != null ? f : {}
      ];
    });
    return t({
      content: o
    }), (s, l) => (P(), x("div", {
      class: z(d(r).b())
    }, [
      ie(s.$slots, "default"),
      H(Gn, {
        name: `${d(r).namespace.value}-zoom-in-center`,
        persisted: ""
      }, {
        default: te(() => [
          vt(N("sup", {
            class: z([
              d(r).e("content"),
              d(r).em("content", s.type),
              d(r).is("fixed", !!s.$slots.default),
              d(r).is("dot", s.isDot),
              d(r).is("hide-zero", !s.showZero && n.value === 0),
              s.badgeClass
            ]),
            style: Ae(d(a))
          }, [
            ie(s.$slots, "content", { value: d(o) }, () => [
              wn(J(d(o)), 1)
            ])
          ], 6), [
            [Qt, !s.hidden && (d(o) || s.isDot || s.$slots.content)]
          ])
        ]),
        _: 3
      }, 8, ["name"])
    ], 2));
  }
});
var oy = /* @__PURE__ */ Le(ry, [["__file", "badge.vue"]]);
const ay = kt(oy), sy = (e = "") => e.replace(/[|\\{}()[\]^$+*?.]/g, "\\$&").replace(/-/g, "\\x2d"), ea = Oe({
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
    values: Oi
  },
  effect: {
    type: String,
    values: ["dark", "light", "plain"],
    default: "light"
  },
  round: Boolean
}), ly = {
  close: (e) => e instanceof MouseEvent,
  click: (e) => e instanceof MouseEvent
}, iy = Y({
  name: "ElTag"
}), uy = /* @__PURE__ */ Y({
  ...iy,
  props: ea,
  emits: ly,
  setup(e, { emit: t }) {
    const n = e, r = Ia(), o = Me("tag"), a = L(() => {
      const { type: u, hit: f, effect: p, closable: m, round: h } = n;
      return [
        o.b(),
        o.is("closable", m),
        o.m(u || "primary"),
        o.m(r.value),
        o.m(p),
        o.is("hit", f),
        o.is("round", h)
      ];
    }), s = (u) => {
      t("close", u);
    }, l = (u) => {
      t("click", u);
    }, i = (u) => {
      var f, p, m;
      (m = (p = (f = u?.component) == null ? void 0 : f.subTree) == null ? void 0 : p.component) != null && m.bum && (u.component.subTree.component.bum = null);
    };
    return (u, f) => u.disableTransitions ? (P(), x("span", {
      key: 0,
      class: z(d(a)),
      style: Ae({ backgroundColor: u.color }),
      onClick: l
    }, [
      N("span", {
        class: z(d(o).e("content"))
      }, [
        ie(u.$slots, "default")
      ], 2),
      u.closable ? (P(), Q(d(ct), {
        key: 0,
        class: z(d(o).e("close")),
        onClick: Je(s, ["stop"])
      }, {
        default: te(() => [
          H(d(vr))
        ]),
        _: 1
      }, 8, ["class", "onClick"])) : G("v-if", !0)
    ], 6)) : (P(), Q(Gn, {
      key: 1,
      name: `${d(o).namespace.value}-zoom-in-center`,
      appear: "",
      onVnodeMounted: i
    }, {
      default: te(() => [
        N("span", {
          class: z(d(a)),
          style: Ae({ backgroundColor: u.color }),
          onClick: l
        }, [
          N("span", {
            class: z(d(o).e("content"))
          }, [
            ie(u.$slots, "default")
          ], 2),
          u.closable ? (P(), Q(d(ct), {
            key: 0,
            class: z(d(o).e("close")),
            onClick: Je(s, ["stop"])
          }, {
            default: te(() => [
              H(d(vr))
            ]),
            _: 1
          }, 8, ["class", "onClick"])) : G("v-if", !0)
        ], 6)
      ]),
      _: 3
    }, 8, ["name"]));
  }
});
var cy = /* @__PURE__ */ Le(uy, [["__file", "tag.vue"]]);
const dy = kt(cy), an = /* @__PURE__ */ new Map();
if (De) {
  let e;
  document.addEventListener("mousedown", (t) => e = t), document.addEventListener("mouseup", (t) => {
    if (e) {
      for (const n of an.values())
        for (const { documentHandler: r } of n)
          r(t, e);
      e = void 0;
    }
  });
}
function yl(e, t) {
  let n = [];
  return Rt(t.arg) ? n = t.arg : Ct(t.arg) && n.push(t.arg), function(r, o) {
    const a = t.instance.popperRef, s = r.target, l = o?.target, i = !t || !t.instance, u = !s || !l, f = e.contains(s) || e.contains(l), p = e === s, m = n.length && n.some((g) => g?.contains(s)) || n.length && n.includes(l), h = a && (a.contains(s) || a.contains(l));
    i || u || f || p || m || h || t.value(r, o);
  };
}
const fy = {
  beforeMount(e, t) {
    an.has(e) || an.set(e, []), an.get(e).push({
      documentHandler: yl(e, t),
      bindingFn: t.value
    });
  },
  updated(e, t) {
    an.has(e) || an.set(e, []);
    const n = an.get(e), r = n.findIndex((a) => a.bindingFn === t.oldValue), o = {
      documentHandler: yl(e, t),
      bindingFn: t.value
    };
    r >= 0 ? n.splice(r, 1, o) : n.push(o);
  },
  unmounted(e) {
    an.delete(e);
  }
}, py = Oe({
  a11y: {
    type: Boolean,
    default: !0
  },
  locale: {
    type: re(Object)
  },
  size: Oa,
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
  ...Ii
}), wt = {};
Y({
  name: "ElConfigProvider",
  props: py,
  setup(e, { slots: t }) {
    ce(() => e.message, (r) => {
      Object.assign(wt, r ?? {});
    }, { immediate: !0, deep: !0 });
    const n = Ni(e);
    return () => ie(t, "default", { config: n?.value });
  }
});
function my() {
  const e = fn(), t = M(0), n = 11, r = L(() => ({
    minWidth: `${Math.max(t.value, n)}px`
  }));
  return At(e, () => {
    var a, s;
    t.value = (s = (a = e.value) == null ? void 0 : a.getBoundingClientRect().width) != null ? s : 0;
  }), {
    calculatorRef: e,
    calculatorWidth: t,
    inputStyle: r
  };
}
const pu = Symbol("ElSelectGroup"), So = Symbol("ElSelect");
function vy(e, t) {
  const n = Ce(So), r = Ce(pu, { disabled: !1 }), o = L(() => f(cn(n.props.modelValue), e.value)), a = L(() => {
    var h;
    if (n.props.multiple) {
      const g = cn((h = n.props.modelValue) != null ? h : []);
      return !o.value && g.length >= n.props.multipleLimit && n.props.multipleLimit > 0;
    } else
      return !1;
  }), s = L(() => e.label || (tt(e.value) ? "" : e.value)), l = L(() => e.value || e.label || ""), i = L(() => e.disabled || t.groupDisabled || a.value), u = Qe(), f = (h = [], g) => {
    if (tt(e.value)) {
      const v = n.props.valueKey;
      return h && h.some((E) => Ac(dn(E, v)) === dn(g, v));
    } else
      return h && h.includes(g);
  }, p = () => {
    !e.disabled && !r.disabled && (n.states.hoveringIndex = n.optionsArray.indexOf(u.proxy));
  }, m = (h) => {
    const g = new RegExp(sy(h), "i");
    t.visible = g.test(s.value) || e.created;
  };
  return ce(() => s.value, () => {
    !e.created && !n.props.remote && n.setSelected();
  }), ce(() => e.value, (h, g) => {
    const { remote: v, valueKey: E } = n.props;
    if ((v ? h !== g : !or(h, g)) && (n.onOptionDestroy(g, u.proxy), n.onOptionCreate(u.proxy)), !e.created && !v) {
      if (E && tt(h) && tt(g) && h[E] === g[E])
        return;
      n.setSelected();
    }
  }), ce(() => r.disabled, () => {
    t.groupDisabled = r.disabled;
  }, { immediate: !0 }), {
    select: n,
    currentLabel: s,
    currentValue: l,
    itemSelected: o,
    isDisabled: i,
    hoverItem: p,
    updateOption: m
  };
}
const gy = Y({
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
    const t = Me("select"), n = wo(), r = L(() => [
      t.be("dropdown", "item"),
      t.is("disabled", d(l)),
      t.is("selected", d(s)),
      t.is("hovering", d(m))
    ]), o = Dn({
      index: -1,
      groupDisabled: !1,
      visible: !0,
      hover: !1
    }), {
      currentLabel: a,
      itemSelected: s,
      isDisabled: l,
      select: i,
      hoverItem: u,
      updateOption: f
    } = vy(e, o), { visible: p, hover: m } = ga(o), h = Qe().proxy;
    i.onOptionCreate(h), Bt(() => {
      const v = h.value, { selected: E } = i.states, c = E.some((T) => T.value === h.value);
      Ne(() => {
        i.states.cachedOptions.get(v) === h && !c && i.states.cachedOptions.delete(v);
      }), i.onOptionDestroy(v, h);
    });
    function g() {
      l.value || i.handleOptionSelect(h);
    }
    return {
      ns: t,
      id: n,
      containerKls: r,
      currentLabel: a,
      itemSelected: s,
      isDisabled: l,
      select: i,
      hoverItem: u,
      updateOption: f,
      visible: p,
      hover: m,
      selectOptionClick: g,
      states: o
    };
  }
});
function hy(e, t, n, r, o, a) {
  return vt((P(), x("li", {
    id: e.id,
    class: z(e.containerKls),
    role: "option",
    "aria-disabled": e.isDisabled || void 0,
    "aria-selected": e.itemSelected,
    onMousemove: e.hoverItem,
    onClick: Je(e.selectOptionClick, ["stop"])
  }, [
    ie(e.$slots, "default", {}, () => [
      N("span", null, J(e.currentLabel), 1)
    ])
  ], 42, ["id", "aria-disabled", "aria-selected", "onMousemove", "onClick"])), [
    [Qt, e.visible]
  ]);
}
var Ua = /* @__PURE__ */ Le(gy, [["render", hy], ["__file", "option.vue"]]);
const yy = Y({
  name: "ElSelectDropdown",
  componentName: "ElSelectDropdown",
  setup() {
    const e = Ce(So), t = Me("select"), n = L(() => e.props.popperClass), r = L(() => e.props.multiple), o = L(() => e.props.fitInputWidth), a = M("");
    function s() {
      var l;
      a.value = `${(l = e.selectRef) == null ? void 0 : l.offsetWidth}px`;
    }
    return Fe(() => {
      s(), At(e.selectRef, s);
    }), {
      ns: t,
      minWidth: a,
      popperClass: n,
      isMultiple: r,
      isFitInputWidth: o
    };
  }
});
function by(e, t, n, r, o, a) {
  return P(), x("div", {
    class: z([e.ns.b("dropdown"), e.ns.is("multiple", e.isMultiple), e.popperClass]),
    style: Ae({ [e.isFitInputWidth ? "width" : "minWidth"]: e.minWidth })
  }, [
    e.$slots.header ? (P(), x("div", {
      key: 0,
      class: z(e.ns.be("dropdown", "header"))
    }, [
      ie(e.$slots, "header")
    ], 2)) : G("v-if", !0),
    ie(e.$slots, "default"),
    e.$slots.footer ? (P(), x("div", {
      key: 1,
      class: z(e.ns.be("dropdown", "footer"))
    }, [
      ie(e.$slots, "footer")
    ], 2)) : G("v-if", !0)
  ], 6);
}
var _y = /* @__PURE__ */ Le(yy, [["render", by], ["__file", "select-dropdown.vue"]]);
const wy = (e, t) => {
  const { t: n } = Ci(), r = wo(), o = Me("select"), a = Me("input"), s = Dn({
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
  }), l = M(null), i = M(null), u = M(null), f = M(null), p = M(null), m = M(null), h = M(null), g = M(null), v = M(null), E = M(null), c = M(null), {
    isComposing: T,
    handleCompositionStart: b,
    handleCompositionUpdate: w,
    handleCompositionEnd: O
  } = Vi({
    afterComposition: (A) => Ye(A)
  }), { wrapperRef: k, isFocused: S, handleBlur: W } = ji(p, {
    beforeFocus() {
      return le.value;
    },
    afterFocus() {
      e.automaticDropdown && !B.value && (B.value = !0, s.menuVisibleOnFocus = !0);
    },
    beforeBlur(A) {
      var j, pe;
      return ((j = u.value) == null ? void 0 : j.isFocusInsideContent(A)) || ((pe = f.value) == null ? void 0 : pe.isFocusInsideContent(A));
    },
    afterBlur() {
      B.value = !1, s.menuVisibleOnFocus = !1;
    }
  }), B = M(!1), q = M(), { form: oe, formItem: I } = zi(), { inputId: V } = Bi(e, {
    formItemContext: I
  }), { valueOnClear: ee, isEmptyValue: fe } = Sv(e), le = L(() => e.disabled || oe?.disabled), D = L(() => Rt(e.modelValue) ? e.modelValue.length > 0 : !fe(e.modelValue)), ve = L(() => {
    var A;
    return (A = oe?.statusIcon) != null ? A : !1;
  }), ge = L(() => e.clearable && !le.value && s.inputHovering && D.value), Ie = L(() => e.remote && e.filterable && !e.remoteShowSuffix ? "" : e.suffixIcon), xe = L(() => o.is("reverse", Ie.value && B.value)), Ge = L(() => I?.validateState || ""), U = L(() => Di[Ge.value]), X = L(() => e.remote ? 300 : 0), me = L(() => e.remote && !s.inputValue && s.options.size === 0), Ee = L(() => e.loading ? e.loadingText || n("el.select.loading") : e.filterable && s.inputValue && s.options.size > 0 && Te.value === 0 ? e.noMatchText || n("el.select.noMatch") : s.options.size === 0 ? e.noDataText || n("el.select.noData") : null), Te = L(() => ae.value.filter((A) => A.visible).length), ae = L(() => {
    const A = Array.from(s.options.values()), j = [];
    return s.optionValues.forEach((pe) => {
      const Be = A.findIndex((it) => it.value === pe);
      Be > -1 && j.push(A[Be]);
    }), j.length >= A.length ? j : A;
  }), ze = L(() => Array.from(s.cachedOptions.values())), ue = L(() => {
    const A = ae.value.filter((j) => !j.created).some((j) => j.currentLabel === s.inputValue);
    return e.filterable && e.allowCreate && s.inputValue !== "" && !A;
  }), He = () => {
    e.filterable && We(e.filterMethod) || e.filterable && e.remote && We(e.remoteMethod) || ae.value.forEach((A) => {
      var j;
      (j = A.updateOption) == null || j.call(A, s.inputValue);
    });
  }, _t = Ia(), at = L(() => ["small"].includes(_t.value) ? "small" : "default"), st = L({
    get() {
      return B.value && !me.value;
    },
    set(A) {
      B.value = A;
    }
  }), lt = L(() => {
    if (e.multiple && !En(e.modelValue))
      return cn(e.modelValue).length === 0 && !s.inputValue;
    const A = Rt(e.modelValue) ? e.modelValue[0] : e.modelValue;
    return e.filterable || En(A) ? !s.inputValue : !0;
  }), ft = L(() => {
    var A;
    const j = (A = e.placeholder) != null ? A : n("el.select.placeholder");
    return e.multiple || !D.value ? j : s.selectedLabel;
  }), Lt = L(() => qo ? null : "mouseenter");
  ce(() => e.modelValue, (A, j) => {
    e.multiple && e.filterable && !e.reserveKeyword && (s.inputValue = "", _("")), $(), !or(A, j) && e.validateEvent && I?.validate("change").catch((pe) => void 0);
  }, {
    flush: "post",
    deep: !0
  }), ce(() => B.value, (A) => {
    A ? _(s.inputValue) : (s.inputValue = "", s.previousQuery = null, s.isBeforeHide = !0), t("visible-change", A);
  }), ce(() => s.options.entries(), () => {
    De && ($(), e.defaultFirstOption && (e.filterable || e.remote) && Te.value && C());
  }, {
    flush: "post"
  }), ce([() => s.hoveringIndex, ae], ([A]) => {
    je(A) && A > -1 ? q.value = ae.value[A] || {} : q.value = {}, ae.value.forEach((j) => {
      j.hover = q.value === j;
    });
  }), Xl(() => {
    s.isBeforeHide || He();
  });
  const _ = (A) => {
    s.previousQuery === A || T.value || (s.previousQuery = A, e.filterable && We(e.filterMethod) ? e.filterMethod(A) : e.filterable && e.remote && We(e.remoteMethod) && e.remoteMethod(A), e.defaultFirstOption && (e.filterable || e.remote) && Te.value ? Ne(C) : Ne(he));
  }, C = () => {
    const A = ae.value.filter((it) => it.visible && !it.disabled && !it.states.groupDisabled), j = A.find((it) => it.created), pe = A[0], Be = ae.value.map((it) => it.value);
    s.hoveringIndex = ns(Be, j || pe);
  }, $ = () => {
    if (e.multiple)
      s.selectedLabel = "";
    else {
      const j = Rt(e.modelValue) ? e.modelValue[0] : e.modelValue, pe = K(j);
      s.selectedLabel = pe.currentLabel, s.selected = [pe];
      return;
    }
    const A = [];
    En(e.modelValue) || cn(e.modelValue).forEach((j) => {
      A.push(K(j));
    }), s.selected = A;
  }, K = (A) => {
    let j;
    const pe = Jc(A);
    for (let In = s.cachedOptions.size - 1; In >= 0; In--) {
      const on = ze.value[In];
      if (pe ? dn(on.value, e.valueKey) === dn(A, e.valueKey) : on.value === A) {
        j = {
          value: A,
          currentLabel: on.currentLabel,
          get isDisabled() {
            return on.isDisabled;
          }
        };
        break;
      }
    }
    if (j)
      return j;
    const Be = pe ? A.label : A ?? "";
    return {
      value: A,
      currentLabel: Be
    };
  }, he = () => {
    s.hoveringIndex = ae.value.findIndex((A) => s.selected.some((j) => Ir(j) === Ir(A)));
  }, se = () => {
    s.selectionWidth = i.value.getBoundingClientRect().width;
  }, y = () => {
    s.collapseItemWidth = E.value.getBoundingClientRect().width;
  }, R = () => {
    var A, j;
    (j = (A = u.value) == null ? void 0 : A.updatePopper) == null || j.call(A);
  }, de = () => {
    var A, j;
    (j = (A = f.value) == null ? void 0 : A.updatePopper) == null || j.call(A);
  }, _e = () => {
    s.inputValue.length > 0 && !B.value && (B.value = !0), _(s.inputValue);
  }, Ye = (A) => {
    if (s.inputValue = A.target.value, e.remote)
      yn();
    else
      return _e();
  }, yn = Fm(() => {
    _e();
  }, X.value), pt = (A) => {
    or(e.modelValue, A) || t(no, A);
  }, Io = (A) => xm(A, (j) => {
    const pe = s.cachedOptions.get(j);
    return pe && !pe.disabled && !pe.states.groupDisabled;
  }), Qa = (A) => {
    if (e.multiple && A.code !== $t.delete && A.target.value.length <= 0) {
      const j = cn(e.modelValue).slice(), pe = Io(j);
      if (pe < 0)
        return;
      const Be = j[pe];
      j.splice(pe, 1), t(Ht, j), pt(j), t("remove-tag", Be);
    }
  }, tc = (A, j) => {
    const pe = s.selected.indexOf(j);
    if (pe > -1 && !le.value) {
      const Be = cn(e.modelValue).slice();
      Be.splice(pe, 1), t(Ht, Be), pt(Be), t("remove-tag", j.value);
    }
    A.stopPropagation(), Lr();
  }, es = (A) => {
    A.stopPropagation();
    const j = e.multiple ? [] : ee.value;
    if (e.multiple)
      for (const pe of s.selected)
        pe.isDisabled && j.push(pe.value);
    t(Ht, j), pt(j), s.hoveringIndex = -1, B.value = !1, t("clear"), Lr();
  }, ts = (A) => {
    var j;
    if (e.multiple) {
      const pe = cn((j = e.modelValue) != null ? j : []).slice(), Be = ns(pe, A);
      Be > -1 ? pe.splice(Be, 1) : (e.multipleLimit <= 0 || pe.length < e.multipleLimit) && pe.push(A.value), t(Ht, pe), pt(pe), A.created && _(""), e.filterable && !e.reserveKeyword && (s.inputValue = "");
    } else
      t(Ht, A.value), pt(A.value), B.value = !1;
    Lr(), !B.value && Ne(() => {
      kr(A);
    });
  }, ns = (A = [], j) => En(j) ? -1 : tt(j.value) ? A.findIndex((pe) => or(dn(pe, e.valueKey), Ir(j))) : A.indexOf(j.value), kr = (A) => {
    var j, pe, Be, it, In;
    const on = Rt(A) ? A[0] : A;
    let Pr = null;
    if (on?.value) {
      const Zn = ae.value.filter((yc) => yc.value === on.value);
      Zn.length > 0 && (Pr = Zn[0].$el);
    }
    if (u.value && Pr) {
      const Zn = (it = (Be = (pe = (j = u.value) == null ? void 0 : j.popperRef) == null ? void 0 : pe.contentRef) == null ? void 0 : Be.querySelector) == null ? void 0 : it.call(Be, `.${o.be("dropdown", "wrap")}`);
      Zn && kv(Zn, Pr);
    }
    (In = c.value) == null || In.handleScroll();
  }, nc = (A) => {
    s.options.set(A.value, A), s.cachedOptions.set(A.value, A);
  }, rc = (A, j) => {
    s.options.get(A) === j && s.options.delete(A);
  }, oc = L(() => {
    var A, j;
    return (j = (A = u.value) == null ? void 0 : A.popperRef) == null ? void 0 : j.contentRef;
  }), ac = () => {
    s.isBeforeHide = !1, Ne(() => {
      var A;
      (A = c.value) == null || A.update(), kr(s.selected);
    });
  }, Lr = () => {
    var A;
    (A = p.value) == null || A.focus();
  }, sc = () => {
    var A;
    if (B.value) {
      B.value = !1, Ne(() => {
        var j;
        return (j = p.value) == null ? void 0 : j.blur();
      });
      return;
    }
    (A = p.value) == null || A.blur();
  }, lc = (A) => {
    es(A);
  }, ic = (A) => {
    if (B.value = !1, S.value) {
      const j = new FocusEvent("focus", A);
      Ne(() => W(j));
    }
  }, uc = () => {
    s.inputValue.length > 0 ? s.inputValue = "" : B.value = !1;
  }, rs = () => {
    le.value || (qo && (s.inputHovering = !0), s.menuVisibleOnFocus ? s.menuVisibleOnFocus = !1 : B.value = !B.value);
  }, cc = () => {
    if (!B.value)
      rs();
    else {
      const A = ae.value[s.hoveringIndex];
      A && !A.isDisabled && ts(A);
    }
  }, Ir = (A) => tt(A.value) ? dn(A.value, e.valueKey) : A.value, dc = L(() => ae.value.filter((A) => A.visible).every((A) => A.isDisabled)), fc = L(() => e.multiple ? e.collapseTags ? s.selected.slice(0, e.maxCollapseTags) : s.selected : []), pc = L(() => e.multiple ? e.collapseTags ? s.selected.slice(e.maxCollapseTags) : [] : []), os = (A) => {
    if (!B.value) {
      B.value = !0;
      return;
    }
    if (!(s.options.size === 0 || Te.value === 0 || T.value) && !dc.value) {
      A === "next" ? (s.hoveringIndex++, s.hoveringIndex === s.options.size && (s.hoveringIndex = 0)) : A === "prev" && (s.hoveringIndex--, s.hoveringIndex < 0 && (s.hoveringIndex = s.options.size - 1));
      const j = ae.value[s.hoveringIndex];
      (j.isDisabled || !j.visible) && os(A), Ne(() => kr(q.value));
    }
  }, mc = () => {
    if (!i.value)
      return 0;
    const A = window.getComputedStyle(i.value);
    return Number.parseFloat(A.gap || "6px");
  }, vc = L(() => {
    const A = mc();
    return { maxWidth: `${E.value && e.maxCollapseTags === 1 ? s.selectionWidth - s.collapseItemWidth - A : s.selectionWidth}px` };
  }), gc = L(() => ({ maxWidth: `${s.selectionWidth}px` })), hc = (A) => {
    t("popup-scroll", A);
  };
  return At(i, se), At(g, R), At(k, R), At(v, de), At(E, y), Fe(() => {
    $();
  }), {
    inputId: V,
    contentId: r,
    nsSelect: o,
    nsInput: a,
    states: s,
    isFocused: S,
    expanded: B,
    optionsArray: ae,
    hoverOption: q,
    selectSize: _t,
    filteredOptionsCount: Te,
    updateTooltip: R,
    updateTagTooltip: de,
    debouncedOnInputChange: yn,
    onInput: Ye,
    deletePrevTag: Qa,
    deleteTag: tc,
    deleteSelected: es,
    handleOptionSelect: ts,
    scrollToOption: kr,
    hasModelValue: D,
    shouldShowPlaceholder: lt,
    currentPlaceholder: ft,
    mouseEnterEventName: Lt,
    needStatusIcon: ve,
    showClose: ge,
    iconComponent: Ie,
    iconReverse: xe,
    validateState: Ge,
    validateIcon: U,
    showNewOption: ue,
    updateOptions: He,
    collapseTagSize: at,
    setSelected: $,
    selectDisabled: le,
    emptyText: Ee,
    handleCompositionStart: b,
    handleCompositionUpdate: w,
    handleCompositionEnd: O,
    onOptionCreate: nc,
    onOptionDestroy: rc,
    handleMenuEnter: ac,
    focus: Lr,
    blur: sc,
    handleClearClick: lc,
    handleClickOutside: ic,
    handleEsc: uc,
    toggleMenu: rs,
    selectOption: cc,
    getValueKey: Ir,
    navigateOptions: os,
    dropdownMenuVisible: st,
    showTagList: fc,
    collapseTagList: pc,
    popupScroll: hc,
    tagStyle: vc,
    collapseTagStyle: gc,
    popperRef: oc,
    inputRef: p,
    tooltipRef: u,
    tagTooltipRef: f,
    prefixRef: m,
    suffixRef: h,
    selectRef: l,
    wrapperRef: k,
    selectionRef: i,
    scrollbarRef: c,
    menuRef: g,
    tagMenuRef: v,
    collapseItemRef: E
  };
};
var Ey = Y({
  name: "ElOptions",
  setup(e, { slots: t }) {
    const n = Ce(So);
    let r = [];
    return () => {
      var o, a;
      const s = (o = t.default) == null ? void 0 : o.call(t), l = [];
      function i(u) {
        Rt(u) && u.forEach((f) => {
          var p, m, h, g;
          const v = (p = f?.type || {}) == null ? void 0 : p.name;
          v === "ElOptionGroup" ? i(!nt(f.children) && !Rt(f.children) && We((m = f.children) == null ? void 0 : m.default) ? (h = f.children) == null ? void 0 : h.default() : f.children) : v === "ElOption" ? l.push((g = f.props) == null ? void 0 : g.value) : Rt(f.children) && i(f.children);
        });
      }
      return s.length && i((a = s[0]) == null ? void 0 : a.children), or(l, r) || (r = l, n && (n.states.optionValues = l)), s;
    };
  }
});
const Ty = Oe({
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
  size: Oa,
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
  teleported: Va.teleported,
  persistent: {
    type: Boolean,
    default: !0
  },
  clearIcon: {
    type: xn,
    default: _o
  },
  fitInputWidth: Boolean,
  suffixIcon: {
    type: xn,
    default: Rv
  },
  tagType: { ...ea.type, default: "info" },
  tagEffect: { ...ea.effect, default: "light" },
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
    values: To,
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
  ...Ii,
  ...Tr(["ariaLabel"])
}), bl = "ElSelect", Cy = Y({
  name: bl,
  componentName: bl,
  components: {
    ElSelectMenu: _y,
    ElOption: Ua,
    ElOptions: Ey,
    ElTag: dy,
    ElScrollbar: Mg,
    ElTooltip: fu,
    ElIcon: ct
  },
  directives: { ClickOutside: fy },
  props: Ty,
  emits: [
    Ht,
    no,
    "remove-tag",
    "clear",
    "visible-change",
    "focus",
    "blur",
    "popup-scroll"
  ],
  setup(e, { emit: t }) {
    const n = L(() => {
      const { modelValue: i, multiple: u } = e, f = u ? [] : void 0;
      return Rt(i) ? u ? i : f : u ? f : i;
    }), r = Dn({
      ...ga(e),
      modelValue: n
    }), o = wy(r, t), { calculatorRef: a, inputStyle: s } = my();
    Ft(So, Dn({
      props: r,
      states: o.states,
      optionsArray: o.optionsArray,
      handleOptionSelect: o.handleOptionSelect,
      onOptionCreate: o.onOptionCreate,
      onOptionDestroy: o.onOptionDestroy,
      selectRef: o.selectRef,
      setSelected: o.setSelected
    }));
    const l = L(() => e.multiple ? o.states.selected.map((i) => i.currentLabel) : o.states.selectedLabel);
    return {
      ...o,
      modelValue: n,
      selectedLabel: l,
      calculatorRef: a,
      inputStyle: s
    };
  }
});
function Sy(e, t, n, r, o, a) {
  const s = bn("el-tag"), l = bn("el-tooltip"), i = bn("el-icon"), u = bn("el-option"), f = bn("el-options"), p = bn("el-scrollbar"), m = bn("el-select-menu"), h = Nc("click-outside");
  return vt((P(), x("div", {
    ref: "selectRef",
    class: z([e.nsSelect.b(), e.nsSelect.m(e.selectSize)]),
    [Rc(e.mouseEnterEventName)]: (g) => e.states.inputHovering = !0,
    onMouseleave: (g) => e.states.inputHovering = !1
  }, [
    H(l, {
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
      onHide: (g) => e.states.isBeforeHide = !1
    }, {
      default: te(() => {
        var g;
        return [
          N("div", {
            ref: "wrapperRef",
            class: z([
              e.nsSelect.e("wrapper"),
              e.nsSelect.is("focused", e.isFocused),
              e.nsSelect.is("hovering", e.states.inputHovering),
              e.nsSelect.is("filterable", e.filterable),
              e.nsSelect.is("disabled", e.selectDisabled)
            ]),
            onClick: Je(e.toggleMenu, ["prevent"])
          }, [
            e.$slots.prefix ? (P(), x("div", {
              key: 0,
              ref: "prefixRef",
              class: z(e.nsSelect.e("prefix"))
            }, [
              ie(e.$slots, "prefix")
            ], 2)) : G("v-if", !0),
            N("div", {
              ref: "selectionRef",
              class: z([
                e.nsSelect.e("selection"),
                e.nsSelect.is("near", e.multiple && !e.$slots.prefix && !!e.states.selected.length)
              ])
            }, [
              e.multiple ? ie(e.$slots, "tag", { key: 0 }, () => [
                (P(!0), x(Ve, null, qt(e.showTagList, (v) => (P(), x("div", {
                  key: e.getValueKey(v),
                  class: z(e.nsSelect.e("selected-item"))
                }, [
                  H(s, {
                    closable: !e.selectDisabled && !v.isDisabled,
                    size: e.collapseTagSize,
                    type: e.tagType,
                    effect: e.tagEffect,
                    "disable-transitions": "",
                    style: Ae(e.tagStyle),
                    onClose: (E) => e.deleteTag(E, v)
                  }, {
                    default: te(() => [
                      N("span", {
                        class: z(e.nsSelect.e("tags-text"))
                      }, [
                        ie(e.$slots, "label", {
                          label: v.currentLabel,
                          value: v.value
                        }, () => [
                          wn(J(v.currentLabel), 1)
                        ])
                      ], 2)
                    ]),
                    _: 2
                  }, 1032, ["closable", "size", "type", "effect", "style", "onClose"])
                ], 2))), 128)),
                e.collapseTags && e.states.selected.length > e.maxCollapseTags ? (P(), Q(l, {
                  key: 0,
                  ref: "tagTooltipRef",
                  disabled: e.dropdownMenuVisible || !e.collapseTagsTooltip,
                  "fallback-placements": ["bottom", "top", "right", "left"],
                  effect: e.effect,
                  placement: "bottom",
                  teleported: e.teleported
                }, {
                  default: te(() => [
                    N("div", {
                      ref: "collapseItemRef",
                      class: z(e.nsSelect.e("selected-item"))
                    }, [
                      H(s, {
                        closable: !1,
                        size: e.collapseTagSize,
                        type: e.tagType,
                        effect: e.tagEffect,
                        "disable-transitions": "",
                        style: Ae(e.collapseTagStyle)
                      }, {
                        default: te(() => [
                          N("span", {
                            class: z(e.nsSelect.e("tags-text"))
                          }, " + " + J(e.states.selected.length - e.maxCollapseTags), 3)
                        ]),
                        _: 1
                      }, 8, ["size", "type", "effect", "style"])
                    ], 2)
                  ]),
                  content: te(() => [
                    N("div", {
                      ref: "tagMenuRef",
                      class: z(e.nsSelect.e("selection"))
                    }, [
                      (P(!0), x(Ve, null, qt(e.collapseTagList, (v) => (P(), x("div", {
                        key: e.getValueKey(v),
                        class: z(e.nsSelect.e("selected-item"))
                      }, [
                        H(s, {
                          class: "in-tooltip",
                          closable: !e.selectDisabled && !v.isDisabled,
                          size: e.collapseTagSize,
                          type: e.tagType,
                          effect: e.tagEffect,
                          "disable-transitions": "",
                          onClose: (E) => e.deleteTag(E, v)
                        }, {
                          default: te(() => [
                            N("span", {
                              class: z(e.nsSelect.e("tags-text"))
                            }, [
                              ie(e.$slots, "label", {
                                label: v.currentLabel,
                                value: v.value
                              }, () => [
                                wn(J(v.currentLabel), 1)
                              ])
                            ], 2)
                          ]),
                          _: 2
                        }, 1032, ["closable", "size", "type", "effect", "onClose"])
                      ], 2))), 128))
                    ], 2)
                  ]),
                  _: 3
                }, 8, ["disabled", "effect", "teleported"])) : G("v-if", !0)
              ]) : G("v-if", !0),
              N("div", {
                class: z([
                  e.nsSelect.e("selected-item"),
                  e.nsSelect.e("input-wrapper"),
                  e.nsSelect.is("hidden", !e.filterable)
                ])
              }, [
                vt(N("input", {
                  id: e.inputId,
                  ref: "inputRef",
                  "onUpdate:modelValue": (v) => e.states.inputValue = v,
                  type: "text",
                  name: e.name,
                  class: z([e.nsSelect.e("input"), e.nsSelect.is(e.selectSize)]),
                  disabled: e.selectDisabled,
                  autocomplete: e.autocomplete,
                  style: Ae(e.inputStyle),
                  tabindex: e.tabindex,
                  role: "combobox",
                  readonly: !e.filterable,
                  spellcheck: "false",
                  "aria-activedescendant": ((g = e.hoverOption) == null ? void 0 : g.id) || "",
                  "aria-controls": e.contentId,
                  "aria-expanded": e.dropdownMenuVisible,
                  "aria-label": e.ariaLabel,
                  "aria-autocomplete": "none",
                  "aria-haspopup": "listbox",
                  onKeydown: [
                    qn(Je((v) => e.navigateOptions("next"), ["stop", "prevent"]), ["down"]),
                    qn(Je((v) => e.navigateOptions("prev"), ["stop", "prevent"]), ["up"]),
                    qn(Je(e.handleEsc, ["stop", "prevent"]), ["esc"]),
                    qn(Je(e.selectOption, ["stop", "prevent"]), ["enter"]),
                    qn(Je(e.deletePrevTag, ["stop"]), ["delete"])
                  ],
                  onCompositionstart: e.handleCompositionStart,
                  onCompositionupdate: e.handleCompositionUpdate,
                  onCompositionend: e.handleCompositionEnd,
                  onInput: e.onInput,
                  onClick: Je(e.toggleMenu, ["stop"])
                }, null, 46, ["id", "onUpdate:modelValue", "name", "disabled", "autocomplete", "tabindex", "readonly", "aria-activedescendant", "aria-controls", "aria-expanded", "aria-label", "onKeydown", "onCompositionstart", "onCompositionupdate", "onCompositionend", "onInput", "onClick"]), [
                  [$c, e.states.inputValue]
                ]),
                e.filterable ? (P(), x("span", {
                  key: 0,
                  ref: "calculatorRef",
                  "aria-hidden": "true",
                  class: z(e.nsSelect.e("input-calculator")),
                  textContent: J(e.states.inputValue)
                }, null, 10, ["textContent"])) : G("v-if", !0)
              ], 2),
              e.shouldShowPlaceholder ? (P(), x("div", {
                key: 1,
                class: z([
                  e.nsSelect.e("selected-item"),
                  e.nsSelect.e("placeholder"),
                  e.nsSelect.is("transparent", !e.hasModelValue || e.expanded && !e.states.inputValue)
                ])
              }, [
                e.hasModelValue ? ie(e.$slots, "label", {
                  key: 0,
                  label: e.currentPlaceholder,
                  value: e.modelValue
                }, () => [
                  N("span", null, J(e.currentPlaceholder), 1)
                ]) : (P(), x("span", { key: 1 }, J(e.currentPlaceholder), 1))
              ], 2)) : G("v-if", !0)
            ], 2),
            N("div", {
              ref: "suffixRef",
              class: z(e.nsSelect.e("suffix"))
            }, [
              e.iconComponent && !e.showClose ? (P(), Q(i, {
                key: 0,
                class: z([e.nsSelect.e("caret"), e.nsSelect.e("icon"), e.iconReverse])
              }, {
                default: te(() => [
                  (P(), Q(mt(e.iconComponent)))
                ]),
                _: 1
              }, 8, ["class"])) : G("v-if", !0),
              e.showClose && e.clearIcon ? (P(), Q(i, {
                key: 1,
                class: z([
                  e.nsSelect.e("caret"),
                  e.nsSelect.e("icon"),
                  e.nsSelect.e("clear")
                ]),
                onClick: e.handleClearClick
              }, {
                default: te(() => [
                  (P(), Q(mt(e.clearIcon)))
                ]),
                _: 1
              }, 8, ["class", "onClick"])) : G("v-if", !0),
              e.validateState && e.validateIcon && e.needStatusIcon ? (P(), Q(i, {
                key: 2,
                class: z([
                  e.nsInput.e("icon"),
                  e.nsInput.e("validateIcon"),
                  e.nsInput.is("loading", e.validateState === "validating")
                ])
              }, {
                default: te(() => [
                  (P(), Q(mt(e.validateIcon)))
                ]),
                _: 1
              }, 8, ["class"])) : G("v-if", !0)
            ], 2)
          ], 10, ["onClick"])
        ];
      }),
      content: te(() => [
        H(m, { ref: "menuRef" }, {
          default: te(() => [
            e.$slots.header ? (P(), x("div", {
              key: 0,
              class: z(e.nsSelect.be("dropdown", "header")),
              onClick: Je(() => {
              }, ["stop"])
            }, [
              ie(e.$slots, "header")
            ], 10, ["onClick"])) : G("v-if", !0),
            vt(H(p, {
              id: e.contentId,
              ref: "scrollbarRef",
              tag: "ul",
              "wrap-class": e.nsSelect.be("dropdown", "wrap"),
              "view-class": e.nsSelect.be("dropdown", "list"),
              class: z([e.nsSelect.is("empty", e.filteredOptionsCount === 0)]),
              role: "listbox",
              "aria-label": e.ariaLabel,
              "aria-orientation": "vertical",
              onScroll: e.popupScroll
            }, {
              default: te(() => [
                e.showNewOption ? (P(), Q(u, {
                  key: 0,
                  value: e.states.inputValue,
                  created: !0
                }, null, 8, ["value"])) : G("v-if", !0),
                H(f, null, {
                  default: te(() => [
                    ie(e.$slots, "default")
                  ]),
                  _: 3
                })
              ]),
              _: 3
            }, 8, ["id", "wrap-class", "view-class", "class", "aria-label", "onScroll"]), [
              [Qt, e.states.options.size > 0 && !e.loading]
            ]),
            e.$slots.loading && e.loading ? (P(), x("div", {
              key: 1,
              class: z(e.nsSelect.be("dropdown", "loading"))
            }, [
              ie(e.$slots, "loading")
            ], 2)) : e.loading || e.filteredOptionsCount === 0 ? (P(), x("div", {
              key: 2,
              class: z(e.nsSelect.be("dropdown", "empty"))
            }, [
              ie(e.$slots, "empty", {}, () => [
                N("span", null, J(e.emptyText), 1)
              ])
            ], 2)) : G("v-if", !0),
            e.$slots.footer ? (P(), x("div", {
              key: 3,
              class: z(e.nsSelect.be("dropdown", "footer")),
              onClick: Je(() => {
              }, ["stop"])
            }, [
              ie(e.$slots, "footer")
            ], 10, ["onClick"])) : G("v-if", !0)
          ]),
          _: 3
        }, 512)
      ]),
      _: 3
    }, 8, ["visible", "placement", "teleported", "popper-class", "popper-options", "fallback-placements", "effect", "transition", "persistent", "append-to", "show-arrow", "offset", "onBeforeShow", "onHide"])
  ], 16, ["onMouseleave"])), [
    [h, e.handleClickOutside, e.popperRef]
  ]);
}
var Oy = /* @__PURE__ */ Le(Cy, [["render", Sy], ["__file", "select.vue"]]);
const ky = Y({
  name: "ElOptionGroup",
  componentName: "ElOptionGroup",
  props: {
    label: String,
    disabled: Boolean
  },
  setup(e) {
    const t = Me("select"), n = M(null), r = Qe(), o = M([]);
    Ft(pu, Dn({
      ...ga(e)
    }));
    const a = L(() => o.value.some((u) => u.visible === !0)), s = (u) => {
      var f, p;
      return ((f = u.type) == null ? void 0 : f.name) === "ElOption" && !!((p = u.component) != null && p.proxy);
    }, l = (u) => {
      const f = cn(u), p = [];
      return f.forEach((m) => {
        var h, g;
        s(m) ? p.push(m.component.proxy) : (h = m.children) != null && h.length ? p.push(...l(m.children)) : (g = m.component) != null && g.subTree && p.push(...l(m.component.subTree));
      }), p;
    }, i = () => {
      o.value = l(r.subTree);
    };
    return Fe(() => {
      i();
    }), uv(n, i, {
      attributes: !0,
      subtree: !0,
      childList: !0
    }), {
      groupRef: n,
      visible: a,
      ns: t
    };
  }
});
function Ly(e, t, n, r, o, a) {
  return vt((P(), x("ul", {
    ref: "groupRef",
    class: z(e.ns.be("group", "wrap"))
  }, [
    N("li", {
      class: z(e.ns.be("group", "title"))
    }, J(e.label), 3),
    N("li", null, [
      N("ul", {
        class: z(e.ns.b("group"))
      }, [
        ie(e.$slots, "default")
      ], 2)
    ])
  ], 2)), [
    [Qt, e.visible]
  ]);
}
var mu = /* @__PURE__ */ Le(ky, [["render", Ly], ["__file", "option-group.vue"]]);
const vu = kt(Oy, {
  Option: Ua,
  OptionGroup: mu
}), gu = ka(Ua);
ka(mu);
const Iy = Oe({
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
    type: re(String),
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
    type: re([
      String,
      Array,
      Function
    ]),
    default: ""
  },
  striped: Boolean,
  stripedFlow: Boolean,
  format: {
    type: re(Function),
    default: (e) => `${e}%`
  }
}), Py = Y({
  name: "ElProgress"
}), Ay = /* @__PURE__ */ Y({
  ...Py,
  props: Iy,
  setup(e) {
    const t = e, n = {
      success: "#13ce66",
      exception: "#ff4949",
      warning: "#e6a23c",
      default: "#20a0ff"
    }, r = Me("progress"), o = L(() => {
      const b = {
        width: `${t.percentage}%`,
        animationDuration: `${t.duration}s`
      }, w = T(t.percentage);
      return w.includes("gradient") ? b.background = w : b.backgroundColor = w, b;
    }), a = L(() => (t.strokeWidth / t.width * 100).toFixed(1)), s = L(() => ["circle", "dashboard"].includes(t.type) ? Number.parseInt(`${50 - Number.parseFloat(a.value) / 2}`, 10) : 0), l = L(() => {
      const b = s.value, w = t.type === "dashboard";
      return `
          M 50 50
          m 0 ${w ? "" : "-"}${b}
          a ${b} ${b} 0 1 1 0 ${w ? "-" : ""}${b * 2}
          a ${b} ${b} 0 1 1 0 ${w ? "" : "-"}${b * 2}
          `;
    }), i = L(() => 2 * Math.PI * s.value), u = L(() => t.type === "dashboard" ? 0.75 : 1), f = L(() => `${-1 * i.value * (1 - u.value) / 2}px`), p = L(() => ({
      strokeDasharray: `${i.value * u.value}px, ${i.value}px`,
      strokeDashoffset: f.value
    })), m = L(() => ({
      strokeDasharray: `${i.value * u.value * (t.percentage / 100)}px, ${i.value}px`,
      strokeDashoffset: f.value,
      transition: "stroke-dasharray 0.6s ease 0s, stroke 0.6s ease, opacity ease 0.6s"
    })), h = L(() => {
      let b;
      return t.color ? b = T(t.percentage) : b = n[t.status] || n.default, b;
    }), g = L(() => t.status === "warning" ? Mi : t.type === "line" ? t.status === "success" ? $i : _o : t.status === "success" ? Mv : vr), v = L(() => t.type === "line" ? 12 + t.strokeWidth * 0.4 : t.width * 0.111111 + 2), E = L(() => t.format(t.percentage));
    function c(b) {
      const w = 100 / b.length;
      return b.map((k, S) => nt(k) ? {
        color: k,
        percentage: (S + 1) * w
      } : k).sort((k, S) => k.percentage - S.percentage);
    }
    const T = (b) => {
      var w;
      const { color: O } = t;
      if (We(O))
        return O(b);
      if (nt(O))
        return O;
      {
        const k = c(O);
        for (const S of k)
          if (S.percentage > b)
            return S.color;
        return (w = k[k.length - 1]) == null ? void 0 : w.color;
      }
    };
    return (b, w) => (P(), x("div", {
      class: z([
        d(r).b(),
        d(r).m(b.type),
        d(r).is(b.status),
        {
          [d(r).m("without-text")]: !b.showText,
          [d(r).m("text-inside")]: b.textInside
        }
      ]),
      role: "progressbar",
      "aria-valuenow": b.percentage,
      "aria-valuemin": "0",
      "aria-valuemax": "100"
    }, [
      b.type === "line" ? (P(), x("div", {
        key: 0,
        class: z(d(r).b("bar"))
      }, [
        N("div", {
          class: z(d(r).be("bar", "outer")),
          style: Ae({ height: `${b.strokeWidth}px` })
        }, [
          N("div", {
            class: z([
              d(r).be("bar", "inner"),
              { [d(r).bem("bar", "inner", "indeterminate")]: b.indeterminate },
              { [d(r).bem("bar", "inner", "striped")]: b.striped },
              { [d(r).bem("bar", "inner", "striped-flow")]: b.stripedFlow }
            ]),
            style: Ae(d(o))
          }, [
            (b.showText || b.$slots.default) && b.textInside ? (P(), x("div", {
              key: 0,
              class: z(d(r).be("bar", "innerText"))
            }, [
              ie(b.$slots, "default", { percentage: b.percentage }, () => [
                N("span", null, J(d(E)), 1)
              ])
            ], 2)) : G("v-if", !0)
          ], 6)
        ], 6)
      ], 2)) : (P(), x("div", {
        key: 1,
        class: z(d(r).b("circle")),
        style: Ae({ height: `${b.width}px`, width: `${b.width}px` })
      }, [
        (P(), x("svg", { viewBox: "0 0 100 100" }, [
          N("path", {
            class: z(d(r).be("circle", "track")),
            d: d(l),
            stroke: `var(${d(r).cssVarName("fill-color-light")}, #e5e9f2)`,
            "stroke-linecap": b.strokeLinecap,
            "stroke-width": d(a),
            fill: "none",
            style: Ae(d(p))
          }, null, 14, ["d", "stroke", "stroke-linecap", "stroke-width"]),
          N("path", {
            class: z(d(r).be("circle", "path")),
            d: d(l),
            stroke: d(h),
            fill: "none",
            opacity: b.percentage ? 1 : 0,
            "stroke-linecap": b.strokeLinecap,
            "stroke-width": d(a),
            style: Ae(d(m))
          }, null, 14, ["d", "stroke", "opacity", "stroke-linecap", "stroke-width"])
        ]))
      ], 6)),
      (b.showText || b.$slots.default) && !b.textInside ? (P(), x("div", {
        key: 2,
        class: z(d(r).e("text")),
        style: Ae({ fontSize: `${d(v)}px` })
      }, [
        ie(b.$slots, "default", { percentage: b.percentage }, () => [
          b.status ? (P(), Q(d(ct), { key: 1 }, {
            default: te(() => [
              (P(), Q(mt(d(g))))
            ]),
            _: 1
          })) : (P(), x("span", { key: 0 }, J(d(E)), 1))
        ])
      ], 6)) : G("v-if", !0)
    ], 10, ["aria-valuenow"]));
  }
});
var Ny = /* @__PURE__ */ Le(Ay, [["__file", "progress.vue"]]);
const Ry = kt(Ny), $y = Oe({
  animated: {
    type: Boolean,
    default: !1
  },
  count: {
    type: Number,
    default: 1
  },
  rows: {
    type: Number,
    default: 3
  },
  loading: {
    type: Boolean,
    default: !0
  },
  throttle: {
    type: re([Number, Object])
  }
}), My = Oe({
  variant: {
    type: String,
    values: [
      "circle",
      "rect",
      "h1",
      "h3",
      "text",
      "caption",
      "p",
      "image",
      "button"
    ],
    default: "text"
  }
}), Dy = Y({
  name: "ElSkeletonItem"
}), Fy = /* @__PURE__ */ Y({
  ...Dy,
  props: My,
  setup(e) {
    const t = Me("skeleton");
    return (n, r) => (P(), x("div", {
      class: z([d(t).e("item"), d(t).e(n.variant)])
    }, [
      n.variant === "image" ? (P(), Q(d(Yv), { key: 0 })) : G("v-if", !0)
    ], 2));
  }
});
var so = /* @__PURE__ */ Le(Fy, [["__file", "skeleton-item.vue"]]);
const xy = (e, t = 0) => {
  if (t === 0)
    return e;
  const n = tt(t) && !!t.initVal, r = M(n);
  let o = null;
  const a = (l) => {
    if (En(l)) {
      r.value = e.value;
      return;
    }
    o && clearTimeout(o), o = setTimeout(() => {
      r.value = e.value;
    }, l);
  }, s = (l) => {
    l === "leading" ? je(t) ? a(t) : a(t.leading) : tt(t) ? a(t.trailing) : r.value = !1;
  };
  return Fe(() => s("leading")), ce(() => e.value, (l) => {
    s(l ? "leading" : "trailing");
  }), r;
}, zy = Y({
  name: "ElSkeleton"
}), By = /* @__PURE__ */ Y({
  ...zy,
  props: $y,
  setup(e, { expose: t }) {
    const n = e, r = Me("skeleton"), o = xy(Nt(n, "loading"), n.throttle);
    return t({
      uiLoading: o
    }), (a, s) => d(o) ? (P(), x("div", pn({
      key: 0,
      class: [d(r).b(), d(r).is("animated", a.animated)]
    }, a.$attrs), [
      (P(!0), x(Ve, null, qt(a.count, (l) => (P(), x(Ve, { key: l }, [
        d(o) ? ie(a.$slots, "template", { key: l }, () => [
          H(so, {
            class: z(d(r).is("first")),
            variant: "p"
          }, null, 8, ["class"]),
          (P(!0), x(Ve, null, qt(a.rows, (i) => (P(), Q(so, {
            key: i,
            class: z([
              d(r).e("paragraph"),
              d(r).is("last", i === a.rows && a.rows > 1)
            ]),
            variant: "p"
          }, null, 8, ["class"]))), 128))
        ]) : G("v-if", !0)
      ], 64))), 128))
    ], 16)) : ie(a.$slots, "default", Mc(pn({ key: 1 }, a.$attrs)));
  }
});
var Wy = /* @__PURE__ */ Le(By, [["__file", "skeleton.vue"]]);
const jy = kt(Wy, {
  SkeletonItem: so
});
ka(so);
const hu = ["success", "info", "warning", "error"], Ze = Fi({
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
  appendTo: De ? document.body : void 0
}), Vy = Oe({
  customClass: {
    type: String,
    default: Ze.customClass
  },
  center: {
    type: Boolean,
    default: Ze.center
  },
  dangerouslyUseHTMLString: {
    type: Boolean,
    default: Ze.dangerouslyUseHTMLString
  },
  duration: {
    type: Number,
    default: Ze.duration
  },
  icon: {
    type: xn,
    default: Ze.icon
  },
  id: {
    type: String,
    default: Ze.id
  },
  message: {
    type: re([
      String,
      Object,
      Function
    ]),
    default: Ze.message
  },
  onClose: {
    type: re(Function),
    default: Ze.onClose
  },
  showClose: {
    type: Boolean,
    default: Ze.showClose
  },
  type: {
    type: String,
    values: hu,
    default: Ze.type
  },
  plain: {
    type: Boolean,
    default: Ze.plain
  },
  offset: {
    type: Number,
    default: Ze.offset
  },
  zIndex: {
    type: Number,
    default: Ze.zIndex
  },
  grouping: {
    type: Boolean,
    default: Ze.grouping
  },
  repeatNum: {
    type: Number,
    default: Ze.repeatNum
  }
}), Uy = {
  destroy: () => !0
}, Et = Dc([]), Hy = (e) => {
  const t = Et.findIndex((o) => o.id === e), n = Et[t];
  let r;
  return t > 0 && (r = Et[t - 1]), { current: n, prev: r };
}, Ky = (e) => {
  const { prev: t } = Hy(e);
  return t ? t.vm.exposed.bottom.value : 0;
}, Gy = (e, t) => Et.findIndex((r) => r.id === e) > 0 ? 16 : t, Yy = Y({
  name: "ElMessage"
}), Zy = /* @__PURE__ */ Y({
  ...Yy,
  props: Vy,
  emits: Uy,
  setup(e, { expose: t }) {
    const n = e, { Close: r } = tg, { ns: o, zIndex: a } = Ai("message"), { currentZIndex: s, nextZIndex: l } = a, i = M(), u = M(!1), f = M(0);
    let p;
    const m = L(() => n.type ? n.type === "error" ? "danger" : n.type : "info"), h = L(() => {
      const S = n.type;
      return { [o.bm("icon", S)]: S && ro[S] };
    }), g = L(() => n.icon || ro[n.type] || ""), v = L(() => Ky(n.id)), E = L(() => Gy(n.id, n.offset) + v.value), c = L(() => f.value + E.value), T = L(() => ({
      top: `${E.value}px`,
      zIndex: s.value
    }));
    function b() {
      n.duration !== 0 && ({ stop: p } = yi(() => {
        O();
      }, n.duration));
    }
    function w() {
      p?.();
    }
    function O() {
      u.value = !1;
    }
    function k({ code: S }) {
      S === $t.esc && O();
    }
    return Fe(() => {
      b(), l(), u.value = !0;
    }), ce(() => n.repeatNum, () => {
      w(), b();
    }), St(document, "keydown", k), At(i, () => {
      f.value = i.value.getBoundingClientRect().height;
    }), t({
      visible: u,
      bottom: c,
      close: O
    }), (S, W) => (P(), Q(Gn, {
      name: d(o).b("fade"),
      onBeforeLeave: S.onClose,
      onAfterLeave: (B) => S.$emit("destroy"),
      persisted: ""
    }, {
      default: te(() => [
        vt(N("div", {
          id: S.id,
          ref_key: "messageRef",
          ref: i,
          class: z([
            d(o).b(),
            { [d(o).m(S.type)]: S.type },
            d(o).is("center", S.center),
            d(o).is("closable", S.showClose),
            d(o).is("plain", S.plain),
            S.customClass
          ]),
          style: Ae(d(T)),
          role: "alert",
          onMouseenter: w,
          onMouseleave: b
        }, [
          S.repeatNum > 1 ? (P(), Q(d(ay), {
            key: 0,
            value: S.repeatNum,
            type: d(m),
            class: z(d(o).e("badge"))
          }, null, 8, ["value", "type", "class"])) : G("v-if", !0),
          d(g) ? (P(), Q(d(ct), {
            key: 1,
            class: z([d(o).e("icon"), d(h)])
          }, {
            default: te(() => [
              (P(), Q(mt(d(g))))
            ]),
            _: 1
          }, 8, ["class"])) : G("v-if", !0),
          ie(S.$slots, "default", {}, () => [
            S.dangerouslyUseHTMLString ? (P(), x(Ve, { key: 1 }, [
              G(" Caution here, message could've been compromised, never use user's input as message "),
              N("p", {
                class: z(d(o).e("content")),
                innerHTML: S.message
              }, null, 10, ["innerHTML"])
            ], 2112)) : (P(), x("p", {
              key: 0,
              class: z(d(o).e("content"))
            }, J(S.message), 3))
          ]),
          S.showClose ? (P(), Q(d(ct), {
            key: 2,
            class: z(d(o).e("closeBtn")),
            onClick: Je(O, ["stop"])
          }, {
            default: te(() => [
              H(d(r))
            ]),
            _: 1
          }, 8, ["class", "onClick"])) : G("v-if", !0)
        ], 46, ["id"]), [
          [Qt, u.value]
        ])
      ]),
      _: 3
    }, 8, ["name", "onBeforeLeave", "onAfterLeave"]));
  }
});
var qy = /* @__PURE__ */ Le(Zy, [["__file", "message.vue"]]);
let Xy = 1;
const yu = (e) => {
  const t = !e || nt(e) || cr(e) || We(e) ? { message: e } : e, n = {
    ...Ze,
    ...t
  };
  if (!n.appendTo)
    n.appendTo = document.body;
  else if (nt(n.appendTo)) {
    let r = document.querySelector(n.appendTo);
    Ct(r) || (r = document.body), n.appendTo = r;
  }
  return eo(wt.grouping) && !n.grouping && (n.grouping = wt.grouping), je(wt.duration) && n.duration === 3e3 && (n.duration = wt.duration), je(wt.offset) && n.offset === 16 && (n.offset = wt.offset), eo(wt.showClose) && !n.showClose && (n.showClose = wt.showClose), n;
}, Jy = (e) => {
  const t = Et.indexOf(e);
  if (t === -1)
    return;
  Et.splice(t, 1);
  const { handler: n } = e;
  n.close();
}, Qy = ({ appendTo: e, ...t }, n) => {
  const r = `message_${Xy++}`, o = t.onClose, a = document.createElement("div"), s = {
    ...t,
    id: r,
    onClose: () => {
      o?.(), Jy(f);
    },
    onDestroy: () => {
      qr(null, a);
    }
  }, l = H(qy, s, We(s.message) || cr(s.message) ? {
    default: We(s.message) ? s.message : () => s.message
  } : null);
  l.appContext = n || Vn._context, qr(l, a), e.appendChild(a.firstElementChild);
  const i = l.component, f = {
    id: r,
    vnode: l,
    vm: i,
    handler: {
      close: () => {
        i.exposed.visible.value = !1;
      }
    },
    props: l.component.props
  };
  return f;
}, Vn = (e = {}, t) => {
  if (!De)
    return { close: () => {
    } };
  const n = yu(e);
  if (n.grouping && Et.length) {
    const o = Et.find(({ vnode: a }) => {
      var s;
      return ((s = a.props) == null ? void 0 : s.message) === n.message;
    });
    if (o)
      return o.props.repeatNum += 1, o.props.type = n.type, o.handler;
  }
  if (je(wt.max) && Et.length >= wt.max)
    return { close: () => {
    } };
  const r = Qy(n, t);
  return Et.push(r), r.handler;
};
hu.forEach((e) => {
  Vn[e] = (t = {}, n) => {
    const r = yu(t);
    return Vn({ ...r, type: e }, n);
  };
});
function eb(e) {
  for (const t of Et)
    (!e || e === t.props.type) && t.handler.close();
}
Vn.closeAll = eb;
Vn._context = null;
const tb = Ri(Vn, "$message"), bu = [
  "success",
  "info",
  "warning",
  "error"
], nb = Oe({
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
    type: xn
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
    values: [...bu, ""],
    default: ""
  },
  zIndex: Number
}), rb = {
  destroy: () => !0
}, ob = Y({
  name: "ElNotification"
}), ab = /* @__PURE__ */ Y({
  ...ob,
  props: nb,
  emits: rb,
  setup(e, { expose: t }) {
    const n = e, { ns: r, zIndex: o } = Ai("notification"), { nextZIndex: a, currentZIndex: s } = o, { Close: l } = eg, i = M(!1);
    let u;
    const f = L(() => {
      const b = n.type;
      return b && ro[n.type] ? r.m(b) : "";
    }), p = L(() => n.type && ro[n.type] || n.icon), m = L(() => n.position.endsWith("right") ? "right" : "left"), h = L(() => n.position.startsWith("top") ? "top" : "bottom"), g = L(() => {
      var b;
      return {
        [h.value]: `${n.offset}px`,
        zIndex: (b = n.zIndex) != null ? b : s.value
      };
    });
    function v() {
      n.duration > 0 && ({ stop: u } = yi(() => {
        i.value && c();
      }, n.duration));
    }
    function E() {
      u?.();
    }
    function c() {
      i.value = !1;
    }
    function T({ code: b }) {
      b === $t.delete || b === $t.backspace ? E() : b === $t.esc ? i.value && c() : v();
    }
    return Fe(() => {
      v(), a(), i.value = !0;
    }), St(document, "keydown", T), t({
      visible: i,
      close: c
    }), (b, w) => (P(), Q(Gn, {
      name: d(r).b("fade"),
      onBeforeLeave: b.onClose,
      onAfterLeave: (O) => b.$emit("destroy"),
      persisted: ""
    }, {
      default: te(() => [
        vt(N("div", {
          id: b.id,
          class: z([d(r).b(), b.customClass, d(m)]),
          style: Ae(d(g)),
          role: "alert",
          onMouseenter: E,
          onMouseleave: v,
          onClick: b.onClick
        }, [
          d(p) ? (P(), Q(d(ct), {
            key: 0,
            class: z([d(r).e("icon"), d(f)])
          }, {
            default: te(() => [
              (P(), Q(mt(d(p))))
            ]),
            _: 1
          }, 8, ["class"])) : G("v-if", !0),
          N("div", {
            class: z(d(r).e("group"))
          }, [
            N("h2", {
              class: z(d(r).e("title")),
              textContent: J(b.title)
            }, null, 10, ["textContent"]),
            vt(N("div", {
              class: z(d(r).e("content")),
              style: Ae(b.title ? void 0 : { margin: 0 })
            }, [
              ie(b.$slots, "default", {}, () => [
                b.dangerouslyUseHTMLString ? (P(), x(Ve, { key: 1 }, [
                  G(" Caution here, message could've been compromised, never use user's input as message "),
                  N("p", { innerHTML: b.message }, null, 8, ["innerHTML"])
                ], 2112)) : (P(), x("p", { key: 0 }, J(b.message), 1))
              ])
            ], 6), [
              [Qt, b.message]
            ]),
            b.showClose ? (P(), Q(d(ct), {
              key: 0,
              class: z(d(r).e("closeBtn")),
              onClick: Je(c, ["stop"])
            }, {
              default: te(() => [
                H(d(l))
              ]),
              _: 1
            }, 8, ["class", "onClick"])) : G("v-if", !0)
          ], 2)
        ], 46, ["id", "onClick"]), [
          [Qt, i.value]
        ])
      ]),
      _: 3
    }, 8, ["name", "onBeforeLeave", "onAfterLeave"]));
  }
});
var sb = /* @__PURE__ */ Le(ab, [["__file", "notification.vue"]]);
const lo = {
  "top-left": [],
  "top-right": [],
  "bottom-left": [],
  "bottom-right": []
}, ta = 16;
let lb = 1;
const Un = function(e = {}, t) {
  if (!De)
    return { close: () => {
    } };
  (nt(e) || cr(e)) && (e = { message: e });
  const n = e.position || "top-right";
  let r = e.offset || 0;
  lo[n].forEach(({ vm: f }) => {
    var p;
    r += (((p = f.el) == null ? void 0 : p.offsetHeight) || 0) + ta;
  }), r += ta;
  const o = `notification_${lb++}`, a = e.onClose, s = {
    ...e,
    offset: r,
    id: o,
    onClose: () => {
      ib(o, n, a);
    }
  };
  let l = document.body;
  Ct(e.appendTo) ? l = e.appendTo : nt(e.appendTo) && (l = document.querySelector(e.appendTo)), Ct(l) || (l = document.body);
  const i = document.createElement("div"), u = H(sb, s, We(s.message) ? s.message : cr(s.message) ? () => s.message : null);
  return u.appContext = En(t) ? Un._context : t, u.props.onDestroy = () => {
    qr(null, i);
  }, qr(u, i), lo[n].push({ vm: u }), l.appendChild(i.firstElementChild), {
    close: () => {
      u.component.exposed.visible.value = !1;
    }
  };
};
bu.forEach((e) => {
  Un[e] = (t = {}, n) => ((nt(t) || cr(t)) && (t = {
    message: t
  }), Un({ ...t, type: e }, n));
});
function ib(e, t, n) {
  const r = lo[t], o = r.findIndex(({ vm: u }) => {
    var f;
    return ((f = u.component) == null ? void 0 : f.props.id) === e;
  });
  if (o === -1)
    return;
  const { vm: a } = r[o];
  if (!a)
    return;
  n?.(a);
  const s = a.el.offsetHeight, l = t.split("-")[0];
  r.splice(o, 1);
  const i = r.length;
  if (!(i < 1))
    for (let u = o; u < i; u++) {
      const { el: f, component: p } = r[u].vm, m = Number.parseInt(f.style[l], 10) - s - ta;
      p.props.offset = m;
    }
}
function ub() {
  for (const e of Object.values(lo))
    e.forEach(({ vm: t }) => {
      t.component.exposed.visible.value = !1;
    });
}
Un.closeAll = ub;
Un._context = null;
const cb = Ri(Un, "$notify");
function db(e, t, n, r) {
  if (typeof t == "function" ? e !== t || !0 : !t.has(e)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
  return n === "m" ? r : n === "a" ? r.call(e) : r ? r.value : t.get(e);
}
function fb(e, t, n, r, o) {
  if (typeof t == "function" ? e !== t || !0 : !t.has(e)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
  return t.set(e, n), n;
}
var Kr;
const bt = "__TAURI_TO_IPC_KEY__";
function pb(e, t = !1) {
  return window.__TAURI_INTERNALS__.transformCallback(e, t);
}
async function F(e, t = {}, n) {
  return window.__TAURI_INTERNALS__.invoke(e, t, n);
}
function mb(e, t = "asset") {
  return window.__TAURI_INTERNALS__.convertFileSrc(e, t);
}
class vb {
  get rid() {
    return db(this, Kr, "f");
  }
  constructor(t) {
    Kr.set(this, void 0), fb(this, Kr, t);
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
Kr = /* @__PURE__ */ new WeakMap();
var ut;
(function(e) {
  e.WINDOW_RESIZED = "tauri://resize", e.WINDOW_MOVED = "tauri://move", e.WINDOW_CLOSE_REQUESTED = "tauri://close-requested", e.WINDOW_DESTROYED = "tauri://destroyed", e.WINDOW_FOCUS = "tauri://focus", e.WINDOW_BLUR = "tauri://blur", e.WINDOW_SCALE_FACTOR_CHANGED = "tauri://scale-change", e.WINDOW_THEME_CHANGED = "tauri://theme-changed", e.WINDOW_CREATED = "tauri://window-created", e.WEBVIEW_CREATED = "tauri://webview-created", e.DRAG_ENTER = "tauri://drag-enter", e.DRAG_OVER = "tauri://drag-over", e.DRAG_DROP = "tauri://drag-drop", e.DRAG_LEAVE = "tauri://drag-leave";
})(ut || (ut = {}));
async function _u(e, t) {
  await F("plugin:event|unlisten", {
    event: e,
    eventId: t
  });
}
async function ln(e, t, n) {
  var r;
  const o = typeof n?.target == "string" ? { kind: "AnyLabel", label: n.target } : (r = n?.target) !== null && r !== void 0 ? r : { kind: "Any" };
  return F("plugin:event|listen", {
    event: e,
    target: o,
    handler: pb(t)
  }).then((a) => async () => _u(e, a));
}
async function gb(e, t, n) {
  return ln(e, (r) => {
    _u(e, r.id), t(r);
  }, n);
}
async function hb(e, t) {
  await F("plugin:event|emit", {
    event: e,
    payload: t
  });
}
async function yb(e, t, n) {
  await F("plugin:event|emit_to", {
    target: typeof e == "string" ? { kind: "AnyLabel", label: e } : e,
    event: t,
    payload: n
  });
}
class wu {
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
    return new lr(this.width * t, this.height * t);
  }
  [bt]() {
    return {
      width: this.width,
      height: this.height
    };
  }
  toJSON() {
    return this[bt]();
  }
}
class lr {
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
    return new wu(this.width / t, this.height / t);
  }
  [bt]() {
    return {
      width: this.width,
      height: this.height
    };
  }
  toJSON() {
    return this[bt]();
  }
}
class Nn {
  constructor(t) {
    this.size = t;
  }
  toLogical(t) {
    return this.size instanceof wu ? this.size : this.size.toLogical(t);
  }
  toPhysical(t) {
    return this.size instanceof lr ? this.size : this.size.toPhysical(t);
  }
  [bt]() {
    return {
      [`${this.size.type}`]: {
        width: this.size.width,
        height: this.size.height
      }
    };
  }
  toJSON() {
    return this[bt]();
  }
}
class Eu {
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
    return new un(this.x * t, this.y * t);
  }
  [bt]() {
    return {
      x: this.x,
      y: this.y
    };
  }
  toJSON() {
    return this[bt]();
  }
}
class un {
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
    return new Eu(this.x / t, this.y / t);
  }
  [bt]() {
    return {
      x: this.x,
      y: this.y
    };
  }
  toJSON() {
    return this[bt]();
  }
}
class Dr {
  constructor(t) {
    this.position = t;
  }
  toLogical(t) {
    return this.position instanceof Eu ? this.position : this.position.toLogical(t);
  }
  toPhysical(t) {
    return this.position instanceof un ? this.position : this.position.toPhysical(t);
  }
  [bt]() {
    return {
      [`${this.position.type}`]: {
        x: this.position.x,
        y: this.position.y
      }
    };
  }
  toJSON() {
    return this[bt]();
  }
}
class ir extends vb {
  /**
   * Creates an Image from a resource ID. For internal use only.
   *
   * @ignore
   */
  constructor(t) {
    super(t);
  }
  /** Creates a new Image using RGBA data, in row-major order from top to bottom, and with specified width and height. */
  static async new(t, n, r) {
    return F("plugin:image|new", {
      rgba: io(t),
      width: n,
      height: r
    }).then((o) => new ir(o));
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
      bytes: io(t)
    }).then((n) => new ir(n));
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
    return F("plugin:image|from_path", { path: t }).then((n) => new ir(n));
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
function io(e) {
  return e == null ? null : typeof e == "string" ? e : e instanceof ir ? e.rid : e;
}
var na;
(function(e) {
  e[e.Critical = 1] = "Critical", e[e.Informational = 2] = "Informational";
})(na || (na = {}));
class bb {
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
var _l;
(function(e) {
  e.None = "none", e.Normal = "normal", e.Indeterminate = "indeterminate", e.Paused = "paused", e.Error = "error";
})(_l || (_l = {}));
function Tu() {
  return new Cu(window.__TAURI_INTERNALS__.metadata.currentWindow.label, {
    // @ts-expect-error `skip` is not defined in the public API but it is handled by the constructor
    skip: !0
  });
}
async function Fo() {
  return F("plugin:window|get_all_windows").then((e) => e.map((t) => new Cu(t, {
    // @ts-expect-error `skip` is not defined in the public API but it is handled by the constructor
    skip: !0
  })));
}
const xo = ["tauri://created", "tauri://error"];
class Cu {
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
    var r;
    this.label = t, this.listeners = /* @__PURE__ */ Object.create(null), n?.skip || F("plugin:window|create", {
      options: {
        ...n,
        parent: typeof n.parent == "string" ? n.parent : (r = n.parent) === null || r === void 0 ? void 0 : r.label,
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
    return (n = (await Fo()).find((r) => r.label === t)) !== null && n !== void 0 ? n : null;
  }
  /**
   * Get an instance of `Window` for the current window.
   */
  static getCurrent() {
    return Tu();
  }
  /**
   * Gets a list of instances of `Window` for all available windows.
   */
  static async getAll() {
    return Fo();
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
    for (const t of await Fo())
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
      const r = this.listeners[t];
      r.splice(r.indexOf(n), 1);
    } : ln(t, n, {
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
      const r = this.listeners[t];
      r.splice(r.indexOf(n), 1);
    } : gb(t, n, {
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
    if (xo.includes(t)) {
      for (const r of this.listeners[t] || [])
        r({
          event: t,
          id: -1,
          payload: n
        });
      return;
    }
    return hb(t, n);
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
  async emitTo(t, n, r) {
    if (xo.includes(n)) {
      for (const o of this.listeners[n] || [])
        o({
          event: n,
          id: -1,
          payload: r
        });
      return;
    }
    return yb(t, n, r);
  }
  /** @ignore */
  _handleTauriEvent(t, n) {
    return xo.includes(t) ? (t in this.listeners ? this.listeners[t].push(n) : this.listeners[t] = [n], !0) : !1;
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
    }).then((t) => new un(t));
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
    }).then((t) => new un(t));
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
    }).then((t) => new lr(t));
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
    }).then((t) => new lr(t));
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
    return t && (t === na.Critical ? n = { type: "Critical" } : n = { type: "Informational" }), F("plugin:window|request_user_attention", {
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
      value: t instanceof Nn ? t : new Nn(t)
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
      value: t instanceof Nn ? t : t ? new Nn(t) : null
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
      value: t instanceof Nn ? t : t ? new Nn(t) : null
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
    function n(r) {
      return r ? { Logical: r } : null;
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
      value: t instanceof Dr ? t : new Dr(t)
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
      value: io(t)
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
      value: t instanceof Dr ? t : new Dr(t)
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
      value: t ? io(t) : void 0
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
    return this.listen(ut.WINDOW_RESIZED, (n) => {
      n.payload = new lr(n.payload), t(n);
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
    return this.listen(ut.WINDOW_MOVED, (n) => {
      n.payload = new un(n.payload), t(n);
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
    return this.listen(ut.WINDOW_CLOSE_REQUESTED, async (n) => {
      const r = new bb(n);
      await t(r), r.isPreventDefault() || await this.destroy();
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
    const n = await this.listen(ut.DRAG_ENTER, (s) => {
      t({
        ...s,
        payload: {
          type: "enter",
          paths: s.payload.paths,
          position: new un(s.payload.position)
        }
      });
    }), r = await this.listen(ut.DRAG_OVER, (s) => {
      t({
        ...s,
        payload: {
          type: "over",
          position: new un(s.payload.position)
        }
      });
    }), o = await this.listen(ut.DRAG_DROP, (s) => {
      t({
        ...s,
        payload: {
          type: "drop",
          paths: s.payload.paths,
          position: new un(s.payload.position)
        }
      });
    }), a = await this.listen(ut.DRAG_LEAVE, (s) => {
      t({ ...s, payload: { type: "leave" } });
    });
    return () => {
      n(), o(), r(), a();
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
    const n = await this.listen(ut.WINDOW_FOCUS, (o) => {
      t({ ...o, payload: !0 });
    }), r = await this.listen(ut.WINDOW_BLUR, (o) => {
      t({ ...o, payload: !1 });
    });
    return () => {
      n(), r();
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
    return this.listen(ut.WINDOW_SCALE_FACTOR_CHANGED, t);
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
    return this.listen(ut.WINDOW_THEME_CHANGED, t);
  }
}
var wl;
(function(e) {
  e.Disabled = "disabled", e.Throttle = "throttle", e.Suspend = "suspend";
})(wl || (wl = {}));
var El;
(function(e) {
  e.AppearanceBased = "appearanceBased", e.Light = "light", e.Dark = "dark", e.MediumLight = "mediumLight", e.UltraDark = "ultraDark", e.Titlebar = "titlebar", e.Selection = "selection", e.Menu = "menu", e.Popover = "popover", e.Sidebar = "sidebar", e.HeaderView = "headerView", e.Sheet = "sheet", e.WindowBackground = "windowBackground", e.HudWindow = "hudWindow", e.FullScreenUI = "fullScreenUI", e.Tooltip = "tooltip", e.ContentBackground = "contentBackground", e.UnderWindowBackground = "underWindowBackground", e.UnderPageBackground = "underPageBackground", e.Mica = "mica", e.Blur = "blur", e.Acrylic = "acrylic", e.Tabbed = "tabbed", e.TabbedDark = "tabbedDark", e.TabbedLight = "tabbedLight";
})(El || (El = {}));
var Tl;
(function(e) {
  e.FollowsWindowActiveState = "followsWindowActiveState", e.Active = "active", e.Inactive = "inactive";
})(Tl || (Tl = {}));
const Xe = {
  /**
   * 显示消息提示（简化版）
   * @param message 消息内容
   * @param type 消息类型，默认 success
   * @param position 显示位置，默认 center
   * @param duration 显示时长（毫秒），默认 3000
   */
  msg(e, t = "success", n = "center", r) {
    this.message({
      message: e,
      type: t,
      position: n,
      duration: r
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
      position: r = "center",
      duration: o = 3e3,
      showClose: a = !1
    } = e;
    r === "center" ? tb({
      message: t,
      type: n,
      duration: o,
      showClose: a,
      grouping: !0,
      customClass: `app-toast app-toast--${n}`
    }) : cb({
      message: t,
      type: n,
      position: r,
      duration: o,
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
}, _b = "data:image/svg+xml,%3c?xml%20version='1.0'%20standalone='no'?%3e%3c!DOCTYPE%20svg%20PUBLIC%20'-//W3C//DTD%20SVG%201.1//EN'%20'http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd'%3e%3csvg%20t='1680942651462'%20class='icon'%20viewBox='0%200%201024%201024'%20version='1.1'%20xmlns='http://www.w3.org/2000/svg'%20p-id='3789'%20data-darkreader-inline-fill=''%20xmlns:xlink='http://www.w3.org/1999/xlink'%20width='200'%20height='200'%3e%3cpath%20d='M214.101333%20512c0-32.512%205.546667-63.701333%2015.36-92.928L57.173333%20290.218667A491.861333%20491.861333%200%200%200%204.693333%20512c0%2079.701333%2018.858667%20154.88%2052.394667%20221.610667l172.202667-129.066667A290.56%20290.56%200%200%201%20214.101333%20512'%20fill='%23FBBC05'%20p-id='3790'%20data-darkreader-inline-fill=''%20style='--darkreader-inline-fill:%20%23967002;'%3e%3c/path%3e%3cpath%20d='M516.693333%20216.192c72.106667%200%20137.258667%2025.002667%20188.458667%2065.962667L854.101333%20136.533333C763.349333%2059.178667%20646.997333%2011.392%20516.693333%2011.392c-202.325333%200-376.234667%20113.28-459.52%20278.826667l172.373334%20128.853333c39.68-118.016%20152.832-202.88%20287.146666-202.88'%20fill='%23EA4335'%20p-id='3791'%20data-darkreader-inline-fill=''%20style='--darkreader-inline-fill:%20%23a71d11;'%3e%3c/path%3e%3cpath%20d='M516.693333%20807.808c-134.357333%200-247.509333-84.864-287.232-202.88l-172.288%20128.853333c83.242667%20165.546667%20257.152%20278.826667%20459.52%20278.826667%20124.842667%200%20244.053333-43.392%20333.568-124.757333l-163.584-123.818667c-46.122667%2028.458667-104.234667%2043.776-170.026666%2043.776'%20fill='%2334A853'%20p-id='3792'%20data-darkreader-inline-fill=''%20style='--darkreader-inline-fill:%20%232a8642;'%3e%3c/path%3e%3cpath%20d='M1005.397333%20512c0-29.568-4.693333-61.44-11.648-91.008H516.650667V614.4h274.602666c-13.696%2065.962667-51.072%20116.650667-104.533333%20149.632l163.541333%20123.818667c93.994667-85.418667%20155.136-212.650667%20155.136-375.850667'%20fill='%234285F4'%20p-id='3793'%20data-darkreader-inline-fill=''%20style='--darkreader-inline-fill:%20%230943a2;'%3e%3c/path%3e%3c/svg%3e", wb = "data:image/svg+xml,%3csvg%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%2048%2048'%20width='240px'%20height='240px'%3e%3clinearGradient%20id='ZkmZ8eVihrQTUnr9TZpNla'%20x1='11.905'%20x2='17.941'%20y1='1.952'%20y2='40.401'%20gradientUnits='userSpaceOnUse'%3e%3cstop%20offset='0'%20stop-color='%233dbffc'/%3e%3cstop%20offset='1'%20stop-color='%23183efb'/%3e%3c/linearGradient%3e%3cpath%20fill='url(%23ZkmZ8eVihrQTUnr9TZpNla)'%20d='M17.572,37.076L20,35.619V10.603c0-1.632-0.796-3.161-2.133-4.096L12.36,2.652%20C11.366,1.956,10,2.667,10,3.881V32.5c0,0.22,0.02,0.555,0.033,0.772C10.369,36.867,14.382,38.99,17.572,37.076z'/%3e%3clinearGradient%20id='ZkmZ8eVihrQTUnr9TZpNlb'%20x1='14.342'%20x2='34.121'%20y1='41.478'%20y2='25.575'%20gradientUnits='userSpaceOnUse'%3e%3cstop%20offset='0'%20stop-color='%2333bef0'/%3e%3cstop%20offset='.159'%20stop-color='%2332b9f0'/%3e%3cstop%20offset='.341'%20stop-color='%232facf2'/%3e%3cstop%20offset='.533'%20stop-color='%232a95f4'/%3e%3cstop%20offset='.733'%20stop-color='%232475f6'/%3e%3cstop%20offset='.936'%20stop-color='%231b4cfa'/%3e%3cstop%20offset='1'%20stop-color='%23183efb'/%3e%3c/linearGradient%3e%3cpath%20fill='url(%23ZkmZ8eVihrQTUnr9TZpNlb)'%20d='M32.682,27.904L20,35.5v0l-2.428,1.457c-3.191,1.915-7.203-0.209-7.54-3.804%20C10.372,38.922,15.145,43.5,21,43.5c1.963,0,3.888-0.536,5.568-1.551l6.834-4.126c0.817-0.493,1.522-1.075,2.15-1.707%20C37.906,33.415,36.739,28.669,32.682,27.904z'/%3e%3clinearGradient%20id='ZkmZ8eVihrQTUnr9TZpNlc'%20x1='24.223'%20x2='45.699'%20y1='17.113'%20y2='38.588'%20gradientUnits='userSpaceOnUse'%3e%3cstop%20offset='0'%20stop-color='%233dbffd'/%3e%3cstop%20offset='1'%20stop-color='%231de9b6'/%3e%3c/linearGradient%3e%3cpath%20fill='url(%23ZkmZ8eVihrQTUnr9TZpNlc)'%20d='M33.636,19.568l-7.607-3.803c-1.234-0.617-2.576,0.618-2.064,1.899l1.755,5.886%20c0.499,1.248,1.479,2.242,2.719,2.758L32.5,28c4.057,0.766,5.352,5.251,3.052,8.117C40.399,31.24,40.088,22.794,33.636,19.568z'/%3e%3c/svg%3e";
/*!
  * shared v11.2.2
  * (c) 2025 kazuya kawaguchi
  * Released under the MIT License.
  */
function Eb(e, t) {
  typeof console < "u" && (console.warn("[intlify] " + e), t && console.warn(t.stack));
}
const Cl = typeof window < "u", Ln = (e, t = !1) => t ? Symbol.for(e) : Symbol(e), Tb = (e, t, n) => Cb({ l: e, k: t, s: n }), Cb = (e) => JSON.stringify(e).replace(/\u2028/g, "\\u2028").replace(/\u2029/g, "\\u2029").replace(/\u0027/g, "\\u0027"), Ue = (e) => typeof e == "number" && isFinite(e), Sb = (e) => Ha(e) === "[object Date]", uo = (e) => Ha(e) === "[object RegExp]", Oo = (e) => ye(e) && Object.keys(e).length === 0, Ke = Object.assign, Ob = Object.create, Se = (e = null) => Ob(e);
let Sl;
const Gr = () => Sl || (Sl = typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : typeof window < "u" ? window : typeof global < "u" ? global : Se());
function Ol(e) {
  return e.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;").replace(/'/g, "&apos;").replace(/\//g, "&#x2F;").replace(/=/g, "&#x3D;");
}
function kl(e) {
  return e.replace(/&(?![a-zA-Z0-9#]{2,6};)/g, "&amp;").replace(/"/g, "&quot;").replace(/'/g, "&apos;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
}
function kb(e) {
  return e = e.replace(/(\w+)\s*=\s*"([^"]*)"/g, (r, o, a) => `${o}="${kl(a)}"`), e = e.replace(/(\w+)\s*=\s*'([^']*)'/g, (r, o, a) => `${o}='${kl(a)}'`), /\s*on\w+\s*=\s*["']?[^"'>]+["']?/gi.test(e) && (e = e.replace(/(\s+)(on)(\w+\s*=)/gi, "$1&#111;n$3")), [
    // In href, src, action, formaction attributes
    /(\s+(?:href|src|action|formaction)\s*=\s*["']?)\s*javascript:/gi,
    // In style attributes within url()
    /(style\s*=\s*["'][^"']*url\s*\(\s*)javascript:/gi
  ].forEach((r) => {
    e = e.replace(r, "$1javascript&#58;");
  }), e;
}
const Lb = Object.prototype.hasOwnProperty;
function Tt(e, t) {
  return Lb.call(e, t);
}
const $e = Array.isArray, Pe = (e) => typeof e == "function", Z = (e) => typeof e == "string", Re = (e) => typeof e == "boolean", be = (e) => e !== null && typeof e == "object", Ib = (e) => be(e) && Pe(e.then) && Pe(e.catch), Su = Object.prototype.toString, Ha = (e) => Su.call(e), ye = (e) => Ha(e) === "[object Object]", Pb = (e) => e == null ? "" : $e(e) || ye(e) && e.toString === Su ? JSON.stringify(e, null, 2) : String(e);
function Ka(e, t = "") {
  return e.reduce((n, r, o) => o === 0 ? n + r : n + t + r, "");
}
const Fr = (e) => !be(e) || $e(e);
function Yr(e, t) {
  if (Fr(e) || Fr(t))
    throw new Error("Invalid value");
  const n = [{ src: e, des: t }];
  for (; n.length; ) {
    const { src: r, des: o } = n.pop();
    Object.keys(r).forEach((a) => {
      a !== "__proto__" && (be(r[a]) && !be(o[a]) && (o[a] = Array.isArray(r[a]) ? [] : Se()), Fr(o[a]) || Fr(r[a]) ? o[a] = r[a] : n.push({ src: r[a], des: o[a] }));
    });
  }
}
/*!
  * message-compiler v11.2.2
  * (c) 2025 kazuya kawaguchi
  * Released under the MIT License.
  */
function Ab(e, t, n) {
  return { line: e, column: t, offset: n };
}
function ra(e, t, n) {
  return { start: e, end: t };
}
const we = {
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
}, Nb = 17;
function ko(e, t, n = {}) {
  const { domain: r, messages: o, args: a } = n, s = e, l = new SyntaxError(String(s));
  return l.code = e, t && (l.location = t), l.domain = r, l;
}
function Rb(e) {
  throw e;
}
const It = " ", $b = "\r", qe = `
`, Mb = "\u2028", Db = "\u2029";
function Fb(e) {
  const t = e;
  let n = 0, r = 1, o = 1, a = 0;
  const s = (S) => t[S] === $b && t[S + 1] === qe, l = (S) => t[S] === qe, i = (S) => t[S] === Db, u = (S) => t[S] === Mb, f = (S) => s(S) || l(S) || i(S) || u(S), p = () => n, m = () => r, h = () => o, g = () => a, v = (S) => s(S) || i(S) || u(S) ? qe : t[S], E = () => v(n), c = () => v(n + a);
  function T() {
    return a = 0, f(n) && (r++, o = 0), s(n) && n++, n++, o++, t[n];
  }
  function b() {
    return s(n + a) && a++, a++, t[n + a];
  }
  function w() {
    n = 0, r = 1, o = 1, a = 0;
  }
  function O(S = 0) {
    a = S;
  }
  function k() {
    const S = n + a;
    for (; S !== n; )
      T();
    a = 0;
  }
  return {
    index: p,
    line: m,
    column: h,
    peekOffset: g,
    charAt: v,
    currentChar: E,
    currentPeek: c,
    next: T,
    peek: b,
    reset: w,
    resetPeek: O,
    skipToPeek: k
  };
}
const jt = void 0, xb = ".", Ll = "'", zb = "tokenizer";
function Bb(e, t = {}) {
  const n = t.location !== !1, r = Fb(e), o = () => r.index(), a = () => Ab(r.line(), r.column(), r.index()), s = a(), l = o(), i = {
    currentType: 13,
    offset: l,
    startLoc: s,
    endLoc: s,
    lastType: 13,
    lastOffset: l,
    lastStartLoc: s,
    lastEndLoc: s,
    braceNest: 0,
    inLinked: !1,
    text: ""
  }, u = () => i, { onError: f } = t;
  function p(_, C, $, ...K) {
    const he = u();
    if (C.column += $, C.offset += $, f) {
      const se = n ? ra(he.startLoc, C) : null, y = ko(_, se, {
        domain: zb,
        args: K
      });
      f(y);
    }
  }
  function m(_, C, $) {
    _.endLoc = a(), _.currentType = C;
    const K = { type: C };
    return n && (K.loc = ra(_.startLoc, _.endLoc)), $ != null && (K.value = $), K;
  }
  const h = (_) => m(
    _,
    13
    /* TokenTypes.EOF */
  );
  function g(_, C) {
    return _.currentChar() === C ? (_.next(), C) : (p(we.EXPECTED_TOKEN, a(), 0, C), "");
  }
  function v(_) {
    let C = "";
    for (; _.currentPeek() === It || _.currentPeek() === qe; )
      C += _.currentPeek(), _.peek();
    return C;
  }
  function E(_) {
    const C = v(_);
    return _.skipToPeek(), C;
  }
  function c(_) {
    if (_ === jt)
      return !1;
    const C = _.charCodeAt(0);
    return C >= 97 && C <= 122 || // a-z
    C >= 65 && C <= 90 || // A-Z
    C === 95;
  }
  function T(_) {
    if (_ === jt)
      return !1;
    const C = _.charCodeAt(0);
    return C >= 48 && C <= 57;
  }
  function b(_, C) {
    const { currentType: $ } = C;
    if ($ !== 2)
      return !1;
    v(_);
    const K = c(_.currentPeek());
    return _.resetPeek(), K;
  }
  function w(_, C) {
    const { currentType: $ } = C;
    if ($ !== 2)
      return !1;
    v(_);
    const K = _.currentPeek() === "-" ? _.peek() : _.currentPeek(), he = T(K);
    return _.resetPeek(), he;
  }
  function O(_, C) {
    const { currentType: $ } = C;
    if ($ !== 2)
      return !1;
    v(_);
    const K = _.currentPeek() === Ll;
    return _.resetPeek(), K;
  }
  function k(_, C) {
    const { currentType: $ } = C;
    if ($ !== 7)
      return !1;
    v(_);
    const K = _.currentPeek() === ".";
    return _.resetPeek(), K;
  }
  function S(_, C) {
    const { currentType: $ } = C;
    if ($ !== 8)
      return !1;
    v(_);
    const K = c(_.currentPeek());
    return _.resetPeek(), K;
  }
  function W(_, C) {
    const { currentType: $ } = C;
    if (!($ === 7 || $ === 11))
      return !1;
    v(_);
    const K = _.currentPeek() === ":";
    return _.resetPeek(), K;
  }
  function B(_, C) {
    const { currentType: $ } = C;
    if ($ !== 9)
      return !1;
    const K = () => {
      const se = _.currentPeek();
      return se === "{" ? c(_.peek()) : se === "@" || se === "|" || se === ":" || se === "." || se === It || !se ? !1 : se === qe ? (_.peek(), K()) : oe(_, !1);
    }, he = K();
    return _.resetPeek(), he;
  }
  function q(_) {
    v(_);
    const C = _.currentPeek() === "|";
    return _.resetPeek(), C;
  }
  function oe(_, C = !0) {
    const $ = (he = !1, se = "") => {
      const y = _.currentPeek();
      return y === "{" || y === "@" || !y ? he : y === "|" ? !(se === It || se === qe) : y === It ? (_.peek(), $(!0, It)) : y === qe ? (_.peek(), $(!0, qe)) : !0;
    }, K = $();
    return C && _.resetPeek(), K;
  }
  function I(_, C) {
    const $ = _.currentChar();
    return $ === jt ? jt : C($) ? (_.next(), $) : null;
  }
  function V(_) {
    const C = _.charCodeAt(0);
    return C >= 97 && C <= 122 || // a-z
    C >= 65 && C <= 90 || // A-Z
    C >= 48 && C <= 57 || // 0-9
    C === 95 || // _
    C === 36;
  }
  function ee(_) {
    return I(_, V);
  }
  function fe(_) {
    const C = _.charCodeAt(0);
    return C >= 97 && C <= 122 || // a-z
    C >= 65 && C <= 90 || // A-Z
    C >= 48 && C <= 57 || // 0-9
    C === 95 || // _
    C === 36 || // $
    C === 45;
  }
  function le(_) {
    return I(_, fe);
  }
  function D(_) {
    const C = _.charCodeAt(0);
    return C >= 48 && C <= 57;
  }
  function ve(_) {
    return I(_, D);
  }
  function ge(_) {
    const C = _.charCodeAt(0);
    return C >= 48 && C <= 57 || // 0-9
    C >= 65 && C <= 70 || // A-F
    C >= 97 && C <= 102;
  }
  function Ie(_) {
    return I(_, ge);
  }
  function xe(_) {
    let C = "", $ = "";
    for (; C = ve(_); )
      $ += C;
    return $;
  }
  function Ge(_) {
    let C = "";
    for (; ; ) {
      const $ = _.currentChar();
      if ($ === "{" || $ === "}" || $ === "@" || $ === "|" || !$)
        break;
      if ($ === It || $ === qe)
        if (oe(_))
          C += $, _.next();
        else {
          if (q(_))
            break;
          C += $, _.next();
        }
      else
        C += $, _.next();
    }
    return C;
  }
  function U(_) {
    E(_);
    let C = "", $ = "";
    for (; C = le(_); )
      $ += C;
    const K = _.currentChar();
    if (K && K !== "}" && K !== jt && K !== It && K !== qe && K !== "　") {
      const he = ue(_);
      return p(we.INVALID_TOKEN_IN_PLACEHOLDER, a(), 0, $ + he), $ + he;
    }
    return _.currentChar() === jt && p(we.UNTERMINATED_CLOSING_BRACE, a(), 0), $;
  }
  function X(_) {
    E(_);
    let C = "";
    return _.currentChar() === "-" ? (_.next(), C += `-${xe(_)}`) : C += xe(_), _.currentChar() === jt && p(we.UNTERMINATED_CLOSING_BRACE, a(), 0), C;
  }
  function me(_) {
    return _ !== Ll && _ !== qe;
  }
  function Ee(_) {
    E(_), g(_, "'");
    let C = "", $ = "";
    for (; C = I(_, me); )
      C === "\\" ? $ += Te(_) : $ += C;
    const K = _.currentChar();
    return K === qe || K === jt ? (p(we.UNTERMINATED_SINGLE_QUOTE_IN_PLACEHOLDER, a(), 0), K === qe && (_.next(), g(_, "'")), $) : (g(_, "'"), $);
  }
  function Te(_) {
    const C = _.currentChar();
    switch (C) {
      case "\\":
      case "'":
        return _.next(), `\\${C}`;
      case "u":
        return ae(_, C, 4);
      case "U":
        return ae(_, C, 6);
      default:
        return p(we.UNKNOWN_ESCAPE_SEQUENCE, a(), 0, C), "";
    }
  }
  function ae(_, C, $) {
    g(_, C);
    let K = "";
    for (let he = 0; he < $; he++) {
      const se = Ie(_);
      if (!se) {
        p(we.INVALID_UNICODE_ESCAPE_SEQUENCE, a(), 0, `\\${C}${K}${_.currentChar()}`);
        break;
      }
      K += se;
    }
    return `\\${C}${K}`;
  }
  function ze(_) {
    return _ !== "{" && _ !== "}" && _ !== It && _ !== qe;
  }
  function ue(_) {
    E(_);
    let C = "", $ = "";
    for (; C = I(_, ze); )
      $ += C;
    return $;
  }
  function He(_) {
    let C = "", $ = "";
    for (; C = ee(_); )
      $ += C;
    return $;
  }
  function _t(_) {
    const C = ($) => {
      const K = _.currentChar();
      return K === "{" || K === "@" || K === "|" || K === "(" || K === ")" || !K || K === It ? $ : ($ += K, _.next(), C($));
    };
    return C("");
  }
  function at(_) {
    E(_);
    const C = g(
      _,
      "|"
      /* TokenChars.Pipe */
    );
    return E(_), C;
  }
  function st(_, C) {
    let $ = null;
    switch (_.currentChar()) {
      case "{":
        return C.braceNest >= 1 && p(we.NOT_ALLOW_NEST_PLACEHOLDER, a(), 0), _.next(), $ = m(
          C,
          2,
          "{"
          /* TokenChars.BraceLeft */
        ), E(_), C.braceNest++, $;
      case "}":
        return C.braceNest > 0 && C.currentType === 2 && p(we.EMPTY_PLACEHOLDER, a(), 0), _.next(), $ = m(
          C,
          3,
          "}"
          /* TokenChars.BraceRight */
        ), C.braceNest--, C.braceNest > 0 && E(_), C.inLinked && C.braceNest === 0 && (C.inLinked = !1), $;
      case "@":
        return C.braceNest > 0 && p(we.UNTERMINATED_CLOSING_BRACE, a(), 0), $ = lt(_, C) || h(C), C.braceNest = 0, $;
      default: {
        let he = !0, se = !0, y = !0;
        if (q(_))
          return C.braceNest > 0 && p(we.UNTERMINATED_CLOSING_BRACE, a(), 0), $ = m(C, 1, at(_)), C.braceNest = 0, C.inLinked = !1, $;
        if (C.braceNest > 0 && (C.currentType === 4 || C.currentType === 5 || C.currentType === 6))
          return p(we.UNTERMINATED_CLOSING_BRACE, a(), 0), C.braceNest = 0, ft(_, C);
        if (he = b(_, C))
          return $ = m(C, 4, U(_)), E(_), $;
        if (se = w(_, C))
          return $ = m(C, 5, X(_)), E(_), $;
        if (y = O(_, C))
          return $ = m(C, 6, Ee(_)), E(_), $;
        if (!he && !se && !y)
          return $ = m(C, 12, ue(_)), p(we.INVALID_TOKEN_IN_PLACEHOLDER, a(), 0, $.value), E(_), $;
        break;
      }
    }
    return $;
  }
  function lt(_, C) {
    const { currentType: $ } = C;
    let K = null;
    const he = _.currentChar();
    switch (($ === 7 || $ === 8 || $ === 11 || $ === 9) && (he === qe || he === It) && p(we.INVALID_LINKED_FORMAT, a(), 0), he) {
      case "@":
        return _.next(), K = m(
          C,
          7,
          "@"
          /* TokenChars.LinkedAlias */
        ), C.inLinked = !0, K;
      case ".":
        return E(_), _.next(), m(
          C,
          8,
          "."
          /* TokenChars.LinkedDot */
        );
      case ":":
        return E(_), _.next(), m(
          C,
          9,
          ":"
          /* TokenChars.LinkedDelimiter */
        );
      default:
        return q(_) ? (K = m(C, 1, at(_)), C.braceNest = 0, C.inLinked = !1, K) : k(_, C) || W(_, C) ? (E(_), lt(_, C)) : S(_, C) ? (E(_), m(C, 11, He(_))) : B(_, C) ? (E(_), he === "{" ? st(_, C) || K : m(C, 10, _t(_))) : ($ === 7 && p(we.INVALID_LINKED_FORMAT, a(), 0), C.braceNest = 0, C.inLinked = !1, ft(_, C));
    }
  }
  function ft(_, C) {
    let $ = {
      type: 13
      /* TokenTypes.EOF */
    };
    if (C.braceNest > 0)
      return st(_, C) || h(C);
    if (C.inLinked)
      return lt(_, C) || h(C);
    switch (_.currentChar()) {
      case "{":
        return st(_, C) || h(C);
      case "}":
        return p(we.UNBALANCED_CLOSING_BRACE, a(), 0), _.next(), m(
          C,
          3,
          "}"
          /* TokenChars.BraceRight */
        );
      case "@":
        return lt(_, C) || h(C);
      default: {
        if (q(_))
          return $ = m(C, 1, at(_)), C.braceNest = 0, C.inLinked = !1, $;
        if (oe(_))
          return m(C, 0, Ge(_));
        break;
      }
    }
    return $;
  }
  function Lt() {
    const { currentType: _, offset: C, startLoc: $, endLoc: K } = i;
    return i.lastType = _, i.lastOffset = C, i.lastStartLoc = $, i.lastEndLoc = K, i.offset = o(), i.startLoc = a(), r.currentChar() === jt ? m(
      i,
      13
      /* TokenTypes.EOF */
    ) : ft(r, i);
  }
  return {
    nextToken: Lt,
    currentOffset: o,
    currentPosition: a,
    context: u
  };
}
const Wb = "parser", jb = /(?:\\\\|\\'|\\u([0-9a-fA-F]{4})|\\U([0-9a-fA-F]{6}))/g;
function Vb(e, t, n) {
  switch (e) {
    case "\\\\":
      return "\\";
    // eslint-disable-next-line no-useless-escape
    case "\\'":
      return "'";
    default: {
      const r = parseInt(t || n, 16);
      return r <= 55295 || r >= 57344 ? String.fromCodePoint(r) : "�";
    }
  }
}
function Ub(e = {}) {
  const t = e.location !== !1, { onError: n } = e;
  function r(c, T, b, w, ...O) {
    const k = c.currentPosition();
    if (k.offset += w, k.column += w, n) {
      const S = t ? ra(b, k) : null, W = ko(T, S, {
        domain: Wb,
        args: O
      });
      n(W);
    }
  }
  function o(c, T, b) {
    const w = { type: c };
    return t && (w.start = T, w.end = T, w.loc = { start: b, end: b }), w;
  }
  function a(c, T, b, w) {
    t && (c.end = T, c.loc && (c.loc.end = b));
  }
  function s(c, T) {
    const b = c.context(), w = o(3, b.offset, b.startLoc);
    return w.value = T, a(w, c.currentOffset(), c.currentPosition()), w;
  }
  function l(c, T) {
    const b = c.context(), { lastOffset: w, lastStartLoc: O } = b, k = o(5, w, O);
    return k.index = parseInt(T, 10), c.nextToken(), a(k, c.currentOffset(), c.currentPosition()), k;
  }
  function i(c, T) {
    const b = c.context(), { lastOffset: w, lastStartLoc: O } = b, k = o(4, w, O);
    return k.key = T, c.nextToken(), a(k, c.currentOffset(), c.currentPosition()), k;
  }
  function u(c, T) {
    const b = c.context(), { lastOffset: w, lastStartLoc: O } = b, k = o(9, w, O);
    return k.value = T.replace(jb, Vb), c.nextToken(), a(k, c.currentOffset(), c.currentPosition()), k;
  }
  function f(c) {
    const T = c.nextToken(), b = c.context(), { lastOffset: w, lastStartLoc: O } = b, k = o(8, w, O);
    return T.type !== 11 ? (r(c, we.UNEXPECTED_EMPTY_LINKED_MODIFIER, b.lastStartLoc, 0), k.value = "", a(k, w, O), {
      nextConsumeToken: T,
      node: k
    }) : (T.value == null && r(c, we.UNEXPECTED_LEXICAL_ANALYSIS, b.lastStartLoc, 0, Pt(T)), k.value = T.value || "", a(k, c.currentOffset(), c.currentPosition()), {
      node: k
    });
  }
  function p(c, T) {
    const b = c.context(), w = o(7, b.offset, b.startLoc);
    return w.value = T, a(w, c.currentOffset(), c.currentPosition()), w;
  }
  function m(c) {
    const T = c.context(), b = o(6, T.offset, T.startLoc);
    let w = c.nextToken();
    if (w.type === 8) {
      const O = f(c);
      b.modifier = O.node, w = O.nextConsumeToken || c.nextToken();
    }
    switch (w.type !== 9 && r(c, we.UNEXPECTED_LEXICAL_ANALYSIS, T.lastStartLoc, 0, Pt(w)), w = c.nextToken(), w.type === 2 && (w = c.nextToken()), w.type) {
      case 10:
        w.value == null && r(c, we.UNEXPECTED_LEXICAL_ANALYSIS, T.lastStartLoc, 0, Pt(w)), b.key = p(c, w.value || "");
        break;
      case 4:
        w.value == null && r(c, we.UNEXPECTED_LEXICAL_ANALYSIS, T.lastStartLoc, 0, Pt(w)), b.key = i(c, w.value || "");
        break;
      case 5:
        w.value == null && r(c, we.UNEXPECTED_LEXICAL_ANALYSIS, T.lastStartLoc, 0, Pt(w)), b.key = l(c, w.value || "");
        break;
      case 6:
        w.value == null && r(c, we.UNEXPECTED_LEXICAL_ANALYSIS, T.lastStartLoc, 0, Pt(w)), b.key = u(c, w.value || "");
        break;
      default: {
        r(c, we.UNEXPECTED_EMPTY_LINKED_KEY, T.lastStartLoc, 0);
        const O = c.context(), k = o(7, O.offset, O.startLoc);
        return k.value = "", a(k, O.offset, O.startLoc), b.key = k, a(b, O.offset, O.startLoc), {
          nextConsumeToken: w,
          node: b
        };
      }
    }
    return a(b, c.currentOffset(), c.currentPosition()), {
      node: b
    };
  }
  function h(c) {
    const T = c.context(), b = T.currentType === 1 ? c.currentOffset() : T.offset, w = T.currentType === 1 ? T.endLoc : T.startLoc, O = o(2, b, w);
    O.items = [];
    let k = null;
    do {
      const B = k || c.nextToken();
      switch (k = null, B.type) {
        case 0:
          B.value == null && r(c, we.UNEXPECTED_LEXICAL_ANALYSIS, T.lastStartLoc, 0, Pt(B)), O.items.push(s(c, B.value || ""));
          break;
        case 5:
          B.value == null && r(c, we.UNEXPECTED_LEXICAL_ANALYSIS, T.lastStartLoc, 0, Pt(B)), O.items.push(l(c, B.value || ""));
          break;
        case 4:
          B.value == null && r(c, we.UNEXPECTED_LEXICAL_ANALYSIS, T.lastStartLoc, 0, Pt(B)), O.items.push(i(c, B.value || ""));
          break;
        case 6:
          B.value == null && r(c, we.UNEXPECTED_LEXICAL_ANALYSIS, T.lastStartLoc, 0, Pt(B)), O.items.push(u(c, B.value || ""));
          break;
        case 7: {
          const q = m(c);
          O.items.push(q.node), k = q.nextConsumeToken || null;
          break;
        }
      }
    } while (T.currentType !== 13 && T.currentType !== 1);
    const S = T.currentType === 1 ? T.lastOffset : c.currentOffset(), W = T.currentType === 1 ? T.lastEndLoc : c.currentPosition();
    return a(O, S, W), O;
  }
  function g(c, T, b, w) {
    const O = c.context();
    let k = w.items.length === 0;
    const S = o(1, T, b);
    S.cases = [], S.cases.push(w);
    do {
      const W = h(c);
      k || (k = W.items.length === 0), S.cases.push(W);
    } while (O.currentType !== 13);
    return k && r(c, we.MUST_HAVE_MESSAGES_IN_PLURAL, b, 0), a(S, c.currentOffset(), c.currentPosition()), S;
  }
  function v(c) {
    const T = c.context(), { offset: b, startLoc: w } = T, O = h(c);
    return T.currentType === 13 ? O : g(c, b, w, O);
  }
  function E(c) {
    const T = Bb(c, Ke({}, e)), b = T.context(), w = o(0, b.offset, b.startLoc);
    return t && w.loc && (w.loc.source = c), w.body = v(T), e.onCacheKey && (w.cacheKey = e.onCacheKey(c)), b.currentType !== 13 && r(T, we.UNEXPECTED_LEXICAL_ANALYSIS, b.lastStartLoc, 0, c[b.offset] || ""), a(w, T.currentOffset(), T.currentPosition()), w;
  }
  return { parse: E };
}
function Pt(e) {
  if (e.type === 13)
    return "EOF";
  const t = (e.value || "").replace(/\r?\n/gu, "\\n");
  return t.length > 10 ? t.slice(0, 9) + "…" : t;
}
function Hb(e, t = {}) {
  const n = {
    ast: e,
    helpers: /* @__PURE__ */ new Set()
  };
  return { context: () => n, helper: (a) => (n.helpers.add(a), a) };
}
function Il(e, t) {
  for (let n = 0; n < e.length; n++)
    Ga(e[n], t);
}
function Ga(e, t) {
  switch (e.type) {
    case 1:
      Il(e.cases, t), t.helper(
        "plural"
        /* HelperNameMap.PLURAL */
      );
      break;
    case 2:
      Il(e.items, t);
      break;
    case 6: {
      Ga(e.key, t), t.helper(
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
function Kb(e, t = {}) {
  const n = Hb(e);
  n.helper(
    "normalize"
    /* HelperNameMap.NORMALIZE */
  ), e.body && Ga(e.body, n);
  const r = n.context();
  e.helpers = Array.from(r.helpers);
}
function Gb(e) {
  const t = e.body;
  return t.type === 2 ? Pl(t) : t.cases.forEach((n) => Pl(n)), e;
}
function Pl(e) {
  if (e.items.length === 1) {
    const t = e.items[0];
    (t.type === 3 || t.type === 9) && (e.static = t.value, delete t.value);
  } else {
    const t = [];
    for (let n = 0; n < e.items.length; n++) {
      const r = e.items[n];
      if (!(r.type === 3 || r.type === 9) || r.value == null)
        break;
      t.push(r.value);
    }
    if (t.length === e.items.length) {
      e.static = Ka(t);
      for (let n = 0; n < e.items.length; n++) {
        const r = e.items[n];
        (r.type === 3 || r.type === 9) && delete r.value;
      }
    }
  }
}
function $n(e) {
  switch (e.t = e.type, e.type) {
    case 0: {
      const t = e;
      $n(t.body), t.b = t.body, delete t.body;
      break;
    }
    case 1: {
      const t = e, n = t.cases;
      for (let r = 0; r < n.length; r++)
        $n(n[r]);
      t.c = n, delete t.cases;
      break;
    }
    case 2: {
      const t = e, n = t.items;
      for (let r = 0; r < n.length; r++)
        $n(n[r]);
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
      $n(t.key), t.k = t.key, delete t.key, t.modifier && ($n(t.modifier), t.m = t.modifier, delete t.modifier);
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
function Yb(e, t) {
  const { filename: n, breakLineCode: r, needIndent: o } = t, a = t.location !== !1, s = {
    filename: n,
    code: "",
    column: 1,
    line: 1,
    offset: 0,
    map: void 0,
    breakLineCode: r,
    needIndent: o,
    indentLevel: 0
  };
  a && e.loc && (s.source = e.loc.source);
  const l = () => s;
  function i(v, E) {
    s.code += v;
  }
  function u(v, E = !0) {
    const c = E ? r : "";
    i(o ? c + "  ".repeat(v) : c);
  }
  function f(v = !0) {
    const E = ++s.indentLevel;
    v && u(E);
  }
  function p(v = !0) {
    const E = --s.indentLevel;
    v && u(E);
  }
  function m() {
    u(s.indentLevel);
  }
  return {
    context: l,
    push: i,
    indent: f,
    deindent: p,
    newline: m,
    helper: (v) => `_${v}`,
    needIndent: () => s.needIndent
  };
}
function Zb(e, t) {
  const { helper: n } = e;
  e.push(`${n(
    "linked"
    /* HelperNameMap.LINKED */
  )}(`), Hn(e, t.key), t.modifier ? (e.push(", "), Hn(e, t.modifier), e.push(", _type")) : e.push(", undefined, _type"), e.push(")");
}
function qb(e, t) {
  const { helper: n, needIndent: r } = e;
  e.push(`${n(
    "normalize"
    /* HelperNameMap.NORMALIZE */
  )}([`), e.indent(r());
  const o = t.items.length;
  for (let a = 0; a < o && (Hn(e, t.items[a]), a !== o - 1); a++)
    e.push(", ");
  e.deindent(r()), e.push("])");
}
function Xb(e, t) {
  const { helper: n, needIndent: r } = e;
  if (t.cases.length > 1) {
    e.push(`${n(
      "plural"
      /* HelperNameMap.PLURAL */
    )}([`), e.indent(r());
    const o = t.cases.length;
    for (let a = 0; a < o && (Hn(e, t.cases[a]), a !== o - 1); a++)
      e.push(", ");
    e.deindent(r()), e.push("])");
  }
}
function Jb(e, t) {
  t.body ? Hn(e, t.body) : e.push("null");
}
function Hn(e, t) {
  const { helper: n } = e;
  switch (t.type) {
    case 0:
      Jb(e, t);
      break;
    case 1:
      Xb(e, t);
      break;
    case 2:
      qb(e, t);
      break;
    case 6:
      Zb(e, t);
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
const Qb = (e, t = {}) => {
  const n = Z(t.mode) ? t.mode : "normal", r = Z(t.filename) ? t.filename : "message.intl";
  t.sourceMap;
  const o = t.breakLineCode != null ? t.breakLineCode : n === "arrow" ? ";" : `
`, a = t.needIndent ? t.needIndent : n !== "arrow", s = e.helpers || [], l = Yb(e, {
    filename: r,
    breakLineCode: o,
    needIndent: a
  });
  l.push(n === "normal" ? "function __msg__ (ctx) {" : "(ctx) => {"), l.indent(a), s.length > 0 && (l.push(`const { ${Ka(s.map((f) => `${f}: _${f}`), ", ")} } = ctx`), l.newline()), l.push("return "), Hn(l, e), l.deindent(a), l.push("}"), delete e.helpers;
  const { code: i, map: u } = l.context();
  return {
    ast: e,
    code: i,
    map: u ? u.toJSON() : void 0
    // eslint-disable-line @typescript-eslint/no-explicit-any
  };
};
function e_(e, t = {}) {
  const n = Ke({}, t), r = !!n.jit, o = !!n.minify, a = n.optimize == null ? !0 : n.optimize, l = Ub(n).parse(e);
  return r ? (a && Gb(l), o && $n(l), { ast: l, code: "" }) : (Kb(l, n), Qb(l, n));
}
/*!
  * core-base v11.2.2
  * (c) 2025 kazuya kawaguchi
  * Released under the MIT License.
  */
function t_() {
  typeof __INTLIFY_DROP_MESSAGE_COMPILER__ != "boolean" && (Gr().__INTLIFY_DROP_MESSAGE_COMPILER__ = !1);
}
function Dt(e) {
  return be(e) && Ya(e) === 0 && (Tt(e, "b") || Tt(e, "body"));
}
const Ou = ["b", "body"];
function n_(e) {
  return gn(e, Ou);
}
const ku = ["c", "cases"];
function r_(e) {
  return gn(e, ku, []);
}
const Lu = ["s", "static"];
function o_(e) {
  return gn(e, Lu);
}
const Iu = ["i", "items"];
function a_(e) {
  return gn(e, Iu, []);
}
const Pu = ["t", "type"];
function Ya(e) {
  return gn(e, Pu);
}
const Au = ["v", "value"];
function xr(e, t) {
  const n = gn(e, Au);
  if (n != null)
    return n;
  throw yr(t);
}
const Nu = ["m", "modifier"];
function s_(e) {
  return gn(e, Nu);
}
const Ru = ["k", "key"];
function l_(e) {
  const t = gn(e, Ru);
  if (t)
    return t;
  throw yr(
    6
    /* NodeTypes.Linked */
  );
}
function gn(e, t, n) {
  for (let r = 0; r < t.length; r++) {
    const o = t[r];
    if (Tt(e, o) && e[o] != null)
      return e[o];
  }
  return n;
}
const $u = [
  ...Ou,
  ...ku,
  ...Lu,
  ...Iu,
  ...Ru,
  ...Nu,
  ...Au,
  ...Pu
];
function yr(e) {
  return new Error(`unhandled node type: ${e}`);
}
function zo(e) {
  return (n) => i_(n, e);
}
function i_(e, t) {
  const n = n_(t);
  if (n == null)
    throw yr(
      0
      /* NodeTypes.Resource */
    );
  if (Ya(n) === 1) {
    const a = r_(n);
    return e.plural(a.reduce((s, l) => [
      ...s,
      Al(e, l)
    ], []));
  } else
    return Al(e, n);
}
function Al(e, t) {
  const n = o_(t);
  if (n != null)
    return e.type === "text" ? n : e.normalize([n]);
  {
    const r = a_(t).reduce((o, a) => [...o, oa(e, a)], []);
    return e.normalize(r);
  }
}
function oa(e, t) {
  const n = Ya(t);
  switch (n) {
    case 3:
      return xr(t, n);
    case 9:
      return xr(t, n);
    case 4: {
      const r = t;
      if (Tt(r, "k") && r.k)
        return e.interpolate(e.named(r.k));
      if (Tt(r, "key") && r.key)
        return e.interpolate(e.named(r.key));
      throw yr(n);
    }
    case 5: {
      const r = t;
      if (Tt(r, "i") && Ue(r.i))
        return e.interpolate(e.list(r.i));
      if (Tt(r, "index") && Ue(r.index))
        return e.interpolate(e.list(r.index));
      throw yr(n);
    }
    case 6: {
      const r = t, o = s_(r), a = l_(r);
      return e.linked(oa(e, a), o ? oa(e, o) : void 0, e.type);
    }
    case 7:
      return xr(t, n);
    case 8:
      return xr(t, n);
    default:
      throw new Error(`unhandled node on format message part: ${n}`);
  }
}
const u_ = (e) => e;
let zr = Se();
function c_(e, t = {}) {
  let n = !1;
  const r = t.onError || Rb;
  return t.onError = (o) => {
    n = !0, r(o);
  }, { ...e_(e, t), detectError: n };
}
// @__NO_SIDE_EFFECTS__
function d_(e, t) {
  if (!__INTLIFY_DROP_MESSAGE_COMPILER__ && Z(e)) {
    Re(t.warnHtmlMessage) && t.warnHtmlMessage;
    const r = (t.onCacheKey || u_)(e), o = zr[r];
    if (o)
      return o;
    const { ast: a, detectError: s } = c_(e, {
      ...t,
      location: !1,
      jit: !0
    }), l = zo(a);
    return s ? l : zr[r] = l;
  } else {
    const n = e.cacheKey;
    if (n) {
      const r = zr[n];
      return r || (zr[n] = zo(e));
    } else
      return zo(e);
  }
}
const Gt = {
  INVALID_ARGUMENT: Nb,
  // 17
  INVALID_DATE_ARGUMENT: 18,
  INVALID_ISO_DATE_ARGUMENT: 19,
  NOT_SUPPORT_LOCALE_PROMISE_VALUE: 21,
  NOT_SUPPORT_LOCALE_ASYNC_FUNCTION: 22,
  NOT_SUPPORT_LOCALE_TYPE: 23
}, f_ = 24;
function Yt(e) {
  return ko(e, null, void 0);
}
function Za(e, t) {
  return t.locale != null ? Nl(t.locale) : Nl(e.locale);
}
let Bo;
function Nl(e) {
  if (Z(e))
    return e;
  if (Pe(e)) {
    if (e.resolvedOnce && Bo != null)
      return Bo;
    if (e.constructor.name === "Function") {
      const t = e();
      if (Ib(t))
        throw Yt(Gt.NOT_SUPPORT_LOCALE_PROMISE_VALUE);
      return Bo = t;
    } else
      throw Yt(Gt.NOT_SUPPORT_LOCALE_ASYNC_FUNCTION);
  } else
    throw Yt(Gt.NOT_SUPPORT_LOCALE_TYPE);
}
function p_(e, t, n) {
  return [.../* @__PURE__ */ new Set([
    n,
    ...$e(t) ? t : be(t) ? Object.keys(t) : Z(t) ? [t] : [n]
  ])];
}
function Mu(e, t, n) {
  const r = Z(n) ? n : co, o = e;
  o.__localeChainCache || (o.__localeChainCache = /* @__PURE__ */ new Map());
  let a = o.__localeChainCache.get(r);
  if (!a) {
    a = [];
    let s = [n];
    for (; $e(s); )
      s = Rl(a, s, t);
    const l = $e(t) || !ye(t) ? t : t.default ? t.default : null;
    s = Z(l) ? [l] : l, $e(s) && Rl(a, s, !1), o.__localeChainCache.set(r, a);
  }
  return a;
}
function Rl(e, t, n) {
  let r = !0;
  for (let o = 0; o < t.length && Re(r); o++) {
    const a = t[o];
    Z(a) && (r = m_(e, t[o], n));
  }
  return r;
}
function m_(e, t, n) {
  let r;
  const o = t.split("-");
  do {
    const a = o.join("-");
    r = v_(e, a, n), o.splice(-1, 1);
  } while (o.length && r === !0);
  return r;
}
function v_(e, t, n) {
  let r = !1;
  if (!e.includes(t) && (r = !0, t)) {
    r = t[t.length - 1] !== "!";
    const o = t.replace(/!/g, "");
    e.push(o), ($e(n) || ye(n)) && n[o] && (r = n[o]);
  }
  return r;
}
const hn = [];
hn[
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
hn[
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
hn[
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
hn[
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
hn[
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
hn[
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
hn[
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
const g_ = /^\s?(?:true|false|-?[\d.]+|'[^']*'|"[^"]*")\s?$/;
function h_(e) {
  return g_.test(e);
}
function y_(e) {
  const t = e.charCodeAt(0), n = e.charCodeAt(e.length - 1);
  return t === n && (t === 34 || t === 39) ? e.slice(1, -1) : e;
}
function b_(e) {
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
function __(e) {
  const t = e.trim();
  return e.charAt(0) === "0" && isNaN(parseInt(e)) ? !1 : h_(t) ? y_(t) : "*" + t;
}
function w_(e) {
  const t = [];
  let n = -1, r = 0, o = 0, a, s, l, i, u, f, p;
  const m = [];
  m[
    0
    /* Actions.APPEND */
  ] = () => {
    s === void 0 ? s = l : s += l;
  }, m[
    1
    /* Actions.PUSH */
  ] = () => {
    s !== void 0 && (t.push(s), s = void 0);
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
      o--, r = 4, m[
        0
        /* Actions.APPEND */
      ]();
    else {
      if (o = 0, s === void 0 || (s = __(s), s === !1))
        return !1;
      m[
        1
        /* Actions.PUSH */
      ]();
    }
  };
  function h() {
    const g = e[n + 1];
    if (r === 5 && g === "'" || r === 6 && g === '"')
      return n++, l = "\\" + g, m[
        0
        /* Actions.APPEND */
      ](), !0;
  }
  for (; r !== null; )
    if (n++, a = e[n], !(a === "\\" && h())) {
      if (i = b_(a), p = hn[r], u = p[i] || p.l || 8, u === 8 || (r = u[0], u[1] !== void 0 && (f = m[u[1]], f && (l = a, f() === !1))))
        return;
      if (r === 7)
        return t;
    }
}
const $l = /* @__PURE__ */ new Map();
function E_(e, t) {
  return be(e) ? e[t] : null;
}
function T_(e, t) {
  if (!be(e))
    return null;
  let n = $l.get(t);
  if (n || (n = w_(t), n && $l.set(t, n)), !n)
    return null;
  const r = n.length;
  let o = e, a = 0;
  for (; a < r; ) {
    const s = n[a];
    if ($u.includes(s) && Dt(o))
      return null;
    const l = o[s];
    if (l === void 0 || Pe(o))
      return null;
    o = l, a++;
  }
  return o;
}
const C_ = "11.2.2", Lo = -1, co = "en-US", Ml = "", Dl = (e) => `${e.charAt(0).toLocaleUpperCase()}${e.substr(1)}`;
function S_() {
  return {
    upper: (e, t) => t === "text" && Z(e) ? e.toUpperCase() : t === "vnode" && be(e) && "__v_isVNode" in e ? e.children.toUpperCase() : e,
    lower: (e, t) => t === "text" && Z(e) ? e.toLowerCase() : t === "vnode" && be(e) && "__v_isVNode" in e ? e.children.toLowerCase() : e,
    capitalize: (e, t) => t === "text" && Z(e) ? Dl(e) : t === "vnode" && be(e) && "__v_isVNode" in e ? Dl(e.children) : e
  };
}
let Du;
function O_(e) {
  Du = e;
}
let Fu;
function k_(e) {
  Fu = e;
}
let xu;
function L_(e) {
  xu = e;
}
let zu = null;
const Fl = (e) => {
  zu = e;
}, I_ = () => zu;
let xl = 0;
function P_(e = {}) {
  const t = Pe(e.onWarn) ? e.onWarn : Eb, n = Z(e.version) ? e.version : C_, r = Z(e.locale) || Pe(e.locale) ? e.locale : co, o = Pe(r) ? co : r, a = $e(e.fallbackLocale) || ye(e.fallbackLocale) || Z(e.fallbackLocale) || e.fallbackLocale === !1 ? e.fallbackLocale : o, s = ye(e.messages) ? e.messages : Wo(o), l = ye(e.datetimeFormats) ? e.datetimeFormats : Wo(o), i = ye(e.numberFormats) ? e.numberFormats : Wo(o), u = Ke(Se(), e.modifiers, S_()), f = e.pluralRules || Se(), p = Pe(e.missing) ? e.missing : null, m = Re(e.missingWarn) || uo(e.missingWarn) ? e.missingWarn : !0, h = Re(e.fallbackWarn) || uo(e.fallbackWarn) ? e.fallbackWarn : !0, g = !!e.fallbackFormat, v = !!e.unresolving, E = Pe(e.postTranslation) ? e.postTranslation : null, c = ye(e.processor) ? e.processor : null, T = Re(e.warnHtmlMessage) ? e.warnHtmlMessage : !0, b = !!e.escapeParameter, w = Pe(e.messageCompiler) ? e.messageCompiler : Du, O = Pe(e.messageResolver) ? e.messageResolver : Fu || E_, k = Pe(e.localeFallbacker) ? e.localeFallbacker : xu || p_, S = be(e.fallbackContext) ? e.fallbackContext : void 0, W = e, B = be(W.__datetimeFormatters) ? W.__datetimeFormatters : /* @__PURE__ */ new Map(), q = be(W.__numberFormatters) ? W.__numberFormatters : /* @__PURE__ */ new Map(), oe = be(W.__meta) ? W.__meta : {};
  xl++;
  const I = {
    version: n,
    cid: xl,
    locale: r,
    fallbackLocale: a,
    messages: s,
    modifiers: u,
    pluralRules: f,
    missing: p,
    missingWarn: m,
    fallbackWarn: h,
    fallbackFormat: g,
    unresolving: v,
    postTranslation: E,
    processor: c,
    warnHtmlMessage: T,
    escapeParameter: b,
    messageCompiler: w,
    messageResolver: O,
    localeFallbacker: k,
    fallbackContext: S,
    onWarn: t,
    __meta: oe
  };
  return I.datetimeFormats = l, I.numberFormats = i, I.__datetimeFormatters = B, I.__numberFormatters = q, I;
}
const Wo = (e) => ({ [e]: Se() });
function qa(e, t, n, r, o) {
  const { missing: a, onWarn: s } = e;
  if (a !== null) {
    const l = a(e, n, t, o);
    return Z(l) ? l : t;
  } else
    return t;
}
function Qn(e, t, n) {
  const r = e;
  r.__localeChainCache = /* @__PURE__ */ new Map(), e.localeFallbacker(e, n, t);
}
function A_(e, t) {
  return e === t ? !1 : e.split("-")[0] === t.split("-")[0];
}
function N_(e, t) {
  const n = t.indexOf(e);
  if (n === -1)
    return !1;
  for (let r = n + 1; r < t.length; r++)
    if (A_(e, t[r]))
      return !0;
  return !1;
}
function zl(e, ...t) {
  const { datetimeFormats: n, unresolving: r, fallbackLocale: o, onWarn: a, localeFallbacker: s } = e, { __datetimeFormatters: l } = e, [i, u, f, p] = aa(...t), m = Re(f.missingWarn) ? f.missingWarn : e.missingWarn;
  Re(f.fallbackWarn) ? f.fallbackWarn : e.fallbackWarn;
  const h = !!f.part, g = Za(e, f), v = s(
    e,
    // eslint-disable-line @typescript-eslint/no-explicit-any
    o,
    g
  );
  if (!Z(i) || i === "")
    return new Intl.DateTimeFormat(g, p).format(u);
  let E = {}, c, T = null;
  const b = "datetime format";
  for (let k = 0; k < v.length && (c = v[k], E = n[c] || {}, T = E[i], !ye(T)); k++)
    qa(e, i, c, m, b);
  if (!ye(T) || !Z(c))
    return r ? Lo : i;
  let w = `${c}__${i}`;
  Oo(p) || (w = `${w}__${JSON.stringify(p)}`);
  let O = l.get(w);
  return O || (O = new Intl.DateTimeFormat(c, Ke({}, T, p)), l.set(w, O)), h ? O.formatToParts(u) : O.format(u);
}
const Bu = [
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
function aa(...e) {
  const [t, n, r, o] = e, a = Se();
  let s = Se(), l;
  if (Z(t)) {
    const i = t.match(/(\d{4}-\d{2}-\d{2})(T|\s)?(.*)/);
    if (!i)
      throw Yt(Gt.INVALID_ISO_DATE_ARGUMENT);
    const u = i[3] ? i[3].trim().startsWith("T") ? `${i[1].trim()}${i[3].trim()}` : `${i[1].trim()}T${i[3].trim()}` : i[1].trim();
    l = new Date(u);
    try {
      l.toISOString();
    } catch {
      throw Yt(Gt.INVALID_ISO_DATE_ARGUMENT);
    }
  } else if (Sb(t)) {
    if (isNaN(t.getTime()))
      throw Yt(Gt.INVALID_DATE_ARGUMENT);
    l = t;
  } else if (Ue(t))
    l = t;
  else
    throw Yt(Gt.INVALID_ARGUMENT);
  return Z(n) ? a.key = n : ye(n) && Object.keys(n).forEach((i) => {
    Bu.includes(i) ? s[i] = n[i] : a[i] = n[i];
  }), Z(r) ? a.locale = r : ye(r) && (s = r), ye(o) && (s = o), [a.key || "", l, a, s];
}
function Bl(e, t, n) {
  const r = e;
  for (const o in n) {
    const a = `${t}__${o}`;
    r.__datetimeFormatters.has(a) && r.__datetimeFormatters.delete(a);
  }
}
function Wl(e, ...t) {
  const { numberFormats: n, unresolving: r, fallbackLocale: o, onWarn: a, localeFallbacker: s } = e, { __numberFormatters: l } = e, [i, u, f, p] = sa(...t), m = Re(f.missingWarn) ? f.missingWarn : e.missingWarn;
  Re(f.fallbackWarn) ? f.fallbackWarn : e.fallbackWarn;
  const h = !!f.part, g = Za(e, f), v = s(
    e,
    // eslint-disable-line @typescript-eslint/no-explicit-any
    o,
    g
  );
  if (!Z(i) || i === "")
    return new Intl.NumberFormat(g, p).format(u);
  let E = {}, c, T = null;
  const b = "number format";
  for (let k = 0; k < v.length && (c = v[k], E = n[c] || {}, T = E[i], !ye(T)); k++)
    qa(e, i, c, m, b);
  if (!ye(T) || !Z(c))
    return r ? Lo : i;
  let w = `${c}__${i}`;
  Oo(p) || (w = `${w}__${JSON.stringify(p)}`);
  let O = l.get(w);
  return O || (O = new Intl.NumberFormat(c, Ke({}, T, p)), l.set(w, O)), h ? O.formatToParts(u) : O.format(u);
}
const Wu = [
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
function sa(...e) {
  const [t, n, r, o] = e, a = Se();
  let s = Se();
  if (!Ue(t))
    throw Yt(Gt.INVALID_ARGUMENT);
  const l = t;
  return Z(n) ? a.key = n : ye(n) && Object.keys(n).forEach((i) => {
    Wu.includes(i) ? s[i] = n[i] : a[i] = n[i];
  }), Z(r) ? a.locale = r : ye(r) && (s = r), ye(o) && (s = o), [a.key || "", l, a, s];
}
function jl(e, t, n) {
  const r = e;
  for (const o in n) {
    const a = `${t}__${o}`;
    r.__numberFormatters.has(a) && r.__numberFormatters.delete(a);
  }
}
const R_ = (e) => e, $_ = (e) => "", M_ = "text", D_ = (e) => e.length === 0 ? "" : Ka(e), F_ = Pb;
function Vl(e, t) {
  return e = Math.abs(e), t === 2 ? e ? e > 1 ? 1 : 0 : 1 : e ? Math.min(e, 2) : 0;
}
function x_(e) {
  const t = Ue(e.pluralIndex) ? e.pluralIndex : -1;
  return e.named && (Ue(e.named.count) || Ue(e.named.n)) ? Ue(e.named.count) ? e.named.count : Ue(e.named.n) ? e.named.n : t : t;
}
function z_(e, t) {
  t.count || (t.count = e), t.n || (t.n = e);
}
function B_(e = {}) {
  const t = e.locale, n = x_(e), r = be(e.pluralRules) && Z(t) && Pe(e.pluralRules[t]) ? e.pluralRules[t] : Vl, o = be(e.pluralRules) && Z(t) && Pe(e.pluralRules[t]) ? Vl : void 0, a = (c) => c[r(n, c.length, o)], s = e.list || [], l = (c) => s[c], i = e.named || Se();
  Ue(e.pluralIndex) && z_(n, i);
  const u = (c) => i[c];
  function f(c, T) {
    const b = Pe(e.messages) ? e.messages(c, !!T) : be(e.messages) ? e.messages[c] : !1;
    return b || (e.parent ? e.parent.message(c) : $_);
  }
  const p = (c) => e.modifiers ? e.modifiers[c] : R_, m = ye(e.processor) && Pe(e.processor.normalize) ? e.processor.normalize : D_, h = ye(e.processor) && Pe(e.processor.interpolate) ? e.processor.interpolate : F_, g = ye(e.processor) && Z(e.processor.type) ? e.processor.type : M_, E = {
    list: l,
    named: u,
    plural: a,
    linked: (c, ...T) => {
      const [b, w] = T;
      let O = "text", k = "";
      T.length === 1 ? be(b) ? (k = b.modifier || k, O = b.type || O) : Z(b) && (k = b || k) : T.length === 2 && (Z(b) && (k = b || k), Z(w) && (O = w || O));
      const S = f(c, !0)(E), W = (
        // The message in vnode resolved with linked are returned as an array by processor.nomalize
        O === "vnode" && $e(S) && k ? S[0] : S
      );
      return k ? p(k)(W, O) : W;
    },
    message: f,
    type: g,
    interpolate: h,
    normalize: m,
    values: Ke(Se(), s, i)
  };
  return E;
}
const Ul = () => "", Jt = (e) => Pe(e);
function Hl(e, ...t) {
  const { fallbackFormat: n, postTranslation: r, unresolving: o, messageCompiler: a, fallbackLocale: s, messages: l } = e, [i, u] = la(...t), f = Re(u.missingWarn) ? u.missingWarn : e.missingWarn, p = Re(u.fallbackWarn) ? u.fallbackWarn : e.fallbackWarn, m = Re(u.escapeParameter) ? u.escapeParameter : e.escapeParameter, h = !!u.resolvedMessage, g = Z(u.default) || Re(u.default) ? Re(u.default) ? a ? i : () => i : u.default : n ? a ? i : () => i : null, v = n || g != null && (Z(g) || Pe(g)), E = Za(e, u);
  m && W_(u);
  let [c, T, b] = h ? [
    i,
    E,
    l[E] || Se()
  ] : ju(e, i, E, s, p, f), w = c, O = i;
  if (!h && !(Z(w) || Dt(w) || Jt(w)) && v && (w = g, O = w), !h && (!(Z(w) || Dt(w) || Jt(w)) || !Z(T)))
    return o ? Lo : i;
  let k = !1;
  const S = () => {
    k = !0;
  }, W = Jt(w) ? w : Vu(e, i, T, w, O, S);
  if (k)
    return w;
  const B = U_(e, T, b, u), q = B_(B), oe = j_(e, W, q);
  let I = r ? r(oe, i) : oe;
  return m && Z(I) && (I = kb(I)), I;
}
function W_(e) {
  $e(e.list) ? e.list = e.list.map((t) => Z(t) ? Ol(t) : t) : be(e.named) && Object.keys(e.named).forEach((t) => {
    Z(e.named[t]) && (e.named[t] = Ol(e.named[t]));
  });
}
function ju(e, t, n, r, o, a) {
  const { messages: s, onWarn: l, messageResolver: i, localeFallbacker: u } = e, f = u(e, r, n);
  let p = Se(), m, h = null;
  const g = "translate";
  for (let v = 0; v < f.length && (m = f[v], p = s[m] || Se(), (h = i(p, t)) === null && (h = p[t]), !(Z(h) || Dt(h) || Jt(h))); v++)
    if (!N_(m, f)) {
      const E = qa(
        e,
        // eslint-disable-line @typescript-eslint/no-explicit-any
        t,
        m,
        a,
        g
      );
      E !== t && (h = E);
    }
  return [h, m, p];
}
function Vu(e, t, n, r, o, a) {
  const { messageCompiler: s, warnHtmlMessage: l } = e;
  if (Jt(r)) {
    const u = r;
    return u.locale = u.locale || n, u.key = u.key || t, u;
  }
  if (s == null) {
    const u = () => r;
    return u.locale = n, u.key = t, u;
  }
  const i = s(r, V_(e, n, o, r, l, a));
  return i.locale = n, i.key = t, i.source = r, i;
}
function j_(e, t, n) {
  return t(n);
}
function la(...e) {
  const [t, n, r] = e, o = Se();
  if (!Z(t) && !Ue(t) && !Jt(t) && !Dt(t))
    throw Yt(Gt.INVALID_ARGUMENT);
  const a = Ue(t) ? String(t) : (Jt(t), t);
  return Ue(n) ? o.plural = n : Z(n) ? o.default = n : ye(n) && !Oo(n) ? o.named = n : $e(n) && (o.list = n), Ue(r) ? o.plural = r : Z(r) ? o.default = r : ye(r) && Ke(o, r), [a, o];
}
function V_(e, t, n, r, o, a) {
  return {
    locale: t,
    key: n,
    warnHtmlMessage: o,
    onError: (s) => {
      throw a && a(s), s;
    },
    onCacheKey: (s) => Tb(t, n, s)
  };
}
function U_(e, t, n, r) {
  const { modifiers: o, pluralRules: a, messageResolver: s, fallbackLocale: l, fallbackWarn: i, missingWarn: u, fallbackContext: f } = e, m = {
    locale: t,
    modifiers: o,
    pluralRules: a,
    messages: (h, g) => {
      let v = s(n, h);
      if (v == null && (f || g)) {
        const [, , E] = ju(
          f || e,
          // NOTE: if has fallbackContext, fallback to root, else if use linked, fallback to local context
          h,
          t,
          l,
          i,
          u
        );
        v = s(E, h);
      }
      if (Z(v) || Dt(v)) {
        let E = !1;
        const T = Vu(e, h, t, v, h, () => {
          E = !0;
        });
        return E ? Ul : T;
      } else return Jt(v) ? v : Ul;
    }
  };
  return e.processor && (m.processor = e.processor), r.list && (m.list = r.list), r.named && (m.named = r.named), Ue(r.plural) && (m.pluralIndex = r.plural), m;
}
t_();
/*!
  * vue-i18n v11.2.2
  * (c) 2025 kazuya kawaguchi
  * Released under the MIT License.
  */
const H_ = "11.2.2";
function K_() {
  typeof __VUE_I18N_FULL_INSTALL__ != "boolean" && (Gr().__VUE_I18N_FULL_INSTALL__ = !0), typeof __VUE_I18N_LEGACY_API__ != "boolean" && (Gr().__VUE_I18N_LEGACY_API__ = !0), typeof __INTLIFY_DROP_MESSAGE_COMPILER__ != "boolean" && (Gr().__INTLIFY_DROP_MESSAGE_COMPILER__ = !1);
}
const Kn = {
  // composer module errors
  UNEXPECTED_RETURN_TYPE: f_,
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
function br(e, ...t) {
  return ko(e, null, void 0);
}
const ia = /* @__PURE__ */ Ln("__translateVNode"), ua = /* @__PURE__ */ Ln("__datetimeParts"), ca = /* @__PURE__ */ Ln("__numberParts"), G_ = Ln("__setPluralRules"), Uu = /* @__PURE__ */ Ln("__injectWithOption"), da = /* @__PURE__ */ Ln("__dispose");
function _r(e) {
  if (!be(e) || Dt(e))
    return e;
  for (const t in e)
    if (Tt(e, t))
      if (!t.includes("."))
        be(e[t]) && _r(e[t]);
      else {
        const n = t.split("."), r = n.length - 1;
        let o = e, a = !1;
        for (let s = 0; s < r; s++) {
          if (n[s] === "__proto__")
            throw new Error(`unsafe key: ${n[s]}`);
          if (n[s] in o || (o[n[s]] = Se()), !be(o[n[s]])) {
            a = !0;
            break;
          }
          o = o[n[s]];
        }
        if (a || (Dt(o) ? $u.includes(n[r]) || delete e[t] : (o[n[r]] = e[t], delete e[t])), !Dt(o)) {
          const s = o[n[r]];
          be(s) && _r(s);
        }
      }
  return e;
}
function Hu(e, t) {
  const { messages: n, __i18n: r, messageResolver: o, flatJson: a } = t, s = ye(n) ? n : $e(r) ? Se() : { [e]: Se() };
  if ($e(r) && r.forEach((l) => {
    if ("locale" in l && "resource" in l) {
      const { locale: i, resource: u } = l;
      i ? (s[i] = s[i] || Se(), Yr(u, s[i])) : Yr(u, s);
    } else
      Z(l) && Yr(JSON.parse(l), s);
  }), o == null && a)
    for (const l in s)
      Tt(s, l) && _r(s[l]);
  return s;
}
function Y_(e) {
  return e.type;
}
function Z_(e, t, n) {
  let r = be(t.messages) ? t.messages : Se();
  "__i18nGlobal" in n && (r = Hu(e.locale.value, {
    messages: r,
    __i18n: n.__i18nGlobal
  }));
  const o = Object.keys(r);
  o.length && o.forEach((a) => {
    e.mergeLocaleMessage(a, r[a]);
  });
  {
    if (be(t.datetimeFormats)) {
      const a = Object.keys(t.datetimeFormats);
      a.length && a.forEach((s) => {
        e.mergeDateTimeFormat(s, t.datetimeFormats[s]);
      });
    }
    if (be(t.numberFormats)) {
      const a = Object.keys(t.numberFormats);
      a.length && a.forEach((s) => {
        e.mergeNumberFormat(s, t.numberFormats[s]);
      });
    }
  }
}
function Kl(e) {
  return H(Jl, null, e, 0);
}
function Ku() {
  return "currentInstance" in Po ? Po["currentInstance"] : Po.getCurrentInstance();
}
const Gl = () => [], q_ = () => !1;
let Yl = 0;
function Zl(e) {
  return (t, n, r, o) => e(n, r, Ku() || void 0, o);
}
function X_(e = {}) {
  const { __root: t, __injectWithOption: n } = e, r = t === void 0, o = e.flatJson, a = Cl ? M : fn;
  let s = Re(e.inheritLocale) ? e.inheritLocale : !0;
  const l = a(
    // prettier-ignore
    t && s ? t.locale.value : Z(e.locale) ? e.locale : co
  ), i = a(
    // prettier-ignore
    t && s ? t.fallbackLocale.value : Z(e.fallbackLocale) || $e(e.fallbackLocale) || ye(e.fallbackLocale) || e.fallbackLocale === !1 ? e.fallbackLocale : l.value
  ), u = a(Hu(l.value, e)), f = a(ye(e.datetimeFormats) ? e.datetimeFormats : { [l.value]: {} }), p = a(ye(e.numberFormats) ? e.numberFormats : { [l.value]: {} });
  let m = t ? t.missingWarn : Re(e.missingWarn) || uo(e.missingWarn) ? e.missingWarn : !0, h = t ? t.fallbackWarn : Re(e.fallbackWarn) || uo(e.fallbackWarn) ? e.fallbackWarn : !0, g = t ? t.fallbackRoot : Re(e.fallbackRoot) ? e.fallbackRoot : !0, v = !!e.fallbackFormat, E = Pe(e.missing) ? e.missing : null, c = Pe(e.missing) ? Zl(e.missing) : null, T = Pe(e.postTranslation) ? e.postTranslation : null, b = t ? t.warnHtmlMessage : Re(e.warnHtmlMessage) ? e.warnHtmlMessage : !0, w = !!e.escapeParameter;
  const O = t ? t.modifiers : ye(e.modifiers) ? e.modifiers : {};
  let k = e.pluralRules || t && t.pluralRules, S;
  S = (() => {
    r && Fl(null);
    const y = {
      version: H_,
      locale: l.value,
      fallbackLocale: i.value,
      messages: u.value,
      modifiers: O,
      pluralRules: k,
      missing: c === null ? void 0 : c,
      missingWarn: m,
      fallbackWarn: h,
      fallbackFormat: v,
      unresolving: !0,
      postTranslation: T === null ? void 0 : T,
      warnHtmlMessage: b,
      escapeParameter: w,
      messageResolver: e.messageResolver,
      messageCompiler: e.messageCompiler,
      __meta: { framework: "vue" }
    };
    y.datetimeFormats = f.value, y.numberFormats = p.value, y.__datetimeFormatters = ye(S) ? S.__datetimeFormatters : void 0, y.__numberFormatters = ye(S) ? S.__numberFormatters : void 0;
    const R = P_(y);
    return r && Fl(R), R;
  })(), Qn(S, l.value, i.value);
  function B() {
    return [
      l.value,
      i.value,
      u.value,
      f.value,
      p.value
    ];
  }
  const q = L({
    get: () => l.value,
    set: (y) => {
      S.locale = y, l.value = y;
    }
  }), oe = L({
    get: () => i.value,
    set: (y) => {
      S.fallbackLocale = y, i.value = y, Qn(S, l.value, y);
    }
  }), I = L(() => u.value), V = /* @__PURE__ */ L(() => f.value), ee = /* @__PURE__ */ L(() => p.value);
  function fe() {
    return Pe(T) ? T : null;
  }
  function le(y) {
    T = y, S.postTranslation = y;
  }
  function D() {
    return E;
  }
  function ve(y) {
    y !== null && (c = Zl(y)), E = y, S.missing = c;
  }
  const ge = (y, R, de, _e, Ye, yn) => {
    B();
    let pt;
    try {
      r || (S.fallbackContext = t ? I_() : void 0), pt = y(S);
    } finally {
      r || (S.fallbackContext = void 0);
    }
    if (de !== "translate exists" && // for not `te` (e.g `t`)
    Ue(pt) && pt === Lo || de === "translate exists" && !pt) {
      const [Io, Qa] = R();
      return t && g ? _e(t) : Ye(Io);
    } else {
      if (yn(pt))
        return pt;
      throw br(Kn.UNEXPECTED_RETURN_TYPE);
    }
  };
  function Ie(...y) {
    return ge((R) => Reflect.apply(Hl, null, [R, ...y]), () => la(...y), "translate", (R) => Reflect.apply(R.t, R, [...y]), (R) => R, (R) => Z(R));
  }
  function xe(...y) {
    const [R, de, _e] = y;
    if (_e && !be(_e))
      throw br(Kn.INVALID_ARGUMENT);
    return Ie(R, de, Ke({ resolvedMessage: !0 }, _e || {}));
  }
  function Ge(...y) {
    return ge((R) => Reflect.apply(zl, null, [R, ...y]), () => aa(...y), "datetime format", (R) => Reflect.apply(R.d, R, [...y]), () => Ml, (R) => Z(R) || $e(R));
  }
  function U(...y) {
    return ge((R) => Reflect.apply(Wl, null, [R, ...y]), () => sa(...y), "number format", (R) => Reflect.apply(R.n, R, [...y]), () => Ml, (R) => Z(R) || $e(R));
  }
  function X(y) {
    return y.map((R) => Z(R) || Ue(R) || Re(R) ? Kl(String(R)) : R);
  }
  const Ee = {
    normalize: X,
    interpolate: (y) => y,
    type: "vnode"
  };
  function Te(...y) {
    return ge((R) => {
      let de;
      const _e = R;
      try {
        _e.processor = Ee, de = Reflect.apply(Hl, null, [_e, ...y]);
      } finally {
        _e.processor = null;
      }
      return de;
    }, () => la(...y), "translate", (R) => R[ia](...y), (R) => [Kl(R)], (R) => $e(R));
  }
  function ae(...y) {
    return ge((R) => Reflect.apply(Wl, null, [R, ...y]), () => sa(...y), "number format", (R) => R[ca](...y), Gl, (R) => Z(R) || $e(R));
  }
  function ze(...y) {
    return ge((R) => Reflect.apply(zl, null, [R, ...y]), () => aa(...y), "datetime format", (R) => R[ua](...y), Gl, (R) => Z(R) || $e(R));
  }
  function ue(y) {
    k = y, S.pluralRules = k;
  }
  function He(y, R) {
    return ge(() => {
      if (!y)
        return !1;
      const de = Z(R) ? R : l.value, _e = st(de), Ye = S.messageResolver(_e, y);
      return Dt(Ye) || Jt(Ye) || Z(Ye);
    }, () => [y], "translate exists", (de) => Reflect.apply(de.te, de, [y, R]), q_, (de) => Re(de));
  }
  function _t(y) {
    let R = null;
    const de = Mu(S, i.value, l.value);
    for (let _e = 0; _e < de.length; _e++) {
      const Ye = u.value[de[_e]] || {}, yn = S.messageResolver(Ye, y);
      if (yn != null) {
        R = yn;
        break;
      }
    }
    return R;
  }
  function at(y) {
    const R = _t(y);
    return R ?? (t ? t.tm(y) || {} : {});
  }
  function st(y) {
    return u.value[y] || {};
  }
  function lt(y, R) {
    if (o) {
      const de = { [y]: R };
      for (const _e in de)
        Tt(de, _e) && _r(de[_e]);
      R = de[y];
    }
    u.value[y] = R, S.messages = u.value;
  }
  function ft(y, R) {
    u.value[y] = u.value[y] || {};
    const de = { [y]: R };
    if (o)
      for (const _e in de)
        Tt(de, _e) && _r(de[_e]);
    R = de[y], Yr(R, u.value[y]), S.messages = u.value;
  }
  function Lt(y) {
    return f.value[y] || {};
  }
  function _(y, R) {
    f.value[y] = R, S.datetimeFormats = f.value, Bl(S, y, R);
  }
  function C(y, R) {
    f.value[y] = Ke(f.value[y] || {}, R), S.datetimeFormats = f.value, Bl(S, y, R);
  }
  function $(y) {
    return p.value[y] || {};
  }
  function K(y, R) {
    p.value[y] = R, S.numberFormats = p.value, jl(S, y, R);
  }
  function he(y, R) {
    p.value[y] = Ke(p.value[y] || {}, R), S.numberFormats = p.value, jl(S, y, R);
  }
  Yl++, t && Cl && (ce(t.locale, (y) => {
    s && (l.value = y, S.locale = y, Qn(S, l.value, i.value));
  }), ce(t.fallbackLocale, (y) => {
    s && (i.value = y, S.fallbackLocale = y, Qn(S, l.value, i.value));
  }));
  const se = {
    id: Yl,
    locale: q,
    fallbackLocale: oe,
    get inheritLocale() {
      return s;
    },
    set inheritLocale(y) {
      s = y, y && t && (l.value = t.locale.value, i.value = t.fallbackLocale.value, Qn(S, l.value, i.value));
    },
    get availableLocales() {
      return Object.keys(u.value).sort();
    },
    messages: I,
    get modifiers() {
      return O;
    },
    get pluralRules() {
      return k || {};
    },
    get isGlobal() {
      return r;
    },
    get missingWarn() {
      return m;
    },
    set missingWarn(y) {
      m = y, S.missingWarn = m;
    },
    get fallbackWarn() {
      return h;
    },
    set fallbackWarn(y) {
      h = y, S.fallbackWarn = h;
    },
    get fallbackRoot() {
      return g;
    },
    set fallbackRoot(y) {
      g = y;
    },
    get fallbackFormat() {
      return v;
    },
    set fallbackFormat(y) {
      v = y, S.fallbackFormat = v;
    },
    get warnHtmlMessage() {
      return b;
    },
    set warnHtmlMessage(y) {
      b = y, S.warnHtmlMessage = y;
    },
    get escapeParameter() {
      return w;
    },
    set escapeParameter(y) {
      w = y, S.escapeParameter = y;
    },
    t: Ie,
    getLocaleMessage: st,
    setLocaleMessage: lt,
    mergeLocaleMessage: ft,
    getPostTranslationHandler: fe,
    setPostTranslationHandler: le,
    getMissingHandler: D,
    setMissingHandler: ve,
    [G_]: ue
  };
  return se.datetimeFormats = V, se.numberFormats = ee, se.rt = xe, se.te = He, se.tm = at, se.d = Ge, se.n = U, se.getDateTimeFormat = Lt, se.setDateTimeFormat = _, se.mergeDateTimeFormat = C, se.getNumberFormat = $, se.setNumberFormat = K, se.mergeNumberFormat = he, se[Uu] = n, se[ia] = Te, se[ua] = ze, se[ca] = ae, se;
}
const Xa = {
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
function J_({ slots: e }, t) {
  return t.length === 1 && t[0] === "default" ? (e.default ? e.default() : []).reduce((r, o) => [
    ...r,
    // prettier-ignore
    ...o.type === Ve ? o.children : [o]
  ], []) : t.reduce((n, r) => {
    const o = e[r];
    return o && (n[r] = o()), n;
  }, Se());
}
function Gu() {
  return Ve;
}
Ke({
  keypath: {
    type: String,
    required: !0
  },
  plural: {
    type: [Number, String],
    validator: (e) => Ue(e) || !isNaN(e)
  }
}, Xa);
function Q_(e) {
  return $e(e) && !Z(e[0]);
}
function Yu(e, t, n, r) {
  const { slots: o, attrs: a } = t;
  return () => {
    const s = { part: !0 };
    let l = Se();
    e.locale && (s.locale = e.locale), Z(e.format) ? s.key = e.format : be(e.format) && (Z(e.format.key) && (s.key = e.format.key), l = Object.keys(e.format).reduce((m, h) => n.includes(h) ? Ke(Se(), m, { [h]: e.format[h] }) : m, Se()));
    const i = r(e.value, s, l);
    let u = [s.key];
    $e(i) ? u = i.map((m, h) => {
      const g = o[m.type], v = g ? g({ [m.type]: m.value, index: h, parts: i }) : [m.value];
      return Q_(v) && (v[0].key = `${m.type}-${h}`), v;
    }) : Z(i) && (u = [i]);
    const f = Ke(Se(), a), p = Z(e.tag) || be(e.tag) ? e.tag : Gu();
    return Ql(p, f, u);
  };
}
Ke({
  value: {
    type: Number,
    required: !0
  },
  format: {
    type: [String, Object]
  }
}, Xa);
const e1 = /* @__PURE__ */ Ln("global-vue-i18n");
function Or(e = {}) {
  const t = Ku();
  if (t == null)
    throw br(Kn.MUST_BE_CALL_SETUP_TOP);
  if (!t.isCE && t.appContext.app != null && !t.appContext.app.__VUE_I18N_SYMBOL__)
    throw br(Kn.NOT_INSTALLED);
  const n = t1(t), r = r1(n), o = Y_(t), a = n1(e, o);
  if (a === "global")
    return Z_(r, e, o), r;
  if (a === "parent") {
    let i = o1(n, t, e.__useComponent);
    return i == null && (i = r), i;
  }
  const s = n;
  let l = s.__getInstance(t);
  if (l == null) {
    const i = Ke({}, e);
    "__i18n" in o && (i.__i18n = o.__i18n), r && (i.__root = r), l = X_(i), s.__composerExtend && (l[da] = s.__composerExtend(l)), s1(s, t, l), s.__setInstance(t, l);
  }
  return l;
}
function t1(e) {
  const t = Ce(e.isCE ? e1 : e.appContext.app.__VUE_I18N_SYMBOL__);
  if (!t)
    throw br(e.isCE ? Kn.NOT_INSTALLED_WITH_PROVIDE : Kn.UNEXPECTED_ERROR);
  return t;
}
function n1(e, t) {
  return Oo(e) ? "__i18n" in t ? "local" : "global" : e.useScope ? e.useScope : "local";
}
function r1(e) {
  return e.mode === "composition" ? e.global : e.global.__composer;
}
function o1(e, t, n = !1) {
  let r = null;
  const o = t.root;
  let a = a1(t, n);
  for (; a != null; ) {
    const s = e;
    if (e.mode === "composition")
      r = s.__getInstance(a);
    else if (__VUE_I18N_LEGACY_API__) {
      const l = s.__getInstance(a);
      l != null && (r = l.__composer, n && r && !r[Uu] && (r = null));
    }
    if (r != null || o === a)
      break;
    a = a.parent;
  }
  return r;
}
function a1(e, t = !1) {
  return e == null ? null : t && e.vnode.ctx || e.parent;
}
function s1(e, t, n) {
  Fe(() => {
  }, t), va(() => {
    const r = n;
    e.__deleteInstance(t);
    const o = r[da];
    o && (o(), delete r[da]);
  }, t);
}
Ke({
  value: {
    type: [Number, Date],
    required: !0
  },
  format: {
    type: [String, Object]
  }
}, Xa);
K_();
O_(d_);
k_(T_);
L_(Mu);
const l1 = "snippets-code:developer-mode", Zu = "snippets-code:frontend-diagnostics", i1 = 240, er = "[REDACTED]", Zr = (e) => e.replace(
  /("(?:[^"]*(?:token|password|secret|authorization)[^"]*)"\s*:\s*)("(?:\\.|[^"])*"|[^,\r\n}\]]+)/gi,
  `$1"${er}"`
).replace(/\bBearer\s+[A-Za-z0-9._~+/=-]+/gi, `Bearer ${er}`).replace(
  /\b(?:gh[pousr]_[A-Za-z0-9_]{12,}|github_pat_[A-Za-z0-9_]{12,})\b/g,
  er
).replace(/(https?:\/\/)[^/\s@]+@/gi, `$1${er}@`).replace(
  /([?&][^=&\s]*(?:token|password|secret|authorization)[^=&\s]*=)[^&\s]+/gi,
  `$1${er}`
), qu = (e) => {
  if (e === void 0) return;
  if (typeof e == "string") return Zr(e);
  const t = /* @__PURE__ */ new WeakSet();
  try {
    return Zr(
      JSON.stringify(
        e,
        (n, r) => {
          if (r instanceof Error)
            return {
              name: r.name,
              message: r.message,
              stack: r.stack,
              cause: r.cause
            };
          if (typeof r == "bigint") return r.toString();
          if (typeof r == "object" && r !== null) {
            if (t.has(r)) return "[Circular]";
            t.add(r);
          }
          return r;
        },
        2
      )
    );
  } catch {
    return Zr(String(e));
  }
}, u1 = () => {
  try {
    return globalThis.__TAURI_INTERNALS__?.metadata?.currentWindow?.label ?? "webview";
  } catch {
    return "webview";
  }
}, c1 = () => {
  if (typeof localStorage > "u") return [];
  try {
    const e = JSON.parse(localStorage.getItem(Zu) || "[]");
    return Array.isArray(e) ? e : [];
  } catch {
    return [];
  }
}, Xu = () => {
  if (typeof localStorage > "u") return !1;
  try {
    return localStorage.getItem(l1) === "true";
  } catch {
    return !1;
  }
}, d1 = (e, t, n) => {
  if (!Xu() && e !== "warn" && e !== "error" || typeof localStorage > "u") return;
  const r = c1();
  r.push({
    timestamp: (/* @__PURE__ */ new Date()).toISOString(),
    level: e,
    windowLabel: u1(),
    message: Zr(t),
    data: qu(n)
  });
  try {
    localStorage.setItem(
      Zu,
      JSON.stringify(r.slice(-i1))
    );
  } catch {
  }
}, f1 = () => Xu(), Br = (e, t, n) => {
  d1(e, t, n), F("frontend_log", {
    level: e,
    message: t,
    data: n === void 0 ? null : qu(n)
  }).catch(() => {
  });
}, ne = {
  info: (e, t, ...n) => {
    Br("info", e, t);
  },
  error: (e, t) => {
    Br("error", e, t);
  },
  warn: (e, t) => {
    Br("warn", e, t);
  },
  debug: (e, t) => {
    f1() && Br("debug", e, t);
  }
};
function p1(e) {
  return e.replace(/([a-z])([A-Z])/g, "$1 $2").replace(/([A-Z]+)([A-Z][a-z])/g, "$1 $2");
}
function jo(e) {
  if (!e) return "unknown";
  const t = e.match(/[\u4e00-\u9fa5]/g), n = t ? t.length : 0, r = e.match(/[\u3040-\u30ff]/g), o = r ? r.length : 0, a = e.match(/[\uac00-\ud7af]/g), s = a ? a.length : 0, l = e.match(/[a-zA-Z]/g), i = l ? l.length : 0, f = n + o + s + i;
  return f === 0 ? "unknown" : o >= 3 && o > i && o / f >= 0.2 ? "ja" : s >= 3 && s > n && s > i && s / f >= 0.2 ? "ko" : n > i ? "zh" : i > n ? "en" : "unknown";
}
const m1 = "https://raw.githubusercontent.com/GigaPuddings/snippets-code-t/main/docs/plugin-marketplace/marketplace.json";
async function v1(e, t = !1, n, r) {
  return await F("install_plugin_package_from_url", {
    expectedSizeBytes: r,
    packageUrl: e,
    packageSubdir: n,
    overwrite: t
  });
}
async function g1(e) {
  return await F("fetch_plugin_marketplace", {
    marketplaceUrl: e
  });
}
async function Ju(e, t) {
  return await F("get_local_plugin_resource_path", {
    pluginId: e,
    relativePath: t
  });
}
async function Vo() {
  await F("install_translation_offline_runtime_resources");
}
const h1 = "resources/transformers/transformers.min.js", y1 = ["translation-offline-runtime", "translation"], b1 = "https://huggingface.co/", _1 = "{model}/resolve/{revision}/", w1 = "/__snippets_code_disabled_transformers_local_models__/", E1 = [
  "ort-wasm-simd-threaded.wasm",
  "ort-wasm-simd.wasm",
  "ort-wasm-threaded.wasm",
  "ort-wasm.wasm"
];
let tr = null;
const T1 = (e) => {
  const t = e.toLowerCase();
  return [
    { index: e.lastIndexOf("/"), length: 1 },
    { index: e.lastIndexOf("\\"), length: 1 },
    { index: t.lastIndexOf("%5c"), length: 3 },
    { index: t.lastIndexOf("%2f"), length: 3 }
  ].reduce(
    (r, o) => o.index > r.index ? o : r,
    { index: -1, length: 0 }
  );
}, C1 = (e) => {
  const t = e.search(/[?#]/), n = t >= 0 ? e.slice(0, t) : e, r = T1(n);
  return r.index >= 0 ? n.slice(0, r.index + r.length) : n;
}, S1 = (e) => {
  const t = C1(e);
  return Object.fromEntries(
    E1.map((n) => [n, `${t}${n}`])
  );
}, Qu = (e, t) => {
  var n, r;
  e.useBrowserCache = !0, e.allowRemoteModels = !0, e.remoteHost = b1, e.remotePathTemplate = _1, e.allowLocalModels = !1, e.localModelPath = w1, t && (e.backends ?? (e.backends = {}), (n = e.backends).onnx ?? (n.onnx = {}), (r = e.backends.onnx).wasm ?? (r.wasm = {}), e.backends.onnx.wasm.wasmPaths = S1(t), e.backends.onnx.wasm.numThreads = 1);
};
async function O1() {
  return tr || (tr = (async () => {
    for (const e of y1) {
      const t = await Ju(e, h1);
      if (!t) continue;
      const n = mb(t), r = await import(
        /* @vite-ignore */
        n
      );
      return Qu(r.env, n), ne.info(`[离线翻译] 已从插件资源加载 Transformers runtime: ${e}`, {
        wasmPaths: r.env.backends?.onnx?.wasm?.wasmPaths,
        numThreads: r.env.backends?.onnx?.wasm?.numThreads,
        remoteHost: r.env.remoteHost,
        remotePathTemplate: r.env.remotePathTemplate,
        allowLocalModels: r.env.allowLocalModels,
        localModelPath: r.env.localModelPath
      }), r;
    }
    throw new Error("离线翻译运行时未安装，请先安装 translation-offline-runtime 插件资源包");
  })().catch((e) => {
    throw tr = null, e;
  }), tr);
}
let Zt = null, ur = !1, Mn = null, Uo = null, fa = null;
const k1 = "Xenova/opus-mt-en-zh", L1 = [
  { name: "tokenizer_config.json", size: "~1KB" },
  { name: "config.json", size: "~1KB" },
  { name: "tokenizer.json", size: "~2MB" },
  { name: "generation_config.json", size: "~1KB" },
  { name: "onnx/encoder_model_quantized.onnx", size: "~75MB" },
  { name: "onnx/decoder_model_merged_quantized.onnx", size: "~220MB" }
], I1 = 3e5;
function ql(e) {
  fa = e;
}
function P1() {
  return L1;
}
function A1(e, t, n) {
  return Promise.race([
    e,
    new Promise(
      (r, o) => setTimeout(() => o(new Error(n)), t)
    )
  ]);
}
async function ec() {
  return Zt || Mn || (ur = !0, ne.info("[离线翻译] 正在加载翻译模型..."), Mn = (async () => {
    try {
      const { pipeline: e, env: t } = await O1();
      Qu(t);
      let n = "";
      const r = e("translation", k1, {
        dtype: "q8",
        device: "wasm",
        revision: "main",
        local_files_only: !1,
        progress_callback: (a) => {
          a.status === "done" && a.file && a.file !== n && (n = a.file, ne.info(`[离线翻译] 已加载: ${a.file}`)), fa && fa({
            status: a.status,
            progress: a.progress,
            file: a.file
          });
        }
      });
      return Zt = await A1(
        r,
        I1,
        "模型加载超时，请检查网络连接后重试"
      ), ne.info("[离线翻译] 翻译模型加载完成"), ur = !1, Zt;
    } catch (e) {
      throw ur = !1, Mn = null, ne.error("[离线翻译] 模型加载失败:", e), e;
    }
  })(), Mn);
}
async function N1(e) {
  if (!e?.trim()) return e;
  Uo = new AbortController();
  const t = Uo.signal;
  try {
    const n = await ec();
    if (t.aborted)
      throw new Error("翻译已取消");
    const r = e.split(`
`), o = [];
    for (const a of r) {
      if (t.aborted)
        throw new Error("翻译已取消");
      const s = a.trim();
      if (!s) {
        o.push("");
        continue;
      }
      const l = await n(s);
      if (t.aborted)
        throw new Error("翻译已取消");
      if (Array.isArray(l) && l.length > 0) {
        const i = l[0].translation_text || s;
        o.push(i);
      } else
        o.push(s);
    }
    return o.join(`
`);
  } catch (n) {
    throw n instanceof Error && n.message === "翻译已取消" ? (ne.info("[离线翻译] 翻译已取消"), n) : n instanceof Error && n.message.includes("离线翻译运行时未安装") ? (ne.warn("[离线翻译] 运行时资源未安装"), n) : (ne.error("[离线翻译] 翻译失败:", n), new Error("离线翻译失败，请检查模型是否正确加载"));
  } finally {
    Uo = null;
  }
}
async function pa() {
  await ec();
}
function Wr() {
  return Zt !== null;
}
function R1() {
  return ur;
}
async function nr() {
  try {
    if ("caches" in window) {
      const t = await caches.keys();
      ne.info(`[离线翻译] Cache Storage 列表: ${JSON.stringify(t)}`);
      for (const n of t)
        if (n.includes("transformers") || n.includes("huggingface")) {
          const o = await (await caches.open(n)).keys();
          if (ne.info(`[离线翻译] Cache "${n}" 包含 ${o.length} 个文件`), o.some(
            (s) => s.url.includes("opus-mt-en-zh") || s.url.includes("Xenova")
          )) {
            const s = o.some((l) => l.url.includes(".onnx"));
            if (ne.info(`[离线翻译] 找到模型缓存，包含 ONNX: ${s}`), s)
              return {
                isCached: !0,
                cacheType: "cache-storage",
                cacheName: n,
                estimatedSize: "~300MB"
              };
          }
        }
    }
    const e = await indexedDB.databases();
    ne.info(`[离线翻译] IndexedDB 列表: ${JSON.stringify(e.map((t) => t.name))}`);
    for (const t of e)
      if (t.name && (t.name.includes("transformers") || t.name.includes("huggingface") || t.name.includes("onnx") || t.name.includes("localforage")))
        return ne.info(`[离线翻译] 找到 IndexedDB 缓存: ${t.name}`), {
          isCached: !0,
          cacheType: "indexeddb",
          cacheName: t.name,
          estimatedSize: "~300MB"
        };
    return ne.info("[离线翻译] 未找到模型缓存"), { isCached: !1, cacheType: "none" };
  } catch (e) {
    return ne.warn("[离线翻译] 检查缓存失败:", e), { isCached: !1, cacheType: "none" };
  }
}
async function $1() {
  return (await nr()).isCached;
}
function M1() {
  return Zt !== null;
}
async function D1() {
  if (Zt)
    try {
      await Zt.dispose?.();
    } catch {
    }
  Zt = null, Mn = null, ur = !1, ne.info("[离线翻译] 翻译器已释放");
}
async function F1() {
  try {
    const e = await indexedDB.databases();
    for (const t of e)
      t.name && (t.name.includes("transformers") || t.name.includes("onnx")) && (indexedDB.deleteDatabase(t.name), ne.info(`[离线翻译] 已删除 IndexedDB: ${t.name}`));
    if ("caches" in window) {
      const t = await caches.keys();
      for (const n of t)
        (n.includes("transformers") || n.includes("onnx")) && (await caches.delete(n), ne.info(`[离线翻译] 已删除 Cache: ${n}`));
    }
    ne.info("[离线翻译] 模型缓存已清除");
  } catch (e) {
    throw ne.error("[离线翻译] 清除缓存失败:", e), e;
  }
}
const x1 = { class: "translate-window" }, z1 = {
  class: "header",
  "data-tauri-drag-region": ""
}, B1 = { class: "left-buttons" }, W1 = {
  class: "bg-penal text-base",
  "data-tauri-drag-region": ""
}, j1 = { class: "right-buttons" }, V1 = { class: "translate-container transparent-input" }, U1 = { class: "language-selector" }, H1 = { class: "source-area" }, K1 = { class: "source-actions" }, G1 = { class: "source-material" }, Y1 = { class: "translation-results" }, Z1 = ["onClick"], q1 = { class: "result-title" }, X1 = ["src"], J1 = ["src"], Q1 = {
  key: 2,
  class: "offline-icon"
}, ew = { class: "result-controls" }, tw = {
  key: 0,
  class: "result-body"
}, nw = {
  key: 1,
  class: "result-text"
}, rw = {
  key: 2,
  class: "result-empty"
}, ow = { class: "result-actions" }, aw = ["onClick"], sw = ["onClick"], lw = ["onClick"], iw = /* @__PURE__ */ Y({
  __name: "index",
  setup(e) {
    const { t } = Or(), n = Tu(), r = M(!1), o = M(""), a = M("auto"), s = M("zh"), l = M(!1), i = M(!1), u = M(), f = M(!1), p = M([
      {
        engine: "bing",
        name: "",
        text: "",
        loading: !1,
        expanded: !0
      },
      {
        engine: "google",
        name: "",
        text: "",
        loading: !1,
        expanded: !0
      },
      {
        engine: "offline",
        name: "",
        text: "",
        loading: !1,
        expanded: !0
      }
    ]), m = L(() => p.value.filter((U) => U.engine === "offline" ? f.value : !0)), h = (U) => U === "bing" ? t("translate.bingTranslate") : U === "google" ? t("translate.googleTranslate") : U === "offline" ? t("translate.offlineTranslate") : U, g = L(() => [
      { value: "auto", label: t("translate.languages.auto") },
      { value: "zh", label: t("translate.languages.zh") },
      { value: "zh_tw", label: t("translate.languages.zh_tw") },
      { value: "en", label: t("translate.languages.en") },
      { value: "ja", label: t("translate.languages.ja") },
      { value: "ko", label: t("translate.languages.ko") },
      { value: "fr", label: t("translate.languages.fr") },
      { value: "de", label: t("translate.languages.de") },
      { value: "ru", label: t("translate.languages.ru") },
      { value: "es", label: t("translate.languages.es") },
      { value: "pt_pt", label: t("translate.languages.pt_pt") },
      { value: "pt_br", label: t("translate.languages.pt_br") },
      { value: "vi", label: t("translate.languages.vi") },
      { value: "id", label: t("translate.languages.id") },
      { value: "th", label: t("translate.languages.th") },
      { value: "ar", label: t("translate.languages.ar") }
    ]);
    let v = null, E = null, c = null;
    const T = M({
      forChinese: "en",
      forEnglish: "zh"
    }), b = async () => {
      if (l.value) return;
      const U = await ln("tauri://blur", () => {
        v && clearTimeout(v), v = setTimeout(async () => {
          l.value || (O(), await n.hide());
        }, 100);
      }), X = await ln("tauri://focus", () => {
        v && clearTimeout(v), xe();
      }), me = await ln("tauri://show", () => {
        xe();
      }), Ee = await ln("tauri://move", () => {
        v && clearTimeout(v);
      }), Te = await ln("selection-text", (ze) => {
        ze.payload && ze.payload.text && ge(ze.payload.text);
      }), ae = await ln("reset-state", () => {
        O();
      });
      E = () => {
        U(), X(), Ee(), Te(), ae(), me();
      };
    }, w = async () => {
      l.value = !l.value, await n.setAlwaysOnTop(l.value), l.value ? E && (E(), E = null) : b();
    }, O = () => {
      o.value = "", i.value = !1, p.value.forEach((U) => {
        U.text = "", U.loading = !1;
      });
    }, k = async () => {
      O(), await n.close();
    }, S = () => {
      a.value !== "auto" && ([a.value, s.value] = [
        s.value,
        a.value
      ], ee());
    }, W = () => {
      o.value = "", p.value.forEach((U) => {
        U.text = "";
      }), i.value = !1;
    }, B = async (U) => {
      U && (await navigator.clipboard.writeText(U), Xe.success(t("translate.copiedToClipboard")));
    }, q = (U, X) => {
      if (!U) return;
      const me = new SpeechSynthesisUtterance(U), Ee = X === "zh" ? "zh-CN" : X === "zh_tw" ? "zh-TW" : X === "en" ? "en-US" : X;
      me.lang = Ee, window.speechSynthesis.speak(me);
    }, oe = () => {
      if (a.value !== "auto") return;
      const U = jo(o.value);
      U === "zh" ? s.value = T.value.forChinese : U === "en" && (s.value = T.value.forEnglish);
    }, I = () => {
      const U = jo(o.value);
      U === "zh" ? T.value.forChinese = s.value : U === "en" && (T.value.forEnglish = s.value), ee();
    }, V = async (U) => {
      const X = p.value.find((Te) => Te.engine === U);
      if (!X || U === "offline" && !f.value)
        return;
      X.loading = !0, X.text = "";
      const me = p1(o.value);
      let Ee = s.value;
      U === "bing" && Ee === "auto" && (Ee = "en");
      try {
        let Te;
        if (U === "offline") {
          if (!M1())
            if (await $1())
              ne.info("[翻译窗口] 离线翻译懒加载：开始加载模型..."), await pa(), ne.info("[翻译窗口] 离线翻译懒加载：模型加载完成");
            else
              throw new Error("离线翻译模型未下载，请在设置中下载模型");
          Te = await N1(me);
        } else
          Te = await F("translate_text", {
            text: me,
            from: a.value,
            to: Ee,
            engine: U
          });
        X.text = Te;
      } catch (Te) {
        ne.error(`[翻译] ${U}翻译出错`, Te);
        const ae = String(Te);
        ae.includes("429") || ae.includes("Too Many Requests") ? X.text = t("translate.tooManyRequests") : ae.includes("timeout") || ae.includes("超时") ? X.text = t("translate.timeout") : ae.includes("network") || ae.includes("网络") ? X.text = t("translate.networkError") : ae.includes("未下载") || ae.includes("未激活") || ae.includes("运行时未安装") ? X.text = ae : X.text = t("translate.translateFailed");
      } finally {
        X.loading = !1;
      }
    }, ee = async () => {
      if (!o.value.trim()) {
        p.value.forEach((X) => {
          X.text = "";
        });
        return;
      }
      oe(), r.value = !0;
      const U = m.value.map(
        (X) => V(X.engine)
      );
      await Promise.all(U), r.value = !1;
    }, fe = (U) => {
      U.expanded = !U.expanded;
    }, le = () => {
      i.value = !!o.value, c && clearTimeout(c), o.value.trim() ? c = setTimeout(() => {
        ee();
      }, 500) : p.value.forEach((U) => {
        U.text = "";
      });
    };
    let D = "", ve = !1;
    const ge = (U) => {
      U && (U === D && ve || (D = U, ve = !0, o.value = U, i.value = !0, oe(), ee().finally(() => {
        setTimeout(() => {
          ve = !1;
        }, 2e3);
      }), xe()));
    }, Ie = (U) => {
      o.value = U.text;
      const X = jo(o.value), me = a.value, Ee = s.value;
      me === "auto" ? (a.value = "auto", X === "zh" ? s.value = T.value.forChinese : s.value = T.value.forEnglish) : (a.value = Ee, s.value = me === "auto" ? X === "zh" ? "en" : "zh" : me), ee();
    }, xe = () => {
      const U = (X = 0) => {
        if (!(X > 5))
          if (u.value)
            u.value.focus();
          else {
            const me = 100 * (X + 1);
            setTimeout(() => U(X + 1), me);
          }
      };
      u.value && u.value.focus(), Ne(() => {
        U();
      });
    }, Ge = () => {
      oe(), ee();
    };
    return Fe(async () => {
      try {
        const U = await F("get_offline_model_activated");
        ne.info(`[翻译窗口] 离线模型后端激活状态: ${U}`), f.value = U;
      } catch (U) {
        ne.error("[翻译窗口] 获取离线模型激活状态失败:", U), f.value = !1;
      }
      await b(), o.value.trim() && oe(), xe(), await Ne(), setTimeout(() => {
        n.emit("translate_ready");
      }, 100);
    }), va(() => {
      E && E(), v && clearTimeout(v), c && clearTimeout(c), O();
    }), (U, X) => {
      const me = gu, Ee = vu, Te = _g, ae = fu, ze = jy;
      return P(), x("main", x1, [
        N("div", z1, [
          N("div", B1, [
            N(
              "div",
              {
                onClick: w,
                class: z(["pin-button", d(l) ? "pinned" : ""])
              },
              [
                H(d(Hc), { size: 18 })
              ],
              2
              /* CLASS */
            )
          ]),
          N(
            "div",
            W1,
            J(U.$t("translate.title")),
            1
            /* TEXT */
          ),
          N("div", j1, [
            N("div", {
              onClick: k,
              class: "material-close"
            }, [
              H(d(Wc), { size: 22 })
            ])
          ])
        ]),
        N("div", V1, [
          G(" 语言选择区域 "),
          N("div", U1, [
            H(Ee, {
              modelValue: d(a),
              "onUpdate:modelValue": X[0] || (X[0] = (ue) => Vr(a) ? a.value = ue : null),
              size: "small",
              onChange: Ge,
              class: "lang-select"
            }, {
              default: te(() => [
                (P(!0), x(
                  Ve,
                  null,
                  qt(d(g), (ue) => (P(), Q(me, {
                    key: ue.value,
                    label: ue.label,
                    value: ue.value
                  }, null, 8, ["label", "value"]))),
                  128
                  /* KEYED_FRAGMENT */
                ))
              ]),
              _: 1
              /* STABLE */
            }, 8, ["modelValue"]),
            N("div", {
              size: "small",
              onClick: S,
              class: "swap-button"
            }, [
              H(d(ss), { size: 22 })
            ]),
            H(Ee, {
              modelValue: d(s),
              "onUpdate:modelValue": X[1] || (X[1] = (ue) => Vr(s) ? s.value = ue : null),
              size: "small",
              onChange: I,
              class: "lang-select"
            }, {
              default: te(() => [
                (P(!0), x(
                  Ve,
                  null,
                  qt(d(g), (ue) => (P(), Q(me, {
                    key: ue.value,
                    label: ue.label,
                    value: ue.value
                  }, null, 8, ["label", "value"]))),
                  128
                  /* KEYED_FRAGMENT */
                ))
              ]),
              _: 1
              /* STABLE */
            }, 8, ["modelValue"])
          ]),
          G(" 源文本输入区域 "),
          N("div", H1, [
            H(Te, {
              ref_key: "sourceTextArea",
              ref: u,
              modelValue: d(o),
              "onUpdate:modelValue": X[2] || (X[2] = (ue) => Vr(o) ? o.value = ue : null),
              type: "textarea",
              rows: 2,
              placeholder: U.$t("translate.inputPlaceholder"),
              resize: "none",
              onInput: le,
              class: "source-textarea"
            }, null, 8, ["modelValue", "placeholder"]),
            N("div", K1, [
              N("div", G1, [
                H(ae, {
                  content: U.$t("translate.speakText"),
                  placement: "top",
                  "hide-after": 1e3
                }, {
                  default: te(() => [
                    N("div", {
                      onClick: X[3] || (X[3] = (ue) => q(d(o), d(a))),
                      class: "action-btn"
                    }, [
                      H(d(ls), { size: 18 })
                    ])
                  ]),
                  _: 1
                  /* STABLE */
                }, 8, ["content"]),
                d(i) ? (P(), Q(ae, {
                  key: 0,
                  content: U.$t("translate.deleteText"),
                  placement: "top",
                  "hide-after": 1e3
                }, {
                  default: te(() => [
                    N("div", {
                      onClick: W,
                      class: "action-btn"
                    }, [
                      H(d(Vc), { size: 18 })
                    ])
                  ]),
                  _: 1
                  /* STABLE */
                }, 8, ["content"])) : G("v-if", !0)
              ])
            ])
          ]),
          G(" 多引擎翻译结果区域 "),
          N("div", Y1, [
            (P(!0), x(
              Ve,
              null,
              qt(d(m), (ue) => (P(), x(
                "div",
                {
                  key: ue.engine,
                  class: z(["result-card", { "result-expanded": ue.expanded }])
                },
                [
                  N("div", {
                    class: "result-header",
                    onClick: (He) => fe(ue)
                  }, [
                    N("div", q1, [
                      ue.engine === "google" ? (P(), x("img", {
                        key: 0,
                        src: d(_b),
                        class: "engine-icon",
                        alt: "Google"
                      }, null, 8, X1)) : ue.engine === "bing" ? (P(), x("img", {
                        key: 1,
                        src: d(wb),
                        class: "engine-icon",
                        alt: "Bing"
                      }, null, 8, J1)) : (P(), x("span", Q1, "离")),
                      N(
                        "span",
                        null,
                        J(h(ue.engine)),
                        1
                        /* TEXT */
                      )
                    ]),
                    N("div", ew, [
                      (P(), Q(mt(ue.expanded ? d(Gc) : d(Uc)), {
                        size: 18,
                        class: "expand-icon"
                      }))
                    ])
                  ], 8, Z1),
                  ue.expanded ? (P(), x("div", tw, [
                    ue.loading ? (P(), Q(ze, {
                      key: 0,
                      rows: 3,
                      animated: ""
                    })) : ue.text ? (P(), x(
                      "div",
                      nw,
                      J(ue.text),
                      1
                      /* TEXT */
                    )) : (P(), x(
                      "div",
                      rw,
                      J(U.$t("translate.resultPlaceholder")),
                      1
                      /* TEXT */
                    )),
                    N("div", ow, [
                      H(ae, {
                        content: U.$t("translate.speakText"),
                        placement: "top",
                        "hide-after": 1e3
                      }, {
                        default: te(() => [
                          N("div", {
                            onClick: (He) => q(ue.text, d(s)),
                            class: "action-btn"
                          }, [
                            H(d(ls), { size: 18 })
                          ], 8, aw)
                        ]),
                        _: 2
                        /* DYNAMIC */
                      }, 1032, ["content"]),
                      H(ae, {
                        content: U.$t("translate.copyResult"),
                        placement: "top",
                        "hide-after": 1e3
                      }, {
                        default: te(() => [
                          N("div", {
                            onClick: (He) => B(ue.text),
                            class: "action-btn"
                          }, [
                            H(d(jc), { size: 18 })
                          ], 8, sw)
                        ]),
                        _: 2
                        /* DYNAMIC */
                      }, 1032, ["content"]),
                      H(ae, {
                        content: U.$t("translate.translateBack"),
                        placement: "top",
                        "hide-after": 1e3
                      }, {
                        default: te(() => [
                          N("div", {
                            onClick: (He) => Ie(ue),
                            class: "action-btn rotate-icon"
                          }, [
                            H(d(ss), { size: 18 })
                          ], 8, lw)
                        ]),
                        _: 2
                        /* DYNAMIC */
                      }, 1032, ["content"])
                    ])
                  ])) : G("v-if", !0)
                ],
                2
                /* CLASS */
              ))),
              128
              /* KEYED_FRAGMENT */
            ))
          ])
        ])
      ]);
    };
  }
}), Ja = (e, t) => {
  const n = e.__vccOpts || e;
  for (const [r, o] of t)
    n[r] = o;
  return n;
}, uw = /* @__PURE__ */ Ja(iw, [["__scopeId", "data-v-5861ef19"]]), cw = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: uw
}, Symbol.toStringTag, { value: "Module" })), dw = ["disabled"], fw = {
  key: 0,
  class: "custom-button__loading"
}, pw = /* @__PURE__ */ Y({
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
    return (n, r) => (P(), x("button", {
      class: z([
        "custom-button",
        `custom-button--${t.type || "default"}`,
        t.size ? `custom-button--${t.size}` : "custom-button--medium",
        { "custom-button--loading": t.loading },
        { "custom-button--circle": t.circle },
        { "custom-button--plain": t.plain }
      ]),
      disabled: e.loading || e.disabled,
      onClick: r[0] || (r[0] = (o) => n.$emit("click", o))
    }, [
      e.loading ? (P(), x("div", fw, r[1] || (r[1] = [
        N(
          "svg",
          {
            class: "custom-button__spinner",
            viewBox: "0 0 50 50"
          },
          [
            N("circle", {
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
      ]))) : G("v-if", !0),
      ie(n.$slots, "default", {}, void 0, !0)
    ], 10, dw));
  }
}), jr = /* @__PURE__ */ Ja(pw, [["__scopeId", "data-v-9497085f"]]), mw = { class: "settings-panel" }, vw = { class: "panel-header" }, gw = { class: "panel-title" }, hw = { class: "panel-content" }, yw = { class: "summarize-section" }, bw = { class: "summarize-label" }, _w = { class: "summarize-label-title" }, ww = { class: "summarize-label-desc" }, Ew = { class: "summarize-input-wrapper" }, Tw = { class: "summarize-section" }, Cw = { class: "summarize-label" }, Sw = { class: "summarize-label-title" }, Ow = { class: "summarize-label-desc" }, kw = { class: "summarize-input-wrapper" }, Lw = { class: "flex items-center gap-3" }, Iw = {
  key: 0,
  class: "summarize-section"
}, Pw = { class: "summarize-label" }, Aw = { class: "summarize-label-title" }, Nw = { class: "summarize-label-desc" }, Rw = { class: "summarize-input-wrapper flex-col !items-start" }, $w = { class: "w-full space-y-2" }, Mw = { class: "w-5 text-center" }, Dw = {
  key: 0,
  class: "text-green-500 text-base"
}, Fw = {
  key: 1,
  class: "text-red-500 text-base"
}, xw = {
  key: 2,
  class: "text-yellow-500 text-base"
}, zw = {
  key: 3,
  class: "text-panel-text-secondary text-base"
}, Bw = ["title"], Ww = { class: "w-16 text-right text-xs text-panel-text-secondary" }, jw = { class: "w-24" }, Vw = {
  key: 1,
  class: "text-green-500 text-xs"
}, Uw = {
  key: 2,
  class: "text-red-500 text-xs"
}, Hw = {
  key: 3,
  class: "text-panel-text-secondary text-xs"
}, Kw = {
  key: 1,
  class: "summarize-section !mt-2"
}, Gw = { class: "summarize-label" }, Yw = { class: "summarize-label-title" }, Zw = { class: "summarize-label-desc" }, qw = { class: "summarize-input-wrapper" }, Xw = { class: "model-info-card" }, Jw = { class: "info-row" }, Qw = { class: "info-item" }, e2 = { class: "info-label" }, t2 = { class: "info-item" }, n2 = { class: "info-label" }, r2 = { class: "info-value" }, o2 = { class: "info-item" }, a2 = { class: "info-label" }, s2 = { class: "info-value" }, l2 = { class: "summarize-section !mt-2" }, i2 = { class: "summarize-label" }, u2 = { class: "summarize-label-title" }, c2 = { class: "summarize-label-desc" }, d2 = { class: "summarize-input-wrapper" }, f2 = { class: "usage-tips" }, p2 = { class: "tip-item" }, m2 = { class: "tip-text" }, v2 = { class: "tip-item" }, g2 = { class: "tip-text" }, h2 = { class: "tip-item" }, y2 = { class: "tip-text" }, b2 = { class: "tip-item" }, _2 = { class: "tip-text" }, w2 = "resources/transformers/transformers.min.js", E2 = "translation-offline-runtime", T2 = /* @__PURE__ */ Y({
  name: "Translation",
  __name: "index",
  setup(e) {
    const { t } = Or(), n = ["translation-offline-runtime", "translation"], r = M("bing"), o = M(!1), a = M(!1), s = M({ isCached: !1, cacheType: "none" }), l = M(!1), i = M(!1), u = M(!1), f = M(!1), p = M([]), m = L(() => s.value.isCached), h = L(() => [
      { value: "google", label: t("translation.google") },
      { value: "bing", label: t("translation.bing") },
      { value: "offline", label: t("translation.offline") }
    ]), g = L(() => l.value ? t("translation.modelLoading") : u.value ? o.value ? t("translation.modelReady") : m.value && a.value ? t("translation.modelActivated") : m.value ? t("translation.modelCached") : t("translation.modelNotLoaded") : t("translation.runtimeMissing")), v = L(() => l.value ? "text-yellow-500" : u.value ? o.value || m.value && a.value ? "text-green-500" : m.value ? "text-blue-500" : "text-panel-text-secondary" : "text-red-500"), E = L(() => o.value || m.value), c = () => {
      const I = P1();
      p.value = I.map((V) => ({
        file: V.name,
        progress: 0,
        status: "pending",
        size: V.size
      }));
    }, T = (I, V, ee) => {
      const fe = p.value.find((le) => I.includes(le.file) || le.file.includes(I));
      fe && (fe.progress = V, fe.status = ee);
    }, b = async () => {
      for (const I of n)
        if (await Ju(I, w2))
          return u.value = !0, !0;
      return u.value = !1, !1;
    }, w = async () => {
      f.value = !0;
      try {
        const I = await g1(m1), V = Array.isArray(I.plugins) ? I.plugins : [], ee = V.find((fe) => fe.id === E2);
        if (!ee)
          throw new Error(t("translation.runtimeMarketplaceMissing"));
        if (await S(ee, V), await b() || (ne.info("[翻译设置] 运行时资源包缺少 runtime 文件，开始补全资源"), await Vo()), !await b())
          throw new Error(t("translation.runtimeInstallVerifyFailed"));
        Xe.msg(t("translation.runtimeInstallSuccess"));
      } catch (I) {
        ne.error("[翻译设置] 安装离线翻译运行时失败:", I), Xe.msg(
          I instanceof Error ? I.message : t("translation.runtimeInstallFailed"),
          "error"
        );
      } finally {
        f.value = !1;
      }
    }, O = (I) => Array.isArray(I.dependencies) ? I.dependencies.filter((V) => typeof V == "string" && !!V.trim()) : [], k = (I) => !!(I.packageUrl && I.status !== "included"), S = async (I, V, ee = /* @__PURE__ */ new Set()) => {
      if (!ee.has(I.id)) {
        ee.add(I.id);
        try {
          for (const fe of O(I)) {
            const le = V.find((D) => D.id === fe);
            if (!le)
              throw new Error(t("plugins.dependencyMissing", { id: fe }));
            await S(le, V, ee);
          }
          I.packageUrl && k(I) && (ne.info("[翻译设置] 开始安装离线翻译运行时资源包", {
            pluginId: I.id,
            packageUrl: I.packageUrl
          }), await v1(
            I.packageUrl,
            !0,
            I.packageSubdir,
            I.sizeBytes
          ));
        } finally {
          ee.delete(I.id);
        }
      }
    }, W = async (I) => {
      try {
        await F("set_translation_engine", { engine: I }), Xe.msg(t("translation.engineSaved"));
      } catch (V) {
        ne.info("Failed to save translation engine:", V), Xe.msg(t("translation.engineSaveFailed"), "error");
      }
    }, B = async () => {
      if (ne.info("[翻译设置] 开始下载离线模型..."), !await b()) {
        Xe.msg(t("translation.runtimeMissingInstallFirst"), "error");
        return;
      }
      try {
        await Vo(), await b();
      } catch (I) {
        ne.error("[翻译设置] 修复离线翻译运行时失败:", I), Xe.msg(I instanceof Error && I.message ? I.message : t("translation.runtimeInstallFailed"), "error");
        return;
      }
      l.value = !0, c(), ql((I) => {
        const V = I.file || "";
        I.status === "initiate" ? T(V, 0, "downloading") : I.status === "progress" && I.progress !== void 0 ? T(V, Math.round(I.progress), "downloading") : I.status === "done" && T(V, 100, "done");
      });
      try {
        await pa(), p.value.forEach((I) => {
          I.status !== "done" && (I.status = "done"), I.progress = 100;
        }), o.value = !0, a.value = !0, s.value = await nr(), ne.info("[翻译设置] 模型下载并加载成功，更新后端激活状态为 true"), await F("set_offline_model_activated", { activated: !0 }), Xe.msg(t("translation.modelLoadSuccess"));
      } catch (I) {
        ne.error("[翻译设置] 模型下载失败:", I), p.value.forEach((V) => {
          (V.status === "downloading" || V.status === "pending") && (V.status = "error");
        }), o.value = !1, Xe.msg(I instanceof Error && I.message ? I.message : t("translation.modelLoadFailed"), "error");
      } finally {
        l.value = !1, ql(null), o.value = Wr(), s.value = await nr(), ne.info(`[翻译设置] 最终状态 - 内存加载: ${o.value}, 缓存存在: ${s.value.isCached}`);
      }
    }, q = async () => {
      if (ne.info("[翻译设置] 开始激活离线模型..."), !await b()) {
        Xe.msg(t("translation.runtimeMissingInstallFirst"), "error");
        return;
      }
      try {
        await Vo(), await b();
      } catch (I) {
        ne.error("[翻译设置] 修复离线翻译运行时失败:", I), Xe.msg(I instanceof Error && I.message ? I.message : t("translation.runtimeInstallFailed"), "error");
        return;
      }
      l.value = !0;
      try {
        await pa(), o.value = !0, a.value = !0, ne.info("[翻译设置] 模型激活成功，更新后端激活状态为 true"), await F("set_offline_model_activated", { activated: !0 }), Xe.msg(t("translation.modelLoadSuccess"));
      } catch (I) {
        ne.error("[翻译设置] 模型激活失败:", I), o.value = !1, Xe.msg(I instanceof Error && I.message ? I.message : t("translation.modelLoadFailed"), "error");
      } finally {
        l.value = !1, o.value = Wr(), ne.info(`[翻译设置] 激活后状态 - 内存加载: ${o.value}`);
      }
    }, oe = async () => {
      ne.info("[翻译设置] 开始删除离线模型..."), i.value = !0;
      try {
        await D1(), await F1(), o.value = !1, a.value = !1, s.value = { isCached: !1, cacheType: "none" }, ne.info("[翻译设置] 模型删除成功，更新后端激活状态为 false"), await F("set_offline_model_activated", { activated: !1 }), Xe.msg(t("translation.modelDeleted"));
      } catch (I) {
        ne.error("[翻译设置] 模型删除失败:", I), Xe.msg(t("translation.modelDeleteFailed"), "error");
      } finally {
        i.value = !1, o.value = Wr(), s.value = await nr(), ne.info(`[翻译设置] 删除后状态 - 内存加载: ${o.value}, 缓存存在: ${s.value.isCached}`);
      }
    };
    return Fe(async () => {
      ne.info("[翻译设置] 页面初始化..."), await b();
      try {
        const ee = await F("get_translation_engine");
        ne.info(`[翻译设置] 从后端获取翻译引擎: ${ee}`), ee && ["google", "bing", "offline"].includes(ee) && (r.value = ee);
      } catch (ee) {
        ne.error("[翻译设置] 获取翻译引擎失败:", ee);
      }
      const I = Wr(), V = R1();
      s.value = await nr(), ne.info(`[翻译设置] 前端状态 - 内存加载: ${I}, 正在初始化: ${V}, 缓存存在: ${s.value.isCached}`), o.value = I, l.value = V;
      try {
        const ee = await F("get_offline_model_activated");
        ne.info(`[翻译设置] 后端激活状态: ${ee}`), a.value = ee, ee && !s.value.isCached && (ne.info("[翻译设置] 后端已激活但缓存不存在，重置后端状态"), await F("set_offline_model_activated", { activated: !1 }), a.value = !1), !ee && I && (ne.info("[翻译设置] 内存已加载但后端未标记，同步后端状态为 true"), await F("set_offline_model_activated", { activated: !0 }), a.value = !0);
      } catch (ee) {
        ne.error("[翻译设置] 处理激活状态失败:", ee);
      }
    }), (I, V) => {
      const ee = gu, fe = vu, le = Ry;
      return P(), x("div", mw, [
        G(" 固定标题 "),
        N("div", vw, [
          N(
            "h3",
            gw,
            J(I.$t("translation.title")),
            1
            /* TEXT */
          )
        ]),
        G(" 可滚动内容 "),
        N("main", hw, [
          G(" 默认翻译引擎 "),
          N("section", yw, [
            N("div", bw, [
              N(
                "div",
                _w,
                J(I.$t("translation.defaultEngine")),
                1
                /* TEXT */
              ),
              N(
                "div",
                ww,
                J(I.$t("translation.defaultEngineDesc")),
                1
                /* TEXT */
              )
            ]),
            N("div", Ew, [
              H(fe, {
                class: "summarize-input !w-36",
                modelValue: r.value,
                "onUpdate:modelValue": V[0] || (V[0] = (D) => r.value = D),
                onChange: W
              }, {
                default: te(() => [
                  (P(!0), x(
                    Ve,
                    null,
                    qt(h.value, (D) => (P(), Q(ee, {
                      key: D.value,
                      label: D.label,
                      value: D.value
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
          G(" 离线翻译模型 "),
          N("section", Tw, [
            N("div", Cw, [
              N(
                "div",
                Sw,
                J(I.$t("translation.offlineModel")),
                1
                /* TEXT */
              ),
              N(
                "div",
                Ow,
                J(I.$t("translation.offlineModelDesc")),
                1
                /* TEXT */
              )
            ]),
            N("div", kw, [
              N("div", Lw, [
                N(
                  "span",
                  {
                    class: z(["text-sm font-medium", v.value])
                  },
                  J(g.value),
                  3
                  /* TEXT, CLASS */
                ),
                !u.value && !l.value ? (P(), Q(d(jr), {
                  key: 0,
                  type: "primary",
                  size: "small",
                  loading: f.value,
                  onClick: w
                }, {
                  default: te(() => [
                    wn(
                      J(I.$t("translation.installRuntime")),
                      1
                      /* TEXT */
                    )
                  ]),
                  _: 1
                  /* STABLE */
                }, 8, ["loading"])) : G("v-if", !0),
                u.value && !m.value && !l.value ? (P(), Q(d(jr), {
                  key: 1,
                  type: "primary",
                  size: "small",
                  onClick: B
                }, {
                  default: te(() => [
                    wn(
                      J(I.$t("translation.loadModel")),
                      1
                      /* TEXT */
                    )
                  ]),
                  _: 1
                  /* STABLE */
                })) : G("v-if", !0),
                u.value && m.value && !o.value && !a.value && !l.value ? (P(), Q(d(jr), {
                  key: 2,
                  type: "primary",
                  size: "small",
                  onClick: q
                }, {
                  default: te(() => [
                    wn(
                      J(I.$t("translation.activateModel")),
                      1
                      /* TEXT */
                    )
                  ]),
                  _: 1
                  /* STABLE */
                })) : G("v-if", !0),
                m.value && !l.value ? (P(), Q(d(jr), {
                  key: 3,
                  type: "default",
                  size: "small",
                  onClick: oe,
                  loading: i.value
                }, {
                  default: te(() => [
                    wn(
                      J(I.$t("translation.deleteModel")),
                      1
                      /* TEXT */
                    )
                  ]),
                  _: 1
                  /* STABLE */
                }, 8, ["loading"])) : G("v-if", !0)
              ])
            ])
          ]),
          G(" 多文件下载进度（独立区块） "),
          l.value ? (P(), x("section", Iw, [
            N("div", Pw, [
              N(
                "div",
                Aw,
                J(I.$t("translation.downloadProgress")),
                1
                /* TEXT */
              ),
              N(
                "div",
                Nw,
                J(I.$t("translation.downloadProgressDesc")),
                1
                /* TEXT */
              )
            ]),
            N("div", Rw, [
              N("div", $w, [
                (P(!0), x(
                  Ve,
                  null,
                  qt(p.value, (D) => (P(), x("div", {
                    key: D.file,
                    class: "flex items-center gap-3 py-1"
                  }, [
                    N("span", Mw, [
                      D.status === "done" ? (P(), x("span", Dw, "✓")) : D.status === "error" ? (P(), x("span", Fw, "✗")) : D.status === "downloading" ? (P(), x("span", xw, "↓")) : (P(), x("span", zw, "○"))
                    ]),
                    N("span", {
                      class: "w-64 truncate text-sm text-panel-text-secondary",
                      title: D.file
                    }, J(D.file), 9, Bw),
                    N(
                      "span",
                      Ww,
                      J(D.size),
                      1
                      /* TEXT */
                    ),
                    N("div", jw, [
                      D.status === "downloading" ? (P(), Q(le, {
                        key: 0,
                        percentage: D.progress,
                        "stroke-width": 6,
                        "show-text": !0,
                        "text-inside": !1
                      }, null, 8, ["percentage"])) : D.status === "done" ? (P(), x(
                        "span",
                        Vw,
                        J(I.$t("translation.completed")),
                        1
                        /* TEXT */
                      )) : D.status === "error" ? (P(), x(
                        "span",
                        Uw,
                        J(I.$t("translation.failed")),
                        1
                        /* TEXT */
                      )) : (P(), x(
                        "span",
                        Hw,
                        J(I.$t("translation.waiting")),
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
          ])) : G("v-if", !0),
          G(" 模型信息（仅在已缓存或已加载时显示） "),
          E.value && !l.value ? (P(), x("section", Kw, [
            N("div", Gw, [
              N(
                "div",
                Yw,
                J(I.$t("translation.modelInfo")),
                1
                /* TEXT */
              ),
              N(
                "div",
                Zw,
                J(I.$t("translation.modelInfoDesc")),
                1
                /* TEXT */
              )
            ]),
            N("div", qw, [
              N("div", Xw, [
                N("div", Jw, [
                  N("div", Qw, [
                    N(
                      "span",
                      e2,
                      J(I.$t("translation.modelName")),
                      1
                      /* TEXT */
                    ),
                    V[1] || (V[1] = N(
                      "span",
                      { class: "info-value" },
                      "Xenova/opus-mt-en-zh",
                      -1
                      /* HOISTED */
                    ))
                  ]),
                  N("div", t2, [
                    N(
                      "span",
                      n2,
                      J(I.$t("translation.modelSize")),
                      1
                      /* TEXT */
                    ),
                    N(
                      "span",
                      r2,
                      J(s.value.estimatedSize || "~300MB"),
                      1
                      /* TEXT */
                    )
                  ]),
                  N("div", o2, [
                    N(
                      "span",
                      a2,
                      J(I.$t("translation.supportLang")),
                      1
                      /* TEXT */
                    ),
                    N(
                      "span",
                      s2,
                      J(I.$t("translation.enToZh")),
                      1
                      /* TEXT */
                    )
                  ])
                ])
              ])
            ])
          ])) : G("v-if", !0),
          G(" 使用说明 "),
          N("section", l2, [
            N("div", i2, [
              N(
                "div",
                u2,
                J(I.$t("translation.usage")),
                1
                /* TEXT */
              ),
              N(
                "div",
                c2,
                J(I.$t("translation.usageDesc")),
                1
                /* TEXT */
              )
            ]),
            N("div", d2, [
              N("div", f2, [
                N("div", p2, [
                  V[2] || (V[2] = N(
                    "span",
                    { class: "tip-icon" },
                    "•",
                    -1
                    /* HOISTED */
                  )),
                  N(
                    "span",
                    m2,
                    J(I.$t("translation.usageTip1")),
                    1
                    /* TEXT */
                  )
                ]),
                N("div", v2, [
                  V[3] || (V[3] = N(
                    "span",
                    { class: "tip-icon" },
                    "•",
                    -1
                    /* HOISTED */
                  )),
                  N(
                    "span",
                    g2,
                    J(I.$t("translation.usageTip2")),
                    1
                    /* TEXT */
                  )
                ]),
                N("div", h2, [
                  V[4] || (V[4] = N(
                    "span",
                    { class: "tip-icon" },
                    "•",
                    -1
                    /* HOISTED */
                  )),
                  N(
                    "span",
                    y2,
                    J(I.$t("translation.usageTip3")),
                    1
                    /* TEXT */
                  )
                ]),
                N("div", b2, [
                  V[5] || (V[5] = N(
                    "span",
                    { class: "tip-icon" },
                    "•",
                    -1
                    /* HOISTED */
                  )),
                  N(
                    "span",
                    _2,
                    J(I.$t("translation.usageTip4")),
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
}), C2 = /* @__PURE__ */ Ja(T2, [["__scopeId", "data-v-16383659"]]), S2 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: C2
}, Symbol.toStringTag, { value: "Module" }));
export {
  k2 as activate
};
