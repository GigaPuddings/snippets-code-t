import * as Zr from "vue";
import { inject as ie, createVNode as K, defineAsyncComponent as Ma, getCurrentInstance as Je, ref as P, computed as O, unref as c, shallowRef as En, watchEffect as Fs, readonly as Lr, getCurrentScope as Cd, onScopeDispose as Di, onMounted as Me, nextTick as xe, watch as ae, isRef as Wt, warn as Ed, provide as Qe, defineComponent as Y, createElementBlock as x, openBlock as L, mergeProps as Nt, renderSlot as Q, createElementVNode as $, toRef as it, onUnmounted as Ds, useAttrs as Td, useSlots as Bs, normalizeStyle as Ye, normalizeClass as z, createCommentVNode as j, Fragment as ke, createBlock as ee, withCtx as W, resolveDynamicComponent as pt, withModifiers as Ve, toDisplayString as te, onBeforeUnmount as Tt, Transition as xn, withDirectives as vt, vShow as Yt, reactive as On, onActivated as Od, onUpdated as Bi, cloneVNode as Id, Text as Vs, Comment as kd, Teleport as Ld, onBeforeMount as Ad, onDeactivated as Nd, createTextVNode as lt, h as xs, createSlots as Ar, resolveComponent as Pe, normalizeProps as $d, guardReactiveProps as Pd, withKeys as on, toRaw as Rd, toRefs as zs, resolveDirective as Md, toHandlerKey as Fd, renderList as wn, vModelText as Dd, shallowReactive as Bd, isVNode as To, render as gr } from "vue";
var Vd = {
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
function xd() {
  return "icon-" + ((1 + Math.random()) * 4294967296 | 0).toString(16).substring(1);
}
function zd(e, t, n) {
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
var Hd = Symbol("icon-context");
function uo(e, t, n) {
  var o = {
    name: "icon-" + e,
    props: ["size", "strokeWidth", "strokeLinecap", "strokeLinejoin", "theme", "fill", "spin"],
    setup: function(s) {
      var a = xd(), l = ie(Hd, Vd);
      return function() {
        var i = s.size, u = s.strokeWidth, d = s.strokeLinecap, f = s.strokeLinejoin, g = s.theme, h = s.fill, v = s.spin, m = zd(a, {
          size: i,
          strokeWidth: u,
          strokeLinecap: d,
          strokeLinejoin: f,
          theme: g,
          fill: h
        }, l), y = [l.prefix + "-icon"];
        return y.push(l.prefix + "-icon-" + e), t && l.rtl && y.push(l.prefix + "-icon-rtl"), v && y.push(l.prefix + "-icon-spin"), K("span", {
          class: y.join(" ")
        }, [n(m)]);
      };
    }
  };
  return o;
}
const Wd = uo("attention", !0, function(e) {
  return K("svg", {
    width: e.size,
    height: e.size,
    viewBox: "0 0 48 48",
    fill: "none"
  }, [K("path", {
    d: "M24 44C29.5228 44 34.5228 41.7614 38.1421 38.1421C41.7614 34.5228 44 29.5228 44 24C44 18.4772 41.7614 13.4772 38.1421 9.85786C34.5228 6.23858 29.5228 4 24 4C18.4772 4 13.4772 6.23858 9.85786 9.85786C6.23858 13.4772 4 18.4772 4 24C4 29.5228 6.23858 34.5228 9.85786 38.1421C13.4772 41.7614 18.4772 44 24 44Z",
    fill: e.colors[1],
    stroke: e.colors[0],
    "stroke-width": e.strokeWidth,
    "stroke-linejoin": e.strokeLinejoin
  }, null), K("path", {
    "fill-rule": "evenodd",
    "clip-rule": "evenodd",
    d: "M24 37C25.3807 37 26.5 35.8807 26.5 34.5C26.5 33.1193 25.3807 32 24 32C22.6193 32 21.5 33.1193 21.5 34.5C21.5 35.8807 22.6193 37 24 37Z",
    fill: e.colors[2]
  }, null), K("path", {
    d: "M24 12V28",
    stroke: e.colors[2],
    "stroke-width": e.strokeWidth,
    "stroke-linecap": e.strokeLinecap,
    "stroke-linejoin": e.strokeLinejoin
  }, null)]);
}), Fa = uo("branch", !0, function(e) {
  return K("svg", {
    width: e.size,
    height: e.size,
    viewBox: "0 0 48 48",
    fill: "none"
  }, [K("path", {
    d: "M40 28C42.2091 28 44 26.2091 44 24C44 21.7909 42.2091 20 40 20C37.7909 20 36 21.7909 36 24C36 26.2091 37.7909 28 40 28Z",
    fill: e.colors[1],
    stroke: e.colors[0],
    "stroke-width": e.strokeWidth,
    "stroke-linejoin": e.strokeLinejoin
  }, null), K("path", {
    d: "M9 12C11.2091 12 13 10.2091 13 8C13 5.79086 11.2091 4 9 4C6.79086 4 5 5.79086 5 8C5 10.2091 6.79086 12 9 12Z",
    fill: e.colors[1],
    stroke: e.colors[0],
    "stroke-width": e.strokeWidth,
    "stroke-linejoin": e.strokeLinejoin
  }, null), K("path", {
    d: "M9 44C11.2091 44 13 42.2091 13 40C13 37.7909 11.2091 36 9 36C6.79086 36 5 37.7909 5 40C5 42.2091 6.79086 44 9 44Z",
    fill: e.colors[1],
    stroke: e.colors[0],
    "stroke-width": e.strokeWidth,
    "stroke-linejoin": e.strokeLinejoin
  }, null), K("path", {
    d: "M9 12V36V24.0083H36",
    stroke: e.colors[0],
    "stroke-width": e.strokeWidth,
    "stroke-linecap": e.strokeLinecap,
    "stroke-linejoin": e.strokeLinejoin
  }, null)]);
}), Ud = uo("check-one", !0, function(e) {
  return K("svg", {
    width: e.size,
    height: e.size,
    viewBox: "0 0 48 48",
    fill: "none"
  }, [K("path", {
    d: "M24 44C29.5228 44 34.5228 41.7614 38.1421 38.1421C41.7614 34.5228 44 29.5228 44 24C44 18.4772 41.7614 13.4772 38.1421 9.85786C34.5228 6.23858 29.5228 4 24 4C18.4772 4 13.4772 6.23858 9.85786 9.85786C6.23858 13.4772 4 18.4772 4 24C4 29.5228 6.23858 34.5228 9.85786 38.1421C13.4772 41.7614 18.4772 44 24 44Z",
    fill: e.colors[1],
    stroke: e.colors[0],
    "stroke-width": e.strokeWidth,
    "stroke-linejoin": e.strokeLinejoin
  }, null), K("path", {
    d: "M16 24L22 30L34 18",
    stroke: e.colors[2],
    "stroke-width": e.strokeWidth,
    "stroke-linecap": e.strokeLinecap,
    "stroke-linejoin": e.strokeLinejoin
  }, null)]);
}), jd = uo("close-small", !1, function(e) {
  return K("svg", {
    width: e.size,
    height: e.size,
    viewBox: "0 0 48 48",
    fill: "none"
  }, [K("path", {
    d: "M14 14L34 34",
    stroke: e.colors[0],
    "stroke-width": e.strokeWidth,
    "stroke-linecap": e.strokeLinecap,
    "stroke-linejoin": e.strokeLinejoin
  }, null), K("path", {
    d: "M14 34L34 14",
    stroke: e.colors[0],
    "stroke-width": e.strokeWidth,
    "stroke-linecap": e.strokeLinecap,
    "stroke-linejoin": e.strokeLinejoin
  }, null)]);
}), Gd = uo("github", !0, function(e) {
  return K("svg", {
    width: e.size,
    height: e.size,
    viewBox: "0 0 48 48",
    fill: "none"
  }, [K("path", {
    "fill-rule": "evenodd",
    "clip-rule": "evenodd",
    d: "M24 4C12.9543 4 4 12.9543 4 24C4 35.0457 12.9543 44 24 44C35.0457 44 44 35.0457 44 24C44 12.9543 35.0457 4 24 4ZM0 24C0 10.7452 10.7452 0 24 0C37.2548 0 48 10.7452 48 24C48 37.2548 37.2548 48 24 48C10.7452 48 0 37.2548 0 24Z",
    fill: e.colors[0]
  }, null), K("path", {
    "fill-rule": "evenodd",
    "clip-rule": "evenodd",
    d: "M19.1833 45.4716C18.9898 45.2219 18.9898 42.9973 19.1833 38.798C17.1114 38.8696 15.8024 38.7258 15.2563 38.3667C14.437 37.828 13.6169 36.1667 12.8891 34.9959C12.1614 33.8251 10.5463 33.64 9.89405 33.3783C9.24182 33.1165 9.07809 32.0496 11.6913 32.8565C14.3044 33.6634 14.4319 35.8607 15.2563 36.3745C16.0806 36.8883 18.0515 36.6635 18.9448 36.2519C19.8382 35.8403 19.7724 34.3078 19.9317 33.7007C20.1331 33.134 19.4233 33.0083 19.4077 33.0037C18.5355 33.0037 13.9539 32.0073 12.6955 27.5706C11.437 23.134 13.0581 20.2341 13.9229 18.9875C14.4995 18.1564 14.4485 16.3852 13.7699 13.6737C16.2335 13.3589 18.1347 14.1343 19.4734 16.0001C19.4747 16.0108 21.2285 14.9572 24.0003 14.9572C26.772 14.9572 27.7553 15.8154 28.5142 16.0001C29.2731 16.1848 29.88 12.7341 34.5668 13.6737C33.5883 15.5969 32.7689 18.0001 33.3943 18.9875C34.0198 19.9749 36.4745 23.1147 34.9666 27.5706C33.9614 30.5413 31.9853 32.3523 29.0384 33.0037C28.7005 33.1115 28.5315 33.2855 28.5315 33.5255C28.5315 33.8856 28.9884 33.9249 29.6465 35.6117C30.0853 36.7362 30.117 39.948 29.7416 45.247C28.7906 45.4891 28.0508 45.6516 27.5221 45.7347C26.5847 45.882 25.5669 45.9646 24.5669 45.9965C23.5669 46.0284 23.2196 46.0248 21.837 45.8961C20.9154 45.8103 20.0308 45.6688 19.1833 45.4716Z",
    fill: e.colors[0]
  }, null)]);
}), Vi = uo("loading", !0, function(e) {
  return K("svg", {
    width: e.size,
    height: e.size,
    viewBox: "0 0 48 48",
    fill: "none"
  }, [K("path", {
    d: "M4 24C4 35.0457 12.9543 44 24 44V44C35.0457 44 44 35.0457 44 24C44 12.9543 35.0457 4 24 4",
    stroke: e.colors[0],
    "stroke-width": e.strokeWidth,
    "stroke-linecap": e.strokeLinecap,
    "stroke-linejoin": e.strokeLinejoin
  }, null), K("path", {
    d: "M36 24C36 17.3726 30.6274 12 24 12C17.3726 12 12 17.3726 12 24C12 30.6274 17.3726 36 24 36V36",
    stroke: e.colors[0],
    "stroke-width": e.strokeWidth,
    "stroke-linecap": e.strokeLinecap,
    "stroke-linejoin": e.strokeLinejoin
  }, null)]);
}), bC = (e) => {
  e.registerSettingsTab({
    id: "gitSync",
    labelKey: "settings.gitSync.menu",
    icon: Gd,
    component: Ma(() => Promise.resolve().then(() => lC))
  }), e.registerTitlebarAction({
    id: "git-sync-status",
    component: Ma(() => Promise.resolve().then(() => hC))
  });
}, xi = Symbol(), bo = "el", Kd = "is-", Pn = (e, t, n, o, r) => {
  let s = `${e}-${t}`;
  return n && (s += `-${n}`), o && (s += `__${o}`), r && (s += `--${r}`), s;
}, zi = Symbol("namespaceContextKey"), Hs = (e) => {
  const t = e || (Je() ? ie(zi, P(bo)) : P(bo));
  return O(() => c(t) || bo);
}, Ee = (e, t) => {
  const n = Hs(t);
  return {
    namespace: n,
    b: (m = "") => Pn(n.value, e, m, "", ""),
    e: (m) => m ? Pn(n.value, e, "", m, "") : "",
    m: (m) => m ? Pn(n.value, e, "", "", m) : "",
    be: (m, y) => m && y ? Pn(n.value, e, m, y, "") : "",
    em: (m, y) => m && y ? Pn(n.value, e, "", m, y) : "",
    bm: (m, y) => m && y ? Pn(n.value, e, m, "", y) : "",
    bem: (m, y, p) => m && y && p ? Pn(n.value, e, m, y, p) : "",
    is: (m, ...y) => {
      const p = y.length >= 1 ? y[0] : !0;
      return m && p ? `${Kd}${m}` : "";
    },
    cssVar: (m) => {
      const y = {};
      for (const p in m)
        m[p] && (y[`--${n.value}-${p}`] = m[p]);
      return y;
    },
    cssVarName: (m) => `--${n.value}-${m}`,
    cssVarBlock: (m) => {
      const y = {};
      for (const p in m)
        m[p] && (y[`--${n.value}-${e}-${p}`] = m[p]);
      return y;
    },
    cssVarBlockName: (m) => `--${n.value}-${e}-${m}`
  };
};
/**
* @vue/shared v3.5.13
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/
const Tn = () => {
}, Yd = Object.prototype.hasOwnProperty, Da = (e, t) => Yd.call(e, t), Ut = Array.isArray, We = (e) => typeof e == "function", Ct = (e) => typeof e == "string", kt = (e) => e !== null && typeof e == "object", qd = Object.prototype.toString, Xd = (e) => qd.call(e), Zd = (e) => Xd(e) === "[object Object]", Jd = (e) => {
  const t = /* @__PURE__ */ Object.create(null);
  return (n) => t[n] || (t[n] = e(n));
}, Qd = /-(\w)/g, ef = Jd(
  (e) => e.replace(Qd, (t, n) => n ? n.toUpperCase() : "")
);
var Hi = typeof global == "object" && global && global.Object === Object && global, tf = typeof self == "object" && self && self.Object === Object && self, Jt = Hi || tf || Function("return this")(), qt = Jt.Symbol, Wi = Object.prototype, nf = Wi.hasOwnProperty, of = Wi.toString, mo = qt ? qt.toStringTag : void 0;
function rf(e) {
  var t = nf.call(e, mo), n = e[mo];
  try {
    e[mo] = void 0;
    var o = !0;
  } catch {
  }
  var r = of.call(e);
  return o && (t ? e[mo] = n : delete e[mo]), r;
}
var sf = Object.prototype, af = sf.toString;
function lf(e) {
  return af.call(e);
}
var uf = "[object Null]", cf = "[object Undefined]", Ba = qt ? qt.toStringTag : void 0;
function co(e) {
  return e == null ? e === void 0 ? cf : uf : Ba && Ba in Object(e) ? rf(e) : lf(e);
}
function Qn(e) {
  return e != null && typeof e == "object";
}
var df = "[object Symbol]";
function Nr(e) {
  return typeof e == "symbol" || Qn(e) && co(e) == df;
}
function ff(e, t) {
  for (var n = -1, o = e == null ? 0 : e.length, r = Array(o); ++n < o; )
    r[n] = t(e[n], n, e);
  return r;
}
var Vt = Array.isArray, Va = qt ? qt.prototype : void 0, xa = Va ? Va.toString : void 0;
function Ui(e) {
  if (typeof e == "string")
    return e;
  if (Vt(e))
    return ff(e, Ui) + "";
  if (Nr(e))
    return xa ? xa.call(e) : "";
  var t = e + "";
  return t == "0" && 1 / e == -1 / 0 ? "-0" : t;
}
var pf = /\s/;
function vf(e) {
  for (var t = e.length; t-- && pf.test(e.charAt(t)); )
    ;
  return t;
}
var mf = /^\s+/;
function gf(e) {
  return e && e.slice(0, vf(e) + 1).replace(mf, "");
}
function In(e) {
  var t = typeof e;
  return e != null && (t == "object" || t == "function");
}
var za = NaN, hf = /^[-+]0x[0-9a-f]+$/i, yf = /^0b[01]+$/i, bf = /^0o[0-7]+$/i, _f = parseInt;
function Ha(e) {
  if (typeof e == "number")
    return e;
  if (Nr(e))
    return za;
  if (In(e)) {
    var t = typeof e.valueOf == "function" ? e.valueOf() : e;
    e = In(t) ? t + "" : t;
  }
  if (typeof e != "string")
    return e === 0 ? e : +e;
  e = gf(e);
  var n = yf.test(e);
  return n || bf.test(e) ? _f(e.slice(2), n ? 2 : 8) : hf.test(e) ? za : +e;
}
function ji(e) {
  return e;
}
var wf = "[object AsyncFunction]", Sf = "[object Function]", Cf = "[object GeneratorFunction]", Ef = "[object Proxy]";
function Gi(e) {
  if (!In(e))
    return !1;
  var t = co(e);
  return t == Sf || t == Cf || t == wf || t == Ef;
}
var Jr = Jt["__core-js_shared__"], Wa = function() {
  var e = /[^.]+$/.exec(Jr && Jr.keys && Jr.keys.IE_PROTO || "");
  return e ? "Symbol(src)_1." + e : "";
}();
function Tf(e) {
  return !!Wa && Wa in e;
}
var Of = Function.prototype, If = Of.toString;
function zn(e) {
  if (e != null) {
    try {
      return If.call(e);
    } catch {
    }
    try {
      return e + "";
    } catch {
    }
  }
  return "";
}
var kf = /[\\^$.*+?()[\]{}|]/g, Lf = /^\[object .+?Constructor\]$/, Af = Function.prototype, Nf = Object.prototype, $f = Af.toString, Pf = Nf.hasOwnProperty, Rf = RegExp(
  "^" + $f.call(Pf).replace(kf, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$"
);
function Mf(e) {
  if (!In(e) || Tf(e))
    return !1;
  var t = Gi(e) ? Rf : Lf;
  return t.test(zn(e));
}
function Ff(e, t) {
  return e?.[t];
}
function Hn(e, t) {
  var n = Ff(e, t);
  return Mf(n) ? n : void 0;
}
var vs = Hn(Jt, "WeakMap");
function Df(e, t, n) {
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
var Bf = 800, Vf = 16, xf = Date.now;
function zf(e) {
  var t = 0, n = 0;
  return function() {
    var o = xf(), r = Vf - (o - n);
    if (n = o, r > 0) {
      if (++t >= Bf)
        return arguments[0];
    } else
      t = 0;
    return e.apply(void 0, arguments);
  };
}
function Hf(e) {
  return function() {
    return e;
  };
}
var hr = function() {
  try {
    var e = Hn(Object, "defineProperty");
    return e({}, "", {}), e;
  } catch {
  }
}(), Wf = hr ? function(e, t) {
  return hr(e, "toString", {
    configurable: !0,
    enumerable: !1,
    value: Hf(t),
    writable: !0
  });
} : ji, Uf = zf(Wf);
function jf(e, t, n, o) {
  e.length;
  for (var r = n + 1; r--; )
    if (t(e[r], r, e))
      return r;
  return -1;
}
var Gf = 9007199254740991, Kf = /^(?:0|[1-9]\d*)$/;
function Ws(e, t) {
  var n = typeof e;
  return t = t ?? Gf, !!t && (n == "number" || n != "symbol" && Kf.test(e)) && e > -1 && e % 1 == 0 && e < t;
}
function Yf(e, t, n) {
  t == "__proto__" && hr ? hr(e, t, {
    configurable: !0,
    enumerable: !0,
    value: n,
    writable: !0
  }) : e[t] = n;
}
function Us(e, t) {
  return e === t || e !== e && t !== t;
}
var qf = Object.prototype, Xf = qf.hasOwnProperty;
function Zf(e, t, n) {
  var o = e[t];
  (!(Xf.call(e, t) && Us(o, n)) || n === void 0 && !(t in e)) && Yf(e, t, n);
}
var Ua = Math.max;
function Jf(e, t, n) {
  return t = Ua(t === void 0 ? e.length - 1 : t, 0), function() {
    for (var o = arguments, r = -1, s = Ua(o.length - t, 0), a = Array(s); ++r < s; )
      a[r] = o[t + r];
    r = -1;
    for (var l = Array(t + 1); ++r < t; )
      l[r] = o[r];
    return l[t] = n(a), Df(e, this, l);
  };
}
var Qf = 9007199254740991;
function js(e) {
  return typeof e == "number" && e > -1 && e % 1 == 0 && e <= Qf;
}
function ep(e) {
  return e != null && js(e.length) && !Gi(e);
}
var tp = Object.prototype;
function np(e) {
  var t = e && e.constructor, n = typeof t == "function" && t.prototype || tp;
  return e === n;
}
function op(e, t) {
  for (var n = -1, o = Array(e); ++n < e; )
    o[n] = t(n);
  return o;
}
var rp = "[object Arguments]";
function ja(e) {
  return Qn(e) && co(e) == rp;
}
var Ki = Object.prototype, sp = Ki.hasOwnProperty, ap = Ki.propertyIsEnumerable, Gs = ja(/* @__PURE__ */ function() {
  return arguments;
}()) ? ja : function(e) {
  return Qn(e) && sp.call(e, "callee") && !ap.call(e, "callee");
};
function lp() {
  return !1;
}
var Yi = typeof exports == "object" && exports && !exports.nodeType && exports, Ga = Yi && typeof module == "object" && module && !module.nodeType && module, ip = Ga && Ga.exports === Yi, Ka = ip ? Jt.Buffer : void 0, up = Ka ? Ka.isBuffer : void 0, ms = up || lp, cp = "[object Arguments]", dp = "[object Array]", fp = "[object Boolean]", pp = "[object Date]", vp = "[object Error]", mp = "[object Function]", gp = "[object Map]", hp = "[object Number]", yp = "[object Object]", bp = "[object RegExp]", _p = "[object Set]", wp = "[object String]", Sp = "[object WeakMap]", Cp = "[object ArrayBuffer]", Ep = "[object DataView]", Tp = "[object Float32Array]", Op = "[object Float64Array]", Ip = "[object Int8Array]", kp = "[object Int16Array]", Lp = "[object Int32Array]", Ap = "[object Uint8Array]", Np = "[object Uint8ClampedArray]", $p = "[object Uint16Array]", Pp = "[object Uint32Array]", Ie = {};
Ie[Tp] = Ie[Op] = Ie[Ip] = Ie[kp] = Ie[Lp] = Ie[Ap] = Ie[Np] = Ie[$p] = Ie[Pp] = !0;
Ie[cp] = Ie[dp] = Ie[Cp] = Ie[fp] = Ie[Ep] = Ie[pp] = Ie[vp] = Ie[mp] = Ie[gp] = Ie[hp] = Ie[yp] = Ie[bp] = Ie[_p] = Ie[wp] = Ie[Sp] = !1;
function Rp(e) {
  return Qn(e) && js(e.length) && !!Ie[co(e)];
}
function Mp(e) {
  return function(t) {
    return e(t);
  };
}
var qi = typeof exports == "object" && exports && !exports.nodeType && exports, _o = qi && typeof module == "object" && module && !module.nodeType && module, Fp = _o && _o.exports === qi, Qr = Fp && Hi.process, Ya = function() {
  try {
    var e = _o && _o.require && _o.require("util").types;
    return e || Qr && Qr.binding && Qr.binding("util");
  } catch {
  }
}(), qa = Ya && Ya.isTypedArray, Xi = qa ? Mp(qa) : Rp, Dp = Object.prototype, Bp = Dp.hasOwnProperty;
function Vp(e, t) {
  var n = Vt(e), o = !n && Gs(e), r = !n && !o && ms(e), s = !n && !o && !r && Xi(e), a = n || o || r || s, l = a ? op(e.length, String) : [], i = l.length;
  for (var u in e)
    Bp.call(e, u) && !(a && // Safari 9 has enumerable `arguments.length` in strict mode.
    (u == "length" || // Node.js 0.10 has enumerable non-index properties on buffers.
    r && (u == "offset" || u == "parent") || // PhantomJS 2 has enumerable non-index properties on typed arrays.
    s && (u == "buffer" || u == "byteLength" || u == "byteOffset") || // Skip index properties.
    Ws(u, i))) && l.push(u);
  return l;
}
function xp(e, t) {
  return function(n) {
    return e(t(n));
  };
}
var zp = xp(Object.keys, Object), Hp = Object.prototype, Wp = Hp.hasOwnProperty;
function Up(e) {
  if (!np(e))
    return zp(e);
  var t = [];
  for (var n in Object(e))
    Wp.call(e, n) && n != "constructor" && t.push(n);
  return t;
}
function Zi(e) {
  return ep(e) ? Vp(e) : Up(e);
}
var jp = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/, Gp = /^\w*$/;
function Ks(e, t) {
  if (Vt(e))
    return !1;
  var n = typeof e;
  return n == "number" || n == "symbol" || n == "boolean" || e == null || Nr(e) ? !0 : Gp.test(e) || !jp.test(e) || t != null && e in Object(t);
}
var Oo = Hn(Object, "create");
function Kp() {
  this.__data__ = Oo ? Oo(null) : {}, this.size = 0;
}
function Yp(e) {
  var t = this.has(e) && delete this.__data__[e];
  return this.size -= t ? 1 : 0, t;
}
var qp = "__lodash_hash_undefined__", Xp = Object.prototype, Zp = Xp.hasOwnProperty;
function Jp(e) {
  var t = this.__data__;
  if (Oo) {
    var n = t[e];
    return n === qp ? void 0 : n;
  }
  return Zp.call(t, e) ? t[e] : void 0;
}
var Qp = Object.prototype, ev = Qp.hasOwnProperty;
function tv(e) {
  var t = this.__data__;
  return Oo ? t[e] !== void 0 : ev.call(t, e);
}
var nv = "__lodash_hash_undefined__";
function ov(e, t) {
  var n = this.__data__;
  return this.size += this.has(e) ? 0 : 1, n[e] = Oo && t === void 0 ? nv : t, this;
}
function Bn(e) {
  var t = -1, n = e == null ? 0 : e.length;
  for (this.clear(); ++t < n; ) {
    var o = e[t];
    this.set(o[0], o[1]);
  }
}
Bn.prototype.clear = Kp;
Bn.prototype.delete = Yp;
Bn.prototype.get = Jp;
Bn.prototype.has = tv;
Bn.prototype.set = ov;
function rv() {
  this.__data__ = [], this.size = 0;
}
function $r(e, t) {
  for (var n = e.length; n--; )
    if (Us(e[n][0], t))
      return n;
  return -1;
}
var sv = Array.prototype, av = sv.splice;
function lv(e) {
  var t = this.__data__, n = $r(t, e);
  if (n < 0)
    return !1;
  var o = t.length - 1;
  return n == o ? t.pop() : av.call(t, n, 1), --this.size, !0;
}
function iv(e) {
  var t = this.__data__, n = $r(t, e);
  return n < 0 ? void 0 : t[n][1];
}
function uv(e) {
  return $r(this.__data__, e) > -1;
}
function cv(e, t) {
  var n = this.__data__, o = $r(n, e);
  return o < 0 ? (++this.size, n.push([e, t])) : n[o][1] = t, this;
}
function mn(e) {
  var t = -1, n = e == null ? 0 : e.length;
  for (this.clear(); ++t < n; ) {
    var o = e[t];
    this.set(o[0], o[1]);
  }
}
mn.prototype.clear = rv;
mn.prototype.delete = lv;
mn.prototype.get = iv;
mn.prototype.has = uv;
mn.prototype.set = cv;
var Io = Hn(Jt, "Map");
function dv() {
  this.size = 0, this.__data__ = {
    hash: new Bn(),
    map: new (Io || mn)(),
    string: new Bn()
  };
}
function fv(e) {
  var t = typeof e;
  return t == "string" || t == "number" || t == "symbol" || t == "boolean" ? e !== "__proto__" : e === null;
}
function Pr(e, t) {
  var n = e.__data__;
  return fv(t) ? n[typeof t == "string" ? "string" : "hash"] : n.map;
}
function pv(e) {
  var t = Pr(this, e).delete(e);
  return this.size -= t ? 1 : 0, t;
}
function vv(e) {
  return Pr(this, e).get(e);
}
function mv(e) {
  return Pr(this, e).has(e);
}
function gv(e, t) {
  var n = Pr(this, e), o = n.size;
  return n.set(e, t), this.size += n.size == o ? 0 : 1, this;
}
function gn(e) {
  var t = -1, n = e == null ? 0 : e.length;
  for (this.clear(); ++t < n; ) {
    var o = e[t];
    this.set(o[0], o[1]);
  }
}
gn.prototype.clear = dv;
gn.prototype.delete = pv;
gn.prototype.get = vv;
gn.prototype.has = mv;
gn.prototype.set = gv;
var hv = "Expected a function";
function Ys(e, t) {
  if (typeof e != "function" || t != null && typeof t != "function")
    throw new TypeError(hv);
  var n = function() {
    var o = arguments, r = t ? t.apply(this, o) : o[0], s = n.cache;
    if (s.has(r))
      return s.get(r);
    var a = e.apply(this, o);
    return n.cache = s.set(r, a) || s, a;
  };
  return n.cache = new (Ys.Cache || gn)(), n;
}
Ys.Cache = gn;
var yv = 500;
function bv(e) {
  var t = Ys(e, function(o) {
    return n.size === yv && n.clear(), o;
  }), n = t.cache;
  return t;
}
var _v = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g, wv = /\\(\\)?/g, Sv = bv(function(e) {
  var t = [];
  return e.charCodeAt(0) === 46 && t.push(""), e.replace(_v, function(n, o, r, s) {
    t.push(r ? s.replace(wv, "$1") : o || n);
  }), t;
});
function Cv(e) {
  return e == null ? "" : Ui(e);
}
function Rr(e, t) {
  return Vt(e) ? e : Ks(e, t) ? [e] : Sv(Cv(e));
}
function Mo(e) {
  if (typeof e == "string" || Nr(e))
    return e;
  var t = e + "";
  return t == "0" && 1 / e == -1 / 0 ? "-0" : t;
}
function qs(e, t) {
  t = Rr(t, e);
  for (var n = 0, o = t.length; e != null && n < o; )
    e = e[Mo(t[n++])];
  return n && n == o ? e : void 0;
}
function Sn(e, t, n) {
  var o = e == null ? void 0 : qs(e, t);
  return o === void 0 ? n : o;
}
function Ji(e, t) {
  for (var n = -1, o = t.length, r = e.length; ++n < o; )
    e[r + n] = t[n];
  return e;
}
var Xa = qt ? qt.isConcatSpreadable : void 0;
function Ev(e) {
  return Vt(e) || Gs(e) || !!(Xa && e && e[Xa]);
}
function Tv(e, t, n, o, r) {
  var s = -1, a = e.length;
  for (n || (n = Ev), r || (r = []); ++s < a; ) {
    var l = e[s];
    n(l) ? Ji(r, l) : r[r.length] = l;
  }
  return r;
}
function Ov(e) {
  var t = e == null ? 0 : e.length;
  return t ? Tv(e) : [];
}
function Iv(e) {
  return Uf(Jf(e, void 0, Ov), e + "");
}
function rn() {
  if (!arguments.length)
    return [];
  var e = arguments[0];
  return Vt(e) ? e : [e];
}
function kv() {
  this.__data__ = new mn(), this.size = 0;
}
function Lv(e) {
  var t = this.__data__, n = t.delete(e);
  return this.size = t.size, n;
}
function Av(e) {
  return this.__data__.get(e);
}
function Nv(e) {
  return this.__data__.has(e);
}
var $v = 200;
function Pv(e, t) {
  var n = this.__data__;
  if (n instanceof mn) {
    var o = n.__data__;
    if (!Io || o.length < $v - 1)
      return o.push([e, t]), this.size = ++n.size, this;
    n = this.__data__ = new gn(o);
  }
  return n.set(e, t), this.size = n.size, this;
}
function un(e) {
  var t = this.__data__ = new mn(e);
  this.size = t.size;
}
un.prototype.clear = kv;
un.prototype.delete = Lv;
un.prototype.get = Av;
un.prototype.has = Nv;
un.prototype.set = Pv;
function Rv(e, t) {
  for (var n = -1, o = e == null ? 0 : e.length, r = 0, s = []; ++n < o; ) {
    var a = e[n];
    t(a, n, e) && (s[r++] = a);
  }
  return s;
}
function Mv() {
  return [];
}
var Fv = Object.prototype, Dv = Fv.propertyIsEnumerable, Za = Object.getOwnPropertySymbols, Bv = Za ? function(e) {
  return e == null ? [] : (e = Object(e), Rv(Za(e), function(t) {
    return Dv.call(e, t);
  }));
} : Mv;
function Vv(e, t, n) {
  var o = t(e);
  return Vt(e) ? o : Ji(o, n(e));
}
function Ja(e) {
  return Vv(e, Zi, Bv);
}
var gs = Hn(Jt, "DataView"), hs = Hn(Jt, "Promise"), ys = Hn(Jt, "Set"), Qa = "[object Map]", xv = "[object Object]", el = "[object Promise]", tl = "[object Set]", nl = "[object WeakMap]", ol = "[object DataView]", zv = zn(gs), Hv = zn(Io), Wv = zn(hs), Uv = zn(ys), jv = zn(vs), _n = co;
(gs && _n(new gs(new ArrayBuffer(1))) != ol || Io && _n(new Io()) != Qa || hs && _n(hs.resolve()) != el || ys && _n(new ys()) != tl || vs && _n(new vs()) != nl) && (_n = function(e) {
  var t = co(e), n = t == xv ? e.constructor : void 0, o = n ? zn(n) : "";
  if (o)
    switch (o) {
      case zv:
        return ol;
      case Hv:
        return Qa;
      case Wv:
        return el;
      case Uv:
        return tl;
      case jv:
        return nl;
    }
  return t;
});
var rl = Jt.Uint8Array, Gv = "__lodash_hash_undefined__";
function Kv(e) {
  return this.__data__.set(e, Gv), this;
}
function Yv(e) {
  return this.__data__.has(e);
}
function yr(e) {
  var t = -1, n = e == null ? 0 : e.length;
  for (this.__data__ = new gn(); ++t < n; )
    this.add(e[t]);
}
yr.prototype.add = yr.prototype.push = Kv;
yr.prototype.has = Yv;
function qv(e, t) {
  for (var n = -1, o = e == null ? 0 : e.length; ++n < o; )
    if (t(e[n], n, e))
      return !0;
  return !1;
}
function Xv(e, t) {
  return e.has(t);
}
var Zv = 1, Jv = 2;
function Qi(e, t, n, o, r, s) {
  var a = n & Zv, l = e.length, i = t.length;
  if (l != i && !(a && i > l))
    return !1;
  var u = s.get(e), d = s.get(t);
  if (u && d)
    return u == t && d == e;
  var f = -1, g = !0, h = n & Jv ? new yr() : void 0;
  for (s.set(e, t), s.set(t, e); ++f < l; ) {
    var v = e[f], m = t[f];
    if (o)
      var y = a ? o(m, v, f, t, e, s) : o(v, m, f, e, t, s);
    if (y !== void 0) {
      if (y)
        continue;
      g = !1;
      break;
    }
    if (h) {
      if (!qv(t, function(p, _) {
        if (!Xv(h, _) && (v === p || r(v, p, n, o, s)))
          return h.push(_);
      })) {
        g = !1;
        break;
      }
    } else if (!(v === m || r(v, m, n, o, s))) {
      g = !1;
      break;
    }
  }
  return s.delete(e), s.delete(t), g;
}
function Qv(e) {
  var t = -1, n = Array(e.size);
  return e.forEach(function(o, r) {
    n[++t] = [r, o];
  }), n;
}
function em(e) {
  var t = -1, n = Array(e.size);
  return e.forEach(function(o) {
    n[++t] = o;
  }), n;
}
var tm = 1, nm = 2, om = "[object Boolean]", rm = "[object Date]", sm = "[object Error]", am = "[object Map]", lm = "[object Number]", im = "[object RegExp]", um = "[object Set]", cm = "[object String]", dm = "[object Symbol]", fm = "[object ArrayBuffer]", pm = "[object DataView]", sl = qt ? qt.prototype : void 0, es = sl ? sl.valueOf : void 0;
function vm(e, t, n, o, r, s, a) {
  switch (n) {
    case pm:
      if (e.byteLength != t.byteLength || e.byteOffset != t.byteOffset)
        return !1;
      e = e.buffer, t = t.buffer;
    case fm:
      return !(e.byteLength != t.byteLength || !s(new rl(e), new rl(t)));
    case om:
    case rm:
    case lm:
      return Us(+e, +t);
    case sm:
      return e.name == t.name && e.message == t.message;
    case im:
    case cm:
      return e == t + "";
    case am:
      var l = Qv;
    case um:
      var i = o & tm;
      if (l || (l = em), e.size != t.size && !i)
        return !1;
      var u = a.get(e);
      if (u)
        return u == t;
      o |= nm, a.set(e, t);
      var d = Qi(l(e), l(t), o, r, s, a);
      return a.delete(e), d;
    case dm:
      if (es)
        return es.call(e) == es.call(t);
  }
  return !1;
}
var mm = 1, gm = Object.prototype, hm = gm.hasOwnProperty;
function ym(e, t, n, o, r, s) {
  var a = n & mm, l = Ja(e), i = l.length, u = Ja(t), d = u.length;
  if (i != d && !a)
    return !1;
  for (var f = i; f--; ) {
    var g = l[f];
    if (!(a ? g in t : hm.call(t, g)))
      return !1;
  }
  var h = s.get(e), v = s.get(t);
  if (h && v)
    return h == t && v == e;
  var m = !0;
  s.set(e, t), s.set(t, e);
  for (var y = a; ++f < i; ) {
    g = l[f];
    var p = e[g], _ = t[g];
    if (o)
      var k = a ? o(_, p, g, t, e, s) : o(p, _, g, e, t, s);
    if (!(k === void 0 ? p === _ || r(p, _, n, o, s) : k)) {
      m = !1;
      break;
    }
    y || (y = g == "constructor");
  }
  if (m && !y) {
    var w = e.constructor, T = t.constructor;
    w != T && "constructor" in e && "constructor" in t && !(typeof w == "function" && w instanceof w && typeof T == "function" && T instanceof T) && (m = !1);
  }
  return s.delete(e), s.delete(t), m;
}
var bm = 1, al = "[object Arguments]", ll = "[object Array]", Go = "[object Object]", _m = Object.prototype, il = _m.hasOwnProperty;
function wm(e, t, n, o, r, s) {
  var a = Vt(e), l = Vt(t), i = a ? ll : _n(e), u = l ? ll : _n(t);
  i = i == al ? Go : i, u = u == al ? Go : u;
  var d = i == Go, f = u == Go, g = i == u;
  if (g && ms(e)) {
    if (!ms(t))
      return !1;
    a = !0, d = !1;
  }
  if (g && !d)
    return s || (s = new un()), a || Xi(e) ? Qi(e, t, n, o, r, s) : vm(e, t, i, n, o, r, s);
  if (!(n & bm)) {
    var h = d && il.call(e, "__wrapped__"), v = f && il.call(t, "__wrapped__");
    if (h || v) {
      var m = h ? e.value() : e, y = v ? t.value() : t;
      return s || (s = new un()), r(m, y, n, o, s);
    }
  }
  return g ? (s || (s = new un()), ym(e, t, n, o, r, s)) : !1;
}
function Mr(e, t, n, o, r) {
  return e === t ? !0 : e == null || t == null || !Qn(e) && !Qn(t) ? e !== e && t !== t : wm(e, t, n, o, Mr, r);
}
var Sm = 1, Cm = 2;
function Em(e, t, n, o) {
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
    var l = a[0], i = e[l], u = a[1];
    if (a[2]) {
      if (i === void 0 && !(l in e))
        return !1;
    } else {
      var d = new un(), f;
      if (!(f === void 0 ? Mr(u, i, Sm | Cm, o, d) : f))
        return !1;
    }
  }
  return !0;
}
function eu(e) {
  return e === e && !In(e);
}
function Tm(e) {
  for (var t = Zi(e), n = t.length; n--; ) {
    var o = t[n], r = e[o];
    t[n] = [o, r, eu(r)];
  }
  return t;
}
function tu(e, t) {
  return function(n) {
    return n == null ? !1 : n[e] === t && (t !== void 0 || e in Object(n));
  };
}
function Om(e) {
  var t = Tm(e);
  return t.length == 1 && t[0][2] ? tu(t[0][0], t[0][1]) : function(n) {
    return n === e || Em(n, e, t);
  };
}
function Im(e, t) {
  return e != null && t in Object(e);
}
function km(e, t, n) {
  t = Rr(t, e);
  for (var o = -1, r = t.length, s = !1; ++o < r; ) {
    var a = Mo(t[o]);
    if (!(s = e != null && n(e, a)))
      break;
    e = e[a];
  }
  return s || ++o != r ? s : (r = e == null ? 0 : e.length, !!r && js(r) && Ws(a, r) && (Vt(e) || Gs(e)));
}
function nu(e, t) {
  return e != null && km(e, t, Im);
}
var Lm = 1, Am = 2;
function Nm(e, t) {
  return Ks(e) && eu(t) ? tu(Mo(e), t) : function(n) {
    var o = Sn(n, e);
    return o === void 0 && o === t ? nu(n, e) : Mr(t, o, Lm | Am);
  };
}
function $m(e) {
  return function(t) {
    return t?.[e];
  };
}
function Pm(e) {
  return function(t) {
    return qs(t, e);
  };
}
function Rm(e) {
  return Ks(e) ? $m(Mo(e)) : Pm(e);
}
function Mm(e) {
  return typeof e == "function" ? e : e == null ? ji : typeof e == "object" ? Vt(e) ? Nm(e[0], e[1]) : Om(e) : Rm(e);
}
var ts = function() {
  return Jt.Date.now();
}, Fm = "Expected a function", Dm = Math.max, Bm = Math.min;
function Vm(e, t, n) {
  var o, r, s, a, l, i, u = 0, d = !1, f = !1, g = !0;
  if (typeof e != "function")
    throw new TypeError(Fm);
  t = Ha(t) || 0, In(n) && (d = !!n.leading, f = "maxWait" in n, s = f ? Dm(Ha(n.maxWait) || 0, t) : s, g = "trailing" in n ? !!n.trailing : g);
  function h(I) {
    var E = o, H = r;
    return o = r = void 0, u = I, a = e.apply(H, E), a;
  }
  function v(I) {
    return u = I, l = setTimeout(p, t), d ? h(I) : a;
  }
  function m(I) {
    var E = I - i, H = I - u, V = t - E;
    return f ? Bm(V, s - H) : V;
  }
  function y(I) {
    var E = I - i, H = I - u;
    return i === void 0 || E >= t || E < 0 || f && H >= s;
  }
  function p() {
    var I = ts();
    if (y(I))
      return _(I);
    l = setTimeout(p, m(I));
  }
  function _(I) {
    return l = void 0, g && o ? h(I) : (o = r = void 0, a);
  }
  function k() {
    l !== void 0 && clearTimeout(l), u = 0, o = i = r = l = void 0;
  }
  function w() {
    return l === void 0 ? a : _(ts());
  }
  function T() {
    var I = ts(), E = y(I);
    if (o = arguments, r = this, i = I, E) {
      if (l === void 0)
        return v(i);
      if (f)
        return clearTimeout(l), l = setTimeout(p, t), h(i);
    }
    return l === void 0 && (l = setTimeout(p, t)), a;
  }
  return T.cancel = k, T.flush = w, T;
}
function xm(e, t, n) {
  var o = e == null ? 0 : e.length;
  if (!o)
    return -1;
  var r = o - 1;
  return jf(e, Mm(t), r);
}
function br(e) {
  for (var t = -1, n = e == null ? 0 : e.length, o = {}; ++t < n; ) {
    var r = e[t];
    o[r[0]] = r[1];
  }
  return o;
}
function wo(e, t) {
  return Mr(e, t);
}
function cn(e) {
  return e == null;
}
function ou(e) {
  return e === void 0;
}
function zm(e, t, n, o) {
  if (!In(e))
    return e;
  t = Rr(t, e);
  for (var r = -1, s = t.length, a = s - 1, l = e; l != null && ++r < s; ) {
    var i = Mo(t[r]), u = n;
    if (i === "__proto__" || i === "constructor" || i === "prototype")
      return e;
    if (r != a) {
      var d = l[i];
      u = void 0, u === void 0 && (u = In(d) ? d : Ws(t[r + 1]) ? [] : {});
    }
    Zf(l, i, u), l = l[i];
  }
  return e;
}
function Hm(e, t, n) {
  for (var o = -1, r = t.length, s = {}; ++o < r; ) {
    var a = t[o], l = qs(e, a);
    n(l, a) && zm(s, Rr(a, e), l);
  }
  return s;
}
function Wm(e, t) {
  return Hm(e, t, function(n, o) {
    return nu(e, o);
  });
}
var Um = Iv(function(e, t) {
  return e == null ? {} : Wm(e, t);
});
const jt = (e) => e === void 0, ko = (e) => typeof e == "boolean", Oe = (e) => typeof e == "number", Bt = (e) => typeof Element > "u" ? !1 : e instanceof Element, jm = (e) => Ct(e) ? !Number.isNaN(Number(e)) : !1;
var Gm = Object.defineProperty, Km = Object.defineProperties, Ym = Object.getOwnPropertyDescriptors, ul = Object.getOwnPropertySymbols, qm = Object.prototype.hasOwnProperty, Xm = Object.prototype.propertyIsEnumerable, cl = (e, t, n) => t in e ? Gm(e, t, { enumerable: !0, configurable: !0, writable: !0, value: n }) : e[t] = n, Zm = (e, t) => {
  for (var n in t || (t = {}))
    qm.call(t, n) && cl(e, n, t[n]);
  if (ul)
    for (var n of ul(t))
      Xm.call(t, n) && cl(e, n, t[n]);
  return e;
}, Jm = (e, t) => Km(e, Ym(t));
function Qm(e, t) {
  var n;
  const o = En();
  return Fs(() => {
    o.value = e();
  }, Jm(Zm({}, t), {
    flush: (n = void 0) != null ? n : "sync"
  })), Lr(o);
}
var dl;
const Ne = typeof window < "u", eg = (e) => typeof e == "string", ru = () => {
}, bs = Ne && ((dl = window?.navigator) == null ? void 0 : dl.userAgent) && /iP(ad|hone|od)/.test(window.navigator.userAgent);
function Xs(e) {
  return typeof e == "function" ? e() : c(e);
}
function tg(e) {
  return e;
}
function Fo(e) {
  return Cd() ? (Di(e), !0) : !1;
}
function ng(e, t = !0) {
  Je() ? Me(e) : t ? e() : xe(e);
}
function _r(e, t, n = {}) {
  const {
    immediate: o = !0
  } = n, r = P(!1);
  let s = null;
  function a() {
    s && (clearTimeout(s), s = null);
  }
  function l() {
    r.value = !1, a();
  }
  function i(...u) {
    a(), r.value = !0, s = setTimeout(() => {
      r.value = !1, s = null, e(...u);
    }, Xs(t));
  }
  return o && (r.value = !0, Ne && i()), Fo(l), {
    isPending: Lr(r),
    start: i,
    stop: l
  };
}
function sn(e) {
  var t;
  const n = Xs(e);
  return (t = n?.$el) != null ? t : n;
}
const Fr = Ne ? window : void 0;
function Lt(...e) {
  let t, n, o, r;
  if (eg(e[0]) || Array.isArray(e[0]) ? ([n, o, r] = e, t = Fr) : [t, n, o, r] = e, !t)
    return ru;
  Array.isArray(n) || (n = [n]), Array.isArray(o) || (o = [o]);
  const s = [], a = () => {
    s.forEach((d) => d()), s.length = 0;
  }, l = (d, f, g, h) => (d.addEventListener(f, g, h), () => d.removeEventListener(f, g, h)), i = ae(() => [sn(t), Xs(r)], ([d, f]) => {
    a(), d && s.push(...n.flatMap((g) => o.map((h) => l(d, g, h, f))));
  }, { immediate: !0, flush: "post" }), u = () => {
    i(), a();
  };
  return Fo(u), u;
}
let fl = !1;
function og(e, t, n = {}) {
  const { window: o = Fr, ignore: r = [], capture: s = !0, detectIframe: a = !1 } = n;
  if (!o)
    return;
  bs && !fl && (fl = !0, Array.from(o.document.body.children).forEach((g) => g.addEventListener("click", ru)));
  let l = !0;
  const i = (g) => r.some((h) => {
    if (typeof h == "string")
      return Array.from(o.document.querySelectorAll(h)).some((v) => v === g.target || g.composedPath().includes(v));
    {
      const v = sn(h);
      return v && (g.target === v || g.composedPath().includes(v));
    }
  }), d = [
    Lt(o, "click", (g) => {
      const h = sn(e);
      if (!(!h || h === g.target || g.composedPath().includes(h))) {
        if (g.detail === 0 && (l = !i(g)), !l) {
          l = !0;
          return;
        }
        t(g);
      }
    }, { passive: !0, capture: s }),
    Lt(o, "pointerdown", (g) => {
      const h = sn(e);
      h && (l = !g.composedPath().includes(h) && !i(g));
    }, { passive: !0 }),
    a && Lt(o, "blur", (g) => {
      var h;
      const v = sn(e);
      ((h = o.document.activeElement) == null ? void 0 : h.tagName) === "IFRAME" && !v?.contains(o.document.activeElement) && t(g);
    })
  ].filter(Boolean);
  return () => d.forEach((g) => g());
}
function su(e, t = !1) {
  const n = P(), o = () => n.value = !!e();
  return o(), ng(o, t), n;
}
const pl = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {}, vl = "__vueuse_ssr_handlers__";
pl[vl] = pl[vl] || {};
var ml = Object.getOwnPropertySymbols, rg = Object.prototype.hasOwnProperty, sg = Object.prototype.propertyIsEnumerable, ag = (e, t) => {
  var n = {};
  for (var o in e)
    rg.call(e, o) && t.indexOf(o) < 0 && (n[o] = e[o]);
  if (e != null && ml)
    for (var o of ml(e))
      t.indexOf(o) < 0 && sg.call(e, o) && (n[o] = e[o]);
  return n;
};
function Ht(e, t, n = {}) {
  const o = n, { window: r = Fr } = o, s = ag(o, ["window"]);
  let a;
  const l = su(() => r && "ResizeObserver" in r), i = () => {
    a && (a.disconnect(), a = void 0);
  }, u = ae(() => sn(e), (f) => {
    i(), l.value && r && f && (a = new ResizeObserver(t), a.observe(f, s));
  }, { immediate: !0, flush: "post" }), d = () => {
    i(), u();
  };
  return Fo(d), {
    isSupported: l,
    stop: d
  };
}
var gl = Object.getOwnPropertySymbols, lg = Object.prototype.hasOwnProperty, ig = Object.prototype.propertyIsEnumerable, ug = (e, t) => {
  var n = {};
  for (var o in e)
    lg.call(e, o) && t.indexOf(o) < 0 && (n[o] = e[o]);
  if (e != null && gl)
    for (var o of gl(e))
      t.indexOf(o) < 0 && ig.call(e, o) && (n[o] = e[o]);
  return n;
};
function cg(e, t, n = {}) {
  const o = n, { window: r = Fr } = o, s = ug(o, ["window"]);
  let a;
  const l = su(() => r && "MutationObserver" in r), i = () => {
    a && (a.disconnect(), a = void 0);
  }, u = ae(() => sn(e), (f) => {
    i(), l.value && r && f && (a = new MutationObserver(t), a.observe(f, s));
  }, { immediate: !0 }), d = () => {
    i(), u();
  };
  return Fo(d), {
    isSupported: l,
    stop: d
  };
}
var hl;
(function(e) {
  e.UP = "UP", e.RIGHT = "RIGHT", e.DOWN = "DOWN", e.LEFT = "LEFT", e.NONE = "NONE";
})(hl || (hl = {}));
var dg = Object.defineProperty, yl = Object.getOwnPropertySymbols, fg = Object.prototype.hasOwnProperty, pg = Object.prototype.propertyIsEnumerable, bl = (e, t, n) => t in e ? dg(e, t, { enumerable: !0, configurable: !0, writable: !0, value: n }) : e[t] = n, vg = (e, t) => {
  for (var n in t || (t = {}))
    fg.call(t, n) && bl(e, n, t[n]);
  if (yl)
    for (var n of yl(t))
      pg.call(t, n) && bl(e, n, t[n]);
  return e;
};
const mg = {
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
vg({
  linear: tg
}, mg);
class gg extends Error {
  constructor(t) {
    super(t), this.name = "ElementPlusError";
  }
}
function Zs(e, t) {
  throw new gg(`[${e}] ${t}`);
}
const _l = {
  current: 0
}, wl = P(0), au = 2e3, Sl = Symbol("elZIndexContextKey"), lu = Symbol("zIndexContextKey"), Js = (e) => {
  const t = Je() ? ie(Sl, _l) : _l, n = e || (Je() ? ie(lu, void 0) : void 0), o = O(() => {
    const a = c(n);
    return Oe(a) ? a : au;
  }), r = O(() => o.value + wl.value), s = () => (t.current++, wl.value = t.current, r.value);
  return !Ne && ie(Sl), {
    initialZIndex: o,
    currentZIndex: r,
    nextZIndex: s
  };
};
var hg = {
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
const yg = (e) => (t, n) => bg(t, n, c(e)), bg = (e, t, n) => Sn(n, e, e).replace(/\{(\w+)\}/g, (o, r) => {
  var s;
  return `${(s = t?.[r]) != null ? s : `{${r}}`}`;
}), _g = (e) => {
  const t = O(() => c(e).name), n = Wt(e) ? e : P(e);
  return {
    lang: t,
    locale: n,
    t: yg(e)
  };
}, iu = Symbol("localeContextKey"), Do = (e) => {
  const t = e || ie(iu, P());
  return _g(O(() => t.value || hg));
}, uu = "__epPropKey", oe = (e) => e, wg = (e) => kt(e) && !!e[uu], Dr = (e, t) => {
  if (!kt(e) || wg(e))
    return e;
  const { values: n, required: o, default: r, type: s, validator: a } = e, i = {
    type: s,
    required: !!o,
    validator: n || a ? (u) => {
      let d = !1, f = [];
      if (n && (f = Array.from(n), Da(e, "default") && f.push(r), d || (d = f.includes(u))), a && (d || (d = a(u))), !d && f.length > 0) {
        const g = [...new Set(f)].map((h) => JSON.stringify(h)).join(", ");
        Ed(`Invalid prop: validation failed${t ? ` for prop "${t}"` : ""}. Expected one of [${g}], got value ${JSON.stringify(u)}.`);
      }
      return d;
    } : void 0,
    [uu]: !0
  };
  return Da(e, "default") && (i.default = r), i;
}, me = (e) => br(Object.entries(e).map(([t, n]) => [
  t,
  Dr(n, t)
])), cu = ["", "default", "small", "large"], Bo = Dr({
  type: String,
  values: cu,
  required: !1
}), du = Symbol("size"), Sg = () => {
  const e = ie(du, {});
  return O(() => c(e.size) || "");
}, fu = Symbol("emptyValuesContextKey"), Cg = ["", void 0, null], Eg = void 0, pu = me({
  emptyValues: Array,
  valueOnClear: {
    type: [String, Number, Boolean, Function],
    default: void 0,
    validator: (e) => We(e) ? !e() : !e
  }
}), Tg = (e, t) => {
  const n = Je() ? ie(fu, P({})) : P({}), o = O(() => e.emptyValues || n.value.emptyValues || Cg), r = O(() => We(e.valueOnClear) ? e.valueOnClear() : e.valueOnClear !== void 0 ? e.valueOnClear : We(n.value.valueOnClear) ? n.value.valueOnClear() : n.value.valueOnClear !== void 0 ? n.value.valueOnClear : Eg), s = (a) => o.value.includes(a);
  return o.value.includes(r.value), {
    emptyValues: o,
    valueOnClear: r,
    isEmptyValue: s
  };
}, Cl = (e) => Object.keys(e), wr = P();
function Br(e, t = void 0) {
  const n = Je() ? ie(xi, wr) : wr;
  return e ? O(() => {
    var o, r;
    return (r = (o = n.value) == null ? void 0 : o[e]) != null ? r : t;
  }) : n;
}
function vu(e, t) {
  const n = Br(), o = Ee(e, O(() => {
    var l;
    return ((l = n.value) == null ? void 0 : l.namespace) || bo;
  })), r = Do(O(() => {
    var l;
    return (l = n.value) == null ? void 0 : l.locale;
  })), s = Js(O(() => {
    var l;
    return ((l = n.value) == null ? void 0 : l.zIndex) || au;
  })), a = O(() => {
    var l;
    return c(t) || ((l = n.value) == null ? void 0 : l.size) || "";
  });
  return mu(O(() => c(n) || {})), {
    ns: o,
    locale: r,
    zIndex: s,
    size: a
  };
}
const mu = (e, t, n = !1) => {
  var o;
  const r = !!Je(), s = r ? Br() : void 0, a = (o = void 0) != null ? o : r ? Qe : void 0;
  if (!a)
    return;
  const l = O(() => {
    const i = c(e);
    return s?.value ? Og(s.value, i) : i;
  });
  return a(xi, l), a(iu, O(() => l.value.locale)), a(zi, O(() => l.value.namespace)), a(lu, O(() => l.value.zIndex)), a(du, {
    size: O(() => l.value.size || "")
  }), a(fu, O(() => ({
    emptyValues: l.value.emptyValues,
    valueOnClear: l.value.valueOnClear
  }))), (n || !wr.value) && (wr.value = l.value), l;
}, Og = (e, t) => {
  const n = [.../* @__PURE__ */ new Set([...Cl(e), ...Cl(t)])], o = {};
  for (const r of n)
    o[r] = t[r] !== void 0 ? t[r] : e[r];
  return o;
}, tt = "update:modelValue", eo = "change", Jn = "input";
var ve = (e, t) => {
  const n = e.__vccOpts || e;
  for (const [o, r] of t)
    n[o] = r;
  return n;
};
const gu = (e = "") => e.split(" ").filter((t) => !!t.trim()), El = (e, t) => {
  if (!e || !t)
    return !1;
  if (t.includes(" "))
    throw new Error("className should not contain space.");
  return e.classList.contains(t);
}, Ig = (e, t) => {
  !e || !t.trim() || e.classList.add(...gu(t));
}, kg = (e, t) => {
  !e || !t.trim() || e.classList.remove(...gu(t));
}, Lg = (e, t) => {
  var n;
  if (!Ne || !e)
    return "";
  let o = ef(t);
  o === "float" && (o = "cssFloat");
  try {
    const r = e.style[o];
    if (r)
      return r;
    const s = (n = document.defaultView) == null ? void 0 : n.getComputedStyle(e, "");
    return s ? s[o] : "";
  } catch {
    return e.style[o];
  }
};
function pn(e, t = "px") {
  if (!e)
    return "";
  if (Oe(e) || jm(e))
    return `${e}${t}`;
  if (Ct(e))
    return e;
}
let Ko;
const Ag = (e) => {
  var t;
  if (!Ne)
    return 0;
  if (Ko !== void 0)
    return Ko;
  const n = document.createElement("div");
  n.className = `${e}-scrollbar__wrap`, n.style.visibility = "hidden", n.style.width = "100px", n.style.position = "absolute", n.style.top = "-9999px", document.body.appendChild(n);
  const o = n.offsetWidth;
  n.style.overflow = "scroll";
  const r = document.createElement("div");
  r.style.width = "100%", n.appendChild(r);
  const s = r.offsetWidth;
  return (t = n.parentNode) == null || t.removeChild(n), Ko = o - s, Ko;
};
function Ng(e, t) {
  if (!Ne)
    return;
  if (!t) {
    e.scrollTop = 0;
    return;
  }
  const n = [];
  let o = t.offsetParent;
  for (; o !== null && e !== o && e.contains(o); )
    n.push(o), o = o.offsetParent;
  const r = t.offsetTop + n.reduce((i, u) => i + u.offsetTop, 0), s = r + t.offsetHeight, a = e.scrollTop, l = a + e.clientHeight;
  r < a ? e.scrollTop = r : s > l && (e.scrollTop = s - e.clientHeight);
}
const Ot = (e, t) => {
  if (e.install = (n) => {
    for (const o of [e, ...Object.values(t ?? {})])
      n.component(o.name, o);
  }, t)
    for (const [n, o] of Object.entries(t))
      e[n] = o;
  return e;
}, hu = (e, t) => (e.install = (n) => {
  e._context = n._context, n.config.globalProperties[t] = e;
}, e), Vo = (e) => (e.install = Tn, e), $g = me({
  size: {
    type: oe([Number, String])
  },
  color: {
    type: String
  }
}), Pg = Y({
  name: "ElIcon",
  inheritAttrs: !1
}), Rg = /* @__PURE__ */ Y({
  ...Pg,
  props: $g,
  setup(e) {
    const t = e, n = Ee("icon"), o = O(() => {
      const { size: r, color: s } = t;
      return !r && !s ? {} : {
        fontSize: jt(r) ? void 0 : pn(r),
        "--color": s
      };
    });
    return (r, s) => (L(), x("i", Nt({
      class: c(n).b(),
      style: c(o)
    }, r.$attrs), [
      Q(r.$slots, "default")
    ], 16));
  }
});
var Mg = /* @__PURE__ */ ve(Rg, [["__file", "icon.vue"]]);
const Ke = Ot(Mg);
/*! Element Plus Icons Vue v2.3.1 */
var Fg = /* @__PURE__ */ Y({
  name: "ArrowDown",
  __name: "arrow-down",
  setup(e) {
    return (t, n) => (L(), x("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 1024 1024"
    }, [
      $("path", {
        fill: "currentColor",
        d: "M831.872 340.864 512 652.672 192.128 340.864a30.592 30.592 0 0 0-42.752 0 29.12 29.12 0 0 0 0 41.6L489.664 714.24a32 32 0 0 0 44.672 0l340.288-331.712a29.12 29.12 0 0 0 0-41.728 30.592 30.592 0 0 0-42.752 0z"
      })
    ]));
  }
}), Qs = Fg, Dg = /* @__PURE__ */ Y({
  name: "ArrowUp",
  __name: "arrow-up",
  setup(e) {
    return (t, n) => (L(), x("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 1024 1024"
    }, [
      $("path", {
        fill: "currentColor",
        d: "m488.832 344.32-339.84 356.672a32 32 0 0 0 0 44.16l.384.384a29.44 29.44 0 0 0 42.688 0l320-335.872 319.872 335.872a29.44 29.44 0 0 0 42.688 0l.384-.384a32 32 0 0 0 0-44.16L535.168 344.32a32 32 0 0 0-46.336 0"
      })
    ]));
  }
}), Bg = Dg, Vg = /* @__PURE__ */ Y({
  name: "CircleCheck",
  __name: "circle-check",
  setup(e) {
    return (t, n) => (L(), x("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 1024 1024"
    }, [
      $("path", {
        fill: "currentColor",
        d: "M512 896a384 384 0 1 0 0-768 384 384 0 0 0 0 768m0 64a448 448 0 1 1 0-896 448 448 0 0 1 0 896"
      }),
      $("path", {
        fill: "currentColor",
        d: "M745.344 361.344a32 32 0 0 1 45.312 45.312l-288 288a32 32 0 0 1-45.312 0l-160-160a32 32 0 1 1 45.312-45.312L480 626.752l265.344-265.408z"
      })
    ]));
  }
}), xg = Vg, zg = /* @__PURE__ */ Y({
  name: "CircleCloseFilled",
  __name: "circle-close-filled",
  setup(e) {
    return (t, n) => (L(), x("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 1024 1024"
    }, [
      $("path", {
        fill: "currentColor",
        d: "M512 64a448 448 0 1 1 0 896 448 448 0 0 1 0-896m0 393.664L407.936 353.6a38.4 38.4 0 1 0-54.336 54.336L457.664 512 353.6 616.064a38.4 38.4 0 1 0 54.336 54.336L512 566.336 616.064 670.4a38.4 38.4 0 1 0 54.336-54.336L566.336 512 670.4 407.936a38.4 38.4 0 1 0-54.336-54.336z"
      })
    ]));
  }
}), Hg = zg, Wg = /* @__PURE__ */ Y({
  name: "CircleClose",
  __name: "circle-close",
  setup(e) {
    return (t, n) => (L(), x("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 1024 1024"
    }, [
      $("path", {
        fill: "currentColor",
        d: "m466.752 512-90.496-90.496a32 32 0 0 1 45.248-45.248L512 466.752l90.496-90.496a32 32 0 1 1 45.248 45.248L557.248 512l90.496 90.496a32 32 0 1 1-45.248 45.248L512 557.248l-90.496 90.496a32 32 0 0 1-45.248-45.248z"
      }),
      $("path", {
        fill: "currentColor",
        d: "M512 896a384 384 0 1 0 0-768 384 384 0 0 0 0 768m0 64a448 448 0 1 1 0-896 448 448 0 0 1 0 896"
      })
    ]));
  }
}), ea = Wg, Ug = /* @__PURE__ */ Y({
  name: "Close",
  __name: "close",
  setup(e) {
    return (t, n) => (L(), x("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 1024 1024"
    }, [
      $("path", {
        fill: "currentColor",
        d: "M764.288 214.592 512 466.88 259.712 214.592a31.936 31.936 0 0 0-45.12 45.12L466.752 512 214.528 764.224a31.936 31.936 0 1 0 45.12 45.184L512 557.184l252.288 252.288a31.936 31.936 0 0 0 45.12-45.12L557.12 512.064l252.288-252.352a31.936 31.936 0 1 0-45.12-45.184z"
      })
    ]));
  }
}), Sr = Ug, jg = /* @__PURE__ */ Y({
  name: "Hide",
  __name: "hide",
  setup(e) {
    return (t, n) => (L(), x("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 1024 1024"
    }, [
      $("path", {
        fill: "currentColor",
        d: "M876.8 156.8c0-9.6-3.2-16-9.6-22.4-6.4-6.4-12.8-9.6-22.4-9.6-9.6 0-16 3.2-22.4 9.6L736 220.8c-64-32-137.6-51.2-224-60.8-160 16-288 73.6-377.6 176C44.8 438.4 0 496 0 512s48 73.6 134.4 176c22.4 25.6 44.8 48 73.6 67.2l-86.4 89.6c-6.4 6.4-9.6 12.8-9.6 22.4 0 9.6 3.2 16 9.6 22.4 6.4 6.4 12.8 9.6 22.4 9.6 9.6 0 16-3.2 22.4-9.6l704-710.4c3.2-6.4 6.4-12.8 6.4-22.4Zm-646.4 528c-76.8-70.4-128-128-153.6-172.8 28.8-48 80-105.6 153.6-172.8C304 272 400 230.4 512 224c64 3.2 124.8 19.2 176 44.8l-54.4 54.4C598.4 300.8 560 288 512 288c-64 0-115.2 22.4-160 64s-64 96-64 160c0 48 12.8 89.6 35.2 124.8L256 707.2c-9.6-6.4-19.2-16-25.6-22.4Zm140.8-96c-12.8-22.4-19.2-48-19.2-76.8 0-44.8 16-83.2 48-112 32-28.8 67.2-48 112-48 28.8 0 54.4 6.4 73.6 19.2zM889.599 336c-12.8-16-28.8-28.8-41.6-41.6l-48 48c73.6 67.2 124.8 124.8 150.4 169.6-28.8 48-80 105.6-153.6 172.8-73.6 67.2-172.8 108.8-284.8 115.2-51.2-3.2-99.2-12.8-140.8-28.8l-48 48c57.6 22.4 118.4 38.4 188.8 44.8 160-16 288-73.6 377.6-176C979.199 585.6 1024 528 1024 512s-48.001-73.6-134.401-176Z"
      }),
      $("path", {
        fill: "currentColor",
        d: "M511.998 672c-12.8 0-25.6-3.2-38.4-6.4l-51.2 51.2c28.8 12.8 57.6 19.2 89.6 19.2 64 0 115.2-22.4 160-64 41.6-41.6 64-96 64-160 0-32-6.4-64-19.2-89.6l-51.2 51.2c3.2 12.8 6.4 25.6 6.4 38.4 0 44.8-16 83.2-48 112-32 28.8-67.2 48-112 48Z"
      })
    ]));
  }
}), Gg = jg, Kg = /* @__PURE__ */ Y({
  name: "InfoFilled",
  __name: "info-filled",
  setup(e) {
    return (t, n) => (L(), x("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 1024 1024"
    }, [
      $("path", {
        fill: "currentColor",
        d: "M512 64a448 448 0 1 1 0 896.064A448 448 0 0 1 512 64m67.2 275.072c33.28 0 60.288-23.104 60.288-57.344s-27.072-57.344-60.288-57.344c-33.28 0-60.16 23.104-60.16 57.344s26.88 57.344 60.16 57.344M590.912 699.2c0-6.848 2.368-24.64 1.024-34.752l-52.608 60.544c-10.88 11.456-24.512 19.392-30.912 17.28a12.992 12.992 0 0 1-8.256-14.72l87.68-276.992c7.168-35.136-12.544-67.2-54.336-71.296-44.096 0-108.992 44.736-148.48 101.504 0 6.784-1.28 23.68.064 33.792l52.544-60.608c10.88-11.328 23.552-19.328 29.952-17.152a12.8 12.8 0 0 1 7.808 16.128L388.48 728.576c-10.048 32.256 8.96 63.872 55.04 71.04 67.84 0 107.904-43.648 147.456-100.416z"
      })
    ]));
  }
}), Yg = Kg, qg = /* @__PURE__ */ Y({
  name: "Loading",
  __name: "loading",
  setup(e) {
    return (t, n) => (L(), x("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 1024 1024"
    }, [
      $("path", {
        fill: "currentColor",
        d: "M512 64a32 32 0 0 1 32 32v192a32 32 0 0 1-64 0V96a32 32 0 0 1 32-32m0 640a32 32 0 0 1 32 32v192a32 32 0 1 1-64 0V736a32 32 0 0 1 32-32m448-192a32 32 0 0 1-32 32H736a32 32 0 1 1 0-64h192a32 32 0 0 1 32 32m-640 0a32 32 0 0 1-32 32H96a32 32 0 0 1 0-64h192a32 32 0 0 1 32 32M195.2 195.2a32 32 0 0 1 45.248 0L376.32 331.008a32 32 0 0 1-45.248 45.248L195.2 240.448a32 32 0 0 1 0-45.248zm452.544 452.544a32 32 0 0 1 45.248 0L828.8 783.552a32 32 0 0 1-45.248 45.248L647.744 692.992a32 32 0 0 1 0-45.248zM828.8 195.264a32 32 0 0 1 0 45.184L692.992 376.32a32 32 0 0 1-45.248-45.248l135.808-135.808a32 32 0 0 1 45.248 0m-452.544 452.48a32 32 0 0 1 0 45.248L240.448 828.8a32 32 0 0 1-45.248-45.248l135.808-135.808a32 32 0 0 1 45.248 0z"
      })
    ]));
  }
}), yu = qg, Xg = /* @__PURE__ */ Y({
  name: "Minus",
  __name: "minus",
  setup(e) {
    return (t, n) => (L(), x("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 1024 1024"
    }, [
      $("path", {
        fill: "currentColor",
        d: "M128 544h768a32 32 0 1 0 0-64H128a32 32 0 0 0 0 64"
      })
    ]));
  }
}), Zg = Xg, Jg = /* @__PURE__ */ Y({
  name: "Plus",
  __name: "plus",
  setup(e) {
    return (t, n) => (L(), x("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 1024 1024"
    }, [
      $("path", {
        fill: "currentColor",
        d: "M480 480V128a32 32 0 0 1 64 0v352h352a32 32 0 1 1 0 64H544v352a32 32 0 1 1-64 0V544H128a32 32 0 0 1 0-64z"
      })
    ]));
  }
}), Qg = Jg, eh = /* @__PURE__ */ Y({
  name: "SuccessFilled",
  __name: "success-filled",
  setup(e) {
    return (t, n) => (L(), x("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 1024 1024"
    }, [
      $("path", {
        fill: "currentColor",
        d: "M512 64a448 448 0 1 1 0 896 448 448 0 0 1 0-896m-55.808 536.384-99.52-99.584a38.4 38.4 0 1 0-54.336 54.336l126.72 126.72a38.272 38.272 0 0 0 54.336 0l262.4-262.464a38.4 38.4 0 1 0-54.272-54.336z"
      })
    ]));
  }
}), th = eh, nh = /* @__PURE__ */ Y({
  name: "View",
  __name: "view",
  setup(e) {
    return (t, n) => (L(), x("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 1024 1024"
    }, [
      $("path", {
        fill: "currentColor",
        d: "M512 160c320 0 512 352 512 352S832 864 512 864 0 512 0 512s192-352 512-352m0 64c-225.28 0-384.128 208.064-436.8 288 52.608 79.872 211.456 288 436.8 288 225.28 0 384.128-208.064 436.8-288-52.608-79.872-211.456-288-436.8-288zm0 64a224 224 0 1 1 0 448 224 224 0 0 1 0-448m0 64a160.192 160.192 0 0 0-160 160c0 88.192 71.744 160 160 160s160-71.808 160-160-71.744-160-160-160"
      })
    ]));
  }
}), oh = nh, rh = /* @__PURE__ */ Y({
  name: "WarningFilled",
  __name: "warning-filled",
  setup(e) {
    return (t, n) => (L(), x("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 1024 1024"
    }, [
      $("path", {
        fill: "currentColor",
        d: "M512 64a448 448 0 1 1 0 896 448 448 0 0 1 0-896m0 192a58.432 58.432 0 0 0-58.24 63.744l23.36 256.384a35.072 35.072 0 0 0 69.76 0l23.296-256.384A58.432 58.432 0 0 0 512 256m0 512a51.2 51.2 0 1 0 0-102.4 51.2 51.2 0 0 0 0 102.4"
      })
    ]));
  }
}), sh = rh;
const Xt = oe([
  String,
  Object,
  Function
]), bu = {
  Close: Sr
}, ah = {
  Close: Sr
}, Cr = {
  success: th,
  warning: sh,
  error: Hg,
  info: Yg
}, _u = {
  validating: yu,
  success: xg,
  error: ea
}, wu = () => Ne && /firefox/i.test(window.navigator.userAgent);
let gt;
const lh = {
  height: "0",
  visibility: "hidden",
  overflow: wu() ? "" : "hidden",
  position: "absolute",
  "z-index": "-1000",
  top: "0",
  right: "0"
}, ih = [
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
function uh(e) {
  const t = window.getComputedStyle(e), n = t.getPropertyValue("box-sizing"), o = Number.parseFloat(t.getPropertyValue("padding-bottom")) + Number.parseFloat(t.getPropertyValue("padding-top")), r = Number.parseFloat(t.getPropertyValue("border-bottom-width")) + Number.parseFloat(t.getPropertyValue("border-top-width"));
  return { contextStyle: ih.map((a) => [
    a,
    t.getPropertyValue(a)
  ]), paddingSize: o, borderSize: r, boxSizing: n };
}
function Tl(e, t = 1, n) {
  var o;
  gt || (gt = document.createElement("textarea"), document.body.appendChild(gt));
  const { paddingSize: r, borderSize: s, boxSizing: a, contextStyle: l } = uh(e);
  l.forEach(([f, g]) => gt?.style.setProperty(f, g)), Object.entries(lh).forEach(([f, g]) => gt?.style.setProperty(f, g, "important")), gt.value = e.value || e.placeholder || "";
  let i = gt.scrollHeight;
  const u = {};
  a === "border-box" ? i = i + s : a === "content-box" && (i = i - r), gt.value = "";
  const d = gt.scrollHeight - r;
  if (Oe(t)) {
    let f = d * t;
    a === "border-box" && (f = f + r + s), i = Math.max(f, i), u.minHeight = `${f}px`;
  }
  if (Oe(n)) {
    let f = d * n;
    a === "border-box" && (f = f + r + s), i = Math.min(f, i);
  }
  return u.height = `${i}px`, (o = gt.parentNode) == null || o.removeChild(gt), gt = void 0, u;
}
const Su = (e) => e, ch = me({
  ariaLabel: String,
  ariaOrientation: {
    type: String,
    values: ["horizontal", "vertical", "undefined"]
  },
  ariaControls: String
}), fo = (e) => Um(ch, e), dh = me({
  id: {
    type: String,
    default: void 0
  },
  size: Bo,
  disabled: Boolean,
  modelValue: {
    type: oe([
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
    type: oe([Boolean, Object]),
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
    type: Xt
  },
  prefixIcon: {
    type: Xt
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
    type: oe([Object, Array, String]),
    default: () => Su({})
  },
  autofocus: Boolean,
  rows: {
    type: Number,
    default: 2
  },
  ...fo(["ariaLabel"])
}), fh = {
  [tt]: (e) => Ct(e),
  input: (e) => Ct(e),
  change: (e) => Ct(e),
  focus: (e) => e instanceof FocusEvent,
  blur: (e) => e instanceof FocusEvent,
  clear: () => !0,
  mouseleave: (e) => e instanceof MouseEvent,
  mouseenter: (e) => e instanceof MouseEvent,
  keydown: (e) => e instanceof Event,
  compositionstart: (e) => e instanceof CompositionEvent,
  compositionupdate: (e) => e instanceof CompositionEvent,
  compositionend: (e) => e instanceof CompositionEvent
}, ph = ["class", "style"], vh = /^on[A-Z]/, mh = (e = {}) => {
  const { excludeListeners: t = !1, excludeKeys: n } = e, o = O(() => (n?.value || []).concat(ph)), r = Je();
  return r ? O(() => {
    var s;
    return br(Object.entries((s = r.proxy) == null ? void 0 : s.$attrs).filter(([a]) => !o.value.includes(a) && !(t && vh.test(a))));
  }) : O(() => ({}));
}, ta = Symbol("formContextKey"), Er = Symbol("formItemContextKey"), Ol = {
  prefix: Math.floor(Math.random() * 1e4),
  current: 0
}, gh = Symbol("elIdInjection"), Cu = () => Je() ? ie(gh, Ol) : Ol, kn = (e) => {
  const t = Cu(), n = Hs();
  return Qm(() => c(e) || `${n.value}-id-${t.prefix}-${t.current++}`);
}, Vr = () => {
  const e = ie(ta, void 0), t = ie(Er, void 0);
  return {
    form: e,
    formItem: t
  };
}, Eu = (e, {
  formItemContext: t,
  disableIdGeneration: n,
  disableIdManagement: o
}) => {
  n || (n = P(!1)), o || (o = P(!1));
  const r = P();
  let s;
  const a = O(() => {
    var l;
    return !!(!(e.label || e.ariaLabel) && t && t.inputIds && ((l = t.inputIds) == null ? void 0 : l.length) <= 1);
  });
  return Me(() => {
    s = ae([it(e, "id"), n], ([l, i]) => {
      const u = l ?? (i ? void 0 : kn().value);
      u !== r.value && (t?.removeInputId && (r.value && t.removeInputId(r.value), !o?.value && !i && u && t.addInputId(u)), r.value = u);
    }, { immediate: !0 });
  }), Ds(() => {
    s && s(), t?.removeInputId && r.value && t.removeInputId(r.value);
  }), {
    isLabeledByFormItem: a,
    inputId: r
  };
}, Tu = (e) => {
  const t = Je();
  return O(() => {
    var n, o;
    return (o = (n = t?.proxy) == null ? void 0 : n.$props) == null ? void 0 : o[e];
  });
}, po = (e, t = {}) => {
  const n = P(void 0), o = t.prop ? n : Tu("size"), r = t.global ? n : Sg(), s = t.form ? { size: void 0 } : ie(ta, void 0), a = t.formItem ? { size: void 0 } : ie(Er, void 0);
  return O(() => o.value || c(e) || a?.size || s?.size || r.value || "");
}, xr = (e) => {
  const t = Tu("disabled"), n = ie(ta, void 0);
  return O(() => t.value || c(e) || n?.disabled || !1);
};
function Ou(e, {
  beforeFocus: t,
  afterFocus: n,
  beforeBlur: o,
  afterBlur: r
} = {}) {
  const s = Je(), { emit: a } = s, l = En(), i = P(!1), u = (g) => {
    We(t) && t(g) || i.value || (i.value = !0, a("focus", g), n?.());
  }, d = (g) => {
    var h;
    We(o) && o(g) || g.relatedTarget && ((h = l.value) != null && h.contains(g.relatedTarget)) || (i.value = !1, a("blur", g), r?.());
  }, f = () => {
    var g, h;
    (g = l.value) != null && g.contains(document.activeElement) && l.value !== document.activeElement || (h = e.value) == null || h.focus();
  };
  return ae(l, (g) => {
    g && g.setAttribute("tabindex", "-1");
  }), Lt(l, "focus", u, !0), Lt(l, "blur", d, !0), Lt(l, "click", f, !0), {
    isFocused: i,
    wrapperRef: l,
    handleFocus: u,
    handleBlur: d
  };
}
const hh = (e) => /([\uAC00-\uD7AF\u3130-\u318F])+/gi.test(e);
function Iu({
  afterComposition: e,
  emit: t
}) {
  const n = P(!1), o = (l) => {
    t?.("compositionstart", l), n.value = !0;
  }, r = (l) => {
    var i;
    t?.("compositionupdate", l);
    const u = (i = l.target) == null ? void 0 : i.value, d = u[u.length - 1] || "";
    n.value = !hh(d);
  }, s = (l) => {
    t?.("compositionend", l), n.value && (n.value = !1, xe(() => e(l)));
  };
  return {
    isComposing: n,
    handleComposition: (l) => {
      l.type === "compositionend" ? s(l) : r(l);
    },
    handleCompositionStart: o,
    handleCompositionUpdate: r,
    handleCompositionEnd: s
  };
}
function yh(e) {
  let t;
  function n() {
    if (e.value == null)
      return;
    const { selectionStart: r, selectionEnd: s, value: a } = e.value;
    if (r == null || s == null)
      return;
    const l = a.slice(0, Math.max(0, r)), i = a.slice(Math.max(0, s));
    t = {
      selectionStart: r,
      selectionEnd: s,
      value: a,
      beforeTxt: l,
      afterTxt: i
    };
  }
  function o() {
    if (e.value == null || t == null)
      return;
    const { value: r } = e.value, { beforeTxt: s, afterTxt: a, selectionStart: l } = t;
    if (s == null || a == null || l == null)
      return;
    let i = r.length;
    if (r.endsWith(a))
      i = r.length - a.length;
    else if (r.startsWith(s))
      i = s.length;
    else {
      const u = s[l - 1], d = r.indexOf(u, l - 1);
      d !== -1 && (i = d + 1);
    }
    e.value.setSelectionRange(i, i);
  }
  return [n, o];
}
const bh = "ElInput", _h = Y({
  name: bh,
  inheritAttrs: !1
}), wh = /* @__PURE__ */ Y({
  ..._h,
  props: dh,
  emits: fh,
  setup(e, { expose: t, emit: n }) {
    const o = e, r = Td(), s = mh(), a = Bs(), l = O(() => [
      o.type === "textarea" ? m.b() : v.b(),
      v.m(g.value),
      v.is("disabled", h.value),
      v.is("exceed", Fe.value),
      {
        [v.b("group")]: a.prepend || a.append,
        [v.m("prefix")]: a.prefix || o.prefixIcon,
        [v.m("suffix")]: a.suffix || o.suffixIcon || o.clearable || o.showPassword,
        [v.bm("suffix", "password-clear")]: re.value && se.value,
        [v.b("hidden")]: o.type === "hidden"
      },
      r.class
    ]), i = O(() => [
      v.e("wrapper"),
      v.is("focus", H.value)
    ]), { form: u, formItem: d } = Vr(), { inputId: f } = Eu(o, {
      formItemContext: d
    }), g = po(), h = xr(), v = Ee("input"), m = Ee("textarea"), y = En(), p = En(), _ = P(!1), k = P(!1), w = P(), T = En(o.inputStyle), I = O(() => y.value || p.value), { wrapperRef: E, isFocused: H, handleFocus: V, handleBlur: J } = Ou(I, {
      beforeFocus() {
        return h.value;
      },
      afterBlur() {
        var S;
        o.validateEvent && ((S = d?.validate) == null || S.call(d, "blur").catch((F) => void 0));
      }
    }), G = O(() => {
      var S;
      return (S = u?.statusIcon) != null ? S : !1;
    }), Z = O(() => d?.validateState || ""), le = O(() => Z.value && _u[Z.value]), Te = O(() => k.value ? oh : Gg), R = O(() => [
      r.style
    ]), M = O(() => [
      o.inputStyle,
      T.value,
      { resize: o.resize }
    ]), D = O(() => cn(o.modelValue) ? "" : String(o.modelValue)), re = O(() => o.clearable && !h.value && !o.readonly && !!D.value && (H.value || _.value)), se = O(() => o.showPassword && !h.value && !!D.value && (!!D.value || H.value)), pe = O(() => o.showWordLimit && !!o.maxlength && (o.type === "text" || o.type === "textarea") && !h.value && !o.readonly && !o.showPassword), Ae = O(() => D.value.length), Fe = O(() => !!pe.value && Ae.value > Number(o.maxlength)), we = O(() => !!a.suffix || !!o.suffixIcon || re.value || o.showPassword || pe.value || !!Z.value && G.value), [qe, je] = yh(y);
    Ht(p, (S) => {
      if (ye(), !pe.value || o.resize !== "both")
        return;
      const F = S[0], { width: ce } = F.contentRect;
      w.value = {
        right: `calc(100% - ${ce + 15 + 6}px)`
      };
    });
    const Xe = () => {
      const { type: S, autosize: F } = o;
      if (!(!Ne || S !== "textarea" || !p.value))
        if (F) {
          const ce = kt(F) ? F.minRows : void 0, be = kt(F) ? F.maxRows : void 0, rt = Tl(p.value, ce, be);
          T.value = {
            overflowY: "hidden",
            ...rt
          }, xe(() => {
            p.value.offsetHeight, T.value = rt;
          });
        } else
          T.value = {
            minHeight: Tl(p.value).minHeight
          };
    }, ye = ((S) => {
      let F = !1;
      return () => {
        var ce;
        if (F || !o.autosize)
          return;
        ((ce = p.value) == null ? void 0 : ce.offsetParent) === null || (S(), F = !0);
      };
    })(Xe), ut = () => {
      const S = I.value, F = o.formatter ? o.formatter(D.value) : D.value;
      !S || S.value === F || (S.value = F);
    }, mt = async (S) => {
      qe();
      let { value: F } = S.target;
      if (o.formatter && o.parser && (F = o.parser(F)), !_t.value) {
        if (F === D.value) {
          ut();
          return;
        }
        n(tt, F), n(Jn, F), await xe(), ut(), je();
      }
    }, ct = (S) => {
      let { value: F } = S.target;
      o.formatter && o.parser && (F = o.parser(F)), n(eo, F);
    }, {
      isComposing: _t,
      handleCompositionStart: dt,
      handleCompositionUpdate: ft,
      handleCompositionEnd: B
    } = Iu({ emit: n, afterComposition: mt }), U = () => {
      qe(), k.value = !k.value, setTimeout(je);
    }, Se = () => {
      var S;
      return (S = I.value) == null ? void 0 : S.focus();
    }, b = () => {
      var S;
      return (S = I.value) == null ? void 0 : S.blur();
    }, C = (S) => {
      _.value = !1, n("mouseleave", S);
    }, A = (S) => {
      _.value = !0, n("mouseenter", S);
    }, q = (S) => {
      n("keydown", S);
    }, fe = () => {
      var S;
      (S = I.value) == null || S.select();
    }, ue = () => {
      n(tt, ""), n(eo, ""), n("clear"), n(Jn, "");
    };
    return ae(() => o.modelValue, () => {
      var S;
      xe(() => Xe()), o.validateEvent && ((S = d?.validate) == null || S.call(d, "change").catch((F) => void 0));
    }), ae(D, () => ut()), ae(() => o.type, async () => {
      await xe(), ut(), Xe();
    }), Me(() => {
      !o.formatter && o.parser, ut(), xe(Xe);
    }), t({
      input: y,
      textarea: p,
      ref: I,
      textareaStyle: M,
      autosize: it(o, "autosize"),
      isComposing: _t,
      focus: Se,
      blur: b,
      select: fe,
      clear: ue,
      resizeTextarea: Xe
    }), (S, F) => (L(), x("div", {
      class: z([
        c(l),
        {
          [c(v).bm("group", "append")]: S.$slots.append,
          [c(v).bm("group", "prepend")]: S.$slots.prepend
        }
      ]),
      style: Ye(c(R)),
      onMouseenter: A,
      onMouseleave: C
    }, [
      j(" input "),
      S.type !== "textarea" ? (L(), x(ke, { key: 0 }, [
        j(" prepend slot "),
        S.$slots.prepend ? (L(), x("div", {
          key: 0,
          class: z(c(v).be("group", "prepend"))
        }, [
          Q(S.$slots, "prepend")
        ], 2)) : j("v-if", !0),
        $("div", {
          ref_key: "wrapperRef",
          ref: E,
          class: z(c(i))
        }, [
          j(" prefix slot "),
          S.$slots.prefix || S.prefixIcon ? (L(), x("span", {
            key: 0,
            class: z(c(v).e("prefix"))
          }, [
            $("span", {
              class: z(c(v).e("prefix-inner"))
            }, [
              Q(S.$slots, "prefix"),
              S.prefixIcon ? (L(), ee(c(Ke), {
                key: 0,
                class: z(c(v).e("icon"))
              }, {
                default: W(() => [
                  (L(), ee(pt(S.prefixIcon)))
                ]),
                _: 1
              }, 8, ["class"])) : j("v-if", !0)
            ], 2)
          ], 2)) : j("v-if", !0),
          $("input", Nt({
            id: c(f),
            ref_key: "input",
            ref: y,
            class: c(v).e("inner")
          }, c(s), {
            minlength: S.minlength,
            maxlength: S.maxlength,
            type: S.showPassword ? k.value ? "text" : "password" : S.type,
            disabled: c(h),
            readonly: S.readonly,
            autocomplete: S.autocomplete,
            tabindex: S.tabindex,
            "aria-label": S.ariaLabel,
            placeholder: S.placeholder,
            style: S.inputStyle,
            form: S.form,
            autofocus: S.autofocus,
            role: S.containerRole,
            onCompositionstart: c(dt),
            onCompositionupdate: c(ft),
            onCompositionend: c(B),
            onInput: mt,
            onChange: ct,
            onKeydown: q
          }), null, 16, ["id", "minlength", "maxlength", "type", "disabled", "readonly", "autocomplete", "tabindex", "aria-label", "placeholder", "form", "autofocus", "role", "onCompositionstart", "onCompositionupdate", "onCompositionend"]),
          j(" suffix slot "),
          c(we) ? (L(), x("span", {
            key: 1,
            class: z(c(v).e("suffix"))
          }, [
            $("span", {
              class: z(c(v).e("suffix-inner"))
            }, [
              !c(re) || !c(se) || !c(pe) ? (L(), x(ke, { key: 0 }, [
                Q(S.$slots, "suffix"),
                S.suffixIcon ? (L(), ee(c(Ke), {
                  key: 0,
                  class: z(c(v).e("icon"))
                }, {
                  default: W(() => [
                    (L(), ee(pt(S.suffixIcon)))
                  ]),
                  _: 1
                }, 8, ["class"])) : j("v-if", !0)
              ], 64)) : j("v-if", !0),
              c(re) ? (L(), ee(c(Ke), {
                key: 1,
                class: z([c(v).e("icon"), c(v).e("clear")]),
                onMousedown: Ve(c(Tn), ["prevent"]),
                onClick: ue
              }, {
                default: W(() => [
                  K(c(ea))
                ]),
                _: 1
              }, 8, ["class", "onMousedown"])) : j("v-if", !0),
              c(se) ? (L(), ee(c(Ke), {
                key: 2,
                class: z([c(v).e("icon"), c(v).e("password")]),
                onClick: U
              }, {
                default: W(() => [
                  (L(), ee(pt(c(Te))))
                ]),
                _: 1
              }, 8, ["class"])) : j("v-if", !0),
              c(pe) ? (L(), x("span", {
                key: 3,
                class: z(c(v).e("count"))
              }, [
                $("span", {
                  class: z(c(v).e("count-inner"))
                }, te(c(Ae)) + " / " + te(S.maxlength), 3)
              ], 2)) : j("v-if", !0),
              c(Z) && c(le) && c(G) ? (L(), ee(c(Ke), {
                key: 4,
                class: z([
                  c(v).e("icon"),
                  c(v).e("validateIcon"),
                  c(v).is("loading", c(Z) === "validating")
                ])
              }, {
                default: W(() => [
                  (L(), ee(pt(c(le))))
                ]),
                _: 1
              }, 8, ["class"])) : j("v-if", !0)
            ], 2)
          ], 2)) : j("v-if", !0)
        ], 2),
        j(" append slot "),
        S.$slots.append ? (L(), x("div", {
          key: 1,
          class: z(c(v).be("group", "append"))
        }, [
          Q(S.$slots, "append")
        ], 2)) : j("v-if", !0)
      ], 64)) : (L(), x(ke, { key: 1 }, [
        j(" textarea "),
        $("textarea", Nt({
          id: c(f),
          ref_key: "textarea",
          ref: p,
          class: [c(m).e("inner"), c(v).is("focus", c(H))]
        }, c(s), {
          minlength: S.minlength,
          maxlength: S.maxlength,
          tabindex: S.tabindex,
          disabled: c(h),
          readonly: S.readonly,
          autocomplete: S.autocomplete,
          style: c(M),
          "aria-label": S.ariaLabel,
          placeholder: S.placeholder,
          form: S.form,
          autofocus: S.autofocus,
          rows: S.rows,
          role: S.containerRole,
          onCompositionstart: c(dt),
          onCompositionupdate: c(ft),
          onCompositionend: c(B),
          onInput: mt,
          onFocus: c(V),
          onBlur: c(J),
          onChange: ct,
          onKeydown: q
        }), null, 16, ["id", "minlength", "maxlength", "tabindex", "disabled", "readonly", "autocomplete", "aria-label", "placeholder", "form", "autofocus", "rows", "role", "onCompositionstart", "onCompositionupdate", "onCompositionend", "onFocus", "onBlur"]),
        c(pe) ? (L(), x("span", {
          key: 0,
          style: Ye(w.value),
          class: z(c(v).e("count"))
        }, te(c(Ae)) + " / " + te(S.maxlength), 7)) : j("v-if", !0)
      ], 64))
    ], 38));
  }
});
var Sh = /* @__PURE__ */ ve(wh, [["__file", "input.vue"]]);
const Ch = Ot(Sh), Gn = 4, Eh = {
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
}, Th = ({
  move: e,
  size: t,
  bar: n
}) => ({
  [n.size]: t,
  transform: `translate${n.axis}(${e}%)`
}), na = Symbol("scrollbarContextKey"), Oh = me({
  vertical: Boolean,
  size: String,
  move: Number,
  ratio: {
    type: Number,
    required: !0
  },
  always: Boolean
}), Ih = "Thumb", kh = /* @__PURE__ */ Y({
  __name: "thumb",
  props: Oh,
  setup(e) {
    const t = e, n = ie(na), o = Ee("scrollbar");
    n || Zs(Ih, "can not inject scrollbar context");
    const r = P(), s = P(), a = P({}), l = P(!1);
    let i = !1, u = !1, d = Ne ? document.onselectstart : null;
    const f = O(() => Eh[t.vertical ? "vertical" : "horizontal"]), g = O(() => Th({
      size: t.size,
      move: t.move,
      bar: f.value
    })), h = O(() => r.value[f.value.offset] ** 2 / n.wrapElement[f.value.scrollSize] / t.ratio / s.value[f.value.offset]), v = (I) => {
      var E;
      if (I.stopPropagation(), I.ctrlKey || [1, 2].includes(I.button))
        return;
      (E = window.getSelection()) == null || E.removeAllRanges(), y(I);
      const H = I.currentTarget;
      H && (a.value[f.value.axis] = H[f.value.offset] - (I[f.value.client] - H.getBoundingClientRect()[f.value.direction]));
    }, m = (I) => {
      if (!s.value || !r.value || !n.wrapElement)
        return;
      const E = Math.abs(I.target.getBoundingClientRect()[f.value.direction] - I[f.value.client]), H = s.value[f.value.offset] / 2, V = (E - H) * 100 * h.value / r.value[f.value.offset];
      n.wrapElement[f.value.scroll] = V * n.wrapElement[f.value.scrollSize] / 100;
    }, y = (I) => {
      I.stopImmediatePropagation(), i = !0, document.addEventListener("mousemove", p), document.addEventListener("mouseup", _), d = document.onselectstart, document.onselectstart = () => !1;
    }, p = (I) => {
      if (!r.value || !s.value || i === !1)
        return;
      const E = a.value[f.value.axis];
      if (!E)
        return;
      const H = (r.value.getBoundingClientRect()[f.value.direction] - I[f.value.client]) * -1, V = s.value[f.value.offset] - E, J = (H - V) * 100 * h.value / r.value[f.value.offset];
      n.wrapElement[f.value.scroll] = J * n.wrapElement[f.value.scrollSize] / 100;
    }, _ = () => {
      i = !1, a.value[f.value.axis] = 0, document.removeEventListener("mousemove", p), document.removeEventListener("mouseup", _), T(), u && (l.value = !1);
    }, k = () => {
      u = !1, l.value = !!t.size;
    }, w = () => {
      u = !0, l.value = i;
    };
    Tt(() => {
      T(), document.removeEventListener("mouseup", _);
    });
    const T = () => {
      document.onselectstart !== d && (document.onselectstart = d);
    };
    return Lt(it(n, "scrollbarElement"), "mousemove", k), Lt(it(n, "scrollbarElement"), "mouseleave", w), (I, E) => (L(), ee(xn, {
      name: c(o).b("fade"),
      persisted: ""
    }, {
      default: W(() => [
        vt($("div", {
          ref_key: "instance",
          ref: r,
          class: z([c(o).e("bar"), c(o).is(c(f).key)]),
          onMousedown: m
        }, [
          $("div", {
            ref_key: "thumb",
            ref: s,
            class: z(c(o).e("thumb")),
            style: Ye(c(g)),
            onMousedown: v
          }, null, 38)
        ], 34), [
          [Yt, I.always || l.value]
        ])
      ]),
      _: 1
    }, 8, ["name"]));
  }
});
var Il = /* @__PURE__ */ ve(kh, [["__file", "thumb.vue"]]);
const Lh = me({
  always: {
    type: Boolean,
    default: !0
  },
  minSize: {
    type: Number,
    required: !0
  }
}), Ah = /* @__PURE__ */ Y({
  __name: "bar",
  props: Lh,
  setup(e, { expose: t }) {
    const n = e, o = ie(na), r = P(0), s = P(0), a = P(""), l = P(""), i = P(1), u = P(1);
    return t({
      handleScroll: (g) => {
        if (g) {
          const h = g.offsetHeight - Gn, v = g.offsetWidth - Gn;
          s.value = g.scrollTop * 100 / h * i.value, r.value = g.scrollLeft * 100 / v * u.value;
        }
      },
      update: () => {
        const g = o?.wrapElement;
        if (!g)
          return;
        const h = g.offsetHeight - Gn, v = g.offsetWidth - Gn, m = h ** 2 / g.scrollHeight, y = v ** 2 / g.scrollWidth, p = Math.max(m, n.minSize), _ = Math.max(y, n.minSize);
        i.value = m / (h - m) / (p / (h - p)), u.value = y / (v - y) / (_ / (v - _)), l.value = p + Gn < h ? `${p}px` : "", a.value = _ + Gn < v ? `${_}px` : "";
      }
    }), (g, h) => (L(), x(ke, null, [
      K(Il, {
        move: r.value,
        ratio: u.value,
        size: a.value,
        always: g.always
      }, null, 8, ["move", "ratio", "size", "always"]),
      K(Il, {
        move: s.value,
        ratio: i.value,
        size: l.value,
        vertical: "",
        always: g.always
      }, null, 8, ["move", "ratio", "size", "always"])
    ], 64));
  }
});
var Nh = /* @__PURE__ */ ve(Ah, [["__file", "bar.vue"]]);
const $h = me({
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
    type: oe([String, Object, Array]),
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
  ...fo(["ariaLabel", "ariaOrientation"])
}), Ph = {
  scroll: ({
    scrollTop: e,
    scrollLeft: t
  }) => [e, t].every(Oe)
}, Rh = "ElScrollbar", Mh = Y({
  name: Rh
}), Fh = /* @__PURE__ */ Y({
  ...Mh,
  props: $h,
  emits: Ph,
  setup(e, { expose: t, emit: n }) {
    const o = e, r = Ee("scrollbar");
    let s, a, l = 0, i = 0;
    const u = P(), d = P(), f = P(), g = P(), h = O(() => {
      const T = {};
      return o.height && (T.height = pn(o.height)), o.maxHeight && (T.maxHeight = pn(o.maxHeight)), [o.wrapStyle, T];
    }), v = O(() => [
      o.wrapClass,
      r.e("wrap"),
      { [r.em("wrap", "hidden-default")]: !o.native }
    ]), m = O(() => [r.e("view"), o.viewClass]), y = () => {
      var T;
      d.value && ((T = g.value) == null || T.handleScroll(d.value), l = d.value.scrollTop, i = d.value.scrollLeft, n("scroll", {
        scrollTop: d.value.scrollTop,
        scrollLeft: d.value.scrollLeft
      }));
    };
    function p(T, I) {
      kt(T) ? d.value.scrollTo(T) : Oe(T) && Oe(I) && d.value.scrollTo(T, I);
    }
    const _ = (T) => {
      Oe(T) && (d.value.scrollTop = T);
    }, k = (T) => {
      Oe(T) && (d.value.scrollLeft = T);
    }, w = () => {
      var T;
      (T = g.value) == null || T.update();
    };
    return ae(() => o.noresize, (T) => {
      T ? (s?.(), a?.()) : ({ stop: s } = Ht(f, w), a = Lt("resize", w));
    }, { immediate: !0 }), ae(() => [o.maxHeight, o.height], () => {
      o.native || xe(() => {
        var T;
        w(), d.value && ((T = g.value) == null || T.handleScroll(d.value));
      });
    }), Qe(na, On({
      scrollbarElement: u,
      wrapElement: d
    })), Od(() => {
      d.value && (d.value.scrollTop = l, d.value.scrollLeft = i);
    }), Me(() => {
      o.native || xe(() => {
        w();
      });
    }), Bi(() => w()), t({
      wrapRef: d,
      update: w,
      scrollTo: p,
      setScrollTop: _,
      setScrollLeft: k,
      handleScroll: y
    }), (T, I) => (L(), x("div", {
      ref_key: "scrollbarRef",
      ref: u,
      class: z(c(r).b())
    }, [
      $("div", {
        ref_key: "wrapRef",
        ref: d,
        class: z(c(v)),
        style: Ye(c(h)),
        tabindex: T.tabindex,
        onScroll: y
      }, [
        (L(), ee(pt(T.tag), {
          id: T.id,
          ref_key: "resizeRef",
          ref: f,
          class: z(c(m)),
          style: Ye(T.viewStyle),
          role: T.role,
          "aria-label": T.ariaLabel,
          "aria-orientation": T.ariaOrientation
        }, {
          default: W(() => [
            Q(T.$slots, "default")
          ]),
          _: 3
        }, 8, ["id", "class", "style", "role", "aria-label", "aria-orientation"]))
      ], 46, ["tabindex"]),
      T.native ? j("v-if", !0) : (L(), ee(Nh, {
        key: 0,
        ref_key: "barRef",
        ref: g,
        always: T.always,
        "min-size": T.minSize
      }, null, 8, ["always", "min-size"]))
    ], 2));
  }
});
var Dh = /* @__PURE__ */ ve(Fh, [["__file", "scrollbar.vue"]]);
const ku = Ot(Dh), oa = Symbol("popper"), Lu = Symbol("popperContent"), Au = [
  "dialog",
  "grid",
  "group",
  "listbox",
  "menu",
  "navigation",
  "tooltip",
  "tree"
], Nu = me({
  role: {
    type: String,
    values: Au,
    default: "tooltip"
  }
}), Bh = Y({
  name: "ElPopper",
  inheritAttrs: !1
}), Vh = /* @__PURE__ */ Y({
  ...Bh,
  props: Nu,
  setup(e, { expose: t }) {
    const n = e, o = P(), r = P(), s = P(), a = P(), l = O(() => n.role), i = {
      triggerRef: o,
      popperInstanceRef: r,
      contentRef: s,
      referenceRef: a,
      role: l
    };
    return t(i), Qe(oa, i), (u, d) => Q(u.$slots, "default");
  }
});
var xh = /* @__PURE__ */ ve(Vh, [["__file", "popper.vue"]]);
const $u = me({
  arrowOffset: {
    type: Number,
    default: 5
  }
}), zh = Y({
  name: "ElPopperArrow",
  inheritAttrs: !1
}), Hh = /* @__PURE__ */ Y({
  ...zh,
  props: $u,
  setup(e, { expose: t }) {
    const n = e, o = Ee("popper"), { arrowOffset: r, arrowRef: s, arrowStyle: a } = ie(Lu, void 0);
    return ae(() => n.arrowOffset, (l) => {
      r.value = l;
    }), Tt(() => {
      s.value = void 0;
    }), t({
      arrowRef: s
    }), (l, i) => (L(), x("span", {
      ref_key: "arrowRef",
      ref: s,
      class: z(c(o).e("arrow")),
      style: Ye(c(a)),
      "data-popper-arrow": ""
    }, null, 6));
  }
});
var Wh = /* @__PURE__ */ ve(Hh, [["__file", "arrow.vue"]]);
const Pu = me({
  virtualRef: {
    type: oe(Object)
  },
  virtualTriggering: Boolean,
  onMouseenter: {
    type: oe(Function)
  },
  onMouseleave: {
    type: oe(Function)
  },
  onClick: {
    type: oe(Function)
  },
  onKeydown: {
    type: oe(Function)
  },
  onFocus: {
    type: oe(Function)
  },
  onBlur: {
    type: oe(Function)
  },
  onContextmenu: {
    type: oe(Function)
  },
  id: String,
  open: Boolean
}), Ru = Symbol("elForwardRef"), Uh = (e) => {
  Qe(Ru, {
    setForwardRef: (n) => {
      e.value = n;
    }
  });
}, jh = (e) => ({
  mounted(t) {
    e(t);
  },
  updated(t) {
    e(t);
  },
  unmounted() {
    e(null);
  }
}), _s = (e) => {
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
}, Gh = "ElOnlyChild", Mu = Y({
  name: Gh,
  setup(e, {
    slots: t,
    attrs: n
  }) {
    var o;
    const r = ie(Ru), s = jh((o = r?.setForwardRef) != null ? o : Tn);
    return () => {
      var a;
      const l = (a = t.default) == null ? void 0 : a.call(t, n);
      if (!l || l.length > 1)
        return null;
      const i = Fu(l);
      return i ? vt(Id(i, n), [[s]]) : null;
    };
  }
});
function Fu(e) {
  if (!e)
    return null;
  const t = e;
  for (const n of t) {
    if (kt(n))
      switch (n.type) {
        case kd:
          continue;
        case Vs:
        case "svg":
          return kl(n);
        case ke:
          return Fu(n.children);
        default:
          return n;
      }
    return kl(n);
  }
  return null;
}
function kl(e) {
  const t = Ee("only-child");
  return K("span", {
    class: t.e("content")
  }, [e]);
}
const Kh = Y({
  name: "ElPopperTrigger",
  inheritAttrs: !1
}), Yh = /* @__PURE__ */ Y({
  ...Kh,
  props: Pu,
  setup(e, { expose: t }) {
    const n = e, { role: o, triggerRef: r } = ie(oa, void 0);
    Uh(r);
    const s = O(() => l.value ? n.id : void 0), a = O(() => {
      if (o && o.value === "tooltip")
        return n.open && n.id ? n.id : void 0;
    }), l = O(() => {
      if (o && o.value !== "tooltip")
        return o.value;
    }), i = O(() => l.value ? `${n.open}` : void 0);
    let u;
    const d = [
      "onMouseenter",
      "onMouseleave",
      "onClick",
      "onKeydown",
      "onFocus",
      "onBlur",
      "onContextmenu"
    ];
    return Me(() => {
      ae(() => n.virtualRef, (f) => {
        f && (r.value = sn(f));
      }, {
        immediate: !0
      }), ae(r, (f, g) => {
        u?.(), u = void 0, Bt(f) && (d.forEach((h) => {
          var v;
          const m = n[h];
          m && (f.addEventListener(h.slice(2).toLowerCase(), m), (v = g?.removeEventListener) == null || v.call(g, h.slice(2).toLowerCase(), m));
        }), _s(f) && (u = ae([s, a, l, i], (h) => {
          [
            "aria-controls",
            "aria-describedby",
            "aria-haspopup",
            "aria-expanded"
          ].forEach((v, m) => {
            cn(h[m]) ? f.removeAttribute(v) : f.setAttribute(v, h[m]);
          });
        }, { immediate: !0 }))), Bt(g) && _s(g) && [
          "aria-controls",
          "aria-describedby",
          "aria-haspopup",
          "aria-expanded"
        ].forEach((h) => g.removeAttribute(h));
      }, {
        immediate: !0
      });
    }), Tt(() => {
      if (u?.(), u = void 0, r.value && Bt(r.value)) {
        const f = r.value;
        d.forEach((g) => {
          const h = n[g];
          h && f.removeEventListener(g.slice(2).toLowerCase(), h);
        }), r.value = void 0;
      }
    }), t({
      triggerRef: r
    }), (f, g) => f.virtualTriggering ? j("v-if", !0) : (L(), ee(c(Mu), Nt({ key: 0 }, f.$attrs, {
      "aria-controls": c(s),
      "aria-describedby": c(a),
      "aria-expanded": c(i),
      "aria-haspopup": c(l)
    }), {
      default: W(() => [
        Q(f.$slots, "default")
      ]),
      _: 3
    }, 16, ["aria-controls", "aria-describedby", "aria-expanded", "aria-haspopup"]));
  }
});
var qh = /* @__PURE__ */ ve(Yh, [["__file", "trigger.vue"]]);
const ns = "focus-trap.focus-after-trapped", os = "focus-trap.focus-after-released", Xh = "focus-trap.focusout-prevented", Ll = {
  cancelable: !0,
  bubbles: !1
}, Zh = {
  cancelable: !0,
  bubbles: !1
}, Al = "focusAfterTrapped", Nl = "focusAfterReleased", ra = Symbol("elFocusTrap"), sa = P(), zr = P(0), aa = P(0);
let Yo = 0;
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
}, $l = (e, t) => {
  for (const n of e)
    if (!Jh(n, t))
      return n;
}, Jh = (e, t) => {
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
}, Qh = (e) => {
  const t = Du(e), n = $l(t, e), o = $l(t.reverse(), e);
  return [n, o];
}, e0 = (e) => e instanceof HTMLInputElement && "select" in e, tn = (e, t) => {
  if (e && e.focus) {
    const n = document.activeElement;
    let o = !1;
    Bt(e) && !_s(e) && !e.getAttribute("tabindex") && (e.setAttribute("tabindex", "-1"), o = !0), e.focus({ preventScroll: !0 }), aa.value = window.performance.now(), e !== n && e0(e) && t && e.select(), Bt(e) && o && e.removeAttribute("tabindex");
  }
};
function Pl(e, t) {
  const n = [...e], o = e.indexOf(t);
  return o !== -1 && n.splice(o, 1), n;
}
const t0 = () => {
  let e = [];
  return {
    push: (o) => {
      const r = e[0];
      r && o !== r && r.pause(), e = Pl(e, o), e.unshift(o);
    },
    remove: (o) => {
      var r, s;
      e = Pl(e, o), (s = (r = e[0]) == null ? void 0 : r.resume) == null || s.call(r);
    }
  };
}, n0 = (e, t = !1) => {
  const n = document.activeElement;
  for (const o of e)
    if (tn(o, t), document.activeElement !== n)
      return;
}, Rl = t0(), o0 = () => zr.value > aa.value, qo = () => {
  sa.value = "pointer", zr.value = window.performance.now();
}, Ml = () => {
  sa.value = "keyboard", zr.value = window.performance.now();
}, r0 = () => (Me(() => {
  Yo === 0 && (document.addEventListener("mousedown", qo), document.addEventListener("touchstart", qo), document.addEventListener("keydown", Ml)), Yo++;
}), Tt(() => {
  Yo--, Yo <= 0 && (document.removeEventListener("mousedown", qo), document.removeEventListener("touchstart", qo), document.removeEventListener("keydown", Ml));
}), {
  focusReason: sa,
  lastUserFocusTimestamp: zr,
  lastAutomatedFocusTimestamp: aa
}), Xo = (e) => new CustomEvent(Xh, {
  ...Zh,
  detail: e
}), Le = {
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
let qn = [];
const Fl = (e) => {
  e.code === Le.esc && qn.forEach((t) => t(e));
}, s0 = (e) => {
  Me(() => {
    qn.length === 0 && document.addEventListener("keydown", Fl), Ne && qn.push(e);
  }), Tt(() => {
    qn = qn.filter((t) => t !== e), qn.length === 0 && Ne && document.removeEventListener("keydown", Fl);
  });
}, a0 = Y({
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
    Al,
    Nl,
    "focusin",
    "focusout",
    "focusout-prevented",
    "release-requested"
  ],
  setup(e, { emit: t }) {
    const n = P();
    let o, r;
    const { focusReason: s } = r0();
    s0((v) => {
      e.trapped && !a.paused && t("release-requested", v);
    });
    const a = {
      paused: !1,
      pause() {
        this.paused = !0;
      },
      resume() {
        this.paused = !1;
      }
    }, l = (v) => {
      if (!e.loop && !e.trapped || a.paused)
        return;
      const { code: m, altKey: y, ctrlKey: p, metaKey: _, currentTarget: k, shiftKey: w } = v, { loop: T } = e, I = m === Le.tab && !y && !p && !_, E = document.activeElement;
      if (I && E) {
        const H = k, [V, J] = Qh(H);
        if (V && J) {
          if (!w && E === J) {
            const Z = Xo({
              focusReason: s.value
            });
            t("focusout-prevented", Z), Z.defaultPrevented || (v.preventDefault(), T && tn(V, !0));
          } else if (w && [V, H].includes(E)) {
            const Z = Xo({
              focusReason: s.value
            });
            t("focusout-prevented", Z), Z.defaultPrevented || (v.preventDefault(), T && tn(J, !0));
          }
        } else if (E === H) {
          const Z = Xo({
            focusReason: s.value
          });
          t("focusout-prevented", Z), Z.defaultPrevented || v.preventDefault();
        }
      }
    };
    Qe(ra, {
      focusTrapRef: n,
      onKeydown: l
    }), ae(() => e.focusTrapEl, (v) => {
      v && (n.value = v);
    }, { immediate: !0 }), ae([n], ([v], [m]) => {
      v && (v.addEventListener("keydown", l), v.addEventListener("focusin", d), v.addEventListener("focusout", f)), m && (m.removeEventListener("keydown", l), m.removeEventListener("focusin", d), m.removeEventListener("focusout", f));
    });
    const i = (v) => {
      t(Al, v);
    }, u = (v) => t(Nl, v), d = (v) => {
      const m = c(n);
      if (!m)
        return;
      const y = v.target, p = v.relatedTarget, _ = y && m.contains(y);
      e.trapped || p && m.contains(p) || (o = p), _ && t("focusin", v), !a.paused && e.trapped && (_ ? r = y : tn(r, !0));
    }, f = (v) => {
      const m = c(n);
      if (!(a.paused || !m))
        if (e.trapped) {
          const y = v.relatedTarget;
          !cn(y) && !m.contains(y) && setTimeout(() => {
            if (!a.paused && e.trapped) {
              const p = Xo({
                focusReason: s.value
              });
              t("focusout-prevented", p), p.defaultPrevented || tn(r, !0);
            }
          }, 0);
        } else {
          const y = v.target;
          y && m.contains(y) || t("focusout", v);
        }
    };
    async function g() {
      await xe();
      const v = c(n);
      if (v) {
        Rl.push(a);
        const m = v.contains(document.activeElement) ? o : document.activeElement;
        if (o = m, !v.contains(m)) {
          const p = new Event(ns, Ll);
          v.addEventListener(ns, i), v.dispatchEvent(p), p.defaultPrevented || xe(() => {
            let _ = e.focusStartEl;
            Ct(_) || (tn(_), document.activeElement !== _ && (_ = "first")), _ === "first" && n0(Du(v), !0), (document.activeElement === m || _ === "container") && tn(v);
          });
        }
      }
    }
    function h() {
      const v = c(n);
      if (v) {
        v.removeEventListener(ns, i);
        const m = new CustomEvent(os, {
          ...Ll,
          detail: {
            focusReason: s.value
          }
        });
        v.addEventListener(os, u), v.dispatchEvent(m), !m.defaultPrevented && (s.value == "keyboard" || !o0() || v.contains(document.activeElement)) && tn(o ?? document.body), v.removeEventListener(os, u), Rl.remove(a);
      }
    }
    return Me(() => {
      e.trapped && g(), ae(() => e.trapped, (v) => {
        v ? g() : h();
      });
    }), Tt(() => {
      e.trapped && h(), n.value && (n.value.removeEventListener("keydown", l), n.value.removeEventListener("focusin", d), n.value.removeEventListener("focusout", f), n.value = void 0);
    }), {
      onKeydown: l
    };
  }
});
function l0(e, t, n, o, r, s) {
  return Q(e.$slots, "default", { handleKeydown: e.onKeydown });
}
var Bu = /* @__PURE__ */ ve(a0, [["render", l0], ["__file", "focus-trap.vue"]]), ht = "top", $t = "bottom", Pt = "right", yt = "left", la = "auto", xo = [ht, $t, Pt, yt], to = "start", Lo = "end", i0 = "clippingParents", Vu = "viewport", go = "popper", u0 = "reference", Dl = xo.reduce(function(e, t) {
  return e.concat([t + "-" + to, t + "-" + Lo]);
}, []), Hr = [].concat(xo, [la]).reduce(function(e, t) {
  return e.concat([t, t + "-" + to, t + "-" + Lo]);
}, []), c0 = "beforeRead", d0 = "read", f0 = "afterRead", p0 = "beforeMain", v0 = "main", m0 = "afterMain", g0 = "beforeWrite", h0 = "write", y0 = "afterWrite", b0 = [c0, d0, f0, p0, v0, m0, g0, h0, y0];
function Zt(e) {
  return e ? (e.nodeName || "").toLowerCase() : null;
}
function Et(e) {
  if (e == null) return window;
  if (e.toString() !== "[object Window]") {
    var t = e.ownerDocument;
    return t && t.defaultView || window;
  }
  return e;
}
function Vn(e) {
  var t = Et(e).Element;
  return e instanceof t || e instanceof Element;
}
function At(e) {
  var t = Et(e).HTMLElement;
  return e instanceof t || e instanceof HTMLElement;
}
function ia(e) {
  if (typeof ShadowRoot > "u") return !1;
  var t = Et(e).ShadowRoot;
  return e instanceof t || e instanceof ShadowRoot;
}
function _0(e) {
  var t = e.state;
  Object.keys(t.elements).forEach(function(n) {
    var o = t.styles[n] || {}, r = t.attributes[n] || {}, s = t.elements[n];
    !At(s) || !Zt(s) || (Object.assign(s.style, o), Object.keys(r).forEach(function(a) {
      var l = r[a];
      l === !1 ? s.removeAttribute(a) : s.setAttribute(a, l === !0 ? "" : l);
    }));
  });
}
function w0(e) {
  var t = e.state, n = { popper: { position: t.options.strategy, left: "0", top: "0", margin: "0" }, arrow: { position: "absolute" }, reference: {} };
  return Object.assign(t.elements.popper.style, n.popper), t.styles = n, t.elements.arrow && Object.assign(t.elements.arrow.style, n.arrow), function() {
    Object.keys(t.elements).forEach(function(o) {
      var r = t.elements[o], s = t.attributes[o] || {}, a = Object.keys(t.styles.hasOwnProperty(o) ? t.styles[o] : n[o]), l = a.reduce(function(i, u) {
        return i[u] = "", i;
      }, {});
      !At(r) || !Zt(r) || (Object.assign(r.style, l), Object.keys(s).forEach(function(i) {
        r.removeAttribute(i);
      }));
    });
  };
}
var xu = { name: "applyStyles", enabled: !0, phase: "write", fn: _0, effect: w0, requires: ["computeStyles"] };
function Gt(e) {
  return e.split("-")[0];
}
var Dn = Math.max, Tr = Math.min, no = Math.round;
function ws() {
  var e = navigator.userAgentData;
  return e != null && e.brands && Array.isArray(e.brands) ? e.brands.map(function(t) {
    return t.brand + "/" + t.version;
  }).join(" ") : navigator.userAgent;
}
function zu() {
  return !/^((?!chrome|android).)*safari/i.test(ws());
}
function oo(e, t, n) {
  t === void 0 && (t = !1), n === void 0 && (n = !1);
  var o = e.getBoundingClientRect(), r = 1, s = 1;
  t && At(e) && (r = e.offsetWidth > 0 && no(o.width) / e.offsetWidth || 1, s = e.offsetHeight > 0 && no(o.height) / e.offsetHeight || 1);
  var a = Vn(e) ? Et(e) : window, l = a.visualViewport, i = !zu() && n, u = (o.left + (i && l ? l.offsetLeft : 0)) / r, d = (o.top + (i && l ? l.offsetTop : 0)) / s, f = o.width / r, g = o.height / s;
  return { width: f, height: g, top: d, right: u + f, bottom: d + g, left: u, x: u, y: d };
}
function ua(e) {
  var t = oo(e), n = e.offsetWidth, o = e.offsetHeight;
  return Math.abs(t.width - n) <= 1 && (n = t.width), Math.abs(t.height - o) <= 1 && (o = t.height), { x: e.offsetLeft, y: e.offsetTop, width: n, height: o };
}
function Hu(e, t) {
  var n = t.getRootNode && t.getRootNode();
  if (e.contains(t)) return !0;
  if (n && ia(n)) {
    var o = t;
    do {
      if (o && e.isSameNode(o)) return !0;
      o = o.parentNode || o.host;
    } while (o);
  }
  return !1;
}
function vn(e) {
  return Et(e).getComputedStyle(e);
}
function S0(e) {
  return ["table", "td", "th"].indexOf(Zt(e)) >= 0;
}
function Ln(e) {
  return ((Vn(e) ? e.ownerDocument : e.document) || window.document).documentElement;
}
function Wr(e) {
  return Zt(e) === "html" ? e : e.assignedSlot || e.parentNode || (ia(e) ? e.host : null) || Ln(e);
}
function Bl(e) {
  return !At(e) || vn(e).position === "fixed" ? null : e.offsetParent;
}
function C0(e) {
  var t = /firefox/i.test(ws()), n = /Trident/i.test(ws());
  if (n && At(e)) {
    var o = vn(e);
    if (o.position === "fixed") return null;
  }
  var r = Wr(e);
  for (ia(r) && (r = r.host); At(r) && ["html", "body"].indexOf(Zt(r)) < 0; ) {
    var s = vn(r);
    if (s.transform !== "none" || s.perspective !== "none" || s.contain === "paint" || ["transform", "perspective"].indexOf(s.willChange) !== -1 || t && s.willChange === "filter" || t && s.filter && s.filter !== "none") return r;
    r = r.parentNode;
  }
  return null;
}
function zo(e) {
  for (var t = Et(e), n = Bl(e); n && S0(n) && vn(n).position === "static"; ) n = Bl(n);
  return n && (Zt(n) === "html" || Zt(n) === "body" && vn(n).position === "static") ? t : n || C0(e) || t;
}
function ca(e) {
  return ["top", "bottom"].indexOf(e) >= 0 ? "x" : "y";
}
function So(e, t, n) {
  return Dn(e, Tr(t, n));
}
function E0(e, t, n) {
  var o = So(e, t, n);
  return o > n ? n : o;
}
function Wu() {
  return { top: 0, right: 0, bottom: 0, left: 0 };
}
function Uu(e) {
  return Object.assign({}, Wu(), e);
}
function ju(e, t) {
  return t.reduce(function(n, o) {
    return n[o] = e, n;
  }, {});
}
var T0 = function(e, t) {
  return e = typeof e == "function" ? e(Object.assign({}, t.rects, { placement: t.placement })) : e, Uu(typeof e != "number" ? e : ju(e, xo));
};
function O0(e) {
  var t, n = e.state, o = e.name, r = e.options, s = n.elements.arrow, a = n.modifiersData.popperOffsets, l = Gt(n.placement), i = ca(l), u = [yt, Pt].indexOf(l) >= 0, d = u ? "height" : "width";
  if (!(!s || !a)) {
    var f = T0(r.padding, n), g = ua(s), h = i === "y" ? ht : yt, v = i === "y" ? $t : Pt, m = n.rects.reference[d] + n.rects.reference[i] - a[i] - n.rects.popper[d], y = a[i] - n.rects.reference[i], p = zo(s), _ = p ? i === "y" ? p.clientHeight || 0 : p.clientWidth || 0 : 0, k = m / 2 - y / 2, w = f[h], T = _ - g[d] - f[v], I = _ / 2 - g[d] / 2 + k, E = So(w, I, T), H = i;
    n.modifiersData[o] = (t = {}, t[H] = E, t.centerOffset = E - I, t);
  }
}
function I0(e) {
  var t = e.state, n = e.options, o = n.element, r = o === void 0 ? "[data-popper-arrow]" : o;
  r != null && (typeof r == "string" && (r = t.elements.popper.querySelector(r), !r) || Hu(t.elements.popper, r) && (t.elements.arrow = r));
}
var k0 = { name: "arrow", enabled: !0, phase: "main", fn: O0, effect: I0, requires: ["popperOffsets"], requiresIfExists: ["preventOverflow"] };
function ro(e) {
  return e.split("-")[1];
}
var L0 = { top: "auto", right: "auto", bottom: "auto", left: "auto" };
function A0(e, t) {
  var n = e.x, o = e.y, r = t.devicePixelRatio || 1;
  return { x: no(n * r) / r || 0, y: no(o * r) / r || 0 };
}
function Vl(e) {
  var t, n = e.popper, o = e.popperRect, r = e.placement, s = e.variation, a = e.offsets, l = e.position, i = e.gpuAcceleration, u = e.adaptive, d = e.roundOffsets, f = e.isFixed, g = a.x, h = g === void 0 ? 0 : g, v = a.y, m = v === void 0 ? 0 : v, y = typeof d == "function" ? d({ x: h, y: m }) : { x: h, y: m };
  h = y.x, m = y.y;
  var p = a.hasOwnProperty("x"), _ = a.hasOwnProperty("y"), k = yt, w = ht, T = window;
  if (u) {
    var I = zo(n), E = "clientHeight", H = "clientWidth";
    if (I === Et(n) && (I = Ln(n), vn(I).position !== "static" && l === "absolute" && (E = "scrollHeight", H = "scrollWidth")), I = I, r === ht || (r === yt || r === Pt) && s === Lo) {
      w = $t;
      var V = f && I === T && T.visualViewport ? T.visualViewport.height : I[E];
      m -= V - o.height, m *= i ? 1 : -1;
    }
    if (r === yt || (r === ht || r === $t) && s === Lo) {
      k = Pt;
      var J = f && I === T && T.visualViewport ? T.visualViewport.width : I[H];
      h -= J - o.width, h *= i ? 1 : -1;
    }
  }
  var G = Object.assign({ position: l }, u && L0), Z = d === !0 ? A0({ x: h, y: m }, Et(n)) : { x: h, y: m };
  if (h = Z.x, m = Z.y, i) {
    var le;
    return Object.assign({}, G, (le = {}, le[w] = _ ? "0" : "", le[k] = p ? "0" : "", le.transform = (T.devicePixelRatio || 1) <= 1 ? "translate(" + h + "px, " + m + "px)" : "translate3d(" + h + "px, " + m + "px, 0)", le));
  }
  return Object.assign({}, G, (t = {}, t[w] = _ ? m + "px" : "", t[k] = p ? h + "px" : "", t.transform = "", t));
}
function N0(e) {
  var t = e.state, n = e.options, o = n.gpuAcceleration, r = o === void 0 ? !0 : o, s = n.adaptive, a = s === void 0 ? !0 : s, l = n.roundOffsets, i = l === void 0 ? !0 : l, u = { placement: Gt(t.placement), variation: ro(t.placement), popper: t.elements.popper, popperRect: t.rects.popper, gpuAcceleration: r, isFixed: t.options.strategy === "fixed" };
  t.modifiersData.popperOffsets != null && (t.styles.popper = Object.assign({}, t.styles.popper, Vl(Object.assign({}, u, { offsets: t.modifiersData.popperOffsets, position: t.options.strategy, adaptive: a, roundOffsets: i })))), t.modifiersData.arrow != null && (t.styles.arrow = Object.assign({}, t.styles.arrow, Vl(Object.assign({}, u, { offsets: t.modifiersData.arrow, position: "absolute", adaptive: !1, roundOffsets: i })))), t.attributes.popper = Object.assign({}, t.attributes.popper, { "data-popper-placement": t.placement });
}
var Gu = { name: "computeStyles", enabled: !0, phase: "beforeWrite", fn: N0, data: {} }, Zo = { passive: !0 };
function $0(e) {
  var t = e.state, n = e.instance, o = e.options, r = o.scroll, s = r === void 0 ? !0 : r, a = o.resize, l = a === void 0 ? !0 : a, i = Et(t.elements.popper), u = [].concat(t.scrollParents.reference, t.scrollParents.popper);
  return s && u.forEach(function(d) {
    d.addEventListener("scroll", n.update, Zo);
  }), l && i.addEventListener("resize", n.update, Zo), function() {
    s && u.forEach(function(d) {
      d.removeEventListener("scroll", n.update, Zo);
    }), l && i.removeEventListener("resize", n.update, Zo);
  };
}
var Ku = { name: "eventListeners", enabled: !0, phase: "write", fn: function() {
}, effect: $0, data: {} }, P0 = { left: "right", right: "left", bottom: "top", top: "bottom" };
function ar(e) {
  return e.replace(/left|right|bottom|top/g, function(t) {
    return P0[t];
  });
}
var R0 = { start: "end", end: "start" };
function xl(e) {
  return e.replace(/start|end/g, function(t) {
    return R0[t];
  });
}
function da(e) {
  var t = Et(e), n = t.pageXOffset, o = t.pageYOffset;
  return { scrollLeft: n, scrollTop: o };
}
function fa(e) {
  return oo(Ln(e)).left + da(e).scrollLeft;
}
function M0(e, t) {
  var n = Et(e), o = Ln(e), r = n.visualViewport, s = o.clientWidth, a = o.clientHeight, l = 0, i = 0;
  if (r) {
    s = r.width, a = r.height;
    var u = zu();
    (u || !u && t === "fixed") && (l = r.offsetLeft, i = r.offsetTop);
  }
  return { width: s, height: a, x: l + fa(e), y: i };
}
function F0(e) {
  var t, n = Ln(e), o = da(e), r = (t = e.ownerDocument) == null ? void 0 : t.body, s = Dn(n.scrollWidth, n.clientWidth, r ? r.scrollWidth : 0, r ? r.clientWidth : 0), a = Dn(n.scrollHeight, n.clientHeight, r ? r.scrollHeight : 0, r ? r.clientHeight : 0), l = -o.scrollLeft + fa(e), i = -o.scrollTop;
  return vn(r || n).direction === "rtl" && (l += Dn(n.clientWidth, r ? r.clientWidth : 0) - s), { width: s, height: a, x: l, y: i };
}
function pa(e) {
  var t = vn(e), n = t.overflow, o = t.overflowX, r = t.overflowY;
  return /auto|scroll|overlay|hidden/.test(n + r + o);
}
function Yu(e) {
  return ["html", "body", "#document"].indexOf(Zt(e)) >= 0 ? e.ownerDocument.body : At(e) && pa(e) ? e : Yu(Wr(e));
}
function Co(e, t) {
  var n;
  t === void 0 && (t = []);
  var o = Yu(e), r = o === ((n = e.ownerDocument) == null ? void 0 : n.body), s = Et(o), a = r ? [s].concat(s.visualViewport || [], pa(o) ? o : []) : o, l = t.concat(a);
  return r ? l : l.concat(Co(Wr(a)));
}
function Ss(e) {
  return Object.assign({}, e, { left: e.x, top: e.y, right: e.x + e.width, bottom: e.y + e.height });
}
function D0(e, t) {
  var n = oo(e, !1, t === "fixed");
  return n.top = n.top + e.clientTop, n.left = n.left + e.clientLeft, n.bottom = n.top + e.clientHeight, n.right = n.left + e.clientWidth, n.width = e.clientWidth, n.height = e.clientHeight, n.x = n.left, n.y = n.top, n;
}
function zl(e, t, n) {
  return t === Vu ? Ss(M0(e, n)) : Vn(t) ? D0(t, n) : Ss(F0(Ln(e)));
}
function B0(e) {
  var t = Co(Wr(e)), n = ["absolute", "fixed"].indexOf(vn(e).position) >= 0, o = n && At(e) ? zo(e) : e;
  return Vn(o) ? t.filter(function(r) {
    return Vn(r) && Hu(r, o) && Zt(r) !== "body";
  }) : [];
}
function V0(e, t, n, o) {
  var r = t === "clippingParents" ? B0(e) : [].concat(t), s = [].concat(r, [n]), a = s[0], l = s.reduce(function(i, u) {
    var d = zl(e, u, o);
    return i.top = Dn(d.top, i.top), i.right = Tr(d.right, i.right), i.bottom = Tr(d.bottom, i.bottom), i.left = Dn(d.left, i.left), i;
  }, zl(e, a, o));
  return l.width = l.right - l.left, l.height = l.bottom - l.top, l.x = l.left, l.y = l.top, l;
}
function qu(e) {
  var t = e.reference, n = e.element, o = e.placement, r = o ? Gt(o) : null, s = o ? ro(o) : null, a = t.x + t.width / 2 - n.width / 2, l = t.y + t.height / 2 - n.height / 2, i;
  switch (r) {
    case ht:
      i = { x: a, y: t.y - n.height };
      break;
    case $t:
      i = { x: a, y: t.y + t.height };
      break;
    case Pt:
      i = { x: t.x + t.width, y: l };
      break;
    case yt:
      i = { x: t.x - n.width, y: l };
      break;
    default:
      i = { x: t.x, y: t.y };
  }
  var u = r ? ca(r) : null;
  if (u != null) {
    var d = u === "y" ? "height" : "width";
    switch (s) {
      case to:
        i[u] = i[u] - (t[d] / 2 - n[d] / 2);
        break;
      case Lo:
        i[u] = i[u] + (t[d] / 2 - n[d] / 2);
        break;
    }
  }
  return i;
}
function Ao(e, t) {
  t === void 0 && (t = {});
  var n = t, o = n.placement, r = o === void 0 ? e.placement : o, s = n.strategy, a = s === void 0 ? e.strategy : s, l = n.boundary, i = l === void 0 ? i0 : l, u = n.rootBoundary, d = u === void 0 ? Vu : u, f = n.elementContext, g = f === void 0 ? go : f, h = n.altBoundary, v = h === void 0 ? !1 : h, m = n.padding, y = m === void 0 ? 0 : m, p = Uu(typeof y != "number" ? y : ju(y, xo)), _ = g === go ? u0 : go, k = e.rects.popper, w = e.elements[v ? _ : g], T = V0(Vn(w) ? w : w.contextElement || Ln(e.elements.popper), i, d, a), I = oo(e.elements.reference), E = qu({ reference: I, element: k, placement: r }), H = Ss(Object.assign({}, k, E)), V = g === go ? H : I, J = { top: T.top - V.top + p.top, bottom: V.bottom - T.bottom + p.bottom, left: T.left - V.left + p.left, right: V.right - T.right + p.right }, G = e.modifiersData.offset;
  if (g === go && G) {
    var Z = G[r];
    Object.keys(J).forEach(function(le) {
      var Te = [Pt, $t].indexOf(le) >= 0 ? 1 : -1, R = [ht, $t].indexOf(le) >= 0 ? "y" : "x";
      J[le] += Z[R] * Te;
    });
  }
  return J;
}
function x0(e, t) {
  t === void 0 && (t = {});
  var n = t, o = n.placement, r = n.boundary, s = n.rootBoundary, a = n.padding, l = n.flipVariations, i = n.allowedAutoPlacements, u = i === void 0 ? Hr : i, d = ro(o), f = d ? l ? Dl : Dl.filter(function(v) {
    return ro(v) === d;
  }) : xo, g = f.filter(function(v) {
    return u.indexOf(v) >= 0;
  });
  g.length === 0 && (g = f);
  var h = g.reduce(function(v, m) {
    return v[m] = Ao(e, { placement: m, boundary: r, rootBoundary: s, padding: a })[Gt(m)], v;
  }, {});
  return Object.keys(h).sort(function(v, m) {
    return h[v] - h[m];
  });
}
function z0(e) {
  if (Gt(e) === la) return [];
  var t = ar(e);
  return [xl(e), t, xl(t)];
}
function H0(e) {
  var t = e.state, n = e.options, o = e.name;
  if (!t.modifiersData[o]._skip) {
    for (var r = n.mainAxis, s = r === void 0 ? !0 : r, a = n.altAxis, l = a === void 0 ? !0 : a, i = n.fallbackPlacements, u = n.padding, d = n.boundary, f = n.rootBoundary, g = n.altBoundary, h = n.flipVariations, v = h === void 0 ? !0 : h, m = n.allowedAutoPlacements, y = t.options.placement, p = Gt(y), _ = p === y, k = i || (_ || !v ? [ar(y)] : z0(y)), w = [y].concat(k).reduce(function(qe, je) {
      return qe.concat(Gt(je) === la ? x0(t, { placement: je, boundary: d, rootBoundary: f, padding: u, flipVariations: v, allowedAutoPlacements: m }) : je);
    }, []), T = t.rects.reference, I = t.rects.popper, E = /* @__PURE__ */ new Map(), H = !0, V = w[0], J = 0; J < w.length; J++) {
      var G = w[J], Z = Gt(G), le = ro(G) === to, Te = [ht, $t].indexOf(Z) >= 0, R = Te ? "width" : "height", M = Ao(t, { placement: G, boundary: d, rootBoundary: f, altBoundary: g, padding: u }), D = Te ? le ? Pt : yt : le ? $t : ht;
      T[R] > I[R] && (D = ar(D));
      var re = ar(D), se = [];
      if (s && se.push(M[Z] <= 0), l && se.push(M[D] <= 0, M[re] <= 0), se.every(function(qe) {
        return qe;
      })) {
        V = G, H = !1;
        break;
      }
      E.set(G, se);
    }
    if (H) for (var pe = v ? 3 : 1, Ae = function(qe) {
      var je = w.find(function(Xe) {
        var De = E.get(Xe);
        if (De) return De.slice(0, qe).every(function(ye) {
          return ye;
        });
      });
      if (je) return V = je, "break";
    }, Fe = pe; Fe > 0; Fe--) {
      var we = Ae(Fe);
      if (we === "break") break;
    }
    t.placement !== V && (t.modifiersData[o]._skip = !0, t.placement = V, t.reset = !0);
  }
}
var W0 = { name: "flip", enabled: !0, phase: "main", fn: H0, requiresIfExists: ["offset"], data: { _skip: !1 } };
function Hl(e, t, n) {
  return n === void 0 && (n = { x: 0, y: 0 }), { top: e.top - t.height - n.y, right: e.right - t.width + n.x, bottom: e.bottom - t.height + n.y, left: e.left - t.width - n.x };
}
function Wl(e) {
  return [ht, Pt, $t, yt].some(function(t) {
    return e[t] >= 0;
  });
}
function U0(e) {
  var t = e.state, n = e.name, o = t.rects.reference, r = t.rects.popper, s = t.modifiersData.preventOverflow, a = Ao(t, { elementContext: "reference" }), l = Ao(t, { altBoundary: !0 }), i = Hl(a, o), u = Hl(l, r, s), d = Wl(i), f = Wl(u);
  t.modifiersData[n] = { referenceClippingOffsets: i, popperEscapeOffsets: u, isReferenceHidden: d, hasPopperEscaped: f }, t.attributes.popper = Object.assign({}, t.attributes.popper, { "data-popper-reference-hidden": d, "data-popper-escaped": f });
}
var j0 = { name: "hide", enabled: !0, phase: "main", requiresIfExists: ["preventOverflow"], fn: U0 };
function G0(e, t, n) {
  var o = Gt(e), r = [yt, ht].indexOf(o) >= 0 ? -1 : 1, s = typeof n == "function" ? n(Object.assign({}, t, { placement: e })) : n, a = s[0], l = s[1];
  return a = a || 0, l = (l || 0) * r, [yt, Pt].indexOf(o) >= 0 ? { x: l, y: a } : { x: a, y: l };
}
function K0(e) {
  var t = e.state, n = e.options, o = e.name, r = n.offset, s = r === void 0 ? [0, 0] : r, a = Hr.reduce(function(d, f) {
    return d[f] = G0(f, t.rects, s), d;
  }, {}), l = a[t.placement], i = l.x, u = l.y;
  t.modifiersData.popperOffsets != null && (t.modifiersData.popperOffsets.x += i, t.modifiersData.popperOffsets.y += u), t.modifiersData[o] = a;
}
var Y0 = { name: "offset", enabled: !0, phase: "main", requires: ["popperOffsets"], fn: K0 };
function q0(e) {
  var t = e.state, n = e.name;
  t.modifiersData[n] = qu({ reference: t.rects.reference, element: t.rects.popper, placement: t.placement });
}
var Xu = { name: "popperOffsets", enabled: !0, phase: "read", fn: q0, data: {} };
function X0(e) {
  return e === "x" ? "y" : "x";
}
function Z0(e) {
  var t = e.state, n = e.options, o = e.name, r = n.mainAxis, s = r === void 0 ? !0 : r, a = n.altAxis, l = a === void 0 ? !1 : a, i = n.boundary, u = n.rootBoundary, d = n.altBoundary, f = n.padding, g = n.tether, h = g === void 0 ? !0 : g, v = n.tetherOffset, m = v === void 0 ? 0 : v, y = Ao(t, { boundary: i, rootBoundary: u, padding: f, altBoundary: d }), p = Gt(t.placement), _ = ro(t.placement), k = !_, w = ca(p), T = X0(w), I = t.modifiersData.popperOffsets, E = t.rects.reference, H = t.rects.popper, V = typeof m == "function" ? m(Object.assign({}, t.rects, { placement: t.placement })) : m, J = typeof V == "number" ? { mainAxis: V, altAxis: V } : Object.assign({ mainAxis: 0, altAxis: 0 }, V), G = t.modifiersData.offset ? t.modifiersData.offset[t.placement] : null, Z = { x: 0, y: 0 };
  if (I) {
    if (s) {
      var le, Te = w === "y" ? ht : yt, R = w === "y" ? $t : Pt, M = w === "y" ? "height" : "width", D = I[w], re = D + y[Te], se = D - y[R], pe = h ? -H[M] / 2 : 0, Ae = _ === to ? E[M] : H[M], Fe = _ === to ? -H[M] : -E[M], we = t.elements.arrow, qe = h && we ? ua(we) : { width: 0, height: 0 }, je = t.modifiersData["arrow#persistent"] ? t.modifiersData["arrow#persistent"].padding : Wu(), Xe = je[Te], De = je[R], ye = So(0, E[M], qe[M]), ut = k ? E[M] / 2 - pe - ye - Xe - J.mainAxis : Ae - ye - Xe - J.mainAxis, mt = k ? -E[M] / 2 + pe + ye + De + J.mainAxis : Fe + ye + De + J.mainAxis, ct = t.elements.arrow && zo(t.elements.arrow), _t = ct ? w === "y" ? ct.clientTop || 0 : ct.clientLeft || 0 : 0, dt = (le = G?.[w]) != null ? le : 0, ft = D + ut - dt - _t, B = D + mt - dt, U = So(h ? Tr(re, ft) : re, D, h ? Dn(se, B) : se);
      I[w] = U, Z[w] = U - D;
    }
    if (l) {
      var Se, b = w === "x" ? ht : yt, C = w === "x" ? $t : Pt, A = I[T], q = T === "y" ? "height" : "width", fe = A + y[b], ue = A - y[C], S = [ht, yt].indexOf(p) !== -1, F = (Se = G?.[T]) != null ? Se : 0, ce = S ? fe : A - E[q] - H[q] - F + J.altAxis, be = S ? A + E[q] + H[q] - F - J.altAxis : ue, rt = h && S ? E0(ce, A, be) : So(h ? ce : fe, A, h ? be : ue);
      I[T] = rt, Z[T] = rt - A;
    }
    t.modifiersData[o] = Z;
  }
}
var J0 = { name: "preventOverflow", enabled: !0, phase: "main", fn: Z0, requiresIfExists: ["offset"] };
function Q0(e) {
  return { scrollLeft: e.scrollLeft, scrollTop: e.scrollTop };
}
function ey(e) {
  return e === Et(e) || !At(e) ? da(e) : Q0(e);
}
function ty(e) {
  var t = e.getBoundingClientRect(), n = no(t.width) / e.offsetWidth || 1, o = no(t.height) / e.offsetHeight || 1;
  return n !== 1 || o !== 1;
}
function ny(e, t, n) {
  n === void 0 && (n = !1);
  var o = At(t), r = At(t) && ty(t), s = Ln(t), a = oo(e, r, n), l = { scrollLeft: 0, scrollTop: 0 }, i = { x: 0, y: 0 };
  return (o || !o && !n) && ((Zt(t) !== "body" || pa(s)) && (l = ey(t)), At(t) ? (i = oo(t, !0), i.x += t.clientLeft, i.y += t.clientTop) : s && (i.x = fa(s))), { x: a.left + l.scrollLeft - i.x, y: a.top + l.scrollTop - i.y, width: a.width, height: a.height };
}
function oy(e) {
  var t = /* @__PURE__ */ new Map(), n = /* @__PURE__ */ new Set(), o = [];
  e.forEach(function(s) {
    t.set(s.name, s);
  });
  function r(s) {
    n.add(s.name);
    var a = [].concat(s.requires || [], s.requiresIfExists || []);
    a.forEach(function(l) {
      if (!n.has(l)) {
        var i = t.get(l);
        i && r(i);
      }
    }), o.push(s);
  }
  return e.forEach(function(s) {
    n.has(s.name) || r(s);
  }), o;
}
function ry(e) {
  var t = oy(e);
  return b0.reduce(function(n, o) {
    return n.concat(t.filter(function(r) {
      return r.phase === o;
    }));
  }, []);
}
function sy(e) {
  var t;
  return function() {
    return t || (t = new Promise(function(n) {
      Promise.resolve().then(function() {
        t = void 0, n(e());
      });
    })), t;
  };
}
function ay(e) {
  var t = e.reduce(function(n, o) {
    var r = n[o.name];
    return n[o.name] = r ? Object.assign({}, r, o, { options: Object.assign({}, r.options, o.options), data: Object.assign({}, r.data, o.data) }) : o, n;
  }, {});
  return Object.keys(t).map(function(n) {
    return t[n];
  });
}
var Ul = { placement: "bottom", modifiers: [], strategy: "absolute" };
function jl() {
  for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++) t[n] = arguments[n];
  return !t.some(function(o) {
    return !(o && typeof o.getBoundingClientRect == "function");
  });
}
function va(e) {
  e === void 0 && (e = {});
  var t = e, n = t.defaultModifiers, o = n === void 0 ? [] : n, r = t.defaultOptions, s = r === void 0 ? Ul : r;
  return function(a, l, i) {
    i === void 0 && (i = s);
    var u = { placement: "bottom", orderedModifiers: [], options: Object.assign({}, Ul, s), modifiersData: {}, elements: { reference: a, popper: l }, attributes: {}, styles: {} }, d = [], f = !1, g = { state: u, setOptions: function(m) {
      var y = typeof m == "function" ? m(u.options) : m;
      v(), u.options = Object.assign({}, s, u.options, y), u.scrollParents = { reference: Vn(a) ? Co(a) : a.contextElement ? Co(a.contextElement) : [], popper: Co(l) };
      var p = ry(ay([].concat(o, u.options.modifiers)));
      return u.orderedModifiers = p.filter(function(_) {
        return _.enabled;
      }), h(), g.update();
    }, forceUpdate: function() {
      if (!f) {
        var m = u.elements, y = m.reference, p = m.popper;
        if (jl(y, p)) {
          u.rects = { reference: ny(y, zo(p), u.options.strategy === "fixed"), popper: ua(p) }, u.reset = !1, u.placement = u.options.placement, u.orderedModifiers.forEach(function(H) {
            return u.modifiersData[H.name] = Object.assign({}, H.data);
          });
          for (var _ = 0; _ < u.orderedModifiers.length; _++) {
            if (u.reset === !0) {
              u.reset = !1, _ = -1;
              continue;
            }
            var k = u.orderedModifiers[_], w = k.fn, T = k.options, I = T === void 0 ? {} : T, E = k.name;
            typeof w == "function" && (u = w({ state: u, options: I, name: E, instance: g }) || u);
          }
        }
      }
    }, update: sy(function() {
      return new Promise(function(m) {
        g.forceUpdate(), m(u);
      });
    }), destroy: function() {
      v(), f = !0;
    } };
    if (!jl(a, l)) return g;
    g.setOptions(i).then(function(m) {
      !f && i.onFirstUpdate && i.onFirstUpdate(m);
    });
    function h() {
      u.orderedModifiers.forEach(function(m) {
        var y = m.name, p = m.options, _ = p === void 0 ? {} : p, k = m.effect;
        if (typeof k == "function") {
          var w = k({ state: u, name: y, instance: g, options: _ }), T = function() {
          };
          d.push(w || T);
        }
      });
    }
    function v() {
      d.forEach(function(m) {
        return m();
      }), d = [];
    }
    return g;
  };
}
va();
var ly = [Ku, Xu, Gu, xu];
va({ defaultModifiers: ly });
var iy = [Ku, Xu, Gu, xu, Y0, W0, J0, k0, j0], uy = va({ defaultModifiers: iy });
const cy = ["fixed", "absolute"], dy = me({
  boundariesPadding: {
    type: Number,
    default: 0
  },
  fallbackPlacements: {
    type: oe(Array),
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
    values: Hr,
    default: "bottom"
  },
  popperOptions: {
    type: oe(Object),
    default: () => ({})
  },
  strategy: {
    type: String,
    values: cy,
    default: "absolute"
  }
}), Zu = me({
  ...dy,
  id: String,
  style: {
    type: oe([String, Array, Object])
  },
  className: {
    type: oe([String, Array, Object])
  },
  effect: {
    type: oe(String),
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
    type: oe([String, Array, Object])
  },
  popperStyle: {
    type: oe([String, Array, Object])
  },
  referenceEl: {
    type: oe(Object)
  },
  triggerTargetEl: {
    type: oe(Object)
  },
  stopPopperMouseEvent: {
    type: Boolean,
    default: !0
  },
  virtualTriggering: Boolean,
  zIndex: Number,
  ...fo(["ariaLabel"])
}), fy = {
  mouseenter: (e) => e instanceof MouseEvent,
  mouseleave: (e) => e instanceof MouseEvent,
  focus: () => !0,
  blur: () => !0,
  close: () => !0
}, py = (e, t) => {
  const n = P(!1), o = P();
  return {
    focusStartRef: o,
    trapped: n,
    onFocusAfterReleased: (u) => {
      var d;
      ((d = u.detail) == null ? void 0 : d.focusReason) !== "pointer" && (o.value = "first", t("blur"));
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
}, vy = (e, t = []) => {
  const { placement: n, strategy: o, popperOptions: r } = e, s = {
    placement: n,
    strategy: o,
    ...r,
    modifiers: [...gy(e), ...t]
  };
  return hy(s, r?.modifiers), s;
}, my = (e) => {
  if (Ne)
    return sn(e);
};
function gy(e) {
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
function hy(e, t) {
  t && (e.modifiers = [...e.modifiers, ...t ?? []]);
}
const yy = (e, t, n = {}) => {
  const o = {
    name: "updateState",
    enabled: !0,
    phase: "write",
    fn: ({ state: i }) => {
      const u = by(i);
      Object.assign(a.value, u);
    },
    requires: ["computeStyles"]
  }, r = O(() => {
    const { onFirstUpdate: i, placement: u, strategy: d, modifiers: f } = c(n);
    return {
      onFirstUpdate: i,
      placement: u || "bottom",
      strategy: d || "absolute",
      modifiers: [
        ...f || [],
        o,
        { name: "applyStyles", enabled: !1 }
      ]
    };
  }), s = En(), a = P({
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
  }), l = () => {
    s.value && (s.value.destroy(), s.value = void 0);
  };
  return ae(r, (i) => {
    const u = c(s);
    u && u.setOptions(i);
  }, {
    deep: !0
  }), ae([e, t], ([i, u]) => {
    l(), !(!i || !u) && (s.value = uy(i, u, c(r)));
  }), Tt(() => {
    l();
  }), {
    state: O(() => {
      var i;
      return { ...((i = c(s)) == null ? void 0 : i.state) || {} };
    }),
    styles: O(() => c(a).styles),
    attributes: O(() => c(a).attributes),
    update: () => {
      var i;
      return (i = c(s)) == null ? void 0 : i.update();
    },
    forceUpdate: () => {
      var i;
      return (i = c(s)) == null ? void 0 : i.forceUpdate();
    },
    instanceRef: O(() => c(s))
  };
};
function by(e) {
  const t = Object.keys(e.elements), n = br(t.map((r) => [r, e.styles[r] || {}])), o = br(t.map((r) => [r, e.attributes[r]]));
  return {
    styles: n,
    attributes: o
  };
}
const _y = 0, wy = (e) => {
  const { popperInstanceRef: t, contentRef: n, triggerRef: o, role: r } = ie(oa, void 0), s = P(), a = P(), l = O(() => ({
    name: "eventListeners",
    enabled: !!e.visible
  })), i = O(() => {
    var p;
    const _ = c(s), k = (p = c(a)) != null ? p : _y;
    return {
      name: "arrow",
      enabled: !ou(_),
      options: {
        element: _,
        padding: k
      }
    };
  }), u = O(() => ({
    onFirstUpdate: () => {
      v();
    },
    ...vy(e, [
      c(i),
      c(l)
    ])
  })), d = O(() => my(e.referenceEl) || c(o)), { attributes: f, state: g, styles: h, update: v, forceUpdate: m, instanceRef: y } = yy(d, n, u);
  return ae(y, (p) => t.value = p), Me(() => {
    ae(() => {
      var p;
      return (p = c(d)) == null ? void 0 : p.getBoundingClientRect();
    }, () => {
      v();
    });
  }), {
    attributes: f,
    arrowRef: s,
    contentRef: n,
    instanceRef: y,
    state: g,
    styles: h,
    role: r,
    forceUpdate: m,
    update: v
  };
}, Sy = (e, {
  attributes: t,
  styles: n,
  role: o
}) => {
  const { nextZIndex: r } = Js(), s = Ee("popper"), a = O(() => c(t).popper), l = P(Oe(e.zIndex) ? e.zIndex : r()), i = O(() => [
    s.b(),
    s.is("pure", e.pure),
    s.is(e.effect),
    e.popperClass
  ]), u = O(() => [
    { zIndex: c(l) },
    c(n).popper,
    e.popperStyle || {}
  ]), d = O(() => o.value === "dialog" ? "false" : void 0), f = O(() => c(n).arrow || {});
  return {
    ariaModal: d,
    arrowStyle: f,
    contentAttrs: a,
    contentClass: i,
    contentStyle: u,
    contentZIndex: l,
    updateZIndex: () => {
      l.value = Oe(e.zIndex) ? e.zIndex : r();
    }
  };
}, Cy = Y({
  name: "ElPopperContent"
}), Ey = /* @__PURE__ */ Y({
  ...Cy,
  props: Zu,
  emits: fy,
  setup(e, { expose: t, emit: n }) {
    const o = e, {
      focusStartRef: r,
      trapped: s,
      onFocusAfterReleased: a,
      onFocusAfterTrapped: l,
      onFocusInTrap: i,
      onFocusoutPrevented: u,
      onReleaseRequested: d
    } = py(o, n), { attributes: f, arrowRef: g, contentRef: h, styles: v, instanceRef: m, role: y, update: p } = wy(o), {
      ariaModal: _,
      arrowStyle: k,
      contentAttrs: w,
      contentClass: T,
      contentStyle: I,
      updateZIndex: E
    } = Sy(o, {
      styles: v,
      attributes: f,
      role: y
    }), H = ie(Er, void 0), V = P();
    Qe(Lu, {
      arrowStyle: k,
      arrowRef: g,
      arrowOffset: V
    }), H && Qe(Er, {
      ...H,
      addInputId: Tn,
      removeInputId: Tn
    });
    let J;
    const G = (le = !0) => {
      p(), le && E();
    }, Z = () => {
      G(!1), o.visible && o.focusOnShow ? s.value = !0 : o.visible === !1 && (s.value = !1);
    };
    return Me(() => {
      ae(() => o.triggerTargetEl, (le, Te) => {
        J?.(), J = void 0;
        const R = c(le || h.value), M = c(Te || h.value);
        Bt(R) && (J = ae([y, () => o.ariaLabel, _, () => o.id], (D) => {
          ["role", "aria-label", "aria-modal", "id"].forEach((re, se) => {
            cn(D[se]) ? R.removeAttribute(re) : R.setAttribute(re, D[se]);
          });
        }, { immediate: !0 })), M !== R && Bt(M) && ["role", "aria-label", "aria-modal", "id"].forEach((D) => {
          M.removeAttribute(D);
        });
      }, { immediate: !0 }), ae(() => o.visible, Z, { immediate: !0 });
    }), Tt(() => {
      J?.(), J = void 0;
    }), t({
      popperContentRef: h,
      popperInstanceRef: m,
      updatePopper: G,
      contentStyle: I
    }), (le, Te) => (L(), x("div", Nt({
      ref_key: "contentRef",
      ref: h
    }, c(w), {
      style: c(I),
      class: c(T),
      tabindex: "-1",
      onMouseenter: (R) => le.$emit("mouseenter", R),
      onMouseleave: (R) => le.$emit("mouseleave", R)
    }), [
      K(c(Bu), {
        trapped: c(s),
        "trap-on-focus-in": !0,
        "focus-trap-el": c(h),
        "focus-start-el": c(r),
        onFocusAfterTrapped: c(l),
        onFocusAfterReleased: c(a),
        onFocusin: c(i),
        onFocusoutPrevented: c(u),
        onReleaseRequested: c(d)
      }, {
        default: W(() => [
          Q(le.$slots, "default")
        ]),
        _: 3
      }, 8, ["trapped", "focus-trap-el", "focus-start-el", "onFocusAfterTrapped", "onFocusAfterReleased", "onFocusin", "onFocusoutPrevented", "onReleaseRequested"])
    ], 16, ["onMouseenter", "onMouseleave"]));
  }
});
var Ty = /* @__PURE__ */ ve(Ey, [["__file", "content.vue"]]);
const Oy = Ot(xh), ma = Symbol("elTooltip");
function Gl() {
  let e;
  const t = (o, r) => {
    n(), e = window.setTimeout(o, r);
  }, n = () => window.clearTimeout(e);
  return Fo(() => n()), {
    registerTimeout: t,
    cancelTimeout: n
  };
}
const Iy = me({
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
}), ky = ({
  showAfter: e,
  hideAfter: t,
  autoClose: n,
  open: o,
  close: r
}) => {
  const { registerTimeout: s } = Gl(), {
    registerTimeout: a,
    cancelTimeout: l
  } = Gl();
  return {
    onOpen: (d) => {
      s(() => {
        o(d);
        const f = c(n);
        Oe(f) && f > 0 && a(() => {
          r(d);
        }, f);
      }, c(e));
    },
    onClose: (d) => {
      l(), s(() => {
        r(d);
      }, c(t));
    }
  };
}, No = me({
  ...Iy,
  ...Zu,
  appendTo: {
    type: oe([String, Object])
  },
  content: {
    type: String,
    default: ""
  },
  rawContent: Boolean,
  persistent: Boolean,
  visible: {
    type: oe(Boolean),
    default: null
  },
  transition: String,
  teleported: {
    type: Boolean,
    default: !0
  },
  disabled: Boolean,
  ...fo(["ariaLabel"])
}), ga = me({
  ...Pu,
  disabled: Boolean,
  trigger: {
    type: oe([String, Array]),
    default: "hover"
  },
  triggerKeys: {
    type: oe(Array),
    default: () => [Le.enter, Le.numpadEnter, Le.space]
  }
}), Ly = Dr({
  type: oe(Boolean),
  default: null
}), Ay = Dr({
  type: oe(Function)
}), Ny = (e) => {
  const t = `update:${e}`, n = `onUpdate:${e}`, o = [t], r = {
    [e]: Ly,
    [n]: Ay
  };
  return {
    useModelToggle: ({
      indicator: a,
      toggleReason: l,
      shouldHideWhenRouteChanges: i,
      shouldProceed: u,
      onShow: d,
      onHide: f
    }) => {
      const g = Je(), { emit: h } = g, v = g.props, m = O(() => We(v[n])), y = O(() => v[e] === null), p = (E) => {
        a.value !== !0 && (a.value = !0, l && (l.value = E), We(d) && d(E));
      }, _ = (E) => {
        a.value !== !1 && (a.value = !1, l && (l.value = E), We(f) && f(E));
      }, k = (E) => {
        if (v.disabled === !0 || We(u) && !u())
          return;
        const H = m.value && Ne;
        H && h(t, !0), (y.value || !H) && p(E);
      }, w = (E) => {
        if (v.disabled === !0 || !Ne)
          return;
        const H = m.value && Ne;
        H && h(t, !1), (y.value || !H) && _(E);
      }, T = (E) => {
        ko(E) && (v.disabled && E ? m.value && h(t, !1) : a.value !== E && (E ? p() : _()));
      }, I = () => {
        a.value ? w() : k();
      };
      return ae(() => v[e], T), i && g.appContext.config.globalProperties.$route !== void 0 && ae(() => ({
        ...g.proxy.$route
      }), () => {
        i.value && a.value && w();
      }), Me(() => {
        T(v[e]);
      }), {
        hide: w,
        show: k,
        toggle: I,
        hasUpdateHandler: m
      };
    },
    useModelToggleProps: r,
    useModelToggleEmits: o
  };
}, {
  useModelToggleProps: $y,
  useModelToggleEmits: Py,
  useModelToggle: Ry
} = Ny("visible"), My = me({
  ...Nu,
  ...$y,
  ...No,
  ...ga,
  ...$u,
  showArrow: {
    type: Boolean,
    default: !0
  }
}), Fy = [
  ...Py,
  "before-show",
  "before-hide",
  "show",
  "hide",
  "open",
  "close"
], Dy = (e, t) => Ut(e) ? e.includes(t) : e === t, Kn = (e, t, n) => (o) => {
  Dy(c(e), t) && n(o);
}, Ue = (e, t, { checkForDefaultPrevented: n = !0 } = {}) => (r) => {
  const s = e?.(r);
  if (n === !1 || !s)
    return t?.(r);
}, Kl = (e) => (t) => t.pointerType === "mouse" ? e(t) : void 0, By = Y({
  name: "ElTooltipTrigger"
}), Vy = /* @__PURE__ */ Y({
  ...By,
  props: ga,
  setup(e, { expose: t }) {
    const n = e, o = Ee("tooltip"), { controlled: r, id: s, open: a, onOpen: l, onClose: i, onToggle: u } = ie(ma, void 0), d = P(null), f = () => {
      if (c(r) || n.disabled)
        return !0;
    }, g = it(n, "trigger"), h = Ue(f, Kn(g, "hover", l)), v = Ue(f, Kn(g, "hover", i)), m = Ue(f, Kn(g, "click", (w) => {
      w.button === 0 && u(w);
    })), y = Ue(f, Kn(g, "focus", l)), p = Ue(f, Kn(g, "focus", i)), _ = Ue(f, Kn(g, "contextmenu", (w) => {
      w.preventDefault(), u(w);
    })), k = Ue(f, (w) => {
      const { code: T } = w;
      n.triggerKeys.includes(T) && (w.preventDefault(), u(w));
    });
    return t({
      triggerRef: d
    }), (w, T) => (L(), ee(c(qh), {
      id: c(s),
      "virtual-ref": w.virtualRef,
      open: c(a),
      "virtual-triggering": w.virtualTriggering,
      class: z(c(o).e("trigger")),
      onBlur: c(p),
      onClick: c(m),
      onContextmenu: c(_),
      onFocus: c(y),
      onMouseenter: c(h),
      onMouseleave: c(v),
      onKeydown: c(k)
    }, {
      default: W(() => [
        Q(w.$slots, "default")
      ]),
      _: 3
    }, 8, ["id", "virtual-ref", "open", "virtual-triggering", "class", "onBlur", "onClick", "onContextmenu", "onFocus", "onMouseenter", "onMouseleave", "onKeydown"]));
  }
});
var xy = /* @__PURE__ */ ve(Vy, [["__file", "trigger.vue"]]);
const zy = me({
  to: {
    type: oe([String, Object]),
    required: !0
  },
  disabled: Boolean
}), Hy = /* @__PURE__ */ Y({
  __name: "teleport",
  props: zy,
  setup(e) {
    return (t, n) => t.disabled ? Q(t.$slots, "default", { key: 0 }) : (L(), ee(Ld, {
      key: 1,
      to: t.to
    }, [
      Q(t.$slots, "default")
    ], 8, ["to"]));
  }
});
var Wy = /* @__PURE__ */ ve(Hy, [["__file", "teleport.vue"]]);
const Ju = Ot(Wy), Qu = () => {
  const e = Hs(), t = Cu(), n = O(() => `${e.value}-popper-container-${t.prefix}`), o = O(() => `#${n.value}`);
  return {
    id: n,
    selector: o
  };
}, Uy = (e) => {
  const t = document.createElement("div");
  return t.id = e, document.body.appendChild(t), t;
}, jy = () => {
  const { id: e, selector: t } = Qu();
  return Ad(() => {
    Ne && (document.body.querySelector(t.value) || Uy(e.value));
  }), {
    id: e,
    selector: t
  };
}, Gy = Y({
  name: "ElTooltipContent",
  inheritAttrs: !1
}), Ky = /* @__PURE__ */ Y({
  ...Gy,
  props: No,
  setup(e, { expose: t }) {
    const n = e, { selector: o } = Qu(), r = Ee("tooltip"), s = P();
    let a;
    const {
      controlled: l,
      id: i,
      open: u,
      trigger: d,
      onClose: f,
      onOpen: g,
      onShow: h,
      onHide: v,
      onBeforeShow: m,
      onBeforeHide: y
    } = ie(ma, void 0), p = O(() => n.transition || `${r.namespace.value}-fade-in-linear`), _ = O(() => n.persistent);
    Tt(() => {
      a?.();
    });
    const k = O(() => c(_) ? !0 : c(u)), w = O(() => n.disabled ? !1 : c(u)), T = O(() => n.appendTo || o.value), I = O(() => {
      var D;
      return (D = n.style) != null ? D : {};
    }), E = P(!0), H = () => {
      v(), M() && tn(document.body), E.value = !0;
    }, V = () => {
      if (c(l))
        return !0;
    }, J = Ue(V, () => {
      n.enterable && c(d) === "hover" && g();
    }), G = Ue(V, () => {
      c(d) === "hover" && f();
    }), Z = () => {
      var D, re;
      (re = (D = s.value) == null ? void 0 : D.updatePopper) == null || re.call(D), m?.();
    }, le = () => {
      y?.();
    }, Te = () => {
      h(), a = og(O(() => {
        var D;
        return (D = s.value) == null ? void 0 : D.popperContentRef;
      }), () => {
        if (c(l))
          return;
        c(d) !== "hover" && f();
      });
    }, R = () => {
      n.virtualTriggering || f();
    }, M = (D) => {
      var re;
      const se = (re = s.value) == null ? void 0 : re.popperContentRef, pe = D?.relatedTarget || document.activeElement;
      return se?.contains(pe);
    };
    return ae(() => c(u), (D) => {
      D ? E.value = !1 : a?.();
    }, {
      flush: "post"
    }), ae(() => n.content, () => {
      var D, re;
      (re = (D = s.value) == null ? void 0 : D.updatePopper) == null || re.call(D);
    }), t({
      contentRef: s,
      isFocusInsideContent: M
    }), (D, re) => (L(), ee(c(Ju), {
      disabled: !D.teleported,
      to: c(T)
    }, {
      default: W(() => [
        K(xn, {
          name: c(p),
          onAfterLeave: H,
          onBeforeEnter: Z,
          onAfterEnter: Te,
          onBeforeLeave: le
        }, {
          default: W(() => [
            c(k) ? vt((L(), ee(c(Ty), Nt({
              key: 0,
              id: c(i),
              ref_key: "contentRef",
              ref: s
            }, D.$attrs, {
              "aria-label": D.ariaLabel,
              "aria-hidden": E.value,
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
              "popper-style": [D.popperStyle, c(I)],
              "reference-el": D.referenceEl,
              "trigger-target-el": D.triggerTargetEl,
              visible: c(w),
              "z-index": D.zIndex,
              onMouseenter: c(J),
              onMouseleave: c(G),
              onBlur: R,
              onClose: c(f)
            }), {
              default: W(() => [
                Q(D.$slots, "default")
              ]),
              _: 3
            }, 16, ["id", "aria-label", "aria-hidden", "boundaries-padding", "fallback-placements", "gpu-acceleration", "offset", "placement", "popper-options", "strategy", "effect", "enterable", "pure", "popper-class", "popper-style", "reference-el", "trigger-target-el", "visible", "z-index", "onMouseenter", "onMouseleave", "onClose"])), [
              [Yt, c(w)]
            ]) : j("v-if", !0)
          ]),
          _: 3
        }, 8, ["name"])
      ]),
      _: 3
    }, 8, ["disabled", "to"]));
  }
});
var Yy = /* @__PURE__ */ ve(Ky, [["__file", "content.vue"]]);
const qy = Y({
  name: "ElTooltip"
}), Xy = /* @__PURE__ */ Y({
  ...qy,
  props: My,
  emits: Fy,
  setup(e, { expose: t, emit: n }) {
    const o = e;
    jy();
    const r = kn(), s = P(), a = P(), l = () => {
      var p;
      const _ = c(s);
      _ && ((p = _.popperInstanceRef) == null || p.update());
    }, i = P(!1), u = P(), { show: d, hide: f, hasUpdateHandler: g } = Ry({
      indicator: i,
      toggleReason: u
    }), { onOpen: h, onClose: v } = ky({
      showAfter: it(o, "showAfter"),
      hideAfter: it(o, "hideAfter"),
      autoClose: it(o, "autoClose"),
      open: d,
      close: f
    }), m = O(() => ko(o.visible) && !g.value);
    Qe(ma, {
      controlled: m,
      id: r,
      open: Lr(i),
      trigger: it(o, "trigger"),
      onOpen: (p) => {
        h(p);
      },
      onClose: (p) => {
        v(p);
      },
      onToggle: (p) => {
        c(i) ? v(p) : h(p);
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
    }), ae(() => o.disabled, (p) => {
      p && i.value && (i.value = !1);
    });
    const y = (p) => {
      var _;
      return (_ = a.value) == null ? void 0 : _.isFocusInsideContent(p);
    };
    return Nd(() => i.value && f()), t({
      popperRef: s,
      contentRef: a,
      isFocusInsideContent: y,
      updatePopper: l,
      onOpen: h,
      onClose: v,
      hide: f
    }), (p, _) => (L(), ee(c(Oy), {
      ref_key: "popperRef",
      ref: s,
      role: p.role
    }, {
      default: W(() => [
        K(xy, {
          disabled: p.disabled,
          trigger: p.trigger,
          "trigger-keys": p.triggerKeys,
          "virtual-ref": p.virtualRef,
          "virtual-triggering": p.virtualTriggering
        }, {
          default: W(() => [
            p.$slots.default ? Q(p.$slots, "default", { key: 0 }) : j("v-if", !0)
          ]),
          _: 3
        }, 8, ["disabled", "trigger", "trigger-keys", "virtual-ref", "virtual-triggering"]),
        K(Yy, {
          ref_key: "contentRef",
          ref: a,
          "aria-label": p.ariaLabel,
          "boundaries-padding": p.boundariesPadding,
          content: p.content,
          disabled: p.disabled,
          effect: p.effect,
          enterable: p.enterable,
          "fallback-placements": p.fallbackPlacements,
          "hide-after": p.hideAfter,
          "gpu-acceleration": p.gpuAcceleration,
          offset: p.offset,
          persistent: p.persistent,
          "popper-class": p.popperClass,
          "popper-style": p.popperStyle,
          placement: p.placement,
          "popper-options": p.popperOptions,
          pure: p.pure,
          "raw-content": p.rawContent,
          "reference-el": p.referenceEl,
          "trigger-target-el": p.triggerTargetEl,
          "show-after": p.showAfter,
          strategy: p.strategy,
          teleported: p.teleported,
          transition: p.transition,
          "virtual-triggering": p.virtualTriggering,
          "z-index": p.zIndex,
          "append-to": p.appendTo
        }, {
          default: W(() => [
            Q(p.$slots, "content", {}, () => [
              p.rawContent ? (L(), x("span", {
                key: 0,
                innerHTML: p.content
              }, null, 8, ["innerHTML"])) : (L(), x("span", { key: 1 }, te(p.content), 1))
            ]),
            p.showArrow ? (L(), ee(c(Wh), {
              key: 0,
              "arrow-offset": p.arrowOffset
            }, null, 8, ["arrow-offset"])) : j("v-if", !0)
          ]),
          _: 3
        }, 8, ["aria-label", "boundaries-padding", "content", "disabled", "effect", "enterable", "fallback-placements", "hide-after", "gpu-acceleration", "offset", "persistent", "popper-class", "popper-style", "placement", "popper-options", "pure", "raw-content", "reference-el", "trigger-target-el", "show-after", "strategy", "teleported", "transition", "virtual-triggering", "z-index", "append-to"])
      ]),
      _: 3
    }, 8, ["role"]));
  }
});
var Zy = /* @__PURE__ */ ve(Xy, [["__file", "tooltip.vue"]]);
const ec = Ot(Zy), Jy = me({
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
    type: oe([String, Object, Array])
  },
  offset: {
    type: oe(Array),
    default: [0, 0]
  },
  badgeClass: {
    type: String
  }
}), Qy = Y({
  name: "ElBadge"
}), eb = /* @__PURE__ */ Y({
  ...Qy,
  props: Jy,
  setup(e, { expose: t }) {
    const n = e, o = Ee("badge"), r = O(() => n.isDot ? "" : Oe(n.value) && Oe(n.max) ? n.max < n.value ? `${n.max}+` : `${n.value}` : `${n.value}`), s = O(() => {
      var a, l, i, u, d;
      return [
        {
          backgroundColor: n.color,
          marginRight: pn(-((l = (a = n.offset) == null ? void 0 : a[0]) != null ? l : 0)),
          marginTop: pn((u = (i = n.offset) == null ? void 0 : i[1]) != null ? u : 0)
        },
        (d = n.badgeStyle) != null ? d : {}
      ];
    });
    return t({
      content: r
    }), (a, l) => (L(), x("div", {
      class: z(c(o).b())
    }, [
      Q(a.$slots, "default"),
      K(xn, {
        name: `${c(o).namespace.value}-zoom-in-center`,
        persisted: ""
      }, {
        default: W(() => [
          vt($("sup", {
            class: z([
              c(o).e("content"),
              c(o).em("content", a.type),
              c(o).is("fixed", !!a.$slots.default),
              c(o).is("dot", a.isDot),
              c(o).is("hide-zero", !a.showZero && n.value === 0),
              a.badgeClass
            ]),
            style: Ye(c(s))
          }, [
            Q(a.$slots, "content", { value: c(r) }, () => [
              lt(te(c(r)), 1)
            ])
          ], 6), [
            [Yt, !a.hidden && (c(r) || a.isDot || a.$slots.content)]
          ])
        ]),
        _: 3
      }, 8, ["name"])
    ], 2));
  }
});
var tb = /* @__PURE__ */ ve(eb, [["__file", "badge.vue"]]);
const nb = Ot(tb), tc = Symbol("buttonGroupContextKey"), nc = ({ from: e, replacement: t, scope: n, version: o, ref: r, type: s = "API" }, a) => {
  ae(() => c(a), (l) => {
  }, {
    immediate: !0
  });
}, ob = (e, t) => {
  nc({
    from: "type.text",
    replacement: "link",
    version: "3.0.0",
    scope: "props",
    ref: "https://element-plus.org/en-US/component/button.html#button-attributes"
  }, O(() => e.type === "text"));
  const n = ie(tc, void 0), o = Br("button"), { form: r } = Vr(), s = po(O(() => n?.size)), a = xr(), l = P(), i = Bs(), u = O(() => e.type || n?.type || ""), d = O(() => {
    var v, m, y;
    return (y = (m = e.autoInsertSpace) != null ? m : (v = o.value) == null ? void 0 : v.autoInsertSpace) != null ? y : !1;
  }), f = O(() => e.tag === "button" ? {
    ariaDisabled: a.value || e.loading,
    disabled: a.value || e.loading,
    autofocus: e.autofocus,
    type: e.nativeType
  } : {}), g = O(() => {
    var v;
    const m = (v = i.default) == null ? void 0 : v.call(i);
    if (d.value && m?.length === 1) {
      const y = m[0];
      if (y?.type === Vs) {
        const p = y.children;
        return /^\p{Unified_Ideograph}{2}$/u.test(p.trim());
      }
    }
    return !1;
  });
  return {
    _disabled: a,
    _size: s,
    _type: u,
    _ref: l,
    _props: f,
    shouldAddSpace: g,
    handleClick: (v) => {
      if (a.value || e.loading) {
        v.stopPropagation();
        return;
      }
      e.nativeType === "reset" && r?.resetFields(), t("click", v);
    }
  };
}, rb = [
  "default",
  "primary",
  "success",
  "warning",
  "info",
  "danger",
  "text",
  ""
], sb = ["button", "submit", "reset"], Cs = me({
  size: Bo,
  disabled: Boolean,
  type: {
    type: String,
    values: rb,
    default: ""
  },
  icon: {
    type: Xt
  },
  nativeType: {
    type: String,
    values: sb,
    default: "button"
  },
  loading: Boolean,
  loadingIcon: {
    type: Xt,
    default: () => yu
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
    type: oe([String, Object]),
    default: "button"
  }
}), ab = {
  click: (e) => e instanceof MouseEvent
};
function nt(e, t) {
  lb(e) && (e = "100%");
  var n = ib(e);
  return e = t === 360 ? e : Math.min(t, Math.max(0, parseFloat(e))), n && (e = parseInt(String(e * t), 10) / 100), Math.abs(e - t) < 1e-6 ? 1 : (t === 360 ? e = (e < 0 ? e % t + t : e % t) / parseFloat(String(t)) : e = e % t / parseFloat(String(t)), e);
}
function Jo(e) {
  return Math.min(1, Math.max(0, e));
}
function lb(e) {
  return typeof e == "string" && e.indexOf(".") !== -1 && parseFloat(e) === 1;
}
function ib(e) {
  return typeof e == "string" && e.indexOf("%") !== -1;
}
function oc(e) {
  return e = parseFloat(e), (isNaN(e) || e < 0 || e > 1) && (e = 1), e;
}
function Qo(e) {
  return e <= 1 ? "".concat(Number(e) * 100, "%") : e;
}
function Rn(e) {
  return e.length === 1 ? "0" + e : String(e);
}
function ub(e, t, n) {
  return {
    r: nt(e, 255) * 255,
    g: nt(t, 255) * 255,
    b: nt(n, 255) * 255
  };
}
function Yl(e, t, n) {
  e = nt(e, 255), t = nt(t, 255), n = nt(n, 255);
  var o = Math.max(e, t, n), r = Math.min(e, t, n), s = 0, a = 0, l = (o + r) / 2;
  if (o === r)
    a = 0, s = 0;
  else {
    var i = o - r;
    switch (a = l > 0.5 ? i / (2 - o - r) : i / (o + r), o) {
      case e:
        s = (t - n) / i + (t < n ? 6 : 0);
        break;
      case t:
        s = (n - e) / i + 2;
        break;
      case n:
        s = (e - t) / i + 4;
        break;
    }
    s /= 6;
  }
  return { h: s, s: a, l };
}
function rs(e, t, n) {
  return n < 0 && (n += 1), n > 1 && (n -= 1), n < 1 / 6 ? e + (t - e) * (6 * n) : n < 1 / 2 ? t : n < 2 / 3 ? e + (t - e) * (2 / 3 - n) * 6 : e;
}
function cb(e, t, n) {
  var o, r, s;
  if (e = nt(e, 360), t = nt(t, 100), n = nt(n, 100), t === 0)
    r = n, s = n, o = n;
  else {
    var a = n < 0.5 ? n * (1 + t) : n + t - n * t, l = 2 * n - a;
    o = rs(l, a, e + 1 / 3), r = rs(l, a, e), s = rs(l, a, e - 1 / 3);
  }
  return { r: o * 255, g: r * 255, b: s * 255 };
}
function ql(e, t, n) {
  e = nt(e, 255), t = nt(t, 255), n = nt(n, 255);
  var o = Math.max(e, t, n), r = Math.min(e, t, n), s = 0, a = o, l = o - r, i = o === 0 ? 0 : l / o;
  if (o === r)
    s = 0;
  else {
    switch (o) {
      case e:
        s = (t - n) / l + (t < n ? 6 : 0);
        break;
      case t:
        s = (n - e) / l + 2;
        break;
      case n:
        s = (e - t) / l + 4;
        break;
    }
    s /= 6;
  }
  return { h: s, s: i, v: a };
}
function db(e, t, n) {
  e = nt(e, 360) * 6, t = nt(t, 100), n = nt(n, 100);
  var o = Math.floor(e), r = e - o, s = n * (1 - t), a = n * (1 - r * t), l = n * (1 - (1 - r) * t), i = o % 6, u = [n, a, s, s, l, n][i], d = [l, n, n, a, s, s][i], f = [s, s, l, n, n, a][i];
  return { r: u * 255, g: d * 255, b: f * 255 };
}
function Xl(e, t, n, o) {
  var r = [
    Rn(Math.round(e).toString(16)),
    Rn(Math.round(t).toString(16)),
    Rn(Math.round(n).toString(16))
  ];
  return o && r[0].startsWith(r[0].charAt(1)) && r[1].startsWith(r[1].charAt(1)) && r[2].startsWith(r[2].charAt(1)) ? r[0].charAt(0) + r[1].charAt(0) + r[2].charAt(0) : r.join("");
}
function fb(e, t, n, o, r) {
  var s = [
    Rn(Math.round(e).toString(16)),
    Rn(Math.round(t).toString(16)),
    Rn(Math.round(n).toString(16)),
    Rn(pb(o))
  ];
  return r && s[0].startsWith(s[0].charAt(1)) && s[1].startsWith(s[1].charAt(1)) && s[2].startsWith(s[2].charAt(1)) && s[3].startsWith(s[3].charAt(1)) ? s[0].charAt(0) + s[1].charAt(0) + s[2].charAt(0) + s[3].charAt(0) : s.join("");
}
function pb(e) {
  return Math.round(parseFloat(e) * 255).toString(16);
}
function Zl(e) {
  return St(e) / 255;
}
function St(e) {
  return parseInt(e, 16);
}
function vb(e) {
  return {
    r: e >> 16,
    g: (e & 65280) >> 8,
    b: e & 255
  };
}
var Es = {
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
function mb(e) {
  var t = { r: 0, g: 0, b: 0 }, n = 1, o = null, r = null, s = null, a = !1, l = !1;
  return typeof e == "string" && (e = yb(e)), typeof e == "object" && (Qt(e.r) && Qt(e.g) && Qt(e.b) ? (t = ub(e.r, e.g, e.b), a = !0, l = String(e.r).substr(-1) === "%" ? "prgb" : "rgb") : Qt(e.h) && Qt(e.s) && Qt(e.v) ? (o = Qo(e.s), r = Qo(e.v), t = db(e.h, o, r), a = !0, l = "hsv") : Qt(e.h) && Qt(e.s) && Qt(e.l) && (o = Qo(e.s), s = Qo(e.l), t = cb(e.h, o, s), a = !0, l = "hsl"), Object.prototype.hasOwnProperty.call(e, "a") && (n = e.a)), n = oc(n), {
    ok: a,
    format: e.format || l,
    r: Math.min(255, Math.max(t.r, 0)),
    g: Math.min(255, Math.max(t.g, 0)),
    b: Math.min(255, Math.max(t.b, 0)),
    a: n
  };
}
var gb = "[-\\+]?\\d+%?", hb = "[-\\+]?\\d*\\.\\d+%?", Cn = "(?:".concat(hb, ")|(?:").concat(gb, ")"), ss = "[\\s|\\(]+(".concat(Cn, ")[,|\\s]+(").concat(Cn, ")[,|\\s]+(").concat(Cn, ")\\s*\\)?"), as = "[\\s|\\(]+(".concat(Cn, ")[,|\\s]+(").concat(Cn, ")[,|\\s]+(").concat(Cn, ")[,|\\s]+(").concat(Cn, ")\\s*\\)?"), Rt = {
  CSS_UNIT: new RegExp(Cn),
  rgb: new RegExp("rgb" + ss),
  rgba: new RegExp("rgba" + as),
  hsl: new RegExp("hsl" + ss),
  hsla: new RegExp("hsla" + as),
  hsv: new RegExp("hsv" + ss),
  hsva: new RegExp("hsva" + as),
  hex3: /^#?([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,
  hex6: /^#?([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})$/,
  hex4: /^#?([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,
  hex8: /^#?([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})$/
};
function yb(e) {
  if (e = e.trim().toLowerCase(), e.length === 0)
    return !1;
  var t = !1;
  if (Es[e])
    e = Es[e], t = !0;
  else if (e === "transparent")
    return { r: 0, g: 0, b: 0, a: 0, format: "name" };
  var n = Rt.rgb.exec(e);
  return n ? { r: n[1], g: n[2], b: n[3] } : (n = Rt.rgba.exec(e), n ? { r: n[1], g: n[2], b: n[3], a: n[4] } : (n = Rt.hsl.exec(e), n ? { h: n[1], s: n[2], l: n[3] } : (n = Rt.hsla.exec(e), n ? { h: n[1], s: n[2], l: n[3], a: n[4] } : (n = Rt.hsv.exec(e), n ? { h: n[1], s: n[2], v: n[3] } : (n = Rt.hsva.exec(e), n ? { h: n[1], s: n[2], v: n[3], a: n[4] } : (n = Rt.hex8.exec(e), n ? {
    r: St(n[1]),
    g: St(n[2]),
    b: St(n[3]),
    a: Zl(n[4]),
    format: t ? "name" : "hex8"
  } : (n = Rt.hex6.exec(e), n ? {
    r: St(n[1]),
    g: St(n[2]),
    b: St(n[3]),
    format: t ? "name" : "hex"
  } : (n = Rt.hex4.exec(e), n ? {
    r: St(n[1] + n[1]),
    g: St(n[2] + n[2]),
    b: St(n[3] + n[3]),
    a: Zl(n[4] + n[4]),
    format: t ? "name" : "hex8"
  } : (n = Rt.hex3.exec(e), n ? {
    r: St(n[1] + n[1]),
    g: St(n[2] + n[2]),
    b: St(n[3] + n[3]),
    format: t ? "name" : "hex"
  } : !1)))))))));
}
function Qt(e) {
  return !!Rt.CSS_UNIT.exec(String(e));
}
var bb = (
  /** @class */
  function() {
    function e(t, n) {
      t === void 0 && (t = ""), n === void 0 && (n = {});
      var o;
      if (t instanceof e)
        return t;
      typeof t == "number" && (t = vb(t)), this.originalInput = t;
      var r = mb(t);
      this.originalInput = t, this.r = r.r, this.g = r.g, this.b = r.b, this.a = r.a, this.roundA = Math.round(100 * this.a) / 100, this.format = (o = n.format) !== null && o !== void 0 ? o : r.format, this.gradientType = n.gradientType, this.r < 1 && (this.r = Math.round(this.r)), this.g < 1 && (this.g = Math.round(this.g)), this.b < 1 && (this.b = Math.round(this.b)), this.isValid = r.ok;
    }
    return e.prototype.isDark = function() {
      return this.getBrightness() < 128;
    }, e.prototype.isLight = function() {
      return !this.isDark();
    }, e.prototype.getBrightness = function() {
      var t = this.toRgb();
      return (t.r * 299 + t.g * 587 + t.b * 114) / 1e3;
    }, e.prototype.getLuminance = function() {
      var t = this.toRgb(), n, o, r, s = t.r / 255, a = t.g / 255, l = t.b / 255;
      return s <= 0.03928 ? n = s / 12.92 : n = Math.pow((s + 0.055) / 1.055, 2.4), a <= 0.03928 ? o = a / 12.92 : o = Math.pow((a + 0.055) / 1.055, 2.4), l <= 0.03928 ? r = l / 12.92 : r = Math.pow((l + 0.055) / 1.055, 2.4), 0.2126 * n + 0.7152 * o + 0.0722 * r;
    }, e.prototype.getAlpha = function() {
      return this.a;
    }, e.prototype.setAlpha = function(t) {
      return this.a = oc(t), this.roundA = Math.round(100 * this.a) / 100, this;
    }, e.prototype.isMonochrome = function() {
      var t = this.toHsl().s;
      return t === 0;
    }, e.prototype.toHsv = function() {
      var t = ql(this.r, this.g, this.b);
      return { h: t.h * 360, s: t.s, v: t.v, a: this.a };
    }, e.prototype.toHsvString = function() {
      var t = ql(this.r, this.g, this.b), n = Math.round(t.h * 360), o = Math.round(t.s * 100), r = Math.round(t.v * 100);
      return this.a === 1 ? "hsv(".concat(n, ", ").concat(o, "%, ").concat(r, "%)") : "hsva(".concat(n, ", ").concat(o, "%, ").concat(r, "%, ").concat(this.roundA, ")");
    }, e.prototype.toHsl = function() {
      var t = Yl(this.r, this.g, this.b);
      return { h: t.h * 360, s: t.s, l: t.l, a: this.a };
    }, e.prototype.toHslString = function() {
      var t = Yl(this.r, this.g, this.b), n = Math.round(t.h * 360), o = Math.round(t.s * 100), r = Math.round(t.l * 100);
      return this.a === 1 ? "hsl(".concat(n, ", ").concat(o, "%, ").concat(r, "%)") : "hsla(".concat(n, ", ").concat(o, "%, ").concat(r, "%, ").concat(this.roundA, ")");
    }, e.prototype.toHex = function(t) {
      return t === void 0 && (t = !1), Xl(this.r, this.g, this.b, t);
    }, e.prototype.toHexString = function(t) {
      return t === void 0 && (t = !1), "#" + this.toHex(t);
    }, e.prototype.toHex8 = function(t) {
      return t === void 0 && (t = !1), fb(this.r, this.g, this.b, this.a, t);
    }, e.prototype.toHex8String = function(t) {
      return t === void 0 && (t = !1), "#" + this.toHex8(t);
    }, e.prototype.toHexShortString = function(t) {
      return t === void 0 && (t = !1), this.a === 1 ? this.toHexString(t) : this.toHex8String(t);
    }, e.prototype.toRgb = function() {
      return {
        r: Math.round(this.r),
        g: Math.round(this.g),
        b: Math.round(this.b),
        a: this.a
      };
    }, e.prototype.toRgbString = function() {
      var t = Math.round(this.r), n = Math.round(this.g), o = Math.round(this.b);
      return this.a === 1 ? "rgb(".concat(t, ", ").concat(n, ", ").concat(o, ")") : "rgba(".concat(t, ", ").concat(n, ", ").concat(o, ", ").concat(this.roundA, ")");
    }, e.prototype.toPercentageRgb = function() {
      var t = function(n) {
        return "".concat(Math.round(nt(n, 255) * 100), "%");
      };
      return {
        r: t(this.r),
        g: t(this.g),
        b: t(this.b),
        a: this.a
      };
    }, e.prototype.toPercentageRgbString = function() {
      var t = function(n) {
        return Math.round(nt(n, 255) * 100);
      };
      return this.a === 1 ? "rgb(".concat(t(this.r), "%, ").concat(t(this.g), "%, ").concat(t(this.b), "%)") : "rgba(".concat(t(this.r), "%, ").concat(t(this.g), "%, ").concat(t(this.b), "%, ").concat(this.roundA, ")");
    }, e.prototype.toName = function() {
      if (this.a === 0)
        return "transparent";
      if (this.a < 1)
        return !1;
      for (var t = "#" + Xl(this.r, this.g, this.b, !1), n = 0, o = Object.entries(Es); n < o.length; n++) {
        var r = o[n], s = r[0], a = r[1];
        if (t === a)
          return s;
      }
      return !1;
    }, e.prototype.toString = function(t) {
      var n = !!t;
      t = t ?? this.format;
      var o = !1, r = this.a < 1 && this.a >= 0, s = !n && r && (t.startsWith("hex") || t === "name");
      return s ? t === "name" && this.a === 0 ? this.toName() : this.toRgbString() : (t === "rgb" && (o = this.toRgbString()), t === "prgb" && (o = this.toPercentageRgbString()), (t === "hex" || t === "hex6") && (o = this.toHexString()), t === "hex3" && (o = this.toHexString(!0)), t === "hex4" && (o = this.toHex8String(!0)), t === "hex8" && (o = this.toHex8String()), t === "name" && (o = this.toName()), t === "hsl" && (o = this.toHslString()), t === "hsv" && (o = this.toHsvString()), o || this.toHexString());
    }, e.prototype.toNumber = function() {
      return (Math.round(this.r) << 16) + (Math.round(this.g) << 8) + Math.round(this.b);
    }, e.prototype.clone = function() {
      return new e(this.toString());
    }, e.prototype.lighten = function(t) {
      t === void 0 && (t = 10);
      var n = this.toHsl();
      return n.l += t / 100, n.l = Jo(n.l), new e(n);
    }, e.prototype.brighten = function(t) {
      t === void 0 && (t = 10);
      var n = this.toRgb();
      return n.r = Math.max(0, Math.min(255, n.r - Math.round(255 * -(t / 100)))), n.g = Math.max(0, Math.min(255, n.g - Math.round(255 * -(t / 100)))), n.b = Math.max(0, Math.min(255, n.b - Math.round(255 * -(t / 100)))), new e(n);
    }, e.prototype.darken = function(t) {
      t === void 0 && (t = 10);
      var n = this.toHsl();
      return n.l -= t / 100, n.l = Jo(n.l), new e(n);
    }, e.prototype.tint = function(t) {
      return t === void 0 && (t = 10), this.mix("white", t);
    }, e.prototype.shade = function(t) {
      return t === void 0 && (t = 10), this.mix("black", t);
    }, e.prototype.desaturate = function(t) {
      t === void 0 && (t = 10);
      var n = this.toHsl();
      return n.s -= t / 100, n.s = Jo(n.s), new e(n);
    }, e.prototype.saturate = function(t) {
      t === void 0 && (t = 10);
      var n = this.toHsl();
      return n.s += t / 100, n.s = Jo(n.s), new e(n);
    }, e.prototype.greyscale = function() {
      return this.desaturate(100);
    }, e.prototype.spin = function(t) {
      var n = this.toHsl(), o = (n.h + t) % 360;
      return n.h = o < 0 ? 360 + o : o, new e(n);
    }, e.prototype.mix = function(t, n) {
      n === void 0 && (n = 50);
      var o = this.toRgb(), r = new e(t).toRgb(), s = n / 100, a = {
        r: (r.r - o.r) * s + o.r,
        g: (r.g - o.g) * s + o.g,
        b: (r.b - o.b) * s + o.b,
        a: (r.a - o.a) * s + o.a
      };
      return new e(a);
    }, e.prototype.analogous = function(t, n) {
      t === void 0 && (t = 6), n === void 0 && (n = 30);
      var o = this.toHsl(), r = 360 / n, s = [this];
      for (o.h = (o.h - (r * t >> 1) + 720) % 360; --t; )
        o.h = (o.h + r) % 360, s.push(new e(o));
      return s;
    }, e.prototype.complement = function() {
      var t = this.toHsl();
      return t.h = (t.h + 180) % 360, new e(t);
    }, e.prototype.monochromatic = function(t) {
      t === void 0 && (t = 6);
      for (var n = this.toHsv(), o = n.h, r = n.s, s = n.v, a = [], l = 1 / t; t--; )
        a.push(new e({ h: o, s: r, v: s })), s = (s + l) % 1;
      return a;
    }, e.prototype.splitcomplement = function() {
      var t = this.toHsl(), n = t.h;
      return [
        this,
        new e({ h: (n + 72) % 360, s: t.s, l: t.l }),
        new e({ h: (n + 216) % 360, s: t.s, l: t.l })
      ];
    }, e.prototype.onBackground = function(t) {
      var n = this.toRgb(), o = new e(t).toRgb(), r = n.a + o.a * (1 - n.a);
      return new e({
        r: (n.r * n.a + o.r * o.a * (1 - n.a)) / r,
        g: (n.g * n.a + o.g * o.a * (1 - n.a)) / r,
        b: (n.b * n.a + o.b * o.a * (1 - n.a)) / r,
        a: r
      });
    }, e.prototype.triad = function() {
      return this.polyad(3);
    }, e.prototype.tetrad = function() {
      return this.polyad(4);
    }, e.prototype.polyad = function(t) {
      for (var n = this.toHsl(), o = n.h, r = [this], s = 360 / t, a = 1; a < t; a++)
        r.push(new e({ h: (o + a * s) % 360, s: n.s, l: n.l }));
      return r;
    }, e.prototype.equals = function(t) {
      return this.toRgbString() === new e(t).toRgbString();
    }, e;
  }()
);
function yn(e, t = 20) {
  return e.mix("#141414", t).toString();
}
function _b(e) {
  const t = xr(), n = Ee("button");
  return O(() => {
    let o = {}, r = e.color;
    if (r) {
      const s = r.match(/var\((.*?)\)/);
      s && (r = window.getComputedStyle(window.document.documentElement).getPropertyValue(s[1]));
      const a = new bb(r), l = e.dark ? a.tint(20).toString() : yn(a, 20);
      if (e.plain)
        o = n.cssVarBlock({
          "bg-color": e.dark ? yn(a, 90) : a.tint(90).toString(),
          "text-color": r,
          "border-color": e.dark ? yn(a, 50) : a.tint(50).toString(),
          "hover-text-color": `var(${n.cssVarName("color-white")})`,
          "hover-bg-color": r,
          "hover-border-color": r,
          "active-bg-color": l,
          "active-text-color": `var(${n.cssVarName("color-white")})`,
          "active-border-color": l
        }), t.value && (o[n.cssVarBlockName("disabled-bg-color")] = e.dark ? yn(a, 90) : a.tint(90).toString(), o[n.cssVarBlockName("disabled-text-color")] = e.dark ? yn(a, 50) : a.tint(50).toString(), o[n.cssVarBlockName("disabled-border-color")] = e.dark ? yn(a, 80) : a.tint(80).toString());
      else {
        const i = e.dark ? yn(a, 30) : a.tint(30).toString(), u = a.isDark() ? `var(${n.cssVarName("color-white")})` : `var(${n.cssVarName("color-black")})`;
        if (o = n.cssVarBlock({
          "bg-color": r,
          "text-color": u,
          "border-color": r,
          "hover-bg-color": i,
          "hover-text-color": u,
          "hover-border-color": i,
          "active-bg-color": l,
          "active-border-color": l
        }), t.value) {
          const d = e.dark ? yn(a, 50) : a.tint(50).toString();
          o[n.cssVarBlockName("disabled-bg-color")] = d, o[n.cssVarBlockName("disabled-text-color")] = e.dark ? "rgba(255, 255, 255, 0.5)" : `var(${n.cssVarName("color-white")})`, o[n.cssVarBlockName("disabled-border-color")] = d;
        }
      }
    }
    return o;
  });
}
const wb = Y({
  name: "ElButton"
}), Sb = /* @__PURE__ */ Y({
  ...wb,
  props: Cs,
  emits: ab,
  setup(e, { expose: t, emit: n }) {
    const o = e, r = _b(o), s = Ee("button"), { _ref: a, _size: l, _type: i, _disabled: u, _props: d, shouldAddSpace: f, handleClick: g } = ob(o, n), h = O(() => [
      s.b(),
      s.m(i.value),
      s.m(l.value),
      s.is("disabled", u.value),
      s.is("loading", o.loading),
      s.is("plain", o.plain),
      s.is("round", o.round),
      s.is("circle", o.circle),
      s.is("text", o.text),
      s.is("link", o.link),
      s.is("has-bg", o.bg)
    ]);
    return t({
      ref: a,
      size: l,
      type: i,
      disabled: u,
      shouldAddSpace: f
    }), (v, m) => (L(), ee(pt(v.tag), Nt({
      ref_key: "_ref",
      ref: a
    }, c(d), {
      class: c(h),
      style: c(r),
      onClick: c(g)
    }), {
      default: W(() => [
        v.loading ? (L(), x(ke, { key: 0 }, [
          v.$slots.loading ? Q(v.$slots, "loading", { key: 0 }) : (L(), ee(c(Ke), {
            key: 1,
            class: z(c(s).is("loading"))
          }, {
            default: W(() => [
              (L(), ee(pt(v.loadingIcon)))
            ]),
            _: 1
          }, 8, ["class"]))
        ], 64)) : v.icon || v.$slots.icon ? (L(), ee(c(Ke), { key: 1 }, {
          default: W(() => [
            v.icon ? (L(), ee(pt(v.icon), { key: 0 })) : Q(v.$slots, "icon", { key: 1 })
          ]),
          _: 3
        })) : j("v-if", !0),
        v.$slots.default ? (L(), x("span", {
          key: 2,
          class: z({ [c(s).em("text", "expand")]: c(f) })
        }, [
          Q(v.$slots, "default")
        ], 2)) : j("v-if", !0)
      ]),
      _: 3
    }, 16, ["class", "style", "onClick"]));
  }
});
var Cb = /* @__PURE__ */ ve(Sb, [["__file", "button.vue"]]);
const Eb = {
  size: Cs.size,
  type: Cs.type
}, Tb = Y({
  name: "ElButtonGroup"
}), Ob = /* @__PURE__ */ Y({
  ...Tb,
  props: Eb,
  setup(e) {
    const t = e;
    Qe(tc, On({
      size: it(t, "size"),
      type: it(t, "type")
    }));
    const n = Ee("button");
    return (o, r) => (L(), x("div", {
      class: z(c(n).b("group"))
    }, [
      Q(o.$slots, "default")
    ], 2));
  }
});
var rc = /* @__PURE__ */ ve(Ob, [["__file", "button-group.vue"]]);
const sc = Ot(Cb, {
  ButtonGroup: rc
});
Vo(rc);
var lr = /* @__PURE__ */ ((e) => (e[e.TEXT = 1] = "TEXT", e[e.CLASS = 2] = "CLASS", e[e.STYLE = 4] = "STYLE", e[e.PROPS = 8] = "PROPS", e[e.FULL_PROPS = 16] = "FULL_PROPS", e[e.HYDRATE_EVENTS = 32] = "HYDRATE_EVENTS", e[e.STABLE_FRAGMENT = 64] = "STABLE_FRAGMENT", e[e.KEYED_FRAGMENT = 128] = "KEYED_FRAGMENT", e[e.UNKEYED_FRAGMENT = 256] = "UNKEYED_FRAGMENT", e[e.NEED_PATCH = 512] = "NEED_PATCH", e[e.DYNAMIC_SLOTS = 1024] = "DYNAMIC_SLOTS", e[e.HOISTED = -1] = "HOISTED", e[e.BAIL = -2] = "BAIL", e))(lr || {});
const Ib = (e = "") => e.replace(/[|\\{}()[\]^$+*?.]/g, "\\$&").replace(/-/g, "\\x2d"), Ts = me({
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
    values: cu
  },
  effect: {
    type: String,
    values: ["dark", "light", "plain"],
    default: "light"
  },
  round: Boolean
}), kb = {
  close: (e) => e instanceof MouseEvent,
  click: (e) => e instanceof MouseEvent
}, Lb = Y({
  name: "ElTag"
}), Ab = /* @__PURE__ */ Y({
  ...Lb,
  props: Ts,
  emits: kb,
  setup(e, { emit: t }) {
    const n = e, o = po(), r = Ee("tag"), s = O(() => {
      const { type: u, hit: d, effect: f, closable: g, round: h } = n;
      return [
        r.b(),
        r.is("closable", g),
        r.m(u || "primary"),
        r.m(o.value),
        r.m(f),
        r.is("hit", d),
        r.is("round", h)
      ];
    }), a = (u) => {
      t("close", u);
    }, l = (u) => {
      t("click", u);
    }, i = (u) => {
      var d, f, g;
      (g = (f = (d = u?.component) == null ? void 0 : d.subTree) == null ? void 0 : f.component) != null && g.bum && (u.component.subTree.component.bum = null);
    };
    return (u, d) => u.disableTransitions ? (L(), x("span", {
      key: 0,
      class: z(c(s)),
      style: Ye({ backgroundColor: u.color }),
      onClick: l
    }, [
      $("span", {
        class: z(c(r).e("content"))
      }, [
        Q(u.$slots, "default")
      ], 2),
      u.closable ? (L(), ee(c(Ke), {
        key: 0,
        class: z(c(r).e("close")),
        onClick: Ve(a, ["stop"])
      }, {
        default: W(() => [
          K(c(Sr))
        ]),
        _: 1
      }, 8, ["class", "onClick"])) : j("v-if", !0)
    ], 6)) : (L(), ee(xn, {
      key: 1,
      name: `${c(r).namespace.value}-zoom-in-center`,
      appear: "",
      onVnodeMounted: i
    }, {
      default: W(() => [
        $("span", {
          class: z(c(s)),
          style: Ye({ backgroundColor: u.color }),
          onClick: l
        }, [
          $("span", {
            class: z(c(r).e("content"))
          }, [
            Q(u.$slots, "default")
          ], 2),
          u.closable ? (L(), ee(c(Ke), {
            key: 0,
            class: z(c(r).e("close")),
            onClick: Ve(a, ["stop"])
          }, {
            default: W(() => [
              K(c(Sr))
            ]),
            _: 1
          }, 8, ["class", "onClick"])) : j("v-if", !0)
        ], 6)
      ]),
      _: 3
    }, 8, ["name"]));
  }
});
var Nb = /* @__PURE__ */ ve(Ab, [["__file", "tag.vue"]]);
const $b = Ot(Nb), bn = /* @__PURE__ */ new Map();
if (Ne) {
  let e;
  document.addEventListener("mousedown", (t) => e = t), document.addEventListener("mouseup", (t) => {
    if (e) {
      for (const n of bn.values())
        for (const { documentHandler: o } of n)
          o(t, e);
      e = void 0;
    }
  });
}
function Jl(e, t) {
  let n = [];
  return Ut(t.arg) ? n = t.arg : Bt(t.arg) && n.push(t.arg), function(o, r) {
    const s = t.instance.popperRef, a = o.target, l = r?.target, i = !t || !t.instance, u = !a || !l, d = e.contains(a) || e.contains(l), f = e === a, g = n.length && n.some((v) => v?.contains(a)) || n.length && n.includes(l), h = s && (s.contains(a) || s.contains(l));
    i || u || d || f || g || h || t.value(o, r);
  };
}
const Pb = {
  beforeMount(e, t) {
    bn.has(e) || bn.set(e, []), bn.get(e).push({
      documentHandler: Jl(e, t),
      bindingFn: t.value
    });
  },
  updated(e, t) {
    bn.has(e) || bn.set(e, []);
    const n = bn.get(e), o = n.findIndex((s) => s.bindingFn === t.oldValue), r = {
      documentHandler: Jl(e, t),
      bindingFn: t.value
    };
    o >= 0 ? n.splice(o, 1, r) : n.push(r);
  },
  unmounted(e) {
    bn.delete(e);
  }
}, Rb = me({
  a11y: {
    type: Boolean,
    default: !0
  },
  locale: {
    type: oe(Object)
  },
  size: Bo,
  button: {
    type: oe(Object)
  },
  experimentalFeatures: {
    type: oe(Object)
  },
  keyboardNavigation: {
    type: Boolean,
    default: !0
  },
  message: {
    type: oe(Object)
  },
  zIndex: Number,
  namespace: {
    type: String,
    default: "el"
  },
  ...pu
}), Mt = {};
Y({
  name: "ElConfigProvider",
  props: Rb,
  setup(e, { slots: t }) {
    ae(() => e.message, (o) => {
      Object.assign(Mt, o ?? {});
    }, { immediate: !0, deep: !0 });
    const n = mu(e);
    return () => Q(t, "default", { config: n?.value });
  }
});
const Mb = 100, Fb = 600, Ql = {
  beforeMount(e, t) {
    const n = t.value, { interval: o = Mb, delay: r = Fb } = We(n) ? {} : n;
    let s, a;
    const l = () => We(n) ? n() : n.handler(), i = () => {
      a && (clearTimeout(a), a = void 0), s && (clearInterval(s), s = void 0);
    };
    e.addEventListener("mousedown", (u) => {
      u.button === 0 && (i(), l(), document.addEventListener("mouseup", () => i(), {
        once: !0
      }), a = setTimeout(() => {
        s = setInterval(() => {
          l();
        }, o);
      }, r));
    });
  }
}, ac = (e) => {
  if (!e)
    return { onClick: Tn, onMousedown: Tn, onMouseup: Tn };
  let t = !1, n = !1;
  return { onClick: (a) => {
    t && n && e(a), t = n = !1;
  }, onMousedown: (a) => {
    t = a.target === a.currentTarget;
  }, onMouseup: (a) => {
    n = a.target === a.currentTarget;
  } };
}, Db = me({
  mask: {
    type: Boolean,
    default: !0
  },
  customMaskEvent: Boolean,
  overlayClass: {
    type: oe([
      String,
      Array,
      Object
    ])
  },
  zIndex: {
    type: oe([String, Number])
  }
}), Bb = {
  click: (e) => e instanceof MouseEvent
}, Vb = "overlay";
var xb = Y({
  name: "ElOverlay",
  props: Db,
  emits: Bb,
  setup(e, { slots: t, emit: n }) {
    const o = Ee(Vb), r = (i) => {
      n("click", i);
    }, { onClick: s, onMousedown: a, onMouseup: l } = ac(e.customMaskEvent ? void 0 : r);
    return () => e.mask ? K("div", {
      class: [o.b(), e.overlayClass],
      style: {
        zIndex: e.zIndex
      },
      onClick: s,
      onMousedown: a,
      onMouseup: l
    }, [Q(t, "default")], lr.STYLE | lr.CLASS | lr.PROPS, ["onClick", "onMouseup", "onMousedown"]) : xs("div", {
      class: e.overlayClass,
      style: {
        zIndex: e.zIndex,
        position: "fixed",
        top: "0px",
        right: "0px",
        bottom: "0px",
        left: "0px"
      }
    }, [Q(t, "default")]);
  }
});
const zb = xb, lc = Symbol("dialogInjectionKey"), ic = me({
  center: Boolean,
  alignCenter: Boolean,
  closeIcon: {
    type: Xt
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
}), Hb = {
  close: () => !0
}, Wb = (e, t, n, o) => {
  let r = {
    offsetX: 0,
    offsetY: 0
  };
  const s = (u) => {
    const d = u.clientX, f = u.clientY, { offsetX: g, offsetY: h } = r, v = e.value.getBoundingClientRect(), m = v.left, y = v.top, p = v.width, _ = v.height, k = document.documentElement.clientWidth, w = document.documentElement.clientHeight, T = -m + g, I = -y + h, E = k - m - p + g, H = w - y - _ + h, V = (G) => {
      let Z = g + G.clientX - d, le = h + G.clientY - f;
      o?.value || (Z = Math.min(Math.max(Z, T), E), le = Math.min(Math.max(le, I), H)), r = {
        offsetX: Z,
        offsetY: le
      }, e.value && (e.value.style.transform = `translate(${pn(Z)}, ${pn(le)})`);
    }, J = () => {
      document.removeEventListener("mousemove", V), document.removeEventListener("mouseup", J);
    };
    document.addEventListener("mousemove", V), document.addEventListener("mouseup", J);
  }, a = () => {
    t.value && e.value && t.value.addEventListener("mousedown", s);
  }, l = () => {
    t.value && e.value && t.value.removeEventListener("mousedown", s);
  }, i = () => {
    r = {
      offsetX: 0,
      offsetY: 0
    }, e.value && (e.value.style.transform = "none");
  };
  return Me(() => {
    Fs(() => {
      n.value ? a() : l();
    });
  }), Tt(() => {
    l();
  }), {
    resetPosition: i
  };
}, ha = (...e) => (t) => {
  e.forEach((n) => {
    We(n) ? n(t) : n.value = t;
  });
}, Ub = Y({ name: "ElDialogContent" }), jb = /* @__PURE__ */ Y({
  ...Ub,
  props: ic,
  emits: Hb,
  setup(e, { expose: t }) {
    const n = e, { t: o } = Do(), { Close: r } = bu, { dialogRef: s, headerRef: a, bodyId: l, ns: i, style: u } = ie(lc), { focusTrapRef: d } = ie(ra), f = O(() => [
      i.b(),
      i.is("fullscreen", n.fullscreen),
      i.is("draggable", n.draggable),
      i.is("align-center", n.alignCenter),
      { [i.m("center")]: n.center }
    ]), g = ha(d, s), h = O(() => n.draggable), v = O(() => n.overflow), { resetPosition: m } = Wb(s, a, h, v);
    return t({
      resetPosition: m
    }), (y, p) => (L(), x("div", {
      ref: c(g),
      class: z(c(f)),
      style: Ye(c(u)),
      tabindex: "-1"
    }, [
      $("header", {
        ref_key: "headerRef",
        ref: a,
        class: z([c(i).e("header"), y.headerClass, { "show-close": y.showClose }])
      }, [
        Q(y.$slots, "header", {}, () => [
          $("span", {
            role: "heading",
            "aria-level": y.ariaLevel,
            class: z(c(i).e("title"))
          }, te(y.title), 11, ["aria-level"])
        ]),
        y.showClose ? (L(), x("button", {
          key: 0,
          "aria-label": c(o)("el.dialog.close"),
          class: z(c(i).e("headerbtn")),
          type: "button",
          onClick: (_) => y.$emit("close")
        }, [
          K(c(Ke), {
            class: z(c(i).e("close"))
          }, {
            default: W(() => [
              (L(), ee(pt(y.closeIcon || c(r))))
            ]),
            _: 1
          }, 8, ["class"])
        ], 10, ["aria-label", "onClick"])) : j("v-if", !0)
      ], 2),
      $("div", {
        id: c(l),
        class: z([c(i).e("body"), y.bodyClass])
      }, [
        Q(y.$slots, "default")
      ], 10, ["id"]),
      y.$slots.footer ? (L(), x("footer", {
        key: 0,
        class: z([c(i).e("footer"), y.footerClass])
      }, [
        Q(y.$slots, "footer")
      ], 2)) : j("v-if", !0)
    ], 6));
  }
});
var Gb = /* @__PURE__ */ ve(jb, [["__file", "dialog-content.vue"]]);
const Kb = me({
  ...ic,
  appendToBody: Boolean,
  appendTo: {
    type: oe([String, Object]),
    default: "body"
  },
  beforeClose: {
    type: oe(Function)
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
}), Yb = {
  open: () => !0,
  opened: () => !0,
  close: () => !0,
  closed: () => !0,
  [tt]: (e) => ko(e),
  openAutoFocus: () => !0,
  closeAutoFocus: () => !0
}, qb = (e, t = {}) => {
  Wt(e) || Zs("[useLockscreen]", "You need to pass a ref param to this function");
  const n = t.ns || Ee("popup"), o = O(() => n.bm("parent", "hidden"));
  if (!Ne || El(document.body, o.value))
    return;
  let r = 0, s = !1, a = "0";
  const l = () => {
    setTimeout(() => {
      typeof document > "u" || s && document && (document.body.style.width = a, kg(document.body, o.value));
    }, 200);
  };
  ae(e, (i) => {
    if (!i) {
      l();
      return;
    }
    s = !El(document.body, o.value), s && (a = document.body.style.width, Ig(document.body, o.value)), r = Ag(n.namespace.value);
    const u = document.documentElement.clientHeight < document.body.scrollHeight, d = Lg(document.body, "overflowY");
    r > 0 && (u || d === "scroll") && s && (document.body.style.width = `calc(100% - ${r}px)`);
  }), Di(() => l());
}, Xb = (e, t) => {
  var n;
  const r = Je().emit, { nextZIndex: s } = Js();
  let a = "";
  const l = kn(), i = kn(), u = P(!1), d = P(!1), f = P(!1), g = P((n = e.zIndex) != null ? n : s());
  let h, v;
  const m = Br("namespace", bo), y = O(() => {
    const R = {}, M = `--${m.value}-dialog`;
    return e.fullscreen || (e.top && (R[`${M}-margin-top`] = e.top), e.width && (R[`${M}-width`] = pn(e.width))), R;
  }), p = O(() => e.alignCenter ? { display: "flex" } : {});
  function _() {
    r("opened");
  }
  function k() {
    r("closed"), r(tt, !1), e.destroyOnClose && (f.value = !1);
  }
  function w() {
    r("close");
  }
  function T() {
    v?.(), h?.(), e.openDelay && e.openDelay > 0 ? { stop: h } = _r(() => V(), e.openDelay) : V();
  }
  function I() {
    h?.(), v?.(), e.closeDelay && e.closeDelay > 0 ? { stop: v } = _r(() => J(), e.closeDelay) : J();
  }
  function E() {
    function R(M) {
      M || (d.value = !0, u.value = !1);
    }
    e.beforeClose ? e.beforeClose(R) : I();
  }
  function H() {
    e.closeOnClickModal && E();
  }
  function V() {
    Ne && (u.value = !0);
  }
  function J() {
    u.value = !1;
  }
  function G() {
    r("openAutoFocus");
  }
  function Z() {
    r("closeAutoFocus");
  }
  function le(R) {
    var M;
    ((M = R.detail) == null ? void 0 : M.focusReason) === "pointer" && R.preventDefault();
  }
  e.lockScroll && qb(u);
  function Te() {
    e.closeOnPressEscape && E();
  }
  return ae(() => e.modelValue, (R) => {
    R ? (d.value = !1, T(), f.value = !0, g.value = ou(e.zIndex) ? s() : g.value++, xe(() => {
      r("open"), t.value && (t.value.parentElement.scrollTop = 0, t.value.parentElement.scrollLeft = 0, t.value.scrollTop = 0);
    })) : u.value && I();
  }), ae(() => e.fullscreen, (R) => {
    t.value && (R ? (a = t.value.style.transform, t.value.style.transform = "") : t.value.style.transform = a);
  }), Me(() => {
    e.modelValue && (u.value = !0, f.value = !0, T());
  }), {
    afterEnter: _,
    afterLeave: k,
    beforeLeave: w,
    handleClose: E,
    onModalClick: H,
    close: I,
    doClose: J,
    onOpenAutoFocus: G,
    onCloseAutoFocus: Z,
    onCloseRequested: Te,
    onFocusoutPrevented: le,
    titleId: l,
    bodyId: i,
    closed: d,
    style: y,
    overlayDialogStyle: p,
    rendered: f,
    visible: u,
    zIndex: g
  };
}, Zb = Y({
  name: "ElDialog",
  inheritAttrs: !1
}), Jb = /* @__PURE__ */ Y({
  ...Zb,
  props: Kb,
  emits: Yb,
  setup(e, { expose: t }) {
    const n = e, o = Bs();
    nc({
      scope: "el-dialog",
      from: "the title slot",
      replacement: "the header slot",
      version: "3.0.0",
      ref: "https://element-plus.org/en-US/component/dialog.html#slots"
    }, O(() => !!o.title));
    const r = Ee("dialog"), s = P(), a = P(), l = P(), {
      visible: i,
      titleId: u,
      bodyId: d,
      style: f,
      overlayDialogStyle: g,
      rendered: h,
      zIndex: v,
      afterEnter: m,
      afterLeave: y,
      beforeLeave: p,
      handleClose: _,
      onModalClick: k,
      onOpenAutoFocus: w,
      onCloseAutoFocus: T,
      onCloseRequested: I,
      onFocusoutPrevented: E
    } = Xb(n, s);
    Qe(lc, {
      dialogRef: s,
      headerRef: a,
      bodyId: d,
      ns: r,
      rendered: h,
      style: f
    });
    const H = ac(k), V = O(() => n.draggable && !n.fullscreen);
    return t({
      visible: i,
      dialogContentRef: l,
      resetPosition: () => {
        var G;
        (G = l.value) == null || G.resetPosition();
      }
    }), (G, Z) => (L(), ee(c(Ju), {
      to: G.appendTo,
      disabled: G.appendTo !== "body" ? !1 : !G.appendToBody
    }, {
      default: W(() => [
        K(xn, {
          name: "dialog-fade",
          onAfterEnter: c(m),
          onAfterLeave: c(y),
          onBeforeLeave: c(p),
          persisted: ""
        }, {
          default: W(() => [
            vt(K(c(zb), {
              "custom-mask-event": "",
              mask: G.modal,
              "overlay-class": G.modalClass,
              "z-index": c(v)
            }, {
              default: W(() => [
                $("div", {
                  role: "dialog",
                  "aria-modal": "true",
                  "aria-label": G.title || void 0,
                  "aria-labelledby": G.title ? void 0 : c(u),
                  "aria-describedby": c(d),
                  class: z(`${c(r).namespace.value}-overlay-dialog`),
                  style: Ye(c(g)),
                  onClick: c(H).onClick,
                  onMousedown: c(H).onMousedown,
                  onMouseup: c(H).onMouseup
                }, [
                  K(c(Bu), {
                    loop: "",
                    trapped: c(i),
                    "focus-start-el": "container",
                    onFocusAfterTrapped: c(w),
                    onFocusAfterReleased: c(T),
                    onFocusoutPrevented: c(E),
                    onReleaseRequested: c(I)
                  }, {
                    default: W(() => [
                      c(h) ? (L(), ee(Gb, Nt({
                        key: 0,
                        ref_key: "dialogContentRef",
                        ref: l
                      }, G.$attrs, {
                        center: G.center,
                        "align-center": G.alignCenter,
                        "close-icon": G.closeIcon,
                        draggable: c(V),
                        overflow: G.overflow,
                        fullscreen: G.fullscreen,
                        "header-class": G.headerClass,
                        "body-class": G.bodyClass,
                        "footer-class": G.footerClass,
                        "show-close": G.showClose,
                        title: G.title,
                        "aria-level": G.headerAriaLevel,
                        onClose: c(_)
                      }), Ar({
                        header: W(() => [
                          G.$slots.title ? Q(G.$slots, "title", { key: 1 }) : Q(G.$slots, "header", {
                            key: 0,
                            close: c(_),
                            titleId: c(u),
                            titleClass: c(r).e("title")
                          })
                        ]),
                        default: W(() => [
                          Q(G.$slots, "default")
                        ]),
                        _: 2
                      }, [
                        G.$slots.footer ? {
                          name: "footer",
                          fn: W(() => [
                            Q(G.$slots, "footer")
                          ])
                        } : void 0
                      ]), 1040, ["center", "align-center", "close-icon", "draggable", "overflow", "fullscreen", "header-class", "body-class", "footer-class", "show-close", "title", "aria-level", "onClose"])) : j("v-if", !0)
                    ]),
                    _: 3
                  }, 8, ["trapped", "onFocusAfterTrapped", "onFocusAfterReleased", "onFocusoutPrevented", "onReleaseRequested"])
                ], 46, ["aria-label", "aria-labelledby", "aria-describedby", "onClick", "onMousedown", "onMouseup"])
              ]),
              _: 3
            }, 8, ["mask", "overlay-class", "z-index"]), [
              [Yt, c(i)]
            ])
          ]),
          _: 3
        }, 8, ["onAfterEnter", "onAfterLeave", "onBeforeLeave"])
      ]),
      _: 3
    }, 8, ["to", "disabled"]));
  }
});
var Qb = /* @__PURE__ */ ve(Jb, [["__file", "dialog.vue"]]);
const e_ = Ot(Qb), t_ = /* @__PURE__ */ Y({
  inheritAttrs: !1
});
function n_(e, t, n, o, r, s) {
  return Q(e.$slots, "default");
}
var o_ = /* @__PURE__ */ ve(t_, [["render", n_], ["__file", "collection.vue"]]);
const r_ = /* @__PURE__ */ Y({
  name: "ElCollectionItem",
  inheritAttrs: !1
});
function s_(e, t, n, o, r, s) {
  return Q(e.$slots, "default");
}
var a_ = /* @__PURE__ */ ve(r_, [["render", s_], ["__file", "collection-item.vue"]]);
const uc = "data-el-collection-item", cc = (e) => {
  const t = `El${e}Collection`, n = `${t}Item`, o = Symbol(t), r = Symbol(n), s = {
    ...o_,
    name: t,
    setup() {
      const l = P(), i = /* @__PURE__ */ new Map();
      Qe(o, {
        itemMap: i,
        getItems: () => {
          const d = c(l);
          if (!d)
            return [];
          const f = Array.from(d.querySelectorAll(`[${uc}]`));
          return [...i.values()].sort((h, v) => f.indexOf(h.ref) - f.indexOf(v.ref));
        },
        collectionRef: l
      });
    }
  }, a = {
    ...a_,
    name: n,
    setup(l, { attrs: i }) {
      const u = P(), d = ie(o, void 0);
      Qe(r, {
        collectionItemRef: u
      }), Me(() => {
        const f = c(u);
        f && d.itemMap.set(f, {
          ref: f,
          ...i
        });
      }), Tt(() => {
        const f = c(u);
        d.itemMap.delete(f);
      });
    }
  };
  return {
    COLLECTION_INJECTION_KEY: o,
    COLLECTION_ITEM_INJECTION_KEY: r,
    ElCollection: s,
    ElCollectionItem: a
  };
}, l_ = me({
  style: { type: oe([String, Array, Object]) },
  currentTabId: {
    type: oe(String)
  },
  defaultCurrentTabId: String,
  loop: Boolean,
  dir: {
    type: String,
    values: ["ltr", "rtl"],
    default: "ltr"
  },
  orientation: {
    type: oe(String)
  },
  onBlur: Function,
  onFocus: Function,
  onMousedown: Function
}), {
  ElCollection: i_,
  ElCollectionItem: u_,
  COLLECTION_INJECTION_KEY: ya,
  COLLECTION_ITEM_INJECTION_KEY: c_
} = cc("RovingFocusGroup"), ba = Symbol("elRovingFocusGroup"), dc = Symbol("elRovingFocusGroupItem"), d_ = {
  ArrowLeft: "prev",
  ArrowUp: "prev",
  ArrowRight: "next",
  ArrowDown: "next",
  PageUp: "first",
  Home: "first",
  PageDown: "last",
  End: "last"
}, f_ = (e, t) => e, p_ = (e, t, n) => {
  const o = f_(e.code);
  return d_[o];
}, v_ = (e, t) => e.map((n, o) => e[(o + t) % e.length]), _a = (e) => {
  const { activeElement: t } = document;
  for (const n of e)
    if (n === t || (n.focus(), t !== document.activeElement))
      return;
}, ei = "currentTabIdChange", ti = "rovingFocusGroup.entryFocus", m_ = { bubbles: !1, cancelable: !0 }, g_ = Y({
  name: "ElRovingFocusGroupImpl",
  inheritAttrs: !1,
  props: l_,
  emits: [ei, "entryFocus"],
  setup(e, { emit: t }) {
    var n;
    const o = P((n = e.currentTabId || e.defaultCurrentTabId) != null ? n : null), r = P(!1), s = P(!1), a = P(), { getItems: l } = ie(ya, void 0), i = O(() => [
      {
        outline: "none"
      },
      e.style
    ]), u = (m) => {
      t(ei, m);
    }, d = () => {
      r.value = !0;
    }, f = Ue((m) => {
      var y;
      (y = e.onMousedown) == null || y.call(e, m);
    }, () => {
      s.value = !0;
    }), g = Ue((m) => {
      var y;
      (y = e.onFocus) == null || y.call(e, m);
    }, (m) => {
      const y = !c(s), { target: p, currentTarget: _ } = m;
      if (p === _ && y && !c(r)) {
        const k = new Event(ti, m_);
        if (_?.dispatchEvent(k), !k.defaultPrevented) {
          const w = l().filter((V) => V.focusable), T = w.find((V) => V.active), I = w.find((V) => V.id === c(o)), H = [T, I, ...w].filter(Boolean).map((V) => V.ref);
          _a(H);
        }
      }
      s.value = !1;
    }), h = Ue((m) => {
      var y;
      (y = e.onBlur) == null || y.call(e, m);
    }, () => {
      r.value = !1;
    }), v = (...m) => {
      t("entryFocus", ...m);
    };
    Qe(ba, {
      currentTabbedId: Lr(o),
      loop: it(e, "loop"),
      tabIndex: O(() => c(r) ? -1 : 0),
      rovingFocusGroupRef: a,
      rovingFocusGroupRootStyle: i,
      orientation: it(e, "orientation"),
      dir: it(e, "dir"),
      onItemFocus: u,
      onItemShiftTab: d,
      onBlur: h,
      onFocus: g,
      onMousedown: f
    }), ae(() => e.currentTabId, (m) => {
      o.value = m ?? null;
    }), Lt(a, ti, v);
  }
});
function h_(e, t, n, o, r, s) {
  return Q(e.$slots, "default");
}
var y_ = /* @__PURE__ */ ve(g_, [["render", h_], ["__file", "roving-focus-group-impl.vue"]]);
const b_ = Y({
  name: "ElRovingFocusGroup",
  components: {
    ElFocusGroupCollection: i_,
    ElRovingFocusGroupImpl: y_
  }
});
function __(e, t, n, o, r, s) {
  const a = Pe("el-roving-focus-group-impl"), l = Pe("el-focus-group-collection");
  return L(), ee(l, null, {
    default: W(() => [
      K(a, $d(Pd(e.$attrs)), {
        default: W(() => [
          Q(e.$slots, "default")
        ]),
        _: 3
      }, 16)
    ]),
    _: 3
  });
}
var w_ = /* @__PURE__ */ ve(b_, [["render", __], ["__file", "roving-focus-group.vue"]]);
const S_ = me({
  trigger: ga.trigger,
  triggerKeys: {
    type: oe(Array),
    default: () => [
      Le.enter,
      Le.numpadEnter,
      Le.space,
      Le.down
    ]
  },
  effect: {
    ...No.effect,
    default: "light"
  },
  type: {
    type: oe(String)
  },
  placement: {
    type: oe(String),
    default: "bottom"
  },
  popperOptions: {
    type: oe(Object),
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
    type: oe([Number, String]),
    default: 0
  },
  maxHeight: {
    type: oe([Number, String]),
    default: ""
  },
  popperClass: {
    type: String,
    default: ""
  },
  disabled: Boolean,
  role: {
    type: String,
    values: Au,
    default: "menu"
  },
  buttonProps: {
    type: oe(Object)
  },
  teleported: No.teleported,
  persistent: {
    type: Boolean,
    default: !0
  }
}), fc = me({
  command: {
    type: [Object, String, Number],
    default: () => ({})
  },
  disabled: Boolean,
  divided: Boolean,
  textValue: String,
  icon: {
    type: Xt
  }
}), C_ = me({
  onKeydown: { type: oe(Function) }
}), E_ = [
  Le.down,
  Le.pageDown,
  Le.home
], pc = [Le.up, Le.pageUp, Le.end], T_ = [...E_, ...pc], {
  ElCollection: O_,
  ElCollectionItem: I_,
  COLLECTION_INJECTION_KEY: k_,
  COLLECTION_ITEM_INJECTION_KEY: L_
} = cc("Dropdown"), Ur = Symbol("elDropdown"), { ButtonGroup: A_ } = sc, N_ = Y({
  name: "ElDropdown",
  components: {
    ElButton: sc,
    ElButtonGroup: A_,
    ElScrollbar: ku,
    ElDropdownCollection: O_,
    ElTooltip: ec,
    ElRovingFocusGroup: w_,
    ElOnlyChild: Mu,
    ElIcon: Ke,
    ArrowDown: Qs
  },
  props: S_,
  emits: ["visible-change", "click", "command"],
  setup(e, { emit: t }) {
    const n = Je(), o = Ee("dropdown"), { t: r } = Do(), s = P(), a = P(), l = P(), i = P(), u = P(null), d = P(null), f = P(!1), g = O(() => ({
      maxHeight: pn(e.maxHeight)
    })), h = O(() => [o.m(w.value)]), v = O(() => rn(e.trigger)), m = kn().value, y = O(() => e.id || m);
    ae([s, v], ([M, D], [re]) => {
      var se, pe, Ae;
      (se = re?.$el) != null && se.removeEventListener && re.$el.removeEventListener("pointerenter", I), (pe = M?.$el) != null && pe.removeEventListener && M.$el.removeEventListener("pointerenter", I), (Ae = M?.$el) != null && Ae.addEventListener && D.includes("hover") && M.$el.addEventListener("pointerenter", I);
    }, { immediate: !0 }), Tt(() => {
      var M, D;
      (D = (M = s.value) == null ? void 0 : M.$el) != null && D.removeEventListener && s.value.$el.removeEventListener("pointerenter", I);
    });
    function p() {
      _();
    }
    function _() {
      var M;
      (M = l.value) == null || M.onClose();
    }
    function k() {
      var M;
      (M = l.value) == null || M.onOpen();
    }
    const w = po();
    function T(...M) {
      t("command", ...M);
    }
    function I() {
      var M, D;
      (D = (M = s.value) == null ? void 0 : M.$el) == null || D.focus();
    }
    function E() {
    }
    function H() {
      const M = c(i);
      v.value.includes("hover") && M?.focus(), d.value = null;
    }
    function V(M) {
      d.value = M;
    }
    function J(M) {
      f.value || (M.preventDefault(), M.stopImmediatePropagation());
    }
    function G() {
      t("visible-change", !0);
    }
    function Z(M) {
      var D;
      M?.type === "keydown" && ((D = i.value) == null || D.focus());
    }
    function le() {
      t("visible-change", !1);
    }
    return Qe(Ur, {
      contentRef: i,
      role: O(() => e.role),
      triggerId: y,
      isUsingKeyboard: f,
      onItemEnter: E,
      onItemLeave: H
    }), Qe("elDropdown", {
      instance: n,
      dropdownSize: w,
      handleClick: p,
      commandHandler: T,
      trigger: it(e, "trigger"),
      hideOnClick: it(e, "hideOnClick")
    }), {
      t: r,
      ns: o,
      scrollbar: u,
      wrapStyle: g,
      dropdownTriggerKls: h,
      dropdownSize: w,
      triggerId: y,
      currentTabId: d,
      handleCurrentTabIdChange: V,
      handlerMainButtonClick: (M) => {
        t("click", M);
      },
      handleEntryFocus: J,
      handleClose: _,
      handleOpen: k,
      handleBeforeShowTooltip: G,
      handleShowTooltip: Z,
      handleBeforeHideTooltip: le,
      onFocusAfterTrapped: (M) => {
        var D, re;
        M.preventDefault(), (re = (D = i.value) == null ? void 0 : D.focus) == null || re.call(D, {
          preventScroll: !0
        });
      },
      popperRef: l,
      contentRef: i,
      triggeringElementRef: s,
      referenceElementRef: a
    };
  }
});
function $_(e, t, n, o, r, s) {
  var a;
  const l = Pe("el-dropdown-collection"), i = Pe("el-roving-focus-group"), u = Pe("el-scrollbar"), d = Pe("el-only-child"), f = Pe("el-tooltip"), g = Pe("el-button"), h = Pe("arrow-down"), v = Pe("el-icon"), m = Pe("el-button-group");
  return L(), x("div", {
    class: z([e.ns.b(), e.ns.is("disabled", e.disabled)])
  }, [
    K(f, {
      ref: "popperRef",
      role: e.role,
      effect: e.effect,
      "fallback-placements": ["bottom", "top"],
      "popper-options": e.popperOptions,
      "gpu-acceleration": !1,
      "hide-after": e.trigger === "hover" ? e.hideTimeout : 0,
      "manual-mode": !0,
      placement: e.placement,
      "popper-class": [e.ns.e("popper"), e.popperClass],
      "reference-element": (a = e.referenceElementRef) == null ? void 0 : a.$el,
      trigger: e.trigger,
      "trigger-keys": e.triggerKeys,
      "trigger-target-el": e.contentRef,
      "show-after": e.trigger === "hover" ? e.showTimeout : 0,
      "stop-popper-mouse-event": !1,
      "virtual-ref": e.triggeringElementRef,
      "virtual-triggering": e.splitButton,
      disabled: e.disabled,
      transition: `${e.ns.namespace.value}-zoom-in-top`,
      teleported: e.teleported,
      pure: "",
      persistent: e.persistent,
      onBeforeShow: e.handleBeforeShowTooltip,
      onShow: e.handleShowTooltip,
      onBeforeHide: e.handleBeforeHideTooltip
    }, Ar({
      content: W(() => [
        K(u, {
          ref: "scrollbar",
          "wrap-style": e.wrapStyle,
          tag: "div",
          "view-class": e.ns.e("list")
        }, {
          default: W(() => [
            K(i, {
              loop: e.loop,
              "current-tab-id": e.currentTabId,
              orientation: "horizontal",
              onCurrentTabIdChange: e.handleCurrentTabIdChange,
              onEntryFocus: e.handleEntryFocus
            }, {
              default: W(() => [
                K(l, null, {
                  default: W(() => [
                    Q(e.$slots, "dropdown")
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
      e.splitButton ? void 0 : {
        name: "default",
        fn: W(() => [
          K(d, {
            id: e.triggerId,
            ref: "triggeringElementRef",
            role: "button",
            tabindex: e.tabindex
          }, {
            default: W(() => [
              Q(e.$slots, "default")
            ]),
            _: 3
          }, 8, ["id", "tabindex"])
        ])
      }
    ]), 1032, ["role", "effect", "popper-options", "hide-after", "placement", "popper-class", "reference-element", "trigger", "trigger-keys", "trigger-target-el", "show-after", "virtual-ref", "virtual-triggering", "disabled", "transition", "teleported", "persistent", "onBeforeShow", "onShow", "onBeforeHide"]),
    e.splitButton ? (L(), ee(m, { key: 0 }, {
      default: W(() => [
        K(g, Nt({ ref: "referenceElementRef" }, e.buttonProps, {
          size: e.dropdownSize,
          type: e.type,
          disabled: e.disabled,
          tabindex: e.tabindex,
          onClick: e.handlerMainButtonClick
        }), {
          default: W(() => [
            Q(e.$slots, "default")
          ]),
          _: 3
        }, 16, ["size", "type", "disabled", "tabindex", "onClick"]),
        K(g, Nt({
          id: e.triggerId,
          ref: "triggeringElementRef"
        }, e.buttonProps, {
          role: "button",
          size: e.dropdownSize,
          type: e.type,
          class: e.ns.e("caret-button"),
          disabled: e.disabled,
          tabindex: e.tabindex,
          "aria-label": e.t("el.dropdown.toggleDropdown")
        }), {
          default: W(() => [
            K(v, {
              class: z(e.ns.e("icon"))
            }, {
              default: W(() => [
                K(h)
              ]),
              _: 1
            }, 8, ["class"])
          ]),
          _: 1
        }, 16, ["id", "size", "type", "class", "disabled", "tabindex", "aria-label"])
      ]),
      _: 3
    })) : j("v-if", !0)
  ], 2);
}
var P_ = /* @__PURE__ */ ve(N_, [["render", $_], ["__file", "dropdown.vue"]]);
const R_ = Y({
  components: {
    ElRovingFocusCollectionItem: u_
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
  setup(e, { emit: t }) {
    const { currentTabbedId: n, loop: o, onItemFocus: r, onItemShiftTab: s } = ie(ba, void 0), { getItems: a } = ie(ya, void 0), l = kn(), i = P(), u = Ue((h) => {
      t("mousedown", h);
    }, (h) => {
      e.focusable ? r(c(l)) : h.preventDefault();
    }), d = Ue((h) => {
      t("focus", h);
    }, () => {
      r(c(l));
    }), f = Ue((h) => {
      t("keydown", h);
    }, (h) => {
      const { code: v, shiftKey: m, target: y, currentTarget: p } = h;
      if (v === Le.tab && m) {
        s();
        return;
      }
      if (y !== p)
        return;
      const _ = p_(h);
      if (_) {
        h.preventDefault();
        let w = a().filter((T) => T.focusable).map((T) => T.ref);
        switch (_) {
          case "last": {
            w.reverse();
            break;
          }
          case "prev":
          case "next": {
            _ === "prev" && w.reverse();
            const T = w.indexOf(p);
            w = o.value ? v_(w, T + 1) : w.slice(T + 1);
            break;
          }
        }
        xe(() => {
          _a(w);
        });
      }
    }), g = O(() => n.value === c(l));
    return Qe(dc, {
      rovingFocusGroupItemRef: i,
      tabIndex: O(() => c(g) ? 0 : -1),
      handleMousedown: u,
      handleFocus: d,
      handleKeydown: f
    }), {
      id: l,
      handleKeydown: f,
      handleFocus: d,
      handleMousedown: u
    };
  }
});
function M_(e, t, n, o, r, s) {
  const a = Pe("el-roving-focus-collection-item");
  return L(), ee(a, {
    id: e.id,
    focusable: e.focusable,
    active: e.active
  }, {
    default: W(() => [
      Q(e.$slots, "default")
    ]),
    _: 3
  }, 8, ["id", "focusable", "active"]);
}
var F_ = /* @__PURE__ */ ve(R_, [["render", M_], ["__file", "roving-focus-item.vue"]]);
const D_ = Y({
  name: "DropdownItemImpl",
  components: {
    ElIcon: Ke
  },
  props: fc,
  emits: ["pointermove", "pointerleave", "click", "clickimpl"],
  setup(e, { emit: t }) {
    const n = Ee("dropdown"), { role: o } = ie(Ur, void 0), { collectionItemRef: r } = ie(L_, void 0), { collectionItemRef: s } = ie(c_, void 0), {
      rovingFocusGroupItemRef: a,
      tabIndex: l,
      handleFocus: i,
      handleKeydown: u,
      handleMousedown: d
    } = ie(dc, void 0), f = ha(r, s, a), g = O(() => o.value === "menu" ? "menuitem" : o.value === "navigation" ? "link" : "button"), h = Ue((v) => {
      if ([Le.enter, Le.numpadEnter, Le.space].includes(v.code))
        return v.preventDefault(), v.stopImmediatePropagation(), t("clickimpl", v), !0;
    }, u);
    return {
      ns: n,
      itemRef: f,
      dataset: {
        [uc]: ""
      },
      role: g,
      tabIndex: l,
      handleFocus: i,
      handleKeydown: h,
      handleMousedown: d
    };
  }
});
function B_(e, t, n, o, r, s) {
  const a = Pe("el-icon");
  return L(), x(ke, null, [
    e.divided ? (L(), x("li", {
      key: 0,
      role: "separator",
      class: z(e.ns.bem("menu", "item", "divided"))
    }, null, 2)) : j("v-if", !0),
    $("li", Nt({ ref: e.itemRef }, { ...e.dataset, ...e.$attrs }, {
      "aria-disabled": e.disabled,
      class: [e.ns.be("menu", "item"), e.ns.is("disabled", e.disabled)],
      tabindex: e.tabIndex,
      role: e.role,
      onClick: (l) => e.$emit("clickimpl", l),
      onFocus: e.handleFocus,
      onKeydown: Ve(e.handleKeydown, ["self"]),
      onMousedown: e.handleMousedown,
      onPointermove: (l) => e.$emit("pointermove", l),
      onPointerleave: (l) => e.$emit("pointerleave", l)
    }), [
      e.icon ? (L(), ee(a, { key: 0 }, {
        default: W(() => [
          (L(), ee(pt(e.icon)))
        ]),
        _: 1
      })) : j("v-if", !0),
      Q(e.$slots, "default")
    ], 16, ["aria-disabled", "tabindex", "role", "onClick", "onFocus", "onKeydown", "onMousedown", "onPointermove", "onPointerleave"])
  ], 64);
}
var V_ = /* @__PURE__ */ ve(D_, [["render", B_], ["__file", "dropdown-item-impl.vue"]]);
const vc = () => {
  const e = ie("elDropdown", {}), t = O(() => e?.dropdownSize);
  return {
    elDropdown: e,
    _elDropdownSize: t
  };
}, x_ = Y({
  name: "ElDropdownItem",
  components: {
    ElDropdownCollectionItem: I_,
    ElRovingFocusItem: F_,
    ElDropdownItemImpl: V_
  },
  inheritAttrs: !1,
  props: fc,
  emits: ["pointermove", "pointerleave", "click"],
  setup(e, { emit: t, attrs: n }) {
    const { elDropdown: o } = vc(), r = Je(), s = P(null), a = O(() => {
      var h, v;
      return (v = (h = c(s)) == null ? void 0 : h.textContent) != null ? v : "";
    }), { onItemEnter: l, onItemLeave: i } = ie(Ur, void 0), u = Ue((h) => (t("pointermove", h), h.defaultPrevented), Kl((h) => {
      if (e.disabled) {
        i(h);
        return;
      }
      const v = h.currentTarget;
      v === document.activeElement || v.contains(document.activeElement) || (l(h), h.defaultPrevented || v?.focus());
    })), d = Ue((h) => (t("pointerleave", h), h.defaultPrevented), Kl(i)), f = Ue((h) => {
      if (!e.disabled)
        return t("click", h), h.type !== "keydown" && h.defaultPrevented;
    }, (h) => {
      var v, m, y;
      if (e.disabled) {
        h.stopImmediatePropagation();
        return;
      }
      (v = o?.hideOnClick) != null && v.value && ((m = o.handleClick) == null || m.call(o)), (y = o.commandHandler) == null || y.call(o, e.command, r, h);
    }), g = O(() => ({ ...e, ...n }));
    return {
      handleClick: f,
      handlePointerMove: u,
      handlePointerLeave: d,
      textContent: a,
      propsAndAttrs: g
    };
  }
});
function z_(e, t, n, o, r, s) {
  var a;
  const l = Pe("el-dropdown-item-impl"), i = Pe("el-roving-focus-item"), u = Pe("el-dropdown-collection-item");
  return L(), ee(u, {
    disabled: e.disabled,
    "text-value": (a = e.textValue) != null ? a : e.textContent
  }, {
    default: W(() => [
      K(i, {
        focusable: !e.disabled
      }, {
        default: W(() => [
          K(l, Nt(e.propsAndAttrs, {
            onPointerleave: e.handlePointerLeave,
            onPointermove: e.handlePointerMove,
            onClickimpl: e.handleClick
          }), {
            default: W(() => [
              Q(e.$slots, "default")
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
var mc = /* @__PURE__ */ ve(x_, [["render", z_], ["__file", "dropdown-item.vue"]]);
const H_ = Y({
  name: "ElDropdownMenu",
  props: C_,
  setup(e) {
    const t = Ee("dropdown"), { _elDropdownSize: n } = vc(), o = n.value, { focusTrapRef: r, onKeydown: s } = ie(ra, void 0), { contentRef: a, role: l, triggerId: i } = ie(Ur, void 0), { collectionRef: u, getItems: d } = ie(k_, void 0), {
      rovingFocusGroupRef: f,
      rovingFocusGroupRootStyle: g,
      tabIndex: h,
      onBlur: v,
      onFocus: m,
      onMousedown: y
    } = ie(ba, void 0), { collectionRef: p } = ie(ya, void 0), _ = O(() => [t.b("menu"), t.bm("menu", o?.value)]), k = ha(a, u, r, f, p), w = Ue((I) => {
      var E;
      (E = e.onKeydown) == null || E.call(e, I);
    }, (I) => {
      const { currentTarget: E, code: H, target: V } = I;
      if (E.contains(V), Le.tab === H && I.stopImmediatePropagation(), I.preventDefault(), V !== c(a) || !T_.includes(H))
        return;
      const G = d().filter((Z) => !Z.disabled).map((Z) => Z.ref);
      pc.includes(H) && G.reverse(), _a(G);
    });
    return {
      size: o,
      rovingFocusGroupRootStyle: g,
      tabIndex: h,
      dropdownKls: _,
      role: l,
      triggerId: i,
      dropdownListWrapperRef: k,
      handleKeydown: (I) => {
        w(I), s(I);
      },
      onBlur: v,
      onFocus: m,
      onMousedown: y
    };
  }
});
function W_(e, t, n, o, r, s) {
  return L(), x("ul", {
    ref: e.dropdownListWrapperRef,
    class: z(e.dropdownKls),
    style: Ye(e.rovingFocusGroupRootStyle),
    tabindex: -1,
    role: e.role,
    "aria-labelledby": e.triggerId,
    onBlur: e.onBlur,
    onFocus: e.onFocus,
    onKeydown: Ve(e.handleKeydown, ["self"]),
    onMousedown: Ve(e.onMousedown, ["self"])
  }, [
    Q(e.$slots, "default")
  ], 46, ["role", "aria-labelledby", "onBlur", "onFocus", "onKeydown", "onMousedown"]);
}
var gc = /* @__PURE__ */ ve(H_, [["render", W_], ["__file", "dropdown-menu.vue"]]);
Ot(P_, {
  DropdownItem: mc,
  DropdownMenu: gc
});
const U_ = Vo(mc);
Vo(gc);
const j_ = me({
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
  size: Bo,
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
    validator: (e) => e === null || Oe(e) || ["min", "max"].includes(e),
    default: null
  },
  name: String,
  placeholder: String,
  precision: {
    type: Number,
    validator: (e) => e >= 0 && e === Number.parseInt(`${e}`, 10)
  },
  validateEvent: {
    type: Boolean,
    default: !0
  },
  ...fo(["ariaLabel"])
}), G_ = {
  [eo]: (e, t) => t !== e,
  blur: (e) => e instanceof FocusEvent,
  focus: (e) => e instanceof FocusEvent,
  [Jn]: (e) => Oe(e) || cn(e),
  [tt]: (e) => Oe(e) || cn(e)
}, K_ = Y({
  name: "ElInputNumber"
}), Y_ = /* @__PURE__ */ Y({
  ...K_,
  props: j_,
  emits: G_,
  setup(e, { expose: t, emit: n }) {
    const o = e, { t: r } = Do(), s = Ee("input-number"), a = P(), l = On({
      currentValue: o.modelValue,
      userInput: null
    }), { formItem: i } = Vr(), u = O(() => Oe(o.modelValue) && o.modelValue <= o.min), d = O(() => Oe(o.modelValue) && o.modelValue >= o.max), f = O(() => {
      const R = p(o.step);
      return jt(o.precision) ? Math.max(p(o.modelValue), R) : (R > o.precision, o.precision);
    }), g = O(() => o.controls && o.controlsPosition === "right"), h = po(), v = xr(), m = O(() => {
      if (l.userInput !== null)
        return l.userInput;
      let R = l.currentValue;
      if (cn(R))
        return "";
      if (Oe(R)) {
        if (Number.isNaN(R))
          return "";
        jt(o.precision) || (R = R.toFixed(o.precision));
      }
      return R;
    }), y = (R, M) => {
      if (jt(M) && (M = f.value), M === 0)
        return Math.round(R);
      let D = String(R);
      const re = D.indexOf(".");
      if (re === -1 || !D.replace(".", "").split("")[re + M])
        return R;
      const Ae = D.length;
      return D.charAt(Ae - 1) === "5" && (D = `${D.slice(0, Math.max(0, Ae - 1))}6`), Number.parseFloat(Number(D).toFixed(M));
    }, p = (R) => {
      if (cn(R))
        return 0;
      const M = R.toString(), D = M.indexOf(".");
      let re = 0;
      return D !== -1 && (re = M.length - D - 1), re;
    }, _ = (R, M = 1) => Oe(R) ? y(R + o.step * M) : l.currentValue, k = () => {
      if (o.readonly || v.value || d.value)
        return;
      const R = Number(m.value) || 0, M = _(R);
      I(M), n(Jn, l.currentValue), le();
    }, w = () => {
      if (o.readonly || v.value || u.value)
        return;
      const R = Number(m.value) || 0, M = _(R, -1);
      I(M), n(Jn, l.currentValue), le();
    }, T = (R, M) => {
      const { max: D, min: re, step: se, precision: pe, stepStrictly: Ae, valueOnClear: Fe } = o;
      D < re && Zs("InputNumber", "min should not be greater than max.");
      let we = Number(R);
      if (cn(R) || Number.isNaN(we))
        return null;
      if (R === "") {
        if (Fe === null)
          return null;
        we = Ct(Fe) ? { min: re, max: D }[Fe] : Fe;
      }
      return Ae && (we = y(Math.round(we / se) * se, pe), we !== R && M && n(tt, we)), jt(pe) || (we = y(we, pe)), (we > D || we < re) && (we = we > D ? D : re, M && n(tt, we)), we;
    }, I = (R, M = !0) => {
      var D;
      const re = l.currentValue, se = T(R);
      if (!M) {
        n(tt, se);
        return;
      }
      re === se && R || (l.userInput = null, n(tt, se), re !== se && n(eo, se, re), o.validateEvent && ((D = i?.validate) == null || D.call(i, "change").catch((pe) => void 0)), l.currentValue = se);
    }, E = (R) => {
      l.userInput = R;
      const M = R === "" ? null : Number(R);
      n(Jn, M), I(M, !1);
    }, H = (R) => {
      const M = R !== "" ? Number(R) : "";
      (Oe(M) && !Number.isNaN(M) || R === "") && I(M), le(), l.userInput = null;
    }, V = () => {
      var R, M;
      (M = (R = a.value) == null ? void 0 : R.focus) == null || M.call(R);
    }, J = () => {
      var R, M;
      (M = (R = a.value) == null ? void 0 : R.blur) == null || M.call(R);
    }, G = (R) => {
      n("focus", R);
    }, Z = (R) => {
      var M, D;
      l.userInput = null, wu() && l.currentValue === null && ((M = a.value) != null && M.input) && (a.value.input.value = ""), n("blur", R), o.validateEvent && ((D = i?.validate) == null || D.call(i, "blur").catch((re) => void 0));
    }, le = () => {
      l.currentValue !== o.modelValue && (l.currentValue = o.modelValue);
    }, Te = (R) => {
      document.activeElement === R.target && R.preventDefault();
    };
    return ae(() => o.modelValue, (R, M) => {
      const D = T(R, !0);
      l.userInput === null && D !== M && (l.currentValue = D);
    }, { immediate: !0 }), Me(() => {
      var R;
      const { min: M, max: D, modelValue: re } = o, se = (R = a.value) == null ? void 0 : R.input;
      if (se.setAttribute("role", "spinbutton"), Number.isFinite(D) ? se.setAttribute("aria-valuemax", String(D)) : se.removeAttribute("aria-valuemax"), Number.isFinite(M) ? se.setAttribute("aria-valuemin", String(M)) : se.removeAttribute("aria-valuemin"), se.setAttribute("aria-valuenow", l.currentValue || l.currentValue === 0 ? String(l.currentValue) : ""), se.setAttribute("aria-disabled", String(v.value)), !Oe(re) && re != null) {
        let pe = Number(re);
        Number.isNaN(pe) && (pe = null), n(tt, pe);
      }
      se.addEventListener("wheel", Te, { passive: !1 });
    }), Bi(() => {
      var R, M;
      const D = (R = a.value) == null ? void 0 : R.input;
      D?.setAttribute("aria-valuenow", `${(M = l.currentValue) != null ? M : ""}`);
    }), t({
      focus: V,
      blur: J
    }), (R, M) => (L(), x("div", {
      class: z([
        c(s).b(),
        c(s).m(c(h)),
        c(s).is("disabled", c(v)),
        c(s).is("without-controls", !R.controls),
        c(s).is("controls-right", c(g))
      ]),
      onDragstart: Ve(() => {
      }, ["prevent"])
    }, [
      R.controls ? vt((L(), x("span", {
        key: 0,
        role: "button",
        "aria-label": c(r)("el.inputNumber.decrease"),
        class: z([c(s).e("decrease"), c(s).is("disabled", c(u))]),
        onKeydown: on(w, ["enter"])
      }, [
        Q(R.$slots, "decrease-icon", {}, () => [
          K(c(Ke), null, {
            default: W(() => [
              c(g) ? (L(), ee(c(Qs), { key: 0 })) : (L(), ee(c(Zg), { key: 1 }))
            ]),
            _: 1
          })
        ])
      ], 42, ["aria-label", "onKeydown"])), [
        [c(Ql), w]
      ]) : j("v-if", !0),
      R.controls ? vt((L(), x("span", {
        key: 1,
        role: "button",
        "aria-label": c(r)("el.inputNumber.increase"),
        class: z([c(s).e("increase"), c(s).is("disabled", c(d))]),
        onKeydown: on(k, ["enter"])
      }, [
        Q(R.$slots, "increase-icon", {}, () => [
          K(c(Ke), null, {
            default: W(() => [
              c(g) ? (L(), ee(c(Bg), { key: 0 })) : (L(), ee(c(Qg), { key: 1 }))
            ]),
            _: 1
          })
        ])
      ], 42, ["aria-label", "onKeydown"])), [
        [c(Ql), k]
      ]) : j("v-if", !0),
      K(c(Ch), {
        id: R.id,
        ref_key: "input",
        ref: a,
        type: "number",
        step: R.step,
        "model-value": c(m),
        placeholder: R.placeholder,
        readonly: R.readonly,
        disabled: c(v),
        size: c(h),
        max: R.max,
        min: R.min,
        name: R.name,
        "aria-label": R.ariaLabel,
        "validate-event": !1,
        onKeydown: [
          on(Ve(k, ["prevent"]), ["up"]),
          on(Ve(w, ["prevent"]), ["down"])
        ],
        onBlur: Z,
        onFocus: G,
        onInput: E,
        onChange: H
      }, Ar({
        _: 2
      }, [
        R.$slots.prefix ? {
          name: "prefix",
          fn: W(() => [
            Q(R.$slots, "prefix")
          ])
        } : void 0,
        R.$slots.suffix ? {
          name: "suffix",
          fn: W(() => [
            Q(R.$slots, "suffix")
          ])
        } : void 0
      ]), 1032, ["id", "step", "model-value", "placeholder", "readonly", "disabled", "size", "max", "min", "name", "aria-label", "onKeydown"])
    ], 42, ["onDragstart"]));
  }
});
var q_ = /* @__PURE__ */ ve(Y_, [["__file", "input-number.vue"]]);
const X_ = Ot(q_);
function Z_() {
  const e = En(), t = P(0), n = 11, o = O(() => ({
    minWidth: `${Math.max(t.value, n)}px`
  }));
  return Ht(e, () => {
    var s, a;
    t.value = (a = (s = e.value) == null ? void 0 : s.getBoundingClientRect().width) != null ? a : 0;
  }), {
    calculatorRef: e,
    calculatorWidth: t,
    inputStyle: o
  };
}
const hc = Symbol("ElSelectGroup"), jr = Symbol("ElSelect");
function J_(e, t) {
  const n = ie(jr), o = ie(hc, { disabled: !1 }), r = O(() => d(rn(n.props.modelValue), e.value)), s = O(() => {
    var h;
    if (n.props.multiple) {
      const v = rn((h = n.props.modelValue) != null ? h : []);
      return !r.value && v.length >= n.props.multipleLimit && n.props.multipleLimit > 0;
    } else
      return !1;
  }), a = O(() => e.label || (kt(e.value) ? "" : e.value)), l = O(() => e.value || e.label || ""), i = O(() => e.disabled || t.groupDisabled || s.value), u = Je(), d = (h = [], v) => {
    if (kt(e.value)) {
      const m = n.props.valueKey;
      return h && h.some((y) => Rd(Sn(y, m)) === Sn(v, m));
    } else
      return h && h.includes(v);
  }, f = () => {
    !e.disabled && !o.disabled && (n.states.hoveringIndex = n.optionsArray.indexOf(u.proxy));
  }, g = (h) => {
    const v = new RegExp(Ib(h), "i");
    t.visible = v.test(a.value) || e.created;
  };
  return ae(() => a.value, () => {
    !e.created && !n.props.remote && n.setSelected();
  }), ae(() => e.value, (h, v) => {
    const { remote: m, valueKey: y } = n.props;
    if ((m ? h !== v : !wo(h, v)) && (n.onOptionDestroy(v, u.proxy), n.onOptionCreate(u.proxy)), !e.created && !m) {
      if (y && kt(h) && kt(v) && h[y] === v[y])
        return;
      n.setSelected();
    }
  }), ae(() => o.disabled, () => {
    t.groupDisabled = o.disabled;
  }, { immediate: !0 }), {
    select: n,
    currentLabel: a,
    currentValue: l,
    itemSelected: r,
    isDisabled: i,
    hoverItem: f,
    updateOption: g
  };
}
const Q_ = Y({
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
    const t = Ee("select"), n = kn(), o = O(() => [
      t.be("dropdown", "item"),
      t.is("disabled", c(l)),
      t.is("selected", c(a)),
      t.is("hovering", c(g))
    ]), r = On({
      index: -1,
      groupDisabled: !1,
      visible: !0,
      hover: !1
    }), {
      currentLabel: s,
      itemSelected: a,
      isDisabled: l,
      select: i,
      hoverItem: u,
      updateOption: d
    } = J_(e, r), { visible: f, hover: g } = zs(r), h = Je().proxy;
    i.onOptionCreate(h), Tt(() => {
      const m = h.value, { selected: y } = i.states, p = y.some((_) => _.value === h.value);
      xe(() => {
        i.states.cachedOptions.get(m) === h && !p && i.states.cachedOptions.delete(m);
      }), i.onOptionDestroy(m, h);
    });
    function v() {
      l.value || i.handleOptionSelect(h);
    }
    return {
      ns: t,
      id: n,
      containerKls: o,
      currentLabel: s,
      itemSelected: a,
      isDisabled: l,
      select: i,
      hoverItem: u,
      updateOption: d,
      visible: f,
      hover: g,
      selectOptionClick: v,
      states: r
    };
  }
});
function e1(e, t, n, o, r, s) {
  return vt((L(), x("li", {
    id: e.id,
    class: z(e.containerKls),
    role: "option",
    "aria-disabled": e.isDisabled || void 0,
    "aria-selected": e.itemSelected,
    onMousemove: e.hoverItem,
    onClick: Ve(e.selectOptionClick, ["stop"])
  }, [
    Q(e.$slots, "default", {}, () => [
      $("span", null, te(e.currentLabel), 1)
    ])
  ], 42, ["id", "aria-disabled", "aria-selected", "onMousemove", "onClick"])), [
    [Yt, e.visible]
  ]);
}
var wa = /* @__PURE__ */ ve(Q_, [["render", e1], ["__file", "option.vue"]]);
const t1 = Y({
  name: "ElSelectDropdown",
  componentName: "ElSelectDropdown",
  setup() {
    const e = ie(jr), t = Ee("select"), n = O(() => e.props.popperClass), o = O(() => e.props.multiple), r = O(() => e.props.fitInputWidth), s = P("");
    function a() {
      var l;
      s.value = `${(l = e.selectRef) == null ? void 0 : l.offsetWidth}px`;
    }
    return Me(() => {
      a(), Ht(e.selectRef, a);
    }), {
      ns: t,
      minWidth: s,
      popperClass: n,
      isMultiple: o,
      isFitInputWidth: r
    };
  }
});
function n1(e, t, n, o, r, s) {
  return L(), x("div", {
    class: z([e.ns.b("dropdown"), e.ns.is("multiple", e.isMultiple), e.popperClass]),
    style: Ye({ [e.isFitInputWidth ? "width" : "minWidth"]: e.minWidth })
  }, [
    e.$slots.header ? (L(), x("div", {
      key: 0,
      class: z(e.ns.be("dropdown", "header"))
    }, [
      Q(e.$slots, "header")
    ], 2)) : j("v-if", !0),
    Q(e.$slots, "default"),
    e.$slots.footer ? (L(), x("div", {
      key: 1,
      class: z(e.ns.be("dropdown", "footer"))
    }, [
      Q(e.$slots, "footer")
    ], 2)) : j("v-if", !0)
  ], 6);
}
var o1 = /* @__PURE__ */ ve(t1, [["render", n1], ["__file", "select-dropdown.vue"]]);
const r1 = (e, t) => {
  const { t: n } = Do(), o = kn(), r = Ee("select"), s = Ee("input"), a = On({
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
  }), l = P(null), i = P(null), u = P(null), d = P(null), f = P(null), g = P(null), h = P(null), v = P(null), m = P(null), y = P(null), p = P(null), {
    isComposing: _,
    handleCompositionStart: k,
    handleCompositionUpdate: w,
    handleCompositionEnd: T
  } = Iu({
    afterComposition: (N) => rt(N)
  }), { wrapperRef: I, isFocused: E, handleBlur: H } = Ou(f, {
    beforeFocus() {
      return M.value;
    },
    afterFocus() {
      e.automaticDropdown && !V.value && (V.value = !0, a.menuVisibleOnFocus = !0);
    },
    beforeBlur(N) {
      var X, de;
      return ((X = u.value) == null ? void 0 : X.isFocusInsideContent(N)) || ((de = d.value) == null ? void 0 : de.isFocusInsideContent(N));
    },
    afterBlur() {
      V.value = !1, a.menuVisibleOnFocus = !1;
    }
  }), V = P(!1), J = P(), { form: G, formItem: Z } = Vr(), { inputId: le } = Eu(e, {
    formItemContext: Z
  }), { valueOnClear: Te, isEmptyValue: R } = Tg(e), M = O(() => e.disabled || G?.disabled), D = O(() => Ut(e.modelValue) ? e.modelValue.length > 0 : !R(e.modelValue)), re = O(() => {
    var N;
    return (N = G?.statusIcon) != null ? N : !1;
  }), se = O(() => e.clearable && !M.value && a.inputHovering && D.value), pe = O(() => e.remote && e.filterable && !e.remoteShowSuffix ? "" : e.suffixIcon), Ae = O(() => r.is("reverse", pe.value && V.value)), Fe = O(() => Z?.validateState || ""), we = O(() => _u[Fe.value]), qe = O(() => e.remote ? 300 : 0), je = O(() => e.remote && !a.inputValue && a.options.size === 0), Xe = O(() => e.loading ? e.loadingText || n("el.select.loading") : e.filterable && a.inputValue && a.options.size > 0 && De.value === 0 ? e.noMatchText || n("el.select.noMatch") : a.options.size === 0 ? e.noDataText || n("el.select.noData") : null), De = O(() => ye.value.filter((N) => N.visible).length), ye = O(() => {
    const N = Array.from(a.options.values()), X = [];
    return a.optionValues.forEach((de) => {
      const Ge = N.findIndex((wt) => wt.value === de);
      Ge > -1 && X.push(N[Ge]);
    }), X.length >= N.length ? X : N;
  }), ut = O(() => Array.from(a.cachedOptions.values())), mt = O(() => {
    const N = ye.value.filter((X) => !X.created).some((X) => X.currentLabel === a.inputValue);
    return e.filterable && e.allowCreate && a.inputValue !== "" && !N;
  }), ct = () => {
    e.filterable && We(e.filterMethod) || e.filterable && e.remote && We(e.remoteMethod) || ye.value.forEach((N) => {
      var X;
      (X = N.updateOption) == null || X.call(N, a.inputValue);
    });
  }, _t = po(), dt = O(() => ["small"].includes(_t.value) ? "small" : "default"), ft = O({
    get() {
      return V.value && !je.value;
    },
    set(N) {
      V.value = N;
    }
  }), B = O(() => {
    if (e.multiple && !jt(e.modelValue))
      return rn(e.modelValue).length === 0 && !a.inputValue;
    const N = Ut(e.modelValue) ? e.modelValue[0] : e.modelValue;
    return e.filterable || jt(N) ? !a.inputValue : !0;
  }), U = O(() => {
    var N;
    const X = (N = e.placeholder) != null ? N : n("el.select.placeholder");
    return e.multiple || !D.value ? X : a.selectedLabel;
  }), Se = O(() => bs ? null : "mouseenter");
  ae(() => e.modelValue, (N, X) => {
    e.multiple && e.filterable && !e.reserveKeyword && (a.inputValue = "", b("")), A(), !wo(N, X) && e.validateEvent && Z?.validate("change").catch((de) => void 0);
  }, {
    flush: "post",
    deep: !0
  }), ae(() => V.value, (N) => {
    N ? b(a.inputValue) : (a.inputValue = "", a.previousQuery = null, a.isBeforeHide = !0), t("visible-change", N);
  }), ae(() => a.options.entries(), () => {
    Ne && (A(), e.defaultFirstOption && (e.filterable || e.remote) && De.value && C());
  }, {
    flush: "post"
  }), ae([() => a.hoveringIndex, ye], ([N]) => {
    Oe(N) && N > -1 ? J.value = ye.value[N] || {} : J.value = {}, ye.value.forEach((X) => {
      X.hover = J.value === X;
    });
  }), Fs(() => {
    a.isBeforeHide || ct();
  });
  const b = (N) => {
    a.previousQuery === N || _.value || (a.previousQuery = N, e.filterable && We(e.filterMethod) ? e.filterMethod(N) : e.filterable && e.remote && We(e.remoteMethod) && e.remoteMethod(N), e.defaultFirstOption && (e.filterable || e.remote) && De.value ? xe(C) : xe(fe));
  }, C = () => {
    const N = ye.value.filter((wt) => wt.visible && !wt.disabled && !wt.states.groupDisabled), X = N.find((wt) => wt.created), de = N[0], Ge = ye.value.map((wt) => wt.value);
    a.hoveringIndex = $a(Ge, X || de);
  }, A = () => {
    if (e.multiple)
      a.selectedLabel = "";
    else {
      const X = Ut(e.modelValue) ? e.modelValue[0] : e.modelValue, de = q(X);
      a.selectedLabel = de.currentLabel, a.selected = [de];
      return;
    }
    const N = [];
    jt(e.modelValue) || rn(e.modelValue).forEach((X) => {
      N.push(q(X));
    }), a.selected = N;
  }, q = (N) => {
    let X;
    const de = Zd(N);
    for (let jn = a.cachedOptions.size - 1; jn >= 0; jn--) {
      const hn = ut.value[jn];
      if (de ? Sn(hn.value, e.valueKey) === Sn(N, e.valueKey) : hn.value === N) {
        X = {
          value: N,
          currentLabel: hn.currentLabel,
          get isDisabled() {
            return hn.isDisabled;
          }
        };
        break;
      }
    }
    if (X)
      return X;
    const Ge = de ? N.label : N ?? "";
    return {
      value: N,
      currentLabel: Ge
    };
  }, fe = () => {
    a.hoveringIndex = ye.value.findIndex((N) => a.selected.some((X) => Uo(X) === Uo(N)));
  }, ue = () => {
    a.selectionWidth = i.value.getBoundingClientRect().width;
  }, S = () => {
    a.collapseItemWidth = y.value.getBoundingClientRect().width;
  }, F = () => {
    var N, X;
    (X = (N = u.value) == null ? void 0 : N.updatePopper) == null || X.call(N);
  }, ce = () => {
    var N, X;
    (X = (N = d.value) == null ? void 0 : N.updatePopper) == null || X.call(N);
  }, be = () => {
    a.inputValue.length > 0 && !V.value && (V.value = !0), b(a.inputValue);
  }, rt = (N) => {
    if (a.inputValue = N.target.value, e.remote)
      $n();
    else
      return be();
  }, $n = Vm(() => {
    be();
  }, qe.value), It = (N) => {
    wo(e.modelValue, N) || t(eo, N);
  }, Xr = (N) => xm(N, (X) => {
    const de = a.cachedOptions.get(X);
    return de && !de.disabled && !de.states.groupDisabled;
  }), La = (N) => {
    if (e.multiple && N.code !== Le.delete && N.target.value.length <= 0) {
      const X = rn(e.modelValue).slice(), de = Xr(X);
      if (de < 0)
        return;
      const Ge = X[de];
      X.splice(de, 1), t(tt, X), It(X), t("remove-tag", Ge);
    }
  }, sd = (N, X) => {
    const de = a.selected.indexOf(X);
    if (de > -1 && !M.value) {
      const Ge = rn(e.modelValue).slice();
      Ge.splice(de, 1), t(tt, Ge), It(Ge), t("remove-tag", X.value);
    }
    N.stopPropagation(), Wo();
  }, Aa = (N) => {
    N.stopPropagation();
    const X = e.multiple ? [] : Te.value;
    if (e.multiple)
      for (const de of a.selected)
        de.isDisabled && X.push(de.value);
    t(tt, X), It(X), a.hoveringIndex = -1, V.value = !1, t("clear"), Wo();
  }, Na = (N) => {
    var X;
    if (e.multiple) {
      const de = rn((X = e.modelValue) != null ? X : []).slice(), Ge = $a(de, N);
      Ge > -1 ? de.splice(Ge, 1) : (e.multipleLimit <= 0 || de.length < e.multipleLimit) && de.push(N.value), t(tt, de), It(de), N.created && b(""), e.filterable && !e.reserveKeyword && (a.inputValue = "");
    } else
      t(tt, N.value), It(N.value), V.value = !1;
    Wo(), !V.value && xe(() => {
      Ho(N);
    });
  }, $a = (N = [], X) => jt(X) ? -1 : kt(X.value) ? N.findIndex((de) => wo(Sn(de, e.valueKey), Uo(X))) : N.indexOf(X.value), Ho = (N) => {
    var X, de, Ge, wt, jn;
    const hn = Ut(N) ? N[0] : N;
    let jo = null;
    if (hn?.value) {
      const vo = ye.value.filter((Sd) => Sd.value === hn.value);
      vo.length > 0 && (jo = vo[0].$el);
    }
    if (u.value && jo) {
      const vo = (wt = (Ge = (de = (X = u.value) == null ? void 0 : X.popperRef) == null ? void 0 : de.contentRef) == null ? void 0 : Ge.querySelector) == null ? void 0 : wt.call(Ge, `.${r.be("dropdown", "wrap")}`);
      vo && Ng(vo, jo);
    }
    (jn = p.value) == null || jn.handleScroll();
  }, ad = (N) => {
    a.options.set(N.value, N), a.cachedOptions.set(N.value, N);
  }, ld = (N, X) => {
    a.options.get(N) === X && a.options.delete(N);
  }, id = O(() => {
    var N, X;
    return (X = (N = u.value) == null ? void 0 : N.popperRef) == null ? void 0 : X.contentRef;
  }), ud = () => {
    a.isBeforeHide = !1, xe(() => {
      var N;
      (N = p.value) == null || N.update(), Ho(a.selected);
    });
  }, Wo = () => {
    var N;
    (N = f.value) == null || N.focus();
  }, cd = () => {
    var N;
    if (V.value) {
      V.value = !1, xe(() => {
        var X;
        return (X = f.value) == null ? void 0 : X.blur();
      });
      return;
    }
    (N = f.value) == null || N.blur();
  }, dd = (N) => {
    Aa(N);
  }, fd = (N) => {
    if (V.value = !1, E.value) {
      const X = new FocusEvent("focus", N);
      xe(() => H(X));
    }
  }, pd = () => {
    a.inputValue.length > 0 ? a.inputValue = "" : V.value = !1;
  }, Pa = () => {
    M.value || (bs && (a.inputHovering = !0), a.menuVisibleOnFocus ? a.menuVisibleOnFocus = !1 : V.value = !V.value);
  }, vd = () => {
    if (!V.value)
      Pa();
    else {
      const N = ye.value[a.hoveringIndex];
      N && !N.isDisabled && Na(N);
    }
  }, Uo = (N) => kt(N.value) ? Sn(N.value, e.valueKey) : N.value, md = O(() => ye.value.filter((N) => N.visible).every((N) => N.isDisabled)), gd = O(() => e.multiple ? e.collapseTags ? a.selected.slice(0, e.maxCollapseTags) : a.selected : []), hd = O(() => e.multiple ? e.collapseTags ? a.selected.slice(e.maxCollapseTags) : [] : []), Ra = (N) => {
    if (!V.value) {
      V.value = !0;
      return;
    }
    if (!(a.options.size === 0 || De.value === 0 || _.value) && !md.value) {
      N === "next" ? (a.hoveringIndex++, a.hoveringIndex === a.options.size && (a.hoveringIndex = 0)) : N === "prev" && (a.hoveringIndex--, a.hoveringIndex < 0 && (a.hoveringIndex = a.options.size - 1));
      const X = ye.value[a.hoveringIndex];
      (X.isDisabled || !X.visible) && Ra(N), xe(() => Ho(J.value));
    }
  }, yd = () => {
    if (!i.value)
      return 0;
    const N = window.getComputedStyle(i.value);
    return Number.parseFloat(N.gap || "6px");
  }, bd = O(() => {
    const N = yd();
    return { maxWidth: `${y.value && e.maxCollapseTags === 1 ? a.selectionWidth - a.collapseItemWidth - N : a.selectionWidth}px` };
  }), _d = O(() => ({ maxWidth: `${a.selectionWidth}px` })), wd = (N) => {
    t("popup-scroll", N);
  };
  return Ht(i, ue), Ht(v, F), Ht(I, F), Ht(m, ce), Ht(y, S), Me(() => {
    A();
  }), {
    inputId: le,
    contentId: o,
    nsSelect: r,
    nsInput: s,
    states: a,
    isFocused: E,
    expanded: V,
    optionsArray: ye,
    hoverOption: J,
    selectSize: _t,
    filteredOptionsCount: De,
    updateTooltip: F,
    updateTagTooltip: ce,
    debouncedOnInputChange: $n,
    onInput: rt,
    deletePrevTag: La,
    deleteTag: sd,
    deleteSelected: Aa,
    handleOptionSelect: Na,
    scrollToOption: Ho,
    hasModelValue: D,
    shouldShowPlaceholder: B,
    currentPlaceholder: U,
    mouseEnterEventName: Se,
    needStatusIcon: re,
    showClose: se,
    iconComponent: pe,
    iconReverse: Ae,
    validateState: Fe,
    validateIcon: we,
    showNewOption: mt,
    updateOptions: ct,
    collapseTagSize: dt,
    setSelected: A,
    selectDisabled: M,
    emptyText: Xe,
    handleCompositionStart: k,
    handleCompositionUpdate: w,
    handleCompositionEnd: T,
    onOptionCreate: ad,
    onOptionDestroy: ld,
    handleMenuEnter: ud,
    focus: Wo,
    blur: cd,
    handleClearClick: dd,
    handleClickOutside: fd,
    handleEsc: pd,
    toggleMenu: Pa,
    selectOption: vd,
    getValueKey: Uo,
    navigateOptions: Ra,
    dropdownMenuVisible: ft,
    showTagList: gd,
    collapseTagList: hd,
    popupScroll: wd,
    tagStyle: bd,
    collapseTagStyle: _d,
    popperRef: id,
    inputRef: f,
    tooltipRef: u,
    tagTooltipRef: d,
    prefixRef: g,
    suffixRef: h,
    selectRef: l,
    wrapperRef: I,
    selectionRef: i,
    scrollbarRef: p,
    menuRef: v,
    tagMenuRef: m,
    collapseItemRef: y
  };
};
var s1 = Y({
  name: "ElOptions",
  setup(e, { slots: t }) {
    const n = ie(jr);
    let o = [];
    return () => {
      var r, s;
      const a = (r = t.default) == null ? void 0 : r.call(t), l = [];
      function i(u) {
        Ut(u) && u.forEach((d) => {
          var f, g, h, v;
          const m = (f = d?.type || {}) == null ? void 0 : f.name;
          m === "ElOptionGroup" ? i(!Ct(d.children) && !Ut(d.children) && We((g = d.children) == null ? void 0 : g.default) ? (h = d.children) == null ? void 0 : h.default() : d.children) : m === "ElOption" ? l.push((v = d.props) == null ? void 0 : v.value) : Ut(d.children) && i(d.children);
        });
      }
      return a.length && i((s = a[0]) == null ? void 0 : s.children), wo(l, o) || (o = l, n && (n.states.optionValues = l)), a;
    };
  }
});
const a1 = me({
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
  size: Bo,
  effect: {
    type: oe(String),
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
    type: oe(Object),
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
  teleported: No.teleported,
  persistent: {
    type: Boolean,
    default: !0
  },
  clearIcon: {
    type: Xt,
    default: ea
  },
  fitInputWidth: Boolean,
  suffixIcon: {
    type: Xt,
    default: Qs
  },
  tagType: { ...Ts.type, default: "info" },
  tagEffect: { ...Ts.effect, default: "light" },
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
    type: oe(String),
    values: Hr,
    default: "bottom-start"
  },
  fallbackPlacements: {
    type: oe(Array),
    default: ["bottom-start", "top-start", "right", "left"]
  },
  tabindex: {
    type: [String, Number],
    default: 0
  },
  appendTo: String,
  ...pu,
  ...fo(["ariaLabel"])
}), ni = "ElSelect", l1 = Y({
  name: ni,
  componentName: ni,
  components: {
    ElSelectMenu: o1,
    ElOption: wa,
    ElOptions: s1,
    ElTag: $b,
    ElScrollbar: ku,
    ElTooltip: ec,
    ElIcon: Ke
  },
  directives: { ClickOutside: Pb },
  props: a1,
  emits: [
    tt,
    eo,
    "remove-tag",
    "clear",
    "visible-change",
    "focus",
    "blur",
    "popup-scroll"
  ],
  setup(e, { emit: t }) {
    const n = O(() => {
      const { modelValue: i, multiple: u } = e, d = u ? [] : void 0;
      return Ut(i) ? u ? i : d : u ? d : i;
    }), o = On({
      ...zs(e),
      modelValue: n
    }), r = r1(o, t), { calculatorRef: s, inputStyle: a } = Z_();
    Qe(jr, On({
      props: o,
      states: r.states,
      optionsArray: r.optionsArray,
      handleOptionSelect: r.handleOptionSelect,
      onOptionCreate: r.onOptionCreate,
      onOptionDestroy: r.onOptionDestroy,
      selectRef: r.selectRef,
      setSelected: r.setSelected
    }));
    const l = O(() => e.multiple ? r.states.selected.map((i) => i.currentLabel) : r.states.selectedLabel);
    return {
      ...r,
      modelValue: n,
      selectedLabel: l,
      calculatorRef: s,
      inputStyle: a
    };
  }
});
function i1(e, t, n, o, r, s) {
  const a = Pe("el-tag"), l = Pe("el-tooltip"), i = Pe("el-icon"), u = Pe("el-option"), d = Pe("el-options"), f = Pe("el-scrollbar"), g = Pe("el-select-menu"), h = Md("click-outside");
  return vt((L(), x("div", {
    ref: "selectRef",
    class: z([e.nsSelect.b(), e.nsSelect.m(e.selectSize)]),
    [Fd(e.mouseEnterEventName)]: (v) => e.states.inputHovering = !0,
    onMouseleave: (v) => e.states.inputHovering = !1
  }, [
    K(l, {
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
      onHide: (v) => e.states.isBeforeHide = !1
    }, {
      default: W(() => {
        var v;
        return [
          $("div", {
            ref: "wrapperRef",
            class: z([
              e.nsSelect.e("wrapper"),
              e.nsSelect.is("focused", e.isFocused),
              e.nsSelect.is("hovering", e.states.inputHovering),
              e.nsSelect.is("filterable", e.filterable),
              e.nsSelect.is("disabled", e.selectDisabled)
            ]),
            onClick: Ve(e.toggleMenu, ["prevent"])
          }, [
            e.$slots.prefix ? (L(), x("div", {
              key: 0,
              ref: "prefixRef",
              class: z(e.nsSelect.e("prefix"))
            }, [
              Q(e.$slots, "prefix")
            ], 2)) : j("v-if", !0),
            $("div", {
              ref: "selectionRef",
              class: z([
                e.nsSelect.e("selection"),
                e.nsSelect.is("near", e.multiple && !e.$slots.prefix && !!e.states.selected.length)
              ])
            }, [
              e.multiple ? Q(e.$slots, "tag", { key: 0 }, () => [
                (L(!0), x(ke, null, wn(e.showTagList, (m) => (L(), x("div", {
                  key: e.getValueKey(m),
                  class: z(e.nsSelect.e("selected-item"))
                }, [
                  K(a, {
                    closable: !e.selectDisabled && !m.isDisabled,
                    size: e.collapseTagSize,
                    type: e.tagType,
                    effect: e.tagEffect,
                    "disable-transitions": "",
                    style: Ye(e.tagStyle),
                    onClose: (y) => e.deleteTag(y, m)
                  }, {
                    default: W(() => [
                      $("span", {
                        class: z(e.nsSelect.e("tags-text"))
                      }, [
                        Q(e.$slots, "label", {
                          label: m.currentLabel,
                          value: m.value
                        }, () => [
                          lt(te(m.currentLabel), 1)
                        ])
                      ], 2)
                    ]),
                    _: 2
                  }, 1032, ["closable", "size", "type", "effect", "style", "onClose"])
                ], 2))), 128)),
                e.collapseTags && e.states.selected.length > e.maxCollapseTags ? (L(), ee(l, {
                  key: 0,
                  ref: "tagTooltipRef",
                  disabled: e.dropdownMenuVisible || !e.collapseTagsTooltip,
                  "fallback-placements": ["bottom", "top", "right", "left"],
                  effect: e.effect,
                  placement: "bottom",
                  teleported: e.teleported
                }, {
                  default: W(() => [
                    $("div", {
                      ref: "collapseItemRef",
                      class: z(e.nsSelect.e("selected-item"))
                    }, [
                      K(a, {
                        closable: !1,
                        size: e.collapseTagSize,
                        type: e.tagType,
                        effect: e.tagEffect,
                        "disable-transitions": "",
                        style: Ye(e.collapseTagStyle)
                      }, {
                        default: W(() => [
                          $("span", {
                            class: z(e.nsSelect.e("tags-text"))
                          }, " + " + te(e.states.selected.length - e.maxCollapseTags), 3)
                        ]),
                        _: 1
                      }, 8, ["size", "type", "effect", "style"])
                    ], 2)
                  ]),
                  content: W(() => [
                    $("div", {
                      ref: "tagMenuRef",
                      class: z(e.nsSelect.e("selection"))
                    }, [
                      (L(!0), x(ke, null, wn(e.collapseTagList, (m) => (L(), x("div", {
                        key: e.getValueKey(m),
                        class: z(e.nsSelect.e("selected-item"))
                      }, [
                        K(a, {
                          class: "in-tooltip",
                          closable: !e.selectDisabled && !m.isDisabled,
                          size: e.collapseTagSize,
                          type: e.tagType,
                          effect: e.tagEffect,
                          "disable-transitions": "",
                          onClose: (y) => e.deleteTag(y, m)
                        }, {
                          default: W(() => [
                            $("span", {
                              class: z(e.nsSelect.e("tags-text"))
                            }, [
                              Q(e.$slots, "label", {
                                label: m.currentLabel,
                                value: m.value
                              }, () => [
                                lt(te(m.currentLabel), 1)
                              ])
                            ], 2)
                          ]),
                          _: 2
                        }, 1032, ["closable", "size", "type", "effect", "onClose"])
                      ], 2))), 128))
                    ], 2)
                  ]),
                  _: 3
                }, 8, ["disabled", "effect", "teleported"])) : j("v-if", !0)
              ]) : j("v-if", !0),
              $("div", {
                class: z([
                  e.nsSelect.e("selected-item"),
                  e.nsSelect.e("input-wrapper"),
                  e.nsSelect.is("hidden", !e.filterable)
                ])
              }, [
                vt($("input", {
                  id: e.inputId,
                  ref: "inputRef",
                  "onUpdate:modelValue": (m) => e.states.inputValue = m,
                  type: "text",
                  name: e.name,
                  class: z([e.nsSelect.e("input"), e.nsSelect.is(e.selectSize)]),
                  disabled: e.selectDisabled,
                  autocomplete: e.autocomplete,
                  style: Ye(e.inputStyle),
                  tabindex: e.tabindex,
                  role: "combobox",
                  readonly: !e.filterable,
                  spellcheck: "false",
                  "aria-activedescendant": ((v = e.hoverOption) == null ? void 0 : v.id) || "",
                  "aria-controls": e.contentId,
                  "aria-expanded": e.dropdownMenuVisible,
                  "aria-label": e.ariaLabel,
                  "aria-autocomplete": "none",
                  "aria-haspopup": "listbox",
                  onKeydown: [
                    on(Ve((m) => e.navigateOptions("next"), ["stop", "prevent"]), ["down"]),
                    on(Ve((m) => e.navigateOptions("prev"), ["stop", "prevent"]), ["up"]),
                    on(Ve(e.handleEsc, ["stop", "prevent"]), ["esc"]),
                    on(Ve(e.selectOption, ["stop", "prevent"]), ["enter"]),
                    on(Ve(e.deletePrevTag, ["stop"]), ["delete"])
                  ],
                  onCompositionstart: e.handleCompositionStart,
                  onCompositionupdate: e.handleCompositionUpdate,
                  onCompositionend: e.handleCompositionEnd,
                  onInput: e.onInput,
                  onClick: Ve(e.toggleMenu, ["stop"])
                }, null, 46, ["id", "onUpdate:modelValue", "name", "disabled", "autocomplete", "tabindex", "readonly", "aria-activedescendant", "aria-controls", "aria-expanded", "aria-label", "onKeydown", "onCompositionstart", "onCompositionupdate", "onCompositionend", "onInput", "onClick"]), [
                  [Dd, e.states.inputValue]
                ]),
                e.filterable ? (L(), x("span", {
                  key: 0,
                  ref: "calculatorRef",
                  "aria-hidden": "true",
                  class: z(e.nsSelect.e("input-calculator")),
                  textContent: te(e.states.inputValue)
                }, null, 10, ["textContent"])) : j("v-if", !0)
              ], 2),
              e.shouldShowPlaceholder ? (L(), x("div", {
                key: 1,
                class: z([
                  e.nsSelect.e("selected-item"),
                  e.nsSelect.e("placeholder"),
                  e.nsSelect.is("transparent", !e.hasModelValue || e.expanded && !e.states.inputValue)
                ])
              }, [
                e.hasModelValue ? Q(e.$slots, "label", {
                  key: 0,
                  label: e.currentPlaceholder,
                  value: e.modelValue
                }, () => [
                  $("span", null, te(e.currentPlaceholder), 1)
                ]) : (L(), x("span", { key: 1 }, te(e.currentPlaceholder), 1))
              ], 2)) : j("v-if", !0)
            ], 2),
            $("div", {
              ref: "suffixRef",
              class: z(e.nsSelect.e("suffix"))
            }, [
              e.iconComponent && !e.showClose ? (L(), ee(i, {
                key: 0,
                class: z([e.nsSelect.e("caret"), e.nsSelect.e("icon"), e.iconReverse])
              }, {
                default: W(() => [
                  (L(), ee(pt(e.iconComponent)))
                ]),
                _: 1
              }, 8, ["class"])) : j("v-if", !0),
              e.showClose && e.clearIcon ? (L(), ee(i, {
                key: 1,
                class: z([
                  e.nsSelect.e("caret"),
                  e.nsSelect.e("icon"),
                  e.nsSelect.e("clear")
                ]),
                onClick: e.handleClearClick
              }, {
                default: W(() => [
                  (L(), ee(pt(e.clearIcon)))
                ]),
                _: 1
              }, 8, ["class", "onClick"])) : j("v-if", !0),
              e.validateState && e.validateIcon && e.needStatusIcon ? (L(), ee(i, {
                key: 2,
                class: z([
                  e.nsInput.e("icon"),
                  e.nsInput.e("validateIcon"),
                  e.nsInput.is("loading", e.validateState === "validating")
                ])
              }, {
                default: W(() => [
                  (L(), ee(pt(e.validateIcon)))
                ]),
                _: 1
              }, 8, ["class"])) : j("v-if", !0)
            ], 2)
          ], 10, ["onClick"])
        ];
      }),
      content: W(() => [
        K(g, { ref: "menuRef" }, {
          default: W(() => [
            e.$slots.header ? (L(), x("div", {
              key: 0,
              class: z(e.nsSelect.be("dropdown", "header")),
              onClick: Ve(() => {
              }, ["stop"])
            }, [
              Q(e.$slots, "header")
            ], 10, ["onClick"])) : j("v-if", !0),
            vt(K(f, {
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
              default: W(() => [
                e.showNewOption ? (L(), ee(u, {
                  key: 0,
                  value: e.states.inputValue,
                  created: !0
                }, null, 8, ["value"])) : j("v-if", !0),
                K(d, null, {
                  default: W(() => [
                    Q(e.$slots, "default")
                  ]),
                  _: 3
                })
              ]),
              _: 3
            }, 8, ["id", "wrap-class", "view-class", "class", "aria-label", "onScroll"]), [
              [Yt, e.states.options.size > 0 && !e.loading]
            ]),
            e.$slots.loading && e.loading ? (L(), x("div", {
              key: 1,
              class: z(e.nsSelect.be("dropdown", "loading"))
            }, [
              Q(e.$slots, "loading")
            ], 2)) : e.loading || e.filteredOptionsCount === 0 ? (L(), x("div", {
              key: 2,
              class: z(e.nsSelect.be("dropdown", "empty"))
            }, [
              Q(e.$slots, "empty", {}, () => [
                $("span", null, te(e.emptyText), 1)
              ])
            ], 2)) : j("v-if", !0),
            e.$slots.footer ? (L(), x("div", {
              key: 3,
              class: z(e.nsSelect.be("dropdown", "footer")),
              onClick: Ve(() => {
              }, ["stop"])
            }, [
              Q(e.$slots, "footer")
            ], 10, ["onClick"])) : j("v-if", !0)
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
var u1 = /* @__PURE__ */ ve(l1, [["render", i1], ["__file", "select.vue"]]);
const c1 = Y({
  name: "ElOptionGroup",
  componentName: "ElOptionGroup",
  props: {
    label: String,
    disabled: Boolean
  },
  setup(e) {
    const t = Ee("select"), n = P(null), o = Je(), r = P([]);
    Qe(hc, On({
      ...zs(e)
    }));
    const s = O(() => r.value.some((u) => u.visible === !0)), a = (u) => {
      var d, f;
      return ((d = u.type) == null ? void 0 : d.name) === "ElOption" && !!((f = u.component) != null && f.proxy);
    }, l = (u) => {
      const d = rn(u), f = [];
      return d.forEach((g) => {
        var h, v;
        a(g) ? f.push(g.component.proxy) : (h = g.children) != null && h.length ? f.push(...l(g.children)) : (v = g.component) != null && v.subTree && f.push(...l(g.component.subTree));
      }), f;
    }, i = () => {
      r.value = l(o.subTree);
    };
    return Me(() => {
      i();
    }), cg(n, i, {
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
function d1(e, t, n, o, r, s) {
  return vt((L(), x("ul", {
    ref: "groupRef",
    class: z(e.ns.be("group", "wrap"))
  }, [
    $("li", {
      class: z(e.ns.be("group", "title"))
    }, te(e.label), 3),
    $("li", null, [
      $("ul", {
        class: z(e.ns.b("group"))
      }, [
        Q(e.$slots, "default")
      ], 2)
    ])
  ], 2)), [
    [Yt, e.visible]
  ]);
}
var yc = /* @__PURE__ */ ve(c1, [["render", d1], ["__file", "option-group.vue"]]);
const bc = Ot(u1, {
  Option: wa,
  OptionGroup: yc
}), _c = Vo(wa);
Vo(yc);
const wc = ["success", "info", "warning", "error"], st = Su({
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
  appendTo: Ne ? document.body : void 0
}), f1 = me({
  customClass: {
    type: String,
    default: st.customClass
  },
  center: {
    type: Boolean,
    default: st.center
  },
  dangerouslyUseHTMLString: {
    type: Boolean,
    default: st.dangerouslyUseHTMLString
  },
  duration: {
    type: Number,
    default: st.duration
  },
  icon: {
    type: Xt,
    default: st.icon
  },
  id: {
    type: String,
    default: st.id
  },
  message: {
    type: oe([
      String,
      Object,
      Function
    ]),
    default: st.message
  },
  onClose: {
    type: oe(Function),
    default: st.onClose
  },
  showClose: {
    type: Boolean,
    default: st.showClose
  },
  type: {
    type: String,
    values: wc,
    default: st.type
  },
  plain: {
    type: Boolean,
    default: st.plain
  },
  offset: {
    type: Number,
    default: st.offset
  },
  zIndex: {
    type: Number,
    default: st.zIndex
  },
  grouping: {
    type: Boolean,
    default: st.grouping
  },
  repeatNum: {
    type: Number,
    default: st.repeatNum
  }
}), p1 = {
  destroy: () => !0
}, Ft = Bd([]), v1 = (e) => {
  const t = Ft.findIndex((r) => r.id === e), n = Ft[t];
  let o;
  return t > 0 && (o = Ft[t - 1]), { current: n, prev: o };
}, m1 = (e) => {
  const { prev: t } = v1(e);
  return t ? t.vm.exposed.bottom.value : 0;
}, g1 = (e, t) => Ft.findIndex((o) => o.id === e) > 0 ? 16 : t, h1 = Y({
  name: "ElMessage"
}), y1 = /* @__PURE__ */ Y({
  ...h1,
  props: f1,
  emits: p1,
  setup(e, { expose: t }) {
    const n = e, { Close: o } = ah, { ns: r, zIndex: s } = vu("message"), { currentZIndex: a, nextZIndex: l } = s, i = P(), u = P(!1), d = P(0);
    let f;
    const g = O(() => n.type ? n.type === "error" ? "danger" : n.type : "info"), h = O(() => {
      const E = n.type;
      return { [r.bm("icon", E)]: E && Cr[E] };
    }), v = O(() => n.icon || Cr[n.type] || ""), m = O(() => m1(n.id)), y = O(() => g1(n.id, n.offset) + m.value), p = O(() => d.value + y.value), _ = O(() => ({
      top: `${y.value}px`,
      zIndex: a.value
    }));
    function k() {
      n.duration !== 0 && ({ stop: f } = _r(() => {
        T();
      }, n.duration));
    }
    function w() {
      f?.();
    }
    function T() {
      u.value = !1;
    }
    function I({ code: E }) {
      E === Le.esc && T();
    }
    return Me(() => {
      k(), l(), u.value = !0;
    }), ae(() => n.repeatNum, () => {
      w(), k();
    }), Lt(document, "keydown", I), Ht(i, () => {
      d.value = i.value.getBoundingClientRect().height;
    }), t({
      visible: u,
      bottom: p,
      close: T
    }), (E, H) => (L(), ee(xn, {
      name: c(r).b("fade"),
      onBeforeLeave: E.onClose,
      onAfterLeave: (V) => E.$emit("destroy"),
      persisted: ""
    }, {
      default: W(() => [
        vt($("div", {
          id: E.id,
          ref_key: "messageRef",
          ref: i,
          class: z([
            c(r).b(),
            { [c(r).m(E.type)]: E.type },
            c(r).is("center", E.center),
            c(r).is("closable", E.showClose),
            c(r).is("plain", E.plain),
            E.customClass
          ]),
          style: Ye(c(_)),
          role: "alert",
          onMouseenter: w,
          onMouseleave: k
        }, [
          E.repeatNum > 1 ? (L(), ee(c(nb), {
            key: 0,
            value: E.repeatNum,
            type: c(g),
            class: z(c(r).e("badge"))
          }, null, 8, ["value", "type", "class"])) : j("v-if", !0),
          c(v) ? (L(), ee(c(Ke), {
            key: 1,
            class: z([c(r).e("icon"), c(h)])
          }, {
            default: W(() => [
              (L(), ee(pt(c(v))))
            ]),
            _: 1
          }, 8, ["class"])) : j("v-if", !0),
          Q(E.$slots, "default", {}, () => [
            E.dangerouslyUseHTMLString ? (L(), x(ke, { key: 1 }, [
              j(" Caution here, message could've been compromised, never use user's input as message "),
              $("p", {
                class: z(c(r).e("content")),
                innerHTML: E.message
              }, null, 10, ["innerHTML"])
            ], 2112)) : (L(), x("p", {
              key: 0,
              class: z(c(r).e("content"))
            }, te(E.message), 3))
          ]),
          E.showClose ? (L(), ee(c(Ke), {
            key: 2,
            class: z(c(r).e("closeBtn")),
            onClick: Ve(T, ["stop"])
          }, {
            default: W(() => [
              K(c(o))
            ]),
            _: 1
          }, 8, ["class", "onClick"])) : j("v-if", !0)
        ], 46, ["id"]), [
          [Yt, u.value]
        ])
      ]),
      _: 3
    }, 8, ["name", "onBeforeLeave", "onAfterLeave"]));
  }
});
var b1 = /* @__PURE__ */ ve(y1, [["__file", "message.vue"]]);
let _1 = 1;
const Sc = (e) => {
  const t = !e || Ct(e) || To(e) || We(e) ? { message: e } : e, n = {
    ...st,
    ...t
  };
  if (!n.appendTo)
    n.appendTo = document.body;
  else if (Ct(n.appendTo)) {
    let o = document.querySelector(n.appendTo);
    Bt(o) || (o = document.body), n.appendTo = o;
  }
  return ko(Mt.grouping) && !n.grouping && (n.grouping = Mt.grouping), Oe(Mt.duration) && n.duration === 3e3 && (n.duration = Mt.duration), Oe(Mt.offset) && n.offset === 16 && (n.offset = Mt.offset), ko(Mt.showClose) && !n.showClose && (n.showClose = Mt.showClose), n;
}, w1 = (e) => {
  const t = Ft.indexOf(e);
  if (t === -1)
    return;
  Ft.splice(t, 1);
  const { handler: n } = e;
  n.close();
}, S1 = ({ appendTo: e, ...t }, n) => {
  const o = `message_${_1++}`, r = t.onClose, s = document.createElement("div"), a = {
    ...t,
    id: o,
    onClose: () => {
      r?.(), w1(d);
    },
    onDestroy: () => {
      gr(null, s);
    }
  }, l = K(b1, a, We(a.message) || To(a.message) ? {
    default: We(a.message) ? a.message : () => a.message
  } : null);
  l.appContext = n || so._context, gr(l, s), e.appendChild(s.firstElementChild);
  const i = l.component, d = {
    id: o,
    vnode: l,
    vm: i,
    handler: {
      close: () => {
        i.exposed.visible.value = !1;
      }
    },
    props: l.component.props
  };
  return d;
}, so = (e = {}, t) => {
  if (!Ne)
    return { close: () => {
    } };
  const n = Sc(e);
  if (n.grouping && Ft.length) {
    const r = Ft.find(({ vnode: s }) => {
      var a;
      return ((a = s.props) == null ? void 0 : a.message) === n.message;
    });
    if (r)
      return r.props.repeatNum += 1, r.props.type = n.type, r.handler;
  }
  if (Oe(Mt.max) && Ft.length >= Mt.max)
    return { close: () => {
    } };
  const o = S1(n, t);
  return Ft.push(o), o.handler;
};
wc.forEach((e) => {
  so[e] = (t = {}, n) => {
    const o = Sc(t);
    return so({ ...o, type: e }, n);
  };
});
function C1(e) {
  for (const t of Ft)
    (!e || e === t.props.type) && t.handler.close();
}
so.closeAll = C1;
so._context = null;
const E1 = hu(so, "$message"), Cc = [
  "success",
  "info",
  "warning",
  "error"
], T1 = me({
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
    type: Xt
  },
  id: {
    type: String,
    default: ""
  },
  message: {
    type: oe([
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
    type: oe(Function),
    default: () => {
    }
  },
  onClose: {
    type: oe(Function),
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
    values: [...Cc, ""],
    default: ""
  },
  zIndex: Number
}), O1 = {
  destroy: () => !0
}, I1 = Y({
  name: "ElNotification"
}), k1 = /* @__PURE__ */ Y({
  ...I1,
  props: T1,
  emits: O1,
  setup(e, { expose: t }) {
    const n = e, { ns: o, zIndex: r } = vu("notification"), { nextZIndex: s, currentZIndex: a } = r, { Close: l } = bu, i = P(!1);
    let u;
    const d = O(() => {
      const k = n.type;
      return k && Cr[n.type] ? o.m(k) : "";
    }), f = O(() => n.type && Cr[n.type] || n.icon), g = O(() => n.position.endsWith("right") ? "right" : "left"), h = O(() => n.position.startsWith("top") ? "top" : "bottom"), v = O(() => {
      var k;
      return {
        [h.value]: `${n.offset}px`,
        zIndex: (k = n.zIndex) != null ? k : a.value
      };
    });
    function m() {
      n.duration > 0 && ({ stop: u } = _r(() => {
        i.value && p();
      }, n.duration));
    }
    function y() {
      u?.();
    }
    function p() {
      i.value = !1;
    }
    function _({ code: k }) {
      k === Le.delete || k === Le.backspace ? y() : k === Le.esc ? i.value && p() : m();
    }
    return Me(() => {
      m(), s(), i.value = !0;
    }), Lt(document, "keydown", _), t({
      visible: i,
      close: p
    }), (k, w) => (L(), ee(xn, {
      name: c(o).b("fade"),
      onBeforeLeave: k.onClose,
      onAfterLeave: (T) => k.$emit("destroy"),
      persisted: ""
    }, {
      default: W(() => [
        vt($("div", {
          id: k.id,
          class: z([c(o).b(), k.customClass, c(g)]),
          style: Ye(c(v)),
          role: "alert",
          onMouseenter: y,
          onMouseleave: m,
          onClick: k.onClick
        }, [
          c(f) ? (L(), ee(c(Ke), {
            key: 0,
            class: z([c(o).e("icon"), c(d)])
          }, {
            default: W(() => [
              (L(), ee(pt(c(f))))
            ]),
            _: 1
          }, 8, ["class"])) : j("v-if", !0),
          $("div", {
            class: z(c(o).e("group"))
          }, [
            $("h2", {
              class: z(c(o).e("title")),
              textContent: te(k.title)
            }, null, 10, ["textContent"]),
            vt($("div", {
              class: z(c(o).e("content")),
              style: Ye(k.title ? void 0 : { margin: 0 })
            }, [
              Q(k.$slots, "default", {}, () => [
                k.dangerouslyUseHTMLString ? (L(), x(ke, { key: 1 }, [
                  j(" Caution here, message could've been compromised, never use user's input as message "),
                  $("p", { innerHTML: k.message }, null, 8, ["innerHTML"])
                ], 2112)) : (L(), x("p", { key: 0 }, te(k.message), 1))
              ])
            ], 6), [
              [Yt, k.message]
            ]),
            k.showClose ? (L(), ee(c(Ke), {
              key: 0,
              class: z(c(o).e("closeBtn")),
              onClick: Ve(p, ["stop"])
            }, {
              default: W(() => [
                K(c(l))
              ]),
              _: 1
            }, 8, ["class", "onClick"])) : j("v-if", !0)
          ], 2)
        ], 46, ["id", "onClick"]), [
          [Yt, i.value]
        ])
      ]),
      _: 3
    }, 8, ["name", "onBeforeLeave", "onAfterLeave"]));
  }
});
var L1 = /* @__PURE__ */ ve(k1, [["__file", "notification.vue"]]);
const Or = {
  "top-left": [],
  "top-right": [],
  "bottom-left": [],
  "bottom-right": []
}, Os = 16;
let A1 = 1;
const ao = function(e = {}, t) {
  if (!Ne)
    return { close: () => {
    } };
  (Ct(e) || To(e)) && (e = { message: e });
  const n = e.position || "top-right";
  let o = e.offset || 0;
  Or[n].forEach(({ vm: d }) => {
    var f;
    o += (((f = d.el) == null ? void 0 : f.offsetHeight) || 0) + Os;
  }), o += Os;
  const r = `notification_${A1++}`, s = e.onClose, a = {
    ...e,
    offset: o,
    id: r,
    onClose: () => {
      N1(r, n, s);
    }
  };
  let l = document.body;
  Bt(e.appendTo) ? l = e.appendTo : Ct(e.appendTo) && (l = document.querySelector(e.appendTo)), Bt(l) || (l = document.body);
  const i = document.createElement("div"), u = K(L1, a, We(a.message) ? a.message : To(a.message) ? () => a.message : null);
  return u.appContext = jt(t) ? ao._context : t, u.props.onDestroy = () => {
    gr(null, i);
  }, gr(u, i), Or[n].push({ vm: u }), l.appendChild(i.firstElementChild), {
    close: () => {
      u.component.exposed.visible.value = !1;
    }
  };
};
Cc.forEach((e) => {
  ao[e] = (t = {}, n) => ((Ct(t) || To(t)) && (t = {
    message: t
  }), ao({ ...t, type: e }, n));
});
function N1(e, t, n) {
  const o = Or[t], r = o.findIndex(({ vm: u }) => {
    var d;
    return ((d = u.component) == null ? void 0 : d.props.id) === e;
  });
  if (r === -1)
    return;
  const { vm: s } = o[r];
  if (!s)
    return;
  n?.(s);
  const a = s.el.offsetHeight, l = t.split("-")[0];
  o.splice(r, 1);
  const i = o.length;
  if (!(i < 1))
    for (let u = r; u < i; u++) {
      const { el: d, component: f } = o[u].vm, g = Number.parseInt(d.style[l], 10) - a - Os;
      f.props.offset = g;
    }
}
function $1() {
  for (const e of Object.values(Or))
    e.forEach(({ vm: t }) => {
      t.component.exposed.visible.value = !1;
    });
}
ao.closeAll = $1;
ao._context = null;
const P1 = hu(ao, "$notify");
/*!
  * shared v11.2.2
  * (c) 2025 kazuya kawaguchi
  * Released under the MIT License.
  */
function R1(e, t) {
  typeof console < "u" && (console.warn("[intlify] " + e), t && console.warn(t.stack));
}
const oi = typeof window < "u", Wn = (e, t = !1) => t ? Symbol.for(e) : Symbol(e), M1 = (e, t, n) => F1({ l: e, k: t, s: n }), F1 = (e) => JSON.stringify(e).replace(/\u2028/g, "\\u2028").replace(/\u2029/g, "\\u2029").replace(/\u0027/g, "\\u0027"), Ze = (e) => typeof e == "number" && isFinite(e), D1 = (e) => Sa(e) === "[object Date]", Ir = (e) => Sa(e) === "[object RegExp]", Gr = (e) => ge(e) && Object.keys(e).length === 0, ot = Object.assign, B1 = Object.create, Ce = (e = null) => B1(e);
let ri;
const ir = () => ri || (ri = typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : typeof window < "u" ? window : typeof global < "u" ? global : Ce());
function si(e) {
  return e.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;").replace(/'/g, "&apos;").replace(/\//g, "&#x2F;").replace(/=/g, "&#x3D;");
}
function ai(e) {
  return e.replace(/&(?![a-zA-Z0-9#]{2,6};)/g, "&amp;").replace(/"/g, "&quot;").replace(/'/g, "&apos;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
}
function V1(e) {
  return e = e.replace(/(\w+)\s*=\s*"([^"]*)"/g, (o, r, s) => `${r}="${ai(s)}"`), e = e.replace(/(\w+)\s*=\s*'([^']*)'/g, (o, r, s) => `${r}='${ai(s)}'`), /\s*on\w+\s*=\s*["']?[^"'>]+["']?/gi.test(e) && (e = e.replace(/(\s+)(on)(\w+\s*=)/gi, "$1&#111;n$3")), [
    // In href, src, action, formaction attributes
    /(\s+(?:href|src|action|formaction)\s*=\s*["']?)\s*javascript:/gi,
    // In style attributes within url()
    /(style\s*=\s*["'][^"']*url\s*\(\s*)javascript:/gi
  ].forEach((o) => {
    e = e.replace(o, "$1javascript&#58;");
  }), e;
}
const x1 = Object.prototype.hasOwnProperty;
function Dt(e, t) {
  return x1.call(e, t);
}
const He = Array.isArray, Re = (e) => typeof e == "function", ne = (e) => typeof e == "string", ze = (e) => typeof e == "boolean", he = (e) => e !== null && typeof e == "object", z1 = (e) => he(e) && Re(e.then) && Re(e.catch), Ec = Object.prototype.toString, Sa = (e) => Ec.call(e), ge = (e) => Sa(e) === "[object Object]", H1 = (e) => e == null ? "" : He(e) || ge(e) && e.toString === Ec ? JSON.stringify(e, null, 2) : String(e);
function Ca(e, t = "") {
  return e.reduce((n, o, r) => r === 0 ? n + o : n + t + o, "");
}
const er = (e) => !he(e) || He(e);
function ur(e, t) {
  if (er(e) || er(t))
    throw new Error("Invalid value");
  const n = [{ src: e, des: t }];
  for (; n.length; ) {
    const { src: o, des: r } = n.pop();
    Object.keys(o).forEach((s) => {
      s !== "__proto__" && (he(o[s]) && !he(r[s]) && (r[s] = Array.isArray(o[s]) ? [] : Ce()), er(r[s]) || er(o[s]) ? r[s] = o[s] : n.push({ src: o[s], des: r[s] }));
    });
  }
}
/*!
  * message-compiler v11.2.2
  * (c) 2025 kazuya kawaguchi
  * Released under the MIT License.
  */
function W1(e, t, n) {
  return { line: e, column: t, offset: n };
}
function Is(e, t, n) {
  return { start: e, end: t };
}
const _e = {
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
}, U1 = 17;
function Kr(e, t, n = {}) {
  const { domain: o, messages: r, args: s } = n, a = e, l = new SyntaxError(String(a));
  return l.code = e, t && (l.location = t), l.domain = o, l;
}
function j1(e) {
  throw e;
}
const xt = " ", G1 = "\r", at = `
`, K1 = "\u2028", Y1 = "\u2029";
function q1(e) {
  const t = e;
  let n = 0, o = 1, r = 1, s = 0;
  const a = (E) => t[E] === G1 && t[E + 1] === at, l = (E) => t[E] === at, i = (E) => t[E] === Y1, u = (E) => t[E] === K1, d = (E) => a(E) || l(E) || i(E) || u(E), f = () => n, g = () => o, h = () => r, v = () => s, m = (E) => a(E) || i(E) || u(E) ? at : t[E], y = () => m(n), p = () => m(n + s);
  function _() {
    return s = 0, d(n) && (o++, r = 0), a(n) && n++, n++, r++, t[n];
  }
  function k() {
    return a(n + s) && s++, s++, t[n + s];
  }
  function w() {
    n = 0, o = 1, r = 1, s = 0;
  }
  function T(E = 0) {
    s = E;
  }
  function I() {
    const E = n + s;
    for (; E !== n; )
      _();
    s = 0;
  }
  return {
    index: f,
    line: g,
    column: h,
    peekOffset: v,
    charAt: m,
    currentChar: y,
    currentPeek: p,
    next: _,
    peek: k,
    reset: w,
    resetPeek: T,
    skipToPeek: I
  };
}
const en = void 0, X1 = ".", li = "'", Z1 = "tokenizer";
function J1(e, t = {}) {
  const n = t.location !== !1, o = q1(e), r = () => o.index(), s = () => W1(o.line(), o.column(), o.index()), a = s(), l = r(), i = {
    currentType: 13,
    offset: l,
    startLoc: a,
    endLoc: a,
    lastType: 13,
    lastOffset: l,
    lastStartLoc: a,
    lastEndLoc: a,
    braceNest: 0,
    inLinked: !1,
    text: ""
  }, u = () => i, { onError: d } = t;
  function f(b, C, A, ...q) {
    const fe = u();
    if (C.column += A, C.offset += A, d) {
      const ue = n ? Is(fe.startLoc, C) : null, S = Kr(b, ue, {
        domain: Z1,
        args: q
      });
      d(S);
    }
  }
  function g(b, C, A) {
    b.endLoc = s(), b.currentType = C;
    const q = { type: C };
    return n && (q.loc = Is(b.startLoc, b.endLoc)), A != null && (q.value = A), q;
  }
  const h = (b) => g(
    b,
    13
    /* TokenTypes.EOF */
  );
  function v(b, C) {
    return b.currentChar() === C ? (b.next(), C) : (f(_e.EXPECTED_TOKEN, s(), 0, C), "");
  }
  function m(b) {
    let C = "";
    for (; b.currentPeek() === xt || b.currentPeek() === at; )
      C += b.currentPeek(), b.peek();
    return C;
  }
  function y(b) {
    const C = m(b);
    return b.skipToPeek(), C;
  }
  function p(b) {
    if (b === en)
      return !1;
    const C = b.charCodeAt(0);
    return C >= 97 && C <= 122 || // a-z
    C >= 65 && C <= 90 || // A-Z
    C === 95;
  }
  function _(b) {
    if (b === en)
      return !1;
    const C = b.charCodeAt(0);
    return C >= 48 && C <= 57;
  }
  function k(b, C) {
    const { currentType: A } = C;
    if (A !== 2)
      return !1;
    m(b);
    const q = p(b.currentPeek());
    return b.resetPeek(), q;
  }
  function w(b, C) {
    const { currentType: A } = C;
    if (A !== 2)
      return !1;
    m(b);
    const q = b.currentPeek() === "-" ? b.peek() : b.currentPeek(), fe = _(q);
    return b.resetPeek(), fe;
  }
  function T(b, C) {
    const { currentType: A } = C;
    if (A !== 2)
      return !1;
    m(b);
    const q = b.currentPeek() === li;
    return b.resetPeek(), q;
  }
  function I(b, C) {
    const { currentType: A } = C;
    if (A !== 7)
      return !1;
    m(b);
    const q = b.currentPeek() === ".";
    return b.resetPeek(), q;
  }
  function E(b, C) {
    const { currentType: A } = C;
    if (A !== 8)
      return !1;
    m(b);
    const q = p(b.currentPeek());
    return b.resetPeek(), q;
  }
  function H(b, C) {
    const { currentType: A } = C;
    if (!(A === 7 || A === 11))
      return !1;
    m(b);
    const q = b.currentPeek() === ":";
    return b.resetPeek(), q;
  }
  function V(b, C) {
    const { currentType: A } = C;
    if (A !== 9)
      return !1;
    const q = () => {
      const ue = b.currentPeek();
      return ue === "{" ? p(b.peek()) : ue === "@" || ue === "|" || ue === ":" || ue === "." || ue === xt || !ue ? !1 : ue === at ? (b.peek(), q()) : G(b, !1);
    }, fe = q();
    return b.resetPeek(), fe;
  }
  function J(b) {
    m(b);
    const C = b.currentPeek() === "|";
    return b.resetPeek(), C;
  }
  function G(b, C = !0) {
    const A = (fe = !1, ue = "") => {
      const S = b.currentPeek();
      return S === "{" || S === "@" || !S ? fe : S === "|" ? !(ue === xt || ue === at) : S === xt ? (b.peek(), A(!0, xt)) : S === at ? (b.peek(), A(!0, at)) : !0;
    }, q = A();
    return C && b.resetPeek(), q;
  }
  function Z(b, C) {
    const A = b.currentChar();
    return A === en ? en : C(A) ? (b.next(), A) : null;
  }
  function le(b) {
    const C = b.charCodeAt(0);
    return C >= 97 && C <= 122 || // a-z
    C >= 65 && C <= 90 || // A-Z
    C >= 48 && C <= 57 || // 0-9
    C === 95 || // _
    C === 36;
  }
  function Te(b) {
    return Z(b, le);
  }
  function R(b) {
    const C = b.charCodeAt(0);
    return C >= 97 && C <= 122 || // a-z
    C >= 65 && C <= 90 || // A-Z
    C >= 48 && C <= 57 || // 0-9
    C === 95 || // _
    C === 36 || // $
    C === 45;
  }
  function M(b) {
    return Z(b, R);
  }
  function D(b) {
    const C = b.charCodeAt(0);
    return C >= 48 && C <= 57;
  }
  function re(b) {
    return Z(b, D);
  }
  function se(b) {
    const C = b.charCodeAt(0);
    return C >= 48 && C <= 57 || // 0-9
    C >= 65 && C <= 70 || // A-F
    C >= 97 && C <= 102;
  }
  function pe(b) {
    return Z(b, se);
  }
  function Ae(b) {
    let C = "", A = "";
    for (; C = re(b); )
      A += C;
    return A;
  }
  function Fe(b) {
    let C = "";
    for (; ; ) {
      const A = b.currentChar();
      if (A === "{" || A === "}" || A === "@" || A === "|" || !A)
        break;
      if (A === xt || A === at)
        if (G(b))
          C += A, b.next();
        else {
          if (J(b))
            break;
          C += A, b.next();
        }
      else
        C += A, b.next();
    }
    return C;
  }
  function we(b) {
    y(b);
    let C = "", A = "";
    for (; C = M(b); )
      A += C;
    const q = b.currentChar();
    if (q && q !== "}" && q !== en && q !== xt && q !== at && q !== "　") {
      const fe = mt(b);
      return f(_e.INVALID_TOKEN_IN_PLACEHOLDER, s(), 0, A + fe), A + fe;
    }
    return b.currentChar() === en && f(_e.UNTERMINATED_CLOSING_BRACE, s(), 0), A;
  }
  function qe(b) {
    y(b);
    let C = "";
    return b.currentChar() === "-" ? (b.next(), C += `-${Ae(b)}`) : C += Ae(b), b.currentChar() === en && f(_e.UNTERMINATED_CLOSING_BRACE, s(), 0), C;
  }
  function je(b) {
    return b !== li && b !== at;
  }
  function Xe(b) {
    y(b), v(b, "'");
    let C = "", A = "";
    for (; C = Z(b, je); )
      C === "\\" ? A += De(b) : A += C;
    const q = b.currentChar();
    return q === at || q === en ? (f(_e.UNTERMINATED_SINGLE_QUOTE_IN_PLACEHOLDER, s(), 0), q === at && (b.next(), v(b, "'")), A) : (v(b, "'"), A);
  }
  function De(b) {
    const C = b.currentChar();
    switch (C) {
      case "\\":
      case "'":
        return b.next(), `\\${C}`;
      case "u":
        return ye(b, C, 4);
      case "U":
        return ye(b, C, 6);
      default:
        return f(_e.UNKNOWN_ESCAPE_SEQUENCE, s(), 0, C), "";
    }
  }
  function ye(b, C, A) {
    v(b, C);
    let q = "";
    for (let fe = 0; fe < A; fe++) {
      const ue = pe(b);
      if (!ue) {
        f(_e.INVALID_UNICODE_ESCAPE_SEQUENCE, s(), 0, `\\${C}${q}${b.currentChar()}`);
        break;
      }
      q += ue;
    }
    return `\\${C}${q}`;
  }
  function ut(b) {
    return b !== "{" && b !== "}" && b !== xt && b !== at;
  }
  function mt(b) {
    y(b);
    let C = "", A = "";
    for (; C = Z(b, ut); )
      A += C;
    return A;
  }
  function ct(b) {
    let C = "", A = "";
    for (; C = Te(b); )
      A += C;
    return A;
  }
  function _t(b) {
    const C = (A) => {
      const q = b.currentChar();
      return q === "{" || q === "@" || q === "|" || q === "(" || q === ")" || !q || q === xt ? A : (A += q, b.next(), C(A));
    };
    return C("");
  }
  function dt(b) {
    y(b);
    const C = v(
      b,
      "|"
      /* TokenChars.Pipe */
    );
    return y(b), C;
  }
  function ft(b, C) {
    let A = null;
    switch (b.currentChar()) {
      case "{":
        return C.braceNest >= 1 && f(_e.NOT_ALLOW_NEST_PLACEHOLDER, s(), 0), b.next(), A = g(
          C,
          2,
          "{"
          /* TokenChars.BraceLeft */
        ), y(b), C.braceNest++, A;
      case "}":
        return C.braceNest > 0 && C.currentType === 2 && f(_e.EMPTY_PLACEHOLDER, s(), 0), b.next(), A = g(
          C,
          3,
          "}"
          /* TokenChars.BraceRight */
        ), C.braceNest--, C.braceNest > 0 && y(b), C.inLinked && C.braceNest === 0 && (C.inLinked = !1), A;
      case "@":
        return C.braceNest > 0 && f(_e.UNTERMINATED_CLOSING_BRACE, s(), 0), A = B(b, C) || h(C), C.braceNest = 0, A;
      default: {
        let fe = !0, ue = !0, S = !0;
        if (J(b))
          return C.braceNest > 0 && f(_e.UNTERMINATED_CLOSING_BRACE, s(), 0), A = g(C, 1, dt(b)), C.braceNest = 0, C.inLinked = !1, A;
        if (C.braceNest > 0 && (C.currentType === 4 || C.currentType === 5 || C.currentType === 6))
          return f(_e.UNTERMINATED_CLOSING_BRACE, s(), 0), C.braceNest = 0, U(b, C);
        if (fe = k(b, C))
          return A = g(C, 4, we(b)), y(b), A;
        if (ue = w(b, C))
          return A = g(C, 5, qe(b)), y(b), A;
        if (S = T(b, C))
          return A = g(C, 6, Xe(b)), y(b), A;
        if (!fe && !ue && !S)
          return A = g(C, 12, mt(b)), f(_e.INVALID_TOKEN_IN_PLACEHOLDER, s(), 0, A.value), y(b), A;
        break;
      }
    }
    return A;
  }
  function B(b, C) {
    const { currentType: A } = C;
    let q = null;
    const fe = b.currentChar();
    switch ((A === 7 || A === 8 || A === 11 || A === 9) && (fe === at || fe === xt) && f(_e.INVALID_LINKED_FORMAT, s(), 0), fe) {
      case "@":
        return b.next(), q = g(
          C,
          7,
          "@"
          /* TokenChars.LinkedAlias */
        ), C.inLinked = !0, q;
      case ".":
        return y(b), b.next(), g(
          C,
          8,
          "."
          /* TokenChars.LinkedDot */
        );
      case ":":
        return y(b), b.next(), g(
          C,
          9,
          ":"
          /* TokenChars.LinkedDelimiter */
        );
      default:
        return J(b) ? (q = g(C, 1, dt(b)), C.braceNest = 0, C.inLinked = !1, q) : I(b, C) || H(b, C) ? (y(b), B(b, C)) : E(b, C) ? (y(b), g(C, 11, ct(b))) : V(b, C) ? (y(b), fe === "{" ? ft(b, C) || q : g(C, 10, _t(b))) : (A === 7 && f(_e.INVALID_LINKED_FORMAT, s(), 0), C.braceNest = 0, C.inLinked = !1, U(b, C));
    }
  }
  function U(b, C) {
    let A = {
      type: 13
      /* TokenTypes.EOF */
    };
    if (C.braceNest > 0)
      return ft(b, C) || h(C);
    if (C.inLinked)
      return B(b, C) || h(C);
    switch (b.currentChar()) {
      case "{":
        return ft(b, C) || h(C);
      case "}":
        return f(_e.UNBALANCED_CLOSING_BRACE, s(), 0), b.next(), g(
          C,
          3,
          "}"
          /* TokenChars.BraceRight */
        );
      case "@":
        return B(b, C) || h(C);
      default: {
        if (J(b))
          return A = g(C, 1, dt(b)), C.braceNest = 0, C.inLinked = !1, A;
        if (G(b))
          return g(C, 0, Fe(b));
        break;
      }
    }
    return A;
  }
  function Se() {
    const { currentType: b, offset: C, startLoc: A, endLoc: q } = i;
    return i.lastType = b, i.lastOffset = C, i.lastStartLoc = A, i.lastEndLoc = q, i.offset = r(), i.startLoc = s(), o.currentChar() === en ? g(
      i,
      13
      /* TokenTypes.EOF */
    ) : U(o, i);
  }
  return {
    nextToken: Se,
    currentOffset: r,
    currentPosition: s,
    context: u
  };
}
const Q1 = "parser", ew = /(?:\\\\|\\'|\\u([0-9a-fA-F]{4})|\\U([0-9a-fA-F]{6}))/g;
function tw(e, t, n) {
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
function nw(e = {}) {
  const t = e.location !== !1, { onError: n } = e;
  function o(p, _, k, w, ...T) {
    const I = p.currentPosition();
    if (I.offset += w, I.column += w, n) {
      const E = t ? Is(k, I) : null, H = Kr(_, E, {
        domain: Q1,
        args: T
      });
      n(H);
    }
  }
  function r(p, _, k) {
    const w = { type: p };
    return t && (w.start = _, w.end = _, w.loc = { start: k, end: k }), w;
  }
  function s(p, _, k, w) {
    t && (p.end = _, p.loc && (p.loc.end = k));
  }
  function a(p, _) {
    const k = p.context(), w = r(3, k.offset, k.startLoc);
    return w.value = _, s(w, p.currentOffset(), p.currentPosition()), w;
  }
  function l(p, _) {
    const k = p.context(), { lastOffset: w, lastStartLoc: T } = k, I = r(5, w, T);
    return I.index = parseInt(_, 10), p.nextToken(), s(I, p.currentOffset(), p.currentPosition()), I;
  }
  function i(p, _) {
    const k = p.context(), { lastOffset: w, lastStartLoc: T } = k, I = r(4, w, T);
    return I.key = _, p.nextToken(), s(I, p.currentOffset(), p.currentPosition()), I;
  }
  function u(p, _) {
    const k = p.context(), { lastOffset: w, lastStartLoc: T } = k, I = r(9, w, T);
    return I.value = _.replace(ew, tw), p.nextToken(), s(I, p.currentOffset(), p.currentPosition()), I;
  }
  function d(p) {
    const _ = p.nextToken(), k = p.context(), { lastOffset: w, lastStartLoc: T } = k, I = r(8, w, T);
    return _.type !== 11 ? (o(p, _e.UNEXPECTED_EMPTY_LINKED_MODIFIER, k.lastStartLoc, 0), I.value = "", s(I, w, T), {
      nextConsumeToken: _,
      node: I
    }) : (_.value == null && o(p, _e.UNEXPECTED_LEXICAL_ANALYSIS, k.lastStartLoc, 0, zt(_)), I.value = _.value || "", s(I, p.currentOffset(), p.currentPosition()), {
      node: I
    });
  }
  function f(p, _) {
    const k = p.context(), w = r(7, k.offset, k.startLoc);
    return w.value = _, s(w, p.currentOffset(), p.currentPosition()), w;
  }
  function g(p) {
    const _ = p.context(), k = r(6, _.offset, _.startLoc);
    let w = p.nextToken();
    if (w.type === 8) {
      const T = d(p);
      k.modifier = T.node, w = T.nextConsumeToken || p.nextToken();
    }
    switch (w.type !== 9 && o(p, _e.UNEXPECTED_LEXICAL_ANALYSIS, _.lastStartLoc, 0, zt(w)), w = p.nextToken(), w.type === 2 && (w = p.nextToken()), w.type) {
      case 10:
        w.value == null && o(p, _e.UNEXPECTED_LEXICAL_ANALYSIS, _.lastStartLoc, 0, zt(w)), k.key = f(p, w.value || "");
        break;
      case 4:
        w.value == null && o(p, _e.UNEXPECTED_LEXICAL_ANALYSIS, _.lastStartLoc, 0, zt(w)), k.key = i(p, w.value || "");
        break;
      case 5:
        w.value == null && o(p, _e.UNEXPECTED_LEXICAL_ANALYSIS, _.lastStartLoc, 0, zt(w)), k.key = l(p, w.value || "");
        break;
      case 6:
        w.value == null && o(p, _e.UNEXPECTED_LEXICAL_ANALYSIS, _.lastStartLoc, 0, zt(w)), k.key = u(p, w.value || "");
        break;
      default: {
        o(p, _e.UNEXPECTED_EMPTY_LINKED_KEY, _.lastStartLoc, 0);
        const T = p.context(), I = r(7, T.offset, T.startLoc);
        return I.value = "", s(I, T.offset, T.startLoc), k.key = I, s(k, T.offset, T.startLoc), {
          nextConsumeToken: w,
          node: k
        };
      }
    }
    return s(k, p.currentOffset(), p.currentPosition()), {
      node: k
    };
  }
  function h(p) {
    const _ = p.context(), k = _.currentType === 1 ? p.currentOffset() : _.offset, w = _.currentType === 1 ? _.endLoc : _.startLoc, T = r(2, k, w);
    T.items = [];
    let I = null;
    do {
      const V = I || p.nextToken();
      switch (I = null, V.type) {
        case 0:
          V.value == null && o(p, _e.UNEXPECTED_LEXICAL_ANALYSIS, _.lastStartLoc, 0, zt(V)), T.items.push(a(p, V.value || ""));
          break;
        case 5:
          V.value == null && o(p, _e.UNEXPECTED_LEXICAL_ANALYSIS, _.lastStartLoc, 0, zt(V)), T.items.push(l(p, V.value || ""));
          break;
        case 4:
          V.value == null && o(p, _e.UNEXPECTED_LEXICAL_ANALYSIS, _.lastStartLoc, 0, zt(V)), T.items.push(i(p, V.value || ""));
          break;
        case 6:
          V.value == null && o(p, _e.UNEXPECTED_LEXICAL_ANALYSIS, _.lastStartLoc, 0, zt(V)), T.items.push(u(p, V.value || ""));
          break;
        case 7: {
          const J = g(p);
          T.items.push(J.node), I = J.nextConsumeToken || null;
          break;
        }
      }
    } while (_.currentType !== 13 && _.currentType !== 1);
    const E = _.currentType === 1 ? _.lastOffset : p.currentOffset(), H = _.currentType === 1 ? _.lastEndLoc : p.currentPosition();
    return s(T, E, H), T;
  }
  function v(p, _, k, w) {
    const T = p.context();
    let I = w.items.length === 0;
    const E = r(1, _, k);
    E.cases = [], E.cases.push(w);
    do {
      const H = h(p);
      I || (I = H.items.length === 0), E.cases.push(H);
    } while (T.currentType !== 13);
    return I && o(p, _e.MUST_HAVE_MESSAGES_IN_PLURAL, k, 0), s(E, p.currentOffset(), p.currentPosition()), E;
  }
  function m(p) {
    const _ = p.context(), { offset: k, startLoc: w } = _, T = h(p);
    return _.currentType === 13 ? T : v(p, k, w, T);
  }
  function y(p) {
    const _ = J1(p, ot({}, e)), k = _.context(), w = r(0, k.offset, k.startLoc);
    return t && w.loc && (w.loc.source = p), w.body = m(_), e.onCacheKey && (w.cacheKey = e.onCacheKey(p)), k.currentType !== 13 && o(_, _e.UNEXPECTED_LEXICAL_ANALYSIS, k.lastStartLoc, 0, p[k.offset] || ""), s(w, _.currentOffset(), _.currentPosition()), w;
  }
  return { parse: y };
}
function zt(e) {
  if (e.type === 13)
    return "EOF";
  const t = (e.value || "").replace(/\r?\n/gu, "\\n");
  return t.length > 10 ? t.slice(0, 9) + "…" : t;
}
function ow(e, t = {}) {
  const n = {
    ast: e,
    helpers: /* @__PURE__ */ new Set()
  };
  return { context: () => n, helper: (s) => (n.helpers.add(s), s) };
}
function ii(e, t) {
  for (let n = 0; n < e.length; n++)
    Ea(e[n], t);
}
function Ea(e, t) {
  switch (e.type) {
    case 1:
      ii(e.cases, t), t.helper(
        "plural"
        /* HelperNameMap.PLURAL */
      );
      break;
    case 2:
      ii(e.items, t);
      break;
    case 6: {
      Ea(e.key, t), t.helper(
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
function rw(e, t = {}) {
  const n = ow(e);
  n.helper(
    "normalize"
    /* HelperNameMap.NORMALIZE */
  ), e.body && Ea(e.body, n);
  const o = n.context();
  e.helpers = Array.from(o.helpers);
}
function sw(e) {
  const t = e.body;
  return t.type === 2 ? ui(t) : t.cases.forEach((n) => ui(n)), e;
}
function ui(e) {
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
      e.static = Ca(t);
      for (let n = 0; n < e.items.length; n++) {
        const o = e.items[n];
        (o.type === 3 || o.type === 9) && delete o.value;
      }
    }
  }
}
function Xn(e) {
  switch (e.t = e.type, e.type) {
    case 0: {
      const t = e;
      Xn(t.body), t.b = t.body, delete t.body;
      break;
    }
    case 1: {
      const t = e, n = t.cases;
      for (let o = 0; o < n.length; o++)
        Xn(n[o]);
      t.c = n, delete t.cases;
      break;
    }
    case 2: {
      const t = e, n = t.items;
      for (let o = 0; o < n.length; o++)
        Xn(n[o]);
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
      Xn(t.key), t.k = t.key, delete t.key, t.modifier && (Xn(t.modifier), t.m = t.modifier, delete t.modifier);
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
function aw(e, t) {
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
  const l = () => a;
  function i(m, y) {
    a.code += m;
  }
  function u(m, y = !0) {
    const p = y ? o : "";
    i(r ? p + "  ".repeat(m) : p);
  }
  function d(m = !0) {
    const y = ++a.indentLevel;
    m && u(y);
  }
  function f(m = !0) {
    const y = --a.indentLevel;
    m && u(y);
  }
  function g() {
    u(a.indentLevel);
  }
  return {
    context: l,
    push: i,
    indent: d,
    deindent: f,
    newline: g,
    helper: (m) => `_${m}`,
    needIndent: () => a.needIndent
  };
}
function lw(e, t) {
  const { helper: n } = e;
  e.push(`${n(
    "linked"
    /* HelperNameMap.LINKED */
  )}(`), lo(e, t.key), t.modifier ? (e.push(", "), lo(e, t.modifier), e.push(", _type")) : e.push(", undefined, _type"), e.push(")");
}
function iw(e, t) {
  const { helper: n, needIndent: o } = e;
  e.push(`${n(
    "normalize"
    /* HelperNameMap.NORMALIZE */
  )}([`), e.indent(o());
  const r = t.items.length;
  for (let s = 0; s < r && (lo(e, t.items[s]), s !== r - 1); s++)
    e.push(", ");
  e.deindent(o()), e.push("])");
}
function uw(e, t) {
  const { helper: n, needIndent: o } = e;
  if (t.cases.length > 1) {
    e.push(`${n(
      "plural"
      /* HelperNameMap.PLURAL */
    )}([`), e.indent(o());
    const r = t.cases.length;
    for (let s = 0; s < r && (lo(e, t.cases[s]), s !== r - 1); s++)
      e.push(", ");
    e.deindent(o()), e.push("])");
  }
}
function cw(e, t) {
  t.body ? lo(e, t.body) : e.push("null");
}
function lo(e, t) {
  const { helper: n } = e;
  switch (t.type) {
    case 0:
      cw(e, t);
      break;
    case 1:
      uw(e, t);
      break;
    case 2:
      iw(e, t);
      break;
    case 6:
      lw(e, t);
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
const dw = (e, t = {}) => {
  const n = ne(t.mode) ? t.mode : "normal", o = ne(t.filename) ? t.filename : "message.intl";
  t.sourceMap;
  const r = t.breakLineCode != null ? t.breakLineCode : n === "arrow" ? ";" : `
`, s = t.needIndent ? t.needIndent : n !== "arrow", a = e.helpers || [], l = aw(e, {
    filename: o,
    breakLineCode: r,
    needIndent: s
  });
  l.push(n === "normal" ? "function __msg__ (ctx) {" : "(ctx) => {"), l.indent(s), a.length > 0 && (l.push(`const { ${Ca(a.map((d) => `${d}: _${d}`), ", ")} } = ctx`), l.newline()), l.push("return "), lo(l, e), l.deindent(s), l.push("}"), delete e.helpers;
  const { code: i, map: u } = l.context();
  return {
    ast: e,
    code: i,
    map: u ? u.toJSON() : void 0
    // eslint-disable-line @typescript-eslint/no-explicit-any
  };
};
function fw(e, t = {}) {
  const n = ot({}, t), o = !!n.jit, r = !!n.minify, s = n.optimize == null ? !0 : n.optimize, l = nw(n).parse(e);
  return o ? (s && sw(l), r && Xn(l), { ast: l, code: "" }) : (rw(l, n), dw(l, n));
}
/*!
  * core-base v11.2.2
  * (c) 2025 kazuya kawaguchi
  * Released under the MIT License.
  */
function pw() {
  typeof __INTLIFY_DROP_MESSAGE_COMPILER__ != "boolean" && (ir().__INTLIFY_DROP_MESSAGE_COMPILER__ = !1);
}
function Kt(e) {
  return he(e) && Ta(e) === 0 && (Dt(e, "b") || Dt(e, "body"));
}
const Tc = ["b", "body"];
function vw(e) {
  return An(e, Tc);
}
const Oc = ["c", "cases"];
function mw(e) {
  return An(e, Oc, []);
}
const Ic = ["s", "static"];
function gw(e) {
  return An(e, Ic);
}
const kc = ["i", "items"];
function hw(e) {
  return An(e, kc, []);
}
const Lc = ["t", "type"];
function Ta(e) {
  return An(e, Lc);
}
const Ac = ["v", "value"];
function tr(e, t) {
  const n = An(e, Ac);
  if (n != null)
    return n;
  throw $o(t);
}
const Nc = ["m", "modifier"];
function yw(e) {
  return An(e, Nc);
}
const $c = ["k", "key"];
function bw(e) {
  const t = An(e, $c);
  if (t)
    return t;
  throw $o(
    6
    /* NodeTypes.Linked */
  );
}
function An(e, t, n) {
  for (let o = 0; o < t.length; o++) {
    const r = t[o];
    if (Dt(e, r) && e[r] != null)
      return e[r];
  }
  return n;
}
const Pc = [
  ...Tc,
  ...Oc,
  ...Ic,
  ...kc,
  ...$c,
  ...Nc,
  ...Ac,
  ...Lc
];
function $o(e) {
  return new Error(`unhandled node type: ${e}`);
}
function ls(e) {
  return (n) => _w(n, e);
}
function _w(e, t) {
  const n = vw(t);
  if (n == null)
    throw $o(
      0
      /* NodeTypes.Resource */
    );
  if (Ta(n) === 1) {
    const s = mw(n);
    return e.plural(s.reduce((a, l) => [
      ...a,
      ci(e, l)
    ], []));
  } else
    return ci(e, n);
}
function ci(e, t) {
  const n = gw(t);
  if (n != null)
    return e.type === "text" ? n : e.normalize([n]);
  {
    const o = hw(t).reduce((r, s) => [...r, ks(e, s)], []);
    return e.normalize(o);
  }
}
function ks(e, t) {
  const n = Ta(t);
  switch (n) {
    case 3:
      return tr(t, n);
    case 9:
      return tr(t, n);
    case 4: {
      const o = t;
      if (Dt(o, "k") && o.k)
        return e.interpolate(e.named(o.k));
      if (Dt(o, "key") && o.key)
        return e.interpolate(e.named(o.key));
      throw $o(n);
    }
    case 5: {
      const o = t;
      if (Dt(o, "i") && Ze(o.i))
        return e.interpolate(e.list(o.i));
      if (Dt(o, "index") && Ze(o.index))
        return e.interpolate(e.list(o.index));
      throw $o(n);
    }
    case 6: {
      const o = t, r = yw(o), s = bw(o);
      return e.linked(ks(e, s), r ? ks(e, r) : void 0, e.type);
    }
    case 7:
      return tr(t, n);
    case 8:
      return tr(t, n);
    default:
      throw new Error(`unhandled node on format message part: ${n}`);
  }
}
const ww = (e) => e;
let nr = Ce();
function Sw(e, t = {}) {
  let n = !1;
  const o = t.onError || j1;
  return t.onError = (r) => {
    n = !0, o(r);
  }, { ...fw(e, t), detectError: n };
}
// @__NO_SIDE_EFFECTS__
function Cw(e, t) {
  if (!__INTLIFY_DROP_MESSAGE_COMPILER__ && ne(e)) {
    ze(t.warnHtmlMessage) && t.warnHtmlMessage;
    const o = (t.onCacheKey || ww)(e), r = nr[o];
    if (r)
      return r;
    const { ast: s, detectError: a } = Sw(e, {
      ...t,
      location: !1,
      jit: !0
    }), l = ls(s);
    return a ? l : nr[o] = l;
  } else {
    const n = e.cacheKey;
    if (n) {
      const o = nr[n];
      return o || (nr[n] = ls(e));
    } else
      return ls(e);
  }
}
const an = {
  INVALID_ARGUMENT: U1,
  // 17
  INVALID_DATE_ARGUMENT: 18,
  INVALID_ISO_DATE_ARGUMENT: 19,
  NOT_SUPPORT_LOCALE_PROMISE_VALUE: 21,
  NOT_SUPPORT_LOCALE_ASYNC_FUNCTION: 22,
  NOT_SUPPORT_LOCALE_TYPE: 23
}, Ew = 24;
function ln(e) {
  return Kr(e, null, void 0);
}
function Oa(e, t) {
  return t.locale != null ? di(t.locale) : di(e.locale);
}
let is;
function di(e) {
  if (ne(e))
    return e;
  if (Re(e)) {
    if (e.resolvedOnce && is != null)
      return is;
    if (e.constructor.name === "Function") {
      const t = e();
      if (z1(t))
        throw ln(an.NOT_SUPPORT_LOCALE_PROMISE_VALUE);
      return is = t;
    } else
      throw ln(an.NOT_SUPPORT_LOCALE_ASYNC_FUNCTION);
  } else
    throw ln(an.NOT_SUPPORT_LOCALE_TYPE);
}
function Tw(e, t, n) {
  return [.../* @__PURE__ */ new Set([
    n,
    ...He(t) ? t : he(t) ? Object.keys(t) : ne(t) ? [t] : [n]
  ])];
}
function Rc(e, t, n) {
  const o = ne(n) ? n : kr, r = e;
  r.__localeChainCache || (r.__localeChainCache = /* @__PURE__ */ new Map());
  let s = r.__localeChainCache.get(o);
  if (!s) {
    s = [];
    let a = [n];
    for (; He(a); )
      a = fi(s, a, t);
    const l = He(t) || !ge(t) ? t : t.default ? t.default : null;
    a = ne(l) ? [l] : l, He(a) && fi(s, a, !1), r.__localeChainCache.set(o, s);
  }
  return s;
}
function fi(e, t, n) {
  let o = !0;
  for (let r = 0; r < t.length && ze(o); r++) {
    const s = t[r];
    ne(s) && (o = Ow(e, t[r], n));
  }
  return o;
}
function Ow(e, t, n) {
  let o;
  const r = t.split("-");
  do {
    const s = r.join("-");
    o = Iw(e, s, n), r.splice(-1, 1);
  } while (r.length && o === !0);
  return o;
}
function Iw(e, t, n) {
  let o = !1;
  if (!e.includes(t) && (o = !0, t)) {
    o = t[t.length - 1] !== "!";
    const r = t.replace(/!/g, "");
    e.push(r), (He(n) || ge(n)) && n[r] && (o = n[r]);
  }
  return o;
}
const Nn = [];
Nn[
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
Nn[
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
Nn[
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
Nn[
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
Nn[
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
Nn[
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
Nn[
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
const kw = /^\s?(?:true|false|-?[\d.]+|'[^']*'|"[^"]*")\s?$/;
function Lw(e) {
  return kw.test(e);
}
function Aw(e) {
  const t = e.charCodeAt(0), n = e.charCodeAt(e.length - 1);
  return t === n && (t === 34 || t === 39) ? e.slice(1, -1) : e;
}
function Nw(e) {
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
function $w(e) {
  const t = e.trim();
  return e.charAt(0) === "0" && isNaN(parseInt(e)) ? !1 : Lw(t) ? Aw(t) : "*" + t;
}
function Pw(e) {
  const t = [];
  let n = -1, o = 0, r = 0, s, a, l, i, u, d, f;
  const g = [];
  g[
    0
    /* Actions.APPEND */
  ] = () => {
    a === void 0 ? a = l : a += l;
  }, g[
    1
    /* Actions.PUSH */
  ] = () => {
    a !== void 0 && (t.push(a), a = void 0);
  }, g[
    2
    /* Actions.INC_SUB_PATH_DEPTH */
  ] = () => {
    g[
      0
      /* Actions.APPEND */
    ](), r++;
  }, g[
    3
    /* Actions.PUSH_SUB_PATH */
  ] = () => {
    if (r > 0)
      r--, o = 4, g[
        0
        /* Actions.APPEND */
      ]();
    else {
      if (r = 0, a === void 0 || (a = $w(a), a === !1))
        return !1;
      g[
        1
        /* Actions.PUSH */
      ]();
    }
  };
  function h() {
    const v = e[n + 1];
    if (o === 5 && v === "'" || o === 6 && v === '"')
      return n++, l = "\\" + v, g[
        0
        /* Actions.APPEND */
      ](), !0;
  }
  for (; o !== null; )
    if (n++, s = e[n], !(s === "\\" && h())) {
      if (i = Nw(s), f = Nn[o], u = f[i] || f.l || 8, u === 8 || (o = u[0], u[1] !== void 0 && (d = g[u[1]], d && (l = s, d() === !1))))
        return;
      if (o === 7)
        return t;
    }
}
const pi = /* @__PURE__ */ new Map();
function Rw(e, t) {
  return he(e) ? e[t] : null;
}
function Mw(e, t) {
  if (!he(e))
    return null;
  let n = pi.get(t);
  if (n || (n = Pw(t), n && pi.set(t, n)), !n)
    return null;
  const o = n.length;
  let r = e, s = 0;
  for (; s < o; ) {
    const a = n[s];
    if (Pc.includes(a) && Kt(r))
      return null;
    const l = r[a];
    if (l === void 0 || Re(r))
      return null;
    r = l, s++;
  }
  return r;
}
const Fw = "11.2.2", Yr = -1, kr = "en-US", vi = "", mi = (e) => `${e.charAt(0).toLocaleUpperCase()}${e.substr(1)}`;
function Dw() {
  return {
    upper: (e, t) => t === "text" && ne(e) ? e.toUpperCase() : t === "vnode" && he(e) && "__v_isVNode" in e ? e.children.toUpperCase() : e,
    lower: (e, t) => t === "text" && ne(e) ? e.toLowerCase() : t === "vnode" && he(e) && "__v_isVNode" in e ? e.children.toLowerCase() : e,
    capitalize: (e, t) => t === "text" && ne(e) ? mi(e) : t === "vnode" && he(e) && "__v_isVNode" in e ? mi(e.children) : e
  };
}
let Mc;
function Bw(e) {
  Mc = e;
}
let Fc;
function Vw(e) {
  Fc = e;
}
let Dc;
function xw(e) {
  Dc = e;
}
let Bc = null;
const gi = (e) => {
  Bc = e;
}, zw = () => Bc;
let hi = 0;
function Hw(e = {}) {
  const t = Re(e.onWarn) ? e.onWarn : R1, n = ne(e.version) ? e.version : Fw, o = ne(e.locale) || Re(e.locale) ? e.locale : kr, r = Re(o) ? kr : o, s = He(e.fallbackLocale) || ge(e.fallbackLocale) || ne(e.fallbackLocale) || e.fallbackLocale === !1 ? e.fallbackLocale : r, a = ge(e.messages) ? e.messages : us(r), l = ge(e.datetimeFormats) ? e.datetimeFormats : us(r), i = ge(e.numberFormats) ? e.numberFormats : us(r), u = ot(Ce(), e.modifiers, Dw()), d = e.pluralRules || Ce(), f = Re(e.missing) ? e.missing : null, g = ze(e.missingWarn) || Ir(e.missingWarn) ? e.missingWarn : !0, h = ze(e.fallbackWarn) || Ir(e.fallbackWarn) ? e.fallbackWarn : !0, v = !!e.fallbackFormat, m = !!e.unresolving, y = Re(e.postTranslation) ? e.postTranslation : null, p = ge(e.processor) ? e.processor : null, _ = ze(e.warnHtmlMessage) ? e.warnHtmlMessage : !0, k = !!e.escapeParameter, w = Re(e.messageCompiler) ? e.messageCompiler : Mc, T = Re(e.messageResolver) ? e.messageResolver : Fc || Rw, I = Re(e.localeFallbacker) ? e.localeFallbacker : Dc || Tw, E = he(e.fallbackContext) ? e.fallbackContext : void 0, H = e, V = he(H.__datetimeFormatters) ? H.__datetimeFormatters : /* @__PURE__ */ new Map(), J = he(H.__numberFormatters) ? H.__numberFormatters : /* @__PURE__ */ new Map(), G = he(H.__meta) ? H.__meta : {};
  hi++;
  const Z = {
    version: n,
    cid: hi,
    locale: o,
    fallbackLocale: s,
    messages: a,
    modifiers: u,
    pluralRules: d,
    missing: f,
    missingWarn: g,
    fallbackWarn: h,
    fallbackFormat: v,
    unresolving: m,
    postTranslation: y,
    processor: p,
    warnHtmlMessage: _,
    escapeParameter: k,
    messageCompiler: w,
    messageResolver: T,
    localeFallbacker: I,
    fallbackContext: E,
    onWarn: t,
    __meta: G
  };
  return Z.datetimeFormats = l, Z.numberFormats = i, Z.__datetimeFormatters = V, Z.__numberFormatters = J, Z;
}
const us = (e) => ({ [e]: Ce() });
function Ia(e, t, n, o, r) {
  const { missing: s, onWarn: a } = e;
  if (s !== null) {
    const l = s(e, n, t, r);
    return ne(l) ? l : t;
  } else
    return t;
}
function ho(e, t, n) {
  const o = e;
  o.__localeChainCache = /* @__PURE__ */ new Map(), e.localeFallbacker(e, n, t);
}
function Ww(e, t) {
  return e === t ? !1 : e.split("-")[0] === t.split("-")[0];
}
function Uw(e, t) {
  const n = t.indexOf(e);
  if (n === -1)
    return !1;
  for (let o = n + 1; o < t.length; o++)
    if (Ww(e, t[o]))
      return !0;
  return !1;
}
function yi(e, ...t) {
  const { datetimeFormats: n, unresolving: o, fallbackLocale: r, onWarn: s, localeFallbacker: a } = e, { __datetimeFormatters: l } = e, [i, u, d, f] = Ls(...t), g = ze(d.missingWarn) ? d.missingWarn : e.missingWarn;
  ze(d.fallbackWarn) ? d.fallbackWarn : e.fallbackWarn;
  const h = !!d.part, v = Oa(e, d), m = a(
    e,
    // eslint-disable-line @typescript-eslint/no-explicit-any
    r,
    v
  );
  if (!ne(i) || i === "")
    return new Intl.DateTimeFormat(v, f).format(u);
  let y = {}, p, _ = null;
  const k = "datetime format";
  for (let I = 0; I < m.length && (p = m[I], y = n[p] || {}, _ = y[i], !ge(_)); I++)
    Ia(e, i, p, g, k);
  if (!ge(_) || !ne(p))
    return o ? Yr : i;
  let w = `${p}__${i}`;
  Gr(f) || (w = `${w}__${JSON.stringify(f)}`);
  let T = l.get(w);
  return T || (T = new Intl.DateTimeFormat(p, ot({}, _, f)), l.set(w, T)), h ? T.formatToParts(u) : T.format(u);
}
const Vc = [
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
function Ls(...e) {
  const [t, n, o, r] = e, s = Ce();
  let a = Ce(), l;
  if (ne(t)) {
    const i = t.match(/(\d{4}-\d{2}-\d{2})(T|\s)?(.*)/);
    if (!i)
      throw ln(an.INVALID_ISO_DATE_ARGUMENT);
    const u = i[3] ? i[3].trim().startsWith("T") ? `${i[1].trim()}${i[3].trim()}` : `${i[1].trim()}T${i[3].trim()}` : i[1].trim();
    l = new Date(u);
    try {
      l.toISOString();
    } catch {
      throw ln(an.INVALID_ISO_DATE_ARGUMENT);
    }
  } else if (D1(t)) {
    if (isNaN(t.getTime()))
      throw ln(an.INVALID_DATE_ARGUMENT);
    l = t;
  } else if (Ze(t))
    l = t;
  else
    throw ln(an.INVALID_ARGUMENT);
  return ne(n) ? s.key = n : ge(n) && Object.keys(n).forEach((i) => {
    Vc.includes(i) ? a[i] = n[i] : s[i] = n[i];
  }), ne(o) ? s.locale = o : ge(o) && (a = o), ge(r) && (a = r), [s.key || "", l, s, a];
}
function bi(e, t, n) {
  const o = e;
  for (const r in n) {
    const s = `${t}__${r}`;
    o.__datetimeFormatters.has(s) && o.__datetimeFormatters.delete(s);
  }
}
function _i(e, ...t) {
  const { numberFormats: n, unresolving: o, fallbackLocale: r, onWarn: s, localeFallbacker: a } = e, { __numberFormatters: l } = e, [i, u, d, f] = As(...t), g = ze(d.missingWarn) ? d.missingWarn : e.missingWarn;
  ze(d.fallbackWarn) ? d.fallbackWarn : e.fallbackWarn;
  const h = !!d.part, v = Oa(e, d), m = a(
    e,
    // eslint-disable-line @typescript-eslint/no-explicit-any
    r,
    v
  );
  if (!ne(i) || i === "")
    return new Intl.NumberFormat(v, f).format(u);
  let y = {}, p, _ = null;
  const k = "number format";
  for (let I = 0; I < m.length && (p = m[I], y = n[p] || {}, _ = y[i], !ge(_)); I++)
    Ia(e, i, p, g, k);
  if (!ge(_) || !ne(p))
    return o ? Yr : i;
  let w = `${p}__${i}`;
  Gr(f) || (w = `${w}__${JSON.stringify(f)}`);
  let T = l.get(w);
  return T || (T = new Intl.NumberFormat(p, ot({}, _, f)), l.set(w, T)), h ? T.formatToParts(u) : T.format(u);
}
const xc = [
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
function As(...e) {
  const [t, n, o, r] = e, s = Ce();
  let a = Ce();
  if (!Ze(t))
    throw ln(an.INVALID_ARGUMENT);
  const l = t;
  return ne(n) ? s.key = n : ge(n) && Object.keys(n).forEach((i) => {
    xc.includes(i) ? a[i] = n[i] : s[i] = n[i];
  }), ne(o) ? s.locale = o : ge(o) && (a = o), ge(r) && (a = r), [s.key || "", l, s, a];
}
function wi(e, t, n) {
  const o = e;
  for (const r in n) {
    const s = `${t}__${r}`;
    o.__numberFormatters.has(s) && o.__numberFormatters.delete(s);
  }
}
const jw = (e) => e, Gw = (e) => "", Kw = "text", Yw = (e) => e.length === 0 ? "" : Ca(e), qw = H1;
function Si(e, t) {
  return e = Math.abs(e), t === 2 ? e ? e > 1 ? 1 : 0 : 1 : e ? Math.min(e, 2) : 0;
}
function Xw(e) {
  const t = Ze(e.pluralIndex) ? e.pluralIndex : -1;
  return e.named && (Ze(e.named.count) || Ze(e.named.n)) ? Ze(e.named.count) ? e.named.count : Ze(e.named.n) ? e.named.n : t : t;
}
function Zw(e, t) {
  t.count || (t.count = e), t.n || (t.n = e);
}
function Jw(e = {}) {
  const t = e.locale, n = Xw(e), o = he(e.pluralRules) && ne(t) && Re(e.pluralRules[t]) ? e.pluralRules[t] : Si, r = he(e.pluralRules) && ne(t) && Re(e.pluralRules[t]) ? Si : void 0, s = (p) => p[o(n, p.length, r)], a = e.list || [], l = (p) => a[p], i = e.named || Ce();
  Ze(e.pluralIndex) && Zw(n, i);
  const u = (p) => i[p];
  function d(p, _) {
    const k = Re(e.messages) ? e.messages(p, !!_) : he(e.messages) ? e.messages[p] : !1;
    return k || (e.parent ? e.parent.message(p) : Gw);
  }
  const f = (p) => e.modifiers ? e.modifiers[p] : jw, g = ge(e.processor) && Re(e.processor.normalize) ? e.processor.normalize : Yw, h = ge(e.processor) && Re(e.processor.interpolate) ? e.processor.interpolate : qw, v = ge(e.processor) && ne(e.processor.type) ? e.processor.type : Kw, y = {
    list: l,
    named: u,
    plural: s,
    linked: (p, ..._) => {
      const [k, w] = _;
      let T = "text", I = "";
      _.length === 1 ? he(k) ? (I = k.modifier || I, T = k.type || T) : ne(k) && (I = k || I) : _.length === 2 && (ne(k) && (I = k || I), ne(w) && (T = w || T));
      const E = d(p, !0)(y), H = (
        // The message in vnode resolved with linked are returned as an array by processor.nomalize
        T === "vnode" && He(E) && I ? E[0] : E
      );
      return I ? f(I)(H, T) : H;
    },
    message: d,
    type: v,
    interpolate: h,
    normalize: g,
    values: ot(Ce(), a, i)
  };
  return y;
}
const Ci = () => "", dn = (e) => Re(e);
function Ei(e, ...t) {
  const { fallbackFormat: n, postTranslation: o, unresolving: r, messageCompiler: s, fallbackLocale: a, messages: l } = e, [i, u] = Ns(...t), d = ze(u.missingWarn) ? u.missingWarn : e.missingWarn, f = ze(u.fallbackWarn) ? u.fallbackWarn : e.fallbackWarn, g = ze(u.escapeParameter) ? u.escapeParameter : e.escapeParameter, h = !!u.resolvedMessage, v = ne(u.default) || ze(u.default) ? ze(u.default) ? s ? i : () => i : u.default : n ? s ? i : () => i : null, m = n || v != null && (ne(v) || Re(v)), y = Oa(e, u);
  g && Qw(u);
  let [p, _, k] = h ? [
    i,
    y,
    l[y] || Ce()
  ] : zc(e, i, y, a, f, d), w = p, T = i;
  if (!h && !(ne(w) || Kt(w) || dn(w)) && m && (w = v, T = w), !h && (!(ne(w) || Kt(w) || dn(w)) || !ne(_)))
    return r ? Yr : i;
  let I = !1;
  const E = () => {
    I = !0;
  }, H = dn(w) ? w : Hc(e, i, _, w, T, E);
  if (I)
    return w;
  const V = n2(e, _, k, u), J = Jw(V), G = e2(e, H, J);
  let Z = o ? o(G, i) : G;
  return g && ne(Z) && (Z = V1(Z)), Z;
}
function Qw(e) {
  He(e.list) ? e.list = e.list.map((t) => ne(t) ? si(t) : t) : he(e.named) && Object.keys(e.named).forEach((t) => {
    ne(e.named[t]) && (e.named[t] = si(e.named[t]));
  });
}
function zc(e, t, n, o, r, s) {
  const { messages: a, onWarn: l, messageResolver: i, localeFallbacker: u } = e, d = u(e, o, n);
  let f = Ce(), g, h = null;
  const v = "translate";
  for (let m = 0; m < d.length && (g = d[m], f = a[g] || Ce(), (h = i(f, t)) === null && (h = f[t]), !(ne(h) || Kt(h) || dn(h))); m++)
    if (!Uw(g, d)) {
      const y = Ia(
        e,
        // eslint-disable-line @typescript-eslint/no-explicit-any
        t,
        g,
        s,
        v
      );
      y !== t && (h = y);
    }
  return [h, g, f];
}
function Hc(e, t, n, o, r, s) {
  const { messageCompiler: a, warnHtmlMessage: l } = e;
  if (dn(o)) {
    const u = o;
    return u.locale = u.locale || n, u.key = u.key || t, u;
  }
  if (a == null) {
    const u = () => o;
    return u.locale = n, u.key = t, u;
  }
  const i = a(o, t2(e, n, r, o, l, s));
  return i.locale = n, i.key = t, i.source = o, i;
}
function e2(e, t, n) {
  return t(n);
}
function Ns(...e) {
  const [t, n, o] = e, r = Ce();
  if (!ne(t) && !Ze(t) && !dn(t) && !Kt(t))
    throw ln(an.INVALID_ARGUMENT);
  const s = Ze(t) ? String(t) : (dn(t), t);
  return Ze(n) ? r.plural = n : ne(n) ? r.default = n : ge(n) && !Gr(n) ? r.named = n : He(n) && (r.list = n), Ze(o) ? r.plural = o : ne(o) ? r.default = o : ge(o) && ot(r, o), [s, r];
}
function t2(e, t, n, o, r, s) {
  return {
    locale: t,
    key: n,
    warnHtmlMessage: r,
    onError: (a) => {
      throw s && s(a), a;
    },
    onCacheKey: (a) => M1(t, n, a)
  };
}
function n2(e, t, n, o) {
  const { modifiers: r, pluralRules: s, messageResolver: a, fallbackLocale: l, fallbackWarn: i, missingWarn: u, fallbackContext: d } = e, g = {
    locale: t,
    modifiers: r,
    pluralRules: s,
    messages: (h, v) => {
      let m = a(n, h);
      if (m == null && (d || v)) {
        const [, , y] = zc(
          d || e,
          // NOTE: if has fallbackContext, fallback to root, else if use linked, fallback to local context
          h,
          t,
          l,
          i,
          u
        );
        m = a(y, h);
      }
      if (ne(m) || Kt(m)) {
        let y = !1;
        const _ = Hc(e, h, t, m, h, () => {
          y = !0;
        });
        return y ? Ci : _;
      } else return dn(m) ? m : Ci;
    }
  };
  return e.processor && (g.processor = e.processor), o.list && (g.list = o.list), o.named && (g.named = o.named), Ze(o.plural) && (g.pluralIndex = o.plural), g;
}
pw();
/*!
  * vue-i18n v11.2.2
  * (c) 2025 kazuya kawaguchi
  * Released under the MIT License.
  */
const o2 = "11.2.2";
function r2() {
  typeof __VUE_I18N_FULL_INSTALL__ != "boolean" && (ir().__VUE_I18N_FULL_INSTALL__ = !0), typeof __VUE_I18N_LEGACY_API__ != "boolean" && (ir().__VUE_I18N_LEGACY_API__ = !0), typeof __INTLIFY_DROP_MESSAGE_COMPILER__ != "boolean" && (ir().__INTLIFY_DROP_MESSAGE_COMPILER__ = !1);
}
const io = {
  // composer module errors
  UNEXPECTED_RETURN_TYPE: Ew,
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
function Po(e, ...t) {
  return Kr(e, null, void 0);
}
const $s = /* @__PURE__ */ Wn("__translateVNode"), Ps = /* @__PURE__ */ Wn("__datetimeParts"), Rs = /* @__PURE__ */ Wn("__numberParts"), s2 = Wn("__setPluralRules"), Wc = /* @__PURE__ */ Wn("__injectWithOption"), Ms = /* @__PURE__ */ Wn("__dispose");
function Ro(e) {
  if (!he(e) || Kt(e))
    return e;
  for (const t in e)
    if (Dt(e, t))
      if (!t.includes("."))
        he(e[t]) && Ro(e[t]);
      else {
        const n = t.split("."), o = n.length - 1;
        let r = e, s = !1;
        for (let a = 0; a < o; a++) {
          if (n[a] === "__proto__")
            throw new Error(`unsafe key: ${n[a]}`);
          if (n[a] in r || (r[n[a]] = Ce()), !he(r[n[a]])) {
            s = !0;
            break;
          }
          r = r[n[a]];
        }
        if (s || (Kt(r) ? Pc.includes(n[o]) || delete e[t] : (r[n[o]] = e[t], delete e[t])), !Kt(r)) {
          const a = r[n[o]];
          he(a) && Ro(a);
        }
      }
  return e;
}
function Uc(e, t) {
  const { messages: n, __i18n: o, messageResolver: r, flatJson: s } = t, a = ge(n) ? n : He(o) ? Ce() : { [e]: Ce() };
  if (He(o) && o.forEach((l) => {
    if ("locale" in l && "resource" in l) {
      const { locale: i, resource: u } = l;
      i ? (a[i] = a[i] || Ce(), ur(u, a[i])) : ur(u, a);
    } else
      ne(l) && ur(JSON.parse(l), a);
  }), r == null && s)
    for (const l in a)
      Dt(a, l) && Ro(a[l]);
  return a;
}
function a2(e) {
  return e.type;
}
function l2(e, t, n) {
  let o = he(t.messages) ? t.messages : Ce();
  "__i18nGlobal" in n && (o = Uc(e.locale.value, {
    messages: o,
    __i18n: n.__i18nGlobal
  }));
  const r = Object.keys(o);
  r.length && r.forEach((s) => {
    e.mergeLocaleMessage(s, o[s]);
  });
  {
    if (he(t.datetimeFormats)) {
      const s = Object.keys(t.datetimeFormats);
      s.length && s.forEach((a) => {
        e.mergeDateTimeFormat(a, t.datetimeFormats[a]);
      });
    }
    if (he(t.numberFormats)) {
      const s = Object.keys(t.numberFormats);
      s.length && s.forEach((a) => {
        e.mergeNumberFormat(a, t.numberFormats[a]);
      });
    }
  }
}
function Ti(e) {
  return K(Vs, null, e, 0);
}
function jc() {
  return "currentInstance" in Zr ? Zr["currentInstance"] : Zr.getCurrentInstance();
}
const Oi = () => [], i2 = () => !1;
let Ii = 0;
function ki(e) {
  return (t, n, o, r) => e(n, o, jc() || void 0, r);
}
function u2(e = {}) {
  const { __root: t, __injectWithOption: n } = e, o = t === void 0, r = e.flatJson, s = oi ? P : En;
  let a = ze(e.inheritLocale) ? e.inheritLocale : !0;
  const l = s(
    // prettier-ignore
    t && a ? t.locale.value : ne(e.locale) ? e.locale : kr
  ), i = s(
    // prettier-ignore
    t && a ? t.fallbackLocale.value : ne(e.fallbackLocale) || He(e.fallbackLocale) || ge(e.fallbackLocale) || e.fallbackLocale === !1 ? e.fallbackLocale : l.value
  ), u = s(Uc(l.value, e)), d = s(ge(e.datetimeFormats) ? e.datetimeFormats : { [l.value]: {} }), f = s(ge(e.numberFormats) ? e.numberFormats : { [l.value]: {} });
  let g = t ? t.missingWarn : ze(e.missingWarn) || Ir(e.missingWarn) ? e.missingWarn : !0, h = t ? t.fallbackWarn : ze(e.fallbackWarn) || Ir(e.fallbackWarn) ? e.fallbackWarn : !0, v = t ? t.fallbackRoot : ze(e.fallbackRoot) ? e.fallbackRoot : !0, m = !!e.fallbackFormat, y = Re(e.missing) ? e.missing : null, p = Re(e.missing) ? ki(e.missing) : null, _ = Re(e.postTranslation) ? e.postTranslation : null, k = t ? t.warnHtmlMessage : ze(e.warnHtmlMessage) ? e.warnHtmlMessage : !0, w = !!e.escapeParameter;
  const T = t ? t.modifiers : ge(e.modifiers) ? e.modifiers : {};
  let I = e.pluralRules || t && t.pluralRules, E;
  E = (() => {
    o && gi(null);
    const S = {
      version: o2,
      locale: l.value,
      fallbackLocale: i.value,
      messages: u.value,
      modifiers: T,
      pluralRules: I,
      missing: p === null ? void 0 : p,
      missingWarn: g,
      fallbackWarn: h,
      fallbackFormat: m,
      unresolving: !0,
      postTranslation: _ === null ? void 0 : _,
      warnHtmlMessage: k,
      escapeParameter: w,
      messageResolver: e.messageResolver,
      messageCompiler: e.messageCompiler,
      __meta: { framework: "vue" }
    };
    S.datetimeFormats = d.value, S.numberFormats = f.value, S.__datetimeFormatters = ge(E) ? E.__datetimeFormatters : void 0, S.__numberFormatters = ge(E) ? E.__numberFormatters : void 0;
    const F = Hw(S);
    return o && gi(F), F;
  })(), ho(E, l.value, i.value);
  function V() {
    return [
      l.value,
      i.value,
      u.value,
      d.value,
      f.value
    ];
  }
  const J = O({
    get: () => l.value,
    set: (S) => {
      E.locale = S, l.value = S;
    }
  }), G = O({
    get: () => i.value,
    set: (S) => {
      E.fallbackLocale = S, i.value = S, ho(E, l.value, S);
    }
  }), Z = O(() => u.value), le = /* @__PURE__ */ O(() => d.value), Te = /* @__PURE__ */ O(() => f.value);
  function R() {
    return Re(_) ? _ : null;
  }
  function M(S) {
    _ = S, E.postTranslation = S;
  }
  function D() {
    return y;
  }
  function re(S) {
    S !== null && (p = ki(S)), y = S, E.missing = p;
  }
  const se = (S, F, ce, be, rt, $n) => {
    V();
    let It;
    try {
      o || (E.fallbackContext = t ? zw() : void 0), It = S(E);
    } finally {
      o || (E.fallbackContext = void 0);
    }
    if (ce !== "translate exists" && // for not `te` (e.g `t`)
    Ze(It) && It === Yr || ce === "translate exists" && !It) {
      const [Xr, La] = F();
      return t && v ? be(t) : rt(Xr);
    } else {
      if ($n(It))
        return It;
      throw Po(io.UNEXPECTED_RETURN_TYPE);
    }
  };
  function pe(...S) {
    return se((F) => Reflect.apply(Ei, null, [F, ...S]), () => Ns(...S), "translate", (F) => Reflect.apply(F.t, F, [...S]), (F) => F, (F) => ne(F));
  }
  function Ae(...S) {
    const [F, ce, be] = S;
    if (be && !he(be))
      throw Po(io.INVALID_ARGUMENT);
    return pe(F, ce, ot({ resolvedMessage: !0 }, be || {}));
  }
  function Fe(...S) {
    return se((F) => Reflect.apply(yi, null, [F, ...S]), () => Ls(...S), "datetime format", (F) => Reflect.apply(F.d, F, [...S]), () => vi, (F) => ne(F) || He(F));
  }
  function we(...S) {
    return se((F) => Reflect.apply(_i, null, [F, ...S]), () => As(...S), "number format", (F) => Reflect.apply(F.n, F, [...S]), () => vi, (F) => ne(F) || He(F));
  }
  function qe(S) {
    return S.map((F) => ne(F) || Ze(F) || ze(F) ? Ti(String(F)) : F);
  }
  const Xe = {
    normalize: qe,
    interpolate: (S) => S,
    type: "vnode"
  };
  function De(...S) {
    return se((F) => {
      let ce;
      const be = F;
      try {
        be.processor = Xe, ce = Reflect.apply(Ei, null, [be, ...S]);
      } finally {
        be.processor = null;
      }
      return ce;
    }, () => Ns(...S), "translate", (F) => F[$s](...S), (F) => [Ti(F)], (F) => He(F));
  }
  function ye(...S) {
    return se((F) => Reflect.apply(_i, null, [F, ...S]), () => As(...S), "number format", (F) => F[Rs](...S), Oi, (F) => ne(F) || He(F));
  }
  function ut(...S) {
    return se((F) => Reflect.apply(yi, null, [F, ...S]), () => Ls(...S), "datetime format", (F) => F[Ps](...S), Oi, (F) => ne(F) || He(F));
  }
  function mt(S) {
    I = S, E.pluralRules = I;
  }
  function ct(S, F) {
    return se(() => {
      if (!S)
        return !1;
      const ce = ne(F) ? F : l.value, be = ft(ce), rt = E.messageResolver(be, S);
      return Kt(rt) || dn(rt) || ne(rt);
    }, () => [S], "translate exists", (ce) => Reflect.apply(ce.te, ce, [S, F]), i2, (ce) => ze(ce));
  }
  function _t(S) {
    let F = null;
    const ce = Rc(E, i.value, l.value);
    for (let be = 0; be < ce.length; be++) {
      const rt = u.value[ce[be]] || {}, $n = E.messageResolver(rt, S);
      if ($n != null) {
        F = $n;
        break;
      }
    }
    return F;
  }
  function dt(S) {
    const F = _t(S);
    return F ?? (t ? t.tm(S) || {} : {});
  }
  function ft(S) {
    return u.value[S] || {};
  }
  function B(S, F) {
    if (r) {
      const ce = { [S]: F };
      for (const be in ce)
        Dt(ce, be) && Ro(ce[be]);
      F = ce[S];
    }
    u.value[S] = F, E.messages = u.value;
  }
  function U(S, F) {
    u.value[S] = u.value[S] || {};
    const ce = { [S]: F };
    if (r)
      for (const be in ce)
        Dt(ce, be) && Ro(ce[be]);
    F = ce[S], ur(F, u.value[S]), E.messages = u.value;
  }
  function Se(S) {
    return d.value[S] || {};
  }
  function b(S, F) {
    d.value[S] = F, E.datetimeFormats = d.value, bi(E, S, F);
  }
  function C(S, F) {
    d.value[S] = ot(d.value[S] || {}, F), E.datetimeFormats = d.value, bi(E, S, F);
  }
  function A(S) {
    return f.value[S] || {};
  }
  function q(S, F) {
    f.value[S] = F, E.numberFormats = f.value, wi(E, S, F);
  }
  function fe(S, F) {
    f.value[S] = ot(f.value[S] || {}, F), E.numberFormats = f.value, wi(E, S, F);
  }
  Ii++, t && oi && (ae(t.locale, (S) => {
    a && (l.value = S, E.locale = S, ho(E, l.value, i.value));
  }), ae(t.fallbackLocale, (S) => {
    a && (i.value = S, E.fallbackLocale = S, ho(E, l.value, i.value));
  }));
  const ue = {
    id: Ii,
    locale: J,
    fallbackLocale: G,
    get inheritLocale() {
      return a;
    },
    set inheritLocale(S) {
      a = S, S && t && (l.value = t.locale.value, i.value = t.fallbackLocale.value, ho(E, l.value, i.value));
    },
    get availableLocales() {
      return Object.keys(u.value).sort();
    },
    messages: Z,
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
      return g;
    },
    set missingWarn(S) {
      g = S, E.missingWarn = g;
    },
    get fallbackWarn() {
      return h;
    },
    set fallbackWarn(S) {
      h = S, E.fallbackWarn = h;
    },
    get fallbackRoot() {
      return v;
    },
    set fallbackRoot(S) {
      v = S;
    },
    get fallbackFormat() {
      return m;
    },
    set fallbackFormat(S) {
      m = S, E.fallbackFormat = m;
    },
    get warnHtmlMessage() {
      return k;
    },
    set warnHtmlMessage(S) {
      k = S, E.warnHtmlMessage = S;
    },
    get escapeParameter() {
      return w;
    },
    set escapeParameter(S) {
      w = S, E.escapeParameter = S;
    },
    t: pe,
    getLocaleMessage: ft,
    setLocaleMessage: B,
    mergeLocaleMessage: U,
    getPostTranslationHandler: R,
    setPostTranslationHandler: M,
    getMissingHandler: D,
    setMissingHandler: re,
    [s2]: mt
  };
  return ue.datetimeFormats = le, ue.numberFormats = Te, ue.rt = Ae, ue.te = ct, ue.tm = dt, ue.d = Fe, ue.n = we, ue.getDateTimeFormat = Se, ue.setDateTimeFormat = b, ue.mergeDateTimeFormat = C, ue.getNumberFormat = A, ue.setNumberFormat = q, ue.mergeNumberFormat = fe, ue[Wc] = n, ue[$s] = De, ue[Ps] = ut, ue[Rs] = ye, ue;
}
const ka = {
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
function c2({ slots: e }, t) {
  return t.length === 1 && t[0] === "default" ? (e.default ? e.default() : []).reduce((o, r) => [
    ...o,
    // prettier-ignore
    ...r.type === ke ? r.children : [r]
  ], []) : t.reduce((n, o) => {
    const r = e[o];
    return r && (n[o] = r()), n;
  }, Ce());
}
function Gc() {
  return ke;
}
ot({
  keypath: {
    type: String,
    required: !0
  },
  plural: {
    type: [Number, String],
    validator: (e) => Ze(e) || !isNaN(e)
  }
}, ka);
function d2(e) {
  return He(e) && !ne(e[0]);
}
function Kc(e, t, n, o) {
  const { slots: r, attrs: s } = t;
  return () => {
    const a = { part: !0 };
    let l = Ce();
    e.locale && (a.locale = e.locale), ne(e.format) ? a.key = e.format : he(e.format) && (ne(e.format.key) && (a.key = e.format.key), l = Object.keys(e.format).reduce((g, h) => n.includes(h) ? ot(Ce(), g, { [h]: e.format[h] }) : g, Ce()));
    const i = o(e.value, a, l);
    let u = [a.key];
    He(i) ? u = i.map((g, h) => {
      const v = r[g.type], m = v ? v({ [g.type]: g.value, index: h, parts: i }) : [g.value];
      return d2(m) && (m[0].key = `${g.type}-${h}`), m;
    }) : ne(i) && (u = [i]);
    const d = ot(Ce(), s), f = ne(e.tag) || he(e.tag) ? e.tag : Gc();
    return xs(f, d, u);
  };
}
ot({
  value: {
    type: Number,
    required: !0
  },
  format: {
    type: [String, Object]
  }
}, ka);
const f2 = /* @__PURE__ */ Wn("global-vue-i18n");
function qr(e = {}) {
  const t = jc();
  if (t == null)
    throw Po(io.MUST_BE_CALL_SETUP_TOP);
  if (!t.isCE && t.appContext.app != null && !t.appContext.app.__VUE_I18N_SYMBOL__)
    throw Po(io.NOT_INSTALLED);
  const n = p2(t), o = m2(n), r = a2(t), s = v2(e, r);
  if (s === "global")
    return l2(o, e, r), o;
  if (s === "parent") {
    let i = g2(n, t, e.__useComponent);
    return i == null && (i = o), i;
  }
  const a = n;
  let l = a.__getInstance(t);
  if (l == null) {
    const i = ot({}, e);
    "__i18n" in r && (i.__i18n = r.__i18n), o && (i.__root = o), l = u2(i), a.__composerExtend && (l[Ms] = a.__composerExtend(l)), y2(a, t, l), a.__setInstance(t, l);
  }
  return l;
}
function p2(e) {
  const t = ie(e.isCE ? f2 : e.appContext.app.__VUE_I18N_SYMBOL__);
  if (!t)
    throw Po(e.isCE ? io.NOT_INSTALLED_WITH_PROVIDE : io.UNEXPECTED_ERROR);
  return t;
}
function v2(e, t) {
  return Gr(e) ? "__i18n" in t ? "local" : "global" : e.useScope ? e.useScope : "local";
}
function m2(e) {
  return e.mode === "composition" ? e.global : e.global.__composer;
}
function g2(e, t, n = !1) {
  let o = null;
  const r = t.root;
  let s = h2(t, n);
  for (; s != null; ) {
    const a = e;
    if (e.mode === "composition")
      o = a.__getInstance(s);
    else if (__VUE_I18N_LEGACY_API__) {
      const l = a.__getInstance(s);
      l != null && (o = l.__composer, n && o && !o[Wc] && (o = null));
    }
    if (o != null || r === s)
      break;
    s = s.parent;
  }
  return o;
}
function h2(e, t = !1) {
  return e == null ? null : t && e.vnode.ctx || e.parent;
}
function y2(e, t, n) {
  Me(() => {
  }, t), Ds(() => {
    const o = n;
    e.__deleteInstance(t);
    const r = o[Ms];
    r && (r(), delete o[Ms]);
  }, t);
}
ot({
  value: {
    type: [Number, Date],
    required: !0
  },
  format: {
    type: [String, Object]
  }
}, ka);
r2();
Bw(Cw);
Vw(Mw);
xw(Rc);
const b2 = ["disabled"], _2 = {
  key: 0,
  class: "custom-button__loading"
}, w2 = /* @__PURE__ */ Y({
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
    return (n, o) => (L(), x("button", {
      class: z([
        "custom-button",
        `custom-button--${t.type || "default"}`,
        t.size ? `custom-button--${t.size}` : "custom-button--medium",
        { "custom-button--loading": t.loading },
        { "custom-button--circle": t.circle },
        { "custom-button--plain": t.plain }
      ]),
      disabled: e.loading || e.disabled,
      onClick: o[0] || (o[0] = (r) => n.$emit("click", r))
    }, [
      e.loading ? (L(), x("div", _2, o[1] || (o[1] = [
        $(
          "svg",
          {
            class: "custom-button__spinner",
            viewBox: "0 0 50 50"
          },
          [
            $("circle", {
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
      ]))) : j("v-if", !0),
      Q(n.$slots, "default", {}, void 0, !0)
    ], 10, b2));
  }
}), Un = (e, t) => {
  const n = e.__vccOpts || e;
  for (const [o, r] of t)
    n[o] = r;
  return n;
}, fn = /* @__PURE__ */ Un(w2, [["__scopeId", "data-v-9497085f"]]), S2 = /* @__PURE__ */ Y({
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
  setup(e, { emit: t }) {
    const n = e, o = t, r = () => {
      if (n.disabled) return;
      const s = !n.modelValue;
      o("update:modelValue", s), o("change", s);
    };
    return (s, a) => (L(), x(
      "div",
      {
        class: z(["custom-switch", {
          "custom-switch--active": e.modelValue,
          "custom-switch--disabled": e.disabled
        }]),
        onClick: r
      },
      [
        e.activeText || e.inactiveText ? (L(), x(
          "span",
          {
            key: 0,
            class: z(["custom-switch__text", { "custom-switch__text--active": e.modelValue }])
          },
          te(e.modelValue ? e.activeText : e.inactiveText),
          3
          /* TEXT, CLASS */
        )) : j("v-if", !0),
        a[0] || (a[0] = $(
          "div",
          { class: "custom-switch__core" },
          [
            $("div", { class: "custom-switch__handle" })
          ],
          -1
          /* HOISTED */
        ))
      ],
      2
      /* CLASS */
    ));
  }
}), cs = /* @__PURE__ */ Un(S2, [["__scopeId", "data-v-09573d1e"]]), C2 = { class: "dialog-footer-default" }, E2 = { class: "footer-left" }, T2 = { class: "footer-right" }, O2 = /* @__PURE__ */ Y({
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
  setup(e, { expose: t, emit: n }) {
    const o = e, r = n, s = P(o.modelValue), a = O(() => ["app-dialog", o.customClass].filter(Boolean).join(" "));
    ae(
      () => o.modelValue,
      (d) => {
        s.value = d;
      }
    ), ae(s, (d) => {
      r("update:modelValue", d);
    });
    const l = () => {
      r("close");
    }, i = () => {
      r("confirm");
    }, u = () => {
      s.value = !1, r("cancel");
    };
    return t({
      open: () => {
        s.value = !0;
      },
      close: () => {
        s.value = !1;
      }
    }), (d, f) => {
      const g = e_;
      return L(), ee(g, {
        modelValue: c(s),
        "onUpdate:modelValue": f[0] || (f[0] = (h) => Wt(s) ? s.value = h : null),
        title: d.title,
        width: d.width,
        "close-on-click-modal": d.closeOnClickModal,
        draggable: d.draggable,
        center: d.center,
        "show-close": d.showClose,
        "close-on-press-escape": d.closeOnPressEscape,
        "append-to-body": d.appendToBody,
        "align-center": d.alignCenter,
        "custom-class": c(a),
        onClose: l
      }, Ar({
        default: W(() => [
          Q(d.$slots, "default", {}, void 0, !0)
        ]),
        _: 2
        /* DYNAMIC */
      }, [
        d.$slots.header ? {
          name: "header",
          fn: W(() => [
            Q(d.$slots, "header", {}, void 0, !0)
          ]),
          key: "0"
        } : void 0,
        d.$slots.footer || d.showDefaultFooter ? {
          name: "footer",
          fn: W(() => [
            Q(d.$slots, "footer", {}, () => [
              $("div", C2, [
                $("div", E2, [
                  Q(d.$slots, "footer-left", {}, void 0, !0)
                ]),
                $("div", T2, [
                  K(fn, { onClick: u }, {
                    default: W(() => [
                      lt(
                        te(d.cancelText),
                        1
                        /* TEXT */
                      )
                    ]),
                    _: 1
                    /* STABLE */
                  }),
                  K(fn, {
                    type: "primary",
                    loading: d.loading,
                    onClick: i
                  }, {
                    default: W(() => [
                      lt(
                        te(d.confirmText),
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
}), Yc = /* @__PURE__ */ Un(O2, [["__scopeId", "data-v-a7e8a5d6"]]), I2 = { class: "select-confirm-content" }, k2 = { class: "mb-4" }, L2 = { class: "select-confirm-footer" }, A2 = /* @__PURE__ */ Y({
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
  setup(e, { expose: t, emit: n }) {
    const o = e, r = n, s = P(o.modelValue), a = P(o.defaultValue);
    ae(
      () => o.modelValue,
      (u) => {
        s.value = u, u && (a.value = o.defaultValue);
      }
    ), ae(
      () => o.defaultValue,
      (u) => {
        s.value && (a.value = u);
      }
    ), ae(s, (u) => {
      r("update:modelValue", u);
    });
    const l = () => {
      r("confirm", a.value);
    }, i = () => {
      s.value = !1, r("cancel");
    };
    return t({
      open: () => {
        s.value = !0, a.value = o.defaultValue;
      },
      close: () => {
        s.value = !1;
      }
    }), (u, d) => {
      const f = _c, g = bc;
      return L(), ee(Yc, {
        modelValue: c(s),
        "onUpdate:modelValue": d[1] || (d[1] = (h) => Wt(s) ? s.value = h : null),
        title: u.title,
        width: u.width,
        center: u.center,
        "show-close": u.showClose
      }, {
        footer: W(() => [
          $("div", L2, [
            K(fn, {
              type: "default",
              onClick: i
            }, {
              default: W(() => [
                lt(
                  te(u.cancelText),
                  1
                  /* TEXT */
                )
              ]),
              _: 1
              /* STABLE */
            }),
            K(fn, {
              type: "primary",
              loading: u.loading,
              onClick: l
            }, {
              default: W(() => [
                lt(
                  te(u.confirmText),
                  1
                  /* TEXT */
                )
              ]),
              _: 1
              /* STABLE */
            }, 8, ["loading"])
          ])
        ]),
        default: W(() => [
          $("div", I2, [
            $(
              "div",
              k2,
              te(u.message),
              1
              /* TEXT */
            ),
            K(g, {
              modelValue: c(a),
              "onUpdate:modelValue": d[0] || (d[0] = (h) => Wt(a) ? a.value = h : null),
              class: "w-full",
              placeholder: u.selectPlaceholder
            }, {
              default: W(() => [
                (L(!0), x(
                  ke,
                  null,
                  wn(u.options, (h) => (L(), ee(f, {
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
}), N2 = /* @__PURE__ */ Un(A2, [["__scopeId", "data-v-f4b56648"]]), et = {
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
    o === "center" ? E1({
      message: t,
      type: n,
      duration: r,
      showClose: s,
      grouping: !0,
      customClass: `app-toast app-toast--${n}`
    }) : P1({
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
};
function $2(e, t = !1) {
  return window.__TAURI_INTERNALS__.transformCallback(e, t);
}
async function bt(e, t = {}, n) {
  return window.__TAURI_INTERNALS__.invoke(e, t, n);
}
var Li;
(function(e) {
  e.WINDOW_RESIZED = "tauri://resize", e.WINDOW_MOVED = "tauri://move", e.WINDOW_CLOSE_REQUESTED = "tauri://close-requested", e.WINDOW_DESTROYED = "tauri://destroyed", e.WINDOW_FOCUS = "tauri://focus", e.WINDOW_BLUR = "tauri://blur", e.WINDOW_SCALE_FACTOR_CHANGED = "tauri://scale-change", e.WINDOW_THEME_CHANGED = "tauri://theme-changed", e.WINDOW_CREATED = "tauri://window-created", e.WEBVIEW_CREATED = "tauri://webview-created", e.DRAG_ENTER = "tauri://drag-enter", e.DRAG_OVER = "tauri://drag-over", e.DRAG_DROP = "tauri://drag-drop", e.DRAG_LEAVE = "tauri://drag-leave";
})(Li || (Li = {}));
async function P2(e, t) {
  await bt("plugin:event|unlisten", {
    event: e,
    eventId: t
  });
}
async function cr(e, t, n) {
  var o;
  const r = (o = void 0) !== null && o !== void 0 ? o : { kind: "Any" };
  return bt("plugin:event|listen", {
    event: e,
    target: r,
    handler: $2(t)
  }).then((s) => async () => P2(e, s));
}
const R2 = "snippets-code:developer-mode", qc = "snippets-code:frontend-diagnostics", M2 = 240, yo = "[REDACTED]", dr = (e) => e.replace(
  /("(?:[^"]*(?:token|password|secret|authorization)[^"]*)"\s*:\s*)("(?:\\.|[^"])*"|[^,\r\n}\]]+)/gi,
  `$1"${yo}"`
).replace(/\bBearer\s+[A-Za-z0-9._~+/=-]+/gi, `Bearer ${yo}`).replace(
  /\b(?:gh[pousr]_[A-Za-z0-9_]{12,}|github_pat_[A-Za-z0-9_]{12,})\b/g,
  yo
).replace(/(https?:\/\/)[^/\s@]+@/gi, `$1${yo}@`).replace(
  /([?&][^=&\s]*(?:token|password|secret|authorization)[^=&\s]*=)[^&\s]+/gi,
  `$1${yo}`
), Xc = (e) => {
  if (e === void 0) return;
  if (typeof e == "string") return dr(e);
  const t = /* @__PURE__ */ new WeakSet();
  try {
    return dr(
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
    return dr(String(e));
  }
}, F2 = () => {
  try {
    return globalThis.__TAURI_INTERNALS__?.metadata?.currentWindow?.label ?? "webview";
  } catch {
    return "webview";
  }
}, D2 = () => {
  if (typeof localStorage > "u") return [];
  try {
    const e = JSON.parse(localStorage.getItem(qc) || "[]");
    return Array.isArray(e) ? e : [];
  } catch {
    return [];
  }
}, Zc = () => {
  if (typeof localStorage > "u") return !1;
  try {
    return localStorage.getItem(R2) === "true";
  } catch {
    return !1;
  }
}, B2 = (e, t, n) => {
  if (!Zc() && e !== "warn" && e !== "error" || typeof localStorage > "u") return;
  const o = D2();
  o.push({
    timestamp: (/* @__PURE__ */ new Date()).toISOString(),
    level: e,
    windowLabel: F2(),
    message: dr(t),
    data: Xc(n)
  });
  try {
    localStorage.setItem(
      qc,
      JSON.stringify(o.slice(-M2))
    );
  } catch {
  }
}, V2 = () => Zc(), or = (e, t, n) => {
  B2(e, t, n), bt("frontend_log", {
    level: e,
    message: t,
    data: n === void 0 ? null : Xc(n)
  }).catch(() => {
  });
}, $e = {
  info: (e, t, ...n) => {
    or("info", e, t);
  },
  error: (e, t) => {
    or("error", e, t);
  },
  warn: (e, t) => {
    or("warn", e, t);
  },
  debug: (e, t) => {
    V2() && or("debug", e, t);
  }
}, x2 = { class: "confirm-choice-body" }, z2 = { class: "message-row" }, H2 = { class: "message-text" }, W2 = {
  key: 0,
  class: "hint-list"
}, U2 = { class: "confirm-footer" }, j2 = /* @__PURE__ */ Y({
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
  setup(e, { expose: t, emit: n }) {
    const o = e, r = n, s = P(o.modelValue), a = P(!1), l = O(() => {
      switch (o.type) {
        case "warning":
          return "!";
        case "danger":
          return "!";
        default:
          return "i";
      }
    }), i = O(
      () => `confirm-choice-dialog ${o.type === "danger" ? "delete-dialog" : o.type === "warning" ? "warning-dialog" : ""}`
    ), u = O(() => {
      const m = o.message || "", y = m.split(`
`).filter(Boolean), p = [];
      for (const _ of y) {
        const k = _.trim();
        if (/^[•·\-]\s*/.test(k)) break;
        k && p.push(_);
      }
      return p.join(`
`) || y[0] || m;
    }), d = O(() => {
      const y = (o.message || "").split(`
`).filter(Boolean), p = [];
      for (const _ of y) {
        const w = _.trim().match(/^[•·\-]\s*(.+)$/);
        w && p.push(w[1].trim());
      }
      return p;
    });
    ae(
      () => o.modelValue,
      (m) => {
        s.value = m;
      }
    ), ae(s, (m) => {
      r("update:modelValue", m);
    });
    function f() {
      v(), r("primary");
    }
    function g() {
      v(), r("secondary");
    }
    function h() {
      if (s.value = !1, a.value) {
        a.value = !1;
        return;
      }
      r("close");
    }
    function v() {
      a.value = !0, s.value = !1;
    }
    return t({
      open: () => {
        s.value = !0;
      },
      close: () => {
        s.value = !1;
      }
    }), (m, y) => (L(), ee(Yc, {
      modelValue: c(s),
      "onUpdate:modelValue": y[0] || (y[0] = (p) => Wt(s) ? s.value = p : null),
      title: m.title,
      width: "440px",
      "custom-class": c(i),
      onClose: h
    }, {
      footer: W(() => [
        $("div", U2, [
          m.secondaryText ? (L(), ee(fn, {
            key: 0,
            onClick: g
          }, {
            default: W(() => [
              lt(
                te(m.secondaryText),
                1
                /* TEXT */
              )
            ]),
            _: 1
            /* STABLE */
          })) : j("v-if", !0),
          K(fn, {
            type: m.type === "danger" ? "danger" : "primary",
            onClick: f
          }, {
            default: W(() => [
              lt(
                te(m.primaryText),
                1
                /* TEXT */
              )
            ]),
            _: 1
            /* STABLE */
          }, 8, ["type"])
        ])
      ]),
      default: W(() => [
        $("div", x2, [
          $("div", z2, [
            $(
              "span",
              {
                class: z(["type-indicator", `type-${m.type}`])
              },
              te(c(l)),
              3
              /* TEXT, CLASS */
            ),
            $(
              "div",
              H2,
              te(c(u)),
              1
              /* TEXT */
            )
          ]),
          c(d).length ? (L(), x("div", W2, [
            (L(!0), x(
              ke,
              null,
              wn(c(d), (p, _) => (L(), x("div", {
                key: _,
                class: "hint-item"
              }, [
                y[1] || (y[1] = $(
                  "span",
                  { class: "hint-dot" },
                  null,
                  -1
                  /* HOISTED */
                )),
                $(
                  "span",
                  null,
                  te(p),
                  1
                  /* TEXT */
                )
              ]))),
              128
              /* KEYED_FRAGMENT */
            ))
          ])) : j("v-if", !0)
        ])
      ]),
      _: 1
      /* STABLE */
    }, 8, ["modelValue", "title", "custom-class"]));
  }
}), ds = /* @__PURE__ */ Un(j2, [["__scopeId", "data-v-42ef6276"]]);
async function Jc() {
  try {
    return await bt("get_git_settings_command");
  } catch (e) {
    throw new Error(`获取 Git 设置失败: ${e}`);
  }
}
async function G2(e) {
  try {
    await bt("update_git_settings_command", { settings: e });
  } catch (t) {
    throw new Error(`更新 Git 设置失败: ${t}`);
  }
}
async function Qc() {
  try {
    return await bt("get_git_status_command");
  } catch (e) {
    throw new Error(`获取 Git 状态失败: ${e}`);
  }
}
async function K2(e = 10) {
  try {
    return await bt("get_git_records_command", { limit: e });
  } catch (t) {
    throw new Error(`获取 Git 记录失败: ${t}`);
  }
}
async function Y2(e, t) {
  try {
    await bt("restore_git_record_file_command", { commitHash: e, filePath: t });
  } catch (n) {
    throw new Error(`恢复 Git 记录文件失败: ${n}`);
  }
}
async function Ai() {
  try {
    return await bt("git_pull_command");
  } catch (e) {
    throw new Error(`Git pull 失败: ${e}`);
  }
}
async function Ni(e) {
  try {
    await bt("switch_git_branch_command", { branch: e });
  } catch (t) {
    throw new Error(`切换 Git 分支失败: ${t}`);
  }
}
async function q2(e) {
  try {
    await bt("remove_untracked_file_command", { filePath: e });
  } catch (t) {
    throw new Error(`删除未跟踪文件失败: ${t}`);
  }
}
async function X2(e) {
  try {
    return await bt("git_push_command", { message: e });
  } catch (t) {
    throw new Error(`Git push 失败: ${t}`);
  }
}
async function $i() {
  try {
    await bt("start_auto_sync_command");
  } catch (e) {
    throw new Error(`启动自动同步失败: ${e}`);
  }
}
async function Pi() {
  try {
    await bt("stop_auto_sync_command");
  } catch (e) {
    throw new Error(`停止自动同步失败: ${e}`);
  }
}
const Be = P("disabled"), nn = P(null), Zn = P(null), Yn = P(null), rr = P(!1);
let Mn = null, Fn = null;
const fs = P(!1);
let sr = 0, ps = 0;
const ed = P(0), td = P(Date.now());
let Eo = null, fr = null, pr = null, vr = null, mr = null;
const nd = (e) => {
  const n = (e instanceof Error ? e.message : String(e)).toLowerCase();
  return [
    "工作区未设置",
    "工作区未配置",
    "workspace not set",
    "workspace is not set",
    "workspace root"
  ].some((o) => n.includes(o.toLowerCase()));
}, od = (e) => {
  const n = (e instanceof Error ? e.message : String(e)).toLowerCase();
  return n.includes("插件 'git-sync' 未启用") || n.includes('插件 "git-sync" 未启用') || n.includes("plugin 'git-sync'") && (n.includes("disabled") || n.includes("not enabled") || n.includes("未启用"));
};
function rd() {
  const e = O(() => !nn.value || !nn.value.is_repo ? 0 : nn.value.changed_files.length), t = O(() => {
    if (ed.value, !Zn.value) return "";
    const l = new Date(Zn.value), i = td.value - l.getTime(), u = Math.floor(i / 6e4), d = Math.floor(u / 60), f = Math.floor(d / 24);
    return u < 1 ? "刚刚" : u < 60 ? `${u}分钟前` : d < 24 ? `${d}小时前` : f < 7 ? `${f}天前` : l.toLocaleDateString("zh-CN");
  }), n = O(() => {
    const l = Yn.value;
    if (!l || !l.enabled)
      return "Git 同步已禁用";
    if (e.value > 0)
      return `${e.value} 个文件待同步`;
    switch (Be.value) {
      case "syncing":
        return "同步中...";
      case "synced":
        return t.value || "已同步";
      case "has_changes":
        return `${e.value} 个文件待同步`;
      case "error":
        return "同步出错";
      default:
        return t.value || "已同步";
    }
  }), o = async () => {
    if (Yn.value && !Yn.value.enabled) {
      nn.value = null, Be.value = "disabled";
      return;
    }
    if (rr.value || Be.value === "syncing") {
      fs.value = !0, $e.debug("[GitStatus] 正在加载/同步中，标记待刷新");
      return;
    }
    rr.value = !0;
    try {
      const l = await Qc();
      nn.value = l, !l.is_repo || !Yn.value?.enabled ? Be.value = "disabled" : l.has_changes ? Be.value = "has_changes" : Be.value = "synced";
    } catch (l) {
      if (nd(l) || od(l)) {
        nn.value = null, Be.value = "disabled";
        return;
      }
      $e.error("[GitStatus] 获取 Git 状态失败", l), Be.value = "error";
    } finally {
      rr.value = !1, fs.value && (fs.value = !1, $e.debug("[GitStatus] 执行待刷新请求"), setTimeout(() => o(), 100));
    }
  };
  return {
    syncState: Be,
    gitStatus: nn,
    pendingFilesCount: e,
    lastSyncTime: Zn,
    gitSettings: Yn,
    isLoading: rr,
    refreshStatus: o,
    refreshSettings: async () => {
      try {
        const l = await Jc();
        Yn.value = l, l.enabled ? (Be.value === "disabled" && (Be.value = "idle"), l.last_sync_time && (Zn.value = l.last_sync_time)) : Be.value = "disabled";
      } catch (l) {
        $e.error("[GitStatus] 获取 Git 设置失败", l);
      }
    },
    formattedLastSyncTime: t,
    stateDescription: n,
    // 导出内部方法供外部调用
    _setSyncState: (l) => {
      Be.value = l;
    },
    _setLastSyncTime: (l) => {
      Zn.value = l;
    }
  };
}
function Z2() {
  Eo || (Eo = setInterval(() => {
    td.value = Date.now(), ed.value += 1;
  }, 6e4)), cr("git-pull-start", () => {
    Be.value = "syncing";
  }).then((e) => {
    fr = e;
  }), cr("git-push-start", () => {
    Be.value = "syncing";
  }).then((e) => {
    pr = e;
  }), cr("git-sync-complete", (e) => {
    e.payload.success ? (Be.value = "syncing", e.payload.last_sync_time && (Zn.value = e.payload.last_sync_time)) : Be.value = "error", Fn !== null && clearTimeout(Fn), Fn = setTimeout(() => {
      Fn = null, $e.debug("[GitStatus] git-sync-complete 防抖时间到，刷新状态"), Qc().then((t) => {
        nn.value = t, t.has_changes ? Be.value = "has_changes" : Be.value = "synced";
      }).catch((t) => {
        if (nd(t) || od(t)) {
          nn.value = null, Be.value = "disabled";
          return;
        }
        $e.error("[GitStatus] git-sync-complete 后刷新状态失败", t), Be.value = "error";
      });
    }, 1e3);
  }).then((e) => {
    vr = e;
  });
}
function J2(e, t = 300) {
  cr("git-workspace-changed", () => {
    sr++, $e.debug(`[GitStatus] 收到 git-workspace-changed 事件（累计: ${sr}），防抖刷新`), Mn !== null && clearTimeout(Mn), Mn = setTimeout(async () => {
      Mn = null, ps++;
      const n = sr - ps;
      n > 0 ? $e.debug(`[GitStatus] 防抖时间到，执行刷新（合并了 ${n} 个事件，累计收到 ${sr}，已执行 ${ps}）`) : $e.debug("[GitStatus] 防抖时间到，执行刷新"), await e();
    }, t);
  }).then((n) => {
    mr = n;
  });
}
function Q2() {
  Eo && (clearInterval(Eo), Eo = null), Mn && (clearTimeout(Mn), Mn = null), Fn && (clearTimeout(Fn), Fn = null), fr && (fr(), fr = null), pr && (pr(), pr = null), vr && (vr(), vr = null), mr && (mr(), mr = null);
}
function eS(e) {
  const t = String(e).toLowerCase();
  return t.includes("network") || t.includes("connection") || t.includes("tcp") || t.includes("无法连接") || t.includes("连接失败") || t.includes("网络") ? {
    type: "network",
    title: "网络连接失败",
    message: "无法连接到远程仓库，请检查网络连接",
    suggestions: [
      "检查网络连接是否正常",
      "确认是否需要代理才能访问 GitHub",
      "尝试使用 SSH 方式连接",
      "检查防火墙是否阻止了 Git 连接"
    ]
  } : t.includes("authentication") || t.includes("auth") || t.includes("token") || t.includes("credential") || t.includes("认证") || t.includes("权限") || t.includes("token") || t.includes("密码") || t.includes("身份验证") ? {
    type: "auth",
    title: "认证失败",
    message: "Git 认证失败，请检查 Token 是否正确",
    suggestions: [
      "确认 GitHub Personal Access Token 是否有效",
      "检查 Token 是否具有 repo 权限",
      "确认 Token 是否已过期",
      "尝试重新生成 Token 并更新设置"
    ]
  } : t.includes("conflict") || t.includes("冲突") || t.includes("merge") ? {
    type: "conflict",
    title: "合并冲突",
    message: "本地与远程存在冲突，需要手动解决",
    suggestions: [
      '点击"手动合并"逐个解决冲突',
      '或选择"强制拉取"以远程为准',
      '或选择"强制推送"以本地为准'
    ]
  } : t.includes("not found") || t.includes("repository") || t.includes("不存在") || t.includes("仓库") || t.includes("404") ? {
    type: "not_found",
    title: "仓库不存在",
    message: "远程仓库不存在或已被删除",
    suggestions: [
      "确认远程仓库 URL 是否正确",
      "检查仓库是否已被删除或重命名",
      "可以在 GitHub 上确认仓库是否存在",
      "如需重新创建仓库，请重新配置"
    ]
  } : t.includes("permission") || t.includes("access denied") || t.includes("访问被拒绝") || t.includes("权限不足") ? {
    type: "permission",
    title: "权限不足",
    message: "没有足够的权限访问或推送到此仓库",
    suggestions: [
      "确认 Token 具有仓库的写入权限",
      "检查是否被邀请加入仓库",
      "确认仓库是否是私有仓库"
    ]
  } : t.includes("git is not installed") || t.includes("git not found") || t.includes("git 未安装") || t.includes("找不到 git") ? {
    type: "git_not_installed",
    title: "Git 未安装",
    message: "系统未安装 Git，请先安装 Git",
    suggestions: [
      "下载并安装 Git: https://git-scm.com",
      "安装完成后重启应用程序",
      "确认 git 命令可以在终端中运行"
    ]
  } : t.includes("not a git repository") || t.includes("不是 git 仓库") || t.includes("不是有效的仓库") ? {
    type: "not_a_repo",
    title: "不是 Git 仓库",
    message: "当前目录不是 Git 仓库",
    suggestions: [
      "需要先初始化 Git 仓库",
      "或重新配置指向已有的 Git 仓库"
    ]
  } : t.includes("no remote") || t.includes("没有远程") || t.includes("未配置远程") ? {
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
function tS(e) {
  switch (e) {
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
const nS = { class: "settings-panel" }, oS = { class: "panel-header" }, rS = { class: "panel-title" }, sS = { class: "panel-content" }, aS = { class: "sync-status-panel__left" }, lS = { class: "sync-status-icon" }, iS = { class: "sync-status-info" }, uS = { class: "sync-status-label" }, cS = { class: "sync-status-detail" }, dS = {
  key: 1,
  class: "pending-count"
}, fS = { class: "sync-status-panel__right" }, pS = { class: "sync-pending-files-header" }, vS = { class: "sync-pending-files-list" }, mS = { class: "file-name" }, gS = { class: "settings-section-title" }, hS = { class: "summarize-section" }, yS = { class: "summarize-label" }, bS = { class: "summarize-label-title" }, _S = { class: "summarize-label-desc" }, wS = { class: "summarize-input-wrapper" }, SS = {
  key: 0,
  class: "summarize-section"
}, CS = { class: "summarize-input-wrapper" }, ES = { class: "summarize-section" }, TS = { class: "summarize-label" }, OS = { class: "summarize-label-title" }, IS = { class: "summarize-label-desc" }, kS = { class: "summarize-input-wrapper" }, LS = { class: "summarize-section" }, AS = { class: "summarize-label" }, NS = { class: "summarize-label-title" }, $S = { class: "summarize-label-desc" }, PS = { class: "summarize-input-wrapper" }, RS = {
  key: 1,
  class: "summarize-section transparent-input"
}, MS = { class: "summarize-label" }, FS = { class: "summarize-label-title" }, DS = { class: "summarize-label-desc" }, BS = { class: "summarize-input-wrapper" }, VS = { class: "ml-2 text-sm text-panel" }, xS = { class: "settings-section-title" }, zS = { class: "summarize-section" }, HS = { class: "summarize-label" }, WS = { class: "summarize-label-title" }, US = { class: "summarize-label-desc" }, jS = { class: "summarize-input-wrapper flex gap-2" }, GS = { class: "git-records-section" }, KS = { class: "git-records-head" }, YS = {
  key: 0,
  class: "git-records-list"
}, qS = { class: "git-record-main" }, XS = ["title"], ZS = { class: "git-record-time" }, JS = { class: "git-record-meta" }, QS = {
  key: 0,
  class: "git-record-files"
}, eC = ["title", "onClick"], tC = { class: "git-record-file-status" }, nC = { class: "git-record-file-name" }, oC = {
  key: 0,
  class: "git-record-more"
}, rC = {
  key: 1,
  class: "git-records-empty"
}, sC = /* @__PURE__ */ Y({
  name: "GitSync",
  __name: "index",
  setup(e) {
    const { t } = qr(), {
      syncState: n,
      pendingFilesCount: o,
      formattedLastSyncTime: r,
      gitStatus: s,
      refreshStatus: a,
      refreshSettings: l
    } = rd(), i = O(() => s.value?.changed_files ? s.value.changed_files : []), u = (B) => {
      switch (B) {
        case "syncing":
          return t("settings.gitSync.status.syncing") || "同步中";
        case "synced":
          return t("settings.gitSync.status.synced") || "已同步";
        case "has_changes":
          return t("settings.gitSync.status.hasChanges") || "有待同步";
        case "error":
          return t("settings.gitSync.status.error") || "同步出错";
        case "idle":
          return t("settings.gitSync.status.idle") || "空闲";
        case "disabled":
          return t("settings.gitSync.status.ready") || "就绪";
        default:
          return t("settings.gitSync.status.ready") || "就绪";
      }
    }, d = P({
      enabled: !1,
      user_name: "",
      user_email: "",
      token: "",
      remote_url: "",
      pull_on_start: !0,
      auto_sync: !1,
      auto_sync_delay: 1
    }), f = P(!1), g = P(!1), h = P(!1), v = P(!1), m = P({
      title: "",
      message: "",
      primaryText: "",
      secondaryText: "",
      type: "info"
    }), y = P(!1), p = P(null), _ = P("main"), k = P(!1), w = P(""), T = P([]), I = P([]), E = P(!1), H = P(!1), V = P(!1), J = P(null), G = O(() => (p.value?.available_branches?.length ? p.value.available_branches : ["main"]).map((U) => ({
      label: U === "main" ? `${U}（主分支）` : U,
      value: U
    }))), Z = O(() => p.value ? `${p.value.reason}
当前分支：${p.value.current_branch || "未知"}；建议选择：${p.value.recommended_branch}` : "请选择要同步的分支"), le = O(() => {
      const B = T.value.map((U) => `- ${U}`).join(`
`);
      return `目标分支会覆盖以下未跟踪文件。选择“使用目标分支文件”会先删除这些本地未跟踪文件，再切换到 ${w.value || "目标"} 分支。

${B}`;
    }), Te = O(() => {
      const B = J.value;
      return B ? `确认将文件恢复到这条记录之前的版本？

- 文件：${B.file.file_path}
- 记录：${B.record.short_hash} ${B.record.message}

当前文件内容会被覆盖，恢复后会出现在待同步列表中。` : "";
    }), R = (B) => {
      const U = eS(B), Se = tS(U.type), b = String(B).replace(/^Error:\s*/, "");
      let C = `${Se} ${U.title}

${U.message}`;
      b && !U.message.includes(b) && (C += `

详情: ${b.slice(0, 100)}${b.length > 100 ? "..." : ""}`), et.msg(C, "error", "top-right"), console.group(`🔧 Git 错误解决建议 - ${U.title}`), console.log(b), console.log("建议步骤:"), U.suggestions.forEach((A, q) => {
        console.log(`${q + 1}. ${A}`);
      }), console.groupEnd();
    }, M = (B) => {
      v.value = !1;
    }, D = (B) => {
      p.value = B, _.value = B.recommended_branch || "main", y.value = !0;
    }, re = (B) => {
      const U = String(B), Se = "would be overwritten by checkout:", b = U.indexOf(Se);
      if (b < 0) return [];
      const C = U.slice(b + Se.length), A = C.search(/Please move|Aborting|Error:/);
      return (A >= 0 ? C.slice(0, A) : C).split(/\r?\n/).map((fe) => fe.trim()).filter((fe) => fe && !fe.startsWith("Please ") && !fe.startsWith("Aborting"));
    }, se = async (B) => {
      try {
        return await Ni(B), await a(), et.msg(`已切换到 ${B} 分支`, "success", "bottom-right"), !0;
      } catch (U) {
        const Se = re(U);
        if (Se.length > 0)
          return w.value = B, T.value = Se, y.value = !1, k.value = !0, !1;
        throw U;
      }
    }, pe = async (B) => {
      f.value = !0;
      try {
        await se(B);
      } catch (U) {
        $e.error("[GitSync] 切换分支失败", U), R(U);
      } finally {
        f.value = !1;
      }
    }, Ae = async () => {
      const B = w.value, U = [...T.value];
      if (!B || U.length === 0) {
        k.value = !1;
        return;
      }
      f.value = !0;
      try {
        for (const Se of U)
          await q2(Se);
        k.value = !1, T.value = [], w.value = "", await Ni(B), await a(), et.msg(`已切换到 ${B} 分支`, "success", "bottom-right");
      } catch (Se) {
        $e.error("[GitSync] 处理未跟踪文件后切换分支失败", Se), R(Se);
      } finally {
        f.value = !1;
      }
    }, Fe = (B) => {
      if (B.branch_selection) {
        D(B.branch_selection);
        return;
      }
      B.success ? B.has_conflicts ? $e.info("[GitSync] Pull 检测到冲突，由全局对话框处理") : B.files_updated === 0 ? et.msg(t("settings.gitSync.alreadyUpToDate"), "success", "bottom-right") : et.msg(t("settings.gitSync.pullSuccess", { count: B.files_updated }), "success", "bottom-right") : et.msg(t("settings.gitSync.pullFailed"), "error", "top-right");
    }, we = async () => {
      E.value = !0;
      try {
        I.value = await K2(10), H.value = !0;
      } catch (B) {
        $e.error("[GitSync] 加载 Git 记录失败", B), R(B);
      } finally {
        E.value = !1;
      }
    }, qe = (B, U) => {
      J.value = { record: B, file: U }, V.value = !0;
    }, je = async () => {
      const B = J.value;
      if (B)
        try {
          await Y2(B.record.commit_hash, B.file.file_path), et.msg("文件已恢复，请检查待同步记录后再推送", "success", "bottom-right"), J.value = null, await a();
        } catch (U) {
          $e.error("[GitSync] 恢复 Git 文件失败", U), R(U);
        }
    }, Xe = async () => {
      try {
        $e.info("[GitSync] 开始加载 Git 设置");
        const B = await Jc();
        d.value = B, $e.info("[GitSync] Git 设置加载成功", B);
      } catch (B) {
        $e.error("[GitSync] 加载 Git 设置失败", B), et.msg(t("settings.gitSync.loadFailed"), "error", "top-right");
      }
    }, De = async () => {
      try {
        await G2(d.value);
      } catch (B) {
        throw $e.error("[GitSync] 保存 Git 设置失败", B), B;
      }
    }, ye = async (B) => {
      f.value = !0;
      try {
        await De(), et.msg(t(B ? "settings.gitSync.enabledSuccess" : "settings.gitSync.disabledSuccess"), "success", "bottom-right");
      } catch {
        et.msg(t("settings.gitSync.saveFailed"), "error", "top-right"), d.value.enabled = !B;
      } finally {
        f.value = !1;
      }
    }, ut = async (B) => {
      f.value = !0;
      try {
        await De(), et.msg(t(B ? "settings.gitSync.pullOnStartEnabled" : "settings.gitSync.pullOnStartDisabled"), "success", "bottom-right");
      } catch {
        et.msg(t("settings.gitSync.saveFailed"), "error", "top-right"), d.value.pull_on_start = !B;
      } finally {
        f.value = !1;
      }
    }, mt = async (B) => {
      f.value = !0;
      try {
        await De(), B ? await $i() : await Pi(), et.msg(t(B ? "settings.gitSync.autoSyncEnabled" : "settings.gitSync.autoSyncDisabled"), "success", "bottom-right");
      } catch {
        et.msg(t("settings.gitSync.saveFailed"), "error", "top-right"), d.value.auto_sync = !B;
      } finally {
        f.value = !1;
      }
    }, ct = async () => {
      f.value = !0;
      try {
        await De(), d.value.auto_sync && (await Pi(), await $i());
      } catch {
        et.msg(t("settings.gitSync.saveFailed"), "error", "top-right");
      } finally {
        f.value = !1;
      }
    }, _t = async () => {
      $e.info("[GitSync] 手动 Pull 开始"), g.value = !0;
      try {
        const B = await Ai();
        Fe(B);
      } catch (B) {
        $e.error("[GitSync] 手动 Pull 失败", B), R(B);
      } finally {
        g.value = !1;
      }
    }, dt = async (B) => {
      const U = String(B || "main");
      g.value = !0;
      try {
        if (!await se(U)) return;
        y.value = !1;
        const b = await Ai();
        Fe(b);
      } catch (Se) {
        $e.error("[GitSync] 切换分支后 Pull 失败", Se), R(Se);
      } finally {
        g.value = !1;
      }
    }, ft = async () => {
      $e.info("[GitSync] 手动 Push 开始"), h.value = !0;
      try {
        const B = await X2("Manual sync");
        B.success ? et.msg(t("settings.gitSync.pushSuccess", { count: B.files_pushed }), "success", "bottom-right") : et.msg(t("settings.gitSync.pushFailed"), "error", "top-right");
      } catch (B) {
        $e.error("[GitSync] 手动 Push 失败", B), R(B);
      } finally {
        h.value = !1;
      }
    };
    return Me(async () => {
      await Xe(), await l(), await a();
    }), (B, U) => {
      const Se = _c, b = bc, C = X_;
      return L(), x("div", nS, [
        j(" 固定标题 "),
        $("div", oS, [
          $(
            "h3",
            rS,
            te(B.$t("settings.gitSync.title")),
            1
            /* TEXT */
          )
        ]),
        j(" 可滚动内容 "),
        $("main", sS, [
          j(" 当前同步状态：同面板内左右分栏 "),
          c(d).enabled ? (L(), x(
            "div",
            {
              key: 0,
              class: z(["sync-status-panel", `sync-status-panel--${c(n)}`])
            },
            [
              j(" 左侧：状态摘要 "),
              $("div", aS, [
                $("div", lS, [
                  c(n) === "syncing" ? (L(), ee(c(Vi), {
                    key: 0,
                    class: "git-sync-icon",
                    theme: "outline",
                    size: "24",
                    strokeWidth: 3
                  })) : c(n) === "synced" || c(n) === "idle" || c(n) === "disabled" ? (L(), ee(c(Ud), {
                    key: 1,
                    theme: "outline",
                    size: "24",
                    strokeWidth: 3
                  })) : c(n) === "has_changes" ? (L(), ee(c(Wd), {
                    key: 2,
                    theme: "outline",
                    size: "24",
                    strokeWidth: 3
                  })) : c(n) === "error" ? (L(), ee(c(jd), {
                    key: 3,
                    theme: "outline",
                    size: "24",
                    strokeWidth: 3
                  })) : j("v-if", !0)
                ]),
                $("div", iS, [
                  $(
                    "div",
                    uS,
                    te(u(c(n))),
                    1
                    /* TEXT */
                  ),
                  $("div", cS, [
                    c(n) === "syncing" ? (L(), x(
                      ke,
                      { key: 0 },
                      [
                        lt(
                          te(B.$t("settings.gitSync.status.syncing")),
                          1
                          /* TEXT */
                        )
                      ],
                      64
                      /* STABLE_FRAGMENT */
                    )) : c(n) === "has_changes" ? (L(), x(
                      "span",
                      dS,
                      te(c(o)) + " " + te(B.$t("settings.gitSync.status.pendingFiles")),
                      1
                      /* TEXT */
                    )) : c(n) === "synced" || c(n) === "idle" ? (L(), x(
                      ke,
                      { key: 2 },
                      [
                        lt(
                          te(c(r) ? `${B.$t("settings.gitSync.status.lastSync")}: ${c(r)}` : B.$t("settings.gitSync.status.waitingSync")),
                          1
                          /* TEXT */
                        )
                      ],
                      64
                      /* STABLE_FRAGMENT */
                    )) : c(n) === "error" ? (L(), x(
                      ke,
                      { key: 3 },
                      [
                        lt(
                          te(B.$t("settings.gitSync.status.error")),
                          1
                          /* TEXT */
                        )
                      ],
                      64
                      /* STABLE_FRAGMENT */
                    )) : c(n) === "disabled" ? (L(), x(
                      ke,
                      { key: 4 },
                      [
                        lt(
                          te(B.$t("settings.gitSync.status.checking")),
                          1
                          /* TEXT */
                        )
                      ],
                      64
                      /* STABLE_FRAGMENT */
                    )) : j("v-if", !0)
                  ])
                ])
              ]),
              j(" 右侧：待同步文件列表（仅在有变更时显示） "),
              c(n) === "has_changes" && c(o) > 0 ? (L(), x(
                ke,
                { key: 0 },
                [
                  U[16] || (U[16] = $(
                    "div",
                    { class: "sync-status-panel__divider" },
                    null,
                    -1
                    /* HOISTED */
                  )),
                  $("div", fS, [
                    $(
                      "div",
                      pS,
                      te(B.$t("settings.gitSync.status.pendingFilesTitle")) + " (" + te(c(o)) + ") ",
                      1
                      /* TEXT */
                    ),
                    $("div", vS, [
                      (L(!0), x(
                        ke,
                        null,
                        wn(c(i), (A) => (L(), x("div", {
                          key: A,
                          class: "sync-pending-file-item"
                        }, [
                          $(
                            "span",
                            mS,
                            te(A),
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
              )) : j("v-if", !0)
            ],
            2
            /* CLASS */
          )) : j("v-if", !0),
          j(" 第一部分：Git 配置 "),
          $(
            "div",
            gS,
            te(B.$t("settings.gitSync.status.section.config")),
            1
            /* TEXT */
          ),
          j(" 启用 Git 同步 "),
          $("section", hS, [
            $("div", yS, [
              $(
                "div",
                bS,
                te(B.$t("settings.gitSync.enabled")),
                1
                /* TEXT */
              ),
              $(
                "div",
                _S,
                te(B.$t("settings.gitSync.enabledDesc")),
                1
                /* TEXT */
              )
            ]),
            $("div", wS, [
              K(c(cs), {
                modelValue: c(d).enabled,
                "onUpdate:modelValue": U[0] || (U[0] = (A) => c(d).enabled = A),
                "active-text": B.$t("common.on"),
                "inactive-text": B.$t("common.off"),
                disabled: c(f),
                onChange: ye
              }, null, 8, ["modelValue", "active-text", "inactive-text", "disabled"])
            ])
          ]),
          j(" 同步选项（Git 必要配置在个人中心填写，此处仅保留开关与同步操作） "),
          c(d).enabled ? (L(), x(
            ke,
            { key: 1 },
            [
              c(s)?.available_branches?.length ? (L(), x("section", SS, [
                U[17] || (U[17] = $(
                  "div",
                  { class: "summarize-label" },
                  [
                    $("div", { class: "summarize-label-title" }, "同步分支"),
                    $("div", { class: "summarize-label-desc" }, " 主分支固定为 main，检测到其他分支时可在这里切换 ")
                  ],
                  -1
                  /* HOISTED */
                )),
                $("div", CS, [
                  K(b, {
                    "model-value": c(s).branch || "main",
                    class: "summarize-input !w-40",
                    disabled: c(f) || c(g) || c(h),
                    onChange: pe
                  }, {
                    default: W(() => [
                      (L(!0), x(
                        ke,
                        null,
                        wn(c(s).available_branches, (A) => (L(), ee(Se, {
                          key: A,
                          label: A === "main" ? `${A}（主分支）` : A,
                          value: A
                        }, null, 8, ["label", "value"]))),
                        128
                        /* KEYED_FRAGMENT */
                      ))
                    ]),
                    _: 1
                    /* STABLE */
                  }, 8, ["model-value", "disabled"])
                ])
              ])) : j("v-if", !0),
              j(" 启动时自动拉取 "),
              $("section", ES, [
                $("div", TS, [
                  $(
                    "div",
                    OS,
                    te(B.$t("settings.gitSync.pullOnStart")),
                    1
                    /* TEXT */
                  ),
                  $(
                    "div",
                    IS,
                    te(B.$t("settings.gitSync.pullOnStartDesc")),
                    1
                    /* TEXT */
                  )
                ]),
                $("div", kS, [
                  K(c(cs), {
                    modelValue: c(d).pull_on_start,
                    "onUpdate:modelValue": U[1] || (U[1] = (A) => c(d).pull_on_start = A),
                    "active-text": B.$t("common.on"),
                    "inactive-text": B.$t("common.off"),
                    disabled: c(f),
                    onChange: ut
                  }, null, 8, ["modelValue", "active-text", "inactive-text", "disabled"])
                ])
              ]),
              j(" 自动同步 "),
              $("section", LS, [
                $("div", AS, [
                  $(
                    "div",
                    NS,
                    te(B.$t("settings.gitSync.autoSync")),
                    1
                    /* TEXT */
                  ),
                  $(
                    "div",
                    $S,
                    te(B.$t("settings.gitSync.autoSyncDesc")),
                    1
                    /* TEXT */
                  )
                ]),
                $("div", PS, [
                  K(c(cs), {
                    modelValue: c(d).auto_sync,
                    "onUpdate:modelValue": U[2] || (U[2] = (A) => c(d).auto_sync = A),
                    "active-text": B.$t("common.on"),
                    "inactive-text": B.$t("common.off"),
                    disabled: c(f),
                    onChange: mt
                  }, null, 8, ["modelValue", "active-text", "inactive-text", "disabled"])
                ])
              ]),
              j(" 自动同步延迟（仅在启用自动同步时显示） "),
              c(d).auto_sync ? (L(), x("section", RS, [
                $("div", MS, [
                  $(
                    "div",
                    FS,
                    te(B.$t("settings.gitSync.autoSyncDelay")),
                    1
                    /* TEXT */
                  ),
                  $(
                    "div",
                    DS,
                    te(B.$t("settings.gitSync.autoSyncDelayDesc")),
                    1
                    /* TEXT */
                  )
                ]),
                $("div", BS, [
                  K(C, {
                    modelValue: c(d).auto_sync_delay,
                    "onUpdate:modelValue": U[3] || (U[3] = (A) => c(d).auto_sync_delay = A),
                    min: 1,
                    max: 60,
                    disabled: c(f),
                    onChange: ct,
                    class: "!w-32"
                  }, null, 8, ["modelValue", "disabled"]),
                  $(
                    "span",
                    VS,
                    te(B.$t("settings.gitSync.minutes")),
                    1
                    /* TEXT */
                  )
                ])
              ])) : j("v-if", !0),
              j(" 第二部分：同步操作 "),
              $(
                "div",
                xS,
                te(B.$t("settings.gitSync.status.section.sync") || "同步操作"),
                1
                /* TEXT */
              ),
              j(" 手动同步按钮 "),
              $("section", zS, [
                $("div", HS, [
                  $(
                    "div",
                    WS,
                    te(B.$t("settings.gitSync.manualSync")),
                    1
                    /* TEXT */
                  ),
                  $(
                    "div",
                    US,
                    te(B.$t("settings.gitSync.manualSyncDesc")),
                    1
                    /* TEXT */
                  )
                ]),
                $("div", jS, [
                  K(c(fn), {
                    type: "primary",
                    size: "small",
                    loading: c(g),
                    onClick: _t
                  }, {
                    default: W(() => [
                      lt(
                        te(B.$t("settings.gitSync.pull")),
                        1
                        /* TEXT */
                      )
                    ]),
                    _: 1
                    /* STABLE */
                  }, 8, ["loading"]),
                  K(c(fn), {
                    type: "primary",
                    size: "small",
                    loading: c(h),
                    onClick: ft
                  }, {
                    default: W(() => [
                      lt(
                        te(B.$t("settings.gitSync.push")),
                        1
                        /* TEXT */
                      )
                    ]),
                    _: 1
                    /* STABLE */
                  }, 8, ["loading"])
                ])
              ]),
              $("section", GS, [
                $("div", KS, [
                  U[19] || (U[19] = $(
                    "div",
                    null,
                    [
                      $("div", { class: "summarize-label-title" }, "Git 记录"),
                      $("div", { class: "summarize-label-desc" }, "最近 10 条提交，可查看同步状态并恢复单个文件")
                    ],
                    -1
                    /* HOISTED */
                  )),
                  K(c(fn), {
                    size: "small",
                    loading: c(E),
                    onClick: we
                  }, {
                    default: W(() => U[18] || (U[18] = [
                      lt(" 刷新 ")
                    ])),
                    _: 1
                    /* STABLE */
                  }, 8, ["loading"])
                ]),
                c(I).length ? (L(), x("div", YS, [
                  (L(!0), x(
                    ke,
                    null,
                    wn(c(I), (A) => (L(), x("div", {
                      key: A.commit_hash,
                      class: "git-record-item"
                    }, [
                      $("div", qS, [
                        $(
                          "span",
                          {
                            class: z(["git-record-state", { synced: A.synced }])
                          },
                          te(A.synced ? "已同步" : "待推送"),
                          3
                          /* TEXT, CLASS */
                        ),
                        $("span", {
                          class: "git-record-message",
                          title: A.message
                        }, te(A.message), 9, XS),
                        $(
                          "span",
                          ZS,
                          te(A.time),
                          1
                          /* TEXT */
                        )
                      ]),
                      $("div", JS, [
                        $(
                          "span",
                          null,
                          te(A.short_hash),
                          1
                          /* TEXT */
                        ),
                        $(
                          "span",
                          null,
                          te(A.author),
                          1
                          /* TEXT */
                        )
                      ]),
                      A.files.length ? (L(), x("div", QS, [
                        (L(!0), x(
                          ke,
                          null,
                          wn(A.files.slice(0, 6), (q) => (L(), x("button", {
                            key: `${A.commit_hash}-${q.file_path}`,
                            class: "git-record-file",
                            type: "button",
                            title: `${q.status} ${q.file_path}`,
                            onClick: (fe) => qe(A, q)
                          }, [
                            $(
                              "span",
                              tC,
                              te(q.status),
                              1
                              /* TEXT */
                            ),
                            $(
                              "span",
                              nC,
                              te(q.file_name),
                              1
                              /* TEXT */
                            )
                          ], 8, eC))),
                          128
                          /* KEYED_FRAGMENT */
                        )),
                        A.files.length > 6 ? (L(), x(
                          "span",
                          oC,
                          " +" + te(A.files.length - 6),
                          1
                          /* TEXT */
                        )) : j("v-if", !0)
                      ])) : j("v-if", !0)
                    ]))),
                    128
                    /* KEYED_FRAGMENT */
                  ))
                ])) : (L(), x(
                  "div",
                  rC,
                  te(c(E) ? "正在加载记录..." : c(H) ? "暂无 Git 记录" : "点击刷新查看最近 10 条提交"),
                  1
                  /* TEXT */
                ))
              ])
            ],
            64
            /* STABLE_FRAGMENT */
          )) : j("v-if", !0)
        ]),
        j(" 自定义确认框 "),
        K(ds, {
          modelValue: c(v),
          "onUpdate:modelValue": U[4] || (U[4] = (A) => Wt(v) ? v.value = A : null),
          title: c(m).title,
          message: c(m).message,
          "primary-text": c(m).primaryText,
          "secondary-text": c(m).secondaryText,
          type: c(m).type,
          onPrimary: U[5] || (U[5] = (A) => M()),
          onSecondary: U[6] || (U[6] = (A) => M()),
          onClose: U[7] || (U[7] = (A) => M())
        }, null, 8, ["modelValue", "title", "message", "primary-text", "secondary-text", "type"]),
        K(c(N2), {
          modelValue: c(y),
          "onUpdate:modelValue": U[8] || (U[8] = (A) => Wt(y) ? y.value = A : null),
          title: "选择同步分支",
          message: c(Z),
          options: c(G),
          "default-value": c(_),
          "confirm-text": "切换并同步",
          "cancel-text": "取消",
          loading: c(g),
          onConfirm: dt,
          onCancel: U[9] || (U[9] = (A) => y.value = !1)
        }, null, 8, ["modelValue", "message", "options", "default-value", "loading"]),
        K(ds, {
          modelValue: c(k),
          "onUpdate:modelValue": U[10] || (U[10] = (A) => Wt(k) ? k.value = A : null),
          title: "切换分支前需要处理未跟踪文件",
          message: c(le),
          "primary-text": "使用目标分支文件",
          "secondary-text": "取消",
          type: "warning",
          onPrimary: Ae,
          onSecondary: U[11] || (U[11] = (A) => k.value = !1),
          onClose: U[12] || (U[12] = (A) => k.value = !1)
        }, null, 8, ["modelValue", "message"]),
        K(ds, {
          modelValue: c(V),
          "onUpdate:modelValue": U[13] || (U[13] = (A) => Wt(V) ? V.value = A : null),
          title: "恢复文件",
          message: c(Te),
          "primary-text": "确认恢复",
          "secondary-text": "取消",
          type: "warning",
          onPrimary: je,
          onSecondary: U[14] || (U[14] = (A) => V.value = !1),
          onClose: U[15] || (U[15] = (A) => V.value = !1)
        }, null, 8, ["modelValue", "message"])
      ]);
    };
  }
}), aC = /* @__PURE__ */ Un(sC, [["__scopeId", "data-v-3ce37232"]]), lC = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: aC
}, Symbol.toStringTag, { value: "Module" }));
/*!
  * vue-router v4.5.0
  * (c) 2024 Eduardo San Martin Morote
  * @license MIT
  */
var Ri;
(function(e) {
  e.pop = "pop", e.push = "push";
})(Ri || (Ri = {}));
var Mi;
(function(e) {
  e.back = "back", e.forward = "forward", e.unknown = "";
})(Mi || (Mi = {}));
var Fi;
(function(e) {
  e[e.aborted = 4] = "aborted", e[e.cancelled = 8] = "cancelled", e[e.duplicated = 16] = "duplicated";
})(Fi || (Fi = {}));
const iC = Symbol("");
function uC() {
  return ie(iC);
}
const cC = ["title"], dC = {
  key: 2,
  class: "git-badge"
}, fC = {
  key: 3,
  class: "git-time"
}, pC = { class: "ml-2" }, vC = {
  key: 0,
  class: "git-badge ml-1"
}, mC = /* @__PURE__ */ Y({
  __name: "TitlebarGitStatus",
  props: {
    variant: { default: "inline" }
  },
  setup(e) {
    const t = uC(), {
      syncState: n,
      pendingFilesCount: o,
      formattedLastSyncTime: r,
      refreshStatus: s,
      refreshSettings: a,
      stateDescription: l,
      gitSettings: i
    } = rd(), u = O(() => !!i.value?.enabled && n.value !== "error"), d = () => {
      t.push("/config/category/settings?tab=gitSync");
    };
    return Me(async () => {
      Z2(), J2(s), await a(), await s();
    }), Ds(() => {
      Q2();
    }), (f, g) => {
      const h = U_;
      return u.value && f.variant === "inline" ? (L(), x("div", {
        key: 0,
        class: z(["git-status-indicator", `git-status-${c(n)}`]),
        title: c(l),
        onClick: d
      }, [
        c(n) === "syncing" ? (L(), ee(c(Vi), {
          key: 0,
          class: "icon git-sync-icon",
          theme: "outline",
          size: "16",
          strokeWidth: 3
        })) : (L(), ee(c(Fa), {
          key: 1,
          class: "icon",
          theme: "outline",
          size: "16",
          strokeWidth: 3
        })),
        c(n) === "has_changes" ? (L(), x(
          "span",
          dC,
          te(c(o)),
          1
          /* TEXT */
        )) : j("v-if", !0),
        c(r) && c(n) !== "syncing" ? (L(), x(
          "span",
          fC,
          te(c(r)),
          1
          /* TEXT */
        )) : j("v-if", !0)
      ], 10, cC)) : u.value ? (L(), ee(h, {
        key: 1,
        onClick: d
      }, {
        default: W(() => [
          K(c(Fa), {
            theme: "outline",
            size: "16",
            strokeWidth: 3,
            class: "align-middle"
          }),
          $(
            "span",
            pC,
            te(f.$t("titlebar.gitSync")),
            1
            /* TEXT */
          ),
          c(n) === "has_changes" ? (L(), x(
            "span",
            vC,
            te(c(o)),
            1
            /* TEXT */
          )) : j("v-if", !0)
        ]),
        _: 1
        /* STABLE */
      })) : j("v-if", !0);
    };
  }
}), gC = /* @__PURE__ */ Un(mC, [["__scopeId", "data-v-c2d8aaac"]]), hC = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: gC
}, Symbol.toStringTag, { value: "Module" }));
export {
  bC as activate
};
